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
    "37dVDXjUVwUHa2Jp3tP7cMVVi6p3dR7kQ1zu3tHxGkE1WWmSBCuLmx7uEWLnvbVDkVdy2Z5h9i7iHk3Kf2iAWAzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cGnZ12fmLV4ivGvnfGEa3ds1eoBfeJHpbG3h8ZeuRBMGXmhw3Ee1euMdbQ2tErDhKEJXN4ePgd7HG2McqQVpQcv",
  "key1": "3uhmyYb7B53eoc6xsp4qfJ2ZFCvQ71yPM6f2PKZ978YMXY9zdMTpLz8sfMTRQNXxKu2efGLVQMU9qqiBMifYd6M",
  "key2": "3aKAqRiZ9k5j6haGMiEgzjGD8aMYWwKYgKjZCv6FmQn25hwBmUJkU5MG6JTr5zs7RcVzERHsx7zkccJ3cWKmRzyv",
  "key3": "42kcCN1w61FGCdwAuRgqxtdgs8dqzuGeziCG56QGhiXipiW8tkGVJdPPoHc4gFtHDSchF95inmnmJzcQk3ikrE1b",
  "key4": "3FtwoMwDZaiBvZh4ZDQDvKueZjwFPy915eULU6pKhurbzNVy5h64KQSDTeTpsVn1ktfgxfF4fVZuFHzyC9CxSBHj",
  "key5": "wjKfh3eUuLfb4oigaaEBkiqZAZNCp1qb6Sdq6pJqyqDPUQRPZEHEYhvhXGsLrc7gEwgKRLgPN5XxGinTVX32XJb",
  "key6": "oEHK7bvx3NMyqSaLkbPwb7V8qU6BUdPQLMwXT1Z1cWAzT8jKToMC61tKR9MBE8E1yCeU7T6L3U69gX6bhgLKFaT",
  "key7": "ipdd22o9ozY5AJhxhQrcKpN98Xb7YBVtKyoLuw7sqKVZGirTWh8BfSsdBMsHMTa3XDHjBticrbjy7ndLw2H5kFz",
  "key8": "4bDieoQhmJEQMDnoDvyoESLokVjNDSYm9VCUUEMLpzfC9rKxfQkq5gs6TGyoDJpik9pwgGUzn7o47Uy6HJiu1xW5",
  "key9": "611jMsx3mJWj9ddNp9HsM9LZ4fxHGoqTi8Zp25TCQMybwvPNSwfXJWVgNQHWwrUd6xk6zvWekNoFPLRvi95bum61",
  "key10": "2VY7oyAbR2VfTZRJpdrW6z9C4ex2fgzivX4auXSrNfJr6faLC9vuctrw4WrPqViYvKazdQfGt7nHck6TX1sFyrbL",
  "key11": "2Sq3o9nq2QQ1BhKqSRCFxkJ4JgAS7ScjPGVFQ8cCg86tP9moKJRjELNneLC7dSipimnFEGjJnxmzm5Tk4dhj51Na",
  "key12": "5avh6QKTiuxW64uYpUP63uoUu4VB6a3EYL3Eur6858HvmUMZVyRz9LL29xiZwyGZ2Y8vfRrPUExsp4TJ7cyiTRon",
  "key13": "46h68tnbwFmrQ24XNwhgQNXawEGYHUb7Dhn7yA5hnMrmQVFuF6cUNTXQXpBxWmQo8ibEZrbUibfUBDc2WHRGpjM3",
  "key14": "2Jkbd8JMxJA6fBEUSgrD1MWqHvW4q5mhTdMm6hsdv737qhjbXzsCWz36ENjULX3s2gbzfPZ8S15ikcynPVUQTN1D",
  "key15": "2qArGzSyGswRrhBVHEnwngPafSLnKC5b2wj82CdUADJxxWqhw4CKuMsraMBRG76qsqGN5cZmYtAsP6kRK5GWt3v9",
  "key16": "4DKH7dWDM9vLPfacwjL2xGFq6xEqgd7T4RnX1YhY3wJSKXcHoGf5HYxRZZk9gzUWdfujPQP1S45W7A7GiQAcjtnn",
  "key17": "2PbKzDrVuAu261ZoPGC4xQvWGeMh9TZSVckk2378hGxiKCHzRvLNmqaBmeMmbDwQ7XTiW6f6SAJqaRVodpffrUMV",
  "key18": "4HwXcC1JYA3RZhzadBBQFojoikE2infg7g28by79XUyxnhV5wPMhyckehxhxSpzaR76CrL5Cdwqmk7ho8EtAvbVB",
  "key19": "2ntFMzEuEVQZAo4c91NJnoBFmpUF3VjMHpRvyHw33jTDZiPs43C9XtemEtv5hsfHFZPFt3UmqnqFugusEWx9WU4T",
  "key20": "5dYdGyTu9WzoLfuCjSpmsUtjJ3rMxAzebBjdAofChxGrEYaLa1qKkaQdozVq2T1e1xSGZPQqvvkiaxPyfxHofqxa",
  "key21": "rw514d48Xnfu7HYGKkVPvffqkdznYPYYSzGVK9cvxNGaRJsTT7StkwFnjErypfGmCijY4xrhZT1EL6hJL6qR4rA",
  "key22": "4f31dCHP9t4nf9Vi9DYQkSCnhAwDLM2YPNSv51PZpuamphW9zeYKRXxbztixAbd5WonXCMJPegnLiYwdUQ6CzHc5",
  "key23": "5juadbTyucvar2HEZpNi7crX3BikqZCYTXYYSwk7m6FEi1VY7hXG5cPSDdMWKzGVvCAi7Sc2gTgGHbetEbGmzmL6",
  "key24": "5ncgq8Fgrm2URwufSYX4bf6hepjLK3ax6ozBWS35kmrEGtMC22MHTu3wie6BrakdY1b9L6RmGtmxaRJ6ydJrwT8z",
  "key25": "5yyGfBP5Xb1rhSemEa3iyeuDEwDuZXVgaAKqQqcbcZxBfJyrY2R9J3d4xdaw6SukUX8pmwHTSPahjeLecb5e5GWw",
  "key26": "2cVP5xz9HaCrc2cir3cHESYu2kb7HqhHfTWgyYJFcrpGtE6cgEJcqVf1oo3gdXMnkrvoM6T2eMhmyjhL32EroqSs",
  "key27": "QCEFzQszoDQtWkVRfgZ1G5YUPQrDRQG7LzXw2rEshua3abPqiUu1LCbVF5qjUhfyqEe1cedMocxNYDUbURPk61p",
  "key28": "5Y8QbtuiyFjk8J564M5kRNpALti9Qfe2y19WdhGX9h7KxWFLFpQMG1edontakVh3Yg2J4E9GSf1cb22yhstHreju",
  "key29": "4S73q3u8tQdEFjbzU3AdNsxPxjj78xzkcnrC3hiQJ3BR8QeHsuUCxuCHsWFFZMUT3Z2RLePdNY4KQwqrm6NQCQsN",
  "key30": "3Syb4XDr13c34hDABMVEqYVFhxsEGsbkfBBCvZHJvo59FsZEoiwotqAHF81KjCdL64wrduUEURjFDAP6YWtb14yJ",
  "key31": "36aEGoeUugaWa1qkLVfhWYKDT6bRQkZKPGkA5jPwgHaWCGC2as1Ebg8f6NbuCQrnZWFoNNfSHPM1v3ALBYRyz1k9",
  "key32": "2APvNTTkyqARoG1ByjbteHgUgRTV7cp9zzo5jCHcQJwWiimCmmb5v5zkthFMFcwk9BgWczmzCNvDZXBBsW3jnPsh",
  "key33": "3CZz1UiKYn1kjosuD3VraWFS8AWwLX11QoZE9wY3Vyz2QaiZwWRuY7grTim1pK9meN5XR6UFKHmpWFktWv6oT9LB",
  "key34": "57CDcHBys86wvGrhkKqzwtiMWc34jJoQWR12YnPKxsjFBQULfAuGgWFgnAKCKByahDZ87fKrum39E75jKUt26iSo",
  "key35": "3G9XPGWdx4SaHknCt7rPLc6ChVLwHtsAJhWrJGqCSCKP5f3mSG1nLoC4LuNukx8hjxZcqCcyezwjDWf71dgNBypC",
  "key36": "42iJCbG9KHB2DTtyV8RURBJjcHExfjAL2EaaYudo7yo7LZWFLdSd3yWsPz8B498PWSykQSLoFt3S1GjqacitAjuW",
  "key37": "Ei1dkeeCnRtjyheZy3RN7jS8nzTe2b5V6uFJToG4v3kFniWWPKW58KAEBt9CidwL3e9JiHkE3uM5Cwc8X75E2t2",
  "key38": "5gV6UwJVm9omA8gYnDpgTNMSf6PbCmCryhd2Uh7FqMWhf5FwSxqJwGCa6zZWvc4QeJU4jnKPQLFqULinJz9Zjbxf"
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
