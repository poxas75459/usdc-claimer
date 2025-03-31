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
    "2nswtoNs8dBqqgL8fq9dUpq8C3cLYfKK2QNXFPpuq3xKNfZTVeHisQnpef5nkhzpP8gTfC1F1HcYjsUi1E9KwPRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fcnMZNZHVLJCpQR759aWkYwAyDM3TXaSA3EKWE2XyD3vdxA3ynoucj8JUhpJvMrnBgK7RqKQm62f86jntWnvWw7",
  "key1": "YoP3KD1viRKz94ennFsz6sR6HbaueTfWGoJy5dWZYdZkHNataj6kKnTKVLG15SicgksfXn41iP7QHZkq4MKHqUF",
  "key2": "5Rn2zcW97MEUM3rHnABBSh4GSqScEGTUAVfocou5iqobQdjZ5xmMLVrdxRRvJypmdzncHCUQ9Jq2ic58221K1FhP",
  "key3": "2Z6RtN9FJhCiSTvELAwxvY8kqDYLsvsuYAoZ5pFzLHtPXLPmZhqMNfa1ALTMmGhFKN2KF6HPibf7vkPSTZxwXZMW",
  "key4": "5YDqjVDy4MPiNuqi114RnqQnjZkes8qqMt5wuU62HoHQxTvCpY7ng3pdcZL4ou3iKhbPuDe7LuRB223w9WGG3Mv9",
  "key5": "3v8byg87Mb5Tqwb1uraHdkhCJKfUqdx3NHSbUeMEVdfnZdcYA3j6rh3DDK3aUAz84HVBR7J6vXsDTSuSZid1rrLf",
  "key6": "5AWDoLMWyNjCx9erz4w8GWuY9wQ8zNTUpCMxmab8GCzHa3nwZVkAdcGXumexyCcV3Vx7nUGhuNFPStDLabHR7nrG",
  "key7": "41G13DVv6LVg3EknDSnh3qmoE8nyqTcSnThKUqWNLMG8A4fXYn59m7U2uPuHyGwFGNwmvY4fRsmTFYPBKs5XQQA5",
  "key8": "2tRSZTTrniXKH5h33TQgsd2wytg5p3GLE9kWf8CTdGLm242nf12qVPt82bHyaqE13LiS49TRtEo2VTTggYhTi2RX",
  "key9": "5eyg6BKEbsftV96m9mu6ihqaSNF8LWuyz5yyyMgUCsxHTQw3xjgu3ScmmkCUZi6L3vEWHRshm9UjWnWzZwuCdrW5",
  "key10": "2FxGsK46A4mkXWDTP79aVS1DupjGgyefySDVQS1LGSUmHJUneEzpYbK8zsUmqQKDPVcvvWrE7fRB8F3hJaiUKorA",
  "key11": "4gfdpMF9SNAgGGo8F2dcq16wJJ62cC9dh1pPaFdJUDqTKR4V8dWMMKaYMTp961Thuswa2V1bHWHTG1xXJW56WNvG",
  "key12": "2jpRy8LAp849ZxzmArmxZNqCRGfHjimooLa8aHyfFdKbPXFwhJTZ3vz8EDV3BA1cPM5sEVGdUCpgx7aNkLtHq9ED",
  "key13": "2kd25c3w4973go2oNzyXzJWjkZky413HxtMRgL8zVzGhVveMNofmVpdcYnRHb9Am6UQsCVq9iMBnkUW1hExTmWgQ",
  "key14": "2CYbFj8DL6MMAegqJTMzBACK2mj4WxnL8DL8VJJzjGqofUKnzv6oP7YLGNo9B3i5EHRYopDvwcdcR8p7ybQcpPqR",
  "key15": "4tZWVrky1d1sejbFvztsbre4Sb3CKVAebtrfwq9QJoK1uJr3Ris6JKWKTZ16Pnb3eMsajCe6B5gck8smUyYBmsau",
  "key16": "DJFRXmgT4hDQnYJeGcxWoBf3s6Wg49Un5iKxL2LF37r4FGQaMTDq6Acvmv4uLKKhsgc63s96gYPxqhfmZ11wh1d",
  "key17": "4CPHWNH8DXfTu2mfPr8Jdvfo1U3ScZoHpYYPXhd1ThoeR8ZiYF3r79ApwFtjiL3hLetHuSUWHH9xGs91MFk6AEE3",
  "key18": "5WKhdFy5eUPtzxwMYkogHrkTPMF9nazwbzCmLDK2ZEGBkG8jsnYDzRoHaroefrxXqnvzRfv2vBgaVq8XNQ9DXwSx",
  "key19": "3FY5cPPWY2wMr2vRphDKZd1p4v4oH7Rtz8JXrtScv1REnqSL8FRtEGxYEGepBktvQVJiC5Y6Rex6b8esUUbxwbdj",
  "key20": "587Xtmf9Q4P8FCz2qr855dT4BSj49Nk8s34QfVP6eazTy7sUvpHt3goEwjgQj3nWfuB6ANhUdCLMLgtbuKUJ1SkP",
  "key21": "5CHRAXUkqA7eD4157Tmnt1NfmRw7MsKazfpF37sbwJLN2z1dimKL9XA8p1T5MiBATK2qTsTGCVdByZLYGNqE346F",
  "key22": "yBqBS1uxD6NWgBQp6JcKLWaGZ164uxYkx8tNRbDKAMju42GX8TvZvw54NPEv27RtszYR2b1BTfNfyeWvETRqUfe",
  "key23": "33Mb3JqBv11tMjbfYiVyRd7fmEayaXS7puwhp23yxQTtWF96h6Nr4Kto66NxryobJFk8mBqBFC5x1bUrCUBHZ8Dj",
  "key24": "247LTBC49eWkqiyYJYgFQk95sLcMovf8xQNFzaBtfaKUCrBYCkW4uQrdCvEd5vdCaKGWarngiMU7aHudAptBTRqL",
  "key25": "25tNZTALmFEfYHLY3Eg1FsAw8rmjmj6K3kX9wr4s8j68SGP5rB7QusrCdkA9jiYA9aTfgW4dYsGVJiQxExqskwKJ",
  "key26": "2Dr26uTA2kxbovpdJ6KJmbQiE1rXr1eZ5yyaqjTMsqc1KyZDytwXdFtNqpqhp9d2nV4aWevhafV35T1Xby4ZyVRK",
  "key27": "49XTYVfrZGHWctujCvAzQgyh6E23p2VZEcC8e5maNtwvcF8C4yG37Ds81PbywRuGTtf7LuAKqQbgD4oWv9djzSuu",
  "key28": "4JQm3GP2SgKaQ8H6xq7ZXnARG9ktnLLH675AMyyv5f5fLBSsYcyCvDVUDGYAkfwUHAxiyDNAE4jxr3kmhHqQqian",
  "key29": "3Zarzs61BATFYr2iCutwXzFJoYqW8XogYRk5LK61u4MdPy6azzujCLgXaus9JyYm9iHtP3tN6DL9zypa5UGsfKtR",
  "key30": "5JRrtn96HbTQbQhfwDtHjavPNNaLZby2aLzGDd2Dn12B5do2STLjKFrs9DX8KQFnnAGfogi4juc9oNzWQJHCoPTA",
  "key31": "63YnPSsRjsNLKY8A99g8H767vw3RxHDvtpPk1XauDxHNYx7XAMQfYMBefLjAwdgeh1gjpqtNzX22dAwAzMXHrFAW",
  "key32": "4746ngEKevJzrEYJGPmfQd6YEpb31DsUd8nE3Vm1m6HR3G31DsGQZCA6km3XL8bwuhUABTX5G38iv4ZpAuxfujmd",
  "key33": "3xnru3efpRtBrhKZD57aGA1HUiHbBFC4hy6hgKXiZf6yszRUWuS5vfThALVTEXnYwJeiqCsYJpbJwfKoYdbgZheN",
  "key34": "ceQuQpoiLGM9pNiXjsUrfGcPAvgig9JNqBwASCCEk74P82F1A56RgtAQUJovmNTRkoEp3khZgbVcNxiwkb7Voir",
  "key35": "3JvCECABWkrwZVNEgsj9jW76nmZQKpGk4KqTdgMjHY27y49XgyjkRYaFPHLRfmQuwSpAyLtmXcV6AxGAhNghMiiT",
  "key36": "3i8s3jwBSyFSgDQUxupaggMJEmzg1Pcnf2pXqe5FcRiFNcRdU6CxYgUT22rKGHjeYGq2LbCEdim1ChNs2nybTmGf",
  "key37": "4od4avai5BTyYdyL7psxhxhNr6X1A5h3GB3HyJ53DpLYRSqFnVTWhZNbD18aP2EgtJKtZuJvE41zkAbDpVqkKwtG",
  "key38": "65hQWLGoUJMUAvU6B1cWzeGW7ydbHvhW3JqQJ9oFUbLh7LCAoTTWsMYLvin3vxa4veBrwFrVmKCvu9FDHuRbDnT",
  "key39": "8XEcr6sAtfrThmK8wTKiJrQ1KAt5QbSpk2n7kwVsxkumS9DbUyqP9dkAKaHTawAiUAMXWm4WC7UBeytJFut3rF1",
  "key40": "ZCanJTqdWpRyPmcQD19xNA3njnnThvWiZ9JjjcurB7Hk1QPGkPokpvqn49a1CKyhFA5HZ5p2EEMyCa3zoxEE2Jd",
  "key41": "2S9iFVgHdrdobkE6Si5fvG9g7mdr3aYXvSPSoML8kaoWdbFHjKqUdmqJAYGnPe9UvBGUuTd1z3TAv4SdeNPVEV3B",
  "key42": "2APQD988qnK5f9rZLuimm8Tqr8YCqziEvS6CxxZVidg9yG2GqhcFq6QUxfnKA6j5VH2VpGFgQhKt6RkKV2dF6eJB",
  "key43": "3Edpm9RyqcsZ3jRZTtSyTq3KWNJUk2D6XvFZxkLb7Ry7sSARKiSQpmjGn5YfgvkAxuHLhCKhR3sGCVYtuFrExggY"
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
