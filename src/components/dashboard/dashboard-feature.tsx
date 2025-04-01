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
    "4xbvJ28GLS5jFrUyPWAYjhGdWdZqj8Ut9d65BgaGLrG7awpvdHbSYwEpLZqZuYb85E92cQbsPNMnPGjZV6NwiqsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z5smH23Xe9qn6DF5m4jUMrPoZrD6B8LgPgxE2heVotzZE8iDpHupDaXd3zytuGircFjvSyywLXmyNAVVFpdDoru",
  "key1": "2TQEXaqNz3xxudSTE6n2S1jTY8nc57g6DPhHhyt35pS2NY8TmT2ipjRG4sH1XBgRvMp2nwrTU4WivbPFQC7zq9j9",
  "key2": "2mnaSXvvH3CZiixVbhxdsuhaZ2byWwSyshLKNTU9ZUE8rqr3tWoiJ5xBpZhiy2kEUJ4p7n58CrikQeXRfPUmHKCU",
  "key3": "48Abji7eH7coM1pxMTwMgAWVDGPATMB9CnCNhAATjQjBvak5hxEYP996qzAvgJiEMuVfSQUZmGZbCTVikNZeMG4E",
  "key4": "5FWj7EBs1nMAuW7TPiX7hP7ndp41aucCukhM7qHriKrCWP8M6W1mjKc911jLgrbHcMZRcgwyT5DZdYwLnRSqa1PR",
  "key5": "S4NFqEnWKuLLWyAVdaFuw359EGP1A8dh5WTWs2RopgkRQeNcPDekhmqfKMSi4afCBz5MHhfwtyUuz1neWBYmcfh",
  "key6": "3bDrcWqbPC3H6VzXhZ96PTLUZbmG2g15687X5thuZaWxgP3BLfqtdvjmWYsPXkYPzQzyQiPyuZqPFrWWTrtYk1fR",
  "key7": "5qEjnKRciKQpRU1u1xd7wmApV64XEQ1YHQLqj5vmRZMKCabrYbUVmEQSKjm3GcTPur5eLKkPee3d4woCZMcrvmkh",
  "key8": "2UmoMPQZbjrCKacgDpccSvEH7xFfwAgUA54LZdVUfFQgMqSBv7b8qUFAfBNCyaUVRYdgosHbQysvzEm7EWroo4tj",
  "key9": "W6b6vbQXajr2pbvxsra3CpqR3NbDVoEGFpDoArh5kfsA6j8Cket6yDT9QyJvpxnZbGXWyikA7FoU2RaPbtycfEr",
  "key10": "2Cn3GvQZQZCympsed7wSfJy57msn7fRrTnaJbc3NqWLj6R9kapKUXqEEgBouk1YmfWeEXsdfjtoreiAGJbCpHu7z",
  "key11": "27Psia5qwyXDgDWrpoFmT2QjWnAJTMTHxJCjUC3VKSZ165JaKyySaDxFa9KDsnjSPHgYUWVKjXNc4T3quX9HNfLS",
  "key12": "3CHioWvTVkA3UpjKmWrvVVVXcVPF89c5fkgRwj1kF9sjBsJ9THvMcPqX7taAAcFcxCLgfjuoG7NHKkCy1rD4Eb53",
  "key13": "3JJHqDfYgC16x6xCoPDnYJJmvr2pzj9W8fxnNZQM94vmxXjHm98ac1qzGU5dBu1Meun1U4yriWYG6HcQHddxqzte",
  "key14": "4SCJrDT7A4Xwym3xwLcu9FKsZGqdFDZeTmtvCKr7gDRaGZYf14ZLKfEzveYYc2wgd9w87MqTg7Bebhb3N5mZK61P",
  "key15": "43YKoqYnFCWyXn92TH7AdxgjTd9HNNTkjKdBNKUqboUXzP6d1Sbe1nwo7TfkDL7McrbiVrJGxzxc3aBDjh3Zq5ep",
  "key16": "2tS6YFwNZLA35VimBrs54zKcvzCaraFzzvuLUJywjUPahijMQguVvYV95N3qq2azH5wsBpYwjwwquikfqWXPSLYs",
  "key17": "3TPh9Zd3sGv4RhGx724Dxe2gVBn2L98MpcoKPGc8hRoRhdT2dXYnzszzy2eW9gjzrvEzVwXjrL23HfrHz2mpy7jV",
  "key18": "63rk8bzQx65iaYd4gDXzU2HsrSdsND8G1KHvVyPbLzaLTLA4GbXqhYxeUJmucaxDSJ14xUVXUqM9oDmhrHumnLLo",
  "key19": "3BFYa4jjCqWtscuMnhAVFzgT7y8iyh1bd1b7Yrd9eUgFvZf34eZiK75VeZLFrvMLuMzBEBwCLhn6CGFUfUXaFFB4",
  "key20": "3Li9D3TRxUFqHPRghG6FBrVwbd7DHJmbSkv9jGoiJjHVP8GrYpfqwxbkJ4ZQrJsn3pduk1WdWpBx3ciTmk52XbMK",
  "key21": "4PCDZDuu24c8Y1QSXp1fJRmXjZ5jbtrZ56cXUYfwsMRNwWaeZWEuePdqzrNdxkkiJMhynjn3suzdEFR8Tc5izVps",
  "key22": "4AGDc8BGLVjJzN9DgfmS4kwwHeJ6MWgivvXphoNp9PhLyUspVFH53wj5q9ze75xgsLdxPQyjZyESmAHuMEFc5oS1",
  "key23": "571Xs6Qg19dQme92jSKfBqim51hWaCCHhHpgLcUorsgCeGeXFWnvz23EFYSN4BjjofuV5A1W7B99EZ8oWU5tQrwk",
  "key24": "4nj8h3CG7zpNtXMsRS5QRoRnawdnxEpGQiKs9qnv8ik1BHqCxffDic4eS4KY2W28myfHVATDdRNzJ7w2JfmBq77t",
  "key25": "5RKnLfhKAA9EFPKQKv6jPqbgNzwAG8rsKBx6NfTw2C4UNAP9p7MkyAwNX9BnKMMKdgPyrK5rUHsYyJJmyWRF36gd",
  "key26": "RFNbEii2w9BoHJ9VRSHin7cBVUVwYXKiFZYFqWGxcXpdrjvUKHcRDLae5pjUgpL85zJ6k9LNu3WecMUjoUW5to6",
  "key27": "5BpfSputq9BizvaG7JppWnHag6XsitegdukwksPtNux1N6vVvesGouHSekbuSvy7CQEBHgbts16enmp49Cq9XcYg",
  "key28": "3BdS8Hfh4NmyK6q9Xtfr2HgiLFwREVSCsUsfEKebWBjQAXPTb4DBMtRvpDasP7RZ9Eyt9Zu4xMdxqvXzBcSaNdRh",
  "key29": "5c8tb5NVrSTmt2fcmgr218wpabojRNiXsovygMD2ZVN4NV8AGm4cawjzGg99rUL3uzZnNKKTGxBMYRBtYwyRGxtK",
  "key30": "4tt5ZXvkkBjBJyvGtdq9hiYF8bgqK611dt5u6miPmx6wPjq1GPohXK8khZysCGbBvRYc9oh7MPYpLuPoqfG8gmg7",
  "key31": "2qxYD4Gg58bwd5NsVehBEhRbycCZD6Bqc7N2gT6MZN5KmhV3yg4jBfZz9nK42AhVbj88Gs5xDP5k2RGpbDPySgFs",
  "key32": "2HxXCNiQTmC3EKRWyLHMgLr2EfnA4fbiQHS8E39Yn3y8mMvVEP4TFAZgZhj1RWcYrggikp2UYhKoAUHj978ZzqLy",
  "key33": "2YLF43wKYt6645egD2atpVQZeUME96y7ALXSKAgNdLNhj3KMnx9L7sHQChZ5cFAADdwWCmGS8h67GECb5ofurdJC",
  "key34": "32LgwBSnSnj8BZXXCRw4BzvMrDTuM8Feh2v1Sk1YqbXmkd9TaNejrvyfaKrYTnme3YHTTp4c8WN3qwJnRQJAoVgF",
  "key35": "5fA22Z7abPvRCsm9BbcDCArVV5qBHN2ReTzixoEq18SVadi2vTKPkKDsDFRkzdWaku7dwJz4j4bkKvJhoRw25vss",
  "key36": "4nWymt2y1GkEeCiEwN8G7ZL5wFyJ5wKAsreE9AptsJy1cTLXf8whrJxZAG9DbuqZaZ7ezaQMRnudKBTu6Di2SQyc",
  "key37": "5xZ1Lxob8BzKuxgcbkVD1Src1CuFpYXyNA7HFsxVhZKKbQG92asjZH9jD5yR8sQKM6NshJWEUugrL1xbS82p4T2Q",
  "key38": "wPBYvaFa7957iMXqY4impa7oFN1bxjK6pPdjuNUdYwAPib6WAMn8edZ5hbXSi2A1BkrQcjCwJusuPkawM1hitW8",
  "key39": "Ezpu2KqsUVbA3idjmhY4T5d6msD41CTThZoz91jSSvrUxTRf2A9SnG12wUfbvVkdTKitagEGhmFonfZtiXZ783j",
  "key40": "xNMAynfMaWdnN9hCorcTUJcoCGkPhXQkwVQf5wQznGnF1mySBFowaZVGmVHkCvqLNDvSz3wtYiih3EC63XgjfeP"
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
