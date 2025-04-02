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
    "5T6CV76Z76BemqaQ9Gbu3DC8oKgYSzwboE9iiFe2eRCvds8wAQ2eiYXVneabAjrY44ZyBNKb8LF4skqk6BxksY8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ki1aYpGN5wKewRA2WxECaBSW7iy3QqJxchQRTehws44SSMG3BVYtEjHK4eta6sr2reVRmUaCYxiDVVgxh1b2Vfp",
  "key1": "2zpQzroGFdKG6Js8w5GQVvBcKfB3wxDsktoGVzZnct78NcVYbPZaKp3JAj4E1Srx2inEN8PdcnmU4sivYJVQ7pp3",
  "key2": "64feHgS4CQJ1XyBVTm67p8JaNp9n7xPeaL1aJTnFimQMzVCdGUX3LZDGSELvKwbbg8HFzNY9YqSW7DAHq9QgtRZt",
  "key3": "3UAXhYWYsoJNK7DCMSSm2qQCwNEzHTPwAM9mvj8AgytjnZZY1cW5ZYhXB3aDZgHRQYUSXHJC8MSN3Aps4WmpGY82",
  "key4": "4fc5hjzJ9H2RZhs1siUQzue3MLiDpkQyxDXDY4ubq6NkNsmtzMgW5Jz6rTD3dyPm4vX43PViEmvVU5fLJ8Pii8dZ",
  "key5": "5LjB7hihbpbWizewiMqeFvBRJXTVEGufBp8QahHWTHtjxDX7Wsmf4cEppzjJnrh6usEjtT94wVYReLVjnxUm2pDW",
  "key6": "2UZPgmviVX3BMkLweRMVbbxs8jyY5y7tWWb6TuYiMM2xBmqx76gT8B56n96b47NEhDsVde82RFtjRq5XTmdFZ2JL",
  "key7": "6jw8xby9E1pRP4yZBp7VRUT6q5vMEAJG1YnA2jCvBRQuBJM41vGPrLoPv5jWHjuWQvYnVvzzgybhtCMBsAdtSis",
  "key8": "ZRotfMm18w5kwAYbLq8iYkCdZ7upocLoJK34X43Why5bXFXzYctTpKox5tfoVuuEdofZ7YFQpYAQCH9acvZeGUZ",
  "key9": "3kTaJKrXuU8sYCtbJ4vhDHXKbV7JVN62t2vT4UR9aVd7YFaVXhuMaTg2sX281g8XaQNu7Reggd1378qwgv9rRZpR",
  "key10": "2E9Qb8pw8tMLpvwph4mxV11BopcLy9J4ozcGraywvMUxcekGq4pr5669NjLVAQLTxFEqjsyCQFWjbUwnRSv2dvwc",
  "key11": "3DEYXGLaEoVPgR3XLU3FAKb9Bsi4PDfCoQqqrgD58ADbV5FJEAewcoXnh4sNXt28L63SMLz1bBNe9gV8RJ6cMVrM",
  "key12": "2t2xAaqYSFPCTHcZ6LrifoM7FsC7Jkg3Cpu2iBxUmPo9K2fv3vw39zgPKKYZkULnwD4xZcAfLATxLrkVYtpoZg5X",
  "key13": "3p67t4qGLpZqcho6ymgXjhfGY3xP657JLdJbZ8XgBGx7115x7Zspmf4fPAgmp1TMF2PLrJuMVP2xkYpJvn3pc8Ff",
  "key14": "Cfy9c9hLVJG8AmjuD53TQA1frjWb6RQfQP1Vyox6iuGYWKBjRerkFzPYvMfjbzi3fRkpZ3BgynxWxvKwmjzCVXy",
  "key15": "3p2FXKFW6WQDEw7VVfDtxWjzeNUqNxUecrzDMsn66QeTDwCezg2CcE7jrwABToMK7xuB7MRhGJnG67XVZRwnkyRU",
  "key16": "4h6EVgbkRfWb5zwphkVvBwkYmuufZQm2ESa2VgP46V3saGn22Bi5PSkuh4fTdfqRfqaXjzWp3vWQzHzAN2tuLyhH",
  "key17": "46QiAA7DArM4WV16q7t5a6AMoUNewfPYKTfZ63KYnprcE2dG8fKwtbJrJY52FEnLbW6ozqxsn1kbuW3AZQNUzY4c",
  "key18": "53X8K3guitpes3tcxCZPmDTnAK2N2w8GykgLFtzVsfdioj3tLbAV4E3TxseuDuAiA4JavCityrbo2dZ35iiSffXh",
  "key19": "5vhRR8XwBK18xKWFLhT9i9wEFuzkjzisvdotyJG3HA4B2iFbbvWo6sDEEYyeugR9y13WUSgk6VRRkmKbknEHWEDr",
  "key20": "3Pvfu5TeD7ERSWaTJ2mDD9DmysaeDojVotMwcVhvgBpP3QEpLUgPQCQsqsaDwuTtAPZ8MCFPwnibfqRsCzVzG4Vi",
  "key21": "4vuJfigaRzeJa17GdS6CbNUHNMPTXcvJjzuJcaNok1GNxKN6PBmXfGDsDBpkkUbVUt5Z1HVeJQXwGRQqSuh471X2",
  "key22": "5j84DpXCByAzstmt7j9QVjR23VeoV5ptmwNRjWZ8YJFut2yGpBX42Vp8ozmNc6bk89fRNvGyUpJsjDgQkjEebJ5T",
  "key23": "3jneDyKhMBLBJmP3MSbXwHRTtyVym4yJwrAVeh3iWuUEXSJo3m9DuKWdnu8jyTuJrgaSNiV4Tc5twgg41xeRwNid",
  "key24": "5krniF2TRjRh1WavB9q8sAMnVsfh1bpifDR5AraRr3W5QivcbSSv4aSgg4QM4ZcW77wDGhJKnUtCANT984mo2HAa",
  "key25": "43ZzXwSD3Q1xfENs1yjx4YSnUu9DCVaM923RdzfLGmXgJKj8AT2BqrcYEYeYHgsLHdFWU83JDJ7Uos1N23Qo9wQN",
  "key26": "5V7KqPMFYbxJp5UZWgFLopgmwoR84NmwJQATA1988meuXBxpDFCQn8bWfcH87uwy5qqBwvpjcQpX1WDyLercZFTN",
  "key27": "NxXVRMn1otn1L53WDqtZj2EukRNR4ewjKAWNpSJgy7qsefm7zh8gkFyw3qhnze67HUWbLNACoE8LzCkYT9mnjde",
  "key28": "3j4MvmaY2S4s4oMh97q8uDZWFrew5pyySw1beVo5oPG8iNPYgi7YAnK6thovnySXhFY3PbKYfrBdMfkYHiMXRE82",
  "key29": "4fk35SusuqZ7SMfjDvXDjy5a2ohX7xNA66kfveJK6S819CFvq9Z2AyGkuo9yvPC5JD8PEMpAxA7uScm4mQF9yWzM",
  "key30": "2kzjQmohBiWKwHKyufhk5Tqx4ZSEjzLutRqLzpqac4mCN7k22RM6qpyMcJAKiHKLbUDtGuoj6ywodSAgjWPCmNyB",
  "key31": "71QEX8huUCZMz2xSttFQHCBBmThscsMeQ6SMoC8eLegkdhJxi7Aq184abNh1Nxjrnpsf24BaFUYwXxoskVTJcpa",
  "key32": "3McvMduawavBAJMGPDT7C8m1VCtLacfmNuQLFzbBULDY5jNqzDat2SB1tVkVSaHZVNzi2tGttcpn5h6uJiBwfF7J",
  "key33": "2BuCMtgP3V38UQ9VUDyL8V5UNJ7haCGhKzRJZmX4RhmpPrWaebGat7bofAzv4e1hLNndZEP5s4fkHg2i1AnJRk7z",
  "key34": "3Jk67PrevCCwk7dPb4NhsS5nwtijF9bZH4QZ9CFTxMgiRzU2atJ6J6GTy44eSfMMRVGgxkYkLSvy2q75jrtLJCkv",
  "key35": "h36TykBCp9nuR4jjPxyznKSNkaCDs8iSXTZmBYeViJQKVuqmKZRP2pifgYjDHtLBHmiuzUp2WLwGaZ4i6qMbP25",
  "key36": "24wEfLhTa5HHHENW65EH3vnYmZnkn6b71uNSEJqAnGRLYRXJP526Um17E2XrfcFr8QRPoZiJti34v1T8yQAjoL5k",
  "key37": "3acqad9V2MyQj8iVmha9kVFp6XZbpMvYzcr7c9WqQAWj71JzfWntmYQiZMMfLK6qPPfUWDpkmkE1s6KS9o6czzaU",
  "key38": "3cvWXfBKbchgGGQyyRmSJ4rNGiSBWYjS2MWNdpm17k5Uqyk8UJ8iAxJewNKsTpi6CfpMBicF54jufbqWRMvXsbog",
  "key39": "4CRBeXcsrRwszkHpwR9xPtKSYqAsQRGjk17TYqz5wghUphwoh8EcDLo5Nkcmjcm7R9zaeLJCWCeUQYc21BPPFKg5",
  "key40": "5tXHJ4YUsKLcxHBQpYRKkE3j9Mm9VzwXa3X32ECSQuVZYXhB9ZVC8UhEYRTvdHAcDHdaBnWDWxVeVrKLfgrBafwT",
  "key41": "5ReEZdsvZX5RWP6xZBU7WK1L7SvGGxREykdZgSefhbPaMq1UNBdr4f3pvhPMe6wdmsBPHL55JM2qxf3J6AyzvriX"
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
