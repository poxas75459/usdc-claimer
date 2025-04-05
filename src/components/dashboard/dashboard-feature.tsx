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
    "3jcwkgqKkSkbEznCmzcHnXz69J57RCDhQa4mv4DXQQHDz7h261VC2VNLshgJtKqJLyoQD3JfiYtnKxm1iFeAjLFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48sp5ip8hd6rskLgjWwL5JRhkeFzTFhMYuwtKepmBYoi1K96mFnAt11M3rKtSf3EHgp33vB4yLFqhihkV2iTuuvG",
  "key1": "SaQA8ETnmzFsYFmcBeEjuRE8rTGgiTDrdydpW2atKEp3BShVbMECwLEpvpQntNUiFCpmQ1rwLhSAKiDAdG3wsoV",
  "key2": "3TVzMrWg2A7T5xqjN4JhNvbeLuu67YhW6pmNRqPYjmJYQJJEjvnn2VrQLJprUUCeuP3fpgaD1j88QPf8N64DCQDA",
  "key3": "4ZNgZVoiaU5RJrjaasWqFfzQgrLKcTiKmfB72m7DsvCFwo7jMnyywqrtVbzsuEpN7qXTBitnqwR5gFEDS24i3Zab",
  "key4": "ksDyyvtDDuDJqfyFUKzS6xyeXnfY5rdbWg29Ww3uXsCTm7cSHLziryepvzM6AGYRmrcYqLuHBM4j7XZe1zNDB5N",
  "key5": "3Wsd7ZgRaahkoVKouLT2wuhD2p56gA84Sd5PZfsiXCNXfFYyqyEiaqta5PeSj9njbonme1HrxTEpeckRJ2x4v8xh",
  "key6": "3RFcBMf9WQK9ZCYTtRMcrvV3hjdphSaW2kiKbspiE9Nv6h7hPvopr7nXgGL96tYp3tQ3662auWyWXJrgvNQHnW8M",
  "key7": "63nnzRgmG2q5VWSBubKcDAYmbhZiB6ud7yJio1U2kcucq7wD1NSXmX2CYrCCmU5tPxBHQ2EGZEb7SnewmvXtRdrg",
  "key8": "5SjVXBfVEnnFzWrR89TTPfEPJZvTVFemB8yaoTU6y8FWKriEB7QYVZWcP2rs1ZpL4X1wYnM1PtfGKrnoaKyNxsBk",
  "key9": "LfMsZAV3cHxDYzW99ucyBt6kFLwr3to9UYe3yCY8rxhTsfSW3RwE24iqiZ38Up7ddKFjXBgkwhaqrCUN4PDDeTz",
  "key10": "5wqWWUdeLEFq7M8RLVaXtbmT2t9YRHDuZCscQNWTcD5FHmM49dJDJ7DSn6F6FuWxusqVeSjLZQ3ekoKzekNBvMjb",
  "key11": "Vrwp8axSSGkUmgc6zz4p7rbHCmh1YMNyaysuF8Dp7muQLX387SewzBxDHiURzHFka5SG72nXpUWZbxB7dAGnXSo",
  "key12": "52DDdVWEgZ35YNofheKx6APXxSGSfQusmSRAp6aDtEUjhrH3JUU3Msen6MTUyyLzGT1ViLwE3vP9tys18A8V6MX8",
  "key13": "5Queu765a8dcV1GgQbryZgEq58MisWJyMwBsdbSPVeva34BaKbcfpqaT3eL9cBrkmXhaHpELDtZM5fpNJy7yyVa1",
  "key14": "4hi45ZB8LA9uhkPEGs6r3zg7T4YAPU3H77ezJ7b1J16tbQmabkTTcQJVMoPQe3j4JGfTzmiJeibW2ASF2xZxL9tk",
  "key15": "4eH4A5xKz3goNvsDysHmspWJCUyvMeRXiHH5gsuAyweK48Z2XeKUTPPuN4TnkkdNYbqY929APnsKzA5JBttihhte",
  "key16": "5rEPhxdVR3m2hWqgZXC6799kshGr1tkGae4k8XXCKEuUJKBnMc47poDZg2Qa1su5dZq3DA88wQutBej3K8yDKHRz",
  "key17": "4HH8mSXN4r32ahWnGCbSMAoivgnBcphkAjSYEn8EKDxULnZzUZHDZkMfUktVjqbybzTNr1yDiKax7LNGWGwUfccx",
  "key18": "5fwNSvjXMKdQscq2sJhsg8gZSeZAEWZdNBKou7ZSBQ8rpXp4kod1PWNw1Kzq8vrHZjCAyqD3qVAq69v8VQTzrYN6",
  "key19": "3wsZhe2EpJgX77hPkM3M5kPwTykai8jqVBhWxbh7DgQzb15TN1jjVmCQw9zyHiJWx5DxAx3QRzNiXiyxrAG2eX4c",
  "key20": "4AwGWUjuwCjeSnq1w73AHjXQSY1qBXKgVjmAL7t2rHD6H7XAnpvZcmTeK7moqgH1F2SThNc5rjtVNHZioN2FV3pM",
  "key21": "5zA2KvNdtEcR7wZajejmd7tHCzeTfcrfNCMkEvEUcL8F4n1TKUr3rAHHXqLeFd6HraDT7TWEJ4sCvqdFmjmMGtxQ",
  "key22": "2XBLra4cAdntEAaBVuw2nnnFGhPKnboca6FPhE6byVhBA7Sfm5GuBXi83fUT1UFHygCBrvgAM4KrBXBbHkzqCPJi",
  "key23": "5VgqpSdM5qBCCYoiXsBvWqRNMhYo25BvuSxDz3JUn7WE8ykcekLajJvPqVLMSYPWutz7Mapcu3DLsgxBwfZVnVfy",
  "key24": "ucMNpgK5ntR1ynNHwnXXW2z3viCc39nxSc5MoJap4oh8gs78A3dXkqrqYYcY4T5eaGHMhStAe7KkJrG3TMVmjYo",
  "key25": "3r3cYfrfgxJTa1Rz4ktEv2K8XuvK7ePPAJpXjrf7e4dvAPreVBqXVArzeJSjoGY938V1DkKA33vQBMcxKfZPMY5J",
  "key26": "4gvmQrcBenHZ3aXeqPEihwFLh2qpSMUCNFFf5C5tGdnfQBXfAhjYcCVLkf1Ry41bLKu8Hx5fMcuHnB4sKkKaKmSF"
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
