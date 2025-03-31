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
    "5NgAcjkhjbh4Z3eF9JAZjseUCnVEMk3yN5wPBMyV11dpjLjEgjQkk2n4JzATdPRRjjs2QwNK33qXsNZACmT6UW3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YoJMLNhQr9RaAtemfBh9Ftzaf3tt2zvYWeQQpZrSk4tpswBv9D2nbKjxrg76jNBbX1gPo7gdGGMvBuZEodtUtXM",
  "key1": "3iTS6g6s2Z8E3gZz7qkLu5T9LwjQbNTevTtYq1qCTt1yswv5c4zhDVqUcECfLUXGWgHehWDAf26264sMzReKhecS",
  "key2": "4TSChoebbV3jgdJiPAiJFLEUVf2KzviPGAXANxGDn9o9JsifPvMzHSMDuHR1SjAqn27Ec9HWn8ayva4x5V6BHyjA",
  "key3": "2tmjyCkGVmw4qc7zatqquh1bdtds3qofAwDcRbsb9vjNJY65y51KzBaUb6rfsZgn8TXtL3DCLtSjLhRaYZqdAS2Z",
  "key4": "4PGSeMy7osAqvqBndydZTpermLZ8s4umnzEVQ67tKDcbZkpfMc8tTbAid8y2QEWiPssV2xMZj3bnYh6bfpAgdAQv",
  "key5": "LZUNhq7FhrYFEHVDd7qhE8YtEehs6tj4X4XY6qVuNiP5GUVcYYHThsBThFomFrxQevKFwfQqx9NSJ3ZTuxJjkeT",
  "key6": "4KxW6BRyzMSU9aBiSqTVATSRNq89p9qms3xeh4ra593wgvqe65S3N5fwfXuxCeCpg6nHD79EJXLs4PyCLGwd5ciY",
  "key7": "46z84KqBqtf6hBVoH459qWFfkD1R9XK1aMJKTzrRTWtqt1zwQMs4zYkbYegEPZiccPdeDK5EJv3sbaHt3fu9TfQV",
  "key8": "2g2YxxbbXabeGwnfihBn5sHcsKwNnY8zALQGjs81PaPaf8LRdgK3gtzELAf5XfUyghQy5ygwAqch76Cp2Y8WFtMh",
  "key9": "5sLbT1zycyxysgxZ8DAdqYx5UXzvaMhjXGzNaprrSydeJQRH3npVBVQc11Dpys4e2W3dDG5SizMugBnqdqosZRxR",
  "key10": "4761no2cECL9xLJsA51BQi8c4czTDa6UBRLWPqYrCr5gzaHLyurZYNdVfsnENdGP8vxZCS8XXsXba6LsLLHVKqnU",
  "key11": "3ZACfRNV3rySVRczJ9CwkNx8tZ8FpMPG4GfWpJwKAsWjouivfz38kDYzefPSLLhTwxzi9Z1kXZP494CUJ8WaC1uF",
  "key12": "4j4LTxF9ABjhCQPKKtmvxvDpuPy3CQs21xySzyNcLgod2cL1zFYm8sHb7wUSyf9feQkUhGzn8HW2Q6jUDwEZgK4p",
  "key13": "5UWiCTfc7gb9sWqBpXuPUDnBPsCXydDmFDkEM314zvhVZeYHcpe2h6rYGJVQZfjjp1hifKwfSjMDaxsCxrpv6Lgh",
  "key14": "2EfDTthHnAVFAhx4xuo7iGX7GMEP3FTgGfCTERGgpFUaTs4PGGgCEREC6gmp8ijd16o7k2CLijknqtRkezRGinjr",
  "key15": "2SQBDRukKyZBsfRRr6jYrbGft9EP9Ak9cBzSLF6NytEy1NArctQH27RMKwuTVFKTWMJQPXfzCE4t8mRtKRM5EJic",
  "key16": "5JVZh8YAovftQU1F7wJHuiWrowZnxGxNp1kXKp4Fdy1ehPq9WvcrdXyc753v45oGSv7eqjhckAJKtFa6KcSjyNpq",
  "key17": "3wYryLVipw6bPxk1VuVwXGEp1XtwR57zn9eSyAv5dvE7FTogkisYRYYuVQEj7V9trDNCRyb3kbFBx39YqxzMfFuc",
  "key18": "5vQMVyVBnWfQso3Fdz4QFCxGhGy1VRH1PYAwswVyyraCe1tuxUbS8VKvWKcvFf1b6yW6DaJGsVRGw3XfPm7aUJ6p",
  "key19": "379Lb27eJ7dNNn1WAuq4Mz2MwUWefrPs32h3QQCRGLdPXup1R3ZXxDqbHn9EMBubNthQDdum5hHw9u3qCWu6qQTh",
  "key20": "4qJzAJgpCyPTHP7owna3rFweKbHY3aL1QCXn2gZa6V62bHndQeGVrEnFuGba6MfbLr9e28uLq5deSi983stLKGxN",
  "key21": "5mjK36a1mgYLvVcMQUED9RkJnBLYsHXvsqLixG4KDmpek7zsqRGPznou4KPJMaxSsfTjzP5xfZsSyC6JqGoDduTS",
  "key22": "5dF1e7DsLB7r3rd7GMsvrv8GKt2VsP5x78PhasnQ1yLrqvaJKtAstZca9d291Yqk3CeuwqbU8tp23nvHSekSszqb",
  "key23": "5NQCgn6TWDngRvf8vkTMeBnVQ1293x8F2D1VBrc75pqREphQR9jd9eGBDp5kJf8Z388FA2jrcogyQLnLpND3hxEj",
  "key24": "4dGAyqEeK32GvYQZL5ksE6igdrLgjTXsgAVFZ6V1eVThuPSB2ksmszLykHPBjpqdNbYWPJzhY12QKUieqDqShwsP",
  "key25": "2J6P8duKc71bmkAbKJpfgHTLQhr2hxtuzTZjgJuUP8FsUZZGdykEqUP6VjePDEdcRTyfEeXd5kF1f48w4xytL8Ur",
  "key26": "2Pvmmb932BUK5WAAF9bnmp57ke1pbLzmTze9B9GKzVDM7vdRrU7QE6pKHX823FaDbC2vqDLQWRmANmNGsS7ZaEEU",
  "key27": "357ERsecetuhAREBmESmQoxWJPxKEBf4JHNhNe4sutPWFxhjbM6adqSmMMiY8DU9MuqYksLuQvpofvWTRjQCQuM7",
  "key28": "29J3TEneMMX72rKG4SuhRHZYr2HRGapb23Yqi5Hr6db3ud45jT87zA7duFbXoSei9x2G9FKYmGTZN6yWBY6qcheR",
  "key29": "4LR24wVcshDY8aAQsZ6YeGwxYWntcZngqbaAFjoNLKe8bYGKz7DyVV1jL4EFeRvQLXyvfMBoFaxdW53BaM2siNwW",
  "key30": "4fNVxraSRNYzhXQ9Lwnm9EdLg1ENicwcWfrQNqBZw5u1KLTBuXFAVpLwjf9NW1Z5YufvaygsxSnYFCKpnLqAd64M",
  "key31": "4m31Yut5md97oAcU1LCxrhe9jqDGEPV6ahbnbCa1DZkAP6Ezxx1TUihV8cmiRcUxgGL7Kinq65XUvE6jJ3vgFwm1",
  "key32": "2VZYuJHTMaJ3RsCnmHWkoAwPQ2LAcSGTGSorumJzT14EpCgZeFurmgxneNs7LThFdSGRgmKbnE43Dz4TPhmQcgsJ",
  "key33": "2difVzevzKyZu6dzZLoRSTBFeqHH54EZ4fcatB9pBMLFg3Je9uDFA84k9Z4QdtrVKjNtD4Me6jvVPtkiiHRHL8Dd"
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
