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
    "4yaDHQKPK9RdaRbLn38rP2YacFG4MpbZmy3NqrRFWTj21hA7Q49iUSYSXAzedWBMeSoBcxN7Rd4yQ5G4mnescwpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KQ7nzfbATFU5B6Qzp6xPKQUtGQYHM4tLkNJs22dnYzbU2i7z313pzxQf4GgnubcqwFsqVCrBdnKLNvGsQjUDrwx",
  "key1": "cYHPs595WvpXC6iV7VDmamJSvDe3six8g6Q6btKTRha9TLSoZktFhR5ez9wjvBLkPENnJKkNyHHkWYpTnEyTvJ7",
  "key2": "4KubbpM5C5cF6sNLGD2AcooRmAffYwoh8wbX1DbGpFm6Cavyyf6m77JKcB2jvaSvRstGeqTbEBkfA5NrqxBjYmBq",
  "key3": "3NEQBXD3PUkPQ9Gft8Nu9KmGtajGk45XrrJc329pyqc9VPaeFGLFankoUdYaWGQwBrDbWLo5zKXZWLoMgo2Cz5C9",
  "key4": "3cUxKP9NeuBtnGbiYSyrrzPVf7fdLETjPoeWEeu257KG6iGiCXR36F4HY7HQ6vcYc38PBxPun36FEs4xtyNLqFj9",
  "key5": "27Hw4gExPg6wsMF2E1nkvhJsv4FWrAmnZgD9eTUzS5sKV4siSBAa8ETQVivwgSmr4qvK8h4PshCNrgkLUVBo1KLF",
  "key6": "WhYLmye65Swd5UsjZUquqzpmphx35XRAhYzMBPPRactw9BftKQERq7cWbxZ5wzRGoYr2tqHiWExenDrEVyzSW8T",
  "key7": "55izkbLvGfLGcgE9XYKJq513bMyTQe1nb5LwMywv4ZonpHwCZk6if5ALEiAbqh1karNMzGNBYX1mADkpvzokFSKw",
  "key8": "5ZdWQvsUJBVySFwq2DxvCncNW7ST18DmDGjGX5316EBa9HcRqSRS2CZfMaBtPgVvQ2hY8jtTW3hnhiSfQhmoGAvh",
  "key9": "4ggeSkAaLVtKkehkdc1qQreDBx1qPxzwPxQaCXhJjCZ5Mwi4kgwQQ9nLWuneMouK7Tzdys5LCjK55JYdpTYQapDg",
  "key10": "5wuV2iq8RTQDwmjYgNK3EHVcDJgW1hJHuGey512bNE7QqyGp2TBphPx7JPaRu8sMGMedPapY5DHc2jvnB3C9UTG1",
  "key11": "3FAmL5ZaCBwk3AV75PQ9Cf2VZX3gCLXwqFLndThK6B1iQc7nqucL8mouLVXvp2Gi43VkhxFT1C4GhDU9bzLoUn8C",
  "key12": "QeafZzg5htirYmX8LRzZA9cTFed33CGDLjAjK8qpYioT5dfZiWjEBvXoxqfpVcbybLBFYjsgNKKxDRNDUGi8ybj",
  "key13": "5JBGipQkSXYvpc4JX3qCd8bDCWXeCAgHS5WCmNjLYp7rZQDJjmya5oWSjH3NqdRfkgkyiL3571tY6dk1dsnFVD2G",
  "key14": "29qXHsvVJZ2fRmUP4TjBgVsThUn4WNdYQT7TN3wJYughzSZZh1xvcCwyQLvyPWVDH3BK7Z7nNL3DhyB1NuccsfDE",
  "key15": "YaqeHtd3qoNMYo1cmF7SZwxayAnMZFGKs8n63YwnF3wAuW5akFT2oNb5hgNECBzKgR6UsncronHiHxqXH9gpkW5",
  "key16": "5iEuyfTKDjUjgDsVGy6kgCYCSRWYJ2jVDV1eZ5j8WNnm5FCGoYjn4VYhmNLdBEHsXvGgJLLMSQg8nzTQhsrVqmme",
  "key17": "2e8ZK7HWWcucKPVANU8yvPLmbXUh18MECn2qsKbuR2F9nAmmX7moXDwMX2eAf6LWjF1HjUPsn76AM34kTKAAe1Ar",
  "key18": "3JGSsnMjzVmZPpwJ9g2uQYAjzUghk2JeWFh4BpTAZLzq8T6TLkpCWsg8wPCfkoCtmj32tCc2xC93RZ11FmFuycG6",
  "key19": "4DesoErqofLbsys34xHrDz2C3dzDFRJqcfxUCLvrvZYv4M9A2h1MvrvzPG8DreZRHKRqvLYNp8ZW1EqLUmhwh21q",
  "key20": "2DJbuUV1woMwNKADWirUaMqDDVNNSkqR8acHb5AU81NEpw4EkC3twsX6TyEyd1LGxyox6hLFJmaN7qZX5BZpmQRM",
  "key21": "655SDsV6ukzdcdaKWJ8FBVjKMmNQ5rbWEdSmRMs9sWbq1X9HUg21YWuoHRL5adQnh7qGAXEzA5eLQpKYSsA8XYyV",
  "key22": "4KjpvyXnyKCZKwD3y98GtKonPQtSrXkJEA8cW81AGByifGndwH7nBtHpakq6Pv93uNaQm7B8xTsF8RhD8dcM5Y3V",
  "key23": "3SDNdZgSZB5fymz3wbCN7EcRodLr2MPfXjxBbABUq1wXB2sRHKDaH7wUsuDfpxARu89PF2VTEQUpN1qmUnhA94zn",
  "key24": "3yVaiVedQy7j6YoHjCZkcHyg745gT96HkmrN8prdM9zeokzGHiT8bMtMPzJf7PGxjk9sfUjSGhkLWazRR9pifow6",
  "key25": "3Wrzy1uRxehPB1wf5nwgq3SZRFarXChaMvnPGrzpW7VaVixHFAFKr5tPVMC5tBrR3gHLXP3XDwTG9nuCMmvFqind",
  "key26": "2TioQa6LaE6ZkXhT58tGu1mQaJHwMoH2MgZ3HpNFYSpfijNu6wWvZvFxKaUcEKaWcz7BCi7Lf5xv1bJVbeDaaArF",
  "key27": "3XAATbnPyynnaVZtvj39HW6MAdiMxzPA8P6tymDw9VhfrFC19bavrUeKmNBp596WPBxVu5NKWUeZPxSsMbPhGQMd",
  "key28": "2DfjeMTqhLQTBmwgUCvmQw7jXgZf5i2Dk9gioeiWepRAKiKPwFJagCYzJTHPXDb4bSM1YphzwrcrBgufX4WmYQ6P"
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
