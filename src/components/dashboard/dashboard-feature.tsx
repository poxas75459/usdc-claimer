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
    "2KcJ1bjJwVGbc63NXjDN3911cRxrCkLS3HeCBg6QaC4sB2TDpB6hLGs1RZBBh5R7fswxuLaHvmm7E2nRSC7FJgWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bnu1RSAWTRYa2jLrGsVPQ1K1RQACBaWZzGmSomvcV2DNuXbQP9dFby8YD9siodkRvQTrLek5uyaW76ZYWiKFX8p",
  "key1": "3CtmRj3m3JdCPK58GKm1HVKppYBTQBWQhXby4SSL5mFAUmnHf4VkMBRye2abjru75Uhgqzsr196HgkXQNZu57da5",
  "key2": "5goQMv5ByeqQpgCejf25eQhfVFP1XVzxdsEYqMMYZaFRmWEdszoQZ5zXRkyzi6W54eKh3mxvJr9zsKYKg4NwEMPy",
  "key3": "3CgAum8RBedxKxC1xtUXVKo1pocHFEGnfiVN8FQ6u7Rct18v9knTNwWHggNaHxawVPkNJYa2E7Ra7uvr7t7Actqd",
  "key4": "3Y442EhY7mo6UCbYNFMZhdVAKuSVL7GKZk8vxbCvhwWXPfCN2bM8GKhzT4oHwwQqbBbb4i61YVGCjqKTtoo3aSvB",
  "key5": "2zSFKxLugRgDYaYCuJiFiPEohtLLCs5bXaeX7t755hSFCC293zugsnc6r1uYX1rCvBhj23xLwcQ1quA5eaBC46ps",
  "key6": "3JBZSwkHv2DmPsT94mpxVC4QrAe12umdB1XUhkngECyXpeHCvFK1omEUkj2qxYBbeb1AdyXeDfhGthtoPMXQo6jz",
  "key7": "qSJHwqX1PzwaW9k1paEd4ByZ2KxHkuRp7C6qFXDXkaxXJwLEWqSfzJTt31G8kfHnVQtoUVPgNyS67W6gt8nb3DW",
  "key8": "QJPUsTTqS9ijghMnnGDHyrd5gY21LNZvcJ3M7oGxnVtAirWgrapLXjovBSDmhQNo1Uxyke6VPtQ4qv1eb7NwSVQ",
  "key9": "4KZFYrvyiHVn9dGQ2ovfwrZyg9BiEEeGQ6EXQyTi8W4GbpDgSzcHzKfHmUczYrVz8NwAfgYucYQ4qSyUSPdEeb7n",
  "key10": "3SVWZFGLnXhF9yQGxAv1ViELMEL6RsAC91MiaqtTTvboJNs6XJsCSiZKFdJvDn31qaP5VvBfkY49Yda1w4J8s5Cr",
  "key11": "3XHPm2jhS9UdwwtrEYLNo7NcNofhHgpsDKKCfJUsLVeSBhixtATN3A3jqWDKfox4jm22MxkYvKu3h5WuWqkfr5G4",
  "key12": "58pg5juyrj37DpZ6f7vkemp18QcMmL3Whc7iDe61wtB6V6kJ6scnkAhCcbT5US88PryvLwUxMNzaq5FJ4cSHhf4c",
  "key13": "2WnHNLmjc2gJvUtin8jT1dTpQTrxNnrzhDWbvw31XrKhJX8V5iuGCSe7DLd9n3UbKMZPMadMKaNEgPFgXn5QaEbc",
  "key14": "3cot8twuHtaDWtPsNgZwQF551xrSMGKcQUVH2s2hiXTedmu3j3tRWmeQ7W3N4Mki1k9MqQMBpLgSgCP9ZVXtwS2K",
  "key15": "3K4kjFi74kD39Q7iW4TrpCsPVkH4EV3rryx2zGbyN7jLyKsyAJwSdDPrvzNxvnSxNR1JHp7G3oQZMyjt84GozQJQ",
  "key16": "233piuU7MziKXe6q7aYzFi34nBBzQ629nmBhDdXnHtRdYJJceSUoKPf86xKYDVRBMDzyBbHooqk3kJSVyv4SXxW7",
  "key17": "2daXd1oAZDzKPmyL6Rn7s7spWsNkbxB1DhWfyArc3QuQVFBg1t8avxbgdviD7mzfHKNVhhDERaFtPWoSUDaXjcJe",
  "key18": "3qsixwWavTsoM1S3dE1NBU6vFaMbuBE9nFT3dLWdqgsPGoYWhp83WEStEy75AcqYwu2ut1brFoD3E2G438LgdJB3",
  "key19": "M6T4TgGQWV7dfuptKabC8dPSjfAGeYXhgPVVwwJpCW1v8sXf69XfaZJLTvTJZKX3eNnRehzo4gWocmqf27MXMqX",
  "key20": "66eQWNJWvkPWrfy7AY2J1mtViUXf5SUiQa24BHhVBSNyk4U41QeQy2W75xP98Tp38CA4bHHqLHdGE77CHqZvx4D8",
  "key21": "5QhzNEHtX5TQSMT91bmgs83raMtzqoNyEzAauk3QGQApttgn3toEZj3D9RyH8eJ5ehKUzLi2oyjNRHxMHSrVndTk",
  "key22": "2zSFGdiwn6GNSainm6YfM2kYRiBTiVGrHMs9ZUBAgYbR56KBMZgEQpadGnEo2q4WdTfKJaxejaJ2m1ALTDdMvYkg",
  "key23": "29h6Ad7zT3HqAFQTC1AYY5PE3cNohYeHQcAVBNjzqbodKx5nPKs4Ca9TTfDbvm2p3uvkUTaFhgTvc6csaXyLCFT9",
  "key24": "ipz4jGaPRM9couacR2drdeGjbLBPJnFUoBmMCDt5c9q6V8nQjSUhJpTEt5BaCT7ugQVtx89ywMbgN2G9nHV1Ky8",
  "key25": "2fZcScU5EsuN93xzGae2swBYSU2WRR6dARr4Uw1iC2SqfaqP2pZxdk32bvU8qJ6jQEMezP11Bepe6JbGwQUq3odf",
  "key26": "4f6JBS5ZPaXa8rytGuKz3mx9ZfDY9AvfeU5FpmvSFvdP52rSD19oKHRc4fzzaXXy5s5RhbQkmyHNv5AxFuFiqZ3t",
  "key27": "4o6YkRfQAuJZeZ1L6acWoWBH5HAf3GkedZrUqDaxv7LNo8q5ztvH6ccbT23BQJGFsk6krd3eUakjioYG6cfvordo",
  "key28": "2XuCSKfsg9VcZtChby4Wgv5fj1csn6vHPEvUuBKubVtAhFdVpZJP1wgvdpvoqpZ2TsdTHfSuToWXb2jATjYxtzuW",
  "key29": "41pXFJxxEK2YcycCf6DQYn1QV4m6rTyhAPtDbC6m2YMkvPQRBgNehpSbskiRou9gDjiYMemr83yp1zAQjYp8eWrx",
  "key30": "564evprGGgvU2PdUkj6C94G3zAW5BBDq2oLBRZ6yij9rXEyvpDxjDUhCFgfuN82LT8phTK92WuijZtNAN3kLfQ9v",
  "key31": "3TrZedKFkF8ibk76akGf8yEXwzfP6CcgrWd8LWhQgzALnAPmg1fxhWyddwamjwf8KryPccjScU5R2J2Tfj9XttCr"
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
