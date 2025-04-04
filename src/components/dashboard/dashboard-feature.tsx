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
    "2EXiU9tg2k5N7Xo9LbLrur89iUco6G9oy2FbRRHDSb8jBCL44Yb3w98LcM5NjSgWv9AaasuCRtiQBnzUjqLeswi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ffRhsoxci7As3GRtZUzngXbFrwSyuz4nBNwpPRpKtwmgJB3Rs6F1RXYonwG1ELuqekJh6F2bxAJQ8iooqGfj1Sm",
  "key1": "5uR7NL3x9jZJNHtUQYgf4dp29ZnT1m4B7zfeAnVQfykDf4JuqnfEWCg5aFmtuzTsD8b8rXu5WD2F1gQvDVYoQAnW",
  "key2": "5y3bTjKoe7njBBH2ajyU7v7AnzQ76DGRGDkYZT4E32Bvv1Ne97XqkfsCbzxDu2KSvgQ8oXfhzQz2yHkCTtEGYriu",
  "key3": "2LCYN5u8wioViU9Wq5JJQiom15JNn12Y6ALiZQWXGAb8zjnFfaaivnuRvvAQR7TacF8111QFFVGtiEUvFeCUmWCu",
  "key4": "2kFenuvpnwPfyYVDEq83JQPUjZ86aWAhakmm9hwjRVXVvPxFwncQBH4EcSAhMFiqWdD18FpSszGmUpvkHt7u9ppd",
  "key5": "HZZQi3cUMDW67z8Le6s16CDhSTyQoFUvWDg9nPeGedSUf6M4pa2iP6sMcqv3QZVRQBqEEm66iVS8cpiyx7UtdJu",
  "key6": "2u8WTmqKZj8wvGnB9tZs9PEqT2hV8rk68mEod5hsb5SnYwPS4ersCS4XW6ur9qqWDHkNitify6FJ8WBH428oTeRs",
  "key7": "65BKyVFFVW7dBgRAppJhgCiR3mW8Kx1pN91ERZGkZ9rYNWDHLDP1shtV3f7hJi7xW68Gt7fgjKKdJyC1G7ok2diE",
  "key8": "RyDgv85V2oPpbACdBa9JQ9wJ4AmqBvFkJTMv6FHtw5K1GA5ZdHGQSionQQh6CgQW5mM7myXnHQpfhHDjwnJ51Gr",
  "key9": "cX5r966bnu81BKEWjA1QZTBZpVKXvdGLd9Jr2XqmEpZFSA67J1kZsmrF4nKiEad685xT9SDGENBkhkScnPV8Dgw",
  "key10": "3D4mnGGRrU9Ln5REUZeseoTPY51dTeV3wnZEUkXYsjtsNgct4yGCfB12ZBBsLGBdzD4MHeuZLpGEBNfG8Gms2x79",
  "key11": "5nLtGUAejWYUPZ1jmRcHEf9zJ5c5XRLYAbnXi5fcU15TLeae9Ceirxdp8uJ5abRRKzjp8QH1oBLRRgUgH5SLdhWy",
  "key12": "2jMafp5errL5zoxqwy7oiVvqyrV6SUSM1FjiLnH2F7qyEMtqzE7eN71mQAWXMHrTc2pMC6W8CUVMfPzGLJzZqYZB",
  "key13": "3pUMSiUyTwZzbT6ua5FuJfqEScVHoZZxZzHTJH2m3t9Lr1ZUYgfbPHXkogN13Dg3fTAw9shB8vgVbH1G2wzciuZy",
  "key14": "652ygXEqMyru32KFYscREqb6i32vjCzvwcLP9V2cF7nDTbHAFx5tKimHp4xHkvFXDFKNm1sGqf5qa46ZLYvNzEtR",
  "key15": "5cz6YjwcnW7bPEJRqR52cRhUnHrzqqZaKBqDFRb98DpHJixEVsSW3mgTVQybRC5xqMf8EvoDSZf2t1JuWvxv4pox",
  "key16": "33SnjyVbcE1aAWHrKkea89LE5wx1ccJTYvbnaWh7V55wZg2c9qQPd9fqsEumfZhNAKXRMdqcaGZRbhaSpk3Uwrs6",
  "key17": "4qgLNiVLGNS34F2Xx78QjftUhKa2pQu8ytD5kn9AaNuixj22yTAbLZbPZ4YwFzpjZzfpbne8sNY2Jv4hsvzW24A2",
  "key18": "5YBjYhEDi16AkhcWVhJF8Prv4Vi9PWkSxVbViDs3pi5fcMgWZJwC3wA6mDBaaNoumdFwQ7Aex2yF75JZQHM5r6jY",
  "key19": "3WfC2EVYYVPixrY8Cu67W8i3nmCeBwY7a2RdHrmby14AGeNdb3PKbDkWRocLRC4nxYMoscauGv3aPdAoXH9QVfBf",
  "key20": "3HxX9uTLXacLG4iECQu9JVtU1SPGYExFPaMBhRHqK1gTNcG52aXdoqH5dvmTg8uB1FXTEHTDimKnPY5D68FENYaJ",
  "key21": "fixKE3iABjfMFHNgznsMvHUdsdMCDrUvQfbvFQA3uP3fBNC61WCpgYKMgqmWuRVYRQn2EztTVGGcCK6jeMysxcK",
  "key22": "4xX16vBxdpN7pfE8jfPZaxBGrcfva1MU8X1iPXfz7s78XunCVpNEmXPPSunmqQAJ2g2Brc4rATGQGTjRzNVenhb",
  "key23": "u7DQowhRPz8qWE84pTz7y4oWLGDPx7BaHsS3ujR7GuRMPTxLm5NDbWexhabjQ3TCCzbpxB4mwnAuhdqSqWwCZEk",
  "key24": "3TQwt9CxxbHNsVMATVrsG8NHzV9C8VNbcwn4Wxf4bpohZXAXWg9jEPNcEndZQMiorPnQnrTrFTAXXQnYQ4CAy5ke",
  "key25": "4VeeLXdaS15hT27EYLa3xJBhUUK9en1Zmivd23gD6rxRgd9kua4ahL3RjPCUzQemYufaNYXL5S9Ek67V116uD1pM",
  "key26": "25h3n7f2eDMnnXGPseRfRMMGUdeWtzJHnhxsACQFxsGz3XbV5ARxooKU76H7MEMPA8mvR5b7Gzh3d6ygr9gonuW9",
  "key27": "3fE4Ez7e1PUExKrfPxhmTGfY6TqADxBGzVTdvF4jS8tNm7mzxakJGpT1qdk7ASqw94FJR5mDv2X41igBFadfEDq2",
  "key28": "4aHofmzqySnDFyKQR4H9FAC1HhggCaAqGadfsBDNHB3cyt1hLUChNH1MVqHYGRJmbVqzDsRq7vpp8ajs7sYJqdbD",
  "key29": "2SPPyihdUDtyA5UngRzuQLMMAKSbX4KYwxhpeq5JU3srbAKxoxnZLFyxiuV5xLSFzM9haTQQvZWHCjotsXVh1QdD",
  "key30": "3w5rdUS7DqCFyTGGoWBB2SnLXvh7KVb3AoWqJs8WRCH3dH5RVaNCLjvLhRDde5WiN4xmxTk3ffqrVhQrFU8aMKMu",
  "key31": "2Pr7Fc7zmmFM17DbTqVtUXY9rVgaPcUDmEu3w4puxZMznGhwGd5u1czfB9MNmm8sqZ2uEzLif3To3h2BnNFaN37Q",
  "key32": "3PVG7vUZpN4MzjxjGyYA4hfCvhDvo7y7f2V4xPv5rNpdCuu4G4jXzENTk3WFKxYrirmzZa24CwYggN142QwTxm5E",
  "key33": "64z2qCkFtkb7UaqvFoX4uDtyKrogeTzJbb33a1TRyzgWQJZt4APgg5zunoKFVQ3pQjL2EacCcDxEzXCgGGfnfamH",
  "key34": "3Q4ABwdtnHx1V6rg841AQb8iD4pnBzmhGbmHU4RqtpWQfYNG44gqt9WgK7fTS2NRrSznGbP7KRTyQqtiTCSVbYZN",
  "key35": "gZFBh9C6bC346M7BHhp9feyPPzziU248iiBQtfE8crB4XxjM64v7x9PkQvCNQCjL3kjTN5ptNVDrCHVJ5hHTHoM",
  "key36": "4XsaKrsUi8DK5ZZLrSrTtTqJPxEeXdfWhCjpFHWrwhkHXdFXkYGbECeVTG6DDeQGWx4yCayAsMck58zoPmLNNUv9",
  "key37": "4p2aWFnFvkXTuvf1p93RsP9xXbwNeggJYuCw295oXSYs4HMuNUpRBWUevY9xFz148hsXCvHm61RvuQ4i56E9sSbh",
  "key38": "4jbEWixaLMrcAdNYg4D1WoQFRoWZL8Kcnk6fU9dpAS2gfmDabe8Jo8cKTxCQvnNf7MyWTFXfQk5GJrqJRbg9mtf1",
  "key39": "5y6mm7uoGz3inBsAq73e78UXK9MW6DLBUobFSMX4vr6MJhGH3nnJDiR4MCJrKCiXhweYmAaBmxUC4d3wHxYxhnCE",
  "key40": "4ERJkgmRZF4yUPU654hq89Mv7vscs1WcJKVzU6KsUitPAbds2aopJmf6gVBUhGZ88U8isNxkwpNkH7x88848ws9E",
  "key41": "3xqG9EHh9ZMDavLpsn4ADUeGdkpsjVo8EhXmPnhLMkjjps7do95Dxmok5jmUfJQd267NmfeNe3WWWtpmW4qTQyc",
  "key42": "2Q2qpLFHZre8ocEWbkV7EgQHaRSv9uZ6X51xq1uebSBVkhboQW4o16Ba5ChSUXatCMcrGetPna2RKHoawVzsv9G"
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
