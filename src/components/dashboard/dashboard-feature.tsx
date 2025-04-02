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
    "2M535pmskNnovhxssF3RTgK2GDbqAyFTaZ8UvJ786EBNPdGLk9T2x3TeBhwwcWgGCEtbv3wmoMdJ21jBYYySTiGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jK8xKPaz2EPGzcKZ92sSJeFiPofkusDxSg6odj69FG49igbzVnHBGnEQFLWaqxHc1VhcfphFPHwwjmfGCzT8EdG",
  "key1": "3W22c3qdB7Gzmyahukag4MzncLDuC6D4GkPRR6aj3ErzvY9Ntn1yxLtaJbVvUgfn9bDsJTkLAnhpMsq3FqWb2rm8",
  "key2": "423nSCCvFpvztS6BdyoNkatXtZGx5bfbc2TtVKE8n7QcNU3c4BTRSQfm1QHz8yBjDJwH6S15AVvw3fx34nYGE894",
  "key3": "3tY2HxAZZDodJc4hygYkuyxQpxww72J6gK2gYJtLxAwCsBRSTKTBGyMXehrNEBFgiDKDT3utvL2Bex4dx38BfAj9",
  "key4": "MBWteDATGiSoJGZjq8wBZrPvHWVPArdr3dQynAW3oPVa95KZwP3SEBYMzVdexCndQWfYGA1oX8A3wfJaQZdRbBh",
  "key5": "vX7MUpwypY5p1MpSPu1WnyHBonCkamPuPjHy341wVUyWrRunxUzT8t2PGqZKjPhYaLsCCX7cDGdPSCd6wb2Jz17",
  "key6": "5d7RGaxvTiYDpLCDFSYUskB6pbHAtcGEM1EjM6Dz28m1WJDb8jeDuzU7XpFDQBT4mHzzhn4QDaiFkaDtSJcnJ41h",
  "key7": "3DzvdUgKZPj8ktGSBHEN4a8wmn7QgBm1LZwwTNWPPTpQqMzBdRtNfzCpASjfgjjbTUim78vJYr3ikunSKgQCKNff",
  "key8": "4fipEnLHvTAeHdKnZf19QTrmCmUiQeXMSMfyquPHVYrz8jgKU23cwXgsnUQdnPvEqJ3mKTw56xDjAUxhLQpU9Mye",
  "key9": "4ixzRiWSwBTkjdiyfs7q4vUJmaXYJC5etLLNJXEw86UY1Vp1VyagvJFDsvr8kUaa2ov6Fe3YnoGczspebn6SPqwU",
  "key10": "5xrHgt5PgNZSBU1kgd7KeHzXbcYbZiRMz5eZsPG7JLMf5xWuVQAZARRoBXQ6NUYQB1TP42Ni4qrK4RPz5UoXGQ3E",
  "key11": "5bfKbrvt7Sqx3ieJsYGzCYT1YdD6xZCxkkBir7YCLdinkdgCt2Jxrui58tCXYZc5qfa9MVymMNvRmLrgo2VYyqcE",
  "key12": "5V2jE6MC5cgFUMyYKyKGJNyP3KNH2ziUGSYWJjKZFkgrQtwGaLHvaK6BrUKAt68wjVEYEU9BoL4vQ4LoKyKkxtj8",
  "key13": "y3UzS5bZAHV7jvjNzRpUJJqrQDh3pCVs8W1jNsFDnuYCREXhYLbrknqZditDivHe7zdKSXx3Wbzp6nEhkGUuqaL",
  "key14": "5RPB3jVkuFCqgDgYedTicHW1hcBzNwqWYqV11jpCcbZgLsBuK47fEAsgh8N2ugRB5H6ZKWGgFNMgNTVZKuVEX58a",
  "key15": "5MXcwwQTXpZRC7bN9k9ZFa32o4N9pbLDa5JCbiw7Qgwbyi5YQd5MLA4bkkzGNf2BEzgrbBtZgJxhm2P3SbG4ZRgB",
  "key16": "5zWpigwQM6rijBeRuGpX27a7rfFf9rykaGKY8JpuZZTWRZPLGnt7kzuirDX7AbYnKV4KEvyfTwBwBhYBrve49H1T",
  "key17": "1t2otVmP7VDkyyddGnLx1AGPpxRgudQvvWc2bLkbiCUEeGmaqn59DSSVMjBYk9Mnzb8eecgLchWaoPKbhKC9599",
  "key18": "3phuZJNZFDmF11AT1VbbwhxFSFngM5aHNyaA8Fj7vBCGomCLpLwQGmLUazwSgvcvie5hC4NEXCxNDrbAzgqfYCP4",
  "key19": "3S9kBfTqevXXMBWSKBvvrTRjsHxDcYbySvDt779bYLiVX16PPc5g5YmAV3Hccda8bjd4Ypj5pAFTxinqnzsotepC",
  "key20": "3Mapjdxd1p9vUD6fVm7SEeFNRvgzMc16CdF57dgXYjcyB2zY95xJrYJrf5Uuuwbto7qrjVuZpRuQ4z8W79oxTYxx",
  "key21": "mYmVCqTpSMjR2ndDuDk3fyeChGsjKL5BLHJ7HLu7Zenirg61Tqjiom8d7CHGjS28EYLaiDNsVKuJyBjUVJmyzVH",
  "key22": "2Z23zPnGC4HoyuNwKdcQ77YjphXAdDuKkoFkhn1f2g2eMW2EeQSpZYRmMARepanbpSnrTebmNs9pR4AmRAB7YPx1",
  "key23": "3fhzGasDkgf8c7M89qPkrhKi91Z4nL6yStV5EzAH9HmT7keLeiS6tKTsFkbh5wP1muqKCHZ7CjtbLNGaDStwmHy7",
  "key24": "5tmXzKLpVprY2ZniYBTTTdhdpWvAr8heDLcebHXiNMJzq7dRYYBxh4fHBoaVMvE6ivYo4aVdnZ3yA2zvjz5Lvxn6",
  "key25": "377kCkYWShaUVHrMPXoQaZvNzKCqfjtRfn3WayCDzSVFMsidPeSKq4KkCBUp9JEC6HFcyqd5KiZhBY2kK1G7igyW",
  "key26": "swMXYWn4LSTyFV1rmyCwZPPHycuw8w4r8itq73Bqrtejq1QpQBzPr9L3siKgxiSm8EURmkEBEcV9Cv7fS8P2GEX",
  "key27": "5STSvDSGqxtvJ7utSc61LNr6GtjkWaAvfrDXvA9wWN3ujk2XUyYLCNwdnEjELQKBSZ59eJYfeXFhvh3jQGEk6Y4J",
  "key28": "3R1iYzLxENELxvyDXdcQQ19ND6XSvPYq9iPWyzjAyu5cDT5R9YghLnz8x7y65dZ1LfccJVbnym8YXdpUE4oVfqSv",
  "key29": "3ZdEowkqssKUyfNKHGKsdJCvtF92UAs8S3UhEqcnt2yrzMAYTJ1PNiyU2YkxzT7qmAR8twSvbMKnpv46XeR8CDXo",
  "key30": "5ts25CXP33qTwj5NbuyfzrnLgwn4bLrRTkoi4MqhCtp8h2T75Hvczy34ddjMboDPyzWf7cozqkmt26yTtpFEJekH",
  "key31": "2548Cc2GqQ4sG8wtHQbVjK8PCUXvNPyBStb5KpCEabrZBn4dippgu6Zr1cZqaZDibxfgPBPD5KEppk4cyaMDuYvC",
  "key32": "5YJEAUkLNXNtvTxCgif14VTqNbhGUhBCEvVH9UUU25ExKrM9jjbLvyGKFUFavEDdeBzXuYdhdTEtTN8kMGNBKioU",
  "key33": "obbHwXmYVaPmeAxdk5hoLkyeNTiFJmvZaQHE9GGm5vqXxdwn2yxjX3kqdDNboyNVzYG1BTBZk8K3gH724PXjbRL"
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
