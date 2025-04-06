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
    "2sCdwXPeT1WUzu3WXRMNcEDaCALtChMyrQQr4vw7AJwbRiHng1dcRvA5dkCnd8paWx66SWvQ9Bu5ZJjeDARnoaey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4orMmmXDDAD6Ms2GzGusRqiy3q2x2sefC5f6tiXFhWx2o5D6XWAyNCaM8DuZpy1URVezQY1aENkhBXPTBu6EyNMa",
  "key1": "3qjkWqjrEPow1FuRtno3jMwP1SAumnAPA92EAJBCMCCMvFKUQ3p37UjpQuWKNAMuauLwMm1sxUDc7N4PxuME2R5h",
  "key2": "45uN5K2apgoWhwuizZeAo5G2EVFKPZrNhziGzynutZLUcYzyhMtvdJ9PGDdBqen6nH7qSh5cv6LpAvRENPvPZq25",
  "key3": "3TxRrvLxa9nw8py19gstHADtAzdKXQYMy3e3KWM5F1YsUMoSjuumZsJvRDuqLJx5M4tGzgzBUc1pEUtqterCcKPc",
  "key4": "3apPnEKbgygWHjuCUDDvcB91qBi96ztbbCkjj3LwyLLKaMu6QAx7u18hySykxU4Aw9cQTDMH757RETwFfQFigucw",
  "key5": "v14UEwBoXDhh3dC5fPT61n8gi7ymwuaHe4JQzUcQbENwET1B925iicMLXc7AW3PrfaNx36zrbaaTHeViLK659zh",
  "key6": "4HcP4zzTxWDhAY1TCmNnCiyQCM3f6ZERLwek6yDRzUi1ezCJMT2cdCKv3zZLhyKZwKLNfCPraHqCeUe7Ruk4exup",
  "key7": "5evyiLV9csgtyURGjqQUJVEVzo7XVCD4wSeWihzLUw2A51U4vKiPHKPwyryaT9Kw8xTSGXUyCoiDecGRfTMnqGy9",
  "key8": "32iCvXNNoxQXM8PZeeCvrR4GcfUFXCJUtnbapiiWAyRcKSrQmAqCEtmb5yfTDnCXHrdv1QUkAeJb1p5mrKot3tFG",
  "key9": "4HBf3yZHEEoLTq4bamWaEGBYXKoXBoYjsJSJWgG3gchrZCurUDQtKpxZAYaPabXjTaieqee4MQ9x6xt4ZBEPGir7",
  "key10": "5nM72u6zWGpjXuseYnmNmbuyggKc5z9dc9vb18rmW2eud3cjzgoX8eU6YJdb9En7v8R5a4JKTTKFtEUFYwsYtv4U",
  "key11": "3LAf9YiH7QS3tzoJcwd6WUbgeYEWC697nFugytDa3NrtG1VdESmKDSc43amzfThxVj5iM8ewY1EJ9uD2pjztPxVh",
  "key12": "5Myx5b1kutmFUNxTub2xxDrqSN9s6yKmKTwfWnGt8cZQUeZCjW239Mtz6xfdfUhpcmEvGtoLyZabEHx11jv7RwSA",
  "key13": "4y1w4yv31tpyq2NGN8sfifVsqbJrjetodWUoSchVpyZRmeXCpi6MBW4ghCRZpS8FvmVhvZjAm89DC51q32FaPBtp",
  "key14": "2cLKfPNeZtKUGFzwQLTAkAfNviXKtMK8VxNQuFBUi5k3wBzdEeFkS6mzn578JXPJwM8GWCLNgzPbf9tyYWTgGs4a",
  "key15": "2DUbvA8Ci6XKTkpx62ZNviBCv1FgeGUXvfHjY4UAgNH1AdpSoRJbEFtHgBgzfeRs16eMJ4i4LUzwjddZg1cp5cMa",
  "key16": "2CpsnL7ZN2uvZcq3ys8E5kZT4VaAdTpjgNWY97DTRfxW22YHruhBBr19VvexTTzGhb8mepY6KUQU83EUQ1uo88sX",
  "key17": "4UMTSYfxarTV5nCjYmQZAfd1aVBAtpE69syMns5CTd9iwJP8Txzq4PKvf6vijiAJYcCCPMvvfrKwaw66RNyLd5go",
  "key18": "478GQdtbJRaUrKznYrTyzeE4PCQBtYnNgpXnkneSQ7tt9eAs9GDKcw91U3iB5KvhKcMfWHB9a6Wbqn8wsELaVTuJ",
  "key19": "Uc8tamJC7kZ8WzxLPWAy6uabyKAiCabefqNHcAuzTKEhT2Wwa7Qu4rRUfSnD8dAUfsftTK428trs2pXCsifRW3W",
  "key20": "3pECsMfnyjXykw3sX1ur5TzwGaAh7W1shWtKj1iQakGCyi1P1bS3PTrojXzp2JJDFN2WTkh8NPgkYLqrB5tB6swb",
  "key21": "589WmhRCCRSRyy6sTxZNokqhAY7dCcdwvZTWB5PRn63csoTxKRF7r3GY6QZYvG7NHvuheivUY6BSU4fBPvDh88Ny",
  "key22": "5Lm7vPwzYcfDxQhZfiRPkQxg5wjhDoKkafcPr2oQsMroBPZASBVRRjbpFkQKwVfCRwaGoWzT6YVKYGtvEkb28Xyn",
  "key23": "4ku7JKupDyCCKa963L4w5idhHuLaYWjUXwPzXT27Kuz82KpdWfGHcxDArVonUB9Z5JLoLAVPYKTosm4F9Lh3SQCJ",
  "key24": "4cWPLDrmapL4pEkpsQS2M8CaYTn3otV3gbeksARagesBHKnMoRKkLzS7VEcfjzYEssJZx61ybgAGkUmWA1tqokvp",
  "key25": "3dHpeX4pBJrfWznUZv6Pt39g1ZhENGmtZdpefoKQ5pgnAbBmPV9RQ5yxPeUmTgPkinm7Rwgn7sVNZh3vSLsBbQXA",
  "key26": "SrQMnBXy3JAJCCf65eLN7bKwEu3Lmp9kaNCeWVvyQN2oYeNSovT4tKLMwGJurWTjfmY9tLwWkrU31kW7ajAtULy",
  "key27": "51qBmAQ96wzkid3ahHAggpKJEfjpFXEn3Qe8ZeSz4ZEgYfk99Y4mCUhp8BRndAxyXcwUvzFqCRZVBWX4xEc1NEhd",
  "key28": "2KnPdyKtS8ydcKQiRGkVN1bN5aTf1JRbh62Ekxo9tHVa3ThfUQVoxak1ZTWUVAooHreiedvxQqcx9NjnQVwvWGGa"
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
