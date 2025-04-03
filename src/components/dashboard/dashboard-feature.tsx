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
    "256yNbH76HsXbHmqVLpz3Xmwfgg2Rs9W95EkzfuhapPXgxLZzgAcDyWHHfvyWkBBhbXP9f6LNZRb8mgDRCw3TzMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmw45ZsWf2SzvSGv8tMmJfxq9hsTJvZsNWBm3SFach6jG3Wg1BjGQesQZkEpKegy9QV2knDZDmSafGd7XLPDBqU",
  "key1": "2owM3gak8Pjpuuf9uXy9MMamEZoJvJJXKtzwucaoaBBtqXKbJP1HQtDFWqzt7FtGfYuQhtC3cyotgiE6EG1VELqm",
  "key2": "5i5bJ2PvK59HEuTuHCEaot8qLjdKxsCsuNG3CXrSziXvSEEwniXK1xienKcMqhMMtbCu8t9N8H71KNWJDRfhk6Zk",
  "key3": "6oFYHv7oviBn9PDxN7XHuUFzChv5qDgHd34VAFhHvRRGBWB6PmHdujPeNP1GkrosbphSLw7uBAwNmwYgZSkCRFg",
  "key4": "3G8A1aHBmD284HDQ6Y2bT3Q4SacMWqutTHnjQbNuWmKgfuiYFTgqxGXED1yitkKmK56skgF2uSqmQispsxLhf96D",
  "key5": "16WCePqWc5kLKTiFzBE8J5PPEMQyLV7w4WCjdnmB21D6tjvU5R2V8fzgcnjw11H9WGUjAdYV2MXoVNce7ThDSne",
  "key6": "4hqWMvHvCRmnRoHKLhyNbnPUgZdCwg4qWNbMoMpvRcXFUkuAhH2LWHH61CYWCQmtmNJv7XSHcmWUUBBtYwv99qMX",
  "key7": "ojGzZJ7gdESvUeyQGnTK5vMB9XWfbw4AvstTLUvufmWKph9czjTvYV7XLcZZfdX1m5ZVxpJ4NxLSbQnACJLRxzr",
  "key8": "64d1i1N96MTNtZw141gVni6MUyeKJxg5W19BrRrWGyWYTkGLJHGUr31NYGksf9gB6q2nJ92eZRTMHFcQXUA1p6JB",
  "key9": "2cfNDnL421MftdYBv11sw98cAuAMSawVF3mbWzvB3SRHnyY6Z2YPgmuawSSSjszMAusnYsy3pnBxEhociuFzP9dh",
  "key10": "2479XoXByfqvWvLTZ2ZbgqxserMQQRRBzrzyL2x23pq8voxb8GfRYtbjLwYMZU5uxsEdUJapbB6bJ8GWjTnYikkZ",
  "key11": "5P98tc7D2fmeAex78MtkCfy7E9fr1LYTbsmoR5bi5RQhKj3MzpVj9RrHj2ciBcU7o9dxGY6Eh72bVVd7PkxW94K1",
  "key12": "4DdCxSfCUCCgKFhjzwF7XVWm6fehbREJUjCCbPTuPXuFudCbkWnnYDHMeR7D7yQLfVcQRD2DkgJGTXz92xX9stGG",
  "key13": "43wGwbkrP7AAwhnSokjxxcShs7yUvYPSkMz3gKLSzkBhK9F27MChKX1kVx6Cg8YYWEevFDy5gBqa2t6rNirQE2g9",
  "key14": "4KpTPf8FKnDteRJCj9DTuekBofLhVvHJeEs8Lq8TWVK1mo3wgpXBw1i226qmV4XpycCmshchXRJAjaNW6QwxqPkT",
  "key15": "4ZnN3x8fcMSCHh954E1Esj1D3sgmDWof3YzKZtWRqikF6o2vv2ufZwb7BGVdJRXSoahK6RDA22RboYqGGeyaS7W7",
  "key16": "5fCcL4dWeVvrDBJHSSkJAsPhbPQHthzyFZmhpV6LccNMvQ1XkFYmESPEc8pcY8ytq6PEoewPn9DwJr78TYn4vHMm",
  "key17": "5jkkWW4kXyuT1KBdJAz8aSFBtgTUqMQ2kWCgzrrqLABohCPfZaZC5fWs88Js4XR96vBapQT5Qx5q42gT4fRyR2et",
  "key18": "4q2YrckqdvTJKmBM9DrggTwZRf8mmPMjasT494wXY4uNQ3Dhr8vYPjrbb5ABRhY7Dbc33Lc4RyTioaDChBcLx166",
  "key19": "249vxNTEXTvi4y8gZCoYUp6nwPnFFZWFBNed1RxzBs8dem888JV3nyLwrPEMtkvMa45qTP7oMN5CBFH6w9Umzzi7",
  "key20": "zf5SZeXKtg5Jr4EZtw2zCtbSYnTJ3R9Ab7xAFJkuXAHs7hHmz7mf3PzNUxEJ8gFXQeu89W6u4FL6kd1vUEE8wd2",
  "key21": "9fSPuQztnwGQ8B47sudut2jaAvU5j5UKSpa36cSAF6FdH2gRy7BRj4cSnYk2DDQvaDHH7GUfky7s55y6z9ZYBcd",
  "key22": "584FFWpXAGq4QEXZfmjVzLD7Hhp7yCjStAL75uSQ22Wz6tCLRUyFHYfGwnZEG3f61rbkpfTHXUhmdRDYiyqgKMu2",
  "key23": "7T2H3wiNCmVcmHtrogu89WCUqbSd1H3XL5PTxkGwxJitCiZnDxqwxirAqPWrp997PmyytgQiLabPEXpddoDrwX4",
  "key24": "2z42CiWJAKinGbN67CmBjjBFNQJVFwX24z43Q7qZPh74ppPbtqAtN9yZxhfj5WKpudkZUsP8WJy3Zo8fnWRwAgVn",
  "key25": "3vjdqEGg2ZW5RgkGtL48NeLgjCNLW13n6ov4Lq92a9H7CxSyorREerVqSaggFQjvffSm3beHCRKzHxvcCmyWtvYf",
  "key26": "2wuJpDsmCHzTPcE5tN54CtACZDGtVCqE5Eh9ny8LEp4piok7cELkYUsrLTYVxdxSLkZ5UE21Gso2gY4W8dvQQQhV",
  "key27": "4yLKecAAfZHqov9teQZytqrUaqxGEDjFbZGvXL9r837sFEcnnhuEc2LXyora2PiS5EuRoZRX8nZ1UKZx7nyLCK3u",
  "key28": "43qawc3PWntyxVXRXE2vc9gehDfEbr1ka9xQ4dQtAbq25BCzaaoS6xGicU6Vqb39qQ6EFcMLXoGfQ2dyqt5DJYYF",
  "key29": "3hZQVBZvjyv2duPsh1Q8wK89vmgBvSDncjkmL5mamHN4TFGP1S3BPJAXobM1ocEB1vSnUaPxmVfbqWTaqtaz5uJW",
  "key30": "2Nwh2igbjvPTGgrJB4ZUPURcRyfAdeLYu8mXXDyrQaSzaDzNw7LPUNT2GsxSG5vcw6WMuNWcFPNpenKVSCrvSG1K",
  "key31": "5EuQ34VWxgap1uWXjE7FGMGGNYDJLNacefnbUA25aSoSAw6qKeQVv9wx2J3peVBu9svU4byAXCbfCuzQJP88HHXR",
  "key32": "3TucKfkzdYb8HdNMoQ2GYHdzB388vyYTXqPPBiBgFjt3yJmEJq34baVxvVGSd2FdCKmfxiycceqEuZHwGrrn19En",
  "key33": "4nYLW57kBm1oFSZVBfKkUHqMmHmNyQLR7asY6Zn5k8DKc9kCwH6uWLtecBup9gEZQ8PkTcJvwiAySrNUAhChTzq8",
  "key34": "394asE2iVjaQF4dTBbPkXWhizVrCYcAsiwdu1mZCsT2BziAqcLCcMKAV6nvBiA8EwRpEY7C9uUMNxTNxL73SHxHD",
  "key35": "55roYfe4ke7mM5xhTzwVLyqq8ZhMKrSePPQ1xLd8HHjhD3K4WPz7EkpS3QHajsoeuSVEysijNFqjE95oA8Ja1AyT",
  "key36": "38HAhALc82n3ArbDPY3RARfvXpkMbCnL8gjMQmpNsMitRyLtvWLnPs1mccLRM2pCaJ8eo8MkLpiDKsC2SJ8GXvC5",
  "key37": "4wiKXa4sHo2RWhT4975NiLq2iogRE8ZhqkC7fK9KHzFEqE38XddkTk9AnSbV8an31FVJebMUV3gyCA1khikFvARZ",
  "key38": "J2aoCBNF6w4YaeH9nMXQpGET2Rmnzqp5pFeLxJ9Ux8MzF99VK1NCXo2piQjM5oYMRqcJfrUCmsZj7k3Cw7Wfkpo",
  "key39": "pmxBeZTuVHimTrRvXCos5N1MTPwQ1hUoyqXq1A6WpxeHvX1jshg4U2GGXZXRcGeBCKDNCe5eSqmfGXyZNox3m15",
  "key40": "54DdPQQJftXT1f98XwsSYU71mSuKAvr4FzGV2jVSGMSTYbSByALdS1cGhbBTgR3N3A5BHVw7NjnpcxdBBMGpDKFR",
  "key41": "4b21XfT4ahigKxmdG1BtuKuWqK23WVfB98mjZ71vjPMwx9RiCNaipJTZfGN6ZVpQHhm39yLgqZsXEf5CD9G3Gg3B",
  "key42": "4AgzaawdKyhVcnUrbC7zD7gtgc4ZG4ruQCREMLSGhWkXxXD3JaMwB8wW7KDffPJ69XkNjEQDgtSExJbhygfju97T"
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
