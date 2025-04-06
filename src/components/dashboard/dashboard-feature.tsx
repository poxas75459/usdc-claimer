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
    "3FRsWaKNCcg1Q9e6yUGY2VNj7egLeWutotmPZGc3LWLNwceJ1P5WDK5p1aJMgEAsAjyYRnqWwaWxFAUXiwPLFZqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XGyAUdbyZLKxd4CLbxNy2NuWeQSNs8CPGxxHJLv67sbFrETM9f3o1rkQQx1FUqpz83KiibomMNmEbtbovAUv5Tz",
  "key1": "4mrRJfG87kso9VMgrWN5pyYVQczbbvnTw2duicNBH1XKDhxf69WLqUxeFLikwxSxaoEN7ZMPWMrx8UerzCzCYw8d",
  "key2": "5e5DU9d9RpTmHUmGeMJP3uSqHBGyvN31pyFJSL5H2AHFqd9HBAt84bX16TpdN1jxrGM8ywzm4WEbSfTjADqWcTG8",
  "key3": "5qnNCbtoBufpcPd3JoWBidaycEmhbbT36NHpH3wbqzm3D6kXpFTLMbZxYBenLmZRT34JyHn3LZrNTuL4CmM4kxVo",
  "key4": "5TxzT68fgb97Gtjx6qRV1RQvXYB477aXhpQ4gYMoh6FqJF4vrJLND7vY5UyxVru9kdWzkCmKARYLNCmVgVvL79Hs",
  "key5": "3gpmf1WdtNYbHpk2EsM9MvDzfKMFZn2xfy8piLV7L6vberPCTtSmD7xVQHqiF1sxnC8phX85fnk8TEupgxrEH5wM",
  "key6": "37ApWHcE1fNUqkCPhzPJNqwFL8P2aMwwp62HZCvoe7iZpGVV7UUqTxtkEbFTAZMMXynYb34A7Q1DNMzBsEsPQ1UD",
  "key7": "4ThUJHPRK4oXnaaFrnavBRmfTLV1uVbVqPHMsGVhu11EsR2fQpNExTpuEXz2i5ELMmTjT2XCTCXWk7bS7edd561Z",
  "key8": "4wqAgm7tLReeJMvGMiLFoHzYhp49wbxLyeN5ff1e5Ds3fsWUtfDh7yES6drkJ6RYcwoNqSvXGUSfAMNLjhzcdcqg",
  "key9": "4Phb26nwVH5SBeAkdsMSwNbTJiDhSamRoQ6Z8dH7XdRVZkTYKcFUgL8dK7e1X9dnkRtKQoiEJkfk6YpJ74bgmVsP",
  "key10": "2SpynbY6YemEuZw3L9FNPDcqt8Su1VpzZR3c1RjP7Mxx9K7ZrhPi2Q81Eye3VHwJFmz7Uxwq43qn7VzosHyfvh7V",
  "key11": "43FsH4F29iKK9H1ZiVAHb41Jff9XepTWYMHokKryCfbwTe9WADeDQcNfoHxA3aeHEVtopV4J6w2wmsFxRCD3ywWy",
  "key12": "2Ghjgw2v2kXRc26TAkTFxMEjbWsXLi49oAvDyFcsaQ9oqtfHRbWgmSkqd4mmni4Z7M9guBAn6ApzzbvZEqeW2tu7",
  "key13": "4HW78W6eXvdbCoShaVMQsCpwrZyRBgD7QNkaszSSPjoeF1MuPjmCTeGyTEjST1aUdqX8hGranFFJXxMMse9BCQKT",
  "key14": "XKPPh2MyNPFWRbkzbmwN5LUccFb4j6KLa1MMfDya2KJcu81BLFhbQH17XVBobSQfdDbf5gJo8AqbYdywfLWpetC",
  "key15": "4EGsQj8Hqpi46uEbDHT6K4gifwWDtjRKtpsXudhQBB4aMfy8MRzv6UJo3jyRJSRoi74SWUrdoEmkRJMsq6h86EVF",
  "key16": "25aipRaMu58io72hLkGYuoT4rnX8s3ZBBygBjQfS6UgNzWWKRnyRrBiT1G3J21y8tQBeevcWwihvJoZn4wXsbZss",
  "key17": "pPkrbsHxanzxHR2kYNckYLsm4xAUXzdj4yeakt8nbrfNdw1Gn4LsJMViGZmRfnsFrJAfRe9NWjzKBqjQC6yGMQG",
  "key18": "e93JYkYrU8yjRZPS2gacqSENmCDhkU61X28JWhLGbCDCsQn6qoZqjoAYmNsZz6AJYc8bVL2JLxgS18dZpB5fjuR",
  "key19": "fzykopvpi39sA3DAngdo2QU9jWSeGX15QAzKhJcQaPmzAL52noJENr11HRYZk6hYPy3HVYY2eyuDfceiEo3NZ2V",
  "key20": "38Gi61wyhN3JdtcoHMSzwYcaCBCpgdTurYbHRUUqDb6fWBcNp3JVpDyxjooXhv4qCWfT6CyozQfccvNCjGYathjr",
  "key21": "pzv6JJvCDHn4gEySCWTYVxSVNCPEYcv5J6Ew97sruTEvogGQRxUhk2isubpVUo37o4hfoZtJtphAXK88cG3w35x",
  "key22": "2NKbu75cdBmqAnTbRDfuzxHtbcHbm8igFTXJAJv1mennQAkPscxUnHDhCewwuu8nphFvB8iGeHwBVQRbbwjxEXoK",
  "key23": "5EsTvWtLAbHMdSm3cpMGuu7bVkkvoM2aL4Zecx3ar3pb9pwZJDteYxgk8TJ4YKNtTTinWLrRTKr9Nx5X3YssC4Tx",
  "key24": "2xzFkzbi17YBMpRQC9ZcEVLUZEtmGAbgEertvGMR6PvETQWAaHS1L4q1ZwmDjWJwidLdYC6K7LA6TncVNjndn6gr",
  "key25": "3pkVW3axnmvUJooUL4AYNbUcooA9fLm7L1mabMotdDbVXvi9YhFKe8PzcAqxGV5GiJjmwXVjkhy5ZDyPikR2msyQ",
  "key26": "4RsMxsHeXYYMe5JJR1BdrjyTgHSpySoGBmAsq8M59HLst1rKavZjNihotoVaCvcYFcyfUQsppaAYgW44TGRtc1AB",
  "key27": "u7zJrp21iodhAxuYFWZRjBPkor5tSZ1DeTwdjqC1qKZuWSqx2bEjinaBa2xcPgmiAtPdyc9y8C5i2x2VXQvXNET",
  "key28": "PYKqgHTFsV4eieCgrNoLZqKTZG9Uy7DXTcLJik4koEopYZTx1352MvEmDwgsdmbA2AFuxme753RjZ7D8oUdJLyZ",
  "key29": "2UjWUUob1jGggFUBYNVEoa6FvE8qoCk6gb3GM8AFa1Ch18x1M5C6jywAYqAd9yFwN8tscotRaVGFVVwg7VXbeS46",
  "key30": "3fbDqSFB1W8DG25yy2eA58Fa2BajEW7dLxnHNT7ctq9mXbHN88cyFoXKoJuY5ffBC1UqhoLHu22A1r12N1sPKVcE",
  "key31": "2MbBJS1WsKud6UEM5NnaCinAEqTzXhqDXZ7zsY1ke911axsLTwpxw6ucxM3P5xzr61tALuviR7F6puyE4e8u7Aqk",
  "key32": "4NZao16cq5MZ7hMJ5JTpdvxsoQ2HMvjDdma54td9dHqaRgxghnsXX5iYMmmx6gzmupKJA9LKqbj2SexMVYgKSSk3",
  "key33": "4cikVmfTWUP54DoCpuhZTvyvFBZ1HfJVM4Q3GYHnYEziRxaC19Ady1mChNSwqmnJvRUEyQqXeawuAt7SEfQHVhco",
  "key34": "27ByG5f97B2gv9bWWfqxZGiEix4etWEZk32qaeX6AfBsXWccsdwy6YV6FCu8vGUkhgED74y2Frad1Bk29Em1ujc1",
  "key35": "3PviMAdXQXUt6t9kU8zdjc5t39efcJqPgaRnAzjTejRNVxwqh2aCB61xDAuefHbDWPPUkycAHPjJn7NK17F3CSLE",
  "key36": "3qHVWuwDAdiX5CoYkEXzPmap1oxZhRY7obdzAyJDvWvTfmWpo1FjUTJgpSoMNiNbRsRoavGxovNc7KinjxFchY4k"
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
