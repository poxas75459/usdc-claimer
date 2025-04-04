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
    "oXGTUzMbet1CnTLxBhSaso9QZRhTqQ2coyncNZ51qJW77fMqUX5yaU3jyJxWedqKkyWsdYaTnD2QinSDa92621q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "349kBnj5f7VFLDuUB6YfEF5ZV9Xw7GvB1Gew8Dgi5ARk2hZFVprPiKCvuS34CG9LX1rfVRqHY48ga6fhvDAXMdjH",
  "key1": "2u28kxV1SQTT1jACrzR77RCimAdsv9qTNXYP198515ZEcQ8Z2o82ZSQDruEcJZB16iYv3JtYfUHEMmrykxewbHUE",
  "key2": "35xyMwe7LB69FyQUjgRiaPoJFQKtypjWeQmZqtTPjScLiWgpqpfcnTS7uwCKiLk3UbVvYKg1GhNXkMaZSVz6aktX",
  "key3": "VtquuzbPBQVZZp2JZBpvEniVVAouNaoQniWPLXpZfbFR36eaayLfohE7jevWT5d26rkoVLmoznoUnfpf2ziiUVc",
  "key4": "4oy573C9NDJSog9KbPhmCpSkexXnuPDDxjhFZcAUWM6jcwbA2TRvCLANUxGyRsx28xiUeZgKCdoxF6NFww8XoAfz",
  "key5": "3t5iXijhnmBJcbZtogHdzG9CHShw5UGoKTvD4MssiSc52tKjiALPMu4Xdm5X7tZUGZUW42FsF9CUY1Pxkf5S3txK",
  "key6": "3UaebJZJzyUNDzJvPazBvtQ99iawx33FQyBr8FdVGWByFMXBY5q8d2f2JyqqKxBrA2A6X6TV77rXXrVyiWHJVFTN",
  "key7": "XStGMYX6bZaSAypYrBuxiwR7QLtQK89eedsdC2apgS8EXRjedGoQjEbrQwUrmQAhjQjVfFqjSQpki7eisErLvBw",
  "key8": "3GkwSEwpFp7r2PoHQynsokbsdmhP6RsyDagmW7RwytmrcJNYgK8CNkx2sHZQc1Zs8bohHAvz7Rno9tP5fB2cgAkg",
  "key9": "4mGmuBP1VmMJYX1ZWsmeYsszCQiQiFn5JRpQbzHfQ6Lwn1EYKFhKFqY5rpNeLhkQF5X8kLdQja7owcM4igU39btq",
  "key10": "QPqtnkCRubCVKd2r48YgMp3c9FS5u5BqwjYZBNtS2fCVEee12r5r8Vy9VGy4sG5tT1rhkanui4n1GzamwRGuHNa",
  "key11": "2wTefgkmzf8Q5cc3jUy5Ni2iw6dmMh1bgZt8Y7quYuMA2aqvP575B9b8SJxgsiyUTbVNMCnChjGpfhvNJAjVCygB",
  "key12": "5bgaDwwK9G9QBduaSwibcDiPzMTfEECau85grLwDdRhbwXfKYqFb8sZAJFGEM9B3W7kJy1GFMAdEtd391ns3d3Ra",
  "key13": "8bVKLyBJXaGxKfzytRhftGMjWjyaB6gxLKUYd8vE2RNuHD4E3NXJBeXpJVGNFHdsLevRyuAhPscXqboswBn1QJS",
  "key14": "yzmJ9bHP8tXQx9zA3s8gkyzuyFZaMSQg4VZ3qepPUe61gGhRBTUVXyDxFY3kL88mxSdX5AQyqbnUXMFo2YMURs7",
  "key15": "UYfXqek9qrh4X6gfySKfXh9f4meWQRt3XMPwaZKuFrmH4FJ7moh1oqFjBStKrXUUWY38U7vZFdF6ZTPDZ9Zi2YN",
  "key16": "3zPu8nvbaCPZZHHhEZMvbfGZ6k6TtnuqiFVTrUoJ2ybgZHiqnMd4MgKJMhodoHGXyk1EHR7CFnx3DKCHZwLsr9ka",
  "key17": "2wXxVKbRaWMGfgfWsPReERFzuw2rEEkW78dU5fe1yF3QdP9fnQRLYf2eckjHGArBycx3F9qyrucFSXgJboCyjr9Q",
  "key18": "2SRuZ89SaAdGFKSXULRBnhuqUhMaueLmYFjNmiV4UpvYGNKAnNPc6fW1bzhCpoLVCkLiZxWUp13dVc4ELGCcVqgq",
  "key19": "66B9scTSd428LvTgX61oMiFac8ZEuaUMUc3ERzqP7zbajK6G2pY73SvfwohEmAzfAQEPUJdyTaw7qsPe1qfSRB7p",
  "key20": "5MU2Ci6LzCGKwscytHPHzkhL3UDiFg3epFQm5XPxNkRmdpTPuK93s2CGmwsKUoQh6v9Ei9jCs9uM2CPFQK6V2YL9",
  "key21": "5sC3yMoBYDf1ZZGS46rFTdUH3Y13VHN5qDetLuwKGeNhDD4UWXbUf5uhPpbwDwTAKqSiXa74beLK44P2UfyuVVcL",
  "key22": "4dytcRjQy1ckG7RL8QhH6vyW8qkMVWkJfsEEB7zrpxrSNZYGMQqMYnS9xDm1e6zj3wCu4qhjxRHsmacLjuvJjAuS",
  "key23": "T3d9joyUDFqgWeZPkaa3DN4FgcvCaHeZMgTRNz83MBqk559rEqPbL3fAgRs8nZbyJx86xfLLmz7DJH17cArQgzY",
  "key24": "29z9QasCKCu3p28nzHfJ3KYFaHPnmMR7DNU4fRUwofh2Cn5NhAW6X4mjeQiszN391Ao9avME1ZR56Dufv1QUyiQC",
  "key25": "64v1MuHxxYMdu6rRRy2pLyc6o6Xx5WnWpzWBR2NczgLjsQfknjazAM3dV5ECRtZdBvSnFVB5Hg8BefkdKtnK8fGy",
  "key26": "9NUBWJ6wa9ryYhpp2mAG8pLJKYuab3CzHxMAEaVXs6RC5BZpA1wPxMUi8yyfGC7NMpSDMrAVJa1wWh1i96BirDX",
  "key27": "427z4nUfXeCxHNi6MM9UgZ1pqadquzSwwyxTF4Zhdm8N88WX9kZuwxcYo9WBmc5Arm4YW99oMfW8E6DYKQRQ3H3a",
  "key28": "2vgCP9CMpWrwrTBqsVkkqJAkbBrq1mgMZuk48TaBrLasm8Nh7H4H2DNH1Cmzjmid1Q6tNsKZz32DSquymUfyZAqP",
  "key29": "2n7QpidHM7WP3TobXdNh1fLJfxFaa9BiVRNe7wb54FHVeqxcRPSRLspJZjAuL2RdoqCoiRrCkqR3FRpjyeoeDUMz",
  "key30": "3LLWGi5dJ3nn8ojL5ZT2A14wSNtJvmrKNLcvjjFbdAd1jLydGLo9atQxhRC6un8iYNhrfVcgcG9s3enYgkzz9dP6",
  "key31": "2s7tURYuqzK9vHeZ2Wuhs8Wt3UNX8p9pMKDEW8rTJsG18FckgXzy1SHdH2oEU1J2yLoJCs1vXNLgu9tzfz8pSjYd",
  "key32": "BUh4q15Np7mHvZPUqxawPvg65Jfb7vz8nDLw5Q86g3qEub5NtoZpjp5pgh4Hf4G2LXFnxeLVStpj5ifd64MUCyZ",
  "key33": "2QuZ43ApWvBLk8wWqpuBeGZCVzS2bBccnRJCB4V2MYn5RhZh7HDm8Fq3MFGjHDWp6twhiD5B1sMUTYm9LX9HHFrU",
  "key34": "31qEgnt91tpiwHjTeg2JrUykFeY5QcYs1RxBCmXAd9t48qTKujgTYW4CPzo9NkcU2MTSJtRXS4X2d2GUJtnFg5Pv",
  "key35": "HTaj3erRigL4E3Q56szpA8ohMEzFuHpW3Wh2YM265nzjH9wcLaLvPcWvEStEmthphMdEjDAmid4XMLw4QRqt97J",
  "key36": "mLDza8EtYGS1Lj5vJvTLgAQE2uwD3PkDcxju1SiZiDmxMuQz9NL3n38oPedEje538WDweM5mR59axb6upbRFTaj",
  "key37": "5f9yXEtqfvxuUkvQQ8oBFXrhhw3hMVFtmh8Z6He7WrFJttmMsDsykA3ruc5rQpdpEWc1udxpGWpgupWTcmue67TM",
  "key38": "2SBqZ2qUavovx5DDCKirXWtQjq6HTBgwLiwxW7C4zZ2sbxCRStuyYtwp2eyjKWAmbrJruzEoi6JyVvrgiS457rLK",
  "key39": "3R3gBRBwwFaaZYZUMWd83efFZc1XHxnCeeMyRnuprDXp1Rh1KrwWxdE7LcEjUyHpJkSpEy5QBDDjeGVBwT2oVjvy",
  "key40": "25FcudNzG2D4borfjUGVorqdTfmRL1qFrFLCwQ57rygu2wSznKhDB1uDeBVTxjMW6psQvfzw2jVvjE6mPVEfhezW",
  "key41": "4sJz4Ji98ird6pwqHqvg6bUEXdoiJ4exGYsWu9w3k8cTwqmDDH8vT3W1xBDD7t1PEW3FXjPVQsemDKmFxz7mc9hv",
  "key42": "3De9e2AH1aFXu7sAJuAjkoYupMHReBKMvYn4znCvnt6BGhGF3TeShCsono3BwSpGeTmpszKTozF3kFBKDDEZz7Er",
  "key43": "5wkFUhdbdjTo3m1Bb1GaTsf43v67YBESJpNZ4xMxWC5ufciXoE8nTFXA78W8kGkFHvWFLt9XaXeLvacVBtjeJ1QD",
  "key44": "3nLaXXUy6mNHnWwhUTpAfiR2zPdE77D2J6rzAiLUjNVDenBbnkfVs8wyYzVmNc1f464DGrUAhhjcKxCncKPjibvj"
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
