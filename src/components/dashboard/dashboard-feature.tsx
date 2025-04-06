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
    "4WbdU99wV5EmaT6ew548sovYFRLhagn9kFCGMMCjW3SKM7UCRRRoqeL7QtyCKxn5tXXf4cA9ctXyVf7xkTEKU93R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wJ5waAEDQsVauVYZP3MtZjUW4RQqw4Qo7uT9TQ9NkGYLhtEfBbd85NsNsofyYiR1P5SkweJakespcap83qCgPJh",
  "key1": "5LvfFSvbWWGF3Lq2yiKA5cNoCTgvdm529BFDfTFcq6JZFtkHRK2oTMuma6kD7NNN9ZJ39HRN59nFh6uCkFv4BMms",
  "key2": "4UkDFFUraC3fc8wjykiC6ZcRNvUcUrTJVPAeiUf4zxS8y17mTo3xNuvcy5PGvHgAUcuzcWe3Q49tcP9L5vuHKp2Q",
  "key3": "5ciMijKSPtwzCFaME5cGQfR8fkG2S1az9ThCNJ7hwMcEYYQL6aGAqNfMj1MaDRSuCsVBXKv5oyoBQQ8AH36nHehM",
  "key4": "2wH2LfQ6dBVvHcr67D33PcC6b9ksugc3J2QwmabAkPnws9p5wEyCDTcPzMHVo1kPyzUNVexnEnLSSc5suUQRMqtm",
  "key5": "673VbA9pjKLHFQKD1uL7DXbF3CEQ3BuQKg5a3H3gpvUXkGF5wtBSzBCNzMwd6cD3jV3uqBNBspPb5SkGrTDeRvrL",
  "key6": "FkdmqVunAzkL3t17cf1FVFp1ZEuNp8prd2Y5oZJPymobd91qDGVzxcbvFsXR8NxMCDy5LxZhaXpzFfs4z6Fnmkf",
  "key7": "4BZmAEoBennmj78wVwducDtAp3pjCpAZz9cdXhb92RKDzyJMC9WWNRuQ2h4NX7Uu5CS5andCFfoyPYBJphRG5urH",
  "key8": "2F3quz79XphCgN1wDphpMbF7CbFKkzyCH9v7n9Pv8HzEwYZfWGopMVyAiFrNjDJB6sbyyG3os8f4EtaJyTc8hWac",
  "key9": "3qAJAuDGkNbqiqMkPSCpQcraKvi3uUZ3eTdGbPtsCbXQx89TrbaNiLG9HawxxYxb8wQEAfxrET5Nvc4cy9cCihbB",
  "key10": "5YG5KQFmsHQtz8nR92MpgfJcpNQCNttHNnp1jxj8f4D3pBKswryBGtQTEfRs2pupMkvSVysvLPBUtBhpq4bCLez3",
  "key11": "4GjpRhPZmi2pwMnFhDHVaaaietQpw8yNV28RMCumAjjBQAYxekg1XdJpsUJDWkqcfmXJu9iXsju7ExYpHMRPcX5",
  "key12": "2pTk8kYK87EwG7HGqwfC7HMFLppabyghFoaCEchyNVHxvDDadj1yH5iGF6bf9jzmAjGYYXGxvEhTAvcGzZzWWWLD",
  "key13": "2ZUqZPs74zW5KHTVaidjTbfmm8AyWGXo6MvfUTNEL7EYW4rhJaY7Pbqsu559ncxxJRhHqodUaQtmbvg9if7fbRZb",
  "key14": "572hC3b5cZG5M8nY5T3hM6HxXg9VpRYM4qApaN6PUbVKCPZpKRYWChzwgtdjQBqhivYQ2eH2GxQLwYt9u3Xg159b",
  "key15": "2uvLwZS4jihiLpyuMMnmfHdab2SbV8VuKxJ3jzJnRGqFo3bqaiis7TXPwNZZjCYf3XrkwzSkh5KUarN7bPmGNkW8",
  "key16": "2YbdgMURxVP3mzAiZaxVsfTBvW3f1rzEMs1ynyC6PEJLhBBCkvky5vZxzAZzY9X3MbdzHVtCvS71ow4L1ob7T7V4",
  "key17": "5SpK7svXrnLytbrCgvWNQsaGt42ez7rMGeKPj88zoNp3wGVuwUFgsDHchdCn3V4PBoZQwU9wdNgtzS1TxUZ2Ynkc",
  "key18": "4jVJ4e7mJbpinjn3trXzTA1KGZ6jPFq7fVsc3atK9ETr7VS295D5eArQZz3vZDvi57iV8nz6thktaJoknMqFYwuH",
  "key19": "4o6qVi8TK3ANmdW1V8G2mJZmZma2YAqhqiEGNh9fyHVA8knoR9ak2RWZAtXB7ooFTNvSqVB3YiCT562jAv6if3Zg",
  "key20": "39c1kfk2Wpvoze4oTNGU4MrBsF8fZERNESuSR9P2BQRquj7E9jyAd52JVsH4ud2UAPUaGBKBn84AudwiRSTtTZHs",
  "key21": "2RvDoX2iwywacDts4E633cf6DFfBLJeDdTyrmyoVcmELfumaEE5hZu1f7N3w5LtnHLrvXnLnBdjJvjGh9VRu3khA",
  "key22": "3mz2Dmbo2vtXebJbHvxJF2Uf4R6GDDEBnwoXEk8jxtQZz8fFccqSKbx8opZA6pk5CB7AUbtoddP9nLAzaU3fyWAQ",
  "key23": "3D3FG335Xt9stWSDdiyhvd7sUWHyCX5gbexap8W2tjA6wPr67c6tkuosB2kMZbheaPXsTFtC9FN6YgzhPUaXqkja",
  "key24": "2k5ZwHLDkiSTNoRkdzr25R9EFeq3NwAhraLLtH1miE8PbpnHgNZZZiHrdRDJRDARvHMUCvpYVBEJGLzvPg6nnMuN",
  "key25": "5TjwMPtNrWe7qrfWGNNP1AvFDQLeqcnVk9jWYSax6j4kyCYoR6yb16qkFFzTkMyP1ZZQVCCVFcCHoP8AxRuNVQLX"
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
