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
    "5NVu8fN4QDPhFZ75FE1nq4DrHJkiT7dMDnWDA7sXBiVGQhwyWNYJgp1RMpbaApK8sbm1tS1bbHknwhPjHi8nF2jN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cQAN8dn53c586J5Yq6FvV871pHkMhMkd1pFUKX7rBRLh8zPuYLweP9LLV5G64YTsC2WEDnQjRSGYPGRkrB2Fp2C",
  "key1": "22sNGcgVMnxxNg3s9EtYjkDjnFVPFZtz7TjuMZWQpkpHRfZ9mcgqaGTopmg1dy65Bhdpd9y3VnfnJNcPDMyFXp2V",
  "key2": "4q7W7K1fHtfw7b6zQobTZZM1eGQVZZj7rHRyvFWyti8DMdEYiPFepAry9gNj3X1PF1YEADS1SCXZ9ffEC5ihv4cM",
  "key3": "4W4Kp77zAxZ4vf14CR2jyL6dnv4WdGMzXCsEUbh1d3cU3cPq5VRAKbH95hnrGjdzkfa8vLbskaGbHgyFqabWtbBs",
  "key4": "2ZhG3uvFnoAzqdu9W3ALWafDsPbdWasMcBfh7ko8TcwEFA1Yxip7RH7UQgUCCX1Jxs71zH77QP6CvaBCzTW5okch",
  "key5": "6nAtqcPJyUf6xUzEd6DAgURTbUSVz8J7jv1rtuqkzavha3HNrF19b7MAPzb7UAsMvdsR6cxpEr6g2hhSeQg6zxN",
  "key6": "3wsmTZpZBFjCq3ceU17BSnVyJMJKttogyfcjNHdL7uvKXHyW1KMSqAAuYkQN5VsAaG5AfHTCjxTWnKkU4N2b82St",
  "key7": "2KT4qwT9osm8qE8eZQcFtpT1waBUeMrevTyTJtmqLV23CRzsmPgFwzngEFG9DeDqTNY7ktqfswTcZPgQzmu5wzex",
  "key8": "2tWgBjregT8W5aVMpKkMQKaemXrpt5Jq8xSjwM7k9Vyk8JBHVSbFw4vzgWvKEfm7VWyPaoJWGRiCN9gjmGPH7Y9B",
  "key9": "4yGjJCHodqFrukXBT2URHxPq5MGJxjXJZ3RDjLje3qjxMQ1o6gKox3yyZdaVswmHnyXWgDdxkeBbVNmHvvorhCkT",
  "key10": "54QHxxdcAFzu8iD7dYT6CAufkJXffcEuUHdGsurg3vHj7r3m5ryD4jLMj8sxMdmTjfCYwPB7p4cXfGW9tfBhuywQ",
  "key11": "2W4fy22CnGmz1Ziaotagxy8Q7MuXoAhKUpGF8CUoPVcxzvqvXbLyyGeC4ynaquJa84SckyostQrtLM9yLY8P2L1k",
  "key12": "do4W6SP77pK5eS2b7uz5R812qDFCiE36FxMYzpdBcuPkCKj65hSUwCVZCbJN8EHwRPPPweF1CYSFxb2uVCoGb5h",
  "key13": "2dnMZgKrkVPmgBPDkASxN5xYuoT5gKm24aCy8uwNTbsiw15LRkfgLWbReFx9xHMkraGh42Tf2y28SNzN3mEu6qGR",
  "key14": "5D3otV7tdKi85Qo7iQoUy7MVcoYzSpt3xjdKbEiKyvneR2UUJMbzsUhoyMDdXmVQLxDPMhGwWf42XSncjhZ7B7Kt",
  "key15": "4bTYD7Wp6NBDsao6yDRwqn8GrZUy8pewXExhoun4oFGX1sCvrf6Vuspa9SXMfqKswokWJ1vYYmWRha4npiXfvJ37",
  "key16": "JYAkfx2TvVTBGLWv1wxhffY4os4e4UvJLF2Cog8pTEtnpYYZy7kVEXuNFTPMBFfXP1wXYLZvMsAS7ny8p1e2FaT",
  "key17": "3guYc6K5JVNkxcmpc7qEEkX4DRKv4EGGMHHgxgPtCqjDg71kG1KRu7vMDjtC9NQYMJ15sfwFuyxPdVZHqhMZ841Y",
  "key18": "3NwTogy2dKpbhqR36tn1a13osgR3QWDtiu6rwyqkoyctnnUifb4ukRofUiG5akpLCp11hHCdqzF36HjosSeqjz4Z",
  "key19": "2RciTcVjZqA5uhgyPY15ubf8QAbJCLoREGfjjM2WWvcy9k4mC6gMcPQFs1Hc9SbgWwLgjjEq1FYn126WthW12roH",
  "key20": "4xSDoe4isVb2QvtYKyQkenfnsmDGUJBpEMyrcwatqWyMYHiQLPDroGmeqc9MgLePsrkQUNinzxJrvFKydRiqAnRT",
  "key21": "4wnzGLp8jePrDqjHC79JGDu5H9cTj7MnDYnorE1Zmcy8GubLf6ufYqBK79bPEWdH4CrmcQ91HRmnmEPjFbbwbjNu",
  "key22": "5RdzaDjxP4GEdcnn5PtcaQqb3WZ9nofkQnjmczjNjxTvt8AEaB8wB4GFZ55igo4K2nRC3R8LLCD125yLmQcsJyCx",
  "key23": "4L6L5VHgekjedraNEhGSeM5Lu8noWqZ4YsFWjUg3SWe7ok2Y34JEZE9VQ1jqn6ShCpqCRfKg2UX1SiFDD394YJUD",
  "key24": "2TEEBjCVxvmUWirpeRsEa6UUSuhw8LcRx8EzyETVhdHJBHCo6ms8FQRYiTA9VYYZrysuFDMHbfuXD3zw3NuQryQm",
  "key25": "5wLF6MoiMmyKUAeRXBWc9jCDHGs4QkeQZCqFvhBqF3S5QxNhTPbdKzzrb6y48r6Z8eo8afjj4YhqC29AQ5RMqnCs",
  "key26": "5E9EwwUPY38C8tydhapzCMMxKNK5WcRY44Hi67d2942XgoT9j8fi3berhYK5EpkC6AGHxTjFp1XHbCxTp49XU3RQ",
  "key27": "3o6WAkVn57Db3Gu1PaAKn3jcATv3bdhQzfPCsoMens3JBoxkgMsHY5T5MYqtGLgBMA3tDtMVsgxp9imuV5DybVNo",
  "key28": "522T6wybW8mjjxNCHJyBxfdoPBqYMw8FvDypnkj7APURsiGGC2J7wWfa375RuqcLSaNa5xpPpjohe71FAbV2ZyB8",
  "key29": "5Xf2LFRcgrj1thEnt4PVVZ3FeWFQkpZfp96fehj27Wx129KpMbWPQbzL9nTArEsw2JYm4Q5jLB7NbA2Yqr8TLE87"
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
