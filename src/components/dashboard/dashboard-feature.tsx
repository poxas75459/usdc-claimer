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
    "4QeV5ctPTchkpBizegCL4S68qq2GexkJsH4fx3RG7HzwjJnrfiqpaqUThsLGKnH246JqdWpSXd5XyJPH4T5kVURv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yWjtp3AmR5qmVf1PWQDTGfgu6sVM1gWMaFrgNuuN72V5PjZXd3kuMe61pGGKnwNfA3p3HjRTNBnLtFbMG1ovJXJ",
  "key1": "3akZc7oL2FLgbjju4HAyBDXYkFsmnbKbESgCWpbzWTgdaZv3YtMVpqeKwfBqnaD1WdoJqtDc9pZ96SFVtJ8ozgKp",
  "key2": "2vQznSSt4bpRWgXwdmTZoGxSE6opgf8ZECnDMxkTR8mrqFpKxbrTWyDnaF8HD5Z4EYRvApvfxc75kQ2Yu3HMtMkW",
  "key3": "28mV1RvRfVPtSvDRHx8XgwVxN3U4fgUfYcXCPKKjZwgYeSfheJN66hVf6Ajxw4UNHi2WzjKoDWFAxo2aDUJhp3Vw",
  "key4": "5NvTyreMGoYvnvJWtS8RexDptre5Yz1phKLasV8CCaZb52Fi2T9s31bM7nTXUmDA8cc6rDJn39xRKKFTRUVZ73mG",
  "key5": "2BBaWVQsitDUcrcMCNJmuo85qgrnQ1zaevq88FxbnneWyNeNWYxuvVeapV7f7j38WGLV8BwggakC4uiUpB7HMPhU",
  "key6": "4rKFEiyAeHHPHDaL5nLd9c8YNWsPY6LkVw1EBxLSLGiBrtNWiUUgBYDLLVSstJk4adhcUovgaEP1Jm8NK5fd5fPG",
  "key7": "66RAZXv386P3exv31EFcWTrcE4zL8K1fZ8UXZuLxrn72ManMc9esqeCiJi3qy21HZ95ZhqQrX2kjHX1MFpVDJNxh",
  "key8": "2jCwawpmH8GvQ4s1oVJNSWYXJjKtRJVJRFMzv6GSXj5suFWnF4kZDtDhoa9xoxPVDKSzcaLwWasZ8sz8YGrDrLXa",
  "key9": "4Yrbn7K5BYXtW7UqumXBUajMYL97jpy86MwFNNdPK8hfJVgGptAguhMQeUsb1GxijeyxUF4jVNtb7V68JxfYExxk",
  "key10": "nnVhRHrTT5SZYaHmufqxcbsVq5dpeXkG435rkDUgzCHeUNypZrSbBXhEXP8fKBDEJgj3J9Xp5j2q5wDL7t3C5oR",
  "key11": "2Mq9q5hYmgKSTRTQMwNDtxdvrE8QCfWxxrPaskAv5CMtm2ojH3GA3epR5zj9buZg1dBNFt3LocZTxsBPwBxJNvr1",
  "key12": "311rrXNbmc4kPtDGaGAmDo2hNn9y9GAuJVivQcJkE6FetBjgGFJ28Hs5Gg2pBjioxU1UfPwdpK7uQfVmW8FLJwyC",
  "key13": "5EwLUCXhP19ZpfNRzGcxpjPYfQpd6ErUPKUzQNbzTeD9KGqQDduRu6A19i25JtkRq9Pt9sPjPBNu9tDeedVM34HX",
  "key14": "n285sfc3C6ZNFq4C89KS5ReSzABuw9yG7cAJkdmdwCKXscHkuCpDCbSUp6jghYuwU8bAkKpao7W2PKseeY5xE4h",
  "key15": "2fETjwizXyHbc6b4q7rtm58fohvh6ooCRMPtoDe3VRQwM2Nekk1kHjxBxNDLEDoN5pPuLGYcjxbJ1QkRP7j8tQ58",
  "key16": "54XAhpeFCYHAX8zWFnauookAFhb7ecQhUnUsqYQy7Nrqo8Hcef3Fo26P1ADYetvRQiT1tR9uYDrxhfdihNjrGV7T",
  "key17": "2YVguQx3v4pNZ1uThs9UqcQ5ghRjMbf3mx4PEXYe1z4BVSP6JcYwErBk89Tf3NLj6WRqwTfqdyzjkzUUCzHjNais",
  "key18": "5YWv7ingahCxbRX4dhoAD9Tiuj2aBEBrH7mKmYEKoXwhpuMjLPsTpNBhwcwAaEeArP5NiMvEn3qUr7uMMXWftjNP",
  "key19": "4rPE3CTkhd6sp4TkHKK4cGwii8VitNRVDuwK4xDrq9c8hEhyHRArgW6zeQcLMNUuraAm7ebQUp6GrGmJgsEdMWUX",
  "key20": "4zN7CgEma6UD2N52B7jxp5Ryz1FFrbhcjRzVmvC7sZVXGZRrpmMBavaWUxwy6iJujbWoDA9v3FJ4WZzdEKYzvtcR",
  "key21": "4Ws68fJm8aFQFZzXLC4JTGPLesTCCWBAk9EeQNJqcDPEowpzetbE2sR7MVAqtvDopBaTam3h4PqTP9pEViRc4gwZ",
  "key22": "3rEwnFygspZ2YU1ZjKjVvgBpu27VyPNxSdG5akajLc4XyefFg4aeTzkDRzRASm2DQZJTbGTNkEUjPBNQnEyg2N78",
  "key23": "4KYPYYqvnUXYsKX6fYfiSMcCpVHBk9jSf3UAieecms2RWmHeBGxydpHjhT2tFwH659oR6o464BZ7Tz6gVdEy8sAL",
  "key24": "pvXKS5TTpGDaRva5aUhcM7cYgpzkeLbzUEmA4mwxusSHWBsGBR69XS7tRezJgrF9RuALFeP2yboQJJnRidtyxeS",
  "key25": "RifW4eVPktCvz8WUbENAtEU9f7834ETXdpf2h6JkZQEjbWUirbdV5tvjFUbVZZNeFp4SSTLBYnk56WW9BM7oRos",
  "key26": "5g838bGRbKP23LX9rceT4BpyBJqV5VSoUWL434EoEHwSGBD4a3kFqUdaPo94Br3NpG3n4wUfykh3LE37TPQ7HbEZ",
  "key27": "4ini4XTmeWTZjsPktMKtPfGjfyVh7hAGuF2NT8AikQDD68jYHi2be8K47Z15mEgtJ8dvNc73bk1fSiuxDFKNPrp",
  "key28": "5kzSVWjcfgQxtKZZR7mKetEvQkrF1neXn3WUAmuX1MS7DDSbHFRuEEwbZjL4cpSnDZUr7r1itGPkkXXFqiA8ijDD",
  "key29": "3vs56m9EEt2AnKDR36ybq3EzjJDz9CnDw19kJQTN5d3YDL8F1KYBEZMeLKUCodwi4QVR4PGTSz9yX4PpG8S47Mht",
  "key30": "giesUWoRpRbF7UvVNupJeYpF6LqR2v7qXSdNRkr53bUFMtt5VmGLr3fu3uEFc6tk9HNDnKTscHJQvvSiSu2gdof",
  "key31": "3sFgyZ7sAFnvTZr2kPQWbUQN7Q3NvtNsxYCPCDJZ2s8nDjpkdQJfZNLbra1fZxGTXX98w3BjQ98atHKXFxJNaYQ7",
  "key32": "zQM6YSjBEkWcWwBRJVXAqb32uDLo4XgSfKJGFBgh3PAXvVuj8PcDjAKk3k9QDtAzaDmvTNeNwRT4bnnvkfZAMVr",
  "key33": "2nipwub3Qqq6nfAKMLcnmeLrMf3kApjHgf8HAcXgT2neLCB279AXpj7nuf1cg4NF43WxDtS2PvpGoii7xw587tjN",
  "key34": "VUuSKemhZRbmGYWoKWUhcDwPVeLyfX1SurCAuaAqajpXN5GXezZVjs9iRA6syuzAnzzeGbDB1ZqPNCME1F41ZVQ",
  "key35": "2fPqXsAg57MCQYbBxCMPiuUnGSVSJv7Fk6U5StAD3b4PeK24YU5oJh3HTWwpdjkcLNqbn6JzSXPofZXQGvxbpu1X"
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
