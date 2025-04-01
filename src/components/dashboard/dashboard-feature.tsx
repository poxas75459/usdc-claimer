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
    "NJLqqMuQjvVdJHZebkZB1h5EAekZ2PFjRpdDNMqNc2sKDaaSiyk7fEwuvihi4KRrqUwqXTJ4SbNzTiXFSB8XcJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ABJa4EqKc9MCdvijZxpAvbEzbux4ZacGfNkSoXqQqP64aekdmj9bZymEBbcGGJ7o9pQ2jyZahyx1apGmKe8WxCt",
  "key1": "2CGZLKdCqkmG1eCjrF7DoXbLYYKjE43QHkgEVzAWJhy52epmzNnW2CEzmJfpnWHDU1zfJ5EZeFpub344JPz2Um2T",
  "key2": "2mVwnwp5utV9BXUmHc9QgeNPst1w1K8ZcDnXVTtiKic2SKMAVwS7YPqPbESBQPqnJvk5wbTKeYnenD9o7V7ZgjCe",
  "key3": "GJRkHTPTSV9446gXQMkdevhTTBpCQfcYXPCEegnht1t7NPs6RqJQKhKNecPwhEoh5AAqRodfb9dEBJevoag4GXr",
  "key4": "52AxVoytFUMrsymgCjD51UazkLNoE1pZBu41F2kvAH6QnjcCTmckstjC3XQQFUGEJhsLHxhY4WhiyA7VQGfMtUsL",
  "key5": "5oWJGCwMpz9N8znzBsHYyNKQvNQEHm2ChkphrfFCBPPGSuk57pUDKpH1v7xiq6Qd61e8Vt7SS4rxrZ91x7fUC6oe",
  "key6": "2p7wxrmfpcSSYQLee5QoPAzpe1yQF9cesG3B99N3ryKyXLf1G8mqa2GDvfXHoGY6oCu2sr7maRkutRPVPb5WkPkk",
  "key7": "LN2FTbyG5FojFB4XW3LDNkCJr47287zcJDuNbq5FY6iJodDoLVtPWwkgDHd9DLSh7J82t3Q55c4kH9HKPXHXdNJ",
  "key8": "2zAPkD1VbSfTxf6tyAvn2MWappPWXqmbyPdhf1cPoCotq2su6yB9i6VkgX9EQFUKdem1tUB13HchNBo52K3R7xzM",
  "key9": "5eW7qwTgajUTFZTSxaGXcibnJPD21pw1WYtfuiZXvBdPYTNhBpTzDoiYT96WSSZPPEs2Ho6GwSZTYzyk2E3LdQ6i",
  "key10": "5QhQi5VDHep9cPxttxYwk1FccmR9FcoFMz9RJPWbATwHNd3PNfuGJJJLqWKguzm5vtxYSba93uB2L7dTg2E7KvXV",
  "key11": "5A92bATBixbiQgqT1ozLdLGnsBQY1DNWDgjCHU7sq6KGSbfDYD66f1cCLZJYK6vxbow9jLVGThA3tvaa7xYEdJF6",
  "key12": "4pMgNP531yJ26DTvEx9hwkTaVWR2f1o8hebKViozJqquVyfZnGLJodanEDwyeyd1EFvxBzQGDGZcPxxiDZU1YJyy",
  "key13": "2ugd7ZwHjtoRDwZZdeEcAF2JgVNtyvTUWekCzxHErhZZTvkjWibb7JKV7sWRwHYpmxtc4zYRVnTna4cFfctG1qt3",
  "key14": "5cR6mEFNe4xoGDfFBmcXvMfqLpc4WeWSX5uSd48TFu5areCCddMS8Jaq7ggqqNsV2kuQAmVYaofsQ4wG2pNaRZ7h",
  "key15": "2SNCv5AXXkYZcpnnwnv3uSeGLPTLGeCjCPJckdY2vvQJFsvo1RWoL2wZnShfbqu2jHWNwqjUjPsitd78b7Yzx2YP",
  "key16": "3hovvq5DCw9SRvMH7zBvE8zAUNNsMeiAqnuA57M4mHryzMRauKCM1xHxYiSWVFDYeTnwsj8KEg7u6zvJnSfK6dLK",
  "key17": "2qSiSZyeQCiRmCbNNwe1qvMgduR6CsK31DnGRTnpSiPEb2FuQm2SwZTcRdgcW5G4EdjSTW5imSqQuVUATQEEyYA9",
  "key18": "W7U7SKcj7voVCgM7YiTdJ6MfWFRwHb6nvDrc51uWE6X8Au7w8xn4YX7S6QWNHT7WhnAMLa6vDoaFqAf9n4g2R1y",
  "key19": "3i1RWViFxuxqT79nKMRo2WKCa16KGc3bNaVwzeGzCb1VrJXXrJeUk3z9fRPmpKYdi3aiPX1EVEWPePnUWBU5KGE9",
  "key20": "i25ANpq6NLVJD4F9e33P2u941C4VdDZ2u1sDj7i5fRFmSpf5dMaKVrr4FhmwE1BTnhdgiXaTD1tkWKZzVBPtu6n",
  "key21": "49NB5Ai1Tz7EREBqu9tmJFQAefit6ouasMDj6s7rzxH3WpBvddGgvGyc2N67uP9CiWi1z8MKi28Y1PjdYhoCd7uq",
  "key22": "3D1MXYgPjXBPAffH5UiBUt3b8JHqpM13ipDBDDassg4PZ8CmVRsKAiorsh4mXqDx2ShJ4ddi95EXxea9rK1DsF67",
  "key23": "4ZHmBCfmcDvvNNtJzYaJrXD4o1UedDFGj2erTLa7dB5xPzHWc8d585EkJHuWDnKR3sZ6pmtuhoXQTaS6Q9s4AiUM",
  "key24": "3uxZBFHPsgWjWdfNYZurUpdyT1pQZ7J8pER5TXx7Y9SBsLbQUQfK1Pz45VeFej1A7CSPvoRPeKp8kbRG7kGY3s7m",
  "key25": "5CB5tcLsfATWkEffNhs1hdTB3rygJ2p8tnSzUQ4NAxJER9anYznBcc7px3gnT1i9gyUzEZVxbSAnXpsLHhj5C8Zp",
  "key26": "35VpiMzggsHiFvUNSq8ztXCHLy7HG1zhh3o6Q3Jez85vCwd6g6o2GFvE9sZnQ9tqfiLcwS9xGwWVKKYe41YYSz9J"
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
