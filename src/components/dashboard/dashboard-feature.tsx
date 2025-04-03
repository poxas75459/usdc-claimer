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
    "3x6EsyuhsNBv8GkJYLLDJFwhvdZfEJKvJrFJTWtnLdX43xke5VpNVuM5DYUktyxsT3AzmmiZJDhziME5vsvwYhQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61P3TVKNozQjkdWCj6DWB1ZPPBKLZLTab2pNr5kqRd2h9pi3g7L7Nsix6zWxhVhW7gUdMACLa5uTZazj2i4iiuL7",
  "key1": "4nCADVuL4wxdbMwwUyupaiTQu6p5crqNfUebSpXc3rZ2kJLbYhwPuFB2ELEKzGissYjE1U21N1pV6LBYbuYSgy1d",
  "key2": "3L7Zx69ApJroTLU1E34EeP1crSwBFRvix9CJqsgW58aumxUhjsCq9dT4143MFXVSLgEwxfFZRozoUipx433NTSpY",
  "key3": "4P72cuvPXoMtbhyKzdDfRk3KKn6cpmfxopkLpAZfZNZLqebFyrqRj43eXhfzBBG51wq3ss2QzSdPU9zaBCXTsq7C",
  "key4": "5KdTDeiCoqfFqwDNHQ4F9FLMbhqfs4CVWstiLvYMr1XVWEmWRdrP1gKEy5WrMXYxsjQBrSdoE6rg97DB7qK4Uc2D",
  "key5": "jcoAMVcNEccAf1UnoHq9oxCa8rtyJwwxkFn3zu3vHQfc2WGtxvdZC8ovmGkphK9xY1VQtpeaxLTL1xTda1NoB77",
  "key6": "4uG2JFqXfWZb73rL2aVVBV6m8PydCid9yX1QR3u9Vd5ZAmM2oorX7nsxDGReZZxC8Z2HZKiEzA8azNQBfAaoHB1s",
  "key7": "4MqsXgWF7XqBsFXaBw2X9FmyK29UZ24izeviBV8ayyoVJwZY6vLWUmKRrKSwhvrdeVCd8aCbsKSFR8HMEQoeLEdu",
  "key8": "K6L1TumokZZsgfchTafK23nxpYwbugR1c3U3opk3vNyRvUVH86BewEfPkV4eNapJNMmDSMQ1Ln13FbjWHK7JcAY",
  "key9": "DhbF9RumVLZTYtthmx2MxSY5Kw2tZ7w1Crq7z5SeUvW3mBwD8aaBcYoGkEQygBB8tUKtTpJF9psrPkC1ybFCgTs",
  "key10": "gNXwYkjY2wGM38aT4S1tAE4B1qk4Gp6KamTddurojLpahd4H5L6aPaqALypNAmoqxYiYS6wnyTMa3EYipFyqURw",
  "key11": "4mGVQVGr6Bbw53gZdjNBCM1pbVXZvXEDsQ7euELebWh9hy3u5FDJWBjJGKHuN5ZKvRasTi3shPiqLLapqC9SBw3S",
  "key12": "4wNh6hZfdZ492GyYrG6Luzrmfpqus8qQiiwMJayidBAxcKPBs28Hv9JykzJFgd5s8EmhnoGzBsdKtNLCfgqce4Aw",
  "key13": "5gz2kQLcYWGrCphw7nKSVwy2XDRccVfjPpqchmVRsUA7xHhebNkQNCJHEX3eT9qo9YbE7mkGsoH6tCesVdN4B4j9",
  "key14": "5iFmDdadTP3hff1JfdCMF4hcqLV5fANmr1yHB4dkPgN7p3HrxKtCoDJ6cxGUqYsERw8ftDdTdEYs1G9js7j5Gha9",
  "key15": "GriTZ2CicWKwXPXDcnwC4pzUtGyMb9JD3Z61d1swiRYDMaWKcFYC4i37nYEEKE2JKv8JUSmow87TNa31mY36uAe",
  "key16": "e1QnyVN6uypdmUNYbp45HyvbfuogJNVJcSXXiyvM6shbhFE6defabjBrVurx29PoH2kJctk8ATTLzXifzE8Jdpn",
  "key17": "5bHtkviBFDU3RijhRD2KQM5SBcSsYsxChj7DQkexbRFYkkLQ7AKcCqW3SJY4dGbJBkWRc1dATV9jHXSUtcmqvCHw",
  "key18": "21qp913HmteSg2TGpCkJKjonqsa9Qr6creKC64ufeqSnMixsLPZTrWa4oE4F68HcuZn4dPNbXb41H5R8GXGM1hw5",
  "key19": "4earkErk2z9cn3wdkkyRf26qTMwJgmzrtuWtsUmxxHrsB764ogU25SAQj3RdtoSAJtZEMkLbCYQN7YNnHRYJuBY9",
  "key20": "VVSBy9B8Ew4hP1ZaahUDwXMEocc6to8YA7Vy8incJg3LH8jraD6c5P6zxCmgav2zSytujPckiAPu2xNSezsiZt5",
  "key21": "5tur5ndQhEUrhArKzLqf2e38ihVmkmbi4aPGLWaxKoBZ3PNnc9oVvDzg4L59H2YJNXTns7b994qwC1ADPjGcusVt",
  "key22": "3SvWFBSvZMb6ffHX2tNEuCFa9r34BGZCy8jsk5cVmsW4YNS2JQhGWReuyS3JuPMMn45N8kdUGwNTaoKvjvvEEgfF",
  "key23": "5Cng8y2zyVhSXqiuc2iy8c2ysvVoDwTxetZNKKuvyh1qzccf9c2RLRWgrqkN37JdMVrjJLfLod2ddyDE3BS5mmGS",
  "key24": "3ui24pLhpuM2McGjqEoVXSsfPpRTPcP8jorK2pMSFBfbopPzK8oSSbk4JuGZSZe8UPquePtsEtzHhNE5PAW6EyKy",
  "key25": "5PeH2NfEkhJvmJevJ5uA53R9XBQiZaYY7i57jpvrromAm6JdDp47nh1d4L7sRVs92t49fJVyKkzG7beKaYWjQ49Z",
  "key26": "67FrsguNafc88NPUnNoLwRuom2MqwpVfN6WMoGRHZ9eMr26WVXH9CLmrXyjSxLgoamN4Z4crwqJczZWNYfmk3gDZ",
  "key27": "5Bq3cud3PawAWTtAzP2CA1LgECrtK8puhiz9yz6jaZqSq7N377fnFbgmnwNN2Pdi2eWHV7rzSieC2vmuPAY3xwJq",
  "key28": "3GME55w1x196z48ouyomUo3fbPUm7ABvj9MdfBHuAoxDVjp1Lbmej2vWVzDBMcnZBPSmbJQffttkdNZ6b8mvxjud",
  "key29": "66ugtMvGjVCgkc7VgUkbbfdEVKc4ZwRhNNh5uddEVY58LaeU1VLwk1mRm2StzCq3jU776r4D7XnpDJCgveQCtyc9",
  "key30": "61B1WSmUU972drfgncmjLLpSAH6dW4SnooyePf12nNgUUiF1EPg4Bi9oCGdaQHKXD46rQqWvfiy1Hj7mcjrg9A4k",
  "key31": "4hTFVKqcpLbpQ3RdtpcQ9UreNK4j6fd4E3uLt4ZTLmUEfN8sUZuw7wutMcx16tNsYQT1XtPR8tqEen2udVtuuh9c",
  "key32": "4rgr2qgK1gaSZEefdBgTZHCAsgiyPf4UR17g46GTQkCLWuGcLkFUiLWq92v6W8VTfvcLJFbriXZwwURa77WyPEGy",
  "key33": "2zcuaiF5wmXabfMjabhiKyGBDScHbYX4cSAjxVXGqwMby2V46BFakexzbtmaTknsDi4mUAkoQjmcBtA4L6GfaBjH",
  "key34": "HKfzhagSnfFKqD84nEr9PENQBW8gP8FUF72r3udDfEMVSVN4wLfQFQHJdW7gi8pTjgKELNZeW6VAA2zLaePWs1V",
  "key35": "3KEgSRAzSr4hrMG2emnv8yxTDpL3PWWfn4PBMtQLuFt9hhAoktMt6mTuwD3gLZGHLwER1rGdMp7CdKVrw8BzwjGJ",
  "key36": "5uBR42B6nREPvVbkTxaQQQLAkVpsA6zuLZ2tvWPLVtRi5pCu7euidihHa6VWZCwBESHqHwgnnxNFUv5eBacwTAcX",
  "key37": "2hV3Raw9g7PWU4WyGL67gkQZqVsnXnuRS4u8CggQSvkpJCAsBJqV6L5KivWHpiykrb3SpUEP4UiUwEewJWXriv1D",
  "key38": "3ajJs3s9ahhoymHt6oiqcuLVVeRRyMDmvitwar87DhxMKMw83BJDHVKx2JuitY2DtfWZSutqBgG43CLD1TpFgfNe",
  "key39": "5MbpEDpLPHwq7EXLDJQvHvaU2D7LGTj6YwBvCdqgyN9uZ6M2DH8TWBeza2yQkqSVWB4tGRkHWSqzi3bvdqewHMVU",
  "key40": "3bRjq9d3ypza4CYUQr2PDpnh3YASTNaUnNBLYiHdu7ifUkY2FQuwfnjE6GNm1b4eHsdQbidw9ZtFWnLMeka4cShs"
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
