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
    "dj8BLuNhT9RVJiBhPws68TjznPiq4FP4W7UPq7VESqChxvF4vyfonc9mkWCDWV1dGw8AjsG9VZNWQwSgynuf2r5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gyyaubKsDY5deDbStw6u1AtjQzjg62BS8nf1wzwBTx2cRpzMzvjFyH7RgwNrsc3uNSqLgRHaEkuYhnHVrKxFNY2",
  "key1": "2wb32r7wuDK1ek7JAJuQUpMRSbbTmzUCH8V8DnM9UEkoQVWMo6HLhD9iCogQjTukEFXLv3ZVH3vrr2Dsvo1zgUoQ",
  "key2": "3vzxEVj2NfDwchtLv4Y9T3joGr7gDyLUXtYhgGkuFgH9rRPg42ng6fDvEG3Wx7912hihA16KAWncvtz8Jc7wMhpe",
  "key3": "57EKqwhNnqAXg69Li3QTLeJ4BfPr4o8USmQCaJ7Vv4DcccFoZ4bCo3KW26T4ZtNr7EbWEP53ESesr35N3E7chojV",
  "key4": "4Vx1K82S8AK6qirR47tobuzbyQ5mAF7uVzhJ5S7ubW3xfaVPaHGUnemv1hFCtAamGGgJFyPTWZEqsZrHyQrwu6Zw",
  "key5": "4jfmW6CY2gUvY6xzoq5uELv4YGAHLGT2Zm9n4YkFpeRizDE8ErVMopWrr2v4843cK678x4w9CSWZPNbqRBdBk3CM",
  "key6": "1RAGVFJm496LijYY9DD9ys6znrMQfXRCKSzndQzKfoC78AHUZvRnJvUH4a8PJkEopbquv26ZCiKCC5yNRJATKjt",
  "key7": "5br67jhE51HTNvAFvt91NhppGQqoNaqkMJP2f752cJeKy3dRn72iQXC1YJXs87Voc96kcVm9CZzJxwFRecEF17QW",
  "key8": "3jQ6QtxiJW9Qrj8UAQ6PHNt29q6dnSKySy96D19bN7far5TYLeG9dNtAjTkiwwMnq7ViC4pE24s4w8Z34GokSqkj",
  "key9": "5e9VDzij58ptQsmU3phom51Fm5RXFcHn6mbwe4fWX1ioxvffk2vyg75MhFhDZZb6ZCJ8JMH76G8ydC3tYAqQ6YCz",
  "key10": "86UubA77Ebvw46ucdr4fqbfCLsZWJcfqQxVcH2iA2c7z67ASFTWNfjHbihoxrdVQVrWz1NnGLweKsZMACacRyZr",
  "key11": "2bBCew67bnwjzyRLHq4hdXZJ5SYi92ZVZDKZD2VV3igpHuHzLs3KRJYiXNZD18HpgxYdyBWRSrD1KASXdUs3961e",
  "key12": "4B3XGJdwTANL7hHmoJWD1cwYo2435md9hJzS9zgdJhtpe7AdRjEG6szqtPBrQ3tx5UiTomf2oFtfAnHz1suKCmKP",
  "key13": "2xZm8of7FzpedHgDstpzADSi1C5sdFA3bima6eumYsCTGZuvQrVjChyLZsW4gw6iHFY9Sw67hcfnD3ypMTHRR8wZ",
  "key14": "29b1jZuRhTF7onW4c74FE4SqS2gRKqpwdG2E2qAbP7beo2uRgbPiGfP3KtoX5VHoWxmCzW2wyA2EwXt1sCXzEQVj",
  "key15": "DdNPC8XjM5epvxcPu6NyYQEBu5SaceFhTnUJ4zhFbGdadRnVdYgjx7Mo5VtRkg7WELpMPNt8QeEu9pj1rcuGSPG",
  "key16": "2Bv847W7CinnUWJdet2nSGkuFrQuALZgVAEwavdRe4yiwsuEW4v6CW4W8BoP6MsfgM1AFBJcj9mAyyFJwfAkxHDx",
  "key17": "5uyUvKdYrxyEeNb4BYRtmqZoiX9kzwLpmQojvZjL8kQ4EMD5kGMQktgyGKCTtGF4Zrk7LTGa5RhEwg1WiiVmqKPw",
  "key18": "2yMaUjcnGRrsyEJ4dCYkuYtnkFXsJ7EJsfD3PQ3RQuoGyAsvFFjDus99P5zkUJXHXF3nGFMw81VAu8vEopkFEbds",
  "key19": "5Lh2AH78TTw4ZMQuWGYfYLyeDn6dEhFz5bw7YfxhUsB9kCLVafFU62Bdi9NiFU4s4cYRoGH9uDqEqZmnbvkJkvWE",
  "key20": "5nNjvvFhdiU278yzyfaP8szJRhDdQ3EsmNWtMZ2xHERycaqGksdcpdG2g2Wimf28zqcqvXtXZTtDT517FeDrtg1S",
  "key21": "2caUrkfxZo6oHb26EjrxWB2WsEH4n6mF4T6iofTiaySgNLmGfGuFTxxCgDbkuEJ49d3zcr5oR5R9BavrEDcwmcNA",
  "key22": "3smqx6CNwbiUPGFCA1mY2EcAynAxqw71FqzDC8TXb8LvNtuehVRr5ihmYBT1o6dcehouSAU4xmoqAUGnnM5g3Yhw",
  "key23": "579UQA61TzgtK5bkbVR6VGcuRMPiG7C1qQZSbrKr7r2iYHKpYRuoqh7YvjSwu755WS7bJHyXQugfjanSXQJ48Nge",
  "key24": "29mWoF7xq9A1e5Z64Dc2B9GFW5es6XKf4EdM4RSem7KHTqud2au8PbQ7mFEFdM7ykEUbnAH5iQvoJ4hMYVT7dmUY",
  "key25": "4JQJdum8f7SEn3vy51F7W5nmsVErzucxrXYoGujrtz1QuQYV8cj2k2iu4n49X5xdSKwinaMU8avhXzrJHh6GSJv7",
  "key26": "3pheBJQSQ9yGNBVXwMc8fMQmSt3uQgrwSmHRXf5vGbMQF1GXcHEfATxJKUYQW3puTY4UzGdujmdmoqHMU6YBFZcp",
  "key27": "2T7b8DvCgHFfMgNZheDNco9QMQdYAGL6xJwHPNLHWjTq6cWCf1bN6gMYRN1AedHPs8tRq1QcBioURPdVZgVTbnhB",
  "key28": "mf7atdjkEaGYvYUuDNxLyExBYwLxAZrJRRMGKxPP8K5hCkeJch3sz9nB6JzeLak9b8HM4dzocYP7iEnXRpkryVJ",
  "key29": "4G55r5KQmd8SotezvczKBi5tjpB4rDVstgKR3HLDMy3on6zyoQBGKSUp3y5EDQfhww54igipo1hbaZ7xd9zqoS1A",
  "key30": "5PiwYmTMxZWB23WnCQbZqXS25WjcWzBesRUnQZNZeuooarxMuYxNV3RRoTobEuTiNS3VieZA3vCh3WX8DWFV4zYu",
  "key31": "g6xBD2nBZFfESSpW4KRCfXDaSH7isfBTVDQXRDebhseXkK8rnTshiNVQWST8bWdFguscgJuDGFDYiY7oxNC32kx",
  "key32": "56RBLpMWYLR5D9MHMstyPfuMwgmbbd5LBMXVMdoGaQLuzy41Tyo6x6Wb6UHzip4oLMqy2AoZoqwRjAPUnbBYJ66u",
  "key33": "65hMrKVvyzNhQdC96J12XctwGugWtDL2yoRkwMZLHJ41uYaAcvARhxWzQyXNa9vJ7dmoyefL2jvHpgpiiBrTY4rw",
  "key34": "65fzAZkzCrJB7WLGw2uAzBorXr8DQvyFjsoKsAycUi9ghivzUhUXWBWKHek6fGngA8zhGB6BfkMhJ2FfDGuk2rkB",
  "key35": "392P4Zb8FxQU2ZfHBMi7Jhfhc8xbZ9PSj14AAvBbMx7phHWTc7UkJJe2AkGn3UmifeDgYUEjgGAa3SnGnpjZwJzD",
  "key36": "2jiTjsgFFC5P3iTAkDL2TQqG9aeTS6QQneDCBA8e3muNU8RVq9mDGR6yKs93ws1FvALrpmE8cab8DzynxuW3M1dw",
  "key37": "2FwuwNmJHBBHfV2AMbZFmyPsGBPHc5GTxqRvg7R5yPtAeHzp7YUUMs1c4bcgwNVfxsVEnojcAatRjGQ55oMjtNz1",
  "key38": "3R8zaZQuiKsJi3PossZuWbMExtQFSwz5ESfpJf25gtbGFBWJW6vLJPAauLtPwpTkG5LYbWUp673Su6v5zkx56Pbs",
  "key39": "58eFcGeCxReomJBcGiriYfv4knMp4axAzJgDTcN51jqp3xbvaxTL8jFyDJRPsU5SNxka7cqQJoWJALDy9wdkC1Ps",
  "key40": "4aJUkTyRagLiNKu8J72Wkf84XJzTvK8yvzV5ucSpWfr7DzsDYEbYAaqbhuEg8tD4ZbyrbdsGEah8VULKogHKmnxp",
  "key41": "5DAzy2JWSbTYQM6xqfjRP6x8ZRj4pwpfEJGEtZAuJ1TLrL3io31Mh1i6xHCBnnEvXNepTt6vkKgS2m9az7GCR8RQ",
  "key42": "3HJwJMgMfyUXyv3rXzYA27eyujtypd7ofQsgW6qv2WPdwG3RVHc2UDufRvz25DaC4jLw5vTutHW9446qoxuhWZfd",
  "key43": "53izaGkyQSc9SFhPcr4X5UeKZgpi3jUtwmxVzWp9LNUCCTBbnaL48PvEc8juFv1ehVuXL6tGaZziuhyL4k2ERMku",
  "key44": "33TadAYpt5sTVWRbuwPUAcGnvbu5jXCDYfL3zbGAcznQkGDJiZqDLDa3c6FiGkLXSR1Sfs9qneCQhM84apamaHUr",
  "key45": "2WnLG6SjNfDEUXHWnhSLCmfMBsEKq2GUuzKKMgYaYarfLfZGCvttoJVRVTPWLG4winpUSiJm32zDRayKEgT7Rbtf"
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
