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
    "4cEwH4ds7GUoMiVCpzQ47kfEXMhqQBUKp2JRi1qJQzAPg2a3gS3h63VUgA9BfQAyp8rJfxAjGyrnuyhLwmGYyNBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kCzLHCjBoxZDb33iVJsuPuUSqvb6PNYYqZWaiEWFx4kPeBmNZTULLWxHV63Rwqs3QBHXUBxUZZ6rYSLxyDMSDJm",
  "key1": "3Wce12vh34a2uVyT2kpsCqry46RqrA3Cu8You9pnBF2nv4X5wFv4E1QXMkNMQHxzGq6CcnmnEv1LwKtURFER6CDS",
  "key2": "2PKUqAzmChsWASmbGqBuHioDRBHJnkxKt1Xe7m7M4r5N6kXRj4YBQWWGFe6GZUPsGcTFL8eonHPVMkqMa9NYv3pf",
  "key3": "28rLqhnDbULEZ7ZBZoQphPi5G2eUivAvXfBpZJqstANC4BiXfiHe8RptyT7HwbE1BHBX5pKPgvWy2GPnUNbAvqnN",
  "key4": "5E8fTJmD1Nj5ntS7STiq4Ya5vLNknrnrkuJ57ru8AE5AKnkD2i9CcvQk8ofdvHyb73tned8Vqi8Cng1nEtfou39s",
  "key5": "5dbuKwV4YtBjnUoiEeYQ4usSiS23UpPKuj8ergG1ZDvxFskDssbCbYBCX1zu2EXKGxDEX7kmZMD7sC7JXbNZS9rb",
  "key6": "4agVZUBEFZgLN589YwuwHQ87mtMANB33Yx5UNpJLQJEioHEtKbcfJmQRg45m6nhTk19Q5kR6qi28WuqhadL1e2yj",
  "key7": "2KnPJoXViuqrDqYs1hXdbbCYnHTaaLbiTkXMfAKRfKaLbbJa4ifRjAfp29HxvbCSs9TnboBbveqjVN1fBCCdsxpN",
  "key8": "wLEpYE3Jyj4L9YoL9KPYwyA2w5rSsz9YxyVXg94dD2hmNjBkxf65BT41cZiekyFRHM5FzyWUipMHMVwXQQEf67Z",
  "key9": "2Jq3nDBim8gU3PLCxSRRyQqVR1Gt8qg51D95rRqLUjrsmFtYmoeUHEZnxA9btiiwW8apH8p9LHya85ADWHjC33hg",
  "key10": "5JtCtxFLwhDK6kiaKuJHKosn41YMEK5m4RyQ88p2XgAnQa3fRhMpVEr1To4UwYAw9iF4y69kVEfy9u8DGqCMiK8j",
  "key11": "3ByobGheMYTc2xJQDLi3qGwoLSZAJnqLMG9u1FW7ScHPjsHGWXYttiTAnY3wgrbCpjvtLZzLCHp85h52nnF3CXXU",
  "key12": "23bEJjjzKLTdhH8xEutFgDrPhA4tgZ4r3y9bdkz36aH5jSYijZPzxorMoo8auiyjZ43JhZCWFBnVLpiYbanyXMJq",
  "key13": "2Lsdfvf2cW8cLfECK8T9nLfLmpkGdy9jVhFn5ujBzz4kmn3CEXSeTu64naCjQ1q6vaBPWHAw1eWuo6VJ6nkDMPLf",
  "key14": "2wirUoT7bMKZP8XnHM78EL3gXh9647xkwHKHodnM3meMr3iciNfzZLtkWj8cEEd6pfFvEM6xRVex8gL8HK7QmzgK",
  "key15": "4fcjJKgQLHSMULTs4BjecffEtsKnpnZen2BiDy5w6wfnzMqbqrT63oDS8xc6ehXDCFfgomNT1AHy8FW58UAF3Ug8",
  "key16": "7fEaGuFT4X9864LFhGimbv5tYm7fbiBrZXSqnaZVFZya4oUYANNqQvSekX2XvkV11WpvhFPQxP7gwx78S7xM56T",
  "key17": "34juhAyr6mpQcoXNWc6eLubXaDPhdcMf6b7idmPEd19gUMadA2evnDqPEE7yiZHad6ApTiCnWFxnJkp2z8Mnff7y",
  "key18": "toRUKiZYcAHS1eAseJRCbfwKj7PdvjThBDr6589aX5PAe3uYFGQhaUEvo4bUUkGyTrNn8e3vA3G9ZTGaXkaQ89x",
  "key19": "5QZVfaKPvGkgvS8mUBF6sgzBCHiMGrsf5R7Xhp63UpgPUKFeHa1WD2J8eRk7eiDiJm5PqwbCc3C9ZfzKPxHQughK",
  "key20": "4mmfZHvJnv2Pi6BZiyUCimY99JznUcbtUmqr3ApZEeEuBqG4sz7LiTVCjHBZF5L7JzM8Jh6ZPBGpT16cuWh8nHHJ",
  "key21": "3NcAHxzF1uLGvBs8qcYajsSKtCbZtNhvXDEbfQehHGdP6qabVARVy8KQH4Jf7WTeVPHbrTderA1TC3PJ77vL4vcN",
  "key22": "tRWFScaJoszBAFYD9JmKQUMcZvN3dDa8LE3wXeGf9ZsNYiXmpYdQNW39PBXEuPg66LtX9p9LmAj2PDMyHs4NaeW",
  "key23": "C5cMm4pNCYhTZURvyTAhfWuBWURCzVzWSWuEjc6Nx4AxW7EpoYtwwBu1ej3mz4sdL2vxXTSwPXDvW1AaearyRt2",
  "key24": "2CHe1QYtyhnq9JW8zebzCfLQ7bEApCSUGmuRJmU3RQzK4w45Lhfcsw8t1hnE14CQumSbGQ5wmZNPReEbmCqe5Z1i",
  "key25": "3BHiSFCQYARassuvJBvUqimAU9rmp1vfMNudRZUZYWqq9LqXxSzEQmNTRxdptXGgUpwt339HjxaeKPALaj7XosNq",
  "key26": "C6VSonKik5NYdnLfzYg7EJ75AQpwGF2w8i24hu16kepdYuEdy7nLhLxLYh5fHsxnqxwNqb8t1thGchD86pypxBM",
  "key27": "3YbFkrEkoMEWiT79VEcitR3cGAo5qpnqBaGU8QbSkyxUs4ch2GX5Z5c2FTQoBWPD1YH5BCdzpJb317Y7haoEKdZZ",
  "key28": "2JZXHixj7RBVBU7XkDRYNC4N6TKT3rwxhopnYYTsixNkmfVfcEry4kG2JPdiRgJGBjyFnpJkRPrMJUL5bSR1mPWa",
  "key29": "26gYkXfX75uFbVEzYn69KitSLLdeagm3B4YSyvdpbihoiEoKWmQrfhnBEQ2yQYR8Kd4qiLeERikP3ZQk6VfGUKrm",
  "key30": "3aqw9zoUt44oxFo4EPWo1w6PrdGFsv7mZEHaFWT4v9PSnKEmcZZhxGtHG69DwDY9G6u5LhQhfBB1vL7X9x35h4rG",
  "key31": "4KFdc4SeytWxDiUYJKjUxY3AbaPa7JPgAQqM6JNz4PeZjTCGMBNukE3Vop4T3KDEGFnGgmTa9q7CtxCLKkGKNper",
  "key32": "5MTBGm2NGW4aGgzbMvNx1WwAXcSbrWtfT8NDn27ZZUgkVpzQ179FKhcz9WR6aaeNn5xUc2ctpDX6knzcPTRKB2Lr",
  "key33": "5Jbi5asjCH13H3XBYceTzEogYjpjobHKb2Uk17tFjGCq6bNvJ3FAcuiJ8XUVguvKFWVmatCWQ3eaC1UczDx259Nd",
  "key34": "2ZE3uJcwSFqXRfHdFDSVG5sVpbCnzNvAf6uCcWC2Bnb7tKpzbPK9UyQ5ATGMxqeQJo8rwhmxASdp2JCFTExumZuf",
  "key35": "2d3woftD93EDxXuiHifmkc83RE1GwnZeput5wxCZZnmBa6cKNvcL1M7GsNu3ZRLtetLDBpVraGqenaG6G48pFhPQ",
  "key36": "4eQh5UHaD9ubeeQ15UQxFJFqWG8CHBeaaU7B2zJeHrmCcjMfVLxAnKP2KDUJq6x5vnwfbtaggBWvGc4C3XWCcWCK",
  "key37": "4QddLKz4JFrHEFYb4yb9XBdMqMZDxuC1Wz8R4SgpyDo4Dc7tBXu6tqMUDUAAjcvyfDTmZwqh3h2JTfS1ykTm6UXj",
  "key38": "3vL6iGUqufA5j93EuxPdRnhwxtK95BGF9Wn1t7ALU5eraYvdLSLqymE2WeQPVbac4ehTpAKcnm1EB5YU7fBFHC34",
  "key39": "5k83LRRnun6AjjFin5UzvF2z5WcnE3LUHt4buT6Boi9ipPKE9iUgBgfVhtd3Uhxuauy36mNbk6Y5ZRoMtf9yTuV4",
  "key40": "4EqFsh5sUmMermrxubaFAxqDXTNpRLgYA7zhrrsoUCU3wBnatddyQ1ccp7ZK9CcV7qGYPjqGTn3XkaBP2TLYBGCH",
  "key41": "4Esd3eyxmQPc7E1VT92QY67wro9C5annqvJACiZieP8thfmVqtTqTdPmR9JtTXyP2fRQjnNxLwK25gZqwGqMdwhU",
  "key42": "3W3CtCqqs9ReqqyF2bUvzKfy2hUEThitHfwGsJTA1HQ5UuUJDnwyESCa4vwPQC4sgrDtJ7T1Ch4TLQUa9nTzj81T",
  "key43": "5JSvnUqFE5VG4gitrrS9X4RBMWbcpkzhwatw7Zdnmg6rEvn8xJK6CqdhqEgV6VzsVU1nSfxpFaBXzoG2heyp2hU8",
  "key44": "3YEVgZ9EcjzaWmTQaQe5gzbLS5Wb26uoVU2QTZ4FDx8RSZV95pSrxHLeXcisLL9mFScf9mAt5iemTpZCwzq6zwSR",
  "key45": "36PogSxJEhnqUr7k69hqU1AbLGdS5ju1UjUTYmPzm2Y3ypo4wZoKjrUxzX8ztZiFMNpsgf9amABNp3x9PyzvVsk2",
  "key46": "3ifWgwRZbjone5yuNLJs9mujtVdAUMDHW2GKKKesh7NfNbQymDr5YFvqZHGbuC6TaXCZwih4mvh1bLTvfn1oi8F3",
  "key47": "3QqvQtrxP5hskq2PU583y6eLnNCPyMFuHx2A5JYWAL9fpe6bd7Lic2eJMvkWdDbqykuPiz4LAHWBSPSzKvM9qe5P",
  "key48": "4beMJmMRzLQtZWHVz27NYQBFHipMrt7Uz4gnEBaH7oYd8i6wgtL3d8svUwka71TC2jueLRbSpi647wB8YgiLoJaJ",
  "key49": "3zTimAupCt9aKXXYVpAPLiMLtSuGp5BRZd6gjrfqdwa379QGEY87i8pWpj6xjPivffz3w2dq8mpbeEuvgBqsPc8o"
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
