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
    "5H842zf5N4JQAvvUws7pFi9T6DfA5JBKoftpXh5f7TSVC28yBttoEULUca7S5iBw22Eq2gwGWdfTrHMT1totfLFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21VN88nM7hxqSvHEhoeHqACTGzF2QkKGknf8oFosdxXzS8unbLg2ZoHhWX4rGu71CynU9UnCnZ4TGZeKQcfFVKKn",
  "key1": "jcbbMAwBFiSDpLTFGJvZ94eVzuePVgn1GHCUSgo6du9auW1eCn7Ki4JLWDkEruwD2c2JDGT2skcB9yLAyDEPSnM",
  "key2": "2Rxa4UhcMv1opAhMknb3mjf7GQ3oVRrzBstQhuBL1MGsQyLzMpdoJPUByKgWYcJwxwDjwZ3hhq1Q422yXdwUoBzR",
  "key3": "5DPD9r96CdGouhgzgBUZSSWNpUT7Ww6vSi6qncEzy1Rv9woX8aXY8Pmj1cVYB2opPnGMrUJAeDRsjoHmQWFhi6wD",
  "key4": "5LXCeHJy3Fhd9xF6VGaMmWNeGHEFz3Hqsh4bPuFAL3YREPbozFPrbk6MK86str1nPqegGBXLGjQtCKXC7WA9VTat",
  "key5": "2NvYp48coBuGHLnbwT9NmkBwPzEf5nnnysVbGACJUdwTbsP9EpHZkAhAcYLTuk393NfK6PF3jQJgA638uvRMX8s2",
  "key6": "3t4oJ3BJcDNLGum8zTtVjJNcvZQCbhFGrTY4qVH6zEVvp4so4oxGFmnKZ2rFdnvdS4pp4wgKGXwec9HqP57GR1L6",
  "key7": "3PxR7AMqszHr7eRJDnB3HjBhYdeKAU9foLBFMKhBRRaHoCxmdYNEhkvRSMtxDbq1Rwm3Grwb7uD2GoxWmcxUt7qv",
  "key8": "5H9AiDhuqEDr4j2KBnYHiKbocu9KD8Bsba8ZFeAcQHauUChs1NskCF7mEFriMiEnTFxfoP5tZ9QBLqovxSzD4X4H",
  "key9": "5ZNbFWvFdr36ouhLhjM1Stg1kXW7pdwYkMTZzuDar1y9Y84igpZTuuu7S9sAGmh87vegt9TCCS8UpVJhNA4UQYb5",
  "key10": "2FnNhbWrNLGY1bpJeRnztHkpfxk2548oPtEm3JmxCsDvYLcbVYXox3Uha7gfjTb79XwMxujQ2umfLuY6UsUujoSN",
  "key11": "7AxRGrcu67JE6KTv5ZHSbYmWXh5wTJRH54xFkQm3z1gwiB26o8RWLjaHa3tPnU6GBVzmkJeQpSK79dqbve1iFwp",
  "key12": "4KWbMDPdAt4AEeDYgHMbT1cvpfzbLJEnUpqXgV2Y7C9s4eDvmzErajNci9Y7VuEBmzvSrdHFSx6eo5f7gAy7a7Kp",
  "key13": "483CmLJyRUbZakSt3oZQ86byGLTFxTtQNq96bwTCP8yztGUFHzTWzJrr1KJnKUSHUXxF34z44VQbi2DE6sWu3D3k",
  "key14": "2N1VyJK7r8gdrDuN7YeXxY4cQzRq94Rrqusq7Ui5kqNJscoVMD3UcTaPLr84KnbztzJy234wRxx4PsqmurbXjV2t",
  "key15": "CAmgJPaoyzaAcKYh6N63zznu54LfJMcWrZ9hujG7xkW9iFXfrbAotSZm6AnU7kGabWt4VxjM1L56JSs99bG1nDZ",
  "key16": "2QsTMNwGcoWf2fusvNax6vyWxgF9vPpY75McHBtBNyqKhXAZf9tGq3hgjNqVenZcrQQyov7Wp5irqi4JR53pH4tP",
  "key17": "51gj6qB3U9VFBZVZS6BRdiFo4cgqompLir5p58TG7ywbbjxu6myJ3xsU9ubogvSNsGMJiF2ZzqP6jcAB7gXjt5Vp",
  "key18": "4TwenZA1G3FHVnR69Tpw3Yaikh8QYgzWCjaVtMEMMdTzjre5kjYGdggCAGfis1jYYEoifXxuFQyQ6zJ5yNpbZYGt",
  "key19": "Ku2HpZkTsyaQYiUjjxse1bqfJ5qQfu99K3QHUVMCjGo468fCacdSTgdrsoRtChqQtZJQQNCVjhgJQpfyrF7zC9Q",
  "key20": "4A7vUJv4zJRgmXr5QcA8HDPL8uv9AbKZtDD6A6BZw4hr3Bzd29wmRCmKQpB9d4vwahaFUoD1H1k5YZvtwAL8K944",
  "key21": "2heN7Zd3LRwWmKQzck4SMBiZ8SAdenZh5Gxi6tmccidLmrwYyBgm4UGxDceikNEYHEvTBv4eY12SxVLFcrmZhAri",
  "key22": "5LjU9ntiSgda6VfTcPkPYgR6hrufjNEtwgRC25YSyUWGMuTuqXHCQESivRDRw2TYns1QeKXzuyFNCdUEJVBtXbM7",
  "key23": "495McePrDKehQsSUNdZAGBRZksBtEFpEJ4R62Rv6o9Jro4M8jvZRmawit18gU5JLmB2UCFh4ZDdGfCic9sDUYLQb",
  "key24": "4KtfehG4Ug95eKWanJUMQjSLRDWCmmhZej3oW2DmcCYbgyT7n9ykNv22ep1yFAwg5PjkpKfyXcaVeKeDE7DkD7i6"
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
