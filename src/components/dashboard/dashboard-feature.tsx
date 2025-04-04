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
    "4aEdpHBDxw8W7VYmcTQ6d6p5G2K2ibntzUZe3CTnWQL5C5UdTgXupwzYiqy1WJg6UrkYA8LUuoYYifxDNSnfDJ5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bkKxzCyz5XC6c2wuPuc7mHQXUvJPQtTh2JmyYfGpJvHwtoGQTXi1Gwa9gEcDaRF9iTocS9LyxyFjpcdzDUFw7ES",
  "key1": "4bBRL6tazgChoxKT4dxTaAEsEjfdwYeUcaMHEQBt6jbHGdukpWs4jDyxKbquyoR6cm5Zeep734JqTkXSdrcVAYSS",
  "key2": "3FF35gFpDwQPk2mPqvYXxeSRLh1nDAzqm6oC8FDYApJrjXkK9BKZXHWcwfHvq98NqDCN9maFrs8z5mo9168CKX7Z",
  "key3": "5FvdEoeZwp6BtAm2tsHHjKaUTbpU8GmrUCNTDjxzeK5mhHUoE7aRT7tcTo7KeKCPxRmyf7XeTpRrNdTLoRFCnyGg",
  "key4": "4qqaBPGiyG4aYTbjkmdUeEvGRdXMhxbHv9faxaSTPVxGva1L6dW1gmR4srAi71PSCY4Uny5E6QaNvNCrFrnEDJXk",
  "key5": "5UxscymwenX36RtbJh4WMyL4rKFFuNJw8HPFL5Nxvi3CP2vfYN87HvggJteEyxrzoSv6HrLUruJsrN4qKJ1EUxte",
  "key6": "5KTjCYNhhcDcAQGzbZHM3RTegnjV3MHBUoEGifyTrB31EHnCSumrsCoqvLsiRZ5HFDqEgsgn9wjQgbR1aB9wwCDZ",
  "key7": "2tNXmwX2G4ixFPuG8JwPETJSemZEc74ziiHWe8hsD8yNmaz8FqT4ARr7M5vR4aXYECwDytdU6FwvgFUYsV6GtVk1",
  "key8": "3JxTQHfW921oVh14ZsrBRbs7usqgPD1BvciUTWv8CAYpiLMGYev5xvhkfdDjnpHbDkLU4yA4Dak2zoMRqjxLuwgs",
  "key9": "4BD55XpNwXxqTcNxeyfKSCwoLZCviWphSQpTaZXtGMWFDzWFd5tWqQxTiSx3TdKykbvKdeQLhafdpLV6JN39mXd",
  "key10": "djSKVfMVngP2AbyQ6A7Az8TjMnC9zHREuvnA9fAwL3FbAUHBXzrRtccRP9wwaUUD8pZQnJgKFZUMi6r1qUrkm4h",
  "key11": "5Gw2iopBCH426Sb8nTsAF51ccYLpGjPBMScZExtVtGzd166cd7pudnvSz83PayLGyiyhTujt7T2euEGX4mSwsWYz",
  "key12": "2TmuE57NFqTuX2mBHvjJ8FnEMJApYs2SC1eZw86tZoqDeBH8VFAcx5hPDoKfkDSAU95mXdTHkrvwbVo74C4kymjt",
  "key13": "4SLQmuw1u8WSbcd34p5N4KthXndfT18vg9WdXgpdtkdWW9cFPfkQdrYnRQxXx1FnT92ARTC1P5gnarcCe1rLNeG5",
  "key14": "62rTPPh8t62kQYkH7vF5HuGrrEYEA47G8qNePiSDHgesFtBqtpMniXXNRqWtPaYE6TsFqRKrFwdfg3S2uVZyjTpt",
  "key15": "cmvKaNP1VH2GdWsG6iM3kXhXzzxqzNT4stwP8zX6ZHhBQ2HTdCxiSrqcTjp6xRyTJ4ydBC59WUi4gmqGHAnWUff",
  "key16": "3dwwX3uFaYaUXNDxDtDrVL1fSkcaJ8HmxLnCT6uWUA1toWjoWiw5QdeSRzpkrYUQD3XELUix9MGAKeHQ23RvMvcT",
  "key17": "5fHNZwHf7LpPAs7AA5Kg7FWeYwg1ftym3uPLKMRQEjWK6puE6NtWopE6aGi3PemJcwigN2LVyC2A5fJ9VVuumvyJ",
  "key18": "5KFHNr5AehynEnbDfaftBhLiiSmzPbf14yUzD9uU4vLAEzNcQkcZCBswNY7kMNE4w9p5fnZeL6bmYm6W2eCbzNXC",
  "key19": "2zPwQAXdrTGc5ELK23A2KvmHZ4QBVtAPx5MNRJH4AANbh7SAxnjJFVPKczYMPAYithJoUJ1CfqzsbpGYTakJVJnb",
  "key20": "2RrJi3HLjQufncLfWh7169DUi7Li9ubzGm8JXY2LWqsC3s1ocbeWdskobAz9DiLEQumPfY99wphz32Sbjd4eCLC5",
  "key21": "4qHZDwHW4WD5DcV5wCcfJHHf11SkbWHWsuKpUAJTX73DtmjzHTGn1XiVvbFkt1g94pTC4iBWqmAFXNRG39b3QZQH",
  "key22": "34D252MsWBEyCyHHSVKWb9rVpHnXG4yF9EFCcAQ4yGK46R63tXVomsPLs2qMiqSe7j4cfavyDSw5CFp2qG6tgSpt",
  "key23": "2AedNN4ZUpSm3G5yrYYKeFEbTYEVvqUbYsuC3JaLwXqWc4PR87SPVFBpRLrykjY8VUPVxtJgfvxSzw8E6ZXowwfB",
  "key24": "4FJdfECf3eQA1L67KRfjUoM7DhXUquccihGxPnV2HjdirLBSU5kGTTrNN6KNumezBDhra3ihb3R8SbFFsXrHGkhv",
  "key25": "2KaQXzq2c5HY4VTw4HSdroxqHXgYtsPRKBFFLWNZmzsuxypVV4367tHUzaxkoXLGHQznHDcubqYMwgJfNPULoHNw",
  "key26": "5tVbwP35jxifBJFkLp5AegeGHqVnwDyonhVEzdudsy62exuVXbcB4CRPQaREpNiHqzMUb9BitQoiS7DZnVzie6jG",
  "key27": "4zdv25HguDwGv1ZpZK2cXbSUqqznb9fBKGMXEvMHuvNX8ZQoUDQAXNLMn6MUG6ThQiXaR3JDmEwFtAUpgKdscQmd",
  "key28": "Wg4jpzT8Wp6ZVCVQXCWEJqTF4dQaVPmQdANRazLZfZiFT9RJMgBMyGYMqCKAsG9x2MctkewWvec3V7ZuzEbyabx",
  "key29": "2dUiubncNkEnzUqbrG6P2DBK3hK8mo47NRwo1nKAdjRjuuwKWvRHo1gBpKDh8Jz2EdeYHYr5tqLSPwb34LmQGaA5"
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
