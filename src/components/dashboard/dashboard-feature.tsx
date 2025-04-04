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
    "3on1TCSZieYkdb35df496oHgbaY8ciMcTvs5GpWTppPRicyzTDT5GeTZ5JY4HrUirnqLC7oT7769VL4WpHiFEmWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AHUhvJcesUaQwUtVoHqwoVZ6xo2dtQx5oJuTzC2R8rQfqNR6YMeNLXHihgNSbcRfcXe6168KKJmzcnmmn3F6GdF",
  "key1": "5sDaXYg5Jy8hQUYvqjBNKgK771hdA4c4AKS8wWuprz6dpXjgVGNMJwDm6DmZFkSSRr6fnCH9henyuPGqDeuf3d6H",
  "key2": "46FFfZ9zL9F3UrBCuYUW3cPjTtjc2LDnZUemkmGPmZvQMGSWVFiWS9aKMZ2NTZNC7DJPmLt13NeFrQQsacqsSvy",
  "key3": "2nA8xjTLA36CYiSjQ6B2aikWrs3zr3uaRN8inDCscEpfdoXP3cqQ8VeqBZyfCyreWtXaNnwJPtScdQwMqgr7FN94",
  "key4": "2pCFuBinFNFxvbv8Ha5qsWm6DhbGgTsubEpa9BMNcnbKkT5YxaNbmpod3TifMVxsQNFqzB3kid94cDRUerunPpJp",
  "key5": "3tL3qFiJZ2frCJ2WNFTaaiK7e6fogbGAFYDUeamvQ5fB3JMp95URfd3WcTG2asrZx5tq7UYNPMFpncHnAqtv4ueC",
  "key6": "4EwD5kQmQKMcy85Acc1yfw95FuLnydD6pSvjrr35BpPYsfBbjW6Nci7QGz9T8ngPAiXtvRwdaYQRkSt313GuoTrZ",
  "key7": "26WeakpUJnv1G9oXtHRBUzSqEQBWwM2QFoS9trf2efwcmx6iDHxUTJvPXNmuRpP36xZXTm6282cFEFQ2jbLS43gz",
  "key8": "D5PLVjbQdmNbDAe5oh7LX1qRvWNHGckBArxBH7SbfoHsh6dsNV7vBW6yPqvajBkTtDsSzFGct3z2tkAX2hJZ4eA",
  "key9": "4hQeV47p8MnpRNCR3fDzHkrVt6NC13dkJWnFFSLjcWpcPzhEuK3TpWNaYW1egSkjB7y77Z35SWhR4N4jx1UiTDxY",
  "key10": "3h6tEtoz3R8vvBevERR2ZHHDoN4WdzX11HFHjHyUrzCMkS2gUaF1pm7PeWYaN57zLopKpVBxDEMaAmU6kbFpgDzX",
  "key11": "3pijwGZ3EvVHvn6LuN8xgsBA8Ki51t325jZdwufjpCHt1ZaWBKaf1LqVTchrMpkpEqzMcDbrRHNysPZhMDUZ8arT",
  "key12": "5nbTp2BfYkUxpG7h2XEXUrUpbXju91sBMxLqBZVzEDVj1YCaGSyqqchyhqSkHZfsB9Ussp1XV3f8n7PzmMqbmmjf",
  "key13": "35CxRV2jfh4os8ddGvsmfCZPd1uBHgZTo54qYAwCCphsC6HD5zGr9bzACC3znjFo64GvSpkaTvnTGTgUjehkTCTH",
  "key14": "5kQ415jTQdLPwJciTq2zFFSXgVMv8DBKqzNHXk3dUu2SUaNyEwZJExGq4FcRfk29zwpA8NSw4gL6W7LEb1ChcZnZ",
  "key15": "5uCi1Ps9FCJskqKJKwJonpexzviGXpWWdoaWz7UFvbFukahDNKxNSHaV9uBhs62j4kiehVWPKFq4G452e2ZtTkPy",
  "key16": "SUD2KkHWTGGfZ4YHRGNu9jvmek5CD8FFv1GDVvTjXGU2QrUcG7oL2XSEsFJ2ZnboXHcaCd5xe4EbaGvbM3MaCi5",
  "key17": "nkZWif4JUyyTNxHV3VEthraf3TtJ7hhTsJQHp8RibpQLMDumYJLZCX2ZmpUNuJoNAM6aSDUQJPUECX9o6NQsggf",
  "key18": "489nejF2DYwAMk9uQA3is3NAi8kR3pdAeakrZGG4Ayiji2WYCNdezx1mrNt95o1E1R81cjk5WT83wefRwr17qJYf",
  "key19": "4PcfjZYoqJx5E8RWehQsnauNjNz1a4cYc3uu2LnAVQ63uRXWAkLbMPtdmVY9W295v2BR1CjPKHXuKyBpPQj4ihR2",
  "key20": "52StzbUza9DoDfLMW6Jf2qsaAJEen8MahjDJYnhiWAUij8hn9YAWW6kfieYZJ9E57o6quNkRtQ3K79Nj3z46tzRe",
  "key21": "5SzG2qMaZcqQrZy9AZteJVjBT9Djp2V4DS2Et268ahh2wvZZrkAzL1peRiPdU8HvQ5KcarEwMg7V7YVvYpsARLGf",
  "key22": "5LXUnsnB5LtcjUdu6XPL3Rp8qk3bodiipXekEtQirGZ5MYoTZDnP8ELj9pEZosLFohVWwAxJPt8PmsDxydYkgkfJ",
  "key23": "2CmMRMRTW3sncE6eVFvme7XDptm1raNo6yDK2wGS2wVZ5p5W9DdsPeRkAgx1irxKob2NPWf3JdHP5EUU8xnjuC6S",
  "key24": "5bGJUABZR6Mbj5kXua11TXqBeruLt4A2WmaTBVx9KRENU9YW6dED9wYMzUvbd61dLV9e9469msb82nYoZibS1Yz4",
  "key25": "FFapmNDke5Q1YEvmzssW8tsauZgoEFi9nSFd9dwUUffxmAKacw2DVScEgNnwXVjRnxT3TQRdJcs29whHZQjZ4JN",
  "key26": "4VH6wjYeBPFUMU9QjofXR2zVCKy5u4AHndx3o1KtsfoEmcPHMkhJBw5KaYXkiubYMTAKFefCnok5W34MBszfEjUc",
  "key27": "3A767npfukQPkwfZFrN3tQpbt6vfYQn4CXztKCYbxhDV5TXKhvqbSesD75tp1tzbGSG2kiJLd6362qLRTcc5HgcG",
  "key28": "3s5PzMwSr2S7dbjFh7nVKmx3jSXWt7qqfAvr9uZDQiaTYMem3Dh5Xqf5g1K8UeeyvwFAYoZMMLX7d3f5JA9AgedC",
  "key29": "TFTSffirawkb76eoBqSUNr9bVTUz2NrNmFZf569ugRSr5YYyozDu5rnyDhf6UB1axUxc39NgETWy7xbsBamgyjA",
  "key30": "3VYsAznczojLuHx4EG29GF8z1BLa117uGJb2Z2gQXaDEqQP8Frnn45YCCBgRi99h1deAKic4jcfcukVhRBX7YgyK",
  "key31": "237h9NwXx51gL3V5VLDii2pCVTAifDrPTRZ66pLAQH7sCz47YAu7bZRLxgAAM527j5egzfxhDycRAgKXJM3JtcNS",
  "key32": "2F2MewXkSZ3ngo5BzchE8Xz5h6aAHhTSEvow9uEz73QYcyAM7hyyq8g4o3sz52eXo5NbXVy487LkWeARwU62LnXH",
  "key33": "2CdH3ZpFntr8Q4hqj2GYME9LyDR6Y8pvTmPTtn5fYrFF8V9fvspmspJzr6AdDuq2vW6df2TZTLf6KbWGNyR6Wbw5",
  "key34": "3rmDszmTFiEbpaDJF7uwb7DifxcUaFW21xQKaU6G4rDjRHmXjeHJhnkDYntgsWRk2LmMmsHmx6PpyocSDM4xHMGg"
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
