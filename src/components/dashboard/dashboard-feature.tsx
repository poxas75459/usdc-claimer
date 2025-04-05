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
    "tpFXymT6wXaDjYvA2VEe4UCez4bTLSM9h8sj246nkeXL2yqB323iuCTfMS2jkhd6jDqptZk4ND7QeAXSnQjrpUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cb7VXYAQTV4XGVfjNqK84HL4nZPKqqkvx5NFVhzoRW8cZcBQE6ze11dDxUmRvhDAS6Mb3ij68MseSTRTVQRTMrg",
  "key1": "2v1BDSGpaqX6sM9y11j44GNREmaKJ54GsgDjrGKHf4tBc33idF9BbGQYu4YGNr66kUVYdJXRRRaeESmk7oJs9Bzu",
  "key2": "3WBMa4zmEg2zPimj6Egn4DkCzHiEjvvvHzEMmwevS6YX7qKgujJAd6yRfXDDLK8L6SmwP6kztU2CpPag9hNpT1u8",
  "key3": "cbaRewPRsLP1KSWwRSjYCwgVcr33STAReiXhGPCCM8xqAPzDvJ3tU7sGs6zNwQqg2bCFeAemBgo9A4a1Zppfhpg",
  "key4": "2ZtVNkbyQpnST975QnPJTF3n9P1SvtbrFjQxGEia7HvqULCRoRLL1S69tNrtjUaDqMC5yeV573kt2rjiYmNNeeqA",
  "key5": "pWqwTZgTndC62eBKXzQTcraQFat82WoV3iwHQjQZJU3FewxXNbMfubjb75qDD6ebU7SssKzMLZqstrdU99YLHC4",
  "key6": "3RMRcZfPwY2xmhNb745RkQE2z7ZN8Hzkidj2pA2nqWqhie3qmLPWHCKmkXa5Jruq7KQKDcrUZG13LeowUSSh8r9y",
  "key7": "mXSGGrJ3aZ5FBWPb4ddAj47ptkXuF2K28ZQYL4EJcZqrSWwy45hgZcZbdKGzz8f5zrDB2h8BEeYFad6qzQg9M8T",
  "key8": "2EmDS766AD1aCdPzzx24H3EvxAAqSfqtW77GmnzJ3pHpHuG5SMxLVXCndwBAyhZSZfyPZkFqRaKfPsQoBkoCuAhB",
  "key9": "38PycnYrv8tg7TDNGuJDqxz1xoBD6yWUqyPaH4nBAb3YcGydvSyDwCciP5VYv86hcfq7pwtNJpCtyUUB441nkmG7",
  "key10": "4oc5Ynn97PqFEERpxqG4CLzNUJEHrNtGkL4S3tCCcBfWS86MLokTFbLgGP8k2RavyrXMmBSH3WQkX5e1kkgbGJq9",
  "key11": "64xrbPAV4cyFGNaKZH31Eaakp15rwQhGrZ8H5wxLDjpHcskDdHjEpmoFf1j5aGgTB15PTmxoAm6ZcShTeDsq8f27",
  "key12": "5L38nLdCQwMep29LKhUPQEnNyJqYuKqwzgfyvAgW3r4mLjpjKBW7pz3PLE9ch6iKnFLmeLkyMLS1DBnPoXNEqMpW",
  "key13": "49ygUCAcxH2p6wYKyBVgXDJ6CbmkNtLmH9NUxgJWTVoYpMH6L74d9jDrpiQTSJxQkHWttAYttYyFRaBJYVt5wQpk",
  "key14": "5sKkrnMgEVMbx6pdq7H26Zfo3xwYYRB23cUiNjXmqxdezdNgm7MVznhaVeMse2GKMNuFn5QcDAcSEN9kVVHGyVwn",
  "key15": "5iMH7ucdnRqN7SQZHfnxwFxVb2PXcT3RHNbNZP6vXushkQFJEppfvtCmbaRmXPKv5rADqfEMmxY8Xc5MPDJvpe8C",
  "key16": "5LoBeNDp3N5MAUNWhWJ5MNMZnDyMWz3ijzJXtob96vbtqanqQhSQNpF2X7mgow3wcno4L6Tyg3P2DLU1DGKa26FW",
  "key17": "3WYq7ZwfUsJiubdRTMFEuBdtjepe3dMgQspywGaBWvaLh4edYMXWWmyDwT9rzaVNyHQSxzoYFUk2YkdhDzQEEWw7",
  "key18": "4c4uGomdTr2GLukhiF3CwsyjBWH2SAMopxpmYrsRcDwb2CLmENGxMfjLn1fEqW2bFdMYxcUMMK2CYVoYLbLUU5oF",
  "key19": "275BfRjZH2S3oaejpd5fvwsJUnbJBmUTUY5VkqHGMab8shU78PVdQwhyLcvCEyB3MF8AK8AjmfK35CR53FzXJPtD",
  "key20": "5ksM9bbMsqKfHF2sWryT1ypSr5djfE5tHzFGPx7efzTTKnsfJKvwsPdarEcDopjusxZT2ueV6AKX6NHTt3KPgF4T",
  "key21": "F9yju3oCpt4GjNSa2TPz6MBNd7W2kepL4dPV6LytHmST3huxejggMkVwyFRkPwKdFnKKa35TXBcHvojc9heN7LE",
  "key22": "3y6mAer2WbxzLiyqgCS3UbtFTTcx8GyLVzKDeMAafaAUyu88e76dsn8UbnYewGT8zQbXj2FtDictX3MaBBEJ9wBm",
  "key23": "Qvz9HSpHfmVHb73rnG3aLcb8CHHgJBETQ1KdDTKR6WyB1GTwKrZeXvY7NZqwCgXFYRKdSb8aBc3Mt6qWZU4yVBz",
  "key24": "5NsoLTH8bhb3MdKFAXUkMndBqbNANnXr1xuGS8VwSLuhaapUBd8vHSDpe9onc7LgcDf9WUu5ui2Z8hPgnxDmzenc",
  "key25": "xbJSZofuydQLdjM8zHvz3CcsfrdXefBY6gNyj99oJzgWuxURrkHtwSKCgs5aAjD8QziyRx1bxHRVSuxa7qoYJaa",
  "key26": "cYN6mCvwTBmUTgfdowa5DwHZxwB4uwFGSgtFmTnA7VLBijhZUhxrybDvQW6dCcTYLhnMMJ9XSHs8RtFRTh9ENxY",
  "key27": "4QeTZDbgJPsRpuPXKDcgqzuo3MFY6Cy5ApyLjF6afT5CPgtNxCHjMNj1QoGiaq5vc6fQKGgVNC5uznVsSgFMr6HA",
  "key28": "5T3XKobSXtEFmoHpYjaFNABi2mXhLCNcL8r85PuqghCVLQiwGUhKHUUm9U2ULr5b97pV9CgYCGkmEthcGuafXiD1",
  "key29": "3TJD7ek1jaoyDvRj9hkd8acrzCvj75cSHPPxdyozxXXCvFAb5JVr65LFEAVngmthB3rJ24VVfDSinRPvsbPeRWb5",
  "key30": "5XYguJW176ZQy7YPx9f1xJ9NhDcXURDRwwBLFmqEadqxSP8oMGAW6J9NEgztrhigj7JxaLtDqsDLaBTjwrpUaJeq",
  "key31": "5n2ip2fY8sdex4EKZJifpuQwmfujknM349nobFAyYiNgH3mPh232cmX7HdpgaW6sJgacw8me4Dcp35WygoMtuho1",
  "key32": "4sVv5Cg8hugSeqG1CZbx76QeSvzPUU83e4KShgBjE1SDHiCMwKB1Qb7QTZex9AVdziSV6YfrueyENCtegvPxHuLk",
  "key33": "NQQBMmnX3QyFZarphcUmSQZQZGroURdogY5VFdDKPeAjeXQPsvD7mzj9ZTYgYfAjENz6r5ftss6BAXRzGYi1ud7",
  "key34": "SogqAKbhBLjUeXTnGVB3rL1vZYs1wmcPqeqYFmLSHh6MosyCWM1EQBdZst4wEZFqJEV1Eocez65WYyZq6ejy6Zb",
  "key35": "aqRkpToAyZJdiuL93zmhtk6BvHsRiZ1k5dXe1EYzwMtBsnwa1k4JPpN7zR5MDbArRfWb33NNX3kTq38WrEq5vZJ",
  "key36": "GkP8mm7QaStvAPVaLBNJ7eByzov5sHE1joHyu2hKMM8KaxxQvtmR5TzYf3QGxSM9etrpeMSzDgbFRS2mx9ECMr8",
  "key37": "46XnGbmEijY5fEqa6zna3JboCHupUvpPv8Gyvr54dwH9kLXyJ59v5KZWQvDe5oQTHypyVyvrv7YYXqVVzcKTLy73",
  "key38": "4c1vLFfbGbbpCQBLL8eCzuEwmCzWYPTTWgvprs1XtxBGAHt5h2ABHxd7Cnz8WGK1bCF2ZKWFzE94oRrBfdxo8FrM",
  "key39": "66d3jYTC3Zn38e5drKLKXuRTugvrzGN4mBeNxLqnAyasMXyPBLZqxN3y2QNxFaL2Uxt5UdGra77wLdRrVf1kF6bF",
  "key40": "3tZkkGDYyd1WpstogJ2YniKiGoH2GXeLVutdm1rDJvRcw3mYvdTQh6Fets4YaWMskuSKe2PdY5AhYk9GL7LBBF5S",
  "key41": "4s9VXS6b24LqPAgdEUVws1S14xBo5GdEWkdwUXUSPprfnUQ3RJ4MrsRyeDA3vnmmE42JFSp1y4v3cJEd3aX4hXr7",
  "key42": "sDqveM9nZnnWLPyFANo7dot3XRLkS6fCHkZvkRDcuxmgMK6rbnCCfYGrGDMet9NrTcdrPDrjDhooCS6xnHGQtdQ",
  "key43": "4fMo3SbVjER4uTb4M2PASnGCcZhCvvjHgdiCMjz1ci92fW6NBaKW5Zn9ZGnvugu6Z5oE3MSPuE8R5oLqupFifA38",
  "key44": "4oGGoMqQT2jz8wAeSQgwe7u7bbcNcEqPS9uKXbBC7VqboDNuG2AtLYPDwh5DjTwb4ybQXUc8nMoNFvSx6ArTtqBB",
  "key45": "4hThe2J4We1TDJ3Kcf34Bav6sCfz59wzaNzzmHHLBF1nz4VboAnDwHCdbX19SYdMFrbQqRsm8myT5hy6CE8zEWSX",
  "key46": "5uoxd632vzoMEBvEPThJtEB2Shh6cELUCXGqgmKw42ge29Dh3Z9hJ51u5gNJVV9xmtDYeAJMKSGkrf4qZ55jtfVh"
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
