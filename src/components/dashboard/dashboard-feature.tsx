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
    "4nfiqKob7HCTXAfopLqgBuwdWh1xWqxcghCvmSpoSEt2vaPmDwUdo6A6tE9syrsp4cZnsyHdn9CdgpWC4BvL8Yri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VkmdHrv1Df47kPUHGgF33XkYSi1wP3GrfHApoMmpoXmHCPuHhbb234hAXtTdz8TSC9ZdWSDdvADJ8wk5drBY8E4",
  "key1": "38c8XBKffrfdogC3doz6MDRBnugfhGEkLdhTgt6q1VUgUM2wgA1zq9vrU5zpDEHaMHyYvAr5vEkwGywMhkG4g6SY",
  "key2": "3tCePvYhS72ts3wjSYDUm2ERPX7uiz5H71dGvpkdaC55zja2h3x2LETmWonKLcnjJ2jmvLKcPsJvn3rCeah7KWMZ",
  "key3": "pseUazoBHbmv71XaihYzhbRnBs2gAKsGHHbPWSNqZhyZEq4RJSL7ymfte96V99t9ygmMuzzkquL2HCjqN84ZM5Q",
  "key4": "3C8hJ86MvMuCixfjmWbhfA9C9ogJzagBJgfLWwudSNeWcq8d7gFfQvMBuYJAYKuh7cGzvMG5x4d7ZPorCEZ8x9rB",
  "key5": "2PTMgULefN42YTPC1VY4sCX6x6nDJAwu1HS4bnpcAGYbF4ctSjs4QM16ZvZLFQ2UMgZTc4BvUw1aMzTbGMMfjbHy",
  "key6": "zx9qaDZBSGf5BHCLTEsdLGbwUECs1gNnW3P29kim2Biu35joNQD9Te3HJ7nN4h95SuAiH8TVFg8BTCZbURuZHdD",
  "key7": "5yeJN6JjYWsrqj68cvBL2V9NAVD4HnNiitoEudE1pMKSYaDaqrug5b1PKgtQPwX5pNksrxdWnywL6RhsevodatRF",
  "key8": "3HjcC6PCFv7SdDvRXszJh8gxi7Pj41RsfomKwBBqU88HGt7JdDcyt99fHPDE9LiLyjUY43Gy9C5QDoB5xoqciq4v",
  "key9": "BqtVNcnZw1LVGvkn34qugoxJcM35VAcyzkw2T2MBptjdKkfExAZV75rgQ5yoijCiX6RX2vaYvkYxuTvyo2ffjGF",
  "key10": "28txstTo3T5cvU3gE7cC8MRwy85yztAFi4Qq33wz2T3cPk51sVr2zRzfRKy8tgmyeMHjpZj7CuKMEqj89KFUaDEa",
  "key11": "5uFh7UtqeT5QnjTNu9BoRxF97KErN4MRpU6YprDcs3o93N2ap5MsxPteQvLU7qkZ5twBrRQpw6qiCaCjiqoLb8Yj",
  "key12": "3VbsksPzQL6mLVzBnN3iEvn5LBgGXGtC4j1xYTiB2pjmy1dzaKpsSvfUoWkL8KKeeVnDnvTak6uFoMSNr4LXE2Hk",
  "key13": "3SjBcJ7XYSwxf8qGPnabVxAFy8E7p1teSZjW4KiS1XAJLNz1A9xVkFjZRgan7oSdsbGC61fhhb8qyDEUbznbAQRa",
  "key14": "VGmgN7yRneU54VgmBcRZVvwWLJvG8UCw6Ndt6zmU3DTzmjfaKHSiNunrL2VHHZp6rMWAgb2kbv6MZ1LkoFmSeTR",
  "key15": "24gnvrutfZHXWUTPd943kyi4ck2Pjh4z1mHPvMSB52Rmuh1AAKGqgLyWCToe5GrcTuemf22ezm82ayqN4pnbcUYT",
  "key16": "5hFvsyCULc2TuHF935ppFDY6PrtQJNCUoCeoXP2vSh7txLmCSCiXqyNH4spsbLaeWRQs2CqfVeMz1d1Bn5EbxxCt",
  "key17": "2AUSmicHQv7YRWfkVfj6ksv8WfdQZgLVAPwcqZu6tHCFbhPjxwReX5dYNAkAyt5oQpQDJTFScDCu1TEMWgiLX2Fo",
  "key18": "2TJX75P2TTe5AtapUYFiEgaSwKMWQmog23PuedaqyTKwX5H8EiTA8MccpSFKQpok6k7KUB1nHBFwDgmoRPjjxK3e",
  "key19": "2jdVUyF3udC7HzSjSf6NguFMrdpv7v6qowFJVGAGnV1t76ooEWnQTavLHZ34cW15MaZKUbZNpQMc3bjcbDJAzZFv",
  "key20": "GxXcCBrV2NAQrrmeVJfXtHHB4d3RTCi328T2KRKFNKPg9rzfd5ftMKKXZhJ89MVAbPc9SqoXSFB93SMptz1V9Jg",
  "key21": "5KU5sUcF28iNKUXKe6BKjzDwtwy8THa4zWhzt6dptMReHrsYbEDZ2Nrzw2j4sSqS79khYYmAo6FtUQ6XZKmhH1D8",
  "key22": "c7pVrD9prTcACTVx9i5SeCA61GP4ZRePx17RMBiPEVCmyss8iioCKK4yTP2LUfH7szC6RsA1Assg4gSaNkNLEk6",
  "key23": "2iocqoxPXxWDxsgWQGxtZnUWEqSscXLfxP5rQbHAaytUCsAZA7C7RyTPMLCNxnAbzwcpR3256qeWFoPL7Fc9o6SH",
  "key24": "xghJgsjK6jbe55BZZzF58KAFrN9hbNBVvBcb7y1xSHtD3HPbDzApEo4Eyk9LpqjmSkXmpczY9YbaG8TnGVFpgYu",
  "key25": "5gfmXgtNBDgeG6rRDrN9B9kuzpebxiMPdYx2Yq3nGm6H4c3E4nFGVcjVRDuCdAKPWBzy9PZb8Ek9jY2QrxCF8qbg",
  "key26": "3kJSai77WyBLdhVKyirWvuVu7mHRi1LjQa4SSx9msPUGXkuyY8kdm2KMG4ouGxZEhWY8CtmnuCXsuZThbsiYktPm",
  "key27": "3dus5mmDKxUk4mBLxgR7U6gWhvSmdk8NvKAugfMy9s44AmcmHXDw7z9sono9dzMKP2B5tHC5ZMBgASMePnXGs9qd",
  "key28": "49v4s2uEvfNiPwjwHxefHyXMQCZWH9gWYGUzkuJoLDmU7Vux9bEaZThm8UFQFmT27YouexCsRuJeRygZyc58XQCb",
  "key29": "4uiHUrZiJg4pfVqja7kf3n9amNZUJutv3cVqV6DGo7kEYU814ynf4rvRrFbLgUryeHSqEuUcQui5BAcJhGVLkD6h",
  "key30": "5WFtkb1WCoeX78RebTdFWFfQEVnYBfQNHCm25hoYnF4G3BxuBD4GnzkZqxpem1z8MXZKHprAjEbUFXAxFQ8UwLJB",
  "key31": "5F51y3K3E56cDYp8eaztALZX4nAvnrFx8UhVYW63vN1YpQ2G8NojcvsaaE3j5YNxva6zztXL4Qkyz1n9d5SRMPm",
  "key32": "2hCzmNcM1c3mjokwyLFURF5ZYnkCPFePAcm5szQeon2cXyEUu4d6vQeuH9BYGBzv744E4WVnQLm5uwnYbgteLNco",
  "key33": "t39xKDBc8KTaeTVLMWQWrZ3diPoz29QqR4zzYfFWdu5L2RSboCaiJMNa2roAac3D6zjzzdfGbgftTCKKVrhpF3G",
  "key34": "3byDjVVce3XBq9NrMpap5jvijyHRA3jHJnhg5YeaszoKAQru1mczMTnMEVvQRz84tuMFVfgJvD1NBJaCgAqzwC3n",
  "key35": "52SKg5UicANZ149Z4BwEzuozy2rdEqUCA9rTx7bBYevuog44qiBC8UAo4nxLDZYTstWyvJZVHj9iaqCr7oMnqzJb",
  "key36": "45eXqQpUA8nKZqstrxWuiywm82WP9BhM6Ju1j1THx8B4WDV4NRZK1r9tfBdiNthGi6MAYt21ezmBAiQaFt8qZ3r3"
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
