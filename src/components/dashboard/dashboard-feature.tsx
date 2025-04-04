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
    "52Q4omdb6wY9Pzkw7N2rTtQeD57MywiscRBJmPewh61LsRBkp24Sr32rvm3WXec9k7QGjZXSqVBbgsSTCaKFRqBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A7pZXnMFqLbsLU94taJNEYaeCGy8HDrpExNjhfrzez9Z1giMJkA7YQ87qyz2Hbgg187UfQmLNUBjQht3fUgsXSW",
  "key1": "5WZjMrUkQpxBkX54x8X2xYVn1Z2T3epDow1C7TXCekHKCcnuBUdSsVt25LfbG5tD2vLkBzucjUA5drTkEtma616Y",
  "key2": "2efJSHNjZst3tS3D2MzRCQ467jS7CDvwizCUSsJvYLszdSToGm5WMyHbWMvwTMPydWejY7h93B4fFx5tZ1E8dkCb",
  "key3": "cSs8xFov69vuLejFmoKwdHcHjb3B1JnZXiLg8F4eWTgPvGRxHGW7yCyPLwzsUK2LkvzAbhPW2yrsLdzjmcmNUPy",
  "key4": "2qhcGSgVhTC4RsG7CrLCBg7VfkGoGu1QeNFR81hqEBdAXfwbkAPmGZxY9NQrPZPCMxrv49E6R46pfZ32ZR13Usud",
  "key5": "4JwMUdKQvesPQQLqQMdC2jENPL3qD4i3aTL3PFKB8suM3pUyE9CF5YBKeyxWHDWQfSWU97ckHkcRMBgx9jDMxpyx",
  "key6": "4wa411aoQ5a2DKGno2RYUso6U1jwz7ARLw1dRg54przPP17SjXqozspVPBxsjTQgj1F9K4V38t2nZtEMJkZN8Zm2",
  "key7": "5gm9DvnvXACwF9UAbMfKLUY8FgWotRP3vtteB2owRkeBwBWTHiv5uaH37fq3j9kK5VgfwbpKspPFizTB3CE51bTC",
  "key8": "3xRYHtewDoak8mut5xVYMFeEvvJWCrvmu1BpQ7ooQhpXGCMBWKY7VQzCC9BNVLWa8gj7stLPphkwTJkPWHA5YMEw",
  "key9": "3Dyxdq7tHS2kXqZcMEnfhceLXyvZoQ8Boe8F8rKJ1DEQDeywP9xYqd6hZ4o6uU9zn71LnQLTyBYn4mpatnz53UhX",
  "key10": "3DhAoogB8wvjGqstZ6yjCAbAgCHJT3E8ELUDStCvpWmMvNWKMqjQvqqPgbVFSKkLfJNftGBqjtgpwVeLmwwG9vED",
  "key11": "ytV7nRJPx8uT6bPt6k59AVCfs26W9CA92qH1jb4KoSJfxWhV3xAr27dSZbfcrkmp4u8vZCwiyr9DiACHTyZKHFT",
  "key12": "5MDWyuM9BkvEQD6tZHoMyocT2NiXm1jGfbXD7ZR83BE1vYpTR2BKZTxtYP9Bihatcw49stnB89NzHs2MwrRxFbCb",
  "key13": "FzrXovbCJaooKfy3j3tUhX8bHiGfkAqvF3QpmGhVZUsqLAXukWi1j7FngQTENbi5XgoYwkwds62aLnLW849zHaL",
  "key14": "3Ss6uwxKiFUTVTFmF853zvDWAbjiiQsRbKQtxboWHK2uyMQzeXAxC6s31FTVtUxQSuq5Cthr3gm111t1iPZLwrNE",
  "key15": "4hq3Jj2gFiv1bCyLjMbrMCqF4cVodLr2ndSgPs9L4oNQKkFTi5HD8U8ezJ9U5Z7kmzkf9mcov7ghX6rFVFszxeMs",
  "key16": "3WJHfXZFdcYLDYKCUbnsCnNLt7GrMqZqtkYMNzC7kLt83LinHfQdYAVN4R5RaCxgqy7x8G7eWttqfyZRrN3AC7yj",
  "key17": "4LuSNG43xGjNXg9L9wHqGL7sCsSKaf6J6YHoh49uH6dvyMmwR4HFXCNkVTw2357SDtR31rBQx9FUzGqKZbKmm8V",
  "key18": "4VnxdMuBv5ieozMgLBtm1A4Vo2ogfnnQ22tZuvqgKXMSuPtmZ4dRMj4CvcUshAuXpRgPqDbwVPHcPB8e4fTKRVSA",
  "key19": "gvghPyKDgjzB3avPmW3chaGXmzbS9fqoQ5SoDNP8EeUamJSvnhkdRMcX5iYWsPSywUrboHanFeDVxizYsSz8qLs",
  "key20": "4KUNmFN98EiaPgC6uegVziEcukPxcKhC8MTMd8v1KUZMSauZf46hXcJ5Zysc9eHuv6zkmJTTGVq1CrHooGyuCmdg",
  "key21": "KM2SccrWx1SPeboKShHrpbN2XBCq8RxS74oda7gXoZP4ov6Kb1P55bA1EsTXDodXUSsYfGmRrWdj4zHMZA8yFV2",
  "key22": "5iNymfdxapWhBzYUE4hi4B5QAxRLDXQyoiYjM3hSW42FdT7UbUaZTzedWK5WAyuczbp9MFnMw4DBWA7oo124R43r",
  "key23": "61p2Uy6AAWkDiHQFDYSnnvejo8TjmX438D6PnE3iPJsJsxfvVm1JxL98RCRpcZp8L6MjK1JCYU48e7aicoXkRxvE",
  "key24": "5dLgJTAfUy2Mpv2fohArqEhnyaHdpk3ymJH2VEwgN2so8ST219L5Ji885gycMKPPiPB3VACU4V3oCHi82ubnxTZV",
  "key25": "t5FYDECub6nquZNTSufxpPDkPAEJdk2EmmkkLAZLSepLoMHYEACDqj62imRMaLxvEqikDMcGtAt47E4iVfs9MoF",
  "key26": "2sPnC6DZAm4jX3UfrN3onfR6SuM7zWAQAEire5aywsoDjgnTCw4vqvSM6Mb9b7PhGhcH7QVNmQfL1vhCxSGtBoTw",
  "key27": "PGXN6DiebUtXcrpmnvHvJ5CUFAZrzHu2gtE86dwLYfkZgogWmv8i1hqf5kZ1jTFZcfTXePTm92jqaENkbMQJaiQ",
  "key28": "PwBFfm4RkkEE6rfP8ARuoBRdiyaDXfZuv44JrdF6UZbmRE3wW69ofAJDYYgYrcZVKUyrUArFJw5cir5B6pF1SNn",
  "key29": "pNE8UinYBymzftZ25C4GvUwUCeaKrugX8fsxr98sVV3Ug8d6wTKimxCrw9VqSmGxS5W8dZRR52SCjCqkN6W4LLP",
  "key30": "33TgCmRdZz5CPWohEc6JqrCdXNNvpgJDDxP8PUQmAgvsp8NHWVkmbAnDQsbT93yqN3XpJJfc5j1szDBMqjyE3DCd",
  "key31": "3Zn2RJ1NssB2gEHXCcREuSec79dDenZTY1aKNihe6PrFmxG6xKwvvYC8wU85BtPrZgxjmBfwem8wdnA5PaT5wd9p",
  "key32": "3iqdzPCrAuDncQdfe6r5GphgyStiALA3vDTE3HKqX4yWcrWZCGq5M2gmTnFKYHFvgMUjZ4baStmouEHSSsauq5vm",
  "key33": "26fobSRBh9f734KAthhrfG9E7RBW9wHMo8LRBSSULDyriTFLW4UeJSDT4TcrHB89JjdXfPf7to3oVgWXPXwFHXre",
  "key34": "321P7TmYzjaTd8A78MaDHsjzyk8HTvMVAVVGMMxJwcVkDE4MeWS48QaoTUAMZ2PDoAmcdH317XJ7yquS3za5j4wi",
  "key35": "4kj5BVSFstwqoZgneBzbeGSW5BesG2XPLDgjZnfND9UWyeLdstcPgbgeqXc2HYmJHxT2MBZiiFiDreYpf2v7g25S",
  "key36": "hWiStPK6xTYAtFsmDTBqmqYBUojXRYThtEnd3r1qGnbfd4cmZAtz1wkPH22ftUNngAWijXmAp2qE7FkFwWSNnKr"
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
