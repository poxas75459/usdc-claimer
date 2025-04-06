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
    "2VughtpkTTyfnEBEimB2iRHn6uXWhTNQxccUcnLwsQLub1x6uKuWwNajdQuq56ADyUF11DqCDV3eqPHWfk49fkMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HoX3397nWzfxw813GhXnnKQSBWdBHsRs1HXixqmuJv8uhUPux8bcDJEtCQSa6exoZ2BErWsTGjK7iCRpXksPP9p",
  "key1": "2MSXoHKqDzzydJJeqXERyKunuKm2bFxxzFTHhSQ5JHugHAc5hLLVPGpm9U1ppa6jGQseW876b9sL8r2ECo38RzjC",
  "key2": "2tNZ7DzUyFE8GAuuAaKjhcFh68eHB9cfbJ6VRye6dxuQucLcN2Ssd9PaY54n3BFGpr3c31nVZwytvt3717shLqXn",
  "key3": "3uiEvzCUXyrvcY3sduuq6K1gK7Cux7MYqznPugixAtFocoGEoAmYTZuNTckNcFU8mvdrZ6cEF8G82JEgLww37PhC",
  "key4": "4piREiMM73syDVmf52qdPyhx7oufP6BN1oXfGz7fZcTMbSwwTsp3y7EbunKh3ySMxjgG1JqoFB6XBBpzJD6mUH6u",
  "key5": "24vsutmVMxbTqS7ZWQfRUPHUQGPjS2WzEiaCX8YoKbW4Tjsjd1jWWZPANua1uzuRsV1nkQUdRwczrkVhYZ2SuhiW",
  "key6": "2Z9DftTNG8eUcT6CDrFbmeDTno9ZbSz29d1qRxFtCZs9StfAsijsdtR4dvaehaNQLY95ra9en2x5sBLHovJHFZPK",
  "key7": "352Prn45GodaVSgH9m19zFzdxqD7A4av6PQLgmP6hZvcpETSUgAdhuvP3uk3K4Ucn3wYbdyMBjwi53QbWTsydp8Q",
  "key8": "4Gx5sbkRhBJRJpCyjZwBs349VR3iBhyLrd4ubQeL5Cc7NtwTiNTrsQfkeMyEucEG133bjk23YLr8icggu5FKcVaS",
  "key9": "CdkQ9RHVhQeA9nsa4owNBpGN4CEGsveybPUtrZbejMo3Rxya7LC6azrhUxUt8sjdTVXVPwWLWPV9ckGF8gSfzEs",
  "key10": "5y2swrJJc95Teuo6gceizKiriSm9SxcpboB599Le9kFysDh2asaEQ7r24N3TvAsBBHWeiaz2k9xTTDqEeYrSyhQt",
  "key11": "5tzcrB7Vm31LpApkvd4XwmWofDGMHoUSLzToxfL9k2Uw3m1n8VktoQZrNAczubfs83izD2WR58PmrFDUdDDHJZeA",
  "key12": "3YNCmeD6jHRiZML8ZCCKwcLHfU4cr3NHg9GVk7o4QYFaAPqPyRDfT5wjr7NMekovDjQjbS4fL4rFnKYQKHTm9e5S",
  "key13": "3sSZZNJikxgHgXE6v2DunaKEDZHTv2X9Xd7gZ7vDBxhpi6m3XovGPpwui3626oFAmubdtte1hyBe28eD9forZbYY",
  "key14": "2x87K5opM4oMX3hewzfuKaHewkC4VKZvuvEDtH82Xxg6FRbPP4N5bRego6uUDWSBrpUWH98KbbHVEmSPAQenJBT6",
  "key15": "3z46ZzTVptH2JTj416UgN5aaJZH8Swtin9jYTdxkgxyXQyoH8AfWigLmRwPJbDeRYu6FK8J6hZwHam6kWQS3tvLW",
  "key16": "37kbEpABoUksvp4tgh8K9zGPS4zCCUbmeY4SbkfR8AaGtH4HUYXNagLbzcdcCD7MqpYW82ViP1PW6tyDFGkTpF3b",
  "key17": "54tB7jiSjdPjwAN9inVvJEUoGCLhrjeCcjFNHF7evhdFfD3DfHtTGup2LJ2corBk6oNecP8UubyRCn6hi4S51dZq",
  "key18": "4vUMdAzh2n7eW5D8Z1Qjer83aMUQ5Qs7Ct7mnx1ZAktsmiXBPN7CxdecZnaa2B3khda6f83ZTjCdHh7yy5XTfjMX",
  "key19": "3iArtvStrJMVpSFSPWUyGCrBXLuMKfwbKNbFFpRcJcbmAeNMmoSJvuVxA6cgo7KesEWjRsf7KCqxQHu4LRbqSTfc",
  "key20": "3uxwZ8Hbdgp8UfQxy7rpeoJS8PRmPJ17hUcpPv6NsGdtEhANWW5298qKGXfGVSeubMpi6T1Zu78itZjZQ5VXm6Ph",
  "key21": "3yhEuoCHz5CU7aiJUQTS2tNPF8pH3fG13TEc92A6WMBYA7hsmfKF3M9Qcyn8vithyHsQYQpPK6gLK6kXiuTo2Ctc",
  "key22": "2z41URhFGrmYLsNgdWBMdwkC4iYmBrV9HRYHjr9sJjBoJ63sEfHgcCKxir2QT1KUrTw1vad94bu1goMDS1ot6MjD",
  "key23": "p81xtGdPAGqNjGN6icHitSCDziNDgW2y9sa6pmmuCWoUpRxonoHE3QxbLTy2td7yoT1usxEgNFJMzqvm9tkHeCT",
  "key24": "4NKfC5Jkyq7fNxLD9dWamYp7Dj6QZQevzn3iQistmVxirJDKz1PBgToYvXU6gy3wgjML9Cjt5yrWkZWtVhSGABja",
  "key25": "5V7iTNgoYVebjXE7L7tNuuxYypyZvJDwgUYgJYabzJyHN43SmFBUFZp49HDfMP36R5Wp2GYZ1PwBFZUcVjWRyeWJ"
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
