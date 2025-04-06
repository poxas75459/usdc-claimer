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
    "FXGEog5kZwT6pyTGsXrY3ztsK7EEfj3fBXxeTeNjs9mrYUCQCWS5Byigq1QiEii8AxDu5ijvQsHhom3Squnbgds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FHdA3PBxv8PtvT8xGe7JeeewwjmeZxrEeoSLWPRLmfFZvfxr9DvcoyQka9nABod4W5kNpVPDtK9DGnPgwZJbAYt",
  "key1": "2TVAkfvwRB9HxBYNvnpfijM4GfWSJKHZbf82Uh7sihnhbd9zPG5z5n9zrPQnjxHCyVmF7S4xc76pi47LEsCGkd6x",
  "key2": "5tNERtL7o6hcN6bQu8dMi2nwTTjz3qbEvkWDHuaFRMBa2d4HZYpFrA6Py37vwdSGkNWKwuXovrHUEVPopXB7mL53",
  "key3": "5PLMdc2Ftfh3CJZT8W7Sjygm1FreHZCY5F9n3afYwD1muQy87f4yJJiFdL1RhmneKwcY4ehheEbYEnuXGQxpxFhW",
  "key4": "ttBnGvrHyW1rV3HXt8nwUvp9a1yH5pkhqVw9uCWRW6Cm5X4uUnU7ZMhErnboN5bxtH6Pb7jLTeEyS65KoRisoo5",
  "key5": "2i4NMhivKDWLezSQTLo6QodoAAfzQ29HmkM9nGg8Y6pbVPeQXxJJVqFRhxdfmLRiiQGs83mFpa7PFdZnTwxVeiHS",
  "key6": "5tjT91JmBbVT5drwCu35irbS2ccHwnddET5M7CkhgQjs13Sr5eRerC5vibAajEEMy9x7vFV9LDJNNrRS4ZbJuPih",
  "key7": "38gdCVeq4duidC5WBzvxP9aX4LagLHn9gGxKpnupY3JFRESeaBk9xemVrngZfizMey6UwEvxLtYj49DwXoVWFpAJ",
  "key8": "5E1qZnRY9r3Xy42YPBq2zSktvU4maVL2XTvTP1gro2HAxnn69oZErqe8gir3muaQwcSFAM5pvMqJ9KfyAqFFGUjV",
  "key9": "5HPZfHSeFBXGhL5TBDwWvEB9JuG3SV8sCYC5Qtd3p2K6y8FMM2Q3FEU59zWJF3b7x54GkNhBbEcuk1ge2FHSmBvZ",
  "key10": "B2YAW7uay32vNNKaigUgQammM8KUGiA2EKaiQCyDrPs2UDNE6BiwDdHKshZXLvMNSuLp8zCv6WQGsYw3tgiPenf",
  "key11": "gUNsuKKCwD1LSpYe2a3smx1cwzgFGhM9BsaGfDsjKXMdKfKBRpyEKPDz8N1GBcXJn2atWdHbMvmc3D6QnCWSSk8",
  "key12": "4PYSTEe2uRaBdSWtxivtQaYRUT6Ez8tDzCRQyf3VcQWVXy4waT766SpMQ4AnW9qN49iRyeFQ4CGJixBHFki2xGxe",
  "key13": "5AaCx8W1zasLb41cmy4w95vkPkNBWirjRCTohW4L5ny5uJCe7iyJRcF2jjkAKxyBZ7GEfy2waiEG26eZm7TEEKVw",
  "key14": "2hvbESrz7eYfqQkgMxMwvrtjtLWKuqiB6qYV1RZA4aRaGjUFpWHw9Li7W67tdoQqcCbCSn5CQW97UABUeBELbC5f",
  "key15": "4J2MZDqUy5XJaNDnnH7eaT8ahnqhZey2ayNN6RbMVwTk6Se3osyp1wW5NETYmZQWdm5vemd4MLBMWXpFQR5z7vdn",
  "key16": "5ZWgajMbpW73GE2oAxqE43mRHmhMN3aMzPakdmFsL8vGw43KGYPC4Yf8feZ8BmUNSJLWaUoEhndBvddP1N4TJQLJ",
  "key17": "3CUBEbUhnM79ETa8f4NefZwcj1CYgVMWqZKWsybNBGFsHFfdMUQ67PRQR4PGK8uzL6e8sEsvwHBD6u8X2Uwc9xJx",
  "key18": "3uVNbBPwmc4BhL5K7JSgBDh8yES1s3k66PNV8YC8N582ALbnc3PhmYWsS7EqoZUkQYvKWGJcXs55vEkwAh27BaSM",
  "key19": "5K68JkPiph94uiumbSD81UGrc2NBQo9CK2ceiB9Em8LhX63WGstboscbhBN48rWUXCaQp3S1ZsdXQxRWpMeBGiTY",
  "key20": "4UW8J2H93RHo4LCyK3vNwjNPrXm9ZNjvAmDw4oXATjyWiKtqXtFVHexFMTk4MCS1Wp5GS9xP89TaP2N3bh5e5yW8",
  "key21": "3zQcr4fUihFRnsb36UN7bTQSbAQ854grpfs73t8QVkrvATLfa1HA44TKkimaxNAEksX79cCHe3e2B1TtTZufczmC",
  "key22": "4ozJV6gkEsS6LNgjSTggdTTBT4d9cZRxc9512Ag28noanCsPCcfb69Wco1cpVrri4xbD7e39P8Nx1RVro6anf1Pe",
  "key23": "4pR3P4zHjnHRmUdhdnEY6YEtNiXt45ePx9btPuRpQTexitXXMHtBduJ6aKi7x5NVhGDt1kiGUYU7qRbDtheDN7Ts",
  "key24": "2jU5ErnYnDKUk26wrthaSfSjBiyYLquKapFjiMcXpw9CAHzZB9xC8m92Z7btse8dny4RTPgetLkFXfCcZM88wtyo",
  "key25": "5fFgHadW3PeFBqFWaEvJvRLnwzxgeG1HVjmMz5UN42oV5f5qPubWdqjwmrnAgP69kyFTPNK9PYbN2Cz8kyCbqTrG",
  "key26": "5jpcrPGzqdFcXGdn4xV5pXb8DFubi1fbdSVrxAaCuPKTkpijtiCAEb7bfWUjqPnq2ATeNBhKY5UL4TwEscDjiLih",
  "key27": "3X4WopTEaGWd3DHx9HwqFM4oEY4tKkt2cEDXXW659PN6t3txEsHyVJKMRF8K9CJMaQ1BTsUjsqWKW5VUYM7JnEwo",
  "key28": "2Ko3UdKFgbGYQm6ttvmWyQCNEyFCFW1zNuR1N5UK9NiYdEezWSmX1JoKWT7s3gvkFktJuRC4isNGjXLXRHwJLP41",
  "key29": "36TxJ4Dszodrb4EXfGkWgtRaSUSjQLeHMCJk8HdhSWZpKpWKb4yAApzmSfVaKyhYdKHMNz1kCMuosxYyzvMpEkuM",
  "key30": "54XN5soB2xkyWfN7SbWCfDoMFWWMVADUM1tTrrroTWBfFCkn97ivEMJWPhyWSKH7AwEbMJ186YjydhrZbuGdgp2i",
  "key31": "5Ya3BUuPqYsimgGHMycLmoWVEurDjjb7hMKBF3PNxMStrHcafn5952Xow3QzeDoLToW95hX1tWc42VFZCvqoGiVd",
  "key32": "3yF9QRfFvrNZygqgQtC31sA8UPsCnLNUQmHUxGWfZZB1L9UMxRmLeQ114CXJKVh2974UMqfQR7tyqweHWEC7BrLz",
  "key33": "37QTCnLshGxVA7M2SSwcN3Z9F5kAzcASoXRNWLckeBAiwiXg8xfh4x4qKmHYB15KShJspRw93jWDeLcfrj2jH3qw",
  "key34": "4XHb6zPD6hPZ7KYQfc229jdY38efm5Q3jcGzK5s76D6iga3LxZQV7YWwc7XJTifhBezGKFroS9KaiZyAgdnyzTNf",
  "key35": "5vAX5d2uwPP9XXnyYLPwKakznRY9iMX8bgwyt8SJb5V7FMw547ziMEH2LDMVajn1RmZQ2LfTq3SLaeawWJjuNj12",
  "key36": "2WF8wmS1yqTvhPHyWFmjWyiZWF7CgJNPEWYCAgS8zGo4WQHNCwZbrnsHpuyQakytv1zMQr8X5pNod6SovRYBFjvL",
  "key37": "36vDffNndRwg6kuL5fu7s18QWc18GyV9RjcJhNP8EkTxk9gwbn6DH5CqdeLonxZyZFWUvRXsZrP6WZogndiST2bh",
  "key38": "eCfzf3Lj2nugdetimK5SDcb73hBuZmkknWZB5mwTDUb97Zo2JKupKzSWcwuzofYCTFdPUinR2wicR6H72VxfbT8",
  "key39": "qnEnStQMueeXPAxrrS1k9nVGEQtgxVqdJKgQVtM6r1QqwBRULHgoTvmXMX9iL3gPaGG8hx9QEeB9wCFXuMunDKb",
  "key40": "5uTBRSP9NhH1LM3Wk6njwuS3TzeNka4jb9ynnCoJTHueB5AKLb1d9fbRsVfspGogNCHdxcVEmAwwR9WZWQ2E9FaV",
  "key41": "643rmTNRKzwPyeba5CCcEea5q6F1J24EyzuJqMqkp6pTnZM9YqTjLMrkmNgCWNKciH5qn96WxVzBeLScaoCjN6Dz",
  "key42": "4fTXFozj13PTMzhy7KgownYDrWACRbpZz9KapMT9gr1V8vvu7HQbtE3DjU1F3Z4oKQbWyVxvr25bwDdgo3QoTFXD"
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
