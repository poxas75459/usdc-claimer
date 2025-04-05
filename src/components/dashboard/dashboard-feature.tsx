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
    "2Wq8CGwM7p6KzXF7f7Xb2DYcvEiujzYkgiMdvK1t81M6fgVDVwkwtfYwShhhTgHWC9GnKVqhFGA4M4YedaWR6hGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yq3GYm9mkG3FtmPGbt3LKVKU5Nk1LjJgHBgPhQcYGaLXk2PnPnAr143L4fjzigaxEY8i3HWymDCbQZpysULg4nR",
  "key1": "274Xd31LvL1ZXy9f15AXhEgr6LYyRGn5hFzRx4zVTdfWNiRkGXNpBgKcmNuSbSTeRD5AfGhawZWkfe8G7w8gWBnm",
  "key2": "61BgMmyqtMYa3JohU8jger4G8dExxkPHKcckevhQiEwd5cGn7SX9ZN37Jr9ELQ5PVUzkKSX5EGZjT8bGGMLKZX5L",
  "key3": "2KkEyA3HxCaA5zkvCt3JLy2D2jqMRPEtbLw4yHMjZreLebzzeJj25fku3eMpFfcqYT792ibCFHMcohtHjLDDMHyX",
  "key4": "2zpXuLXwrmLm6M8wCXEXLd6D67aXUYuCtN8KWyMWxX8pnYLYUNhxwyYxUw4j3NvwGhhARPGeB5UdhjAMGsDA9cTm",
  "key5": "JUbpgATBJpRWLH91zGSSY4ChjYd3Sqz9WkJ9rKedwz6EXSR5wmxZTeNSm2ShkS9KMPEMgcEcSDS3AvMMTZJSq9X",
  "key6": "2jSXqk7QwpVVjVgXK6tMXLA2KDUdRRHSgyhrLZYeyU3EqQWZw4xZZB1ovJeVC93QiSHfreUUYhKc52Z5iVUFtiC3",
  "key7": "5Y7TZwtWvvBCCR7pFvWnr7N6BDwWEg28Bojq46BrBN4C69XYBBZiFn4MWejXwsjEoQA5dsQqBwMFbLnBoBXSNZLZ",
  "key8": "3MNd6F2XFUCVNK5QgdrqYuy69h14jSTS8kSiVBGFYHHLYxsdZrCbXHYgRvNYhDheRNcKGYr3q52Zd3Rz1Fr6kxrG",
  "key9": "9Nk4BisnKxLTAKg4BYxa14U6Q2CzMct7bEmo1neqki6dv5HczMMF55RsE7AAMjheWPNqKP745iXgWB5Z7r5vdyq",
  "key10": "4gLC6wJV1TEcLvP5oxgekifgX7jc3TbLG9DfcdkoyzFrU4FxkCui5xFcUS1dWJ8PKvk4UWoxMWXtp8WJ4VBiw9CD",
  "key11": "3RiM8wiZqU6hd1bNkHGGheNSewB2gCiUTrPnhtGciiDX58n3XxZHjHaSmdMCWpRYsPiSCPmsFtuKuKLQShsS8KzB",
  "key12": "5v36p6XxvTKK12yBBK6W5cCg6X5dLGE1VZwBWJkRcwpQx5t78eztRHtCvcnFBRcqKRqJiuuHG5DFR459PUiXzacB",
  "key13": "3siwpuJhS86WycaX3KiWvEKpK1wiozyJVzdnJ6mepMj1UyzVRdFvuUVdBna8RTQ2knCiNkENzrDRtJZFLqDhGrBE",
  "key14": "52rWwYFfq1mT3qEHY8xE6TLTPSF9QojFqxvBWNouTJ6D6BGjag7TwwfNUtQZywbB39WP6TQd8Q2VhbR5dML49SGU",
  "key15": "ZaTHhtzRpYgi9uqffBbiBTn8ZLpbLnBc141yq12ZSLtUkQHpZnDNmNwRRjZr8yQGX7q6TEh698YwsUVGvthn8si",
  "key16": "29aGnfZQZstWzRk2CWSShFWdMktmrzmHkA4nCjtMoPyYbfm4JPjBqJCK27CHVAr8AHKCeBouYvNM1nXZTFMfZEVz",
  "key17": "5AZyr1jSeLhjsVkAYuj3UCzNigs3MVntaLjQFshtNnCsgVQ954t4sHVy5X6gFrS2r8TW3e7RPRJdgS4VKasvFmiU",
  "key18": "2kVQCGRoeUyxAv1t2gz2D4YLs6hgEKEKK28JmqB7st2to5hAXZCN1R93mCMqB7KjUCBZ742ZcCHMJSYwgomxhqDV",
  "key19": "3ocXHCbcgi5Pa2C63iGwVpeLuUZdPr7CczjXD3jijhNfFMNKWSjxBS6XSfyfDjUogp8336v94uH6ErZErkjP473F",
  "key20": "3UZ6AitV2hEyHZEQX3zcSHwe1GcZeRxa6VrXvu8MyXJwasxXhBHwnd8xeqX6qCr1bRMBzf5SM8VwLG9vaZUPBggZ",
  "key21": "3FggTVTiaGMpJ3eV1DGEmLyQJ6cTA5861FQx4kHpFhGnx8KsgZmrFLrN1UGaCc4KHdqJvbwARyWtdFh4urkrbZ8P",
  "key22": "2hKvHJF6736xnpo4iAHjCkhczGkiG6J47YK2oDSNPTJKbicWodixyzB1s8o3FHAP2BwrTa1R54ceu8v5iuZW6MBT",
  "key23": "2vBRYUyPFXWgNTGMgMQ8XP1UTXGtuVPDiZ5VV5yJ84ofvsfBeyiTQfxrzJ3yHcqQW3koUfLoADcRDxBEKuzMq7UZ",
  "key24": "4qCKsQn9pgRevH6nxjmWMkEQThab8V6fMt9NzqVCwBwJ5RCSzsfzHjPocuZoRVawSmrGYiyLkB6e8hJA3n2pFZye",
  "key25": "5kHdyCGExW9JzcbvXVrJJh4Yah31TF5CwTxXXBibaBeaPxXZ73BKQWi2s1a8zfwobtcsMTxU3ayDpYBRWaeQvVNS"
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
