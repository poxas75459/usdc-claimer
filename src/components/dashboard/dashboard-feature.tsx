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
    "4vrj4K4Qphgrf7K7Vv67KdXgkNYJ9tcXfNjzUoJoSitYHWrTHfyCstB14XB6zCg8Ag6Pc6mi3EC5fFVyTq7nVuKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EXsAuXWUe1QcT12UjNc2rcTF1JGBwcjCNKzptSdfG61DsATtZNxCJkzrh4ctapf5wQQ5PsmNpWKmMPBDw3StjNR",
  "key1": "22E3aYge8VWgNBPKkp9wK5Qoo5SU3o7t8TibmTWDLMqMkFs6DZwnvYmFyJx1486oWZYMvNJ8xzkqzP9xMTztJ7Hq",
  "key2": "4oAxbcie7xyGYNNhNgMLGsDYT7z6Hbr8wc9Xdcjixxf3Z4VhzGtj9aMXEJbjXVHJwRurFDVyjz9sK5gVSB4soqUD",
  "key3": "32DFEwPwng26wGjpGYmmThKCQ3QLnUNS92LPHGM58pMHqda3yoUnNAv1r1ivhk2ybQKF4yVjxSdzzeWB9dEzsH1y",
  "key4": "4uSSrTdfxYvzA5dZacR8h27PvaV2aSSaKz8BB7edYn7dQLX9m5PuWGgiv2uq1swTFDkZtR3F76yfmjqopubwmEHZ",
  "key5": "3FTimQiByuFNLgTR6xHXXshFGyq58sG1uNx9zxAfQVTC2mgjoscaZYtbB3p91a7HiNpawH2hfGW7B392GvcQW5c8",
  "key6": "LgL6WRsofbXzAh5GMcSERaiAdPSg1XF5F3Uxw4PdT7Yjx64mACSHUwCDiktweoY762sFboSWMaPC1Y46krkfX72",
  "key7": "5tj2U9cJLnm2xwW1eTtD1EA6d6UpeNECogSM26NjhKb8QrPcswZKU2nzNuhe9zwtGYSpnmSxqzF8RSyYKgkhVDtr",
  "key8": "3KB6u4M3gXkEoiMPmQi6VtkyTdykxDS6gph6GGVjQMp2kDJEHyKAMeEFhBnSgFm3kLeGaQ5ostLYMQ9yNVjehWQn",
  "key9": "5wYcV43JUCdBrkPdorjLeGdxz7NkJwpq1ChtE8zCGiyPk2on7mUffWRiaFRa4Fnw6QVf68mRoFdE6TGDsd59SqPU",
  "key10": "5Fjc97vf7ZePrNkRU7soY6tB7hm5izxKyHKE3w8AN1cYgPCe3bRoUHoSMQmc2QoFeZAG8FEd8yytqunJbwhg1TCt",
  "key11": "5zox7FjXb6BPjKnugaN8baFpKGKUesye2Ydnp92L9LzFTxwCndSSV1yjsTXhkYD5H5rPgwPpxCg4WtcnZwyb2izx",
  "key12": "57dY7bYx93LhZ36dhgqSGKZaAkTXoKwZL98J3ue454gQ3NjjDoD86ko9cpUxkjXvi4haET3arztRHJRCdtg2fbJ4",
  "key13": "iAiX8x6K9AG4PHU2TCrEsjyPQyvPMRGwbQ2zoqGjdTKTP6qxVKnUsZBdnv8phSob77fbA4zSJM8NKycFQzTQTf7",
  "key14": "P1FGox733AhN32NacWLv8x7boUM3rffvnF3gKgUctprZHj39yTEMhmVwLHJDJazMWsoTFE6RfNCbTtMBx9PXP6q",
  "key15": "4FvJyvZZvv81Jyev6nZAN6dN3fXKDCz2YWZUM6edjYQDKsSkFupLtzLvveQJ96Y7Hby9K9H882BkPZPNWkZNU98Q",
  "key16": "5nfJPtS6qiucvGBrRqVR3zK2FbMYeQC1fxqvr9k5nSxBNyvSR6Yu7fEwVE1jAJmgH8jTQFjSih3M5cnHWTxMPsQL",
  "key17": "3AssQUNAemK8e428oegbuqX2m1Y4XXqzV6Vc6Kx1nQVSJoa157r8suV3WU6kg3Yey9CbpgxtkThapaomt7QABAoU",
  "key18": "5pqrmqLqtXCSdAYRp5BKTSzjqRCK1unKsF3PpYc83RF2fSQV8qBisUqq53CBYfdZDQ2JgvCaxcKwp1y1r8kt7s8L",
  "key19": "5iuKFZydmSPqai4J4KSjzQsg6oAP6sWh3ySv2rvtp1bWu5ouVUPLWqC4ijyou2rSG1WCZeCWTgQqUcxfF7tS9P9R",
  "key20": "5orMqfchUgsxPUcy2CQ4yF6sST6YYktbzEyvWqRqNUEZp8uhJpQPuEa2UqTAmZUA77PWy12hzQViYm3BSSbUbnK8",
  "key21": "5HQ1dixYcK4riD25irByUztGtnMk5GdwKGpG35vWYHM1pjf2mC13xF9yHsdNpb6tf43YJ1Q25to4SKLtUbzPauW1",
  "key22": "2GPAsTYGc7v6Esg32uuihhSHWEecqyzd1FTudKPmKwT7Smym5KaNdZJ8ExGztZt5G2Hk78pKVS7LxFpFSLSNwXsy",
  "key23": "57VmCbHhoKMgtHWWBa3xN3kN157W2sjqd7J3bxKm4SBMXiuUZcSLxKAzj5URSr5t5szab2XkB2bHdVpVTSpHCFeK",
  "key24": "3Uwe193g41e7Xa3FdVzTVbrbfJxiyBFhGZGPJDbtb2Q1FTedBxPDbNswWs4ykWrubMKtxKxJrnUuQteW1dXkT4hX",
  "key25": "gHHJvJSBVPeu7fZRrJcwZGW8NPy7TXQyz3ySb5iAb1kGGvVLJTXs9bSmHJJNDzmDMfQgWDyCHBNTKoTRTssbFvo",
  "key26": "k5hFdGse2vpNqeVozo9vxxBLbGSNq3AsXhrkbenM477Hr1Tz8xaKT36dwcY6ad2bmHdwVurKEdYs1Dnszx9RbXg",
  "key27": "66dKU75QDWMnEC8Mcjye2ZVBJ85F2TjjTwShELYDtR34BVGApJH7ejMASYSPS9zJbQWS2n2Ni542JxX8rnbgAHCE",
  "key28": "P6RHSBZcJ11uQuc7PNhJy6HTbBCXpaogicbVMocV9kArt9kNcuWuQLLdbH5ZdgaKFFxhf4ZA1H99rJ4w5DirTaV",
  "key29": "4t3cNphVPN8EohJvFhWpY2ZH5NAdX6ZLnHggwTx7QVS9jFF3nNPEoweu9DPXKDfLDHYY2J3KcMLyW3YjtUkKGxnK",
  "key30": "2MWJpi4kVDR7J6VVRP9Cjd86gvaNA1rWA2C4hE8zBrSnKKmxpMcBUQZBd9kWsUcxUaLRVtWsNMjjtxkNJawjufi2",
  "key31": "3ShMG6hfDziChYToac1Caa2P5uP5EwzkdZDpZqcKYX8tpmArGzJPiV896t8fHxsw68rgHLu3oyP3cH74yAFdnerk",
  "key32": "453Wu8juaWjDy9svydtd6oQXqzyEdCtFuBHndV3cwTpMB421n3gurzFSkCazqQ9zVUn7uurQWVCDbvuqz1Y7DS5p",
  "key33": "2k5x8GsUfSHWJnsxbzXsjv1gK2YQ1HCcTMxSDoiYQLsYYGLi2VXGVKTwLwoScmdPsrrSkthJaE2jsZ79WRjtVe3o"
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
