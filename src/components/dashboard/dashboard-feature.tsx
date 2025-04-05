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
    "2eyQEY17nKaMSALf7TYccJxreU4o2YhTf8QiJVRpFCxFgC3TPbbmGDaCNirth5meDrZwnQdLtqdmjkfxAKzAcrBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KdCn4zAS5ErwDR9A5Jhx8sFL6h3w2EUm8ycCHPjSEhyRRqpyJEAUCgbn6eU7iZBgYnJrB9bZBJBHGVD3ypobMsN",
  "key1": "yV73TW8VgMZUYUDWwNSp9iFbSfRBbMJfGDoV35xQgeQhUNyP3f2aG5cRu8YZovPh3cpcmgqGVUhctpQJQ3cxWoH",
  "key2": "3RuhdW6oVPh8jEmQ28RXKpgY6R6FMe5yEKzEk8KQhZcqyzK15x5zkZwQ1dWhe8Rv2EbiBySXRzM88UdDVDR28gJH",
  "key3": "4Vq1fcWLHmmJmcZ7qghkJR23NqG1twAUQGFWx5q5ZYc7pDdx4dnCvxNU9BB5Xs66WShHawnmo9wxguiKS22tTJm3",
  "key4": "mgmsgWC3YjCrhGKvN4RksccWfqVR2XrPzQXujwTJSjV7owbUg5UAyGcipWAL2nfDZnNmqvf3XB35JaETiC4FoLr",
  "key5": "5xDxyYRKUq4zCvogYExomAtJP5dEJfDoayTbjNaiSvNgWcT6MyhMMNXvWmQSuPsrLaMRjgB3DKE6MJ4egrkqiEkX",
  "key6": "3aWU2nhGTDtePZ7V8Wpdjvy3WgtT7E79WQxZyqMwEVw1FzZrUn8pRG7V4HbiuivCrmrwizwVPV8rUYEZxE4iGL3z",
  "key7": "3tdCeR46QGXcTFpFyZxCUWw3H8kUBtSGMGiuuYNEcvTiTmeVaDL2aX5QHjBMPqyawC1eoRNXwum5XTBU47ySBCKf",
  "key8": "5BbNwMGRPCiGjC1XMTd7Eon36dga7PzLcowBuYe7fSSArGDVUyj4oLPDgrCA6Kx1ohf13RVBY6Ey8BNBNDmXNZDn",
  "key9": "qxa1ivBpkNJgFfDzuP6BPV3Gmd46JxkHiLuphUPTSC9UNABNSZymyJZgnotMpKvGYtkcTP3929ctyeSNHmhWjoG",
  "key10": "5vZ7CiBQeXPMBtvZ29EkSn3pNBZLycRtzSrQ4LSxMiPJ9FmZDFPrzmpKDBeuZxbdgLaRi2WhoRvb4XYaStvyvgYS",
  "key11": "35dmBLqvrXxyBDtXY39HpeNtrmHWU2kKnMPR7RwdzwFpXDimi7vioKSukRDzTrekWB7qwNm7rYTTkF29Jm7orEjW",
  "key12": "3GQNVf8FXw7W3uYUAKmWVerxyuEUtJeaMfMUjX8zfHo8fEEHP5YEZvXvtsoRCZLhznsFTrPHtEodd3887eczatdF",
  "key13": "2g2G9L8zQ4X5EyHWisuw4UXCeGiTLTUTChUMjteMxsZta7sBaQHYuAJ5LMGYaGWpKjBboPyvPHSyvwMH73k6nQTH",
  "key14": "5gPvMMHEueSas9efCqBadQJRAVrzS8dTNePWHZYVaetF8DFyn8GxJXzRBHMEZgVUDznyHXDqoPwR453oNxcBoHBD",
  "key15": "5SPtmdzZsJnXwLW9agi1RRib6wKey2s5abPAQQdrxe5p4sNxtiHEKVYQY1RBVvDXK7xoztvD64sz1WeYcUfiMkay",
  "key16": "29QRcdYjP2S9xupHhyuF3fK7Fbpu4gzpRuHUu54351EL6Zy3aMvrov5hDMvT3n1rYmPLgczojydDr5oWgAZsR8ZA",
  "key17": "2d4soQ4GG72FygMUT8uzyPGR8HevWmcXAFSXZzDnKHyVLzFBivkvajbrupsruU1bttunRcun9Z1kCabjJDirgoiB",
  "key18": "4sXgiLkLSBjNDFaLwwYJeMyC2CgW5C73MdKf8FkPjtHjC2CCkWDVsZDhZMJwpSaGSGHTh2NReMDXSYDw3bK3pBrP",
  "key19": "MM6dWP18Mzi69t7t22pmhvN2e2796fgRBCxpcwyMJhqggx16JXHpDFvaHKDEfdsDrzsn54fbym7T5c9NmecbgMb",
  "key20": "3dNcxbJJ3GyaMRAXLmSX8RGtgQVqEKXWawb855YU2RjVLsny9ds7Aq1LJXFiY4t3hKu1ps2yz4D3CtuBRQjGAGen",
  "key21": "4jegiTsAN2vFij8W95rd1bgGh6CUACtoU3zBNrsDUQosibA4osS7yyGApFNuw3J1KGiKpbEWCABxBwYkTBLxJtsH",
  "key22": "hoA5vu5hfWFtwkWGj8Gzpq3mqFCcZX3vsqnQ36nvspUvDQtvFZW8jF1gR3NJms6YRePoaGK2BcmmPdBEiMvHkuf",
  "key23": "4FX96gKccze3nkUXrwEQQrC3A7sKM5afTkpWYbPmvG1hxH9XoypxBgUQh16cTUvMxvhS96DzejkmsLZdjiPoc5Qg",
  "key24": "4f5BZSREtTK5jkDytxMHfNGzNhFDRQssid2WQtLhx44pMnaK18rdEqMydjhYTnGnVKukT1uKLcxoxRd6fgGDvSsw",
  "key25": "57gD37HriXVodtybezYPYyLGSA4avPQBhLY9ixAMLZSnWDBFLL7mDE2dtnpfEjE5z2k4Hp9rniQHztuHKeYXTAHA",
  "key26": "4V8pP2T3EGvnJky2kcdVEpuRwyU8qfuMf6E6DZQMgoJiagGpFfLgorjLXb6QWCshXbAQ1doxgPwG1FHpsiRbzXE3",
  "key27": "2vH3anKnsUeNVrYVf5KHKmEXB7DH4877gJWfycesDNrAcwqf8UdM33uzty1SgkTqEpp8mvx1AbEXAncKj69Xpt57",
  "key28": "2fLfyhLiRRAJWbwFnovnjVi8665KxLz2rrxE6euLg4Em44ToHtFKroZPV4WKMmoiMC57atrtFYUT8D5q2mDHQd6t",
  "key29": "5jkYxoiWkwuUzyTFXCmcsW6Fsaz2Hmp1AUDscrC47BPSqvMt5RYF4SUGj2AGRrSzUNvweyJsc417611KH74ZfmUk",
  "key30": "4jB4QVQfYe5U5LDfdYqy1oQVRffoaRAfEUNqnrGgGPyx8mkybUVnkwuJfKmLZtokCQnRSeZr1aBgQuNJZWPBu1zc",
  "key31": "52CsfD5pmxEnPtbSQDATSt8qfszmWrh8sXq6YnzYhLxcYoUzgiNkkcEzkPTorX75SqwV7BtZa3dudt3PRbUYfJSA",
  "key32": "3CWSmptmN1ExTx4NVVDiLGnoSzsgxjkCe5mGkH5Tn9pmjgdSupMGPwns7xpYcJNyDrcuBnrdThgFiX8iYSQV5ED8",
  "key33": "57g6rkMSuCKd4Gey4ajTxJGnBSyqRzhVCXJwJoidNE7RLHkGh2DhXg7r8Pm3kBb2rTaT7EzrwwesF9Eg6ssB6qKV"
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
