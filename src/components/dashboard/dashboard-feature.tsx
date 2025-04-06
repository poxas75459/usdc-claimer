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
    "4e8qpcfzW5jgnZj9N3TpuP5cVJYKq4uRLHXkduuHLjp1ViYLPuR2RtFU6CyQGjYv5pprhg2HypM6wzhcBFjp4rdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PCuMA1m2CwmmckEWJkyTKwCEeSn1wLKaqDa4jHjhiYLzuHzjweC9xWtVFugzRVjgAxd5USJaT5WC8uC8DHqXRcE",
  "key1": "5NdhkQdTttBpoEB7Uj9nZYJbMLaTZH743EenZvNkZHdUbXBc1bKCseeBod5aRjbyztYcRDSRXsz5oRqN3LPHPbzf",
  "key2": "3mmduMYAKnfKVovQj8SBFe12yTLHxsbKLquFFPtPRiYjg8UqZoxNApHp77iJXQQfyEBxyCw91NcodBb54BAfvrpK",
  "key3": "5qvnGfUnpCW5onUarcudq26W8XRv8jmC7KhrVFLUNLzCdKdbDrdrdtyA5eHmp9mUivtczGLPDzw18w55dndmeCmA",
  "key4": "SeWQj4xmZiUxFHDau1JiJtETjLxSAp6ahxAwVvWZJAQHBtgJjoPKgP1d5NezKFzTwpoV6c3KaGjRtFkKFGxGYPQ",
  "key5": "3LSNoRQ7pXC6zc9rYRp4TdN5AQi4UnZ2FeUApUMH1uuxz1Wm5WR529UwKXJTeCN3rBsPgk4NYmvkD658QXjXFKiv",
  "key6": "rGUEaQim7Ugf4cywTmaNArM939mmEmKqRXWC8Mns9v1hqdeD6pcoycroHUbhBVdzCT3jm1HkiGNnAbDksSrRoK5",
  "key7": "5nfAUFR33VLPnU55mWANNDnk37HUospeJzkCwLZgEDdKUzZm2wLxenBnmZJpmqV2FmPS1J3KFu5JVZi5yBF6muBa",
  "key8": "5gktyu2xhkmox5kDciibmH2Rs2Ju9eU3aHAzfVLzYKBk7vyta2gc6cL81E4Bfm9PwAhgXQQjYwBFeBeCWZDy7AwR",
  "key9": "VxnEyUC9VinSLevezNMuefySUAWuvzrbvH2Vn8Ktjg6eCLdhQHfELPNCGPuLp1hUSxyfe2tLnoDe4nVgWdF8Yxi",
  "key10": "3PudR7hf9v1AndTxPLFdJPk2KjD4mdHtvLwGNw72ER67s498HNPjDxxn4joQG3cECgMMnJmH4xQa5AdmdTCR4yEM",
  "key11": "yeFdPtDtPPsBwFhsSxXX4CooasfW8uXPeFiACNFW7ANdarVGnfYXKYythirX5M1L8mLYAMbAMuYMS4ggc43o47x",
  "key12": "2Y9WJVDjr1vN39VCj4mJRETM9ZXmUKwLm2K2vobLDHmh1KdWDCeDiTsU8Gkx5sJvZo5PG8Ur2ud2k334dmJ1hfu6",
  "key13": "54XYUocHRjNLNZxST3NUHNV7YkGufzTVW5qm8QRA2HmDkpVULyuMifYDnRVdsAMpShA2iSZ5aAZVH26P5SfdH3on",
  "key14": "FzCN3kbJmSiCMNk8UQ5HD8yGkGV19nHRAKg2FLg4SVv6Gk71vxBa7zWYXimaeeALiLf4rMVRDn1hEvXNDxo9P61",
  "key15": "2L9turrvvMwzQq3JjkmQEoZveGpxxbRu7GCNHe21nTUtkSDh8MfaFutM6i62uBa57izBx93MtM8776cBRAHbVLUT",
  "key16": "5Zn8m2X7gxKSeCXhD1tQPzzUauzka564NU8wca1CnCgsDYqtsPuh3ADcjJPXVExxr7bjDRJ2wfZxHCWJFwQCYKFr",
  "key17": "4ZUCsDqPsMHqjsFJ9vfKBZDQZDybxCSkv4QqqQqViJ9zhWGGihqM7EEcrEmBiMoUVKCtMZbLpoS4R4EUsumED2kY",
  "key18": "3NRQkS2amziwXQYb9hfyAW7DUY9JceVUuHSCy3v9z6hamkZvmqRsF4BXM5siof36gW6vD5552Ekc8mD2oTzZdyzK",
  "key19": "44LGCLinvfo5YdaiVDnZwju5tVhNnpCiCD84opv5E5dQKgG6xpYkSBcjGwTTg9yXzEQ5JNaxDprhC1DT97xAUCwR",
  "key20": "28vwhnJNBVuiyUtVH6mKTiUnFqG4DRkGNgYuaf1S5KW7JdtHJm7EpoXFGhb9xyW8j8R6tjxBAyzD2WNw61S2g9UH",
  "key21": "HntiFBqe4bFU8viEXnCH5ZqYBU4ZRVEgtNsebaqSZn6aG1Kb5zcLaUAC2917Bm7rMvhF3uyj17fbhEzwzs7Nn7C",
  "key22": "2gxcG835KzhuwBoT1BMtM8iw8iL5uUV6xXbqEAaQrn45ZBbm795Pau6sQ72YRPdbvsV6i3VoyZWdAMD1E2Radobs",
  "key23": "3z5KeCHpWyVS17QmRAPZqFmSLSjEVj9AyFxRmggPFE6mrpSxKdE1GG8E73Ac8nWYYFr3E1Q8fELegDf4bHBPAHhd",
  "key24": "4auAn7zqSyHeKUkVA62QEa5gAuswrmLKB7nCKbT7G4SwGKHGW36kUdG7gcLngXJdj9BeohmC7io9kMwvuPEjPVLH",
  "key25": "hqiu3JzLXozvURGTwvpST86Kk2E6P5zEHyaPPuA4Hw8jcnRPGKFGi9sXS6GHViLeE7geNmkN3orQL5NZ1bhYtUb",
  "key26": "66SgFgtUyeUkzF1f1JpMomxm3RG9zvPjKSpiJxCpKkupst23J8jkyhrHDyzXZrFhinWMwLdKYbU1vhgxruHsHism",
  "key27": "57gFYbhs6RXBg37goxnpQnNEV9hhmryiE5px1HAADgLcHx8voWZbX9HLqqachpnq3u7FdgqvP16Eu8Zt9ohPJGcT",
  "key28": "5T7idBDgAPpfDwtuTC4MGF94ne6g3qdkEoBUD7y3eWCjiXvLR4g8rSCQvhqTahUCZgAyWdTWjCsBdfjyu5bfS2d3",
  "key29": "3jmV1RaAeiHgoirvvdHmN3pEf74QpoVvd5DixGuqj9YdNWqpvanxMnWBjeL1DiPNKZ5riZujpCL7S5GZbGSAkXuE",
  "key30": "46T54s2Ku97P2sA98tiqia2Lhu6BRVFnhcF28ZAdKDZkgjsrYtjz7VoyZ5aDHkN34YhF9b4XWS291NHn4b7qpaNJ",
  "key31": "5SFNyXv24EgQGJnuUUErRPY9nR1YhPj4UMw9fopMA1mFfN99pNJUjeiZC1YMXhW9caTtb3Ynav6jhU1SRf2bnT6",
  "key32": "3ZBmsszYyJ7gbhhigS1P1tmcTDBCm7dmicRRCPV3VipocYy7nLewCh25abiKCpz87iEWLmN5JDwGSMbuvAj8DRbq",
  "key33": "2jZgmDeVHTEyN1jy79LWBDKtzQ21S8HaxZr5HLB8qUkBkfXceZXhbZpbPfqXRexTgU44zFQoFbGfFdyLZnGdsXfa"
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
