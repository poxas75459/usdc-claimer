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
    "5S6siCMkQQJNAvk8cbcxbYohmSnF1KZfkCwSprJsrkHTRMbZTSSaQ6MVKNHFA1Hdj1TbHe2uz1vA5uAk4fXZzAb2"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3ya2pwRCkjKPqPg8UnAJcBGzLjk9rV9PWLu9rZL1MQhs4fhuMH2616YfPacSUu2YUg96xTWu25raGpwV8riphEX2",
  "decoyKey1": "52j9KysJdsLRKUeqKNi16zGVYLSc3E9KTgmgwZxw33b23icAmGgaVLRdszbBmhTTpjuXvvMcgatXg9nAPNGdWxza",
  "decoyKey2": "TSr9G8672LxkEUca23rscEocAujJ8Cc3VQoH7wKfePTMtJ4ychGYizXGGY2kfiryyNQJUFEZgFaHMsWEAhoGyrm",
  "decoyKey3": "gbtFMzBLeqHf59s93MQPL8vrcQXdLJjZxS29knsoxy7iJsE13UvQ9XDCXMuBBaNp5tvrzA39Yy4qAhrxdHURNL9",
  "decoyKey4": "WnmccvLWw2ueZH8b6ZsPeSL2G4GzUUVBbH8QdhjhaXxcYsdaEXjf2Sq86EVtqjkirCJVh34MKU9pF9DgTyRiEnw",
  "decoyKey5": "2NoPgMdHBd8MdQErs2sHzLLxqCgHgQ7JGxtNEpJA9wtwzQ9fXijECBYfVHEHKfJQcuMbm256GAjsL42KY5WoYPsg",
  "decoyKey6": "3ZxEmuCVeuyWqntB9U37SnrHrhvFWsEaes5h8nDar6Ew7ZkAF1epTevvVfFgZMkC5KCE9T3pLaHxTSNK7UBMUNzg",
  "decoyKey7": "2Wsg2GiDDJoiiK5BEypEmYokzpTTewSp6QKUpJhF7A6FymteLfMJCevAdshLdLLkKJw3rn8yqP9DMYYCxcJ66gF6",
  "decoyKey8": "Yy2zS1LHMWaS4dTtGD2UtyA4iEuNQFQSarXVsYLKj9Eh6SXuqP5gx3ruTzBcCnRBPknwJQoSbHwQqh8E6PgaMFQ",
  "decoyKey9": "4LsWDmGtqe3iBerEAokNATYsqYZ1SQKvh5hkiRZtvVph36FK5xW7rs7vRRXhmeem8uyw9SqCviPtETjEhdzCEzUT",
  "decoyKey10": "uTgY7NCw1X2AT3kkBSP1X7JPqm7wCQyR4RGd1GtBvjsaZWhZRz9A9xJhXAfz1rvrfm5jA11VPnkx7KE3sU5yXAu",
  "decoyKey11": "2p6pd4eiGdg3hm11RophbUGCvAU6JmBmEC5YzLUBLDsvSAdcEg8cYtnutxRVKFYGWzGoF37uQS9VzWhoMz9BE9Wf",
  "decoyKey12": "3YsiuH3oPEvR4PTkMji3cGqqjrPrD9AJoHpCxwPU1kVp3q45BFKVFfXYJjTEdevif2QJ5psaiWkdLsGT5ML65ZXZ",
  "decoyKey13": "aUoPYB3DU3NngBww6CaBuxsZcqaBtzX59gfciHj5XQA9Vqb5rzaLQkqLnUaHkexGdMvhw7zSVtbReSopVPxC9Ce",
  "decoyKey14": "38Jeowcuo2rDHL2EoLvAT1JvLbjvFcUyhpjJAPGQQVx7rtQ3kJCWB3271Gmi7R4UAkbeAXrZJSubbCJM9dCt98mP",
  "decoyKey15": "UXQpwFjhxUCvV6iwZkLxGFTavq86YByHg6GGLhd1SMShV4KST8mmKmLHAQ7Av3cEwZoCWcetsbYp7DVWcKuhey1",
  "decoyKey16": "ibRx9e9covGCNowFVf7UBJVgpoTpbMwbV7Rixvth5trmFgpNQEjdfnEaMbaRYqQfnyg51Bft4UESwsVB9k2pgSY",
  "decoyKey17": "2fQRNAG6abLJfaeLpbPSMJ2MhwKQ5zCYT25ySbo3BdroukSMdXpMaHMkSvV9ZUeFFV4yCjLiHQUVU1UQGgtSMiSi",
  "decoyKey18": "HG7xt2aupyhsUCmjxrc8Vk3jUh6KZT2qantbJBiuduwiu854BSFBRyP5wtqVSmETrLezSZ8PhpJM15AVZGWGsvy",
  "decoyKey19": "2YzT6bHnnSTx7A4j2pxpLAT1jYweqBsR5NqeKRfWzayDy6Qfn8SQCD97F8EzNxjvpERFWTnLNcivacDKzWCw2zGA",
  "decoyKey20": "3sp44KDdiEQGtGAW5wKK3EkisxxtPdj1LJiSFSuPPTVLeo4im8Wtujh15pBKvaZ47M1371H5kvfxZ8HTRZC5HG3c",
  "decoyKey21": "3cGDwfTzJeEKjejcvFiuQT3AbfePL3UKnRYzZA4QbsudMH5LeWQBFJJwULyfRFxwtH7XXmzwV4WRsCv2tRaWqko9",
  "decoyKey22": "2mA9seh26U2YdbgHwHrKchyjVJ5uYTUgCMRkwEUZ1A8xXLsV3JsbeCtf9he4azv8MmfkrwUZGVQEvU4Nn92TTNQT",
  "decoyKey23": "1vEXiS25m1TqbXGXq7c36y11v7GgL427VUiHzaGxqGKgizDxLLEtZ6D6pPF9Ctvtmr7vREJew3oj4ATu5EM91fr",
  "decoyKey24": "4WPC6mhpHZyxtEJkREjj6YCrNjXZ7EwVAgTjpDinCEcKQRPwkMpgDhwkXerdTUF1FGuwwp52R2kKGzV98aoVU3iC",
  "decoyKey25": "5od2WLsZQEei2Tbafm4U8VWkk7eetPqq4XuG6vjcSDdQR5hN3247F5mKNpSgj15V5o8ZHxHT4euTPMfXvEq1e7Xu",
  "decoyKey26": "4dUUFzHxtkDqyaKoZGUCzf58saYvdDZFPvnpFi5ZHLrwS7nT6n5hWwmFGrG2UkL83n5NQdX7ybHQwFVydsnQeM21",
  "decoyKey27": "4amTkeAxawGw1KHxQzYZuQ5SaoYLcmZuoVx8kKL8t2kzs6S5GDQVfFVSCJsVW8S2Po2D3374YB3zMobZcwsuyCCe",
  "decoyKey28": "2VsXDBRXsZ5r9t5G9XK2jveKGyuhFGNybj4RcSMufE85zLiuoiaf4LHWwJssAc3ze4zC29KAwQPVoWJDWrTQ6Piv",
  "decoyKey29": "5p2gu1akK2MJvRq6AFGycmZ3nnn97x23iXpEBmwvWvnqnTKrrzWByxMEkx9YPzFdg8a2ndn7faZKAQ7N3Wc144Fn",
  "decoyKey30": "2Yqgs9fQrg7qLc2fXeyq2BrP9xjvDWnoYT2NBoKqnN9xzsZ51swbQwfoABVphshpd6gDMzG9oDsUT7UmQ5t13YzS",
  "decoyKey31": "2yShszq2WYuxXRncheghQPgvhzdA1vs67XBn6hSf4LvzjeEm6AVKhUFoyFp9y898Jf88PF3GjqghkzEyqwN2So2J",
  "decoyKey32": "4HwkvtWSVKMSzAbybAK1NkQ2PqF4EmyFupdYstVnyoZ5x9931Y9sH6HFBY6rC3VN1gF5YwTjSWThn2urhwoZeadj",
  "decoyKey33": "3scUefCVz6jQBLEuVzsTF6yTuhB1ye16xJE64kNWJeAupEDe9tPiwNfdmp12L8VNcdaGVGijvLSuZdoFpj1Q1m7e",
  "decoyKey34": "5LJ5VhgfRJYBVwSeqAGmMqqQPUdup5q4nH34wdBNmMustSP5EbiY8HEQguy3kqyT4JZjiz3TFs9Gh7aKeyjLhR1W",
  "decoyKey35": "PYxrMZ31T9itnXfNoxNqHH8LFyW3mEFdcTbowPmtzim4xyg1SkUPqHbB4sxUjcbDW14LZFNMyG64tsqwVvSFQqT",
  "decoyKey36": "3mJkhJApYZaAKLds8Co8eQkUHGk91CzmdK1B4w6hKrYDm8HYDmZED2jzPKZvEvPTjxzvm4u2vQErWaypnib7NdPQ",
  "decoyKey37": "Qwc5N7zow4TtZVF9mXRewWdK9433PSzochyhzbMxS91q5Sw7N4NLn935HSPsEGS7fSY4putPHzeHHWEXY2UYBZa",
  "decoyKey38": "3Wmmj6evtVgWSiJsgtozZQW187exvPbP3Zxz67kXkR83HRn24GPr1qG1ibnPT6ZpCWDZR7JGXXPKLjYRNqkYu8LM",
  "decoyKey39": "5YvjffULPnRkDzar5YHU79ST4QNBmnNEJCzRroSU2Mo3D4dNCxR9trneXkNPWWQ5GiymMZZoqF3eBRvD8bt57z1w",
  "decoyKey40": "38Vz3GEFX1ZxTs69rbudU6CsZG9JWrvrvAxYccNbuxXnmR7DHZQKJsnV1WKQteW3XV76idgadgakp6GGzaFjQQHf",
  "decoyKey41": "4u93jNrbEQmUB8idzn14yAAfVn3pDWeAbPweybTtzi2Jr3kyFM4qcbothfRqypb824ucEujkrkKmWpxs9EKrsWLq",
  "decoyKey42": "4J8oFMjmUeu5xvwnM3U3D6xr8t7JHP3abwAJ27hxhmDBqUcnUEJet4VT8rUjLVdhjtWywWKRiYFFrh5FnMKW3atG",
  "decoyKey43": "5dXytMm19stGNYE2Cf3aBpszEkPxAgsziQKy3Xro1Mqwn1YSnigQCa3s1Xq6nMVNbeQLByAsmEchG5MD1zzhykyR",
  "decoyKey44": "59EqbN6HvZPrkbjKtSBY4w7TgCepwCMeBz1obXL2zbiPMyAzZYSsYLfxRGCbD9E3dMXaB3q449LKYW8vuU4SU3j2",
  "decoyKey45": "3zdoDP2nSu9Cw61sg8i5tKMR9cX14PCRmYNds5DJgXj5Rt36dSUJvRYqzKeB33wBgJL99g7oqZTWb2AnRCxGa2E9",
  "decoyKey46": "5pNh1igkyqzAmFMrLrvZMjAEUknbKuneu8rVYtf2r7GUob1Q3McKNTcBBYVZBsBBu6LBireot61expFpiekBahJz",
  "decoyKey47": "4hegL1CpXkjNpBZVs2D55PniGiEi5zeGzAwiTyFLbYU3LZze1X8HMUHpaWTKq2N8ieSfQ5ViWF9AAGLHpeVwhdxM",
  "decoyKey48": "4ZU6zLrJ6X6HbYxPosKCtURdao2AT7qu1VTmnVXo53jLANwRSeHkd7BiGJXs9HR4oUcUowmsYm4MpCADuoF4hpkG",
  "decoyKey49": "34TjA166bZcVcR6VrPMTyhH2DL7p9W9foscqFAMrYYPsXztxiWG79x5qCPw1nqsKb2cugkbBmqpnAsC5WmxJaSkg"
};
// DECOY_KEYS_END
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