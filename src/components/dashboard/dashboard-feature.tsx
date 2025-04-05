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
    "3JMrm8d11pzMktRDpJCsj3eFoqSQVbZqxmR8PQox6YQQ8oqTVSd2gWdUvy1vTFs41NHCFnWdoHpj4SeWcZoSMS4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZUCHsmtBK3d1cMJJUamfZ91tSJbmBFfPig6wYuiFvKp3hKNbH8HgzUpUQHrEdfWbgcS4M24uqKZ1u4W5yyA2tvL",
  "key1": "5ppGw9pAzBudQsBSibXQWyZY243z972ruS6qi1XM7sYSTkXBvWry1w7E3TQujSTi7Vqf5rsQdnoNvNX7YHqt53cF",
  "key2": "QeE1HDgJCuaa4cUUnbj1RwZ2wWNH94VKbb879YM5oHrEU5mA84wsrLjLzyM18rxVva2Bb8W8koBzJp1szCUmjX2",
  "key3": "DXrA88iBFiEEDNKk8FJ83esBwQ7TrzzKkgSr2iDed92GNghTzaciE75eo2jNt29yHYv4NULLvQ7KKLr9g13tuwK",
  "key4": "4m7nLhNEevkL72GGhpaPXJ4RfagK4VgKdyt4rYD37PR9mQLxNLQP466eo83fb5so2C1smJBf36na3fABdvFsnJxh",
  "key5": "3ycLD4U5YMxKQaiFrgFixb1yHa22odJndL8m2yMFUyYhTcHjhKq4pvuXN8EUU5erLpfPWVL8HmvBWSFiuqXEqYkY",
  "key6": "5oS9CQKJjCZWUUqmHvSEnbTMoxYFoARzpnNzwqBJQrYLLfLQRHHAj5HBjpNoDZMZYgkFQiPbsiHcsB37szvmziHQ",
  "key7": "3wemx38VWgXd8uuzjx4ePWoEXzAiZFQzh2U8ChTar7oUJbkGLE5vW29d686BtgPKJgifUH7tDhTN5oaAWWrT8mLu",
  "key8": "QAVAbx8cgvq1uJFZ42fJNsPL5a5b2rygSxNziSADGWBapyWZLWhYE4wfCUgskDS5cevuKA5euoSi4Y3kswxy8UN",
  "key9": "5WL5biVF98sRGxxSD2CfCotEmAPgNd3vg2dBV1SvJjwo747fMkYs3qugzsygGS9QgW8pwydpdvxMRPwZtJ31cAnT",
  "key10": "5soDZZ9rJUut3o1Y3qUVtonHjypypZwfBxgd4L74Va1BZiezJPMbhW7mXPDLR52dAstf6xUDX8be4YkXxxCporte",
  "key11": "F7hcuSZ3Wa7xtELRxbSMCs2d8cJ4K8EhjewVw6JPEhT2Nn14iusAjpDDq6Q9MPqJzUcxB7F13A6RPe6kMxF9TiC",
  "key12": "2y31B1BmCA518vTy8ijMUPeLuQuAoqd3F3XoX2XitpjjWZdTuY2tgzNJGQmkANKutkLKc5A6Vgdovauwe784SgMb",
  "key13": "FxRUWLMBFddAZBzcHASfTjBGKJsRwhbmyRpYc4gAbiSaNqDYcDHzHmxMRmfddDjbvuWY1xp7Ze92opQkYm7Uesj",
  "key14": "uAPzvBAipw5TCPQcupXAuEkQzEnm2zRGTtuTk64GruqjUX91oVhQWHFR6oM13mXqYFQkbhgEfkoRNyaBTnWYMT6",
  "key15": "3EqndXZsCYyWd9C4QvRopjWwaz59PeTU6w7bpvPsDPBymhUTqhCri52EuJL9TXZMDxX3xLDxcE7e4XH7CFaFUxvV",
  "key16": "2kJfwaX469pBryhr4pBcmVLV22ERCDVfo2Bjqgf7kazMP83LhJhfC7mCUPSryy8aa2D1PEhAtiA97SZG6gozvGQf",
  "key17": "2MaujV5ZHWXvrH4uw9NqnbkSeLhmHSVDMsw6SEPwpL6EAmJ7qKREjosKLqWd4pTArMqRbJrXYX4M6HLPZLg8hMzP",
  "key18": "27ANejBKuZ1uaG7x5wC6gCVvVUm1aNHE1uthwRvoia9pbZRdVyxE9LAmqVesaP95vdptoNwhSwPQ8NdUdsYdN7CY",
  "key19": "ezMPrmKDap76nfE2wygAwGSCfL6LAeAn9zNjhoBoaekUtT5J2zBpGDPzE8LHyEJ2LgvdGXbL3mKiHS8YcGqBKHX",
  "key20": "2riJyERoE5CrMWVE7pd8Gk3ETpQSVJ8aYFNiJJK2KYityycn4tW6DiA37WwVMGGXH3n1bfwKcvPvyjTjtq87KDa7",
  "key21": "tBQcUoT3ZHBxp5BpJa3hk7GTDhPrG37vyMyRJKKZ46srj5UVLqsz4EMg8bHrJHtnLQb5j5Tbv4VMy4wWSYzv2sQ",
  "key22": "4piXoUtThzvRPPSfKeWyHUcNhQZAG1SrCmzAdp2zt6RhNdnA81JXAjWtDp436g7RjwXfcbjftMEAqduoyStXjnde",
  "key23": "4azcpDmahexEWGmhftmkZDv7DxVNiyXEGA4NSM9hx7rxzQkLf4LKuzRbU6nVdAJnXXhgHcv9iyjCwwBkQVG7uJoF",
  "key24": "54dUYoxaigcDUpDdsgCRxc9MGueDHBCAdtEhTB7aR6DPTPH5zhb9vypoZQ5paSejNgPgxxTqKz8iE4PG97Fi9AmX",
  "key25": "48X4GHibmm8fRTXgUY4JkaPaNdfjtoh42hLAix3LWuQEyG2SgNHTXDJMnoW91Z3agy3EGrLhzJ1oZVzDbFkXTDyw",
  "key26": "4qq6DBQD7ZsTxEVxQCfhtonLwUNoipjvALktRMZ2tGDo1JLnEnzJFCNNYzK6DBrwgLTbVaP2HJswMYuCay5ZXS2e",
  "key27": "47Gjw4VvEWwENmKW6ynGYk3pjnBoyZ1Nbo9KEct5hHhBryAgCmvQEsHbZyypiEBVXBfxGxiqPDrLuPH5o44AXUAb",
  "key28": "3FVzcYBbUgGRHXTcgnujCvzUpveeJA8U6Nwb1fRbEvRJr3rJ74WVh1QhcYbGENEUiWnV4PZfEQLYCTGsvQhUJ1UL",
  "key29": "46UgoWxWi9F7phvKhKFebw1msFamsXaUTcEQLzBykR45QPKvwV6Y6pDr43LBFhPf3BGawpoyEpZvAfvbxJ79k75q",
  "key30": "22sB2RCaWXwuTuBhF8Lhk68WxzAEGDazedCyHknhWbrHQduRsZXzSgL8fWcNxpDgpSTFAyyNJXmfBQLxePuXLJLu",
  "key31": "3j5SvykTF4bAa9egqpggBruwnb2ZPVa6Rtqswi9C8tYJ7mK2DiSehLagakhBiFKG6Eptv61ZgdLPx6yNDpinZYfr",
  "key32": "3xykUwYCz8xDAsA6ds5ppphkmMtSAZFiUzjMbCTuPQSAe9fknwhiNkvUxFi6vKQWuQLgETXa6o2gD95peK4SxiBn",
  "key33": "AJXbNdEq8ewntVD5L15avrH59RjFt7JgkDLUaka7rCWab454rCfSVQGLG73ZUTH2yRpET2quu9x2DVrgQZoLycD",
  "key34": "3KhCxtnvdRwHZy8FT8S83pskRa2ByXoKusCKxUTaQ3Zzhh15tvX9D4MtRBCNxghDaduRLZmn9Xq87qwpGPhJ3CFs",
  "key35": "273k69TPTthKDjXgYNtnurPvGmZTy4dSBYMDU4B9G7qoQ778uXqX55JmRRpVrH7hekw9USkjxkpudWesBVfDiCQ4",
  "key36": "5Dwc33UiwYhp7YczGsH84THpv4YHPGE9nb3rJZdygonbztJhAgwbmZsz9t6jZgCYhpbKPXdXw2MNGBG9BuuUiQYA",
  "key37": "XxVzk6VRG14MA3EbqD2iV56Wi7b7bqjjwAmSc4U1wvyfdBX3EMe3d6HMoFEh3TTdnRkX7QQQEkjWQPuvF6Q9w9H",
  "key38": "wMxE3U4Vh5dDeqbEDXcBLbDMToZbHQUWb5VqRGn9LAtMgqRksu5CyHtW3DjdQVTWKAXajhdxLwie18K6c5pi1W9",
  "key39": "G1Ru3Jb5eBhq7Wi4HmceuJS1kQg8H2rFipfhAPBXbKiy2aUgHSyhSV1yHUEw551jfhUseMY4vWNcSwftgrbzQdr",
  "key40": "4cUdu2x2TX9A4kGDe38BevXHKwEsjryAmmVjzdvtV6RWFJpjHbDme3zVnXzHJ5mcvHxV6CEaVbewPsipAoCEuRNR",
  "key41": "4TjH2Bx7MBRfbqh98ruEhRegkpGtEQVXJ41PR7V1qrTazcLAryVvnWkxw2mVXTveK8STpFf1dLyy3B4TcpNsoqHj",
  "key42": "2AoGr12rapPRXTupyNubykKLsrk71CUZDZHUdD3Ubhz4nHoE2Vb1XvcmmT3tLPrNZsVRDcBvZVPzvfNHRAWazqqR"
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
