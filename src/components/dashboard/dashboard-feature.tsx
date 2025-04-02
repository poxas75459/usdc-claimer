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
    "5tqbHtpGz3737npPeQFoaHAwoJ2pLQBt9nkQYJ3kyHLTzzsH93QwQ4F9B9EDAkQA84tJGscBCExaWRV3ZfA8Ki2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sHArrp2FqZH6K7XuP5rn7EmwNFr2SaJNPqsxy6ZciLd6EVCMTexsUp5XxWk2XZZZVM6tf7sqDDewGWVxCt1ajGZ",
  "key1": "SuXhhJspMS22eFJ74uEV7nvxi5HDuCGo1fLXikhAgXo4Ez66KLkuyzdzPBkZL5FQPC1vmkznJCdSbQMTcorEVU1",
  "key2": "2NHLSNbdy8Gwn9jXbL5raznETiypEjjtuSiZVp1jxLDjpemSL1BXLrpXqv13NKVKhpaScdNJq7tvqDgNv5x4A8Az",
  "key3": "ymqd1PMiKVgzxHRBQAf65giCahh4ptggoVypDDXwJpESkmAkQVtkncixEvJjdv5ywNDzZwwyUMxJCBTUKoa4HZ3",
  "key4": "5WJp3rFdkPQkLJQB2T97VtxXJJ5Xk7NUsDfqJPnLGjG1dGm42jadyZZW8irqWPAeoAXK4ZEZASbVYjshWc9NvcG",
  "key5": "3xo5EwkShyD2iWkEcPUCXeWBPwQvRgjMPTirpmTSRrVC58AuwU2BbdR4LfjiCF4WSkJ3R2ZtUgfpSh89gRPkULRm",
  "key6": "25xtvbYB7pfVBxn9BJqhJkqsAur22zKgpkWJNHbqUMwWYKetbasNb5idkcF7QzkYTt39cnTZnPu3rEsi4usrCiXJ",
  "key7": "5j8nN58rjH3eCc68CAinwUBGpjX6cxjicYoaZrJFfFTBVQDSR6UYwpV4PmqfdhJEcbGP6zj8LhRvjNL1qB62bwZg",
  "key8": "3T1G38yaMv47m91J5qBhnBBzLUbv5m9yA1tzEYZ6zVjNZzdpgvaEm9AeGyZ2vFzWzPhoZgrddkvQnjim5iRCigNH",
  "key9": "4zSAccAL9tS9aXXREetTG2RFUsFVWPFH4jteo7DjqfCgSixjC9nDm8PE8EjmFdJ2ZcqJaVkcvE3MWWypD6hHWDfa",
  "key10": "5G57SEQyrHAoB9UubQ52ErPa1qQF5wDhjH1HDy63aeGjU1RWSQ4YuEeNygFbvcostGurd8Bf4YiiYSqApmt5KeSC",
  "key11": "s9c5Y1HfR5TLAwWPecRJCFM4LSj3XrLzEuFzdZzQBXNWr3xpzcEpSZKfoRDEzgHUeEFZkbz762Bc4tgkkwnwjzt",
  "key12": "4iXrCVxVRSaxCyR4kUtxiJJmyZkBYrLeHUG4EuFAKs1wjaEuxnZpeSE9PumxdFmmCLdpWfaw4G59WKBMqhBKT7VF",
  "key13": "27ySuTDg2mo5Qr55uujdQXzDtQ9hRh4KthDvJkW3WbT91Vy2zJT5Cqr1j1r2p69bx6UHQ4AQTK8o6obdPfNN59Ho",
  "key14": "22Q6inM17tSdAfFkQnaW3gXXHTiQsdP34sQoPxYne3JD6kMAx9uLSHvDhqLraubCht8dSvXjZPM83RthDCvZrxD5",
  "key15": "oGEArrytCpSRM22FLPR3zunK9aeSKA9CCatKcfRDmaDafmbZ3NB6KiqktWuwJzmwkb6AmCvGpDF7ioJAAwDHvd5",
  "key16": "5vt1ueuBvW5KZw4HvrQk66BNKYtUzinfp9zCLJQfwLf9TTGKfDrDhzujhxRPaXYacWFFhbgV54sXysCHvUmsGAp9",
  "key17": "3SgzTqcEwxNrUSMvxyYNMMKzw95uwk2Y55BJc8MhraNXosdxAinSmv5hAgfAm8ENRyGD65YpHkidWGGcVWDNWBFU",
  "key18": "2USiumtn1QN41T8sAZ4N6wqx5EwREBJSphRiSwUGsAn2k72RFRUVuVXq7K9LKYWxF51fHtLMpmBzrbqdpsUAKiec",
  "key19": "5WMtDZmrmBXPiWMFfQW2nNXFha6VpzYnqrsGmtjxx2iaPgAdqtr16eXXFxY29VmGtf8SxxYYXf4jZPpvZ4AxKPUG",
  "key20": "3uTbuEVhQzHqLwnx5XUEsE6nvAA3LrvsU5KPHHQeoNSg1qrSPCFVCkV79fiQ9gKhJzXs2G5MxUA9iQWTFxYwrXPU",
  "key21": "4wPUnD5QGFDU8p9oVv9LTCKUT64jSCWARtnqSvMmrGYy8vt4q8KGHaW1Hys8ENvT5CzDNuhTiRm6FYQFrBe8bzZ4",
  "key22": "3bTLSSxy5urS5WUWtDye6CftyQcdUDg2CF45qw7znBqYEoYKyXWuKg3SgGmFaRk8u3uy5HBjnTG79zrqAtV96Mvb",
  "key23": "42KoSsDx8zTbSEkmNiivSgB1SBPJzzXS6NGuS2uTy1XQqH275ER1hfVzae5ATFc6T4aV3jQkNWdD2jSD4NgYPeaS",
  "key24": "4xRGWUaNJVkSa8GLy1BQAWy9GGe6Ao37FXDwoyPVS1zmTujhst8HbekRiLAzHt9PbqYdqzJU5BvSJLi9VYKzp9P4",
  "key25": "4xLdnUkazZp3kPcLx5GQjMk8j2bapC1CzQHf18QwUU9nQJA5TMmQTxnhNi9YzJRPYJjLu2nWbFiAiuVnSN8nYP99",
  "key26": "3X8aYLtveRABfYYRkEiwYVw6WB7zxAwPKHLVETRFQs5ecW53sJ7e8b1VrmyYqoJRE8kJt3P5TcDQwGs1NiLm5DTg",
  "key27": "5ys6NwbhNByC2tpYCfpoMuCQmtEPQewMn49isDX1T7XBgdd4ifBnnbXXLNBjwrod3zd4SEUuTTMYzsTC3VkPQAaY",
  "key28": "3ab9uTpAXUBD1mQS9WWJPVXAdizwcJqQdsrZWdRP4h7qHmqsKHn6TkUCxYHWxpi88ekgTVbE6tv5tKTExXwEtKBh",
  "key29": "3LgcXdJ6ThxNWjJRQWKTbW7tnydpz9REkhCVtaGXMfzpJonFxgDGsXxYci2Gof9PPXasT4tUgfoyYmBwAnpugQU3",
  "key30": "4vPK928RMDxy1pX1eoipcu8P42GUCEH6NepySQ3yxXDmqQkacWR2y6AsrPDFbrq3XKXGP3MP2mfFMPE2sW4q6BY5",
  "key31": "43bwGRgza3djmHp7jmCG4coUe5H7XfkTKFQCBy3GV2bPCVJKwepDscfTa16qXbSKawuFPmWG7AF1Hnq3kAGr7xwT"
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
