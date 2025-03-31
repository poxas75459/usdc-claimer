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
    "51zqhoGDY29sBWT5mpfecRBdGzymrm9oTkUhnmrGhUTPE24sHjJL2SNt1bWuiHamT9bNHbdUdc4w3erPSD9GVy22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ymm75xagRTapLoyiJsg9pNQ9srew28NUXhvXZA5A19kzRagP5TUkpP4WQ3xEEPrwqDJJB5TcRtiz1EtPritYJBD",
  "key1": "4rCFcvmB2jy2KRbLa7HBc5TczhvfoobUuxanborjAHtNNDnDkeWCbDktFXPiXFfPWaBxmdKfAyzqnFTtv9jgBtsF",
  "key2": "3tsZEPJfWLFFHYGfZN2zNKzuw4xdT873zUdq65eBbDY9Wk3GUMtg3VFyQKHhBd5SHcrHT2masGcXUbhhhJMwTDV",
  "key3": "xRz4ncFtLK3JRwKftZsPnGBHcHWQ36LVWsjaX9Gnc7s811uAqzeTa5E7mQgK7Ghcpu4u7PKbvuvAexPR5Znm6t8",
  "key4": "5uwPUx943wptEr3B6unpMFqegZEkZSjV8y3FrEnsg5Ti47YxEHBnBWMqej7GDQMzuXHEiHYbawnp2tKFhFVB2EP6",
  "key5": "98sUaYSTP1tdPcFvF6rdaMuw86LfXHRvtG7kAgMAutYarYQBiQQTPSCCM8DkDR9soa6CBmjoQa4TvHJpcHBSSPH",
  "key6": "2JBmcUoh83xrLMxVepWWJiyky6edRfHinwbhqJGA9snbDS2fVVwwmHNsgXdEdPN1aSeHnFkmYx5aDn3yAQ2k8L3e",
  "key7": "2iwyLjKLqoJREwakLwwU5T2szCjTw9H45996sQpZZD9YaywMWtiW35TxWzjxKpUJG8rFPsFZtEYpqv35EmDWDi9A",
  "key8": "4SR4EmSZ2qjpsCER4rvj2kRzcPBfmqwQixYWFizU7wutaZqYZv8q9Dmbsy2DYFGE9RqpaYarC1koD7jrwFtwBdrm",
  "key9": "5nNkn1caxVy2vyM7MnZajsyLr9i9FsXSWNuuBsHX5UgDk5qTRHgiyqW5kcc8i7CY1rgVnqoo6d91pPmPsGVqSpaF",
  "key10": "4m1ptcZAXRDwzCmGpmRznoGFiH8CipQcZGLzUBHd8irHRmzb7D39AFZFZRJsrhsAcyLtLuTho7CwTgyLjrhgwjrR",
  "key11": "4dX3C2iMq28uN9nMPg7MjgZdQm4BvvJCtEqNnVG33h8tJXnY9911cdDMaCV94YC3qTTZ7baHX9Muu5upjEU2nV1o",
  "key12": "23cdhN1hdmD3dybK6envH8YxQshvKhc2J7V4FwoyFezMEYWL2zp2X7dewREJGugCpkZdvLcos6yJzPniJVr91iD9",
  "key13": "5kZPSMWeTYYgPDDQswbsZ3j41bmc2wgQJB5mYFYrpAsYgKV9xGmUMmC37DaoUWjFWUBFcBPs7wiuZ3oMN7ePtKFZ",
  "key14": "2Lp99KpApbDGFGQkC8v2uRKP25zYuTFats1RUEdVZTt9wWAieXHBrLzxaPzAEKWuhHYeoPp6ibCT4pnqqYTTEVM3",
  "key15": "5LZLEuzcWsdt8HZGMpNCGrGKDMFoTwnGJ2RancbT8teajjs65ErpnguHv4J6gaJeL1rwVd6PS9Zmd6ZyjJ4noFD",
  "key16": "2YvubDvshFt31F51idhCduC8XREtbKPhBhN2i7NnvakXPqz4G9wLs7uoBTj9Yed5gE1mdiYsoa2wg9RzjnJ5cLFY",
  "key17": "5JX4DyzBQSeegJgX3aNNJ6oyuczRs86LLnmTNhp1kHf6izwuFqRJsV7q5XKCE37hn2BKsiuHZGgeVdx7LqLkCgR6",
  "key18": "3JDkzMfUvBXN3cp3okxMLcmLMc9nKsDee4qk64BzvvSbGR8Yc2m76M1yBHbgxaJ6qBaDUyNK1cCTh7kJCJoeVHAr",
  "key19": "3RoH187LD8jLxpAWhD2tPtx98eJMKYuNFymKcQwFZvn4Y5Qs42mMgtJPizrmcGGVkt4MZxk2eFtKg3JZWK5LRCXj",
  "key20": "4W3wNwFzRRmNCSsBLDzwndFioGe2vFEMYHbGFvVuGNRbxqR63nxpaj8pn29i5zkyq3BLcQpekzLcoQ6grCsaHBqC",
  "key21": "5H3e8AJddchfGqJXz32nWH3QLyVuvtDW4kMfSyuH6dDYCcy5eGBcsvKHLMEETZizxDD2HcnnGy7sFeGCZttmhmP9",
  "key22": "48WbUWvppFqXHsqnWfzeHF1S7CKTLJAtJQjSN6bZx3dEJTk7tm5HZ2tKnDAkJAfUeRQdzdNx5LGWXZmWEvStpeT4",
  "key23": "uSN29myU14vqkb2gagWwut1GLMbrJDkpCdpKVqbeCxxMtrKPgvJLxgax8zKBQng1gD8oN8NJUkxcEh7jc8r5x9b",
  "key24": "HBV5Ku8HZRzkQPQxVUmEQtiraTT7wm1ZFRwUjDCRk89BT5HAGeVYrwTEFbF3K6hW1u9TpWwf5iwGpbm6a3u3ukT",
  "key25": "5XswSueDhxjcMeetKXKj5KEdWUdTnKGxbUp5t9PAVRB2VrYbkN8HoMxeafCDSDvLgKZCt5k1FdUzCxQZQ6BMj1Sr",
  "key26": "5hff1bQZ83J7LKJR2AVTu6So5mcdkFWjk7LSTgDBi9iTeG44vNo7RebHuA4n1MBmWBpbRjEY1CqKbx3X9gkDsf6W",
  "key27": "4u898CDHMfZHHPidRP4M4pxWwR4PPrWBtcJhRKxK5YfMtGFgjtFKH6RWbeVDEVoGZm636MUDGRjgffiPoJx7v9ky",
  "key28": "DFSMARgbi5gjT8r9sSFi2u9Z3wxw2PjiTr7t8QPa9hAaYzz8jWG7pEMNhTkSMb3A3fSwrnrZeZGgik57tmzSv65"
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
