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
    "hkWGzMUeF3e5sfoGHJyHgP8DZFmBFdvGabFE5PiJnUD4qwE7qmkd6VxkXKYKdNPSYR1MB5cfxHddhwpwBmuqaFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJa7GfbFX7qe9r5jxaosU8j2UfmLYvJkURCiaz2uTuzUxAeLWz1LvDP2pGzob2EYbK47m167bQUHi7M5o7vEM5i",
  "key1": "4AxWp73FySKpRJjC2sdYF5D9hJepAtGMKMRZp1bDtRN2F11bPgRUTJiaddjUjXvevfZd6DAzJ3VHMcBiphMRB8qS",
  "key2": "4YTe7ogyjyu1pPMX4KRk1rwM5be4w8SQPumg9qJgdPfNcWc9snd1rqZw7xPmDndEHDZqGjzYsCCtf7D53TR7ysiw",
  "key3": "2WH6bUKbHLPc49eZEH3zxSa1YjBRkVe4ngDWXRj3QfpxRAtXMp8QeZ4K8isAbY3Q34KwRE7rwfDg2vpJbC5WY3AE",
  "key4": "264Y8hMtgUX4wdnWvXyZpZJxaCJugk97CgF1Dxj8JhZf9yVLjGh6bVNqys51SFSi7jaaB1comdGtzesm2Y1wNRKX",
  "key5": "dwuvNnzFdDrbPTz7shQnyFFs5MN27EwuT1bkWiFDevmChHKA5Rivz2CzBxanUKGcy5sLuUg8P5JSYUf132FYPNT",
  "key6": "4MEuGo81xDxR4NX1Z6fQ2tUhCJdmc7ZZbxCKg2ssLDtRfYEqKBpgcobTohGWeeLvWwmeJKy5sxNYJebegZgfpbQ1",
  "key7": "XrGkEvUdPj3BooJG5WYLQTs8ewJNYKm7DMKq7TovvGmed3HPU3SYC5MiqqsVDsJoU3dyHHFFW1TuRvZ9MdUPajS",
  "key8": "5VapMmEFZqvFCiFXXGL2p2Kit18z1Mad9m3wspeGa8LAS7qwcz8xsX4xVzUsZa9FT4yaTYLS3WMbnv62Jr1mDQ98",
  "key9": "4WHeRRJGn5umuypxTog4hHqYkUwUmcLNnrs6xWN4g2RKEcd586QVQj2ZJ64HYRDy6pNTUPdVd7MbJP2vkvcbBzZK",
  "key10": "MbYZ4xipon2jsoedpr5H3r8J4JCVFFqvNNEGTEX9z8C7TivystccNMnMRD1b1Tfuvr6bSvwVkBod7bwxQ5oSv2e",
  "key11": "3EKGzhNNv4DwABXSYchFBAyWPuaNriMQpEWguuTyHPKwFD7BvwS3GM2Qoc8tzA5tBHtWBCyYu1tM6hAnwr4yHDyg",
  "key12": "4hWrihSVzXXdjCKKhMwE85Mnct8TrLaSZ4Bnk8bYXpsSfZXM1hhaENWJR4UmZ44TG4bnyT6cvmuZNsoA4wtJL9T3",
  "key13": "4wrXXNSZHa5GQPq7LE9ZG9xjpEsa37GvWS5gHzDWmQauY3hgZuEADAnHP2hJ6jZrDHdCMGRwHMDVGE3nfjrHBVMe",
  "key14": "5J3YhZZVG3Sx7ZcGbcKHi6kvFXSrwpddx5x4As2pcJhKpBz9DxwQgui3q5X6vXkW6VL8N5GsfvZpvn7asKRuhc48",
  "key15": "31Bkj21wAQUGaeAax73XUsNDupNN5Nf4QAt13DTXp2nWRGGFJiuDSu1BF3wXMxhRRmEBTgvNL5jJTEcPiRrgaDr2",
  "key16": "4zV7cWoHzbaf3Psb2FB1TB5nrwdNypffVmrX9myYPPoui1RKmzLxLmC5JgB3b43MNRdPfHNvpULB9RyZVnZHnV5j",
  "key17": "kSbRFDP9GvscQ86omGPkqiMUexjhni2n27zY8ZTbYjaAbxrTVDWLBbrkWmGYwyARZghkEZEDguoHVkq2Y5LiSJd",
  "key18": "5M71d6trcNK5PmYmx9N93s6QwovA7fMbrP6g4UJEheDGpFHbzC5H1WtkwXFDg7PkpF6a9ZYdfxzoptKiAiij4XF4",
  "key19": "2yeq4itrYDaya4XkY7neD91YrUFHYnijg7S5VcG9vKvi9jptj8Mv8qdETGVZMiVFMAtMypvcLCtsoGwC3MZruECC",
  "key20": "58V8b3bYFY6VpEVDbjR3jcCE8SxH5sz1mpUZhyvSsv1AQi4N6WBAr2DrCyDLbL11MxpFoQiu97cHG5xpkrh9ZX1U",
  "key21": "33nTeVfmb2wsXaPJFgFBtDgiYgqoc5p9ySFzyqTpauQYkiQ5aq8ZexswgRBKUQAW1cVaVi8dZutvYiG75zDic3Dn",
  "key22": "3TeagAeUcwpi3ZzJa24LTDRB1Pn6wMoAk8uc5qi7EW2BRmCY2MV6SmXQtnfuncwRnhhMahFpWK7e29cN5ctfNPb6",
  "key23": "2dwyg6a5U12zsciK2cUqGTVV53DxGwiz7QF11CbvKQuiG61FpWMnwZmrL3tVaumqP9BY2a7wAs2ziWUBY2cTcYRj",
  "key24": "5NASeQtgvEEUG1vdLY5u1wFZVgcvcQ6RkPxBqaEXRSYpLbZnjkfdSGAUbAx5k5Dgpcu7UMJsAyRF7QsE8c4qXbw9",
  "key25": "2wj5TZV2AtLF7o1UBJzgHaiz1DeB6ConvTUiJs9S7RsZAtAHEPyYfYVqMVaNGhRi27n6q7qG6rXGY2eUk3q1Z5NC",
  "key26": "36hMJZkRiUs8aimdFmcgn7XVxHeG5Zub2eseDpUQ6kXWjy9GY8p7bzZvQdFmQZWcb8rQf3wwNzz5oNRmF5kpJy7s",
  "key27": "3mKs2HDiuMEU43Ymc3kFvX1hj8PstvrjcMdvvUHsTdGCY8LmV9jkxzQ9be1eV7V8J3J2erUm48XJFRwZg7iCwvqY",
  "key28": "4o2XQQZd34R2cjLeoyds7AUfLPCjUMM22ZTUHmPF5NupQdLUL8sEEP5fP7ELjahoLf8Zq9isa8SxCvWiVjJSSdgB",
  "key29": "349xko2uErJ3Uxpo34dFweM6mtUrX2gAR8DRMx6m3Nm8vXGnnyb4AoaeWvKimkhw85MchBASuWP3wadnb3sh6ALb",
  "key30": "5rWHKneMtcQAPFCYW2bswgj1EBVmvJdZ7e3LNoqcKjQvtyfhGnX7Zo3uAEaBPg5LMhDRwfw6KPDZ8n2Vz56jLn2C",
  "key31": "2Uw8Z9SkV5F7UwJecVb3RDybPiP2eo4mv7jez34QMgTsof7DCSuLEPbQDFPWmFUnEAiMUxahTtCuRJskZ9s6zYAF",
  "key32": "51kAuxPzd2Mq9wocBB5eHicwyRjLSxvMcvihrqXPAt9qWw659sivoj5MVf6HN4EFm3b7k8sbAd4H8jFPmvhtmVJC",
  "key33": "5KCrwEnWM9RWb7B8XnRzMWYocewjyti5ANXD8JnafGCXActe7YFe9WvAV9eeEU8xhX6rmxor4YDDhyFKWeHpoTqv",
  "key34": "4XSAWVgnKuM6FBCARX9YseSmwCQ63XbXLMMfnr6b9HrRbdTyEk3kDr16NSshbWk9YyyEwU6uQrEg8spTj9bSERC1",
  "key35": "5ShmecjFVnsKyaXtko4YSW5SeMgBLC9zB9YMjGByq1DfBBnBfTMuGo42qDFxuXsFrXPjh9MijE9mN5ecTTxQ8imv",
  "key36": "3W4MLULZSwwHLUQDiuHwUQCPk7RhNMAK3S9W84YS9oKmN2wpwWTTY4i3FXobkzhKct2FAnfnXAPMyhPu8TvHAWtE",
  "key37": "5ktVEt4mpAn9tXXQ1kbSAz2F4r9LJhb2HbqppCjNUpgj2em9xG3FzQzbVYLcEwE9t22toKEjj1heMe3qvQWbCdm7",
  "key38": "2wgmebn5t1P45MYWS2x5CpwotWZk9JZdJg9t4FCwtuMPfHWy7yNQnRCtgqu9ypzFGCdFnH4tuLSLrGf3eSEWVEap",
  "key39": "4mq5QKfv4HCEEY4xhEqyaDJNoH11xt3E7EH3BYVNt3jZ322S3xwqg5MH9j4dwwKnCUi8zGPkpGawcCKCdeGfaabF",
  "key40": "5FfQFfdwy1WNvxBcMXAUbJU3aRoiCxsYmFuZhQXU43S61czkKfQbVpd6MdVuvcgoSt3ZV1qTQ5L76cTaoWgvXSgv",
  "key41": "5uf5uxEvtqZu1Xi9fkahYSNmYZtZQVUBdLHAXvik7hAD7aeA59g8EwUZTEgBGChBQwTn95y4HzRTgUkDYuaddCiR",
  "key42": "5cRRnK3LogMdbFhLBpUUHgB4KJ2KkkuQVvyqmrukHJq8WQU2mrMTcqGsvDRaTrZuzu7XHtVXfyZBeLWE2frqAg4",
  "key43": "2FvvbXfivs6Y3hcg2dM1UXkUzY4ZHikUchHmASMjrG4v7Cc8aiFVpFGpKeXirudiKb6NxSonJt2unqb51tqHwreP",
  "key44": "5HhnyDhEsHn7Bzb4DCvVN6FYbxLwBG729TgWTz4jjfArxjetawNMew9NkAGsVMK5JoaSTL97yKFJeY8mVFDX2kJN",
  "key45": "3iFUm1GJ3MmnQmGbfTrnPHmso1fECxvNScC8HtMD8oDbobwUvgBMXWY2wWDhS6BauqkFBe1F9dGXxnacdU1o4sQA",
  "key46": "3qhiLqdGhDkPFmyjEmZeLtYnfS48ysq19BBgnc6YHXm6M3SNaUF4r5phzCEML4pchFNTBx3N91ct9iVjk1GXYN1J"
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
