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
    "M6bhkVhK58wL8CyS7tPH8srkWDE9KZrfwKyCpMjiEPysCeLWxeCPDQDYozDMdH4mGJxjtmro4TioPgZ1wo3Y2av"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cs7cApbnnuG5MbFkRCoSQRrgu3UcCJ7HSp4opHK3z8EM8fHHVmFaSswpVeHngMRKMbPXgZbcjdovH6k8LFcrq7Y",
  "key1": "c6T8EX9qGSU96WoZdS1HDziwmikFQnJVndqMX52k4F7emKZQQL28Z9mkUTnSCYt9CuKMoui5gvoXq2BtnxE5PLn",
  "key2": "29WHcBCWwonc54717oec8MrmG1kPMe6HbPZkQ1EvmQv7x2e8YJoxbqXuD6ktrpVAUiHgqU422XULvnfL7dA6eX63",
  "key3": "3vjQe5SBG1BUV642UF6DA6f83iXTvXSvf6dRVaZqYZnyAeDKJdyRktxJRZkUQH9E2WpQRjCJfEX4V5rV12eW1mao",
  "key4": "5kLPQ2WD22W4pRRa3m5x9dTXRaVRjWDzeaBw7sTBNegJzMKufFzw9SMpCwsauHUALZhhdmdLMc8qcrTYPfUXZt6V",
  "key5": "5tMsQW8caUhWBnbwDKXPBVpgnmYxoN2Y6B7fcJ4PgSbv4fz8BaWJRxy2K6Ni7nLjK5WEY85aFyqHC2NksXpZ9pwT",
  "key6": "44Poukrtfpd3G7qJvQ9owGdbctevf79ZuD36D1nNVmgehZ2VTLPdrcQdsdJAhLMBTBXXQXkuVu23AuSFcgazBS54",
  "key7": "4eN6ALGbdpLFshxu2WDoNd2HfZF3jYXuiGdkEb6pjVo3F1VoBfCjHAcqnoN5h1xjgLnYyae9h8PefRvPnM521StE",
  "key8": "ME8qPf2hYdN4BFga3HNL7zHHuFDxcqpjBMA2fR3755WMnymaSmTLZ6MCporP2wMTF7o7wGjqgPNknErQagrJKKu",
  "key9": "5dpbk2WYBVVSzKTSSg8piBUwJCRTY9vQ3FQ5CFTfWeT62icbPmMR9zr46ySQrzKYFMMobZij8dq98dAcEzDGbECN",
  "key10": "5pEcrPriHURsk1sEhkgkbgQ1jFqbT8vWerYJ4QtJeT9RSt3Rxh8rJDVixLprjY7SHaQpwnohRtUtgmGGAMhhAzkz",
  "key11": "2ZzLr42D2DBG2MNJUNFf87wgHJva2rGdcptR7PgUNWa6qukTKTpKWfTy6tcCW1gitgp9fbtCiXGqvN48bKC4Y6DR",
  "key12": "5aAcsfS2meSsdxZnPpejBirPAzDNVbivfQYuECowUEzFfvVAgyDXwQ6iN8EBSennx1rD57K7yo3zN1R4trLBAdx4",
  "key13": "JFX9XySrXNLTk1vgn8naMxywJq9XQNSnABC8Xz2EdPvGwtD7C86NxP1scH9fwCErqA6adA1ZQF6jfr5tUS365vg",
  "key14": "3GvzBxNqMBNfa8o2VYWqjeJBdHDHstKW86rjDoVRyuA4V1MXWEEjwu7ePjRiDSY8eGaHhPRJWaR44b4Ln1EJ8MdA",
  "key15": "3c9zaW1SKPkTCcB4S8UNVGSdmVTBYREVPBYySpaUEFgoxQXnQd7fDnrVkXyBvexGMvEws37t76QTyuhCwk8xPDQb",
  "key16": "5D85RVKa3RpYLS3wFG1xkjM4iXZZkMfHcZzhu6P9j7FifwNKvGavH67mgF7mYRspcVmLnenMeyJ8D6oJrcsw6Vrx",
  "key17": "5cpjHpgypfpZevZMDwPgEaa28GW4GWXAUrFXj2AmVvMWJcTnsL2FSM93VmGxB13VFpKqUNBKTRP2eGz3NhqcwYwo",
  "key18": "3kYU7Amyh5uY1Uz9s4wRKGhernQGJRE5i97tZsVkbEnZh2goUowQVd9Ns58iiyydRmuRFovoJ8ET4N3rn3BEcGhs",
  "key19": "5NMd7gXGS6FVnUjC1kqLeBmSkMDFeunsQHJ4wUXf8PXRixWzfothhSGFMFqMxY51xaWjifg5wt5DrSBepyghW1Ax",
  "key20": "2sUEsfRT3B2PsK2HSi5kzJ6tr9FcyJfd2ryv3Mkhr19M5j6dH8MEYUQLXvNibVqY6gofx1uvHDx6jx9FXvze4hjm",
  "key21": "4SK2ghjybLiuUFnv3aqEpysSbfBAgVCGxwt2BgtsfqBc4pw3b7FZYMqZniydGJwVjtJHDWPAdUoph1WShfwKJg9A",
  "key22": "4VZTJ552rr5Da57bfkkriDdqzyAuzfeGo3NzFs47ahuTThQDTtUbXcDnH2NKES5bNhy5mUDkKZu22ud9jKKnaPUi",
  "key23": "2j9pJPw2dPGuvkgHazRCLPFe9xH4a4KpMU8JRwUpiAN44UodVwoWz43iTtKbcsa1qqcrjk19g23q8Bxe74SzLRHg",
  "key24": "L1H9BG6LPJ5sLT4BJkXErXFtGttf7DiFWBmvvH3zSVQvEtxDmmRpd1DvmsaqGYyqQ37ptkMRar1AdyPYWvj2pSR",
  "key25": "2W91Rdx8dceUwKWUDoCSpRVYozaTSaaEHiV4qovvMh3uwEQ9LyGGdpFJX3spcdJHQj2KtiB2BwASrzbvERp7z1Sb",
  "key26": "5qLMKQarDJCgKgtsStSPMCfC7kMy4ifsfQmroRfNV4focCG43CAPxQhX61UXVczcUWqydJwvidEtmR5D8ir4PgpD",
  "key27": "3t3FemS9aJ3NgvYrSUvPpqwwywKGvYggnFQvLzsSsZ3xRAdQrG5KkGVDCQee4SmrpR4NT9pgQpAbiHxQYSStEXBu",
  "key28": "bsHvnAAH8Mvs9ZBz6eTKQhQ8KqwV9dmq2YG6woznHY7GLuKCF6YnAJyxA7gt9mpkZ7idbCpftzhrM8WqA3284uX",
  "key29": "2zukgFTuCRBFoUzfbacFB35QkwA22LhZjf4XsPobCkep8KfpfzRfqbSVfSoMrj4UXsUroezsky2JBTFbrXGEq7ek"
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
