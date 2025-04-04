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
    "26WN3VgZHFEZsMCQvPpNznDi99h34TiQiABd8SdDHGN3FcYvqUAGmHyCyb1kZiVrXpBFVyUaHZTVNWpfx54vYQrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52kcznYJBLxvNrHBqqpDBAfy6Xy8KDYuH7Gv7EiMq6HfWse8CHuvQPKocFpkhE1RZ8u5GjGPDiSpyeuLZfmGfhfR",
  "key1": "3bNq7gQSgUWBzVpTK1d8guNreUXNVpZYucD9cW3Bo4QzHhHyxBo8HUNp6h23JoohaE6aUJos7n7EdSeWYU1yFtFx",
  "key2": "bWYihG6RE7TwjiydQc9QY5qL5x9wBkdVFW8eB1xfH5VhSXz4rkYx2GHLUT2pPdLJN1GSNUhGkoEFw7Ad4ypFf5f",
  "key3": "ixCyDRnPfGrG21uqPo2iyY9qdYydCkZ9u4uxgaAUC38TuW9aBLiydXCkPJYzhdSqBHZc5Hh5PT5RZh1LS8BBNme",
  "key4": "3FSvDgeDW1BSGXgPn4enWdQTXhzSM3nj9qjZBgzgoTPvAXcgiRZaxM5TZuhxs4qEQnEqYh9ZF9YQUqUNfyC8WbJb",
  "key5": "3yTBzxwnTpHFDWTfLYgATGZN2SfcTRUCPMRrHhinJDKy93esRmANL3UfjmWhWAP6V1GMkj2Lhaprhz2jpFoNQX1u",
  "key6": "624YzNw5e7dpLn918pjdEDvXY8e8cQgFM98YmohdxNvZDTdyPfG9eUHE3nbgG96F4M6vG3Q5XABaAt2qj8Jz2t7p",
  "key7": "2VgeqRKMePNojBFazJ1EysCaRoPdyTNyGPY87qXoZXerV12niDScLgYv19jtXT3fDt5qcwVwXQPvwvqPs6iCHkup",
  "key8": "2BDwVDyBy2DsPKkH5cAv5ZBjEcu1n2DCyVFbR9gZGHqtCFsy1qhoovc9PJywhrqgucC21QAKZH9sZTU3kBRSbu8H",
  "key9": "5ywDnJNFypJSKcATY3ZBtFtsQQMtNmZgM2PZ5weYHNahc3FkXCBkKw7JrDEJPhpZMEujn5YF8JfQ6stGXk4bKj5e",
  "key10": "z2fFXkqgtoCbZjdSHngbyXuu79yvJgC11koQ1FVyc2BHg9KsAkoHpuf44bZmdcSt9K2rVvC5PAPu4sr3o5G1Ssj",
  "key11": "2nkprSSwCbSAiVwFxN9B5ukrb38AvwRzziJLEpZGxmrajJeNxTnJ1Wg7xEVZwkCP7F3aqYargVQXzt5haUibb8Ru",
  "key12": "5JqU5fhVbS2Gk3JvRoGiJbZ8n27Nwaq8K8999FyP9sjmsMP81cWpvUwDZv17hzgTrkbFRG4KgPGpnNvDM9fs1d1L",
  "key13": "UtyJUhNMhQ24Pw4A1epsgUQE8Dk2gKqnnC6VjYKUi7ggEBhTDcZTwiqESkrci3V7xRDYXKox7a7gRPiHi4wrgcN",
  "key14": "3XpFNweRHKaeKgHHWid7pGkBCczVQKZwieLm4mftCrkxA9iBiAVEU2XX6HphRERtLqDxmeP1jRkueV1HfZ4wjqS1",
  "key15": "62ebsDns5XhmUEYiFKyZv4TLXBm9kg8umru3zyUubLftt5rM4qo7zvbKtskb5yvLoeUuTbHQGJ4qcjMpgA81z4zC",
  "key16": "2Q4JkvikTdLo1UZdxTzdHdqNF2qb5iVkh2Jti55ytFEWfGgNwDNvSGe6qYvT4vnC6DAipQo9Kqdt8zLAWmrKKsci",
  "key17": "2Mw9trza8KrWi3hGL4QsQEQKZVJQ6gWxfbD51WD9m5zDWtcm54vMAT544qZzzDQ39ksDBnB23ojjaT2Gh7wzCbss",
  "key18": "dRMvqTxXFpFCuRodcdDJkaGaqQ1DiAtk3WJEVUvXML2wDJYixGUA6KCodz2bjKUa5S9RDFpeWp3qwKcwNkXZQFX",
  "key19": "4PcZUQmRix5rpZQJDBiXG6D7TQ3ujqL6qFvdkXaqmnB5HW7f9coV1PgDtDT1mhH7GoXu5g75FnKoMh8BXypmD1Wq",
  "key20": "2DZ5SqDWnJUJCVHJNVLcLa7zFA6XHvoYZgkB8T6oXU9L6saz4dkrtmRkHr7kCH3oRNzLX8qEAuR7yPD5wiKoQMPP",
  "key21": "3e6RZfJ23zXZ1Eic3HdL29ESdLkff7mAE5BdDU65TZzXdJxUfDcW5Cp7dxju6o8vmLjs7nRsDGo6qNzpwm5tQzkR",
  "key22": "48BpzXWW7Z8hV1Smzqh4MwyVT5NXRJrCVoy9yEAkCCkhoqfz43xabDkXGJhoUyG61PvsDsD2kZ9HoK1oiXASwRXz",
  "key23": "42HkBG4GFunAMk1VmhPjYdisu8e6pYCPCrefWLfL51ngH46UM4kv4P6XGyfhXMhXZY1BhEevRYr1LrhHtpyvJRDB",
  "key24": "39eU2PAcz5gWdsc9pvzYhfHPfMXy7o9dqdyx3hqxqXDFYxCtrX8iPEfYDVgrEG1jeFaDLdiygMdRXbTpFLB6Njeg",
  "key25": "FnmUhBWbeKr2xw9j66jjt9uXiKuTBAUgjyowKAi1zMt6DGybBDGMWHWjnU1QnzBtN2bDSg28mtWUyAD7YkMnEGC",
  "key26": "3zjmyLi78NT78151HgKghzZyQsWouxbnqfmEvi2vKTCRgDyqa7B2wsGwEHUyovJLt5JyLcE8uXPc98MWttfkvuK8",
  "key27": "4D2RNcwc2wCLzJqDPYhiB7TjZ3mDCHMDmV8X48rvoDEUU9qhaJyWzUnRmZXME7kq6JJ4mFSSdBKMAc1yfjSsyXLS",
  "key28": "3Uf16ufJP6qUGMzNbnK6CRU7iEpAiz1zfyg2hf2kyMrWom5F2ktDeWc1aZSmJoBK6scpGH2i1mpUx66Wie5Hnoge",
  "key29": "4wte82XTmMRAtPRDNptMXZL42wBmCV2AzFRYQqgorPZKTf7h8hC8SdqdgysEE6tDiUBiKSPoZoSg71urh3rXPP7W",
  "key30": "5i3gWjsUKoVkHpA3obQYGcTY3Vs3oL2xzyvNCm8y4QvL5aSuXnHAVD9oRu1GpQL5LxjY8TGEcWNAyfiEzdhLmtB2",
  "key31": "zdk3B2Bn9ACeHzUWn22WGfBCvtbmAyiVYf4H8XyFTfzavZASb3dyierGQC1Dtevapn1GtgQ1gmiZF3SkhMgxwSP",
  "key32": "LZA9mbabuKaJRm4gSm7tnxSnEvHEzAh1rj9GSimYSYaKRH2QjRgEfkQ544gkNp4KLj31L7GmBWp7gV5pvpArWPi",
  "key33": "29P9zPMu6aSdzMKBcrFjPNNZXiFGzWD6ZvzAgNWiEKmLXqsszbPi21cph5MzeGmnRQPsV2QANVv7g5uvQvxtJ7Lz",
  "key34": "31yioQjAnsLzYTirUXzisvwEcPb23aH34jzTZp4SQ2nRdXazj81QrkAMUoZo3RJTy9PEbnC7uR284pu9jKQNWZcp",
  "key35": "uSTkw6USaKmV9w39NMqQLewnUPoa2SCNYatBD7DhhVeJ8Z4QHBhpHfR1ygypMGnMdXiA5RW3hL8nQccvdiMEFvm"
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
