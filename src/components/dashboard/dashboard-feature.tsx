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
    "pR3eUVyrUaWEtnTt2gmrMsnnPkjdVPu8ctP2RUcwGvywCQumaRHs2vt3kgvfYmz92Jzk3gU4VAY6jV6bKnnYk1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QiV3VsTpnQSEPP8qa5F83bbf6Z2thDDyZCnXyi6za7fZ7qTEZY1nFjycqjUB3Z7B7wvKhCoAGVfcbhNghBnMspb",
  "key1": "5Wvts2qtGCDiteeED19LkJyAcNZQ26T3gQMTUUAZr2oFbHEmPuGgGYbzL8JRXtm9iiHdAzM8VsxtY3QpC2GxSGNW",
  "key2": "39gmJG4wkGa1bqnCiDPbyuDCpvxtirQs2pVJUzX2UvbFQY62YRPPKMvTNgveBr3hBNt4E4tbztAjxdKThyR12meh",
  "key3": "23S15KgAQw8PRnGW7PFPRbxccHwCYEgf76BTk5gvQ1piw2YWBjEcw5Um9krwmNcR9ihjPnHpRx2tio8N8UqbgiV9",
  "key4": "5eamhdG6m2MVrAGXw12vU4KtzuwA3LxLkGWGLuvCM9L3eEMkMbtd7GMWie39Go9aEHG3umgC8gFomwb7JR41SB8M",
  "key5": "2k7xNMBha6oqiKCmmZSxt2tSJyC8pBDFZEGoPVV8sEdcGfYKeTgkUVFsiGCngXWgCATcBWFSSEawQEzwBAvcZStz",
  "key6": "ffXXLw6ZkEwk8fYXqtbHRFmr5XfYKeBWgpTppvJVo33g4r2GHusyvEPLvGxqWHH9cXZm3Drd1CBRrvaYnP3bTEi",
  "key7": "2JL2hWATvWcP8SNAEqPSAS1Y6oLLuPciLM2BK9E8ktRAWMXbLuTGtFiiV6k5K8ZCxdYBeffQDFoAEiyGonVthZji",
  "key8": "3VgcPEbBGJaysHxwjJe1wGirdEywDqyqWLUuHUFz3jz1wmSn9mnK31Nx6jNRLr89kJDdnJuNtgyaNTEGxJGcBgrk",
  "key9": "3E4MjW2oVbD6HHSKrNYwXRhQSCVU516gfkjNwra5FxWMwseoV7KysgjvCEbnyK28r7phCGCwrmoshMCaak65PkVT",
  "key10": "4VmmhvgLRmK6Txev1uNkbthJruE6cSDu2Rk5jyDoNbibrZQBvoVZGgVJS8PBosLNYwkFig8x5ZF71xWGBHAe9hH8",
  "key11": "28hDHd1Viw4daCvTbXpwJGSfhaFgdYx1Wopfoj25NoiaiT4bQL85Xqy7XrygqyTfS8Lxx1e6SU8RKpQ3TD2Xed5M",
  "key12": "5f4A4n2bfPmzFVPyabgmj9ZMT76jAXAyEUxEiwAuFPMFvRY8VScj4qXvXnRRcTp1g7MtT52xYCV5g2unQ9NyhjeY",
  "key13": "xB44AeRkiGTPJd1foGcCHKV89J2EtpzYne31AAk1GjTjZYYDvri9DF8Rnfcur1awx5sZ2Yimb3SVEkTybmEHvw2",
  "key14": "GuEdrc72eHUTSNfsvxj452vvqgqQM3CnMqoGmpoZrH1PpXK2cYcqaM9dMQf9ht8Kn1AV5fxMhdePSeqNx9MX4mA",
  "key15": "5V1LgHisnDNcQ6Y9UaZyFs9yb7EGCDMf3hwoY9DbuFf7EGyG8xfR2EmUoYBVFE6s84ihtXBXaxncf8DiSGrDWutT",
  "key16": "2kiVVwPKufhrsPp6uT6m6hsmi9bkFii1jEzrd2Xsyi8qy26yQoUQYDTHaNMJTuUwB3cHJosyWDUA87pZ5DdiQCdx",
  "key17": "4go9BdXNgkE8CkWHHidh7MK7qY1J26uC8EKaNaGUqsh8kkrHdP9TWZhje7Gd8QDUF6HiUoSyNXrD2hgCaXSW2asP",
  "key18": "27Zqp6n1JeuJRqvQbZ7Sw8T2UZbF5rS31xZbkHK8Nm3D2Sp1cgXxKBz4gKXNPAMbZEtMT7UQT6RvYDVcPenybwDd",
  "key19": "u6aZeLJRADpLjPx4QKBbS8zRuFUWBTcU2DGw8j6MsAE6syqJ3GyocPoY3XWgCGt8JzNKSw6ZdB7Gn3aQ6ANwtrT",
  "key20": "3z6Rw5ZDkzABXf7tJrtosyc4P26yq6JUq2qXxsDGJRF1wnzyhTkGNgT56ZSgVU4gAFGvVs1fzuv2uK5qzQEQhF4T",
  "key21": "3eFMrXhYieGY3zqjwqHTkQu4bdE9sY3RzeFAKBudjjJvjvczJ7iWgj9pFvuZU1FAQGJTc1UJy1wDdKJDcVcEMrG",
  "key22": "5ZR1Ph5KVmCExcYLXHdj5eJKGJF3q93szoWeXL5GXuSEssCuHGnMKwPjoDB7dMisJw6APbAqU8i3Xkwd71CzjgPo",
  "key23": "5hqBvMPSKmXbj8qejmmmXFLs6r2tnjhPAf3P2Z6i2awWUUpeHef4vmBWriwiYQ9LtQSdj9CVxgiQpzEfB8kwaR7T",
  "key24": "3WHdV6YAsSdBdzRzknjS5Xe6qzT61pkJmPqiFSrJW6oPEsJfgSQdq6ZcEq1JzDJ4p1BP9xiFvm4RHgKCsYprr4gX",
  "key25": "5NicN4dH5SNMTTwT859gfkBDnhGw5YCfFwMeg9a9LNFAH1Fzg3QeHWDXztY9yKzvnzSc48bzfEdf9Mbca97jc5ak",
  "key26": "4QNaWembhFswvTonmwNjeMTmu9TbkuDjaFFxqbfSui4Abat75qVKzjuN9w8fpFq6Ur9TCCKmtd9TzuPbonP6sUpA",
  "key27": "3MfeMgq6u3k8WmYKtGeNc7gSH3ujWNxzWJGsLL7LibX4mvw3h2SWYFxLvJchPRnY8vQqZKC3DPBZhhbb4HJuyoat"
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
