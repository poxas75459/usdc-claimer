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
    "4Do9hQHsrrtCN8ugbvGENfyW97gBysPqdnfaVc5LddHBhDz2Kk9jAb3GkNGa47CrfTYRZqZ1o4grffyNt55B34qT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PoyVqjLMSzADEJgZUVSZ8vA2zMiUq2wudF9pdHuxSyjBgGyc1npLjJdpiCRa6YtC7BdskJN9jT6aq376GuHMTPz",
  "key1": "AtE1svTvtACXbnUK5bqQxbKYqV9Bg9mDzarf3SPuexLGmFVpduAbPCMRgoQDBkbW4AaGydFEHTbyWRJUva8wJFv",
  "key2": "4sWD8gR63SW98gnEKCjU8rZL28oBzEsMAbUEPZDjsycUL6TCncsYaS3i4zUuJWNr7Dv931PwqD4uF1uquLnsDW6p",
  "key3": "4Shpret8QcFnFFTHSPUvXmRZwt97BaCkDDSX3BEkEhamibUfZ6E2X6pfxG1Ya6k3opmJLmsEzemFqKfMDmJAHGeF",
  "key4": "65jFp5hLTed3372F95RL2Gp4dM8PKcdsBSqxFt1ZTPyTsazK3s38YsaaEkJPTeNCPGuBPnAPwfKu7JGE7UqCuVGk",
  "key5": "2uYf8jvPooz3c2E2xrxz8oLGADpamK66fWHdaeJ3b3vqQMv2UkD8BDNYAtjcFjSPssHEbUC5eNNZ4ynLhiUgsLkW",
  "key6": "4ndYcg8CceJGJVd4QULsoCsVgDpu9Aa71BkJFNiEvraid9s5E9Fznq97UNNSYeQVnux6PQq8eKESssFwYVGm9RoZ",
  "key7": "3hPS6v9cJFU8Q53qWPaH5Z9ALNcfNd1Y72BKbh7WyG6cGxSQ9Ej8V2bHZsrG7mBfgQnmrJ4Y4eDmhCvPH1GPD3fp",
  "key8": "wgaCkJsLHghC4C4zgthZ1Eqa4RUgCepBLx34xxTA9hmfzFuNTwpsrJ8rhwi8sj8VrbdWgVT8KQZYoAy2ns3qaJa",
  "key9": "3FYgzfyeHjRH19VJWXko893VCoXvJ26qsBMmvUB8PxwTu3FcSSquXD48eZW6KhQJy2wCPx5qDpFWHYBMSmL5sKfM",
  "key10": "2jj8phvXyxVxEMmfreQ2p98P1gf7HVKMCGo4uwoAZAQL5NLWc9NMYxcmdqCpopii9Sc8mcKhxXcV2X4xdHKoCJtb",
  "key11": "Dj8kmnr1jo9jm7y9uV3WRoafeJMMpBtp41vub1EgYbZRQE1NMJcVcyKatKUZUteLYysdSGpKV4D88yMfJv9H3pd",
  "key12": "s5M8RSMrcG6ALQP8N4rFUfwyZYrKGWxD5L8z7QujTUnb3LNQbEtotCgZ1jSRwh8fsKuQ6HVGDqQvnkEWtxzDGh7",
  "key13": "2HxbJDKJWe1Dkc12tUgpCavAHE1vdXuJPnBQHWWToN1owewkYZHmgBugCSiWvwYjkkqXCxfRARn4XvPLHNxKVe9y",
  "key14": "3KHwXVGU9z59pGpxdXJDURdMoktMdZzaviZnAs4yjiQF3JrA3oDh4CS6cmG5meZvhBZe3sfPvT6P1owo1GRMHBbb",
  "key15": "4Ub3cizAWd752QkxwQeiuk4SCrtgKEkiseTuKfMvA9K1G84jYdPyNaApfoaaEpLFgFLKxScMYnvhJVpEwmsojm5s",
  "key16": "4GCkRPaDku34n7VBqNdLVq9RFarWejgPzp9HqSx1YLaTjTKL84g1NDmQAvFDHpdSmDMb446aFFLLfRk9pejBAbbe",
  "key17": "4RTdgd7tSYkWRFQBG2zyM9MhiJ48wfviZK5DA3GWYq6BbrRQWXhhEEbi4wR3APh9UU2U2QZsPQyEYez4rSjoAjFM",
  "key18": "3nQapeRbPUqmJHaiRnpSNtoc89qe81QnPdHgJWfj6oAFRqoNpBX441czunNrPLF6bDiVGbcidhh31hVULanayycE",
  "key19": "2k3x5R8sq2dP55JhbE6jUkhrS3QhVmqavDC7rSjSjehngCRWBUH52c3dEYMTbpEA2WvmdWF93ECnwndnF1cntrpc",
  "key20": "2FNBkZ5Xd1i5iRiRcwjDuuHTEfugeqVNYP1FM2mqCcBsr4CWYt5Bjq7CuKH61LcdA1gxvDM8cPn4EqMQWHD1uHrC",
  "key21": "2FKnKTna8Fsxvkqcbh7z3bho3vuYQJELGNFqZk53jmu2dvoy2vN8hyiG1zVhpsYHFXfwHHtK3ci3gaq1QdXPmfks",
  "key22": "2uraUH4CKdCXdwEFQ5zn1BEWm74U88kZ5YePpB58aiEEViSoWdN4maR3WT4SG8rL1yzhJnsPybJMjZYT4HHi5zrj",
  "key23": "2amC3EUT92sQdPRMDXs3GaGK2j7jyD9PAx575rLzs3dqb85jmm1pEAMPYKwf61nP4DUmuBbsJddeVuQ4YbLWSCuB",
  "key24": "4eTyy8k2pqyNsRasiaVmdzo1ueJiJ2oAzQDvh5Vh1c3MYNCUgK5zXvvhFSDAbiPk89gLe6X3DneRC57BEa6az77o",
  "key25": "4hyN2eh7XJ4aPPzo7mnEmrNmH8Dvda8FPFU2AzoZCgZsS7WZG9caYSZAqEkAHLoY2hoab2c6tq9sSLCKycXhf6K",
  "key26": "5eK3FUHKwsAQK7aj8D3UGBhYnAkm1esMCBQFUgPjxrte2wy6uzQcWjJRLJbfkRWjzbXj4NYBWLpkkD2eFnNRKBsK",
  "key27": "5gapv115w7rZaHAZoKeEDXPiC5eX3BnZjZTz3KzvPdqgaHwYJ2QVYb2iC174Kvaqr5Rtx3XcuLr9peBJPuJEEM7P",
  "key28": "4HpFbQTTKYaa7BGKFxcrnBJ1NJAeZGuCPqgNQodBxErXDELcNty9HGPJp96w8cjzy8XuEs5zqLmJGwSK856bExhH",
  "key29": "3ASbxcMVNvm7Aarq1oJGKMdghs3VrD5jXyy2BdWyX6A4KQyVfiheTrT4K1hKgZz5gLanGHTsQtFng8MnZViXH7sE"
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
