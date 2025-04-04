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
    "4AzuUZqgbFNZ5GuTxsTvVgYg7aTuJwCep733DCzYQcB4Dw7fi5679tHCvsmeZ98gp1h2De4r6pozijQbEG2EMdSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nEngXDbfMcHuRrpNqx5zrSRhdmiz4dKrkaQQaARkNTJzb23pX5ERg5YFwxm2DVrT28ixqW3p9dKKNk3HX8kbKtg",
  "key1": "5tAQ7BN4t8mAqD3hk53Gm65rWvka9trFsAj9Edw8wme8NYhEFnGoZsJrFtjkSsH3GQosLqsR8ibdjsDDrByBxTD1",
  "key2": "527VYwsd8n18WdtN4Vks7tML4f2QuqP7TYHEAcoxynRFzmvPDTnigDjbG83SkeQMBVAitRrBYCcJ9oSRN8xoT7Gv",
  "key3": "3nv4zgjZDs4R4vNpA98bdxSPy73U1sPLvvZA4Sq4zp4xszgmpNwHFieBVfYmJiw4xEdoA5LpibNu9GNvz16w1rLU",
  "key4": "3rMxaRVk5RBtFUUaw7VHhGcE2LcHjixJYHqWPpbckciePP8pjb1hobgFR76HoMFtx1cxcXodyjVFDyZMbUts2sdv",
  "key5": "3PfYuZpwYBzsW2xn3vL8XMdx1KnoFGaFAVkdHz8R8uU9aFHM5eR9kiX5zkoWyAGrABqo9HWDqQCE7ue4CWq9MsZG",
  "key6": "d5prffSzDmnTFbZcPLN74KkmpvP3iBoRLyzZVKZzvaXtEt9JMhCahB1uszU1i7L5M3MkGAJG1ejKZMKTD1DBvjc",
  "key7": "2r1xQRJDpeGV8VJMRRiCX53vq2jhkyi48yygqMPGKZ7XpTjuwrwRGeeFMEARYtt63khyunCBmRwM49aPx2ebBndX",
  "key8": "2s63wd73aNySQy6pZ3NEBaxgHJ41Gz6bTeU2uAAbZwjNqiGVHVDpECbgjpG5VHtnQ6i6dCS2hPoYSzUNPoZm6wRK",
  "key9": "5DFUqyZawKYtTCGA7vAKSjciTFEB4tQFkCwfdGEZyG8Ms2BqtVJtAz9NTnPyPyrQ1KQr93xyC6VLqvLHzEyVkVnc",
  "key10": "5BtXENYRX47hm7jNuGtNYxo57dE8eRC6WvRTus7Kx9KduXsHt15BnRzxLk32HzBivqYMe39bFDzZrYXTViiUE6xQ",
  "key11": "3jWKvzdJX7ZLrwvdpbP2ZdkRWJszyPGsC1obCohigfzNHBv7Vq3UcHfYCoDjXt8RQdWEF1cobR6v4n6GYRJQBSeA",
  "key12": "4aYaghHUxXoXGyf2PxxzgaUfkmDef9cXq4iiPBTEAa1ZE8V1wyewNvSHPhxNLYLQKoNdJb3ngw633kJXhU3AQcVA",
  "key13": "5Hx9xcPrANAexnM5WQAEUSRfz9SeSH6HmvQCPnsYp9qYUmHnDHjCjWjdLAqdSDiDgRtrqo9eb9zxL9fc4PkgaMK3",
  "key14": "3C6qKE1f7g6anXNNqwrBvAwvpbkKcysszz4p1QJ5fdwaPUmo3kJ4XhLan1vvY5GRQQcac2THTSttmGdYfVGtim7W",
  "key15": "2UE8SECetCBBJAWSpnDfLRfuL916dfx5KYtAsBMHbUjcJzHtvAcY671RFZNUW4UdePbojkfxhMaibtPnRrjjggnZ",
  "key16": "5TNj41L8qNL3xcsCRVD2K96Hp7aWUXUqPKwTBQBaCLUtuFNE8mZv2y8Kk9JDttHZ2exD31t1QeczHFhmMgXTtDUy",
  "key17": "zzMHyYiW9AJh5m7Y3PoFvkfD4fGz2DbZgpn7KPCN3SBiSSvfDeWVKbfqesffPjcSCw1C8JKTvf34paqFL8jaxLP",
  "key18": "3w6KtMF44k2FESi7epnMn7LZmouQzxWLK4kXrjcJjPhQsoBVgFWVFBQh9bxg4G3bvqHr3p6mmE4jpZuw51noF8Y2",
  "key19": "5WXC6XqW4sqzPGEwTGWLsXrdTbRfwsGLhVpaRTgL6sLUG9Cu5qMdP5vHU3rgQkzEpSGNR8zHtikP9Fx6oNdcfnU",
  "key20": "ELQLko2j2NGNE3Jy4qw7gcdNHrWGEJEiCC5kpUm3qfyh6zbt4YD28yowmmD2EDhe5WZFuS9uaid6EXEgroqpZSj",
  "key21": "KB4u8vDr6FTabaqH8ER3QiCR2H2vPUWQ9BGXLYWTmuHoQsqxw98VLZ56v3Z5ekW7QCRHcePezBrVBrwWP8xkHZe",
  "key22": "2WkPQxfsq527ckzLh8fUAiKYp6gotBCxsa3mr9VBR7pbLdmZzUpQDx8M8itbq9hBh4EqTRstAhUiT85eagea6QiJ",
  "key23": "5RS23prtgKckHweaL2JBNZsYyMDZtDmBa1vVuhCKXdpLgueJ98aoLempQ6xNqaG9HiE4wvcn9nNqwtnAgFsoC1HT",
  "key24": "5paHd6yYrXQYtZfDvEzEwkiJxAKXZZTRextpYFjndks7sxjLVLMNMAqPYt7Dz53ANcEiDUAxwxz9zBwcBjMYL9ke",
  "key25": "3VkgFVjWhBGaFAKjzftyCyWPxZfsrDZagy3UYFc5KEB64RrtEAfRcTWKHYW1X6zh5yJEAjeoem483xYt9DCJ3Huw",
  "key26": "4KnoK8DYnzVfmD7J582Rx2Smfk6zcG8LLoG2fsSaVQZAwLcVLtsUQA8VeKoCdJf64Dr9mAvttqmHE5Twafrcdi3g",
  "key27": "4xjxRvc8KuXBRnm5YGaRrtexGN7GULRkxz5zgeouHsRacCtps9Tggg71W4bsYS1vGfLEB3LrhFkjLGp2MFyFSRSq",
  "key28": "4mKk6F7uvb55Uoyzn4GpmKUuNDuhQUVznBmb7J6cuuWgaSqMHd6yiSJ9QEFDsezoyxZjB9TfTvszbQySXMHt8ZRu",
  "key29": "2yT9ZDd3fMf377PVnYYQKVSUaogRWeSSysPs6MWe9tMH5mt5wyAj1Vrzut21eEwGKi9iCcea2XBkpxKCeXAGu1HZ",
  "key30": "53HFZNfiE7YXZdFNK6tUBJmqPFpuv7vAXGeSg9H2nVsZMhVNaM5T8GE9hmKcjM4WswCEfh2LGbksqY6cjoLkiB1Z",
  "key31": "k2w9VAfC8PUjsL7fePsPjXdi9SBUn9cxLp5hgwaX61PjfazhH3BWH5XVAUJSXPGQM3zPWaWzEMCHm5ZvssYuW3F",
  "key32": "AX9RvEG1xNZGH82px9Z9ou3otAx5tvhGm7ze2jtmKdV9JxLiRFbzdhfvLbmag4uxRYTY21YFzSpQ4Q6uxbigJvZ",
  "key33": "5APkFHp4Xs6e2dte1rdGwpTBHDtw9mQhpSCcv6Wx1epT3p3n6qapZXRyufV6mnA7oLJF1hhJxgBVtmef4NDzbqsp",
  "key34": "BaTc9c3mWM2MuBXYXRMiQUDDSBmPmTL1Xey72byKvEcFPwujs5tMofoXrzmSXYuomLw5cJLZDu2M7KSjNJccMgo",
  "key35": "5b6aQyyWBdYtPudHCWEwUcmtbZ3gvqPszpcAPjtAXdPvSJF3yU3QVPYmerpoJtj4jgTDenmdRoW8VBaVTAiza876",
  "key36": "5Lc3AmML2gHdFsnPAgDut3ngc1gXna2ZDSR8B8TASfYXuBNELBrWQkdWv3ARoZrz7D5HCpDaWt5UVXdt7ByWQikH"
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
