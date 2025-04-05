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
    "5dCB3drNWhUkpuGrmMYd5Gh4szVMK7UuZngohmWE4AoYSJUw36bn2Rz99QV1iuvHzTq8SovPHiNkzWRLHGGkCvJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZPYqrQz76mA3wDLC7yrjDmTNDXV83bCgkXkjssjUSWp11d1CzF1BeQzChARiKydYQdgjUswnoNBfT69CUVFnWug",
  "key1": "3mDfLUxRRnLkL6TMaDESTg483PD2sPeoX5aBRTgSosvCRR89XScK1xXRT9oc1LXb255ce6zsDNFSyKYEs9BZwPbk",
  "key2": "49Syqno8e4Q9V5fPH4JKxWq5rPGwsqn5woiNFFBo52BF88iactZgCxqQGjgh1kDvqRm6qpAKRg5hDT9FbU4L6sSV",
  "key3": "123qh848nvmuUtE959tcjAxBqmhs9XLuACTgCAS1obm8dBXDK5VKuEzGyQyMaaVYiTSKNMmkvYz7MiFwT9AAYgxy",
  "key4": "65WmfFH8wM2BA31Mj9Gn57WhXXqx9gBpwUpv9jDJt6Z2nJLaHpWFJUgXD4NgHKUuQy6vmJbnsDamPc3pUAvD8Yth",
  "key5": "3zzQTyARVXqEe2e3BZDc11pGizJm54QWeyNPLUR1uAGx9F4Ak79cpueyvaMv3GqCdypa27KfPhDfGVMgy1y6Amwh",
  "key6": "nEZXiC4SYxiUUq8z6J67QJx1zmkVPMAJvhsyHNxC6XPzzPZnfQvo7EqCK3BVvNEAHRVkV2tEXmBkZUkwnC62xjR",
  "key7": "4rghYu2qDaczvAFLFp4NN655LqQTXY6takH8u4Fx5VLKmpec2X5TATFU7ihQ2BnqjPvtKMKDHDMUHbpMBDoYz84G",
  "key8": "39bXYH1Sxtv1aQpgqrbVwTCvjB6oxvbrSJVXkhtiWsBTekM7yE6PAMKgJ69MWh4DDzygW55jVkp9dgv2ghnzqzEJ",
  "key9": "5NpMTxmffkdNWzWqpPVFFpeonDLvqgAvQfN6HmGrDADwMUhHXBJtjCdV7SF4faXPy8dqaNbYdiY4hkJs45K2ipSt",
  "key10": "2P6seRCH4kjeu3Qj7hh8hthDGFr55VLRHwBR8gfs1ZpdTyQTeLpxcTaS3YPWDPX3eKNrpF4Jm8oiMH5SccgVG6qy",
  "key11": "2RMAithGW7jMQdrhtLc6o5AL1p3EVCHcQtaHuwhhok9HwaNsMnHzqqhNDjweAnkENmQkSbuCB2HKbeoQ7BrYF9r5",
  "key12": "31JiajSiop2hLa12GTUya7FEcVa9VF9HyZnqRL3svtfjUkiH5kyTji2UuuGn53HwcrE4Bn9c3JypYBGqQLMH3Sne",
  "key13": "3S7LBVyVKhG7cKfZuFGXmXEsbecJNgPgUYRmryf6yzKr9yBegBrx8dv1m41ntXnwbwYX7T1mJLa5jvzi1k9uL3gC",
  "key14": "g3FGFM26Ps4EyBV1kTr2VXkdNAWcjSMZA81vnEZEHY3aujuk5ULdXz7x7DLLmpCg3HVeffzMrS3hQHYdw7P7vw1",
  "key15": "YGAw6m7AUmHh6Gev3PbVYAjL8dev6qgGpB73gmus16aEdCTSWN3kVKcq8bccnPNCSuxkQQ4ojj4FKHfU7N76ZFg",
  "key16": "3hr2b48vkrud7cKMH5FcMwELAgS848wV4HHu1yjSFu97yvYJJmiPRVo2UDjRxJ26AVhZwjJ9GqrubuUAiod8nyZy",
  "key17": "332EPbgETYcHSWjYat3XaDtC17xhanJu5bytfeYF6F7mAGdJeDVSjXu3ZCB2m45xcWUL9NWdGy2aHMGLqh82DZci",
  "key18": "31DpEmTka3uPoHv7yQ9Gr4nEuhg8TsxJFJvb4HvXvei9TD8zp2pQm5M94Az8Wh5RBpMsjiGXcs9m4SGC6aBYj7eG",
  "key19": "2RhuYYHNae8GbBtbtfUszWdKsFcmwQDNnVaWQNbhAeqWxZ2WguMutXtME61TJNPLMyZkw6z1koAXbXSCduZWP1Yx",
  "key20": "2hmyyqgrKJSVkEkDwjrgKdxhC2JpewKDPQwpdctmNUFVsdSLnCu6FwUVJprAZZh1aoa1p2iwUa6kRv6mn8m1U3oS",
  "key21": "33kzVaUPMfbboEUeuMYF7suX9dBB25KyWCmLZGAauWU2LfCy8s4VCXcJaYzw14Xi3Ymrxuc7pTC8h9nhUzwcDddZ",
  "key22": "5kNUuq8GXDHYoFMcjHsz3z1XwHPV4MF4Hg2HGU9qM6AwvMDkJHWQx3etoHCmnXrRcQY97cC5irrputLKq1if1hB4",
  "key23": "2YTRkXHdniFHuFZLnUWrfoqEZEKzBkSWgdQUW1p6o9MHyoHnu75x91YPeiz6m8HAyPWW9sRGpftCARx2S4KSCxTt",
  "key24": "4Az9d3AXEhHdTyyz7LgwmqAgYJkdw8tJqDDJkLp8jvpnh9vAnaAmwZqzKAKxUYuiow2yhX1iapmsReATzSEjb8jg",
  "key25": "mFPREQuHep5ShjDLNr8kFzwYAwo1Vn6kWhYcFGUf1AqKt18t6XLgRYofA5MHovCgjvqKCpLLMZEXETPd4jKZESk",
  "key26": "d6DnLoph4ahjCwPrzzeTCkSZvEA64qsid2gMdtUFwUF1GmrHE2VoLC4iN8Esj5gfT9eFdzz1HLSLumL1AJTEJqc",
  "key27": "5CQPzyu9XYe53SQVPSK4gP6a8rktu6PyTbjy9qKVPHz24k6dmbi6h2iv25MeuHZTRNUtakXYeKQJqa3fc18mv9Jp",
  "key28": "358okX8sF3ypPAkLLHvDLMu9CtxVSxnp9XD3R3ZNNdfkN2WZeCrBGxsBTynLJ4HX5Rzu4A8VU6D8HS8ztVniqHvQ",
  "key29": "5RToQfp7EtrippR6HKvzPy7ZGrBopsiALAq6JNhkk6yJ5ZuTgzDdoZjw5AFaPCHbxCdL6NYCjJhDJgP5ToMbmYvq",
  "key30": "2GNEH2ysetTwxjFLZhXQ4xoMV5TC2nHGSixUzCJYo2XSd5PN5SRvQpEiK2sK7XccqPYJoGRmfeW3PU3HaSQnQuni",
  "key31": "65aV3ZZPGgoE3nPXMBwoEU7CyWEPpXXyiAtqYcp1SUpPtAvHWgfwzrYrf91FZrV2EfYjzWoUrYdjkNBH3JHkzbtq",
  "key32": "AmwBr5dFkytn5DDwXgcgpzFwNjNjdCnVsrQPuXJ4w58jWgE6J5gqRj5BgHbo1fozw98WPnXm3ShooxaoNuLGkWM",
  "key33": "ghtLBFHjFo8btzZDnbdYMHdU6kK8PsR6kyaqmkP3rUrAs6mfbWfkk8c6ttprw9S57692ERTpJFy9shoNEZhVjdd",
  "key34": "469wRRsSRnD8F76sQxiiC6PTxvSm6xkU4itN2bdg7BgwFCpMp1wTsXj8wu4R8pgzkryzVWUptGaLDxFhfUcWp5p6",
  "key35": "5thiCQ9naDp1YtguHHfW9Z5fN6LCFMvz4yKyqwsRB9BxcRxSLikDFqhXttJVA8thX91wbYzyGhLJHE3tagY27sUC",
  "key36": "3VQ8tB8Vq2QVYDmKsXvCyVozgdHApce7hmRS27UymCAz6ZNuHKD47K7ZfMnYfcevKZmUgzyBeT3fXjDBDzkkNUCf",
  "key37": "2hrAKnmwKdMzEhELTxYpjGGX9FMaiH2eWDc893BVHRWZhgfr7yovdNydaiVCKw8EvrD8UJ2iRbrFVsF7VPmkY4EC",
  "key38": "TcdK4pnjKd8D5a1FVVnqUF3eWEHEU64RQDkw678mY7eYvJNYNRRrMhjbnBRcfz4nWVzW7FvEEZUhEKHMtNy8Neh",
  "key39": "2p9nC9xHT58JvMQ17h3e1BJtsphPUWZs7mp61B63ELiqScGMMsmsJTQwnKtwfgPRdpoGmCsesRJsesfAz7aRS87T",
  "key40": "28PHTnqKZdk4EVsDM4ZR4ZYrKDLpWn2kSsdHgaSDBBfYkppNT9zCFfy92CV6VVHEicC24uL6vz3HFubX7f5XznYg",
  "key41": "4wjWw7UuK3NMsqeFQeDrsDCSdxQzjM7SAvpZ4qcgrUxJgi933AsL9XzMEGJ3DkHkaSDKebLswoLKwV1EREjksoxV",
  "key42": "4idWWP4uDjS1EHdwy5K4YdnBBNqjsbnBGfS2RFHamMfGKzjbSZhF42BwewtBC2qQApNUk2fx2LgZke2iMcK7FJon"
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
