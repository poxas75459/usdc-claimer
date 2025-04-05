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
    "5HUbioJMQqykgWeNiuvoXU8PNnabtoUBziPHNsYfLweqdi2vpahXAJ238WJ78gX1wdgLRumFNk5EHjjE55eA6Ytt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3svYULWHzj92GxqFcnRPozUTQ2Kn9wMTyP4e4etk7FPLPwaqZWBFLU8737RGzsB1p196uHbfCYX1TyoFqMa9FQwE",
  "key1": "34QiPVjdXHHPGp2MciqTgKeSXw5DsMjTqazWiJhRokHh1XXoszAsZMeipWT7ChhaS6AocnMAQBUeAtwTTio12E7o",
  "key2": "3ZvTvs9v1icpnp26thAoTvh5dTGmemH4c2fXMN162KpaBsTVupYmo7GZXkjabtHrVva5hDiiFoYzndnamRLAUHz",
  "key3": "PhEUYbzxb66fkWx2UTsU4BE6uEBaZE9Pv5WS5RL56XXkB3ZTyoWsBoKZ7XV28QjrbwTtbFN8gPmeSkdYyLTmHqe",
  "key4": "3P295Mee1LN8RcWShtAV6esWeisdR93Qbh9JsHhXAwnTDT5qYmPkPb7vkQq7cwN9WcjbjGEz6sxP8ef6GYJS5Vtk",
  "key5": "2M2nPB6g2xWzW9CTY8LXDj1WEkpfZSUPau91wvwgf2hpeZpsvr9TEZzkWLzhzgLinpUQnqVnaTkryow4d2Dgf4qA",
  "key6": "4M5NQKtF7yQkBp2TBNvBTmFzL2mYuLnRn1RNBp1tL9Cay7o4AgjUzUYv3VqV57oEv1BiiCKFsAmVbKVhtTJuxs3W",
  "key7": "5nqNeZ9UvTZeLQ58RD61KZer7yirm6KSYztgmJE64LpkNN3kqyiFbf2FyBXnAuj68EjMYUVq6kjWQWaf7QewgP3j",
  "key8": "2c423wxe4UQTgXV2vqJQhDdgwFxZMveYZrT5C9mq2V3DT5rocK3CtYqoMr7rPeUhuTd4MxGCsMjHp7EZhYevhwr4",
  "key9": "3CnDQQxjFZ3K5je2jccS6fpeoaBNfrAnynB6rHjoVfo4GJM9FEoLYncyHCt5fYfFXkuw37aXL7yWWs3AhcQk8bct",
  "key10": "5nSbQoodXeNQ2nULQcY4LhNPwFs6MmdXxc1sJE697Z3RAvpPhw41D531b6osKS5taEZx1n3DuVsnayLw1bwRHVZt",
  "key11": "5tFft84FmLhbnpM6HLGDee7SxYKakgoz5cCeak2WbpHWMpTD4vYKVnmtxs4r1nZ36p5Em5tRDtHMTuzoKaVBnaTN",
  "key12": "dPiNXzTWBTRASqLrz4vqExKgHGXoYhhDoZe3AvL4TDRBpY4bh2XnFitiBwfoYxbaum4i4G9v6c98N1EsWJrmPqP",
  "key13": "3SeACnQek2Pf7cWAaPXfYbaeSfcyQw5tQ7tJTBBADySpKhkukRt8sy5zhA4qPfd1EyP9r8GYcicKy6tcSpp27o3u",
  "key14": "iSaS7bCJLuUcm6c68udwJDdahtatnHChFCC5mE7u5179frAJR6cnrGzrW9tw4eRG6wNXgqwTCVDxa2RGpizziWk",
  "key15": "yKEfS69yZZjYmRz7rUJR2T11FmPGMuq9w1C5zcADFBnNKhy2b4tGg4SEnbHk7QDhCpwsgkEDHwd1ns5vuNEBj5F",
  "key16": "3cJUEpTGXqbv6cGNc7G1CzRESXkaeLQbpwAzEKASGxYDGMyNw8N8nFsTKowNgfVwhny3ASH9pUfKWzuyC6Psv4PQ",
  "key17": "5pcWttT17fZgE8C1mibum3M9LJypZjD8CAD98mELRudnjzzR58r1wC6y1pPkQngjZSmApQtnhDjAQVMk5FvniMnN",
  "key18": "55HkhtjjED8uzV8GFQQFidCxD1vpHLMJdcApYLRdw1ekmji9utiyEgxzuqz4R3e8nmjKz1EbN8L2ZFdEeUvZvxW8",
  "key19": "2coEC6MxKfNWf5S7FLQ75J6y1szE4TYCz91UNpjUQqFZKKeFRyFYdovNXJLdnziGT9ZtVn6Rh8hPUQJd63KRXGGg",
  "key20": "4zMhj8PTuPcKhbCw3jvAAhKemXxbZJGLzpqj7Nq9tfUo3bvx5sWCoAYHuyk1E6iD8gE8BKnre3ZXtFNdNdq95Mhx",
  "key21": "37cVbdkpmYdkmUS63ipsPZcEbJpprEt2mFqZdHFqktFvyz6rX64W1H68j2hGXMeV9NmCAuNU1EoFiAsxD8jD3B9n",
  "key22": "4HboX83HXPZCc25qMiQAJFopVp3jWw7bBC8UiR8RkpUurZQDhZSiyQUKDF348eTnwRmciMvFNWT5spfp4twSeF7k",
  "key23": "3tz8HdZztGigHkahsgVPe94WMGbu2AoKSk1mm5G4yBcUTf6cw6SXYhubo5WKo9zhepbo5KtrGYtPRKgXdp1VQGQe",
  "key24": "CbN3DjJC5c679GfuncHS8VU1eDJVBg2Pf6tvm9WZuzLf8Pn2emcz7emRpkt5zVPnAp9TpPBEygU8LxFq1tgmqpo",
  "key25": "65Tm6VqujrPnFyEmjNvAx98MByar2DFR7AWwu7N9jSk6k58cEnvJwn5P4JUNmYLkWdKnsSKTv3U88pzVogRiHsrA",
  "key26": "3KdDUkQDp3GoGxJ6gJmydbqdkxRxtiHZTF6G7mrvAr57VptzjLf6zw81NRrFea9CgbYzeqvy5tCmZKVfYn2VYz6P",
  "key27": "3XdUFQrU7cShUVj7PGnkxh2fVUChYXsAvWvBumGqEJ1CyecyCEEpop7G4K2owaFeWmXExDid93RS4niawS2XxNvt",
  "key28": "63EQNYUpWbGkigeaS6YiSkmPiuYcYKPz3BfCGWLxn6CzqHnRxZzFt3cpFAigqPQ2UCAWoUcncKascyBTcadWAYjM",
  "key29": "4qKfi2BF2puGxV1cgoBAfNSx3hLxMzWkdZn8GtTsAcCgs32fM29rJHc83iPRiBoDhitWLiPWkurJ91uircfbzzMT",
  "key30": "5LBUuZNWi6hDyooc45RMEJGiMkwC9PbQhBZ9yGuqWCsQ2yT6EZBMsuiE3xZHU6GDKQtgmTBb2hhjHDSMnGbeDayu",
  "key31": "22AeZopR5vhTjfWbz6tFn3L7Vj6e8WpnStbcsNLjWGCdweJoBCXgAeevAexWf4FTbAxyhtr9ayWeKpfKbpZnkvUz",
  "key32": "5tar9n2KcsWKFnQJpzkSnaE16bfDaFSRvbEMw427jR13edseYKVRDUkFnhtD7CQPJh5KkSFffGksEMh8nk4ExB14",
  "key33": "4GMpSuaC5zJY8dSkp2jxQxfsV52JX9PxD5UsYfW4NPmaBGFtHwMn1L7k1uEDbhSdyqshtYgrk9xMdy5drwEE2MZo",
  "key34": "5U1poVWdJbfVLRkeNQjVzH5PdwzzbMvbA3BTwcR5iNNg3VAP39msNdLXPJgja7fBPNb1TPxW1phpj8tddf5XWNgr",
  "key35": "3SpqRvmE734JKcQxNFHagjfz4jwY9DJuPqGSByfsNqE6v1H77xCJG4S5UZuoLgKv8JGHrPVJoNPhL58JTjbkX138",
  "key36": "yyUwggB6qVZhDpE79RVPsv23ajqnZSiKkSGdHPP7PZT2DdufsiXNQRpUJRQR7JoJvurJ5UchCBrPoca3aYZWEQd",
  "key37": "5WkpXszBhoZFPHdpKepr5ycpKi4ndgLzVP6yEMWPuqV6RsL9pPnsWpba5vgdm5gwcEeyRcxBLqhCZnTXioBUXJcE",
  "key38": "4goowZSNWEteMqUCFbCsSop4Ka9R5zSpg7eLBey2LCvdN22MrwT9MbaZBmHirNLXBjhaopUpxX31BuYKgEeaQfRs",
  "key39": "3HGCFPN67d2XJL7Hu3RHPzDfiVRqkQcNds8gbqU7yQ33mk2uaKe31NJ8yJZFaCcKsSYz7YxBLF3gcHLQLE33cgUL",
  "key40": "55rWtZJTHYtCr5u1VWc2YP2pzKyHgeXbzb7afcnC11Jrykp6bDNBfNoWy86Xd4Pqm9DvRASaYvfvMNutcMiMgK36"
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
