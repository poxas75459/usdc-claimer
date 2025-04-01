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
    "2GECUbhXLHg9eYEdrdBv918gDsvhqq6NS5YsWZJeGozru6bWmdoDBXA2yjNRCKpfhBfzQLW6FS92e6PFgt1sHRKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bfkbfeHEHXvnF9Ne2K5LDCyoUBw3oexLBJRY6GzM6d7Skw5PyXsRk9EgwCTc1CtYEgtdXTiULBibiUVyiUzJWMB",
  "key1": "592GpS15Ats3AnJXLw3A6eujDRShTtwaKynzTdceTyCsMGGsS8bqCVBwp6cupiXLin4Ha32nwtU7RbRyxYvcbRHs",
  "key2": "2rfzxHntBfj71CupcRWkW15uzM884MLTRgaNBrUhVE7aiFzA6sQC86tHRuVnx39CXq55MnvqVMAi6cDYXMS9piw6",
  "key3": "4ApyqFgWEFTnTTzEw6xVEMyUBXQcWpaTm9rwJq3hHUwSYsXdSjC4fTQF3Gw42ZW226zGyAWn7LuZdeWebF3YdtpM",
  "key4": "23SkwBsEQjDCLPSCZXeECEgLnQd3zPwXf3BTxzRbjSkHMpZS8NehWFEXZDprR5oqGE5tSb4qwFEEpWymiXLw6TJF",
  "key5": "4wjP8X9zoeK82ToydGBeQXADTWGDkNaDNwi7gdwxpexNtJDcUorVS6n313PpFhVj41upysahEcg4jpSYawmoisr4",
  "key6": "2rKue7sghrcvq2W496esUuYHw8ctJFQ8J4kSNm2j7mRzzNrRrwfnvkznvV3HpkQLxH9mHWq8CTKkvCF47jEqK73c",
  "key7": "76eKtacdpFxFHJ3Yb4CLrQN6qbTgLXtAs2J9jaShoBMRDRtLhiESiuVHo96DLgETTqpmsyGjrmDdr4p9UaPnur9",
  "key8": "4iFEzY9aUZ2EUzjBVUKt5YQ18Cyr7VbEuNXhEibAsqtZ4zyWUrkwi8MW3oUSR18JzDMW2sKLUAVyvC2gxexYTz9s",
  "key9": "3xQDi7aVAmSprBk8RwsWaHiyXnbBRSJoHtEquCnXMR1sQ8TgpYKe3rsdJg7KnD5jLwNW7nGRoiEn788Rh3tWrRsB",
  "key10": "jHbugY46RAsre9xfPgB2RsBZMo8QTKTgmawKubNmjdxik466PpRsYAUghLLUXuMxHPtMrJd68DF4PsVqHJJCET4",
  "key11": "5fHgLJHrGcXoVb3k8vnofnBZBKe76rXjbnpaKrqMypY2xNsuvjn1ABbyUpkHSozJ4X8TzXSfS7XuHmjAtNM9iU5a",
  "key12": "425ueoV7ePCg1mp5WG7QF3d3w7p1pv9WAc1k55vq9YZ1QNgNzV55UjcyaxRuPyKoXuMJTJVrJQuFpMnFGALMgoLc",
  "key13": "3cGeR4bWfzoMSfHTPdFGBVJ6U1cw9H66ZAXupChfoMmu9YebxrSstMHKA9WMf9TyVMsvRD2cxkfv2fgAgTivoAyu",
  "key14": "5ZuqiUJV77UTsLM2SY1MbDXUVzbrCSQpM8qLprqMDDwpzTAoHXpobNNRdzRpZEHwVYJQ9zZEzJedCKxzCMWhp41N",
  "key15": "PLVW7Gfrm3PPZsX8EHZXtDSGVfCeSG3uapJGuAcXmP2CP2dP7kBSozSpnRyvXQ5g8AHpqkbmLZBYFushKAoui2n",
  "key16": "2W5xyVj9FssaWe5hCQGZRT1jppkqVEJXuocAS8R6qwZqjkLx3mNz6kjLLnyP7iJwpU8v1nH2iTpxd17CU2n3NN9G",
  "key17": "pJCE3EdK3c9xin2tBfdJPmjF6NjoqQGANp5bD7AYxe6TK9skhjdfJRijEM3h6aGegDvz9wdUspqMkuC6ecQ5sY7",
  "key18": "5zFq4eoVXVkZ2HdEN6Favv7wjucuCgV7KF9EEC815Y95omgo2LwcXn8ZMEXpt8Pq538f3TYNULVEGt83y131ez66",
  "key19": "2Ms35QrymwdGV7kUT2oNd4RMDLony1sog3ebCs5CZrFfnckJEAZPmk4pNXvXWa7SvZLZJxmi5uZvJ2S3QxzeeTLM",
  "key20": "49CbhR75qURAyCuuq1FPEt49EmbUtSrvLgJjb8aqX8TrT9Se4uE8icuapqduNfmbsgwhLmMbGW8iiAski3zPYXcM",
  "key21": "31tJPy1FNmEouZVY5xhPnZZmxxh9qNNqosR8aNuewvuKJrtdk2h28mieQ6h75A7B3KZCPE4wsg8BQc991p8fwXMz",
  "key22": "YkGTVEpBZU2Zi24RCzqapXix6nADZMsYwZiJCpdbo9i3QwsWKsnGrwRrfiMW5SWD1vST3zysRaUtBSkpTzPv1ff",
  "key23": "52XZT11uiQ1gocab4rzxBQuiQR7swEm8TNFQgnTNqXKhTme1cc8UYTuBG1WN2KWnsGS1MZLVPAbqUwd3nA3giKAH",
  "key24": "2VyBdUeP1YV4EFECk1uEt97pnCd5azrQzvcQhkAA1ShT8VJYb3aYeqPARSwLXPhZ31pwCvwhBe8ZdFY2Uq9fSbcW",
  "key25": "2J1juCXXYZGRDS8A2xU7UkfQzfnxGmjDA9afQbcAxVPvX6Qw2Ef2BuVHQMRnVwPCNnJsKDMZupUhCdpo5F4eNHFv",
  "key26": "3oXH6obog8QFuPLqbKeTF3eE6FWU4ykYj7h9Xd1zmrj7SU7pAnu494eA11itAhFdgRtDa8p9AUsCniQwaahSCoi7",
  "key27": "5FAL5so1TLBp7xCbh6WyRF6nuxWuCyngxmgjNvpp7cTzZW1abgiwYLWwX4tHdLTh2eZUDbi3HvbtUs2UAojCUm2t",
  "key28": "4mMLg9eM3Ccy63jRpapNoaAb549FLfmaEXeYBFAMsR4R4GxpPx6hSQn4pqSxVPKZxuk1fs5RByezuKiYFQEc9q4J",
  "key29": "42udr8PyBd5K1unVeePEL7CsDfBM1cEVyP1fSbwB9UzQsZFSp2HNrVi7SVwkfZ6Do32MoQJ7gbVNbrGVLEvmdAy1",
  "key30": "4jniQx7C3vqThwfjoJ1mYaqo37Yd78SMjqnnDh9mHJRCTVtPH6gBPRbsm8X2KzCdEXaYbKhk3jRkbw9gJrQT13sV",
  "key31": "53CwFZnRqXJPCj2gUTU4ew7c4PhwSf44gtFRdvzjNcmDA2ng6ZTJKCzFAq7EtxYEJrYvtQPUyk198FRZ9uNTvVhQ",
  "key32": "5x1utoM9cc2PCsANgFfi1njwVap4S4D2TGwFSpAKTJYbK8S1H1bngfnjZJv9PQRVtS3iVmUK6wNKKiNpVTGa4xYg",
  "key33": "4MRbLhjinwcHH4ytDRXmTzNybtgw2MtrU1e9MD4CAoVfDJufpDyPo58qNp77Y8xPwH5XozaccbHp5rX14yQvVoUk",
  "key34": "5Pk8E13VKAhB2kVRTC8LJQLNtZPHn9NH3hH24tCmCtSbhdCq8XtLrpbnV6pC7m3E37xvEtfaXT4xzmhhRCu23TuS",
  "key35": "3ZLK9KL3TyuERN3U2s16HEUZXDKNUd7K2s1V6Co1ysQwvSb9tvLawMybt6Q5CNK6B2errgDL3jLKE4ejap6XDjnE",
  "key36": "2Ur3T3JHQFC2EbvgivQCitsiBaoy3N5cyFTSMVLR9ZA86uJYDqpSM2yPCcMu7iwJER35beNshcbYLgSHZafbZMZ7",
  "key37": "m9b35KQqFnPYAEhhCR5TS1HB4WnTD1eLRqjNHpdAys6AZhNcNjov7ugYaeoL3FpPTaoBPN1foauP3XmsyggyrFK",
  "key38": "2FP9HvnAyP9C7b4KZQzbkfsAM7TsoFBjU5B3M715dk3uG13etRTQ445MELTCZhNXBJ7baod1norVCt1mwzzXUW5y"
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
