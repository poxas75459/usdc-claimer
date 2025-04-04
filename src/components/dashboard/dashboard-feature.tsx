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
    "2GoQRHSeTo4GGAAcHBeQeo8chUkk8gaAjmbLa9TcxgxzSQ5q613ZFZhMSaYiiaifrnQjhywWVnHgkpCeq17o4SkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J386yiPbeXuYdKQCJDUsYb6PM76wHZCr4gH1c53JTfuerP2vvmWj2iXPHvkKwzNyEVT4FM5Ge4xd8bJWGdCvmL9",
  "key1": "3QZAWJb3bLrcsGWQc85NVXCgBFjnxK3PFWNtsfm1ktqiWVkh5t5uj2NwWqidR3RyeKX1McmyetPKhrQ4SwfFcu9N",
  "key2": "4jvh7QVgvMx2CUKu9m9Hn7r45wAM92hTiXTUst4ub4mRQ4ksY68eZ6tdfQ1D8HGQhSMRs9AqrqZaYPyRDooRECt1",
  "key3": "3tzmR9gM3WVHgSozoSsqfrLrvrbv4kwuEYEcukwxZ7KFgsqMrxaUHV5vmXQBAf8nYaXMjRZny5P75KdbpqjS52JS",
  "key4": "A32b5b18e9SnNt4Fgv6CcSvVBfpLzVXCXpdWBt2LsGma4rt1To168KfPMJbRgamkBY3Dz6gXcVh5KA7kVk5MNW9",
  "key5": "Cs2TAqyyrYG3kP8bmJkQFMDYye34qSDsfqZzAbXYKKQmAYdQwEf5DEb9LQdn1JbR4b3QFq5NWEoZ1oeL44npaNY",
  "key6": "31VAy7p1pW4wQRf8AuA7DG7BkkRg5EhgfHXh6nyUxZ318zbV2vXVTiMDy3wV4TkTPcuty34vBM7RLGVp533KcpAD",
  "key7": "5kPfvF6mrUKSKkqwrLrqfHVFtgBpWJwP4huUuaQarqSAEJrhBnauuGNbp6zhvZAKGWmLYAcAwpGihRfMEeWjs2m8",
  "key8": "2dv8nsxDJGVtevdkfgMrQUhKKbB3RAH5UUiBsfyxt1LaYBjY2x8UmoAkcAzRwcexY9yn6RKqmvvQMa1qjhGaKmxG",
  "key9": "4ph4voapjcdRSQxf29ZEgDgyuorazq4faKX6sa9B9GveB8rKq4cRGgTS852DobzbAsXDzLVzEjKh3Qwnfw6psAVa",
  "key10": "5wt7RvWhG7vGjdsvt59Lh1cs5Vks9FSgg6XULygn5xrmRUC84v9E8yFd1QmSa4AvH8ZS5F5Ly1e2wnUxeysWtHJX",
  "key11": "3x9sF2o76GGwQqbNR1gnwcaBkVeCwpJwXXWFJYRKXWAKRpAwWdCbYv9QAkkqL4rjm4uvrbe2EvVTXDTEHuEZiCjj",
  "key12": "2H1piTchDQpAE91zFj1giCjt7eUQsRUUY7Vf7DgrFgyWeD96cZvemUGEddL3oZ1LkSY9dcntmCRo7kc89tiT1cvv",
  "key13": "3sBcLHtxzSdFgCpU8fygEL6nuKWQRVa1SesksnyE8ccjJnacTArE8JN99jaJaLZ1hxSfi7YsSekh6MuxjTV6qwQB",
  "key14": "2VLYHF5jEn4fwkhA51MbT5fDVCu2S9dqwyuwp7QfhXf3siZMjcPcweH8211qeZDCQ2BnbERpx6eRgkkBQNLZm27U",
  "key15": "32MejDhk5FCLHPKZhVyrAa4oYrzwqn5JYHiB1LEeJVvTCw6i5DimN5sCtRwjxBhYbh5ZF3yB4R2vyzigPCEekHmu",
  "key16": "4vXEaYGeX3BJCLk7RNwsyxqGnDtnoPH6CCdVyMhy11WjtCpC1AJHskCMDmmF48nUWwp13DjHrDJGAJXrZbiG2GGV",
  "key17": "5Hs4h6G23fijzwTX5EK8i4GZpG3nBQiumiJGHL9PbRpgoTHJEWasRqTWA658GxuKHbdg2AYVFDWS4LFESx1XVMHt",
  "key18": "2G1NyNyYY2UhKU2DiyHkgnFfDARH9PHDArEmAYJ8nf8PDyCm9dyNn3TtDAMNmUTjhUKq5XDMQdVxHrYixhiYJrkC",
  "key19": "E6n9HRe2VH5opti8zCHqREusXTuPKx33HpVAkXpH5joSCXRjLWhr36qQABxq6GgDLtyqGDJvSgqye9DdcCikNRm",
  "key20": "k6QynT7hCKm3NRi6xLGN9Q2UeKiFU4VXKnvUpVUd17MU5DiJm15aoaWi2zW2jTGyqeynaWSN7KLtj6b3zpA1LiT",
  "key21": "2nLK8cLrJTB1ovzzyGA6qcGHttydq2YGfNN8hThCiA3tzmu27b1MFhsM2orH8f54764vEKQ8a9C3xhR1vu6D7LzY",
  "key22": "zpaFdmkQ3BaYb5n58G2o5NiXU4omHzZPJveuCYZEEZZVQCMJQs4UGitd827TdLC3Vcwhrx46TCnGtBJPBFcZeQq",
  "key23": "5w3n2Gx63jfVxu3JPh4bAxAaf6T83cxRKCjaTMaXjqK3LCiLMVmHqkYdG4ERbFRUUscQamDVsEtztLt5jETw47yq",
  "key24": "49EJZdKALpmKSc5rNCVdkK6y5gKussgE9L7idqbqF7DMuksW6zGiYZSWsDkaHuAGW4yFe2L2MdPjUhnGo7EzoA3h",
  "key25": "2hYSEqCyr9uYa3UCmZmRpGxC9XRNx2aijT1PDbij3tqiZ22SQFDBe7skg9wrGzqGzTjoXxYe4x8dxvjF4dwb61n7",
  "key26": "3zeoieB8KDETQYgjFvTWxLSosuQQUdx5Vq87QF7v35DPbwrbC4GcbHhB4DgJ2VWwcGxbsaimibBZWxTgDiJhjeZe",
  "key27": "Ay5saog55jvGzchdqVo7LyohDznjERTvtKsdC6rVJiTigYroSP4YWYf8u3PVYsEH5yN6saDrC2US5qv4dwWeXKg",
  "key28": "4wu3Ask5FGddCVxxkTfMYoUAH7uE3z3GCipNrF9AUXxUWXekLKZhCoSVZk4hR7EZAcQitWVX4Ve77pm3N3frbpEt"
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
