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
    "5xYW528sLVK5Mg9g8Ym1PubwehH6BTxzsAFKjYSN1C9898amEuxCGQcgiLoiUa3mGgFB5FrctLGqsw2RHug1erZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "92mX3EDDWcRaRFGX8nG4sSYpXCoNqp3xMorhDJJD43rSLxn53QVfVeMK8DrHtm6hf1ejEtCdb8pZDtgW9YuuJZL",
  "key1": "25BCqFN8rfte2TXptqnd2Yf1CHNtcaySGjkLzvpgJfZAyfXq3d3aXN4Y9xNP7KosC87xZX6hPM85gzmYs7HNTAxX",
  "key2": "5bFNLAYrN2voNmMwbicNhLxgxC6G5nkpspeh5nwhkhtmdueN4V6VxMjJ3huG7m2P4Hrb3o3ML95383xA28xj6p1r",
  "key3": "25voCroQAhrZdzEYyfzJaLTtMCx1DeAForP3ym29bFVHZ4Q43K3qwcRi11Mwtwmh6zoX678hYPEXE7xu2LPWugGm",
  "key4": "5ndoLwaGZHACLKH8biJwAznsv6nwyyhYph23mYEvsfnaJp6oKNdpnbXuwuCpGLsuxMB8WJYy4NjmgwKMQrjJEYJY",
  "key5": "38nWgKm1jwxhHg1omvpwgauD3tigKWdaAvUQSpLZAMN1u6B4nrXdkQ4A9Xe6FwX4PShEtD74UCpaEHQ3PLCgSVEY",
  "key6": "VzTFwEHHS6HVsuDifbL7M31ACDA3QRwGhCW2ZXqbVYxNhyLcYW35YCi4ogrkAqthXTxFtP4jinDM7siwaSDmwqf",
  "key7": "5sDyDtXQNdHhyGgjx3fpUjbzNShyqXeqrXsQf4NGA7Dn69YtqTGXmZu1L4cVgpjGAq3oW89MoWxVPacEyW16Kqp1",
  "key8": "59iAv2DrmrAiWccshaWZgfzhk4SZSjt1piKS6gMx85tcj1taNgE1Daf3C8uPJEaHm8nFncUNnw8ZgrXdZvf3tEqf",
  "key9": "9Aqr9aGyr3HoWmwqHHGXb1EprquM81mecSxxmYQsyyRsQLkCnktnPeHCmZXYzejnTtjLRw4qh1ueExX6hA69Yk5",
  "key10": "4naeYV8KHcLpCdmZ9CpSaLk2S3MUz5chWBs87hTveihvp9Ez2d9YZdtvWSBHVkUgagWNiZD3uman7iwRpqgbjWq7",
  "key11": "j8MMRE6ccccqJatxi7GGdGzFLd2qtuHxKfQBGwAqHAXx3XF9mk3c55cX5bRjb5oHnB3MNxKcNEcapUmBp2rb5GD",
  "key12": "3zpe2CMPrPkdAtXmKZXm7rRQjo1yFyYW8LuVV5FFYfGabSc2GDh79VfMBemwf9WV72uFJeYkHzDGd5wTcEHDX97v",
  "key13": "1wYxsFa6457QywzWm3WJUfgHp41pUCawLHQR6YVPeGvCh6WGpEtUoU3zPU6zGtQ6Dg8JfRQuad3GFQprzwerCao",
  "key14": "4ACRKLUDZhaCQyYftU8WsmxbdqTCwzXatVdKEL7YZyqveEjrkUNL93JHdCUkZH83M3MviZs263Rad5vDGfvad12o",
  "key15": "2CWdu7CNtERNqgy3LWU28VXqBp6Wwa4QDBq5zsRdJ8J5qH8mJuHp9R5p6foX3RggYDRHJcz33MEC9eYuGRw9PYw7",
  "key16": "2D69TG7RzEiwBVELUGjn63KZfydaFTpgEAFkyM2iqVDB684xeA1UWTxevC7pXePYjKNgpt4acwp1V37Tw4ntUni5",
  "key17": "4T4Ew21ctc6uADxMKQ1L6cHBbcobC7KtJS6qLSwsVBatV7zX5opkwDEFd55swzoRDqfJxsDMPLYYQkNfFC2xwSG2",
  "key18": "63sfweQHwvJhjX127FNG7T7TDuVYLk28MsaiC1Py7qwfzuCzu6typYq7iqtC9FhxDjaUBvmmZbq8mvtqxLaagXkX",
  "key19": "4AhyrLgNH1XtxtMYcXttqejw4ZwhyFeW8RDkz63NCJHUNM9FxBDSBMSq1fpVtYEZvnNDpDBSAp6bTBrwytT9fYp3",
  "key20": "w1xViBSGS8TdwN3Tr5zxT3wC5fVqgb4XvYwS55dP1WEWQLCFmbVhb1njPXgo2wyPZF5CgURMXKCxi6EXp5F22ks",
  "key21": "65AU1fE6T77opZHQwYKS2a3oexL17PCvV3fGb5A8iY9fNsHV7rLXACSuW7KuAnDsKsziyhJ54oMvY7ePDNsdSP36",
  "key22": "4us2jUsz9TaWGpfDcwuyfu5HwSx9jmVmErivCaauDJuc3PeEhdqrkWgZx6uFskBYmexYZ4NBi62neQp2KiCkdie5",
  "key23": "5thQiapb88QpemkTh7PrapJ7yCn2663Hdvh5hEytyQFG6WUudBzcePq37PTxTamPAPDtaJCHsv1jrJ94DXCkH4ot",
  "key24": "3SMLmUmQEBEnwzMBx1JWKng3ocq9sJEKyjvmiSMoGCNY4hBBypSNBoPEeDEneknU7h5gHpCnuvHr9BEZXuebYGBE",
  "key25": "2P45m13P7UZSTakNi1w28dnWCgvktF2gD5yr4RR7LgLJp7ukWNEkSBThRQrPH7TgRfycqoa4UbkWRDyVLHTCaV9n",
  "key26": "2qXHPXkFmHACw2XW8Wo4s8C2DcGgp6cq2CUyaZwp14bxUqSVfKRciJQZmPpYFR8cSNQpQU2jfCQpjmefHSpLFWrB",
  "key27": "3h4Sfgkyn6NAyagv9ddmBfzbdnsyjRfp51dhmiBS5teGoDAUwrmHQ44Si2713uSXkj2wfboSjb8fLRYswqBUNsSj",
  "key28": "5kEjHnZEwHdRSNFxicSLfuWfCbvr8Hp15UdxFJd9CXHHeH2dAUiQTMXYEo8CRbn3NsX15dm39P1xbnFXQeALuDwD",
  "key29": "fDeaQintN8qMFCp1gSY4iec51bzn9rZutrGw4D1CvG4u7GBeUxPoMuFKzTzMZKKVoWR5ENbncAhTppoWWSsAhBS",
  "key30": "4dcFCs54v39p2q1EUCkr4tJV7FP9c2LfjYgEPzXruesBhimRqd9kBSUuZDEpR6g4uLWtaQFYiZRnzQVqzBc2Zase",
  "key31": "38tajc6kAwYE6xBGNm42HvwTrmB3me69Tj1hpJXxCK1LqG19CAFkhhVs8sQYUP6zmmorhESraU48upC6yAP2wEKN",
  "key32": "2kbcWaBzZmzM2LynFs9p1yTeeDbM4xwESenwfHq9GpivKmTxM19VhXoACqkPx6rymEV53gWC3L6MumB3HToowSz1",
  "key33": "34HCY3iWXBoQ4cHkciKGDokr7NtnSpm5DeWoE8DW7mqZ4qGHhaP3HyjafKhNgQpKu115kDmSvMcVYeBMmFcTFq2r",
  "key34": "4zXEuNj57FfvRqUFpCQ5QaUDpaABiK8r5VeDXSXUNoxtwftCr7Si5mNjBKc64rGeUtnEMgVXscotJFp7ASYjU4Hr",
  "key35": "37rY5i3iGwnaKwjtYbNTJQB2mTTRmLPLfncdnDeaRpXYJVRayduziB97Hs7CcAa71fT8k33s5y6Eb6VriZKLvdQu",
  "key36": "5Y4sDPLMPsTY81t8QY6W7zWsf6pstN7wfK8Hn3r12wxivUvSzCBVf6qXj8tDz9nrDtfv83mq8Jt7pXKs74DbQees",
  "key37": "3FJTWpiBXS9YLcREABgQsAnunugLKHPG3ofxXsbBeQmEhjDpyGoRDwoZ3vej7cZZAH4cLZjPX2m9ThEyYGGCGr4d",
  "key38": "5TpcsLhEAwVA9iCHoQ243CaSpJSwphcYXq8BF8dyJBws8Y5m7vU8Es7fmE7HhXPBGXBbuXjAPJqFofx1bhNgosYe",
  "key39": "4irsTGgy5kgMHFQmfU8ezi7J9XPMuZo6CvZEZfejDgCZ92yDnry6FLiuPxXicUgL4Sz6aNUaKdUnFw4fPgvRnais",
  "key40": "jTf7Fnv89tsXeznPNrmqyba3W9pwbS1H67bPEnhSb31Snk9TPHupFQxQHuw6oqw955jWLcPiAB6oDf4BExW7dhs",
  "key41": "3jM1NxctwTrVhfDyiJAA2vLXYnpGucv8v1si5wq4vxAYXeKqHQJJ2dTuRgCbahSq5s61MWBKb4g5eXa5aST9SXAJ",
  "key42": "3EF4DPoPHW7pUzGQ6j2QGvp6GEHu1sdEXni2YVTmbNGc66Yx7RsamddzAosW2vrsgCJu2aEnV82MpVmj9J1rvDYW",
  "key43": "5pWj1EKT879p91e8jrHh3JQcsC92MxCS8yZVTpqArSsq6EVbRdsjCMHYTLcLWTStxyBQnEyNuogZSSesAkFj8Sfj",
  "key44": "4U8d9gSnd3VWgaJwbtfaJK2nukVBEhhCQ4e6VeFSzUHv5L3xv55MGjcMC1mi16kvMsmb5RpUqu9j925KNued8yNk"
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
