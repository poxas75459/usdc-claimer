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
    "5jbpeGnimCrfBVR5mvaBm93x4YLUkJRiMWtqimNNdF7bB9dsMq8miaAtq29EAfscUWGWHqgoGqb91C9xiNc9qH27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DVe9QfXNz7w8LHH1JMKM5m4oBPNxMztM79VtH6WWQcWGQzegAi45BpK4cfzQLqWSudXaoaUBgWiRJ4nK34bHrfc",
  "key1": "RVto42EpLaytvmPCft5pHapGudSfGkFYpSzPApjVhuKjrJBQTkJ1Jmh4mDPh8g3h2yQQQMaeFAAXRzqdQWiJcT7",
  "key2": "21WaNMT84dcdqG7et6dujScKc9Yit1iNL8LwVQLTFF2MRecnCu4Zja8FDZ1foHTxKJ6E898cHUaRYu6Dvuj6DJso",
  "key3": "3xuzi6EofS4MWbcmV8S2jN7CTv8BXRUCfrgbJWK7J5urVCAW8b54bKgLskoREVnyJevHLpfLGHtchTw8jSsh19sY",
  "key4": "5PueQeJbdm6NqXDR7ibCHfmkdz6NmGqQFGo49k5qUYKaJFyNDG1FRa7YkyJ3pShdVdLRXnGfGiBNN2TMSK7BULUw",
  "key5": "2gyEVTXY7qZQAVtqud9cXdugX26hbg594g1PEtmwNmUxi6q6uQ3V15k3QaiSHEcm6a4YbDiSyoXbsEiNJArZRyF3",
  "key6": "5GYp6JE2gS1sSBR8cgT3vjJXvkmS9TsRWpiEKKs3msy82bQBvoSss6oL8LHzxvQDnzPrhSCYXp2R3wfzwmEAfazs",
  "key7": "MvDkLXjezJj9VvLCFdcxxgw7gVaYPNJSidmBNarTVsqHWVQvmvf28NoQmqePrhyCn1i2gZFfeyAd3JqQQXgrfNu",
  "key8": "5GgR121G19VPEWj8hdNsKuMp7HjXefDSGB2rzi57ie59srX2wVefki1AEcCmnKofhdSSSqeyp3iEk8GcXCQyEwYQ",
  "key9": "oGdr6fxQW98bNGFmru7c2j9Habq1zEzoe8GaNUbSCaJuyyyKpgimRuaTy19ijnzX9hH44jeFqB75b1azwLGGNkt",
  "key10": "tW2sGW99PZMYfETaghoktZ6q5zMoYhfMfjd7RcvACqe68EZZv9UxGtkJMX8ep1277VxbgoDMJUP6D9SbbLaF4sk",
  "key11": "2HQdgtPSEcVhDNtFMP92GUiGz6DuqsLZXBoqwEGgoQymg2RGPUNhDpZ4hTtTDnCH6PjPo9NEDurSgFHFr3GDW2BF",
  "key12": "34xqej42xysksJRgJeLiF4nyrCcpRnM9tQobzK1gpYEiumsy4mGQ5MSQAcA2YoExsDE3pkzkf2tBR5NzZWMJrFoW",
  "key13": "2emLaGpuE2ngFTkhJU9GsWwMDd4H4UMWYswHbSPUgiCqSv3AppULvz7EnaA4ot8gVrJHo2BGoQTNsjrnaBdoRCT",
  "key14": "55iPm68Tq9qxBvuEJiPEgdUMrF6xTNMYwuRg8d8EvsqJiAdBRyRVnoDNYBNmoCBv1tciykeDQRX8YUkx7dVG28g",
  "key15": "2N5Bo9932TCWvFkKy1BwCBmEyFgGT6CJ4NfhJjLURGhsVGRKe7bCWrJjULfcBm3CJUfMoJaxcAhKECaaB2gamQ6K",
  "key16": "5aTcA9fDpCxHQcGVsvHrocgcrh98daoJGnRRfRic6K4KtKDRk24iDmiRt2RhxDw9cE3FmHpAhJMKWK2JcR34HUrK",
  "key17": "4oWvTksKy1ZbpF8vapZt8wyJ5w95jXmReEzn5XchZra4TeVRJPdAgRJx7psZXDzPFbnBZudK6Uza9Rps6hqJ9kUX",
  "key18": "2hxuT3bfBmaY5csLq5rwKKTB9ufTDAQrL7TUAiFoieVYAiFhiVWHy1BaRn3QqTP3Ne7jb8BQHgNFcs7Y374Uztqa",
  "key19": "4bTAw6dwQSaheepjFxCxYyW3cuC9PedtZCUfVCic8YUStpd8HVe6W3MFbKA9kTdw4cNZUdTEBx3QWFsi7C5eo4es",
  "key20": "5itewAkU1EPJwq63ggda5m4ibbYeRaoeH9QHgVgoincNy3GGHTkwTPwY8ZkMWsFVVZwXLA6KjxFiAcq9crNrQq2x",
  "key21": "43BEuTcduUiV9BVsM3c7iuFpiGxSBTKCsF3YxBdhPuk53B39ujZPAai2wnEXBJepjjgtW3JUkbykeL7gW2iXYbKR",
  "key22": "yMXfqyhbdCmRFAA4MkEBtsdWh9RdKoSPpbpHiZz2v2tgPrkXUrTowjoLv6YswxQrhfSYxG8gya6qoUkjyP5ArwV",
  "key23": "5nPo9dchUTsSip8ywZYNmsR9XmHWM4JkrFZFUq6BHzKn6XsN49ugMUDdFDJsUoaXAMMjupcqit4mmbJycaFqyjQG",
  "key24": "3i4tJ8PMzu9VuAhNjixAn3BXbE3KCSryczJE8HRs1fUx51TVoVp1CrLXYNJCUA7Q4SHEBfNittzoFiujFfq3tuCN",
  "key25": "4Cx5yR4pya4wj7PvPZo6oTJmK6FXUdbUnaAdKeajHh4TeRsQtL8REQ4Y8N4P7nMpXANCDbjLgW7LRrhfppW75pfk",
  "key26": "Af5kE1cLSqGnaUQiR1hEkbv6EMcn1s6bZLUPFX9FDHZD1fbtSbKgvakNJGXXumrh5jnQa1cYdHncGWiZeaNBNZm",
  "key27": "QUyztGdyhU2Zw8uqEkkbQDkNWCUCCq6SrGkgzUwPcY9xZYcvwdAVLyiv4RipWCCEsL9QKKYPYPyohNb2Ak6kt1T",
  "key28": "5ncmNaPNN7zy8mRagZeNFz6LFYqrrc9pxBFQyGvSbDsDdpE9W2c8zNrrohsaVw8yyALaSK7LbQd8xJawurA1TzmD",
  "key29": "4YjwTgs563g2HvrnaQDhBihzWHAvuneE5PfAWTzQ1hZLPktPVhYYKs4sEqLxH2ycHHkabYzBqtfDfgbx3LKGFmKq",
  "key30": "4WAArxNq8SfWqBkCLcp5x17LuWaBaD65uaes8qBz1H4NZcCEuLphmMt7Fier8ZpbssfdAyrB7x6V7ngf9N7D9wNi",
  "key31": "2WeaQ8aYyZP1MuNf2sHEew8a6ezSnJC45P6GycuM2tZy6mBz1a2VyYX5GomEtnbNHwYU3ZcingvNjgEPq5p8KbAu",
  "key32": "3mrnPcBigBqpctcRw1cUrnj76CihhR2kvX4rGDLkwP5pAU2Jk9w6xNt1xYEkxg6gNqJ2LjCFZtA3UwAfT8sA6AwH",
  "key33": "SJrSgKsizmdXEUpnUeKG22RqpTooEZofMFgzDgyEWHjQCMLh3ZkXggJx8eZh1Ex55882v2LbiA9AGXk61DYEhaN",
  "key34": "51Pj6N8wLsjQvdNtjG3kvsVncTKcLmNEz4DR3gsytG5KWY8o3ugzdfxUNEiDcfmCV977WbjzLA2ivV66gGm8CFLv",
  "key35": "4LfKZf5curgoyknxhGSkZDHZU3swhrN3fu2HyY7KYtXTEiYdN9C82ymJB3DDzARwbP6DobAzqCvKXrD3kymBKAh",
  "key36": "5TLYt5dpgpGKuL3G3Kq9QMhgpCjTnDuLGT45BJLq3XwZ7Dh2wA2SFJ1FQNPQhk3apqTYdT4qimTcofqwJwZK1AgY",
  "key37": "2LbSRFYSpFe7VXPjBoKUjofT1u98n97poMJLCvCw2r1Bqk5exABrr51yJsXcr9gMv1QjrX9McpphbymtoMp5RMtJ",
  "key38": "4HPYV1kw4iTMnvHpxDPhTyD5KrYtfNxH9hZg7dP4zj4ApNQmtCQA2mLUbZ25QC6Pb7TLyTP87GJdzM9vZE95Zovn",
  "key39": "5ES2Ujy4vnjiRpwQkvNAJ6PZRSpZPG9UrmrnCoKp2ZaqrWE1LCG7q7m9z1bAcHRCkoxqczkNfrYz8AF9npNZF6wV",
  "key40": "2diUdEM6hYZbAS4yCFk3hpsct1rnfa7G1vPgR9gRJs7h2tUqLv1ffx3A2EwusS9WUo85hqP7MfUG4cBxik72e6mL",
  "key41": "3eNyhJfTk69A68ZVFWcqfeUz3UMcuKw94m29bxP97pXS7grtj3DXzpaQ5f6eo7yDBj4PNFJqLjTbnWHZZV3dE2XZ",
  "key42": "4Bxi7Kfw8iyvu2oV7toMhUiBArNXTV6DyYh1Mae1rJHuv9jMYEgjS8dpofoqPYmhPudLYjgqQZDCmqqVn6acXRn2",
  "key43": "enr5cm7uZTNQqYZ4n2AgVZQNQsUo6SMMbiJmXjhvqKwQYv61mNjCPtX8VZdnMCNhDEPjsEF257s6WBuxqSx4vEr",
  "key44": "3WdpytBEEkBm3EpNpTsip7MG3nhz6qxUpRhxFP6XtJGEJdxFvBKzPFscy86GK35mqJ2ZxpkTtE7s4vtwEiPMvapU",
  "key45": "2jVtUFBFkugpcvRpg4PJ6qLCjUJifZGPKH9rGUeqdpc4CEYArvuYAfrwQhPd6w6Bpe4Az6zUpWPuL8uPvEnf2VGJ",
  "key46": "ysBHq26SuhJPJpgLjY1TJ4VDF1Vfo8zNwQNzTX5vf9dAiqhXnPt1WjEhZCdFuw6i8dQWjUNGJzrtbT4ZNxQsvxt",
  "key47": "2zTnctJYYpcRwtP5WJVBdBuB3cB3Zsw7kScnZpMjpKABJNt4XbgTXSVQ7BK44tUtuKPN22mCxq9AnEd83oupHsCa"
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
