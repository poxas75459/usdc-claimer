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
    "EGJD9sSXnkK38cDJUPAH3DGoH3HeYqhN8TtVqkGKnTJFy6EJFLU1K4MkBGnrUyxAsW77dS3QGAHFtXZaY9edPbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57MiHm9GaNE8fdmWkCzEJDNkfBLqyZcxG8bBx4eX7KmSMPPgjr17FjzXh3xP24LZPZxmkL8TLXLZhvCEkByw5zCs",
  "key1": "3bWzJ55NQhuLp9sLB1xtBesXsmmqRxAmR6r3nVZCfz47rcSw8rzbu4BshKFyjfUcsZQ6zZsASXorD3nDd1tXi2Kn",
  "key2": "4grKEMZzzFJ98KVCw9Qx8SfZZvQcqkCuoH8vd7WzUztrBrNb1pWdXu5tQx6bx3RgELiuppCRGU9hc7sWm75pV18i",
  "key3": "XKii3NJwvHQo6YqPRJ1V3py416icYnPKo9DCwv5XuDzGc9DKdZUnjrRD8ACgWj6wSwjzhnMSbAu1sr2SRm9eYTb",
  "key4": "5KjcDuxMXo12HbPd62wXK28NRCyYdavaygMKT2qY7LiU4JAWuazUcMUCkoJ9dSBxyWYrsnPpp8t2gsaWL3se84eK",
  "key5": "5Ah55sBiHH8iM6BoSbN6gyXYLofqRTB9Ks85EUNEphUN1AAsW7W3wSpqMmNReYQckgkuF1BBqpDPjgJvddWZp1Hv",
  "key6": "28AMkTZvBDazy5WtY11sCfD3jZ38b25YdX6nUEtRp7FFNGRW9HA3ojRaKyzRQ3NNgDkDTe8i92rTYC5oqjEPHsXx",
  "key7": "43zErXoU8GGpEvH8NJZE5DACJyT6G8xaoVdJ9oFnKoBotKjqGhBmsdwUNRxmYKL6DjcqNqgujAcRuuqwYHN723Vp",
  "key8": "4BvcLwqHnYaEmNYEqdND6KoUFXreenE9efjcQYQKTo8JiSXBaJrFHUXbSo2J9ZFDtjDuz8x33w4UfPn3651k62jB",
  "key9": "3WBNzMgVdcJEqfSz4wjdRzEzZXP5pG3pommCBR55napbfYukEwxZzZ8TvdR2HTSNmPBfiywLPPboBiiEDDQowGbA",
  "key10": "2NXVY2ecFzuPHQVRkcoAe6q1GRywFPJ6xvzWCfsEWesJarr8iY1eDq4ViPrHF6p9RXMCxCJRdJ5moHThxNj1rFVZ",
  "key11": "KES9SnEg7EabMciEY3staiafGobXPxzHFs9ruN2e3LDwNzGygfCnsj9gu91woa4V3cRSFgNca8rouwmZxojJkLR",
  "key12": "5SKU4LzztvNyeeZU9CA8tQXoSBvHUpaA1YL5qhQRYwwoWToEHFq8FvmEjC4DQ6ox14HuDyVDjRiy97otch1GKhoQ",
  "key13": "3XJPK1QyGVczXDCf9aQdocFXAY1CQomp2AhEHUYs6FyXfXP4JqQSysdSBcUyxUvqeGC4rSZXMZWzAYWBJFsqa1TB",
  "key14": "2RxNnx4n9Kr9pRMLcMNuC6GxyjRvMs21MZP4sLRtn8C1mapLJKyiiFkxD9PwxTNvddtDR399nZZMjpcdP8UALVyP",
  "key15": "61Ksrq4dFdjYfy3ks2p5tM4Mt9rWZtq9DxWhevZdxnZv2nccQms9xojAsDHVXYTqo2pq7aznfUTR2GPcUaMvof7X",
  "key16": "56xWhWLEQr7xg6qBDzdJYmvQbaJrZ4xeSVBXARxRXnW8SqEx9fi4wo3V6L5ToDcEM6hw2sXmnezStWNZXWtimUZV",
  "key17": "26sR1NDD4rWtVE7sKSE2NdDvMu1nMtdc6PmvXoZVDksyPKbRqPXRhpPzx54aPe7A8MeAQuzTdrs3mXBB2Muu8Ri8",
  "key18": "5CtURJ9jmhTSg9HuPEv862WkRSXMVyfbZzFUhA6MkUCNtwMChhx5uMP1Fahe4YP6E8HD9rHktrftjVcQ4GQetZdS",
  "key19": "BDvEA5AX5sU34wuYskpVRVpyD2VsyG4gMe1JVpmjrA7oHhRvzYMtbcSMFrRXsExMd9zUQQBRbWSazsUMD6hV1Fz",
  "key20": "4o1nwJst9x8WXS5sNss6hCpY3AJqooGMsDV6uXbkfVeS5AAhTjqJWTMnByqY1modytiRJLPgsMLtJP88a8ES4hzE",
  "key21": "4MpQpXZyWGjRHaDP8P15PLhMaZo6YjYDEnmopKjeRaqJJSCF8mZd4dVz2H5nViutrU1xoyDnKVTEzUpCexMtGKvw",
  "key22": "3ZxxQEWnxjKJZcrw78yezSqaz3pjtSNi5w1MxcwK9DSMdsBrUwqBTWsphYrd4CwNndwZkR7cVXnKvdg5mNGpq857",
  "key23": "5HgardKuJDe18fvVJzPhZkrgXe3xJAkWNbu8P8aJ2NjtNeXbzgfrxgESVnknHXDmKgjWggmHTRAcXFdL7p8E4Ce8",
  "key24": "4c7W6txg5pergTkDoKfKSTsiyqiUcjYHcf9WvVZtPVnBE42Bnekq9snEif6rvgLEEHex5rr4hSXw2kEnY5pNfYNL"
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
