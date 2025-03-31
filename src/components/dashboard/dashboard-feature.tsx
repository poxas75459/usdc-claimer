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
    "9YD2o49obMhFbC5posPcBMQswbP5D8FjwnaHEYjoHd919cNebPuvPdE3CaR7Z5vp3hye2xjoT5ssVh8nFjb9yiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UMc33U49dr5vqEh2mnNRxx1iPkyA31S67gcjhvrwi9bpdarNhVGgEGknQGUCm66Q5ZmW3YkrYdLZaQYEsoRoGre",
  "key1": "3pks9JTdNMgKwudh3V4YywKLhnS2X1g1EoeLCwk1NiKciqPqxZnGXri7v2tY9L3maFXJg7BTeysbwSMhHLHL1Y4z",
  "key2": "64ZPsRvgywMwVRquCK9bJKrcwrJHdo7b797KRvZc4sKeFkKjgMfReaun1MvphTf9n2f3DkEvsgz2yDtUTLF7eBNo",
  "key3": "Zv8dZ9q5QLzo4V6nRXXL1QAoQzP3MXgptSQBCPC5Bbi55BPkH63wTbyTi9Uhd4iZ5YTbZWEBQ7vVptFtFnbgGTd",
  "key4": "4tCsUAqKZdADpGYTzBGesJafnnbwzbBAeqZSeKDG8b1ZbZyoSQSQkJMJmpWjADcB4vcc738LB7PmNk4JqRJBj5Bf",
  "key5": "26xsuNV91JfnoykQyMMCfCYnsKfuQQzeQdQ817rZhPEkJJH3bvwLdCssY3eg5q3LC6FoB4if2msYiiADvM7FzTDu",
  "key6": "2ofT4WKrAFcrzcfppQEZj8qJKd3KKu5XizU9bEAveATBSnFcZV1EoNHxYBah6566Z3uBEpewUA2uEvpmT8HGZRR4",
  "key7": "bXGkwuQj8xT2G9f9g3NWdXEjCv3pkNzhgm8e5bERJ41zN87BV73jci4RuJG9ku72AeQkmdjthEMW9j8B7T5R8xY",
  "key8": "2xBxVL79mFieyhw1QeoDwHBtvQsotJDBsL84eUArVbiwNcnRi5VFEN86J496pn31NFZHFw9oWjTT4Pn5u8vEWwZX",
  "key9": "2TnU9tf5dc13ZCEqXUhs6gTfj7HSnUYX5KXLcatZLS3BEJyLcqiorwTMbE7iHQKix4t4grq31PrJwuQuKgGTPbZ7",
  "key10": "4PvF5YaBNcDsgHqgaV7kUciaZUBYEorQTm3waAEQ6qnVryYFa5xrLTmx5d4CLWF2SQGL4f9oxp1LHb2ctKXRE6DB",
  "key11": "43Pp2aAF8K42676Q7Y6K2iGvJo5GwpUHA8jV73TwpYr1DRGYfq1RELx72xjCJzyHXTjGixZ4H8zr8nXEocC2akze",
  "key12": "2pdNphBLK1qunz53fMeNwNUJekouZGvrqtNPnyREYNx7s8T4PdV9v1gBKzg5nRJR1GQ1eskeKniCaz7JFat56Pih",
  "key13": "Lf23wKZivuSpVjZuzgQKizYN1mbkn1h6yHXGCWzzB1jehT5rWK72KoCTh7FhhHUALdWDQJyoxPiLyEBNkv8am9M",
  "key14": "xQJiLTYaaPNxADD3FCvdVtQJCA68hN4eJAH6ckWmXcQhjoAvN4JAmPJiviivpV173tGzsGyTDWg8gB8gXpNWFL1",
  "key15": "57ZFrvadBg5jbsexcU47Vuigvy7mjsx6PWE6ChMwcr8775vcdWNjFhTJu9AHBCS4GicjezF1YhR3baK1BL1iSQxw",
  "key16": "5ZDyxWAJ9riXDoxxHrdq3Bd3YjNC9SjbuAX5kS42nvKgUgW2jBuw8aT9TjRzj1Ly4RGyDn7dncAiZWg12TCUvrmM",
  "key17": "qTxHrXwm3Qiinw5emuj8N7vRRLJojLBHbvNJN1ZSwaaPNxZmWk3j9FBtWa9Xujd7NCQPipXvJj1Cbr83h4dnN94",
  "key18": "2MauAhEQjD1tFhgDrne5H8m1ELnGsP2EPGWWBgKnjiF5LFu2u5DVNbiq1gEPDqBEUiECHobstjnpk5GSqMmVSc16",
  "key19": "34ep7pBWj7k65GsQEPbZAVb6sxQLfoy81PPFsoS8bThKtjwP7cwBBqADUg4SEKqfzDGvNUsMKrqnUpWRBiev9ZCg",
  "key20": "34ju95qnnLDWDKTVW5midwjWnYhWEoiL3v7KhPqAfmDHdj8f4TGY5vNDJ1X4RyUaxtNbvagMZK8RJYS3qiNZaTVj",
  "key21": "pzmnvDXx4z2REm2YvJwbnpYtn2oSJk3yjsJEdtv2UZU2ZbGkCSyK3d468qqCoVXhuFsV55MtXv7ivW6V6ZaiMbi",
  "key22": "3UKEbSR1G2f7h8ZanMPbtCjHgLrQgajJPNKNYiJhCc8SCE3Lb4xC91zkCPDE6zdrcqRbQNaeqKdLizZUBcxwHoaQ",
  "key23": "5GcE6nt9oFwBHPugAYDx4k3bsHmgbcecYP5YDZUKkY6U5eg9axGfxgbMYeXFdAHmn7Stk9cK3gBzQUYMUcDNZhCN",
  "key24": "3UgLdZZ9faqjsDrnsjUbUMp4t8hrTp4x3ELm5ukvgiykEAJujRd7QLe4PnXpWFtc7goxbaApvTnbUfG9N2zSUub8",
  "key25": "4axPi7m4CfCssRjKaiWn8zG7i56kJFc9YbijxDkd3oa92nAeGheche75ajaUr2VFq54s4kJJiygukjyyheWmtipP",
  "key26": "4rRFPyGr7JomBkXptxZ5oWxMma7bbpD2PpwD7wmQHY4cdPev44yNZTuSBo5tNZKDgfn6x5BrmjSdfxmaWCGKgRuh",
  "key27": "57BZgXTuvCCwe1VgrnAHJUQyAp4cujY6sAniac2MHUAn2DgizB4BeY1jNDRBg5HAN5npKXFn771Dd4qRno1rcdZG",
  "key28": "5MWcM1nFyT3bUdVZFdpPMXiZCU8ZA42pSKuytFdbo1mpAxTcsLnJWgdGNMTWA993tmvzWqjkEaHRML2F3f5iqEEd",
  "key29": "49RMnf6po6Csb5ixbLL7CnSvYjuDUoCKawDiSwxAKqbndiLgJLYb6iKuf6EybFd9ysEXGFXhPMMHVW99h25TQVYT",
  "key30": "2v9H5kc6w8Hq8WHa9fwXEDtQAUNe2pvdt9qdb58ZS9tfV1ZTFatg6to3M3x33o6Z6Hp5jPBhn2nEda5ZbJuqvri1",
  "key31": "5Sbh1cf4q9zGMQ723jh1wdV4hAzgB4WDdw2hwRGPWubRLTRnHe1eb5Dt3hrCKbi55uR55aVBR2UJFgy9FcCeYQr7",
  "key32": "4jkYTzmhdKPAwDTw9dFP5hJBwUQpGodR4WPmbam52t4FwRBgDyi3oPk5q28P2daTFb9Gooc6vqo3VAEGE1funibi",
  "key33": "ZbWDiey4SaAyBZ7gMaJVDx6rocMPjChxxPpggYZUBX34axZCvmpufLH3AsghBvSpfSzHKEFM5PFNqh7MvbvzBLD"
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
