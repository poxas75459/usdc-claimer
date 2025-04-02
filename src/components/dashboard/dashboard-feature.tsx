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
    "6424HAq2QDYfD6zEqT68zDsJqkeE7JPYBmmxF4TUcCDgGH6ToPnAiUXHzrtHbuYpFK3zfvRzdb8ZSf167NBvP1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46oMywripx8Sue8HNe4CzR74bHKDznm5LqjgMmXJDbx2NxB8ReExJzsU17ci8jta1pQHsp5HaJYd7H27tdixHoa9",
  "key1": "4C9im1HqGrc5T99eBedxQ1xpztGroUXKJ9b9a64PXbvrWzKvyfSzZHe8VP74f1F3XwZLn4QLb1qZ2A8B1GZ9CZEb",
  "key2": "3vAXRE8hSozw9Yn1KSD8Qcm6fT65uZU7w6b9oZkBw57YoLusDmf82KhNFNTJuApeXqftqahC3UT2qBUy626v2ujE",
  "key3": "5uo8sTuTUDq11UKVSDQ4hayWpa5vYXGoerRBCgUscVPfg9HRrVtiZebwwFeYfv7kNtvQQRnpNFq1DGLtoBVAKV2p",
  "key4": "5uAbhUf8xSiy2VKFRVnPwGunWLU8Ny6TKfYvzVk8YU4u5iT1LFadnVqmALYgHm8mfReY4UYfTagSKixQs2wo7hXW",
  "key5": "3PGxLH11nw6WTnmU7VJy3Njx71vVzwyGy6se4EPPJvn8PZV8B2NBUN2B7K1GSCPKptYpvEM9W58FXjh2bMLchXRi",
  "key6": "3kWvVcJ25crHSJM4Pk1T3VQXfQSPwyq5BPoarHVcdLhLYKAWNoFNTzNGCTHTjXjLdU71amY8eHREwkG45BHi6gYE",
  "key7": "8pmnRCCFnn4UV9KEb8SgCfBh41rjXFroCDqmTvBN6KWsgmj6UmAQhjKABxJU621Z9hvJGYQSwvtGgu9zLifk9md",
  "key8": "vML3bc2CXvpVaPpWrEN1qpBV7RYa7DxKdQXABf4uwoSUTyuoRDTgaGPt4K7vbxxPpke7QHkYvmTRjjp3WrbgWfP",
  "key9": "UZ9u6zq1WCJLb28jm28uoAoiLTdPN6GbiALFSJHVtMVXXFJjMKaJQMdc85mQMKJzB2SggnbPPDh5v3unN6kpuZE",
  "key10": "36DWeD6nZDGM4fvBdzrHwczzAV1u6oWiA1ZMEMoy1Roo9iBkABuBwViaa74and18P4s87mvFjLL7EMFz26ypcLu9",
  "key11": "2SjXFzjxcdjkkW1iGCqrHgeiHGwWYoMVkWt8K7UAYi6wNav6r6uQHKtnJg4YRZX4uvm63u1xVzHqgb49LR9TX44b",
  "key12": "aA9yffbdojKQBLUFwRTxM1XHWdGEKduBV8uhXw3ntGvv9aWC875wCssE9x8XoULp8NUShBb8oLFJcHUXYN5Rwuj",
  "key13": "B9abLoJzW3KnAF9rmmwg2rexxM7peSe9MNG1R7RhoRgcqcw2T7nrGzSpa8iFr6myUMPATGbUCRQ33yVt46mkSdy",
  "key14": "5oNENUgn44MGb2Tr6vXRioH9mQ9HeNTXB18BBiRc94scHKrNoKnQYEuARrV4TboxzLErTC32yunZfhsw1HwDEApV",
  "key15": "9gWcDydc2J8scHbRgtcjrdENb7BWn95aRQtqtTcAfZmvWodrWaBpnDkHKBx7wN7HNJHnwhXVEGFCdSUcrNh4QCd",
  "key16": "46JEkZsAWNcW3mV4etC97nMdt7XkTRc4o2R5qiMWQbNEo6ocxsH6aMXsGx4vVZdmFpWkyd8cHDsSfojMSupZd1aj",
  "key17": "2CLn5uCfQWuueCxAPPD7t3ZTCXnmKQuHBory8Gay4iAim65DxsNhwbx4Ti1axgbGCBHyBKw21qkezpM6H91oThMR",
  "key18": "3kxGwxtcJqKmXBPRafqTdAv8yDGKmGor4L8HnYGcvL9BPdAbRRKdmRKVT9gfXC9DArY4cwudJ5yQZ61yM2qQofNG",
  "key19": "5m7tR5zUPx71tMDTXap3dCDvTxzzWErzquGVJfEg1nFjesgQrmayBtCt1mxukcZiptfhyhUencASg5jAMNDJigEt",
  "key20": "z8Froz2n3HgxfHtX252C6pgmy5ewGCj3SoUDEW24tuecmyxDgXAm6yt8z7zMVrjToiALtiosiCBP1jq9A3obLKg",
  "key21": "RCuTttKxzLRj4HK2oxe5Y1gHNfV45qscPX69NyHBKiyo4MyzqbpEhsxkPFZT7AN1EXjk5sAZEyYcFokGEufBT3d",
  "key22": "3SVhpKnGekBbvTgwHXsCqZb4wmFfdJHcFbtgWCap1D3qRWKVMP5i8oLM6wExDiTQ3vk8uUfdL7mY8DCXW5sEYAQD",
  "key23": "66aYDjJ7ECx6jyAWFcKCWcPebRVTbcahK6uufWLsYL7vKoq2CjWbmoBFniRXktuiXytVs9GS8v5ZKVv938MLQ7PS",
  "key24": "3gCDyknrzLKXhRWQHffKe7pWWV2eCG7sfjMe5KF4LvfXmgaNjeLT5rgV4Jhjh6RxWYZhcdJjxM1oW67tnuXLkkVG",
  "key25": "5PoXWKVvf5TA1BKfWyL1fnpw1ZFACouoUkxe3gVHMgaADkocZGA1yF9RRiRnNVzt5Kiagi1iuyog7CnJL8HCp2h2",
  "key26": "2rbpyELEsA5EbaeoX31hCn2nqMMPvH8QhEug7wcbGNjxQdGchYWavofsJqqqzpPnvE4V6CB3jbEiaLe1nj8icMWj",
  "key27": "3byCjTMB4HUx6dqRKp9pNFeMH2Gkq7CuExcUphREwgQX48p1buiPYE1eurpmvNJgq3du1hV2CCKV6CA24sNaNsoD",
  "key28": "3efQj9iMMDoiHGaLeN8FHBCoWp1XRQnd3k1CjnnDk6PdSWH45RuggwV86hig6rNA3oi6XQZwXKSgXWiS2VmnkD6H",
  "key29": "5oB3HkAMEpkPUpCZJNc31HcGCysDgQhxqsvAV9yjrmoexsNahEJnNVMbcPi4DdQQGtaYsiUxqm588xwiDqHfCpGg",
  "key30": "5WtnrmCpjbUdwnMeaWwAb8yoL4prUrbnQkT3V3pndZ5329H48W4cXK1JzUghALKH8LC7CoPK56rNHewcVQyxPAFs",
  "key31": "4FAYHwT8Tj5o6RWVNJq3vGiyCKCZKA8UadxhST1uNJ8rX7DnizUbnJd6E7wb7Brv6jfF4dz4DfVrkS5ThEQB7JDd",
  "key32": "5KzgsoRd4aA5e1pPRFMaDer62titpwdZLZuiQP7S4fhX9Grp4KR2h3JS5F57kDMhYoSRDWf6B7ihTYfKaiiqJDhK",
  "key33": "5vX8Sdeo4JSRModi5BuN7Sgpf7eZvkY5cqLZZkAVLt3aHPtsfLMEsMbYWVYbYWftwqpT1UiHVFjq1Xoq4YoWMVcu",
  "key34": "2G4vyj1rmSmc7GgozXm8Lcsu1oCEmUGbKs46DLYo84j4J87qen8LAfGXzqeC7Bms6nkxf3pyQZ1s5XH9jdnVKNLu",
  "key35": "hzxm61sv5tFuqz4whfGMpCW6crJ8n9N7QaAhFE2ReGZWzbEedvx4BWbgKXJHTX2cdoxAQvtEEhch9vqFMecm6Nq",
  "key36": "4vrhrFvuP2J6GDW6NpJZ1sDhtCA4X2sEk5PVyYhJxkECCD7ABEeKnJF1HNNLnfzCgWBjPVHchFeDe1haa6UinREu",
  "key37": "4DtUVoVcVW1FxTpvjHUV6agFnLEHBtAMaVqoKtPn9M1oDFi4ERS3qehRvs1GrAVuYiYgzyN7afsTVxrgFKPZokko",
  "key38": "paiNmhMA1mR6ALP1aqWSxPnsNdUqsvdkpe5sm9uHyBm5oi38iV6TxMYEoySbQ4BgdAc3jiDHtziKQ3kCQsMsbPa",
  "key39": "55L8Yvc6abRD6jUmcc3xzxSis2strjKvcJkYowWfs84o76DdXVhZNmojKBRghtfpydrNgVXogJQ5yGRYvahp13gf",
  "key40": "2paWLtVeZTgH9f8Kwqbog15RVvTBXPFjgm8zeStJj624BZ7XegRYuCG4L7LuPC7VdNaRamkssmJBsFRPAib5hvLg",
  "key41": "3CqjxqNXScAXtb9i8Et5EkHFRoBbGdTCDVzs31j77YCU9KHyWnTsDsJKrHhTe6RKFniHeC9aeQN6BanhoFhAR8tG",
  "key42": "RVUN7H5jC2uK29dWyHpntZxsifUyZ4B3dTWc1QT9gQLLdc1B248hcLeerXQ6PcVdKc9X1D4jAWMCtKxc3vTNMCi",
  "key43": "41WGxWnus2xLvtM4ommKXoRFfr2PJjuPQbDYfiY9b7V6YEmxiAhhYVYpwC41LuvVxfL4mtGPmWXXkGwNe6VKh3uo",
  "key44": "3veTzFHHFH5iyQGSyDMnZ9ECjT5c6dPWHZcYUGvH78PBbGdTeU7oGjaLwF67kvSTYQyNcgdeGLb9tqTiHTBc5GTb"
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
