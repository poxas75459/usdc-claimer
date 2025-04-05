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
    "eWhApuV5AaT9BQd5tWBZiyg6jRWLsyCVemeeaiKYS6TavSskt1JcC4VsnH9PLZCbFfpwTFtFscpF4Db1JSZoo43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pHvWXrSBX1Fd62mxFA1PdbSVcBDVdmRtYW8EciFWUJ1DGnKYrY2LVBEYuH6cDDQGLvi66siHFTYLfTH1eQViJdp",
  "key1": "4oNbmQCZqq6FM1BZKv7HX59pkR9W7TYXbzpYmpHBzUUCtAQHziRMDgLZz9AxRpK5FGx2mZAaj9pLsY3eqUHRpFff",
  "key2": "4WYSAFb439ZtgGRzPo6jern6nVwboFMuNR27ePFek7Ne5k5yJ7acnXuAwDWso3NVxuhTbNhBrrN3Eucpkz56tzk2",
  "key3": "pHzsCrv5Na2KFe5AtmVTy5ijSzRXhuegVauwqJVMwHbsUxeQyBPBvDNPuQ5cSAU1SLfCaeLU6iA9Bz8KNhduyDu",
  "key4": "2ohoBikEEVC2WLTFRSoFNegWKVKiU9VoDpayRFNW75mXBRBRHV3fFgek4KLw88otX3f2uFX9gFwQD63yt7wSC5S2",
  "key5": "3jJWjZ1AZACTc85zQVmzp6CA5YQtzLfSYBrRPBNmcKYiES6DNEKyR6iLWyQxS4c9myBrCKDoT9BMtV85xcpuHRfy",
  "key6": "41Ar5DbATB96ukFU9skprbR4R5ghnQZprQuSeb5yattVf1TMdZes5Rr9FV9BsjZAfbgA6o7j7PZVt5ULV26iJkZE",
  "key7": "EExtf7WPMA5WUnjZNDejW9d4DMSgRaerZb4Bsjmwi73sghxGSM6Eu1DAE4Ehet5Co3kZnkgjb8hqybr822bRiHG",
  "key8": "3xg1aoLDecW2jZxiFXM7QymzTSqET3CVYY3XwZWiAL3HQLaGd6TWuizU6cyaroiHdgxBkdnb779s8fvjafSQGvLa",
  "key9": "2qN48dNTtpN8e7jr5pbRTRwYo2uEigx5Li4PDKLPhRtsa2KPRDjc668wMyHhgYkhouTtfUa5esbc2X4nHh8Mr9yr",
  "key10": "2WdeUtej63gAPhaZ85anDmj79bg5ZEh82ZYjNpAEEKqVb8zwjaKm6RzzxJXoUEdMTctsDHZpszGVWgQtTCxmFLZD",
  "key11": "2qXzD2Rk457Lsw5D8kUv2ZjN6sr6RoRvhz8BPwxXDsa2bgYTxdRJaKhqsVpNjKVy5cxsP3ZL41P2rG68vJadoYTB",
  "key12": "63WKECbyYUs1uG45qTguU6r7BtfwrWy6Y62gR4V856HXQn2dKd4n8n3oc8CDKb6MxsYXbaqPKLjrxBKXUJwfNcdR",
  "key13": "NB3CEtRYRYNkn455zxmZN3qwcxcTNR8Vpip5xeLss44Jqm45LBUw3h9h168J7vSdri8z1PfDYw4RVcv2ngUG6mb",
  "key14": "5v4MDmwRSHS1BmZAVo35AZYXW14dYkcRJNK6HWgo2XtpnBcVehhEb3v3ZyuTBiVgrsXCYMYnT3Qsz91DfoJ4XnaJ",
  "key15": "3tBzM6bhZp8APKQmbGnXVBQCjHHaCFTyr2T4BgdzkWAv7tXZq7759dEaCsRm8bPxrBiPV1JxgdAyNgTj8v6GY6L5",
  "key16": "2mj4o5XRBZxt4yK1osUULcBMijbPo7FeHC68d1jeFviwZ4BUNo9UNvz8vJC6q53aBkcFs7JndejCthufUDVNGizv",
  "key17": "44bbNbqerSPV76N78fYknszDs5N3Z8rK2w15cGeHTeWfrh47cXiyTG1wopiMsV2kfGb6UmQLgNbys6J5JTUEV1kM",
  "key18": "2J7hu5AC7gHfRfmiaBmAeDbAkuy39NMuWdyRBMXHZ8eyudwsnJzqBkZkhoJhfJdF1W3jzuXPruKMPQgJzZMUAyZc",
  "key19": "RT6bHBK6CbogY87vmfExhn86NkNTXCEcyhWtdTfChf3YXbcp5yhSctBK6r64iZNuix198VHMfuw96WGwBL6k36M",
  "key20": "3J5JLsfbdGMZjAdWSiyG3R24F1pG2Q862yvMgEzSBfWJwTdmB9iHp7JYgX9Wrzd4KhHq3HioFiwXoF6pZjPWhVBr",
  "key21": "3fhkKEyj4BcLe85pEz3Wv6Fkf4Q989tFVny2LVGjShBvsmZ8CxyUhTgmQikQPwWiMZm9y57xAFQec8AA2ZJB6AA5",
  "key22": "3xvEht9RgrfhfRMrS3qqM2EctcVtdrUSfpLHCkzVS9sQmy6kxTLMPx6PGcnhVHGnh1hGxaBumcPR3Q8rPMYm4DaN",
  "key23": "VnURrMzJsrxMb34Wv4J2Usi2wV74h6mNiemicTuqNtRZfqDGH8PbgLhecF1yCiY2vt5JnH6iS9EPF94ihG4z4j4",
  "key24": "5CNKqRSnQbeKXbmVbMmZQvBq4oC982V67KYrvvdpj4gYEfpvuaWkLENKZEbDE8snE7fckgPeYGFj96uPojYJtDvv",
  "key25": "2NbqvFbzT4Hv45SQdMeV3YSk216WJz5msw4Gx4bkCWY2CKk3Ywzb1dJZZiUuSF34aSefRbJ1HULtV7FovPi1Gusv",
  "key26": "48xkcWHw7XvgoJPdqMLXTxfGGt5JGPxE2388LWpQtUhiGstgXSCoVFxuBaf2eNwx715WUDRqpkB1zWWgM6E8WtHw",
  "key27": "5a7EV9mozX9xhPKCtzbUdFm3Jcdi1QE4gAbLfChMoWTSugF9wPMP5cp6VnwW1aQ268srqBATmPfpqF9GFw5ddrGU",
  "key28": "42xRSWycui8Q5NHpBk8aw1ZX982vi6D17oGcGMgygeSec3N9BruXohQ2fJPpoTUAS6HaZjfZMQdCNmTQqSiUZK2w",
  "key29": "5HiALPGLGvHn5VcDurkV1qfEvBMef5HNsvqivaSgpnEduCm1STGqK67hANvwpmQD7vgJH5GPmm12kWcxbaQLHA6V",
  "key30": "2SWbjps49DidopGCHM8ZcbTu5G2SSh6x27pkPopFvUp5SNtjDYeeNTpX6PophC2uZERDKy89mmt2ubLBJcFfKDsc",
  "key31": "5RbyWrixsX5noVEwiBD8PSjSP62VKQjGHhm5n4ZQ8zp2LciQmAmV5me5mrpUggo8NAZT2RFtWFJeUnyMg6xq4NLY",
  "key32": "2tgyBEC2AnZUd5WqFZWymsH9DBd6Mb9Vx4e22cs4PQ3YS16cycqPjqnq93vCTSe78cqt4a8MUQVtEwHECJcipBKV",
  "key33": "2gVLUXT8uZDAxCMShHDuiTgm6fGoqhASPPWjkef2fiZX4GKAPF9LvWLkHuce6HgnYKdxxc3NcsFfhnkNsisB2bN8",
  "key34": "2C4oAs4XeWVoMwGf4EzBYRaZxDyHEQofMqsCy8SASwewmaUF1nW43PkjQ2YsNdejB7e5qGcSbPGdYz2uFPnCJhiv",
  "key35": "5wPhb544Z1kaJg1bPVDFsocyqCqvWDtYVRnijgVAbxkfMRrE8prXKRNURGmnRUGzdzPb8htzFhQuvmQE11DJDA2p",
  "key36": "3xf8ZddrSBV6TxAAqktTLN1LczJGD5SRd1YUpYfTt9ZBwRf3VMxafVKqo6Yc3SDxCRB7UGR1Lf4t36B2rBhzMdE7",
  "key37": "4xytmBfK7srH1V9wefjZxMQUtCAEUw1VtC8d1ZA9uZaGzEbPQ5uarYqw99xXpYJkvYnqhDbFHEjFLeHKwTXp7LNm",
  "key38": "3jAQfYzCsdjkUksgBxjYmEDsBF3ABoCtGB6x7GgPfGLBxVuBQGNpz7dgqaWp2XioxWtJ4s8Vo9ASrJqCMnMTFpNs"
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
