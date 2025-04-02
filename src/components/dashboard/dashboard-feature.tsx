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
    "4fPZn8mfo7861Gd8YoCWtU4QKyaEjHyTVBGNTbW8GSykR5b3TquN541SvZ99nfcZjLaaidsB8h89UxKkFqqkA58p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zMKswSo26vjfVfkZ19VUvAANFqMgBA15MRXetCc5TA52armAHJYmGraAdKmmYB8kBQyWY3hfvZL6urU14nV8LhK",
  "key1": "5grbk3MaXhicooW4FyKSZAK1bvQkfPfDHFEeuQYsFzRQ6ZZuqRo76DAeJH56VakoZPnc36xcAxW8SqSCAFHMjyTx",
  "key2": "5U78EShQ5yTkbwZJv5ak4WAEtZUwH3fd2b6VGaX7C5NCPxPXqWxnWmgdVKMzyqupf45NikpJCj42WFSEwDBVUXp",
  "key3": "5yx7TzRSDCyp4bVyfhAyPzaHqU62gJv15ZYxGyBq4ZCjUtyHWGJFNLbxjMtBTi8WbNdeB9SSoHVWhhfZeBZgemeL",
  "key4": "R8WDHTMFqJGpUGrd4HE8rj8He6PuygpGV1x2AYtE6cChCHuBr6XurPFLuLU12tzkh2Rbk63V88b56Wn7HQKkvMr",
  "key5": "35j4Q9BG7RtTaGyi22cABQ7ShMfPd61gR1bDJKKXnkQA64eMvozAbKUEHbuTpe9HjUNRo9Lkp9t21juVHrqytTBM",
  "key6": "4jgMQy3cC8E6e6gntwJ7gCYfg4LaiVS7Nykbc4jfbuEhF8kUWPDT4BqeygqQgn7J4SMy5EzQpg5HLHd4PXwcSZeg",
  "key7": "2vpCcEhSMtXrnLNbyt1JEF2PaVax8f13Jv4zQp8SDAyeY8smi1m5k9JsRXQJuCvPQAv8Ja6LSqntcAgjURcLyUwF",
  "key8": "fSbcBRWhrwW5pa94FwmwwL1k8av2M9d13gAJEQJ5H1LSmXCuzpimShqJSHiTdqz9tgHdvAV5y64LasSCK2nLV8w",
  "key9": "uVFMBP7JYYhMBYnh8rW5cVSBnrCCHs8e6oshpbQQMcRETQJUJptV7LNZxPsBRHPz8oaFeqPYYcHcsJAqrqqw4NE",
  "key10": "1MXd4Ssc4wj52RQyWrHhNWtzN8XGVW7ecLDcGqpVBFeSRHXCKLbWftzwcZXmMF4u9WmaAsRiGbADNgmXcuXmfhg",
  "key11": "2yHW3sqxvNyRLHs9mi3Zomsmrtv1VboZXKhf4guLbLpo9hfD3x5Vk2vZptJazkr87dzY2Atssb9NmwDm7uQrjW9R",
  "key12": "2ifU86h3DeqtJuVJ6ZPbYzp7XLpdupZEsiNGccjDUiGPnhGwhoLgf9WcAzBHMtr5uhfRHYMkfgRBtdywRY28ogHg",
  "key13": "4sdhEhTh2PpARtoPFMczY8mijyfwDMSewtGNcGfEq4UoZvM1kFshzttp9zV5ySGF6WD5ywcCZ7NBtT8M86esS1se",
  "key14": "5DxqhpN43USFdF4PG8uDZ1RW2MebZJu9DFLLf3qiiJzw9gDmRzY11buufXXv8WSn5rC7TcB7SKQow3jXogX1TpV3",
  "key15": "46mNZTPCmbLT5vQnsrE2KafBcQRDL2KeJsUz1RJnv79dtyqL3zMEcB5HUTq8JNkczbtqA3nSQQXTk8Jo1ioGfFan",
  "key16": "3CiEQQyRPw66YTfEJbpE5qb5Lkb7G992zsoAmctRAHhgQrv3twtFiiRzSXxhGC4SabvbCzidgy3xkxHCVnphHwrZ",
  "key17": "5gxDB5g1ZzXXratkgKKjeZfnhQXo1EHjUn9w3V2pFWRkWiufS7mmNBHRzzWJY9JSRwaby1XZsZS7jqk1eJhxT8s2",
  "key18": "4R1usCDMuMEybpde2krBebyw44wBsZAPY2v7EW17qjSB8EkyTrYzK4jjfeRWmk5NbW1KyWHCgtxVPPokbeuRcy6y",
  "key19": "48NiCFMFtribxes7bXAoijj7KVQxv4YkCKhx2BSfrEzaQZiMnZ8WtZXPCv1G5VGQrZtEGcLyYczyYBE1Cu1CTPzJ",
  "key20": "4KbLNACfppc5sS1mEqdgCUQKbB7DegZFwYsjk3nHTmEvehf9J5BRzimrD7LXFouJ3tnoCYYgdH27MxNnCiWndq58",
  "key21": "5DyqmeuXByBnk9mxz5XKT9eY4RmoLAVExdWzNitypquvkD5r83Mm9KAdd2Fibe9jssaBvTenN85wvwiKJVSqt4jx",
  "key22": "5cjTuRSwEfdUWNaqAaBbWygzJw5KkBDGyCRWFuCKfHWH2sS7UMmkhiU5xihGbm7v13tvVAscV2nfARY6spmSYjty",
  "key23": "3iAnarC5N7LsmGV7HE9789UYaFAejZ6oinn2fGg6qEPuMtWLJ1j2xdBfTzE6ha2Q5Er1PEkEtiSxDhNmG1ezXKia",
  "key24": "3jxQ3AxTioE946feC7DVTZxzUrXXDdmt8dQtLovirY5KrpKob2QKR1VouGF9xZgbmFGZppumuPYE271twd9GdgL6",
  "key25": "25FgmMDcfyTXFiWngqdna1yaGzHJtZ2cUqDHz7AsQP8nBPwY2kA4u39HTc5uMUv7bYYK7qDR5KS3a1iCukjqR4Ry"
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
