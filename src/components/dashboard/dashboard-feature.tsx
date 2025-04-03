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
    "2fbgszRFdTUZqUAmiUUhqXebLM9MEkjK4ZtN7YQSpAVyH2cBcvno1qczWPtAKLdnL7mkv3CRSCuNKor4sXGiMuXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uAPcpnFXEiL1paFLCiHqUqTnXs7eBNUAiM1GQkXUex3vgU5L21i5ocEk3222unEsj27v3z1PyBugbiNoaxMo9bK",
  "key1": "4Qsc3ZEzVSBfyFWwXezoEr7UmbzoMRTXThFMeCcQhbjab9KUhugwHxm5cJzEpLbidyWytwc1zNMmvWs4czxJn5NB",
  "key2": "4Juzk9YGeZj7tNr3wHQr74j8pVhNECjfLvCwTLVB8tKmpo6Td26ku134FrCZaZgLyEH8HV4tJdUjMZn2m7gHZzph",
  "key3": "3oDabCgEhVGXDMq6Md2X8HiLjhs4ChCQc5s2yVgaCQortYQmzWVaKCk6bUkmVky2oX7mw3uX2H3vRFkudURxeDWB",
  "key4": "3eFsMKkuKTKFRcPNywGLRo2WCXgqkAP8C5TWwAbJorMB5zTXjAHjiDaQ1SisrUzEEW2WSHpw2oytwTVfueKBUDrq",
  "key5": "2TS89Gbp15rzHPdpJZMmUbA8QdAbJSwtYHuBbAm66exeuvpFEv2LkL72MAsFVzmydotYG8k7ALSxEojpttAZA6xB",
  "key6": "3fmfU3NehzcFPQKsv1hetjnNdkZaUjgmva1zMTBJRs8siiVwutfPR1cPr1NWDDE3KFcYxbC9MQhNLPxZHviCn6sW",
  "key7": "5DCWc6fgSkna862986W7aTedroJSmFMvoSdr21zygB5HsSsLNCSy35Xq4NYE6JNMScWZzGv3uiUN2CCn7wwj6XZT",
  "key8": "5vGCxWqsLHB95MfPegBMiMBpAHwETA9uR2fgZumisuJJNtRDkqS3293hEGa6MBvLCSyKZzb6XUtVce9d81S4HPos",
  "key9": "5QXhmYEcTBdMaH2AJxBakkLjbW1WLyur3qzyTB1GLd2sgPU9ZZBCwu3GcussGM3z1j9xe1fjNPLt5gwuDVv6mirA",
  "key10": "kcmakSod6wTdYb6gUmmNp1UQ3uw7ubfcVGsJcBbDPyoDB3M1rE14iWWUdnZEYuR6Kru5ytpQfDAtDqBT44V85QY",
  "key11": "V5Rd3T3qPaPPp2LELfQSStztMyEKPMRH9SG9C1TT3WzeZBhuQ9SKKcxUWjyj48YWKm9zrEMaBzC4UvjTvAztgko",
  "key12": "4z6GjJmSkHMEzoedQP2g7mYkLT8vJucufKVfVAnb3BwrBQwyue4iryCPvdgEkjwbCatmKfot7YHgKbyGMjo4Phxx",
  "key13": "48fFtaWToV86c3FnqYAP1mfQju6nusf15obWi7ZCmATjxb25VTmAvXFVw4ea7e1Kt8dUvrjgF9Qce3wo6HmQwYvJ",
  "key14": "5vnL8Mkzo566jbHQXGfp4ZTtP2Jf6zb2TmnH7Mp3GZKyfyGxoUK7sfC9y6ZU2xZ7mzY9FZZZC7TbDENk7Ck7AjSq",
  "key15": "3HkVQu1HTWMYgVQKxrb9JoyEq6fbBqsr4CKcVWLBquAcb2yL7CLqMZdNQPBra6VXV7ZBjSbFeRepA7GCiUgDmYht",
  "key16": "29F2FnZaWMpr73MuuLxaU9aGz1bCSZ2ny8aYLg8StMa8H8izv3PUnVaKT5ffC2duHYm1X1No4DZUjV2DuR8VF1Ef",
  "key17": "5po68oH3LrhRVE4JP63sEVdK6wXRWChjDvXUs9Uw85MLS9HkDWGXUg6Jnpgz4smFpTqTQhNC1VdxqKTty4eBHjRK",
  "key18": "KFJUPdQusZMfLXT5cxRHYDFv5opaCCKKxXHbFcVhDAggdGM8XN8KwacKQ9jMSarzG2U8jsTFxFUqYunZ6fqd1xw",
  "key19": "abEizts1o2gT5Mow4S8q8cdC8PHzvAyVBPbpeVkesD3p16QCxgJyrtNnFx7fRJvs9EUCw7rwrAYStGf2xuEeJPP",
  "key20": "3FYvindASBCZ5sL1cTJ2oQEL64RyS68NwujF2sXDYvfg8tNXg1XuWCv3Krt9y2kFG1KSVZ2Bk4GZeU7pf9N9YL5K",
  "key21": "31b6fc7HWs2ncTgA6nmwGg4j996SVtkuAg7MqZUH1qgJDKzmtieoqMq3GvyPoxhdYTBUoKFSvq3R1KU74SdQZaA3",
  "key22": "2Y9B4H1UWgHkcQqXNWBrEXYDqRLuQnYcjXb2DArW4sVC84JwKQeqDY9n3S7R7zBeLjJ96joAZnstCNuNGuh43qCp",
  "key23": "2vk92MDNtH24f7bXti51vmLxjeeUJcnD27nejdiYrnd6YbKmBA74FKPCj5z6edHdWyJDUsZFCrm4WmmBUtB3Kmu5",
  "key24": "5GGqrYDVVUzvNNWLdCSsTLQQNvyaJj1bZpMikKzvBHBnVuFKTWVMiJdQLybatgVUCaGiDUmdyGL2z6pDC2Ru37Mz",
  "key25": "4cA3dQGqDjFEP54SCC1exfSEAXJo9UhJHpR1P79Shsrnn9a4J9eni23Unf7sKAqXUR7FNXzbZgymbAsQN18ky85q",
  "key26": "2Rephu7CLEzYkBwAVa9fsForseBDV4naH46fFYv49o2mQB7AGLPjTV8RMCHkM3Vp39MvV1HWwM4XHCir3MMYh79p",
  "key27": "65w7vDcKB1PGMbtYBVsoaogiG48WZMNH3aErFQe2eS83kmarSwMk62X7KKqib7tUtWifiURhhiv7tspo21xW8T6u"
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
