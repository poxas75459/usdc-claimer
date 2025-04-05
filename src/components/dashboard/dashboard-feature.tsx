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
    "Ezyb7NgJJkeLJwR5NCsoBnhPw963wFBwaf3ov7HsmnrtERiyJHu9G7GVZ61sTiP3dWpGiVM1ZTsJBrzoSC97AWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VpNXP2uFqKw5oT4ULwnk4v1pT4wPZD93nt1m725bi1KbM43mRjaV3LYi4CVN5c54gPWzG7nWJDzNfEcRcbfvn8W",
  "key1": "5Nsfq1h12FnR3Mc4YaHFdxmbrRp6QX4SnoXcLQpu9HJWf1RzmreNgQo9edhNx4FeX4aKo1ZgeUMxdtU8puLTV9xe",
  "key2": "3foU4UAg5hNkQGEBp8Rsp2Gv2fjwYFVEwTs19sNfsvdCtpBkRPYBLPqUwsW17oXPUAbL87r1f942U2JhfmLMCeoX",
  "key3": "6448VEdx1urSn26vx28qR9qKJZKfhAzXGcpG6h1n9BMdkYsjPsABJXNXnWPkKwaBUVKTEQqUgF2RYvkGY7To7en7",
  "key4": "4D8S1endpeimKrw5PRy5Q2fhcQY352EWydVBVcneZ6U3ccB5uZghBrDcYCoLHWEZbdmutn3PVh9BSwArwBd2kNPZ",
  "key5": "u9B4xu6H1bknNMv4JxDt2Hc1AAEjNgJcUdkFYUoMeVuuFLu9UKjLNcjhTVDnPx2Km6pexCmgmGUaoUJxqazTnid",
  "key6": "5rcTy8Zw1Jw2DdghNgwwuaQiShZCxS4omtAcQiLNZ6CryAdtfcoemffzUEp6iYKdKoggweZ3xZkjZFpsvYwtML3z",
  "key7": "584TWfeUWFPoSnaj1LM6Ap2fjR7bnAXphs9uKPCPbrksWYvUas15uzPin8SsKWcSTDUkYPJhpqJTwMLNrJumMtHT",
  "key8": "4JdYbB7bKDvzbRhnM7XzNc3p13DdahF9UmC6iU1K8BPfZ2C6mCP5GoVrdEykKBZspDLbDQBKhzfoKAa6HXMezQBU",
  "key9": "63q5cBa8voPWvmkFMHeA4MXTa3iwRq2CKCvkxpEWsQ3mhys1Wa1KD1ERdWCmdEvu2Q7d3qJdyRS7aCxnoGfcjFGB",
  "key10": "5LAbZf6RrQQULpdsV3u7pupwVMaD2nRPTNrAtPVSgT6xqvAGJnN7dycjTRom6ZPUFjzxd3bSMUWzfmVNyDciPwan",
  "key11": "66izDHhardUZCfko3G9CN5QNtoStGwtNue7cxKjG3Px3NUYgtxHQJvP9YwtAaG6LpZ1PTQ53n17oPiR8f8DwRHGr",
  "key12": "2YkmEtMAFrrqgd6vvsJ93iSRsGncMLRsaX2e1xsoeUwGaMuqoubhHA5mxwVBeh11TCybwM7QhjLdLju3LQWCamGG",
  "key13": "27AdycWA4h8RPieDrvoyR1jZBQviNs6VLvCtmf66YQChcfFa2gD3iSgiSLS1xp7712F25S5wQqyPgz6jDFpWESbZ",
  "key14": "5Kcxa9A61hU5q22zvhKLxWsXYh1vzX8oxjw2RTTgdYn8xu33nMKUqNcCWyBdF4D8F3aF2oNM1Bd3Prebdk2251Xb",
  "key15": "5Qhu5fRwcfURqtNtoXeSPucEY7quUh7261eFVg1wasJjDNsMKeZRvWEKbyMgF11JBiDq7bRSm91PzvQrr82jkVbh",
  "key16": "VQVCKXe9gHHKG7ye7ivcRD2UouBarfZB8AbVpv4oCsiRKB6a41FSVzAn7rkXahdkRqx2v2Kxe2kWDnn7RiU7wmV",
  "key17": "4TbMnJoRic3DuCcUt7GJK3vtYjSfUjhX32j7nUTQEMRdRr5wWksCixqg4q7UfagBRPBCzaRjWtqZJ9az4YmdNdmS",
  "key18": "5RWKRtHtKJRqiCdhkVNDLYeQA5JRWezLSW8uwCn2Z3dRZ5Wiza2UfE1a1QPFFbvVBha9pjr6aFergMjnqWTbKv3v",
  "key19": "57fF5F1HiFLp3YsQv6R7E5gq7xYBWNRtUNd9n88rYCQYitGaLWafDPBSh61jrac1eArHLtUPXLqynSsWSuhWJXhN",
  "key20": "5R3Nr5Df2YxHLWhzjLCDexibMWwPJy8LrwSgTEGF9FnbamyXttqcBXCxttbfMYM5Gu5MTvkv2noarAknWdhjoRY4",
  "key21": "4vi2rLMwXMSm4ePSf476Hj8gxcwH1DnPKnZbY45Qmcks95jWHYYAWPmjy3KfDDWKGcnLjFKAHrZGtZFZvMHXhc8y",
  "key22": "3GsQLUJqVQkuQyuBrWBzFz9yFkZUqudVqEnujzvnm3WB3AH7HFrunJPqMFvWYdbML8pFRc9QMoDNF1jdjdwYKuhm",
  "key23": "5yzmYjSFCfFuiN7iieikdQj2xNuNDPt2SK4xSwo88Lw6JoLPhxDmkM8Z1yvWcoXkaxgqa85qgoFzyqY3qdA64ki8",
  "key24": "4yWPf8PjDwKjXPXnZ5A7dB2cRfjNvKb16BQme59cDGgV6St2XacYnuMyPxiPQcsRSzM8TyvNUT5gyForg5kLRxYN",
  "key25": "2Pwo8eqM4XCcVXpBuCo16D6UqyxSxiK45notr9N6uyUsTUehUAGQgpH76bfWzt3sgwqLqEAGXWwzD9w5quzgS9kM",
  "key26": "63tU1FWmuyZ5BkEe7xhH4FudfS3w32kdUyjdYUbHyFXudhz6kw9dYbWSxz3P1zQ9B7KjiZmzUkxHmxWFQDBmGYhG",
  "key27": "3g8JsgwTsgwYkz5ji7Y982ciPocQDc5K8rfNLPCxk9VUZSuoRCJCkCDBNXAtVV5cgsQYLgsTVb2WJM4FzQaDaW17",
  "key28": "2kxsfnhez4bV9uwrSJCZZobikHwoN2zBu11nSAXEaYzbok74NCNRDNgQHqhTVrGDC7oFNE4ZEMfPoiTFhWT5MKEL",
  "key29": "239oDtyLHVnnNMrvqQgUTHm1mcN9SbTLWHPifLaX5dP13NdKxbjvocZXC1BfxgVRMjg4znZ9SA8GzPY2Lan22raF",
  "key30": "c6Jbvy3ozRALiN7A8qZFbEXcDbdcfgQiz8Gv2gjVesTjeKv1f9bMpJykiL73QeKZtk5GboaPzZPfTDkYxtsteAC",
  "key31": "4qvCGVitVJHYKL8MDgtr46Q59WtLboWW4cq2FrU97GPy3qX3ABJXv67x9QStkMY9SJP2PQeMTpw4jcRbztffKXnM",
  "key32": "4bS6wCVQZrc8iEv7Puv6L3EBSqcoNQN6dRM85tRv2TCdbmDZyjxLWbfMsaBUNrNDM4NXH4LCBovdnhkgpogCDpsX",
  "key33": "3zDrVVBsfVjqrgrCf9vfYWH29YSjmDPGLvHytRt71MHMm7P83YA9FXoPmQqFUDMAB6GW8Lr8Nff6Req3qXATwMtL",
  "key34": "4dBPkoLjA2edtg5V6L2CrQvfHhDM2cTwmdFPrQ6Fr3cQ9pMhAbZxAUb7UFBchVUD36LWkD5G4jH1V4d1r7PyqJLa",
  "key35": "2QSKVqvQgScwU5PnGEJeWbDZYfiQymejoq4Yetav3KQi4wkhovX51ms1UUmtaaqkLEcgb1x74AE1Q1Q9M1MwshfA",
  "key36": "5xvn4tuZ6iLFAGpbEVPNk2epwZc8pDaDwgzSV9NEKSZ7TnSb64Ue1BG16F1s8vz2v41oakZiarv8BcrLXecCrJku",
  "key37": "67hsVJiGsG7nfpe24b9bYeuHL1mbwmGcUFpiuJnMnfYsyf8qDQuWVFRXxNkd1xURyq3vnfcuVLMfjkh1N4JFi3bD",
  "key38": "4gFbFqidXizm4rbdqTA53LeYcSaLztBKqSYNGcZY6G7CqcvheEp3BmieyPQZxKcZ2UPjGPAaFjssbPiwbk1nRkEU",
  "key39": "5W9zYF6MpQuUtLqt5AMw7k69q3H6FUeDRYzSyvab1moo1mrRBvzFwFZnuSG9BVJd6LFhCxasUJYMSN11qXYguGSe",
  "key40": "5oewN5TcR1pVSdWxnuPF312cVxnm64FHC2fasaJWcmirFj5FrTByun5T1sxMpD9Ash2YbeWnHVGeB2jSJZp4VwwA",
  "key41": "Yv8sdn3Z2Fsxjda6GZq6mF4MWzM4eYEVHErZFjt3t25t5kLN7y29CYAVf6zKuSHU8WhYEg3fzWberzPGPpYvtw7"
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
