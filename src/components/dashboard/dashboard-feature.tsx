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
    "p56XooHb1GrFJcPe664gHRiqPcUJBq4DJWorZfxPEFT8wVEDf5piZz27CtCk3RRnw886ctuinLszeHtt9CGmf2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aDXmcSytKGFXnRBofUpmb8cr1uNCaRnKvKHPKTBAWTohgGi2SSRvUpH6zBdhMPMW4vdJQxLdRR7NB8jDyFUgZvx",
  "key1": "4RTny2JfwdNjGhPDb1ckHTgXYhCbme735Ksk1zLLRWbpsLwbxXCVdKjA5fsP4bGxaewpqPEWPRZFQzk3j2uTEZw2",
  "key2": "diiTZoJtKzSJtynhiV3MSSyAysmcx1xzEtj1fgrLPGDNyCyrKCTP9z1MfLM29rcZg7MvHgcdxVYbe5J5dmvpp9D",
  "key3": "3ogiJket1GFZuU7XhHUHgypHuVXny9utUbvJCBZtBzQg7a96XGrMnrSyByJMBAGRNbdGVFccagrhzKxp4PrKE9ez",
  "key4": "5vQicYw1khLdKABWg8suBzKWvkhVFTBtM8tkRnfrWojj5qHzoydnRiPVHn72yPAd8qJSqUvzgQL8ud3rv2R4tnPG",
  "key5": "2SovrHiisWUgSnDnnkzjSBmpCc3Q9xqWDgCKT8LJ8ai8oB8C2SDdRZEZBm5D3vgpcUZ41W2rWQ7uCoJdAx6Xu6Cf",
  "key6": "287KrTdzSQpfgDmEgrmtCw2LM7iEkkK9ZaArES5mZ5dR74aadCZtvFst523Qo3vfUaiimNBubnKtE3mD9ocR3kQg",
  "key7": "4GGaxEjqQSxxCzsryvBWTTRuhdQrUGqw7or6dsmxdWVabEpgPzmCdg8SY5SmMykFh2XDpWqjpSTuKomD5iEgs6WC",
  "key8": "2wEJLhPcG76m5eToom5CZUZhxwL1TTzWzJxqJacUCWH42Mx4QjUxXaxcFhSh1xckdHK8nVEPexJ2MEawcH3m9652",
  "key9": "2cDqv4H35kibspavLopvcEM1KNvchi2GWZWEZ6xfuGSMoEg4fDRU4UxzLruBVUor9DfPz3XzA7pbTHxgi8kkoNoq",
  "key10": "3rN9RD138gHMUV4KTtyZWUGxFBVqomw91hw3xAY8Bp1m5xFedNSECotziq3vCZ1zSrchCEGidQdREiFsgSz8kCdx",
  "key11": "2RTQzEPy7oB5UJqN7uDWTbvQ2Fp5KWZPohVvKTrJ3zNPeTFV7SF2weZscrGr5C8te5R7zPdnbkq3fWppmPmjNfPV",
  "key12": "5RDQ1fkmB7Q3mFHzD4S2WRABwWRYfUdMP8sNM1Kqbbp7bDfQa4RWVgQY32uEfwwZUGvhBTwoUW1bDsBbho4e1rcS",
  "key13": "2b5Yi1oiZe5D48UXQYXVUjY4VHEqpBjqNtSRzVTVhqq7ZVyBrpqHHDiQ8E8ToSR85EdK3qwJcR6Jrn82ZDLPy1ke",
  "key14": "5ZuvDYV8EvizRUVdHbpUGn5hAnv9GDZhxTggTf7oeTzFSWaLQiaQzvS1uzidMSJMAF8HiVkiRWZ23ShgEVgwTtPN",
  "key15": "5CuywiUHgp5Gvj3gdstbjH8V2StmoLGe1qEDyxPgruTrKKfnXJeJN1ZX5T1oxhKAScs4q3KPVL4w5NXnKD1JgtW5",
  "key16": "28UmAVH3tfVnw85qdMWckyngGcezsT1eY8RhbcJGXssrJ3WV4TuWG53S5LvhXiTi7fYMCWpNufTogjS8Hgkkkgym",
  "key17": "4B62KBv9sMgbW4vpxFuL8YMCTaq9Z7S1673HG148TfJnh6izALkDNPeSnhhg2i5Vvyj6JM3KnAHRRG17iBGDsxXa",
  "key18": "5TZuYoWjUr4TF4tXangjE4ViWnkM3jgXG2hQCV1rxMTUjg5KN2QK4cJr17VdTo8HP7Xqqoe5xmmGPPD1q5RHSvJ4",
  "key19": "2KUVqkLxYLgtAQiDtD9zhLs1YJadyYQGHNWPu2bB8wKQ4f2htXBEikng1ZRLoYePK8srerzAREtCvqCMdSjGc9mD",
  "key20": "65MSvJpKnqJvKLwexoMm5Lh8WVo1mLEVaHGxiHypLjYTui4PEgJWqkUfyqR68Um2EtCUraqYK3ksG749aMuBXGjV",
  "key21": "3t3q1gZj4V4ep3Gf36cNAdPSqc4H6xw9BveSmsPLRdFKq4XrqNWovrgTY87ZqeP6yAj2criZxEyZjfkH9YNDmvdN",
  "key22": "3HgVgG6PiSKq3azGyKgPMsC5fyfB6JrEqa3cdHg4FD5McLFPZB8mXKvWCDBuxBLsh94aatXAzGUatZAcX855j9gX",
  "key23": "3S5Jo9TM6SK15frzriM6MJZ12wJUYiG4wMAS8d1qRwEH4Dxa1zcrrZmHkhKmTV18PtkGtVnm56gJhP1XPQvwrKXu",
  "key24": "6iGqimsQN4ymab1JXiHz5msUqRiM5XcNqxSHxKU9mG5gXDG2Vd4L3suYXv4226mE8C2KTXK7aUiaGqgsvy65Cp8",
  "key25": "4aht72hWWGEx3wMDWr62DHqe9NPweMrWcvWDPBC11ex9VpWZTEHmmxcxShupeBybuSDXLjZ3S9VECmFGbWCY1Pa6",
  "key26": "41HVpK1N22hofgKzV3J2d4cL9Sjr4D12uhEwDmMNUdm3TkC99vU3JctfaUKEfzLQDcquT4oTc7pp5CS5xLDFxsMi",
  "key27": "4c8F3zhShDeRyRvo28e62gwqRx3Q6CyJB3rFaX54Ao94c9hKaV4VpDczG7bJdgiFMQ7x4sjiEiSi8yuRwbVKiXkm",
  "key28": "28ppFQjaUSBanikWzPjvsmoGLPJH9zRULWjYYdgBhgWJWJVvEnbMAba1shcms8cKrngGVeES6pDFNoEqnoEZnsnN",
  "key29": "2YWK4dQHfnMsUk14hUXMYLmoS4mbDHL9UR4NHhx3PBLJjob4ko1s61yLLuzH5K6KPKF4xEWXwMMzbjr3qBvVFHyg",
  "key30": "4GEGS1s2Biayqa4TRAMabvfwSgqv5npmAicAugTgLK8qd9GAXCsnohvDTsm3XjvXArX5Dv7HYzkeY2DwRp3N8c8j",
  "key31": "5Q5xJbV6k9Bcqvko1u3E8VgwGmue8oGpeen1YTabq7bqGFiXeNzfAT6qYu5RDXtvNrXnUzyF8JPgDYBmRX5zuRkg",
  "key32": "KeyVp4ZzejcT98GYHgU8RTsvVvsxTsN9MpcfGiEaNKwTggkPWn8afXD57U4hZxuWshPNtrSDEFaDGDWs51grLsv",
  "key33": "57DzxQK8fAbJShi94wTiN8YvVVA4uw3dVertB3H2jtLMye2Xf2f16x4aXJeDpsW5tLzx92WaP5C6aYg7KYZ2xtDH",
  "key34": "fVUsxRYTtpd1PHSVNfNHjzdFFpVcfT18KRNZ5go15bbWTuhTr6DeKD8F2MhZ83abBQ2LtXBkm2wRHfSUcYeKhtA",
  "key35": "4kLoHf3edhFKw8Lk97ri2JsPdnVdBCuCUyQm52poz9cf198Xopyd99Gkzrbm9onrzvJS2U9WvCSnGbXjs6p4XMxS",
  "key36": "WhzrRaPZM4C5LZsZVqMjFyoqx3UzJjeQz8E7MCzPSVpHbjdDB6SBXQzisPSZzCk3YbrurUnkh2UqvohccMrc3zi",
  "key37": "2Wukd1FYk3Ju1hfdo9k35YkXbXnape8Myf7jYF2KHEc7mxcRuJ1Jwov7sBhpvNkDty646GafHAVexTGK5T1A5aAx",
  "key38": "fyypjWLCQ9aUDCDKEBXuJYH8KQr5nzD3y2Z2hgu5zHw8cV8eSQyaAzdfBT442UVqL2ypW2z5dgjqYxt6UD4vQFT",
  "key39": "3cMGfN3a7ku95X79tPB8eVzWeRsa9wA25nfzpjhFH6i5RTMrQF8xWmWh2B9U7Gk8PKapEwAc6hHhynyoE1A133Jv",
  "key40": "2XKEAZBvWSKpH7b1tQRXBUWzRR6SKJYVTBUV2PJq2dcB6uHTcSiBC5H699LpSNFuijq9DzdeBViyMJ2yQoZ4gyGM",
  "key41": "yGb7g15YHciJAtBiHdtqQt1bEj8fumHYMHV3zp3JNHGxZYE5FzDjMjzM3Cha63YNWw8zoM1gfUxXJAJwim8FgBa"
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
