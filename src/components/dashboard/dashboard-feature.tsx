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
    "5ojnacS5WwVitaQV5tP9tdi5v7MicyLtRm1djvSJqxiB1aQC1ZPqNhS49zEpDkjVg68JgcZ94PUNRN5rF94wKPBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jf4ufQCdwpqiuz1i1P8u339YxYB48WRPdqRCzu9CpzWBBxAjKJzvp1E1REcUFF5VQGyosExDBZv5JWux3HiGC2S",
  "key1": "2ZKj7nHigSPkSTTdoG9aCsTNfDjdLit2pe6xrZbkvNwDt4USqpYPYd5gW1oYTot8miH5vf6X7bYkWzSsnTJfUcD9",
  "key2": "2TzwaMRpXk2f9wv2ddpTySVm82SEsGvfSsJn13SofxYrihZTVskcEUJWEjUEwBY7SrNfiXVHZEQATFVe1E4UrTsJ",
  "key3": "4PRUe32SwdofdDg1efvYCsPG4K9m8PVvVzjMk8WXMyTF31c52AWb4gft7wnr8Gbiv4QddnRkSNYkTY2hqgQLfCxR",
  "key4": "WncvfYETnnxhb2c2ChSDXWugFzHDLY5pFnppDwqCdCyRPPfkcxHTkTAPEURqj7dbCkrQMhoPDZhtPUDFQ4GSfNf",
  "key5": "3Wm3MgrMhRjcgUZvcn5jWNJhAYJbxaxVocB6dYHVpJLJHo7JNPwE1a5C5xA2h4iW8NLykZfzdhibNY2XSj3L8d7x",
  "key6": "3cUHn8ZYXW5mf42uYSfg4atMc7f494i64Bcx5ov3ZmsJbtenvRHfmWZGjYJTZH1zcoBMbbaCAoXzWENxLFoEmaz4",
  "key7": "YbGr8C142cBNcGt1AVJrXnURiB7Hv7PiNCEZVXt7QGxuJCdMj6PGQA4YAM4fxZ3pK1QYenAcBpeDHYDzfnF5hSM",
  "key8": "2YWG3hYW3sCrApjEuhCEGdtwVLbmrJ4V8ETtfSDiKbyFVSe1ZZgy4sXcXZKFzhshmEEpy1GPYpomiYVyN55hJ4dR",
  "key9": "2fjobXxMykNQTR9UVKSpno4EoAC9sTFTXdMLGfCCY3pCLyMJ1RT5vnpKjDbsGagBd9QuzrAEv27xbdUegQAXL8CF",
  "key10": "3vX1DtAeZmqVNon2C3WzAsezcBB8oTTxfWM3KBWdaBX2xkZWy8GqfFwESf5kAVbn45eQs65K3R3urK45gyiEc4iB",
  "key11": "4Byp67avU3AD7azJFfsAvn5PZ7oxBciDTQqECeekH7McdVwNSahchkV2ywktyTuyeMmq5wMVS3WQuUoBnLC1R9EL",
  "key12": "ZasJQmh5KhmPoXjFWrEGzhSzRMPF1Xerzy5Zip2tVqidFjCDfkGtS64jwdPqpfMqPAR3pZPdfyhGngeGz7NWyet",
  "key13": "UQDZVbuc2TpUUzNYHghEvWHnVUFRSF7BZ38xEzmhnZuS1GbX3vgPJx9U7ff29ZBtMJwtwVyDoUkKcxcCvw3QafW",
  "key14": "21iVUysouX1u1gtxCws9bDZKRv8674k11K6sbAb5VL6PjpNouA5S4Wds44TEJGEK53Kcs49KifMmnWXHkpFBTYPZ",
  "key15": "3epENGpXJzSoRejsru4MirBErBanXL4mKQiEwCXnwrkiqDnUWSCxJcvCuB64XayVyknrEjgBvhWCXYpUnMp4NunN",
  "key16": "4mzzz3zGpYBoUwJahQk7mLXzuek5ABmFfNgL33S3eTK5GSuyywpmBxfrj2UcTnQ5RfusbnbgnFDtztZ3M3R8Ueki",
  "key17": "3L9tKkvtmn4eLEMibTsMA5UHZ3brQmEpFEVVAD9sQD8VhfvVXy1596eHC86WnvRsnjiZfhBZdd4e5AnQfvaW7bvN",
  "key18": "5t1dnw5atuRUsrxZyeggAD8PRA2wfnFKDD8hmMzchmQgSzGQDQTwd1vcZfRhJ1L5GHsSUpLkP3qW5x1wi43Qdfw6",
  "key19": "2eZVGBiVD2dhqit8mcSXngXQyJTMXckQCkEDM5GLZ5wd8UESPXX8AfA9nbbJ9J37EtMSV9max3tSxzzw3GxwaYz8",
  "key20": "2CMGWq5SKyxfGsyTAq5wXBCeyDumNGKannDDQeEbHSCjfcRkmVi384L6hDd1PBNhdv7LyTXwFedMUmZAJp41EQvL",
  "key21": "44F6X4MXMMn6kRx4eTgfnfSh17rnDFdLKs2H6b8MJRLkPX5s5LuK9MQEFdXvcDTy91KYnpicdfLgJFcoPgZYKNb2",
  "key22": "5AbSdqh3wGfE2pgHLBJG6kKg16YRGrVJiS5SG1g5uxE885qJ2e4bsUTam8JVNphZNB9GwWugAPECNCwSMDDv2Pm7",
  "key23": "zTfhtU33V6XMFJ9ovebqLTTvgPcLUE39hJz4bvERwER7BbXbkzK1dRv2SMKcvLkCUScu6w2sW6t9FcH3oMpyXQA",
  "key24": "5DJeqfajPf6GWVfVbsDRxgG6ZRCVaY2zW9L35wqakKtFXhQ56jH16QnFFPLnKvkWebqKLdbG52vmiLT7bnqG2L3C",
  "key25": "3YbuVyFzHUpBF22MW3KL35gLSKGUpWgaHG6YGxwzaeYAMnpAR3xQrnZzGjeUXwVainkc1PaVGo7b9p3awqqK9V7e",
  "key26": "54M9JUXWWJYEA34oBbBpApBVXVSzhddHEESkD7yiihFnbM35NEkW4KoAJJErav1U6ogMzLswVbKrSKT1wkCHT2cx"
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
