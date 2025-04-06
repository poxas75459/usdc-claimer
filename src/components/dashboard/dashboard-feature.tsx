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
    "5uLQVd3ZkrDmBAAVT5n7FRM5sh8XiQwBfiEcdGAaDYtLK1KEKN4d9eiCzBgD8JKdzNPP4M6UGMTELdspMy8urqEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ajsdmen9BxqV1rjfg2iBTSmqnNabMMRBFExreR979p9CEqoY9CVdLQvQ8nJWieS8npJhDMa6M5VLdeFJBjThTYg",
  "key1": "2sMmDD3ifTMAdVjANiHXRr9v6HCEemDgdMSiL48dpxqphLnvgxDWj2ECu61tRzbGJFQyjSPJDCGHGCa1pBfhHv2W",
  "key2": "5yKFxiAPVZsVeQXCeKdaXdzwHvTbwscvqxvWnpw3kTceinaKxRTnp1srgmyQci1PEMLNNEVTdr2KDX1MD9hJkuwN",
  "key3": "5uFW8hkfQth4iyv62o8BbgsZSmVDpEuoL7gV3VeBnKsoWmDBB4zc6Haoz6csMaW5DXZCnp39je5N3K9psnXuHVYz",
  "key4": "vem5Zesa1SfckXLJ6kdRy9bLm3HiQ4JispytGkdAmQXGqFrhmAv1JytKjBChsATt46vV9vt4g5HYGmPZiRgzcoo",
  "key5": "53Z2a6BGaXWdbmdpH3VJoV6tCCWMVWGSv4PBxDEjmW8GgmzpTDUE1yC5SdL9RoqDFH1DwvGEwhu5PEhoADaDDyT5",
  "key6": "iiDM6Ayo7kQCPJkwzJrDN858vLR54z2455GxWAReirdFZvixFL558eEgMQvy7fRgTbNarXps4TvQCmMijpy5KAD",
  "key7": "3BoovSbaMpSbwvrejNa1uZF8R59PfTCdUZJmERDcdLrnco86gKAwfsJvND3tvvVNTEyG1qBJPqSFYkJmpTejcMLY",
  "key8": "3KdByqwCWxA1XZkdRq7q68v925jbWzghYDfR3NtuXoJj4WTppkpFueRqTe6xG7aaYkojpG5y8jtmJcz18TzQAxnN",
  "key9": "5idL8YvWx14vVWApQ8GWjcfjnVUrRoy3DxjXxZWWQNRHnYscsUcfVEs7sZAXKT8dkBcpt6G37xR4DuNAHgfuZkQo",
  "key10": "2Hn9cYbvUoWQY6AcSjsqGFqeq92kC85AdJCtpXbJYSddTwr1jPJ8VZANyipr3EruRLsTHi2Z4Ldzwq6YM2PWB46i",
  "key11": "37K8XWZPsoAh8WutS9wvgg9YoHt2J7dMPpw8PPVrXTogLdqdVZmdbjKjHrKHXQwgKJTAh919yLXTFk8wm9FzvMVH",
  "key12": "4R1uZ5KixmrBBVeXp5rP9bgNaAKvpcU5dWv8yLMoGUXQiQRZYWsXjPq4SASDc6jffEcC8UMUVGHf7yKYx2d1YLsh",
  "key13": "qopuPZd8LawzjXzLSzp2o3kRjterPJN4KSZRifpPQmXHhxRRS6QtzAMgnCgSmyguAQ1rC21Bw1CkaZwwdLeAnaT",
  "key14": "3a5F57U8hPCBBbv17HDrfFU36obYt31tem5wykZ8dmxkLZ9BqWWPQfBQyLQqXVkpL1M4BxUfzR1a3aYgKJB1ZTmL",
  "key15": "C9foGLKiLi9QVYZskG3j7u98G6ReSRmqYRGy153zHwjFZmXnAmTZRc45HAeH1yLJwwKcGCRgL9rBzrFJB7RQrWb",
  "key16": "5SvwK4CMnEAXvoXnrdmqKrrLM2TLqtR7kV6NyyzfR9mTWyCAqD1RtU7H7r1KiP3yjXNWynNMQoWFCy42w2szqsSi",
  "key17": "5A2CNHqT6UdQV8FZvyYjQrXaxtNUPjCQjCsvknEWydNwPYfNafB3SCedUp9yzgMe43GZPxYW9n9XW1RKSdvZXsWx",
  "key18": "j6LWXhrK7F4DwNu9g5KMeGk1A7QwDnQ9QvLA22a1XRpB7ypHrMpcFcLVZeBkPDa3MBjXLRAuUiRWtLV28LGDEJg",
  "key19": "53Rm3uAkSTYYE5E4PwipqS3NXH5jJiWy1hkaYz2gPGYa4bTSJ2vQ6BnphFtDWFfrS1252CzyMN1hHEyze3Vxzzrp",
  "key20": "3AupZhqLJBrdD1KUBfTAafp9bKhmp4AtscZowBEaTDGJDTLVNKyfUe65dfvQeMHiNw8CRQVFiU1RzejJJKtWyJkR",
  "key21": "3XyQYhwACsE9F9yw34Bqtsftuk49bjYZeqFgFvzrKpFCDVQyXT34E472oKeGaD9pTB6hNSZS4REWMJNdcL4Lkacd",
  "key22": "4T8a8v9b1GetreiCxoxsw4Ph8yGbWfauAXSmujCGJc8gMkv2GbaZZmf9gKHDieVXUD6ErXvLhtxXMkMzPpYTkgQZ",
  "key23": "51NnW9jEyp5g5YPrgSKyNx1AxihRbCe6EhdmyVr2L53Q6hsx81FL1fuJpuofm37puS8MQSgCTF9zXoeVKHppuzSh",
  "key24": "5xApSXAKohjsCuAV1HPytfTPzJPw4eEJp92eeyCBbvcj3N3nJYtvFGzDAiGThJMweqnoGpBPS4wFQT7ThZdMYkbC",
  "key25": "4ggEvj6NMAEGrQGvAE2FkU9HFWhcXBtrScKPxUEDUcTefUb1kb9v9AkeEWc1xgAL3tLFdsBvGeg5Q8CtPyQRLyFb",
  "key26": "4NaLWjn6sQ2XhpeUWQ9Q65okef9CLj9F4EfFRX4j1ewyLyUwvMPsrpikdc2DV1znCyVcHH8Uw4ERAwbVpcXphugX",
  "key27": "35rG5YpyK2fKbrdXmue6iCVoWdu7wKFXRSJqbJrKfAzVEZyJcyHghegSgswvkgFVxtCF3eCGq3GARUQpFbRNm5Js",
  "key28": "4LJetoVpSmigdrbiv6nk3od3HCzUc8cFPbfGSmo1SiVdYYwK4R5xw8o9r2kmamDK4WqPxXEGBjbdgPdJAh3CooX3",
  "key29": "3MH27i8NYTqUE1oa85spV3ysDgSynQ6VSZSb2udqHtQhmxxGYAYjUphq1q7cuX11GfAULcKe64pRJHp6CDcsoraw",
  "key30": "5MHx98oXYP2R2Jm2uYAhi83Wawr21X3oLBedtZqxksmHQCaqn1Dkx8kjQviboMdqU9LiLHuxVb8YN78S3Wp5xmjG",
  "key31": "2QrMsxNaQkJLJ8Nk1f6M2YD1ehpHAe99FhfNGo6B153bKqfnYpjKrqDyvLKJJ6iZFpcpjTVZE5Ak3rvgvrVJYCvG",
  "key32": "WxroXAiL8Np6JLSBbsMhnytsSFegQtZnW2n6nPP5Uu5T9J5G8egPjdnxNAFjXEEFf72LPiediFbLgVVFgaAKSgf",
  "key33": "23VqDdRjL34xWRbNHCfdPhLtxZkYjsEyugrXhjSJTdM5ZA9euQ83AN63L9dgPznSAitdRQc4MojLmEyQXa5wGv8Z",
  "key34": "tkSYvzUKTw7nJ9ReLDxyFNNQmBquJiMEicTeAZZ3wqhMEX6kjuQmqGoRzuegbVuuqqntsPzSdkEoSWjYMaMxBsj",
  "key35": "2omQCjNyMBf427Zaajrx3GnBJJ4hGzqqUbXPKMjuQqChxWYtHLSm6tktXWa1gEE6kqcuGbaJzzYa6myW1TuSdYio",
  "key36": "abdb8XZs16tEXpnAApK4kfWAYwq8WcwLgBB6NQ61aG1iCmMt9bCDPC1H8YmLqJ8EweKfYx4FHyTwxYAQ84R63ho",
  "key37": "3MRJ35rCnfV1UR5kpLE5dafsGVnnjAWvDg6xkj5TKxP3y49ymiGwHtyx3bWZXhSREdYa878syri67wZ8uijVwUSx",
  "key38": "46JS9vv4dq5pjqiikoagBD376h5nFryUvgwSBiDQ1PxPw9W7aQLjRvASgk3Pro2HnMrfruMmqGgGKuHQ4MQucz6",
  "key39": "WrJ3DPUWHn4hvvieeEpXj9qUYa2oApHuwuACCWbd6amNHCrvvQ7YJDxMJeZVgZwr17D69UQchkwA1xaW6XhBb7T",
  "key40": "2vR8VixwbdFKpoZZpeZ6x1dF4rftZbQnFCWTMn7QYocHBvW41V8FiZ5tN9ynRR6mJZyHje5vXMDcZYbRoM2sQYQy",
  "key41": "z4SvvjwU8FAx4Db9Ft1dKsL5XLDYtkqhTRjWtG36UAi9y4aLrZQ99KZoM1v1zD81n9ZJmULgAaYssfG9XxTFSDz",
  "key42": "3U9qyV1CU31WHJ4VTJnw8NzSPxxAS2H7cGJQfh1rmyywiXE4GfWErc3wBJWyEMRAtqAqdXPPMbi8iMjfDJzYZ77U",
  "key43": "5VqWfBmTMYYkC7WCkjdkgYajijW1XABGukiMNjiWxMCf5x1Gi5zqAWN7s6BhGgdJg2bSRBUzkhyiC82MbkXiSFGo",
  "key44": "2U6QoxG84YarF162TviG4v9isR2DC7HcpuaiSGtnPY74eaJoXSw15ijhM1Zp6nDk1Aj5yERWu2g77YQ2MNspBKAh",
  "key45": "3LLwseeMCX99YLuuqj2xW6w6A1zaeqbGWPCyG8apxZpgWqhoEXnL8pSm8STwpxgcbeYrkzN9MLc86HEHvZHXK84S"
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
