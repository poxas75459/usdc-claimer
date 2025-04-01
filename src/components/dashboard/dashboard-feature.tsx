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
    "3e9KEknmgjLeb7iRsvRwYh4E6BzpUHLiMXEGY6jLbMMPrcv6RkXPPKBYEK99MtZPGC8nYJTv1246Me9AAFPMuZmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xGu2cFYkC43ETp2U5cJncQ6fUZHbDuTkrhyJL8s4kbkgBP2tQbEpsWR5W4p9LMHz3tWpqoJkz4pZt2SyZCvPvQQ",
  "key1": "4uGkn1EtQPJ6tK5maGPKjoxEvcVNQxHMmTdFKZMZvtExTzmwanm7Ygix7LG1QrDMpSbt8XUJKSG7gSXPPoKixgZ",
  "key2": "59VXzX9UxcPZdUtSk5gDPGrWZRBatTqoMKND8PEaoNYj1aLFJBqu2BahxVmDXdBvZbebfGx3b6xJaxDGQ4yWCtkf",
  "key3": "3zBgNGkq7m43eJBAqnBpASzh7qUnF52DkZM9Z216nH1ifAZrEXRXay1s8Q4aNZh9uQjzUjNTTksuVmXSDiJH4fdm",
  "key4": "wB1VQjQhC8dpNLfSoj8wjyBzhZopiXAXNePqr5eYL9RPeeVccMNABjAf3eWb1rWb96b8kwL243YuduGseGivQjH",
  "key5": "5MbtNHaGTMjKjTkf9YPPQ8EARkjcCcRXPjkKvj3w6idE5EcjU7sNNaYgx4eY8zNnRU9eu4ETM5yvJghTveESGxMX",
  "key6": "5tSvxAvVwmgxDAtFFc7gEDDWvjKioeVZR5WuhVxDGXiyozotLkJezA2KpK3eu4EnSH27NdWjs5ZaDahopznaN7Jm",
  "key7": "3CqyCQasL1AcPECjNdZAKQP3eVEWWPLJEkPQSGxn7vyjui5wdjPLcJjSwwiik79BPsQjg3eE96E9eV6otUExtS4e",
  "key8": "2KL272fynvdpGQ1mb34GwFBnA93b4g3226qjk63eF5bVJSmQgSeicriRi9paasAKEgebM1bHk4YfTJF68dUQv4xs",
  "key9": "5jrvr9yCV6nqbmAxz5Hmx9nyQfnp3JULT8ynwQBUMb1mLiA4BZYcLtk6Z1wAJziWnipbC94BDfXzEdDPuXV47Ycd",
  "key10": "3rzum76z4N8f6Cm3hVeTtL3VQs5CDLb7hJ8Nj2LsJH5BorkxaAHwKDytY3ZbDcwHFnBJy13RpRFHCTv7k5CTdY4Y",
  "key11": "5hvsd5bb2g5Lbi5UEU5tr12TGdW3LakSJiGQMiVHQRkgs9qJupooj7s7SbS8tL6njMpgyqYsBqRexcB9gd7SyeBh",
  "key12": "E98ABiUAoGWZskdA2KfxfgTzgLPopPvKpdYYvEieqp9BYyEbXQproUMArfrEZFa4NU1gy7SFkj4yfu71pP4r4bX",
  "key13": "4DTLesUWftocKp3MSm3H3usBXFWSkA7THywYUDXjoHt85ciNmwaHas5KM7QJXQfhVbuwRz3YuX6fmLd7yyfvNam2",
  "key14": "cZ7FQfsARdSwWTBKSFKTgfPgojbwPGTzLLkHJ18GhFtfmfJ9i8JLhLqT1RNs8czLbHagpAgmt4mSTf1hyNiZz9J",
  "key15": "nooaBxQySm8PNXjhvQnuaijMwC6dtyxomFePiwjXCeDzpHLo7Vqh8vteuHCnAzNseJbpuzAXuw5bydJnuZYgSi3",
  "key16": "2Qg2bTpfkKU2WzAHf5dBf1L2jCvTDZZU3M4G6PxYk4CU19uRdF5439j7ovAGNa49W2GPgUDetrWc8x4XKywnTvew",
  "key17": "2WM43PiFYG3q8XWMG2MFH4ErLNCjwuwXpv1nohRWMrh1pgWFBw1tAU7pMGF8fcQFmNdwEkZBXybrncaDZX2gjiSf",
  "key18": "3mjDpFVp5F82yvUBBgarUQPkVPA7cfz3etGGTTbnWHtefKzq7Pvz6KoMdGsdkwwNH2A1Ji3krBZjpbxCfhv9xLNP",
  "key19": "2Fzx2uWycYtrRBMxQNM9sQwBLQCbMK2wSdGdsJvCnSZP4VPyZLjxbACuV4ozntfVSF148Nq2u2HeohytFtjkm7au",
  "key20": "5rCphs1KT1U73JCUgnwpUCoyRRuiNTSTUZvihqMK9YSEix213eMTy41D1bYW3zdGrBESBZBb8bdmGzKQYmWp7C5C",
  "key21": "5iiYJWuQGPRWA5L4mTynKGLk8gv5SwNYn6Ma4cSeg9dpzJuRWPKCZGdLLxxsPKWLMGrkVj2gNbRNK9RFTyY2V6hu",
  "key22": "5kyzmZUCRNvRTmbmGUsb4gHfRkyfU589W5XegU6utJEoqSZVxKHAVZewWzxpDLTd2eYY8ueRWMiVn58xmfZ4xxm2",
  "key23": "35j9JySjA5V7QKFQnw8ShSdihnk7Uq1t7yqYLakJ1Su4oP6N5Xmu1AwEKZA8hd1S4Fdt18CyAXsTacTCt4mo3sWC",
  "key24": "55hEnJCB3Qf6517qFxmyXBmpQZbaXUJ453jWwAwGonqm8nD5EYxK3VtVN6Ekib13NznGZR81Tt5L6TeEYhTxmDZw",
  "key25": "3VXSuU7ixmU2DyzW7a8cqAqfDGxDG84WEbuzkFqLvxUqJVLAwWa6WFLAK6W21QA4qE2ohf3qcvReb3NF8CKMxfVb",
  "key26": "2nTHcYXjv4TQcQVTUdo3azWtHjg4h2bjAwmQHXDLBpSkhfPDMfQzdYQhzAf5ZEujBiqAZXSYwVXCHDpjfEW2hCMD",
  "key27": "4AWCGdwwDPyxGivDEeLBDZ8E2Ng87Mwx3DLdxR5G5riLLsNeyS3STybQGEUbyyLCMd3AaVxASqcA81f1cKF7Kmzn",
  "key28": "juQJGH8MYj49b5e1UBLhNw3tXeF3nLr3B3xLrFXF8Kjsb88vrHm5V83DkykpLbZGcRc3GfsXK1jesH2dvX7VMp3",
  "key29": "22t7Y8ra5o2oPL4rrbamdNSkMRNm4Pyv3uKiZcxyQXgcUJXfPstfio1DgEvjZ1VDKPmDHpHmezrdik2rK97PjqSU",
  "key30": "5US7stSwXo4dAN6G3qJYFqZEoqddb1EVCQEznmJfkQ95KxKzndGJUu8gF6Hu1UoGaGxXU96fVSWgp3LCtbwnxqJB",
  "key31": "4JULUpAPu5AA9QwP83J6ZensC823K77W9uRPCCTQWf3tTS6Exb2GbUsp3b9tGxwFjQN7Foudkr9TnKsJVfbqDJyD",
  "key32": "48vPyN1vd7T69gNYwZR5TUiYcwavEA1V7fvkMX8oL6HdprVrdafq8raNCpuqJvCEURFziUTMBMaMLWtNLfjuFq34",
  "key33": "5tGXh28WPPYJ9BZS3LLBnaHU8Bm88P9NfRCmPTZ7VNEYUKFys1EN2TpbWbMKouDJQUF7vQbHEv9Rm7aES6c72Apd",
  "key34": "5RPJs4VuJ2rFvpMmCykLtReFDgA46xAqCtZZDx3Fw8UVXLtCRmU2shZn68zghMbyNV18h3MUYocZKgra6VT1ZQ7b",
  "key35": "45gEeuvraubAu5kPNd9sTckzAwnzccttTp1v1hhm1rH7XA4wXES1LLUt9Z9FfU3wVTS7z6JB2GmRMX7arX5hwJHA",
  "key36": "4pMFg8m2WRJg1DyTv82yzBiCaCFh7zhJAVdvDRPEBRAXXhUsbsQmXYXXvRokUKAAQhnf8H7HcbsHiuM7abSb2rQK",
  "key37": "8s31ohy5jxfsDWb9Nmzb8spY9z3X8xK6ZHyG4gzen6dSzAe5BNTdSkQomWhavxebcUddPNpqW8XkbCrJmSaFZwo",
  "key38": "5RkLJscKPSAyQEUQhaSSfvsP785zd8ZeEEczR2KxabdWL4ZUYnhvWS4zo2b9Wtp17FMyucjcp71wtnQ9AMKhgGBH",
  "key39": "4ortLwDENrvtokr9bN2erRDrUXn343VMardop9suXi4uqjTtw9rZEjMEATtvCymg2Pfa8A64gCzo7E84JmXtZusJ",
  "key40": "638AdHSjJaED6zKQWiFALcnjvbS3PqEN3icBzUem5nCnWfp6YJzgs1FAcEm31sqPjfP91QNfsNudRSYjm22z9cqJ",
  "key41": "Y3Unauoi6WRvgxn18v3mBoLpaoEBS9MjGxQexsLzcNHyXZuEtEQDGisaFP9DCvwxwtsJ1LU3q28hkz9u8yqAiki",
  "key42": "3k9X6BdWANsPVafTTqRqV78tGjSknUSvL3jV9GJdbV4meWvmpBuCFPG881MVey3VQELoFLTRANoUVdwccytxRwbR",
  "key43": "32S1b6WbGwSFT6xjv3yrvkjUSgHGmYfUomdTZ4fdWhg5d8ZrVmaRCWNFxDQrMqxVY6q9qN8zzsJACHkoL6mCeYsh",
  "key44": "2acJHsJ6cSpjiJoq4enVykTLdWk4PbVsodyu6eU5vaGATe3Dx3Q3y2q3cqnh9sjaNT2iawX638wcgzE8RgaK1HAX",
  "key45": "62Dm79eF7DGyt5WG4FaUDD4nuufRfWuPa5ZwZVPwwU6zYAdhacnhtLkEE7SeYWjBoiRBE5MsHqh7xui2bRHmdTFv",
  "key46": "2GTeE6D6fijJTm7N5huMgp4Fo3b1NeQeZyKhFtyqjjHW1GTH4Qt6FNv1mvE31PvXxCtdMitqXcF6NzMbpYNXg5s3",
  "key47": "3CgmMzSCuqLrC7UoYWdDL4LaPuTKpHTuysq5b2UAiEpLpYJvgFVxo4Yk14g7JSxmXye4t92XdpP9uhG4gkgWuFKG"
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
