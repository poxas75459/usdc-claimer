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
    "5JccHSteVHnrBDXWJ7aALiPzWyVNqeWjGySVTEbyQWePBtSTX6MM5M8ZSp6zSryGwry7P5hX4BVXD6V9QdkxV4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CDSAT8dWvEx7bP5SvhSy2osmsgnWRA4xHZrz4nvscX5SDMdanLqJwxY2yFPosNZ7Z5K4N5JG93Xpse7gAGmSLkq",
  "key1": "3RLzeJbQEVgMmJ6hkMNfKF1AfqLdotG7BCjb3f99NJUm8CafuoJGUkMvUYGV8F6oJqTYShpp2Uspncu6GXM9oJiq",
  "key2": "2TPp5F1egUTuVFyz5PAGx69nFYFjCx5AsLSGJ1sWhwtdVJkrqAaT2b6o5ArWLrB1roKTgWBr5kBwJRZZCDzgV2RL",
  "key3": "2cLiLBcADmFn5LbLS3ycbY1REV6aVE3tPWgXHNyvsJgEbPErjYbsjtV95GSCjasSptncqCYfMr5cm2brBXn3HYSw",
  "key4": "5msHV7E9qaY5hGiLBnVLx89Z8assiTAc7Sa5EBHB6j7BCmRjVGfkKCTsz9t5dL2BF7rC3upPUxoSPMQCbKyLpVBv",
  "key5": "5tvgHo6uSB2ieLSuWZio16kxT5RP7ttz1KcY1gkfVUrM7N93nx5xEhs2Pjp4aYBh5GkHfVM66smWDDysEYDaysgC",
  "key6": "5JRebqeGZCtNmZPs2FkvFF1HWYRZLeMyQgEPoD8Y7dzR24tZUC3UhaHHk69Zh8kyPocxkkoaSGyWnTYXuGYZHfw6",
  "key7": "3YzrevWPcPEnVbbF91Z2M1LEALqetaCSpvd1k8gxb8zRfqsLih6BdEQomNQxskkgjpmDMRZJs3fU1RrbHVYZvyY8",
  "key8": "4WEoepd6t55DxbSiPaqur99nmhEzZ3D9etXySmU4MwGQ4sjsHR69XG7az6eEM4rm8pQdhYBr7DtcbXVzHNKoYsjW",
  "key9": "47oek2TPEKJHsYEZNGJ7P1UfHCvgMjbmd2ZmB6HJj7c58ViH94LpP4m2nHxFtpRJnEbQFU3PfrUuuhbY1pLNDzy5",
  "key10": "4vCvd58DrDiGGaqq9eeTL1JKDjbmR7s4Gbavu37eVt88PpogSKbDcAq5eWUwjGCH3f7NKMS17CCLJWCvShXG91aQ",
  "key11": "pbtiePqYfv2EGkM29RVsprob9gNH7k7VLjhay5hLFoS2x2w1aShQttX38w741sgbT65ED43AU9oAYDC7FDUueyf",
  "key12": "64FXi1rzER1XZRBHRikKgXaEM1n3XVdJBbDXAEJVnK3wN9SREEghUt368PgVVE9hiLTSME6Tpx3pheYc9C9hoZXf",
  "key13": "4Jmes7L72SRrQLJTcPVBmPmHYZ8fF4axDYJHi5V71G3efZ9aeVGrUpR5yvD6ifBYVNSuCbqgGz3N4g9hmusEmwBi",
  "key14": "65JafhY3tzbFCJ8dF7SQ8UtrHXDFy4K6BJoE99fswmiNQpLcoHMAMUR5wRF52Av39Lh4hku6adoa9mp1YhJ3134T",
  "key15": "53SoiG6qo65v4xEoeyBYAaeFyTw19EG8CCDpNQaJQ9rVw3Q32TZgwPJm5FbCjT1ZjyWYj9byfikRmp1aRdVWdyvp",
  "key16": "2yABWcpd8NsB6BQE5dG5r2ubbRmNWS8FC1uNiU8yY5fLpszokfDrStk6rK1HbzUj5qkAbg3RdvpyXfQYgRWoYuhD",
  "key17": "5D743dUXGbFgwWjwpsaAcA13YdpSgJmQ32CmDLeWSomXyhJyjqFTGAigZy4u8kYLMv2vVZBzt67rTQvNCgCVwfML",
  "key18": "4PcSU8VDDrpWiEwi5DGGqUxHbXMDng6CAhRAwK5Rnae46nkkePyvRRdYXF2NnPmbtc5aC97v5x3ivkb2aouPm1Rn",
  "key19": "2Jwq2a9Vh9HGERfCjh9DpnPE1BnZ6qX9RwiNZp9G5Uc3EWhPc15MU7g6h33b7k47Vf1kaXUGE4EU6F8aiPX11E7V",
  "key20": "4GyAt8yXvrxgMaeLJMJYtuwya92q4FZghAzGQVwzfEbG8NqR7MgAhYhkfzfgJmETVtRQNJk8LufJM1A17wepRKGx",
  "key21": "4Gw63ceJLE5Uqnk3f8GXFscpwNQ27vWFveWAn2zNhgSatzAuvv2cfSbkewhT8VoWnBYwdMezfJUFdTsXVshm4mpF",
  "key22": "5BhmAKtcfY2jgB6ZU6DCxAeVAfSeKvYjCE8gLP9SrB6WyCG77frE1ncN4Wr93a3v7bfdgS2ip9KHZP8X3htMAkTH",
  "key23": "En6XDnUf28ujjPe3kCDJPtMLdcSyDQ8CLUyfDfSySmUDEG6wpjLjgyRL1dxiLKoLfbouF32MpNBhyJZ3fsNRjRD",
  "key24": "663SVA5mtgNPXD23h7F7b7LMsGKqP8eS3Y2Yrs62xzMrdAixZZz5bxM2MmrUMiEAvmHPSTnQq8N2jQc8TRrVegdR",
  "key25": "2Xkr8caKgWcr2E4LgHEd5v3KUyMLVQ77tA9GPGdbBjhHkPFCWVJuz51JM7fXh5Q5y4SDhr1BuM14QXUfTBQLM1DS",
  "key26": "hmo5xxt7x3JvSWowtt8GRPs9iFpa47yPZPBpqaaqRGSh8LzphF92PKygtZuBNjLiDNBhb7eAZtQFZT6DJ6XmiBZ",
  "key27": "4LQ2mKm6WGPQWBBnA1DsTR6xxPMiLzu5Jv3a1Yka4bqKjNUCjHD7Bs3EcYa5bLgLBojAnVh2LRCkYS3mRMv5Xrik",
  "key28": "du4QWtNXVRrA9Gg7h3Wm91YPhFxcFxPfuo3wG2tdJZtpTpqvc5j9UJffmywvXRed49HFZuBtF4twPhNQ9FPvNEK",
  "key29": "3usFzaqUiM7vCjN191VQyAcd9cfBgdiwo5gtcmrU5wYvvGkASm9CLzrEbc45pM5Ne2qibeJ8huSoRdsVDDHMfCpM",
  "key30": "4QtmxouqtzKYh9nVm4BzA2QVtWAnDHBgFwagvyXj5wJ453zvS5mTe7X9MmjfkhDyBvaXuSdSRHiG5KXfjpmK4MAR",
  "key31": "3cho3ocvZZT84xbZbUwWbpEcVedSUnzCyREZAdUjBwxWKj6Jr2mkL6MVHKQNAsBNCw5VTKYD6Wf1TiCx43mHi9Jq",
  "key32": "5Mi3kNH6nwX6PD4bT9b6q2R56TfGBRbBK4u74866KWdn8AsBLtm511yj6Cm3Rnz68hVnUxe577bqeHVrSKR7jW6i",
  "key33": "2whp4ouJy2RejuSJ9YYxNevgWoubGyCAgWhMow2Rb27ZTUXPCTtbfu8mg2weTfQDfawutVuDsQpEs1HU4NvEf45c",
  "key34": "57YGBRp1HkgvQtTd6oasKzn38CCxtymEzpAy3RFNJYGtyNj2S9CRDeD6qdiheA6HH9aLpRfgD8VJaLbYP7wonpa4",
  "key35": "3g7RtZkDFz4R1MdRNAv4vjWeJ2KFZvLWELk3F86uxSGcCMn9KfBxzrTJ694JJcqJ1zKvJ4SEmRufGjgJ5Zw2GW8n",
  "key36": "4c9XRL44cxK8LiajHvRFx4TgUoaNxGJqJRHuYgwn61uPnGrLXzsq2Fkx71Q1r2qaYijidSB37jGCobGFduTpa4N1",
  "key37": "42iYq2ZxUqHsnXoAzeyMiXNC8pGxYkjfkPzZWs53KnBePpcty4BCbcSBH4JVxRRRmu2vZziPTspSMNS97L4Gu2PF",
  "key38": "6XCsaxGvAToc1YBFJeoepGLWygCe97A8UQgxeKfKXEkKdWhpTMCNcrCg2qabhUdJSR9A862YjoH6QSWb4zpYkS5",
  "key39": "2LVoAXtPPsYfn1p7wdZJofq3AaKsd9aThfE45vifT6o2yiV7nQojj5qzCHSfHWfgdkMVCmJtqKqfFUiFnjcjJADR",
  "key40": "316s2CQbZ3cugQR2ZyFGz4nYsFwLyJSrAwevFj3FykQA6dtGY29mud5hehBF5d1gEpj9Ft4kkQUDBQe5AJLczLeU",
  "key41": "2tfPe2aYcrCMpgmZG4977np3g6xSN9NCohuH9WMdrgtCENkXtCzzpmpLY5bW9Rw436ejoJgzM1ayLLZoxybcTNek"
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
