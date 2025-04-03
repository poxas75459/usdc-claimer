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
    "4GwexCzLxpdu4ENqptnAR5QAqgSg5VQx9CzbNkYempsXnGPrMuqJPAe17AS2E5C9yMnvtamHxK1dc48yemaPkKCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g3QSX2CKtqop4KmeML7EBUT6poqaYomNtXueGfnckMWV5fb428YLbGypnKxYVsDsZKqUu7qkLh5X7Q8BenaWaGj",
  "key1": "2DePncavKsmmaZCcJ2sjeKhFawASAmS3qZashWUwx42Gzvrahmddfoo4fEwM8gRCoVHYEDssppJ2M4ekTAcYkDAk",
  "key2": "2fR8rktVtc2dj4EMuMwf2a1H8gbBzrLriBLDeqtWXKjcUUpjzsLB9vRUG5ePUANAzV9QGcvmDGHKu8wLrymHj8kB",
  "key3": "pbRnPhA62VTuoNL2DujWguCKjhVGPRAhN2WF8nr8a1FVuaqAnaMsaUCKNSiP1HVG9FnqyeDfCEdbCp7rKgd9CpR",
  "key4": "Jmc2UoEaELJMWgdkNAqCHGEiuProeQWDxbmJeRcrgVyFTTYCbsZEZXJKweMFqQKMZX6JsSCySSvTbBKyJZFgLMo",
  "key5": "3sHEUXPPctoqmVJTqsbHLU3MQMKJzz19nCXeCxvcqVoTDLh8FHJUHGUFhwT9JPxCpqVkdNWrdqte2CKYKhcGH2Y7",
  "key6": "2Hzb3pX1QPHRU7QdrcxRn5EgiZb9FTUJecFX8rkvZ1T92nH8gX3N59WH4BMQkwooBM2NEebwbDk854QJ5VU2igaQ",
  "key7": "56cJbsB4rZhye1PEw2SYCmmJqhHFLFGDywQGfUkFX4qbc2qf1m5B5ZYaNXpp3ZS8RHMLzvhgvASSexEoYKVwPEtz",
  "key8": "4ckAyb7Nnqva7heGWoxFj96r318ioaKauMpVr3sBy8TbKX4cKiru45KbJkqweg6YXa4dwxj2rKxeUwJhw7ZTB4rw",
  "key9": "5AYZpNfA1wS2qwUzTqBNxn7dSBG1Wv4Uov1XFj4wswiVNoszGMysEHbdWBHr85i1o4tXXk53J1Q36CPNA2xuVto9",
  "key10": "3dKvejpEWJtF8FUNScJGP2vbGrQk4z4YmUwQHoEgQUmHD2fv4ntGnECyHgjouhVKgnZKHAhmDbQNHCw6FiGZmCr",
  "key11": "2KQyEKHRQNhwHPi2CZQfEtguCZ7ptarMQCxEBEe5Husod5F4b5UZmj9qZZgUBVwuEZEBeGWsGGXr7qjZQsdw7jQU",
  "key12": "64VLssT2XKq5QocrW1Kur3reA12Lgg9KVqK9GWQHfM93vbbxdH55L3pKBEyLKDQ4JzV8YL6XmiUZdLQxiN5SwCVW",
  "key13": "4imMMvBx9f5XJGU7ANpUAGY22P9d4omkgvmpATC2FeZqyCSBCaWPJdtwifCRby9PLt7Z1hxvcrWFqNrmtseTWQ5y",
  "key14": "41zv6ekgiNuaiYt7jAfnvhHYmDgzdyPhDGihLK86LAtpJGVBdiBK8sSZ8R9hdm8pjhphd6yZBRzLVunxLi6qfC7W",
  "key15": "3e5Qn9D3KGStFMLX4cYVqGVQyTfZzTvkjd3xcktLA5UKtxDgB5qSvCTxahTyuzZ4R7XyQpYsA5UzQnLpe99S6iYm",
  "key16": "LkG3D7DEDhiag3mvvb25Pt6ZcZFy1gGm2Q1zyFM5XdrewHJQtQ5VvjXe6VdCdAUPoFtE9p9J67R5GcwAED2XdZS",
  "key17": "1J7vRth5sAuyRswxknerEdC4TYMEJJ1aUet9YHAohWx95KNBY5AaF9nPVRq263WCtb8aZPJfCCRcHKGitWGSZeB",
  "key18": "5MUUYuUc9o6TofpUYui5jQNE5ETMMgy8A2Bca9v1Ao63RYh3BxULMHvNHpVDbapp5ufwSNrjmnMYASgrgN188YfL",
  "key19": "4fQ4dDiuZRBi7N9qguSfC7dUi5FrxxpJ5rdTUq68B8g7CdXhVN6n4Q1s9s4fcSu22HjeLbztCsucJdxtxKZQK1x7",
  "key20": "32TYhs7Lu3XNq6bj6szsGyPYuzqqJ17qa3fzQ8NVqNdjsPc1L2fgvUvsg8jCRSiRKhP7Fxct7Z5NbthPCFEfo2z2",
  "key21": "4E6xgDRWHYFcieeYRztTyph1G1LRVv9vc8a55qxXXhhKZMcjqUpkcwbpxTiPEc5oHY7AWi8qareHKbW8eTYtj2ZC",
  "key22": "tNKGPgYMfxQWZroMWpL7zvPqdDpNqsGqY2wYJ6r4ZbLUqmSPi8bZSNCR343EmDLcgSezCh8yKUbnUXj7QhtobtY",
  "key23": "4AtD21dwdVWXocdDj9gsHisrPoxResUcTeiu7zyE15iMhq7s9aAsttn9r1LM6RUgXFfDufULxmqqciWTkhps9qmt",
  "key24": "4hfdC3xR4H6i5Dzgpa2U94BgmNVn32179HF8GjAM8Lfttp9hwcfPRsvvf9qcBPxbdPzfaCNd2MRDoft8H88Qc1XX",
  "key25": "3uFPtcyfDMMRdHgpJpXeazpXL89nQLxuffpYHsZcjhQ5brz7QGAYjYVjQaaZEjQ5xddvjZ6792F1zcPmSbg2oVey",
  "key26": "2th7q3XAEgub2HyhYeJ8NGJ7eF4ZRJi2zz2mo7D9TPtP5eU8FjMgx7DKfEEXhkcXtEMEodKvYpoGexzu6C5F3WJA",
  "key27": "3EjJ9MEb77zxMN3GfsBpXVKJ6cbjHFZyNFYe7B98s92XmTg2s6XVo6paxo5BegDXaU2tMDMDhdD2c8HezKJ2vqJw",
  "key28": "2u7WLqCdxic2bips9Z8ALvoiesdcPqDpbLHv2L1HqEMRsuuAzsJymodKbyYVqa5WMrCfNkQNDbdmUDmcUKA1omr1",
  "key29": "5YZ7QhNsx3LfbxzdP2Zc3RCcy9vjUaydrbMcYezjBt96bBnZJB7FpFmHNPtZKviLCHFZp7XcoNZSjocYXfWExwFr",
  "key30": "4hDkCMFv1ng2ErnsczGCxpKyTUjzvVbMyq9tSqUmEJ92oUPi8mvUWmBHZA1YM6meML2CxcetWUJphc81VWjjM3jU",
  "key31": "62ERfDogDP5VkYhuDwtVxRgxGo3GbZckmWns1F7nzXVgF3nNtxRxQKf75S9oMkSQR3G8WenpzY84JpY9zMEvU7L8",
  "key32": "5QAxbPxDTpyghiJtgT9H9zjhde1Jj3ktVpKqBxtBGJxbgrKNFz2CLBcB97Ls8PhULPvTWfr6a7jEQfSJAjjSQkS",
  "key33": "PcM9nq8P5QrtYiDtmjVawVYgw8ZXkWSTtZKuBLuqB21Hq2AYERoJxrTSzRuK6r5eJQxf8NSK1TpE6Xoh6UM6eYz"
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
