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
    "2yNJ39DQQvyn5Wf9zsBXEPMijf1Zvu873G2JbzW3JkiL7uJKm646fB3RrDJZfnmvhQtjUVL3rrKqyHcPWf3fdV28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j3S3cufVmSpEiSNypR5JFbXPYzzX1dx46KRbkvAeGbsS6Aosy4N9dB5KoVe3nZVJWRywEQ8aXhjWQNK7J1r6fS5",
  "key1": "3offM8pWoS5dkwWvqUyRjS8PyCbmEdM8u3CPi9U3Fkrn4xktJxoxUJMywptQ8p7sFLDSSdpTz82PiM9nVJYS7LBo",
  "key2": "33gFG5hEJ2tifZBTpXissEiRYKzsu4VNQ7QxQeogb45kAUv9x6oK7Hy2MqdzEf6Hqkra9eyjzdiwhPvkCDyXfJzB",
  "key3": "485zGe1id3yTjSMgcHvsa1pQbgxzrVSCJNZo4poTUMkaqexnnkB9VTSsLD4Rd1Emfy8u8yn4xscUNeAi4vPW7gZM",
  "key4": "3eFo7SoHmjU4TTpSX2CPhb68Sm7oSB2j1U8b5FByPxmU6obQLbsLnt14QJFoYa6xpoaKRAgzP37yJUuTgNRchjzY",
  "key5": "4WSHVGtFJuyFC4wq4TuDFNT1HaL64vPwAWMqY2ALKJ4DiBiKesE8C7b5n8LGUkEJnAr2W2g8nozpVh8tNNwtwT7a",
  "key6": "2EEPPS6in6eE7E29RoEiHDWwuDneWTAPnB5grApx1sERVzki1KBD3tJPdRxfDaqTLrAmvTW3U7P4vWw9txcPY2XG",
  "key7": "5N148t9KuhxFvSNcHNa73J8rtjfW2kxrAxf6aDiLBqVWygXG8crHFqscXiVQprz4ZJWNjxefiABg82DvW4ZNkYdN",
  "key8": "5G52RAEVE61ZggFwjNqe7je98cUaiFVTqyYuP9J1AQLx8XyAynX5gqGn6CASK19Cy8f2ZFVv2eAR2Vfy1eCzdVa6",
  "key9": "3HTuPaWAJoFSR9u1xSWZnqaGvE911jstrXNvArFvinkRPUXt4mhQfYpxmZv6Phq2EZWHvJuLy55pffSRgKriNmmX",
  "key10": "3s3zAdcc5pGrytD1xN6aeHwwRBaVRLwPyN6tS7HYqkERkCMiEZExYgt5enbeq2JhQTCzbFE695GKCaKQgjamFz67",
  "key11": "47KywL277DFmgvVSNurPKhp9axA2csiHsSA6fedth8jptcoRTMhgyMayY3jaPbGJAQ3qfpBuMo584Xio36NMo6gv",
  "key12": "4fYGW1zkXs7WAG4GRbWBnxfcY1a67fyqyBb4QoaeoA8x5SzuF6xijKnYMY8akuoJBb9ZF7rCMDhC7DMYqk3WWxJ",
  "key13": "5HKYfJSRsnmt62gDKMGw2AKq3iv6368ns8psP7xpgN7QywgA2JUFKam8yg7yEomWJuEu4U6EkQEDxp2TiKJV1WaQ",
  "key14": "8c3X6Cp3vt14dcayo6hDLgCHSnJMHYW3Wz1K2bi6LaufDVezAR4rdVatHgdb2cNsQTwWmvMSCpPmSnT6B6HmPvb",
  "key15": "4xvNudAJAcG4oa9pmg8mZnivokyPGr6wCX52gdWyv7pecWTmUSHgTLo8niKFhZHE6GN8fTLVwPNx1c2CWef7UXUq",
  "key16": "5j6RU7Wrm1TnzzJ39kLKFDPAdR3KrBSrEKNxKvVJYna2Ux5hgwmC3WGkGJZmL6ZcsLYBePhWVfW5ZnUrVNcT8oRV",
  "key17": "QjWAqexWwztjBidryd8ht8Q457JxrAGBHSwiD9LH3MDrr2JiCwjstVMrWWgCF3vwm86Lp8KD732TVpofzFHcX1n",
  "key18": "31PjEHXnW89VpMvExTYAA8SrmHgiWErqs4s3gXYCZvLHYHiAXyJNVpCvwJtWtTrvEfoEUbtVkRW3tZyFqsgC7MfJ",
  "key19": "3NUBBC8c3NUsZCPgbLL8B2faN2wQ9YmnUesMuxCgxtiDWpaMERHWDb3ZBQU8LHf55xi1g8vtPZkPRy4mioL1DbX5",
  "key20": "2AjorXEAfyVMkLo1dLfTLbwinzh3HY1a94NdBBvNdUjwRHZy6EPVKeLY6gES9NKMxuL2Maifzsy34vJ7djhXboJ3",
  "key21": "4SkdgpZvTCHZjks7Jq3isa77nric7gn9XRQ7gpq7A9HzagkVa9JsCjsjjwm1rZjPi5gyAKWM35qVyxg4WcdoUxg",
  "key22": "Mkhk5Pu8UehnjhKYLweoH9RY2Yy5zFMGR7RevxNRcirLV9ZAAYJEvbxSDV1TnfQwWDs26rE2Mb6kdcmUMxaftME",
  "key23": "2knBfVJVpQC7M1Xdv78imvfWF9zz9g3QttXV6TwB74eCdcsdc1Gz6kBk7KMK448enGLbeRr5wT9zEQ4pB3gzTZnX",
  "key24": "2zGj76U6KuiRzZNK3iEbYqAnoYbq42qd9DmDWKxcZccTmeJTrcGRiTWbckeqzVP9eHU3Uwrux3rCQRm5S8FTFJeQ",
  "key25": "22wuSRUModD7YFn8BRk7fKJRtpehSRRCJTpYcKVYuzvcMK3sxYFdVyE4FLSwrtKCzVDPAW6QnxJvGdGRmdAw52Jc",
  "key26": "YQAFYyEQohdx9ZfksJkSjUQFSq9caNCrK9ML9hjcpDjPZu6mBmKHKNiZhvUxbYLq9Jtk6uQHusGQcSqXdeg9xoJ",
  "key27": "4vEBsq1HVLrP78Lkj1EhLPh9K6zmUXpYeSpGBcMHeRpsJVQteZ19QACmqcvbVa5JXvkhzogmfpTkmw6bJiFxTUFf",
  "key28": "3KLRb2ggF9RUmDahbGysASJHAv4AEUrLSPBMH9TPkF859zTABdrim3KEGNLhDrrmwFBFsodorijA5Un2cYz2fieK",
  "key29": "4k4rZPSarjt2LTAKeUdFVEhc5rwUm1wuxsrgmq4f4MkPTZbudJNVrwtDdFX2GQnhkUwn6KHsFTz8nLFHxpQWmen9",
  "key30": "5N4YmiW93m7rTHHFavMFJ9a383hnxodQ1TpsUsPixG6U53eD49p9ePoNn8W3Eawft5GeEqrp5VCfFd5Hx162ytMp",
  "key31": "5WyCmhPqrZTzcTpqnE9GXUVePKiTvhLh5F8T1YsitYBuiRbv47Rj5NQPSHr7sX4pzTuBizyRb9Htwqe8S1W2pwUt",
  "key32": "tof96qAi7SWhgkyfKhBS1XWShNdmdvtvZWZcFJCH94obREtkcZgYhMVZShvnCUmtXNiNiQn4t4Wni4cDMVdnCqL",
  "key33": "2WH4Asx1ejnyG1Z1fcZY5AQ5RHJXkNBiBVFEeY3QyLDFCwyDKMxvezMDuCcR6chy6vVKAAhW5MhoiKQ6CpezHTVC",
  "key34": "4NWF8uZPNN3b3Km1kBD35Ee696yRvWgALdJy3SCzawM3TPEktcnS1KMAmXwY7T3WAn36vfj4AtgzomR7ZjjR8Uhn",
  "key35": "4mhBHStkyVp6Ni2qj4SvBGxu8q1ukLNbc2FfSHewGZ3unT5ztA4azgHVPikADqLF5ZxD1LgsWBubydCtFKZdUA1E",
  "key36": "4yDfuWq4ZMLoA1TSLML2sZ49aCXkn6ZKpkLHsWDzwtcWdSqmsqX7EGvG5QcQa1ggeuv7iRLFp5dQFNcEn17GzAsA",
  "key37": "8HojTNnmHmB6uj6jyDfwrU3gJcE5spW2SEMCm954Upnu2hSX1XtGJE6Uv15L9iqZgGjcqKbDDMFWESVPx2KZyNd",
  "key38": "4JZTEmYkDK6ZKNMyXGUiDwV5DRChEK7e5Cry2YqdBEue858X6tC4waQx9h9Yaq5gFdL5eBChUkE4my5zdrHaMeNF",
  "key39": "2yarhPZRuHEGcCyC7kbnZoN6ekzz6TVHGAuq9bRmgBeEvYRD7kFRmihRmGbacyfiBVPUaA2b9njBJHei1QHwGPB9",
  "key40": "4JVEX48dxLX9FBP54JP5NefYfus4iFUeDiW94ky38nqrYWX81QEigVTk51mgWdBmJG3Ye7xBe8GAdv556piNp12p",
  "key41": "2V8XAWr1C8DkFdjb1NbPKt87hiyKVVgwHCZoofgvd7XWv48CUsvWD2Wf4D5Ye9NUUT3ap1Kh1zCZDySU6dmCbn7r",
  "key42": "5papB8VHXccJdtSSu79hPqLBAsceEsK2kSiEGCTZug4t4r3CaS7kBtAN8hXoaukwqt8jP5EyYRdMhC2q1mBiJsyn",
  "key43": "5N6mqr3iSz6euETbhETPPRcBMNQqM52tb6VhX7Ac1QLCs8oRdmt6zbm6rVLFob98FZrUFTA1azt1poPGG85LhkfE",
  "key44": "53s9Np4owsXcEabEtHFoPgdgXCJWrGbModVuoT7Hh72S6c456ZcgK5zU16gymvhCRn4PSx2x8xxe87vMF41xyUhZ",
  "key45": "3cHjMixvPuZmZXXoZ1C4iB5Fwqq5D81R6ywiYA5LUCtTEi1TTzEdBSmHgbh9YzzGCAoJZZrkErpfeZY3ET9TesMF",
  "key46": "C2kaazE3sseU1aUeGHqBhSPunQhSDGBPb4v36gsJcDuH3BmKj4LDLTNLkSQ76KoNXf8s6DMuZw7fXPepKEhE4hn"
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
