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
    "fgaBWCNTXEU31vy7cR8LV2errbeCJR1QYnTg6UuuGX85AfH23hDTHQaCLapGQym13Gcps8hincYoxHMe6hGq9LN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cfAX1qujP4r4hkNRZJGJrPdihyGwmtMkPpozHsykrAQz5ggHv7qNmV6Dv4uptcdu5dKGVGLUx6CtG6gxLbVCaUF",
  "key1": "8uNL9joRazHkwTALPWqFJrmyQT4n3UBJvikPp4n77hyny6eSgSXQfhMiqXgs6SCMqE4DyAmgWfsbxGXbBfZDnSi",
  "key2": "2EPhTNfQjJZCLfZtYZa8r5VViotGzNCn7pWWAsr4zdB8uQKFBZ19FsEzQYQ9AeafnM8qds6D8BSywdttztEzqVHC",
  "key3": "2JzYqti7BYY4vBXw8D43uKZiz837VxczLzLYZvpPC3Vq6M5qYE9NcuFuVMF5SMc5EKtzQpQhRzCMshPw2vECixi9",
  "key4": "gbL8Pznu5mbpQp1ycxgxWP95CrHH4jTMhYEWZQ333HxnyrfnbaWsjrYZPWvaGmDU2Dd39cwFyWJ7aJnfMbQiyz6",
  "key5": "5MQiqDm685d3isUuHkC8nQWxRHyVzVWT31eqexf7ezkqTNroFFoWM7WrvaNQPcLmtXxecMdwSbVzwf8rFv781V2D",
  "key6": "4ojq58wy1uSkNvR2FKgz4ZazVHqEq23jYZaU4RQrDYKVutMcqvuDPFXgixrnyRMrX6YMYjDfrNVRxdYJKbHgsyqa",
  "key7": "4JcVQY8VqiKY2rzpEigs3oFkjT4ChAj2gmutBUoPH46aGjSmB8ZxhieHGT24ZTjcjpcV2s3VCvcEk7DrhKWWq7sF",
  "key8": "Nn1TCT7G64PWxPKaUtPMnuAzVMePyhJreVrmze8fbQhgzGqrKtTJ7ezvTJoLgT3FkEyNnr9MkATWCwGnWjqG7Xg",
  "key9": "3LV2zJJzkUBVYXq6bncZeWAcX6TWr2hdwZioHpb9Gk9C6hPnrqKhXtupEVsKQBMSt283jA62SiErpQYFw89ndecx",
  "key10": "2KQTN9ue9uiw9UQT2FYuq1PyQgNwgzLhYUcGjkhJcxJSm6BCuYeTNtoFt7v7LCtuD4osVnsJk9HEDa6CET1FJgv1",
  "key11": "4v8ekmGPUc9BqYmzLJ3WveRhwNb5S4F26mQYa8mKhafHEsGhj54TkWDdKmrMxLvpbB3ZZ1neQbhanjwTSBh6Ns5H",
  "key12": "4c4Hn8aM8ew2QzYYkr4jwxhJhVzbSFTqpHaM6VKBqEDWzbtEVqaRgkmgmNTX8jMxx6sesE5ZXHCpzCWGZK6CPReT",
  "key13": "21RobiWvTMNdDrKJESFGsJm3hXfWDS2tJMXdXoHBiKiX8vRY5whVFvUwd4YpJo1WccvkDak6JeCwS7vYiBmKgS8Q",
  "key14": "FWuwSeCkpRbes67oRC8apCDxbpwY5SvCLkAr7j1h9bkFiAf87DmyFubAn1tS5w69eoFykXqRas9vQEyn8qV8Wcn",
  "key15": "3q7YhqBhXxzdPCNhXTLYX8LS8fiR9bAAwntaiaAvZu37CL4NzsienKteVqD5RSxicz95AxnamYzyCTxXZtvrr7R7",
  "key16": "4BGDTTjLSTSTgT5Xnzo877fd5gQSJtF2XfF9sMQmv1d2CN6wtv6Hts8z1j9R8L3ZAPzq7jaHnr5SpLuwvTgTiEib",
  "key17": "33cRsKbjyqRG8HJFNcLy77b5cxTLJdwnnAwprEB6RUbsF83V95ccqxEX4emDMPKrkQWsXrgVatqdzWAd71f6gQmf",
  "key18": "4ea6h6gMB8SKezKKqu7mVtitjvg4YeLrQqW6FYfr3Us11dHXkV3rNPZgTajbU3mMGX8ASXKG3GGmHfip4QNNfHAo",
  "key19": "M93cEBdgHYkorCMCWga3jEjGZETcb233BJaNon6cueb1sPX7faiMgfACfMtZ26k9vAmBskRxLstMU7iiNU3bJ95",
  "key20": "5X4hZt5Z3uKTpf1AupA8hnaruG4CYMjBVdpXHwJYkWYYFmiPtSpa5gTPnSTTknfk3D7cPHb3fxTPyRtGExmu8HJw",
  "key21": "38dGpdDKktji1hZXodjykXrhqCDXUSdgbMkpWyE9jSF8mkMRgZx4fWvxcox9NL1QhkqF4RAr338HRu47RJyFB3X6",
  "key22": "2sXKy79432sQ9Pun7jjKMaEPUzoyPapRHQKFd67rgLxCWLSK3eLtzNFsULGQ26XrLPJYQvAPGymCVD41yKz9fMnE",
  "key23": "7xfctvri4zruhrU2ysov2TjG7UvRe9n2rKxUQfADs1C7m1N6Zg2s1Vcajd9N824Tz4A4veNzeQfBDEjuxakyx4h",
  "key24": "2Fp6iWGKQhe3s6B2nZpZE9wjqpki11SoCdJDm9wkKmXNZFATJRVeNUhFbps7aX5npap5x31rsQT7uXiRFpLUJPHf",
  "key25": "4xQYmmDFaeqDCf9q5XkzJNSwBeNoSQkgedufXhuzX9avBspXmVUesb7KTDhNKHepiRK332RzP4FA4SMFhZSv6whJ",
  "key26": "39RymmxhCEda3T3BbCUrYtEtentqugYjXEyALEnyQuMbEv4qRckqxG6uFtwAZYQCFWW2y1onp7LGG5nWkh5Nw22r",
  "key27": "5HJ313xsVCR7X6fgnnYiXyj6Xfhet7WhezCUaCR5zameNakuzzCn7oS2Poq6XMKv6mShAtMXCYrcVWUESKHRWQYa",
  "key28": "38qbG5wktpL2kdoHi1bjemispLSgr5g18RmJKzkqqeV6adXNtSTAooH3GRjtmeEqtyESQ35tN2PAx3FtFWzTdsdj",
  "key29": "5275UCnkHsxKpWWVU1qNXm6aW9iarELxg1jU7bNbt2n7rYkxpeziip9TKxYYgzGEKaLmE2Di8ozBTPxPEb1Lbn7y",
  "key30": "4eJ53fDBu5F2qGtNxY94ykPLCsNfVJ27bx8VZAX3C3xPn2Xr3Y8cVsUjkW1XQTKe1Lm3dQPCTjZ4ctc2rnLfgV8P",
  "key31": "5KnovEsBppSmU7mi1cDUhsN2sJVFD6kzNAibkPrrV2VXiJpC2ixdPgYx2rbiCFgBrnvhYdDSyLT1tzh5vMRRPWQj",
  "key32": "2JggjBkrmZGXRj1qe7kUBweuA2ESiNsi7BZAVXdpBZw41ETnpMqwWgvmUzyUpoxzeRnq7JrArPyLU9n74KQf6xVF",
  "key33": "2AMppLAR53FkTPw765eUGQGX5MSbPjLS8kMKqAXRSYhVhYu9spec4mvD9su94HBuUdNDgCpLReoDf8LL8Bo1kWoz",
  "key34": "brs5vVmAdjvFVCHHsFdPYBH2R4ZZbgvDjx3qBGfFKJFUoxHk9D48LTebi1aKVirMRXgzRa55z4RfAAHsZcyDQMi",
  "key35": "5zAZSdYiVjofMR13quhbTSYgwGuZpofdbRDfr7bsEgFFKfTcj2f38w7cncP8dpX2aft8hWpwrpfzpQF98Wuy6cPs",
  "key36": "K1phaeKeZvopq5NcFrBLbByhskzvnKyZ9ZBbsCJK7WLoWuMJkqLjii5kEU6d3vkS1fs3YmYnmbZHwVKMthiv6zC",
  "key37": "5y9Xy2QPymvm1VG2jAY35caQNgRCtCXvQfhGBVk3VneCsD4S2WB4wMc5PASp71ipxsgHcMGWyQyL2iM6qwBwQnjw",
  "key38": "5UDfXB3Etsd2EipMtgozS8FsyXvPmb5Px1nPmhvjLsQvAowxFip7XBfafwsoAVFY3AxZBMmH4J1osuA1sCCuGK3e",
  "key39": "3aTs7ydDdNsfL2vxJHvRyymzLEfY345vzaZmoge4X3CWatV9UrWP6oxJQnMiqVHrJXhwkxYNkN3Rj9SAX61yMawr",
  "key40": "3zGhhLLpUxj8F3HYVQ9icmmdmsd5oJZybhXtrnDRTnv63aon9pHeq5NoQQYFR5CHrhKsfSRPeivtjn64ETsgRL5i",
  "key41": "3AERj7TJ8PYLqP2yBfrSAbXjNL6ABGj2BCEraJc6RJwZFKUNjvzuysfBEHVoN7Kkxo3qvpKddB47S5xLET4GHHs",
  "key42": "3mVShuFSQNHHRPMmFChTUSkj88GarVFpeCMam6yjcXv66Z6yuLD4Z5jAYpLpkR3gKjfUKXmmK1ezmZa9TfYaV6sv",
  "key43": "2u4RDebhLQT3HTwUccd72qosFNAvo2aQJcpxE5HQxUfTyCxKp8oHCKSWYofjhVMd1B6FUGaoMz7uFdEgUvkBXTvT",
  "key44": "v6FWyAmA6waqruXou6NSKXuRxh6crJavVge22HcBZDcDuuHjsPrprxrJcbGTRACBL9P31F1zhSEPAxUbUU7HYPa",
  "key45": "4dQfG9BPgqsRKM39rwRbvjNjPkk5gqqivX6XLKXeM8Z4LDTHEF7fJP2iRgoGUKMmNHJzkef8eEkUtwNVW8mgGQfS",
  "key46": "127xPeAt87dMDKLB8mwFaVQdF9RsCYLkZHY9tMTVErJZpYPMb8KvBnCMYYxrVVqGWaNsN8qGuszz3BbavDigUKEW"
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
