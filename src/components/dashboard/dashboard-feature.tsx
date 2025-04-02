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
    "3vEDJvWF9KgwJKaC7gaViUwF8UQ8MbFrMAmercw3vJbdGEAhJN6xx5osHq6rtrb2XEBzM1336zYpL5BLHrK8ZuKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6yPTX5oADjptFkDWrfFNhitkB8smkT6aa94ryWbSpDzbJXNxibvLYcmiA9JjPVvkJj3FvvsBcL2Q5R171CwBmk",
  "key1": "3f4Q6fBb4jxFeF5qxQJkbuJkZvCTTetNdXAa66Uj3Z5fGU7f81XxRmdmf3qUnmSCAZHTwY1tTMbVmg1pSjiwN8Pd",
  "key2": "3tGK9BUHmzQtADrjMpC62HmgStGf8AiMWMb83uf2d99oJMCDyGFssGWi8cyNwdQXd78Rz1CLQraeNMWEDMQMnGmv",
  "key3": "esVRoPDWSbGWr1BL8BCsMFaDXcpi1yZDtVFGoiS5K58eQydWQintW9r5BDAMREudj8Kz5Xs5EY8SKHXhwgYPzgm",
  "key4": "ouwg4wo6X841oqzXAPfbUyz5Vsm52p4MKS8G3en973GMDqfdk4cC6Accw1Qb5TuHRM9cmch2k6HrUSHZosufp4g",
  "key5": "2FhLAwX3Q1WzHSynDqk3ykCj56jCJtqTUGD7ESYi3JoqLgCsJ7Tap6Vpe57ohmsbdphVYK7zu6nVXzaVrmeLDnrd",
  "key6": "4s3mxbNvxEjtojHX9fmJDwhLKuBUFF5L69wm8mbRJTpzVXAap7sseg3LdLW8Hn5JVi1QE1aFAjMr11i5mciLBDhD",
  "key7": "38LLynaqcHHoJpFg77PhZAbVjveqpw3Wa9zKHGejiv5kzJQhj6iErQdMmu7itr4Rt4LT8F1naNo13XhBy4hWE3mY",
  "key8": "2oodDYJP3iH6RiuJQQhDU5CQpyGq8oCsC7i7tW9oNwEkgtyS895ahxL3tWwx3VoLvMkL9JFjK5sqd6iBkbvEPbo7",
  "key9": "2ipBhBt5y4jDqchT53LCjU6iSCEnYmgF2nS35xL7MW97LoE358tPMhHoBrQPiHbvVMbTWE9mMpwQhAtBxfe8M8bJ",
  "key10": "3QkWLKgTBB2LKTopNqoLkvdsnjmcqVEFd661XG7Jy41zHwZtkjp2YZ6XnrDuRoFZUf9wE2iWtcpj2xdu5KvunjqB",
  "key11": "3Xfo8M7TC9MzoTDUWkcFTUQB4yhcK6AVAHdQTVpohBdmDV7MurJ8Rhb4MW8HFUB7HDxTWjpJL3LwWbcmHpGTGMt4",
  "key12": "ky9xgJvapNswjGJ6cV9m22LB3SrydAnsLp15kMRePdTWh7ymZwzudLk5JMU7KXPU5QGu65LMBSkNKTbmcL5kTVf",
  "key13": "3iyNhojvG3ieA2pXxr3Hn8oF9ZDvQyJYbjdk2qkghX3hDDCZYf1Zn3sQcefsYfqYQVRo3X3415fpiyxtPjTcRCzP",
  "key14": "3Kfzy64BBKPqqrDofmeuskDS6JqVgssRBDibk6fpD8yDuzmz22YdGdawnj84r6HAwdLb6TuNiYLS7E7oneW4YD1t",
  "key15": "3YzV6MsSB6b9cLYgNYpFYP2Pna3LT8ziEBQcKuCpUbH1csgDsy8FGdELLjH2qRdcfo3zWneweu8ogN9rYsAuEgs4",
  "key16": "52c1viAdA9QhaxeZf9m4fPjhY5rHKbtufVS4JVoUiDpFQhWFVf8f5nbvZjSDEcMJ2HgD9WaRf89p8WGt9qppsXjd",
  "key17": "4YtiCGh7SdswXfqVuoiPM4M4VXZT4q4AC21zNdZdKYa4B3Zc1RppDaSC3PuMVmLtSgVRBx3FtuMGxivAmyEtL3D4",
  "key18": "2XyE1gpVEfRb6rbC7wo7UFUzFpt6usaf2uPWYw7zki5nUui2RhpzTxPLiD2U3d4JtZTbunzuiwGsTS2pJxnU7K2q",
  "key19": "3nQCaNRmQSp6MnrzNgAPHfH2QAxvFd3hNBihdcShv9nQZxiPY9Y8VH9eyWuSwGDRvQmJiFaXNuzQiuLNUAFhb1im",
  "key20": "UHHDn3vXXeezaG7ZWtfaf51wNtQ5PiiKzpU6YqUFaCSJ1kLi7XF1S9tyXPaYAoDPrppqNhLaq3Pte97tQj4AWje",
  "key21": "3JvKx4t9ceajZnR5r89yeGNmyR9qgfAw8jAmFYp27opFwoYYFLpZ72G6WMPBpBSq7KpjokdYQbSDAzBe74o9bFzf",
  "key22": "2rHwpCQs4rLdjeWyz3d2otCag4cMDN8n2uKoooHqiBjLur689bELMoLDPjg62KtmuXv3eYDvM6VFCw4MxMcHdbKR",
  "key23": "5fZvP3b8DSay9GQRXTUCiW3ySTHn9DUVMRHadwv4AcY69n4H9gjoFzNEgKJFUVv2mV1gBraDwdJYCgFefoT5iLY3",
  "key24": "5rzxbDFK3tAnsQXHFBiSxDpFbMuUHCTWxBqEi4TeGHrEkdNSpX27CfMJCdFRR2kSBzes6Rchkj9swhZyZ3HoA6gx",
  "key25": "2o56BwQ5ztCuEXNfMxmYCaUNHzxBSAZR2cUgPJLBXWjo3vRLP36PTeuqKtFL8Y7xSdt2jasxmdQuPoH3Tt3sTwkM",
  "key26": "2xs2mcCXtqqKpev5EksvGDDBGkxxTe4D7yJEBf5enMsYHjF9jrzCsQYJUsQV4CiGJPwwbbj1HB8yzRwz2j2NdbE7",
  "key27": "46KkrzwZZehRtyKJXFfXs3run6HbFb3CJJTWiT32CbzK7MyKdrCmNRmuEHSXUwnqpABNix2bKeiUmQCvaPFpvnaF",
  "key28": "3bx3rqmwpnQeaj9vkmQvTbHDXZdeJbF7LKsdtcNQ9zusgsN7VipG4KwoiuAvoXvxxhNdw9f1rgNa46sV1NyxUx7r",
  "key29": "55tPoLJ7aaDKCr3hpxKXPmhczneAxaABQYjaA2Ln45wigFFoEFTfn9PpE4Fg8NoCGozLk54DPMJKpks6C3eXuXKS",
  "key30": "xtqe38ieHceWYxELYdMfKzBbPF8nAU7ehypjFE4EHPomv39FBKjDi5c9aWJym8GRMRq1iAi5mqLsNiXEKWGoRPw",
  "key31": "4ef6mhy7mS89SNSCT9wGRXYFpgPvsVBc63Xsh3WTiTPGrh3u2MdGdRDXZrL2C5i7UE9QduosBQjpijdMx83ur3Yf",
  "key32": "5o9BCZvmqT8d6oKT7UnjbBnJbNSQsLd3EVaw8iXuQjvXQA67GUUcYRkW23gqBPYMQP6HxPR8XEZdimAsEb9kbaT7",
  "key33": "2cH6WBRTKoTSGf42DzfR9egBvwkDdeJGntKLzsfFy9TVjdpUzPVwT3qCTpYLgj1CgzoCnYW3fSGkrpRFBQLDXXeZ",
  "key34": "4C8SboETsM93b5SG7qySDSL2swqtzT1NE5qaDPG9jfYAqbQdeBL1DTwqDQSTMebjKY2h6u8y8HR43FM73UZvXuyM",
  "key35": "4EbkynxcDE213SSKf6LNDM9aWQfguX8YME2xnEBhgzkCeNmJLZ4PgjkfodHRAbtpvDcAD1ctaVY1BMvMzsE6E4gV",
  "key36": "24ivy7En9FQjrRS3vrtAhcudLmhstwqyA9157SUyPvFU6MMU6z7hAXEx31HLVF6wano9cnanFp2qPCEgL5DRGbeA",
  "key37": "RP4mxfyDq8KrH2FpbvupwDq2Fmutt1fSmDTJ7wccSxZuiEe2EWsB6ctuSxYdaEKPbX6mZmR5r1AJ7Hcg6rjX76M",
  "key38": "5V1oN6Ccuw91yX1z3r5E77Us1jdYCbsDqMhsV4otuxdekF79R3bvPmEDGzBXF89vBT5AFhMME1auUySjpfPtJiry",
  "key39": "2WoFavNBEwdj4fT28pvmcD2fgX4DcKKhXwpY2PSsCUVWzzJU27qYZCnUMxnohdkc9mYgvKbJBGcXiEBr6GDczmjm",
  "key40": "3aWHJYBx4vYZuZgtQT52bHyeDPkDxrsf3Zf6jbAHJ9GwvxZ7TyH6nCcuUBDdcuqXtovUDrXNEhqoACDTxKMbGYhq"
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
