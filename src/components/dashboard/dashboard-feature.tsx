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
    "Yg9Rktvi34qStWmgnAsJncWopHB1RwGvJz3hQoLfA3QLQpYnbuocA3kqGyJnqm6kzy12xdctD1ECtF7DS4ioGw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qi3pNbvFCmzkuygHZ4dMBaDwK6kMupbCdwhvFyYKtp1dRPcKrDmEipFwymSWzfeWRyT5k1f1es989akay2Zpq3w",
  "key1": "5m725FZWvQ6yas3oWqhJ2kircwdhPpvCKFNXM3jDKmpnbJQnX9aR8iydGHkibBouTTXoEDF2X8bnZJit8RD3eYJM",
  "key2": "5e4KGv77pJhoejGirJh11W17MVEbY3Q4tnEt16QMwVyaq1K9ejvRJRTPqVfngtSpFm4shVP6N1GVdJbrgB5eG9G6",
  "key3": "5XLbKTVuhstXE6qT2eDQ5h3TECEfkdVnPug3B7HiwwsYQb3CEnjYBCcjqTDjwDWcJfGSadNJRDtxP4GVJFHD58Yd",
  "key4": "z26z95ZB6c4YWgxBmMamDZ2LUqTTMRQj3sRNHMWYjhruL1zBvqgVH7bEbSspRF84fLvteKneDKaYbzbX8cRgVtN",
  "key5": "5LAs6YNK46KFXDJaoMjF4aNHXTv2KSkm1rRkTa9s49N4hWYbkZcfRHkaipLucdn8FHevgRQmLqxiFJnfFmXDYiNF",
  "key6": "57kNgD6vA27FtGhLWGewyuhFAEtsHBSdGZEpiMTXGwen6nhrRzoyXnQgQdEMWL6EtvC42aEDHLmRXUm8JNUAhesQ",
  "key7": "5uGncdbL4NxesYMN6NJcWB5sBK8AeTBErDHxVXnsgQrGphkKnxwYV5panpiKzV7izVLDLDRwdpjmCRt2TLL49stF",
  "key8": "5FxDCeR61EPzhZ9Zde9znCyrMR9e9qsUyr9ntbuFLNEqzPoM22VPvGMnafntfYoKG5LNRN3hdor3B3AkqKKzBGAw",
  "key9": "4enpwnLR3EsoQext8Gd5iV274o1ov5RXKymN1G8gkBJf4t2oPEaYraXApRdE1PkNxXwGwHBKtMZuELPdKfxrZ8au",
  "key10": "4YCmYD6Gyng9qh9FoVGScpmQY6CrvUNF6s6E1XHKecsKv7qa8QMRqopHAMozeqqPvRe7tq7VksUd3wAa59Z5aAyx",
  "key11": "4pN5gL1QmdQ8cWsV3ptPwgVpYRSMjutyGsKywpQ4GEYaaYruG7o4rBCS11TL68gfii5mCWkNjKMLi9muTgdzwG3P",
  "key12": "4TeMoV1nqYGxfEBcpmStXZ9uKbXvpNmVj2VB6Gbz9t5tz6ee7dp1PNUz4y1xG6YUwVjhMgDcZBD1nGvcvidWECEw",
  "key13": "BsLw67unS4feHB6rd8PwEPLGTrGLapK75teMmdtvjxBfYo5P3HFEthVtoRDk624icthMJmrbWJns376BRJmRhxj",
  "key14": "35yHmceDeZeiPMeawC7ngyX63d6mNDGeZgQnLa2BFpaXz4BYqqHeNkJAsUXiGSAru89pRx624KUg2iUcWPtQE9pA",
  "key15": "53rcdrDjM1hasxpgFoDC7sewjoRTSJuUrTCa6EhkyeKKozmEzv9kfDpsgDY1YsexG6pE7GNPeT2Ux4KnuEVPes4g",
  "key16": "A6ttWsTegAZZiq4CBRX7G6EiLkpqvV1dWyQ7w2hEjmshz3BPiRP3HxuhiiEKHVdyoqotiBCbDgEWRtykyoc8AV1",
  "key17": "5AT4HNhNhJy42AEk51rgJsaSdVx32C6fhpGbwAoofxX3FdMwcQoEthAc8VnxbAWyDfWfnC4zRinveCv8T9nfTtnc",
  "key18": "5gnMiGAHfi4Zjc4S9raHHNwDVQSoTZqpymMdoPaZ8tXCPuwdYHJxjYmiFKz5wZSgXDzsEiL25bGcRURZGjb6wBQE",
  "key19": "4fZqmW3tdLZKXHBWFfCTQ4qEfCo1EZhiFFD83urbD4EscKRxjCDwryJMvAqYrh4keMMNUXUV2RgtuvZ1At2bGKLz",
  "key20": "4PtzJjAPqNxnTHw3CiuzBWYB5BJTnSe81inK7FXHArrPWAujm1WBx1CNa1egyyfgDWLjRJJPnJ4GwAiUZBHJwmxr",
  "key21": "3Cw4Vy8xjpVUgQp2eMGHmvQsyvZjVnTA8uzBuj2Eq6fMPriXi2hdV4iw1VUdEXq9WRobU9z3DQTu74TZ2M2bvdJi",
  "key22": "4bbNy8dSfvh2qxSyjg13EHA3WN6Z38CV9vPyAharpT699m3mjyLaSsX5vFk17iKR3mbMqpVG1k28xP9wmSrnrUza",
  "key23": "4ujJpPdJXoPEDUbpEFCAacJZiNULS4TidiGb2cpzMAkFC5wPyX5MQ2pH26Kh3JezyQpHabsRYj9hByY39vKcqwUD",
  "key24": "5kxckae6Y4eZKqxmmwrirLMeEfsFZuArkaLvugJLHSSCEBSdujEKCUjCNmYvHxuRnaqQDW15PE6Up9B9QL7LDVRZ",
  "key25": "5giSDfbRmgnbTb6krF4TLu37absn86P62DYqjddbRa4CGBnroP8bVb9SxnMRbuH3X1gBJreLKkGmbLscdFLeNqfe",
  "key26": "5WPjYh9EwmXXBek9CacyUeGpAKq6JGyhTQUNybcnmgrns4JeZsMqYGUM5Ptk7QFVfwwSHdRmXUczApamsxSEyEvB",
  "key27": "4LAimZFTh5BcPGKdMA1fHXnJ9t5sMA6yWXfVnEmEPHtS6qw8dqt1xeHELqWNtTk3J4CUzHrH9q8s8qrduQH1XPJP",
  "key28": "3aG7HjuzL6SgNBagJoRbcUgj5t66sEZMeNrD1mmRsAJrmwCzD2dJ54kRvTW8GN5htuMyr2QtKBpZ66W9eJe11F9Y",
  "key29": "5Pyn2xoxQhmYXrR5ze3NnEkYaWbh3iggb3gpAy1tmfm6WH63ZtpTsD7nbPZ18TAG1TLh3ghGhXSdLBHWD2qusNQp",
  "key30": "3HQduPTaitRBpqLTbqwH7Zay6CRKNBarqyGTDr3fXiDxddBYvgzDsDAj6hkdRdbnXtPtkd9WDnXANnBg9qqNygd2",
  "key31": "26DSToWrAzjWYB2GX4Zmp9QcZAot5XtoHrNrxh717yBwwa9QaJ27p3NHo7zc7yDhj1H7fkBfxHCEjZUvzr9z69NC",
  "key32": "4FNX63bnv3Q1BQJtTbA1Zb539zaPyXpK7xppqAAMExRSXpjLxYQy2MbMVxi3y7LeiFYmCHy76LcX1YE5dc5fjcY9",
  "key33": "3E2dVimFyb72K8sUn7P8YCXd5ziN2CZZA2kMzShkb4YW9DNS1u3xKBPzSw6NNi6MW9Q8MtxXmYTApkvj2sFBBF6D",
  "key34": "56KhqkwLVd3Lpbs62giB75t7kZJnBxzov2H98CHAZKPNbJ7KWxcBGjXguGk7DkKt5W8scfynDHMR5TEkWHz4bU2i",
  "key35": "yxp1W89qwQBD2Uyi6Pn2XzqWj3WGkuWj2hqAUVZ6aWbtnaXFEkmg1Q9ekVpvgKNptf3JV2ibzPtHqJhdirtmMVv",
  "key36": "4tXBnqzMaRDih2YEFJdHwXuT8WspAwA12mRZ8MxcBpCqE5JASNLKQZaSWBgmsRwfELBEqEh7xXkQYXKDJS9kivpa",
  "key37": "5jc33cRP6VWCX6PPuWN6JJXbq65DLsjhDG4t5NcNJGEe1gnJsMiEziL2eh5fnoGDoQLzyeeWnq447ayivZQhh2G3",
  "key38": "2gn9YVJfQx3MmALfymd2ZE9JMSGmZRKU1ByG23BztNUzjUta56cBFGi8ey9j34CRn1UzgDeDCKiG283PZnkJCXVj",
  "key39": "YnMdcjXnEqsnD2oK2Q4gqCtMUafNjGEheqraDMsvmKD3uEEJkFQpcfMbYa8NSBhEfCEpWcDC8oeziXLWnFKbsKg",
  "key40": "5ZkSBVZ8of3bGsd225HqkndHEaxcC1XVtzJWwDnGzL6ddawqapKsZe1UjAELMBV6BQDffWhXjRjmhKZuaEtBsVv1",
  "key41": "5phnHyyJTWGVJfmztKCVNqwhxwURQBGZyHEwUXHrdE9FpQT7J5twEpYK3ZssYQgZ1CtzUgFBfE8o6juqq3gdCSRi",
  "key42": "64wjxgaLsJTKnRGgFYYz585u8bL5JQJt8uzkAEWhKAkph3LSm1KnPzrQrsL2J3igyTeQMFoXabRpufpAWq1Zu43K",
  "key43": "66fMDrKfCuoXt67UhDyME2HuJXTmnZtsJKEwZn2ZhHZE9uMEsjkd3ihchXVi6UTVg7GJEw7BDRjB7EVLwgzHoy3R",
  "key44": "4MYUhDcnPKKZX4KfNn58SmfPGzdLH1LDK6k8JhkH5doW63qbvK3XJFBiLvUhi4cYWj9QqRhVdez5cGd2oocYdYmn",
  "key45": "3FCvwgQDBy3n7m3EHh9Dxney12d8wJvZ3VsxsGg7aYp1hhRCu4ovufZLjBHykq93mc9qLS7FKudm8zT2htNihuqm",
  "key46": "3iasmGxxwG9nNEYwfwc68iu4GrWzvTDvbG2SFcbmowX1ic3oUzX3YTD5B8JkvzYGjaspbMs6QArCZhHio16V7pbz",
  "key47": "YxxrvPqrBH8LyFSGzRtaceYdB9xrzVKwCGTsidsSxsRJYriHHyvA3qVbEikyi85HFR7eD34pSgJY9ao7GxJ4EEG",
  "key48": "5hMpemUUrBhApnv5YLTQuUZJm37jMXBr8Aeyb6Twkr7X3ep3c9kx2ytHTUQUxT2PaKAmZ9eUsC7RaiJgzGDTi9xt",
  "key49": "2rJQvFLBDxkmprtERsLnfDPSkY4qdqotkPJp6RoGMn8yrJbPGzix4uXcy87zEKMLwMKCQueqjneXe4qPLqd7EE93"
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
