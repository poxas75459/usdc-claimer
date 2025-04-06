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
    "2U9bYjU42cZxQgHaKvmTeJJMxFJBatwPWQY1LWebRmM3Y87EYhGAynzThXtmq1Cihie5AVQitzFMN2kL6obn2qAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XpH1drgsEgG7s7NvpcPq6TdkgW9SEHBapQHYrjZFMvUd8LHjt6F3Q3o6osCUSZoC757vxDLWBtoi8eFy1UYCCvn",
  "key1": "3EapPPDLXHnnXzYNssnoqDfp371RVo9pvTtEa9A2TUEHUAxQpoQ88C2mCifhdo3r77RgJZRtgsJqrtpAytYTuYEf",
  "key2": "2R8xGQXUHEZVwaMKW81g7Y5d4RbpUSrdwc6vbPf64m9b2au3D3dko3egvh6bgVQtyxr3HV8KvDDdPcEeXiSUcqRX",
  "key3": "Qyutx9pUc7YSeGoRUsAXHjHNTtCpgYa7PCW5MsLERaqXXuVofx2uJDfKusVpir4PEXEJoMe2Up9YWUd7qn2drkq",
  "key4": "2stktuDBAgnAhd2gKPWuAQZ6PKt3wPw6fqckjkrvTD6Mrcz6jwQqfE9nLedxxLNyM3gYhoaiyT4ak9Ng4MLnFKsG",
  "key5": "4muSaAevazBpzV5g1ydi4HYQbWynS5qWKZgJto2j1AX7w9SukqpNQdypyDjMA7synw4gLvKLLgTsmbtv98J4wFA5",
  "key6": "5itCGaAGJQ1x4dGNK61gX5JKAMCoY3VUSoH7822wAs4apBKQcDhYWrmNNcZdGKpU752qDisnNfncv1jW3U1tLDwy",
  "key7": "588nfufSS4AjM4UcYkeVNfMnjYJsVyVqqLjcYzyqxH225Hr56gw3bg1YMkY4bFSNy6eQLYjhP8qSwZxMWabTRGg3",
  "key8": "3Lx8faydN3Fek47fLoz7hiz52aJ7s9dFUkifb7cwA7a8ciUj5tqf1Mg8H6jZiWyVYXTnb8TeLnQExt5urYexRtRM",
  "key9": "6TGuMm5iEiEB16vd6xq74x7WgZj4cL4wR3SVYSQ8vyyYGKQckJapAKHxM4xMRVgzWkwxRVdZ7Fpf6hH1owyRBca",
  "key10": "5ei572viJHZWjuWwU1mqTdeEvpCBDDWM235rTtmbhynMhqH7UaN91S6SLYCSxb64boCnHzEW2qjRxe2DtyVfxoRT",
  "key11": "21vfLS4ncogjNnAtSifGvz6BZsm3ha3dA5mRg9V63npaqNcsQjQ4xbkJgxyK4AL2BAMCtx66K1ifg2pcffJLkVbV",
  "key12": "2atSTn85efaBBjooomuqTuQBBDNn2HBMM52AsmPy18Wubn62fs5JcKHjJTMd6k1T74wZ1aunR7YUuRNqDpkkWJzM",
  "key13": "4ZdLu9SMyPex4d5rJ5LXQHpqwKiTG5LP2xSVhXDkD8pwaBChC67DGg2SVwP7QGxYf7wniwFoERgcKy5QZjKwM8Be",
  "key14": "3tuUsaQrsMpgPibKQcRay8BrgYsBs2wsBw3ShJVvqeRK22E4JgUWtnu9uDHxSRuc9c4q8n3sjkvwQ7vg6c4HZeez",
  "key15": "4EYjcezHa4pUEsqujTU5U9bufBJDRXXP5Qh89ux9ix8tpLnaCE4qHXKTQyawHj2Vota91pg7BmeyFMzvujdFKyy5",
  "key16": "3ZkrfdpDGiZRinHhB4qRkSh24x86juMNtuEtF9TMMro13obNVhHPEQstSEY2xgfvNJECqMTK54TfjbbeRKLi3ayu",
  "key17": "3r9188pvZsScBA2bCFRkh9trorXQZKVUoAXr3W5fBBbQrXMd15z99o3F5JA4VfmkkytCYq8C1t97mV5dz1f5MKpW",
  "key18": "3YzXmWfS7aThvD81rG4x5nFoLM2eAvaz7DsfjDoFS7Pd8mK61d1Z5Gri5owS1KjUZ9tggFpXod3rcp239a6abjdx",
  "key19": "3V8tCsz5SQy1RkKjPGeMz3nAv6HtTDDB1zinygnq1NssWfyPsqLfzfRaLDzXhxmoWoEHugiuRMDk4Nifejxr22zw",
  "key20": "65JZn2iyZRaFZv77kbhkMh3YfTPaE5jDMzWrf5UzWW8Gwkto6DSMt5EyFLGZbNtxCW7GqeyDDZKnDcrKFLbvoZWM",
  "key21": "5rPF75pKtEMvsuHGBexFASfk6DyujsRGAsvxwBp4TsfjrDtMf6XyB9p3Ec53VQnait5fj6rRNER2ysRVfm6dJCH8",
  "key22": "4UkVsRkqV2W2YdFLENh26NsnoyHCWEtXKKfTwkqpDXpmxFU2uTX79bQXVxyyGkpP6HrNycCjonrf7G3YZFRRzBLD",
  "key23": "3cNBFu9xiE3UjGkhU2sDpxiQNecGxfSUFFBvYWJgS7UAWivGMtyaxmmJsJMPaoxx5Ae4mFzy3JigRC5sCNZc7CRy",
  "key24": "5FoLgH3FFxA9zjVJNbXW2Q5vcx2hhm9BQUuMDzP4NX7gHvevAPYAh9AitGX3CpceThMnSjeC5Ziiwm5YVsKXY5xg",
  "key25": "4CojjjscFpVeYyw8PkLD5T7yHDWNBB1o8bNaYpMycaPvsQTXRgfTKag8knjHMVaaUNAmBES5oKzAtSwc5KwMPCXc",
  "key26": "4pwVCbXmSVsqcbFaTuXiof9X3TdRFfzNLzfuyJJhYWfK7diBrxNX7hWXdoaPTytZNvtLMAY6iYEop4Tt7gwYUz1N",
  "key27": "5oC5gdu7eQZvsBqzbeyoL45HDuMFUHmXpBF74MQJZk4D5SRrRhFYE3pQACVcxqTxT9MNFdwDycMWR8P9dL9VFzTy",
  "key28": "3U8WuwmxA692ZGuFL3CLtJAzKLUusAomcJNiAFxKxuNLNNbuc5STzaL3JS38YgDjFV2VDMEFR2Qkf4fod3SrVkw2",
  "key29": "3b9NDKcAgipg1AhKo1dfg3YF95jW4PpJ1vwa511YZnwu4Ge83Zrcvxak33cXsfzZiQUW1iCcQex41QiycxxrSkWs",
  "key30": "2JP7DWNUQpG3wQyDaUZs8LEVJNkoyQt9naabohsry6mmnZoT8y6mJgAyJMnDym57DGviHSS5vyvgm3cmpAfFB5nU",
  "key31": "4z2Au3i2yFMwq7vjVaoLE1Hrg7qXC7xNK2Cp2QVLu9e9NNwkBeYdTSirgFBHdnmattNGm9hK49N3wysa9Tk7UbSU",
  "key32": "6uccqUJEN1iQxgaJCjXbTFeKX1KgpSa6nzuzjquznrBTyCCkWLx3AxxD1mz8ED7ASakBhC2EQisvabfFvGn1Uhc",
  "key33": "3XZGC5s3d7XqiDZKUTojDWZGHtVPjb4sYhF9AxbVC2bXVQkmCQnuYtdpxuEgXzJ5EYtYYaoqDttazA55xfTxumAE",
  "key34": "2TgdzqGDrDvD8t6jaSJfbfp7UsiE43J3JJX3noX3tAQZctCUoAvTxMtQix5Rnqcckk3DeKEPDGBEktNFe7uBjbHK",
  "key35": "67DV7qAMZ6QXhSs33ARsNSBiJknmgDydkF8VdxVznjiV1mjbi9LRSWcPreedbfFh8rtb8AyihKc74JAdJhyYHzh4",
  "key36": "4onBGSPAbmKGG1vy6brzTE8RamVrQXfo5BwFW1pjcSJxPf65cVNqTTFESRtk4mAwf1XHajVLDRc7bkMHYf6fiGer",
  "key37": "VSqwc1ffqHu2jH444LQqvj9UAmCZKm7Ed3RhDzY3fPzeWcfUF2givRBpytqbebp19gz3hBgtSjn9Hms4N9rdTZT",
  "key38": "3rjguJwx8dS3dnG1gyWRC93G1Jv3ivMmCqWfPWtmnbw27C3jZS7Lv45ATBy63AVFg3Gj51M7yWbm4v5HhKRgNJF",
  "key39": "3CBHViSS5QvvGPdR2F7zVE6bXBmb9uTLiKty9YTLfyBrxSYjnmdXSxe8CnvfJPdUMKuA8JjLMPUPKqemyBxhq4f3",
  "key40": "51FcHtscM8jXUXoHGm1KwVJw11pnJvuUSnWZsnvLAJ3PNcemfLQJnTqRNGG6KWRx4m68oVY4ntAqx5rFhckMrgm7",
  "key41": "3K4TY6uv5eSSVCTZSbYueMJwAV1VwYyCcQcme3j6iiWGogtm75365VQhKCfsqBMkYcjsVHCcYLKQoAFVp1jMohNW",
  "key42": "2W3GSEdbd3xL4NeX1p7nuQoqt4gvQ4tWKB66xY8AH6ZY6W5pmXdH45RRA2dhECjNnH8e6e2b2PuuWwKnRnZXxbZX",
  "key43": "3XHfeyB7ERJkwGrDYAh279bsqSoULwbDrByBzuxYRg8BsPU6zZ85zGjvdqJwcmHvF1vDgzmrk5sPc5Z8N3mWwDBG",
  "key44": "466DZ2BcN1MBZ7J5i8AykAi8KnyAKDENcjSx8KquFiWFGeQzSG5rgVTqRVEKmTKM9sSLUAtFxkSft8NxYnDHhRFa",
  "key45": "4q4465BwyjFwWTXXja2jtd49GQuZXvA247mz2JqoYStx9yvBYjWU1Jz32tqiXT822zvfpmxaS6yf3pe2HDY2pnBd",
  "key46": "gn6z8YF5tmoH1skp1iWuZ1dMb4C7yspKVmue4WgGNmMgnwn5hsmJ5NHpPE8iXA6yduCZHpy8th8F4T1ES1qt5dY",
  "key47": "21HSqowsVZP7Ct8fJtsSSUtFWS4ZBufLyB1GRhebL9oztPQGyBJCyaZNRPG62PafC4Ti4BXYnKHspZDQxpbK71tr",
  "key48": "3b7i5LscbSiPS8dsND3ZjAqecfvGdk7omThjDHzzKpjWzib8NNicPPBFzrLLWGLQVNSi4LoaHKknvxfg9j48weuF"
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
