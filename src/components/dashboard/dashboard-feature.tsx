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
    "5pmxfqfVkqPUz3SPeWGxeQpWpFpDueNppHkNKYPCsejdf8p9yHRaWLAVi57JGTYQdJYZgXL87VYRYJVgTdS9RHcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32LhvqYwGLQufZYTjjbj7gM1qnEf6rsc5xZDkuVd7XUyTPnfRJHgVx9b8ng5mbEZuVsYLrfXo7z3aasSQfFRabhP",
  "key1": "3jTYRLVqTwbihiMrRQdqMHTND6McsdvW8pYZM6fxG9eX6EDY7ViUVF1jesqUz51ggjgziBQZxojc8qrJphquPumM",
  "key2": "2Jgi86n1HNxKBwVyYYJCqFJ5BjFwNXsi4E1QhbCYWCWpsMqBkpLChJLrQuMgMCQzcDm4ryX9tEx6dSs4njizJCfz",
  "key3": "6524WXFuEowtMSkNsjPPzAnVgLpjTDxPLd7MP1GsFqeZhhrsJ2zacWhEpKda7ghrDYZivRUDT5ELARfNN6iTpLnf",
  "key4": "4tcj2TrHxwL7rGwsaQzwG3RpeM5RwzUxfnUTUHQmphCDVwEqvKuKY4YkSZsgGzkGF7z96aBtchMopSVKMkymuZZZ",
  "key5": "4eDWeu45a8c4RtAt2SAy8ngBmCNugbQZkJghLdk7xVyZtF6FmZRvEd65rM7MPTLcoWmaur4iR9UPbgrRZMxsQob1",
  "key6": "3KBzu7AJm5Kr5M41k6w8ws87WUTKqpQh1258QerV4v2ZK2vPTenq6gHDFnWRWYZuudfbJayDwgnqAVNnXQcZb9Gs",
  "key7": "48D9eiBTR5zXMjjWS1L32HorF6tXBoGPNuXoSPYrmb3rfAk85LidirCWJawA58nMUfDZ6GXNjvvxbhz4pPGRb3AA",
  "key8": "5e3oL9iGUF6qXP4TJaux5ZrHuPunhWfLHuJn5ecw9wPUtoRRbWDArAWsSfk7kbdC6GqUsu5j6sQjRb3AVAu2RSLX",
  "key9": "5ZRZYFnEcRZMjfeCYgcTviHWKeoHFP5NXqdcLJv4wzqhYZxEYdsKL35aaecisLGKh6NN1im82Tb7K2SM53f8jemL",
  "key10": "5GX6rQJgPkEd7enFkgsRoogmFXw7RZ5C89WSm3uSVWCo39p6V8BLiCohZZ55p3Zs199Wm3SFe61aVSbZTmQrsiJv",
  "key11": "HaES3xcLXwwedKyuwHR8s221kZaPwxmn1exsKBf9oHYE7KpEYJKQ9b8xLDEwHEwzeHBWgBPE1uFcXWFHoC5fn1M",
  "key12": "3nC826gUC7miJXi97rVtFV2nqHwkGDtj3VPunmozWJCwizxeXp5PxoAnAeHJhGuv497LNnZCVmfxcDszVXGmeKtm",
  "key13": "3m8rE389Ln22ykpDWjrfdmCSxZuqzqsfTHNG2468FucTBsbzVjwKH52jDD4fLF4t5JxSvSWpsdUFpocvY1V7sn7H",
  "key14": "ukWPQioZi1y1wueev9qeMhqY7CMAfJRrmwi2ZKZsyrYsNqqg794QDcR2bfWGWZs3NneUHVHTqkvFvRsH9yWxiwt",
  "key15": "2xy44DARJ3fNyk5oTQkv9ovNxcKMuHYQsnhEHcquxrQroFLosvvXSX1UBpYKuX5btEpYTjvArwYfjP2qDaMYfnMV",
  "key16": "3Ny9rJ5A6EsVtM9rn4hYndScec5tnkJWtTbR9pwjZNhsKR4nn8qCYL587aTQYuzguQeVo9rLQmUSbYyNbgDkGoxr",
  "key17": "24PBn4m89GzdiUr1js8LBw34sd7VzW8Y9aXuz7zLahRfuTpymy7KJbmesrQMUBQtbXCZaN6JjgwEjG4d5qG7Cqzo",
  "key18": "52RoEMC1Ai2LcftnUZFtpZDVtaaFpSSAKQFmX8J52KkEHPMTCZAi2d4SecQ1Fw162hBaFZSyBcEs9KnbCLnoE4Kf",
  "key19": "4S8qyn1ZpCqMbTj2QmSxTz5ytunPF8JiVk6kKbsUm3VtULa4TrrdV3SZy32CeJ8TBehQrK4rZzpm3gxLnoJnhisZ",
  "key20": "4mesr91n8zwn9PNYvwcosJBcgVpwX1Kzf9bneE9PsQtRHFDPYk6GUsoAdtNuE7dk8PfEJ23vDkVkFpCGQzH3ppYq",
  "key21": "373zdNnVkmX1fEtWSRNU79QoK9xnfYC6HGPQo1R1fBgJPc1CGYMfw4nLRmEdUZGMBa8Ygar8W7VhsE5dT6Ng5fj7",
  "key22": "KthM5gfyouwF31UHSEhp5g8GLE1jeqRWPcu4dCt4P6PqdSa7s2ybv8iFiZBHvfLedsrY3RcDSj5ejJ1YEhp1wHm",
  "key23": "Twur29wRioSXpd3pTijEQ8JMWowkXb4SUm4j6rp27AMjquBpAj9wMEDW1h2t4deFutuYJwAyWsYjbt8oyrjEZd2",
  "key24": "4bLGtnxdQuweJ8LDRkzUaLNjcsBPjyh5rf5brT5fSwbqArL4GYE3CTnBqDXewEqpMpKmaGs6LnhGE2xxyxSUCdoA",
  "key25": "21Ft8s1SXXGEshheKNy88UtPGtPjPY2bgiKXUfvUTUDjCnoGEQKDXfNVJ9hzKahQE13y8ZR6Sbbof85Cj9Gpw9Pv",
  "key26": "5u5WoJUc3bnT598J4nGjcSnQrYY66ZTCUnJKjXf835KAmj9VpqRYNqJusuaJDgjTqJ69fb3ecgB5FF9fFYPjEmBj",
  "key27": "4133DxHNGwySzMg2yyz9HYB7qbKnWGWdwZixuG4HDpfeU6WDLGRNJzg4htmSMdz57TSGVaqRKpLD49uDdUh5R129",
  "key28": "3pQAwwtXDNb39XBmwi2o9cUfxmhBd4vwFp1cWY6SFJzC6oCEVjtWCQgoV6f3SKkkUaL12HwxnYT4AFaHxZBnBE3z",
  "key29": "2QCxamneo3PDsyq5k7px4Ry7tff3vGGKiivG5J8v2CmyTuM2geBe9BF9Cg9pNsyr4eWf4WxHDkwXFVnapoCf7AP1",
  "key30": "2yCbugghHfwsoEoQWiPPVG3oeX7Kx8Ldts4eXHPe63BcM9gtRNQuaRkVxbfUjFbETFwDRa7Vvr2XN115aBbFSrnR",
  "key31": "4W8Nggvt9YpCeBNFgfdrD2hk9C8dPpEfE3DJk1Vq7tEpvQ3Z58QLdJ6jVRBiamnr5Fvc61co18So1VqpwDehRGJF"
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
