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
    "5Lhx97fnNHJr8xq4dsWDvp6fCyWusBnaXvpM7aRvxbVBcnJPKMtWZDkN6oFmLro2NEAp6unMZ12KeEZ4A1bpoov8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C1KBHnDXSoHMdBGKvDEAg9GtBGc9c4Nxh3kRHLYHUTz5jxDoScXEoavU3aCLPYDWga1MZfAzUqfftnVYaywwLqW",
  "key1": "4KgQQuPG9etcfUFXeWgA7DAbyKcDGbXCPFyCJVuR4CbgwdbhKSfwBkhzb9FckD4a1UGpERccymzSqdKybmUP2eTo",
  "key2": "41yc1Fznk6heEkEouXfyHGFeghsb5xD74epuq1qQ2V7nxXVX9tbsXoqQ6WFijAFjdxwGCvGUDDPNaYVRgMqknKdM",
  "key3": "A8ckf67kjc5jqcYn1NcEe6CpqR1JydeTxTjrEhznhZJnUkzSZbADELd7Q7vNhesmCprMPGJzxMknwh7gZ3KUfkv",
  "key4": "28zDTKaZwfPXNCb5g6wPNWQVpp2KX3p5yPwRGLhRnwKbwxYkYti6gCk23wKidNzpuzuexQnPrC5MEgZ2bFg6FWn2",
  "key5": "5qxeW6hBToxiMjkvJTXEt7NP7BH8MgzLXKXgUK89K9dAaunQjonAqoSakpPMjXoaSZYE88pm5iQEFES5MMJprbMU",
  "key6": "4gXk2mvGmb2WXFXzgiLxFsz4DbbfD5Jtug2bvdi1hjbYeE8m7RenkaLp7Y2jHiTxNqmXfsvQbS3PyjvsTsnXqiUs",
  "key7": "28b2czpxLKJxhXtNLFDFwQ3bppCFi16HGUCaQ84Za64u2bRrCUCpineYKygFuyrELtH6gwNgEe9UpaeihuGVdNGq",
  "key8": "pQkTF1aXDzpJXCGCC6LSdCMHDwumf6JMDMMjPgQU2jizGu8MweCK61p7VgjCY9EAakGpXA9rSDXVNGmbgQKRJaJ",
  "key9": "5UzY5gMJN62R4RNEAUT9AmiB8chUEJayozmkHhyTSHikhbfag3qgnRdKKPM1VeMze5VNPiQwVmKziMtswrLUKQRG",
  "key10": "2qS9oatxiAAzrdQCojotzfFRMMxbbhf11ywsMPfcEFiEKKe4nA1VSNQqyXve7KT64MNkjxyVxVaaMH4JYF7xESvt",
  "key11": "4aQykvuZa3TxLD68CnmeWRTQaDexYHPaXeZSP3aFMgkY85RNqaTPQk5mqBVg9uWLNSuTATcxwV8smTLCh28E4dcZ",
  "key12": "NF4kBydM1WQcuLqabd9LRvzMRHfv2N49p8tLHi1THRASb2xcUdEZVTUVWBg56rudUjoLeSxunfz8KYwdy9j9U3i",
  "key13": "4R75Rinh9rmNgkfqdQt7kZ4cxfA9GdUR6vVbXhdcd2utPsRNZdmjNsCD13rgF2F7t3U91dxTLvNEpQWagzV2Tn6M",
  "key14": "58oB7gT19xdaeejkk5nVS4MkEjRcHKme67LeZY4Hi61GfnkmRsdffWvYPExWFrXLQZZVxXAUe14og45FKeD7upqv",
  "key15": "4hEpxcrQyfvZR2twKXJQd6DZnffjhCEvtzgPxn4CSWW4jysuGJnvxrKJMgmA9a2nDD1PJ1RRTknz2BWgUtGxNnhm",
  "key16": "4BtSPXR64PTErTSBdGRYhqQaf9G8R9YB3dXZcKj2S71Uo8A55ooDeRDKBYSdBaub5uTtr8z7yD9oqC8c1n28vHKg",
  "key17": "4SgCvrjz6m52BBpG5zfdCmqWCCqvuVTKFQvWMJFAUktjoxodqBsY2ca2fipXZqCQUjtCuUfnS3AGPnFABRrkn1QZ",
  "key18": "4v6wskmaVz4G8BSrM6tyDb7JNLV2cSDWKAzDi5xpk4cZ6YLZhfAeXpzWPm6JGVM1zNbz3JW9BaGVkGaFXVugd8gi",
  "key19": "4m1Qv9srNLzg5jHY2qsf7iL2kjfEwiJpDmFJC3Ch6UwjUw4JcXQcoPfNVyiwi2ED9HbmmAkeLzSs86tm9jq7b28B",
  "key20": "2FmXH2SuCQNiBVW4t1QokseLUsuQY8C36Qtu8zfrh7UttZsx6bbF4HpKP9xavPxEeFfgwCGYrbSUrdCSGk1BsLAm",
  "key21": "63y3NybHELyBPToPJPWpj4Mw4xxhWEu4AawNZkv1Fzt8vhxpXRoE3tkRrqL9ueyT8HxjwLjnufpeidw7CFpnuuoQ",
  "key22": "5UDEvaV2NbRMSGFxeWrRVYt1JjJ4euSTfSY2qaion5YEmZdv7TSnxnF6LxXBsxLDa8h82mm7yKEKurxpXKnWBeHp",
  "key23": "3w2ide1zeJVtqRLgTU9b9RMgR82RMcnwB8LKFE8otjhbontkvWtk8rCdQdGpeWmLq8E7y91Xd5Uf5JufWCiNhLpo",
  "key24": "2mDBumwTDrp8vgkYKZ1WfELXP6x9KFAZq8zqkqaHHiTkjLyBgzP3ioPQotpnebm4dSgYmJKBmDhN6hnmdrYZoqVF",
  "key25": "3KuSDvQNsf6Gsr8py9m9BFBwGsBrSW5mE4tHy1sSsv4Du3S7UwzxtWy7ALL3Ljp1HB8KU1MtHM12dEK9iVT1QzE4",
  "key26": "29bt4cxQkHoRPj4AoFnd9J7HHiTgdiSVDPUVuesDFtEbRUKGxB1EaTeatXjGURfTKuBXzRMLZ2ig6MxXEN1XXgBU",
  "key27": "4WGwNFnzzyC8mBJANvSvrQbC5go16kLozcuC1eN7igKHWjiNPNnYz5kJTQ2fwyKumnk6ZZENDj7ztNnGcFUZiucQ",
  "key28": "4vhzbJ5LQDqgMGpifSBwFY28m2FSwzKKNrEcM9jLk91BwKNmyKaJ2BJgWHFtZ58haiJCeufFuPn931zx4oQws8j9",
  "key29": "2Kwvx7NtpEnMceVQPbEp3ef9aHiKwrU2tgE1bRGQdPnpeUQ4D4x2nderNPKv2NobEiEK9Ua1RLvsfiF1oKiFK1Ny",
  "key30": "4Co7irHQXSzMwqYovnF9zBCQ81y78EFPcodTXMffRffVvJRfMrCMiFP5JSFD9tdaLnYT9ioeZ7aENyuPuAmNaezM",
  "key31": "3P6ohQ8rC6hUXLTFb7AZnZNiLGAXNnf1D7PDh9HK9m17j1M99fxUFWyR5B3TE7Vc57jZB9gejMDNrJZPY1ZZN5da",
  "key32": "4pWFyXgFuuuuLVh4VVrbhrNAEXbHdiwAiLH5Zc6DpHLprm6TuJ3JBZUafDDEnziayeKhwuiund6d9CG1GTKh7QsD",
  "key33": "5vcE76guZpQxHyW6iduGd3qejfKByxbzJQ9XUEaRH26sqpyfHogcu9d98D4FkNfga6TWRqU7aQF5t8gGkR8MakWo",
  "key34": "5aUcmpttDJtcH2SBmTg64cq1XKDpvzTzzojztSQ5UrwrB4bf7J2AphkVRYkh7AvDJ4p8dEY6WGi8DF6BFQHNpVQ4",
  "key35": "48sGJp8vNQZqRpZ6peZ9tcUEGSRPvQv28bSF1Gf9BjmFkwCH6PEkv53qQmDPdFQjvHvacS51XDZYGX4nvujTBbrm",
  "key36": "3za71f5zhPeNGQ5zH5WskajSWYHhNXLSDQYpx8yHm9DsAdJ6QnPUQiwU42THkiiK3bGwFkpdD6UjE5y3RYpguA5A",
  "key37": "3yBDK4bmKdqYC6RnDTmtBKEJU8yfb2qqYCPusYaWBKLhMdx7tonYNzRPyyJ6dfVVgkKkGdctjioLUPrRrYk8GmVR",
  "key38": "3viGRXQAwMcQp9SN7hsL5xU7M6X8EziR2BijhfxpjNCJNc5vXCZamZYLXdqJJ18DoXMmhubqR6YVUmSPfwMr1fqC",
  "key39": "4kVQvBdi891hXffj26AxKY4wwVqGLsiAFGMZQyLtb2f6oNexSqLfyYWobwpNXUFzjBfQ36jR8CPxfJBaaLuz6yRb",
  "key40": "4Y3n3oGfBgzZkBR2uPYEa3tDWjaRqnATz3KXwqVM4XR9ciH5j6hDX7k8FuPpnyfSJSWqaYJRLJmcQuUEuukc9fLv",
  "key41": "3o6CejuBkQRaesAhDSSYhGDsXvfiR9HEfHHmvha8D7jf8eVqKPYmTqo4rc25dE39y6Tq6ZbjteBKQiGJqCrzLW1a",
  "key42": "2VMcbw5esJ2R4zfUhVyRkZk3MhkHrX8tsKTdqPt168CSE151GtGYPVf8uHv7KMAMZbNB8yKbE68KdMwDRZr38qux",
  "key43": "4XixZpZTHyRQpKZpQDwSj2Mpd4jturi6qD1wk29KYG9mrXfGqzLgctgweQmtSiMw9RDVtUGJPqwAdqm4tVcRWf49",
  "key44": "2beCQkX1iPNFCpzUYAypnELV8hnC1kvLApTdQYHo6KEqhDadnxR7pjHagn4AA1VqwiGCoL7uZsfovN8zGWpo8VJn",
  "key45": "2g23fwV8rpZfYEZB7ZffH4WNcuCZuj2WPo2mrtxdXaWzTdJvfsx6xmUcindVmwpyfFSXC8RtNzCRt3Fvqkcnye2i",
  "key46": "4H42WwmuQqe1pFP1GZfe8pP3dQeEGoXPPspWUNidEDKwLuSFQT8LCLCH8gfm4NGdoFbP4TPrcKoZL45UYjLzm6uW",
  "key47": "45DFiWQVCjfEFzoFfUTDysx8iA7NF8sTy11ugoaNdCkfLUdB61U15pb1TAvdVjYsv84EANC7sXF1hPC2nvugVVKd"
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
