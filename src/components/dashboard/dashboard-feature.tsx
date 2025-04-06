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
    "41Gh458ZEW1P7UdpFRdovv2psoR2fvYGbnktobfkcxVweLPAgitxqo6F4HafmQMioaCoSUVpM1kCA1Y1ooCXyz7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMp377B5CyqxKNv2HKQasD6JFgsTpiYD3pkfZYU9d74dmMKSp5yYZRWHCNNMDq5UXYKweRMbbBdtHUBHuDJ3U2f",
  "key1": "3P8KhvbA5TwhboPGfnHfXELN9D2cV5R21TFcbZxvP6aY4JKUth1DuWrmYAg7h4VkpsiKDouhdMQ91NC6gKdP9beq",
  "key2": "5bdC3XCwiyA2gmrRAR85GZEkUmbawC5PbiCPjG9C9tGe3WZoiWfftd3JvpBg87wjqE4pnRfaiAaoqUmprkc2NaaZ",
  "key3": "3b5GJskxuA8jVQ5aaqDvM1jnYwfdP6Bkiqba3FjAyJxPPdNZbXREFN8E5nmQG93MRB1R9AQJcNv794goYYZ5RDbw",
  "key4": "3kGjR3PkGqcRNXecreCeDQbBZ18B9L7vn9TkuUcs6hpKRQqAwTxqFy7of6W1pEv4t3PvD2ugcHJ2fCDzyDzfKMdT",
  "key5": "d3QeB4b7u2xVBWYPPnufnKHNoaMAxksRb4Zz2P5Ent3S8mPEuNWkBcR31Kxpob1bbUoicrCLtfkVaLrYwbgA3PP",
  "key6": "QaeJpBuLj3jn4V9aMDiLgsfmkwv9jhoj1WATczsNvBtjrtJFmJfVRAYQBn2JpEY7Ddki17PJkvPdyypEEaXAGdX",
  "key7": "4RnqiH5WyyeK37d1kJMYg4E4nB3z3XdPxQ5UA4yYTo8taGXJUs5Lw2iPTDzq5b562EaK6iYgqdhjZNqZRh94Kvhn",
  "key8": "2ZYd4mnNWPPgCuvvTKFcx8c2qg3Ey3QGavMV92MftuRWHWwmGvq9TTyP3o5Yam9aj59UUvVJtCXiX6EFRpMUbc3d",
  "key9": "51wcbRsxB7aMXvsm1kGPPnR35mUKZEAHdYmbY7A84VfP2YRYgoGVBt8SyQvKxE1cJ1j9oXd5JVR6a4zQjXYXyvgU",
  "key10": "5px1AZCFGuWpYShpPx4zs84QNVR3ziuuGWfftHPQ7kMwEoHpsjdRm2PgYSbTsmJ2Ai9KPkg9jQGhNkMYF9dbLJwe",
  "key11": "3sH3oQ6yDY1dV3AzACn4AqhQMBC2Ra1h8TX3vtvECrBcKAAmvJMoVEzfSAE8e2PbFEzHjcnDNRKpKpSgv9WcJGJz",
  "key12": "5Wy7Kg5ayMKjMSR8ZvtfRR5QL7bgqdTc76PB3xcRowExS2F8rdNrYb7cqgPhvuDAdMNBECvCKHFUPrzRqNp1CdkB",
  "key13": "678fwcKN5TSjToLRHYKNVsGQQTG873BRQayNGWYmGX683zh7gGDvvmTyayHxy1fZhUQB77nTZVSDRbzXwAAxX3Nr",
  "key14": "5mM3fqAphdiJ3yPCXho4BJc3fUtByQvMjTSgkcCY4DYiFNNoJcLznk31UDq7FihcYe89SpGT73y4mXGDGu2GucnK",
  "key15": "3hkEt97wLQg4ZJUCeJ1uCN1rauvr7GKsXyWnymDPGdWcy2o1xYei6cdWJaTLEjgY7YsR4qQ3eGkEqwcJqgNcL5zS",
  "key16": "4AWgR6Pd3Ajj14C9JoMYD96oJyg4R42rKes3xxY49zS9qQrrTGgWCWyjkLH9NTv9mwcP6LGi9qGtHrU7KhRNvgUS",
  "key17": "3F2A44PsZjjdooZug8mXEkSJyheH3vuN8wb3HEdyNmmWYTxEv2b8kV6sTVdsuBSP6JosQJu1tJwzfS7oPBE6Km7R",
  "key18": "4VYJHEjGxPvYcWo6rVSyUDEPPnCwBCuxDKbSNE2of3B2Z6gUhN2bSdty4tjdFHakvnMgB2sCQS1uwytXm8dGRhgY",
  "key19": "35aMJsSQDqGnUgmh6p3TVyKhM5PKFcfqvDcSTQnvsHrPAKDqp53cP1YWZACUWg99w7TvckYaWtnUpTXsW4UTByff",
  "key20": "5JbdQo91wX4JxHGRrdQh7YwYmdZAzdnkTx8Xfa15kaY4jQ3hFqP1NXcc6t2oMRKqEjxDFdh3pEFy6Uwd4FYq4dNg",
  "key21": "2fzGBdcekapvXNwm2NmGQDjJGWjrx4VDJzktFs77zbEuT6dxT6FwbBMNhrY7dE8uqKBXBxL5PXwR79LNvdFAT9on",
  "key22": "4GnbH2PqmiUhCiEG7kms7wKwjQkTrFdEn7rz8dCASi7ypPWKLg7i6xRqE5Uzgzyzzxa7MHdTX7ExL4pegJkX7oD5",
  "key23": "1aDocZNGmQXEs7rAwvk6k2vh4Xa5a4QfyBLDwBwDvWQkNAJQrUTLBz2NMnUCuMkCbYLvhFhdQcKjUYXn5rKH4Q9",
  "key24": "4NZ5NbQVqX7aHgVi77qSsnHAxqDpouofzWaYsGXcBzQ1NMrpf1vCTD4jdKzANVSiDR7LYmiSTovGhB8ZS6Pu2Cha",
  "key25": "3J25GEmTd6KXBifKnGQ7v4XvzEsy2Jg6yo8sxqfj2AtpiETRgsRQEKg7ZL6xiQWVFYSngM87mKzixqVG9w7gzzSi",
  "key26": "yyjXX2gv6dgkwZhWSfbobYFEsSkHTVWViiF2vJuFaiiSQNsgwpArZeACPMnLkXZQZjtt2vS3agBJ41LvXVxTx6y"
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
