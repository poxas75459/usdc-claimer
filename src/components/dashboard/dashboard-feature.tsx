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
    "4HXoKXW1G8dzBmuoVGL19CqkW1gu4tv14zMSeViwKYqwNz6uE5mHjG8toecU85JTognx3g3V2bfJVAyGDbsGdDYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTU4ULiCd7E1A296vDmtgMYXDJ59GK3vKruxY5EpWAYjTQBABM51GX6TFdLxoTGeC1ubdF62QB4AAajvSbNLSbB",
  "key1": "4FtraXKRHbp73CKv7SEUGLbbzsvYuHQ8jmQhgLEogfkWPLvD5bVH1k1QtvvzoUwmHCneZGEFjdokcLgTsxpLaK4t",
  "key2": "4G62j2RewCJd8NS8caZsH2VbZhn4bQMbPcMqvukNaB4yV2ZYmedEsb1pALNkRo3usXoAUYbzy4NCZL5tDTTbMavk",
  "key3": "5RTM6ZFiwPNoLCwSzLfuANFZdHEcxbci19Z9iqhgaS69ewsFGhBAdxTq34idnCfeEd6W9Js1CmDQPsDbZ5qSdQhv",
  "key4": "2GSS2DG496GGJWURiPS93VwuSL3EU3CwsqQkaP5fE69Nx9J1iwD8KPM4AHZzSVwLPyygvYqW97EJhbxaMGuYtJ2i",
  "key5": "2LZi5nrhoe4DfdGLgCPFiCPCHcFCGBwbzetDyfriVonqVDbXutPzHJHogJUWvVgscDAUaAx5enYZNn51ajyr5v24",
  "key6": "h8LYeZMGbgbhgp3Zkne2xXkk8hWhuSu1S5pqQ8ktzKPHV4c3xTWhs2aLBeR3jAMA9NDW2MWH7nSRGJT4RxRUvpD",
  "key7": "4gfRQLaxyA4ep8DxUqRLHk6SwAhPzTnyTMAfUe63L77t1oES9So6783reAweWibUBDLDng5iGX8yv7ERcLEjDrUE",
  "key8": "4hPjBVJbShJ85FCaU3UEDDKgy39AAWhHEeFQQ8V3MAcYyeQFQMZBQjCgB4kefEfPx1qUxThiSSogdVs2Jyikpkhu",
  "key9": "49axHxiGpBoqBnLb5NfzSTBXUXarqvGPZH71VRaWLmCG2t9Yesy98kkijsAsUNwu6EakjirXsngNvRatDSjJroeZ",
  "key10": "2nasc4xBk3FVmLAVD4P59qLX59B4tr795GWpV6425VrMs1oE9vowkXwjeBbWFWAQRsgvkywZG8eExKfWhpKs2rqg",
  "key11": "3xHia7KC6TT5YY8JTCsUudqykdFomPx9ScAF8FzuKwCWAgrC6GGbW3MnsKPe4MWbCE8zfemg1skBhNAozcdapyud",
  "key12": "3mCdEqT8ajJfPtWars4nZUHNfCWyr5nQ1BnoouDJBJt3d99CHxU9KcqijBXTRmerdKJzVxnFwxzZ9HAB4EK7FVSp",
  "key13": "2wQ21x8ER4jFJxrvdjoswmQHuHauTjmDqXW4M4D1oBqGUPMfGHq3tzA8ZKFJw7WerPFL4qcK5tH8EqS4ov3G8e5J",
  "key14": "48oiekpWnjE8ChyZ7xHug2Kr3kcnnUw7cMoHNFofr6RE4FcWpSoJJi9FeDpb462Y4hr2fFP4RmxKgVpbGuPvLqVJ",
  "key15": "2kQ17WqJpy2rn2b9ArWK1h3BMF4EHFjKuLhFpv5MP3Joc3H4k4eteEdxHquw5SG4tVXR8fMBq9WFCgT9DFbtjx5t",
  "key16": "4wtUQdAZ5FBY9KvQdaLWkyjmkYT8BjNM9Qoy8xgpW9gz7togrN7qZRkWEYJEUzbrZspm6ApNF6sgha5HnbkGonSR",
  "key17": "2wq5E9HUZEqBJxnGV7Gubdj8NEqEbS9zoMgDjUwcs5DHJSN1Ri38NR7Qq75PUbFHBuLUd3UhvVSqSDQzKHimT62v",
  "key18": "bUNgv7uYEGoAhSESPxZ1prwrpbz4xtSWpnogHTdcx4VDuEttnVbTM1nGPHUEjRYRFjfBHXt5BrQ1dw9jRwr9Xj1",
  "key19": "2M9n882envW5FRoywXd5d4xcUQEoM6qRJFAoSQaYC7zryWuCCShfLyUcVjCZpjAuWJfYdshD2F3sBCCbF2ZdJpZ",
  "key20": "2EDo81GCimf29tqwpmshr1a4PSDXLtaJ7SvzYRQb6NtkTtoy1pJ2xXWJS1eoUaeqAedpcbsh6iX85yf44r9qyUAH",
  "key21": "FaUkf8yUHgyJhPgYpy24FCS6y5ddodMyXNVj4DB1GE3AUS92Qu1UauoQVoV1B9oX29B9xZqqTRAjAHJTebxAzqq",
  "key22": "2ymgq5akwpJjpVkAmsa29V5ZWNwPNmZiiPQDMfCrYKx1XosMLqmb4cCQzsAH8upEXtca2WddwdicrNogd7unAEWG",
  "key23": "4EuwYiYd5VZ8UQDJGKfNMrtNBayFy7XwAnaoLhEjPMFALzUF3zjJw24kUCWWQPXDjhrybX2eF2NdEKBocAPk7fhR",
  "key24": "5mD3SFYkTNy5AWZxRx7ce8f3W3RsVaRvG7wqr1AFfB8xa3M75K2ayStraV98XL4UiGHqbcwuqB72JRPZde5rDrGw",
  "key25": "2oLAjfH5PLKMoqJiamFGZ6S13sqC1T7Dta3zQgAqVJkmj3RnvxmPpJ1BjQyGmf7R28YMRSEVqwJx6GBYWPRZfXsn",
  "key26": "2yp5EAdGLv8AewDXz6WerbdS9U7UjnWJZfaBjBbm1a3DTJScFUeuf2oCHs8FxCwWpFgdA7X9XCYDgtinoEdPQgE5",
  "key27": "z9swKes1JqWPKPecLHZKuZN9Vq2N7bbgvXbF3V3GwJJDM3h4HL1j4xr2rAuhJYyNS1Scan36n4nMCcMkQHXQ1pF",
  "key28": "2f84JLui2yG8Dmq7S7YC89MBkYJmYSnyKR49r9s7akgP1cg59q7bzDkZxDkF1Qj1R4KNpmKycyTEYf2STiG2AA39",
  "key29": "3WzkFqs5iDQLmdViTdfubNw4S4csW9X62Vhjr7uJvbivg1CL5yRBi9NKHrN9ozUgDb46ZZrJxw33HNjvnBXnfGmz",
  "key30": "DnptVTUgz5Qm2rXRMRJ8qHEr6DiyuJq9Cjpc4PJzHCLEj6qWvNvrZ81cnPLet9tSX48obPvfJuWYRn8TCeDRAcT",
  "key31": "3SjpZnvJ5gE7T1orq63CLNqoVerVQZ7Kjay2mzBxWyGmmpEA37w7xN2d7GNM42WZiVd2hejy8Q9tLaD8RN8sLSPx",
  "key32": "5kvYcuboqHVLwHfA3kfeQnXDSFrzhyBgRp67N4RHTrNFGWDTk3Mg8vZutb5MTCaPvoMuXmvvskkGMbRpsaMupK8r",
  "key33": "3s8xCVnw2DBw7UG5rSub9xXDnXq2mMp46Rct3RyaeHEJu1DokceMYjUzLVbNfR4Wc11pG6Rf9fG5Sgcatit2ggG",
  "key34": "2Mt522FL5PYcqvyXNEtBcroXTsTPoLpFm3rA76cbfrmkBqnWWPN7EnPCkTD5A7dJbMfrQbpDqRejiVgQHzWhUzqP",
  "key35": "3zAV8r6gtCYbNLBjHc9PDsxyGzougRHFSdUV2BsGPaWavTFJ5n1DB9gpgUBEsjdSLLG2KQxbmAzUUuxm4NoTe1M2",
  "key36": "59f7byGP5Pm2hcrX2F3JBzP4u66LvDLkk9xoYEktwKFBWbG8goM7iJ5Nwtvj2cHKZ3kL8mAbLga2BS291gtWV6Ve",
  "key37": "52T6xppYsw9yKNw5KdhxBYYXzwb5feMMo4ojCX8bVcdPGA9dwEdvCprMN5c1124BJ8EEEQ8JMp7cN8JhuwUBFbVc",
  "key38": "54rZzoxGpUKkEU5V2wUphp7qWR81dvYYsdWo7ukoLhxVv5vxxkjUkRDxhHsazA2fLAmBGX11oBFDamGSi1RdcK85",
  "key39": "27mVvLrnVMLP2bYbAuy2wRrxXVXKvL9CE8kLBuLddiRcAFNxxnrCNLSxu9SPpgm5XdW6XQBRy9WCm4esuH999eoX",
  "key40": "2j55TEXJ352ngEBhKAaPjVUf1TXo1XNkrfUJWS3PAWHw7F3ZGU5dCgsaNTyibjuHYrqgNCcugZUkRJf12VgL36K1"
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
