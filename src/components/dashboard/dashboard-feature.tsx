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
    "4mtoo76Wxr5uhMTKAvuhZyiFHwEqCFfguwQFb82WhoHsK8AhCPXuMEmcksQ1JSviursUCcXAL5CmjxBTcdjXYzUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NHYDVmZX8XtsxfEF5ehktz6rBczRJ6vRiqA9zArLhLD6xud24ytujKJXkBuHQ88y7ZFUN8oCriEfXfkKYrdvfuA",
  "key1": "R2aYUPwHskkEt5HDPVYJm4NzYEyoUhmmnR9kfYLJJDDZ78JCkp28B4ZhHPL6nFQg1m6HVJ2NJtmAuxsj9WTwfwJ",
  "key2": "5gMrzJuuttSjMEUVFLNEirBjQx6ecLZ1RbeEjY96LLewSqcmyTFPUvgtCkdMvyw9jpMQcvSdHJCf2ET6BznpCBYN",
  "key3": "5gsfrsP1zQgKTh1P9PKhUZTP1VqKUpVsHpnjM1oYuXJDNn1f7nf3QH1c6XAEegnpzb5waXyvLbdfmXVHxwXubScL",
  "key4": "4Q6MA2Be9dKZS8uFhkhAoW5XNfEV6CPjqR5YEmwxnns9BoTVxmjEzTCGFuciF9s7MgPgv2ev54ARpvrjiJy7ssrB",
  "key5": "5w2GTBaXUqe44fydRDn6tRsuXBY7jM5niAtHtHragUChwa6cwF4EBWHuqeR8pF6SPG17YVaAqXAdKuBDTKTyCVLb",
  "key6": "4Rdp77LaLTDJLmQ5rHvPmyhccLGkHzkWjsy6No2SNB2RzqkNBe2jrWxGztpijMnizJzJs3y9guGg2WArC3LgS9xn",
  "key7": "2kFvyNEc74ZRK3nv49ztgmb937oY6xJUvU7MhVrsVNoLnifxMHtFWYj7sygFCVe3WufMUNCQmSifaSV2z1RdUuCZ",
  "key8": "4LKA7siyfXMtGSsL8qFWQ1vWqcaboUQuCo6dJksGgna2Y5wWE3zT58H1XqaqmxHLn8WiYjps9KP6Vj53sGiz1MG7",
  "key9": "4FRMwcrZx4CmxUzp63L8mtVmeL3U4S67mpAvh4LqeZhSsLfeEiCPZJ2o2HmBUfFF8XtT6u3cjCro4UmPM7muvdrK",
  "key10": "4ULUFNx62HYCkYGudRUioAjKAvJ8E22W2VU9RK3bPwYSXnATWWf9FEhW5ofXHCraopzpzXTEsEe4awhurbhodPkz",
  "key11": "25sgnBwLqLyrpKULb5CHt6jJcsu6kvc9eiXP1BeQfEStJwHPACGyWACRa5zRWne2QLnPf8arAt5gsgypKANpf6Yc",
  "key12": "3Co2Crag3Uw59r5hSzaCZv8StLgJdUwbvdydu6ywVKCF1GhXxvaS9j1Ub6myHirK38N7UC7Y5C4x7123MkanxqwX",
  "key13": "2J7f1GNSJSwfp6sJUzkGj61zaXzA5t2sQDEAeQyt4nS887pdBHrAzyxt5h72juq1Kw4bngHr2iJMaDSxrJaT39xg",
  "key14": "54G8ZtJXQPPRw8TQPW8iU1KLJVLP9tGbwBb4zGEaRBCC6oj2FAYfrnUsGSkD3WwwgHaLmzcw1WfszTMY9guJ1eNa",
  "key15": "nZJnu4BbwfRXBdv2g46K1Ess45cE5d4GsjDnXDxcPnCMme5SCuJe2GTajzkzuQ3MXnPsTzLzYv4gv4CMxEpWLHz",
  "key16": "5SfwfKeVvdLBgFKcGEgjTRN5c4KF5GuLPdqJBMcYrNFrRZP83s67sTtwPfjEh6RkcWzYUenFaPu6a8peJqu82GUh",
  "key17": "2KuCHdcgtiEEMHxLr3YjyPMB9YNkuQqsLvmwQoPDUctmVVRwshvU5ij5sVLaQkfYxD6h2QhRPdR6Qfpnq6GiTPq7",
  "key18": "HmDGgRwqyEzgP2HfMLvopdnQgR6Zmm53s4G72Qj8jqpHSViroKQrvkVaFTxdkrQh2bPZFL7Z6WtmQH3dqr7iQnm",
  "key19": "27qmg6WeJ7go2Psw19XQu9HxtNLREHL2Nzqr8KJj4K3poH8B7V8gJ51ddYQVXoX3wC2N7UWyZJhbbyGM5mPxSGiT",
  "key20": "5kZmV2vKLs1JKqfhjTosPxQp5w1PfGz26b2yyvRgMB8fPMC5Yz8XNGm8FMTCUrWPTwKmK63EKVcXfBdMwqtiWVzt",
  "key21": "4BZ1jqxN7dpYxS2PXXwEhWpEcJfKGWtbk1N5Nk36oNxXP8HbumcZ3WZkb15UGgZirdY6sBvwXux7giuhKteJsuLR",
  "key22": "5sktvSP3GixsiaXeL6hiTmA792ai6jmXc2AaZyMFK57NUprAnLCZxgion2nbcFqgV136TrYidjSDA2cUPEVhCmSe",
  "key23": "5oJXW11bBmrgYXjCEpCx2hMMNdivAhEUH3ykhfKTAdkE5hGpREEh5swf9aJDmcCB4NGLQq4KDbG8Ui19GPDMjrbp",
  "key24": "3t2vaeSxn5f5K8jg14ub9e2tCQhmaeL1zrJHJMvfQcaMhqS5VYUfm889HcMpeyrkftubPac44poSBrMVrp9pZdPg",
  "key25": "5qiZxezrLc4nVDeL72BBrhoCrXzqzLWxkYSqZLLGFgnQj86EFpVubApdXZF1jKjd1WgmJku86UzyWTKv427Y7YYv"
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
