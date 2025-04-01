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
    "5adKLm2qvBpPa17ghhM7sAQH2kAdTT7aTqige6QG2rNPTHyK7vdNnM69oDyWHyR89Uc9i8pKrvQydD4JfuUM9AXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EnP2DyfX5a5mwTBT33Vhmw245KYHXTdLJLR42a5M5wvdPRhkHamJHSffrvfkf5zUAADMQH49cCtFRmdkHngLYJC",
  "key1": "5GvvEnC5kfZvon1rK5QLf7RLDYRFozaJB3TsUvoSyFfxPVuTLgFF7wSJggPGN9qAUks9SEWwZvhHqTP1MvdxtfC4",
  "key2": "4eUMVKc7spiyNz6Gajnigp7X4rh37t6xwYBpgVoeY8LwoCVTXefVc34NSB8fEXJ9tBifJ7TRwfUan3mZ21peQELA",
  "key3": "4qeLEF6dpbNe3NwJP4jpV74Aq9YAsJaS4MuUnqxFudUWGRC47JDWs8zBDyssaWiDNjKHiVcX5AAzDP3WLvHPUVsp",
  "key4": "2mRSHmf2jRty8x51R56Xh8698VavFpuYp4WGZWktLGYqUpsD5bYfkVVZiDfDUXu4b3ELxr8rGQyQSGaFSHe7PV1c",
  "key5": "21RudwippoghDMy5fkRGR8YMG7inDamJfCScvr3kxkuRjJq9FFCDTRnWq2WSuPH2CUJLBh7ECV9FzoV6FxijHPLT",
  "key6": "3Ks38xL35PmSA8uU3d366AJDykVvxs1Jx26rz64SFWT5VFxhk2YXhVsDBvi5S476gXLaKNuSCuFZqL3PYjiXYbDT",
  "key7": "5Rg5KEtJWNLqtbVMwPGNUeN3VRiDPH9m95UCZ7M8WYPnWHMMHiJ52jDpQwueQhus3k3qknVg8cSbJXcNFKpaCdeJ",
  "key8": "zBZmLArkt5pH7ArpH6HdMubYcgVYnHU32QkUNgnXAzvnToaGLVPuCCNYiFZdb6US6uKas4ZwDhcVpeoVYeXpGDV",
  "key9": "M3U8mrDaXxa7p9haar8tjVb2qe5uZsB3aCjrgXFXR1mv54cTMV5Mqu7XcYEQs2et8doDg174fceLo1EhjT7mrR1",
  "key10": "2Wm4FZPTYM83iBu7xV335Ymqau1KSAagVd12AdjnfC9VcSB5LVNWYER3ykLS32UNhisHRA6FrXBHyWV3GJ7vNyFH",
  "key11": "52pBCo2EeH6uDCUYZvHmtYdXrJDZbcDRLAHQX43Qq1a24vtv1h8Z7qeixkj7VotX1nqSNJ2BkvdGi2S2RSLmjYhh",
  "key12": "24zQGheUom61qxThmcTQ4wkucg9pKz8RtsjCCZoRuGgtEh96NAqBBwtt8EvkrYHRXh4nmJp1ZVqD5StmMTwVgyvi",
  "key13": "2KkStEmYWePttoiBfomRndZM4rqavG24SjCEEfue6uAB2qjY6jmKeZqN5cbPgcuidrUKFcRHDVBpYpyKBot5U1AM",
  "key14": "2rk6V1eMXXR294vby7R28Q7GCopEYT9vmWSXcSDGrcj5TkoAK8DbcVFzcsTPLQ9AAsJCTdThHaPZAQ9M69AXNTzA",
  "key15": "5nJChGZa5qD14xTH2DEQoGM4oSGW8wd6fddVEExu3siDgB5muFEFZRDFjN26Z5uAG11451VE7yp9Wk9pY9bpK2hG",
  "key16": "4bEpeXsv1KcqqG4FnR1Cbv1xUhYojdmrVYArjVZN7v6nAPe9daLDBgnmyhUjrh1kRDGZRodhd9EDr57vjUeUcRUX",
  "key17": "22E5Lfbesv8hPcchkgZ4d2RpkL7gAHDcLaM4SGfD63Zwab2beFCRQw38UR558E55ydNUSF6cQ29bahYWeQWVB2oi",
  "key18": "25tMsuZ1TFyjLHgTXb2TYeUDpm6C23BhPKbkn6cZANRy6V8xQQYtdaR21kw8nUBdhe8Zd6zatZ5UV6vPN2SwyCXK",
  "key19": "3zWCp8TAJNtk6FGBzqDreHExPTFkLaEUjCeDdLHNWh7F9gGpcPBFrwtc7QSVaeTtFvMDjpFBawQcatfWxiJSbdW2",
  "key20": "2ToE9RSz9eBG3XZB6FweJvT6vRfB8VmgdTyMQHFXQxTHw3iQ3iKcMxSEEcF9w6PEibunXAsh92vADXYWPJ2VcjFa",
  "key21": "5uch74H8qXvCd6iBASTYF5HzVHCGzR2y8vvqJrUQhs3G3wJCcVr8HcCZ6kYuKkyhRaB1Xkhq4WQXc7N31eoLGyFJ",
  "key22": "43ned428kxJhGK7Fx7KVw4ZPrWW24NXt4HBrHvdviMGq3C1aiJkPQJrmCB6ka56AE4ujBQ5CbheheDfHamLDT2mq",
  "key23": "wHyKpAXNzcx1NinPegmAjcCyRneywkdFVUGrbSVdXRvsvtpSu4AcPCA4qJnWC9RsXcBTUTMJZDFMZiERCuojvHU",
  "key24": "4p7AdbEvsv63CeVbrWNyDPPrLCpm6ypEh37bGpAqb6wgPeH2mLbah2oRy5nVGSbGvyUNwswfUdWEsB8ArDW6jxGC",
  "key25": "3EEAhViRmD4wWmzd9uXkhDtMUVKcH3AQL142A7vbom7LjCvwH4JDqKyQ6poSD6HqASgAdk8oupS4RDQkYCMD96td",
  "key26": "4W35WDu1MqbbFUdMMNuP22yGciTYsZXBgnhLfdH7DQohmZr4d5dwTpC2USARHY1WZTeWyDX7gZ6EyTeMeM71HzM2",
  "key27": "p5SnTtkoiMAv5JAsDTnDouVZDd2r32Xe6G57CwTyh11ktf5CwRoG4TXtSDEvJR8dD7hPY6597fc6A3MRHGt5zv8",
  "key28": "37WNLxXiRPRcK3QwdFUDJ7PekY6D3xLC86cHkBx5ymc4W7RYnJNMm8hPiGrJbBuzDMcGvSNivHigEdbnqtkFQ8sY",
  "key29": "7Hgh3iDwJHBTkbHfrDJxfGY3JxYjwgh4tMA3eLCdyy3cMwGw2w1K7VcEPvio3oM1VVKWDdEcuaksNxHdHbKu15h",
  "key30": "5zDi4KwfLuHrpfqBRV5GiKynJus8jg4JpkrGcxLn4t9mvz1D1JqFtbmJLJLJQ57ahT5oN5gsKKehKpZ8PVtDDryy",
  "key31": "3Sz1oZ4d5y9eWJYAgkAThSKrutE2ELGNjJomSheedbUrtwg2DpqkwryJ8k72S4GeWPpMCYm9uceQkQZboF5sdPG6",
  "key32": "yYAKdwGskus5CwKFGxen4FSn9YBLBWRXJ1qgX8eExCA93TF4DFkft5pzCSuhQpzKmuYsQnGVAZw1fLrrxweZao1",
  "key33": "5SS4Bsyq74Yk7T9UmVMjhDXpB6kyk4RnXzXNdkxnNX6CEA9QFgGAp3ZhVoFRyAUjT7bRSkNAv1PKyTTFZ9JkfaCa",
  "key34": "o7M2VVoACJJiP5K3w7aqGc9MSC435L6s5Hratcx3rTBwNLa8x8149L9XDLWDhc3FhySFwerKwya4oJDwdeHAmNP",
  "key35": "2M6bzFSYiZ5ptAoJEygGAwiGPAn1sdaCQZ9oEGd1sLRczkY4HZV6WEJbgxrS5BmDnaEsZ8ba1A8cXjz6SMpb7MH8",
  "key36": "5miSuHDeFSxMDegwxntY31jV9ehgZLDMeh2PRiRPYE3DRKbQvMiNBQvurbX4QaAWvk3eaToAWyVr9dEjRY2qZ4bi",
  "key37": "5XjyC3aJXuSCnLx3UiicsfcAQ9SfTiD8HeZd83q6y2kjGKuUd6SjPrPbfaKaE2Lj8HTXzfDWhNd5PWmC5NZKYtb4",
  "key38": "5f2gN6qQ7KMTadXWSx5fz8ymxwv4LHjmvpZRD1JDaLuq7i34mCrSCYxjF6jqdEyVSMR4PqbpS4gfFgmyyadaK9TN",
  "key39": "47srTWvsDP5eVeoAayy4rMAV5HsDyofBYNLXexWR93EHR5NpS8VbARgcZuLYN1x23npjmQJ891LCoYnrZNx4hBKR",
  "key40": "212REoUtwWXEfYEkHBo4z77asbe9NVvkXq5YF1V6vid1ZAFFgEkMjLTCo8j23tqtX11KvLJ937i2hYJGQhqvyWPE",
  "key41": "4MU5zezQamQuxCVATeya7YNiNDuCtSEiXPPvwC9XVsQxoEKDqYE1G6rPmftwd92eTkRQuhYd5LkQfZ1CywQq3YYi",
  "key42": "4hQvUuMcWnvrrmSKyRByPGfVKUVrNdJdiZgcE6snMmqPg2rgwqXv3cpRYzyiCHCcgUQoMmqvyu4GWntcS1DbYSJJ",
  "key43": "3ueDZtEMit3FSLnZRkoP9MVmkHDhugiC3w5hrhYNAJefLjAyXtG2TXr5hjf5LdBDiBc3xaKXSrR4Lk4NB7qwsV34",
  "key44": "57EyJsJj44ThgZhMp9V7Ht9Y5cJec4J59oAzBdAv4xR6su5EMQAYzmx3H473yMCckvHg2pXKn93i2idWmiKUDrnx",
  "key45": "evnYDgBfp1LSdNmNHTUa6CvYR4LLR2WRPFyFdHdu4tyn41rrRXA1CspNzdT2zGSEE8mnVB5kdueTdCwqLBP2uPY",
  "key46": "4aEjCQiZ4J7rpFL3ToQGz7WrB4xZiRh2tDdB1sVD8mQZDwYSspkkjRDRfMfUApRuRrGvKhjqUxQFZR161dLeYqcF"
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
