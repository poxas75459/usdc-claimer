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
    "4AHsuKbUnUda5aCgzWqrBm3MQ7rSGpDteuqh1kaFmAy7v5LfxiTcRYgftLjfXo18vB8SwiobEzmDghfiXZ6hgGas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bv7Mdtw12urRDtQr1dPiyUZrdKgQwrvJHViSvjXXP2Q6hARJFLFeUBxm6uBLhNvKDuLpXPkpHkJjvvUQBhBmCkW",
  "key1": "yLATeCUMFcAqbu9u97VDS8PTNAvbvWUce2sW5JnmkbJVUEvUHdtHCM2SKCbBx3r3aA3kf45UbVaNSTsFoKvMC4K",
  "key2": "29Fu6yuVg5ge2T4dNn8w54qt1JZFLs8a15PpFQ8H34dB6ejGDn1zK4DQ3DtPPQb43d1qSakvbV872Ydd4ERyRZnG",
  "key3": "3p8E4utFchbkZNVoGrjRqwJaqa9HrneptN5LqJGji2WmM1mADJ2XzZGwWxzqfLRZAkb2PLbvZ5jLF6pPyGAJrK8P",
  "key4": "2cdmeySJcWAijjRAYKa6pPAFMTcx6b6dGzRPSH1BYXRob1bPqCqobjEMPckuYn7NWYeSLFVHHEHWgYvkRBZagzQ1",
  "key5": "XTs6jErjUEUqusV9EAwYjehYKQ8vNXAnAJQWvMumuANMsKLB5ak3p21RPE2j1vTkNqsRNhdAkrCZee6Z1dJyy26",
  "key6": "3vK9n1YkLiaALPofZtUq2cPm7dcfyBUKntXV2a9wqis7khCBHSZVfapH1oWLCmGKSjDJaNC9yyZxtvrwJWHcL2VQ",
  "key7": "4PqEeWr8QE3qBjugTniqm7MhJpETM5NHTCRknG3pv4GBbRFVPsZsN4BgkJ8UKPVPY3P8sgbTJw7zvaQjPf7ReADP",
  "key8": "VKdoosYcSQP6wLvrZt6kQEh5uo51AabVZx9x2mSD4ttWBTE9Xv4dXUs3CDPT7PRvqJxNvc6QBXbMs24bsoDyfqL",
  "key9": "3DdFQmfw2SnuTT4NNhr2yxgCkX77ePT31KtGRJqmvuhhHpNAmztLR2hMzpWSJUmzEJSyHfDkmPZxUi5KWZ9JiqYT",
  "key10": "rFKB5czPDW53YT2eGrn3ryqGb89q3oZiazzuheAChYLMVMgCw3pqdSVKoSQye6ETiSLsaDQLwXS2mNvptCcfs3U",
  "key11": "5mydEtDngMjzkFiSxddCHsq3jyuKuG3TFedzYFZXcncCJeiR2EDcJA4e6qoCxTxAtWvieftB3mXB3qSFCtMAMThn",
  "key12": "BkDqN9K1A9B3E9XJnGFGSn4BapbGnLKwTv13rWYLDM4HHiia1mkfPQTLE1VQqmPQkDfMyRXdnc4WFactX1XBJQT",
  "key13": "3wCEvURVY98Xjpg71Mj2ukpULhXCu5cyChQxTiyoq3rXhj8q249BascNzfweveXfmAJ93grNDgGVGsnbcZ8ajDHE",
  "key14": "3q8mvGJoVhdmNwq9unUzkd5APoAGBqHyGXw3CksVmGhC88AYHNgbpVvTXnPVVyZqHP1t8iTa2WJ5ftoyCrPibMVH",
  "key15": "4P8h2otAJB8AN34jVmozRpT3UKayqQnPLUUPkHrXmGzxzV7qdJaJZkENfmvuZnrmvjvjwCsvqUKYd8GXrD9SE6Uw",
  "key16": "2D6DbEWjGcFNjsoDC4ApRLSpapSkcantkhNGBNRfTna8pNCTuLLYcw3k9eX1oA9YCH45953zVyZ5WNU9jGiT6sRH",
  "key17": "2JpkZzivqRHPocJCMhKL8RfbE1q6jF9Eeo49msXzShfUGHB38FzfYjou4PattihA2r9tdnUGRvYshx9hEy6vPxxf",
  "key18": "3bbVRS8aEGaKRjVSXnpZJaq4jWabnSr1qES5J6AV7iSzFsqrFLhFNwQfCndp2o8EzpZViorWPne7FpHcGYHbewAF",
  "key19": "3LGfJW7PoSvyvapTdkRmJrdkug9uoeMDPsL697zo9MfHz84rH6b5W1LhkmpGwLRRrUbQP94qjpxp6cpM3ivF3tkt",
  "key20": "3LdSk7633PkMHDE391ysYqGcXqBv8khvtkGQ1UThfGokV61FTyR3ndGRV8DpVU7tyBxsqhq3vyxGEm7veBrbwafH",
  "key21": "5fqRbPt1Z4DBPz19wGRZARLPwdbQjtwYwzj93H7jrwsaD2g92rkMEDLr4SKHpkLHpErUt4A35qjJyEsEuRvWjtA6",
  "key22": "5o72drNjzZpBtSEt6Nx311ee5B8g81od2oJCfZcKHN7nG1SNxLfRng2zN9SFiR6ZETmNurA1dWJkPpnrq6MbrKvD",
  "key23": "2cytUUT2U22zKyYzhQab4Hj8vqxetjDoV3YYTWfwvrXkSi2wwcKeYgM7BtF6Z9hvfzMNM2fW1tf7FR8xmgGykZdQ",
  "key24": "5k64x3KoAzo5gcTEqVkRx5C5s58NxTthT86DnqftM7NWKJXkJ3KYkVRiBoDzB8q17kmeJn5G5DrX17aGXBfDsvPA",
  "key25": "3nNXmiwfk7a7oKUNjr2Lc5Pa4wsbeVomsDaycJ8S619cp9CyfyTSMXkz3GTcq5owLFot27uPchHfLJVQMF46qd8L",
  "key26": "3PAqN1dxQC9izS3xf9J5a9pweaeVt6qNsEBgmrsxAaCiV43VnmFRhGviWBeDo5JbPYKjiN8urK8CsimyARLA8uXH"
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
