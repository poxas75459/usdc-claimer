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
    "3YWReJpqoNQeT5muDMbY3KRZtL2t4VQMfMc45iyR7NyEff9SNP74VDr4z1mJ3HgfYqSry9XQfp5UXDbKgot2rU9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "233a6NytExvFD37h5h3jfPauVPkhjayWvZy181trNx1m6L2c4wykjYbr2pfYRxkFFqcaGY2YuLA8VfWoEsZsHtfo",
  "key1": "65pFt5ZDo3dAW3xtKz9vTzA3DfDe3nSn9jBXLBjFwD1uH3Z8gJmhGYnrUQNrDwsjLFdJFjwCbo4xVTEzn7jDeNRc",
  "key2": "2nFBUCeg6GBssyvkA72MNq3P6KbeiYWYsvgCwRsmkU2U35vYfAK4FiBUbwvcjZ9MLiu5HnHks8Mb12wrTce4w4bZ",
  "key3": "5BW8tKBuYm1jxTG7BydWbimeCBjRQsmozQjD3uzhWYPrJQVdeQXDB2gHpECsjspu92jeNmWTg74sdVWYxR8tJCKE",
  "key4": "3ZR3eF2veaXZ6RbNsc88WbnK5717mGUiHcGLLdBd8AaHPjwxwJhaPspihiovsV62cMTzTpninuSoghAePvEWjwti",
  "key5": "31Hgh2kNS3y9392wBdZPckGSkzrD6CxaPbRb5WeodHVrsE5Rf6xeY2EteSNC54ffAzWP8p6LjvLqMgtL6Tx49Cyh",
  "key6": "3JUYSdqDbx9vwikir7unTQcCsSFGVvwMHBWM1UR17hKJQY6DLecy9mEMPuR2ThBfu7fDvRBwML8Km2tBjH3XNuWX",
  "key7": "q7DsXqjnemQtb44n6vLhZGFVwasz8RsTJarKNHWccw8NEg5jrXegUH6Wi1Mb7uuGTzZmb9NkcqMkDNEVtM3EqKM",
  "key8": "2J6p4RiDZt5aUzotTTGC5JzDorJKHJafRBoSbKVRsjBFjcwH4DmMC47JokGUgcrcqg9W8aTUDv2VYWGbbW6hV3s1",
  "key9": "52AHH1Pf3v33pdW8wkTxzedFS7RFDhDJZZ6Kf6D21LoghiKz1Nk6u4626qwiSFGc8iFu9gdkF65fUknYmoaafJix",
  "key10": "2QgpcxkBJogq9RaYcpBz81xuGK8PzMdxjvUsh2RUMJJvX6X59C1isM4GdCwA6z1QScihzU13vSYWvmwvyeW5sxh8",
  "key11": "3vsj7fqNKpHqTGfyk8aJ9BXAqSGkzPsoyk1LNep4RtxQH8SjWCgKHZPpQiS7WuDncWBHdoYfuCDHnzKDjegMsBx1",
  "key12": "4B9wW38Qmj6nFkCSNyPQjHZjNJB8JfEykti8AetncioMPJDxFvHXuVWvtfNC7TjYktFKtDGVMwGTAgtmBVCoUG2r",
  "key13": "2bXatThCZSM9VTR6xJZ5yYNa3DZjXs5MBgRH8hGhh8BQYNkUcxsGV7CY4CZuSBPgeJxg6PA6ang5NFJGwyJp53XG",
  "key14": "jHyB12W4KBZ2dS94SCR85Dvrq6tPUHd16hZ7mnm1AStDFz4wTM83oayfSZDaz1QDBTp6EbtuaiEeTnvQGwNMxrZ",
  "key15": "4sYaDvpEfi4cftR5W5xL38NsRYrGaLpYfjEuFjGz3MqJa49T9nWq2jUs4HDiKzMpDgubp3pbHYhHvTrEHpMt9P8F",
  "key16": "4fBatHWoaAUbdi1pzGbLVg8eEWmnzF7Y4tD5qvYxUe2LPMNDdm1t6URHYwdUrfQ6UWj6r78QfdTjqjHry7FMHfJJ",
  "key17": "5YnLRUroLeqnFLgkHR6AYwHzMNL93pr3Pao3T5gjiXa5FeCqpBNxYf1oms67JVTTxK8db8UCq6S6whK83JnHxy9j",
  "key18": "53dwryn8VCFjDTVY64LVhBQHVFohL9sCNXonCLNfeh8LxBFvdMk2RgbaQdQE2rsJja9ZRwgG8ooE88MsCMKAK2pY",
  "key19": "2QhLLPsWxZm5zUQ98hcr1US4aTFVA4WoK1484K742K7rkDzEXCgmuCwrufo196mgsNXum4VggNSUmv4XvYVS5Gu7",
  "key20": "3o7DCZBUmNFbJRtKU9WSephA93VNTDmKhdexokWvTPZ5NdioJZwrpUD3sokqnGLAkAAA3jJLNqTWnXQgyzY5BB8V",
  "key21": "4VpCbj2VayLWWwMjyMUt4sv13zcoV4XCoJWjKUKZgheotH3guedjceGVy2wioUFgFCgqut3JCncZ2WjRRiM69va",
  "key22": "3weYhU54Wm6TSdPoLqYEs3rsao6VbTrvnncScTppU8jcgV9bjYXzLprHWfn1fX8zyBAdtMKEMrbuUNG7jefvoiCe",
  "key23": "47aJ8rphYVE79RvwLTE2a7SaC65FHpEbf6C6tzR7M31uQFqhTARwCmRSQqBQcere5PNcA2bjM5JSTuwW1eK949iW",
  "key24": "4FvGsUmyHJNjx9VEScdRhVZ9Gd2xUhkAy559Nirotd8vuGzXoUKzXvJ7RzbG4rFVcMdwtksJGQ4aWe6Wpyn6SRFB",
  "key25": "2FWiTaGVFqxBNJYmC5CzGt4AWEPGTWqY3HmyMLjqzLBaj9K93HzppHBABWVvpUrRVBABpfdzhfgAJwbK1HdZcBwa",
  "key26": "5Q2JQnq8D5nzDKSak31d6VS7LpuPpUHVbANVciGadbXKSbBoqzgEQdMeW21AJjc4hgmyVXcK9xy4AgNZt1H4JXzL",
  "key27": "9QEAhh8CmgchwUL3WqbwTTutBDjb522mZFR14YkubXJw1YFpaHSw9uJrDanbJ346St9g6W1oSfrjCn3FVQQJ9eB",
  "key28": "4bhjxfnXHo3EeEfjjPHN4ZijNeyST43vtkMYoJm8zuyQtgvpgyW7MYRrFvzdz42AGFP7CRFzzGCMSPaoBfmftoc7",
  "key29": "36EQCNLgWU7A6acxJoSfST7YLFQqKJ316o57NmUwCfBV4FquY6tGax4yra8wxAA8ZusFSC9g51P2EHMzjkqpSwYx",
  "key30": "2kVZRHpUsPYWbDbJd1KPFzxggUJqHvqeyEqaNaPkEFiJz1X76CFXRf5tcUDMwm47vKRez9YEiZBxUSu8cp95eheN",
  "key31": "JB9djNLuPRhfVUA4iGQEjAHXgScXfZVRv7xENyT5bKBamJgivLUy9iBQsmFU2GELHpKJbZggi5KzJJi6n1jmSh8",
  "key32": "3yHVDvWMFqfpCLouG445qCn9j6kECPknAo77Ticc2ixf4fbZM1pikypwdNLvFLKctmmksyMPZPLnUozSK9HaSArz",
  "key33": "GF4TM17FzUite6S7HuBmEAxLpMudXJbBhM1Bz69THAnmTEZJk5pWWaCTB6MoapMjNPBPJzKCn5k99fXbMVgdqCQ",
  "key34": "31JJVZFobbTM9X8Ssu9dX4vY5skLs9f1Lqtw8t22aK4MKwR3r2geDx7XMjdYzAyijJaWWjQEQ8Y5jJEL72AgsdHE",
  "key35": "2mEoJe92CTzp4SwLe3xbpdqJQihPUFi1D7tfhjc4HTL28QXX1T78TFQeQYMhUE19mizjLm9vNne2KJjeRYnoPE5C",
  "key36": "3QdMoCC1kuCKfEFpE1ew6tfbTX7cTeJ3g5ST3d4aSoN19mdqQtW3Sa8yfk7VtzB4VddPSgvjyWwxu6dTET84Mb2X",
  "key37": "61CM89xJRt4WtueL1SauErLfPCdTKxcDVnTCJCWcanDKJBphzMhPeVxjJKADUQ8Qm8RWqfY834bC4n8LwXVtERX",
  "key38": "5vvQxNQmco5n4bjkQXsmxzkAqYqh3EujKVvGGjiMg1omPgaTrBvoPfTnReh5PyQsTpj71mXZ5dNubEVMeBX8VKTC",
  "key39": "2pWoq8KJiDYGLdGeHr1XXmW8J6dcSnDZbc7mh3C2JmmCCsk3XZhSCNCt1DzBwbdLNKWUavwJ4KrXi4xDBnHvN2fq",
  "key40": "4yBoCcDkCbrF87z9r9M7RT5TkZ8WbH7zVyipeYfkY5PjbD8xZYGFVELLSQZUbfK77EFUyxQ224oAcdshdrYD9a8U",
  "key41": "jGv9nvHLJ8QH4fWeaQ5Ef1R78K8yo3T7oBoEVjKB6R1nzadPQL85opyxPhJjGcQ5DbBUT7eH4nHyLVtgk3Gnbp1",
  "key42": "3NBbGJ4peShFsvKc3WP1aGhH5xgqjy2xB6nZwM2QqYvBWPTRJZNqwQfSwBPSiVvxjhTbTkcCbwvJKrRznsL6iRfW",
  "key43": "5Ydo7BWrTi828E48fscJiemkG4pNBciWQiKf4zk8X84BTLyRtHUypw7Tga8hxUkKCVM3o6XZCEDzG4VNWjF3u84E",
  "key44": "3U9S5FnsGujtmw9DQrEGkr1DL78qynaFuudpjcAjEaGn3Mjufm8HC5Ub3zChn3jdjDRBd7GjkicpmmyyBNHSy4n9",
  "key45": "5V64uZovNiAYJHpZfeM86HpVkrBxSoy92VVAMXdHyw5FtQ7XrNTejeDiJ7pgtAevFq1D1Ft3i534icF5Kxv4KRWr"
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
