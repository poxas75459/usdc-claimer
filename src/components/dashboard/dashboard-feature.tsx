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
    "2oBWeLvq1TBdQ6qT9pjEMbeM3CuaDth4AMtspZWi9z5DJyewXWk9tfZ7g7YyjkAtvwG99ZxYmKHvedrTz1w3doW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HTdrMygbRg4qWHwEXdPmfgp2h4qXdWYecwKAqbtdtPEKAFNTpBixZm4Mp25LoVDhYaAyXefYkUrNGsCDhCMAyhc",
  "key1": "54ZrcKfupwiFAfuAJ6fKLh1wDUHfuQM97BtynZTASvKrvJyhRaZ7uA1NeJUtCKEziqXLNC37TPp7WV661mN38n4A",
  "key2": "kLAzJnycqGRK6mihh2cDmKMTucTZ4ifpHgPMQYXzGE3FHjAA2Q1ofBbs7oydWY7hGs8VjoPejLDV1H8ZeBBSH6d",
  "key3": "xgkUgiU4LwkLTtsUDTcVWV6Mwe2qUr8eMiz9L6i96eePuDe4ib84JVGDFiRWW8q1FxXUAakd1YQgC9k34rPdt6U",
  "key4": "3eHFLpsG1M2Jfor9bAw11vdgAG4WDB9qmp8PZYSdN5ozApMm8bmWFw1a1BSSPaeCjMvfc5MnUvaA34ibwqgeYXU2",
  "key5": "2qdedCZ5fddiamLWm7S1DVe5CNRUrAkLJQP1afz7z8Uy6WzpiaV48kNGaoxVsATiXfBCmfSxMfpVR6uXC1qSU7tg",
  "key6": "2SSp9Cp19mYnmyMin2wzQD39HfYnPCtzKjtCnHL5YJCVXPiWapCAd7GzcfjWqrW9xtsreCGHvnskiGcBNvd56oAi",
  "key7": "2oTqg2C4LviGeBkzDjWyLPEbqDpQN1sUK8Lt8tTUrAdRuAL1baj6gMv6i544hFYtaHfuHKmF1KAbAmAdBx6LjcBW",
  "key8": "36aBP3PrmvcPFMnViwNGs2WQES42p96xCwLcq1vVG3xu4T5EUPWwUWHNUVAEsx1dKrF1AQHjepKt2iSguL24FNyU",
  "key9": "oW7Yva21tJVBnCaW1VRYfpEfXEFBD7piVKwZHfBkGotr4NGhuXJ9vgcrMYvGBftYPSkSq8h8dTDpkFQ6fHuAcKb",
  "key10": "3kav74CUAmbQBauy3kgjt6yLsmgGAiq56XWyLevdGQ5TJzgjADRaaNy16JGbbYp2z3DHRAodwpaUgarpQY91TRdE",
  "key11": "5GHAPvEvMEuSaSqvPaEcxzLeDvX5jEtFDjqo9GM5PhaJC2vDZkkaeuc1oRZWWGHwUVv6edVZHXQUpjTmA3oM2S5X",
  "key12": "4UtwASG2savKPxNvutytM48M941kzowJ3HkK3tDhSN8muGEsTjkH9r66G8QbVrbstPrdrUNynUGMHTG13iQmuhax",
  "key13": "5vphyPA7K26fgwgHHv6NmCTFQz3YJVRFJqDP787uBKPrRxtDWpzBdUvNXz1c4Rm8aDTafHh7jGogTzJpYQnErdmU",
  "key14": "5oF7chtNbF6LVUgo4tiFfkMdj3gy7xKFHpdmAjG9kxjeycDK3oKAjAHgecJbmu7g3ceXE3kUkyPVYFK23szFmshS",
  "key15": "4kzkBK9BCX4J6iHBpCdXXPkk2p9bLac4GQiCXMPjwDe2aoijqV4SsG7N1DQMcfoif3uXtNxkreqxUTEUNKkXm7Hi",
  "key16": "5XbDXz2HZjTRfhcU3vrDNsdktbRAbjw7ncVV9jfNVgexQXXtk51ZLCQoSCWQ5gYyep4t65s3dotSNriEQfwFGh3T",
  "key17": "27sy2GEaowj78TPoiUb5LiMZWpqqq4QwPG4CWStQnYRiFwnpPRgxmnfmwBgMrFjx8d2qRUoLF81fSXNJ1nWPWxYU",
  "key18": "qfCvQVXfuxjBnnx9R5XLCLsGrv8BZUxr91nR7BvtUJVE2WyQirLutBNrTouGEqyodGc5A3dpG58mv6cLHiUuftJ",
  "key19": "5ivoDk7GHHYXgFy6xmidVes4sT6H2ofCXvU6dfZqYgMtfJN7WGpDGv1GRoZaY5uwTE6EzodB41e7UqBWTYjgGdh",
  "key20": "5aFC2EkkTYvVwncfG8DMe254ZUosD4f6VvMYcT9jinZGvePpdqJqsEyCy4TVwgtzWTvHZZwb2Cd6cDk3j34yoSE3",
  "key21": "5LghczQcUAfpfz8fNiePVfc8kE6afcAvmGeyDZcvuFLfX19ZwmH1EWnHUKVS8FwGvBLXMFHQgMpnZD9cqEtmPXE2",
  "key22": "2nUFEeGEUBHrPCdLg7BmfPv9RhBKCFVTAEp55pcQJf1UPTcvyXeN8qs7HWmn86qf1LW9LUB7EevE17WdzvWWv7et",
  "key23": "4tB48M4qVhjpBTbZ4m13M4Ypwdot4dqdaaJr28sxn18ufdUrmqN7DB957dEMJ4bQ6sKFJwjhP82QhvXfeVYpcad2",
  "key24": "5mdeaR9GqXyJZp48foU28ZUqSGMSXZF5apDYTXpZhdU9P3d1QGD5rdeEk3rqpwiVcXJgY8nAHXYYuHzPRjg6pikb",
  "key25": "3FdDpgQ9vAGcV5w746jeNUXnYCR73FUePaMna5SjkGLG4wZG4jGTMnEtiN4gRQju5oQkSrWDGmMLmePS1sS1kzLn",
  "key26": "GYR6PnicRkcutChZn84MS812p8sro5ZmzisGRrXoKsfuASZQ5hBmVVjbrYFyTj6exZiGV5Lky4D9Jh2Wgwiiiqi",
  "key27": "LdzwCCe4ccb37c9w9ARV3b1ZL6Hbah6x9uRZ5E3m2UEWZCiB1gbhY23wqNyVWyQkJ22uJQJGcuUFB7HX1BQ1L2D",
  "key28": "3AgybizHubJ3qJDYg3g2z8aNAjYKgepfANtpHntEFacq82pvh3fyuHdBrpCf9hvqGjMQLkukM5SMRtvBiVuW5fZg",
  "key29": "36etzBB5z1avug3EGcHbYJ2e75mP2kCSDUV4SzmFw8dytGvJZ1ysWqg3nuepxLtzDcpeD7amf6XYXTe67tsfjiXs",
  "key30": "2ypDYWUvyQLA5zkAYWaZNNSYAMrSMaxLcPNehSNEER99rdCLxNJbFAyvnEGBGDSTRBMACxYkEf6vFfqNFjsGKhwv",
  "key31": "EaMkFSnYfw7oSWoxX98poYWengV8gJb9Jd3sfdd8fDVhWrYuf9CjzWiRq6qG1LsRp6wV72PzVZozcEvPiiP5vYs",
  "key32": "2MGHBtr8F8njPYh1MTBquvPHx46DL3pXCRCTDG6traXFLrLi9JBn82cztyzk85HrNua8dE8CbPYA1MTAeAQBGDXt",
  "key33": "245VUUB7juodFKpXkaR5c2LYj7KE2NPPnoLdTUC7x87w8k3Kq4VSftLEpLGNLfKCrphbHN7vsYtVriva1QQGdQuj",
  "key34": "2WaJhmS6uLsM6i4jp6cv6ZnmCpnNjPNuU7uZnyMehD8KU3wJ83kXFZR8WmCPt41iE4MzLxCBfhN33jVCBBKwA8x",
  "key35": "2XHfXk4i8PskXMprLaQUdSuU52WXc1PfEx1AmcpJWiXBSDsjWJYkzvt9LPuEcEN5tCAz84XWBDZvypfChbNGY3eS",
  "key36": "5iyEXj1Zt5wJt6Qy6whnBC2xXFpmgdmyWSsvs6B8rPTjEnVEjL2EznjnzvXQLj2JR5bT8kBy1SnM9MudNm3WPCmn",
  "key37": "5ZL29GqtE4gpndriC8tiPgBLfPqkHway6p3tb4enPGRuc9dV6xqHCpHfAoigi2NRquqWXpHfZ451DCy2kSYbJ2oM",
  "key38": "3bWfX2W8qA31BcAmVQdpN2QBtkhft1Fvysd3gKzWApqviDfouQqVX7GecaF13SLgsYTBpy5DbSYXkCWAfzb6vvw3",
  "key39": "2mrSqHdWdV5CHdUbaJ9AM2QdWoCxYsc1CRvZLsBXbyNyJX8ocwPwMuuJTnQs8beAzAB7FrYXzr4SQ7hd4pSdDbH5",
  "key40": "2wrv7oZmfFYcN2fDkpDM9aN5vYwzYgiCx33fbAKh7kLA6ewEHWjsBR4mPYLxUtRzA8x4fenUYvtx2UCW12YZFstF",
  "key41": "4BuAjgSiqpr6S8kf27rCw1CjUURb4NMvFiH9siia2ZZy1TLFp2pzr4vKqpkUs81TvqCHebyVcYsocpD1zYgB1tiK",
  "key42": "5W49RWbgrPvbB2YP13z4nVe8NwZXufjcyrWKbGVLFGcsSEJNHJJThh4xbEPgZgG9TAX1nhryXtGmUF4SHGZAPcxQ",
  "key43": "4HNNELJphVPwJebTAJ4Xb5LbiG8B9xW3KhBKsgrq6osJZexupTtz378UXaQL2AEQ8qKT2KxStYkCqJubX1tbri6r",
  "key44": "4RcGMVUN9m2PsU7VxhymGaUNw31gBNP5PRwLpmZctKCKu1JpEFeChfsTfrAVn88nvKqRWBKKnQB9gLa4zPSRSX6R",
  "key45": "iy5FsGG4xpfFvq3tW2byXuXPyWYEWK291Zm4Wije1DaJBUcbPzXAESeQcjgh3JJS9rD2v3sfXqK5BUwry9CQG53",
  "key46": "4aLv2uhMfGkR32yLvrCrSm4rbY1GAzSfoStPg69GnrGGqpLtD6eHVNAsmi3KtrkYsbMDhMDpvg3XfmaYhepkNTci"
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
