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
    "hG9iMQsyywERia9jg67hTmWhU64p2NmMgZr4KPS1esriebE6uJ7gpQYCzLHahdS83pEMk22WD2hUFvMfvpDSGPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QHxcCYP2rPcWK4fUMEYajxN7AymQFmzDFkY3GL9DFnegpQoos2CagxMTt2EMpnxRgj7Sn6EisUWHU95zXU2CJ1W",
  "key1": "42PfHnaD3w3mbz1q3jaraCkZxVkeZA9SRCX3vRLEtqdhAn1iwg1KHXuG5nnErcKkg4VsGLiFPAWpuENG7KddHLaU",
  "key2": "5YGwoBL57y5yT76jgr5odktpvk5UhyUcn1nZ3XfNeoXN6vCcvR2L28Nz8BFUXEpvjhsqhVk6waTw49p9iZivUpsK",
  "key3": "5VRpCjmPSMZ18z2x37XURu6vjgXQRaH55Fr61WY4c7xhBkWZGtV8kZKmxiatXYuAujLs31SENGqMcUCdwwm55qsa",
  "key4": "28eV7rdUqcgnXFHHmLmemvz3jyUcABVxSPatRR1BBUTMR3MNEE15NfLd9y89JhTSdTRD3UQFCwjYFprDCVvsir9n",
  "key5": "5HVxirmdRss2UhdHTbfCmfquN4ZjtuQjsMU8PJ1AsbsWKcvqQLXQkxDrCt5gR4CkbiJ65XsJhYy6c7RPxGP2obv",
  "key6": "42UNcNYwQ8fup62NoEJPxo8BzvYWSigo8cgdUqCdd4WnHADPcy6aCJPbTu6dnGJcLEYe9dpmeaX3ULfb5JrTMndj",
  "key7": "3H6gmyNUqd4KBXSMwboqMTvmP1hAcNSyQHZjo3zDi5Y11Bhmp9pvyAz9oTJGZaXXCxgEr6sN7GFA5dRVyV7Jez9s",
  "key8": "2eER8PCkh1Y1rFWU5nLvNAYUEMS531rtumAhfhXTHrDCd8YcGsAFsbcRx337FcafyogVWLAXqXMBBNQKMiC6kPH5",
  "key9": "3y8QLJexbej5p6Sza6qedv2KNkHPgMFtRzXPm9N97hvTMKqj3SGQA7qketXd4LFZVoVFAUViTUMcA2uAcPW9u2ZN",
  "key10": "zfcRFkdsr3g6YAxSejmb5ARybnKqBhWXW6cFmzCJj46vUhunDyC2khR4XqFW8WtUxu9VezEi2jN1LieHWnpxSuJ",
  "key11": "2YZak8EfCfsFTGwawrjrdDaRkBpMSghwyoEHoMjhaPnCuhRBfVMLTzufshPQpzq9ZGKaABeTDqH9spp9erAmmZth",
  "key12": "2pD4V3mTjoC9DDZJeBoMvycRxaGxTQn9AN3VqSN5rN1dfqmB2ztHAhdS4NhpmpWkd5VUr6nsu9z2MGEXKfRz872r",
  "key13": "PRU481JnfGJrjJB83uzj3Y5iTDfCqXK46wdEspSsNekLQD55oAEnmRbysgYSdTKaWQikirfRvHdECDEYmjWs6ZN",
  "key14": "4J14somEBrv36ytZC3Xi8yuU9zyVQWraa4SCpx4boFyjt6JpWKGx82p3KV3TEEdshPEmrMyL2xJfQv1384ovjN1B",
  "key15": "5kcujUMdiybyWY5zwE7YdpA9t9Zr4CZxNMt3jUfcQxRWGktGKHa16HgnJ1SHTPBCcavEfk7PkD7Z5mJ3b9XAtRRA",
  "key16": "5RKP2w83Xk8uu97MMqaeed37NLcSkVVVi264zKzu4CecvDCY6weKpwEoLpL3Q5wM6mfbJrgG2Nr9GhoH5UVsJXnc",
  "key17": "2UWAtqMhokpJ6PgbMfUv3sCaYCLdXqDfjWXhnRPfoqY1C6fqkk3nQNUicJ9bnhpkeHo7bEnPyTTdih3RuwgUNysh",
  "key18": "2z4yuGp3zzaKENR1iANYDKZUdJcRPRDazRcpvvPNFMbB987dns6G1jJ45WYVVJ2m2Jkw69Uh94JM1fjGjZfLHAte",
  "key19": "5LAYotKMLbQMgc222ZvgVJgzc585ztNSK8TSqXHcUTiiZFdQXj5LoPhZC75eAvpzLsaEWRegwLTEYaoiAQTTxoVY",
  "key20": "3uG16NTHnsnMnECYnK5qXKJtkAdTt72ZvSbdAp4nZa7onkx9xvxhFcnaGtkRrdD1zBo4w53CKMryS1XRBbN5QRnx",
  "key21": "3NaBj6AWD7wo7zRXbygNVjvb6wK3RWXoDk45ZUAMummnmGYnmpYXinCF7AAUtHUbt5cdgHCQLPH8pNbobZhLEi7B",
  "key22": "39Gfm18zaq88ER9GsazgPcDf8m7WfMpiGCw3b5tutPipUscAJHxMcoHGXF7EPTm5rDzXEKfC4ju2b3eng5VYEVry",
  "key23": "2moHE1qLwdwmg9w9eERtgRzg2B6qQjPph7LZocuoi5VWquG8G2VfZJajkacWHGoSRtvBQ9ZyDRmCRpBdmppk94u1",
  "key24": "4aDazxJLrmqyTJWDuQMLkDeU1ZgbxxzZZwpkWk2Y8nsBCWvXEEk9zNqtWgaQ2LRLKmQCXfZb9kQY3Pg7vaumT5Cr",
  "key25": "2udkEAfC44xr2MSRGDyDhdG531qxkAv9mRz9m9nX5VBLjyPCeYGmxdmDzyPeV4xPs9HLc1XiGY2EXUPtq9uQnVz4",
  "key26": "4aych7TXfSMBF1JsqWeFfjFmUt7Cs9hn2qdWTcszbE3wWhkfJAjY7zBzSE2J7KiXSYBK4AFPX9GkuhtWMashECSf",
  "key27": "Vi8aVP7ox9pnPw4StpkbbGboyVNN2dP1aYxiF2WhhE8ThLhrjjCKL7g4k9kFGqN4riwnpXCyp3zGKi4qgnaPRpJ",
  "key28": "56iMyVEnLkokcSUjaV9VaN4seunM4cJ64BRum7CQjYjGZthg4FPuuuvsyF8Hdc3RV34ixHCQYMLETyF6nAjhky8D",
  "key29": "2TLUupNdNpXEr2sZo7Nc8m4w1nE4EFB1KfGvzEUL4GWNfGK5zdojCFMaVxf3y3XaMkEDUm7hTWBKTAZeVrz1A9Ai",
  "key30": "4Zg8FM4tyuuPPdhhq9uv6HsZyaypfvwrK2EYCBPL9WwLk61BLMFS6tGfMN48fBK82Qe6SjiLy7xaHfCced3FQBpb",
  "key31": "fo7DfZQJrwE9ws4xYtMLom6WCMXjFvKzhpPRQvpx3aLpBc4bi9GXEqPzFKAgMRfAsdCofHHr4UYXmpkbMtfHeov",
  "key32": "637FUxh13dEc4dd62684n2cmQQCVUoCMuH9GSno3x1LWjhazowPnVZrwHi28WBEb4fAHFEGT1cg3hEA99inMy5nk",
  "key33": "3QtgEqGq5wcrW713q6WvRghuQYRrYJmqBkq9csctyewPMs6LnqEauAd3vjTRGbqMHefM6pqiTmjpbRTxRrdJ5A3m",
  "key34": "5cKrsqYUXaeMMHKXBTpaULk8SvYLkDAwHHeV5wK7aJqQ16jsWu73WC5vj7H9uuhiLkW7CMxnioLQxq9hmJWV6jnF"
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
