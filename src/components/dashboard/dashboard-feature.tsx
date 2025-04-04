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
    "Sk76VioHimU2W5bMSQLQTpTHCamVCpQrej4teorztRwxV1z58sPjnD9q9vcFN5KX3C2nqUPoRhmbBUqJdpBVpR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x3nS3VSD4LEaSeV2c33qnputefoQ2665fYBtE6qE5uYwi7AM4YfSLxQepeEC7yoPgvo7zBCJNdKGFNUuaWLK8KA",
  "key1": "4EMK9j8dBKQ8KQywt94PBcWQuFZi96e1dw7EcUFSBoxsTGopMERoG9vTyuXxg7wy9Gi2yBh2BJjiTVDSZaCe7pES",
  "key2": "4XV1e4GPoksbzsvz7AYQz9RjLJJZna2eejVo1GuMJexUqy2S17nSEfQB5LRraUt2ZogjExaMi9JJPWg7P4gAqx9x",
  "key3": "2LnnbeNcCeykG3mTPVh54szKayMMbdLsEHhHuRLDxcsEsaqdrjG6eH38rTPaE4xpysYJveJNFDsjsKABeuiGeF9C",
  "key4": "4N4zbqnAtGGZmhTwzGu94XnLstiNpGemKAHEnkGfGVHWjVMYcQCG4QgYKSucZJrMVW4MmS4r7W4jzGB1MuJhvBqR",
  "key5": "FVThhcD4v4DUjdu9tSiaLgj59Cnvzw3aa3L9i3FAfYBephGQyFpvFkERXXK932PGu8zdoJQ2zoVfZU9fW6C2ZNf",
  "key6": "27ahYPGCTZyhY3C9qhJnTY8SgSX7WLLJW8NaDtgrnhLC2H93gvhQN36itnf1XeuM1pbuUDTxWuvw9DtG7iX1Hx1E",
  "key7": "wu1ViotnxQ49ygXLvzDhfew1mjZghpo6yfQEvJpzxyEa4Vim3TY3sm3uZem5su2S3qVZt8MNLFB2M3Yze4vA5ji",
  "key8": "2Bikk2Uo2ZVLKBHPqeWfLY78i4vPSA2B3a3CLw2iVo9DPpWxGWYYRomqj1Qr9Z2iJyZWeuCA3gFvvejik2sgmji4",
  "key9": "5aqiCRUsFJCydzS1n4XuNSLdmuywSxYvgnMW5EzkhszRGa2qqfVKBNkWQDGAGUNX1ZrSAofAnZ9a8is8dT83dY71",
  "key10": "3q84gjLauBH5TqUEL86AeYsJMxGH5XF8SBbiDQjK6AWXZRS7GxshQhH5NbmTKSyfyytADArYarZrXCGchQDKFU5z",
  "key11": "67LAXmmEM6GiXnXGKCZvsK8Nkj5mLZS4f9TnEiuRr2LhnH9wJbkc2TG7m3cJT1ke75keEo3s6cLzcctKksisLd77",
  "key12": "4GrBcdPtvT2mUGBXHAVMaVz6KgsmMNzZg8BexCSSNC1nUMdwaY2jxpF7q6VpziaV2poBQQVEpNqK8vQgGVyQezZV",
  "key13": "4wiCZY8kFW8mvqTcRrXEST3La2XwyuEZp4xW7nzxzmzbpBJKWtZDSoq4xEXywUwVra8pkrRtH277x6Xtn3sP2kAs",
  "key14": "ECu1fzc3i9CzpJUuHcp9ks6zoHdixdSXH7ZdUrWX4DLDr7DnyFe6cN3o6HPpqa8YLy4NRBJfaVWrZu85QNvLX8j",
  "key15": "2pgErYBT6AeZJb1X2s7DnGx2MyCU95Y3xv8aGV939WLBP9xhJN853JWki6iWTPVVKJgBKXMowBXEe7TXBb8QWnjn",
  "key16": "2xpEwNs17uenbXCvtnFUc4rAWmi86ai7VaSt9nPW88ZBD61kRuKpaQg1B6Wb9BsvxE1Yac9dq5DHLrjUS3csTbQy",
  "key17": "RP2WLXv9z6o3R1AjDiuxPmuGBz6Dgd2sTrZhBGeTGdybLKSACLMzSmVCFW5D3t3sXEWDoGhMHNyZJY5ewFUrhHd",
  "key18": "5aHmeqASjMZU1mgRpQBNtUjUrq7JsAMgJrwNd8tWtx3rux1sJorTeV2hQxiAuf6rS8pUpAMnYAW2pLPewgPqwoVN",
  "key19": "4rRoHmkQZAD4Mag3mtAoUSPYfow2K7Vos85BxxALJ4DpyFb4RBjb948q6BCNdEi2NcfYMjEDSNMTMJbAHjRd6Zij",
  "key20": "5H66Xjg9UEFfrWQfPzAJauiw3bWPzMJtfX61duwpYd4Umm6muX9SvjDpKBM8oA9tkns6LrDcVYg869fPYL2rTgJB",
  "key21": "3psc1fi7G7XhyaDBC3RsQt8TF5SJT1AnTsBJAJGP9ByQYARn5rkAQczCmnucDkGYbaB3VMMZsmPLGt8Re3hLdrqD",
  "key22": "4k8Xkv3NBA9wsowY4zEkvrgqavpLWGtVexUzJdPuvCuqXYHXm3Fc97U2QLsFWDoHCVKC5TwQR3j5CnXtkQzJDRa6",
  "key23": "9rpKa4f9hBRU7HBYELMBc1yFEabpf3jHdtRHziwtfZwee4Pubh5NByCC1nYRR2jvktYxtfSSaF6Yy39ZaiWVnsg",
  "key24": "3A68iMQP1mHnyDdoo8fdHoSUgEF3SyrRXiWTgRH1v5Uh88rJcbJf1Xbw8dMWc6rmM8hK8TYzpjeLK6x8vhy3hUj4",
  "key25": "288odT1sgftDHzGn24etNLVVkaYJb7ZhhRHY46tQFn3teWFiSej46THKVfqUmMKRm9dEjYNsHzc12rMvHHhRKYM6",
  "key26": "y36fCDkbCW7uK7eGcKJcZGgsuJnVR43yXCmPk6iGax9g3NoviqtasiEBBhaVvsFHQ3By5dja6KSwXd3MjjmhAd3",
  "key27": "4GCKGBFAxRaBLMwmt8M7neiJR934prqeorwtWTNMDZGx7zUHvCm9REPRLkGJnSCLE7ry1oUyu2KiYkiaKBTLLHuX",
  "key28": "4PAH2p3uVnVofkFshLBoTqjnhYgrkFeiLJdvGVJioPbmB3CehHfDUSbX52x3zLecmt58wA3DXY4YLKG7jJ6BCJEL",
  "key29": "4t1acno5fm5ViPPaPjgYP1aGxLvkYiKxr2KyyR6tWNQ5xBJT59Vo4nTuJT2q1gbHgPgnvNAAASAU5u4tT1VuQ8bj",
  "key30": "44ezbs7kjBjr9chyMMR1e7NmrpPoK9UK3L9GnvkcAS2HM8Uup7yJrWbyPzFpUoue8mdYJyviQkUduW3BhfMM4ZTr",
  "key31": "5SFLpngiXLPkXWpw9cEiwvHb8yLkeY2wP4LZwMtsGawdKP8FwbY1VRNRZNa815jBrGGHpGQ7EaCCLzxSuQbUJrVA",
  "key32": "3UJ9RvKvcWUX6iMeNrCsH54ckBd6MV25riu3rU2rYbjNucjUVEGW2UET9HEsSuVqp8H5ZZm8CuW9DaPxxuDBp7E",
  "key33": "5tksPWukchexZzoqZnwsEm8C2Unv7HGQtEykBaqPFkuQyg2u3HmvWJGU1AKXL7KrmLh8F9bWTHgrvB511aQFkUKA",
  "key34": "5PVz4rDBdXMuLkKtwP5aiTkTm2Z1fCCfQE3rFpgH3pSzc1TXdFkuvSJS2ds5e7Y55B2wGHjnfh3ngkLX8khsbVAe",
  "key35": "phXbCYG2e7XeFDXvUBcr3h4MFQXpf1CjR7kSzLpxsGDUzKBifxUWFWwSh5SWzhcmCGtn4HyoLebP7ianyzmMS14"
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
