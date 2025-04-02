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
    "86VEV6sHYQTiVfLSzpRm4rp7511xMXVjaXLM69rMQjzDTGrwpCEy14tuE38qjri54ibLLBf4qwpGzQ3C48oeo8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HsAHHM9ghKcF95Mo7oYMkU75QJFtnpvMtiaa6ogcxCYSbc1CSuqJt4BPy4majjJ5wrh6UisJj1RktnrC2bQjV9o",
  "key1": "4bhTT9NX44ikALSnYzhHDLahuk5o7ziyA7mtP8g54Px1atvGPcZ7hoYM6e74jRJdXVsXoNeQiBgEz5gNF7QV4Grs",
  "key2": "48gsRHpgHuHaT4FTY6LhNTagKH8dZSGNbrypcK2N1SL1nXvFvLBqcLHukGdTMb279zNKwAwZFhs2zrrLcpYzFb6n",
  "key3": "hAaVjRg5ptBwwJtz7ENsDzP3eXBzApRWUMg39qdSZXANHmpdGnMSip9CdwpB1ZEPwihYWyx6LYyqqpoersHzXBm",
  "key4": "3nZqb2Zwnrxw3fVCM3nfZdZ6o5JZxJV52Nwtty3vPaRmioVhrTjxU2bWhUT9jmB6kGUdGoXMCaPDtocNq2DkeuvQ",
  "key5": "3qm9iNaP3tcNvaxZ12vwX1naexTmB6AQBqs9MXkyNrwwAAyjRhoqAvnRGKxVKSNhHQoHbbCXqPNDmvXc49qE5m57",
  "key6": "theS7t5EoiMECRoEYboiThgWPhzeLUKHAiE6YDhirvfoA6C7eAo5B4gNs95xgoLdzntTviMDsD6uJwAN33jihoX",
  "key7": "3aVLKUKq5iHDUfUu4J9qDgVC5eUt9QAzpCXf39PwJnH3VmgaNwEGPWQ2R5z4RwwLe7yWHS6cb2BzDh7RZywBU3Qn",
  "key8": "3Rpw1W8HqsWxYrBBftWWX1Ts7dQyMdArT7ZjTjy559XxeANUA93K35aRsgqhvZUXuw9sGpjJ7LCPckiqrmSBvx5E",
  "key9": "2YtrNaPtnP8Zpt5YU1DjiYoUH6BND1ZSQQ7vNXFraEWut43Fs6YcEWNbc9xEFaiYAgaSYkhNQEcrRRYPmtdqYGx6",
  "key10": "5kZyxhVsNr81YHGH8YzjKvgpdp75mrKxSkSJyQdmFMD8NStohHJs15JPCArWHYKMJzPR7oRwvpSD43cexzTGcC1J",
  "key11": "23Zc4K2LXwYew9WQrwXCkgTjKgQap7ejoiqDdMMPeBNopdfRqQgNT2tjjShE855hBwxEf9pG9aB6MzaqGruzKGTy",
  "key12": "2utRY1FDeU4APKNL2qBamp8t2kRq1WoLraQB7nGpeBJn7jAjpBESK51kxvfao8t9v83h92pcurpMCVwu4JtQVvRN",
  "key13": "M4LyDkQLR2D6TjTwezRgtHzsmct3gCEEocg38caRLG2WZCMUccbPZmGQ46m7zatpyFW4GfRcM6neo6kmZaABa3T",
  "key14": "4C6RsEuupCeJRWLfJVbeZhevToVtTSfBNQ9NB2mEzS5Hi4G5QNd1wFhyyqfjfkN5tNBprmBfNdGySG4Kh3HtH2Uv",
  "key15": "27Vs5oCuzTM8dWSn72P4dkS19LxgBACdXX5JqiKThx91Mgn67K5cWUDTYVhLAENvN7JxsYXnADkzYQD3o6oQ1JEZ",
  "key16": "3Di74SzjXzcTQYMeBwbkZmq1CkHGLXjf9nJtnnUn95p7v1D9GRRuGUwn5ufZ5gQveKonaevhVVVXfsnKpFH2kQTd",
  "key17": "3jjAu52kvE2UDGTCUwjEx2ZV7h4eEhKg61rCso5MqMgHwB1K3KYBtAoXhzdKtd3NvAZMV3WisMdusfzH9JhX2Vqm",
  "key18": "4QLyuk6PUQStMFmJB5gemAgAjesEZ1Ax4Jte4CYphhkqWNZ5Asxhk9gnt76QzonPBmNDx9d9Q4gEAynMpeCRRTSN",
  "key19": "24fgbjrtkjaJKFkz33vak4QJ2YwfiCE7FCC2E7Qs9vZ5D71yPHQAZ9YogroK2w7EqzWXJVkcpykDfoUQZdNGU6Qm",
  "key20": "4WBLR22wLNZPFPa4Ly9vVYk1QKP5fjpQwRFojnzKkY6sMP9yM7DXU6UcvjhpK9jq3orEaMfWiHztRbF8zk56eKwR",
  "key21": "49oq8VSxZd6yTZBWKmZUwZ5K2CwBs1VWZiP1rCzVtCEDysFoW5AHkNYK39jvojLtNKWCpgUMo3MA9U2rgFakXH5e",
  "key22": "5rHfV6ntFjN1kft3PnDbHuJy5QZiiPw4zijBn8uSPxkV7oZhCRZrDS2GNcdMzaFMfymtCy2MKxjWtRvj3qaGs6dL",
  "key23": "4z4ngRnQWDiFaCKYiFKBFbxVPsT76mdVX19kp8uUw9L1CAGrXcMnwAn4f1FaMVYhe7mies7cioCZuPCpn66f1uKA",
  "key24": "2udM1Uy8FBWXXtPhukQedxFE9yXWy2uJLC3RWEHgE8xcfE57deNTbCW8gRwhakdLZiQ97J18Eg5PZjo92hLhQAwc",
  "key25": "2hWr1ZhocSwiR2RhyY4he3qaMTjfb1ZnaCYShua9NuUTVDWmUKzuoPiL6ivenAqTJhuySCwETWV36eZASbDHUbNo",
  "key26": "2M4oqRVvz3cKQY6EADhasVUb5PJYvTYPCTWwudb3PreB3FJFKZq9GQhi83TTyx6w6Mg8x9zL2bi96htGcwr4nwCf",
  "key27": "4JA9U7mhaTSSMYTDJL6s5CWDuKGyercEXTV5nn43sbfVdP5xSHEs2GEQBSWPyHfwwwxaGYPFQa1vkHE1ViMfemLq"
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
