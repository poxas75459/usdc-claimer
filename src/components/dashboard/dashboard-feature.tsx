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
    "rSLxZeJWG2odg6KiwhtLeqtbeCBws8KCwUE9kEz1rPLCFso7L226Q8NLwUMPT87fdYqX7hTNuWFmHYVF4CBmdWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WwADRoazSammG1aLMD6bGvxcqMJemTErg5kBK4rzosztHkJBNj93e4oK2janEyf6bBWHrcdePnCm7CkS5dhp6ZY",
  "key1": "63V7pXpoCUVshh3vHSRi2y1kqTmivGGKKgrLmwsn4q2EteZiUYAetcYhu3TyHvrGFAxDeQQkHfxULdGn4B8dcxok",
  "key2": "5cXkRAgjj1n21q966ZSXispFXXSy1Xansw4BJNJ8WoEte5SffAXQUNszw3ctJ5Y5EnWVQVWm8Qf9HAmpk2qhUVjj",
  "key3": "3TRmByPK2GNDKFa8oePFusfYU78iEgzvUUs6BmeeVsKr4sG4qjG2TsLqLLPEtjqTVYLntj68FqmmiuwGMFtUxMee",
  "key4": "2s2QroH42NvMzdNCxCVx7o3cwYFpk8XzpLaeUAgGP1H6jWuwAX71ubroLGv9495Cuq6mhrNpiqfmeN8fASwis7hH",
  "key5": "oGyhHwfC3Gy7VFq8Yax8AfiMeEqvNKoFe2ajTT7rVsL8NakZM5g9Rc61XCVUWKEN8Z8iDZLUydaS6Bug9NWJLPS",
  "key6": "3VpGQViTT7VdWeXKNSHn4bNdtzYQSWCs5jrtT5TyVwYZXt5S35NqrLAEBHsqsaKBHwGF21EhziJvQ8Hwj7SkVj5G",
  "key7": "UvLkmCRJqzGhFtqzS3nvcyfThSHMCMzcBEiHhyZMzGwUgfaB68ipfczC2kuyaQo5mzSMZ3JSYRLR7tZptfEQoo9",
  "key8": "fpfjB4XALXbopgnN6PZB9z7ieBwX9xmGVaDFavfF9DpMSPsNgb5133GQHfHAamsxfxLU1SuTaDiA3ktM7Ha8JXW",
  "key9": "3w2Nhp96qw7HcqaDzTpviJnPVnBSE3PbUhAAe6t2wMUcJx5wwXdNpbthUakbUHmTjoAeobtyxxxwVUe8hv1RAVwg",
  "key10": "cZ3fwwQhjhBe9aQUUJh5e2cthoNbESrZcNS7zQwSDtFDGBQKPbQP1F1yZ2SjcynQdhwuwS9BL4dm1ceAVRfaEne",
  "key11": "4v5XtjXbH9b99nqyJ5HDRYRtiCXC7HKfAhvyafNYrsK77peyUsrNsryQc9jTriFPMec52pVR4tEA81bKT16qCEmd",
  "key12": "2jkhbbQXS46DuxQC4qAMhKoTyUCe9fU9vZyreCU6NxJm4jpscxh7VFU94k1Nm1RR6W2KcGvFaMabXwamshaoQH3A",
  "key13": "A69q8NU5Z4ubj4Vy5FSGX8SPRTUPTGhNBURUxAE34prHpC4zCEMhAVDKWGig71Cxg8VcHtM1PuehxhTmKurT7Pg",
  "key14": "4VLp11stCXGzBy47ptNkawTMYxieK1ZDyAbiJwHZF186sLud7GJDkzrALNErTMWfbkGKBE4zMq9b6ftbUqtQeo6P",
  "key15": "5WCZGpyJrZutttVnLtwEhc6jfSUNUjhQ3xXkz7JudSur7LsTtHfvK4yConFFfXXB6m3X5HRwBjeaHhHqRGjWYKqw",
  "key16": "5QKAf3Ks5Jd4pjdzSWJHnBFScbrv1PBF9skzNb4vpHd2ENTZBVdJc4FQsd1mmPHaiyjdh9bRawhMFw3GANGwLufJ",
  "key17": "3FswC8wKH7yzPkUxEEn3Yt4qK2PEuj5p9xAcHn4DMw9uqkhzgnitajDTeo5S8kojQsadewyJz1aQrsimiaseds6m",
  "key18": "3dcErisbon3vFUcfxUYoyW5PfteD2PPfaw7d2yDR6MGjQTsju1JfsApEXtiXUDGN2b1PzCpZ6axAVAW6W6PhNKy",
  "key19": "4WsUrrktPB6vL7BGahCAftgtJqPcThxH3k39EYECXR8HasnGiyHsTyP3dLjzE3jjMbrQWUA2rDzRRmpW2CAD4pt1",
  "key20": "58eiiD1e9xEDsK9CYsewC9EZUKmMLzPfbCgc1usRkMcVBGJmtu84ex5vWb3xPnHte8mDVchbwFY3dNhFFyUKxeyA",
  "key21": "51FXi35v1W88Xtdbq32w4aVM6A6ZtTBdAdBHA9kfUo8m6v4xTUwyyjCtwJm9MqvFPJfCdFLbA29r9nJozGyESRVb",
  "key22": "qoozfZqM54eArc3D7iN8ixcmRKv7R2We6hHPEzQZiGQtakK7S8GZoHLzgJt1FS3GqqYDAzBJc4aGg9QpimYQc96",
  "key23": "W39mMfvThQbbaV2vCnKMbSFuYEHWKg33Yaf8SDp5aGgzmqSEsWMUQF3v9ykBb57eCiMMJ1YvHp2n2Cy2wVxWLdi",
  "key24": "sNrpi9UsiJnu1TvrWe7wjpsr3ExUzhMSCA3m8Ty5YgYh9TfBJzeEx8DYRQdSqLZvxcTJBZBJ9CrK9nw8tePKcMg",
  "key25": "4DDcZQBdLfSeK3uhD9CgRqdjdneqz27XXiS5iR2pjsW45XGQzKewjwNyRNer24HxYWEKm9aYEVaWHcb82yhqNj1L",
  "key26": "3iUNEDtSpYTFngSvHJDP4XqwjY7PiGvccXaokunMgG4C7UrKB4wdpfpgASsXMyJHYeHXkfBtrp9nYG3PMqEkJusi",
  "key27": "2BUqxbxAcziWWNSY9CvXoErjrRpXDabt47jwPCd69Pcs4pxyMneep1psYvYwTZhLLXWJ8koE7G9VJxLfu9AXCLwQ",
  "key28": "5P5kksLGQTotRNS3b9FnWEfy3i9spZbAdFbRknPvQMWzZ8UiNBt7Ws1VAB1XhuzAL9k4GcoUeSTMGiAqgbU7E1ZZ",
  "key29": "Q8CDuXLfeDFxZnY96Nt5cGmodmmohBJvYBaGinyAcTdqiNzPgBofx7UDhmy1dP9ufDwGe7hHoS7jJugnj9dUcSE",
  "key30": "jkhtcuvwUjgBdJjdDTYuiTGzf7Zs4YqRpC5nzXiwgtihWtHM3odY7P6uq9TGrHWWJBQ1QY7j8PBGGVNy37FczbJ",
  "key31": "4PEeyYt3wHwT4hiazmfH3GxQ3mQqL2yGk22GSiKF9RVfXhVHeoMTMZSy9oKAzcDkr78wsV1m3Rb25zsL93gC19Wt",
  "key32": "4r6C91g4q6zthu7rsry3AdEnDYkwdeuqNHSdEvsWqjQ8eNe678zaiAS9df4dHaLSLxWdeZ1zpxu3KR8MYtcTjdji",
  "key33": "3JLMcjRddcVrwaHdFBmDbf27oM9Nq4BdP8PRAJTrsyXpa7AvQFvSchKfzag6gQNBB4SsEkPdAxUz5KwUy9uEDah3",
  "key34": "3oh2Qxv1HSLHSqsLzP6RqkEgeJqbQEaQncJMr2XAVpMEDPJgDgA5Tkif94VhAAzZRmthvJ2dKeVR12cctsbznExd",
  "key35": "VyD1gNwNRQm3Dz1TfPSNgqsvu4iVnRLN4FSLMjdxb619t4GA2mAHbAHDRp3tWt4G2JXtsxNZBMJefmXTE1FM1bb",
  "key36": "2wXMRNfzqUxxX4HCZtRCSEU3qhg9iD9mFhVcGyD6HUP3QW2yJTAMAuTRzU1WG4p6Ue7noBbwEDNVfKL3HpKLYXZx",
  "key37": "5yGpyoSvLDjJuzP2KECZ9s5CGT1QKpBoWaQTwvJWPUjuGMk3ecnriHExujhL3JWezrk6BCzzMATpPUgWUcrFWSeQ",
  "key38": "61t7Zu3ayco2MQ4J2aJMUtBgqYHLP6CG1tHpwG9jACohtNrFZEcwWCcSDxCsvwXXWXYcrDCCxVuyTTbhDaUvYbii",
  "key39": "5DcueX4mvbpBeTeshfsouHkeNjuavXpysK8FNGHSKzPWG1CjbAKjnjZdsd5d8jkJzJvWcjhsGm4BKW8qVK378137",
  "key40": "23CppRVhr1oRoRxJS88S3JrPc2HMSKvuevFD8qxxnWVrnW9LYj34kwHyJTsPRy5hKRZtnEhAfRbf7ifT187zh4Fj",
  "key41": "a3AuApM4s2VUx9fw6zutWQPCL5mXpZhsr6QzwEHfWsaqhiCcKxA2VzwUk9devMHctgh2kjqmFtw5RgcAbmSBo3F",
  "key42": "4rECjXAGVxwasZHEJqYUehfup9nFBg4M4A1cVFTZ3mSzgbfZLEGia4ATer8ReNuHXy7xhBzjApLficjYwmyP6NhT",
  "key43": "5PzJwxWAo4goc39GjKwtebVZvFTXryfLsNchDCzuoW4GQSk5UyT6on8NmF4b31xWxs5cJH9CmieXYpjevfnnZtA3",
  "key44": "4oLLe2bFKVin1fkXjiqJHLHmjmEthWh2DTWpSpmjkkA1FLn3s8QeRaAUNB1kaJ2ZEcoX46SKKuwiLaxec35v9ajv",
  "key45": "2xXsBCFubvG4gt7xpECkVxDtTbNiTCuii17DFKAv63UCmGVSDBDmMsg9LRGFfvhn6K4dW3VvEPzezaMj7AsbkvFd",
  "key46": "5BX6r9FFeBWqZrRwgRVwJ1kPhmiGPHkoqg6ikmvv73dcsWGwpJKitPbYgSDpEfxZcTJP1GYNHqN1ySJiQAFZPAKj"
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
