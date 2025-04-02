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
    "QAQfnphRpR9UtDfgK5jtiKnycL4RtmjZL7fh8bJsV3xRg7iCfdvzZfZGgqVRbDtTGFyR5gjmoT2rG6uLXHzXris"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ACmgEjmc7Neh2cJeHzhwTDqCVHvXN4Wzb4xWA5Z7KwiBiQSgQsVpA7d3gskspZtXHmgfXWRvQvbX7WeuYW6m1fS",
  "key1": "4n2YkBAQWZJGTSnEP5uyY3MKUK2uaosBMaCSwTNDV9dob7UZbXrbveRPZHcffMtnsyXLkpzhbPYDvJ1thEk3jXpf",
  "key2": "46kU9TTsZYeGuFeCS27HsC4vDDkVaR14deP8uqocTBKTcfQ3u7rXPnF8wva7M6mMEZ3F6nRW9xSieSRone7MLdXc",
  "key3": "533yvyKKrMa12rPfQ8CHA3KS6TJL3TYQMwrjcRKoZEJUXxMNLHMPAFvs1H75TLYAaiVErueFTnt8QpeRmcTJthpQ",
  "key4": "vc5qWMGovvZ7mdQ5RzVSJfZqCU3USLinWbjFy9X39RdocMvyEZtyzWdByrdeB8BZmZjtqhbC2SP4uAi2ZxdDwdg",
  "key5": "2kccjZhQaZm5DdbjA7yujCMigB4bZcf8L7yGbLeQLzz82UTYLtiZc2txS4DQZjL55DASYV99KRzWoH8WWYxDm3Xn",
  "key6": "5zWXLH83Fd4mqqnNrLjXmn9d9SuNTy6mSCcAjg1mR7tiMYS4iqMHCwvaJP4N98TrUr33pqEuadH3ZVcCcoTvdqDf",
  "key7": "5oKq1agi2x2dVofKG74y6k97X9KgNK3uMywyghA1vjmARNANJ7iWCJPq78xxSq2Vb6GnojJAbzjZMEnpprDdEDL5",
  "key8": "7GAyCc2qhpahwuJZkXEi4p6abaHbiqjbwVTAni4CANN6eB19VgcAEQp3ZV8rMa2YVAYYLK3TXx1WXscAXvQmBKd",
  "key9": "2CmkXdzpbL7dQPRQMsG1Hc563ftaoyzm5HHhHDg99gFyjmnPwWGEPbtLZ8JdevXwyi9pEXFvBb1FcAt1DVU8AtTF",
  "key10": "fGHnqdgHwfbHCeAyghZyp1YqVYNS1LL92LA7aCY5nKMw25QN8pTmhTEqighZZf4Ed24zV41FJq7nKZZq1C7KzLf",
  "key11": "3Uap3Ray17mVxhwx2x52MdZRzH2pNWSigri3D2nkfuTH3qH24znF7SGJsTrgf4RR7f7b3A4Ngqm8S1j7NHQbhLUC",
  "key12": "64N9By9JR814cWgkrUWWQprJ2696izsmsuM5fQtuhu4yftaPsyAmsvx48y9vPHiBUj1UchNbYK7NtqPeLWsjQ8xm",
  "key13": "4YY4wTx669MXe5drB6ybnLi3DoAkUY89aHnDM3jhCrEnjVoky8YjP5QxRpbZ335gcb2FT7m1pYF1Dcaa7ibBA5N4",
  "key14": "4iDmp4RyUK9tDtvRjQJGGEHRk9g5As9UNFh41yrybdUUXRo9JjJWsZ4B9SeN69HzDjET1N8XaDqf4zU9gHdB2NCc",
  "key15": "3Xso9Vw1xSnJJVjjHYtnKkDYFKBV9cHHpuoqfm9JaTj1kU3Js1hDaTPgTQopToyQU5R2KZJUrh6pVcwBssyzd3dL",
  "key16": "2tztXPRSruoZzKtmUxb9ouYvY6F4eVCxdU5ubTw2rXN7ab738sBDMuqzMNJRpQKtKPi2fMeRpn73QwBajHn44r7o",
  "key17": "578Z4cX9GjZa2ffsd3BZmfMcoKcG9yrs9zgmJ9E9Kt5qu7V8KKtfCBeYyhApursB19V58hGQMLxbZD71kuJ1PT5S",
  "key18": "314z2JWBCo1Xjrj5p3AmJebeakVYu1fd5nBNUaepAa87aQfVPnTZx2BEUTFddJMgcGTeoyK9gx55kRYjV6fBiPAe",
  "key19": "5Ek6Sz6DAxG2EnfKcoguqJ2QMj2aZ1TLZKRqi9j5acEf7wJ2LxTQEntkMpFNVvfSUD8SSzgtkap8GkHxt8os8QdC",
  "key20": "4xc18p1pAP1HFJsm6d5vVhVg5cyVE6cp3ek5piGPVagPdBGrim3kRJxYtBzV4Z32zzwjH5ZrXmGbk3P6vcmXLpCi",
  "key21": "4DaVm19yVD8R5teaF4RFEqExMuU3k3mUp28uhSUEefZgQ1M2k2vncfsCWzDXFVkSQtpJoL2X4SCkhnxHopEZxZxc",
  "key22": "48h4fSuykMJSEbea5MrDz95UimsV2eUTYpkwUmK1bCjVfCzTyDMkUtgrLs3sHY1uQF7K7t1L7zptug4gHFHqgkZF",
  "key23": "9AgdkSxUtAbMnzGJ5aWacGUn1ezdNg6UUKdpPYxnHgN2jopKL6hgU72YdVcNzkgySnvrfRd85FAwsUsr2PEyjmp",
  "key24": "FWJWSm71ui2d96WEDV8f7qfRsWNhuDqTZqbJxZ164FMwYaJqFPdxShDg1veyRvg1ec7B1uGSuc1sk7bMXgRPQVx",
  "key25": "BDRcpK3qdPM8vgWTp1diTq7DaxaYChBWS2HkVCUzuFHmM7NmNK6PM6PRCeUCfouTe61cRxAmk4UqNVfWwpGjACo",
  "key26": "3aoGqFRqG9sX4zM8hvRDFDVL8tSrATbNkT4jfBjesfAdfk9QiQsa2t4UfAqD23vJc4dgsnHZhyaC4Yj7KB2PDsuo",
  "key27": "UXcnX6AGxyrJ8UthkpdiSeEosbe9bzQxXgYMbYv67qFgTtzRkXeLzJd9oyru5uerEXJk7vnVU7y4vSX1v3zcXAM",
  "key28": "3PeWetQFi6Y8PW2QeK9Lm7zHstPTW3bCCz39dGqFYjjeDoKiTzCtJjTNWGPJT23i1wjhGuNB5JG3sez5JLmGrQm",
  "key29": "31AihXjEDprdTdwJF4sAkS98irZtuN7wHDg1V7JXTCAr2J4hg1GUfGetX5JYfhppMd7RfMxxJyb6gFnfkNiXaKZf",
  "key30": "4A3rAsR4X2MVzbWMzhHGV6VhYMGtMQ8mT1GjaUWYCPc8h3Ymv7Hxtv897pse2HFDhVodPA3VYCRLEGPGDZHshKS"
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
