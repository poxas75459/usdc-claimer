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
    "319VofgsXNybBNq9PVkQNRBf3iqkNjDTh1SB12GeYZ9LiNZXauNnHcSfaPqfb5GtLBkbdzu4YNfUESmL9k8cnUbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wsKogfPj64tuhsrRKCoRQ9fqsjzXAf9NaWaQyXUn6DQzUQCu9kPVZTgQW7YKswb8N5EoaXQKt72LmGRwzpge8n2",
  "key1": "4SLzTx48Ba9a7K6zyWhA5ZSp8Hb752aS9dFVuhgsYRM2awaa6hv8KvLuxZVe1i4NtHSvKz2eEnALZyguyucPugsU",
  "key2": "3qwwQU6VE12uzopcdW3kqyLbQF9mx9hvtcMR3aqYPgWPRq64C97HsQRsGYt2coM9hJ7zCXhEKWW3S7o7nV6vqGB4",
  "key3": "4Wbu3mpMqcV1gWxRBmDjvCZQYj6kmteMsPbozXd7Vp43yW4arSoLYZZJi8ngSXiFmjrAKZ7qgRG8aFBi9U26goZ1",
  "key4": "2q5hrW1Ura3VzkoVdnpTKUyY2uQxuRCTtpi617Hox1Gv1vBauatLMGpuJSW6VfMy7vwPpRi6SeyyphwzYbWrwn4K",
  "key5": "5cwD4QNtr8ua8tTfXKjD4rAJbAdPdVyBYayPS3mpaUVNp7THR4bswETSNfQkp4PvQzUCrwEKjxjfrUbaMsmuZoQu",
  "key6": "4F1edDLGtVtYYC64Pesp5fxsX1U3Ep1hshWPBeCb2YybQQVGXmV8bzSs9FSPwi9wqUYkBoKjTGtNffCCDkixB963",
  "key7": "245RTYEFDcYAqAch1hdh9NJghMDxrkQuEXKU3bZN1Nfv4xJN6h46PfocFMVdEy4JXjST2tBWHWchzLkJPZYoHJNz",
  "key8": "HoZt2vm26fq6SscnGzJhzchecewZfzQdRFe6E5Ru8GbxqXrMf5wokMUd9uMmcyof6ndecaUqiS5Cu3akoSdet3C",
  "key9": "3ZJYooMi3kxN6DwV19NrkJWZZRycmrew9UuM6TgFSiF3t5QhTG6KehPu6JWGbDwGaCXGCHV2r55xaSDsgoFJxM1a",
  "key10": "3r63yFoP35tzgEsyaJg6uPDwkwrgxTfixxdPqBbvkAuwXuEyicihhckB6hbKutJjiDGtfJ1xuf39BuL9nN3q4f2W",
  "key11": "2dz9Xh19uMGDgQLbm3bQsU6B2Q4J4wFFUbN9tLYDNj3avryjBDSeeBZq3tRHhkExt2tMf4WZeaMUVE4xmmwhLymP",
  "key12": "31ue1eASfAq3haj1zgizqSCvuttrttAeYGgP52WNbySqtKHtAfNGN8QwsE33PvDcXUbEPniLXPqCSuw8iYf9A7EM",
  "key13": "4mPPUbJjDYc854RxsuiJe1f3WWwW8naPrDfCbfNMXgsUpEDUUcZ59mrFo5h5jpgSSaMHjNudnPZDTUFht25yTREK",
  "key14": "EBctFMJaHsWBcow7CVu6Z96XuYMtgRW4isL8TXFb9WwaopZ6eDWD56bY1hJ88S75oTZe2UrCwrM4MDGervxj6Ut",
  "key15": "2zhP5js59SuEwm5ZLqe8TgPGnxS9G7qHrKRm3U7xRMqLkVFYkXvamJa5cKYg848SgTT4Q4H5Ktns3oecCxrN5w5T",
  "key16": "48FrVqcM7suacPtFotjK1UBmrJNFDeLH91h71GrZHArKm7SLBq19SFcB2HCSuayepzdWVUQVsFHkeZRJCjezefwY",
  "key17": "2Lj7s7Q6qonMuEbN3ke5WqMQUwFyyrd4JiScLzrnRy2NBCRUYxtE86tgEpVMkt9YyErpCbRZ3gcDjRR5CBceuvyi",
  "key18": "6xWPHLMWKDgp3ujYeNzkQfuU8gUYUsQb17qE85vhAQosheqgJdFrRrPJs1Nd3ofj8KGW1tmo2ChJL8x9LJxpPcq",
  "key19": "4jDhHsQynqtc5sKCBxMnQtxzhygnFJXPthCC5ZHCMonfdoSA2ALKDk9TZvUUGGZ7HDjwbLUFbdsswmctWBMUqREr",
  "key20": "5X5QcHzhWByCdR7mektgkfTxrC2JnqUVXMmUwNhTEhzV97GEmVP3vZDVxRnisHUUes36nLxjo3JmxwCPQdDSHdvx",
  "key21": "2NomrK4z8Retr5MJ1K3oggTizaHKfNtwBjnRuGdiWWKHAj5wB9u4AH36jg6EieJZEua5wjvsRTtqCkVPcSkvUdQ5",
  "key22": "K9gb1g549eZiWAy6v9ADFuxR1pf2JjqnhfJQkhFT1WPjEHmByYFR9KskM2WYhPyvG9ycJP4x1coLocAcudRdk7R",
  "key23": "3fpvgXfL6yqgstNdTEoH4rgrWqX4BBmR8PVtvgopVroghuptYgkYSdzCJuMkKT46sp4mc9KcuFa1VVWvQZkH9fy8",
  "key24": "5xqgL1uWBbopVGDYV9ebmpshCx2Zv6Ynii2g5jb2q6A8z2LmVZpnvVZxcvYuif4E5yrncjp2QNoEWt2fQAuSx9vL",
  "key25": "2LjaUvu1TJZEndRhUPMLXuNki2CmgYnbhebbJk1TxHqeSqZX4QS9qGy3Xjy6nJVzqNgqSJKmfkfbmD7PmgD2tHpz",
  "key26": "2jB3135FAPra5poaNNveN4xMkqUPZN4DCZK1ai9WGszEG6z4fdteUsBjF8F1kL3WUWFySXBRW9YBADjFNxCke1HV",
  "key27": "kELe8BTjDo5Xnb2JLZwN7bwRMb215SGpW1ybBGDBTbQ147PaRydSXGnuWwYhG47zvanpQaZCy96Vj5gh3uRebVj",
  "key28": "5jdTgkLDfwaTR9FKsrmdebFi5hCjvGnGxMAead8392HU93vJhWV487NA5DMPihZCcCGG5gLjD2nTGwNKMsX19G8B",
  "key29": "5PN1UL5LNiCcLoHvBDqYn13HBGsPunApc59VdCU45oj4CCuuWw9RFwsghix7aQA8h1fEZGC4fbvbzdgMFNAhsyX7",
  "key30": "LpWpiLEeUtds6TWa8p3v5L1SoPmJPv1hBb8gtwfZ1hY1S2R1fo9cjjq7puLP9kJ6nk2V3VyUYYecUvvQNDZjqfC",
  "key31": "53rr3wE9j6b3iZ3mpdBra1QS6q5ufJBDcXBzxEPuFVrQdc3EbwimvnGf8fBpxzFZoBqPfF2hL4TxqwBfn3CJjEsg",
  "key32": "3LwFXgsLM8ZBTTsLfWyD69CeKsNHX6o5gYnMS3cfPJXiFV5DDHinAyrxqq7Pc7PJLfgqa3r4YrKbuMuMdbsmxKsK",
  "key33": "6thMRhYwq1SCSdZXYrHceoS3uHa3L6oxbMUop5V7QZqwHY8cDJrgQNmojiZppazJXKcWqY9mjVjjCM3YDSNkXuK",
  "key34": "36Yn3zMzKvT2ktuLyQi5dWUnVstKMfNft4uhuE3mseb8GysAAHqGA5fRaHzKQKAG2ZGSsy2Usi3PHwjpG3kP9fpt",
  "key35": "2WXHd1sBP4u96EAQgtugrahY7Vx7kGkQ2Ggv8CRBQyXxkt4HVu8hKCXVPzssdTxuSRhh5j5Gh13ZoUzq482RviCQ",
  "key36": "2tD9ER5NLEcb3jKzYy8ELBf6Zcyg4PRY4b9z66pzSGBbSMAZLhENtppXzY3CnCwFP4VSnUKs3TUuC1JHcP5S4VZH",
  "key37": "2mBiPPXqz2KWXSMVfecZSPStedREStGPaKizev5LucUB7DeFcgZPJ6MXTcB25C9YavAHFqiyAoeVjQxZE5fPzjf2",
  "key38": "3Mu4s1r7ZPMwBMQZKibV6Boh73YZxtJW2A1nkoPFWo7pSDV11rQmCKrJCQBdAc9iyQhA2wwN4AwRGpfdyo5ErfrC",
  "key39": "4Hpqh5bCiRaDxYysqNaiYo6i25B3ARiV7rTbvgfg8oDbrVZ8xMM5fobDAFbsuC7E1TmCPpLToMs6Dh9iEdjSkxUr",
  "key40": "3dWJqjmUMsMn25JQJp9VyraaUcMdMp51HtByQZ77TJrkty32YjzQ2au3eZw6aBtw1f4YA3FvJFsK134LmLtvXYeM"
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
