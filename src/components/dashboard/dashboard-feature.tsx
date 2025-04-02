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
    "5jGW2z53uXbDJX9EyPJ75ahZtKZ56zkuwogikuBXN6yFSjzdWFgUQUDdUv721f7NmsU1ahfgRbVb7Jwz7dFHSn8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TmR27bpaqFgZSm5z6CrqTJVXcKGGv7mSaThKahn9yYxtb9aFD6W9aiij2CX5BGi6ag4G8fu6HSjxjaUCzuj5AbM",
  "key1": "45TPxaRoL73yJySjDrzKNzwqgpEJWqnJd5vD7UUEUZArmi2aTtgyCyzuEXuUnXxoRGvhYkbnQjbynD81RBe5UG9b",
  "key2": "4qAzVciYg9kaEtjvDBtoakzbjnWCcAexqDYbyno8ZL6sWMhYZ3MeL87SnfUrfKZLzt8gq27xHGzyhnFvu3eBnxkU",
  "key3": "3mJbdcr7CXUq24vrDpU1SjxFcZko2rbu6ux4QuRddrm8CeYYLhcsnHEKDtsnZHMghFG8yMQuVCzMV8FX3cf1NuYr",
  "key4": "5gRt8B9PtBSFAfjjaU2GN5WcNzUc6X5dKU7JmwGmtt83PWeDsY4KFyzFmq7kLfEkRvbyQfj5qfuHHE2x4wEnYvh9",
  "key5": "gBFryg4EfpsfRvN9iFvwHKgugEhTREUeziRMifqAqSJveptBTfCdg54kQ9pqobAa92xMsfpAszeoHUugCDrXTgG",
  "key6": "2gSWKa7xv8EYqpjZDeqRf4tigd6AdcVj6qQDx2BUvwJDqi7y4d82LWArEZ5QWfiRCTqYqDmieeGiShEwZbZTydSv",
  "key7": "4uZqWP63XoKgvUdppVAFpVHgCCurRDB3jNqpba1VTD23m6MtvNSowzoH7PpS5RujpEu9SinMkHnEKBXTjUM96aoX",
  "key8": "3KTNPEsH1DbQJHbdAmgPt1rFYb1ybsdEssj4YtYDWJC6KekV3cKHNUWZdtDDujBx6gk2pkVit9MsFZn9rqscVXcB",
  "key9": "2zTjfJ88N61aFELzSKfLDMrKbbiwGaeQ2uh1JykSdiG1jC5QwchZNugpxki5aEPtzZmhByf9cxntYLPaY4Gnabnb",
  "key10": "dDaTwFHBgKQJfF6m2bNMsAvwJsd8iRh6mN9n67XK4RByqAyzkSLwiF2HMgyHhS1sRkp31u4t18SEtU3dCpmkGUU",
  "key11": "2Rqk8QPzN3d96tp1iPZiTQZfWGJxNJ2hwZrKWSq4K1axMcHpBXzXihP2v2mvr29vSNWtkHD2N92UY1ZdnZiFLsfC",
  "key12": "3b5ccnSWWsVhHb3wwiAr1REFWcvWAhGLnmuzGTCgaZHXWASMog6HbZvTs2fTBuidE2Ajm1iThKVw5L8cPTGf9J4g",
  "key13": "41JpMaHbLrZwjfFimDtseFSPixKyuzBUbozCiUU78x3YkfgdAHh1QtCg2G4yMPnjvzvSfvHCj7GRW5mgri84r7XR",
  "key14": "sLh8F4HBArubrws2RCZ9MNGxhTSaitW5y7uRQrFsKcV2FKRq3c4VZXmJEeEfCn7pi7Sydx6ApWzb7sTYNsW1MM1",
  "key15": "hCTx65qXkFSv3m4vXWjA3TPF2xVQfmwtJUC2KVFZyaY5iZauWamyo61g9weYeRMhvmcaN5mtud552Uc3yg4Fjtf",
  "key16": "3wNUofxRtSm1ZDzETLi9sNac7iUpw8hPDinFamP1M8QvwGUXLyR8BJbqUVZBJsi3sKSgizDfKM813dyKzat2NTTw",
  "key17": "5zdDu48zYB17T5cw6yfN7gTuJzMUzWNAr8viM1DCnyfiDCkfsa6d52fKoPK3kgnJhCPV8f15QUc5VZxKRM4Jgd2o",
  "key18": "4xZu7BD5y3xKuWxCbFwojPjGtAyCH7zF6mVWjcp5UdCAU1rnvKNPiQZM486cpeDc36GrXt451YgEWjcB59MHNGYy",
  "key19": "4k5TNASTahYtBF9i8HCTvom87kGftoaAM7NuYh9S9KCMdv5PPoFWDqSTBrgfgkrm8YRdnN2GLUDZ78LCsPUCujWE",
  "key20": "212rnxQCFzixqx2PdGSeAY5dtaBvaESmv8Mt3aXCh65S3cErMiWZJmJ3fQFjHnnyDTcQ9sckUb9eVDU9udQsN5Ts",
  "key21": "5sYrY2mhRNsbLXu9YojbhofXaVHNuq9Jik4wKuVC4encisjk6e9x5EakPbwUobtuw2S4orgY3oAJbQx1nbvE2BQx",
  "key22": "35HSTUKdRSrxHjkhaVMjCo4GPS7nZqk4CGvDtzWyJ9KyvvDxGEiruMd7MdoPDRwygH6v6GwgJFnuruK52PjKXaHC",
  "key23": "Rxa4LyH85B7De9Hgh3VtqgUJ4gDBAWNCwRoZ1wxhzv7VijKqzuXFYFPVvVAghJDaeqftpBJbKAmdGTE4hQqbDqn",
  "key24": "2TqNh8kiKX5EkRwSRsUQmyMX4f9Bd8ecVazwL1AGtYn6hEJX5iBwkd3oPkAj8815GBLJgzsAbriQJfhU1JEp8arw",
  "key25": "2DyYxxfMB3RWccmjatpZpAXKmnzGfjS3SdDfGkGuSXWWJ74ohs8scyQ2238WBnN82rvtfZw4ScrKStQM9eq9bLT5",
  "key26": "3HydiuGwkXPtLtFvuSUFLo5nv9eC3VVg81ne6mjw88u5RLjM2BGQa6TdwuKiZfx9BxfKaoMrxHba1ymnvmfnBd2m",
  "key27": "3nd7ffLXvchTGZnP1jBKwirruURLVhuC599zk6wC29WkJqpn7ATdkMfBJGem5gVTTmJF1wf96uXn8nNuz1qu4JZj",
  "key28": "48ZHzZLrZoJhp2cScJjs835yzWrtX4BCrfMvhmV8nHu2homY58zRRue6ZiGpLV6D1ezEWtiys9PdFRdAJen4x5M8",
  "key29": "4qL9ecXYYLEXz22eaZnfm1YXkAeRYp1wwYNEaXCsWxmvuEsS6XWFiFcjF8dbZJp8JHhoR868R3RbGUWVCpAFgwSq",
  "key30": "Xaz1z6fN5U725etpDdd576xs1nbXi3K4GfM8C6bus18SoqcK4yZNiaPXT4P5CXkGqmKcPkH6BCJtL2xtuhEWbfv",
  "key31": "59EjosPcbJMQwgSimJmnFUv6x8KAe9yThhbZvXu7knTPQvyemeK6KwrdPvE6gB8EeyHyMAopGE3o25EoaiuvdPyH",
  "key32": "2Acp3iguCvt1gqVHnfWrXRXheMZqY7n5WQKRXY5UP1McNrhJeS81tBJZtEeszwFhXE39nuDvPFwS5BBV9auypgQT",
  "key33": "qj4kbhrt5kyjAE8Nod7NEJHTVyX6gZ4GCALSSuJpHZJX9UrSiDebNAQJpMMeGJkLDii677hqri2dYJNWbT2YtNd",
  "key34": "3ia5e2B6H282hjP1jhuyaobDwiuL6YEy9QCT7BqB9VzJ7xatYRpsydYGY7GcoSHXdJa1r5XCeDtwAJ6aHukUpoK1",
  "key35": "4GUg6Qh23651fiepn8cpS5zVH5tsdPS85ZPyaR1Z7bb8ftZWC7FL5c5PzLHtQGYzuyQzK5qWKDiKYKHmHx8Go8s",
  "key36": "2jgj9Tw1MSERGpNyoHpvaXyhDRzNQU4jZSaZ1CuHnPnkrUUiuSg5Mf8FLS9jyto42CNYBP7qpZU9yjgyKmUBjwe1",
  "key37": "2TMimuVV1WefvJ2gLoRCrt9i9v1EdUQu1mzRtJ16ysSA7rGZurT6pn7St2djtFTcRwaiArArz6ZF34aMBnkWAWLB",
  "key38": "3D2B3BvHpGohvr6C9pZtD7gKKnM4GX6TnknLX1tq9pJaTJDGdVVFnYgQW4SPWikBaziVhPbuU458ujArZDgaLjrQ",
  "key39": "15iUfEh7cFsVSi2zHym9PPp6ZkyQUT66ZoCVkKeutti8kj12iKqsbYCHZvY2ucerJYyCRqNNaWwVkiyWayVMwMm",
  "key40": "qMEk6j2bSYEFfJra6ocXpFC4t3khwk9QxpgqJswt31y4bPugZeEZgpmJM1h4oKMm71vFGw5mGeyjNg75ZdxA6Eo",
  "key41": "j7TXxR1kksZXEBYkzmsB3DmrRpSYptWY8X2YxxrdXh1hwsqz2q3chXk5VRQwoCiD1MPXgdnXvxX3CqYE3ZmPFjB",
  "key42": "aSpdVhCPv98nh5d9dp7yJxmWaLZm1FUCfqKwbGeVg6AH8Ewzgqqw6xHsdwE1qz4c3opo3NV4xzJrWwZmsVCD6hJ",
  "key43": "3ptBgT7beTWGqUMYpaPm2ukaGuEVDuFjquEFvZaHGnYFV7FDqa2eyFMLS5gAUfEw1BhpijnYZpu4wJyYF4QS6mVS"
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
