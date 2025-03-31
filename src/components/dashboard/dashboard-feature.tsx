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
    "y8Vr8sp15Uewh99qiacxswCKgkmxYyNLNKTsAdGsQoRjJzPPEKBUd66i331nLsf5FvoJqFc1ECbHuVAe2fumFAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qsFFGjpTPXdr8Q1rzxFEMyhti1roDrNSJeMymswFzzh1Kk8qSmZi9uKp3oewVina55g9PfKtRUJNrv3fMcMijk",
  "key1": "4TtyyJ31jYrxo3Ye7fSV5kGHEaGLg1hsFk1yAuKdacE62S2SEdQQ5vzia1vAzYGiuDbvyN4gNXdrvvGWtvusgkvd",
  "key2": "2ZpnmnN2Xn6oL3gLQMhkX7GN4dbnxR2LYFzF3wTkLM3dnJEoUv3p6p8Dzj6PpNFvxcUkVNaoNSFBBmzCPgRYs1rA",
  "key3": "4yKnq4TXwuXK73jf3L5tt7oLWgysSNpacmt2ja6ccerPyeAUx1yYg88DgXmqZneCYTNVq97K971SkDhcctFcrpwJ",
  "key4": "3BcGDFNXrw7Cs2XGCj7tq9sEZexR2q8B4PcvLwpG1Hb2ZrhEHgGWUdKhPie7UgjVrU3cnaNNn2Nqb5M8bD1Rx6JR",
  "key5": "3nDpUmpeDdt5xsxvtLjUv1UipvScgFQQvLGM3RCtqVVh4AVkcNbG1uA7iXRqejUCefUeLDw3tSwvrvT4Y6nC9oM1",
  "key6": "pKXiRHf6xAEaycPJ7ZBmxBT5jH9UZvGn7kS8peoaWZHsN6BpmNBHVz62z2gcixusr1x4qrLgRFnAi75cUoTJSg7",
  "key7": "4UdWvHg9axGB68yY2vZfA1Gz5BvRUfte5nVoTRWdnWAp2QXN4gTLJv5Bc5HQaTLPVEsHYLP3Uby2jETRTzi2g1Zt",
  "key8": "2cGxdjWsVUfja6C9W54bGqdX1zae8rnyhZuQNM6Zykpuvn3oHCTcZk1Ymgo2PRNTCmGS5HcRmuQbHjAGNJvWWDTd",
  "key9": "ufda1DdcGrqbHRJFv4CM7FKaME3dKrEMErpfYcm7Q4U2HbVUKizivKAE7PbTwiyw7EWYhspSHFcobt8rGAfW12W",
  "key10": "EHcwwph3HMtkMAp7SQJG81kqWnmwqAdL7Evomgjxu4aNbRxsVBB5VJC6MaYnE8uSTnqiyERc4yZqYHnPczp25kQ",
  "key11": "3QZiUVgUpi7ZSh8LbmR8AFr1nh65mrCXpApQcZEzSuVpvkUpwWPxVxwuW8HdHBDHAaA4hBUUrKizBKvN9tuoVxA9",
  "key12": "2jzx8s8fmicdcWhDF23E6mWrLxyomYgvnbYQZ24HwS8FFsjXk1bNDUtpMFXz3JamDdenZoRVijZrz3cbB3Eh385r",
  "key13": "3mpfFmfPMfRnJL4RQRtD9txf4x15wRqvd2smBYrA63QVWqzWuuJEenMVbM8HxJTTubHkz2nPVhbRLyYCXva7sU8C",
  "key14": "4KD7ZvGCh2NJKAZw6e3zP82MbARws6frB5gWi9AZmtDiManjgaRAqCZjQa7eRqiWjEpx1C9ZXinfGhuXJpXu54mL",
  "key15": "1SwqXZubHovcpD8DBgyEvTw4XN6JerJbJ6j9Bj8v5gCYHmECtWN5i1KBui7TyA3ooKXHcNqJRSQVUcVPyrcxEC",
  "key16": "2aAQzTCADFLeeC2Nn7tyYN7oX2eWZefwTTP5toAKUEzHQfmAWpamKKxB5U67ZF3d5269Es66MzdWpqrLvwdibHRZ",
  "key17": "3tTFw8WsfnV8v8LhYUcCFKmPxPK3oyB3sLgyyLjYeK1Je7KhLsn11Fst7Y5PVWg3pa7SiEr7rQDSDvJtCZczsUEB",
  "key18": "4F6aiuh4So44UVH1or4b3djeBFBhN1xUK4pX3zCsADv9hBxDmQUFwfMUqm56ur3dcPTFR3ddFAHqbn8gppcL9xJx",
  "key19": "2mjmbiG3mLrY6RaMe26jWpVHdeCrwBuMYRK8D3R955hyps2DCBaHbgDe9AmhXhnWtK8vcqhdYHa8NQHmGRC8U4wH",
  "key20": "4Qd26NEEtX1oDpt1kcwjo9XypjwwrpLPPY6FXCHtdhrw1vCXKcTw8nkRAv3PV16YuYsat84d3VCnrHd7tdQcR5MR",
  "key21": "2Tm9PiyxqbX2Tbq487VtEcaVRkBsUepioDpKHq4sxR1WgZJwTmMuNnTm57BXAXNhwrmtfPuKtxYLcoxUn4Q8Yt3m",
  "key22": "yAZC3sDVTSxo7EKPBMbfqE2vK2qRDjgEmYazEgon2UBAYpv5JiRoxZRbNPtc6QG9bpJc4tZiW4jSyHE2EfRZRRC",
  "key23": "5m3nHSoa9W8SKKgjATPDK91TbbG4gCq5po5qiqR2pVWrC6YCdkAhJ2KVArEAYLdxFGdCAXModLkRNPuyHv2jdUg8",
  "key24": "2HyErmewFSRbvSgKeUj2gSSejKCCipKGR896484ChjznVWp65ebPAow7NHRyRQVMBkPCkTHoHZuXxmMWwzDVnWHC",
  "key25": "64KSSsoXHPXJVjg1i4ajhzh7NW3FgxAFBoJ5SoddZjDXhqETWjTe8Bpo189vLT6T29kYyPZ434MwW17sdT46BYR1"
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
