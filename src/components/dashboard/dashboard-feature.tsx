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
    "sGTtwZdcsh3acw8Ay74PN32R3ZWFAMm6NLhQ5wLUFyY8kTp34VP49H1GotE4StfdYPpNryEeYxQEbJ1HdsYyokd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pzTsQcNmNQneRLDNHyp3G1KxfrUbTHtsUnT75d1hA8fTU97mBAfVA6w5ifgQdzoxbs34KzPi6KS125qp8zukRtX",
  "key1": "DDkpriGBuVDRehBaNUXVRmHLcomLpvwCwSxu2GxGRBeh7mAQ4Jzmw5tviPMmxuUrgUEP58unL9RxvZ9i9UJU3NL",
  "key2": "5Z4ob7rDqxEKQBBobRGgwPaJm9VigjxsdxbfFCCjE1qCJwu1XK7Ao6UHhKqbLVGC9AkVAkpbrWmhze4i3f4cUgEZ",
  "key3": "PnS8Z11aSDzdr1eCDHBQsmHUnAxf1nK8fgjtNFhFV1N9ofAjmG15F7bESumFZAEAEN2EHFUiRQk5aZ9NiXb2j5u",
  "key4": "yAuT96Yoz8wAk9Wq9A73KDvk4sVgFivZ7twGKnxG8wuwJVkFbTR9sRxKFia8ZH9ckRE8GTDaQ2FG9ibYKF51b39",
  "key5": "3LDTpEcWuJSZBuq4Cy4LBcAR4rez1Gks91ub8ic3XXY1bucejAwAzaNS6i3gjhuHVhZD5NgRBU4zNk5nzW4cwWt4",
  "key6": "52Rv6C9HoNE5BfqdfthTch6m245JTL2zj9ns48qmQd9TpJ9dGGjcGdrnSpc1ZgeUmwMWfux9AMgFDRexVaTRFAvP",
  "key7": "41u1zUrJ8aFiaSbE3XurjeAou7fNF88nG6Js5jY7USsMPtTgBXNcNY7BQaK95ibygL9sY7rBbajRBWBXdc7xfBqs",
  "key8": "3maTijfSaSkgHpE8t8Q1YGCiM1fZUZ4tCGFqKi8oUnf9bCHGG6YAdPJqvFL78YEqQcAQ2MoGcaTssd3ZTPb1QhFE",
  "key9": "2oiyq8Q5yM2kK2ej9EHTkAAHCJrPZmGBQMT85LpJCocyX1NPh37PwSiAkmvdGKVhsTdPXn3CQk3WBDEK6buYr3cG",
  "key10": "3tBDoti82gFwu5e5vApCqrbSmLJBk4tHKrjprxT2K96CRC4XQonYXFPC19VFeNMBJR4ahnr4JaPPK8qehYksNNFk",
  "key11": "4Xj9CJnjuikpQt2twYCUkDG1o9NthXN7oxjZRUC6y4oK6HKHbhepWgHr9pTrzArzsqKC6KL3imKKZFLTMBAPBWAN",
  "key12": "3FRPm4tvnBY6RMfKZby3Pexpn1tRTs5mbdJmCXH7LiAaazkT1CZaBYVoN5zFh7AdsErWmRTmYX8DY4tFqDn3ajET",
  "key13": "34t4usTyg7aoZwDneanWCfcHh8m9bvToyh4V7QXPZeUS55RhbjsvmqkoDJfJojVy5UoZJYm3Z7cXETb3nQJEHY6L",
  "key14": "3r2dhgYLfwBFuApkzCdaa1fJqRwvjNqboT8nNs1Rs4szwqLxPfARssq8BxPxNBSddBN6aXUTFotqHTbScyGA5aQr",
  "key15": "4jTfsgGT2iAQ6mQXZvPhMhxjZ9hf7zAKYAK2SG9y5HSByzrKh4FXkj9Jtzo3bEArhbyL1fa1vNup8KqQpj7gsuxt",
  "key16": "KfKJJwNp5XH256gzGbrqxghxFJ2RwgA6hhVX8UwPXE327NFY55ThiQL1iWZcqUJo4pwUvnjneUN1GQ5RBsDR2Xf",
  "key17": "5KEojXxxEc5rCzVjcn6Rnap7Vvz9v9xrmjk5dxTyQkpGRPXwEpy9Sw4Q36DR4KdBgyFQSkJfztXhwb3uEnprRDzS",
  "key18": "5WQGjN66NNFv2LE6UR8EXC6wiX5qSrXu7wdySr6c3U763vv4gA79AwqUyac2eKLG3SBvfe9vd4qPWq5qMyDfLQHW",
  "key19": "5hxzPUuHnD5aAzxhrcouFM5WV5RkBYuzz9vzSHNVpLMFz68GvT8ixx3JF4hTFKcPRk9UktKFJFCnyQVzB5o5bG9S",
  "key20": "5aRbzcuofZbiLaq2URYW4eSjhEtEyGEu2hcSjsRCKuV4VVMKm7qMhpAnBFD1au2YwDdGsQzvcg3YntSPqZFRhznM",
  "key21": "4HQkcPEMv1zQN7Ck3qDR2Zn5Tm9MmEHnkS5xdQTCwZCgWSB8ePJj5ghjuUasW3B5e3MhMxBYs5sRTVNh1sF4qFe8",
  "key22": "E1rCwF2T5XAkcXiywuJsiHtJEfrAPQc2JuVEjBPvE18M5qjP2947UuTkagra7ZikRmV9gDCmSzJy51X4fb9nyue",
  "key23": "5BmQ69VdQ6V8uPVeS5ZEiqm9XybhstYKzQ6mKBYU45PgLKFvTe9LLCL9Bzp3f3TDMGadzb2NtireBCeEpv9wf6RT",
  "key24": "3V31wd3kzGzzE492aceWwf3e6SraVWArXMfCfDSif7dbggi568ibJtY28bXDTRCGUhzSkBtbeD92kSDwFzxWbm3f",
  "key25": "2iiVnAuSDTJNPideJAiAcu8ahcuiVi57j9UfERYuMouUnfiafewq9uH2nBhQGLPfDeDWiXg9SfH3FRHb2edCnAB2",
  "key26": "J7idbByV61L5mPvSDkpeHowSaGDQQ5gQqDpXWUZJskT74bxodFobRRr6n8YZnYfdn8cZiWxqevnK4vAA2T6idBm",
  "key27": "2azt3RHkUtEMeSBfL4UjqqZ67DB2ZdVCTzrQPTEXjdS1KJd78WyT9xjFMoMg3u7yYj6H72zNxHPZrMadqR28Y34z",
  "key28": "aRd8mjXyHZjrMYeCBtiq4n5ndTvJ5F2jBzdtxVom1p7HQRVgQfBk7RGiTtk7Nh3whDrtr2FzTNwyAm3cuHnbiUd",
  "key29": "TK2AKnRE97NgKosvWeZmF85jnhzDVZBTfqy3ui6sMfsjKTggU3MwyreYREXkJifDjx9hGCT7khFuwo4Xdap8eeR",
  "key30": "2s1Ccy3EZG5wA4FkWBFZPKVyPbqU2aYbEdw2izVMndfVVZGqaQ8bnkngyJUF5Xnp2Y46K69py3DDSbMid5gAMTud",
  "key31": "2CJnyCvyBb3iBmvueQ77Hn4NbEUy3BTkx8eeCL9JjT4xxxeqJN76oXWnVfQuuu6e7m6PUco8MFKcoqVbjfT4hHEW",
  "key32": "2JSc2JYHJBnrXV5XVeYRonpV4YAxL6MSCCz6psdqHYLLNPdACRfW4Kxvb6VfHoVcLSePWnPUSTvBfeBGtFkX57LN",
  "key33": "2bzLF6Tnx1fttR5iMvG3oFkTyKwYmdSj61ZNRxkgWPZNc7hcr2kxY7bykxaH242MxJNFdhm5UUKLFWzVGZJm8Mjd",
  "key34": "mQ6Vfxc1yU4smb4VQ6TR6kLQp13VNXCVPJsqxPxk66t7LCGrbb8hkEfzwydLbyCdgcQvYGeSPTtV8NzMYu9SQyf",
  "key35": "2Zf1etrfxWkQjUKjDy5a4xdjWjJSSREKVPcR3Ccd3CMHKWZZxLTA5Lqw9GhGe3xA8MaSqJbtVrjmr5ZMjm3dctsx",
  "key36": "fEzPfR33uYMoidZVUi6hBsEJcBR67rfrsKNqqo69rhvudtkGqAXo1GRP3SH2jjEd5zyqwC4YXPTJJd6vY3jQJt9",
  "key37": "2SeE3N5oWA481FEqa9meETiHVLMnPnAZooVjw31WthmJE9yZR395ChRH5WweCjDgAR5HyTE4zfxDLcZJTEqxZXNQ",
  "key38": "orstxTbZDfFLMNy6k12Ucpahb2LFviyuqofscPDNi6e1mH1HgSzffVtSqGihiF4fDJWxKEhfvsSNUuCmipBCVYK",
  "key39": "4BYEooWp2dv3idsWaqCE9wBoBEYxB1AdokrN97kza4z7Aovu1GiTBo2CzwbBRJKHCUvg1nxqqDFiYUfSYCg6b88d",
  "key40": "4Rjihjr2aMCmRvnQsSRRxzgQGB5dS3EECzt5WSjpPJCoexbgH7Y19rmRRJvRCh1yc67YF5DojiP96pxvPQWdpeoH"
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
