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
    "4WtZJHczbaT4Xw3Fae92KvU9bhYCAgNDaQXLpktg8WNs1RaUQ2dQUbbPJDaLaxEbD7KLMZMLkCChdna6m12ziy5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zszSa9JyJTDEG2kioZTosPDadQnE7wpsNkhZYrUY2xdEwcp24wwPUFpLLwbHfGGy4HXCtvtgoYntkbWQeuwEYW7",
  "key1": "NStpn6P5QeqbPVKKgC7NURSPRtZJpEUJowHHdRGUixtKCYXU82bG7UGVpCUwFoGXhu3Dnd2GN2mv4oLFanPHEA1",
  "key2": "2U9jiapYZggZAfWNxbN4HEhvsvv2acqYw8c7fw3CEgcRn6x1aGcahxW85ZLmvEp7muhytR1ZyUXEtbnWuRFysYkw",
  "key3": "3ARDvWcsvnisot5HSXehLVbY57sZPMx4QYs8kwpr7fExNyVijqcucGnLwKpyJp5Th4vsHNutSaiEpBR4PjYB3XLJ",
  "key4": "SmRoiaWbJRZvjk73xEJVrdPC8HNQjUXWszXnCu7t17Aux5NzskNuJtjF67vY7qMm1w1eYGnVhAFWDBDs7W8qe2a",
  "key5": "4ymhBEWSX5K9AkjKghnoQuroeGRuaS7Az466uPTj4UZTHCg1JdppMa3AaXLA3tmk2NKJ59Nrs4HsAPgwqYG5YwuX",
  "key6": "2j33A5wXaLJwgHnsHChTKND4x5DbHTo2GgXFY9G6664MteTWU7LoJMPjnZum8y8bREtAmDrenBwsapucQBWbLoWX",
  "key7": "4eFcu1KL7uwauYXrj592tfwuXJSeswawzeVH7h4YbjpbjM3wF4XtbLBN5zo9kjzbh1kCZtoPP3p6qm6sAt9iZmcq",
  "key8": "3gLDwUeTqLZUTSf9qNtzpvYE73R2GaYasBXcv8eyKUZGVittVEz5MZMZrhBzrcaRxWTy9XKiwWMXwbwK4FbAWuBu",
  "key9": "2W9p4srHWukNaLm1GbpBb9D4vzwBP1VQGYNAu9GvhSBQm5S3X72SbpyGL9PwdXgLZx9eNbg2QJvJ4HpL86JoFWGm",
  "key10": "5i69eB5eNjuAHh6198c4kduZzWtaQxDZTghP2Sg1z85nBYr5TLdsPbrMagPaXkLTGQTQLAnaPfugaxRH2Z1yys72",
  "key11": "5gd2VNBHpZmfbhnKSixHQsfGFodtR97CSNg9kEou7dLCWK7BhTvwnWC32uTYiaAaqK11Wj55dZM5NRbsWAguii6r",
  "key12": "37ArEnXwmaKA19fxRLVKffeKNiJ76gjpMjSRGQK2eqqXxXrgNByXmkjEEZA7RnE7ydqK298HGtZ2hAcJhc6HkWCX",
  "key13": "217rHeRyEzPHjYMyKsecE1XuHXqDN8tdDBGLh77yPKLxDMX2efBTsRhwbVtVM12RFtmX6ER8QXJJEEfBnyUTXtHg",
  "key14": "2Hvp25bGDBb6aL7nxTWLfpMABHUQkgwgCHihERqiwsTM9ZGWnuCFBuir3WL6NQo5ZxzvLEAw6ZwEtZBkctqpi5vM",
  "key15": "4RQtRkWXDQUHNcepup4xKEuSxd8RuhwLV43cBNWF9fEbP43F9UvGWKRhR4SP4BFJYBnv4YKV8XAMUGjKgM6RoVDP",
  "key16": "2VX4utsDWQ9vdbCmgPYRX5jvRHb11PeDVEpkVYrkpz7qzWXXH5PPAT3Pv9ExAKkCyg9htLQuLmszJJe6RKyQbji9",
  "key17": "3dZAkvTS8BJ9hzWcALEVtn5Rqvcxg4XJdN4pM3rUsUdsyraNWtMKTFbsmxRtZQfwCJMigboufYi5F9Cgvx29cSmY",
  "key18": "45MmXmoK2bZ7WgCToAzWY5DXf7xWWEMqdQDmM8VhUeffMWdKxjDHos9drgu8ioba3EjC5dChm2WFhmM8ubDdx3yb",
  "key19": "28LCXMrNx3bPfGeLeUWkGzRGjcjsPkzJfMafpXWUCCqRnqMHNqQFJmJN9v1vT64DthAkHmvhbBqSdrx7dWME9Fba",
  "key20": "3jnVL3V8xd92Z37LoaTirZgLFX7Gc4GKBT7Q1fZQnv4uzrR3acpfgHbLsdjKRb2f7j7SavS3GhQtUgNSxBux6z4S",
  "key21": "3X1gFCuNFNmTnzNbX7QQWjBoH2snm6hDCh8dwgztfBtqtgB1JDj7nmFpkgnA5BuhXqWgH3V87cTwEBnEpk6kFfnn",
  "key22": "2frXpxetsp5LL7KwkQ39mPkqCPhxokuXqbD2wfnNtE4BtbqvvHFXWe1AWHvx5gP7wZywx6y6AvLLDj33P1c7jmPx",
  "key23": "4Rsz88daG7DSRKKD7R92aG5hPoc5Yy78TQBFN7b6rZEjR3ngsLoD1bjkKSdWAES34sKqJXucKSfFFt635r6d6Euy",
  "key24": "2mfXDm5NDzB61v1KewpwSaL96jH3ZacG2C34GD94yvmcsGUcNfbLuYuFU85uhAiFCRbMASfnHppWEJwYhRKmfEsE",
  "key25": "6124zNUDYdz5VY6doQaaVZZ5s7fkx5P3wLXdZdKLgoEfp26ikxe4RdimdobNe5ZfUTjAh85qSjTRdJzLfgk6faoM",
  "key26": "44Kn5vQdwL3RziLpU1bTAoT1AZeyK73enHaed15FMip6tg2aBJdns8ZE6nx6eo3oNJHpp7ETV6Mkiw9kX6nvbSdQ",
  "key27": "4G5sJ6Pyf5MP2hdxv45Hs4BBTG24qtkEoA6NcxqFXCtzxA8VZKXpLE5u8zaZXxy4jAw2A9gcwM847eU6m5QtZVBv",
  "key28": "2aC7qzD6bB7EX5aCtyJG7WrrNjpUUkJsZt5F9GHWK1Dzdfwnxybt2GkikksWYMf6YDUNX45KnAcTfz8WXqQH84PC",
  "key29": "2ARge5oCS9vo7ykxPojtP84nkkTMLVsMQkvvJYAPgukuprqkKyPa1seRCsRYemvLzC5nqHe9EYJ2CPHGP8a3qX3G",
  "key30": "S4H1ZKnB8DmxEaQbiMH8qkosJcBAan3Ywfk4hyQuV1vHAvpsvcGKnYxkDwRvG45YqwdCGV55xBM7UbKdth1ZFtY",
  "key31": "3eEt72WnpEFmH5uTN4PfaurrVYDeF6hoA7V99Zk5YByrvjsobYJcxp1uwWUZXmotZXLGTavDe5APBda2HuABopES",
  "key32": "4zstyNCvzXPEV6MFziVhy8hxt9YoeJbhiaTdMbqWfV3YYviG7jMzTuVRwhVMtZHNdZPpSgcvAoynqK7pWuk8mT2w",
  "key33": "2Qu1my6H1Q7xDHDGrwEJNhaEqhpsQLxiCxQe4Ur8AivYSuSP4BrTXFGLPSQAFaxwhg7jcxJgLmuGsgiUnAXCQ8sb",
  "key34": "3KBrwjb4sAsGChpXDZjiZAriMrgEa2P8FzyLEywEUofVxn8Zgy55Z7YvyH3hJVM7KvbmkSyxL1aVdtcm3yntrpNP",
  "key35": "3sfNSFY3ceS4vYkqvL5LRLW2aDcXaRj9E9vnGx7QZvyXBcHbZYaQxFpDU7Hqv3cUAC2Qo6Ae1QeqweJkpKv1dmwE",
  "key36": "3ArEuCCGUMpbnWvrAZXmJux5tQ6idTiRjySpVsV45qP97TuEsxNmCMKRqGvg8baPuGEvAQUh11jSsfUBaaQ322LD",
  "key37": "2hpsS6LiNp4yxhXedPDjnVw3VP7yGZsFHKq8AHTPSL1wNeCzEVzvUUjFGopUXkJgWNNMdpwRTtwS1tEierLzmqbT",
  "key38": "3pcF5JvnPiP4ZQryjyCVCsktN2sbPJCryZAgUqadzNivrZF9eCGrbQsuDjiTLoyugkGkiadxK1o59KRejHu3MztF",
  "key39": "2YNKkX8yZkmWyvPvkQt2bdGkeiPYtxBm2HscDx84jfX3AcXXEiR7FMJorgo6V7bK9pBiTpSTQFwwCxC12qTVU9TB"
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
