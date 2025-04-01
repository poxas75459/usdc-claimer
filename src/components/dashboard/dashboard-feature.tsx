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
    "5YhmnLgTbknFPrjJyYbBzX1WUqgsamiZ8vYr4cwfePGsDC6frvVz4eXdK57NtAUQ9NqibypYEsLwUqHANjm33urM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51jugnuWbrU2P7jJqUwwpiaenQyfyYT2Coe7akA415jaY3TDvB4519ZF1KkrNhmr96qJr8oU8zvuzGAaprAAWuoX",
  "key1": "awvHkjaT5eENEgcv6MqcPN63qvqx3FJEyiNPVr9nyFaYWfpa5Xcx7oJoDk6bgNv4aHTceLygRz1dgGDWWdNXCjx",
  "key2": "4MMGn2EstdQosS6xPymqQthrpc7gXZM3QkrX3RtsP1udxpaFzcCwaaQq9GrdLt6PnFtQz2mmfcfg36HfbVVS6Hy2",
  "key3": "4JCi4tbC1UEQjm49nESLC32DGDmCSqGWvpE7aGpGEzAPr9NWcnzT6XBhFz3wQhgn8MNJLdWRzhTJKnbGCDdxTvaa",
  "key4": "3o4SfvfdbaLxi5c2Nime8xnXb5SZmAWGCQFAyrhwRsnwY2j9AjFTMgWekLrh3LQPx7WpLaJgZy2fZ7Zrt9qWp7T6",
  "key5": "4ztgesNgjuwYBfZtjNNYQy45edih4stkueW9Jqwf8TabKjcT5trxBEKEDh1mVsa5igcKCLahD7zCw4aUc56FsSSg",
  "key6": "32rrvGtuGCuhxxPq4VLD7YQZjd7P57J6117QMTr44AS31A5RTjdU7rdtXnSyS93dqy352JgkK4Ye7MoBuiUDtWAF",
  "key7": "5hGhndqHh6hTXbSMd8vwqxcHUQ56SEjVyddtXJf14xQyYURdsdja5Z2vCcTEyhhMkob9srmxmSNwKuYM9Hrt96JV",
  "key8": "zaMrLpf3yK4VrYa7NxWp5pQQ7UiKK5hZBTUgit5nBH5vr9nAuiPPsZJiPXr7rUoDPjQPcb9TLS1vChG4uD3X71i",
  "key9": "51eFYv7wLxseHyr4UDFZAJoz7j8gtemSu7ni3pXUi186brTim1xGLu1PbyMUiVHxfKkWRTBe5Pb5zFQyX7fCwfBW",
  "key10": "5q73tTo3kpfMqNFDtEi2CXDQUKQ51HFkNVTtwYVS9J8FALV15eVbRChpLpyCB59fr23nXtPDjHosTnUrQkDtPyZ2",
  "key11": "2KVhLnkYVW4fhu6ZhZaT1LD9XooVbBNSAcrD4RXCcnskhma5k4ZDG7HGHUUgKAYGPR1nSTXz97C2148g87NAH5t9",
  "key12": "2uuVzwjSv1PjH7gHPGuuo5sQHRw5gmRMBhLAvoSXyTQp3UAwM6R8PdVkbxaKQSw9gBT4xWiizhFK1SfmM1p7iZDt",
  "key13": "3vUcZqKvJPVQfiXazLmeFzqdDJMffuTqDyuQp1ApvDn1bDTTPat4e9oUn2zQgRtTMSdy3PePbw3rRgFpubyqmo1x",
  "key14": "4FCYpuwan52mQq7bhhFzdFUqFYqRra6DzYqYXZmm4YSh87FNn8UwZCkGKu7rju3CQZ8ZwVZ9AhAZLEiLxpK5hpa9",
  "key15": "2VeeUsLDiKG8rwHivejqSAQMU8nzTLtt6rFPg3ieskxafwyKHootYAmsiXugj4umUe8vrnpYTGsEkFCF7Xne6FLF",
  "key16": "k7Qn9gNKXgafgVvXTrYhi7cgWqGrzxkeWjnNDnXpa3jGBXjq8WxPEfB5WiqzAirSrFY9mAGbCQ77ZRXXnVU9TUc",
  "key17": "5Fuph7EiCeu4PwKDPPNozZyJhMPZogQePW4Gx4PxdzYJ52Zbyc1PVRdsCFuPgTrMhcyJFKi2iYbewGGvBZGunHEC",
  "key18": "3iCSWqtGznV6Y3MZymiidnWqKnTMW1Tiqraewy9wjSyox7321xXdHmc6uzKNvwzw8Lucikp463jXdDvFsV5nvoZX",
  "key19": "ufTsbTFHZtZuVFjzMdSA35HWA9r8wbk8n5d1MyFZLuwRevPyrFfx9658ZHtXHuh1DZgtDQgnrR5CBe2bnJvRGaP",
  "key20": "2nogxV7k5H4a1XRfxJWs18rzTRoH4498BYLUZeSkjXEy8SmaqsV7GCta8mJydzqZ6Hc3kuqSBLJUzF4HweG5YabL",
  "key21": "d2y5oUpww4ppKu7NgCrN9FZNGLFbayRNEYrQzJ7P9XuZMbNJWe7oxTfQ4JqLQKHA7m5Aaao5WPMZNxme4gB9uiC",
  "key22": "2wzTi3ysYxbKiVhoChJ4NWqS7qMrbW7xCCNDkYzQHw44erEqGYvWoCPtiqwGjRTnHagRt2cvdioNM7yQ3ajB1khc",
  "key23": "42KqFmSBu5Ga5VHs8iJcfr2SYYVzXJRJnDUNXUMqQC4NZvVDqj4zHRAMaWJYbuwgLP3gahWtPW2rHq7tA1rQ1u35",
  "key24": "45xEuW2x5uH5un7WAM9MibjvSzeVcTebZ1Fcqoz67Q3HKSd9mM5soWH2Ubid7aJeCYAyaCu4kr6Z2sW2bPNFVoy8",
  "key25": "4A7WvtMk7Vw9sd6A3wtoueE36jGvqJpbtemsaLpGGhYVJYVZrDNGRccnRVY6knBKnRxe8yk1XisTvHcLG2XE7DXT",
  "key26": "3YqDkpK8gdPBYeBpdYLMs9xT3xEGr3sQW6DizCHiBR6KYxDuSF6rNi8rj3w8TQZWXBB71kAwrAwGRhHSrg3o2uHN",
  "key27": "2TSDffADt5ebCjvS4JvQem9RhLPspBiiv7yshPgcjc6dkgg9WsZPw3BB8TZSRnE47woTgfeoLyiTyaT1CKuX8Hqy",
  "key28": "3Z14FYeNQufciWBk59uvNB4Go8kpe3gTNhZxkxW7xh7G1YdxKN6W8ua7CLUg5bmUsuTayR6UbjLAWrwcKzvmXeUV",
  "key29": "65dh8bZesLc69gxA7LT3n8ie5gi4hyRiK1N6tsdtqo2V7ZY8F9Bwmox7n6vdVoCYhV1vNv81uWVnaBUSDHfra9jW"
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
