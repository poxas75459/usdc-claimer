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
    "4XvxayChYgihGRg57FWo7f5wqiE9tnMoECdZamwYcv7Jkz52x1CgMULydiAgTo53Zfy4k6bV1awBzKhRZVGaB1vE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GS9d7pJB3Qgm3iNFvsHXi56NdzyTJAYKUNCUFUGQU9VAbNLZJzwa7HTKK8G4ot5uWFZHLhj7qBhPSo9YaM9ysRC",
  "key1": "4C96C9UHEGSdKxyjgQhQWDuejygoZN5Z7Bba38Vny16v4CeG9xhmtWBRqJGgXvQsbzaLfxTpyng9chpSx1vCfawe",
  "key2": "5hzbd9tYFp6vX8MvDbntKPZiNCFhB5AufY9dZ3PasYUodpQ7VgMLA8CKz15Ai7RjG7BEq6FUffqE2BVYhcvZpMQc",
  "key3": "XvSTEj6Pqx6Q7doKXeNc9gtcui5LS45eoAPDGxmxZyzr5tdtzmEPmbTTEQMbktRzPtwFcoGonqv1wxw4HoF4qMy",
  "key4": "37ZPn4jk9oQt4dUfG22DJo1kxNtZrDAnN7gmvqNXJDG21dVuUUEYsNvovjV7m6aMFfZjhCzWe6GdL3oryK14QmRV",
  "key5": "3w3oUikZkHQ1BVChZyE1JQjcDPDNaXAEGomgrKkuzV4T9Bkrrq84ddHCQk7dxjxF76EXKzT7coPAfqzoastncnbY",
  "key6": "2DLizTKWQEN66ogq6s7yidXnjafCujUA56RkeHoLkV3mmLsZJG81dXoAgZVHh4aZzUXNJjQb24nQEkHanDZ3n3wG",
  "key7": "3LDzie7P27WnzN9Lx27ZDY2JyzWUb6qgs5XzErrfWBtCNKiciEgrX8AnacEv23JFm1J5kWtKkaQPLa5j3PuFQ4pE",
  "key8": "3BEZ5FmneDbAaVGDqoLdUDQsRQyoH6nEF2ym9utUhV8y1XW1NW9nzJymtUKALDiFAedrSTjjdWtHBnesWtj8Dyap",
  "key9": "4d1V4GWC5moBBimLSaXePbjoTDoGVzGfZ1JgqrGQRZTfSUurvrzR2PtNBEkcozJ5yBKkUdJgroLXpwnHuzGrrE9G",
  "key10": "51eSmFLTxybLTA1AzyZi9e5HLN1M2x7euwhrQ5Xjj1TpWRAweJpRdsTjDGjDDiFRvnLW5ibbm8zmN1CembqGtaUV",
  "key11": "4YPrRScccoYiSSe3VVQrsarKhk9AgE6cJbDLoGMLBJ2VQzBBSGiSvbfZWQB5FQpEhFjDauoevaw6JKR82hciuQsv",
  "key12": "3eXCEcNRfVpyqZANBGjRV9xzVJYrj74RTfMQHKT1S4HpkNG9xcPbtd83qm8DcbrbW4NsvmmJniEAcsRwqRrrBQxb",
  "key13": "4tsRCmkyTUk83vmtHht3nwq3oYBzKz6gXjTyygmsavjGtYVuDYp9K5svHMF369jk8hKtZbDmz23NBfukU1XRFAp4",
  "key14": "388VpLnxcemm7kWszoET7cVEknSg15jdTMCEbAM13DEVbCGuPLDGeTyzxzxtD7RpbFVGWk5JfjjSr7Vb3w4Cn8q3",
  "key15": "3RBLjP2aSxWnveu8FKYBhUUNbiQbGSNwcQZykFTHKbp7wrU3WLuXpvc8NyxQZjinp5ubVSJkh4cM2tH7HW5Aynrk",
  "key16": "HM3Murd7bjoJ1F4VXsCD5q9fFdBkDTZY9E5WC65UFLEjVhGmEKz5GRAJeZw632oxL8U6Xy8wKUQWpF7VgHqfgQ2",
  "key17": "5FwpjqnnKUKziUKR6UyKBmf3ZmXfYAefc5TE6X2e4ExqTLcBCPw4H3CewWyRSwWcdVfNTxKbgLmYK5DQLKFPrnAb",
  "key18": "5H5ADa7f9jD426oCAmtuvgnPQpi8JT6rkNrATnrFVysCciiKkMh2Y4Ncua7PVLPxdmKgJMPkVjxRLApoSPGvzh6n",
  "key19": "3wZMkDrnHDq86XZ3LtN3nADTenWX6ZB4kh6e2PyeVw3KwbjEnc18ufWkLgAynw8qgsgtEcESSsMN2ANozzaZ9RZc",
  "key20": "bmP1Ccd4cD3z241bm7vuY7jF4um3xwkGRpNzwiJBVU2vCU6ys4NSK5VCDUQrnf7J2d3gNW2GnXBS2UatRJTJVp1",
  "key21": "2Gc13a8odD22cSWVQbguzBp4Csvhb48sYEjCs4jMjyMXwGdLfeo4AaqRyaeVS7ojhWdTzqmoQ7y1ojiY4TwgNT7f",
  "key22": "3PE1UZ3ri2bFuyWbbqo3coyY55vro9TBLa53TSJWMRmmWB5ABiiXGHwE3p1A81PiexfKHq5fW54iiMDZVtpRPxT6",
  "key23": "8crGZvZuHQv5TbMw2x15F4tDvZqNDimV6VrJaYkvdjAbvEBCG9VAWoJnnsV5E4XEN9LqLM5YUQNqUW8HRH4ob8Z",
  "key24": "2yD2eWGi4Ax6zLmjMqQCrQQr8AUSCwxGy96azqvRBCyCa2CR74swqyQeXpuJ4mtV7DKE4xis32ybjSXx1cJAZa8z"
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
