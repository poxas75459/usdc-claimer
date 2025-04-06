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
    "5gRiBdgmeioqDExFdsbdHvF6ng8yqcfpXDzh1FkgXboMBQpiRpwKsTCEpfs519NHM3gsojeQkszi3SfhmGjz9xD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TrMfAfYZFFkviUP9RDrLLCPHT3uvM3FxccGhTEmvWB8um4azEpuusJG8ndwcM5nf4XKXW8ziczAURJVPgBCiUfj",
  "key1": "27Ltsps59FXCvjVFP6y21iT3p1GSNzgpKa3yaR1a9iKSZfFsuHuhG8EJ9XXza6NfhLA8QBYpPagqSiw7T6h817u5",
  "key2": "5Z6UWYbXHywiGyMERRLSajdTEokm46WHvYv65iJaAbm1sFtVcgBrKixNCtC1p8jepLFh6Zwpm5PovZkvePYs8gum",
  "key3": "3fKiwowJBnPZU3W1NKGLmvr4fK6K3CJNEy6UQWp4c1esN2AsCuSbLEZqemSftozQNiCR5wDuFRHAwGb5vpYXYnJs",
  "key4": "2EafcFBdEarod4MgKJ6yjHKp8nhpBXynG53613MdZu7CDrDeN7fidimV7FKSw8hHb6JX9hVJcMTNeUkHbMU3h4fT",
  "key5": "2Wtg6n5xGyNgX95Q8YrnQZJHj8enJFoHgVCjc9NJXZCfnphTYzX4Vm2J9k6arovzqRfdcYx6J1Ym2roNmoxUa7oN",
  "key6": "2kLCT4hKkDWFXntANjuRHdx74Fg9zM5m44DLLEc9Ex4HsyTKkmVFTtL8RcLjZqjXdMpCy4GhXQaNxiyc7Q4MeMCF",
  "key7": "2dWy2nvXnkutpwYebECfseKCVdZGvDU4fRSGEKiSbB8CYtRdK2edpUmUgrbopJfLugmYNPQnpBSKagrm71hp7b7E",
  "key8": "4MYH6gvrT2qWtuGCLAGN4KtD5LPHURq5evkmN1F3YZjzkbdKfjsz7MCU9NMntuEdRdynnCTyKpJScHb6D4yGvWgg",
  "key9": "39qprdhpo5jKMCK4Cq6RHmLKkcJJ5XSEUkiVdQ3nqghJCxQ2dXtehLjiqbxSzfa3zRh3r7MoZKbURcUgNDtReBky",
  "key10": "3pwZjbHtZ6He86x47sqCjdLPtXV4bVw1Esr6ZAQAcQvSetJHRro5e7gwSjDMkRhrbmgojGHeZcU3JwDKex6mcc3F",
  "key11": "2rXJfvhEi6mWmdT42j327iFrBPCU5y5KJJ41gd6GCydWCP54QfG2BjZxfLXAyU7Q7oRPdgv9znouwZPQeQ73e9NB",
  "key12": "CAj5yncswGjjDGaQNMVRFHkthsjADkoKwcYdTEWV7y997ajDxnBNTRh2PsRz72G1qF6FYRLE3romMwNcKx3Yp2y",
  "key13": "3HmsZ7fNYps6EXY9NBdQW3CiRAPBcbFibeZS13XLF9RPXAyWUkRE9rbpL4VskdjQ8DUpqWLUbHXcv6wJNGw436cB",
  "key14": "3R9a5aR4eCKiUxCdrjJBwAX9f4GHUmMU2vDuPDqptrhPKrFdKdJjGZfyYmbuPA4dT6KcgzBjpkBfE3Nu38Zbmkwo",
  "key15": "3uhRFifjp7raC6toZqRQgjURg4mPMRneq2a8x1NoxP4B4NYwuM74SMZp6XewPHzzcNfzsJh3WzDTkWnCGFJm8RxB",
  "key16": "3aX4Hg6FFqXob6Vvt4A5tW9VA9trmy7AJX25HkoaLqL5dEW3ZDy7kpkbMztb8TD6Qzn6t77m4C6XHHkoSKVZyFoC",
  "key17": "5DNmiRPLqqVyPzvBFkrmon4zuGyzfNAU5AshK6wuRr9j5qtNMiy78GYCSeJqtHwXUAp9RNETzvtuN8CmmUx3G7YR",
  "key18": "eJnu4pZqwGH5QZkG9m5Q3Gm5SjaUGBcASQop7C6LZKPQMfbh631z9ipoDdeHaBmxzJ6VpUMPVH9fWaB2xMaScrS",
  "key19": "4NbyZsU9G3EVBgo6o2UMuvVb2eDW8yEyrzfF1CsC6RrJtkmHXCXsBYcZYQSTAZrhzQbiXd12uWAgnMsTLhK9Xvg8",
  "key20": "cxrEQVSDVpns9FAn3KYsJkEHww5T4axXGxi22nrXLTXVVnZvJxam2htp9yTuNrobaa3jG2yc9oURiKgbmm26w59",
  "key21": "B14V6fmtkZpn9SSxqaBbxNTXdXHYsPLND4Z9bTHo8n4PrUo2m2vvBjXKqSpGm3YWQMJqhUVtWqd1dqe7d49CSEF",
  "key22": "5xE6UGjqz7fXVzJN8zFQohVEoReBwVwygBAtWdo8MXoXVWF1XNfmx8uJULzjh6HJzjJB7jRu9aVmJdRaZ1CyYgqf",
  "key23": "3pRsZCAMBLgPD6PpwbXAQi9yAe4YoEhyqw6jx64U6Avno6qBT6pwVxSeo6r9V2zexfieD1iBhu4vfkU14DT4U9PX",
  "key24": "JrwuMdMHq7xa2FCtAHTPkQJ2tRSUXyErV1ZTC32iCaKaxT1DQ56dwaPqn8ztHeKk5v3eJCYwL7uo1SPmsZopMvR",
  "key25": "bWzGwRnAsbnpJrxQ5Ps7MvQNqoZXBiZb4d8DaS4MeFw7N5biusR7vBZrzZmCibM73bHgVcvrBxBogW2y3V7x1DE",
  "key26": "kTjB6ZdG1f3AM4UDr9jyAtFFnkWg71gvmhE4RWdJNzevM4bwRycLiy62ewmXCc5iHYVWFg78PqpauLNn7UMo5ib",
  "key27": "5MNNjzkf24BQJAWzwh7Ao2PpjYVS82EhLgBMNrpcqnUuS4qfHBeNhMiipsem51HQ4ivt8if3ggZuNpZcP6hs7evP",
  "key28": "5SRZq8hc61RoJLd1mdjbSWXow48TbiGyqsWk63sSsbMYpo3KnkKJCHW1SfpnTEdkmZ48Z9VRTZ7WYTJCuqpEqZQx",
  "key29": "2cb4GRFQK9KLQpdMuJ2wioZhLHYXJvQem12HFvGimS97GAZZm9UbfT5b2gLao4GhudnUj9yFMHjmsY8UuJxGVotN",
  "key30": "3FyktmjVVVi41fNymUPXtwsVPUdDxKkcQbZXPG5WeNPqR3Gp5YLZLhU36Y4xEz3K1NdaWYKSyvoq2eTbg83wpMpi",
  "key31": "2zHzHeM5A1mroxm7zqTRg8KsUrvZzoXRHbFrpzYaecgvc7QdYymdtemK32y6wqXbrmogzSpAf3DZ7goH6BiSJ7gz"
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
