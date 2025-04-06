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
    "3evCK4PjyxxKQEmysvz6qWSvosgNSVyui921JC7Sv6h4fACRSRcq4sxS8XkBEQkhKTt7pchHM8Eo9eEqnYoRBr7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F7bXqUHK98x2aTjZhVFdfHe2utNEfsAdJB5EtKXBTdK8KgEka67NEVWBPBoS3WotzoWVpCcmQ6gAXRvrFXzmhyV",
  "key1": "3UBLhZ5Ei8ukDw7WgtQnwm6PLjEgKfKANMnyu64D9Kxkbf1bUq47GioFGqaqC2xeF7tMRTuysdFqNGo6DCTnGz99",
  "key2": "Yof3AwMV3svnL7GxFe5PW33UWgKdqqPKAZi6mu7oZypNF53L9vmfPvse5UhuGFs4CutsXtKTPDQhevCak4F7uFt",
  "key3": "4cidWz61ai8nnUJRBQYHLdtau15JXpgWXagnbSUJkW87fKkHqJsnLU165CReHxikPbsVDmZLSvd2jVq7ABpbmxsR",
  "key4": "5F4jpqXuhyTvYC9eGMmpcUCgDNXZfGYVBRfG2RkCq3obvu3u8SNr8xqLxrK4kobjX6mmg2A67Twtj5ZANTsUVYzL",
  "key5": "2yxaYDaGkVQrfGkJHFVAM32YxsjjFsd2jfoa9hgWvVRiHN24KscwZkKqMKN5dvJxKJVvrAV1yeeYWUSoxck4FSf3",
  "key6": "Rwh39116tG4dsPPMvtFTBAXhdMJRPF4a8kUBRvagLgqt9UPF7WoqXoQvxUPbWyjJWPsheDDo2X6ZDnKQry5RKUc",
  "key7": "44gvj3ZMkeUoiXdU2vpYc1EnxTUUQ6pxDeok5W7VbqnJc6aEzGzhHXDrUt6KBUiCUztDaXAKWijX8i8LKWRKnZy3",
  "key8": "5JJm3HJZ51i6fGRYFeDc9Ua4G69jR8VAg82CN4y9M5hPFJLmWNrpAQ3kn8MNJptLeFnLBzNWaRUuczhaz15s3YJL",
  "key9": "3xhgC3iAhxKYJR1WAXit2M5gevh495sN2zxzVCzHMz1EvLYjJyRq6gSdct1GRnoEJhj2H9w52PoZNndZvBWP7dMs",
  "key10": "5uQzrUPHcamtg2EydbXCf8gQejdYaFQtsvRfbipchvk1Vt7CLDShEuMXw3vQsKo2z8od7Kr2VpYpFX5c7hPhqwCh",
  "key11": "61j6p2irFMdFWAms1JTfzTfC9BNHoP6EMQQU6ENafPZYrMKZm32tXU9HHjYoA7nkFFkbFC6Hbe2zbRF6ECmwCogJ",
  "key12": "63LsqhpqUT6phtsZoKGYbyNc1WqTTW3gTAkvLF5tj1aR1ndJrrDpThgcUB5mdV8nkcHRKxvfoWvwqfeLXAYtQ9Hs",
  "key13": "4DkxkRutbjmn2zZPPMQS6j2MDB34n7NoYoDjdArupKxeUSFPHBnmKoScQEkVxzi9rrM67qKeqN1kAJjDSUPxNtRg",
  "key14": "449cVFi8zxBXhohxuPMpKKQvixfkhFB2MA7tCxs2jGdLhTacX7vgKp1T9UeUqb97PvbGU7ZnkAuhrMyPkkgE1x64",
  "key15": "5iSzXisT1ANiKpwgBsZhoY6km8iRkCVF89vTrt5PLpYs8XXyLrcL1Szhq1MPTQDeZUzzk4SgLiES43VAbiZ4PRH7",
  "key16": "5QMcxtzKBsZPnkBJAoDBaSd7UC6K26FbyAgEJDns9wBhkmDYUAqjeMWG4jG4vKMC7XqXzvBc6cQXgzt7ZZ4nA1vs",
  "key17": "3YGaMsmdU1kaaLCDb7SVovxwdkPW2Quc62eBSMQpRVi63DcQTz1UCvQkYR5oMoVRv1sFPjMNHtkb9CHD4AJfh5jg",
  "key18": "4wbJSwDBQUXHaAgTgrree13DqVEx7XUxJk8jD4F4ct5mt1wGabKmh9P2PW6UunpFNwGwtdi5CJhHut4ShLaMMAq3",
  "key19": "5MZhQSVa62HgRr4JrQoitSg66ciDroaDoffhKGCyFYutgkJDnfBDd76c5vHicwMFHNdSK7TauhvUdGx5kVvW4Jh6",
  "key20": "94VJgGLymrJd5odcr5W628spYyTxJm7GbCoptWpJPg1ABSyYLvBkLiiNywHFjFhqp3WuXQkK2CR4TE6ACLCmcwY",
  "key21": "5DXdogbQVC9sErSoLtwBNaNiDcHjVUga44Kksi7yDj3c9FUWC8aEXQQSF5hwHUoadM2ki5oK1VVbuJqr7Ddomjur",
  "key22": "REpTzwvsW6mxwfJR6ZGp13UvgKu7rvhGCQVQ4SjqFHbKK8mCf7iFQYX3P4f2Z6gFbUTuhkKDrMabKpzYDRxEkNN",
  "key23": "MW9pS8rWizCA3x5iziZMQ8bt3ymTK3yPZLgJdo4vwsKTpn8nGqAgZ1eCknnksajSXDbejqjxS2RDPzYTFnUrTh4",
  "key24": "4rUFi87trjNhzBdXF9rNmTTrTc61PtrDaBb6hkE4XrhQkmWt94Jeu611BMLPDdmWEGg8eRMx562esxWCEddBuJBq",
  "key25": "4MKG8Cg486ca7Tu5AQf3465nvneJ36s4bSdEznjFsMeERFtXpvhYkrvZMaunF322vtVzaNs3xjgwKoq2qpVM7m3n",
  "key26": "2K8Nqr6EQtbQh1gVdavBxbJ9R4hkTHp1VqU3GAHc751YaUZwpfrHrM1p3vAKrBg6L8e6Szer61hCB4oHwRBpbAM6",
  "key27": "3RXK5x5KiRtGJsVXiTF3uxjBpTM9FPdUHNypo6Kht7napKWSqYqLdHx9We3AZR1WVYZfvQSXvUsLjNpRwtZfG4aL",
  "key28": "4MFrrwgngqgZo7pRdheti9zR94HCKiXMNw459V5BtepypNuLP5AjqeY5nQtdteCYQ2dbdYvEk8Fdt6qnLcdpapnf",
  "key29": "4JxRJPzomiGrYzrarJwjiR5pakYZFWvCiwdQzfxo38YvuK7bCZSsQ41kvdjYcaqWyohSc4jhD9iQtDseifUNeqFS",
  "key30": "5DAHFiitPzgERsiwnyBKsv34MWjncEecmWrRsE6NCHp6D8LK8rvUg34677UgPp5LH1gwxCaov6dGqFp3aeofZqMg",
  "key31": "3ULrXrXDrWjVtdnH1J4E8RTeGaRXBuDrX4cb9YBTyAe6KZQa8nUVjuyPbUJk17LSJqP1K9kwRXV246qVDTeZ8bZX",
  "key32": "5yoYJiyFjNYbzFVqoWHVpXjbgKDcqkNCVKjJjJoV8PpwRagj2hhaBf7FCeUBCPXQSARmCfpEZSwUrjyFduSdggFw",
  "key33": "5sbFKkQo5z6ndGy8D4zxQVqqnPAesYBG2zPt835ezCGo7YpqChREgxoJKwWyFwtdU5vLbQj1m2d9JD4pXwTeCCdB",
  "key34": "b96Wpi76ucyXifffWqgZa4WDjFwAH57ShA1sScXmJaij6qp9ccDVBwVQ198akLfBbv8tFWAhDUdx8X1u76UAK9Y",
  "key35": "5BzB8vcmjmtzbUC15sJoUu9FYwZsPKM1tJvm3QRuy6CJ1iWSFVWZYSzbGmZnMBDtCMRhkt6G4t5X43YyLXTPhSz8",
  "key36": "4pcdMGLQ7pRANdvGmNfqmLK1uwiL7bgU6TbYFT1nsUZ1pMrbf4JSSkjQYhLBXC3nbQ8EfrdBfEm9buFJtjX2RvQh"
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
