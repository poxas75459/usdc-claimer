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
    "3V1RKQ1Aj4hTx422rzqAtyRcJWyNdx1697PDGmNFaYSQQ4CFS9TEs3JP4HfbSpEkAb8ySk5EhtCVaA1ixRRfT4Wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LDGWqaFMjB87hFGtZWhdAbNZPCySUYZYAPB82Hv6vx98knx9na61LMZG2nmYPSi8nwq28vmgiSpUX849wWJ5W2Q",
  "key1": "3HN9tmePnWJCogi4Z5P8yBygzGb2vcn5HeNCmPH9YmkZUQmKdxAeYozPuJvnPnAo3e5KSVWncCS1JENB7wsf58sJ",
  "key2": "BEM9sQ6kQD5rvwzKSD2M64HFWecBhDvBy7NtJwG5GqF21y5S6yb6JZuS7f1fuZyBEs4chSQAtT1eLfRZ2A77ChT",
  "key3": "zM2zQW1bjenq5nbo8WWavK4BCKWvU72tvkbztCn5YisjGS1rtfpH2hPtTiD4j7oWpK2FWaNFMXC5y4VF3UnqMa9",
  "key4": "tYeDFvKYJdKz6EeLACLGjj8DDBhpzyJgkacVuAwqtmY3pkuEFL3fQXYJ43edRNNFCGqBEDkNCW1HdjepUaJ8Ugx",
  "key5": "4pysxQEsXgap99YbVVUs2FA2Z7wJPNVZcSmZdrXi18eG5mdSwu74b5BUYwifi9sBthowvZaFCPkswu2tQCXFb1uf",
  "key6": "66UJoedgSXtXDiE4BFPx9i7f3VtgwtF7MTT8Q3sf8mpmx3kZkL9SCyAGaUtE6hmuKZk65cLqxEbqhFfcVhmMF7Cx",
  "key7": "3KRqH7NCAahqP8j38Vkeny8LZP1yH7WztuvgxvFPPxDtHJ1N9Jjjtr458SoSB1SNzVFzEj3C6RBqN1E3KB4ZpdP6",
  "key8": "xR6z7pnZ7bs6DbwETGwvQdZzUkaZ6dPZgWeKH9jF8vFvrPQM4RQbYEDo7c4AX6RJD2f6wgpjifA5vuS9opuz3zV",
  "key9": "awzGp9cUvpxDhuuWadb8tcwjLcXrbMmLm17eQZPdqEHU3ZA8ir3wDUag1fYijMPeqJc7TNXn4Vg7cf3bBsayAXg",
  "key10": "2epWvZzuYMnwqRhrXnm9pXFwJXsKXzbm2CHzGymFKN1oL3v92HYcVVSj3jRSD3JG36EVYkBh3B8dMz1gCs3P54UU",
  "key11": "5PaWZUgKvbPkjveZ6ZtEgxHuoseFD2VqNFMiprH1vA2J7jMCkGmKuUx8eiysMtXqPvyYZH7LLE4c1aUXrUfJChtX",
  "key12": "Uk8QCFkPZ2jbdeNSB3F5EJgGPmuGTWPsMMWL8cAyLnM5B3qbR5VVLuic5dHbBHbsNR7L1fnj6nEopEKfH3rNkHv",
  "key13": "2bK8NxepqPA7HwKs7BT4ajcYJbN7pzT1288Zb8x9NgMWbukGQnaY6LgCJFQJ9HeLe5LuZR4PfnciGka7GWDRwBVQ",
  "key14": "3JNvkA76ko3RuTNkoprBZxmS3Ax9b88jTojkg6gS2THmCp81d48EbMx4fKT9VnypsCQp3SZobpGaVHzj9dhggE7Q",
  "key15": "3oP9tZBrhDCxxg5iwBpnXyNusqupvq9Mk2k58kJp3m3DoWKqEH6JUmXCC3LibjijLgB64xSULSAsi9D966ZBFrKq",
  "key16": "GjS9TNBS83JfNE5tWYgcnszi3fifZz6AacdRabre2M4kiqBiW4KgwmvnrEZbB4F9MWM5yiHhBiRVM5Yz1qrasbo",
  "key17": "4LCHGcVR4wTbeS3gfLV9oZnVzc1G95dXViNdEH7fStU19bsnKhudm6NBXXiR6SwsbGyEANYd8uZ5699rDweBpxhV",
  "key18": "7aQmdM3p7MZwpM3ZqdEXhCgUWqUUittrZJjfmemfUBL8yqyP7e6aCHqgN5qgd7uvLqXCn7Uy7ff8bABqfA3xyjQ",
  "key19": "3yZeCHseiFGspcLD9YvZHYwNwAz4ZmjSg6doVty5Kn9Gbys5nd3P427tChrZfsEedEGps2PduJoW4EVW3F23Xrix",
  "key20": "5edkddEhucVDDXhixof6PWAucd4g7v6z15X2sjRs1v23JKGrTrAAp9nnSAmV3L2ySnEoEbh6Lz2DsWxzhkjSQB5e",
  "key21": "5buE48Va1kAycDEUmvjEWvLB52sqrBCrwLe5i7dURWbCmbpjGmb56dWwGQW9ajqeHeCYuMQXruQXu6BbJo6eLkKu",
  "key22": "56w8F6ZLqL1q58uH5zGtidCDw2NiQBMgzDXTMvTfsmpiKt6deuw17yCoREQ3RyxCZFRj4GpBtzD68Dn27WJMeW1U",
  "key23": "27EFRDze6sQjaRttCpfF4cTm9rgAmmvnMfQqVys9L79ttyA8DuYLJoBjKvQTCagGWSGtGWZA4APzN4wowoBvq53X",
  "key24": "2DGMxqZ95A5UzQ3a6DxsyB1FXm7wXLQtXxw2iYh6Sv9bDq4rSTUpskG3hunNmJM3zVnsq6uW8VP1Gm32m4fvyz2U",
  "key25": "51VyyYwkYpTHqzcaDNMLbnkAjyDZ7dapFRGtN8N88jhj6qUqgFW49zWiYJ1RYmwcN8RVFFY9cDEfyiCBjXzBsgrk",
  "key26": "5trSqeQ1xYQgRMTnV2wwCqSRmwJBMc41UpNjhCb8UnpiQFWADPxfVnGxYdX1v7TVCfL8QB2q4Vx16KGuhrpf8EQu",
  "key27": "WMH1eYMB7BUAVjR3KKU5J7v6gvGEHkdynhNmAQwaMv87gwJA7rzwBtxtDicXrrVPHfWCDL3qBb11Gf6Zt8TsyVo",
  "key28": "66fGmL1FB3XepoQimxDXN6t3xNMvhrBTQYezyToETA7QdnZSa5xAVsxnB2fmoNqgi45t8tb1EYqfesj5QfvMdMPP",
  "key29": "2HjsNHt2HWKqjtfCjzoNcHiYEkTRiUqKKwKorA1RebfSJfa7FzHRXZXEh78KNtV7aVtvvmUd7gsUCtAXqyt9r3SQ",
  "key30": "5M4zpNwy2erzkQko3daDhtbB1w8Ufx15fUNtJ9BXjgBbYFoqzFrZKN4W8k4ok4oX2s8u9NcYnM6RpXEACegB7gmX",
  "key31": "2gtFGfEEBtZCaxQBfrux4UxgJqKELHH7J4stbtmrdxQx9kann6i6CTYgqJQJJr1S8Q6siHQGpeHtx1VdwBsXZFYM",
  "key32": "5Whu17gX1jVh23p65vVGcrf9s1C3Bknhb9Y8ETZoEM9tqci1ogUVmfrroCzggDTCKxqm6ommP7GgAe5zLLyY3SYL",
  "key33": "6Kt4A6N52MkZuypx181Jnwymric3JrwpCWRnpiq51Q3ZRwSRgzTGb9JZZXFAeWGSvvHV5Nzusj8DGG3mmGrc7qb",
  "key34": "27upfP4h3dxAscbacfXUPjxFAaPCsUKfDJy7ACwcZk8JQPSxVpVU1Bb7bKwvMx9iawhXXrwcVPZ3jNAxTicG6c1D",
  "key35": "DTiqmKRQWxMej3vymuuGLS1HzEZTpEXkH6ponDVNjXNJ3sDiZ3JKMbqJcEoU95g2rRzWMyLaSSsYdvshqKo58M1",
  "key36": "484deAYkJES7kAESueNeZfRAPRTLmkHdNBpRFe2oN6qNVBaRcofNjPhuufbigH4pn7UZYqALvvGuc7cgxy1sArku",
  "key37": "3MaAyWkPuiUys2FVqDr1Cg64pqp3foWzbidWePdFPdDicEQug4Nk5R5QLJWCdx5PBZysXAqSK8DoB7sQuQALcArP"
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
