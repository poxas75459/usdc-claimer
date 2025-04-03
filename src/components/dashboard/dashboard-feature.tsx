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
    "2gnB7tNfhU974aroYLmT5JufTyTXbhcvYEooMNsjbEXL6xXXrQAz6GnvBK32an3mTk3EhAZ6eChVFYqroxMz5xdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qLub6aYHQPNNjERkirXQbfovEmkWQ9MrKAZDTvsvQymZp7Lo4sVg2jn5HEuhgr42FuUeHNw7DFquVNXZu7KcyXR",
  "key1": "46fwjL4LqrTFQ1ntQggP6jRh2yhTpojagBiS8EoyD32GRdrHYPcFmLwFDs91ggKYUaPEAJoJdCPnJvoKMHttVWRH",
  "key2": "2bZowqBUMk7dRo8Xub95oWpSYH6SQkLpMV5jnfKVevzEuVvUq2P1Aze4uargfyodDbyzvoqLiSu9KTFwqeQSbcN6",
  "key3": "nG4BL1EvFbV8P2E1P4brh4YnhWhEGujZ38MJF3E5k1WiKgmENxYupq3bnETdQYrYZqFHa6Kbf8cc8zBTCZQC6jX",
  "key4": "5UE83CMZE2d4SvQ4Ek48vYeozz3dR19xJthmZ937VTuRVUDXrHhm94s3GM5mdeLs9fVXZ3iHvBjRLrwaADc9hWUx",
  "key5": "5NXLorFK3Dsn2ALUsSCTFd7uwSQHMMQccptHc2pV5jCqcGGhGvdwUKzVQQEDuUiZ9tuE5RvJpc4uLh8n7Ebujhcd",
  "key6": "5xrfhetjEK7YVuTvJujDKsJwCQiwDpz3JsdwNErwr1xUKHnDChUEH3q78p6ydpcr3jGoGHZL1MeniqhpovCE7nXy",
  "key7": "2RH3HR4cWdAhMpz2TaMstsXtskJeao4K4oB1J5uoVZmgYbMTMPwiKnWdnBouFNq6wY2GUJBiiugBiUm7z2cPt4qB",
  "key8": "56HUyZ5K1i7HB7xyL9nZ2rAU2nPcgu42wvXdvJodkCXTmxJeihLQa3XFhpgzFn1FYDizHqVKkhXYe6qNLkTuYxeW",
  "key9": "3GRVdUjZBKkA34PRbRkCHsNQK8rzxVvmC2M42qBmyQWbpWGDXGamcDdVQfYDyqqBhngJQsJ1Rk2pHtoznSwYZWFY",
  "key10": "Ramg2h1MKoD4ajvxDX3fjRar7AJjTkkf6Whje1WFVzmUMAWGvtSLJpfxXQwhthTfVBHED7ssmxsJU9ZKQd3T6Rt",
  "key11": "2RfHKnjBAscRwUN7bEX3DbRZ548z2HsAawkyiPRcaDo7PV86bHhJX4V15SZpwFDGNKL7pCFmV3zfWGRRjDDWqC5p",
  "key12": "43QW7uMLCq3i82zVRYzpdxTi7dPQs2iKRBhEtWv9ptyV14uh9dN9fL9oKK6PKujJe54xQb55TxtuTUQtjX2RBWZ5",
  "key13": "dfJwATrrv77cTnoxFb3G35uR1GydBYGaBuzmcY1NzfpLVBWRGoCvcpPeovyDbyi2ab8J24VtSos9A34iKW83Mu2",
  "key14": "5jJ7kU1NQa2dj1dgZ9nQuv5TbDpNZ93N1FUR7Z5emE2vK6GqFuCP71odspSHdPJNyxAWxqZQvTmGApydyKS4sN5Q",
  "key15": "3JJzr6cYBqfdVTfX77gJABg1cKz3wNYQfjbVetQnkbPAUXMumzjn5mi5vXgvVjRLeNF7C63gDMU6RcR8bwwjgZS",
  "key16": "4DV9NYighTmBQVkymMX5JC7tRhVstihhELoYGdAmu2WrWJkgjHCbY7MrK3TrAiPDBoHmhRphcv645w9PeDuRytEY",
  "key17": "xjpZJYtqEEb9JL2squ6V4XeUeEDqTByyz73UwJiigy5uEucF5PgHLwkhNaWZHDRhfiS4rnNwsDoZuyQ6UoLBNKv",
  "key18": "Cg8JZGF7nWjA8EjSUTzzihhC36iGt9oPd4yW7XkUZFDBkVKrbjEghB7eFMpcJ4s2zrvDAm9AXarvTjqrADnAr6U",
  "key19": "5nib7etkF9Ub6JTGLZA8JHz7yho2sTtqviUq228wf3AZWZinahAKSDaR8zy9XSVUoyKAEmt1hVwYY5gpP1q9TZJd",
  "key20": "5nxZBnFzTo6pqcUTmwXDSM2m7CMQseexJCCfgu7PWttYiJBbkz9JkmGgNJqJbsf2uAXod1Rt3FrtfGy9KrpoS8Au",
  "key21": "5vsEFRVjRUDyw3wydsFEn9sqzKvNkPTMvR4FMRz86EeE1CqEZuxpZpUeUzvw1oe3rQ5sqSMfp2JoCBjbzWswekuz",
  "key22": "4iBafA9hfUEPHEJtnBSdgXudftvo3VbN4geyXJhfVUDcJ9NykGQw8bAxs7C16wxrR2f7ycS1TXPpykYijhSmJjCe",
  "key23": "2R899hKytTA3B48CDiRCS2YyYb5PzrzDg4JLKMf7w9Gd3gsjYuYrQWMdPysVW6aquyuVQ6Cd74dY4zntVUwNBWG5",
  "key24": "3wx5nxwFhhajYdnqnM1Se2c74iU9aBsKweLLhgtXk3usPn2hN9Aze97xbBBPAaGaRn81jJJ98HFqNLgWphikncRB",
  "key25": "27EeNVUDQekHZBA33J21a8A71Dc8jeptzcwa8cKKG7bZbanX8CogSHFrKCJ5KPtM7ThgAczf8rMnYpseqVuveapo"
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
