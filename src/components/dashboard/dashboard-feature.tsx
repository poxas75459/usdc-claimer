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
    "5YmNPKChhTVwDYiRmwBuFxu44HJEH1jMA8fw9rBE59x69b19ECVUdzJfQARnZcqvtcX12ES4rSaPAHi2rkX5BKcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ccBTMHPmP4GTj4yYud9cfPnKzP2EZeYMBfVWv7UoHetKAu11kBKfCaBkjQGN1293rj4VxSuLUGfvQ3E3QzbeK6e",
  "key1": "VaVbdJxE6MckGyE58FG4VfJKitt3qSWez3iPcyHvKEAGNoLCnZJv3UdzBhEeYiKoCeTBq6grBiKTG35NpAvTEVZ",
  "key2": "3is8Z1iomh66cvnt3mL6RrAU3ATMNdMtRLAr9GEtErr5pfNKm3Ysvd7sHMinziyDCZrSKKwVBPSmJBmys72c6nhW",
  "key3": "sxkujaro2Mwb8gFYSFgCVNFu4LcFqchHjgcCQyRwyzzBwExVNWE7g5e4yd8vBB1jUZ6kxYk8GMDbUYBHQKJWtTs",
  "key4": "3xuA6fiLtM8rkLkZsrBNyxTZGriuN85gomCPgK4yzCFYXcJjxhUnJCF888VQB5paU8MpakfkuwJyft3VQj6MNLtq",
  "key5": "2F7A6h75iXSduHueCAwxfDd3BScd5XdUmtcsPXjmViAa7mS2k85kiaDgxii2PVxUvry5vyAaxxMnvU3AfSsesvyp",
  "key6": "5xPQHDSoufV75kbwtm7w5d5Go68FUo2HjzQaKTVMCS8f1WnjxSmPM2CtBtYF1D1t4icN8NhJU1c5BHFPaVEg7PG7",
  "key7": "C6kVjYJPowS6a1WX11yycVYCRX48oN6jyfspTyjH2Fh2qVtS3htK1FRKDWwwZnujMit9vhNN5nt2dnebTiQ1h5s",
  "key8": "2cbaGuJyhJchgkBAuDkybeYAmt1wXBpdCJqjive5dbdu8qtETX4c9njpP7C1c7v5U2igqDL5VkjJgYZgxRJHhwK4",
  "key9": "6vfkL1a1KMTCWjJy3ZFqrDB8dYuenpPUZvaAtfJq45hvyLqpoDa1SMq3e9g2TtBqnRyv3fMRfAxAs7EBJTKSScE",
  "key10": "3k1mKn9k183vWyXWBmzhSvQWum7TUm7cSMeDgnuDVygpUdWWgJnrXu8b5jW8EGf833MH3rE6rKG7zfd81u8tc79Z",
  "key11": "CM3U44q4b3XdumLdJspupd8E1HD9fhaWEpWsEdPNuDUnw1c9oUqA5FtFzQiG8zwY1kV7cShreWcPSdXZRA8QYoL",
  "key12": "e1KUrkLTZ1qMGew1qVSTUuxkLochhCwvKmyFUktNcD7Shb6SojcyZDohzYKgRQ72gSChEW72cZL8Um2RLbYhjoZ",
  "key13": "btkM2SU4X5eCHpRGNHgnn3drG9garuEB8kv4id4sZwaQFpAsy3yxwzLqsrj2jNnQTcEpUSj6o7tw97Jp1m3Vz3r",
  "key14": "2D4VTjXXQit1YifrxF13Ym924m8vM6SAKDDtMVNNcLD5wEhHYuJreL8YrKzYQDA2uHUPKvD1JbDRYHmn3wAmm3GW",
  "key15": "4c9rHMMz2ypjAUWX8eLGSvkSazhiWYPWits1o8xPL46gAQ247YXt4cGGFA7dbZ2rM3V5qoDEgJzf7Q87T95akbJW",
  "key16": "3v23uk61NupEgqU5Zb4B73EhdxNEiCsVqw9D3U42u9AVjHyfvRSjee7dTQeEXoS52sdFpP7wZYcemU8mTbRgiVyk",
  "key17": "5YqB6jWL5bAQu61XRb9bD68jQHpY2syZnVNWEjukHjqAqt3GjguyYDp1ToBD3TuxGxcGNq6T92zPTrLZyumxfo1U",
  "key18": "2b1NxsPNVBktEtftCToe2mpYjVGPVvj3cMoppT691Qis2TLfAZA8AeDTc9mK8mY4bHzBLqHTjiqdpbJAsgLDdxjH",
  "key19": "wGUMeMb6TyqPptHdD7PzbAfHcrwzxnbju2Pr16339WC9VSUtxP1B9FbNkH6Gccvido9vFKTW6YMGdKMrQ7L1jW7",
  "key20": "3c5rcfT4Q4VBzHFTmYmQFe34kvmMupcZuw4Ez3UneWkabxPJ5nRj6mpSQtG4sUCGnfGgNE1k1yvdkjDRnjNiRUtc",
  "key21": "4YaUDfkZrU8gWQpDuQN4ttmjSCXEMz9CxJWhBPD2v7pH94Cxe7P61s1EUpuvBoZNHRUjgMonK6FDcq8vRpaD2XGM",
  "key22": "4DyXPgKtSZeFG2LKshRN8RWeNd11uaeBy4pgscefCm2EvEPnQacy7rDL33BuggLbxQfYfJGhrhPaY4KhgvY7uRMj",
  "key23": "35bC8qLQdnLzh2QHgFAWKVPvBsREntA7xkyJkmn5GRA4w8Ndu9HbE39PmJDnboMwJ976pFrWoazPQdq1aSzQi8iY",
  "key24": "5NYd6VFyjX7GCEnxNbV5VgUy9hrFkKm1GyXfPu1y93WrD98AbYtdryCXgrFkETrdb3nxvY9AaytipyjTzbnBLD3h",
  "key25": "uRFY4D3hFLc1j2fA6HNFELs3Fay9GdmtY5viK6mdzgsdSYd4ppM9hoqvktHeAEpGFjaQM8s7kv6esyxauoFCNd2",
  "key26": "5UjcU9nkqhBXm9TbMVGRNEJMze5brLtHCp9Lr3LiNFosXq8rZy3fMYRrmSt6LCcCxkLcpCtnge2XoTfQ7hmKtzjp",
  "key27": "4kK8tnfwHfcL6QUeW5bwUDhPPGec7tyCQFSxj5UDXLkTZzGNh4oCpTj5Fd58fxSHRKXmNdk5DvFruVnnZRGyWbve",
  "key28": "23ywiuyLUGSy8etrv79uWF8u6rrrmvGniWsWYPs3XWfdfkrdZcwsDnAKsGicQ1tBCM7hYujLLWjSwaagYHoBWi7J",
  "key29": "67CJWVS8cQ6jnDGBqsmzWw1v2HvR66CYbnL46gbH2qT8vWMzx9rdZjTQ7tk9jwReVuhFzi4cGteQLdFgK1qMqtkY",
  "key30": "2KA4hDDPkm4dDwbVEXtLy2envzFj1yMhtyixEBXH7dr1FVsvUtS55DgR4effAxLt9oCmaLrLYKAjf8NWpTrFg45H",
  "key31": "4ryVTjaJAbQfHS7byXwg9LcGX8Ty5U4PtoZT3jXLwjf4bjp9XBX1Q4u4BHurykg12urbyD6HF2RsVaR5rAM64AfF",
  "key32": "6s4MCgDz71BnZyyVtemwbM8JECYjpZmfv9m33MYXMoozMKbedruy87ddYfKQtnQB1HDmPfvsoavqZFdf3TSKrLi",
  "key33": "2t5m4TwyT6domTPex2v1tMrDDYMSGNoWvxH9b4jQ4maWaNMXvLd6uqE54G9vXsJ7Q4BWb92noMMQkw8zETXQVk4J",
  "key34": "5Kj1satuXJP8C8soKVZn5xkzq7YrzjnQuVVNW1YBhczTqL5XqZNtgTWwFz1xg1UmxMsvTUrT71qayQ1MAWGVpUy4",
  "key35": "5sJRn8gcGkb2T8h6zxSU6mrSHtkndjmdyfcDyDgQwr6dgaC592Tmn1hRMY7dZdsfo7pzxHE8onnFUsa3dqTyF84F",
  "key36": "51YcycjXFNVS17XeSWGYKV3UDvJgFjHrDzgxorntgNdotYhDT58VigFqXAMK2AKGC7eAVHEzKSHWQ3HWvrXMqJVk",
  "key37": "5EVbVA4uru7U5wQbqrfiWNjj834vzfHV6szbH6HDerQCzz5njscL46DpWfyhyv5Upfhh2FLuXXs8GmU7a4CRyWUR",
  "key38": "5DKqvZ8k37UFJJeFzoHVGZtrfhJgCNL31GfCDMid2YfAMkhM8Js21RX34uZ2VE5DreXZKD616V6S7Mebyrk8DNoZ",
  "key39": "4gDHedGKzEWdT6kKkqwV3BMKBkCpkU9KTfWi7ktuQN2FjDV53eAQBo6VbYz3k6jFLD7giDTqtFaqAMryKc6WLwjt",
  "key40": "5LWP4j6zent12YpRDZWNkJSKbgzBFLssWtogjgsZ9eNr6759RLNMt2yJ4YDRKcJ2qBLk5Sf4LFhkgwrDwaSQv2YC",
  "key41": "3pmmaE6kXCnwC9Pb1u5fSQMB7rChkJJKxWVh2EKHaBUWhMBJjkGnPh9L685rPSH8Wo1RRgqpi3PtuuaX65UVK53D"
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
