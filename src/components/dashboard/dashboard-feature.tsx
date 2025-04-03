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
    "57WK4SBAAAdbLo3RWysfo8NH3CK3D7q8JC6Vz5W3HzWUFPWx4BSANBb7PTnGNUJBMgHUSgutLXQB578ihpJS2aYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fMQvmWfLvQvCuwAbAMT1L2qjcEZnY8mDn8ZQFXkCqgesmNzEtjbtC8EwLTiryT8Cb4MfMvrWs6FysR4LfgrEgj1",
  "key1": "FcuLtMaqqnCBca2kscjGaJxaosDmriXpZLBThA2zTxJv67u6XrJRfnVc8NbXtYrJsaYkMoYY41o8hqNA2PoVz9Y",
  "key2": "41R2M8zq7jBymTrGsfpkpTGz7aSPxAbHY7NiWK9Sc1U6qxqqxiu6Tvso5DLLgHXJ2qU65shJ25PxHMfzitNVwQfo",
  "key3": "2ZooT14vnQC1Td6EhL2JfW3b7XdrfjqvvrDcAkG3vUDkzBBncpsxM4THJuc78aFQLAw6sePv7ZxUm8sBM7HtmmBC",
  "key4": "4js34N3LxAK1BZ2u2Dz6LtJPb3LgiDv3jL65LBnfaT3NKtbqeEz333VRHUYNeTaRfP6x1qm9VQ6S4pYSqyJ6sPPA",
  "key5": "2jR9mCUZ37jMntipeUrncjaRRRtdscCtahZsaTihbq3aPRufYTkkgX82uLkVPGCH9VwoYK8piJ4ivyaw1gUN6GXb",
  "key6": "3Lykx62j2YXzwgbB2QUZh8tiQs4wysMkUPmmM1wTHuNDgZvvNK5Lpibh8cyT6rrcrqoHTUkniGEkiQJxov6CHkUR",
  "key7": "4VoshjFk5gQcPfvS3YTpg1sEu6FEGGtuFcnz8Pi26xVkjJrbqrZHF1X3UHKjnGf58ei1J4wpt2g9XTrS1d1uGte9",
  "key8": "36duBJsvoiadHvUVS7boxSXNGwB7hNpwkRrVQkAWGjJSMQaUdZZ7XEWRwQh9gkCu2kiKnzARN4XyaxE4CyT7FGX9",
  "key9": "4GLnC92CYRUCCinFPTjcPBN6ffRxZh5wLvaDAEHbBahJUtHQEDD6GbFW5mfNNMnEsX4B2ZP2QerUxZMEsxWMSazM",
  "key10": "3oVjwKqsSNiMZZHsgYtbEoqLkHAAhMcvtPht9Kin9ZTs7R6kjBgfQC495bwfwvym9GyFaqtcPGFU5YegWoSBKzQD",
  "key11": "2vQ18oD4pwknohY8wFnKgc7Z2Mf5WFdTBwpmju3prDiDNzt4kktJUhmqBYnyvENnD4E4AkJ3bDj63Bb3wpJH58TT",
  "key12": "5D7vY2ttDGnU5c9PcXSBL5SKphLNkSbCwe4h8fjjy55vVx4xsAm1teZbzQdGZjCVKnVJXgRoZKquDZW4z642bvpW",
  "key13": "3Uw39KZw2q37BVkW1163qfzu5fWgYmBpYfSQmF27wzxjeT9i3SekRRFq6fmQKnVeUohwWrjRNa9yNV3NQd967gbL",
  "key14": "3Ed3sNPS9j7Vvu9EDsu3c6dWwL8msm581zCmXhjy5fT43ptGFUoBqJBLiGVZn26JKBz2onJqRUqvWhJEbeQ6XsvE",
  "key15": "4SVemqgxWppE88XGVGFSggDJeKCCEBQTCG6oGc3qDwRvbekR17WUtgo2dr2ZWfpuDkpnQRTTJmNYERzoBNRxnJYg",
  "key16": "2rFLePCevcp7qSCGEbBCx8ptjdQ9mZr1gq6HwNGHnwmrGMFp5Y3G39RS9sxaA2rvWd3WD8f2bSJFefVfCJ8pFw8Z",
  "key17": "3JDZJAFmZyqzuF2XhFh3UpGR7XWV12DAgRdi9f8n3F3nctu8vWhpzYbnUExFpwWASGg9Hp6dnLfYTi7LeyfnmpG3",
  "key18": "4SaAwWQM114in8WyqDqqBmNqPHoaxVTgFtj2sUCBeUG4T2Y1yqTYehhMMSck7FNoGsnrNd4JKNjV4FuFNAJ3tKog",
  "key19": "22b86cJfqfxJqMSdcKPL8LkFWwJdYwbBo9QLdS2KTR6Lrzv4FwaX8jnhPnqF3xu8rDVsZpSescwCEGS1DKsYVSw4",
  "key20": "4a2XDtrQvw17rt7UeTgchEVYWCsCmejb77AL6aSaeWJn1X7euYg5aoecmDmLzxJxhVogdGky4URsAD2mZwsyE9e6",
  "key21": "5cvAgZ5UqJY2buwiRiDFvLTJ5R7kr3ciN5RgtrdtCkvZPtbZTb37Gp4s6xMRf6Pwmkrqdki9a7bQ9UiruTZncQFA",
  "key22": "4Pcjnp2Xvm5jsJVF5aTwnEZcbUrCVrANs62aTnusFw2spK7dzAPqixXLdm9KznbnGAru1BwSNEVZPHgFyK8DZPLe",
  "key23": "5uiHr4zi4MyA7segYciTTVYuyk6ezaMRSFvqxfipRiQ7hiLWqii5DVmxi7KeJbEmG4usU5qxEkCHDgrCAPRk88nf",
  "key24": "22h9ZACXWWirLZ9MUfEb4QWoakvPKXZGBdvtYWuYXKaDWsW5a85Vpp3PPA8oDR1e9fXCeDsnP66u3iH7EaYctatB",
  "key25": "4h5W5rPRk5RyCAh1i9kYJeR7L4iMMZSCu23LQLvFHQmcH6DwhGCQSe8KQWNmXZqT9EzNgmPJVmNdpPA76EBHKhov",
  "key26": "aVyZJ39VEMF2USrcm6fyLyfoQrPx3sjRtkp1VrSDHosxiBeB2iDpBGUUdn8AKutB1Zn4hXLyKpq326HEhkixwHr"
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
