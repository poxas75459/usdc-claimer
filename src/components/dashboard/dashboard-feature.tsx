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
    "2aVWSfpnjfRQhPgnHULNpPzNeX2bahVLew5eQBEnSKfDaFacjbxjxcr2QYzeA31Hi18d3v4h5EE7GtCGWL55P3GQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UrtijJkaUAn5VM6wp5Cu2WwLTCEuHb7yS8LqrPvwsfGpEJFg26WtxWGjZSxA5d37Wm5qmdGguSNEsXLjN5jTics",
  "key1": "3aZMkK2bwv4cqeF93onA8jt7N1noQ9PGgGCvgHYAnQtzYwX4cWcd7tyfEmmNWQ6od3BsMoszV5Y2z9cH9XGkdTyH",
  "key2": "4UUvh1XTUD5b5RKe9vjXySRdWNcYt2JaFcVK9aaqTc413XamentFTCtGisGuKWgTUDW8iHjF9RdzQFKddHJmUSy2",
  "key3": "sUfvqHZHpPYVPJCR2NxGJEu88gK47JdcuR95EMyYQJL6jC2JVC1rbnHcPSLFRrbvxnHRJstM2jZstFomCcqpo6g",
  "key4": "zPL1Pwzf1TkAG1Ke21fhkQbPGnybWL4QaJAu36H6iNLuW11NCBvFuJG3KvJcSRF4aD3zSk5BQ23UUf2Bu8nCdR2",
  "key5": "5Mccmn9b5gvcuvx244rBsgz9UgVXeCg7CrCAn8veD3AR1dfcznuehtRMBStnUBaL7UAd6eTK3yYhmKpXm8sFHsgM",
  "key6": "4bhryadxQndz3wYxmr9gnUxCGxE3pKgsDFeDV6iqptBLQCptf4HEcXeJkFY5jZHv4YxSjfnkRLTWzMZi9HCipnbV",
  "key7": "5wGTECG1FvFJoSLbMp9CiBJMDx1Ls8uSvFjyy5iwy6YYmSWfWwh6LoMmkxkhaopv6vQbWzS38BYTNmgX8VJk7tSj",
  "key8": "58eZHdBef3vBD6KChr1bgK1jwjJ7FToaTvmBq5uhq22pqPsJKZdUqXku6yixijujxCv5ezLyLT6pcRxtynJ4aMwQ",
  "key9": "59CKExhyBAGX2sRGQbV9tP8dEc8MpbBvp7Hc5kUt3qDscBffSN7v7VucBqDCr8xv1HdsQvRYP3Hf37uqnvxKBio",
  "key10": "3uMkYNqnFqdiPiAeMVrYf8MGDCjP6H9UwbrnGaNjStEDhPiDLcCmDA5NthRbJsfqM3KF1ekqq29EGmRyaqEPDWzd",
  "key11": "5omobzfEFfghdMEsfPCCekrw3gaCNQH6Hckkw3ZZiUFiXVcuy5fe9YB4LwReCDkUsDHHv5S2kDUTgeFTdQSFDpth",
  "key12": "61edJxbGVhS3m3qm5AhpD9AZKokBBifJYmZrSYEvpPyW94n2uMQfaXEyMZipBeowpFmmR2cgUYG4BF12nKWmJ4UT",
  "key13": "zvwJaBNCUdniDwwKV4uH36oBEGPBQEG7vXy9dEDjrV5kXcjU8qDfuQgraqnRxEicQFZ7UNuESUHLecnfKmeP78H",
  "key14": "2guhoLKtwEN3xwhftvJLM5JAXXrxwwNtbntoRpjkwpDrhbatpb6JGNw8ZmHhr2n5d8B2bx47uPrBmwUa2vPz8EBE",
  "key15": "4tvSDDBTYRQANkxj7q5KWLzWGTGHD9EmqGNTRU9sH7CPkaAN4uBAEZBcaMg7bcCLRmjmsvEs9FgrJqhxJaTWJkdb",
  "key16": "dBpVU7SiuUCYUMVban5XruHzS58ae4JpEfuDthMgtPormuH57seGGqCduFsicd1o9yq8jiZuAjA7JqWLURDS5Gp",
  "key17": "2YEwnDxrNJMzWybZAVgDTAiQBjPM1PfxFcYPgP6sYJJTXAEJ28ybi5qCyWsbbBkDpJWmByGCZMp5eC1shR4QZFhR",
  "key18": "kZhSVpagqRTiwuqntXYksf3yHAmkaEkxQU748zR4toQB4qGVajb9GrvN56E6FE1WdDJnA5grreuBwQmime7X1aG",
  "key19": "3sUGnjmdyqxtj7G5yNWF8tDk9CHyT83hZ9zTYARQ27x3yhEgVUfu7yBVB1Cwhb4oM8prnAwfDDE41bpkosEYVrD9",
  "key20": "2gFbuFEFD2NjpRbuaLYL6Ewb9isD7xdvpe8WbWTSnbe5rU3gEMtQptpg3LhEngkG3BiMecpoiMNvWhFm3FESrTMR",
  "key21": "4tDYoqCraVKtmKJCtCzZog1TBNEdbAPgrkgSshAAKRaUBAsoGqzWTA2wX2tAf8RhQdGVwrhB8FMbhZqxZQfcrvdM",
  "key22": "5yYgP7yZLZirj7LFvZPTo7RXviiaomAMrpzCiKVKDYSQe6fVwWFKvHJ6GDYYDtBRoDgvidirEvwZU1eMGDU7ESb6",
  "key23": "p1K4ytYoJVtzFunVwZ6qxWzmLEFNscP7q15FX47BVT1m66zGCx8DtyCvXfXWx79u2d4f5TCaWEh19sjHW1zQJ2y",
  "key24": "44wBj5Rjf7F8Qky8QZv3NtteBSZK5bv848naEt4Yqpn1ekxXPXfmF3Uc3h6GLFoho3xUHMYt5BjKpmfs8VcpCDvF",
  "key25": "39k3rvYnQ9jeMc1QWnnoznNjtqFnGV4E1YDKfDdYKoiGaW1avi5YutZqmwB8ySMuaN9PcqHiWeAp8MWZAco4zLr3",
  "key26": "3BAMSes1DYPPRqxze6E6EkX7WcCogoeJiUBaKPgTnBTX546WABSWFcF5eFzZZbNssVPqwUY5yfUHSRGMUE8Sh595",
  "key27": "5ayCWsEgsgQarpkNz8pGrnittpczaywbohA1S3daBzAoUJdvq7Zy3UQMyauBPTK1acdMv3CifTnrDUYB4qonVadu",
  "key28": "46WZpywTwEn9pdW65U8xUaCrqvcLshPTNVnqZTAH5G99U9n2vCnwZGm95xTQBAZsKjWThrGirUcEf6Xkz8cVYkDV",
  "key29": "5oY9ggHHTE7PfTB5nikVMsUaB7zrmjbqrbYQeCZGhv3qUw3fnXbik8TKv24fZ5tabU2pTx5GZHUAgQi6oRfnq5T1",
  "key30": "411yV7ytD7rhMk6TZweXNFMaqrGpDkBkShaQ8HtkGbK5xAUyX4aW4MGUpL4rtSzLrGWvHzKeG35oYijTxpePHF96",
  "key31": "3qTL4nH4bkic7ongFj4HSJC4vwjvqoKQLbSfKBHxTLp4gMMg3mFXHQQEm7oVV3sVnkp4YifVQQ3jSBkMWB1zjd6e",
  "key32": "3ZjLpGqjerhq3H4cK7gia5yboPX98uGaR893t93Lj6wv9sfzDiWFG3CP7qEyRPmafTxSzTWmoz6orh9ZowM1UxYC",
  "key33": "28NuFE4U7skimL4mPLAWWNTLsyGUyuNKRD89cNDP9SHfpPWynfoAz1YHPpnzEYAmcUHdtCukrf8fzs6Ezt93bh1x"
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
