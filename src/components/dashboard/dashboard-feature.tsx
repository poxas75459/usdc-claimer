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
    "3mfiS9aizGNRVa69ULYa5PmvYiJbSmmtQk3iEcg8KoWEd6LTfv1dWDbyc9gYeubwUrcZASJtVzAXkoe6LJxDeTq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bdz3HEUAiwQ7298mH95nAkEuV6iAM7sDYUeuivYE6LSJ4V4u7vj3sUeTLLtm9TVEDCUTTjSZnGDzVVeLKJug8G",
  "key1": "3AAj1y2xpcYecFM1xjqtM1dN9wbPXLcLA1R1bJgPLxLL6XWd9BXGngB8WZeSBFcr4pFejTR9SwGmLQkWbF6DowBr",
  "key2": "3RfbNuMJJz5nChojQFdiezEyKv4c6o2ZkR9ZYnGrKpdXzThdiCYANiY7HzrqPuSnUpqBxrNfSm26KnTP55riYBda",
  "key3": "3CCoiAzog5aVmDpCFqD6grHVR1RxTxghU6j1WPHuHP4C41XGkWwAk5PB3kUPkzXCqCC3fjfcLHrBsSr2HnWJTavN",
  "key4": "2suANSf5uh7oMq9XBPaMt4QDauosUqgexjksDmW88DEBr3SqiTenv6M9yS8oyHv7eWg95pheykNHdkDw1cLhpgyV",
  "key5": "4Pt9K8ezbNz5XKuAZrTwmQYGwNFHti43mSuMdVfy9iTaz6hgDNr8W7Hd5ptnw2NERcWR99o9wn6SaS6GdAnQ9Qb3",
  "key6": "2vvQYnyworhvTnaADbjjCJ25AUmwsS19kfJGSfF895WXr3yq2xgNf6xiJrynqi9M8LNbA8A2b18wBT7JrhQXjAzv",
  "key7": "5vy3fRx1eRyYpwq4AYyp2zP8o2oMD9qcVqd1PccHhePBKknzYuMrJTRVcCrrbrzi5bL2mavE9Mfvxqk7D7Cqm3aR",
  "key8": "4HGF2tCCriKKtLtvG7BJJreBPDhDZpdNVPBWWAuNBuf7XyvXUEkNetuQDbtjRV4h2mMTsNzPvZUdyybpNADkDvi3",
  "key9": "32mYqWL7o7vMEn1rR24JMuEtacoz7gQWq8kHg5WFbEbHYUzBB4yWUcoMfRYjryzfyn2AmGhnZrpw25kVziW7is5w",
  "key10": "3m5gay6d7XKgZMTfScnNuWJNA5cGdYXX81DoZKwghWY2C4BKHjZEorjLzRtk6oD1dLRWCBkvr2Zh712SLzhKawbL",
  "key11": "5QppbPisk4sdVoNkmDpsQeUaVr1q8Eq1YHkqZY8R2sz6enPY4tmeZnJKVdCyVUacafAuVHjaVJECeDxWRR68RR8v",
  "key12": "5eTFrmYrnqLRFo3hadAyoBE2ZQNHKd95U22sxWsoALdFsdfjzUpwCcWXQ3D8j61hvYzYJmx6jGHpKdBgebqioywg",
  "key13": "59hK1N6GNN9mqjPUSuxcVVefoYp7AcH2k8mGfWQa6j3mWAPdWX1N6w4zTraqB7ixEq9guz81PLChaSRpne6fAfZF",
  "key14": "591pxdq3cq4mj26VqjkYyu2EHZ4w3DmgNDg5EjoAHHFiQLPmvMyLBtRn2GiNP6sw31XgeqKscMdDQWSfJTxHAkcP",
  "key15": "3RyTUHvUji83CmAfiXJdJcVyHsjxXPGMa7ZBmLk8z5jbLQB81Y9GaYWJvHTdc9YPSHk3BEuFnpr2f5zKEHYnCA1w",
  "key16": "2NT5ddTSGyL4ejo4uSeyH4fXLz4rDtDdBGNJFibTM1u361Hsn9YKhsjKTq6WVJk4PMUzFRaNjyKAiycJw2msdYFG",
  "key17": "4LvjeYUubdNYq9RvNLhByYDSTUKhCuRfrEe7y4RPnhr7o5kea7ejzSmpM3veMEptVbWsFz5kAAorN7YYxe9M3Bjc",
  "key18": "5XCnqQMY81571bHsd9Uc3Do7Jg3Q5VUhNpPeNC946aKFDz9uPCrjAFDH5yKCExtZBU77Rz41R6sfHAKPkgWK1gjt",
  "key19": "2exWZeFWTbw1xpbm3bhys6jnsebwMPaQ4WoKc4RJkxiPYCGtvnbPc3CQSxZTyD5C3TSRJ3op3n7LNHyQ6XLJAdYx",
  "key20": "5536m21VMZoMMmFuqZvpNaD6EziRY14QQgGmubiEZnJzue8NN5ReruFkpc5NtoYoELWH6ij3pez3PcNfs7eZxY8G",
  "key21": "4emNzRunikJPhwHKJBrYa3PZGhXf7cmpC9FdbSSitXRVC6mTMG4W1ZQ25KcKb8Gn5cCsPJ6X1Yo8Tc4XvU8uTZWX",
  "key22": "7x345SzTmqKq4Prm52G5TCX6qPvgrHTvuKMWd7p8TrnQubfMCMxqZJPVW83roauEjLf2ZpepBm1MkZCFEU2QeQ5",
  "key23": "4CZBsJkjNiRDoHxoW4JyStsgELsef4pRpqPSxk2JvAK3ZC27cLHV85dcnLUpcz1kCcdzzF3mu8s9KZA1uHuZkv2J",
  "key24": "2vL885BieLiCETWrBTRmwU1Esm2Bmd99gGBJC75YBw3zXLk623qoBhdpbhd9H8AcbwKUbYCbJ5P1Yig4p5H2JFuX"
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
