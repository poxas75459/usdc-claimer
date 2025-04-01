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
    "2Xr2wDjZWhmELEuZNELRaFV8Mdt8s3e8ivVCCZbdvFrYuTLz3RRTkR9a7XRhQ5gvmD2C2Lsop1NyMNzTPXdkC2eW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a2euDGNeVba3fHkAxyAbVyhSMXTwTxWZYc8vSgCNQ9mjBFd5hveaDtJjzefAUgewy2xBwPKU1WFFPJJxR2cSaVi",
  "key1": "4fS4KuBrdkv2MtMwxQsjch37ccwwYtYBAnfoSEUeVV2v2SdFJtFepKyV1WJAJ8WqWYVq9TmsbecERnVQVgyh1CYM",
  "key2": "4dHCzNtVQ8zfAHKVoWGNMs7mgi2Ra1fpymKpxP2pWSU8uBCgAjr2iheVAu9ob1gMBPqbhpU5TZXjcT2x67ie5UHk",
  "key3": "4BwaPxcg29SCy7nBqXvVTC8xL6SGLkhTCvgbF8zvFYzv6SLdTbdjeyhBtMepSW5iwmMxY6Jo7KhMaG3TqaYBBDir",
  "key4": "3rPbiGPEkq8eak8ESQiaR8fAtvdQVMQMjsnbwYsuvjzsPpvhxhPPQTHV5MekawELFNtm8N9RejuPnBTSXoLdhRVu",
  "key5": "2XAGysvfhPu1HS6AFE98FdW3HSt9DjgSNK7soo5ukDxBPNRnjQ7wDqmZBy1NgaE1aYY3PEE51LtcNNoDJ76DL7tY",
  "key6": "45usqRq5Rbspn9XLYruC9n36npdxs94xHbAMhQ5RDhNPMVvdu6zR7RdKvjkZwQcH8UNQhgN8TFADtFpKNqHw3sJS",
  "key7": "4gTKv6os9VbVX8UNzm6tRE5Bmqn5gdn6mpjV8RGQstNZMnZucU1qZKhMSRTVx6HGtwX9UR9dvHpi9DfqHAWgVxcP",
  "key8": "4t5TE5r2zaoGTvgrr6sAWwVG6keEywuPcKLtWcrkUu4Duq1QWuEB9Wji9saKTbehpboNVLngHwuYpHT3Rcw3nRkV",
  "key9": "2VU31qnEpPFYT782pmrnFShgp7S685o9zyjN2oFLcNdXwwfx9BZnJgr4SnkPMxe2iBQLQxsy6W7HajCAfEPUJeKU",
  "key10": "3SEHFLLjVdMXCFMsNwKCcBQWi14mi6HQhpjQx5VS61i5QUufwkM4YcteaD7UMtBzDWHrHDd7zQ6juKVvbeQcLMe9",
  "key11": "5tXG5CUaEWJukF7vWEG1AdgiisUbyQUdHSL9uRL8bMgnWRrAgvGT32LsDTGmAM6R34X3nnjgGPpbrzNKiwVixNAS",
  "key12": "2rPLuvFkp3sWVGyXAcdWjKjuTSiaHVVCZHbvaBF6NZBPP14gmzC7jUtGJG5rtuAZyZtgPFZ5AFbiySF25dEFQu5j",
  "key13": "HiMrBx2L2GMwhrCYasCxkv96cDbY8MhQJSoGEFAhhtkke18dLRs3snkM94oPqkuKjvkrJbrj2N914hMKMyXG6Eu",
  "key14": "2tcTMrvCRwgB3KamMZbdYR39EfSwcZVA9ytiUV9Mnmzhsuk4DqxNtdwjUCYWD75g5Naai5FM8MaskuzdBY6b3q2i",
  "key15": "2VQ7MJtJKucyAw6hViN6MEkbdS299qC985fTHwT65kPoNEApHx6k9VGMdKBmNgKcT9D1WgGjAq1b88Pq9qSHYgp9",
  "key16": "54cy1mcp6kAah1x8od7hcr7zPLuLwuy8KDXCNuT2AHoinoX55pcEaAZPsYbZyVmF79deUhJwPyqfPTtcX9cXQRGA",
  "key17": "4vh1cbp1GQUe2T1gCtyhrgouP5ovHKpBELH7q7oJtvDkwCbUknUysw34ftdP2fhiZrWBdtP5viZiamUUnSjR3RBK",
  "key18": "rSrnjYVZmjJsCmtLaqrLRALrciaDSyoFbnU8bScsuH6Hjo9XTZLoSaCLLT8qqeb9JoavzVW4v34m1Y84yhqxgaq",
  "key19": "66yUJng7u9qTDScKsRKVAjhSzmn5dK1dqRWep4XbH9ok1anax3Nai49Yd8yfawSBMmLgnMnkfkRA6wHfSPvSh58F",
  "key20": "44iroUF1FNKzCGwZPpF3Lo6UGJ7XfqEYEh72w3Re4WRQJcTbVcmPCsMRsAL11jS2JcQFkvD6uWs1ryRSKx1ELi3a",
  "key21": "turQH4v2pcDiLikeS7LnjoATp5sitouX6J2ZPTUW3upnJbVzfRKXM12xZLqypeFK194E3YvWZHwz6GknSgupc3u",
  "key22": "2Ad36qWmWRdqF2Cf936JJJShRgQHgUdcuSKA2q4wfgCaQvzt4jBBiizE4pmWdTLFxsCeYF8RGmGfdJAiR9M6venv",
  "key23": "44HN3aTkuWptabdSWWmFzssDYBiRYNThzoyXVRM5a2YAAp2jY6VD6mVeq6wNNecLUNpdWNTdkWvcXKCxvsho9vrL",
  "key24": "3opwSG85pSPkLBrMVJfhCrFykusWejLad7JRDqeBmTTRfnKmDc2KT4EpvrbQwNYejajrvj6JvVpHDg53iMCJy7LN",
  "key25": "5nENHiemPFateNwzFo9hvAghg8jJVtMkRkQ4c7nbzyawhJ79L2dZengjzLY3gDhWG3mJ4KRFtEXYRfCzsGM6kFJh",
  "key26": "xtPhfmFB6n5ecpEGZ4XFKCKTbZUNJzTD8hsTBp5WNqHgUTxscJKqdUqNcdS67rsiqqnMLDCJStvzdfKrMMSw48j",
  "key27": "5oaoqSPiSLrCSFVDJEca5M6YWMBKsV3qvNBSXGA5HfX6nuJS8UzXBxeDq7JDLTEdiizQcLx84m9j2qW1pTagHthM",
  "key28": "yQhuDwnSuRc1FQUeA14D9UufKJ6nLavz142V5ZCCrxNvivJrinN9c9BffNgoLa3TcsmF1X3FepCnqxQzDA52kbM",
  "key29": "2qECbkBpsHCNR4ckWymYXGdwFWHGQqjX3TVfzmbbNauJehQ15ffB6qk4SuxEL4UDuJ5WAQpNSLbAR33HRkKviL2S",
  "key30": "253nfBMuYbuUKQbWpWLubfFLX3j5cWe37AHJwBQzrmejAANYfWVqw1bvTGR26fW1YUgprpga323hSZzhkXurEcjs",
  "key31": "4BRqVdWWP7uN7BK7ZZ3zmLV5AiLnEf1mBMRxuADHkGJNWmgrKSLnPtDYs62TWdc3sBCxSDFk6ye96mQrd2sxUmun",
  "key32": "2s4N1HpLbQRzNqwi2kLpF73WDDkqBp6UopL5aoGtqcyPtmWXKu5jhUTLRoQSpHDJcn8iE3j8YrVds8RvYfzVNcaa",
  "key33": "3R11p6qbLWpevYwK325QB5mUaSYp6UcCGFZ1rESUsaM7QEERwWhxBqz4PRNfEsovgs2PDSfVnHmgZMR6veHMbziM",
  "key34": "Y7yBZpW2fn511sY8J7HivuL2DNLws4KcEtnZrSnoMqKsvsQEpXcDxihuozyZni6NpzRLv2ziBPiZfvShdMk2Vdj",
  "key35": "3wYeA7YcnfAeDWh1c3zRGfMiaoupBH7Mvj1X1LfENenCkYoHZFyBFEQgaPjGaiVPqyBGrDuc5ZSPHXXHupdj9d99",
  "key36": "4SM145KwKV3ACSMy3dtmr12DR4r6dDCz9aRx96Pj3U5eNSvNpbPX6bWfE4QWHSy6x1kFd6dp2Ja7nQemhmEwrape",
  "key37": "3HAZqWfgpWhwa6QCf76hvD5xivCTgyGweKoNiboaaWJuYT3jfxMzFtNBe5tkzLQi6h3CVbBaMaNnhyjbxpghgD48",
  "key38": "61UMbTxhHUzx5rKkcsLE9b2xRTzpHwucCr3JHbSGz54XNrjV9bMLqcrQajmaVHYqFBvGGJq2QKKD9GHK4LeGn1rz",
  "key39": "32FZjJqFBrvdfzQTWRj6crTgPzij99a4DBZnfEeNCqYEsjiVCH4iD1WAAmgjUfP6rtmTGSizk3EhBnohiSTuYT3i",
  "key40": "5BZ3So8K7D5jzJDup2UmfVAXYiLyYJHAQtJXobKn4H4RjfzuRURetkp8Wa3QTcw7dDXxuG86X9PDmVrMfKBsS4zx",
  "key41": "5VTaup7RSJJSwui7w32no8BhX713sXNdEeTXzjSdFJa4T7fbJj6BmBtmknebehePPGLkimzVCr9pZG44h1PZqbJN"
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
