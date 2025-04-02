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
    "3d7LWdvK4935PCMFVU5cmhV5tHhMGFMijM3B6ErRCBMNEvofqrWHPDSgLG5B474X1Kxf7tukNr6yMCj4DuGKjDE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PVmqUq9ZdXNMdoa6k6e29Y1Zdt1ZZPu5wMhwMmtvfi8UarQzy7msP14Pti5sMxG6LPzD8WyvSH1GTuLWbovY8bm",
  "key1": "4dkhdNC6UVsDM5G3LEbzyz5LLBpqE6nmQtS96CLf8tmYLz3pbg8f1DMZEBQK3Hv4HiHEgEGYba4Dt3gDrMN7zev9",
  "key2": "34CPo9xrS71T4pbiNDiKjWNouLNUTDrxsksftPhjRs76uCwobYi44WnZ3upXWUcnHHX8LjBtL3n3dZNQAmPiUMN1",
  "key3": "3Q6qssmoQchjVqpq84FKiMNDv3Zm6H2SWatofARv7oCKL8q7Qz1QH2GGRL74RhUL61R86ENrR7iARG8X9bFJAz8K",
  "key4": "2ZPffp7FB9nhegUaz1uMKQV2jVgn3NQVHELiWpiYsGUU3VECSgdFH9VQFnm7BBoWfTgVrsUt78JJgQ6dPmqCxDQa",
  "key5": "5xurEnv9FwywbnoTTvsiYEG6G2r1m4Xju3t79aPsePBrN3f7ce7amx3zytf9d3jN98us4rg94UmLzpkudqJeXNBE",
  "key6": "2Kr5CX5ny6Y2sgYzynjGXYRGG29GtwcxZKrSWUUGTkq9F9TbX9kjcFrBkvs6BPekfsMsdkGofbwHxFsktEpQ3rGF",
  "key7": "2M6HS642mk4o23mRSY286fzHS3BBhPBVsQ4cye4ommH5ta9mRnTKywXD1dUfPPALrrduQ1auzGeKVoxudN37wQBT",
  "key8": "596zcWsC1G6et3mNzYM8ygzZQJTZDgKK69VtV65zfZtCDxsoaR6JJ8tCG7arQCU7wP6k6dcB5Svafk65sk8o8bpM",
  "key9": "5dkEhXWqovEsQgDYhscAEuTYMT6PD6cjQ84M1zSYErWz3H9NW5BVjyRxsuojc5rQYFssDjyACkwDcdRgfAf3Ua48",
  "key10": "yn1uxfTTuPrqTFAX4SJqc4t7yga8RacYqqcsBKJDcjLh29Shu9DL2y5zmzfnXt1XYEDEoe91G8v2gNymUvtDPzQ",
  "key11": "28Er7MV1FCbvAbtsjwkNiu7RuC9JbJEqnNqN3ikYkSo8WAFcN6xrQkyouvp4fodp9TLfnK2iMyjrcx2pfAUJszhX",
  "key12": "3nDyk4i4BGLPhD1bgMhTEerSbUSFVizAUf6u3XVfB89F8UugyEPyqR9wk6oTSUD5mDr7AuJcvAkx3FkckVNwfAtN",
  "key13": "2YZNJx6rH9tCHY6U6yFu49AC9zbHU3uHovW8gAM5Bmzu8GFva9FyE5rz7guAXB93jHP7owW2HujT8SyaCvQFo1Hj",
  "key14": "2EvM5yEMdFRoMNyNzswYniVGpkjBwy1T3E2ic6836c8FmRXUaF9nhAnfdU5Lyj7FuWaF4zXaVsFWAC5dJbbM27gG",
  "key15": "2jsqUjB2L8WMFejWtoz5Z54T4WLFWbt4dEYpq6uXP4UHWpTT49eYfWJsrKpk4XEEotzdvuFw2opGkbgTzz8wHRWo",
  "key16": "2VQZDvWHbgqNA2yrQ8UZyufvDPc6knmyrJJPid2mCGGjaPjyCcWFcDxqcGzm5Zeehsfs7FfuozTeUQo97rCUfAFV",
  "key17": "5jgbPzb2WavuKoMfQasjkqDMGcdygAWVaXz6BMNhkcU9V6HUwNZaQifsQteShWuQfxkdbsFbtojbArmUhjiUeoWc",
  "key18": "56rpd3L62quAYMeJk5dCNT14xArZ92aL2gxAGrVRsKtRH2etjf4N6AFHGoMi2Qp9dbrWtTpUvELheujxdKkemdQ6",
  "key19": "4X38Fm3dUFvrUgJWgJgtRUwhp2x1B5KtbHLMoxqGuqMnY5CHaFP4uhBqycrNppnGmigmVi4ACHcX2GdXi1sbHrFC",
  "key20": "GyxyeYETrrNrF5fr6dB4nywSBnb4yq6GZvHxPFgSUUcSFRvRUKWVqbB1atCutHARL6A6KNM7vwjoUqkG8Mmw8zn",
  "key21": "kwJF49A1nQJHxzS19AVvQEpHaaBJu9Bnajxg35zkm74LBHLz2sJhRx3cqviQfXxgsRNmag7z5QmLbnJwubVwbun",
  "key22": "5UL2z41b5aZQQsRWb29cgsTuxXSQz1F6gyXBTHwVyPfDWyFnaS71FaKNevw4NXaDKJDSDiXdcRaTP5zqNQvjs815",
  "key23": "5mqowECJEML51ETCr7DBTcn3bjbJQky3VSDGbiuhnLH7MUf7isBAceVgDTAGNEDg7Jpii7266vL9RSrvftbgRRTt",
  "key24": "4qhEM7g8wKLfBJSy2UDCGi7C6eyMXGRbmYAWmaYprEGXucuAjYR6H7z3mpMNoiyNDJUb4Uyr7ZKF61PUqYWnNki3",
  "key25": "2wZJttZtk2q87WPTdBnaqoThPphqUAYcjD37Gvg5YNw6m9XoY4pTf4raGPxgPs9KEZ1mr5UdRdmEX4yJ381eomgK",
  "key26": "3iAH4BmtRrgfyfMjvRpooFapvfrUfhbqg3kMEXx83akXBhg9unDSYe5UDxzR7F5s2phpHreaF6S37x1Sw9gqGRLY",
  "key27": "52zUTGzoiUN2rTY7uiTD4kcY8WNoJYGNzsi79MdiRTKqRk2DuFX23Y6MqSLMx4czjCCvuUcyDw3zhTs4qh9VqrW9",
  "key28": "2At2FR7zdt8J2hx89qCHcRVTji8ZXKc1wrqYMjoBgiVQCqK9K3b5rQ24zd5erk2qNUrSM9PTN6FeWppZeXk2nnEf",
  "key29": "v57rhyD9wnUHqodBrhYKojYBUDAXE7D6MowrLQ7NF36gMKnfC31DWz5mAEsbcdLYhLx3P4wSUg5KoDkqmm3Nk7s",
  "key30": "2TYayJFaZcKphPeW5uUtAU21j7ghPYV41puEYscKYnxdufrPaSuGu1LM22ryBE2LXVJwx996GzKqdMX5ayc1HBNQ",
  "key31": "5sDdCzhQUTeisXmfGKfPWb1A4zgEf4VqerLincXwxJXe3oAo9qoSk3nAitdfmiKuQsygymLw44mQLy5oxmRN4R7C",
  "key32": "3ts1BZbUcm1Xs2zznixEDKkHfonFep7B8pDsBJyVPPEdDS3AhVEy7FJy1sVF71Vf2gBaAHA5gVurEBowKWDUuEgx",
  "key33": "3BAS49NSPsKKCKWUk9XS9WXBiZJpvNa9srEFhkRJpuTRkB5doBdiaHakFuQBZjz3Vfn4CpjLaQCEQ4L8D5BeXcn6",
  "key34": "vgcaXzhzsoDZzgoBn4WbATKByE7urvwCE6gXqJ9DTaQtoqpX3b7RufdS93ZU3fT5mk7HQrVR4DvyVTucnoCVCvN",
  "key35": "4PJ3auP3mikhevCDPinXA4F4bXGUtrfMzbnbrHDvnWehHQrF5nxHGbkAbEXUu3UuRLkFKbcdPg3a7CDSpyr5uaGg",
  "key36": "2fMUNQiGACMVcfsZcVWBs3KVV811RpuayK3vCDa86SqCrWrrWxYQDiKikh2jFnPgJc4HxnudTCwwQuFkcUNFbLnz",
  "key37": "fw8GyjFVo7HaVY1ViWExBse2nhEbxRf3kDRHY91MXnVsfKny2CvPhiHVFZ3bp5bPQxZdazQG3dUCwyJRVa1EWZW",
  "key38": "32wpMrbd6nd9jEJpbPadiQpizp2LqWFz9c8uTcWg7dvPrFj2RA3gg3EvC5pzwL119M3rY2K3wxpZahY3mGeWnZmu",
  "key39": "3kwFUdu2ThnySQCMcws9erz4G2o4kyj3HiAFZpkJXu39WG8EoSW1Bx3ZMkmAw6UoDAa6bXczE1rTsTmfJMw4WZmn",
  "key40": "5bHJiB7HfqVnbJ34dxPdqrgwne7HFujjdBbYZ6G7vAshHxSZQFSJRvc2Pqjkim8gY1PuDeeRgjdpXD6VChzFAUwv",
  "key41": "abVjskVDkA9WB91BZShiVVDkUYrEMPypgPb4vYxaAC511jWTCk869BExUzP4GmCQwVwHkF4kdPrmEnoLtA4u4hU",
  "key42": "4MDDkeSiUdDaGkDZAFs1eaTWhDrArXEBCsj3STL7GknMEkjVH7pVxkndhq13mKXnSHMnKdKuzWj2AwGCA5FurTbf",
  "key43": "4JB4hWGiQC8P41PfxCKxmPqmUyo7ctHqeHyU1XA58eyhQBLi5XTBTTR4dUQZutRcnZAvKpBeahsznDRwXqFoym3N",
  "key44": "9Z3JksbDsCbFAM61kaHtN6swCVaVeqrY5Ay3eKL1DnG83QH8AtFboXniaA9M2n4sot1KgRoBLo8kZtCdU7nAD5D",
  "key45": "3ufEZtb2rwCKG32kqTfZjH7TD9eMTZkAbXhFiZqKEScDt5CZkUCeSPNvMWJzhqcCjd48zbnBni9jJ68S33mcBSTZ",
  "key46": "5F56xz7CqUFiBQVaYqqbTookS473im2CT7r2kVs7VrwDvFhJgkh7PXtjRWjNXunKwiXw9dDGqykH8y1PzUFpSqJx",
  "key47": "5b3oENZ2vv1J1nyh6CewwkQmcG6g4gB6VEL5AWstxoEjybaGiZwBZ2dKuKUnETkJ2aBon7zaGosodiNdSPbL6gAE"
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
