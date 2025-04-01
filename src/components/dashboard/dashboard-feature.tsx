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
    "4hbLGmtEBPc3zZZVkb4gicR6me3bYc8D292sf9HjmeoB4eRpS134qkCGxPYTD3VXEAmnEM3BqbzKC2GmY6SzbNXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ibu4GLZh2phkiZbiCM1aQpk9ReKtREuJ2ffuNChQ3khr4shaKsDnNb8GBWnUe36Cp81bMdUqAC5UCcTPTooVXAr",
  "key1": "3NLTVZn5r8EEwVXJTW76N3JNaT8xULadMgwrAUe3xpAKPx6D6CdJrhHB5QbnrNCuv89Si6uoo7tan9ebsfue8uLk",
  "key2": "5aKzi9VR9eTVWAYmQJ6hihhd2dSXutA4PnLeCdWUBCW8kDy45Sx2Wp6WzvGNQsR6XqwTmaqcxxgzx3XaCeB47HtH",
  "key3": "2uvfqdMWpCK2qWJnuDKrSzutBFqqe34NCYMTAsQK5QRHBwkE8jkn4oxPnBPcQQCExZM8Xmez2nnbGTZmikDfizh2",
  "key4": "nr3CCAzY277qxqgKfcAceYeUGczJ8HTHQ6SQq8kL6pWAP4qwXrHBy63ZzuLzxCYwW9KHAMtLbfVuKkAPCeiwA8v",
  "key5": "3ee65FytAPSiPUigneCqZEfuxnJPYdKtYPGda9JXyUbJiBWavBLF7U7zpvq8ibt2cCuPgDz3sTwGiK8BCW6KHh3w",
  "key6": "UbsXJ6eJQJWizgkmYKJceSLeH7Vm8dZ3panhbscZQxrfF7zw1DeXKeg4zZZ2cUECDWpqHvwiu36Youu9snZpKmq",
  "key7": "5VLARoiBxhQGbzyTbEu6NJW8adFp9uj2A8k3vvCLpZ3QxPscZ3TwdkJorWdEo7axre8pgufXm2eq9ZXugKWjpDdA",
  "key8": "5FKdBYsr6VdpAKLpMikxuaHqfEt886PgQ8iSe9MQntoNoRNVAoYHTx4GxEobrwWXRjA7bxXrRd9zGwBRLgFTcsyE",
  "key9": "3U7D9tdDccA776QpSFDHSe5RHoL25pGVf8Fz8F1PhkbJd4n2MWnjBsBE4nYPqb8fej5fzM1AuFgmr2G73XYYNr8q",
  "key10": "2fcMu4zZK19wEKS2LLEhvYZUHWcRTrg5bg5dxdr5mUaGupo6hcKNvJgrJSjJQvG2mgAbCs5hQvsGxuw8iGjvtbBo",
  "key11": "5UMJS2LZxMrXA7WM1VVutPbkR2XW3d6E7AEyWDw2PqxQqVj4LeHUD3cBDYWBhZAR8RNscH1ofizECAtqh3Rn21PR",
  "key12": "32C1epVBFC9adVaXrYCQmU6TMWHK5adXkzRtBPAKDPZf9nsSNNWiL6FhARQLwZfABenNQaBRxxHo3xY3dx6iehKk",
  "key13": "G71oPUx6fqyPj4epbmMMPahZQ2fnuATLMxUHCnqDmmbtw8uGFK9xWjWh7WSu6KBoP7X9ZV75A8wtQHMEge2nke5",
  "key14": "2dp1e8sgkVwUoxpQQeZGS9HEB3EpoYR7RjpnffzZaD7EwxQgmFYMMgsR9tZjg958f5NaX7HRMWfQ7Q1ujqy7d3AJ",
  "key15": "5Q2QR1KUXhZKPvcsp81Tv8XuAkVhVGhmWGkXDpzRkZNicUhphE2PYs1f9bMaaxPRXPxLco3iStSqyefh9midBcfN",
  "key16": "2EMShXY3Rdo1ubpcLv91djhV21CsJj2VbpChURtS2RcQtCFeiCSt5r9yxKemD9BHS3UzskRFVQeTCeRwRC5NA3pq",
  "key17": "3SkDVZRrX368M4i2Sfnqy4rgM57ajdn2QuVhfhGrtTCNwU9TohMb9p69BsBBPcJHmxrC65zkCeU6y2Q4WnCSehFC",
  "key18": "37WeQ2Tqp47FRhjUFrDvjnaQf5YATduXpRaRzKCav82Dua6pWLS6dPvB2xaeyZ5CGAQAEcvDh17VgbX6EeAx1utF",
  "key19": "J3HmW8dhcgJVybKzrvDZWetUmfMSantXep37Dvpwb8ScwQdn1SopwZp7Pcc4p1CMbzaS4bu15gUnfiN9FUJDVwz",
  "key20": "61vWtpovKgDZUXgJyRipD3odnzVa5Kwv1MGv7oGTcPotN1ShPyxtoZTWeuRvSMjQLwmW9VsNFDmhkgVthpVCX2ym",
  "key21": "3xAJMiXVReBTRRUQfmF1vnoUPmUVA5zekRdPefABC1uPZKZ5Ho1ZCo7GDodnX4kLaCST5B6J1UvpZxMgtJTBK4j6",
  "key22": "2dB71frKWUGgmeWkGEWUZymP5P6C4hVR1yCTnoLXCDJ1jjrK9KiRNaSNLG5HuPK78BPRskgfEqv2PyC1b4gAfy5R",
  "key23": "HqM1TwHTw1G7kZXF39XzeWa4gA8Vfn17DxDrjpwaqpUNuD7yietrgAawYaEn7rAuZdhcuuZQkUvvZmeCSvrEvcH",
  "key24": "58XG5jCczBjkHMnsyUrTRpUGcytxZc9RKCC392QMFUa1YLG17SJa3AJtQmAuCWKpXgQ3SMYCvVX5f8rwEbVNHpRc",
  "key25": "2Vst7oSUnDtoCo98vsPpbCgGDYMY6p4KaNCtiGf36dghDVdz94cHCS4qGy9p2DDXybdN8p7BsTgg1bBn3bo17LqQ",
  "key26": "5DXarGYNrDLuKXtHSSHEyRvC6SyCHRjQb4jTwigtxXVjK27WbWkB8c3MsCfggB2traPCCKJCM3jGYtDpHvCkHq8e",
  "key27": "FeaP29ynJ5q1XPM3zsC6DoThTCBUc1Sjerkpbe6Yn3KDzfZBUMZwk9VwWVMUDhoimMPz4jhm2mEaoVKaRhnDQ9T",
  "key28": "4WparUEoVCbkZe1HccsdSyFaW6pZ7gHerKYnY3r19vfiPjULb3WCYvMGiFA92NvBVJSLZoffJUZ6dAE36biYwP2A",
  "key29": "2Tde92JL83EygmAaZyu32yXkWWb4PLXuRUnPk8aX4y12VDoUmvCmmis6mnFNT6m6Jj4EAbjBHaTB7sk5mYSpwjfE",
  "key30": "qz7CyRgZgbCF9q5asJPBGyqavjWe2Am5ModEqxPZAmAZuVZjKFJ6bQMoBJzHqa5LTY8xzybuLzyEjMSdupd17ke",
  "key31": "3cXhiNy83vUBTvnnp5Fi66o9XdN3jC5b8UD7oN56yjLqdaRoBUzb3fQE1fhnQ6hSD3yPAk2T6U7EWHTNCxLfSFMT",
  "key32": "3zoRqDRfLyoHwu12pNLA2mpFwyi7aZ64M1Abv7hncuMcHBzsEu49bE5cEkazYbLe13aKgw8MfWarZDYrzStMRDuM",
  "key33": "4JsbCouLkBUPTUKv1C4mfL2dtjAH7Tb1cHQhpouw3XdTcrAtBLqQzkxk4vNRuMSLH91ZmRxvLB8VRLT4fbfuzBRy",
  "key34": "21KrpW1XLvcy68R75DQb5QNNAEa1kXjgayPhFRjQyhs9KoFKcrD9nUmzDqPsRwV4AEh2ebN77UnmqG9UD7Nf8q2b",
  "key35": "2VScA7jUysNS8NrQpcjDHw6mWRhuh6RU8FmuqG5HNhGxQ1Hrrgdmai5GABWjQbStf97gs1q2XWfSVB342gqgETcY",
  "key36": "SzxAEUkjToiSeM7AcikUaKWn8Kss5ybpJXxyUJQPrDqf4Lh6TLpcZDD2EkUXSVfXnboK4zoAjmiPWU611Ju95Ag",
  "key37": "2Xf1kMkoKqKC75FLMfER9fs3y6zE8CM3YRK6Hbt1wv6M5o5kXpiu8vBL2LhmCJ9HUZqdva3kEBekFev5AKBrszpP",
  "key38": "65jw5VWYjGUXptcqGg7nxvZ6QboUZyagrALyJG651aGf6yfh95DgcDKzjv1uJMmX5XTVSvS4jg4uH61EGqTsftEq",
  "key39": "JU25gnMBbFVGSS6a4dLBvU2N3NfR3AUz42mVLiNZ9wVf8WU2wx8iTzo1DsHJXyCwbSmPXw8VPp5mgiX6mccgTwn",
  "key40": "3u23JYaJaCP4ZikQ5BvAZpn5EdYU3LLv5MDJExdALzWXNY8RUroMAM2Mn4gpNYVRVNdRZ5iRiQRxawBCgd9bsMPr",
  "key41": "21re5Lp5Av2xFzuBZUjdLCaspZ98J56pX7sQxQ1aTEqankLbJUHjuUdax7UytizGbg214Um5AvGHgKhsNkVgoP7E"
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
