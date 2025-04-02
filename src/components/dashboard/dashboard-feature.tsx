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
    "3WByo4rzTSweRW9awjweXFgZdbjcbbJ9T7kcyrjmDshwa9BbnFDwrEPS2rYE6jJip1PUZ8LG1CmnMq1Z5NC2dCB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VttfHdcbVy24uobJ3ivoGWnJgCH3uyPwDm7VsvgPHQP2jRSja6FkJg8xyyqgsjewgnWvwz25LqzEUBanq4Sniod",
  "key1": "5z5ov1ksS7EtLFTavobAQdYZvH8MiJqbSLRD7UXaPzDcNs2tFjjAaXfYCcwKvtRhVP1zbUeoGGhjsJ9mQuEQw7Rq",
  "key2": "34m1zc1GjVgazcesxxHMAQG6cVbsB7mVAFwCFzb6EdU6zMk7Ls94gXSr4XjNGzPyJ7z3Z5aUS1oTp1ydXTPkeFKR",
  "key3": "3xgqd2oEkdUeqkifcAs1pRFtJai63cjTNiCUBctrGkSjwuaqn8bXZnkqCSnhYHZo1fniCiv9wyrSrNp62kTLk7Gf",
  "key4": "28sPunG5CitkBS1ZRR738xy1dD9go34UUiSyaCxBLv23Q2FTigLSFE4zpZc1QLTqdsG69kwawnLnixoZqYfpXiHb",
  "key5": "3HsD7FsWLgVxGdHphyE1WxTq7bmkzV9gF2ZuA4KUqB5SxzWHXsDFSeCFUUT8bhcRn21XJLGp4QspGWGXJJ4bHsL2",
  "key6": "pFSfic9bLbCGVzutS9oUnz885cgMfsp8dP3k3koFEKJVwKfN2WB3gGMjHDUJaWFhgS2FyNX3jhwkScjEzgQYqYN",
  "key7": "3XMLxB1BNqcwLaedtcVNtiQd67zrs6SWoW7Z6RJHrPf9y77skX6ykGDcXs1hMPpaRsCNNoUDzyfP68CxnKGpvTFg",
  "key8": "4c8hdvv3YEnUPaeeoaaUjTeeeofgaN1XSpmVgRJSouog4PC8DfH8Eu3eWvq23UPf4KXM6KiXF6vbEYK8WENRKjbC",
  "key9": "MWtnKspRjVqEDQjdTWwgwxqwAEra9ZGkX9wjrV97aUVsL92XFYmdeDX5uGnxnGZjW9BGreu6bn7aMqwBEapg5co",
  "key10": "r2EZvwwuCW3hJoQ7Ca4Nh2zSVfK9Y11eHbD55ZwULBhBZ3ggrEcwxQLBpsteWJLxvsRnZDvAVadKFLFAuXRUZWq",
  "key11": "1265H3BqN46tDkcB8FfKVyH2BPsd4UgVuo9ryiQqqLSyoEwdsJt3Wr837T5NT93QbsJZT96mKE8sPFWwPzf4jAQR",
  "key12": "3E8BE5bv3GdXJJZv463PPvjcBiV2hPDqQgh6SubjJwBqL4fp342er7Xgf1SNzPjdLWw3G21cKbfgNcBg6PrdpgX2",
  "key13": "3j6o6UN5LDAUyZBtKzNNYbey7LMikAcRrHQetMmmeHJDUrK8uyE7BNHN6pDed3MpAT44z5kSrdaFQr2Z4AhjVd87",
  "key14": "V4bQSseBfquX39tu4sdnTTfefUve3kDLkPBDy5doeJD9mJsFrk4dqEoDL4M2ihEoELwbwLururshuT8EQsEenXj",
  "key15": "551aUt74ntu86Yp7yusbH7oCAvL8Mmo1wFbTSE4gERJWQPTtT3o2r59sohLNQcnr4HwAWpwAgYtksZFGZCtUGkBD",
  "key16": "5e9qnZddsD6bBDV6o1FzWcaNDVGkbe9P3tmjRqJUg396kfCfH2o9M1qCkkjMKHcxZhAY8GwaFmfUbKZjwAoSbN5M",
  "key17": "3Ger2iNoKzXBrCfwVEM7JatoqmruH82essANR7XTfZE43jxTJnBoW4PEttpcPYP53ZArv1EokkELJVjnXoLBttY5",
  "key18": "5rrW3jbR5i8vseERFT7RgVQPYZaBBLzHJkU4qMPxxzaKCuyzgarnNSc7AbAZB6HftGQrsrQnQJYCA6GqkE94pQpN",
  "key19": "2YorTuKecjc9h56bom4p5yn4UAbrnVHjfuVFTthhP2EC6TB5CDoVQqzXvJBr4FDyDakzEhk3rQDSQ8YBjK4b3tTE",
  "key20": "3yb3gstBY7qAKmqm2nRbuMbfkA14CFPwsPr5qu2C8Tz12orZ5jwKixb7hLub5vNqNw2LCzNVqBE42KxJ3G6cVmNB",
  "key21": "5wGy9igFPPn8GoScVd4HqnuqRj4FTGLUo1kFdNCf1rqHBTKR16dqFSvjDPeDTU8nMs2poka9NMuMLXgfJjV5MMdM",
  "key22": "2mMfgE2ukuNJjToeg1jAd7sZjjJ1vs2wK8CMmEyovpkt8nPSKsUbfiTYP764DDvi5hKxjJ4Lq42EyYbdkbiGdszW",
  "key23": "49RaVep3obMBXBEyHDzxtXikaTP76tMRkVjb5G66ypV8VwpLu5Fwg9Ynbca1mYvrA9TppevmqVwcP1rWJZFuzHk3",
  "key24": "4XhSChAFdRteRBoSAoz9U4n9mw58HFy2LAgjnLX74yecLxrUCEaLzECgKojc31kwD8WLDjjziVLb92PCvteBTZyi",
  "key25": "3WDnztbDP25GmKfMy6KJqFLjiBjwRQ6J8Hv5zqLdGXo2jR9YmVbWGhPnKZ2XbD9m1U3HdH7MURJxd8a4Qs1cmuuh",
  "key26": "3RK4LnjVR6HxviXPqRAxkAT1H4AXGj7VZDfXWSfJLcXZY1QgTBJo28bvWBd91NeSUuZmJHi8VPUduhL9aDk7Wo9r",
  "key27": "4ZXhnPmv9XULgghmAzBRaEjmnvoF9kjQ6cFFhRAYnh1gE9UqhA5k1Jt4pjJ1iyrvVRZttMP3U1GPptoq7CugN2gR",
  "key28": "Pkq3mwHoMBXLphw5AmG6SS4gfB1Z9LN3xHareZGajLJoNzqjHNzVmakE3VJ5N2V45XVNupfHofBg4TJ6KN3xWpJ",
  "key29": "rBTyVWf8jZjUbqvadKUzQKQEDoDpcDBLCdH9m1VH64EuuQZ3LdZj4dLsx3zWKtnDWCakNwqJKJmxbSNxYjS8J2q",
  "key30": "3Yh6qLzac6CorY2pZUBi1Us9jQMsXJK59VxiWTu24ZVZUv4dpZymWAcaEL1FcV9Mpha7rtuaLm2NbuKHGb5Kytqu",
  "key31": "361VFeah8isPTg2FHr3zjP78CmEyLF9W68mkVWQXUxHyzjnRtANhRgBBNDxsjd2TccJULtYkQvxT1fjYhvNtzTnd",
  "key32": "3UN7QnuYT9XyY6bUEL51qraoUa1pp8ZMUtTqBrFgqork19TpAsCjC3HyAbLNRauiGizvzqCbpMJA9A8TGdPMkwVi",
  "key33": "NkVjTd2ms362GWLwJkkKKaBT9mbfErXe8giEmtLt7664omeh6vtn7qHXHpRbbAtREQ1RSQH27YP9hgubbjmWoPT",
  "key34": "2yRfBqrEuy2RcycAE6eymmwxGAEWrTmHAzyQ1X7aca8fC7qE969McgMV8Jgi6kaegLJDeH8THUCCr5e4Ask3cAkr",
  "key35": "25oqXLpXEtWR32uYQYT9A9SYcVvZWYB76BSSkN73zbXrzqGsUWRSntvn7WARjJhFrMGYD1Q4SpNcMak6JJMAtVMy",
  "key36": "SNzvJjAJnWYJ9G4ksaFnQURyGJusMSgGmyjfw1YV7NZL3y9B4Qsb7Aeu2PNfeF37e9hMEfXYxpDArdVKLqXMX87",
  "key37": "5g5nr55CHbvRnWcXcnE5DEtNBkDdq6erRyMqts4fnq5DngnGJxEHj3bzFCJFAzHKHoVsxomATCF2AjEDn987xL7d",
  "key38": "3zg9x5pjzos8MdNft362K1KvRvfCYBnwYsx4hHX6Fx8d2iXG1REJU3MsiTMwLtGTmgC3P3f9XBfbh12oV18Gur5j",
  "key39": "4u97kKzpH5kqN3dzRNzNngGLqK4R6SYBzu2VSnDFtwSu1thSYsPcpjvVozeRAcGsmfGsqhU7quDCsXLBHS1H82fq",
  "key40": "oAKq7ZK2rmud6GK6n9M84Xku8NVZg7fE9JrUXcX47yY9AjhHnj7UQwupZZ3C7WrwN9KgMHnWQQJqQ7oM6Q8aBHe",
  "key41": "4roHqy46RQXhoqzvdFoR6WfaYnKDQBdAZuAFvT6ZAzvvaMrJJjncqMPtzGQgRgcwDV2rakvQ9gYm1fDyHWTU46um",
  "key42": "5hT2CNxeXxcU9Ait2xfwrB3GEqHNChuubFULm4mSH2fBTVecTTt7cAK9XyJJ3X5LBdd5ADMcKYeLdS43Lyp1CHUP",
  "key43": "4hHHAqjjJCD6eAyjUn11GjJwxdiATibhjM2Sdv6tLszffx3XRqLsuJ3LNaU3opwTsS5yQB2S5KRYNS6KTXW6D12G",
  "key44": "Tz9kCPnhvtvDYMPJ4NMkdZzQAYQqDHLg1A2fUkX9kUFBzsZSQUkjxSUHABKLa2WaMZkYPbTVpruAQB6dGKELkve",
  "key45": "4pfoCmRtcavS9Wu63ND23j9PUWaEzgPkLyzyJm8jR83oNxJza78MSiRnrJ63pYaf8riX4XWN2Qh8d5FoxE8BMKJD",
  "key46": "56ULRFcs41VpMxp1KNwkByR4cYCCieVg66vRajVgwki4f4YxyKisZoEQeFFnE9DnMFZ3PZWtYvdi8w6RMbBLVMjK",
  "key47": "39h4h2UxBR4KH5XSS5Wy2zmPnpnGpnyxhiEjuGQoV1DDTKzN6BcVDkTHX2SRsSovY4jBLpQfqzuFcb9dqsvBWdbJ",
  "key48": "5AtA3hUPzEthosuKPjgbC9UMvhCsEDiYeGbKAUsRr8mB5RYGaxpYtWAYFbRSwXBJBLFN7PSxG8LPMHNmfSSJp8A9"
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
