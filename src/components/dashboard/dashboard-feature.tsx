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
    "4TMo1pANXDzZekXJuFt9wBbN6qWwVmFUvepzd4jx6QSfJ7rBkU5PktJuXbaCHEeehbcnxQvyp1qVSyS5rteRkrrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aGr8ANFjQcWdBajLJbUAHin7EUzXkF7SoLvKU6zouohVaVzqzWiPwdEdUggETwopc6mgfGruQMVoWnJahSVH75Z",
  "key1": "4GDKzS12tPP3GBgWBZxTt7MxV4UJJTmq37TnhMLozxRyoUSfR9kpi4gZfnJktgS1p5an5LK7oBbvAhT9TCE3Y34e",
  "key2": "8dGdyYcKEH8tq2DXE8ev2p3eFHsJYz6kkMHvaGqYBZkePGC5ZrEtvvhFzR8MpF3zwp9F7TGRHkWp6Xsxdb4HXBw",
  "key3": "5bWQMojSteSyMw7MXw2y9b3curLhHfnWZS2VxZjgvRxX9KxhcjHX8q5r7NZ6JBdJ4NKFp3gYLUCmT5cLCPWe1Evx",
  "key4": "3GNikPPgQmraVw8a4L1KG2yzaeJn8uJAE1wZYNEm5QY7ECq3Ask7mMEY7iMwn9EqNnRqXhPoi7kRVeoURpMuVZpr",
  "key5": "5Ssx8WdcjK4GvbRtwWd1g4bJFJHhkS5AT9HqdLJ5b6oaJCyXRXqabmAZ5vFEhmnDV2JR1TYUMNxV53GEiS1cdGL2",
  "key6": "4HpG9kdNCw7iv4R8Xr4Za8SEsd9t1mC4qihB25u6sHzhRgAYJ9cUvHuWQSSNwCwbdnATqUrj5LfELP764cMxb4ue",
  "key7": "4rnRJTVrhDEoD91Ncb3wbvn4njp6gXw46hKBEU4jV5VH6cVTUpqT4fJYtyJS5VGcdVVmqFGkDyCKFShD4L766gJV",
  "key8": "2c8fFc3RnNzVdgX7MW16FMcRdNaETvoPvhSZkCC9AGDWbS3mBi2YZEyFEL9Jf9KJC2GTgqz9fXqyBRaGyQ4WdvjZ",
  "key9": "2FC2rDvE4pyNmS1VfgeFwrozZtv3PRWg8Pe8gD65bhiqwq1KoXAgHpfcvRM6rSQZRr934nXHw66w6DLbFoJe7rBS",
  "key10": "2wAQDSejsx2BWgsjDhbDwNnjDUx197PfVTusuN3aBuvHecytG4A3z3CraSvYUruFuuRxxBpGybxTJ6EdkmhYgGdH",
  "key11": "44yeM8SDdzh8oJZGLrFWPuA9yxCqjBKAbT2nUigknN1emh4bArssXzpiL7BuMe84ACqatQmpDMQ4URaW5N1z8fwE",
  "key12": "62fLPZzX8cTAQzyMPv9yF4zicUQRnRvmyr9t8TjFD2VMAp8i9QBfg8SJeyJenQfgACXR2MTdPvSKvg3BDL4TjnAS",
  "key13": "4rUVbJoyHZjd8yMPFwF614MbEqLRw1WeEctsabYZbKVZLu995tcjSz2yMUj5jzbPANGN49fMGHFvuBv9TpsxupE3",
  "key14": "58tHjfJ72FbyV39VLRAXWbGFLk1jJGoSjykKJuNnQXf2Go8T4kxmqYiYvMJ7FD2S5sYn3crRViUYXcF5nf7hCycw",
  "key15": "3Jgt5fvifHv6HdrNWKyW69VZCxV6VSXSo32SsFuk5EHGU2tfHAUbqHacTJRrFbf4se1aY3wkxzTfV1kUtAPUzzfX",
  "key16": "5KA8792Z5934QXgSGaRSUSWfvXB5ygtiP3SQepiidAS4d3XwWZ1CsTxZSD99cPGKxTQ9JVRXarvmow6v4DdTfm9t",
  "key17": "58yR48qxbAPDM9X3tQNTguWqBCWjgM2WBTDXQ3DTobatUNGHiivBm8rFoEzUnnRyjfAUZLpT6bg1BXTn5pMd6umc",
  "key18": "4XH9kdXiCqZfr88EEKzCJnjDNockczNHe7GF4ey6e2yUSPuDLRB6by4id9GY7F84d5VkCGLctZuD51piZ2CL9e8U",
  "key19": "XvsJyv2E4MMesGx4vAWkk9K8DwqT8n6f89wBbtSS3rqgg9hdHr3tKn8zYVtxqx65pmPikscBPKyi22goPGT6oe6",
  "key20": "4Z4kSztzkkhA6dzm7pMHqguEnZL7nCmUvw5WY6ihzb4zXzgc1qZvRDdCJm3HAwF2zfP1JE8Rye9vuqXJH4YbULv4",
  "key21": "3JJ8rQxnr2cLgQkVNHvoiUdp3rApwvczXMTZittrE5QKuyQfmsG8X1YRcQUzGFo8fBnzRK8Babx5EPsvPcx4zHGQ",
  "key22": "CYmRYCiVuC5BEHsHLxrYBKyUfkjnQEhkAJDjfinGJtZYxP5GVySxDLGrzXDFDp1s1RaAUE5aNeNH7CSPjc5afhX",
  "key23": "29b8ZgD9uiq6Qu2RmyoSDnqcjuDxQHqAE41V2e2t24v28afukUifJ7sXz5Pz2mCmYBwwRBHAp9SCRYepekNKqBWZ",
  "key24": "2QGD566JfSgiR5mJHZw4K9Zbc4n7myxfs96EcHjHpjM9MGDoBNKnwE9Qjpw9vfztPqsnXj1AzGrXFa3HRT729iFk",
  "key25": "5HU9ghTEZyRN1zb8kCtuawGubCjt1CmUhoUAeD9oF72avFdfEUuHHUd5nkYwgAkQjRPxDeBSP77kA6axr7P29csx",
  "key26": "3qNbw9nNaWgX6Fsg4fHpGBJQ5oJnyoNgpvk1V1aHw8iChKyKEDFQ2RJUS9vaujnDdq8pH7sRCpxeaX8Dvkn6uLVE",
  "key27": "6RnTruA8L2mwNcJ91dtGcdYf22dJzKyZkfBhPjYjai84aYRJxqiADj4egpqQKV8mpKrZFGPHBPA6nUxeE4vq7pN",
  "key28": "2TKMjtdUzxMPnDDr5VjFs5TnUsm5gqCZLjqACdohKeqiYN6q8LjhbpqWZoY9Xau45qvtaCkAphR6BKXLt2B9cj6U",
  "key29": "2cdf4VCk4K2sqS2GgHhyRLEh8TY6pegRMR7KeEkZh4igd4EWRsakw8VQhixVCpk12ys5wiu66oE8WtJsxCgD6vFR",
  "key30": "ieyry1X6g3NnFkYWrFM3Nf8p8Yk7kYMZpd1KM2rFbwMPTQLnPQrwWFTCzrfojfaNYbbZSEYowb4UZVZhNbQgHLX",
  "key31": "pH3QL8NfM5gCJEsKPezeUKTDahFYtUUHF4Yme6LKjT8aHe2Sm4nx6cdtfGv3LUZYm3Hk4uFttvRTbjQRprrLRCv",
  "key32": "4ntt7py33Wbb3tderenqJgcEaJsUJXf8GZRD1W7Zboc8SNwVzN4hAPTGT3SkeZ1KoDATPnKPsGdWi8Ve1Z3caJ2T",
  "key33": "3iAiF6ixFe8HK1S9pF3TdKgqRxoju8aeDdwPxioGpZXHN3vM7q8kQY6LxRU9Bo3wrmT9edRzgiFt23oa4wfBoEjc",
  "key34": "2RkNEGWjNkcTYhqy195XUugNhbJGNF2Ky48ksWqBXDCVts7CWwLYz9kyLfCJ7PdRiaQVWaKSJ2x2poLS5YGP5jPp",
  "key35": "RBbxwkoxuPGbN3N8nhx1uDkUVnjPqdT7E5QRxAnTFVkdnLy6dGi1kAGN65WGkqUMvdgW2YF4PccqY2N3EYkLbSR",
  "key36": "3oUFoL1Qip6yJTFaPvu2qmuLVW7s9KL74toeqEsipRoJi9ddo85j9QRoBYomAHAoMUpnsY3MmYR9cPkNAzcyvr15"
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
