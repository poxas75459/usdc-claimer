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
    "5tSSaNSMhsnxhfHMVC7rViJeSuGuLa2re8LxaZTjevEb372nDBgMa44BzpnipJxvTDUCCAguKg8r552EPQh6f4q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NnKEi7FQHu75fqUQN6eZrGwcgUE33sUh3Y2qFCYLKK21c5yyQQi8w4M4GGKA8C9P3mP1RnoCoZ58fxrtQhyn5Pa",
  "key1": "k9DEWxAu2uja5rWcfULWKNiKiHRsrhcf3qpArt8sErLXL1XXReWWVmqy58sTjcGS1EHVc3gfjGqp5YrAkhQR4nd",
  "key2": "4pyGvWTdemErLgQ4xUhDxyeF8aTm9xGpFvopJcd5h8YtfSdBEv6fS1VVysJDTMgDech66Z4e59nXRoXcM52s1fAx",
  "key3": "4kyijorYGRGvBZrjiaWsAKUG2GQP8y9W2vWHsNptXFSs7zue5EKENcRCZEbpRsTebBhBWaa2isEZg9UxvvrKk3Zq",
  "key4": "3tKqwNbv3ZMEKmhNjkvi9YvqZ8C2Bk78u6MquGH7bXPJzC5esPQhj3tDvsPijrvdTSbATfsJtUf5bvE3BLv7ABqn",
  "key5": "4v9n4gbd8htHMpZSnyBs9Q1RNZBNoEHpt4Zxs582KS6dJYXF1dC7b1L8VErFxjEWcQ4nPuEXtrMFb8x2SD5eNvh6",
  "key6": "3uWx13WTd1ck5oWX82FjUURoqtEj8X7yGAiH5ays328mqrVZc9mtvtdeDEX9nLnaKaovdeWawzq6mJrdP8vSFyVp",
  "key7": "ptoabwqNtPcN5hJ4B3oyEuZ4ZeuHGmNdpJDcwsvaSdBWCYD1KCQN46D3Aohrif5mG33nPGsaXm2FbcJoG97WnV8",
  "key8": "576926YPozwjsiCw1eozeYwVw9HTadrasLeNZMg9tT8UBcWsRgBJqEoQEKzv4Zx3a6SziQHSFak9FXFbdD9myEdx",
  "key9": "21wGvvWrishX4msiiDDkYL7ZwvcxUQDfbF4u9fEVizmoufDeTVKqeGPetdaLBF8cqKZmzURyYeFEhVNP1zWTn1fd",
  "key10": "ReJLjGk8D6PLhrsNLmLPHMFD6nqw1mN8UzUL6Tdyi39xTXSBo4PsgU8DyRBXSmf8Xi8R8zzP8PdKJ1JM3LneTjq",
  "key11": "3azPLsMiND3RSsUGRLD73j71YHXvuH1MLzmWRJLyn4Wnh7ebY419TBPRmQ7dMSpXJfUvdSpY3ub4ZNrRpY4eYQk4",
  "key12": "2VckQzb3pEqSJfrX5akcfi8XW8tCvuCkQeZZuuSTGhajH7wwXqrACCYN5WphWci91nxpcEYwsjBMgnXJNB8Lzr5",
  "key13": "5NmUtmzuhyVtgu2R7H9hC79C7zGwAU9b5WS1xK8NbFz4SsLdZvcnZmjHAXuHUqwSr6HSqf78P2EDfTF5MhYUZ2HM",
  "key14": "2Vx4wpQBSFH9QTuVduwNNREK4ZsriamWtvrNxeyKFuZxohLL5T5zXnzSZeEwRzhuNVRM9Kcb2urGaefwnnXv6ver",
  "key15": "vj6s5o48MkiTcqRN4U4zfV78NjFEkYUx2BRYU1MHNj6jXuTqmsQHQQDwLpfP5b1UQo95txUhNjK6L5uHpiAhMjs",
  "key16": "2vUJPKq3KgQK2ZfuAZzLfacQ6LaZLYPpywFq3Cugy4VdahbmeBAbXBusvacZkdNoZyXqABcuM2WyLBWwfx7wZ9QZ",
  "key17": "2XxE5QsmNV6p8FHJbPUnujDjvqgouCC6DfrPPRtGQ3z3B4pdPufenNw1nxC8Cn8qjpATfLnWr2Rp1aew9XugjKiR",
  "key18": "22aGSgzkPK3DAYoYHor2dwF6zwDbXyCr6RrU5PNB84Thu7Dv9r1JRXQ1ka3VtJ69Rpaw5nsiBivzTe7fn1kzwy2n",
  "key19": "5BwdFk3CA2mL64vMNxsVNy2EkRwvDiP2nvew4ND2CRQYHQhTMqYezpB3wff4a4EUCKPv7xtGPknbSb8aU7TJDHyw",
  "key20": "3ai3SUdwpzPsL2DEcRz96YJ89dCcBmq8ZdwwzF2V2z4bwpCDSyNyXgasPbK757ezy7TcQXPN2pKWrwf3FJ9UiCLr",
  "key21": "c3XFKorGo6qLQL6wxBocjbm1pNuHMzpxkBuuL2B5KnhYze1BEPmyBRSXS2qkBwE9pdf2uTTW7K22yTnYMaqCGn4",
  "key22": "4KJuGe6dAREYeyNNsGAEAEBNSRq9Gtv3VEDvaT2HhgiWHgC6JUPdomMxBBXXvL6jQKtVtuJuTWQEsa7MbuNT5HDo",
  "key23": "2SvfEwoxp2exZiQZoVrnbAuRL3yrhRXpRavLCYENCHwAF49tjGwjqXtF1mF3vV5AKdMhKpR5pgKpJdyo1MCeBh8G",
  "key24": "4CGV9Lzo5sVgzESZAiHqz1v6RnnF41TLqqPQXCj1xNKCZoiJ4GLXhij6QHKL55iZA4BXFFZt3GgCGadc4e7WJdi3",
  "key25": "2gZSbNF44Ng96tLjUtMCqBXqMcAhE9z91PXuTMbjhMysfKxBZSBascrvmJEXQUBB4ZLbtpZdokZyFvoChXNbftWA",
  "key26": "2DUiVCnP2cWq63ssb4GGhnusS39PbGRzLXdLgcMyCshN27pzaKXUs6E7uW6NZPhx1qjHnm5v5MqnvEW7cEmQDcNX",
  "key27": "2ZnKRwVrhbhATCvPV7C4yhBsh4EDXEgbMksA15632mVJNSw4AQ9qayfScGu3r3m7MgCTPK7JH4UFMFu2p1w3K7J6",
  "key28": "51hS7U5mFfQM3g1ejURKSNNnLUmBvsBSmpJcp3vEuxEVjEGdTyMzuzUYkG8WRK29FYgoKJ14AN6HxCr9nRTZhEAR",
  "key29": "5pUSGYZe5JuC58aTjfTuad4GitewD6KT9P9xtWQ154cDKaoGdaWYnecpiznsACHPkauEyW6gDBNmUpjAF3B5DPz4",
  "key30": "4DqLdrQw3uFnLGZ1UdLdVieQhqNn2ZevUcoWEjv2HQ3YnGA4f5gaceRtXyGBtBcExi2roJPgad1KN9arUEXDGU7a",
  "key31": "ug3bJtpAhjnsYE9m7WpuJ23hW1gh3LNnvxNmSBTAUdubML75BVYxnfNAyHyvmMahNq9jkxBVf8MCM5ELp4wFRnw",
  "key32": "36ELgM2hwaco5aSvr8y3pUEKmfbDE566SEAiMSiSgo3YFd62PhUM7csDHwgiopeKqmFF1XujU2mQAFo2Rzs5q68i",
  "key33": "cqfgSCvhV9wnLpUhLmz4aRnapxknhMM6tiRdqfMkn5wCTbDWqDETj78zCKrbbLyAmXf8UULQ6hdcc3BtbPrR1BE",
  "key34": "44uNHhLNLyznAZP1ZEMmSijUuUUD6jFkk2ovnU22VLVzmrW2izz96R1oK76QsGCYBqPFz4xVM9rFQKvGyL6F8hu7",
  "key35": "ZiLvxaJzK9cyciHTFpBT864xgoWBhk7He3T1ygDtNLYDJvvnTwYnbtPd7WLavjwu65hXQc7ADqMPiUnkCAQyvqH",
  "key36": "41UMJ7NiHovhBwafScybNYRZjBymyUTiZgtFDtcPXc9MeLNEJoESZkwAAzDNVjoHG8fWMJdhiwQKfeDqEYQUT2Yr",
  "key37": "5JLfi85hK5kPtmqaqDEYFBykuBNg6eB5DmQiKqtkhcXRvRoX2efv53h35FfybAw1TPDp45zfbZK7QcUgJ1um1AfX",
  "key38": "NwgnHQXbFo9ykchz9truZhfvC5eQVL7KL9y2rPymguNkU78649p8UrjywBypkquY4itjFRgoLaJPFWy4oV3Ur2d",
  "key39": "55Ywnbi2dvha6mX817wP9jJB8XTiUCDWpTfHZh71FNq3EYMpP2dBRwAvWoKc23VaqSqxoSPDRL3AwwnCYBvVb8LW",
  "key40": "5kFvbvrzEP8xbqyovsXpuoisdQtfQnBxay6YuhbYnrp1dafoNn6j1miZjpMk4SePn8cgo6fUgPLuhF3H6BpCmMp",
  "key41": "4trikS2Tf9qhVDFNFLHUoWNiooe5KFDYfhN9HjetuhuC5j8w6h9pb1Tn7LdZDbzfQtALpnW9Y3vU2aoLGrJjR2h8",
  "key42": "38HiCfyGbkBU2EzBGYrQkjHMuGuotquMHUZav5djm3VFLuMyfSdGiVEj3QwYWyquubQSdXHBjwfbpyogiMP1AgVQ",
  "key43": "5TCMADstJzvNutW9XtJy5uHgGAvAyzqw11iuE9FaZgmCoYp8D75hF6QvQP4ez6pFPxoa5YeyiJgLBg8tEPJfN2v4",
  "key44": "617k2t2fR2uMXvNxSA7cMqnkwSJWWUcwRQiBziW47ycAMqEREFHuB86uPuHbes4EqzFq8xi8ytH7qtAzBgDTaHTT",
  "key45": "46GUGsGVfgcZtLSeaXLK9cS4WKxcY22iN3jAfLF4Gb77PJ1cXFqdgDPFEsrXnf6oX8n6TQ5drFsdZe47KPRLZP4E",
  "key46": "2uFq67ZfDtqbEme5qSuWZwiUDUwwMuMJKfgAKQonZW9vfepQ6VTacS3Z96FJ1FSGtNnLRJ7YUkAeEYS2XyoGibAv",
  "key47": "qdhyE5D4oiHyx64rxS5Nc3bVNus2ShbtwqhoKnXR32w6LHeU1VPvzpVTPK2srngCUhchHTomndjbnckjjeMRSYo"
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
