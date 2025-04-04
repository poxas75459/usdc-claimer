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
    "5Uyoc9qTfV6ygpRgsYX81UmU2mY54Q5WAHRNnywykF3DTBxozGR6MnrxzeBHiY99wsnU24Jt5hgDz4kaqRrPoNS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vsMgY8MLfX2qZ54LT89WzB8wRu1jNecrNQBYkDgcE4JJKotQoV7tiYGwsdJnhfhrzm6YGU3htdqmyfjDHQZDTDQ",
  "key1": "49vpkV5Kx6q8CYm6PBAM1jT9nv2sUFCAcZU6sgPT6kq8YmiCUU27LaeTdk8r51FL3YcfwKWcXMqnxE3SmUndX569",
  "key2": "67mh1HhWrbXVyvn1iQHXLfkmwz8umQpXhWFzPpF2mnSS5FBcPmj5jDmUSDcG57mwkUqoWKCAMhmgBMhhKfW4mbd2",
  "key3": "3qgU1rh8q6YNoox7LgSv3acMe2xgEMJBLCmDqZKjy1MbbCFhPqAuw6ucutfCWVh5SCntFM5NZTahHtgM97Wxrj4V",
  "key4": "3qZkz5xPyd5d1T4TX18KfRsF1G6iTzn9294DfwMH6ZatEyw4XxywiXoR3kV6VeNfgVZNfpyW4YcMsG7AwFGtEDqR",
  "key5": "iNoo96u1QAhzsyMyrJSRi4z6TdYUm6E4oG9EKigsPNf7xLAtrRpoD9v5Lnys4KidfBat6itcx6KhbGLBJB1reoS",
  "key6": "2TTKAkF87EdCD2Tec2HUVWZ74jpfewJY8izLyezehC6KYJJiE37MV1EWr29CJZz9AXCpqtgvpWw9WeGmfN6KFc59",
  "key7": "4cNTmfG5rr9Ju9Wm3TaExjHNUZfELjDvtc5xDUnkeM4dAHokyw4eNLCNj1F5AEcyzqxADSkdgTWMnoXvGJ4uYH8k",
  "key8": "2Dy2YWFLSQCkQWt15Nx5CrcK3gTkbziu8Uz7vwbB2wKjTuJvh4Ux7Vq8wpHSkmBct7Ym6tMxjRLSLnfktV4fWfc7",
  "key9": "51e7UVqUn2eAaA4TuHpaaBBigtyPYcyBHK4MGEFV7FqPJrbYwPLgubZtjDYZfVXQH2XyTkXyzBd2Pum3EVsbjE1q",
  "key10": "4A9vAJ3mGT3zpeUP777UQgissTqyAXBq87Nz9ZmFhfANS1aBkLqDV4sLyynNDr2gSGLhpMhtejAzPN4E8fnYonp9",
  "key11": "19fF8ZfFHFY7hGQDvkDSdAmxfhF1U75QZCSpmHG9n1zxhVVtMqnX8QpycDizdnFF2Ag8WQGYqsvoURvL2GUabpA",
  "key12": "o9tQBAawQgRyHH7E6GqmoiPFnd19geRBfHVTYQE1EVtXYovbgeTzoJ7wYRPp2R5o8V1sUrnwBta1hVcX4sgRGDU",
  "key13": "2sAo6QkeabxX1PkGTy19ZdGvzz77PnAmYcGCxU6QBVMcyW4d4AXzn5WeqHH7gxzZGRqhbDK5j1tDGf3k3Jq2SVzS",
  "key14": "x8NYqJiCp8sjkyPffDYXCfs9Q77SRjZ94899gaqqgTLE833sBzpxRf7m6pnNDSHqHcpQ6npZkFRHEJTXBaEbUfY",
  "key15": "2HcHJuCiy2fEXRZJtFezKkRqUf45vKr651yxVEkqP3JQhbSJU1yHMGcDQ1wZCMpyFL3QjXVrHg1yEzYg7V3HNKhu",
  "key16": "2WFm8rtXQdwxQsmsf2nvSLajipEDPFmCZuftfEcH2yYd3Wsrbn1esU7wPbeAor67k3tvRRAbEK5SE8ETBBKNEPLc",
  "key17": "VUhLv594BQoLt2QGZJDHF4SQ3Z3gndS4aNRTMgR33VBR6QGGuyAt263C1R9nhch8dVLcamXoJKMJuHZK9V6Xxen",
  "key18": "4EAQKM8nfDzFdVoXsEEBcpBQdFKwZ45RV7x28qdczYf7jUSFUGPNDd5FoLbgTWTdAsSBa64X3FtSy1ThnufG2qU7",
  "key19": "671sknT5GhXNdVoKVpEXEa84zHn824hxFdsPV7KEMKtHTrjYaWvzqbVDskrdW44SP48jReb7814akfGKVGwLzVK1",
  "key20": "5Rs8nVZfch5R3xT4nKs1BbS8eCoBsURw2hEPRgn1DE7EtbisRrnBza39VXsbX56Mj7CZdhS7bekuu6vm4FTrs9uu",
  "key21": "5g3wnV2jL27DW7GFNcNaN3Uxaq47iHh6CWvW3G7Lu86Ej1wEqhrY1CNDueTiP4imKoog6ThXwmvZNNCSiZqwpsp2",
  "key22": "5VCMxZdXzRgrn43fuHkR4kNQ6R5vbHkmxB2bYvzFztRBRFbfprPESJ9JJEcrtCHn7AP5ZGq3jyvB9AbXi8TKC7PX",
  "key23": "5PnRv9Tg8UUtDkGbYJF4A2J88qU1XmLVMBLfGKfwtiUYBZR6JbGAKjNc9ZxEXSuaX9ixtoM2yX48njwttKsbbWDX",
  "key24": "2XEGwvrQQDSUbmSH58Ti6JevNCLth9byAMHsAmRq6kUNqNnE5z8ygsMxfXNqmahK4oXe1vte461mkdeD6zggpR5o",
  "key25": "4FUNAApJaqydWVPMu4RpRhG3hBfMH2MMyK37jCBmzHjp19HyvDNRe6i7VF4spqGsC2F4GwR5f1QJm5rYXsG7Cy81",
  "key26": "2sKUh8NixXNrq39gWZev5sYjBTejh186ciECe9CA5j6XjPQBGR9vcWCqH53uKJf7taZ8mNerw1ZrTPm5aG1qTCNt",
  "key27": "2qYHtkUWPwmoS6DXhgtJLqq4nqiP7GHdww1FFbSdLjQhis1LY217SVwhQ4ydFMLrUVi7fe9gP3V4Q5CTHx5QRkBt",
  "key28": "o3Lw53GFEVRPHXRknnWfaA3NA8JY1Da6wEwQJH5AQFHBwhngcN3A7URfvd79eL9BmaqTshkRDMP1heh1t7ppRP2",
  "key29": "27iinqe33DZozhQy5jmvKjgVaBYVw2QxpHXWyzTcXtie68YDy9weHtZbNZuQi4a3yWufzqCkKTfgBcXZpj5pVKBu",
  "key30": "3jhDZZow9QSA4q88C1fYYoJ8dQbNid2wor6oqzz5ABa1Qy4p6WBgsywp636JFrD5JpfFET4Y9wAaVMFY4ZdWPdUS",
  "key31": "3ARacGusob7Me2NWvjw5eoNjULU771w8GiLo66MXWL1hNHaKb2ZatpfHeRaUyfHuVurcEWKKemrTeWwYjC6qxq2P",
  "key32": "5976owmAQDJnA17M5ByKSpJqgYYWSYjnYifqutyhvZ1mjq7qx9bUz3N1djvpzabcNJT8tJ9A6EtH8WK6wZLRj4KN",
  "key33": "2DTHj3jdzsrtyS5WQrFDEkZt4GFMkh8CQZ6tbv77dN2WjmYMmpqKiY3vYbT3QSHuh5tyEgTD8cGFiKPU2YivgKPK",
  "key34": "3RZjKNrLArPqNpdHzDtdfcQXrUaAAWsVtXe1akWfjiQKEztVTRt3jSebQgGQkQpAuKTgWcPJQ4oCNpDk6L6DRRPS",
  "key35": "48goXdhuqDk2SmFABkxmxwV1BXpFDchzyV6pfR3tBo1MFPgWb37c4tGbyUrwZwWZhx5WtW874sLhYgx2svcBJJ9q",
  "key36": "aRNKdkLwtLFaWhP6EADYBJtrUo6Gss93b7Mvw5iZdcMqD5ifA2TFBvgFNskyBQ8koWY6KNJGfy93TaYXAaX9MFA",
  "key37": "39WsPcqgWLHrztLo9DAsbSBrur9FzT9F61S2o9TJG5FkytMBfhtSjrMWct7k3gvGcqogyycvYq1anfNFTv7tbYXF",
  "key38": "Fmn4VrBQwHhMA5SKikbvdrus14WGkBYN6qA2vCcneMAScUQdHzoALu3TPApandr1i1q5kCSnqRhXZiEV69eqcSi",
  "key39": "3W3NziTApzFvSqALAphZQ1K75HavELYXbHJSFSWVhXK9S4Uh8s95DGNfGFEKb142QeKug4akjn5RQtpcJUEPEXVv",
  "key40": "5uKxNLXWdCBdG1tC35osbCaRc9MMuuecwYrXqxSd2PhJWyi1xz7reYr734eNCompKmUqtw4yLLpxokxoeapFQseL"
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
