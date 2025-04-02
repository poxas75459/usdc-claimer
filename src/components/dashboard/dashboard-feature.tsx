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
    "4t58uv4xiLBDCgtpqe5Am6fwEMALN1qHjPqLiSTaByTJ5EtEqurfZHiXpKKDa2p73bHV8gu6uXJEowyoUm27gbGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x1Xw6FEauaN6ziaySu4tT4h7nD1sygnAErx34vupC8wstxAr396tCeCgebseEehPo22vijJWYhXy82HCimhR1N6",
  "key1": "66gQKbLdD4AyR1fB8PcBPveQNxjuLqUWwRDznFWSnqtvwSrb8XcG1HJK85CKtyQ5Fa3ymMZKyRi2kiXJLEB1dVks",
  "key2": "2R5aGZEZexdusz1yu2LRjDH3VaMHvPfT2xNgheM4bLaUm1JxzWLF5xK1GfBvCE7y2mRpSaZFSw9fweRgZLHcSB5z",
  "key3": "5yS1CL6E4zomUbnn5HVKxCCmJXP5gybSkfSQbZXwgdjhBYLUJryREg7UgPcKseukXkapSYAJX8o4K3YHf3rXCuuK",
  "key4": "2M1BhdSuoGehjvgvT2TycrPCXEY7iwSaQP1N7PQ9h5PECUe8GCtE3zTLgVRAu5juUsHT4Jg5wfDn2eKY4NQQdfMb",
  "key5": "5tP9NaA8bb3HRvZMCKwVtPxf99Ve4enkuoUd6sRoWMeroyTLLKqg9xnafafbBDQLoRZXZP4y2QmSdEncCfeo812Z",
  "key6": "5M3K4EkShneu94DCqde27Xv1VY3sq4MZkQGQioiD7mZw4SgVVDMYoHniThkkFjMJBPY2xCzBb91YsrzjMwoQzp8s",
  "key7": "5aayBedium8xr6enZbF6uAb1D5iqjc39S8GoNwqaC1a2tqy1FPs8Wxiv9fbWHS76gqZP1CL2qggeG9tzqAGXM4RG",
  "key8": "2Jfw2KDUm6KJ22EZBKReYvP8617gBZCXGuh2jMxLASxwdVEwU3Ler7YRiUgCV2w1nDgZL6Fu9SnCrPqHhEjzhreF",
  "key9": "5ayT8kJFRdjKZxekviYDntoFgbb9aovW1CMyGztchEp6hE6MtSkeWZRhKutAYAJ1NtAXfkuM7BemsegBHKNBxvto",
  "key10": "5m1mVFVcv1KDCjZx97XUR8cXsecmmSCJX1aE3nBJiSgtcSBEjS7RkyRux2ZSMjj4fayckxsSWsHPQQBczPaRVdTx",
  "key11": "5Pc1B3S3hKH1Skap5V9gUTafAihhw7HZhgSQrZjKNTosgiH6oWTMFwwfi1uV423r6LAfPdTaEZgv3aZZ49mtmKVS",
  "key12": "Q7DLsxBG2pPGYYLa2QG57Go7JXtEJh4tVYQfRktJzRBRxLJTtQqj5BpPDEUzh9qbXsZiy5vrqgDnnLqQ6fQEQ2h",
  "key13": "5tfCAYbVbZ2TAfzA68fmNoNwdbrZzeYVHxCfTyT8zWuULL5jHwNYiH1PerwQFU7TUoxHDjQ6B2qNWhdSFqEBixwv",
  "key14": "2CaQJw4HjMFf4vYE6X7sHKn6Esrp1PSEcKPcb7nZvTiBWXkceN1zqhRan3n24YVxmevHBqLpupmaZjs8PTKdTHgh",
  "key15": "6hF5zjmJtMu9aAKMnWwiqpB1Yucg4wkbiHh99hZVSDYABB1bgjFZFbSvc7PtewbEW9MMCYb6YRoN9E4adEGaWAo",
  "key16": "3GBZvkBMjy8U62roD6u3SE2fqhJFsfWTjmsrNvuFLvcwdVqMofn5P9BRdcpj286eqe6MfXDnJJe81k3Q8C6hAUcn",
  "key17": "4RyeZTrY41gK6fTVZc6M1Y6S4xYKtwXMiDEAfFZxtqSXdgQNooJxvrbXew41BczNyh7DAuLwJjZ3g3QExcA2E5y1",
  "key18": "4c78SMbc9TBqTJBSu2pkjXWdh6g5VCgt1e3E9XTU72UNuyzcFtJ9rH9c9TAL8JBugd5VJENoA7D1BBZ9Mhq9VRKx",
  "key19": "JXvkxTw1mjKGjfFrm2wcs1fsvpMLM8hGXLFcoaeCV6H1mdeoCieq4hL8o2YmdFKYPCnbiepakgCeoVdvHxAzNcb",
  "key20": "2gRdvg8ADftvWRtoqK5XbDrvkrQyUXBhqjmTGUXzF47CsTf7J4ACoDNi11U9bukaSZi28oAJowMYi2DPa2UvTLvf",
  "key21": "4yVsnyyiY42J4pM1mbKSvcTRCuTEx26rstzY5prLR494eJwHqHVyeBq4ZnYWq6vGkneFdwmjkzf8cbZJTL3F2q8X",
  "key22": "2NXz1H5B4j8UC66uf2rqdZE5wdwUbByhUB66iuApB6ed8sV9jchfJ2PZF2ZNV5Ydmk3MzKHMNMX9avYJNsmCEHwZ",
  "key23": "4UDmxWkUa73thjL3XrMZ74DJqk4UQY6ckpzKug4rogEgqpJc1K1fGax7cuKA2XR4FmBRgoXZMdAGYJQL6ULQyfvn",
  "key24": "NVE8NtUEfwUz9PQyGbVMtxmRhqMyZzRJjmhJHNHr1jC4Tj17vgsRvmsLYL6K5R4bQJUubUTLJcWxHLfL4RruMZC",
  "key25": "4boRaBg3W5BmYoaRgvP79zsEZvZvbPsS4JAoxQF548PhmNSqVo4JA6ncRaH6SRNJgaaDP45dB9yQDJUM9QeRdmjy",
  "key26": "fjfNAv2GBeuesmtgufyT872AVAWx63HbYa4gWVqeQa8JCvBeYScsrpeqgTFXVt6Dk6EGU1kHcPcyaHxVfKry6xi",
  "key27": "UAZ6koCvMz1T6YFVDiYxEd7QVwmCLdAcpYoPVSnye85zFJ176SjTRSzWeeWwBxGEPpodoLsWePgpTKBCndCUJEE",
  "key28": "29vXvyzHEeGzfBgjgSknLdwihzm2QUbZV2u6u3WPXxH2A1FRg9rgV7b7658wsvu6udJ9eozRQ2YEAwmfUV4QW2iV",
  "key29": "KjqY21rCASFcFDNDqBdsbrLWui82ae63uwJz1378Sa22dPhr6aT9MgXqMgc7ZwqQTqCsJ7TQxgdXTwQnzjaFzEQ"
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
