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
    "2LdHArwnjt1TtTipsDj4wNufYzgyPYyiqKXrpvXdMjVKQqj5911GFhJrmFC9a6M8vgRGMF9DiShjsTSnUAp5M2Ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qqNdrwYRxKKCdougKWGT19BafSHLyD5SzPAKNVgnRRuW5NAqkXphKuzdtLegd594GGkp8qX3worKhgEyoP5CXmW",
  "key1": "3DW6YPx8K61Jk8NPrQuLijXQ1HLn5BBzqvXsbbo5kFVrUuXAkLGHsdV1ZqZPaDWgMkfCx4YMF9GV8w2q9oxS7uer",
  "key2": "2LbRreKeHDVX3akFEL188wujpJshYVpTC3yLq2vgPy5ZVkpiF6tjep7z7PjqEUbM3bYhnGRPsQiy8kgtBCH2iZjA",
  "key3": "2EWj74F8Gs3tzdyPNJTTHJKUf8FLq5fcPWY5wvHkvfVQ2KLb2PCc6uhVBDCHjq6tdEQUK7AgH7WCGiBbuBeir8Dw",
  "key4": "2jHBySWr9S55TZiwboiU2aNGPjRFp7rUqBXhaLdnm1F6n5xsxQT1XKV2xrgmfPyEk4RdxfTw6puxQGJweokT8sW6",
  "key5": "5EpYbZF5MUX89jAwUFFzixq8KeKxQSbfX8esMVQEZuMyy5wTyMdWhrvjJN3m94w4cJgBuhDE6rRa2YU14MhMbb8E",
  "key6": "372KjTa8XeBh3SV26qkTpM4Am1G8hfH5zK9er1BZ9VmvhgUF8KFwzBDv9z2JD81yrDqLKfoQ4RDZdNiGyE6NA9wC",
  "key7": "3fTtBCY8cMG96bvZq3xursq6Z281QEyyaogLD12MfWt29PLXZz8i7bgZzmaacEw8ohxAjoRABCXzcLnvyoVoN7aU",
  "key8": "3GyJ2MwzotMYxpHRsg26H1z2kYZ1PQBJbDGeBLcjJ1qMToUa1y7yFDSzoiD1rr9fzpnbwQvmH5TwcCQKy5QrZSzY",
  "key9": "4nV22H2frFhAXNRdv5rMvPMd9vq977he3uMvAV9vkB7k94PGVL4q48zaWg4WUwoAUbamZnL4gkoxSs51oEz4oEF4",
  "key10": "3yu3dmowkzze1rYcr7egx9dKHQPzgBZdAKd3ux3zGbaPMtmY9rZcLepdHXrFvZN2L1zK3k7aVpec48xZkekhxYTs",
  "key11": "2NwStmcSBXK9Dd3zfLZVdmDNSBZBoRVwQU7yBvtsKjvrfNHb9Amy2r2t5xY3wey1vZ7KqP7bidur9J7AsgG5r24P",
  "key12": "2R3MBhdjWSnv3btXk5JHP853zn3DuWuGKN7RKDfgcXHnZBo3YFBjs1HcjiUtouYrivxKRkHvWCUsXeWga4ovxnYi",
  "key13": "43MEHxw5bWkKo9TKCH5vPLG7zCCoaUr1ytSxdu6iMeNabFwUmrvsBJcmD1H65csHL1moNGEx6CL1hNbD8Ysqg981",
  "key14": "6MJ4zP3PX3KgfNygsWg17RhPMNBHZaqjm4zU87QMdXrWwGNTt3cKftKcRNDcdNJJaF6shZVkLVXNNK7aJgHDRHn",
  "key15": "5yLUY6F7YbuvMD3JiqPrLPe8u28FdmLvvH8Qwgbtygf11ZRiWdiAYNk3Rwqg4ZjfTnLgsLxpbk2527PajwGDyhdq",
  "key16": "64Ht7cnwKAJHD1QHVkiz8pJk1LCt9K5iUhsMVMjBNSbnyzQk84ock2mwtsPv6MeiPxnNhaqFN7PTC2WJcffqEpoW",
  "key17": "2MqWYFehit8TkgR7eW5XYtbm3kHUcE4kGB7RH5mw9J2MBUcaEz9b1PXNfVG8dvefyjFqYmzQ5NpszRjAqgbiomAq",
  "key18": "5oUxn1iui5WmYd4seiwCovGN5RSAAvhrrcKwdKHfDFRVkB7z3z8U9RRf444Yy4vTjLjeMyXo3mabWAbSGtJJWYpy",
  "key19": "3yqpAb6j4xRzvLDWdwQtDjURJ3DpWJZrM3AHeYUbBEQWPtMNzzf1znf77KzDmW1Gu1DHUguUAdEpoE11Q6UV3ch8",
  "key20": "5LuSiBwJu8EQuapUN6Ps5DXEDduz4TTpvcGmPGeueZ842cnACSyQzHBSo8gdVL8cM6Kac9AmyQtxSVhJAyKtnzP9",
  "key21": "4teQqFQF5XHeJwrBdYvZpSFBgiBH8Ryhgwia1cMTwnPLeVtLeMJZHUi6KrmW19MDF9sghskbf5ruM6a8HYTgCuij",
  "key22": "4Zh8fd6X9kEnyywzx4dbH1r3h3DpQATPpdM7GkCYmRYH37jJmCBRY28wmJanPnzhsYPPhbRyHr2j5JvL1YEvrvgW",
  "key23": "3W2xfd1LhQtBK7xYB3qvQzcTcgiuxkxY1YzLaoq7GyNrkraSTcY3MWbNx5qSPi5rWSUcHuZqJR7oqrdAkehsRpyn",
  "key24": "3M9nMMU7oYVJD43R3CaBD1pkMXBk6MEZ2qMaXnAtp9XTdBfYpVD6JDypHhZchTSVHcBXDtGZUxbA28KT1cSEh1KQ",
  "key25": "3ehQqPLZZgEoE9LpByT1WVTrQKYb8y3FxNviQP1qfkMSGxpo886DxvSuzFW5qHEUugEX46md9tgcyguE9DodMVzx",
  "key26": "4tq1fYqmqMgfdhGr6TkJKeFsZSaCurVFGdZNx5eTdrdeQaXqAmXX6F9rNTKVCfbyxZsfm7zfwLZKFBDnZdbjLUZ4",
  "key27": "5a8sPiu5hwZCkkJ7pe4yusa6dHwt7fjheYWQQeo1vyxXNT3VHfaAEL99iivA8eN3Vtd4dMYVT9c9UdEsGXzH2KYV",
  "key28": "YeD7gWMmUYBKgDf488Y322rBeijSH9YWeCqeXMvw9pbkXZ3oRhUVNF6r9DzioxxB5hMynfb5vyNL4mAxH4GQakJ",
  "key29": "4gedFaLtJHoW7ynvjHcrypkiw9cZ988K1PioK5jZAV7yiS5TzaZaH8fb1FWjDW6CU1QfYhttrTczBvZYzf2u9Qn3"
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
