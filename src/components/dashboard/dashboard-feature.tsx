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
    "4dZCcP6GfGozDB3st9cQxkiCCbUreox2Pji3T6F1TjEidbiYRgN61VwHPQATFrLhEDzT44QAx4S9KSmdRWWviiKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wMVM8J62B1gCqraEwmBtiWHR4WLUW36C8gXnY1SFTqNVbD8cNPz6KK2MEfPuZaTgTkx8CkzLcmSYxf92mgPyy1Q",
  "key1": "3dPfriHuX17SWr4t4KvLv9JG1hLmeueSNoYd7nYbAibacoFLW43Wh7nWsV6iB5FZit2vN4Edfz7VY7u6HpSbTv3d",
  "key2": "2ayDP5QHxxomrQGWZMbGuJsrSKGhjWTj6P8S5MKkRvAHy4PLu72vF3632s3KrAm2gGbWfG7HQAfHbyTqapcbQ6Er",
  "key3": "LYBtxkLi9vDP23uxFYUjt4Cw7jfRTNkAbR6VsUQiJLkwqZrk3KDtiGumtB227kQfXWmXaBbw9YMGBbCZp5LdH98",
  "key4": "3P14qA4KyKumDqe44MCTnvJZdjUvQawisb5ToLL2TMisybYD5zTssWVxzqagRoPHBTRuPxkk5PaGGQxEXPsHBKWT",
  "key5": "3xcbCyZ3YS6MVb9Z4EyBWzjtrUURvduK9u3CKDyZKDCpqg5dPLYj3EbTxhgMVs4PWZJsznn4njXqmJCZnAf2P3J",
  "key6": "fFjYiPu2UbHyP6JowjzVDeYkzSkUG7hrk5t31gyapmegnTKsRvb2JhJSxUXvZEUQF3EJB2TZpRqqBTBtDqUNqnr",
  "key7": "DLyQ3ZEEPRduzFZfyBKUBCJpWW2Xcvp7UkfnceaCFmasBywit4YpVxWcuS1NnRsKFvK4wwpRT7ypLkcD6z2wc1q",
  "key8": "S6PVY9rpEtAzWCjdhrB7Pc9oDNRFNkh43xP7ejPutWZXJJ5E5UG77z8Jmgq9D3hPLpdKagfJgmqaMGMP4H7xk9N",
  "key9": "4jZZyi5Xuae2iWkaakAjASAc7TGWCFMg4g7hFgZ5bAbQcpUB3eDfb5RgGVa46TEQZn4xm9M8wwDLnRwdUkY8dDhb",
  "key10": "smB2rCGFS2iRfHcxFeLrPcyYSTWmKkt9VNYc2zvHAZCAhEK5hCdPFQHFTikbmVvioYL18KiofhVJqNbPRpS3Ask",
  "key11": "3KQiz2KhittPWP21NNQgZ5J9T1QdcHWrAp9AhJa3Fp6ii5BD9MDedMVJkAYwF878tznp5QbLJrRvtxYLpVJsdWT5",
  "key12": "2RxrcXHFngMhdqxSgcPTd7APHn1Lq98VmzDxquMpVvSyuoay6vaXS3XPkmmQHZ2hpKp9D42xNDJAMSrEGJ3hmiVF",
  "key13": "AfRswTnMpFzShKLoEPJAhAXQahhrQPNVy3J4VYPCpqcHXVLBBAxrmxeumfGhiogRfjQjxe5RFoTqzzxjhrC4jYE",
  "key14": "2be54AFLRvE6VfutMc5Jb7iR92yQopqFhgWV4DuJFU1RjCTHgSUubq4KVwgdgw4f3WnaFs5iXwJDqeyvhj9AfER5",
  "key15": "3Mmi341Pi5TVRk1DVWTDPJveRF7oDwNmHT36uqfvsViP2y4UqjQtrQXNhPeEBKEL9G6sEqjQqCzUy18NCgYwGmc3",
  "key16": "5KDkWFPdCusU8PEJE73LVMPrKp7KkSQRU1hmtizFFMbSQeD3vife65y5nvw6fM3M7Pf6yxaQnGuMRk4pvyrT6wks",
  "key17": "2DHLFpSZt6fsApZpNsvi9NC87pWA6jKFqxzn6XdQErmYUA5L3epx1R3diJzQoaQgKj7Mfx8tQzQPiQZVux69M29N",
  "key18": "CFu5X3nMVahDShfQqqty4xut9r5wN3hmrDUaaTcKcNo1DbAWazWXPsFMXieoSJjVAhqHhpn3PXcwEDsYndhrRfe",
  "key19": "4i6o6Pjaf4zMQ63d8m19mcw5cn2cR3p7QNP8LBmoaWhzK4LqxHwSmuncDhqPArgtvPCSvmLfwHrNHTU6PQQ2w3BD",
  "key20": "5Mb2a7uKyyFfqsiYfYZbRngm11KDRT1gVZjb24oiEstYHxpCBXvVoDh3kWXPLZkaM1uoYprxhiu7rFE7BnCsgPps",
  "key21": "5BGp3gTJsTvaNWN9J2hn7L2rxGEd6RtF3RsM4dwYqMHxsHsM6sao94RAJZWcfpXhSN7SgynEnGoHTVHeDUA4Ykzr",
  "key22": "2q4nA5BSyQ2wTEMDA4eaivBZnf6RcjYzuEZTKppKRfmJNPJTHxAoLQzPM3L87GXC2sUbiBZ5mB78MrrpAVMD1XBx",
  "key23": "3PhNcN1NGXzRMTXs8spoL7F6mfckc4yvwx2zk3ffEDfhKbg3Tbhkd3qADL1UhgG8pKYWu2HvwNPK7qyYLiUwNfLw",
  "key24": "54Jx7cRk9JKmLtWVhdKr4jkfFQShv31sT7227EN6jEyq9SGyp2rF919YAUzxi4roH5S1EJ22uumEdGVJxytnXVEx",
  "key25": "4KreP2DhczyztDEnmSKwp5EKvNhxixhLovFtMkWYiL47z5MiWwGjdhgU6Q6ahXHbYAAPNHpNPc8pN5HN3gh4oSSw",
  "key26": "5D7uAtNm6SLZgFTRP2UPgRVW8CF5DXaDcvZvizjaUFVjML9fokpy5dBGYjcmXxRC6jEVUiRumaiMLAvzKToAM8VZ",
  "key27": "5YAqZJSZcMfiDeanERktego6wdLtu7eyxxN6auvj8CWrunXUpyJCaN8p5L26bQJaZtxH2iLbzRsLGxKAaQ77LVb6",
  "key28": "3nm9vMhybscZCAXektq6Ezw8oqWTp9E43Ej27M1i7RtAei2taYB1VWtyVJGoo9ziTYiEpPDL8D5H6hEmd13WoUMH",
  "key29": "43CQfQfo1fhqxXfHRN6qE3ezx8Wi6EQ4k3pkoRUdN9rZyXR5iDuo2DUvHLtmbbgQ2MU9TB6YiseYtwzUCBEvWybA",
  "key30": "3Eirtg61AHSztkzdqWErtQuqAgoPLe3ro3S8GLMeGahZ5nc7WK2TAFTgkWxGWLFx9wVdE2qd9Vzp4G3AwisVsZxr",
  "key31": "2W97r89UcpouQmPCQTP1E5fGLEPCjh2xgWU131gSbh7wCkCE48vYibE8rv84KmEyZBKEYLMHBhiqdNxRL5zbqT9T",
  "key32": "4DS6t8S2YYDHL4LaQ6wUYNMqHuKddLxS6oXibod9QnauwpaKCLhhpT9eXqQhWq5HqSepada8L7iRp58uFCwntg1B",
  "key33": "VWeNXz4fQ73CwSAaaAA1wN3vL1ZxGg3eL4nYDjPdq2iSM2WEuZMrgXnhKdBczdZz8VHKBnRoyH5qFedy7SA4VQn",
  "key34": "67RRA1UVzvr2H9pqpPpTPZ29eLWmfmzAiz36GHvXfKmNzMz6iBCVgy1x77Q2hCcrGgJgfKXFHdBdN2JmXgju87pw",
  "key35": "1Gqw1Mfjipz7WTxChAFcCdnLGkeCKU4gqB8dKQNUTMmrChqtcBmhzhxB1UgD9e5jYkV782cthgsVGSXpcsPWMD1",
  "key36": "2DDhY8Py2kzDWuh9Yjai3oZxe3PHguW4aUr94nhMJCzCb7mBk6nXXQyZPupajQH2CsGgBA8k2XpXSWPWaUG81YAB",
  "key37": "3BagetEUmjRWKwrQZsnaCFB49qetP1mzv47mx9kEW2RE73LVcKwLZ1FXS7dmrPVsKJGpHei77zUeyiUResVDUsGM",
  "key38": "5vJMfzFocnoXQMDCSCdwKEqHzSerdcHsmcLhZssK3z7jX7ATsQyfaCstVyjrwFswikoY2WdceH7T28EG3Y5wcJvH",
  "key39": "neHz4txMnaiikwEX5bqd8h42uWapz5G3AsWUQ4ZR7nAKYHsfEsM4UM4fXJ3NLLAR75HWDborf1mFrWk1fDY7oMD",
  "key40": "2786YekU1xAJ4gAgnXZ352Hgs78BGR416etr8PXju9oTUVj8ug5ywQVetRt2ZAGtgBoUGRZpwVcy9XWGtMxJudMv",
  "key41": "4hA8cXv2VCa1ZV3ezKwRKRyLcHecwAZg8jioYdsWtnQMrA9WZXjCgqetVJAUeFTUPG4Rd38X7btTa3yUza82KCpq",
  "key42": "issJ57xtdR1XcmTtP2pTnUj3aBxYWr1KC8uGCAGSBbEEHA1CDNu7t5JaqhCWEaJcEJGtZZaDcaEw1Qbhrysugia",
  "key43": "3fP8Res5wTWyMQ3puy7GuJSWAWAgqpzqJr1nQhwwjhTz7LJeLZFACZFFVCTZ93KHqdLrjjmuHb2oerGzjFq97yMi",
  "key44": "2yuPA5Zvx2ujD4hPxwFt8kA7J34cbu7D778AgDa3bSjzVo7yQdUjnXkofki3qhBZ3uXqrAWdfAyegHVhi8Lay8YN"
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
