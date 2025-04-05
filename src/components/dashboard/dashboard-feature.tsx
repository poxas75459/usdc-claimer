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
    "GsESVe4WADododn2NPzhj3gEBKXdfoomuSUEqMRAW81fXBpCWh2k1BRETEutea617yqaAWJVjQXrPpDNetDgCGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41q555VEkri1uKksdqCcEsDQ1WRHobA28XPtdUrNSYUon7pPt9LTmSJ5HccJBJKaZHLUddMJGR4JF581CNA1GeLy",
  "key1": "4wyyfjif6qPaF218LsNVe2mR8CwUQtTWoq6oAVi37Z3eGmVU5WbaABPsWxiF95nk7k2Nv72SGfveLoRg1P5hMX3o",
  "key2": "2DK1dkkbBnuaB9oLgfS5UQrwsVvr2BGADn4tkd18FhuQw6DdwUiaBPCh2Rske5WzmaKqTJ9xUugHmv5VWDjeVsE9",
  "key3": "36gYYVqwox5LTAHThB8aMB85ovB9xxKQNfYWWVvw2ns5Tw3721ASkAKEHegEo5MfHfqk8Gc9LwAQ3ANt27bWcLSq",
  "key4": "4fbvTPEEmVuQBWuY15rRn5aHpexjxxJE7G4uRGgT3WhnDkjcTx3WP3grFbp2djMna567UP4CqJiUXfg2udUYVED1",
  "key5": "3zMHmLnSibkLypXdG1FBkxMTgsANjcdrVnxVx3pRmass5YD8NTjpkX1eUgRPgjRt7T5T8aFz1FVQsXsfTfb8TnA1",
  "key6": "i1223H6Frke9Xdeehp2GVB5NqxfzuHcPYLtWJycoUtLCYBEVHGX8YPhYN6XW7riuUsqabBVnmtwdh6RsZLns8FT",
  "key7": "6154bkFzxiGj3NVDAiEbnVSXpHNHkSR9VK3kFrNocqzwwts7xRMz6FZjvRZu7Q7W7PysJxDvichJ4nDrzp3VptPQ",
  "key8": "2JRANs8EBR8XBNtKkHDGApCLJr3oYfXd2cDzFMYKyH6diTfReobgpcj5SmXnx1SifqCLeruZ8pMXjosHavFU1eGS",
  "key9": "ex19C8KZq33W7dXtqEHDCtT8SXGniYF3q8BAvN73FtYvnhaYdCqU4mxn8Ghq9bUtpJqFzhwq5ASaY2ByPGVgkEB",
  "key10": "3zABmaXzfbiusM4nbGsGFfFqFNf9gR9YpjYUbQBuzmd1paqZRAPtQi18kKe5T2YTR9eYZFV6WuXqZwCPM2cxbdP7",
  "key11": "3PthGEi8kUZi7xSNB1Vc3AcJHUHsXeL5DcocNSdYQNDdCWnvcavTpZsQkNEtXAyCV6ibhrjG3Mf4tVxJVfVLEbEB",
  "key12": "396dAkXmSsWkhEhEf2bud9my5tKfcjrwD63srk2Khmr3wnZVjzM9wTvECpTELo2JteCgPGXuKggZ1DZ7AcsvVSQZ",
  "key13": "54JV3Xfs74vR4ssR4uc36eirMKCTw3CxBRrTwmACFJfbZra5uGHqSqHVmzhfBoPZmVmXhQoHromMiZA3kwYS83nt",
  "key14": "NF2CjeXJ9Wznbfv8874C4itba8dz3ymeNULZV4sVq7R8pjAtJvCXMwMdm3q66VqWSTLe2sGuKSJKfikTSYUWFFa",
  "key15": "5mi4CtQavj8QASmZkZpCuApzMtD4oL9k9ikkbSuChC16pBe514oWGrSKZ6V7mwyQ2yeDvJT4Ha5fwYX2SC3JvPiv",
  "key16": "2yMycrmdJ26WiME6VpmyX9tdqbgZKou6D7ZbJwRSUMKvTtRY1Q4bxjvHo5i4QCeHHrMKuqB8ELpcrY3PHMsgLn9b",
  "key17": "53aRsEDCAN9fAK8AWDiaVnE4eWb6Ny3uGEj4we2nzufNWsaZbJrVgjFRsfLqar1DvC86E9pk6R2nXR4xpkuMbJPW",
  "key18": "5m1Khck3k6i1H3h4GpGBLr5i8rpdXkwHhmooDvz8WeTpzmJgLRk9ZgoMheCKkvKmKA2uA9e6iS1v1mrGrBU9wtu9",
  "key19": "3QguHvbDD6wgoJrWeYtKwcyX6RUHEiDHdcyHvK4DGxgt9yiYvenxo8suM6jHHNn3bdjLaUgBo277QWNC9bhdDbp1",
  "key20": "2Xvix916JztU87DxEt5Tymb2RMumWgYq1REShyQ69sDic6hRzTQk2LTMi3FUsbJUtE21fMC1bUkbo6wp48HqFHsK",
  "key21": "25P5JFrH5SFc7Ggwkuutjxv62SjvsHqi6PygrJeuBzBJrGWzDDyxUmb26iffK3yKizBu4ryDMACLZLxo5Coydmxs",
  "key22": "3rDrSfoPZ5Mj7nHZqvG5jcqzBFroBnxDYUPPGt5MSkqDNtmBuF1P84nLPZLaLcEo2L5pN9ZnsdRcFw6xCXKbwLR3",
  "key23": "5NAHJcWtbWKL9RYbQCVgFuqaV23JJ2dNhYBjUQ3oH79tULE23Zkn9CmWjuufw3yiZE2D9m6wFd2HUoVDfdSqeSPe",
  "key24": "oACpFwd8nTqCBNeiDZMWuuQpgGNj4HTavoz8nR993z9nEhMtV5qLYscbtpqmLmtdEmhNEWN7u5TnpddvcTmNfvY",
  "key25": "4D1A3dAFDKoLUui2tkDoWaUqwbUqc2beGjiR9zbTn5xZbwuVzZqohTBjz1LjSM2FjmCmQrVRnH8kfHstffVgxWzk",
  "key26": "5Qhj4MkUF5B38vpLBjBeQEbHWzSdQu53o367ng49QUCrip99rznNHUHT3h9ibL6VixLtVT8VtuYYnpRFJHo7vJy3",
  "key27": "44GW4nzDW9hWkt3Lu8a2o8nCYD7YBRT6p9j2kkGxHFfocCs2zBMGFLtMiTFeFQQUj6HTxm7WJN2Zcdg1oiswJaZz",
  "key28": "2CJJhBWd9T2UihPP4oDvRWiYiP45NR14cDxtMx7L5pBczPgw2279gZwSp2Gf37ABhwtP88uNqszeo72yzuA4nmmM",
  "key29": "5FVLHuQLyZpksqYF1J5htfsCCfEgUCE9Rfy1vV9ggBY56Zr2L1EXKe1EeuigWgN4VxfEqc6zkq9gy1KprVg7H5my",
  "key30": "4aKBWM5Xrwgha1tMV46Jfj7ad3T8SUNTPhdmCHLE7Q8ziu1NJeKR9xFLAoviV1h9LFrcQwu4qNJiAC1oN82uSjPN",
  "key31": "5ZKdg6DjJgYREjjK7kLDxsfgb45yLsDXqDfUQ9KgLSeja3N5wzBC6eF8HL9KKHkrku4fLV6DtWeY3LhTEWHYSdWz",
  "key32": "4HW2eMZwg8WXUX2y2Qqt1Zpc52zcQGQRWTXNea5u3U74LoMVks3Esch8UP4JbYrdtttAmRXVTS1aMfqvDcvEk3ZB",
  "key33": "4utSzookaj7UkGxdMNuA737kr8bpreYR9GStR7d1SzevMr59iYvCmVoQfBwePxpv3rSQcww2VMAVefGimUtpuaHc",
  "key34": "3tWQ6hCDSFZ1PWufxFvH6jJRd3uzghhzLTyscrYpJk1L4zvxmUBngSDgNL28siavaSU9vggVfcicpVNVyUqdy9P2",
  "key35": "tKSuswM3798hqQ2fT2B3akgRHx6G4BMyDsrwwWfmyrC4zsgsTuHXfPFCMReazLyA1jPUJ9GWSESk4mW8XUEV1fJ",
  "key36": "2couVxN54Q8TDYAEPYwSySKoN1pTnQv8HebVJyhneYkggda9khuZPwueyhzb44XQbPidNrHeuNUHy6nGi4iGBSMT",
  "key37": "2wRYtbCSwN7Yi9ts4WZB8Peb1738KBFP353WvE7CQdnto3xKPF1fWUFmrVtA7XtcL4AaiRWUVmea7TJimzcx5aSK",
  "key38": "4yhpiq38xNBV1dLqnouAnVyyCQoxstp9tLgnNGBohU6w1R2Z5wyE4myCZiKSj7oFPWasjGuVfhZWFkFeE8cTZYeD",
  "key39": "2nUmTsbDQbnYDAPRERPHP31M1Txnxozgb3gVaMhzUP28zb9F4gNmAsQyBVe8pb7JJYBnRuMQCXD21SfPrRWDiQy7",
  "key40": "4fCj3HdHqeg1iY4shAYdWDxtWDv13JTLyKUowZBrgPCGHokUhdUbZWNtDeF6E4iDeSxpw3MxAJPgcyNhHYrFyJic",
  "key41": "4r3WoSgfU5H6kVgDNhdSeuC1cq6FAGuCH6BWuscRNhyhEeN4R1w5eyvdV1mjKNxPv1SvDRUXuYxkCVJJcefKKe4t",
  "key42": "5bnVSuJFNnP7KLtG4upD3HNLcbLfaS87cdDsePfbiHjdv1vhN9pkcXBZs5qfaHp5Zo4bagz1zXwwrQyb8vhEehGV",
  "key43": "3BWEYGtJhLjtPdgxW1eWFdoAhFD9YGgGZjPRjAWSve7HQjTFAXEnnBrgS8XvvSLoXzSNvUUecz1yVaLsKt2ETgyS",
  "key44": "4v68AYS8vz89vkT1QU6Cfn6VYhGPfidnZMPAoyVD7jiGFxX5EpNNyuzZA5xx7bC7bE4DJ2ZXB7NV99qxvRuT3w2a",
  "key45": "3KCL8HeSrkMCMDyhbo4UQY39R2Gdyp3YKYokzuVYNiq3vaWd2iFqLcDmVFbkPy543eRyuYiD3vcPmVmxBsofgE4u"
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
