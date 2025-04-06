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
    "2ZdfbohSx6tbM1VrEA5XzRM3ZZR2TNhh61hSE2YQVnFWUZdomrJkKWeaWwrQBTBDeTAruWdPY87GZuxBPNMNmDkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a7ZXimKCcVt6FtmZz9RXpb261UeYWtW81Z8m8Y7eL59wgtj1KPtYUuDjigyALkty5co6PEDR1aBgySmWcXxpd6A",
  "key1": "2xPr1DgfEZFH6xSFKgyo15SiDvNv5rLGq6hE2vQMkiLYh7BQUkEUJjt1p8v6KqSLKXMPTEgMpH3ueU9haDUUWEm9",
  "key2": "bXi64y9CuCyGy2zkLYVrGbiwwf9AUeriArLa89jcPi1JATsWZBxibH1D1Q3jp1Pj982brEd3VVXjUM1FoPW7haB",
  "key3": "2yNK4j7sNaaN4xHa35j3ota51ZtGFNKQc7R9q93QWdNBVeXxzBH2X8tJypVFfHKTKEwH8tWQitHnbUZKETVumpLm",
  "key4": "5cwbbpdjimye6CmVJxwdATBkXfdDzPmBwcf3K2m3XnJSN2YLNpmXEQfKZsA6dwAYtJybAC3cnD3fom79pXgH5Qsz",
  "key5": "4HBFqbn5gWZuM8DgM1L7ef5W2kUZcVTSej8LmTLbkVmnuAAA1DRcweUyhtWshk2YYim5m13WRubvERt1T3thmDEP",
  "key6": "3aLBvqSNnJ8NzaY1wRXZCmZm2HTUGLTE2HfdVPghTaGu8iPWXcnD4LBAkZfP8QcNmP5vfF5MWq5KAM8TBPfYJ5HR",
  "key7": "4FmgYjRRFaqUaHGij1Ph3JNjVxxWGSCGLHcD6NDnN4bp1b6fZd6gNSfuzxy7Xoj96z2Vy3ggzhfcY8mAeE4GuTok",
  "key8": "8DJxPJQKte5hTnJ2o9rG7uwETnh6FgZYHX7ohZYWXiMZFVLQEdkFezoM7mzfrczwcGM2tez6W6vhxS9aLsoJ5yN",
  "key9": "MeuuW3sycMsDN1AnPvWC3FyC9bFAdVaCakC4yQ3o6aPUX2qEUuRTiPFuxjgEHPhqYqdadXQEto3ZWcoopdCiva5",
  "key10": "CYFBaHFK4ZiZiGuXaPM5XCXEzNnD2igQw5L6UvgbKzjwULtJYikEdUxpu9HBc7BbRQ1JJRVRYpfdkHAmtHuAhXF",
  "key11": "5h1ktTZLNRnqR6atqD37HEepg8E4j51Va6quFw2r4nSeNUU1PRgFtVcPneA3TEfRMmKYA1uSTtL32ykc44AvwgtA",
  "key12": "5ZNYjJJapdd3Mq1VyyPgh2ZUQ6WRMrjgj29ExMou37cxHoYEzfUKMZ9Sb7jw9pMYZMnWnVLM7e1iZBeMTfWYXvka",
  "key13": "35nLNfJo4ENWx3scUhHX9tXzD5bNXcA2KwNyBaQF14ASiHCW9PA24EC7y7uDPLVuromxLWqxTZxJWfYVKiEW12sG",
  "key14": "4vcYUQ98aEW57QpC3S9bSBRos785LceyMbELpp6goh2csvbAKyhcNNrF46t1j9vTNJqmNjCFFWbqQuLRESVCf2WQ",
  "key15": "2Usp1gKhsEz2JyyRTwm4R2QVRzwqWtUTjsnvydWSvCXqXXE6a4MP3qcDUf8fDM6xsgzPPzpcjTUkvkNVzJRdYuAe",
  "key16": "28ijVdNJTBZVouutLERpYY6bXLWoGEeoEUxJmB8J9VgDiZZ8LBobrSV8ej33tUPVRxddy4KMagbBxZ2Z19xmwAE8",
  "key17": "5hd3t7QECXt2Jawyvk8rQ7fEiuppxqyAjL5GSSe8xPWudH4sDcnJ3X4npmq7abbCK8HtzKfHiQkD6RtmzBTYh6tj",
  "key18": "3rSdsopVS9cUUzv8pyVg8qNSdJ1V2QwUNjkSoC6mNU1zjNU3pdBTnV2MTR79avPC1SyaYba3JXb6Y1j7vhjNEikx",
  "key19": "3nNhj54vJp5Pf5kgzbVXQd3yz64yNMrX3W4XfTbLsj1hsSvdBE5Uk57dBe5QLKxpgZrVd9ASCA3V2oTtAP9RV9FU",
  "key20": "4sq4aK42tZakmTCBGQL5gPbd89m19WZm3droRc9CxzV6oNJxoVqiNAcbt6WJZPWBLuwVTd6TbRiXZpHYR3XSecdT",
  "key21": "jZ8i9sFt5m9AHWxHa3m7wX6Q4Y82eyxVPhSi8jAjnYNtNzy3ebbLXguttCiYHSJmRPT3srXCGpN1Xq8QdNNY3p8",
  "key22": "4EREM5viigjgwAwZkLZtkcAQ2XJtwmmo79qigt43PjQfarcbx7mebNSHZ8pqQMPzDQVxhE1iCRkPcfFuPgLF3max",
  "key23": "23zDh5oowEfGU3osGMNvunzRzeyeWUQv277UqwFPwBU2LS8QmXn1o5ygEjs4sKukHuCpoPvThkxNjVbKSdMYkw3r",
  "key24": "3WYtmQP2znhr5cAJtvniUuynCdkZyvgg9UcTFkuk2XUvsx7qPuHFM3apr85qWeHcTzjiJm839MpNpSZb7Ab8iBC",
  "key25": "3quyohSG6QCWAadGyzVAH225upHXuAaKYhvSVH9atwcR1BQtJRBsM9G3Gy1s8srDdNJ2HTRfGe4WMZo82HGeErEn",
  "key26": "53zny2Vdxw34WheWZxDKpDbi68QfascSALpnTZHvTZ8bH9m2F9ahXxkEMEbBZ2UwnyYUfP25oFG6JuiyLbiBP11X",
  "key27": "3VCN35jN4M5JxpbctKiJkkmuaErHcmYBMz1gi8VyAFs2KDdrBKjWVgDgpDk94Kyq2MXgoUd5mioioWxsF13CxZL1",
  "key28": "2FWBEMZRVXF62RL2moF5pJJZeAJEZPePSrEKGAuTrzPMyURXQgieFt99sCLj459Srb7U7rxncpJR7DVTgnnBzTmG",
  "key29": "51h66ti3SS9Mvv7tH6hkMHdabTFA2k3BUogzs33X1qELdeRG77Bsd5EFp8czj1iD2HJDBw71BqZB5wLAPcgE8QTn",
  "key30": "36t2JhbzNNjEcBqzPx9SGMpGNX7RUPSdbmJwaev7iZjFubPUGXE44Heg1x98Q69cP98Pm3Cj3nV6WGvuBsB1Mdt8",
  "key31": "4ATwhPHACT2zAmsEJb7pfH4MwA7CDwbvPhLr4aG4dZgqfARS2Q1jwXZ2wpjGWtwpWK6p3RV8X9Ka1aGDSW2eaQTK",
  "key32": "38ybwtf1xEyiUFwe3NWKTtCCpnHnEDGoB242HfhqGDbGjfKw1zEKeUBWbjUTkmQQoecqaNR1NKxsHfugt8J9DE7E",
  "key33": "23mT3wjmjeX8yDmnfX26ARtJ7JvmBqRBSAhJRA2WYvi5XhBb7ohXJmUxuQW95nkqtseD7sT68mADuGdf6gsPABLg",
  "key34": "518FuzRLJHa4cd4UNJehFvFWFB2uQZXoZGDvRjbHjnT66R2xZ59CxvxEXbXHnVer825xZ2iSC74f5EPDAMXjJN36",
  "key35": "4JFQoqE9ZeqpVMvqx9pFD71XdLuDWut6c5sLTA7FodvLB3MVSbu4vy1CKEi8iKLvC7rUfnJ7SgV3wrPd7nQXnXw6",
  "key36": "4FmwVr9YASiBw2GepkRFREHeXFiCu8XdRzxdTZPyqNN1PE1xgnLo58sZydDNJkCRUpgRqdit2ttrDxdyeXaQPLh6",
  "key37": "4ovehcrcrb5xpDCPafbtpZEfUgSA8dqWvrBxaMWhWeCtX5nrY31tawZt57KMG2Yx2iijKrMj6GyE33Zf8ib1yuMp",
  "key38": "21xA32pFS1mpXBxfTLtSfKwCxh7uRLWJDfvHbJiZimpQdfy5Rs4iyNxj6SGf8mBPcP5BFQxDp1pPsSkFvLEc3gxF",
  "key39": "5kWvxYpcf71atwVXXdeRC5MhCZevUvZ13eeLSfHaSJpVvPNDUTbkTRnwBUWGA9ngFutcpeYihLDfidBuRDda6T4s",
  "key40": "27dKj7AEGqqfTB6EDde8YFWFNXTFCH2cdiwJBrC3fAQPoQZ3vMr5AmEFaSaZzR8NeNxcNQJQoF3KxzFwGMC37wQg",
  "key41": "Q3pdbkmddv5b3kChEuxn2uaFHhzmz5P3mnKmP4zMDv8jXfyBwzgeJXKD3W7RLXJXyXjZ3q1GCrMcdtpT58RFuAF",
  "key42": "3siLTZVmYhfPRiGC3C7D1Gfsxc4ehcWCWBaStKoLU1WX2XDaUwcgXAP1RYm62KiVSdQ8ia5SHRGrRxWJfUB1vqxS",
  "key43": "4sswciw3eARHUHk957ZXdVHnjsEGhzXMpY9vCKQuWCQU7jpNuBvYWSe5yBe8zFUxsYAVRBLz6WSdRrV8FYW3ZLs5"
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
