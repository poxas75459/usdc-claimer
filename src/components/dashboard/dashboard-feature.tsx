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
    "4MiphVFbSYDdhCTUfCenj8LdMgVoe95uXjXjgiijGW4dhwvi6eZmz8S93YTDCZ1EvQUfijsmPgJdT4A8y5zEJH11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rp65Tgg9BfJiedERTtXKcU7jiez1rA75qdYW4eFE6kYDe12cZWc1QQbA3HkwWBTnZjJq2NjZqqhW5nCU32CZNDV",
  "key1": "4UPenKdfgvRJ9affFeqVVeoKHh7zMuu7eyzwLTDj5YsDZf9F2TADBS8Jw5DTRzwybXhLrdZcD3b9U6V24SKQytPA",
  "key2": "2azQ1j1Pw3gpKD6fpwLmHaCvsqFb8SocMK8EL2Vr1iXpAi6U9pXyn3d7YQvPuvNMVwvkXydL27QVtbFsTFEC7aFD",
  "key3": "552QQwz6hPf8SM7sk1svzSHe7iTYqwuqQomfGtAJ3QxCjaZmU668ZHU9xWzbRc6jLVKRDP9mrufnS3U1oWRz9Y23",
  "key4": "4YiEW1YokY2aKsrHiK3E7KuvzgBc1siS4xhnp7ahueJpkRgdXUkJyyv1YRjjXged1xzJmSCxJUEHzRmidDKqmvxi",
  "key5": "3FoBMi1Xy2KSsWT1QFYWHoVLoEbERmV4A5PexREeHitK4teSVSuc7nWNn8acNh955qNA7AUNeCKqPrnMMQvEqn21",
  "key6": "JWH9zZBojkeyjqSWk2ThwVbdCFT6244ivHg8uoqQhQjfQ6WhQQ1jMSGytF7XekCeZeftyqdZvN57zb4MXZ6ENs4",
  "key7": "5WErxe3ywwYesZqSAawQxp8BWJ7PV8SoNF4MU9cvny4zvjTiY2CuiKkzZpLe319k9GtVj5Qd9X536U2Enh8FcrD3",
  "key8": "3WxquLJuv8brpDCaXATq3JQwd1KKHGa7RJh6t9KhXNxCxd6rF3SMjUgqvu73VgXPsSvfnC51hLwMPhZbKeWwjSsy",
  "key9": "25Zdyo3G3mJyWqssY711Ro9pbwvQstRNzffwrEqwuRBKJGfeDp4KSkn78Qp1EreX6c9g1C412AvgK1bP2Zo8b5Ya",
  "key10": "5eKMn6mxb39cJ2GzJyYS4139LvRHg2UekUxvLMTUiUt67xH58ZTUsFSuaNp9ZVuHRqWMAz5a1TKoroV1czKznLVa",
  "key11": "5nvV32NDVzJwze3HwsUihvTXBYshD57eNFk644aNnt7kuEUmgVifstLYLnTzYjmma9Z3dbwtZ9eW6D2bBc4JC81W",
  "key12": "UQ7AMdQZagmj4bHR6sRWoe8Gzm7KNX6RBgmFKNmH2MsAJskQfzaRLTSoHjtW7BkVxigX2CT2EHXq2AEQWXfsnVT",
  "key13": "2LsfMW3pmfSMzGX948hfWLozHzWNXjcAAcP9h3518gUd9JW7pBgPancSsoyCEiTjeunKqAqqrdSrJw8MeRbL991E",
  "key14": "45yWv1YUNrdWHSjaNhLw26CdUXUc9EhYiT4H8ALtuvkRT7c5EUrLUSPkX8jD88TDNUwuR7CCpiLrJzhKH4ixAxqD",
  "key15": "2mMtzv1mULfjYBWzZqufC7m8kcVgLcJyD77Dr9EvQ416pD2e54XbFEo6zZdYfZYZPXuGuoZ1aJy9qdpxWgofZsep",
  "key16": "345HSKV8n8A8tGzuAozHECLVGbP6KABYMn4EsP4ddf9qjNpDArcLkEyDG9Ffpx757ZC7wropp9ww36osZTTyhDjy",
  "key17": "9mTbGf2v4QMC5QfGMMXahgnR3r6ZdSGKztNwGXqMbyyppP3TLbzLkdwvR7ABUmRmDCSA2AiPcxx2RxgWpjcWN58",
  "key18": "nrodxTfGARCrSZ6pehpxDaxUTfU4uESPKoQvsQSK5VnYyr17S9EebjmzAAHiaWo1f1rGAUSeyXdskVyFSnASTWL",
  "key19": "2Gj8BhaLYviukESDLqVxAxpFPZbtFhQNjYvRmfPgc6ixG8df8F8yxYds9apk2bReC3ARJScnjgLaLSQptdmpuNRr",
  "key20": "5PPeiw3QtVJkKgcZUdi7kXUwt3MdULDKe1A5Zb3M2rs3BkYYp5GACp4rm1yJFxRqq48rbAd43bKYA9nj4oS2rWiL",
  "key21": "3gUtDfuqC3ZueVkAfDriUaDLpkLmoGtV67yiU3bzp7Lwycfk8HuKYaZZ5BZXWDRX3zzPXhvv3djzZL4VCmA6qmDY",
  "key22": "5WwjVN8WV2keX9qx5cbmVbPQ1t2dKaEddWJMVDBWXPWmcCKjRQkacLCquzAkAppNpwweWKYBBKEaDikBEmzxzcBx",
  "key23": "o4VVYurQKkkZMRD2uqBXnTiEshmtn19RzJmnExXeNHZVnP4J6pZUx1GfgfD1pN4KwHpxikRMz1Z4hEvN1U8tbP5",
  "key24": "YaSUWrehuFpXwAN4yUqja8JrRoaJcDTPvZDNCPPeiB8Tt1yTvHFQmKwFBxQ6fbgiNE7YJ5p7Sfs28fLmwz44V9E",
  "key25": "2HxkRqYHuZW8XUMZJwLquw6xZ6iQju61N2uErokssD6cQh3mKkCK43eQWWc9CEHnAaS8jBx97Bhxc4eZKvmL9jRE",
  "key26": "4YjyQTtRSnqs5ocE47eHx4pSpEJ4YhwTZviSsPXzNDBgsKT3dbsszjJd97LvLGJYP7q72KSTXf3b7qgvR1TyuvkD",
  "key27": "35iQgqXtBq3WweRR5S2EfjcisBNTL1nxDbjcpJFr5cvwPmcajQpDFeGB7J6F3MT8cfQVS9w76sBdqexfdEdQEy59",
  "key28": "o6ceKDFBPuxhNYR4ua2xNkbNZMoAK8KYjj2NCLd2qXhyQvEqKLP98p46w39Bo4qVCmtqrdoD6XJZ3gsnZLoyJrh"
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
