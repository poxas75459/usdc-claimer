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
    "3UA43mW42t9S4VtYcLDNEqLazEgBJtaKtns9vQSXrAYkuhqKSZ7HRNB3UZ483zQNYwyn5rkPja12e8FXPgVNaybb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y1Y5ATYZytViwfUUkTMVY7HsJ8U37zHcsmY4bwCFqbkJQeKviQmujixCtJJM2zyRbJJ1fsnpgouvoDiRuiRiayg",
  "key1": "4QgBx3a6QgaUcBMcFsF32P7GKF5JLbLHJ8HkzPLtzcj1UHre4T8zdkw5Wj8YWiov5YuQEhSsPajjmjE44LGfKBj9",
  "key2": "4TQ3VdLEpRMp365yJrR4SkRBygGNamZfQMV1Mc3i9NEUm6Vq9iFHum1pYNRXpuvfb3p1EGwf6oxedMSdUDwAPDip",
  "key3": "3eKWHEKh79qYcWcpoUDCJXENGv1ZohNXTYQM3sekYnyAeJCTzNZKfWjFBHMZLTrNHHVzoxJYT3UvayJ4KS6efr5Q",
  "key4": "32L7d7SLNYdGp5PzvNSv4erN5ijk9DgyXo3cixAbjdDYaj4qriiUJeCZwoSRRTDLMjSEibZskinvkvobMN3zMydf",
  "key5": "43gvZzqt6FBvmv76TwBSgP1G3pE2z2MQ7u9ZKHZ9s75WximrAYL4xMFbWPsWUTfZ4c1apJt4rTJWkU6J8PZMhR8U",
  "key6": "3mPQsFCLTCkXUasgLcSabB5GEzPfiGgoC6i8RsXQbbJ7T4YYQcoiDP9aPFGd94aNYrRdaoHVSC4J4oRXeECGB8ss",
  "key7": "377BvBveR7Lq9QExQmqQCHME7ax4dpkYbQwSrx5rjAmjPX8z27ifNvqwcHyxdQrWYZWjZ8wUS1HcBLaxBNVW4F7A",
  "key8": "Lwjx49s4GPPLBKuLoRZHey4PusVT5d7Y4D9K4jaBWfFZob1ucUrqwzSAXx9yejuQoNTY2eGgFq9dCkN3tBen9z2",
  "key9": "31hpL53XgMWPF23F69urBTdxCWafJ59qUBK4gqjFHSYY9VfnU9ratK5YkhxyiE8wEG28MuEt6sfnmk4x9njBwGCn",
  "key10": "rcw65i5Lcuiy4tSu3nHNVW4VwPgfsBN6ijet5QXA4nVaCb6QJTDFPAhyBQRXiFZyT29rQsj1WJXf3Hz4PGUvoMK",
  "key11": "42ZiXFYs852iQ6nMvNT2g8mBDYfbP4TirCZ684NBCRWWddUxWudALLUU2Ge4armTW3DLtyJwkafnzELZNU6KFgtb",
  "key12": "33psWsNuU5VAkoAQRLBJbVKVC83uK5tDwWf95uaHRqEaS5evpg1xH7KmnXzKjGWxvY92NCqN71xGLvRxiWLLFX2w",
  "key13": "5hC1RxwNqS7yFUfM7qDzefd2nrphnf41ine8Uxhm7Nm3euMSkLc3XWT4haGkw4UeERtNd65KRBhhtto3JuGNYcFf",
  "key14": "3GGfjxRwfGec12MrYQncQqwHEcKgJkBKD6Xp6EAJZPA7M7cjDTiAY9rsinm31Q4TyYg9myRMG2hJyZKPbJL6DPXY",
  "key15": "5xjN35x6WrKEzHNfr71FF1i4zL41bgPmU7JRFvjDvCK6PLxF6dGFiZGckWf3YifCWVQNaDZQZWQvXzSYthYQeuoQ",
  "key16": "45sxxsEKUFM7DfWfzRZafrBw5oQcLP6hmSctg4eSWbx5o5fip4sS9bpXRgX8We1TgFpLcxYRigrX3zRMn9NEaWfD",
  "key17": "4NbYvg2BF58SQCiTm2Wt5z9sbAPVzQ69cYHVhgrgbmEbek6a2TreCCH4pbjSd6X9t7y3aDnmBC5x58yCvu7yrWEL",
  "key18": "5a6CbuGm5oX3o2uHgNHRi6fUJmCjGQPrGoCoGNTJQpwBSvPfgDkRwL2CeXd8c73MFxVUVKyqmDeRxyE49ezrJar4",
  "key19": "3PqRqbAtsJbZhVUijTkQwuChicurBqximhHb3oukthBaMV4WisNN2Xodg9VqqQxv5TbDmyjp717EfpvkxiKx5Nhg",
  "key20": "1ChKSrvnbnE1Ke9igY34tVCu2vq9mmDFVyETTXFiFhcCdGxbYfKL8MxvQ4QB1dZtrMnoMEk9y2w8Ko1hYzDVAtb",
  "key21": "3ZfntgPdavuYzx5REsCu38CkY5ZKDYGEWjRayJxBVVgSGaYm7Tve9W3wAmCiZcMxXMAsgH6NL34HqBAkKCAtUkwG",
  "key22": "nTv5L56vqEsAxpY4iyTxu19tAwgyjFNA9TVtKS3KwpZF7qGQM1Uk3bxEmdwdbEH6KHwzZz5jkNCPWrUXV3RYd2J",
  "key23": "kDmUmV7pUGYdFbRAAqgXPeDw8m3uq1jajV3wk3RatdkpqMEkuon2qNQCoRoFthenEA8Nex856VAAYGL3fEmBu2D",
  "key24": "4gtRbhyZV4iDAMsuQefiaWSJfWFpmakHGPnkz2pqK3ik4r75ZUNBokStbVdg6qAuzHuWb339fMV6N5x5A4MeBkTx",
  "key25": "4EYbMBW1VqEHcMbnLw4BLXa1dzcF1z9M3BqgH7SZrLHM6VLMk5ps5iirpAtxKEo7brfdoJ4X8GxGvLGntaZcgwB2",
  "key26": "3LD9ivJYvyPXmE1Ug5TcWyqbscUM6os5Gt5ydHrumt4tRK1FSCm8EjcPLLEQrQdhJvVDFzGUxFcsiuATGUFr3Fi6",
  "key27": "59nB1n4jVcz5F53yZWLppx2YPjvqvpecsg7WVtaAwTqsVyK9nNCFvtrPMPJZrSkK35A696Du3waMRsefktpReWuY",
  "key28": "V6xC7G1GbH3kgyBmMtJWTGSKrcYdSkSVCbbXCsk7koU7Jasu1cVMJbYvsFZPL6hwGGYVScsexatdjRuhTUivtsv",
  "key29": "2jy2HVR46KYszowro2pXCwWFfp4nTZLjp6mi7wGTTduaRxXjBMHGrPqpo4iim8cS2ZGbS5cXWtN2eTk1PtrG6xun",
  "key30": "3hCREMPXzDATJRQg9egJtZWVWmffzeHCUnAqg2Cp4iNkrHRBkXC2zmLtPpEW6HCPHY9wwrLvroSVbZKxiqdRHdWZ",
  "key31": "oC8RFc8LAsk7xWZtnWFNkn4dUCzWi6KB8v1QxQyHQnZWLQCrpZoz2b33G1Zmz7uRcuVbwVnE6CB2ZSwP27b26VC",
  "key32": "35nBEsgFEED2koNS3TkPngNX44zJFvPLvhB59xfGUyY22Q5cyjt7gA3r5oyhCa1CRN35CT1i7iv5pwMpcFpDcTwg"
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
