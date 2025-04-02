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
    "59f4wPhnyktYSo6VyMpxQSeoEAiLjiF93QzH4amWV5sVuPJhDfQqd3P8cb2q2bS4WN836PuJ7bVaLmZy5XpcAapA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KW73CgGQkTKk4ZkcXpdTm76mCaT4Pe6hBLQu3hiGTqevdY55szYSLXSa5bxQGgKv1Q7Up1XLkp78EJNNgst9T2D",
  "key1": "3bzv3w4gyjNsAK74FDAsyet6GN17KdHvmgu2B1RwaWgzJ9cAApnvRbSkf9FGYoUpRP5t1Kz6tMMoSHkAUSXRJWHP",
  "key2": "2GFea1TdkP9PTR8MMMhh9cHpzVaTfaHuYPud9D9P15v6UJQ6r8gLVS9P1WYDY1BAg3U7sFqz7ff1MYXGHkxxxvm5",
  "key3": "2Lbgq2HhEij9h14r26zdgjzcEVpcFHr5NGsMHgv2cCmd5F3gfAnPnTVaLw9p5y7LWgeWkauvVz2ugXnvh5B3daD4",
  "key4": "5Xh6Ya5r4FbfkhyoUxzAwe79xfsoAPDb5epEuooBzWmQWT2eiTpJkUUJokhkEsJk5edU1sd3RmhwzHGZT6FznQBq",
  "key5": "2JVZEnM884e6zamrN75hJ5AyY9hNqf79TEgqfHguy88Vb5xnu9NbRGvaDHVPK6jxn4BnhPk3ERQrJ6pSk1Su6wMu",
  "key6": "5fKucRRgBtBzcwdWCxBjpMs6oyD7RSshhxHE9T9xfg25paYKcEJ2f9bsXfvs5rTH6a83bHsKFuNEpAcDrtxjUHvp",
  "key7": "4gTUaRrb8TyMMVHXr9pLcPFytkAjsMgquxYL4DQmBaKS7GtJar2RS8EaPsJLNwFuRgYf6w8ovcuqcvudxY1Dk1di",
  "key8": "LZmjUEjZXskioU87QczkhQwKNopeLi3DKtmLh4AMNbG54PhWGQQLrKEaovkmVwkQ55s9ENqP5umYxretq3BvvCN",
  "key9": "43hz1dph3srRVmgXZJxZPrCCWTUACRJZCxGLQ1iatshWTDNEkzV4YSJ6odUgYFa73iA9nG2ZLCTW2qvQ8fbTBfXw",
  "key10": "3ULydGgE8Rae3LKjMrivCBzmDVFKderHmod4Xm62rzJkD62z7mRLQtJxvzRPh1aJcANwUzSWXmY2YN5zv1L684kj",
  "key11": "457v2UzG9xYU6gibndiTCe45iDt9r5bWSYJrox4B8PfLDMrrwKaX5tm5tPcxTawfdrShijPKVior4hJNdGxGeKCz",
  "key12": "5gB7j5cyuncFV8MDKmpFqnoUUhUhxVpaWqWVuqPzJ6r2X9M2TYCrgEMWQViCqubMygtV17gavacx3dKJswFNS9br",
  "key13": "2xrGXNnqLEhDCFTxCGUoDkTjd4JfW32XXoUqPE3VM1xDd1iymp4bdAFct2fts5cHWLj9pguKBfrLGrtigB2SHsg8",
  "key14": "2wWLDaV44KcA1JAeGfkaKjep2o5qHhiEA3RDVuhwMApPzauNT4aXeenQhgXBaH5t1EiipxxnNSJ8T8xcrpboJytD",
  "key15": "24UwW9R5JzJiHwXHtrpFHrF4tUBm4AXVRghb8UmUm81w2N45CNqAjHbxEkYG3TewjHUrhmkG7WwoB15DXZZ9B3kY",
  "key16": "2GuoungbMWbLAMLjFS7bfJzCLt5UizdaPuhb5JsgKcAL7yXFwgK65d3yAD9CuSFsZoU5SrQyVaPAo92FteyzH2r",
  "key17": "2T5DL6a5tcpLLECTp2DDXYXFRKVxvHMteCDSQkYRSivozV35CVCrTG3c5rFH7uk4b8qvP289RwrjSEYJK8DBYTSA",
  "key18": "yvn3JrvJaAYqtiTNXgasfpC2ghvWD1Xb5PHuSVyj2MCoLkxrf83tDVnxaiSGhWeNNo7LkEqa46AGTHg3wCKjpn5",
  "key19": "2ft1uxCAgYDuRNZ5bZUGMNMuQFrSyjctdrVC2YfbUTzAdwh5fmMKUNHJ6Tgd7cQgLt1kswUAC1PvJ3CMu4cKuo7o",
  "key20": "29neKEgL8mExWgawz5MdGZuobaFKtfFiWzimJGsMvE5p63BvbygSk3vbbh3k4bVu9FHK4d3meFnBwdiDvoTX3sBV",
  "key21": "5XkgEGnquvbGkV9XnxYCMBjND7gx37G86VeEGtfd4jrfMG5yFUV27FdP9FqjdgbPnrGHkpGYJ58bdnxfVRkh4vJ4",
  "key22": "3a6UdysNc8j9gRohA5uUGg8UP3er7vVQv8QDPNqxkLq7AGn8zXrB2XKCRsaN1ysTvyMVFHL2gdqxxkKFmuPgBWvJ",
  "key23": "PPxSkvBbyYS3ozhziCWY9pNzgavyqcSsi4KhBjitBxMKnfqV6n6sA5LTWLTsJRasyYUjzV1Fx4i6u85FmR5b7w5",
  "key24": "QBziJMuAc9wLpat4tSAENca2iEGu2so6kJBwULdw62RKGf8opcpgS5EXtjq3dUvAH72YDQXiiV9DCX576kUWkUi",
  "key25": "47vZ6xkzEK7BxffUYF3YXECmaWGrgwfkNMGQagy43heQWzzBTuGBYf7RG196cpa9hCQtCcYG8THhMGZLRP67vm3V",
  "key26": "3nwQ5zAWqpqFCWLGoRJyi3vKk6ikwkzqtSecF8azjB49i35GLM4iQBQ9Jq9FPLkDz3qDZ4V2KvtqUFEndkH8L9sW",
  "key27": "tFebHkWyfm31F9cnCeH6wcdr47ihyCzYU2UdjxzS3qsLjvpbLKAgrhtdqk1rdYGYGs8crg55Nd8ebjfknDWSLPA",
  "key28": "2gbSZYbuBKpHZaH1XaTivNKjL8m9fxbGi9uMyA5bMdDsA2bRAK6XNSzkg3Co4YHB2sKiHR6hCVTrPyGAL6TqaHWg",
  "key29": "63BuYHs4Qaw6MGugoJh1nzLFXbchdMNYsbtVMu4VTEB9tCYZbjGGvWWh3KaNnQKP8kNvgKiaBqZjeDyudTJzKqd8",
  "key30": "2s4MriEvqHp7UASs7WLMxtaW7yKCvH3tMjkSRcReQUnCSNBnJNDE6an3n1cbZfUvr36N1fAFfk8FeS5PA5qorQj5",
  "key31": "3HsMhNrGhT8U7wvBhfVwseP6TQBsY1vWLqiqcQhfgESp66yGyX3XLBMoVM9PCMpkW3PSoo3uxRDu9Uxdn2JZfMoT",
  "key32": "5SKS9jtrQNnXAm6jYhzjqzX8wtFDHgAfrNRpH3exJ2odg3gGF6RyDmmDeQfDMmen7D8hXppyWDGubHED57udeGtv",
  "key33": "3xjVSCtYSXN8tTzE5TmoDv8Wx9SVvVa4CbA5qR4FJbMPNcmmoYF7tW7RQA8UENTeWDX4Ad3NvcDLhGrT5cUceB6V",
  "key34": "4VRENHFNDaqaTYv2sBD1NUXEYSBPv1yEUc99nLD3jXdQSi3FrquTBzX1rzeXbyjP8cKFMCFkye82qEFaYpcpsGSq",
  "key35": "keqie5Tu1Tr9k23qNNXN5W6oaqUkH8TovcoJmSUPBb7RbPkYEaKD6CXGPTEbDcn667vkE1fKmEBNK4q3CuiC568",
  "key36": "2jJNUwQLvcFqz83hWqVG8TVWZ6d4LgJ9A3tWQv3DujgMLqDHN1TcifMe1JWxVMWxBZ4bXTkAojQ4RM3vfEcvisS9",
  "key37": "5K9ww63n8YKFZCMUq1bJFmHcC5dssC92mgu7ymcxTLq8WfVdixDqKjE95ibmLwFWJVHo9NSa2ubnqbFNW6gLWewv",
  "key38": "SVgHm5nuenq7xT89ucajqM3H34Rg5tMVTRQEXBimqincgUNhqHRiX8pVSB43Eoru93H6CKTJHm2sLwCqWbtvPr6",
  "key39": "4ivvqDvoES32VUFPvtV9qN7k1K5mTHiqvsV5ZBTTSSBAaeWCo2n5k9SFPAUFTCiiHA7s2yAXn888wVrKDRC8V9DD",
  "key40": "5D186P2mhP7CQuUjQXu4vRvPn2BRdouAohNMjwEcAb2GRGem2ceh3aA4V5ahaBokX4NDQr5F9WjiGVoYhbgXu5PG"
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
