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
    "3R14kzRntxnnNC3aZuhgXWbrKNUK2RabwRD3xhdYmDGAK9eNzMKDAR7jkAfhmuoXeEDBndfGA2nQKKoq3aX1iBpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ffVr3iFypRDckafomDHuCboWuTX8JiqfQfXbgT3EfyvActsvPymBxTYTMhfzeCwWMKiusycPMcBCxfwokFDKiTX",
  "key1": "5isnMZp2sXE2uftVUfRprPcQmzihuG11cpuhkEFX6f94JqqfnDWHgqFy3NzDCf4sHEV2g36N9NxY1aHQabC3uMkd",
  "key2": "53T8HCpBdZbvGX47nLXtnemzNBsM7imLSErgJMHPTL1ihj3a7hT6JpppWEFh51jMmFRuVW1C6LaRiDmQqfdy1r8e",
  "key3": "wctWch1M2hGaZgEGohfPjuQf3SGwVHzkx92azGCsiyiLkXG7BujF2pZT8oCNEX3P3egbhE6tgN6kCWvieYfu3G8",
  "key4": "3X75mb8hyH1QvNshYRqEurr1iaqdn9P456RZieQoL5yfWwUgrFzSdnQ9jLTo4X7bEzJduheCfhSfJZVeAAYQemyh",
  "key5": "2K8KWBGV1aHKy91fMrXzrXsHeuz7gbJ5xGViDooGhRT5vvwxzWw558wN6SGfaBaLNfM9pRSVyf9xUvU68H8ceHRT",
  "key6": "54nLevuDLtuK1tcGiuWQu68a2Bcfqe5PTm57jqabGiArbWqiR2nvoEhNov4Xrp7MGVc4Y17kTxxYSu5Ps3HSedqy",
  "key7": "3RwGfrbt2rVsfU31LdATSaY6HjRwJmBrtKywUWW7rKRBdFXA6wEVJb4DdfYeBU554DgEJQdAyX648TKpfHqaSvvb",
  "key8": "5ZyZRwk8G6WNakLgtYzR9yLtiSjzQiGdiXdNqzHqdzeid3udEGDyncARTSronK8bNq1KoGfqG9CmJMosLYsg9S5x",
  "key9": "4NLBddpQmhLyFSytkEGi96Tqr4etSTtwKZCU97jWLMwYf6G1iXkvT9dKRJBSSfa1EQoyFjwZdosK76dwZjfdRMNr",
  "key10": "snjYkN4F4LrVFojkmVAoYMTGYdgPi2bfFwjJuQ4Ht5RijFiYPX7PpGjysBSYhLEztcgEjM6R3AgCaab5vvEo5FW",
  "key11": "2JMKTpqY6wfFvkseDkYmvBoXdTA753Jq4F4GJ876JLinq6H64Ry3UXsYGNoWZ4nqhmSMc1noVLqvSA5RfNiriRU1",
  "key12": "27jcpqZaL3AUWqHVn3yh7TtPPN57FY4nyZdk2evjHqJNTMqXJkiS6yE3CPtAvuGcPZRmGsxfNFH3D6xbGqkt3VJD",
  "key13": "3nWvTnDadFn8yJyjuANRwVZgHjBEVAUknLwtL5hnqHVHtgNGCrLVMN5KGiZePYY8VCMpurfLFucUnaodTXpdGRgi",
  "key14": "5YG8ip87tqZL8zmJL35b7SF16mi4eibfoNYcrrtvHTW7L6eBAduGHpp7USN7R7C5ERQ1hFaDrguMMXhzVcb882tu",
  "key15": "zSjpFtLp1e1pCzrZPHNfJP8D3ZEKmZymAPqVdjPhAdqJPxhYV1A1FrfksW7k871WG2TrqEYZw7Qh4DELSysESp9",
  "key16": "3SqaLDLXathrqEZMJyWFJBZgCa5HWPZ2VXz71uYnuc4ox6ccyB7ZWN7xvWGo4iLf3xGB1ChNTgmoasSNArsCjb37",
  "key17": "3TqFWQ3jsEJc252s1a6rK1dF5dtcaRS6sUvUQDVuPvXQzq74s8ZCpsDjpN1qhPRzaVswyenWmBnsf4SJjmLhTDJe",
  "key18": "3DFAjaa56VZAaw5TAW8LcHzSVTH7vhE3aKRu4wpPdck2eDfCJ2aBUEEvQD4dVt7ghSCcydLKbkKFwHyWNsBwgpQ3",
  "key19": "3BWG3HTYSSdEWcVRyYnrPvuNTNDDQMCShmSUKouuzSQtyiELcyrdxVcVZwA7c19DffKshTdTGjfen8UUKfpMXiyn",
  "key20": "5SqJxzZg9mfFeFuGFT7VgVgy9CxkrhaXSvTumBaQuKoCANiAzECqHZLvgBUf5DHbumtqK4ic3emux565UrSzuAhw",
  "key21": "3vev2hgtFoSJqZRekmojEU8a3w4mGocCfkUEBHJja4ZhiM81QZT5ENh1ev57iJHD96QUtFQEUrditEvRYmBX3Ju5",
  "key22": "2vGuwiRwZeQwfg3wujiaaaoxz9Sdc5TbDxb9esLoByHqzsCcPHbnGQY6yVizKj7m3MdRS3rVEvgs6TRfqXM1Xxfh",
  "key23": "4VbEvrDKATuyx4q261c5EaXcqRUXVg7LoJosjcKhEJwFLrAZ2QmfeEzSUs6dUfT1zrF7PYMiRGQkqpDP7cPhQiqG",
  "key24": "BYwAAHcqhzQXNsJcjiH1k5aqgMsRB6HqhueWAPWGuNV65uxcm6zhBp5ntD54mmRcAmhtRpwhrJMfsLrQqBgw2BC",
  "key25": "5CBPH7tmNu7ZEDF56iMa26NpFNXi7MqrgG73ScqEMSm11vHhKNdo4d5uK32FnZxJP5dUoWWjcqsxf2CJCirFpyKA",
  "key26": "651mcHFd5Q3zA8PkedSitDrpWzUTx8kvD1UjyhY4nBwAR1az3Bmz1U3p2mfqvvcuApQMRAgnDzqNCFMYJTrusaHS",
  "key27": "4m4ap31TYBqyVZA2sMVTFcDvTff4ZiFrAvWrZomp3S6aNuh1R4KLp4isq95meqoPaqA96gfY61dAUMGS7S3FwN6G",
  "key28": "2Dz6KHMq1k6NKFfV34nYg6GBUdkqfNzMeDvpKzmjckoU3EybC2Voa3Q863rPFB5V8QJeM9UxKz4WEgtPvm9aEuCB",
  "key29": "36KimpqwujcvG9mXcKdg5gjACWPK4FufgmRwSCfAMs4u5YYrpuXKPWZXPYA3Z1BtKxPgURYmkBrCJMJ74ZF6fCWU",
  "key30": "eZN1uTRhabmAZq1QTRdCctCEJqKxcseaDLEYb6t65RN3rZaKAwrTdw9xMbXJn6eiujigNbexXYdUBE5wsgfQ3Km",
  "key31": "5HHwCq6gwrm6LTU9LftGkpa9h388jiy2oj7wntNZ2GfyTNDr9NpnsvhP72rXKbrKEULi7E6P3qqGRQx2jZPCqrcB",
  "key32": "4MKYJH8gqa1tPxQ6Yw4h1GhMvqKtD2ea9mdG72k4FvxhfYRv5RrqgM5Umn5ieoCARC7YHYM4vyezoLqXCNUxRYCK",
  "key33": "5gycamea7exfE2Pt6uHS8ci3k3CziXFn7xWGLiHQKnR2zQcoAuBKpveaWTywSzWjRSb2z48xDCC3YUUivVdXExJo",
  "key34": "3EyfYfBFD8tzDovusq7y6nosjfygCkSmDjUfmWoWzyMGf4SLpgWpVyUvkQFFFwiZseySt8aB9ndzDm63xJ8m91Vc",
  "key35": "2BVcwRXuwWSJ8Bh17GeHGjb8vGysWc6FYaWqo4nNhK9SsdRwHhwBAeidNacHDEZ3pwMQYm1ZAKxV2kf3byY42hKP",
  "key36": "4jiCbaf1imGseqHBueYvzbiBkzytV2ihTnQjJenLieoECDddaS9dAH8tYPqzg4qM2YYnJhrhCp7VXyNP4qne4XsE"
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
