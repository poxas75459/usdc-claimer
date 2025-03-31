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
    "669QUmSuDC6Y8EcvQ75PsitApQFkqbD5PSxsPd46yB2Bz9nMHkM9GZMj4winCwTRJUm9h4dt9DeVtFQvweUqtREF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g4qX8yuFhPAkngTsw5aQakxaCyJkHiFaRLCnJsjkYdivQRCXmWX2dRfdSqhkqv6ZCen4XxSkyvPVE5LpvRtAjnr",
  "key1": "4BSAbHkPwysALuxaewhh74TnTPYgpY6mroz7dsuVjxyyUoJmd2NubcqnKVnxBoTKvXZw2XKLwSmcpCpFhwkr7Sua",
  "key2": "4xVqPwsABcik8szX3QwngReHbkkpvLHMoPA24ZJmgUMDAWgK63Uxj8hdZ2NqTumvEC37B5gb3nf7vZU5aVYaCd3L",
  "key3": "5knAmwNVB2Vbeug3sykKddAu5CUiqH66x83U3cbX1aXK11YNgwJrxeu2u1vgQAZZxVNReaPprA4TghZyTXsanA3W",
  "key4": "5cCuwPZCqsvyUYjAQJccXc1HVqmctvTbfFuz9CqGH6iz92AKbvq96dPhcGtWDyiekEsEqHQMBsuFjQYwv7v5TPBw",
  "key5": "2v1zUV5dTG4L2ddVwLuJYNzWHAbXnvj1X1GmgJ57xNe2H1sXrGLJDJmQYdJyWZeRRj13idpnDhxc6CyakdcNSfmY",
  "key6": "MmmuR1JGN62XtdFzqx1uwWQsF3888mWxpSnkVcw3b1yPpd7juChPhnsSH67jN7dbEKGPVnkZMub6CBcvsjZWSRt",
  "key7": "3AnbDoq7E1avofs1XubCDEUQ1wLzUGa2R4oDNvZ5g8ypvxNJ1GyfRciDFw2nbz1hkaDKqABbANunhsqGWkS3CmpE",
  "key8": "2YqoAQ2fcVXQChRvYcyWLT2hzvHPwHtftVYEUdYiwFndYaQEXHru4zR55ffcih9QoEnFy5YRjPE96sfJUmwk2ntX",
  "key9": "2Rk88RJN8ZTEXqdUS3qKCqcSgG3TeetA7H9vzCxV2LxsnJdN5Kti59cGf9bhuWekCyGtF1iazHQuTjz63jBZKfRJ",
  "key10": "3HzmD8CSBSpuqnPnc2MNSYU3mW4ojzrv15RHYKNdA3RWTaBky2vTdiZxfkrctWva5NSb7b6Y1go5G3px5uznwm9j",
  "key11": "4VbSqqabouQ8MhWpGc6ZRKZXxSwWgo2tBfY14D5hhyK6pXUGASHNytLS8DJRB7kspM2FHg5kEFgCLnxKWLqdz4Wf",
  "key12": "38hg4vyXGUEYfEqmQEA9THw8rpXPzRh9GrKXRzbtpFaNvqBwoxff3gnZ4deZuBMXfXvQHTJphHahVD4w5npk1PXb",
  "key13": "5nbXiPptPXceQcVYFUVgL5AQhoAp2ZTuSXnjnx9d17oSB3DgjHXhV4Z9wYz5pXa1hSQZxhhmP28nTPXi6DSratVz",
  "key14": "4C3FDv7pU5Fcp4df8V3H6G4eB1no8eBqr2VwLhL1MEpVf2WjhQna9gvyD4Ym98S3zChCvMRXoYrw2DFWwPSQ32UZ",
  "key15": "3pNeEniAdJMnPBUwtw4SBSzqmC3bK8K3rAhjBWa7WhZZi43fZKmd9bJ42hZvJqgLCtxNWQVSgydthU6TBiYtfhVX",
  "key16": "3dhxfQNEVztir8wstCzPYoGjHJmdWNSGgaCLJhYq2A14UoeKeQWCQfb5EXpvhoe31MYVyFgRDxgC446nawfmfR3Z",
  "key17": "2RWk4XMRvYN9bqGbQq7VZWsPEnwoSV4rggzKBvbMjF6C6u2p8SJMNDEMXABAJQf8RmNqcTxkXxCYuGx8R7RBacNW",
  "key18": "rkHSbwrejngUdUHQzcjRe21q7Q8xigbSKhmMw3VQ5No21fwhXzSzf7N1XpLUqTjFL7ibtj8i8NWwv44isT3VBy1",
  "key19": "29ny2d5gqQN33G8tnUr82Kd8EgZPq8QJj7Y5BG8pLT9qYXbaep8nCV3meL7y3Jgui3eqhkd3k5JRG6wKBRHbjrg7",
  "key20": "5xNAL4WL72xs7JgfRgirMjjrvNLKbmToqGh2JZUxSAdqz63BryzdjrcpyT1Tiqbgw74zkBiFPc54g4TrzKj5FKhw",
  "key21": "2bAUMzrv7EBfjjLajKBahVfiqLEZyCkJqUnLFMxJcqo81i4CZwYDc69bvzys4sswMdvU97hfvQrDk8Bj3PWCiuNg",
  "key22": "qf8TaJ68A2RkmZCs93wJ4hTbsDky5LXMd2V5Lwsj1krDUZEejQkWPgripy1S8uLSvnmMNT9fQbQhkzeKKNYcbUf",
  "key23": "2zKuGyRv1hQWsyzHwxz2qRPoeRBJXceWCn4KcwtM9udzaEekw9B5GWgnNrRaw44ziLrrPC2p1VA3oQPJ4EaTx11u",
  "key24": "24iC2WWzjLtgZyZi4YbXAtxXozCywz666gQXyFt4pYEH3DfhbCQdj3V7XAgFXJVQCPcQx4thxmZffB4ZyD5mt7N6",
  "key25": "2TtEN3sF6XsebDUHNdRksK96v8ifqa5nZmBwLK4BqEKz5JJqGYHXtDR5D3TAKN7Dr19tSivHgs2a1Pj4HBVFApfj",
  "key26": "3esDdButghoqviTdUD4Vh4SY9F53USWsrHeTzSQtWr3HSonzC8zyRRgswyRxD8t6865SJoK5395HsW5jcfcqdkUR"
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
