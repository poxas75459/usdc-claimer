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
    "4XhZWZ6k4RV8P2njs2A7Ndk9UjNBsPT7DZeF8mAHhjsARZy83BPezSUpPHFLAJCmBB4NZTHFU56rGnVCANNpL7jd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pdUbyrkuByoG4uuEzkhPT5P5B6TtMXkQmsvgSmfUoPKcjiGW6Jm1shWGsiRPizStuLeGjdtzp5YJcnD7EbHJ7Jv",
  "key1": "3DnCq9AGfqk3NjhthUEn7i6D37j9iK3VV4n278HFPKfwUtFvN45oSCx878i7HL5fTze9ejUYdjnaew6gpfUacvCP",
  "key2": "4BnRMfqBHF4Fc8BYYqNEvfxNPm52Y77sADk9CpwRwGDaF6QHvXVvTjxm2Nr84wzunZPYrjTP33eTbxdQSPdoFsab",
  "key3": "oDTkYPoZn9eBDbEhs1kqrKPzUKJds6p4gb1mNQ4kHo1b6VHPQqv5FjmP6S6h5y3KAJpSWfyFYKMJ3BXtwftb81m",
  "key4": "4Ypn4zYAx3Gv4heL4wLdydwpahco6Yv4vsvUZVUr3XXodkTcbA1DdBzrYjVoExPCNZXL5n6CuxLtHUsKyWy1VsQp",
  "key5": "W9XSypHc5AkzLN3KuFtTBu2NCzYGXVeibQckCQPrt5rUrXftQQp69uDZ7o7hE7XiMc9eonTjf2doA8XHCGA1QjN",
  "key6": "4tpf9xbbRwpLG2jQ4qHZ3HHmL1WFV81T7W1hvNatAMjY3oxGCqP5YfuCzAybeYCt3vRymFWqDhAsdX5LwHBorzgd",
  "key7": "58CAgP3uFxNL6irCHuMwsEcHrffPFtWEzFnEdwwGnTTBvu6jSFB4ecnD7c6JHL2CtgrNY9yXp2KDf2VRN246pw2u",
  "key8": "55zwNPj7pLDVdnkCgZQtYJWh8uHfmxpxKQugsgB225edpzrL3ioxiAFaMkcfKx5WBSa96pPPEYy6Kk4zmctYyB9E",
  "key9": "Siag1RXEwGJtLokjX8uQLpddu3b8EFJAFarBGYYq3XWq1WgaEkBeuh6FqQWhqe4KfYTMe87wMwgrjHn1WneExD6",
  "key10": "TBq7BYCbaLKP1Jebjwax97CGp3zzkZojjNiPmmZju4EnChZbV1U5BaxnXCUASE4g5Jbnaxj1cMGGVs9kcdB9oPM",
  "key11": "37iw7wt6V1Li8qtTCimNoDJ2zhv2RUAjWvAjf2PzNJysH59oULw55JgvE2dev3XUrU1EmHn5UfjdJBedNApJzwiA",
  "key12": "2TUTimhjTJzDJwkTrwJDHRTBke2EVAZcxHyphuonAcY8eYTKYUb2aDGMpiBJvYVu1fSyudnWdHQEyhKLBgSCcN4B",
  "key13": "32zbLs5pvC3RMHrNnKm54H7vSpaSvDEtJKNfnNQPxp9vmZB81fUA2rKYixWmMKfMMTNgRS3K5H5dxvbcGuo2fP8u",
  "key14": "4rfr58vwGsBN2tn96dW8LdfRmSsbNVseJYheeQboLXJruGEvXoAy1h4jp8AFEMYmw4W3rJ5F7ZEqTYZVcvST4jSq",
  "key15": "2woPbPXc6a3pd592BGenuu8DVUB6FV8X9xWj3YoxW2ggJfTdwJmG1tH7NDkAm2SSyT49Ax1dWWbAnFquKquu7RsZ",
  "key16": "4CViYXWfEz2tmVNn85mLYVyWp8Vm5tg2rsxRCS5bMkJeQhZDp6Jyg3xjtKN6NymPBPynPj2qNVhpx2fpUEbxem3K",
  "key17": "5KP1VsJz9YhQfdvFZdVMPUoRYx67xq1r83SouYrwiz49hFFkQyzJNBbU8btkXU1whSx5Y6az8pQguGetrWpTJTsw",
  "key18": "29xTpe6deTyZugJHsJokg8Pzk6BQfyeBsUi87bDdxzR7N99U26eo6eYWNadioh9BYjtGgfn8492xTu3NtkbHqKFL",
  "key19": "4bn1ZEZScCREb9kL4MY8xC8rc5MhEWVcYdvHbJT512S37iy7Qaf7uQQdhz4KvyY8szDyf4xtEPPM3K16sgE7byzv",
  "key20": "4NWXLChWDsyeNq6kwv62xF6ZtiyBScxd88a3ZNEWEReGQiVHKUUMigZN1S2SaKWTB3vqLKKFcrqDMTcuL4URNDas",
  "key21": "LfBwR4UGPcWfdxpnQgVpJZVUthJ9qiqX1UJVsjzReQjjRtduAkUbgaKVAonAoqUDLHFeQMCXggwvZovYgwTvaKy",
  "key22": "QKcowFGdatTpmbYGY44bwyYcoworK8yXQjLjpT4HMhtZe7N9PTakWWwgdUAqyMJa6iDf1FMNxp37cFM3bf3GHhD",
  "key23": "29iFPSnS9JcghhdLqrK5h23HV3EhmgRN2CaPydGt7q9eZT8x6yfBVRiRp9u7GR8F6H34yYyK2auuUi9dWeN8f9wf",
  "key24": "3hfE5kcF5iFaUdNXPk7kJW1yykqWmTn3zWEWit83DvKwK8qXeyG4saArWysb444dNDUvxx2bHgxi2Rad4HY3tW6a",
  "key25": "28ZXreWSb6Mp9DLSMyFoqqVC94mfABie6rkcoRmHiG3yyc7KGXWAnjwoEYRT5KuEYXYEEWXudQQkLjPtFyGVZ2UU",
  "key26": "411rymraGDPAdisphfScsjy5xgKfffYe97gJCcPXZW2xgqrJSMWhVqVfJySBy9qS1qZvmoZotWKzfv2e2LAiiCdP",
  "key27": "3UQvcTUJsk3Vb7LSpg42r962qZrUeceJY751ABkbrwSaLYaE8XXBGgSm1uqUZ2baUuV1jbw8TxQ8snUhVD7woBmB",
  "key28": "22g41oZ7jxjao1t3cezu6f65amBUHB5gVRQNUpqWAWisgXcKMYoQnhG5NQ4sygTPqTt9WfWBc9P3dhj39A1ZXRAH",
  "key29": "3xKhZCpAir3Zc2VwEGXk2fLPH3bYqHSf2aNgup1FT3Tn9W5ynn4dBBn6BCg5UDZ2YF8uDJPWjLsbGdeBgjw8huQS",
  "key30": "4G57m3niG3YNUGioERxNZ41Npx6i9APGmY9cPZigMMgCTN4G7a5qeuFyccvLwHESm6zZ5QJ8PWF8HenDfucXiTny",
  "key31": "2WFKWDYq5YcqskS5myGYZVEzXAN8cDpNvzJL7LvFPqHQn71pZszZGe3s42jorTHK3TcPZicmNwwWeUfLHn5z3DTR",
  "key32": "5rXUuY5NcS3RFz247kb9Lq99uT9gr4Qd9Es2bxRXE1RfkZkkrNVXL3D6zHA7D7N7v8k6p2efhV2pVTVxNCtzvFjo",
  "key33": "5Jkjm998yEoEjdGW3runtSQfXEwT12eNiNjU7ys5RszFGHmXw7N4VvEuXVjYNM3JJHjuFJwPhEXFKVLWjVpbBZGP",
  "key34": "62ozLQUBb5kjB6YnvtDyybMuVoDANas3wLJutU8GEnxCmKiXp8MvWPyNiy6RG1pR24he6ZuyRRryoD4U5kuMTDb2",
  "key35": "4eBGUgX9XSFBBfVqSpP3gqU1HM8cNYeSzoTh9PjHp5YYZuPXk2CafQuWaHZ5nBYcRHTrXKa2gU6Pi6wc2sAaCvax",
  "key36": "EYrKVVijE6FPJxak1hQ7Z2q89f6ED89qvdYQLJPEzrhWtYGjhi2YLLTePN5pqN2q1pPDf1QgyRcvTnMRBJk6yLM",
  "key37": "4jPZKVKWeFM2dbaE4BtMfCKZ9ZTNeyYQJYrndeGWW6p3FZxQM45yBttcpkrGhfaTnTBsD1za9JBxaZ7abftSyfAb",
  "key38": "2j5pkHCncE3dPe2BWE2oAC5J2cDaKpFxEVrg1TXPw9dYMhkaz11jWjM4GWf2XA7xvvbfv7JPxwd1HgA9MAbnWQaP",
  "key39": "4mnKNkAY9Ph3C4eKWKYgC15vdVcswHaGCNNihAwkUNDqpC6Y1UbGEhWmuo2cZYTw78WFfVewKSUseKrDAddmjbj",
  "key40": "65XjU4AhtdivhwS8kpjdKHZG26xoQgmaoRRrTtf6ZCr2vQaesSX7JWJ52moG6DnkaaYU8EnjVxkAH74vRknd5nis",
  "key41": "5CJRGK2iAh4bd7RDpokocbFA9a3RBtBL947Jq1NSkyHSe7Tw5fzf6T1bYHC3hAyvn4MmuHnLtBY91uPuwNrSQz2E",
  "key42": "2MnVsgUFnm6VJxJjA5DKotjTTmCqogWGqXcLennwYta8dtyjudocMmG4d6PaJpi3PPhMRtDGQ2M8cdvgy1QyAJKJ",
  "key43": "546KhLydxbiXgpF1W7kDDR1VWoRVzgPqPNUNsbeYRNuPNGeDTjGzL2zGvyP3DD1s3P8F88FC2WYQv2q1DGS4eN8z",
  "key44": "wo22M2GbDFUqbQ8qJ54FR9EfYu36mdEqLHyMYQdTWZB9ogoYrZkvVMDPkxHqU5vw9BoCFtnn3LebF3wReswD4hv",
  "key45": "4hXefNGRT1o62dDKTMtKeqQqSw1TdT2pRiTQLDHchC2piUTdckRNAsT1DpyGXfr75wnTvughrwUzQ2TgKLbLwjJP",
  "key46": "4BwZT1Lx7HkA1zz8V4sH9k4kENfVA78gCh3LoiV62t7aHmYwtJ19wPsmYS8R5QeoJJyq7NxxPXsfpbikc8N4EZMv",
  "key47": "4MsuG7yNRpQKrhjSe3T1orQPMZwdsaYhSdetSBEWfBQSDu5vSknAk68n4rKGDP4ph8rEL3rnjqWX3GQK9KsS5F3V",
  "key48": "5SfJ27TZ4xfMuvmiVgeJ8sECHMx9yA41iPkNVMwPxBTk8ZhVUrcNdimNUa36z8SVungNLufgbRpUrDgjjCFLQkfK"
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
