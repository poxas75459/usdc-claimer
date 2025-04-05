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
    "3n2D9LrrVfMJuog8WqxkpZktdQ2UFx67ZfnFo3Vw31E9xh1fKX5aMKojyHnKZZFHf45P2FCZ1edb83t2DiMmoKRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zVVS886bdupKAp2qqnbBSP8pG27fLnVGJq83hLfNkDggMCMVJpn3EME1WNYRJTUXwKJGzpfQLY4hpqTHqckbBro",
  "key1": "2m5ip3gzZiP2S63uBVwPPtfcYs5kbSoSKwVwUKQet9kzrUNJR1S9ok3CuJzTk42SmYUoaHDQm24UMHxkVWuiWMMo",
  "key2": "5TSYG2N8zwhHiqqGt6xAv1SjmbRwCAta7x4jPgwFHEnPR9oF6k95SEbqiYLq9wqXmYYmJN9oeaN4eC2tnsDCSBnC",
  "key3": "2XMD142VmJWZn3H83kSnxAz6GcsLp77Bd8C2vodYjYuLwcggZAQk7yFv3DEB81ckZpgLtRWWLrMGZCqNJ7sAoUPs",
  "key4": "3vMHtMzEirpavecno6CVRFY9X4ta41WNkRkJzth8CRKMcf5BrmsecSdNag2TmuDixUcbJhsKv3bSj5mbx3q3RyTD",
  "key5": "47WzZr5fp7bbhWAFLAVZjPH46otsigLhqkiLwCFiAaULUVwKEg4HKCk8q5XUztSKS5Ap3tHesmt6xFpjReyVL15c",
  "key6": "fjwNz5mbbeLZ1ems6pUYekZhNpb6yz7bXapvnAYyX79r9XSpkj9N678ecKVrF36F47KtGqUSo4aPemVKRv6bza5",
  "key7": "HU2NrcSdxGMthHPUz4sXyUtdc3c1Y33DxYfD5WKu4JzguFQEtKvJQaRvp3hBLkpYcCa2PLsT6NbXZXy4qFs8gse",
  "key8": "qNA4MeDSMBb9t5b5KWxa4kSw6ExBJN2wE1MdzTbFYGuMFV8S6psGv1fZToMWyokfzn9Bk4THk3dLovD9vJbpuYC",
  "key9": "3v6KLy4Ngquf1surqqBiRNZZDSqUbEi3iRGnkJfuLTA6ohWp3qwTLxUxGnCADjdrxvWCe7C22XmrA8ePEJVa9pip",
  "key10": "1mxjS2AnjT2HSQiZr8jEyJveXRGiLJigYqeP2oSB6ZV5Bg442VCBqYqCc5XognFpwrCyycDSEoAKFt4MaYiuab",
  "key11": "5B9vGSm3r4pDfUaxj6sybHMMm6tVFmbHEjUJ9BErp3baMQf1jas2pva75H3VijEAMXhKgpQMsA66ZH6XfAEMcLcE",
  "key12": "2xxdMLSgj6TMkd6E53HCMMHmsrJpN6ypNnJkVXRyVCXr7gH4HdbXQjCPQxeL9gahqnEXbs9DwusKkPShfvu2FUGf",
  "key13": "Dtrw7hnAG43ArAA46ZDvJxvpW47W7eCBphXj5uscfYjAcdn46L8gFKSg5XfkcXg8tKdF239MnYJeDUCwqKQaXH1",
  "key14": "BJKWPeuSxR6m5kC81iDUcKH6tigRfXKSqKENijGAx3mh6fRxATceWU8j3vch6YJR8ZaDsSfEq3jgWJ159J5UNBi",
  "key15": "3Mh1CxrzNscPiWqH9qWx4cNn3VrAtAt25fW5pAFK5QpyuH5iEoatWFYodQ1hqBjY9LyLxGw9ahjKJPMFout55LfS",
  "key16": "2JkRAWca2f4JwHYbMXprEDgFAovTVZzXHZd948uigqjJVKT4HXP6acrtvhckZT39oYJ6C6bH24wpn9hLWk897TKn",
  "key17": "5tRnEeuFtNmXhbgivwaWpyVGLwP32y2sFQNqMpi8VVQ53L11isKopF9HGbBLSKkFqAyjvxHJ6zgJrWVwtuFN8jtR",
  "key18": "pH1y8WiDQDrN1kLsdVvyMyrAZgaBHZShJa3SWr2gSymeeF2n6ucTPtYBYS9Yd9B6q2az4Ua7rZmECkknTPNS1S4",
  "key19": "2iPJhqPx9Lr2Cw5kVc42japMejGhJvJ5MAWm9c555NKbsv7RBc3jrDmFHjWRXmsWZpufRZWK7Z99TRJwsWNjRiVZ",
  "key20": "57MNybbYb6pHfWdrXHCRwebh2xnvdS1Pnfn2VRvGcWCbNi5ZMLUpdZuMeETCs7gfMxWy7bJ4FFf8jxqv9YxEioDm",
  "key21": "2xyD4tAzKLvQVTee7EeXCfWt6yGAJ6N9oj3vHL8pstvnJnczPjG2C4goMKXTUHFtRsUjbQuHLZiMpgSRD6rzga2X",
  "key22": "4ggQWm2gVCojExoALtHywWrPdJukYzduvR8RLBwW1Q3iARCTY4eih5wWjrfNWa5irV71vUHGYaJ7Dumt56KEp6jx",
  "key23": "2V5Eafd3vGvHbUAaM3HXwzs6Mg71h41cvRkzJ4Npk3fXLnByEwH1aaKywFehHACCB85BxhKFH6yYDrfwBo8Wkcx8",
  "key24": "3BChQE36HBR2kGSbdv4BTh9E535QLjtxWsSPhv6CVbWcUfQAD1w2yndR3Pfz4c5t9jrJcUnzQChHkpqweLg3kyDR",
  "key25": "3Jt7r5iz5NbczCW45LiiLV5o5VSH73pbYTuHGPAi7nagCM4qcBDMaBiTLKNEmwH3hg2p2QxQrtZ8PvqMyRKj3ZXP",
  "key26": "2w1abcV1PJBBKaJUMdQSMGbESrKBDPKvpDs7dJUKXoe5bXifCzSbAHch7bzUwW3DB47NDZXzJ5TT1zf9WW1Sgzhn",
  "key27": "A5U8SXy8D3RUZzcj9f5ve2n49gWc3m5SaqQx3feV9EBLf7YGpTYLjQz4AvE77jhst3nPWdAWFscBQNZQmfkiDS6",
  "key28": "5Lmp6j9V8oD1T3RN2e8omDHeKx39f6jpSC9DVfQF1nMB4H2jK23KNzU2kZqongmuZuBxgNq5Q1jjNxBHV83rWPvX",
  "key29": "2HQQAvZLfNYKpa41m3RrKYHVgo9VcubvjdAXGTDxdnMN7DWKNGT2UAfFeQbdR9quvxmcZQe59XvEJ576UiM4zVfs",
  "key30": "56NBxUqkZBG9TsBS96bRex9V25pQFZ1ERtr6yHrZkvfpr9pvfzzPjHm8kakZFM6AjDgPmzYtehzsNKpucvYvwNY8",
  "key31": "2D3qhGz2o7o5MbTdESZVn2chEGooXgCeV1fvnPFuXgcj4Zz7RFhG52HJYknDESGPfoGLbctH3z4SAhSM15yUckZt",
  "key32": "49DrzFZdm9wyKRFPR18ZuyCfsUQytbZnvSW6fHCfftp5s4gKPmWDijfNM6tWJMxqm1csyBZGSrzdm4x9eihp94R",
  "key33": "3uorsdgaD45cMyZPp5wCiMwFqDfLkd8X7RHjbnJH4ou1nLMfRujg6f2J7LGWYSJdMoJMzRmjpF6A1hc1745bcicg"
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
