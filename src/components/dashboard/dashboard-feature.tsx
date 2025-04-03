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
    "3ErN8fASt8tAygeTR9edBEbtFYTc4Ev71suDufMwjTAcFMFwb2aqeXAm4zM53Aunj8eEKsJG8PPLAKST7ZPS2np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K9y1UGH1MBYV1GRX8qrUia172qM3ASeYPmUPTqVZARGuTUyQC9zpBf3AnzD449xqZ7DTabou1QYaFYD4BCYKJNp",
  "key1": "66nuPToBAxY4UhCh6eVLWQDaMrhkZTDRDKLnUECUauFkPnbScVfuc4cRRiNd8pu7Gygc7KaxXVveuepHM8MCRxFk",
  "key2": "2BKqK7d3FY3WeeobHFraMk3hLA35rTt1DkST3ht7Ue31XssqJNiXGpivbdKSeNYRG7xhzLHQYbPj5zRWXRMn4vgZ",
  "key3": "5KSZSjGgrisGiMSAFkB59JMXT3wTHEXARMxdq9XsL9Zek3F3cHM2icqjUQYTurT4At9dQpCSznabGKpr95gTvn2D",
  "key4": "4tVcyZBn11LFwJuqo8yKuKwmHHoc73J3gxhjJkwDvVZ8ChwYLW8iwPhCxX1vhvDHu2NTMBRe8tHipdJm3wnVDGav",
  "key5": "AGNUU5k2JoMwska8BvbrbgUM2EVj28E29XPGjVUxDqyh8Mbxxs3gCPZ7eUCXD5Dbbv8ZTArJMN2vBUAw1GoW3fQ",
  "key6": "5EFzAfvzGWzyHqdNAbLtMKmoZ3qPxghcWQgzA9Y6NZQjGTd84jJ5EDjq1q5ZD13rpg74WTiHAk7g5WQnrqHm5AG9",
  "key7": "22PyhNr4BD8kycMARiJeYLQYwzkM681fbMyaMkj3ZqquoiHjqSaBECJB8CeNi13WQ4GewuteXxRWJfxJPPPEZLU1",
  "key8": "2wxT28uqcwy2nG7sDS2hSo51r227PnKiiQ4E4mXotPfW3BxTjXnksRcBkTtgX2Q8mrNYR6gcU7XYN2gd2D5aX7rR",
  "key9": "3mxyRJuYT439KUNK5jV9dN6s4SkPikKwggs29wN3NifZHWLyiwb8LnGSgn7mTLaQ7Ktx8jWjZUhPeBZ1AS3HG7LT",
  "key10": "2dbLTAYCrqBRbCdS7agYmF4WGGfRNsj6sTRKDcs5ThrdvvWi99acyNodnHMN82a56HGBhwU1mL3p3oNVN7csDCSQ",
  "key11": "26teGG1umxSppkeH8DFcsRFTmbFGRez4FyU6mAx6MEjnmaSPHgJVQ51bEx5BGzzXG6yA3Vma9wXjoQ8prDTymdq8",
  "key12": "5mS6e6ZKaqwAzJWJmVJzWCUtaydLn5ticD9J3JHqWauzK9jdG5w9avKnWcggwZjfWryWR5zo4tdco8EcGx14jtCj",
  "key13": "61184Jyhzu1MAfxFQ6WG4V9YVE2LfYo3FSRShUBMGr9TSUGiq9UqEjf1ntkRcT66kgyKLCyAPVJPdkHBNhJrkHiU",
  "key14": "4stPYiGmTTgKqf8bYNCXHUC4yhCDoxzq18iAG9vZ2gSRB6L8e4BAWsRmALw9SSqz6CfjHi6JmWMDNL3sjEMwcw7D",
  "key15": "2FGpoBQ4CnkNNf4EouNuwkMFjbMPz5FxZaWg9VaFrdD38wu5nFU9sujS1LMzWM9giUzVSbz7wcUY6HfCziTtSj73",
  "key16": "3K7XHdwv9i819YFuUwTUsz8Ei9h6kHN2aLwebYub6gHkQt251fSMUnU5Eam27LXE2XVHV6cFeG8WBC4ezZHU9xmF",
  "key17": "A1TnCPK4aXUpdK8MqR49hx5PQBjmUfhbkTBtK9rjLsxSqfVriKF6aSjmMaCAAuJbs5KEsHS1mSmXdWwKbs5kGC3",
  "key18": "38SvL5VnxqLAynMEyRPtuDMTLgZojS7szJsRSeBMMVc6bjFkngxTV45zB3xuVWgRZ1vbUucJCxdjudTPgUvKq2aS",
  "key19": "4xssxfmSS6o4tkqrYs6hgmznQfyf6U8RhwQcKRhwDa9TN7vMPadPusX3RoFwKxg1G2ip2eE2n4e1CXiUpmKKccVf",
  "key20": "4v6cttBymgghpXtZiygAf45WqrgC2RyGQQasW2gMNHZX92fuEwghMiJJ7VMAjNpqgcFUApsV1PEXNZG31YBWWkox",
  "key21": "2HXw1USoeRSeEgYgqeCsSP3Stv5s577ySkJethggBoS2qQ7PtbNvEjGYx277Gp91TdU14hfz5dBNMorsPuK8MJ7J",
  "key22": "3m8NCtz2qHkMdgXr3amnnUQctp5HTcfnSCFQXi81xuZSTQiPRjTgnSFHpp5iSJdBLsNqtKCeTjiybcZXZPJGLpvj",
  "key23": "3rmG79TfS3oaLRwSKV1YjEUsC7n6x8vgkBQ8b4zTzyRh7Q8hWfFRyHFGd6CRgSEQBAnMZCi2bmzNLKsMQcUKPNNq",
  "key24": "5eyYC3r5TXy5dAeRuEHhdCtG4WGnfq2hgq2XF38wecPfxCzGicnVhHqz7inWbCo7fimnapWHoF9dANdrBPpjTQ6G",
  "key25": "5ivyNJaRTbPoRTmxYjYwXSt7Ei4Wh5ScWNsbM2QDPzMuSoLaEcM6bK75Kr4e2TZBBJZwCCnf8BN1k2GsX9LL2HCp",
  "key26": "4ukbj7hkRV6AJiJ8uEbjCNzZtG6xXPDavJbBsr54v5Gm7fRTBqeRf2MQMbRpPQa9UiE3HK5aqL2Cd5WjR6ECuWq8",
  "key27": "37RSrPBAtbxRUNLRK8nFttdhgmdTf19yHa39gD2tBzAYo81uQUAAEjVfmrFtuBPpVPhRh4GiMG9rkQNzRYginEcH",
  "key28": "4dSFraJLuE1QTNuBJqQaKAD774xEYWJesdgzd1CW34NN5Lgy23FfTxy6WrSX15sbMYkQYqjawRyN8AKb4k8mfZfb"
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
