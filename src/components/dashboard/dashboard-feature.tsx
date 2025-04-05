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
    "2huAhXYhYpzxzrr3WvYP3qkumR8UME9DHkS52gDpJEz5uz1XNHwyfhkCq5cCBuDCZY5W1WbP1wCV8jmHapY8848i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J369MCKBrp1ZpSAiJNzfRWWgcghfmXHS9wXkqCzoknap7kB33d4J16L9jMswQ7UM8HG39p2NwJ1ZSS6rdJ5ZHYX",
  "key1": "3bV9QnjZz747BWuLEBUuKQ79G2ZfwZpXU7Q2oJGRhUvPHRmXyLgoszi7bwLaykTWz7Lc582NQKQf9dizWLpRWZ4j",
  "key2": "whFoqgBJbnauRhQmBTuYgPohzRzhddm3chmgDbCogQLdQ1iYXSxE5HEtTsWk1phPmQbFRN3eGXZCHKh7EDr8SK5",
  "key3": "33SPEyTU8uU5SMcjP4KWahrzsiC6sFcJ6GfPXPQujq1hT67ZRBjFeTZAZijbx7E9YqsFoQvtcDv557SiW9zajBqS",
  "key4": "51K3o2SXKSJLMsp6EtEir3P8yM4SBBuiSUH335eTkDpEkr6VM11MT8QK27Y7tMyNpkpAWEhVwRxUb879tAZfUXra",
  "key5": "2qmJfQ6jmav4NVAzc622RayWUDincMxHKunXu36joUdpsjAb7nHHNhEP3NAJskFx5RRzxVY6kWshKmeWmDSBfXNi",
  "key6": "5ntDnpJ4DusxSNinuw4rQvsbKbFT1SGuzPsf2QWHBeXev6U5wqfLLdDtd6MW1CwUFC56cHJdhX2hBbYJaobqDV42",
  "key7": "4izGg2V2BsFYvAyYgYt3nRrH6VEjqfQXe4ACnkqipsfErvEC9qXnen2S4JydTakwZrDi3LbWVWU2783q3zn8XBob",
  "key8": "5p3CJr2kGia1s1m5fQgyuKvqsxPLKZk3yGtTWRj6cco1WNPrcNXQVwt91Fsme2B1C4amgLMeiX1iEe4Z8pxwutx2",
  "key9": "5XnxFL8M2uvtSN2V2e91Cb6cPjMnpYd3sLAL9D2ieWza25MMWcR4VWAtqzsRgLYUV9AVMNFhr39nskw8EUmTYcFa",
  "key10": "AjCfktJLD8J2D8G4kiFPMoj9xtdN4HotXC5wBPkhQ2TUxJxJipjTZzMcwCWnJgh2xcxxUHJ6H1yX1HWP4SEKgsu",
  "key11": "5SExg6wWRS2YogJGHveVzwLeM4f7x88Z9WUR587KEs95WYX8i9akPAKEYkTjwBNrre9mtLfKR2VnHiDs5AyBDWYu",
  "key12": "3tvnrR6khvtkT2JTdwX7tdztqLuyDxZ3WxNDFntUG76jmdHMJzvPnC34grH67R7K3Zhpnk6b151Vm6AQPF3AUm7i",
  "key13": "53HRbR2YmfwjJGZrCHp5HXFveoqPvzACDEV1FdWoZzA2f7GLReX3GTWSLrXx3qX5AYTjVs37p37trQrFWaeBtoJY",
  "key14": "5GASPfzFb2Dz4RPjmbk1RiT8v8zNdE81wFz9o91agLENWNLyhNMdzPWbpSKuB3gAhoMkBdgn1pG2xdA7CMsf7hwn",
  "key15": "2psnoXDaVnx2m6VzvpPabKnk1Nv2wFrXHUpBzxjht5PwApWzz28hBhC2xUaUozEL93ipdjPT4qaroutARmBtdmbp",
  "key16": "Jeyg7Zv95oCtBoit75cQ3XWtTPmizuP6pLPD3x1pKCJgrsgnAEjvjYeCjRGYwycFdWA1niYa7WhwF5PpybPDhm3",
  "key17": "3pDGXVUga5Wci2xAeMLExMNqJAqqQYvDaWtK7spWNgreh4MVg3ZQU1crJ7i8PmaSrvgtiXzHTL3CUW9w8k8oWYbN",
  "key18": "4Q7RfqmJCqLzwug31vBu293HutSsesPyUzpVrm7tz8uW63P5315HJYKhbACcyrDKVfrPzv9Lri8NSCV6DCKu2qye",
  "key19": "2zALbeGfDyBZYMMiDYSrMvVZm4wWDivu1XFgHF3YqvrrUEdZLr16CUN8RfTvoaTksjpVXPf1tzVL1fYiadUAucff",
  "key20": "gyJTptMsQrRQcYUXadnt6Qf7e78ZG3zMNUnDvxeTj8voYMLV4uDAhDYVA8rhVWnJELEK4qUY5jhspQsvtspjpmt",
  "key21": "3WAQPkLjjxgfWyuSxv5JTTvHpYeEtnFiEhychct54Xf3oTLiXKJ4MZo41ojjK6m1SpMowQu22jMKo39yFkorbyxN",
  "key22": "2fgPfWGxmq97Vnfy2QizTPtD6cyJcahBn7xjyrh2w4BvaKdeqwM7Bmi5e8JNGVyJDMGV2ajLCSHSE4FmsRrK5Qs1",
  "key23": "3ex8rJNxU1AsS38JhQczBk1EJCHJbyHKeAw6e9ywqZ7k9cFDwsPEHX7iVMMyZVDBN7SVzRakWJhrb1L3T4saFUsM",
  "key24": "2HvjwjUmTjwGQmLzgqBtAVKoeGtcfMRQCEuWBEoGsWB3a1Mo15SmBKTRgu5Zit2S3pXSMKhe4ktSrjw757VSGQPc",
  "key25": "4pNSmJiBEqcornjBkq6Ub8jwHn8LHH786SzS7NA5zX4cP2wfhxfT2xgvScCAJWrAhswM7y4Eb1RNjtq8qUmDkMdx",
  "key26": "rDxJiy56zJANrKvMzxJ3hRdshfpEaghNBpTZzdjpGu5RajiP7kCU52Df9J6BEJNkUM3vexTAU7XREYZpnC92PLp",
  "key27": "2JFPzJidY1npwx1LP34vyz1MvN2Z6DBsjKi58ZNXVAK5D2XQLV7wpaC5r74jUJn6DE5fQ9LfNVMWQ5R3oDkev2rT",
  "key28": "4z7duujTwGEbAXwhg95F2LAJo8cZgPD54rnzfs65C5HFzsKtbUeRZ5kEkGL9CUGMbZJTrLT34ADma6Bp2dMjUR29",
  "key29": "46sNPLc1DVdfa9VFujyimBkANZdHijdGWwxnMTUzjzZWPxmevpSh8DoJsVXvNJBfbDmDLTVRSbdb3MaM4guiYK3X",
  "key30": "218dkwSxVuzzpPpPAKrYe8aSHnoVmpueEbEV3E6ZX2yfJVzr5xakBqDmK2wdH3kyzZzaGwWgxVvwmf9jc3NtSMLM",
  "key31": "4PnfiJn5hZZkGxogv2wzVQQ52SMQ5Sp2FLu8uTqRFPTrYRoWYZzJnpBmHhtJQb5ut4Kv1EGGiAfTgjxieRuLGP7A",
  "key32": "4TKCBvk4EwJp7QCofYYtexnp3GKuWJx5rNgaapDqmppmkWGaFJCWUkLP2gvSQUuJFc1q2Ut3sRNHPxRzNxHNr7zf",
  "key33": "5opRQpjtKs6cgujv333EPjwjhteLa9sVnVvcxWobtizaQHzotgCX8rk8FEeXdHFQdhhqDcbf5ZXS9TxaHecwCYYv",
  "key34": "5WrAyhjdiXnHVDkMToSJxvzeTrruayiy15LUG1YdkbFXKfPEaEN19qbAFqXQ6Bj4NRmBGZA8BWNVwBAqk8m9rLV3",
  "key35": "4chs5d7NKgrAeQqQi1pkEfbob32riMa3CJWbEzqv8LnsxNyaBJVkL3rVr5yuJJjjiFRnmdJnUFR3QTmVRnhigXsZ",
  "key36": "ymwsbyR1cXw7TxuzgzLDLcKZi4CAcZ7tEGgCthQmKhSaK3YNpoCBxAAzJyn5okxwnqX7PCX6cL4Emn5tkGNw66J",
  "key37": "5XLasPaFRzFdnfKQ1DnFyniq1qfgn7hKbVwAAvnkscBdoWGBFmRXceNsMeEs2veDz2ZfkopatiiELNMuJ9RsX3gX",
  "key38": "4g7opeyMvG2xrmcMXrT9cne2thEDLpULXqyxCDafrT2nLNXrJWfhRJb5GvRxAXUvSr59GiDN6fcdkMiUyGUCqZim",
  "key39": "3AyXxafsW2qQLRBZ7LQ9kEmMXC5nzsr3W7MR3qXJ7V5tXYiktpFhVnJgzXcYyKYiXMC3wBcWdaJwD9tUy2DyFWbj",
  "key40": "3YuBqy8xdbog1bMk33U7z4Cty3pBW2gSbxH65AM78GGRPRWQNj8p2bjd5f5UxH2ntkc4m9gSgMSJbbYcavrfEScH",
  "key41": "22pTA2vYRzKR2Dgrh6MWLUjmoRo2HRnfDnyuFGvuVnJ3JSyg1sJNT3ihFADLfEavXYmfLvuoZg4bGZ4FH1MkfQWA",
  "key42": "25nNcY9mDnncNoAx2S7bQQVhuBjWTUuJ2BYWS4qPsX3yKHLAuTMdfXSEZe9xgBu73EPZs4KCLsvfNtmA2z29VzLi",
  "key43": "2wucBmXSpwRQKUk8pbvWwAG7f51qZNhtCCTTgSpxvRSZociWp4rFfEbmed27MF1FEdzRiz1daRaA7iRKkLyFQ8e6"
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
