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
    "3SD52r4bVQTac8JXmjDDGC48gfjX3vU15t2Mi4UJggkGPMzPoRsqgjpTAxUa68cn1T1chFt28yxJmfsagp19RvEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49DGY1hKfy51gLhWLMSxS3WkQEhb2Bo3EhSFuSskF54wZVU9sBiQLZ7Sn4q9FUKp4P7Z5B2oCWFJmEoMHbU1nCgP",
  "key1": "3ZMrhK2f87a6uFDkFiqSibMuesviMRHcaGtJemGgYamaaDggJgcY8v4pYwsi4EKXDAuvd4tshcaKwAkx9sLssrbG",
  "key2": "LtXNeEcFmBoFBMMdoCcwHz63K2ZTKSjzY8fhXDuEePEprjSrKe8K12YqrBE8EVJHixz6p1YK7c7Gr7xomTGjY2W",
  "key3": "5mLCzK86TD1HhaxiY1UScUNkVBbEP2V9P7k8fueeEB7Uwmf3KodNPCp67RpxUtTDnfjsbbFNiMLNjzBEtBiCPsyp",
  "key4": "4vPg8AUvzU6JXtpvdGjRuXZS352L3wRFxQP76ucYcg883YJpsE9qhia3PsWPUTiry34xAHhvPchVwvpCcosjT1wi",
  "key5": "5TkwchAiS293qWrF6C4rS2KLpqCrkj7AcWDWhhdD1hcjBAiaHgdFwT64JvMWYpFoYmKPE3tApxTQehvgwEd7VPhi",
  "key6": "5P5WMnybtTyuNSa41EaEvgY8fD4XeiCSt28T1RLySGeyYfiLRHqEYEMZTQNgE2uQaHHdNRKEs5fwYv1vESreiXJh",
  "key7": "24XPSy31egMkYoHVfiwuatfy9yQzAR4HFTvUkP77FXL68qKrwVrsH4eQ3g9a5QHuvunnCBDNVF7wT5rcGn9PSt7w",
  "key8": "5jZHHtHajUwdR86dx2wFVZQJdccX5e5cjwsrXGg5iSd5h8VUcyykTNhPspvb91ZDvF8vPD4Hs56UG58WhERhQAi4",
  "key9": "4GkLRqBXtFMeFYR5UZRGCi1kjkRgL2szqmM75BjrqUTD5F7BRzhPmu7MHDVygBCgdj1LLk3VuGsGw5c1gLQd59hz",
  "key10": "55usxWtboAAoJvZ7xw69Ej13SaSkQcotnnAdw37z8La5ypcgJibKZMHavz5hcbsD4XZgq4ExY7Si1RTSDxSYc7h5",
  "key11": "4oPeSidU8ceTtG5LjhhnvGh95jfp7cEjrHY7wrVgAYBzTi4xB8zQ8PSv2svj3AHRfKYAXs6hb7doydTN7MPDnCFR",
  "key12": "2oqUQv8TwerMN98BMzvBZohPYFimCvKFrpLaxNhE8UStRtz2HZZcaBzTJEi5pvmFEnU4b9t7pQazdXY4Hrk1mnzG",
  "key13": "85XSoLTFrZVKNJr7kVoS9dgX3fXVXt7ZfPrqteAdu37VYpbsmGpbeM7zi1Q4FnMDr4hBHdKGXSTHWzSnGkAptwm",
  "key14": "2mKqwEgTAvuhxejTJEhSaqK2ZtpqmP4PsHX5zFiWL4hvBWQyG7PSivg6rYtAsow8YyrodHAYGWsnhuc25gUZXsdX",
  "key15": "5LXX5PeeDrhswvxPp2ENyVBe5kx2vFWFKbMarym8j6FxsZmcW97CC6yPEym9u8FgfKifqG9pSuAN58m7vWVQA4d",
  "key16": "4cvrAUxFqDVZxaLVbizAYSPGYU9XzMr9rmttD2HZ4k9fXgHBrHeV4mxfsQWBGigKemDU8oYX2z63AJk7ixR22YAo",
  "key17": "3fpKkfTBY36SEYbjBJ47UZnsgDfztHB1p1TFTK6yVD5tLfrM4VgVAoGFn3aPbfUH84xiGTa6mkCjxcTguGX7EF4u",
  "key18": "2QTfERFYQ27cni5i58bHDMRbmFrkwJ21hv7jXjP1AW3vrTBE52pWSnn33jj4jxwqgDiaEctHhYeB3SHL35MWsuke",
  "key19": "3rQyE4jXeXABnzkG98D15t2WYshP8C8N4Ch5YDuq4nSui6YqM6WbaMtGXKeKhvaa97fTjZSjPYc6JcwcF1Vs4xKB",
  "key20": "4PxSoZyJkXuk9KzrmsTka3aqZe5C3b9UAEhFri13QUwsYdQHY6zD4BFpk7xdbEFeG6qUVssGYNyZqQNFLcJVSbku",
  "key21": "4QD89PriyNEhugBvy7N22qahqJsdxmiad6GQV3Uuz7NDm8z7AH6NVuzKCo9HQFJvtC6m5sc5rtx26Kz5m1hudFn5",
  "key22": "5WreMoQAjjCk8nQ3vz3KeX2yUbjAkxwJTmx1Yyfp6EZdpbbSkDEwnumuqtTfHB62TVQXVrdTgZtkK35vZb99PCRC",
  "key23": "663C7aysXjCU7tbaPkiQuPpZRMP36qgQ61hBf7saNrqzwDtiXMRUhUYfEqMizc8hXB9fVD8k6dAMztYu1Pvvqymy",
  "key24": "5CKGiz6GaeXuuU2JRLWSTPxtLqzSVa6M3g5tPgo1KQU5NAx4NX9cxL71LmEoywdMHVmY5zVsmQxcm1BwcBk7W8Qv",
  "key25": "41Eb86AMKPyNGrmfYXaWpdB3iaCpw7vBwKbQtfHTQ36sMR1P2YUWJKNfDRGCheRRdjmrVWAoErpxRxc6iCzarF4s",
  "key26": "5DHHrrrdNZAJKmusDM6fbaNLmLW1jgbBj1LDYAUfBX2kLaqiqvhojqeZ67LpMBcWigyzFuGb8cbsoPL5EvSGZKTt",
  "key27": "3PAjstK42FQEquPvzCxMdWwzYmPBxSdd9gk9u6EKhKirqonDmzaPheb3wdqQQM6cajbxdppPv8cxSoJ9QHirzZoa",
  "key28": "3bwFsMh7S4r1FXjEiPnxow31YeYuhXcEdSSjHHnsxDfR7AgrddiBfmhHCtfKBoy1Lk88giJ9im6Hf5WhQkrYgHtQ",
  "key29": "MsMYQncgsGSvqnv8f2mRo4ct8vpBF4LLbjmtxnb97XSyAyPJ2rFKY4atwB5oZqih9a173eRnHY8uwwUzNuZFodP",
  "key30": "42wa3pPHW9QsRkjLKkYG2B2pE3pFCe5c9XwFc6oB2ZymUmc2VGkFLXHuANonJk3cofbtV1z6vrFWGCsvVaxWqg6T",
  "key31": "221nwuGjM8LVBdJyduRuSdoh6bcai6SmuCAyQQgyWJgDoiRW2c9fSgXLTQeZ2vpMyoQNPRG6PZ4TiAMZ8Bx3RsgN",
  "key32": "5AzA3CxfSTWSxX2RFRgGaLpwR5B1ebUVDztXLdoXmX2iUBvxaDMiDkhGfkhau7rg21W1pdU4vkyYx2GuFxFj32UN",
  "key33": "6NGVMnS2nReDkjhdcuhia9jSuV68A3kE8fvSQrtDvaqdNN7hmmhYhenSdXepNGpm3zHRnCejWsuGTaffzgM6kPE",
  "key34": "38Ax6NneWuqhkD66rk6FokJE3AqVJKJLKRxEwGufkZNtSckyvWRMVFtFRsaZoxMzRhPbAGr3CGspijPQEjKC5uui",
  "key35": "2HbZ8kHkUjYwrUEmeYN8urXNhAWC7t1KKEALomiHumZCSoWXnXdx6d5vhNo4WKJwVC7NApg53B8pKdy4WXvi3HGz",
  "key36": "22VrWxbvwPf3KdPZyR7mxnpShUgBY1Ns4vA3aKY9x6eNJhnkgnc5o1B95m2Nc7FeR7Kwo8pceYGFvJ5e7pvRgoyw",
  "key37": "5xdiuY86ycVk4hsJwfJSxVhJx621YZMLHzpjVHjqQBvnV5uYETFwEXdhkLidB4XhVqQzyeBjByWrY8MznvbpBcRd",
  "key38": "5HuxXbw6C1yNbAQSx6Y3nsq5iBJMSbdAgaMy77X4wbBBrkBoa94xC3oHhCdWNvEugJTqTi1tBUmw4n7Q6gPodqkN",
  "key39": "4cNBvL5KRzhKuoE6LdkebyBcSx5ZY3Sm2ajNacs7X2kg4zgxtxPthKLGnzHSu55E2badhvYhDXLiMKmYEyXhE5jZ",
  "key40": "584KXagwCReMgPkPSLiqAvKhXBEqRxXoQxrMLVSbf5e65DkdLyUxERJjvFGAaF6QAG2wT9tKpbyLrBmMuX5a4yWr",
  "key41": "5Carvd4GUfr871aoo9Eu9a7yLzx55AT6XprRy8WRh8ZYpESjTRzJiWrXCGiYCHbmVxNREiM4oDUWStpRG8TTKc9y"
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
