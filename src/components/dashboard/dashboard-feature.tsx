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
    "4uWG8FDN6tEGqnivbgLEBBehNiZsvG6s6sNv5ZRtSamwhLkUMZoKU6oTDmJKwTTB1mNTrjGyVPDZNWwmw9WLMys7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xh8WRV6b6MRQTyh3ttiRHwLyZpTCD1FRta1LMewAVCTw6BWPUBZC39t6hAgM5HTYGR37nedHTATLSzkLaGaCJNd",
  "key1": "3TJdHKvT4Dmpos7CRopgycBgs2vkTei1wxcfujnXjX7M19ULxe3hJFwT2FM2MAJ7TYgNWVoYkhznAoB1DrWfXFMB",
  "key2": "2oCobWM7wSXxsjppwBNP1d9dKjd8HpmtR5HUPrgE48mkqurGt33TmX2Ny55N5v3eB54AWZQ76e8WJjMHJAjNZh5j",
  "key3": "2dcCoyW66B832P5rGzYGbES4LDy6so3KvL3rKyJyC7nKXTaZ8cJaGmq3nmJyuATNsP25Ur3txPjaiToRPinqDVot",
  "key4": "GYdUMazDvydEw8KZzA8KcsEdCCpNHm6RuaaqgbASYQKk1nWUSUPUDwscXg9oEWd9BXA1btu6o5LGqMWpmfPDqBu",
  "key5": "KBq9Wo7NnfRjAtRAdrWepgWzAo4DpCMMxKpcR1TQVSorY7JYEQw95j35kjXRtj2M77W2EwdHcbRD4um2J4bFMn5",
  "key6": "5XRKi4zXXrGxkzN4p1PsoVVU9KDQFjGGHPwCz16s4moUt5kbEgDp1UDgwN3tAUBWD9AFGsDtAi6VT7QoX6ZKfEtT",
  "key7": "25j5f1NmiAyfeJsbXJdy4FA7ZYJzMLiavZzP6d5aNnvjuMXXPStc6kQjsPWm5tmA9AGGtAREoDYBNLqCa9PxnFRK",
  "key8": "5X8549feeuVt27m6X8cSHnM7NWkabj1sRYZoQSiT1kBKkQ4DNEtVpQft9TZVpwnX742uPTXk9172xLdB6BgEehpt",
  "key9": "56obfBSQN5UqZ4BbvuZuskKyrh1yUuk78bgyNAUULNsiMK2Jxv4eQbmsshYJA7h695kUBQPnQzK1aKp2ZppfFfF8",
  "key10": "5pKayiog8NLcEfGR4ZMkLPcS8W2yAEUTbMa2XbMLfdR5rxNPR4LhfxBUPevU5akHuf4efLarJHK3mkTZTzFvYjK",
  "key11": "54YRpf5upHsDbvxJgkoDyc37CBxoWkQ4jQYJdzoSsBSaHmZhiqsemz7FtmhgvDBwYGVmMUKbexkXTArwywFEPFCw",
  "key12": "67H1bNQxGfXNywc3eJV5A6szHrXqkfqc4BdmsZ5NGfh4yBm8HrF5Mr6mLt11VJj74UnkWD4dCNqdMva7txT1XoW4",
  "key13": "5M5kEG2gF9PE3Pp64B98Wh6DjfyXdcAouEWRhFpkqu3zim15aFTwAh3UraExAoggmasJjZ4tmjLSmRWydWNzVhK",
  "key14": "RNuCrs5UGsUBCrBo4bd8tbB6NDGr48WmWcGShw4tSD9hLXjwZ358xCE49EJF3tmZ12ZVRfiHujud7vazA3Xbve9",
  "key15": "ShXmVUCtMVMZwZdYR9JtjbSHDQVDCDeUJ6S4esh5j4VnY6j3jvGVnrgd5uRNgnbYxVyZyxCsiqBELHR1tTB8b6m",
  "key16": "pVqz9GdFUwn18yJww6J3rPhxy2UbuQVSq895cp39edeCtGpYs8re95588mF2CybskNz3dpPcyoCq2GGCJeaw7Pw",
  "key17": "5untUaCRqhBHv1NNaxtxuKKTgBqY2PjDmbFsmhV9bXxUMRW8qALSfBanNGdtiV2XRNW6r8zF1DFSUwLDNL5xEqGZ",
  "key18": "2QSWcuyeeUzWomiLZzD7bigwNe2PYeSK31tLHJPn1Vj3o7dZWjCyuC9Z9LRj6UKrJPrBzLdGzjdGMBADuJXyjSNU",
  "key19": "52QQsAMXAGUbCk7f7DrRxg8hPrwbJ8tD9CPJEC1btnkoywQyC5okDBxdUrFQNQoQXcS75RDC9hbeagsysdgquK1h",
  "key20": "4VWzdpPkSMwt3Ccpv4UZJyFvGWQfpDauQJu5CXkN3WWgumTzhzHqJycwi3iuxZCRtycr13Mgyo25V12CfNyPnsn5",
  "key21": "4nyefUKnTa94kNJ4f19MkzeCRoXF5VNYugbgQwmVmxJKNVK9Yq3gL1VGEDKmUCKPNqdUvFycQ8otrp58qALqxvsh",
  "key22": "2DsZNQZQ2DMTuy4gJK5AJzRaFvndgKF43atcjJE7qTFEMa5w97hwJAwjSjfkGKPqoYLtq8fiThpsreYMtoCG2r7M",
  "key23": "28S8UdoA8Kadq2uaFTu6BocfmX7Ug9V97ifzmXSRcBsvWB7Gf4cNo9TXCvjvKRHmv4VnrfRdmuL8QvTL4r9ZtPvH",
  "key24": "3EcD3esStjNndL6TjXX2d8rDLoDBno8WQQr7G2S16ztu9x9REHMdtmUb9tzNqE2xNkXtT9vmbvqGLusTEHTghpG6",
  "key25": "2tnPgb3TiDVZ4J1YzRQkAmYajb77z4MkbYxc3ibUda6Q5V8rEWHTafrVXPMfSdohXLYYySLa6gMfdznLBYsFsWoc",
  "key26": "3DqMCGVvkqKG965k33Xm7rXpRrCGU6oejGJFd7Xrfxe4Dg4B47M1qfpcXABcY8B36jHSrdQSNXZjsAv12UUSuUz1",
  "key27": "4pYYza4swQqAz7KLMasgWUSQdFSvXjbKxZViHj1FuqM1CHmeuTLcS8A1Y5wygqb5LC21WuVsDJDCPXgAe3ZVe5H7",
  "key28": "5Eiwzg8fzcHcJGdsPupRyeGd3hGxk1Kb4zYLRQoFqoM4jWnUsYiAVjEysoFUpNNSwtehhaihCDeEe2bFWjP4GNsf",
  "key29": "3PzbN3qFztc2nrKuBpo8VnNmXCKkktUfUwmvCJEaYNu7fcs8usHevMtgwks7QbFXSe7MELtXZng2ZVS8Ri6J5coD",
  "key30": "4i6BVdan1xSn1Q9A3eR1o8v8boxxLxwc6n5eWGzxDk9qenCPw6p3KngR2msjfL2vJKxGjv3vmdnqTu4Ykj33DnrG",
  "key31": "4wZEoy8mQJF4jhtEqPmKWecF1k8xbtBTSDoVVR6kTYwBHadRzZa9VfEUnKMQYKijacid8MqEgEyLbUSeLoMy6xah",
  "key32": "Z6EqvyA8YryxXExogSLCQQ6p2WiYPu7SxCMQcaxriGjmxG89PcmebaKcJjfxs16JwrkpxJgoZrMdU3WhhEbW5oc",
  "key33": "5tvm1VxufCZ54qEazV7FdH3DHbP7cinMdSMfM8fscVhsKS8XfN2j8YPwnhZrbXxVDCo5a4fTGdFSbmG1wwY3FhLf",
  "key34": "5U9bM3LvcbGABVtaiKTCMRv2ifgntmty89fc9dcQG4E2vLGVTq8BFcGq6QdgtiQUHrgRVEzAea8oQNYWRK4nqccP",
  "key35": "3WnNCnXmzk1thX6bKTDuPFWFeqtmbqiC9HzDJ3HgfgmxmVMr9irivgQb7N4Kij1LvmioJnTdATRBEwsoyGE7WzdQ",
  "key36": "2vxApQAyrPgu3JFESvcbvwZSh1wvLnrNrdNhaZU9LtV7GTVFDdVFpaHGEkZPr2FctcZVxSTtqRsQwReJGyHEN5iz",
  "key37": "5HCeieLr8dkpePPEsNkhQTh8xYdNPV82QMWRS2ocvwgWAnfbJyEyPRBpqZkzyesZztXzHC4rs8gCLVm8n4P1qLK6",
  "key38": "2orGMdaimbAhovLTRtpBLipfB2JT2Xgaedu9u3FMm9K1YE1GSNBK8D52EXnVGz1hootp1LC7HNFa4KkGRke5aCdK",
  "key39": "4KmWRGE4oYfmzknuaffkbfbvMYF2TjfQMcK29VPVtBSDDiTvEnwQ8knL8LHFCek9SP7MY5DeKiVcA9hLsMCmLsfk",
  "key40": "53Y5nRwxo3XF7p2cG3Nb9PG3DLBfPtduMSwVYqQzz6ne2McyNDnpiLZsNq4r4ZnS4SqULyciboeN9HCoqAqsaczw",
  "key41": "PR7iVy6Y7Qu7ts6pm51T7Y2fUrD9hkUtpHjWvg8rUmqRth87UtUvs1MZ1h1MRfNy9DZ1r6tL9j34xzA9wSV64sW"
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
