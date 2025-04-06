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
    "4sq3duSv7VEE2ojtS2fmzmUFg5dX3LPbVL96466dYTVwoH1PVzSQozb7SnWmboBmYb77svzJFq9hoyWvZF8LnFJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QqH9FiwYDUtHK8BLjCcCiSyYDRPhSEuhFNonGPxSsxEXaGrDEnVEBTKHbCbbBn2d71HaZJgu1oKcBLyCZFBYmXs",
  "key1": "4oheFbFJGa15jC6R1ZQo4SxmCVbkndfuAsgZDigstaumm7ZQ4unspiEGYMmK8zWXZznf648mUKBeRSo4vW8fbyPb",
  "key2": "Skjfa3svfNVUXFVzo79uxiQeTN4Kn72Ep6cr9XzjPc4qCzG5ueEzUnfes4866qyuTYBR7JhdpjfRfwAMwkEbppL",
  "key3": "5WG8s5BM1ZbsLb5ke29xKP1uPGw1a3FVaxnmuAd5v4GoBo8dr3GFE7BS4knrFTodA65AhaPuLNaDJjGDMx5GF6fJ",
  "key4": "cgH7zdVHsFiG4LMEaYnGWuQN3YDkESAjCm5o5kXjAAeM47MmGmud44JSfJ5spr5Ak6ierCrPW6aKtmiaBP9LaDR",
  "key5": "3Y7YEHVMvrSz7c4J1Mgz39GxCD9PKZknenSAhyWqX5WGzhfNXTemfaWNGHvoFHQRyuQMcJVfWtq1BhN4hEcn7EUv",
  "key6": "5GqqfWuiTskEnJYBXrDTNXMCfQYTNmZYvCmG3ZjHUViU6yNLT525vAYr4dekdL1dbiSJSvh4dwAnjVz6yNRgMU17",
  "key7": "4tVE9yDKHtKLFJ1mYRdhpUcNfZfBdRbnXqYHGZCxiSiA2P8yLUmheN6QG2diifXZhbw41UWbg9co1Vc5VHZobfgE",
  "key8": "52wPih6rsXnCPzLkna6FHiaetHp335D7pXhpgoRHnJmT8KJQYovNsHrs8Xzu7PGYeb2AEdsyBYbtSaN4xKgovcms",
  "key9": "3PkgbULkpXBCbnRoS9sLqJ3F8UTiov5w4YPCUKDCvyXbaxGgY6Yguc98zMPnn92rY8n8a6qTkzjEkJhfihPS2Tsu",
  "key10": "4pGc6ELMv8gJiu3fxTRKggnrgk7NTWfEnmUoQcL4Q3gDK4BobV3DReLBCvkaMeJo51c6CHVnLF7G3T9r4T7PcfWN",
  "key11": "3zRfMTUbcPW7CWsrBNpTjQfcdCYq58T5bet8pBkyWub6khRpnF2Uudh87vmjppgybZrt6pvra6y2j8thfvSkav6q",
  "key12": "ti5NabCSCmLGMuGh2VfBF1JtSYzxufJY3iDJ4xViYvyE47QubU6upVY1KwqoQB8dT5oEHbuaXdoXVDzgDRVVdnG",
  "key13": "4HtLLVeAqLgMY32BVbfimAm3gz88tWuCCYbZji8Knxf1wgZ8n2NJgkgknyrogC6KsNQ9vHBxXWERr9T13ij9R9rd",
  "key14": "2fP8H7EMcKc7nr3q8D2SsymmuUC2h4qPCPgyPDDmUCLyfYTkGXTpZ9kwwjihqApbvZgsD9vhXvs3ympns9rmaMGV",
  "key15": "4YcLGQxpDCCeL4R6Z4hyaFqMYwCQhR4ffP6tJX71dqXEpP9fL7JqtEWnmYExw1uBzCMyDSJjEC4S8wrzzpkDHkCJ",
  "key16": "5qhpBhfmEqLW92gvuNUtMU2skCRieFFNUzi9MvAJzAUFtWasPHPPYqgQJPguZJpmX6horfyPqKbpGYNzUxnX6JFK",
  "key17": "64SbF57CF88YGG1k4bwpew2xs1tyBb6zR9xEYBnodGuHcRHt9YNcuR5L7JrqmL5bnGXCSe8UM51KmKbJe5oUHzx1",
  "key18": "4tUvr2r2RkBU6dWABCjGqrsaRUT54FcMe2toTqjepf8pSASx6p14PDNfHihVmiNxHoe8BEoU3yEh7H85kcsXxjbJ",
  "key19": "4tnvzzYu8rBjh5514Q4npxAxRPAEgenuakmauYAk4qgBJ1e2sJuybVtvM8BBm5NFDD2sqLmq5A5MMa9HqDhYYACx",
  "key20": "4LeNNYasje98u9oQ28M7eQQYuvy5s3htwjTM8pUkVunLirSUCFSdXKGV6KhumK9mk8owFDki16NvXgsFL4PRHYR2",
  "key21": "ayV9ZdZGibtXUVh3G78PbhL9fqNA7EHmcpzpUtsh45cDLK6UwvBVDwRA3TBbimBNFYFWVVA9jL8RzNC4Qs3d5yX",
  "key22": "2cEXkG4RQHbygyibPYSLBpsvVQv5ZFYKKhfgHQaGSyfhkZgwPdWyFzu3xdtJDCxkJ9LnjwDvownr7EBTYggDrKwD",
  "key23": "5AF8zyEhMaHobddp4G2ZjmJZa1jFxLRQcoHwLAmwvaG1sFEaUu59A97H8FwokBMmzcwz1Q3xFM95njfa3b9Nx3dW",
  "key24": "5QfFR21Z6LfFuatcaS77qV4ehsxjcRsjYugzvHvrxDLBJcZUGXnn3VyZ5cV667YEFY9Xztq4bmGrLCavQfDuX24r",
  "key25": "3PWDtp446aDMYWFj5y7h3g9WoBRQYpTbzNfEVciKDxPVDMemSjeNXdraj5nTURV5DiRDZeoqkgFVZrghAorV1jaS",
  "key26": "Lw4JyjTo68rJb6YLCU81QpLyqMoXmyPuiwHVUrtZaGMpvfDRHpYnDccY4RHkJGRYYsneJggrxQEkdXSK4waJTJN",
  "key27": "3cj5iCBxiXsPaVfERe9aKVrjSiMDaJfKwQLY7ppXYL47yMBb9xTro1RSPygu4tBxDfKRkznkUsJaCyCziAhq3M2U",
  "key28": "37J6fXjFpY4VyDpnNmyQX7MxcUXiVaWK4zWa4DTiKDjo8GsPFKviGWsEafzhM1RH4ZSDEN9CBemG6aY6FY474Mfj",
  "key29": "2KDgWaCcNQu8oCTj2QL6Xo6kCeiw9VxzsD8LyrYX43ajVxN1BkyqWYwWZEbp8E63jnE2TKbzbYEBfoVtkjdgbe23",
  "key30": "2SgHTabR1KkyE9rn4P3iKAPdjwWuRhBZFjkGuAxKGQSbGrB238q1VWKTUdoAjTD6ZsSGkLDKzQ3XWCu4ju9LxVba",
  "key31": "3nRKZc7nuGDCpq5MC5AV12p1datmms5YgdCnRD5XppdfPyPpPg1FrdMDaTxQyk4v5rXzBbepx9gUnmFCLGFw4zZx",
  "key32": "5ZvUf1xtsD5i6tbwcnhRK2xpcQxBoDdbU1eDyemfNcYagmq6kHwk5vX5pAnQUAuH6e9CmpM9rnspQNdotX7fapht",
  "key33": "3G4yD8mB1n5ytVSBMwxVKTH2NyDBtKjMYBD8AMTCG57Dva2SCFwLJqz8dxfF3j3T44vhhEZEZaGuCb51MFv1BwJu",
  "key34": "5drHbQdJ8isMBQfA5GZ8w1BuG98zEYZxoi68FctDPWDKCkpgMcApmTc1zvtWcSRm47x5uFSMM8pw2ABguKqjsiAo",
  "key35": "41a3nJajMbEP3VJwgHC9SWYA2MogaZSUi6sByVBP6Z9FNm4R5q8JZVeBo8TwJNpdW5yeeEQWeF61C8RuFmhSRXuN",
  "key36": "5mwbXB9XPEzBfFGUYAFLVm45pQCyBAkwJkBQBJPJzz7mbP5DUyDprXkRWZBNQxzSUsn7FAuLWjne1YTf6WPnwx6u",
  "key37": "3NVDyTS2veyNe7xWM63RiVwo7PxwMp2NQUCmATwD9hckHbgp34HtFKLLiqsnMn4UH357MM6W6pvCyukXSn8GqSeR",
  "key38": "GTz6RLcytvDqvtgJXmm7mjKfwMingLw3TCo41kKPwdNDGLC3CFFC2ArgnyyMii4RmQgssTA75jSyaqms2wzdpEu",
  "key39": "3HLSaBh2MRBBVsxsUzqVa47rbwH73GS6pq4b3F28HUYH4ojptvDDJ3ati2vsBaooyuUYR9cJ7ojqqmnFrnMvM5cr",
  "key40": "5gAA6gweaWoYjWzqZY7eKX2ticJ3cU9UPyQx9mZhjeN24ySC2i9uE81VRUNurALWn5MtfjVEmeX4hM6L29UNcNsF",
  "key41": "5nD3rpaKr8vQFEhU3e99BM44zLffg4QYDcMdMegpa6RkPsQJFiKYyuWqSEAvMUkCa9TghioZADHuVRW7nAgvcQr9",
  "key42": "5j3qJbPes81wgUV2oMwfHBWgznY38rC7ZDzd1RBAE3pcnnTza5uGLZ5X5jymdWsNFXfuo91GoR31ZSWkfAbBULN6",
  "key43": "3baFoKU5YfUMe1sMuenLu52eXwJne2qJr4Dgm7qd513UbdDoBVLuRmdu1jqqiyrPs93bVSuUGZmiPNs7fQ87vqD5",
  "key44": "2oKQ72NUBTcLGAgCkpkFeUA6oGbNTY3MW7XQJT9waXM4EERtBE1zFGx8jN5KgkdZRALSEuHzEkKWG9TNkYZpyoY9",
  "key45": "311vRGf3ySR3XTLD4wVMSCktJ6zYh3JtpoxdcrxNtb8mz6egfBGv5FvwvbSPL1WEMiCXJnkaXGDY5NmJeg1DVHuQ"
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
