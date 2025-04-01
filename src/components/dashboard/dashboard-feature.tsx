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
    "2tDJJ6AdmjijHnmbZdGJs9eEhLUQpiaRT8bpYwgagmcrF3VYVVC2DEkAwCKv3CrLrvUq64HRm7jJ7XTjvw3zopkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XAMZbzxnjnyyiMH8LeFdh6RFKZ28XxFuX3mmE78Xe6vFkf7tw5zSabxaZhWcp94WE1HivVDxkHBi7wrwpmn47Bu",
  "key1": "J78surRZCHGwG2mQntG6eBsXKLWcUM5YhZQ9LDz5DBaWHPumCAZp18v5Spx5RXBQ6qTD35CVikoXn8V3NdAUBao",
  "key2": "2Ud6Xx1hPQsMtMiwLmULK7qLwSrrmDz7qXmUiFjYueFY8FS5BHNRZ1u8BEqc4CNnLtymxKoUgsgWdDZbW7SjLjz4",
  "key3": "5kaPnUd5ZpZDYGdZywqEKC2vnqCXZipFzPSEGrAvxoyPWTFSwN3pENcQyohQjscn1tT5NjdtL57u82Q6GWrFSm2H",
  "key4": "59RzPm7UjziF43Ngvjsd4PQDZak8vNmH3hgc9vMdK7xH3jSdfbbT9fvE9vVUnAwfyk1QjxKgashzn7TTiBgUFE5D",
  "key5": "DWC8JfhwvPAMjCxZdJ1iSTEh7XutoSqG2VRjtnnSrJWF6TTma9k5E5S8bV2BVUAGYydBcSFrvuS5BNnGCNzMn2k",
  "key6": "5cUmyQLNSbPQKCuc5xxZ9fwjeMtast2pyXoCD8Y2dyiTN8vkfg8SjSMd189HqX5pepWs1TRf4QduT9KHx9iHtx9B",
  "key7": "4WfK8VdvomVMYVdgw13Vaf9SA3Bvtv9ZJpbvREsLKbfzLtcYtdnN6q9nyWbXXHBsw9pTYia8KXjTqSSUMR7fSPfc",
  "key8": "3C1rLk7fxUv17qc3p7L3ETqkQY86ZMPbpmVQyanMcFaZb5V3oBnxcBjbYzHr5f1SR75gGC1UVYHxkxPtzKpcmhp1",
  "key9": "KNGLkjVKZynpTuRq21bvxfamkz6LvossW3AFBUsNyzNg8sJx7X5JqPkS7x9Yie4J5K2WGE5Kw5zGvhCa4m6hieM",
  "key10": "2MCEspkV1Pht7CUwgkfzqMQYgHymmNfYDBHdxNXHjooxm1A83Gjw6q2dbbReJLU4dbA1DzJe4tW1A7j8KZTjzNxT",
  "key11": "3QuccDBvhNukgbVaq3r4Sk9CgojaKhbHj1tGx5o7PXki3vkfHk5u6kfBEqN9wGZrSQ6yFvF46QN78gxPcFkqYbg2",
  "key12": "5ASfUmcYC5NGMsqxY7JHaaxrtnqGoK2W1cbPgbouiWd5ogb1uqmS3vunmS7thAPSMpmpkMGsPmPjPvQq92Tanr9B",
  "key13": "otWR3yps428dEMJRwyNQmgWyWdGU8n6ybyCgc5ZZ1953914JtMMWGtgpdLZsKjTvVDNknePhy38g6ZobTod8QTK",
  "key14": "fyDrNm5daAMUk787dzarP7poQ88ntPKrA9qdMCodhWhynpV6tzRqjFMwcxDXRqGNBwVFgvK9zFMo3SoWDYZEgRC",
  "key15": "5uwFd3QSHXCzrLXovbvGoKSP9NcSMgkPMRchWwUxvGwgGL6rP2gvq5hVwPNS3BqgMo1oUR3ba8wXMwm4SCgVewsM",
  "key16": "2hiGB2xrqk79xERM9LYk9VWVZnSTnPBgqMqSKUaLmtVfECif85i7zxayKXN8ANb2RQU7B8nSfYzkgRCJ2387rXn4",
  "key17": "4HARccsn6TZAE34wzmp1v8ZCmkFFZXnSFSEbXx9Pxph7PHWTJ4NBzLBWajrxXFzfACpPbAJECBQUvmykGuRxqx4w",
  "key18": "5wQ8SG2rLtnEzZYwYbktnnQy1rEgmGGHmgwGAvWdDYbcibQdxWcuALrLTFZW1DSuwCiCtf9Z5FwkgrnU35pMe7Y8",
  "key19": "2eWaBuS2rsHt5pE9KoiaPgScfMyeNUEYVX2ShT1CppiABkJddbuTtFL4mtVkL9tnyEFwfcuza6Utho2CCm5qc2mT",
  "key20": "xfGPc3jZA7H6DdZDcV14moxbqY2gnVa9JuXCnRur1okazaaHCnubwQ4TmHWZKuJwUbjR6RPEgQghV29QqxJivVS",
  "key21": "4uAV588CNqeC31yEdHQHeSndrcQV6yLk37t8Bt8gncvUpy6yC1cEQxNaoN1SjvSSguEpQH9waLf1nFGMihCDMRfA",
  "key22": "VHcksQQHwHtkN35Z6RXTtbWZkipJhS84hoG3SXvmw1V8R8FjreuweNmicGsaKfKLPELjrFv5BSwghKsPp8x3ZkE",
  "key23": "5oCe5Y9DSGHT1bhpDZ1xM6mSsaLkgTEUk9C34uyGr5tYs6nofyo3WFvJHCf6pfu3ku3ZL9txtetgXbj82vEHtqyk",
  "key24": "JKQQ5dV4WmxDSwiHsRyTzhwVTwAyioAiVMXjQMGhHKjbXZW92Mk1RrWfbNQmMinyt3SwVrWyTNvwzQfS3AQ3bZf",
  "key25": "5HG5Aye2aXsCaBQ7RK1LA8BGQqPUCXHAURhj3TZPX9PWV3jDbNYL7mpUYfCU9eqcYVDPTy8APSLh4AuZrohSDk9y",
  "key26": "VHWZLFnqTw3zoSHzbptffFGKqEJRvMSH1e8tjpCV1bejHRGviT4xSXumh2N1L3PXmwrzTmEyd9AsL1wi2i7yJh1",
  "key27": "52VRfJ5hazkubK5z6vgBD4KR34CHXkdxUrpWgw6fBA3PvqchPmDzFKqvCmDEz4Jy9AnGejoxPywhmZ6idjHjNVfS",
  "key28": "435yfJGvYAg4SfvWQQ5vjAYiQDVGtEHjsP1sNHsGCWbrNMxanzHWy2P2FSz8RZzuzNWoq1Axu47zRoKhrXkdJtRs",
  "key29": "5GKRyNT8NeqFP5t5SAEi3DsehLvJz7AkMd7ABYchiRgVQyoghz45xoFX1abbg9n4isRJNaB7RYYqpVY1Vud9wTbB",
  "key30": "UweFaUZYF4qYeBmD9NCgKMyeZHNTcL9S2GZ6T44LzQhm8L5xNgtJzT3z9knp45yDFXmShSgfnMJVQP164okMQvq",
  "key31": "3148L29Go4QwvFTrGLQrpKWKJB3T5MYdK1wFaqJs3ZCSFj9GFdPABbUMT7JFpFNdayPe6dNyVKZHf38Y5CUBuW4K",
  "key32": "4Di66vxyNBEuNcvWR8awWLNjk7dgMCs1Xr8R5nWKv3zFo5sbmWd1hR6a1G8QYk6knowreBF7RKe9W8D1qj2aiycB",
  "key33": "2zVHQLkHZuFD88MwoJf9bv2JebJYZTAAnewEbH1JGZ32XEhatB3mReUFhD3WCuFSPys5thBXSguPgQ9Q6ECEWDbr",
  "key34": "3XVVkwey4psw38e3HyQq2h7KGGAVp6D6MEgXHaH4Rf1XrJV1HXX6BZBictt9XaKCuVErxuZmoBkrAiW9T3MGCQkw",
  "key35": "HD3gAHm8Gp1eaPaTDEcYfdwQ7TgS8CXMTNVM3CgZsydxNoEP7Z7PqUzAoX8UZf6BSyuMEz9owZaqLj7Srcj8zhR",
  "key36": "49aBD2i4mJUafAbVDXR1ysKWMaX8YQ1Xe5ESKMreDz3JjTqA9pPHpKEb2y8e3Jb7jEix1niVhJFehsaidXwoNsPD",
  "key37": "33Ued4b8ZzeRoV6cYXQm8Mnu2P4oCds5XTYLkNAbmTunGiAF9hZGbiQamJN2QF4hxjGexiLYLGMnPWxFgFC7HC7m"
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
