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
    "5fHHKJv16xrwKHHdyfntsUbAHaGVKXyP6TrX4GrqwjBCP8jH6CFcC5NUFYtEBFK3VRbrrq3h3bwvQtBjPZnFVpks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58JD6UXCkdyTaFbVu1Tiv7Wp6ffvaxm1fLy18RrH6KXspTan84M5HdkgmWz3aZ7cbL7GqENhDNGjTokwe8rczzM7",
  "key1": "2GzfGW66Hw1JYcCBGAJ9j2qARFdoXiw9tuTfunnSVDgKPQAvJCi1HUjMYafZbxmNVvQ5rHbewwjBMexJqkaDp92w",
  "key2": "4o9khJDAadwmpxQ4s8Jg1a7ennW3hgAYviytvH11YVY3bwiyCusrUpHMteT8daCboDDNmH8Dg2gpQuvBuutdMvup",
  "key3": "39jgTtqkc6oLJX1Zqqa5evoWFvyocgGzqkXbBqnT4YRMpQBYnvhG6B9TU53oGDRBWckpCHbGmy1BSCBMZ7QbYzPD",
  "key4": "B8KH7dQCCErixRWq2SQ3i75UxDZbEyJV4dm7uD8tdpiAnQ9c95DEaovQgGEngdz3mmP2p1gVdHRzvtmpy8wzF61",
  "key5": "2iDbHSYjV86TfepTXM32ZCbJh1pHWeW994PEK2LAXndF9Zkv49PVuVvwJavAhn7Ry3a7AKmUCvw89yw5kQhePpNr",
  "key6": "4VcU6GTMQyogB7481teGLa9MyYEQpB7g7Dp9WSvSrbPAeuZP6sfF97jjJPdsNME919cm2Udvv46ycgMEyjm5S3Kt",
  "key7": "61WLmrajKpUe6EzaqxnJE45iDXbCuX3Gqx3dbjSUaVYNf9VREg5RbWo1A5cp6YZ4vPi2x2PXCRGzDbRGRcMckUaq",
  "key8": "7Q6f6epPjLbELNA6jg6JxAA9Cja1eb8DTSFLAb1FMEZBvB6NPxeuiJKmLN6zbkEAnZAXjSdNXrqVvkzggaChBGw",
  "key9": "46HDNM5GAspoRUYajomDdgJQYhJrGLtph6qiB8mRNmv6SrxRJXkb1XSt6SRPcAxnQ6UirLtSpxjJJGNRozAbRhR6",
  "key10": "5r1ig3pFsQeE6FvheWZYUd8FnMwRW5YTfKXzUgWhZhvcTLBsHhmh8PqtW3XSC9A6GLcyJxubgoVG2WFi8G7t3A5E",
  "key11": "5hRP5E3MTfhMwPQaGfXFYGc5hgu4Dp4yeEfz8i8fsXMY6FQYh3To5HvUswe8h3pbNsrxDqqT2hRNhiSLaADAeYRY",
  "key12": "2AP3b7a7UvPivZznchabyKhSFYwUWPSw1VhiAESGSXJY9qUJ6KBN1iUR7yjkVUWv28ncQgA3RXem7EYyaBiRohZ4",
  "key13": "5NbABNoDN2WzQiaWwj1zrpF1YtA9ETf2FgP8xRuFZcTdw298B86M1kH1DsSfMJExcVv6PN1LPsuB5THwNgdwNR14",
  "key14": "3rH2VGSUcddb5Vf57axFwihyKWRPmMH7fQJNk2upQZRSVfeCPatWr3oKqvL8Sxi5kKi43zQdzPdjhmpk4ers1tTE",
  "key15": "qkiKStEgCK1P2TH3azaJhFiKb67jy2nBgcsyZzizcMgL3NKsCViNzGNPgtMZDkeKQFuh7qRfYXpGnfuZyni7U24",
  "key16": "43k7jhALhWQbvSFUjcDeZzoCcHFZSdQWad7ccsosw3Pxfnw16pdJU7qp16oGMhZDzmSnnemNz6howFDMeMeyLfzH",
  "key17": "2nTcrD74E53akPKCnDVqmdBmpD2U9xky9vmcDfPh4z73MAcpnKB3sUyApDDub33eUtZcKwuDZcJqSjBionRiDzRJ",
  "key18": "5f9k773PnPxx5qNmiqjoN6LLJZMTKrvfKqMrZAifw2z1ZC8JQp2QogAstzoEf9jJeTpVDxn5eexkChCoaEU1cDq2",
  "key19": "3uwRjCYfTAgwuT6i3QyJZvv4Egir5MLWdsTZMBjqQLigbeSYFbg6XMdFdJdbGJgHC7TGyoPx4zkHfaSAD4sp8eVv",
  "key20": "51ZUDuPfw4JHYjEEXa4zfXkoontE53kdtUhqLsnh9fyBZn2NEdovqaE2yDRG5KZQvpHcAQtrMxMdofvdY4mKWwWF",
  "key21": "4nuhQvPPMwZBkQpmpbEjNnTQsjtP1tzQfHEg3UGiZWkezj1Z8CWS7tHNFVhN4oddihPMGKa2ht5kABFEWiQnbVvq",
  "key22": "2Zcd34YowzKaEg3i6jR2zwmZCTVoU11N4yRfRCTwdMSng9tQrXr8pwz5qiCvtw7LRhY4JrZ2Ps6Pqmfs2qpvspFB",
  "key23": "5HXeUE8bemdtAZzhqKbfuvLWXwV6DKhcTsh8SFzsBA3D2itTUusjwDAhwWL9gG5eJ6dzMfq3qLyAtHGFw9RfpWHC",
  "key24": "2GTEymh2nzNAUWMp578gCy6v7okC1GQVk52VmVbappmgbmrLnLYiefGZinARXqYcqwH8MrbgPXRC439bP7dbsRWu",
  "key25": "uhbt8spqJknv4V1nuercqiGtqFRjhSzDbAcQM2ZGGU3dXFbQdZubidUn8FEFrwZNydg1zfWuVy39N5eaEWum9cC",
  "key26": "3CQudxhVbJwLaBNbBWNxFxn9yAmNx9H7ZgkNGQ4qfJbmEZpV7bzQ9esWwcVuXNYZTYNAVCChERnEqJz6Xxnf56om",
  "key27": "4eWrzhp292HdPDxLaPQbEqfRXakdwQyJAQmRY8BSP4r6RjJsswe3Tw8gk7iJ1ZJtcNQXSsaH1BVZ357heQFzhP9X",
  "key28": "Af9Cs8eVFWn8JvXgQvaAfJ7ofuMzhYcfp1oNXQCErY1Uh98yPvSfEbK1KqsEUXWGoBdCEjJpw8w4igBqxTqX57E",
  "key29": "3JNjwJE1UV3tEEyDgRs1qMsc2odeZCsBZmPVhmgJiwHpkvGm51dY6bZdLBkhR8hZs7PaNK9furskvA6ry68DqPdz",
  "key30": "2orpxTUCC9yHXY9f7b4Jqps1k8Xfm95tyvXuhkajVk2jeswNXRpt99caKoU2VNFGCRWc2gSGR7fFNQXf7Vwo3KA6",
  "key31": "3tF89jBbEfJ3PAfxsVFZ3rJuqC5F6eJf3apFPyuiXzhxAhY2375kzaXuN3yagCE7q2HzUpMLBzPaUxLXzs3ywtXL",
  "key32": "3RrCKDbwkhAitqvTvEBeEfmxQ4Pf1jsD2aw4WoAc2K2vPBJwCPbgSD21LhckeQKGk1FjS3E1ZcydUi8cRfQFMWMy",
  "key33": "36KRgbq7Y8YUZv4PvMSMUXLbaaBjHhbMfQ5N9vVZmpyzujo1E9BKhpGcjt5mFt4kFQSkVbLw7wj2SRbvGgqH8vcz",
  "key34": "48ZrDdqgqMGiDZ8rngZbQzTpJsfFQuaqqt18GisLbhSWsyWvvGQt3LHGvb51uCExKoXPDF2fMyVy7BKMjmE5Ti4y",
  "key35": "4qq9AaZrAiFvGDKQLm6s9W5ZmmGaiHNu8N3ARNp2BV7DRZb1FajdzHSqeKh2soT9TpdXuyXjrF2WZydqvddYYR2F",
  "key36": "4qnKT2EYXdKXCqQDqJLzY4AtnDyWmcBKdiib5SczLJYjwmfQVw1AxbeF6LP1KTtb41bhdf9qizmge54aVvJyzJpz",
  "key37": "4Ygd6a3NmrruRV3RuEDYAaMCkj3NZL1EyTEGZDbTfKo6G4fqqw9xnYh5qQUGibyB9mGmgHhgCPvfgUn9aFW8SJXC",
  "key38": "3Kkaz6JsBhw3cPyYrBmkDthBu7QjRSegqYnZWrZwEKcXv1dnucMSu2YHg2gRhDfLJBCJowrBjcmhLaRD1q6whtox",
  "key39": "32rxxXbKj57ireRH16DTnPBMJubtWPwHMZfKJco5Wvp64WwrfAF532SpL6LSUCxFQJdpdyrCpvFhzP9GaBnwWfmn",
  "key40": "5F767Tcz8g2qg1AdinDxxGzS9xAdStRqDrroRXxhFksPBuYtAeSR9YtTtMJAUmDszMwidTSRJqATVV4yi1R9Svrw",
  "key41": "2GHcCjLKn7EnxuiHjUbh8Uv4aqmSwVXAanyaTtYbpp36RJyKyJhdp2zg6fVArnzNPyKm9E7qKBp7aiBB9GfjH1b9",
  "key42": "2sMLYshdCJj4eD2NHkZKG5Pf3WUp6iBQAwK44orpEAJz3i4pDjn2m5xJ859mpsRqQqRXa3y8YpW3j3yWEESng7FT",
  "key43": "4UjrfUroHd9qsdT7SQ29ss4r6vYPXLwawdPpF4HixyJyzZwTG8zyPDRCcftL7FnfYixzb14YrM36Tweoj2T1c6Na",
  "key44": "4be9QxBhoRvvSSS3zXVdh4PRec2SGv4cTLv4FpxTvjzUcf1cNXSR5DR96iBcop2GwYMuhE9Fu164y9h2MDT47Ze",
  "key45": "3PAizc4L9mXUta2jvXhc7PuonHVjVrBJ8pmZdcrAQaopmWwH7kNPzppG1QLvtriwvw9rXCX2jkztcc6XyCqBgs1i",
  "key46": "3YHfreJxZKSqdS4rDNpc8qZKEZaibM6RtK3cYcAhbasp93pT9Jk4HzSY5uZqA3fCRZjQyAcYJRVdFJ9RRSTB9FMC"
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
