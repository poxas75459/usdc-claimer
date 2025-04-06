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
    "5Z8yJT7qHddXqokbc4cBupQyhMRELvEqjPwyEdoneHTMngHZhcUstAkpjbJ5eYAWkiVZDHQHe6NwhnBRJWWz2PBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NaYoHQ2SjWfegnQkhyGbAw6s8uNK5JcbPLQW9CdyEDzimGMvNCFvrc7AaDuPs476FQBHWqSYzhvYsnLRFxcr8WT",
  "key1": "64mBU7yTN2Sx491LnjoFHVUvHayC4kGA2HrtS9KheKxe65pYFVwpN6FrUAwQxsxo4qM9Z52XiTisB3ShR6ry7m2L",
  "key2": "nwYrnrf4goJV1dbbX1pKi5FTb4Rqo6oLDE4kdZciQ3Gp3PKSZM7n93aGiNLRtn8McZZmJmiWaHMHDzPBapiJ1cK",
  "key3": "46DKqobgWaQn7vKDCJxV2YYGxDL3mGhSFxiLS3XZpwBxRGNsYqei7kiP1XokGLg9rUzb9y3RnENxHMvYkH8rKanN",
  "key4": "UMpgG4oWjtZhi36vAaew8rUkJXzG2ruV5vb49dJP4jsMVcjpPX4vYueFGrrsAan3MzgrB9edAbDxTAYME1hNT6H",
  "key5": "5bPBbQ8beVZVzm4fBk1K5mt9TDn66GDLVeRnJXW488F1CkcKLuUBroWc3hLgh6xMCQVSvkXu5sxZpjFL123G9so6",
  "key6": "33VAUNZ4NzWprtckvRu5E9ek9p61SCTL1knoiCXRjhUM17MraWSVbvHTmKgjvG2TZmEb1J4Vj51YuNUVvMmn8Evk",
  "key7": "d6i8nCpWQPDznUPa8aSUKJ7Sck97Xnjt1XQhWpyJ6z47rdhJiCSuJXhBemM5iXYogTtZWDJ9utRcuTRvt8BEtHY",
  "key8": "5uCajCinme6y6VzMJdoT1FFTs4gRR8kkz1mLjY5FzWPJ7RLDpdAtwcA5o7fmvFNkuQy6abgLPQfQxd6UDHtDVLAv",
  "key9": "H1bX8th9H4GtXDCifJSiB3DBWfcErwTzW6xpkPYF8tgEtpnxGQkphH97m6cBjVDvt2XQhgKHb8F5Uy81gLMfnDK",
  "key10": "tyzEpP9ETJ3gpVPcKtHbbqfxxHzk9nLu9jMH1L7nanYkuENXEYnZh2QRVzGyejfeS13UL2yRJs3EanMBCs78im6",
  "key11": "59CRRJfbrGdb857xrJf53vdgACQJceSHX2hXxCgXrgotFqwgctMRCLV6bdqsLyabaCfNTqYQsqiaZ6P9eoBSpTbK",
  "key12": "4hApt4DQbUE7259xzH2SBREN6KS1MKEjYYZcHpYN4K3VAGeBQAQHMnu9egSfJNx1f5bWFaxrsp91278cvDU2ETGG",
  "key13": "2WByVmaBTB7B28GXzDdiYHZ9u2dxcBeA6wbbZACckBx42kyvwSCfcmdJzWykRkFA8mGqTznEXw14eQoExhKvPMhQ",
  "key14": "2pRSzcWXsnSgFrvb2uymXu3WuPkjUMCtSSnEKpRbZkXMvHLcWwZH9DH7oCXYEzV8H68ECEWGj56nAWDX6kntjXRB",
  "key15": "5Cuhe58QVsYfMZ5XKVXwdXFmm7EAHo1v9946ezwFHjhfGyauj3B2BnGyNXirh989URdXjC21UawX2fBGP4MEQ6Ci",
  "key16": "2QjrartvcjrLpjrwgcM1HZtMet4gUmBWKaxFwQWPQYBdVxtNi2kfi6HVGz2kLuaKZjZFe5Ed3iMev5vBaZ333639",
  "key17": "5HmwsusWc5d3Js7QXDYCmBWRotxdbAW66vdJEhddGizqFijdxdHPGBwGHmyjwb4PA5A9fQsxMP6wVKSZAfYWwcAZ",
  "key18": "3qCkBXVqN1BTBqhEBjLrmRBrZVuYRv5WVZSg4SVJqurNmvA6eeXSbP4V9pcApk7rxCY7kUJXzYRBJkGJ4H3HJJh5",
  "key19": "2wKa7BkoN6td7TBkiQFMNC1AaWNwZ6vGDM8MDrnJPcSBax2WsnXNbU1w5ijcTLAtsfF6y1yBbDDZRcb8L6JRkzzv",
  "key20": "4SeKMy5kwdyf4MBsrw37DxzWjNNpZsuFGkP9JfttLisuhg3SMNcPUZTuaWJybaXrND7MPxhhgh6ARh6nLqZfRhGc",
  "key21": "3G4V5tEHw88vTVDVYWjHXt6QipLBzsYmYksom1dsRSq1hm87UNUy1fbf8MtEi385s6PzAYE9RgFVHhfZ2DLFNh7i",
  "key22": "2jpLMNtXXLFYkJ3u1t5ii5AkJSsqyAswG2o34SsqnChYToqTFxcepwbjLi5odewREYjZxJJZJZeBvVCsnPvpPoBD",
  "key23": "4wRsjUtJ8b2nTTCC6AgR8XbXidqAsmjFbNBM7Xu3LyX7QGci2n2RYJxXDK6R2jMSKmt5HPcrTeVkdBdpXBqiX1zG",
  "key24": "4d4qZ6qPV5zk65qu4rLcRHqs4zy8LFHZDHVMTucMuioygtr6ngeVhdXpAYeQj1Tk1q6632vC4Yz8NyYVbvJbuGVA",
  "key25": "5wZUNuEkStz7aMQM7HFQ5rNw4E4EtHu83NrTjfcevWQs1Hc9syyUG4N8wGjqKtwtDnzWhRbLn2QP97HtJi5P8Ghm",
  "key26": "5JrrHQzv1GVvaCYUzZR2z2xKmWAFyDZECm8XYzYmyP7nxqDmpjzftyHmwgai7936hah5CwdnF4nhgPLbhtqPMK9v",
  "key27": "29yXwQ86keymHX8nWaDkhNJi86wGyxtxrAjUDaynyhsYzU9urwhnjT51nY975KQ8m4JrTpw7uJh46apDUfT9DG6M",
  "key28": "jLZio1LspY3AzLe3QPSTsmX6njmdEPKEuhpCPUwM7MDPaLjf2u4LYhkJk89xDMyAeRhfyN6DhkRs5RQ6pEDF86h"
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
