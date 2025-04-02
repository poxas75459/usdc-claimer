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
    "5oyuhwpDj7Vpcqi4MJwrtm6L1mMeTojG5nwRHspjoueLERhZKZVS1B3potr4fDnR6paigsGCj94xCc3c3ZmG9Srq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49UoCeLAPftgf9QJmrZJAjWQrG1kpSfHLXaRUQUQMUKmcMZfXdGXevAge7kDVzhcGavbLQodfxVqnNsRxKp7RfQj",
  "key1": "863RQQD8CKTpE9Q2izJ8WjGLh21up6ELqgdRgjjbqsW7nQpaCzyTD1MRpEqBmVKBRWEFbup7wdNDzDk8rY84uz2",
  "key2": "3M4LNni3hYVqB72YXzeVXLc58LKL1dk4mTod78TRWAdMZtH39h9jSjRyGXLWMH59Hq7t3JyLsB7uWgY8YZrfQuVf",
  "key3": "4nkBayuXHbrLFgwCg1jG6wia7fxkVLax826CyEXw9bJUr3rYi2W1KaQZwa4FKt5iou2zvj9qznrto55nQmHFHdxK",
  "key4": "3Q48jzyMjVPBCtUosmmEg45ufie5P6WSy6zXv7QVLoyfAZoSSYihQNS3BerQwQFfc9vkqyoqhF5X4bd5VevDZfUu",
  "key5": "5gmHeJgrrK55a3hN4VRGFmEzefVKELZYyoaBjq1pBDLNJod9uDNyy4qLsXx2gLej9shk9c4MAPjpUy8dVwHyCHyc",
  "key6": "2596CkMvmVvMfuxPwZgUzNfKahYqz4f93ADCg9xTRJKbMKAdcETkDpmw1SayK2goaD2ASetRN129hvptmwRTcmAb",
  "key7": "3Hh7Udj5jgwEsno2EsQBQVPJAsfgqbm9qeLALk87mS4Du3b7rWn923v2fDcMsSZWXXAXB4CGAuSy1JgmxmgJaYxh",
  "key8": "XUrA5TfufPHiJLu5UbfgWLhBKhXEUBuSSKTWQMaNwjnEYEYo65MVuwYGReUa27C3Dj65nag8M5keNAXrTVmS8oe",
  "key9": "2jM79DyjZ2UUrWHUj7Ae985wzcKFKMAt72nDQH4Yn4Jv3oQrGSZUVRLuXdLsxsCoBkdfyVp8gGYdnZtsPdoQ3GLD",
  "key10": "3Khu18nzfG4KfCfTH5fUF4P92DxjmFyDkhC2YdJCK4nDeg9wtGNGFfD3yDXMdBKxVvJEgXwKYganXCxrWVFPni6f",
  "key11": "3CdyV5R3BKKuaMafi6XJvrUXwGwdDZYQpvB9uQ4WPjtr79naCVxjZwfgarcjDTD3yjJqfdcjs2CyR71xQ5uSmZLv",
  "key12": "4i9ToMK6L5wZFYGbg5XUqcYLnbMmmbTAbax9EY456ZBnLd119x2DEGvrWHCuKBEBJEcG6dDnv6bp3rbH1MRZkK8c",
  "key13": "28GaWyNpi2WaiAmwhofof4n94AajgWAqiRgKwL432QtGyEjptqtqoaTnHYm3mjDEsrkCjer5QUKUgaBEpEnvD8QL",
  "key14": "uRBuaVcN6nBsWsxAsPhmyWYF8BkaC4VFsxusib4ZrpBTaXoHowzQWVeNHJmVWnp5miaSBLGfLg2fyH2rRscTxzv",
  "key15": "UheqYuRrAB4osc2DSmdkmLYPpbP2KQ2EYUoKdD1M5fGZDRrtYz74wvXYLReZdrUXLBUAity2ReZEMui1k4zwQym",
  "key16": "2KsegM9KBezT3tYVDtVQFL9FvavUQq32ertueQxRM7DuabDz86z9L4hDWA5j8CkCRBpf2eThwNR8kUY7WFTFYDm1",
  "key17": "3jwLck5XEkY968fdnEFrbrxsD8EJo9BNwJqPSotgugSsTJRuHyv5oJgQ32TtNikhKpSPcRtz7wmLzLhhDDEvZ2kT",
  "key18": "3da3DpaZtXqtd2gCWzyPKGgrGKdpUwR3YDkFytG23BnG5tVd3cyTyokPS9QizXuECR9kEZAhBdeRv4dvFheHM6Co",
  "key19": "xjU1RfaPSN8r7Lg6WYmJj6eqnyc6JQShUkeYeWuxqCPmVzfeH7GcaEV4tDBZm8rBwq17eygXNDVrhU36dk4Ptki",
  "key20": "2Dbrm35cvYicec5H3b5eSECxfkpjp8AuAQdtGjARpkLRPDB6ffKjjzDvfKWSN7BXeMzwEFcfivAjhW7Z8aoVo47P",
  "key21": "5s4QFsptC7ZXyZQax7Ce42xce4owqhSQd9zLXdy6qnKYEWkUUDVEggzJ244poENZME9f7VwDXyMtkYmZncrn5UYn",
  "key22": "FsKiJCkqwTMndWUWdBsuc2p9PiGCqQxMQhu4x538fjmbkvgHsbwqTvRYCDg6BawktfkJw5hnXy382mGhcXbHAY6",
  "key23": "2RQSC5ETpke8uwfHdAQLgFHzzwkPcbERWVUhg7L6EGfPK25kEfkQmr6nLCpRrimdZKsga9JwTh5WT2BbqH6RuMe3",
  "key24": "2xv3wHGpt7Fc5Xc4bZGFpB2THvCqbeJNNwsnNBk1CFsTu7Kwc3xVEUuTuNvPP9MNxycCsG2XZBaPr3xyiGH32Dih",
  "key25": "3jguJcN7U8DRnzrCzrCE7r86t5kHZPa56YiYLitivZCv56SiTU7B3We5YxSF3hoPrzrBXe2yTJduXvdNBm8WJXXx",
  "key26": "2uZfSanQbi7CN4y2qyjMrhfXyWZTzaejgyUFEgBWQ4zQvzEA3ALELrWNStAVL27sXTkhzz39Enkaqv4E7mzG7Ar",
  "key27": "5wB5KTujnvusaC1LSKmvBe9W5ZjP4w4Y7h2vh9HKZ3i5zxAY6CR3KaBYUgkyxs76A1c8kCNeWXALHcwBzp1kgiM1",
  "key28": "zLGzEbZxqgec6T4HFeKFucHfyHRXgkHavhqVF43BPro7HcZbohFcbC2ZtmgH9AYb8orPcLoVHnziZ7w6wugFNGd",
  "key29": "2nabppTXUEB6kYxeWW7Jz2BwTxFYBYMY8CcFRJghYvMvPrnV8xAajbWeUNbV9K7JYtPY7PtKMJjURsYuTYSHtiJX",
  "key30": "2fvAM7k8KuSWELe3GSrNHgycoAZQRSA9eosiaZJSsFcBCfZH5xBotcLNk6S2qP5xsWsNUg5NftuvS2MpczAZfJMK",
  "key31": "yAeVaKFBzD3HVUc596vDD6Cu3Yzs8XpESiXSLfxvuSCB29TpJjMfaq4ynXjVf3SbZBbSQCN791cUPQDbj1mU7BN",
  "key32": "2jSpaxZUJ6fxAGyVjVuGrEYx8QCRoASL1uJhVm4Y5F5D4TkoNxkMZtPeHByxSMcW8gyWiRGU7K38fVLyDfBbMVwE",
  "key33": "22y15TSAruVN3cyRjf6d1k8ASaSFjenv5PV1nid2RWWMJb7Q2kgHWhtk145Wp1EEPRy3jTtdMRyxcUiMcw2LsTvb",
  "key34": "2Zs4rug1P76u8e5tmBo1YDUTTtaQRv1M1UcpanJXpQ2LdBmZcBzeytjN6L9WabaAiYGZEjyLDTDmnDggQMPwkcfa",
  "key35": "tQaGrptsjjJCZ1LB8yQSK11s3fzZP996hQb8p9cLNDndi2wVL77rzBQqBwGGZS5UraK1MKKNaq2qP1TN9NPfPEF",
  "key36": "4Ww3CjU77yHRR1fzVQEGgq8JnQT7sWXgiUyqRCnwHfPJxep4cwYUdoJYurQbMMukGjfZT3DxXx3rC4Ko7XYK9LZo",
  "key37": "4hdCjPvqRMxtVNLB4Jk4UWzzK63EEKyxUiVuYgttmeSEfqUxMekEdNgBDLVdbCNkR3uQ2QdLvtVDCfyUFLWQhs9y",
  "key38": "22HJrQFFpXm5fAwqu28dfDrfaAT7oLhCriZj1zZmYa1RLHtQXFKjkrrFiN4nCnvBuCPSTm7CZuLDueUNXLg13ibL",
  "key39": "xgtm231eDn1DdN2NwXAhFrs4UDBekuEraNZQiXp47hkoEGXkXRMBhf8FNqJL6GTNMJiyG1VFcGnisfoM9jaKWrN",
  "key40": "2wjGpjuHXGR89BbsBfo6JW9zDfMSNeGoQ2ENhB1EFdYFPM8FH1KHDjes4qtDjWPrnAzPKQWEPfn9DaQkJT81xoCE",
  "key41": "5jCrm4PZVzdayfMVbxZNMhjJJ2x6oUd1QxZrA8nMv7Pn5XmstDU36xkggZTZg6Tf87kvHmHt7ceHygF7oRvB8voa",
  "key42": "5bFqS6YRKpa6sQvbf1La8T39Ffy1kffbFBE4s9QdwKx7G9btSJTnffmmFfjekk7xpQe4Xpk5xMhh4fgFoDrHXyFq",
  "key43": "5FaHBnNojLFzknbfGv1ouno3yirJRipinGEyN3sz17iNiZBMNJfYuUrmmdg1Cf2Hsbt6LuZqWrmft1jHqTwzeLPJ",
  "key44": "3uQ2QRMxRccQsgzpFyVFyK4nT4xqVkFNCasrdPSnKbEgDrWrt6BkyudWHLSgMFiVYYoUFEeAyDsABwfsEUoapSXR",
  "key45": "4TFgZTgyjee9NKBtB3YkBtpVWYUhFjyePVqLYrht2eiw8prupp8EqVuwxbo7zhYRCyHF1TzMKztsLhn1rPDcEJtS",
  "key46": "5BWijKk5AARSb1KMCLcDW3DTip2HFVF2z4RAB5ixNAQuEZqbaMUgTe19nznTPr5mNMpAaagR7Pp1d9Zzrb9ZeoUv",
  "key47": "4SMqwQnKULxmqAhhaCKoRuwUUWN5EmNtHfTTxunVkm1jW5cvCE96Bsq47QthRwCknEFDdCoSxHZWuRxJLkqTM9uf",
  "key48": "5ChdKY2MYvQ1w8VB23DmwkdNTHkSoxaGc4ezm1DyVWAzuZwZGAnAGNS3Z5T4egsZf6wGU2ufEbsms4jdPYXYD6QC",
  "key49": "5dhVjotJHqPzn1aBCmStgmepF1PXrnjcujPZeydsS7GeEL8Eevt3rehbZJRBojSozqHc88Fzc6z5uuTFt32Vz84b"
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
