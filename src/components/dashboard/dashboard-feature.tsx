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
    "bJoLy5ssHuEf2nLGqBLo6ATHE6Nrjh4udtfdWX9oXC1FMLhgkQLmn6pmCQkNzYmsVV5dyR9pyMgXX6GEFfjgYrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f5T814N2r4SG3DYugqyfX426mwK2seNLUxgk5RUGexsqH24AGxQEd2iKCxGnWdVpYdDPyUUbhehWqtNn1t143Vw",
  "key1": "5goqn8DVtTfa4VMNBHmy2QMzKRWtjPKuE935U2WKAeoGTp5tVAn9o7Yf3cWMRibbg5SYDvt5wF4pcUjdrHRpokFA",
  "key2": "3K4HHpxkLv85RjPVBH7vSvwWB5fRvm1YRBP4xESfkoi2nbSWKncHyCefRGTeU12wXwHwvjYddg8Y844Xo81RmBas",
  "key3": "4e7e3A2Ywfkf3ieUo18nR5hvAoyHzuA7kkZAokimMCytjpEPusz641GHBAwbjHbFfmYqEgF2jWvMyT2XPWNDabGg",
  "key4": "LYqqdDrpunssefBLKFnrt5UF5hHBg5ywAZNbLG2maddNCTui64yE38XqFkkXAfz3PHteHgisuMsorsiw7Xq1Aj3",
  "key5": "33778AbPCFjErm6ouT5cnT7g6k9V7jFG5vmxMSjJCUZMniFYbbEKw6E8XE4D9gHafhNBQGFfvsiv7bfuViryPS86",
  "key6": "2Kn1BguJtZVxBeAnbMGZp1VzHXhrR4KHCBZezVa77TY5HYnzVuTruKejeMkNwdJ377hopdGzHz3AFaK6121kBtbX",
  "key7": "3mWhLD7FPT6cXZVdafAG7nrAfjs4pnascLUco1STB3T6GsYzt7ZPtXd8dL5ERu9CYCpDHN13PPVwKNGrV3Uk15WY",
  "key8": "3AxURgzTs3DqQu45j2ohfNwXnFN8Qp62mHBRa6GFjyotRUnrA8KQMXaxHoKAg83qgyUxdVNSYKLx4SntCMKxy8Bw",
  "key9": "3bF8hXegmFLK7f4eaeRr3wD4h4QNV4V4J6YNyeE7v9tscGLqGUWRVADtMLDUxrNexYnuzmKf4pFT29JCfbes8S1q",
  "key10": "5AM7bv1YshDP8V8p9utCP4Y1cX4CUdoq37M7GRXuwv4yskkmqkTnb5BsQcnp6dGC2K4yhtBnPPs9tQFp71ftXTFg",
  "key11": "KRDE7HHZpbGEa9DRGuLMK2hehGtB4kjCUNEriF3ta174PVMTMBkbZhcbWfTtGGRVhPAT39PWTwtgUgy5n9sFwPF",
  "key12": "2NXd4gsmJQ26wrg6w938FF5dCBvVQ7ge2tiGUGvEReStkM4di1EBs9t7iQ6TZWk5jPLvGpXVMNxp8GmcNdkEir83",
  "key13": "3qNRRTp4j34So4sZNDSMbNTzdfTCXGAo2idbm5WYD8kFXKckeSehDqiFmUbcKhdBGgdUwEN9aQdX16aYagiQFH23",
  "key14": "5jop1iqaSfExJBnfsHZ6TRVG2SU2dvRiaBGPhuQLKXMhfmSa6oGJEYqqGVf7kUGbk8suP5JbbTagmXZ6hHiCAct4",
  "key15": "34oP2CqWt5TwsEt84KrVXFm8roGK8NQiCd7VT3Pkx8ZCLBLoESNPRTQfwwZKSN9tJjRwpXbfScbuqXUCJrcK3XNu",
  "key16": "x25jq1uoLXiRip3pZi2gWkvjMjZrekmiewok8CAm6anBgpE4pmRXiMMdSoE4oxSiotr35zbbN65fAsFnJ7zHgiY",
  "key17": "SnLiFnH98h5kVohAG4GqxBaouEokRS6i1pKqYSz44Fe6nybeMZXcCjdYskSjvZRE8iMhAMmGvxfQqCQ1zt9swNs",
  "key18": "4ogWkA3W5rGATth2cYBkoSH5DciXBcajHFRshhduZRUzgtahaXH8FUfTdxkMmFD2bN6GTB4cPSgGPpX2sSFzkUq6",
  "key19": "gHQqvxVFnGcFYosRVhTKnF9x6PKbgZc1faBwQfoM4gAPKfn1bH7LW1T3Yc8EtCndft7nG91HGgcvRQ16epdCdDE",
  "key20": "51QsbBkTSWjiMNpuTC6CSktLH1hSGRuweg146fN1VYnDGGMyvTZxgcbFSWiozNSm7oGmRDMYS7KE7JQzUXfAkACq",
  "key21": "3EzyQZDbn6UfmY8NvR3ouUyiEi8zWo7ftMrkVRY8bGysy5BK4Y57L5Mr1ySncTAVPetHL45z9oWg9kDiAfUEGveA",
  "key22": "2F3VR5HpGG9oZHaLGkR2cTMCmxhRvqmWDqJ4kjwzdNKJa5i66J2RY6rAptvkMGkewtgmWVFBBdNn4nBRvbXNgxpm",
  "key23": "5AhMGKYd8sxfWjM68bHbhjLrqKcjWry7L3qjJfaEE9G5idPM9NBerafNmcKLb4VCkNjgcswQE5Vvv2gUdZoTqCWy",
  "key24": "2HGgHvMoaKLtqvDScCeDHNDxxHyz3q6K6R96JGLURYoFBbjVdf8L7xdg9xqWGaMWNiEkCvcFY1cj8x8A4QUHoFjD",
  "key25": "5Rtxh4xNgNzXiCmu1imhiCzKvLRE1trC7yi72kp4rGg7Zcf3RtWRATv3rtF5cNRkJNgSnr93jXR1KKaFp41qnsv9",
  "key26": "4Y8QR78xjkvpu4WeekjHN7LpFNFa7fEgsuWtwWx4AMdMM6RYQHBj1atE58df3q6wL1WrXDzcb2jyugCC91j4WFhg",
  "key27": "67bjaJis3dhGnix5EK95LPutq1YizsW3RfD3QjKpM2f4bpbgZhTG6SVwpxFd9C9QtdKGmoBrB8XSEeaV9TFq4W7T",
  "key28": "tos9jKLZd6KNERiK6qKod9BMru8HJPnWGG1rFj5mycyo6ywj8iTbZ6f7qJAn6FL3MG4eMTXoWE2jSLBtPsmKzTV",
  "key29": "G9p6LzdHiX9XrPGqAhfBD2fgWdk5RNrH5HVtxd2GTFyZP1pHs5Ds6b3ZBaFLP7SaRpwQ5QFTNVi4cUNtWVDegwy",
  "key30": "2QoZe8A9Uky3UHDapUcesegVRWrvTB5KaHGaaPeh7VMUGmYggWgP9FQZkxssT6GivbJe4zHK8Xy9fiK1t4h6B4v3",
  "key31": "5LwwM5qpWgtYcUDYtQc66bwJ5p7EZ6S8AepGA4YZSY15yveYhTYc1NMqr73HsmjBuXBi4MFeFszxa8H2WHQ8vbV2",
  "key32": "4gCyKvtMr3AgbT6y4HfEJbreH3kgSNCPR2zAr8v9LndcNPjZCHdWxkXZhcGodYEam5Anr7UaWCAQptzx7rTgGeH",
  "key33": "SeKrGKT4udRmRbjN4o2cMuEQhUG6Bg4aAfZwa7Xebbd6DjBeMoVEuiVJVFUw9qoGPykZzFXUWzo7s1ivoyfA6pi",
  "key34": "hcZ9RMZ2bohfT9Na32ZDGJ3TLLLqNeQFxCUshsb27rmNEC1L79rmRkATUCMHEMc38bF8qLYBhE9VntaB3tQZkCa",
  "key35": "3EQ8kKScxBXerkF3CfzgSKNDZmuHd7p4GzC2cZyqMauRAJ25cWNMSrN3ZcNKzUajXgPdYPKQfPQxuLMqxUvDstAf",
  "key36": "6jPKpcaxfCMGovuu8g3FvwfY3iZrUQNiN88ibfB6ap7NsZaYqdLS2iTsJKUfkD89HGUtKd7nZ654vW4mLFgShEa",
  "key37": "6k63RRwXoF3KsWLQxyzdru3tx1YQM91fsU3x8mGqnaACMCq3yS5oAabuHFvpSxPHKEvqedJeeM5C3YmDR7gneat",
  "key38": "2UWXsjSJqpLs4Sgjw6k4usDD4bXaCzw4NghsXBcuBR8FodbaSaroiwLbg8Lze8db9x9HMshPUVusU5B3chVGaZhm",
  "key39": "2ruPUJGupXKMoPjC3LsfogyL2VJrJTJWVABysebJjxCJgc5mkM2rw251SDYhqn3egwJvUHCjhwNenoiTdLddvHox"
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
