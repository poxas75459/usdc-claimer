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
    "266SM7ezBMxfp1dnidy92SnMZDVg58FFqZdfxc8qDRjEHer1U1s6xLXMHJKXiCsLtUVgmsxnB7c5A92GbEU3kUyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ybBbHJkxG2ZywKjHziddJYXWj7PD4uMi7Xg6VvXfK9FdeGx9dAMgcRuf8X2uvKBLmtsAdKb5SnBrPprkaThuFGp",
  "key1": "3cxxs3xWDkvd336uLJ3PCmbJxso3U26CVVGKsHtGzM8CiCQ4QcaeyRaJjb37WLaioCJeKnXA2G61CMKjb1C2ncC6",
  "key2": "4UxWzQk2a2VSeugvLGxAuMcY1K9c8bkmdU4vBZ6p2QnKty6XF51W498JLgo2uujisZvTuppXRJn24HJo9nrgasee",
  "key3": "wsbvSwspG1TEnQBhtyAyjxUa6Dky8Vk172SWsvYmyxPdmgv54KzBEnhpwcDc6pKWmmp4WjBfPmP2ufiJNWKgyCh",
  "key4": "4U3Q5y2JbQYsLXJiYbM5qCzHJtLoiUhjogVsG6iNfyCiNhHKNTfXP6MNmX1jX4hKuNT4ZCCfQfLh11bHXReQWDL",
  "key5": "2DvoytxB5mLGRUDhSsKBGvoENiW9K2brMfai17ex27iE1VX2w9Xnf7CLccDv96tvi5QVaWNE3D3Nc4aDPdF3NR5J",
  "key6": "4LZgvvMfF2Z2vn4DPzC6Ke5iYUrX1oX6nmvT2RTXufp9XqqgW3NEmbULchsBVaRhAbNamtqHSPsNkswb8ME9wyd6",
  "key7": "5okw4QEMoME1vsR4UsvoT3PnJFx733re7nmYGFd6Mt6QkEyCRp3FHsGbzvtD4fKpaUG7DVMbrMxuMx1mQWBEJ1vu",
  "key8": "acBAUS4KY9zFgbyZ6CPDzaRkHQVFyHFLNWxs512DmzmNhLH6QzkPAtab2gZGVx2artY3n9Tmy1QHcWy73N4dRxF",
  "key9": "eVkB2QSmDWKw5cHWgfUx2q4HGuB3Zuu2e3niczpTdKPUtuhNBexGGQo6KJMFP3ydxMPdiWKW9B9yABykfFQxNnB",
  "key10": "3KLVaSDsVyoUToWXmM5dPkgQzx7nLU899xgmGs87Sj8YEQX7HUvzich9RFUuX2QMY2joEA1oj3pEYHBkUJ9Fadxx",
  "key11": "4AuFbcHaHg2zMwrLK2RPpZo9mjwYTcQrdCTbh7nj48hD1Uk1UsTPRY6JhwfqodNELSTaFMobd6rqLPKmiAfrpYPs",
  "key12": "33Yq2UrnhF6zRFeB3gvNvpPJePNbaFYMcwQDEetm2ig5tUB7dh5WcZz5iuK6m6v96kxJ8tZ8vPeu7jSn29prLL9R",
  "key13": "3JviGnW5jy2JEz9K2wmYC4by184crCsVFC3irgZ7Q9XfUAhqkygStFGgQSuHokBmrNmTDW2vTCaUMZpLPV5XSLTM",
  "key14": "5rKtqSJMVR5953rs9wUcuU7p5TiKbiQVX9yWou2dVohJCQNiUYEGi3yfgUJ9Pok3cgVeujG1PNkZUkwuE3U1M9QY",
  "key15": "3LeV8adFEmo7fX9WdadT6nUmqdZ8SPGbhUaVjxrG3iHd2Dc9fsvkPHAJTHmz8tVLB2FdeB21TvHLgoF12bDSh5YR",
  "key16": "vGpPjxoshwY5ueJ5FxCGa3KwyWDsDXbXkx9cyis8BjJiDqD1MnjL3t1JZBg68ufRpSKZJpC8rRoRWwwYBq6594U",
  "key17": "3qapYjwh45tr6tEUFxn5pEcy9vnyXFw2gwCyi9urKtDn7gP1VYW7XwxWAA4QHKrtWkwvXdxbtctnzgxLD8E7w8d2",
  "key18": "5HDAjwkc39M3qA3vxhx8dW6w3aYx8uDfZVveCtvSZ5XrNT1r6hPFuGUNqqc5eyeJWYWGqp82qDWXMm6ziyWQ6USA",
  "key19": "5ujm7Jigruu2s7vVer4Y5xMUkPZP1jUdCwcgzELUbDTxkC2vjpLBhxptgyUPiAMDBMgKGXtbTvVUKkvtkMGoBXdW",
  "key20": "4HVHBxJEtj4TRDQqnHsiQHW8c7XFBC87NGkvXB7NZuRoduvHPuV9T2YAGv9tPDf8a9UKPjFqyNQaNcByq1WG5o5e",
  "key21": "4m1wbDM1GB6dw6qoPcz3JGrRXCG9rq3BwSYrdB1m7cKam28Aq8jBkNAHbF32XzMXHW1jYeBRVp4jSzW4jWNfc8M7",
  "key22": "2EqFtaA81d2B2hBam6G5QhmXXRHuoXQtPr93svZdgRbbgXPf8nuazt5zm3bXwREJiUY4J9pEeFPGVDds4fAimLoK",
  "key23": "238Jan21y5gW9AHvPYpCUBc3pJ8momEFp6q4fjMoQJo2AkdRAjLEAYQ5EGGfbwx3cB7F63NW24sBDBu4zz1hJXdW",
  "key24": "4CFUjJ1Ty8LvWkZNL7vaYNWmGZ8RLXveDvTz2S4cU3qsksVnkagmm4sX49p99ty1LWbSSdEGbokvisUs4DMxaaue",
  "key25": "5AjeGqCAqQQ2WNLqya4C7prKMrx3qnQA8dDCWkcL7LNms6immcviexgSHp8dBvNtAFy6h5YbZLQVB3kc8VjbcLDo",
  "key26": "GvQ6CpuHEw9BwuFiTRToPPjy4jqADes4tdCh9A8JcAjSSZGSPMFQw1WwTBDNWu3Js7e3aQ5FCvHsNRSTJpXorSs",
  "key27": "GQHpVcm9vAMrXC9sWnZFoAvJoFE8kvBkcJfJCghxcQV43bh6QFfuGp4Q6uJbAXHMpQW2Eo4wqJUGKJFcn5eqkKc",
  "key28": "5vJ5KWvE7BVF4BCHQ4btxWx5ow3osiDEBShuEdn8A59pBByPRnzGaMngfz1WaTrxg9uojk1h9tLPm4PquSSL1JkX",
  "key29": "43sGjRU5UnXGSn2tjYKgDUQXNeUXCKiLgWEYKj4PfLRHfgmoxnu4PRdQGvzde4WX8cU6VkHefks5cWGKE5zJrSCJ",
  "key30": "Uoi1uncfjRguygZmabH1VQDvzbpm9hD7ULwcmxk6cZEf1LDddDg5Ckm1tmg8Kxt5YvZNnuqgugvrvDGfy9pWJFS",
  "key31": "9CxzdpuqTT2das2HeZc6bpHQW7S4VKKUzpa6F7cmprqMpHpctvd2563Jrv3DTvG8MpzC9fgtweKj27JFx1RatqV",
  "key32": "2tigkhckeSsZoKnEgtGKwJcYovVZ1YQboF2oTML6ruTcpPe5TVNu8KJceq71KYAVsY3Em34YYMFNcyt3gKaGBd4g",
  "key33": "3i42pcsSnSfjzRRwZjLabzVkafrdnJLCEeGHPrMFWMtjDBFGRMc8frgvPq1bHFfA4jM8X7nGY66UahgKeqtqRonL",
  "key34": "LBTKNF2VV5jGevoaCMMCirrsXPjUYciiHBGXdxGz1oNywMm1nN2zCFvitmQvSMVw7dp8kfjCakstAfN6QKhThYC",
  "key35": "3tJhQj8NxsJetqJTKLSt35jNGhBeXvigiWg4V6ri7WK7tF8vjYYvseND5geb1VAVMaUE5mUETyGPVVqgdb6ac6N2"
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
