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
    "5xeVFvCXb64vDwNJRXwKDmmn7doYjW2Gdf2qePG2DV9yJvWThBcC4n9HUxyfwQt1pVCjjtDn91nahrPFXxtv1PZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yHkwdqqVsZiu3ZP7ryEQuq3buMmqJxS8KpCQ31Fi8uXSEpL3E4n9MFs3uYSJY2MXgLEEkBZs1fZzMrpPEfg7xgp",
  "key1": "55hNa3zd6753KCCBRHPgojkrLB7dTrDTaMWYNwB2kdkZGYyjSaf79KEc4DBksbkPsuHS9fCxTx2rFBi4oLRwvvYx",
  "key2": "2kwoiXtRmMNZLYrGJp4Cm32MhvebH1Bv9RCsDy9wukzdy2XVbMjbgJCGrM764gydwEsMELggPV9mYeWKR3bzzSe8",
  "key3": "qsf4bx9B7vMuS4gvjxVL1ty4LeUeCeFDhQiNjGbbCx7p6jASQBdaozAHrpdrVkv42HzvenNYJno5KTqQxXB4wpu",
  "key4": "4DiCGJxrJgHx4XXeuJ3dkk978YMRCJdeNx1jCkp1j2mNz8AcxszHp1RvPQnUrasvZDpyvMQHf3UnaFWRfF4i8y4L",
  "key5": "jNv6AmnR437PMErVbbJ7txQYtzkUqiG27DAjczGCPTGwQnmVqZutpE6eszGFfCtKDMVbyeHEqwysjeKM17C462y",
  "key6": "3oNpfPuMib1KvvyVf1GWKJfCH9SDopjiXnCh7YAHhfLMj5gGtzNZz1GQw3mMNtYFErm6uVj28aEe2nxowf1ictA8",
  "key7": "2Mf8NgdJ1UbFrLvYbbdvS1Bm2pPVJMn93Sf3TurFjX9cU9joLyh9jFpdCbjonv1gCHLDyyoyWvDeonPmANwEXv1F",
  "key8": "2gH5DrpqGxnfeXtXHQ3jekCAxAkNuZtVrZKKFrepQSiPeYgtcXd8hFTucDoi3YTShuDsN3MhRa14EekXDmJA5ZPu",
  "key9": "4H2a5fyu24jJ8ka2ACT6A7xo2GWNS1QJp98pTf5QRLRxyCt2Ud4FWq9gJ7AAynuwuTMJUj3M15GqNUfS9DJvGwKv",
  "key10": "3nhBvYtUJk2hcjHHYPudfKTCggcwTJtmVbMsZBWt539vN2CFEC8MYWpPu65Ngd3cSfQhDB3HkaDQSsoB4gcfcU61",
  "key11": "3yhngFMPAo36HcgF89Jsskdxp3PP2w6n8J7G8NCUciRKcdTwXudDCzbLFKvnncfwpdPS2PeZWx9J7YhwFCQX2QCS",
  "key12": "21VmSndHssXmi5cD9iYb17y3jxeau59un9jCFpyWDgSiUDPWcCGoz6vCeg9LroV2wb1HQxCB2eZjtQ2FqBa9H3Qc",
  "key13": "bxgpwWRT8XckeBd4Xy2VveAGQpL9X9ku76m3Z9qRVo1amYT3CWXWfjsutMtTpZbjsPEV5hGNRs7Z6bURXQVycZx",
  "key14": "5PpNyLU7Ue2DuHBbmEVgFy7kV8LYyrVGYFziFYidKYbNTC8B8wo6LpikgnNQfFMes3Mhpwu1y3KHKVMjcUdsP1uT",
  "key15": "4CV7eZ3uX6tevnyd9ZNntjUJJQGpDyxAurvNQoMWnyvVuCgG2oH8scbocQgSkd9T1BwHLhPVmkyX1eEbTSr5ABmz",
  "key16": "3CdT9HgAqoHLVWaUQC2SY9DWS211ZUxScytKadZhDR4PmzGeoR5JZ7f1xV2jMvavEBZjwKnDJvMtG2zY6QEBCaLF",
  "key17": "4DwTZTNjRiGyF7q9w1hdep5SVXJEApsahuY9RW6hLq3FqCh7hQzgx5yJukwyDfYJJKgkpNYRWABtZje7vhEH4urh",
  "key18": "4ak1ucGkpZu7thLygBq96mpfH53Gc8CyqWmH7sxaZC2uhgiNUGB2UiQJr2TKejToDpdEtfKWCysJmiTB1uRkNAF8",
  "key19": "67hb5BXECNFdndKgVUuYNVzzkyNdy32RJZDQEq6CfWWns3SL1sS3W5fcmxahdGRYkbCN9o75PbG4DNnWe46CnFTX",
  "key20": "3yUjkFfR8VZdYyekYNa15r3BahodWxGsdM5yoAjTQidxJEFwaDxvjwSCtphvjD1S1WRGHzmg3CiTXecJquEUQKw7",
  "key21": "DUHJFtGxPzfmbXHZWC8peCveQgr7eBoQZiGUM3cXFT3MjrbKpCPc1UJG3Stn647XsTaWKDHrq8tXZJ8hwUqr6hF",
  "key22": "4m2ZcSX893jbdQdGq8PhqqNNu4J2593KhbFpiFjdB5TJ75Qvy3CPqKLV6QsM6yWacaQkhHBZq4mhQHBBLHb49ifa",
  "key23": "5gayuEBKnayadZ36fQUCnrjPKd1qJpS8jnt2ho86oNFV2Dx2fsoCnvnarMpcXZmoLgoYKtLxtAmYHfqS3av2RXax",
  "key24": "3rbAo9iS3m6qnehtbMFPsfou3EoSib79hvfyybaKN4d34fLu5FiV3fzVFRgw9mqEor6NTTNyUufi3yhuPgj4H45N",
  "key25": "4SaisN2EWHoSVMTvNMeUVekpVswTDuWvsSGR6CM7TYijpCwFLdn1JRuuWiit1cBmsMmjyGoXT2ETHwcpwk5sQb8W",
  "key26": "4HPtu6VnzrQRVj68CS6eCGEUSALGP5FvFkvR1ejJEZgwkS2RP8j9Mhu5WMkcQn23Rufc5qsBNot6JGybyAP9CC8i",
  "key27": "5jQA756vQrL4EhrJAHnATjsNJPpCXw8GP1bBmcew8fFkTZe69BsxP9j1Ghkv2q5PqjGU7GpUrWQzUM61xbNmR32e",
  "key28": "36c6FAuYDvRrRZfhYYswrj19ALuVwaW9DjqY7HiZe8tTrPygcQQzB8U7CxmZ6dVBZyNSuLG4Wo9uMdDy862jwQeb",
  "key29": "4VWqyCtb1yJvVHNA5PDnweGyEYdss4QK3zHS3eNmSEEkqJU3akF33nkvnXzRq6dbxcC32XjacK9LLATvfigYgnkA",
  "key30": "B4gmKx8KaKZ5WAFN3jwVdB3j4yCmvo8ww7GsVB1FHXZw3VMJ5X26cf4BUAy2soUjDN3sBGjtaFtVXF6aue5zvQk",
  "key31": "DhqWJhJ7APCnufYTnAr2zkBaywFtyDQVeg4mRgT14JXh16AuLFPfSe9oWKfBtpbdpsBT2twpxwZSY7LTYkoaAb1",
  "key32": "2o73Sr4VxnEL5VX9HrsEjxxobRYdHcGzMdhbYBHwxLiHBQTfbxXUE7Z75TSd2kcaD78phFkHs2cPojhQuWg9nUCp",
  "key33": "2KmoxBADVcpyKhyZoi5jeUm9BcajZf7MBaM81UY64sf1WpHmunh1A5AJYA3TyhRjx2c6pQ6KGBeFLGzouqKRnkXW",
  "key34": "5JEsuZaSdFK5hLVZvZTTpQYBBtqiKwin2vxZ4tgggEGXEfJVpGZE2Z7XKok9W8aiPXnXYzJQkazKVZ6Mn13D2iVQ",
  "key35": "2jcq2vqJNMbjgmYZf2UZKedK9gWBDngRQ2Xm59qorbH8NEyxDF3bX7agK6jDAvqDxSTeUA5rttZK8nMEWbMmgYRN",
  "key36": "z2RB72WAqEdTMPdKKk5i6pjWPtXeUvczzVDmuUJDECK9hExhALC7vEXeVkYZMbVNPbnTa5Pj1NDDFsWS45Bc2iP",
  "key37": "2hWqR24QMJ1qqg8oPQm891qvYouhju7FJs9rWwNWvQayMSv7SZDETDy2R8tgjspWoZrQMLWgRLXpAcSDqJfcgEH3",
  "key38": "3TL86ayC9JcD2zKBRHJf1XdjMbF1XEppwiBeg1ftWq7K1eRYRY5T1UNqmr7id8sm1H6zcD5edPouFsXVojgsPSzq",
  "key39": "2m6a8xsKUoU9nsnT3Mn68YdLuUzf9zy6ZWxVBpe6Paw6ouTTFoq6Y4xKRSykjJBciwvjrw36cFxBu8VMCeD2ryM7",
  "key40": "MXgcXohTnsKphaBqcFY7kyzQsbEKf2V5QM97b1iHe8mS3Lvvr5tSBXgNk7feLLBuCLZ4jQas1Bf19i8EYtJkZi7",
  "key41": "P1PDW9JCjHcTbbzFt47K2nqhd7hzcnAWZ44Bz3aCLXZZ48iutfAxH4ntHkXFKJ7W4T7UcCn2xdcEx3FPHrZzLTd",
  "key42": "75t49t8N21ZQbVqcTyrbxHhBGPat5LXRMyJRLUJ9UrKNo6EufdkhXZRpHTSyPYQqmABvkrrK4z8UjRzwMN7ab9m",
  "key43": "4dB5d7cyXHqqYQoDuNrk4Rv42zdRjEbuuWZovSUitVBunzcRTsngoTvd956FRk5oLxmtKnfGMgdcs6cLQ5otYQ9R",
  "key44": "61kMDvUsYTyVynCmLefya9WkajsKZaYWDg1LKAje7hCjMCbSLWRK6ebN4YSP25VkEfadN549ZzRi5ehzNTSgEhY5",
  "key45": "28GdorpDtiMGDnkrCt5ukfJj1dFbgSgFqHC8VkDDv26faHL8t2U6j4FSzMp1dTmf3gieK2A8tNoUiChbzZFKFwDG"
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
