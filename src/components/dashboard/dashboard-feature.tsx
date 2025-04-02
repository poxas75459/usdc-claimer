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
    "34zsDyDU975CxbdpYCjRNhSTkNramVVt2UzwPvwmwHeHpCF6duhpcLNdNCEHsVsFkqFpSWo9PnSXDVemfKQvk8zF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oqDcStxtyUj8RBg2NoC2F3BW8quQSStEeV2y5dTaRukrzgK8HWzsCzk1x9CHHsnLQzJFg4jBBxewFrytkMig4y9",
  "key1": "3KPBqV7nVbo5r52LFARwzbnryEpHHxpJpVFJQpcdr9GEA8hRgTCxZkvVmQR8pGh6VtVGXQDx6TmaJsQjbvR7e9ap",
  "key2": "3sdBDBhbnAWgxzqZnTJbDGEqDVJH8FLL93JxzBqvok1UXNYyhumkMrK3dYWotGdBnQFjtFw4Fk4AwR22sTGSSvYs",
  "key3": "2u994JKrsVnwhKzRj9K4zwakQCWpTScCLR7Z2ZiWaXELkNUfue69aAVVVfKAy69vvxjQT8aqWTETK41VvzxbS7Pt",
  "key4": "2ZsPnXqqMpj9Trq42bsXPM3XQ576vEcpqKbF583biruK83RjSohbUTZ5WuymFwrgapihko233gfSjpSYCX8bUGe4",
  "key5": "2cEcJMLfLKmyy7vz3mwGvjqJrVjnpYxUXKt3Niu6Uf7y4MHxbFwBaRxzjetEnD85e6vaa7ygX5qLAwtzoA7BB2Fh",
  "key6": "5VqzkVLsHCtzCkUK71ucFA3WKJ3XyVGbbsziYEoH5GTRiWf3oKHVTThRETdFuMeqRnaffqqcbpJu3jrNqxgYhxmz",
  "key7": "4ujYWWuW5rw9gop63cGE6gHvW18hsQxzudmPMB9TpYVzG5XJx4Fm5yriurqJcyQEzVwn2U4pshomtBDACfQcHbmc",
  "key8": "5unasvDanK7UAjwATo1BNsrcr25GxPy4LaTniYpTSctwCkEPisatnE7r3WhfM11tNFuY11NzvehoMvwncEB9gDgQ",
  "key9": "4E2vnYsMnekxuPiVjgPMX2U2pTGZHdrpeF48HknhiuCQ6wKAeZzhdTUKzoP7KhPLJbBPyJozRfuUH7tZ14pQbBuG",
  "key10": "4pR6hRRhckyr9znB1CVyyCuoyeUznYEm8h2YgBg4W4UCuwpa5pWYpVqjvCyHpHERoVLL9Mue1xytabQSEh99r913",
  "key11": "2KgRtecrVDEih3jB8Hfidi1q6vuDChvpzsvRZqXxtqufQE81KnaG2fPudNYMRixStzmzjV5dSLG1CNn4QhXk1eAG",
  "key12": "4q42wGuqzRz86szJReWnNXfL4DZ1YqwPSf3LeyrxseNikiBd84XMAhNciSawHwsKnAGLhFs5Wq1m9eoFxhQ6kvvc",
  "key13": "3GhGp4hQr9xNX6VyxkFdGy77kDSszvSGsdL1pB3N3Hwm2LQL5HHGKyMvaFJMQG7ic3goisNgYA17EPPBvnab4yHP",
  "key14": "KH5KYPLtya28VZ1jPimkhZ2qsYbMH3rSip5zbZeJaAg1EZcPzvD94EfEMCVgyrQCRLsimcpgR15oTy4YnV4r7Sj",
  "key15": "52WkBFXP7H4WxP8Jo6FhPVMexEjkuLs9URPMqRR3uVCDBTRV1JoUDrNoGZwz2S5HerA7sFMiMFLQ9rqxENhrPKCe",
  "key16": "2KAge9sBV2e24tmRQfd5nASN3q8WSTLxDrjV7rhFDH4bxyo2mhEM5MvmEDATuLQt7J3DXXkD3mnqLhbYGH7heHDB",
  "key17": "4wyumazvQMqGS9y2Doceno5LtQveZYHubTx2smuhNh4FGvq1iKATk3WeBqTXq15VM5qAkWPFrdJjLN7TKV8GkyUT",
  "key18": "47S5KTPcm6azD2jDNBCMn8wSoacLse7fsUCmKCgZ8CnwspPAMQpfK4F7QmRQyfCxc1Fmy6UV4Wv2QAVAH9oBM7Fj",
  "key19": "3YoziQjwes1jTvkvdnrDVhLSad8hrTUfThN5Q4pU4o3L1pHaXAqohp98bFTN4As1nCP4Q5B1Nz8Dd4CteJJQWYgh",
  "key20": "4Ux6LMF8pkU89rTkn7fR2mQnfc99xfXrhvHSq8wSJWaa7uvkVApPsKR6TspuSbhwN5rHxyHBi3CdzeqVs1bwx8mh",
  "key21": "4dQckHN4nmNXpesWjSJTbVdpZ4BHXDcR2Ju5rYTo1yiTjgoYpWbZpCQeWAiw7Bfn2ZZhbYdDwp4pWDsrE6kSupXH",
  "key22": "4uTy2hP88vHcAwWRANomhhA5akco3nhGC5RYsXEgbwMrGc5Yw5TdFYP5JfkKtjH3kdXuSifcTFEAu5M5HMduJuHx",
  "key23": "yenPYUHZHTpVVxd6M57tBi5wEjgjpa2FBXReoaHBaE6WTX32dkpyJoVeVEg1HHTAAJuyC2AqdbqeNqhvE4bJA2c",
  "key24": "LARYKMK578kDodT42FuYV6aHhvfAvDBZT8xeDYu5UV6MrBSA7uH2tupSn5rbNoUYWVzs2fszA49vaxCGZefXXdf",
  "key25": "4MxYNrPMT9q5ucmXnmMXcGqqXV81yJ39MrQWEtrZfe9ENj57RAGW2AuGGr6HKmXFG1MrJY8bkviZEzAVZA1UWZmN",
  "key26": "XgQJ5yYLrGBfZeDyA1JUsB6cvZraA1YDD6Kd2wxVQrZCpZq1QB38m4VTqLjPCkUPKo2KLbJXNTGWHjMSmjaqbGz",
  "key27": "4ySsYCQihURwYLjmMnqxdLLuerEtCxkZc7Mzwtfm2c7rdcSNcHb13WfQdq5RJGxhvUZ6Hwg4SDAbtNYHeXe2ZKgT",
  "key28": "5r8eqntDzDKCrQzUiLMhmaeCUQ6S3PzMHjPZnWBmxusKEzNPNL9MnHaAPDA5X9sWqacK7bxCsCQN8LVgFxx3hPng",
  "key29": "5QKobKHCa7FEPHMzK2fWAgVu4wKgf2Rz83821ayc2QYDo2NVaBY9avW6v82HbHfpTGrZ22UKUr5gMS4gcpjjAT34",
  "key30": "2Ny19MS7jDM4dmZUQWM42TUmhQ2LdmWYZa4kBcd1e7mKNM77M8VgbntHnbajEazgtPojwTF1eAQ7nDfhor6ghQ5y",
  "key31": "3RznpnF3sP8MV828JTaaZWLhofWbRkU3PEDrgzmAJjJjHxcgbsR1awmzuUpgfZEwbhLh6faiQsuTPtsCPhtCQia3",
  "key32": "kRrmqtwdLKkeGzYP6yeSHsZ1GF2ys3T3FidcyEYguUyRjPsNMsewyM7wEkuQxWjwqX2tJVdp3uCwh5hyse34Juw",
  "key33": "62pvwoNwCJZf9vKyWnVW5cwz8utPgpBEWDey4fFLLWWZ5AvjiKqn9UypWvNS6ZZ8vvoRWJXp2uHiUFHW7d3WZudd",
  "key34": "43WqHYh3Qfg789jYBunZYD2voYD2WnEGdZHTdtj312ZHukspymR7jykYZeKfCezn2KGpPeWhU1e7hdJp8ABko78w",
  "key35": "DcAiJRLgCbkewnkgzb1bDTnWyRfE8Q5Eb1ZDGTg7kzAy2mBnu8vgexo6pG4vWmYp2cNn8i5d4DxJzDjnpB6GM7j",
  "key36": "2PzX7N9VzuG7Dp7y4L91BFVeMsNEKNUPXXGuoWtUWE9NvHe5pdA8sLBKCLM5L4YJ4aRy5VA8SUVDqACYGS2U7BK",
  "key37": "5mK9ssarsUh39cExwJBdnucVu79nf7B5GCarwzmNPCgfeqPuhVnYPyzvshLw5pSJDu5Qj1SCvXZt1oHsEdwrbx37"
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
