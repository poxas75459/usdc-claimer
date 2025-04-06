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
    "5dn6jcqM8fk6tzMnzKkgTkpZdgZ9w9BKcmN25JRB8s7ozRneBDzxGgemtHCKPGD9CKhqYQ4sGvv2pXHQsNnMWeTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K8ZBS3gNuNssLRzc8FQfkShHWQSPc1XWC3rhQgCbsLnZuuH5PX3knxEMufmRB5JPLYRJAnKNT6d8nVksmJHhtyk",
  "key1": "4FviiStgyJRu49ZXpUFxPQcWDmiktvjA2gB5VCYxyXraz6fM1XvhTTx2PHpEGnhM6K3GsTj8FcECdeRFHPdH8vvt",
  "key2": "iyATrZj59N4hbMp68dPcJ7tHSVvGDLy7Y71E97ygCKsD3Rgq5UabGatkeQHnJ21KY9vT7CviGHV1t5oFiFovjL4",
  "key3": "34uAn3pyrYYMTrfQewY8GNfAVdfASMUGZj9ojZPLELjyDouinwFwBTqcGgFd3v4rfWnRxhZLxiuL78cSdpjFkFAJ",
  "key4": "35hN45YhuzW85tU8AYvT9CgGZ98UECLf6rnjr2CWZWVP8MdHFZuLMUHpeyGQCMdrccgnybe3NK4KKhDjyqHiMvQ8",
  "key5": "3TnUH29gi1C6b4WeWVHHvd6YHZJrCanhXZWAb5HAgitXB3nQXMQ7bdVy2MSmGvR21EfcP9gzneFsQAp8p8TnZMu8",
  "key6": "3UrcNbExcFMTMXkQiZb5ufsa7gp7voKg2cUmPHFjvKKFahm8TK86GGZMZ8ZNugNnycw6SkUNA16kv7e1rS91Ah6w",
  "key7": "Vt3dM778dGGqLdswNYTESAmyDNAsGABBWAD3bmrQ9V7h89xqWocAEumr7i4oqLEeWQV8noQc9XKtNZ4Cf7QLmT7",
  "key8": "484oCcPT5xXSwGrb9N5dS5KR9beHdMVa2SQsjvA6QpXpeC4Ar6oohTGpXTtP5ZhbfLrE8FTSXjpKCqzTeqM1ZVke",
  "key9": "2i7v1ucjxGpDKUtFsPUsWWZeLhSppYsnq3GiHzjL4hkuFiuaFzYSbLYnScVfKR3JashijgiAWUTeUbeLdj59KnLF",
  "key10": "2N46g9aFtrgtk3PLS7TfGd9wF2o7ubufHRDiDxVeALtaURresSLLT6Ghsce65xVouNqVsi49bv5M8ZN7sK1qmt9W",
  "key11": "4eeDhGh8ZFi3PeV55NFRoZskNJ1tSoKYP5ggQBYtAtKUW39K4dVSAAnUzemqs5WHTsmSNDx5HzCYM89nZjwNr5NT",
  "key12": "52p6dmj49zToF9d16Lv56E12qi3qtvgzBQ3ntMJbHBwcaPKnqhP5DeY6T8KG9JxvoxUceTczF9jfKVtwAQ6KGnnV",
  "key13": "fAxKSHMEtAqDsr5XyJJeqAvAiQ8e6mYCPVM8355dtVWCYbkcxD9x3ETVorRdeiBJNzMdeNFXQbzSt4rgpd3nuxk",
  "key14": "28nTjBQu8EW8hANTZVbRLpTejJRga4wmLvjc7CUnBB1rLybgx79fVb7vhWhXcebV1k6tgA15MQppHYTVMh1FKN3t",
  "key15": "4QP2aN7zgfG5njPwRN5EmcvwJgA9zeK58t5vDL9V8F5UY3G6PsyoktYuN7mQW9X8JLnNSF4qGZoLnAcPb5mu9bZ",
  "key16": "2HSDkf83Cvmm7qaRdJoqC8AJzMKMJJFSWEhshA6ZuKLb6bEvQsHTjTjEmkw7sqZfTbW54uoXdW1rD497xTpxFGXW",
  "key17": "5YAgZr3ptpsRiuUanzi9Zk17E5UbzZMA38nGGTy1kzrFf596VSdHTQXypAespeMBLMBJG3AwC5uXwjWBoneyfZJS",
  "key18": "HFNfUnQxuAr693NVCxjL5eYW3bKkQBVkAPKdgdxxcFF4h5GVsUX4hp18cnGUuZb7E51QRPSNQJrQPZjwE7qbRpV",
  "key19": "h7p6ZeN8qR4q5ZVXp6zHQPYJBpM8BGipe961DS36b3WyfL8QctESfSazUVf8c4zaoDNotYohj9eDeuEMtFb8VBB",
  "key20": "wsXevRYi7Bf2GiD1D1m3qJH8PKygsEJXrrg5Fa1os6EFTjKq3jYiis7T7ZiDzZVsUb1k69YJmaPhofJj8fTki9X",
  "key21": "3ap2b4tvRtbdHKBPrG9QdhmYop5T5Gkrs6L9FK8wu9wPrKeKCwGK4zRrdsciLVBmfejJEzRrfHEywZtFvDvMyfNi",
  "key22": "2rFuT9GcR4wuNaqGeZZfZPnkMpxf4v3g3juweYj4RFa29h3MPgnJThYWknQ9ZML6uJ3g6zmpGnLcSy1NZUyVBQKD",
  "key23": "5i8x5fb6e88FxJYu5y3t29Ah7vFrFEeL9zjwDvXfDfoMPrz6LixGfvSAXMVNzJxeiLUcrRQ4q55rofCxL41vB137",
  "key24": "4DehGmopcEhMsombR7vHT7yoMfaqcmHFXvk6PriKVYMirt7EfU2D3ppUL9btmR8yZCjv5SfdU6ggghoCGfB3LpBb",
  "key25": "4UtnFdqrTsXnnTgjxZbpD4zwSvJ8Mwcwjfn3PqtUEobh3RMPnxoSrpMaynK4gsY7UYTynr5yQxGGcgK3qCXfm74T",
  "key26": "5UZPSw1qc4YgPptYnQtnDKYT3WxkWBosvnVC992jaRzm7RDKyZQfECvT7CVbmtZ2temi7Zu5qShyYCu3dcs5KS43",
  "key27": "5HRdUE3mECSD9MnajbDVidMDZsrahwZe886kG6uTWdzAMpyWg17kLh1J4XAv8hmZb528kw1cUGJYuLrMhGL2LLdV",
  "key28": "23w1guQHMmevqYPEo6V3tGEabMNL2wHcp5iZpnRWtjirrxZNMspfvPq5jLkdsbLJw5V7yTqBmKABTYC8u79Ndu4A",
  "key29": "4Wq3NffQ1QhPdUrFfNNWD73uJ3rznTFiwdJpPYeKxrUqvTLeCVmiFVzvJTzJrMpbo2BJDnriyp2jpDb1ASpJ1Ewt",
  "key30": "3uUTpuAV2qrQruNU7KBV5X3vHyRrjn6pS1fJPqxHpRZRKkZ1VoeUmkkqvoYivF8Fd6S5DAgRQxFHwZKSGHR22Eqi",
  "key31": "59qzit2JLUPGMognZtEL4zGyJZ1q45K17rkiYbM2f9tP3efpvKRB8MamoNtatRB3kKT69QxeCmRJoQo2cjnD3h5j",
  "key32": "49w9aJ8LzwzM5spxXmokEwFFScRLnMK2Yboqw2DBSDxR5jrVuBL7M8MPXBnPF8V99B5bJDYUdwg8izJz3nnMCu4s",
  "key33": "5w8DFZT56TzZbBrKfgqUixRDD4t82edabC8SMoZdgYzdpkjRo2prG9W7T8qV5WzMG5SiMGEFRQL4mK968mKuRFhr",
  "key34": "b2t2zRdrgQswj9uYccZ3rfS8zpxViEFu3Byy5MAwXNiyMFSQsV1fAkEdbhnTsaztGtVicYLtvMkmnGP6KhmBoW5",
  "key35": "492gHvKaTYahL6hPZN8c4q134ygi8bNgdhD6JHYrYETeWhT37f6g1aZYkoRMeD6YeWe8t4SSN5o53RtgDDkQYU2J",
  "key36": "2rRYYZEvgpNrCG1AvKuAJ4qvTVqeKEfwA1XYcx8NuT72EcTTTwsW9LM6W4wxsCc8kf9LKSBp2zKBGtL7pUATvgyQ",
  "key37": "3fbtQgYsWegaSEG28FaerRVfBPVzzoofjSzXogbsc4bnTwrkgLfWjReaJd8DUN2bbZNGvigHFq53AAiUYdLGuJy1"
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
