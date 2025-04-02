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
    "47LpPfeaaieTaScVvTo1CQmx9LZDhm5fUPjesFVaHYYCc1k1rwWjRcFuy2sqXLT41Va3n5vanV2CQPUieVnNBffk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JnZP6E5D3s1XMhKsR2S5StogkYLrAhhnG9j9XYXU3cTdHz8XzStjDb1MMEk31w4kKMQdBEHq2vQArsy1c9wuKg",
  "key1": "5FH3AJZUe4P7L1aMPKH7wqW6Eaa1b3pj7jzrUCX51RyNjfQiFxXuaq2FUBE5bnFcwi2zkuDPMZb6zBv6Any8LF5C",
  "key2": "qV5mx1WmArGrMToPxmCSah5EsWR6CJC8ToP1PMZDnp2WoQuRFXwvL3A98Y63uM1GhZ8vdQRZ6sZt8PFqFjaWA1C",
  "key3": "2rzFysHG83xsoK2B2HWdhJGn6LB63BfKetuHYsY39HX6nzZi7t9Ey12vhs66FPnDhTACi8sCgMmKWweUu8GntLGK",
  "key4": "3AHLAqragvkoqTffrKi9wQYjqhojPd2MsBkvwk6bJTDEVeHfhf3YCWW17vFbKL8GqRA4cMRGytoHRC6SpckxbZT9",
  "key5": "3YoTyYvDdjWMf9es9nVe7Mwx2fDnd7HQ9j1M9wdR9tG8opSazALMN3WXZQPhyDGGdsz16mbKWSJcr66rjzqafrvy",
  "key6": "4UTzzqjFeGK7roK2UUcsSkt45ph18RkSRBzGou87tbYKdmZYKVNLfunKBX25QDtBp61cDZwzjnQGKHmLFRjqMM4s",
  "key7": "jNNnB3tcUvEdLsUq2iXvcETtDJawMC8gMpQAE9pKQ34GHdG6hHBeaM6Y8z7mcxqAnWZoe46GraKy8dzAsEHojug",
  "key8": "5Tnox6pWa6X2fgRnRZx2CE1cJQAysMxEr1JcyAESV4vWKbMo7QQP9GK8HQC7KQjQpoNkkGD8zhbAt6Q7Wj3bz16L",
  "key9": "5etLxXWogKB7XvVz8ULCWsWcSVJt2KqUPKB8p6me5jznhjkLSh4YpQK4dv2wDMpsPfjxbvPoS5s84xexQ8ZCbDD1",
  "key10": "49W2SGwcSXZPxW38jijRhAiSQFWkj5wf1QKP1Awy1StyQ51YRkj628WyVwnpXX9Z5RyDTa9sNEEWKBb8em23Afzn",
  "key11": "3wuv6Gnn9Ukw4SAKFTjLu89JVYh2Ssj2AufvSWAJhMXLCokt8ffhzYcWWW5uizSe72FtUcMUFs7gZiHN58UJ9okd",
  "key12": "yH3breDZ7XJ9CQY6wGiY7qSwhH2w2SQqzJEV3iWf3BKDJTp3EKn3pjLzpSGLsJmce1sydHQZM9VuR4SvByE2ooq",
  "key13": "43MLHDiRfwhHzd8PTqwQa4U8zfDunN1wJdRgTsqxPr9cMxEsRkZvVrhFBcyyY5WaN17794zHGHDNiJ5xE3irsrzK",
  "key14": "59aFdQ7rBA2U6VXvdLKX3faXurZk14ktP41M3Usj1NtvA4HtxJPwVpntXdqK7JzdHZXTbppKKTa6HhUBBXSZVJkn",
  "key15": "58wTKWoSHBy6MBrHyvHp5xkNK3ESw1N9Gfsbr77sSucxc4xyBmU7c7dQCKpFWky5kDuE4MZjTFjwncViEYYoBwzq",
  "key16": "2xyjmMriKWtgAVHeHo9iT2XwdVThbzWVBawNVQjYEubumuZVkaC1ce9V8JZyPv8Yp4TyuWxoUbyaA4LGcY2onUEo",
  "key17": "5XdXa2HjYGUFLcJHF83pK3Tau3YmAWiVZCuMHmPzzEUcVw69Co5p47t2utCrWAfeApWkhFy8sM4oeT46g5dBCD1N",
  "key18": "42sCT3NNfAaT9apdHYnDWM1EfWycuvUowrgEgsk2RkFbyf5LTmKYQwBB9ecyF2oAexueCagKSUTWSNL7B4dbkYtm",
  "key19": "4qBjeXFqWSo5dbw6sSKT9goft7auUbQQsbTTKb8DdhFQ2sHnCRTghgaQbHPF22rvkSijqvrCYADuoscGHxm5cSkQ",
  "key20": "65voVULxKzqD5ZeKDHccYje1KczbRzY2WppN3ynMeHxhFA2byHrrswca4zBqqGLKdytwyirXnXVas4wBPjT3ij2C",
  "key21": "4SAq9iXDgTHTjRpU7ZXSSbs6GCCWtBUMcPBDMsstbcYeyXTtGbj4tzwNBiANFYoA7JKWf4YW4ZreptAio1ec8uYb",
  "key22": "2WHJX7o39zgUwAu3SdW2XqpAm3sEchc2G5JhEhh46v8FxEfg9Yp34fiQVQehRg5TvCUTLxVyt85Zw3KQXd5RHmk3",
  "key23": "26zxbqCcDh6jGdiMmC5Z9RxjbV9u5mhP5nZrBrb8TT2JypBthK4UFdNGF1LY2hxSUZRiECqstgK127VvNSrbJs4P",
  "key24": "5psfKUt8H1VdxeEKBjH7DnC1EsapE2dDDuoce3SxrGo9vnFWAmmRsixhE8fM3ywReiZAPTrWzoWaRFvtgAZ2LS3T",
  "key25": "5nQcWCRA5xa48gpDRcT1L4bWvtC8SH3PmpntvwhPMPaMa7H4nBEYto6qLTUjUxSNTdiND332wna7YtzLkqfN2JYK",
  "key26": "45p3XMwzMrqumjMjgTGjvbpdDf6VxPYKpQ2biUGJGdLAPNqR5Y38ZM2xiFEtU13ZszQtk7kxsqttSg3suXR8UcBc",
  "key27": "3TLnjTUGeAGwHeocQ6YSVF3RtXo3H16Hgo1eSWagLrNbLyX1zrjHjSPdWEyC2eC6rerJ4skj6u1GtmeGL9eQYhkt",
  "key28": "4WW6pNCQm8ZEA51njJkD9fegE4MNaQgg6t1U7vhFwWmVLhbMzgDn5mw7CHY1my6RsH915SthdNm48GFri6nqDiDM",
  "key29": "4kfsWCQdXV2NxvxufvD4oWWJdEdMTyKX886qGhP7ZSosJD6YzNKGZqNc4Q3xZt6kSEeSNESeyxEKjaDyL25n6t7k",
  "key30": "67kjbohKpMTPv1CheMH7b29Vw5quYtam3hJuBvhGX97d1uDr4nJEyfhM9vjqA2Wm5iYtrbVRWmjAyRY3iFwwNHJv",
  "key31": "5PcLpRL6G3hT2hnprtxfnNxJvpzrMcgiX4kXu2Ko1o7N3uoGS1XGjiBdgMhHoFsc2TTKoJir9TE7EqqTEdCd3Xta",
  "key32": "31Vqn51GCRSwVkUarncYHGPFQT55xG5aW6WahUDdMn6jN1N7auB4nQWsTdp2cAag7U8FrdHtoxMk8SXipquVbJgA",
  "key33": "4oDAB1KfHqxE1Uj414Q7muTXanXpu7i8THkVYvuNVb2xFqwoZ9Ar6vjzsGri8htfPFUNwXpYyYyKBwXB1w99175v",
  "key34": "4cioTD3kkdf3NgSfZzVkG6xiBNGZRLiJCv12ZRRXRdiVsrtkieKs3pXvmc6vNGDWaot8ooiqZFc8fwrAKVSbrZU6",
  "key35": "3U1UKLTybofi82brcQjNundjzEyzdEQqpCA63G78q6SsnBU2GSfZgPWKsuQdho4NA5QuzND2bGLYDTHDA5huxyKv",
  "key36": "32536DJkMPu3pNCNo4zSArTBLpVaFbq8a1Liu81sky3DB3kPYd62vs7QeG3tsY6S8vWNwqdYPkxRRLCBDKwsVsjj",
  "key37": "65xTFurYUTT1YYKVbpdMFEdbRqnhMitbXZm3yKuDTGrjtiT3bHcQGkQ3gdmp2VWUecKLMepFqBnKMR4d766yFt4p",
  "key38": "52A8BzdfbTd8WmKHJtfYDJqZy4JqB2714ypX1HBDt3ydp2aidTvhYXfqC1CB4D5FDTXVYm2oSyNrxkUG3UiRixe9",
  "key39": "5QpFEC8fruRMfG4doEFUZSRVkkK9TPPoC5px5qPtdE2NanZkehsfY7auoqcPU7wjmkYhGuqKzfN3F7TeVwrSStZn",
  "key40": "3GfbZPWKn9LLjb9uGY2uJjYZnSD5YTaYMMKpQ3ooJmYmk9fD9ukz4AHUaBSSfoDht5zxxq1ddZwBERktAvqsDCvZ",
  "key41": "51Am9fSV42mBGRbt1AjmgkQjzUJpxPtALLPiNaGh4pe6c4t863vD6gMgRSUUngsf2bssUN6Wnx7cGH7GDvKvbTVB",
  "key42": "3D1NcCWMp667BrHGCCWFCYRvjeZpsqY3YiFzXgc5k17v3YqkkeZZX5sUz7xN19HGbGdjwRNvmsrBnZxQpQaQaWKz",
  "key43": "3MxdrgyP9hDP9Nxcn59QZDUUnLLMcYLnEDoRQgWzTQvPPZHYiSE7Gk6hNK2opspVpQLjcBf4reaTT7mixXJf1ce3",
  "key44": "4YEPFmAeztwyX1yWVw5zwKEPxfGiNgNRdr3YKCZ3GPU4QenRkAYVsXa2C87LSKNx77HJ4RQfL8r7AoFQ2KnEwXwR",
  "key45": "3DeCWBK3PFqRomqHVdUZJJJ3z3SAgapaX7BetKXEui9u2cy2MZssWwGHWym2Tdq77YFrtnMMtmue9TwkmTTi12or",
  "key46": "Px1x6RsLMFpauB97oYG4pFouJKouqPVVN5wrojvMZzRm2PTuBb9PHRvk5cyKTxTsS7McTEEsquNK2PD4qMiTBuw",
  "key47": "qhRbinb83r3StCMvCAmzQV2aSHRQ24vE5ep4CeWWRrGp1HVuGWzbwBUoUoFwfoKHFo5eWPMNUcgANWzbuStkDjo",
  "key48": "3VMmgJEcFQLzLfCnF9JA63TH2X9KnjnUmsVnHyDSCKQVf9QoWFXt2q1RLC6GcvATnFNimz4vdJjjfv446o9QKAN2"
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
