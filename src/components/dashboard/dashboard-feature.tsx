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
    "39THd7td5RZN7Z1wkgmviXQH1UhQe6XdUm5NARiyA7zimMsBiG8kDWpRJrDEv8W8w3Xs4gmbfzecATrMBvaUTq6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PPcFVM5G1Ki4TCwVuxqWww5hzot2ZAFgiP6HqjsuZR1UcriP3y4Lhbjk3eN4eYr62Wg7vZs56ju3ZjESZT4u9tX",
  "key1": "5bq4TPM22gDmeUfkkCXCLTHirbJ2XR9Hbw3wmK9TyTGdAP3LyGMrMs8RSMjXng3Cnv7yznTUWNqEoC1HrCi6nrGx",
  "key2": "3jZcoxQyhWa8tSPPDTemjGMaGw6meEjkp39gXJDr3Z3Rt29rv8HpnHx36gWi1a7TUSLehp42trjJPdAx8P3twhyD",
  "key3": "5jmEgGZCaC7Rm1yhHhimjMZdwvQsWkTCeZpcSCcudpZ68Wvr8x4mSCZH199YicT7ZMQm43op5T21fuAg3KfUYMGG",
  "key4": "3VLURiqtpRcASuBpk19YiVPfPtfZFkeaXWnSjYxkoSMZSyD1TzUyu2UXHoyosuBua93t4V4yoWbohobpwnx7t9pM",
  "key5": "emjMJ7BMFSBh4syRo8fL4xbUChhd1pPQnWnhu53oFfgkyLbM4QjKmcxjrSbceAcAxGfZnXiEEt1MaHXytq5Qt9t",
  "key6": "4ieV7kiQocCkDh7e8aCXnqQ6rCMLDmYwMvUhU3ezSm6wh1vKHeH4x6WEAmq5X5WCWw5T7acowz36JBfwJ8ohKmno",
  "key7": "XcfSpFiaFQeTUuU1M2YzZjE8R7m2genX5zefkWWrAqYf5zRqj8q8g3JQqspv8YZ7MDjpBip9Hd2aHcBEhepnRGj",
  "key8": "CWWHPHR6E7xAXAAQGcJ5HSTvqqc93YKnKWHi6URzv5BSDFXC1HVovb7sSmG4sbxU8aWnrRwFGA8pBoY5ge7b2UC",
  "key9": "TvyPxKTCnc6WBJepCr5xi4ASks8dkqBhd9p3VEhPiyeoZeUpnGHWbqu2oBMgFRT2CFm9GKjqkFkDvFuDW4tjC3o",
  "key10": "2X2b1GcYceriPLuoJawCVs9qEQQVG1BNsEXf1RqrM8NiaPoAL4wP4NVUFAT16cPrC6h2Pp9s1Ty6T8UUFnNqEBX3",
  "key11": "3U9PhTULh6ottaYRwAQpMi4QkuMTFTbzcX141MEMJgm9Zs5zv77NyUXiWUVMKCvmb9KisUxF6tcG89k3wBD1je9y",
  "key12": "2n4uCKp1KEpJ1PfVHKXVSwRLuK8KtUjvFgRnf8owNhnpJEdErz3BUPSNQCEuDXjSpB6qmKNtB3h5aLELng1sL8Y7",
  "key13": "33vBFygEsnsMwDvK6iP9X57iL5pSRUEbhtGGWyJppzKCXVHNdHveL9Mxvq48p8PZR8GcKbALYxNN4RwvsTy42aF8",
  "key14": "5zf9qNFThT8Jrs7PkWj3ULoQGFfdBaLqBjLUftdgE8tFJWcSHjHz4vBQPfcNoTYzA5SiFAohp3BuWfxwe9RX1bYD",
  "key15": "62LmkZ54fRYXdnCyaRGwPFsXDvnTQnTBerQdGmRMMTnD1akq2s1Mem6YzpXN79nJsYsyyJ4UnhJHPkJ23jTmRQNK",
  "key16": "LBBcX5EAZdNFjxhp2EXT8H7PJiDMPDhKgzLYxiNmvVKaWFPi2o1Ynx6wH7u3r4D7ogZ6Dn2TZ1WXYvP4AQoPeTQ",
  "key17": "3U8sNgn72z3wtmUwYPyW6nakgmSqGzu8x3SA9W9XiyUTXDsvwf9BXQ3WxZZRz861mV4T2BtVAKLRyp2ZcC631sUo",
  "key18": "3jbyGBNvtR97V1Xky6xF2rZ5xZNvcPUwk9YX8DjyPUVkWgDm3q31tRTjPbupfMgLS7LsgJE1ZMAv7MYz1LbVY3Mo",
  "key19": "34AsvFAMd44iRwg4tsheRH6ucXfq8cddTHVhmT5kgtRm8crWzcToAc82ZdQA5f5JPcfovkeN2hv4ezPetmjHcmRU",
  "key20": "5gEyZz8Mqt97iLUJSfFNYeoU5M78M78r1SWKaRRezUQQCwBR2hEkod9kJV3c8YWtRXUuabNodGx41aE1NuURtDzb",
  "key21": "2jqu7eG51Nj1KuTozsfGek3u6TiUPog7uQwpk78eusUH5XhVLE9dGYv6Souu5dN5uU3d53e4HSkXyCnyNpbZtubj",
  "key22": "3DBvxH5ayAL6pHbaL9wUkB4jcxnD91RmABdw4ZdPw4bUG9o2KXshKq8uuUZty8PZrnmRpNdf7b9siAFUYcpBdyRH",
  "key23": "63b5Bpyyp1bCP6MDwuCg2co2aipeVXoi1HdNfXjVrr2YfFPP9cnYnFf3nXJ71CQFyQF6z4wLtpw5ezLE9GKrRgQd",
  "key24": "4grRfMBrCkwXzoeLckQL8XEWJaE692c577pmnjKLQHAxrDwRcQVV1ikpCTGBAW8eY3cR4Uwn3ZRQ7oUSbbAR5q45",
  "key25": "4TJTRey6XFa4FfGsRDehp1u8kxZ7fFyeQyiUEuquJbxNed7hN89wq8nrmLvGdHMfHuje7q5PTe1SEDd4y6KXQro9",
  "key26": "5nvH8p2Fpt8wTvo64f32L2o1zaee7ahRC467m8cnTAfWBvgviFNJoeerTNC9xwS5Z3yUPL3Y7BxmK4aEdsR4q5Zf",
  "key27": "4rbRdHx54KGWy5enNrnc8ks25aemRY36ciCSYMaW2HEBtMLiD3zr29qMDrWKk4B39d2JtJtBLYJKt9S2i4ZAvXbB"
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
