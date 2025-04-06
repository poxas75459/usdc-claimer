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
    "2rYbjkreFwt32nKKQMopSQYRmi9yvcH2Go7vyhDdMm27DoJoyqpxUJpKdKqThBBZt8xoheibxpyMtR1ytJWrS5TE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h5WZwNFC3hKRCwC5dxTTcD9fHeHs3gtxfiKy8knpXW6t9Lhs4VZiyh7H1w7qaBuaNbhiRntGecHoM15Yt6NngS9",
  "key1": "5v1sEZewf4MtQnpGdo7C1nVVyBvyzS9j6dkTjcT51f7ML7aHhSpWZy5PxBoRDNZUnPZUEvTPgx61CyJtQDydLYMw",
  "key2": "63EPatsHDkGWcX7ESLBoEcKuiHzkQXSwKoz7i7Cyb9dXeF8T4hXj3jPEyWCthbQSLrKXbAcrxpdQv2urVGXUyah1",
  "key3": "uERV8tFzxkpLAG9BMXoS73T7RPbmqaRfAjxo4tpnHM4vuqPFkz9qFk3Ptvw8MEvAsmscZioRNCrTkUmkDj5crhe",
  "key4": "64ke21xZsDxtwjSK8F6VJ72gA145fVxxfYwcaac6FEX4ptJkJofGECUethYC4QQS861xAvxrdUGeRg5t8CfCRFE3",
  "key5": "3vM2DSvx63hgtoQBkSd6LDENzvcT27pMmHqA4fAhXKgFeJvcDChLCoAdVaGpGPWVi4MuXxTbHNgmtUHeNRvsWSCK",
  "key6": "3gpXxomAiCuX21zb8N2EKUq8Tdw1N4SghGfSsgexJCVXbHJSrouXbBpeoaWp9aVVnfqRR2FvccA9XyoRy47T7mNS",
  "key7": "2VHwp8chLzTmx7u8nuegWCoHrAgJyzuCS4GtrXhBNHVkqe9o9514oUp2skQsYUQvJ59EBtqDhmPRi8hQ1uBzR3Wo",
  "key8": "yvtXfkg9i3FjAfD8bH3yat7JJcJaHMEZNesGGX8qvGEXXDiixXhxqBH1WN7Ro7MryYfgN55G2Hr11M2tHC18PW1",
  "key9": "4eTunw1KadScqQ67zseg6QVDgW4baUWsdqZSCGk4gqadZSdkADcrDban3oFSeqPxHi4YW8BnhGH8sKV6BM8S6K8j",
  "key10": "43R8cst29UaidpkxgsGn3StS3V7faZAguWtGaX7TA1TTSaMwFte9MmxQwRNszhL75M3sgnYfC5Ae1bmdYPD2PCQU",
  "key11": "Pm7ndtnBJtvNPt146qPWLQFNVHz6DLcHXfNTbfPxSXFt6L1jf6Gvd2BLLsuhPmAyowER6ivjtUo5UPkZB8gt1b7",
  "key12": "Jntjxgm6mmMZtLkvVb6nb64yDbAnW6LnQh32vyjbCqVLWZzTGhLMbmSJLdC68z2oYk5vbFFD437ESaG2cQKpW5g",
  "key13": "2BKiM2z3kU3Hpj9ReB3E588rbP3pFfJZMCxLMnV4xMtqLjELiDrMFcatH4qgbvaf8GLkwfQF7LhzsiXM3ssVHp34",
  "key14": "4GfTbgQaKdZZVHx1aC56pGh3SQAsDkPPnB2FBzupjPqdpd5jSWhEt1FJmgzw213yaaVFXNYCRBnpGubhGk5gEr6s",
  "key15": "49pu62scVTxgeQX36ZWeoPqB65KcaE85RArbaKh4VoFdkRbQJyMBB58r5ciX2dS9sQZxmryrWQ79fmdg23Qo6uRc",
  "key16": "5dSAkp5W9cArGQgYEG7aUjjoTm3xkjjN9DCmNWQtoomf1hGMLyNUV1L3u6jGxwAkr452ReCDMNFqFLA94UzHQgnf",
  "key17": "4SYpY9YQz8vbfpBa112J3PRPkmQyyHB7qZjEzEGzqwR4nmspU5mtSnqQcdSqW9SrStUxCbfyPT4G4ijwaJy3YGeD",
  "key18": "4kz6GDBvR5kM4D94fCMLkuB87vQfX4nURm91SdgVeAmRqZm44ganzauZAhdN5vHDJHjqVYSs9TtxJE6W9qNXbdKy",
  "key19": "454Rp8yRU2iF3As4uWR8Cs1CmwAW6F9c2JNoWwVsRXJ4HYApNmJzC1cAjiazoQDRh2KbDbnVh5kgNEL7LgK3Emry",
  "key20": "DfsVEpKuuGE8U4WKqtBotjwTWGdRrZcpLoGjWU88jzUtGEcPHzpzqYEtaBRNCA1PQrK24Uy9dKrKsEYy7j7Ym2F",
  "key21": "2ce957rqUMztX9ajS5cpx4wWmWdjnCfefWoxFsyowBWZDAps52ksfpZFo7eHFSGR2teQby9a34gv7sNB1MJCziQw",
  "key22": "9h3iPXPZ8G1uo4Euvdcj62AwQZvtn5xFHqbv7eT11R2TxRhc9koKsvnUDTvbpCUHd6RqfWYSQqQgeGRRW5myzxi",
  "key23": "237BDEYCeMCEYh8BM4UBrLKQJ7auCrrEXYpAYhAG2ZVzSXdxUMqeDsNg8V6ExK87eMqbcAZ3fTHF6kNt2wSuw79A",
  "key24": "2Yoxn53yK7t3cLjt8up7iwyjKdGF6B8Pkq3EMZKqtvWeNuLwCSv8MDUzsQ7sDLzAJPeDWpPit9KrxUWWbybUzdbL",
  "key25": "2TAMKDJAZYpkyoErgLxMG2ga3gVG3uz5rQBmeBy2oWmT3qYRvosJK6YhcKK7VvKaQ8ywf8NZK6UsXQQMKtaBEf9s",
  "key26": "37deRz3KKRtJPADLSjTDVRnsxSiZgGusyMztHm7kxi2wxavqG4dS9sK1RtnRgqDbrVja6TuUHRsQCzv9ny4MfiMG",
  "key27": "4E1SRLLvoVQifbS6Egr4H3TtXBZmkPAgtxLxKMARABh6Zvpmq9p5UtPK6kr9fMJShx9fm9SEuNoo2XyuFw9ofakR"
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
