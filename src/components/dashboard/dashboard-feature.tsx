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
    "45DqgFXVokxKGpKFciPFNjgvh3s22P21iAa1svmCw9HHVJiEzHL1N1vgNtiPPSWGnLyPQnoEPCA66AGCaZunVqDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4inKUvUCwi13XmfJiPFaWj3RdbNFRAYDZdkiB8k2kr2CCczpiGvUdYDL2f4xW4ebs14xWUgKP5GuRHtiSQphn1xx",
  "key1": "2CkihbGARnm7QPXzt6p7ZMEBQk5mkyrDGC85QK5yjoWDi1unYitxBch6nmjNZ1esXZowWKZNsGK9TLzu6oAngCcH",
  "key2": "fULXXAKDHt9ZwF5P4eoWdpeYrLsBXnjzBnkKZHjw4NeDrWSnSb96qCwSMnHDoUJjMgFmStxUdDBMs2fNRzyXqLb",
  "key3": "2Hzx1ds138GfSvDBexadbpKZ5oVHraY9pUNWGvhKZ8Msb1dmKodf5YqW4NRe7VRY6EVU1CsmjuzKiB9pyfa5h4q",
  "key4": "kX9gF8S6NQt1JJxxX2XQTmmqkT1vA9FDwchgxnUM1WEAzhYEa4Z9bBTSxu282y7fy2ayxN6cxsdsXkHjXs75LsU",
  "key5": "3qEYoikED9y6qzWExgY61YEFgFNo6RtvqYNP9ZE9ccu168tBiBgVNM3fmokyu7w7tBHVdFe6ugJAgMRcUD7wszKe",
  "key6": "54w1BMeYnrxNAwEzp8KJDZ2jJo7rAHup7c7wrjNdC7RssTyDDqEePDLqmZ6FadSpMREhqHjWvktLcZjfYN1pkEus",
  "key7": "4rmmyUm3VyGzsMg5LjE9Aw63um8R9n59RHYUs8m1bq6xzNdRwHhQ7BRwHvSFgquxQTcGMF9kBxmP7uWWp6U6jjsv",
  "key8": "5xKx7nSEdm2LJCPsYGKFvrQKRNx44bYbicffkkXZN88K6yyGBawL6mwvzSRNxbcAoR8yBzSi2fTTEW9b9SHc3VhK",
  "key9": "GZ8QFSe6jjmGnzG24A4CXRv62Rq35bMFMJ1T2pc72qXBRYQ4Zjx4kc7TaczS1bdX8Eq7Wbvq94s1jatMcN2GHJj",
  "key10": "4ChoGVRVqk3D9UR4ijzUJ3jWRbHtGJX5aou7iYL9yvFPhuDrxJHvzQVeBSvGZpsy7Qfco7XjkQGaBW5iRjJhLAem",
  "key11": "3nmo5GrApnZCzfJpbC6fmFTUjqDUQaN3UCCnqYPPw8udRf3WCm1FyhwCXnrYC2xqynQJwAYkPM8QmNDTzy67iX5r",
  "key12": "4F8qfJFLYDtaRs7ofaFN8T4ZZ4Npa1kXTDEmiQi42vLRqmAKNjYRFnvstZ4w6AViBxHsfVkeFCY5PvGgLVqhaB5d",
  "key13": "4Zh8gZwNKQbffJMH31C8KGyeosiaMtzHa4wXd8EZrnvxXadAEF9u3SxS8emyhjRWba3MaBnWG7dkeeZWrS3PJhtq",
  "key14": "bXCvKCrDyKYb7N5V9fFWsQRJeSbJC7tHo6XeJwtqAYPJC5MXH1Bvi1WnN8wczKi2ptArgumKu1e29bntfbqnW1W",
  "key15": "5UZDMBb1h9Rpo9zFjKKaq861UTdLfJvFyz4G8pgNgaAC9pNgkDMaLnBjfB76wUevHUt8jyeE6L29bFg2Fauotjis",
  "key16": "2TLamoWv5KyhGmJGTKP4E773GR722KSYMaxWgoxrfJpXVs2Gg52df2uEDopheJzk2vkFhGCdJXLvvxiMJWDXppX6",
  "key17": "3QoJ1bY2Webf3LWnR9NP8PK2a2ALaNd4H2W5UJj7kBedVzm7UUahYYhFVFjTD9Y3yKBWjd7QdoRmydXrMfaQx349",
  "key18": "4N93Q1Xx9j7EVt94Adwe5K2XpYUqhsUfjzirDVGePxTxw5471PJFRvwLEv9M4NYCTsUNRiiJXGX9pATTuZquSM9S",
  "key19": "4V2VBFNHWD8zaWpmg93W2oNDdgoASAH2neAEZRkrVYCFDEgy7qeS7GtbbS9cdBavHAPtBkT3wXtpYzbt5L52D28X",
  "key20": "2SHo4gmRCQQnwphjnz4iu1XhqYzwedQn1h4knyfGsVPZ1UpBEnnSd82ZtYc3hBf8x3DriSKyYsF5eZJKrhMv8EV",
  "key21": "4vXhtW7HimD5ag76nCniY8hGR9Ncr1Me9H4aK9cTrwmMMvC6qRdoLCeaxShNxqAsNM44uBaAFR6MGsgACY53op3x",
  "key22": "5RqWdd7WMT41HJp3NdhnGKHkbqu1wBeZozDHh6JR8ipi4asFwHces6QVAGcShgffSJtu6255rei1BvtfuTD4yxM4",
  "key23": "5Y35QuaBGaWffHarjnRzer1XwHzxaaFChwn47iRUHQZnvKaWasUN9P1N7EQkeFvkdDHgWaTxCaaAaqgTwpTSt8JR",
  "key24": "3nLPfZTutPdoj9S3AKAUnWA5DcpUSFuzKqL88ZwW9QD64S5mt1Unx2W6dYumVmSVe5pH6eMzUoZ84WuBh21fVjzk",
  "key25": "4SYS213tbz1BShomFLDHhgbKwRCmfewBPukStowLWGiSBASibKguPLjyG52ooD8KwCDZJ3YoxihsDpze4JNroWKo",
  "key26": "5Q91fmwJ7TbM9Aeb2F2eLfDuyFawm1Ds6iNXTB6GXLQpXnWA4s1GyxuRWufCNEM1KgEgYgjkKpSWSoyYhfYDm4v6",
  "key27": "3cET8ShVvdT3Ki2jiXWhyJWoVH9ebVpdZjB2U4oKxX9JMWbuDLtv6AVqVHHgpZMSdjpWSfc5NWqwHawQGgMR4CXy",
  "key28": "sEsxQHbk5RDoJYLWyFbUG1jWgX7zFk6q4VnQFPjsJGUBu3rqajAyaBoSRy7XHxdNqHcPfuRm9Fsy6QqmQiQB8L2",
  "key29": "3yNuS5yhCpREz8JtHRJ9M5bQ7SgLDkESMmuNShL6cKq53qz6xTr18UQgs2oJjG5oZW9v3YtJUP9zfxZ1zEZXgfgq",
  "key30": "4ZBCDRNBmaxnZnh8H2jXfjzGAoy8VmNN68V53ycsf1HZmbBVBDi1T97SGSri95bYfWTbGByf2fGLW8R2W787gP5a",
  "key31": "5EKd2vjhYMK7vfUWpEB3RxRQuujCzAmnt231LmLyxLBujGnsh4mKYuwfdpshxrDCig5C6GQ4sTXzbTNitnWmjXjD",
  "key32": "PiWJs8gXjzwnGiRZ8nsUGS5EcXY8H5T9U3UUFEqNwKy5mn6x17tDAtCtJJKRBMwgDCYAZtJBEHit3HZQNEfSBKu",
  "key33": "2a4WPvcht2uXjhhX9bQ8FwCpbq8uA974NSA3jffvR2STTAdqhEpVrcdJ3n4z3QJuZoz5wFWsZDTHWTcBYApfgPa7",
  "key34": "4xVHW9Vzs58YDxTXUMiwm4krArJp1i7EhtjU7uxZ94o2ToiwccsskAJzTuZtMp2murDjqvGzwCymDhSwvdwJBL4U",
  "key35": "52zAfR72FvYrWR6jybbzwRzp8xWmmZ4ZridE1kNEGpntRfML9i1yr4dZjHCzerHfFkE4dttdyoygU6M5hYymBi24",
  "key36": "5R6c71NkKRqbor3DrinybjKqrMVGokRk78yLGdkJJci9jyAgg75wD3iJG7sHh1cL5wrdykwtsapcbuqUHiCCpEtk",
  "key37": "3dAyYpNZnZG9A4qsLVdQFkPFkju6wZBVjSUNZxKtKfoqDk3zkSuqqjoyQSzYxeZLhz4UgG6mCgz9uF8tKQ8L6ALd",
  "key38": "5nPBM2zCDfRwGduY8Mzvgjaft8ubPpCNxYtVhbhm8WcKUDAQMMP3wuuAJbooEP9vWN1Y7XbjJa4aeB2MaRRVAdHt",
  "key39": "329AmsnKbohYnip79H7qN4YdNzbrq84YBJDxZaDEZNZgZu3HYvnPWVaei7DzHiTZ7Yyo15je5fg4rkVev3pK67xL",
  "key40": "5hMLXebbUDCnbQmX66yqoBaWCWjnPGRoruo9fj8vgqfuRJCT7a7fWzks6gCegvLDsxSokqBwhsYCntrU3FPpw61g",
  "key41": "2gynyxx5pf1L2GLuRXGDNUfuE8edj94Runr8vnYc1wutbvUMgaJAVZXoty84eoMNwuSckaLGEx8h3VHR9BDc2yRF",
  "key42": "5Rg77bwdR5FZADQdE6czkni3yepuS5QCsR9RTsVtStEXiyr96hZQHm78vGRGj3ps3bjhkrXh8doT5u2ZfRurmuTc",
  "key43": "4EKoP1Jj2sA6rv8jTMMfmJWX4zrM2p5fC2DSoQ466NeHADKkDsaJw5BnK1XX9qYdNpBiqqovgPuFDvBPNUiqNJsS",
  "key44": "61Xu61JCwGjMBhBgg4KznbGR6wwC7BhnCanBZxMV5J3UqU3autUEZeq7PRKF5MBjxQWw1ihft734vfVyrXK1ojza",
  "key45": "5reKnxqdefzxLZpaU11FdpX1f9H1bQdv9tEeehHKqJsKiMsHBoJ1PmZfEHB9fcDpzp2TfXUZLV6gWz4qSGc7PU7m",
  "key46": "5QcuCzPu6ezpi5yDKkRUV8VxiwpqHHBwxw9SD7ZN8N84A8xaLvySCPQ4vQJQb9AG8u8Hgho4ZCEM2pfu7Ta9Qp1S",
  "key47": "2saae6tjFoTrDwCLc9ZsAkbphQZTYqzusaxWuQHUmyf5qmP95bHfzwPdJrhWYLo1V89sQ22WVgc5Ue2crUUBZ6pA",
  "key48": "3yGke9swo1qDmx6tqV3uHohKzD9Ka2MDGxvAZkdo7C4XMoYqDzvgHYvEwzHp1doVu2H2ns9e4Q6ryS9AgWfoPbbf",
  "key49": "2zQWb2z217NUSVkriea8cEjuMEE4dNGSboLTvRr8BPhDpMyei6Ad38TgHmyRWMLPfFw1DQjU2Q98aBh2fPouTmJe"
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
