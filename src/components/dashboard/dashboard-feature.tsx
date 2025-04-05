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
    "5fHzaenUm1hr3jdKSQvyhtU6VDJCZ35QNQUCvsHJdQrY8dHyXna52hzgMZhcXG4nDAkcfsarQJwJsSWKVTWn7fsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46MH4f2Z6cFzN8jW1xEJuAVZT34UsSZ9F3qjiGSDSrumPKRdzVUPx66fRdSyvMkstGeeRFggrigJPMBYPTK5otdg",
  "key1": "hrDkMzAuhrXdPtrnhG3diqgYGrAQvQnLtSvXukYLd4nE2XioerUWGTaaqQUEeuLXkXo49oGxzbVwsehGN5PXGfe",
  "key2": "4fUvAmaw6vXYPFjm6gRb6Yep46oxRucXR8tm7Xy4cLg54k5hD7cLwiUnKSiir97dfc3LU1FQYN89dobhpScfTqrz",
  "key3": "4c9v87HkB3bPoxaaGTgvoKrWR4otsdjZX1gCd2BnhmeStiSNe62PwYYKGNDNrT3sL2CsDNoi3Ksg8iaPtzXT7t4V",
  "key4": "4WWo2WXME1efbsU1DLozUFiPEogyfuW4Y5xxhNCvuBHx5b3FAVUYRD9wgFv1LHqMaifK1yYXRcpK99YegrwvJy7a",
  "key5": "CtzXeR6FHiFYP3QHyhGWYEeK9WFrwV5TFYUvrcvVfEAbkFL3SFQwJ5rNt8S8yKaTj9deJxPyhuRW1CPokPLnkrP",
  "key6": "46RFcsyiu2iGzcNGpbED2sQ4pSAWabK9haX3MJXrdaJNSJiriNMbiygPcKnaYjpazRZLWHUhsQcbnkJvfpEaxk9d",
  "key7": "3zW5gN8dM2wwUbSB9ndqtqsxXt2AKwCG8ywktew5WsZxxacGjeriXxHpVA7XejTKX9kAY6wD6CPHqjGaw8UiqwXJ",
  "key8": "5sbAP21TCQgAcBDgQ72qnNTjPnVVU2dJk6miMmBYiVvUsYJ8q1Gt1q7TJvnJhJU5gZwJjrekV9NiGdUfeRCCXrSx",
  "key9": "5qJ263iYXCHR27iGsq251ncQ4b2GwZWSJqj6ezzNQbv8gUEnUmsBQNCaPF4JdbAkD6LjYrd6AXU9gFEyyJhWPc7d",
  "key10": "2RSJQ9Ua5xgJpkUhRRtEks436RjbnoM8pnEmtAfQsdeA5QhoMTpNENCEmsBCYgUZ9Cth9hSa3iYgM2cJhySpSZGQ",
  "key11": "3neyKBh74foyc494drCHnBwobyQUN4262oLFCe9WHs3ygNJNzZAjQx1arZNiFg7NQcZ2TGtqnVj7Qk6C8gmWUXZ7",
  "key12": "2GFVAkvK7btp8SFuLGEb1b9YSDCzQZezcfNMqQrPS53bmb3DwrcdfiAZiRjhFHRjMiKP94ZCfMXHiLgAvYbmbQvK",
  "key13": "53Vt9UwzYeT6BVtEHsoF8e1e8U3YErfQH1VA4asYE8ewEGJGEGq748KK8Uep3KemaVEV3rEnLeDvPzvEhQ4gGK8k",
  "key14": "2zPNEEYc4WUBczRyDCqrAYHwuttuoSzsNsGjHzo86KCVpm1zwEYQ4k57QXJqNwX35Ava2tWGf2n6CGdrD5iRrZxH",
  "key15": "4N5aLyZb1yDbx9SCtyFbhsNHQyoFUs3ynSyStW28d3eKeFhVXVxy3PznSg5ymNCFt9shdXcBxExtZorpGQXABDZa",
  "key16": "4oZ3aFX1qzrR2iLSJgTH1d5zrbnMRh1YwG54LbnCTG7WacZ7HXxd5T9K2zYLmaFUiU1z7tdb1gEQkPLjAbB9jQ1g",
  "key17": "H1xvFwTtDKcdNwuCsTXNY61ktJFRwo5rN3a5UJG9Mo4Dz5VjfdcJyjydywUVE6jQCTxw8QuBdHABQSvA46EGd1k",
  "key18": "3V36ZmdFRdSaazwa6jhhDDTAVf1eg4y4GuyiUdagfFe7EbdNumLyBnW6nKBZm1tCNPk3tsC3kLuLPyZbWiJqBGT5",
  "key19": "2MYLaiQtk1yJPiUx4aRr5FjRrG4LVTvrhzKVsHVpnzQSWtCPQ4HEgRu7mdtmacBmNTabo5WTBDNLuVaQA57JXFaB",
  "key20": "ukhmwB5NmawuKBXvpcyEkTqtVjdw6JN8TwZnRKKMxLRGRcXEHLHtyYaTpzaenCQwLSGueVpRGp5q1R9GwxSRumV",
  "key21": "2aYrxg6JSokxnR926GSneQ6VnKtLKGdTCHBG6j19GjMcoSzqqxz6RtVmx333k7Czp9usb8QMUykBF4XcuzpR3vAq",
  "key22": "3NF1ryHVzH8TGj8WpNG1TeDbZS3YaC84dPfas1U2nucpWi2stFtXsjWjnAuFE3wEvsLvXjcrwq91vuyDMcuSjG8F",
  "key23": "5Fx6sopy4UXeaqWWtfc4qNT7bsYpGyXCGAXdDLA1V2Gq6EXQvkACHWVN9Y8bwiekBKcUGS7Gf6UbN81YCHnATjXC",
  "key24": "27bPerGCQzUXJQjxe3QtSgXWYaD1Fh4UvooAGAhH5GvX8FjpgmcRJa4HPwrd4uJGAQfnRL7MdP2m2ubAnzrradFj",
  "key25": "4LjEtCTSB2mvGAcFjv6z1EKQhPtKxBYcyuu9fkewcYFxe97MmhDEqRctgTMX53nWPD8rJUH9Gs7EBoxZhfzk3vSB"
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
