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
    "52HYee5DBwvpVWQoKHWhGL387xzxYzMSWndzb4VPfpcPFLY7GTW2F5KyWfocVVGqVL6jae7jTa3PFZJ6jEp5au4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AH1cJjtyQ9XAHc66epJFmg7hAzjS5H9UBNG2HN6tLKekSki9g2PtmsF8DcjVmznRunyq3QjsJkELAkdcEUFjBfU",
  "key1": "4JpLpYkCYenXkzEkkAFfhEWwKpPeK7YowcLpWGUV2PTQEUfgAkHxYbwYaPBwaSZzBgtKzDUHtyfWMpPyDacMYDwi",
  "key2": "651Z2asDwJL6UAWmCKKp4smxX1odnaUFgnULqbnLbjni76ReGeyfhfZM4u2RukV3syY4tHMxKKGGGcLc9qr6BnrE",
  "key3": "4xTMPLUmxVCF5x6f4SQNhhoFpKY4mr83SEDX7rdYBSSjtwYmTU9vgjGLaah9nDCgfQnRxRsa84QdV2RZeDYZADDR",
  "key4": "53QqvLisKwQjvxdnWeaJ99u5fJP1AEuUwUYG5FZ6TFGiWopMgnQ3zEk973drYVLuxLv8f3KwGEbNnEPAaygyKmQR",
  "key5": "4UuTTC7gLUVX8KsKwmSLmVKXXZ9rJ4pSmssoP9e4qmW8u9RWwif8vcVCCvxoWJ6fesPDwoToyEudkMjgoJwaRgdy",
  "key6": "23iHbwaEGvAFx2XBDXtJYQzBbxbSy8FjZmxWynMhoc6ad4PBchYpLgDWYvLr5wq2BE9KUgWJGMGiqstLhYm79QLF",
  "key7": "3cfGH7NZPkdwAmeTbZDN32S8V9ibn6Vam5f5jkSnmLmAfAffZdvapRAZNcPzw3KTK1CNe2HCnsUTxBuJA9Z7Zf5V",
  "key8": "4AoN9o7rDnuk2LzpFsufL6cW1zs4F5GL8uRWWV2hQJMf1vctmAus8hfvynFkpE2gamQJw5D7MmuBJpTwK2QQBu2R",
  "key9": "CAXyqv6815yAXYVbE5EEgFSuULrq3Ub2pGLyvshjLJgpkVBeCFVtfKoW1i3uRBVxsqyu3VdjG9rWXFTpyRFuoof",
  "key10": "42EhJ8RDe7YYvzmF8dWbJvJZcLdAbLGd7akuErFWDSDRnXJ9spcSso5tKMjuR6deALB32CGCT6dYCHDkfu5d6Md",
  "key11": "3SFff8vT6f52cfU9VPCeUrjfWzNcUEJ3gu9cfDsvbXjSid4uhPDbDGYM2RuyBSnSRdWW8Z2DaZmRqNMNYgYQ8Tgj",
  "key12": "25uoMDU2BYb4RQT3FrH6ApdgqnJAPWgXmhjpufnjcEb9aGjsNzjXhYQx67kGqKK3n9ssQwtzhVjujxHM6t5tT6cF",
  "key13": "28pmrGL1qHjxKHPDRUMKjmB5pNT4nSo22SCEcUe4BPJeZcPEr8P6inAW5CSvPg2rXCrY7a1uDmzMHc7WmmTVC8Js",
  "key14": "4WCUoLaSc2bEziJJq4qAUo5xDbRptqMF95PKMMjSycVYMEf8cSkNXxYG5AouKefLbqkUno1remTA75qFyN8kW9F8",
  "key15": "4EonZcuqoKLk6pnASzy7UaCEAXbGZ5D3eChCSuGm53mzGTnmH5WNphxDHy2sTfDZr9jY1MWE2fJb9UYGULBCA8Su",
  "key16": "G7cy87b2gggXFkAZy6NtM9dL5cM8L94NCdQFY4AuAR6KWP9HGejoE49oE1bYWA7KKRJbZNwGS7xBAWnx2bDFnXN",
  "key17": "2HRMcEj3q2KPqshmXMaUNUY3WJZvxqL8HKghCpYpSGH7YPkVQZByYwxMSNpJnoXsiL3XrHWHKnTgBGZSSo4m56eQ",
  "key18": "95xZdsYcUyaciSTXpJV9XNkwwC41fe1wzXjZK7k73uAQLEv8dgPferkT1ahqQSuNkbEeZFfdVdr4z2qja8zkAwh",
  "key19": "3Eo9yxFUezUYu3cq6o72XB4sdEvHQFUirhesxP6G3oj8c69rPiEXf3siw2PCHSADRswmbPE4xtakej9M8nEUecW6",
  "key20": "33ERi3Ykyp1zFGZzsU6PuBoANv5yJzGDmRALYFqNdcVpuoq992LsT67NGF2eBge3iug1ekWSrSw6FsDfVvaM5QcN",
  "key21": "2V25hwtWJPJ3RTzNCXkXv4ZKfS9ykznnufMcDMVsqU6UrNwh5bV29P1mv7x25puQHuagbd8qJKdyLf1vaFhxQgL6",
  "key22": "3A9kySTPXTfJJ2cFUzMAF8or4YX7JARu91SituzpQ9EvaxkSpmiXADsUtb7s8Mgr7AGSwQRG6yjomfu9vNNp6Cyn",
  "key23": "2YqL9ZHRs8ErdNnzyYRVTgE43FQjFarBwZddnFBEufZZLMWvMNRgPwxK8RTPCSPvkKMVubYbkCNAEwMcgPXRqsSP",
  "key24": "4M328k7vvpn2K8PasChkLo4EXS4fGevAPxJKdGVka2jaYrbp3mvQV7x7Ck4q1Fhm7tuhuE9ZJ3iJPQdT9SkQCphc"
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
