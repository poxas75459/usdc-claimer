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
    "67m6vvdujsBboqpeTcubYNvcE3Abmyzc7AmNdCQ956ghvyRhAKXbzaQE2bAjmeyucKw5VVtNr61KpHqrFYmSaeEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eNCpABDRs8UJQPb3CpcJNGTwESEt4qXmbqwsu2QwhyZfSvP6Zd3jbDXxgRC3tPheqSNVBRikTohQPoUowdWAgUA",
  "key1": "5onopEGCPjMmecM8ECJchBq5vZ8ct94DwwQVEz2h5dyfRSgX1Dmt5PUGDTYQyH1zNC6nyjTkMP1vaWHw5ERykcCb",
  "key2": "cGic2xZ85j8C9agvdT9Jy4Xe3kVwrVCQiMcFBpzAgfbtwyPh6isxMFyfLfH6pQYCCxv7Qa8WGGQVRTMuQwyfiX6",
  "key3": "4ADTmWYFvR63jXXmWA1H5Mj5eQha4NZmigSjg8Qc48GzMniNwJ4afgN5aMfJacLK2tdVUx5XPyw8UCLhf53YwQPq",
  "key4": "4m9bae66nU7g3KMP5LVAHjSu3dp5VBWtCUzDYFPmhQeanvffP533mPGMrCxKYDLrq7J81aHRUVcLeiuXUaNDrLwG",
  "key5": "2Ex4u6D46GXvM4SrixvkG5faXfiyR57GtpAALV2QdqhYAA6qd5yRkBU4NDhoDDXYPFPoPjfdbUNtajuEbvtA2wqq",
  "key6": "5KgtTspckTTC11P8VKyMhSDnCMbaL2FupsNs3bgd3sDXyMqRv9wYxkCzqpwLKcQkk3G8Ak7n9XM6cuBnAiMP2Mvy",
  "key7": "4qm3A2rxphvxhgCKzCJQzkasWodH9tYzLsSCKz45gCQ3i8mVidcGQucGnrftxV8F3VBv8qdaujBvCJREyAsm1yw6",
  "key8": "4wSZ2V6oRDCq9nzz5Q5DtDkSSd8Me6M2zWe5knha4Xnh2YM4s2FCqkNvcSfoGdD4SpTnioE46BjczdE3vjnfvWBS",
  "key9": "4Evj1nnVJytSjsX3b64XV744vnxdjeoUsSW39Thg4WbociUEwaXUB9jhhvaFSMsPzVYmyxy4xYmSNDmqnA2Atk54",
  "key10": "2X7rmEGBTEX2xiXmBUFDzxMAqQQ1w55eF1c5keBDM4ppxRqMyXN86nz2UxiYCFTA4Cg7qewUineJQeP4aJ4kKfza",
  "key11": "3Qhp1JvJmnzUi3xPUtLF6CfaHM1DJVeo6ockHaMTd8sYBtxSCPNwypGApEDsGZFBnGYHa3Wa492Ju9avngqKwwTZ",
  "key12": "Rz8SdKTdtS97UDUopgbEzq748JtDtNPfw4MnA4kV6dPvwNwuMDx5Uuz7qG8UTEcMU5Gahgm2qz9CpcWGGg2XSEY",
  "key13": "3mX8p3pRukFe5A2W93ve1xHrqAnHNr3KENjeugGcKas5GwBPuodyjiMqZtBMgaGhaeeUkyxTWCA142bLY6WqSmb8",
  "key14": "Na9cTPawGecDxYFHM6c9MWdyRV4DMFvZHAPsbYDUKdHePeWKPgMcrzTyeCbpvcwWf92jpX1j1LvLM5seNuLNbVP",
  "key15": "4BqqSwMp8q4vq9FH4yt6aoRncZjv4b15wFhjJvpuvoqenrQmM1Tp3moGz4jzqRN3FrKXGgZHNxRGZuYjTL4KKuhH",
  "key16": "nZNH98jYEsdBMyer7yteGbwvL34eGwfcUWx18NxELNMGXoSCL9WgmBJQUGe3i2JbcV2Xt4PHvBn3hFT566T1hW7",
  "key17": "2qkKeqBQEKQ9DrJCCuRzLnFjWYCH91HqpfXc96QFmG1xeM9bpZzuVy5pkxm1QSJ9KwA43VJfqpNXv2iGAYuiRZWw",
  "key18": "4GUMyjNh212qsLMCPwzqMmyvSYNiVW2CvtWFZoENRP8nqzDXDRFYJtugYisW8zVMZEeP6f3TN23z1ra5QHX9qztp",
  "key19": "2UMCBwEeUYgfnhH6dnGL15VcFSMDyknsE9jwZi986FopgdxxWwjrCd39NLEJnvRx1tYSJXZ1jwNGJp9iZG7TzxCU",
  "key20": "sYmofDzu8Su6Kq8Yzb7jWqXQFkzqswX2EjmUef4ZQvRC7c6CjRkqfbFD379Ymz54yanewd2mocxpXh4tZiNKgpn",
  "key21": "4adLEKGhogEwGDLxDY6FS46sgFQXC4GKdF1DCzqCdQpMUFLFNFTzvvJzdihrGctQXJ2mcTBJiQqqpVS1aZwauifo",
  "key22": "W498ZTKF8CsWDFmPzfv4vKXpm5r99Fo5DEkeuLe9PjjneAE3aA2UJUqo6AS5zPDyC9fgCLxnESUtXxHXJxrFRiu",
  "key23": "5ziDUzS9zbZ2JfCNvZwX35RaLeprG6Veie5HMwnZLdnpQc4TrcT112mUkC28Hgfb48dA4omiVXHxCBnUfT7itak4",
  "key24": "5sGvkXeceBJfR6nks8gNeWfBLrjzUDuWXZHQyRyksTHSrs8cRX79Jn33ZkGf8VBQ6qfRc3e8wMnd9CjAsbsGkoKM"
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
