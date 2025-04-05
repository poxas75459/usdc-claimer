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
    "42mTfiFoe2y4kfFAmsv9wJ4qBhE6rXdq8MnsmshQNTMSiCqKGG4BGUzWs3WfA2vpZr3qaEE76pnjhbapSJjUkgt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zzQqv4Gi5xEGtbdpeuvbVePNadbQSeEWnhqMxpfnxYwPFDc1XowMSRVbjpDhA3j1zjH7UZM8pBeyjc3rngVpqF9",
  "key1": "3dYEGZ7zMnHQrKnDE8PF2fNAVwZCmoFdVShFn4VSraq8Vsydo8X8yL7BVwRabcGjhrhRrPE5NQUH3XAsss1n8g5a",
  "key2": "3ZHyQMhxiYwDzjijAAdqrK9K3kQ2ebLvaPnp9aX4mAE9vTdE6dt52YG144eq7TpZGUvBqkVasDD9Lwve71PPnnw4",
  "key3": "2tdxQ9UTtaqLoChBoWLc5JbaCANzAe8kQyNdZtFWcdNxjMvSeErqPDhJhnAR53swSztD8zSQwigM7Q9UGS5G6keD",
  "key4": "2SEeLbjJKwca7Tw5nV3mZ8LrsbkgVUPrjHeJt4FMHyL38iJfRzDYu5SQAvmzKLPGohpZnDFxscg1gNDMqxFphTV",
  "key5": "2nVyLaf9XaSFbMXnTSp9mdM84wZphqtByruWwqiKbVw23rgKLJJU2zruh8b2rXuNk1ppReRqxGT2X1iskh39pnio",
  "key6": "4BvFpkWHHpNKj2XsxADzKcqwX1cpafMZN7D5CeHk31nchmnFRiwWKT6QuJutu1sMcvQsWyfApSW6KtFjwMDtAV5d",
  "key7": "51eUBstCXbSeU1QvULKKJGRTgxRzEFPjA6gGFatZNbbUs2b2HZttoJCd2SxBetmRWyVRYfr6ShWttRMoafyaWEWh",
  "key8": "54mcEzbqXc4VjDCiXkw4cgzC2VKkRVGGSAB5ErPTMkg9yeDj7gAJjh6z2dJcxprFuabXhJa2vvcRk8Q15bv8Q8qH",
  "key9": "28FJCpiGSqHgiNzAJSf34x6mDh1kpyga8kPLdfBBwThen22nPA9VGbZ2VXLcE7z4pVLx5D87QnZmGBvkivwJkedJ",
  "key10": "4CRmdbb4X618yP7zrXc6JRmhGnWf9Nvchu8RaurUzntgxzRT7dbQopFGZnY66sRht1w7jg1d88xaeQ9U4qXjyCmg",
  "key11": "5r8qP7w5KcbMZAhMEe4KiSd2p5ghkvkgoKRYkrD5PYb7rDBSe38Su32ekuhsPxGFXtb3fv71HjjXBSuFXZ25ykCb",
  "key12": "EtQzsNfRQsFCo1pwi1sZB8YtYqqJwjCA8TwD6eMPrJGzJBD1EPwzPA4u6nLFehc7qFtQ5ChE5QYRmedevrgjcXC",
  "key13": "27EBi3TELJZgrPKEAVgDKw6AKxWkMWorKxMV5hSUsMMwRsHivLucFtMeuVGGK98QkvahMVy88Yt74cQ1XXxJez17",
  "key14": "4Dat7eF1856To6fNoCAXw8ztaakk1hkWxbaoh1yZozhHcvPJ5EzbUcWCoZz8mMjiwENryrBiDKYFeRFcXvK9zNtY",
  "key15": "PFqyjmJDmupFbSHZy1coGavTmQfSD1A5XkhG3HDeP9oKMUoRhzNrT2ZXLqf56mXkNXMcRSdHY9CBzzhS7SKRSBk",
  "key16": "21uowajSUh9CMQ12FsPGmQ3ZAeHbBKGDDfFedtHBCdLxwkyDBdWzsp1pUGuhoML4vhgSo6RaXx6kPgZqSeRBCma5",
  "key17": "3NnK675F8QrLCgoVJytp2paWewRKVeYc84WJ44xd15uJDTb6aUNC5UDfWm8Q6JKCKfdDtUqbaWnaQAsp4pQGR63b",
  "key18": "So4cK414TLuBUrZj3aLRCRHzNUnFnvCb5hjbEztVTeZ4CQBnCada5UbF3qxBojDWA3cFujBykTNDuDDUHcFrFFF",
  "key19": "TQj6mty3UpnstAfnhwQHzYA4r6qN1Ke4mC3g5E9rCzFEcaNqyaLD4Ettdvyu3QnNDCcFSDNqvrG1LjzDSYTf9ri",
  "key20": "4upWasY4MthFcFLGs57AEw3j6gqphN8fMj84gnK3xK8bZwTZ7SkXrNHmSQLVcukmT3PjefhbuziV1K5sSYMuAtWS",
  "key21": "4RYMHCeG286x2VBhowNbBgERyCZPp1FK6pV26PyHP6WZVYuCq89tRm5JDAnXFrpF1znsRgKCSM99atSYYETYN1Zy",
  "key22": "cGW7CvFjTCT9MsPBvAJxkWiwp5wpRtYkUou8GPMYP2Dm2mPbaywnLeyFJA4bp3ubDb4EJPQoxo8EsmaJDX7CUsX",
  "key23": "3sFQVFQRGuXfkLErDbq4mCWs3tC55ruPkVnsdXKgPwfbWjqpD89BKH1m1Jd5N7A8hXwsjvopmgTjj2qwrc7ZkqcU",
  "key24": "4Uy8bboxU5xLPr1xKqWb6Vv8V7XDuEq7eQwfEiJ6WPEZoMNFVXPqo54MQgwYHRECv6V2fnU6miH52X8i14KMizLt",
  "key25": "mYYAyThSZddYhRGuenYne43jigqc97RYnxze53PsmcCHFwfw3QzA5u5P9o7TKkZpjDaRUXzSTRH8P8Z8HJnwCeN",
  "key26": "M3L7PGBbqiysirosNij4oMoZgQ9KMG1DQVftcK8YEX6TG8TbLhvnfEFpEQJ3de4JTj4ktkC6qZp64CJJWVgRryE",
  "key27": "3fYcmg993Cv1p6ac5oYkALVFA7V5gLUoz5NSXo2ubgh78NofMyQDXpSa6kUzFmjYukgWrLaZRm1v3FG9q7HR25Ho",
  "key28": "3xnJ5g4P2dBvy5kbciFD471xhmuDHCZj8udepJfhrQeDmfxBMgv7wRr67YAffTccCZd5RkVq5x75gRjhbJALpqFg",
  "key29": "4E11UnTEnJK5RAgfX36j4uQkVi4NamimMLF19vxQLc8M6M4t8pTTPiwXWd1Ehm4poeip4ByeomLV7BUYRLPUC3gW",
  "key30": "3vm9iwER1zDSPkGTkRkdg91EYGt8KkWJpwgjzHuuyqohc95Uv2NHXwZ522rytXm7CWjb3DPUDVBdATDf1JFVtmej",
  "key31": "5Qc5Vfhoav9NsbHc91WTUnfu6cntZqsbtEFRuEx6jQ2cD94MgQLcxUKoDQapo5QcFDGzTm5BwCMa8xUGwMAj3jJ3",
  "key32": "5diCWQ7t7fbrgZS4EDpn5AJZLZvNLTEqXDEqwemLqN6SCopdmAiRSciDXhpiiKFyPH2zKXCqLSkybuqKK9iebvUf",
  "key33": "3HeDttG5GPEdNcMJwSxdn9BZL6YJphiSJEtSTCqDY6jqNkaQ1rv4kEMPHhqdHct3nFJkzgDViFzvNFn7FkhF1sCi",
  "key34": "44kxpdPGzTnEJwaeTZ65EE1CK5Nwwud18aAT7WuDiC9GdfvGLCB3qQcxvzrxBCgXs5z9oGCVz6gESgo1xd22njXV",
  "key35": "rLt2LEmkEkLLNP2qRY8YTpc2qPgkLenKKa2Dja4JWcJJDK8hmi7mMpvfmLHaq84tHWJ18Hq6BxfmYB748M6jCyf",
  "key36": "2oJG4auC3EHmmhptnM9ky4hk7qEB1d7bYvYWfDG8ygXNnR25dXLMnjnR3BjxedbZEtEvQ7JNTMhXLfNEJgdjzo6X",
  "key37": "4i8ZAMWngSRzjMJwKj3Jg6DqvyXhBzwy4zEVkfVxXn3QhRpBQbe42yCD6vq4pGCmaXzj5vP7zQsYka3Sw3TtP3i4",
  "key38": "21mUqQYNvyauu6i2rQby7SjfnkVViudMNnbUA4XuxsRqkrsDvZhHQpfq4aCVcmmKYtxcNrxMFpNffcXPziAucmS3",
  "key39": "KHLTbrJUggugK2miiAU5F7BHmj4gtZcT2km179K1VEM5Diiy31A1n6jJvUVU5opgTG3pxMg3N56yfY7nadGXPXk",
  "key40": "3FXe4KKSDLKsX53vrNUDMGLDsrMVBNpZVtAnjDv5Fh3qBvpLpp99J2VJ1AFGPZVEQ22y3Kxa2tCAJM7eTwkXVrG9",
  "key41": "5CXKEndEKgp4QNoTQGPevtiLvfv3vCpPLdqBRmTdnpCqeYpxgexmEV6iQXWfpjQ2cWnoBvYxjYY864gEqJhDcrKq",
  "key42": "2e163iERmZedDRUsW2PcFYDH78bywbLt5wLGEJdNbZdjZUokpxuhbachvo2xPmvonVR1r6wWPeaEEhHL6vKxwmyk",
  "key43": "3nNKjR7w8EN1qZucYph5sfbvFWcBovdM9xCtPeEN5ob22jb1iteUbfkn5bQh8xDYcyzsDyxxhbB8hDfTrCHKxB2W",
  "key44": "3i9DrgfU5fCRgpfyMT998rxEtrpjN9RQtkhmVkV4CAgX1E7VwvgrS8rQCFu57xG8udMzhHH14FsALFL4Zk2G4XYX"
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
