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
    "5mUpNmk3pvwLu1cUYpUbqDoPUjUSQeLMpLdWq82bJ1wLtbjBqQuCnpCqAqEV1nxeWTeGETrUYQbnBi62DixX2rtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jANmEs41DjDMqaAZfNkSS9VHGcpzRA8eTENb4RGPeMgEjUt3EaVQbVyznRnU1eNrs9qLw2hjKPrinqqnq2Qr5gm",
  "key1": "pGhrjBL9q8aDtFsNqNMFKKY8Nqsh2zLbXKvjDYkicpKiueEN5RukBc7kbrUCTvVuUxYLrYEmUo3HN5mgmdH2c6z",
  "key2": "g1pybg73MuegkSj471BbULMbaAj4pbxyuLWaLV3hN6LyJozD2cL45sP32P8PYwL5UgUSnQQYL7xNwSjWcSopp53",
  "key3": "5niGy8GvmoeV59G2xR8HKAkSSemBPj5tqvyCX67wQDXQe7wsRFB36P3haAww6agzieWVJC7GDX2BDB1qTRjo7o8J",
  "key4": "4N4haF2X5hq4Jmqmrn1BYUabhQbzfvi3ddjhBpNoSXxXbCszYrUGQLGpVaSfzzySfbh3kirZtjT5XkFkhZ175U2i",
  "key5": "3ENbErRYXkE16DdLW7ZWxWCFiyQeUfBE784HjenMdi2Kqq9GfQBPWCfaBQpAigRunXwGTKnJRTqwQzUsikMGa51Y",
  "key6": "3329QR1ZqTtmbbi8egnYiUL6cZacyAtu9MRq5E9vZUnVxbNDqqL1hKkE7p693aQFArHhMu1w6c6da9BriDoe5Gc1",
  "key7": "vzJyD1UomgsNckyW4uZJfQKasNq2oTUtrmyybfGm7WZaJbX4bfjRi4N3x5WSsopkBLMMUYRwwaLRpEk1xgzA9ef",
  "key8": "2FcLPJNZbvEuP5Bze5GNeWR7YxM9V3gtdnMZ5cHEbJpBavHg9zfbvg7qcAjVqhmMiNJyekjrzfJ28s44BxVzhaTJ",
  "key9": "37qirkCgSXFmdx5k29mmHDfhFYa1k6ttw1moKAypZNuqWLWye6HYysznyBTzbRiKf9TDGGxR85YycCeFUbBzEG3z",
  "key10": "3Z3CHJeQnmhjjzsEg8PVkmRqrSf1TkyWuzy6Mq5Yzvgm2XAkd7P3JgBuosmpEDBiua5Lx1HgmymNoQBTGzMF54RN",
  "key11": "51F17qcnx5Ep1khPb8xPWkTVurrovjCYfyWSS8CzPwsa2z5h7y9fuL8AZVuh1gHz3EhgpAU5DZG6VMWLCVDKxBzf",
  "key12": "56opfcYYgqKNe6pqQMwpcukoSFwm5RATwb4bNdxHiZgyz4CAuoGrNJV2nEH376tivsYBEsdBxCMwprhmrSgCURro",
  "key13": "36rFKHS6DkUdMJXacm9399DEj62AiSCN5oCq9ifbnp5JwGmwuM6mfiGZE2HgvfshCDWykgtXnVXctpRrS4Ewt7p2",
  "key14": "5Xr2pVMCSDCB1CPwu8izKjZ5yGp2kNm7FwBz4ixxKgfArns7GgWnamr4HZMEndLhxW47uUonXWBPLMWsu7GPraLN",
  "key15": "3zxSyVHYrW3atLeHbbq9JGNAEAN6xTYdbgtmfRNZdE1fPeNXsi3avuhaCjSVM5bVu2g6zKHzg1vhn7YGvuVexJ5v",
  "key16": "5jkznJvD4uFEHE6qwEauRz5w84rJhDYvURMsskZvLBQEiRyFKvtHYXZWBPTyfoQwzw5BCxEPYE8gZTearPGSSHF",
  "key17": "3tVr6nHbGALckZFttgT3NB8mEFM3vn4o2fiB2zsU4ZUKgyz99s9xh7gAWfVcy1PRF2VL6pB3Am4Wqcove9zqNHyQ",
  "key18": "3AQd8rYnEnSKf2Hwz3FKAxoSmLn1iTZXscbjo7RwCPR9efAW3xG3A9DFfRB5c48cHEBL8Z1bWGVYMY9cxPTiP5Bj",
  "key19": "5t8eiK4PQ1SALPTLtoP9CxJyqnceBU2mrxbwFnvSgGNQnuNeHL5k5bp3UUG7T1sLCMPLpdEsir4v8mMYAzdKj9rb",
  "key20": "4cKqZmFckunh1HHVTRgX4tp9stqytYisDWyPACMJuMV2GUrLGpeeJBLsyuTcFGjCCistzQtDtMn6r5aE2PStNK8m",
  "key21": "2aWdFkoQToyKVeTPX8aFsv5AMMNHnbYk1qdwGxah3rTsSiPEg2EocMorKogSCabTyARAFqdtMEeY4w6e5FcgRJy3",
  "key22": "37oo1EhPteySRy9jYQ2omYBA4zrEjiwtetymQXKDqDguvtrR5CoTaaYX5mnnDZ45E4Gv8GpJMeg9ZzMtKB1b2SbY",
  "key23": "S2snKdkrEZLmTNSMP977pJP7doePEwGL5yb3AMFgkMJCh573E88kKV3SsTCq4RwmxaVVuRmHfdKwefLmnVi7twX",
  "key24": "4DipxYf7NR99K3BeNo1jrS72sjxckDQoV91ePFNc3tk9M59CwZR4PJA1yxtCGz6ySRVpge8wnSuYPqkGBW7aw6fQ",
  "key25": "2ncsjyT8SBhH6rBnHvJMEBt8u5CSt4S9Xc9jiLxFEWQ6xmvavfjztQVwrt4PnnkgAUxxK2jQTXAQXB1RuxQFzvUj",
  "key26": "2doZNf9t4GEFJMrRQBju5BjKRfTyWpNykqJp7DRC9J8gUCtN9wxeuYGmRvVoXS6HieJxuHEk191ZnWwijCDKV4xc",
  "key27": "5pzeaZq94rDaiQWcN7jRtFCVb8PjBF3aFQrsYcZGLdF8yLzfgFuFr3iWNaTs6QW31jVGREbFxTYPs6bzhzQK2Y3z"
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
