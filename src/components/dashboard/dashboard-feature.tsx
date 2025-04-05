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
    "5UQtschDexDMBt8Hd1eY4PD2s1duEftFq3sjRobfyAs1G9U3Xowp34zfnDYmQw3NNsmXythvURx58ptz6CRXPkBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eqx97SwpKfVt6v5PXpiqSNDwGXy8PNBCdeYvrLLiARMHcPFZsAWEZzMHfiq3PwZKo9Zig2XtFmUrjjW8ZP9cuWe",
  "key1": "4XzvqLRfdNADBK9ksAuRY15fLS7p7hgW7yAGikRDCQmNfg7RSGyc2X1MZ2yMKBQ36vQYaH6oqiroiCPFiKVidRA5",
  "key2": "2NRKUFzGMVFFo7aF62kazKVJg19fgddC4YZSu9jgFWNih9hUML3z8mpp4CsLmRsuLuyF6dVuyXte9vi9NZz35jXA",
  "key3": "ojFxBn4eRToc6G26XGq8unDjDBGMpzHc5D95Qc936KbJ833gbYvDetpSUJCSkA44YwdX5JshHyHyYYo8kr1zaB9",
  "key4": "5E1BuDN454nUK5bBUfwCg6p7LCEmRJ699DKhQRPEivpg25Gj3QTR4CaTZEqFsRr2RJtVUkDoy6UxusYyb1tjBhhg",
  "key5": "5ezodBwWP7HD71cKdvL9BML9ux4SCGH1KK7bKptmb6LKfLUTQnjEQ9YJRoTknuqkeTRk7HfSfqpdrLmSpA56oR8j",
  "key6": "GCyi96mjnKRA4vtfR65LQBQHZ4hrC1Wfib8xCUQRTJKwbDTvPLpF5oFj8XoWPJfbKmUgBiKAQhJUj33RyQxfDMm",
  "key7": "2FSEsA4LZ1jFapc2Rqdx3F9ESEnAVtTMdDdA5ezgcJMokA4fspsd6EYb6GnLkbAHfvpYePd6prbRJ2QUtXx2Wfnv",
  "key8": "5SLh2FrW6qPqiXKPGB7cd7u7v2ZQd6DqSmShvuUvwvTY8TKGVy7FtDsNehy4PgjCdDLc14PqfsrZrxA3hqpvSNTq",
  "key9": "3WXWoA92Gs4qtnwn2hT1brDTK1BZETmS1LmmgmBY194BoBFmvy6pYbCpAumW4tZt2u8KWdYLXDftrx4DHbgVXCMr",
  "key10": "2DfDGBNcRrPvTTqaJnyxcHknHgck3oUtG4ddoaUA3iU5qWyVeTXAy8AVenAnRaFs5k8ZHqjf7ewUDbr9B9zVhELA",
  "key11": "5rU8k2sLj7yEpzo79HdPiLm5v6PmHxzahmQB6fk6yg1EfrQXANkkj8Thb7yxuXr2tSXZ9m1miTTMY6LHiwbZ7G67",
  "key12": "5wj1nmN5t9x2m334Fnkco3EJW7v6F8C4ibGizq1XQh8hLUmq6M9vVvH6yX5uWJD5cfUBNt5qfK3F2hCzuWgcgg5U",
  "key13": "2MvmBdjYFCy5wRvbo6R2cVaT69p4D9SP7XxLZaCTUECwoCF5Bg9VLwnkDCZ4Dk5XKJ58QmshfvhuU2VtPHPMvG3J",
  "key14": "51h4JxtTFiAGEPxVqPEtA2TgqyJDizrz7VBqxjSNRkmmY4hNaAAbMw92QFgwK532YsGFEFSKEZKURbPpN2caGtm1",
  "key15": "64pZyQ8pw9VgyuCaTLBUqiLkgY31MrMJNJPuvMTPCuvkNde7C6hx8rap5nVFnvw5jhwL5zyaFCSNBpzfRhHrbNGp",
  "key16": "5DspYciyt4DCxgZEoSf6ASBAah3TA5Mq37HTd35X2J7hUqiMj3YFb11V7CAzEYxQSAGfFjUQUijfWSamBsQxFrCc",
  "key17": "32mfNidfCUdZQES54uBRwyGXgpNfWrynrk6k56LsR8XUGsdZtUdpF2ovg7CysCrFCkD9WAWPqYf7Z8acgfjHFQSo",
  "key18": "tJa6cwtBodAYUZexF4hmp3iLbBpsxCRkqqzQDzm57wyDwk71AvkdDD5s2gu2gYprXjeoiWKekmDf3zSk2xATaiV",
  "key19": "3QzZggS9JEUjMg71fRxqp1eetJRdK1wLC9GDxmu3sh1HpHvyGCn9D9LvKVgUnEuFZkkE3GLjnn4d8GkGogEfztHE",
  "key20": "2dVN8JE4LxjoLdwzDk1jop3SYwDMpge8tzbtqxnD6ASVPQTAPtPEms1dPj4PbrtyXNr51q4kPaC29esaYt6fVQ3y",
  "key21": "63YAy58y85eodtzYLRmJMhGgSTDuRUjhKGNMmw62MntXW9z76eYQMpKeBoGXCATpdzHbAc9twCSfHLBaWFzBuWBR",
  "key22": "jaukgZVcPWrVEm4kWDoQxJtQw3ab8PLosxxw2bTo8WAk7ruZ1WrqQHYmeEm8cTCaya5fjvRt1GffTzSiGjqp8n5",
  "key23": "3yuXefMb6pRxMDQ4RoVUu5DHoXYKiAbC81qPGRkhtTGiFLukfeN2wNbwHP5HjAigSTXpTXbnxBBp4cxLxoVWhrt9",
  "key24": "2QxpK9kn7hKa21xZ8u1pajxmmnDjNdQ7iUMZJKgDnzGbnjsFcmofy5EzCxex6SqipeojxmQjPa9QyDY1FoWFYxe9",
  "key25": "5VvYVPH4qWrRGmSnpn55sMEsV9XFVwvRvNSQmXLUBZk54byGZg8jP4FuoMCjazhBzpSqQJfQ1yjp7NMAjmWeWtf8",
  "key26": "4BgoVZtcoiZ1ms3msp9wTwN6t5fNrRWnd2BdsWJTYVQopACoK2wSJFxqWk8yAuhTP9wZFaUUUnLfZDkMHyqvnNu3"
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
