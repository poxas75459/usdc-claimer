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
    "5HUWuGp3W46g41Kr8UnbsnNVTm5i8Pb6Tc6MUp2WjZnxrUSQUJV7nGDbr8hV3gCQ6nBHdfNga3TjhMpCZoCCSeK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fmtoqXcAMA55KUhPayWhuwHqBxxsEey7yyMcEukyjn28d8kax811SjEexAsDcLuN4KtE7XSw6iKDTRTjgZrxR4q",
  "key1": "HbkCkZQwzG2P84HQxqhuSLonqbpBtWs7qER8iyu9Mz6iAkn7e8S1KePBQhYqQg2dAcmqM7VyfoZfhfNajQHsikb",
  "key2": "5FevsNHp7J7ezaPyxXjn1CA63CzjHScjkEAZ4mAUhcegaHPXTFZf54Phec8xhZkb8jXA6bytm9CZ6j4yVBSSbu6a",
  "key3": "5hvMBRmCZ2utC1qiAhsPmBYnvsA1pBmb14ApcjfB81B29j4xNSX5eRF8jhrTixKfiUCaStE98HNZKmiBN5G3vQaf",
  "key4": "3iPt37CoU8jBRv8KBMmRz9ffuPXUgTKXBQatXaEf6bGCghfQsjySgb73AtDsGJsvxTDrkM6xaEEGXaYiN41owkNd",
  "key5": "411P1kM4CceWbAQ379QCJtnjJvywYsMnTtb8BF3FcXU6h6nKn4qtB33DCRwvQUuwTbKcuvXcqDVibEQ9Cvu4ZgUv",
  "key6": "WkGGacqgzJCK2TKLApdRVFC63JmHUnw22J98NyFoSU36WCuSzC6V85emp3nJD6GMjid2rgDBw8yawS3dCAr2m3m",
  "key7": "2bqqDL8C2jtVk3pmK4KiZwEucNyiURNpM1CM4v1CEDQitbYoAUiZrrzAqUu4wcz3kz69tkeNbDLRtc3J1B6K2uFL",
  "key8": "47uygdRuLnW5rnkha4orpAAKNQrtwReQSgkk58D2HY6yzjnDJchTdhcaBWsVTTbxjQ8n4uaBqfZR3N4LnLJFiFP9",
  "key9": "K5aTCTAewaG1XqxBKhvFhDPbQS7t9tg8zdmfaEHbKCpc2jafRZS8XbPRfTtkYvjGBubknN6LQpjBv6jy4XgJ4ZU",
  "key10": "iqRgVbcSULBqAygTSZKyc8gzF6zesKAwtrfRMqnimNVns2zgnzbPjHgNffsmSVLRnGTUdJc5WKVvXgjdksFXQjR",
  "key11": "34uvUey7MjFBjenqbDGAzGN5vRKzwozYVfsJa7Gy86BWH5yzdLSWv9VZzx74x2qTgDsfZKTEVVWhBQuTK5vv2n2u",
  "key12": "2HQo1JsGj95SnXLfaM8v5kAGJZpWeRLnBnhcFrVZodtYgQchF3cwGR53FJAXQQY21VMoAYxv5rofeSngM48SxV6L",
  "key13": "jtDQKyJxhRDFETcxZgqMfvqmiQgVeyxzxRP11Q364xgHBSXUZn4pbD7u91LrHnC8Wh7VR1o3MbyuRX6MjkkohAu",
  "key14": "4wBB3uMfzNre1bULAmqrMxUTycojmShPDAhmpFwHVcmn2Gzcz6XjDbBNPqqe6fTPVCr95XfbY2dHJ4dVBKFSgpzK",
  "key15": "4FtqADHvNmb16DhTsvTgmjdkcLvXKekhS12aEmPu5XAeiRnqwdC4Akk9dEPHgrDBZJMCSgkQRdcu4njucSaSyc51",
  "key16": "22K9JNmSDGbenjUWYmxBRyuJpDGwiuLyL4vxaFWbqnKZqQTsHqxhb7gKDnmgoaYfqYhFqB8h2ButLffddK9z3NE3",
  "key17": "64SHVr9t6GdMd2DcT3RA4nEUwoD8XLabLy9ji2VzWvjsHVXgj5yS2kwiEKWWTSs4aS6qdkEYddTgDLKQG6chgqq3",
  "key18": "455qufrYo4TawaCFa4gWRjQeYX7bTtZK772oyFLAeDj8aDXPsHF9MDVUuUPseG5Lnd5zdxWbWZCNSpMADSZPSiBT",
  "key19": "33uhqQtsWcUNgtqzH7qbRPsDov1tERjnxuQLLWm7otTfnnsXy57SLJha6WRC3hJZDVV7VY4TifynzBSZu9Bc4467",
  "key20": "5hfPs9whRKWCvAR9oaWsuoWzGzPH51sYHYfbSwZA3Q3saHiRF7E9u9YV8itqeboJtz9oU1XxCMt7uLMFcg79VeuB",
  "key21": "3qrTkRRxJ9p99QoMQNfQ4PpJGi3UQjrw8vr59i4dAe9PSMCG7i714VHt42hcM6DghaGNrXs3AeuaKG9LANp9raWa",
  "key22": "5QfHdGoZXrsdsxZb8KgwgKEeYKESpHn8Y39mUhAfWL8biepD1pGDA1scS8B1VSNK7Y7J9N6UGDsYcUUBEWnJ37ak",
  "key23": "3CV6iPEwiDhBLR3CSUJ9AviAqxsAvob9pzY2kG1XYiGvP5VBfxjFBnLioLVjYu6sWwAzJ5ZMkfgAKquGjbFUz4SP",
  "key24": "475E78o43EFk9JwUZ3kdZe8R9VLu6m1yC2bZXYk4uG9oyqiSmPer8AbSsMWGrxvKx3ibCFmpZU6jM3Jz8Jr6U8vj",
  "key25": "33zX2UvS4GSVUbyusoxQbw4yK8K59P6SXot793vQeoQF6sempnYmwyuu7GynxoCyC942XbahRn314MAjqxTUCZxR",
  "key26": "52P1gUoG9asdBZGiqVWdGdSVEmE8SaGgS2Arwakg4vgh9RDSnNBcTQSLxgesWrq2xA5RyVTkfsYUtyFJt5CCGcPD"
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
