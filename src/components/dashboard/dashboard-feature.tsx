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
    "58bUJ9DPoLE97z5H9gnsNrSe1ZcjGm12piJWzB2TgjJWQKtEuJqE3WP9CfvUxmquo4Co37eMzagnU1pzcVHNoVBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47tZ9FtL4PsUtKoqw3q4Npo57fAQejFu3SEno1TBuptPr4TXYyGWvdKfe1F6WTqz9Z3ZBcqdDt6BMKAGGLSxtbUp",
  "key1": "2NCCfkVRb71uD4bgvfRhxsTRkbotjv8xXJrVfC78SiJnWNFyfjNoUMr5CsiFZvrmiAZTmh1FcvDcVSfcJWspbMXV",
  "key2": "3VeryoNUjgQddgTkf2XdaH1JihCHLVaEgN8xWt9QQrPzhpkaZwz9nNBNiNeTMJwSFnMhhvRPpmW18XsTzr7Jnz6C",
  "key3": "rGKEFmBmnpi8esS5tTLZv1K5BHi5xCvwXaU8n2s8mQ5rpu8oE2dg1uYXckqDck9fFMRzmrYyeuMw2yA3qRSgqpF",
  "key4": "3B5b3ncZWceMmeBEysEAwNt6aDQwxQLmagU56nDqvtafJw3Y1BXXGmNVnB5MTxedE7w48Wdp9jnCCZwKxdD9G6i6",
  "key5": "3jKZsP9vPdgA1pH3DhDomL7NHRZtqGf8Vf6KUTteP2sFNFa3akgh6g3qXH9oc1kKpDad52UyS5sXWoHSmk1TsbW",
  "key6": "67XimkTLLJG9ebhEYrtFxUhQVAXpEZZBr7ofKf8RGLW3jAGwaSKStooVYYvTChuocjPaRAvKhRTRxKacsspfyLxG",
  "key7": "2LPQ7Pervzm9KiN1VqTVwEv5XPexLHdw559Jbo7kq4QteS4AWt4YBwLqMAKY1VyTJBwTXmnY2Lp8pAgdZkbEiH5R",
  "key8": "43g4Lp8Gf2WynGtpWMC3gBdA1749JcGBL7rE8sSiVsCeN58hDcrGsUtzb1CVQCrNSLmWbEKVKLnpM4EBqjUaDzBH",
  "key9": "iuby2aVcnHfLN3YWauGKQ3DuJXnQK9Pg4Wx2sfpDNeDKW73GJR9Haefi7pXu2JSmGzxjXGYwrCxAwsjzzjTN37y",
  "key10": "4pmtpEH1N5J5UDz7Vy4VkvMgddSVCBs1hrffLG8WV2HZSnmfaRdPUtFUHyuSfaJdn1xv8uBSNSi3HJRSYHPfWQqq",
  "key11": "GUk9XdqY2McBDrc9znVzbFZULvZj4EuBJ1Yh9rpcWCA4P5BbbCVh2ukN5dwDTKeym9xBHbfcRLq8Ub7gzYUppbw",
  "key12": "5thVeo6tXcDK7P2iXGk9ebmpygvcpHQdcMqc1WGLfok7B7JxBXiZMb1Tz8f4MW2h8b5GEU681BrBsnbHJ3JQqjbE",
  "key13": "4Xm8Qi2ZRjcim359Hs29gya6ARHhn9xmyUMeiaekmsePBqddCqeAy4go3pxVGJcTQ7zbjduPihFC8YLE64pgpNEo",
  "key14": "2fsYoV8oDVcNZbVgPYmLEfYGEPJGtYW7cPuEZPayYmehgmHRwZnZApkcApBSSAYaZWryjB5TDWhDKT2Qzm12yW7N",
  "key15": "41cZRionMdkkKXMurwa31gfv8mt8GdhbWaZnvxagAiA8rZck1WvqpGPsDGHwYvcLuNe6j38c4f7cFDXRRmh9Ryti",
  "key16": "F3AqnagX2iRNPq2JDH8qBbp1CiDDTxZo4YAtCxrnCupDNnDRvMP4ttZfKamLE6pw6WyGBKDMppMxj9dXaaAZNRd",
  "key17": "2hcJWGpj79x2bazH8dhwiA9G4qTsJpkeR9pSQ9nHaJxYVGbWw6ry9nKmRxsu7pGhJwVnZ5GTyDKrZvQYAzWwneC8",
  "key18": "2nfVdvTygDyqrGtTZjvyep2jNrgAjCXuprYNspVuQ8zUi9r7NyE6SmdN6bSsd8sJMwMfz7s7Kpc9ir4EWT9UzVsh",
  "key19": "9zWC4oZv4PjafEWFEoG5wtwgjuvE8aEEGC2F7ERHgENVLoR8tLw8BkEt7RwvxFiQYnSCCGY6cmWaJGEY9HqUDBu",
  "key20": "4mvSMQioLy6wNTtpWKGtEWfje9nq2w3GyFK1dsV9tpW5fonb9HagyYnKtXPUz6vvrarwSNmjkNeNkSDNrmpEBXmu",
  "key21": "3fT2EDe3vSEBMfaDV6P63oEMtCkKcL77bAascxLNnzooycmDsUaoaGJfouayvMve555rDRyUcg2Bf1MHQYUYce2r",
  "key22": "3WB7FAQo4QiHe2v9K6GJYgTeuxPETARJD6K2t1JbAn9LUm3D6S2cB6nANMPL3T5vczSBEas6PNiZAqN1jt8FojQj",
  "key23": "4xj6c6uTs3MueH6FtyXNnWyx5vBB72asDbwc4Ud7LcEDhZapftRFfFs4SVdwewEVWeJ3PvEoVwMmzmJJyGpgpU1b",
  "key24": "3JCZC6MWiHpBPtfUFSSTfgY8QgapeJ2F2vWEN7nyUkptwffT6mo4GXWxx9DcfNvUTz5tSEHkXLP4uCiVaAESTq9f",
  "key25": "3Eu9h838MBC9ZXuhvT2txRen326Hx4H9NeKUp8nA4HJwrLz6GunMUmLpHx73Udvtii9VeWuBDkA9pccgR1MdNtdv",
  "key26": "5wh495oxtpjaFHTKexUgqTnZMrHtu4thL4uJeZHuQa2UuLA5aaydhYdx83aZ1Waf4Bj2g2QHGchsk9oSxhviUYzQ",
  "key27": "2RSh2sx9A6WMWT1wQBxhd7BsTMxcpUFWA5cmLzQe4kADkamdC4eWKG6hvG177rkQQivHjufSfu35G7M2HtJyBgqV",
  "key28": "5WXUsA4zt1Ftf3CcTzd4qb39k3Jvb83ktvWHm7jiLQ9b6ub2YSexRkWTT8qbAKb2ZpRUvm9cy3N3vvzLc2PgYx1k",
  "key29": "4sLebmKTapqZPCQwJp61dN1DYjuuZit3gK1eihyPnVfgkJhC9UzCy46EV6t1MTcXhXDr93qtJU3ukKmpkDA8jeze",
  "key30": "3JAziE9pQujezRaW1jGbvQPRDRLoUERCfuy8nLeHWcxsVZjL7nLG87sLpbUWPqXZ9foYnAnkxMK9NrPfAKZqY9Ya",
  "key31": "3dDQ7H4ixXa88WBfqo5hq9T7TqDGoUXjMyb2Wfatm23jgFppsGjVsZKZV7ESNb25gpetr4w5qSb3ru3qTYZabUmG",
  "key32": "4gmZ5QMzgH4fdLfWt9Wuhy7JU8YgfiSh9Y9B5KJtCJ78164CMNz4TRoU8B5e4a3ypkQzJkVT9c3XEnzVDPrRJ2Ge",
  "key33": "5KXMCtLrj23tVsDN4F1nwq7gz4QSAgmMas4jkejaK67nxw5m8WeMLkRT8RCKZGHjTWwmSYbpzKrvKJKisVHZFy4c",
  "key34": "2UsbWwBTFJU7jmff7XMWoNosW1mnGV8YjTVKid4tgCGF3ynciREBU9PXenFRa5HwWkfQ4ZhLAoC5EQWMnrRh5THg",
  "key35": "2MbH4vFCQ8bzPMx17JMjqGAfiJCzVuA6RQkNE8QwxA5XUs26WFqmhH44j8aJCVg7SbFQgxJrxZ56JrfaiQUwTvKT",
  "key36": "51CpNTV8KWs6U2asT1gTAS82H3wAYRKvWmWsokkCm9nfjjtVhiMMQAnQVfgAbbftBuJ3DPVPhPJvhP6PuCEQKkcF"
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
