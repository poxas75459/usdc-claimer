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
    "DCr1mkGE5bDMeRdYScCaQTyMfB8XB2NH88v3Gh4EfkuVKBiKTYiwCTBPmAAk7PLeSZKmAjqcEQaDzUjwU1wwgJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pdm3bUCUfRMtmnJiouUABehkoCCnoxXUcuiNUTpsnPrJ3TdX1E3d3bHCuwm7o3SYTENG9UYem1r88qa1qAYPzr8",
  "key1": "5aY7K7Vn86gRrPEgT2hNBZJQr7AiAvr7GNtNZje4XaKsWZmGp34cukPrGwD9KsmrjDEQXkmscL5KNarhjoLHa9w4",
  "key2": "3Pf83pjs6RuPGvFVz83DYcoY8uz3PufQkZ4Fe7YVmvKfaeEdHs9UV6MvucFAHtnVugWoSs7x8xejCnc8Dsfbks9n",
  "key3": "4t4BE4V5GcgLeXYBuzCZ4kBJurhnhgdLirzN7svbEn5cAMT1pkSFjZ53poNfBqUZZooyEy6as693mpHeHrHKiShU",
  "key4": "3PWwU5aXxzupcdg7nKWY2fNtMUbrrV962F8TVP9uQB6hRxbhMKph6ZsaCpUH3VmLjDhaZ3zy9xdnEq3LeSYV8S62",
  "key5": "4ggzgjfMK9aW6NR3SQ51T2Mgv4ttPksjKsNbausdLpGzfouoSvJAzuJuarGaDy5GnxxHm7yz5o4re3iZQbYgTVUw",
  "key6": "57b6tFYi1QMpuNjvPies1JW3jNpQVJPZx5J2puQjdKDNZGWHfK4C29mx6JCynmmUc4qXa8uKyPq2Z32HUwfS92R3",
  "key7": "5SxGeUBSUzFrtXyPQHjYcfwnFfxV5QXMWhQag7bfH5n7DAV16mPiDUSZAYjDgALBevZVgBTDNMSa2pzyTpihCYjb",
  "key8": "49juuKKvkqDV9n1w3Dr83tM7CY9PfvXvuFEZetj6SduHhJHnzpkaNkRGEfx764Ks2zxW65bM3JKqpQS2CLVrQeji",
  "key9": "3gAdny8KXCvWpfXMy3K5VSv8sd3MgWWpvMgk5xSe88aWzMosta8wAGQ3ggetdz1vWMEKZiJAid1HXCiuUSPLemT5",
  "key10": "376R5XQaX1VQMyL28MHfZA8SyzHHdWgxUTBEsuGQ4dwpScSxeBTzt4veX2JzunsAJRTwB1x2YVxk2AAG7BHhJCHo",
  "key11": "27N7ySiHH3QuLzhYLfk5WBiMU29o9TAUurR8jsaSnisUzk7PFG2mG44Dk4usXj17vgsBKASadWeMN4J4jF82UdDt",
  "key12": "4Tg4YpKAmUHrRnfmsiWCN2eGHExFNfaguB3aQRokrSbuu8zkQSXRNtjtCzVJjFGXYc64YtenBQwGM22MtDqSPpLK",
  "key13": "31tkskDnSjM9Gd1VZ6dbaXEMFSh7ND9Z19VNpFKyDF5WtMLSHbmV2rzs3VgpfShg1iJBgBVfsNLywuW2S5rRLSwF",
  "key14": "3HhqRhoubpr6EpaUwLcGmGxJkneZrvgx3PFYDLFpYs28o6Xx7qaPhPgoaJ5rtpSQbVuJZAN328uF8NFhcQhNArZS",
  "key15": "EdQTVty3tRN7x4W22gJiTqhT62UeGwscmCK93rPoYsRfgv5LudUTnH1JFVX5yETJNL3TAM71f9wyuYKBnnDF4Kp",
  "key16": "4uEa2Hc9GesiYnvjhfGGa1X5Dwku6nmciSEzHUXttxYnuvzA4YMBfw4NuX18EWkVZiaDibn1vRVbeL352a3MpFWd",
  "key17": "2atBKMsCdrxqR9zE5AUxZz9BQnbgUXDWxxDXrAAKGteqMHj523nb2Wcq3CY7ZTuQyZhBUseMRMknCkTmQKJFaymK",
  "key18": "2nH25ctmr5gCRat5w2WvrjPvMWRmkfEPuDTGBU4ZRDXwwWRgqd7N25uJKFJtcao7MC5KjaX2R7WQexdjzNccE9ZP",
  "key19": "28skQg4AVD9pBkUVLBkdte4mG3qKYV3Foku7qP3Cfiv1J5hKN65TwE3e1xFzTRWMmE3WTqP38MmLHUhm2tH2nKM7",
  "key20": "2NV6QZwn7nSav8EUHkdo9VNMXzojDYTRgGVSuY7yKRBtXmZU7Z7W3V8TTkg8H54E2rNZtWwDv1WQccyqRDCpQGyx",
  "key21": "2YVzYkVss73gXLik4eeyRJQHoXi4uGAHeHfxkdAitKdRZSPCVnBs3Gpcs7HJa5beAUXuNCmjRQPKnqT5QqyNKbir",
  "key22": "3yXM84VP58S7hhoi5ZAJtTuCSfaFv1mNMJT1HHPBvePtN21oDELwDDAujpKLZpPV1dSnQ6X18QjTn1hsX59bwrMm",
  "key23": "2dg41P8EX2HQ5AmbiExwteUeP6BRPAagiHPefcw1BF1vA2KeZ73LjR1UHF998LEJZA134L4p5213hjdDoYEAkNzf",
  "key24": "eBFFvHVWgPooCvD2DjPeqox1UeD5yuDt1WasJGMGfeV5HbbbPKURBcetBJY1Ydqx4njGGXC42HdmVnrRYjS9KCV",
  "key25": "2RYrRa54wqJ3sgDGxso3xVNqCnMzJ4TQRuoTwNaQiqYEaU9o6NqpLbTCodb6oFCadjT4CXpmtwekWHSC5o4ui9e2",
  "key26": "51nwvcDfqrJQXhSoP3yj11sLaEDLWkPjxJsdYhV4KwP5B2d38FpTioBcbzBwu2kfYSNdgUURvMZkDmBNyGfg6Pzj",
  "key27": "5ctv7sB1vf4wJRWHrq9hNk8f9bnPhHm89excUUJaDmraJLaDbftyhdErdUCzKVGuUY7kuJS2Eg9NiSD4wBfRNbUD",
  "key28": "4hmdK8J2mjwPqwMoJqiJWziEJWzkHfvBskwEWK38Ny4Vv9cYkqNMfokCYJBLPV1a1br3SaSdhk4ENmkvCkrrGv7q",
  "key29": "2HGnLwuehmYm9RUqZJCKs5crgzKKnCAcxCAMAjeq1monHycyc1tuHVTozKN8bC93wqEsaZNapkh5Mfe3hnpmcxgn",
  "key30": "2yvQf9VddpRseErW7X9NJw6MYLeCcPWrBKdbK3bKCobCbGrfGEJKPjiurGuAXCyXgQUes5Z5btsNmXYs4YhP5216",
  "key31": "2J64p8yR48dMr8cbRcvGnpvV1GRxtP1NVa7CFNcbxRXjsDYmDrpTmYQYo6CSWCEYMb2Uomtx6LoF7R533mBKYhyE",
  "key32": "5dCYi4eK4VG6R6HD4mjMjXwLqESSxA1xmL5aJ48vZfwKfyEkVw24WmuC2gmtb6yrEw2gD1Dd4v3L4z1JJnmvXYL6"
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
