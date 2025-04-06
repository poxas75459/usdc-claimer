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
    "5hG7GeXTGRh6Ss7BVzDLyU79CteZP5fb6q4vT24eV4TAWvc1b7SSyiGjHrLZSHshuHUDrHVAn5RnfEj7Kxa8rJQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TZw9j5xoTgFCmigDPhMKnRXaSjuPGW946o1kH6qbiPMCvPDnCV1VNMG6en8zNN3bnKQ6P6nsygtYu2ykXKF1fr3",
  "key1": "5feoyTfis947LW7uRRgrdquQigxtTTaC6m7TwfS2muFKaTVPShd4nczXqEEUQ7YTmAjAVhWVFiYQHTCBLqWjHy2N",
  "key2": "5NYTWNaGJFNqukGALtKDPGMsF7Lvye35ptZZBZzF2Hn7kJYuvnzAhEWoWbtdrdAkcYUnbj6N7eVFheBeaMHCBkaR",
  "key3": "5NYGPojJLjQ89LumsHmQa1n5HMzANEicsC6qUGDH74ZJHEz2Aci8oxdVDbUaD6G1XE2Q2JMeAMATEUvmSJkzRHCP",
  "key4": "4hfnsgfXTDqMzwZapFgpVy3BcGspQAKw2tVqeU3zzkQFWsppHCYQ9ygccohfcp9Tsog6PB1grGHKzPMxKbkKpCH4",
  "key5": "byvkxp6PqBkgMvnpHoCT2j9fMe33EPq8iEXTnP1HxXtG9hMJHKyai4pi9d3xk41grau4y4x7wSCpGMfxX2eJyeR",
  "key6": "38e6WRXt9eMCSXB75BSFeBoEP8oAMfZkRYGZpGygU9sv83E8CRAhQJqrPoS8ebAHB7HRWTvMUsg7dyDn8WuJdLE9",
  "key7": "Qshq49rjEaDCqqX24FX1FYAkMSQaiPJVgPR8riZhWCiwbpAQcEbuQCG9iVpzMqVbw2qmEkKyA5St1Ex89ZvxZSw",
  "key8": "BjN3igUeppLPcnhquekw2HXn6SCBc2gVBJ4G7ASKjJG8e42mdptMDssRaCEsCKpMeqSgjCiPQsrDjWdcCABkPkB",
  "key9": "3fYaxtUTn9KuoSQhgfdGU3XAGA5HLHQRNLvNVDsxgXQ3FWg1pP2DsuzHpjZ2ixJJ18vEpe5LBsVr1sZLDt6t3Dbf",
  "key10": "55REAYXZy8SQr1ftBZ9R82Pb8ZdsPQEbMsjaY1g8MuyZxBHQZs8KH7R5ciek58VqyrkH6pj4TqCWBJfzG2C68ahE",
  "key11": "3BpmB5cxM8m4oBt4qUrMnCjKVpA5wNKdNTMGjdWZiDTch9Gjwvrx4UDcb1MzD13jKJCnUBCKCc4mAinLD6E1vJT3",
  "key12": "16FbLRZkFAKByasCPN7vYVA8A4wRmBeVit8wHML45EPeYg4KtRbeactTj7NiRAZLGTPXfSfTxAy9unLT2H3ThdR",
  "key13": "5fyYxeeNBaHqbPSnqCWHi9m7GBxtcEEsocQ782SkUpYCdpbT1bx4wSxaU6KtRVZ1Cp317gfMSkqegYF3rUEjBLYw",
  "key14": "3CJnQVjxLXnfArnLavVx1MqmMPUcqv744j9samBLDumfHpmjA9DoDGXrferhrgydgn4WZPcitbieGkPfyMUDyMio",
  "key15": "97XBtYNCURfKtkvQaGMdSE7H16qVpvSUByjmjQ5rHUhVsrdhyrTzqABCPyYAtF3eeweoTKdprBiPXVeEmgZSWeQ",
  "key16": "4eT2yP1robu8pp8pW2guvY5bXGRhqBaXDBkhrQ3eUbzjD7LRp1o6VuqT7sXsG5Jha2yYLFMrp6Lzie3bty1R8WrS",
  "key17": "sLHdodBmVWxWexCvzp84ZMb77dUbDhr91jhH3Bsz1SHpRwcoTrZMFhGbQnrpLZB7LocXBJ9oHRJ1QPrfY545cuj",
  "key18": "2xpPVeEb7xPbCvKBiZJjmMxyxED7z9yMqVjeStqP2kEUpWhwukSETfjqUCAy9SKWLmyct3q6dfwEhxWKuYBJwfBL",
  "key19": "5i4oDe15f76nv4WqUVn2NK8UEeos8rGCeCWL1JSKuXsQfNkFaDUWLWoiDGMAcgS3YrBkStmf3dErCvzQ6Qs84dkd",
  "key20": "td5teChChGGfnuttsftaWZLgxKQBjSn4FdjTcU6Ga1nGwwg3fUbxSDd8qJd92hvSjoiqFPWsFyGMQPyrLBfTPSw",
  "key21": "3zm4od3zzsY8qzma5CryYdUsnZ3WF8TuyWGRYKq4ckyrghB4SDbyUF57p4TSaERiCmY9MMy7oaSGa7mhXcz4SNi3",
  "key22": "32fgwZy4oXcKUEiGr72vsTFMgHnbmPzgAZvHNLxidDKNetB54zHez26gCQbRu1FAZwh4dAhRKYZ47iDNJtijVHZw",
  "key23": "5XqkknTmpeBMeHCRp5gMwLFLn2k55rRpVWLJjV38BhHWyX6V2VU4EDBS3mou4sYWHqKfDzHjo7mbmcxPFo5BnA14",
  "key24": "2T6mVG4aLfusF17SeSRZ4hw1xe56tVVo4b2gFteoeetPt3ZojJ9EBc6CzXrrFodJHCnergYsiDZBQkyk9CvUux7m",
  "key25": "2zz7WZBkBUkqNeXUJJog2iXeJnL8kwBrTnrxx3uWtg6STYiHuq73CHsbnNj4Hn7RWoT2ipoExmE2dmNCXwTDrK5J"
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
