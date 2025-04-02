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
    "2R4zo4MYi4KQKjYhv6z7yZK4TXqFtRkaE1H38pcELSknMmDSmkDmR5AV3eU86SFSQgCGFz7orWfkyCnKPHSFQBEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DWuWC4G1gvym2VzP47HwoyFpid91zqQqoUeeWc68mdELd71P5FhGHTWrVqY3iYKyA3hBg5xkvC6tTLMcc28LyoW",
  "key1": "5Xefyb7b78uxjwFVZ74oAY8tKRVSk1CZb2dCEsrP6qALgSa1vi95yHbH4GQBZCCsk8MPLsqMF9uRdewHv5bw9mS",
  "key2": "3Y3NvrXFi23pvNyNgfm7tFy73D1xF8gHiS7dZi9v12PZNXFDLDZGp61SafxgDYahUkDh7is4J3FnQHpaNA6twP2s",
  "key3": "5wZM6ezcyspikRL9Hf8aQCfGAocwAETfk31gXcvDMT6UYBPrqYJywiqqLseH73fmVTmQG6bXCSNYJsygB6AnttHy",
  "key4": "5BJBVznC4Do4vjSaSQxnQcQ11By3yGFQM47y5xEFEu54a2umoPj8XnaNExRTyK5LJJbMobVswQ3iFz5GvXVeTj9M",
  "key5": "2fM6WRRLhoRD1jKCxpfd31pjvGmwNXkddptfvEFmrvugoqtda25TWeAzHrZ1D23p9QaDC6WBknG2ZGY29bEifCsq",
  "key6": "3ZWy9Wd77dhyuiasJM1a2W3HGRp1JtcfGRXLJxDMPiZghgVX9nF1dsYGWdRqQKUuVVqFWKzwbpNPnEAxWQDcqNyj",
  "key7": "2RfCBvPtTmchVvfcp3tk33ReNomsdHG8jUXRxmt3zE84XXmhrVTm1TXMMEhw1BTTAp7di3cuynBXzgatF2LPUatL",
  "key8": "2T9kTTfBBBb3T3Zz1UPfM9aDLNryb8GRp2mzRPrnrsAJ7S9WRup4NuV7vHRwigXwQhEPt768ky38gzU8y6irt6Xe",
  "key9": "2W6da3WBe9nL2iNozp7BccPRfXgr17tUFTbKjPQkX6PPa4P2jB31dJAEpZHmaQLGdnntcw7EXVJeJ3pxb6vBsi4H",
  "key10": "NgDgQGb6oBji4Xr32sBNjPNoxC2ASRQ5xsHExE64yUCo14ThzVHFaqfVop9isrrucNkp7p4MwvkAKdVXaxZErbQ",
  "key11": "2n9zhGYbK6i5EJ74z6QWSdxLTsFbbyDxfUvcVt9Ncgm2ecifJEeDkXBa2W5KrhfdTjGmVpLxmkR8sYuEK9viU1BH",
  "key12": "2dm91BrRUwx8Mxnw6m1hNK4Pb8N7GBieABj5pyvp9UNShv5tTergppnB1L1RhGNVTN1Bc9CF482fGR4NoUbmQub5",
  "key13": "5t3KtwcfxGsy1KTzbYAc1XN2ySvTSZXn7Vch1BxU9Q1Em5jJ4yQUwpmAp8sZmo1uvj2tXTTGjtZp2EgJkNVRZCia",
  "key14": "LdY5fnoYVpQf4LdX56ueUMitFeWjUuY4sGp8Avb4FxFbxH3mBzxZpG6XmegmXr4Pk9YJAsajAfsds49DPHeTJK7",
  "key15": "RRCy7K1Gc84kZFpjTsQff7Z7cnMKRqdAe68B7sKAKVPNVJvTVjBGQAPFiczzTHrUXeyKiAHVYnNict6wEaaE56r",
  "key16": "3YaPZB2xvVk3fNariykQ4PnZrNtJGdX6XjqvBv9U3YuQSjVNptihwdZiJHLvAFniNG8eybP3b6vtVsELFkXq1dZ2",
  "key17": "3C5XJqs2cPcHVFgsGsXMCtHBrNT73HyrULWiph6JQS7q36sN6bxAQpRRwMZD1dKHx6RDTmNSaK4N1PLY9Ju3B8L4",
  "key18": "4AE4a5qo8EYM2FxonkgPPy4u3hNn1zEgat2YGMPRoS8maFpFpfrJFH6a67s4L8r7n1MQEvbygovAPUWENZ8WGdye",
  "key19": "39QxzNP9CcENnnhrk9dfqfmKSZP42PJBWQAuXHzUENcKFVYs6Z7eVYCSnL4bv46vJezkEQzMmVVM9oGXTT9auA8S",
  "key20": "1kaDxAwiAtyDzaeLsmUGLFp85MCmiLYkFD9uo8ymyq7EJcStooYfk4XJh5sEzQGUdiFRHEn11gFKvQMCLkDXgPG",
  "key21": "3Qp4bnUYTRwgUSAT7nqRWN2betohVBqN86UW27MbPjBtTdwNjn2Luhb9cMnkfGVBDjTidwGiqyEBCqxMzqY5t5G",
  "key22": "4BKfSdVLDGeRSArk6i73g2rPDTUTmFEPENSk7AMqSzHivaVCowLtGPPXjLAHG58m3bYT6i2M3A8sQsvQtxZqw6uY",
  "key23": "2Y5tvzYGYMvZmccfsktqWL8LCHXmkVtaJqxLsQT7hPAT6ZYzdHZ4uaahz74Cr1vDKpRPpQhvxP2ejdumGs8be4gs",
  "key24": "PnZo7L5PDmkC52JLLsfrjNVbfeTSyqwtdBDN9MXuCYQzsb371rbhLiAxN7DcTRkZ4rkgQvDQx3qNJKGLRxFHZKT",
  "key25": "NR8HTYt5DgVdH4ArBw38iWUXWZLJ4DhvUTQgFjfUbpHqBivVKmZNQ7ziMj7yVmV7AKnwBPu71MMCVV6KpUksCy9",
  "key26": "u5eBwTCf8nfSUdMvn7NarMp1xRBQMVDiNWDyjStFLwqdSbXEQZR4eeBWwNCPfW7UAVN9qVacZvHHy8EQEr1bAcw",
  "key27": "4qG16zLfxSMJ9e4bqS9bPjZzwGrnDDxS3tmhGgeeXQEt7NsXEE8YUGHyrhvpikPiZzq7uRsqGVakENrFkYy1TerT",
  "key28": "4tvBWQD4wWkDYGEGVfYi82FnN5vQbh8GopAE7CEv34kBWmRUVEnCvqVCSnRXricis246pdsr6Fp5XbZGzR9Zjm51",
  "key29": "3f884HdKNGzmfbBXcduBX3gwacAzYKM9kamN9cmcBVrU3B8NGgj6UXSuU8y6RrYQwVauYKGuqhmxF15zX5aUiH6e",
  "key30": "4xWRHks4Ff3izB5fGy8j2nxuHeySaVhD5PN8VPH35FmS9BvabAtYTf37N8CmYqPoCXf674wXqLSyxhpCUbB88HwM",
  "key31": "2qvrKm6HusuYy4YGFQJBsh7UiR8tn9AhcsS214qH78b2uhNg6C9ASikVQnfg387TrjJjVuDEuwEYiULfqNwtaoQY",
  "key32": "3zc88pgq73btLwbJqy2RLf9p82qGTrpNAjkPGNTmZh6eagMjSuL7PoLkiYekeKEcuHfrf9ag8UBnjJhw6UH9XKfs",
  "key33": "4Ug6SjwCbkVmLHFfxK76gEzDt3GiqKYCFFdXpCP8Gkpr8FYamVqy3e8u8badPtN8bhZYH4ntYrQESf2qKnoAXfSA",
  "key34": "5kqbwEnVUDwS6cF3SBVGJq4rtFZQrAKZcvJADwugcGxfsXizZoJcx6dY94fWe96VtGhfz4BW4SKf3UCa63fGizmb",
  "key35": "4v2CtT7HZSGc6dkykHfaEoaYZYWvRUPPpzygMK8K3JenoBvVagxZD6FmAYCXvTGrAViWpx3masC4BQRD3gdvKs42",
  "key36": "4S1zPyhqeK39vDwLxjMgLsXxyyQuX5e3jpo7h8bdyWzhWZrZRHn4rw9Lx8WQXT7ULYvLTMHWNg5SsVwcHfgytzwV",
  "key37": "3VnQKSGqTBh2oKz1gTdiYUbZA9aJnb9AkCVGbrhKJw2XpqiZCA13vVLmaQR5Ya5Xz8rLuVd9avQdZS4mr7GCRGw5"
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
