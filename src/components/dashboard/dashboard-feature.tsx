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
    "58P17cxUDvWQGvETJ46rVJVXPt8ZfdEwi4rTkQtKv4qYy1AJFaSosmdqjEWprg3wG7bf1ZZuKnrXcSCvLEdUgmY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37HCMeGdzTXjwYmpd1wRkbrUAdmgciCQH4bcxgwau3tgu1rPNjoALhaCxu1UXpsaj89hySM3x4oHEnemguJZbvev",
  "key1": "SvcV6GMT8d6piCwPEpub1HbTFnzjHNi898kFAaihtFPifv8RP97qw5PJwwsXfZurLEn1UNZ75fhVZtTKqd9tcdL",
  "key2": "5vSHLLfxj8jM2frbMsULvpTcTBB7Qkk2qzeeHrwkErfGfHk671iCGLeLZFarnvvZ6j1eaJimmrRMgNs8rQGh3TU5",
  "key3": "3rpMJx8d2DrzShToTz7EUsStzQ2KUGdH4m7SPSrqbzthwwg8BbS7JMzLUnY9WuDbsSWntt3KZbsAtphE77qAau7",
  "key4": "35UtjkPxrTRSz3wZFKHyhRBgbzPh26cYo3fYwMxZ3Mio8s5KabPWyjpyX2cWxSgjVzDUsWHrKcBV6QaWGJPA87XC",
  "key5": "5mvd6PayaHbtSR6v2oYm25j5fXvNs8UgfSWsTogVbvsLTy8tVN9Re41Yv2LRdwTkyCJv9D1BXLncySSW8tTgEVhp",
  "key6": "5sYApeD1VvbiS4Bd196NMqndstAAgR1DdEvsmkkCJLpiYdqeWL8LbKPmCa2cVpRmvuf3YyArbuw9Tu1w9S4K259u",
  "key7": "5MVQ1y9QaQSvPdFkkwRpdKHfHKuHCgv1wt1TghSnhEYPYnauxHWnCeUKWiYtEz7FnH419vkyphjbxATWQEyUXXKk",
  "key8": "3GyU6gewAeHoBrJi4jyn8sL4r1nNJZMPTPfcGvB4AaJh6MbLhCrM4Y6H61jEeuek5HvHUhM4iAyRs2k3YhfVRK74",
  "key9": "ujdkE3BcGf5YM8urkFHaWGj38k9xZemfsCo41UsfXEi7fA4sMmV2RPpy5GNvf6egzmid8hx4yGQtptVWU2rAejL",
  "key10": "GTY7T2um6F61qR6EXWSi6sCuL5K7i1Eg3komyC2z5PA97GqhzgXEay5qefq2GhxJaELzot3UH3Lgjn27bSTVhFn",
  "key11": "31pZkjoayDk1qpwex2HQ4CMBkTBfG8Sh2AC7BEnCUUdirPGLqLEwVKfVyweKiMgX6XcG6VhjNbVidvvQFWjTrHxv",
  "key12": "34JtjjoSQPwJS29RXbB2YpeN3KPDHE75h8z1Po24tnbKM19JcgRMTyxUMUCYyqB7mCLeV8CJCZdZpkMcrSdf4WjG",
  "key13": "65gpk9rU8tPFuWisdUmm2DyWc9ZBPPMaAthrMVL3RguppDxvEDZdgNqANTQ4cLsNj1H12jz3k5T8Ab4C1irYGs1A",
  "key14": "4pEkAQURdKqsExNCXxe8R2MckHyaAhtmC9Cz2pu6223y7s7m1vYRd4vbrQNfXZYPW7w51Wpnek7JKYKj7jSiA8rC",
  "key15": "Dyr8NxKKdd11AuUrQ1Na4V4S19jW6WsQQtYA8fuMmimhHZkbY7YYAehxgX8LcdtJosfAndVxbs2Z3d6CnTJuoNG",
  "key16": "4gYFbxYmQ59phKZtGsaTiYgrKGDCE5TZ7e7bcTxkDfB66Vssu1YgNkZxwJ2MrYJQGYNUPdD47nUHCeCcKmJQsCU5",
  "key17": "38yB2r4ejzXQKbC3Q6Q96XJzXRXXR6VEaHxFKY2zzbvU8B3JkNsWBXGtZk11nYcjjMJPzAm3mhjSwSXtGjQwhm4M",
  "key18": "44mvtW2qCQjsL9FqsD58yQfLcG8L1GLZaKGC63eiX79xpe9xCGjGa5B1QbV6MX1aazkFbamsu4DCuBwwSG9UG1bF",
  "key19": "5LRXhBRnzDD9qGQaxWNmKByEwV6Qvb7vLnvEk7eb6kvx9P5eL5QLsKUiE3T96FmWj434Nt8va8syzaLokdrbrt4W",
  "key20": "56H6DnBVodpJ3yrnjkxeJwCPc2KeGDRnNLQr5DPfayUPpBFUXiAkddVQcUtU8wzxTCdUrAgSp1Db55QeynQwLe5",
  "key21": "23Y1ykykPG9TzQ383jmbvSqhdyHsa2MKyMmAWj3fNrfbTVaTTfpxkTnT8enYTe4DrBGP65iN4NuC5CaejP47vMVK",
  "key22": "3PW4S2TD7s6znF5vcrMJyiXVbsTsWSb87TkKvebvr7iJgWnNnJxghCnRnTuqck2SD6haftUJR1VrsphmefG9PJa3",
  "key23": "3RvaFW87JUbuYpMxaa9AXXyayKCwt49d8PoTvDmDWAJ1Qyx8bRGQ4F4CVa3YoF6YSteYH6rypYZcetKFWPqf2Ry8",
  "key24": "4vtG5qe4jcck3uDAf4Zv3ShAg2ceQcDkFuQGs83nDwiYGj5iTiqQm9kA4jnnkLGXZkRRQwuG27yDn8CP38RWD7N6",
  "key25": "4tiwBDJsXWVyA2Cfey2Wj8eoUN5hbL1W68FMxFpRBxjL2Pi5psLkAGmHSWh3JjD9AkuqYehBqzchhKEA8ASoUXVM",
  "key26": "4ubcrU6mGfkoGBwLRcsbbDBCvYUb2U4DLPHG2v8P91CBeqYm51pTTaPZ8mPFk1iXTKwKihkP1mXBHaBFC79kfEnw",
  "key27": "5gTSYm1mQYhq6vabFTD2PKkYqkpAqGJ9iQbBBKYn8jaHpNsaoPtfyb3zWcDMhvGL8cB4FGukFpQSfeFDH4M47wku",
  "key28": "413jNncw1JyexDBQwRNLh2TueTifDm4KZCNFzu3fhyPhdqfukiqp72A8kjeahqidnnT5GR1dDrvD1V8GaeXYwkK9"
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
