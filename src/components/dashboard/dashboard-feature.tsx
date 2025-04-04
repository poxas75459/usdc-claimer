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
    "2UiBERhfe8asmYg24bFSVAusQH53wWyB5b1ops55DuohdMMR5MobvMXHVdQHLiAr3domDQeEDTcYsoCV43DAdJnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zEpFx9ytdRjNPLCorABJRXqJpM1VFSCkFzVQgX5xjb1PZ7d6i54CiEW8FwC9zxtoEt98kkWmprSRa1nr5fyoJnH",
  "key1": "5jm5GbUVhB2M2uhvr2DmWHWvWvAU7Dy1udWPJ6AZ8dgaEvzii9LR5fUkc6ZzoFnu9KjWqrjKRfy3ZbVKPseX5E4Q",
  "key2": "5gZCZirghgdwyXRei2takSTvqicyjz2YLSUZHi2auZg2Avnz1SofLWcwnBq5Ay7TPHc8nGZeaWWKgxCrQ3C52ffi",
  "key3": "5nPNCmRCws5SB6HJzgCNyW6s7PYrPUkHfnhivbnBzK3n6ruJcbfFS92zxiEwa4sBiU5w3KmYDNMiD87BxeVF3GPr",
  "key4": "4cfbsg5huG9K3ijFpYQAyzfG2x3DnjJdDF3H5SFYyfr8sKhG9EYgZbu7z9V2Yxs8kkDPQBukx4UoFsFQJH5AZAVs",
  "key5": "3oJSmr7KLx5Ezb98VM69qZrxXnvvKZTjyAU4JMz8LN4uvnfNWUHZNfHkZNBfFzCRfRQrr3suBP8XkFGNBMsBhcZt",
  "key6": "5pMjUJigQqDhrRPreAh3AkVfaBMsqNvfDFvcNKEJLKoqDf5LpexV6j1muMrNGU7pihYtnJihR5tdkxkf9cf8xCnf",
  "key7": "222oPQvUpeTzRvg1oWmXyQz4E1CnPjYfkTX7puWJDdpNfT5mL6gKdBbkBgQcsDaWxw4P2zJVzGxt2SterZtjM4kf",
  "key8": "35zqmbVf2FjSB8zz3ED7BLm382MpuoR6K5HRKvqkPqgNjNP5dF3uaZJJJeTHvx1qNxx4y5dTJm5fyCMwJySQYa1v",
  "key9": "47pb9eEMEVysQFuj9WircMbfJHXAGtvZ5xy7iaDRrPR2MDhv6QXDMvMy9EMoHQPXTnQHbjGeBrLtC7vUQcPBDa2W",
  "key10": "SbqC3yq8NEtezEquHGfDNDX1Uwe6zTw2QeQWetCPaxoeBThYVn1QvA5m1FMepJ58KGsU2b2fhwzUCLCuEPRYGyE",
  "key11": "YYsWAV4neHYkuAEA34imDaY1rnDfK4pbNDQXVwcuwkMfQF5gSP4TBG7sBvKGHVz9Hsp1vzcai2cUwTMZMgGLXxR",
  "key12": "4pnysVjvVuH3tp9JGjif2fYNDhxdivV85QEKie7XJnbzT9tBDF3veixnchPgfYkdzWMH9bRsqfhYRwuPcAcCR8Jk",
  "key13": "3oBHDgj4mjzqScW7UjYGTCBgpyPVYR3ZuStiYUTMm4ER8YPn9Aa2aUnJmbDmqn6FRxVgwBcNFrikvPz9mE3iZrv5",
  "key14": "5rCjTP27KHhSYjVLYFGwngeYmFcRPRERTBX7AvwgxkbyxG1u5v7prghTtVz7TAHCtNZjot3iofKtmwGft7P4nbPz",
  "key15": "2nYX81iG9ZnUPEhx23VhwBGz5rnfDz3ZCiu2LNY8W1PuPe1ANrJbVtADxbUKWetMuPWjErwgnP6BsBoci3vn9Mwd",
  "key16": "JyZSgU5M2frixhwje8oisczMEtn55wrVwU9hhJ22aaPngfDCEiDTqhSVNTKgscnuwjyNAm6dVH2GEmJunNP1rHd",
  "key17": "3f3AEFee1RBvM4NS89ULyyk45bnMFmbQJMqb9wpugo4w8YEoTQ2XA5C6cfsi5KF4LwVE7PqH6zdvwcsKS1otmrsf",
  "key18": "5xvS9JPMPK4ENiAUANtcgPd5yDGGbNCDzcGSgUs1iAUe8P3RnQpZGApaN4fpYF9tB1yKqovpzVLrX955EP8XZCJ3",
  "key19": "2LTkTHsQxpdU1TwfV378RvPD1h19vAH28CLjchP3TeNnEBNXoeGRAEuuGb4HL5w6YJPVFnrAFCQgSWVw1HHmv8hJ",
  "key20": "3CxBmxUDgsjdoUGCotwXjAyy4vjTJvC9aQckAZCEBjFRkVz5vPguzsQM4NfziKggLf4g8xusnAcSf2JgaUMgWk4o",
  "key21": "5sSWL9gdb2y1Ca1X289e2uYbaWSje7E5iCFuHr36CatHxssLvSnmxcxadXEvVnzTbPgCt3jnvPyFKefosDQwPPMq",
  "key22": "5Gh6WqVbGPiNtXR8VnKMo7CGEAzWBuNzcaraqJmnpNJ6X8TWHxdMWAo8g8W1cA8Lrfw9ykeLqzXEfdTvurBPgc1Q",
  "key23": "4QL1fDVT5bTNRWFXedio8tu1d5MGBoEoB71MEfYZhM6coJzkYTnFbt2XP88zSqR7kZoHrbgbW9GpSBCuY1TrmtDM",
  "key24": "4PXuRU23o3DvvmVWuU2gMeRMVMrEjoYngWDD6DC6UQQ9jn249F68kU4DFR7PjgkS2xPNY1v33wjuMT37qkCKFZpq",
  "key25": "4ofobhxj3RGJKWnq9g6JaC4y54ujkrPMb6y26AiTPfwPPbP1SUBDMs7uzPcdtor2uKteWrLNh3Jseb9cVpS8jHjd",
  "key26": "21yzVQ1d8VMspFJv1oDn7GfBdqWxL5iV4xRweGBswiazEnBxnekpTwEh5Km1hrN1h1ha8zj3oTjS9waDMMnNosSM",
  "key27": "293EUDJ1d4TTycN28Dj8x7qEJGxjKrEoCGoFndWGRCeu3hYaZJxQtCUmRmUvXwCAA5Gsm4LS9xBqXH67TLKou5XZ",
  "key28": "5zni5Vsz82acJbE8nSz4UnNwdxaAjm3dMeSDq7D5vFg7qhxqp14EcXCAc3wYXrMcD6WvXh8dj4n6VpRwonS1ELbd",
  "key29": "jmBf4aYXaxLsGB1h1sjLjstd4a2rS1trD1oG3fNN68wRAochLYjBrVkxBGaH4NbBtG7CwUhwMAbdEngav6TL5Ry",
  "key30": "1pFLgs77BpLdQ1VnG5w6728zJDXMUjEk9FyiUHERpMUnm6ZMLTvDEjLFNroASvzM2UhkEVNWPWK7TdBc1hJxLGb",
  "key31": "2kQ5Fc95Bk4mwRWR649mhveQGT11pSzrthP2hNDXmFwH625gb95CdVgJ133ZYLsQtRXAcxeSLmMv8n12MNHMrw5n",
  "key32": "P6rbRUX1v2toz9LRoqfPrgkG2gjvHuYcNgddpz75y2r3Tkx1mpXYuY9K73XPRRzrHkemSS2AHoCi21r789iivpZ",
  "key33": "22NCM9uSRsjFbbbNChyaogaYJuD2i6BEASkuSwrTjJM53r5Er15yEUDsRyexjGBYKn8Wy2LAXf5Q4uiQxSPxV6an",
  "key34": "M1wcRJy9PrtYpiZ7ygD2PD6KVrqyrQDTwxSuxLLvaoXhvRzaMDkzzESU5jD7N3fvGTZ6qk8qmPK2qihmSpAFfKL",
  "key35": "iGvf4keRGhwA1qTZH26PDTfd3SzoMhV1wJDLAmW5G4LYAzwkHGna2qKoZhYfKDNvKoSsWY2pRfWsGAJbLumqV8U",
  "key36": "PTpBVWaXFxMBzWZqDCjaAgsbdmRucHt5hqYr3dc6i3c7Rjwdzi3B4rCa42HkghE1TK56ccTBrzbfmSgfqkcALbe",
  "key37": "28HzSYhRpVeDrDzmsKLvKsBM8B6ymHVsVCwCL5XE3VKRKMyzZJwnBTrDuBabdYUqNb6uTfDz5AoMiA9gB5nvEmkA"
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
