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
    "W7DWfdtA5M2oYAZMwVKoiR28eJxvw2aqGPNBFaCXHybgt1nq9bURmn5dn28YPrCPpg4FS1FZse8QtW3mpQNAf5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LEhcPpYCNsa7FJo4S9n6Ki3zxTuE54wB5QCXdju97F8r19QPKxfzFRr8AqCWaDjgc52uXuYGNLhp9ZPERJCL8h6",
  "key1": "5CPzA56Wq6bMwgZH7qStwE3mW2mfsva9qyWUfWRFB2Et1bsh1wJpNB1YgWUvSaZXuNapXHmQu3o2V8uAaxbwLer",
  "key2": "hzMudqgaZMcqStiP2u2pdzWMExzcgpFLpX5zZpktkAcrU1RZ4ZNYAD57n3vVhdnaJjJXEcs5WJKywHPTvxtYEQh",
  "key3": "5yxpPvpYod6kJrkKxefgNc567Ntq8mNr1NPey398hewBtiUD26aqSNV3SyJUxUaRor3F5a74CZ5jUd3JSpvYp8Vx",
  "key4": "UbdVrNAcUiDvbJSw7zVNkzNecPtL2FoCy5kpgumeqtvPczac5TurWfzu6EfrZanamrmFKHj6SZrbGoieNdCevZr",
  "key5": "3T3RCvXCkVs8uLVUenwUYyxKovR48Yroy6Zv7HA6WWGumm71BAVSbzwEk5rK3Pdp3KeCEwaXXS5fLBT6e9CcNco",
  "key6": "4H4TWmL1Q4vGy3HMw77kZhDqdLG6CGVCN1nR3iiUWQ3WPoV5EsfdMb812FZ2cUejrAGeaou7X3hUHVLVLPxzUc9j",
  "key7": "3oGCfyGzbiyt4uBnrbwck9HwUuhQ4zTPdfvbqraQXhagLKFvSWvTHRu89jS1S4iFAYeR53nYAJMDBQDXjV9vndHM",
  "key8": "3y7E5Shxd9HMTwVK3aWJghhLmGQoKRmFXt5jRgQW2QRzkfyPGWgaN3HUQmtG5MpMEYDJehKsUb3aszrQz4Abovhs",
  "key9": "5xhHuVJ7zWWfkHg11Era4Lma3t5aRMEAeGMQodVDGfW9LQm3etpmtQmukoAh9jrhSV7BgH3DWSMmMYS2u7JY7PTu",
  "key10": "2KKsVNRCT9oBAkJDWWjfq8GvWRd4QBQBs3eyaZ2Vj6NMFJTpgBwqsYRxF93x7VLHDMbg2eMDG99fv7NXxz6NXpXV",
  "key11": "5BDZLgvjoAsyAyofn6TkqcnrBbmsH4RBtGTBYE9wJCQArQK5AaXEFX9HV8T38YS9wDjGcScZwtcFe9tU3NgYsG5k",
  "key12": "3pdnhfhbKowYAt4EmNsTVC3AagcaUqtp4f4csgKaZoxpQvsDy78YmU6LS9CFRdLJjiqN2fWCKTHveFpZz2bj8VUD",
  "key13": "59iJpqsD9vBjStbSAFda4jusfrkiMJKgBXKMbEqsEmJBC8aM1V2WJhrE9ESEmn31k39A7CsAxFWY569arT1LpkWG",
  "key14": "5w9edUvXkSEDUVnyigMmK2pqfix5cJfGW4RdD5puR3gErPxUu9rNtEbLuGVhTP3bpmuqbfkNrp6RoUPvG5rHcUMw",
  "key15": "4PRvtGqwPSXHduZzoDKFn1jMtXH2EN87i1ZLaijWhn2JfNDu2yDK9Qc2nGiWiPEiTwyVfVTuGJaqpwDJ9WvxXRZi",
  "key16": "4QxgmZ3kZvheSQnGPGp7iWbMQ5HaWmr42yWm8fCWmLpgXqhww5GaxNZgvHNNcKgd3i3KxZhY8U3PpF6TxWfEKULo",
  "key17": "3VXjnYe9iRBat8uRSdTPDnZism9nLGHMLZ7uPWcALvb1Q76SmBdBmzBf7cZjZKMV7qstheenLptytkqk2ucvoorw",
  "key18": "FonAnFfnCQ7yVQmftZMQYxfMbG9zf6TrJdK9k8rLstjoyWPVYvDF8j59CyZ8WTz3wd1ZJxprs4bSdCSVbZ2opuG",
  "key19": "2EbrxYVP3HjF5pBgcXSYHM9Zjgrc9CgCL1edHQbvLtpVWDxWivCsJ75qXHh9feDDjY5daVD6B476rCXhm9VRVpCc",
  "key20": "5YKA8ojQKB5ds1M177vfaqnjHeurTtGgy7WkxuMG23HafrZL5asv7Fb4aWEMfKN2z6jF1nZRSggFfxbah2hTLq4w",
  "key21": "4xRqPZj321CiAw3j6SF3iHsXoQDryigUkDdQrWDV2HXyb9n7KvfLaYChQP3BfhcKs7fi9uWSScngoYiXPAtTxBW9",
  "key22": "3JFmDJGqknBnqFXdpjiQP8TWBNU2WxXEaFw1nJAcnj1wSUAUzqJpfNjquCfUyr66o6FJkvmAScQKG7pwEtpRWdCW",
  "key23": "61JoDcdDcXzhwfb9hLBPypqwf5bD1CCwad5CtgZP5H2E8aAH4WpF34tP1HJDBcPvRgjSe9ViMNFT5TNgibgL7KMU",
  "key24": "38ht54i3mDWxY12cZjJ41UBh9hJ7a9Vbuuq2MqSiGZK1shJeCuz1B5pUbiujP6rcg6TzAqPiQz7Zxae2bFmhCgoU",
  "key25": "2eUxBY4CPMyJhV46Xf1mSbgu1NTMB8Y3N11552jaN35KUAhATCEMmVKv9aXMKedHTTujJPFkXDf6qo96eHEsVywC",
  "key26": "5qTmUJqgubKjN1CgpJLYj5dsivbgTV2rygEtQp8eF6taAYa74xpvRZC6yfdZEBSEy28Z6hxWeFN3enFx29UpE2UN",
  "key27": "4nn17VPHFdwKF3r9B9ZLjpt3iJ88Ug1Zk6Yq5ZL6T4ijXV8ywTTLDxZckakyBx2PPpmgiTCnbC2XpHfBc8TnL9Zs",
  "key28": "2wQfNfp7u9RUfX5EjqnF4z3c5fhMiD1Uz3DHXuU3pKNRL691p246QMr9WApnnAf9FJbDiq9QfFLnXi7GS9XSduPd",
  "key29": "QYMXJTp3x6YxQZG88c6hyoDAU5MxLdDgq91UWoLa1QSvVYVVnPFjCDPC6Nrody3B5MvZAECQ1wbzuPzXQvMHizr",
  "key30": "6nUrkpeLLho8SZ1Ra1ZPaT53FjgnbbhRphUq948dCckg3o8Y2BfeTu321HQZGCq1J75ajWtJHJYrXE6Lrz15eWn",
  "key31": "bYDC2vSoiyuj5wYhTyhgzqWpmErmMFw6HF9FopAipcKVcjqiR43XkrXkb14ABRJT5tPu4MrAguo75qnxBZZyGSe",
  "key32": "VLbzWaewv4wUPcHpcjYmCBY9Q6kNJmuJukKXMj6bBk6bP8pPExGpsEKiJ1QxaUPnDiQ9dFQ8pXcD8YWzAtFt2tM",
  "key33": "2eYchcj8FofPBuHzQuH7DmA3aop1o82zDcBm2wfTVQk5X2bwpVFPtstQDx6iN2MSLS96rwZQSnnKHghvjJdYdwd5",
  "key34": "4PBRMyPFnLZZFnj6nXdw5Ke5bSFKA3RCmdUDkKLQ3iC2hxcDJwEbDiUcZVp2mQzXWyVQDiznMw5ZcXTB7wxHLdvd",
  "key35": "4JPqbkELgsHVXNtHWQVj8SJEfv86u9xmf2XQDFXBpXLoNjX5mqGyNFqKTf2hk9VpUEzdYcQTskoPZYXDSd8TiUsM",
  "key36": "46nkvStJNhkjndzCRraVLJbynZo7hempfA3S3vra2PdvNoLbd5tCPe6oBhUBUH54M3L576M9VFtbv5tD2SsgDaYR"
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
