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
    "3fsvk9kUtnqTqjJ6hQX468v4FLqCgkjSQtN3AbkmySr2G8hsDrXdKszWwsEqNA7g8DeV56LcejzCaavrAkkAyqoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jktPo1XrkasstG3qzsMtyXFkn2Nafgsg7hU7iVfXCBaRr9nyU7eBNVpMV9SQYfZrhVzW43s75CggQkAZSp87fE1",
  "key1": "T2njwnxQx2AtySjpMeJ99pVaFbJpsSJi3HypQJVYYSbjcE4Pk1brPaR4gMEi5VC5Z39Lpp2JWPFANx4ur85bhcg",
  "key2": "4y8JESKtKdPcQSjY8kybYYPxXkCEMP29xDLMEAobXMyHC3ehMkaCBVh5J965maKmMk24nJ9zH3yRcr8ybYEmbRs8",
  "key3": "3dvpVGr9DzKnu2ofqDAxuXnxhGR68rDexACaY7UojYgi7cxHPSf8v7MoERiXn6caft9yFpdkCduJhQ5k3n8a2GBJ",
  "key4": "4KHCYDUDnrHHXQCcQDndg2gm6xMkTXGVt4guSin4NJUUMEPx2xb7p1waqG6insSiau6F5NcePn1gQR25ceJ3jbqe",
  "key5": "2FHWDa5vAperiBm3tAmnSRjZYfm9rK1BcxHVQvsjAUH7QLrnVfsnFUhU8FpTeWzzHzne7yp8LjNFZfsRrmG5SZ98",
  "key6": "49isE25VH36r8GupRfWBXguHGy82pmbom8HWnbPe6pbq26xmFiaYScktMiUXrYjy5iMFSpotNSqRoVdW4VexEECs",
  "key7": "4d6Zo5xmvuEb3HSkAoNvURuaTdq5d3Gpqiw7FmR6PQidhjoWP5rjwRsuQ6REBAvuUEkP1MfVeMtF3bsHubE3hRgo",
  "key8": "2Torn9AVxGvChxcyaHnhkLRssAJpTMSAmTp4s7DaYNF47dduymU6ePVZwGoAzREE8yoUCU4Wtx9PEgdGa1HH4zmF",
  "key9": "5TvDaKr8g3EkUhAgZ9iUbdN1Z4mSvQQE7dHMiwpA61iheXNKv4DSL2W2fweFf6DU9p4BLJ4RMpocGHoRC43wKd7m",
  "key10": "36rKX3JQ6uLNamhJijR413w1jCYzCb7Sb41G6EyrCyMQFjKuB9KEUkcuePNoBqhkge1ohAhPaz7ue8CAitXTLTiD",
  "key11": "Ce6sLgL4hCdK4gGW7i5DWE3WEiMgMuY986Z6GkrMthBV7h98UzfkESe5E9vFLE2Y91j8wbAiAkBGwfMeYxPwcp5",
  "key12": "5zqkS5S92aodeubT7T25YeNwH66iAVYMH4CFvVcgD6fatavgCWmnKjiZeDR3mUmhMaCTByhUuVfxLB4fVTmVtZhv",
  "key13": "5ibFQAtbpspSRYHaB9Z8iWeycuBu2GPn9y13CLWhizKufvfhSgCGq8CB3oUJ11F6TU8VYiT3MYqwBXZb1YBQVZVu",
  "key14": "qtWuVKgQmAomrYNFAMydd3DQAWErDnddW5RpZEotXNgjYyee1L1bHj6khKzE4Sr27xHFF7TALvrKpx2mHGrVo2T",
  "key15": "5JuvEAsaAdB1gocWv1VPFvkUyvWNHmViX7vsW9K78YUmxC9XeFNMtzX6gbZG6vB6dA4LjTBPjfYXq8ZAfunSH13F",
  "key16": "5dhmGzp8c9zSHAiqXcpX4gc1xqKT4cT66HoJmnPXhFgqrdTfLh5VoMQVi1WDPw3nLpcBevfpgT3u31CbYk4BmgYE",
  "key17": "2LSS2LXMSfVgDz9nWusaahjhG6EgBw4TiMD35kaSoxS5PQ3ZnySxruDweF446qeejxGR5RuX5GBxLbGU9hi3E8wx",
  "key18": "2wBWCvdvTKdtDcSbt8gciteDsLNNRfNmyUbNyMGh99qTWCUghjpbeWpPPAUoerCARMaBsfhH6Ysnv1Jnbo897rwr",
  "key19": "5Cfggu1PMqEgbBtw9Fzjvr1obLLamjRmHiwCULDxp6f1Rqa54yH1X5gxMiBwr1xSUSFRLzGh26xs62kt4AJUP9Vn",
  "key20": "5SAAQW9XzCa53kDBEXN6XYpoofF1uFXjrWmsyRpVLLmFedZAHsXSPyqErwRJBRtBHgT5Ha8RPTUUrwDdHAp6foSa",
  "key21": "59LYbQpRGHDsh8NSEBYTBNc3KXi9xcRo8Fwa6JUNcEtkL9Vimq3jFX62EQJCCiEEYwKt2b6uwF47UDcLjYm84o6P",
  "key22": "5ZtV6BZ73Uprmfieqp5XuNpHd9rW3spw6NNHWJQYenzwwvg67cSFcZGcFAyw51EZMLr17QEavdKkSHRqd2vjJGd5",
  "key23": "54cc7iQV2icJ4okhj2aEhhLfq22AV2kfntkAbMh5wXULaRrAWA2MyUK2GFWdNLci5Jcz4pfwGQk4J7HQrci8khSE",
  "key24": "7QBv74fXGXVP2yCHjTtHUL8qRWMjZ5kJ4yHT9jUf6J7jJ16xep95DPysCofgaUg8QmrWhtQ9hVoLr7AKJ3WxndF",
  "key25": "2oBn8tYF1rwhhyuSW2RrYKV4HyvTnUGUmJQr3zpTfDa7VoUeock8MYPR2qVVSvqk1CN8kq1VqY9onPwqH1QiLrFv"
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
