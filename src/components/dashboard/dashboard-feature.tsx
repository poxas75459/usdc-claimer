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
    "3NyxzJgu8JR1gzPeKLMdfxdJprG6Vph6dMbrZAdLAvgmqUrSUFv3hS9kuJWYXSt99VyfpUgdaezaMzf1DxxgqHhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ckT6mnqMPnjUR7nepoWxK7EbTSQhEk97byLNKeh4XVNTSybPnA9pwDcnQw9LUEJy6eY29sfdhWzcCLR4hU35Nug",
  "key1": "3r1Nz9JoR1rN4LNMXPYDEsb7dPmdLGmusKadghVNbPRJvKM3qVuq9FLtM6hAZffMJFVcRScuG6f8WmhamGGZ1ZTx",
  "key2": "3AKjBTP491prMrVUB9x7jkUCKqDq89miohxrBTjY2AF21Gz1ATxGhbf61WC9hSwFxxAqDdLWfwwiFHtVsk26xpsi",
  "key3": "ogf7jRgy5AC7uict9cV73xCR2HbwoYsUisZtE1niaah6BLSY3vAB7MM4je5wWTdZPLZqYi1PBpP7NR3LqPM9rQM",
  "key4": "2aF7ZospnpxMHGawkdi54dqmu4VVyGqF8kesDvaCwkDCLWhzU2ZgdLHmB8YmUApgxFUGojtQjZRNh8gUXXrdCa3E",
  "key5": "3Yq4kwzGv72dsbF7ZJ3zBMm5EzLCBXH1VzrbDNKw2MkajYVWwBQ9FxksdFToYyfcC4wVx9A1GVbb1BeZRkjds2D2",
  "key6": "srRvnkUwPn7arsC8Z3TTrz3YQCKQcWyrs59e23Cwz6zcBGAtRynmwJC6XkknDq1mevPkLKzXGVQeXbZkNeTVUno",
  "key7": "2q9z7RGXCbyM2GGeeTmkBLXHtspJJx9HhQuZ2RScnCq2tqKQWJrA2Kqm2Cvk8RUowUrExEYtCoQyee2vgQGhMLLs",
  "key8": "2LfvxfkqhCC6uMTqnRoxTVBbyrUPdTpeLS3LdocgwW4cgbDvPjRe95YW2Fi27byKkFrBxA1CDKVANLbb4ikDmuer",
  "key9": "5KKbVsQruH4CbaktKKSPJjdpB3BDs8GisM8skmdG8sgEaktvrUMVHKkSv38GR3SmMafphG8cAKekGhA6nqPMCA68",
  "key10": "5xR7tTbF33KWyoEZX236zRwLU3eym6AxKEfXnTLxAW119tQ7Vx34p33aKoTSTqHBX1kpPdSo4Ln4kJxGyYj2XGrd",
  "key11": "6295S4n7A7tHvAE8pyNysdQa6JC3vk7ksPoqkCbTjCTtktnKU3HsrnVBWz56prKFZVxiGa2GjnDfDEBjN2F3z4AA",
  "key12": "4jk7mh5xAnzvuTGn5rbocRRSTawp3hdGZovEzVMyEs1sp6a2F73u1kcbG4xjhZjSigQtNWQWDNoY3NLRHcyjboK9",
  "key13": "4zMxFRz92VqUwPVN9SsmXJnT6iQracEw5JB3KFbPnHs8WCnSP2NBrFxc5K2RbakjY1K5SWjpPUi5xkAswM6cnnXu",
  "key14": "2rounSCJ1nXTD3uP8nTGNYYHb4rMUz2uvDYHXj7ZNpo44eyhCJwuV6dvDMKfoy5QeSNuYt81cHMqp479azJ9DrBC",
  "key15": "3gk1zYGi6nBRmmGb2TCzokUCffRF1nYxw9yWx3JkNcjZp764F4mVH7Kceg8aPCVwgfSC3kPMudP3j1BLKXRK345W",
  "key16": "5zqyN4A7KZUSRWQKQ9nSmAWBDNFHPwqWHy3ZcyV7TrhYTY2RJkknXrs1hBvutLEXvECF8BfSq85KNpHkjpzV3yhp",
  "key17": "MkLeMcHZpFkuhgqg7FCUtryXrTUE145ZgcUrkge6xbH8gkCag4PLRi5kVEC3mHaWjrX4XvbghmgENkg27BZtE6q",
  "key18": "3r7L4jqhSvA3PPfo2sHXMph4qCZgQ3LkP9RXJkM1BRknJEfJbUptUoQfyEPLiKvWPSLZ6C1fvUK1Jp1vfbJcLw5h",
  "key19": "3ui1Erv6tM2X3UbmC6P8iNbKB3euHt2qWCzw7ZxZonMmy16Fn1WSpBbECXGB9VssstX7Zfs9RyXnhq7pgZZzNhNC",
  "key20": "M1pMHfyFFmXqcfW9Bw3tcx137YJPzFEaffpvuvkLvFjpsqxSuDLFSwZkfudM9g436s2m3d9Qwf8S74ojzsyCnKg",
  "key21": "59MDQSqahfU52bSn1bpkFybm74F1GZckk4UKxKjMT3gZTmRsY7Ht4c3BAEt1nF5ryCYXkAbT9sLcvpzkmGHaprqW",
  "key22": "5BCF4e2h6GLPNdPLzVNgBq8BN9yxBFX1doz9Ykx1rHCPpJAyWQSMgkdDG7k2T5hVnEnViyTkNAvLfxWDqDjN4APg",
  "key23": "Unif9eMhJXzbyuogu3QXWKqD8L7bx78k42HjK3iuhhMKNjtEPtNYZdW6ez4JySvXgUptyPBC2BsYAqrAjhwGsK7",
  "key24": "34ivy72BEA5AnWNyzpGkRhyQzuM7V8xtfgwQcbxpmHLbs97opu2gSKxUENy6jAk6RfTpzmpD2bg72W36amwcSMvp",
  "key25": "1DCUxsUg7ofUQFrPN2ZTxeab9CcS2XJSqk6y1k5tqLXJ5AxEjc1BpXqthYq26V2mTPDcmd2aeX7867S6HFp5u2k",
  "key26": "65bwSKRQ8QD7Q9c6KYA9We1yYCV5KBHhmQjE83xTxzmNN4LP2bVsrSvDBG6Qdh649JyFCzMTfFaMUB9rq7p6XELR",
  "key27": "5CMSGWgUa3uvACmx3rkDktB4PL6W6kbRzQGsXS2NnKh8QSD617Y4GHcyBPod2KKbs8zDVHYcdGfh8SpfPTjwv2Jr",
  "key28": "5tWJbXX3CVCbaC9j2GLCVXA6awnSnq5eEgprPZGRtUjQxTurAPT5euwudDg3CTrnUB2ezA9xGteRAHJ66pWURwVe",
  "key29": "2yY7u5h7uMfAsybW898s8rAGQex7U2oi5vjQdasAAoSmGJA2RkuaeR4G1kxfr4CGEZPFbE4hJBPgYus7NuM3Af6n",
  "key30": "27ci7eVPDenPgXYHgZdUW2L5AHVkHgZei58CDbtsqMTQTtYL8Nn16hx7bb7RyWAEah1ZpMSPVUj8q8V5QjDR5dCJ",
  "key31": "4gugf6rENpwLEqw5VH8YJWxqKoCqZEWU5p3JgeE1gwVz9jcS6dPyP1HwJX1QGZcR83nzE7nRLfU59zBzQhHm6mNt",
  "key32": "45pJQ4g9HrsRDPRnRwZrstrE3CjBgsPZBDsXoauVc47yN4xMGEYfsa2SwBXeiepF4UBp46PWW4KjvWkZEFrNXjgh"
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
