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
    "cagi83wP7EHTGS2MfgAkAae278KiHGz7VVZMew73TbCirbYJJ8pxn6RMj6B382cPt3Zeg1q8RTkPKYSw4V1kLe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y8m71pgBC4kbBQN6nJtRE2Lg224RkQaQMSuGnQV5pvd1WZjKhL3CZkpnfVUkfCLu2Rre5RhhhomoT2ERbSLZEJB",
  "key1": "5wozW6ZNmyYzZBaaJxAKAXxQTCJ6ZzStEkFcELDoHxnEFxnWUnWbdpqwZrmUAKKEoz7HbgRxU52VythfBwgHvzDQ",
  "key2": "65P41xuUqs9gJGiRRW54hxjCdLZ4aTm2woSbuKoc7puNMrMPdVwp8wXNcPfzSN8vQ95ojYJ9H3vk4Kupe6RBmd4V",
  "key3": "eTKveu4dmwMuBUkimXeBL81e6uLtKJxxKMSnsH5DztASPD8EbcZbCgsxswAsuuZzkTp2UbRfG4Ts1hcSpiXgoP4",
  "key4": "2J6dC6Qefv2y3FzUAsrDVsCqeLKHZyt7STTxZ2T5VyrZ2w8VeqEkfTeii8bMDzE9gq3xdjagZeogzN8pVhtwyC7Y",
  "key5": "ddujZCJ5DrZHx1s4D5nVVQ3yQQRbSXgoP5x59GKRTAqf4MGnQEyEhe8QUxyEkcaYnyNrwbfMrb22vMwd8v1AScH",
  "key6": "5MnMKj3xTU8m1pbp39yhvHfmEJRmGpvFGftsT4j4D3KfcmmLBDcGvjGWx2zTRT4j2yUWheZECewXW6HzN2jGXL9h",
  "key7": "2hf9GwhQjDFKaeH8zoLgGQiwcbSwJQ86gdj4irEW4K5MpcV4Ssn9SRzHrJ4ywQ7r3LPjZZMCgkBGyB3USR2bGB2m",
  "key8": "2YTCUHWXBXEiXw55YD1K7MbyFFT5N52MCjYiWkQwVLXpAgQbxitxBs3kjuGTkkZFJjY7czugzteAACRDb4zQbrLc",
  "key9": "2YAg5BEm9e1ZGv4C9FJqb4j3RJgxNYnM2nRLcJVxhan7efZPcp5r5Kjy7B3hEdYwXLLBvnMRkWo7941YKkypk22a",
  "key10": "2e3hFka7z4eNMARju2SsBQpYqi49cFq7roupLDwUyqNQLtpq6UhqJrGkN7U6Rvci8qspsdkAVBrRx6J5nYSUEqCj",
  "key11": "569TuTdGxnThTzv2ogfPGw1Y9pSbHYr3deAioPhujbdXPjM9TWxowH98zrZfHux2TdFkK3VE9CzjQBPxGu7BpLgc",
  "key12": "3URpVTzG7NvsvorZQRj8e4Ve6ZK38FguyhUoYWhsUvqyRUQ5F7ffdMu8sxXjdnQqoTpp4JyLD3Aje9EGUD7YCv7o",
  "key13": "5xArfWTfqd15JodvvsRDRfhZkuEKYdzGP8nTudgXYP1buD99sQDifv9EUjVD5nCzpA3MZ454VdAyNL8E1oCz2Du8",
  "key14": "4P98vrun4NAWKxmo3z7gWigYBvwe9rmmSYMaVpAgoZSDm7S3HhMwp4nAKPFZTynrSdHGapojVNiUxfkBjoVauRct",
  "key15": "o2wEAJh7vBdE6D8LYKtEDggxXWL7tDfxzkt2qYsk9oDnuev6oDhxd4uUcfrnTDFxPy2XZ9oxmTM3Q2cGz2RWYnU",
  "key16": "667pQCYZPAKizCExUdGQxEetfnEweWCXRqtPozrmTPdVbxWDaVHAMBFHwUjKoNEsWcggVGGK9cZdL7xfF5vqrLzH",
  "key17": "5GFoBtQ4imFH6dXRRfcicNCyfiFb96MGZBXKEFNhGWDUmpDxBGZeRyiSW6UpFfGgDbDmfwQtQ84oHhpCRTsEexdA",
  "key18": "aVA6tm3xXRopyTL2ES3M3oihPBJeRziNrt8P5GzN1X9RmY6WsEN7w8Aqyh2Yi1BVk3vJDCYgz7vUqLEfg8x1LPT",
  "key19": "66eofJ42MSASk1EhH19ZQpJREYQmJ4TE1bS21YeGq3NLmx9kaE4U6jmNNsik9S5kxjG6PzX2PZ7q2jHcftsFDzrS",
  "key20": "3NC2v69hGc5irH74eANPBM9UEeU2rVrVLyri5vQjxDKYYLVE3YhBpqTt5Zkjz1YRVYoa8nrZaKY1PsAMCqzCy1KQ",
  "key21": "CGS3GXW48SXmMtq8WzJJfdKoPCwuN6pcK7cLf3ZGeBiWpgXvLtGxdQQcnUV3GUKeM1D2GpjuTR81xZ8rFfvj1gT",
  "key22": "5G4qjyJZc1Ggv8RyiRjrxXgJa6Wjb1cPFKW3dHnMRTgD7C2HXpFyxcjbpW1Y9BqD8PHHJDs5DXFoGaHz4Ntn6tDY",
  "key23": "EkbRGjrBYgmGaeLm97ZmJYra1AvXTZMmSeQ4ZVqB5ojpCeUs6zTvD65Zzx4PMW6hZLDrfie23pMG8x9GDtPVJRa",
  "key24": "7mgNfNLDVWNqN48W2PAKTMbwituyLQujBmzPyq1MC3i8nampa6rH9rM981KQaW73HzPANE1BsMC5fWasXXsXJEW",
  "key25": "2PB8oSWeFdE1A2HTFcTPFVSNMYfAbk2DqkkrEkzR2kooFLnuXXUZmjLDPderDzZxX6hgPGH9FAt17jonV1ibB4iE",
  "key26": "5xMicHN8wLx3czZJBHw47Q88FvSLeH7hstfBvbc2GmTTmNSEtYmZfvBZZf31EbfcSVyJvoBnnSu587Axfx4fL5zK",
  "key27": "4AaP85Rj7hngT6HHmegmL42QeDG2BiuzoYu7a58G9ccW8rDkjfr5jrzjmyrHXBQuuwTnjDxmqwbzBJp4PHCWvT8Q",
  "key28": "3kDhV4SazrFS42Gx3DvV8Q3rE2xoeWrVZEP2aX13FESEKaoWFYLvVS39McDdpH4cn9ayugWcRjQzz9ALsn8AJUu",
  "key29": "56kfsKei9mUXKpjc9VfnqwbssoQBEgdyki8bnR4d3zZge8qMs7kcM3D6DhHLejscdstFcreeCkQXpWKr2UTDUkSv",
  "key30": "2v4n87tF8ftvS24dLs3VJZJiU2gyY5GANjBoYx7GGoRyCVn62PkZB8TXJHALJqa5dWFHzwtFhoMWDMRYiJj1k2Nf",
  "key31": "4GkYWmZw5saBoF8fzuuCe1av6A122HL7wvc8Bkj8V7es9v4BnrJrrPyeAGkqGz83xD7uvn3XaK33omnZJPj1seMB",
  "key32": "47hCk126K3Nhsu41EGrUftgPofvLSsHPi7sKQTbJUay5vX5YF8HAYV5QhDYQS67YCvYtYzxxwTgobw17tCq1r7MV",
  "key33": "3UkZekSMQSswRdyfvsfA29RBzq5F6k7vLv9SanJrhsm2BhBmwM9b3QoR7gR3fiifEvBPz9LGn6t9jjcJ6wJb1fRz",
  "key34": "4RG4JVbzswRsmZ5V6hNAG13Yh6DSqguZ3pCMRChwSNFz8KjxUYs7kBt23HhnmucE58iVuNpYf7Qs2wbGHMsnzgxh",
  "key35": "W2CU6mTv1zCtxrYFaXSTGn147wL6CvZbeHCjWMDfzadGQhJoqfDrBMPxMTbUFLn2JETvEqBivgCZn5r79zyRKnB",
  "key36": "5vLL85TMVXfCea3FqYgLxVoq8hDSHwj7PBkG59UvtP3QxwZWixEZYz4F6RrjKC4Lfqjsqkw2k43GtybCs86Mrru",
  "key37": "5iiGfFGrvTc9K2Lf4CFn4WYzgMGSMCTYhyMLntLxgbERGgcMubHjRHpyXj7PaDRmqaMANBUdBCfs7CpGuuU2G5F5",
  "key38": "UGrk8gzFxWwrHUcBLT7JXAFRRf734w3f3GoUNBsWdUj9wVT6cZL11MG4Gt5s88cehTQT7PS2Ap33qzqje1YXYHp",
  "key39": "5vXoxSk2gEwMuAzvzWYVhxvWrSfpZhci1dgzZjCtqwdZmepVAqNCGRWY8qMKSCZo9VmfpyLhqJrzCPFicZcdVmuw",
  "key40": "5EjLEmHnRKdcvRCsNenbBCQEHNrZMta82uidGPx5YawrhTHKxLshaRSX8bEgd23jPxGkoM8LBjoBvmncHH3sZEjS",
  "key41": "5f6QYHeopwQMsyqfecjZSdCv3BcwHTAjRrgmydL8thExeKXkTaqzEYznG2TB9c6K7LbBqXbLob6XTnSUS1Nb5WmU",
  "key42": "2jmvPw3t5vZi8oDgUnuQZVC4UjLC4VjhwEJxPqLhwizjAfnpQd6vzik1FvpHBH6ZCrKXRVUjjVZHr9GPok7Gpj35",
  "key43": "2TiZtb43peFhRcs6cKX26tXbFeQe21YxmF6Vh94CQVsFgSPwLFSbKPnk2gxM4GyDJNViWr2BdVUavRmLSeeHKHAr",
  "key44": "3yrDfFLH3Yngaq4Ccd2o4KFmnveYeWBvBjSWC6QUchvb17qPviw4TCM5FmgrGfQUr9iomhWTcU1hNMU8Az2Y5v8b",
  "key45": "JuGrV6W7T1oKRJ1KE4AnJwPB2Re8h1e4xbcxYhbh4HrxH8eGaW2oCTUUZNqu2cbuVdq4JjuPoczdonALvfLJbMk"
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
