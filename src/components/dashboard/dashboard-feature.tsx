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
    "2FVd8o2kUtMPV7dYp721pCkKBg6kHM2jLHAQADvHUe7pakEVZEbHEH2EyWgbhwMpLHLtb6hmf93EjVa5iHNSeMv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M57vBy3wXMbboDoyeLoDkTDf258Gh7kcTZWL8yu8YPp4g7tbJfKvzHGTEhsQJyzC3W3m8TNJvw7d7X5TnaqLSzT",
  "key1": "2XST2A9xQhPkmwJ9qLDy2c8sbsSoahGoDE4kGiB3kLjXxsf9YCvrEM6kyoJtjkosPbPVWetNVc8qQH2UamrLFmvP",
  "key2": "3ivxkvKE68nLDt9HtKAwipoNRiyemkFexs4RTw1UP9sQbvezvsRhkMhyrbehAh3sP7T7SKZZpazFBRcRk6LEDNoG",
  "key3": "2bHFfn6kG9UfdE4wyGnxmLJbfrkqbdhV27o24CMnbJ8xoiLMsEp4gg8mK7xKpoKRojbZu2fyFXqqSF7VWj76i6FW",
  "key4": "2oqgzDUcS4jqqY9h5GBBYKBfG69cd8KABdujeKYaRWK2xvKJ9hW8KeX3FpdsuzLZq9Bicp55RaZ9m5r2ztoEroiV",
  "key5": "24zhZUFbjwfvQ1jXMjo9bBGgXmgjYPHHFhb5ebMGraEBSn5jwBPYjEjNyDXUK9rtfm5m4zpmhHpysZ1ZEmueoqa8",
  "key6": "3h2mmpYomTjEFLA2ub4fSqjz3bFfa9BU7ReHqDM4WCT5ukUTQFpYjD9Y7uufCkec8bURJ9Tkosd6EbjaCkecpMbN",
  "key7": "r2ZRcA58GBnU6KJFeCXdGWKuutDpq3D29uBdqBorFHEhbfdFuaKZQrAosUZ9ratGZ4xe5kJHw5md95AgcdVexhg",
  "key8": "4MSzPyhMTvR2t26fsJg55CZBHZLSF4W1wvdjkmYBohQMw45JswyjgknGwFtEsaeBLny8FiJYqWkS9F8ts352CWVS",
  "key9": "3VTe5dskJgKDPEjZt5xAGZJkLLrLCHJmcgw9XZyb2ivyfdAyiSeM4kJe9emCX9KVEX3qNEcai7XbmgdaaB2FyAmK",
  "key10": "4KvU1T5bkdQ1AxbsPHxdtSw59yYuoFGSybQ7ZDkku7u2v6DJtJeaaTKpKVkLjHp8uAHHycs2cvtX7XzodDibL2Qs",
  "key11": "748dSmJVDPsiQbDwJWcn8gbERM7cTigynZxstF2pkmCxPZUcdQVf1YCEtNbrWCDa7WRTRqPCssi5gfuiMB6pBZb",
  "key12": "5yDZaGRL29YorEPp6ufCPhy6gxfMmdsiiEtgimR4HTQi8AgTmyquzDahzuV2fLKzszXhqFLLLa9guouMi8rXaEKK",
  "key13": "5TXLe2ftGW72BzFdCX8vHUMDdLY1B5nnEC1wjgvnWz2KXoUyz6CHeFbtQDH2XWL9HzVjFYNEbd9DohnrTMMyogog",
  "key14": "EuKiAECkRXvz6gQgtHczQyn8FTufFRozBahbwpYLHFxZYcX9MgQsQ6mwnvTgztQkfF3d8DX9QfhxMZroq455EFo",
  "key15": "33vsMatxWhrhYEJu2ZN95rVYwpxcJ99UX5ZnDohNyLFZVS65WABQEgFGCibGP7mRt1u2B91pkCgUBvsRr7BGCepE",
  "key16": "5z4hDFvf4yM6PaYAQvGhfhcaZkvgn7pct6j2CMTX7DxR4rF2j3L5CqwSSRNcSAetavjqFYh9EGq5RASXc8s3cPV8",
  "key17": "36G1yJiUuy2T6VVuFgzd6qtrRoyWgz7A1XQgCZkj3cXmFkPHQaoZQFnEuWjgwvCdSH4f469CHZp2JrZQGkqhQm8C",
  "key18": "4DCYRP3aEk4rMRz4HeeDXMgs3nVzTr8byhbg7hECY8guBFp2sFym6qFqmeWR8vdyvZFvcEJTFhfY32tTMtqG41jp",
  "key19": "32BRUHjsn7Yt5TBaNBqQUpNHM3WqTd7m22vKGVcdNrSRCgMJh4QSuhEQnppHPEi3eg6tVPant3rRg5RW6EVgMjtg",
  "key20": "4dTYLmVc9fPuJvMHTw6YM1hPzBHt5QCrwQMv8RX6SNTrjTxXHwpa3wL1W47jpxzAwUUtTTABSqTwHugwAS3ipf7x",
  "key21": "2q6H59H2EjswVdpu6g8Vdq328EW253ngDThECPxrVMzZfmTSTUw23VdpvkhqUcbE7NUWcSna52NQJ7r1BM5uSdZG",
  "key22": "2YqbBtNLy1ZRZCWEpUZ7JveV82bAZGVUeCv2sH7NaDytkK4QNUKy73QTdzBiKZUWd7bGajVEVLbong5fjj7mfQUD",
  "key23": "5iKumEtZ8dWnajDqF8GzaxwjnmGq1PabsQ74zDmqbMhtTkkEch6wzLhxyvFVn5xk3VWRwecApMpmwDYGETDMnrkv",
  "key24": "XT6eKtVWvsLYk9R49BUM3hZUBij9arZJLeUhGDyVR4VRrN6Fr8kwm13LPfREmvXsyoEsv4suZ9bfmcuJ8YCKWb3"
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
