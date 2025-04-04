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
    "4UjT8QpajjFNvrfn7M1WcHZoBsHL9Q5bA8J8PrAFiYSZ97W1JwtBC6q7u4Yhv1fJrzvX3oPp7g6dNNKt2toAP4ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MkgfnV56vvYCWXRVAzmSAhM5RiFihb9Az8CyrZxVYSdz75hwBMReASEKsauucMzeBMLKNuAk2by7ATh5TCsxq1p",
  "key1": "2D8CFQM8uHSUWoSu5u7GF75e7LgG6dcU6aazqJZDXeU1CSmh77Rdx2DjCuSWHdPWektQzVDLxEjqtjmuj1kjpdyn",
  "key2": "3VSBDiHw6LPsTDPe25iogDwRuBwo5UZRs248eLefWksL1NqL65rEjsCAzhrmkV1n7iGmHsL92xaCLc4k8vze5FWF",
  "key3": "3MayYX2wfGWoGEW6jmXaNJ6Xxr8hHJcPNJjXdiefoMQFvsDoi8GmJbJhMx7pCJubU3DyJ8FRnFXgLaheu4fFXi9m",
  "key4": "4dTE8NM2vJTN21XSE8SDaz7jqbqXPdgz8ssD4SjC5tmD6fHX3VUFz1x5vsNkRvHx9DnFnFH4tsgShC27xHVFwkKT",
  "key5": "3ZgCUqkYKDmTVAhZ1RggjxfYn2MVhLFVHaDGQ425iJ4a9NGa5LXPX8coMAYkCLup4EppTm4i5k9payKpDZNe4CGR",
  "key6": "DGvhQHNZgQh4Jd5gYxMPB1csbBnezcBKzcGKSVnc3HPVPURkx8LikeMKkh5v8N65D5BTDMHLA8vuTbmusDkh2qc",
  "key7": "2Nyo4fWNfwXxAhKATsBKdeis6dje6Ng578m569wutKmsfmBfHiP2CZwsBiYcQtfzvQCJG1RWmUmu3gC7AwqKwztz",
  "key8": "5pgGKuYwNMAMQRDmC19oDeNm67xTgK1zzevhRukQfmgW9UCw97TDdARxPTkF989GdHEh4hYsej6iYZQFjttxxJPj",
  "key9": "36KcWk3SKyNRFMqKgDYwLvFdjEYNy8HJHCb8vmi5Zzdb8cxBXqiRtdg2x4mHPFkrUiWyrAdJMV9xoBbqVqp961Qo",
  "key10": "21J3kCW3Dh6GTVRFQUfGrEQMXY1tYdb88VK1bR4jaPoT2GTZh1swXtVv9oWhrorYVNdwAETgb7icAGiEnHZR9kR9",
  "key11": "2XQnG77eHZvB4B2Kyz1hG9b4xnniXqa8ar4hoi8XAvS5JKRKVKgVrvJiYTiwJRR7p6Vx8a9ajUGqwgqNZT32auyT",
  "key12": "4DFY41VvWq8aSmXtLf1J7oQ1vPfrRCtdvm1cZGbYNiStDst8XpHjDKmSRqdWTpeEth7PoR4nHA3MtCWXVgeJ1rvt",
  "key13": "3bEQKjxgf9iukSeiAfE7p9fWkqNcu2jGGpKbtanfh7g8v9WWAKriFuxMjFtyGahEUcHHVn54Fk1Jr8jUQ7kfXXRr",
  "key14": "4PNYz3bJ3ZYiyx33PpxJTfoAjV2Pbf2C1Fm2M7smjdk2PhXbwXbRUFZfVth32A75Ln6uLnxgx5qF3rQUawLmW6x2",
  "key15": "2HB41SdAyKd7GhvENMzApDY6Q3EdEToEXG5h9oe9TUxFVLTTnadZo771shJ5G1CT9X6sLSvgk1vKAre57i8xNrsN",
  "key16": "5MxXwYTzYqGzqm2bKv8GYY6UQw8JtSZio8URssiLBTYbQhqqgEmqNp2vfdtRp6s8bSh5fREtHoX5Vj5Vt9qukmTG",
  "key17": "44T7V8kpnW4RnX7tdnJN2rDGS9qQXuenRGfqCyc3tMzFnoj5723f8ycTeM1hMdj4YtXbntUV9thPiC1DjxPhb9Bg",
  "key18": "4xorUGeC7scYnDWr7baJtq2AtHxBgqj4UpEHGG3Fm5UZvdtsqcZf27GLRzfFcXc3Du133Kush72VGvne6D3jq3U3",
  "key19": "3kYTRPrAiWPxf9d9Wwd4hQ5NRhp3cj4VmRviTyr39V2vmfDeVMXCZqzJvbfnXnUHktUuzDuHhgC7N2e8AMbwo3ma",
  "key20": "3TK7feqdhZwrUNQxwc1PredcRpet24fpWRvhugsQGeRsEezu8EtC9ii4MUY2uV6UFT6pvbzGYM7AZQ36FBJsyoyW",
  "key21": "g4hTStE1NVrZLJ9VJWPgdJzLBjN8EkbhcYuS9stKnYZRSc2Q4bexwC36qwoa2ZG6ijUcC89qVR3L3ua8KnebHd7",
  "key22": "4brY6riKLXd9fHVy2FhDFXSNDhtYcwhfsDMeYAJzuecSa3xRYuvpr5ZTmNMFHo8LZ1AJwWB2zLkVK5GyeAAHVqBU",
  "key23": "5fHGUNvFgUJWrBrqzJzburCwGuGN6jDdGZ6ZwqUWAmhcbbCUe3LfpNJaYjz7NBgG77XTPyhvELc7ycsRqUabWSN8",
  "key24": "2JuGosFCH7DN4wkRHAQLHgeWuWrjt1RnuaxYJMKH2TRSUETxHZVU4Z1kt9WQGN9xXCGZABYcPmSXo2ZSDaS6snoV",
  "key25": "3tDwT2YAg44zFjU5jcWHQ17ig36wJuuwjFoqMTRgDTxmJVaKUu9L15R8h1T61vfgh4YhP74PYHtVjb7FY3GTfGLm",
  "key26": "2hgeu1L2RkqFU9opujL3sPdo21hjyij3oB7LKfBztqiFVFGB1yR3zRxvCxtPL6DsBVBqTx96Ctj8m8eBysDcA42Z",
  "key27": "xhakDYsFGBpM62ARcGm9PXwRkX7ddsNE7c72B35YxJ8RfaYu9yownKydhDHfYzr2r1e3BRzZ9ADvUbXU9BVsVaV",
  "key28": "2qEXWbwr3qi8qddVcuuB8zgSqoUgxP2uzFKEvJH7vZ1MfkYfmBN9nR7pEG2yCT7C9vYWJ8C9sRDqFEwGW33HhsGc",
  "key29": "526hFsc8Lh8nWyCfCVEAZrwqLEob9haeiy7hDeg2BBpjTd4NfmatW5DMrGbRa4oHYZeUXWRE5rvdDfvWZ1PyRqeJ",
  "key30": "2RPeQHmQ39mPkNmYajj2mLuUtS52LGvnwemmhjocD6n7yVhdUK1n2bEsTmK4d9pxBL5P8TwLnSGf2gFo6NKfnM6F",
  "key31": "mhLZuJz4n5fBWMs6fUZBVrDpQUkm56Aa4Cm64HeYWA41w6um9SHXpYbiKoQW8GS8kLYjv5ExVfpAW7hWeAzSnsc",
  "key32": "cDwVdPgRaFTJ86iYgEJxLaL64g9T8SL3SMPRmFKUkGABeWosTp2rzTa3KQJ85PVBrn4UhDqB3X9NUyT4z3NKawA",
  "key33": "3rvytrSPa64ddNmEueip72xuVmTdLsdvzR8YCAp9YbrN5huBDFjskoL6xyeDXxiYYEZfH9pdDMb2GMSGjzYm7upt",
  "key34": "22NYoFDi9JR9q6ii3QhGM69vCELZrwgWguMXUeh8r3AnoYfr2W1rkJu52vFVZbrwyuSQfHVhuLQ8p281n3m3pwtA",
  "key35": "4hVHY7ugTFffHtjcg4kzg6nzPaL7c91yjT1sUXzuHwYrEomspMqPR1XXMg8anMAtAo8X8DpjVKSk6xwLNWSn9reF",
  "key36": "kGuYebPBn5MnS3tKBtzyfiAeQiALTnjRDwtGV6PSoDGhJr4wGoeuvVh5QotRMn86VXtftqawmhEw8TxZaNtUvV5",
  "key37": "DaxrLRfv4eLbHiiLUdXPEwjpwZ9oFoKWVm33Bme8Hyef6paBGiNnJF2bST6ZBWmi6i7kWeFYW7h41PxfsdUEST8",
  "key38": "4C24yDoYNcoKmmpUfiXFGixwH1oigtbc8b6KxQiu94vmbm5gvFDcgDHzJXqgetgvQX8YPEabNjkNTAsu3rH9Urt8"
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
