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
    "23UQGPfN2mWp7eowisbQoDcs3rdiWrUZKHXvE6LY3JvJXS4hufkYnamqHE8KDGg2A6wDmtMMBX8J7vFUgY4dG2JS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ryANo3EqNjUnDs7n3kCGAzmZBT9zrpYo4SNZQZ4NLc3HDJcGWSEJCUAB22632EYREiaXEdVmPLKcixaHKDLyomG",
  "key1": "4HXQ66V41DKPFNAMXUwJvaiCafuu8LNxeXhHFndqPsv1qYdm7Ls4aLF1t8ThZvCB9oaUfX9WYspmu3x8iTqJRn4a",
  "key2": "QTngAAofz83SkRRWVS3Xu53DVqvWkanc8SD28Ho37Ze2vt65FCsnRj5U1y4NojHMgiupsPrb1eXC543vTCLnqM9",
  "key3": "4y3JvLHxmwtafSDzBJEKKdnyHJzSomaUB2v5yAquvhh1LfvQKrVyAaw7U2P1fM5tzRbj3yvkrpQ9zfduKK9M6U9w",
  "key4": "2h8Ysxo7eJ4vVFnvfk1ozErmfdNQFYnFrfkQ37JuDAxmjbqFtKdRudxSMHJcX3fMcKMrtgpon5FQcFXLCBgAt6B5",
  "key5": "kLBq42t3GCksSmnwfjjsBNB1Gw8YzFFrpDWRpRzTbuwVHjmj2qPDhGv7GatneTrAfr2EX21k4WwzesAqzrx6uFC",
  "key6": "2NPC5UzmX5whR9WgbdUvdNcGouwrTLPKVXCtbwr5raijxK4epuZjyNCDYMmLbv6XreSwR9z5PvNwYjWBX3wSexmV",
  "key7": "tQd9iGGriDsh9fb3T7wAcxgc71PTrxL1YFkPVj3AzjmQNK2ASMvEAoyf851T5UDNjYXLFjQ4nueSdr4kCzSbgUF",
  "key8": "4VyTuVcSG6Patv9rx4DmeUcYxuvpLD9a3CRiMCWrtDSsSynPTcmUCrrScYkvr9QL3Ei3APcjpZbyqXczfMZs19ha",
  "key9": "3v2cWNUH7fETvNfw5GG2YGDTEQ9qUWjipcNydQhbvWgLY12tLksxfVdgCFfCZivENXP7CXUSTWU6sT91pQ45bni8",
  "key10": "3fhFZhZhYuqe7pBaWUFKb8CW4vFRFvymSYinTbmCb9nsZRoH6yhnhuFrJs2M3WrTtcDwugPQDHPzYqBiFHiVu12T",
  "key11": "L3yyNK7pmJwvmLmS7kEFsWRo1Jnt6vaD8og4pjfG1vsMznbfYGSmppVZdJfecHYrA5D4huTsja4Q1EgaazJ41Xh",
  "key12": "2De13N5otVN96cJgJggNYhavGgDfoutwmyUHgoT7BpSD53zQ2znpymfWg9kfbun7Ug9GYkiNyMrQCzfyLo9u8QeL",
  "key13": "5kqb3NkzUxE85n5hN7f8xK9dmgxVksVnBFFV4fXdM2yXddVpkgwU4tfNPAhABgHyYunwy65U51o9U9Hinsj5GJtB",
  "key14": "3wLGbsMFnKUvdENyLWjkBejQoDfpQ7oxrGqpgUaFb5NaRCGnh8xTCmWh57RJyS2rQsXEpnC4ZzwbF6fAJgjGXfnR",
  "key15": "56KjpLvbe7Egu1tQyj1mamAGLh7n4NG6gb1uotgqGjJSCYDW4NoTXrg6tpNYoGKrJqupugJbMQyeZSv1qYZXrgXs",
  "key16": "4axPpT2vd2PKpsxVcBinx2k4VNXCyuDhxDV6kQEhnC7hNLcnUE3MkMFNv1CUYG7CpastYvCQfjMSJVGTZMPYsX7y",
  "key17": "3NZ7GSbif3ppxiYrM85pnBHfTqS9YnFzM1mmYz37viuQT3Xaie4AGP4ecbGrHWCSrFveL7BFJa4FETmaB1WpLby4",
  "key18": "2AdeEoBWwvFZRgaRXG5ghdmNMdCnU9hik3qX3WoVt35zqcgqZnJd1jUHta67GkQnPtqVTkLb1jW8749y7jYADpAP",
  "key19": "3H7pzTX2wmWMMeeK3ErB2TadH1SZeuz1ueQ7qcfbmLNYUpBb26tmgf7GcUonsBpNYmLzWFgYAMhk4kdhVzChdN8o",
  "key20": "4HxZQBGsxRtnAu4FGEkGFvivcWM52j73tpyKgruKxaREQevQrGLTsUkB1WLLtvEGmDnS57k3dhfrRQWzVuCiK3tg",
  "key21": "221fNHd8nL7AmJGageMjnA15CR9MMbkfGWAwhTsK72TcEmuSAroyH1RRubgPy6fWZwkWik4wH1V6Ne4EFt1YyXxh",
  "key22": "5WwKcofw7dQEfUWvhi5kDqHVzEiz4jfnWGAoDBgkp5gmEUbbPNDAfqsweir9hB8Der3DS87fZjne3NtWszPB3RnB",
  "key23": "15PWygpN46Au1hCnC6F3L1kPqmAUM3iHejyupMXLs2jfWxcX82GriVB6LBY9qQoAaSEYr2XFeYa9DXo4q131hTm",
  "key24": "3fhQuxAQDkdpCigy9TS9ZRD2Jgn9rKFrfdFTH6JFint5CeTbpi2it8NT37Gtcszzi7az17Xtf3Ng1kv5xuWhUK5o",
  "key25": "38iy5myUiDP6VUxAg69jiUrYr5xAF98aPWpX7ktR6pve7pxpok4ohhodcY8gBTsvmKuBMsCu6uZhBZswTbQ76z9T",
  "key26": "4MnhCQtKouBV2cEKFMDPzrm1KSbkC5SpX5NMJWEHsPJwzmn9jxSPvPfXwwV4rU6ukU4LgUwug3Y18U9vua9qmL9R",
  "key27": "429kyPKHW4ZTJZXA6HUgzaKsypDJRzXDMuG8cc4tGqhzd5Paj5pdm4KkjEjh2xuds8rJBqskn6uV61jceMjBZZQU",
  "key28": "2jaqWWYVR7anHTmvfdcVPdYuucrKPEQDChUNsuTtqYyRtNsy73N8smHiqxvE1jKWti67UyZNav5ErHm8V6iRyF1h",
  "key29": "yToVmvov8iX1AjkqpeyMwec5YseHTw4VWXQ2iAeUAf3UmAG8a9tSP37iNDCkuU1ipFBZaNpYXyjLkB7Nne2sV2Z",
  "key30": "3KCh7ptF5tvHrTueX9GZkFAu7g42jwgjpFBGpV9oR6cCimfrLpuBq6s83vxCpdBi3vd2bQR8gspMPL9ye6GZsZxb",
  "key31": "4EmfdERp8Bu6UTQ6ZpXZWmV4SfoTzPfmMZtXKkLQx9bEFJjfJa8vznMuYNpJq4SQYwHGGwD3h3KBikDdR1aX2yAK",
  "key32": "3bY3vU2vRP52nNYM7FsYEZn5dC8Y4NfRZTDT6R8amVyNS3wMqkXqavT9CjY5gV4GiWmmGdnM6f5K8wKvFuWrTfrL",
  "key33": "3XDiRDtjGFWbwWQsdLGNLZB83SpZp9CZBidyo9TEv9xkg3zpAiPu5CUeSt2ZBrDFpS3Kia15SLCpKkESUHfDZXWE"
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
