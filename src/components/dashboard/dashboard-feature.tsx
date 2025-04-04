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
    "4APWNdBxTQrqfR2kob9sqsvnTC9gzZyDY5XnEDDvYd5GnUHXY2awk7T6LzMQsU4GHBMjUgehM49wGp2tk1miDnfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V46zDoQCk4gyFJKJ731m2ysuEakGUQ3nMwCex94mGyACenM5hAoLnFaNpfVGV6Lst9aNYT9AkNN8GyX1BEjAwCP",
  "key1": "3LU48aTENrV7kkzQxs2NkxdqDxSFPh8NTciDDLYY2MGLJ7typ1eaNga5Lub6HWJPo1yxxmDvQ3JkWcp13qFGwJoB",
  "key2": "3wrQJxmvRpNeKZ6udwrs5MBZ1AWPyUYCTuSQhLNPJmUkKgGEU36GfR9TjUmzuCUCG7djaVcpEFQyaEvPhE7F2sT",
  "key3": "4xvVv74fPevuvmXBfyJUthx15qv5QZom7Kas6WAE17UUwebiKdro9U4uRfaBwfqkQkw1rf3aoj2oSAYLA6dQrkwS",
  "key4": "2uDztc6SBfbVHEsZ52DF7WvogaocACUiCudP7hL1WuiLRobCf3vrmC5TmghLzG4SR8oRSms9VoAeRPMnsJBDZnpm",
  "key5": "2Km6Bitzb7piAqJa61DHp69MB1UP5yCtjVy3VQWQQELLzewohq8wiEdMQzzmn8MAyoMvTUcPaDkezqhjteR5sUfn",
  "key6": "hdEC4ZKcSPt2wFtsa4NkGzq2hJQ1U4s6s4b7L1GNsFtKipGKHMbNKbe7fKsqNnuvXzDWGDVcqAvuAtDFhV4NRUX",
  "key7": "xkEHvbBjYZahqPXhjaGn56VQtqf3N7U921ivhRPA8Cu2DLYWEDBLU6kU1ftCNx3cAB6oYf5RiexfN9NWJADUQwB",
  "key8": "3SHtVwaf2ntLw3tVzEf4gSv8jvCks4xDT1C5zxJQGbfhPuobCPcn1buBoFNVRayDW55QRYEADkxnto8XFDmrhc8A",
  "key9": "5psk3FUemetFeM8S76xXEodgcRomtjfdpTboD7dNt2uQunnh9gCdbFASjWSLJSmpPBuoS1ecc19UU3AgnjeYeXws",
  "key10": "5Y6qjQrYxcW53g73QL8jycaziTmA8qyeW5LPQYoGTgWXLiakLQFBQBkiPxk4ZqbKsFSmWpTzUGuxFf1MUbuubo58",
  "key11": "5cnMpv2U2oF9F5gL68Gv966EvpzpfnS2GtDxK82QfosbNypZSwm2ybKSFJCqQyhE1TQBM5PLx6UqUeMCd3kvFkm2",
  "key12": "2MbV5aLLDAFPGnC3S2prAsVkcQYE92ezjWYWgMwBWKjYCjuodNiH3iPZpfJ7nxi9cuCMhXvbe5QHsDsK31aB9BXG",
  "key13": "5ooLSC16HhjQB1h1UkB46pn5k5koeX31KrzgX4w3a3dScWhAjtFmiYjCzdUpRtuWkByLwt5J2tJ1mXoX56TmMzED",
  "key14": "2rzFpvTtNkbY4GPix3X66a5oGCkYHo9q8vShTsWm6UTTjXrbo15iTtQJj7qeaenXbxsuZgsibeTDSX2F8KeeDh9o",
  "key15": "2FRj1DAujqs9e3p9pREHUcxHqUTzQmcM2RhUhmLF9dcPg5dBeN16HKRfRzrsV918gYqD7Nx8XtfN6LaDzhCMdPG8",
  "key16": "5eRusMrUZzm8zJBdgUNGWanwM2zyeyrE9HHWPfH3epS5km87jNBTpHkhkxMbS5hBQKMjXQGrSp4tkeScky3fBBj2",
  "key17": "2EW2BbgC9dVmm7E9VrPH6wzGuzUKTXXQ1MBPGgAeiTEae7H9ewHSoXHjUqJenbB6fNjjuZaSLzUF9uhodAtCNqEk",
  "key18": "5icugBiudycHn5dWMDcgUX7jsjTVhr7qfd2pPAveBvzXTUYXfkQV6FQaxWPZbEtuPoMB1hagt6tHd73uHQUZwbrR",
  "key19": "44oW94UpyUtRLVvxDFba6oGLuYUnuaN2PHJmbVcikf3uRa5GzaDNPrT5fwtGSEU3PjiVYruQbJrpKfwjAP6CmAwQ",
  "key20": "xnSrjB6SvST8oFbHYygZ9XEvugTTxdomaexFmXZQLNNpnBCH2zux1ePNwwSHghbpnCoJiaA8HNnioPJQB4tpBx3",
  "key21": "5kyH8HKSLKpCpx2QaNcDCamgPuQNkZMK3D1RPmxz31y8vB3eLFkHayMiNCpoCGZnXNkjndj4Vi2tSoh8xAhvv9Hw",
  "key22": "5rwtM3BKLvktf94FqekkR9AXKddhXkE4HVUbPVb7BJ7XnifqH2rueYsThcsNbxn1qyUsbWRvmv7MxhTb9ySKCFuN",
  "key23": "2MHTLsiVYTAufDd2YEMpPVdGUogtpZ3KbJTkR2Pet1tKJkXedqJCY2zLd9SVw6A2fpzsMHeoXvb6fxe6NppApC1D",
  "key24": "4yRmwCdTUmYGhaMuzLmAbdTdawxALpUGu9vUEKU8KUVyTJwSSbciCZWrvTzGwH4hYkcdZzw3BpHrtTfvNG65DkCr",
  "key25": "3tP3xehUrYeaAZjaUeKZjkTKkUme1WVtDjscuBkiPayuH4iiJGWjQ2BHBYEb8CmxKKVxcXvEAo4XbmGjnuQPTwze",
  "key26": "3Ex35r5pcunBVtsPerD3GiKYoWPLQrDpbxPzTT9i25vf9LGBbNcLwVBCPmUFxx6ZejSJqwtiqjX3iq6bq5ZM2v6W",
  "key27": "3yqCtPubS1ottTg6R8dQZhBwZeEvKcF1FGi4GAMKKpd2mMkfmDoU9abrYN8opN5QKi8AtJYvWZbnzxuWXPX3W2Pj",
  "key28": "ZptNvh2ZCBCvmoyjpNF3Wa5D9F3nUSCbRP4mLwLXRbyLH2FziDPRutcmcGKTUaRb6uf8d11rtkNv5bN5Lhf3hGR",
  "key29": "565bcnqVEbTciUXtuPFUSNvj7oh7EmDhzZMhLSq5rD1iikU8KKLwcF2i3VcdTefc2YU8QqXRw5g5Ft2tw3TMKnKS",
  "key30": "4CgeKRRqw59kLsQYqtWYYagEJ51PY9cFYWmgAEYVSPqLch6WEEUbGWhZ5Js9ZnvbdEvGqFvbLXFtDCfqChYLmX26",
  "key31": "AaNVNNKzJfCMJSS9kKBenJJfSq1tJ8Yg9HsRMaVMYh1RbvLjT934HzJjSRQ4uKhtTkUTaUGXJd9TMhQx2hmS5rB",
  "key32": "P7P8n28f6ttNJ57kV1ydec69KZuReuVKCRgjTkWmRGMzH1KLiW513G4CXnZpQFGbZwEq5KN45DHQzAnbugtPLLy",
  "key33": "3rsxozLU3WYXfLvRMgsGBSNwMP8Naehvcf12F1WZH4R8hFmgMJkaHvCxrZemj5uTegG1i9FnDe9znLR2o9bm1fDK",
  "key34": "4EV24PJmAmRNUeXhRrgW6KoaBHsD8XMHvNnXcQ1Ru4dTjKMqET7hawnPRzNp7GwXfgiJxL3N722X6FpsRkxHsty4",
  "key35": "4sCC2sigsUfoYhTKensYZ29fEM8ucg4aieZUHNhzoAp7bYKjq5yDNovqBUUXS6bwRrHmoJisWfLFDHHMHDpGpk87",
  "key36": "5FJkjawWUySnNnpLutGTJcrufExLG5iEPFQFS1cprMkMxS7HGfZH5kvPkNMaDieDktttJosVoMkqZj3FgrKWn1A1",
  "key37": "3RtBeAXYPjAh81fdLgyEhuFqy14nLCUsdHq1z4BZrNwhRf33EPX74vps3vmfBDoHikVFAidpHm1FxXhhXpHPSaA4",
  "key38": "3s9xv1Sek8M13wB7MCw1yYEzLZz3QrfMdPk2jLURLJuj5xYTsGcqDPe1HCXsSmhW36VNtMzuhZPpHRCKqZitCQup",
  "key39": "5VSDPfXygjzvM5WkSUFVEzwKHSAc9shwmg6FsJVkFesrxacuaZJR4wF7kHvaNmZm8wbD15WyHC5HSsz6fqdujw9c",
  "key40": "Vg8ipUBu6nU7MvnGtTnbkQWTGPaARZbagbzVrZ4cfkiMPrNj6M5s9ZgXTW2Tg69zC6RivN7qcRd4Vd55EW3RrgF",
  "key41": "3smUppXSDGDES54TGDD33azPzGvw92yo8mY8z3roW91t5unbCvybxG9vPB9jNS1ifCwepoBVN9R8ni5DxcsNBXm5",
  "key42": "43kyuG2x315AR47wynqmcwVwhskRg9n7mJyaSzynustcVjArn6LsmiquUzejWnPRhBq17kmZYU55konDXdJEAJXV",
  "key43": "v1npA5Dedanfq8WWs6buBYL8M7PrZVL6K7i6Bbkmuo4L7cqj8oWv36t7APzZPj2wJTZx4GWSB6VWUYyQ3uEkF4p"
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
