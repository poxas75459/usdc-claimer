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
    "5LkzrSi6uxpc7kkjCSrqkLygXfstoPp5gJetoyYXS5TBJHF3DK3yfYtPmk5k3hcqDX1HNvAzZMALhKLT3zt3eYam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6kwMgDv8RQgADcamtjBEaFhctwey7J6oCvPNorLNpDPL3KVjyw4xvBRQpJByMJcM9eKxSvrikPrHuDujPd6JMf",
  "key1": "49r5fNhrHq5FioJSzz1KgiWBuUKpMUXwkQeF63o4TzW7f3yysHGZo8Mm6ZcBxJ6Gj6YaW6E7Hshef4cJw7wQw4hB",
  "key2": "3659eoA6wuKVCKxoXXwZLWNhpdQUFDV66rPzvtBSjweP9iyxPoP2uzp7YndL3e33JBY3ujTrwHyRv36u4vcZC28o",
  "key3": "43N2FugC9pqzqktdzX9Yvomyu5qegjAfQ2HPVxFzkfzi33RvUketu7R5NxSQBQNADh9dc5p6iRRk7nqRTpZp1Jmd",
  "key4": "3RMMswLBTVjzjcUWboQ4xs8WCGHipAq57MtRoBZXy7cmCER5KHzbUJSQC1jnT7fnyYPYcQmTQGdmRZ26M9vqANig",
  "key5": "2jhKYaLzyNa5JyTW6s8nM75rBNGeeTz3Y4KpqGvcWC3csrxeDC5fZD72K9F8CfHJpMXmCSixjxBPZ3nSTVWpUhbv",
  "key6": "4iKjnhNQPK53Grkve8HNcCg7ztouzdq6nQpMrcdu1TthvHR295rXgwcSePFtAVHm1pAPDDQ65y8RhauXb3EPQ7Bg",
  "key7": "587arxnqdYSkbyySJSTViPQLgTRKbKNBgUfkqL37qpG3tCgPNWNFzzKc2A7m7exKvK6fX39s3CMpTNZ52mR1SJ18",
  "key8": "4qorKgNBAd4GtgjhtMi33e4CUMrkMUCUp8FUfRQqpzcyVxDRYNLfj2sd4zZwwEfxAYZQnDcCFuh71QtCyjRPmAM6",
  "key9": "2oCgcLqdFBZtpF3bN5fAH2SJfmJsYbKA7sqk6aFrFcbiLL8tFpJSmWjkqo59p1MTgMUg9qArCx16UZHykhh2E8zB",
  "key10": "2ybaGV6n96raegDRrykyzEaPeQwR3Pr9edzBmBAcmckFsc1r4LvtE1FTK2AzkQv7jGUB33qJ9sVueZeuvQEqbqtP",
  "key11": "1yvnoE7q5NvNnfrKrHmz5WrUYbCqg8ac1WGD9owp416WyUhrY2cckS9wHr1zpPCCBMSMqecyj2gwRkzcXcogW8D",
  "key12": "Vs6Se6kB4uQgx56MPEwRB84p1gkbrPMETjmjpkHHRnCb7pSJNUbwnZxi9tjEXjVvzbSUuTF4rBEFaLW6a8gg2GW",
  "key13": "4Fi4CQeMpjeWZkeBDswLB7ii2xJVe3TnZfJn2ZNPQXfMytKnYFoJq8vvUZwJW7c6bxhuFKmYmY3iC1eVF8Ypmfi9",
  "key14": "2sLPqutDSmuugw4KLuFLYwx91xvF3APmAkHtLpRBktaGiXLpAPWzcYTqVL9yzyU1Tgd1seyoWXrRQYQaswPn1aRm",
  "key15": "49ALrGuzJ2NGNpBZCozJES22HSJf54HdUdFSXuxFeqaMpQGZQzJ2jdyPuR6RYVqPGiGnSpxwoqiqYBSdRiN4622B",
  "key16": "4vqYd1mX8Nb7DG1CZU8JZevJLGbKSxCA3GtnTCAhV9VFR2RLPXNF4WGX5BdesW5Gy1VyubsfHZCkuqTTwixBxMmq",
  "key17": "5Upjz1CkdMJcxCfDKmuqFoXZ1uV65ym6Y1xCAJJ8bWqRdMXmaSxZRcd3FW7E1T53KxbWdbp7DKc1tKchK4N9CToY",
  "key18": "3ZFMxK12eZW7bt5eYhxgW7ifb3XnoMpC3KdAo19MwyoZ8SxJ168ng8TkhNYhADTubAKRwKs5L847U8NJsA3cXhTn",
  "key19": "5c9L7AXqogkX2C2SPKAa7HFvCJc5egFddikG6ySruQmHQW6tF4Joshnb3mQcoQ3yz1jagziX7gBLsrP9FVmSkmF1",
  "key20": "3u636EVgsz3vvo2262ahbnMxFfz3VPWbNUa8zoxTq9dMgcDHfNNRThk9rNZtFMs4zF2BrwCeffeJrkedMD3uoaf5",
  "key21": "2EJXmi73eRv6MFc7cvdfaYG5MkcjhicBTjpT3cccJ7GQqGJ7uMnn7M25eXztqEpDM23Lff3FVTqVgnC9Xtb9oFTW",
  "key22": "EndViwxMuj6sGypZdmAVdVTybAadiPhV8UJQhjaeWK8oSiKNt2TmugH8YrWKzzj1NM75KM2BBB3HHtmYUqMuxSu",
  "key23": "5ALEh4SDYAHRkAiTEUm1ihR2xGiS8AGjJm9AWY9ANuyeYEhfyRJCDvJjWJyifuDSfKoMvZVv9RbQCqaEFPLkfR6G",
  "key24": "R8z1c6gYcroPTagBPGigj7y1Rf8d4MDWd93v8pgQfoHnsPprkUt5xWwAHmbPjzvADBM9bHjSAmREc3VTvt4dsgg",
  "key25": "wCirwb9hiE9XSLG46wghpJ41mQCCetmVmjAS2PmRtFQYZQDVBRBueokGQj96BkiT8uYV6vSy8hBk4uVHp6NJsyS"
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
