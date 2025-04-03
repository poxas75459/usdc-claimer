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
    "zj5xQYvw8HyXpsoe1KtXd2iE4GcaHZYAKA78pcmfjYGthGpeUcVYrx722zGaJYtjmVyR8zxLgxYB1U3qdHX9yZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ktnMJ21XnQbBQ8Yd3dCsx7BcUsMz8xJ6GfFM1Qx5DY7mrtstRPiNaipDHpL7ZgQYVtU6zFkcuzutQWXt82BZMjQ",
  "key1": "41iTb3Wgha4KHeW5PhiVWbLyAoPVsRYaqFcVbNiG12E1QKpT4CeDozw7pqKEUvabKDfQW1v2i7srTL1DjVKLsgT8",
  "key2": "5Q8S5mvzqnog4BHPLy88Uh4kpaxTPM4iPWwwza2vqkjyd1Y8WymAQzBmGMqFtbuzMniQKB6EnkhBBizdkfK9JHax",
  "key3": "H7v4SLEY5iqSEKPuoHAD9uY3v3dNQSCZcDhmprrqjMYPhXcmNvw3tHGcFJ8bor3Gt4eDFmiq2Gra7JurinsdsWQ",
  "key4": "3e3AShkvNdKRFeC2kbPHr16UXD8F55oEx2Dvu3Z6wQx1bXdCe3wzRPMxxDzNNyVDwaZw2qGrTBFNVWbodwMm96Bb",
  "key5": "7zFJ1rSYbcR6RnX3xNTwurYccyM3XBgTrP2T4op6XZ7YrfcrWtwuciD25Y5eKsNLcHMdAGbCLddPwnXgWFZk5qP",
  "key6": "1bJc9VgAp1T5vED4jxdBvjsPvdyD2zJ5iVofS1J1ezEEtRfVEUyVWs4e274brnx81zkTQscAS5NbjhGu9FJNjG8",
  "key7": "51BZfd9TbsZLsfoxCtHX3DGhf3anyKL3WX5UMV2AzofFdN3TuLvnko9NNs6q1xgu3czZUFtdmgjzYgE9aGQzMmug",
  "key8": "5WRtPD7HMyVtTNw4EJuYbgKXafF87BnVAN3xxXyQXqCLAnWHN9ZNs1J4pUydMjE67ewnDztQ2FG9CeaGmRCBNbic",
  "key9": "3MggjFGgKqv41BLLQ2oBStecRzCE7e8Zn11wybnEhD9pWRb9e13jKhfCrSnfAzuYJZ1SW3TUmeDqnWJNsFQYxt2x",
  "key10": "5RBS8FzbiFc2kSQEjbKHXDZ23h9jaXXbEJnKEnKNi9vPVsHZPVrdCQR2menWZYkP969pU2rCJ1fGWL91f65htcSz",
  "key11": "2eijtwcy42oAFfChF9Cgewd4a3hvbqcV9uPsum9yga6KrKoVtYp1zZdLhZqjSn4uscVw2odu25wkEmn9c2xxTvU6",
  "key12": "26wMKATp2ScMvDhTZouQEZ3Z8xZhFK8hQRWCEDdzU3csAW9ZxE5rmZcYR5oJJ9sNC8zNsR1corndFKbdiWjTKrEd",
  "key13": "5mF7AiGoQVTDE2bPQbzoBezkzuiYeNULNm5eiPDwQqozEYRAyeNxgwVwuht1bHh3FfWGfodthNQesewCTjfE7M4S",
  "key14": "53thvi7GrUBp5KvTfu9xGx18BtGyaRbnEm2HmuDkVVfBLiN4AzYYNDNyEVa3HBaAKgDoREz8JNkJKUdVzuvGnxB7",
  "key15": "21PkkXCF3A7XxftmY33kzAAj5eCXVkJ16Bzo99EXK36Fjh5dKd8VN6dcZXw1YckArU3pByRhyDfaajDX2L3a4fH9",
  "key16": "663YgHcnAoxVzLbN7YrJsBhLBHWWsmXveQyAAUyEAJEiLz5v2X6FAaHC4TEnbQCbxwJ59VgXk8xjcyfwXtCxmSJk",
  "key17": "2kkNwWXQschxJgP3KBDmCKiQLPA6HwZJ8WmaC758cZVKZAFqQt6yBNV59h8URSeFCvXuLCMMwoSRVUsLNQKcChx",
  "key18": "ChrPfkcNWAiNvyY6puZapyLhJw7LpBuoMStrpALv9seVbcbPSmyEMJTeoWtmoed9Mhq87sYcUJa36X3QPZrEsGX",
  "key19": "2ounC33poYjP1UEczfJJ8qg9vfsRhM2fi2tLKQ9mUadgZVxNgVvcGRiWLyn4WDvvxN981YwgeShaS44jWCSq2LiU",
  "key20": "3WkBwapYDAW5Ucwxro8hfcL5xRvRKntShF3YqT15MpdfbbNehtYkxSgiCSSFb8vR3wa7PKmG4Hj7RnaHX9qMAsv1",
  "key21": "42gMLGDULWScoZiBrftPPE4SmDhRZYHSvSVPohBxssmYKrFftCsvyak1yatbLuLgEQdPfG9UNcpogSCG9uDmtPBh",
  "key22": "49bqf39VJUutCqfvRZvLU7jAE1H4KxF2JQL1WByUzyNyFQaY92sP2PQHJFeRGKayekvZwVB4FXvGhUnQQ2Qabbg9",
  "key23": "xGfkdJjbGBB6p3yGaHa6BzQEfeKN6mPKUgYgrGL6fR8PJ8FJ5cDF6DhfaEE9aP58ob1JVsDL9qNtMs3PecE3TCH",
  "key24": "492LT5qwdYAUMS7J63iUiLYCd2DsggYXEekhoZMZRWoYkpq6973AcorBSjPP4H5aqqbNpV6eJXAsFTfviTbkf6Gf",
  "key25": "nQ2G6jtPnRprwJFx7ShatecSAepxPsf1JGb7fedEqY2AHiSAmM74d9uQWAfXajJhWq5zhztaVG9ZeYqxFWTWB6C",
  "key26": "2VD2i2J6Rvj26yvvyiAbAG6VAMPmdA8NVwkbGKbBqgxbk39Lo9iWNYBCdkkCyB7T8QQ8Fx6YXkJAc3n4BLzKCCJd",
  "key27": "4Fmihic2bTXv9HSCHTLcBBY9YYoPQe1ohFstxX4UvH8BTneBGeRnHP8UJVLocyEJ4PEto3T6e6kkStNc4ctWd5Ja",
  "key28": "5rPNsLMvit61cwhXYrFFgHGJrW8BcXyGupsWCb9jebPwAGHxvw2UxeVcjpZnSmcTHp9duc98Jj19UH11t6PHfwyT",
  "key29": "2a11Wq5J24YkXo3RABf5K7gyrJF1ivksARQLTBVLsybzQvaACwBvhAkyTYKEMFexJRi5hbsavSeSftSMEwjfzZf9",
  "key30": "2FoWxbmBGYt16tUyrzpgbvTFLCnkNjzSJ4tSpnvNYmLnZndeV2y8F2ex3pzkH8bwMMvvRXzcSfJD5DXhwykFaffc"
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
