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
    "3PZRMeDYQhuyK39uRPsXgwMXW5cn8HKEYzkD1nvAUizExZDssNMYRiUjMYJapi4D6vqAaDF8iefGh89TM6StdFDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23qZy2DU6Un3Yvk4Wc4Uyopdj3iWFf66HdZ4LNqJmqrAknUSJhLHe87uRvYNC6GJDtWKpD1JiPfGPTomJcZaSKyn",
  "key1": "5JbMY9JjCdH3vLYmSWPbRz24Xf6wApnu57LX65VFAyGHNPhRyFh4BsTSXr89BnGTEznVKikzUbHQkBv2kevcRxkJ",
  "key2": "3TMB1RgsqsFGrbFWYk54WLzs1g9xJBEV5ZWkLL9PFpCtoXepHw3zXKm2xXJPoTa9TPKeb48rgwggdRQQorNTknc8",
  "key3": "arhTHU4WPgGbSUgKSov3XyyKu55C7gU6rB5NF1NDpoKQpcYFULGamdtWDpYM3Bn6BS6u4UyYv6xXmKrD6DA5Aai",
  "key4": "5s834s2dvH2VRangBet43PRTYkkjJmp2wHtkJcVa4do9xEgVDNhETDsds9EFVJ6Lsz5o3oqBNstjfbT4TRTjCizv",
  "key5": "58VEe24xwDofAmNGSyi52NEmfr2wMi4xm2nuw96duRACkRRj4JzU1TtZsjbCMkhNYp6tYcHGyRmCAx3pkgnb3RoS",
  "key6": "2LTK3HWYDDK5wK9rgBiohYiWdcj9VGJBibvXnxt2pgcYnoZriUN5QVd5RyhhSwQiH3tJrJwhQVC72aZsiUpkyPws",
  "key7": "5hMWbPa7LHHfV1RzYGhREU9B344mnxtRhxCkHgkKT1cdksunJSsztppGfPCgNnVPmywJmRdCajQc6ZcVkZULwU3D",
  "key8": "qfXj5eEQQSScoEQ3tuZBfwqoKieCJDRd85kvVHuFp7rNrx4WUPcEaT4RrSfUW34YkHS75vZtnFTyN6irChW79HV",
  "key9": "2u7nWVGqd4qLzFsZZA7pDqBogtgw5iQRjt9CdwAraywNvcMboevrhp2PnaUntrEaW7KWaiuATLCQaqsfXyP9bpUc",
  "key10": "5HPxiDfHktfdbCMzpTSbUCmWtiPtnQ9rprXy2tsiPyCbkj459zCXqsu8XDxCgSprttjKCH6Cd3SzrocmavasHXJw",
  "key11": "44zqdrvAZte1EoXZ3rTJfpZxwRmf2ks8dBBCYQSVkY3SRR1SR13Jdc3QTXpdDEqLWbZdBdd5AiEYrH5zvJXcgwW2",
  "key12": "2o6wXWvfMCio1jPUiaXESgD5hS67arMQLV37uUSYgJPmKCPNvxjGKc6bLF46u8MNwDYxLAzJcj9xBW8FbfuGqfNm",
  "key13": "4pt4cjnfPQi8jjVe7yUr3uXGnCcyua7VPfA5frk16kBQkfq4d8AbdvvTzxCbFnLGSrkHn9pouo5X1NuRRomHMHHH",
  "key14": "2ufwCKZXquAQacRmYKeNu1tKaQoJF4uAfiasyx35mww4RmfoQury1zUhX6GZxkoapyqbUKM58yVTBmTgQ4KSUM2P",
  "key15": "4CTme6xcjB32jNiATmj5vv1pvmFao9oP1THJbbcJ33LNn2hBxweX52o97xhyDYMfwgwZ2qayd2DHzJA1ohNmhyHc",
  "key16": "4h13hV1N5jdWnRv6NvFzBhg4EV5hU2qk9PmZxy7evmF7jWCZ2XvxAaQwtATvjjsPac1BgCTh3TmvdrxQLAT3HZyF",
  "key17": "28k9wk2qouMQgEbNsUvgLPw4ubqJqsFysyQg9hcrZYxRtjEFJkNinTue2BY98fJSccZruMvGBLKjdppxgtgfEF3X",
  "key18": "43QDi4uvSyA4Qc6tGSK9UNdTA24QCNeJ9R9FR69DMSEZiQ3PQFWyRSa4kkXbRh3EXciRbtS7JSVrcvgzjsCe1BPg",
  "key19": "Unv411nGoMpwLVnJkuM1A87M3xoPrbmj9gx1ZRM5UJJm5N7FSfGLRPwpCBBYA1sCfyG3e8g3YxUbjRBofL1W9si",
  "key20": "2Y2pvwRb59jcVymCJodu2PDFkCx21ZcSicp5pFs8HPbRFUi5TqHuVzbP167Xen91zEnGixmxqDVwuQ2RMGeNyDfW",
  "key21": "2JMiP9o3eiAo6oai7PLo9Jmkc7AQmAcDAaFNmS6iw7jnKMMS2gNpDwaGuDHgP6F4jttLawZPG6BG2ncrMsXsvRRa",
  "key22": "463W7d9pdnHH748YNoDCG15f8c85gxp3AndduuLUFZZ4H9bopuJEYxmMydrQkDDU6zkdyvBRgCker65UScMvKuGK",
  "key23": "3JWGM7yaRitnefAseQm8zkjaTmeDbEXPmTbsDbcUb47dqQrot7D8oamgqwmH9LEP8b5yxiozZkoas558KxRXNHzx",
  "key24": "4pGt3gXWommwhb2yFyeUU5tYtvSqXfbf3TFt1H8dS9cbHvC71bmy1FHhF8sFUAvXk8eu6kjgr6RkibjUKpRMafcH",
  "key25": "5eZCrf1atvcQzbAk2dboWoonhmuh6qyn9tgo4wdeCscrgXShjk3hV35MeFkYvUyXZEVZwYG6fAyQWn4CM7NBnw2",
  "key26": "Hz4irfYBErH5xo1CNEqGmE2kYsjvibBBtMjpUVwebrqN6uXKTHx84iKnmy4dfXLqK7EHcf6Jd5ebjRbyUNknDtB"
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
