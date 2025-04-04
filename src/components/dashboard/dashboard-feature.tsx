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
    "bCTaqRePYytLUFmZLJmzhwvigsgiRDcm11Go8qvGKuHHe3odiujgKkzUxB7YNvyPmJwfgSBuffxdXnyf3k3XvPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "74KFWubW1Tnko9JeHPVLg1kvMZ5RXh71oX5Snh6LPhpu8XPyQG59o7x3ubopXeTTwwU7WCHXPbsiZrjhFGGBmGG",
  "key1": "56dq7U78UAAsvJWe2dCJxwd5LDV2Lyd2VHGbeKj5bJdBk4iDHvySYsrW1uunou56d5dfTW1bGfh3z82R1VHxHAX2",
  "key2": "4BPUGfsRXe7D7TEExCgwi4XV2vPTZhdpNoyWgFwXd8DvAsCTqtg21SPPV7dV1JLcr5Bu8sNPuSc9piUB9EhLbSHF",
  "key3": "2iEawuJeHJBNcWqe8tttkuh1ByFhs3ZfcvUP36uccHipJh7kkX7ZUvJdocs1i5cKibD5BiieRycTqjoa31eyrkyt",
  "key4": "5M21y8artQ14Sw5hmcsGZDAgqmxqJTkkPTGHsZVh1V6o8LzXk7FRKdwGesoMcqaD46GEpV8rcT92J2FgnRsKhmsL",
  "key5": "2tBzmRxMnBzCocbpF4dskGDhz5uAD6VL7nK1e8i5QxmWuZRNxFkR3afUVAT3wod9JV5otXypsBhQzkLhmzBZWGju",
  "key6": "2EWUNXP8WoZ77nb7RLU1hoKSkC1Q8GNc68kZf5JV2ChZzuJMnP3WsRAzFEm6emSqFyKBJJwtWDCh1TuosbGfbMXW",
  "key7": "5HxFSHTzVQZ1pQYwKS7yD3uaj2LNkdxL1qLZtFdeAVUWU68cGSiddsuBLx6nzQyz3ynWkpRWYTXoPSmkEuH4tNYh",
  "key8": "p97MEjEjnesvn2GaTbDacu1GJexzfyKfU6XgoMGU8oQKzr6gyRvdqxgw8NCfp6EsdUXVPN5nMvFJR1ib17ZdvBk",
  "key9": "31jtyezwbGviRtuVfS2DYsfNFSLg8JgLeaHj5hZHyhc32mcF1KdFDQF5N9FfGJSL1FKeW7yY9NuzfPYbQoDmXoYH",
  "key10": "5DWUB7Bo72Qc6yiNStdaMzHCPSYtgcEDAGArsVmKaUygnWywjpUwPCLt51LX88azTVe3SRak4fZfNXC1Fd275R6L",
  "key11": "2mT3hBKSpkqATDXH5uEb6PUcLfMnzbyP9zVZdkbeWFQCocPALnBot5wxnU3JQGamKE722ZgtuDjTSUBgRDRjYsBv",
  "key12": "29NwxSKtuKRRFQQFziFz9upUdNdEzkvnnFpyrZvw1sRjhPAeb9e4oM7bMtH5sAjqmQS5YSzBNrrcYxtKGEFvLxnC",
  "key13": "46eyCzrwMV5X7Xd2oWdEPFRzaXF3SvEdtLveGM2sYTxiees3xAqRZzZb1qcNkoorGMKey8rVMTWyvw452tiZVrES",
  "key14": "2fGLBiojK3HZGWDr61Tuj3caVm2NQLeaYd9ReKHo7vxkg67LzieP9uLRLRFXSQXCkbX74CmnxJ8yHE6YfuNfTMU6",
  "key15": "wzJDTt9ANXbMNJ6NTKBGQzTxQPXSxEdzRVyANeqXHYgLM6arkXyMatU3XLTU92mxifoZpUuJwym9C6ScQJRM1zC",
  "key16": "2jTutRMYpbFJnxx2a61mCBEejgMQEfytCRivMy4tUGE66U9dDPTPNHPE8iaWLMBKnD1s49LTTjNq3Xo2soKhavcm",
  "key17": "4inaY76BP5Jg8huydWNrz6ViZ9HQBqutpn1iWywHxYoUUGGGxwHNBWG8bUYvuR8ickGTJwm6hwWHpufckrj9UAuv",
  "key18": "5xUKtwFYRQSgwAaLaAojqTfyw2QeSF5HZrRYUo61KSQ9B6PweSJBJMRd9r1CHhqrB2ajjpY9stnno6yTJZ8zrMTS",
  "key19": "5tStdVxQo6npxZrsDimXLtC2cGCxAcJfeA8yLictaBTksJqwzaikC2ZBVf7qso9HuN61K3a1H37jzyYkfvhRcfi9",
  "key20": "2Ainfi2Xbt2xfo9mMtqBcNLX8c8r4GzVEtNwUYrcfSUmNpS5vN8XBYipacmJ3DV39ZVAGjHnCsUKeoiyozH7U2UY",
  "key21": "4gbU6fvTj23iRiz27wCesrXjbhkTsFCc5RneUDjobvuRm1RTAxQTkCVfNKRykjh684iGnKyAs4EZtRVvaWp41tLc",
  "key22": "5xwVta2HxyxGGx3TQaTfeW2p3mTeGmY8KBKrNRmAn4jCkBh5Ns3hPaz6E9583L86v7iRhFjg5i5yaxez75ibRQPi",
  "key23": "5ZGekVuNo9ShDtBhzgWxZtBAnuB2akWYtb318TUT3HNGPf9WYs2ZEo2K7MeKzMRbftByXhQE266nUXZpAUwedBgi",
  "key24": "4atkgbMTvKSsunW6bPhRCGqoecMkFXSrziFJT5NwWd215nvPN7icyNgfdU7MykVDKrmSs3ZsCZ8XGKnDoxYfe6s1",
  "key25": "L9mr9cAJRJVRFkJKZv7zpXLpEBqi6yAy5fiTDUsbKVVnxMmQhQdJ4Ha2KuN5gwSF9evWAhtVJNbG4dG4Xfrn7si",
  "key26": "5qSoc3R917KpeN6mHhbKgKNHpVLdg8LCEdpyL53LiJJHBMqFwEA9T14vdqQX54DwHWe2cGxjszLkdu6x1JSscdoG",
  "key27": "Jp2RGYDFEGkugT3CVqkm5gTP6wztuaCyom5oqihRwrTuuXm2S4w7oME5vteYXMUm4CWv3GthF3ZetqoC5dsRSU5",
  "key28": "5cQssSG9ZrtjPcFJC7ztgMoJRDbCeQqRZyMqsZm9tEYM3qwwSFaJmuBypGkpjLCLL11PySVJMmzAXYPQQv94a2M3",
  "key29": "xZS5UPu9EM86PM8PANTVBJ4xaDgKg45vbdma52Ts2Pg1tPDZDLpe8qUGkW9JzDYuiygJnJVp1oHjh4taV3HXZ5k",
  "key30": "5xi8J4ceDPQoRaS9fobDoqJFzKXWufVaKCDJ5JcRLtSubtKJVsgQUULA1QeAEZWR7bHviWAj87nv5vCxFuLBjunu",
  "key31": "2QPZYPmULhreJ4VbtWPq3gBTkLL4NF1JUf7fpmGpcRdKACqogZEwCgo4N6s6wqbDicqoPiHANwuVzf5xafHwZcHT",
  "key32": "2vM1tSe41iDSAiudSLGHpxefRyaNbLGgV7uqKdLRurYUkEnmRDgMJCyZSvHWM9gE44XvprbrTpZfQdW5qPfjyjig",
  "key33": "4Y21M5jEnPdRdgvfGL99Jww6kGwyhok9pgwammDXzL73DEb15UfTxAPCrdBuksamqiFpvBqtBAg7DEXiBQ1iQLb",
  "key34": "26XnUdYTXAPfJcceY3cESEdinJ1tRXSuAS66AFg2vaHrzerR74mHaJK43yjFxrEkEkbsRyd6MetTebtyqNSgnwnd",
  "key35": "s1SWE6kxHMZMqN3dVyiXpyfWuUSnWh9E7fihZW8TeNXqS3ZrcUTVtbZTxJuCSG8ams6gGmuhtKkzyBsseVkDcjm",
  "key36": "31NuPgcYsHJJD9G1qnhK85eGKQM6ErU7ZDUTfgLpzKnTR7tXdnj9hgnZ7z1d9b3Wkz6tCZ2XS4w2CjfbK2w2RLpH",
  "key37": "3Q5z7y2ryY7B7drcaN4MVLYsZRRwKfewSJN8gfw3RYrogCbjKZSMwm822TuFLM82SaaLhyD6XYTVvcKYdpvPvmCx",
  "key38": "jiKgEuSUY4zydzHhThsfZKQAgdjVnycmma44yNmvi6FV26pJ8iwdtXxT3YRzRSecArFSdBJVQ7ae9F43w5KD6Fz",
  "key39": "ncFswkgcQueNJDCWEvjH6P8aCjc6xueBKSa6d365cBSV9bbtZJV3bZauD14AxPDr8qGctCvrzbFs5No4s66jcNg"
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
