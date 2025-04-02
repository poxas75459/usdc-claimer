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
    "5vP8rNajV8bZoGARYuLAfmwA2ipp6mFayhsvK6C2tX4X596saVgpEgXwoZR4BZ6KR6HpqRetk5FsUPbcj7oy5mDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wwBvdoSw45FoFfsfZVKWYJ2BUgyrURg2Nnr8LMwrP5rJK9Uo9d5N4nx3S7zpv1Yi1du37ihxnEF4iU3NWqmBkp2",
  "key1": "5y6eEG3tvBsk3cXA2zajEUX5CLrDrJBvZpykfhDiDaF88i3KfnCocmJ6hzk5rEugWJN281QK6XY8FrDyWjw1qbZ8",
  "key2": "31u1DbNQN6VbSTsrjEp4c3as1bo3ZMMWehFkv1BQ1jiXFPxBuDUeCGuS2Ko1VjdSRWbxjzsP4s1wnDfgb2jYXZfZ",
  "key3": "4BerCcpn3M9yQ1B6pQ1Q7tjWbxLG1JitfdtJv67bxJ9MoQJcyyjhj6uMkhTANZ8ivKP4AVV4U9RhQRmX92YjGgFR",
  "key4": "Ygw4LMutjo4fBgbYWPw9yW7vrje3KLVPVbPkTAnBtaPrk3Hhy1HhWqTLCXFNJpPvhwYxhoFLbgczLTeuPEBhDeQ",
  "key5": "2mc45RipastVazLRgnPkx3DpzNMaUXj4Jx9kPyXL7L4AhPVEUKzTFtZJVFN8DzD2LrkeSLsz8WTDt7QMfugw8ZNa",
  "key6": "qhQY2pz6ivS838sc6zTJbpGuE3pADq5o5eDiWBGQz3GJGtb2WrHUAVZ4MuiiGUtYUiQ3jU6UfcAvKDNJdjFVtBa",
  "key7": "WdR461bXthn31QU3reVY7mQZpStsHgKg6995d6eLumt3HCNz1r9mNYGtJzweQX3cPk7mN6zQ9KFnWG3DfTC8BFG",
  "key8": "3wMfxaTBjo4HwNEDdm7qvVw74tWQye1UCyFwKdxraf68RpxpPyo3KUaFdtfgUZXhuwPCJabLrw3ZjE9QMbg9HPou",
  "key9": "EBmUZL4Zy6djPWdf9Jw6Jwchw4GudgL2mHqF4eKWwJFAfy32xxQ3Ja8ztSALfiNrw1vzccYsbe5bZsyrYhbwT8n",
  "key10": "4wHPmaXoU5G8PHBTspLW7wtfWd1FeD3SGkNMG9FTDbWM6J62dUgmoYenAdoQyiewZFxCmd2RN2CHdyvqV8PoJbTL",
  "key11": "D4SVpvDXLvLNVFKP19B8LCxd25fUpNa3QVJVPDCF5GKwZAMsSDdxhm6qtpWjAqNZMivEjSCs7f7atGb1KgB4paf",
  "key12": "q8n57EatXDky6WfKuvXHwFTAa6TddTXfVs8YTFuLF9zoszd2ewDKKzRkvFETkhyLkeduexYdGh7adHnkiMkzw6V",
  "key13": "44FCUgmEY9GVPLSzW5ScBeePRWAAizdPmwmkY2TEXcBqztJ83hZzV2bik39BMamiLasK5VNqp6boRF4cmV4osyfA",
  "key14": "26HVgNuzevWFUKCntAgScruzuZqgvpMfeVo91JYAnQ2Lnuheipzc9LpmvoaMuHGNi3jtk4fJFEnE9s63ZD6Pk8qB",
  "key15": "p3KcoXbvzbxRxmzZ7vA3HwDcMvzjKToJvb1F76dAveoMksjNMdEjToVaduqowoYY1EyU9io3dTaQmU4mfeDxgLR",
  "key16": "7o4RnGibr4AeyZLML41gJbY2VsAYcmnDCLdXKRbPtcmWhxd7LXKWKsKuXdWErXAKpmY5Ymq8ZbPf6kxXye8kyWR",
  "key17": "4pibLc4WHvFbT3Bmb5SPG5ihcBM1gppZE6KD1mgyjbYdq7p3gMJXrVr5YN5pYP3ygNz7vnXH7Re2eVbn3GJKTg6c",
  "key18": "5VjbuqkcdETm2dC2udb5U8JXqbB6VYthkNARK2SrTUpxm7jTmjfLUKWY3qMfrg7kvuTdRqN5Djp65XssoWPcAdCD",
  "key19": "63HbLYdNVLsVTwbjWsbRnZUgwvnxNXSAYHF3p83zp2VFuUSmud1G8uJvR4JELWBn1CjPajx9iYFR1VMgkysZjc5q",
  "key20": "7cY7XFsJJf1N21TyhmKCitDNoWfGbQvTSC2sM79UTYRsBdUtSmfnQuwP6zZ36pdy4e82ihbdxuUaHpimu1G6oGH",
  "key21": "67naAkSBBZaNQEaewWGj6AjZK7BWsWvSoonnT89wQCvgQ9t7Jg9YMUQKjwiU1Qxn1F31q9aY2Kdx1nVaykopDLfi",
  "key22": "57xCggjx5kQb4gE89Z574cQmmTnacuDveBjUtDLPsWaRqXaSxvn5STubKD5HqbxnGDHdcjHGHRjJaZfigQfCznWu",
  "key23": "2DM3xaZwEiL2H9nDayX5DjPPaULe9YoeMHQtFKERGHidMGZ4uxCAqGprXJyeyt8fef8tfTJWdJCFMnDvvPGyKEzm",
  "key24": "22c1SE5rabNBDNRpd8dBdtEppufuhXTQDUKXku36VTPfVcWdv65iV65sUn3cipyqdfSS7mhjyavedkoSrYJ9EP55",
  "key25": "59C2DK4Hdb7kCgwY7bcnEB1FmfT1VNdhF4ctHZGVFUoYgzgaoHtmeem61aQFVKnKRterECKPTarxMhbEZtjftN4e",
  "key26": "4ExM1THHLRK17tN1fbAPxoKvBaDbatf3aG8eecgzQU1BDET3f4birLzT32tcfC3eYQFuvBqsNnKvYU82twSQvw8w",
  "key27": "6SFtW3MC8neeT3jd7mJWbZdso7FTh8TQ43ivaNo4SfgE7RsQyRAuy2zENt2o54fviDHAWi6BzePY2ELzSe7Sg3u",
  "key28": "BtABursVv7CPSaeahU1yH7mCCGiu8vVXfdQ6Y5WVdJ2QiHDd8Zv4Jjyc5T3js9aDhHG7LzpsaGE6ihcmKNB944g",
  "key29": "5vBtGC1CkZdrYKbGrNsr4yzGZsbsNMd8ZPxLm9MAyCqk8gR7VBgivjLCyJJKgugYnjiX8rwhAe3zxW4DmvdLKWP8",
  "key30": "21UKKKus4C8as9v4FyNsH3BNfcyHpbGHVc91gkLG69jorDKsUYQjaUbm5LVNuRxwFztzJFguaxLUDR6QwKqADToS",
  "key31": "4nd4P95rQ2c6FkP5N33ybUrC5zi4rwZJQ3HN9h2EcfzLFrnYgZgAZpAd4NrRtUEdjmtomTCPnpKKXuNfFQpwCprc",
  "key32": "5jqywhghKUg4N8xMfDPQuMWH7uB4SksouKTocYgb5R5v13aw49sKMHp6y8xLxoBzLuurZC3NSRssXtZg7645wcKu",
  "key33": "4R4czsoneQ4cmwa778DS8UXRjCuUmzdxDvi1Wf5nNSj67wyY8A4dqoink22iRWSwFhhXaa6xoMtuxFvUNpxCXSZH",
  "key34": "4jAYbxN9xRiL9arhsnjG5C16FfF9fE1WbDZg3ia8d6CM8cnm3oMTMYrbh7sFTs4Lb4Rcpv9GJeU781jkG2DVLfR6",
  "key35": "5eLq9nZZoT8PCXsSmaagEm1tCAwwdEkEBprK7fBDw4ZoXS9STncD4LyBdtjBMxYKvucsWD2M2rvCf8eRdxx2z8z6",
  "key36": "FrpDa2AutzuNccPTnm4wmNj5JsnedZfThV9k8ENnDh5m2sCWGXBqxqjp1iDY6DZxQ3Rtdge5wWEm6aKVeqdxov9",
  "key37": "3zE5B3FT4Qfyaw637sQXdsMwT9uqkPsdnNBQGxHUpLbsCMayfB4RSZaKvmBW6XP65tXSrRNdttzXqFfnYzEjg4Ao",
  "key38": "41KeTYgUG2HEQpva2y9Rk7R1W8Y1dKqABVqfegXpfnnae2DvgvaZvZBKvPZevsRTJ8CQBj26BBSrf8hv6C6mgLiD",
  "key39": "GRJ5esQBbrgngNVFgF3UTHbY6cZMfaJneJJ54i3LAUez6o7QLAsg9stgqCXvTSYvjiYx1M2WXKbWPZcCGsMB9Wq",
  "key40": "2s6zW9BhD5KTywtey7HU5r8Lf52AsAk4Y3QNAn2fxQLMGxP9zPbpJTiYJtBSMNwZEeyawhEvLj81RWd1tBrMPAd"
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
