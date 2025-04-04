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
    "B3BJQLeCnjGXBJspZJN6UVA9Hky5FxntDzBUdYyBPp3U144TirUubXCFfG7cE8Top6ydCa48q2rUV2zK1tLqC4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52qnX6h38Xmm5qmmN9LaWgGg57s4AiydF2qACVSkFwtxfJcwSVjJiDCEzGiyQsJadLT9pgFy6Q7PeKD3rYgZTZSN",
  "key1": "4MZ8vzECHCv14SWnHBRYkUZuxJWHFimAze6hcxB5NyLkrpTSxRrXKm13Mxx3CgZnLLS6N68MrxCPMCgF2u7Fo56E",
  "key2": "26no8dBCu8QpWuwDcVxThUH5PwKRndNYRbZiAnnTjhdaEWAfiK8mrTK4VCYBSfAh7bNEJEriTcHJytDcU4ZW9Hsa",
  "key3": "9GTFrAJax5SKt9RWmU8nn4QtsECeNrQz6i9wVRAdg4vT5pyZjSVXEZn1HYtCftAt2dnhPrF9kB34QW8oJEfApBp",
  "key4": "1j3zVNh2W3jac3C56XDwvYBU43tTQUq96FdyeUtTZxWNx2s9HpCoXkrimc2Xvmfo5VH8R8NivYjZ2TfW1efLgYo",
  "key5": "hASDMcEkeNGuMXSB27xbvrbMyCWDJ9p2dpv5Qxmo7mKfCuDrtxevGC3CdseUfftAW4drCjQdGuvDW7dzQR7dGBC",
  "key6": "4cNMRLeJzfzaL2MmY6sez7NKLaK5R27CHfXzGJ61vHZhoCc9egLMtgkBYiVfvZaT7E38ibjS4B4G4wDdwiAsxroK",
  "key7": "qT1XtuQxLnA22sn2A7oFPV8baHPt2vXaTi3NERihQyhdi9SvrmarmN3ZWrZ8xCERpSRFbdrkfT67NtuY3Yot5fV",
  "key8": "29AGYQJJcRMsZTTUcCeNjWyqsHJAGeb9ECjsScHwWR5DYPTZzTShBqaexNfTacH643mpZiHThj24RoNynn95nZMD",
  "key9": "4Fdx8q2LBrsdiWR6FyEz12jEpVJ6GJ7DsMwAixkhNsgZq3wxmXQivcE1LYpyKS3qhhPm6Tf54iHmjR3PVKD3FEvz",
  "key10": "4TEfmpy5VR2fG9vjEiiXbAmFQJyhd57RWFsy1uiXwFjjhqNA6BAATD3cFD2g3sFvTryW8JZGPMpd6vX1Ww1Q7mHW",
  "key11": "58gMrUgNf5TEqotyvt33v5pGkB33WyBTk1JuFoSbvvVPP81BKFtPr9qiT4AvowtuFEesM4Jqg4gbxQFawACYzuzz",
  "key12": "tYH3ZypGAZ6Sh7i5kXp2e93xsAPJc2uAWVGgHAEUDPD3ZNmaX7DnT1b8zhF3WYDnwRrbahBiJzLnt99ajgwQxr9",
  "key13": "c9D4qZpgpKuaNozPjaNamVtCBAfvtBEdLMgFshsMZkRM4SCvU81hKfrbdMHF4SMbiPJjHYFd4QFVLjciQTqqDaZ",
  "key14": "3ywTDgVzogDtqLsootwBThqMFD1GhtEBPzYwFzHtsY7PsLgN74VvcQ68285JW3hJ9wi73qvM5kdy4hNeprjeSwur",
  "key15": "gayHPxqsYpd6CGfjHqCXdBZ5DyrRRMTBDYTD9mCYYU8enYaevajUaVbHuAVYnVHphW157gASSbATJdnoGgVUo8y",
  "key16": "5fvBXmRhn1WjaH3rx7oprVXPKKPBDKp2Ay27s2KSdXkcECg7P3kvqK5Y9cVMZgHjukHzk7L2ecWdmG4GANGEjg1C",
  "key17": "dRE6wKCknXpEz12YfLhNyhnRKoVLshkC9TSTxwAcWDd9RJGyudk3svWvZyAP1x1uEBXeSScu4k9TtDXBhPRiync",
  "key18": "2tfNCvLSvR8SDuCdxqRWV61sv6TXrQiTcS8Y9esknBeUmkbyfdrtKdm8ega5Cuq335ckjGx6EKdkwfZG96tYawUT",
  "key19": "4PT9kKBphMycF5ZC63igPVsB7jhNQ9FCTTrcK8jxzWiYssdjY7sU6wt16z1V8FrBH76zL7LyENrEKXGAoefqNXyS",
  "key20": "5hJggeEPKJgux5okhrbdurezrzjNuZ69hPqQPywTWTmeMooPhpRhsvVCzTkiTDzm1wwtexhAKopuQnucTPtqSRLT",
  "key21": "zYgCsZSsBroUAzEMbK7rgxaKZVJJrDoSfkVwsHEB5qW5TG22rRbhns8nMJGEG9g6DWatzdnBFrusbTstZjC7i4B",
  "key22": "37ia4dXzV9J3ab9D1W7nq4KWqEz4AoV6JXGpgZaBMRfNfHMkZBqMXv7qyBGS8zBSccmsZP7k6aNdhWucnL3vKDky",
  "key23": "2udXN7fhHVhiBfbeF7LcHS3A1CL4JfmYb24aLdNBchiPAtXN5nvSg2MshtHwTnuKxwhBdZtqz5oxo52BC8xr6yLR",
  "key24": "362w4MbZ8ZSgvhWHdpu5KKGikrqyUoB7eZXn7zYXdMni728Qi3H2CMVYGLX8Vqt3kiwBHCmC5DQ7DsABd6NBqYdh",
  "key25": "23NK74BGnm4rs96aVcYbhDgNXdyfJe6rDZbtB3Nc9CrqU6kEmidaRPeE1BTxKZ7JUnQV8ZFEsyxYnEWC4vxDuU1n"
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
