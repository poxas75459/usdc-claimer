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
    "45ytBpVDwXekreKpGCFrU8dcDAfv8hNYiTyuADFhLjqZorYqTbH19sc53F3qGAPWFYz74NDk4jYTqsbLtS12JXCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jtfgz5TAobxMtmyuYiWGTRmyn6RBMs8h8SJCLsQDWQC12HJcbFhh81Jjx4ifue8GfLqHZfgKx4Qw43Jq7R5V5oU",
  "key1": "BThjzpT2HKvuyTc37fdHBgG7JvNngaKEWxvFq8PZMGWASqUBPMKqR3thbJW2zAquyoeaAETSH8chrHUAHCjq3LY",
  "key2": "DSL1wZBQNAX11Z41x3zuDicjKCFEN3NhJp2kaTi5dirvaehbMjtSVRcHiDnJJcpKLuikeNjouhByyTGhMUmgpEY",
  "key3": "32ngdCf2WmeRrABfYe7ji6KYGGjiJ5s4eU8Ds3Cb9zgqdMCBpgKbkEYK65YtBgFVb8Q5FK67zD66mgvkpT8NWeeG",
  "key4": "4WKBUVwuYT6MrVpzEpBNZYfDQF5yRh4snrvY5ouyXdDvyBBKDHAoG67qdgjuydtS5pHGiTfSQa3MvWdJwXHUc9cK",
  "key5": "3r8WLFD5aXS3Fok4jfEMSj1eGbaJXf3AK3aKdcXvJGbMRa8xxzc8GnLFF8ps7AWkpqRtbWnbdbvDcyRR7rggS6Wj",
  "key6": "5whU4dvCGcPFnuFyjRsuRg72gnRW4jiHyAkqr3Njyh7QwzAb9VRfDjQ8NJyjUfZkhKuQNfncLJRgzbuonw8LveeN",
  "key7": "25XHqLy18J8Edyhghsw7vHK5Wh2aa3D2zWkvDgDGx3hsXaUXqqV934W71yhhMmBawcxLKS6ukZKTvmnVGRsDjnE6",
  "key8": "4UUjaHkG4LF5hiLQU6fbmg8WDGqcdvZudDo8v43ENjfYBXRVRkERdpc72KdXvHzzGt3ZkNf4N1kawHGa4FxPXVFe",
  "key9": "4ftQY5YB4kcb44UVTSrkRiNumMnrbwXeS8jZXg4LPcSimgrhzqBjFM5zjQtBXCh7bY5bPNqoCxChmQ1tjXtpSPEn",
  "key10": "5YbWUj7ipk4nzfnVB82BHGfmFcbJhLGKCXEGx6QCBGD6dVzFNeYJabS8v8myHSmhkrF2gyTf8S4qYTHD68ugwtZJ",
  "key11": "4LGiqboD3pvNCVEWct8vRrsLWjsq4HyH8HxzS8Kg29x23LU1UW65nq8hVQL5ydq6eWHXeihzmf6a7sN3bHSZXNDW",
  "key12": "5n4pKh5s1CDFmNC37MUmH2uUt1SvvZCy33AXRjUw8d3UfaGmsPy26NaBLg4L7ZuzrXHRyNCajzwcN3uv3nSpLkyD",
  "key13": "5jX7Dy3nsXsNDN4BjpSL82rBwti5rLCXcg9AbKHGMRz28KAvMA7cA8Cs4SyYaFDjJdjk6c3kA77uLNkcsyh9iPDy",
  "key14": "eLs6pVXQRNyAApwpocstqrDbMSJoiNF2tq96ZaPFwEDPu9VPmQhXH5HFa73nt2aD69TE3RqbHG8V8yZgZBsvy54",
  "key15": "xuLe7ZoPx8wnzSHJWU7UFxQXqfmWdQjwxQaXzXQd7nyzpQfQeeEQCrRpdNWTnwyqq5uFYLJnJaZAV928AwVR5Bm",
  "key16": "2j8zRb1oGMFEfgEX4KeYkJXuTDGoqH1MUh8oXYZtb47t24fbM3gQwJh3mZ5hMNJmSoLjnbCfXfgpz5miohLb2yBb",
  "key17": "3tmmFuJ7FvqCrEJFngCvWX9c2DcBdcrqDcSD8wsfNk1SvVjUvFs2Mt8Ln8h7KZkXrjE7LeppVxn41juhfBCdwztd",
  "key18": "bHAkhrwCguTrEmSeRQWb36V2jbHvfCLDGNUCcBCdvWQYVfNQwujUTtzshovPrqLCxLN8MgWmgfV4qenMVpMtyhQ",
  "key19": "259qJVqAsQJ392EkCGUvu2tYBjwDCDE5cGdnYDMQ74CykTzWM3gMk2DDTE6w1B4EZ3YWXSQniMUC5WVHseJPTstx",
  "key20": "4RKNR9yv28CjcsoEs5Bq9UPJfZPq2hpwGcqefgThJCPxbXrCUitRsHXPDjKUTEqpD5Rso9j2XkDanoZtR3AqCeAu",
  "key21": "5UWuUmivDf9fUeZQLxKBzHX5uLqdFkpWiAyEPMyejcesgXfS6TKfHHzetyuARGNpME7D5yKhqzK76g13L8v1MUD",
  "key22": "2aaQiiyhaoBVW65A1En4hxriXN8WkYRqo4KcxkfRLuj7yaaRc193g9WpnPWMfmzQfe1CSmkz3sAWRBuuKvmzhdDZ",
  "key23": "5W1RzqFyBycfEK6438nySrT8rmmFGU1s6qgVpZjzRAZP2aEXPuiiBKpvrMfH24v9L3FbxmBdmEov9M2m2oesrJCn",
  "key24": "58uQbaSPmjtfsFoga5Hfu8jLXab4oCjvEJ2E6mXzEZYG4cYees7WjZLhwsMHUEaLx85k5twPE4JbNrsF3bdVeM77",
  "key25": "jJXvMP4MuirYEhT2HFetyPb3QYqMm3Uj2TJe3UL6tUx5xTZ9zafasLxoadTw2DzdMkQkCcTiXbcR7CfSHYwZMYt",
  "key26": "4GdsBUNLzvKdJP5HYpyRaTgncctQxJcA8jpWSviKZmbAAEmLEKJpPGyihDa5Bhn3wXkbFe2uBdhcy6VF8QU3Btxy",
  "key27": "Tha2ZCASynFbJai1fv7zd71HyqgVY6KCpJnGPzXt4hevBKCXsqQhuhCNbevrwa6LqK6GAqu2aoJZXkxdkEeYDJu",
  "key28": "3CvRkUgaKNnzfSi87AniqAMs3MPLMJvx2BviWfwKoWFwpu19pQMXaJsGo6LmrNQCkmD5JnYXZsoXnQVJzjHNza4J",
  "key29": "54P7RRte5g3rkfCs46p4mDhZN4JYTsLohtMNYx751CEgqm3BhU7X54xyFa6C3NYAk4fnc9SjxStzBcEqg8vqvAg6",
  "key30": "4TrP2y3ZZF3Lt4yedUsMvA19zS1Jxy9RLseE6dQybsshK3Px6RU1pUddcWk2EhCPvYSreHJ6RZtrPVFsvTJCU7RR",
  "key31": "4f5Z7ugv2tdb2zvJEv3zSfwRX6CSx2uRb698jsLb8AowxzkoGZ9DwTSzB8nTUmqpuNSkUEqVagYXnNUbZVNwtq9H",
  "key32": "511An8MEeBFD6Anu7XEoYocDaZLS9B31E9G9xyMGSximJYY9aZB8mZucN2UNothV4jiyfauuA88xdPH2K75Jq6te",
  "key33": "5VkmVY2WtkoNiQeRPKJ7yi3h5mUqpcV4U8aukvxwrq9vSUSTYK4gqAZXjJREWgfFeY9bMEpgne8xi9GK7R98s3QN",
  "key34": "msF1ksyWdPPzB5MXjeL59UnrqSok9ZTFyvUvGM8xBKwF5WMjMH4iAt3UarBxw7ReU8e5oxDbuDuDMXK9CcQ54Xm",
  "key35": "4Gae4E4Pji45tZKmPYMmPAJRYbF8tVZuR5TTF5i2XiLNj9oBu48V2EW6msD7VtoRFYw4bbseyNwcicw6n1JeiC8T",
  "key36": "XzWhdpGnXMSwRzYxLHGfXJdmVHruFBhG29c4LCNSLKHpVihevFBMHAp1rzgiMTKPPLnMannhbo2SVk3JeXWEvSa",
  "key37": "2SYbcVeevKfPAUPZKrwkQMv4PyMjNDScmvdoJfPkeB8Psf2nVe5KwGFgjJ51xCgKxCBbvDudt6xSuEn8me37PTBk",
  "key38": "4hQ24h7qL93hkAmxVZftBwXa3Wkh4PeL8JefGqMp2U4rodtiZpmJ1Awxys43xG2uo1vrQYSgVtLzJTNj7Ufuhv5i",
  "key39": "kqKsV9P1kamo5yii1invwprCz4my4cPwKQquxYv5dyBpqfsayximn1j5rSKUvsCeT1HnXPopfA8RcHmYZH8G8MH",
  "key40": "EEpbxuGKqd3Y58JHkhNEKNA2pUKDjYKgAgdugXciypLnLPt5uDFipM8UFRSxLxDCNpRMyWwonUM9uBAX8ui4YVw",
  "key41": "2WWsxRmE5aBiRhLTexyZZhPnaqnf3931tVe2fT7eEsv9k7nSDp7M7TjkPXBVJRabbcLXBdt26JBawNM2Fx1UzXsR",
  "key42": "B94DkvHk7M2a5SHppdMN7GMj8z5iT1d3TS45BvkRdzEsT8s74RYa8y8U7kTeZVu2oFQ1haozAV9sSMcKq2mzqHu",
  "key43": "DkppKrRrMK4nATQY9B5NdqiYuv27MxPf26zxR3EJKWXmuzfpsMFrFNqRWoLsykvczkNU2SEF1SLgQbYK8L9FUzg",
  "key44": "4kYRt3cAnCaLQhdXGHJhJV5gmN8vUg2K3QqoRmB9yfrTd8tRCGUJBdNtuZtyvXiEGMjBZj4gmSQPf6UPPKAXJ31w",
  "key45": "5yBFZEkfyxbociKrQZVLfRPWR8Day7sCYDKzjjUNx5PDvk9Q4D8bSXRxfF1PT7nHvwdP7JwN4hpmzw2C1Pbcqhgj",
  "key46": "2j2TMhAGk5nBxC4q7tCEdfvuYSuZzmPDzoCm6sasSNufko9dmZBHLA1TA8Ur2jY7ZC8BWmDTHTdDyC5N323qfdRi",
  "key47": "2ySQkdksorg8YLxBUJ1Ji6yQNcQGgEZrfskL68CCSGU26TCABPxHGjv7REX2hd2wwg7eZGZ48wMmFczsA3i1yQP3",
  "key48": "2tokcRLscJ6VXM48FtwnPZPf6847BKfdouHMVm9dzg3aFdkW5JEd537Qz81AGThiDV9bAnmJF92c3axH8RBYpZq2",
  "key49": "127B4cujy2zm6869NfzqNh8aXQHmZ8NME9Lp6k3r2g7nN6eZik9FjMu92n1e5DDCxXDbwiR3NaZsUavHawW2frkZ"
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
