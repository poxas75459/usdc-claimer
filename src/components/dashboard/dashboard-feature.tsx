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
    "2FhbPT4Xu7H3xhYiAaDNUcU1JshH6LcyZiaQef977niLETkqRWwkG373bBqGQNbJrgN21GBMmWcrUSXZCNjDHs19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KKxt5C1ZUVQU6b4GJwyPD7SNPU9Hy27P4gFnXy4azzJ3dNcvvwTWa1xAVCY3L3hetYshzkfJuT2kiZrTzkgkvFq",
  "key1": "4oDdbFztw7CxNcHxzDx9gyfmRpRvxibwYeEZGim3GEpU6myWc7tQbee6sS8oXwqWvLq18JkDggiFRuzrYDBBNQVk",
  "key2": "53mjQL6QRSgPCArngoNAF9TNrEAboT76DZoxFgeDsz67UAkJVHYunf78dJ8zCzN1kHiXrT8D4tcBYcr3uEVVJAh3",
  "key3": "2hJMJ1qaXr5qmMYkexJvujUt1fbPVakUh1hE7GiWb6Sx7oBV43AykuJJ3i197G8jz2FKeCyBVE2AvgmXELPzHuN4",
  "key4": "5cMWQV5SwwCBDj5DiXhGstgPy8mBastp63zPJpUekeUESzZW9BcXSfrZ8bethzgbptFg9TWWAKYFG22zrJ7HxfgZ",
  "key5": "5QZPktVBx9Dwg36UwwRS3bxYRcgE9oVGuY1LTMzhX6jYCf6Y1e81SBMrh7K6ZQaKBTSxyTrZYvVgc2pmBDVZRu2M",
  "key6": "4WrbYT3Qw4e9g4UJpfdnmDJnFGgsPyfAcp2wJLQTKLkBoQi9gpP5VBx7QMcmMNDLi1uEWysn82jNSwqiLNrsoVyf",
  "key7": "hb3MwZNFciRHr43rr28YjPwMTqyiT4LVuUKVJcuF9Ntht7pePVSTsieSzy1g6ReMJpSKt9tvzGzxANxzsN7vcNv",
  "key8": "Ncx54JKiMJnoxhLVousSdgZBX6LfBMqd2oZR7N8SMUJxi6FXPagXRt8sprMY3nLNTrvRbpY5yKbUV96S89NyWf5",
  "key9": "3cQ1NpYmJPBGkEVULQRYLhDKDmQMkgPZjPRBmzP9UbMJaueDukkxXSSSpZRc1mdiVaQqdnGSWx2bo7U9Y2auQVzd",
  "key10": "4vgpWLjgWCn1PCQQodyLMHgLGu6cVwqcrwvtprg3JjkmqywpCU5mAAfZ1iHX1iGni2y2wBGgj6Ux9VA4cw5pD9HE",
  "key11": "2hspTjp9Egeu8yXJgr6bB4YhmY1XHjPGPtk4nbMEXQdveW7nqGmaLjQMJrX1m4pT7GVEcRZkouKtQMDxgR7QrGDD",
  "key12": "BC7rEdCxKFeBgMcNHXHuBrfZ35dkFMaFHQ1i4mh7obviCje9KWTVjE3jUf3qpeJyyvTGcbGssFuuT47DmBAaEP3",
  "key13": "4VjAj5JfWTtPAA9t65sJDnMmgtsvURWymZCWrop5HP2vUFtmmq3T8VyNCpoBxesg8uxEbSgpjvJmpCsgan2bcbMD",
  "key14": "5ZdDfCYbqnS89xt9oidysfhGCaHBXSmRTrf3Jh7y6YY98SBXMXsphfTq1MDEZkvBvjagqSz87cvtdP7tvjFPKWzK",
  "key15": "54C1Ev3fqWM2pmqeqTPNsB1aRrQvYPZG84SVUwXsRmjcG4mfJtBeh7GaLESr7eauGgD5R9MehLLdFzjecQ4vBkVf",
  "key16": "Pdwhc38ogTatayPd5xYHAtaW8Nqs3DxYt21pKudnGbYEC9W6JVntRpUYWqmqCm8L21ZEBSu7HooyQveXPHDX4qU",
  "key17": "2u1fzuuhrbHVsA4rTZBWEhUJvCbSPLH9Ts2vSVtHeAjeaDopocn8Ho4RwjKhErTGmpLEMRkCcyxiRP58fauq1DHD",
  "key18": "5cSDmi2S7nLPCwnrzwHDacUJqAfZma1V5ZWgT8gqjhon1Ls81ZCWWac3xCFLBKQgAPPjMBkc5PMRBnA7F6oveB3h",
  "key19": "2Uj7ZPQujANAQU2hPzgoNGkBHsYU4H4dR7cgNh8iEqR5UN6TvedN4tZd58JS85UiF1sWxbH7bv96MdvrTYcP2iPo",
  "key20": "3NC52ei9KxLkkGCwhGdrAwksuh19YzU2NpuF5cMJYWpJ4Jo5jCHVMyc1o4EJNu4eSfiMDpBh8VMxBbVbbwGKp93f",
  "key21": "5V8B4AuSkzj9iXq9BYruALrSq81QwuKrw9P7r6NbWtT6A2dYq2yxv54oteQGS9Txh4sVmB8mit4rGFXop8dzsg9u",
  "key22": "WPFoFb23FEkXrUsXVAKBCQe7uHkLB84AJubdFXSxSXUBtPBZc1oHV34mdZWh15Y1AUwhGE8LXujdhKfMVVFtuCF",
  "key23": "47GbQzgmgXxyW9iJR2kjGULUseMaedR3ggq388rZPZ6AtVMSZBT2bCgA5TFAtwoxjC8d71kZm4S75KPGjp9YVJzq",
  "key24": "5dKtWv5CJLxFWMFR3YT9Rayyo1PhUVRxLFnJs5ASgMZCB3NP3y5TL3C9JdngxrTLMun24kavxNeaR5gxegU2z9ZH",
  "key25": "2FYN8J4FmQzvh5EbyzG7Dbnw966CpkpaycoFEowTcSEoRP4rW9BNB72ezvxNAC9RMzEXJXbZ6UDWni1yQSJrTFLQ",
  "key26": "4wp48nfh5NMaPSEYL7mw8S34TLEsqtL2PvSEcdSQFEeYvAEBoFsfxswX1rWf5nzwxPZG7QogT7kFN5W9fgSBY8w2",
  "key27": "4pmri8g8fV817YxRR8yYHoWTZmGqD9s4rQaYxHUc1tjTRaXoXLKuTPp2DMmDm84QoxmhUodkVsz7D3i97A1kEZeP",
  "key28": "2VprT2nED8xcrjVBQfjVVAFosi69C3xkZudQuYKW9Wa7KZLoQvZiTTx75RCvkLA7pED5zVUxmS2ZNoAN8R1xQhj9"
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
