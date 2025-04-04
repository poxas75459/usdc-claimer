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
    "g8JnXug9rJkEYquLyvHpR3bweWtp9Wcuu3QH2BpjRksLGdG5KbAuZHpeGwyPRcwfmgynNu12vrTGeSNmtT2apMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qDH6rMU8Z7NV4GdT7cPidcYC1mDKvAZ1T3Da7fdYY1EVKBAHAtkU3pmW1Vm19hkqxqYz1EHWtUmTav8qFXbuiFb",
  "key1": "3tUtM9qxS4PwGpcD78br1WcFmRjKNCBSjcU584PV4Zw991Uv6N2v2yFzjo5YFW4C95hWqbGi6FtL2P2KfWfiatBt",
  "key2": "zAouaeb3V5NyBdZt79tBc4YVoe7HeSqV7TTfribKg7WwEB9TfirBi38AsJ31jg6k9vYEjTr9LNuJkTKAzdf85ic",
  "key3": "3SEbYo7ZoZTGzHyY1pmFhZAfKV9UizzMAmdwZArRo2Miis5etcLU6EQkQtri5emCDCTebRv5j6nCUvtjaearPpaa",
  "key4": "4avGNWHS8LP7xQ2TkUXGGmRWseciG6eFvRVQJtYLppTQ9fKULvgSHZtVccAqKu77riJXswqCiuoc25hWj6ymDiSW",
  "key5": "2YV6yhA589HtYXT4U1KSS6wN4miYdspmtBWWfrjQYWxqtUEVThCfn8t4sNhaCcGY5moyRA7F7fzQSe5WYKWgVse3",
  "key6": "4BvrpyiKWCTAc1judXK9JUQkAdCKmQ9Ukm4tNbVBuQCh5fpBugcuzcSmhuBNp7G8up266kbyvYphZiiXherhg1mk",
  "key7": "5wspb3y6Uq1VXCsJe49f4iaB4y4h5GEeRmDKkt4JiwQvSHdbFBbiQQeztDUAkmnDVBz9Lf4bu2QNyX3YoEwuVtnm",
  "key8": "41DUzp89fygoyP2bdKJbhrSe498GoWXb1HHabBne4gEk3Rhbitddb5LFMHUCj2qGnBDVYdFEC3q7z23J7o9eUcJF",
  "key9": "5bgpV7TE9QXCJ2gS23Esb1dJWzv6dcDum5gmdLKcbz52hnnkjonvcKkVsiDM8VB5krmo7dKhKMvMw9HpwxwPUTCN",
  "key10": "4FgY3txi3s651WQW7moXdDLVokU1frevJLTa2zDGZTLaB46RR15Q8FMTkzwHigPq4XFatNptw8joQDti55TZpQ9n",
  "key11": "3GZs2DnujJ4vN7mpgTFu7VG4QFJEetzqmZFTHiNhuUx6Xsw63gZ7ATvsmeP4FN4SuKKUuRfYAJHiZuPSu21CtA6w",
  "key12": "37hdTJPrjwb1dncNd1b81smZmkDb5BDK4FoR3NbS9T38CfiR4Tmkn4Cs3NQ5FhECUUJCXwc16P7du5PhSewDUZZ",
  "key13": "37UR1E41C8HsH7vunL15V3xhXzSPvnafehjeEpGTgMAxNRSpwBjwGamsuiirtkNLrsQqRpcPLH5U7pmV7UjMdD3m",
  "key14": "kRzqM1KCYV34ig6fXoMAA9wbkDGVs4DmuzGBMNNTUx68GtVgDQH932UFjjYkyPo74pboGm7CTsubRDBh2iZgcVQ",
  "key15": "24ZZz695hQdHhYixicStJHZosCfzD1hYNPYNkw1XC5xkPRVteECydJv1bSPbrnSkk5ms9U6RGLUxNeboJFGQ7Gup",
  "key16": "53TtFCSsuGuoa37dsMdAvP2QZF9ruiS8ZPHJuU5QL5R8ehGB99KGRhWu36ZCsej2Q8Ufzy7BjYSWdy9LnwGMrA28",
  "key17": "54dPoug9tct28FnRDiAykTxuS5UQME3GcaTzjVBUca43ELEKLh83LjwG7m76tzTBfnNyoptowvL7aoev9uysK9RU",
  "key18": "4uvAudcNwSinj2w62NRvvayaPpUpK4iouH9oAdkTfYyFF6ZzNLShDDr3FehXgNH2XoUFWeo5woaizU1ejDR9cC2S",
  "key19": "2PasLhamEqdeu8m5D9cqmAiBBDqQwC8KK6aLewBP5sJyySYrzvcJf9aacu5HqSuzvfWr7hwM8Q8kvVEExXVZnaex",
  "key20": "2p72Tn5SVjdXxe4oizYj5Kt6XVeiUBPegLufuCa6NWBYASWjGco6EjuLnMcxmqSk1gYt5VHbDJBA37oE6YvwVYtB",
  "key21": "59EL1aea16Pz4hnJ1HG4U8sWJjkyLok5CrumWBFMFVwXPGy3sMLaZYXJW38RRCr1bgSEddisLFNvF2TmdNmZdNSe",
  "key22": "53Mt4NEAS44ji6mKryTwwUa56yywQFJEuKe4TYZqBZKkwSENhV48qTL3pJ9kQfTxN61itCjqRuDBSEnvgrNZijXG",
  "key23": "1V1BbvUX7H9cZ138KKZjzKDxSbGc1w8ihDJWsdAGHuqxucShpiUCfTQsJiycyJeRNuXEPbrU91LNw58us924DVL",
  "key24": "3iqbKvK5C7jmQKN8UMw88tuhUvoBws1uHfS56kmkRtLM4wxUZtetC4TTe6tfbusdpLorrWq6kJJsPEGrqa1kR1dA",
  "key25": "4n8BnKa87cn7wcccVUK3yJXgF9SaJWJHhXcGFodfQ8CTbohuFos7pHBjWXE6SDnexh5xfaBfTgpddMwvM8wr4Ayy",
  "key26": "2dBriWiMnQWEYz7eHe2u6pnSn6z3F4jiDJtsKGiZDfx9foQLfAzTST1XNQrFfnkuK2CTh3WB5j5ywMk6viovp29v",
  "key27": "4wjirrHtrkhu8V2eGqv3uKwiDHVAJVMutqrAFaQzyNRRT2RQVjLNH5qFKXLWBPt1avzQx6ZCLEQb8fA6FFxHm59s",
  "key28": "34Mg2mAttc5bRLG67vU4hQevomVSKmTRT6Ki1VyQ6WSDpeFMgBqoF4DCkc4hSFXpGqVCiZ1z8eNk8bgBbeyfmsJD",
  "key29": "5ErAWc1cq6yqQM6PJK9Q4sQMJhSyct62bydgJiuf9BC5BnkBa1WR9GnhAHUt79C4NFQy1EFiZWGpsk5mtx2LP6A3",
  "key30": "2oCA6asKg21EmPxL4gFzh8dh91MyqwEnD3pGqrcsrU2oaJDTnhnEscRL71eN4uVgASe3rdZsQVBGuAsNfNer2Y11",
  "key31": "3sMvB7QP4RKqGxBAkNErjMBNGowtyGQjMNiDvhz2EPQyLbH3gniMXvXwDrpcahtxJC9Y8sMizF4nZN28p8wUTab1",
  "key32": "2jsD6uphC2SK5NvGUkLGhGDKHXyGtQaKQeiNjypdM5hgq9KuzhekhGGLn3icMvW4b7c9QVNv8oN2m3AeV1RzvgmC",
  "key33": "54Qe2MPuJuS8vabCr9QaN2kc2P7buQTxV2hmhyvi8ADEvWd5JA8jVGnkrhUbMBD9rK31UBSSdRiLm35DT5UkDAs",
  "key34": "3tVu7P4X5xWe5JKmJmzmEUdoKUZu7tPZhVPMyENCjKuyGufu3B9k5J7pKbWvbF4sv6jFfP26dTn1w12WgChsBqyk",
  "key35": "4UtXp8yiKpCbLqC2gyhAngPbmSPB3m7MUgegm73Tfi5HtrDXykeV9PytNTH2CgsgbBDAhTHg8qYzkm235hKqt4Ya",
  "key36": "3GRoxQeeQkUQ68s4dyc3U8EWJ5xtyYEr7mnoUrskSdg6QoQEhme57hhFowZxpfEgn6mZfkQwQCtp6hYgXvkPrU88",
  "key37": "3ZuAKZTSsAejSSo5CMiLQnDzNoFXh1fdhW3o2pRMho7ymRFoT9dC57yGoKTKPuzGeGHQHEam4VUd4oEhYSHizBiR",
  "key38": "jVkV51tohcED99orY4Y71gFVCo3kSq9w3MURiHor2xRswfton53x3nBKmLqQqMFcMzjs5wJ9pQksrcvHjbncd8f",
  "key39": "5Kkb1bjMCtDUdcJBKCfS2MTAknfMk112AHkVWhhGrWEw2a45JTyDP3A8EB4gfT6ZDJ2e7HjXKNirvmGvej3pma1q",
  "key40": "2XXpFPRLURCHb5VXqgp5KarsM3VmvyVbduvUecNF2T2WQvRxAm8582y6fMsx1XnrPdT6TVmdX5z5A6GbsgSfHFGd",
  "key41": "2qftaucTUph1RTdaRB7priLzWvsPnEtv2xFm6kWQb2NLXdpoQTtCeKdSFyMr2ZHRHDk5LVWqnCGzxiEMn1Zo9c31",
  "key42": "38omH33JiSpijAZrCZRHhGF2B2ei5u8yCo1DtymEpWFKgkaPLsoR4UBjsabejWwURH8xR5KoHzQwvahzbg3ebpDg",
  "key43": "2QK1vrsTmsBFurQiuX4HPorqToXrGZTnnfMjDFMm7XGEdMo77JTyP2pgycUas9xNPs7R8YWMu5WzSm8f5F6vCdjV",
  "key44": "2f3QMKsgCoPW9GVWJWKeugHoJiTEkv2F1wq2HSmNXCgQAt1kjzuwD6wBgSEL13iri2VGYrP6oYJmx3RkqxWcZhc7",
  "key45": "4GcWGHr8Vvccs2hkxzboAZF3PQCFFt52h7ityixtifxgkQTUjuJbV2r1fdYwUuGnE6B8pruZ7MVgMUyyXjpZDnG3",
  "key46": "eW67SvfUXC1TVpVryLLrjArHfP7V2iLrrw4HMSe6LcyDgjK6UbdYSyLg5Sd2kELjbtvvCGMeD2hfXmCtp3QmP6F",
  "key47": "3757xaEft9zXY5cCJXLb2Xu7GqJTsaQW83UUv4thnhjhVWyfYB1Z6q6NnfTv56aAYkAvFezsbaLfA9nCrsrwLLXq",
  "key48": "4aG97k6D9wX1sDH6sSqTgV5FJhTg2fZBYq3WqjTfnFWCgpqExL8JNW9R8Ak85LeRR7SpCgMZA6e1wVBtDMywjuEf",
  "key49": "2Mu9FKwm6fW1DyKZtCsz6oBNVjMMNhNbHrmDdTGkMhw9DPGu3wKMMv6XizA2eruUcdomdhGVQdBqHzqmz5CKpVYF"
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
