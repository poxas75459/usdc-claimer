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
    "5RPweJHD9Esc1ybpQGdBwpLzqh2xLmrKx37qVZmHQJjw6sUwoSjTBkZfmobStBRTn4VycSa3jLaxDd3KabsFkFRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QBfMGDG7NVUSRDi5E9HSXDbfcnKFy4byENNG1T5A7yPokHdsqubCKhnQeNdb9W8HzF2xNFezZq4ZrnzN3FDfVWF",
  "key1": "4pKHotuACy96xgfrPmXdXqiWL6efWFFuZwvDZUCtxicSdD3dBGzXnpj3SRuPhQcTQo51KeeEnfxMvmULTzTo3Ur5",
  "key2": "x3rHQSBVbGZD5ypdui5CnhRhecnNifuDAWZyK5wF11Ut2zH2sAU8x52X3XtVrA28RJX6a47ApMyiymbDYhjfR8M",
  "key3": "5YzWq2PTN5KQZ9zB8Y5GWiCUjMsAdQnLjz1bPgn2xVi8zeqAn2ssi59rfK15fDdrC6RdTMReoLyKTgqApqvUSyYr",
  "key4": "5f7j7AX595LEmPH1cDqGQMSWgsXTj3w8bfqX1414zTNMrofhfETpCnpmfseBmW5u3V5fpxmDydcibfxbTXRGDFcw",
  "key5": "bStohe9LdPvwLUPdrLChSyunsQyq9EXrC47GLmUrBDyGzLPVSPAFFyLuRSDgJt3n5LchbtgkcFEfqARSzLHpqSP",
  "key6": "2Lpz63dTZML27v9eJNvRfJauNZv5uv2EydggyKYFiQMAf5irdpaH5Rf5tVnm4rMxXcyrhcyErSQVy42sty1FVDfm",
  "key7": "3qD1dLAqh3mUkPFRBSnfAiJuw5Cur7ZNJPDZn7gQgEW93Uyfk5iDSHxFsYXMiyKrQFNY1enzDGDTBa8h3FktJ6LE",
  "key8": "55PgDZiLi9WnscHHp8ysLzHi2Pst8FVKcrJWoZWVPQiJ8fpK6SStvW1YA7cqrnP75mqFAXLsfCSaXaHVrYHoZHmy",
  "key9": "3UrKYaox2DG2B7KHBWDTPZPywcj8A2xQzVLgH4ZmN5zkcUt8MNupt5vhREsKtajCDjSHi2EpA7KqtYiodcK6ibvT",
  "key10": "4r59GyRgcfkbxZR6FSrkQGCsw1XkpzXWujb3wS3s39dZ4ERVTf8oWNvDaFZqrHX8ziihnfSUAjhQCEpEbci7ym73",
  "key11": "42axo8qGKgH9zv8bs9HruV1SvBhdCVjxgQWQQzMnh6ZFLWzcKj7h9HJsaC2RqGCgMnYxoEW8pmWYUtveEtYmYot5",
  "key12": "5jRczvbmF1YWnkv5THb3LdsjJKS5onBE2DoooUo4dTJCrozJfKm9gTbLQGZ8t2pMz3SpevvnjE14ncNesL5uQdEb",
  "key13": "3fk75zzGpwTyTMiipCZWqT2rBhja1ZcPSrD8QRkUmcKkuv2ZsmqSLMVHu4Tokmkv137FY8EThnevMFXeeMECeven",
  "key14": "2EY6seex3EgwkX5USq7Rbg3gqHWpeKBHsEerLPhdgr5HvVjHeZ4gT8fDoJmKA51iHjoAxK9Ez3rTPxYhQZUX77hZ",
  "key15": "n2iWXsB3maMJHUg1FMHr8tvEgMwJfBHKqCA6jpqHnmk8hM1GN1cFcKWyQbQn9v88zkg66R6srULJHG2a3fbHR2x",
  "key16": "4m1M6uLbDvyjGJVCSd3Ku9m3XcSyCFS2fxF36Sj7bnYbcryeRnDW13eSkHxJpFaFyWkfkNBUJj3J3Qi1vfmzZf9e",
  "key17": "5kkdpuL8iCFVmP3JgNV7TgpARNgU9zgSB7TvKpab362iTABCKg1Pkit8Pg79JrqeYEuD48vqPKHoowGazEgMujJU",
  "key18": "4VejYqB4ZibD6frBH4UHqarr41n96zk2GAeapKYSXyB44pcq7cq9LvRvHw5QivoE2TdC8CtfvyyNxkCwZuKeRsBA",
  "key19": "bcbLDbQfK6JWza6yN7NsUDZoeM5SMri1Rxxo3s4ga2JCgQY4fXouceFiP6MagyV1MPYimn4BcGKkHCXENp8cjy2",
  "key20": "5sGfnxfvf2bvRj3UCq8VhmQLsEVPFr1YGpee7D8iEp7nkChK5z7d1TRSsx8PzaEKNqixwjuohyG1bbDWYHRdUg8u",
  "key21": "32vzu7XeV6o7bZkzCp4mKijvKMrZdKFtwsgUXyaGfBiKWzrFxqGgv1ii7eJGUg5wkj76kU2LxLogwiANv6H6Eh65",
  "key22": "4dQoZnspzRxLkU719ky7iFM6sYHBXFKxxN5Rew1hKhp5d8CerUJfpNRGfJkk8UB6UfpjkzjCZjxiBfmqXpuZM3KL",
  "key23": "3Hzg519ZSMxE31j9GjkwDgoxMqhPdNkyLn4iuiTQ1mJ3qzwUk6bJFSDicLTU5Em2pfA3EhkZooJdyJNjekMTLQY3",
  "key24": "2CaVapXeJZKn8rQPu1PrMFTXmawgCveJv7orAeAQRHKty8FJGcCBXCUkmQvxaE9ivMfT3ajD36YcL1JGXJERkQ9F",
  "key25": "2MFMCcAnWy76zSMZmoGYCxSKm1P67AjVhtiNrRZ6y8sEMJ7NH1W4JnU3KTyqRya8SxYcLPeyxazpXi8CY9MwVBqP"
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
