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
    "2rPw5NcwXEV5HJGBMKehkJw273dPHzjHg27BdhqbLrvQAUXLrhJN3TXokdibZJsx9173PMZQuoXM6tG2uWhMkwVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MCxJkZo6chfQgc6fgcDQKecY21MbRkCn3yCKS2BUTtG3BTx6AgYx2eTxb5kLiM54KPvYC3brgwk2TqH7e9WMK6V",
  "key1": "748r1fwnXDooLKDi9YXNJDCGkxZvANMx7KseXT9xwyygvSADRPN6dB21wiNkfkMzGQBUbXmbvzucLGhPBtVDKSK",
  "key2": "3WHNxuA4XarJjLvSwTMoYvVVDBGYD2mhqs3r2gRN6cyVk8LgWzbodSREPr3Vn3JPRQ1U144FYDwfQ79rcQkAoCQW",
  "key3": "66kXXjLEheh6jKyY3fjH4ane9tWyYRQsQM6LCgD1RhNba9PvfHTmnbAmomax6dKYQiT4vaofbt7eLLPxBvi99977",
  "key4": "25z35KY3gkqQ3CeZ1kxekZrAHJ7faDoryDqBA61hrC5N1J44BxxJdETwwRppX94y3Umoa8WrXYcTXGFNUTBPnuPR",
  "key5": "4iuctPfzGzAGyBPYrYUUVx3aCpVmfjs81RpEFUpk7LCYGku4M9owytvSFr3QQdEQGYfQMcToh1SMhXrNDYXcFL6v",
  "key6": "49FfwhXW6Y1riPxqeYiBtzfNYoqAPbVZSfgkioLgBWoqNc5jfS9zNKe1DtnFrjnxsC29Kx5QpWV5E6XFCUrpPRKb",
  "key7": "KMmWDyWFqBqH727ALXxdW2TDtAJmLUfyRJCrYzqGWJhCaowuxUJdGohSmYJEhzUxQ8ZVnEYs3cUGTe3E7od7LoA",
  "key8": "4ZpYje9BzgTc6qawx4ncvFndi5LaR4kSFWkFGM3AxtFhZ8xymKsLNn8XDZ1hNpmqNMxCA2utTfEb3sBKihBeix3v",
  "key9": "4yxf1ohsbc2ujczNFT78KymfEBNr9AhYwXRsQMSyiPqGub1MMPLeXRdwVKNzcy2ErDi7LemAxmAYQ7Bt7zYuqDoj",
  "key10": "5qBsxXBJ85Nvm6E4DcKYkMGhe6dFKs5kmm6GkaMd9cP4Qv2QXw7gpL9iLkfxk98najTrNAB1Ly6zVEAoorXyseih",
  "key11": "2RBRS5mc7aFwRWugKfoyQNEFeYV3ZrSsTaxMEGDxbr4gHnxtLRzVSL9i7Cgf2UXi6BerfhHV7U5ApS9UnPQJEVcv",
  "key12": "3fXZyRDYDt4RpVvPkLP8SFXV7p67AFJwfF7BfAvgEbT8TBe67arffrDDNccktWPexw87Rq2UP7bRzLRyiyoWRfte",
  "key13": "4mSqfAioUkJYri59z4dp22rMeC1s8RYFHrB7B8HdRZxQ76kgkJaMqNnqT9464BhfTVaZupkddX6c5sZZ5HrRzBeC",
  "key14": "5QjLBoEd5mYHBozqWc6e9Vecwf1VtRdm2BnPUepLmkHhUozUskFTZFRBLtwKnUmMtryMWyV35rLePAoVQEqvqiZb",
  "key15": "3VWCE3HCY2JC9GhjA61BHyuTk6fXc4EfHtswACTb5dzxrdELNSrLzomQc4fp1Rjup7Dc13tWsDYSdyVgHJTc6ZUR",
  "key16": "56NhXtQkjs4wyBxjJLLvM9mVsd3N1PmPNEoybGkPa5rx9jKaxTjoutaSQjbdKcancxV41uoBxPQr465Db9iM1yJk",
  "key17": "5YFbpziG6kPsgiHw3C2YPCNjEvYiUVkngs6e78PbXSoMxUPu3DAxhHSZRpyssFQjRm2jg1HADAwxYrWFNrzHvCco",
  "key18": "3Utu2eJvMpm1nZTEchyg5zVuAkxqGXos8NgqAiNBAxpPbhZTcNgLg2faPXonHhRfVXPPTxBTRcZSBmT1ePpRLrcs",
  "key19": "3VmV2kfW3dfap3euigNxDgu8qBHUe2Ad87c3SqWncnbt4PQxD5h1o9TWwgfmftxMT45PiWxHEAqWE2siU62g4Zdp",
  "key20": "2y7Rywpv1Tveb7nXNGmua4gkTaMH8SXqzRhtTRBSaL4oA4whpX7STiGUnaNHE2jhYoWvFJyZZn9ZQZv2ka7xboqF",
  "key21": "67PKPhLvHEtRWFY4Q7hkRK8JuLmTBYJA2egQatQxVS9Pp9cF61DueFrMAKv8W9jr8JUKgFEMVu9tTZY3bGonhYdr",
  "key22": "ukhaQypDbhaEJrzFKkaTXEJfMYE3eHAaAV7BREJDusSWXKK8k2bRvKtozHgMj5vGa7fzotAwRt4nC6VedFpYBHU",
  "key23": "4NryHAj8A4WMtbmuFFoBRWQZQEb2wuwMK7AdspPyedpcE73XTqicXB59oVa4fxEweSRibbZZq4FruTRojyCyXSAi",
  "key24": "4bDFhMs4HjtWFfWCjrQLbjUpBt9nL2MzPd191AgYaHPyN4yd7ftixSVTRSet9LuFBaQzKRcWajdUphkxgYHUo5jG",
  "key25": "4kcqtp4v6ut9NormBPRsEvyMJgm21pmD6L3NFziU7S4HN6686C4BLw5qtbxBqkCJChQtUCgpmPN8uFbHXMukNepN",
  "key26": "iTnhXu29NGkJeg1MTGd1QyXuX4BtRCPojGSe9FVfsdiAYE98cMwc9pe6X2rkFxw4pHGRD52xph3EyRZCNZ73LCS",
  "key27": "4zHNN7WGBy3qTm5FXn4jsikBZKhi6UgoXhiXGMKrkhahNa4FMS85cD7M7VBg71yjZ99Fb9YbmiK8EZA1xNsN4t6M",
  "key28": "5N1abzE5SC6TM4iL5hpPeNgiUScHQvbWT4sfLLvnGWgX7a4rMDsoaQcxRdY78av43awKR9mRgZHaPCVocqWrTRd4",
  "key29": "aiQyXebNa9e2qoTYZrH3jGhVqvp6zhzQkhS4p8JcFRkSc8VJTivApazJSo8gm5uD7yuJr8N6X5BRDRL1bumd5N2",
  "key30": "2GhHYgfAi4mESAJjADKZh84kTi7qcdeTw638Y2tF1RHYWpoeekodffdyMbdfzWLc7N3rTnmJ8fpaxFV236uYcFDo",
  "key31": "4x7PXnFXSrCEcGNaTm9vY3iSHCDvS99qQDo5Cb6HgTk83f7kWmtqJDWva8dHL7h6JDzntRoy4JL1oCb45HBpc5vv",
  "key32": "Adu5fb9Ykwa4nq3FFtBVD5SSrysL4aPS8rqKCTgBz3uUfvHHjV9VYQcmKyLceJWqueUWRcz3vESDkoZF5ifNJQw",
  "key33": "2RRV2o2CV7Gt6fd3R5S9sTebTZoir35MJ6AkQXHU6P6Fe11moPyEkS8xBxmKDK98WSwT1R95jq24KCLLL1rhwjCB",
  "key34": "45pVMd2WmMAmkhswTCFUZruMa2YbKLPxnQBRbUQN1J7F3NqcpD9AA88ikSNFKQJCQ8f8vYUA5tUXSUCNm87Gf4Yp"
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
