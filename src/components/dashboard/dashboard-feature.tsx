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
    "e8EUujym2PJMynRbvZGtGAiXtMVxbzcVt96Fmw8bYZXfLUF1w6L3xkK13wg6VNUNXASqAjpri5mTbZi9BQa6Zdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xsk93VkmgZjwnCSr7S3UNxXJV1unyaHJivZHo59cQdZ9sZnCSCNyMvM5EaArU8STEH8iShDLaGjz8JRnwTQu5AC",
  "key1": "5qnKKrpahVmVAa9L5jZjuGxJtjEPQBLKzV7fiVNhYr19TxN63zHftoD9tP5B97EMYejChvn8hBGi1u1yj7FHB4Bn",
  "key2": "2c1ukLfPBremNyurZTtDhGfG4kYyeegaD4MigrdbCtEEnexqmvdpbk9FZcNbwzr7rnMRyoBLZxvhSeyyxZKk3ZFE",
  "key3": "poUJCCGtNds9WwrB2A6ZkfnexuEZQ6MHMSF7Udo13LmAzMjEj47BhEsm5cb3rhtt5puzwDau3PhR9hfHPHpXkPV",
  "key4": "2t54ZWVHyaunTRhTikmckt2mnnBRQGPcuQwdeSz3S6pBQVjJMX25JJQmTZBkgnFBV93R9gXhXNUQgB9bVN5pPmTk",
  "key5": "2127CmvPnCHJebAgVX8Qa2JULQTKFLES8Veo26FUGUAS5A46HjyHSf8iQbt6BM5G8ZdaWurCpsa8s7tyTq4MfuSK",
  "key6": "3MHDWUxhUmYT7J6yAfD3emuwsvgjaBeqdhifdyJP44ejw7Zuog5Y6RKgm3oTzHfS8bTWF2vs9Vc4c6SbjkDAtpcb",
  "key7": "56ma2j3tPYAge5T7xBPsyPKyCbm1SsqnWZDrUYjbiCDkEjgNUUPDDUDCLi3c8YfoFx7MGhoZaADSPnjxXiHP5Zhb",
  "key8": "y8YP37aFgqDNVsYrTJQBBv2QkhwuzaJYK6nYQgsXdMZD7zUwSBubQbBA6zBFP8EXXh81YBVXdDQoDEXfok6TZzU",
  "key9": "4o3jRLEusjevkufYxyJqi9qqrPMug8HECzpkoHHBqyMhCQjNoxMSbNGqebgaF2ZJRRHESP8NZpocMHhHMPKoi6Cz",
  "key10": "4gwWTgyGKRTHZ4ZLKXFRpsyUgcKH65q5QoF4WJTDhbZ42tamxcQMWyWU4yhnHcvPdgxHgNRx44Wj3guQXvC4d2L8",
  "key11": "4g9cvN9yApxzpcyMf3SfwVyHMYZPuUbqpAkkq71weaFcjFKBeXyyMBLtjCifK15aZpvDYjDwoz577d6qp4YSro9t",
  "key12": "nMzc3t1YTAeXbJE3MWdY72BuEWKboyMy1s2RtiLkhq6Ayesgnyq31ATgvdDfJba8oNG9agstyJ3h622SRp4o1X7",
  "key13": "3FpwR7HBWPF3JTzZzwWXUBNQ1aZmuY4vf9dTPThnVXZvq6gBsswNrpoGMYxaR1hrbPqb4Q4U9crxbfPTuCvQqFi2",
  "key14": "2Es3FRZQqZzQvADCGfKRyY9L315DV6SDYbJY7ohpV6bfSJAX4UZosnARYwtCoS5jRdiYuqUbczhnivVDs9PGhFJM",
  "key15": "4vPRfPddEYffSUHQngtd7A6brwsxms3JEEXoEGBj2qZY9xnnZZ9nhTCP5L1nS13yyx5vrtn58isSB2fz2czAoe5D",
  "key16": "29zucagvnfS3QEtPFuuKmmpT6yMPkFeu7eNuSPvKutwwFHXtmWBr5DzS9tu5HU81924ZyaaBpcS5vSupCWbcQ4ox",
  "key17": "h232NBJN5aCojPwyx7oTR2pdjf6Tv1HayBUbnEjzisz7YTD8EdmEJ8TdatHeAJMqhvejBbU5XfrKePFpqwUqE7x",
  "key18": "2fpGrsPmTgarLMd26npGTvAG9aAwcxGRQki6E7xTQpF7GGAksESLE91Zc6n5nZ8UtMuyNM9nCfB5yC8BjMWJM85G",
  "key19": "2XBTjZ6GbuSh6kA6VjNasLF48wsZmwH4XQsFJ2kQrpWVETquP9a5VBNAcmwCEtBJY1iyrC71m1MzmCLUjMLPC5KB",
  "key20": "Jh9L5n8rBP99FLN6Pn8qHATKJAEMKF2bc1fKVmAbNnksgbvWx7MLFcPtAw6yvPZF66rryTmfuYgXSZqwmWqpYCK",
  "key21": "3DuqeRkr56SoJHsUxpLx7Lt6w1z8Zo4nMt1x7n2qvoRjXQgL5jnZnNHytKx8HCxjhUSesdvT1iC6ZDTcmCmqfK7Z",
  "key22": "pCeUJ5d6WDCT9YUyFKoMMerYZcaZSe4Lz3CgyaAsTjErgBzrB2V6wjDg3o5NPpLtU1965zFkK8AitFY9EtWABXJ",
  "key23": "2yXEA8o94NjavoR59VRxDaKkTC29kooo9fN2hzc39WrSx7WejiKnVXHtfnfBYUjtcU5vsSiKt4o3g72jLgqYw2mQ",
  "key24": "4d8kxupwU9KQ3LA3x35ppPJe9S8uSs1QPL5WkvgXhq15cmFUbV2TZGuaDFiBEuEUP6hatTeG4Ne1V592AGePNoDT",
  "key25": "2kAMA2BPVqTaGiH6Y39iraLxc3PLG8FKec8WnSakRiMawgjoJ7XB955MVCzndgWCEscrZhTRZ5i3kSMSS8pFBc9w",
  "key26": "27bK6NncwHyf8qrAgWXAdc9vsgdvEDEGTrCZxvvBSio9AE9ci8QFLSQXcFWyGk4R8S7UqpL7vJyHg7ujWq1zCwx3",
  "key27": "92DxeF4NUtEedn7czxRuKktrzWim1x9PTpF2G1Y1kQLFveLtrMCpyXmmx2g6CEM8vcQCpgMHAtxRpNXCtEy9hN3",
  "key28": "Nh6VMVKQjvP3zxZg6bQ8WyYZCBuTb6cHhaDF3vY62yjvLcNmNuZ1zPazwB2rcg41eeSHsReB444bNfRs9f2pPvk",
  "key29": "2QeqigyqXdXxyHTfcMLgV5tJp11K5iLRhDxur7mCPJTgixMpdsrhFd7kzmDXM3NXZTJEWqs32Zxx8B8MhT1GUM1",
  "key30": "3WC6mGnnnH5BRxevrSXGgUQYQ5nSc8qovejfARrGshTT73E8B7pWtxWhQfTuLs25qpwpZr5UmB9rdSEVehWKKDbU",
  "key31": "T6xzpSVG4q3sQe2LHWwxyMt4XxJWU8KA5WJEc4Febc7HJVdqiM3wtf2aR2VS31NKc1FtvcouPui2sU966NiyBEA",
  "key32": "33avpHeNHe2L9d8dgxTWjRso76dbMHSh1Mv4YfknkqN31H4GEh8cgAMHmiAtuoHok34M9WvUA4GBV5tMxQ2nxcv6",
  "key33": "2Dq9JBVTQ7cxBGNvCHKhF6xPw6T3v7qTUxTCphrMGZX43unNi3z8Mm6QJTNMtJhggc4ZtGLJNaeXGy6mi6FPBGbz",
  "key34": "4Jj9YRn4Hvcer88C2dKjgaD2d2MDKMXskwZg5FvREGLKCb6MQCm8zzhaH3Jk1WQmMeNSfADK49oWgjeeG7K3uDa4",
  "key35": "2kBttaY342XhVFH7B5QACAN5HjHAchYVC6buojsme1kQfxrzmx9fXefHpCc2BjjWfYZSZkjoSPfVPhbXcgVP9Ue3",
  "key36": "2WQnyCzbJ1SfSGHQ1dM3zAnGoYGNpF1vdsyeBv3vMVbAgcpZLLEHDKEvKGfhJs2pgoou9YUPSGEzNheY4amTdR87",
  "key37": "QM4iDXyUmmArJZY2bWCsSKBeeK1N3b8vsoSAZSh8LhMy82f6f4Px2YVa6WufTpEqdissbV1TYFW7eKiKpS25SbK",
  "key38": "5Rp7CTANVSFLYiWJNt4FgbkimB5Yc9GrAK6guYqJPjtSLLG35sRhg1PtNb46x19b2sqmUwwwfoYNz7b7FnbE5LQT",
  "key39": "45fTRarqxNQJrjXvdsHeLVwQq6eheAfTUY2zmZTc7XpJ3EcWoX6QcXQKAMZSK6HAGkvRFybDV4vFSuJDs3Jvkxxj",
  "key40": "4y1eHomL5DobwVpPB1SrNx8icYRxXJ5rf73Jf5mbwmfqfCbPbCNfQZHyLszPJvAwxFrMJrCgTxDNgBkCJN84BGVD",
  "key41": "2yvPb691kvvQVo1BZsxArDDKwQeqHdMDryFEME9TzD7e3sL6BSXsVLWpooCFDpzwQNEktJegkMvtjZJLFhdfQ51e"
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
