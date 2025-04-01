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
    "34AL7zRyVq9dwe4Lo2eqjXiTz32C7fYC2BeXGxxB1TihnirdzbXPh1jNfz9MJgkj32veBn4Zq7ncQakCbAGEfw14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dTbBYsdyGsdjxKasqEeM876TJ7jCux8m4r2ZHdNEt5cuQFe1uDLADey74iGjrjjQirGeSeAvAX69tjjVvqXR9vY",
  "key1": "3QMCYUiQY8WzbM3RcwsFwDwf1DBRh3ShCfzn3xU2h9hqWSUBpWQDpKV2UzqztHsUnnrs5redYk6FVeNyor9BGUBY",
  "key2": "i437TpLahv5dRTykfvsSQjxiMXAr8626N3DZJSNMhXuuSwzY3SaMw8nvD1E1LyoiY2oJHoSdUaRgNUkufsVJy1A",
  "key3": "DJruEcQrhLbHbJsYbQiVXeNPgH5jTY3xaRzR7eZXf3hS9Czmwr1R4Wv5Tpow3vjTPPQCMf3KHLHMJrNnwQHGubo",
  "key4": "4uZRUCZNBtXFcAvWbVUJMZhAnstxZb67xiDkRZG9U3GifTXCLdnU8uDcCCTyVnoBcFNBbivCqrEGGZUPwAY8yjid",
  "key5": "3FZgnCo6s2F2yFRuyxARCdP5HQkRVKZURSic61zoJcFnoeyJpWbbxGpiCvwaRNVo6LTDm2BX5PzCdXiQwpsw9WSN",
  "key6": "4XcczfNupMjDM9fDBjSUbdDmm3MNcUD8ZDjGNMFFzbiwAyTwtoQp8W27iFPDDN2k1UiESGqZAErzSb9mVPeVAEWu",
  "key7": "WaNtGTm1NkiXtHt7jb5LDgNVtBoA538hkm7eVpYNbmCYYcPe6pCZ1vTURSgvQQSakYsjVhBc6PapfZmszg3qwTQ",
  "key8": "1mGqUQ2FRrVvKNHdtL7WTNVMGLrQrjgxRWpBQFn798sYqjygc8rbfHY3rMhzd3SAaTh7qdjpjdXB5vMzigWKwV1",
  "key9": "2GMS9XhSAy3d4ZXdeQCFaxqaPS1EdVEATBqiZnYvskav86KSRxb6TEUXEEHDYruxJmSyPtaEthrypiMpd7Mq188L",
  "key10": "5cQov2LgeTEzLrezRzoGsqumszxx9GWnNAJ8LxB5fSgwn7Dzs6WDRBb6TfNhro9cYeVixXT5yMvc6PhvNJcW2oGd",
  "key11": "49Ln389A1AiEN2DmdJ3AAKDnK9mYYVovxC4u4guKcL2ys9hDMksxAhnb9y1ndqWVrZcfB4QzPNj7s1fyG6gatZ7a",
  "key12": "2Xa6WeVJueJqFuLr3qbL4ExY1hXT1y3F5zBkQoCna6nNLpqLuJXnzT6Xw9WhV2Hs8NkToQMujYF7acfxXvTJjfTL",
  "key13": "4G4mqUhRmaMYBTe1zcJtHbGbguXwGVLbNvhjXk6tdGRjtSkHVJWySo98reMtNfzyVNhV4fydEfmgq3mGa33n3URv",
  "key14": "3UNERnVob2P5cYqYYz41LWiYsWk5ptZKUUAwgxbsFWEYXAofCsTdvz1Eb6VPLhcnUGRuAmcmqDLacSKgjgHLeMFa",
  "key15": "4LxjNUtQ7eaHjH1QqzawPzR9pLhkGoVweKqYKDfppiTUaRTzfWt7wWVLv3BmnPz6L5rXvPzYMFWkPfyPHKsiW1zL",
  "key16": "9QD8NWoVzuPMb3dnLwuLiSLBqiuEoUSoV7bZKPiPUkgLmtPVTKEPopQDZp5arLJWU9V4FW7EKPXiKbKcG6LPuae",
  "key17": "2irnoFcdZSinzCgsy5mqiKv9HHQMSK7DkKTdANbYZvSzsTCsP1VUstNWHtt8wHxLqmwa9pFP4iRRPGppctduqAvj",
  "key18": "4XHoVjHi1H9eCiS9DRN6Kyw2a8ZPdjNNvEtGSfFCtLzALcSw1sjdF3f1nxf3bWMpnDNJbGnjfv229kzgdPF5UmJ6",
  "key19": "4hw8Y9vEGgoguM1KDUakPjyanEq34Zxws3i5TfVoGdJHtU6Zw3FZy3y44AoakLoNQ4VVkMWqkvgBQcmDssMt2GNe",
  "key20": "66KzQEwuE2iTcNzABKdj9m4YUYU27DRvCJHZcTUDi1dsV5X1KH2xZsEFUynZExo5Z9R4A1ccCdSb6653ca9QJSyV",
  "key21": "6Ks1o58VS6sKmmWXyyhR4Y7PEMgtB5boPUHJX77GihrqUxCQ11CSdktMXGHYRHSBSG7qszthbium9Ax76PNGbi1",
  "key22": "39NEzLQqhG9M1eVzZwueWnZcTpkUVxU1jkGos5uckp8KKgBz1NmrE7V1wco4rALgjtPigSsU4vhJ8WmVnDzvpbFM",
  "key23": "2TWMCuXhdCf6dxXFVJrYCYzugdpRVuV5841pp6xGWZnknSYVnRwUk8bdiim6aPSvEASnv8ZNCo5AzRyeSeH9Wpp7",
  "key24": "2ytjeGujUk5Wr5jqn5bXixyL72mCc2xLc9AcocFuvjfVxeQ5de4Mu3WkTcpwc4S3o97rySTsLsMNSPeWSbLFWikA",
  "key25": "5ZBrvaZyVw9zBzgySaSTJ7G7etQKQ91oxb4tss6XSdahFe6sGRySfto9YJjtG6U3L3eaqHrCDRBDYzs8JnRGd8qd"
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
