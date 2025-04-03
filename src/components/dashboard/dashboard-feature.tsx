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
    "8PtCQPf4DpcT6n14pMfzmTGQKnBocuqF1WiFCbUBQQx4ma6QfS1cXG8CKwtN4EY13NSzNCqwtMkHhF64zFemEsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N2YT1ssZDXoTywfw4Xg6R7UPvZCkjSd1SoB2zT74gXnFU84K4WieJg36tUXUNZhdDrDWNEMqDSaHLgF3qpST2j9",
  "key1": "48Xmdm8itQkyCkZ8onyEh3DXoWKem9TDFLawQtx728obaGogGgLJMwMUe7t7m5Y7rwYX85fzeKZrAye1iBXikRtz",
  "key2": "2N5ZEt3TyKo2eSJW7AFG2fyYTZ4zDVBfQ2wcvxQ6QgtGDt5Li852LkQp3jqH64FBx7MS5oYRN5PbboLLiWwJ1bPE",
  "key3": "3KWWasL81EhgHdf2ZoFvBuWdbuzdm4XYc53stW1E8vABwsQMHBg77YroJvZBHWPhPF8Eirxa2J5KiEAhRq7wTp5T",
  "key4": "HhYb2pKYk9FKeiLQABCNduRTrqLDuVgRArE13AWyRGm3h1gN48SDmp5KDDbVc9f43MLwe9jmFFD8NPt5uPwYU19",
  "key5": "mkT7BbkdAaiDgZHzCrQCJEFkTjpx3DkutifKLf3q5Sm1GXcG2vxHrHrgQrMRXijNWRCS5gby2292QbN77B7M1Xg",
  "key6": "TPKfmBLK5aDqGJ2LSNctzL5yfU7Quq2MBfzzTz64v11fa6M2QVpuZzP13vFFDuFHMGP1RC1e6pcsQwB4ukDRoaB",
  "key7": "4ZH8eKW37pWUWePdgGPEgUi8aZZBkN7jN7Q5Y3evMwURCQPAcHieZfY9AERQJkNwQoGZyTqVrNY3kCKo4GzZdTZj",
  "key8": "5oyZCB2z1AhDrVu5GqCex27g1aXGFxFpQvwzEse3RTYfjMyTwnDP6nVJ3gyzqhpgq6RoomsDT2icxJkesTuJAvtS",
  "key9": "2b8c2i1XwAci71Z6JxGS1GHkpSH8Mj1eZygon4DJEos36ATrRGW4147cU196ds3pKZJADbc4TEdBtQicPwCHhodv",
  "key10": "h8sTnavnhdwvqiF3yqefcBtbjeMnLjBLRsV7VPiU7qnD2YhPYZ8NBoL8PA9oRhh3UEaXo56XFsERhgFYddaUkX4",
  "key11": "3cqFci4HjQtsYJ3MiTJoKfsUBjrnQWYNrNgrB5e1TqEbexsEoy3M5smmzoyZLy4EemyNMyN2Z4QTucKiC8yLWMn2",
  "key12": "GTqYVWBsKsFcUj4skT9ZJC2vAkfhiF6JqvMbHrmPfAKG6AHjrwtmaEGxh3EAJuYHJ4Yfu2aY1MiMQkHRfbejKKi",
  "key13": "4R7tMKvoJZEnyXXKmuENkjizWHzSuhBFbbkRZNQA3XJakx2wfyrVeAX6vDw8ToWQDoeiDRJffz5exFWcdJYPBva4",
  "key14": "3NvDQfgQysnUzy5WhiSLjAdQV65ceLWVV6DamDFkzD1YgMjELHFvakG9ZNQzkbWFSC56geKuj5WX75q4EjsbeF1k",
  "key15": "5daFrAcvWoMwKsjmmEpwqsuTwGAmwiFgcjzE2g6dc2UKK2RzhcC5zRkLSpFgXKBs2QWxdE7qFoZoqxi2YU4vwFQi",
  "key16": "65esysgKKM44ZVME1AMoDXC131VtJJpn4PYQ5ZDaDbJ2Wi9ZggcmymZpLpKMpcuGapCMZP8Bz1cLojFf6oqsoDze",
  "key17": "JN7WgCUmwVjhQahgro4S7wicG8bD7gvZzCTmPbbL6qi3Y1cdik49zszoZg5ghtUKgXLGW942pHJyD1LjUepZg2Q",
  "key18": "3ZtQdtvVUthActXan1ZyjUhv2LnKNrFcQG1BENMhigWQaP5CHyfai7gbczqhK62mqsAGQEo7gMjy1XyME3Yf42Lj",
  "key19": "2UYxALoQYnBrQrpkw9KB3xNvopiXyzEfSUhArGnbsDU1R4TZGGUdDDMutT9PmZaE8Ydn7kknEUY4GxRqa8eVMPPx",
  "key20": "2R8H4KBn8GJFjkdzfiasr9js4UK3Lknh2pAAPmuPvUrMfTCoFCefZAW7KWNs4WAnexC3rg4XWMCMLkYTmiVRDvGU",
  "key21": "6gN7umy3kWLZoAFeksxsBTXGTtLMHbpoWvzEkH3tjfjEPjXBKWHvd3pzJmD8WDY38YB5qQWX9R6BihqV8c9FQWD",
  "key22": "5vSL7DG3E4HYTureDKS5Db34HLf1dMiGyctjJaMhxG96oAfAnsTiN78BwEpUz7JHUsPrVWDQgb9irRt8ZnrdYEUF",
  "key23": "3Mdnn4wWRLXqfscF47BuR8mrR8bEguPwou9f85Ey1MokwB4X5trbJwe39JXU82VU6gUV8oQv1ecNyBHxPJH3ytBS",
  "key24": "Lkt1fBTsdemtoFun6ejY5kVTjPe4J9rzsZ3NJ47RFaE6mXKFpkC2vfoqZwCAPVbpkbuCQEWxmYSnFQkrGNFyFt2",
  "key25": "5UxFsAx5rEnti5g92Z6sYkgdVHyiFXCpXjhaJnnbxTSKWPHXAHZyWVqwq6ETyVdfFSQZ8YuwedBLCcvEWtD6iYzo",
  "key26": "58sb9wHg3Xt7Mhe2VKSgSaVkmBUc21rwCCsvrmgr8zpY4QNrdpwmURTdHDM9CY6wHRTm7Lq6Hsp6PmkTMt4y8HHQ",
  "key27": "2GcDvELdUWQz64CsYBWg5kLczNFSRcHm4R7Wh53XGDtZRHyDAwzwPkN2eYgaKKhDyqnuRMJot1UtfbGTVGtHiZro",
  "key28": "F5eEiMaEjQpDKu1JqEd44KW68txkVHh7sWdrLzdV5nJXpVxQqodEbDMyaoNceeLhNdHaGyV3N5Gasao7wBaqeiH",
  "key29": "2DSR5zQLRYtNGc3nDiEneRhGfGnScQ3iSFi44vMkM7L2q1hKaDHGqaWsXBxWvSArDwKhrn4BHhUZFKm4DVLeB2Ew",
  "key30": "5UcBC1R5fFTjQ7jCKofVrX7LAajod9umvY5eS2TYvTH5Dmbee3uasycpXMetbTvoHnTJnMer2HwqVyARPe3QKMMj",
  "key31": "58Ryimq128Urd66ZoFYJUPsFBvVcYW5FEBeAcacFyoL4hEcNPMTvz63nspsr5V237BirmTpjwQUhPnHW6fyHm7QU",
  "key32": "2Ht6pnzo3StidRZcdEBqKEst382sUrefqNv63QDAoXfDb8N4JMx2vJNxQxDpzU9XV1qXTmCUY4Twa1rQywKuqVCm",
  "key33": "2zeFVAdZxWJvUhyU8GSn1pNbav4NXKkSA6egyutSLzY1jbLTSLQrrySMTMe8wXtwdFjjBDzSUSFeeiTxW8WU594S",
  "key34": "4zEjKTQQaD8PGF3FVP5B5qGm8KW2yawezwaCgtX4VFJvu6knLn1K4hhz57ZLVi7KrLdBXp1s9npv2gFsrDGj9uNv",
  "key35": "4dakxC2oFUYzPiFp3mxZgjLNPHpkHuiwhJ6qv4PYF324u3JUUBZoppXkPaxPAET6ed6mXDtdczZwmUQr3qmkVZUf",
  "key36": "46QW7HtdDm16GS4q8AMRX5k3TATmEpv9Bm6ea4L1hGd6Y2Mu5ujbdALVfNHJ99kdY9VZi6hh7emGDDzE1VzSSx9j",
  "key37": "42FS4c8hNryoUo9ZPNrEL2ARDeWTCLVtPSJznj7P1wKoo9ca7T8eY3PrzWYXpcA8RHakiQwTtSyDBvn9NGf7VYTF",
  "key38": "2SNSsAVz8oAopCsyPqW6G9paGV9AMxwdKom9cJudspeUXF1hPAvi5f1G3E1x4MiHY2tBCpGGkr6kbc5BwRSzd3QW",
  "key39": "3vK8NHWSPxaUsJZUhbqpukXGnPRdXGeQH5VxNrqH9okdCsiq7kmCMQDSF4RYjbhWr9o3z5SUBNLJCRHLdxFMbnYp",
  "key40": "3GnytVkb27PAy5E4LZKeAft5pzgC5HaWecHeGZ11ZFftU13MkjpXwhjZ18ZKCYwksCaakYp5T1VQRh6dtHCGAyFh",
  "key41": "3hBWenFzS9V8uqEbuZL31N7pH3hAcfPhY4iVPkPiz59vbMGKDPZozsqsmdxk3jHWWKu9sqoBzkTP9YGSA4XLnHpk",
  "key42": "5d258mnAkhgjEdjJqvvYKtv5k6L7Jvzg1XVNTjFFQJyaKeGeJ4hbj4ZaVBdLhZW82KtZeKukmhL1nZoHCxfcHgSt",
  "key43": "61bgnJSDMZ1KUk8DS2AUdQCgVYD9qUHT95ahCdU2xFqjpvUrPiHiifiVyBok9tEv1z862dPKroeN2hjp4M61QBRw",
  "key44": "45EVnLaqZSQdNwPLYfQ7Vyisc5t6zfJMEPduxFm5x7yt49xze4jkhs78CQ4dTM7Hu4vu35RqxYogRfGf9bstQF2m",
  "key45": "CkfNWq2Bdm2x7pWQPR3v7AHxmp2sS8ZjEg2XG4K5fUXnqQZ3BCSVrSNLfarE2B6L8NQgXW4jQpJAim8aL3NqjAX",
  "key46": "4dgTZwnB7mPN779UxvDfkkVZ3hD3yWwZ4UT3La1MdCbP44Gj9dVLoJ4XGuQ77mmHrv69V3n6ruPeFsBErDocuap2"
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
