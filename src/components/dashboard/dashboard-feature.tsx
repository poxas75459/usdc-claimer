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
    "5oeNYj8JDsEF9oEHMjgUJE7KV548Qsoh2tVxBsZzTrAp8bSWELtZGCPnuXyBigXkTTdUngp597F9n3t832PNxaLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j4mzsYAthprdA6VBJ8CU8Q3byEzTSCdMkhQMw8sdX2pbUmK1tAu9kbKRGH4B4YcuWPxTFDR4E9w8zsNbx3xXmNQ",
  "key1": "4aJKgyzBSsJ82bWHAKQiMV9KMh8WxBbiu8KXxDD4jjKXF5RQD7TBUnsRGUgGqqdNZyg2WAAtFwZfuWDQ6dvGkqQV",
  "key2": "4MwXnSYeczhcqg6UN7D9ABG5oNULHg5PjtAqszN9Cg4rDS54FzqM9yS4TcacMxrETncGd5NRFmSfFjNb9kmYiRcQ",
  "key3": "2LQingzp3myUkFxmGhDp16qiSuN27AYaDJVECTCcEtEEm3PNesPbzrSG9J5FgF64ajVMKGEPraTMG6MppTznoZsv",
  "key4": "4mLKxZ6ptNq4ErcKoqFpScBPaCLytdvMQcNi3eDqQHBCyLSQ8VMGiXg49bN3eDqVdjLj9g7kr1E8iAAHdjRzVXcZ",
  "key5": "4BZqYeio6g6RDuR8UQRhq6brmVSepxCmBd94RWCYT9gkBB2NWs2dkwuUZNGTD2EnuoSPhjoxrSJju1czaSJta3Ui",
  "key6": "4n7eB3xQuXRJhSa4XLTRvM1obMoZrAeDqVWtoQvYTLc2hJAjzjXuYooUWzfB9rtWows1hFYnrP19UgbJXx2Biiev",
  "key7": "64D3cn1bxVp7zDPL1TUSNBB93pYNojwwxFm4K3Fx7sFJhtLJxkvMuL6J9LXFEsf9f8xFY28x7GeAecg34fMjeyeZ",
  "key8": "5Y24ofKdL4a9jAEnaWFoW3Up6DPJQwChQmrNMty3xRA6yWojg9jKSuTjJgDPGrXrcfqEr83wsrxuVNpmfABcF9bp",
  "key9": "62TvyEb9iR4SiyQqsuZEhCX2KRwfrqvqX2LrNQEB8dgrnPAFXnNnNjceQTKugkinehFfdLntQ8KRLZV9mJ1egoMW",
  "key10": "49B9GGSfj2w1P7y7tRPnkFRLStNJdGZkYPLoVDxs3DSBG4XkkMUuhWcGANBPXJzfYrD43762xoAPJnNvVG4aTHNo",
  "key11": "5uoDagsCWCpWQvLM7UG2xCqMhyyuVStxm3xRskoge1XR48P5oFocyBJgSTPMLTwdQigz4LBJomMjxLs9uAAQgBpk",
  "key12": "5ubVEoXkv2CTYhemGdt8B66zYdagJfoboM5LBNing4AMxMmDpJvE5er7vKV5xnJPYXxkErSktTijP4xiVT6DZYtS",
  "key13": "5DM3RGwLGBAzttvAPYrRdCkF2FuXtUEjbTKf5HggLPiur8axa9C2abBENtvquFUjFd8jE6ZgoJUxRnqx3ZaxH4HE",
  "key14": "3izoTUmH3xB7mLXfFdqxNMkpdw1Y3E953s4Rfnre7PPLDakbAgAkSSxUitn2ctfoznFAgNJ8UjLHF1YAnauKbToX",
  "key15": "47C6uM3VvFLHFGB3nYRpfTFBcyoGE3Yj4cgE1ZkkqHYqixar7KJbkLkS4GJw2aHjLDnZYyzLAgun3rMgExSYwHJX",
  "key16": "3RmPXTMvZnQhHCFaTXF1fEMLkoCKYdycDgN26xLHWxvpprKu63HC1BLvHbNBp4qt4MqEikQw2Kxcdz37RrkE6nzW",
  "key17": "398QjyPZx7S2SJ1Ycm91qzgFidi8ymaZvKU2ro45k2uHBzJ5VTHfkktHAVbWELHhtpVcGZdQCogh5vgKs5kN25Wg",
  "key18": "38orGFDM7yZzZBsH2Lc4w21nD2dA9MDd7qiqGoWDWBrZz1tW6ap9im8X5kebNY7289tsFFA8DAgqsFpxWtknLhS9",
  "key19": "2NBjVJcw3TfAy8reZr6o552PdCdFHw62gPSbnxuLDHjwDN8qWcE7pa5ApvVRKRZcx6kuyLUx9fZWsf5ScNRps4Sb",
  "key20": "3fjVtapJDX4sJYZWot7UAncN7ueRB5rxppJsTD7Z6BDLhvmeAY26batDH26AmEQwoaM6hPXRktgCndQLZhYMAKb4",
  "key21": "4Jr2dtEAabrYQh1sTZGqXm42TkiLncoThHBpwHMfkRsTT3QNqiipdBhe6GVAQWe8AbNaGANgAVMrxdEoNKXsNyw7",
  "key22": "67j3S7ioZSxd4uaVBbPyd6iRwAGBydEELvhCv2K7Aeo7MWojiVETEdbuPuVrsMHdF7vpR6A6jd5sCJM92Pmwr5Ta",
  "key23": "jyrjFK77x3PLvhGpno4A2dHUPtcpbVgGvT9AZFXR3M1L6ox9wkWgCQGFKuH8B7YifNfxLJJWKA1Q1B7cMxyewx3",
  "key24": "28E8kuafiF5ej8qgt7ZAXv8MoY9j3DTL29hmPPQyGV4nGvk4CL4jSF5nsKW2YmRYkBqQRJtfEiY1jKB7hNVKTiuw"
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
