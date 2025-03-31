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
    "3BcWHUYYdqqHdQdz68V9HVnVB7JKV2wTzR4hABsjFkvmMFYAWkwxMUPBj6nJus3mQt3bqwZeHzs8o9APBmL7krK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XumY1Vm1i78E7BRwh9cvVZEDRZowuD446d2b5xTqxxirQBnq9rqq8tiimoxCqjtAD9DrqzNrhLeV2SnAswm68z9",
  "key1": "2ktDdgAVGZPAUVkWcWZnVz7g8DoGTj6pXpSyWdrT64kdixW78VdCD3BfYbKYXhRxrdgY1migXsEqaa3TYJz75rDr",
  "key2": "5QnS3McUbJXVdSvbVr5fAQe6P629ytTbNtPBX4Tgp3DbB57XBzWqafgAScmmFjLbdGFSrB9Z98G2boeidFJzCxYL",
  "key3": "46piRj1zZHqP3gAt3DedQ1Hyt4fvweAUtTWxzW2KqZop4wwtaXCc9SiuapwB3mV3UEr7Qhf15ZHYx3CWw2m9Dp1d",
  "key4": "2g3tFyvXYXuzgTbme3C4rJNzmwqWTJQxcZmBv4F4hf59ZF8JTuQV7n95WC8Y7XKWcxH2K71GgQP9xuGEmmYoKq4m",
  "key5": "Kz7Vi8Mjsn5qPJdQT1vYDW38z3EQRLWLCzo6BpVZ9dgzMAS6BfHYoUmJreJsiSGF7GU4SDFW8LYuo8ocnrLeRm7",
  "key6": "8rn7b2kYfo1udaCac2JMPSHhh8aUYiVtccyBmUsQkPzrFWXeatQ6YGkJt8N7vAKLRAUHzG6R6jVdRC8416DjEEF",
  "key7": "4jxxHLmxyGc1vwfy4JNCKMUKuavciZsAYGDZLqfyacW2j3F5weUDHT31FWewweVuuCqsUePz1bm1hK2jV1MqxwD5",
  "key8": "5xthAFNuR2r7xMzb2QNE6QT2U1egEkcgnFYLkZygoWrcGGWEHq2KSbZyX75uRHaHinQzqnPC5fyioWdxawWQqNqC",
  "key9": "2cBUgEH7CZaJ7rym1NLJYn9v8YKY7AzouinE7thPJr5FTkkuCfvb2n1DDiuHLtSEMCb3zaueJCruQ5Yvbgne88tW",
  "key10": "51aZp7CKEhhKCNFt1qQQi4Eqh2ntXWr6XpLkYdQaZHnLiyVb6cZhC3CfJz5miLj6DjTKstLVSDxL1hFMfPCZyyj2",
  "key11": "2orDvDrMNUjDZKG32HJx7bAsRFa45goZif7X81fKFhj6H5VZN6HoTTtZaVwcCeDgHcfj7dEPy4rRGUCxsea6t2dx",
  "key12": "4xTk39ekpLsHNQX2s8rC49HJdnUe6aNxhkizvtiUkEhLpsmKodetqBZ3XFqFHQrvEGxZEx2mpxS7Pkj3V63WprsJ",
  "key13": "1PDBt2FBACeHWnsvcohmSoSyFowPDFcN79MdJF5SHSLgEmvqKYde6R64zYyPm783nGQ5sRw1E3VGsvyZSab9ZVk",
  "key14": "5e7N6ADzMsbG19fXEUsA76vriJ6VcQGi5ZXHpe4pmJskxsS6g7LHqnUWX2RCWz5g6fieQx8A81a84hki4VNVT3Uv",
  "key15": "2sDEWTAWvqVqi4hF9itf35FffXCiXxQ17Lit2hYneEz7oLHVfP4Uae9G7oVYrQZfb5urUExexKub5bDLxeXfQD3p",
  "key16": "4T6rSYDXAfoaAtaxCPnH4qMY8MuaJkvYPCm4Fu8Dg5xGe2DKooHS7su4fgXKkdDXD125a47nVBn85kQ9YSH2HV3T",
  "key17": "22Ww2ne1Yu8XxhNnshVnC3WytRvMyxTKTjdqBSa4QqtUD41qFTbP6zkDGoqqs1pQmjvQe2ctdzE2EhZWMQvbjTcN",
  "key18": "5w727TrD22cNRVeQvQuBjR7UCTFoTHCCCSTnm9VaTSzQAnymCyyDRqvMT6xzguMBTYKNQDUSUt1XN8tWwHsBvLHL",
  "key19": "2y6vj5zhL3EqYhqPJ81ogzCda7rAqu6FoqxAJayurL4atFc3RNxPtPbAZaqgQHJLkxxN2xDrG4oPWmuyAPQXwMdT",
  "key20": "3uk5L4oZodwesbs2CuJhNZR1Sdo7GiqiuzS6ehKBsRS635ywn3SVS18hRJE6xBRj5RyoogBHJAK38X698WmcxJho",
  "key21": "qsLPjv99x9rKgFpyRXpB6g7QHmpmBD7H2raUFcZKSQJ3SSrWUs7pizxq8pRFscwxN2xhQxBZBt32VQ274vrtvXE",
  "key22": "TTUoxcAictF38AHXNxEjn4Ky5vVkqKnL5h8voXCBXVZbrXcpUg9Pm8ofdYRKZ2SbGyFPKv1HM8Z9WAonoknMTCJ",
  "key23": "5L1x73dx93FM28K8TEmxdD9EpXjhsfuYzCbcbqgYEoHvoQMYzMeZpAbqVZQsjjnJVV7rs9o5azEiYsGLyAA1FdAN",
  "key24": "sKSBJimXzLH5mQEa3Cex4tRc9kW4euZQe4wj52uetsJXfzfoDCkW8V5orGWAKtHk9H5JcSoSdQnsif4ouEdTHak",
  "key25": "2pJ1mNzCNLz4WGJ2rTmoNiecCXPjWy3awtSxxP9Ar5gAkxtekgkKAg3rFaiRWBmyvv7kALPa7E1eLq3sUFxCKZFW",
  "key26": "4SyeuPHzsTd4Qop5FsfR49YCw3j4yLmjxB8MFM17Vg2Nzg2ZzjbvvhLbRqdg63CW15wHYda5TWCYQytdg2UFzmSm",
  "key27": "4HCPTQdpuHmqgbr45VffJZVjVJ7qYfChvq8U9y1DYKfFGem8ehouRfXL1Eba5ochL6StoRYuknk5EBGC3n6GaVrS",
  "key28": "28GE4pweeSeg3VxuZN1TfBHY8p3cUdmSNZtmS1oQabSe2SXSmkLBsCEznUvuK8oUuh8K68g4fXRsbQPhM6LKF9DV",
  "key29": "5LP3NnPjz7Ek516jTcitbBRZb2yJBNxHoVSfApVLWHYFTnQvoRJYEPiWxHvGRDHuxkowuuVRSeSxZbSk528uXWQC",
  "key30": "5NmfvqfMfyHeKfY1ukbRYcf29rMEDQPRhSzW4mSMomrEWieJ863ZuxzS4p72w3NmdEjF9g9jDRE6mai6RH9134wP",
  "key31": "5zCKdVaDThseAvMRhCmnVhrBmmqWjcDiiKqKH2pu31MRg9LjeonyBhScEX7wtRw934kXLWbo4XHvLn6ccrNyTPQA",
  "key32": "49SMDKYijDraFvtL5YMUVWZzR56CLcTDur4rKGhpR1RTbSJzw4rW84eotKLR1X2DvqMXvreoutD5i2Va6QxDUWG7",
  "key33": "5458cjpqcng8bZFbtdydnod3XDR9aABwtyK5MNV2TooBDz2CdqLo2Lh3K8B9E7XnUjqdNHPYDAaw8DjAysvsmLtM",
  "key34": "Yr9kihT13L1CTvNqYGTSfGcr7kdwy1XfMmBhN9acEbVNnXYXg8pYbNMAuGEXW9EYQwKX6zugmoRrYgXUfDM6THL",
  "key35": "5z9vhUNLMbtaDyutSM544WHmkz25ckNzS5o25DQmw3jvufZFpb41eUR9xU2HVdXykGo792G6G8i4e2j8EkFsXnZm",
  "key36": "3xc1LyrChzzQD7ACSJg6MGRe6sTcqcuBb6KMoHgUKE6B33xwgAh7L2bAcf67WTJZvPYNRRumNawuSU9uqrWUpit5",
  "key37": "4FxKaUvJKgscqKUs41qrX2v8jYVM4muabDYfZPSZ5RMV2fPhzb9sfeur3K8dqLkhwqtm7PVoCpp6bagSh1iYHvau",
  "key38": "4uGgzoLvogiYFmYeMjnPda17S4NheRPS291J3FdzMcdGKepoeLKoFYweEcVg18kgQZp8m3jjtjYssBVJ1uM8UsbG",
  "key39": "3srXAUZSVi2P8K6jvRY7CM9CBxGn9Svrw2XV7KJtKb1p8W73rrRYqodty5nCy1Bz9FBTs5T45uPHFUM5uryDSB5M",
  "key40": "rXygKRBHfZhLT4tyb6YiCubZzE2U6tJQPZi93Jv2zswwDDHDKXMY9TMEZe5n4o3dLrszwzD3XbWUkDFEm5y3wU8",
  "key41": "3jfxRJ2AS5v6ABs7BP7WNscnb8XXnGyGTWzTsECxaGm2ie5mv9wfbHUGqT4TAjGqiu9bF61uidkmrewfQPu5w4m6",
  "key42": "4LJqtNPNsQXPWoCKLF2gKVARWN51k5ngwkdCi51Jq2czZXhEkTtxpaSAjfra3e8aHSE1XoHVaaCa7PUKHG84DGvW",
  "key43": "XhoL289e3wBH65bvHap5S6wTyFzGcT51ywMPLCdXqKbgCWCfp4npQRKMdeaHQNxf3eAyXHoaKzCHVqKkWMQeqFS",
  "key44": "N1CZQrzYKhTTN1o7RpgburFCqLNoVcwkcgJ4F9jSAQ5aRaUGytoVai5AxZtEWi6RtKAa1cAbymESZa1AxwErYrv",
  "key45": "5bPtDzsXndr4yrfW898r1DbCkYdUjcL5axEeGbfTbpjntABV9Pgi2X84B4dgW3gU3aNQUgyfoan3i6faBLRWwHCL",
  "key46": "4mUUbxKaM3oYABkym6X7ScNE414QFgAwReWPqt5Ro5Qpdc7jLAp1h4UwSbyzaFMKGJLtwMKv4YZdtK7TcCPfa5JT",
  "key47": "8L39SLDQRX9sypKmnP6p3HXA4mCqbaTU7vCpR5mLbB139cKHYWpQZQgxHDfYCUZuSTAbqwuA1PF5LG6axbt2YZ1",
  "key48": "2CCwwitb3aMHj3Muj1aMan7jUSZFE8Phrq8U32ieTRJpBjQ4JWcwYsemG5iDepJPGEPYTfDESVAiubcRovc1nDLn",
  "key49": "ASQ8f9p3ziTQHoRrtimeVjrQhZDo8hoVusLewdBa5tS2dcZZh91d9ChqTVJBYERAjxG7DCYBpyNY8xXLmP9Y1BB"
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
