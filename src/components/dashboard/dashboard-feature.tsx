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
    "2pWLXzzxuwHTogBFg42YKsB9aC97qVtRPf4DhhAcSKbrCP3GEzLj6BgvPocX2oxWw68V1SLuHPEAkgCNxzyMBGV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vCAw8iGJT6Dknvm6oeyoUM7okyYE9u7wRRH8Vzs3HE6WtXXXppcz7JhPcci7GeEcve6YQ9W2pXFWWtB5C6utJbe",
  "key1": "EuRrT7sTPdZxQad9fHVH2yuPG2PLw2Ci2CkwkNbJd13mZWRFsgcgE6uAvky2KaNRHmRsQjNZyezjBatUBv2hUDM",
  "key2": "53F4bATaoDZdNBzVHWLkshUvscdH3dmVKJh3JjhuEkimH72AcombFgqF3y8uV1eSNuVJNzThHMnRBqKFZUF6zuAP",
  "key3": "2ytjLuc9jCh99rr4Cuj2msMZ8n9iiVwJACNd3ZBLP523JAMSTJMqBk7tLZaoE5nkYqpZ6G5xPjnDT3t7L9eqaot5",
  "key4": "3EcraCwy2oJEJsJa2jASRB2JifgK19puLzFxdGJwvSQ2Q73nhyJuuUjqEVH6xer7eb56WquJsuLgfPsCjNBJb5aJ",
  "key5": "2bS9oH7n5SCfsZPVSDmCwgYumz1uxAhLf437Lso1DDAYDYqHNn7wuVm4F19iEfFMnY3WvZZEeaRuXXns2wgT4316",
  "key6": "2H1zBtkjE9Gi2rDSq7ZeULmiqGwH7R12Qa51GxgsU5Nu5u4LWS15N8fdwq2wfHdb24ezdnbnoChxhqoVy2uufk98",
  "key7": "3E5yt8fnBLzuyFBDHhRos8hq2bTJrMJ377BHaZPt8yRMHJA6FA6iUjMtarnJYLijoFK7q2crmemUvTgArarsGbJy",
  "key8": "35hFZVJz6nZPMA6MWbecz6idnFZoHAG4px5iQzSjjSrSLxEpohyqVYDUXU1gHB5Ljmue5wePvdRMvHhQwRY9kUc8",
  "key9": "4HX23VHV8bzGTHWn4WT5VzULiZXHkQi99TxA8o6UpeciVP2Rfm3wS2qF8NnF9Qw7v3iEFXMMsBhopVeg9G8G1Yup",
  "key10": "3FZmyTEEj66hBaisWW8CcQfczeQabhtd2eCXQ6GipAfwnaL8HoqaC7bMXsHMjmyKSZ3fa1iLFEKwPhVaoiz1no1s",
  "key11": "4gRGG8stAbdU5G57Umtp82iFoJ9D2UzoPNEsGUJfFq8TkUYYpJKEugjqJysRLDuWm2ma8v338iB8VWas7fAphcat",
  "key12": "4KLpZy28LsDE2vVeRLxxsVeq9p1FVZfcWcmF8vappxFgLVeufB6L6og3pxqVHSAR9g8ajC6dFa3heoVc7ZNntTkS",
  "key13": "emcisGKa4Qtd3sqgo6Qf59uk3SeuBL57w3tj6cSxcJbfUFAiCLaZur2xH3HjoGVdyCRo9Pee7qDKN7Rs2soZXtj",
  "key14": "4PJBFctqKYBLokg9JWQSaVmBipzRZ7HUNdyFDNRfxNDSy85gP8VNXjgqVo8iMjZDAMk5dBwtkkAUGNG28xce1yPq",
  "key15": "yGpSZ4XqzZAA2Cp6pGesq6Zi215HZQVZsF9axPDJ2puA7qUzthKa2agSA9KcPZUQKxFoi5fm4bj2HkkT859odoM",
  "key16": "5AHz6mAengm8XArBzKFgpNF4NoKKpM6kjVSncvcFzR9UBdTbeh1TUbGocDV3fE4GhBaPqY62GiN64zre5mqtCadG",
  "key17": "525sde5GfPn2hHg13VxetvZ4QWMEc96XVFxEicCpsLCDtdWtkmFCXt66sfLGjoaWZgznMmqusy1sS8KTB6qrEzxf",
  "key18": "3ZXt1H5p8tRZdWtopAMuwDh7tXzPMYkgpfohXX251TrPoRmRS1HYBf7booHRESfCyyZh8k54FiAyLEncyvnMdPDQ",
  "key19": "3AMaCJH1FsRTBn56xxaVsRLvXfpz1gRnXpWGcXe76Em9HEgcmk4d662VJdfnLCQBCcW7tvBSND3iPoodJ2ViXnCK",
  "key20": "4qfDfyAzi1dh7qrR7Ug6d6i5s57Bk9WbHCyx4sWAQ5v2LjeYoshBDkTH15pGbKR15M3vDtUfPX1VheUAAiwsc5KC",
  "key21": "2U7trqhS9BSgVCZT7zDuJRjUu8poR1RUmvnwSqKJcWgxVCdKpsaHvGCnHhpY9af9DPvbosZH6potv3YDuMwtvhBi",
  "key22": "4poLw9EDsg2Tez7ePWT7AW3Uw1VgSnM7Y7XRnTGA4DopL2N3B6cXmEPpq1QGp6crNgFk3ec9qwD2xCdXJy4LycUT",
  "key23": "za3fHwJsDZgsXLZUFUL7vNjcwFh5bs2fPsCmvCBVYS7cxmQgQxupqMCYzgLJF2RhPayE2nPDVQkJRW45aGjWkWy",
  "key24": "2aBk4YQXA6MJqxjqYYURU41NsuKTv7x42FDadL1rh9qWhyWgNLvnMNvEmwe84hBrE92WKnR3ZhJJmMcLntMzuQPG"
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
