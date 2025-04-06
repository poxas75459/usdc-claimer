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
    "43xkgM7vQwpDBhcL4T235NT1UBwhL7Vi79XMFxv5amvXJUPZxVmv3JqAXxDZzTuqFoFJqUu9bnXZPifP8FfSx3Kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B251LoL21z3hCtEU1YMGGKJTxt261bVCDxDE1uu6zQYa8LDzjm2iLFtZsHcWYBrYCdVhf1cn2a1D1ksksNZzGbX",
  "key1": "2tfSc3gekr6DaVKHJTLsdpphatDrRqfakmzhexQYuejVn6QHERsN7pSEoBhbCCNH3aiRWVisaAi2dwiB2pSrnuL2",
  "key2": "4L6Gxpw3GLrZnVPfEqgziUyphxsPErm85NkfUMed4gW43iXGDkc1AhS2TU5fwx4WjnRVnGPPqy1LSwueXpkDGsKs",
  "key3": "67jdD9KSBnjqjboRjndDcD2FDW7JPZt6jfgRu5Cq1fnHvXbTs8xUzw6cViHeX5QwPj9VNM2siNxJCNNrQWpTiKZu",
  "key4": "5Jo2N9ou54WWv88n4Kh3fCJaD6aJwK9U1FZXLkcJWHG11WueABZ62ZkVnheoNNxxaaSK3vT3UMtTQ4q85Es5RHFF",
  "key5": "5YYJJXRxjkKdKYrXmHYU7sCV7R7VCAXjn25Vh8sURceQaw5HiBi7xomg2Zzt7W7nBqdNnQxTvLC7QM7weJeWjo4p",
  "key6": "GiPNLbuzahSGXwqPnSBB2wPmLpY4fMa3XAhct8XYLE8dD8UUtv5chhG38R7NhnmbNsiHw88FDSmLsWd1Bhg5GT2",
  "key7": "2U8snJTdpVmo1SNntvsBKFLGPVw7z82tPi2GVWCFggezxiqxemZfW3L2qQTNuovH7vNqXZQa19oub7xiLe3vHTyV",
  "key8": "5RWjvrKsTDgZx2ZvUiBt1TXjsNLGfkmHgZLkWgq8wGK4iyf6mkqv1ddAHeSCUx2wNH6D4EEdjrh3dz2PQC59KvCK",
  "key9": "2U2UsGMW8rdPnVSYiXc27nssFCjuy4uHdU9njEdg21rbk7w8Gvdc9vwemg4jXNiXtwbtPgV8SmzR3mdaM8TYH8sb",
  "key10": "DvQZMGMmLrVeyJFhiFuNbN1cDywwiBkj91ZavdnoacPu8nM3FpNEpnrdNyJxQvFMLHLDsusGiPvKvDwCW9HFxne",
  "key11": "W8RweoZYA39vMymiN2ejyFSG8GHqjteqhcf5L3etU7A2wCmahfD67dDZPKyDvTNyzZi4221uc9CRDJ27TfRLowS",
  "key12": "4m2a4RvW62mVRmqEq174q1DgWNWfQn1uWKBh2rnCAHrG9YWxx7FNowhW5fLM7MDJN4bqTNGXWPPwrVHLt1ir71X7",
  "key13": "wdcK8xuNPYk6ToJgQU5Kto6hCqGuLryqPaWRcKfAVGuBLbs91Xs9bzmW29xv2Apq2dgHRLVNRDXwppfeH3LCebA",
  "key14": "2L3Em3aduNJ19FeLDJJqNyhMQsF7WaL1Z3myZ51iBoxPgungFGhPCLaymBVEcowDZi55bWaoPL7jh2a1FZyj4VjP",
  "key15": "48fJhNgHSmBM5YnhpXvoX9HGMALCigznLn9zVijDPC4cRLg3nbHyDD2YHEmY1d2pfUo3vG93XkDQRgSGD1G8kUh",
  "key16": "2T9E3Fmv1Aveo1XG59pDBK4svTD76G9Abf1GPP6umtBEwAVitKxraFZ5HwFUi6gWggPWLyfE5uD6SGwMBoFY9n8J",
  "key17": "4oqduSts45d3oAVdzWyyCXwAFUfcv7hY1Up99WNDci5Lef8XPUR2HmDBcNTLrRJx4iLnRikCTakyswiT61GcX55V",
  "key18": "qZNiktkbm8WzKn6WenGqjcRLwppqqMYLyLH3rq7qZozY8Hipu2K57X2h9FgjLPXD6vcqVEPD832bd1XAxwrxXf5",
  "key19": "2HMsZoDLsyvR7rxcpTAtoqDstjnUQM1XsRd46ArEt49TkfqxfugLjVR6u9RdF3jMxanykFDQZupaWwxugKYYLDJq",
  "key20": "2rhScncTu2kwoJjzoWmW1qNoZYpQwAkiifYmsYed6SmG8tu5w7LGDvAtd2YDjejruBoJ7PSWcrFU1RQHWNjcnRWW",
  "key21": "5PsY46A7wggH4HRTZYSmSMFPCANvDZ13uq4MuTCuLfqPuC8H2KQwakbt4CmQJbLkVAXpKSMAULhuGasZBgv3nnsn",
  "key22": "2bBuVEMzu14xQyYoJdgC38TfR6VXUNrBPoEMa2EwJJCyhzy75wJCFmSEbTQn3cFbNyukLcEwNLUE6misywsZFrrc",
  "key23": "2MXGsGgotwxbsSTCWdYU38aTkAkTXr3PJErUjFzSyqzMaGKaAu88jcBVrbbH8CcwZ8duxwEcbFjoVvcmymjrteTi",
  "key24": "2N6Yx5h56yfPB6EUeJtcn7mjVGYJbCPR9T7K3bLVY6YztK8mbCVFzD9au5PDD4eWVth4CWwHgkkJDBtm8qGwcMU7",
  "key25": "T8WaHJDXwzfhx8KKbwkTTiUsmxHjckphp4MfSLPKDut29VfLs3WaFyAyDxjYFq3ghmjv7Z73J35Nif2v9nRrHFc",
  "key26": "2iwnT6C2HS3B23uRG1boSoLM3Sa42z1DDDT2TKHKL4ftwHoaM464iuduZSVt72HGx1AUq2woqUA1nFdLMJviD6Jv",
  "key27": "2ct6hEExc22cDxrthE1KZUWKEZhGWyLPFjY5XFsZ4JYZ8tCEWULDYkeEL4r3WDoXsngB5CKCkhFuK2fzVCP9ea39",
  "key28": "SGPgQFiGYS3yBPA3BpbJffV2GK7brRn2jsknztfttN8RB4AAFBFdojisuqpinSbqayo4D43RyhpJ3JU5tbNQxiP",
  "key29": "4fnM9LGYbgi1DKuYeGd725KYAG11JirGMJ2BghNLEKbqgzH7FujSYTxxVu3dEaJNdm4ohV9rF2m7YkDR5gVchT31",
  "key30": "65ggJdPcMPvKZ2hDkRCnZ2dzMsS9bSHnTno89qNrFxGxiwC3onowHTzph17AS5UgtnnV9ZToR5CPmH34Fb52tE8P",
  "key31": "2vx7yBBRjifZRNEWJrGkYYDTWB3TBUAofhwpjKFjctfBEVeZG3zagPtAo3YGHuAt38aG4bbSLGF6tSqUvBSa3ZCr"
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
