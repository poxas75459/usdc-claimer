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
    "AT369ZSBh2sXVGNxgwoy56X35w5MbhiZcsmRXcfmSBTWJVg3wAbPaTCiEseKNb2CtCG3gduiYMk5yNgsu3cgz44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8bDuFCKVvmDBN6vNy4MXwXAcn6GvqHDzYW1imQYS45oM2ABy94xWxNNjMPqSnK1zksGGXBN15p25kn78LY45Wc7",
  "key1": "338Kp8jVjGD7yDz4DjSLBfzP4PfMX3AJd2CiMHeVpBn3st3fx2ntpQPsGVKZS5bikahTLQwsjvjNG8iccm1EdqQj",
  "key2": "jr1qMUPLJa5fhwg6HwJa7sVjw59AEAXcMMv2fPpqHU82azU3kChUPmkJ9Fk9QawPQQ9YjZmDzz7QYT9hJNGoCzH",
  "key3": "5FHv5wVmJv7oqEQurfyATvcYbt8QTKYQN8XdnE2fNxnfriLh3CWzc5S1sgN8cdDJT9qGXMeeP7yxvEK5C3yMsPX5",
  "key4": "2wUG2vRMijpYkzg5xkQ53UZc3aqdq6YS6FysKLYi5Y28Vt1SJSjemRg3uQgz1Q5TKxxDnjf5CL2dXjvP2enmvmBp",
  "key5": "4YNArughWT4LQ5rh7m4R4gHm6CtoXEMyMeLapfgCyyDdMAw54q4ondbMj7yybzBmw1PdYQ9x2jtddVQ1yC5bjpz3",
  "key6": "22XRd7oGvrAD9ZoESnkigADUP5MSNB5vYSjzbEJ5dvampY9KKFYLfA1QEQpvZMxe3wTJi4RTCYsVUbwZzgEF724U",
  "key7": "5gdSPxY7zQEMr5yoZJCfRj3e8usFLDZAGnB1h8Sh1Nsvnku2Gc8nZvyto4SYSdR7tKc72ouvWisHaQqFRXNSY8k1",
  "key8": "2YYQQMPaBpSNx75vCvUKRCfqefzSDyxpwZDHwa5QPJVA8411Jd6f2KKYF8x2PnUS5Ct9PNg3xr9eFVaKG4JbmuQ",
  "key9": "5u21r7PmQEvTcfC8pF1oWBeEg83krs33U2MaiYRuanGqKbzvW1qoo79dyDZ8ftGDxx5ghsEErpu6e2cveMXXPNbH",
  "key10": "4XTxU13pyYbBkPPngJkJcJnC6S9LujS2GmneCUoKyspHptmyfvn3Sw5Ps4HKDJZkJZAQH1i9kRc9SrMnn7F4mf21",
  "key11": "5sLdhJvSJYXMVdrusNu83rSnC2X6imU6m2jxuVnq4ZN8DE1RSKbcDUMNN23SrzpceJNhVDyvLp3p5BUrCrDnZVRn",
  "key12": "o27Nf2RzFKvt87cRep4DGUtTJTwd7PQFo8ZKFF6bjiA58BcxoQ44dGmJMgHqaUeTFuUP4AqEiuggjTufckb4EUu",
  "key13": "5FMizC5KrS4p5zkH2VxdY1MhS6UgYpmi5AfJjGZ8stpDkdKRRkXjNdZPnBcgVUH9efP3SeJj2LrxtsR41g7jfNgA",
  "key14": "2ZpqNiAc7pNQwXvQ7H6o8JcktMKsrn8BAyrSLZ5hWXhMuuHd9TNdRSqjrosFJ9uE8ke9PBoXugrtxdQE9tgaqqjT",
  "key15": "5tSLRbrH4MC8EEuHA2CNrg1GQtfxi2Ao1g9HG8JC9ZgvkShDwm1QxspCMpTBniMfALczWGNHh6H8EovFam2SHBCv",
  "key16": "49pb4V5s8i2Ueja8wuuwu7ySx8gFhvtL6jGacHtjDjhN1aBiVBFMU6t1gHTRc8YxskA7AZG6U9cWRSoasCEpMD9R",
  "key17": "3KfPn9vB7bX1o89afrwPUXGErcEZG6AbrpQFYZA4kbWbSFjoS2ZDXC1dkrmt8URPYNMemYSR1wstKeyQVxB8BSD1",
  "key18": "5vwTCHDWJJvLsaQNAmvEsWPmAesBgyxsnh3MZtLurd2D8sN5BxYT4YaRbqVFUwyXNY4WeqqkbzJvSRsSLVb5H3Y6",
  "key19": "55eEB2XABmHw16CnKiwHYCErn97sucYommb5cFGm6t91WHX4B9bqTgWfwgGd8Dex1vMtkw5w2vRxVUnJvjBdMonQ",
  "key20": "29LAnsm4UUyoXTStfg2j9YkWaqsJgehH4Zw2jmZkkqTma8Y2GtUozHFmWhgjiVWbYfqpFM4kpYWC7QAzwzWJgfL8",
  "key21": "4XorSkTzYbaomxSkKTWEWpzSt4zRhz7dYAVWpKbg4rALLgg73ZydBBHX9ub31idNrsVHX1VSXkGcjtinmmza1BXm",
  "key22": "4BUnMpKqCbKfEXSML8rWQfsWBWPXEvLiE1wh2oUCxU4ZyCKN5eiJ3W76Gfp69SBzaHRTWjZCWtbhJnTq9vfDsBdV",
  "key23": "37wdC4tVuFddSw8kgah4pkmyJJnrYucPYkd14GAMFgyam5izjh4wqD4cAPgKMmpAQxsVASeXhdhdD764Xs8WQHd3",
  "key24": "2Mv98xanQ6jC18wD8L8XZtLvAhDnDSa3U6mBAXbcAQ1GNhxUddMdzDRsZ68REV4s1XRdPW8Ydae1bkEtojRRRFwN",
  "key25": "51yPPCz4Pryt5Tbd6wcgznqbuW4pXKCgrbjZRrUzNbNyp7JM5v2WthFffH3vtexweB4FqpxK5xPeC4aq9E2QVsxU",
  "key26": "4p5Pq5MT93RGMyWtCpLR4XLFvwMCeNopggwxauhakmEpVLfVC7Q5LDEwbNpqkZ2A9daFj8gwJbktR2bEnjXKYFyH",
  "key27": "5KpNS9nVahVNVmXLWEiaT4vVLxEjkkBppMY3s2ZkEu49miaFfA88M46kyYhEX79gvEzzKkcP6wgKf29GrRYaJQ64",
  "key28": "5c5xv1c1DKjxt3be4AqgBq11BAsAWZY8gCAULUVJ1kNHpqxu4FWiF9235Jw6qxN4wwCwDmEq1TwBGf7hCWCCC9Xk",
  "key29": "335y94GCtNwfTBAGVLFxYgwuBPCQFcQbHfzQLFWpHzxP93Uu1A1UkDt7nAuxDcwmZVfooc5w6rJENThZkPa8H8xv",
  "key30": "4ZTtNc4LwBke74LFsAYueGzHCnRYEEwuxdTGGcMpfTR6cRXChCH4nvuT2RMhuHudDR5VKDvggSA3KoJgk5sY2ont",
  "key31": "4zM9M7xPYhjme6sivxUPRxJ8GGx3bTegNjZeoj69SSMDzPaySjeM1aCRSJMjReVoFb4PTuPZqUoPUz3mzeU5w8UM"
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
