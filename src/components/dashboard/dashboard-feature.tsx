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
    "nvu9zym3K87rDRt8ELwUUaVpP4HBWq6BZCLfrHhDyP9FTsYSxW6Ft72FgGd37F6FX8TvhVDEEJc99gvRZmADgxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bugy2frn2qhkXRg7cKJPyH8mt5FhmFaiy3BrKkmLXXEWSJQuCM91MMJHp96UTE36wG5MjqTKLZz1ED1gBqTgFzA",
  "key1": "5xmYqkSSy6EjxGA7k5QsfA1SQJcyaFPCxARoLzuuodpc9BSfmsEhWgP2CumHRvNqBjME4wNvMoUCXHiugMsizp3R",
  "key2": "ACY54bPEFTVr32yGvPcSh53zeNeAQjmzqLbgggWFNx1yHrogTQyh4miSEngp1Tk8QohFiDNBom4jQxT2xs8fQ4D",
  "key3": "2BQ9Chc8CGcEZSo24kdZFvMyzWppN73BqQTQu4bZTebnTWe4GXTzgNV1D3VZyXjciGnQkW8pZdLUk5paxDdRyxD7",
  "key4": "3hRwifrMG8oAuDJWmdGXdozRsfXAXhGR848AhJEGEz1nsZLLQyKdThjiD16uEzGigP5xDzBo7JJRcbockC8Qz57a",
  "key5": "4nyo2F43pGoV4EtSrJpxGg5h8H7CyXpaB9JCxQ4jKBkvuVc78mAgQdM8VM8zR1H68qYFTCvZx5qcgepMmR1kRuvr",
  "key6": "57iPdpt5mx1Ghq6e3PP46C4ACzam5XZDQHJqvEz58hAN2pNaXkLAH9Zq6HoSKRADkik2ZDuHxvd2roT68JMQ1VyQ",
  "key7": "5EwNskuJGNhfhUfWtHxHFg39dFAPakn1z3QGT5EN8P2kHQ3ix3pyunD1N4iayqGgNkhqNozSp7rKVFUy1a7Gc6ow",
  "key8": "RNmuXxDx7TL6uxoQnUR5WitzmC156DacfC21zn7H8eEMtscpPgpKc5PvN2YRcysCYncFPjBfVUG9BG7ntJcZYVL",
  "key9": "3ssfTKqRcS8e3aRYU2o8Bm2KHB4jdPWb8gsk1EpPMhT2gicxj9PHeYimDqySBRpeiaxkaFQozhvgyTXDUf3XZH7R",
  "key10": "3DJqWYytspfjBuWYmvdh1mSYmaj7WV2J79VspCbqfW9mbqgVFTrdMz11vL1xtfPGhs93t8yoUksPwZbyLipW3jxN",
  "key11": "4oKWQoR68RuJdqJHasSpccaYSXzxTHsiv5kgLTufKKVKs95h7RPxKkMiUPbNKX2MgZRV9Mazi7MoB3bpwGcwitXu",
  "key12": "3x2XgoZVUyBrF8LSdTvh1HMRaDPY81udronQVzdDy7bdYziHJyHUkBj7DcWePyyaBH1YJjcbD438KnyKqmJnK9r3",
  "key13": "65uH9MhH2xy9KcFJ1j2DLzi22pwbngAg99yV6yfXWx5occX9g6j8Gyp5a1nSKV2qCGH9LozWMgPcWkw8nLarJPmG",
  "key14": "3Q37oabmUA9NuEv2iAAJSzF3Rf8SxAs5BhLUyZF2w8Wpb2j5RW3wXE2WD1UmGzQZMc3iLaX81FzyBNgtfro9hXQw",
  "key15": "2Gm73Ybya9Q4u6EEok9ZD9sLX3wQ3Xeo1g1Hm24UaBdMhe9Emwjvwzr9hkPEZtczQNTRz4HuaQd7T7KU7AaJgK39",
  "key16": "5VQpssLiYjjTn9eHsykEoV3nXM9iMmCwA5jLjmryfExEKUJCzfYpZbNBUCw4s9yGJXoL2c8FQdjhCgKrSNE1k4yo",
  "key17": "46qg5Ey2UjHxMLcUd5oTBPBwy2djM74W6P3UGKmkA77a8Q2joKnq4x47Nqtv3aV1pmFvqNHgjQ1AkWr7GyrXb5yJ",
  "key18": "2wrfUfDt1m9UoU9GdtSqnMjKfYyCT3n7MxVUxzrFkLBWi6xqryg269J5yWRy3PmYbL5uSxA8ERAG4PvjFZYsxBoc",
  "key19": "25yki3ENLUe7HPnAifWVmcimbc1pkuKeCRzqLmVATujRVDRpHxZzhAjbtPHQcWk5hsCt91JcsUc55Vw1jRXChSjD",
  "key20": "4oyrKCvPAqK52T7yGkfGfCSWd9r24yTQHTRaTgYHDsWzoDys4EHHFg7QswrstrGvU7jeetPmknjjWfZptXvc4ywY",
  "key21": "GnLiTB8fwekDYBGQanWVxa5dDqHsXTUosJZgFcQfzB5msGj5bssf5kbUNiDecD7WsMPtd1ZiWjCe1dWV3KP635J",
  "key22": "2v2yM5tQU7RDzehxwRndkXJD4sDC12DbDCroYYiwYz9fnnD25JmAQ35giL8R9PB8ZKBN9GiCHo3zougcN2chbTkS",
  "key23": "28DddgrbAFTMhEP1oS5ZddqPCWfhCooP9fqP58UBeZbxJG4wBTftsuwDbEJRyH2nmeDF8rhEPXN1euKkRtPrkADH",
  "key24": "3zsWwumqHs3YvjTkYqrPQsEX5sHLjvpJaih5P8XxJYqxWNYNG7yAkfrmuCfEu3wxRRRdF57GWbVYxFByGT7cWAam",
  "key25": "5VAWwdA5vT6hKTYozSGutadPJGXaz9upCuBKLB5JRe78qAXFJ71A2AdiXcSNDdN4m8vBG1ybJY3UU69VfYynnjfs",
  "key26": "2euT7tKw5ga4rCCyTxDH3U7upeDPLYwFShnTYt9fVSVjFPYcRKQUqmikQi8vJTP8P2qR4SG3WqAY4aQw9gf8uiyu",
  "key27": "ETckin5WdZ2jTbYPfY2Lf92HcbYxXf8EQNg89n9KR3hy7VVUv5G8YWaveukKcas1ijmWJ2RiLgVHfkDsRkYiJ7w",
  "key28": "38wQC3ehianU35Wxd83fVxcTZBap8jpMUHntjvbdRhokrgzSeAMDwPB132n1DLKobGF28RXAX6oir21u8VgcMAjZ",
  "key29": "232Qh6zxKHAWByy9Shcz199VkzFUiCAgpZX6aGNqk6Yq2AMPvHho7W4Yew2zPcJrFKYYiJ9KJKKfSqpgmCwUnxEn",
  "key30": "2n68GQg2QkzP8r5doxftdTU2rtXxX5U7yGgA1kxzgNPHAwi6qtNLRC4Eq8nPZ6L6M23BLALDShap7CbfbDksK1ie"
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
