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
    "4dsNT4KcWCKFk22n8Gf4dJcTBrvDyi5YnAUdCcg6BUFS5b4sn7CNjNbpvcc3PVF11u1BUBJ4woGdrYNWePPpSioU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "211R22SMi6SH72yrseSwo4A8nYgoRhFgH3pBnFwtKAxNxygBjC1B3D5X4xJzfkj612Lef8ybTJeoVLeHfV41rLJF",
  "key1": "5dL6T3ybEkdgsxjPpHFjVy54n9sXMHLvhj71xReMztSe4kdtsza9MHSAcjtauFeGTWJhjeiBce7SrSQ5dQZXxBgD",
  "key2": "3Mk3kE8Ya9g1f3rSxbg3Xg2QjH4qRbDANteArDsywEu11QiYsSFQYuxNRMoYGsubZtcuUR1KyZnrgEpvrsZqhoJ4",
  "key3": "2R8FghPC1zA5SPLYsTHSkpXMepjyVQPUhLeijKKtGo6TzzhSEtYX6LyX7WPa4N4oweAaLaJP17hq3LTmyPo6NKJb",
  "key4": "3EjkKMxZuHFC8etn2Ty4qevLaAJHDcyeNoa88TfnLKjz55o7akhcTZRn6KG6SjVCMjJTiz3x9388k4kHE9xkyeTE",
  "key5": "4C1zaiMjZRNdn8YRAmzG1EohPuKB5YsMYvoVbNbxsTUNpFhYL4U8FAR5mEvng7GdvGkvrnwpF8diTdttZ6Uxnnc6",
  "key6": "3ixCjCu2KQc8KLw6Q63rcUgcvMAxrTyVxKB22LB5mz7PCVcNVWvRXLrYonW4eqFkGfLXcngRTfB7rFzQ5HJetpJK",
  "key7": "83V4dQGd1UVVjC4fp57rMDTfPBhG1gZBadKAtv3RhoLFJArJ3qXPtJdtnSeqkaXZ5oPjaNfCFGeCmQBNTKbHEnX",
  "key8": "yf25n5481JQGspWhgHn1UVkdbRrvWb8kHGHmB6TRsBejif5C2nMYayAk5hk4kqvUrbjMBAJrKKAeHY5Nmqi4jXA",
  "key9": "2oaSNXBYQYZFNC98RYKckCm7RnUKiHkiFPhD4XiDSB9vX1mvn6os5NhLHBnc4g9QWxKTgkxpuXuUDnE5rYB1KjSy",
  "key10": "5dNwxbrBv5VmrUZYL9nn7b8cqp6QVJpyY2yJL42Ap4rLq7aQZryu5XRpivqgUHj6c7dRzk6MsJ6KkrrJRPyckg4T",
  "key11": "qoGkdMmaiDMp4u8aNUBjLZzwCnSCsFyQbuqjfJcDMWgWdCKJP5444YU9cbqWkArGXo2RpaHTvBsX2Ykx4xW9Udh",
  "key12": "JQKeVtVAq59KUgvKwR71vcjadGMwAfJB5wqrZWobHGfSRXVo7yVcarvfTvCmnv85CeCYWvw7uE62Rt7iHzTdiJv",
  "key13": "3N6gDkY1PJvxjDhfZrLW8dSu1Sf3LL5vhQ6vJ378qJNn9c7xv24b4Gu2p9a6QoDsXm5ULphFtzzHYmtmXrAFG4fC",
  "key14": "37T7oHWhWWXxEVjTotNUZwZ8K1dcDfNWxsja95w8Y28vf1wTHogyasUeqJWgsbY1G7WarrNqAriJtCL1UzhAEvhb",
  "key15": "5kLeKVfTggPnWFDEWai9pnZPBL13ZFwzUUWN2Ua2HNzzhi8ejuyNBRxP4Z2xYTQ7MijfdKX5ttePCDYwPcbzfYRU",
  "key16": "oLox9sb2FENNq1rFyRvWjRzqiBVx7aYprHPViQFPmEjkGuaF9sGaZaE7oZmEYRXXsPCsQWrDWsNKBnAL5fiu4Vn",
  "key17": "BdG8W98LESASywhWm6UHFkK1d6F1S6yME1GfuwBMyvvmrrbWwEdcf6NzxEhkHBVkY2V1uu58UT83fKgZEd8XAHc",
  "key18": "YPbfyRSJVzWzR1Z3vCvKuiyLs78PMTbQgEYodjmbzSuAi5aEGDLBeFmR3AUWDUhP9323HBt1MLKt97K58FTFCED",
  "key19": "4cJZCqjy9qkHn1aJytfoJjTGxcd34KSXe8PyR96vFmK4YeEMzMCH7yJ6TZynksxXxN1mJa6o7maonXRtEeViQaBP",
  "key20": "5e9P6hZERcQPTmqihQKgNbVZAYnzdDynouw8pX2UjswsJUHjg9UqdXYaFKwqJRphgLCqgSyag54Qtwyxmfw7vwRz",
  "key21": "5NqKrzBuR7r2aakTVMJWMMzUKf62ty8QSdqFh9HqA6LAmgxFGLqauXTuRtkVeABtaHpX8p3h9RhSeh1M5RPfgV2u",
  "key22": "2u2xK2xg2rdtNFqxriXC9Nwej7owL1W8Pob7fR5aw59Wk3Ti6LQCnVDhRj9dRHGv6MysaW2p59mrwzfCqGhGFWsv",
  "key23": "4EKiScjvwcNA4XTxM7jrcsrrdPSPiwHzii635vDVSB3aYAWzFTFHNaWzPmrnJnirxgcubcWhh6fvVXNmeATRkntB",
  "key24": "4nmSk1YKe5LbA75J4PCG9fzNcU3VzqjmcdfbmL1oEcdGsbvEyWvzpV2DDECxhDyt16Sz9rUSbPTW1z5s2yD5DKPG",
  "key25": "2VvJzRGir8vu7GmAH8ifAqMUv5XEaZtdkofmifcqHTcpiHggtyJFqvUB42FBLZW34dnHAgJZW81BtiUT9kzd3xQq",
  "key26": "2jRoPDGxzjsDDDT6QT1H1rBRWCNGywb7NYafTWeMA6WjWuj8btt3qMdDaTqrsopVYBySqpnuRrfx8v17SvDU5ehg",
  "key27": "2dRG7Jr6mEoe4xKqJKAGLWCfKf2Uff1ju4PEC7CswsbfcXtzd8V2Ua9iJ17srBchZ3h89hYxz1mSPPCLq9CDnxYb",
  "key28": "51zBMMTfREcz8SBoFh52aqRqsgcSy81pTtTYKiCTG5Mp1q1xZYDiDiuh88CmSgtvhWZFdRa1HbriA7sWu6iJGY5t",
  "key29": "64rpN1Ji2WnrMBjBsUwkhgaeYKfm38UNDccHcEcgr9FLUNg67Xm2Aiwup4Uh3V5zEbnC4yJqHL5JY7VBc7qx3Mrn",
  "key30": "kRVkDtVGtK5DRohpFcee7JcnmAHdW5DVktLhCQXJqoNn6adeHwGZfK2ZWGYe9zRsLoBYtPdMRgeEKWhc8xiZ9GQ",
  "key31": "3MyVPcWHy6jShtumPSJ8iYfsZ9tkZT4S2cx4s77fMrjGY3KCXjy4NfvPawzsPczP5gXtdtztaQ1UBVkN88Z9M8Vk",
  "key32": "22iBubCBBeeK1MAd5h66LYuqjZaL4EcDF2oUNC9pXXGDXfuYE7zBFxuhHjhgskGNkNPDQGFfCSAinb8jGfRqjMrv",
  "key33": "4z96yBzemXTcgJQ7CDsaWmhVAA5di64kG1paqpF6nUJuUr936VYR8CotHAWEUX1fCmSojjLrdg2cBAzmJCAj5iMm",
  "key34": "2dCWZGXjuBMdvcZuwZg628EB9NYWhAhKQd1zUS2EhZp9Q4mykvDdXWVZfcr4u86PfYnEqqsEmVE8xsMjoKFowmzL",
  "key35": "3hfRsECmLNXYPmkpTDG2po3qXRwcaHJ9xdq98nGnbhdcz37Q7FdJkMQ2iw1cNHxphX6mxYe5GHPkKL1TQHkXjPRL",
  "key36": "5qTgPrKkEQYqHM1FZ5fqBZzYkzUk4fkBGPS8StHWY8YLaf4KDerT8B6n2BXGbkCkjBzEiqv61TR5VJo8Xh8Pmmom",
  "key37": "4T5iEtJFGfAzNbheLJTypLLd99QBVuUQwnt1NQ2ywL9jwzdsZo7HQNNg8D3s4ofk99nDbAnNB7uKL76qXqAjmuJh",
  "key38": "MZPQxLWCLAzc2SoKr5Yk2jx96dbirw3XyF5q5Ymabqg1CnhUs7gFDsTZasKJNhJb1tmDciAgyeWXVJ9zKyU1esj",
  "key39": "wriDuRAdrLfmNvD4ZikfVoZHZuL9ivn3cJ7WPMaJ3voVoos83Pm3tU7yyrM3AgoFX6GTUsHcPYtexKUNZvSXSeD"
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
