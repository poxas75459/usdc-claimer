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
    "5paW11gzA4h87BWBtP5imyEh7f9DWJ67RskokiHcQMHzns6z1cpRkz81XSYbhGLJGs9fdjUDsx9TceKgm3fJgnhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BzoYfKRycV5gvKasTj9iR3sC5kSTD9eLfrG2D62ojYBi9w4NZjrZG1fEoRHAcCzj3vzoipFAqa837hBdH5HRyAm",
  "key1": "3oaMuPUqiU42td4jfGGf1bemn4CvRtwG987sxmVLojxA3VpzL8Jiiwx8GfQm4uJZB1BPTAKSz8mCUpBvpTBF2Jiz",
  "key2": "9YsBoc1Xq6MaY9n1TTgz5PCBdNutoFQumEctvZbwr9nxrrrckKXv5XA6q5kCDxyHAf8eo1QHhZqXFDPdn9x4GAW",
  "key3": "59J2VTh63SnfgiFeTsc3AdpJtFTvxNJwcXSzefZcdLwyHRsBj6orMCVReV6hGiXs3URi44HbYp6g1y4jyC8adkAS",
  "key4": "2xXjuYt17QUDfLZ99ozVqEKzDsU9i6yEdWgr6u4TQM9ETDGfAJrzp6BF5MFxxRVXDoj51R6DAfiufLyGxAXyzAzQ",
  "key5": "PXkR5VzE4X7LypZiifNeKKyAP6Jigu3J6Uf2oNUWMunUBt8rm2sr1mDby7bBWXwrP9W1RAPAvyhJn93EVD2G7NP",
  "key6": "3o2esUee5iFbqTz3mZYvqvPyAix8TE5otQxW2AXXwZW8FvNVLmBHG2TNoVXi36MD6ZZf2MhzykRRqcnc6E6GzMjf",
  "key7": "3cNiZHbfTUGzDJsFbkgHEaiz7PJqsVPviMjAiP5GnY7Y7dRpaiELeeLyqMmoASaaHd8e5FM6oxBjy723L96hsAdv",
  "key8": "5LDkQ4xmCssZ5fPsTjFnxHem36uhQaPkjgKSCQTGdWBMFjG3Rm4HbbcHv7Lc4t1hj783ZUdvayQxkoB2TDYJgmuM",
  "key9": "y7myTW5yVpJo4SiaTvYSctg6T7iH7X6uErASvAthYeFD1TdTvT5oZNmocyZQr1htrg7GfQDNtZkpL2ij7RiJ2s9",
  "key10": "27CubW8dss55ARf1yVUbnLnrEuHEdq53LN8whkodvsKyenPGRgrV3n6LZjYevhsRKFqTtTgd4FBdyrwyhWTLVKLh",
  "key11": "fb9z51wqynRiuSi9paB9Mh8Pm5DwoFtdrFwjyQtpiX6YGHUkp74jn6uzUgxveWmAwHk38aRCE1NuFS8Fh3vVYUF",
  "key12": "598nV8Xdjvu1DpsZeaFGriQNcTJ6SCLZ3TcbTuGfctyoc33A6M8AQesFXt5dkv4axKwnhfWQLbD2NHdEe1TqRBjH",
  "key13": "4F9fiYtf7CHoktiXZ51fr9rUwyELC6onMjaiDL2eBKWxNTNbC5zobQZyuHgidGHSwNpiGVK1myJSd4rLity4AxF6",
  "key14": "4EJ9wcoMGt2Rjinwdb83vcgMghC9XwVjjNVCpo57235vEpsDbz4DA2LsS4yJxprzxUjhFiLKQR4ykbWTu8jfPuZ7",
  "key15": "4n54XYs3En5JfjAwsMYA5XYPMPZUCe1LMehSpoxJhpfMokN1DcRPBwSqJD7iJZE6zCHa6JDp1dQnUCq2WsVL9KGf",
  "key16": "3wwTueAcnQ1p45hjkM8zYEJq16k96uh7Sd81emxa4jCAczB9CjuNBvSSZR2z6EAy9zaPRCrFGtHpNGvy9MY97nte",
  "key17": "2xz5CCXxzoSb7j4M64Mo7QaFjAKUAPJF6ZDcyNHFgBqqk8ZiGbdvPF7zeZPXLpos2kiq29fZgyWqw6JCTc4B71fX",
  "key18": "3VoBPxdK7pkzK5gcsArgNeR55o8CkAhTNy267XMVoJUUedQFBwKgdxXkFooT8spMC4pU4rDkG7R51tUe11iKkEgC",
  "key19": "64DVE3qxEwayNsway2ZySPvSBKSNuxvfY5nLhmuDTRiQmYBZuQpFBFcgLeKXT8SPYkjH78nPKaHwK61fNRWrPChv",
  "key20": "4YcGh9oPKyyo9bGs8nfTujmnrzy9eEZbEj68RLWVb2Xu4SqwxKDDosLgs4E3dKANGsncm6sH1DbtXrpWWXNJqtka",
  "key21": "pUeLF1WaTSzAtGYbytcRhsySn4PnYiEZiFw7jze85ka3y7BFhNeheyrKaXAYuD59gSwMmpSp1b1SPsezXKqF8rF",
  "key22": "shKptUpGtcKeFZWVAjRm4sFUm2o22sBKTMFkHL8M1A3huGvKa5H68JBCL63ThWj6uS2RBVURqePG78mS3vqaZ1V",
  "key23": "4YdKSxz8RFyY8mZVpejDKz5jehxAhRC2jTHoMvt4b8cyJNSxfJAxJehxKpvLekbuKvmcQGLgnrRpwpta9JcrLFB3",
  "key24": "52HRL4mN5QnhzLKJrhhNEriSLVYYAiyVq7ZSii1W1hsH4LobQNKyEYWsZiiUZoTAUFpAnYQi2ywRSkVrnCLwjPqV",
  "key25": "3weC1S3QKba4yWPj6VdsSQuw6DJ4u5GJQhHU79RkzXiCxsc7cPUedpAsRnMdueE4797kT5wZxNX8nzA2WgnsdxpH",
  "key26": "3MtmfiXCVj6tF96pVwqEdndn3hb1CA8rbFZdt6wE36iqL4cXeoLvPCGE3DWiwN5PEDDaZDFKea4CZ77D6vRc8CAo",
  "key27": "62bsjV7Bck6ZzeFfXR9ninebxAQ35QLWQgSwjq7CZzgbAKM1SxyiKGV1h6uDPu3hFSEf4L9SDu2jJGNNGZEZPrNJ",
  "key28": "hnWH1dmpnpW5hiSvkfsNAtVfpVpayAdWKiHPHgd1C6MnPKX86BBpfHufDhGQsS9oBPHDwBPnComBg1WHNXyf5P5"
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
