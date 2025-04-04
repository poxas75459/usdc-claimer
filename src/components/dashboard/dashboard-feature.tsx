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
    "3FvqTBtJR9VqGNpze3fNQuRuBiNG64M2cpDsLZMYwokUypUofD8fprbzxuhDdwoaumQC7PykNTU47gKJUSpdGduZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZJJpDRYpGXrpKqQzcn2bue6tfMXkNZYLSTBJsPLb6W62EqdBc3VyCK5pu1ToX4VW5mnJNJkTRe9fgwsp1n98iQz",
  "key1": "5fkj6oR4rmwRHL5qTCCqSw3XzDC54rD84HvpwJcduJoFu98ymAfj76UDbsWHaqXXD1T9D3cHHwfR2sgUkNgE532Q",
  "key2": "aCjZDbEittBubPPCKXTnvzQiXFmjMGtPR3J9UmUCidtBmtTrD1qv2V1yRvi2JbXHCqSUyAgwYLJTVUgsdYDjoRi",
  "key3": "3pNsxgsn1WicJBdmrvrQy4EzHJcdbCD5ryjregsgx8eFZzW8PPCmqkczJdbfchEzPd1jviPgwW4nXUjDap43qieN",
  "key4": "2V8czzfNRUEHDiHtXzv3s7BMstv6YpUNYupFcVvMNQavfsCEk4x1zbG7R4AE82vSVtZht6BrAaodx952uWxYuAoM",
  "key5": "45WFHrttJhQaSyjeWmo4rstrX2FtMuRmbrukBfy9UXjEUvoEvCuLLVY9EAzut6ngy1hSKN1Bb7w1egBxow8NvgKq",
  "key6": "4Y4Na1yMLKwaTzV45m7mJanfjzchrNdQC17L992MExBQErD34KJADbCdyGbhHGQVNWu3cdKpNEjM3oJJYCz5dhjN",
  "key7": "3epPA4LFk6LqQXqHukTLwatQhWsu5qxqgRW13zVLjGRyFAm76LerXjqpUVNuSgQzoyVxnaixDrQSj666kY49dpt3",
  "key8": "3bq3RR5FWnbTmCjU2UiaBFrxZX47cA18Tnbr6SiFX3M6okBSfgbenR3Vcgrinz52VSa7DgSEKwQy1ivNRk3jxxro",
  "key9": "276jJtWB9E3sgM5iwt2K8WEAmjgcvJnEkGzQeim5X4o157VzvrJGqW4oj9pssm98oTTi3t67kQ11oEVWh8UDcGGV",
  "key10": "62LWV15FpPq8se72Xtr7Z1fwWxHht4UZY9KEYQXreNFmsjbr6aLLiT74cHrupCDHhpEhGAeJXGHYpAG7kwJoFKYo",
  "key11": "zkxHo9ovdkkGBJXrvv9MXUyq9FZo1R9unGR6bqss1bm6ZbTS5LTPuBzPSqFTSFC7EQ8GMxGaywY4LKYiSyNFffq",
  "key12": "2hTmV7CL5F63bvvdjZX2ctkkNiQzzvLckLbseDzVxXgoXtUpvsZcaT63ZgvZn1vZxkjEdh695Lag973UvfNwtGBt",
  "key13": "5CkgNuAWoDCqvHjYVB1jiSEwFw23Xh71a12Zurga4DjW54Hh69YZSCohup4qfzdPZiX2eYDU9dkZbJ3DHJccP7xz",
  "key14": "3x6xRuFFSvXJFag634juAfkTuu9NqiKLnWSFaUzisdSmqUC4n2UFYvJvqGG6d7TsM9erNuyBVHe48gEjGDPJCmxW",
  "key15": "FZ4F8AFWbnMYDNwWyitupLFWTxYPaW35KAonpfFd1JV9mU9RzS6trw7Ws5Y5zhvsyE6ux6y3sTXRVAC14twgiVY",
  "key16": "2Bf19orFzyXVCJNS7gtqdgbrzpu8en8XhXNwrUd8jv6SyeChUKmKivzTLoXv7rGQ9RTufJjjmz6FZJsvVRThtArb",
  "key17": "VU1tvJhyRkVS6iyHM6aHxcM43Qg52uMVL6DPAiJCAg129ueXLhAANZLLjs7DkuWdZB196dx9UJwR71pnEvmsbU9",
  "key18": "2dvqnH987iWVwjx9xQkF76uokTvaK7vxQzHufXzRDs9TDaoCmxbStkDhLvTptkCWsPSPMhLmbgBZVGHQ4vsg42DF",
  "key19": "HaMu4M5nHgtarWAVcr9vbDUtTWRpCbMjSDZ1BpMxxAarucUrpRTKTLDtEY8bmRTg6uNfXjmBFEJrQvZ713aNJ84",
  "key20": "4ChmToQJSGembJVKbQBXBM62axxkSCEK9khRcGGhnPHVQTGiBd1A398MAVu8yLu5Urj8Lt46aWeQWsszaG5iSQex",
  "key21": "3kPeKhdm4YRzcZvduRuSmQJExCfLYFGfh3aqxNuFf1z9Yg7QztutNUdoxFk6Pyquh63KkGUZcK9SvVroJTmZkJ63",
  "key22": "3h7nN6qoSuSdAUn9vT8QN1Uj3GyN6L1v8ydtS4MdRFDV6jESfv4RPGWnSfcaQoRLF3YnQ2T3K8bwjKqWuHX9Wj6o",
  "key23": "4tUVXt4RPcbfjGa1QCnWuotKQVrjjDyUUrt68EsCPZS4P9juoRUWo4nFmTcUPQst4s7QWpjpFaQ4nD2WXR3PciTT",
  "key24": "3ChyEK27YaYeerkzJLrvqDZtLMAnx7k5ytQfFkNbUq5Mghij14MVLtNHRkUtBrUnXBoRAvk7hB2E2gVtdqy7Pmwm",
  "key25": "3dgC7cn4f5DK98VtS1AjZiHDbcuPDjiAtZEt6fEoxjFpuoku9aEf6nAf6ZowQ34R51WqHTXFztXYXVS4aSA3T5ia",
  "key26": "4wVU4gMSzMZqiDqBYGxMo8yRzfzae6zESMoQg62PTiD8nLgwUr7Fzy8sqnKGbUVirpACW8GpMj6neR7ZyXDNRy2",
  "key27": "2c6LpXgpK92SXW4D7LPzxA2f2HnVhwNwYADgYEnexxLMXtW16p8KBsgjTpheBAbL6W597xNWHeKdZimh41XdiBpk",
  "key28": "4edmBoksC3fR9PWLCgV6HWafP4VeAUc77uGPBKiCPQeBLGgKj6LT8a75K9rpLEiQoaDB7er799nU9W9rTzc2Ec4q",
  "key29": "4wRcMbThcmSTbaUvuXszNiPgLLwcCpMo8zrP4N4QXL4AbQBhnYM9DakhkXRpg6VVcfskdW6La83jnmKB2tPcmqga",
  "key30": "GpyfZY4gARgEGL2bja6rEyK5G1C3cJMzVdrTkU1wqwYzEMChubz7t7jQhe7gtNQTrsy5spkeNQTH4b1tTgaAEB8",
  "key31": "3v3YPPuaHWyhYsxZkQwSHKnzz8qQm5KDZpBQGZhiNr1YV1MudsZzUUFk94wnEuk2EburBEUDjEYcW9C2j1nad4t3",
  "key32": "2mhT3o7CThc9fbVziXadnuvKesVrPMYvrcLPBxuBeHNaxBiVBJnnJW7WfceASmhuY3SodB222hVbkoAtiwLDvEuG",
  "key33": "BNu62CfF6qHL6Pjpq7QJ9JEK3i8owSvQ5eDdhHoJ67pW3Ez8FguN6Pjw2Ucufbm4QmfMwujjeU3NGWQG4TRvjXR",
  "key34": "2fVSknDUobXnQVdxKYj8Q5qJyRRHXLPe7WcK4as1fQptsowgAsRGmumxYbwfWXkQ61u7z1NuYRMvhXeMTtN7wu6N",
  "key35": "3BSXzDpPFsqU5q6x2H3YrTXcRmSqzYELLjoK4cPURgudbLAFRhhm3BFq3DnVqnCXzaoUE626hUkP88USKenFn25u",
  "key36": "5LPDvKYhkTd2qRCt9GM7T3KegESS2Gti1FpimigGtKihs1YHPHeaZu4CidrniSjVRMNnY3g6jq5X1ispcyB6RQh5",
  "key37": "3J5JoSdm6E5eaNqRbKXQ7tJZsT6GdD2XC3EpADXdGCm5JAUmF4ermGVBZo5kWZYMm8chQ7k3epHyFNqzfYyJRabT",
  "key38": "7hRyef43ZMDBiw2JxwW12U9i38WJKXsyrndp3kmTUJ15QHRbPFXA5tADWK2gZoUbayJXCyVVn8PnkwEGMW1GKBJ",
  "key39": "64Rp31j9npFA1caWrAXweHZqrcKg9tKGYiXqGD1QTmc2HLfhSdzd5QtrXUdCZWiHxDJnXAZVqojM15NByfUuGSUb",
  "key40": "4Xmhta6xX1ZqcRE61C4T4Fjc4HbcjvFK2k5Wj9sQFLKg1DP8gUW6vu6CnXPxgaQJFZQQhqA1NhT2sMzkeRecDHz4",
  "key41": "8CYvWV5nwpZEdkmw9RfzhmfMdsGLFF2hKzpfFWEQQ2LKy7WV4uofkd8FZoquNUQPZtmY9cPE1vmdP3CTPufL6rU",
  "key42": "2tihub12N2FFFQi4hgkvxMvrAtr9Zd8n6thiFGSdJd2GuPAYGf9SQWGtsczLkH51pPTUDrN4ERh1e1RUZ7a1U91y",
  "key43": "3zvYvQzdHmMKiBfiJXthNqhkHQiCtufoo9rXZjkvGD24q8XGaUSG7YPMGzfAApGisPLh2QZwndKRoxLyjobB65VE",
  "key44": "4ksS7JJcetU9qvHcGXhQQgQ5fakq4cK7YWZa9WEVfvXHdN3Ftw1Bw3f71DFiMeegttdYskc7uuXwmPHXT7FiNh5W",
  "key45": "2Msa8CMRtTuPvoA9YAyPemi5EDxhPqbvM7Xy9svEFUehivHNJbAC6qjJ9ANQFLUhstTpRaTSDLMaDaDQ4PkabkCK",
  "key46": "4GitDVbG1xR3A6dw59nw99k5VzxuTCGUyN8fEPmW9AH8WhUZnm2mq2LmJeZo9Q69T4NJBdSNgNyhaN5uyYToXeVs"
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
