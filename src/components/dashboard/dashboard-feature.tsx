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
    "5vUoBfW2L4txzwpgJ5WawrcdYxRjDJrWdMPW4MpXriRMML8iGizjzYjy3jSHwdos6govrficnAN1aMS5EymQTWR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YVzcFiS7JUcv1ic69Bf6ZZy1foAWZEyV2TsqvmYBm4mbZd5jChPWxWLhXzUDmbb2GbsrpdU7YZKn8RE2Q2RSqBn",
  "key1": "hDrwEUyMDWiKEq7VPhHVSbqnxG2vVWmRAygCHFRKMcJMRM9s4vAA2qiGkSZm4o7WcMrh8gTSJ4DRX7cNFBcSTpU",
  "key2": "5mqkZP2RJakRDXUR9iygzE7NLGq34MUr8Dt6V3ebihwiDBvNXukyp2niMS3mvzAwFJWSn7sbeHwXbh5Vh69e9a5H",
  "key3": "2HHU86Z6oDRBNbBwExTnPL57r8APu5aAjugW7HPDSinp94N19qSYw3oVfLVyHGxjymzqQ5Zru4UwXd5VBTA892Ty",
  "key4": "4kKLtDz2Md5C2D7KQ42G448yQ6Zbr95C3dQRD5oBjQivv5fhwqEkSWUR6TLRp8eArnSQfPhMTsAFBGcHXiWagW7c",
  "key5": "2wJjSwupPyeuUoReYzSqo7CPBP89GEJzCB4H51Sxru3yG1PVEoHnW4esHr9bs712aScuPAGUKFypK7hANgcuAtVU",
  "key6": "3ppop6RMxPHAX8ukr4v3iaZvt9y58tjubtaRu7hwybEhssitxooyHWNUTQKt6DZq8UwaNxZe1kPmWLiPYiBjeMKG",
  "key7": "sUiDAW4KURYsg36fiVPgrC54WXuVb34zjFGVwyQDmyK9ECHDvDrnSYnJGMjT1rgTT8DwwkRB3TEuMy9rg154RWb",
  "key8": "2nYfBqdDWWuz3oSz63T7MnV8FHQPYLax6sX1g9SPdX18NfRUMCYR9inDEffd2gHqAqSEzauMZgqY3qH4KoWb6r82",
  "key9": "2qBwJGLhFzDFiauz155UV8ca5ki4Ba44jJwjdGJbTdEgLZmTRXqeM9PVZ9N7fBN9FnTxME8EpUtnPbWCou5GuSYc",
  "key10": "VMbNsJBUYixhxivx8R25faR5J6TSzhW5KgwcpHijnubzfjTSgJsaTbs2DzGM1P5jan5M2JhAJzKSA7iYXFdPjis",
  "key11": "4aaRRwhiyKbifTF2gKoh2YM7QZ9PTk6N3MuBXbNXbjYmPurs5Yg66spwVHMM5ZFwPqXjYWL1bhB4twV7mk9RRCsx",
  "key12": "4ZgRFSXhZ6tBZ97WCUh76P84nunfwBN8FqfRsjqXwR7YdgNFxEM7JtTErCEip6bAtRqiGZhfm51CHGHR3exQxAdB",
  "key13": "3qRW58Ae6bUBGHkCnii1UVKHi8iRU9nRSDM6SgSxDeGedHPM4oM56TwFWZrJDVXUBDxBwSvdhtCk6xLKCHpr9EHb",
  "key14": "h3nBDeFqZAAqoHgPgyfWppbE5dqRtdCE9GAf76jHwWEyvJPUP1a3584s3Fud47xau2AhTeYKzkA6iFDXGAUkbt4",
  "key15": "4wUAjkofahKF1n8AUweheMiH2Rb7aQwgS7JEXoxHGQay7VEniLjeF1mxzpQLgPTR28QXGS9xk9FDptrX97x9g7rx",
  "key16": "3uDQ5JGdVSpLQ8THvuXFVmE5CSKDL6Lf8cAaf7SuXnMGXPtZyaxW74XvhwVhP9TaNm2EaxhXgvasjhpxG2Vnw1nX",
  "key17": "2Z9WXMP5ND68ivUrM1XYJurAXr47uQGXdqZB74qjk4qX2E9Kw9g79M8JM1QsiN1Dm9LT4SiJbZBSE4Hsu5yfrhgQ",
  "key18": "5tVrZhAp9GCwUmgDNZPiM7cYE6pZbEgRXMrLdw6qtQYbnW4ft17JWSvRm9b61kRqzjT4XJcrV8KkRqi9V6XH5ZVg",
  "key19": "5jJxgaDRUmojKms6NBH3RFco9n2nkofrzZDwrpib9X7jT7HpVoYCVFuhoPTA4gXpEUSzfAF8wUopodsHWibVb454",
  "key20": "3gKNa4EakaeSbSSMhRdmoFZvdYpeyoKcSPKQnVkKzi9i7YQHTQv4i5hcqdqF9C2ckUk2aVRddXuTEbEaLdeeLhSN",
  "key21": "YXV4dJFTvjRF6kKAjjsi31gzBeUL6atQ8dxehDEvH2t4MCSLFKquMEu1rHZGSZEzqDcEqiyTggyQQBbEGP46bKN",
  "key22": "4gqXU3E4NmM6xySnuDkvo6v4zwHgqZagbqRzefhyZgne63todComUwpS6ZM9tNiBMX9PQyZUhsN3sSwtTeVZVnR",
  "key23": "kk9kbjKMecWKubLG5DNRHZonEX5H1ccquUfaeua891WFJZRo4rBxpTDodp8zDGCHDZ3FGbDmswqtobm2sRMcTJf",
  "key24": "31wuroUPYFBBkYHtXdMSjRVDaG71qagY9F7KzNvc4fzvP9hmaWi43DhNNKit57nJX2ST2LiRFMQErPJwUWAKPrbP",
  "key25": "Sauh6RCz6zM2sV2BHyKASQ7XPokgKLzgPueJg67yfQqfrTBEQbMFpyC3So1gmVUEBfQBJU6Z4odMoe2n6NmPiqz",
  "key26": "2GBKiPzCdb7aMAgQ47hNMukQrZktFVYY3vpXMZUrowY49sUm6PPosgZFBJeA41tKnR1ExeAyiSanE6WrwT1B9xbe",
  "key27": "4F8ziwG4HVNyEoPeSLfhFDQo9xaZqQPZbNMGS8JiXzUy35Q53pUEbEM2mukzWSe8Gjy3d3tZhMp3KCCtH5dwy7BJ",
  "key28": "5r5w85sa9t4bwzrvBVParnaGx59Vq7ksPGoJS95f7vdWRR94Z7SLfx3GxQ52kPMBighMuvSsSuQTv9w17fh7mZY5",
  "key29": "5vdYsuCezFdkZu4mgFkkK9C9Q2N4q7sK9GLbytaiML921yLkMBSQxX6gwbSLPaPnHmxief9pYTCzDkCoLJqgBcip",
  "key30": "AMBg4BE8XVAUynkG4kv24S2WThKGZ4uBu3mGNh57qxe1rTkcvbXkvhLASAd8FzviN2cqfZ93ecvQANU5NPx8Zxw",
  "key31": "gBnv1N5AF8vVxaYpuXXNjq2n47rr39WpGVDit6YzrupUZFd6ZZWnL6dTAY6X9N1yVgsjwyK31WxzvbRz7Pd3E1m",
  "key32": "4Y2DdJQq7K7MdZ4DzY1qrQiVHmuyUsG85h7iyprfVMZMu6MsqXNXJriDUsBBwf46ftX9fjuE9dzQdB8E3KPA7dMi",
  "key33": "597aD8pXb19fdJAq1LU6nzU98BnhveNBXv4P3G3ke5BQ4H1PtRiDvoFote8gt6PVjBeWPpwQXxrFJ3UAMTsbqoUz",
  "key34": "d2C43kcXWZHBVwo4TGLbGgdvzQoT82t8kD7tEtX2LeEB1zp1JQQVxoPDihb89zf8ppXzP7rxEC3cm1z6YMJEkrG"
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
