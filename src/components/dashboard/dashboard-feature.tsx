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
    "38jiNVSkFCqEEnQasuXwoucmV5vi3bTbcPVS8VKhmk4r5m4SWWrzc9D3xo9LBemoCfnVPidYjqAa3t9V6p5YYkGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QT3ktvUYTiTVc5WVQf4EwpykEJkeAxxtFd3XphQwYC4BXqq92kiU3MkpDgVB1yiFn1Y8t9SsXfQwyvsk77vEgA",
  "key1": "NgJ7HpYzYknrCLxfy4iPU4R4kKcwHFEaPLi6LsxEuUyocmL5bMbk2B3eHm9LtyLYSFxFB2xvWcbayzyo1i176yp",
  "key2": "5oFPNWgSePuQmWfvSuSLQ1wDhHopD3dxrH29jG6iYRWZsyWEv98865GLJX7uTy6z3vimDYfg5KhbvgNtM6Mkfrzg",
  "key3": "2253buW1KUBtH9mPMcQWmUFuvvEWTn6HmQ15Tg5hk7KTY16gKS1y3muh9Jt9Qb5VczPJoRJFydj4FFrobmSzmvie",
  "key4": "YHV4Nuuo1oEqcWTN4XSwdsPnCb7P5K4GJPYRTir4VPmTdG9LdDfui9yNcZTGQhRtaVk1jDEkMfTEZyhrBwJh7DH",
  "key5": "316opxDLgNgiM1AMqbvotGTwEp3XrEn4PWSRMkgDNTxtyyUYzP65P2vi1ihdA9HEPcbWHCpPMkGMgv4MXTAbZFaD",
  "key6": "45eK7aRkWibsuuR8KGDQWgFiBzsyyHdU1mupY87ceDRRVWV3fQzbxnyFmLSeoTTYWsdwoNyNaY7cwsgH3VMCTN4X",
  "key7": "YPJkkiMPWrgpD7ZLvxTvaWQf3haqW16ib6EmPQ7QoFbw1iJWuUKJ92AcieVKSxXqGhZK1rEEYkQqLqaPjNyoVDF",
  "key8": "2hNrqXHTNggygyZZeRg8nyhdLij5gErGp2pN9NjeCV3GD65VKN2EN2UrzzpZeNJhErCPf9jvcGvV6ZpRgN6ZFaN5",
  "key9": "39m1t9Nh1p4QJg4cxHCVdPiAwZZyPTsKBVCPr3UwoCvdSzX6J1YSeW5vyzRNcqVrGcfNLyw5NuAusgSNwNWH6QH4",
  "key10": "nU7GwVsKmvQDMko2oBsp968qY7kwsHYozBnbnMTZVta6pbSJXPZi6s5ExaH2Y994QkDmyHCnCwnecvHw49e1Cvs",
  "key11": "2X967rAJwY9R7Xmct83i6E8TDtdVZyTdiEMXBC57jSkANQZzLtryiWh2Dx1bTQS28DAaEybiBTLsmgzyiZ3JpjBR",
  "key12": "45t3utz5dkWGavY48uGmL3BEpRykYEfhyHJNyRxAWFEDY8Qg42XRAogEtueiwdop899fzsSAQKMFRQiB2SLX5Mj7",
  "key13": "3av44MCcUBx7kT2WQ45vft8hVHVx2sh6CdQ85mKPs8zdPJqPB9KTmm8TBACxtuoBw8KzwFgzQ2QqE284mnXX4NyU",
  "key14": "2QegXcFoZehR3nHeo1BbNCnGX5JEfFi1FV6HnSJVwzoK7SsKtCrqZBCcczgXDo2bPFK26WDMWg8uThRGD9HMBMCt",
  "key15": "4LdErrTswnpT8Ek4uyeBZbSSNQf3Ma5JFPHb3W13HKBciR3yZnLcJGwwuFXMCcqETtL7D7AGxK8WrmH5hUqdhhP2",
  "key16": "2Q2nkEbsoephvjr5fn16oAmKFouyKbczjqFv32VzPLs9GpB9fbkFErXg93L2UDGkS26bRiFzHYM1sEWGMiMpoMRb",
  "key17": "2AbFWWzSAParMS6FhfQvpmyPL4GHH1qx7dHmNzxDvsXe8iktVUdKR2vjWebxs8hfrLuVCVVr3vF3HpkAnVBoFwwW",
  "key18": "qGaV8QuNpzMwHKBNiTFbgQ8NUK3F1x9KmcVbVG5kcdcFRCLPMST7swvvtW9qnYFwDgFufrrKEciJYmh1i8gcxVa",
  "key19": "3bso8MmuyjJy3GEdpCdttkwKADr9gNB7Gc6g4WcdpU8VnJg3vbF5jScvacxGgn8DehwNgUaT5FS1igQAiycTBK9Y",
  "key20": "38nVjy6ZECSNafUBNCPjfi27RFht8QFC5WpbaKnD1eGcb5iScvGN5PkVYM9MZB5sSGfcttn9gdknsuyQrDcncNYF",
  "key21": "58ogVY6BU8JSfWdne64eGHsqn86cUEbFkwoVBgxVJtVn2A7d1Tgiaz9N1kZ2JYe8uoRCUUFkoUb33kgMpHEqeoLo",
  "key22": "5yt3HSJcosepj3VyVuTbCowJkKqbaeUrzVahiJedkD2Xsa1vRwPUzPW4qUEZuFXFgRVjs2VsPM2uso3hDnKYt5ad",
  "key23": "2BPsyx3hPGvyHBt2KMuaDpXiiyGBGj8Jb5ZmKxverNm7JhUVk6Jpozu5yekZ9f8WNCjxanDTjLYYtA21e4XJ3VZ5",
  "key24": "2zaoEKq5ciTXhujkaNAXJDtTnPrAVdCsYq4A8DUZ4Yz9fCWeJC9qaqLBYNys5ebHCqKYDQobaqVHig7DRF77YDjh",
  "key25": "45hMyhAwnKYurokpi7dNEDbJ65cXxrJe6PMBhozYXBMqwT5GQwT9B4JoXSoFazZsfieyshVnxQ9E7rTekQrDLi4x",
  "key26": "4BuwfzwNy8GwHARtJcYEFsr2jwRerTJQUatbYtPMz3TLA5f5USdbMf1o6E4N7hwpoDx2VCA2toLBeoonrrC1epw7",
  "key27": "32fhYLoSrcrxsQsFReqBX7m8UCeBnnaD7pCNNPkjhyQ4sYUUWyQs3JhYNnVh4wHyuNaG71WGE4NVRTsigYA5KB5H",
  "key28": "4pkXFSj8PrW6gx8pFU2jbDccpHQWihJWYVcexoMavjgteCdZW66CTMEK9ioo6vdefwDZX26HEAxDwuK1oniusNS2",
  "key29": "3dCQ4hGtovzsW7gQVKCHVFdqRzatHSU2iT6R3bYWtMvYNs5CJpS4KPu4vMKyjRTFtzF3GM9NYLxVnzvCw3hmdTKm",
  "key30": "3RcGLF2oeJAQtyfH8t3RAYh1LX3gUEYt8UsU4rgGY2se9kxmogqUHKioFX8HtBNRZz1wJrgoczkpybutD48cQXvo",
  "key31": "4aJq1fnSBE6aKiyKAWvsjxds5HZfLQDCR1TJUhzccBXRR17PTi9ZrFrVHhvZKFHpoza5SEuw8NJSLdFDkHm7EU2x"
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
