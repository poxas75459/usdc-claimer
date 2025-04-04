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
    "4c68fuTxxm9piZaY9XBoEjzMduLCJ2PdonyMa9eQjWVSagjXxdDr65Gr7Xv3yzS3dzVRMhcCNPuCYWbgASgNKguP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xC8F5z55QrZHwStJRPpVxLbem1LjZU5xShz4EARMnWySp7kYnwwP28RvJeU5XZqNahqRe493rMCgULr6jNRzKaV",
  "key1": "3Nhz62utM454sYQwrgrBVTFeYQ5uUgU7ADkoux3ookxEaQ48XCMCGEtWz3eiY38modiLaeMvfANpXMPtpYsB6mAd",
  "key2": "4rbDpPvCvPWa9skQdPphfzezsQgmddqzSNzmhikCCAx4SjpdBdk5Wju8qnns16modcxU7FikSihcSU8HXSXk76WQ",
  "key3": "2u12QZ6kke5xRhDbSqFpP8darxJdjVnJFarnLCL1M9xL4vNpDrpFFU9qZbgt9VkHC62ae14Z1fV8SsCPo9Go48HW",
  "key4": "4EJzDcrW4Lpd2zRHAGU7efyHNcUB237PPKxoHLPjSpuaRD9D9C9FL28xmuWe4ZxAyBLEDarVjusw8Wy9u69sTF6M",
  "key5": "3cmmooiE1QPbW37wxJxSsjW2b2GHL2RMjXJfb5WUVfT7eGkrN8rAzBPUoqzVxNiejLPakqUkGtpDeje6P25QP5G3",
  "key6": "2nnNCPR5dmH6XN1XQ5f34aaefZawRJLZ93Dgk3iNLfWa1AozQvC9gFzY6crSGYfHADRavNcacePBZN62WQSL98Fq",
  "key7": "3Y1HWE4b7m4c45ScKmthCszbTEgLKJPVqssnr7UNWrr8aLJeTL6LH1vDv6oAQiVjhbMejcKaqNj6mAEDYS9oJzHF",
  "key8": "UNEEZ9VucVV6tmyNeuNBDGi1RgwsCtapJFEWLWHcqeJYNupdxrQ5U1sgHk91h4cFv6S1V8Z5o8MBcoV7H2BSACx",
  "key9": "4HiCzV9iwkmHFicA49G84VnrAKHkUmiU98SGe5rBifdUHAAWj2EH1QGaLLFfM6JdLqZcgzaeaTx6EJndVVsHBkUe",
  "key10": "cguo7KLJz8CAs89pqXUkwoy4qKNp91By8d5E7dtshYT2DRg6kfB245SsdavuUZ15EFaaENKWfjV4sGnEoU18WeC",
  "key11": "3sC1z6t2uiuUTSFfMh26qjdYKWopZVGQ5TD2gtg9crbXMPhWEp2VJf3MujvN5Tux3H2bGzKaiVccGz6j1VVPJcWJ",
  "key12": "4TNYjR73VSuwriVTzTv79wAh71B24mHF5u3Ctapt893X3FtjkqYGHAsHkQx3U1cD7fN3tibRBDo2BhP5Y21nHa6g",
  "key13": "1NCGv3q5gU1LAgbEZWGJTzmBpzAefWHnPDp5VTzKgQ56i75AhHo9kNiUacmgDE8Eu9KzaH8Cvkrgz89iHZyHgrG",
  "key14": "4X1FvyzW4Bp5a5wxxQ6QEaF42EpyrF5xQZ1N9RuHppzYDQncMYkpxr4XKxCffDf9pkopNbhgNvgtWQLo16pd7cyB",
  "key15": "2TSYFdsVkkfKGxnEKNm8dDqr6hbyJeec3axowp93fcef9u8mYEoSpAkk6c63Am1NSKd2bLbqbsMsBHqVzkgcyh24",
  "key16": "dgHSVo5aHRoNh6heHAu2MZdPaj59sTArMYzXnyRbCPghCfywtz8wxSzw5WYucFrC4Uqc1u17ag6gAjyH47yRHMz",
  "key17": "dnu6PCG34GN7PQM1JQHDMSV2GKy3VZpjqMfYjx8TnKi5eSpqizQ86fRThPUkSEtLQEUt8t5jknrLwZYuDMDVMaG",
  "key18": "2s82J5Z4DYGjj8oyJrp3UJp4TAC48BQQYuPZxwsBSQH7JpH7C8YFVaa4BvA5hQkWYkCAq972Q6YNCeJ1pURPho9N",
  "key19": "37bCxGosy9NgYNUj3KocKBNhNKo7Af5xcfZckgUWZvxnn8i4NwWUH3SqP6497xWMmmTBwhd4jP1QU1kfRhvYRN1h",
  "key20": "5WJyrXQPGDnVHikNUamarsFTHetr5WtC4Ym1YNhLXGqUWaj5g1L3mHnT8akpWxfAE7YfzbxTEkBeVK3beKny6ZwH",
  "key21": "5uokfwCFprUYYas7Rcr3qsSC7Lwe1xTUcyz93LPpQYCmvPdCqZKthjJGBfQkvFTvEX2zBFtFkkvaoBuWTy3YfVQw",
  "key22": "2Kzga788LjcATjmFib4Dye1DjGbs2qHEoRyn64ztjXUanhXE3dtwhYB2CqmPDVzLbDsedbvzKDiooxHyJgvffe1K",
  "key23": "5jGJPzhdvMpEbA56kDCCdpXFrUvncSoDJ7SBcngJhrpUonEkFcvFcfXGcd8Wak74aDrU8nwvDabiyphfg9emAJ4c",
  "key24": "3ktH2TwWJajxYQQ1wZLCX43mJRFchqBQ2aRfzSvaAB79X7Jv2PcAHrDZxRET1V1ayzANuNnn6YdUGcDyfAeCAvuT",
  "key25": "5qjrmGDPxocW5Shdcj2AnSvPQDHvFgpaCxtRPsd5YbXZqMNVAUGfYJPC6KPFCxLrY8mrPgWMwhEgmCXHrDRWumgJ",
  "key26": "3nBWDkbpytRvrCje45cZRxctKLsjT6i6ppyWpKA5pDTW1KfipTyiW1TnRuxBTjoaD26WJn27Md5pzksgcLKGFPmo",
  "key27": "5N8yfB4s1uLNwr5qknMC8zaL3X2sYUQ2PwvYfHTVd6qRUjZCbUnBYXBmuyiYX6BzynKeKoTgFPjdW9BLpSKtNjme",
  "key28": "5YkTYWVzmUNjebxFSixMr7dRApsf6y3Gnqxb5SxquhYD4mMThPESE9v2CWmuXfqXj7W88kAxbuHzd7asaBVJSexm",
  "key29": "3p9QqDzZfyr1jThqYbuQb6hfJQ3UfE2uwWtG49U4CMLJ2itFJBhtYim6RDAxA2JhBqG6MEMaE5RXKNyFWY7QkM8u",
  "key30": "5jbLuVBhyUCi8mCDQSc3C2j4zEc6KEVk6wtNnJgxoSEXQCgz8aV9twNtgwxEiLarGtV1bEzZFu4nyAjvgr1gCBDB",
  "key31": "39LZU2ZicZwAiRRkyWVdWzMD3uBjoyme4GiawHEKUiv5XQJqChBrZptDCwhoh29WXKQrgjSucDVRRGoFio6MLXfz",
  "key32": "4EkSgJ1hcDPiGpKqwQXCx1Zj9Y5KC9hK7nHmoHHe6YGEFHXf7jCKwywhh8YqbtEwo7K1aM54trHqNHhtYtvsDbQo",
  "key33": "5BL48ZYUBHG8VpNvrpVdQtAsG7LqmUgmUoZ9ddoQ3j726XNE8pvQ5kkndYd6iyfmfWDeapyxxf2GBTPZJfzNYcoC",
  "key34": "r3eN8bFKP5GiefrfxAUBk8uWnBT69bbsibyuDMKNouJVtGenZRLGmd5FfiJi2mEYobNySFAWfkA9hPbeF2tWZkP",
  "key35": "5Xdu2UA3dwmHyjCbYUFZMbRh26NMppXCYQCCAnLZnqVAJrhPEAL1Hckj3Wcs9yj9fcbYZLDLdPpeHrg9U36DaX5Y",
  "key36": "2mU2A3XeQxC3h9tv3xXe6fdvQdP8Ynndw1LBDaYLwMqT2VQjh6QJHoYVCy5ZBtRetfcmKP19MJ6cDG3L7S7QAbDt",
  "key37": "5d5VFvN57ZeeLCyYAhugj4WWzEsrmQo8ySgNP45PzjtEQdbsdLSkq7kHrgTa6xZkSqvik6EZorU8YLdVaSJzZTH6",
  "key38": "2nZ4TLvdFqJ8MyDoV13PgZkYi1nZpgkaqaqEkEQwJSDQp9PweuoZEzx9C5v3n7Evzy6F65pBNhoMuK93cusBKqTW",
  "key39": "3hB81pRUtpMGu5yJx8RXNWS8bHw3EA9tKsVuAeNNeF2HTD3MVBPQa1qJqvfQwYbSoZ9FQr5w2eTMCieayqrtatzq",
  "key40": "4hzPrjjgMRK7b86ccnMxTvvDzoHxxrCAXbsiCabohCruigupRXkBhhszYCKra8o3qYExpq6afyyJ8A1cVMEcsdzt",
  "key41": "4dw2S6YDLuch1ByEXqq9j7EAM3whvi52qHZBrLV8yqjWh97x8oaDxP3XCZMh8UXjQDSSuyjyUgYcyL6dzzKeY9mK",
  "key42": "4w4oYzQTHcvdVLNedG77VYuUCVCWfRxUVtJS4iQKVwcTxzn9PocQNVRM4QpbgAnhqyuYDcyJEWSMmkBDJjedSQdY",
  "key43": "38qhXVoS7zCYKajHRAwbARz4uhMVraTQP8jUkUosjEvdmDJrALm6Lissbk3Nvcp1DtgL9QxDrUxQLyHnf1Akfwp8",
  "key44": "iUsyej73PxjtPZ3cCM1JWjJL2xG6svRceiXVKAEJ4i3s52TvYXYWeQkoFBWFzTzSnCGryu51rTjz2YAYeLEfQR8",
  "key45": "2QgVeHhknHbfWMFzGkG1XoMNSbE6LdHLYc51WbCCYmytNdjBJ6xKgCkvGmFyhzyByFtdKP8Ctnrbt2Pnfesz9Ho9",
  "key46": "54ouu3wqoX56Gbh4dACZ8apFjEQKFjWjQWvf4zt4hxnPpCsHFacrdWTtogNh6VMQa9L5sFp54mLUJSPAeoedZPYT",
  "key47": "4yF9femTn9vMMqbjE5BRE2N4FxamYfTej48ZrNENSdXuoHawUR1zJGHXrGLwwg3DysGQeY3uFgxNFwyFVYRvWfYx",
  "key48": "4m5kZbX5FvE1FPu2HRF41XtLaMJzGV1XTAc2RWTZnZ7sZRJH5tbEuhYkw5qqjgi4bsAvUd8dVUaXvFsb7so3Aces",
  "key49": "GYRZMhf4VGgg2uRW1ft24MD1LRAvPL2HQ9c6M998D8w1o184zP4PoxmPB5cwT18pq1KmnLsGdTJsjWKG6i6zeWQ"
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
