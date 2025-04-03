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
    "wfw1dzVes7y293cEkb9s1m1g1c3ZNpMfqAuerwMkrb3x3yciWGzk7jBrt5sFVbehLcJNCUh5gZzExpnCn41YJZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24KYNDVfXvqrZDnkSyWDj4t5NXhojParDydLKpp7NogwJT4xgU4Es9hVFgsRHLHJ5NHrTuNdg9JyUoW8WFaTG51a",
  "key1": "2SNPAmE2gVe3vhYvem7WbazNGd8jfzp24ComcBx4nC7jqGptPisXjCDdQNMSbbp9Rj4aneCZtjX7G3T3K4TKee9K",
  "key2": "2JxE4hbjeu39dSKii1Z1UuKhq811EMiepSJ2ojYKJUYsDW8KcU145xCXrBQhKAz9E9pMD39jo6e2nSU3CM6d5MzU",
  "key3": "2u4k5fQqnwJEH7zdnQ6iv6JpKVmkXQiVKUsuPmE2sptXxqKzgKzfTAgkQ6zYspHcFH1nqiSVZ8pLqbHnsJny1HdU",
  "key4": "5FRYV8riUDhaAgXG8KDYTZ7tNYLSNXh1AzZNHZCoAMY5gn9ocTuLTHrD7w2SxiHbFPqyU4LAzc5LYMimQLSfBkkG",
  "key5": "3n4Q1v3hwcTMogMxYaRnr9Fo49dBaXvTRg2DSyogjvMJtbfuwyaTcZL9kRSL44Eaco1Ya6qpkgfc9z3xtxxkdUPV",
  "key6": "3X8icsm94wp6acD4svUgVj7NpLprUZxk3hnzbumxu5cRERXWX35wtR788QoebYMNJ5qJos9zEda6Z4KqJ3nNdcXf",
  "key7": "4CqsXGikcBXEReNMWXwZ2h3Bb1cus3kURd2QcRC3RyKM3doFxNcPc9DBq9utwaq2XHaWAnaUbFv7ZDTEdbQU5uSY",
  "key8": "3Djtp3Q2BcHigiLuDidzsxboYXMYRNcBQ5yLMTG5K4BZ1x6Se2MD8F8mVJZpDvMPPbVSRsZGJugMNxPUQriT93z9",
  "key9": "BuKGdms87PsS3turr4ti6P7dgxgJSXZQ1vBRDpssQAuHM3thWaY5dTxt4JgXowCdaui3EoyGzNP1LSD3ypCi2VM",
  "key10": "2yS4JtrQjd6zzr2qNuUQNWnQ3SsNQZY9JPyMRjVC85stRLWU8Chhz7qGtSejhpkEe1G4iHM949wBP6GfaNKux6hD",
  "key11": "5ZBm7Sn1aNGLvseaP8vR4waLEfXPTQ2V4vhWFdCxihqAn6m3imkePRKXVmF7pQDTeYKoBvJgJj8iF7RCqi95CNRT",
  "key12": "348EaeLPGTxB44cYdLyTkcdmA5R25xUEm61DPz1VSZ4qsUmSPK3YPJqDb3nzjvKTi6Ko5Essy7x1JWqrva3usoH2",
  "key13": "4zhRfSRmbf3kLhsDWaHo4WTme5w4NLnHhioZeYzXd549eTnfgP2KomkaZsEap3aaL37cxfG3e5mxeQrkW9rHHBha",
  "key14": "4X8WLr46345y1H9DH1Eo9tT1mxjkkJwwLHHyF94LUHr6X6UgzZ2fnkCS8ubmUpDFNGgorkox3Xgzdt8tZzooCy6Y",
  "key15": "5qSKhqDMG663WfH8s2Wnc1N9ULBm1EpQszZvXc1hpDkUr28ZyfmCHr4FoRuGsXRmoviNoX4MYz6oyZHUPqJdoX98",
  "key16": "61TNEiPHB7NsumcBsZmJbWkRjYMMvUMq1ZVrZZKbEdZFviNqcB9PRHBDVU4fqN5v4XMFJLkozGF25ua1qugoNXrv",
  "key17": "2k3D7JbUB9oZKq8W1xmzNQV3LnA3m9JaPAn363e5sguVMa4NTjLXod73nRnYFhFdADvmXTp1jRQEQgEksJfr1Uk7",
  "key18": "5mtssduLC8E5Jq6adiN4L9AvppHyzuJtgnCkUN32nUGoMdbxnZC5Jw3cQ1dFV9QUsv4iUcNnkqnmpNKZicAFVngH",
  "key19": "4o9NarsDCht37gr8UXYUbDWvtKh3nYDw5mAB7XrBTv71gcvBbfMKN6iB9rwDuKpNfRhVUgpp9k4C8FaTgs4FnxSM",
  "key20": "6kz86iSZVcRkDZNFYSzZ2BQnqHgJS6Qqj6Yhq4LuRrWgDneAQFaGiBEQucn1auidKkGWZ4UYdSX3vXB2TnbMfvr",
  "key21": "2WDdz63ddLQhY2puTAHXPnHPHpnq1wdnG8STx2HC5pbDyqgCGzQffw2WwW9nSWAu5EpECW8VDLsgycisZ8WtbZrt",
  "key22": "4jKEt3su2rpF1NBCuQokrqqfmS7nsi4PdQfjz25iMXK4QYXVRKYUyxvK1b7VMj723St51SDQLsGno1RBqvo4pctg",
  "key23": "46UDQbJemsCYHw1E6C19v8j71NUjp6zHS94i8TBqrPH2DTeZyGcKpNTQrcc6E1L13zHWvitaHBK9nJVUNRaAPjyX",
  "key24": "5a1jVDF2t7BqZnWN2gP3X2mUFZjJy7sfLqLSmTNyhFDjTkY4zGqNUsDMq1vHkjGiVjMwS1RUN3PjBMsZ9K4p7Fc",
  "key25": "4ozFu4bMEzDVws1WGcxEqjs7XbUsYq4uvh1uKfFqTmjuUkKRFXJs6owQLs1QBWTan4Nt4VqckN5x7PTmWJrTztCr",
  "key26": "4z4XfDkgPdZy76RviPCji735QChp7wVcEV39wPt9t2t3oN5mRCy47uCi45QPB4Z3NCVUtK2i4KDHniprxvzjLdh9",
  "key27": "5VmyXMMxE9DsLPC6G61RBrTX6frSABvTKeYykiFuQAbhV1CxgUYr2UAfUZbnCP81s8cP5U34dxorVi1UEPkk1jeu"
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
