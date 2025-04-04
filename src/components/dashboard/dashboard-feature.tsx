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
    "4TxPM3ZiWboE4hj2NZxnCrPPRC1x6unFogbT25YjqQKeGJotRYcsZrV7VBwpJ6GAgzzrUrVGHqsgqD7LGEvsRyLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e7D1MrZTyBLizMzX8vSD3oGkKQ52ffyhAKFBDL7fHHyv9ccLNC46PqFQDd8h4LA2ZgrjBm3DuFZkGyXHhiZDqBA",
  "key1": "2cM5R6a4Y8Fr4AAcHSKLo13qWvM8ifDBz1DXun9cAbwYwbQuHc3CzMGmRV2uLR49g8Y9BgixDjx66o1gARZQ1bSh",
  "key2": "5NZ4myGNGsoW3gPN1cX7izgxMZH4ZAu59mFvKmFmJKH3UwFbRk613EngxAzSfwZ6b1LtsqXp698cQZC9euiCeTVb",
  "key3": "4X3VENyzaiEPBAEukzyntV2LNSiwxP2H4ALGyrfimoX5KEvD9GRKBVqUmjNGPw6Secm5uTEVxDNxetqWmqx5ftnV",
  "key4": "M2SFowWt6gQUwGvSXiMfUPeUmdY2EM6izk3RgETt7FD186cNigPe5qSdH2wJrWnomgYZTu7i57RrkabqiYZD3Up",
  "key5": "DKSeFzDrEcyv9N7vBtmNWTWxs3C1ztS99nAD8AkWrBXtcaw3gLhWZYCy2rgC8VTK3zXGhAhGuMyD3n2B36xKEaG",
  "key6": "3NGumtJ9u3NQtjMmFwgtU1ecnPc1QsoZgjbt1CzZc7NjCJ1tNQbCZJgYQeY4eR8zrNpGfC7m8GAE1dMTASRBAMHC",
  "key7": "4wiLUADyBLnh8o6jMGmDGvW9sVPTAWd4s8JvRdmvLHUirEnyWMhVy3SBmS9deXBvNg2VnheF3WZ7erdx2HEfcM4o",
  "key8": "QvvMzttv5QEpJHJocYc2nwYhhk4xDsNTFEFGyPsissfM5rPGCK3TZ9icLpp23wP6T9zmui91vy5kbQ2b7JXDiFt",
  "key9": "3e9EYaxqTBV3D56of1XFu2X8now5gTgpfVmK3arfKVcwdKPnR4tfwcuAG5fimu48xFg2xnXSE8gic3yHyPyRG9g8",
  "key10": "2CjJsYuBezcYUVvopmqdUPfEFavLcSA7jQiLHjA8prEvp4FC5pS4Uxq9tbm5P4FjfNTNPZmBVPVofwcCdcQVgW2j",
  "key11": "3GUPSP321HMKXtBerzexMHn7WTG5Utm7NqKRuak5wrU7ZoJkgiMDRzgQqtf1UowLp1E3csYr3VqGWQNXEhiMZHMk",
  "key12": "2qPGxSLm4582UAiviD6a8WDxt59YQ6LFwA8H37gaYt8CvLJKkTsiaiU8tXWYuFo4eZaNMJyNktJ7Qp94yxJkLrZ9",
  "key13": "3DJpJLUNPsCcDDFCQhJ1DbrrrViNUbJopWDqJkaKVLVCdyksR59C1ejQqR3WNJj7qMKB8AgYaGedABqbwD61PF1C",
  "key14": "3rjK8v51Wfc8Sh4kxkqXaiX894HtLfV2DHvdrz75cUzbEd6mZZ1qV2gCuGB6WectU3nzuwHR3WK1tzhTRriDuLoS",
  "key15": "si4roqE7qgA6NPVp3ZfvKK2CBNXhi2iV4x57sHQAB6M9yySVKYdKG2GaRJyCVJthKwZSQgiGVpPVL96dAqVZoEk",
  "key16": "rCHef8hKbkAvU6Lxvxr2ACVdfQkBfZ9odVFu1mEyWGFEy2eFiERUaJa6jdKuuMEaMY6vae2aSfa12GdgPrhACTa",
  "key17": "5GGezb3uo592Ng7WkAHVNvF8wY7iYF8bme88UceRS5icaR9kb91ne3r86vWX5Kdu2CkNedH1kV7j7TD73BZCnKXn",
  "key18": "2JU6vPpyDitBRdCZTBeMVbj9cGmzb74Y45sZeijCEuYzUtGeitc5LuJBQ8ExTP7CsqHqDzmkPUmZnkRMWoTHw9Rm",
  "key19": "4NWHcy9PgnvYTDSBtt6Q2sGvqwycoqTMoKM6p5or313RREdyE45Jd9YP6GYLZcTnHQTfcg6pX6mY3yosLuXup5hw",
  "key20": "4rdsfZc4qRUQhPY3upVfjvqACrp5gLDiv7bM8dXNVwxtsxvoDkLgygQBjt6UASVEWcZ5K2Jcu9yyXWeMnkSuiypJ",
  "key21": "3yP7B5VeFxeHmcYxMoxtAwVqq22CyL45Tn77twcEEkbANvjVFGCkn2KgtnwZiw6A2fvaCBN6CrcqcTsZ6ueMxdWj",
  "key22": "47hwauXanPmwFeGis74yny1iJEpaA1wcjpFZzB9Jt3MQg3XeJ7EYupghaGMKSsQdzXnA6SpGQ991NnUJopogaten",
  "key23": "kGzQbyLg6qXyf7zzsaoePRcXeAF4sj5guyB8PPJhGu77jfyfmJ2vurRUWLe7GfYUiR92nj21mSrQYFp4fqwzHbT",
  "key24": "35aMUqogEdLkNTN9t5meuBiXuDg7wLNDHuEXAHyLEtZYYCFCF95nGMnSCRRrvBffCnu8MNVKxMzCdTVDwuEgMjEt",
  "key25": "3wKx7XiYZJK3T7no9qSfPeCq7g5gSgKrP5PMQ324zRofHiWnRKZPNAzJQnN7sBipECZpugNUJSXT32mw3mL725Vj",
  "key26": "2QsGBWMKKVMgPn9e5BECGcyikZ6MG2cy3evR8R7v3dsS7dNvV3eTunBCS5f5wD3XnNik5Xv2aNqoUDtuv47NLULv"
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
