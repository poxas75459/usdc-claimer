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
    "5CWAoX6zNEPd3H56yteun3Nq1Y5zVcRthLMryskD9UyfvGNdtaejf19soa6tUEazydBQuRMpPLTQSBYkfA7gd2gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yiGrL9yC5rH49LEs4JxHUMs6CYSiBR2dJmeZRMe2QKrrpXqtQ8E9vZF8c3bw23dFyiqoxSzxDafo9j1woKJQdKR",
  "key1": "5ksp7WndhXfNDAvpk86ddXVwDDa241pasZJ21QSRHnbveLuBUQSxYuhb3NRtZ5HHbLwZWCEF463C7NvsZTz521pv",
  "key2": "5KRDbPPLSEkdTzBetMoSb2naDaWXxp7myQwL7EJLkMwZBPQYhBPvZDunD2LBmAyxfZuBXE23FCXj6EFifT78JEwE",
  "key3": "5BwsJ2kdpH6WtnSkpACyuRkgeCBdhrh1N8evhR2nF1FRoLTfVjV7q1fQFsE88GScvrdUFbo7GmD1qsjHyCRLzWGr",
  "key4": "4yFVJdMhNbzuj6URLJkvdgpYz9TQoniRVSDReperKvdTvuRDWTXz5X2Uzc3cfKhJXMC3Fn68DdikbwtZVFi6Q2VQ",
  "key5": "3Hdfy25acVTwSSG797oRBTf58bvbeTv4z8go7WRcXGW9LqCVRNCgTj3PSVX4kN4qfeNzmm3G8tBCyQyqTuwjzUDd",
  "key6": "3r8q5Yot2N6r1Nf1joNLvjhvStKxdQ8Fvdh2MbSieJg9kfFCTTzsw9gsZDgh8bNvmgHkyLzb7Q21sWDB1wtpFZbJ",
  "key7": "25yWhG6Tpz5r7FT3f5B6mFmLvsd1vaPhNqj5MB57My59Ubpz3qs8gQLPQS8B2PZ62NHGwJbAiQViQp754Kz1uEVD",
  "key8": "29PqnaFwPXGU6PkWy7BbGSMvuamJwnTPsA752k5cbqKmjc3RCuoeYFC39KWR2uwQZRM5zbtqcxRBbKg3Tv77jcqD",
  "key9": "2bZA6j45dmF9GCUYBes6xc5PM9YGxpCGtss9fYcKVeBPb1Xv4PtBLZ5zbHRaFhWcKomBVz99uNXnrXTihJJZSQnS",
  "key10": "34v141TTVeMzZmNNsyMyBmRnE3UkXw3A6SwmiZpvQKUZVkZh7TR6YqasARL99gMJwm59UP4xBQovqmq7raFqMizZ",
  "key11": "2Jc9E1qJVWBTLtNy3Z2hSRZuurgD4W4r1SSE3ZJZgAYbWH3idxAXmMAQFGjwtdGUQEFUKTkxLsTRsGhWdrpJrggK",
  "key12": "5RswjYudcqVb6xNjbscYLvMt3f1c7rrj5bU6Nws4HcmdDxd9nMucGqk7xxhJgKR8HvoBEkL6Y78qy8pnaMj3Y5cU",
  "key13": "2RfNUDubPPCRRHnmQj8CTTdL54GFeqhg7tCUZdj81M7pac6nxyNQYvfsBwf4J6C5og8qgqmSwFNwhmgtNZxE8y6m",
  "key14": "5kWejczQQSKmbEEoohDKerPuxs2CBvej2jn4bb3EfGHtC8C2iL2NUic4V23VeKUqTu6KgexMTSskQCSMFpizhBK",
  "key15": "4dDYh5J2hXEvVaYxAQx2THu9MWXzHeXGXPtpVKsTLmS8CsZoYyN7ViVdGRmuag3osxDjsXQoLqzT7QLtnBbk3RXh",
  "key16": "5MQyFhKxpNd1bm14tP6u3cQvttVm9qJbkwN5TS98qweuefNFgizhxDF8XE6aEM8kVn2qyt37fAoXGWCs1ZmyLsKF",
  "key17": "29R3rg7Vr4Mw4B76zhV288MqavujxyFEGB2yD1wKGNoSiGsNMARMeM8tJuBDbYwBrm5WjFm1xaWWAe9yeo1bwmur",
  "key18": "4uJ6UsPyKZbuhaGD9TZhnpCzDXdMoWJANDPL7Q1Eg1Vgba1WFc3ojFuwpvDrteHk65K3gN8EHbT8Nq2Vg5WppJX4",
  "key19": "3DNBcR6rgnVtnnmj7rF13jjZhYmEh4zvuWhLoXd8YdQPJgXWxoR5RzMWPkDfbQhBzcvbg8W82dqqqSxFtPKyTFSp",
  "key20": "5mn7xmndz2hJoKQoCqUvCUmi4Wt98iJ1YRAUzTTdhhWef5dvP68YZZb8VVL7GKsLgivQi8gnhMdu8rm8vQ7vhADB",
  "key21": "5VZM3sbseQCiBstbmJXB6kERr5t7XTrhqFxQfAYvjkXFpPehFnxYj2WKiyptT34oESJoac4moVxDaENgruzPP2z5",
  "key22": "4TWGfNEP899JJyxXee1pgPPYZkSZ3nayqmjXdFVozGTLQa6aWGuqFEbyaZ8ifW6JgiJbwu2GfMt5uFtnaHKpH9mc",
  "key23": "4vXaYYuus5DS9WCnQ2QhCd618T4ksNSQCRj5fW3SL6HX1EWBPhSkZRFkLNmAw26b9cRsascGE8z5xhjVagMMU2w4",
  "key24": "4RiYDtBRXmFLrz3qc5qvcmAooGyUmS4jxbjNdo5vc1DxWjApAzUunBZfG3ap1GM31foV86N6NUr4vS6KEncDHWDT",
  "key25": "khwTMDLhAY4qmrcDGGi8Cvo9WSBDxXs97vgBMVybS6jftbdkDUADBzqcKrKgUtAzQMCBZ3GWtenZNDCyMgSAxp1",
  "key26": "2JwVqGaHLoqpYqdx8faJyBdAef65R3on2ede3dV6eqxU5rTkhRkxTaLn8WWsL1FUTFcBExoR8kxFQSaMfeRrFBqC",
  "key27": "24R7nMe9ufPYdXNxU4DtWR9fepWvwX6x4sHD3d3epH62bdvkS9d8EAgJNYxmiZPSZmVvBqNy37mKXDm7vVhS2KdL",
  "key28": "484qhsB4rBrbsvmKAm6HpzTXeQvgTRzvM65uyof3ZCCNGGbSVNHyj2zRk2KqKmCwJQ2fykn4GxYcGCvJ7v5bXy5b",
  "key29": "27mxo5jrzqTDCZW7dF5AV3CoVPBdEym2RbMZ3Vy7YxGUst6ByXNmXrq2BzwRVhkiQWzUWEreYALxJix1f1Aak3gf",
  "key30": "5s5y7fnvBC7iXj7uZ6X3TdbHCu5PyvVTfbsA2ESZGP5C3YvrkpG77k42iqDQVirSg64qatL69R2BnQtxtpkaHZsg",
  "key31": "3Rxh3oFt8oRGrivzsPbWCsqjZB4ZL5zE5eQJvTTRHoqQuXZaC9TDkYXfe4EW3f2DyXmGzFKgu1n3rWztxtmPBCqs",
  "key32": "45FndDKdATjnsqWqJ8rRqpFamP99wqeeYadkX4eJtXpCdvdhzFDRHGsY5PdqzyB7TaQdyFyckNcM4jcERPPGK5Mq",
  "key33": "5FBWo1SqbqR55fBH6NPuBBRPMJqsfLTdZdv8GuFhfPRLkp8HeLsosZNwdTk56nKsJB1oPBu72wVBFdpPBnouvKwg",
  "key34": "3rQ4XNzbeK4VcofrCBtmtJfR8CSNgr2b6H2jDZHGEPHuArnPfSq9xXPf8k4nvbRkHpvkuMQCn4brzhjtj2x2Xb5s"
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
