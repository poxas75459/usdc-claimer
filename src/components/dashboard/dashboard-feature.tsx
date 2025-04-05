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
    "4RQx7cwQeJYZZjKihaeauZEqRMuY3PWqS2YdvvX5WHioXHScTcjVKnFA7zGTNScynYFcJGAFPefGu8DXfiQmwNy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ViDJJMvcGNKNAKP7UiLrCwqiHgvD9N8C131yodAm2HkvgVcwDcwSZZCNGQ2grt7Xehpmq82JjFya8nD8KwpBTnJ",
  "key1": "351yWMZK4wTvm7EZ2DRQdf2QFW4TvnAKFJJpL3gASW8M4e47uyoFWHeaLSPjeYxmENwkVJy3CHWce8bhg4kt3J51",
  "key2": "5p64ky1Ydhq1hy6WKr2HacY4zSX3ZMCiuzj3LfefYXYGkoR8nKv5yV4agnTF5tR9JZfjn7zdh3ZsNW7xTFiCjFPj",
  "key3": "5FaJ3KqzgUwMUpEwunQgVN4y8izvHFVzZzKfBsD54ejWnZeCNzoEFpG5gcp8LSaBD1g6U4JDsX7KaU7Uf97GoYzV",
  "key4": "2aCkPLEJaBMXoC6xrQcrFmS635Yku2zH3CtARPyehDhyDpx5V2zhd9LuHw5tQtuFr3gjGXBn5PEXPutUs2FwVTMs",
  "key5": "QFZsU749ezo7MR9CAQSwawzuwQb5pr62AC9dnmeVbwMc6b6pY6HVKEs9Rppx1aozEGB9P9U9qRGR3eFoKUwfCdi",
  "key6": "QstnDZevayBG9yE6ctPw2hcjYke8knSWt7z4KmAwXPxH5YgxNyCkENsv1Bpw4fVgtJZ1cKdhFpev1ucbjcxaxkq",
  "key7": "mTcXuQbfSFA3RUBa42ro1bELU3dwpbUXjC48NoSmEJFLvTWbnhTbyq7y7sNiNheAGsmHSjyw21KsaYCTYHZpqCU",
  "key8": "33mNkSWiXAGkPqrx7QuKy8e7EDmKaF211QWU6nAqbwF7SsEbeJPp4GM474p7K4GRMqsF6qXzBw2yi5v3FVpF5TwQ",
  "key9": "2s2SHPrphTHMDnXgrNVW6xZcgzVbxv1jVuF9vp1SWtZC1ThyXujA5oSowDQCY97jirjYcPvd9BzKVYu67xPLth3C",
  "key10": "3xd4dFQ3ko39147p82b7BpBUnqveZvH3McdSU2oAYyL5j9v29iCvGfv72ZKBgufPHLn7pm1eq2PQ9QExdfuokx3o",
  "key11": "2YTE6Qdsf3FjR4vnoc3xwSxrMQBN3rLDCyHwP6cY6Kj4TYwFSDs8GgiwJtNznFcsQMSqhTMUpa9PN5mWGeXzQSR3",
  "key12": "3ijL3151UfQT8aTs9CScjx6995NcxVuQybxrmGf4ZvSpCt87dXPqJKnt7q9zsj3z4KFXhTnBHXGF8nU3JhedfEcT",
  "key13": "3YYCYtPBb9LRBVmG5U1MFG3yZhMTHis94u515vh9KjSyTcsSgKhKSY1gbN1PyrJX16a2j2fucyARu15XksgXXnf6",
  "key14": "2pWtq7HePvwaFc7irXphX1oRr3R54JarpcoWzGQtMFmD3yckx6RJiTpBscWrG8uJYuAQvxk9vAetXkLLBTf5ceah",
  "key15": "MGgkodnpHa4HkouBg5KLe8PX17hHJa8J6Fwf4HS3xpTT8Dtzc8ym4KcghLPirMDcEVpKKBueRA7eByyXnemmEcw",
  "key16": "2PjdK3MJDKujyFP6MZjZVCQe6bxXgPrsZgG3vVuQ3JDQVtbuqtBku7CEn811MGzaK1AU7FFj2S2cWPChjVcVX3Yw",
  "key17": "2AEH3C2AunEgCWoSVE9cgLQucxbKVa21NSdp3TqMbAbwinmzi4dv2vZdRHTcc1uDo9W6pom8fpM4AiZj2hpJKtdV",
  "key18": "29LBtKLM61Fcc9g8452ygKW8MMy2ootarSEvBEwJ387cGYMz6hJg7fyMS6Sb4xjkzX1V2nfbSx2z7Hxd6osMz5tm",
  "key19": "3FaxdbccEUXLnY1osVaXGhhdkyMtXoYDA7Y4ZtG1cp4Gvn1sCRYey34cg7t9eFWLnrV1afRDgr9JghJ3Bts5oWWU",
  "key20": "2vmp9UD1eehGCSUL1yDcjrnt1dWsnQvUe8zMx8cJcc7ympTFBVf6YTjnjVrd3GZvKGpQpXHiASsdtnGsXbg7MnDK",
  "key21": "rFJpyjBpJqby2MxNK9aPkXfrwy5RBmKyXgiVLzS2PoaNHhWeFyErX71D4TMiQEXgRJb8kQWi8wvhmG74oU1otu5",
  "key22": "34UB4RCBnXygDkGKDUY9euhVEYfPW9LFKZpSbkU6DAQJ1KJwqaFzLRtfuAvaaDrPNSNHL9PFbjAdNiL4Ja9SEKzm",
  "key23": "5tFAb6Uu2dDfFfhWJRTT87K2dRx3vTidvFakAX2DKYyUAhVYNHzrsRmmzXq8YogDYVp9Lb3PLRrwKbDoTWvwXGGu",
  "key24": "2s4iKkrMQ9Q5bX93vnZ44UTDAN9B6wznWdThVgtrYPp25qe6ng4D9gxdTs47apQdHPULoxHBRttprjHk9yWCp6mN",
  "key25": "54KHc3QSy7QzTMB6hMNBQLAxiMWbevAWhqeZjsFiv1Q1QUyNP5ugU34iD1WqbM9zSyDtGTxMqVgANFtvW89qXUHn",
  "key26": "o9NYG3CWbPuM6ohQMj5Nqd2w1atZ1Lw7WS1khyKKe7Sa8yfc34CFfs49cVyvXJpQJnjG9hcDA9T6WmFxz7Pr9TR",
  "key27": "2RZd89SGewkCNn6fH2FSgEkpoq8GXTgFZAmvWUYvpSi42LJNv7aHvqMEy6NLPubtHAr6ULG4e3gj6NXQBE2vMNq4",
  "key28": "5xfZd9MQwYYp3j1fudYAPr38Gvp9Wkj8Sc163xVyHpgCN2bQ1YBcwfV9yrYA6ukWiFtammJVsGYzt7rXZDmVyyBq",
  "key29": "3RRDkV5yhQz1hPCqcPPwjTRSfQd9p4x1oANxbyCDjFDUgpRbsg3QDuVxUet6evmiWnAvjopWLDLjaho8BdjaEv9S",
  "key30": "4wfmwWQbftUUJhfAASCC6LGbJtvutroxERfi5KgxMkZpFRLCwDzLPzrp4DqkM4u2GPjTwFtjvREfRvmuL7oBKsi4",
  "key31": "5uhjBDntqaq9Kk3GmrysNWqzydAQD3fqLGnFhtdEbdQSGMGnvycp4ZbtdeEktQsZUgwhG9rEvKpzZLZzhPPJkfau",
  "key32": "62K3yk4UN4M9GUnEhgcUnJ3N1p8S4WcXzZmNWSJnnQncjibawWHKCYbWKkNJuYWCRNHbJCnz9FLggHjzJf8XdQe7"
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
