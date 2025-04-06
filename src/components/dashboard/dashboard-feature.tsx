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
    "r99bh1rgwHNJVqPiyqbGAnZpGsc4DPKSTtda7uJ5nezYjTW4JWTdMByMfb7FMM85wsQSKsgjmmZWYcGeYLbdpaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "axRXFRWbfShujkxwaey4yhpr6W3ww6TVjVeENzW7VS3gbrTk88FuN9b25HE9GckjxVNBzeEN3NZfz5ySVf2trZ9",
  "key1": "5osVPg21CLCRGaTW7ixkL3rU9pzNTPSzwWUvjQH9Qh9ShNh7igTqwcwSbWkwVnvQZX9x4Lx27qxEfgJj7sYu4Az9",
  "key2": "2BgACFhZLMXdiTcn61nsvbWVMK2tsMCibTGGupVJ5MViH355U86ivmff6eyrbPGLe51Bzoq97DjjKXiXu2firEr8",
  "key3": "2HKz4CQBgdwDqGyEg8PuBdYYw2H8V8CeDCCXPW5HgN15WjxKHZMt9hNrGF6sKYixyLFPUhb3gj8xJ8ondR5yDryt",
  "key4": "52ycpB6rdtY88w5Gqt8Meedthz5w3rGdSqB1p5H7SK3XZw3vbgsvH6H8mp3h2LxFmyqgEfTA4pRTG1aCjbUsAGw",
  "key5": "MWBxc9iYzZLdu5wXNPc2HHYEUo54u6GFAYbdVWcCSotgGXcfftPLKeDaZGDC8cP9MyyxxeueVXKnUWAknSiPBir",
  "key6": "5kmiXs4ffeHJxk5CAtT43r1fd2c5pgD2y5juZmrPx8TVB6LKgAeExyLbSChS1Gw78FxYidVv6Hn9YKTUUBM1KDpJ",
  "key7": "5iBgUj62Z9nVhzcEcKbwvr5D8oZqjyAmK51xh3n5wrhcyXYghhewatcAPG7ADqavZU1W6G8KxDt5WHFuau4agaVS",
  "key8": "4h7h7aA962WhLem6dGrSGkKRV26z58sgzGHPPoXCM9MNuVk7LuBmFXptZvFGwdoEFBqzYMV4pFcxr3mWKtEPPPiS",
  "key9": "5Ctm6pRTNfg86qjA3TKsbNqzaT6wAftg28GdEEAUxfHcshpMaav4ghWYX3kB5ZAJUsQG2Tszn6Hc9wge2mbA7FAJ",
  "key10": "5LoPr92i93WUfv5Vr5iZaCtptZjo4aHKV5P1WPC9ENhpBKkP2BVXBkPNLbjRE91kdVrfB8bym6sYZhW2D4og3N3i",
  "key11": "36E6zHaYcC2cV7seyohs4RLsjPBuQgwFVo22wh9SgPm3ZtXeW7kGvU9f5eTVRvm8M9v4MX9zCqCoQHwSmBKARc3D",
  "key12": "3sTru9wyUwXPGHP5QhuoQf1DN3TWhDkz5qq4R49rkc2NGGE4MfWDwE6YhQcNjJgdnx2ANyEwVPXtQs3wcRUZz9AG",
  "key13": "51s3MdpCj5LGeduw3nB4s9i2eYsP9GxVgnLWgMsxkmx7ExAmzjwXNKJL9iCWsjUktGh5i1tTR9KUsLmK6CJJVyZ8",
  "key14": "27apMijJNwNLkJU9M7ixENyTtF5nSFzkpHaevXX5u2Ummgur3z8STBfVipXHh4tLJCh9uZ8QMdTBFVgkpHQAKLDW",
  "key15": "5bbtB3ULPxGK79HZKVF1rCh7b5HtqhpHHFTzZyJBMBrPpKuJFCmx5ZnR42h1Wf1EDaGpw2RqQr4sb95umnAbKXvX",
  "key16": "5dKGZuQ4PrbH6q9CzAVxSdigU3Bdz4UnGtgg4tYxHTbK396zAmjT3ZLYYcEHWTutmgN8zd7fbJvWX3iw73DB6Lyh",
  "key17": "XFAh8ExqMQJpnZ5mfmrfhprxMy4zQUmHAU7za7zCpgMLE9pM7qzgnTLu28dn4cpqnakRbETcxPtZfPymr9Em9aX",
  "key18": "5srTaEL1JnLKFGU9GkjhwPkJQQqkmpaYqEbGnR1qZyk8jdK7bgBQ4TSc1SFy8R89HnQwYt6WCqfV2UE7Wuvtp7cL",
  "key19": "3CGpo3KeF7GLe6tVK27Zb13WL4dBGm5nxvp8bJKkUAPhkPnVas3x1hv1bQ3yFRXyv22mxezrYahAsbSmyL2epUV2",
  "key20": "41LwtkzB1BT1w6AR7KAPQUijYrDx8qxEq8ZZGqHsMhP9qBkVKwTftiPnqFa3mpoVebrcq8aACGVLPPBsuYnBTWFi",
  "key21": "2jUzfTu6f2yzeygvgiyqDTTxH9iWsGZqZjEeRqn8ni5NtR7nagLwZvU9aZPBCEq57zKRibuDPtJY5sMRs4HYUqg7",
  "key22": "35E1Pz2R4LFqKu8tJeRxnzfEpKn4UtifZJWQNtjPPmZJBYCddmUcNma4ZSPL8uzqXcBXgpNt2jjsDwHHXYrg7gyb",
  "key23": "3UrmiwDznW8Xfa9n95TWMH8e3sJqpuMFaVijYwBcpwcVt5mpLqWurGBE9mZRH1yEx8FqPaFpiBJBWhPaSihfHGsC",
  "key24": "2dc2R66dQoqM9Y4L4aB36YZV89guaKpx584nDN2JRzN3WMDsHzKZxhunJonXDkGKieUUtUtWFjuiPcXJwjfWiKAW",
  "key25": "5zJuzZmjiZ9xvt69yEMnfVbMVySMxtRu4nRaX27BbVdnT39XmeK8yDdT5CNEUrZL7Jx1ykhYFeVbTPcjDgNHNNdn"
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
