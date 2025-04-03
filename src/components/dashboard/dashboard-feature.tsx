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
    "533PLC1ufUf9v4vWZV6bgc5X21mhxE3dqSDV91vjG2mw8hrZ9rbuEoJxpgQV2ggysY9UroqMPbs4dvAyJPh5PAR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52RrfzsQM5A64tsbyZUes3sdQsDNGvmR9QppXFCDV4hanui9bz8w4aTF4JTj6uk8XUtKrjWpCrGu2MJnpXRRjnZV",
  "key1": "4HJmHQjwPFxVXtre69ihttfs8KJaXtp1MBCCrxjEDZ481AtziB4Pjb6xQaqzao1gkKiaQTmZS3BuJBoiU5FH1x1H",
  "key2": "3hGs5q3qwBwErXHU8GHHPVSewpBzJtAmC9UKw8igbZabmVzPVHsbe8RrXqVcTKxChrh2nT9MB4DPtN45ef9hh2LA",
  "key3": "53n6z62oVqB6CeW1NTzKNV7JFeeTRknq3SfSXLDtAn78gQYEuAthD41kqBjqDF9BBxHY7iFtZiJ8NQQT7FkpQU3x",
  "key4": "gHdU9BWusCySYzyuQq1MbAd14kwaxbVnKfhQFbco6iXXDBmLJYkBzREAzXzjdsNAmKGFgxYfyoRf4ePKMNhMv1d",
  "key5": "3QtAVoMB3XSEjX8BgMmthxBiQgCikJ9fpwsJXm9TBgJzYpUypy9UzJfgTpCPvH1HCbN8K3AHFNicNBSzcZRKnLXR",
  "key6": "3wEfNoPy2VZtpDVQCeQ58xiMqsS739XqiXSN9TYGC2T21UMfHNee5764ThbLvhtcu4pu9n61sYNuZwGQHXiW3xMc",
  "key7": "2brkfMFkFWKwqRfeSGi3LJBJvB7ftnERsAZms6EmWquWCLzxmpZgmnYML5Q1wqS5utUt9jL6pU8nJ3TWN3F1iRm4",
  "key8": "mR4qZJ8YvS2VihSwFUN2g2bGEdsoMQcevhi8Gg314GtMQeDejrqacBwb1fyd26Ng47rBh4AT8nFbAMWdRFB4Bag",
  "key9": "xxJDpApVovKewXWydTSkzJQtS7Vu4WdefcuvWvcWh44uPNqvvydNq9wAJreF2j84Dxz1HzZAdj9PjvwwtWdNNvb",
  "key10": "aG7xwEGw357SH7rWEiVfmCfBkqQwMf9k8hbtTeFmoivUjQ8jeK422eUZC4j4LFGsXvbrhXManv4NZR9Enwox5fU",
  "key11": "2FZCVbpHjY2HaKZ2cThWaMxpbvLYKfBnJ4bQGaWufj8oXmUPRCdcRHeZA36yYXi8EEoKPXoGPYVc3CQPjP7SEhUy",
  "key12": "5mh4vfE8hkrMbrkGokVeQKE3eyYJ7chvQJnrzLSgrbsEHXDjHXfy6gJQnikVimrN3qva3xsDH5D7XkCHCK5pCUXM",
  "key13": "5RZ1Qm8Y6ig7aitc2e3ZNyJ3L1R3capy23sr65NGdBo1FGXp6FxyUZi12AemDo8Qpqihow8m3dd8zrp6y738ncf9",
  "key14": "5vkvJVnTVSKjc5EMRDMHRCsnWrup2HE5Jt7Z5qex6rk2ccCGuWRNLRWMkGF89DXKZ8cKfA8hdBGtZSAbMhVJDt2F",
  "key15": "4L72y8N5aWBu2GE1XcQbdTKm39Zj6ix9HKLRB5EUMLBcq2VkdHmJSwW17cajgfYLB4jo6NUFShRGZbYepfegYk6r",
  "key16": "4jk86iaB7oVM7EuUU6sf5DaKDpymXgExvhv7SyHNmJXfgR6JgCxw1wR19nLG6Kts1eg1Tz53xHDhg58PriFVd23t",
  "key17": "3cDzipmaxNfiGzDt5nVFdvkgdPSf95kTGVBjtG8DGshHUe7qHipcLrr4RKTUiujVYgdDijCbHDobHTFepThKKoDG",
  "key18": "5i4AuXUkpnE1fDi9wMqFwWb8wJKWAv6s6MdAVszubG7chh8ssZGVzgUppvupmdVwBudbB2gWcxs9PQPQYmRzU3us",
  "key19": "32LZTnGoLyrgStNQh1UnhEEqXHB8wM39a5sVaM8TdtXmyoCb1bkDTu9ZEKkKpTcWj6LBpLDwrYiw1eCWRzgwVdqS",
  "key20": "5KueBYRFMbf8hyuzxQgoRscPao2KJpn1DdCA6MUpboRTfFfJEtJemGPwJULHafYHEobeejThcoNrHmJNiKnbA5qh",
  "key21": "2LbAdSmtv4Ex4VuPQxDwXPvpaaA8UCk7FTSgzTX83CehrjoaeyWGBR9Sq6DGypPmtVmgC1t1DEVhL5nKhGzU6Trp",
  "key22": "29gw5gsaYA3bDQgqgdbVWfLMNvm64sHHLtfk1b6CZKYLjgmhVjsyj6ZDUJsLwkCribN2eSdXaMvYaA2EuNbCp1UC",
  "key23": "64VazRapdkbcZmmW5WZ9S39NZt56q1C5PAMy88xmiHGSL1w2Jm75LyCbTGopYSzVEDirSaRiBXWmhQq9vk7CA5U2",
  "key24": "5NcagvmZWxAnKnTrmBHYRhJ6tEsXpzj5PqvUY8yNExFV7GSotkfXxvB869nUj5NMxordZQY6BxgCrYFYRdu26NUs",
  "key25": "4y5CamF1kxgyk6HxCXFnKMZGPMCZjczf1Fz5DxAFaLyKPuL6wegv4qcgD4yYt793wwYiQBGNzSdB5jbhdUkM8rs7",
  "key26": "3N4zuDTDqErZqCrpjGZjngZVwqevUJTueHThngaC1uPBFUujEXRQQAFS2jiKW7NaJeAA33V3B6SUr88cQZNh4RRe",
  "key27": "4Av4njuvGQFBY4J8hQVmSw2NkhvQ3ijFBrRmySgp3UqTCrLhnNVPxAt25JxseYTG4LmuaeWTDNUVXYd2WoichqTz",
  "key28": "3E21QnHC1YtgSJ32sUHm6cmRFQXexgpnsSk3s4W7oeYTRCyCZNw6DzaJGRtwiCuRAXdLCvdJ2CPeYGQf7wGX2vou",
  "key29": "3wAMGzatHMQ3gTMELcpMboDjyEXNfxHt1SrVfXznCDgjs6jhCbbbgJN9tWoR5wR65abmiNAnxpcyErFdZ2dnKyUJ",
  "key30": "2xGY2R7mgPNAxxvCVMwPhK6CbN4p5eUooMhkkZ8cQEHiim6o1kBEEogJSrM7wEkxNoNWHJNdWDFVX8fMNXFDGBGX",
  "key31": "2XW9GtNtCiuDL2KVD4sjNKJRUCXscqw3VGL5ob9WWPhgr1pAANE7M56NZL8GjbwrL3LSSPitWqLPEcDiK8CJMJmH",
  "key32": "4CJCyM52zJqziuWnkxdGpStxY7aQ5jzctqYhq8am6rCaq6aF8o6ToAxDJscwkCSosKT5Y9oLWagPaJJ6pLXebZVc",
  "key33": "4GdJbyzU5snsoFWcQQmDptdKUys83BSy29gadkm3jpMcRm8sQNVVKT1HEfbsQ6ZKsNMqPoVJafDehi5uiyNw6mFq",
  "key34": "3Mdja8aPxRLDcaBV33Xsk2KosyaeVZtFMA2XqtVbmU7vWLN4zvDf6VDgHWBqHt2AzbNQD3hNFCyVcXhUzFr2Riju",
  "key35": "LYT7vgdxaPc63bz8HqwPM1USUYB5D7pF2AHdAL89SZZzx854MC59bkMpTtvwnfx8xkijpgS1HceSfoXSXbYxwH9"
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
