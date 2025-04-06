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
    "4BJnA9FXCyVh59fLhLpkivwk77ki9so8fsA1GzJTSEAFBPGmt9xy9i2Xf11g2UM6EXMgTA6R1uqmh8ZpJUBp5yeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HiV6rXupCEemspficgSFBshZXJLXmaK3CCs3hjFGvoHGajqMJdcpPGh87oqAZKf9YHrsyRAEACCS2s7NZGwjmsy",
  "key1": "2YTtA93Hh3dHnJ6Mb1jxX1RLjqBBbA2q44ui8wgpuZFCSfXRHCoiUT72WryaWbuXpsuHLgiFag6ATjUQvsfnhcv6",
  "key2": "51etj44R4yQ5M4mxnioGVLJBoxtHUvEwrq2Eafhoc7KEmY5vDtVV1qo1HLp4Rwx8QGKvoapcvvzgL6rRmNc8Q5AM",
  "key3": "5Exz1kG2NVfnsGYLjSiCazjX8UwvHZr6tyrtAGGW1ys7JNoTtgaGtsFmZoR3rbpknEjmbvE6C9JeZb6ys1UoQ2fe",
  "key4": "2yM8uM7nWeA5PhegkgpUMfMjy5rGYfvohMPm2FHzU6zdkuUBf3agDF6Xrpfi9Zta8yTDiURM1UNvpoJTWeqsokbC",
  "key5": "386k4ruccJnNakKMvzAvBpRVaA1rStVCrraCgZcWNiFsa8k6PG1yoN6oEj2ePAQsLtYmAvaCQReqZb9Lq2iS9vUB",
  "key6": "448puRW59ofjvNnVBR6yHfMHo8Qea9J9TrPpCcYFedCcXvvdDSdMjXacukTBFdXhh9pfoYLstCL4kSktKLFsoyxT",
  "key7": "Cqm5svynwAixkKgrzKxxP7e8xdnDCz2rDVTpxinqvAeUSk3KGRBo5BZhr3pWCcS84ZQwey15NiAYBY2v2FRuCxS",
  "key8": "EdR1UAsimRcLBYrM8XNLzo3U4hNMDidtb3QURTZkNY5AnfCVLmJrdfrm6YeCqXDfQsUeRzP623n8d7jYaTN6Gw4",
  "key9": "65xjw8G6cbYkeW3pUHJATJnzAeWq4cp6CvcaaA8kbCkmpJJ28BvL1BmfcnnvVkuNPwUfvaG6vmupNrErwKpurFQy",
  "key10": "4fdGKCUrUqNDjWyvVvCzN8WKNWodBkwFdM3Jk5seF3k4VpLSeehHQTpfSreqDrhugVgoyAkixvJE4MUL49rNUvSC",
  "key11": "3RAFpgqPhNBgVMdNoVaDo1H8v5MEQ4nwr4NUmohD2kUjESDabWGBANF6hWisdws9nE9qHjWebZUgScebtwbwFzje",
  "key12": "5d28wSxdvS4UKDH1pfHH4jQFpnoJUaGuXL4XFJF7tAkG8XqMZU3rmAWeEDc9hzAj8ukKyuGVbxtRRiFg9F6dk8WG",
  "key13": "4CHBdrspzq6DK1yguXH9deYSMG7mgGszF543SgJnQcz881h1nyRniyyi5BV5h5afXiiU52dFkjLbVuwHvffh5hV7",
  "key14": "2M9d4XuktEiCMbEgujKaNMpaXhi76w7m7iwZBES1wK8SCemQiV88qJaz4TgoYsmC66g2LCyqfzmNyKpNfMwmnFEG",
  "key15": "3J4Am8oamCBcZKCVGDsL3vQBxbKs5Ld8kEMTVD1nrf968G9nT6DsCQaGSUiEhWTHQX7GKHZghgrcEYbDUdhkRT2k",
  "key16": "3ChvKx2Wr39KFyhmLLXutoxvhymfifiAmmCPsSJKm4pEbYaCvwPUoXFoeaPh5ETw16TWcnwng1SmmuZE7XE9cnqz",
  "key17": "586kz6aenppBDS8Do77mZWxXeFuUJrXcUrSxjHp8AXqwNW2XgP5PR5PzPo8Xa77Q6EB1NXR1apyxTK3a3fG7FPMq",
  "key18": "3FbbHX2ZQD5yGnXV2LDyzv1PdTZDk4DPLEUiUaPk45ije33KAK7tPJ87t7eVqoJt1Uf2EYjUqdAyeKubdjwyNTBu",
  "key19": "3iZnCR67coHehaJ4fEuYHkKGfa4Df1m7FamuE4UdJiec7reiwhS8AWk1ckkmT95aw5mRJoaEbDe4dGEs1UKC4Jqd",
  "key20": "4HoK8jArw8pcL1HKwww5CRdLcdJkMzr2PbZeH4QPwNZLS6hLKN24XBawDYY32qcSDyArWXN1NGrv8189JSRnTcrx",
  "key21": "21obTYfJ67bUnUHb7xBFqCNRtYgVafkJaFs62eWu3uorRM9zT9PszsUAEL22bSn6mhSs4fGCabVWKHvd7coSkm4U",
  "key22": "4u1EJa7GTQDVHMEYcnWvxh4xEBJR4MfiJ8eJ3kU3LQmS1PdutBPXU6o6K8Sd1TzQvoMkqGQthepSdMmd7Y1fcjpf",
  "key23": "5Kqrqfz5vNWi42cbwM6ViBA1CDsFmQYKVJxDMHTcvqREoaMq5MRLWpBS3Pvp11bkzszgPUM9qvNYb6psfzqrYk9m",
  "key24": "zHGzA8Tr62AdZ1PvEPmT6WgfTqJajMnR8Ngq8Ya1dPyM17Q4FyojXsTwaJMmZh4wTXpzQtEZuAkk18hB4Q8hEgj",
  "key25": "wkLiwu6xgoRKScKzwQ8XRWdeY9YiKQmWQRzejLf2PgLEyi2fR9G68DCXfbKQCzNBGoTMTBWPonKSGru5GPJsNLv",
  "key26": "4eAXSoCqqbMPtU1tgQKDLiFCddiw1s4jEeC2UXaD1cNirS7CT1rXCLcJLSEC59SQGBhdAtKTT6sRSRrg6Q1rAC1h",
  "key27": "49w1Vbk9GbtFq2FFwMJmds1FgH9D6dFoSshEAqhhFrYB1vx5a8KP8ug4zfhJkTYL78wz6dvJJxStuZNG5Tvm5wbz",
  "key28": "4ABQfuR9Wf4auGqnRJMxaUDMNGXH9k9DLHrJ6BWx8Cq3SVmpLLJKUiMdFYsF8F1orbVXiGb3cTsDxNL6uKxw4ktD",
  "key29": "5EY2XmR1rPLbx7cqBRs48m6N8h23WcHCKFAQu8HVgxWVV4gxTz6x8G4tR64UC5dTkL5mjQy3SAnixqU5MzBMM3Fs",
  "key30": "4jraxfN5xaV22sRAsLLXbnPJZZLfTQKMX2nLv4JPn6pE6asWLRgfZvnJXCXRcnBPi4zzvoKvu2ng8JRTaeme8k6Y",
  "key31": "3iyeKnjY9mmr9snP8QJoqoefpMvNUpyhVqr6J8bdZbe4nz7Nw4eDn5y7tvjd12mM6jTQK56YEocErccmvmMfW3BC"
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
