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
    "2fZ1D7bGh6sQKE3fUmwVFZ6VeEj4t1Y3YZq6qEYPdegA7vd9GErxAG6rGFgZP9CX1vg7ajMZUhoujfGeq1gkeXAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tKbzSsgPEmH8o3TZjKvyLk4YrukERSLXayPJkNSmrbrYR8xLYpGgFyv1ttGuP9j42y89jAdWt5AwBziuudfwviM",
  "key1": "31VCAhCcRrTDRLSFrLK7DnJiyUHrmy9gwyfWq7A2Zm7WFizdRBnfWhFdKsEt7aUqnofEzzjjguYh8fYEHfsRuyea",
  "key2": "53N6Ap2FFFfAP7nn1wrjLDxjhAccM6iQVYtUUhqhDMiWYUZzrVaadmu617SGNGviMQwHNpFZj3yPaqeJ3vh4K5MU",
  "key3": "2FEbfqwEUFVX5xPifKtNDx4DF5rZjnqNgFWfswjaDzYpnoU1FroNKth11DHwGY2DmXTM7YdrQ4ENn4aveYDwFY5Y",
  "key4": "4DfPyVLHochS9xc11dhF735jzbifoEVGX9kjrJVLezToYxKDVr15p3roh3jZFtgFSLHjKimZnTiy4fg1nKquF5p",
  "key5": "dXxcJ9eJZDHV5VXUkDGQHLSXsXFCcoGXzDM2fGzsFdwc6Vgu1LQAHjhVzPuiAHCEHvoun1WHJsZ6hiCaUPCt4vx",
  "key6": "3BYZrSEvELLU3uz28JDqYNfDt4mjKreUMAWp7ntea9JvTvvJmxjVHb5KTcperhsyPB9Q4fSUhtfXiqRUL5zXfLGr",
  "key7": "AK7jCd46gFeDZfPtJejoZnsjKFnPLBh15CpHbimY9zt8td8w3a6rTte6HvGUEgGhEYGNnEAVvxQnF25Q36hvT9C",
  "key8": "3PvLXX8NUSFofZPGJHpd9kuA26QmtYjTf9EoNvfKkGJnuNn3Cb9wDTQRyg5EY3J6aVqMHRWF5CyPbReB6PHmFZin",
  "key9": "3Fg4Y2Je4rV3Y5WzresZ5cW3rHdntBwwTt2U2V7B2AGzUxPtRWfpEitp1239gDbNGMZY1YhG4RQzCcJa2pjqMLwM",
  "key10": "5VCs7v4Hvc5LrKefPbnBhnR92y49mmK5NMDzYjThfNBE7HK16EZQTEmoDWZCqaohunW7dVpdk6qpFMnm1Ygq4Toi",
  "key11": "SyoFVssGyxTe9bSh6b2fx3deQBZ5zkJXzvU4XoqBdfjZSjEqR3MbqR978UydXZSpyDXToksnsgcWttjwLsVXxaY",
  "key12": "4ZJ7x3L9GB6KV2rjbwMzdTpcjKiG3eAcJxKBeS3d74q5uYepJWaJam5gQ1M7HrcxQUqffpTB4nTsEE8TdTXWfaZ7",
  "key13": "odiy33GZciPkK3teEmjEek8KoXaJZYBomtTc21hmL8MeW5Er9NZrGnoisEJCN955LUz2mrUAn2PYxsP7nhvtoy6",
  "key14": "2qtBX28kKps7a49uqAiTFzpw8morzf3QMBbU6dViuUHin4KpZ8k5vNTP12PxJATVxQUZe9z7DVmsrnoYvmaDbpqF",
  "key15": "54y4tx24h5hw2MCexEaohD2z4J2HG73js2rqmL9sSG6WHLHatHBRXtsJCnjW3q5H7XSmuhB1AT4gs7j2oZ169zB2",
  "key16": "5RqVXUPWMqiLK3LKevyMmonPmVTMuKjaqHCHToZJ8T7yUihcjdRpf8sfyVpAdN8KggsxhpiJLPTRWmhuZpdBY3Fo",
  "key17": "3iou8UeG5opvTQN3hsw3qxa1ynsiwNAk3LXmpEBAbcC51ywDL2fpaV1UoVvAwEA4tFTnnhMurSAUn1Cs2uoZcrNe",
  "key18": "Eri5QEKRBcndBPNzr1uGWh4qbse7kqZbngkP9mtE667PGYJB1BkDqg6M9rtaVGhB8JwtJn8pbFxkqGW15jmp7Wk",
  "key19": "4TKswrxRwf1MkSR4PoD12SaJkY84eVdJYq4LNN7LwuHCC8nvPRmPXDFYRVVQrkk1tqcx3ianZfT6Ka45Qx5uxLXi",
  "key20": "4KpnHruAsieQromdFd48hvVTzKqHdXbJw6evXsWY7tvSfrE7czroaxXH5vs2Js3Hg8TBgk4TzRKMD47qEo7TTim7",
  "key21": "JBHR9TMGMcQPg9trvDUitshFWPEmCfCeMUKgWBNbKVKrMVwaYSoxYNAzFoHrV75kf39ZZYLT9iW9cdbUBX5Hdga",
  "key22": "4EcCAc4e1LstEBCvSHmtPRMEcDpagimiBWgovyrJzX8hDRNCPxxW1tRhoj5vvNAVg6U2PUwQad7A6pHw7haLmFzn",
  "key23": "3SvEZHdHWBCnZY1z5UwnjLDMcDrpMsug97poqhZjQFfERYRezmLuZuaViKw2pNsQcAw4PXR8jxk475MtdG6Q9qmD",
  "key24": "3TVnCnx8VuuS5Rmp12N5MmAev9oU1Coh9dYsXmky6UmUN5YTkJeo2XpVL48Xpcx3xQny7VEXEuahSkWmaQkKhGBe",
  "key25": "3D9YLN3UPt6u7nHzBFinBGTSz6e5tAPq88kforFkg9WRHbbhJaoKmRYbSxeJry2eEn8dDo54HjrAdt7rStYYi8eB",
  "key26": "3Gz1jYxPMuGpEx9ySu8CoBxJHq6bWePYWKTLgDGJecCV7AJ2oMvxR4qKad93FmEMNzw7ujuHLWwYEc5MCKMogesn",
  "key27": "dRtpfTNQouJXZUPykhYged7AGnkpfcR3LzrCkkWzU4wfx7MGPbDxLKHsJLsdG5WnBqdgKeiw2ytMYwkEyatpKEq",
  "key28": "4dyP9NF8nuimtbf84Np5WzWxsEce2LVGYyJRNV5izV1CdBaPWSQyNQH1M2VHgSbpwHS7Gjc4LgMSph9XztKqhEgB",
  "key29": "3J4nxVbEGgEycGqrTueMf3wvbpGNGGQVjZNq6VX5rEb1YUYgs48dLNBmKmy7wTEajk2oCiUdkzBKAFQf9yHK8tqK",
  "key30": "3UtBLLuxgBhZ1zbo4UNAoSHh8g1n6gSDwTbqRUg4fLPVW9Gcv3L1C1nP6EMS8LNPGCp6pKxUZVKc45Y38RJ8hmEw",
  "key31": "2der6ewt94KefDh7Sbfk3gUMEJZJx9zNJe43wtAc9a6BYMovRKDcGg7uDLMWSDQBSi56NvNHUkx1s6UmUcFzsU3q",
  "key32": "4ud5mKa4YRu8rz1c9wfS7ZYSjLcerwh53gQJf4D6Pxowzjnt6xtS6RujmaffNoAEap72CeLsbfrWLXoZdDxgMwQ",
  "key33": "3EXiYyZ1GdynHiexYZg1npH6TtiwKQRBTXZJqEFZt4yV5hmEpDUPmM5akHfkhokhBTxMFQ6nZkY5PhhihuiDscAq",
  "key34": "4uJQtZejnx8ohTZ9pNGW841ZT6LJbF4zpLZSounJHNn6Km6ywQ7KWnDjtd3xo3agaWnapU1vt7zDrrvDC5RwTpQF",
  "key35": "4R5t7kz3zJRfKKJjjPw1WSnnQYDN3krAAoygdd77MduxqR9mktMhrXmDMiNuZtMDCGnFKCXCeBHoSedzf4Towzay",
  "key36": "4FTgbeZkKXQGvPU9u6niwLEySsg1NhjU2Tyr9btMTyXs5c8hiQ8zTiZUHj6Ee1nzisKq49tQ9UFDhxcGZQXLyQQu",
  "key37": "67AXpjMY9maSodi5fkQaos7k8NdWbxEzfLfzstc7BHpbRs9rauY86zHdtG3vSzPmVABg5ZKjrQnBfVFrzWEUaz3D",
  "key38": "38LRyWeGTp6HpJeDL7y2pn7rjBgJBhfnxMr6GyVh3GmaWdnadMWEzUE7qQ2Ypo6U5qkbcDnzWf55CVQZHpescpJi",
  "key39": "4iRatTWRUcy3oRgHLYfQfsNjLg4g1EjAQhq1rmX8d5C1SD4S3VbYwCSwBuEzj4ie2jYBezqs1VybUXZ4FWKQHEBo",
  "key40": "3G1AcvTj3io9Xua5JwzvWgHXgYLdUenhchu2JWR7mmhJ9dQFvMzDQw5oJmakp9KLULgFEksFq41rpFPtk6Exp5qN",
  "key41": "8qBtfQztzV49WTFmgfJpC4HqwBChYr6EYtDJWNvgeHWgpkhNHXAZziiuhuFzW2rUg18UR7iErtUhaHAtnWKbUeN",
  "key42": "4mz1jydto5Cf7sgiDFpQjhyZ2FUsm6y6FgqeBt9kLbifap4eiKftejzVktq4NCcNLeBEFdsYvNTGv6BtJgWUg9Fn",
  "key43": "5wKtoMz1e4pSxRk5EWEXQKmV3twqka9cwn9zBVPRzaf3oMFFb9EHdBnoRQajL7TohxS5urwhaWn7esDwXmAGea7f"
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
