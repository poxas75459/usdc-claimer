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
    "46h8pYXfxUPXQQ3MRcMfMrPdQEnPw3E3cDu5xp7ATjSQFDoDYGhrLvHbN5KH1Nu8uLFDfynxUUSrkqj5ffVAguHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v3xXQHiAFyGF9xzxw8zkyuUQb7yVGJb5DYy1EMyFv8pBjstrTnny4JJp6xwFhRVtUabsoAh6hxr84TXwxDCJqmw",
  "key1": "2w6cekTztY9tAf7WBr1xoKdwZkJgoAHrVcta7woeHuWzNo2GKi5ubPDUj2jnDyA9KVWtPrJDHFix8U4crjTHWgng",
  "key2": "44ehzeGteFrmmc5GD59KR7DL21LfYALZE3UtaXAYLnkTpg5d2w7DEQ9itMyVSyMVE1joZfoAD44VyXJHajvzpLVA",
  "key3": "46369WDw2kgSMvenBevkRoBqbYVM9EJVvNoS51dEYpnPi3ibGxQvTLqCjLdA3pda33NZQDeND7WJpxmfZyQ6Cx6X",
  "key4": "4XA9CEz29NBn6myKJEZGeTremH8FLT6YSq7uC6bHX5wLh9rfnLcyequQQanXJiHa4dHSgzg7jypPvixycAoPeX9M",
  "key5": "2xTA2gTV17fxKXLmnYMFasAUwsQsfQ2WqhX1Qp3qSTehXruP9iArANPjQZn7GbDZXNVCNySYowvTJez7mCDem4Yp",
  "key6": "4umkDga3fR4Gg3P9bqEoGmXb8UYGozNL66vnW31WrAhLsX8bwbix9mZruWv1tBHYZAZTA7hK4cx9VSbegr1wxHAN",
  "key7": "jeArLa5YWaWJV45TGfxKqSydkALSgGWUwokqQfNv1hX7UnKmRDUU2CEjFLkZxfH3oRpSxMndYNAK4oRXJrZZs62",
  "key8": "FWHAy1WMvUwkGajWGxzXK9Yr6DGspx4uRELLjYtvzHoAENPtuYDbWnK7Uz1UBHzZr4Z2r5n3WyypuUpJ9zsWNU9",
  "key9": "2Z9wSy8QPDjM9Hfn3Lxmxoqk4vrmm4xT9nSLb7C3zy3JdZTo3CBJB436z6rpGSN3JBCBSNpQswqNGAagukjSYcJq",
  "key10": "kC1KsoN1KdajzJsvaBVKSSuM1ec1vJS9bSeZjhFpzqXfGznJyH9ZiAkPT9wT8knXHgi5cVXiPEXJR7G1TQ1YZTg",
  "key11": "3n2Hh8aZfN8DGhbKcEv3tjLXfmJZjCxq9niMtQi64TujuNT8SyMttqP1CXzFSZr6KFySTmFze7phHr6QhDWrZcAJ",
  "key12": "5XE4ovViFHJoDuDDSYAr5HSx5tecDKG8WNRudGZRTsbEMgTqtTBN9Kc5g4qCwbQbAAmkMPq9MNqEjh7JwRpPFdXD",
  "key13": "4YGNqwqTRNFohFY8H3fNwcirfxBZSjGUZLps5rF3Z533iJJTX3scUHjS8R3dBc5AkydkYeGNV2aaNgTHwawW9hVY",
  "key14": "2WRFCM4vggbTLyk1q2uRnfJX9VX3LnfFdQMoBY5hQUYHyVsDXHUraz7xoEko9AhLYmtimDRc7PpsqSXjCVS37tGs",
  "key15": "2sd8NS7F6AsgdXKrMFqJvDqs55vGWeZbytVGUoZcS7xaxALFcqoR3zK2yHzPkVtmRzTMMYEwuGcSi38A1wEhUKpZ",
  "key16": "2F7nS6GmJMGS4zAcqfmRSMkNzSbjcpvsKznBqZa1pRbjWr39uhpNjwvVvuQbMk8nqPGgFNXuJ8KFdf9wXsrCksYN",
  "key17": "2RpAGBGgqbvnFEMRSMiugD1cW79LBkk4XsSCmffrsfyuvTRdXmqCbGsmK3DZeEKzyy2KydG5z5u8grhNmPT459n8",
  "key18": "41QayRdsfAjF8xjPdvwtewg7jUu8BEZr1HErM5VTjZ1bys5yr494fRUy2chHedWYYbTA4m7xPAwYzHqfgRD2MKB2",
  "key19": "5Yi1JEUVz6WNSWy9WtuD9kRmkXrhnkne2fa7bD6z57sGpZiMGqujJ78BKnij1GQDgeBFTKHNZEsiwkYFLsmxLuEB",
  "key20": "5Un1mAFofcQCPu6UuZ9eZXnytsNL7AHcDRat9Dztr1Ss8fDcdpo42HAnL6j5brnQXQvuoHzAZUi3JqrCBer3sLfP",
  "key21": "3nXEDpCD1dfxvT9Aeeu5dFUkn6CRTtwYtPFxraUNLFhyv2TDLGhpYtne4RYk5fwPNeW3s4tTbKApNXWkRUa1fmb1",
  "key22": "643tj7aeYY2eaAgEi1pduVST6xdTGM4ksgRXaS1YHPtEKQmx74WPTboiPj4tnPpwxXKJRc5bz14d7Ww3kW1Th6Np",
  "key23": "38yvV8EKuw6c2GSAyutU8B5dUrnUMujM7tzekFfJhWGCfMWt1xtpnsNiU6p1mkUhGumMA49aHTtvJmUpo6dxcWBL",
  "key24": "3bWXBqYVYywuFmeUxVE15wgwnNaJPDHw9M83YbyqdteiNYwAwh4mJBK3BF6jgcKBxM1wEt5b7UpHVEnqzhK1r9nC",
  "key25": "4wdLZGKkJzuFhat4BfbsRPxnBRZSasAMQJRK7mE1KnNsmrcSSf3JrVwnLn1cN4MFo3watWTqJmkqv5XCsHkvzAnu",
  "key26": "3DUPJPXhSL6x9JTpaS6vcMNKbaUDikFgTZcib9j28H9gmkL8X7PR9g9txgGTPULMTM3FhhNi3tUFb9VN7c3oDRhC"
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
