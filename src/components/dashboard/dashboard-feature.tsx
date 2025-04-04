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
    "4HP4N3ydyeUA6u9EzpBNVGSj9bRKtahT8UMes2H8A4asZGg5n16DMn3o6qk5ByxmkkipiuCPSXa4iSEfwCihSFNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UyCNRjt1P5XGWDzkgUnc1cWQ1Qb7zcG1tvRNSNB5RHryE21HHkPHese8jSH8X11Jd3oy92PNUWDdUBJJVDxVCzn",
  "key1": "21KtY98gZwsKZzBshUfJpMRvPzioXRFVDo2FSBKUhYNA4wc2LhXKNbZPWCiPHKtb4ujfmJQyLxZHXPtn5hvZrJWx",
  "key2": "2JCQQCg7YbrRGzFcFsDPcGehFMwz5jG8kAeQAXGat7H9taoEvrD44uyR3NGdqopZdnVUFA3RFReykfPzrFX97EXg",
  "key3": "4P79kzJFisZMixajrUpgu85jmDbSCY23928iwtoohnwri93by3ksu5vQMmKx5Q1CumhssvdeuAXkCWtRziEw82Ry",
  "key4": "4xdNNEFrF3kpKMDwEitHQKGq2hQoFu4XEgMyzpFLGV7EDnP1sTbsomu8fj1pFtdAJ9FAd8CUZFSEyDrwfYmfwvvH",
  "key5": "KrmejpgwxYxqawu1k1kfQxVp3zGSwzZD47vrA6WBC2MtANq2jhoKMcyu98VpDuNe6bKmcV4d4GGvGSkunC8Uy7C",
  "key6": "4tTEX7DPVbCYCajCByg1FzswSu4Zhhh4tHSVF17vze3nXDgSJQ42fBr5zYSrmY6Nzysp7SqUtpuCt8jxqurkEAME",
  "key7": "BKWU9EfjaE5FDCt49fE8rA42RnRMYWC4xEcXtQJFW9DqqH6zyatE71rE5Ua6af913SpFPKnAfEwRgqxEAwsxmJf",
  "key8": "59u4GiA1tjNQsM4oRfJ2xsMW3aF4jTffEZokj7fDbVoSx8tbhgKxrdUbL4MpoV9q5tLZGEEaTMnbgwebcjGQmqNz",
  "key9": "36UvKaqENR1q7BPjkjTieWVkxVFDVfbQq4UExJ59rPbY2vxsUS2jPKSapiN28o2KWdnqi7sWTC2EyBVKadJXD6dj",
  "key10": "x2rFaFj13F6eDJf2RF8wGEWCcUHojPEW6V3vw6ohqqsmK735aJ6qxB4EqHTMwpH6KNpPNxNDjhD9veMHNp8Fqw5",
  "key11": "5t31mruv3fa3xybeoPdhrYZL6rX6D2JdMfy3cQ9Wgi6Z98xNAh4xkkz9j4YWnKxPvTFAWWnk6eEvJvXDPGsr4KJj",
  "key12": "5898FZD8ByxkBremaJwzVHLYzB1GvD4ppUwBiBLv2zdB6jrXVJcG4G1yVjonz1D1qgweisLSF6FPwBQSAxPhSrc6",
  "key13": "3raxcMw5pUb3qqJ7SXKbD6zMVgrX4ZyqzYHazYMHf213js54YuCb4yWva5pGxbrsdQti3vWqReCVFpt29Kz9NN18",
  "key14": "2bvUX1Zihre4XPqF7vsxpRb9YvwTTUou85aQaPDHbGuVSpNsewRXfJm8wpRDVitvyQSAwv8jJu8e4LZoWKrxsBjN",
  "key15": "2hMeKuNGjTMRmZXTuZXtZW4cEXXPTXAf6fSrUVjtmczDPd2v4PoNctyunpfvQL29nrW1LiRps6ChsnMD4GqzMuuR",
  "key16": "egaZxfpahrkC4pFYuTFDpkWdFNBWrZJDmKfUw6c9RhgcfQrwo42gtLE4bfE3ipMDEB9XXorsroXEJqG4BoKjFWZ",
  "key17": "3dNrxXagUApM8jcjtzxhpZKGP8hxYkVRm6xowGpKDJVXBTTkWkV8SweB4VzeVuLLKDzwi9cmwhVCLHnCt9Y7B1aZ",
  "key18": "3FQE1jjmczpN315oyVSgThHwXsGtjyqP1Bqtr6Fnx1a5VzMFkh7tkqE4hJf22LbAdGm9RnSCvvYPtcBUbkBtE8vd",
  "key19": "2xLA7UBNjod8g1DCmuHSX1T4QcALxcyfrxaaTtid3TkjMDufGBALE4xfRrCTihuS74iq4rXUzrtCxDaPoL8SquBe",
  "key20": "53tEXUc1tpPuqJL1oQ9RfMFiw3wHorv1wkGhcUvF3XMBJmTGWjCUMRiVRMnAqzQUypXYb3ANka5HUyqrLucxaaey",
  "key21": "4ER6kQ93ygPF9TZsYRF9aQ5qHV7XxL7eftEt1fqxsiwwGCMg2TijR74bnE8C4mRapbZBW4eapjD2joxcMyaDjL4Y",
  "key22": "5MrPexREBMkf4mmsGcZpKwwrYKTN5KbHSmkqDYN8jG9UnVjiPhJgyX7ppohfh9AVBdQP2rn9318hSpf9qZMctyQY",
  "key23": "3hXGJob7ehcpEnUs6vriBX4hfrUigrvr1h1z3NcaouVuLr6insykgpQW2C4634rsL5SNq2YTiEgxsRe4yNNfrE5o",
  "key24": "EzUDkU7LpHdJjuzQjP9HZJ8Ub1vuoXrDNjLVhKpqUJcGxyYDtxwHn8G88iMCVppkdy6cko8sqwmfjyAz5KkXWkE",
  "key25": "3wFVtDWMfvXAEWbQUbBrqS5Se9UbfcYrPdnu8iiCc3gZsFvh3HoJvi4BwHVV3wHHwGk9TXAqsvqoTNGBnyUZbpZ6",
  "key26": "4BgaFtk642L9ickDZtvsdene3N2UY9F5f4VbeKwkeGRSMreFsgdfT5YLh7WJmBhyhHz64VgsVdnCPAUP9vyJcKNr",
  "key27": "2jkhauMfpUEERpVahdcK9GfEAdeApyTVf7jy55YKHVJpNpGroYZmZVdHir6RJm8xZTuiW5zS9EunLRQ1wx4SUGpc",
  "key28": "3JjYwxxzK9HG33Y1Utp9QVC6nrg6rEEZjJf4f5QZ57xFaNADuBqvxHjE6oYxatqTHMNvMHcAnhYJDrpHkyTwaTjG",
  "key29": "vYn823UdZpFM7GocEGy1D5mS3AbFDBHBxiSfP137JFhY31KXLRTDwoEVSLoYPX8YqNdXAUsAzsdeJLc8WZQJram",
  "key30": "5xBs5DngyvD6Tv6divcg7dCa5VfVoKppvYxEFPq4BnPW4snx2cbvcVtA78zdM2kyUUt7MmERayzeP9oYTxDZ3bJd",
  "key31": "6rb6sPMeZSUL7eqngm34d6wAZ3DWA4pPYMPtCKRXgv1skWbEd7zpagRUhTwX8WuX6D842Wrj2rW4tUPKPFExN3X",
  "key32": "43x7NJRzzATPceNDSKj739shEMCn7vM133dpwkKvMfsKVJiNRDTYicJaWtiKTwE5NhGPwVPeh4fYTG4nUVbKc8T9",
  "key33": "3hcVs2Pn8jNVWpGz75gn6ug8tprkE8y9hakdVYNUTaJrbAfRX22zidneaAgah4wWtkxfFGsmC2gAgRdcu8Y1BNaV",
  "key34": "A6zQ6XjHkmbCUVQLVMTQrwiCB8pa7ppCRY8ersBAFX98gBoCynTKYhmsBJTLRq6WXrQhZvH2oXf8ob2UBcTQ9Lz"
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
