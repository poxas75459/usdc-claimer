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
    "37VdJnSTqXL3AwcbipCJyNCZZWtVDDMmuzWrvyaNVZV2qhNytSBsZ6vhuii5NVwBHqUiWbwSuGyCaek7kVATP9RH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AwuEJdG4icdWGCMF1Sgdsgiz5or21Jz5F7kJ6Jyniseyts9dyFP28A2j1kPKcYuspA14jjuF4osZDn8L7raBT54",
  "key1": "5fitaAZqSim54vpNF2a7Cy7uitPA6SH7wAuQGAMQ1kfgdas1LNtdXFdQZBhv4VCGF8SRfqUg7HgXYvxRRxckSXQ1",
  "key2": "3NJautoAcfryHG9fDkJQY4jtycR2NzR5kZsUaJbnwUjATa6BMdUHNqjL7R1ubtNQwJuLUHJfarxL3cs6iwWvCeJu",
  "key3": "2poV8vxi1g5yLuJE9jbkzRmN25mHv7rfY8SxymR2ktKvHcRfoQ88jrJcNvCaHAHp5dLJft2qjQeb33z3Ea3Tu1v2",
  "key4": "3EQArwbqptaRBsiLrtM6JNVsd28rf6988ekG5C9RQ6RWHBNEQMkH2mxAcXyipfZMaXwWHysx1R8hoTEWLoqeGk4H",
  "key5": "3ju7UNpUzMj94HGG3ZvrbNBPcKnhyWLEV7Lm34jHRQ4eiSRWkBg8C7KzYSqy2hWRreFCNjr9sNrF9GwPN2tW8cYB",
  "key6": "3xiPhDWDyuLQXxZwR13rWAnD2RBfmyz4EHb1ns7dnxBU9rDEpmHTo6BKwbxG2r1aCjNRAV48pK9a2EWc1DVwst3E",
  "key7": "4FMo8hNoSpyJ7BUjqXPPwiWq84XJwNpF4SLjNwxVXGBW4QEQU8XEiTBCYcmmKbEnDrEGxVZLE3w1KM2rte4miVPb",
  "key8": "5AKWosPT6XCUtPW4AV6RP7gTxMpFJiF6fLbfDupoZTGVLnTKnsCGVVr93V75xZLPkTBPw5ib7f55pszBhq3ta173",
  "key9": "3k6ZJnrPcV5ncToePxGSaG1edQvamccre3LSeSvm8ABQanXwcae3itW9yMwWfKhVirCXu7ioGW4UDsBWWqtmkQUr",
  "key10": "2qCPKXcGRrq5XDGrzyQ762CEUoVtAmh4DJHbQ1VWfAYi4cf5NgTFWYiunTb9nzUTjHptrcHEGMPZs5wkacRUu1YF",
  "key11": "4gRiA3r2puUjfn43dufpZNXHPCR2JDbGHo3bZBynxyyJiL4NmXVX7hZCAHC6vi6yuMiSTMUT1eGKgNAnjtAA4JzA",
  "key12": "7ntf123Ea8LQbDUCSnFCmArkymFuPThb7WdGwvxmXDqwjo8ovtR51cKUhenremrtsmVdTyVKnVM1KSsDTzi1sbM",
  "key13": "zmdLe3NDUnXGeXSh6tM2a5PMcbqkzMj7ZAvQ3cP8F1WqpKb7QMEp97eLyac2RzEXLHBhTbB5spSXVP55bvAV2oF",
  "key14": "31CTmAu4XRFTAZj2ARcoW5sKRnJvaz5SDFz1M1zde6mHNDuCFRnHsgVSu2vTuQLgvu99aaY3zUA4Hq5nYEECGQ2z",
  "key15": "2zFmp1HKjJsrL9b8wkbQopVd9TPhEUsvoRFdLCNdp9cv95mG8L68SUQn8s4ApFfLJ7e2jkYZ3E6hCpZSvRqGSHPq",
  "key16": "4gGWQ2g4AV9FXSZPjnXNHU5KTaABcSe8aGBKXt75pmkUy484rUt7Cf5Gv187UAU8SyDmt1fd5bB7bmtjNnfpm7Rs",
  "key17": "25MfQxpd4zNbQaFkjCW7hkGNj6qhLhDtbtK3eV41ichWXFBjD5X7LoNBkyAn1W2JYryumfLNvw4d3YGYES5ZWf9R",
  "key18": "VnRwHsnusUa3u2uxWVoMfLtzU1oQhZR6GVZiTNUStH8Z1ABwbGjCFVdFMEnavHcLbWUXdTThEgnhXNkvdiLek5t",
  "key19": "4LwwTYorJPrNxeAuQuzdLJWFFHcyzNyQPtSPFttVtqC8eog4fr3J69nmZWF6szvA89dYd8NhheFuSHB8SnYnXwXH",
  "key20": "5NJQSYRqQf4zzVzTG2zKnG52nk721MCAhXdQuJeNdVnhr2TeTVMyWDSFB5G9czu8YuyCkRjfw8rZo8Rd4XNL9DTQ",
  "key21": "3R7YAo6bMRpg3cy3SngM9vDweYntCdNNJmBfxWnmX2vzHRNpSoW9mhmMeQadXYvd2BKiMcmFLvQCGNjGAxjTtyMH",
  "key22": "24oK7gbvqquFGgqp9MD3Pos5i3rj2cCgVRJnVmzWcACWN1Q2iiQCewcxwBWqx35sHHyqVo8tP58iq2uP13VjnxLY",
  "key23": "3wTtap9DXYJwDXpeXUSGikfFr1LivmLAFyBmfMkxZErKTbmgWLP5Ng8k6yvuzsuVYk9bXdpJ6VNodmHXJYPFSgv4",
  "key24": "6niyyGikgrgNayfYAWrZnSHqyf6E3aWNwLZn7mAD5TePkmRaPoAfUt4ca9WCgRWXyJCVDmKHohmsxwLZhttC6eU",
  "key25": "4chj3XryvmFdQiAHhch3GE4AFEvg2dYosZvfQs6wyGBZwsKJT4WQwg5FHonwesA8dkQEb3k2oAMDFqUTMUAVdGjY",
  "key26": "4syB8VWq3DAA8QmXDFQZxaxbggviDz75ejv8cysJMHaYjrsXqiFG2HzNANWK79AZkHrkmq4DcBFtiE1uTMwMFofu",
  "key27": "2mgfMHnFFHK1D5su2C5tzygHoxXSTSyhENcD4N6x7U9cTyCkHKqufNBebAq32B6hq1H3AbB13GJqkN8SRczyUv6j",
  "key28": "nbNvV9KqTxhxNXs1kCBS4jaXWZh613eCQay58mQK2qX6TiPYFbMfHDnTs4tsJCb5p3p9p7WRXQwdnwpSvaEjQa1",
  "key29": "4SfumGNYZ94KKcHWSfn92mXec5bVysYGQhZZaNoEV9m1XG5ppYdEToq81vwbGWA2YcxyUhA4UnUCh8Eftr2kiGat",
  "key30": "34xPrZpv2B5kda2npsM6J5NZjVBaZVJAkYJ3zRiCnaewE4HC2cBPDx54yGmBZGPPjhANp22Jx1extaQQ5GZr4vm",
  "key31": "qE81UjXPMB7j4teQ6DyU8KzN4Zo4Mbrmz25iptgGwUvP9cXSxP6o86xcHxDd6pNrUQxbE8PwKWvLLV77iK7VpXb",
  "key32": "5Gj8dvpHtnoKdAM3wsiDvXk6j4zhCVpYHVeyiuAQ7vukjYxiNufRLpK6hstMRd83pW5LYfC81QPpXXYnRHqKheH5",
  "key33": "431jfpXKuvUVUNd9PsVVhSw51CkS4zhYu8PMW9Y1aNRHU633Wcd3Zm5cZjhVYGtDnRFa3j6PDciweD4RtjxDBAfi",
  "key34": "2Usng7avaCbTke69HUVQ8JW9SdJ7JzeCaHBE4uik1TMg5zaK1GpF3HKBvdaYTeGq4nKPNCmBpEykeh7MgajbNUUd",
  "key35": "2eGScmCTXV6SPi7nxuWHEreEeHhQsNR1o3gPdKWA9QaXGiE1WfF4dCgGnYaGHWFME5i7gbsmTa5Mssgv9qXy3TCG",
  "key36": "2pv5TtAuVujvojiWidUx1PumZ4C6kuhVeiYwK4M2FMEA39e3d9AZS5WbQiujFUinGimSPge8WcGwJEX3f5n8aYih",
  "key37": "4CqZQxadKWx8mjer67GpcMzVBZWGNEnwa6YiyR5spZUm9k3Ms1e1ZMMWbYG43E8cjKbeoDcEcGQi69Tf1MvRZCB7",
  "key38": "5Xg7jqizGwJDnqzyyouo5GKNzt88fPWYczApt1VU9wYXT8sTwx95VwHmqzW3jGJMX21cW51QyoLS8fx56bMUTKo9",
  "key39": "AhSot4isiPnK3ZC4wdsZM5JWyVXg2YtSw7MtSkaLjh4ZD5AgqcWLgGkL7RJM1it9ub4Y2mARFWYgfRvar9ARS96",
  "key40": "44dbEJoEE1BEy4neNteBPeDm35Wi68DHEi65DBYkjc1in2NqFE58qXyY1cTjjg6HysrgD2x31mjVYekEY1Pa7uCj",
  "key41": "3ejD2ojD3PwL8qi42iRsQTswc6bqs6ZWWTmUU4Us21irvnmWYJEWqFHpw6w8zt93fYZqAJW5Fgi5X6PEua7tNSHV",
  "key42": "4RJiW8Yx5jt8xSDeEYpg8QcnNqAxhiAKyPdxTNfrFE7p4dD9rL1d2nKjW9DdjeYmcFS3tsiGWKXNgSF5kBVBDy33",
  "key43": "31ZnnBfagKutygM8BTpRXUrT5F2Ji9WtaEFshpa67E1BDuEqYWG6tRbYxNau9ghmHVSwtqh7T9gMp5UGuu7zKoVF",
  "key44": "27i1UrnqLwW2zYrn1ntWKwKzRnpvUXhovzAV4vNf5PhQNgaqHvryeopvnkXpdCWaxgkeUT745VKtLLKfjgUYHnF6"
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
