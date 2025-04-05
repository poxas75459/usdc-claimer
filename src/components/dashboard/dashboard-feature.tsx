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
    "2Hk9DtZ9twcNF9tirMidbanDmkgApHggUrtUsCWCsnNnooSx6q3B4xnnfY4dpUhYv8zUkiC7vAgRSiC18fyrXg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xVw5gipKvLh6tbYKNcBVorjYEEATD69AWra9d5scrzUGnUWEamt3TE6F6ZPah1uhTWJhNKP5S6dKAjyc6LzW5Nk",
  "key1": "Cs8cLFTGnYrmGG8b95YuZB2UfnvexZsPDaBoGeiEMq36u3scWutwhmLnGg55bRQteuG6EJ8biniJBKMvZcRAHuy",
  "key2": "5edcsjzYU8ZHm9eZ6VFjhVB6Qxg84U4QXHbaWYHufbAE5zTF2ocozzA5L8zFMGGx9VGrpt2PUKs773DherhSVwSV",
  "key3": "48vnj8yiP7qA1LBdtF1cxoPbcb3yUK3ZjHrRynxDPAfpfAzekEtkQz4WiCSkdKUYrmKTzZ8ifKWyMUkhiZJSzAmP",
  "key4": "29F84MDRJjPoT2cLD3xqh2ZWiPW3CDyrX5qT3MspZjeve5rt59ch3i4GwQRAMnRyw8GZ2vD5WdSjo17NLLQZKG1g",
  "key5": "3SdmUxeA8AUj2HrdCv2YKRr2qrnziFR446LfBVXSfY2QS9b7jUgfyAoaaJRaXe67QXCtNYkPFQg9uN9qa1M6LoUc",
  "key6": "2fUJ314tAyqfcaYtzYdfi4rCteyTmcxbwjwNEn6ig8rrxyamgSo56nDtcq9eowTupCrk2gFRQzEbvWc6nzZ6Svok",
  "key7": "2hbbVFozGu4LQL9YSdwdd3wdX9cGhdNiHyb8yNewvH6jZbWSsZnZ7dfzjQK9rxJ7WpDRUDZU3CvkgoHBrRk5kLBm",
  "key8": "5FCuYBvfHJgGfCkTutBxZTxPZWisQpK8pzZDy2g3WiCvxokVL4NWrtSdAkkzPLnMwk3mjDVr2HqMZzDzDZrtAj37",
  "key9": "5DhDqSkuW8D59foAo4siZAZ2TMNJGwzFq8GV6YWcVgwhwkyXXgiGJotQ6zP1QWK9ARsh37PBPEY1CeQ6ERPp3mB9",
  "key10": "3LWPuPbWsgRB3Fz1kr32qZCdDgHQpRBKJ9ndWnmrB9ShpiarrWPJXDq3x5rqBcQgYqyyJJRLh7RNKqFz7EwsJh3P",
  "key11": "5LVnnXUAeCdAbVEA4xwWyVU99VNsfXv31jLCJH8tCorHvMRXrv1hrzCWMYR9xE59BVx7FtJbuy91r1914EX714vE",
  "key12": "27S5XJ7LUxGxmiBgwE1PDkKzfnnuP1K3un6dFwftd6ru74XiEkjTVL7p9GgGHUieTMypNdiDYgdRSP2MMB6NgWmZ",
  "key13": "z2nFApEvx5aqhRAxEsV4kQpNLH53AinwqHALFXTaVKChECuB2vj2w7VEbZND4KtwgYxGX8WzH1KcH8DAGn8xP8Z",
  "key14": "5Xx682BVnbFqkHe16EVi91J43TNJZ6Fyx5Vd95W2PVRDj7azDJbUqFNmvmFFLmyJr51qbU41htx7D77zo5CMA3r5",
  "key15": "5tWJ2rL9rQvrHpo8VXjM14u3QS4MHmpGYZpj4sRv521FPCAqVDCJbwq5VCvb4HkJjXopjSMn2Rp9K99fPYJ5g4cu",
  "key16": "VE8i74NqSEVoUrS7YKJSL69azqnRecGfKVWWx4hfUJtPcAnika6BuV1QiNLrm6zzwZoLTWWbMCiQaGLfj31Rn2h",
  "key17": "f8XRS9LU9pfdLf6uiHo7yZk47qYLWKpAWTGN5ui8cwY24kkQZamW7vVGMVALAm5gzoYR8tSsxFYrRKhWnvXdBRZ",
  "key18": "qhnnFydBaJG29sCx4Re9M6ZRTJ2WBqbLy66ce4cPjns3bv3d8PwKEuEZfH4DczMFWBGGu7Fyvx3A8endhpmFo3T",
  "key19": "4pCjsZqYfb8AhH8jsP3vJFGd9b3qKJJndJiMJuQJGEyvuzT2GAHJk9KcHEzvBpUFxonY77QX6GMYrPoiCPYrra2G",
  "key20": "2rvFedqcTLPz72mSJUs2aiYUQ8KhypLA1CbVVZvAVjUTW865Shp49uexpWTLHHdEsqqJ68qVPP76HSse6yN2ySFX",
  "key21": "5UAjYHzz7hgESFt9HFjHS1QNehDSSyLJBmWYMsqPPaTgR5ezxQp6i9s2bze2wKkXrRrHYiAt4Y9bEJQxoBZcxWvx",
  "key22": "2oCP3cALektCybKR8LdASGEDc1dUY43MHnqJyNjnomih3AhejpnGRrFZygc9TfNj5ER6CdeW5dp5kTydFw1N447S",
  "key23": "3C2NNXvQX7sZSzvXYPN15jHYxGNFomhMtKHrT5J2GdirCU52tMAh8DFgyYrqxKqKR9C3cDzxzEGL7n1p4vuzCpzC",
  "key24": "3EhnfY3T7nN5qMe3DjRmk2hPrEbyyh64ZMMGbMJmEAg88jPYQNnGwAVoGvgVTe7yhfdy49d8JUG9PxMLTgS6UhFr",
  "key25": "5J5Us8aCTtf1BQnquQ6r4rF1q1ArYkDyrvRgtJZASnvenWsfJbHm99jmRcrYVxvWKoA9JTwN5gW9bXHXQkmJf6bN",
  "key26": "nQijCax4JVnvuCd7Y84HrHGkWSEg2v6fTDpEBMH5tS8LjpCFLTkBKY8CV4exn1tk1cNftiDmgnZyqVzQ1PTJZbd",
  "key27": "q9Y73myQpcxURjtbaa6UVsLZTXdJyK2crHbEc72ifkjArYXbNZKzHKGtverKZ6iCiJt2jCqMbLUnxgENb6fAMu3",
  "key28": "3df53Hz2N9m2NwrGW1fSWfzHBFxXdNvwWDEbHfMCSin35Auti93cSw9HXgHt3D1NMa2t7tGeVMZtoLHsSR8SsXaW",
  "key29": "61ZfGE7jLjf7U23PqJZttmE6wi7X5K2j3esRBaDguKPBtXw7g5vikH7oHQ5LNFf8PpStjjdGBQiMDQycuULA3bEv",
  "key30": "3PueUJoLi7VdfnNNMaevFreD4XyM8LcRXNcRMAQvDwm5GNNDGvvFizjMjxLKmka7sCcusgNWZSGpocoowfR9FHv7",
  "key31": "3tULEQUFUcwHenJcwFxEUbMrzBxqYxoG6X5HZ9FfTxK8ExBq92LbgnCuKUjue448Ms8HXMNPcCXPdjsp13ZnzJZE",
  "key32": "5FSVFzyveUL4nndidv5WqTSXEhMruJGREN631gE32iEhPMFHABKvjWQPDGiP4R1s7GC6EjQfHiuSTzxm5wL5v9dr",
  "key33": "2KAbnt8PvpawxxqPZF8pjoyG34NZcy6YFrp7FGArMTT1wTa8u6NXFiYXyc5QbgoTp6FF17a52mdLhdzErRPZ4FJi"
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
