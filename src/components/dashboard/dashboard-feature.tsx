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
    "2Csi2UaMZoH3nEG14Z4mVyoExEEcUbe5Mm3P1LAGKqB1PmhSrGYwUJt5nfX596cH3bUAC9wuUQnAfpi3DWyV2kED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zk27gBuxb7a9f1JUHqKThBNzXhptULVSnnUeCKWWhsjH1Zj5UVA9rWRQLp2nwJwhdgFHdu1mFsp4ie9xCQcWPdw",
  "key1": "4HVfsLYB2RJKbSBKpistgcsckVh6BGitkk1aTBzXvXNdA17GFx6otdJYTb7gYtwT1DmLCxyCSFBiUYmsi8EtJk8y",
  "key2": "6XNiz3dWxmaBUAuRjsr2jp8ydmmqwUxU8Lq56ruk92raJFNBLzgmL1fiZirAVEr63rUxDrXEGN7EHaiLxBnAJbj",
  "key3": "2xCJcgLzLKEYgDTY5rLjVNFaKFucCHJ8qmKXA2ZYBeqedu4LB6ZBEfJERTardgZEy6z5Lwbz9Fn53QzKGVDbPvDd",
  "key4": "4g4boCUjiR3GU5HXPVrxu99m9GfQ9PRDnjC6LoNrtaJyViEFxPfVEuJLJpCojiDQwRpSPcTVbC8TijNxHrTDYKYW",
  "key5": "4zb6jReNG51CxrbzYipnQKBxCH6NPkjkh5CwzyPks1aXvcR6HJQJNKXbSgkJHXwaMq99ZuyzSzV2xuELViWrY947",
  "key6": "2t16ZExokRoP9xGE9FsmNePSNQUhsooFsaKfBwmSuKELxB4jZxnBjTM9gDxTnNyB7Lvq96URecGfzAo4dRcyUHPC",
  "key7": "2ndBaWkNpewUrjSCib2gnPiX11YY16BRhx9QJLZsPrD3CxGgZTdP2H3YrtKCGMbpnPmkKJ6Hz26Ec2uriW8EH6oQ",
  "key8": "23Mp6xwe8WthRZLY2fvZvRgHBeLwdGPu6zDfJCFDK2onHcJRpE8d2yRZUcKqsxhte6pEvLDBFkcwLWFH35dGUb4G",
  "key9": "2S4nuikb7EUJL3P8U5dCfeZXN7X9u5V2Cy1W4AytyGLvtjnJQ9tpWfQSgGXM3aAicuxDZxYCW5xDJ44hs7Hh516j",
  "key10": "3NvQ65VumYVMRFYFZQnGZApHJAJx2XHKdMzAXTVGtvgWriBzuPphP4Rac1bMdKnrqdH29DuVdzwKmAejqeG8CT1h",
  "key11": "3LfApAKFGHRrS2uRZj9heTVbrp5Cxx1mHzc3S8TvxLDCSQSq9h1wuap8cMYekn6bkX2nn5BezRVUbLAtZsMJws7P",
  "key12": "AGUiZ8Eq4kE79ScSk7LYCqPVXLtP2WDfavk3tvqjTPPCx3FFmy6eDDnirqNMjvw9AqaRs4KY1nFtPNenyTrmf3D",
  "key13": "56oVMjJfm1dDi3LY62xaNYqfU5xzhx29pNYXLRWVSR6oCnGVVzzAPk2texyBb9cZ6i6s2afR6rDALU2jmJLU1Agz",
  "key14": "3mEWtL8cns6eMUU1zAmTV8ZucjH7Hri8WekNuDw37YaBt1CDaKQN6s68TpcmYqrTfweS1ivitrxx9BpNuB5brFaZ",
  "key15": "VVxkhKXFEMyFxwmJFHcqMeHaY8kBBBKuSKKg8Xx911aiKnnEKUWWwHtHVxUudPv3mFvwRHN8RSuDwVfUeTVu2js",
  "key16": "22EtUCLb2Bw99iHaX3JFxo72hNWuesohsProxTDBjVydeN3GMFQnBDRapGy9ThFoBXiiraeoaZjTCtUvorYi3hFN",
  "key17": "3C5mscCkjMnrewf57M1wZvnhk4GVFb1e1Dua1F7UdFAM9h3qfDvAeV9tLzyxFpa4txWXLrgUDpRfCD22FxfAbPrW",
  "key18": "38FHBeiPdQnJ6Sneqm9ksAL4ie78kGKTN6SzXoxqC3yZAgoFvRun794eXnVsmeh4b7F6utT8tUk4dhqYmcQbuv6g",
  "key19": "4LBQ5H2eyspcfLCNTnkgiN5tcHgnrxkvTQSEuBVpi7pvuNSB7KEFNEHAXSJwaaV65w6nZjTK7cThgDNKRirYcZ9o",
  "key20": "XCqindRQ2SLAQyQkSC2ScB5AxyXU77mXNtyW88WhfVJH4kfrLroC3R2RhtEAyWUTHQN8WjfEqrgSNJF9KcKpcvx",
  "key21": "2KTCszp1Vv28364SsNJv2zd6WJ8eVs3TaT2kznXTxdMfWjNspMrGFKarc4cjUPT7ogGu13RWp7AfobXTJuxrMtVA",
  "key22": "3xckqwMBQVh1zspLyf4Gh93Nh6b6WskGBfrmnF41DT6nNHT2w21icDMgmVeVs3doxPtRGumjwY5GwXnT3g8y8nib",
  "key23": "R4vVLMGK9MniHAhnyF2YZMMb2RePkVaPrUMnAB1voE3rWQ7hfmvoypAyYAcvGMCfg4CxTLgs9DedoSnL9VZRzKj",
  "key24": "14hoWgFifr7mgraFw4ebcLxGpNkKydWVTzeqpTzVq9Z8Pmx33djmq2RcoP7i9refKyGPJq5DFh2AjEp5B9QeNus",
  "key25": "26keWfsJTr6HP5YpsFbep3a1y346te3hfGK2Kc9SmiLhYs6nTZyKhgDY5CKfiLRr9yZD3r9QgdT5rW2NDMg5mxc2",
  "key26": "5oQAEGHWwP1QGcvEBjMnKJ8sC5Dy5KVcXw9cjLAgDEKHBZ2snX65kLMrxuDcwAHZVApnDNGuday6J7dc4sjJpgRE",
  "key27": "5kDKfgE6WJ1FEirFESCw1ESebZ1uYNAi7DVNvHahG1j863P9CAriNc78HJQUwjPRmtpcqnY2c3G7C6gJvXat7PAf",
  "key28": "3Hdt8fJ6p91vxy8pZJrNBMpC7yVURpYigLgUmkqu9Tb2j6yYvByg32wRkgedAGSzhdycFoqLqm3HphWQx8DzcBVy",
  "key29": "3ja3pkM1NjzgmaJhSchWuJ1EdSEKUBReq3s2xnLsgBYB9yBExY12b6QoP2yXm9XdVi4DQTXSfUA9Dj2xKA1sR6Hq",
  "key30": "4rr5TGVe36gqnCZvELwM843jPxaYCDd89eXQdz1bR22D9kArwiVbGLYEz8KpsSfWu1b5qz1zdpRgA3SKSVxGFAbP",
  "key31": "2pokq2b4X2BGSp5DgX9DWCUppVtfi9m8gVttVVV1Xb5FEZUFGSSDF4a2Nr5Hwg7SkW7uZXA6eFLA2KMXTxzm35tM",
  "key32": "WMMeDp2uLqUWh34bY2NYW1sJbqfGgjpjufXmbbDjvHEzr7amzuFjU1DucZRQsFyDVDiGocKWV2ZNGRVw6ZyFJW2",
  "key33": "3kYEZmkMp1eqQi69Jgj4XK9vYfJryaWbBAn667sQntHyr58Dy6jsCvRjq82CTbDxhWjKa3CKwB39Ub83NZMVA7uW",
  "key34": "4sckg8AudtgdvvXyHzUky4iKvZFQ6jiFU5SFiknp1bvYL9xVSsSFwg46BciVF7JV8mDUdVyBUPiXoGNKkkTpQEh8",
  "key35": "VDWDK6GD16JufKJudbb6d6PvihcYuZoVw5WLJXxfaWyXzLV6Ao7uANnBxadLWTtgGKD4LbKKCNf6kNkikpiQjLY",
  "key36": "4PK7nbZMwoScx5f6u5N7J78Tp1SBTZMAcP2dPNxYj1ntUkWFYn6V9xtHb1c5KinLUEwd9tgddUSaVZPyDcmpr2Sq",
  "key37": "5gmUo9oD2fDzNB5Sq4fDzr2ufY6ShYQG7ycQ6mAHHkn1V5gqHgufEsfbPnPuGQkiPSNh2zwHDgtWnvyts9k4NHJU",
  "key38": "2dwW3mk3BVkmWvFUg4xXuPWTFFNcGvvh5tc6aiMgBVF9hzdpUUuYSqyw5uq8YnBtoVg6ZrB1eEbP24hEssMtEHGM",
  "key39": "3SAftrYHseaSsnigSWBoZJDCSWU23EDrfoEyhzcMCuhH6os8MBYvNZMDntYjopPLJZYy45yMqxc6NkFqXcE4tioR",
  "key40": "4UHiK31TfzDgStijFB1HXqMf2Qj1AfdLBrBrxGJDvMjrAPfdLMySZ7iVgCedLor2Tpw1mpAjEJQPF6pgPx6HWx7w",
  "key41": "3vhQX9PRr9GeVXNpTeQByk7m3sBi7MiTH4NBq22ymATYvyB73C7eWDCpMXGJ73rq5VBD4zgCdUiGjaN18souC8kq",
  "key42": "2mEdhtyrTmD4irhNXgPpxmoifntoNz2vNDWu7avLYQ66N2nB4bh5HZXqJGQnLmuQgxy83mzTVT4P6Eto1fXF4eyv"
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
