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
    "T9w12EvRGZH1oC7x2b6LxRaNbzJU4TekVMn21JEgM3osd4fiMKgk54zwpkxBPTEmMpdiDhEHTVB7thoMi4tvhnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SVRSTkxSuEa6hyrHkajfj1TYLsEp8wL1yoZpvdXcZSmrTgkEMdgpP9eY294y2hgpDcz1oExhvhuEfvXQwcAc7kM",
  "key1": "2uJdapxZsvqyyYJfthWX8dCFZD7hjhwwNPKfhYvYuBGHxRD8HfWwfSXrCWNCxvsPXzvYUi441CFHUnL2yvTxmsxo",
  "key2": "udCBcqG1JUebkFYdZS4BQWm7Y3CXjVuHqrD7ye3AAm5RFfX4h9eDkoqZuwCFn67fTsBrLMUXbu79EcuGbuDdYzG",
  "key3": "4s8BciC22SBrxixciojSxNuijg6skvQEVmha6keghR84LASzKt9YNfTX25dgKNXuBL76JHYjgghkD82Panmson3T",
  "key4": "36TZMtwiLG19T8p1cRUQCwP6Vzh1aW2aHtiVsM2Um7HJBt2Xw6vSPc6wZhnTcUV4benXKzATwMq4w7ajigLtfJ7Y",
  "key5": "4bgKrk9fh2q6hSurFCpVv5LLKMxetYC9psnDhdtstnL4UdnW4rsbrHR6MPzMBirEogytevnkAHhSkTzu6Sc2522E",
  "key6": "4z7uhMVJRLETY3nxG3Tmw7S4PwEvr1yTba8az7MjoWTRyfXHXZeeFGKhxH262jbwRQyq7C6hGyi1e6P4bVtiKDfE",
  "key7": "4JMD9J2BZUSByWKJuj7YFWmDTN4wQDWX1MfxDBD4EMzAmWNf6n6VqspzLeY5JQDS2ue6E793GhFq4F5zvPNgcnCQ",
  "key8": "wTiSpViyVWEnyDF3r52YamBPDb8Um4ngGumw8T6FF2DpK4M4bNWSnGZkP29JGssmoHnWWdsfVXVxY2Gm5uKzZDd",
  "key9": "4g2uT9HYJ1riWHymtsRv6BYRtAjVufdNvV9qCFpEnuyVSD3JAe3qNFLEvRHpkxSF1SaPsqtkFSmKcJooCvzqUrN7",
  "key10": "3jLYgR9EheNxRct9Vu5J2ScWRDXsPScyJxGjwPojCquH6iwidHrDY5wdusoM8Y9JYTyz9V7oyoFyptTV5aGtk7tG",
  "key11": "2gu4tR8FkXsxLpLsg59cJPq7rDFyr8XE7ffmGCFvGAq4H4m171mqMV48vQo4YXtGnYazcBXowu63GaQKD3HS5X1F",
  "key12": "5ddaJDBSY7BgaJCczCyx4iEEfQ8PKzuCFmkEpUFFjn6W6sSPSmYkgaPJBn3zfV5bEj8hgmPH1RfmJigstxH4V9Zw",
  "key13": "21UCws3piAoHFcszZPfMaxZrgsTkCNS3GHvt9Taa1676cfyU4LcPrGGBS2r6aX1iSBMEzG8G55bfBJHN4qut5VBi",
  "key14": "33yD9efoGds6WQ5ahgudmdwcim78yCAsDxhuYh7yMwzXwx9AEqWHsmWWsQi3NKY9tHNX9JVuh1YhYKpwfLVKvHsL",
  "key15": "5vmpMx2xjryXzXiCX7JcbCBCr3zWrC26iRPnPqvjjZbSX98ZyxD8TA6eYMhYoyREH5SsD2oy9cUtPU3aoKKrTUFE",
  "key16": "3dTLs6SWgtyfqd4amvtbAq2EHG14SKnhScLFFUb9VzVABPafgxfbfkwqhZG4pSiNMsH7dVc9Ah21ktvPUa1iJAHW",
  "key17": "mpVQ1sBq7TitDeHNgx3ApSEGerkQMaeAJXyd3bwE3NYXPGBfi2S1k5seJSxW2yauQdRDPor6tBYmwpiHAmYzRcV",
  "key18": "54jrcyjRdWj68gFtKt3tbbqSmgRobJNtosf6o2Ug93XiSvSMo2sVV1KBYQYFiAvcCPHszmXBVMespcJNeeE1Pk59",
  "key19": "32z5B4boUkjB4fXKS49PdAJUsmxKRQUzWv2VEWuYr2NGSLgpe7kuU3JzQBsmQ29dcbGyainqSNcfWALiz39NsUYr",
  "key20": "mQ5JMdQyuAHcrRBhvSqRYgwaN8b9inT3co3YCtetpaVb8U2fC7CoKDLry3hrGCkrcVV4pwbQfR1f13cgfmVZaxQ",
  "key21": "51V5YutJz66mKAMJtDD7UWKLtfgpUgyBsNpTwumyuHLSwPXhfyAu3xv9eKwXg2K93RYgMPyw8vU2utNzw9BEGBLB",
  "key22": "3QQLVgNc7xVgd9PZaKvPEqz53weJGC4ymmFqDrwGCDqWQ18JQKA6VXbYqrCK2GdJs7T7uWmuwAqh1LkhUibuDJ4Y",
  "key23": "42DYHvz3EUaRrMLyokQ4JDTHCidmGfD3cVtfjYKBv59Mazhiv5rFtUK3i2uFd7MqzfKp7Yf9ycK4ovH5Rp4gSFrR",
  "key24": "4uvDeFd5m213Tf9GDAGj9cdhWUYUQyujvb5Sm8VZbMyZjsCuB6DQTikhfkTkPuUmLyyCGsKdZEjAk8HU2N9kRej2",
  "key25": "64A3SAECwv7zQSFrMGM31sQ9kDhzP4xZ6wkqzgPa5EKs8TYzM9qZabFnQGkyXtev5DJbwSbY645w4rHCB4Jk1mAs",
  "key26": "5xAktLP58Mtyyec4Jhi28y3YXVwAJ6cvqrRWyWB6xBbyMre61UtgoQ6gb8fzqZHovBi3ATF56hYq6E2oWp9wu4Xa",
  "key27": "38rJs11GsEn4MXzTxT3GXzuuHMZ7RAVbFPyjMxJbf3x4Ds5GYRwJJNBUc5ZXqAqJdReiD2g3EvEs7TjsizzufNjx",
  "key28": "2fkMuSF92LUJnzTdSnPDfBcJLfPmUA1uwMwTrWdWv2jFF7X2Fj8m85oiXMyNEaeNMBAUcYA3MLN3wahxDYAma6xt",
  "key29": "5VscUEkLo3P1RbCQqANPDyQFKAKxgBrxJ15XaxF8vPbGEhvy1Ruk8S2VAtEAhR8p2yrVhZLePErSJHMGsN5FzUjA",
  "key30": "421d2nn7TXjCX41rCErgg2jt4YHfWKLzSgm63w3apseLYsdCoP7Ns4VHPMkf6yF5hruFmPsBUHNBbreUvJ32V5FY",
  "key31": "5qmkVSXLD6cf18tDGD1H1tpkhwrA4tsty11YcxCbJK4SkpamuJNFQ9UeB7tAL9Q9t4dgoVmLACAoxE75KTpnW3zf",
  "key32": "2yMiDSFpdwMZUdkkigDVNiMJNSsTNmbzEKrPwzpzB4YUd5HwU62GNbAoyYC56ns6WFGTug6JXu1gXPjxgzLvXfQD"
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
