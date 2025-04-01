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
    "2HZWJWjpX9Ve64STxQwzLXei7fGUbYbNaaB9jecAnqL2fEVbVymfrnFW6QeGcNzSExn9yq4XViMZNsgZfTzVZAk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aXkZ1ZqnX4ESwA1PMGFvj5vhsah5SmxKrmbGrh7ProuEqC7HBHCh8Uymv8ZJY8v11U29KRD67w6beHNDxVwdBHQ",
  "key1": "2r1s1vtYYxpnGuUgcRpVGU4viUyfdeBLVNCvQvE31fDyNAbzY9WxsUHLmCeXUo4c1T3G6iViFKgipx9ejm72K1Wn",
  "key2": "3t2Tf4ptpukyVrXkAixN4VdLzP4qCKQe8ibKXEw62S99avU6Fffh79GtT3g8vQpzW2V2RSCu7tCXY1WM4a8XvU2R",
  "key3": "37HgLTuQkcXZY8sm7qEq2kTokTPPYBeEupA5abMiYA3PWfSPPvdbSiMpy8LELwGoRByL8p1pEMRXZU2STu53oKMZ",
  "key4": "3R1oWs8XHjKVEB7ueBkVgmysEi9Vb6pDgT3pFnRfUXDYWAiDWGBEFuPDk2hs1AaXHWPWs79aGWcbp56D1ratLuee",
  "key5": "npzkWB22zt17d3TxSM8qZafYYQAx9ceWCeJirfXHWNxDdNMq5HyEK9RERuoVQs4ckBjkiDP2yi23WtCiWn25QDc",
  "key6": "2GUwRNwKUe73wk1WT8iCbH34ZZ5c1qXhRCfxRj2LeCntCpLJf6TEubhYSMpn4FvPgnVAKvznmFrkTo3q5Wu5d3nJ",
  "key7": "3xmkbyXXF99TjNSTNKkMXMDcHYg7hQLrsrkUbudbXDGkqgFzjgfAb6SoQJ7xh93ReFTuvHyVxRPbwmqWxidL9hHN",
  "key8": "PEyp49NXov7aTrjLUfyhFYmHyod37moTwh2oSxwJqhJ4CgssdFPSjTjGAhpzEtbWsnSkLm4zonX2fFVBNNnGnp3",
  "key9": "3eH3gkKxeUGjCX1eyudMS9GAa9FoPajAtCeFnn4tLhLvDUHY4cvkxrwyUJApadL7uC1VofZfPrx1j3PsLomCVf9N",
  "key10": "2jqVaBRnF82fK1BNgmdR4PKNsvnKXmJVgkqRuoJSj2Un6Ls5sZ7c1hn55mRcp8kDMe4dSskrfMDJdZaHKiHuuDUH",
  "key11": "4LwYs9X5M8UBtzh7L7rxXiCc82WR9ajbR49KvdQquL3H9eoeVUgMHpKrbwT864r5J1r7PAeSMoJL7uzrVv4eosyJ",
  "key12": "5NNyF3AifuRmE5d6GqNPLuPtjMhnohw33YXZDWCVSmWYxaxihtdPhGNexdJAFiyyKrpK8aZHeNSspEuDDTxkxXBy",
  "key13": "5VDatT4PePqadsgC8C5X2MGo2SCwQRFuE3vkDmjsJfvyeYS7TE97tGgWLbQp7aiTwfokAThqrUsC3LCF3BuZ4o1c",
  "key14": "396nV276N7bYJaJJfv1wZKqcZb57U2tSSgpiCLiNXaw8VfgfCzD8yKqWUHdpj8wB1xtvQ7mdUKQMDEGATAxQuqFG",
  "key15": "39WSCiJ1GUHRkr1vEssDeA2vpmctaZdXWnEgkdS8X3cnsWsGUchAvJ17u2L29tJMSS7j6cBUpUAL3EfJLZsK76Xg",
  "key16": "41a33hoP464KfSHaPFPpJjFgg1TMjggVgeKRnfn9k5wCmKNjfA7hGaVVooNQuHezpZBvGW5DaaxLF3z3YkRE6Txk",
  "key17": "5iBbpWb42HJq4jGR5MbzPJdH5xbvdXJfWoNabPBoFJ7LrBQhWwoEwCGem5CkSqJaWgiEfUC1jsUuEt8pJfTsPSNJ",
  "key18": "2a9GnywxNX1BgYDiomrVwfw8RBK3RouwmAcBroVMCA2qfYGvxxSyNGDbhAPpLWyXbfbCfMiw7uP3G2RxDEj9Ngce",
  "key19": "52ZC7zSjehPxXAc9QwHcx13U2yur6LsDuehrF7LBsPZtEYFDGDQVDfm23gebbBfic6mkHx43QZLJgNEcT2DDefZk",
  "key20": "5SXwKbnEp4mL9ZV9Hz5eyCo9H47BGJtKYKmbFGBokXiKQ5UtzEMfmRah5BHr6vA6S5zTRurNVGrws2jFjvzFTrmx",
  "key21": "5x25eXSMqaK6fZ3V6FMNBCCCG3vi8DsPVqRL9gWJaVhD88kxVbGTvMxLYHFJzUspn83KgqvmnSwM8i6ZmCW9ZXK2",
  "key22": "2W24mAQTpCeqrjZ8ffXhZ2zKJHtNDJ2uhTQAMg92yoo9yxNGwd3TjcFwM5G82U3i2hBdgjBsyxza7hwaqiWPzDBG",
  "key23": "5SPyLFFa43hNdhfskT9nLP7vJgnz6VDHdfafEYSpqe4FjidZ4NSoddwesv6LjNhZcy5yTboe7gs8DNC6DZq7h8cD",
  "key24": "3GZzRQPXeTwe6CEMhjS6bKSecY1jna9wPmxRJJq8d5x8WcmTCEHCfYopHuyDMhrbz9iU5xXA3HdznBH8GYeQfJGM",
  "key25": "5SETtJswCBagU2Kdkv4C3kF6mdWCar7jsxrBmtUG8NLgVcCMp9Kro34LKW1sdjZuX3xgjc53EsSmeX1m1n1PcSxU",
  "key26": "3YDJxTjGfHPxQh2g24JQW2gREs3qTC3SgtzRV4d6y6Zy2TtQ3Z5oF9R3S8uyt2xocHfeNdvpZZWQ55HJSJuh9hWw",
  "key27": "2ZcA8Bo1VoxXTCsH8SqT4ZeCtY8WJJypJi67CQyjcz3azp1yNy25MkLEeda3eK5e4roo12HYPHRkvV16X2A73g1K",
  "key28": "4Xm7L7VsWer9jeD6uerFpmgJHTthV8wVtCJUfHy5mcr5oa3qvm8FfBu6Av8gzxQb2jrBzrBJXm5wFFHSLs3Pzgao",
  "key29": "5LCwESU92qM73Kjm9rwYnaJ5T9qmESAZcJGorCwFqDhGXmmnhx8APAkD2WdpDN13bYrRp6d9Hz2cumXy42fgsmpD",
  "key30": "2DC7yhs7qL1FqZS3d8aYjAWEmDQFvhkRS8M6LCQ9DmDTvcjEueTDoDYRNDShqPCKFhDZUZcBLU9TTj2qs57oFP6v",
  "key31": "4Mf8r7iw6pBbgWQis2w3oRpq3MS89DgkCST6kezGw7qD8FjbvENasNjMnDSVCpUgCHgKc5KWt7jaUaLrj27xDWEJ",
  "key32": "55WPGabpsbaJ5vMz9NUfMwprZpzAKA3cQ48u3Uqei2kXSEU3wUdbu6HvcXAxU6iaRT3yuSRSvJDLY8FGtD8rbFNS",
  "key33": "61ZMJLKbqKqW3NHcBXujKQQXP523SsRRHQFxwRXQJyh8rFnex2G7g73ZG4NXgoDkTZNoaxG8sbQ57sNpaaZktSCs",
  "key34": "5XRtPK9xvXkveQUkfXaHMJ5GN8QDN4AZ6ZaCVwfQ8DFd9uyXMTncqdjL1gvnK7CdafAB7Hy4x2b6svg9w8a5eoZc",
  "key35": "4pdLpv4ry8yWzBsSe7BfbSifUGV2oE5uBFem4topyvpDLMxMJLhEYZrPxPWdJ5AbmYUKriAToXGrLqicRJqTZ4Tb",
  "key36": "3ciEqvFz9Cr9icPCPQZLEjXRdZ8KdMTTg4FBBiUkD9aTovwgz1WumBFi5gv9E6gY72PuUSPGBSvTUxKX3Y8TSSuq"
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
