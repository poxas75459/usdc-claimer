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
    "4AqiKGrL18xhC1ogUre3oktkmgVARA2XxeUYcnvaSeJ9XAVTbYE28ttgnyT6AcRfNGSBCw2nngENH8wptEUjA87A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MGUREfJvYd2NA7PT9U12Up3r5tqrhVuyoZo4HdeCSKQXEgidaCdRfMmPwvBuiseBkRvZfCQSxjax9k4BZHT8FCQ",
  "key1": "5jQhFdpKh3JC1b8aHBHMkZsv82yxM59KHDegcywHHHZVtsC7cNeb8hrSx93jGAUX8sVFvc1jbmo89QYd5UZ3PRMG",
  "key2": "3PBCgYwUa6KVKZ6kE2V4mzX6aUwMcNsy2EiF7igSRnu7jnWfSVBZ8YH4XNon9CF4P7M29TxUPBtkstjiAwRbNVz2",
  "key3": "4mDpbvws3MWkBVBqm88Z9U1p8DxYJ8nHiWjTnbNLVsDKa9H3F5n4mcNYHXqNRp8E3mtmX8eYeL4v7wVXtwf1n18J",
  "key4": "2767emZLyjnhqCwj3znJawdmFmahCNkiSYQDr8MW4Ug7XjH2bEwnsAA7DdfXQMtjmLGom4ZR5Lmr3sGYvFZcaKB8",
  "key5": "2TQeyfCVHK5qh9D7s85B2Xf67nm5W4Zbsp1JDshkkSX1GHFFmahAqhFrLMn5TUnS6uCDwd8K5ey14xpkPQ2G1Pmi",
  "key6": "3F7dpWQkjXTo7CeKaGKTUSgc5HqMfLgv2wAx9AEQse5GsrSMcLTzpaK17VsB5ohunAk39yRmLF1FwmdMsoPdvkEp",
  "key7": "3C8VZ7xkbvdy9o5DVHCmmdPSN6Ni7UDBrQdnGDi4eUcNky43TKBMXExwMJxPhd261zHhNKg6i7YFRYm8oqiXs2pf",
  "key8": "bmWhVEgw6mvjT6CytCLYQ2sKfpRtK3GSUnZoLnZHGLrnVpxzJZXPW7PiqxTifNYoZpNhLUnfAdthLZEkWbR3GsA",
  "key9": "5fRdnNvTyLy2ecBWJRccFNCu6fhqHhwRX3WCLMbGpLDUtgCmPCGgC2zFdExubypsxEghKw716zVmq1xicHNiKo45",
  "key10": "32TTiZeG8u51BtgPeE6mJ1PKQBxeSrNDVpeAUQzMySHYyneexsVndibHEGNN1BMZkLxXtQ5Dq5H7bGTc91RzS4oV",
  "key11": "HYo8z3DknD1JWsdhzeDJWfv29ECvQDMzeXdL9vwY7nurEmtSBCtJNYLGcFJ3piXiyzs9qqB65uTHZNhRRnwkfhi",
  "key12": "3MXaFGaKmM7AmnH35CLMYzd6569KMR6MUjFVBr9ESznga5SkYTxJGmwZKjvC5w7jBDWsVRU7kKfn4MwtJ3iMGXEF",
  "key13": "2X5YLSvwZbti2ZpqbX51iEUNUxrsVmycE7ktnj7tBYAePNntNGQMqacTyviXMMK9VyS6gE2QKySyJNuY1Y85Mqaa",
  "key14": "651kSBw5NgncTy1yBmEhMhHL9zbuHeNPVEiiHW7TNBWQ1rKvsRfRr2ApFSNu7uW18gu6LP6HJavtXjRUAgUb4c3i",
  "key15": "3ssbgUzuUPFsn5tLV978PJCT5igGHwEFU8vE9b7BVnk5Tyyh423CyJpPdsfrMeDgax7skq4KEnnvFKzGgALcuRF9",
  "key16": "wbKaTfDATYayQj1iN5bwHStBxhkHgZ1YZafCKvMZnWq1qTseqZPBHCUu7Xyi1zGRecYCnm1ZmLUxpJnBudQqmiR",
  "key17": "4JWk1P6xwKm71xNmmCzxGdNqH47Hd4uSLPcPRCEUbmuinArJc2ptKHcg4S8KDGyPx5FCjdTiycseiHKe59LX7FKR",
  "key18": "3WFgHvdbGWbCEY1vFCVCtadCa8Ek6zCNNyS43Vdx6chcBMV7a487NbDRrVrA7SuPNDkHZyspgz65wwdRkP7kqJmD",
  "key19": "4piJ6URTbebeGh6dTQBCfQBXCirm2szVfmcUWUQC7rbR9WvR1CyzFpATiZBmgCfnyucDPv1yB3jvCFN2qMSz2gVV",
  "key20": "5KzmJwR6swStqmkVwopRsFPedaJTyTUrFG7g91c1zVzvzVyHVnjwkmiRd2ixCvNWVSYzyEVHNjAtR4LWiwyn1aBE",
  "key21": "3M5U4UgauUiWTHo7xxJAKbFiyUMUtcAFSwSQwbQQKKnEzL19XwbApXpjmidzRVRc9TFDcreysDKV3LCmHS9kW84n",
  "key22": "4eNfTaconCwuqGp2Mnj7fYqKBXvAYq8ar6we2ENd8FzY4jqyCLjdd7QGWcZJmsYwKHboXSpqU7NRCHNssCB35MP3",
  "key23": "4Re7e8QxqGpcyVMEUW3pP9FxBoGt8zjRLouSCbcdHHgoedEQkGJa7niUsaMUhxYLhxT5vbZjUu9fKRzJaxAtgBjM",
  "key24": "2vMkp2NkSjfXXbDFHFMsoqNuumbn7MFqyaA7txu75CL2KRD64CzTzwPTJkcmEjoUUNJGvKaEqWXBhitzx95kPmFg",
  "key25": "2UjLn1dDzkaFrQKFiQafvQQPdQYspHaBT2Gp6fe4M7Qy2vFX1vFCHfDevdefAjeAHuGMExvQJCmAe2FNv3MpB32U",
  "key26": "2FnZgdPR2Dr1U34LZToLd1hzDCunzG8hyKZxdCPM1GN8oF9sWAfBwqe24mSGNrMobFTBdrMavwuuTzqYCg7C9xjq",
  "key27": "3UsN4bgibAtWfy7aJcPqHJ2JsFZDtm9MxtenqJU8pSegdV2fHUqtKBx35KWvh2GpY3bUgnLhntDLFfwvssm3JthQ"
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
