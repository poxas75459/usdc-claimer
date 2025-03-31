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
    "32sRbeutNFycD2BcQpqHziX2dicB7A5jPiA4vieREDL3rRHPZtdxUKpvU2eD1gsHEcGn1NfRu1oLc92idRjiLSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BJuqJunCc299NhR4w8fAVMud83AXSieThndyV3rnY7tnNAVB1Fn6WFQnzY9mNFHAeEDhiHxukN3D3hdoQSQ8Hsc",
  "key1": "296bdgp4XHHVNqRsjwn8kavFbhN5ThoktpjzXE4s9R56ntiE6r5E2FC5eDcKoSuf9WDMWNJfKn8UpJoKJd8WePPr",
  "key2": "C73BmvW57FweqJcvTAN71mkuVewRm5BpE4rGJHGvz2eWcZ86qpLVkqqq2tkqEh34rUB8h8SNrcjNxxmSQSaGShr",
  "key3": "5NjdJUQxx7PKuMjorEUBZdxcGTh4bSJvaS7bSQdzRrbtCmyRBtFdtm767oxtF49Q5bPEcebdopEurUbQcb1NbwRE",
  "key4": "62WNhhHiLB93MtT1snyKFd3TcHXsSocvpTYd4SQjnVzspjXbvfrMxaXWriJAtJ9SmKdfViNMBte6dXckSEmwfmnp",
  "key5": "H316DYgFAEMgT6Vh8xEc8z6qDp47zb8RQiz563zksmW2gKLmhAQyV1VoF9WZefqgvZmpKZLxARPFT5diHx7dV2v",
  "key6": "4QpWewxkhu1ddLaobmuJDq2ATYg3WVjWExjYFKhD7Vc3fAZngqaVGsJpLaBegvQFBF1LgZZVVe3Gh2yiWhn2VNTg",
  "key7": "5mzzB4m8EDtnps3CwaTK3EWWWHRcn6KNrM9449LVZYjbrsmkwWNfevZdgVYbYoaHifAkhLTWBTjjqhxdNhQc5j6j",
  "key8": "5m5o6qYw6y42cJokrgjk8oq5HCpe5Jt2FZsbDAm6xycS5PkZTkyLZCvYBrucrF5UJXRz9Fj9cRzXCx11ccY9fjU7",
  "key9": "3nsaVrVZjvMh91spuRU5YBNsM8mEwfTZMqBH3W5Z4naCpEQ36jyRd3GYfGC3GxuXcEAS9S3VEsVVazANtE3UrZ9a",
  "key10": "3orSMHRbiMx7Qma25Q2WuWQ5q7wFHFSiDGSJeutjtexnfMHEoKCLj8rkh6f2kLcWY9ejC78tKKQWHe4rph6uJdUq",
  "key11": "2uVguZmyB4eiChUEFyXtrvMT4pMxC9vs5rSJxWTSpL4wgzC9oKknXe5tgATwQcVtcDZWMMYCvn9h7VcWJNvsjbk1",
  "key12": "4zg64xCYMJajeD6oDNubRUQsbyik1Rf8fEHbHCJ8fUBA5AixCgVABs44hqt12furvZwr4jN8XnWLPERC3S6pV5Mu",
  "key13": "P3Fs3qGBTQyrvzqAnS4Y7T5wHvGSXrR2u3edCVeJnWbUgpYZMw1AYerM32NHg4wZHiUzBN2XJJ6wr2RZyGTg1ie",
  "key14": "3576mXn7yneTaXnoRJ2QXib7D5LXZC3VeHHX5pGHhLgGW8uC8kD3CeVCdr6CGUCdcn5xzgHjuW8yi8RcfHNQ1j1S",
  "key15": "5qsGD5QNQ5uuxkegKNk2mwRXMFxv16C4LrKTRgDkvV4ddi4GK2vxiYvvoeusrt319kCwBoDBwkakfViPK9eu9hTG",
  "key16": "5pi8icpyBdLspY9cTYcpKnPUr5sE2w6u78kmHGtj9fsZbZMw9HWyP929fum7RYNpmsmFp48zb8HCWUE1S7Y9as8b",
  "key17": "2V8Ncg16VfZcnFr8ebQbSKWSLm3otQHtZ96PYECX2rqg5S54iye11fmFzWewYR1wUQmw1DnpGN6mfbLsLTRy85UP",
  "key18": "3HCnjwiTJRuqC2kwgLbv2ob5Rb4Z3FMCk3y3mxa9MFkvkZVUhgwngfYYJJPGQDpb6Rt9RBsKnWfu3N8MysjyFTvp",
  "key19": "5qKhmFL9dNsKDLVFxY4Rv7TGqiioUYkL8q2VzdG7embq7fEdWAn22PRNrk8TPcasJZDY1jXsfGAM1Hm41vgQaYZ",
  "key20": "4wbvCrk3cTRAbM95ANmA5Jz82bFL4WriB92RUicrrGL8YZ9fBScLiqBfMVPKFy1oFnnUu4jVUhRMqey6JmNRqZGE",
  "key21": "2xfcW9BhY8TgZ6g9pHcDUTuur5S3Xu3Z8TGQrkVR63pt3qRvFtwqV1mUE8qY1frQ98EaKdxxSYP2WijoyPwgb3jB",
  "key22": "5BXDpaZUtWZooAdiqTocAmfj7ypBaPSBc7md3qQDGakChjifZGTAMXFg6DvtYanbWWSPaWjiVqtAC9NT5w7bkncL",
  "key23": "55574JVg1yFycVnSEf5nanhNmSNQTxHqvJcREcmMosekspGC6Hk9D2kG6DupYRVxZKmVDtK4KLfQdn6BFP15XrE8",
  "key24": "2kycYUhLPR1uZSoKafvXhmRhUoSD7SqMZcrCMSHrCVABW6U93dJ2AhnctZaGY2uxcsJftCmCjQKj3y4AonDyU7Lx",
  "key25": "4Bnv1EPPuqMweCG1VvLuBLtA9vY27vTHp3nbG9CDXQ4Lz1yFy6Qr96Z8KGMTYxdLosXA63kVf2w9dPjodgd3owNd",
  "key26": "39CXffLVqGVPU3BobYKhm2UNa4jwg5QeeZCrmytG4fDbJFWbFP9nPzkuDXajmGn3R3TBE3R9MhwJYuaM37hVAJxR",
  "key27": "3NqmgY7xKZgNmGJ3U3rgcCxA9LzsNhxHsBpDaL7qBWeEYsEXyM1MA97GsvuGTThhcTHxaAW51E3nTdJ7Cuu3KtMp",
  "key28": "4W5QNe2M7fNJtuGap3aJn7xQRyKfukEpL3KZC7SvgExDzp9KhwkLF2gGPSh7z7GUsKeGA5JkcbcT5q9tsRVVhV7Z",
  "key29": "3sBvUGpLvpWz7HZ4zEAtatfFJDXFv3vFzjitcnK1qBUFnNLuad5XkwvGqiU8Skg4B8Xjb37qzPaC4PjUSbFVLtiP",
  "key30": "2kPsyEAtXQW4VyuM8pD1nJbPouL16TaTBTybp9NooN1By94dDvHXnPP7dgUJ2ZgjWfs1z6ot6anywG4rbdorQPqZ",
  "key31": "5JbLvRAdX5TooLvvnMjojeCdWWct1Krqm6rgir48NMarjyofwxfgjjVoEpvnf8wgakv3AgroHPwmwnLUfQqEHqh7",
  "key32": "45yXvJNmKFiyfNGDQ2jK5PWBEQB62HbeD5X3swHHdemMVnCJdiPBsCM5CDQ4R6yJKfmibyu8qyUUEV8JEmu612Zw",
  "key33": "64qJ8tXzs7EFUazrAidKtQS1u9RPwMyS6kyYybobQ7aNe5AHyiB2ZZQPcmV1TCyGLwj32Ew5r3eTSCUKiPEY9yqL",
  "key34": "5rS3zuuyvSCBbUReLQpujpUaiWjkmNnwdgbNCjc1cVguojqiyemMTDvCLi4Fg2QykAxzZYXEMniDCDiq66LHkNzB",
  "key35": "DtXzDAFA4GDMfRzDKFXxj9DJQn1LKPQ4mZNXKKmAYKg5GTZJVEAg5cJivybBqEmfMQoMm93UFY5iQgo2tgAqSCH",
  "key36": "NX4BELCW6VbzQiBKeR1friEnq3xeAbcYrRbTFku6NxmLNmFxQJpr3WX1aZoZfVWfcc3d8hPjDdZoFFbEinHEX7y",
  "key37": "7juqZN43GitdVvAXaT5yCdg7ASERqDeJB5ZxkvduGPYjxcYBEFFMrwvztdDEJs8jeGHU4NnJQpiHJsoTgxn8gNj",
  "key38": "3BrqURuqYCFQMHwcgX7G3vGdNwCgMukxoiG1CxTpV8Xi9c8v9SMJSuuQGPHuuB59BHQ2pLziQM6MaZ5T3kLKfm8t",
  "key39": "2GAWLMZ9aFFVNiYPEQ6PkD9HZWk8tedWFBBHpytonTiUjDFN2wMCA8nYzEGFpn18VxuHtnqGPQL2ReQep7p7ZAZh",
  "key40": "4sZ6oX41L3ksYpjQ2MNh3dauwcSgxss9mRfWf9zX4uPsPeLDC5ttvp3e74i4gS8Yyxqoy8NTkTNWVggKwBJ836Bb",
  "key41": "4CJMT9c2AF2JzwGP2vMEG7MuePK4NuQd5ugsYA2ywiQpop8G7F2W2sSs9URbicKwHwDmCWWSsKPnrWSrNJibc29J",
  "key42": "dypwcKfuZBFTFJhGuQfg2TMFVKJfXiLUmyGvKanbqfyWShcTrwenzFeGoGvCiSm9EnHPwrBc9k6YW7AAkJGXtt6",
  "key43": "2XLTxAXv8agz6wjcSbT65LXFKG23SrVnUPHWZM4EMNmrD6vGtEw3f2BB93Am5pAHdnWBobTrkJf7iMcyxTDnSb2k",
  "key44": "3PSK7QNpmK6ag7KwrahY6JsrtFexHmzbuAok1dubvUSVWUsL3SALL5aXWikGBd71GEyCwShMgKwx66uLn993GFNp",
  "key45": "4s43AhBonhkz9nLpHUtmXaZ4G5sDnEaoaFzBzt4HWN2CCN5vZmRrKRHDehrRUjV3V5uMaEJmZkumHyy21JYMMaHU",
  "key46": "2FbecJthZsEDQJM1iea9KHis9LGY9uo1naaoSoYqeYUnEYYniy1vQunUhYVsuQ7577ENtHGLQcTGzTVc3sv2gUJ9",
  "key47": "5JVwWoEGpynY2Nk6ZANLW1Q1GUHGDdDFCGEQfcbWnycjn9JTikqdGgfDgJ3ohUsHCFmqwyaR56YuPCmYS6dPNg1Y",
  "key48": "xJGYgqGbjYApoNBK3FfLWMWhSVaZAhg6j6F2BrxWkj2FPjvxbh465cCXFerpCi1aT42xfUTkcPA29DcLwKsZwQU",
  "key49": "4ZrG9gophHQN4nW51ouj3FLhfEHBAFcfLYyLzxQPhRCTc14GQNsPyvL7p8do2mwVTKVxrR1p9EFQ6XRK6wyGoJXt"
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
