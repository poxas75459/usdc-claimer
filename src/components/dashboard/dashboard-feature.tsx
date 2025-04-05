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
    "4hPgseD9fAi8XnBkHQAY4bD25jCkhP2WbngzVt5Gj5JK12iQcErHuJwwptzreHwT7VfvZGFgsdBu1TjYY7Uf9yBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M6xrwUSDYVamtsXB9JU8K4YBy86n3Qd3Zxc4BZ2vGCn7UXp8vp795he9zQHwpqejaGUr4HJU4iZrzbqxALT4eBT",
  "key1": "5J31dpRPxHN1b4NhGBfxWBc2yiqPh5fpPSCPANUytGeswp71q45KfqfvoHSe568es36gqhN3qw5mr9VzzMqkRkDY",
  "key2": "2QYZXSEByYHBEhVW6bGNR2cQeitcRiwmbWc4r3Ay6x3fHYquQTmg85eVA3YKzJuSsNtbfMcK7ijKB1bFo5FDUwGY",
  "key3": "4xQ7HbNnPwRRQgXbMzZNMaCQZDowwjs3yMkmvtF5GeK1q8fbnpd98Cs5mHLWrWbPRq85MTPBL9XYFnPTpg2zDcwQ",
  "key4": "4nfxyjWzfEAYwcSyuSriWhkDwvzWdy6sdRcnnacimKvwRoeD3CXHEYMkR6zbRbEwA4WtVzLqC749EMLCUdkPXGpz",
  "key5": "3gHzdzUBqnyFae9KB7YafdwzHCd61uhUrNsKBCnc3FeMKhQEzkrjNSdmNb5rM5KoRjiDXF5KhiTxtEn3nrTj6FQ5",
  "key6": "3rL3LYE69tZz1LrGbQHntJydqLqyoQcAKkUc2kpfo4o5eAiy56HdfTchbfy9zKtZ2LP7h92rSNry3MZoMFRcgv5",
  "key7": "4JzNt9HsAm37LQeTTqVgYvX2EJqo8TnMMLdFTSNeKBzGWaKPwyDDfwGSSotGdYGB3xa15wZ4GXoH4yidU51k1PvX",
  "key8": "4PtfBaxaMHhiR6WbC414k4TU3FxgsY4dAoXqLGJ8Pr8zCwCKdX9LpwHYnG6LxzcxwCFu11qCNzDVuqUT4fc5FMGi",
  "key9": "D4ZvJeRD4aFCH7CrPJsogviXVz5sPHFq8CABzGtve2d8SRwUVHWXSEdZ86SusCv58QUWWFzwjU5ZE8uXRXYhjeC",
  "key10": "3ssoEMGdYGuiUYHuTpGFfiVcms5DRF1o2sE8o5Se6r8RCSzxeVpCsWc2MZRJAorFEAbinxsKdQFQNNbCxLjcQ4V1",
  "key11": "FCD8iYqGLzFX1bAEJFNXQH7vVwBPGJ2Aco2uHQuczcBQVoyZaomXAFSRZUYykSru6fuLP9shJpj1sK7yqgJ7HU7",
  "key12": "HqAbQRsafaky5MB5WFnA87KbLejpRDLCz2gtnq6YqnZvbeBLGvsUoLniTUox3ZxWX69YC5ty13s1eTWeeWb7LhR",
  "key13": "5j5xwhvmRUMQnxMYfuyv7vkCPYEC2PG9WtsY75gVwLun3e5kqezFnrtSPVDGSMq8JJ3FXk79LkVi5h6Wydh9FLhC",
  "key14": "5UzAYBn2G3Xpv8NnkzUs2jF9G5TCr74g8Vfagdqyvxq8ZzYZfGB6cpgoQzJV7S29xWud4A9SL3sArPKzJbVLDVwg",
  "key15": "dZHksGZnKN6mn2ssV3SgZK6s6gXo2egMZJ27ivz4jrbwM9BJYVZDikXDv9snwzDced6ynPinxttGMmpwhHdLNMM",
  "key16": "2v8b1hxepxwhgM6vkNTEb4czannbz3tLF28yhRSYMDPkBSPHNFP28xiaBa1778ewxv1Jh3qxQHuSYRWDgvSrBz31",
  "key17": "LQyq9QLVAnEmoVAmZ9d38iEgEYE5zAAFcYC4tUiR6XFgxYGb9FZZrtTxQhZxTXYiMRUqg8SsVbqnUJyQRs9EMc7",
  "key18": "usjjjSmMDHjwg37tMsmJHGUhxdoN4oA8A2KnfSs7yJ5oMMGTKpUYQrNu2yBrktXDyyAso1bwYY1tiw3Nopncxwx",
  "key19": "3UQ6jEb2YxEntoMsLTWUNs5kWA8WGr2vQ6gGDKoSTTFEWgSt5WRrDqRA4t7gQrUzU16ZuxMAQqb5VfsNBoz9JYrK",
  "key20": "5RmwHc9qhU9JVxbiUA8YaU1JpyzJTfVQqgr2hTnd5RpimpWWbviuAcue5MC2kPUFCcWsNTL8xYoqzK9w1CuPvd4r",
  "key21": "e3xToMsiTAsrHALsAeYxLfdEjSDCve1FiJGn1CdBWdT5Fx5oDoUtocD3dfDvJC3F6doc9ppUPLUxM9ZJwb2FsHV",
  "key22": "36ExkgHWduBWwdFGh9Qwsc3z2J5oEDD2EK4TLYmpNCcWhY8EU3eYXUdpLsadEeL3LNFzFjTLmnZXp3TMAsE8e4G3",
  "key23": "A4VbebFdmEwTjiSNLQ1Qc5jiPA54cRZC1jQkPE254RBLPk3KQC44yx7vEGNtL5j81J5chgxhaXVvdTWLJSkmwnZ",
  "key24": "XgezNhm8torD5rwUbo1EiCXs5jBbwM4kodCjQ1qFCiXgxWehgoxQtRyTp1NURwht9uxssJXdwDEML92zSRRxAYs",
  "key25": "4xuWSATGHzQc4sm2Stdni7E79tJLxHJUetKRUPSQ4UVsiqK3LbN5Pv4XJD8pZAAE7rKVEnCXHNgwfgrRbcjXB691",
  "key26": "4MhE35VKiLUCife8jfkwBQsq25NyVoNYbkiXVndo4DhRDQGHCiNPc4zKPc9MFqN3K1Y6ecHVhRp4fjqxLRg91UJG",
  "key27": "25sbKGbqZL83vNqHANDmV3TwuCAdwaRb77qY7ZZ9LqFyJmyNa2NDNoM3zVJNpu3SxCfwCg2WjBbPgksEi1QeV8ET",
  "key28": "3HFBMmY986jaCFy3FcgBXq9bciK9VevfYdQohGGiGLDdQh6GmVZgkHhXpyJ9wEoR5LeLfSffbi8S4ZUkzUQA67jc",
  "key29": "2RKkvh8qq9ifo4wMdebviUSTNouhZFX77QYXa3mMrMYDxuAcyXU8zKTrGu4LWyWhY17Ym8XRGtr6isnvorRpmZv8",
  "key30": "2BmiFhnEZmicegCHF7h7xch7EjMZpdkEp5gdv2aHx1U2fefwKFD6jn2JMDxQunu6ikedUdihzX2xvBmUwqfyDoSW",
  "key31": "3SvJBo59f8jMJ1ZAiSbZqrqwNoF3De889hfkZFVn4W5NNos9Ddr7CqUiuv7fXELJjQXADWSAWqL5boehkNLwcmaw",
  "key32": "2J2EGE4z2QSxqRsXXFtKSsUJBeTSZZRwogSEUnTgpepGhwiMdbAc8BCk2qYKprVAAzvAPFm7Aixb7x3T5QieGikK",
  "key33": "2zEmRLGY7HJQfci73RT8G9kXuyUnQUwNuDDWSfonR6n1TmD7Mj3dWawfujefS7Wcz42Z69p7dAvtcTFWXin7gLYQ",
  "key34": "4SnJWwz1AUYZsS7wX3dhDkUwYbeXXR7yBp2FuwmXDzxqezgZbWR57dheALcG42dWtngYegGpENTeP9rLrr5j6sDj",
  "key35": "5cx9LBo9gomJeFhkScmTzTW2dYNNoKL63X9VoX8rPQ9MtFYAzqwzZhFAVSXLi4LwgkqAzUxPP5GkUTVTqBufHph2",
  "key36": "4FQcX4gwui6A6irgtYCh3NoTZBusgL47bLBoeMzSRpsozYhdbz7PkvQTMoTK3nLzBxZVQn1mCFKNdrnfqLUhTwo5",
  "key37": "5esUHQPk3zQZxF5K3Ky6okpV7H6qByy5yp5TjSypEG8f37hVup4Pey1Hbhq6scP2ihGj2eNTi9GU77FWnrmu4EkR",
  "key38": "5fgH2asdENXE4zCWptqXeBCvBRqJULx1aKzNHZE7y4UFnXwW2tshpVqd8ow9S8ouogJek1VnFAvutnVJSNUqG3Td",
  "key39": "MnSb9Miejh6h9PN6FMmfdFvq4mZPDofYf6nwmo1nevULDT4gQFerPxg8X4m9fEt9qbMUJkckqgXDEoFBSuUMJU3",
  "key40": "2UyaBTTMZDP1zxgRxXEfmr8TGmdti8vGVDLJREzyRh7efMRzMjrdZJEJFWUDFoXECNaUT6Xriy6msnCdcR851iz2",
  "key41": "4r19wnbmC8yAn15oxJAWbxcdjGeSzF9TEJLr96TMefpGoywqGUhuM3GMv3jJdt5ffXVyq6VSjQ6KyhuAh8H1KHUk",
  "key42": "1ZyDnLCM4U1EwTmsq4tS4o2Kdr5UkCA8qdMgR4BcwioSLF6XRMv5rRVS18jn2FpuNSVjQ85KgoA97CRw5X6Ktpn",
  "key43": "5JkHKXG6CVbjNZGqZjomzPfvkX2PnojQ7xiovzXGUAKG4bdjGsDaVaBGn1tCWQ1GkGMWtd8pxSqDhLQYbADWzZwe"
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
