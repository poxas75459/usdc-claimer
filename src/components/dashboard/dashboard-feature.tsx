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
    "25sjkN8CygzCPexhP1wt3WGmqUNrJFqHW3mh2nu3L5CKV9vNrGQv6dgQ1qBNkJukaNfG69Qj2SYJbiV7EiQX9uAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UdoXX8tyj3W6Wu46rNCihqZje8m9pqT12x9PjoJNkdLoKbEHjm4YTMFED45EtEpARezUw4ZCTvpw2XpnDMekPu6",
  "key1": "57scHcVruxKEwALK6C6JzN2H5e9ePhDzDDjH5kix8t5d44jrhpLNEM7Hq7Q8An99MW8GPWxKYcrFk4KH7h1zaE78",
  "key2": "2AX6ibcS7t67cThPisggwTJ66gYcEWNxaZ5X1JCJ5U5Yb6kLmCjyiqWcei29fkfxkfguLZ13uueMBgu9GfKDPDkZ",
  "key3": "5M5VX8urNp64suRx4PyaEChTRhLbXc4sV6azEe8EZUfBi4s5bDufe4DqAje1RtcKCPK1i5ERE5p8LfY7sUYe6BXy",
  "key4": "5LzrTwKEV1ZtFk5wWhyJz3JtmusyUhoCiRyszrVJp7fKGwAB6Jt5rGAWk38UhpMEyDBdphHUWSmtHL5uoNhD466b",
  "key5": "3eMzdxcZcLgmbyj6bGUAuk9vZ4X9oVqGvQcrE92TsmkUWXfxMC2adVvZS2qj21jgVjxGZy3oWXwra63z44AvGdb2",
  "key6": "PHkW6HQn9KSM6GsfotQ7SrDdLjHNpedLHiZ7gSJ42MLGPBgEfZRr5rHZkLAhSjh74djjD8eYJfdXYRGcRYipLVo",
  "key7": "5dL7kJkdL5WRoVJgnnPYis1tC2dHYqQBYBfMAaYhziA3t11J99qfkuxeP8D4iE8ck2bSaUEvjxbYx8N64ytpkdjL",
  "key8": "21wJJ5fWeppXV2gagZpi5TBVoZRHwcTx7fbvh2LLEkM1ZMxcYYBs778jqDPXhXJ7jAV8gRZgMNrWBQHTzKp5jjT2",
  "key9": "4uAQ12Yjb1euTtoeP7EVFio5SevECjQSnBPhypydAiZZEnzxp3MEUtEcXZ2XYCCfr747X8JLyWrGQMp7pWQhDLV8",
  "key10": "5PoQYniY7itannJr4RYbvjStt3uw1PRferahyWbzYoPX1RHMYY3tGC3dc7hdHMEVy9XREqJgQcqLrLsYyxww4a6v",
  "key11": "wUaTxgDoFUH8KKAmjzpHuzXvS9chVyc5GDkwgoPGdJwhzs9fkvhjQiRTzkUyUwdBPdHTc6auEf9Pc7yhnUWFkT1",
  "key12": "4KRik37ngNZ2GGFEwbzAWV7ufSwFEQrAVaLiAVadHfQWVHoN8cH1FjzJE5cL8h7i7BcVkruwzM8bFMtjM7Dw8f5J",
  "key13": "3Kfyh2divC6eysAUiy6uU87ugyMLELFToDoJCCBm5YR1j1EV5CygJHkvasZyGdwsUvGyGQt3zEN6hkCeCmk4SGGV",
  "key14": "26RLrZicJw2mowRM8HDseCKNsFNg9Fh9CtDQRgRMCTm5R4JQ5mjnhkFK6vTW47T3U5nuT97cmWaPtckajfTuwyQd",
  "key15": "zEwDHn3Gt2fpD5Q16p4WW8pXM1KJhD6ZvcBdkMZGPoHSrQhJSq2uFpZj4UtCST8xXVVTmaiJBvVX72gsweHiVwL",
  "key16": "4z2ZGaGS7DRrUsFRdyCddz8JNB9XynpFMvXQUGkbV9k5mktTtBWmLpmkEremYDX4dYRAvcZBkgd2qCycJD8E7Tk6",
  "key17": "2tURYLZn5Ntu7SUdzavU1jcQauSY4T5eLqcoUBmY8myVk5pU6jpvWujqDWL7gmqgf2f22UH3fVNDzTiLrY7DUY2b",
  "key18": "5cgPKaBG7eQoZmSFQznKTVV2EQkPATrRuRGK12JF45W4T52Nw4WaFk7CaNo7xHwhshNqiDo4KYHNuCaHEgGUzkdB",
  "key19": "5g5zgVcnLpijaHQBkdKV1LuXkVMw7QzsxTc7LZmXoek4phYzro9UGJ6jRxjDVKyLCM1JakZt58Nv2vds7ipnymPR",
  "key20": "3TX6r152wwGJ9teSL1S8iFk7p2kRJ52dboiobHrNtx3XtKXSbUZdZ8tEvZCHFWxa6dBGUNoLKhDi4iMFPrhSZwEQ",
  "key21": "2uAKKWVYvtenNNZyusQRQLdyF7pP9xpXvPqS6Xn6x4RQEBNB73diiKnV94eMdmFi979JqUCFESsqqtp1SE913Rqf",
  "key22": "qk8Cx4EeAafuGVQHSWQQWXqJVVwAbPeQmX9dUH1iH6HGJLjwWCvtCPBNHYhC1wpYrbicMDDYdMVz7QbktfyDtyb",
  "key23": "58YBXBCnjuY8HieN7BhNYgVMmnJrWmP72dHUateQg8b93g73bkwqP9xgY9Q1D7zD3wyxJvYcAJFs2URpgf5WRccX",
  "key24": "5fCz5vQ78xxzL7Fv1ETykcPL3GSDeygkKKkmdQh38ubJzvXvrqhaip8oMAcrHhNyPfo8nSjJgvua4FZCzmQM3uWt",
  "key25": "2EPEPLyYeA9Zj6o85UZDRGWiLwZwPJFKeeCPuV5zevscXxhFgFNP8wSHcYBL2iXjdfu6Jiuxr1irj4tAsNUBCWac",
  "key26": "62c6teecYzgdjALoaHukg6oiFeHbYMZpn1MRLaYLb48LEdDy4a5EMPDZrpHARySgVzj9jU4Cv5LDLA3yBJQQMXit",
  "key27": "82UNb7zGJUYJjEF2iG8fnsmu2HMFe5tKHeR8mGZ7TMmnsfVn9XreR6BUHmANCZRdVdTxeJiWjzRV3KEpfnCMay9",
  "key28": "383weSKmbTaFwdPMQ3ZT4NPujaLRngNmUFnDgNcXTyGS99UX61VLThk7S4ySnz8jQDiawXCiL7fRwa1KhNBftuGV",
  "key29": "2us1vcXgNZPvrd6vbUsvV8KXx8hf3LCayGwfkEXzpsEoNMwAHyRx8ap9NHRtmQ9URCMnvwRyeEa75fs41JYVQ3m6",
  "key30": "TtAAE6XwmgBWYJGNK6raqqbKhJVP6PL1sDXinjiRENHnuaxRdhpxWdXtG4J1oxUS6t2P5wdfAXNq9vWxYCG1eY3",
  "key31": "2vUvhJh3sByQHkyfwVaqoKBUGq9cRnWXQhXDnYJf8BuxsBWuVargqNmwnpmH29Np8upG17UnwDNoU8pyx5DAD8p5",
  "key32": "3igBzBuJagcz5EGcQ9yjpEoAY8yhAgkyrSMTmHfRkcWU6Jn7LUAqfXuGzm2bcFv2JLuEN1aEEyjBgFNdhrnquSYP",
  "key33": "3e5gB5kmhWSvdGFvoaxKsbsZkhFxphc6t3ctwRxQzQzFYPsPc3FLQG5v72pVXUTtaYzoCCkFXXN7q6C8xvf8s9XW",
  "key34": "TAZjt7SVJ3EBtazL3qoEXem5rrTjr2hratBNoEg14n7SB5LhJnjTU1NrDpjZ9QE1fzuaMzK8uU8DAFyakepGqZi",
  "key35": "fSyVG6iJ6c6WAkQNMno6iZ8gv3y4RDgDqBudkQNF8fbWV7pn8q5Y5uWpJeUYLp2wmVGVRiamLYea6L5sjjcSpo2",
  "key36": "3mrQCP5nDqgB64TFzd5hCyUeswb7hUGUzx4gyhq3A1s6pi1cLeTq4iA5WQHk6foL7zb1tPJMWW4ArTaNbpbYk9VC",
  "key37": "65P9VRvWCEMzzLiRPLfyXU6wudrd652JfmjQS7Uesrn4ivHnJj6uygzm21uNXoWnbKz29KFq1xMLfe8dKFZUQeau",
  "key38": "Zzq41uWv489f3qmz7q35Q2GXBGtNfhgvE1GT1mqN27VNQbyxM6xN1jo72Sgft1sXDZKPKRZ3T261WmurtJW4q6V",
  "key39": "YbeAfKG7kK4nyacLTsEZYVxQ1uRzQHNsC3PjrpAPhzUr1ciriKGsAVbrakAMk13gCq5eBPpPkCDQP8a28a5i4xD",
  "key40": "4Ek9ivk7RMmtUqWtPQp1a9eMM8YWwGK4WzFf2z1GPhfFSxjWfoWGXTF2rM9kZXqoGjpQJWreNCupPtumr9mmNeVK"
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
