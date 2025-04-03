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
    "RFbdkXtHfKSzQSfXkPf1JGhStiz6jTCkyDqcERyP2MxWjvE39ouorvYKApSrSWhDxkrsAqiS2x996mjb2wBkUyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m5SHmSHugoGNe1ERmzpo5RKtPGL1aV5R1cLaa9WTB4snyenqpeg1fMUJbDGmBkPHpnchE2ycNrb13aq2ZbZj2vS",
  "key1": "58h4qjxmFGUnwKg1Cd2ei4W8v4XEVNc1fV9AMYo3VMC1CEGNaAunmCcp1xow7fd14aXj3KSZEhhQd36vhpqw5s7T",
  "key2": "pygkuiiETJJC9UtBXLjS91cCWhV1FyvMfbkWtM6xAwPMdFh7oQqX1SaWCL6ipv2tnV1ZCjaDnjDXcR6UoP4o13A",
  "key3": "2SyFJy1NYkCXa3AsvGt4P44soB8gRXLp67HLn59PBKSF16uwQHTVURcQxFqzS24mmqKQ2MgMT7SX7QBEeQWX9GEb",
  "key4": "2ZbDHTqsAxu3Hiriu1gtYQpHvskoRcfueH9JcHtsffJhZhsTBZ9jwhieNvbRgMMMcSN23gREsuanxfrNhP3KSy88",
  "key5": "2FFEaVfpPqjMqhwjgVcEoZMd3sMDenwnEBTCgNMVXFpKSewjf9Vho1PgDTAMGGwPv28toMGN1NgDquoBXTt5LdLa",
  "key6": "2k2zBz6AjxCcLpZZdtYGSubd9DXFVaQxKjC45xLuZM8QvoPE6SBERZzEVrUQohMdZohkGbK6ptPpDKeWF9CVVFn2",
  "key7": "5pVcVmvYpTjVEaPWYkZJwDDzMsVWgjAXaKunegDoS4nxTrczwrDnP5YC5jNRPfQQwTWv5GMGkCXBc9H7rYeXMwg6",
  "key8": "2SHRMZ7Exty4xQYDTJM2ATHMLafhuFc4wiLtQFHcyyuJ5PzbMzYg2JiJEYc5qv9kafTtYGv36GHvkrMmZL26szDB",
  "key9": "5NEhZ61yqNNeT2Wbt9iQ3ChgPLsC2YeBAdbAkxS8BQUT5cCrJD9Pp36EDqffvfcHb4mApcSXi17sZqtrQrZbWg18",
  "key10": "2QQHgFamafbajrcUs6qY7bPS3nojQeGUZiLRSiadL2rogShicbArjRtefo2St9XG37EEFdVF6wdvw82UW41XmzkB",
  "key11": "5tLRNrjeDP3gYGV4JpiLMrZMEtJj8RcDCRRVgRyfG1wZLDCb4Bu3NfBq9tVNQAHD2iL6Ey1eiBcZ2TnTvzGgQYSe",
  "key12": "3UdUPe46o1Q1VrTWjtvL4q2CkUva4HGg4KQX9bydYMPMERJHZ7GE6fPxwaSYYSxDkyh8qbVtzBowDwdEcupByJQ6",
  "key13": "3pQFcdS1VyTxTL17jWf1pE2RRm45wb7o2zowbS4w4Voukbp4CMjNfHKc3irVNH2M5peH5ZVUaSBs37KckC1ejPX2",
  "key14": "PEKg7w2FzzCEG9ovhJ53TNVonxdqFw9D4drrVaxqbZWkfqEEQGTSNhs3EBeANVLmLY3gyNUrgFa25DJeK9Tcenm",
  "key15": "2uJY98wQywyEC4Xnxx2gf2c3YneU93JjusNZ4L54BwFys7CiYUD7MFCz23giWPasSMRHJH2Aq8a39xjpv3fovKf6",
  "key16": "2XEC7TmPxtND1pYo6LFs6zdi4cKuywZsa9kWKdtbq1Af49zHp16pgshdwufNJLZVjJirmFv1Cw7ZcigqjTVP5hda",
  "key17": "2UkziBvWSbd1SXxrQYaBRjs8bpUSHxam6fouF5NNunP8L4G3mHAid7YFhfzTjpPQr4HpFCfzeAjqUyDNkreP9yJV",
  "key18": "4QfkDBkfkMFGTBsVUGmTCs761fRfTKpNHqjDodTqdShYCmSQXH1Qn3kNX9LvL881nFXnvr8j3F9nxjmqvi8kiwfp",
  "key19": "3L2rQuZR6DNduVqwUtYH64bRH3RhN7CQ5w3FMjZ7ka9YtGHMMz7hEnEaiGfXCiq5WAtMqVxnPfhhqevuWfHhAUog",
  "key20": "5oeNw4RCyrHYXLbZBh9wfzrhNjVRfmxxHjxXyRTAtPQU5Vc13ayFtWkTMStQWwe79FFXn94GjZVAg5NfHicVnaEY",
  "key21": "4ubxe5FgP997ko6oxhUCndujZAxk5vh1KqCdtPidLYyu4fFaMA2kn8ifv12CqSzTn9afc8cVuGcbtuaXbyH3GCo7",
  "key22": "2JN3rNphnfcwizyYNypjwThbWvbFFtgyuD46ZEj5crpbkus1fj9hsSkzVgB2dKmHGbHNqWKKQ4e6mWZeFKtFfNPv",
  "key23": "3UZX6FLNNWcYjMYcCRY216iJ7yW8anPuvC4ct31eo5kFvwX4X1GgaDvYhkLfiXpPEdXdentQ7zyd6ZT1wmvyG3cZ",
  "key24": "4bFBcndYXE5C9zEwWyqeR8CmmTgv394R5KX3ts2R5aUA1kjdrVujuAxM5csHp9cENvUtmoqFvAAooefF46segpiw",
  "key25": "5M7qwXet1SkGgax3wcYCt4pfxieU9RJMx1yN8zycZunZYPE27PXTykHeN8445Svu1uipuPG6hCtdWYhfxe2B4twn",
  "key26": "29G1HeJ8TVccD67N1NbdKMzDriU6BvVboAvfHksotLrXJtxtMqXZiZCX4t6GkMrpoairxtzK54LF6n2G6YoBheDB",
  "key27": "2B69LAwVZs4MPgB4orG2HfBEmgPMwQ7oHZCMsF34sHvKQzL17KPHvovZKTbWF3muEDQ9ggpjJNU4zTPrY5BYuGdu",
  "key28": "53DQoj1mZGVuhJ9bfJeZw4EGkq9pYBHzmLFf4EEX3WWtp9tHs8cfd4fma3cuz85CmCpaQzw3ivFHi5bZ3vc4NcgA",
  "key29": "4nZCQ1PHcx3FTEgfDCP64yBPM5PTwBKrCfx9jU7fCM83BtiWD1Sz2YTke6BuVNiTRJ5fu5MvkJD1YvUwV1BDWV4g",
  "key30": "4riMcdpYtfvtm3f663Fqa9wTME1U9WzNVi5ixBwgtNsPGziUWg5vCt7s2SoJ2HpE4cVXSXB5rzqy7UuNUZkPoJu4",
  "key31": "46PCvXXvBJ7ZcucNSbrn54avjGMSozcBCBnBFTjBZdFBbECRApEKGPmGYjZaKEWBj8JEiweeQt9nNqrWvpyj9L6v",
  "key32": "4WwYMyytEdYNEFBVWHBKbivhhqqomWyMZ7NbUSDcABR3nJ41wYfk8B49rGbtgYzfUNuHohNkg2F2rGvfTyVqh2Mj",
  "key33": "MRbyEEBtWjDQu5EGfYYU7FLduPHzAZnEXkDnCb584BqtwYfuQotFXx2M1dEq2n4awT3G4C5gvT2oTY4eHEsyfG4",
  "key34": "31eSQi3XtnkkJwTDa3CAQDknubHaRTiBBq6sQbP51MtNbxPV7advBvMRQaPVPLJXEbg1wB9YS3WnAbHYbit6cUVs",
  "key35": "59tKu78PTVmik4uMdYzf7eHYQvho928rRWjhg4UQedYiLVTmQghqxuZG7WkvX3tsMmQbeg5nQ6wC4A6Aa5WszFwi",
  "key36": "2fEaaFagNnzos81gmbXiPpTM4bL9Zn5HqRuMZFk1aVtyikZNEipCwKm3bPboivNbQyYwxWzMboBc7KiUV5RQ1QSJ",
  "key37": "rTad8N5ZKTg74wuRrTByLxP2oajwkXiCM614iG84FwqTyNmmy1AtesjRXCjaLhojpuLH86oC2Ugj63qBcrsDuZb"
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
