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
    "5WytNCLaABCYSx8siZoBSjUaTqnpHp3d8KqADx2DteUVX19dCPedTkvVFFN66i9WPPgMU6MMcxwmot3vf3nc2ime"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21NTErdrtYUzSTCASJFRw57pdWabaaVVcB2exzp1KnBuYQdnCAfYBTNCZAbDPdLxL5joCx8yYaUJkTMGbtcLppRo",
  "key1": "5Ya6pZxuACNVNkNrUFuai2CDpKwmaMHqQNfgj2z9MFaGXx3WM3Noh1KFrQK5MddhR1c1Zhj7AtEoBNpdQYB5p3yJ",
  "key2": "5CTdVAcNAarBDKnwPCofiQnPxfRMNg7Mhk1gWFHx7aK5yzEnD7aoVbPJhndjSSNgvMfhXiTks2HocXf9kUGbzFZU",
  "key3": "La8SfZe2Rx7wkYNkGHqWVhhd4uUGFaYTyPEt9Nv4ieasrL5jXtL61wp8fDAZd5PpktSMckn9rp78rxghSK4iend",
  "key4": "2cu6H5fePqqrkutse9LMSjFa259avqz33s3RmFteGbDKWMfrv4TMsraBH69BxPLkfmv7svhKfqBErth3jHUCqNkq",
  "key5": "2Hp7mA3AwXbUH9TgBoeYiMxbENKg54GxAtbQqJGJuqEB3E2RBTCmWK7qirCap5B7w4cCqojRvS8sFXHXSxzTdpXA",
  "key6": "yRAfJP14HJqoHV7DVBLPDYGrtXM7iKZ3wjyPVf2Bd7Mi6SGWHPV4Mh6DwVrFgRgnHjVLekGokXcFKJCyqC7FaoN",
  "key7": "3PMEQbT9kmQaQc2HRiSdJTUEfFunm6s7Rr7gBiSmJQtyo8U1YeZS6UTJqe5BfuReUeiqQ2RxSnBvHqvSVe5XN25r",
  "key8": "2U8wmUYwYyvBGMDVvVVck4PFSFwD5SgcZD4zL2V44ezXzpekgEWVfjufvK9aVA86uMHK2XmUXVENsd5BVieerVPs",
  "key9": "cEcEWFxRZtt26cQLvnKZpA9aCmY2x2kscsWAD2FAFiewq34iRYNmjNbSHPE5zVWLqpyC7zb38nguKz5E9NTrG8v",
  "key10": "3X3dgoJqyrQkDxVTzqdjr2kMA92iTxKv7fd5uo8dRJQY47E8eChLEmYURmYpNJ1Uikz9WZ8niU3LV61QgLJMc17F",
  "key11": "3w3VMFpRw15yDEzGncKK76xQ7QF6fQSdSADVVTSBhVW52tVE1sVUU2ytFvE14JirtSL4T6P2a8RSSXnMdwewH1UA",
  "key12": "3MnATdcp5edYs72WGj94zpt4S6CHGxRnGKgsec5eb41dFvXHg3tWCL6QNNkbJ82JWn6uD4TNWHysUP8aJ6nLkfj4",
  "key13": "23aBKPSW1vaD8BjdGZtcR7aScGkd8zpNGhyj7NFNaqV6TLLBbVXL5grSDLyfME7t9W5qcRM4wyj3rDuwpVZCknNn",
  "key14": "5g3ERu8sKTpBWzuQNUixzJF3wKE373zRGxQuxChYcVhSdg2KCZoYCzXx6MaXTent6cqmHiwBfnP2HssvAZcvWtmM",
  "key15": "5fbLgvuVrRpqpqEpd6bqKLdwZZfu9cPtXLpnN3qarqKCE19N2HAfs24UpKXgzyGQygFn1Vg8tLZtPPuJHnssSJnD",
  "key16": "2ahjcpYheFfiRPLqaDbF7LujoLf89T2KtdYbNFuCxJskgM4tVsfvMKk6Xmm8E3abRdhtn9PMX2vogH474SsBKjFJ",
  "key17": "2YNomNvXnCjtK1QzRK9caq8DxyUZvc3H5zrS7ELJGGU7NzZodz4YAY2XPSB5hr3VEWNkRKNb11YTaejQb4Fs39zq",
  "key18": "39QgZqKhSBA7vW3SWgbsobEpBFFPFFywaQFb2ocwj2moVF4rREn8zpRh2mPKG47t5P4fRTx96Pvjt3pKBUWsRo6s",
  "key19": "3EwLj5QZt8mQt1BKsoigpMTxeYmpSFHLwD1eR8aN3z8R8VpThuhyeu1NPCxewweupPFo9giqy78wSByjx61gtETF",
  "key20": "4VzsnmZR66JD33DKykxGZxWWjhfWMNY1Mxv8jGKiGM6BAogpKZSHRVd5C9ab9Y4v3HvK8pdXsYag1wpB4PwCQioC",
  "key21": "3nkJBkGuzxtjDDKyj5A91T9pMNxDM7aD9bWdXvDnept5Y7PrmDQgPR3MqNixVkU2bm3YoLPm4QwHBHT2kih3XN7u",
  "key22": "233V5sfxcPUy71HmkEUVBSxGHTA1TrA4xGzckmVGvKBLjstLSQms9aFBP14h7iJW5toP2VDz6iUgq1sDsVtrM9L2",
  "key23": "4oJ3WzhvsaM1dX6wMtmejF1xsuFYu7TapmjjnKJsqgT5RP9DZPfimLVPz7TPjcq1gv3TAEy1rGxsBznLWHJQVVni",
  "key24": "4UFyZb62SpAYVvhtZB6d3chiNoN8T6rX2YWSn1WLThK4gTK7ZE6x1eeGSkMhmzLoL6PBNPMjNwsJjdpjMCSi3EwC",
  "key25": "2BmF9o9naaJnYU1gshTjMQrrSkchBE2xL7jnv3Wkzu4HTSnjoe3PAL4bCYAdwvXX2a6UgrJTrvKwSLwYT8ueBYvD",
  "key26": "4uDhoebB91hMBCzQvkZBdh93aksBKVEMBdueFb3KvFhjP6J18bvshdtWY2YcFaYj83eWySAdKRF4ZsxjQYgexxB7",
  "key27": "59ouaxgZLXZrpudD9ca2AaHqFho4ATL5Uma2XWxAijsitgdVAY1vdSvTi5bHScSirT4smowi5zmpsujZgJzvcVCQ",
  "key28": "5iD4MMBLKAhj7amAvPNs3DMmqDTehTNFLWDtRYd2vof52mCt6nTixYr1P5ioZb3HYDMPvUviNqPmmmRsEWmPCNsi",
  "key29": "5HjQvqTHxnSfS23jSQmJxYkHsiwAhh2Rf8ZiuTRF6sq5pTmpdaPhRyEcA9P1rnhPPmeXkV9XtMtBW11c1uGr4UMr",
  "key30": "4FzRt6yGPKmkoH9ZRvyQdUTnyyuCe5xwyNb4AdR2QyQjqTVvyR1D6SYDst5CjR6mHFrTz5rJjHaQoywa4WyednW3",
  "key31": "45qE5GrBr1iy1thxNVwyuyCLUm2B1eK1gxHkmqvkKZ3DLbFnZc66LrbJn9u4WKGoXoMifmjQQ1EKBQ7apVyA3Pdc",
  "key32": "2FQkSZseWAF54UxA5SnJJviaou2thHn5xKVkdji3HdnYUo4HyZTLtRY39ooNJH5ckGsUDWLdzxoSehShgrTY5BY8",
  "key33": "4b5ZZ5qs3it6a2mFDNE3WKHVWetJTaZyDYF7J3EPgKwyaUAEfcd8eXQb3HVJFBGAkK8oQVywErrWBQCnJmGau9Ec",
  "key34": "3JWv1gU4ZNnFGuprG5bYuZHtcgDUHhpoJ5eUMXruJiKmVbbAe27CFL93cGzB4SnmGJMJNnxdVMggqf17zotuUHxG",
  "key35": "3orumqk1a9DRXgi4EUF3by3qgTKPp7qnUota8Ap4f8dm2hA31uaoLj9NhwNg9R3LFnkRBiqiefzuft45b7uPyPef",
  "key36": "2rXeU8AWzpuPhdBhXVDYVRpRizXkxtUsJuGcFBeYctYFmzLavDhrUYLbwNuR1kHriVvaHRwD56jXpnqGVmckWfUa",
  "key37": "4CsUmF3wyCYEmKgGxYLVpxHa9uKkTHdpZUWBCUJNQdTRy3wPZdVvJ232d14PCVVc91EXtb9iR1dKJRYyocALcCFV",
  "key38": "4D3xBsqKEdzG3Xxp1gdgzpkbiZcjBonzBND52XcYpdAA7GFo8EMs7MnnZN5BQqQZj4Re1dNiiKmiXT6PsRDQLd6N",
  "key39": "KTVXFX5oFRSmYTdUtbbkbSLkDjnPYhfX5gwZ9j3vJSiAxTGCaQuZQojCKXsN9fv6rJLL43eLEPx7fEpkQsk3bB7",
  "key40": "4eR3Fxh8axLhfJdt5fWiz5EuszQUjfehC3kvGm8xCxpCvVMCNC3ryfzo1GH5Q11Anmq9dAxvss3KN2deTSHtNBrG",
  "key41": "52rqU639uZGKF3t9c8tp6NcvLYrQcKWsHEQ639kSe22UDyp4jLbeyQ1ykFysQLjnMc4dAS6v6sAZ8Jftw9Ax7w3P",
  "key42": "3ztFxoD7hCs52jB6EbswJ1h4vwDv2WNLYgwUt18jJjynmmS2woYgFVruUiR67ZxSsbCoWEHmT4Xf6gKTTP6X8cf5",
  "key43": "47WPXyvb5LfCQpFrZpTgPeho1viqa7kz39w28pbvszRRGZeEH37cAZXkQSHmLXv4U6UKxGWuWtJrnMCngwMSQRHQ",
  "key44": "2CunuAK91nqZmqeM9ocJrfuCdGh1tpCwNionL9gJbnKnfUzzw7yDJsGmdF4ZhmwhvDM6rLBzVZXkWUgbQapTH6Um",
  "key45": "K4ZSAfpyDjTtDS3KPm9msTCLsTQ8Th8WMsgALTxYFwYPEhTpRDBbCxw5bxKuNmrLpqCyaf2LQD1CWei9aaJ63bu",
  "key46": "NuiMXSuPbAVGmDqbf3ZCfdU6aCNYwja1xjGSUnCcMzyVyh1SAH4f3uVayAgbUZbENAxZQAvuS1Nhbgoabo1Vje5",
  "key47": "nMpAnuctyKoW6CoSjgQhRfFvcqAUrzztwxxMgf1ERZT8MZy1jNLHv2nBdDQ3q3W44svRdmtKAjhaWAmwdTPGBMS",
  "key48": "4PDGdwKa2rxveCgDpnuENkA6JJt4Qq6vyzCEHXV7mZctnLLHTQ5vXSca7mdqu3Kyz9UAi9xnhcV7VhwQ8g18kYmg"
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
