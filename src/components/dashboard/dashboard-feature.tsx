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
    "5k9yQPhio5guxUitHdd8XLzzhtVxSAQGLPhkBYRLxstE9y1k82ZRwUktG37WRnrzHHe5JVN2W4oFVKtfnaxz2yXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MYnbB8AxP2keiTcycywQwkWP3yJ79asYDzQqg9kfngv5vEsSZWv5riF1TxYXBELwHqywFjBcWSq36kcSw9qS6mB",
  "key1": "5uw21VLXbzh8jnHZ9H5cNcpMCfsxqSy9LKaTuoxUTQ7EJXwUm5U4saF4DxwnDjUirUjZCieAPPxEKgEgiNi7vGMQ",
  "key2": "36jn9mFKquSYdNrJVGpMtT4T84fXLaxcoXkLd1K8nNeXvBfFitcjgN7BXJLQNFHo375JMc1jLHJuKjKVoYyTBsew",
  "key3": "xKkjvuf4JeKNakx7dr5Aagzhoqmhwpp18LS1XMAcyprBFhvNUeDb7PFXo9c1Kau3oqP2yCYAyy59hcApmxkf54t",
  "key4": "48f3TTtmkF5e7JoJhJmkdgxwMy7NJazXWKbNyvN3v5NXPgL2cSqvBwD7hu4fmbENm3i11h3omFjEnA2ByNnm87Gf",
  "key5": "38DkkwnHtWe2iG9adReZSPVto16DE4wTL11RJaJUawLR3EAUTmHkRUi6n4mdRY6TwZFP5oQCUkE7a3b2v9ZJZFco",
  "key6": "233URjuQr7ezd4ripfV8mfnpAhZ21UaFnWWfKpxU8jraMLdo3y63WQBsu6KwdYcKw2XEdhwLYkQa5gdqauZTvbGs",
  "key7": "4GzC8GDV8BvoN9hJ5kJQzPxDC15svcvsRQRzuuuFqkECz1LkkrmuzKptR7s4aGhW3Rc9vtxPY7ELmBPWdi9ucF9d",
  "key8": "4GLCEAGdZnjadftmFz7Romg9dkgaWBP7UDFuvP7eGi8vgpDwmHWx2UyoHPFp3ciCRcBp9tqwD3yZ2GfyKfS1JybG",
  "key9": "3TxGjCDS1NHg91H5aaYzh2BXUUV8AhL8ErBbZvtHYPjX3FCASBB45RW9z8o88oUgAspXfhGBbvTAa7gcCfDZyAkA",
  "key10": "49UqNmPCyTQ1jEnqpG3crAdd1NJFWFMtEUa786exvBrjTUma4imtbrvKA9gSqR1cUAMPboBjSQutBAeBUQHb38Fu",
  "key11": "2QDgFoACgPwvGfqc5fwF4bs28ijiFTxXF96UDSVqXRLCKT7gnW2WbCXXxmwohjPixbVDXK3Dt4eUHRboXtLgTmvk",
  "key12": "5NnwoFotbevAiMv1HbFtsnQkDhKmb3iq3vnRZHCD7K8uMGRNW6rXfvtdG6LNHXfKs4w3rnmb4qoma6qDbHYV8NAo",
  "key13": "36z2ByMScjtST2xKYbHuCryf9hbCUe6EyziQ5WiZnDrVYq9eqzb3ohU7xzP9FmKyMhgokSCxKEquZauQPTfygDg3",
  "key14": "YzreW81b2Kjx3aPBYCQ5v4UMDwtDd1sampQwVYfgLQEzsJsJtnxgE4b4XcWt9TWgTqnZ7T8vnJXcqLo8ehCBuax",
  "key15": "2QQeJVvyEQ2q5ia8MYXmT8fdaafL5UxMNwWzTGryHACfaCjpDfXpow7Z8Z5b49TCk1aUmQ1bndE1oEjJLcd1KR7c",
  "key16": "5GT6BQWQyDEMAomqaR248FjTTTAgVS7FGo1SRoCUfNBQpT9pui1Ukrf2qigQHtNq3f6sUUq2jGGyKKfRjTCCKGiv",
  "key17": "3kouyYJqZqFAtsRN3Kby1vyHUJsP8CaLT6QqxTqb6X4U1fEzNYuGuE83Bi78zES7KnBJT3fWxYMdCU7NM766vwzk",
  "key18": "2gj2em19CBHtyB31rkp4eeJHeHfKEpJnS2ZATecZATkDrkTqMPBrtySooLmqCNhMJiHAWPrnZG57gyDcadfKomPf",
  "key19": "3sj3JbQ8qNESRQZeE7pPhgL88WTFDtMsbRuxK8HoCiN15TMRy2SoWWszk6F3rsmCmKTmxRGsrDzeHSoaPvKqYCft",
  "key20": "2HTxqhePZ7tGK8s8mG4ASSDRmf7r1MFeaAUCjjnvMMvPioQC3BFui2RuyNc1rMmNQfx2URD4E4LPuiu5D2bQkLRu",
  "key21": "jzsnTn5CTuCGtas1t2BDFyqe6HhnCZPgZxxYj1rqnZX7WUmwZzCVC1PFUBXK72p3Zuy264v4DFgh6erboUhcpz5",
  "key22": "61wHUtboUV1FKF5jJb3BtuwWRJnzsdDCFnWxDRcZb1uayjMTGiGwnKaJVusFjcC5ewu7ZWKhwfiBoKEpncUDNH2d",
  "key23": "578nUQb5UKRJsXess8LbhVvrAaE9LeCPAaULhctjoVxABRvX6uGPA9s2xmY9SXHXEwYw2SYy6BbBS3EphjWQkoLF",
  "key24": "3dbb5ZKbRZJGwzn97EQv9pgXb7AkXsdRZ4Aorv5Lryt7kx629G4CnY8TVJX9VCCx4LsijoT1LbEL8f9PZvqhpB1W",
  "key25": "3aoTfqhpWUHPkVhFmBkGrfG1tMTskBbiz8qHojPe1U6D91qh8kGhnM1jdvzhTvB3trZBezXSA1CPpvGxBpCEieec",
  "key26": "3bU8uyD4EmstP13bszXk87D89aVcYj286i4TSuwH85ia2x4t8ZrK8PyT4PJ9pZ4wtNtGpob8R3M3b7P8eotCra4e",
  "key27": "3QLkLia2FosopGFkpn5sNta4eYxGX6uzEw1PEjFYPVnCMHYwiatS1YkWuDoaR2etG1FBQ3vpbMpZ3ByKhMCJXrFh",
  "key28": "23NKz7MXHBk9BAGUPrG3ppjgPdjDbwhgetBuEx7X3m91pA6nwZYtLXXxeHynNAnhEeoMMDTtTpUrwLismGkpm5wG"
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
