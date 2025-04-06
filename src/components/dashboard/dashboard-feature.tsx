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
    "26JkE2v8ZNSkdGwq6Qx7ZSMgeG77REGBdPkd2WRQ4rBxBMSZT9BiBVgscMdVgJpWMddpfzrjJ5N5mD9gqnDt4Yev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gPmjcWE4c7w6dwjdJA1czzwdYf1UUdU5EoM5dc5XrNsEWeiZULVuf4uK2ypLGhrpgz819MbNoZhD2DvAWL4AQHh",
  "key1": "4QUVxwoxDnAp3ShvE3QQGvX4AwXWkrknv5maRmkiLDghYu66AnMAi2oDPjJVnoATdJREUqcFBFNasEK1Vwj5fw6U",
  "key2": "5G3Fb21VcAyWPY8PmoErf9g8JJdQTf3SAFEM1N96gpDF49zT3aCHd6k4gSQpS4DsYb1ztYKVZUfvAi4RhzHDYucx",
  "key3": "4ZttMFVGuDDRwDAJNpUgZB5ELdUkafgtNXiPjLZ6PBzBxxRHuoNqGhcEnErsDRxCCq3tTVz8MkBU1RmPsYaccKwE",
  "key4": "38VZLxp5einu1SKqW21LeAeCR3SaqozMGNc3v5vDr3VuPp9CtYevwFynGwweh1B4TGH5qzWgkZEK9LN84pxjk4E3",
  "key5": "2WB9RFyEPWKmz9ibe1qf58SpWWga4zqxeLcDGGEPMxuXYMhBQBLZdy54Hq2dQbWEeajk6u7DAFW7Hex2Z3UHodu3",
  "key6": "4MSK4V5CKEq6NiseH3cYwoDfS43sXYjzr737kPqDaGSpTMdcMZnBH1n2AAxhztWGQrLvNHZRdUTG3YBw4cuurEiX",
  "key7": "tYHAB89SiniXLmXHsCBWYLBHVYkuvTZZKKLXu15TwNf1kQAdM8Z8P2ieXierrnkNUm8itV6hB5h1nwPM9iSgSgo",
  "key8": "zP9GP2763JKdV2Qc22EEz7PpVknCczN96oMMbn65P1KoSGReB6X841sBp6wz6pqzCnxbSkmjEQENUcBWo9fjri9",
  "key9": "2gYHpHfXoBKUFsHyqW5D6eWWUf8r9CS11e8m794wi3Lv22qCoBwoVubr9M1yTE9Y36ScEmH7aBzBrnvm6idJ9Hd",
  "key10": "4fySJ2vvSoEdoQQgYs5oV7oWR8QjGbBxTHMN1jgM98PRGk7Qeyg9wU6bJhZ6wsLKxL843sm1MwBE674MREGS8cBR",
  "key11": "2ZNbdrtF4zHmjptiMHq1QggUR1UqQVeDAsmtNfJR1DXpbrEFpcfTTKeU55Qx6Cnd3HTFFZomXzFWe1FZ89tnz3Hw",
  "key12": "5i5atXAJK7CoSMLeqKdVtUP9QdFLDWHh7CdJfGcMtDmU3SYuQCK7T4to9kWok5pWgUmJ6iQmsQ7JAJyirs82VK3Y",
  "key13": "39hf8vgVuHBedneChvSjRUmacxFkBw8LkNsng2azyDr9uFC2WzMvMZJyf5bvT8dapoqKRmuv1fXgQiNgcntgJvs6",
  "key14": "4haME3bWXWHHkqmj3HFGsZicafMfJ6k83WqtgAUBBPSESAMMmRaTtHptX4QoQ6oMAcDEU43v338BdBSX2rr2tLVU",
  "key15": "4ahxKuF4jLThtWqdoZSTnTqqh3dSMfF12RwCNXuQRWsSXocPApE3ecD4f91oWFWN1m1pWiEeoWgsuDEDBLBCw2m8",
  "key16": "PYnv5bKEiGPUqWpYzgcQ1TBScfwfxvdtaUj67VBJfo1hNaxMWybDuCSbBKra9Ge3Uxciymjmy8L2UKYdtJmGZ7A",
  "key17": "4Pc4t2kTN2NGSPDWHyMrWN9eEzFSq2akfc1f967UycngX4fEk6PwJqxVC8nuH5eP3ghqgYfuQhhPLAHsy4Jm4Buw",
  "key18": "42jGzvHYhb6PTPkkxHUMYKhjgprzbfYJvtakpHTbaq2yuzVrmpq7kPPtjjZJXcciqu8z1oX3x8FGJmCrXxZu999X",
  "key19": "56zG2FHwsEYVPqJnccpYZYKZGQ9QE5XD73WAkqyXQGDPHnZcdCmK5gUVAG2hp4SnP8VUrCyQT7y7ar4AUAbDWazp",
  "key20": "29BesYW9pExDZ9S56aZxNTP1Aa1dV7MvH6aquM2uAGeeidJypbZopzwfEMDA5DPUdQ8HZRmYUhsg9quq5ZdThwjm",
  "key21": "4Rr3ZgZJ4tkgEdAwcAK2epYYjx7aLWvKLxJYffr7eXq56oLWN2ifXFG6jhRCroDVXmGYUfuWi56wLBMQg7EshQiY",
  "key22": "HLUwm7qULy2Rt8QvJWvM7qU1GKNHQdpdqHqgsGjsxdUs3kDessFAHpZyN82EF7gUkpajEgJ25DfTBjoHgRp7Ngh",
  "key23": "2epJwSrxgN5tP8p4q7YwZTmLmBZADNVEeu5S6PjLcun2St9WNBTZeqPJGxdTr4Tqe6f3u9vdLCv2EJfi8uHthNNv",
  "key24": "2sgQqFNd8kxYqdfCUH6S1MUgwYvf995bUiMtyJcygRE4BYrAHrRj8Tmkb47ojx2g9v9t9CzgQmF5Gc49BykhU5PS",
  "key25": "4rYuJUqcpdcZnqxyKkdJiPBXWuBmR1zCqCfg2qEyQSBCNRSvTE86vWavofrJpTxMkD9RMKD9bAvUo45FhT4E222W",
  "key26": "3fEAxP6XHcwLdkE8ND928CtXUZtwZ1cXwayFnHiwiPcvrD3yDeZ5VVAEvN46RRs8dEFPte2mpFCi31jjPj6PAmvs",
  "key27": "Me4YANLX83gTNCgLHK3xj53RihrkDhAm1p4PoHWpiBriscNGp4GZfdMonYgZSR27t6mc3JiqFXCqidPgha4r6GH",
  "key28": "2TUH9iWvuk5rCc6H45aqs7QHM3UwBKKFGagxeFzeQGqU6rrgMR8xPaiJ2cHThd58T35dSn7NJLTr6dBCLZ66WccV",
  "key29": "2Rh9jqiCHKoMSiyLSNzdLzuk1p6dZW6ahxEUCHPxEZnNtGMuRV2mmBE9XKTX9icg8VDRRA8f6wznwr49YJEHNNTi",
  "key30": "5vS44CfWr1r9xuK2QfNtwRjBFPt1gZ6PwU4CTSDyhADamXfNShGSJgXac4XpPGHR7cCTGfadC2ru1aAjPFtduU2b",
  "key31": "52tsekbAYs2JGP4NpSnvdZX8k2T97YahAEpDFxRY3sLDqGkXu1AHuLKYf9H6xXRSpf4XsUuJWCaQgTEJMfDdgNuy",
  "key32": "36eqXMHtJZk57962zCHknPrigxknArqmDFro6WmoaUymbt2zg6FhfRbPdtJ2ha4xgwUXkLDfDxCMECWPhkUb6FUF",
  "key33": "3Tnwp84jRJsRUDNUc9B552L72rJa8aU98pBFaFfv8pAFpKvyDWpPx3LbbM5bsi7G4Ww5xCrjsyS5ofN45VWfQi7x",
  "key34": "3f8DkMGeF5T7JEDEHD8BWbT6XV1y1QfkBr4wiz9CmJtDA7PPbzfC81Lksbew9C3SGguvFdFdY4yA3sxSRc5DsiFh",
  "key35": "NqX8o5zrWwWW9rfTKUn2BigvZJJPBEKZq8Lacr9weUrTXnYLw3wyq7HjK1twBsGnUz7WhtKjTxCo6YDVUU76hGP"
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
