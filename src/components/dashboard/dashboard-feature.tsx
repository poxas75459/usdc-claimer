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
    "HUZdf3CNgxSGn9x6K5LLeikQm33vq49GW1FVNQnZmYgCHQEhJ4HfQAZ3uDLvitU95YHNqCyYAxyQN1QNf9ugF8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h1CtkJXyoUgJDN5FnTBDWGcpVvjBwsViEmzpJhrmdkEgRyYg9JBPLZFJC1t8sizuQZtpey3qQavPu8kBz1UoVb9",
  "key1": "3YjZbsDh9k5sEBREyaAoAZmRosDCNbXexuPnpeiGNbAd2zij3NJQ8yAVmxpjWkgAhcH5Y86FmkwjZKFn7Sw42eTx",
  "key2": "5p6ar6ahRu4zBFV4NMZNR6bnzeZjfYtyMbow73DVtU2hYN7Lm28yriDWY96miDmrVGeWASBkUoNVEkdJhryMTEjW",
  "key3": "FHu3iK7JxnGDpdNzJrgR89Rtep92UPkJFvuGb764iaezthjCmW5j6kxJQezgUG2utXngsRAaN18d5F86sRWhFEN",
  "key4": "5tZsCUeWH2AbohoTqGT8PPnr5hBpPb6i3f6jHFdNZ7wg9uu7zP32GL6vimR9ondvyTZwN57ZLpSbr7XrS7SufeVc",
  "key5": "PKo4GQsfiNTFv6XW9ifBCYkMRcPLFTpieZGHLyjqnhoWeAFHEgSET9qZKCq8C77sxCyjZvCSbUAJWFULeXMDG6e",
  "key6": "5xpCWAyg6TkkZymHhaGPk23zv9RyhHbganGYp5gUPAy85vpHKRC6ptat5gh3Yq3hB2y8Ph5X1hDfB8Xf4RhtEe2n",
  "key7": "52hgBtq1x3hh18fJhxEPder3bKJ4e9RLAvwaxLK4srG2xYKqcctqmkk2XVbdR1G5sSaDEXna7owM2hdLtyFMMx7c",
  "key8": "4s8wETudamjox6QuZHn25KPYLNBBKeU8xzqLUBcqb3SginjLuakx6SSJMxPU4FjYkrEGc53ArutLvgn446knRtih",
  "key9": "4zPJYz4YTPbubVfcjVxMrRpYVcwaq6VCbtHMu9H5GWdcKY2vEikbc5XVFDS1zj9MbZW9ruWgprmJLQuNweraxPhn",
  "key10": "2dmgWnfux7zP2Rez3w7YDRPFCjFczEChbEtjWWBkyQcM1ri4NqY66AiTPXmiP7ooyUw4M9KvfXdB822yCezorgPj",
  "key11": "3Rip7KBmsJjgeH7P6Cx1WQ8QJUAYBFQKJv2NpRE5UD8TSm5Htbw3qfwVHod2RM1KAaLrwE5xEiUKboPHKsjCnmbb",
  "key12": "5fu7uik41sR485f75QXwV4UJx6MAztn6EoXidaa93vr7YfB8wrVx6TWdzE1urvJQXZYkB27qwCb7UUgXsfvF23oB",
  "key13": "5mF6fSXutLCb8DLeqzjNVyUgxUwpCh7nQ7ATGe86V8Qc4VNS6vLPe83QPLxfW4yzGTvPtJyhsfkr3cFviVdFkeHd",
  "key14": "F47gEMQvz9ugEcfVJxP5viKYEeBBFQYEcmpqjyfrytz2pPVY6wyAeRyyx8LsN6XpjL24vLC675CBzhJP2JSxV9t",
  "key15": "4gzxCuQbaqdwww1dN8Y3tuUaW8g2766CH5tFJToPDxJuzwnEKUW9hzDF96exQpxBsQY5L6eD6qYa7BLh87c4EpDn",
  "key16": "2Dji5VEXPzj7wZScj7x2AVSiKDW5VEZ3Qiki3nUmgaKYjdxJo5dm75Mgse1RnUmTzKDaqhEN1fMEQnSF68KaWHeC",
  "key17": "YqD83YbarbJw3R58z1tse45BrVQpsEKfsV2pWEaHPZfrcnj7eZPNYxTLexKFzVpvhVhSKQ464zHYMGCseprRC2b",
  "key18": "3jrJ59iyHt9pLEhn9k1YkNqa8Nh7LWawNsSvGkJBRW1TAyZQhtUrGT7ydCgTtYfdu7pa1TWu55KM3fJzNuAqMB7r",
  "key19": "25ZpwXmeTC9DdJKMt2JACeU9ddRwQPsbLBNg7SrV82KuNXMHEoFb3RhqNXTt7DhdTxHufMLrCEHVYkX7pDiBgpRY",
  "key20": "2U2Qm8Qq29tL8M6yE9TZ7pxN8zyH52JQx5JKqQX13LYMic1J3NVPVYSdVhaUXLhZUU6NV3A1gVNgi7eRd3pFzPpK",
  "key21": "3rQ1mQkz8M2KDEJsmgFmh2m4otekHsvYYcxBsN1BZY8KXKoirGttrQ5UW4kyn8MNCDnf9vc4c3psmNQbS5R5uBW",
  "key22": "8WhwrGiLL3cQhDkGkYSaxgjTEtrhYFgfCi5iTGrjdiTpfTVUnrVwAxkVNL8HMTQRuXMCrW8v81SpJB4r2KVsxj3",
  "key23": "26pQDCV6ejqpU565ZfFq5QCyo5zcZtNb86JM85QV2XW4oqJnzdix7xpQwCo9wAomN2jfFjpyLg77s9Kndh2uKKs8",
  "key24": "4Vfdf2SYoGfsCML6KyEciF7vmScpsqB4vsJBakbzoStyGBsyWsfc4q9uaL716CgYrx5oUugy94dJjnmgzpRwM36U",
  "key25": "5jCCfhgEXBAdSy3Hza6pcebfB5bZHuxJnuaM6mvqDJoePN8xKeavKkfCX7cbKr7LRHotjTG7B6PY2fedoEDKwJPw",
  "key26": "5NLP5xueCT8aZgEJkbv7k3viRWtwcDQEQiPYAv2qajbbq4PCeNZbbXka394swSWKKAr52rGLXMw83exg3Hm91qNh",
  "key27": "35YuCJjSeE6UHhnH7WQM7mZxoVNfCPvDJ38aAVXigmGWKbXCFcqRz35VXgPX8QXaS95X3mZt9WBbgzgFtgzXSBBc",
  "key28": "BH8BS3FS613eChA93GLZNcvQipw8DpyMDz2q3xPMgTQf8xPCo1JJEva632WDVJGixWJ2kFVdWrm4PjBEArPXLdi",
  "key29": "8dH3p8VgXLPxNxp8JQBGFQ5xZKPhWjzXRDMaLwccsPax8wFdRW3USbSJ2zUqgqDSkwxc9CyMVc5dqJ8JG4z6v3W",
  "key30": "qg43CX338jbkShKNGWdbtK1NUu2PKtXKrJKyF1tcVgevdBmvtnekbZBkovo4vm8fZvamgbjqE2CKkXd9YKpZ7PU",
  "key31": "5hiTW8xmmijKsp8ezP4ns3rHdpYkW8kbxsmhDheWcUfoEcmzewECt7WPbXHxhjqB1Eqmnr6o7rqonDjKTrvkXHeS",
  "key32": "5CTxoAvEfxHyAHv1fJVMtSRxEsfxT6XFPGfW2xuLZ83MaQjVNbQvciVf7fqPWE7ibv4mKD2gfdvGTx9dnMtNXgCi",
  "key33": "4wSzAA8mdHwjU1wHEB7dMi7yT9RdtpenG1ipLhbwKXkeTYojw2i1tc3d8zUcE12soLRBUZfK8VMudkmFj8hJumsW",
  "key34": "viep2TdkC3fzJ81beNdPrwyrhz8ydbLSRkUwfkQfmYyunycGzDnw8qip3gLGLaFEKCsaT6y5jGNkhzuTiuFPpTp",
  "key35": "5rxGDCQmpnaPv68noxkdzv7Cj5LKaGMYkXozEGeXeafCFYyUsM3NGwmMuKTV8XDumKvV79euxfYUNgRVANo8KR6t",
  "key36": "2TKf9kAbJWk6aGqCkUU5YfcP5BCdRWBCVG9y8cYdGL7JHZnVJnJkcrDZ7HN1BoVwvtP5Lnr5JP6vEaMntbQk5tVm"
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
