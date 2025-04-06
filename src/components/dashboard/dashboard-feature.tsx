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
    "21x11EKzg4S5gniQdNojKKtJ17hMrSam2v53ubXmsHhvxEWuWnsWkiyth5f1Pbk6d4eyCCSDhWMSgzF7m4pBNFGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rKcZsUTrKBko1bD3zJiBNnQXnNY6qCWgQ1DnTotLhEZfaNhbzvpkCz8bzwPpUkmN84MjNAix74pzKNe569fimZD",
  "key1": "4RLdqHaXcMMq6R2stAv13tiU8t6CpdZtXTyuvEdPhjLgnyUpKaNMg6bpJHiQMAnSD66yb7YVNx7Lkmeq18YbhUF",
  "key2": "5ZeXXXde2bpSejSMUP3cTddBtcUUSKCTkB11mffM3hxPNvqkta6cgAZMB23uxHYxMdpNgqCca2ZYvbsfNYRVyaCD",
  "key3": "5V3PcgdAVqoPY3AgZzdY6vpLk71ZA59sKeXxKNTUPR9dvSYgG53efYujr6M71VWJCN2vcQEcR7XFhH9ujWmPBiWt",
  "key4": "7CzwPgqw9pK9WVH3DDWSe7LfaqUd19W964GdqHZmdqRnHh2KPQsUddPg26odFuzqZtJarmUQBv9C51TvHcsP1MA",
  "key5": "2n5wLkT8vhNai8iP59moggSPvTmaLr9dGf1XVHxW8RqkTq8jc4DnomXKvKjPSsEba7Pz7ba1kE9phmhU5tgeSrB2",
  "key6": "3BkikxR5YQeAETx5Z9RZwnPJiAnp6tqRaN1j7HYNEjCXhC9YBWpakPV6zu9S38kGwyHpdSPNcG9FjmEYpY98BGoo",
  "key7": "48JVHu7yz4H7aN13viuC7wxjKhMkdpbsi55cqYFNewsyGb36crkhcS68FFYDnZnsuRJPY7BtGHrxedqeMZAMLuWc",
  "key8": "2gkaBwzbgtvT62ApQvFt7gCJqkqseSqC6wKvCswSwePTqJK3tDWYDEk8xKz8WEJM9Sa77n2tHkYzC8Z6UBmQem6g",
  "key9": "2QMUFVvsfuTXcjkCT1Q4dZB4eHzBY7yq95waJVAA6HvLGjMHK987fJ3e1Dz4LbqreH7aBwfa8yURfvDWcFE6y8KB",
  "key10": "3FraHpzF3aTYuLmCbhHLYSCJVmM8K1uUrPNYrBAvGmuF1x8XYZJo2GTrjfWQf4xPyZbrbPUXvpNBAeGNcCGL1Snx",
  "key11": "wJ8gSqRMc4HL4nBGV3ZRrCxYppvFR4nw2DqnB2iF4HGk9FuGQkXqNRuMpS1keGKFtrx7NkcRFMbZzaPeHybQHtq",
  "key12": "FbEGuSVy2y4UwpMqAS1KfM8YDsb6DDAzteXDGGUW5qPnHPBMMGdFKnPUB8etm8C1j3M69zuh8cScygi94CxTdaH",
  "key13": "3umD4JgN9p51bcSsVMQggnCV5Z5L8y5q97Q5YSasCibGAjfUsuACQNWh4MpNBw8HzL9caobe6cPheFz5MXpNegHK",
  "key14": "3uT359pKuqSrgDbcueuaqSCyfVUjaNgYqktwYwV6xidyMYPaw8Pw5jM9UcYsHWAcmVfHX8mBUs6K5RJsijnSfB47",
  "key15": "4LjyyS1Dt3qVSvYRkdruouympPBfKQu6ZwLPWZBxJbBJmpcZpmwYMg4b1kQVqY2eMtmysvigMgAHGkUwxAXErjTf",
  "key16": "5WRsu8xFC2Y2mNr6Sr1q1JT2MjtREFTi9YG3SKFnMn6yXffoF5cKhWMd6absQCXRaCVG1gRXXH8P2YVFUadCuGKq",
  "key17": "4bRZ8tBvQdF9m3pgau97npeDvVzRJsGDrfuWsJb8gt8UDeD9W5Zota9ij6zxhYy3zjYW5L4co7JeSs78ASMzzwuV",
  "key18": "61E1XwSTUGYpQYmKRueA8Gk65WW24BryrWdRxYbm46ovmsUk52Y3a1GgzeGdApPD2wX8LqSHvfMHyaVLyLFiQBnL",
  "key19": "4XVz9hTcYAaciXSjLZVcxFDztCdsX7xyk6RMjGcFq5nLa3C6jZjCLaTJQSsYqCyb9KoTv9MRG2CKsz3oMAqJwzrT",
  "key20": "s1KaquN7L1TQSALHGow19s8DY2erW8Ew3RtBVKu89p4C5rk4wU8sAH7eNbJsrVFTCHv3opMETyrYWxSGCG42uya",
  "key21": "2CgE33TQiun1qZjMKRLes2yr1GGQLmhtYhRXpt9CqdYht41ruaK11T3L3R7m3C86oDmNeSpeXh8vD1z798vj7pdK",
  "key22": "Gouz23jg587YaruMuSexb5i1G1GdEczPGuNrkqCtxRRR2WMZPUBzT2x1voT6scxrekyhGrrrbyyu6uAtXfu3xpQ",
  "key23": "5dgcr6Dv2FiGcozGU827XMpRazQUjDzUD5EFucpNQrufSeiUZWv7N4jP1gN3qCwVVuMhYu6ei7VZQK1ixtQV5Wbj",
  "key24": "5b3Qu8JS9fHnJtXyPFpQ5pir63b4eAz7gUNzK9JFtAyLs1atCFMywgwdVY5qMEAS2ELRTJCwpLYs4uYhdoTVqFNs",
  "key25": "3sE4Kz25z9bAVWhAqPWWBrzojjDuRhRG8YokqYCmomYpmNZqXxvbrKUgtkT37mXKFHHDN6zE9A5uHCrLf3k2E5aX",
  "key26": "3ypC93EQM5s5EKeEUTR5nuREKtdkVtsKiLugpck8hui6UuFabbcpTK7X8VWvu1JqBQRYY4117vquP6byEvGEESWk",
  "key27": "2WvmaeFn8fahoDaaMt2JNu2WxmNdXh9TB1motrQVrztBUpTZpDKLE4EBPB5rrwWEz3qdnyZUUn8mSegsSur4EsSs",
  "key28": "7269gQ7v8HbdaP9yZgKQJdK92qNGk7Bvau2Wrca39nNjRTwAxz8CuVYBEEzhb31TfR8yE3edQqXiZPiJ1fbbvFn",
  "key29": "Z3Ja3GJubaWr7kx4NfsBfYAgxkpoiMJNMdX2Dk9Z6A9WEMz3J753pzYtJ7u15CsS6i1vXsV7oSed2pEDgXU4h2C",
  "key30": "26aAFtx9u6ipsGWX9Mgmdb5KHZzsyBSgiQpU76JnipbXQ5KuyuPzM7VDoMMWawXu8LHTTAsP6Sw2ZPUfsidjgsFy",
  "key31": "4LTXw2uQUSfQpgaC6apEKdBFWwYDdoQkaqhkzZ8Ru9JmTguabyncgmjsRKAHfoSDWJW2urC2bru2oq5Vt3TN32zM",
  "key32": "3umdogvdkKx7GUUqc5TLHoc7x5XhpFPadPUVS6SJfXHsydamyMsB5mafrcY1QQs3RGYsvBbYEprUeTPqMSr3vtnu",
  "key33": "3JcVjy6iz9AtRJnGAHP92X9VLrtTGMRBqokxMDxiAVuT3yWY42tmS9biFD3YQcGaDaqLi6MnCVq5jQBpq76C7QTb",
  "key34": "5ZDmZzmbNwrFWgPb4pPfdgiZhpiiG8sEu1qcZdPBjSgk4jobdDD8s421FCzqtXnppceVjrmgDD2n7tJ2a4kZsHh3",
  "key35": "33fRfw2K8Dngn12k5HK78NQPb2zDdc5y6Bo45RaUKJDgq85WMeKxTeM2efjAhKeLESn4TbXUuHwkD4MbAzBLQUBB",
  "key36": "5AP7FpYmcCvqrckuVSYdjneNbjB75PphsJxDpfVx7VS7ZdCmchTKyQBHutVPtiVwMEdWDfFmb48JcyVceaE9hMEE",
  "key37": "3ytnSy6WhWibR4A16SChyf2A3kwUpEvRoNFcEYfKYCAuWfjgtZ1EFbBC5Uug7ZgobUMJSDfx1GiJARUCv6E4kiv9",
  "key38": "2QSZ85EH9pNjnq3viAtF5BRMmbzCb5KPpokEYwRFuqiPWUUUwYBy2h4Rpi6Ysz6UdT6MKTJFeHPSjQzrgYZU8byo",
  "key39": "4QaEMaHS6D5VqAsbSxN8Cp7acYT8a89gjS31JR9TZbMA2f7GJfd1zQbHeEnmNadBipmihwkzstZYNAYHdTidK8k",
  "key40": "3FF52VRzLKzyNtMN3upMpw1Y3nk7WDk37KVGFCffdVjQNN3jz8D1BBm6aD5xc3dZcvG4QbjrPUkS4ApzF3w3WFKR",
  "key41": "4KqoFJ9NtQi4U93bYozAsVbpLQPsWcRNHeC1Donih4p6ue8Qp7vANRnuvWKUHj2mCuigjihF62rBeAJDRDp3Cbmy",
  "key42": "43aUtH43qDgLrcwh5LGQhva7g5CT3fMYyZUppptxJ5F5zBR3BHP69Vjo3AWpYhPFFBAFkiNh3otFntTvfefxScL",
  "key43": "5jrDgXxabeRzp61z6F4M5i5uJkZVJk9K4hk5xtR4wPvh5bZyonEiJzakEWnCtRt57G1XJxszS2Qr1gWy6mtjS1Si",
  "key44": "5yxVZtyPsfiUnoEJXTUzgoxgMJfi6XR2Qbie3JSRLv65mZ6pA5S2PY9tZS4pM2id1tmMaUxdVptrvCfKoSvgrVZz"
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
