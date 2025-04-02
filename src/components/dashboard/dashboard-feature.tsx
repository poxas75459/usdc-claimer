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
    "MYRwuvTgTwtVyLKUQ97LKsEjnLeZomMC9e85JnmfhbeUjjUuJor1jFsr1JbtjjT7PM9dZGLTeUmoPwcuADxG7Ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DV2PTPSKx4b2XkgoL1yo1wcg24DpH37ug3Pm5DGhiS5LaG67GyxafekKBnFMHwLMFhUbqerL2sToiedv4QyoV6h",
  "key1": "U1CXaSQZngqCaze6BLSiorBPjNg9oFkEt6KE63sAB64ETo4nCKKr1FXRMQKEbviAsqtPMF3ZVYRndA2tJnBKUUi",
  "key2": "2diXzCuyV6XUe6YbiNt2khxYFAZdQG4LhrvZL9DMiV1vwD4TXbE1bQXA5AgcMJCMEEEEqg2pE8Cmdvr5gDTtWg8k",
  "key3": "edqWqyLPjWVbzovyFbp6v9PHf2Cce4MAaZdVhLWEzMQj9TpJyFF1DZRf1gb2zMnL8JNmwm3JmSbCFbMkUBCpoRZ",
  "key4": "2v5ii9PBMhxoirfDPuAiNKnaoCKHeHFT2LhXoe6uGGL1jid8qeZwZ5pHdu4oEg78eHTuvwGMJxDc9DNGz1XPhvKN",
  "key5": "9cufeiaB9piDYNR5nMsNtNNwwUdXproZscBiSUuMGFqwiRH3CTmcd3duoHo4poSVDmeB55HZ4prtUyXEqggMhjj",
  "key6": "3Tuw5fnBpi8XaRC8WsmC9rTZfnMipuxYxVFTzxbLNUkX1DXEDBkc7BrvotYBdsuzeA8ER464DytB4G1BrNTJGTpr",
  "key7": "5J13LtQLhZrBJwgj4gjo6zL4NwQd5rSkRaUxL6buysLju6HyccvfeLrp3cSnRfy7TPhZFJq5VcgQLx3dmJHMfW4d",
  "key8": "KAjaSd9H2Knzq9HvZxkQkRA1xVPLPi32wUhnV31sD2cVKAbHL8pFSGLGHu7hQKY5RFaULHKSpkxoLfNA9XoQPiL",
  "key9": "4epfAhhc93gsMJmbmSzETHwdHnSMw4LB6ePPEkVwJEw2vW4NKehEfB2cficavsZJc6keAwgVLXusuMyD4UUL6SCc",
  "key10": "3aRHwyvuPdjLnQkDMvnSiaMGoGFg3qtcZhLZNhXY9oADUrkU4V93JjnwQZCxdjDukdnEVZivCMYtrT23xV8ZLrNb",
  "key11": "4yHVCrUud78XWpFGeUVfwKm52jeUuFZ4fgXp2qqY5zgkPuWay4TQJ5LeMKVufm8Zx5XsnAaruYfinhzTjm2fzPhz",
  "key12": "5nfDS2AU8n1L3WUh5nR9QiRFCHKcG1NQXJM7HCYz3TdoVQZsP5MmPwnA1VoJM3EVoBvVJ4EZkjzzj9oEHiWPoc2D",
  "key13": "3Uvj6Mqdub45eS3vsB7W66sSjXej1N4CbYR8xh5PsCnnEd8SbP4ByZ44TCwunkU1qUN5nrNa8TvyU6Kwom41n9LW",
  "key14": "5ai8fAikr9DL6uSQmgrDX5UFstA1k8tCZxmNj5FxbqsATf2VAJbz83ECLPfeAjNTNwxj83CVAKoFR67EAtX7cQUi",
  "key15": "5sGVmxa9iBzPutLhUAfzY4SjuCK4Jmf9RhP8yxPoCzSWEVZJypxqtcwtKdrxNPND7Jpzxn5zfkDPJQuFnKYKAYz7",
  "key16": "3A8oa9ZBQvyroVowbCvRjr3Wa7qJsVREFEY88mQKUd7KS1SxmDwzqX8aS3WGTXDebNwgPu8TUGZ2km5yv67jBddS",
  "key17": "7AktB5XHessjDpvwFm8eCo2uM3aHZqTJ4zxcimnYSJbLRsiwhRdxysXKbbeN2gSSWZchUtsUYTKnZks35P1CATe",
  "key18": "odP8kTUYfDhNJ1oro67TiTMX7btoZG28WJZuVPWHRhYnxA1SSHRi2X8j3LXT6juBHWXnPcQ264tuVmCWhc3uwUh",
  "key19": "4k4uumjfYWci1s8BmLYdcoB77pUbLtbZWdcechEktfPyBTgJEBVdebtJVRuiArm394jf3HigwcLWpJu9SjpnuJ2p",
  "key20": "iJsjThevwUwMZjqcEecP9WwKTaAujsVhPhcPPey9dgzfG2Zb12VYWjAdER6WKayxoGtoYRrUuD1db9kyaVnzSs3",
  "key21": "5Ey8XoVQsT8DofVCRWKUn5Yinn6YvM6yssarDUkyCyQ67DNV1EpRkw9wU1HaR5PbY5u6XY9LbxswhCFRP4PG4La5",
  "key22": "3TsjUFKXkLbuYzHAJJrE4waEGAWezy1XRBgiYMtzDpGnyUHhce7TvE44mSa2E8iECGWvRLzWmj1e5hfTw2UzfxL8",
  "key23": "4hqwra42wbQMV8A2n1bYjMGszNRm1dpQ1kGwN3yuNZJAgCFgXvJ4DWPKN2y9LwrT1ydU5tfW3gUuxnqiAENfCwHc",
  "key24": "4MuDrLfMdn13kgB7HC7CyTR33hHQF4ejYCE6toMWjDn89DXx31VPn6CWTaQrFgwnEW7V49LYGdUz37MxAgxv6Ncp",
  "key25": "3LtdMjsJcRpmGsEEwiWfoGXYwy6eghLg52D29i5jWUGD2bs8zP7TZRTWCmJ6ErmjcVSHAKwE7exbTDzfWLtn3gWX",
  "key26": "vXSnc1AB9ToWbFZNFaDrqn9WCGRx5XB6n7XPqo2nhrqHVQfCmpZzZ9FRvNuyxrbYm5cdeCsMfcqsGGsvzaHb58S",
  "key27": "VssJreuYEYwSUueBGfEYXbTerDChxrocBCNBVKhTRvwAWmRAzWtGTayWiNhBQ15HmaUSYxNEfq8PQkqG4dzRYav"
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
