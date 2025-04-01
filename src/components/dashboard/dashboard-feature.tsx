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
    "3bNR6EJ44DRRuQViKLPajtU4NFnWAeEvmP7jbSeKXPDbFURx6wvP5fiP1HHc865uFTDnyGsJK8vyq3sQjS57Q9RC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yF8JXu7dqtGiGjMWGFkHT59G2WGxiDH3Ygem2vy1MX7rHYrfVSRS3X2bjNPjbvXNrAgZNei2P2cjU5DMExxvAw",
  "key1": "42aWazrQaXEehvoU4aLVoo1qG88cvAzS2arWxyCxv1yS3RsTkUV9SFkmtddkEsWPzjFTdSrn23Mi9LG19nCP5hK1",
  "key2": "2pJQNAx6357oBBYhCtW8aj8K9bCMqguocW8QgHbUAX74Mj4iHTL8TLaXQmJZUXEGLHnotua8pwyLqdbC1rxMccY9",
  "key3": "4xujpa621oD83rkN3CwVhn73VKARRn7nT5nRwC8eX5YnzqM4kEUZQZMWfytAKCHWbzPQ8qj4zcrbPiMfDwbqDTkw",
  "key4": "67LggkHXWghqEErxXyxvnQxwV3LZYtKp7piMrQubo6EiuhZvR6wBXyi8nssR9M7Q5ztWwVDVWeHsZLGoxQPYQFnm",
  "key5": "3aEYz8S4Kk1QJnyKFT6gb63GvW3zw5a6SKDwQVjDcyyAvqAN26eM5MtsKSfwDYopocNxtpVz58BL968YiL4Goitc",
  "key6": "4Bg3xJpkC9rKGg2JbacSMvGjqvaznnCRxjqDL6LhaFrh9tVohg2pMNzZbbCVd4cC49BBqcDykym8iDkRCo61hMnZ",
  "key7": "4oKeSmEKGWoBwYw2qjubfU2Hfj9V8R5Np48VChm2KoomrUaZPXAW6jTFDmKD2fHWoetesgyCUyNKT3nwQHAtqFjb",
  "key8": "2xh1WS8ozm2rjpbqU3v5axCtW36Ahitr3tGLeC6M9kjpfC9CkujgWumqxy3XxZBHpUzyNrbNB65VVLc76hqEuf9v",
  "key9": "42q7PoWwzcjaHsfJjGBeTjJBg2zMzT4WW5iGXTz9R2kn6rEdh7dxw8wGqLZJgoZA81AuipTZiUiEw3EcKDGNs8JH",
  "key10": "8pJJN9Ai8kg4E4B9822EdoPgs4jdSnPnP2VrvzXZjCFpe8vrTUjiFgLJFbsgiU2YXCVL61EBqhHifFSc51PJmoh",
  "key11": "4Hvz7H4EV31LTEocXTgk8Hb7JQPN5dL6CBoViuPyVgVqy3nGXy19gg2P5Gm61cGgJAi12cFp37epdUEVoGLbFbwa",
  "key12": "32mVcKqxLv2ykjeEffoyLJ8qhS9Y7VNvRfBBLh8Lbh9nAfuX7hybWFdJjXMiD7cnhxiG9F4DFH9f3D52F34He4sa",
  "key13": "2jumrGDtHCGeLBQCfr3S439bsJjZDcUbK91vNi8fywgrZCvhMdC73Zf82arw7XHmmRn4gAv7VNnagTJCNZLiuMC9",
  "key14": "2hzeeoa6FReDioJCWGYJiLcTnR9novr1kCxFENGEAXhPai78HDEURPPwd1Jomj1PuJ53fdt9uoyngKVmVRfHs3tR",
  "key15": "61J5G9bRJmddGs684fQLR52uYTknZVveXTJCeYzgghiTriMnEJ1grzWExLrUwZMzZwoqYBonh7UwDf4BhemePMFw",
  "key16": "g31jwzXv67edxM5fizaYfkvUCVyiPfB3A9RSyS15nCYRnXJAX7opJTyymxdqsaKiJPpJSjCz25KVxZCCXBDhBgW",
  "key17": "4vSixkZSM7eDind6mAN5wE3JoPvSTHoGQpWZ6ZEgMUcJ6uHDXjgyPwDUjP69fmztpeFX9F7Ya1xSign9H8rWRTK7",
  "key18": "5A8SxjPJ3qrperWZ8DuZywFix7SACXsRpCHw8CdMFrSP1HFJ1H71rPUWJAC1XgziWwgjeAKjjoh33EoG7ZKjizj1",
  "key19": "2B7B2U39BA8bPLkAjpfCH4LCKkfTfiomSKa3tRWjzXTWm8P3hrFzh7RhtRdvk5B8k8SWksU5meo7LhbJV2wQtYJg",
  "key20": "SBTRQyfE8c2sSZvJRSmFePYRnznG4MsntotF7FRzJcD4nFJ3tyxh3hswTT9FoSjggiQzPoFKuKvspy7LYRFwAXT",
  "key21": "2uiU1KBvaXvsKma5k5tNNJq5N3qyAoax1wnia3GAXiFswmhgnKJW2JqTEk3GpZ5bMb4otNgxUb6yZkwCejQ9JPN9",
  "key22": "Ftnmq1f2ThW8LGJRab6rFLKbQ8LD79iK66AYBKsUa7VZ3iiDGYfXvvZBkNt6F36sceG8EUuc1W1kmznjHzp6iGQ",
  "key23": "3hdXR9ga7pHytx14e8R8zBRqH92uNBEUAnyt2i54pfLsKfuvpz9TiVZAWD2jgeyEFrPgW84UAjr7KrTVmqbHTzwE",
  "key24": "4Mw1vZrSv4Edx95AKPT41paLpCWMfxpFESJ62fzB8Fwy13jvVPj4zEg7yGXrDLMM9vs4UJE12P8YqE5uqCeoyRaj",
  "key25": "eU6Ah8gv9pAow9zJgHVVsfmk5eQDudwu9rqk6fpVS6xWb8Fq6BWFghemKw4DoTXxurM3safKea8y4ePDtEvWqto",
  "key26": "fTET9UNcr7SAF6bhkr4aXTdFqVdWaT9672L6XUnmyomBH9f973QdgC9rrnrYJMJhtDNHxRTXhLrSQ26RcTW3kaZ",
  "key27": "55FH4U5kukZ7sPwVuTQCsSrcrc7BNXSgAyacke2JhDTCFpfGctyXRrNe6t6PnJEPYu8AdUTNGSdjhM7rm8RbhZLU",
  "key28": "ie4njE584MRDjDGBPU1t9Bmfiz3S5hR7zZsR12Y25d1YcZe8KDfo4CYWdELCxGfWT1P4ucm9zKwLozerXb8JJb1",
  "key29": "7qkyD39SYmEeYBPZvMQeoJgaLPgyYunSkB3gNPRo81GDG35dLPELiph2VgfUTHHRoUeHrozansEQffxiwF8FjtT",
  "key30": "3eZ2okZ78WJnKa1DpSVnjSfcFPbzKYdFMukrqLfez7sTSWZzU7Muy9bnicupxtt2naxL8QLPNEsigTW9rDFkzJJb",
  "key31": "5gHMuNcVtvCyz84dPAKFRQwC4RUNGEdYKunZUdECgTLoaNzReza6CSAmGVjGEn7WJuEquKv8eCDrv79Rf33gSit9",
  "key32": "4rugwJqW2rVnr9Y1BfXJzBnoNGFWX2v2pac2tPfyU52kuL611WqDumTb9F199t1UFiPihEZ1cd5cRAMKF5CFqeB2",
  "key33": "33gQX3egWzZamyycvYi2r2iGX5PBPcLECCkQ9wHdwjQjyjEfJAs678JpvUPdZvZBBemrGESpEL1nZNtjZZgiToNM",
  "key34": "5mMPurgG4aW16jyxXGCn3fPHG5urvmnSqbCFZUz57LtUN2gYDuzwd9FVJdhJvfXaAATedUpFdPoChpPnJLbCkBk3",
  "key35": "FCMe9nb3jHp33owck7u4zuP7ZpwLr8wE3rvejAE19HYPqEa4UfD4vL6PcWpCCQ4Un9h4KSdEkBhCTVEW8DDgaCa",
  "key36": "5jxjCYaQeyNDQ7hu6HSHbuyWvkmJg4LtJQkb1dGeDUeHxWsaWrhmLxyVQaGAreb484XSpFmfh85ueczEDNWJBgq8",
  "key37": "63FgnwYUc54JztxWsufcyXn6dxW6btzvQNV5yBGLA6MLW2euRC9aCTYX7qBGoGxXT3YH8KaVqYnY7zCaRteEG46U",
  "key38": "D96mcEhHvFd6MBRhbBFmEVD7KKXutH7v9ASTKYxuHh9s7GqG3AoczDcrsarDN7jWMjppPygf2xzFwSEUetCCibC",
  "key39": "5N4EnEMyBorRYQ4s3EzswgVmW4ozDmTdBBkUbLm1JmpLSRGYUpHxpAeJieFHvP6qAL6PVBDWiJVJRfTFaccQdznW",
  "key40": "2PGhuqofcQauxQuXFKGkGZdVVKUX4bdmpVLznYqi72DS8Zm9Qt56qR7c8MtAZiag1xnvLRFR9VLCpg28k2vGMWx6",
  "key41": "3GG3JoVkaHEP1Wb5v3WjhN61fySKb36WZiCJmH9FRwAnedkqZTZ7dZj7GEQZBEMub6iNeHVdBCRg335z7478GGPJ",
  "key42": "5v4CzrFTmXRnjudpykMugahfvRHA8fLic7VKTKZEN9yHnFeW5ZnMeVFyn7WBMBYx6q4153xApKhd895GmrUzF4kQ",
  "key43": "43JZka7Cy89M5ZTxZaLy3Zrm23iSiePktdrhmaoQ7y27w1Dy9TvXAvYGJsnDobNrt4NFDPYXxAYm8nZbrLNM5tim",
  "key44": "3cjp9E2yNp17DUCengFC5ajBWP3yo1QjNRMAa1oMwggWPdhXBbKQwSCiQLrvsCe9iporAt7A57praXsYuLwtdwjo"
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
