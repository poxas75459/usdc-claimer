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
    "3hgZ6eedBEoFCE69C6EnvB5HdG4GG2syk93NeZhC9zuJEB12p7G64FBUawr3oPehkXstxCvSxApfMM73VMjGqsYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56YxKJMqeWSuosYdt6PzzckM1JLhMYaVHw5bQpo3nEzbttZ9eQzVoVm5eDfbu8obP3fRHD2BS68nujmxc69jZBgd",
  "key1": "3FnSBaBC4cVCtHU8BGEArX583LRZSghECgHd2skGjxFs3LiAXLJ8TrPBVJHjZT3YvxMiJEAVsiABL16T82ZNeBEj",
  "key2": "4gbAeZk8M9ug9EebMigQicHNoqC4RtYJdYhG5ZtpaKjVhkkt9ypbtZH4fXqk6PrqSed3f6YHHMEc69V7NKdtBwsg",
  "key3": "5RvWKYgwkXd76yzqJfgrMBdde6qZ9qR6Euwn3a5nEqqqnMBBryD82HvHyqfvKMhQbz1ySf1g7H2SwQf8dw58BGGa",
  "key4": "pLXRyNurLSyEcceA1FRNeGkcKBBPgsgYb5aMcBMwNQLvcqYZbZ4gjWyCDRa7FS53zkdKVPbt73ESe48YT565iJs",
  "key5": "Mzy3vQeR4RXahmEt3BKmmFV2WLyDYA26NuKnyAYSsN8RCbt66f3RXzctATPUSzy5rYjBzg1gkBvAJwwEZHRmV7i",
  "key6": "3xyzH3MuPEfTJFSUz9qiNJRmAMb9vUECxecwc2t7Nx5teyLsHfgW37py5ma2T7D74sdQAZGTm5oZ9Afj7C2dZ6C9",
  "key7": "kW13bsb1pGpxTjJi8F3QmLjjiYeE1TkWdzkyC3W4yFAXUcRGfdvh35BgGc4ndz9v4gn3DXChpcqqjpPPf4uCbCY",
  "key8": "MYxWLA5akFh62qZcF4MpPUkb1C51xo6jromaiWhteptVQucR1Jx5njq9md1sezMRXdjq4bYBDtb2h76zphNbsKE",
  "key9": "52FhMFkXyUPWEPcFrdxXAnbZuggMxrC1ZBimokgn7sSvpZ6CUXVy1eyqfSmYeAaxD8MbGxzuzo3ZqaLkLEt2gDqa",
  "key10": "3tYumH4BVWWpCtpv62mTYrci6TtS348AQLNjCicuFTKCC63ZaEFB63K48c8422N5U2neG7owgXA1kxNFHAc92hew",
  "key11": "57AXKRgLGGtaMk6LqHzmcjbfTQGPbnJMsxut2GCY2airaasf7BxmkH94X5mPDeDyoqJmx5t6SBwXrKEcAgkk4XgV",
  "key12": "4mHpeV1Aik5xiS8eEcaPooxUa7x3CYD353yBPvNavVxRKTYCGjuQwFeAgJT2z5FVphvgdcxSAcrxaaGqYFHskB6F",
  "key13": "3qkcGDcxmyzFJjpu58MEdqe83s7maG5AoAXSGJarGk39LeuhkJBS4zbWkdZCZVCr5dzj4NAZLsuni7TeMbZ349xP",
  "key14": "2rRdNaJTx1EF2KdngkCzU3CFqvVEggr6s2t8HuNCuN81wJqis167z6PiTXuGRPiBxvxaRBQZGT3Zc3H5c3kXmRPr",
  "key15": "HDkUTPfrmeX5c964bxFK4P8s4fH6JLvzepvhNNe4LoeNF84GKjyoC16GJ7CYLqwFBL4ZnVURuBA2nqB5wvKZwub",
  "key16": "5yyBRf86xGdxxmykycLBNJgQUyEw7G9zNYmVrpG21ywqfJK7QTiNZFY4YDZUt1fHj243YHPwSPe5LZd68jq7iTrB",
  "key17": "5j6JH4qnWwi2K5yDyHbwoD29Qt3ShQ51gFuri7YWGa1ixCv8wFGsHhtMNW7iR5r17WdfZ6U2XB3oU7AJQRbom3H1",
  "key18": "2Z8Ykq8yfdPAm9FXwP2hKSzzSfzcjEeqntDkr2BxY48J42nuZ48Z8JqLTQEAhSvjhnNXtFGifEphU6P8rQrjYLZq",
  "key19": "3hrNc8zPy2QqgHNdFQiuzWRzUBUJEqDpkWUQjy9LydT7qrBqtrorxu3qmpVQQgprSi4QbzFDN7qWe2oj5QK5UMxs",
  "key20": "3hzoubnmgApbfN4wt1qtviU9niDoe4Qjf29RLYSDR31V7UYgQpJobnMcv7UH1ZaaSamdjqYyJ4K71ydUsjwx9Kc8",
  "key21": "36zS3Pj9rCwrXXyzA7S255cNBL6Vy7exVrRNNsieFLTVawLCHkqtJXcsPK7BvQq1FoZTB4RAgeca5L34BWHDKfSo",
  "key22": "8BrBhJgJRJmVHNejKEEckmpHxUX6QYLxdpw4us8AnmshMrTYHLHSukBwTHrFrzwReTkGVyhH4hx8mgmJ1iHzfSF",
  "key23": "4YrgVgX7tCkCCc19jJnGysekxNhRw1g7txYxCPE3PTSVcRXEBcPA4EimVi4AaGKPVLjHaWC6bz338CSaQCPobooF",
  "key24": "2AjAVfKszNreW112ZNkppzvWHabPmXR5mzgYuDBnuy7Eeu9ueCmpbgWhKaTV1THXizrNe5gpiRdKJCvkFdbSKD8L",
  "key25": "3PfroaTwTsWhUBU3bveruzSVzHXHsxEJ45kTL9JjVxGAcJHC1bCu1rTYndY63HA9BYTJG1Y2jhEDMypmu1NfPUre",
  "key26": "223qC6CJSdWXHH53cdyTyf7mxQgDCjuAKmUfCVzWEANCbQGVqMJKfHqeKFg2zGXTphjsSqKboWnYfabMPxx91sg2",
  "key27": "3tnAMKawqtMqBZnoZVHRm1BgvZjc2kdZjfczvksUzgQSM2P7V367oxC6iQenKmHPRzBrZghhRNq1ULPDeBaeH5xu",
  "key28": "27aUEPcK8JtdKTmi3vKmW9hanGAocBLoif2RY7dHNCr3dwjHs5XXiosY3LiSQue76xf5aN8bbGLyhNWFiBtM3LpA",
  "key29": "SfPg3EhqFVamfHuse6asLXVTr3VfCLfRRRamsq9rasfRCAaNiwEnbxR3EmevjmyCuGPWBSnRWt6JXsyAApBbngW",
  "key30": "4NcANpwZYUJjeD2bWFzLNUikVJqavEUKePEeqrLjG8PGM9pVeXJMZQmKbXSiCQZR7kPwbSzLuStXQ3cJ99Uhv2Ai",
  "key31": "3Rsg6SfBhg6RKJvZCoe6eyVceYoc1eL6AUdfyKMhe7jGwwzvvxi15ZozfMBSbD5k7P6vbMJBy6buhBm7vUoR5r1R",
  "key32": "4846NrPnmzb4DdkGVKzU7cYxDBPTmoLA6JJ4dwpuYGVgfsqFnfBDSwSoLo37NEYZDhcwY4okWubGVxzHNYueazKg",
  "key33": "38MUtWfbM1wiYTStR7jb6DN6sV2M8NzAtn62JNytshsnbZJugY5dy6Bsj9nc95byLYAPXxrdcuJLS9LDpUyNj65L",
  "key34": "2m7nh1KE1FGi9BirAzoJBPyZWVrZjMyaRTv43SSQGEKhuhPHhdCyowgXKZnbmyhNLaTEgZsdLe7b5RczQUtTLVgw",
  "key35": "2dqJqGPQ5ZFxS1pZNe67JTbVkhwNJWsFUzyJEHXLbCkHHQn4rPEceSfaLF253VLCU89a3SkTYogPc8iVJ5jBqaBk",
  "key36": "36dLJYpHKE9h3AqyL9kkmnhPQeHehfyPDm1m4oThZvQirvEf653KnXpAjm2XszU4FruH2F6i9wcdeyCqNdv7nZ8d",
  "key37": "3EJq3UG6ViEk24d7ciwuCACmx2sZq1p8mYyLbzGfTp7JG6MSGaPsB7SCpUscmWLdyUWHZhAzf7F9ZiH4XoaXypho",
  "key38": "3UhF9D9T9GLQ8HEjrygpd278tLvFHZCBiNuTAPNXnyzFU4WktoAhgRLHfV4a5w6caEMi82KyVzvA18nWUWdSomW9",
  "key39": "5R5ZtjXzPvadrdDc79sAfdLLJNNEMu625f4tNi487EuEebHLYfe3RKMqziYdn2yntFarAs3uFa9FUgFWD3soVwsm",
  "key40": "bdtLPPWiqLCgKh2SfUGhoc5cchuYZ2vGLqc8i1j9PMybwPDuHmQU87W19sfoeGhg9WsNTZnMMAGwVZVi5n2ziFY",
  "key41": "2ungKHi7S57JFuRdipi1xpAydZopfxyJ1iuMAi4bg8SSF1Q4t27LBPDdztfjCTefHAnN6yLbDVuMrpq9H5TCFt3b",
  "key42": "3hrm5pnkjdbFCMPkVP98sm5pZy4HnxrThC2nCvU7XDshfEnYPihRxyVieN8SN4PNgbdZxrGiFZpk8nPcdNQyayjM",
  "key43": "2wNLSVZarG2xS6f8NYXQ3ybGgLvgWzvd8jLXvhvD76qmyWAo1LHixJBEinGr6ukYfV2Vhob58n3CQkUe9ykbjWft"
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
