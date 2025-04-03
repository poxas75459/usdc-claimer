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
    "2LdGQtLmLrPPh1QVPMARQSoSX2dwQ2n3cnpzWP1sSZyoP2jnf3917R8bxGbo1LC5z8zv9PdB1pp92yVnaNKoQDVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JYcsnqumLEML3gm388rYM4kqKmfQ84LuH3zTrJqPtg8kWVek2b2URY3Qgk1qdPkooYnYsMqURhroorcbtCJDrSL",
  "key1": "2wiz2zzz1U9RWpu2DKvKigqgDUQFDuoTwxcFeZX1CWLKcqsybWRi6S9adaFSndCpZ43krvKEpPJd8FSnD2iQEhfs",
  "key2": "3PF9TuxJJAvkF1GSPexdChSYJaJ5g5ysVLLjwY3XFnMfeotQsxoRdngrHyjHjJc5VjyQiQhN7x7nqQveFkZ3geFW",
  "key3": "15Qbe9ggvCatUyBjRBE6KHLCRWf9ALmAVECNP4brJpcH6hZSzrFrdJPtrQ9nhbkX3zziUcnKyTKvXrW6PV379u8",
  "key4": "5aBVDGje6c1XPFQu4VyyCSkx9fn3dJz67ZAurrXwRuTuDQdWEBNeNTXxPoqzrAzuSmCc2m9maMtyuwJMusSYNf2H",
  "key5": "3q5KaCehiJcHi9NkbZm7ohP2ueECpNYyVarWE2mWdxGzB87HcRrJectAzFFkaGp8TGCNprQz3uYzbjX2WCb6xfeH",
  "key6": "3okGmQPzJvvPUwYp22SiYUczMWWafttgz1H1MLPpo1vt9oRCZLEB4NtyBrqrBSsRGiqYcc97gHBsLZPXkaZBQ1M4",
  "key7": "45zzBibN14X97KuhD7QpqEjk6hkFLb7DV2vAFLmWWd1nmrmmXg5uBsUaDWF697X8RqmJSWxxbovAbysJMZTcDwjN",
  "key8": "2ekWxrj3dBoeyrfZAoyE6VzybZmCxVHPKXfTEFBdhGyYh9J6maf2hVDPDdFF9cToV8YoAth1YjfCYEL1eWZ7nW4o",
  "key9": "563m3uzX35azexUyWttYJu7z3EZqfujSZJTwaumyioUnHaBYtomrWMn6g7AH34K3XvNra3RrgDrUFygD9DWVtVLk",
  "key10": "3mp8F8xd83i9TPDu6jdG7qQiPmPXQPBzMFkEoYpV9E3kaFC77wZA7ZwEVDBnveNidhbEyo9qcLMGF4zeMopcGkiy",
  "key11": "38tgoQbakpT2tbqy92jKcnjMQAqepV7KAgoUQVnAaF4A2WBryaNp2Qsvqnb67RaNYHD2kivXU7CLmd2e9snhB2Tx",
  "key12": "4ZvwrTRQ7BwDzozvPap5DWSnzFhnusMqnc5x23xNfzjBDLen5N4FPtbC3jZFZpskmaxBc69SP7Gftpjovg1CExJK",
  "key13": "2qmL5ifVN3STNakjRgto7edmzijx6xtyLte4THTpKUvYPwhuz9E45LfvabGJCxGWP3KkAY4FMVyGMMcsENhfcAjj",
  "key14": "2EoLF5pwcGRhmWcceEfpmGwvUSv9zCerPDBZMezjShKk3TbnWLQ2riHo7rmk3uEhxMsrXnby5VFjBMTsQHTtPR9o",
  "key15": "4fj8dwpSz1hbQqrsPF45i67FYntjsz6D3y1w3ihZe1QZEeqDAt1Ue7PAd1nGdukRVnR7oUuSUCTFMZiX2dh1K3p1",
  "key16": "2LNrhNHY2iYRHcHb8kcuyXZxvLG4u7bydUYPGT6HJhpSHZ8GvAUjgpHawCqPgMJymLL3P2oekJaYGMW8AYrBVHZr",
  "key17": "27eRPqmQnesUNMW3n71oL4DqXj8ey3NnFb1dFfZfGqGv3EkNz27oHsKhajH7hnEn2JbGzw2E7YecJB8hKWBqdjak",
  "key18": "53j34uyRdL55BeYtnmPA6anRoYKaMehxvZkpACJAvneKYWobWJT34QKYJEKpxAnty6yWSEJt8seVJn8GL364tu3s",
  "key19": "SdALX7ZCjswLhnrSB8jCWsGPP5kaeoXDQyCmrJQgEVgb9RGQrL2sfSiuosgACqRGDFRGwTeNiUmrpjLXfsapmfS",
  "key20": "374WBbwaHdMiCsx4zjq6FVPbHVG1qCHo6zyNFJxKBT1kmRP88LQapJrQUqAsd788frwzjZ7imXC4Pv37vKbvQAcC",
  "key21": "2TisECCfGjRqFgWWPW7LMszb7zceKzCbUCZ7j1wEnCY54GGSJtmKBYnNafZb7RMxBg2sDGQAQRe4mesjxoMVb2CC",
  "key22": "hViVetEJJReBLdiUV5PmR5McbrMEYyvyhT5DKewij2Vk7ucyK7Xuu6zzEatf2ZsneXjK4f8EAGuBXCjkSCVr4eM",
  "key23": "4qnVy8vNqcFVmGhnoKfpn4PE61uWVJUAHSCjCohzAwheLhxhTw8WmS3KqfHmDpShFS6FCPe3jFu4sipQm9VwnDkM",
  "key24": "9SRnqbNR8CwbGKQqxT85PXR2yVRX7TCuLvnNd1wQ7kzVhVvJ7AKtZingXrLShj3DJbS5ErnjNpj96pFXrHWGd2f",
  "key25": "3db3eTPSv7xAQNf8xqR6vpyZWXZzUBtHxTNjj6877zTXphfixBx1DMwJ1jVVnUqjjJwrz5vN9QPTm5WHPer4cLgt",
  "key26": "28Nmd26xPvgchVv92GnimEdydUB1pefmdJa1DpVn2fZSAMmBRPWnxfvgR1sPYefDVaXGMU4ZVg7Mo2Wp3WMBQwdJ",
  "key27": "iU9ot9kAfs5qGj4LMi7idKKPZVRbeaxvBokB85gcSNiSyvaduckoqUYgSyNZGHTU1fkuE2ozPiBNxmsbafKu6t3",
  "key28": "4tPVXFRR5QFPb49kr8Lm8t2oJXmC6NH2kTuASF3RA9nLU5jPxMSYRZ6dhateHCQRXyQqzq3WXAvj3tUVmbyqUtXL"
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
