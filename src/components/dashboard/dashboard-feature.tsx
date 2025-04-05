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
    "317qPbB4kkR9f1QZmhP3FZFGAhet5Tnxwj6MEY5CJ1gqvQEB8NA4ktDeoTZ2LMuntnbktfjVjxzUcwXLquS5ihZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EQRWWxFpBogX43LZUvQTEavA8zFUArXeukwykvzfKufHF2stwyw87KfDyzzejX1tf5aSt5VeYon1bUaYuRNU4VP",
  "key1": "2j5JVpaFSGKng43mbAzGrkBCsLrYKQhVUNNJMwvLaz1j6fqms9yi8EYG8wjEKjRVxgLZ9AoT5kvsk5EfKBqhG6Hi",
  "key2": "3XfwY5L1tSmxTsfchvGxk4E33mZzHpi6SYUexaGdByAs7hvwEEoB9bUmWcBzNPoZzqdVsWV2jbmCfVh8G5d5jDUm",
  "key3": "5tsCUASTLhuRZKtjDhoneFtNxsYj9wrhbytGJchF85R4NuRhnqo7V9Yeaq1W2kCpK4HBEKbUqBphzUTb9XXvZHBi",
  "key4": "2M5JQp5UQLZtQGYwQiSy8yFCcqoCKzCCoRS5ygUQWQFiCgAimgLkjQkyHM1Em1iHp7ErLj6Tcj9fN7PEhporaSuk",
  "key5": "4ncLua3zaUKgMwfG1fa6tqwdj2DhdpvWoCZEdJqrpzgN9ZjdWMqdBEgBpfjrW9U81MbPjh4rD8ry6bRYVnHT22S9",
  "key6": "3QrUf5C9AtWKTUNKP1iiKRj1ZKjNCWFZRpLabkHqfGj4q5rAr6L6P9pH8CgUQqBeoJHjJshZR2pT9NzhXoVi129F",
  "key7": "3GwhDguhRs6kemWvuViPZJNvGgAhNzmiPqe7q8HunkXQgMvNWxwAUrwx2RnPXCEmFAa3798VCFEYp6wc5482UQQk",
  "key8": "Nu4wsmxBReaCCFrdRhgipdb2N1EBb4xfWM4AFXWewKd2tsK4FdBwaQN5t84aCDGabtvgUzS4WmhEF2C24ESWB9M",
  "key9": "53JiZ7LC6Zfa729mnh9VNt3JjpUzmeyDdHbP6Z8kipAbSZNh3Jwz6pbkfpQsK5qdyPAXm6md3wKwhWf1WZD3vMTk",
  "key10": "3eEiGBsAKVGChEG5yt9evmem3XjJcH7sZzdSNK6MH1ub53PCCEG6kMjTgGpHSKJhuJA18JGeKFYW31GdrWpDtjMZ",
  "key11": "3JeNxdU6mAWQsjceJZMNCNRFLtao87aaynRN6FmsY1kB5sCTffhnbRTvqP6SeyVgyJacS574zRVnjjVLBiEddCBH",
  "key12": "24Tmy1SoBLroS8QyofSCbQgjSfNMG7uxrNoqHkT3yztXqyEfVjpc8Xco6v5HRMFG1Veg7hDRtRyKNdapJYN2iK8W",
  "key13": "xt23yaZ5qBbPXrff643zZ7e5HjpkCBxk48qis3HPjY4GcsAUDwDmpxPFstkzP7QaR7ycGnLWhHvfDLfkS4XMTCS",
  "key14": "eA5Dnmkus4bPzMZCDU7kzE762UU4TRtrGACcNZE5Y2hHKfWodgCXg3cVXqUm5CpyNWdGjD5QFcNZeCohHS7jSXu",
  "key15": "Zkijdde7tsKgHwKh4AH9YVqFsJsyQQ7YdyRo2b1ULX1rCdu35E2HaBjxWxKMWBKRFK2xng1ukeYubmv6TbVe1DJ",
  "key16": "23BggmxBG1KVvtZaNRprRogY8Teei8Ynhy7o1QphigqsPQYo47QjwM3ESPLPyXmgyqRhiy7epNnv3YtB1SiHxcEA",
  "key17": "472ZnEUSCtPyKY8AZW5M2WuEyFdgWHdLx37p9XSpPVtPb1dUadRzgVHpLcivFNgMBdksjWLursPMh9Bdkdtfy3uZ",
  "key18": "4cpjALmBZy9sAa4UT84K2FzFbPtiXQokb3vRNfoBqo7imHU6nqNE7XWkfqStf73nJTFBLKAE6HWXoKig36t9tn4K",
  "key19": "3J4f7JDiqjqikYCwMQQKSWQX8XXjpXio3uxa2914TX4veNUSXAVcZTjrsT3ApKPTQj8sw18dg31Q8TX9W18tZ6jr",
  "key20": "JGLRnZGniGYGaVyE3n4WNjqWG1dpTr5pgq1dSKdkQmurd2dgvNcemYa3kNSiZxb8iPwXxKek4pmb87S6ZEckFHr",
  "key21": "5QQZMB9iwdUocUvcvPB5jMh1sxGaekf5qvhFnT4BNoSjx7ZRpAjwCjVmpnjQDSv3bDekuXWeYgF2WQQVooz7wNe4",
  "key22": "3UwDXJkp9XJzuD33aWz9q3dnRbypCigos4jy3bEQyWhxynsMxPc7tHFuSN5SjtDa4Fz34Bcu6UNEJgpKX3D1xLs4",
  "key23": "2VTFbdtTL3SSZD5j8FW2ec9zPG7kGMK66FyXzHRYx1RqdgXVjTLCj8RpJiMuY6w8w6mwizxJCFB1tnKSnY8Xj7hW",
  "key24": "uPpaDszUiWRp9jFckaAYpm7HNyxH8NoW34uc99qcmH1zaUQFv42QUJqVjZgmxjYobZAx29fLHZoUKxyLWtm9TkH",
  "key25": "4nRJbEyjCtVPT3qUDA1iXLnQZhpq3XAsk9zkxqYpizSQpD7XaUAuExUdvZRKgd9kmwYTgQa6RvEg5njMBGDKh4BA",
  "key26": "5P2ZYsP5UxCT9e8cBoxVCpyfozypa4ijSUMnGn8Ts4AKU6eVrgdHrRm2KDxAGuJLRnu2yG6ppXRNxC151uSZ6si3",
  "key27": "2Q3XeHuzZmEtuWL4kmYz2ZG3LFdKXxPKM1nQSf5K9WejtHW2VraKpaoQfH8n29taiQ6VY67tWgoS17kH5AFBKUd",
  "key28": "BgvSeN7um4Pjkm9qeBno1Rk2qKpG4YrFapWVp7a1L91QoPewDqzqEvrig1McQKV4X9S8a3byYJFjEuh6TwaJyVp",
  "key29": "VXYQswN2AN41W753oXsEqVcE6tKACkB9Dptzfp4a4uX9rer1AtuBq141nVNxUrteevchfX83XNn3yiERbJj8k7M",
  "key30": "2PAyerZbbJZfdStihqAhyDnFC5TxeJqp572bWMae39jsoax7YSCkb354Z5fmx8KvHFvpXRL8cPJxdMGFu1G1D1Gj",
  "key31": "MF7VLzgcgvGwJE737HN3kYVANnNS6Yhf7rzNdNHLoUL6jsr2F9yMLvqdJEAPkbvmqeMLo96WBatP3j3AwuMyQj7",
  "key32": "2YHEDjHngtVmWcRiwLdUFtPpMrKPV81vw5PUQRZrvoh4ptLpPcQrE4Vj8pe9giLa7cpD9SmQzBZDmMTfKgrHKqXy",
  "key33": "38G433VzjtZgFTRStWbyaU5YGmmUaZv5Wx3zQuFNtGrPH3gNmhMNgdrBgbwVGtHnQN8Ehknj51DgqUDQtBFN5QQc",
  "key34": "3hyjxdRKhkjeE4MUXZtXWn6i1gu1FUeyv2vcLcBdviabL4tyWKxHCrcce2dsyEZPG52wF8pMUpK8JBNPf1jKwVZt",
  "key35": "pEarmhACQkte9udH1pnwRSDMKCotvxSKAybivSFq9Lh93oRNboia3q53ib5ACs2GETcoXkXjrqkd2XsUp2nXizm",
  "key36": "4FrmXQEVLzcMzsEdNGvkWggFBiRgyxXSZoDoigj5cH3T4gzbAcVEVK1JKSepFPnPFJQ2517bxsuqKngckfoc7oSX",
  "key37": "3wKFc1sVRj2PqMWWi7cDhPVryL1dTJimHziZVjhh3XEQr9iE3aBQRDZ6pQRCwEygaBE2zfT1ydsGufRDRAGaB48c",
  "key38": "4ugcbuKHkbJDtk2qbswDLT3B4cW9XMjnREbaK5GWYXDtyTP22YdZA9akfDShEDpJFyrhwu5emMGZDWCSPPsHwnqt",
  "key39": "2zPTsGmhBEUrd5hjHBoUp4iE5DUqbfSw29hqybMv9x7CGvKjrMoMsDaEK3j88c9XZTiB64gxSfQabaHbPWTSguJ",
  "key40": "4eL3RMcvnGonTywWMXZurTmK9wpRB2EBNniZTea6mcdbDuppT4GzZsA1jrSzbL7aAYpYvPcb1uiZGUJw61QBcqxK",
  "key41": "4PdZkuAdHp7VihhPSkdVxRyZz5hUinEbsZZxn49QkqCR65Eg9kSnPadENKZ5JHFBikFoYm6eeATvnu4wLeLA8pzM",
  "key42": "27KYzVzJ5SwShuXajWjQHuaNoPzsdZg2PtVVa5EtizVaYDGS6mvpBXPcGZrrofagRxaBj2HQp3oS83BT3auxKhEB",
  "key43": "WnAGokna7KBD1xt5TsBvQXDFZPZy69vxAMURRhiYpL16tEqM29uHmz89B5UfPeu1UEpuEuzbcL4qmZkxMxsH6y9",
  "key44": "4RC1bgoWhhnjTnn9LBgiJFeihVz4topTJfmk3RT7kes9av6XM4N8X5QkbLxXhb3BWgEorLv2KK1UnuqWJgVGcLSY"
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
