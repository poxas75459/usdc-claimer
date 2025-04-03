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
    "WmRJy1BiotaMyEb7QxEtFTZqXKbtR58U2x7MFWXejgcZoRW7oA4wL6gGaKwsTVzMY53JdhD8L13AbGS8M1G7eov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NGZPqTqV9W52ZFhi8WTQFjxZWQ3Z9FgsvYt6Sf7vNJQVMeoC9hVNtEdzxKaxmh1wE8WFhSmHLufFUrTT417PTC9",
  "key1": "3jks6AqhvxpFnBR9mAgwpwcTPxJa3Fk7huFYtqqxX8i2Dus7SBiNsYRvKbFr8w9aoQ5C6LaWEoyMvPuCtH1Ua9jr",
  "key2": "CdT88hjPiovMufy26kZTcY7P4D41rNPzwZYdrAZVpfjm78vXTV5dJoWhrzwgEoZfyN9rDD7R3SzTXhuLRuzR2x6",
  "key3": "2mHqK3sXRzunuYugaoBH3MaEAPDLfvwsZyBMyjYKdxXwC55FPEJLT3Kw5V73Bu8d8npBhaxXZbdR1yh4ydhp1U1m",
  "key4": "4oUrFgWzRNxF94qNF3yBPGf4NtKhYQL7EKjsXZdZVPAQfVc1rx9nD1fU7F7pA8AUemRsFx4PK2TiWrdutUhdeUSF",
  "key5": "62P6KZfJXdc3fpVfijNb1W9WGpbuiTyQWPRE4ecY76tBthmkyBbqAhhNQbYc6NyM3nNaY9fjhShybyW1tJYYbLWy",
  "key6": "2yJMk2vJASejsi9LhwnNpQgbdSCqPSkYwjdWq242pbPXsekrSDVBhx8PadujzPmXKMhxcpQoJk3A3taYyfeBQArf",
  "key7": "41qCKEz4T9in7sYwg2aHFPejmmtTFxoKeeNzuXtduEdQ8mRMbK4nwsni2RKGfceje2mMWR7Mh9AG1JnDbddaqcDu",
  "key8": "2tUW3uAv8gfaAZXVfpYWSkJHYhRj6cnwSUhvPHg2uLxwEZ6v6i84ceip8f1eNyU2PshEFLc6J7jhRpfDrWoEAEDB",
  "key9": "2ABJMfQDT6EkiMi2KsCPVRaFHVvstFSAUTYM5VARiAnc4wTqyZHuTQXsSkf2ibQMgPiPUiyM4ewUw3kfB6MUhF32",
  "key10": "33ArfqmHtegMrz5PNw42souwhXVjvoFvybGRY5vUnp3w1kQ18LKATCPd6MXXDiz1ZCUW82qedhFdQLicE62yUU68",
  "key11": "2HSQBsJxAVvERw8cbnABB5Kgh7NNfJrhGUCdktYYVzbYXsyQ4vYb8hUsKwvZYbrMaFNY92Xcf5Ew45URu6pvUaNE",
  "key12": "uzSsey9DXuXftnEBU6o5xX6cvjXUXrkQTnzU6wnNTSYLSUcPUH7Dwm1KpTVjngiQwjFRoof8DWoQkwtEkx2UZYd",
  "key13": "2BS8PNgXQ5h8Yc4eFFFbZzCCyVzYeuKbVW3zhRyRRJYMawJGwRKhrV2D3BkwVd9P2UmJN5xCHrjTdKAUVGRHcgkB",
  "key14": "TroNuS6i5wBDCoMAuvTbXxCxk32bCkp7aCPUiVRVwBmMRYfQ811czsePdTs2BwS6PvEBTsS9Qz9eFsZPfFd12g4",
  "key15": "5tQ9aVwBWV9Px1Zqv1Y7G4c1haYc7kbcS7g1ZG13GqGfj2iWtR8BuemYUiozVVFguWBaMxdqWVzC7nSDNdubGvuq",
  "key16": "3mVJ2cRR89wSgG1wy41dX8oEgN3ysayywg3Z8Lubm2sPVaN93rrPbnWEep9RL3Pmpwxd17wJhcGNAaNxmqJam2BB",
  "key17": "3RN93AnQDfnVr1SzZHCXdNoDbr2M36LXzVUfpLdkxZeBFLdEYZy4yDWtkmAHDcWWhj7iVoc3LHteBN8y5AGby8Ug",
  "key18": "3DUNAyhjLG6YATjHS6WfYXVjkbS2gFDdiJjrzpFcKXrY1S7LqspY9ebo9A1zaie23uExiFsx6QURv4R9ExVK4dNg",
  "key19": "45bUvHQVaY92ryUbYcC3fS6KK65dtctBr8gndEwpX2PAtx5jBoMgtNMWnGZVWEBxqY7AwUASC8bws1qspxXshbnN",
  "key20": "3jXhihHFdrv5ef3YTiN9DqytggRZmwS2a4taSAt8v6RV84cpHLT63iNt1otGeX4ABhWUcc1sMF3Eu8qnpn1d1jWq",
  "key21": "BXC4YhgLk3TdqQHMgCzxMWfsYzmM1uC9xC6q7diamAaFUynr5Smvh7WJ3Nyhvrx9EDXapRiKbXroQJ8pFrRBT6y",
  "key22": "5qQPcy3fwfsCc8PFXiJqKPrVrHrF4YVGxbDgdM2fAHkpDj3qSizy2rWjHPCwcF2YJnbj4SjBPFpMph4LPBaysijf",
  "key23": "3pRRfCeQAkmi8GV35bWeAwanU7a3AHXD4U4RTuJvAVUVQieWVYUh2eXYuWnv8AR4wUTDDsaAvpzrZqHnwVnB2quF",
  "key24": "475N9gSTcepsaQUEH9cvsvqE3Ho2xsVtgt1vj21qLudqJuNyJvuBMZdv3Wx6yKeqJi6LWRsAAAhf8bda6SATP8Me",
  "key25": "4FrAyhxYqL8YHLraYZyzjyS8R4JnQUffV2CdNQ9ykpRAZ7KFvJpWhLREXDhwz8FwMt5FQs4r1MJX9WQo96WQHqur",
  "key26": "MUG5X8rFpx8kSaCNshjftPTbiNLtwnnCMBbQs9esBCyRZqfG71TpuD3MSmxyeULxH6kjGgDRwUgrGXmRLaBcaHm",
  "key27": "VDZx1fn1W1xPCTMb1WH2chwpfpusfiRYAJJPbsveF3njEjeJheFnkLuKrgXjXWZ91WzP9m5hKXtRgzovBEW44kV",
  "key28": "3VBRt6TG5cTKuqvEzqKkJ4k9gh86TbKiEXi2aZHgKAqXs1H6ETs5cPWKdzpueKSsMtHSi96LbzEKywoRmA3T4bqb",
  "key29": "56wognThcfYh8vtttW21WKTgxcVo3pt6jAzwkZRzeePfcGfk6AcXBG6Xd9jg86aJGVz8bxh3Ftg9znG7Mfp2XqVc",
  "key30": "ddSd65rtpnyRRj14TKUbVhCqMjfS8RKNKsgknB71xkpj5u4nFxGvSbNLuKujfA3H6xY5eR5b38BKP6mXxtaCWZz",
  "key31": "4T3CsGo5kYkCSAN1fU7whpgQDs165Sv1wxR29BXNrhvzi3TgGszmKWr69fXPvu5rXXpa8Jntams9dSmcscaL9w9v",
  "key32": "5eUnW3iX1vis9HsggxkjKVZLAksDsJYWiWCQLTTcYakBbRo2rSi72BPsXQE9V2qbap2CT6fdMUgCiZici8W1Dauu",
  "key33": "33PbN34JoS1vYfUDGBRkezQSnK9ArpQAnJjvxLuJQjDXH1Z8YG5upPDN6e3X4PwpTAS7eeuffdpnbunjEgRxFVc1",
  "key34": "opycK2TEBStUcyzMJFfZ3uFdC5faar49xaMgPCQj1yPqrRyUkitM3ga7f5dBqXZo6T9gMBdGnbxgPcQASdxko85",
  "key35": "3vWW5Env4jpzRp5mp4kKup5pbAD9WMyzGojS7YThPGgvu2ayR4buuzPcYcMRnB4gXF9nwvmyAt1voHLFikttyrwi",
  "key36": "M3PU9uRDRWAznhFwV641eWMLKXHonrNWoft8jvKDsqCiq28Su2VoSg9bAn9BfJR3ExFG3rYgyVbbABedYKumbxr",
  "key37": "28MthHTS8ih2bYTi4WQXwUgs4NgCSeZm3dV3Jdk6LbGjhyWSXVRwKXwUp2qTneMRNusghmUvDmLjK8HcWvCbSNpV",
  "key38": "2314uurFZJYNNppFwQ8p8Z7GoQEPHaRyaoUaFKPwB497g4NYdUVrTmev2CvZSC3qqp4G3mA7sPz4c9Z6jyRsMssa",
  "key39": "2CggnGKT1M12tCbRBbwJ7jV9BZHTwYTsXP16yDuMdfM2D2jyv5ZLecQe4kJttU47jR8hby1kHht8k6PEZ9EWuWLw",
  "key40": "3SDXRvpzX8ucbVkLxwXpyPPHD5bZRXHPDDJE2RFnoqQMseMfW4Sp4rKB9Fbr12pAYZEetW6VEi9DpNgcJ7aVYs93",
  "key41": "atcErWnFohyyXyofq4JuC1H6aAKpr5xpZCJxoCA51xN4XwLVP9W7HkmVHNewNwKk65jvag2LBgfacH5VkN72h2J"
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
