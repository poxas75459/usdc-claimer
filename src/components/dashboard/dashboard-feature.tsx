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
    "4VZpYYq7rMo3ZHEPXPT3gcUvcU5ZpGnnUVVYXJqCLwL4eFhjbm448wySX7LTw8PAD1gZmsQqPhTBYJmBYhjag8td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JAobcJzyQ2bp7Y74xSdDnAPLjGbPoZZnfmC2LZTubr2W9W5PnJVSwe9ka7gTAM6NS3s4jgSSGGY7TQk23ryMYLa",
  "key1": "3o1oUvGHWRdbGsG4ZxhdnzWqF1EU3ewMEie7TUYRKHMcQcedRApVGU2WbGUAyL8YwmiZXPYCSe1WeW1WvsNW15ar",
  "key2": "314CXshAtwR6LbtvPFa6TQTaqW6Zxr8rJHN4jrYvdwyZpiYWZh4VSVGnLeuWPLBTMeWfV5x6ZXz299HxMZ4ZHoaL",
  "key3": "wY7whz47bGkAPw9tEDKi8PSku9z93TCqQK3vYNProuLJJKMmQ8Ttj82wmuokLpxstFPYyz55t47cYJWV74m8q3J",
  "key4": "3HchBZw2ic3NsANcZh75Qm1viTFixyKQmC1M6UnT2yFx3DD3Qx5QeHraWDw38QWy38v16EPJzHuvTayLMCtXYAGH",
  "key5": "54nAkZbN3YQ6zfApEhzCFUqF8kZnDRzpf7QKXoadJHB9APihH3MqddW7qKnjJq2dvmrankPWa1memtHbwKaqyTtT",
  "key6": "ih1jkeGcT4XPByyz1graqkyTm9cHJfsoqzfkwvQTH2gM9hZNpxzRJvP1q8KToFJy6hayTTNskDXwmvaTs4fAjfo",
  "key7": "54gaHanWdFpikgm19V7nrs7TYeoeX6bymyV2Lz4ajn59hyY91UHm4JJbc4Ky2nsrif8agzoGC66P2spW4aNMWEXR",
  "key8": "c3xK5v745ukZbRkV3XYvKT4ptn5hj9aNMKuFFrSug3ZzhF9zitZhHzqa5CVtKYYB5JFypXG4ZLVykU43zf5nJmh",
  "key9": "3y1dc2vnnzqf29VYbEoPTbbcwCRFdNNxs1igLPDzuoxJC11LRssK9V1cHjMrDCpx9Jv9wxSG1wYtYozj9defV1q6",
  "key10": "26RsuHonGYzricivt558dVTa6sXzRwN3zFMYUWTw8LF9QF5Foq5CdDcvjbZMySfYJkru3WPCK5RzhkiiENQKYZvT",
  "key11": "V2HeKcik6YaPTNLnyTGoQNuF1sYSzq7LJYWw3ZrTNraZcxn233tx6yqtiSfswQhyhvCRSMnVSjnACoCM4YegVbR",
  "key12": "5pJ8owDGzG93g7qFzZn3YBunCyUhxcV57yZfJwk2K1NVBJuZWufkpesE1XYCc6CKXPRiAL1FaMqRjviPg8EUKEwk",
  "key13": "tno74NqkAMFndBwtoiBPFhFzshCG5dhKNA8BxhC4PNLgnHcs5cdReXiZGB11PqJX9vfDyohAVGQvXbCCyp4eG1c",
  "key14": "3gkTenmp5W3rM6C4fZpftbJorpTe2QwEarWbMWFkr3irBFfpwzE5XxVeQSvc88LxDifygYjsdgYsHaK6JhsQDgK8",
  "key15": "23Ax3MRT4Jawcqku6KKZKvCVxCgmCa8ZijqAttaV8nVM39xVbtdPQoH9pZgjcordy8qB7aMEH4MoZeV71H1zL13C",
  "key16": "42Nf6MGG9t7ULsgLkdvWPKShVgQ7AKj5rGsodtaPsjeKCwFr9PkHnytQ6Pqhs2eCcCh6PBXVBE8KV4rAzaoG3TLw",
  "key17": "ksYD7KrrMLeSwzb3Po6yWwitHhK679TiYUFkXiMaAdEWGA67dsWX3Mc62n59kGdghhLxuV7idzGFRDZ2J38UCff",
  "key18": "2C43PUspfJZ1xEncqkJkc75ijKGnQL1DpwuNJHUuDwFZPMeYEELC3Wp5QmdgipSq1YETZPPQz2BgfDooFVJC9BoR",
  "key19": "34GEFRRtiALVXQK2qym5saFDovYh9Gc14DiPxogVwXAaVy7aGWDHuJqH9o27fQDKbJv5KUhnDnpLpUN7or32NVwD",
  "key20": "A1sjgY65xcjLmMQu6NhsAbZB4tipSnwhRjKdcgmJEXjE5WWcz6MPLt6d3oHZgg8TtiPYmyZSYUsWQoMiqeyNV1o",
  "key21": "5WmpGj9diwtwuqMQsD7RScrGHWDzea9Kbgp6hqn4qdAae8beGcPAYqk35X3TCRFceMShU3oDhGvXj5VcgiqM6uk4",
  "key22": "4GTNQ52fuWqRx4W8rMPefzx84KV8XoaSa6EeCYzxdPbWE7BLY6WNDQFaZkWcaSh9c7Eqc8uG3uno51oK7gzN46A1",
  "key23": "4HMcHhB32oKDboh5U5AbhxxCagEzXExd1t9TdZ2DjJXsbs2GFY8VuRE57wN5zjXpR5wgGUGW9rGBG98SybtGkNSF",
  "key24": "4ZaX9T7AwAvYpqaArssxjnrEZNbdDne4sqpKu6vKGeykDEwwppZphWn58d39cwEcKorUtmr8kWTo6mPp7Yh9knVb",
  "key25": "2H8nX7K3zvpGVeVHhs79X4dZhqd42AgK4cQDYnhXcMxCK2UAGDgdDFaUJomoZjey53gDDUUBbP2p96iVa4pJcdLi",
  "key26": "4mAzAcXaLcpanLPDbLwVWGcwUuUVRQ224p8XY2mioqk7esTeLfwSs1ukFiA7556QuHjSGUHobTLZP5g65vduziLR",
  "key27": "4R62Tfs5MDRT1jVsqdm7SL4qSBAKFakshjAGhkEAzDQoe7DQvMfpYcpCg5gLPyEcYi8ayJuBr9L7C689AtirMC2N",
  "key28": "2Pbdt2EXd8XaYDBpoBCuLY4DhTR6sPjQ8Pb4gWFWPQ9uEh4g11UkkZR5zCdKSuDhP2udMewKWS6S98uUKm5CyGpd",
  "key29": "4A172QrGKRiRFNxMYbjoiy4BXSy48EcRpyG5DH1qASTycJ9nGvkqKoh2mAwGbWVgjFDxnS3bpwp9NaCf5bSv1R5K",
  "key30": "3GfSn26esEmsKJRaKcbnDYgqFRqPTdFukdBxfJEBJYMrWDqQVpFCgY5TtitHBfi2pcNqmRByGnzTAuiYVCGsTMDu",
  "key31": "tjC7u9R5A8EWZXLKMT3qi8XHQ2Y7HHQxmRknnpCSzCarWUYC1fs2xeoJ7YFwVgDVS7gocUxtkk4fufZThAffD18",
  "key32": "2P2S5GsRW8wbvyhiscf1yDgpygJwdr4kUap9yanKYNuuPwrQKP2dqtzw8gSehNQvXveHN3cXTQRrsvMcRCGoz9eS",
  "key33": "4WR6bC1nd1LVuC8oSeLruFAomcyi89HezeKn8aAY6wyiKmnig1ec7kFgGXDEL3zmPprmB4TvDtUm9y7bS7kxddE",
  "key34": "4Nt6pBXjhNAFRHsNA7TyTJvUZMFmFCFoDtvtk7txspMB32mqxW2seU3Ld2tRHyMm2HoE3pKYYyvjUKRcqtGB54rR",
  "key35": "5KXx4a5NbP68FnqLHaRuj5s7qY36258xPdfeVMuR2MfVjP2kyvTKADh9UNvFiMFL39kj5zS19jspo93GNJZBN8WY",
  "key36": "3PYxsSLRTjfxFmeYmGnDBYTkAQA6TRtb4hY5MLB69L2TmSmv7jT1xPh4vERQdsqMf6RGoQt3m5zB3ZdnwKWNUiTm",
  "key37": "4GEAvns7scxvh3qCtMq9qQY231SMhGnTUTHsea4hi4BwUREf4SGaryQGF4acmNYi9xvuZYfbsxRzmPFk3K8sLCRP",
  "key38": "2JL36Z4U2oKRQNSMGiA76wxJdhNeyX2gSiEwvzndwTdPjt9zWGZDJQYw3dShTmZMMYPYpmMnsyyrt3irnwk7gx8J",
  "key39": "xK2KFghTg2rTWLQth9rHD53dSoCZNKgftazyEtjS7ng9ErCDt1sz25YpaMdcrRzo1Yo2fEGGNiDcvpSeaesPpjM"
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
