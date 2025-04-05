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
    "57S3a243yCbPrWJiAPQ1WQXxy3Sfd28HbvpjriWkMyC3Sa87QZPQManUaijgPLiXtb5S96tVFaqYCwFcLetTyVz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jSPtoiTkzXwP4x8gsQqz9cGivweFfP76AUDVXGQNYtSKeRa7M7BG5T7T5WfzGGN7AhWARgCvmLX4SXXT2vaa71Y",
  "key1": "2vYK7RHxW6PjKmnCCvDv7m5jskaMZ2Qt8bgQ7UbHozUzZNUx2mvUjXKCurR9eYJ6vBCb3JE8WHFGjvtSBgweZVSB",
  "key2": "5T9CtHg22RdYXAjK9YHWYLZXacsGDD3vKjReFwpJP9F7eKS5RvPAUgX8Lmj3ZuAMZgxXV79t2jNiHeZjVZAmSTVv",
  "key3": "5Eq6kuNCJQCjy3oX9cGEa1pKc2TJR7ZBgJSCRy4dudqMghQUZTjWNXrwS1wP2wXWWpom2N5HbwYu9stabCMvUqct",
  "key4": "3sdPXH9zP9zCPk9dyRTD7t1tmjsK2kTrVoq1nyVU7j4pmUaXsAdUjJpMqPvvs7dxWuy7QxKNxiPxtSaZ5z9x1X9i",
  "key5": "5o8DTvQDbkji2GaV2jTaGyn4eTySJgeMofWS4VAbZ2ZEsPiW9eKEtCf4V9rp199j38ksUxsN4pJc5N1QWwo7hR6E",
  "key6": "4sULdGyTRLhG7iMPzLb8aGz9fwZqYc9B3ZZxdhRRY5sKPxgyTxRKNnwdr2iaRt7f4gcFUSXzE7khMGYLRro9Luc4",
  "key7": "2mpNwrJshLncrNk5t8oQjPB7RWQuSiXrv9dAgbbNWqWEnwDw6zNqw6WDGsn6FhzJzVG3DQhDHuLpBTp5Px1bZs9k",
  "key8": "2HURxPwNkT3bNBaMo5eZM1ProrLVteqqX4DdvgudkiR64r8mjPhaMJ7CMAAas2WM1pttTQ8Nrbh5s3p6H7Q5VKPd",
  "key9": "H1D8pm3rsSAY7m9MVkrtWuMW6Ru1GP737BL9FdAazLvjKzmar7Yfkj7gsaTY1foSUkHZXZsk5rRbjEsd1VErddv",
  "key10": "cmZ2GuLUASHYBJzksKG1sTs6aaXSvhuv91TnZopfhRyT34DLQRWkRBghQE8259M32KZ4Caf52Ybf9gQxCDB5MvW",
  "key11": "4T1dK1MKEwmoGQ8jNaohZYvL6mrUk7ScnXLGgDZ1uaL82mByBwZEFsLej1cetpK2Mc4A1QKqAyQog8Hp6DvTGAKN",
  "key12": "5FiuDE5a3ZJe494UDsPyHvtYu3pKXzgT4JkNM3B9utoqTU4x4ERiFCwe4GThqd7GNH4aFJuP8YYkQR9YfycTMU4r",
  "key13": "1n4Bz2qqBD9c9NytxwKmMgq4sNnfx5Z4pVHCKnVVs5WJJHrdHqBKcdUDM5TjaHPsb6jQXHkHnciDn9eTVcsAoQA",
  "key14": "5LwGQGHASbUsCbaSTBd4NETRvixqo4ZepJ6QWa7RdqT7iXremtJXkmHetdQPoszRqPmmMJsW6sAEcjSVErHMuecG",
  "key15": "58Q3MnVx6jR4AE5L3Af2wyvecMYWnaf3Hqj4TJVjysbKnuPLvSvzSoF8FpMY94BDrbw4cxSz7obPnRyedKVhLpnF",
  "key16": "4vWCfzhh3txSQ9GMgu99ZA1GdhdZSA29tP5X4cRwaSRB2Wrdwi6RxC9KuMMJqBzS76ggLJbm4aGpwGTp1qMyYSN5",
  "key17": "3RWUkWQZXyvF1ScpFiExYeMXBdbhqqwbGo3j6DoWKUZQ9gmxPXtEYYUKCgLvVSSPWhjHdptxHvLcPjeEgp59YGuN",
  "key18": "2hWjrpAFgBGwmeSYgC6eUiGpvwk5yXHZPuraG4AG33iJEzPLCPsxdSzVyeeWWMGJtWrxDrv3bY1tp5WEjWWgz55w",
  "key19": "B9omohcxEGzzkfid5bFSydzvcY8cfPVwMx52t8AATvEmJYpK4UuAeb8HUdpkWS1eEtKwWNBLCkgFppkSKLB6sM6",
  "key20": "3JW4HYC1zFdGXy9AZMai8pTSJDPfxGfTwhZsPRmwwx6pXv6BfdNQszkWSA1ejJAWHs5AMuGm1kD6HY13JUvHmCY3",
  "key21": "4zgQYpdBLqxentcEtRFqs8ntfjuQnYZr8KaCzwtThZSzV2Upq15D9DLUxNQyp6K9mmzBfEoGyDoiaZV6DedkS8A8",
  "key22": "4JsyAhEEgAxXQ8TktsmMDyj8ojQJFxNfi8kx1SovcufwNWbY3j2Fo7XtEAyutsNV5tEK1L3bApuUDogsLGhhbiNz",
  "key23": "3uAFPEvk979UwTgYyLHT9wp84ezMvFhctrQrNoyf8Nv9ZimdvBgRP84UZTt3fv352ArhEWLChbf5cWxvig1ki6Yq",
  "key24": "4ZjTWizAH9bewvBMKapeDYJQCbgBLRruxzDJvLdxtNJp7b2Z7sa3Lp6Qg7Z8eJZGb4vWxmEccT699p2bbwTbpcny",
  "key25": "5PaVNLDkbbd2nJYt61ebCX9MRfXrjcHwNjdpn3MWxuZtEi8W4DQJhbDSaxQfDcsz93VpvsvQ1oFMUHMNhdwJYqRf",
  "key26": "3nXUAPTTVNNKxjaJVmj1QKpg3WSjCFQJC4697j11263w97LqVz8SR2HLsNZgS8k8zV6Ao4PHfVqnSBjKczkvG8Bo",
  "key27": "2QCn2ANZGJYwqLsAHTsg1ajtDV4UcUWB4Bt75Hk3LCKCkfWeZLrTpRBxpqYEoRG91ZAsrZhrqbhEp5PcrZYTtGy6"
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
