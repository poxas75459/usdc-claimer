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
    "5UUqD74TPdFobetrnXwMWvjr9xYiBPqeN3KqySGQ8UaJuZAnfnC2FBAJ9rgbK5bHPFqUhuKFe17pF6ous93sJqnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MjmDoD8whtPG3C9tTYVXg62oEP52VSaG5i5QTJZpEnXsbxNJNy2UrKPREALpcCPdt1cD3rzfb3o64FbVVNKae4Y",
  "key1": "5DPiookHj4JU8exzQNTpDh8SaPgUfR4dTgnUX7Yad2ZirzE2Cre8zbLzWef7SzEJUrMi2mUH2okz4P41DUcAj6DH",
  "key2": "5g9kFQ7CpymrzctFBhRZd4pzFuM1yq3JSqPC1eoyBQZf2J7yJM9eg3pxFaRjqZ4u1rEJ2FYnU3XtMfTMhEkNxExT",
  "key3": "5sgPfJipxA1JZKdeM7gFwxMtPWiY2inVjm7UYGuDjnvJszjdvynPNMLJjfYr8N7mrLVRsDoAj864cUfs3fy2DaTn",
  "key4": "13jpxFfb3EENWZxATzZHafFdXJzL8KGa7GGtUuYVcE5SUMr9ha5NRPtaE4Hqr7ZiW76zeyDRNthmLe3gAK9PBG2",
  "key5": "4WzGitPCc6Bkrzw1jYNpkypns6iPHuMWNK83RcHu3wMQHcdApEx7Nco5cKauC9Zk5F7iwAbCXTN68zSmzT6j3Mko",
  "key6": "3SqSx1AmGzYqG3vpmjReib322LjdFBEVmcM33DLE1dXuRUGb7a8abQhBc9PNJULfURKRFzUbcwPm8Hao7qnBTBYv",
  "key7": "2A8wsmxftruMuMe86pZyczRhhiWh15hMkM6jzG1gxjqfPeWmBHxaCysEArM7nmN4xAyEdfikmhSzozKUvQSc4iAy",
  "key8": "3P8c4EmoGRG1yDdBNo8QYfQBVvtZYoaWc6Q7dUqS5ukJRkvNLUbXy6Xvp4RBwB6zdYwC77y4UXNcfk4iRggrSjCC",
  "key9": "3MsDi3DiHnKYVvkJxKPpz3wYG53cAjTJbXfiHvyEJS9LPLAvy8pgYjWBNx651gzJZxRhvg18dqA1C84BGMXN8skX",
  "key10": "2hsHZezmY5haeELAFLHFjBQHVsGbmtKsC84rS9SDtnr8QBUiD2zWAEAQxGrt3tmtGiJrDXEdJxoWj7QHWbNb4jg",
  "key11": "nZWmUx38qExuBhFDY4SvWgLxNmebzrvfuZg67WQwsnAcAZLpBhCBJpGSEKeJuCE2yMgrpUevVNKx8U8z9QGmCPb",
  "key12": "35eUnBQ1Fn6MMaGsSkFUdYw2U3ZiETQfCCVkkeebigNFYARrmsATryx32KNZh7iXCaeFEyyoNFe8dYr3Hkff5qbH",
  "key13": "GptqQM4b6CDWHQkbDMDhM2hE6zX7aimLKB54AdLwh7kcnn81BhCbvaRorHgtwcrRhcmSLwDVzHA2ftxzfiD13zM",
  "key14": "bavA9yJSVWgsmivEWJuhUztpcLHuwNKFYN1hptXotvCpGvesrfnhmtPk6wMLppXppNxBDdCWEsViyof8vNegQon",
  "key15": "4j24kNqXaDndUwaSDrm1bZwwULHxGR4U22Cthd1ThJA2gjY7BupGydkgm8SxwGPZXN15Mf7Y4mmjGDXrWwLjFBtk",
  "key16": "2NmYEvoTMaPipA4BkNYMDHFzNENKGGHbFCQ8qPQaRWvutHMaY82kJMwrZdCHAMi52XsgUusxAEMfZM8z7zwqaW3Z",
  "key17": "5oy5H7SD9779wNFDJTLRcUxJDDrB985nbAjQSLZEeNmQj1sGS2snQFCCYvMY16N3ufmUtp9he8YpWW2bDFBxLJNt",
  "key18": "4ugKhnynRZYVMSXNHxBGmLpf6tzcpy3VCbgL8TfRurB1m2pEcS8v6FDfY8dJJfxy8YEfsGhEDQKLkhQhYdPN3xCt",
  "key19": "84yq6M7xewiWVVbBk88rd28DZiAvpQevYeFU7EE1zmoawJzjCBNcCdhcHgt6pvzWw8EV9fqn8Fs2QxJTVg2yKLM",
  "key20": "2yT1u5TCsqtoGc7BV2JMA48qYdWFVodKmNBDGhdyPK7cTqQVaxz84bea4gXYRNWxQRtLkZ3abk1UoHVSQxzNC6xG",
  "key21": "3ar6TqUPLMuhewzmK2RaNG9PfBXD83Y8sgTNdzvmY35ba6HDaV7vF12iiqfE8g5QXpxKgiPnki6wShfexrK97Q3M",
  "key22": "zV8J1pdsNEzT5J5bc64GrM7XTrXtrUYgGYX5DeopYW1bqw8QyPjiHYgbQoTBR5Y2jVDvaU7oB6KZEoHDEKwRz6P",
  "key23": "5Mk5Rnxo5iTxPWPCGostskgkTyqzreFaiFvy9WAu56gSmcrpUBPEDXw3z2kVXYAtckiH189ZUkTy1ekjzbtZhMAC",
  "key24": "3iJizbpQ4U3ErWHcowzHzpn5CZs22byFUhhzZ2Q22bppq5n7tcCsQx6vMqtSDbXrqkWS2DCio3wa8F7VK1FuYb8F",
  "key25": "64dqo9LhEM7puWWnBv1KmNkfUCthmxiu4SQALEchP8AcwbeWoNWntw2F9voLTPNzh8agCXSfxgqRXjk1L5pK6MzQ",
  "key26": "5vrmW8E1BwD1SNnpy6hpWpcwz4yHGwxfm1QT9XrXLuSd9WhgtP4d3DUxrugWRhneXzp4UYXEc2CjaJ1SrvmRFSSn",
  "key27": "2xB72eaePWRE1Nq3B3utw7MLmWSPw2nTMkAtWhZWdd4Yw7U1Uku3zzfxywwm5rRZRULbK6VxDPsJChK5H5hpTBRW",
  "key28": "4kW1Ndrv1hqZGm3T4rW7PbXy4kMAq4UWAJ9XXmJoATJ6jpNARX8CMyrWAK64aJ1hXgc34SsWwjHTXE9aYfWSEHRy",
  "key29": "57WfJRGd4K8QEXMgaMwQbT2zHKNaHqNXuaatcW2wWekJcE3T3p7HHoZbt6WwmsGM99bSHbgmesYsVehWTb9uNHbM",
  "key30": "3GuTmo3RkSNyLttbwLYNf6MTWL2VZP41LW1C95CsjGiGUdjUvmqGNvgRYDwjbnX8hG4DsuY1hMAZz3zUwbHn6yb7",
  "key31": "5vWVYhkR5p51TfoQibHSsVSB99amWCNm7yQnF7jCRZAmRLJTxwoDfBCkkDHDSpiikhf8jLTFSbDgWgitiVvQBi2T",
  "key32": "3Ww4iMpTmiwkiT8so8sBKsQJ3NCdmBSvDNytZnKKRXA4hwbgcbJfNG3A7MmjhPputFbeRaH1TYv3cUuzTnkCVyWM",
  "key33": "5YWm6EfEHwkSRQbj95QdZmanxo41vmqrEhpr6c1MRhBPP35hYcVGt4nNY8EfQCyGiCu7so4Xn4BnjA5H79H7SFJt",
  "key34": "2WhLNe1ZAndYKeTyiwCBKrfJHEyXA4XmjEv3LARxTU3u9fERbpLYecHrUuWZUFiBNKL9Co62NfLJBaDmbKzjaYcR",
  "key35": "6522vnMNNgV6hRLMNQVtxxbVSDoS7PwgZ5YeJGmAh1f82NKbPC5Ljwg3sPYHqQ8XprV1rEKcyNiwjri7fTt9boCj",
  "key36": "5KrC5pyzayAJtxGiZjaDg1QM9n6joraPjPSFuVic7F73Ttf3kWdkgU3nJThXKQf8DXnvcFMCnzfxKQ5g47diwV1X",
  "key37": "632vgXLAPzuWCtwMrEArmnBuDHDRy1t8WDJEnYtkbSG4qWfVasRLxBUrUjEdvEYkG9FFyKoDgyVCZzdUji3SENhj",
  "key38": "2H6zVGJ9Agrjnr4xHgKCtG47Ca2YM4RMVUek5cBf2eeKLjxW8TuVp35rArnYc7uvi8cd9vXzWQCcoTCuqtgCuFEn",
  "key39": "3gJQtC85zCEM2LuX4abDVS9Z5EBmgMRnLeAKPu5xZpYDTCQysUK72tt42xPhB7C6nW6DfsQogju1TM5sMWGdA9u4",
  "key40": "3tJVQvPjcMXh5JEq6BxNsHvY2L9A4VnLwad7PgmVNTrA8P8e6dr2VGfXnPPwDCV75xUDSTU7nG7DAcfmkqzJ1dau",
  "key41": "5yJApH6Z7k3aTKqu7q6sGu3msMRNi2Q7GjykyPJnY8bkYwKXeKs75TnHq9Cdy4mBvZ5SVC2578XJR7ayi51bZxDq",
  "key42": "22mX8WsbK4dBYtLreqhmuRLk17WtSyCoKzyR52nG2bSrbRF5uoRB66PnBhxc6mYppQ37aMxY1oLKqcQGTst71SZE",
  "key43": "2Eq2u31HnxQbAk5S3pjrUrggBEBALtW3w1WkR2TPaQsadyVHe3RcWVWW27k1HsVNdNiak6B2u2e7diMPoooHJAPG"
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
