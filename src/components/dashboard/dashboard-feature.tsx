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
    "5We9wNYqw39u8fcf2gT1V5mkffHEZUm3cfyZcEi8EaaZNzCafUwYShYbSUWGiK2SLAJE76Zz8GUADJwxt5WForEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rn25ADJE9pojQNVexmLTHKprCe4WD73FsfVMoEpFAsYdvfsJ3EKrhXMXxpCKf3XVXvVJvzqmASh7nYqbL41jq3D",
  "key1": "2xr4XEFpVfz6KSsV9cPYpnSUYVqKz6nbzRhV8AGfXjCF1AUA8jCE77PQqHNaEVR9j87F2oQeSfTPA1q4rJ1JiuFc",
  "key2": "5T877ufWW61xWALumsVfwcVGq442BTTLikDFUcZuzryQ9M3iQSsgiYQxkF5499KV7mnSFL74eLJv1knXgSjAMHBF",
  "key3": "4bSKFuw8dqpW7wpPE611Q9CUwaAkCgsEVHxyehFjPV1WXioXvXNn5spPFnhetg7VsPvqakG4dMVyyC3nEdXkGFS6",
  "key4": "5w1Bi6t7HaggjgVXfhzrXB6ExgFoGjmSzbZAPU1iTU83Njb8pzmG47hPxQNnwFSLZqoqvBP1i2ZMDr5stShC9RuG",
  "key5": "BAteJgEwroVGqpRShRKFs74xRQVd3TmkBcsxhkZbWPaW7wwJSNM8c7DiG3Cp8zqpdKHYv8azgNvzPMhzg14jQBA",
  "key6": "3BSuD3Byh27EsZCTLejUkgzFCfWqa3557eB2RqfPpz6xHFXnG9gSNDXLrcvh3AgGYZN51Hh6fNrUvHSo8PymvpBT",
  "key7": "EpTgDzbAgn3pMskNtFZJxBzLs8JRyRsK2F5kmsWZStWAore6Xta6xborPrrskh36L2LdT6RTEmrnuV6tukS1R4S",
  "key8": "XzwfC3hAUfMcJ9SbhBzvo5q1LwRW6WSyYg8vtgzh84HgoNpjc656y1oCXfBxKVfG7rh8noBJ4rww7pkpqpQ1ESL",
  "key9": "5WsFKA3KppuYkTX4raEBmmNox4imELWGvwtKPKAe17yhQDkbJvFeDRZA2FyMy9gCzwb5v7rovGuMEZabz6bBtDS",
  "key10": "paeHubZKv3Ua6t5TksTi4x6ZG1em4mq8wb8fqUboACNKLLzW9UBPeh6x2beWKmGr2vzW9Vf2EHBYFmsUJUEDXUd",
  "key11": "2ySkVkVVPXfZr8Qtq3QQiTByganDqx6xvSXusEHnMgL9FoeyAfuYG6g158ncYmV1sCin88cq1k1g9qRVoagjpdLH",
  "key12": "YHNDZySHnNKLCnDd9nuGsY8Bo5q9NUkdtVBS25qVWLAUrkMtPe5bGkS77YYEzUuyGD7B9GVJTBi2EQAj23HVjMn",
  "key13": "4U2Z1eP2hGVuQxUKLJHokVfUf5Ab4E3neH8JURvCEZ4ishu5iQjbPtWJSEuXxm4ujPy6zKeJobK33bcxP26jcPX5",
  "key14": "54t5on6tfEjWGn6MHBB84u8FQGPQoNR522sjF8JdxfYuPXWyFYcKqKCUoxNQQ9J8Hnn4dms1GPyfkqqxSCyCZmzM",
  "key15": "4Uu9N5rDUxeS9afrXp395Zx9VLCy17u7fCVHtiMXZHFS7buzxdTqGqsqCYtPtGbLyaqWfNtEXmUaWeyPKpDddZuM",
  "key16": "2iWWyKVfcqX1ZGDkUSBsfkKtUs8sbsQcSVAkAvFeJDApe4PtLmpUkjA5DvQKxro13PNvssoz4pwp6rybJFP8E6zd",
  "key17": "3TjFdNHiaN1SttJTHFevUaCK1BaBsVCwduRVwt3ikdwVD9j95vVq52Pgiku8EbiaBvEua9PZMN3tbXbWxvVrKPco",
  "key18": "5juGCUCREzAD9vKTmaWEavtjt3Duc81cbika1fYqwrgrSDyyhX8pGci77Uy857DcyMKadHXQdgMxP9tbm1f6YEx8",
  "key19": "24ZAiHPpYKxFfzY36Ss1pJzYnRHbyVovqr4j1RajPLrQrhJusMbYCsYg6NqcVqzdL6KWnuqq15vRNCJkd9o7cYEd",
  "key20": "2ry4FUT8dQqozoDJsQ6SZj8tEfcNguK4UGjjDmBNxMYFXwzUafbWmzkeBP96EwyjcPdnTNezPB76HNruazv53ek9",
  "key21": "59CheqYnm1nQKDk3BoBpSA2jJru9r6rQ9dc2eFRESsvodRK4Ytom9Q8QjkYunTMgHoa9s9fPYTcMgFXKb7kMsAac",
  "key22": "UrFNfDAPRwt1MM6WJX2EgAz9UoG1smPsjdWpAQzKkrwDCwSHpwaaMf3dCeUDTNStoRgfCcpyntvLjpvpHV11V1B",
  "key23": "5bKt1tWMkeqY6GsvRdhaHeVaFPsetVr91rakKd6EX2WE67kLLmG7cyXGzJFDZirE8vYPfHg2pdiitrJMvfAzxYiG",
  "key24": "YZZQUjbcQRitgexqf7DnEDD6qEfxeipnSE6RorqBk8VR2Kn3iXP9Tvi3rvuZati9ajGJm1zDyVkg8r8Krh47UMm",
  "key25": "5J7bDgis6NxeZRMePBkgyv7TQtStpov8qVLFBRTwPphEqyu1SvFqvcnsnKEk2QXYYJxJqoiy87aNV9ArHV2LgdQ3",
  "key26": "4abdsXchGfquSyMvHus4b9z8rnyeA9BY9Jbdr5kEfrmsYnGQ8yAD3LNQm3rcyPC5XURS4VSwtYD5D7fH2hqm72rS",
  "key27": "3cBdU6KQiqoDyLezAFMgBy17YM7kd97b9h1cWDK7Yeegch6BfCRVsSB1SY8z6TsGLNQf6pzrgGN5xwmjFfnDDkm3",
  "key28": "2z2BxgNx8H8kQDnyUaCcHwCqtmDqEDcbWsGzbD8aN7CYaaWG2gkbFv3rT2nEq3pRSDSs9vu5HA6yEAw2qKcYdMio",
  "key29": "2EhhSfWBmqphYUQ8WVySUtso71oMeCrRjw6QezqVt4fhXiMktebrmw5wkhFoNXpYSSvpG9BPPuAqKAUCnE788tdG",
  "key30": "25nsgTUaGC4K5vkWQPkX2p9vEVZUCsAAKWYCHRzdz9x4viahdNZbYGb7B1Zhec8mCThTAQPwuy6afs2ScQrDY1ev",
  "key31": "HpXcjbpCAsm42R2oaxh15znCSkKgvMhGwNPL7NRcJam7CogUHpUBA9uwTEjTJtHdpk6APVCS3RVvFLbuzcFaBmB",
  "key32": "2AKQjhcLbUhciVkD2pAfDiZ5Z2X9gNwxbqiFczHz5Px18Y3K39SBxhTE3vjbxtFr5NdJfKcx2pPPCoqMfKHyiDr",
  "key33": "XGAZt72Pgoye6gBHxj6WvLznGjtq578rSmi7mAmXTCYaSrctKiZfjAD2D7iLxAsgpnF653C7AxXfTHrBGaApNNw",
  "key34": "2ttccbCrCi8fsTHWZkHpkpxrQNjkrKpyS3dDiNwRrbHpwqDb99y2g8rUsBrL2t7ghtqH7PooXx5NAXZM8vSoYqNY",
  "key35": "4UM2nx5Vuxk3MoZqrGBfwHwhKgmuU8TRbJj4GhiLN5iVJPCBnH3fQpFx1sDv12NBd6hmxRnHpcKA97SLZuY21prJ",
  "key36": "3W9TRj47HTgSfUZH7WDcbiGqcXffdzmnQg4nXB3t7dC5T2rxLHgoYw3DmQarbx8eVXbAQ7zfAYjVo3nz4fRuWx5f",
  "key37": "3KZXyzzicXwtdkSPWofXf4VXZf4cX9H9uwTKT9g2LsoVH788Qc9hHxLLk7nm9HwAa6zvdoNQADccV2VtSnvEUDLn",
  "key38": "2AreE1oFprKN6njvhf4QzN7wtt7UTCzHAokkrjm4THgsYp9BHAKJxmqwrP5XAYeWorWTQTRaCF75qP1hhfftJ2oG",
  "key39": "3AcdoX8EYvsywpSiHCbnTP9sR84sq1xqET3m8xfycrbH1mhnG5F8jX6ynadyffnSSakF2LNURmoLdfVxj4cK9S6x",
  "key40": "2YPTfcKTFqtakrX59S3zk4zCj4z28YHErG5f2y5Q2CiStQS9jzpZsDdnHhfZjPYfctcAU95SoZqYJNgKeKy6UHpY",
  "key41": "5Rj4zeH19JqWUun1SAtHj8XpT6TwPBssuGDmRk9d7eF9BpDMzoZAN9Ez8JpRHfGRsdcG7GuuXJjwo7K7paQBjR8x"
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
