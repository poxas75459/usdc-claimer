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
    "4tUp4MHfZQeuUQmMquUAq2ofc8JsBryjwah7VeBMdYt5aevKn7wABbRUQe1kd4tYfHjDpj5UzUAjN2qzcFd2m53k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BY8rcgN8nvjivBNdKmFxTVR25eKUWnvjUMTQjFSN3Ze97pKzyMUP75zfsfZZNmF4X1Zucjbj6eXzu2zctXDGFFA",
  "key1": "3okuWuKmDeA6hMUK8NmbRA6xiSqe7RbfEPWiEyd4TKGF9wgcaUq8wcU24HD7LGeaELJTk1shHSeAJEYdhwQaM3PE",
  "key2": "5R4yb4MgtTzSEcLwcognyTu4RbSm7EBViX2u7MVDYkeuEKRzEmiB7t1zdoAj9NgsX92JYotTHUSQQYMxauomCF8K",
  "key3": "33P6bfX7zd6dEaX3v7QVSa3HZAkuCpoG82Bhb3K39e5CbKHmV62TsVqxwte2dcUXkZr6wab843DH4YjgmHXuM7Ys",
  "key4": "4RRrHUA3wY72nUcdXYqPi8toqVZWSg2en3ht7TEc19JE7WLwqtTyt6DZmGxs5M3woEwRLGsUPnhBTwoVAqvEmcfo",
  "key5": "3yKaqPyBCFvGBcuTJKUGBBRBB3ruS7L9mWre3N1eTFLBHVcRTpaMjTtnRPeHEhynfRdTV7EbeK36SQ3LQbKkKqgf",
  "key6": "2sJ5U2n9aR7apZGTNhZXZBaWuwdgJRytMtE6BNT5mCnUaaPX7UXHbrGE2fqpX3NVYxD1rYmbQ15jEQ7yzQAHXngs",
  "key7": "2GVKZVVvxEsN7b9SZ4zuLdQxKyf8JRsTTu1VFtKSe2ZmbXy8qae1AJENkdw3ChswsvSavHJuqSKm5EJtMwstGrXK",
  "key8": "31d8QUdCyAKkWSGrCymsuUhWL2nNp4noQkx3bTeRs8wVbzJy61yv89Co3tssUdhE73odXezJp3RNQzDs4phr6t6J",
  "key9": "YhADE9pgC9hAKLXpSZK97knDBnNfBn34bci37vNRckK8hBKzw6o84ZwwVxa6b4UgZsPHbHqQCUbj3BhTdCEdKLY",
  "key10": "3Lh3P7vuSAnpJv3GM6ytRMvdcSHdWRAe18TxyooHvVvxmAWkc9vfQUXoqzskb6ABa5knnwDCL1PXquaW8hxHwg9u",
  "key11": "gwGWFbT21A46SAmkjCCANGtu5n43cNFcpYtn9QAJVcUTXE6a7dF6JSyzo8jxQUW3h3nJf4Cf6ijFyprL2P8KFxR",
  "key12": "NLwgRBecLTdzUuf9CE9TSXQLare2My4VUEmWs7uMFcCejtQo4qUgQP4bnXmyU2Ubtn19xa9CVSMx4qF4tsUDSwW",
  "key13": "5Q9RMSLXfwP3BBigahGTi71FasLj8sGRzrn7WHS9M7WQ7vsHjQfTXRZ7QvUYqtti7j64EeLLGYncqGZqcWwJ9Eur",
  "key14": "4euw5QjEL3gU7UQNBBWM32cRcqhvkHo6RWMBQTGapexz2ZoUHcgwX1jc4f7J8xoheSxv6NgDCcrSexVYHq58Mgkw",
  "key15": "5vaoTyawTYssfDmrv6VnKT7AAXfpre2entgxpDZzHXVL8vsPEcCEfndAEGPHXytxnWAnLHXZB4cdgcUBcjNxiHoP",
  "key16": "oUiis2bJ9KRUuDUvk1o5TPuogpJyfPsVPLD2TZru6fgqtiEH4v6ps1bCWj8o4qNnjgrVw4znGAye4YnYUoApXFX",
  "key17": "4Bzg4QH4CbihbcdwtEcSr8rX1WLW191jyPS14ifB8hQ5vYQsG4S8PvwkiaAwb36MWKo4ygXJbow9okJtig1uZJoy",
  "key18": "3SKZj18rCDfEmRVETngKnzhwrG35LxUXaG69F7MjM1k8qvenQgMvcVhToEcuHeUHFGxR3KaFk6JSVwYDDpuh2NDr",
  "key19": "DQn4ViCMUY16K6Q8gTaPpxErh4e6dqKPtwFzjEivFKqeNm8Km67LHUiGn9Eo5HLK2jic6ZnUWg9bXBS13HXzGCL",
  "key20": "4rgadFAd9NdtBqagvm1qTF3LEsTrpuTVKCMjWnVXpxyLpq8C8ptaqPu6yTigTKxS9j1zbnxaH4ohoBP4DGeLx3pq",
  "key21": "67RBFfaPU2P1B8JipyzfGdBVZXyFaHw7jAwmWKhxgwNUNXdhGKhKR2eW7qkMhNrbUTjTRaeieaWEZW4NMiM7uXd5",
  "key22": "4XoLgj2q8NmiBfS4KUEmkTjRKZXgAw8niKLPTtAj76QsKBZv7pxwLGBfcjvaxb6o1Q77yrSuTZMcNr7fWi2WcnvC",
  "key23": "61e1ZmZCFKxaDYXbnjjpvAciFYH7XZSuwR4GCmkPfEL6DgY2G4ETmBshFNSg6VXPKd8HkDVMXdnfPCCpwHCRjrTS",
  "key24": "Qi5usoTgLY2snKcyFGNMbsHx4oUuQnWGgvc8oeprEXb6biLrfsemG3svU4pzMvStwcGctcU2iJCsuXHz4ypm14R",
  "key25": "2esUabyDZSLQ4cmZGGC39R22BWRtfDkfHfzaw4WcDvWScKAx75oy8GGpTp6t6kFER5cYzrCrHKBZyv4chvsFLVzk",
  "key26": "3rGgkVKwtDFTTooTLfJ8ost576FmzWgVC4MH5sMVd8vkFFfyWakndpZn5mUJ2U7d8C4W5uEKcdMsc6z4VCTsEvMP",
  "key27": "HMRhcV9XYXKDewP4C8h5uUQwAvDU2dcykCFBvpbj8EKza6AdQje2JALUcy33pPGTQQFvsNQ1cAsa1ianTdkWbDh",
  "key28": "2JwReyxvxwCQu7kB5bwR9dhPgBpqe6YZs7S72h1X2AYxfhVWmAy7ZaMSVDqEsvoLn4eTL5edj2RfE1D5EzDMQMsL",
  "key29": "e6HQRfR6pMKq8mfrQnq56TdXRmNCSY35JMPHwsMscqbjtZzMn8pY5kBiiVZpDMhBs7A6BzEzrCp9W3fSuY6adfV",
  "key30": "3X3U4mSYHquxkKX1f5KUJaS85BdN19nbXC6fW3WupMvx25A7Lu1HnMZvkiuabTpyn1A7LedY7kMSWMGMjAUsHnyF",
  "key31": "3omaPZuK9P22ZGRLjEEttLg3SfyPan5yMCb1845ezsAHHyPCmnhJnwWWMfj7QBgKDWBi4GFCpwoYQupaB7Wx6D1f",
  "key32": "4XZ19iuugdd6qb3hcK6hG7cJJ9W92BKuZeQ1aFzWcfDXRgckEupZgeJDCFk3WLzfbSx6CJhd9ywfphqJvBV7Kh7A"
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
