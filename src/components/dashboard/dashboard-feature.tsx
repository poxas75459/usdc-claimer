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
    "odmbew6ttmc4pTUsqkABUXSrZMxuPwc6zfFtCL8V84c5p4mE1X8bmmiPST4HYweVECKVA4fWGH1SLdjPrhxFsjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yVrjDwkj8nwSkDmMKyZE37wh5TXkwmwnjmMWb4WXvKsB4HsXBQ1gKEp6MrAdojERwj1vuvNrFgz3tp8Fz9ZaXVA",
  "key1": "2ZaLhWPHQGGCPJjHSwHJ55WKUhHEWAQzwrBJhu6hqDj1Y3vWW9mxoh4aCA88in7BBUDF156eRcJt9cyb3Qzznnst",
  "key2": "5bG2rTGU4csPHQZswQ8ebVLaTsnrRpRzxGUfB1g5Wcoke4sjbADdiRNdF46VhuPwn2akLUv5So7HvmEPAU9ocVfn",
  "key3": "W1JNaU17ukmEaDAkRLcHp93hnyjyvx9JR5oiPRkaNPRkks4WE5QH2CZFgF7M7guBUXFdMvFRwZtXPqQEqJWnwSV",
  "key4": "662Pd8W49eTrJhwG4pmKQJMaMV2J1f9yFczWeLBY3A4wUTZbxDZu88KAcs1DnzM9FUcDW3zE6JkcBHrhKHe3LV4N",
  "key5": "2YFaRBEKbNwCyRvQRi44DEu8RKvR6NNygDH2P6y76bp85wxi7sXaS3njU2sfi7ZhXgvCFy1qHbebQJeSsp1NU9wb",
  "key6": "G1EJzx68tawgo7twgjQXyX4GtAN3sVz98Zsx27oMvscKLRhstuhjucnYvMtyNEKRiBMTCcP9YaNSQxyeoVd4SnG",
  "key7": "2UQwEsXip9FJUdZwz9sQC6zwYPp8grsozVdNaq1nZb1kJsCvz7ibjSR29q8gf67BKeZW9XMAjsmTTUqsoCZJVfe6",
  "key8": "2He6FBBZu4rka7F4BGby7fUVRrq3pk5Nnpo6Ea94q1E4RssgugemtibX662ZJ5YjdvrAUAxJc5wmcnGMNPHy3SSV",
  "key9": "2G9wwrMGmTeQmKpGRWj2Gzo1TYoVdLk9tpMWd16H1Zn8Rrr68rmCF71WyX2gJnD1n1BEDjcprRpL1HANMtGLdmmk",
  "key10": "wWpeXLrVhaHbJvq5G1jj3KfA5XA7vVhktVdjtqsdN7YhBJ5BoP1SXKCW4KvER8bC4AhxbPoc6EKs2iubwchhkfR",
  "key11": "AmheTm1aHKbbjwa8uYd6EWhybGWLe3mQSj9xdJyfxQHPGH2Yct8YLPsr7k5rqhbzDoSCjWqfLcAyXAhDcLK4THb",
  "key12": "4EgoLPYtvfVex6Azp4G2PwN7xweUPVTHK767YA5gtHwoEyqY4LQRWq6oQ7gXVoh7Qig2E4z7PBReuhEJDemb7q5Q",
  "key13": "3mjFth4MXnVCZY3zgGDnXdGXPefsG7o7NCg9AZSQ9d9BMY2teyESLjmyAyYJgixfYEpk9hBMYYhqepk383xn2NT5",
  "key14": "2UBndWZnQhSQDoCmCioAQSytGiSzVEiqCRHrM34Cj8Ac4KVFm9wVt889kY2nWu6iQtfoYB5FZNgb4TB3AoMLQBvg",
  "key15": "4MWknFovwEaWsizbVKNgYDZq2iJnD6UsxN6grZx48CPzZc2JTaEtbt3A3EgTARK6YhUiMNSnFQed2AgwKUKUXZYT",
  "key16": "5VPALEX433PVHzmy2NwnYsDrV1qPkv9Nx1yXxdx55cKNt5DK3wKB8H5JtA999cucvSdcVMvkNVY87qgjUsgy75jy",
  "key17": "5NxWbdfxggj8CFrc3VG1iEgrJwtkUk4s1baaDbfg6oR3pF9a1KgV6TvFPKeRPkTAA17FcUm3PPAUdBDS9Ra3s4pm",
  "key18": "5PuriQcqhqdT3oSgH2k1Kcypia9F4B73sgDXUZcZE2VsJRRaf2HuHkYe5fh8TndMPZX2nN85aT8wnc4zjJbKbm2B",
  "key19": "5fzosstMVLEy81wd2c3cSXHvjcDN2WwswhpJ81e9CNDCYLSGPdAV3D5FsgJkEdMvbe8y4kXAMzDD9PkhJG2CiLN3",
  "key20": "p9Sc1LVPdw4yCzQUXabKoDzxs1VjBD6fDSqkBAYWU1sEYtwHfexLAX7Fq9vivNgCEp5xVM6A1adDo3QzTNnAukH",
  "key21": "2b2poR58R6shAnFCXvoGeKsVJDtiFwPjb7yYT36FBMUnhbi3Zm8L4uD9B9BqQ5ocUbGQTCoUQE8xJ5vmdU9k1f6e",
  "key22": "2RKomBPcBTnxmTetkyWtameKPJrNupawbMMCKJ9Jzsop97wLnotsbfL2EYuZhWN2fLKkDzAYYJ2f4TupGdA1JB6H",
  "key23": "22SQCBm9HXkWq5V5XAeNC9o9UegnfQjQgFT1hxbPAqeWjqtxyvMQiFosiN9zrwsEYzuXYm7DKZCfaGq5V4HrrjkM",
  "key24": "2PRF3A4uqxAC7NupZYNR7EhZ6vt6hZDHhqekaeosJKzcHs4oskti1dC7omCuXQBFVReX8aKwgTjjpts8xUnPTnvA",
  "key25": "4oXxsw9Qquq3kYy6WqeXQqCsqt2kh8uUYqGrr8hphTPLMF55JpVdxKQub7RpGM7CT4m8XiExw2dnPbgTCJ7dQJtH",
  "key26": "3rpavUWm35Khh4Kg3nZ7DEhz8cjtTmJDJo7ZPcBoUpbNWHvnyncXJGCfFEDKCjtFWop3zNpDhvpebiN7wFRBGXiT",
  "key27": "3AajFQ6ErMZxY5yUGBHe7jM5qR2DwdSErWUg7rcFDWdYZpLGETaSVN15aefq89YdYKBsbAazhP3PuTwQqRXq6Kkk",
  "key28": "4BzGKzXuw3crKLF7ayv6ZZesm9SvZA9uifhPMqHeC5p4NTMcXjVU4usKX69RVr9Gk6e7qJeXDQ2YKdT9AjjwZ8id",
  "key29": "2kgFXKx9e5hCMuMK9xFjLZFanDHYDrtJsFt4DnU76NGAjZ5NfAPtpyn3Be39dvXGLrkEqXt5RUQQSPyRj5wtUwuo",
  "key30": "63SeExyPFbWA9La3FgdLhhNNaxtLbuVQiwCvtW11Qd8Gv9KiDesutsJmuBk1XTpzkEDs2Gx8NAb4eMLnsMULzGmY",
  "key31": "tNJFMYYpA5wRNW3mcNCxSPvgCN5YaEgg2w4wzZRWZcf1Y1u7uZunMEoEo1DR9uDDrERKACd2H8Ge9ijMEybRHxh",
  "key32": "5Q2W91WnfZWtkSfhewHotpLw1Ka82NUc9a8KsJGHGmA6Fu5ZbgKUok2kGvKq7k2gYW3SPs2C3SvU7YxcF3Tr5NgR",
  "key33": "3JxZZLp1sErF3G8ioKUTEjgtv8cjJoSvuRkBmNns94YJjN1XhZkfnZKmMWdhFuXELVxVxDDJdETVzMicv6dpknGQ",
  "key34": "5wDEk6FNZqWjrMhGKnrRWU4G8nxvH7hgmCRCGv9zZviZRPcAV6Zajcb7q4DVQR6JXfjCALEbfHGk3XwAuYvv3FH1",
  "key35": "5ve8GJ3CzA2NQuapyRSmUz2WDtwSudpUrpQ2z3qbNvF66yU4HewRVeVbTH5VK1StDh27W1XahuXVEoKpnaafdGEB",
  "key36": "BErHpsTLt88VQeccVCjBiTKumrw5cNWYZdEQDJGMejKEqHhz1Ne8hA3KxjXLom8HAjZnohto7ijp2CYaAbwrr4h",
  "key37": "23P1BosAmLFxDawh1yXQBwvpA77z97VCzXCBgUP3E82K5DLXMNDdmNBZPDvmg2rvW3wEVgLNhtjwyWwV79JQdcA8",
  "key38": "4oCqn4xdbf5WkNgS4F7hhyRmaZ2it1SDmgZ89QyW83iN8FWDFLgDYxk9rDdZ4xEb4ZAnA8KiWV33AYnAybfaq2Zh",
  "key39": "236e49tqjPbvohqB7TzYz1C1fBnZzESPEbhyPyYCDvpeiF21G8pY3LJtXwVbZvSBE6F3xFtf69NT5L6dQheDS9Xd",
  "key40": "5ujF8TYn4ad8ZrddnEt9MzoXdsTVNJirxokFRRfvkiX5hr5egxy8n9Pr44ZDAQp5VfnXetNrt2H68pUA8Ued7Mev",
  "key41": "yKagj9nzL5p1JHcf1ziUnBKAcN4TBPWFa1JWZAnzAmoPTeSAnLRBhdSkduWDGWQGPQzLW5LUc5JkAzRxTMGvQMQ",
  "key42": "3MEMkSv89aMkDfF8uGeaoZ1HWNB575PGNhcAbSwitjVxnMhzpacQqSNko4mhrNR1VeNQhzX7xR4rZfSy4vCBEJ9o",
  "key43": "2rGXwBYGdPmjYhSejrHjd8vr7sG6LMV6ihL7z9E9xtNFTvkKRGPqeT7g5B7jPUqAxTH3MZxWhgvZRC8q2bZJNLuP",
  "key44": "SG1TJP3J8xBgcsMHqp1VjS9nBK148qYqNj9Kemgmwe7SrdvvWBbvhvEcbtZQ11C3VnqATh41qBUAJXNDJ41zWj9",
  "key45": "EDMEPNQZ34m6XY7B8xqG79iBCjBfkcx8mHimzjUWhqpZzkGpXBDQcuYnKxK3fo1bycA31UF3rWD6boiHdn49CHf"
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
