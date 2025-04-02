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
    "2hWxCxSWJMgkHZZh4zU4yEvmyjhpeiQifVv9ZoETrBpd3x8H6nLAbxsgfnVHwmGdFyNjjpjQShbqNkktNM93s3ci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56niWxbUukUzjVFe5io1uKeuU79w8WmxwFrSr62NSPYQLs11pN3RA2kW6DrY37b13o1brerCswFBox5NgoycRHZH",
  "key1": "52TjdxL6YUC9cNdZNkue9kWs9HQpjEe6BSMa7BTtqtPtubb4Xw6PXE4iUcWjiv7bkDH1VsSe7duSss95hRFe4iut",
  "key2": "46GQG8DudbfYMxGYHq5j7vxJwDaWYbi3HA2TTg8GoEw9sDx1LM5BTQXyiv2DYrdJQtCnb8wq6W3wPn5bCqhgaeEK",
  "key3": "2zZZzqXL7NdNYnQo2dLao4ZCXvSuSoagFhKCcPT9eQXfipu2M2g3XZGV8dCS7wUEZLeD2JLji5TW8HkVS2njAofF",
  "key4": "2yXjeJTXkcEwxmXx2R8mCftmBNS9Fnv2qJttByBA8sCwBVCQnQozMXmAV8t1zj7j9XoYctoNo3KAs5sYBYv7yeMH",
  "key5": "3n5cv8WC1E5u1TFNbEVV2AHTJXUHa1RCXtvwc7EhFZBVsC2hauTrCT3unsoW8vp8oLYNa24FdXaFugyDuwmKGtab",
  "key6": "4fJf5H1eMbuErNvcudFNySmT1AkcQ4dkyV5oPRG3wEzkEmhPCvVCiHNcCpQNkUSSiJMd8VwmdhChNMoAGiuDK2bt",
  "key7": "8Vc8MQuwmwgsQow1pmB8J2YjfTrvfckUDpKJjRHSRAM2MZmUJKLq2a8phhNdo9f6saUFkWmuYgg6jsBnCQs6yki",
  "key8": "NDu5cfQTmkxrt7ZkWFVAHesNzhRcKepzPMkFTjyqhUzFh31nbTijLENNGpZiuy64oYVZXA3jKXXXCyfCvrnWA8K",
  "key9": "21epCDzbffPAM1TYhpWFAzQmzNZNMScf4gDYeZ1VPrM2bi8P3wM4ceZvG2GVLk2szNYQGkVcfjF2purGk316a5RL",
  "key10": "4QxRB6Br1F5uGF6tJP5ZuZ77M7B7LGGTCuDo2pr8LVvCviywvQZwZkmwWRVweqJ9foLvWZ1qkeHX9ifdUPW8NcDX",
  "key11": "3jNcEvpqnBUg3wCBCkvigjPZ3tzSWSzvjGDp8hqP4UiUEkANUyX7gb9NmgCmBUTv28ZTnwBQhyp8thosRMpSZagb",
  "key12": "ZmLX1YWso7VZQet4Y5wvNNccHb3mWmEAqNxM4M4ervikhbzSETvQAqe2AUv3rs6dgddeADb5vDqEqqhBp6qEBdE",
  "key13": "5reYBBRR8VVYLXobimbrVjdYzxjtJDdkGV3anKBXTFeDuEJ9jS8nEpVyr2fKAgMauBy516VUPAUGmXBjmjzSFyao",
  "key14": "27B78vmkifqKsy7xLVeq7PoGsKA4CuMiVFePT244rViesTqW2PG1yZriacLYyPzEsVpjDBNCutoEtJ7KtcD7b4wx",
  "key15": "2DzH5D146ixq4u4upbhzY1tMrzDMvfgAHKDvbwJoV1fz9uLcKddon4GX4B4fvv6ESBTdN9HQX4Lh1aKy4drfPw8e",
  "key16": "4NjvbiV4tZeEGubYGYJmGTeyP4Fy3511igHd2zPBstYHoNdRdWp4jGwHwMFLHGDPWxdoPxxbR3MFc2bUGEzYbpqi",
  "key17": "4wA9b7thJyTUZ9KnAAYimjTzqwEoYLYnsgjvafPohdgJbUKXYtvWMj2RraGjoDY2Uek5fFjnbKqZfCfXCMvdsDCJ",
  "key18": "4KmtAhUj4sWFHuSk4PsUU4oj7LREVaJeCWoMxPDrfGuUQXUvcQHcyWtwk3sV6jewcAAS2UigLJ7S2VeJWHpHos7D",
  "key19": "5wcDJ6672hcviABe3R4HKhQxdahsrNpWcfYxHLv9oYbfFWWWSiNBaESk2rbkwsK9QKdggt2fYCN59cEm8JKmE6L1",
  "key20": "58FjRxTUoJji3WQutMkaCoitqhkPdM7GRyCVCEqEPZ6wideXU1uK4gC1KQjyKgTQcP7zCoV7vAfUPC2ojJGmYQ8w",
  "key21": "61n4QmaKFYzRSDAk2eYY72QeJqNx47ETh8wHcfMScnU6eWmaK3f66njFCRbep7W73deo5z3seCRpCz75gssoTtXZ",
  "key22": "quooVDLWaiVo25EWLVBhtiUPKepEiNLpaY15X35xqMZtgU2tLybJRKMuPwdJTx9Qvtr2UXULmS2edoHCmEVaFau",
  "key23": "3eX2RddTAv4xQVAmai2NJtnywcmYzHwMNE5z9Yuqt2fmX2KGwnmqsgemqNYr81iTnoTUc2muPjAeVim4zsjre7NG",
  "key24": "4aVM8fVZaFgB9sobWcncip21AWJ9JNFCF1fYokvoTvHbihRo6tWCw4CK1VbywH2YGpsG3FqRffrP54TPmrNntBnY",
  "key25": "4si9iHu4JUVvfyFDm1EBLR5jfNPkUDKxsByABqa4uDAKXygEga98XnfYbqArQ9DWRrB6BwDvW5mtZyjk6wye72Pk",
  "key26": "2uBHnSRaScsUiASFfetVBjns6BR8vyNrxvnENbcpY7tERpxTAEM8GuowLGbUBhytYxE1cK1Rn7hdGyKG4KgomMoy",
  "key27": "4oETQL33h1e1YaXUftf2Xe5mx1RRp3p7B6ZNf9xoQGrehyFc7uJBqyk2Y9pxNa3cwgVfktHf781vbs5U3gjxhLdG",
  "key28": "43YyGQRjq6DhmJhCSdvcSQUW4GoUX2ndGGpvByLeEf5bkUYAGhDPoiUTYTVnWQmuCkF6nj6DBwpCvnfMKte5KRcF",
  "key29": "4smCeiBQm7R5ZRGMiB486JXKiwQiNWpdebfw2LM9Dgnq7SkGgwDRC2CNc6fMrruAFoPdY1rjsQNBo5m4iTNsBS5b",
  "key30": "BauPAaF4gQSLJ6niaedzZNCsKXSrt3EhMUsiJJ7Gvwty7j2qNt3VvVWCDDmr85JL3GKTjZ5AVmH4ecBPPiK7WBW",
  "key31": "2WgUxZ1qW6qaQVGyVomm4bKu9Yjw9bRZG1i5EwwV3jpsfXMvARMgrkhYzmeniwNHRv6XfgwrFht5Xn8Kc9ZvUQXF",
  "key32": "3z9myGBgt9YvfzEP696taWfaAaPthdaWXFWDnv8q5EGbZjsR8WYXUbRTWyv7Q2bWnnSULXRFY4zAYEPVhmfJ7hvT"
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
