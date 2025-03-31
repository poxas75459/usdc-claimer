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
    "2oyGgTQJQpKDaDWypeCUosnYWmyR3ozmThA1fp2JvyboNDpmtzsnPojHGad5GdGgqXcMg4n7zWA88qEX8wpL5JxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kJWnK7BHkbbbcmsnTds4ZKkQLvxdGxdZmDpwxWGf3aY3A875QGjKouMedCeqCHXjVFJN4Jty7KTq2nKyAcaDgdV",
  "key1": "3PKx2fT6BysDeMfTaJcZJzavwyh5mxAurf6wGjZBgB4pSbnStLtZUGhtphWmwVXcgABHkhiDsfCSTSDrGxvZSx3j",
  "key2": "cAxTbyMbZN8aGTZFc1NXtm6mbVAku2br1pQ5wz1iKLMPXAtrfhpYq6HehU7Edg2TmpGHdhuQapTusb6HYCc7We3",
  "key3": "nvCYkNMDKCyGMA5G5zudnPS4Hs29ouZocRS1vaBxVaj8FMgDLRx8jL1R39Gkm5CEJgnkJYu2uFEPBtWuRehZNNG",
  "key4": "WBjCPJm8T52Vsvu7msVMuuaMNPkwEH4qYo3yDu8HZUKvaAz7LvtjBH2nj7eoN2ehEmxnRxAbNCBcjQyrzsrDs8u",
  "key5": "4G3g9Fg7BhUyQUzmw4ixzKjxd4hJfwvAixYXNojRLtxSfdddMhF3LBGRa8kZhHvyDjGRGSbAduMVseg6Gxvn3iAN",
  "key6": "yFrpg8VmYbkDG93QVFdGQUnfGMVTTKESkdCmiFcj9i9RnmMLsTcV32WVsdPNNsoJzkRAFSggvTWh2a92RjNDDy6",
  "key7": "3op3sCVYXyETwFmT1GidwWs15Lx3bK8CFcU79PSp4WzNT7wwjdJV87BNJcypr6MJGhQsteGqgJgmd415yPPmtiTx",
  "key8": "4rEtvBeHUaXeWyPxtwhXGAfi6hZZucdicGYsQaUKDtuTyRhr3HyEt7REy2uBRsmdH2hjCfMogmHDMySCP7gVpY5M",
  "key9": "eLhyXWSSVV9CeCBw4gU2dBBYLJ56Vet9xb2EmRz3PFmqdJFqPnKqn6YaoTfcyAcVETn7weceZcBCayb2wMUwkqt",
  "key10": "PFCGVjkALTgqBtX5EMFEhP2KH7fwCYRB7PX1k6HT8QP1ekn5L5R1U1MZLkhhYGZrmzVnq4AvTMioeGXtfaFG1zr",
  "key11": "4xQ9ZLpLzVJUzV6E1FTKmZH1iV4hEawCuwYXqtNo8MN9NwDDPBGcpkGn89uxZFGFnNirQi27gBSSaUgAUWJDds3t",
  "key12": "4hdLoVpJiPNxMrqrEfBjXwg4dsvmyuhSm8UctPADRpJS8sjhmo6FYCwnwAWpyUbDzNPN3jY5ghM9ozh6dufiqy7p",
  "key13": "2sTVKDEnLss7812UcZZqXfbU4F1DUqMeQEiRt9D3xven4iVLNU2KMwY66cxpzc7sicr8Svks7tBKxeV8nNnyxT4D",
  "key14": "5ww7A3LvZnR5YNPwQ3pDPbo6KYSZY42PtUg3zvjT9YmnUVzx7Kx4dEVN1rS29ExBHoeJ11Y25zM4xXmTdz1aQAks",
  "key15": "2cY7Mow6cnYEFrNJgSwS4mnkNXc65V6ypmmRb5W5skokTkEb6BAEDzg8szSCMHmC9b2pHWpyTeTqw2DYXEPd2fJX",
  "key16": "38zSE2QDFyMhrta9mvgxRoaDJ8VWLtDV9T1n8xcPsAJzcxfvTz9h4eqw25yw2YpCarWoXcPKePCNFzfkBJCeq6WS",
  "key17": "qqJQT1aLtqeUd8gddVRQqhTMpZ39V3dAjJ6fRThQW9feMxtc3cfLbXdPSGAF9Gc2XxCUq2FAYKGyMDLLrsatJdo",
  "key18": "2haobC5wF2N5Ca7zvrqde5UVLaRbaiXtnX1WkABqfrZt91uCT41Thkt5NPVHr85xMhCeS8W7xafNc9aVykcK1Rk5",
  "key19": "2EYSrMEWErs4DY5dywLwKBFs5r9zyktvEYKRPcnY1xX6782fdcwxMwzcdZKE5TvUtPpgKNDyp5qiR5GCAJ5AeDtA",
  "key20": "2Eg8mP3h6PKm8rJCNUBMd54gYMuREjicAYyvS4gPZFC5SUYHmnf4sitb3pMGfHTWgNBTE125EjUPati44PnKnGyM",
  "key21": "2ZPKHqucFV9EK9PJ5ynzFFCGd5mQz3bidBiEERLHeXdYRKaeKyLs74AqPbJ7K9NFuqKr8g1Ec1ArEVjxRqhn2aW1",
  "key22": "4YjCfKXGHtgFiU2FXMRA53Kb2PDgNynJkSCbhpXKGC2mTvtBBUddDbfeCeU1QLPoqbqTncT7rapYLPrmGCsp61Bg",
  "key23": "5ux6Y9t8QtiQdYRtpR1WnaZvVLYQbodduvAdCLNLyBFDJuTjnnYvksaki8a7NDyXUaRtbKpY2RapfrgaPEHkn7GF",
  "key24": "u6vreNxVS8H3LZ1Z8ohCu1SoUWGfnwBqYbZJKyPHRQrTHweuysxqSibszws8XxFNctPC5vbRhDA5kraYBxanJQu",
  "key25": "3HVqhUtn6MnbxL4Qy6miYxGZQE45s5KJPG1LWz6VKWPTeWMNfeTv3ZmxRzUXUDuKeQDXN43mvyeXrnk5K9z4Gzg4",
  "key26": "4jiohxTRAuNYHR7wAanG6nhkM6qmn1beuindadCiAsazrQkJAWsaU2WicMfuJFvgKhzJnvNsRHppH5sf5JXD86H",
  "key27": "gSvmfrojZFSRVv9MmGwdk3nGELQKTWkoNLigA4Bqwm4u3Jhd6yCikPxHAKNgBcLFkVcT83M9UkW1cbRbHAJQnC2",
  "key28": "44udnfhD2Ek2KuuQ3QB48JEWcXutuyxY8xn75Ro8V2NpDfzPouxQRgg8Tk77X2zjXmktNuM3kYQbCywEMDbD2geH",
  "key29": "4PCLQafnJgRYdoAMZeZRazgNeYpe9ELcCBADkndg1mVuHfLUvaUWPBUJUq293MM9dS2gdr6NeuqR5Zh2pr5ECZDS",
  "key30": "4eZVPFdPxk1BVAwuG6GCPequqxFFMSWiYBYdUqpqt2Cbrxbpj5phn5HZPsFMYXyruf8PmeHwYCrB1Rx5nfko3oSN",
  "key31": "5pj3SqA3QV32c2ShAdrF3QFJE7PHaUFFqvUuyrUh3aQAEfLuA36Ksdx1QSTA5PzPbFB7BJvNNWkjA7WFqHTHnR7u",
  "key32": "mBYoi6niuTZPc9g1z7arcbnPD8PKth25RQiAjhv1ULazS9v4L3UkXmWNEwFRJeNuQbm5q1iggTkCLBsMo2a22LC",
  "key33": "2J9yUGweU7tTA4eCywnr9GN9x5eqdGYDtDVwHRnfqj47j9NAF4DBdPJLJVRvk4HLLsigAZYm2kkPuhrkJGqGjZBk",
  "key34": "2DkvV2XAZpfdgAnHy4YoND2ToWa1X3BSrQTYsLcFtJPUTFtkrfmhhJenbfWtWPLtMBJN4xu6HkD8AW35HqLFvyma",
  "key35": "594T25VK3rYxbRnAB5pKydS79nxeiVqHb5yfJAAGvK1j5CV81MNtyknBoqouFjCDte7AmE5BMSfnmR2JkFVReMZT",
  "key36": "4bc2LT1HLhRHVkutpmmxakfxHES5bYa2Au3u6H7okxybwf34pAs29tRdxx3WtrEDo7fcS1H8wZvumNv6EYs7Rbe6",
  "key37": "4a67G2kJaP9nTBpA5Twf9Jzp78825xj1owSrVWH6Zms1k41xyjbzCUSjnzEAKhPPYNzYZ2wW8LdCxokdkZVPiEHn"
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
