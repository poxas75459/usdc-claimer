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
    "62RsAHm82PN8Nvr1gGkiAfJS6acgxobE7JUgp9cCgphJHgC2FsHu2MPZ5QqXRFz1VPjhcrvrpSD98PMgKN4NWTA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KYxYSRHJ3bQKL4sVzVnHVXRfWrnDLfu2Pzv9fXXk1BoD1KjmtvntVBZj273nXczcmNGsGWuAvRbvFVgyFtqosTL",
  "key1": "3cy9MFp7nntj82YaYUXVg35JxkkdywMHNishXWPAwzBe7oCUBYM8iBYg5vxaiV8v9QX7K2CZQRWzQXqZ1WjMLMzs",
  "key2": "2nkYEXYnP3KjZsoz1RBubLsduG7kwxsjZJYEgCZ6YKqNKEvNESpeiGr6yt3uTW8X17ij6TrZ8fsgXs95YWEsSEQZ",
  "key3": "Qco7yXQKRgQMDtKZfkS31PRQr4zzzGVsfKVkLgSNu16XBNpy8foazLT1uez6a83skc43e3CE6hkPAT8brrB73gc",
  "key4": "49axwi66HLThXteoqQLo2pF9UYvxjUbPJwQVRkVEcZ3jzMJ2Q7GgHtvnZbbXwKDBJ7btTrGrzqvJX8WwSBKeQ2AJ",
  "key5": "5PxRkFirXMZakmeNRqQCRjebYiFkxiCRBYXuNWSXknGou7DDFQp5M7T4hyVH62zabjmyTsAe9ehNeaAgQjkQgxzR",
  "key6": "4p6wkxHsN5TwmotxF7Eej6pqsUc9HpjEaXkNjDWg45kTQYfAvWJSeDjTmewznn2kpQm1uVU516JqHU31ivRi7LmK",
  "key7": "QLHEmgSBXEykEjTB4tnt3t5uaQeeYogrWvDUDZEtnis6EYoY83Nrfvr3tof8q1bSevA8M4zaSCQ8wZJec5chZX9",
  "key8": "V7M6L7T6PKXA8tqTjh5xvPhc6h9YQSZnescwrdC78yEZ6wsvjSjDPMYBuaVcLYbchudK732zsLSvy2Eokzb6EaX",
  "key9": "CK9zxVRtcZs94Gz8a1tXxDCVpCQatjX3JXucfeks8h3jipyAQPcEdZV4jnQ4KuNgmJyxHk16gyqFXdSQgqXPUFp",
  "key10": "5mH4YzYvrhUJQANc3ywJC8UYrDKRWqcntKHxsT4r8DViy5R6vA4gfQeoGQbu8UPq5dvivVUycQvuCLs4CxJMFWcA",
  "key11": "x9nsWDHNsgD6nvwEkQarpPfAdS5CpU4PWjPVKKYWKyfzAGGx8GCYCr7YjX8V16xFobV9jkpgXCUndAuuQ731mqd",
  "key12": "2uQeTjTDdjgYxPpJ82MJV8p6mothRhgN8bLLhQW9pg35gc4xQEETjkmPPmLJnpo4FCB7gekvGJrNJkLdPevUj71h",
  "key13": "8MZLBjFZUMkDGuJ3TwwhPiJhnS4HE8ZLDbhkNDwLBocQQKiHBELFwMRoEYZQBZWqqh6M5MBAixSfEenwkCx5JCq",
  "key14": "5AtU937xRYzSB6inryQj88utm49X3jrFaT94nCFsc8uYeViJhnxQT477dr9qVWe7p95aAHt94YrD5FyZ1tXFLMkk",
  "key15": "2D2XyqDBiLxe6TMESoBRPdjVS7Gk8JJkgKRCmh8xneH5J6aAm3W9Ru1BweCCNr7ecLgE1fFL1WyiZnaWk6hFF1V2",
  "key16": "5CHAbEuvFjRfkCCAYUzP4GHjNsK6RcnnW68NAdXJQEng6RPLLQ68ysTKg3Upu5yPXFpNkcQxky8Caxn95nA5dRKs",
  "key17": "3sqdJHFf4PYCWAREUcbuWxbzMFe2BbzB8jP341epR4TyMAsZ1yycTbyeuTTJ2TTwcDeCa5n2iLrMFaNeDckhn6Mn",
  "key18": "57xDgSrKbDmLa25eRjFG9HyySySSWyNw2GcSRv9pcQ4JhifrYnF8ZhQtCrMvDFYyxnFKfh4ufsnGrfjU6SFqHfr2",
  "key19": "5MtrBBpSNgpx13wgctdtn8bp3uuaATPmu9MRNY1811zRTCNtRskTzePoASkrue8XPs9zNpSicx1fbrpRWudNWios",
  "key20": "5px6rn7JJJWpXZ4xErXxLKNEfabkg6BeimvS5EJJ6m36hzeci1bdf1iL27TtynUPE4RdeuZo4scycUMskRuvaD6B",
  "key21": "2BG7M5fs48mHtdZj4u6QyoUq9RymXR3EK2gLE8Uyq8EoV858MHmVNodzSq93yxBjaeEnhgHAcLzdcjaiihtfmfhy",
  "key22": "4iyuK2tbqX72v4QT7k5mNxPMp15dWL3Yn4XS87zLG7kjARBRGgE4ho613Tpqbo8CxexAox5ggDtjCak3azMt6viE",
  "key23": "h2RA5F9fUhVLJpHVyR9Gv1YffEK67ZXxCKReqH811RBLXLGR1hEEnkHeSXedwU8xGPEbG3nbMpz5HtgQf2Px5dz",
  "key24": "4EPxGLBS9yKiSK9ew6DHCBF1cgoLxaTT5pQfJfBXeut9QWfjPXCgTQzCKmnfbeVitZ4aH54VMLhGcNDemL1768Db",
  "key25": "2GhpM55QcuzLdoVmUsCTXrKcyAyuoNpyboun8vyjZRP4vsgsvbW5yroAhgkPZuYsYWuEisrmaDqM7LNBa1KWoeqs",
  "key26": "49VHpn8g7GcenkRdM7g7ptpYiTPZxheWagRmUi969eY7jRxoUYy5Mppd5jTTRdV46Nryknj9tSMqhyQN6BHPqKx4",
  "key27": "644uDnPHHzzDqnzJLw8UrNH5duTc82KJpxWRJGC8YeTDYt3toYAmxr6zDNkcezQb1jxLaSmPuxSVuv3PxsTzCkMa",
  "key28": "nS1a26F5F8e6XAi7UE1PasD78GESQcRZBXxUJXtYHYXh1qzKQuGg43RQytvEgn9ngWdYAJN2aSEeLGFEiRSwfUr",
  "key29": "3buA7N3ypwhHgfwsvTgDRc5qS9k5WS2AtXS77NTFB9BbwP3rW3RQCQgaCmRffkMdAa7V9UHqgDuxzEdtt1FGwufr"
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
