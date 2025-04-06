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
    "4DZbfPYk4siHgm5dH1W7onL8UYF9HqJUUggycyfJAWrbgyKqpjDPav6QpwVTbrC6UF1iN8y9CEMjAGjMRKJuiM5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AExKyjWQCiJrzHbwgC6Tqn8cdVNW1Y5AvsNjFfkbca9RTU7rxMuyifHiLdqoPm2TCVLHnujVCGw3CHwQs8v614L",
  "key1": "4p52ZQSdQ9RekSdikYEeaVoL5jCSE78VH3nAbmr38WbooDjyzLznQDRcAyznUSYwbH4awKfQN42A2AeNvKj8A9Wh",
  "key2": "4Y8wvXjLyLD7s7ogCZRUh3vJ7jTxuivPML3ME7P1EgmmMGqafWx3MsyB3yJJMvefQYzo1Y1BNTUjkhQsSX1aaGB9",
  "key3": "b7SVSYaNPTDuG4KZ2eWqSLtBeMGGYvuk8FHGccGys3hnDsmWuSG63gMokaeojVCBqBmC2t9zcNjJxpAtqTCk7tj",
  "key4": "4QwbAVfKm5YRKePmLW57P2LurCSPtwio897W2gVmXMd7JqTYsfXLLbh6njSZRvTTFR3pbGvNQ9hWhvGxzSmNnMmS",
  "key5": "576CR3CUB8JYEP2BJUioYdhhwMr9nmXXqLQrCwrTmcomxzCLyoCM2UuzDvr2M9z4iLzfsJQoDrWrFuNyrD59ny8x",
  "key6": "4SDLsiCBNjHdbiiH9kytKE44txXqhoERYQNnjQgZkM8cJjpWbkRAG1xWBeT9QQhHoZniuKxT6rWV6zvi2D97aH1P",
  "key7": "2VmmDzHonkJy7UPBHm8rNhsWWv9tN7UGDyxqnWjpKhRRZqU5ydsYoR1QhFCRDJuJitR54H5gk4cdiSoE3sWFo8JV",
  "key8": "27TcnreshQvt3rQDFj7QoFRMHPf34c5h9AdbLgBLDM8DVkVLgNAaQksNJLCCA7TdFfBBLmiGQDn7xsuT4yvLFPW5",
  "key9": "v9KHzhQCnug2Wb8Qvrn3UG9zxJTUxZeyGjKeZUZCQokuV1zAB4ZpfrrgwLbvpaP8bYZZ547mqHq8AJeMDgtduGd",
  "key10": "oZYW8C8d9tmnWGmpvdRQE4k2EaNjUron3hYEu2MgQerJRjLVNNSi3XZsExgWdgW5yaP3hw3Cy5H4Xt83FnHkN3M",
  "key11": "4TRJzvGjZpPMkdVAjjL6AoyVkwFvCaw21xxj64aY8wWr8egYzRKK2saDxAYgs3vfo9BUfg61DYS7sCG1bbpEqEHd",
  "key12": "FtEYq9L4WugGgNCDx2RDeaA5ce84y6fpbdVso6SGGEdXB88TjDpDVPLB3hw4Vpuk2KHvB3zxw5rqaNziRoQtjFv",
  "key13": "2Hz3sn4dGDTuGSj55kTFC1nf8fhbixBQehiZBLcy8i2ptDz6NgBWs7cgGzBNxRqwcpq1ULYfaQEZWfKDeA7iWWah",
  "key14": "2VJ724ew3qeHwYshcvasowjATwUTtEgxvC7eeZhadTj2E3qX5RRAs3XNFEYxCRNbqFEgSumZBWT7mL5zSNhV5CkV",
  "key15": "2nS2CRdKrpZEX9xLShPdA7t3SyevuvBoMBqpSPGByrGWqeTeziMGdWtRTQBy6JoL6TVGwVZTeUtnwBU8vgiNUTy6",
  "key16": "258Ch21R35LuMbwYk8NQvGpBgqt1PJ8wjL97ghFVfrwQqT8u7JacFyDSPF8pU7eemaQhbYze8GRyXLDiHCctDQ8w",
  "key17": "UKsTwme4pQbdnBf4fLEW5fW4HHeK7xV3hzPKseWa8DBSaMUKwQT4DQeM17KYwKeF92nED7qyyytcyvVS6fC1uMz",
  "key18": "3vuPhrb93W3yY54nyz6c4RsGcaQkedYhGYcVjHz8i3k49qB1oZaMtMQpewLWJsuVgBG786fNo59BruukUx3s5W3w",
  "key19": "uMsKAFwftJrHJhcsDVxv2S4JdZsjm1vJmYsuzZjkuf588ydTQfYH8A5BYRmXbpdJW75f8Ca7iVgNe4Diz9J3mfM",
  "key20": "5VYjZBL5HoEt4gmBRAzbFy2cfKFTSNXxRGXEWvW8vUkMDq7FNrMougK1RpoJfvAuayBTrMQ5MLxNk5yA7SMSwbd7",
  "key21": "2MMccJQ8Ap2VEqSsipBEeCgMzQHj1ymci7SqwicgNDQsaVUU9Ag9AiZ1SbRNZQ9tDCLpobEpX3yCwojYt4QJToJY",
  "key22": "DcTpphRyNbYFkfqDyDLv4RQRXtST2bti3XuZVdekiSWS6GwnpsHUMJZB2v8oBvifPq3EMuVVydicsRcocguwCE5",
  "key23": "5nZEupgDwtxeYidLC5ZcgDavbvyUCq26iPAEHcojSQo1czKs3d5x75LTs6zezSnbK7v8nRLxZ7DY9qhQvqFBEgFM",
  "key24": "2bEuWz3NLcRpcLQBoYJgaJzSV62kQbRBbFaXdKDryiWWDZ4UwoVepYJEVXK8UwhyGRVzQVh7JY2KSAxaef2sMHti",
  "key25": "4BybkUZVDQeg9Qijy6E4uGcnn5GuH1LuUDxWvk4GUyGhf6nh3qJu7pmYUiL4fEwcx1Ta6Z98PMEymrKhMQimY2MB",
  "key26": "5obZaEciN82pLwcLuHNjQEj6Czw7GkGFSxfrTtcVstThKcbtuJNvkVYTwuH6DUjyWhpZBeee6MeY9vYnW3TUJQym",
  "key27": "51C17crM1TeZUbnFxPAbdEQcDyNyoEJsGSW4e8qUEEFDtvEPfwtkafrvUZXSQijbyx2gC3HvKbpACjR9b8j6o7Hf",
  "key28": "ieAg4GEADg4vdv6EpsN9LLcd6eEhZaQc1WpC13PebRCymHKaGihM83ckFipr84cP3S3JCnHwv9S8qpjFki4rqoK",
  "key29": "2s4Bvhg6R84un4zgGZK9Kb8XiNdKJk9aF5mB5S16jGDNU8oPw1a7CPezvFHP8pRphQP2FRrYPm46KFuUKMpE7rtc",
  "key30": "3oP98sxVqDAYgE2ctDPKJD7ngb9khLWY2tkSXffKaFCiLN6uxFHa5QRKMCtRqR57W3w9vuDGYwr12DMxQuGueS8P"
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
