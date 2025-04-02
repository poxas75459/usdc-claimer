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
    "N12qps4FJmy1HZtQsdUNDPgW6BidooV7VuKNx2TJRm9DKj68HGc1brMGx49wY1xsCEv1sPq9D1MGW4EsAjowBBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LXPZBTmY6EN4YjdQfRpxYvuwbsaLdVppiaNBWzbvaBFdxohCyVnkF8A5iHyNvT9ZFWMfii8Y51PwrDZexAjwrXS",
  "key1": "5U2VBCATL88Ppawm9zVSraTjUQuVUWfZmqFKPtFyaJAmZo9X5XU437v4YqCmZSUWeR8Km2aryQTbQEYwKtDzD8Vu",
  "key2": "47M5qd5xbp6AgDdgWKc7Sgtbe7YzoN9bHsJDrjrFdTfnKyYH9WTKmtq6pPgDSicdxtbz1qMBxQHDA18tn8MemCNg",
  "key3": "3KHzQNyAUEnHzBhZRDH852wUM5TZD1SuCnKWWf1ZvxVcrMAn6S9FvU6Ss8XJwx6o87FDYiMhybefq61L5sirHome",
  "key4": "5EA1qu921oagK8rcqG1bBtUQ8Kfu6mxRHbEzLuYicH9FCAYpenYVupYskWPb8vakuZXM82BFrx1Wr7S4Q5dgKMs",
  "key5": "2npanpc1sif1LoEFuamWhUAGnp8bGrBEirZpyfgVzey1LXeB9aBYSLve1xVKnj8NyWsUTr9s2m9pcDApQChJtkrf",
  "key6": "3a1azzoXZpSBU5h5UEb6RPDKP28EXZMv31C8MRsei97P2ixeYAbykDrEdnWDAwSm2MNLGSZUy2TGJN5kTDUS63UB",
  "key7": "q15PgpWvU16seTsnGtMkHkZe7y19u8T35674aFaCnfmRtbiwKuNnD4BS49AAF9ekyB6bJa1CTCquviHMzBnFJt6",
  "key8": "2FotTgUtjzv6hLqjymj8fSFafzySaLemDdPXxZKgjN8HsUwGXHkBYDqr1AKWqrmr8A6LeUe9m74RHgW4ypLR9m6B",
  "key9": "3i86Pa96U9juCvYzJKNVtCAtsGEWpLEicqs9Wy7wMvhTWr9NdBcsWRAgNfZoyJG7pcwRWhvdsS4cQAVmDkFUzjif",
  "key10": "29HLXHETLaTPeiXM1jd81m73dRVMbfjnC37GbnFAxE34tZ5RyWobYunCNFZZ4G65TsF1HtupnCwUbrpH8veGqioL",
  "key11": "48NyfaRb3wY6CwipNhnNwAfUNUwZDmBipFfYaUZLMg7Pi4LBPENwvFzsDcb1omYToxu6cBEcFgqLYNXuvQ2auVY9",
  "key12": "zUfVRno36CHPs1SVvCKPigJKTJBgdsmosq1vUJJHTUp242F2K2hV9QAVSF77uuUjZwU9RevKacQ5rXQcQZBSJ7X",
  "key13": "5u8maYScbxtNY3xcQHbEnb227FyfpPVd1FUC6P8LrGUB93wVES3it54o1u7Y3sESfGUvjBr55LPKMFMjpFZzy9py",
  "key14": "2MHtAeugS7ewAtx3rGx2YwnRvy3Syk9m9mV8rwDNpYMC1SLdgC6EVtXqV4n7JNxFQ1UCfQwvy8erwvoQJ24a2D6r",
  "key15": "6Nshj4x1S6rY4A5jL34wSLa9DQm74ovxxRPbmzSMVfBy4SXXPyFgEKzEYAK91LekL2PE2fAPUQT3jHkjUTMKMcZ",
  "key16": "66XVzMiAak24r2RxNz9ANYTU7CmsRJaW91ZhkYdcMDR1Xt5vUUoLQhg1Xs32GMJRSBcmi1QxaiZmXdqN9VAyFDHy",
  "key17": "225aLR9fZ7V7sZf462TZhHc2wFVk9HCayq3rDpaesRzRrwGQjSqdWRoacZgqHvDGoqCJ7JnQJu9gTgrnbmgXV16g",
  "key18": "3cuYj47hFdFbDuDnDS5na4Nzyx8H6XCSLD11YuiSVCrVUeJbgzi4k82YSUS2p5KvLJFANcorha5PaoZZX9hqBmn4",
  "key19": "5tyPKMA8p2JGkMKcMaUFAUu1sqmDs7VGoY3zFQMaMAgMwHkViyuUkAE85foYMGguzY3benhxcFp38wDiVWFFpnMV",
  "key20": "sTb6gCGL1T55b9zGFH4tiaLFFUSzvQVWMtejeHEHKXiu4KPksChFBKpmvnVUUA1BJN4gSFk9gnDvv7YS3dzFsEj",
  "key21": "5mriHdUbn4e2S2oAfVaKBqeLKksGYhLF8dXs3UYBUwXijFuP2xQMn9wfdUmg254iE9x5E1CqAREYJDXBk5aFA4JU",
  "key22": "4mXUoRXzWPuYbD5v7CD9XaZa3KUQjmaYNaGPMn2ZoRfYufwfthqC6tTM7co3y1fAHLdV4i1S4wFJ3EZWcmi41vQp",
  "key23": "YurE81zZD92itwYbWxeNty4t5cNPZZPaDTn9DokrxmQzqhMNX79g7EJBxxkMQhLysrb13Q5xXcNc2L6P4yUr91m",
  "key24": "4DCrfaeanetXt5uEa8NDSfXiPWRjb5tGixN7VrVWL5VLUaqQep8xmgJ5eJRuJ6NXR9FFLCu2gfkmHRuuYdQPNeSQ",
  "key25": "Sn8s3kBFGgZtyNS1jjeHchANYKEECXJM5K6MLnyDg7jmju5p1PGYh8ypDRcDMj6Bffqae91n7YAmt4JdB5n6pXq",
  "key26": "4VpBxJ8sw2Bc8NndwPtUzZxm1gvCPFAzndgGiwSBdGL8kSUbohoCKHuJCmkzqeDoqkT8bXD9pCdEYu3SLEeT8rc1",
  "key27": "HiAXrFYCXRaBno5dYvFp8ZeGEfUMPysLPLWhhmnRq4Zfj37KaQ7Awnde4Pyc2itY4cR5sEGVWBzv83X8cX23CAa",
  "key28": "39tfy4ckovzSR5LUtdZiGmbrv6pqH1GBRwgsBYzVxuWMstWkoZ1emEq7LDogoDjzVD8uq4yGMSyn8i1zxGyisFvZ",
  "key29": "4TynYKycL8tpiih1FSj4tnuP94XH4DR8Cnvid6UtwZuemGrm1fcpvHJK462fpM7E25Ao5sj8k7ZX7C5QYgNjDheV",
  "key30": "2L2eaRrcEVhw2Gaw12AJTZp2amHFDQd1vt1ZDJBmTD2Bnf7V2Vtt25xDKsptgHnogvzrHdqq5kmbHymaMrFwvnR7",
  "key31": "pWzxuBbivZKeCh5Tjcm8eUmkZrvS57URqLySraxF9Mbe4CdLgSejiBNqrjGWv95xn6GtCdXYv2HG3NGpuiNsQCT",
  "key32": "QsNmAx92YHqX2EN6xDwMjLcqXbMtepHzjSMzxHCaK4aG2FPbvm3v5rxa9LbGDWPciLKrxGntFYeX8CWzRtTKof4",
  "key33": "2cBoYeBbdARbUqHZufB2TvCaducjrkxFPTZUpASaVpbZ2TBQ9iTbwt2XDDXjBxDXmEx2VocH1wbEH9xSov4395oU",
  "key34": "g9cRwzSqqJMwVZgYNoUG4yeXtqeCj4eGJhxdrPcyYSyjBgPaQA3ikhPzzUyQttza6xs9wuv13g9i2Czt9LR4DJf",
  "key35": "2HV1Krb2WHMjyxsH1gvrNuGccQVZjQz6h49o86mTM8hL5X1dVPaCqh1kfv375ak8ES6Kk5DvwtmkVk7zexrBNzGB",
  "key36": "46SjvXo1dFBYWAozhveQ8DJNBjb25dDPbgsjVUiXNp2JW7EhLLbxs8RkBKW13idjRdPkQAsawZWP1py82z23YKii",
  "key37": "4RohFiCQt6rw4iyKsDHDuRaDgmZDEUQaQBi3CWviwK9vLcdui787bMKzSmM3oeodhPTDGRqttTHtUAgw37BQ3Mra"
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
