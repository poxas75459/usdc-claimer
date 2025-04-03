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
    "2sdHFyowTYV548vPFQKBq6yYtD8eTyzdbEvh5YVvQS7fiqQUpptLLmRtf7ajhqdNn9PbrYqztHANe32t7m7Qm6bV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A2GiwRN6GNvp6gAuphDJAMLS3NhUeh7GXoySnyYfU2rorFkV8ocSNQgYoWVHwSkYMEwQSyLvQbEptE2yiiBmvHk",
  "key1": "5nyyTDMb2s8uKgQoWz6N1ryjnVfC9LB6bGRa4e7LrSuH2vbbf5nN2X6CS1dijeLt331yP3crEqz9pMpKwKq5g896",
  "key2": "4RYDdwe7bYgM6vzAmwNza2LuPA29oewzrqt6AeNM18bFamNAyjBY1zC8E9rubw3LKM52278ACMJCijfRQ1noqXR6",
  "key3": "2kPSuttSqBJYffN9L7F9NC8aaXrAGV3xDE1uZGFBsejXRziFZot2PJjYSKGfKCLhPvymtW8ZUHE9Ci4TTWtzjSKR",
  "key4": "67gZ28qGdzaBTz21V2xbiG4MUappA6i5cenpFfKsU72XNVrNPHNinrqWZAunxZXZTk4hNxL7ZV5BFYTSN1WDSQat",
  "key5": "35MUZ9vSsY3vPT6cbKs2T9N4jU4fqSYMyfMwy5amoU24qhuHH6GhaLzLuWBavWbfLMgMviedZQ8dbKYaQaW7dm8J",
  "key6": "2DsZpjA9NT93XUgkiD4H6wdP3nGTgAb6pK7wRC9zmwBRnmNsuNTugzVGUiHwZdoPWHW6T29Szwt6bm79U3x3swFY",
  "key7": "5yEVfW1n8UMfvVwNvbNgJCATo196WQwDwT9eWaZPEWRbd46hkbeSoroKqojib1wYtZ4qdMGmHerdt3Ni8MRBxNFR",
  "key8": "5WjUTJMrr2aEjirfpfVJmv61cwcxHtFLAxf9J17iEjE37Su2QjqaW5Yggpmhgor7uVmn94RoHQ3sfFAYokk5GRzN",
  "key9": "4z4fVMSPq5ViydKLw7zbtKEcEheXVnJmBp18MXMawS7kuZBZBpFh3G8cu6iTpxHgMxeMprVRerUSmxzo1sfkr6dJ",
  "key10": "2XRPEfmRLdJsCKDEMnTP55NuPxeeWQUw9g53vpeRWGbNN9WLWbguc22jMzPPXyxLkepH9UVbhsyxkoYfMut4vw3c",
  "key11": "4nJnVJh1W3CXUykfymrnBgFvyoN5PpAhBsGbQvJm3xFNi49kPq5LtX2GpbHJ4HhCFBgyy4LusssxSTFBgMZ4E5Ga",
  "key12": "4cYAUvRgi8ozwt8ioxhxkxWNqraZuvkBpsgZLjH6746KQMYyBj9KgoKnQVk1xpwHb4sd1CrYL8i4AkTbZY17ZEvk",
  "key13": "5QXtWPjY4bJJoyaTwUpxYwAu1iqSh8wn4hg6B2vfniNjHMG69cN2bGBPh1ddi1gWif2HnC9zZoszuGAviuAVxrRF",
  "key14": "B5y3UvgyAJmJpHwmRMrM3Gt34QBYokfvyXvfDGwJHhUpnwvhteLHuN1QSENgW5LKy6rsRK8VX9HzRRQRMjAKqDc",
  "key15": "4xhJnowXfjqCmS4ZEnHJzm1bWh8KqQHZMAQuSffRmM9FBFJsGdUnRqzx4MYHWtaYUDVPM47hsBgyHiQEs5ZQDKGi",
  "key16": "5tNkCiXKkwtBTL74iwf2PNJizDTB8YizvnVs2rje5QBXoPpHhXfhXns9wyrE6ZqQAza3aoGUoUroa2VVjmG2VyBW",
  "key17": "4EBWeVSKZNYmUBHYd5paja8GSQX1PpcE3i4BwHaCGLR96wG9VChVLb27kRSe66a7KYWQ5nB9UsG3a121mnfwdvDA",
  "key18": "96vTiougcdE19NSiYi6nNg5mGkY7hu3TrihgSMtXgnnUpiY9wB2X5xct9uX7HPE2KL9YUV85HonN3RZ369TraRe",
  "key19": "4fnRmBJewecyoVPyf4mgpyXfgvw1Zi2zCu14QZMzQV1B2kWd2schycvezKxUWfMRJqP2BA9kLvBvDjp354C3k4jK",
  "key20": "2gKYNuFG2nWq5WjcnGQkVUtQKhDRSa4wnM7E9VfkBqGxqyuCfSqJWE5PNpYf71E1JJA5CdoH2mNPMevK5qKxeEmw",
  "key21": "5FS8QBnyM2xFaSQrnQbP9pPM3SonGopf9HyWjpbnQ2HfuahNdsi9zXxyhTKHjxq5RuzKCzNCxoUBPPU7WbrZrvQo",
  "key22": "4mT9ZtAPeY2Ny63714VMkisxE7othmwwfz1jrfFCEQdnyhtfHAVaaRnqSAS2D5s2oofR1Nc8V35h6RA8iotjQKD2",
  "key23": "4LdATuJbfFrYz317iXCHBvu81kDSj4JNsSfUaVkRrdpCX7eFMMA2RhAutNYMgsbB5eY9YBd7C8v7cnjWwJqV7ZVX",
  "key24": "2XCspFSDAaCDWMvcuYcttWoZNeSqkDT3nvFGWAGJjHWR6hc9vH7D8GaBPhDCZ2b2w2SV1Dx5Akc18mxJ3UecMcpr",
  "key25": "2zrxZBc762oPVGfjp1k2D9GPp79gcYrLwwewQj9UdpVLMYrrVwSR4xeQbeLobwArUT7WzniLoYk1gYackRbtSqch",
  "key26": "4kP6qSEV2PcGrDMzoea1hXFLdFjZg8Qf7zuq9zg1yfQTcV4FLZEB9yHsMGpUftfUEd2p6wEeNu1WcT7BQjnmPDQz",
  "key27": "4MqBqhU6cBeDYkfumgw8NqnGwEZzTGfHCD9ytY8qeY8RvJ6EY1Vu21Rk3SwuLBG8yKgZkWwQFhQNDEHTp6xun8QS",
  "key28": "5t3DuTGrxSQT4VJaB66zv8Pgj4ZQhPYWU94X6ETgVy8f95S6bWUP2DA8VLmsxXSbhb5x2Q4kK5SKzEsBZiQFjU39",
  "key29": "5Ngz4y9GaAwYYZZwzbvZkwXJBCqz6B5HkmvsHcVcPEZxQLgeSGC3cfU8NfNh6RZTTweFc8Vzgdt2Yvr6MCryhFE8",
  "key30": "66dZgXjnrErPmjkfWvzbNfuzqaChtdJZZRRf3RgKzpS4V2x9iNEQVtgi2FNrDmcE6SDLhuH2j7o5WHFmDpzHs3u7",
  "key31": "3B4DFJmEHTTysgYYwjqjSBpmsrN39iG7mpSVrXzHZw3VA1vxSrW7BwFBk8P8p6VheBqQFev42gjURMCjS7QPHsgg",
  "key32": "3BBJShk2fWMQenN72wZquJnj1X8qo7Ae68xQ2nAhYBfR9SQ9txmSqfxf4gnxNf9Ah7XYUCCpz7bQRrAD1TNZa3uJ",
  "key33": "5gaKWUYmjnuNHXuyrrTjtrsCYecEYPFqWsrJEyRpXpcjFNEeAxdhF3KaFqKnSVxURETng2mEYGQf6qEzvXAVziFA",
  "key34": "vt5J2XJGhBAPTXFTbjTBZ7wVPhL9bkrumKn8FZofxfCuXVTP5REfgCmMjtcXFimaGJGp8b9769vgzgHHza8QFJ1",
  "key35": "4NZLP2Tx8LhwUm4xQsLHBdzzw2PqiCGsMPCbsKVydZ1xoBd5n65tWptCVz1H27xGU87BYxDnVwnsoRZWzzZk46Wf",
  "key36": "UcMYWd6Sfy6y1Fib7haZH1R3kBkRbbMqJrXCgm4bAjEPMak4e6DgCNpUHNezES4wAXnQSjdTMbgpVTZBoSHR3Qm",
  "key37": "3MJPf67AtRkRDK81yu4TZSGaxo9RrVsprGH2Sc88Z5yYgggNYgeVNoMgMSchKpVa9oFmydytXPpeseWGdtBjDGiT",
  "key38": "334UN29rHfyguAf8ZeybtCSXcAbszfkPApwMZBuyzM9PTHUwQgFqK5jb9Q2Qs37Af1dmDZkyt3E76FapZr8y99Xv",
  "key39": "5Ymq3sSCAkDW4Vh2KhStkFw2vUTbHJRQpPToaQ1pGe31WDeu6wZPa2rx9LjNfTZYjeomeHS6oAR11jpyLSjic4K"
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
