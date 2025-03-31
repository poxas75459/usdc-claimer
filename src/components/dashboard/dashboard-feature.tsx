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
    "4N2kwCLFB1evpSUt2XUJ6n9xPiwoUjUHo8JKZ1RWkLLULXUqRtiwX8DKSfUwtKHyRUdvsZ7iN2v9fmkRfenGLBYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HUUan2MZUJZ133ndzHgqV4pCnh6epabfc2DAUtvHN9mMGhbVFDS21YaHbpxJXiE3WF2LCEsopqBstXZKmn7A84G",
  "key1": "5C2BAcaaMQ353Dtck9tC3nkJuoK7gbqTx6rV4z6xZiswhV3w3dK7CwJao4wUBeAgn5d4PsNgSUNeKiLVT9g2T4zj",
  "key2": "RaWpzuVgNh8DLbZk5BKgBRfZfrreGTwRDct1k9ArGs8VDo8ny8NL9DS9ntuEAbNMSGDF6uizKhQJ8kQ3BbZHtJ1",
  "key3": "3Mg5HDfiTg43418SnFwoHftTA1dWKGho9QaWnMCzN2hf2LCBG1B75xT3ADVxbs4jiZfwdRfFUBNrjEgZeEWa4Esn",
  "key4": "HYwwGG1rkJRzdPCPDkm4TzkaoWrPG96fq2cKgwXZP9JuhixAFgYYTFVMDxtQ9mUVpnqAoCM2ZRfxTjRbxpzAT1A",
  "key5": "4jASJTfPm4713RUr6iaNVBE9GTac6WNTMuyvPSqc6f3edZgDXbFcmQsmrgy7WyDEHVue2aLZkC577HCvEt6KVh8H",
  "key6": "AJhjGRMWsaCnagyJVpmpAAAMHgiT3WHZpby25gTyzTZVMrQ6K4PcPSWUF7mevgPxgGr1mvx6YKtY1S6oWctU67F",
  "key7": "548aYhKSziwsMHJVxzQJ7xbHmWCnaJFGKS8oR4gQ2pLwg7Cx13egk4EYpRFTAxVxpLHDADCaiCxqbzLnoXkMt2Ph",
  "key8": "39t8vevVoGGyE8hK2SHwEwNWqwUxSpVamuXqZNvHwVdpi7LRTksxZ9KJMrN2rExC18cmHDYiMzWJAuifdkWLLUJZ",
  "key9": "AQZWxkmDMmbBUnub7ikZ3JvxfGvbtcjugDiFH9zeD1sjcAtnARtdVz9NQnxjiafJbCL1Qtqe3NizDXFWEoCUy6w",
  "key10": "56jisQCrJDFk7sbAF5h8UnFNeRL7b4EqriVg7DzM3VyCrM31dLzQ69inNR5EEKMZYk5s3opeyPvzYwd3TUnmgyat",
  "key11": "5Fx233QzXKCN6ARYz9WRPLHhTB8cgt7t5WveFRzWAmF7EstDEsM8LDD36ALJGL2WXP1Xv4jbuYo4Ng237JiPhZte",
  "key12": "4MRFZ96ChkCAbjvyL2Z1GysL5mS5qmNbsqfpwX7QB7u5TTge9zxfQ3MEukk2E2P1fFUnXrWyG3bjJWgAr835snpH",
  "key13": "eQDAah7oREUxMoV8ZMh8FtrYmZxEFeXgnFj7Rcbn4KE8Fo5yoJzUY7ubSY29aqSJBEEpjUJT37Fpgfef3dfLBT5",
  "key14": "5hGgAQbTtw9JCZdmxuF28WtxhcKmrsrRNtxgVcJujB7RkyqBHQX6G8PpBFKsa8d4FoHNxuLh62TAbW59W9PYurA5",
  "key15": "ax9njZPbeXuHBsSPpahn3754dJ5vXBBqe4VjMqSYxDvURbQE61WHcfXpoKRS4x3JGJNX5tFcbzKczL8XuBr9zYf",
  "key16": "59AYSjsMcgnF7MFbJ5jhi1zxR5Gz5xf3nnmjt2CLn819bQ4oTm26RJqJY9aC66RaDcTcLTsPr9FuWUYG1yyd4Dcq",
  "key17": "3J1C72S45Nvot1rgMMCkoJyDpetpYzthAwGDyzMb1NFWxL7d29ya6ar5bDYWCi42WzBwEwcPp8vVov3afh64LXvA",
  "key18": "z3zm8RGUYcXgvGGCMvMHZR7q6oDiuhYrKxMtHRE8cR5qafaUQKnQrheCdKESFLUFD6d7rB8FHXhch8kc91e1xfY",
  "key19": "3MqJ6V3bRKEVniCNEXshGsCGEgEF3xDWsQfmDYru4rvX3AkCSN9k4QY2gAGqCJToe6Q3CAtDuMuogEG6YBLT9KJw",
  "key20": "2MwgGt1JsVL32mcnuhikoPbgrnCczPXXrW3BWmV6x49nrh7CFoBUyD2r7gzobaLrSAAaodHscfZLGFv37ARwzbYd",
  "key21": "q8738dUkcHMMHCuJmBMetzHjkZND4GTz8ia6G1ciYpSEdfx9sKb1NnDriY3MVrWPUctxAWrKpnpwCsz8QRYiFDV",
  "key22": "2aVd78LxCaimuLD6CX6yD2sqsybc2JTkTUor6tAjhboco9LzoEqkT5FKh2EsLyYPzCk3nNT3s9hdovLuqJCjtHmp",
  "key23": "rQZTo8F14ekwdnPjretysWwCy3F7DtRnqwjy62dzD4CPAcgTRSy9v93dHzswHDHBQpUWSxYVRmVZ6tgLBLLZ5up",
  "key24": "5TsJmoE44YTQm4A2KazXaxZUUf7WB4eRFKHW3NR4Dsp7HV2iEMhFhga2rgN4eY4FLX8B2jDYVibQUPmBdCYXnZjb",
  "key25": "jgEXCSzgoKB7ZTQyqeeKpdxo821u1AsrJUW6Zd992LWjc32YmBmSPqVYg8st8yZWrwrMGvYegxZyeGGTaaQxS7v",
  "key26": "5tPxvJtyyeviku9pse6J9hYiZKDrJRXTftaaW9diUZsfff1yfsESjr9eerchqSg9ntRukxeuM82uGUewd2VoaNBu",
  "key27": "3Xw1s4tSKUacrGUuAo4gGzWsU5ZoEFUV9U1dx39Qm3coqCPtd39T3JdSdR3nc9rTnyGD444JYthtXvb2gfQx4pH4",
  "key28": "4bLwMFk3b4hpewjXBMbwQAMjNKGJ7J9bj9uE61fWBz469n5ZvCrmYnHFxvM1zysc6wfbLm19cX1PWu5XPNugB5yN",
  "key29": "5ZyHmrky4VLD9zhWG74tveFgDABtNj4SuPtU4XTiihNnCW6FW9tdkuUjJfATy4T6cejP6it3NrdnqEctBrBt2Qgt",
  "key30": "3k2Jzx9sVnWuGmWfHhBKDmYxWuRXVFn32CV247esRv7imiWw8yCmFKG5bNW8Fr4oJuzbpwpW6FL7j6M5F1797pwU",
  "key31": "26yiEQ7o7YMMmJpH7T2MX7VVfXPmrdtH1K5ZvbJfePiRnmJJz2RhaZxMji3gwmwKtnb7xicqf1BGR9e4nmG3ym97",
  "key32": "aX995tTZL5dCPoxeFnWW9KwyEva5t3GQyjpyHjsrcwghK4wrDppWEVzyfakL6v48Xbx3X9K7MsTv4tJLnHb7hEL",
  "key33": "5dGi65ubn3fVGYFHzJvn4M7JVENLfXbkFstA1Wy6Vn5HrpWDnXmT6aHvYH88Lr2TrFSyNn9Zjxq9NuwfWRbbFAQA",
  "key34": "5qve6aWeRAbq2XjWjam89h8P6W8FtbHWXbrZamtrajEZtCwNSUikm2GjPDS7LegJ3dDT4MibmsmUniDekoYkQHuV",
  "key35": "2q723v6YDSBiXxBfWMQkhXJW1Ki9nYehJJ4Y3mgLvT4LBfezYgM76PNEDNdMETX8f4fV1fqzrvqYajwFpCJne3Rf",
  "key36": "5km3rtuGYZ8DaJMPhEbpj4PF8khTVD6CDzeHfy8NhFrxjV1cfkNXAaMrZtrvekR1pjjCDq8HdbgFoyUkXXHfxd1M",
  "key37": "3NcyK1GfQ3gPwfUxQyXZGExPSiJyGVGbYC8E4RFmWuS4mDRay6Evjv5Dnfd2vqG1VBeaCsR3kWE2nYMwwgm926yf",
  "key38": "dNRZpqPgEVbmSSF9RDDhMFdgDHutttS8vAYqiHcdyUwjnxwKkwJqzqo67FtoN2M2AkCM1To4W3JdfHjCTnTVMBy",
  "key39": "JzUcCWdcko6Anfw6Z1ZLE9L9B4rHx9cFnMHcKo9vuS957QgqoGXcZy2vyQSTQQmfp5nEU5B3HeFNN7inArJ6CVW",
  "key40": "24yeauj2Ej9fa2cz2XqCzTKur7KRQF6safdP3rBEz6oNwg4URSbhLbpFocs98ggR5gbVzoXAZBFKkYVbL5uLwrde",
  "key41": "35YA4tKW5c4DCkUsJQxqtHuC2zx6d9PD1a29RiyQskq4WVphmcetTHe74Prv6Hco7XoFc8tbsNRHnB7kocKfG3nW",
  "key42": "5apYT1mjSF5yqeeBr9J756ovC62h3x79R1UQkhxGc9LBff9xvJv8xaWFerB6F4vUSP7arfqSxBjTf6p9eurCZzye",
  "key43": "5Vbd3EzJniFwrxMD3WQ1r18NuEr282qCrWNqs42reMGJPZqFKpF2RJG1oaRwiECNeAEzsUy2rUk4bSxEtcwSnCqH",
  "key44": "3PKyAXZJna6wsQPp3bdfT2vgRVnaM1vyGv4L5nrawFpDxcv7D5dttSq5yTyJqGPkpCPn73NiBSr3uXGkiLc2UoWQ",
  "key45": "2UBy65fYrPFm1iQkys429U148cihm5rZGWwy9BxNMN6PuJJgPSBMFaL14nfMaYSx44no8EkP89vdcJUezd4HgfeG",
  "key46": "5n5yXzFTCB5NMtRKTMZqCjqXioAXkp79uY5QBTocPcPgQHw1gbSf2GNYUwRVbEq13d2M6FAzcwnegHjqJ4n3pZGW",
  "key47": "ieWigKmzAG1YfyWFzrxQ2WtmfeSme4jwqwV541ty6bQhtTsQ8t9UY5JigAA1zNn3g2cBAphHEidiyVTdFsgEwh4",
  "key48": "5dMTCtR4qB9pG8asqM2tYgJt5xdrCVghrK9pbSR2LQD2hVxy3rjWmbeTuZ7wxJ2VM3Em34sFSiQJg7WSpJWk6HE"
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
