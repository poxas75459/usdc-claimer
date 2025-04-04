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
    "gq8v1CwWAzYYxMt4jCvj4czhgZKTf5ABqT5QCF9jr1bv1oAiJSTMDKCaaFQ31FCc95JLi5Sx1tpXwA4jWWNW1rX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M3ig7tWmGyaPC3z9sQHB1ZSSEQhLbE75AdesAPdpbgJkGDyjGdhp59TjcTsjW48WF1PUFU9PBK1t3MkBLz7L5Eh",
  "key1": "2MHvk24AAQGfFBKmp21aLP4guXCaZmLVcoDiWHbUPE2fty8skGSJDiQuArsCRPuWfMVdE8YVRXi7VRQH9yDCyEE8",
  "key2": "3Vtttj2vQNsewwr9Gev5Jfb1MFwT5oV7ohV3tVgxQnkt6to321J1VuLb84XviY7ESpYQUHXqNteUPhQ2HVWbdwzz",
  "key3": "4SLCtKoW5Mrwu1Ak1bJaTjhbUN1T9RikPDiNbPDi9rrqzY7GgwoNdx5Ysu11DVses85AaCiPUv5rFiNoFXvUo94y",
  "key4": "2w5BWDHC4kCiBFM82LvETavKjLgcXeWtGHFPAwgEgehZS1CSWUaSEpLGgc834ryhwQZN5xUZXwkWmAf2J8fPXQ6",
  "key5": "NAsWnq79UMZkmqarNQVYAZjVp9KjPdZaUM9Ebm43TiCwwbosCNjbrNQfhvvYV9hcWVqg57r8Hxz46cHeHaJAqL5",
  "key6": "5Zf6LVasRnYFUkvmFQJCR4tXCqrWAkCyPN7zR599mXWnu2caci1voHaSwKbBSMYX9U8hrNJnALtkjDHXYzbYcVuk",
  "key7": "2mZvbYnaJHx1PRLRV7qhE1D3SAymfrEQfdzeUmz2RYQSYnKCAq3PHex5ZYcaLKiCs9HtecHusDYvDbBdXgP4tU8u",
  "key8": "5JRMGzGPPc9SvZt6gujVX76TSAEzbS5nvfWNH83jSdb1K3fHs7mRkvJiLNSdk14yTR2LxPbnvdmsYwQve9uTghFo",
  "key9": "3vxa8vosY9UbKK8s9n9VRGfowtwrMzWjpfFBM32PoWLFc8qKUhqmiFBm2t9sTc11Z6dBcom2sqgUqQyGX2B2f2vA",
  "key10": "22zXY5mPCP6gZW1EUY5pSYXDxg6ZP1KGQp1aiphTzzgnEJSsqSEcbKyeBHoV85rYCn7CVia4zcGJcH9sDRpSgNFd",
  "key11": "2x8uhySmFVfH36ZwMz3fP3kxyaipM62AW8YYmkKkiMqQYS64veh4GU3FVADTwTtLVriBrycvFgXV4RrSgbNUFxp6",
  "key12": "2EQmFHBErWK48UbeNA4MsnwDp9QCPM1oA7hP76SbhqKUNDaqfbd26yJNqaoVVvX24zPuiNVDmTBjvagJoPg5NTBY",
  "key13": "4yxT1neiYK6AAJsW8NKFscbGjGBBhPMDmjozhwqRsVTVoZGwrLB6xQymXrbfYUqYdELEhBivi5ggmqXZ2ynGQgdi",
  "key14": "LmRWmRgfmfgRDwm4e28Hu7KbZuCmDm3DYTtyckbtH7v1gF8xKCePGuzSZweuFUL327Pn5qoWK6EtVwXbbkue5V6",
  "key15": "2zumM6x75wxvZyvKYb59X1WT4xrgsaQu3VLTpfjGakgDb2hZNo6kQ77WW1k45Ni77uXxDpYESDTHkLB1TdQmbzYp",
  "key16": "5B45EXKpp9D5FxsQMBSHpv7DqZ72KUEtaq17a5SUUQCwFoxgUxLQRXfEk3rYzriHyUJpD8fdobYfcthoMR88tQPS",
  "key17": "5sZ5d1r716Rra94RmV1M1Ev6SnTFoVYLSn6wvLbh7V1xrkuqWjvERFogQpFRaNKPfvxmPJnpG673v3n5KkEWRWhU",
  "key18": "2es98nsTSjREUNscrYEZzYdgn8XZt9nLq1ti8QE7RDiTAkkmaWYAd7QMy9JuKFyZBvfrd7M1WaEKE9q34eQNEKLK",
  "key19": "gkUBXvc4qSzgkdEJWZ2Uk57eWB6ZJgm3BP7Dkg7L1nL8HuRpkLsW9B5AsZ9WhYV7LX4GT5j8Gu6dNGXUMn3GPiD",
  "key20": "4ABEPYfmb9ANwiEqjkhHdq5jHeFBsh5xTBBW2HmbFh7irr5RSECCtixcTEsTfcipL4Rh69tcNP8goJ8sRevwSmQB",
  "key21": "5d64TdmJbfzBhV8QUDBriiMcYChDcCA7JUVMa6ifaWtYxgBCGPzT196B1EWRjnHnddt9fxjZ2u6oLJuZ5SBMs6tX",
  "key22": "26V4qhkhqvYiQgN74sjfp1nLxv6QcWS241dhYSVAyYm4RjB6vyqxETuUCoGYsJEapz1tnxF2W5KbN38reAadYPrc",
  "key23": "SSKi5nJQnRUHmxBq7oBtLp33HKcXHdGabFyE6Jsn6CupxScXLoNHfuj3uGGAhBw5Yx6MNjKmjQNCw9LpeP1Jb3J",
  "key24": "3F1BaRyCSAj24fxZT4WM2fpaz77na74WzmghnZh2J7d6Ms4XnDEmpk9ws9sHMRZCMniKchCCWMoCqjGrMVMUUJCP",
  "key25": "4xBL7zHBP5G333ASue4aaQAvRp5sXyCQ6agvXVu6SuLtyt239at5YjcAnrRMHu2iyrjhmVzGHckdiBxQGxTusfYg",
  "key26": "5coUG2zT7nwerDWcKYNwAbdfxhvRfSuzdPFp28Ez5MGwMqX4UqcpyDPy9x3jaJft59vPai7bPaxKwGiJ1ge6yzVa",
  "key27": "5uNzc23nZNyab475cfwtHvgMRnj7aEWMqNJ7wADp7xgZPijdW1AmbyQDffc96ENsosKFQYbWzegWDKFDZX5YF32A"
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
