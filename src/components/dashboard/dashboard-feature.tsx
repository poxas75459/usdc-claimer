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
    "4suDD5LBFA5DDhEgAEHwmjrdxWUBrNfTVimstP6783199TEZB8yCgTKzNw4eXEkQJiwsP8ApcQzTkfwZdid7FccG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WzioxcMmeQNn22Rv7Q4JfFN7xtLDBqFTY6bk2qpQsdCfii4ZZAvdi9m2FM2U7gbVgieeQp4u4ymnR9bqMoc9HPq",
  "key1": "2bJaFa7eianz3Lo5KkhEQH1aMQ8FH9VDYWpaN6p4f6aXXorgXE8F3rxyPbfuNfiS5bRct66U8HNsWnEN617HunB8",
  "key2": "RLAALtoymcbFhcPA5LbPpJ5ko4QoaztWFLj7TpEAYbrS8ZT3V9H7GRUg7753VSwCUY29eYRfBt3xLJn23qZLLKk",
  "key3": "DTTaKG6mT46psEKgX7H1gptanoJPLdJGtNED4MhaswtATcTCFMCUGTTSu7odn3RDEdFLxg7nmiBwP6Z1LkgFrJL",
  "key4": "2fnf5XYthz9TfrcrCrqdpDHrEHNuGGiDsPWEuFrHgHqBYEcErLjjzup7mYnRS7k5629bfpP4zp6P2gZLSUJ6F5oU",
  "key5": "4jct6p6izBY5f9uR52DkqQ5vvrX7AKPzQsQaeR7YirKBurJvfJtJX9FbBnqTw9e9tFAEW26gygLhzszz3i8GT845",
  "key6": "2d1hWpY7G5PT9kUrGHXu12Ra1hkCVXbhPSRSjTESF2d2C3qGtZXiDs3Sy31aQfXtQahgSXCpFLDhHGLYcAybG2jB",
  "key7": "Q3xCCRFDe6eDTTQDpARmS4z6n3QeZqdNANx8rvadJCmtb715sKpDT5chqUcHt2fe9juYYu4f2t1Zn5eg354xFdF",
  "key8": "CrJYNfrNdH86JX9jWHTH7NewftoekUfW2KnzQsFjAqAHs6i2zGwjehE6vTCLFWSdogjh8QZus7RnQaDwbVWyM2S",
  "key9": "4GwcEndZ4Ubah3y9M6jbsXWUtRMUg6VLANAXCu38YAjMCnzgty2GptSJDToPXSA1oxt3Y4Dkk4kVwDjkbxeJxVHA",
  "key10": "5g3Sxwvrhq1NpoDLLpf7YitETTuMafEfJ21wDoHJkU4S9MEVjhMGyiPSh24xWxCp7Ez9AFvfhiwCXyu6vDJXr5y1",
  "key11": "5t8n1EtQcQvEBLcwf4rTmfZBRdD3Ezh1X55jLeri6cc2vzpTAjXiaq8UuMKuqo3wjMgRKwt4WBCiEiF6pcq6bYCj",
  "key12": "A1eRVAQwQ8mtqLSpyFTpSZPZGHkDf51aTiX8NEi7dvnSRtQkNLcVgw2DdEds2ykUBL1oj5nrbhBXUe5oUHn1crP",
  "key13": "5vErGhaEvmiMpgF73zbfzcFyS87w6YtrhvZY5pmbm4GcJVp6aMoRarzTQkkrTeTyfMZQLFofXwZg4bQVK3QJZJAF",
  "key14": "412i4AkurQjPgpD9YwF3DL3AMNgZXJdPnnfCFDi1UTLyjK4bu8XQFGMepAu4Z8Btu4YGbnuHmV7C1Kct3FskEpHu",
  "key15": "3ti8au4dn2K4xcji97RfkHvSg9pN2otjrmoaqnh2dCT8qdKzwQNU4sXzGPD4LoAuTmMsGu3VY1seQXGtf4YgsZ51",
  "key16": "zfZc8PqkYrDaGknCaX4jk52kKP9YcLDxn5df1HTX5nGa7oosLeiP8em4t8Btgxac6KB9NCpfvJCg6zunJc9pb3H",
  "key17": "3V6CJ61Npe1hseMKqMUqR74kKKTxbvorefsZpD9sE8qBZ7UDtfox3uaMHnuHoVSZqHjnwKsDcZ1pKnny7zeXVgYF",
  "key18": "4YWK43o2MH6PgxgdAZy4bwQwZiR9ncX8vfuLo3ZroQxKvPBYjWEDdPMrT7uviqSMzsd5tNBTv9erSJ928uEcnnBa",
  "key19": "5xkzmgsWPtWj3cBGnysiF3NzYx7S5F8HWWco41dsRxRLg3a1wiho73bmaLfobJ7vouG3AWFexm4Xr1xibUzP6w25",
  "key20": "4zK5uQKDBQtdXwAjS4gks7ZEpF3ZbwPHDeXhKur69aepx9rdj1fyHPtyBkgZcAHXzzdSFu9CX6phyfBiFHvLTAqf",
  "key21": "3azobqGRstm3sABAtFuB5xwAPACF3kWjmcLCqfizjx8yKH6A4pnNEtfq2RH1du5b1KWLb8KdvLiqUh8EwbGkM5rU",
  "key22": "5Eik533bc2zbsdgzmuUWiVEC6Mty2wQoFbN7T31qau5tjd9TobACNYAaeK2HCzGQsBSvbqZsXD7qARpDN8bMUWdc",
  "key23": "CG57UBEJeqwgEygN68Mh1F1N4TdB5GpAf5veHQz1hA4Nx3auDPRXJMYkxeSPGkAyEbWiPj9Kf38ATcfjUytsSLT",
  "key24": "4CXvouvmnZuWC6gHUE5HcQ27Hf15cnTBjPV6jbiYahK6mAzz1GpBvfhFZ2FHpLrTPX3eetU8RAf6mcnEcdjGw9VN",
  "key25": "2rT5dtW7ZkM5YumTkToQH9HitQYvEpEA3zP6WkqHdVCP7R8kNrXmtAAhDMuoy7bAD6VP33vp1B9FYqqDXhiViBPQ",
  "key26": "23qqhVxHKDvc5211mpgvU9zCrcd9QHkgjdnwAJoZp5zFr5fV66mDiJMynhVgK42iWWsJQEBrhuhoyKa72zFypUU9",
  "key27": "4cVPZZNTSxMU91vYZj2cceGu2hYPJp8TDVDFg2xNbGiQwM4rXY9FUg9zYdygCXMqt8o2x4XFJXY1dvboZjp2ChCz",
  "key28": "VT1UnwXhSfSPoYcbKWvS22k1VoLvKC53VnJwkPqt4nsy1DgfHSmDEAVdu8yXTYJed6FxNgGCa2zrpJDmjW3Ue4y",
  "key29": "5Ntmc9s3MNzeR5aNsi3JVfEAN7UtYNZx2KcHKoQcKrV2BZX2meP5PEz1PFUpzQ6GgB9s2FAD2AjAZF7zEH8wdy85",
  "key30": "3R2RH2ans5vcLaFGR1E7i1M9kQHYizLXgqXKHQZjLWrpZKDKLHzigeL9E7bHmiQvWdWKBKnmGZ9jPq9P9GZPchAj",
  "key31": "4CSr8oJ3R3Pfu28xNWdgmGUrfjPa2cEjPRr7YSiSsPpfKWbUg2xZANq36X2nytuRWxjBHa1qXQk9h1dmDhYLyTKE",
  "key32": "RiaCBsXk5Bga5Vp28iPtxmNykcu7Aity7ke2xKYbuMRGJMhZ3sxar2bquBHFEF3xMmbqh935zYvWreJTKMN237y",
  "key33": "4eZ5JR7VPTMiutjMt2CAE5ELn2sMMXgrKwtkiGwogYMJRGQeqdXSinrSsxXLgAHeRnQfHpifBKB42DGrbPdc3ctu",
  "key34": "2MN8VuPj4CV8sy17Pi1yG6APzz4k8LGNZTBs3d2hx5D1CzjKh6i8C1rNf5eZWvUriuydSebxwkNQwW7Fx9foYxzD",
  "key35": "2eKqAx3y8d3jCdK3nNDY2Ju8tCPzriFXPT5v9zeLpDeCPcxuSVvrvEZ5RCQwqqvenEpwAWziPCV6T1HGjMrqg3c2",
  "key36": "jTUJ37mfSfDQprnZpe1jERciutmQ32JM4jarSauCJdXJ6aRokQUtbWWTq18dLya8S2viJxnULrQtGcDaZWfJPnA",
  "key37": "3hHbYNvHmTRqncnrTpWrCydUtSGCCkoHKpjPytkja5qvBDZBRdd5cYKCzqUgkFKmMrb4PcveSCPxMmCR3ZGDZctx",
  "key38": "4V6UgPmATpPFJMEsWRnH7Dov25brAVx8QLoVaQ9zbJoQEjtZWMHRZ694AGrGmKNckLV92J7EH3HnD7vvFdNTcY3M",
  "key39": "49jHn4sq12n1tAS8rpy5dCYJftyF7JkyjNLGUZpFvt4z7npqn4c1nJV4k3FNEjQfUMMgJS9xHPoJ7kxVVvnoB9Tu",
  "key40": "3pA9B6vLjvi2WTZrHaT2MJNAqd3LAxCn7W5rhtyocZVaAmF8xXre4QxqSHYPw816mx3BRDjybuypESPn9CiU8M8G",
  "key41": "HCen2DBT6hHt4dCv6YseU97LgZadQi3nrYXxNxjoUzpSnKwHkA6SWS9uF9wbqK36etqwCUJezHfUDpsHMKSWNuz"
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
