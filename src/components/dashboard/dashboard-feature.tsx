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
    "2EqHHFvqCNqaMwp1mPSuVxygvuFfKjvTqb2NWXN4RLGCyrmTYp3JxSoQ1dPi8tYaRGAVAroF6E7mYkUJZEi4yJd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dy1VLWEzJt3VpBpSPfzNWaKrA9Q3VbpLPJj1KdcWzspXxT4dBcxuHKMpohhEyjD8zteuvLBa32cnWpW3s6DkZPa",
  "key1": "4A9oSfWHyTkftzYvnKPvb5DW525bhNL7trxANytsJMLduBXVbrqCFPTnqgH26zXLuRMY74fVWsyoSHd42uKN1kti",
  "key2": "2hSVmSncpvPK79HVdpfDt2p6NNoCEp5Up6pq2GWE1ue8Gf2xTtGSZYQp7Zc4UKg4vB7ALbbWvokzEyNMvF5G2eUp",
  "key3": "4GCzjeVyJMQPfk3ZW9FXdFSoK9SSVJn4FaFSRWUgKCvAt7aAaBnWEoPmUjSy7xqvcTtBsZdSbToud7NqXtfaYEQw",
  "key4": "XTmb5eCiNuDD5g82JanZfYjwxmHhARbwiNf4CWjHFyE361CGmKzMoT9FKsnBrXZZStUDLxiyBgfE7Q4uJK6hRdH",
  "key5": "2vkP8fFiDnfgEe1haiRuhmx8Q6FGBa9Mkq5BeS3TxRm8DXDwULvF6SHShj5YJ8TBMHGq1DgNdaJC1ofWyrvXvj8y",
  "key6": "3LcZUZp5FtDrkGEj9ddy39dm92UE4U8txuBuDC41UBxguLVAD5NqJp4u35NLLSdrMZLWpRxYU5qDJqEBYuHCdb5",
  "key7": "4HVzx1hJJxHNS5Z7YYVjYpaPPJsdwBy5oCPoSVBzbknXzj63ehm7sjwSSH4a4LchzWoLzaB8ZWM7Uoqae1C8gdbE",
  "key8": "43gBktW92mzrhTWE7cbTs968fSHStsvp4Rv4HDfVfch14ceewqCe46UxYbqDnqW3iE4An3AFrvB4vS7votUAGiYK",
  "key9": "5MZ2ivBS7Vb8tLZn6zerpx3pymEBqATkrvsdqFDBNkyf7SucH3dSmysxZBjNbiRvLo3kAE17cQRtBkukWTzWdMg",
  "key10": "2F5DyLCxHSJ9nLKioe4EdTXzx71cJRdihTVf6fcvwdF8mApqvawjcM9sMJq2qF8MJnEiBAvSeK6P7BDGaMvKzjRf",
  "key11": "3DnRBpC39YA17mtrSobdoRBcgmVGsZtjUJDBCAYqwqXvmBSCjoTjVMrP2ptvtuHMa47SWHQuWcNygFapeYn6kVGS",
  "key12": "2ewiqCQxvJPakjzSb4qmhpMkxW19J9n8tbh8wvKdbmaGNJvckM5U7WgbFqaoJAe3n7Xu66pUYtphBKpBpCGSF8ZM",
  "key13": "4utkubVCacr1FojbxVHZc7nSaRhKyfaCVun87cquKb9e4xZdgcuiWfu3BDaeWfHA2AvJHzcoXXf8kRzRUmwXVVaA",
  "key14": "5Dbm6Gm88qAx1cEsnuyC9iiYDZZLj6wFT6R5Bp34KPqFoR3VaZxePJ8QjTD6rXiENLt1CAsMJ8SwfV8YEpXHbNhe",
  "key15": "4eNRzNyWduMa3XkghDkfqzU7XTHLszBpKN3gwT2tUHK6wkvAGsRdunGKXUrjCKJBUr7kD2tLBHJGQsHiFVXeugci",
  "key16": "2XQwXxpsTeXradQwTCQ5uCtaRymK8bAmQGZQWR5QCFStKxj3bwMMYyj9BtMuCSQ744FUuPSNFXXM63adusbTBGPN",
  "key17": "2kgq6XLutFMmKP6WymyCbX2BDhnjE29DU1SeF6o8zLVo6JYmvvBSFP7bYAeyy7rh2c6k9TJmmW3T2v7qThaMX5VH",
  "key18": "4pY45hNki87gEsbkANsaoW1NHHUZaFQfysxskHNDVBvZSMcDXRxFociyGsqMG4RR7MoAuweemJCxw8K2Ff54R3fK",
  "key19": "3xh6mBXWDAjQmQZwjK9jLuMaR4kfV8hXbTMaCRGuhe43wHUyMBtmRTEv6JPNg4SzAAbQvS2nALRwVaKCaLJyy8Wr",
  "key20": "4Jbb3iarFtdW53PE8GQeDx9K9wUyuq8khZ9ptr2fzrnkPE5NiH1kg1qQQPKethTxrhbBPjxPHxcHmTsxUtF8eWjz",
  "key21": "4vLbQtBqQqUsGCj5EqfXpkU8wJc94jx8HHchk888kRNJjrRcHHR8yStjqyxEoNgGPckVBEewQkSVxk5nRJVpLP92",
  "key22": "tk82hRzf2DsEyyR6rimTr4yHtqHY6x1k9Hdmf689GwVd4MBJ93Cc4ZPg2A5CAfbESGvUykJ6sSwxCsG8sbCHCEb",
  "key23": "3XqtoqzhwZVV1Mwktck5M2Ez8BiUmFdREjXogNkmQtp3nFFTZDkiHDHPyNBPiAd3RDN8fY27ifA75VD3ZWFQvron",
  "key24": "4vZKB1fyiqkqzjbxedmjq8jAbhMgmnBEkCYVSwSBWaus9mEtyZKEy6JwmZD2tC8nzDvMsYtci4WNw49EdrPj7e3u",
  "key25": "29U3izYJyNt1oN4ayU1mzhzn1fRJgVC7U52xukJh6BxryjCfNin53jeh1ux8Uo4VPvYKP49AyudcxAAWzdxdUqXd",
  "key26": "5szWNUpfUB6CYcvUpTFoHVXThFogAfFCCs6DrfFgdp1RCR7KuyfA9oTdmy3ftMBof6JMxMQPKzbP2HwGjJrDoHt3",
  "key27": "4vzJFDcicE8YbE98zZ95UjSxePd65SWr4rSf8ijfsQyARpY8UQLYC3irkVLUh6N2qLuJruLcewKYBWx6yZqW6eQy",
  "key28": "5McmfcSGdzCotJvhNpcVWAm4PWvJp6DT2GetPcvCQ6sRn2hbH5Fi7KDS44B7Kt1EEdVg2fBwNx1cYiAkkqqa6cyP",
  "key29": "KoSP3QEnJ2urVTYimdqF3ono5PqTotM6SpDibEgGBHfctFs343AVq9KNCZsexhXywLLvyqcFpxYCYDLecRP5k1g",
  "key30": "XTfnPKABtLSv7W4ELKNFR5th1nuhkLrS8YHMv4RqXrF1QLpVeymwd3otnhFtsCYvuvQUmAYZh9dVQszSRf9iEq2",
  "key31": "2rUpJRrC9AhLScciaWWguGL4m7GZ4soDw8QuvCgopmW5LMQCoiEPXoRQtz2NvqxsaGgnqb5ZjvdhG7TZVAujo1cK",
  "key32": "5niJLX8uSv1EskTMVtGn3JctYfpYFKWhd6K3EnKbaj41w4k2QW3dffdCSLWszoskbR9PBeL16z7eyGjTVv1FQud3",
  "key33": "3SY96A4oQLNqH2wSkRrAKHmzLoFKDe4DTJmfhR8T8igihsiT2JYcyA7t1L1AyDvKpaTREKA4dbZHnZyjqNDPR5vV",
  "key34": "5rRN5iBm5tVxAT99dzemadAEMsCJF6Lmsryzzxyy8SdcidhQgDm8vTSi3PVGRry6GGD5t32472tq1JdNf3sX2FJe",
  "key35": "y64j5TgL6AvbyRqUQ6CyALanB14AkvwfuTnDHqdJu3vBcnd8oVDFNRbXmAFH5J3TWV2HqH6FXUgAq25aJnDjYRj",
  "key36": "4oN8VwNxMotdzVaW5ky6kPzmV9r8MMpp2rd1pWLBapjLSNFNVnz7rG1uwWVpJzBcnnNS5NGhZoMMwnqjweZUvwb9",
  "key37": "2jDVDAxetKfx3Kc62MUZWtqrE98PWn4tSu6i49ZPbn2vivR9Hw3tWm2AD8s7iCPp5EFaW4myC7wko8jy3pNGLVmK",
  "key38": "5YNaNTrg9WXvNfpLEWnd4erVQHjA8DCLdiLCNvxUWHQJtrrHQxVcFJanjhZ4pFBKPDkptaJTdQBvvRFcUKb9mMLN",
  "key39": "3rL6yyBffr9sWTzNUs1iLeoJS2HbStDLoi5fpPZw6iBjGkcC34ULTidt7ihktzzEQ3xNUaV6XBcFn32TQRrdSVvt",
  "key40": "3Ts6LL86MLgg15G7Us3rsGG62GM4bjNVYpkr6JoYfDKvDqEAMdvE7QoazQCXyVUngCmA73uhCAmsh5rAB7pU83tY",
  "key41": "5DRLavmUGAaDCxnHDyW7wUgAp9Mnx7xTQE2iR3FCmJW7YVexfJ6BjgzHSNaySNdPCG8cinYAK9GcVrHc66nrJDWo",
  "key42": "22TGpJ7wQRq1i9RePefviSCKGBQ7c22FamaW1Hp5P7sA8hTdjZHe1A3fMk6pth4AAGZpsHyuaZYu9oX1LgmksRhm",
  "key43": "2YZ7M4W71JbqTFQtvwajCHG59AY564KdJestR4Miuf6VNAJCatRAAarNih4aSRjYhgufumT9CyVBv9NrfXcWBCT9",
  "key44": "2t1w6sPek5CwySV6ZvhNoGGsXggx466PgpECy8eMH7HJqGSJyUdwRjuP3qPMfjVtxkSFciowfhHQcFHVXkyspLoj",
  "key45": "48iCzxZxdPud6GMXQxkauqTcv6vBvGsw4UErjTUwBB4pgv8A4HqF1H9PNzKQt61tm1acoTcmwCVNhNCLYjWphTJt",
  "key46": "46Jw3RfbteswvLQ1noA2D9WqKAGG8XaHfDhTUB9fPgXLhz5JJBxPVnyhWzFDijWwHA3VhT2ApC447G23vrmuqbDE",
  "key47": "3ah9YfhPwJd4wMPDnGaJkL5ThYPJc9BTVz9xju4MdUATrFBzK7NtBG6LyFZBKjqv3xgymS3CFEuG6RtTM68g2i1j",
  "key48": "3cLngVpsymmyzmBDcUF6mtT6qfTFZMbgY8Zyr8mK4FuPp6NWQM9GPoFaohdA69PZp3MW8W9g1zEDCLCFSpg6oXzE",
  "key49": "aRNrYqSdsKvMCe6GALsW6pQqJhDPPnGBC4bT4Uf7SXZaV9645m1h9i2Att7RMe7ia4Z94y4CoLn1zwWMYKbTSNV"
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
