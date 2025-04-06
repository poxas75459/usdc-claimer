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
    "qDxcmW6HrGYNihG9G7NuKxnGEphL6yxorJz5A97FR2oyuWRj64gJzMwR5PHqD917QAhK2iHBbn6PWVjeWT3dWQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pn1KPjuVVcSmcpyaQRJoPWz4bmQJrefN7AkQza5QEWxnCuEabdBbV6QUq6nXwWzzzTknZnWKc9gDEvPo7NJU7Y",
  "key1": "FfpTUSh8zb8PNKWUme7sSjGq4ozKfnUZfDGvxSfrWpCNTuz26tcpYZA1N47P6LbWjRHGhkBvx1ZbLE2ZJG5KSza",
  "key2": "4Q5PUevAFxFxatdNvq2pJyNS2MrGKQk5s6vASmkbQNRyLCcAcUEHp1T5ArmwJ2qsDpoGV3uidP61vu7198F5VjVd",
  "key3": "3nw6CJcwihoX28innqNYAia8wTAcEUbNGt79YJeumcvViJjGZNkhQUoh8yuVxH6Kd71bzpiBxpaGeUYUFbpX3XFR",
  "key4": "3bbcyU21Gt3P38YUWPXxrjmQRCvtoxJVpMFRWNK91M34AhwFJiTBYKq3r4WdAPChB8aCZZDe6wqVCWbguugpndEq",
  "key5": "3bBoGpCd5jCVwV4Pvjvgz1Kqod19t8GV1z6FpyV3xmG2KCLvfZgkubs24D26oSvN8tRGgCsRbHFoef8musun8RQ2",
  "key6": "NXXTbToNgpJ8fn1KaucbRDse3RojRQwfRie61R5UxoV1euyHsfhWbmGS3QiocBLaC7ZoLmsiqspWYbgvdBDVgri",
  "key7": "3LQ1YZgb9c9aEyALsnbziJ3BQhkmEqhAVWQtMLiHU63uEVKQgcoUwXurGeNMNArKMgnU56MoTvZRPLCGS96mymej",
  "key8": "4s7Mk1HoGwowxqGhvKV2JiEwE2iG7yUVY5eo6B2M9Uy1t8fqKHezKu6itQWbokPgz6fPNguCPNE33fTix1PkWpQX",
  "key9": "4gSinrJQoBGTqVbycXnNoyDmsQdzmooj6ZW7wjNhbUfVdPvZUAjfZKpavHTZZqSUDdup6T6dhshmnQnLWa4GVK6D",
  "key10": "3LfP2rUNndrCSPrGFyiPU9XSgSoayEbpUhKvUS9GPdiEsnAJ74AwNznkecaLXXQV5o5UVpsiN4qXVwMLqHuUt5cx",
  "key11": "3ov8SVY3M3kQ5AL5VJpbAobjfoMRBZ7LnUF1f18r5yK1A8iLPCf9zuLGq7okVxEMS4E3hjzFFFX3JqajyUmjAqxC",
  "key12": "3FaNhfKpgvLn4WuQLn8vCQAYhvpumFkVQjYEwmBL7reT1jXAD4csrT6snRHVCZiQmYJPCTXViZh9jV2rcXvw5Jr5",
  "key13": "5a9gxMaTVKNwubAqq7GVU4hSGRpHNjgWSJVKJ8b1NfuJPWz5aBo8z15oYHBde4XtoKjpvZ4QxmxSaA5WFjvMtPFK",
  "key14": "5coSmgp5m62dRhsieqzfDfnacpv3A6UUt43PYMhhFaWfUTnjJRBy45kJfoacnJZvoaHj2H8oEmZkLwYsvA1h9eLS",
  "key15": "4yq2D5RbrSdzjjzhLgqeSeBSSLhWxHt931fBSMXWnDjpFG3NRJvDmkUcm1CYxzXVsmL4Nmg6EsN6UxRZ234PuErw",
  "key16": "4YLQDqLShD6XjqEQVJDKK9zbHyPMwvVVDZ8jvhEFDfgbvLLs9NdyvHieSFGa7WZmcTmTELU2UoucXLGzk64NT98M",
  "key17": "fGoaqK2babxnHYxDLqhrfmKia12Qw5vokJTMSRX2UYFcX3KawSU8whDutimyh2Zhfvqs3ovXNiVfCT5o7eEQZRk",
  "key18": "47xKx9QLbiut836AuotojNhson8cCqocpSjrGwtYUibvjx4c3ePA2e2sdzXQvEHYeU1MbJZzNWLrY68fTs9nTbBU",
  "key19": "37gNCq5VAKw3nzChh5etq9CPC8KP88CPvgN4DRVu46BtxngcAuFfAQaJUFtyYBgzaCH6y2oMwk7Hw4ckqZrZau3r",
  "key20": "3KkQF9jTF8bism4g6GpMjjoPk24kkPmw6o1nJfvEpyWiaepk1L85ZjM5Zu2jy26uz7ZjzYvZwcVeayiUNMx8bmQR",
  "key21": "2KqKxk8wFZt2LHiwZRsoVJbZWTrsrqMvNubYkCobZZdgJsiNtb6E5d947WCXRYP7xUjdZiCrqrBjxQT6EuLAr1B2",
  "key22": "5GXtxMhN4i4UwQ9oNxSwyNsq6LTTz3EZJDq1H1K3HU9natr4riAhxNpg1nmKA2AWYsF2aXTE5U6PfF2HZGG2NXyy",
  "key23": "3cKworivCSJ3E6TzSCPmafTo3u1FbxVoJ7wG9e1svdv6NALgkzDYHe3FBctrbhGj5BKrJ3tGjsqdDrafaJLh1aSa",
  "key24": "3uokDWrcWDnvTuE84192xtE4xXvazW9a5r4HmK8UH5ySC4cKKHf2pz6bmRMznnkZRw7uGZe1Rde8DZj4bdBPMYWv",
  "key25": "5QzjGfsedeSr3cJNeh6YrAXm6pWygN4HJsr9Go54vtpBDTCJWMC6WZ5B78Aev63oEUdzdQ2usEcfBkWPHSZPJ858",
  "key26": "3MTaRFrakTCWnkP3r7MEycnh4WSt9oKCrypoQpNLuUwgeQFaq4GugDyzhJSi79zUgGpGnrnEp6Mw1X55vZ9GD3Wc",
  "key27": "2C1Y4HkMebUQr4fEVZigXHqi4Ng92eGYdjMEsnCjuuZPcEUL5MANyhDWc66ggixHQtsF3t2qteAwXRha93pU4Ut2",
  "key28": "4afuambx2jdQXEgSP4WzfQzyxR2KSUFWtEr2uncciQiQv9now9qdH5WLdJNgp7R1aFvAbHxRgVoYM9rc3RM11b2F",
  "key29": "2t22r1KEJUbxm1hSxeh4Au1EJBkiTGQ5rqT4JmZGpNNE39pKfSr2YaJUc8jaRpXKV9ixH8rE4GfUKR9UerDKqHZb"
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
