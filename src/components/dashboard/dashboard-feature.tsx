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
    "674tWzLghic53rmtomFPrxDh4FZuAr3SCsiTBhqZFbRZyBUjrsJMt88FKtZZbAjn2NV2CJbYd57bLWYt4FoerrxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pvrTMBZBpi5agz46LZ57c3F754mVd3mB5UJZV4BM5zpHADGsjmiT4N67E3Jm21jkno252DTQbNyBsMyUf1GWwSJ",
  "key1": "p4WKejCCGAJ5EXEQfMgv2H3VxmC3PtDvNqN3oiM4tiZXuBxmnmUR1wEoZxs4GqCC47yrr4aSk1pRapSnXVwyxtG",
  "key2": "4JAKJZhXGBBPGpFrGuBoFgm6hZ2G13or7gJFtMMmFbebz4V7DoK9DJYJa5TT2xtkB9v9kk2oDDyp3yYPZBxx6Q4W",
  "key3": "3QZZ1bF9a572L28cxMyuyUDVSd27rxn88MmSfTiMJRAEv581p7WtcX4AkNQPFWGmGnZhL4hdW6ZKG6AJM7pibRAq",
  "key4": "3dtdtHxWajf9GeLLzhs1pGnEhWHjZoRXYaGhEVP7K3qH8axLmodr22LaJi1r2g9nLxsjpoi5cvPxK1fZcZxJNQLU",
  "key5": "2cJMYatAPkusHBXxGL61rQw9xxdYtCZZfySwZtttwWTkxFsX4R5uKmWNZvo3HJ4M1so3T3kzMrydW4494tkacNWC",
  "key6": "5uKkRzEN99TZv7wfYnx37HWo7eDhfofatLh9jyk7hJYnWQNT4v1xRrz2wdgk3Ry77r6WKkW8FJfaUqGDo5JmnovV",
  "key7": "5gUPnCp5DXFrFngtkWnioZBpafH4jEZuvdLAceySnDbtnYqvTHX1hW3aCxP9UXZPufDKbvfNbwN6NNxeSD5oxjUJ",
  "key8": "2dXnKCRS3NVsWvpysogYWivLMqcHK4dSeYG44x82dCWYF2mKpL5v8mwv4DNoni3uopeG1ZPZrgQNTKW94iUGgDrL",
  "key9": "2Vu1aHTs6tNkqpd4vnHSMymha8MSyDktGMQvKsSsKUevUyiTdwhMty6wsUdxsrHyVmcz65bPiFr7J7U8vRCMDhgU",
  "key10": "28SmuRFj4pKynpRx96mwrCyF7XUnoE8yHmQ33KH7UZhw7Xzhj86ZQA7cu9eZd8mH6ynog6xv1JH9FfervaWPkMUB",
  "key11": "5KGVm2fY9ME1ZDwKgBefHHbK9HWfUuXb5Lq1adgqLBumesqH3Tgnk3BKqtLFSS5m9oirXKhUnpac9eiDPTgSt8Fs",
  "key12": "2PxtnZ3DjxEobWfKDMfW8hfBQnZ6s11XJJQr3bPDd615Z3SbNznz1pyMvgyWbwYjNsgCZ69kv8TtKUoBB1jjYfyA",
  "key13": "235yG9pkzHNyCt8T8Ahhy2SMadfKMpQzKzVq2UF13qKLEeN2caFPYguqoaxdfPYS1Kiho5xN9Aaro64AuiWGAXni",
  "key14": "CCRixS1Mi56WNUf5kZPnxCmM2Xz7EFxioK8U6LjtTgSXLDxQcuor8HupWc2Ekwzo7kBJbTiDw3xNw1Jm8pSJLhy",
  "key15": "UhWcSfDk1zcCbuKaRtS48tnorG6KgF25xL9u8Yqrssn8vFuRnQSxqo9vmokdddgYBTgrG1YdRbm6pCvA4XznNLP",
  "key16": "3efGa59ULVMv6WaTVtxN975u7vkdgvGPyuVfdyvZoCSV4cWvkZjQr7V4P4EXp5M5Kzme5xDzPDNRzc5zYbjBkFK7",
  "key17": "3NLbiwBmSQ8E2GQdTecngSTcszmfEjd1qU9KxHMEk5cyJjyuJTm2i2MUUk5GWXtdMUZP3spMkLjXKESPJpWbq9yt",
  "key18": "2Vxpq8LnCv7cDZtNZtskDgm9rx5Bd7nBULFmteprvH8EB4PbBTVY6K8DcKWk7vYfpAexBYG2rSUYuFRjBxVjgH35",
  "key19": "ZYwa4khCUrcwPMU2yzrtF49sEv4oaFqPvCmwoF5G5KpXXcaEhdH7Fzkrh1gCdST6rm94qBsWytEsWppkCM3sZQ1",
  "key20": "5sPm1thCmELuZW8YuXkDspsBVWsfwNBhjTZLy3TPmHUtkCM3GHmea2GQrXck64Lb1VrNKQwf4EyGCWrMniWGEqXz",
  "key21": "4M8HsLYSJ3bVfWMb2hL33bnYstEGyKDEVmFG13FLRuVspNktYoJv4iugBJ17VtK4NHYF9kFFtR6GqWtR5xfxhRFn",
  "key22": "5rgAoPpj34y1wQMdzTH6z8dW1a5o2Lgiktk4o8Hhpr3UiwiNyUTsTB3XzvNkZ8ncRqmHmQEPaHGBBimJ5dqsnzbf",
  "key23": "2of3x7XxA5CAqEThXqcexC2Vt7DbvkhTuBMyQyGpk7dycN2ZiqLAbNN6ZBwMdKZpHiqfC5498gCtsSXyrUBsD5Jh",
  "key24": "zNzkfd94nWsjD5QDhh8vHZraxfQ4asxD8r5PkZiwoeNh92ryk6RAEpGASb9hqLM7bh85H2iyN8twWNyNF6TjycD",
  "key25": "2NUvfEkYaWpveCNwxCirLjuiz7s9gHJ5uUoHnemMoxL27DCvwRzcVWzK29qmZRLb4eoFU1NX68Mrp82vBFXhQqX7",
  "key26": "2TdwztGGiMYNpMqom5uVxNgrL6hbRNMFVZNHrEFU8Sj24M7s3CLX1cRbxaK2G8GSdv3JhPvGoqwDXEnsE5UV5yPN",
  "key27": "keyi961erscnoYWtP74K4PUKWKMerRtzwgQtGRJqJdd8Bxk96VUPxWkcFbBVkDqbkT8qSc6Lq1WSeSWwgBkkDsc",
  "key28": "4fUArni5A8oWSFrE5wca3Y1FgxMJmLybHTZSdSYnnJNqvajbyZF6YP28uYo279u2m2MAKRUeFnYm7hGPjBmDkxin",
  "key29": "2zxDKgNDJD4uYvziHRTvA24wvnwcii7dC2rAsKgitKWmLaFFZZnrkFfmzcdz9Y255e6hfmUwwnYE6gZKYQqVYAgq",
  "key30": "5NiznM9Su1uiabpetNAEbTcHuHYuLppXFTw8XeV8v2nfg9sD9ddEqfghAA21n8212euhNzBuY7w66s41EnYTiip3",
  "key31": "4iLCHbBgpUNft6n9Wf9EDZr2bPmPsvQbCHUVAC5fXq2mPSpYSS8cTizzwE6dsQZPSEU8DgQXQNgYmT3K91vEPF6C",
  "key32": "x3PdJXBmDWz17jvz5cjGgG2PiVsS53QLm2yqycEBhZ8CuzWAHbT2US6AhnRGduZRSsM4bUntFFtAyZTirbGN19a",
  "key33": "arFhnV1uic44suEStf4W8crFEZYArmkNaN1owkGFJ8rvHUeRNiPMvLaQ7bzQqsLExCebWZAuaQEdjiqCS9rex7n"
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
