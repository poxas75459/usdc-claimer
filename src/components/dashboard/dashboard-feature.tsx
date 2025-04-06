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
    "52qkxbxH4LVDhTBSw7aJdXWftGqFSZ1n6cEUBL3APm7LkuzuYQ3YehSiUTpXY9rkEywFj1QLKbhDZSdy5bWLK8va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bYzQPzR4kTb7WauTo75E8kFAHfHUh3pzg7aZW2exbaspzMCn96UGwP4sPmXsARDcAvxuYFHRu6LgEKxvqeYfNpL",
  "key1": "2siurRMeSD1NbqPBeMwgtGKoh2xYREUststxKVuxMfi482f2a6CYsUUD9wG55MHKyXKHdV5GSuN2wKvmxwg7fX2G",
  "key2": "ppXhr6wnkzE4N82PX1TkeSSZSEhgt5jPRs9FVYevrzyu1U4MCfyStDzMi8Cksg97aNDNFDVnrDecudathrg7ZyJ",
  "key3": "5fg6MkCkyxJwZDbWnqJNqETgqK9i24EQFeSXUwDnZjB12GyRZWMuoUf7bV4Lg36H61GjZWqEf1NfUD3f6kWLVaBg",
  "key4": "6urT43ztNNCtCzC5z1Ga5y8T1ivHenyoWd6wMrHZtNmLAPbuBwxCr8faWjCgTkijKkS15ftASEgU5LuRPXYkZjL",
  "key5": "59W5n5MR88Qpo1YD9StttCYMBSLJFAwd7YhTBxWeMW9q5EuCjQhZv6ZHCaPdtjxqMf8s8suDSyDbXHRRipw4STKc",
  "key6": "2KcoTtuJBVqqx6Ekh1Yr3N2fUN8JwjB2ohvKdoVQbaGUNVxp7HNh24ZZDvY73jQiev1o7eT1ggCk5McSLUeu36gp",
  "key7": "2fmweTZd1AMXTvxY6hyoFaaeuJe7APKBKkeiUGnYyQ6z1Sz6mfbtgAwztjcvKybWvDVPcuf125d2FPAMJaWtg2Tn",
  "key8": "5AXywure2EFekD4N9UQwzxJyUgJ679y4M24YJFtFYXcmJnQwQSZYEA9NDnY8uQWYb7ZmwWAYJZysF8Zs2UAawj21",
  "key9": "28r5p5UmafUqUPJ2BBL1HoMr1sw8k63S3LJPzMyegZULafA39eWwSRy1fum2e1oFeVCppDF2f5aFSWAegXhBvrxJ",
  "key10": "2Y2XvqKpb2xDzhdgymr2FWya2vpBg7vsfs6YuLCCqbwqLGg6UXFuPMgXvVWWKXX83Tq3RwJd7ZdbtPtr2TFT9dCN",
  "key11": "BRXkhGQTh7RuVVw52Evsy3J5MwaftNCodynUfV1suDjVkxUmVQy5RtBdmta3LZ2Faq2gSYRrrxg4LaHQaJWGHEo",
  "key12": "4ivVQuUzZwyxUzg8DZKbXrVUZ6fiqESbXSjYDyTufnb1ewx5Eb3cm7Kyn8t3WHbRmrwjNo7i1d3NrCHhLHCE8i8X",
  "key13": "qyX2jvCjQpjYcxnEv3UPsezVUc1QTHspvGb24pKrtJQnUaGKY5G2sx5z9R1L7T3P3m6s6HXkvhwxT9DmpXsodp2",
  "key14": "3TwszCWorKV4AuczWQiwvFq6gnqio4jccQKBcs8tfAwLNfiUp3FJvtoVwkb3xyKK7asPeBsy44hJ6UBWS7Kmsgb1",
  "key15": "2Xdh1rLpSUqLLaXjUymFejQo7ES7TkHnZ79Fqn8crpfqM7yXvnZ8ucRcB11SXz2WpYn8J9L9skSSGMUZDxLokwXn",
  "key16": "ggSdS9VEfjQxjQJCKF5emJq3aK26Ac1ke3tUs3SsNNocHHcMUbyKKzgen4Y2AstszziBTYAz2tD9VscVS2XvvES",
  "key17": "46u3WA7DPHHjGAvNBW92YwsS7hTL4QN2w6pW7GwpoxxdGSYsP83sF5Mfb3WaNiNWJ5HG3UhES5R1GDzqZsGsUXat",
  "key18": "4zhARmBWQ6CuLzApb17njvuXkZU7Lt69migCEsvrdMLM2Jrz6PKGRhEWReJgr7Cd3KhnRqy5ZeG42gxJC1txgtY5",
  "key19": "2fm4pe1wsRcaBxytWR5UdZm6vdTF4hkuARBLNtiuMquCbgR7X5BbsEzzdof9hPXzqNt4Hpz9oyhF4dsY9nXq5edG",
  "key20": "4D4SmNEGbrpcpNeMhnWDitDYUpt49CYtcQgGtDWMMDbpjSax4jsg1yzR9KgbR9c5uEc91Exj9jST6LqwDP2KcE4x",
  "key21": "3okQLaZhyQhYiS2nKMjAmyz1fLbZcHr6YadryNWggniVeQ4hpB9cH9bNoYwEmkiFW1VXUipJVxkDqXtFiTM7tT96",
  "key22": "5ogpRgRjsW1Bjo3TM3QGLacxWQSFtYRut4p8GQpGpRLBLt9rN2j8p1qwDJWkcS2UST4s5NBk7RKE9bqjaAj44wFs",
  "key23": "4n1uyCEH7Qh4c2bf1WD3g2ePvuzY8ULgrs6yLSprbrACbUzbbKTQah4aNggAZK4ZUuBwYmf8iERrkhqaKsYm8UPw",
  "key24": "3BRrLJV6pJoz1ZJVFeUh95B2EpeVkK4rJ2U1hU9xGBp4WHc7FqzTc8GR3fCjzQCHDBb8jsavrG3Zkcme3q2rkXRV",
  "key25": "588MZCZUDxHkPGtZxY2YYA3znWKqCkW9kHo3kFPkaLTHCB7mEQZjwdMKNHgET3tnwox4nHm5MqJzHvhsErC275BM",
  "key26": "4uRpbSeYZZnd9t3z4enopYMQ1q9QJB6nwrF5ekCDGW81DDo5EFRcvT5aPv5pUWsuwNxvP6DdU2eTDtHWNsuJnMZY",
  "key27": "D6R1AmLvmcedif4kgFxou47GARC4NzxdtXYpEZATafuiA7qX7xBxDEzsp5nKp7ZEKbeCTr43FqXxFcfKG1a86ve",
  "key28": "3sDYp5jJUCXqHFvs9hhh6xzGfghhH3PGBTtm5PyaCFpeF1YSf96VvPbYd8jhi3nhHPBP1t6AJtc2S8rtz7WZ52PF"
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
