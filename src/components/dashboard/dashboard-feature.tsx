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
    "48KKASkBxCTstGRzew5y8RxgfKmogruiUFg8xTnZRKEXEaKs9eWS897XmmDj9Y3Zfgf4Wes4mupFkdV1v6c7eY8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "teNHAm7gopvYjyqscQ1KC3K7pArhZkhpNEkF8uGme2MoyxrT3sjy2Xc25styKxmx61LuWHyVvTRmGE5YBv43UAz",
  "key1": "65Tv7rT6ukv4k4vSK1EckMs1NRtpk4uiPyt9kMQxXSC9j5BHEYD9Y5JFosg7H2MzhfxjJZfFt9YaRRG7Fdt8Y1u4",
  "key2": "3eFpMG2jor9LvBSgKVN378yJKG2t3s5TdiFjKK8zxfZbwGcmmocdrW5qyS4E291sSctbCJh4qr2GSfgAUcNGjAdq",
  "key3": "48rXd1xYmQf9i8qKzf6chXWyBi5r5Tz2rq7mhzmzaMDdYTbdSwyCLG31KtExnACPfHioX2SsUYtAhQ3WLkLzP2Th",
  "key4": "3vdhUVgg4NwY38UKhRK8K1f3U4eYBxxrAp9Z4JAb7mqVB7TT4GATJR9jfXqxP8Re9MbRGCtaMEVDfoCpaYhNaY2Y",
  "key5": "3Db3C5KQ1mc8NKSaE3Dp8oDYtC94Z8M44GwYihotypqCUJMhFSTrsxG6Xqij9U8cTVDVxHXfYwA45bjgVNKuVdCv",
  "key6": "3VZvLo9xQ1BMWNjpridHzzP6LjTPRc5DCr355DG2DpY29tspsyCMvbhz9kYXt65RhTFLKq6DsuQUsqWKLWwsE42a",
  "key7": "uJvAS3KQBXacrnTDZHYzFbPAQBX3SJxQQdD9NbVcddBPBCpfhHEWPZzz9fKvSPu2p18KdczuoMSisEmjSrqbxqd",
  "key8": "3ErTAhq4WGfNHA5yrcsWhvamPP2xsf7TMcUiuHquLtEQ9o6wNqqmsuWtcRdcUE8gcdeqPpQWj9UCKYiNbZhRBRyn",
  "key9": "3vqhEXCMP7iStUSH5WjZkWkh1V1YLyfw245Z4LWs3ggATZo57Knojv1UFDfsThHNM3WoCNCwLUrVp4W52VgnQBZ2",
  "key10": "4P3dz9ucSNF5Ux8ScoVXWazxhHGmLgMyhZVQksMe2xpzRMeA3HbeYagarwSk1PWT9Uw48km5EN9DpztKDRD76bEF",
  "key11": "22AKdvsZ7S6sRWDREhE9MLWq19basBs5SFwMCAx7bjixU294BxhERvUrJXK4j2qbb1jpSB5tV3ku8euEgTweuLUk",
  "key12": "2pdv8228dLRrGBBrhAXsuURL8jLEi6JgzK6nEzpBo62QyhtMFFUWDUAtfjXnPnQmnCbixPTssMngyAAj7kTn4Z2L",
  "key13": "4TXCVEsJ5zjHnhsSBiVwEnzrYEHcFbT9nufgwG1RiGrZ8EL7RdCyvarh6X9XEyRkQuD3YtABaXuHqzDiemAqzH6k",
  "key14": "21vQYqxe88PAs6SaPNRYdhw6hB7qX2NfHswEXdisuTK6asYb9UpPP5QAHzvfXnmKEWazj3onsaawyvRuFjmNDN59",
  "key15": "5bd3prawUbYMW8LkK4QeBzQqLgyv6Pt5PZCb4UqfVVfsfdSeCSopVfUvhvkubwt8oyUEE6UDqnV4vhWvqkRDCpsq",
  "key16": "3LXEGGrYCTo1xTn7f7AD7YfiPe6CaKAfG53bJs5P6UfM3drYSGHTbyBipZ3YQXLgZfycT4sxSV9pcUniZ2S3uLFy",
  "key17": "2x7wToPxx1jpm96am3Zq3aqrYoMUi17tR4SRMc6AzzQbdh6nYTAqaA8mmdyVVxoxhojfqUUaemLL6H7F9LNTDvMm",
  "key18": "H55jhyKZZCtWEFaZ3Njr7eunVyRdkbVQmEJyWQv7Nt1wswrQKp3rtW2EMfBoxbaUKsPfjFKHowZkc4Qz6EANCET",
  "key19": "65fJQwnpePPkGAoTaFMmM5Bb1sfzdq4LktQF3kt29bhCgZS15FFyf5y2mq4KJm3fosdqSykC744VNAgLhAMUPDgH",
  "key20": "odahJgTo5ZfUhHPpDMHLikaT7KHwyNDQ2T9j82mYzrTbpEqpFupVYAwjXkc9Ti2N7cmcHrDEwcpUeKYDPiGcQuM",
  "key21": "RSvZc2j4QYn29FXBmBDjuhsVAeWdmtoUc1jC5e2hLNeRWqXZHU6tAqkDiGw6UWqxVGRaVHV5kpH2HtykDtkYvAW",
  "key22": "4fMquP2DS2TYW51H6dVRcncgAVJyR4riK3ogSQMzXMm2UR63LaDs5joPwai17bYDQowB1971gpBujWid9ZeKLSy2",
  "key23": "2N8hVzhovY67zsuUUZbiGazaCEaM4XAseGuYBzKSdPWtAK2aDnL58KsA3eL6Gub4gXhx73KDqG4eev1zg662CRHy",
  "key24": "5a9EjrLzs5PZ7ajBqVL43myEzK4bVqqHwXY9R6kGwirkTc2gCbhvveNrn78NutHx1gMtroEMX9QZCZSSWyQc8WFj"
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
