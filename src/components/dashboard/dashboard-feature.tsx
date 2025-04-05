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
    "2HSqQfFHkkNfsaGUwJ2VHUNxrKW6rueihqEVqaCZbmRuVHMFAXaKM8APiE5Eo4TyD9UUQbN5zUDvdfPHKEpTooJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C7YtxvXanY5m1mxRQAYKNMHGM25nGSTKrpqk3eZL2rPTHio4tr2Nb2kbabNxgD9BAtpsKCxpyPXamWyw72fD1Mv",
  "key1": "5pvJRJqENUnqHsL8ENzASjYLB3357eDcQgQytWHd1zSk7tuXEejd7L8W61g1DP126RASVK7CU3TBtL1SZzmuFmwr",
  "key2": "2dqiQenG9fRSqBpcitCcE87TmXGZ3NJkqnMsdzZoGgixJmFMv6B7niawRhm9Hc1fGNBRq5ztkgHcvAyXD6mR8zvT",
  "key3": "Xe8omRAy2WSJCSfFYcJPbuUyzPt8QAWDsu3M5f18LDzV8VLxe1oZ7azfYs1N2KL2xywiJLwdZnxyhyZ38pouuFw",
  "key4": "5Lc7Vzv1wfQSENUUk53y6hc554kERsbQLddPSZ1jHuEUHZEMN1vgwEgvSv3NjdHtkkmuCKUWH8on6NXZ9gGxp7wX",
  "key5": "5BDeT5gJbNawKVb4EJGHhdhUJmLVudcu694ZESwBfTxJy7PtLhwgSYvhne1RoUJtc1EUHhFvqDFnEJmaCavEXwNA",
  "key6": "3yuo34o2iNPFgxsRM6wgqjGTaCFSwQaTPc8DgZZupxA1pChuaiJhQF1rS7F6x8AUwmtoiA14irRSb4XgLdaQKc2w",
  "key7": "2Bcw84KHJpPD1pHdFcs6afHHuBCuha37D72CnjcwRua2SsddDhugy2rBv6mvwrXyZJrEye72bVR6n3P8jjqkghTq",
  "key8": "21LLQtjJXnM5xVnyqp2KZKKNRDQnhyEsHL7abYuAaPDq63K93Y7HfzYeX7Sv3Gtcvmvs52jeTuyQ7wXh8oW3FR4k",
  "key9": "26gG9WQ87LWX7Dqygv4H6G5gfDxv66HrVZYX5pQTbC5EsobWi7xbvvGigBeLJLqGuv2JFE4qyXg3NnuoS9zXN6es",
  "key10": "3mjycmZ3cEaKLD1D8rFBZUoVFCAqXVxaT29SqvTNX2wZtFUNVBfgZk2Uv9HBX912H565YW1qktgDJsSR1LCNMAfZ",
  "key11": "3GDg7GwA8paRkgiWMAxMUUQesRU4JUX5nyVASGUP8EcjxqvaT9Jfxh7zfrWschHFPFx4urYzqsmmq9Xx85zQ4oo7",
  "key12": "4nDPtSXjfMK4VgVpa5i5rua3Q9SfUCpnPuzrZBHcTtaKtaPbuG7rpXSpYhR19NhPkvVNf9UiAsewu3wxQr8S6Bew",
  "key13": "64oAEyYeMR57btvxhX3BRiCFYDQTwGsdD2gp16pSHQ6HWiFBVGrswA2JouD1PzmFShJY9sfrYd24S2838jSYGrKq",
  "key14": "2U6f7dWqAYRs7Gmc2P9E1SvNwoTLsT1XD8ep3n6LifyqhZHAf2S987GUfay8yYxyDreWCF9bVtCsMnEasnPxGmSh",
  "key15": "hS5jNEyS3xDS1Trq8ABBu1rmjUnJE8GhUtTtn5sQSjcvRzPXiuC4Bp3RenLUjjeC44JZYrzLWvRPdvEG8W19ecj",
  "key16": "4yaoa8ZQZfrEHBKHizj8CTR19miXjkAdFHj7X2aB8Nr7BttpHY684cpAw59eioGMCbD6H3qNu84pqRbfFvEqvzUY",
  "key17": "4T1Xd7LcBgCBzQngh8HB3GHziN112caahJnksAXjkp6Jj8MYghR9gErxAtRsUnCpaL5tTDptDzYRtEztZtXRVygA",
  "key18": "42fWZ8jmywn2D6KCUJVpfJDGThg3sdQKRrFASBqbr8c8tULfqmzbDX8UZSYdCs2pPa4ACXYeK1Yys6vocNPKvrYm",
  "key19": "45dV18Y2DphzKxr2ELucpgg6vZ2rC67oRHX25iqZBxaWcKg6HG3BhmczurDeU2WurFJh7MY8gzpzAxVeHrfhfMsv",
  "key20": "5SLCiyqEMvLHcXzR5nrWTJFCXh2dwoioijDoHY7JK78NQqvNbFM6jjwBP9XgbDhaKcG74FXEhw1WJthye4mXqbvq",
  "key21": "2X7ECAQqrYcBVy2jrnunuKiQSQDqoDk7jNjAexYjB5oBwRGwc9jW2yrK3fjjUtcPgSvdTmLMwyPBZAnY9ratK1Fi",
  "key22": "5WfLz1h7PDHBYBX2D1cVNj8jPwvBk2PDwjztfhDHQz8zpi2sNnTmVsBToVA3fjSiAcdJHuopyAmLmP4r5VvQcoAy",
  "key23": "3tLgRABUdn2PGkzh23Q74nKtt6gtmkfjvssjxyRes9MhBP7YD9hR43ypBt5zrtsjKuJzz9gFhj8tri18X9Tjviea",
  "key24": "5PbSAefh9Ft4BoFnftWMSoFq96yFPmTZwKPr5usmkPFfgUaxmVDLmw5vR3pH7WHGmzCNiMa59Yh2RBo9feeRJrVF",
  "key25": "4MZchYYtPxcAP6P2eJYqjb8xBbG3Wn6TCPS2gLaRjn193dwYS21Wj9NZENdAAcmekEmsre7ecHPYQEAohUvY2R4N",
  "key26": "3RZmf3b1k3sZWKeYcqvjV8Uo99eJhv5ezGTmWNac9sS6TWHrjGVKhPXBPcAnkkvJ92HyttTnnaj8FKDqj9om9HFB",
  "key27": "FmQrW8aWhR7RKTTeH2fMS8p1az6m1pfrZD7PqvAtoEdrmTa13m8WjDXiguVMJ5mAWDR8g4LfFmBbwuwgQXqDvXk",
  "key28": "4o55MTxyT2BUaKSeRSK17awm4oVCboxKdiQacJEQAeHZDPKc1mHFXQ19MrZ6eQnLvjTKXctAHbxppPghadLPqihU",
  "key29": "4Py9s7n7UWRwPs414YYkEVzhkCxFWKuzutmPGGaCvT4XQbB2sozR3R3NrkWE9xd27AeCLiAAFDixymQN8FVaoViR",
  "key30": "4qdC9qdJgLesRUW9KKhmFTPXTxh24GhKs4eGsGoKY2Ehhc5R6Dfgp7F3vHAvo6gC1VASfg5dkSuZQEvwNYCm93vu",
  "key31": "r6ndqhqeRSkrNk6cdZQvUXcZXkxaAexKHVXqHBHUFY44DtGicMPpqvwB7Nuxyc3ivBJyivkEoErrmayqvbhimms",
  "key32": "39HDwB2kigpaRnLqHw67bnGiP1iQSgEY7c1Qkcq261JKcQQTkvXYPuB25mNAA4G9MGUyEwSkqb2TygB6bFKBbbfG",
  "key33": "4wzkvbbaZEWy2KaUhpU9Sov5fHrRD2LCECf3Aud2vhkGwK9aAdXRxT9xBQW9r45tcnSgerCnscSFgQxGchP6Hesc",
  "key34": "4NtbwAv5X9sZYGqRhv1BJDK2mTgoCydD8aQ89iwoZM2f9gkwb8BiddYS6G9zuRxL7n8ZZw2L34vgECgbnWb6tG1X",
  "key35": "5oqG84q4UBxDqaLghT84t8iX1brETaPAduz9UuoEzZq7T7BbF8yG1c3zZszdwzrfMUjZCwkpqvUVFgKw4rSFANfa",
  "key36": "595pEFzGcDBty5nNvkc4g4BsxxEJyehYT2GTqnKCxCrSfcbrVdzs2o1R7Vz5wb2yqf575JorxJSBGHMWFb47zwKw",
  "key37": "3euSBbPp5dsWdtsHysyRtCtGLkLTHkNpKzp7LTwJT5WKgtHZBhcCC9fLrAoPtSaAcsvReoxr8YJfkyw71G6dPNHG",
  "key38": "56MkBmqsUcgoJvR9LdcJguuihn5EMHwAPwVkgAcFUazYAra7kHwBCc4fv3LnmE5aAoHu6pw4eC66NY43AhwHYLSt",
  "key39": "4g6s67AKDGso2ucxXbjafSJNfGQJhetYAhwpNftqVfxpavyXww2VpW1XG2qWddsDSDusmtBdabt1zgm5sxWX57Pt"
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
