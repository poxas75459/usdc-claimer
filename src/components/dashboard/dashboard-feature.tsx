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
    "31YTPYSJGSaQEoVSdqXr9hoTP9eb86apGZcdugCRg4uVQNyL4u5DaBSqHStvsRo7CsR1PA7R3dtWpLdNS6gK9kLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21xzBgHdApuGdLtZBXo2MKK27Peot2Shdh9AgnxKoSMD4Frwa17tdmtz1KQbHxPmu7PdDzbyqTywrHBind67yFcU",
  "key1": "5brdoxEov4w3uBVJCda4YcksDTuWwc5LMuqB1KVdb7bBproU5rf8tK3Fmf6tkZuNPXHWkfutNT8AP6vx85ifUURG",
  "key2": "3Z3J6vc92K4DcDmacqXikW2pWTCibP4kaQQLi3bt7Jom5mxFQmV5ZrBjeT6aK3eMrj2mDfs7ej4kftY1baMh7cnD",
  "key3": "4UsyoHcA3EMH8NXguuRHZ89hJMn8QVEZrpRf7imgnSAT81pdhnTefgtRXmDdLPXqDxLb5PratqN6gXguWxicMR4T",
  "key4": "smQ46DdtwLhNdPPfRg22ZCRib91SyTrjkeKzcV7D2h3eueDTkdA22ng3USui2bmhERp2W8SiT8Fh3soNfpNdMhd",
  "key5": "4L8iC16jwoyPEuSrd1N82FP6v9Rr128Qrr3D5YC5Wfdd5nPLFvVi88JbPzmDzvVwQHJKvZEASEd3MbUrVFyEhUPm",
  "key6": "NNnTrwJFXhbwAJxeQ4zc6sSPcCr3YWPSAPuTqA8h9wcWy83Eo6ndc7NXLgAH3YZdLDUVMjyYmtR7PJfNjSMBy6s",
  "key7": "7KrsH3Fg6wJnJzXcU5H3KzuA5cBAdURUyKBFegpKdhXURhSwpk8ShQRBGChmnbPmar5FYQHGsN6gJqxqAtwKKwo",
  "key8": "3wB38p6FsbVsjjGuFyehupmx9s3FqqAMuVErEXj1irR3oZGbj22aYCX66Kudnu2T3UMfFDFaWFvyEeSxjTsat9Wg",
  "key9": "MjYKaC5fQZHdMSqu4szTAhkPjz3gVL82VjyEVtB7rZBoxBjtnyn5vDuW4rDGFaRJbtD5tCMnyGgyCaqbXzXTGGd",
  "key10": "5uwgS9LkcHe2BWAwtrm3Zmvv6qKpFYHzsY1vriTKxPYa48vykvkWQB5ZTPUi44LZjsMASV4J7sCpFMF5rRaUpqPd",
  "key11": "4H6e7Lmgp2b4G7LfUS2yaDujo2mnUBuoHpuaidTT6FtnAjNYVwFj44AjJAr3gkwAS6q4cxTsbCbi1U1FkYTU2B2a",
  "key12": "5udt8t9W3WdRo3GDvBSzRE3zGKngraaWu6g3WpSmxyDVxiXyf1tdZjBtvfh2qy6RNc5XcRnyMPVtsT25Vht6vwpZ",
  "key13": "5Hx5RD8Kn37ue9s2WdNa8sDJ57WKZfDtmRyNMyF2zoHMas9Uow1ezJ5J9DAEHVqpQdkLBQUkVDKdjmN9heam1Tb2",
  "key14": "2ymGw8qtR6zQDGZsYAWvdtX3SyefSQ3biZEQioo3bxGKKk4fui8PSnzmGMyTe9UWxxg8Th1STG8bLHroonfEc3Y",
  "key15": "2qqUzgDaDAUbbXWWxgGXHdbpjRSPjNce2kk4hJHSD2Qmo2cXQskKgeUJBEP25P74mcKCercibhFvGKXny7cxEdha",
  "key16": "5Wp2dtL2DyJDjrohVqteAgvJHiG3m7uZouT6kihnjaueV6r8GXb5iLrxAsRktqyoU7DFstV1EPvqr1n1xepv5G2V",
  "key17": "3hcX21Hz8yS91ZSfFgAKww8Xsr8iHG787UkfF2fAmp6WXYXJXxZSTxAdFDMLKsMUpeMap2CBULG64SQFBGmZkygi",
  "key18": "4WL92AaG4P8ACD2hz8vANG7Tzo3EFM76aLL7DkuviEq8jeL9ka7SyVkeWyAvWv7YSurr6w7y2TRubbzjn9N3SJ51",
  "key19": "5PKr2qALiuVkEH8dxhY2o64bLquqYcPA8tXZZXeaEzJazdbL8PfXfcbqM4GvzjuExVe8XqBmso7vo9wMHopsyXhR",
  "key20": "5n3JEAbyWtkgq2XavAjaAUn8JrVdr82cr45v3v1zg6ThLQNiKLhhuUmbanzH8kEGqCBEmu6PGX8yHdvvPHQbPP2C",
  "key21": "3Nmtovot63aFzVQ8RFov13TF5jhwxW2r1BGGf1WjYq27hPGZJBSqjcY42VNzEVHfnwmJLc9xGs3fxCNLytxXfzQC",
  "key22": "4uRrx1xLb9XZ7jy3Y9YWYcjumVKkcuYKefYZ8ef5Q4i5gQwPUXqYkRdqEEaLULVpr3NMopV8jkbuhmSDhBYbcuMx",
  "key23": "27gsZFopkS32Zuh6HdgoRpJcKcG77EHZAtEFvY74nbXGhfxqX2ASEx7JsqKgcv8H9DQQsHJ7ibLc3bgs1aa7qK9g",
  "key24": "4dHG1pEqB6Fc3QufPi8HbBwdsSzs36w5Vfz8XRfMDKEW5KxaQg6fc77H4okBopfTHRkPS3jrQV6Cutnva5ojReds",
  "key25": "4vBovrk27XxbbiHvyTuSkHgEG7Hb4arFx5ffRyS1PNEGC2771pjJczqSpwDEBw1p9H83gbNeu9wFCHWftkuw894i"
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
