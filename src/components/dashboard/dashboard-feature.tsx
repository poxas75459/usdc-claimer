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
    "4jPBD3zqByUcTtr8iLHUvqnd9Jwikczfar9xPiQxjaw3S4ewg6CLuMjp87uFV7j4XDte7uxMHpcCwGuZjkypLU45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xkDKajeMsLVjKuYqy5dgaKTTv1tzJPiTuHKGPhvv9XJ1PGLabmVAf2o78344QZhPraVHEvb2tFt1vYf3X8tfPnY",
  "key1": "Swv5jNr18BRGj87EpRVtiFMxgDCqG8tXPzZHXgucWWv3bXZ6yJznq6qWYFjEZKmBfdVqaiSySSbHK5CXzEhLogi",
  "key2": "2RWRgFzStfU4PimLBUGCFc94MhuLutKvoiqQZb8hDFJsdzUmjcjujTPrJ88G9SY57Tv6WnPdvqmgYMzRi5e4ZapJ",
  "key3": "4zNTGfxwoV5RuDyMLtw1y739xJP3Ros9m7ggniVDdcvveZodbmGZxcj741CQe9dT6iwDUxe3vkEUBrq5x2fGUGn4",
  "key4": "5bWt4xbBDp8JgddeBpatZBKDEpHgxPsMX2f9NxbsyaxsaHpis7jiH66iHrV6EdUkkHuLeSjCqPH47cVwM9Ubzg83",
  "key5": "5PmzmCZunpV82crbU2spSZSiVJYYPB6Q51hUtyniU8zDFbKdQa5mN95u6YWS3rmGdRoNNAnHMjqRr4ntw7FDxiVr",
  "key6": "3NTVCwoHPPnf83qr9F7r5VGfPSt7uunDaPA9gAawQeHk1HCoRAcFMtiNL81qP3wPM3ayV4pGbbDogHShkrSNRApb",
  "key7": "654wudqdQqzMhvwUhar5eZ6zp1vhBu4CtsfYX18S8NJwRWvi9H1Wj2n3VzL7h56VEHoJEwy5MnDXS28Yp77aEDD7",
  "key8": "NdTHJbA5Ft6cREYYiWHqEavta282xavz96ZvTc41hyKfD8wRgAWg5YaUf8bZvqeyy5bE44nEaazmXnx9CgrGJ77",
  "key9": "59X475ndmavvM6GYrpYgpsLRkVAishizmUBxjKQXmpyJ4HDH7RfugJB4XXmv13C5mKJeFwFtgFvWy2eDfpcwdXbb",
  "key10": "3KvtZ4vrj17PqAuXHuhVPoG6LAjrf6uewsYswzisbBVf1g4E88VSxLZ1evzjb36mvtrw7jWWqjCZ6Njrn1uSheoA",
  "key11": "5xYD16z7w79vZKuRBmmSfn92CrxM4QeQQLvehkurSrbVMoKbig1AM9sDgnq5EfsHscYe2R7ckCB9Y2FGgtfavjhe",
  "key12": "51Ud7uAPifr3gYW6tjS2qhYxCbsucuxA7RJKDML5VJk7QZ712RqfhL8xvkJQzZ7UVzXaqfNykEMzWPcKdfcGzVq7",
  "key13": "4wN4j2shmM2LpyPUNjXZgGMkTX3WsdN2YjRNGTWXi69o27D9xWm3V45KK37EMkVaiD3qEdsYRiR6qZnera1ifXqf",
  "key14": "5e7KJ864GWMKACNcuGbwXdhU1hryAVVRMzkrY32q4r7WdTS2QDJJeemyKEDVgTcFgGzi4MpdaESCA4QVR7MppGLm",
  "key15": "5zwkuuu3LCnPtvuSpq3KiMeWFuTGLEVtUFvAub9aY9JYZttBRrQt1F52BN7vXDV6bxVxN5qrx3tQTwtyvUjd3Ujr",
  "key16": "2XDy3rzM234PwAeg2ZT4p2jgwHz7K53aYdLZhaatE3fGaXJG8bkZ273j1tHycSrgwmzgwQ1MbQ83USHGW8oKnNi1",
  "key17": "41TL6r7tcGnjmcKaZimoZiUrvLgvgP5N98vcUfrqeFECnxPW37q4oAARMByfHjYw2EoocBqTxufAFgiHfcvj14sY",
  "key18": "4sjxtKcoETYoM8ASdaMNN2xmoEmH1QCSkbDiAaRxVdr8zG97dnkiDzcBJ9NhmBaErvisGDNo28vGuXYPgWJagXFh",
  "key19": "3kQz6jWMM1ZS2dcuQdzDUSkg6HxhxMnE92BeawWdWNQx61g5KgAsX4NUE2Yk51n5j5grtG5ehjwkRy2uZ85rwKd7",
  "key20": "2L7HuFgUs2sMbbopoo4PuBhibj13UEXbo7oX6FJC8MpsXuz97wRzB1Si8u2k1b3CZ2G3aU9uNKE2xPeTMV8dKbeq",
  "key21": "565AafZsXStzyPcZoXWQcN9oUtwUtZBXJPm2X7y9o1qRc11m1EyLnVoVwSjohoRPetfGbVrwif3p1ADvgTKbQ8AM",
  "key22": "5mJJrrYsQsSsqCZJRZEg4Ri6UFCrEfLUrsw5gka2Q946GvDULrVPD1tawddV6LuDrZFbW1ZckRGswgebQr6YrBbW",
  "key23": "3Si1PYDbYCC4b1hrhvPn7hbZ4Z9Y5jhh2vMfr2QQtF8ETpJPKbmar1vLp5AFjFdGH74XMNUp16zdSzVxnDPUx5XF",
  "key24": "2ALXEF23ejA4L5SF9oifp6tuLkTUDvZCLAwWFU1Yx5bznMZWt4ZcRERr1J5MmTgZ15xMczp7xkAjWAMHQxGrKTDV",
  "key25": "5oCTg711d53xBWg3AgZfaNWahChZ9utbq2qKeNataaN2kWJGQqTVJ4nHb3wX65RMWRMMbvRvwbc2oXss6nopVYxe",
  "key26": "hGcEpdAxuBUMeMYZsjECCLoGSVUQzt6CmWh4R1bmAyVyALy3Subj95XRcn8CCFNDQxTxwF63Apu5psb36shinpP",
  "key27": "2PjghCYSGAP4LrZ8Ukv78jETegvSUZQLHSXSxx81Hs63BDQjFnc7LQtF7yp9y5K7mWvZLu4ZaVaEWqQRbMdg9LtB",
  "key28": "VVeXTheToD4JnJBxKdcSQBWbvxcdJdHSJjcVA2om8jqAm2At1vm8yzNgAKY41zTyhZKp832MnHxF5yeBe7tpPqy",
  "key29": "5gVUzQVcKoNRJ42rhnHtid4WMkomGmgbfzkiKj4aGtz2seUyVqaMzff1eUyQn815MbNZTxvUt7Mx4Q1oVMgrVk2J",
  "key30": "5oQxYUAoDeqfcwKXSthRqaDqDcqXy9jALbaNHAyAbmD4d7s9zZWPvAKpugHQDr3irR8bT7KxSALSoDPH2yCs44nW",
  "key31": "4zgaWo1fTwBwA9HxRvQNW4hZqtqg75ZfWAXHvpmeFWNQKwx1FcAeJDPR634jstcSNdvR35aUAMJ4JcJFunM5fXdN",
  "key32": "2owdZHmF2FsqcqefToBtWrJB2HTzKnrSGqjJkhjTzPysdzRK6vE11g6HgxvM7rTQkdYGDdpr2NCYDChVr49CMKRk",
  "key33": "5DXQwT9GTyUc78G8vojgkZyzTZtuchPDRQNPR2aK1TpPgnTmdnH3eLrBTHBhjKUWuCpRoR5Nbb8eJQWTKwZHYQm9",
  "key34": "3YhG2jUfDpg5ahF8AUGA14PpA34VDop5DwXTeBUenFHjgbr9i4B1j7Q84bR7AEeQ2hq9XZfSisBcay7xsvZRojRT",
  "key35": "243S1v4viq3fvkRetJfL9p2S5LMUqbVCUBqBFLPnuio1L877Cah1uirsfgG1U4HoYziXv1Zpvuqtsop8vkFABzWq",
  "key36": "52ASqkJ6ZtcR28qcvkTLcVcRPH5PW5CAFi6QWFdkwgo5fAU7kjm38SHpvgcW9gixLwYujmyHp79kX3HymXeigcc1",
  "key37": "3hmBN1XYBd4HJPw2gc1HQ5S4PXpXtyTnChbeEjfX9LVjruqMWmTNNU4emSx2nXbFVeHa4gmTVxwyXNQW5BgU4Tw6",
  "key38": "5V7aHPcfSdpR5Z9bbHAZyrQTqF6drZ1MXNRraww9PjdgdZ1cpWsQ5E1TAhZQJr2Y9SHXH2pZXhhi5xTw6aNcw7xv",
  "key39": "4pQMbWDwRsS8paVCcpenZwPDVoDFEdiBppBmtvfHUKU9GZTo8Vaw142o8sJWdcTu4Kr28Wbo3mz7cWU43G5hHc7A",
  "key40": "3cMTUP51Ti5CYQsQX4usdYjERQjNP7RnQn1ELBUuwV6AGMYr2ytrTgAawFHXSFuuc6Km5D8UixTjB2G4k69WAWL8",
  "key41": "3HvtwB3FBZxsctm6XkPX5geHGDkHFmqw4Pi1VevEUBXfqEYpEPh6QL8ATHnfUDvXyK2nFN7cUX9bher1QhjxSHMd",
  "key42": "UdosmMGwhkAyRWGgBE8bzyjBKaTncUG1H7QRMsaFRvvekcAHGeVpyXUnEpbopY4wmWVRosExdTozYjfQ646YdBE",
  "key43": "5vxFRmzzBuGZu8u2RGYtsBeJAmt9YfzL8W9QrihXX1seiExByTTWL9L3gWfh7Whq9TMm51uwSpLJETckan3ncNhx",
  "key44": "2ukyGtCFw3ViDqacHwPNNowuXB2JYhiU1A17mbJTguXKUHmoLZGrD9BWSierpaLe9MxsQdCv6rsZmWvgRdGrqUZP",
  "key45": "3CBX8kXGxdSf6VXfYy2d76Xmn2LuUg5MXCasuc1hGxyxu5DFVjQUcRsmZLuA12Smp7s5QusS5kZBuq7A51rngToS",
  "key46": "yBuC5TkUwc8ajfQ8ZrTC6Rqxrbv9iAq6PvrV2sCkrtYTGzjpVJDW5d56KZeKz8rxyvaCEXSCGDy9GXztt32cq7u",
  "key47": "5i19s3RQNRJZScPR6HSgASxcrHSPUHcfg3Z1N86xQKD9jk8PGL8baPvTFkpezNExMq1XFrfn4gZm9QDjThVmFtkA"
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
