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
    "4niBkGC1GJyo214GQXZhGEPncx7HCiisB3xCHuoBi6HjD8wAZ4oBkXxPjZa9SDiRKfo2YHY2GTgKEmkkkhdX5Ha5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nceF2cq2NZapX2h42A3mPkjzNhTysVji4U8Z8XwaECzV1fqVstozhrUfHmz3dp6SNwH1aMCzaziWpvWtCUmVikL",
  "key1": "42gcwDBZhtF3gsZtPWbY9m2Le2xeod6gX53ADvwbsPsaxyxi6sv3semXo6HXAvKpTXGb3j4HVaZBBia2fMLKBgY8",
  "key2": "4vp2EJNpY69DVtiDknbmkgjBwcjiLAouD9U7QDLTg8tQQbDxdDS47Hu5ZfDcpk4nJnj9GRgNgHVXYM2YFVrFAmHi",
  "key3": "5KbXYzGjkrZX5vakrsy822xzGREmcEJqDBUW2Ee12pkznUEfaQEtj4BNebAa6Sdzi2nndLgPPLAkXe3bAbGhqJ91",
  "key4": "5BEXZUF9kvPPuCKna5dNZDjowTiAwEyLhEXYzHr2dNvdepJM7qKkRuX2svQn64admBUxwm5Zcd3BS8HfPs6YCwTN",
  "key5": "5RssNZpTpm5VC9rhgp8gDBzScLNvu1XeUZu9nza84Qc8WqfvhXsmgCQXeSDuE9gyZ9poPKSx2aeirXm72J25j1Wq",
  "key6": "5qCLw3GXiTVhaj3SJQuuQf1uQtpLm7DfpFkp9SeoUzJhsupfmyHMawZcEKV9e7MVwZjg2JJANbRaFYUbp9wT6dJq",
  "key7": "sHWc8TfdXKm6EnYwerP5WEpgSa9EVZ7QvjZrSj3GGX4C7Bkg5tchRY3ar7uMW4nE16PAHVXwcpi7pSZJybsdPXN",
  "key8": "2RtzZFWxMT7CCYEeuzeXRavvEsHg9poV3iBThSFzc7TQgNvwfrL3zvPQ8hTC8h93sjExQvLN3A215XRAw4QXge1G",
  "key9": "PJMyEZPrWXhm9ZUDz6337Eg2zmkTCdhA45ttre7i9ZTdMf6JKnkT4BfCjPmN6TaFh6dXxN86wpoXpuJw3HCvAop",
  "key10": "h37a2AbATNHuoRDmPxfdvCDA64Eqwkp7JdAyVC7z1HWtGXJwz5J6aYrbx2GwdwdiCTxgohGS7JgENxD7wziy7he",
  "key11": "5oCpio3Q4vUbYvKLYghm1yLReAtdQPWr7WsGiYq5Bf3quoipv339cjRwbYREWwxkr47JJ1X5GZumiwgVC4aJ3Py",
  "key12": "5YscfUdztavNW2ByZFPno9mjqKPYUAA1RHpXQmeuZg7q32Nu1Z3iQxaRgPfSyiEZTPmZLgugHYC8jTih8j868mRS",
  "key13": "FKxQjPoSu5ZXjMtnBSWSajiw2VKqChcBjywnr7o5YUV7KP2L72hWWLx1omkupkECyRi6rtubJSyFwMTxuKd4uRV",
  "key14": "P7gPGBmujua4E5hY9nrkDZ2xMY1sPYnqUaVotnGHdLuEigExzipVe4HxjRTwfgQM7WzhDTVrCCSmLjsd7QFeSrZ",
  "key15": "55yiWxkmz7qGhpo3GZDMu2CFEsefnxb5hxTTCM3pXVFXXo1n8U6AEr5VYxwoxURRJPmUcbmiiPuRHKwL4ab5yn8R",
  "key16": "3qkS3UYfod3Fc4EUrYbcLTuQbe8VNupmAdcmrvTDhU35pHz15b5iWZ2fT6ePvx9BvnrMyt2a5MtVaLJtRtpEtttj",
  "key17": "49e9FvwRqK7vN5joVM2Vups31LkU3Sd9AwsYfxtLwWzYhghpdcMtHwtXsm9Tva9sNYMALW3MZ3ARidFoK8auh5gs",
  "key18": "2NfKymBAArfJkR5ppqpYB9dQKkuqecdKYvU7ivCj6cpptBFAHbZnuZiDCSKN8m7S3ymxTyQcrVm5K6ageQ9vT7w7",
  "key19": "dqV4RYpsxwzs8ZiA8wkrWCxFkgtKbgGp1BxA7N7Rh8yVUsFzoudAKfe98t5UK4645Tcg1DY35wzpqNrFueyfn6t",
  "key20": "4Fr9YF2ztFjTDsySndm5N8uKC74soGcSf9mg1zmvyfDLF3JGXATiJpCyEkHmPHpLT7Qkw27musCatdHMHptQq9oR",
  "key21": "3RRQPJeCa4kjNSnt5ySF1vNcqygVYYW9FeWqgrXrP4v39z3kQf6QGDattYg12KmWr2iHEhD9pAFRiDmhcLxCE6Rv",
  "key22": "V7Vv2m12pAGw7m4t7bwn2TBchMFGmSaDMy2j3Xkw2VXWhUC7dknJoqAoj5AVSk6V42Ekc7YyjzwmmTNTWJ4AKBN",
  "key23": "4qxHZ6zBzVaEHqziDcF3cELGQorfaFMSnmov6NBeTPRVky1bwFPrgMYyUvhy4As4cDipuq4PsQzQyxHrBoKCkngn",
  "key24": "3xtPAy2Qi68LuFbEcCswi7Qou9pYYsKZzedBtqVRJEuxaGB9VGciuisC76tkknGZ912RdzFP8AE6icYf8QQzQRAS",
  "key25": "37j6Q7hFxmgc3B6rm3jQV3kzkPWDaQERyDzehpNPTxhvgDdzRm1e53VspUusQ7JEvEZ79mpQQHohXEhRvncu9vyV",
  "key26": "4kWhTor5VBDdeJSMchzTGm28YZkFskE6bwhYyMQjcHmr4TeZG9aDa7Mcaec8oojYUqfAK2oSDjJecdqVsY6t6txJ",
  "key27": "5TsASTxBV4DaXsFLkBzmCXiw7YgfEWpqXE9WEP2ZTAgzFFNA1KBX3NoW1iXa7h7EvmHS99aPWtJ9K4PP9zy4zaVK",
  "key28": "485FGk5hD3Dtguna8Ku5tMPwMJ7TTkYjhEQxQ7J3QxMWpC7iBTSYBqPexP8Hv32tUrfCMspraZ4L5gK2QrNPEQ35",
  "key29": "33FW1JrtC4Y2w66okWAfkwNS9RXwDE6LHXKot6Zzi1LEfAJ6NtWbUEzfEN91MA4a6Q6f9WTGuM4AaF9z9JhEY2Td",
  "key30": "3KNUQY4VXZWmya1CNJH92gNPEH4RxXUqqN7fgpGFTJjV2zq6AeFkHo36EyrLPTwgM7Nfn7ZM4RgR175Ak9QwpLNt",
  "key31": "5PzbXAFGa23fvPp7DtozkwniZvkjrju3opLeiYL16P8fjDuBVUz3rLChbioA84b7U5wvVRVBvVnjXFPXkyoxe2Cw",
  "key32": "5grZKaWuuGDgr5gk87YFT2JdV8azGuqR38NUv2FcUVkhcLjWmAZaJHW84nqKDrmRkWWqGqGghxXrTzC4kEHjNdvr",
  "key33": "KyrSozwtzPufbZx7KdtsJE6G9FG5AzUb969ebwqcTzCfF1KSYJoAW61VdwzHabZMg4A2BM7d3dqsQvZ494ExWeV",
  "key34": "4xuf3UWzzJUmHN8o64pmobifZhgCwHQw7kdScY6pzTeVir96p5S4HFzibqzriznEdH9bcheR1FWvUqK1HCartr3H",
  "key35": "3WScdKLytAqNVvQKKRaJBXbWyucoLVUnLrz7LrraGgsGYNAwaLRhiT12fJjMxyT8uYD6RfhAMG3SoJc983R38kjU",
  "key36": "2qXudX77PKSyacSCZgumTV5Mr8beMiz5xtgHGp2gt7m8t8dPoQQSR91XpFN5cL3Xj4M8VAPAJyBbjb3ZkozekmCY",
  "key37": "4uvLosxz6gctETu9ewMcHgwem93C9wLeufzFiCpGYBPsDJ6Uskq8EV4yZcFB5aGkKrsB1zGv9Fo15iNL3BEKGwwF",
  "key38": "599gksgoNLwE9qRAtUA6Z94md3rqcCCt3ZSLXR4aWE2Y93DceGXeNyzJ4nG9V7abqhGRr8LZUnfxX5M17Ja4siGo",
  "key39": "5fuTkSZ4HfA3QmdCP5LW832DS1c5gGwLmwEzde22WQifqjdPsT6nrHEtdAnUvFSnfJAwoMiAx31zg6unxeZTEjS8",
  "key40": "XzZVwns93a59G7c92EUrrFKfS9jZkpPnP2Ft74Kn6QEp1BPU245pdq1F1nvyLrtFYnFE4QhvBi5dm3d1Sfo69Ad"
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
