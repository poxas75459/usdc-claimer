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
    "2vnsUZjvKKkNk9wqyCNDKmGPbiVbChMeeKCzvtzGAMw9sP4Y9jCTxqx2nHkbbFWVyQ1o6bzynN4G1Nn1YgA76dNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w76P6ukdnXacwX7zc12dns5TJTA9gtbAK63FGTMhuZqbKjNptn44SaT5qoMWmThDxz4R4xR8NMHhBBEqcmohMTo",
  "key1": "5ZvJe6gPUopGuxGq8MDbCA37kzc2oAmDeYp59KnfNnHfeiLDB6bFibcasv1wCfJDSUvdr3NjyzaXi3VPeKAC7uHg",
  "key2": "414EHmWuN4X1Lve1aSdQyhpJdDKyCjvGuhgXqC35yuHyX6oq8VN7DCHWLdbdNRV9utsMKmx4yxiurxeoPfs4fPsT",
  "key3": "343TW9uXPUmQTrPURHsGVhvoNwLtHxyRZDRmraKt5f4xbfxcxAJsVF1TpBGkrvP6QZ1dtxUU82ooHkHH1AcuwakP",
  "key4": "3Nmup7LEgxav8cNE4NsHhyzxZCws75Jfcntq22mpjHoZNTFYvmVUyHgvNPFqZZ7ujtkZSaJUq6kty2sj2qNMdz1t",
  "key5": "31ozoNQeef1WvSdriKzt1cXJHX9TUUpMT1cKmUDf7936b4dRb6JRLAPaTFvMLMz5eMqaVBLNWFebqXViWAYRj35r",
  "key6": "5J3A24LQkyDm1YkLF44qByMbkqwyxa1sUT3AHhkajwqgCsNJDFJpVC1fKdMXcgmU8HXLZ3LRNA87QwYCj6VtsbvN",
  "key7": "21ZKB3LKP3zg5oEYuHnHs1hNgWRkhX15wTgJPDXu7pT3jqbL3gikypeuRpJ9F2jcYac3tz5MicPayB1Rz78v21er",
  "key8": "EeGTfpUnx6v4QNBdYSn1BNao4HN1WJUtjefH3GiSWjJaLfEvqvhyCGubwRL3VdUC1DNcohAisC4gjjXgydYd4p3",
  "key9": "2JN6Ads6Ls7Qda1ChtQ2yDybkVY4e6mwRuTNWoCust3k58wNn7XmT9JD1vx5c7g57yxPcs9hPDQM6C5ZuSaNQkha",
  "key10": "2vLeAM5wmV6VfDncDj39c3qpXBKQdHExHgAzMRzp81qoeFr81XzCqWvG41pzYa3zqsfvxL3zjzc12iAAt9dzodra",
  "key11": "3iCmabCDX9VhJkdBtkPAboGiyTrcWmdmpZyYZo9ykRadHZ2s7eGXXtqxwicmdpRzNZZuExg8ZCoBkmGRgugJfKEV",
  "key12": "zTibWscK7hB9CMCqdEcuTVSUktnFVnfFqZzVhm7SzBgM4bmK6zUjVVDqbURSXnxg3XUGAsje4Ce7WjdoYtEvcxg",
  "key13": "5vPirqZWAv4YuFXahYpxk24mgE84oC5Y3bLnKuBAsbDXfHohKrmcyQ9eiFBaKhJPVh7kn41FMtQ4jj2YpJfDAumA",
  "key14": "4hqKEwjTjzkPkiNVbgkVR6W1XzpemMU1fCqSVACNBk65tWswtjyuNSVtj9XcfQaBfDB2LkxwhSdhMEwS7Euca6fP",
  "key15": "5nEAoRdSE7doDgrgxpo8r51qf1yg3t2LdzRjL7Apfvxj7Hupn8f2Djc62Vkvxt8mbcgKK4mmjC5Q3mxHKFzQVUEd",
  "key16": "5xBRR6jmfz8HybDL1z6sv1JPHc3neJy6YPrbJt1hCiy3xCLGUURt3f8wkuvN9zYnLsssZ7goWFEo433cSdCa5GsY",
  "key17": "4ony4szNqmF7QEBU74u8mct537J1Fhj1jEyWqsyq8o84hXoF3eB6gXgkKfVhNhpzxDe1hcKEzxkt1EuqWynJzsfr",
  "key18": "4Y2d8f3QANNxei5RhCQGs6sMFUQsVkpsHYvTvgTPG3GaBNUrTEp9fVn6FQQWuDPYWthMGipyLhS6tQhyAGsgtySB",
  "key19": "sKLDVt3W8u4rHHbS6SQZUCvVdrBPjADscCUQRXb4iqHtPqspNiN1pyFqzZ7paxtaNsav5upzxXs2K5LEMm3Aupb",
  "key20": "3JTaaFryA4ajmjgyuYaEe6osY8HBrXeXekUn9c71hwU3JzCxivZAopJBTUiwTgM2V5ngEM3maeD1nw2Zi5uFYsrb",
  "key21": "5VWfJRbo56rnsNqTyjd3Uo7fD1dSJEsYFQXSpnQRKwK9FwcyPYNiEubkp5Js7VbV3y7tgJzHmtbubojLFJC5NkQP",
  "key22": "4Mos1PWvJq5Xm31qdJBcKnSKXKTPLmXRRBBziYxUzbjJDdSNGusJgCEUN7xwdvhifdE722huGL14NAPqrhP3J8Ej",
  "key23": "pCQbJiudZDmVK12L4EFm3UFuS1L7B61cpamqVk3ULZCohZbTiUNmdysorzkZKoec6BZPZD3DYgojFJ8qGC772vW",
  "key24": "4XHs3ok1C2N1gqz4H7H35Fd8B11EJBdKgEaYn8dTz3cWkd2VhdTGHnCVnKBHVEjbVhHnM7fw6zA3omScUqdjzy27",
  "key25": "5jbzeP7Ce3UxQLL4ez9YsKwppzU3jR7B9C8bX1k7nzJGqe2CwSAKBULDGuz2xo8bjTRfnYArPUTy26AYQv4PLvgC",
  "key26": "2sGfXP9Jj4HBZUfawifHgorDKffxaYesw8eyUiaku6kvnEm8p84tEzeZiXy9DMwY4FsfSSHsszQ2ayikiMjxZbqY",
  "key27": "22pSWZ47cVXVPuPudgEhA7ue9JMGkMeeTuA1sgjZYq6Ykiyd7KKqtDFKDkrowDhVMHJ93EvkzNpetgS7RrsCUr4T",
  "key28": "3Bek8epfjP8peRUFxGUGBhN2AnWnBNCmtJor7ba7hvQFkfMe3tTeRnhaQm4FAwzKFzcwENSRWFgFnew41bXwjomH",
  "key29": "3iRdYikr4waGhNHwHCt95k44CSL3JQGAmx63Djw3DthZGBQ4FQGogx7G1kk2Uw6FDErbEiG6BnmMNnGXMwbo1G1",
  "key30": "4zJkgQquP43rKuazzy3GLU7zag9ShXkwbVRP7bKA5H6iH8VHhvqtN9Lxvcs37hvpcKjqpfSQUkoBMi273PoHUD97",
  "key31": "2eyEhXnNHSMJiUJeizRqsWEtLN9rnBKeNpcJqpi29Ko5WS9wskNEg6L4axtDhwtkoMtAFU6aXwWYAUo1Qt9JfD59",
  "key32": "28ZW24UK98P5Ah9vcy6ThfR5kCanpQ8xvwK4zL3ia2zpDsrBxnYeYWYmQVpcG8N9ukVi46Q949BqLhTTNNNYXcmg",
  "key33": "3wEJKEtjvVSdSVPrFVcNGtUapLfQ8zrJyVj1AvhLtxCuE8b8F7TuNvKruAK3nD94FrN1HzpYkzWecG3eYLgqZePc",
  "key34": "4Q8hhUWiLtA98rFQpwaPuqUvAfN4vBhHcs3amuu8V1XN6ujVExxdQ9JQJzz2sViZC8UYjvEwhr6ASBkhbEGPQBh3",
  "key35": "2SiCffF24N5Ahbb1pRQm2EFtuSQkFGfuAJ4UAMEzHjjwKaw2nkgptnfa5X7jr3AL2zTfwbtNcUFsJJF8Sp5riq2C",
  "key36": "4BSVdy8GBBmhoQzrpxdQPyVvsUgaEjNKSaikvEYEQvTVLK4iorAJvUERgdCVZvBNa8NvERt4abErxU6TRgeFf1cg",
  "key37": "41z5r4gVB36TehkjUQS6QEiFfQf36upbR9CmNmpsvmCUh7MV9xrFkgsPT3sYcZrej13D3H2zdvYYHeWx7yQLqemP"
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
