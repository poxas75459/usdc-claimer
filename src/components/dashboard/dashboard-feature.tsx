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
    "2dgK6EfxR7TD8ER2Wo68HYVCfziCs1rBJadxxDdX6FxG2ktjBKwr69P84LmVTUt7RppqyX2BKc49gdxw6rrKhgeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RG8hhZo985q95qEQkuNunV2emJWqVEwBJDUyCfLkCENe6mUntuvzgwJwE2BctEXM8LG9Mu3FY8Vjd7Q3tf2sun",
  "key1": "4mQrLJw3L6MaN6ao6pyfDvkNCqgdZD3zUKAjnQjvYZDnJZNdqa5HByVLGFnviQ4fpNmf9u3S22LfQwS1Dvm9AfEu",
  "key2": "29xQq7qBi2si23sfKBt4MMA3RAQCrCsMu24HBMmWuHXyniHewY4jRCUkg8DDoqjRCP3NTSYwEUcn8s4gttEWNY68",
  "key3": "3HWXy4EDgQbUT16yKerT4Hv3o8sKGyagxL8TNJqfK8htqriNHwNJzd9cjiR1rhzczysLye6Fus3J3EcJGRg9VxwR",
  "key4": "2o7kPRPuNpEna7C8FBdDWXStFpYVw8RLBxqXypJK6QayQi8VizG38W7pDoqV3if7poVHcZd5VsnuPfmhR1EhZEPD",
  "key5": "5K996G1yzL9mNq5YwW6cTCng4GDgovtzJYFcRh64UvRka4yk66f52PEBn7nDsPMWdRLzfHapJwjpQfEv8y5hNv9S",
  "key6": "5udwXZtd1ys7hvYay7he5L5KiPAzmsS8zuSiwCdvqPCpBuXyMWS2Mrj6fi6jJ5BH3TLarPT6QU7QtnGvPhFz1sqe",
  "key7": "2Ph2HxUCTbCzVcdEeZMhh1ps7PisFxyaT2oEjsaStEur9jxjVtSbSEvMh5voCnfhrLnHTBwjmbEtxBqzbGuPPZXt",
  "key8": "2dsBJka9BDd1JCroApEGXAAiXfTJX5fSYTcBzMMUTWPbKkHAAWcKhuVNPzpMfimhXDb1ahJvN6MRsvxB95rR32wD",
  "key9": "4dqMjmKSH7npDG7WK7vRvaAZpjNrtPtvyfTW6nV7HVy1HR48c37GxBhAui22bGzSF2vRmWsX6mxF9enHgkLPyMjn",
  "key10": "5bu5HugZUS4CRA3wyGfTcBaZPT1yzoeMyphhKsveWs5cULi3sPcjGwd53r9K2wWTi1KD6DvoBm5iyH1aTUiSfF1M",
  "key11": "2QVUVLw5bRt8U36HvWkShA5LnvhF7jwWKWYE23pe3jDUuWd3eK1raVG3Yuhp2y3RTuhnGWZMRq5BCAYfgz6kUo2x",
  "key12": "3woQioMSpz3rv66omvF5RPJGtiPMLLtiGR3BHLPg2SseKXKvbSp4wpomW6P4s6oUbvikATc28suiek7hR4qvcxSD",
  "key13": "55sCFbeQf3B6J55usgbHP8Ff5YNSdVG7eitJy3xDoJ1PCCtt1upkQxqMV5ri4GykLPeMY87tpA5PdDTb4V3ysRMs",
  "key14": "2c7pTjpFsrxwWvpviWYez9fpSggpgodbePCzMhTVSWESVyZfLNYifLJofJH9kqL2gtsMLX7bAHAPY2mrQb9JyeCD",
  "key15": "5QGwsEPm5m716pYokybHGafT2Dg4gmzYa6FLqW4Tz7yDB2aUVNcJjL3S6zgjmhpjUHFb3BBxd8KUyzZPkdJEfZ7L",
  "key16": "35MTEBUTXh3NQBgkAT178XGvcvsyLTE7aSrgcUeayHvoc175RoWjMHP2LT7d1ztNLiLo9AxgBuv1kRCxmUKFeNns",
  "key17": "5JZ9nN2jHJpGpX4XgNpugidBTbdanvUnadTwRH5TuTjCGhqGGDVcfHsQXr3JmJCLt58mfwzwQXXnqwcnGjrxSxYP",
  "key18": "5ZSo7ejyDcAyVmfFHE6Kswn9aPSi2WjhYUWQoJjuKEEB27qCpxpHcHpa21NeFHZbB7vT41vqA1RjuPqRzwqRwxkw",
  "key19": "2VETecGExBdEuVNQPAyq8WWpx37FCN6EB7t7p7MUv9u9e9WGPvC4FU8TNPjquqUraCFi3jaiJNhckR1F4WDUa6DK",
  "key20": "4kgW1PzeoGRYAk4FzhMdmVQAoPvaBji8GZYwHLU5Amv2ei2CLwq3yJ17PcCwYqVeJt6E7QHFEmXA4GVNLpQQKz2x",
  "key21": "5oB4kZXPQgmkxYNQKZwAJz3zNbEBJrtkrmjMbvwmf8wFVEoqkJcgCMNci7ZwphBLjTywFeGtd1175ftu1uzTJjcX",
  "key22": "3JXVvvGj8qfUd8SPofPzn72pwnwwhQS4hc5g3dTqKALbQwKgNYqMztAdv1wvnbaoLMc46NM81mJwkpekLXAU3qtW",
  "key23": "TmHKb4G5Ymr5XNXgeMZZE3ycrUjuNCxRX75WCakGqkDqfYprW6Nf3onihX7RPSJss76VS2ceHs3WmoXn8XZmyTu",
  "key24": "4h5EAAcYjZDSNi4sQYqdNDe8CqThUCx1Ud8Yf1akZKoGxc5b3MmhYnmCVVdGSqy5njE7BuToda1SWuEmSpBgj4jZ",
  "key25": "VmjxN5Qy9jnYXxu6QQBC4SjyK2QjyhauHZ714nkXxkrka12j8cA4dZM6mzn71kwke6rZc1QKM6HPW1DDruNDvG1",
  "key26": "38Z4vUb7izTqX6CGNifn1p3vyWQLDNfDnEDfktEPsM9WrAXhabJqC1QYtp7R3fp14vtMLLTSgp8A3WCjAW2HSL1A",
  "key27": "4jvrTpxZcF1xv8psu2YnWKpU1WYnBbBGQDzq2g7voDkRH2S3RPJXNUwKiV1J5DK97nVbUHvqYtDb8X2PoseLMcnB",
  "key28": "3hxdeZKgC7RQwS4FtJTUpTBEgNeXRaFcNJjc9KFqjn214VxQQjyYPif675xNBzL5iAJCZ3gT8VUauu2TFSJBMb76",
  "key29": "54PHJttJttFUpFWrQ4A7ifJKAJbaoowMrCuVnMt3wnqKYVYNaUaLT7Wa3hY73xwA1AW5185JST4XxwvmUroHTvbV",
  "key30": "2ZN11tueDYxn5GgvP8XUv7zMPxDy32FriCTAbb61RdwtZzHJA8mJ7VKkH1CvoMCNioYi8HN6z839miu4wJPkHBwC",
  "key31": "3gAFe7uDTSJ6Mfbeu66Tw1nxqnBdgNJiy2KRVgaPh5SHsiBYKNFWS7yjkVBjpfnwRt37USLVeoLsVR4wAcVCv3t9"
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
