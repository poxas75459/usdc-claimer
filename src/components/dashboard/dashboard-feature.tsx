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
    "376PioqTtHat9vh1g1QZpdreg6Rz3w1tdxb6uufqGTNjkQyiSFMMCD9ky4BA7izPc3LfdMF8nmsrr9ApKuNVk9BE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wRTuD49aaRFwoPqnknEFVtApt4WecLSvsjJKhqzsbBkUS7fkvmr3debJKDWU15T1ULmjKEnqs3TpZ7DHteWHuRk",
  "key1": "2LMz8PgowJKZGHMfMae6shkSshRpjMpN1kKPqDWtxm4an6fVqs8K2bu1VXQpfuRUebTcSU2DQpxKb4o71SkZqUeo",
  "key2": "cY4r3yYFzKc2tjK7ao2FyF17uZ4kZYFL11KqbzMwNLEgftGnELZa3NfvCFbTwECy11pXxuHugZwuHFgj9zVgChE",
  "key3": "3xYBiqcXXDtD8PAV8T1k1WeXcCsBo9rHWPetZu587W3iViMbFvv5YU66wdHnRnn93Lp8iAGgTVRmEtLeYr5wDP4p",
  "key4": "5jsaZRbo5faEwfVTp1JS3MaS5WPeHMkuTJsufD5FiefHtdRfvyPskxsvV94K8tKmtivKSBRBqBumV6qQmC6qvyQT",
  "key5": "Q14Wx4oakz3ucemerjR8Pbp3ZyzrJ15fQaW7kqvapZmLQgP4rSGuxMEK26qrAPJcuqELkhKZwziPPhPfaCzFxXN",
  "key6": "2v1LjPcmZBHnZijEjdLdduQ64aKvYj596rgyCGzFodXcxEqYofvhAtaYshTH6JQK2LXkCvgHAV3MQernf3mRg8ns",
  "key7": "52so7phCh1RLVDaBSPoxX27Rh42bxJwP2SvoYtXPWinnRoEQApa6GvU5J2ymTh8SCb98bo84mBBaaSysDDn8HgtC",
  "key8": "fnRyyZ7nHdb3exs9Hk7BQWBz23DZBTCMMMMbDsdLEqQdBWUyJxh2WCAXfXZarRRFWMTAaZoLKCvvjKWfm599sQW",
  "key9": "27WY6jRZUBp13aSihAwp3BaZrdVzHodiMtDx9rZ4fJDyK7L6DM6Dkgmq73o7TtRg3NJorZGqRbq1MNxhA9qiKbf5",
  "key10": "FE4voKTK1V7ASQLAFzVYg8B97SafHb59eRhjiSBY59xmrpLW9GaKh1t23iiNpJzmCd9GNY3uUBiQWHwLZWbBj2K",
  "key11": "5jhBjtW3fVW36f6n1GYrDPchXt85RTr7JhJVPJBtozgJcz2Ws6KTSfP6yKqgmamik31LkM1f64hwguZvaQ51Npzn",
  "key12": "5gLnSGnh87Mpsfe35gQp7BJmWPhfNbyh3ykuTrfjA5L6Xv8ovqT8wWqDqrNoC3BR8DDN6H8tUs5V66fAQcdCe7hi",
  "key13": "5HXk796mhGaGNgBy9QRyne8m2TLXaWh6azb1xMWVfvPFnfdCGeovxtTxPnrUzNX18YzU2sX9qdjkFctZWYsjcuTw",
  "key14": "2Td3o5v5yjPDLFyBiq5yMFEGxXkUsnfiDuttcnix2H2LKyUykyrsmW3fK5KNLMnTT1YkCAve5uMVMh59BhqicX7W",
  "key15": "2wRmfuWVuPiT2BoKsfSe2KFhqWNyRYno7Bz41iANVFfEaFkVi6MdvBNtKG2Ne2UjFwgWqVBdfqKXecfTYCQ5cHuX",
  "key16": "5KWZ2F3ttjhVSJxV9ucLkjjDTKBNNfPnLx9DnUrYknkWqw3JZk48yMhFmwSaUXEqkgm5n1pRRPEnoUxJfywBYAHQ",
  "key17": "2V7XcHCkUGM6pS918jDcwnNwycTpTY599Nv71Hukr7cnVjXHWZgNfogxriUqnE93sDogKuoiyVBhuUBwUAZtUT2K",
  "key18": "4xGZi2rvj5FwzgUDdJnm7jKk35Z8nvNAJtRGS8NtxdTWiXCXj2ct2L9SkmYdBEzXrWUoMPx1dCfmw2oA1JU2AFEK",
  "key19": "2nQqJfDKkLfjb6x3Ez2Rm1dw6KoQehVraz2jaJuY2fFXhAxEM4jPCXFanTQZJzNokzMD5j71Decq7FwdRhaDkuiP",
  "key20": "2Arx7htL5kdDqdbpmjg28bXKc54z52yyLHWy95g4FF8J9v5YWFNRzPC71HHtjVgU8HALdMM9eQAGQmTrSBgfzRVT",
  "key21": "3SXU1rYKKfCiowEhjSCVy2aP6kjmfshHzekwjNkEg9N9g1pJ884eM9skp9jaD374MNctJuYeeWgBhJRSABKfMYwv",
  "key22": "4o6NeKZ3JDX5fnbYUyeTVZw4FuAnkgzhHqRfJP6ea3AHope68c2jXrRHoTCkbcJaautgnyqYd5np17d7nrXJiw2U",
  "key23": "3UWoTZPYNodRaf1bh3ZUon229UFLXJDFk1JWiEgrDCXCA8YgAf5qVDDjEC4khtTRe5424MskdQR9wYM8xoUQeMP3",
  "key24": "UEjKt1C3pRK1EQxBhe6YXsSbzGvQMebW1J8D5Cmmv2ptMJTX937KjMXk2PosLLq6KhqexmGxtG3qpRBGcPAcaRd",
  "key25": "hDgZZBg9UZFf7WpJgarMHSagRsoGGoajrMAQbPZHRG6NYjsWQzrTJBqUx8DdyjJdSg7c4TUMnVSWPFiF7Prj4cA",
  "key26": "2ufq6DgsUeQvFpr1ZPRgY9pHumLefUZNzLgC22DerRDxZkCoC6bBDhEQosziK9sMw6nuTsZ3VBzevEgMncb6fzWR",
  "key27": "4Y3q3pk3TzuGaxiDkJLnDnFiHULJbJSdYEj9tKRF6tPDmfcnN2Mb4mYL9JXEYkBneZD1oG7ge8sTnVf4neejv983",
  "key28": "4s9hBYV7EJSqcnVpGMZ5Bj1LCWDSXRvD5JfjiPF6E7S5rZCW2tUtvPB9oZMe2q9BnHoGPB4VkKg8RPkadPapCYe2",
  "key29": "4Pk7jH8R6NHNnY58b1Ac4tdSCPKGSWMADk8pf5J3B6rCDqpsj89L3PQU5ZnqvhXj9T9FYx4rea6nYWxjLivzdzBq",
  "key30": "2B9ETJDpHrkS9Caa4YSYQx9wWBHzbFeMMqvMD6NRsWCa42PMFsuSYX4b8ja2VJKSnbzNvpSJWwXdLXMX16ktUAPS",
  "key31": "2RZkAhPWLnHhWSs1YEHUbS8UyXW4YUzF5LaTE6CBRiQWdKAcwrELEZUexNLZ4kc7UMRKfVYu4DhiZ2Fce2rghXiz",
  "key32": "zcAFzTUoVpFJ4npQAsyWxmxv7AEnLNrXuU7ErWcUDhpWP1XfFuD6zXngsoQ4DqH2q7uDU1XCkuZynSDRLx22jk4",
  "key33": "122cyzjAkQvZBxPuEijs4ydCgYtQackUztJeFntUar1eeXjfUgHssVSB1Ahe85GyjepVQkvkHpmMDwTwNshNGK4D",
  "key34": "49V54zhdUP7JcrB1kiibuH2YWtsr4wypgXamuf8aMoktdkKsqyXAAXiMn5SihbqEyWRhboz3iWkE8yjiLyfmsKKt",
  "key35": "5cx2fGryM4wJp7VmmT1zXGgpy2j7xVyqcXhkvTNaQvsYbjCqHbqTZV4fpBhxCBXuJqqei4efP9to7JQrG5nQ9Rik",
  "key36": "5xNn8K5Pnhzv3FMWTUQWmtmLCej19uRonCsFwerkkBqhgFJ8KACjwDx656qsf5FekwbLNn1NXt6usF32mYU9mUhM",
  "key37": "5jjbGFzVaZMQS9LQqD9TzZFwVSaoCnwDary6URQYniL9eMNMNw3jMgbFfqZMC2PMKNzk1QqwT7eWAq4obvrE3B2X",
  "key38": "5vRwY1i2KAch86sNm2pBZrKwjMgveZrfFCRk1yiNVNhMXhtRqs7Y2uMxMRoSmQzi38UZDHDMh6KPc8hAnqwBaenC",
  "key39": "4V1XSKuYVE57oY3uHssq56AtJpHX6U3xhYpBVMGjYFBDHxbkWpEBe6B4MtpUj6ovQfQipGBadzMiPkZUPLEF2uya",
  "key40": "rKwek5Z1Tk6njJNHGsz4WUB3uWNEBMkZmPwxdduQzq6Pcg4P5ZToWDcfA6CrCc3bnQYDv7Js3EkDiQPquBPmbBi",
  "key41": "4WHoELmjeL1LxnTmNZXiSTmv9etCHNrdDW16yQbMKXfzkP2bgpSimfCpAtaHWB5WhXMoAQCqWT5wjRseDVDP2aYW",
  "key42": "GdrtvUMBn8q2RTvsXxBpUxneaGj6qLejA9A1jf9NMdJmrr8yrZqmtWDbLv2D7aQyBzpf3DtPQpLDrcFbf7V7kMn",
  "key43": "3N39tx3jpJLDhhPKFAADx6MY1mkoqNLrQfFQiLxW16VGrQ1hsjbfMSyvpHVW4hrrArqEaTLprnb8yW3LVbVpUSsd",
  "key44": "4qAizrRnPhUqe76NwdQr81xTkL5aTwS3gpiZ8ZwWKmksuTLVyjRPDRizNsuwctxGHGBL57HYZWgGcDxyGkQFx3xr",
  "key45": "2BX82bD9WvWi57kxZSJuhcQoE8HMjsrJxFSquQxHBRqNJvr2wTcBVbtWjV8nFd65e7Qes7N61mUPyERht4ncXMSm",
  "key46": "M8YF2Ei95E4jKJnJmeDBoqxeyMTLnZh2esaKhwqZMtrD5cbH7P6igYYXQWBVWHMewqEtRcx3jAF9AJNBZAXWby7"
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
