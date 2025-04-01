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
    "5m6F9SpMz6K3cpiTh7kgZmhb8vykToVsTSNkiADLJpHHgNRjqvmcxWYNGeeXHmPZ87fBJtjHyeSsNonX8BG8Qw6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FFSnzYqWs7S191PoTXRnuJRvFKk5R1hbRFLMKy8YM3wytjsePxiP2dyPrhyACPschWezdUBXCByLgevGKuao72M",
  "key1": "47mscLMmw3F1Zwj2NrvXum92cKDacNbAwi9EMgP66y4BV2KAbkR5vofoMTvxgTiMHTWXomZsUFAixAHppxSrtrFb",
  "key2": "5mUS3uidEFpFQhThTmbPadV7Ur78qbiRdMpRqumGE1h4yDG6S43tJQyMC7DEJoGvEHqQpagAAYAgWXCAuEdEFTMQ",
  "key3": "65rgMVxExR4CpFSumdvL18XQTDdmpwKZT1uBjYjQUwzX3Ls9AosCsHSkm7pQJYx5fY9KycyfA5MUoTjkpkBR1LQX",
  "key4": "5Cee2iWNZBdPUnmxRXWi7zcgQyqWLGUWG5BGJzox9FPQ79y7hvnRKrAJoCTrsUC5xVxi5NAwHJwKKUGNkguHGJaD",
  "key5": "2Jg1FpPPBZZxPSzCFSzats9AAiUAeV9oxTfJjbyTXTCVkqCbgG3R4KrNSERz4vDgCuCDoD94M5UxqFMBug2PYRyH",
  "key6": "2EVxcBvgD8ke1qdewEEDVT2vokHJ9rD4zZdFsfGQVCDEjBRcnmShgNrLFDAQy1Jpx3TWto1vn6nTqBLPiFS9TV4W",
  "key7": "2ywB6RKGumo3Y85gn5WJmtqeenjxcqkn712jSm8dTN4ULj5njrEyy4osZpTVwnXsQyLkiLb4WVjJewVVabrberY4",
  "key8": "p4R7UmuXQyRZPuvJfyzjSoX5XC5wBy6scgYSw6iPuo9yJ8GDMnMe9wi8Pvtovj7tVgnFfwkNnGU8kWWRhuve5Yj",
  "key9": "2FhRyF4hum6Utdpvut7bss2DBnLx7fL6NA1UAKk4CLhKQMQMj5cgqz5TyTVfz821GBUHFS3ZDL7XUtKobyM88XnZ",
  "key10": "cbGZePTPQYCKdL69EzrzqZWKp5rLSAfWpSrsVukxC51WoFxWYWcZGWYJpoxAcphCiohf9uyS8gz3vb7XBiDeaqb",
  "key11": "3cUUGbxyYvu5p4XGpeaRjq6G5cB1sVwDGSgqGxhBxiokSXpRagLW38mUNMvKq5LtC3j1o68fbhZkLJ8s5yPyro1J",
  "key12": "4wQbuAME9Uf9Qzy2p9JTqfEx7S22kq7mCJXKJATYoY73GYrCg3w7XC18KqGin2NEsDc7TCP7JV1NdLp6rw3L6JvD",
  "key13": "3xMRomRKgS4q9z4Ns8kTZbYZ2bEMtHiEVDrx4JACSepovKswjLoHo8YLf9ow38eaDeDgTP1E87d5JuC6s74VTkXz",
  "key14": "26JGtFu1S7Did6hcsb4jdDeRbWPyR58dbPXsiDVq7pG2kSwT9H9y1p617oFu22KmV3kBCyZ1PoGNEzpRr81GLRFy",
  "key15": "4sptMxPi5X5CJsjRJdTWfMmWiZbE4WW8ByjY3jpa7g5YqJnaQUshhsjtq172JMdcANmy75y46Hh1XYaYu22VbPYX",
  "key16": "52FZFfD9N3iKNcfpXLm2212TZJbrG5XETzPJsRaDvZduh53m3Ehj5Cwy7t3pUnZLD8gaEh7e7h4Y2qTBwv895tkz",
  "key17": "vBuspUUtUfCc9tTxsNUipNHswGjYvVYYB9b6VmbA4Jc21ttmqk3WYztbsJZ6T3f8HFmsWGmWwov73f1Nnuu1bqk",
  "key18": "tpoMJDHDpjgoMC1VZN8icY1jiSDWabrwc7KD1T6jFF2zeJtfbcKp56jwnmSWreUeTV9CCZPBZaP3xArzWvw49o9",
  "key19": "5oCjABjqcDhrTmN8LxXuTz7VpcmMJA98XpMs6gz371sUcdjiUDr2FDhsAkd7M75X3eR46cacaCnhkDd9pjs1ppy3",
  "key20": "42Dg6ySmwTFNAtztR8Di83FbYqKHdSUeCY1GgZNHMzm1EiaYkKan3KLiB2D1N18GSB4iiqT3MfgvCeEUuJrdy4kC",
  "key21": "2fowrF5Xffv6AeGDbk8RVGErb3HiExnuqSpZEV3N6gGDSrFMuKDU6zHQHLrfZ9Moh5GsGcrEQduUqrXkwxbXKZ2b",
  "key22": "2DYenxCNSw84r1JqKFde9812Mp5vf9YZCHWzbB7VxGAVa5MrRFZqMSrSPDRTzYwVfNX2MV9vRAJKq1zPqaMkpNvZ",
  "key23": "2UYo5NEAjhCcFdMXVBHxfZaW5GPPL9P6EkpzJaK9cExxXKYn6Jhst2zQaxWVquEtwFaK65icfVXPMTqEXh8ZePZ4",
  "key24": "evztQn1e5CkjDofxK297Xg3kMkoW2kkb5XSYTUrfSNYhn9yzhxZyHiD414x7eVUxZ3p7Pd14gt4gZU2PB9X87cC",
  "key25": "5Sc8csCwYPzjn76vc7iC1Fhwr3ktkmUMij3EejRHz7eH6xC6RjXcyCmbVfqnAyaZ4hwjpxNSwbebarnsqdpk6DPg",
  "key26": "3fzcJdfhq48kCZ3FXVX2rhzRwgc7NAmwY2pGQrzGC4DXkJLVAeUKSC7KF19uPYEtNjcL4sqtfgrLj42mw3Q8kZxz",
  "key27": "2VDEAc4EvtpEwqqzU2aEcSsBEi6ce2y1osKHT571BKyKAMicZhLSJuqqAApCeduzRS1FXPjw2NPEQW7CSpgryq5w",
  "key28": "3b7jAsw4fsoMBybyWpHfwB79gKAeDFEgg6zPK9raKe8AsRs2N9V9rEsoo8YFjUryUMjF8n7s6fHZtgLsvP3ZgS47",
  "key29": "jChh9Qf9zHJ1D3C8a7acFetxpk9g7VPyQvF2n1tyDKqpxVnaeJckKwQ5ZqBCTiGQhhqHboDZjem3taGX3QFpdhv",
  "key30": "4rgmKmwVhYCd5CwjqTZ9ME53siwNXy3nAQVJTZDQEWi5GHJFfXFyfU2FZj4FWkFSdEEzgSwDH2V5tMAkCMN1pRBm",
  "key31": "3xbCf5c6da6SAnJhE1aB2jbazLKwYqWbZa378vp4TrhxqmfxgzuxDzE1EP2Y7vMNCP5FeVTQ6W4bVkfg4y6PH52n",
  "key32": "3J1BojSrzVdDm2DVorPNTYhLLWuGcHmodhXnnMSFJP9CnMWReQNpADHX2ZKEk84HNawdSjuE5wKbHAsmVTVzUEqq",
  "key33": "sTDTxjMoQhKj5M41Wx8z5B2So93218BRLj6Bg5bazr4sGwByasfsXQFmf486k3cVFdV1SunRRWWMGizgxjz4xzW",
  "key34": "afCWH2a5i1ByQ112AcZrfUUQBiV1yXbbMmZXr3PMbyQXqWJ1eZnqcToKSsDP2h1CrFiUVbwEq2w8x5dLQjNpqVM",
  "key35": "1TLiXVMUUYYCPJHk4r7EgqDUoo8KQiqH6Kvikau71stTyCeAypeQNwqosJMwVNygqGAZUAceDFyCjBNadQE77dT",
  "key36": "rXS9Wmuxkk7TRbUgL2NrKShzLiwVRWVJGRcuvZ37fbKd5DQdWJRYey3CYjGosN4AzGfDpo7cpJxLnxdMWE9d7Lf",
  "key37": "2CnMAPZMrMjciSWjVwTc65MAraDGz1isw3cuBrinwHMYohvpW89qSFYevRTS8xgDNi81ewbUrd2kBVoymmxqfR5u",
  "key38": "3XmgTtHuhqNrfZvzse9RSbLcZ9X851GdnxvkgaZAzUEAuz4JxfpB6pN5ucAAYQiADPhKkb2rn2XHjDs4RsJ5SmG5",
  "key39": "5XzodKgcSKtL6HSGejrH2GT7odarHhxVgY86S2A7bfZQX3R4SUbqBouz9ZRA3aXYeVq7FxuFfteBHfGACBj7PHzx",
  "key40": "2rY7eG5sPsFXA16uc2iUJyDcHaf7pMjr6oX1Qu5uTWBspo3txy9AS9aQBas9W2BmtdjzJfeXqTGRufwHNnuU6Bsk",
  "key41": "4CzTTCvYMNL3zhVPnHUbAqUaDjgh1twEyiyHn6pF4XJDWdx7GZsDWxDZdyF13wkmjkMCh5B7T2itZdv7t1jJLTtY",
  "key42": "n9m33W6vhA6jyueH8bwTw9RMF9JrhH7eFfJpjNGw6PcwU7oQupMySJpf162Fz5aUSpP3YHXx5uLW92xgyKfxidT",
  "key43": "8yEAxiKhHd3BNq3fgYF2yJ4TBGuRKkeyvLRy7qvyAFsVRyj9Nabi2DgZV8f3DfnESXQnR6LzKitcZZAHrooKZXe",
  "key44": "4uRaNAUSfPh5YPGHTSfm1NZvWobbPiPueUqZ1EDb7sUrWfAioTmC65y7NE7xou9yZWCX8CmsGgnyoHzDXGiDePcL",
  "key45": "vP3dPT8LpdrVPw35GiQasm5wGFJuqceoDZjV7E8v74QtfAiVTW1Fv69HENuRJnbjqqijqS1mjTbnpjpX5tMbmaE",
  "key46": "3eoCmB7aUgDjxX77eDTascfP5cbhDXWZSfyjunrhReMsUSxmR3V95LFJ6yJ46kbMDcGB54ttXWevfLfzSd3EeRZD",
  "key47": "d9wULiqtLYyfGsQNMZhMwc3J7uSeBS3zyzJFFzW2Jbs3DcgEedSqohXeGotLbrhGs9NgGW3dyiDGK2j1Pgymgsy",
  "key48": "2cJY4Kf78gCJBWcqaV7d7ZPAJDjUxdWxK2mssBrEkaCsGb6SvGMwBuZEWnmi6RF9wqyT8qi19wCK8e7dxMN4vJiY",
  "key49": "HFoUoJnzjkhztLnFx15TDjYx1ZJwrRC6wjvFrkjyzdDHtXNrSKuSNsebsRbSGuX9pqbFGSwsJBea2FuQMNt9E6H"
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
