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
    "5Cezv63rjpUehrPmBVFAzkUYpFihkyFtHtgp4ARS1b6hm3xArdauo51TYGSh3rdt7ipCsqf15aUzpFqLgNMQbw45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hh9DdVUiDxsf2K3ZPRthcq6wecpEkxiFvB6RSFLDQaBf1erM8uuRm7X47jRRJz1MYZt5nedUgBUQuoGLdxJLA4m",
  "key1": "32Ap8bqcB4JRcbSxkZQzr1hAdxqV3KKHNb9fRHfsDZq1fGM8e7NwqYkfRE66TXTY9CDYdWL3XkZEGVntxsChhMcd",
  "key2": "2fJ6GZxuN8Rm1aSrt6pFn7E3cfHYaBQ2Aymzx67a85YYfvpqhRCiazuLi9e835yxo4yK9J3MCTqZ1wegrN63LPLd",
  "key3": "5vDKtWKi4DWtWMSkF8YdByr6jQVcxUJrK65Lx1pqN72BgGWsYdW6KyyTQRy2geSt9ujQ9p2ZUYeNdW2mbpjsbsdr",
  "key4": "gpfsYJK1FayD8uAGMjaL26zVE5nEwy2QgXHb1nMDCxu8QTH2Wew1WFwjMKLjWPNhnVAjHbUNaQv7e23N2MvJuQ5",
  "key5": "54f2XiavzUKWV1SgjJ6goahosvLNmJ1K5fKenKZMYe1z1qBNDyxy56TYATJmFqoSH4JmjwvBoEBqM1vswPprwRK8",
  "key6": "dhPoq7VVwcXnQvyfyVJcQumFe7JwXonnrhhKaPYHXcFt5a1o26dyyDKMQtZxETCNVssccjSvR925gbc72eav6yX",
  "key7": "3ATvzwQdEY7SdCR4PJ9ksSr3QMDcmUAhwm4vin8YdGdV8WK1cZA3MwszcMTg3c7EZmj6NTSCRTbsFRdAizX2TUnV",
  "key8": "5zfpPsRaekh5PKiYyFosBRbWSDStBfQZWTMNsbP2u1M7kgDU7K5sQv1J77gnhNnZkbSaPiUppmMPKGsDrTU2JfPb",
  "key9": "5F8jqRkLGDVXNAse6P12kGw45Kd5bnXRX5M8xPGqxynErmP95t4QABV9d6iGJYYfGZ8zBo5JWXXBewsr8HGQD788",
  "key10": "5XQvxJG7ppmq35RV5BBjPYirnkxBJgPTbmAx7jGnfHmGnnQHdmKHiCF7gymcPMgwJjBnngZjjaXs7Y2umhauAqGo",
  "key11": "4ThAD8e9kP2QLq1jdGKqDAnkezJMzMU74cEehhmcvxuZ8z8G1Tpc3KjmLUtpbf5XD5m2daRkPKNbfGKEMNEPVRjU",
  "key12": "4k75GPBXP4QoP1KgXindWZsZPeuYcF5Ntd7pn4Fi7yDgHHh1uHVyxBSLi7KSdde3ScWiNsZYzHWJ5CgbcByDB2Te",
  "key13": "2puFyPiDJTp45Yc5ZL9EjqeZ6avpNK3AyovnYzy9on7wFs3jwzSyoYfvLC8bheZBX6D7zB931F5aWPxXTd6ktTeq",
  "key14": "44pzVMM56p3uqKCaM6XNL69fvPrSfBUdn8fV3VeNwiikuvzwu8oXLq5hksuHorrSBRUGr1Apht5D5iz7pfBH9GtV",
  "key15": "3pwfNEafNFoCjMhfxfHMe3EckxMqJKuvmaus2nzmgfezRNhUKwEaRUR349Rso753MiVtWSWCueojQnmMqmtVveia",
  "key16": "5zc6DsCB38XDs5Noi5fgB3PkqrJajxiWFbFvjCCAk4ZtJKJsSWvmUheMJkDRn6xUzByKzS7wf731cJDJv9HHDs2Q",
  "key17": "5GDCLD1fgajNszhHjYBgVwrZsN4kAYvwyXv8Qe3ArRU6cSnQZdP7AiXGQYMfckgWhGTVR3MGJtsRwReup7BUoZVM",
  "key18": "3NGR9VmZYxrjKYvP12N3ZtmozPUxFBKQZNW7neRCpHCVwNUwy9UgdqsaMJagJk2monSKFnJqpxfNTMKtpkNGzGU4",
  "key19": "2CkWHYVD56UsrBuKfjP3xTuTP7c48pZ4m7h6iQo4qhxagnj16CMzVN97bJfpE4Tbd7w4oUvxKiEKBUMq66RZfwaK",
  "key20": "5qojUnVfSR17coiNnrVjKT872HDLwMRNQaBsqzoaNsuiD3thxLLH2vUKrQRELQCvpaTNBgq2kyCXUMBznVvcVZDy",
  "key21": "2JbtfZ4416boBo46HdcWHmVjX3y3CRKxHoLQQHcCXEGrXFUJcEp8QgV9BTtoCWimy5f9LhiKkfet4LaB6i1iegXj",
  "key22": "36vGntUtGF9oCfTrezzWqbNgprQhAvM7PgpbdMYSqKPSkhY3fpociSe6y8mXEFRM9yJEMiG3PgMy8Chd2gownxPB",
  "key23": "4oqLDjcyS7kE9C6MHU9i8ZiycCAMQcjjfTgsdz1dBpK1iW1KrD27kRHU6wUfK7pja5zfX6LgS9SpGziuv4BLQ5L6",
  "key24": "yenRSTTYFizafCK1QcXez2547nbpHQhBfXZct7Y854y4ri3qkENTnjBWAugoPm38o1iPt6EFiHaGq5HeiiwTM5v",
  "key25": "5VuhQhKGmkVbCjD5aHBBmZxLX8zdCUB9QMYgDtLkvKbx3886bYU7XGrMRkJcCdyFUYcMYR2LhveGyqghWqBDK5FR"
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
