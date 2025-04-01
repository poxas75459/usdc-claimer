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
    "3GCQuP5C6bW68phRt6Tk5jP1dCCUeT1PHNEp6vvi9b7uktAWJqYKHj8zEGP9zcWM4fV7BxMnWGUSwy7vyF1x9vyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ciLtwLPtwd7sspoCuiWTMg76bew5CPHQ1oXWwe41Afo8TbzyoeGds4Ra3DoTDvQRGnEMhrA5nAaJNANEYD39zyn",
  "key1": "4iGrLziiz6QDU8GnYzEUSmjjpzu7UUfpYkyYCbrjRpLn35DzXgdbw2cfj1S69KB2xJVu17XyW8qvSrUnUsENZt1b",
  "key2": "5kicQcv9FitKG2gvpUC8zLtntMMXF6sEiMrVg1uUAvqea88Tr4vzbroDoxbD8fcZRgkzWNiTwe4bfNNUj7zgSZuf",
  "key3": "Qb8PJsBkmHMUT9igbvBPHkmgjzunx2VbTL2SboEkz3KoEYAQmxzdszZKhT1FhQrs7vkzU5pGmPhFSWHJTgXwhEC",
  "key4": "5ppBKbjGPb64o7yixx9pnTGq5QEYGV9rahusYxn6Av8kefiipxLCV2bbpT6CECPP5DXoBEkKUiaYRjnWKcfcuUai",
  "key5": "5fy8UAS9ismEPw6xpqbMFjnu9b6TGVVo9N9JK2Enu2eiz44roKEZ28g5SgVWwR7haFg81uPTmha4inTUrVg3tn2Y",
  "key6": "3rDbuDzCJRohBuyem3LL9bdL5XrdgLGt7WLqnkQG9xbpoc8cfV1CrehofwWp7VtTeL8bV4tgcgCNJ7ZvEGQX84MH",
  "key7": "4gR6SaDFDjmUPokCUyrXB4fyPoUfQdzrP7Cg44NLNT4pSL27u1yqD5RtTjkby9ETvWWaPCrt3nhWX5P1aEstMgxK",
  "key8": "3WhVKdeD9QqhyVdkDsxZEuzEAwTzeFkZgX5ahutAk9wCN43RDqnbqshRZfJqvQ43ukQjQCbQiKyeJcg89m4s5mdb",
  "key9": "129VVT3q4kSVNVAUNvFWtTGV2APr4H5auvyfYLcFN6Urxeqf2EHmCUFdPMLg3HvxiKFE6soENTfGXjP6b6ni6sWq",
  "key10": "4AGL5xARpf3WMXaFNQBCK1KZSqbgVGnP6zK3S13VcV84DTTNemc6kUL7wZfSnF4AYhvcUmudWQeGbNmnDrDwpw5H",
  "key11": "53kNsj1K7KQ1xdnRgEdRiZXf3ZF2a8igUwC1Y5XnEd1LpfkvGLW7SvisdssgToWRcPakNq3KsWJKw1YnnLWYMCuN",
  "key12": "qC1Bu6j9WafZZgwr9tE7a2kJUyw5SAqCBnZMTCS6R2sMtCzAQfbVcxYcWUsMtdjWVZNnmgZVAmW8UDdxwxd63tZ",
  "key13": "h5Qe5WagGozFyV4r8eS6zetgfcygi1AJLMVin2SMmb32FTRWjzPDZJZS27hTaSWheYVSsmm1bt3rGxNDWWiX5cB",
  "key14": "5xKy77Pq9fUCfQK4dL1xKyK514jUf569t1BnAwQG1SMhRE5K4R4ghhsGoZTXWxKA74NVMAxGdsvfvJk7vwHXhKMK",
  "key15": "ApDzea5AMwLZw77zKCArVZuCX8QA1ouU1N7vwUuWz18znvjkFtKsaaRDoqgTXLVfj1vaPVmgdFRwfUgfKKTkmf4",
  "key16": "2EJS44Jwd1FQCpui1fkqPn8ncjKPkSsifvtW9FPsDzP9wEHagkVQqUXmebE8BMDnkt9pDRoea9FKSm8SSSKpnnYg",
  "key17": "2Cy7aFL1b1HCLmuVE9nKJDLEx42wSYe29PxVsnUCdqKzxqWfpyv5koiXNDM1ExNoRyLjBoCvER3eJnDyw3iYnv97",
  "key18": "4j34EprN8ab2xQg7weoLoEMXon7jRdxkAysUhkbtuVeQ3qje8pLTUrzwyZ54cKdJauPX4R2wRFyBq1BogtLYPvRa",
  "key19": "TikSnCq9mSFHvbEbqpQeGERGsGYx884G9N6fSGmcrHAgcVDiRtVh1kcymR5JDnV2b9u1vvQXUZ2PboTjtMn8jdA",
  "key20": "4n9zCJM6Ha6LxRMMJrFAeJGk51saTZf9rLVghWrdrXYxHVearkXhKFzL1zht6PqKbpqC1mbHHxZo2Ajfd7QrScWt",
  "key21": "2JXxhdUEJd9hLLzpEYoyjEd615T54bTyQx3o8jsjCvfFSE6akY7zb9nu78oubw2Q9W29FLneamfs2jX4dBJwPEUn",
  "key22": "2NS8cyicyJKgp8iBb1dRJ9HWt6dKTaFSS9FhLGttsEW8U6x1kvwcqjG2TTMiWJ3paULzmtmDTca7zxCbddgwxFft",
  "key23": "34TBvtFYVbfAJ8JeVz8E6ZUzwNTHNU29Y8nNvpU8BvtJWtfwUjYUAYXkYgaiEKnzFedXBkcNNd8CmvfU8Jnt89hw",
  "key24": "5brdVtRQW7NWoUyemKUu1qFwryiW1nQt6K9UAtyUUDLXoucZN3W6fq4kvDhnM4d1SeTYNTsYUdinaxKLb7fUsYrS",
  "key25": "38MbnTDDYAdQJRy68e5i1psmC2se1aCxRhuRmECbFxjmGmJfJ3xaa9prX2G4TftrPsyAjuAfQnmx6LYZbjDADyVk",
  "key26": "5wUiyiXXfTVeQSBCRZTnvGqsYgRMxDJ3ttWBsiAqiPybmbzYgLGvuefpPS4gnHjXKCyGhEqNtH5fnoQ2x4qK7FYL",
  "key27": "4RA5auwqvJ2avXZqEfRsN8ePXDUhbGwHgeXradTDBg8Ft9vzEYBubCVHj8Yq1WU8xFu3a1F3g8pXEcJCKzMSJ81H",
  "key28": "2Dyjt7NSTSwrGFTuYVZVPJjaiWj7TGmXnymCSdMXZ2pNwA8VtFMc3NcH4GHXtAExUzJQ4fvJgc6hPAsESBYebfwy",
  "key29": "5ceoPhiLssPqGL7AibapVKGabLCCu2MNqzA241rWRLzPp2vWDcD7scxn1NL8ifLV4RhDK8roPTTYCm2NbgVgQ3dd",
  "key30": "3yAoUJXWnT6kkQEtbbv5zar2F8MtwSBmQDyf9pAUvfHuGFvzajC9MBdydPxJock1ac6Ya9gcoY2tfraCYoRTNbBu",
  "key31": "2mWzwaYaKhfHEHg7xxMMf64maWzsz8xSyFgKoC1ezxyqMYCkErRyBs5kEYjidCebGXQoPqPzshwyoWmZtfdvmyft",
  "key32": "312vq3knSLAgo9LC18NbG6oTuZjUdXqMH28w8Z556CHXMWXjnH9Rn9Qaf4iSjGzP91MLmuCdZ39zW9jk5NJ2GFNF",
  "key33": "4CLQ5yxRYvF5wQk8yyVcbePVsTmheFpdf8NyBuGBz3g5WK2m9tmdLETBW8CVZx2gJJHNSSHBiG22ihvkuYG2wiTP",
  "key34": "cAi7McG9qwxByYJeC1Gtea6qoCwt2MqsA3qcwoXySjyoQF1Uke9i8PAkxSzV6dBWFYnYFam6jjaWfkXJm75XCmV",
  "key35": "5ALCyyZhkN2ZVZRje1FzyJc3pUeBttoxgio69NCxLACFVkrtinUXgHCkzDP5oqYXMGAUnnD8Y7H3qviSv5Jj3p5v",
  "key36": "4ucSvrTeMaDxKTMDGmTuB6wNpLP46RwXVvzfkCW5k7SL5HG5yWaEbFTJHMZmeiSh1FHmDa3fSe7sD1bsBqwXGkXT",
  "key37": "4JQamePetKPQt371SDBy1NAhZAqYpjoimWiQFN2WGsLQuEF4wkioPvLrmT5CNUXhC3aWfbJmryL4bxFJz66SafsR",
  "key38": "3KpzpCr2b3sgySuwoLhpu9PeiWw1HMkcCoaW1xHKr4rwo3Q2rLVTduj2ammCaZNemVUgebzUMAJVGJKitp95bogx",
  "key39": "tdk15NJJpqvAABCzvfNZVcu7RSKxNoW5dKvjB67c28QJZxfgAffg9bYYp3zW3xtYq3T5W2QbrHj9CgEpufRCrTC",
  "key40": "4bjJMQhFfHgm4zMKACHh5XjHrrMD663VvFGJJUWJAA7xN4x72BurY6TQzCNPoCwom1HWZdo1G5EjNUiJv8fAj22U"
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
