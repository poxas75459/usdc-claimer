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
    "5ky4dxDfJfBZ98VfeCUVrHVuHCnRwr7jTzdZN7PY6vuNxGLWA8NyLYbG6PgzExQe5wiQ9Tzjvt8KHfxAGNo3TxkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6WBTd8PW2gRwoJ7Z5g6cfzeGEdwxvcHAG9Cn4f552vzjNhYn2tdtwf52hLX99JD4AErLJajPGz39ES7w9g17sEn",
  "key1": "53fHngdwwHpX1vbV5qsgxFVqvJ4HHbdzr38v8Z4ifQkgAtg9knpvRwcZzMWQ7AgzQrKJGQu2x2iZ3WNp6eGHMamW",
  "key2": "F7HGPub3Tnm9uHup4t14rDuySr5no5SxxdU79vGxfJrt3rVirf7p5cYHntN1BaefZH87kkWfXVSC6u1TcJZDcG3",
  "key3": "5gFhvMPrJYCbSNnVYfgYrNJpGqZUwFwJYpJmvmhAinRXLWgMMUHYLW5X2EEjaeZR5GZ23QnJ1cABJcLgogYnNemm",
  "key4": "ibFQBa2vzpfnRgB6Kefo4Cm29EuGN5Rt5yuXtWfNjFnXnfutWzfQ1Qy3TeGSXH8ykE5Xz5P1kpadixqDRn5AzjY",
  "key5": "4ExxiBfvsv162vXfeYN6k3Mhc5QeQgAz45Bg6Zy94mQqBh84sgpgE4h58PTwGA1Jgtbsa1par3iqWrLSaKg4yePn",
  "key6": "P55CTpYe28zxR7NxyRBzvwF51jbN1LMzNHKzoSriL6PwRRKwijvKa9nsW3fUHLVHuByhSXvZep6Bzpwk4MhAVnV",
  "key7": "5ppK9G3s9h9Za2AWAChEMgDrxzn19hsgWQwDdVSK8ZXct9gG2JVGefDVGNMpy5hTqNoqXKQ6avug6iHP4orpNod5",
  "key8": "BQPLYMZ3LLKy3wjekrX7FCo1WFZAjpfhkofyGavumMstpbeLMDKx58q8wcUC4wjPAb9F85DAmVmL1n82gx7BaBs",
  "key9": "3fE2dCmDBK2kMTLiDcBdHs6gG1Pzjt2H8zv1x8umZYbGDwfWaJ7kEBp5Z7mWKXzdVFHYGc6KYjg4GPftjhjmCjeY",
  "key10": "3YcWGEG6trzLkeJ3EtqqUjdgENKfg2RmxEZjZe6oKFZVsumpYjEVn8E8rLegmZnXbPkEboZykPHqGqfKraGaL8hr",
  "key11": "46iCY76H7T4kyCif6avJPfueDhV8ifGVg3PX2m2NhQawJnBkLtQC5KZVSZcygQ4DEAqFLX474ezvakH8uvmQ1iYw",
  "key12": "31wkaDXZR1ifA5XbCNVhE1B56pDxSfA7UYVMA87PMJt2PnTjgRKGAqHYr8yXqZbAorQaRrDao921p4aQDJQFz2xG",
  "key13": "bCR9sSR34HyBo28GXJiqLDvYUvMjZDCNPkTvKTZMnPY3xaSK9559ZaYVUKzYcqVesq86jEzgQzZe4Uf4X748Beo",
  "key14": "5zvbJcvbS9pe9tWYy395p8TuFRo9TRppJepxju3RqCepcm6mokZ6fXG8tzSvMUfSm14DNYknqvCuwFCfa8XVK95f",
  "key15": "BgD2KiYU9hArLLXctM7GAmAoqaEpJ1L1eVK6yYTBmyaAbTUgwXhRthqj51hB3NXhfcDiMZYGNhCsfESPQCfGEsQ",
  "key16": "VSG44zbKk3A25GHKN41hqSSV5qVL4DXjy7LiR3eYdTSYgatgnKjwJZ2xKYWBHQQwsygkZnT1snh2wjskzr8FWDj",
  "key17": "3S4YrXMAoGY6MgXp1CBXuyK3Qui3N29Km7YrfzmfTYqzKNU6tbvMWHnoJmCNfUkUCtHu3e2wZDGQPMq5qb3d7LZU",
  "key18": "5UtkjuRq2PQhjHsrhWbw7vVMydwvDKWz8UbihrcwQtgit8JToCMwRkfFK8BS62mmgrLnzASnQ18PPU3fS9PJf4zx",
  "key19": "5PtfrPJfaTqqywziQFHs1GYaqPHr2afsqvUuxQQfL4EWjrsBygogwMhMBxwRT85NANwD1mr3XJw58bgbBbvkhAUX",
  "key20": "2ZhshV1uyQ4YjHERxxwUcufjiWvmDshJ9X7zJfkkRGRvGhReYD6RvuThcK9weEFnfvJbV2WFQPRGZTQR94hPwt9i",
  "key21": "4qQXDdy3Rss9B6NdPJcwqMmryVNDYcXvbyLpwGQNFYEVdtPq4uvNWGJmudRLRoiTQH3JigzG7B2mU413bshZBhm4",
  "key22": "27VQf1AWc6fvmbkE3aqpMSVwZy8zoVE4bSvCfA3BVzDeCVEEWDxzwTCvQXZpbemrEB7KvtrwzAZR8vFLTvcRjttw",
  "key23": "2wD5RFfa4ykfVyKzBkC9XpEVoZpJPnk55by84tKdwxsmTnEEuePtwfWQtrRRQbTKa9S1gYmGXEwHHiJLEUNnUJaz",
  "key24": "64XQoXj9UDVQh7KHLp7eq6FJEDtVtF3zF3wmDBEerFy7xdGgovJLs25iaV5ExweCFe46Sy6Sr4LxAXdC85FNYHwk",
  "key25": "4hwxx94S9LbUGEBHAYw19iYi9DEDn86au7E6VQjCcRrgC3uyWbAGaq2jnLkT6XMADuDHSmc1Ap2wUSAuTPwMM1mS",
  "key26": "3zHUHhTgd1bWJNNQPSMNGPZ1yxL812mK7EFb4YAaSLgLp5wJLBtvYzbFqT5FHwhuGTxxHo1VwNMG5KcARhH7vDwz",
  "key27": "3NouyxHSzCdp58iBAWsfGG99Dm81MKxF7zADhY7DxTpZEc6koPSR4EWXnRceZWfUAVv3Mo17G3wGXsFA6ehXn2H1",
  "key28": "2RQVjCPv8A3xkwaADA8njWWRvVVCzEap7ZTpiikEffPXsUEVD62JrutNJ3T6FKqoPoz989cMarDWXMrexUAsfkWw",
  "key29": "4R9a6Dz4JCpDBUGjGpDxQJS1zhBqTFB7a6Zwf3qqWZMdY74RnKfbU6s6VpcPafQLFn59k5S1C6KRVpBUuLWA8DaA",
  "key30": "63D6WV1ea6eJ4VLGGocmJ4VTPAN8VNfiacMNik86wPfuU9fhtwQW1vBaXGSDqeBmMRsUk5S3zdjWe9kwsYWqoxgw",
  "key31": "5BPu5LAwZNzp1x8ixjeU7hNyzXZ6gDKYJ4qGte3CfeFCwNuGyj3D36u1ygUr4MN73NrQHLHqr7VZGqbRwP7ZtGTJ",
  "key32": "3eCSnZ2rvJ6yLjGJT3xzNDZLSsXDjf7oqfWyCTsyu8GP4vofXp3rxfZentS5rbMNN9nhRrLth6uL9FvFRMsf5sW5",
  "key33": "2N4PM9sQ7GxEEcqdDoRWu2npjRiDgCYxzmbYiyfWiwENpW6oYjNi3cEGyzHhHCJEuQJnyrWahtXF8mhwMn3ZJE6G",
  "key34": "2rxVCorUXzTeQn2PKaQbfnfuuFnJXU89oneMijwJiShEi65E1NFTpEfKpN78tpPTQybhkULCnozCRDtsnnq98erN"
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
