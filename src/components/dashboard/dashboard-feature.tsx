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
    "pbXeue1DXohZKJffiBBtHybfAHgUVF71D8UnCaKJ1SMNTk3Ncd1FqSJzTV79LiYCryP4V3MFbr2vBqGQ93b1wH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EjqXKJZeyx1aH6uADN1PEERZswjTzwfpb2Y4GDVwfT5gvG8gTYeaweaVgQfPy5L6W9ioQG7vvRdRpQkcdNsyrxS",
  "key1": "67Uw6Suk2oK63YdFz3oV9UG32jrgynAL4Qgxisk8wzrERufRfmEuk56xKrpFUiPUxW22YfLWpkhBDt7bBRF91DmJ",
  "key2": "3ZkFgouPfC3PwDXQ91iMkNfFYqxMJSinMo8B74RYeSeHTowPw2ZebkyN6kkNy9pHephJLonBLiR5SrQQiVKBgQtv",
  "key3": "2xc1dAJNa1NffP2mp7sd11wQvq7YUcJPozfU8Y8yCz8XuFqCAjd7JABJ8d7gCVPy3Jok2P7NGcLkzaJVNLHa5YPW",
  "key4": "2CL5ceqguSJTKmvnKvTmk9o6uqCnqiDmjQVufmWKDbBeTXvTPqHuhmc4SPZQBi88wrAkynzDqGDaxwiekYWj7PxX",
  "key5": "2gQBd2MuBsNY5nGZz85GyH42otmTKF25gHC96sVP3hG15KxrXt6WDokrRhwz5rwfNGdmvqk1U37WL5Z3h8B5D1Rd",
  "key6": "5CB4FgbKUn1WmASJNkVpMNw23nyzwURh4spw5iZLEzRs1LH1DfxKUeVj7qHw6mRxFhi1jpHnYeh9S6Au5asE8uTx",
  "key7": "3dY3rucSuTjBBn6ixibDG7167wHs5LPhjcYatxfs6r9ojStzb9ijQDeVBbJKkQudjXXzySn3eNgcaLPR7KwBa1Ay",
  "key8": "46WhCUZxpQUYz5NAssopW4nWFepQjhq58krPtPPHWspN1zrGqY4d1HfRA9mmULWRJhD79DEDrPebMCy3An33WgFX",
  "key9": "2YWrNbFUSMbWeKMaNnSnVmMe4yEE23GTWBgUzWHA7WBYS4cAAZsuCDbigwmwnEa2vB4iGFKZtmXXXoscGPwkgNeM",
  "key10": "4vNy1yaeMSmUdG37etTWCwwbJtuTbfiXvzver5m8uNXunf2HDpxDAYqPaNZXizf5XKqw1Yf673HrQDvp8VGgVbHf",
  "key11": "2v6pPZBamrieH9Ch56kBvCMpx3S1GBUYCcW5AsFBi51oBRyWg3GCZ4oHpKUJzRdJVpZvKa3Mr82fdK4RTbz3MPDh",
  "key12": "3eDvJfsQqVocmb5etghrPz3aGoEg5UDm4trxuGNupZBAwrfyxycEEjxB153UNNmZofborWUkzfGCe51qvf23bRLw",
  "key13": "gsa4b7sGAwXe8ABJEXcdXcpBmuCFHndsTox87QYfx8ttQZufGHj6wiaEQfttLaXZSgvscGoRcZ7UJG3xq2JjPAp",
  "key14": "2uY8zgYvmsKsGNFDPYLPDbA5xb6uF1EJiocBkkvyZv6kQSLH6o6WSbgPMXsoqVanjZcwWFoHHkwKj9NpDSbKedTE",
  "key15": "62CpLMaWmejjzQrme3PidKWBEKGLQhZDUN8PGLiDdoSaxF8TwLUNR87ks3DLMaVV8UXknM5a5kBkUesrsSPEAq3h",
  "key16": "4VQgx8DuGaaXKqCkWeruo1H8vGVBDuFuQKeL34LXgDybwi2ZTQeuk2XVLXY1qjAHTrLuiFsNyowuRbqPeaRQa3di",
  "key17": "3rgs2Z1R2uiKttKGX4pF7gCJfNhwsPawWdydv24GzutCkoREazy1v7zqycXjMmcuZyEDhd6E34oVqxjBsEkm1G5W",
  "key18": "3zsZSpuPY1KsgRygDVm4Ds75ggNKriUycRXcy1jWnGaJZ5pmV6T2jpPtpcmBqpA38EomAiRfEEAkxkwQSPPcQDEt",
  "key19": "2KVihdirMJjxihrAVWun48cT39zLSwzgEBS8Y9JmLxivhs7PcbZJyEMihQHUQHio2uPPVdiXsRyJodPHXCxru9r",
  "key20": "2GPqqQGM9E5a7CKM8SrQjakBhcTtQkjR1Z92cKMW9JQ8Rbex7tfxiJSgyqettzqhk1YJeb2jZgGjjqTfqdh6VTDe",
  "key21": "2rz6Cf81FkYhq7oJyUdW8yKXmubRZrdmBcaV9nF5NnCtJvAZbzPewjzv7Fy3ohMMA2PawxbdPzExAuEC2v2BLzRL",
  "key22": "5QHMsgrcCJpi4yyTrcpKj44ADfoFHBjtNpFQXxG7eVUdZMes2EGw3PSie56v3JMpfGgoSEFP55wJpwWsAWH3U6jJ",
  "key23": "5FMR7GzPbjyszKJxBxcvkVz3NQgnwR9dN3aQNkHgxFjKqixh6rTZiNxGW2h13HmvPTkhZwJq7oDGKuctZF24WRYq",
  "key24": "65G1KKkWwjkidJi4mmjxT8Fqu8SBEDjQ5Ee6ACwwx2h5CWgeeaEmg93gVisjDUztQmsApwTTR89Sr5JcPpkXuUWX",
  "key25": "4r6N69cuonvvWzDuZgxu5s62CLMxaXt7YAGCqYLrvHHzRUNtEuYrvBsW8jWnCWN35jYZmdFAaneVRrBjT5CtNZmY"
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
