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
    "3sUYJUxzkYptVnQGseaT4fiT514hDEYT2sa4AokNULpTrX6y7xy3BmRi2hpwg7ekxfLi35BJZsxHaEQgR9ywccXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3irUgKFkJXaHT9roJMU49itABNjykSJBTPe9W7QGPBk9ps3t4z22zynugGiw5Y6QfanxSTr55seRG33yPHhX6snV",
  "key1": "5ycgvqw6Q281FA7o1CjvfpzuyRoktyHDaZdTMijpsL5qFnzN2rNMDnmmj6Cb9Pgg2NZ8sQt3ebS9LBmNrxSw9Jyd",
  "key2": "AsMHEz1CkNrnbAZwG4HjbusKibB45vWVJJm61V2CQ1DcFM8aeLaffDVWyCgqRUmLy7Gan4Xz7vbezCUsxMFQE79",
  "key3": "3bYo8iebygxUfFhjKWrG3QZJixwfCQzxWmwj5Y4q13oRN2pNQNCprn74idHZABxbAEyqiNm9X7udMoLYxZMYNG4B",
  "key4": "2KveL9pRJkiv4aVWKCEBdhyJNHK2oC7JLj7Uq368YFSqMnrztYYo77voxUTZPV6hfzWn82tzN48wKrXr8JaK4kir",
  "key5": "4gZ9N873krMUcXMz4wKpE1gdjppZkD9twcp6TJnDfnqaQccKt6xu2hjG8EUW3MXdiZUESbU2zCDqR3Wg2VuWiYhZ",
  "key6": "4CcptCR6sXPHUKth6QjetvJeUYY1wJgT86Dj1WmaJ3smMK6ekeXhkHZ8UapFKpfGDLD3BudV7tnFJTfRW6qSTvPG",
  "key7": "4ZnN3E8wWvfjHowaLA9HbvCyvc5U3iqx9fybvfKzwdFGEpuWrtktzdm3asWVYPWQ9djetXYqNw6vSY7p6SZuBjNr",
  "key8": "372N5UvFQDGQPjsQ3otw2cyKkwJjno4fNsamx8Gi1KTrUgTUXC7S83hrCRRQvpvfEcGcrWqDFk529KFdsYmAuLbv",
  "key9": "4H24DLTawsJbcy1AMh2qE7PaDGi77URexASf1pQQavWCx1zU4bg97x5sLuXD2VHzpCA1UTm49dAnsb1k8p5jawkE",
  "key10": "5x7UUPmVBcEBZ28hGKfNSSiLJPneEsKoV2qPFV2p8VgDqW2E7ekaDMyJGYZLZ3aJRzvAcfoUyGzjXC2ZZacbXKcF",
  "key11": "4eQSsqrDEHz9DH7sxqXsaifrrUpt5obpcp1QQhwLDcXW7AtwgZXeQHQSKDDhf7gEV1hCKTWbEsHqyaQJ4p3DErEf",
  "key12": "oySJMNvUYt3csceDJpTLSJpwuyJ6SzQP4EikfmmwDhKLiDrsttc28upV8dNMrxAeUKE43DLF8J6NCvfRrPKfDhT",
  "key13": "2LfjWc199F6qptv3jwSGqQRvL3hNtVmpX6BmwErKK9ubezHj3YHCHLToKMaJFfGXwsYirKBB79AgZ8uNmnSinSo2",
  "key14": "55M2Ek29XBt3jP6mx7Sh1bpWDcwvuoojx6hUzsBSeMQENZz8N99RseXjobwZAWkE6fPsWWYNCffisDgx1UtZCGtm",
  "key15": "5vgoETFKjTD6f6bfuHYn3nJnjGd4t5i3wLLscRcNFTjyPFM9ekUFKGWU6CcuFMkFpMAqXF6FsaRwk8vwWNoMBtFq",
  "key16": "4Fyb3rwAr5RtaSXbQVovP7KtmxQr2fbev5UbpYA1C5Zr38JjmrH6dPA3zKmu6WFx1dcBSERt91VFLfqDbfSMJvh9",
  "key17": "SL4AHLFaBvknaPWUk7PnkQfTpxb1AZFE3GWXU1fRkN1BMCu24asqnquDThJARu1DLwa3o8jwKKwVVfsnY8gz4Ks",
  "key18": "29FBwHs1DZnoD8KcSwEL6sywWt2stupXYW57RrTerK5GWsJi7k6xrkGH38x27V5RHRLFRZy8RjwEQN2oiKpvLVuS",
  "key19": "4LvdJrY7HnbzAH4k1FEftAVgc7NKKxVTZHT5P5ZFcuRQ98rEA9vGnohXaRfmoMMKV6VxTYw63dFpMg6ipEaBjLJV",
  "key20": "3ym18VcGuRHdjVcwwDza9NRCMDzpHwzYGXnb3ekukAtZmksHD9VPwVgQCgdQ5yP1VhdtU3j8aUNkmUkZEPxdZdWD",
  "key21": "2zUQ6KsHxNqLdamdj8zGX4XqnV9RtwoPiQZ5gzFShdH4Jod2j2Wgm32KqUoGdQ2CityfAhpauDorVCjAStn8iYoJ",
  "key22": "34XYcwoBHsrSNKmjwxnL4pmS4JdwQeUUm1aziyPB8watDTNKtSJcb1gDW3MF2D3sH1TrRdMPe78S1ao4pdhrbZfr",
  "key23": "2HnLJSo9JVergCpThCq28PbTcEutzvi8DodQQyXZvZrnQBzjYfeH3wE9NfbpfFdf9jUmRiUqva8XZ8okjEZenfEn",
  "key24": "3SjepzewocnkQCUj17tdhCrSdxFuqQMW7k5nP1d8AnK4zTdDqqu6NmVWtmDeGS1b3HjtmG6Lf1t8seeU9RA6egUJ",
  "key25": "2fSMCJhfeqiiriKABP2sAqLHvrm5zS3w7HAz1gsJRMdv5B9J8o5frSiS3GWacMUhDFgBZ9nhinN1qCHoWwp8TzjT",
  "key26": "2szfponj8FBpuNCgjRXn8VEs6QDvETDQPRMGWWqLku6A8CRa6DwFeoUPQEXfgVaVL4AwM5bxGKEUAnFHjYQVnHdt",
  "key27": "3VnscE6JS5qhuJPJt4VWgWxaohEa4rfmeXDTrYWh4vExEEm86qxjuVcGWaVG7bsvZETkfRtbtq9Wvs45nhEjkj24",
  "key28": "2ZASqYbdyhL8fd9cjiLtwASwqqtZY6LcDGpWPnDxGx3aBBdJGaADq75GRQpDegAPN3wkXqx7AieZH7gEFpLfCpQ7",
  "key29": "26a8RRh59xKu7tVJizWCEoHTUmBsVhKdQEiHSbVkBgLGgJabx7CCkd8tK9KE5iS3sGVPBVXmqEBa43gczBApsFMF",
  "key30": "u3JWyrD1jnhWzZQK6ckKeNA8UUtMkiLuGjQ3h9uMbPxnPQRyUwrrDseCMH8bYDqfoEho8RRJSGBk2Rv3zanonQy",
  "key31": "4dSiF1c9sPbQ4TimL4KN94rEPMzcZKFA59Vp76ZNvVYZTZhzDebnGNgmw2vrdMsEXQkv1qWmtf72gpXNjnxt1jAv",
  "key32": "2T9LUspyhaJ5PdgM5JSZTHccQFRAYdwYJku7hUe8psFb1v3kVtRLbWFyLB9objXYnFZL12eU8bRBuUk4wzEHguFx",
  "key33": "4rMF7eFfNwo7kxJhQ4ELawBRHCBSpBFraPsEo823eJFvRGNsgqoWQJ9vRDXiHdm7BJ1HxAyJLc2HUXvEXLgRFP5z",
  "key34": "38RLziEziLpx6MBQbH36Gk44X4pb5AXDKTLqaYvgFAHZPwFndXKMXARTe9KdbYLVtuTB7EiywiKWdMmcGv9q7HKd",
  "key35": "313Vj4QqEFRDoZ9qfGrYhSQ61UMouCzigXyZYHYfuAvXctLMeEkfjnQvdKEsDrVc6LZZNLScKGYksxA8qcn7dZrT",
  "key36": "5JhxkMGzhhintaZzabgxHkB3QeaXcFTRrSbjsdSZasesSzq8mDdmDnbQUJRQVhJh8cHmvbDhpWj5eUennjTzW2gP",
  "key37": "2XscRiToVMZ3wjzZQFDe2HRGa92FsDhm4CxZKrB3sMQdf6uNmLMTr6FK4XbYu4SGk7mwJZQuLWSnR4kND8iMAQbX",
  "key38": "2syLNb2ASZtkrXy9moFF1FomXF9bj4kvufBYWafL4JfkX9oie5KSPKxasGgqeU6F9p13o1cQM7NdjF8eLLZ5XzS6"
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
