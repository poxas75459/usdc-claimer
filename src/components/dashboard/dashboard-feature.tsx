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
    "pGJVmPMUimQRynmRx6XLqPvYBxfRTtp2bYNaoWjHA5s2N1ERt3cs8TjDjQeo6xWdBu43eLLAw94zJLNisGg2hhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yRMuU4hx2FNf8fUEeDzyQxeM2TJEHvKDLT37tUfdMb2No4F8WNzFcoZTzcsbyHJB46kkYnmis7efQ6dgwQ2VeKG",
  "key1": "5VVjKwaxEQcrsaxFzYMm9L5Z1Qu1zRT3eDj97hcnqBxDqGUtjuyQLtTb9LU2iv39DBU3qQSTmXkWxV2i4r1RQWXz",
  "key2": "5BPyGdnGBRX1KAMxQKtmcTcCRCHtqNcXcUt3cMqBwji5o8u2Rk3uWhXxrH5UwASiAp5evpmVzpBdsEa9v5REDnKM",
  "key3": "49roRySHmcuTDPFJYzgMgJihu48LRxunwZ2BhBvAvFJhVA4X2nTKcUjFMnjgtxPLYAQFPbzxqeexaEsq7j7o9hrj",
  "key4": "5s2AV5Br4Mkm7KBLYNjqkB682LgAsxdpo3s1UGjuDFxZBYPbrMQgzuDApcKZB9VcXzz23Tf5FZifJuQgVY5Lr8xe",
  "key5": "5JUQznsWKEuyWjGyHma5yMNQMQdthFhC4mAXDubC5wAV5gmhf7FGoh8G6tztfM3pxWH8R8Z2U8CA9zzd5Cgti42p",
  "key6": "5eB7LFnmwzbeFhbxaUFi74SytzrXRJDC2MdDsXqiancM1gpwekWaCTsnoUGC8GS7vwPMWhLodhGNSBZfH4pXQrVZ",
  "key7": "4u4GNDeMENZoS4qfmQ5CgpJ4WFzk3cPh7yhaMZGjdMgxMo5QABoD7TJbyAUuHWPVJvjAb1Do37ajn3g9roDjPa5A",
  "key8": "5njZZ5SmJkMeMtQ6BeVFcjZpuSYai2CAKMJugsqkBKZAzW7vBtrTG3qs8iEm8sGE5221UG2D9REMnPxhz3Qg35Kb",
  "key9": "bHRZgceZfbr6N75hPCHTJDYBq62629t4z5Woe9aLymytTB4md4t5NA5K9VawNdwVJ72Qo8WUn9bEz9AjjTTLcVk",
  "key10": "5pGWJfS4MDp7d9t9fvmoHDBiCRTqjUkhDWsaM4sQ66axD1nsebbxzarLQjkKJHCfPmmwKSH1J1krfTVd17GWvGQN",
  "key11": "2Wveausq8fukqtFwoMpKkaJtgFgP9zK1Y6y7W4w1xyfuh4rp7RU54iyMj2NspGaBCeCksnqMQGXVXxYsan9imBEg",
  "key12": "4Pmem6HArqsehoWfheheMkEaAGUWYRqmssrdfnjW2zQZZ6cqgeGRgDo31L8ZHXVB9hKhGnVFVEorRJYxsAiS8HrU",
  "key13": "a3oiiE3bHBNT9Mj4jtrjbgWDLEHt8A6zcXM3xDVivDXHku8aMUXxj95Zfc4RrvrTkN6JjgnsLkP2Fqax3uMJoTo",
  "key14": "gsikFFdgLtKBWLQiodtsawSbZyjNEqp6Pm5mqJs39Ca1yLCUB1bW43Ku5m4uuP5TEkmbg2jW56EVc4QwytSNfuR",
  "key15": "35J2r2Q12SdtQRo3qyYPgk2BUWVbSKPYofxdazbACiQgTv6WrobyQ95Nc19RoKxHtMALNrdHZayRPHccswwhXRgE",
  "key16": "2ywuwHHtmVd73S4fWeuaztAe6jhjkxZbxZfUeFiuRp9AmxmtnG2ebm3qtVhwhAkbyiiJPrV5YMLtx77qPRqGAXL2",
  "key17": "58rshS7hGtHMjUEg69ZSW9Eyna92iiAoNSQ3KhQZ1NfTBmFZWNnJqoJ1FNvNxjVoqB5RYSXSxXq4uHBa9Syo6QPS",
  "key18": "CF3dYPN5dMcWU6QwthbzLvuEK5MjkF5g9Euf83Yco4aBbw728Qzh7bh4YHyNBgpx2EvuyQT7hak57Q9HLm7QREX",
  "key19": "4228oofuwmZV14UXnzam7kQp8d7BQZRLrqmCvrxjZhKCMxKc1xfjizYB9SoNh6kz96grwqPTwMLafd8Fvn1sBdRE",
  "key20": "2syQxT3hkDL8RTbYAPH6wVGBugvdiCzJ4Wu5TrgLguL2B57CFyAoYx3emEMDkdQH9ADCNTfr3AtDKYHRz8wT3keL",
  "key21": "NpFbahn3EDcceybWcaMwBJgosXgwAqjL5iDFWWKpLoH2bEvbdbviEmyGgZUozMzCH9fKDLCRmRSV72mVMFMAGP2",
  "key22": "S1ck7Gm55Gero65RrQkRKk6Hr4wbDLJdMw5MkrkHfyH7zH5actAuJpm4VAkDjAWrMcoZgiJkJunrXtPQsAaWdj6",
  "key23": "JZnKuovPZmU4zX1AnkPgdBLhx6z3Yutbvaz5LRxgk71CKxf9arauLZWgPLRC9py347DiV8kphfRS3iV4JKbmXmi",
  "key24": "3R4mDsio9oQou5Mkib8AJHaEaYDBTtrBWCH3ac49RLzW6xnqGMn5VmnqbtjvyT2F9kgfSzkwmZp9LPwWEwnjxxdt",
  "key25": "2J4ERYsZ8ZcBCJ5rgMKCNW8bowQba5D6aozHDpYAH2kznhh4v3DLLgitE3dC5ZMqVSGqpTgm4P1pMVLweBgG3sHy",
  "key26": "4az8axGMcEQc8YNTPXgyG2csAJo9ytFtmCZB1bWrsKz2joMbuJYeiJyPqQgXhox7JibjWWpPAKPPMBrFd6wGRB1k",
  "key27": "5furaKa1RwBGGxgsCdbmBr2FucVyfEi3pGpHKfqLZWrGpwq4FLu5ueqgWaob6yFRo2E2mpcsxgHUuRzk1tdv1UR9",
  "key28": "2qzFWsdT52J7ENoP39kUaCUHzQBJkLKiNTD86DKcHHA13p9y2anL8duxPtxsADRACdAZjr3V6GqHyVzWcGpKTLMN",
  "key29": "2AVmf4ZpVuVq5AATYAZYdyFNr7qMntqPzaFJ8EQJJCSYrCsB47ykPpc9kcphJaqv6i9Gsjo3vvVCta9aU5aD6SLd",
  "key30": "2nthpRtm31S3fy8gggfQTnY461KHgnZLM6dBDnVUhzE5DRMqvFFqzw7K9oWcod79SFqoPqvDTzA9evkWp9wuWFkk",
  "key31": "5LTRWLjdQktLxK2u8ZZyyv8bttWkbsVPnScVZWsXDhSThFQNM7NTR2GbbdWuMLS3v6U7QmL3ewUzkYbbP2NS6Qdm",
  "key32": "4f2JJaHM5MEQzKkedAAufEkEeJjNvYhYVfpPkoCfDxErG4zp1QsMxUnvLAHpfBnCa3iC1B8xGceBfqsuVMNSNbKk",
  "key33": "2rn8gxn6a8pXLqYRaVxrVs4L3WtfkJ59GgGwNDh8F4zT1ZH1hZyDTGnEPir9GtW3H4PHxRRni5kYLyWXay28yKAM",
  "key34": "32c6PKnQAPfAFggpifJCYS27NwdetEerGnYpA5tijFdJAvhMdSeawewts2G6pxed5RL1m7P5PV42QMYKU2qkUxLH",
  "key35": "5WzLK8jfP5FPqpcfy4xBS8kB5xQ4cz8FwVG3HRntgJSaozvqYBob8tFoP66SLCNtNLbFnsmhd748LsYdSa6h1fFq",
  "key36": "2pu1Gi1MnfvcbpbxzexyXPix72bnDgyK2LrW8Z45y68FyLAPKdswSbioyzV357vjUSeLdmGQUKqj4NQL9fjfwPDd",
  "key37": "2YkgUoeceLJrGa1Nvm2b4jjTejadm1txkmRYHyRCdLyDUQJ1XAsidjDAdczjKsknFnUH1Z4FYddd1ft9nSYsmGr7",
  "key38": "pG7anR9PVsVqvUSvWxzmDpN4vLKXPbRHNMpezbykVG7dotDkH4L5LN5gPfFGXAg5iJvkHwpGFnei47vz9VYP5NF",
  "key39": "qQK79toP59m7FaDkFTmzyEvQKfLFnVQ9cg7vvs5C6uMg2x2gCcFoSDkJRM1W4V5thdQQSbw3G5dHeWPZsVTjcBi",
  "key40": "3SRkKdpCuXHMCbwtwXyoZuf6weP6dxzCtUrscnxcTuvPjcC93hx5Go5y4bswriqkKiPLBr7yPTKjSuVxESt3drcS",
  "key41": "5ukEpASTCwCX4k1yJL8aNXUVM4vepKDrh89em6Lhni3LHRJrKpuJYxmvsxboS9WQsnHzCQJt592zh49VieYT78Nt",
  "key42": "2stWod3EgdKssTiZWGCxtC7FjaGFHFDFmC5JsdwPzp7fBJG3Hx4fq1eqqyuu3WGFM1QJR9m3auP3J9y94RgUToV3"
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
