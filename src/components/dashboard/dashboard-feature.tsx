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
    "5GzRfEK9QAaQMeiyrtbvnxJnEDL75WHcFXJJNtpugBuo34T1NMLgBZMpVSi3XChit3oG3YGzrjb574fS5ym682AT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b9ayyHF1YdSgP5YgRRsVeo2pAeW551268nkz5LeYasPYaZuomNARJLNYYJdpcPZBEgaXi17n6noVkLEyrkveSVR",
  "key1": "5xLay4uuqZf4cLzLxV3efirZiywuHJnjdz8VZhDn6vbo2b96D3QDrEap2rTUSerkvy86f4XRZPfiwHmedurBUX5Y",
  "key2": "FhhKnbGm727DPZRrDqaYQkpc5R5JNRwiWAXgATQKR1UE2FCyhKaPGFJ8S6DNFYE9KhS2SGkAoNqVDkiudjiXtPg",
  "key3": "5vwhgFcojrcpj87xBUUu5MGTJfhrP8unYM2aFSJEec9HcpdNfp6XNwyy1pGKKVuiiEd9rWgVUXqK1CcnuubhQYpP",
  "key4": "4Pv5dyPvhNjS5fKt627TkdBk4Qr2No166L24w3aSfwLoeundeEYUyi6uLB8Pdn4Z6d81wXhsGdrkc4iZ3aipx9un",
  "key5": "2dDXSdog5ddR16V1achShpNYoDCwfaFP2H7zEiSrX8GVLfgnPbbqFpcyPCzzgzvW36w5BbaoKV1oPfW7U2aBRBhT",
  "key6": "GXdoRyerqT2Y8LeRSr5iswmQu6bFQd6mHsYiB9AGB88yRtTcBvUCmazpCvAt7wJaUsQRv8JTyuPrwf6U9KMYNeM",
  "key7": "4tSXFBETE83QyvJq93zPWWRQYeMnHx8MuxkJtvWwyCLMNg1N9WaRoSf2dYT1XgW71KxMavFNCpY9uLQyNo9rxCnM",
  "key8": "2naL6Q6kg6h3Coz6sRrSFy3ug9chHNgSAcUKtSdkjsyxahbJHAdqzXKzBtMKEAzZbVHyQMcpyqiY9evufnMPQm9z",
  "key9": "5ogLWR96P3op9Pf6BC7V15jy4xjW6tnMUcdJxHvWL3SsbTCucrwbKLuV4rt9TyFvg49uC93zxMDV1v7xNAqBFovr",
  "key10": "5RmBSC1vUaTxCybyYgHNnVwz91PyNtsae1T2pgUj68ERz4LfoAPbeYgAkc5VMQx5eSVNWQFuQtF22hUouCRbxMQ8",
  "key11": "62vHDvVnK2JtBm7wGfCgeLZc4XnTErxFgP8Kkp6RYUpGyEoHLec2mcaaVR41zCPrq67m7tXzkpuy4JLGezodNhrV",
  "key12": "44oz1RfdKx8qwpxaC33JHogC6BTdvRghCwPSxGyonr91Mwjbga1CvgV1uozhpsRjEcrgLJBDDSNUxRpDxKHrwCwo",
  "key13": "3Vt6m77sZ6HZ5Pxb6YoNxPbC3gMCkKe5AFJPp6ket93Nb6cnXTQa7X7rfcYgS7DPk8FDNSMo7YP6rvcrLwNyBWwa",
  "key14": "62GAdKe2He2HXyJ6VF4ndS6iDqDyWmx4ULijpfkqdrBjEzUvcpEc8r3WgaVyoL3taLERVKWUmESVwhbYzbo3m1WS",
  "key15": "4dJTKCU7hXYeLMuTNcbpFcUq13q1FuDpJ2dk8cbCyyTZmGCoWqveVB2zyGvqL9Swk9PRfAVVPNccUNfh6cQCM12g",
  "key16": "4t3qE62eBe2tasnDEX6o9oHnTAwrzVs3raTJJS4MR8xDrEvBDuUPa87r8FTNscx9Pif3FgiYJKAQFuNETTwTRtLy",
  "key17": "uPhuFbnsxW841c9372YemH5L3R1MLdiVELuAhLcCwfpaF6gsPAPmdej9VMkUPrS8XUoiDcpyCGbxn5PKfTiLEc5",
  "key18": "3NAkSSmknd6LfBr5Yjh8FAqc336DhE9aCaJsrXJPoVpv7VFsyeHTPva2zXuipyCg8BKQVbKB2KcxWsnSmTGeXVcT",
  "key19": "5yfR4GoH8DASzUiV6NBqc6sdioLThEnWK43iHnJd4KS29dJcKvZDEc4bvWG532gYJx5JjfLS8DqFcLWE9izLdHMs",
  "key20": "62eJTkXKW1opiLk2XkJhxXnxJ5ncNhP7x5KthrczQoLGYRXNNqwjaTA7SEFksE4GWHPFepADMBWNGCD6ofr4A2M2",
  "key21": "2UNi3A2fVkxesMg43nTcGLZpNyZwDqd8pREFu4jGqPc4kfBqutLZNMHWUA75kARiCLygNBZcXJFsdrJbP9P1QZnV",
  "key22": "2YvN4btsGyQtoNSwduN9SSVnWhcL4gtu89spro8oPozwXRQW9LyH74gYrURQjCLpY9ojGyK6xE5A4bxYgqZ1ELcB",
  "key23": "4aeTBxZzUT722UsBW7rtA4wHarGojei28qUwJ7Tjbf3K38RE89aqpxCwdfpqi5piNvLnsdnzZMso4DSLk4mUQs6X",
  "key24": "HV2Bbvcv4Uf1VWrzCaa4oQLRerUsbQzPt8WHAZktc3gUUSD5FKs2RcweSb6UkVsMAsXWT4V4hk4J5UwNdd5mnoJ"
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
