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
    "3aQg4HtwMQkEe9vE9NaEpETqcZGHmDLrfJd14Gf49zSFv21qgzhfuavFVYbGyCR4RUgHm87zVrVKYKD94LTrhZL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f6fLKBFZMzAz5sdrMKKTT8VFgvM6wC7iQ4BoW2DAQeXfexzYtF29S2SNvMY3xEPQZPDzn4Y19gjECy56HHuaUqX",
  "key1": "oHoPt5v5MTWh3Nw1FpG58dKw8etKJtjvXYmRHmy4FpSJJoy91AqHAcibX2zbwG5BvYJzxM7J3BpN6p5uz5ZSbVC",
  "key2": "61NPQXnJPiLHvEnKpD8xuGRnbDNMbpAZS9Ej9Sb5GpCfXfgTKBQa3aCkoUxsLqcZBUZ4Z7gQwLdLm3DZ64NAwS9e",
  "key3": "3Jc5M2KFaPLdp5eHQ825kbk9dfjt5WVY3hZ9MfKxBxUbviNF2ajYHrjoix728B7f2X3NaapFwoUit4wx247bS9Yj",
  "key4": "4mYHumrGHUMRqw9hW3tQxCASbWzV2uPSv1gZgEXoq5ZhUmv2gftqHwNKa6iWn3ySL1xoZoef9Anzx7TrKkZvcjkt",
  "key5": "5M8Ga9ZuPKGYbouTcD7k4vwR3NW3oVGkVnJ19X2prxuhU6JzcJdnFmZEBeckbze3WRo8iPXy1pDbAcLA68HCGSer",
  "key6": "3SKggEzxW17WfNi1DBFQBUN733bspmShBujjrCK8vezQ4rKxK23KNEarEC7ZB6GQP4cepm2WqRxbp6eJaVV6zvYh",
  "key7": "2354VVTrNv6Hnf9Z91DMrj6yxpjuqxKnx46MErZ2ahyZob1f8ktRZKu4dNtPqziwVsGuSNw8YFj86g5ZPxrmNvkR",
  "key8": "zEE79jjmyg7eKYTvyebiRou6167m9LmRtv6ncot3nauq3WbCpp6j2DXzndbSB3owTAe9am3a8jcjLVP9ZqD7zrk",
  "key9": "5m9gp8XRdHqSWQXzqxifB1fCNRnv1rRX39zwUP9Tu9f1q51ScnQZxyjr9Ae79d18as75vyF8VCdTEaBWTqmWLNG7",
  "key10": "GAFovLY8Fes1VPLSP3G1y8V6JvJGgNq7Mci9Bo5ZJaviPjAEasA9PMXGJPHAvNzKFGRb3yUiRpyMgfQCxBUX5RH",
  "key11": "4B8dDshncTChaQhQ1vqQBLopk79hfU1Y8uDbqE1kXvPfrJ9dUAhtPV4wnpjmHhq8YHEgHF5Usczzuwdrk9uPvt7",
  "key12": "4pNdrAwBswZLGLRNQ5GQzPRj8vHg3BoMrbkeUj3usJgnffqhfpt8XWADa6CPRvzuUTu5AuhtFu7R3VcMqYNrbwS8",
  "key13": "Xn7xBTXvtYMgpTMAvSCdXc4DoWMP1zJcnHYJMbmGySeBdUY2GKi4psVdvwfN4kW1iTZsPXRm2daKB1HW2b24r19",
  "key14": "2WHVzAqaxCRWre2cdqTJD6ei3oaMB5C5eJsNwrfrx7Kr3ecg5LJLbSvr9yg3gp7MeZW9GULq96cqd7wcTCj3vv9U",
  "key15": "3pAa22dJ671Y5Zc5ipEe5vz8UirYVpkGe46k6JPHrwp6M7G7bqzVKVA6tstzhLeS5Ezypr6eKGBEaeigShqQdbSt",
  "key16": "2uK6rPJaFJEpmeMg4oU3P4hh5HNwNdsLdBgBrSeHUydi3VC9serQVTPt2vMAiBHU2LB3CfZDcQ8i4RutfweyXYMV",
  "key17": "4NJo43LrNVuH2ruJgpz6VWEbxZfsRzhNt4qfW6egtDMCCiMKxzCAsDYqqkmtP3kPBHAG4tsmp6R5cVdLnF2BCVdN",
  "key18": "56NTkhSEU8L5ASmLHGvRQQM8RnMYTQpC67cfGr53Fa43JoJja5aj6rp9PvH1FkgvdEeHqYr7Bvte7opzZKeRqDPx",
  "key19": "4WYJb79yMqSazaZT1TpHDmpnAPXtZwxstyB8W2DACGGahbtQVGun4p2UDGKnBtQrR9aTjHzTDpYMNXdTt2FN9ofz",
  "key20": "ZmyJJ87ptkrvjceDkKbLbMEVASoaZrpW5UtQ654gEo1HFikU4RQNRyJqLrVTDkPhogvYUyqHNfEwdM9tPKZk9rr",
  "key21": "3bg7jphXZBsNkJ2M8KboJPMgCNeXofoCEmPZ5uoygx3CcbCQUeRnf15WxvEEDh4GctFDQLE7wNw8cotQqpGL7Zt1",
  "key22": "67r7QZq8ALBuopSn8exnqPjYUfHocbjPMs1j8wDAkk3Ku2WTqBzkAA3C2yxPRVeXrP1J7ixwC1g5u8S4YPAsgBgy",
  "key23": "3zzvq9S62ZrDkdxapbjgP4We2y2B6tGSa7dLTuv3nTd3ZZjX9KRiq61sKi1SxJL9p6peXatSYTXpVry2cCm7KBqw",
  "key24": "3T6EWQEvhRzeD7JTbQqCtF8QdQoMx6HSwYZtePoqpUFhmLpniH1UPFZNj6prDEDEmP6xWEQEN1KEJDHKPaa6QvmY",
  "key25": "3ZEqLWoXJyHYhJJwEVcbg6kc6sqgmZViv7sN8nno34tVpZVztS1SQhDWKtt8bwkzzBKwuBRzapZNZFqE2QP73KnB",
  "key26": "8basU7JvVdRAMWajC2GmBGn9C1yg4KbmenRCLMqrXojMurTZQY2judAcJzjk5oFbvJ413uyEEMu4y5Q78v484Q7",
  "key27": "zk4cNteRpz4apAR1oXLNFSTPBHxGDvT61CuPPEkZJ8g1apJKKX6Rxsa71B9EUaKN96MGHuHiYjYXv8LcL6tzQto",
  "key28": "4dYDEvUX15Mg8FJ34mRmrfLSJnEo7a4UQREiwPB74TsSnoUkNH7neJamCMssFxdkoR49ENNnPXke8oubToyUdCY7",
  "key29": "41bjpUrtoiesEP8YbidG9jnkh4hej2AFWDY2tFmYaZywKqzwFQ3pTn7FPPcirRaKpfF38XMNPMi98j98kSxX1JNv",
  "key30": "66tLYxqpUKyGbA8hjb6mML5GUfpFN9sGLeWDEjGTouTQnvk1aeh26Hefe561gLgXkeCbiDgNMXoLqaBaF34LyDo2",
  "key31": "4NYV32cMteo53QC7oy4eiwqSK6KoJcPNVywXUqjez876JviyS17CzNMXq3kPAa27ZWANFuX4m9ahbLaNfKF6YoTk",
  "key32": "5AnYqjvMf6RcP5HqvMFneqWrAkK86GK4dbAnKvKegDQQQEmtUYgsCjKdmPg7SCJR3eprTXyRrt6qYYQcNHVgz8ZG",
  "key33": "5Jvb34oQm1RBZiATHAS1WVhyS8bnpmFmeYMCH1mfXF6JYZBSqvikizoUqLiPLeXA5rM1W2xissUsCoE8DuUg1EYv",
  "key34": "4ejgNjk523h4nbuFXrSz2RgteckXtMueFW7KUBQVPTGPrNWnQL2SBeuEp46T7CaHJFiENh1WyrfpQa7DSw9PW2WG",
  "key35": "5PnPLPbU3Fa9A1iuGjwQ1xuTquWY7mH7cyoNLbLUdV72L7j1SUPuXqrRpAh9f449QxpfBTDrs9TTtBUKnsyyhxci",
  "key36": "5cxdfaf1VVBiPek519mSgauWyMdXU327gj9bzWENFJvsJjT734Gnv96AKB4ZLnDjiZNirzHGSow1xWGuSfhdEJ1E",
  "key37": "3pC6m8tuaAPyWcbbkMPTwVfsdcJfcUNhoHL32TfMd9zY1nBjhmf3j3kQ76UBxT8CDAqRdiSh2qfJQS3jPyrhyMrn",
  "key38": "2PCQXie6GhBXEqFWTfdFJQnX5eT6Whd9wNS86aeM8uQggYaDeFyVxmTvzaxDZ3d7Gk1Bjzrmq1Ek4apxZyF2XmJY",
  "key39": "27ouqLp3Q76eVXWbWX7mUhyAQcUShgXaYuG4xcBMwWAS6uagmFMHpH3MahAj8onCdcwCR1vzCAhug9VX4Zg47GDx",
  "key40": "2M67BdWGf5Ahu8WcpgJdgR7owonTrhHV5Jhbrfhw6XKsWw6rK37e7ieVZqdstCa8RyetBC5f5AinbaZkhP7Msc4E",
  "key41": "44PYM8vqyKtCPV25AW8UZzUW5ZxhTTiswf9LTEpxhfYGVvM59jfhtUyh1cJ2NKuDhii73i7p8epKh3fcDgCaRXbP",
  "key42": "594sLAedcMrGwBVFwb87sqyY9Mcnbej4juC5oQ5M8kEbBqhSL1sqA9z8DQQrPHWpZZvyyiYWBQuAacnXzGJ2ndqA",
  "key43": "2ibE7ojMoBhjeb53L5EE1XpqciXY2HdTv7ZWcrebaev2LqmcgTGMq8MtopLRsuoByNPY1hcXLuq6bCug5n5VdyNz",
  "key44": "2VmpE1ZKys3yeAdVnXzUwVkDySq7pixrfnbTgFnM8uhJawhTJp89QmNANZD3apAxEYbCpij1Hfp9gysTd25Cj85D",
  "key45": "48qEXNNvufTi1Qom3f2Mdixqn4qykb6npjuYs6CmUryuTPYfCKjHv64RfA5J2U6VqWc3v3LagEJT8SCmNoVCr4LY",
  "key46": "3mEEwT26tDzXho8Xw7aTW3QhWkHvLcJKAvcCKapoGjtL1qQxM6LsQ7xLK1XtSewCubeJwj1oUwXAgZatWDnFqcja",
  "key47": "5XudhvfjYEH98aKCYWjL4eVZqaAjCsDKQB3sJ3Ai1FxrzxNnZ6D6w5ke5Xq8VyYQXgB9T67PeEAeVJKMTftRpPEV",
  "key48": "XTGBE3SNafq8QXLDwaj5bXJyJePWbmFQu6Md9Xpxh677xUbC3uXzxFEaUw6Ujq583himkuPssD5NzFngJrKn6nD",
  "key49": "2kd4Bi9AuDBWjPVsABaTcY9JH1vD18eQdWuHvBec7LCUWEkLfo6UVrp3231PGs2YHGGbCRMgbLbERqvbW491CvK4"
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
