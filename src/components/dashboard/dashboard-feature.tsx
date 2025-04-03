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
    "ECLF2R7NyfUauzQqxccF1qCqvm89JHp962u76ytZdKxPp7x6HDArmzou3KvigdRMn3F8g6XG6YdEtx2bCUpi7ZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ivPzARi8eERnsLYtsHMAhZYYAMFhRDPj3fuRdjJtULxJzZDCCNjwmnaHYizq3fiAiMAbHn6fW9F2rmNTecdRHko",
  "key1": "3JF2XrijjJmqjqT55NYwQHGo6fQvY7J4uFaPToiP4raV3UkgXqyZWqP8mMcLhjtADsMz76YWTqPeczPdpRHAn6PD",
  "key2": "46pn847bZ6Xhnu1oUmdHifFVkvc5NKSBJ6Zg7zDo9WRgeF5BHPsVRtJe99TeZVVMPBUCFL6tysuKRGMrsvaQngFj",
  "key3": "5xphRikaXn1CMveEhXf7GRhCRFPchK18psBDqTH99sY9E1viZ4nWjdwFfj5Msmf6rffswJgnebowE9S3qXC8TNRT",
  "key4": "fygfRxuiBzxYLBQiThK5TfiMbgfFkK8jF1a8iMCyovi4x3gTGYzLSwuwDfkQyKoPhehzoTiLFp4sAw4Xxua842i",
  "key5": "L7jWmPtmnezHMR7KNCcFZcn6p6xYdXb7iYNjTanABu1EDJiPFMYWmTt8P9bTGZhzAvSn6B7UGC1yEfx9oRVg3Df",
  "key6": "yHb8e5dQ1g6o2ZqVpc2M6ueCM78Ye6M523Xp418Y9gyvwXoDGuCbGB9ESA6MdjQGSvWZDZidmR2H6BXt3CWW7JR",
  "key7": "28uN3Y5ac6UmiWZEQTRv2tTjAsFEwz9RjxGYFeBR4rPQp5rb9qRy9q5XSUMpN9KHSKnHEBgBWUbrJ8fnPosVtufQ",
  "key8": "5jUZkQHf5MB6n98CzbK4LxhnunwjwvRTS4CWWCnEv6hfBWAss7p8GHezPui1s9Sv26qsJh8h8ZRWh42RGUKSCkFQ",
  "key9": "4hZ7TubaFoyya5GQWBU5USaJJM2eYjkoQNJ516p6fBmRYZKMjj5x9zpUwRTDTmnRJfx2k2AGXPPVRfcAqHysteUi",
  "key10": "2Q9VEBGXUytTprhL8CNJf7thxe18ioXt6WoRUxT7Ts4x5Aazh1eysPnpHCLM1xLEZWgwDHASpRnrun8hNCYhEafr",
  "key11": "4aMUJvpmuDfoCjndX4FqGoEHdX7jeRV3puqHzptYMRv4wbggo5iYTecijHN9yA7gaTHy31GRoVXVUSKjAZRm6LUP",
  "key12": "3baMrnochri2az7aE3sj2GpPoqyejPVoGKLwXB2kovPCp8aE2Re1JyetBjy1s2u5YU5qrumWVmyV1hiQwQ2xR6gU",
  "key13": "2thtHboGU1HA8Zg5Rsa8to1ndJxhSYg9VXD2Abrq6HqK8uJpPk6Bu6NfUPv2JWrvuj6cY5adU8Xqs7DZgVAzCe5b",
  "key14": "3DwGCXvgVTidvMtekoP8CRZWQRT4JUum17pPK36nPHmsRYrwBwEjy4xCrvTjhzV2Y5TmZxZTjEhqjybrXkbxDbiw",
  "key15": "FFbuCiH5tuc684jxp9NqPEEJie5Pp5gNvnUN9t3KTaf33b7QsHGGiKydf6FjZYUX4bpkmVauTffnv98yPpKUpAj",
  "key16": "3Agq4F6dy93dcpNvkyixJwVrR74ZvKCgs4YRAUM49QP7fskcTrs53P9WnT1GjiHZyJui8GkN91qnFqU7YHBt5NjE",
  "key17": "2BkoCC3qm9seJqztSHFP7cV4goSETzHnPdMTaDErxWufiMunx4r4eKNsbX8kcaafsDn6joTgDEFjwcSxdKuKp1ip",
  "key18": "5mWcR2FvL95CPUjtcEpMjqHuWbsBC6y8EnJLqz1FQ1FHnJ1yGVWp2zimW2dsiAaMFLZVeFGq96AMd3YjpWAnXCwb",
  "key19": "3JEjLXuouifoez6ArrQrwwhN4fS1ZhsRgZnkuXpKkVrCVCUtHHM7ougwXzqgc4kpu8KNS5Dxfqjgc45aYCQH8YWH",
  "key20": "5YiZH5c92NfQXqFBSZ7tuypdJyUYqFwdaBu6HupH3zxvuKDCnS3vAZte3iafVmDJzBeLEHCqQF3qL8GQF3HsawYW",
  "key21": "23yxtv8A351HPZGgckB1Zqr5yEUqa5qLthV1ABpbg9DtX1pzta4ryoMk3Gnm9RqUvwqGGEQReYNUEMamcUVJUqHv",
  "key22": "66LvDHnzaTCenrVUon4LBFSGSnDVxNjukL9hRcjtMjshb3WSHsfEWfcHUrqhRw7cL6FLdRCXEeFz52q2bf8FmhmY",
  "key23": "4zhu8iFxTWaj4XcQuACqAza7g1xxQsgXUfnrNs3ffbDW9yRYf6fdN3X3cP7CoeYpCToG2TRmTS156cCLZbu6hrEm",
  "key24": "4Tr1C8W1ENAkWcDLVz94N3Vgd3GfcVxDwSFXhsz287ALygBU2qGFhrrrTe9Z1XXwV2rWeRXGtKLvJ8S5ypecSVRC",
  "key25": "3THuYqvjWgs2MtjcZPR3M5BMrL57HoJMauspBq71ocgGMhxd22yWPUaU1M8JyE6YuHNFaJ9vzcz4SSzz1YQdX5cM",
  "key26": "62ppz49eRtfnivAbALin9x6mQrF5pxK9Vxidcretih2SEKxm6B68pTfv7nJZ9WE9H4ecAipCh9Gbarpcoa5qwm8i",
  "key27": "3LrUdFzXQiMErGEQbzrCcDoRBCGWh2j1SDA6x1NuGSwBCnoVyF1iomY9rETZziTYNXQRd3g2EPhjAJPwzjvB8bwX"
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
