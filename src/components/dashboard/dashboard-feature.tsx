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
    "3b7s5EgyjMQygjDQUzkMExU26ej15aFzs5wstogVcMTVxpjEvmbtobHz2Us2R18HqsvQA2aEfay1K63bwGHW3UnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HkLgivPPCfeSgcLNRUvxym7hTHvXveCR6AN1LVtghw4fVqivNK2ET2UdUSZm8Fvp9toaJ6kCGZoZmK8HnJ9fyQr",
  "key1": "2mbwBe4t4R17zQ6DsybC8eV3saovYp54JAhYdNFWdjvdXxBYbMQft1egKSd9Qsc5bjvrhxBZSiAh2SU9M36sp5ez",
  "key2": "iNFDtS7dU6uo58ECsPMpMX6PPBW788ShM9nTYzwCpB1izNJ6azrLMJDR2ebwfXghUYkJjekX2nAskX7qnYGRbYQ",
  "key3": "49ZKdBjixKFttjBufde2eZNCnwvZ7V65nfenRpXW6xn1exEsz9vaHL7BkfbBSyGh4e4X8VYhBWqQXF67W5ZbWgeZ",
  "key4": "2gf5BFKTbQ2qJXV56K8K22yRterNPyFi2LWhH9BxtQFZ86E41cZDPoZVdLvMyyH3Bsyko6pSSW31xgYnsE7ixmLi",
  "key5": "gtPWz6AH5VS4HwcFrSzRKH3LH62uhHJ4JTeFF5DDXkNFFWdPiVUHJZ4cQ4f7L3WTVMfrG925AGofwiiGCXNpDzn",
  "key6": "31x2hRkNHHqv4zERBc5vWWbnfkxFhqjerbVnve8wvYhrGKD2hHRVYRvvfwp9i3HFGPP4c8Y7Ch1UEq87f9dHouZt",
  "key7": "3nFrg1zCiRbrrYdi3uxCyaAEB3ahAcCu2JpvWdnkFabtJgRWtGZRJaz36KtynY3KexPS5bGFsvxaMGCHfGfRV1bi",
  "key8": "4kQRcWixYJR4KT2FWqryypBKnAfX2rHq3H1J1YjtujXMqRfCskse6rEDzik8v2nrZVEhz8JRhP3vkuYNzAsr4XiC",
  "key9": "AporShpvWhcAebgjynt4KytBvWQX4FCTqUa5BVaq5DP5RsHWQED2iAxau4z5j7CfBuSGsHQv2RNvRoMYmmhjh37",
  "key10": "5ke6ezo9YQwnQAwkByjAqAN2QivRqMqYg4SN7TxNm5CKAAPEHKdf73rd1rBSfW1JPpFsYEiv1cjFMW66TbWw4zAp",
  "key11": "24PyS5JfJKHvj3GfzR7WTYrnnko8PGCPi9wE1oApbjxWToAsztX6YyiEQoxmDQdFrMXjBDoSuzenY7UkkLpodGoc",
  "key12": "4WL8DpDBbjQDAjWV5WTymeJu3W6gxHzLP4CkvPcxXk9XJvgNChLbffLYUs71jjmRRzVSxNmJTSbtJ1EVdNTcr189",
  "key13": "2GRaBXA8eyj8NmHVzySTkQrQBnL6i2dpmtmPUQ5EvHstkL5xvqSeG3L4YcSxmHB8d47xvvY9L8hZjfbtiyuwRiii",
  "key14": "4UKV6vVk8y3p4Y85x6m3zxEjfBY11fops5k7MmyeLACKEF6vvLgdDgvYZk1YwBhCkotPQtJGkYe6nAnxjTWj1aPv",
  "key15": "4RuLggt6dkdPMa4xBW3DfmZrqFhnK9wzU5E4bbVMaBwWoY5ycEKjSve2pvx6keRQTk3dVLy2igkgmMgbGnftZ4au",
  "key16": "3zEzCHj1t8kAQeNzbqy2WGb84CuQ477K5oXTjzgAQEPqhzpcNMrYSC48uZnBVTeo9Y3w4ctZtKrr4VGvFkZHXi7F",
  "key17": "5Uo5RJQyaaK6GyUJXWENBCMiZbivc6hCezJLppBy7VLj8ys9nXwD7PtfG3eSsyVRQy5LUh9tDLeUc1u4AcmGnMJJ",
  "key18": "5VS3aQewmgzVMqGA7qu1aPeapuUMbVhganbtbi8z9wbXiAPLq9RYERRDXMEFC5YsEj6CP9FGS96m9Zx7ckXgSvGg",
  "key19": "4uaatbDiyLMSRaZFGBDNQJpFGe6NMBNQ9tPv795VqFCgP5nsNqjYj2JJtUTZwgMLYEkEZSHR3q8xQi4ZdzCWfpxf",
  "key20": "b1GYKAV5vp7ENgkNLwa1YvTXHVMm9ETjJ8nr7KiUrzk78UYFmhgSGiqTnVjVbBZpmEQ7ieeJ6ZiQCBHmN61TUKu",
  "key21": "2NNm9njvbSLhKQag2Tb5tgosLna5BgDB2jVbmsHhaMrrzrU4VFSaWSfwnPwFLiN6n7W1NuaDTkVr9Ncvkt8ad2dD",
  "key22": "3EmLU5ETX5iwehDJ8gFjYQMhCCgTBZ6aNGZ5Um4CCabsS92sFENxrDyojmbktCyAeWvVMppRwr2MsFf1D9C24PvH",
  "key23": "3BtTgNx469TfDoqNPeB1dTNvAy4eCBvN74pTZhiqgR2QexQiXbbfRob5K9eFA88Wj1Yyhy8AGGkghGNfgtgnCj5j",
  "key24": "iV11bFn1TYKJi7hDCeD64FH2PedZnEbgyXCL7HwrFyHe6pyvZDvHJxzVnCdtiJyvcN3PYGAF7D9cxWT26BMHu4z",
  "key25": "5dQY9JknfrVBQ69LYFvu4AkWpnf1B4EeWhbuXaK2pKtJrM5J3fN5wSb8RCBQE4ZnSfpr2YS3BbX7UtjKUaT5G8vV",
  "key26": "46nQmZcFEh66ea2Xg3SWR1t5aE66GpipZXzZxDfjeC4ArscSvX5b8zJCTwet68mZtWep6YC3Nr8dhZdFUHUqboFd",
  "key27": "56Htc1YptZyxSWCYjJx8vhMRbAqWmZe6okrLeLiAX1RPSSkuc3bVuMkLNtxVLqVqdjDiYvGV6gmxUKptyVJyoUAH",
  "key28": "34QznVD7rk1YRu3uFYk1CYSUgoXzVNk7xkpebhhP8GU9qDtMYZVttaRCGZ2nUzmh3U4vna3EdXaCfdR2xJZpxskQ",
  "key29": "BpumWgMRPbdreVfD6qThhVqz322QrENR9if7mMCX6Ww8p1eTW33DXZe2imxfn7frcxaHppK8gTCciQLMAghqPGC"
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
