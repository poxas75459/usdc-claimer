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
    "5g1q51YS7jVC5S3UVNK8ZBNUMqjReKniohKq4cBV6rkyF8toWPWfxDynoYeaLr8sxm6geJLiE7aiVRH1ZbWgLiHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MWkxzNe8fwy6dnBZHd7PxDRjXsjBR4UJ5EjVJndM2tWPizvoWJNVitsTZuDsCpGedt3YBwbXwwUzjzFEMZMWyrq",
  "key1": "2tcptLdB5TgaJDn5ewtMHz4scvo5UtJ9MW9Yi6xPrq6ExKnxQRv6hoSx16NU8U7nvvSuMkA7nPV7wcNFEdqjLCrc",
  "key2": "51odsA981QijpfLkeszNEGiBfs2udutTTrpErs8JCa35kyXTY1qeNK5Gji1yRYEtHXBgw1sFxkgZrXff8pLq58VW",
  "key3": "4tXBRBB8V1AdeqEdR1b6WLQfbg1piGAycGV9zr6f7tuaAUk67d1sZhfvbhoB5BpnDMFaw274KjMmDMG1zqmKmrg2",
  "key4": "Qc1v1y6NmfidodrpcN6uHQH5MJZeoRCMGhkF56ZV5xKJxvMyww5vqSGVoCri6BD2exK69KYHJDuR2usWGskygpv",
  "key5": "5yZZ64kGTxRcBpK8gH4fMD3aC2yrUm8HhmT1ZJdhi5ryL8Lp7Y3k1ZDBB4bqxJL6CCSDpWJy4gfC9iysDbtgyUFh",
  "key6": "84iQZb6Cm6EczEhMQHqWRwnvjyXqLkgycN6Z7NJikCnsjmquG7ZDKCm3VzSh2QxsJSoKRfoxmf6RkAjDReNxzmr",
  "key7": "5MpEbpG1NXLAaeQhLSKoJx5rTiXtwTkYVvcbbfRTCucitoWX32LXcDJfjqVbDojGyt3WuhBd6o4JFnQgxVr7Q86o",
  "key8": "5iHhDXjsHsMQMA2DUADhidhwFNQBnuoqYaxMTNgQDT57umwGeRqNRqExFhfUUmKoh4ShdPwRJzehiw6uV2LYEaH9",
  "key9": "2WwX5E9qtDgVdqU2kpYERWBcKRLFSUvX7YTybr9bj8LNGbuWDUKtjQJ5fZdrazLf2ENDqj2yD8hrQJLUQYJBPr57",
  "key10": "3EA8XYQgoCrdpmy7LJfb9Rga2cMyNnkiDALHoyAuNDcGriM1xN4ERC6GTWaivp3Zpi39yeWU4NtQp73PpybFPpPV",
  "key11": "5DDkhSoXFmisHUsuau1K9vbj9b98fN5pRfaRuEz2Zdcs9qSPbUVNRAwQfgpbdJmfHMhzr3ABAYze96gbJazNcmKt",
  "key12": "2h8Shit8dhfJHAKao1F4xU4K5SrNPHV3Z7wdJD6hBYe9G8pNcLQkvjq1A2riN67r4yzCTDejKDQXJDM3LsjkH6fV",
  "key13": "3bmGL541yYHrPghSJK9gF1B9wLdERoDehqChBvLc2i92cWBu71zZmkLfyDikwaeXhb1SqvYob2n4x1Sr8sBZVEcd",
  "key14": "4gor87bcBPaZsqsF4aWZmxWbpXeNEjwWkEFPyy5a4E71FY9SbuZQHkhiaTyocNYxtkf6VRZSBGDz9nWVPD6bSd9C",
  "key15": "3UpyFsZgrRn4d7TMge6UiSJ9zAUEs3hvoxzdqcbcJhTkYNPCKxdBjTdCLCzij1hkpLsCh8fhVhdqaHakpX3cMB6R",
  "key16": "4Q5AiFVpDs5FN9hy8RzmZJbfcMHJV6eEG6KAuGbroQCdg8P5eUi9iDvd8Rut8b4oR6V7t6DzHkQyqiN3tTBUz1Hp",
  "key17": "mVBYw4vgwE9Rh4LriQXfFgYC4vsYAWoaEBK81c6zv2dKn69zcvHxfeqK1af1k8qLouVXTt8K9EM5m4xKeNzsPfE",
  "key18": "5AKb6AzLdTYsxFSjqEvawoFWigSZ555DzG3e4cFLdmSzQCvNStxp99uduE19jD9qbF5y1uEQmmxgYycScPmrBkU6",
  "key19": "FUrKENvsqEoFZsEL8SvzFJEVnRpXaTETaGbxgBJfmshk6zk7Tc1xx9Ecdai37NXr6strKB6BMD4PzStVZuNZXRe",
  "key20": "4fHKvhBxedQw5G2t5Gbxizu1b2HnCmC6BbnBbW7bUy2UZ2vEsuFzn5WRh5R8E1j7GnhNq4JxrjGqtcqkHeYXMYop",
  "key21": "5zeUgTeavk82gMXigTWok3aGrozJ7AivpeyT76mtyuW52s8C7pjRR1TC7UZsa35258vhvXLjsu6d9MknUJsCyg12",
  "key22": "4cvfMQxjkexkwZAPXvGE8ZYt6Xg5FdWPTRkMhMn8VxW7Dbsr3vNkikCD4iNVNqvh5UuTUyKU9c9S3Afe1iWuGh4h",
  "key23": "3Qax4UuSkFtyrWAW58igtsAehR9U8F1QJjyMQhhnRJ2oNQ56Ggv1dDEMHzPUTCP275ifK6aGG2WaLtuw4q8McG2f",
  "key24": "5KRLrfzddb5zgQ7QzJbioVKLw9iQAr6Zztqb2Qd9WDzwhntSKovgqrY8dWH8zJDUeDPPbgqu2jA73UjKTLi4ZiXV",
  "key25": "2iC1C2vqWCYFeddtM6EknV7dPQbYQAJH4EK265ZfL6yhSYitg4UVYRs4C2oMuEan3aY9KYRRdgi2MvnY1KQbYMMy",
  "key26": "4r4SZvajwNcEUQmJ1RscfmGHxqv4SuhCmZtq2JFFQHEbARNkJbAfu4scHUZ4PkSsjSYCGs8kT4VZFZTMYX4SUb6b",
  "key27": "5AzZ5oofSmtxVac9AkbnN77e6tKxhL8zoBU6agm1xvUctMWX63ACb9JV7hKBjRa1qspMQkfrPrxdnChsoavbNe1P",
  "key28": "5tz4awvFpfK5FSCXzZW4ZMNTAEWLDFGUvXBajWpzLCEF168SSiRHSTBKtK8qpj5g1FmsWfYQFM6ywGPUx8vJvPAn",
  "key29": "5yRRJcsS5AwDdRAH5EqGpQJUtCQYWhqu2quC4oxgtp4CT9amPjvLXyeD3x87cFJTh1qDAHhkWtfcTWGfMzNhgnFo",
  "key30": "5yrXwKpAaXEaikeysg1TA94VumX1JPX55ZaQWL5ER82EBhEmTyArZun3bLGaqgcqTC3fYYF1s9Ud6N7bEL9BdDm7",
  "key31": "2iViPyChMSMnVTr7ihUpJG4kaAvVHY6Yma6wbxccVDZ97N8mxbNoPfJ82wqvhvCSvRDc3mZciF9okKTwXc36BRJc",
  "key32": "5RkWpV9QmAnBJBtgKCEy69CR1jRDm8eqqCVQpwHAQ6N3Bjr8Xvdpk9hqEs48ocsPFPHUztfMJHEgseohyo3TMnBo",
  "key33": "4K4Tq8CcUj8uRGgxw89KCt1MEeSChpjdGjuMgwwxfponjjJB9SRhYm3P2KYAk85y1vWadVRx7dwTv3466xxQwWj2",
  "key34": "4mGoU16jhttnSTJop3Q5zHm15VFC2XQd4RuRrhVzoeRoFMEmZuptoPCFLqdMraSzgGPLfCzET5TD9ngU1tGovFZc",
  "key35": "4fAd8iL67GYBVN991ZP6hoPUXR44mzAYpkAcHkYMyZBn3Xb2ENttfzxdCTHtHmM88Zg1K2bqDywxe9td1Kvu9wcx",
  "key36": "2VQUdBfggWig2pwXEiJmo436M9EfP5jXX3Z9hqBNrPLagtHVw6cfkRVg3QHjRBoivrpEZkybf7GvYvyH56ZGGhRD",
  "key37": "4CceLnRzmx3JjQkFSXK8KTwk2yHmcBxLaX7kzdZAbCf3NiKnEt7kJin9aRfNBbL462NBV5C81TMVBc5wrLxjhCXa",
  "key38": "3mg37aKPnJR1dcBQrVRDVbBMcm4W1Z7DRkzTssSRixpYcNDRmmJqgFVcWD6YWn6wa3piSs6AivVhFac1siysubhN",
  "key39": "3eKYHQ5Xm1yp2ATtHuBPg4dQBfLNgFPBKfGAaTHNToRXEuDovGPTH7qn8z3oBhKiHMZFJx5ekCXt8zwRgrpKxHXE",
  "key40": "5EMc2WjWCZVPoPncKh8WTCpr9k4JDmcztZZaL88Mnq8r13AMJKuK5GbEWLSmdNCBPQAX2UvivxmL1azdgwdTEdct",
  "key41": "4hwCG9goW2pg357BBNcJj4eYCNDp6Yqcsg9SkLBKdGZ3o7gxgY78AhC37Y3RE7rT5wqkWhjU36j5Ba8NydYEyngF",
  "key42": "qX61BMr5oLznwCt3z3FGccAcvFD5iL8k42jSM94qo8r7FxfnNh9pqKDgHCgAR4LXyv7GYG7vurZHv5b2eckD6FY"
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
