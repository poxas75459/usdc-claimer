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
    "527PwHorTNDdRaTwF8D62ZXWfqp3vCAccQfyzp9HFM7GrhBzkCYs1tLxAQcDH8JrWRmWpFbeCBBpfLeQdNjBHTRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nTFJZuaakhvgxVYUCGkBaDjUVBiQvw5YEYwQJoZ3ajSaZxTRndQRVWctnxGyfM1zoFV3vmWCVxux8jQwopbi7NH",
  "key1": "3w7vD2p8FHPfxyNzbrbaVi6whByCs4KaN9GUxfJ5J6tDmu4u94xiDu9uHihS8X9HjKVEYT5tMMpxJ5Nz9rt5oD6T",
  "key2": "5DbHzrJ1Mr5N6QWPLskNnzBUZjQNW9w78jzgWDZn2ouk2K18tSdnr71nwCjXy7vx1xvSEuvmcQDxx5aKdxNApWUQ",
  "key3": "5qHrHNoWXfa5RdfDgjady7DTfkBiF4TVxgbLeRPMdcRF85YNRQgUDwzwfeauvoGz6cSAnC9hCwBAHTPKXFgwsmmx",
  "key4": "3jyiYGdDM659UgbbX3LBKXafbSqvvraS7y1Mt5GkULokuaBeEvdfQXoCuUAKFrrsvozsttkiemidsJUaWTp4uDhx",
  "key5": "4ZCsbJb3VVd1ZhE6Xdc6PJHBSDac7fBgdPqxRWdWPEbVr3vPVLHimJnD5Y1T5QzfEdMkkp7qGGPxqer5FrgN35kq",
  "key6": "5B6N869vVSMhBHQeyPXFo8LfUSNswP8p74k54bpCYkkpKpDtLnxmefsY3kEHFJtGhJWo27dF66sAqMebdVjy6RPe",
  "key7": "2EB1kBRTcgUa8payKXmZtVq1QfPeiNKXvWVoXikRUdcKbK6skBhFReFE2iNjZUKuwm8SvS5NeXhcLTyTK2JEowAk",
  "key8": "4UtSXsoRfcQfDJagcmyd797KtjmjMrFsrz9y3xY4ijvYowxRhX7EkAhDmREKDCLAcH96azRzaj1W1JE5qT5P89y9",
  "key9": "4LCELJUV2PfqN7Kms9cxHc7EcH9gcP2hf45n2WzX5QbjoPGERMvgKDz1FHFYzHnoifi8npx4foDRwLWyc7QxbauE",
  "key10": "5HYfoiYafarr9yvqkQcG6bxjgcg7CMVz2dHTPbR8RGXPbsFZcnA6jBdiny2Ucvrbj23ynpzv9vEJSKkHduevi94d",
  "key11": "Bv2egZRdkPaArdNoe5CrK9hzADaPakF2FYTZnQrNCM73Bx5YnRF7E8pZmi2K34Fuo3u34q6UcY6y82p8P5pmL1P",
  "key12": "5S6sTCrGor5rNtex8vbB86F8sHBGWrGADddGVQJtVCUZ5SWRr6mP61FHuQT67bUfQeg3g2cPyhPNMLPrLsfpotFc",
  "key13": "s582SrRUFamtQZkCqL8iBfG7ybDASxHf44YGBHY9t5DatNJgrEGWSFV886GXxxdNzRsVGERN1y8cMh7faqL8uqG",
  "key14": "3eAoBvG9CCyqQZpr1VQ3WUgyM5yYNse8DqCjukJ5CugD6br1MCPq5AmLRcgofiXogv6md7Zu8NFK1eD6z83xckfw",
  "key15": "2KUAVmUqEjQpDKtCm8F7bGPMW27VNx9pxARnsAPhN7qaMvN6i7h9XRfR8Lsx1WeT6HzjTfCHkTwEWVhUYsAqRFee",
  "key16": "37tXiuuieJ7iMeQVJYcKbZNKnSMk2Rf3PMe9pjjQMGgvThY5E8s1wPi1PNb3i4uT4FU4xGcKscMSKt8weNWNaJKF",
  "key17": "4eVNsnHjKLhURVfSCQ4rr4QkrU1ZvqQFFCbsrL2hpWZwXpd5WcqC3x27D6N4gN91EWdiZtq3qCtBv9HTxEwpMFyE",
  "key18": "CKjMurskut4EHq9c1fTDoQp95VyDCU7FRc9QwBXgrB8bGhspjriGDFuY5cb2kRM92u5hXojaZEcoXj21vHqkm9Y",
  "key19": "ECPhs1D4mV5urMiVcrimwghsawxb9MdGXbjaGeosYSw4cnoAR8KSmZXcJKA554HcMirVNgnwHxqtGGTkBs5qWk5",
  "key20": "qZV26SmP1UzhKyFgKCSHMy8Q1V85yiKhc4AMxNoKBVviRqwC4Hq62Zsb8fsPbTsGWzdNhXNXXvCzUqSb9jbk6yU",
  "key21": "5skgVn1esTKNM1cX4Xg3jmPrqejTPfhRkyXaSHZDXCkGWPPS11BXWyR3qYByc2TWbLZoWz1tcNT1DAWdxXQStQSr",
  "key22": "2TqandQyYBcKrWhejM5Tf9TmUbCmEeUCZEmvwckzibYpnAkbagcbFx1MwreEZxTjYPZn7RySt9sJ5JgnnkmxkBVm",
  "key23": "4n65JkRKqU1L1QvM3f7Aw5TEcNP97knVnEMXpvgSxy3vYeYJU5o1d6vsb6y3JbbySBDCfoC12PtF25XsbeKdNLbo",
  "key24": "5E1NFUCBxUM5JqHnvc2B1UT5yTgPn2JxfGXNiFmaww7BqNTJhZwjRv87Jn2EGjYkr76Tze9KbdJbL3VX7pMiiSmQ",
  "key25": "3X2kXDXc7xa81T6TYN4mCUFouoTZddZfJH5jgQS3s5ZSy7y2GEBsmmyMvSneapAkafBSp8tphR2cF7gTuxZGGsqk",
  "key26": "3VaVKq71SYmKLPDfYxGx6dvtMroYdkoyHBKEcsPrTGjnCqaNk1mZrCgq8pxqnXgYAnzquK7FxFo6hCYnpZdyRVa3",
  "key27": "3NfQASJY98bMNzXjWnSX4AgihFULoj2odjWMTLA9mv9av4PzXThtcYECmA3N97aott1YQkMPSszVUAk4jdzeUpLN",
  "key28": "5DKvjYo8omsct5nmk8Tg3VpjbSs1yCRNkZuTfVLDVTFV1w3mTE4jXXi5KAjPZfHq1hgsDWvWSVHpJvWLhDpQN42S",
  "key29": "2831GHpQq6YVCpXkmkmyfB7oHYRrN1LHGkmt65VmQKgNG6YwVJnzV5bC2f7DeYcwDZbyanuJshHibn1U1yU4mrem",
  "key30": "3VdboBSxmQUjHPfYkVB2RdfPatvxnFZDrJPXfn7MuNujMwJH9BfHxHqtkLD59MxQUCmrm8cTAyyYfAy8RdEeMBEa",
  "key31": "3jEsweGf9D6yX2cpuwCXsGmcHsojLnCp79amwxgyfczLFZBaTPKsMfsuu8xHkfMpJRfuaPAsD37UuBPijWmLyfbN",
  "key32": "5yeSsegJynuvLiyzxDRzz69cUmCPuwFJpejZyMz8p9qPGGdw4GVboUj3rXoNZ3uxim6hciNj9ora45AXpDneJ1zk",
  "key33": "Qp9rMXw7aNJG3httAoVdTcpUfWisnZKxjPy3PVgUmycpd63VWSsFtMZevKtGw3UwfkpNKNeDqeW22BysFcZLtaT",
  "key34": "mMeTaJGmLoW5hgSB44TwHKdxKYUi7aahQA5YpRAcnqsg3gB7Zmte1gxsZd63ZonNjQUymiBRcz1zYNZM32gynmi",
  "key35": "5E1qWjC6vwGJWegBYKRH6CLA6BVdWGPCSiQFMdsAwPBsjW1JMoBNrRTWtKXcsidmdN49JuGr9ckG7BDNvQNTaXr6",
  "key36": "qGjujuJGhgr3jW71znU56XCGwGP5QE6vH4UHWxytBBsV3iNY6TpKaHBqD6CBo1ZuvKd8Lr4rHSBm5vTx97NYZBZ",
  "key37": "hagEyTP3ea9LS16tDgASKi7B6UDeUPaGYmL4SicqM2uyU6wFMWYiPitWQHgm11ki5er4jyAoYcwB8N68zqzXi3K",
  "key38": "2httMtna9modzbYKj37Q4P2zxuWHFR6d65A9wZ6HVHbLiX52QUdxDQLhC8QH8TyFiYGrjBdPtJJAnmDUt3rsvBVm",
  "key39": "5aR4uH7D6mVf1HmAvktLKGUJEEBCEyMwjBXDkuaQNMNm33bQ3X4nBzZqqNEpa3stCfYZhQ4UdgMAHAMjZfaWjZYz",
  "key40": "4WYMdBcNxBt1nYgZXadv9bGH4gPPsydHhXAmGJd8UYE2kpSUazU8SqFj9VtoDjK7yBrnR6XjhdjL71PstgHa1P6L",
  "key41": "5HhEHo7QpH5LFiwvyNLF2ZuH162xTsP9sPmMbHGYxAM2q7tGFUrvSyrQuthMEbqq5frKM1UqDRnBhMyD8NGnNahr",
  "key42": "5HVCX1Z16emzT2pirj9j28Lhp4mVVTpDxwKK2dTdMyst7DNahjXsmxXrRqiDo76UDurxb4o22kBCCWVNYfN1Z4mt",
  "key43": "4y6GdWwtnTN2kErAtTC58YgdVo5MrnAbh38EJuwwb1TtB6Ji6nuFdCz6irFfoCpVBzeFDk8C7qxsR2xJNdQGJ9v1",
  "key44": "5nkniTchoVNwBgpzqgZd4SRZp7dT9zmzqKjqTtJPio83Xsj3HYU7vDB6KTDD8tXxh7V4JFaKwZLewUuKUnJhzTkB",
  "key45": "PiBX5qMxmq1FA9U3v25q5gqqeQ3QSxPTtUphQWCrX5HbnZnMaCaPU8EN6PCvVnLsifWoSUG4RoKjtLsVLzJrnw6"
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
