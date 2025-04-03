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
    "48PrV1WNWNn2UgWap25nyucDsqCzEZzqhLrWq88JdFyGctHf34iuBSg64DRKtsd434UuUitgTfF17qq5NrGzsrzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65DgEFAtpfZuan3YrNGzSDWbKjtQsnNPUJvyd38yuRTq8X88Q3XnDvLQ6CStVsxBov8Pz28Lwq2vfzRbMWBzMcts",
  "key1": "358DJJ3JG3JTDhbsgRZ64QLAR2TMkVzJ94jZa6SaJjpGAnSQL3A6CELWWBMUCrjXGdJUnqj5A5secTS3fZqM3u4y",
  "key2": "2ijZ6ZZMjoLagymnG3mXYGzV5wfDv6g95wtaA3nnaHBcYHuAENPtK4FT9akS61Ktrca46XSkUPiiy4fGMpspqCk6",
  "key3": "2QWtGh5ydxdGBppvnKVPGrxT9EMdYEcgPPegS59C9J9UvrkdCrXhJQJeAy4Rv5Z7kxnzhzkf5m3wqNoVnTUM7xfE",
  "key4": "25TecmD81S5aVbGE35S5sSsFHN3HB9DRPmXHFJgFRHrk6G65hbZCxX87LwGTmcvrBHDXRVmrD5XNTMRi2QnBaS6f",
  "key5": "2G9iYQCyx4iHmXH864kyBRAHEhkqJVJJ1uCC5yAw29LctDWRDW6bwHXSVqMgj8bNawNc3euUhUG4TN74XzsDXPT1",
  "key6": "2rsfV54Jt8B64mc7zLZkmmuzsWoJuTPXfEFo7BY992YUXjK3rF7t11HMazjTZjpih5idm29QsahVCwHhv141S63B",
  "key7": "2Pt35xozRoh8HDKiXLytiyGHPZbKo9WcDdtDbCygzUhwkgXYMiQKidvUaLz1Y8rXgNxEk4QFPq6giL8fUeEHXaTU",
  "key8": "5yr98EMfXgRyLxdUu9pR4osAUSEk345BXMBQT9KCczeWd34NM1TCjctu6jxkrRESsdq1f1gAhFTKvTgk3ytzJWQh",
  "key9": "3aou7FUxMdqXAcSnyM27iy98fht4ETLRjHS5pkktCpGygf2E7Gb6ygPPv3dwyFhWZNhfB3CLsVQS9iT1R3QSkfUH",
  "key10": "5ktrzymwo6m8zTsRPumf2Z6NX5w492xi9TPMQkM8JA67HtPrRL241TXuK3E7eYMrQHfkyPRkEaqwBtuWsLLHjmKC",
  "key11": "4WPGQZpqKoqH4Chx6taDfsbA4NXSdQkeZCczgk7TBoPL47L9PwNwtxQ9hgYEqWdovWr22HMGvcPuDHuGuusvRaY9",
  "key12": "32u4mGj1ea1WNk51wT9dZPUwbqrSF5JFJYxs6i7HN4zxp2fxqrZw6YYQRLUyd2aBiG1iJRpHDkDmcQ8WaGtLKngj",
  "key13": "3MVy55wXgdt9cUvHMbmAzLom7MsQqVUrtZ9rjJ6LKztgoYEFDyYz5Mz9p1uDPMXmcg9VJxc2YBef5aPVQTJugxoW",
  "key14": "ioEtcqK2MazwN1tKfyFgyJCJHBfTeBFnBgruW9fXqm2HxE4az9xKZvFoYvTjffGS5GeYJwCxNQ1rtKKB77hwQSs",
  "key15": "5VJwQeuBgWiE3cAZh1yb3ewfrTDXhLE9z7gE8MtiSv8osbqwJ9ouqN5xvwSztcujyoLCEVwdfC4sL33GLdasifg4",
  "key16": "41695LfRDRSHnjKqHcu5GArDfhge9MNaYSFWv7PFQi7fDHwzhwT17LSgGrjo9uknpvbPjz14KCMuHHeSwwzeVGaf",
  "key17": "2QiYGvz4jsZq6j3jMMC417pWoZcKfJ7pkvjmVKsbLTQMXzqDJGia9xokxiQScPFZ34FPyYnj8UsncguA1ZUHPBXG",
  "key18": "3aiTmjdBUkKRYxkiAegCzD34jWsuTNvDNjMJavhpVQVnJXkMGCSVvgkZPxZdWBCnuugqMixEZvAh8VBut4sgjP6a",
  "key19": "5kNNEDt8mCwzkjHBQeGGShfFSHQeJDbTArp8hoMVuUSqzjwd2MxwThAahnJoDccq53a1PG2qtnrsk1kKU4NRxp7p",
  "key20": "4nm7MSXNzJ22XupFbVKxhdaeVY6mAc2QewRmWn1Sndm2FnfW8ZCN78BoWKfe61bNTKB8uuPrWA7sxkrtFZ7FPBnJ",
  "key21": "42hgNf3dQdio57r34jgixaBNM9ec9wA1TK1g9nQC745r9sD9AG2owqFnacFAqy6rW2PKXvyfDS3PMRjotKrGgvS3",
  "key22": "WphrEDyY7sTbSxyi5TPNyYkXFeZ2m1Ucc9ar7oke6PcSMVsqvAsSn173GaiD64FHUfvXrsAF5F2Wm9oXJe56WVd",
  "key23": "5yGzAANEoMAuHgJRtYwbekvYpcDEk6dgUSmZi8bnL5vHfT9G6G3c5AhZEfgqZwsUMtQ3gsJtKtzodctziaNKRzzT",
  "key24": "zEZGygoqzERhgK7QTSjtBuA7jhYHpbeaF7g5VjbsSNRRGvnbQuXEEFm583mgdZNMEmg25MinXh2rsnACVwCXWHA",
  "key25": "23XqXz6es6QUjx2jCcQrpogXVR5X5qvotGSnXto2GEzJf5aC3ouKWTCj5ovnuXdAzP4N6HrmppKtNUQg9oCuKQTo",
  "key26": "4WFtJqU2HoCUEQVs4qst68wCdJNAA8yEwTFYjGupjJzbHy21dDUARCMRiFywfvyQnbsoPwce4RwRok1tnGFPUfsq"
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
