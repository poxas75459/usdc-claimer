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
    "2QoTxMn9zXKLWfzWqfzanunB8XcCHvnugLLq3J3eZmatsNnhxKmiZavApV46MMhk5YHBfx5ugsDaef9eHTiLpkxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PS9ueqb3mLchG1eKVAzqBnZ9CaGyc7zZvR3i4MzKPgRG1ZLtQS16aQEKaWfgYWejJGmN51NUmUWeVKymkahJvtW",
  "key1": "3WKfor2QTZpi8BCY7N8jSJ4LzVnkoS2GPEYiaCbunTLc4dUTvRc2RZ3H6QJnxFGp9ntsqZi1mNusB5oucJ3uhXwN",
  "key2": "39y4d454gHWvCmE1y7PaP8QufEnfvpNnuSk9tE7Pe3pmoKZoP8T7aYyPsRi2xUehyUphqsWoL47YAnQkRpGK7drE",
  "key3": "4NzBYw438XRb7jVfxCeZMsam1iNp1kfzytyyoQuS2qF4FPVQMNRFXq7ZxeBiR8Nya31CiA7nnBvZFSpL172QpWEj",
  "key4": "5FHeMNopTeVJWEWCLtqDUczG9EZFELBtJrLxuB8KrbGKEwwGbJbVdHZT8gbALp5AVHY9MQ7bcnQxwfPuYTGez5nD",
  "key5": "3ZXuaBrTpKRNwfeyvXFkPvs2ifFvxCS1ujCucHAfU9Q7od6m3kRcfdE3Fckx9J6N75ZNhGdAeYfD5fcowwGJDYnA",
  "key6": "T5YASrhcHBrU2sCfZqVz5nwjKdcAhGZsHxTX88YQuZtvRZuxDaXgtbsCh5SNnUWmUNsNSwTCvy62oUzHB1EUTHg",
  "key7": "4fxiPyveDDkeWrXHtTAmJpxxgEtaGEz43Wk11ugvjqz9FHnq5siMHDQDGtPaHtSU5ZU3BrZzfDJEKXCNEST4WaKd",
  "key8": "4UAvo5XqenEwqtGJqyBftgBESEWdmFoS7as8v23QRYkwWZ7S29yzNZqfKNPtpd1aNKoin5zwPENWKX7jaZBMzs93",
  "key9": "23tfgfmPMVtpa81wje1VVryML1uVwezx8p978CQs3U7FPBapCEvgbfk3hCGn4qS5Rnm6iTdtfGpCFNQkjLed6gQ7",
  "key10": "3pzWUdXgMVqqcc6Tg1SBG7fa2aPUJZw7oTQvVC62aJWFLTTRfCBQAyNzLB6VdYje1fiNgW22rzz4z16DfxEdqXHN",
  "key11": "5QXx4MP67VEu7pAKkkMgVVKSqTSEqX1wyXNX69isTa9VKVHS3txSrM9hBhBmFV3sqLMKGFG8ox6S11DfSKtYcP8P",
  "key12": "4YKdHdP6XG8BBys82mZTakHej3XnP4Bw7zP5sEBgTrszqBZ8LDXHXkWW7nmTof1CZEr9eUMEJRd7P5vX92iKEYyQ",
  "key13": "5x6CHaVz1yFHZPrSpregjCfMsqGGW8XPJ3qM34u89i6ud2CKQiGaeUAyGaD1TfGdW2oV57erLHr1R5AYNgCWvCpE",
  "key14": "3U2cGa8tst6i2RM4wzrSGtFEiZLShLHkfGP2KpMnMUecXoM1QmC6rGkqFQZjS34cs94NwfLSzuCjCdfgqYVSZKea",
  "key15": "3BQQZsdo1agnY7VKKWiEH8F6yGpCrKxgxZYNcrsmoUuA3pwcGW126S2MGViwhSPm1THsMSNHodLLb9joNeEdEL39",
  "key16": "2MR7NDkyMXFB7zETMZ2twgJekFtYcA1FQ9L84LYSNFGtFoFF7AeU9qf328QW8w3i245ao6NXurNRmoZgFriz2cuh",
  "key17": "5v1BHnwwkLnuVRu2qu6kKWJ4R1VyQeXsCY9cFyohxcGT2D1ZEaP4aUb3GiAP14ZBHCiGuaG5vn1QcvGuod5pys4Q",
  "key18": "4rmAGAzXHDagCTHv9KJNqs9beTJLn8smyzSWMy7dPccu6ZZGXQNLAfBKy6KFMQzrUDv4tR91bCnwyxgCGn3whM7a",
  "key19": "2QUxkP7ieFLveUPVnWdT9Nhvcvsdh12vxXaudatptobLkJ43kvwyomU91GKQwevYGKnxC6Lcp8mVPWtmsdLMbYLs",
  "key20": "4YX5AkXnedESTa4JS1QDxod4A6Bpr81uUz7s52g1RiTiYuW5KJ5WwZivno1mT1FZWFbS7WmZxwnWiSMPi4nBojAD",
  "key21": "mtYFf9dd7AgAyaw3WZ8RVA9i8Vedo9KzrKVWHw7SikLijQEk4tP1sXwae5CrmGYvjd3c4WNTGDhrFGQcPkarcqQ",
  "key22": "J7w3ohXpM5NrCPWokPkCMbmRjdyL49DRbke8nNk3zHXgx3oNEwofGZdgbHxVTE1CABxiLaXDy9SoKXi89u2ThgD",
  "key23": "3Z2eJSPxf9wPUQJgsrPr8BT5CPYqmeXLYDv2gCigfwR2tLCBKBn8DXKLuayJVxopNgh16Bx5XFdgDmypjPvxNNx5",
  "key24": "3vtqUUiqowtohNPg92AuCzKSGSwrwq7wpTorPuQ1Bs9YNsGH8bx9RFceBbdqFEzDnZACrwTEMXvsT4YwRuYiLuym",
  "key25": "fDV9a697t41fApTP8JVDJNVpYwDx7br6wio5huKsYxVoQ5mTPYdJ79pKfSqPsF7ECtLYWi5tiKqLkCManBi6Sjz",
  "key26": "3dpWzZKkJYAD2zapYrt4mKbbBbS5suoTjt96j4AYxQhBktF1uHaQ6PoZyoqvBghp3n3xC2265eyLJgicK9n9c4qf"
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
