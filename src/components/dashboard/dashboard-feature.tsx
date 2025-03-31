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
    "4i8rbvLhSb4vkrjeTns12x9FuMhf9EvKQGxEUYRstXJgLLyBwZRSoGBDTkRwhCLVsxUSxCMuaZ8A4GAVcPByzngj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23EEZSc7SseoitVeZYmGyJsd1mQuceabwEdZojzBFDG8bL2BtGsWMLm7ry5ppsf3TypEwipVg3ii1FDQxLWNmbGt",
  "key1": "2NSV8ZNKhhyBMR97JoS5PbwNhiynQ9wcTjEqdRvP2w9ZgFg3d2iMbMrFbDn2Vms5TtrMxmdHtia5ASK5RgkR8Wj7",
  "key2": "5EvpaPDEur2ndMqDiooNPbsScHasxsjXTZVSfAS8wYLRzNyDHh7sGKb7CnnXhJeTbn64dodHrE5kTAWp3WPkZjJK",
  "key3": "zXmFsnc8zF1JdRC9Jaxedh4VZymUUiqekG9uheKL5RjRmY5X38VnWfxQohHEVvkcmFB3yovyrGN2b5Aw9P4xMyg",
  "key4": "5voiF3knyx7VX4PHpqhpde943KzW96hqS9ay1MEq1JPzFmUizCo3TC8fLzrF1ULyLnUXHVkvxJzGv1HANwAddCLb",
  "key5": "qnFCS2LcDv4BPMddyVHCD2BoeYnN4t1JqEpiuZSAJyDtWUYRhJ2XXUo3nRZHTFWA1DJocaDJtpULgoFdYfCRqDo",
  "key6": "25HqPnLCcJBnGJkdNYu6Tykmcs3K8E1FcEufheY1LG6Y2Q6TC6BT3wprT9n1AhttUJEFADVxKNZE2FqKdeyBh6d1",
  "key7": "4QuKxYNofb18Efxzz9HnZbpk75EnS9hfoUmnVXuzsmJYw3dRtkbkgjzdwf1hWRP2X8Nu5ZRMp7wKsCToUP6uiXv5",
  "key8": "5BEmJPQ85KJvfvjthJUzY9cK5FmDkLGswaR4LTLpQL9Uhr2Qe5Vcx6qCiVhxoDfjgXY8aYDYBxW48VSWwFNYGfbo",
  "key9": "4ifPbD7E1daHNnyceSh5yjphmzN1qBVJgXLGDjLWmmB1TaUeXHQmJoSQVjJ8QR2AkzeNQgJsNQzqMtcdUToer6xj",
  "key10": "5u5K3D3FtY1xb8onDooaDswGEBNsFPDKG5qSdtuo6V3gc2bFEoVqNARzCBVDNBf2arW1eNfwtDMaHLgczhcNn11",
  "key11": "2U4JYCakpSHgTg1r3S9NPWHVitbBdXnFkdRekx9KT4Zuvjn9ZHP5zssQvsZjriRmZp1kzGnj1R2AkUbsVZ6jkeLy",
  "key12": "43zMTb9NfLmrqZxipHsh4iq2UpVzQPvNpBjjeShL2VAzVXm9WkvCU6FCHdgFhGrEdoqp8FmGkogPvkZLHPCxFP6T",
  "key13": "5PDu9GLkvNpz5JUTHCatnxxmQwCabpX8nKwANb87fYVrTCUqi8y8TxEyQk3sk85TnDijGL5qPW9VSYVuMFhKVznE",
  "key14": "2DxGEZRHnENP8XiFyWmeDM4RRwXU1zEpab5QymWBo138aHZEXoYxN92bALnM2KooV6LnNwNRyp1NqE8MxBpDfYrP",
  "key15": "E1hZrnTCgsoVvGq8XciEeKjyrVaD6CHNv2pvvyyGnpGL9evVVHVWvmbn21BymythjB3kjNRaV8k6A1LUy3rnRQF",
  "key16": "4eGRny29mgveG6tNPVKLSp4x7S9txtdF4jCrJA7aETZN4DvsjMwNwpiE4gUiZAXGMVGR5zxU21dA5TSefBhC1DS6",
  "key17": "3tNtcsLpqF9bPWCzj6ejAXU7EEo9pTHNroPxvp1cQkBLC7FfsZvfGTnMvRDJW8ezWE7qU7PqTdpcJFh2a9GrThTY",
  "key18": "2MC8vJ9eMAQMDEE3YQQXp7KqdNKmJXZ1cyaEFYQB9myGFuGFoQmPoHLWWMLSA9mKdnF6YLMRbVVnqRj2oaeTMqb7",
  "key19": "5tnqFLwK8Fqp3fPsDkJk88Em3kgcpGDfo2iwFH1U25knkN96cdqLsAH9m5VAhQX9KY3CJraoYR6DW1hiyRG61dAJ",
  "key20": "2c9NVWHqZcz2oA7qrUiYUK1SzympuhRgDBkbWVPF4NVKK9ZAvMdGRkR2nWwnzAJVERVapV64HZvfRM2wLuxrHhok",
  "key21": "2d42uvEvfGwzzKqH8xCxESg2yYSKSTk5HqPxxYipXkeZ7q82bo5CxTvK8tDPKaVbMYHynQb1kXioTbY87hDtYFoF",
  "key22": "5ENKWWu3F2pJz2WktWeLEHCGdudzqnFNuo2Mpvj5tWqKJ3J1E36X9Xx2JTGMQx5rn4X7LLfujQPF354YwLfyxbNQ",
  "key23": "3vQLQyLoFqjYWiTGaLaP2LPGaFBoJJ2Mp1vvJZR5xnun2AbJmjX7oGBVtVowU12gHF6Z866snkwMY1W6Gcat2YSi",
  "key24": "4b9MhpPHVB1ebSCNqPsrdKVZ7P6JAqsT2bSSGEVDvXH4wSdAEV5XF2QBVdZfVrrjmTZei5qyvxT44fy4rcLntjUn",
  "key25": "7w5WGbo1QGgzuoonb9o8gbUnXRtnxGueYMhzs4T5dcu3Pk5FA2JEMvcSxcJ2eFqjTi41eb1J2JPn86PaxhTUfuL",
  "key26": "2jaVKhciWXkzpKJCsSCXPkCwQ6PphUNExT4npPRwpAxcTr6PRe9apRkFewBEtyubaJ8CcBuT5xM44bJWmPYAdifo",
  "key27": "61ab729rndLvVBW5nctVNTU2A8SuNCtrBVmfmYx8tRKvDy9gijtThFChiS3nXDTyfuKS2DQ5XenL5YK29kjj2ZMC",
  "key28": "4yjdMvM5FPYBnopLRVG3XTBNeGiUavoH3SpyYWPWoUgsDKV9fwTbGbtibn7ZB7PKiB5Jgh1WYFv5JmaNPspMgex2",
  "key29": "UQsfMg134xAiSeD9r2ja1YfzJnrFM6MZVv6QXLTMWc28yRirf5XFfjMEv9DhgmMb49A8W7XrMrxTKLKhcnbqwmS",
  "key30": "4i6LxbrKCRTWTPShveV3xvHuMmS6Gv6Pacnb9j7DBnM8udWuCMw7BtdAMAsekakY4Ephwxr452sGF34pKXukj5Gv",
  "key31": "64BkWENZSZzafQ5yLnCcnUE8km9cpoKpzzG5v2WTsFTerWSqJWH9naQT93xasqr1hbdod3YvfyHTqdd1J9QuicE",
  "key32": "mSkCU7AwajGs7ZiBdDJBENCFLDXgxXqa97AqybxickYGxfY28prLcPR1AJUGR99FjPPCsVavkgGsmPaSmzs3PGK",
  "key33": "3V7L5yTTgJemWus9CxwEqACLSTLj4nxYQtst8VtbJLUGCi18i93fMw2BtBwKxboUb8hbzK8ybBd8T9UJTPBpzrjd",
  "key34": "5eVVwG5hMuXv62FQzAgRWf7yyTFuswecprsMVvXFeXPKWfyHgtEHfpDuVRLPKNyeR9CpbUa19xffipMeVyX7Gw6W",
  "key35": "K5jNmb5YxRXZwyUz6Tkqf8QHsJ5od7ieqwRPQeyUF6yD564QsXH83DntkyLjytnqxT26XBaY88g4XMpgMfY9hFx",
  "key36": "5odFKFuyUMRnmXyuHrsFc5dx1dij3cFLyGk8dpX6AmLWyxdwz2T7MYaKCoRRgg6kpdRiYkXFSKx4JGhdPkhJ9sz2",
  "key37": "4pGCvTrDLmZNFB4h9CQoGhAk6pqr2ACf4zo5vEmDkLidpgzeGe7K3UHHSzcxhvRroQPLMtX7shSqPvY7S8rjT5HA",
  "key38": "x9nFP8sYocLPvrCUkkupBFMtXwJBpttXkC5Kmg6CivMQx53tLbCijdr54kCDbFCz9CwMnR6xvT9yw3xBuoDuvek",
  "key39": "24FbuVDYtBxmMBoisKi84pwfyryzu93ZHTPtSaVbVJbULf8rAnRqtu9h9djfAtbDFnVkvosWWq2LiBdPQt4X4WVM",
  "key40": "4XYSasDKZU3JouwQfqFQRKcp3Uks51wRqXZTYuLsKP2vHg2Ch1gR15H6yZeK6zrTmVbgBiCzwvAR7mBuYHtke7Xo"
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
