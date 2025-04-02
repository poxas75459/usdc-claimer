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
    "3WtsGvHKuLHg9w37SBcM9apWpKmWstCahVhsa7buw8tW5vVcd995QWtgT8JxVSPtAAMJzcc7YPHJBuGYNVUTcMnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZBM4UpknvCx2xSAJpZD97ToQBStwGMjCK4mAtPgcjpdCM4Xk26p5PMnrjo1WHQ2y1YMKoH3bs12DLdg5ThTu5fX",
  "key1": "2e4xGxvaDsajXM4C1BgMciiQTPfbrvT5Vs4wUHffbV5iraP2DTCYoZApZKnT7KVjErALJo6U9RkrdrpXf5g3NxRV",
  "key2": "53tEb2YoLNKn1u6AyQSkyuDoN2bAVWFC2Aqfyp85mHehjTbJPRQGChoAYxuSB7HWhRHpwcQARwNkj67VWJ374pxh",
  "key3": "az6cbRiCd5wuz5KFztUyA3TC77xf7EXzGp6ZgLpUctv9G9VtfbSZAynCba7WgVeCKvx1z5DS3bu5AxhLymj9GtN",
  "key4": "3GQr89mAbKUjs6eJxMcrvJ6QDieab1dBsNCdHAAuqdm39BWPa8gnsQKbZ2z34ABy1BdtpgMgTDfJtg9mcynXyjek",
  "key5": "5RRL9ZqMqM96XR2tWgNyGFh1pHnQtcZpZ1EsH356ajHiVoKt7JwmEwNEsC1M7djs3LCZGLDfkoVe7kLuzDuBFJpT",
  "key6": "487UKSqCnyt55D1FRugAvgPEkudRsRD2cqNBKA9mJhEfAspgr6c9KXBoXWJLDfsBDRDJ8SwbXh81DwV2E3AvBLve",
  "key7": "3zLCeTQXUTDVGD6JZFYxwd5ywmaUHRqq7i54DsyreUjwFtFWyUE1vkesQQ4nK4KxMwM4igioePBoQc8PH2S22wzq",
  "key8": "SUYWoRZtM1CyGXKXVMTcMqUmsFmmpEsJTwdgJ7YvQmqGBAAoq9SxW67gx1SjKc4ykS17DYZcLre63e8pM6ehFya",
  "key9": "66q1H24wvM7rDXnvkmYxw7dgNkvWw8Mf3VfXMCDQqiVvDwp13x5MjvNXaVRvGWiqVmRvBQqJJegsKy4r2iuGi8w5",
  "key10": "2ULrF3CMtmpWPLTL3f7rhqLqCf3YtCiZ4Kpeu3sA72TJLG2JWFLL2oAGquFKDTpYuJ5FBrwzJ3iNjk156D6BDeka",
  "key11": "4vE5SjVkktRiGfPZRYsN86ahW1NYtsctbnbBvPrRfLi6U6pAZDRx1XSBFoRnouAj1iUrBiZm95bAnCChrM9TCsaS",
  "key12": "5okMSJSEXhgJwRY1SLSdapNYWndhrij4WT39Jz7zK6AghmPTu41eXGDKim9wcAh16hwthfhkixB3k6Ta1hCJJh3M",
  "key13": "49PURCi3Xbc2Zqv6oB2fJfaJYDHSa8DYbDoLvzBoqx677v8hobGFVYSEFUqmdK3nUg5VCvCqye7QG3JPd5w1Vw5p",
  "key14": "4j7wQAk1Ac7QSnKaiERQKnijmAYpDiGL4Zz7NP3EUoe2BCq2MfD24ZSLhvhnfPSupwscCcsbmhzsp8D1nEA4E4qe",
  "key15": "v5PGURK2pGduas2wN2NpnpLrWQswLbZrgW8X4R3gid9jjpVqxd3A2NfFfoV6BqKTwNeQK2N515ZXy6qvKSGJX7V",
  "key16": "2Ne54HM6Taxwj5uuK1G3ABv9QZxJwjeYEh6KEe7MNrDDgT4cTjJHfBUh7oQ1DW8XwLSZDMwbWH5wX8dwxJD5RCWu",
  "key17": "5jrZ5AY7MtfGFSiYNRfEmBoCkjj6mPaxUvTap2eXfVmnNyb1Fm4UsRtQmcQSHT5LF4ktoPDUVdSXNsdyzkJ5HR77",
  "key18": "xpnRbnish5SvkpGW1dFy7EnRHRMJNjz4jXCG3wUpfFVDVCuiF2kNmsfTNF12EaRe6hb8gTnUfAGws5WwXQLcTX2",
  "key19": "44hRLWAgZXewvmJzrHHNa7H2MQeknYuu4p7shXWBXov4dNspC6dDGUUCjzACJJLzbTH741ZKH54B6CN6yoqeyQD5",
  "key20": "59ckwRJZz5RTxwBkmGhgPoauQnYCdkMwjqrNabkcdH4BdmkYP6E72fYhoKgSScuDNBVyFWthVGKYrRiwppepVvj9",
  "key21": "5qgsR1qTx2DERnPdwETchYdkFmRKdbVNp95koMKV6qVTgjXaNpBec7TcUuDhc3FvXSYSoTvk6C9KQpw7pgP2JdNv",
  "key22": "5UaunzXf4fVEx2er6QyJ9ua778YwfDAffyfa9vFNyZwvxwe3FdJ5ggzJebUMGx5apoZapSAUUwuKsbnWvuKbjcpH",
  "key23": "3e2ru5TC3sgzCRvG6kVGmQ3FwUWPN57myWtcr4S6oKdnKJp24TBkV17QJAo26yrfRjKUVfGT7MkYhnTib2AWcbLj",
  "key24": "3nLYtUnyrJdSdBtuFGYL9FsDSGj1zDcfYnDWoNuDUZSe8zaHT6hPAUJXYFFvB5rrhg3JFAQ8fiAz48wpsw78Kik2",
  "key25": "3s7YVj79yczTKtnykD25fw2biEo9BEQoeztRzqrFokro5cCtd38gXv4D3zArCHdEH3bu1miV43xNmZSVoDsWhd8N",
  "key26": "3d7G7rrdySWDQpZgQTrFvSxpV6eL3Fcpn7tnHXGR8TPmdt5DyqG7n4tbhm16VYu8T48ad1a2Jf3Gm85Wrbif3Rmo",
  "key27": "4zc6qLUxm1fYgzg2kmE7hTh9NX5DyqtxTDUPG2hQNwgrq6bhPMfDVGk2f8AEUxqtFiNtbkQQPekxaXrTAXoTq1UM",
  "key28": "kPt8mFVsnSjn2BATYc6HjMGYfKYvvkZfpoQakoYoQ2kFW6iKtVa9uj99aZyFqJrRi1F5Fdqu744Np2HsL343UYE",
  "key29": "5uUDHjmDyyzS8LnR3hiFoRA5DVD5AL3zxU1PXcWAk3YzuGXZSTC6cdrpkW4N1akHDa2sHJDBBXPeY7SENoEUetqJ",
  "key30": "2qnpPUuRqXn42zJhbUTJJBrgiVmrHMTFsVQ8QuBGN9ZMU22ohdqrMWvtXG3oU9KC8FPz7EH1iwwsCV552L6wTXR5",
  "key31": "2GbduGaLHXVb3GXhzKKx2jVBSWfi2A8BaYq9zmHZuY7iMSiYzYJmaecxM8P2tWZbWhcniFZvPYKwq552LU8TXhM9",
  "key32": "4dWnqQgE823qjTPbRpZpxy53PcJjoa5D2bLTdCAUuEFZeUp9j1mo9zzZNY9Ge8w3Ghb4oKCGWdGpbV8nyrcFYD1Y",
  "key33": "kjYwnJcvSmUqnDRbGkLLinua9VGBZ16GwMzinkcm3yMA5YJZnq6ZoCHgupFwSuvzJBeptN5jnD31FqZgnhRfXbY",
  "key34": "3gQjHmg9kDP3VVRbKMBt8QSscsCSCog5CAgxdNvnLmUAaVnxS5PA61nFD6ZKLbLSLh6EsPTVBMyDz3FbM5pvxiZa",
  "key35": "5mV1Nxso2ypa1uSgSjraDbmip9g49LMxvUd4mrEUTNx2HPKESEYCjCpD2TKwsLCLzZNJEmiWJ1PVeTtkFCjwaNwr",
  "key36": "ryoMuFv4b5aRSkwmMj6oPY8tEyVAKi2kjoqs5KSAi4wmsgPLCPyX6NTbP3yVCG9FugvAAtXLyXHZSv3tb89vG4F",
  "key37": "2bWTbTP9mEQp8Zt4qa7B7WwunPx1Qk9APNGEuMTaV2VotpMQQ1Zu7aTniekjLoiTpBxWny3QvdpEMFfhrMhTCmGd",
  "key38": "2YkgNtexrGdeTaeZzqsWSWYsCJbxUDDnZ7YqJTgDyUCrfn54nABcSq7TKYTZzET9eXUtvgKqiJYasfZMCVCEvCq4",
  "key39": "rE9z2im1subP7WswEq4BTK3VaNfGSvLvnQWFspXdCwS4RVM24sXfjn4bdHcqwFfDBA3HgbcpNKm3b7VDVwWwuio",
  "key40": "5NSizzYtej8MaN8bEW8cZnanwZ21nVaqQsz8H8qjn4bRsyMvntZSkkri1jwusSCK6eGb12XKeyVT2iKBaizYa1GL",
  "key41": "5Gm7ZrQasRBYu4ZP5GvxTJhYe4pteKf5qS44yJfQn2vv5LWKXy7B11Ypx4DQ4w1tvnWS3kXbSSWgexBwrubGGdC7",
  "key42": "4Lyjj4b7oUxgS9DnztbxgUiKZt2XRMqopLzHwuNZxvpjerTEpEQvJ8HvwJhHxqtdFLoNKu9Kjno3H6etZ3UzoMWK",
  "key43": "hTB6rDizGsNf9GJinqmfw8A5h32rxHJwrNZpWsDhworCVe41tYaoghS5jZwmT21knAHsEYS2F7Tejt6i1pQFNTN",
  "key44": "3ndyFjgrNK7MDPAeLAQjEeDXhXx7drRac6iv85vZR65V9MiWedkeymPWuivvTAngk1X6YkoNc8Hmr4R5pTpUhMye",
  "key45": "Rj4evfD4HaoKrrdPUFaw5LtFFeRivsGGUYoxEpFGdaafN81m535Ldqd32Vg9geKw9WecXFpAhX1UzkNA98gwq2o"
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
