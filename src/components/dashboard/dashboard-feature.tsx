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
    "51WegyN1w69m681SXq3H3aFo2YrPPSi7nWtzq8QzZ9WMVHppn3MomXSETCRtKmRUja15qkCsbB9MphYZALrw7P53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aZUSN2whqjHkFwwQFUwv3oeV2Nk2fiXAVdxUXwTCbV3HUTYxgkeSEeqbAnDKSURQzBz19BJDURBXZX5sNvDkuiz",
  "key1": "nDrZghyMTq1ELu3j3Pa8EbHRrCiw2hydVsezXzFTHWbMAkkopMKdxHnAqPSnFsJ6WHqFGLHGsEP84RHhwEoQCeZ",
  "key2": "4YSWJzncBThNauiDn9hjqbaDnMbWQ7SvxYytL9sC5K3bmES155VTjeDsU5mKecrQBC2KZ4piMm6PghCM8MuVH64t",
  "key3": "4s48MpLeASTrpDeQ51D9eX5y6nPMJytTuDefAac9yp1pJVDiGttrdyT7GNjCn36UDXkCvV2kiY717j4yQZfh5pcr",
  "key4": "5sfhWUwSVubk91fMeyGAbtZZt8aMpkSRjsFfRWecv2b6GY1C8Mj4ejZzDpjJa7iZZwnC83dNhdhcaJLcm7YQwY4x",
  "key5": "4JgU2eHiaWCoJjTrS6DPJEh8WqdsLww5sgo4gHtkq712nAv5eRJPqCqCtQKyNiuaUL2UCTwnsFq43wfS9fuN9qg7",
  "key6": "65fcGcFmdbT9MQcsTKwStix5oSRGTzHjYyLrFfQnDPLG82P78KRiQGkDaDjLGLisRuqsQxRKgvMeb2CHHPMFJnrk",
  "key7": "4qcK3KRXQcVXawozEffPddnkL6KJDM9XmK7ADnpnqM5g9CymQ2Vsxv64TfPujDUT2EvvpfQoCpxfpL71wc43jUpo",
  "key8": "MA4o6iKrsjpPVQatH7ARNBAypPAC9LYxiELTH3EGhzNC5bn3rHALRJ2Evr5MFD3jxVrGiDQSE1L7xuQuwnZxeiX",
  "key9": "54rwnHcVbvj9P42PXZQBWHJ3teNFGERUZ3N1iRA9F6ajS3Vyhdvxy8jwbvwQpfB6XfgySMiCQ6YE9RofGjtUQbh7",
  "key10": "2fBZBBdGzZzdrP3TbPJJtM3cAJh2q6c4ePo1G3DAbF7mkPfwjNs66jkxDEE9Y9DNDoZg5bAxxYw6udAfrxaMSRL4",
  "key11": "2JqGpMS231F24iF4mFdzzvPVoKqeViKLbbybyfyqtfQU3FX4c7jLCtntZWRqmWM4gzQ5FFTdvm8MuNgCR1pGgbDN",
  "key12": "5xh4y5oYqDUXT18hAAWjQKVv1L1byLoqagCyZPYAzKucbcVZakMNQbfaBQNG5gR6BTs1FXQvpjHWhq9J9nnogv2Z",
  "key13": "3Ci7ExtVS4HcgAnh2f948oedM5grY7o4nrGsxJJnuZN8oxCw6XfNVzd3UeVWdzSpqbRwroj7BXMEpwFUAQfMS4Ve",
  "key14": "556r2QFe25QuCyWtPHDujppZLgkuimWFhUf6MNQsXTAENk63r66gjS9t6P5g5DRvubhzo8zHny5ULxkMaNtfQvJu",
  "key15": "x9RSTBcCFdaQfNhX3ETm27CrScAi5iRsg24b6LdTYDmQpx3qoY7ha1Qt9zbxuyPExEiwyCEykGyH8vUxyFwJY3L",
  "key16": "2sbX42HY2tNbhXYrE4iiZQkNeZC3NpNUeetvPxU3KgZzG3yDDYgSy7eacNafCmLQ3Ws4VgyYSKp6mffNYy3bii2Y",
  "key17": "x46duJL7F4bNb2MWLZGSxuC3do4zxLgaRKxodxphur8NUZBJQvsdcy4S6pJseMTHTptAaNeAmcBMyo1nNFfesZ7",
  "key18": "4qQbVgWMUP9DZaX9oQg36QTPTPQpxNzddsudtUK65dxv8Atb54v3ozusVjs2AhXjaz3cscZ7o6CaeEJYWq9N8K3D",
  "key19": "38A5f71jsGuTWfPHasRNYpjiAdW9575rGWXTcDNAZPRQXocvpnCKDCnQSXUScPiRXjrrXY2GzWT7hbBCjpSieQLq",
  "key20": "e4ok9mf2FwJ4tk1d7JiejWYwmVxzn5EYmN7bxCta5ro5WshVddUJSvD2jjbMwP2st3Eegqfyk8N5bxszxG9BVw5",
  "key21": "37dgp2Qc5kEPFwBfnKTMdzGvgZh8rWdyAJwULX3q1mCHN7aDmQgMVvigte15FREE1LhdzijEkD79kJUA8NTCUrHv",
  "key22": "59JHf7RLj7XYEnD5PiQ13HqESVYUzDG8yJcts4acAQ2LFUDjgcmH16YrJT6gJroSoPv1NrnKZfXXJK8UY9CLbsLe",
  "key23": "3LC889zXUbKBbvPsAMx4RWh3Sa1NFXESuJ42gMepa1hg2wpLTqspcpwChPBTtAmNVLaaqZPEV2BR7nfAsEqGx1yi",
  "key24": "4YgLCUeUTtcqMbzZqRZGZi4i9ULcAU7QD1hd1CT3keRN3PU6HwoiqFcUn46grWKDzyE3aea5ZfjQZakDy38dXs9R",
  "key25": "58QuuUeBFFfjNEESYktZuxvRb3gtuuEXJaN8nrMUNEwzsq1DPHSNhZ2A2XnWsvvYVBcKnUpbTHe4KxFPUmAS84w6",
  "key26": "D7dNz7a8L8fMmUCnuf8dhyMZkCKTo7GSLBayvveJzskVkH87rG5XWFN5RweEcjZmHUYFbUb2uzQrUFa7En7Ea4J",
  "key27": "5dsPwvceWNqobicnYHK8vHtMTFyx2xfEqj1PSRt6kG8U4j2RrPv9bvgP93vpxYEdm44NBmcFuV8Zyidft7RULDeg",
  "key28": "3vnaTGzaWHT3kU47obLvyknT7zdKBVYLpyHCfBStDEBz7HBK7WrEr96KAot1cv6nTu3G5Q6wTFC4V2hbngepisUA",
  "key29": "2aGiqQrMcrViLM7wmpYgFEBpBy14grwper4k3D7emzQgQEvjHLiBgZogFE246biepvKMoLgPQr5Y6dBG69vNULzZ",
  "key30": "3YC8rYvPF4SefSCjAsWnTRbFNFHYy3hu3j8VD9rkWtFnsNZ91ALAoDrSSyysmPvAVVHBD9sGLQueffm7bFDXHkiB",
  "key31": "3h9RyBju7zM8wehe8wH4hdDkf2WzQ7zeZQpyfA9TgRJSMuaTfETh6Q1uUfEovj5mgAmFno8NPzZHAqy1SfeR2qc7",
  "key32": "5RiAecooDY421zvBLG8PimQmhFWMmv1QjVAyQCtqxakCpCeTBA17grnD3QPH6Ck1CLxpPXBx37Vsm2BnxgfmrUg6",
  "key33": "3Go3MkX7AmdqQeSQUJrEqadnhoLi4GSKizW2TtXnWn4FDvJJV2Ma99ZueaQibt4XFLTHny3d2oxtzVs7h7Yf6rKp",
  "key34": "jDagG5pL73KYcavs3mLckxLMFq9ACaS9oSt3HoGbTNTCuMTK5q72LFgZmKgv8z2eMZTUfN31bboJeuQEFJTiPEn",
  "key35": "5Vb3APJAKqQScmKD36623LQXUvZSvXH8npQDVp767CR7pw4BG7cmiRJDT7F7TnFD8pMrnNNMc8DgA2nb3zqw4jn9",
  "key36": "mq492RCyA99m6ddBVfwoD2M71yBFNZAFwdmh62e9XTZfs3kaqnbUPahhfEebbFCViggYaGhc8AAN1DH4TYXjDnx",
  "key37": "2Kne7K2EbEKaoh1KgzK4mh5dYfsm4ffKtPm3iE2GA1z6uuzRmr88aZAdjm8xcVYGdzGE4Uxc52tPGsmqWxySCFrW",
  "key38": "3nEuBCLMhwXXmuBmE5RiWVLm6s1XqpZFvjURgsGHvCEK5ajEc5spQbkX1kYBgfn4EBMzvBa1snKaEuuZ3sofuwfx",
  "key39": "oyG7F5MduBG5w5RMJf213kZPT46QFXFyMPeiQmtV2pSnTuprBwm7zgn8GnQojbz4749qQEHk4gBgY6qrTq8HeYR",
  "key40": "NpcTs2xgz6QiZSw9Sazm3Hb6LyKebMNdf7sKaFK3mkh2qx6wLbHY2XAh55wJ9S8G6JVWoEY1dPgmpoB9AJ7Gbge",
  "key41": "5Ekmn8kGD11Ziq8zZA4QKnuGDzs5JrFSEYsLZztfZLJKEoizxWLeaRgBRc6bxxnqj5mk7pgvFc45EP3L9aKdp54f",
  "key42": "4pDEPMKXoC3SNEfxm7RYDuY9n5XPnwKPHLbR7pKcsSVCGm8H5zR9QusJR56tiLfypjZ6YXkGsuRmvE5wDZjYxFkC",
  "key43": "5mbwPVhD8jTCvu5B1991V5HBM6L7Dy5kjvbPQmPRKov1KySXqhmf6crNASRwVigKB1mafoejj3GWKbQv4CovhYcg",
  "key44": "2WoiGgafcyT6W8twXGpu6be2NVJK2NaQb3yHP4KuyrGNqJAc8iCV5V4xVcChnTk8xDjjSK4z8yJJBvVvFnBNpA26",
  "key45": "KuoTWZeg75zu1CwiBZHm1cWWnxtZYSYG9gzH2dWg5UfnWP2nZUE4rmUXkJPbcqJwANUxA7kUCg4Gg4ZNmqPmJ6v",
  "key46": "2opaGE56hmXsQEgSLAZ4vi2u4DasCXyMnt66Hs9hYuQVwsP8vBqXfEDhbZjEpBcX26azwv5eNYaRMu8wdZLPbFSP",
  "key47": "53L5GzieW7uvg6pHYkaPZXLEV4vBp7hzfRpVfWp9SfgGvTABbuyBBdWbr9ZmgEFSvDwesAiGrqKdri6F7rFsiK7J",
  "key48": "4QcKtAFk6JXNR8HnVbNtb8b8yJsHgxpSrpdtQYAoensWhVRe2HXxUmE7BqLjobXSU4dbpuCHKYuZXHviVszN9PF7",
  "key49": "5rQdALQ2ieiTMnkxzZkViMmJ7BprATGU7JjU9CmSv5HmUHs1wJXbrKx9U1KANJHoDiNTk4rNuTiwE97VnyqYqEV"
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
