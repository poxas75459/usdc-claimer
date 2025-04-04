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
    "y2vV7U7HSfQ2Q8iQuaWxfCRzUimBMW7RVfnbGcPWbCzMGCysgXdyLbXEXM5gtFk5CA3a64A9jqGsrkU1Nkg4GdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vhtv3pKgRRig2NJTqagzNHC9mmBoPJv8wSnEY8uUGr2kUM3d8sReXpPB1KNAriBeFJLLnh2kik4G1naf4HGyDUZ",
  "key1": "637V83AVGbdF7b6aDT9iHVim37xLkqrW13pyYHyPVkD9wGn5d4aPJ1gCkDpQSEmu1815TQJoP7rLbkLtQ5iYChre",
  "key2": "2mXRdFbMa5evJwf78VoCpLo9Mh7fMonEPAayHWE614RmHfdfLTWTwjATt3MVPhMHxKzpHsGQZJC6QfSgSa4ydnbP",
  "key3": "5Q85kHbNzri5aGT4BdTC1cVNtsgiw2zW9mJ3zSptpopHwWs7ASC8aPsqgtC6zAGQca9uiwTAq5bsokWLgprQc8ck",
  "key4": "3QczVZY37hiP9qM2LTett7LQRRQDhGd2wNAs77zs7sn8yVV3FezaCqjT3hWoammztFibpD1E6nvRX4hmq8zBXcLQ",
  "key5": "2B8ynA8MbbDWCoebyRVF7vZ5Eb9FTTpktFVmPmxX2tn5bAKaAQxzh7SG47PuSfgamLP2rvzP5sNtZv71yvR9119s",
  "key6": "3uhe1uvnF7EQQu1X6djMkJqJTPuaVeiGHAzhem2BRDWwxM9QPRjFeC24fojFv2jp5vkW28hSRbXUfi572NzVRqxv",
  "key7": "5CBwDRJvZcn2YSXTNQBnrW8YthxBpmcJtAQrSNXVKxVvPLigNU9oQoLbr7pYBCaoQnu6QnCEddvrRpqeiuxVnSsY",
  "key8": "ktAWmTuocGKxftiQZvJnJz4UogQYpvtcqgznpSAv5jGa6nvXPyCdiFF7tjwp99TUTBQNTAjrvDLzSiobpsUCD3Y",
  "key9": "2mTrHJyFYctsnyqoDCcArQ2bcysim6s6SPLViUyFDgRSKpgxBM8FurPhSaHExVxXpbcE7dU2tVxmQsNJB9i1Vh57",
  "key10": "53LG1bHe92hZJMFUzefqBNV3Kc9VQBjtog17RTSrTb8tXLKfMWBGBqfmAiZ4chYBBD1C6acFQYdR7zJZExdDHX13",
  "key11": "4f41cJTFerzZ884GSQEAeCmR3uUWEcQFhnfSpySywxgd1n53hFiCNzNdfX7HFUufKr4PuTAPmVfcdS38M8VZeiSc",
  "key12": "2p2RLLifVP2DXsb3wZpNpzKBU2S69UsjQj4XX16uxq7oegf4CPWP8gpJU5eK5nqYDzaWuTwKMVuLgc6EkVgLMqTc",
  "key13": "3LCVVsWdkZjwVbrTBJY1TtdDEd44txcDC4Yr4K3Byj9c9ZMPT3i1Hbn9k8qCP998UgE2Ndogzvsq7y519vV91RDi",
  "key14": "23wrivfARNJwTY8bKjYCZUyHLgESrTjLUEsoRC93WGm6HyeEVv2z7SbiRsb4mZzRM9MdSgrLPZYfFXd1vhiALmLm",
  "key15": "i6xgADHYJNU2AGTz9mcB9gJa9Z6BJZ7N439Quq7ez8mwFZqhG2FNEtKksrpxwBDLgtFuNH7m33VZFzWrEGoE5Bz",
  "key16": "YMDRSdGLMhrHLwY9xXapZdMDVRcvwExGPqLFnen7E4dBmDMjkAfC74xYDC11EBJLviFKW7G9omgNh674rAMvNGE",
  "key17": "oRfP2ikEDV7BGPfxYNFkKJJ29jTepyvY9TGj9WzUHYHyQ29vZHNKwQUaA1zAiqf2unHUzskcJWZBFa9umYpPw8n",
  "key18": "4uN5H4TKcb8egGhZAQfom1BDDN4Ff2xMCxf26XAaPWRZZgaBkgXd5Sjiqy1ZygX2s6nBDaSjQvAcAs4JnWcxTGKk",
  "key19": "28A4h8Z5mcwQ3qJRDUgsGQKNSCXjwm4WNUfAbxLto6pDfrr4s663MzXBwcr96uU8cVQsW4HuHiRvmrWraAzhdmvU",
  "key20": "HSLxutn8tXdQSxDHZwcMr4TEFeGnjuM6E8h6Y9i3gikhSJSuB4Jc5CSRmhRrndbXk9oytegJR324ottiboUmQi8",
  "key21": "3xc5NiyNDhB8o916MUTePG5NhapCXbfPeZ2aFVwEA1Ci4oaw7Jc9wb7sYLaCzc6hocRUVGqbYV6HJoTC9i9z41Vu",
  "key22": "wSD4kiYiF9A6r4XRegz73ND3VoJGUBcrKnfbG5K9eMC2GRWkLiynGwgBx63cAXstULWFfG6o2n8Cz2YZ1joP9L4",
  "key23": "2NuCyXmgD8Amv9kuTthqyXeR1yxWBWnAmJX1dcFovMRkJg2AcoKuA2XuS3XCaXGyu9uGu5Ho2EyP3yfPisPCKeLj",
  "key24": "3h8tUcZMU3wQBGh3BgftxNgXNeYLLVHtxexntFKybkSu9je7fvSYUeKiNdEUxAnxMiREnijJtc3vTQtpDvNBxW7W",
  "key25": "efp4bEUJGNpX6mviTbmBzJwBBe4TbYQbqmL3KZWxnT5FiYzitLboPoFsBvv1c525G5zdpLNWh925h1dUxDonzgo",
  "key26": "4JuHwDh6qt7Y8JzFwuqfe2aZBoxrkCr1xbi9KyxNSvinseLAm4n3HwWoXnLfvdK7uYcUo3juzZhnwdEVeA75TGPx",
  "key27": "2SCiA24xzP8K6bmB22i9RuFqvKUfkvd7njvHgGzSJwM7eNu9FV9SL1ChvZd2bFTyH33JdUNLGyf5UNEyVfS5LZGu",
  "key28": "dpYpaaCRjcT96d9431hbUNfPTZFdM5RgnVbfp6PDTHSgQEDdf9ohbtNDLh82YkWZSvuWBpAn4x6zTUSa2faCz2o",
  "key29": "5gbyTWK2mZmpRCueUKemcQRqYoUAEQtZrLtEyuJbUTopPomVTtNk4De8zSCDoCmKgf7xmouVoSk6t3VVMn1eq7A4",
  "key30": "3ngvqcxorY7LQN3jd5Qc6NYfbqzCmRM7qcdH5EKtn2ByE3NARBJc2EQX9FGpBJUX4XjH2omTzNnjU5fd75EGDYVN",
  "key31": "2LS16hpZgCNi9zs9CieZgmUWyrpo6yysi6s76pfUwLbWC4pXVwdUbKaPYsS9zzwjCQeFAN2RWKrCGEcwE4Yd64bt",
  "key32": "kM2dKCKgY1FF8STVAHRr75B77Uie6tVGSt7ziWZXSB5FsfN3Dkg4JonkJfjCnwwH1DdYwDJddPJZYzwqG4z9zD6",
  "key33": "5pA39gUrXPi3xQeMVo8yyUtyzdGpymgtLDpgGMsiRc3wySoJk32ok4cuZzzcMgQHdjHrFhedk6uu2F1Adif7Ca3c",
  "key34": "4hC7uJWpEokkGRrjVtWxNpV663WhoTxbfHNTUaooyB2BxhExDu79f3CqQuo5SRSh3wVGvaULwJySriwPV24dDZpC",
  "key35": "2gV5uswzgdjEWqN2HQgDvVuev3FccHymdcpQZfoBbWKAqygnJcHkEgN9CM7suiiMjkAHGvDrq5g5w2rxdsYwEWUc",
  "key36": "2S9zcqAzBT8Zwmm3DCi7YfD4fk3TeTXE7j7iC9RjjXj2KzU2Muews7xtj7HJR5F4q6j7F1gdJiMrDrweEH3znayS",
  "key37": "3CVQkThpWH9UiaMwRQyXCRyTr7PrwKZZ4dLfMaY9Y59xuwi8kkDpGmXVcTSBVerD84iYE9aSjBxJXQQE6HpYfJHA",
  "key38": "4TPrgASTvX94nnwuoZTZvW7MEbWscopNuovrYrEnrapG2As8YeC9NfNodz5YGGviEnYn7paP3JxhfNq8dfb7dqSa",
  "key39": "5PHL7jxjvsTgFeRjSpvKwTjVPdiubrtujkDjJxRKA9Ur4DaY8qGNqfFLdmY7D63wK4GWWgAist5xKXHtDjfyF3Rj",
  "key40": "45sQaeka1GYQ2c4LwWUbHvomBzthBSLgGgFnXqW1HNzBsdztQag5CfmEMNMVugSnWBy9nYiNaUK4Y82Pfb2eSioz",
  "key41": "4a6rvAfWmeXyEHe8RePBkjNMhyQ6kV4p8WZcBpERQ1fMAAcgBbWk5funbDeKTeWfo9XFUT5EHBewMpkKM4FRBaeL",
  "key42": "4Pnw5dhxfmrMzvfwu2rXD6tLUqpHo3Uezrq1vaaFUJZJagy2GMhwo2wqcsGJhwRKWn3JeX67yc2cdg8ScRCXkumt",
  "key43": "2zwRwfcafqPbmUruxaSagK2JuffWmJL9F1W5yrxzhPyVgaTQHfZKt6MWVXMLRa699tzYtHAuCHpxkcnJi6qstv6C",
  "key44": "52Y1zb9yu6g7CNsqGMfedCPgkj87Pg3Sq3CK49DDTZZVyKazBt2rcqy2JgqX2XQKua23xB8N2nZy7qa4yfgNk2vN",
  "key45": "2mZqCNk9zyKgPu5TJRyQDNgZZkRRQhn35cP2EAViBQrEMqETo5Eh5a28xfWw11YtsYRKTDMu695w92NqkWYrc4Rz",
  "key46": "2nGfoo7sFrna5gh1rXYpP3pQZiaqx26RDxxp7YLxDbNtcZvgK6Umk4hKztgZcoR9bCC66uFmg9rbREZNUNYKYP5r",
  "key47": "3QVYF7eT5JEQw5nmMkErDmUGcFG3WMKTfAcG1AduBxWcEw38ztVqt3YzbGZLo6tjW6YFixdeo7a2A6nSQ7BaWEp6",
  "key48": "5BHtHZj8tPcpysFM7FwsoawHvne8cKPqJJ5iX5ga915NY77pHh8DQ5vYyzZVMDPEpBpvBryzUXVg9Lo2uYz59pbC"
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
