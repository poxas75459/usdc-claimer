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
    "5bBq4aPmDCaEeGUwhcG4VbdDkRKycd9FuKqAEzTpzbVn1bRcdNVJ4ejNouLyFGePvM2aLq7Nk1VCUgxjASGybipA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wH3NWUhtqr34g67n5DZCLcAgrTvBKTFWoqVPZfmhJ5n9xwToZB3Th5yECzCqUqiGzQLqKUxGrcRrAbaNothZv3z",
  "key1": "3nunXjKrFst2ksHAS1J2XpdCCyn8zNmyRRvxZiDmUdhBiwoGeqJRQhoYqwVTpBj2LM36XGiAgWp5454M89pnKhDd",
  "key2": "63hjCqz7FvsctKEV5kmUFXfcqp6yNiz99m1ujYWqaezFye1J3oAR15i9Av3H62B9zXsU4XhH5dMQ3B4rVNZTNNAa",
  "key3": "4NsViRPiCH4ShgXX2Bp5CSn8FKhH94GdzH6MyTfsYDNVKbrTTKNQxp9PBp7Y1e4eRkQP9ucU7peCWJC3Aq1otYXf",
  "key4": "2jaXKwJjLiDZPKCm4i1HjBciCrcHAJPok58UKEZi9M9Ufj4MnxYcRQiccs6EGpSVQnWduDbwWBKATEx6VV12Lh4V",
  "key5": "3mwqfyzM1HX1dbynYzoLojMPWgPBekHX2CnXkcS4rqCF6KiD3U3TxzfjTDDebLMBCAyKjEDduXoYB2fxHYpguqXj",
  "key6": "276HZP1gAbGg8ZCwrWzP1W1Xx9vb33RSRhLEffzACS9NXmDXLmCTq9h2pWg1eGz1Kgz4HER2qXAbmsWq6ezakxy1",
  "key7": "3NC6G3uBD8aoHeNkCDwRGnjR7SdYVTVQ4BEszZBchUDkV7kXLenLVBm5342Xk6LDMPDfFXoyFjdRQUVdSSkppgg8",
  "key8": "2PE88B8vegh3XhhmsmVkxjRZ64n86dmKLTyqiheWTgP43erqmuQRf1bw4PRmZLku1Zsr8c1WLLj2ixwM9ftWtz5p",
  "key9": "58pTahM5F5oH1sYo8PxyqZ6iukScd35iTioRKRkz7dAQwN1xA33yFvY4WC9x3Q2vAcXmwG3nmzmzPXv3Nax9pkYu",
  "key10": "ZHRHDTZ6F6ouznv2Xd6yee2DvjjLgyY3oiU6n2c4wDGLrDcaoocvCPbYZrbwapj1rJ9KUVHJftzfK6XRihE6a2n",
  "key11": "2w81tDrxjsyCpDi4ktKmmKWnSzWnJEoGnf1VmmUe594ony5DaPiyH9zVXfWS3Mof2hhtxD5wgE2TaGSQ3GyLirEx",
  "key12": "5A4o1zh3JkHB2Xo9vpSUUNjyjcQUb9LmtFKeLa2W1JanTMRqfroZmwUCWk3TsGMgEYKLQ28m4oyWNpHiYhd9RiRY",
  "key13": "2J8na6146y47iuB91tAyxd1MALUr6Vfvm5oKPJ9zk1EEFwXZBqSoQXbT2mkj978H9BxCnZAmkvCZK2eEDnPuqsYY",
  "key14": "Afj63DKobDixJ8iF6MSMYo73MJ7x1LD99LR3xo3VJHsZBDjSVL8SGoQCAVambdnKkZNCFxfy4WgCT9Esmzv9f4D",
  "key15": "YBAA5wx58Nfe7T4jNDLnGJoVWo1NxekS7cfY2ksUBKFqZS9eVHezd1odnP9kkAtbJ6JkrAcShpkCWPRGRZbJpUS",
  "key16": "3EFQ26BHHrRt56eVVpzBHXFEX2SsNX3hTLtmzGVxkPF9Y6k54bvUPiC6Ef8BLfzpPFr7q8Jmx3h2aKyv58CLBN7P",
  "key17": "65X2n7h6zGDMhTDtkFuYVp1AQR28Lfr3rKDrjBpDCPrbmEUUAVbEeouHouuj5jBcZHbm8pxcMKtU4xBLmjzF5nUV",
  "key18": "2vp2f7C31c8WEiA4P4MtbRiWdYDBho9p3m2fHA9PhNoM3LwhXP2GjkBQUXtPQCipdMYF8XuAW3euGKLcdayE33u4",
  "key19": "3ECjMp3JEyUGEVy6ZTykpGRKiVWXGeW34cLmfCwAqXicigfh1d9zc8P4CSG8pBvCU42bk9PVaqN4pC15DM7kdon8",
  "key20": "2s2pxy7xs64nkHFxHzX1TuTXxDCi3omYWdcDPXm5fmpjWANCDiSWsWFjhGSNPReQEvjrxwRjfvyGanixmqbtcgGx",
  "key21": "Nwac6wgNDCKP8M6uZrQhSBVoX6T1TwcyAxxYRnSvUsrg1GBp3JWNjXTXEkRJ6UfWH3bCVXrienZRZZvZJJW3NJi",
  "key22": "3rpcJZueQWJqYTnQ2RFZfT5PrPNNkzngkgN1ViHdUkWiEQTkRbkV5gGqeaj6p1z4VWuHLvScmCpT4R8VYemvX9VM",
  "key23": "5jPhhKMrj21Mpe1daiNRrk1qx4L6pnrRCnw4jfWtynD8e1Wqhn4z85rNEjajzkZLb21JFqj8PDbNm5KiYpc983QF",
  "key24": "5dRHNGXJ9an4vZnUT1LLP6dLrFEgF5PEJfgDfgDYowviXbkpPhyz8d5hy4ZM95P721AdH9hYJx7TSfLPAMSqwmUG",
  "key25": "DX7nfGezAMjx1WvEgdQzkPRuhLftBLHH6EJ3G8F7P4j3z6csbpehhYsxyksDyBDXqPgMsL6s3u35wyUDYCQgffG",
  "key26": "2bP3rCDDJAGYU13ucgJrRBJMNeRyX8SRGEnzXRWrPdzR7fc1WXwcPT7QpPzkbfShg4tEEP7YF5aqMb2wL6qg6fTy",
  "key27": "31AMGaNuSfYKrwNLn5Gkyzi2DL23TWh51hzTyR7FTencGGzBT7faYxakSEkyjtbcJQ6D81b8nvudnFFPZijurKFP",
  "key28": "3Yebfr1JHdTfs1rKMLxVSZs8cp2ss1pwA4ZKvsH5rDMQTfrQjkcbfKKeDG1FkjNxwqutyjTM9bWQN4SHCQMLdmvG",
  "key29": "4reHH2AAbGtLCSeyRdv1nKASyJHtB9nwcAKB1eXkHNqog7ff2pNSEhbULGmrNN6QmRenGqAqY6XpUUcCgniJ1uam",
  "key30": "5soAViPhkWscCGn91ukmy4VS7ZJfHsKksar7cikcjMeWrckiKbBs9Tx5DuGsS2AWDUeoSem4fFT9jKL3pFd5HtTk",
  "key31": "HcgwtEjqjetzjXwxT72ASMwAUFHujaJWgj1TSuowj1hgyHJATFKDxGuchNJPhpAa6DrB64awCHbuDzL3QDpwQqT",
  "key32": "3DvdkT9EmPT7EafericSWVFbL2umQ9K1Ju3Jd3UfNMrcZySGARKU6sV2dTGm1idFupxoxC7vuTKhMwRtydcnUTty",
  "key33": "3ArGTt9dArwJgE2QDA87s1pwH1vgSAJXXnZcJMHKQxq3xhZ2VeBFaM4McnUJaSbeyWaeELZGnDQ6dLwsSKaeSWRo",
  "key34": "5gQ2EFis3ieq64mFsXBVh3k8DVsmUuJrXPeZ15gXfcH2ZjV5n2FtFMtqcbYyNRxs3FGQWGf8Mi6hGP17xaHxXtXe",
  "key35": "5iwViQvcTvZrV3eTiLNTMGcVYNDUTrd4ruArbdZkLEnRezuGzdKH3XgVRCW3JYtc1ruG4GPMknxPvmTnSnYBZzg4",
  "key36": "aUCb7qYKzRGZA3rv9yHPdQXAFjjL3bhXv71fqb1QR1mDw7qy7y6a8JKTEwazn4YjvuMNxpSrCpTsyQpUiC3Vf4N",
  "key37": "3tVfxVDeB2L57AQLMtS3p8nHCcfyfhz7rk3sL45QGvcYDwDHMYwcUbbicF4JR66kcoZtmiXk8qGYjKfHrPxTCZbR",
  "key38": "3RQMw2MqZAWSSRL23HjSwFGvv3sHLtC8PxK8tpRmbZ96R6GF6fvqqyki8h6CLuhMeNYHG1kHVz17gPWfDC8htdjr",
  "key39": "4RRSwNHazPoiVDvqz3JEd5zzGV4PPNdUrnUKEvuTcJgLViD7am7qzVHBFgcbNMXUVMZMi3RoFFSHF7bGnPZmvfPs",
  "key40": "23J2sKBM9TAz8ks7dYN8fpwBrjF5bKYTKDwJVfjvK936TEj9oBPHrpqKmuovzMc2z5MUhnYmbns5VZsrsKNhEKnk",
  "key41": "5XXCYA3nYd7JmnGqnmvPWL9aNrQ8RKj682wyAhWiHQfLo16mKZZTLDBWALmi6sLvxHZuaiDugmcqW5je9Yrk2DZL",
  "key42": "3wdeESDdkDb18tddTTReQy2KmuxvtrsuKGehfxrjXbtBZ6ouzfVX8iQ4PToWsTfwJRkk9LdMoGSwLcgFwTCFSPi4",
  "key43": "4wnFRNPeBksfUdtYyN9nDizpNDwwFt3aAxtizQDxWNmVRDhh8icxyvjWmhAn3v7zzEUi2r1vRCbnYX6FnTLVBANn",
  "key44": "432CWWrdsN8PEPFxWKrNWDZaEPv3HeNuC1M2Yojcp54VcTTsEcosiW1CVyyTx7Y8PH4Po35CzWCf6miEoqZnfues",
  "key45": "4phczBdAwYgiphUJPLam5XyNB9KQmfx5z9HT7XPyLcUZ4qi6BxaFMmTLnWZCbovKdFUKUwBveKFG1ELAtUUBNvNR",
  "key46": "4fFCBzn351obmE8VGmDS1cLZfu43ptiUD7HfCtPBa7EqtejcBjuVoa71qywnyGVUiJxG4sHYo9CekiMucjqExdyc"
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
