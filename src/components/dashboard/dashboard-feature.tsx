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
    "7WRCpi2By9HGxVY85DQNESBenZ5vJghAiiF1ikwrtQYBAPhcXv3C6s5NbbgBpKLzJBM5wQx9rxKqmQWzH4jKyJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M4443Lhqy2kQdzqc2AMkErgLQrJbDDV2RHtrzbSU4FXuquLirVM9ifRH5HhVh4bB1KNWTqQkCNeA4W4bNMtkK9z",
  "key1": "3GA6RzKkPjaRCkTMQH4xPCjsAcei2meAZPTgYBQBkNkKFcjjwjZyks8KYAe1R34bjabC3L6R3FW6vRKaV3SEJWq7",
  "key2": "4FgBUoaKSRtGskw79CzRAVtjxdAQaEXcfmu1yBXUHBzaZanaWc1oKztNqKccd6cvmLUoTtsvkAUhQyGrCQW9w8Bz",
  "key3": "4XaPm4Kg7GpRjVYY9JwsCz4nNYWrUmYjGeJcWnkjJef2gEn2FgSadPqMT4BPQXRG8FsnctRK79xYXLqjxNxEEeMa",
  "key4": "SgaDZJyp2FE2DTobmHuieePFictmi2KjDWyX3zBbu4i94WTNrHQGkrmTZjwdd3ooF3Ds6yd2sJF2ehRSBr48xK1",
  "key5": "2ikruUYkPzgRL3WB2hQSWQPkDoSaocfra1Nrq5rRtresqNyzAAwPCVjTQq9kh8SiYG25Ki5DAwGjiqmZaVk5sAXv",
  "key6": "4KZYg7cfsETy72rSHMmM4gxs5mKWoB4gZwvA2ZGWqV8idzzW8MN4EE4sC6hPUJaUWAt6dPDCdmSdav6th8dfGAcm",
  "key7": "2yRqzbAshAjFo3CUyhFdTuN6HqzjhkgHFsMEP8CFzgAiYUMNnDzsa23iVqRFoVdfpMPC4e9R9sXe5YAqJZyvKdK",
  "key8": "5uZJQtZDpwQS9dCiY4mNMGmjiNpAtuV35abfA3Ta7zqJihXQVjPjdEC8N2kavCQKc5ABqEcdzRefKm7X5XHGRHQd",
  "key9": "4Yo5oybGs3afhwPqY1mvby9HBbgiP8M5wTDMqiQZjm1WSpmKW3QcgGcUApqWUgmtWiaiQkUg1YKw19EsxniqurhQ",
  "key10": "4BQJpK3ZvxLcgfAnaxkTJvTw5D4i4xBXsebsRwCimtpGXfmaWs6eVH2moLBdGDrMCvmQV5mwFWoCogbf9s5yWUA8",
  "key11": "3oFFbiK2ZHx5fF9mEtX6YrEJ1SsphicsDtPN4h3A2Gz1fM3nprijMDwZrNKyiZo3cHUxfQuHBaB1H9Ye9J6fmEFF",
  "key12": "3GH6HHrTQnRCigUrmBt5qA7uBeR8a73HgYPX9K6MS9ZGeCGfAyWPacuZQMk1mHMKCu1PCvwz6tc4sKy4p21SK1ZK",
  "key13": "2nMRyQ3nLLRe4R15LdTSusyhSn9nGDfifaD9VdcoRowVuWcDHu9PnnDfoN7mVaCFboMVfRUyQYxPmMdJkhRk9BDX",
  "key14": "3uj451xi6cp1kG5xmutLpxMVWSYik6H5gBP9bDCiexYy7myfBehzg2GhgQtw9xcjx7DdJ3gMSuXJmBcnB6n8iWAs",
  "key15": "2CBEjptd1eDhv4w7iYuMyyWaxsYG5QnQbRRVfcXWMRGancPgxLANu1HLVrko6iM2dMKjf7WnjhBE6hemJC6NMmWz",
  "key16": "E5sX7iMkNnybowNXtVC9Jn7e9cDVNAXGXiKjCAciwYYUvUJ2DyN3JZS6JivnzEtku9G5TKtrDG839GHMurw7Nvd",
  "key17": "5CG1g9Q6i4NgRAmNWNdK2QKGuQSReKTokVps9vYYPS6MxhCFGT973vPzULUE6LfmHBU3Ba38LXG8jVuJm32s95ca",
  "key18": "4qmxvLYeLm6DeqHxNiBCuo5u4ub6TveCdEfTAzZ8febEgdtrUhyxsUj46x5ntK2trRKsnceRkH4XsjJxsZGvLVCy",
  "key19": "2oVaRK6YgiSxAbuvbLpM4u48QHWfN1X2yhL3DPv5nyYfZmGpyV4KHUZEv3bs2PVxaq5FUiJ6Ls4DeuusFxcRoKtG",
  "key20": "531XcaSPSmmiJgzSkenWz7fozopLdDxErQnYLiUCCyWfKF4ELx2hJwa9Rwhob6q9NWubGa7JFcYUAe6BLUu89ih3",
  "key21": "4XebeVJpmMbX14dihrbsDnZFr4CGNuwdh7tXii5SEoSbHBeaKwGGPPVVmDJcXspPed35oPE8H5WVBxqRiMjjMVSB",
  "key22": "4Wy3f1eE74KNQs4anPyW3PVQpSqRzZZjzTKZncTHecoMfbLMUd2zuwiYS5qFjPBor3XzrsN5cpvFLNMM7V7PygdB",
  "key23": "6514pXexLjxTyhKgLzqN8LToNucDYXGsFZU2NLZ7QbrodXtq44xP4HQLxVKkqF9LKHKCN7QFMfBCqot1hNyGbCCq",
  "key24": "1G62xUumoN4CJC5Za5yJEXbcU98bHVUXhgW4geJnsbyEszWM7BcA3JDSCHH9RLE7GUeoGdA3MN2U2EMhHDPRib4",
  "key25": "3i86RdWuUJPKNDLggUraDQp9xq94mUa5zU8DQk7PUhJ4Nm6zHnauhgfVeDME1gbfniT5DgLcgjDy8eBzMj4jtxoV",
  "key26": "53jzLxpH3VA2Fp9zhfWr1AjBM8rYjYdAN3owZqoYpmfQr5ui18a7ch6c1Nf5RT2HtvNnKyDwBBRErzJV7AP1V3pP"
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
