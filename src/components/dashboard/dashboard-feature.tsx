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
    "5pGUpKVXqSvjNwGQAQKUWfKa373WwhcAbEivqLzfe7xw8ihYMaRcnyLw3jdLMvny4pZyVePUPrkqgaTBjgozaMN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oTx7HGfAjS8cRrsEJJFLN8FnivaLuEugC86ShxAVzt1Uccs8xsGpwY5ArC7R8s6JAGffjAQ8tmWzo4kN7mtyprH",
  "key1": "5u99RVZB2dBC1DtyUD3PT5Tu6Tnmj6WbEaJdU4xLXEq3nCkwCJGfHhsx2hoWnGocnokX9CmCvUzWSwSaQzbWhLJ9",
  "key2": "673jGQGumT4eU8r33PJPwAgZMeUPQuWNSvdSixA7ssgMKSm7ZkxtxYBnXMnFsXnNkAnyjDTQg9wPCTkkFxYg3Cak",
  "key3": "44hioDHy3oPdnvoodAvE8Peihx8nKZZ4rLbWNZm8XoFicqUgVsGgQMYzDyfJNk3d1Vq1Y6x1TbRMQpcmpo3MzxyT",
  "key4": "pzRi9bgtR2wCEKMcnKu4cuSwXzS3Gi8b6fsrgQ3tTUKDhdEySc8JokpBwpv7HWgmHMAZFc5e6pCwpDnDLj4NRt4",
  "key5": "2kdygDyiqHguNBrYCqPhtdaj1LFqARj1d65bXq6ypsE6ASEpV5wkiMgnYkVYk7Kq6jH9M78KJnhZQoi64wAsZ5kH",
  "key6": "3oRSp6fXvq9JL27SNWpzvAmhk8XY46XnPDs4tQGztuxt1nMroVjp5NBdfJewfjFaAVmcCe6RithKoD8e2wrJvWky",
  "key7": "5qTSzkZyMjtFjMnmav8udq6MScHZqQUjm3oZ4dxKCXHjBwwcgy3qRMKNQQQhDJQkSH9qbz9fprkTqbd2fkuHtFJP",
  "key8": "5grcDZp4kGKCoyvTAqWu5HQVnsACyZGVAsCse4yaN2AnsNg8THXBp37JYwLirC1t2ds1hBah2Y4jPNGsRotPnJnQ",
  "key9": "ASHXLagpDWYbw5HYAgV8aVtRwZMz8mr2TSZZr2oi9EjFaYYkSXvwqNL6wHv7gFVrvwMjG2ViHkXhC3UzCJqPwGs",
  "key10": "2vRo9F2g41gWm7jCCms2oVhTgcKkS85GHLMPpUZbXmxLCygn5QvZBgPTrNoa2fBtCur6VnqUvRkGdXoSrvLNSk5U",
  "key11": "wBToZyQHBLStDHkZWDiNaQF9bui8e4GqRE1MEzuUDxpZVvKZYvB6CtHxmQgDk4koFrRpR8kNnvJFJQ5sfyUpBC2",
  "key12": "2HbMhM4JeCk5WpGg1o3XJh7WZsBr45MCzPxx9EWSFVKKNncbx8Bt5xnUMoWxsiTChmogG9w8JDSXtiUXtVVUfZtv",
  "key13": "rUSxrtJsSkix5qH1D5HDxMw3VPFyrvKS7dkGnz14Xc5SSxPAtERqDrtNeNuwTgD4H5m1bDKWxtPMtMACVceH5Lh",
  "key14": "39P5LFXTPgP7rRVAhG2K4Q5ArUbtArYYBg6oUNnBKvbzKL99bJJsfRhU66VsF4ibc5G4GQkUzxwJsor6pwHV9muB",
  "key15": "Rqoud1Xvdr3e2VW1sjvVjKsAJHhWfefM1ztjKupgLov5vteakvBYfKVynnurBzcYNUoHN9Lqy49K5DtVBLe37rE",
  "key16": "5hTMjYrUEzPWdaQyzpLYerYhJx3N5SDN1N6WB1LKWG4S1dorj2BgL7iZynUCTfVQjefvsaSwvipHfz7e4usuZrG5",
  "key17": "3QhRGp4XGuTCKYmG8w3LtKva37vNtej8VQUSiJ1TQSSaXTNGSXCjbtAkitmdadsp8UsczLgZvNZd3au7UABc8f3P",
  "key18": "4T12MTWu3sNownmRZcikGJu9rLrCk8kuGz4be1bDWjHz6bRbX6QAtdQb5BxvoSAHRSV9FnxKFpZzmrHydb5bicYT",
  "key19": "4FtWfGygSxnj612iW5ejaaMuoj7BwW3FJcRUE2jLmELAD29U9b1obzeG5tFWvKeRfyQB64NJfgLbUfEgRvuAvx74",
  "key20": "2Kvue8886bNxkA9DQEKenacYXXKsC28jC2rHhzHQYetERAhgMxJGqRS17MsGmRT5JLPDFPQBQRKYBkAFJdXqiL6j",
  "key21": "4uQqKVb1UsK65r9MrZFJkQsVQ8Z5Hu26NLafDWJkFLdVGgevtpUGuZdQVm2BPP17M7ryKnkKFxKPU4LQCarCW89R",
  "key22": "3MYP7aFcH3xE8FtqqY8rJRrK98mYnHaxYkq6u9h7TC3jiijwxEBL9SPeok2nrgtVXfzi5cJWx6WvnwovvkVV2781",
  "key23": "2UAnwZxLycnkW3tWs6HCzn6iaxE7qgjrXzLSGugqoupHwP32nTf8gAKDSyVC5nxaMLLHptrLENHBCJXKaioCvyZC",
  "key24": "btYkdhdxvJxyefmBpNHRifKUGQB4Z1AqK6dUbFtL4n641UdNuedXEbqPaT2oqgBk61TUvsBzKUbVrBaARUwndbj",
  "key25": "444wgaCEWEG2aoKCEduhDkFLHE23AAqhgQCVdCH93TGKqbphBx6Rj2t7uyiqEJWPbn4qFz9JT5VBUpFDbMH5jAei",
  "key26": "LDkUxaEngruF59GgyUR8uYuzL6ZXaC8EVyUf2xoE9QtLsahR8AmUExzKyiaCcaB53TptGRRUnTb16JMxMmUACxW",
  "key27": "4fMDawfX29xQAFE9MmYSKNUrf3GzFV5RZGbJTpXNu1VpZ1mL2pLi4yXw1muvrdyKG3Fa5NG2noZKfdmzqBhCTTVw",
  "key28": "2EK78cJQ441oonRfWZ9wHuLGFNujrNUFbRdJCTr2M3fbuaDb17pbuBksn5HqdHsDQAFuz3FLSZxzH9x9CHiVyj9G"
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
