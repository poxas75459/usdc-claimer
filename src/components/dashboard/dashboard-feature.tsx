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
    "5CmDkXac2cAr4qCvV4b1vDxe9Bxznqc5VTSJNrehkNkvuRoGxGVDRjHUAHiZhwvYdKMgmDa5A94bAfbve77vbGrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8xgoXcNLKeqpanFaNUdt63q4NrnqfSuJ5pBV2Vcp5rT8ZjHEFJxQYahuoU7Gz9sxEQgBJvgWpZFzfQSiENMVpz",
  "key1": "mxqFATet8kWMb1tnYfeVNSzLSoCzcNH9bBikxEoxQRq48Swqea4v494XSotwHvj8bNVaTSVvGwS5QpKjZnTwMLx",
  "key2": "3UgMRUqKnSK3e9VNsbhBWFD1BU25iW8fRPcxSowNLiXkAKeCNz4E13BpVW93XnDHVrfPcrbzR4nTzBFvwxgF4DtJ",
  "key3": "4SHYfUKdcNFRqB1ic4Cpu1sbQwBG1xu2BCnj98jKJsdX6RTENj4WAGmU7VEyj83Qa9xAhBa7dh8VRhxWKqKWtWCC",
  "key4": "2jh3BbLy9nH5SCtAvRjKmu4mJhq1gdEdhq8XZxXtt5TCSfVznSxVdRRpNELayWPW8XUnyC4eLi4MR5Vv1pSHhHE7",
  "key5": "57ryKLrxMeRv4EcRdmgvTXG27wMUYcYWVVBJXr4Mm8TkvnX2dtDZWMkfMxe6nY8yAkmT5JR8T2dHzwZmR3Gz2Qik",
  "key6": "3ZmYt6GY3xChrnbxinN6uASM4FNBcCYyedsV8YVroSgGgg71FjEzMeY7PTGHpAmboM5mw91Pn6zF2F1o99cs5eZY",
  "key7": "2iVpDH1z7sZaxRDjNFSJWpFE3qDvQWek9LLKhqLbEU5RsoCaMU1eQJwQ2mwn6mbvpnwq6gYDiHqV3EjHmjGB6erE",
  "key8": "46viLuxocaZmeYUMHMSAg4cMbEARJ6u1gXKRkSjfJ3fraN1FmFrjcD63FZ9ZUHPU9PP5PZ5YhiiEtdqRx2vjhxta",
  "key9": "uLig6PeganfNokN5koXJ22iYYme4ZdpumUrGQezGs481sxQJEPMN7tAGd4xJmLpV8vm7xDx541QpPpGxKykraDE",
  "key10": "2f2aJpVCUNQFJ2wG4jui383AfEmdFqUPiz1ZpHrVxob9uoWw1uiVSYPFycMrjbdwFYAfbg1iShPJSesBgPRJeyTb",
  "key11": "5W8qZWAjd5wvNTGcE7prDsxqrfw2WzxBQAcEypiYbtbaQpz9Dtki515Mzi9pFmB4Nc3EAgdoQDRDaHi7PxiMquRZ",
  "key12": "2MZGx51QrGGobvCvyEewNvcCkk5YUt31JeYysGG4wPVTqJCGciqvg1cgUCTVTtoj1MEwxsJCNGbN545bPZDDLNpV",
  "key13": "mYZ7pU4UoeUURYpKUC4Zge36RaBbXfGZPoXQ7LZBn7PL1stoYsGjbyDzMbMT6zBcJtmpq5nTxbmf4NgQMVpiRd3",
  "key14": "5nb2xwzcL7xq3bXfBX242DRsBWDtZbFsBDdFRxvtdEDScReGzaAtw1Zfryyv56RF4EPQXENDd5UJgMGh7BPAZChY",
  "key15": "3FxkRMYCMhAvtQZ4yXnf7Xuzncpce9DBonHMeKVFhUoseSfGwBPzgun6tEn6TQK1E3Tpm3D9pATYGZ5tVRABJ4dt",
  "key16": "3FRks3BYP5RreZBVW9ou65jN84k4AanBVFkkSnSF8tnoXmtLKpznZM3ktSJFbJytvaLWVcUxayo8XJBerYfMtrTi",
  "key17": "4YiJoN3Mnvygq2KHZWmxTxWQddS9w47XAWAKDmezHLEBGyXcqvpw6QZwvQCeya3hYK9UWcxZZsqjUFZtviBt6vJX",
  "key18": "4frfsxdWNFYFfXbPhco67DdSerzKWUrgnqBwKLBMCMTEEcgyPwtGn6YvG9BSdKcC87mur6wwYb6giEVYTSFt5Yo",
  "key19": "2pUTENhP9XLqmyppmn2fsWvwbr8Nzx7qRrqypDe7tG1mwr6szA81D32Ki2LfmTJKuhcnzruaiK47pgEvLkY5CuoR",
  "key20": "2D5qDiM7SMYJ45rsKQKEVJ4YnvNqoAmgejRcGrjqbBTtiQTKC6Xp74Yt6UKHs7smxka7x1fZKTm8oJ6ysTgy9EWC",
  "key21": "5SSRYA492Egv98pAw65eRgjXJ47fwV4KU8yd3YWQoPGCWreHuKYjowfdPpQfw1RLmKaQbJyKNzVpFRNAKaPeNhLE",
  "key22": "ay76urRkZ3gvB1BEvo2QE1rgXjJJmDXAp1nbTTEpV7SqVHV65LUzaa45Xpr99jSUNrmhQvwAkW62VFEq59ztRjm",
  "key23": "5KnLWzbFCxRppLckwPAXvHr1HuYiuBv3BJQeYvsT81sq2HLHLnCDtpzz6JE8z2xfD6hbSwVQUY3xBgGRyyrdLfEw",
  "key24": "3DphhNxxV127C4iWMnKcHVP8hwpK1zqRpZR2JxxjHV757snCx94WyaAG9CvzxqKEJyw44n3Bko9m1k8wG3drLeny",
  "key25": "4vNjAMHaMYrXXbZ98HR1TPrHA9FtheKD2bkkqeYhfGjr824VfEc559N3DfkCcp8EEF1XXhpZci9hQYcyQuNufmYF",
  "key26": "3rN69kWFFHq4eyxUrUktv6j886RL9DBE1vhv48wGWh4UgPGuuH2pAjurySv8XHA4u5Yc2SLzsVz1nY4ps4s3iJeU",
  "key27": "5STEQZXWAEGXFvtDafw4nMxEuW8tGbcua5mQ3hp3NiR28eoaipUNGxLJAMJWxdRUtqT2KvyiAJYf4cw6MH5sXAWH",
  "key28": "2UQymycbFa4QxHVAyvkALWFwn4aKAZ7RkP7k4Y1z7JF83mKfti6P5m7DrzZyFTNV4i2jkFNJuKzuUoYjsTeBBLN3",
  "key29": "66zwUxqK2rDdNW4eiAZUk8VtVZBEBXhsXutfWfKDghCbQCzeqrE3yRKLLitQK8HyoTRMcRjBhNUQu5E8Fq1sGJYu",
  "key30": "3yxMTkZpq76mTR7E26iJDRTu9JTzuPGGUJJDSmGFyYA7i84aT5ufwoERSVwHTpFiWpsKzBcnxYiYjvCzghok7MZf",
  "key31": "2d4gzYe1UNF5Zh9mApTafXo3ACbR7BEjmpDHoYxFJ7xzdreV1kcFYiPeuWgqJ4PGQtQfqwvYsqUxaZmyQ5XXXaCf",
  "key32": "iraKuZVJdwbvaQYmqJTzqV97TFMZehRgWdPnDQXRye9rUVrUhWdogoWm3nSf4NUpJ8SYWpm77241MA38AEQcYXJ",
  "key33": "3uF7f4htqZnTqrUvE8VNWXyhbr7dVmKvdjxfzMdCd5wdHciVgEFTFdjfUEQdsqutbTvx6Av99vh3kMEypaWsqD3b",
  "key34": "32dxp5Xy8CJGzVmyH69GwdVCiGG8X5KsX59b4gf3Dtby6kCS6ggcFX21Xm8vyN94XoB2cTE6RqD8DbQtADrRUndq"
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
