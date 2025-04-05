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
    "9nGjfotJy2SS2b1RnmKe9Fdinv6dTmDAA2iLppWt3VqQ2b9JTcKtkZxiZrXig2dpFRpR9fiNp98uTGw6dhRNJmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cv2sgLrzfZhjqCQwSgSgviGaRnEfkrPzfrHU3LcTASCZjHEBCs2KAiibxF5xxNiNozXL5yQcGGnsMkib7jaJyST",
  "key1": "CAU4pyEgydyqPZKNmibqhfugozqkBY3okzwtd4nvt8Ln8W7qS19uDHuzZnRcURiDxM6o3BGzTW7epiCaPHZuG1i",
  "key2": "XspMCQbFXE8brbj8Hd8Bc9b2MUfeZQppddGGgjg55gSarYoJA1oJypqJHNX51Tx6T1NHSYbRx8ow87K3jDuV87F",
  "key3": "3muhq56ZKUa64hFNnftpTbR3N7LZ5rEtQkG8o7mbQLzQsB9hE74LzYN2TnX9RBtsyFT1cRMJH2xLPFT1vMa76nV6",
  "key4": "2ztYPJshHsrZ38efX2adTbhFoJ5MncZ3cQqDsFivzEtK6a8dMfEcMVnhxRgb945WbpMirWaUNKnz3aDFD5nkEkAe",
  "key5": "2YHh5JRYdApRdmRdFqbC6LDhPYEwbsMgocUwsEbyi9PVmCRSnuoPFsaQtLYcU9jjNCCFM5GgYRMY3YDxntejWWEA",
  "key6": "3A8HgwLXjjFxwbRxwfbXTVBbKWU34JT2YussuQb3HpbfZEzRsF38mTZy3LyTqwY5mGhMVU2jkft1wBujaPVmWMDu",
  "key7": "3B8C5nNmLy38w3ywy4rXYsegEfmhBF17hmpirsdVBnZqTqwew25PKBtTykCULMUnoUZKC8CtYUsEhTj9n57SK8Lb",
  "key8": "347EiX5mZaeyCih5Wkzf7zWTLDwbXWjotpqTFvsC7EpafyLF2P1spraUM8TDbj45dkyBmcyny86NRrbkgZtvDvqf",
  "key9": "5L65eh8Nyig9ompuJaD5eNPMs17eD72XKKhENgXvPQ4zHHTHby9mDcQhxuqRxsW76X3HLfevYwBoVWkBtfwppNtu",
  "key10": "3tWHu4AAruHmNyYcgn2zTQb9mVmy16gGtGNaupDJ9LSVSap62ZXkoZ4fDQfabBmNyLQmRNVqoFKDJhqK4MbggeLT",
  "key11": "2EoCsPLdGrkTjb1BwD9DFhdstqFyN8bR34YscLxEWv7EyCW7JA4MNMJ6M1Kfz1AVXm2GCqvgdeohKgzZaistDPyj",
  "key12": "38xJPSEWJi5EzXm8Z7QwyxNe5nvwNtfG2wjFYA2ZSwNdMJMhG29tPqCCqFNkqn9QQTQvPWZFJG6FMJpSdW5k7VFs",
  "key13": "5w5HDozUkGve5NZ5ZdMHrtzmPQA9ZLmTPcaJU4RYBGsHcpu4CQtUPieaHMmSM55iaXiSUjvUN3bt5pPK7ViBRBgP",
  "key14": "3jUfGgY2xPWcTRHq5HcfYYzFq8MGzeeGjgfcuwbSnMFoMQt6WUQ5uEnHVcqPUVhN7PZCCw3wCW9hABzuT65KFxzw",
  "key15": "4oufCAQThZpJFKonv4QStskgAnywyHWZqnYe94qY6sqYgCWepJyBPjciT5DNnr2s24Kzj43NkcDNK6ajCTX3uk7Z",
  "key16": "52ZpgZCPxystxLtB8XPU79mG7yncswEJqAHQnyYi7sLhem2hiJ3A3b1LB8XfKdsHk4EkFW5fKKMAwJX4N4eDUgWi",
  "key17": "5ykrpyX8ExJ8uJ3nXyGbsVX9wmE591FZVPdkC9vXkPrnh88Sf6RBFuGi2D3P1GGWfeCYceVkTbKaZnRvmPa3HSya",
  "key18": "2qv41zakcSXUMuM3CQidhpQtJkpCMoT86W94WeRArEzCZJF7NQfMgojWHuDYDX2Wg2oWjosRfrYna4EVVfUVfcy2",
  "key19": "dPyUgEiDTCtTn1Q9FhAEabt6UrzchcHG8CcNtGWvZ6x5XGc6hjWUUUxvLojA4XnjWiAAREhRNRfum8h1SpYDcrq",
  "key20": "YtwPqLZ32f45vm4TCnNHatbA5WsNEJAqY5XUeERDLGXBQoQ78kKZHP8WVZF9LMe6FchPUEC4a3aLALRiCGuqq73",
  "key21": "5oxNtjqez5SgbQEQcVewHHqLAtnxkydXiqaS2AdNWXBmQQeMJEZcivYd12wxbo4BDcXEkh1dkWjmqxiH5tpggdGW",
  "key22": "4Jj9Dyhj13RfmqzEhvb3KWK61prViDU9L6XLGJ1buxoPt56YgawC6nKakmoLcEacvQCcsBSmzwGCwNg4YDtRpr1E",
  "key23": "2Bguy4FordEmnu1AqnRM6A9SecDW21iPvtHbZRGy8YtmdRmiNvKVyWa4YFF3yzjchvD3GoUtBeHwzuTzv284o1h6",
  "key24": "5a9BLwuNF5nLMW3GZBxJtq5jg1wwP7dPZmkhgaeTEZpXqCkqPC4piDUhZCy38FJZCjWE6UTPAQA7KR7wMPAPuDup",
  "key25": "2kkWPyP7vFFDNPuPkTG3CQVjuR41n2gz4jDQpNL7nPFCCjxzkwuiF1FbzushTsxZVhiR3iu1anQpP9mKygyAx72v",
  "key26": "3nZBTXihp4gNx5yx9UcPj97NtZ5hRCg3a8VTp4tky9QDepnZiyWv54iRbQb59qu3swDKMhQyQuzxVe3EuzAqkBGx",
  "key27": "5gY1AppMvF7NzMcvP9vwj9J9F5PYSvomDCxVbyfmPgScUpHe5mharhW97NCNFSfGj2tLDBvxGL1yBQDBbirxVaWi",
  "key28": "3rGoL9C9AQMsoceGUG8FsxhySvHmAbYJmzGSUDJaYgbd3127kLsiH6hcCc5AKh84Dagh4fadpyt3idtMcQkvxq5N",
  "key29": "aSPon7TyJCqv87qjHSvwzZuY5baB5etmj6aqmX5PsSEbxsEZ82hFmMTArtdgF1pwkD72fENK5TdGHWNSPkgT6Tb",
  "key30": "R58UGVEJ3iEiiUG8SAheiUe3UA8gDKyayQtBKE5N6ukzWe2aNTFtaqJgFX3VFkFZiPfXvmKfAKuiZwfdiZ5iEj9",
  "key31": "3XpsVo2RWL4PU3KXXB15jwEfqti3ZQoGBtT4aP63acSPJNN5EVMKGirrfxZ5un2G189FEkXgDEjaetVAhwvfuoJw",
  "key32": "4pKsQuG4ttFqBq7jAWE9vxjeV14bBq1xsWiUTtH3k2h2CvP7TQXH43Ny2iHYqDwec4jEYnq1urSAHcaUeQMMB3AV",
  "key33": "2Ap7Hx9mmFVUKVGVmKW5L6sVLsT9Nmo6x968NYYALYZCtDqHKdFHFrwems6JUnZ3aV3Km1HhN4XqfK6AwJfV1L7w",
  "key34": "3UBqMZPGMvPDh9eGhsQjK8RYE8hWhj4kjdJF2SsXW7Y4rMgebYFFYuCooZBw8zZn497LRp6WAqHxEHggMhRtjtmD",
  "key35": "3wPb2pnHGNzbx75N4ARku9v3S9YJz4UAAxeMK4HDDJeaQEg5NbtTbgwrNeyiRSZ18L6rQPk2VjeA9LsFKjb5bjMk",
  "key36": "53Xzp82pka49jY9UMR4QcytWPXo9YjtkTgGeHyck41QMsmQcAp6gsWckhW1hk7fuxRQH52kmd8E3ifv4mf5Qfhmp",
  "key37": "5z127RqoxUcqXaDESoWw5JcaBCSoCGhX7vgAVgjAge6GUa9NTioVHjpLLJJ1R3h18hWGsGRNZrHTVWKHTicnAShn",
  "key38": "2WbsSV37zHAPpD4weSuyFo7zk9nPkuzppgnQHSqkebpgNqKtD1bdDe4o92TfvDtMs8xbfdcn4uxk9EcAKitFcv3u",
  "key39": "5exETqV9ZcH8g6NKbQDpwVaxBE3i8VDhoMZxd3PwHUC9GFb99Z3RWdYFLkbmgP59rVzdMcKVnDvBo7sqJWeCRYGd",
  "key40": "4bp8gnFta4kxLWZEYVeqqAk1Spwr1tmLE9JX75SCG6wWbpdCN9qGwigEqJLFxxdnGU7Chkxz1bT3ma1nYNAtvhua",
  "key41": "4ykTWz5PDr24kHugSuXR5mXf56sBo1aquBstbYjH9VweA8UtfmaN7iDmfeAs6anru2Ec2M69ds5bcBMVZ5NZTCL3",
  "key42": "2dtQTsyb3HzG9WecUZBpfRD9BUjtYxK4qN9ZDhFPeWbAH39ZNewDoHLyjk7PQF42XgLiJSKAiwCbWaJ38hAPgesV",
  "key43": "22qWMcTDCsZ4DZkoXf2FXrL4LdrMMfeyLH1MKhiQzpWFKH4F3UHSNaU2b6V5Kt9hXFmK5ADvePpj3DJbUz72WhBj"
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
