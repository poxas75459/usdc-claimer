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
    "sTSszG234cM8Rv1Typwhnx1NrZtBonhpvLwNsVdiAYzJ6YNBYLoEiNY3cXvXoDGEb12NpUGRZFJCyQZiCcBiNN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33FfDF8wCmimHiqBE45R9oK3Vw9FVJDLWWFCC41Uf8uyRv4F3aAtJoMgiBgWxGU2mN3SRDmUn8Kk343uzWi8fYxd",
  "key1": "2Vp7wBgMePCju77oQiZ6tgjpxLAzSz1gPffhhk1yq7YP4s1yjTKw6iDJjyP7LbqWPoH8mmZ5FmAyZWGsvnT1HQJ4",
  "key2": "2WSqUJG7rKhbv7sUbZyQg6qaEE1xNjVPLAARuQJAR6SuFucSs6fF4cGB8uCpdWiGbTjLiwb9MWtT1DZgYtDV9AtL",
  "key3": "5wwpVoK1WRBXB943kyRvCHPFPHQvkie46ECxbp6JTKG9Lo8GbKA73yJWCU5zVBysz8VLvVi7DDfW2DrddNaNQaU4",
  "key4": "3GZ9oumsTtE4c82VhJ32JezGBLAXikUjKT1ruhvx1yRtYD1XefHStZdhay1Vb9iD8hft2sUKrSJb7f2jZSUHcZtx",
  "key5": "26tHmPzdD5PHKZe44r6qktyQW2YjFWBN6CvK4vPt8ueXkZXdXfbYeGJKLAB1L7jChJ7B3ory3EEfS6YWVsfEhSQb",
  "key6": "48jmCUzo2EvBz67cTcJZEV4wQ1xS5PyqfmWhav6e9DEECMZCqp3bLrrws53iAMbAmRBBKd7gahzV2Cu2JBjZxP7W",
  "key7": "3LjqX9RnFtvwmSfJNDsdMD2DZGpfkTKsTn5NKeR3yRMv8QQXWtudjtaNcGTUnUF3kuFuzESLYdfDeYJg8Xi4vNEy",
  "key8": "s9NibwNgMxjDGLh3EGa2vhJdnrRqwwMYi65NYrEF7nYxogSXkhCNGnaTfN6jXxSGbFETGDisahC649EtR9SadBX",
  "key9": "5qqFPU11JLMQSaQEFwU3HLJJCzE5LDe66m5caZBqutLcBn82s8qTb1Ju7h7LqHDoFcsLfDN7yJbk78zBWqLNVmii",
  "key10": "4XBB8V3BayH6McqBKEKMB9o84wrXMaYh5CrwLtj97x4ipKQKq1Hgm5EyftiNRGi1rR2ACBsbMQGckuMzsZKofHLq",
  "key11": "23sKvuSwGAV784x298hB4yT3sHCeeLT3dAe6aXCRBUqDDSBcoMydsBN8a8f6G4aVqQjJjoeMexAUkCwiaFrRCaSy",
  "key12": "3GjhpRzZtSNwg4DppvdHqi4gBXREj48BEwK29Lbv9525Xo8KkeH1KJLZDe8HumpqPmNWA2qEPA1nhUKGTKq7qMLT",
  "key13": "3Quvvo2nEXi2GNujJuSoVRCqV2Gk5Am67we6Uqsn8G6ZLd5tVF39QSrJ894XC9qeUYnKsK5W8Z6E1jopUe2xvQGj",
  "key14": "5m2mLEhQVmTB58rRiXxFo1XE3vc6fCTrNR2DQAcGJjGmxoRz1ey8WfVPMMzqJdtKZ5FBKNdMuuPoybFYyq46zQ26",
  "key15": "2n6jHpn3i6jBpWZnEJa2xhxEUn7XxvKkVKnDJiNPG17NrzLXjnMY6eigeyaeps3VyfjNadQnX6ASUBYQitizvPsY",
  "key16": "42LaAp5ehRmWV7ZTuhQTyKW4vDeKcF2mAbCiiSzDsko7YrB3k9cmWxfM5dd1u78EA8ZSpkydAvjeabhjdVRU1j3Z",
  "key17": "5M3xhmxoJ4JYdZhnpjN1xd1SwSHAaFzwZEgCrhXm391Nez7zzN3iMFE4zN7qcLHSGeNEvExUrFH6F79opEYaYBMd",
  "key18": "4d35QkiAVgTJWUybPNEvJDz4faY9ibDnWpd8GQy5Kun9k6TtqEu3uzWaJLMdz18VUCEWxgUBzz9J7ATZou6wmPB4",
  "key19": "5bTx9dV3Rjwx22n4faNVr2vtqwkoen8L7GoHBjVg7vWhgiJCrpmTkrvHGVLVLpH1hw1TYjEHEhtTSxD2DwqjmNwm",
  "key20": "4wer8VibfLjeiEn6pg14YEWhJB4rn8nHuw5XxUdYo94iCo3LArTS9hZupqxhdFGmxuCxmF3AQDMtZn9gsdytUwAo",
  "key21": "4pPtHpdZGLzZQbU5MSo4iKs9bp2UGrBFxA2YmU6ZCq8oHX9AU7Vn3VjyjiKXbMmvtmAB6F5hqCj6zQ1zYuZExEC1",
  "key22": "wYCsonJUWBhJtBCUaR5oDuX9Svoc6UWGnc9dgEN45gDUB1H4qq4q8v13gN4uEWULuURjh4LrWfoV3tztLMLLU3b",
  "key23": "5yevgjQEHSHWtpBxnazB5rQi4y9nfurYXbUaTdAxcYVQ5id5Xfn9jd1K7qQKpVUc5A388qrehLoyLY4h3WHwdiiy",
  "key24": "4GxRNf9HGb3GwE6dvWtgQvsT6NsBtHsu5pxGnrzQ4oFn479xPRQ8AodjmPxoyKA6WWsP3E9y8AULa9UP2D3GM8es",
  "key25": "2trw1Y832ViwAHjBZuykfheJxiFHkdhoE69k2JrnDoupGu8NZ8NaTtDE98RezWifuDkJ8WaZPGBLVWWSmhv5shnF",
  "key26": "2ymWSSr9rZngGCCyEbHhFR6kSuwinh6AGWgta3pZSJNP1whS8euJFYb232BiL4odGBGabwhqkMQYY8NTyP6rHj1i",
  "key27": "4Q65Gjp4DcGntwM6kUkhSmWahRxBEoY4J4UoVtZGKbQG494RnGNJDZtFLNU8TFeWZBgWAharJ1s2ybsKZSNC6t2z",
  "key28": "He9227fDtzT85zZa15JWZHYaHaiuZG41xMNf6Qv3AKjUXoSUrHVwWyusoW9inuLZYx2QyqBXjZjFX83eVbtGNnb",
  "key29": "2aeJp2TGRFwHtYR6N8G9YFjaY9SYeX299mZNkvGng1KF4U7NoM6D58meNEfBAZGkTon3vr9DydnMRrsaYakayTRf",
  "key30": "5cgxLJVS8UM7aaSV2Kz1qj1xyoVQwYVARKBUPK1fFcMzzeerAp43CbkBEwm8LnkZuyRZyy1k37Wo4rbYQrdx9zcZ",
  "key31": "2oB2kcTHw61JHz2XJbhXbL8MYN7PLQMJdi9bEQnroiFnY5SqkzLFJH6pVLdtHQarqCL3WmtsyfuNSKAhrxfg9Yah",
  "key32": "4DPVXNbm2QfBqeVyBZoj136ubERwWhLCydqgyJmeQXD9hYmnT3rjU3vNEAQfgCR4GiMVdSD8fhyLcccgmQDUVDGm",
  "key33": "HDaGUeAsH2q7N5zwmDk9qyQEbu5q3s21csL57pJvEi9xuCwEurJnYXyimc3S7ShrkTqj1D5PULkv7UARczmQVdn",
  "key34": "syvQXPH2cd2MiPDzc65ZcKTRw18wep1ea4AhLyz1QfYhZaVWVGDio1TqcMASV2LzsRvS3EGkY2TeY4cuAfbidJT",
  "key35": "5hR3jeH6ZiusBUKbEDZNKYrA2AUiwwLohGjAurVPjYWs3598qtqW5iJWPALaNxZdrciySu5SHRAjxMqZaumbqTbY",
  "key36": "47mkymCp7jqshJay8JaEFvP3XDGUSi9RC93rLv1EQxJhogiqkiCqTjjyLyFULYtG4mGyvG7nEi66MoAG6Dqfcubz",
  "key37": "4WaaBt7G8ZgEGHjuCLAK3Nk9BDGLGvpCCAuxTgSKSmEh5ppFs5uWDsAbLzJQbHF1gDSddXjMErA781NLxNmYNgjH",
  "key38": "2eMw5A2rDvh1Umavg466of2cJSK6s1sSKYCxyhxQZE22SpVGzgmcm3oB5wzYfzXfnF8mwTd8FK8v4nvw9LJmNBGB"
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
