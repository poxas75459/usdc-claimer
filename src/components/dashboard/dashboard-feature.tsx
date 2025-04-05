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
    "5DjR34QRsSUSVDF2ExNzmAYrTgT2oJxi8cAAvahjjk9hPorvdDGhM6fcDNdUuCcnEWigtwBRvSHdtFA1z9xQHQb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pP9Cz45JReUbYBswjPWBmFzGBh5L9CXBhXJctFK1KXi4py3M48JT67xZwW6aV3TK7FNFL6AitgGgpUMHMpc7TjA",
  "key1": "5mDFphjXJBgZ6z715hSwtVQwGZuLxPnbVx7ek5wEBszBPQrw13UUQLgjSbXaxqnDELakCUoXf4eYinrpS8egs9wu",
  "key2": "5xp6Y6N5RXZ2HqrJLUfZgCeeUmd6yq1AMY1gVv7sZtJ5onYKb7tiMGajkfsh131YHP5JGRKC1nat6L8N15R6G38G",
  "key3": "2cpXSURhSTqgacAmVF1yXSGoPX38GVAYZXJ3LGWnN8GXWTRBLt2LjTADVno4ffgQ28VJvpgbLywTTmgFNRjTDUUA",
  "key4": "TFQgY5wLWNHBN3QDBoQws8bbY5UA3FRw7scdTqJKNmNvz9VdBZUMK969CxkWeCvMQk8LPjCDjH6pqgUzWkoXno5",
  "key5": "5a5oporAqM1hpDKSSR1EkS6Ku3TfcfMxe95wwHStZR9g8aRC2DT1zd1AY4XCgXUSQsvq1XWntz15treNxpKZWrcp",
  "key6": "5t1NoWr3oCiq3XvwugbAJmqMw8N8HztqbFiUpstNJCLBUVLMxaKc2xQXewosGKHygHrvWbFgTgLtkwPeLfxdsED6",
  "key7": "65QeSuc2SrKXDSM1Vi8s2frZW1i4EL98RshmU94eWuBhDCCAP6Q2TEkoqivRwc9YESkYfDFBL5LvoHqXiUfsAFrv",
  "key8": "2rLYNy7MqWomsgJYq1cehJ5SLhnwX8ix3VfEWq6kJX5kTmSiHcW4Br1CATXj6CCoxL9uudFurAxSvRPPC2NBfTyX",
  "key9": "4L4vyEDZq3QVJgVd41XQ8apdMrHiQGn69AQsgnZECrQNsdEFMBJqBC5rJsbUyfBvZySeAXnSamXRNAVwYswZVnd1",
  "key10": "2a8tQhn7vpyKmptbHBcn7xxCPLJDkwmNLrHAh28aXjKAAdSKPzbks8sBnjpjpcV24RE465F2yM8wHpj7qwwCxiqz",
  "key11": "3tZK5kvPjzQzee8T9SM6f88kQEvaygKb42hkHcsRHVfwuGCZ3imfuT9FgouMdLAd7fah41aVxGp6N23nqZF3cP7d",
  "key12": "525nASbtCbQvf8dwW36z3w9X38TiEsVoH6BKzwEUWCVFSty8eC6uzbpomRmQ7CK9n4sC7HAWBJKRSgqSJ33M54ed",
  "key13": "yeVNHTyFZGGexCjWRmB9sM2TEnonFs7phgHmiaPvBQxpi5yVEfJhk17MaGxRMsidq6ASG81xQDZFo1fvhHfVGVq",
  "key14": "3xZvL1jx1aW11L6cwikivNX3itE1xVfidpmBhKHueY4ihVLfSZSPKDpJPks3eAw33VZo4WU9qT66qBrCGiqdAVaN",
  "key15": "pxsoqHGPxzXjpGkJTKoH2F9YrGYWXcHG2KLP6uG4QTcb13BFeLdnzwA3K2bpmJBvCV1qSntAJV1Aq76tY6mcELq",
  "key16": "269BYmmVX5RYVESTTs4v9H8dEnaUK4rvDZxXhw889d1MDgpUJ18FFn26UPYUjLVgxz9yfNCJ1CakQkkHRFQg2Xm9",
  "key17": "67rYVr8oyhGQN8i4YopdcncpwAuD9Fp7zayDtTbTVnRMP2yR6EigmK8h9vTdUsHnZ1MmC8tBtQMzm6qSJxj6Nyyh",
  "key18": "2vAUpojrSfdNq3rXpR4fmrwBTGeLpToadq23584dH3fu76GTxXos8beyBGZzN3iAWxXYPe9hyGCaF9n4vyuCJurY",
  "key19": "5ageLcPUbjFWTWDez32DUuHwp6pnisR4K25g6KmaPW928oWoUUYyvRw2oXt9ZPMxxNPhAC1NRF87cb3atRZTQbar",
  "key20": "2nrWok6f6ns6RgGzLtNHHkekDU8aNrZ2NfJtkiaTLeh29cGwvBxYS9wUzve7cJi1UetCTKmZHap3Ri42rdEdSrGM",
  "key21": "55Uykkp69FFiv3NB9tLniyoHpMXeAfZLjePwbXaQkirgcNeNtBY9h8Z24o9TzaNvT8Xeh2X1XmjP4ia6JiXvwx2t",
  "key22": "2y1ttWDL5B5NsFPTjjJiNU6KYvAG2bhCYvsfV1St6YBuVeFuB2bSH7TyS2qTaLGqbKkudDxhgLWU7dNAJUgp2FaU",
  "key23": "4wJp7B4tBdGfDEcGmipMngUHS5eiYAJ4F5frkRTLSaFVP7GkRrKGYMUCGULB3PviJf5NZ4EzgPQiAq5csJ4PCd3V",
  "key24": "46yDzw9cFcDgyam94mUX8F3q9Do6SdS5TGY5apfttuforC1VddRUzpCHgqCviZXp4UpcpN6Cxkqq6oUH5iwnSJAL",
  "key25": "cUoMqU2q6yyCUTEMPKNHWxpvkUnqkvrhMJh9dKEgSF6BuaC7Sr7MTjbJzv4HShaWqWJKwAeK7MXgyPzBxPEh8sr",
  "key26": "3amdU8YzaGjPYhsrcDCFFfthaMBnPzkguA1D72meujFFi6MsgkW4S8mYRtXNXyE1KKR4nZSnB5WQMAWk3EYAPQM8",
  "key27": "2uGfYXu8ZYvY4fKhHiZVjLNZauA65h7egm2se1rGxaR2aeesVPsbGgrwRzU7r2frXsqhxS1hfqL3jjjPgiKqeYtt",
  "key28": "3GSmdQ47UzwDH7MBgdVCVcgs1yVgqEowkwNaqpqHoZi7z5yk3iY2cvEFjjT6H8pDepSdD1fERuptNa7cC9kaysmP",
  "key29": "2Gy6DFPYDus6bqFih14XHvZAdNaXRpvKipSUe3jN2DmhFbFUi2bWv8YoEFpKR6g1WgD2CWj98nQxJVb2jwQPvcAC",
  "key30": "58pwNA9HWyKR2xvQyTe7Yyi1Wh84zXAyAYKkrzXHWNQgvAyAr9aKLuMm5YQUDnYEefF9DZFTtnFGzuQzMjfhzS24",
  "key31": "2qdW347a1ka9w4TVwm6exge1g8Q5nwRjHG7AgJyJgAXPyLkmKVU3qSjUXPD9oqiCXmFpLFUSeHFNeMcP8M1evMsp",
  "key32": "2wEW43JnRe5Sf7oisnR1QMX6ShiA29J8kpsqP71PHNyo5uwSyFy7Mu6NqXMmfXvffuUSJgEFGVQ9Ni2uMDPQWQq6",
  "key33": "26uFEbjZYD4mVfUgHjpbsawA4H61xp8zZiwHMaaAcaLizq6RQu99bAFPvbapGnx6T3TyrFESfuTy2jYiVeDqqBsr"
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
