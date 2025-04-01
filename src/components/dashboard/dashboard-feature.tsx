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
    "3MNT6DAdu3TDia1dG9NCkp3XeeqhG4psNoDrg7Adrz3TyRU3ZNMd1og3t2NfstmH7Z3V9U9w2j9S73K3gX5CNLKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xza5JhtzwKpEFZ5Dgd9f5rb8bxvtxdMgM8xervdNy6QmVkZi5o3rb9Ko716hEGT9Gehgqaeo9r9oDwFqSahbdQ6",
  "key1": "24QR2pb6unGs1XZBiwYQDeSkXtMWXje9844uqaA3tnieWfwnwxgsdYi36vYQfp9saxTbNZxkbFXCMp1zrFxmqXG5",
  "key2": "3YK7b1nk4YLsRJ1mxUWk7HCEnLJndMcCZmUPE6RTm5c3TX4e85TjG6df2QdstinZd9aKPX2CEDHmXtDzkU3J7rRF",
  "key3": "4HbRWJJJp4VRMcFXjap2AC3H36dns9GvepCcTo3xMifouprzi28bPGLsCk26g6BM5NVp9Ni5LJgZB3NPtN4RKGuP",
  "key4": "k9BpYoewWpkihTmQjBhNdM1bsYmaf3LnRyC8oDHfrW7Fqs937QrCqfZK8K38rBPWbBNQR7vHkr2oat7TM7iD2tC",
  "key5": "4pvkYuXXdQWGNgdrcYMNq23HPCMExfXMw9RQfk2LAeAq4k93vjTLm3qcfCccAxJqrM6HKRUGsWMVrc2xeUPjkqt5",
  "key6": "5zBBqLYguc8B4sikvK7uLGL3Gx3KXXT8ATChEbpLptpuiYa15h4XeR8NrC6nYiBFUaxWd2G9DHyLGiDmnMnDN8yf",
  "key7": "25xhez9B1meoNZ252BauJWaY3WYDBTv1QUaKoedQLWczdFC6Y3dCqFTJan3refteQxP7GEmtWpaM2mFsAkzSPUyy",
  "key8": "5cgU32f1Uzb6UdSyfHG1dPXKNkosY9cRRjEKipM34wEAuEBJEaoFueCxuEo6enxA7gVCDZko776PENszsx2eDydW",
  "key9": "36QVTCVr5UHc7xgnCHZu1N9fT3FonkoKJ7KwsTnaEtNmCMwVZCXiSJ76fwzuRe3C2Wv2wLawDtj8LPHNmPZp831G",
  "key10": "4sXt1cNexB2JWHZw91tCukvzic4j6xuJaYbGDu4E1vD9HYWM5g19VxvYDKbT9rrVT94KsMnkRRQQuQa8t1we339h",
  "key11": "onQc83pPy7fUjoe4XsG4RhfD72Pnpb3TxrhEwuPr3ereicVvbv8Cj8tuRjFfz6wT9nphECfydmNJX8RCXvigZAw",
  "key12": "2vQ3JYoqwf1bhq6zaxbtGcTVDkphHMRm5vbiqSaB5PLgUMCzsk2GF78meKM8CABPhtR7PsfdwPTv8FVuajq5SSmS",
  "key13": "5wpp7szXbeHSQqsMhCqDmkTeKJYeu7C9x1AonpDpXWMG88fxFSRejjgjkvLhwucjSiiE1kCbcgqTFPvtdVZ7J3Kn",
  "key14": "3EDtudbNxAi2452k19JXtxzgR5upBm4TSiuahs9okHPa18bqjvvros64uG8RyxPttWnMCGbP6LgM3pfQvDXitFBr",
  "key15": "2zHEdELBk2wq8M1wR8S5nGEAshpQXUHAdnzzjk646t8ysB1Vhuxb5zehFPzm6xA2HeaHn7X5M35n3trJHrWhC7nq",
  "key16": "3mEDM9XvFwTKXLpB3UgSZDCkuSqaCKRmpuNBE4ToAHG3NrBiBnVRJnZArHvmbrrMaU4KjdSEhaxgyAhrYNRLED75",
  "key17": "57A4eHu3hgheiKFo4t2TQ3UVpEbjL6fG5F8jSFgigpFb5dMnAQ5TXF3nYvK3YXK9XfbsBRKiUEY18ejHSJYX1BBp",
  "key18": "2i7Ez1zq2WQhRggU3ybUmNraxYJx4b2J7p3xncJJgEMG7cJy1Arib3XRVnBf6NW4bNNSjSuhmQE7Ak8RudrGKst5",
  "key19": "4Nu3DgpDFzYPiPu2FYEYrKaQFGeDfTfpmSWZpSWwCqkrvYFsFAtP4x2TUKmUnWHq6UMrzqCzdpaM62P8Tb6ioudB",
  "key20": "2xZBdArdC2gPLJVFG1yp5ktN9e1uGqDSQeET98xptEtEMby4DUBpB8mJ6AvMGhdmJHVB9HhfwvWHMPniRnhTkSqN",
  "key21": "3Jg7YfaKrsKoHNUQKZEVKGbLEYRvFiQwbHYP7EUquZdkJyxncigAigKoQnh3hNK9VNbnkimVzqNgvjYdM8Z38wad",
  "key22": "spPmCB4xUmSPtbaiZaBvV63E6gQ9DyQBjfqi2EHCWPMRDrF3jYTTAQMwP3co6g33yVxVAY4Ly16ztvf1CPSgNNF",
  "key23": "3y78qPNeQLMXmAk1QN4gsHPTEZRNAmgA8BGGLjD84bmzsKKfMMCwvJga5Vnt6WqkvJ7FZwApTxXvCDto6WAKb5aw",
  "key24": "4tQvc6xQxVkTiVrQm2D7FwpgDNYzMFVToBWjP4GoNMCvqV48QsrN3cgpDephPa1dcAfUgBGn2WttqbvRozCwsLpZ",
  "key25": "4JqTGfqRiS4EcJAG2RZe5RsJV1TWuok6YVpWMhksPfEV961unsmrkpYXQjc1GniyvU3qkpW9NyNEhZh8knJyhjzC",
  "key26": "2ytEojUZP4FJNj12fMqBV4LtczfNN7oUS2LnWfYuZFxzQmwe22U9AjmXbbkV1yUeQoJZM9mFz6sfm5753jLF3dgL",
  "key27": "3kBFFEFaaWKvAaYiriWtPKjGQDKVzwoHvfqnNdgLt9g9A97xYoy8i7iUDGquFkgxutU8SaxhZnP1hrVZDPWyo2W9",
  "key28": "3QSauKSetNuZJPv3P3YSRPMtsAsF2kyFPV5v5qTR28tTF9cT6gnav8G1zk8LmnBW3fePEvbyxHcxkFCmMicmt2iN",
  "key29": "sJKiyzZhZYNAmcioLhvK9X3DUPw3tb8xqgoTem3n3WjEgaDdTbnxnfseiDikP1hq4UXzaSkrZxEHm7x1toWri48",
  "key30": "ZoTuRj9RsAvH4iuEtv9VzphoayzFYy1H6GLMb5GHJUHhnRPChC4SVBTfD6MVGiK3TQFSc85JAdJUot4JDUL5W4M",
  "key31": "2Vo4ZqcdG9QKCxuy6ZF5K69aLyBWRuD2ywLJYkmzHwQZtNUXaaJShMWM8GAcbGL53zN7UJrcMVrZKQrkNjueMF3W",
  "key32": "FbHoeR7ZoYvpdiAFXNY7UkH5Waoi2v66veyNgTXZRpgUEzKihPEwzXvykSzebypsmM8V4mDr7S78CoaSNVHayGM",
  "key33": "4iD147a23W1dkzqUswYBEYsZRHpm6SzZ2tv1VFCy5mAb3MoQw8fcTNnoCxLw1vXLttHV3NpUe5V2Y8Tm8fVR88eX",
  "key34": "3T8sttz3nutDpp3Q3GdB1eAD8U7eQCXPStAePmMHYT6nvQaxwV9gbZHqxqQYLhs5TW6mUwjp49S2Joqggz6WtWmQ",
  "key35": "3zJMRHL6QgAQuzfe27xp7s6GAhq1zUWRkiSNHV7mRMRxCsZWroceDjcFrfzcXva99KX5k3wcV3uZcANLp9pFeYbJ",
  "key36": "GcJbSr5ZHYiHeUMnCDD9YbEdBaW9EScaRk4v36okNHmSeaAYGdLCrpwZbtLqEi6gyVqTxzEK8c5o898VuWXuhzP",
  "key37": "o4q4MDwJpS8cHaJCAtvwbVqX417Tt5mAHXtJAdRMrkiZsjtjoQB94FqVViPDiujV9guXrvDmY5oEB8LvVsqcMkt",
  "key38": "4aVui74TnUpSQnFmKKmyk8m3ppcJEQXt1dVjkCMKG3wfJXqxwDvzWjyQjPBDe5wDPq6F5Ewnbzp9eBYKqxLR2emQ",
  "key39": "5qLBQF2cRgMp6MT3N1k9qMiw6PZpaa7Bt5jdCz8Bq2PwTpAJptMGUiMV8Xr1TT1o8bmkHvh7hEBgVHyewNdKYVM1",
  "key40": "3zqE7f4Ao3LaG5BVLn46foa6Fzbg6Tw1VWDyFPFSdkWcgfbuaX7cLuQkSyTSjpnzf8dEqsGkaLo7N4BPej1cBde1",
  "key41": "5PPRejTwgCY35F7mdaaiyXX3F1NYGbVQfYGJY97uLK3jxiEiMNqPPMaKvRkKLDUxFpHcoB8qGesZ7izHe3RbCzgu",
  "key42": "2XKmppAAVE7ikAduNZbas4oWjMo82rNKT5xDqE8yGhgq2uVmdtjENQmqgmjMJQo1VnWKdwbqVxC6ZBuCbtg6YGzM",
  "key43": "2qHoJQsMkiDR3Eywnxyn3dvrjTGuFkibk2F5fG2hPm5vWdLwE2uForduEv1mjeA3wcm6iEpbK7Gr4aM1LTVrj7HU",
  "key44": "3ECWyS9Thqo75X8aFGG9wudK2uvjKsgnPzLHhyyCxFxmYbkdgY4h8NbBBtobHnC341dwnwbi5xLJfcGBD34gG6YP",
  "key45": "2Q9DemikEH4mnCSpcx4enTeqtfWjvPNPtsvo5BnefFHZ8eq6QFpuccrrAQK9UzmdPiLZhfbnUyCeMufDSnjVNAEt",
  "key46": "J75x3KmPgYQk2XVNA5hq1gnf1d3YkKFvtiFjAxK3xgfEdossmtfqkLysAn1zZ6ASVkZmQTZJFwp6SrRxzAJ9tgy",
  "key47": "5D6gvWhrniTRqFTeAuC2FRhfin5guoXNKhMCKJZCxSqiwG61LQ1nXDT6igmHGNeLQ5ADyW2XiYg2KM8D5qv44kSK",
  "key48": "AhJNGe4zHt1FkriN4SwBBJjyiHX5pua9fgFrMdKJ4JNbaFsk5PZdm5srERhjMP7CqxJtNztR6PVR4mKvFPPf3pc",
  "key49": "FSzxhwzgQVcRGkGupUZtWazBzmAZCbQ1mci1deYYLcPwLrfgDLhzwqWT3ZWszEBaUFDtPdEWKjWuQ6jnmfqeHeh"
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
