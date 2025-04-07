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
    "4tbVKdwarnfVQCvGyU8zEuxETE72MFXDsgrmfRobBxY9vYaYBifAL1UmUrm3SdA9ede7JGURHjnwXaTifNUe4mJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eimQNbaX2BwkTDeauKR5dViNyHffntY6yphq3Uci98EZ5Nt5CfWWsoXCWavZM9eiAYJp53Bg8uVqhAqYToYqm9n",
  "key1": "cD5A6VYUxUDHceFszw8DJXVQQFeyjA95xdEz7P6Y5FD9mtvsL2kdEcuQZNh43Gp3uXS5uZoBfKDnJfi296dEYH8",
  "key2": "2LZNeUetT4Kmz2S7sKyKc6LFszupAo4fk36JyD7SvCTXJNVwtyt8zw2PLkbRgwVDEgrhcusrfB69ctkaL3G9VEQ3",
  "key3": "3qgRHANT96VyqMx9Y6bLMRjiyrLz3eTemneyU738RDuv9aTtJSZqTGhvmBJ6zpDX59LrJTGEdQT7byZfgr81Hhtf",
  "key4": "4wRK1w1DiDFf6ggDEQPoqi7GgUx2V4WWG7MdmfB5cFVYHxo2zD6dXfDYztbN3HpVFsSntQPyvVg1K1o4x2jSXEVF",
  "key5": "4z4BY8ErW7CPnafJ9z8kRjh7CwZZbBPu6jqACuf2sayqmGF6i4zoLojRJv5zqHoBgRNujz5thWS2qmttuVYvfXYL",
  "key6": "tkf2m3GMxVZDCfErPg9VeXcW25fzAfawbsze2ZRmuGsySeZZnpso91k1qEb6T6NRe7zbmZ6rC64L5pCoW7C7Boj",
  "key7": "3prrhzcruyp84YxqaXMuJKjtmmJ2Xk9txFfTKiQ5Gr5Q88pUoDRBfzFnWZYDZFgeFndCxDxsgaCSun8mxj9bZqRp",
  "key8": "5GwKXgv69LeNgguPVo92mes3TE36DXEWBGCm544NVoNiw7sTkw9N19xbsKBwgcijs5Vku2W2om6wtorMKrnzHocG",
  "key9": "5xN9BHmFvYn4SDTyeUoFsRzCN8Md21PrS2krCcMjzRKLiFVhqiawZTndEh7pQaruLeq4oNEogC3QPfGiu2RVLres",
  "key10": "41HVP8qyapMcaTGoB6S3KQpDxigqWS96sykTs5pGUwR8gJhznhMzRiJw36ieSFUDYLPeCqL4eVBSZgSdj2z4NkyQ",
  "key11": "4MtgnSoqUkdUwZEvS2dqFbkDLtHyUuEbfxU2wsio6vykgXDcATKLbKcby1uoie9wY5XCzbT28debDiGzHcNKufp5",
  "key12": "4ziosJtWQwsthggJVJAzkR7r467ST7EJUFey3BCFp7gceRjSQBx1jJ6or2Gux8w3GWUbDsJ3T8xzwuDtzt84Gmig",
  "key13": "3f5v7TmWQPdsudMrcBntimHivkswt2ti1Rfax9PKLXHRLyKGz9as8P7feTFVuwkFQNVszSGK8d8oTgFgCBGNko5v",
  "key14": "5n2pNcMGhKHfSHZMxqqV5ev5iyP5o2p1DKDgLbFsaLFnkCFBKrdoshHAZjrGUH7p2iWdh892UYrxoLgH8bKuqjy4",
  "key15": "5a7xHDnhpUYgvrhxnBrYVu2LngymE3FYemZUz6ZuHFQvLD3oLFPMEeda26E4Uua3u8n1wD6XTVMvGaKNx7SXYChv",
  "key16": "og37oxzdxz1W2njNe2SnXPmf8ga5RvSyGYBwgdHNEjnpEcCGkmmwbm81HjciCWed8W4myRxFV8zjcKLG8Ri7J6U",
  "key17": "xR8wkFNFmnryVBE6xiMz45G4QUTEFAfyW3wt3v45ENSxpcW2iGPhchcwjZHe9ExZo2189AHQ6g1gaHBUauwPHeX",
  "key18": "29SSPqfH3DDkhZS4ft6uDYf7qZVMSggSVqpArETXBhXYxoS9dfnXvrhuXWGMJCWNft9QAHo1WJ9QHk9w9otBYT6A",
  "key19": "eKvLtA5eqfBVAa3FrZLh2F4eSmLhYvFYmf1ZRNSVfutycEWpMt4LUS7ygscchNPVLxXeZEdj3JTZKeSbTjR5XPM",
  "key20": "3N6BBNhxun59H7yLDEz1EgT64xVHufAnLZVZhubVtgNNuyzwc5hbrkkW4m7Eex1qxkByPGUzoVsmVYJYwK8ouTgu",
  "key21": "259krpKgZHBmcPm4SpvhVCafURKiCpeVrPmGnBZyW6daVXbDjEm9K3fwKtLduqGHKMmK4W2uvdxCJ4TKiN2zCnMa",
  "key22": "3mwiJ67unTgrpvRQjcm38iiXqY4bqLhwjRpHbQjJA9XR49JhwxfziLcS9YiM7nhfEGPPLhQypodeasp4vJUiLYhj",
  "key23": "44Pdx5wsmY2dkEkjBU1mshSBTMFQoYnNVYWRi66EhdtxAXHWYB9ttnAGspRuYcZZ4msGyQRww1Czash6y39cDnf7",
  "key24": "3UqhzMZrRF7J4TKuKA7JjcU2dCzFwcXvRms9VHc3Q297Yt8eVhkMGfgCsVrmTGWCnUFDHMTDzHcrhBm9wqMLgKMU",
  "key25": "5AN6CSLGLBCeoHR3LNira5ToLUVVNPwDeayZEs9Kd9UFSgKVejoE8SyAN4RCfFavPPzELeNqU9pEg7uU8WxCgUFH",
  "key26": "4dAqofSDeFqMniWufEogieDmhdMX68dEkZLdci5VL3y7iKvKUpCSWgdgsQniwYQ42CV7D5Xb1rPQuYadGUVQQ7rH",
  "key27": "dKAa6ZkVs8gXaE1B57oSTNfaFspb5AnBDHPsWL5p3KM1MhCkWPq3KemQT99G9M8FkGBZ7xM1up3hJperSCezVAZ",
  "key28": "fsxpjP34cpTTE71BdQCN3nmnH7vcsKajJUS7puxZVsx2ai9fvWzBaQLEkFBvfzXXUgpeo2aCQPbb1gLkWz7WATC",
  "key29": "HEoABiCquFmrFNkVq6edYh1xG5q73kGuYqaFUUSd2kQ8pBorbaKLRYcot4aosDHWfyjrntzvQxkz3osXsFM7W5s",
  "key30": "2Q8MPB8yj61bpKLhZwJL61Xz3hFfHN1s5uUovsmdAP7NpB7jSwi7ncy1hE6UzuMndGQmKERzmzFw4a48tTeyYHfa",
  "key31": "2wZN7JP8QJUjm5aSePQX7ogKnensHANgTtRVNMvx7wSKKv2DmWSaYgHuSL8961fF2JqLbgcfJDa4BrnEwAvRyNSr",
  "key32": "5UXgYw3C2XS1XpRi6bBe7V91mvqKA2jHR4LkNNHKECSyPwxNJAWf96xGpKAM6F8q2cLRtXmp3zH1JwQgkQzFaXDm",
  "key33": "2QAx83urzdRV8jkXXE9FgPPe231UdHdstCrK386yRXrTJXsypPekwidRYsddBGcthzrJToUYtNfCt7z7EeDjcoMa",
  "key34": "C2bcyUaMwJFjYYHv8uAwC3FLxVCyG6gzquTkccmBTjjZemfzxjkZwfZ5bRWXdHRpw2ie6VdQs8p9zLC4CA5iU8G"
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
