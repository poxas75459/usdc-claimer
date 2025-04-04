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
    "58T3fTogzwZGEBzy4ra8CTNKhRbVnvRTADag4HJm5zPk6AeuSrYpwJwiVcAn9CN5kugxn1D1WkKnUXoFdcA29xgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ct6a5fMg7em5Mjrjz6V5rh474EHvc5BLBp1QdSt4oMdJ8CQA7zm22pswWrMLARUt2feiXgudDHg9tj9EKx9GxyH",
  "key1": "42LLAbtKmFrT8Pgi3Z3FmuiC317E3uNrRPjwuzcHySguvkvKAK8T7QQ7EzR47PwdWHnaRJbbGGXs3N2Mda7PLeei",
  "key2": "3SkWycH29x3dMokrj9u17iAyu5o7Zigh7yxbbiJ6UF9x8c8ScS4vMTeRyJ7twsM3j7GGB1nBuRkFMRE14JpkwA5x",
  "key3": "5iCL2yad7Wq1Uc8j2DQ8qrogKpMpVpiRr83qemfSfWvB7d6dPSECa2ojRQeaT9oQ7xtDna6ydUfpnjcTinhiXEy8",
  "key4": "oLguzkDqS36tZ89L7QdZb4RipNHpfxyCHrmuu19NSJ7Cw1S6omUp71apynMmmz1AwUdXm2fZWBVqP2BwjFLeApw",
  "key5": "25EFoNQk9tkh7wAcKRHLDENNDMTxtTPvg463J6WfHoMw5TNJJSfsVc1bdRKQxp9CXwxM33mYdV9guNv1LNfdzjif",
  "key6": "3qM9sSA3FEN559xM62Ao23zNaeQbtrEC4AndJwuMzmZV1oqahSKBE29YBeiUV5t3jmDLoF1YevEH59PeGwPmYXxE",
  "key7": "39wPK42L7ZZ6m8t6wH8f38jgGbHo8m3qLoLuzNVMBvYzjqcZzhVGgp1o6G7MjUUbWWzERvrJqfGW5BecqFK4tx3b",
  "key8": "2fFmVXhbUDCivuRHKpRojPiaurMTwEfcGvhtKdbqDV7sfsF45bn2e5JYp3yPHjVj4ZAqwThu2qwSomMk9advDVMe",
  "key9": "478S3zz4Lpfemz4WZA2o4vAFf6WDRgunbAoVVLNsnnXCDTBFi1crvSUkFZJdDtcWLUYCxUC1z2hLi4ye69HwEQj5",
  "key10": "f6U5Xwwx2xaNCvL3PCMCfeVJYbyaw6jUCUDCVhzHdqjsWtApo7s7ynCNmoyCU9LFZvyz6RpkhfchRSdWCuqdwaJ",
  "key11": "2HptsgbLosYwPsKBGeLPND4sVB5t9VFZEGRmfVn5aX65vuwH3zkpQVgTLNTR3u7FWUfGiAka9wPg5i4qNNwd2JV2",
  "key12": "24MzhvjUERvb1kB5FnVvvCaYbz4WuraUka4it9rnXN6NBPRPB1erHVS1LE53NW73YPi3zdBS1Mukfs9xTLDn1StT",
  "key13": "23bTSDYrH5sgHbMKh3yEVPqJ93P9JEeu87nvws29CNgtoezm7x3GKp2iKsUtpiqfDMK6kVJUcDPPVkpjGybqxusj",
  "key14": "3z6dZwDPXFNwBPnc3tZoRZLYWtHdG3ftUoj4xt3rQKBKeiBC5CcwAz8epExLfuUPCwZBqPDN7JJrTgQ4xKeAK9vG",
  "key15": "3jaHjH33qAD9B5sYKXaLt524Pz6SngJyhNRCKEW74q5e1o5AVZDiXH6bg29LRHwbsxSgTaLmFPdceKjuqyapRrdU",
  "key16": "E9Jfe29gyQt52rNpqn7DBr6eJwV69U8UQfz5EL2sbdUbg6b1H8Z121SbYmJpZ4m7nRcKa3sYbMuFBcS1ABr4GZh",
  "key17": "295TD3nW5o7L2qUHXuCUWiGi8e4hB72GkjqvWmCrstasnM3xyakCbAmkPxnk44YZ3xnw5TvmhRHcBkgRnhPe3Vf3",
  "key18": "4rUELZtZkPiraw5jXYtrDfJuCqtUJnyAondbneLnT4n6Xfd7kGQ7TDdFvPQLBzzEWjbmbhgsBLwj6LnujyFBPJEG",
  "key19": "2ND6tcFUhnDSUnkFuEd9MQuRG7ywuNoifHDDbX5QdYYAar2WcVWEjUK1ubFURu3ATTCRYYQ96NJtcPPuAftuEsuM",
  "key20": "2YqE7vDsGsACUwmZCryhrsXayZVctpgwRMKMAqZE7SE2VN7e1HkP47BSMfPs16Hkr4seQmDFJVKeJ5fRkUWpcYcN",
  "key21": "4NuHPDoSczPGmktC8QFgyb21qJpYQM75hZe1QWwM7ed18BLaYaCjS7qhgR4QiMyxCbouXAgWGmzzdnuCjcp4iq1k",
  "key22": "5oS2GsqaisRvuXrURB3zxmp39HffqA3W6XwDM8yQTy6vxZ5h2EGFJwfGWWQZhy55krts2y5enXn54ymfQAkagXoC",
  "key23": "VoP4hjYAgn8fanyLjWW38DDA21EEsJojMrfstiJzy6bKPE8gRiGaEXJGKSYz74VEoXJDmSGGMcHaHqw1pV4LScP",
  "key24": "4h4fWpNdwY1yxzNZ62AFqhLPvgymDrchiJNioTMn1Z4HXEtD6EyqbhBjL3JDCK2tYffomKJbFhvodGDahSf3fwMQ",
  "key25": "4yniARebur6vHzQxDzc4CJydS9wseRCvxZDpVCPbfQwz59qgoS8RZr9rL3ozSoVsVPpwpDKaeFw3he3gT3tG6mZG",
  "key26": "2fMumEj7pZfPuaG5WcZTjqBVSe1htwb2pvR1naU31N7P8ecLcaGD4o9AiTwfhrDUdzXHWovdXdK4zwtmpdaTtNL5",
  "key27": "4P4tpUWofi51c6Q96bLSvmcLNsShWZhh7kLBQqJzVPKx3owFRPzpTX819EdpssPB5DUZPXn95Y21huWsxNry7RSR",
  "key28": "3EDjUSExtHys9SUaEaDZmqu6oHdtme6Egk17PMMw9o1MPXV61NMbVv1eWbZ92DCCm6fbbYnNNDC6Mmt6sErezpK1",
  "key29": "4jadWhp7mBSozuaDivuXJ36FJFm8FwJwnh94tuGyFcz5aehNNjjP32JgMunrQnsYGH7Xs7h8P9Z2CAqEtqrdDKtN",
  "key30": "27YYfsFEgeKQcy8qjZWD4A1p89DcJnykpQPeS5qgcdZL2oZagXrxC1AFqFifNYAbCggtmNpDqpsQYJdvS7zvnCHC",
  "key31": "4nKBWeufidKZmUcE4sHV1wBbgnn9a1wBdp3M2DgTtEyvb4Yz4AwqkKLbA5s4hYjq9uRB1WCe4YJAsJGkaYBS6dEF",
  "key32": "RBJZpf7LvrKD5XBAfe1vNXe8fLmoq8EaGNYuhoFeFwtAVWbLpaTFELv1YYga7EWKvEKi864RRVmo6koNp8HzsDL",
  "key33": "5u4m9uTsCtVooAM4bYXeze3VfvgWc8dvivDWnyssud5gwXJpzTvbFeS1JxbuxYupWNciGTbVSKdNV8N6dPdedkAB",
  "key34": "3dnw3SCuFyRm69LfwxKw4ZMFSCk3NVYJSkCTmQ5U3yMGUGaPkcwar2CyrzKyYsh6pAtkXp3LDi47pz7KcxUt8v4m",
  "key35": "4YPMQrmeJsUuCgFDspvp2LYbtsCvyAKefmLkgwEgKgj6NRUgkrdGUp3QqUpJi8XQgjTGgq5HDpy6motP9sTGrYEB",
  "key36": "3cc2qQUn544nDE9W4i3pJs9MMuNR2KnqaH9aCn6giEYS8bTkseitXA5B6AUiDLjMRrYM8pWJ5HjS7JRdQqw2iPLM",
  "key37": "63MxtnmjGRozm5rDmsKHhwFyqNPKFLKi8H4Ek8YLYE1aX3nGzZVGGdfDT7dQUmBhjn8mzPSAiZQen3FxykgYHsWG",
  "key38": "5fWTxq7a8Bs8WFC9CSQSUWA29FfQ6LhmgxVgEx2eZ3vkqFDmcvYjo8Ly1daJp7nmecoKUAuNqM7kGasfMnzi2GUQ",
  "key39": "pNopsGSBBNmQKmAtzRq22pzG4Mz9i7HDkyNGtj9SWJohB5RVK8QipJUaWMYqwGt22w1czx4Ln9jcZyY7Ajry96s",
  "key40": "3VZNH9k2GiTfJqCVweB4KDpKh7TjhUtsHu6HRNAqGTSP9UCiRSLFVf7bHZYepjB6rC9F1qDndRh5qqwNHP8LaNmr",
  "key41": "46YMvK8iERidDJr1C53zcWS1sGGCjrLa6NmvKA24yPnJ1Rc57pRswCXQLetx1cqYczfYFR7ZZEC4YWnZcYd2rWBZ",
  "key42": "2WHKJfSF49nPUCaRLqd1AyMCscDuYxRqwKmgrSS1qLJhpWUhM5JZq5iZKq9qVMCm9EcgTmTtx4vQk878KzgMYwSH",
  "key43": "23SrE4gy7HEEkKRX8ZobZTixgYNjUgZbQutfe1cKbkEhAPRvegYWj28PtRM469SHhJvcmD9JmJuADYfKRcdGnn2f",
  "key44": "55ZjUD78UtLfnBRe4PbhK34181vbZHNPs2Cq4cmVeMy15JFJK9aLwM9iEsZUU5yPS28u6HXbsB12brfTbEYYtBde",
  "key45": "4ecCVrYA6ULJ5jDPEFdWzTrV8wcbme2JSp55YHnhchVM595TDK8MTkEeunHkEXvMAh6qWYYMbxJHHPaYWoxrCDao",
  "key46": "4VNops92wNG7cJipKUTsG5GXRCw9nUDjZyZR3x54cQ77grAtFEytjLAp2MvjpqvAjXw6PBu1vFVKicvD4aYMJkth",
  "key47": "4yxxA9XY7wKLDPvn7fEgu4UxtKg92x6GGUZXRhCUsAD4cHtiG1YQ47UiUjCin93yaiDrTFYpBd5oX8dvq6LrGFxu",
  "key48": "4d8ANsX2tMDTpBTt3YAYEkS1uv1QeF5k5iTXRr6Jtmxhp8w2mAhxHt3XtrnyxpG66E6PxKKqBUj3b7ERkNteiMK4"
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
