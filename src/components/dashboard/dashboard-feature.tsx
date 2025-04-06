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
    "3Vdxr85i6aGQ9TgkaXgkXgNmqvfyuXJ8nSSipPrFDisBs1dx42Hdm3FaPhtW6Z6mSyVL2HM5H5aL5bN4HaeeP5XV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pSL2DXemL7C3c684rb4DrbXeDvXv32ejs9maazSymsUpDcaMZPuriRgxhSK1qEdv9qN13j5oTSbqTU1eF825JXJ",
  "key1": "65jEw25LaNsnfHoe4VdJvraNBKXN2cBAd93233ncM3CVnVTV29Qabk9awpof99Zr98AhZrS8TRwYe3PV7rUtG3EQ",
  "key2": "51bmCvy9QvpQnYUPsZsDHtF5y3khq5AtdWYk3taFYSBNV4uECMB38wGEi15Pgjkc66rwEnh7AKmbZQP4Agv1Dbmk",
  "key3": "4KJ1aVVsneATvwcGxoqTPjy6c9bmWy4LHGWdiMtWmempjRPat974PFYoK48Lp7cE4MMDatY9wf8fqw7R3VeV7uXp",
  "key4": "QAxrf7yPiyahJdm77kFz1WviRJp3KizaGxiW6SG66bGHcU93VyQHWi9S1GEQFyKhgv9XoNUuhf3aTwQC2m1PszH",
  "key5": "5ebRWrFkcW9FUwgQRVHE26ZaTUD3RygnUNQZ3d2zPog2ZD5YwsSsUtG4Ecsi62VRvUpuPa7HrnkPCtPFNYeHY2UY",
  "key6": "5x2x1yQuaHVuUHrtX4RV117FA2wHqmrNb8hqmmfnjNocprrjYLjGgWD3B6jAWhBkat3vE4azwyauLfBbu3ZFVBps",
  "key7": "5AN4yHLvRpeBu4WRJ3sL2wFLjPMXcfe7xECyW2mxYPfDi3PS9wA2iDEeqhiWrzFVktmHNmyXauhvF5EPFBpXCGgg",
  "key8": "3kZp6NHhyf8bENiLMywXPdpf7DzMCEqinipqatbmZALn26RqFB7bBmRaouvRcjvBx8jKCyc8fEKgMt6VuFPimtSD",
  "key9": "3Q1N4Sho5HiJTjuHY9vD2LaFvvUBDnoyHJXeX1eZo1WUXMFVuutSAaKdU2dvKo72RF99Xi6qvwZ2BpYrtNZV3JxY",
  "key10": "5HPQAfvGRemkBnHYUThSGCTUAtK1YJTovAwa73KpdMz54bo7R9Dk9eF38PtEzaVgCgoVWwVCMxgPLYcCQUwGhU2a",
  "key11": "59oJHbhtsmiGaLR2nErjJUpEC8VXyBWfCiWvCGK4KSsbPzjnji4dNueaHrYLAa8D1PoYfD2gCgeoWmRwBCQD7S4B",
  "key12": "4noFTCEYcDRUsBR1k6KHLNLGRjh54TUssqSngfx8tKWsoTRbboikhxCEHe2UtUxAcHGxDMTkEgXSd42dF6iTJmTA",
  "key13": "58xEECnBB1Lv54NVLQvs8UZ7iwYScTGwyAiGEH2MtUMPpjv2VB6nZq8uDeLESeg467HkGkWoZwPRMNYJj3Re8RbH",
  "key14": "47bD7FSmhKc9Pr7EPagK5P2Xajg1JawYV8Q6QsYQsfeZZajDpzFNzHtbregjSEjX5peQaFpteawDRdh5R44hzLLx",
  "key15": "4txa3x2LDmzi4RUPoBzrZSPWyXK8Ss1PCUB9siDcaMXmwSYAHSoznmwxzjnHZekTLYmcf1tbajBftscn5vq32oHs",
  "key16": "4JKgfS3bJ7uLD1jSPt5nTdzm81fxvt6PcGjNX4FFvoGY5ebS36pSdfcK1NFTLVbPbUqd5nosJE7gB7ajWdJtPQAT",
  "key17": "RGChHZ9TgSbgoKsmVdPBZCqXasRbexUj4VfSHv6KXfRFFL4vEKBErbxkk6YRdBhXHNb8frGokoKh6MraPNUGkji",
  "key18": "2BkLudyh5SFPdTycpY6ZmHxUSAAc45SZSyXJ9ciZ39b1J921EjgAKM15YL3yqCKecD8Fr5hbfStYPkDMjb12BjJU",
  "key19": "4cAUpcjXV2UHwwgKvtLtf6knLguiuwbwdvQc1aTmNddVC66bWsVRy9r61Gwy61hURZ57SKbrmeA4xJnGXNkSStny",
  "key20": "4DrpGy2hgQELx6GmFWmLxT9JYcuqcTWHCkAGWQJseg21TC6gtxJtboHgoRBv6J1XXb12DR7Eb9pHpNK9Liny6qdS",
  "key21": "5PNd6tD4MHyb8mhzYWM2pWXdjfyUKPrD9n9s14wSqtUsPmUnGQqSJzQoFYawDrx754CY9YvH798Sdzwci1TP5j2",
  "key22": "2oKZS58EbHUZpqfJTQc7DG1FpXksWQht7uZFqq98foLtFkRsDJbRmyaEsEnWDhdNkkyrWQUyMhiPtWbvZ3D19Qtr",
  "key23": "5xAvroU9USbY5usunmRDiZfxrwLt5aZMKW2WRMVozuWjZbAA1LPcZU7sPLnr5yeELPpUWDdbv3HuwhDqbXFF4kh8",
  "key24": "3BxiW2CPc3JyQ1q9tfTVRwo5BJ5YyaRAzDVtRwfxb8yBfFsM9yEUK7sge2GhbySpRMGzAeoCR9Tbu1QiEUDeDR2M",
  "key25": "4scG4HAqHFijdYy4JnYfP73fgvHzMjEnioVkEN4JrKiipnYdbNzmcGyZUxgJXNPV8G2Md7mCkekX9oPWM5VHkKC5",
  "key26": "2FV93miyB2scFaXPx8sykkmCiMwTb1cdv2uEpsEyVWNi4yupBfm7LN9hucGjbogrNwCWAqewqUn4yFurq13fwyEG",
  "key27": "3iM2Rgke5um8aiUW5ruJcteWReXFfbi7paSSWgDGqGRzSEN7e9qD3DpZkH75YiejA7AsKtte6Bf9tDyCtF6UzvZn"
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
