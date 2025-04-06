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
    "65Lcu5S3c1MWhhx8DZSU7qVicwWBzSMwW1onQhchJyYTh5dgFfYNK3G3WNiTcm1u8t5h8fapeTj1PKXmnpBX3PeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZLCzkZsgTK9Y8r2nsfbrDrNdzKBzfbLKgs1PmosGaVpyKmabKushrJH7P19FDaenTqUZsQxpiPW1YHhZDSh3DCN",
  "key1": "65rHftAU6M6B92JFkPh8YyVJiXSiBqRkYKifnP9Ft9UPC6rX19ry9raMSuP5kee2qzUCRopAMZwZWeMYHVo4Vpi9",
  "key2": "5zA5Lwxfk5tV2GG8io4GY12hgFdueNvZdkWvU1hnj5VrVw1wwfWU1dV2dGSATJEtUnN5UcqX4bevBqVigy7pGTaL",
  "key3": "4BmHVCL81xv7HxkHcm4mS21TSSSn7gc5TpN5eKnPTq9QMsuiWc7cB9UpE8QaCd5Wmt2PM7icB5AyxzX1ed5rbYkB",
  "key4": "2HrKFW8yANjwhLirA7zHUnwTXiL8UJa37H1Gas8XAnoKmdru1JgM5KUu65WtyfU1cgyDKXtj1pQdAZvQvAycVKqg",
  "key5": "3TXW4Dca5ga4t6PP53pRTs4J6sa6qWvhz4oDqaCk77xJeHuz2hoZatDYBjvafu53Tk2ouPWWH9WVL3DohsbxUSp7",
  "key6": "2dSFfusr8ToYs71cenpG4vxNpq9rpYTLzNjRzyAYQJX844eesywgqsfhVVGyearR2EUSQNb7Ryjg5kPmbY76p6cH",
  "key7": "RAhpqYU4s8Y1hK3Lxz49dnb4oR9YHCNxCuVxE2qA5N4Sp792yrnxCK9rsWVNMa3PFDKQV54ixnSEE48qYwYt6Ev",
  "key8": "2M9ALFQn14yYbvV92AgcZWY1YKqFZ87bvinofX1mVoHpqZHbseseKSZux6oDNfhm6WoXGbs5w7sCSwVTMzWCCnZm",
  "key9": "2ShaZJuq8eyTyBaBgh9NrKyoXTQELqUCwQY1x4cPZvUYmziysQjbALxFfXe3uPKg2sjJsrUb3jH8nnKwAR7T7bgT",
  "key10": "57ucTyZrxG2hDtV6v1wwQygumKqUmicYNKpK7r4Nc6L3gvpVCY2GR9eBtUgGBQMxf5KSzsyR5EGaaoGrFGX8Gz4c",
  "key11": "41whjtt5RiyQzkmWkhT7TbRKvFDTkYCc5GhPoA36dZcMkjk24NEB1fvWWnzmiBc5ThADoBthjsk3syWnAUbnJrW2",
  "key12": "2CxSMffCR3tRLtPrEunZHJXTo7FFcL9fcbDRSz95d2iG6Ygs8BAj5PQSyRrB3TUn2QWgH3jeWPhgfzveWUgq71GS",
  "key13": "45CBkKcn8SN8x8qKQd9YtWBYxTroyaGf8uT8hBWrdHoy9PBhwMST63butxspSz7Emze87E8Ftu8MKoC6PfjGkviz",
  "key14": "4G28vD4sDPGae24y6qKpzHu3kK21LnFPmZJkKZwEgAoN5mrdULAqqyKkY4GiZdv5JqMFm75VbXs8ntZkt7dcB3ee",
  "key15": "2aLpuTLum4x8X5N3aJ5JEHQwaZwBoytnvaXdtDd6rZjqHUmZAKgVgvq76CZUbrXJXjvqTACv15cQ1NYQa5nNTppg",
  "key16": "5LUAqW7mo5An4YHqSAXWcNBrpze82M3tZBz1ZkemtAfHZUn6wm2wnQMnJmTpogtwRZeK9SWUkzFCzXAqKia9CCTk",
  "key17": "3z2LiTygVRm5FD2moWjC7HsY9U3ay1uVU1X9rB4MwqQNVdsZFSzK4j37hDzsspLMLgTqqEq4BvJadX9rrYLoHKFK",
  "key18": "Qgd1mD5LeNv1i4hkX7Yj9pPjtSY9QEXgZzjndWmr97mH8fDPh8ucrAxdHM5xf1FYwiS1rJDrRSApZZ7SiZvAAuu",
  "key19": "5dapwmgqBWCKaRJu2tja8nuj35hMgpoV5jhB65WAYPxbeH6R1BtcdQoFZdxaGfGLjCVeMLN9S59eSaym2UJnAjAS",
  "key20": "jrMPv59HyPc9Rnrxzjsj8rd9G3TptypjZUrEdNkCfJCUDntnhjTmiB5v3h4e5C22AUpCN96UNxkDwSoR8KPtsJr",
  "key21": "5fUxyPtYHaenuz93WDVoFSS9wohaD3rskY38fetGbS76o3hKXG9NVgcwZk4aNrLCwi3fkRDDZ8FQdQp63EoobXpd",
  "key22": "3W6M6eBgfMCkmpqPMejp9RsVkWbKxEpSrSMMsHBhUA78LfVVpXJrACqA3UhYD1Yy5WGBUsLiXd9JbXoGcgj81tCX",
  "key23": "5gMjxPsVB44A382DU7jSKHxAUNdDoKGpy8FrJK2B1vqYbWv8iggaebTkKmRummc3p4yEfDxp7oNDd4vi4bE58jcX",
  "key24": "ptHuHf9pevPvr16tHiDdxZAAxJjXbqmaorBDLY4nqcrAewtKCXeAaFrwJhdkQgM73XXXwAcAHEBKyegukx6Qdzg",
  "key25": "3GQJrLgu4hChfwC9UcFjtr73QyNcKpk1SRNwitN6zKDChWST8d8o94QsquyHxM2XJxPVMnwntuphNcmmnyTfvSWv",
  "key26": "5Yx9omEQ1NEsAGmYXKkXkNADWFaMNsWh3J5eYRTEfQ9dP7xwHCf4trt7riJJWmseU3zVVzLEbpDdr1DuRDZ2z24M",
  "key27": "2pvfhcCo2nh2bUFyXTkZtZvmbtX7N526QNKqh58Yg9HB2BCYkdT6kYKEaeWmKeePqNLjHUKNhejZi6mygWgaGaE3",
  "key28": "5HjUrM6PXL2hrrAe6PBmNJJBtJiHSU1uWe6ZZusk3EcqKwiNFiPrV7jwWok6HvWW79PXLmz6s9YW3Yz9s3K8w6mx",
  "key29": "4Xq2FerqnbESt268sBvyzz8RyA53PgPRparXwJ95VXKYkWLLJbvQEmypMG9G22RCVua4AajP8yCzJ18JTHY6nmVt",
  "key30": "5V7oWoFKYaDJu7aY3mY1GBv8r7KwTsU5dvdtJbXKeqnmhiKh4NQTjMoTSivj4NiumRpAQitf6kX4xEYvKdTAdTRf",
  "key31": "ep1qZwECKJrDTVZM1CsSVSmfY3D5Qr6ea9vzarZCdQoHZfZ6au3TF9RSVNuUEBJvrqB8oF1YEvuDXwsnD2cQnpx",
  "key32": "3WEzH6N4sc2A6pAEzBFYdvauj8wLhAaQP9K227H8nATAGLcfiQKLLrHJYFF2qAv32YU6GSBg8nQEfyBfk69Lzi1B",
  "key33": "4qw9CzRPmSxfQKtfY7oj2DDrfssTwdBzjzifsdGKyzm7g2iv5ZhahcQDsc3RZNbJGUsPsXCkA9rBYuE94iexCav2",
  "key34": "Zku8KpsbEh8e7KJvahaW3hujMzztbYrxwcNDy2MAJvTQjf8CtYeAdKjkvz1XnQFKS1xw19bMxkfNqfFxaERsYfj"
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
