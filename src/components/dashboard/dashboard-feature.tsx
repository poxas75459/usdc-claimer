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
    "5cEeSbYAadV8MS5YyKqwUSbkCGrYx936t1eGFzXWLsihnxk5dCs2tp984FPHWQh8qzHqWX52eNb18RcrUsyuSd7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "as3Ewdh61SXDxbSgGJ2DUBTSgRGZ4RNpsGNPJbzqWcvWB2ZXqu12mTM9W1cZaRs1iBpfyqXSLKVrT1jJHeUsFjr",
  "key1": "249iNKVpTHFNVKVbAF1JuEkwo9CRVtkFNmfFaf7gtM4cSWVyaCQWE42Qv9EPUqiKQKpp36jQsnaHNgkLeUhrRrMi",
  "key2": "2evCNuygDv5Bae8MiNmygqyq2HMfuGKB9hVtAvVhoHSYvmbToeT5m9Xu38oaue5XuK9gREKpQZnYcg36WbGMCXeB",
  "key3": "5cpcz212Z24iJ1QLgYJxAdkpisyST3f9hArrWEhq3yV8heGVaJpqzGoDKPFW5fwLfzLJoCYW65xcH8Ed7bbvWUrW",
  "key4": "2SrHc7fYpVsgbeMFzdDgJD61AFCdt63o3oq4mKQJ91MfFgihFXMkx8LP3LwjSupq9sHYcuW8XBEuthkdKn1dc7im",
  "key5": "5aB2iiQEk3UKNq7dPwGSAexHMrycpev6Qre4bM6eiYp6CNJPhkD8fUjMcqCe2omRjkm9bWuzQQEcLvBivYz89iHo",
  "key6": "4vWgkQBQ4BEQqFQERyhYD6RVMd6VD34YjMaXL9evQTMP9TFnrUdDAEHhSbh9EW8hCoN1KBvYUHpeiTFu5eceUKWv",
  "key7": "Xw9CrryXMPNciGPf7sKRAMiBa9bvEt1nnmRefveawCGGBdsb3J1gxVRhUtMZCER8418vBeP299GaG5oCiFxBNyi",
  "key8": "29EhPBfJtYLoD1xmAKcczpJ5bkwA2ksmjkX7roe6DYQQqofbA53h94cmeVxAga21ttpfoyB1e6wWLf7vY5Zxfjau",
  "key9": "vKUiaLvsLgc2guYmRumxyWcHypBwk5XgsQSmV75dJeYSKpPz5QMofUtayZovGrQbx8sgmyfRtBr5YsjKwNauRXR",
  "key10": "3qo7PpQuEqAtbHpugGjwVWwVAhEYcunwKo3Nds75uYTvsWephW34U3e8BC5TaKFcp7ydpF1LDMhw7Y1rHhXZbrmh",
  "key11": "DyMy8XqumF2BKMZfsnNi6vnqEBYtjC5HhWLazuXHA6hXg1VzQGXt5qHfZpptzUPSumfUnPftEFjHmPWErxoiph1",
  "key12": "26WDK1YKzVxnCPrqXze6Gt6zdPsgcwxQyfQwYDEdRc5Jz4myiqptornmXhwL3s6adKLkCuz3rdxTyZdswG5fasu8",
  "key13": "4kmSe4Zhrb9RoqgfsYVkxjd8Wg6i8Y2vk9tmJbxW7KaPvnkjhFFXCCWeVuvsfcuH9Jivo5P2LpCKzu7bxAQU9NVQ",
  "key14": "2wV8bdNB5nimESXKd21zubrc9ftQrKp3VgUkccRSZ19WmXnoNPbsAx9CYiC1R5eaYJt3HwcEiZ12d8qgq7KVadFU",
  "key15": "5F5tUtJZJL6gPR8NGEBUwki2rp4t8LcXSkShUTvVcUnet8q8qgupUkHBEqJx9pZLboUWtvCZqmoFKHSSJDjpN3zr",
  "key16": "671EDmkjDN18SL3s1aMu1sdb6J6cC6W9MkSS7P99sNLJrfLR1tKQGQLeJFQktx5xStiJ47c6a7e8ECU7LcsB8K9n",
  "key17": "3KF4uVLKWFj5n2M5jKkndDWys5TQcWFczYg52rE7rtX2UUAfLZvVQ9VqemEqkgtsziBfC6RNxdQfk15Add3fS2V8",
  "key18": "BQkM7VtSdVtbS1ZPtqQShCEjpxuP37n7hRrWbaC4e8kryi2pyfbkyCruXqZo4FqH32ynNkHyHzXczEizEY5z2P8",
  "key19": "4h7RDdcDeSfzmhQdA5PYS9mrsGt6HVDksYphAUbfS3FeBMusJFnRdXCt5NbtLh6nFQp5is9bwWeLnQWYiTRkwrUP",
  "key20": "2VUcNrzgozqYuULvMDKLRbNoR3aFgEpcWXaHmMUgNpg5rVC8ezjUatqFWUV9JRzk8K9gxb5efKkkFUXg8x4wgRKr",
  "key21": "59PzGcmZTFC2DgE5UdQtt7FUd7F1Zb9YcL5KrLBqjVrMYWwTTqYHEa393mBZSv4raCPPpxpEwJbt2grFBZTcVg2r",
  "key22": "5UjFFBzzYVcK3MpeVuHCXnvfyRySUebZu8Qk9ZzJ9qd4NePtDEzfnxKF9ZcA1oKJzRgrk6mjauVH7e6myxbiH41Y",
  "key23": "5UmsVUBXS6HXdAos6qnmoawjxw2T99JgLE3UrL3D9gHyQ1nTUdN4ivecUpBw6RtTd7grAhRqi7kTSucHaqdiL4pf",
  "key24": "kVgN9waU46PUEt9x2KkWCkeLkERyHeutw4eqWLZ2WFdBxAHxr2Eoe34SPGFeGkMg8U4so41ARagjXNG6Ag4bVHz",
  "key25": "3GKFcdAxDnzQa5NA4RpMz1PSoDQSiXU42PW9aCksrFjxvizirUAkkSwmEeEfvXoW7cj6VHKSCxr5B3mvaztJhtk6",
  "key26": "381k1Z7kjmpt8KEju7yVfVM4ukpdaG5t3u2CFyLCRTPi2AARe7dUBeVY468KT5iZssPjQYPmMrLtQ61J3QSzzkAV",
  "key27": "3BeK99hGuAKB3zfFYkcBmtpJf2dnKujHYZCSnwQKTz6Ng632Efc3icfAvgyy36bR2viCjVsmaQGdZnFjtJCEUYkr",
  "key28": "55f6agNMEkJPk5ixgdciTdmjHQJzKqZrdbZkC4FLvh1xqYKbRWEqtg2cWeu3WFUBhE2hsRvfFn1nPLByacvVtfXB"
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
