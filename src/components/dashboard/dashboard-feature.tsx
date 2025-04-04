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
    "csePg4STvFp4kYWz6T9coHhKxUMVrf8om1GZGUFTYzoPpFgySZELP3gan5Vk3XvzK3LmtCQWCN2RGiR8xRHt8Ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gfazSNEFXsdfMzEFgkys28fgja7JQ3QM78yVbedtn5QuvnbMQja3EfkhBH59xttpgbsFHMizokzAcZARuWNSpg4",
  "key1": "7JEbspsjhJozYmAw2nwwpX86RvpPjbG7zE4Fwu249H6YuX3CsHWSyJZkVU5vXf6AsAA5MekbgXoMVTQfC9xAiE4",
  "key2": "4fzqc8Cdb5dnnJzyPVUs8qM461PMiiHDAhk9p2RL8LEQL77v7DM1dwDDRaMCLuaKHDThtdyXe1i2PjoMkDbG9Dkd",
  "key3": "2x1w1Z8iUpb2DoYuVt9z4Arqz6fNkntVV9La9krMJmyWxNUJ1WPs9wzAEteYyeF63v1sucKfwj94vqZDMrwB27wk",
  "key4": "5tEhmcRGJNAE5SMZv9QjfBp8Ugz5SD289ZNpuPSVwtdzjktaer1kyhov6GmJ645m7AfPNwXgxUZVExFaVh8HNS6J",
  "key5": "5t4P6yf3Lmoxbp3hMBzLpJQu5pDbgKzYGEEZz8GEagSHnaZaKP7rKT5TUFU539KPyXQ7XLTVYDfH9x4RQkJ4ZX9E",
  "key6": "241jqTFCJiteMVoMWAJH44tzrH5Dm3gVA7P4o71Vtm3UDXynUmoKqzGQEmwuty3fxMhC9ztCVs5TtGDS3ViYYLxs",
  "key7": "3uXWSX4KuckAvguqCijTGS4dVPZRkRS3H7EnbLGwrj4BoZED8nkkER9qgQh11ELcD9QZG36M4tSN61tjnxm71p4H",
  "key8": "zJDu2TwmHb1gDGpCwsBGLn4X4LnPqHxmqrxg6dzYkX9uDXZKvWLmfaHTSo3fKNuFaLpcdNDvHUUDaNfxN9N4fNP",
  "key9": "MTj9iZpRJ7RhxS2Zq9q486tGyS1kCXAvrw7nxd5bGbGagZ2jXL1Nx9MmZoAbUahLhr7NSqEC9pQ72zWwM4JgP5K",
  "key10": "2HmSGcwoC9NtWn8kFUDTdCNDq9STWs4Jraezhj4tmXsRsddvgekVd9t9sBGUrtuz7LXaBbwQBwrwxezUFjHpcEcJ",
  "key11": "32b58Q84myWeDihTrm9AetsbTq7YfKcYGT9rXFHvwAdyiuz25JzZNPTuTaZY1ZuvSAm4A1LPVsS8cxRcNkS8bR66",
  "key12": "2kLMMcDUb7J52BRhfk31N3mk12EDj4EmQfAvQMutBphaDSpp8rQe9K3Foqo7emJJ6jecLe71dZuew5A4hsEHxGky",
  "key13": "5EJsg1NCZd9tCeHbZHnoYdfY1w57B4broF7N6GD6bxsHfrw7vvcCG1qJzn35otuQ3wuzGvZGWvfMr4o11tb7w29z",
  "key14": "56YPJqzzfh85b9zwJ68JjBkB9Wr3pYcU5SQK3xQXHz5CCpNxfASHZrSxdfB6mXttCkTFs4eKmPJsJVHTkHLo2Kbx",
  "key15": "4ZZdpDVDpAWfXa8vjWczCW2xUrK4VPT7c6kR64bGa36ZJVN9Rss8v2LNUuDGj9Yaik5fkEK41B8ZQvfjDFALXtvS",
  "key16": "52XBmKSeVsGcTCh5dYKJeJTX1KUiz5kdzuqhobNa9BV2CPzmxqXrjzeXRfmNPp8NPm6jCiwfgGoNd53bXSwKd1pp",
  "key17": "4WpnPJUkVdVUJEpxFuPueAKiNBTZNuGiuGE79ucHCgSMVMp6faCZdevUTrF8Gkeeny1K5fpEjJJF8VNJajjjHj7G",
  "key18": "2kjGdvLd98GaFnqRmgdnHF6BFcVpDruv3gdJJA7PhnWYQz3YdmHhRh4oYezDFccdeyag4ppq1yBMqQ8T9CcXcuy1",
  "key19": "4tdkGerye4oX2V93z79zzeKLLcX13rwqufqnfz5btp16Xy2Hx7z2j64Px7iojRQKoG7i7EVQytFAvuLCQgK7m3x7",
  "key20": "3Pp8tUUgC1sc72UqwyRgYqaYNXXjCN11bwNTPKSmiVLWmW9SPDbHjhicXkC4XsLVCaHCzYJpPGZ5tM6hdm44rqsV",
  "key21": "241VHygFbgFARETJ5A6DrZvfEecqrx8wEZSru2yZWYNpioAsdoRQdbDKAJfHUYqVAaS6nyNxEUmjsUaKnDvpR48Z",
  "key22": "5NaxEZ1L1avik7TbXddsA1egHG6cP4wkmUyjCEp2W5FXjpr6NnpKnniTkrEbUHCAG1Msktm3vdPdhRSwvp9H1Ks",
  "key23": "26jLKZRttz4fjkKVwFZwD7g7QfVfCRoYpG8oyWAnyS8Sy2nxut1dQtAjryoj41zLQtZ5Tg7h3bh4PpkGSn3Tf3pu",
  "key24": "p6a1QqkimmPJSaXCtLXsPKGZKrn9x6XZoBugrw6JG3ccXxxDB3hfq6kmt5J3JaQ9YkfqvPd3rfRe9yhgLUJd28C",
  "key25": "3w77WuFtGqsX3fy6q3ZeZhbj3F4JcBY9btQk1j5AFDooB1TRo1UCqGtoeJEuTgjnjG5yydqs9L37W5Pmvj1gGMoo",
  "key26": "efzzsAg6WTTyVvoNXjGMm3GQn322iPpem382xzwbBt8NGHXDnoeN6o49XzhL6VVyMh2yWtw5zk61EUeyqcr4fEx",
  "key27": "45RaHM2yRHXAgny9Vgcp4ZteCh3wX5S6U3rrBd2BFYNrJJmzNgksSMpdnfeyFwyi6wt9twEP4u4SzMapP8P7ADc3",
  "key28": "55vtz2Mmxgj4cLwjkrSf12GckWhHgTaScPBuR3obhDK5LVioXeCiHEbA4xoqYF34u3ryuuvbShLMveNAjJMAwpDk",
  "key29": "8wjzUyyTZvbX4hnZs2MZvfEHxgHciQWCzVF2aJAhq4i1GPYzq8FrHPAiVVVrYZFGUDLfsksByPgHBSfr8CGPEUS",
  "key30": "3sWoFCptyFg5H95661x53TaURg8CL2nqn1HBg8NAkMdzChtuMmVkchdkmFBV6iTaM62itESxQmoiT3mTBNRVvZji",
  "key31": "3bdrTGNraDT6YoLzhfQdd5HcQSwGcEczWmeC3P5RMsmJjFmrhR8pdNBTJHkG8wkGXnxHZv4qNtHWxqoCKw4kPAaJ",
  "key32": "PsEi36841cjN1GmNG8oYf31mZsL1Jr75mfH5DDNV2fSJPsAEuF49aZEFfG6wvxD63wDVCe82G2XTtLwpXcKTQCu",
  "key33": "4GrwEGi4qFHb9Rc9pjatd87JkNzQ9DPBgzccV1xmvz4su49rHSC9suQrLSsJMMQza4BXwas8qmXDhZLcsr3LaPw9",
  "key34": "5HVuHUUWjRpFD32FoMoycYZaJJv5aPHkpbcLBFQGSzJeHPu4qVSSED3yZ1NfUr3rr5mhtu8jvNmMJWPzPAtUKpxq",
  "key35": "3kn2q4FXMy2FCoD6RbggaywnEMJgTbVf2tbUF239DAXxhyDd3sqoRcunTeA7i8HLg7MLhVAXJ95fMaMtXzytK6AS",
  "key36": "aipBtUq1jMtS5xxHXdQFYXQM1P2H7Cz7cnNUL924HQzNaTjxtfK2iLRGUEF8Dy79X6BBDwcH6KREB6gQY3T1mv9",
  "key37": "3FGYJHUa99LWgypfpBVZLg6FfRnYgcUuzG5xMJtLdRxJmZdVL2ZXDiYJVqhRtocuKKhhCYESa4h2YCxJAqvpsDt3",
  "key38": "3Fa1y4c5VoMafyYMrd5wrwcUbEAKMh9U12JnAt1yHsBtd4cLeGjYHJ5oUFC9bfgdXTqQU2bDKJkJcquAghXX83gP"
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
