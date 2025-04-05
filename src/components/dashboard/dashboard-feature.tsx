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
    "4j4xZP1r4iWEJRUtv6krSzEpoLBpptR479gzvQJbWFnQA6ZrdYZLGAfZ6WQaTowk1UvdZjmyAweb17jWUXkVxBMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YYDdef2B3GsMCrBPL6Psanr3P9kdizj9f2UsxKQG4CraQEdpfwVoDVraTTc539Z4Dw2YVTayjJQVUHJYujhzeTM",
  "key1": "ZUi8tNQ7FyMiitcriVjvuoJuYGDebcmQ1kK7BmXM2ENU2L9QTbtsnZWJcywoByu3KBhnjVxTRMYm84r6J5ucqGK",
  "key2": "4isard9zGXhcVnZyM3MSyoLgU1JTAj7qtdEb8MwkFyfv1RQe73stx5Yd5dtnMjxSRLNkwgG4E9FE1SXmYVtAfSji",
  "key3": "239F1yJkQnNZ5qEbxvdhniUWEATZGBSscjMPMZMcdAtj5nmDEaiQXiMvU7jDXcDQLGevPuSHz6hG7b4QMWxMXZon",
  "key4": "4FopsLFAxVaCv4sJ1xniN4DnHBZbv42BPuzFTdcg5BdDRKSRVK7YtEe5b9BWG6T4x8AVF1bbSFtdhSQsEYQ8cNig",
  "key5": "3xnvVWfT3XcPpudHe1axR92tLo9D5eHRDfg3AEYuHiZZkxnNfF9k6KRBVFJZnbf9PTKixv3JZbjEtAZbRk1V7SEF",
  "key6": "7S7pNpvMvdYJecPJSC18DaUZsva1XVtLVE6XydYdVb4pqovUocCc4kSUjzzaCDPdE9fcUBESi7dhtexk7bMdZ97",
  "key7": "53b9bCviB41vB3XrwnjDWPFUVoUPkvycoZwacVi6zamkLKDYavaL9Ce2fWBMPFpzZbeeiMRB8wDnDhV4wazUkagd",
  "key8": "54MypyEK4qodd21ur3dqrnMnsiybjMg18xZvyXQLWJXaQRnQ8tb5UsKhp68nYgT1Yu2EWQSBpyDqT81rL9BCkM1k",
  "key9": "jCLJzk1zJ8JjpMKytNRvEfSVrmgXxaMvyEJkBmdvWKwkLfSoM1kVcnfHeRQQuuGWqv16aUMSu4WWZA73NH5noh8",
  "key10": "1RQuRA2vYrQtrbnFQKyMa5YSjK7dRQAwvZTS9nEoMy9xLMw9zY9Yw6pyWUoFsECnDC36LqR1e9ny6Uyojusv1Bq",
  "key11": "5Co4yV5eE9RmagQ1fZjRpLxsmtvHaiAhhsL97Dbsk5JABrRJRc7nh1Pvm3ergfLNNjz1J37ttJx8UeNfR5eE5XZ6",
  "key12": "f5EFijiaH53EMvk7U6A9JzeCPUnYGHYW6mKzZCwwRF6mVNMsVSXDiEQiDEA1NYS4MHM4isofns3iekwXEvet63Z",
  "key13": "5ABbXaPgHMC1VF9hV6JAAn4Jdt3qUkpaoyD17NZfcHdaZimjVEkMFXns4acpTKda2mQJ93J7rYNrBGf49JXjJmQz",
  "key14": "Z1fpwabaH5xsAhoSE6CP1WysFxq3uGiWqYiYryroy2TokCw3uKcc3hQ4WQHpgE2iZ71swDTCvLSeiEnBvMDFv2p",
  "key15": "9Kf1YAD9rEVWkErVQ6TS6sDNegrnfL1r1bFNaYnJrdyiryf7XbbKjfXnvsxZm24Tsxa3cy4SR5jKP867FaCPWpQ",
  "key16": "226L64S7B4pMCCE5xRqA3GD6yqSBfwGj7Y1jrYnUPQXDTYTQoCPnBkLbMakz6mWeGqzkLrDaynhPFWFEUz5gcTGZ",
  "key17": "5LzHfYNkZbbBkXQ55t4EYwhSQoTWLFscySd2FfBSEkyCcC8rhF6Yi841SQdfUwMN97a7jgqVv5SEuPWZs7a2dhTR",
  "key18": "3wSeXKsoJ1w83C1xVA8fhTkaoxLMh2u9jBw2wEJAuWqkHgyUR4tkNkXr81Mv2o6RKFS2kwRLWhy4JgsyafwAYZpo",
  "key19": "5YrcFtCie2hEFJdKa9vZ35NoYCczyz24UJQcvqdVA7mibCJ6uL6m5uDb8jLiMegZN5ob1m1UGyVsLLnYg694W6rA",
  "key20": "3n4YBtSDQK7hA2r9WaUZ7fXXHfQ791zqTctYWR62SkAtomTFrd8aSct3sf1exr6tFdRoW21HDMGVR1WTqvYvJsF1",
  "key21": "2aPXT7H9BxwByCsB2a3bPaz3aoLGoZLa43CEX3AikyXAUQ6jQAxa3Pg5vD16qPiZtwVmLMRJ9opVxEo6FNYczZto",
  "key22": "5VwY748C2e8akUQbxsgh5HGLKTdmkPixwiNDpNU73Q12zkxsQyV5z6C85AtXr6baJodjYTovpzopbFKghBcihVmV",
  "key23": "JHp9gx4oatFgXdPCPeti8PjsbgwDkUKYSL8PmpDCXLKAQMzFyxfaBzbCe29v3rFYWi49r5rimFXnxcvpupYytBR",
  "key24": "bQDHtfTbcmF4efcGTvw8LPWPVGvCS5qtvYBBfgFrzCpiVHUq9iUwC7BZXFLCRNKvuXfEjNX45fT8gJAmTD2QkyS",
  "key25": "5VVXqJEHZxywPBGSHC2bctYcQiFa9mDepH2iD3wwz5ek1kuJpTMvtrE7JEX17EVovwcMmthyRu29o45ZQf9oB7tm",
  "key26": "4hVtwPsrNz8nVyc5RzNmNah81teLU46UkxWL6DGhRqFhtVpiLsymKM3J8QCfoBD4osVgdX5Bm8yyVYgYAdi5zHj7",
  "key27": "5Eoc3H3xHt8ESPWCxhqmo3WZgfLemkKAs3Rc9Tf6uWSuSsY6A6TpMxBCMEofvyLkk14E95HMTWVvyPwZfbGXxz4b",
  "key28": "3dSZLKvBm5qGKXdDgz77ACfQ8Fom6yfKyeSTDcqQmG16XC65aH1QZEqsJ8Z14pfWaLx4JbYVVGUvTy9hYkgbvq1J",
  "key29": "4WMFmea4weegmWaHWzerGUSRRKpuEJiK5dqDsL2PQSguXakBQxEAfTcKxE85ifK2VJAczJNFg712uDzJrYascqZb",
  "key30": "5RmQffm7HsimB1C9qtybbs8Rz7TvumCy5VMTfysjwU2Bs216N5ZkCa3noZo3g2kyarwKwMPaWo4nTQSCuXACJzYv",
  "key31": "2XQcWsBTfzThLYrrmMbLd5rGZLiY9gsgwDJwzvPkb1VX58sSPPBuqSFBuXDs92iAivT81VCkidBRM3M9BBRpJmN3",
  "key32": "3HoNXnNTZjKZKX1reQ3o1JkMMwSQz5CQvjyrPSnBQr8zW6hLFWW71xFo35MpfbykKQLsZorfZGnh13cm6oAupik2",
  "key33": "5kSkHARCrUUEZatE3fA9Pidf6hQFi1z9e5QUG9moEj7LQqg3x7N2zbpsFpbfE49VYDNUtzGPYh4bCFfgs4Umqizt",
  "key34": "3guyodsJHQrsn3q6JeJweqpXn7h1nN3vGaAme3ybPHd5uNFQMF6BUdGm7YHBaeyF5RtkBu6J7f54Wocb7dvjsmtD",
  "key35": "5EabBcG9UbmEbZWgFqgMRGcZ1nDM9nH9jg5n3jHjHTeoc48szkgkezzkGQanvmWPeydG48aGKqFPbS1Ni5XFcNtB",
  "key36": "3yumikLaa4gayR4EtU2guSVNC8XewKRgHb1JZZyzA8LMXBsquXQa9AX4LMSQmG3X4NPafJ9PiqZZsMuE85VCJSEN",
  "key37": "5Ng3rdS2R2C4d4peChe22X8sT6wKqfsZrX8hVzPFQt88kBGyjcPdsdoogt2GcNh6Nqk9UeKyuET41BAe8SbuEJWG",
  "key38": "4DrbsSGBPFJiodp1KDdLTAMMa8zmYtSYhjjD83ssCFPBAZXejGqLEhkX7T2M5BA719jCninNqD4wMHAEbVn28V3d",
  "key39": "LfT6ew9CrMLZEPXH1bz3YMK97vDmcqffrHwQYtCSF1mWuPCcQ1rrXfzpVKBBQC1JbjBSw8KqKUChPFvSbaeLvQb",
  "key40": "3byGYoAtpi81eRgA61LV5E6n4HeEmUm8RrFFinUAqTA2PUMLkGytnXXAPhm4XGVnoVdgazPS98cHSEMLNQJdaXmu",
  "key41": "4pcwjsA5hkLqo7xbEXCq5UAiRjcC1iqszGXbCeBdzxJuhp9CyewyDydiTPyNok7j6Q1byQgFmNaSxs2Ld18fPM3g"
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
