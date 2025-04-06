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
    "3mr6vKwEUgtMCVeVBqYtXh5dTRJyJPTcC4rGQbvbRWG1myyVyLEXWC573DqcpJK2UAUnhvwPPhPRPAPnnPnsaERM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZSYz4oGUmnSSi1xPnb1EJCcWcmUru2bYhPt82h3C65uFwWau9T9w7fSLAZ1jtzrgmXPs5D4z5osHJB9BKY8FGMc",
  "key1": "5JYrzsvKkCwddpa9htWF7VEq1KWeMseTYdu7nXxC9JABN7Hpo5gBc1AfyE3FRmJtWcr2dvYJhW49iDarMhcbZBkM",
  "key2": "5aQUqTGpfx24qBNRJUz9ggXUf6Yayyn8pFA8oTSpJozMM59TmCfqMBfHdWTstAycjaDNWy2BihcwP2yFSQugNiuT",
  "key3": "37oESBeM5NQf8C7WGHbtx9yqzfeU7CkMbqQ6rER6YHe6YtGMmSb7Pgb9MavZQnjKAik6xmg8GpKrYFMAnpw1XEKr",
  "key4": "21wQa7zXaLgHewB8xbHTFii395CibY1k9y5yNhCrd8ggRdYLbJQE1Y1eB4LFEMjq4vjxhhp4rF1CBzhjt3cXiWr4",
  "key5": "2FRrzA1zoCuT9LZ7RnBYpue5SdfpQhkscGyH8SWhes4JKEXYAXqZAh8viaXLMBEEx4tWAHu1CdRttBSRwkZNt6ES",
  "key6": "2F5JjhF5pbus9qu3hywngGDsQhoZazRwnH9uFcuZTT3EJ8goehst9Wo117fwt4A6jRYE2eghgr3UdkTm6roQuSQx",
  "key7": "2RsicuUuuMbCiG8fzqvXmYuq7uSbSTHjkGkCWJPct9UuJjPPmQv61je66hKUhiLotpzWeM5MoCuC5rYWE7PP6kt2",
  "key8": "4dTfrKUGhvHFwrZ6Eikv51sv3BmzsjC1jafkfbXvPKqADsHzQfpfVWzYgoDs49Z8EdVo9TeWg7E3Ub1evcMusMsH",
  "key9": "64co8ZuiV5GYNjk5A8q6gUc95GzxBf4eRaQQhHcZpmmwewCEwwXjHLRWCYcJZCXeyaNPaaQec8oVxy5WSUWtBrNk",
  "key10": "5amu1bugZqu2WQsJSsaeYB8Qf9ejbYSWtCeZGXkr2nUQw2oGiNR6dTcxEzo7FHZZSFBRFc78QpdVbp45Bhnqmihd",
  "key11": "Bvaxc3asySNMKceW4MkiAW8d5FWKMaVSaisYfVAxjFcN7nxC4sGkGbT2g4Vp6s1zZPEmnc7HerD9kxUsPWSbqvr",
  "key12": "2avhbTgY5EMgLkJhq1ENPfRxfQb3iGzkzxTLNx2Un9dUUktEi4Tb4vuzEF8CwG6wXCyN48ADGCpRHEyXiMawTYf1",
  "key13": "5vKEvozgeHKxKHtiQ3Hj5nr7eD8CFzLc2A1kRpW2n5v9HUurdHLTgPBrzLqzEWiMmvew8q28RWKugqDxLu2efGnn",
  "key14": "445MEh8Jxp9MYxe6ZkTHDbS6zWECbPkVknyRUtaF1JTirVd6HhGoeRctdwvXs1p4i4YixajEJ329QT5z3pwkJUej",
  "key15": "3AeSLBBQX59in7qZbBP2WbkmAFrtj78pMbF3EsmXTbVjsSv3PJmoACZcwfW8LBBi5KrYqzFxkJasp2bDU48aFyH2",
  "key16": "2FUhw3xGDqP75Hizf1iSp1YwLasAsb8w5kbLvqWjkpsYxdZV6Nh5yNPovFG9Y2FztzaLJEBSrgjqkgc52BGXXp3V",
  "key17": "4im8cvqf3zspXMubXxYa8P7q3g918QnfFRZk6qzuawyTZdtgwcgW5F5EouPVCVhqXe9VoCqWnveE8hP7U4J854Ah",
  "key18": "48ewFTd1RrrTaM9wUgRmdiaxGS7D4ZWtH6tBaH2hJiHgNXbYjfLqzJyNvvk7hnhthZTfLrt4c7H4zTx2BvEHDLKA",
  "key19": "4Dg148KUCRGH4QeAeDeSpSgGByK74JibDiyr228EL7p238jxq7fLGqKFWrDq1VSKNACNSuVjAZBnxnNVBhCVU4jN",
  "key20": "2hC7KmdNfZFGjYeiNG3ZneSpXM8zEKXpmPA72jvPmtJU2N1q91bScAUEkb34CKmZAidfg1Vx7bhxy85QatUwAra6",
  "key21": "3Ru8ehqT9ggevMf3qo6vsQuWkom1sfUrkV9nD6G6w3M4pR37LkDdALNzUFs9vWFU18YgxsKcSTjciiBBtgK42QvA",
  "key22": "2yEFQTw3fGteK5Mr7kgufXLv5BjKMJzDfY1XgBY2WFM7NPnk4CpShk4K71RyTrf9E5KsEjoqxHFwkV9RDnouvJTq",
  "key23": "3TVJ9Q5sZB8FZC1Jo63p3j25PhQUh1aLLPVCHHmnbckGCtXJ8QoAgWubHPTW165BPmgvdLE4bJnQEaZK81WeADhR",
  "key24": "3KH1ByaXZN8PXVstakmxKQUKSB4dpQWGSeeiGXVtF1wa4uEBn5hJxvMUfuYeBYaVndaa7DzKRNU85V4gv6TPHR8C",
  "key25": "3twnr36Gjf6PnLP8Xk6t9Xv8LKrnBh9uPhGaxXHg2tgwWHpxucVVN9Ek2hiVopcszNQSG2KZ178pCcxvT5Wx2aCr",
  "key26": "2JV7dt9PCDdHNaesouknZW8LpboHwYWFfb9Pf617ByuoCqM8DqoeKuKjfqbqXccdWX6CGrDLa92EjQvngy6YxwZs",
  "key27": "5n1rwxTNtyAEZgP6Z8thd3Htf1ZHjituBWDwbotZPkvdjgtkMfgz2thktVvrJHy44apy7m81VxQuQoDPDzCg3cox",
  "key28": "1C7ZJP5ggka7mFKcgwCDGzrcvarv8wnGfPWLcWLSe8JDgvooyNS5XRQqTrE7jT9XUjS7PFjMWpMnYhGakezbsoZ",
  "key29": "4FXEMqSvCSEMLqf97tVfw2LDCbUVuWWrG8BDNa9JFDYnxjmXALEmmSK9VxYKWKqmeTA3DLTb2d4FXyJ4y4bf9bxV",
  "key30": "2xLGa4WfRjQjWd26Hq7d1nb7qDqzRJzvp5Lvx3kTZHmjGxP5YGFVpHPsduwbafueqK4dyexFXzZg95oCcsx9jZQQ",
  "key31": "5qU5VH9Snk68N4WbyK3Jm6wZ1ZVsC8BpBxes6dGP8B82oyc2ueZEx77dkGfRfh7AWcMQHnvh5MTd3899aULPznvd",
  "key32": "28pxRXxoPhuatL1Untv9QgN3ff6VxVFhDoLxJqvKggch7TDHKVVvRRW1nhyuA5YnpSM2ZBQ8dUQnEiC1atKRAFdW",
  "key33": "2XRAVYFsWQCEUFxLgZ7NsLGtsqbY7qzDh2REhnz7RMvrKvnFxQ3RrXZVE2Eo5Mj6v4uctpCkscxsdtEuknxACSY2",
  "key34": "4Hoz5YLbdwXV8PMQGYTBMmYKs4nvF8oN42cQR7rjrfdfWA8GzbxoabVGhigCvDFHyHmgjB3P4m9ALYHHXnQHzm6w",
  "key35": "5rUozHhm8GeUAi5c1ykm6d4GHziKXFy2oQFzANY11qtXu54fhsZYYeo7qLHbMBAdcg4tfaaHgLZpeNQt52itY7LW",
  "key36": "wHJJ6iLFnLmYqsyqwKBVibTxHAMbfjj177nvPtvn3SE1fmitAXpVXB4tds8DH1Arocx1J4thzTn5jKuehGZWjMC"
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
