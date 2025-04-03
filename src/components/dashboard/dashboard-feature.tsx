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
    "pmEKPv6DZui8PGoxixLr3FDwkj5kpEkrny51XhmDoXMYRKF8CtbRwQkNmQA7uo9fM9XKQNCQCXi26tihnFEzAR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xtzAG1hegNU9f3uEG4DPxQtZFWukao27w87ENuxTf4KwTY2uDyHQvvCm3YenZkez1kLnsAfboGX7aGjnRDj5Tts",
  "key1": "A934w2zemaYz9suv8bPeFbpj3Kjar4eKp6ieThBpbvWZCAm9Y9nz1edwT2R4D4jnDGzHiR1sBjhUYDgc8g5kg16",
  "key2": "43Jg5uumBHY3FMc8CsoehmDQMByn9WtXYubjHoDb5WzyhHov4CCLecb1VLk72J6EH9YiswaakjjpG9nPYGiMR4bh",
  "key3": "3FVmPDavhTFkncgb16U8WEiyT32XUJUHkt2TKrUSGyN7t7of3PXyjDzdfWcnHMWdrhYNjptAA6rBGmq9zTmMqcxr",
  "key4": "2H8tjn1bc5zJowvFU2e7Px6vqDdJgBdtpXBRXdEx8pM2VFaRRSX4X5oMhrJuhx5eM1ezvGxQh9ao6FTPkbEuvJRf",
  "key5": "jxgt3e3RVwZZMBpSJPnqLZEMSKiRYrFKK4urUTnFvMo9KyxaJykcb2zn8XrVGdUL2dz7CC6rp8QqR8rmrfSaK4w",
  "key6": "2T3tGpxSuAuerea8ixobn9ymdFYNGWNGi1WuiWqTJ9RdYKEVaJTmABiXCX2sbSs5ARGkF7ZyER9zQC3kspYzUvpy",
  "key7": "5LsQtmE6Epwehb5aZ7UEfbB9yFHpeR43Vny9sUeqxC5xiEDhjgAee3dvqqTR4CDHdws1wVGhghgwYqDhHR32DE2r",
  "key8": "5CWNgZjuBrGWaKgeQ15cfkgYnXgfTFfs1YtVDbJTsxUmh8YqjzqqZx3WAW1WvoYFPF97jfxa3oBVyJPsgoy8sEeD",
  "key9": "123a9FUFsd7S5dxQHgkpAPQEnDaDcmbkeYpbBXwAoM6F9NZ2nRV4sHzh4VHR8xU35Yk4G8EXWzDnz2CpK3Du3BHc",
  "key10": "4LaubFpysPHoU4PMXueRV4GToFE89UkmNxW7kkcSQGHEVm7LRR1moVqUJoiRXMEJ4VUZoAS4H7MimuqmshLfyzJa",
  "key11": "ttAbBwkUEqV5SEjHEZit84p5Yg4hRvMqexgdBa8mZ5JYBbp7cTPVeTFi4zWdEbsF13tiRiU1GNXwejpBiWTbSAp",
  "key12": "2eSmPGVRccVAVP8pHd6em9Eid9uU1pVkAq7sWJVSMKxTeL2D65qT3V85ermUuMN5UTXQFsmUzQUz2Z4R58YB24uY",
  "key13": "4D9udbHG96Q35ZbGsJvuYntMqAbHpPczFZ3StUcHUsxheyPyjWLrH4ughzkAWMtFibQva8EsiNi9vCdwhDjpNtWp",
  "key14": "2K4T9sTEu2DN9ukDMdj81td4sKKiKAeZB6GMoxsBCrFFfEGAWgN9eGscVt6uBXrc7g6HvonbZpeSDnFD6Y1XjZ5T",
  "key15": "64pyz7ksxoj5vnp1f2auSkg7BX9u4XbP88Fyd5TX18rrJskMdFKxv1FMWPb5vxWtJK3qfG1kzV8bmNxCKgPMYJ9d",
  "key16": "3jY1cyiyZjqrk8CE8ZpifwvSLAFm96Wm7iA6AY1zZUB8Ggj6uPsNnbyxeDuoKo7bwvgTJfw6Gb9at8z6rciUwKuA",
  "key17": "3MGzLoYngZc6VTCbkGhsR5bz8HTJFruWKX7wprq6wQNKsWYQirCag3Yn7Kuyhqo1RUyk12MMiTCCAc8JRxeNvus9",
  "key18": "4gjFGfsCwBi9eenne5ZRQK9LcvonpxzPW8Kg9vwdJvzxyh6DGj588BcbCrwVuC46fbUTpMyG1j3iRSKnfMKhDuA1",
  "key19": "28tjfE9F2tEWzebKtJoGo3mNUEsb9q6owvr6P1kASrZpLMPiTi9kwhtbvvi6N33KPC6bsr28PRgCjQRqyjDRfJSZ",
  "key20": "5SKDEUxWLA3kP9HH2du6LYd8GsbnQQK43Ei9PQAjNTFJAL4RL254AU5ryLu9u4ntVFtyq6FJkKkgRz3m5cKu5T9Z",
  "key21": "6137wajAqPV6xupEFVRwXeeakzZdzMemBCy9gjmYgSHLNAifSFxE4LimtUMFdmt17C64WB6NgBijCTPR2TLeKWRg",
  "key22": "YxQPa4MyLpSTe5L216ThBepnSczGdqPCfw4WxpZwMdkRMRN9g2Y51654y2dkUzmHCHFQFUqxKCCgUrDuvQDECqd",
  "key23": "5emXBStXM7SWcSrNazaCKEL1HXcxZ1jxreMbP1YMkGcSbApmqUvLR7vCZaFV5o2kdSfpy3McXiCargR8xpREU74m",
  "key24": "2Eiyc97qRwMdsckojD5GVJoc6vJ32ECuzuB1oiXXMjgh13gdtHmq8TyppGQkjdxAtiwW6EfTT4J2NPgfWUcCuTrk",
  "key25": "vxvPUy7q5K6CaKoNeURJjRvX4DMmuzmmTebuZcMTRfmgUM4pCEjCbqNiGFYMn21QU374ckjNgdQNpKZYren65RZ",
  "key26": "5HXovn7y2u1mD37ZFbYVkjDAdEv5fkh9iGFaN426VrxWPcUGuLZzF5dN27YxKfz7asf8mifoyRSSq9WXft4vUDJt",
  "key27": "5nrDAxMyYbR9BNACrdKtVw2aUJTLBZLxiT25htk12cZfTyPsoNFgdT9Kme2uwthZUUktanr2GQ9kuYnro1KbALzG"
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
