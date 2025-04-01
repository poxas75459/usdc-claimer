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
    "31VtcG3HQmrbeE334aVeAmU99m2pzJTSMqx6NaAc4udFp3DsAfDBWkB3CVEB4TL7oBsXgWV1BDhDoPSDYCGM1HDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F9tY59Ut4iGdpNZGqBqVxmWDdpioW2YYBKvtHTPnUKViFzmJiJYBipeptnsYgj9zwvDkr4hJSmjRhvwyERtioGX",
  "key1": "Fy3L3aPim1fCRyZ2aV8oZ6BjF7uK4iiSWhnGP8f63yZXiSQUKc5KqEwwWdfYDfib4ADH1z9ZbFQcwJ7aaEqD4Yx",
  "key2": "64aPrk4yKEaH3p5BdNcnqpNgCenukBV2EU5QCopAgUkwnC4BviSfeE9vbdMyFiEeS7vRZdk99dDWHGzPNttFNFMQ",
  "key3": "4b7SgRhAD1JdmdxB9broq8AcVLfW3HqJPorVncntzFhJzbdA8hZqyvn8QRhXS2kgpKHas2K3PM4cYHmPdAiPEnKf",
  "key4": "2RS5fiG35shxR19Zi7fFf69A196kPDSqGoKhYoHGiLLNzXERHRMdXYS8krRxnvf1pWvk68hLekU519kiqJTVDug7",
  "key5": "4qihRabeV8gWonREoEghZXSxDvPm4YKrQqwYmWsr5oZVj3ybKS6AFo1sNs94XfGWdzZbUXGTmyASx99qUFAYMDdp",
  "key6": "hFKuaFBQRJ8VXXWX4WAJ3qpJ4wmJaRKbP7RwAG2p5b6fL8ALag3xgz9kD31C1SFo1CFmttWyPLc43KhReqeHVXg",
  "key7": "3rjD9ytgpc8nRcKvBHkqsSVGea3tpc8G7XjXsJncHNgDnmBA8bn7EyJ6A7FsY6b6UPbbjf8ipx4FSncxMCqdDCMK",
  "key8": "2xCrB29c9mQhdk6KKE8FB6fM2AUUJB3P4Rg1pkksuhg3qbKBPWccW9hKjGob2CvuCkz6Zx86bDBopbMHfkzyxws9",
  "key9": "3FwtfvTuBDa46d1vUBZKNArNXjwLaEx3e9zZc9UL78X27Ve7tphwMnTNs34MqnQgEdkaSLQR9FyebL6ENxbTZWrP",
  "key10": "usQuEpr2GEwbRMYBpnywLPyKz3fDPM7dQggHgtBRQpbAfvNRHc1cspiWUdT5cQc92opx2KwhoWCdDAGpn3Cnp5z",
  "key11": "5bRgasgKC4YSV4CEniAR8CPKusyg9p7QKyZxst9zQGaomkLiUx4CvwV49TfoDa6YJkasd599AYhskgTK4bwACnWd",
  "key12": "268uJKcnn1U2FwYw2Mx4k5J1iEbnjhmLXZXsdLNhuqgM7P45RsMV5J3b5iFabjDSmS2LmaDxp8GtUgMP9Qs7eMtE",
  "key13": "4E39LnadWtrbLhisXBWfGCRcxodTAJUUxZXzpQZHU3xj5u9oot9ih67v4ftLvJe71jXQCd5EQCkpnWsC1vpuGkQN",
  "key14": "2B9BE8wfDtitNn1X9Acfgu6gqhd7SNinvmx9tnWBKy8jDjQWCEmTGp4EUunA8szSV6wmEYc1bC72rHjRwvzx9qqg",
  "key15": "cyeDKgUZZi8RgV24BPX8om9ty3yKpLkMk1MdUuPqsAWe94bdXWKKSQYLDaPGa5yyGTyCN6YK3LchTBawZq7vrjv",
  "key16": "4jZ1vHSXZpToLZthKwJNhG8UWHx5L6ZuTMabSoeLfUXUJUh5rXL7JimTLrJbAPGfvySMsSRF8VcBT3W4RcR5fvqa",
  "key17": "2CyHi1kf7g3ZYk8Jv3gT5PxexoSwoGL28LjAbDqdstZAcWS47bApwh8h4aaf6eeMeMgVLDRR8i8kdDLhepSjDMnK",
  "key18": "pRYAkAqjANUCAgwp2W2oJpdEAyp8cSwgDbEcdLcUpFYNaELmfQFZcwNgch3mVod3oARMxnRqDNDbx7i8NhczkGa",
  "key19": "4nfzKtgcukfo72F8nef3RPxx49jTnLMZNmx3c3TKYqnoxvarPcw31aJvEgca3DzXrVqf2N7EeU1VmKatXTXh2n3d",
  "key20": "4LBYxVPMGjbXfmcatjv4GCRYCGHkJZB3iwhBkuWhLudkXC3LhQRjE8ZHLyV44GG15fDq9Gv8EP3cVLPGdYYzUnZp",
  "key21": "E1KyoAFx7eLUWmwrh9fmVCXtBR4rxGn47qCWP7aD21GsqTEgMUbinCLu4fJkpNzBWsjL9nnHcsLVEjkbcYerVYP",
  "key22": "3Yjbvq8D13bTZyu865t1PSfU8K3EvYjS3QKcPgzGZvsR2QAoFUxjVkGC9cNLxr2CvSm8WMvNya6nBth7KNsxZU3f",
  "key23": "4BWfesGu4VMdRvXHveKFs53gpzhmo6gGb7g76qNLfcYuDKDuC6KUVsHPHzH7LvgT5hH9xmJ1xxLAXBo12ir7HLPj",
  "key24": "3ATK5vss647XwFZEij1e33rHoXRMf14wkZMM3GSMaeRnRzmRuqkwgQWwUBfUzRbxUYsjAZfakHQ6pPefMp8Jn7r4",
  "key25": "3trXQcLxQABSTBga8GAjrtdpEd1hLjpa2J7Epwg2gzam3kF1eZpbxvQJj7ErQkkwmaprWZynkdtDZX9SNs5Qhnts",
  "key26": "CGucESYcYg9hSjpqbPLQdhTFFhraYcNuYx34oUddaP1eTxGLVYysWTkjWX1PxuV8FY9fScwx5GLRNEFYQYNRwBW",
  "key27": "AJPBzsWzALwYTh12yRyRyiK8d8WxRK3PER5dKwvk2G9dXyb1XzTctyZKf3Wympi2i1c5ncbLGZ791ZQ6rKZ71mh",
  "key28": "3dUpDt1AFHTQfVrGxdnWpkSaYrkBA3qiUqxebNczaTZg5NbdNUazx2Maa7vYEs3ZJvh8acaUDaUw7oZwtLT5XH8h",
  "key29": "B5vNG4LFqcw4gBECXxP9jipNjWZDnzADWdHv4D6CDHgkXR6wTDawQVtKGWEpt4T7CWw9U8jSGGqvFsz2yYHYhi7",
  "key30": "3inj8SVgwpBfjJiTyGsmEEm11ZpoHXAtTYM7UrPv3eh57TTAw38mss5QxMEHuwRCdqDsR7LfaT9KBM1zT2aUjr9s",
  "key31": "4XFxMkWTYRi2h9e8Xo3vaFB9bdUKfKSsTcPWk8h8CdVZE5eNPRpfLtut1DCSfZy4kwotPmfTpdpj1xCm9PDnqWJ4",
  "key32": "4e1vmpkST9TW3YkMD1bRQ16hoJ4DddB79kHS963pwCWgUfZDrLhReVb83m3zXZQjrJwtptCNvhgmPTqoP81XvF8D",
  "key33": "41gqmxWKFyFNta72g9LpPBWoKZGns3MV2pUgSaH36UiLF9vjQbCtR4DSuMDczSHBsGfS2b1hmgxPpRE81iNmeNXS",
  "key34": "4b7KZsWhVJQGgcQ6KiFLwLiR3wj8rAmkxv8HtZGogW16wzasRH2oqznxL36tHEqFgo1GSW3dNqcU31YCWt9jX3c",
  "key35": "4gL2rHCQHPSC5fibK5UHtXvLWHaUdeDqL4YBJYUSkKSwKjHw7mstGp3oh7oJs8Fdhjbp9iXLgNG7X4YZaqi4XUvu",
  "key36": "5NWLZwkRAwvbZfteKhBBZtzTc1ZYRRT4yKYV2xx9HBtV8nH4rKV6fxgxDgCderJEc55WtFEyVZbQnAYTzm1tHmoZ",
  "key37": "2gNiEbU84AKZKC6jmuAJ2J5pMuYoN5yfpdi9ZM3a7mXF8HyMepjVnuacpVUNHCGkB97cMyu4skVzX86wiwET2qY2",
  "key38": "4T6c5F22YkGVWXqwz1oErSkdExoBLAsMANXvjR1C8ER6BwrsJRTmb8jYF3gvwHXD3VTYLkPtKfrqntXxBu1HZeqE",
  "key39": "34FCaFWD6Coa43q12fDdk2QTYJrGXZJeLE9ZQtWgarEM9id2UxQ6zF3H6nKrePF1XF1CsWE7FTXo95wsnAu5uu8k",
  "key40": "pcaFjLMXtKWX9GnoVms4JUYVCMR1XQvMyz9yAnGWc5eWt76bAiZgAb3Vn1VzxAEfM2gJzxS6CPJj7EsSYunhRGR",
  "key41": "45EBTuZ8wX86aNXv9jf1dNp4JArHQUqDpswnVRntvf3wnXrpPBVv4hma84Sf9ukiRJFUM95eEXDwcBtHQf9HGi48",
  "key42": "4fyS5rkPytSUjybksPoe9one4syEAVo7Rue4Ri7VameS6ViAr2EZsS9FRPUCvkYK5Yqd3oJSCtfACMvEPNuVRJoL"
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
