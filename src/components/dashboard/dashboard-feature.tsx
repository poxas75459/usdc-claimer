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
    "5pivqDU3XUQh12794ifmPZJKdmwLB5TdZj4DvdFxa2cGLvVwrEmBqUA7vm36qn4LJTLq6pncqKbGASzXXZPp3zXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tMfNbbYtuBEufHDtPrHLXFxtWbEXYSihA5PKc8EctCtoVeL1vrdGddEPfajQjpZVwnEvrAQvVogvvdM6cGEw7sr",
  "key1": "5MG3e7gtbeM3jhTMVjBGwhoNrEKujj3kQ1HYpJbGQoLwvbPzEjFR9T9Konu26v2tDc6cmViMpctbUGTUbkvcBFyv",
  "key2": "2fYEfy6cictJ7a1bqVQzK4by65bhfKXk22JGW9gqUCiVPLNBAQWdzjBdVPfD9bQuJmNvx8RtxcboUyGkiHbxxSPW",
  "key3": "2ppAn8dVosE462Gd476CFyY4kHKkGHXmJsrjAv7nmvW1eH82inKbwPtn8FZWBRunT9nwujE6W7VuReqbS5bNePbg",
  "key4": "5FTGkhj8dNaDxrnDhVjQ92hFNxwDoH9oWuMD3yLoBjyLemv6wEsyqMiqg1Twr9pb6PfWQrKiVqDV6odD4foWCwsW",
  "key5": "4tDyCX1QxZZhTgMomr8A5DtEhVmSFhNnRrF6dKpzyAzWNWcyo3U81dtpcBDoQverS7szdQgTYDmou8KyShXpszWE",
  "key6": "4GnDvYnd4tjh3vYAzssthRzSxFZ137uh35riGGN4wZTHDwJKEV2DYDr4ugJC5SvUAUk2ej5ZCs4MduJw2Vrxxbe1",
  "key7": "5BuU6uekREKdCueSa1hk7cWZuFb4SGigfDVzYcUiNywaV5SSBkEHoTEXBBFGnfqGyK3oLfe9E9j5r8dkacSJBPFo",
  "key8": "37zWyPMhA37JQKKTBzYALxq1inw2ysQr6WTCusq923chGHYYuHC4x4QPdXz2PbyCsSmfCU4eyN3r1KBRL1d6Q8Bk",
  "key9": "5VVdYJHKgjgm4RoULsvGJyXgmoaGeJS73dzAsrCsTN3HYRP17o9gycioJFbZPMcbD5cQc6nWnfSW9F1Q2MLBHVQG",
  "key10": "3uogz6iamj5PRxLUE9msjwQeqhBSaoznCXqHcmgjicdJzrC767KYYZndszDRRkbsZavU8CxXYj4fBcgSoLVfLYPC",
  "key11": "KCPnTLWMSbxoaEGxrBHdG8xgSv2reTHLJDLGtBNb8K54uJgQqoxyJNuxxYwTn69JyzbV4VJ675T9tWPcA7QnD1J",
  "key12": "4qzedvRZccDNHU2Gp4thr7s2Y1pVg5AVaFb6uv4UDEoEQf6ZTj6Mp4erNpWk8R7S21d6DXqbPoreAo9JwLoTQRkg",
  "key13": "4S9fnAPLURNVoUrsXr8tXN1h5kopyGkUHZh4ijkSCy6pa9ds49H7QLE71WA2RziKAfKtrLiPzGhrSxhQKJN7faZf",
  "key14": "6FaxFS5TV8QV3Crj58SHBSBBfip5j6sCNwoL92gyP6YgMxbAZJPTWb3fAbyxqXC4YHUHmLphDPR8QFuKoCCaxo6",
  "key15": "5HzXUBwfypse8vE9shoji61pdf3wF2onLsGvZkD79UdgQoyiGvKXDvaqLUt2ej3wSHaCvb5YzvVSBJeghtMtf2h8",
  "key16": "23f1qYDNbSU2gXvJHyWhs8o8Dg8yfzqVQPkgJFpdDYpvPRPirmhUyssGy7TMBJgdkDKRRPPxqRdhrkiGr2Cwc616",
  "key17": "4b89SrWroXXXfwBogJYLWSjRAa5Hoh4SaaUY2ryvLyLkNpZXL2BjBzEM7YD6Y3kXTq6fRTTNBHLqbn5FSbGFSpuE",
  "key18": "2vYV4pCF8R2qPg245pRedG7FPHKk2BMaWLibRig6DuWbrwveYYfGP1TBcCygnQQfRi3gtwX2NyHbZeYeLELCsrXR",
  "key19": "36Rh3AhSf1sZp2TD8biFsCZUWUvCy64LWkZAymKyPTSkUnrz1x7F3UNynqQr6Tpn79MwJWDeg9AeaGrcfUgnmLRW",
  "key20": "5NR17bpgnjoYB1RwiEXCotGhpjCFyxfnSurdWWK8qorbecJJnBZDFd23FTewJHBEXD6SZw5SN26BB884ZZvdCGcG",
  "key21": "5pJqxfY1Wtfo4J7keSMrMyEYd3W2mN3cDTPQNNSYstfDwdx95fyzYzvj75JbTCF5vwuXyXYSa8vqicuCcnUXpHha",
  "key22": "4L4fX2G6JNoNLf7nvEz6L7iQvgHfj4uX6Pq2Aqz9BQuMxoznATMFzJ8TtVBqnFQUDRgZSNhbeBpGpPVqnRWqRF2d",
  "key23": "5e6TWue1zA5P7DRDPD7oR1awGussy33NPSxRRSYTRp2fyUJT3F3Dc1KTGDYDjSTTBMn7s4DbGmgJTcpviyY5Vn76",
  "key24": "1eCrpMSyzgStbEg92HSwg1hqHv5MKn7w2BE28cGEtnUq8QFNgFwWrcittA5RYBx8VEX3ecABYN3suamkwCD63xc",
  "key25": "tbnhZ18oxHQUazYiKjwzNB56KXaghvVELBnzekSJLrHnCLRcQ9suoX5xTwNj2BQ6wZoNpQEWqAgFbGsMu5qFZt5",
  "key26": "2rbmuhhD634Czyr3q31NGJJjrdcJMymETmPaTrVd5H1RU1y2w8q5SuhUn4zv1GhiCzLFAi7ZPeThF3v1pAJZrp2k",
  "key27": "5KCGY5wCuipaDXthKmveLrjF49T5teasaw8LkqSJSukeYcVdpjGmvdTEpAUhPPPsjZzsooFwqjMx9sMgiJebsvw4",
  "key28": "2B5bxcVrGSAoj9VDvaYXd97ptWgUobGYgrNvjWf36gnKoTBeeMfiJk8srjATNiHhBk11LMDLRNkmfBzYLqA7n7N9",
  "key29": "57ej3XgJmcbrhGgXNkZSo8uPwRCsff4ayzfpGAYKffESEmLzSQcyPErv77mKEduPppoerKPaMFdMZmpAZH5jpBsL",
  "key30": "3Mfs9oSEQBfBUzfBbyzBpVx4ukhFB6SfQgWRPBrMYeXoZ3bPC1XznWM4YZHx1AzoMK5sHbQ2tjShbaYQx4FqmotP",
  "key31": "4TirTdeL2f9tuwQQ9vaZRuww1p24V5oSkW2rCjnMxpyVv6cko3AADMpNxDmjgshuAFC2GXS9Ri8Kef3iUq9ijvb2",
  "key32": "56DmVsbrbum2urjAGyGvZk7yoxnjJrB5FRYUgLawpjEEhLhGPb8tcnMq2bfr1fCUgz4MzkMZ5oRGsWEBgFYbwYa",
  "key33": "2e6xGozw39Cvu7GKzYrHTvCffSZaf7YmuZZrGwc1HoXPLWXbNrz1BbujgTrjJGKBLSrwj3y3feqEFAJaiv7MUyqS",
  "key34": "4RCnmMTZcYGguWEb2VwkkWHTmAvyLmqoP5m1DuKEaqX8HrAHktsjQedrzKba7BGStLBf5MZ9XFHKtrwXTpftAsS4",
  "key35": "3jpqADDPgj7BYDZoXyes4xvC22HUMmms5rL9R2ueswrLx3SR6FEPBJSqdWsE2aQswWkrsvF7uLaos2KTf364tBFG",
  "key36": "2oxcWwC3YzM6pczzK6wYeXk3nR4otevrFiBFzuf9NvuUyJsoSn5j29h1acvLoHF6aArCeWx6iXQX6bHJ6hnxwZ5A",
  "key37": "5i1va1cgY3Emczb9go4xNrPWymPvzKtgwNohaEStb2JNXMeMqMEJzeaUuBizPK8qUgsdWsAgj2zfa4VHz7stxHve",
  "key38": "56cHAFBahPEKehjZfNxHphsphns3MnPGof2akjwfyDDyNQafZzryYyEyJcCcu9osSYbjtyYeFkN1XQEuVUQe53j",
  "key39": "3AMTu13DU3usg8EWt7Lem2AAaEw64mpfZyU2bBsc5wjh8big4XJRDTdPTTVD2fYnhpGsoAjKU9fDa99wBK4Qf3og",
  "key40": "4kEzZqn31SeG7L9A57kBnRnTLyXyGruFx8zhfddLdQJ4BnsBAeM5e2siWjMdV6PquwTDkNyMoPgyJTknA1eYNwXG",
  "key41": "2cTJyXYoup3r34L1uBXL1j8sZYATW7Rz1ekUw1coBy2a8DT2V88BtrNdARRJ7XDYMrmDLPUSA9VmTpJFZFnUsMQr",
  "key42": "5ScbJU4Rn6MtU1hsK4otX3Tqpp3LQZvPgKKRGWrvY6T5nCkHp6WPtAmKCSaPWk7M3CFwtEZRciDBSaL8byUbFSJN",
  "key43": "2KN1bKbWhpthj3wQpAx7zJTTKk7Mg7t9jhw7ECNZSPQ9tbrxd9WYSbbs9cuZscWf1q4rDD7tjMgF1FJ4uZafc2Wc",
  "key44": "VU71yKBP8FY8ZB3FZP6fExPsy5tSSKyXjdmKCuQbrLWP3nGoRcdNtvHhnJzoAo1ss7ngWXAUP22ndTKftcM8Sr7",
  "key45": "5CjnZL8o2EBgLUdkW1xvxtsky4zAodeoev9JqWrGxuCfCvZenvfbbyND7h1pv3ise3oH45MCBhRbuVdL3XKUgKrG",
  "key46": "4aWruqAdBcgcqPjxLfyLXrKdphPtTPNvFrcbJGXk723MGH4U3W8VXfqAL26AeBTVXCkB5stVzFHRh1tpYyjSJhmR",
  "key47": "2xR7rTEtjZdM6YHzowzRFzM3u3r5qFdE6kFBMpxHJb3a1gAgHAPUH8GJNnoovSxmAQhurkowaacXihBHRgVwMfFK"
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
