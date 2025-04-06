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
    "324DAQPJCMMwG4Kx3PdKNdiES1oMtcns2EvRJS3t5xu7xa3goDoH9iTsuwTivdU1taCz3FTAVdrztx9ffN531WAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EMFEKRsNLf2RBgTS5k3hfKwgFsw3ZwPBubfgBjFiXdtdhVvaKJ1ZLQCgctqPMaQSUgRJFB434arHFqkz69rF85N",
  "key1": "4PBzDc43JFJHA8HVRa9eyV7kB17TCUGUy24TtU5WE4ecbDzP91dSA8ML7HTaXL2p8SDyRSDFrUdCMP45EPBENg8s",
  "key2": "b2BmZKsKGVdip3kijMcgunsLtXPAUbzifD3SCWvA4BSASdNzzZkhPrBJffrgotgusk8JkT8xAm5Bkqq45BUH2zP",
  "key3": "4vVd7L3G6MWXsiwtLZQCAqjHXLVzK2pnHiE3XbA51ci1vDogpJFNsTU55GrF3pQVPum9PovntDF2dNxSASZutpKb",
  "key4": "5ThdekKgbJU1M4oC27ik8v8zrpdZ2oy6YHmjVMxdxQG7wZzijep3wwoxALHzA3t8Q14BLVinVPhqRo3hZWc1KQ7E",
  "key5": "4W158HanH2qx994MPpf6pyvHJATgVncEphfBVw8tg1XueDFbZ6fDENWqTxAa7JuJXk4YD6mGQSmkdURKaDv3zVXV",
  "key6": "e9zrz2x7iXBZag5m6MZid5ekYGp3d9f1ZzyvrMEtRvMLBtVLVpXWUXXHsaghnu6hjSDNvdxoNFaMeKPM1ALDWkW",
  "key7": "3MAmhDXA7hz8tUcb7g96yqNFt4vNABtBGqfyMTSgynvriZ6KYf3UogJUJVcH72t2r3e5QDGM8Xt3S16rvNpGTMy3",
  "key8": "4rJWnv9Y8ZEj3tSYEfoVvrXvTdrA97wN6xbqc51MLwkSxuSpP9m9ykXbfDNcthDA7KSAMmMaG5e9myu4h5PSqk7H",
  "key9": "3WFutwx7YWy5ZY7D7nizoHoQaEGUrYNLyM4UYf4KLdx86UzTm5Dxv1eftRKNmAzhKmcdps1X6MN3koDwnTaQUjx6",
  "key10": "5NtnRzEsmQtdF1CGhmhsdRTSfrSiQBpVwUe1MDR1s7hQHKW3HwxEhAxkoj3Q36iwif4jWKfkK9Ec9ZC7LL1dXW4D",
  "key11": "3ychzLKGpkc3ntAdqHwEzyBh71Y6Fczb3VyLZ8rHQeowVJxRHwcdPmDor22vviLT1ZdUBvLHX98qyg92xfTChrtq",
  "key12": "3s4wu6tB4XJsm3JwnsZykpi9ZVNEZ8k3fuwhjbEuwasM6iDBvfBhqqeHpFc78BsN3JYPyzmxh42qEqf6oDVsK665",
  "key13": "52ipPndfDUftwsQEaNjoGXtMdWczvvQuFzAPC8Jgg15seCSJt1r3ZS9ChGgd7EgfmLapPr7yy9BKgJ6NzV1ehPMf",
  "key14": "2XWHPrqAofo7T5XtnEfeAXqSVifxgsdCfaGPbH9VTZjtV7vYyedbqwpvY8RPcSqcdgyuhXJiXJD4mZheijZsRiyu",
  "key15": "3ba7TF6hRpwVm5XSZcjn958cqSWy7M7CvqPUsLD6EqAkNybxF7uTkmPAhU9RtWjvwfZwjiRtEnPRBv8qU3kKo6ne",
  "key16": "5WmMWqDZc9iFzD4Q5pm1f8mQBuYGpBooLEFNMnoa2W3gbPKV9RZe5rYquRj4X2BT6HZTBVrsqwXopjGVppxLKAxs",
  "key17": "4pjWCESVZRFPMVc4kkQyvQ6j4qAV2wAsoBmKYxd6HrF5SfZ8A7P3KHV461DH1imNhWXogiZcWK5o8sG2TRhKXkch",
  "key18": "2T98PzJNeQaexHv36j6F25zdWwMkGGiGZKxBdpoFMCvkJWhN5Aev4Wcc9JvtDMiZLCh9oWKFALmNMbjJMHAZWjwL",
  "key19": "5HH3ELYdAY4xjvbnJCsbY42rWBJoX17DEWemCVXRY5iqGdjQkohA9JqgY4EopDDxEPjy1YpsLscTVaLxPNfwsyNw",
  "key20": "4ooeLPWvmJToUsh92n539zq5cA6Gpk9CEiLkYpGirvH2PNeuHpdBiXqnBen7CEd4hE7XEByxb1o3VyC6MDomcGxD",
  "key21": "3SpCMZaHkYZ9PEBemogpF4qwKqamribeyZ8XyCgaSNFyNjp53TAjcbCMazpCbX8EAToj9KuhDLXYuwMQsAgy4Sxu",
  "key22": "3AyCQe2rJaWeui65rJKwmykFbjFuA39hZWb7iKwyipGpuuPAb4E3CBteud5tweA9mi46yNsV1gRAkuhtetPLPAD6",
  "key23": "5WYRAi4KhjLBqZYA2UsDAt2CQbBVtNmSwELq29Cp8irsStSudrQDwk6k9AL1nyju81vRgL5SpbDP2WbEnk4dKd71",
  "key24": "2SQhJMskujbZR4xmVXB9fLghV3uP49Zjhm3C64cNpht8UR2b4YWb5khrhKY4yxcNt7GLnq7TsMocYbYS34zEEzb",
  "key25": "2Cn6ocEuQXDAoKp7whnnABG5h7JgsJKCjwEEaGFdogP3Ktd2NYHZRm9CswgZmGoYRioaUcJoUmWVQXbEax3sXQ2c",
  "key26": "54g81qyCqNXKbPq3k6VxLm5PExHfb7vQux3HvWvjGuNwY6jD2AdwggkCn7Dqj7FZuXNwgijG5E4CVs1B7bYF8xtm",
  "key27": "67AmNNQQRCNwjiVVj8NDJqNVD4bLr2gu5yFVccnggWE2uL8ZjoEQZXg7SUtVzFsCKFVa9rpe8sLYWqPKRAcuYQJ7",
  "key28": "5d2qB8kw74vijNTEF7itSksnorjsjXKdj2qzt8q4odo1jKyTF4U3Habp7QFVrcDFE8MptBFbYWMiVxj9SVKrA95F",
  "key29": "5G1vFQsrD6MUk9kktjK4Yh577bhm2oCXPoFYQkbEbwk1wfFcufd4qma1eHKiBBBgvcK3etvWeKsY4m35D59gtQpm",
  "key30": "BXy7ani6VcU3FdssVEgknVTezTn7TwvYnaDDr4u9Q1p5RVk5zL3CUzXPVGpHxXP8G3ZJaUfqbsGE4hWbe5yKN4o",
  "key31": "4LuiEaZNiiikqSXBQDjZjgkkG5WjDKoiCDeo2oDWggMcBYsJQgKkoTWJsHAGpAU2BJ9E6fexaKpu2HUtFYJgoXQn"
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
