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
    "jQGJGb156zxtVJVwPPj8dRQAoshKbSnrnBXKQujPWwwMhykEqAoasEo5kJawvKspdFG7FForg6LbBCRPt1Foq51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F6GtegDWcWqaJTmpRLTBwgbfDXvCnZD8aZAbUjHJsbebr22TEgej5mBSWgzBvtr5tPTi3TXdfRtHKNtMAfaRZcs",
  "key1": "4UvjXoHsxULM7fkq6ngvUXgH2xLkYkJwopnNYmLPZ5k5X5n2B8NhcAT6kWrakJEz78hKbcGxDWrBrNmLkcgTQg4a",
  "key2": "dSV2WYfczzrC1zkHBxS8xwNV4XPBaAfRamPywjRWfrSgJTw5c2fDY8ZiZEFAHe4LQ9zo61Mh3Xd23FVBuX1BBWc",
  "key3": "gzY92h4qSQP1DPmd8tWRwWmGsDyFTCA22zKFHMNp8aBcuJtVtN5Bo35aF4yh36sFBsNHT3smumZDwF2rrVnkEKR",
  "key4": "3QeuFmhEYsgPDHGxNAqg3tb5cVKgXwSZitpjqFBMvaoRJfX9KHCEuYJfcz5cRgtHty22TeZE5SyqJ5QhkkHohuam",
  "key5": "LJQMznrKfZp96AnGJ9dpwYXNLsG7VnAPDUUHMzFM6egmTfht2pTLib3Zg4x4nU2FCqWsK5DoZUv9E6gCWZR6vmk",
  "key6": "2Rm6p85bFTGyFCXPZ5tiSswUmARTsLDiekrFfTfqzk9QmWWtjiBPZppGR7WTtj3iU4uRo9EeiaSLLJ8j2hVBTVWF",
  "key7": "2wS7o4k2ms3yw7RX2eEJoGEeaBVhKjydadrzYJGVcwvnUzZrxpWvw9WAu9krFRaL8JNFciHgLVjBS4jzLKvAyXn7",
  "key8": "oFwaycvsPUFnX7EKzXZVy5AqAcza2EB4R26TGJhvegkoRa531EinHg7FrjwrJTX6Lh3d3VVPLM8GGdHrFGAmuv1",
  "key9": "VpPpDu8R9AVKWkpxgKdYkYhDVaWs9kwk7cjzGuLv6jc6SrGdNYyuCey4GuyTLs6E8CxHJp5QkSoWSrbYZ6jvzUJ",
  "key10": "5F9VgRLK2yzmpPdi4aW2mk4YbWSJ9Q5oZ3Zznyaw4gRMHVX3B8nc4Fo3JV45wH6rj36FumFBim37Z4weKLdGRW6J",
  "key11": "K8vDnqEeYbGJyGMSZ3dFhEXU33mFndULUxGh9iKN4B3aQh2NPZmPsjStj3fJTHiz9xb8bLwh6XT8KrWXqeJmRoB",
  "key12": "3THKzV9quDhx5H4CiJ4RqCDLM9T2DmhScbdDSEL1y4HDLQCHjU1tAnAxV7a7aWKxGNCsZgohWcm7EpqbcN9FCdvb",
  "key13": "5nj4Jy8j2GNVyWo2iu16YocsNZPjcezxibXsqs7nmQobzCmMLhxjYogMAjhDUF97gCmKYXLEJfG4mwd6dPrR2BxA",
  "key14": "Sx8F8gGiwuTrNvfGTjTMisBzwf9gkcBHUXur69iKfdtGaFNTCDv57jEqYPNmQF2W9JV6VEwEX8EHwGHvWSAZAW4",
  "key15": "2vL744vBs8Lpqzq37bcFtteWCYeWCfCpAGizteAUtY5Betzmw16nFpL4fkBrAhAJDQNuVjC2C8bFFkk8PYkmuLiH",
  "key16": "461TaiiCUyowD5VQdWttLwRobTkY8ztU5HwHNEyRvE2mCuXMjfCaTp6PZ65P8i1KTf4NL1kuDZdiE1itpeFmnhKL",
  "key17": "3py85QwVRjf86b3MP8yd5PDNj3tomoVd6vQgbeQnHtVSCUiXT7hXVvEJhTur384pnatdBeeRb4tLowwrxsYZyhEv",
  "key18": "3Jd7a8C5TG6VMnCVaUuetPfLGjrh2U2NVv4geFBLTjqXHkj8R4XDwVruYW1sYngqXQ16egoQP8xf41mo8NNSdbZd",
  "key19": "RAPKzX2KAxz4ivp3rJQpbpedCUBM1BCng63zK6GzufNKrbMjoGJ1XmxBWFkFZ9oXARPFMnTCquX13biDv6gNc8C",
  "key20": "ZaZAtQhGhDdAMJBFZLqERSey1DzvvkqudXNFiPHSPSGoNzGn5wTwvNJaDcVLjHAt9AUaYoA6StJm88eucZYQAmY",
  "key21": "3SPPwXW5QDeTEvqhjwrEx4LPheUNMRJNsChWnvrpk65qjSoSRyJTUcWUvS8z2G8jYbu4a97GQUe16BdbHeQ57wi4",
  "key22": "4fNC6cHeyo8XpWWqVaknjP3S9DjswmRADU9L9gQdXwWRRieAURjbMgK52xPmNXwZGKP9fU24fYhX4WmNSAW6aweh",
  "key23": "3YVTaf3T7qVbSyFsMmqGAE9e6TVdpFxAfQ3kYrwSyk5bXxSCBjaZwfZ8U3ccLPdEFqD85Qn2stSYW8gNzWUQCk8j",
  "key24": "2skKBjBj9HesgkPyvjqdQ6AKSTu1Z6hnhFGkNM4WahPp9siGcHG7LiXBn7kRVgo4VJQ4PJ2b5hWywM7jgfoo3Jto",
  "key25": "5THdF9T34kK7fEpUMvRVpdHg8QXGoBizZhxcB2cmmsWoANK4vsGCJVk4Wz4s2xemYKbzBRKx8xJnXPSUnuV68j1V",
  "key26": "5jHFvPfi4UCN3SDhXQpdXjLSg1hzV9qvP8BXxzjhx4L9fL9rLSDapxwpvKy1Z6QxCcJxXVgfF9x1Y9jPqnVrxCu7",
  "key27": "3Kw6WSfyqpCcg9gRgBB3Qd3ybzGs8xeCbb46JUxu5hXdzKxgvbHJedirYvCRqWyRwdtqebuSSp4gZFtBskQbTXgR",
  "key28": "26WMfhCasCXcybYnPHWY9yjCkJpvMcrChhf2UJC9cNDdsc2mkRv9BnddVPHyxDMnZVjio1ucFSpHx81WJ14P6LS3",
  "key29": "iuEG1FDA7WnarhbtfyJrpuBdqdqYGKm649UQeu2xpH9ksXbX6VdeL9whBdQ59431fwnTVuNsn1Fpka4fpuFaj2r",
  "key30": "3TQM7Ru2UuEMrxYw234ZkdfcyFD6maEyzDBpghusLEfAT3yQBzp4PftCXe9JWAuTzE6817VtC2voQ6dUAULmxLHT",
  "key31": "2E7hzkbEqK3E23p7WvGc8wzMU6PRETK5ePuX2suzBH44957Hda5M1gkVaaopG956yaXe4bv1aqoiEcp4bmgdaLWe",
  "key32": "2GQkz2EWyPkE4dTYi6jfhAMPG7hHWjGHuUX9dyT3mCT5syZPPFgg9J2gFA2aWWPg8eAZRzGP8KXEqeywKL6zi5fX",
  "key33": "4vx3JAnNz1sx447gy1Q7bnMAPbABdwaKivSSwkHiirmvRmhjNRreWYB7ZRaWkZiKor9kJ8JoFGBeBV6ynKFGenqf",
  "key34": "5KaSJgwCk6NXLz5LigB39TXqLS7w5WK9AzL9JuE5qvpU8dnjGhnaugNdn2gk7EZ24n7c5WYo582b9emhg1VKbWvw",
  "key35": "2cHCBpRh59FnFMYXCB5a9cUSEZnesNWCgCTiW422MFKbRLAkSiPxuxBoEs6cABPK8xA3jzAAjCG3wAg7wVTPUnXU",
  "key36": "4VswKuBVwe9krM95WHspwZ3MGqYn9tZzdm3xyynZFrGMqXs7Lg89SB27aekdtQWCjA1JrXWFRLiD8SpMPG5k5Pc7",
  "key37": "3hMQfmPfrjmVACamgNyQvBuWvBaz8qjidctTrqVPSwRJ9YdjFPyvJqV6FPdzv6gwrk9DT5JiPB8XbzJgcSAJ2gfS",
  "key38": "P6G84KMfMwuoRgWjXM4hBTcc6QN4dBkZDgp7JgcuuxU9LipMoqx2eRSAqzPprpi8nftJQJ7yM4xa96kbREqyqUP",
  "key39": "5cRCKGY3sbeW6oATky2aE2a1wEK2N4XstdcqmxStqH7VWy1TMV7rckRh15LKVoo3jfvywBB5sqYY6bF2dB8HVQfP",
  "key40": "2HKqnDLkgKnEN92itxHspv6SPcf4YMX6WjH8c7t1Q8FuA8bHqWvbZA3DbCzWy8TuiUGgNSynNKMMPw6Ss5hzP5WU",
  "key41": "27HRsAzATgfQ8RoJ5y9ae44wYTNs5CjeFnJaGNKosvGJ42oEDjJzvgL8Bfep77zRWEXKFZFVyovUpHPFUa1URCGm",
  "key42": "2KTLHkHQ9BoN8VHpiRHVC5PPA5f4DxEXAuHCBerFWdtCaX664HCusxqCaYG71ezUguxjBXXV52Ytq2fLWdoWZiGT",
  "key43": "3hmDqE86U7HbkRtYFEVAwiWQVzE6SZpYY9xtsStaJtKJUF9egHv7uN74qAxgEDU8EFKgVtpC8MXHqWz4BnvrZCAx",
  "key44": "3cx3BXe3AdiPKzNqRh6sVvG7wFvP5Jsb1xRyca688iXbGLUm99ok34WUQrtDtjPRLHhuuNyFJ5CUJbtvBJjxZSgW",
  "key45": "4VAVsNdFKtp6QasQmtHHh9xrBsFkUAtaCwwHCjQwcwGRVSDPooGWq37NY1qVkPyH8zeAJpGSJPXhGkvkkBbkmhJW",
  "key46": "5S9SMqX6TQsE2oPL1t2KiujssyS5ZU63aUs3qDiy6AfqDNEygvWUNoHDoW5HdsFDRA5ATiiMCsj8ZYMGeFvaNAUr",
  "key47": "3zVuEZYRAK1XnupvQH7o6k9F9wBeZqBFfyuHg5MLfzgKkSRa22GEGmCmAeWCnHP7RYvvYA2tpqmse2GTVguBaFeW",
  "key48": "4SXb1YpqCazNAyFqTPWMwFrwJz3STJvmjPqtnLvVwzD6SxxvUA76EwaanzcL7Y99vaG9s81zN2vs1pt9VHoszC5J"
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
