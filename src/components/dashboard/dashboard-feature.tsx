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
    "jJmTbf3rPbjNexfwWPUNGNrp6AEuaoRCwBSbhgkCGVR3gSKeFcuBNBnTBj5T9mnY5NRzLFQFJ4f98czwhTsgfdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48QtdT8GJhs6wGhKNmbvmRuwWsj9uFqSsxjsdJ3kUdLwWLPXyEWkF64QQVoRaD91ppMw6F9snsDoXbZmLcgJg4o1",
  "key1": "1WruyL5pwV8HmY6e6LViHgbiY4UZwp2ELkJwru9uNi6f9XBnK2ZC9jQcCMTRYo62jRhR1jGKrF3SsRMFu2jufhZ",
  "key2": "5GyJm7D1hpztscuC7SJoTScfMYYEantiSPb5mvJDE375RPHi3Lmqzqkrsz2BfaAVSKi5NAgnM62mW666tkYM7UKP",
  "key3": "3Bs3uL6bH2srvVMUmrvB9muG4SE5rz5g5ZF9mJtKmGSZ9UshrPtpmHYKtXsEPESVo1mmu65qqh96U9QcZFCjiGW9",
  "key4": "4HVQuxBPr8PP48Gne94MLsfPuhxhHux7Rgygbe5bQkktXcH7vd7WSje5zVSMVH6wVbFANrJ2CigpYeDPc8SUv3As",
  "key5": "55dQkrZ6ZSi2wBrD4ysSqqF4j5vtFRwiPgWhWHbwrwhHP53HjwQVFcyScYr1pqzBJa6Cywi2nuNvwwSgKFJSJvGJ",
  "key6": "2SztavzmPGZF4dJ4XY9GpJBem1EarPRU9gmc6NfaTT4ZyfdgkHLqzDSUfLyx2gZmx8Qnj3ydg2E9Vv2B3rZ8T1yt",
  "key7": "4gJPxsYGz4WvvXZVxm1Joj57z7pd2bDAcTV28KktEvhKxKGMATvcwcDmvuGjRkU1pFvxkwQ2tgqhXPZSLym9z62D",
  "key8": "3mzhZxrhTeEFEijKqd5mRrY6DnQPcg5ZJLqHwEDNfx5LWn3Ky5Yu1Fa1azEvALEEiAGKeRB9hmfpeLHjxRQ4Zycg",
  "key9": "42ALAaHcmi4CLxvAzUDqoqLeSffMCi8nTfSZh8CUKwBJFG1uzKnLAQoJPWkdkwT5nbMxevcwYzXbVZY98c72aPvT",
  "key10": "35dQqQzLqaTuMEeTrYibNPCRw2rdLmqWBPkUxe23MwcTxsUg7bwiF2HZsMFupjcwfiLuWkpDGMeHFVTxFeRMGMF6",
  "key11": "5t4dYfmqNqzTSHBcZGn3GE9pSryM6SLB3KTZ4HYaGiv4RgpRzVdSinE7w33nVwXnhA2Xzidx6isTenm7ie5tL49M",
  "key12": "3VhkwJ5DtbMsH3yNEFMekouBYkrtj1AFmWZ5fwUbUC8yVCn3pmneQRqGoAnobtSH1CHNvWh6iqH2qFBH4hhe73XH",
  "key13": "5iYv2FXHNpDazVfEwYwHCDpsnH2QfwVxBibD5KRjS1FwJzghG7kbUFHhjxF9jahBKWonbAfoPSf2oHFb2ioL8JmN",
  "key14": "2ZyFhp1cFKzxUXSxMemZFbGKqc6u6BNwv8s1iK6FrRbwpruTrpZMY6ZR1i25xfovua2LJhbKQ3JvtzjEjxoqW53d",
  "key15": "5Pu4jidQNUfNssreqcMDXjvVLnY72SjoPixyVL9dXcDAQCp7vnkCidCq5dxW4MWqYhBFBo4QUa97cVY8d3ZTowas",
  "key16": "dmDSQGszLYNw7yKpRqRgS15y2pVf8E5XH9BaT7g2wKJFMfq4Ydn2WLtNjqczCXVnkgKJxqpi6jUje2uzzcxSnmV",
  "key17": "5eQQnwccL8VJcv2mjhPanaQLNLYLbr3M2VZGZLoGctbuVs2oj8PtvRYPvnYX3k6uJDDaKk5UVEnPKKG4JixaGqMA",
  "key18": "PyLgQjFQJgYdBEj8Hut9G2LXQ4G52fqRRbz1UmxTygVbk7gJQSCTfmu1U8st4ND5NcTZnEKqD9VSdAf6YxXpr5J",
  "key19": "tvWfC3dpHCwadTRbrSh1PSs4uUJBu3PsPK8aa4c2QPZQ51EyZQwX1vdz8eHTocvJTnigCDFZbPB8uV7L3WqLXiS",
  "key20": "3zpDf2ZSGJ18BrVDFWzPXMRHUu7N2eCeyndKjBh4HXt12dLiMYZ2CNU9rGE6SHAwVx754dBP5PkQosQo4iUk2ZhN",
  "key21": "2JRx5631vpc9KApsZngqykK7HHA69RRmf9xtWpnzCBgkVjQaHchDcXWsRYewMAK5wyNWdRqA14tDBYAcmC1sQmiN",
  "key22": "4DiKjnDrJhT9rgkewBQxg2Y9UPDz3U55QMaZmTmDU2Njn4WrNqYuD8XypJmUW2gF9YdDLUUrCq7cLru8GEYNRnXV",
  "key23": "2cE8xZsmsLKtt7QW8zFfemipc94GGj5sFYSsfx3zE62XHK544JtWpWe3J9WaHrmVU9jkMgdcF21h8GncxHNszgwk",
  "key24": "q41gWrQ8MwFdp9S1MJNfZFpNxjtEbnvDAMQ5tUKVwW5Mm428auAqwSDqxzNp7mzfLfsAheUTfpJ9AUMeq24wHTs",
  "key25": "2GXzNxZiGwRNwKqBQLxkPm1WMxnMUVvMafDZTyK7xwuVbWZcJw5PJ2VkbzCBJXbDoCGCtB4tkr6CBYYRzn3PYinH",
  "key26": "UYBoZz1mRiVbF5jz53qmbP1mUeotGZZu2GQKaa8zQ8dqdFJgPSsVt46rhmHMFKC1VANxMLbWUe9FjPFrSjGDEkV",
  "key27": "3i7rJXXCiGkefwQiaAP56zqVavZcQuTBpRKTkWmpj1RrK5VY7YMUESBKf7mBds5FeLBfX2rEGH9NGo57ZF5LorV8",
  "key28": "YXSVmhyBzGr1EXkQRzivoYPDkVNe7dV79JWYDaP4YcXB8xBpXspwGmMaLADKMtTWxJnvF6LZB5Ej4HL4Pnz4jtE",
  "key29": "MrywzdGRg25xkcghN3YmuDJf13TFgZARFtButHm43BWW2rtNP8jdbmBY23H3Tc3ADnKS1uBd6rHpWgyBAqU7kNa",
  "key30": "3g9ruWxWozhDPDK7CJtfnncBXP6cVagtUMBvsAUNmJumxMdfs3bjmRqxCzX2EV4cjRZJDbafkijRgRgLKhKbfTmL"
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
