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
    "5HttxEuSeUrg1TESEuco6ZJQ2qYVaiLsDwE1czR7CXDv14WFQ5owaA6hV2AGwTdjwrEQ6YNdhdWcgoR5Te3d8EjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qWdg8836VbC1UBzwFDNDaEtMNMW3F6hpDKd5c4YGBhgC9MSFYYaFfEEKfJ4ebzzCXABB5wKPaJc6YcawvsfaZEW",
  "key1": "LEuCYZqbbVxKQY2K76u5LCmUErW92LWkFenVm3Z2steN2bZke6DCBse5BMcE7P2ujvqNFPCpggzmbYTFS1Npvow",
  "key2": "kiEn8qghpdY1an4PYD7k85KwUd2NpTFSyR8pmpd8Pqas7ByNQLAVF6fdNHUNgCiv1mS3SNNzihKPBzboDaCmz2Y",
  "key3": "kd6j6iALxZ6nzy5gZibuPk8isHzFibuvEAn6EK67J7kJ9WD7sBhpyVPSJ7EihmvmPVznqQ4eqAj6vC1iJUG4Za2",
  "key4": "2Zf4yX611icZkpV6uK8nnje1STfRHncarkNnKEBgTKaBfbkwEbFP2kCimBMY4R729kGqquAR4caMnwLLbBrUWGCd",
  "key5": "BMba6y8XDWbH1Wa5Fm8u6zLVoUDnuTSBGxJ2PeBmKTaA7E97zAscziYdpwec2KckDs6wx3qhjqJbgzwadiw5np5",
  "key6": "4nPz2RmwP3Y9VGr7mELPfLcCgc8mrJyQQd254Mc9QHoMz2W1uMTND2YfGoydQbYhBYcLgsB7jbQmUKH9NoyqbnMn",
  "key7": "2LEi2xicdnxg965479a6pAQDRYZBWLdv9LnAwGcDmJYjRRWNBWhYQdmgHLQmMSFHFEKqdQhjPH84tGn28VaaULBz",
  "key8": "TVJM7BUvVoZYqNvFUTomZL4LqbJvz6JdzkpZJfdegzsTsH1bZ8eEnXJ37z1wTgLEJUsJ3QJ9fQDuaRD2NQvp6Fy",
  "key9": "x3UE5M2ohTxHEcEe1tnEYL92PCxfAtHhsYPCQrQCSUupBKAmdYD5Mw9CxrFjnPWEB2czRmmnJkZ1CeFe6Bi3Lqd",
  "key10": "4DqbvbxWUohbpFHfN3PRiWAVrRDXTJ3QXRtPLt8ViLTxBuuEVFdtSMwGE4Rkv9qD9gnW4iPrUKT6ZRspLFrEjGdt",
  "key11": "3AkMNbXkFZvNDiMnsV3x3i3QU3BoiRzggHt76dmqZw2aPi35Dm9fLzEx2BxUaz3vDJahja8z5abZrrZPKmJwB5Mp",
  "key12": "5d4jAu1J6fdq9R38AnEjWX17nFJRkFWTtZAy8L6vRKqaAzhXkqDeP5hu57P65EWyXjhbvZJPyrVN2LPkSG6Tf6eX",
  "key13": "4Gkiypj8fNRSSsVvAeZ8axFJoopytjjSnRMHL8Hn8tkQPxxt9CnwmKJVijyRDq8WVDzPebFBftZxr7NRMRHcJaDs",
  "key14": "4r4iRHEgenvTL48iZnsbAc5xmeFLPvh3yMYG5RFL3oSEn71WM7zkzmSR4v1ZkK4CahKDQacsogPVHzX6Vf2T5ks5",
  "key15": "5hqvBJhrUXjAoJkqxEr14yhEGnHj1BQNijacXn8EEWksPfVuKQwBn8MHmWrPkFJJZhFmnsQgbm1xyjEFfEY84FpN",
  "key16": "26XGqkmpfuvdtBUvjiW8wHcLwD17v8sZRYdrEMuhAzsUfsswXdNAuunPEaXk8PEAe3urQRMK9zegspNXjbgnkN5V",
  "key17": "YDHsKkihb11PjiuGorKxUoUKg8w7U87trh5q3tzuaEDFxhBcRJVANacMnGKWB2kpC5TR7V6iCRg6U1Z8v2u77ec",
  "key18": "2rSAx5P8uRgZTvLffQ1tiXXh2jJRjhc7sfFhbkM5LzTpWwXCQLA1zTH2BgUpTfuWxSGxFXfFidRX8rapUXjcoD8K",
  "key19": "5zP9m8yMJZJDK1cZ7GiWFwpBQtsQZFWFAGiCPypPx6yCeF9hMHKWffKgpXB8zP4KVHrm1BKbZQSzy6dLLiACvi38",
  "key20": "5kWwmnVPDXc2LuYeEbqcbiD7aXsfigMcR5kAFW6EwFtUiPTtcG27Z4TvoJeH91wWQz98jtaHG3VJ2QCd3d2UmUhj",
  "key21": "2cy3Y2zhgMiWajQyzDpFnK1ZqmeRtdkWP1zTCVyf2CWEU3P8D7yV3CTxPuZqMVDGosEr4woCiR3oGQB7y8fB5Dht",
  "key22": "3KoAj8Kt9rm7jdzEEmDikK1gkhFrAnvjLfdYknUyvjG5BwsfcyZxfyJD2xQZ9vBC8DVMP2ffdMQCcQc3aSaQ59zR",
  "key23": "5WFzK4ZbyAj7nFzpNUMDbXRVTmW6FsWiaizSyDYHZzMm3BwBmhWpZNXyyVNrUYNbG6wZCDeArBVfDoB6gr5bXoLR",
  "key24": "2PekziqYbiSCwWbzMHAFsdJh1gQa1EVi3EgFQ6uxhWXsqvqhrByEU7978oFVGifjw5BzFL2u78E6yhD6rjAxTf7M",
  "key25": "5JgkDyChXXQocxCYjE2eoBcBhKGj1YzjsJt7w9eXpk6Un2crCbjCsnVWnwo12QN8Z89PV4dpFvsY8m8BNyvi9dLu",
  "key26": "dJKJR9EUpuoRUj4riqJZPR8PfVAWDxvFMs6jSRogd33UWYaQG7yAB52xJDkugfDRnCikNUPUCaycXuaaJaRfsdg",
  "key27": "5Uu1tZLai2Z5wgSBg1rwZvujzdUPQhpxrfvPw4xdKmyNyfwk7LYHnbmPZyaGeewjkHuUzVNGdAC3dwU5Jkim1RqH",
  "key28": "55AGDK2YAnnW1wd6FrtaDH6jrtNVb1tySnGNh1P4Rgd6hdGH1SqrMkn793vuEt5YVuL24jXioMHyfaN6vR7wPSGc",
  "key29": "237NMB8AaKsPHc5iFuFabQ1RfqmJGXA4NRa1gHdzehjUgFVKxooV1ZANAbZEymKnUD19Lz5xrasqBpUkutCQpQpT",
  "key30": "52r9gCaMryg98PTZ6nCS4QPBZNLE5Fu7gVzVA7csVYe5N5jKXgEwr4x48vNWRg8fhLGqmk1Wkx5F7JYvQaESir7W"
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
