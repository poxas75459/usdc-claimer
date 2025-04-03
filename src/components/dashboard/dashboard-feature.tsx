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
    "5KBghrzQ8DEfhRNZqMwDywgya2rBxUh49xBQoKTckBwoLY8oN3a1tm4QmKQjN9M3TzrhGhiHKLoJccxdzxeNdZLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pg2LEihYRajuCafmkQXmqR7xVwX5vCWK4NbCcx7GpBfFtKCaKB8jkTbiVRPJKfJbN6p8opQT939QAE1RNteZAys",
  "key1": "4n3jWnNHez9KVrT6vFR2NHdcMaPccF43Ni7MXuPpNmMSjUcj38BXWbVU6SSky9gHcSndbzRfDkA6CM4mHY3RaTAv",
  "key2": "4QBQYtUZiA3GiqD63ckk14jeqkZnRaeGLkdVENeTeHSNt8bZ2cbbfpTaBshFmHqW91opdm8D1z5UQxEUReSfwsgZ",
  "key3": "2MsDsBjXaRxDq9C2pSzPCV8hcxVcP9uHFjur2uQDJJzzbJnTdU6KswMuF1DSEkbKPWCT6GUfpjD98ncK3XEpfTHb",
  "key4": "3ihfQvQtnv5zMhqiM3kqX3UhUAgm4yeaq1bJxJ3KnjK1otK4T8TGPTA1sZef5dgTn6jpCo2KKNk59ZteMaCiCEQi",
  "key5": "3KHz2KZfeRKbTesPLiDdff2xQPe7s2kWD42Fy9VE6AtMuvPJa4yabcEm2AJ3NSNGB9LuVwf1dPRi5f3aZYqc7bHJ",
  "key6": "fksPJGD8vEnLcPpmt3M2AQGMC5zbcN9kuuad6tYoj2GYT2tYtFVNMnWCWxfTPCkpBH13ekaM3sSgRp9tB2GNnKi",
  "key7": "24aoaQbxfz2RDH6bcTRJSouxupriRi2QrKk5PEsr3CRMT7wRCmnZSpJL8PRPZuDbUKvqFQWgsmM2cnaGkxSGa3Nv",
  "key8": "foFS4CGy2Y3gZaooS5nnA7ZpovYkPq5Wx8Zxen1yipZfZyHM5FW5e5cTJpaVzJRbAVH2RxfgHRvfd9xxXFPMXLq",
  "key9": "4sV24vQLbCYE4Snip36FLTGf56PvfB6bjgnKGMgZTroPKtLu6KaQo5hEdCbwyZAwgiQL9nD1rvYUtZZUm5xzURHc",
  "key10": "38YRXx52QDWVAgaMxXZTxVjKzsKw6KPVsuveXByaRnuzBJ5gsDRbDGZrMLCkYAmZG5v5eaiqhYFH8uT1EwogvwzH",
  "key11": "5kknQ2GQ8yPW6WnDicnXnLRjLnrsaLZNFwQYTSGizXPrmhXL5ftZnWGHv4zom3Ga6jQr6JK7Rtq8pjenokvJfUQu",
  "key12": "3Jogsq2FmZxfaNbYkYysfCpT9jHC3xxSGTGFeBa8obz6EAPBhJrhJkyfBLKBJG5yq6sQkfZBP6zi3dqgPB1jfe4S",
  "key13": "5spfdCdF5xXWKCbFBMtNdbWxoKB2j2fpedpFFz7DheY81daPkAkpDA5C3DrF9fMWQJ2uvDhzNXVGE2TuUBUJWMcZ",
  "key14": "2RERDrb3zrfivzVS4Zgtq3ngnoBcudzWco1mMwJGTNVMPmzu2XJNEPG9sfDBocjruPZQVFgmdiSqTnbuocXeQkBx",
  "key15": "S5CGxZo3qag4AHhZPPZo1NwXYKpVYpZXMazZajNwv7KJ567ghnBYKjcs2aA8fuMrUQLZXy4axEnv5VeVLB3YKuG",
  "key16": "3cJEcX733L64T85Nd3ZtQYNSS7aLnJihmdK7wbuzhrUojukWH5Sxcd8assTuFaokcMWezsvnZoQNseNdRpETt2gC",
  "key17": "3gEa7FatkVkoiJJ9SrH7TSr8kNmPL8sd3Tuj3E9ovCpD2bxQ3iY8NL19VJYqXFUfi4meKkhwEMiHg9eTWMBKhDGD",
  "key18": "3SxdPKG5qrmLMykUDUd1YaoguNudHFdM6AU19utCKPqmuKW4Q4S47wPFPUqpcq47FDkhkQ8QRoV2zRUxR6GUf3Rr",
  "key19": "5DGpTqm84huZJY85QqNYkzj8YYuddoxAXzh2SQgxMQSDbzDmYp5U5EJrQ12oxztBU9sjVDJhmdgNZpsb3vGEBuKg",
  "key20": "5CLR464861QB3uZFfbzNc1FYCu9XC2vxQx538rMV4iibehXhhtPoufx12Aar52yyU2nHcW43SbVtZVw5pYUQkKPV",
  "key21": "61orLjbH7gNE4Ubshbaigzyjf4GoSBas8sWD3L8fvSRkWMuZzm5WiuwdsBMNiGXv2Q5mdGETdJT5uGwF2Tqmz9EW",
  "key22": "335mK1csmneLAc6NBfZYfhU2utdrdNYkHfTGXryHfqMPXs1cPSFSJtZZs2dnhwQpWjoUc6EFUxvSSHeLiaHDPPvX",
  "key23": "34qr3YQ9rEdBCSPx7LbWnXuSpA3t3B9AgYu79GHCVhfBf2htZGjuAnahgzfanX6vXgmitwdfCCvcdPqdA3DrZvpJ",
  "key24": "D6VhRdCZZP1BPqJgPpwgpjfpfz3ufM3T2QBdLntBUtq2wnUzTZcduuCX9DHBH36U6FaA2oSGS4SS7jtUXjDvUWb",
  "key25": "4Nj7XstS4bz9XLNnWYpJaiNVWYRPqmPgh9J1Vs7X8YSdDgCKEYXRNvDXTHE8663xWWL6Y7VoEwDs3GCjwtwuzety",
  "key26": "5Haoyve2e9FhXacmd2EGoqesz8UZr7tVEWbfnFzLusSyVm8a9TQiHF6cvMaRBm8BxzwQEcqR3jAvXtVWZtqsah8z",
  "key27": "2sNNxC2fnWrQfbvDehsrgXUtaKVKg8xU5HrRHmFzWFvQcodyXh2wguzNZwcgzAxq5U24PQ6Np8egbh7NfxWajAuu",
  "key28": "3SYaKWZFbLeEzGaqMt3NNLCc7RE9wuW4q26zwjvtTLSpyc9NgMDNL84Vh7Z5nfN7DwEoGtHtogRKEDjvyVkBYLFA",
  "key29": "32YjHzHNbYWZqmMhW2DHrUNxaxbawqrVKpNfmoVnxrYuZQ3j3yNEtPxZaEf1YuhbpkvRsSuQDcnbz4zbnR1psCqs",
  "key30": "5ZfjQdtwVCXoEPUh1GEMGir65wQwXKj1ukaESCuLQGvnF11L6L2td9xFN5mDvWAygCE5bReGgy9B12i6QpbYg5f5",
  "key31": "KuRCrk8EWajn5RcRcDfPTudJGXgLffdiPUmLxzrfN1Bm1LY4qSSfKs8ecpkJW6vqKThVdPxtew8zLbCu3EuxZ2M",
  "key32": "3LQYYotw5b2eqCSpFem1av9Mw7AAH7QuBGjsjTXXJ82AtGAkjwcV5J1syVUGcsjwV9q5Rr2xYCWCaFW5Aqh4UiEU",
  "key33": "2esyeikX4zS766hyNi7vWH1pWyDq131EvLbCBU9TxfjSjkbjnagGQRjcBeuuyc9UXepR3wnwQGpexxmboRjfFgf9",
  "key34": "4b2zcenYSq1zwm968Xohq2qg51p8yoe1DAze9EDeTQpZjR9av5no3vicwCdBefetKyQGiTziREEEX3ok9ZvLZHWQ",
  "key35": "3D3HVxqd3beKL8idPuQFFKsRzRZ8JV3fsc3uA6NRWRMD1qv7yR4i9YSDJmZNVYxGhVFiUBJYa2xA3gxbkt4LZLJA",
  "key36": "4nnbAuJGyirHFXA8V9DDXhigHkcLmepce6hDEndfcdTjJ8p9zxSvsfCBc8LY8hZ83LXiRSnJWs8gEeqCzWsq9C5i"
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
