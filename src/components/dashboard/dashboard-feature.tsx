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
    "1WA7ZannCjJHUAbL5FY6i6PZ1vJp5HjjemDJYz7gXLmcBUoH1HFjr3sYiqkHpNAuZhQ4woZRgqbY48KvMSzWBss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FUbznaSHX85PjffyWFGP8tqx8Z7VmGdTTpFDvtHU3zVy2xwU5fZHPziHXeTE5X4hzHWvioKgp9A4Maa2XGBxUao",
  "key1": "4L2jcVuao5xDzJXK5xftAZMBBcfEip1AtCt4sA1ZQrZU1DBmhf3WNaefp8ZHuszWFyGGR7byYDLDZNZNRaYLy9iJ",
  "key2": "2SUivve4G8NVKYfLJEd1wZT7MsRuqvaAmxHmeTpMBW6BdVcVah75jwvww94gforoLBqXbfz1stcFNzGicu8XvkGM",
  "key3": "5582JPQXeEWhA233WEKuG1KnMdia4jAKKvRiS6fS4m8aM4j8V8Q9jc6Waeb7vztk7oLWMNYMQFUb2Gmhn2eRHr1m",
  "key4": "Zxq2uvQtXcZVJURZZCmns73TjAUA7PJVYbFiq5eMV2d7mqfWPXjuSYQpBEkvJJN7SvX92Ew6tcgY7jiqKxCe6C5",
  "key5": "2KnPy9rA5mUfWQhgRZbmEZJ5o5DkN4Eyj6hHospqeLDsLCF1QJJxV7F3ZBxUgr1c9MYu3fTVCJzVzahqR9RrScmz",
  "key6": "4Vfnkyv7DgkryE28UdYC85wC9S3jo1jkwvwjedbKLYabek2YGoXjNhQPaSQN6WzRU8wrbx1YW2wDW32fhqHCrpUh",
  "key7": "Z5ai6D1BT6zorqUkrKCQg6AnZqG19MwmcCNA9KLspBnByLrBwQ1rjTXoF6RusDeVC48qTDLMRjaEdJkrR4GEheo",
  "key8": "3WQmw96CVjTxuyWAvKkDx7xFqLQVnqDixaLv7mZ5jDPGk7hdjztFZnaTdrGVfin3j94to2K4vLg5aoAbQmUMdjT4",
  "key9": "2DXHA8oAE1huFQeVFf27Swbsp4ourCuseGNRgTETQ36YEZjVdFePUJ7aPAWY9iyefJq7TV66DCB9FrTLPryVD82",
  "key10": "2tdpsyMQueQnuBdPk5wgKgpeWcjP59XnMNL6LjLAhrYEifT9JUe9ZeGWrjPS7zTgmYiHbtY7W3sLKD5Lxivnf34b",
  "key11": "58WH519UsJBaNdvJoyPNT68E7kzEMhJm55eYoBqC7grT8jojoyQvBYhpgQz9nKDYK3R6zTrRssL2Raai44MyQXXu",
  "key12": "8AGt6SboywNQmEYPu4JPHSodYwhmp59w6VtSdaxNnA7D3PBZcaPTg5PEmG7a2yenaB2GujXjGzLbwXAKMGD8Mh1",
  "key13": "39UpY196vqopMaVJXLDykzVbDKaTSCqGKGR821HUxU46MsN66xQbUkxaPsc5QpKwVTmKgXB5EkpgydnQd8FXbmsa",
  "key14": "n7waJ2ATTFsEQuUGjFoMhro5zUMBfjoz5UgBd1sD9fizshkmApMwBwpmup5onpv8j6WXPXQtwA9T8a7tJGJpZBm",
  "key15": "4x5iSxV742WtTGn9cHUM9XGuWgik6d2yB2SvuPDPVGp456zQhkVYB7QUUTfLif8tLFCfsAsZqyJ17K24b5igidy1",
  "key16": "4PPmm3A6vNbf4eyX7oR6ACdagXrZqsTSVGRNSEVm458hxiawoVhXMLAcuJUcqGQdDeZpeEvzJkQXT7XRntWdh3TU",
  "key17": "49Uonan2NpxyDzugAuQFsazbDa8pMYhPeK8DXsWL1CtK2nrf7WH4FfejikP1fcZi9BR5ooc3SxjmmZNLFmH4a3Do",
  "key18": "mxAu3QXFheRabV9tn2zZ6vjMA4i8rTF2kPFCMvFo57cp3ATshJNUComUSEsrnY5JzDecAqZVgYqnEvGPJzQZ9G5",
  "key19": "3Nz68KKjiaNzDoXNXUHTgLqo7Ni52n5Y9Mrapf7mAW6KV6LLsmqVt68Kkf5nXiZC73t5W4vjydXLMKs5H1fux6Yk",
  "key20": "2ucniXyrBw4XuXirDidyXwYuHmuBw5WLfL6bJVJSptAChC55N8GLho2ZwDDA2wENrnNWcU1ZMmKVzpMRspM24LRB",
  "key21": "51FUsXzv7dvBzvDWNkTGK4UxLptVfbQyGf73JqGAuyyYh76mt3qvqkyKBUQVnGzmNK8Zb8D2KD4rmp85oSMM1CYD",
  "key22": "567PdKdspgQFVofLUmApP1h5VPvqvriNfAvFUwtGCYxT5TDaibXskRAPFkXM7qS9FQZ2ro8doAed4TX6cHeM1NXu",
  "key23": "4edYZFaCrESnDPHrqrMD61dVqzobekbFJ1rvV9v3VafUFeCufqZjPrnDNTGf6rHXbV5Veknho2qR1uCizBFNGVHh",
  "key24": "5Rqht9pYp9Z18W69q42XonaZLvTXmY1vPx1cqyz3ngsvXePyCasQ5wVbfeDNFqnykcZAFywYRbzhJxXwtteJ7r11",
  "key25": "3XgehwC1DoJUDQMpo9rQ3cTQohCjYP4892MV7api62pLvFXZgLRWscf2u9CfdCsUVzCeTj89YDjHgnzTJ3NZ89NA",
  "key26": "3Ct4tA4HHaA1zinuJD8Q92XV2rSmPDN4ya3b6bPwzUqqyGS4Td2qr5XqrCWTt8dzxfRfFGvJFogviHs9FyJwgYDj",
  "key27": "DyZKA9xUdAwA11rhTUJFyh9bakWmRjkx1BFAC36TsZnJrR5JYbHcYsFdgD9K94y5CUFU7RUu4Vk7jRdi11xXn1F"
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
