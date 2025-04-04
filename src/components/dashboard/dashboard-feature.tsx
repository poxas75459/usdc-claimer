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
    "3fqWXZB9iENh1qE7qAu4FzYyovNR7pcSrMVhiAphXigqRaaqv84NfNbawnTwM3p2k3hvQaTxzdQvts5TEhJ5bARX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xtvh9LPq9S2h37aTcM21xEkuCpicsDhK1ViWZSY5qmXqnUH1r1eSqbkNSfFoAFvkiwpUi7MedBYZ7ofBzoyuWs1",
  "key1": "2TkzdXh88M6xw19t4asFSzvG4qtSCxPYQiNUBdnmuhYnkPfskTZhj9E75mzYSypCNzHf3AaJ7qM87LQLLi9LAK8h",
  "key2": "2vVNwZTsqcGmQA7PP19Rqos3RCoiFRd1jLeTrS85w32enRFntVqh9zfYdoDZ9HYQTTcjwpzC8myRPrBVSyizkVPQ",
  "key3": "2MtD4B14uD6xvZN9mkWJcUxASv2EaGLhDLz1P2bZhjGwaKfZ5NvJ3TdoivTX5WvjCmJwYW8KPAGAJeurNbswBYFE",
  "key4": "2F9S9joD39TSNDTDzd5YjDH23UiAr6MiBQ4tPKA1pV9frSn5QCX8snijh6VcEUo99EQC9Gr1RVjrnXEUVLgvo6AZ",
  "key5": "DoyK1KKvev7RShJYJKA8SJLyeHjgMHUSFg39R3YkDGpEmnX1RcB3oEE5HLGdAgfvoJgF2AiYRgo8Ba5rRN4aa3q",
  "key6": "4saM9xwQQpGpZxK7mRqx13Teu323GD5KZJ2GGGuNtUzrQu8o3to57ecG9LiCLxGtQKyEjssV1h4oUM1LCDdG2TKa",
  "key7": "5BeTbS6p2Qo1nVWYNXYLbrf62aaK3gfWMpTxp92aqe5XsXLngGs6R4qQhNY26rnCLuoGNsEWVEhH3DCSMANLdWjk",
  "key8": "3rPa8pNNqDYpXG1v7iNqLQQH6rwQ1FD9pdXm2HVpFrjpmA9r87zHzUqBvtF2zMgHgMFKSfqu1aw1sc5VE8Dx6jXf",
  "key9": "5psUeS3bVsaxt2nK7HgVwWFWDJcem3dtAoEbq6NpTkh6UTuruXpKf9DJMF3XGFoahrPRVoAw9bGEYFph9siGkV2a",
  "key10": "Rsz1s8ghxSqbg6rjJ4BAVGezxVctvWFNFKc2huPNunDUhFqvGy3bSDsfmBmfAYcwXozTKiAPHuaLx7b8GogYnTF",
  "key11": "4xpXeeP89wQafk9Kht5nbfrNvcg89nyaUAogokQK7o1MCHe52jDLPxWTGygDxTrFKXfXFmfSAW9RqoN6dnGLyNVD",
  "key12": "4L3XzTAVZFLPz4npnh8F15MQU75JDyWT4mf1njVbJUApqTrBAi8wqmMTDsnJHZvFtB9su8c83NczwRkGdpTt8ns5",
  "key13": "3aVQvZZkPv4aDXURh1TM8fFrxLxifkKQxpMzd2voQNw1GTLavAKhT1mMzJsaoidKgUcfjWgU3JZVxqQ54qnePrm4",
  "key14": "64UvoLRHi8LUexq8GL7vt1YRj4E6ZhH3pqSo7qGmbQdezjErj3ZReKWaAyM9gVx7xc2ofpFD7nzuAAvYMXPMZn6N",
  "key15": "2umaTQKqb19AntV7qP5FFm5FPBN7rWrt5AVL4LnCxggJRt8jwgPcPgQiPG41HcDoRhhxnFwBDQVFfJcDmHvtdwo7",
  "key16": "31HpeLc4f65fu1tZetZQd6JHp4tMtpnq18NXrXPT4mxoPxwbR8cwGFyWDdCaqVYmdE9i6etVJnv9PmcdagW37gdJ",
  "key17": "545UobtmuC9fJXhuTjLFeF8umGw7ZRmYJ2X8jJABDHpMv1R9Uwa5PxP91CQgYPdEwpVnZESWbjHYBZ6iwfP29Eh1",
  "key18": "3C5ivDstXNYkxCDseyMFKJhD3hR2Usq6M97R8ANiLUTHmA9VTEx2Pd5gGKu6smaQf771miXpNn31dbcnETLNyfA",
  "key19": "EmiCYPcfkdtmtsS6csy76cGLqWjxMrMcjTACbcRhf1h56hDF6YS5NFqC1aLTpAv82zkTYiYw1P4eVE3PAejcA8P",
  "key20": "3gLRbJtYKX6rgBsn8Qx2XaUydB1b3HL62WWnXy9pocMkio3igLgQnJETs2Zv5WUApLqPzQEsDaJZEKPGPrKJyxkR",
  "key21": "4PL581CsnTjKqxPcnHPvMFhQzePLF9LFSFKjAjMXFZR1Mni55wUKuxwhWf2zvNYza1gYkie4zDJXerPKPpU1mfXd",
  "key22": "2TC6DuHCvJGsKKWgSDozxhvE28sU5steT6VphURjtZTwXEL9moPLyrbBiVpnCEgyMtDsTGqcsYvpPLNGXtWG8ZQ9",
  "key23": "2D1pqdDHWYHLeD2NhAFtiSYtB76B2GAvg5phB5qskZn5LNUh1s3daXUGS8ELrv4ihgai5Hi2W8x5RheHQ4cHvgdH",
  "key24": "3PcpuscdcTMjobJtiat9Csw4cgZ25MgmwPi5rYETtiBqqJ8yHKdVqS6Aj6THHvsAMnJ9XcfQ4BDvVpTxk5kpseZe",
  "key25": "2z4TVz9fmpCfFanHNzCtMtD7cgr6Gs9MhzdAKGPqdVUTTQdn7jax9KQXHKFsLxKQNf98Kax5u1pcCNJYCKjYQn15",
  "key26": "xfkoitDN2HGFnkTvvtr3Y2W9U62z6rB8bRC4Ba4hqvDmPaApR1C9oZeBcEL33V1PyVCqU5KYEQsFGbeMCLpGjUd",
  "key27": "4BEzMQs2gDXWyX4k9bcoZG6KDUN9YhAyxGnvf2bV9vQD39wkSynmCDjWWwaCG28kgesfK2CAAjovbAEZUg91hQbq",
  "key28": "joqzB5BZmbzpAoUKkp8fACk4vy4WnsUmzuuDUnngvXudxkVyN31XU8tiQpyyzZSra37fYoUPt3EMgMdYmkYiGUr",
  "key29": "3QHWK5CCgTLPQ9Xc31Dx3Mj83AXXMjP58n6f4hVQS9T3vwDtURq3dWy1xdDzLTrjs2JfJjciAuMRT3QVFS6eLVoX"
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
