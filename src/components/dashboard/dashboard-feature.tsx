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
    "f4PSLfY7E82DBRgBCTjeq6ymx8zeehV6wx75kPaoYNHRzJEvUk5tbpjSURPaZh1oBJe1dAqT59UZtS3MZTNJBGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GoGcmjzhKkR6y5x1mX6bayKpEyvDQrfaTqjcxN5dRDf1agx4a5YKWhRTAHf1Vg1P4D5UrTnpgMUif3tmjRCdi7p",
  "key1": "3obmhdKccaXDdobJifrCfZCnEFDa9nn8EGTbEN4TBD5Wo91GqZSNiRVE1eVr92GrVX41P34Z65bioonQ5PPR3Wag",
  "key2": "5E9YJiQfvEkttYCBFUvbPPmPQmDDLMrGgs88KN5bmUnuGicdYzrp1emiqorVDHie82Wp2CZ3Kb4xWYL3FyKxJghN",
  "key3": "v37DnMmnbQCzL6fgDxpdbx62X7yCKsvdFrH3jkfYHYemKFA9a2TEoHCL5r8FEgB3pU8FZmY9W5yauzUixn9Robg",
  "key4": "5kmGywLZViMnd4fG3d6ASdnMsvZF2res3PmE3BzfAUkcZqeP8wei3zP5jVgUuQvSpfpamGdBg58TuRFv8gtizYzA",
  "key5": "3LSMmx2zTMUuhDGGnSr6cQzKBLtiN1LYTgrSeHcEmbNLvjvReoLV5yzq8A6fJv2zrXpRMYpcH6eQNZhkqTkS6THJ",
  "key6": "49xRdJ8A4xqQmykHhaPhGekeP5oQx6ko5AA4NE7BViVdeZ8NQfj8ybxZLVFPjh7eC8vmF7tVWis5v7rQdqG9u5nG",
  "key7": "2dHeTzHhbPLDGsid7WVhbPSqjDNQGCdxZUX6sBCdmxVvKrUGpvA6exboGc9yqffkfR9j2mA2JZL56Y3QGDgAfq5w",
  "key8": "4PktpVf7w1S2Z6GviXoeQaGTHZAbEPd5RKuzE8zbeffiCzTFAbGiDVUpfC3gX4QqvoprddDEqz1ue2nb1Vxk5ge2",
  "key9": "2kpWkFjQAUV5t3ii4TyL7Rm6JvrVjcPDSiLgYqBNe9SqJVTd8VLn4cs5wBpzwpWpoKg5xHS6e8vsoyNirDSKarcg",
  "key10": "5bG51yrKWfJJDFSrVT5SAH3rAQ8wxDWZ4CDUWxoe3p2esvwVVJGH5KNEvPiCkA5d9xuw9CHeiEYPKQbV6YW5K54w",
  "key11": "2UryzTUuabtrt2mCTHP3eydb9QsrtMvjw8zVFvE7ZUGNcjDyft655E6TKPBJfpMH9jnS7HgtN6KxnrMBgom6wwwP",
  "key12": "3erkyusBtWPw9vEnqzAJQQuTqy8e6nYX2GJNC2HHwkawpUMFQN71KWHUNYMp9H47pTjcAqc967CmDfqrEtpNGGMo",
  "key13": "2ZSsJ9tLgWZd9AjUkYNxPveUM7Qwg4LwXWuuL6fGzi1kPF4DLemFXCkTGDEbpqmSvFbihnghLMR97REbjUuTPmyL",
  "key14": "37mt9E6qaf1NeoezsSaBnjCRa2d2JkE7SdPLsBnAXV8WZK34ejLhzS6Mgori7tEzJAFAxsJdfwjE5bBqZbErCRRB",
  "key15": "JTYpDBcmAMM56f1BNk7CPcQriHCABkUyZP1eFbrVbFYf98hzKWRb9qRq9sYao7z98R1iLELsnawAmz29uLks2cj",
  "key16": "4bS8wcEtQEePqfu92xbBRK7gWEHZKQtSXDc3hwLZe7VnEHZxodngHhX1JR6peA6PCokY3bTjDCGQBCfaNgjo8puo",
  "key17": "5RtZXiAreE7zDGP3iN3tEWhNjjVWfMXJS4WXpQmp4rVc8g6nbtEhQ7NuAmdc35WwTdk8b4LypQKfcrVTSqivK256",
  "key18": "3NqB1P9NEefLbRiuZ7WoGVvdKzCcBfDdqVEBBCr3PPsHvbYLW1p8e6fkctHnooWvxgDPrLy4U6N4YMTVoLEtatsh",
  "key19": "5zeCEE14bk4xfUxgzKZrsrV9ubNTsoCTjAufJASr4tL5emYHnj2ab2PfoitHQUbnK8jJ8ypmfkDA2UvRooqeubZN",
  "key20": "5mM7mhzanP2VGHcfX9C3qYokD7M8F75QWMjFqCg921ngBtr86DGD9NhSu7TwYBUBgB6a8XrinKEGsudLdqA6LYr4",
  "key21": "5fSsC61rxb32uYCmNo9SttZzUrqErdu9K1iKF8WsqL9infHTvyttrKndmh4dWabVbLTEQEKE6RUfNx1uzdsvTqYk",
  "key22": "3fuditmDse9qG4RDCHH4zKKvwEdcp7oF5KZXayZJUXM4MvAf9DZuvnyo6yPCLTRiLecBNqopZ5oqjKc25WJVTRpJ",
  "key23": "EJ9pBo7SBW5QRBFUqWFchjBc6BHYK4huB97B9tHdYfkVRCYeCzncXcVn4BKJY9py8scjsVSb1zUCpm11n9ZZsEt",
  "key24": "3evyzYTxq5GXSCaTGDWNaF1HUxWmQCKMkwtahe2BZUCV8VSC7JuzgKtR5aWdTuTnHPXmUSXpF7rjeR1Z2zSyBcSe",
  "key25": "67FXitunZZuJADQqxk3cufb3obSmoxrHfjHLTEfHgyRyDEsoFWZE4oru45rTCVqB6Qnon6bS26wncCh2BVoRCWGs",
  "key26": "3g6qSvEb35zuw9sooaBbXukcjuuK6Z7wCdGArbPYKRoJuquL3R6N3GRj4vrtay1XFDLztzhWhjxrunVAYLhwpzSb",
  "key27": "4uqoAhTb6uvFQDCEnjZX4wKmXJmjcx5c1LsXBiafcFKemAZZJdkdF75wsmCFhrwteqbvMKSgZnSMC1jw8HrGBb4j",
  "key28": "2FSroZDeaeY5sEj6mSR1ZeVBrBadJ6dYLeNbLsqNN6YCPAmjP82TExtaRPJ2iR2epNgMh9SbjSh28YLjYeMzyexM",
  "key29": "2Z6TvPAgAbxgd2ehtM7Z9iR3Lx7gbpGa5dk8vf3HV9QTt1VyV3uCK9RiHYv9javoW8fSS6cDW9gZNHhnE5P9WCZP",
  "key30": "67ZiDoARd8os1XNU1e1z4r15rHpNoTxMSGZanWX3bvwkjWVSk5uQx3h4EnPv5oLXYH9mjqAqAaLAE9ZUDU74VoYN",
  "key31": "5TBzZPsZVWh2eEypW6qtZRnV1JzZsFs2SjofcQAXgzsC9UgdDanvE9q3m9j1RcMDanEtJGupRuviGHAh51ws26Bf",
  "key32": "63pNrC1mPfPETEuBykfACQZ75qnj3bSB5Ui7uAZrp8VfkjpxmA2LX7PbvrK3ceLSvHo8oN42F9Taj7Azzn1ZoQcm",
  "key33": "3nqFEoFpiYr94vqAFyg3LW42T6jX3vrQ5s2sSQgNhi1PVGCXsZqtfvnVqmKqZxNSzbHi9TBPVqH4gSXz1G2uZANy",
  "key34": "2P1UTH6FanmY3TDBzup56GBbgokowVPrtc1iBXfA7xLwHYwFk9j44rYD3bNVz8LuQVSKt6nGuRkuMGtEppyUqMEj",
  "key35": "5pQkuQCqzCpxoU474PwYtsWZkyDkDKpzMD2y5EnCD1jvvDswfP7EFTjjC1iDUJP6Z8ErUc85ENvtZaRXU6Rtmds4",
  "key36": "3zrRCKFajzngE7FbqvtbkKJfxk1T615e8dHczpcmmEQQfCT9J4fMXjtjsFiFEREACm2JKjVbqKDTHMk6ojzq2prd",
  "key37": "bWtbDuYzUcqsPEQbhkg8xzAVxTTgnjY1VtiGm8mj2nUspCbWmeuyQHa5okUA7eB8MkofcYm42p45qL67amGZ1TQ",
  "key38": "uL725U44jNoYvB9a8KUqpRcywbNuwziKbFRozTZBnKL6APu9pcBWBSDT9mRXFAqQzbpKvTzoaoQE6jiiZxZKCGC",
  "key39": "R81BRq2VkQckYkQackvhTV8tS5TRZXgwvbP2WCKjXM5x5YDoP9TqNCtgR1KsBoAEXHuGwg8Zq8gGPQvQsVP532W",
  "key40": "4RhPmiK7k9scbEXZdFtQKoLjJSXegqJkzZMG1Lr1nWfie1PUgZNgmSNkf6qxcRhaBMnKr712fkkiqeNtrrxV7GdU",
  "key41": "45mtPn6idq1mQbaMK8DtmcDw8nKTwtqrbFKk4MYAZP8JCmkmtjC9jsj8FW96CHpq8fJpZuK63U3W7CruEtzutdwH",
  "key42": "4F7DrjeKAm9HGyPTjwBN9LYKM3x1q3Gt1DSu7KnntPXNQyZPX9mioXWG426QAkrRf4Be1JbLmZrJxnBK7UF8zkqk",
  "key43": "5Sd7gTkwXYFY9RD49NtUeGZjV21azMoEW3soa7H3w8EDTeA3ou6qcobkrW9zU7BCHd7CjTViweyBEMTYs9xc7DmJ"
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
