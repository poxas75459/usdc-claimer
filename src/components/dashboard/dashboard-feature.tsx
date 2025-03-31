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
    "5VmVd1na8FrxZv3Mo2CPnE5VXzZd6oVGjcDsZJQRjaXz65HBKbzcbVtahUJAwGctkzkwrpx4YRQLo7w3aDMyDgrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S6AfLKyrYTn27UWWsfmFcezYJ3JPUKW4qpcbQ2zHVC4ddE3qbcPeT2HQoNcujqqnhw5xgZN9gaB4xChtnzr4BMc",
  "key1": "5xzLU6ZWykns8H4XP54fMZfa6qQv2JzssWSCXmTAidEmbPWQkkuWub75h9TH2LeiesJcSv88ov3V6yvYF5UUAZRU",
  "key2": "4AcodQmGoverhP7DAD8BJTYhGGSs7ESfRNG63ehY9hx1zq4bmDMRqP22aANZYYkmEy6kpTKibHPZAcCy9Ewj8DRh",
  "key3": "3TDXgcvoyYi9FB74s1RMQP7Hrj34LNFpGn3b9sqHvtDqovAySobjuRyC3AsT3GZPjHqC979i4EdA3ne54KAiDERa",
  "key4": "5TEUczseCybC7Sh2zpFJH7BTqfbXt6t9M84f1BEEyK9CNFK8thAjsJgQkEQ13TvrAdECsby2LTPTcjY7XhU4C6b1",
  "key5": "47L1GMqFzt6bGDbkXeomiZeG9ZZr6ZKWpkzTn1GUfK15SkMZVHaqsLHskWsr6SZhf95GhZ68m1UaAhMg1J7pcE7a",
  "key6": "27zWp9g3ePQewhZtRwB7X99J561191tDRtx1Fw7nSFUgz6uq8c7wbNR6d4crcmCwx4E2wAWBCBCXnS3c6ydSC1aH",
  "key7": "41ebRSjJaWwXjsC6AGvg43nx2R4uJMuixHcjmDmbbYdxzSgNYMaToa2ERUghxaS5jhpZtQLM1ePwJdMCef2i2Rp1",
  "key8": "2sG1xEzvv4kmMGevwzFCeaP3AW53Tm32613fCaQ7V6iVuMNR4A23u1Z1spKv3ggQ1tCSDgj1GMQWcmePGHzss25c",
  "key9": "5CgfRobVtNS5YwsgYePvXwDMFcA6MC45Ho5kfDv2ZkhjpE1Cs3dwRREdmfBT15FNAwUSYXXg8PRHbPHstMyFavCy",
  "key10": "58kPoDHp863hqxXtQ2zPxA2LR3cNBUZ6SVbaKZmdQDHCmc38ycE7wXZAJwVLtDXY6BB7q9mHb4WZJiTGEXP5qbgr",
  "key11": "97NuRxqR4YX6ZZUBJUPZEX9Xs4NTZxnNkRQqzhcu9PHkrvQNjZmfkdqy8kizoh1QkM8EkeJaq6HrgmNbwFUkzSr",
  "key12": "3NgHuTk4TBnBA9zhev89L6q9fufV93ZTyQmmJVc7mi7Tim3XX4j6cTzvWffqdBCq2NEMAd46jrw6z8CcjHWCtdrd",
  "key13": "hKqNEMJy6EbEkxDdBKHyD3wPn4B6cZiiZLpZscFkZnYMBAKfADNSbj6cKPjRi4kD7rTmkFtmh2oKqBLf5jgW2ez",
  "key14": "4kApZd1urR69xd9GT3hCz63ADEq5cVCFqnjsJKcoXSK49Qu91V71LjT97KoTFBfBL3gTyoJvpTWCYxA51V5oi8Qm",
  "key15": "2wBqCzw4FLbsC9onUXGg1Tr6mf46jV5FEALkdNrWv8YYnaqpbKSZiELSy4PhjEdjf9p7Q9Howr6rW74Db42dbgfr",
  "key16": "3e2MMCUiE9UyznwyrW1wEjm1e1hqtfRnz41T7XGHyCqs9biMbKJaypKiSnNmJogWQ1SNiYVwdt9pUYtKRbw2RvaX",
  "key17": "5JWo1uEDk9kQ5eGCPfECsdijQR7dVzCtvwX7v6afrHkhtKz2XDk8C4KdVTUFsZZGqPqVo6HeRys6aemuw6DxD6WE",
  "key18": "4y9Mnru9s4HvGp7bXPSjL3U4xZrAeAgkUiYdmAWe5nVa35oHZGazuH7YUDe25pLz1VhMFJiiJ5CuRhuzoxqhBZss",
  "key19": "5efuBLYhPu7iDXaW7hmXcCcxMo3jb1oorX4VU5dic33HfvpGz1UeDUHAAnqnFhADpacqd8bEATDuNCQWAErKFmxh",
  "key20": "X866fd4grztGdTgDFejfnHjvv1RCWr1uuP7JMwM3X6jyNqg6eYivLU8gEVYMjZvpK1DpeDnku6fo1ntbFusdeGU",
  "key21": "3Qq2cnsAwfciQtXsinyZKZq3HCjrWCWCQmSKf8PVUBj8bcmyQvD3uoECN2VR5sSr63nLH9huAAZkZ534RfrRMe3H",
  "key22": "3QixuVTXpp6NgorAb17v2MFmouZ7xddn5kSkVHEkbGCqgaYMTQyc5sFGvQSg7K6NhApwC46V8GZojAinLxVKMcGK",
  "key23": "3jrDLqd6dTrCBDuWqbWc4j6uAS2zf38aNmoJZNJW5W1TGQjm7Pfako5aCppAzibxWpi12xntnycZ8tbv4JE7PwAe",
  "key24": "4SLfsxcPSvKUrBM9CzDZT1N31qA7STFSHho8utmmkRxA4ptVvFdA4G2Vyr2WteUUmTwRCzt3yfx1uFKiYKqSfPZS",
  "key25": "5R8gH2mrgBnfq3nUe137pYAuG5tYXBNE22ZwmVVB1HiYn8VtqdqyVQbGouybwy97WSjHzYw29ckejvY1fcr3yFfX",
  "key26": "jbXRvcG42r54aajP5SsAFqUZM6nfoLJP1Y5XSgTGnyMQF72DhA8fsVvyvaiZ4Wcd3GrBQzo5ncPH4ix9YRjp5fZ",
  "key27": "6dvHGB3MTeppKBaHPsugVUeNfky1uz7GG6U4THVAkHZkArMz36i2TUUQS7oKhoo3LR45xL2ZMTSzaYLtFhnBVfN"
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
