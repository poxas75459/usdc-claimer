/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5FQqGvgpXXHKtuvyPserfXdpsURDdSihhonCcWzmrTgdtrUsL6E1JXs6MpRn91MfzNZqe2mpxmnArEYrkjHG2eQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SomKWBgv4HqzNKPodajz5Koii6QbYRjRy7DpAAKh2vA55pCnCo5W3AnyrAWbgYKy3w1hcU6925utt2Rn8rqN1Fv",
  "key1": "4V5bjJ59KKzhx8MC6rP9WWesY3xZXhSzEx5RbYmhmWEGr55fX3zgKyES4v4nnzT1baXaHgjyA1vSYCC4JEEoc7b2",
  "key2": "5rfQY4Yc7Bvn5sPvDwi8tMA7VpNwNP4pFoZJpuEn8u5pX9HzAtB1eHiRaBTsFgAACM49zsDKRLabhteUieCRT4t4",
  "key3": "2oAcSZr4MeVJSXeve9fZndB4MYvkY1HAqjwxWZG21K6nQQJuP4K7zVs1iGYXa8p5WFg6fi3be2i6GeesAwa4FHFK",
  "key4": "5uYS8wP7fJBVwkxVHsdMgBdQinKz1ugz9kYRDDDM8pKwmFx6UFmbZv43Yng6LzhRJeSUMgQE9fNKLoknupecfKtP",
  "key5": "5wLnCuTEU1kbtXanttmRo6gMJe9LzCucyP9gDGKCt4KKe5UjUe5HYYoBGX2BS3dJkky5ThWcUPJDU3WivNcEccxp",
  "key6": "usVgXK51QBLvLPzUijToRcUWJpkjpy8mG7doaubUM1ADg2MDe9x4o4gBM1e57g3TVdR9CZ3XcKwsQEnm9CxKD71",
  "key7": "5cbEMCnF2YmxgFKj9cny3XM3ACLbnq5wQHb5GCU2x46GBdymAsHMSGw4qQvjBJJ9DRD5GfcAStgRK6yNzF52SqCH",
  "key8": "2fmngZJEoNTMz4K9YkFGJLueMEXP4fEhs9B9xThb1dPouJLC7VW9vZU9ubV4xQpmn1TTGEoM2KQayp9JBsMBRgcs",
  "key9": "49NKCBfTzvhgyrSFp4spPzsDKWq5jauGaDC8GcjxAJep8JDT2aTB1H9SudZ8xu45N6DYa4n9xM6PwdJqvhT7Nszy",
  "key10": "3FRQsKgLX3wiaSHGzx9YonJSXZondTZAbhAE6AZTyF6zvR5HhLY6Pzj81STMDKQmT1f1qb1WnLzpawDiZfReMLyV",
  "key11": "tvjJftN5LopH8G5DpVM73fTbzDQTAf1cLXiSwWhjkyj5MDmK1k4BJknjQ4fz6juNMNCcmUMwK3PULFCJyF7kXZE",
  "key12": "3JMSunaSQ3BMzu2Fd7QpZHqZadDqUyVGQmAiJdcda4Qm3kzmLmyf4yA4mzgNc4XgNLB8P4YSTmW85tvrREeNAyv7",
  "key13": "4hZjT9NgS2yh65cQpAsNc7fLCYDnRhsDt3jNp5mah7yRd31dhXYaG5KqmYiPY74KJ1V5p772tdUK6xaVtRF6uDkW",
  "key14": "2qVdFH584cVpPL9wk8M1kVs3sFfiZxckLk4UcRmzXFqaA2tfJkRRS3MHYe5xfKReSXFgZM7RpP8yrWbTZthrsqFd",
  "key15": "4xuoAUibL8HX9t4cMHLbmMEnwZA3KdU7CbrN2wtiXR3Zd6eeBchi1p9udTD6x33eS6aR1AexXRva2suHuTySEGjW",
  "key16": "TMatTKPLENMDBU6sSWSRdLkrTceJPXxwB9pTnhn9gmDzGwB1sMPC66WguE92t1ddruWMHNWvv1iDib2cpmRedUA",
  "key17": "5S3NgN9iUcf82oH8imsjYMN7jcv6NLadngwCJZFW7cEhX746axrnxaUfocTMopsiDWHs1dN6XFWpEgcz1t6ssZMv",
  "key18": "2uKuvGZHpBMNdAUMxV6igtPMkFK52SzTJYxjwdYyvotRxd2rN1TPg4FJ1wc7xydUpmQsXRMiBKxviwfJer8YfbTz",
  "key19": "3Gbqq8ThoLRY4iGhrQ1qrQ9v1MWrtXHLwRydzMca86DicyxXAuS2w1TAHjVYcLnd34nDTU833YG3JzPsPnr2AEei",
  "key20": "2FJFM5XmYJaH44o1aHrEGWsL3muub31tfaFRqcqajkFXvXmvRezk9hUWa5gkxboNci5Dom9jKziYiXRRqtkVyzhv",
  "key21": "5CSHjhwuvdgdrSMpoPdV7ixbW4n49LamKjomFA7KdZRpGTkZ3q66pEN7ups6eQiJCQkffNAtSEvCjYEfLEwtfL9",
  "key22": "53fSMF9vNC9Y8WhxKikm48TgWhxqdZvZBaMdrH6wAjnJ6oRCrTcdyv14ELAdoNTKXkiEV2gPodsK1zCqiaoubf5c",
  "key23": "2qn1YSzG9ywiMo5K6hwiyjeUnTanmjhYJQi2DQRP479nDhbGJqg27xKbyx79BzCGyK2brmF37MipPtQM3b7p4CCM",
  "key24": "2QawoxGmWon2uA2hyWdaFAuCpUmkrYZuHMRWsJLhD8GEzGnXpBzJa42Bie2KPEnTQBeyhbXegdmMV4HudnVk58k4",
  "key25": "5LUzDcLsezow4G8pcRkVTnqdPsE9kg9Fs5XLgaTSPTX11Y3L1ALsrX238rCkHgLk4VXRMDz4r4EtRGGJf9gUaLk8",
  "key26": "3pzhkbW9vrzrDQSQkBhYMiydSmo3kZBdmNX1FPwEgkERvibAFXhRcFJbWcM4ZDCVgVEkS7P2KPs4XXTRWaXtdXM1"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
