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
    "4ox22hb7Vgw2sjyyDWBUMv14sNGPWN5eRVVBTqPohCXbHLWxy382DZbf6mcYYBC1dGcSe8heiFGFEGdHxjtaCxGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gcb8raj2VParQdozhpBiEF8aRCEauY8eHigM27CRJpH9weHGa8X6s5BbXSd21bGUmNf36GM441P29UEzkK5cu5e",
  "key1": "2KH3HbJms2d3YiypDLYV2ZFP4tyAvpR5oeRXFhZ1QRDLyzxLoXqtnR7gpKYStQ5da1kcTUycXHe6WmY5AxKnLXYw",
  "key2": "mvz722aPwwdmRyaYE63KxRuy3CiMLew8EFuv2F1nfYyzFho2pdxp8aFgyNpHrXKW6nEARvDfEd91SsQuqCs6pHb",
  "key3": "3gk6LpwkWrGJyiCZen2yCZumyRU1Ruz7Mnn7PvDPE1W4XvrST7GrFLysTf6V3rZ6oA9fBVEHLFFzp6ssRkZRkxgL",
  "key4": "FcKhjdZdpB5bFCoRSrnvzmcCG8hKuuWTUmn7K5gjiLUa84ojBPDNTmHVbJ6RvV6Ku4xZrfsR17aQBPm1XZsNAeS",
  "key5": "2e42Rw9WWnnBjrFgLWgvsYSL2HHPCdWSZ4pjV1pL2dugC5nX7RSSso3nogWkbWpvWEnXZupBEPVsw4HWaHUa54Pt",
  "key6": "5RjhEAVuyvQqJdWSQNcYVB1v8pTdczjFpybwipnunmdszaVP7v9X7cLGzk7QAyM2hfGHaEUDxjQmzF8QP811P7EF",
  "key7": "25emmNxE8ky84XHVKLEyYtceHtu8sY2mhhxb1Hwg5GnMAtsYDXF6W8AejDUcYU4d99PAN4Pbf5dkkvDGu9SQBcxW",
  "key8": "5VogHCRM3GrriGH7xwmE3F4RbSiBBGJNnD4orroLpUBDPJphbT3UP9ReFf6t69vZJuZhbhnwwj1hYQ4Su1m5ddmL",
  "key9": "rRSbiWPGo1abNkC6BsLFZwVabMeuUuEuvwjdp4T8rv4dnWoqGVDsjmgUd86cdSxeuCqW5gL6DNHRNCJPmaLyFrv",
  "key10": "4jMvpfYWuAqFkyQ1Yo4v7JPniD75HTN5UYvQC7oUrBPMe5kc3GAUQsYBu7rzfcrmHvHRdiHLhFt6pntC2kzm6HFr",
  "key11": "4SxiBB7nuzxx4cjiCHTpNb3A9h9hoxkMGjrpkXg46tsxuGn2iwMTakfopcVwkFQ37PYbKfTEi2iXbFy5qttj64LR",
  "key12": "2WbHQFW5vG2fkTJFXatTRRW68HAnHdiso1Be6aS9DWdX4K9TDpkYumP1xFA3wAjs5gqT99pWSuZ5WEq4UZA13566",
  "key13": "31FY4ptiJyZU9KfZNDJBLpL6EKAtJf61gPDsyDRhEXUtXdBNkN148fDW4V5ogeKbbAQisQP4Tm1W7XF5ASQ8bFw3",
  "key14": "3QLLwGz1mEuWia5mAxJ3a6TrTYMhDvdFz567uJrtsGsSN2WHqF252JHMp3wKCRQbN8PYjNBARLTFiGHUgxo6st8w",
  "key15": "4AhNyURJSLGxrY85VE5s7vbuRgkhjcjNEiHZEj66YqEvGN7GE1DzF7SHUPrXLDYXPHh1SZZWU1BmoNE64RRnVjqq",
  "key16": "VSASHUNQiujiShomUQr5ksRqRDcGPLhGf9kACN6GmoNWGT2HCbrXi6RCtWJkqWafKfkh2WaV1bBgQGc7iLsvjhM",
  "key17": "3P5XFacMrBVbPyKR3AdvGvCW39sLUVK3nmA1oD1BycZM2NHAvvFzmegu5yaDzWEkJ6Dc8WPiVMkgY3DeUeHMvVbV",
  "key18": "2PGzGHCFkLMxz93YBck93bx6FC1bACGNLoXkDnxM8QbJ2yryTfQf3Rq2enRqpjqTAvv9jroDVjxCzDvqon3i77Jx",
  "key19": "62FoH8sQuEybXp8J1hwwgWmTyhPLgKNy8wgYCJme7yVxYeEuE6y9in92VojhTNfLoubsThpA6LmYtJV51w5jtKQK",
  "key20": "4SnQXcp3xHPwDnJku48GPf8QqpphbGY15YncGBxk8tbeVEu92j29Z74wo2XkB98J1xv6ipha5dt6yyAkjHk555pB",
  "key21": "4C1LfRpJNyDYgkuC19oPyGAnoxC5PnXZcxe4uN5DYunQAWqDMtUW2VXmfKTpXph5iq1H6khWxLNdMncoFyiqC1RX",
  "key22": "3PtfL6Fy6s9HNgJ6eQYdamXKuqE6XF1Tmr2h6QL84m5BGEuJbMFtjQRZUyrriSCoPHaX7CcpDgEZw8nABFoNs6VG",
  "key23": "mYazTwAWMBkwG1Pjk1Vku6GhbuomJrvfC3rqyZGG1W2YAtfLTBqNbJ6wAWda4cgfN88wLsb2ZR58gmcp612c5t5",
  "key24": "2Qcj7bFHm3mGNuAyib6TKrTLhMBc4HntQ2v7UVWbMhTuYuHu7AyuDPC6QrmKuSbsdDcZ4ZZRJPLqK7Fu19PhtGHA",
  "key25": "5RN1w59FvJjzUwrW1LXuBkbtELov9FBUUNzxwgEQ6mtUKR3i9tAGqnYvLv2FFvB4LYhXUCj8Kon6JafRH78tnad1",
  "key26": "4nhNLH6EtsWbJAswNs5rkGucf8Fp9tcy4LCfhppAZ5WsPmMEPHJMqqEVi4VU2GZNeWEiCkcX7w46SnakBNv7Pt6H",
  "key27": "5dkUcYacmsMduCuheKspg9FyLABceuQncGHEr5Vagz6dHAcUhqbTTRE9nYzebSM8oZYoSYo5LU4ZC1VoeNk1Ur2x",
  "key28": "5wjq1sL7GwCm1Abbu9hVHpTB9rqxKtghaP2PorNnNdBC7BPAui93MPczYPkyuCVQJ58XXVQE7NQGTNQsbXqPiec7",
  "key29": "61fNsdM9HfYc12Bvzi7SQYqgfnvi27gaqJcre3QdmKsUZzE5VBifX3eKNdowgxjMmS2cXCyZdFrCzLjQhhz3oxHd",
  "key30": "e6pWwKLTiWG5igC4fXW7ywTyqda1Ety3HWVuECGyr1gkTS5Y3xeV5ysHUKTXpX75SxvJ6ABbvCzrg1bpXyrSTfd",
  "key31": "3M3mi5diP22SspP48fBRUpmaBEGccXSNxv34T9poDoiK7Ak8ea3BF9APvFgM7HQU4djDD6DwuR8kBQ7bZiWrDzKt",
  "key32": "3dgcM7NSRaQuN7oCQ525EhAwTogN7YMTqHmcaRJNB7oPwZZdtHZS5mmet3eSGtdHqNBhHfvb6SLNfc8tZ96JwCui",
  "key33": "3G21GnEVnCNyyohYWPqPZRyet8MEQudviXS21pCdYB3w4gEZsVhmkQN6w5LyfnmCy1mgBhUNos6TwccLJX3zXa8W",
  "key34": "4gZ6nanXAno6u7LHjtpn4FF4LtCtkF9M9h7e3vcAdW8NjZjhLYyXw2LnBRsWyb43Y1GLLcNRHQVnYFgn1vA7Vx6W",
  "key35": "23AMWeNAijMQJGmzdm63HYMFh9Lp95M1aJeJMmaV9faXPmso2Yiekwor33b47wvugJYerXMNJqmLvyu7WPCow2oc",
  "key36": "iWiYX9iwNp4t28JtLfSpauHSRgP6mLqnhmCarAsPYT3jGh5sZEZjhQDgnUGbs9mjRpbH9ydXxu2xCNRFQfBSNa4",
  "key37": "41CCawGb82QXSKdFrczSN1mA5sAkrp8sCpR39NMrLcbK3WjhoGT79umzGUrCULGJvvHJMVvEtrmLC2FjQdHMCwXQ",
  "key38": "5obEKUP71zammzBhD3L7aHt53AS8ZLWe8Jhdj4aD4BxaEf41yKFGmsDye3xVsxKCaAuhAWDxppXFGyE7pbxmV9id",
  "key39": "23sEy2zdX292cRuEfiyGWthJoEgkixaqvTF34H8v5XW9PWqJ1ZCrGkwtv2woghwbnXvygwsuYUyxP94mLHS51B2K",
  "key40": "5YpBwCj25cEKLmTK4j4p31hQzg3MPDYsfyFp5ZbBodMxYHGysqYYJqfqxiGD1NG577wUman7WD922h8FcBnb3awB",
  "key41": "28zSwfaNER9pWPCMEoE3UDkL4AJHMhdoMneuyNbAM2HutTaVyLA1KDYq6PWYcL7FRDkKADK454t5rnTB728ATnJq",
  "key42": "WiPpZww5Vnzu1TUVRqdYYi35zGV64vSkVqpjANkzLRsEPeXzdtvacPZK3bB6JQJdUcTmLAyQLmtWyBcDVVfQdAi",
  "key43": "3HKFpUQDNdwoeB8fcTpi2jGxfmaUHQ4v4JLH5WAinME5XA75wdrWGQY6xzyvQJKr4qw1cJNPRQV3KXcPdRk3BcMu",
  "key44": "5gSRSyyc5rfghi4miAVi743fPYi8xpffbY8nSbxwekjhu8CvveszQYzMfuh7pgMTMBo1EqE2SvLVFChc2zqTWx8d"
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
