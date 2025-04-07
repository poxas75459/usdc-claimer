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
    "2QrsvGdPVijbcrH5bT8MtTJytnDLPCjMM5jfAn9Wzc19WVK6aZmWX65DLPS4Lzq3ToQbrMXxT4QQTFvuQ5iLfiM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EyMZ2umkn2yA3f3ExJRAYAk91dbEjsx1avZhmZjTCTfMuQPDX5rxZy5uwK2pp3mKoPNdrXLJtbNWhMzgpK3A3Ec",
  "key1": "jPBhdWPinwxHsKbB5R7MRp3SxuNM4XrD3uwSFUqGECXiKoywyvW6iAcbsjd9ttZKeA4zMSjr78HqmFymk9BB7Qj",
  "key2": "5weVjfEhjrxHpw3kJMxYgFRt1Za2RUnh1WpcQyGAUwDUS27CBMqELdkGaisXszSSzTx4pxDZL1hTHKak4XhhckWM",
  "key3": "X6ywLehUf7YF8Y28vx71YwkH1x8SAHfFsr1RSQMzvDAZnWtTSLp2saKUNq3yTceYjT8S9coc128t2fCNgTiEmcb",
  "key4": "272DDdmEkzLVjocDsX8QCnmtHuPDwAVSzBY4hRD7rHn6t95vrkidZyesdPtafQLfMzcW4zGg7TZCEc29uVoaksvi",
  "key5": "hGMJ1FPrnvgvPkHYb9xqF7eACdD4QxudTtAtzpWY7y1XDayVxDqxeRMEwP4J9WqvZi8EcGC6W9TMTtt7CTShLZQ",
  "key6": "n8gFsj3GnviDWxEL9wT2q4Q6B3h5DS1yE2Day13fmHP2PcAtvCWTg7P9HWp7s6vB1ibuPasJyuRstSxxDRvG8Dg",
  "key7": "3W2G5siVCP2R77fC1B8XDMe5QnCHpwv2DfGv6EPcj7bDymvDnGoCGytYswH9iJynvhQoNMWojWBVrfWvgMz9sUg8",
  "key8": "2djADxZnaH5ym2hMhPv2MS6Qgr6ZrtNhDhDgRFx1dKXWtUfGQJnyRvgkVT6vRC8gjDwkLNdgbMwns6GegjqeaZsJ",
  "key9": "2ZDDpmJN8unTsqNnBGQsMBfwKfoHydSi5JmNnaNaxJ5j8XHR26HXa4dn1kbdGoX5BGfEkC1Zj166jv8yX9ea9tzR",
  "key10": "49sUGQBvd6PqTvbHmv7Zs82mQ9qENYRyhb4rsYWWG1BewERU5mmQpAhPi142pHsqZQ1MFJJuGVFzxm1fG3r28euP",
  "key11": "5h5m9NWkRj7iHFdCEv6NraqRoZVgsohMgAqbqYhGHfTSPrLjvz32ci4cPkf9adHdirrJExczsfJvVPSKnxkUR4os",
  "key12": "37DqhYt1Fey1iERAb3pJUwzdC4zkXhya99K7uizkoQCbeRfL5oUcDTA3wtG6vrM7ACthmQYq76c3jtHeGr3kW6Tp",
  "key13": "3iQoLRxviyr6WbQF4cJYd2cXWRrJZj5VYJe3EfHmbpxSZGFoyWBaazEhjhrNttZ2kixAgGnCDXtFsm6UU6ttQmZc",
  "key14": "SNxuHyzBSrXPHvKNR6McgJFL3eFAEHHq2pt4DK4fDt7oRBtTD3EjZ8PfPsCbZdTfjJHSLLaA6SAbToHM9fLmpVW",
  "key15": "5NhUeLEL51tWNoyG9FmgxWeH5dWz3NBiKYcfLun5HT3UKTqjqhWUgYuhFLBRn3yQQysF1MdGYGK1vk2DmEjH8opq",
  "key16": "4VWNJh2Nn3XkP9qbnLGTjRsCGV55qjKffp4Cs1dNTn7mp6p5xNpDfSBJfNsPtTwPjHqPdApx8BbPQ3syCvShcDvG",
  "key17": "2TMngUVPUtQiAyEzuUR2nbaJqrfajjUPeS313DxWePXh4twhXxG7df2dcfeQ3mHMBVdxMLGoWjxxhxfFUrwgAjw5",
  "key18": "5k2Ughw1nTMwp18ERTtEaf1zAD8YMF9YgXGnWng3JoHbb3vvjCcCGz8k3kvTBPh3ZGxoS9kp2d29FVoGxKhwSS8F",
  "key19": "38S551auq7VGpu5nQzm5guUTQDATkdM2omxcfTGLojBBJiRovMsVPD1nxzTAWPd9CkKi5g9zYN3vp5DiwsZWqC96",
  "key20": "52QWucnQYoXpnZgP9Snkg8PzrpPxYK5arMjxWRiBaDxh4EyBAPotH6DryMPrKr2ESC6tuqRkNotfJt4tjtxExM9Z",
  "key21": "4MA69X4Z3uzTtQm5mbdbrkhfbNxd9YBsqNzzkmxHEBssgBMjfvcZMfhK7BnzGUT7bs9NZD19VdpKmRXVJFVC2ri2",
  "key22": "2CUo6qF2yM8ZUGskdDSQUR5pEoL1CMbcT2s7XStigABC1SvNrrh3cFs3kaTGY8g9yRpVQDdNeStV4XdHbDf8i33Y",
  "key23": "62epVoaJ6iYM9xdgUXAtDmEeTmtrKm73v4MA3XBh9M7K18MThvoKyW9K5kvW2YM4RyGagnidt8JQKpbWQR7KQ7au",
  "key24": "3mEv5ffTFS9ts99Cvewrjr9WZNf2eoVafSqKvoMDCfz65ShY9ZiMRGv4ZKWQbgwr6BfrEzqmomkazRnGRXc4Y8Hr",
  "key25": "5d6gBD4LJ9tystESB8A6SoRNuyRhJAqjNwrBoD7p8nN2L2Crgi3jfd5dSoAT5kPqYAhMeJC9Jni1mxA3eD7rgkVh",
  "key26": "2jrBtRFFdutRyxpwqcxmULoxqQiadr7VQKXjetg2nRguSzXxNpTifuwPVUaDt8rDoj4qMrcc5bNx36DDvSzTQaoT"
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
