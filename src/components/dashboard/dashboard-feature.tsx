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
    "2u9NLz7fNQCxHyh34M914fitmNuhcWMjAqLRXFCZ1gWVNn1nQKSAivrYRH9TkUDdHaPEsrA7rqnCEuYp5kbvWkAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZU4ZejKdQEEobd8DT7droWQqrrMUWtPQwGYDvEgfkt5U6YQUbJ9mgsfgEmN91xEt43MugKtTLpaKiq7Su5Cz6ym",
  "key1": "5Hkt7r7nowYQDhaPDijwB666rQRNVQxJcZsnrbK1rGDZ4TEHUs6o87oAkTnrvq6D95GgvemfTQ5EQkd6ap4zhJ2x",
  "key2": "5DzmkAufkZ3VBDcVwvMjtvpwDBZC1hLrLihpSDjygcKPBaMRPKkNbEb8tspot9NdWscX6rURfdwmegoTo2RqPbiq",
  "key3": "s847GVy9g4Kyw9uDWNq9H6srwmXSqo6e1B9bYgSvpJdRDbMCcPTSNK4DLBojPKm2dMKff1dv4e5MFmWRfw468Vj",
  "key4": "4pkuzYkx8vWHmqqZ7EFFzErusU8QvpNHHNLYxjaxpNJMGzaPmBFJ8ULF97HSMRW7QVK6CSy3quJoy82ohNHxpsFQ",
  "key5": "MidTKiDYZrRXCBwxLujA2pVjNcoeS7mjhjrwPiNt3yVvZa2Y2er6tqEkSR8CBGh4irmkYNYFKisgaV6QMzAPYAc",
  "key6": "52DFEhKf8JqAXyQMCGxqVviXNB5fwebW7v7Cyrs2KYYYUC9rFSPxyaTdW5nWrBN6psdtG5E1KxSMGDZE1t5hoG13",
  "key7": "5xvLXRVL1fzbGe9n2ggV5SZNLRcA9N2Sa7GoSaxTReaQzNtE6YEjnSChTd8eYk2sC6UvVoD5eR1oNoTx7D6hZokT",
  "key8": "3M7Wubf6FjEAzGaHASAmGwcdDckbzpey8xxe6VXNbPXnJwnMu9U1wgoJy39gvpehBJa7wTVXdPvdfXJtLcVkJSR5",
  "key9": "3VqSEFh12beK2LiXJ2K1ujM74cyXvNUEGe3Wm4TsYq1a747qsEH1feDwT4nixbwRR7Q5djM87BovUuq5tWN2Vwqg",
  "key10": "4J8LgvxfQbeNrKvQG7Wj4Wd7vaxSKGMAAv3Z9BxDHyhFi3cUsF9fUQrJvtTeeWswWeZQ81qPFUnaZm2tuC6mYn1Y",
  "key11": "2bJM8oduXnPzjGpYejrWdZdesHV2jbAYbPGX9y5sPfdcGAQnbpUppd4xwDuYmoeiHYRjsPijK8hXa7shMPZ66eBY",
  "key12": "4ZBVzpZP7hySv5F74SVymieMKAyZ6Q69LW65zKUgWytax7umvwKrNs5DdiQ6oihBFuKdLSmVadiJRuMhLg3FuoYf",
  "key13": "xWtqX2j71rVUXc7DDLtxc9K5wXy3xnCZf26Uxp7JemQrX8Tooj3tbrostNPwZVdqQmQsacgdxVweFTPU1i73ccp",
  "key14": "4UfZ6e8RxwSSxVwLRKd7nFhayXWKkgzHFfz7W7u1FtcJWSEFUaG2QkxeWGAHeA3Kzi6ZxQg5WXYr7f8BtYWSHShZ",
  "key15": "3K31S6V2qm9NGURkW13J65ytQTgKgaD6piAAzsUes7JtdFRLkJ5Qi2ugw9bfxmsWNjRJgzSv7Lb4abP8nicK1oYK",
  "key16": "2Ab5e1XKkdyvby4aCoTq16xy6ii8EvRJWb6DjM8epS1EosZxwoMLMZe6EF1WKdFQvoJ5zJJdVPFeKMGLMJ4qTVjF",
  "key17": "3kk3BknNFfWp3pXR5tKijkc3XmEA9LZcr6CeDw19LAgTrTn5LFwszBdV9AKZKGPcdE1UHZSq5vzbLxfhPaJV4eM7",
  "key18": "y9fq5ZyCzRKH1UnGPj2uHxozFEsoBg5UVAiMhnGYEg6LXgiSvN763McHZ9KtWcRTpQTkq4vzPtQhe9BTw8DLVmo",
  "key19": "5dmkAK3moxVQfPVuqRjXCWLMkDyiXiw89pXgwudXR2mpRWXs9eHQsE8JsHH55sRMoDDqSeVfjZtM4RMF25Am4eAb",
  "key20": "5GtFWBVgLqacowDXBHfVC1dUp85AGQFVssxac2KujaYcLAeKbNFDUSo9sDCf9aoGSPq8qBcpgr6VAAfrbzN9cKXx",
  "key21": "5wnphPAWoBtvYmYRaYvFiRFuND5BDJMeFu35eE7BjrbEDCcEMEqSji7tzxAmAWaEeC9wW6kd4n8xcxEsXZsUKihN",
  "key22": "3HPLWbJjcjQPqSYCWfPH1VaamGdRgEfBfCvNhrwqYHFn37nWeLEdXXs5oWpUDLErj3Vquyk7AtP6RcTEdnHUN69",
  "key23": "2YjE3wqsfBhGTHRjEWvxzJM917MM3RTdXpwVd9fniUfokDMooaUGZo3BdJFpwKKvJcLKDhf9FCCwHQxSrgCsyNyJ",
  "key24": "2kauiQ8Wpdh9updShgF46BF4ZGpzE85XkfdvziwmmsXFcRhZLd2QALBZhYioWwYqUCZLfjvrR1wW8FEXTvrM5ocy",
  "key25": "4Ev4Hzjw9rrfsuZMLfBzaq3YgBNGRzZzSWuHR6fynfXGPVTEt4hHTu3iBJTa67cQcmG8f5eyHX5QMZhY8C5mrdb1",
  "key26": "3tKMVjDQoE9jbV8vQwpwwPy1W2Wn9x8gSqHF5LpixorqeLHr3gxCRFDfi4WmrvgaQoaG4Vu3q7JosfbmHNCFySuo",
  "key27": "2Sk6sqPubgZjdebnNEg5y3bXz2D85wc6USL3vnmD1xY6A17fw2pa7sDGVomSn72BwVb9e5SsQvdRkiCCeL1PPXiK",
  "key28": "3YY9PPsmKH8zVvAff95ZGmHRTiSudrLiFdsomDJ27Vftb2sTDBBJwSLketVJ8RgbjGw5tePSYcUUPLQkrGptCeqG",
  "key29": "32Bnt44UQgmXhQHAHyfA587i7fboRYGNnP4uf5HsNp7iAxeSQ6gAME1rDbjLCuaWivaVoM1C6XR2UEMhkRBXedf5",
  "key30": "35et87DyHm78g3VPsesnMBvrM9txB1r4KrxGkV3JYw7VBC2yMHxMXKddvqVqUEZvpSS7MYcFwHUFLZxp8kjBQrzR",
  "key31": "67bt6qnvHuTd9v8wfamB7qxrPZb5uMSERVzudzmHFJ1T7Rm7RgPAtDLcF6FfSLL66L2xmFj5NFhnNkV2z2jXnDJ4",
  "key32": "5m7q3krdgGagVXCBA2Mf8g8pty7fse3cLdzCDqF8Pan3PfLNijvB8wxMcBxz6Smz3is7v8P4m688nVheRBznDmXq",
  "key33": "2GnEzdAQq6sWS9xQPDW1qNcWE7NnUCwver53az2SQyogoVeSRaVKHu3PUPK7S2qaa3gkanay27Ghgdw7Rjet856A",
  "key34": "5gszgMDQ9GqMBD4Xczg1TJzpY8voiYJEbDwGjKnp6umJxBCBe9dpEDDqaRYXg5Tob53Ky8Sq97Rsoercso68PmF4",
  "key35": "2k8J2eGFdpo3gf17nMEYR5Qz2EvwVaCijVf8C1PcGe6akRvMw5ekc8aF6JAVVbZjPPQ6og1LfKUCmMV3ML8fHyjM",
  "key36": "5jsXDkL5f24LYhjHaD82qTM1r3e61SRmZw8bFkgBdCPiF39q2EXnfaiLkjaihsCzjs2j4ZKZ3zSpBbxJjC8wZndQ",
  "key37": "4QxM9ic86R478mAwZkAHBoGzi536CdKCa1eA4U9EvQ2Vsg9x4BdgG4y9N1v2jYAGNwRNH9i6QTo5ywAKcMyGqcvR"
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
