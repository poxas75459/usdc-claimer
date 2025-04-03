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
    "5Lw4cA3DpVTHX7X9Eb8sWNpdNcT5f2Zi5hfAw5fV1ZXhm2L9sucQtBWSAB7v5b7pu68DMEUtF2ypotFxsV3KuBbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kx63FDtxEbABvemkmMvFP7W8LW9wxQhnFuFDfKS84tBLGdjQP397JsYtM1PyzbEigBqWLW51xu4BCeGM7kcD9tY",
  "key1": "3GgS7idwvHsVYTLDZuYzEGttLvi97eEx7a7AWaaTcSefQ4FStq8FKqbPXYh5aSQ7PxTtepQbhnFMex2VfLp5Hqb8",
  "key2": "7zc7qCLUJB13TsobBQow957birGgT91meD3DFcNJ2WBZeHxN9XiW1LfzzikxPqjhURoAUXodWfWfpBmwf7do11w",
  "key3": "3dJE85ZtvJm5xhYmutAcLzLyPvzXq3bcDg95WnwSXbbX1afNGVYgCZwD8VBL1onsYryyAz7KQ4RTrnzPeEFk3XEk",
  "key4": "2yYALvxQdfF9k9utP6iF5PnH6Ph8ANW98R9k4DZEiwZQzBvfKLi3ePTEXXQFauRE26Wx4seipidkeExMpsKJCA87",
  "key5": "3oCGckxEgMJUQrV5g7z93jKYFnVWvfqzSfhbvXD1gfsm3g5ojegmwmRhePX2SAsjqXpuyem5ESTrug7Hd35DW1S5",
  "key6": "61F7LmrCQpciu4mEHE1okcv5gJxvNU9Rw9ViwgoF2CgHMiURMRrdU1FQjmUwj3LdXy3wti4u9s1ZEpPWw5pEGyk4",
  "key7": "3XetUivfCJ3i8g9P23cBXfqWipVoxozb57n27EMLo54goYbFoE7Zxp9ZqLpBiMafuwvzKesReyJNaj1nmk37GbhL",
  "key8": "53FG5WD2GB98vfz1yBGvvfnmDDhgSEVvRcFpHyv5vHPZo29UgGuy13TKd5upF5E8R9Ct9vQWVNMD1wff6HmZDqEt",
  "key9": "4oXB41Bkc9f62NSNjK6RZS6SHKgsMddt7jxqDjyLViEySkAaB7tQrEK5tPTfCsL2ZepEtqDA3mJDDjLcdX86fAs2",
  "key10": "4GmiMTCzr3pYHVcRj913QCTcd31wTZBFpk6Cn2AsrELzi3Q51aDwvuMzZsw8sVeGG4CP8UH6KKEvxtD3gVGdvGLm",
  "key11": "244sWP396GBidJLMFxuL3T5B791gwyFzuj6RMV3MqxaWHqzWf6zB2zKvqHFhhYtHcQ49UjrDFwK422Zs4ZwbBf2D",
  "key12": "3QxC48yJmmPDGCSs9jzHCq2vMXcXvEFopK8zejFboZF9s82svmdrQBXD2cfV94qF4n83hzCaXy3zte6AT5riuGRW",
  "key13": "R6Wh6BQ5w8n4BZBvGVNugMoo84EdoDPWbYuSCD5oJSFJUf6nQ3grSLvV94mncaDFu3KzNdtrhCQ6eodzX9X8Q4T",
  "key14": "42bixWLBVrWjT6LqqwzkVoHMQzXuEenFN5nX7zhBn4Pda5V7NR3bxHhVPTkiVHvtLedHMPZompE5id5qZLMybNwT",
  "key15": "5K1v1hqh2c17EQw62CxaoEnBt6nEtjWq5DknEkpXaYBfUqJkHnaouP1ghVz72stQAp5ZqpxKzS3XvgPSgSvn15n3",
  "key16": "JbC5DMKfhJYT2dfoALaB4mpSshbBDfWtyqQBwx33LvijR2EssNFjyJqi9aozZFti3PGwAn6995WUUPb4ihV7DZg",
  "key17": "2hfWCLt8r5khTHmjfzPGQgYTQ6x9zoAWZ3mGFDnZwh9FPwapu7Hc4fyz1gwbXxo7uTZPRQtDBBex3zzGEtVTwC7Q",
  "key18": "3tzLweDsUc1FHSoXCsxZn55n36ipmwiQGfdWcQc1sBT4ozD9CrrbSRJkkBx25J6JCpbsq9XUJBP77kxBy5qx1bBK",
  "key19": "3qqBVmC3Z8GVcGPXAp3FsDVcULPVNSZe1aSL9iGQVhELa5guoFEbNLyViCJ6kdH7B9qcu7X3FWJXas89n9cRy41z",
  "key20": "ofbfCPXShsh6f6wsKxqyMvruvgFdL1dm74afxoY6dzCvofqzZiUctxs9awZLypuMJbFVxe6aPJqbyCrHAsS6L7j",
  "key21": "4xbReg2NDehc35ZEFAC16H8mA9UjqKDgrPeiKmUTjAopHLgnDYanavU7PpTgX8zAXcsnvTspwAjcHEHZEH24Uvm9",
  "key22": "56E94q7W8eX1aXc6Uj1mNvoJWdMaoDxyUD7Daux6qxThVzgHTSvsgpmqfD1jCK5CpLBhKwGEjLYtBJbB13Gjp1ir",
  "key23": "2JvCsoHFahENzAdjj17ue7cSTTcbkhRUnnzAUwoauzaAcEzybzWCPM3biu6e6xy7JNN227p1qi64FaCSXLqzvEnn",
  "key24": "2m9aWMGWsfYVaG7n6ovr4inaeCriZSyHEQC9oe1MLJv4TfuPBtSE3cY1pcZ2P5V7En1fW2zTJXn6p9ptNkBhyCPv",
  "key25": "sNWfx7gzFPdrgwUXEcHvPMHrx2FVR92k7mdG8xqvLry4pqVd1zyTmmnM1t8ShDZTJ7KHV9W1jzm2SDJW5CJNxb3",
  "key26": "3wRaZYykUBmhKCW7Vp2R453F4vdB8vucJK17GXPpbvZiNbR7VCRgiXuRoeCFpUSfq3tmCP8c9LNCFzS9v9wxgyi4",
  "key27": "4ZL7zfyNsmvN8itaUW3rvc4rHCRGeUg9hpW4Nj8yWcnVCBcNbbvDbAPM3VQrBiLgJxNZUQpeq2i4hoL5jDSjMPqx",
  "key28": "2Rh8RxG96unDZYLxYd2TipVHSymUHHxzb7syURUELEKYq5N2LpVg9WbFvd4VjA9UsSeLPEpxJJ9r5CNsbKdWJ5Q3",
  "key29": "66Ruxw7H1xWt57hBXtH8yKFMAFdkkikZsmcEwW1WC6bdiL1avkFdJubpkcRiMBBCHuXzNwQHtWpyJUCF9V5wjzXX",
  "key30": "5eLpRcYL7AgwFjcoS99do6Z5KgT3G8QEikn4ANiKPWHrhiJT7WgneKkupoT3kwmmBSkS6WzgLWA4iUMziNWDEjCY",
  "key31": "fGsmmEiJRKS6KsMop8iyxe84PyCXYBvmPLX3XwiAoMppgvf3CXJQTdhSBzcdBFfGwFTBdjkWrhCUgdBoayuBXQ2",
  "key32": "32JuKemjKacNB9ivnNwqmzRGpqEmSZwwRsFfaadh74YtDpexaL2pMK2KRtNvzeAznr3FZu4tB8UdhiweRddQKZpZ",
  "key33": "xGp3aX5yHbzuGqhU1HHWQsKKyJe1dA42dkaBK6zwjnkahqCidpExfK69QTrqSeBXNArEXyFYt3ZAqV6nnrKDRDm",
  "key34": "d4VrpeBt7UdvC41RkTEq5ikiFQDi5f3SEz2b2AhDUknuyZQWvYHbzMf7Yho8zEouxtMhDLPrd4BUurubmBjDr3f",
  "key35": "4FJz5un9XMLUD8R9mUbWeboZuyA99LTXJFnmmod8PkYts64uoxzay3cLpZBqU313F7aUjbuc4y7r1JDjWHaeVFh3",
  "key36": "4XVMN5udVe89ADBFzuExu24VR8h63sC2WUerUquxxrCxc7zEMErknLQAV9HGLidgY67creoavWE2X2chpk6w7Dry",
  "key37": "669nUVFV94ajYPwmuWMRXNMLGZXXLVPijTeywooYwUr7dmTLiK6JBVJm5vtqSn49CZkaSLNF7P6e97oiQpKErfgo"
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
