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
    "fEJTfcqXSa1SBvqeKfcuMAPAKcdYv3aCnmEU6ytZRAP6uvAwRE2XCdT5nRAk9M8N9NhDr4iA2wHf9NLuv1GQNHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J6wRnG4QWP4et831RsrKxqBi63pYyAt6StQ2Wr4Q36DarWBpGpxbgML4qisChkWtb1ieLSSSKrqSMUFUkwdSQu7",
  "key1": "4jQCjKFUHst3BvVdaFAY9D1x3yVUPPecAoc4qUJFj73mgjNLHqxtQkZVKYn3wG3S4VvT7bcJ8Y5BcZgbhnit3c8X",
  "key2": "ejv1676y1EPvL9pb6Xb1h2hfiBCT2CQBv7vw9cFPBP1NyUrFvFbHujFhTeBA6mJGq93ZMx2Sd8pjHbNXSdhEAST",
  "key3": "4Zw3qYiRGqxFSUq7dHtggcqgcUedrgef5ukErZCSLJJ74fqihGjif27eJtQAL7bufqsaUv5nqALdsGuhTgXYCnKx",
  "key4": "328WGY1XzDRosT6fnUkTb3gmcp94nCLpoAUVshqJ2vtAv5jJGYWdeZbVrbgbwaRVNEtkWQ13zNTjKrAP7RJKNGW7",
  "key5": "aa6PLQfqQvg8DqNMF37zzbYafaTpdKeCXRY5pw3CdkGVf9DaBkMLRjZWSc9TeqJ4zHrYAVjUJarkNi8mTA1TdHh",
  "key6": "DphZerxDtUJteusSN6shwB4FG98HhkHJLefCsiZU98oknrrdgo3bwrxKp3noVrtBdjBC1zG8iP8HHQFbjPRxgiz",
  "key7": "euUEufiWMxuVXPCnvXfgHaYf8LwRLEfEtQGptAVPGFXo4C229TmLuB8iTznCMc3f62ha4VrSji7ekAaHt3zq88p",
  "key8": "5oztpE9SZgdtrN5iQZCXaHkaabz6keMCLpvBUv4krmaGGTKEXLGASimSeG8DqiShd7yCi5wo9rbsojMWJXXqqkuK",
  "key9": "A8xgcy2FSoAzBGmZ9kPR3TDzjKDavEg1eJkvwkesy7nxZG51iNpGwmPLVdWeDqcGJuh8xZfkBrFojCumPYgSVeY",
  "key10": "3UPMxxVpU2Gv4BECwdtheDNziAicbemNkmU1MxzuA8X2iatCWR8cKq79WigN9qbsyHgnEaUALG2jJyxRpLocfLpa",
  "key11": "4eBziTyhJCX7RmEDsHTNeh77JYasuzkE2UWxTqbLFaYyPTAfLd9zbq13dcPRfoBZwqrBKLWKVCL3VTzkSUcHMvCU",
  "key12": "3LjBfCGotbhhUXbxHrpcSTsjZCdScptTWB92eNhqP1vc1djqgio677bNzjxyg3exLN54rrAnZZYw1NMkJAYZTwBS",
  "key13": "52qS5V3T9H6yLV9LefFD8NKrKTJdG8Sbb24gnvQfSL9S9NejGNTnsRqisXWoeF3hm34sFGkfehFwfsXCMQjkH96U",
  "key14": "5Xf7X1DgEd6oxAukjo1s6UPGYCBVxLRc389Hztn3C6s5zvopTGhAYQHcD8M4C1wAex3pHzouet3VFptbH7BchMKD",
  "key15": "2yotDXFCmmRooBhsVaBdMawer5tMHjqYRYJ9fVQ4B1PYgBKtZgU2JzmprjKMFHUQwkK7s9WVnQAayTa3WaoUL3zg",
  "key16": "5C1L2JqwNq63qNqdfLvrwxXCNRNQUuL8mLk7YidomkeVaNEjud6VgxodrYbopPnwVJ6NuFouTPhNfjYF9K1VN29F",
  "key17": "3T9CKWuHKVmweapc7bNqb2SUQYLZLyosvzi7mFe6sk6TppM54PQwQNGyDUCT5wj7G8MqvU1ctBWBkzCwgBgaA9Gh",
  "key18": "5H52wMygTsmmvBajUrBYyEQMuc9NZ4pMDJcpRjVhp92njiY8oNc9NBtL1qytbhgevG95EKFP2Z7EFT2awR2QJXUs",
  "key19": "3XBE7rpT8RRwzajgsXbEzqja1WLjTK2GJnj8pLKJoF2xujqtFMPe4PmvvELJt1W12HU3MYuwKgvnEwGzrzfTzabf",
  "key20": "2bj3Nz99Xdher93PBUGTqvjrVvPGcwBieEfPDbGrcr4d4c5iGY9aLQcNe1SdY7pLLfx7coPWVG8AoPTfEDQFmqvT",
  "key21": "57HyNGDPdMSZLL2vpnSrhTBaaxXWwYURi9z4Zz5y1PFdUDG6odCDrN27itgB87DGgGDWCaDVMwVDirBAF6z2M5xL",
  "key22": "4NXLHPBp8qEtgbmgCzmVcSJ9brQS7KuvrJcerKBH7pKoan19vNTZ3HZXmNEQHoUMdACGnEe7kCAFkRanzyYkaZ2w",
  "key23": "3NuwAWbGx1A64NUkudh922e4QmaLc7FQ8AQZHJFdFv1DaRxYhcD5QDntAAUkgPGgbx5cKco3MPzKBpsmmGsYcXSn",
  "key24": "sGuTY6AvA6vhr16U6fk87JWAtdYBLSkEoYHvrE2JWof7q6i2MciGeBoPzrTZFcnhiqaUqZMzWyvMJ7pj1TY3AYX",
  "key25": "fLpbGK2964awcWH86nzUtCdE8tWvnexnzVDwGVYERPTQnbXpbVcV2ea2mrCknpUFQ5qudQd5j7TMs2R9K4JNpTn",
  "key26": "4CnqGjrHE1PamrryqWsQQTFzuVp15admGL1UDdpH9cVGuosuNLNxRj7o9oaeLon6M8V6FK5XP7qLBJnu31zKEXEu",
  "key27": "3bBE3Px8bFq734apFuwitCXGiTQaXQya8iMnWt4KF5QUouwhy5y2DFjbkgBxVfz8qeAJpLDQaQbEtaw7bzbpzVeQ",
  "key28": "kqVjgszHHTzUFEHkJMnQywKapCFJTnvKbvXuWC1HA217fCMXmjNmVR55YPdjmWqU6dfzYB1SbU4pLW8T3hDhQ7a",
  "key29": "HWvWqipiuzwAn2JnZKEyTztjLrsjXHrFR2iHyL7TEWrM4BaExZQPdoDr3b8nmPmWJAKSxPZ2AP3DuMtDGaGpC5t",
  "key30": "67HvRFqv7ejY2Na5PMJ93JumEje98xgihmWJHSYhKsE3pyPyz6ebPL6E2DnmTQmB8H34xASXcCbLnNnW3LoRdMng",
  "key31": "3gqZc8ANWZN1s2qUHwFv87G5nKRXWTqAK36uNKAYZVHnvUjUQXbYTFd5gwtMPAXzEEdgphHBxpEBMkt9C44Uk31W",
  "key32": "26xHPocwMs35UzvjLcgDZKinU2VbHQTsnrahmCbfw8MeDigiGB3HCiMcAnDPh2yoLxv3eFsmvufkzkmzRdRs6FNh",
  "key33": "3QoXAfQLzA4nfKk5mbe3rs1aTXfh99JmHc1yvQCQnXnfFhofStZ3Lq8sf7SjRPto6qdJK1YG8AKnzDTwQ419wdEL",
  "key34": "2JyfuXMgmkuY7A8Q7TgT7AP49DZ8mB8rGXV6JGMuo9VzkT9v18p3w8iJPehpjxihkxt2PK2qYabrxfVnNGdcupht"
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
