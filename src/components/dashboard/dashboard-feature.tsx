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
    "37C1sYSVrU8nozvfPPJAmnEHfTprrueo2dix39EQtYvUerW99mws3JGLrvNqRiV8Vk6Jkqx78v2yYUyCHUU2P3C6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xsr43GJqJCrAB3gRyaaqqKHQEcPwdRfZqdEvXHYta3SFSuimrhqvWAJL8h146cW9no55UMTQbLs7Mdws3d5wFa2",
  "key1": "4dmQEwAn2zqzGa1nHGZc14GYCaYEXpEGqa1K4CEtVSD1YNC5mJ2p9dgVaqeBip1hiKSmehRtQweHUfcMVjx1D3TD",
  "key2": "5BhJkqpryRsZiLzhf1zapsBo5nbM84iKYebMLHpnMASyfnsun13TGhANj1h6hH2T2u24X2wiAU3fZe82UG692Gjb",
  "key3": "4eDTgf9iUba5fhagacU4JiJe8zdqdMKsPxTBsJFTYU9GTn9uo3c95ybgt5iVwnUC5pZLadMR4xzTWB9rN1PtMP8W",
  "key4": "Cce2eL9iBLyxVgVZwN1nhWhibGp9erAS5LKufBFcoTvU84DXDmp6apSXXvHvW24JDv3AWZ5T2GDnnj39dSnPeca",
  "key5": "2RUnqrv1rfE3UtbrG1YV8GTAPrBH37gJ6NdqEadGtWeTR7RAvUEyxnhRznV6Nxk8958aeFQuVDa1mnYZKbYeMbFK",
  "key6": "2g11YrTdwnbSUbeiYt9nUpnRpxgQDGMXgcQDZbvFgyoJrgsEdBTZ8wbkVHdmLkKAqfEsZgVshJzNxiAVV3wLst4",
  "key7": "H1fw5d9LASSD2KU2XBThkjJwj7zFS5ypnK7GYrS9o9EE313D64qocA8UM2ZjrY9SPQXwk2YkFjdND8yZ81NYG5d",
  "key8": "5a1DCa9VtcAHFKDM29HMLqv3T1sdSzWNH3PXtnjgnSRGD7PpNVv6aP2C9wbnk5kHj4GAEHibZ6jcyi8DBVxthTBc",
  "key9": "CWpS5NPsYR61R2MsjUMCKdXYTmmvxZMzQeik1yBpQLJ7pvseiEVHecvpa2xxMYZe4z8EWVw9RR1DADbwgPoEMZK",
  "key10": "4Xoip4VC2fK1G3hZp46Voh45tbmGFjDvC1KmT5eE64BgirpN8wyZx4VWxoP4qS8puUch5ZjbRwweQG2skmiGP4RF",
  "key11": "4ZWcSC7rUswWYdhaUEKv535ZCvHMyPxZJBjbviLgciKKMaEe5EEMXoUdGqLrDF4rhm4HeecNv7DRD9MYXTak3DEH",
  "key12": "3WiG9xYTF98WCRJ5vEytYqrWF4qACchzkDktGuajMAacKRASEvz9vBHnWdnofUsUVeDXpk4TGKNzkJFyseFWVr6c",
  "key13": "Au6P7VCmmGLfjtCWs4m4YFZw9h29P4n2bGD1tZbrougDyVyPUFmhiWon9sAtq5Bvoe4hgHkvppzw8f9qKnGn4RB",
  "key14": "ehDesNLGXAWrN9bFAoVb4CttpVNpJPNs8VSdd5iS7GeRKRNi53a4VPc4JsLxxy3uxtprvTer6EJ1wXHYBXze3En",
  "key15": "2FCJLSkRUGu8vfTq8dLWjkU8tTKj2BPFPou7T5HbUJK6MuzXptCS3eE1Lx6DxmXiTCmuwU77MDV23abxwYNJ8B9q",
  "key16": "4Lw9d4SAms6bTsJvVToybsi95ERtUgc7q3Djf4NyLA7yrib3bt3XWqjJ33Mz9ZCNfYqF8TGxqRxQuUMsVnBkNGCK",
  "key17": "3pAhs3LzmVmXc26Rwqjy81K3esjssUebBtHta8Dcg2DPJatDfQDx44Wykb9c6cH1TbhK5Lm3xwnrwwRk1Uo7n1vb",
  "key18": "66gMvWiJzj1VDx29n3uDfxTQyfYugatLT9hbkb4vyTCuZxHaduipCMLBF8yAtXP1P26aKHdUVvfmpRFV1LvzKQkp",
  "key19": "NBuc1WqiTZr7HJJcXVKWpccLETQKozV66L8sTdvi1Rt91PgDBu2Lf1xnJaYdzFTpqpnh2anLfGzJefj5aKrbEaz",
  "key20": "5JQuseAqaFdmfouivwMuVBV1pJordjEiEsbde4sKuk3DWbKJj5w44Dq2AN1YsPA3Q8yrTxR4otixfYwdfBGWutp7",
  "key21": "4XjyspdpQZCzXiKrgniZ9hcjy4mXMN3TdSjJQaL4kBoE6qTzG85SdzXY2dD8J3QGYw2v7JopFBrnARQLG6wptA7s",
  "key22": "3tgEbhpixeNRUVdtWdjriitQ6Fj4zQ5yXRKJyp7JTeK7vrUwHpCphYgEjiRq7Kzpvmv5pZ8RW2oBghaRH8wYpcSg",
  "key23": "3Ws4NLsUR2ybmR1AfvxfTPgQ5VEXE9fAct1u9rxPMxE6Rcx2hFeVWjdcRxdkAnVt5dCB1KoaemL8jod8QvqYKGVg",
  "key24": "4KsbduHfYssweAFw54hepTnjmJjPvpaHoXN6q51NEM56FkJMHDomCnrg79Ahd66ErAA2Zbbpo3zFKREYFjWf7BH6",
  "key25": "C78UhgHPicVoo2iqhqiGXdZZReTmpWbhCAL59FHNeFhrfxNZBQqSVthj5YSXheVoVDxXxdo5FjAvpo9udXT5o1t",
  "key26": "5TcD3dWUP3oZ3hEujXxNPuwU8dyKBn4cnef37Pb9GbLW9SEd6uLvwAx4Ychsp2XLurNeFEeLTYSH2WvJrsopFk51",
  "key27": "5MZqC1fviB8Tf3gJtH9qdhPzWJ7Bv8B6Bj1pSGhnipNX7QghokpUW5rfEzrVdgpURhja4JqSzosBpY8uXSX41c5b",
  "key28": "56fVscd6Q4EJ3W17xMs8vRxqb6KsSBUCBdyeKA5HY1oo7BerqxWBqLueB49ERP4Q1x9MuuBgU74xV7bLwC5GmM69",
  "key29": "2ECAckmBn6QbMkkj3xpPpta4rnvfty6fRuAbPrSnc6vh4uFVZxSe4ew4vC3c8GPacEhArGNeKyBk1AzBP1Qa6aFJ",
  "key30": "5urQLtGDWvm8pvw34XanYC3DCMhnBL3CUcx7QpaFxzQwuNbWBHsJowELfvQFRNA7ybv15iaf7U3rkuN2gKsQz6U1",
  "key31": "5Rq1jePYe5YmMaJzth5tFdPNBqEK9FUdUQp73Le4C3hAdyJqGbYP4fj6qp5gh67FfHYc2fPR6CmrR7dGjZW7dZMb",
  "key32": "51aJLdxnx5pvoMFgoCjdtEj8DWfT8FjwC3yWEdwTRcAVdknLrsEiwYY3crKcqqsugNhkjqVTSNW7VeGWon5KYRew",
  "key33": "4BHxh8sdZzsN2A6Wxqibz9gUWx144oAQC3WRxHe3KR3aF1Esy6XpBnzfA5W6HSXfW4UCAXsjrAfyexYtxa84Zace",
  "key34": "3RZWHce7xZxrTNbPNwDQtkBhFHtXgqwX8smxdZwLNUPDH4tv7QMkVymTFeTHRtDhxQmqPaNnzUDLHYAUo5kSvjV",
  "key35": "jXaAyAAZ4nZjqdwcDvBZZtXRgtAUiwSAe76T1b2N3sPdTZbbZecbSvpsQNiDdP3QSxSjrNLVP5zE3krYTJyqyb3",
  "key36": "2TqUFy6w3B3n8TM2Zhse6toPq7boRqX9w1GWv8oa3PSDpQEKndYR5tnkKvVP4QPrsSuTjGqmsAzVPgMoDn4H5Rqt",
  "key37": "uckfXvaQC5Qeop8x31FYwVkjT5bjHzGETWRnJQ6qboCBwZK3LQPn81UVKnXGoxVUh5cWdVaHQAu6TBAQAfTqtvz",
  "key38": "5UN7WvjEtAqhF4KwTpciMhAQ1Srp1QqaaxayHp7oQqioKhHU4zd9ASqjo3G21YGgH9ewX6UiNyiL2pnvr4vDcoZK",
  "key39": "4wfeoF9J79NUEnPWuHhMeTqj2aNeDBkLcbF3gnStVqPUJpfjQGKFFA9SoD6yXrmxELd7L36Jpr8SYmLFKGNToVkS",
  "key40": "2dG9hWpEbFnWKVS7yS9s8gXgQLbvr3SzNR47fTef6LdV6JbWJAUtWSTVVm31Pdh6SKc2nJfC59tPyQg9JdrzDEJM",
  "key41": "cvHaEe4aPBAYYH26DbWGSSsa3EbvsfsqwShSydBCpjnC1791cqagQhQ7QWDhwu31Wmjg1gs9jYkWhsXkXbfvjY6",
  "key42": "58HFeKCHnb86AbbepjJpw7mg3qDMb4w8oteEMFogHDrcKaBe9JoFdqzsaWCaKtgbDBAu9dAUABLnMA2ArGe35vTB",
  "key43": "2mbxDsw38DCM28Thpy73Dtsx1uNc14q1zVbJvZM2AV3qUWDHpPgQWDsf18rDnVPhBWUB8KhUC5zgSmPNzvX9GGmf",
  "key44": "25QjjTKVjoB9Uf3ipUPHcT9tja11TnjuzbREeAK9w1yeuLzf9NknGM5c4rdjQ5XJWqYARMEXMdwfQp3z59ZZumFi",
  "key45": "4jXRjM7UFySWEYXNJksKfxL8YHW6KG31SFgpfVScbeNr6siq26KTFyifSx4AGjqPZXC7B74GuQNiNmPYGRBfD7G1",
  "key46": "5BdDP7znGu2Wx6WNUEfWhLBCaUPTuV6dDtucqU63UHonhBa2kR9CX7GiSbWePRrUSEE1iHqh7xPUxQQjCVxdPfEY",
  "key47": "3KDvEGfZkf5FWL8xZaA8nr2p31SCQM5VhjMkHSfb44sTxmovRCGGJQ8636TFTWYFkCGHxVRBHGh2YxhSQ7B6qb5N"
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
