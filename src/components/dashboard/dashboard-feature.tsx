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
    "54trsCHWxo5MJhPrFC1DhfneC3uBw1p8gqAAW4N9z3SozMM3h3LWwZyZQxaMRKAJWfoeMzFDmB9R1brTkkApA67z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wikhjQXBvLkmv92z4cKszzt1MZdsucK5F6Vwi9D5jMYCdEHXRcTqQ9BFejtaZBZQAhRkx16ADJR5w9Kk5LWvx9x",
  "key1": "35iWvhQe4F1uaNRMvpAJVmNniapyRru9rLVeLY1Pzpm3dkrp5yoM3eQXQGDDYixCMvLLTtmnHJCund8Dw7Qc1McZ",
  "key2": "2nFgcemzTNT3THT8tR2rx11mLrgrkPKiYCdLKCfgzW5mVPHqCcP26gyZyisWDMQqDK7Q68metpFpueS23GCEnuVJ",
  "key3": "5MCgCxRMaiPWCGJiruoyEgXLPDreuj5Dqv6yzUdWNeFnJqA2NEa99XrMhvqj8TwjGBG1fYPZZhdnwQ1eT4yADA36",
  "key4": "3W3gyFfkRommFBrpdBxyYuLPDiZz1o4ieGoL8BNZ3S3641sDJj89L4wSNuDEPVLdrFjLL3XJLwcVUWXcHhqiAwj5",
  "key5": "5RkiDQQZf9Nm1rtBUgZ4xtte5osF2q37eCFj185ETW2FebLPRsBKSA51ZU7cSVb8UQ7yuq4fC6UkNy68zjAbVdLg",
  "key6": "7WpaLjUtzBzp3UxjeWqkNLKhuhJgbvUdPhU1hgKvWwfKQ4x1yzGbhth5oRPe1oBbdWS4akC8aGu8kfGWG2NUe3v",
  "key7": "2QGFJvAnq8wUo3aSGNQ35hJSvjJyAm7NnusnMUZrLFys72eK2PHAKACd8Kqh7HMBfyrL1naBinSCWY3HmoYXoLBR",
  "key8": "5boBW4XAMd6NQxbLhwkQTUJu8WAjizhz3sWFDumJ8VKJh7LfJWV9fk3mgaqvcxW23uzVswSxujQaKhBbf3tZknpR",
  "key9": "5bmD9y6tG9zxqnvw3q7Gd9FgHehRoQexLt4VJniEjeZ2D89bGPv14jShr8Y8MQD6g8k7RP99XVbJ5jFRvoScDtDG",
  "key10": "5t5GbHo9UXqjtPqJFHYDaoHaaYvUeP84PU13u5HVPbNvprk3vTy8bAsdFQeHomHdBkaJvi5rhpHZGTaQboJ52B88",
  "key11": "X6x4x4D99uM1KRPnKsDoa49F5o7xnWfbmh598wHvruSbSst5iYRFtTtzE65qTK5br4StGLpmb9EmAQ45CXiKAu8",
  "key12": "2vEGXrTA75yFqHbNkmgr2B1WuGKt6hvv4e2kxHjESii576ST9F8meaShvVxQPTeyAu39H6UAosfknYnk194y5YDs",
  "key13": "2k6yWhBb4JhHyGYhk6eyerkGrAGzkE6GafoDGQATpYZQLY2zWDfavEVrx4t4KuxxvR9Sj8GxsychGEd1cj1RBjSW",
  "key14": "329NfLuGB1uFcGSUPrN8XyxUth8ZZnRU1fKDmeaurHSMK9ENnPEBr2Bv4vt8ePvBggaJJdTfZrZnqakgt4XcUmc4",
  "key15": "3Z4biUaWy4ARkvkbRBBrYfMPkzEYfPSa2Y8tWr2abKJwPiXZaFQbNmTfTk8KyQMh6vb21XgcmC9g2xB8RazP9oxq",
  "key16": "3MGyYYQ2VnR8ehMXCDPMoTY6u8GWbKvJRYNj5vvT7YjMWNj8cZ6CnAM1xmhJkJupcdnoNp3uHKTBsjmkYKuyvXs9",
  "key17": "BAYxXcCcoUmFfH4fS3KvBnrJ8fufBGY76LBmVSsN6bfxLRkwu5f7ikhhxPcU1TNHDVRLj89xjZTveoZSBZkcgUm",
  "key18": "25Ru1AeieRMoQrYDwC82WRM1xujCqmBZnLa3ZnYbZPbavrhbL58eu5WYtjsnpe6FqChoUcApSyWWisGtJotx8ooL",
  "key19": "2KD2MGpP2ayVuuTJEvYfxDB4a6a7u5ECUYJpxGMyjVLtqx76s91VU9nzbZeEuEWEkB89iL4h8JwPc6xVbK3kXDaN",
  "key20": "5Ym6wtk1bW7mK7UF6MmKDTPc9sA3amDQVVWUspxsKSXREBm3GLRPqJY9vF1VBHpfepUPqgMUV5uSrBYYpZtgSqSk",
  "key21": "5EBQPiyGJ9avr8xz8fULU3n3X3AkX8vXPDZ1Wqy2119ye58CUm1WQdhfBK5r6bQA9N45Ssv2VWPzrQf25ohtpMxg",
  "key22": "2oHzyyWkC1sT3NRXKxkNHwqtBfkoG4QwNSUbdkfx1YJ3zy1FsXJJWAgc9aCfhcHNcRu9BxjehpFAhpCyYMRgrnnT",
  "key23": "3A8KxqxksmexayiYCHyQhxvvFKoaZehEE9ux4pFu1ELCYUSVFcMHEVBGhZSSyzWo7wGc1FQTbGuEVBgkBTWww6T",
  "key24": "36Y2fY6h5ZAjwWFNwQmnFuqBTExxFUhMm2bXw63NJBXGSkKXd65dwwNqhi3DXQHfn62mNMEopzkWpTL2Bmea73q7",
  "key25": "yddRSKRmfM75577hhS9A7Xv3kuXHFbSeBqNmzsuuTAciAKZDU4ZpM7Dco2uVrkFz9QA3FddZtNW8QLMcHdyBs7e",
  "key26": "35NdyesHfnn84Zqf9YCrHtChtE35Dxq5t7uN5ZaaXAs4zAgamnnXH74KizBpQmta2wmQaqx92fA8zZqJLArF44Q8",
  "key27": "frZVb1bK5JxXc5h4mLN6KpJAzHncS63GyUkejcGQiyFe7RtMa1UErvtRhtLnAcM2Zs6AGS5gdScwumMqPbsmiQq",
  "key28": "2NZi3U2aNKBdes3c85rbyGw3sm8WAyRgnXtmRKVyCmf1oCYy1Vw9yB4aUevvd6qLwNsEYD2BamCwQjgyokhc9654",
  "key29": "Am5D9ctRBoGgBqkZdeYSXj4SipUeCNVjC3GAN3bba6cCAguuGgiMo7oZbRqZh5rnAb2whDbr73RrNyjrh4YHwvh",
  "key30": "2zHPgogR6BuToHaNoHsXFFnugHWpgLU3noX7nS8mhayAxG6QQbx3vLRy4X8zxUMiTxqAPNZGm2pLZBs4VHmybgKa",
  "key31": "2UemTpBzDvaiT1HmNVDAibjVbZ4tYsBG5LWdPw2pauydy1dgYjiceGYMQA3D47mqZX5s9GZHzEeKNJjY1YeanJMK",
  "key32": "47wYR73mMRzEJeb433GaXVDfLD9W9M9vrvdwvF3YYM3cU6VTNSucwv75S14BRasinr9rMy33STq6KQ6LMK73qFDT",
  "key33": "3X2qmSakWGtQtehocKY8WZ78A7ACoQLhyXxafU3vXHFah2xWvpwWBYzxes7AB5BngiyXTBTfhnVnBMPaEh62xerw",
  "key34": "46tv1FTkqWFC5xVR2bUoN2a7HL4zoMDp4ZsmBWewHWqrJfnsQUDzVx6DdnNmhbBwJkDAgNR855oxMzZ88PR9gQXB",
  "key35": "24ztcx4V5HE6ofXscQ5Fxj8MHz9LrrHFSGoYdbtPzpss9vz24WSAb39tUeGrTXEiMZ79khNPZzvqj8RDMciKyRAj",
  "key36": "5Wio7EYmmDktrKjDQ9BcFtqamRc233o4MpdLz2d1EPrM2e1ByBMZauMGTGzpCsteL3gdga8dB1Da81EAcd2bXZN",
  "key37": "nKKKoMxvvNYWpti7xBSc127qQrnpbkv3NEHefx29iute7wmxDHNmZpdcscnWSY3oLmuHP7jgHedHUS5J7tZ3WcD",
  "key38": "3jnxMP3wuDVXnMD86a1PZxaHbhhHyzHewhmxXG1T3jvKedSF7pc5DZPp2T2fi4wCBHHT22AvVwGB4KquF5swPJt5",
  "key39": "129h6sbSVoaB3pY8MguavNSNBjhBGs1fwuUbZW9ugimcTtqnXQVkDy7tKu5ddUok6hwvb4LNJeqAdAvfneWsLJQV",
  "key40": "3FoLuBEYtDixqxJ3Yn2q1L29Gk5b9B1k4knU2dEcURak4LhcRd5sXpPxg3vzMzSRoDjCacXqQhcsDo5XcYXr8uh",
  "key41": "2Vpi25Rm6xJxxTSZkkECSCCkKf2p7exx8uKhrc1gy2v2QRdnh9KS448qe1BNbTkq4a99KaF4eGfsrTNTpoee6ZzM"
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
