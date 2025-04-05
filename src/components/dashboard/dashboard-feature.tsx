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
    "2VgBaqh71fX4DePcgadh2KvAdaTPEwjdTyx9ksb7c1MNoxHCJ7H6osCkaG9EoFrY7mfwbV1KceH1WGbjW5gE9F1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aWQrvxFBStMSdnftnUgw77nf1EtK7mgsp9fgCMpFmFrbeNKxyAkyRYcHzvHTQYV4RuHWs43nWcVrbwD1B2urPTk",
  "key1": "4dJCWAwqHYXVEccQvtTd4xE6HXqa7Lvs26cL6MMGk8huFqp6razqWXRAhtcKcYtbUAa6UXkQT2vZUN6mSt2UuHvx",
  "key2": "VRrKTxR2u5DRcPzZz9VmaLjedVNk2NDHrXbKxzxpfDQdsw5oPVqU5XD7zyZjWyizFgetizbysz4pXhPKWiM7BFZ",
  "key3": "3h6qaQ2jzzK6rK1Rvkz7cQhsrN86CrFwtjCMKZemFRENWZs668YwXtA3P4pmhZf7aZ2XdwXn7BbwSJDNwdKYuwDU",
  "key4": "3QnKWGHUuSJL9LMn3zBn4BW53ApsKc7uTSgR4JtsX18u5EVY5GQGcKjLiPg1YgyuxHMWnhhLxwVNwdCDmPyYhAX7",
  "key5": "3YS9UVRmiZQK9i7tQR9nfYKRr7m9os9uRUjDJMKnnZHEr3twrf5vWjM2a1dqLjigXkCN3LJGz8tZgE7XZxdX4Bhh",
  "key6": "2czezREye9qvRFJJ95BTjGqB4osNCky1rAgbcQz2TEKm3m25c37Sq8M2nmTG74h6pYE37vyC1okL5JUirL1tK5Kj",
  "key7": "3ugugVBbtG5dKMrUwMWxBfW4b64onbrFtNtT2MknRQUW63c4urC8WV32eZvzsVY4e5GzLdeEBsLG1JUrQoKcJqbq",
  "key8": "3NGDhD8A9QVPPxaEfmc1cXwcsVEgTjNhqjkmB7EVxkCq6adH3eGZzr126NPh1QSsVBUCSTFsdwMmj4eq69DR45xZ",
  "key9": "2BqaGWoR1ep6oQRQi1vBxc8UGeo8QH5d3BCBiGbqM66jSr16wQiksAfZvyuk4zS8NmyStKDs13mcJ6NeRsUVN3Pb",
  "key10": "4jF7xvpgDJP8tZF1advn6oTqmVy1fAVBKijeaxn83VHaVvMArQqgxZQ2L2m3NncCcFDktFz3rM53iVuYFPP5Pvv1",
  "key11": "4es1aEuSVBZgvRzhvcz8soexjFE79r3BXY49ABDGdVPpYkgsqRwUMfFEp69sTZauuPRPMQuif5CxxRmL475aF9n7",
  "key12": "5mYJY3GPmiA7zHXMaco8dQqjyWM7qrGyiRyrsXou5z7ESMRCkFCXY9RW9eiQsrMo3ShkrAdoHdLbxQRh1jFscHZw",
  "key13": "5BWviZT4vWuaeWFVY1inih6EXCPHXPdVKpRokBbqRMKm2ocbwE7oT9S8VB12ToqPPk61NpwxuqrQf2q3vNzm89JE",
  "key14": "4F6HBuPfyLL5txQHP3N8ZLtMmWG3z7MDRy63GiVrbeu4hTKYvNsPDskrmswXDKdiCRfGbjhk5WhtLX7CfpwwbQbD",
  "key15": "3tXqVGTyHKEoAGSwEjxKasaHMsugCDsTZhvkshvNoKGKR5xGx6gQEY6JFJTyaBvqRM3BQxGQTqbFWAoWaNu6M314",
  "key16": "5x7yAfFYeTGYQdmJ2PGtwcb85gkivLXMo9f9PXh9qHNa2YHn2sqKktrzipPvkMWpgmZyEXy4oCkN4coVFUDJV5r3",
  "key17": "2BEpHdBgEcH7ZJvVoHVsBSzAhTCexCtguH4dFKRwP1nCgZ5TbtYMvQ8MUdK37Mdx71cUiuWvGxspeKVpQ4kgMLtp",
  "key18": "61wVPmcsvJbLdiimByo3Pk3dYWiSjF1tyVe8GdLQMX8bFZpdc1pjMu2zq4KxFPP88wKePqgeoZ9upV1ArkGjCuY4",
  "key19": "35qW8xG2R613Mt3AuSuTD5o9sn1gA8xt8tjg7YqM2vHKEcsQjgFegLuLEf93vJjUaSxC92qEEBYCGjg6c56B7Dde",
  "key20": "4gxHdzEN7cvCejAmaXspDfoB7R5b5PhauRMsTXSMajweTsYUTshQMvjzXESWCvtL2KuUHroAkqYpVBwZnh6uLfC4",
  "key21": "44SXLKwmzz8Bzv8n6fTd65Vo4bZYkozwnteNa3rsqG7hxFtGqojjpBLjzA6kNDtWDJCDKhX6YhTSLynscbe4W3No",
  "key22": "2gjxapm8VbbTUYChki6tNqwnC2xQYZRiebQGvU3RgAGQ5H1493vt4vYQJmKeWd8urR1RLcmuTJaLWG2FqF3PwG8W",
  "key23": "3pTFCoyGwyVsV5MYH84YKFgQJ7DeLPpdE6SpZ2jjfR5GtszJZZ1neHAPNK43WaT1H2abQ9bE3JEZNwdecYRNJ52y",
  "key24": "1dULmyiqyZMsd5RKQhByuxctWPVVcfc8avEyj9wwFsPCBhS6n4CDav1QGS2BJgwnVciTtpvhd3TH8aq5ZRqDCPQ",
  "key25": "RAvTbanjbqYhc9pYaRjnd9fPFgXEt2JkFT1yq4c4FsM7xBNTKwE5nSFAHKyxi2vqVbitcq9CrWzvMhRVYXwEkw2",
  "key26": "3PEryLg2qYQ7oveVwpRqN4CL6CzEHxgDgKPTbf7FEuwLPhj58KZP3z4bTVH38sMtnoypWChfzYKMEVredMDTbsSV",
  "key27": "35MVAiK7TrbJgApM47F1kWx6tkvZSJEcfXHTv2UecQcBmoSieK5iXJjRCXqvGHygXMWjUxfKhLGKrqfwgGmhLCBX",
  "key28": "2wY6hd4mBgRpjWjH14pkZiy8apuUrekRFvfRG85Cy8cSsGpnf5bTDUaNAP3KqB1Fbe8XwxsTbmQKn9xzcBzbYjTv",
  "key29": "5hNGqPJUpPawfZjNpbsGoYF6xCWEkuCx4bw1x13A3TMFmoZknYV8StTA6xVF7Aj7BEZ3wX2CHvXT9TUXe5LsWLP4",
  "key30": "5A9iw7GuW2fVrCatjdhZLz5xtG5x1Xd7KqvdjeKfg4UKQFhDryW6iwJGfXvqvcGR8hemeUHQ89fvGUj9ySNQMBgm",
  "key31": "3pbZiatWBstbwyh5NPDLF8v9wPHKkWyQUoSGnVN5qA7268cbSLTj1nYbAHS5EnX3H5hDFScgTo88NEWpP7SbEn7A",
  "key32": "2mfPeUswa8cHrZERwgzp11eS2HGJcVXxpAmzzQtSr4NmiTDT6wuaptwKCzFVmkcMpZKBGkMvS8YAbsefpaCPsaHH",
  "key33": "559Yfrivby3S1S6UCigMaupJ9bd7FhxxkVbQ5RKppsjfmQ6o3z3zraB6WQk5tHfP3SS2jpDhs66syz6aQ1hGxzPR",
  "key34": "9z9HSxVcFBhFUL9TGczn1eapcMd96MTaeyMyuUkcEJrkp5zQndSGoGVxQ4xfAyBvDH2MAHkcUUM39nnPxmWxB8N",
  "key35": "5e8E9oeo4eUsZb9ypwpfyE4oy5anPoUFJWBeFrwqizBUmzLoai22vWq4BHxBhUjuEFyj4WYkaf8FfsRyYVwuE3ub",
  "key36": "kpYEBTw7AMcSXZv3G3NeADCAX9aPhxtacKgKYswehEYd5RsQK2Dgd9mFiumTCAw9LqeU4uo1sCMH67AnXRSrzX6",
  "key37": "4fPPwArSWAfx4dUAfkxABFqkbufwQe4RyW3Tg68vyVMoimPhPKQhV3fq2JTzhCshhsggYGeiVWsK3Jojx9oFd7f1",
  "key38": "4sK5UFa7cqN1HLJJixg1sNG4Gcm8U324MkSFSUEx3yCp8mPWuxPTbFHd5kyRbDiGf6pgNY5FvicZyyThYtdxUU6d",
  "key39": "2maJk1PgpJP7ybvfLhV1z1v72Fw5HzJj4P2aXjbXhV4eXBiqrBrifTAz1TThyV6TDLV43XSfytSSaPm8NLw3oUjx",
  "key40": "H6u8j1bqYTgWsRm94ECK5thLoLAkVXSpyfSKRshCAFiwtr11FU9m9P9hNQND5bEH6qzHsERCNnYMaGi71uh6Kas",
  "key41": "5p7nd82bnRDru6Ww76vSdGryUoP9bhnBLpiLQHN2WPYNzNGTMbBak76XuqJ2rQCnaCJfe2jLabdPE6w2kGUhoPp1",
  "key42": "Bw3CNtdqeJMhkPmX4g7xsXG1RnTQbDF2UZLj4rbawbWpjPUC9z6tC3uCrkbDunQtqER1YFqmrJBKDJWbdRmVw9p",
  "key43": "2tC2VaLhRXHJYhuvARXD9vqKGUyuvmVvNWTtsFPMFnhGE3ipuH2tV2JJfm4KrtNQPX8cmnnVstDYYXCXsqnSAtiT",
  "key44": "2NeY12naiKkL18A1poB84DFFmCActc7qFtUFvQWYbFsjqUcXiYTjUzWn4qUvrJ4VYumRbpgAQbnqE9SeHG1uLF4f",
  "key45": "DgVGih9JpK3AGGKmikHoWiZcbsSLjtEp1ucPn4QNW5yAH2T6WRYDFGvPtbmvZPGB5C5K4ts9XNbqbEN4GmjBE23",
  "key46": "3oguxhWaJTv2JeaQ1TNv9nYB74KsRRPx1EkXF2bFeZBmCicKHdBp1BRxsKd6tm7eCAvtrZNyofbKsfpdXobZ8L43"
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
