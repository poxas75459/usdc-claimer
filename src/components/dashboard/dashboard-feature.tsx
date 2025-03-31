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
    "3MaU1bPFh4aX23jEspE9MwioWcPSKsbZVkueLB4JAYqTmJ4mC5vWhMFe1VQro4XvSXBmp5pnhp7NnPCjwaPBteCY"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2xbWj2psEzZeABr5VJq3F1pgLE1k6Lkp5NPkU5v8DaL4DKVSnSqNVwbmp8FJaUMFQ2C8yLM6kiPoTy8BShyN3ZVe",
  "decoyKey1": "4TWy9ScXbbuUzAMF4tNGqCBZrPbVUNRQMtaPhG41hxRLnoAivT46JjZvBgw15iNq4Da8WU7tuoqVRpRGvhDzkaSZ",
  "decoyKey2": "7TfdLBMBLGyZbCdbWhYZcwXE5GK4xABHKjeT8zp7cWdEqf2NPjD8yapFsqC2WAHZ9zQ2PGHaM3m3rnqchfFF1U2",
  "decoyKey3": "3DVaBjks23M4NfgkG3Zv2XmRuaZdTpoHmGuMvQG8VKEsWaJ5yBfWZ4oDSZyto4c5nny8V9cdRfY5bno5C3dH23vL",
  "decoyKey4": "4wb6imA6fXPTLZF8ScjQdbkP7Q7dYzCXAJTjA36b7DoQQretZrS8atFVkHFewsfq3KuCUA3WeYhC2y7n2hf2Mdxm",
  "decoyKey5": "5oLbY4N8P44HUkRxZDkT9nE1vMGnCoEXvXyNmgAdikXrgjiAEAVp1DtUAvVsxLZMfoTPBMqez2JeT8rYZTR1HZeB",
  "decoyKey6": "2faGiicJe2qH7PHw24vwsgSYidNtfcUv4MGvfMuVV8ewrPrfj8ePZxQ29j3aD7zLFV6Z4aTXUkubZjmfa4zuUy7X",
  "decoyKey7": "EzUm9Nv6QrwgQWmEF2ghnFaGiN3WoMsC5Gy9ZjHWfQ6Nf6c7KdS51iTbNAsGNrSk7m3m9JdjhLrkqNCHjf6wLSW",
  "decoyKey8": "37qDmumFF746FZpryae4NZUGG7fHB3buVmHoEenMkoCCzeuioZ6tHmLtxHDG2zQbCFuZ3SCyPCXgVvH53JxVAdi6",
  "decoyKey9": "4fMjxDvXoY76CFv1nbw1BqBKUfZFnPsBGhfozFKXcQs1rRTsCy3PciECkPYW8eHhmEcNx2ADyPmNsFHXrjvMFoXh",
  "decoyKey10": "5ecgyY9bHxLt4PpV3cXQvRQExHQBAFJEr1D5o18L8oEmFfERo6fTHJKEny2Bivs4waMp7dqLHMjWoWACGfqQ3EQg",
  "decoyKey11": "PTZEokBbxboxvoaGTTBZ3DQsc4a8huoZKUEJQPEDUzarbHvP5eVPT1dLv1jP8szViMFte37Lc5Q7PnVmRS15sQJ",
  "decoyKey12": "2VD5gBTte5fKHvYx17VRFHbcDao1aoDjiKpeDRsGt63nxpTRurtb5vSfu3aYpcMUm1ffNaKcLwZ5pGMvYxAZAhQW",
  "decoyKey13": "3J4ikRbFLGVmgq34P6rRPHSrd91KhR6MReBUJS5eDK9bZrUr7NvTP5stH9ubZpJuy4Cy1G5vuk2jf48wmmEhbN3D",
  "decoyKey14": "4z8zuj86zZsBEg5jxn47G53rn6H9xGXKb3FGCmeN7o2LMTr5FHBFkkRq4a6sYHZweAwS1VzH5mGNSN2Swn8TmXxA",
  "decoyKey15": "3hqNHmUrrV8ydtFdHqx7QaFmZwaRYxMNP43Zi7tmBpFXNJj4xZ9ko11KdkQ7ajFVDir2ED72EH5Gq8WDB296hgB9",
  "decoyKey16": "Eor94zjJADPKpJGMBKCXqWngesGN4Bd9ncCDUvHYvCNdvLxZqiRCQrr4szHnXvpYPzVsCoj92WrY8MXzmEczuph",
  "decoyKey17": "3DXTMtYED95FnZkRWRQn1CPyhdVbFgowqmm6CWs48w4UkrfgvxgwamSZyiWQS6vTsZHD8kPFW55gySVMvRpPoLUM",
  "decoyKey18": "2JbHNraeALi8GJZ4raNjwMq1QqJQXYrw81M8V3GsMcsYcDhpLh2dNLtHagBBEhKnZLFz2cMDRkfqWtsiu9JRzBqC",
  "decoyKey19": "5HYJh5aRReQ1Yzg38JYnCMJcFLj4aMSgaA5W914TdhZpvNHdgZyCNF5n7KVsqdH9fifmtd4JVKriLBrVp46Cc42q",
  "decoyKey20": "5PYh1izKeZ5ocPfxQt35nHXUM8M2EEva9PazcdZ56LS85DSG6Q4ZUCJ6i5CyexiyKQpuN3Ly6PVeDANzvL4F9Qi1",
  "decoyKey21": "3mhwDFFMDwbo7fCL2AqFyNG2dwEKPUaMxCSw2MvUcyrgRqS3zBEjaGdvcGoUEnXJpg95862bVHkmoZoz9cJs4ZeY",
  "decoyKey22": "ornWbLKMiB1rP3XHpAabkNVunFMs6Z4cbMGddkzCeG8HnoTj8a3kGSbpXrhXs5Q42jey3zdjKtyKkeqoc8mUn7c",
  "decoyKey23": "4w3YU7K4DS8ip2uHbBjp9Ertiz6kyLHTQRJvUJVNYbgV8BGPRJtSh8f4UqveqLFSGmHjRTdQLMc2bDnJbnR3cpJd",
  "decoyKey24": "2U5dAS4cJDNui7CsxHkk9q1sowk78rq5EMhb4biGeyH8pVRPWWKx75k8R9L2SK7Xd8ShgdWeHpokRfME9aMX1YK7",
  "decoyKey25": "5RviYhczH4iRERFWiqT6SAQZzrgRgissfyDCcvmxSi2XH5NEZGArTJUWaZfEU6MWyePNs5DSAyDgNC1fmT7Z3Mxf",
  "decoyKey26": "DJF5cmk2q6K7oWUsohkXjFNGiv49MdGkoW4s3CjzZGTNFdwEkhfN4gbbTct7aVbN7BxmeZsAJXKBqaqYkdGgxqx",
  "decoyKey27": "4cirNtHaQHb3jMY1ts2JWi9QtdFomFHotUtaJi2uhoonmmu3Wcyqvy78cidFhFA9JDLkfiUNZSfjsJi2vRc1q6f8",
  "decoyKey28": "126D9Y487U2KqvLCkabvV4up39UoFm3Sk5w4H8SfRHokKmRT27d7Mn5RRoEvhcDSrH7XdLKU8Q9BkdMdfo2qLWJX",
  "decoyKey29": "27grxxX5VdDT6RkJY2QDgKUv1VcxswbQb4S9Dgza9PJibVTwyd3nNbBhkKvBQrFfEbaX15RAXNHTpQwjwnyyo7qe",
  "decoyKey30": "4PmKsRCj3FtQt5D6VTn2yXxKMgeJQawekjzsosWTJxrTvQ6TVcU4ufgBUt58XF2aCAW96hYFXDtaUJNyX4kXwhVJ",
  "decoyKey31": "5bJoPTPHpw7Jk2CCVhZ2kXXsp5TCkpcTwRFzPiu43LztjcrB6jsVdzX3oAKr4raKLJ3EfTwWqS68T4LeRGzATuyV",
  "decoyKey32": "4vmiT47YuH8QtL8P1MmyKmASgh1k4fsEHmHqzeocSU8FMjNL3wsXmiiKhuVH3tYhxxXHzo3GJb6aRry9FE7JkwKd",
  "decoyKey33": "4SGFb556EAxtP4sgfq9VTuKckPjVNaDFjDEDNoFGkzL4McBKYKMZMn7AA16SCdeGx7HSZgyAQbas6ABi1bWmQbBZ",
  "decoyKey34": "5NfRcTvwtQNqjYgb7eqJjGRExX8fVSpxNn9E7bVZ3WLeFamfnwNpYj7TzsjKVnWcmgNx4CEd3Un93pKcRwUpq1Ek",
  "decoyKey35": "2YqDz27UocxS1bUG1rVbXs82N1rG6x8ujwNXR4HMtDK8Fs52hXetWZYrerMZ9orYjm5X7tkUM6n6CSw8oEPeevcV",
  "decoyKey36": "4chULuifBj1iZmA4gjp5QptFuZM7w6mdSR7PoyHxxbfxZ5pQuWAeRfEobbRW2y8ExQXnb4tz3qJu5nQWqyYX8LM4",
  "decoyKey37": "2q3dbqDeqchUR5jBYBZqzycJDDJ9CiuzLzcsYThJgh7HcGvKmQnxTyzMWip3qQe1cca3Xw1TnfXGhDSNz1o96BxQ",
  "decoyKey38": "62VbTAijJ1oTNTwGq4rRGsZvtxBN93AEKbBDVc4zU3bG5sTgVCreGyx1oc6pTK6XK9NkaPjGucECWRbP5LRQ1ARQ",
  "decoyKey39": "2nSNU5TdsM96CidsUsSwadownxe3FmmLiFr5fsmWvjpB7rMcZCSeoRGgmQmhDVVLifPKRR64qUmTVXxdYXNGtqsb",
  "decoyKey40": "2GrjthKumZaVEL9wwhR7xys8fYhowj9pxXXbLxpgU6sEwLQbD7soSo9XWW54k9M3iawj9ZMqfLcvAuMPQNCjrDBY",
  "decoyKey41": "2VZiyURbKpVuHjnDYF1tbjyhQ71eaCBLHg9y9e5eFCBB3zrK6Xmaa2MU8awvQyNjJzof7bwhZj4MpJ8nU6jXxGHC",
  "decoyKey42": "MAtcg9DDUFVCXhDK3iqndDhFt5rTFmvcb2FLE3ms6RfXXWkwX17NCqGsY5Dwd9VhdzBBrhmgANafpBZdsB1Xr2D",
  "decoyKey43": "2PuQ3f9rfyamMfF65AUPFFF1Ky4pwrH459PGXu1CbrwhmsywEUmubYeNTTA6spDw7D15uj449nqnJqAZtMwL1p7y"
};
// DECOY_KEYS_END
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