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
    "3xUurjLKvRAp2VE7o2mu8rEXvM4GKj1SiNQhSU88xVbGpBXMoAbyWu3bPC3fHdhKf9vxyxujGJMf4gHDuUmzg3jY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "An3kZomiJXojoBYeC7EKhkrUztbgWTPEUZVxkrmrc6Qx7u5T7odypNLtjWR1ag914Ch6Sn7BvvGuqcVKV9mzA9X",
  "key1": "5Lw2tupbYM4Z3AgoDiNu1PaGcLkc18exGsWxrNSgn8gmTaAEYgUXb52Jf5Fny5XaV6oXYFSZrDL9dyF6EARVfu6M",
  "key2": "Vxm8cc9ZLE6pcvSRA7isqAJV6rXSpzzHuHiVsyVu8GwkxbxwBAsYkk3ghc1PfT1dYJoTfT2B6xjeE64CeuizTwc",
  "key3": "4QTSHQFRmo3Nufoqn4Qe1srNEcq7rsfvMcE5FLPJfiaC19vfLJyuBdye6f4pWP6mY3pLdx5xNQrVGue8kpRzkBhS",
  "key4": "jADNfCVtv3HNvMRFhTBqJggp5spiYJMyL9Vqw2EtFLwHiCLn39up6sewpnxfNTAKZQakXQ3Fv7671m31jtt4HrR",
  "key5": "5MXCNPcR7rdKmmNH74P9x8yVmnumSknWD4rn8BjVXAXinTmPXhEhsKRoKeKmavZX3SMcga3LdppdQCCHiyXNzDfM",
  "key6": "42DLrxRvGafBSFZ49FHvKJeQ4jjHn99dHfW8WwAKCMfhMupsZMLGLojSCrhKtwfXxZr4VoK5SKnukd7F2TXpe6es",
  "key7": "e1Ydx3JLkEoffXDsa8wB67CV8akzA2ZaJ29PNvmyJXx1GYEdwbvpAegm6AUg4tZZ5PuAvLRbQ4euCoTSwcGwpW8",
  "key8": "2NEC8B8LaAdUyBLBsdVAsxe3ZGyY3WMXXbGoNKmu7nzbqLv375h6TJQpnaTwQuizn7ERTAMMCm9BnkTLgt75Jxon",
  "key9": "4zHoZJkGjDPA5LqpwCzEjyNCuYrTkKrJLxSWDAiJuTEVjX1hgVuvLdhVr91bMYFeTy6u772dxbpoDgM2U8WsVuto",
  "key10": "55YcmvRwQwV72i2u7nk9NHGjbAyQrSj67KNomqvXyCkaakuSE4d6xaoYQNNM2EPj9GDXq6B8NSWnsk5JahqdRbVJ",
  "key11": "3F3Bj22xC7uF9WbALJsKD3oQGp5PSPkJ1f6SEAmLnvzdLbrAaFv3dFJScq1XAemt6NXNVFpjubm5WLNXdvAxevtY",
  "key12": "39Jp2Mvz7gjmBHZP9Ai78zY8hCtZhnTCz3yP7LYDSpG6g86BEu6QBzKh5tVtrhz1kaTEp585ZyWGahTZ7Zupr7V3",
  "key13": "283ao53UtoP1rrK1FyYpcKjdQQ2Sq61GK8KDBZssDY22cak9mBkhgNnE8yPr9z23B58xmp9dBrarq9nfPSh2QLza",
  "key14": "5Hmw5CE5fLjCrV2581azBgaWPWk1UuC6sFGk2yKHEJ2bCpGHcx8mVPVV3yNnCMsWtGMnDoMFkSHWxhDQomHpU3WQ",
  "key15": "39ZtNrxM5Tccegqog2GcWUGrvwgdoVLyDeogowYmkDAFTv9YrCNwWQtpfRZLSk5wLmKfiNECey8xaA4ATycwWkE4",
  "key16": "2umtbdkUxvLfpuSCnGpw2otjjvT13YfyXvqhyZYnD9CZnAHjoE9tsrvRgxhAsWHcZPHM4VwVF6V4Ei7s2i7TsA36",
  "key17": "5jeT5SXHqLg3aWstGRszcPxVvoBWxJEdhgPwtRkVWteADJ8pMpoWje6r72zYJLs3fmzMXQn97r6SEfWU4SRvVa6X",
  "key18": "2yZpgMTV6DiHs9Sfn69Sj5Cos4GnNbD3cEZyRqpNoDhm3BHWdmNeHK745jGeSJy5wfmCV9k1kqr2tv1H8gDQdT9L",
  "key19": "5uvJe2KZuj3Kdcf9LeboDe5wAVAD3dTSNu4ftEqBbgAemw1Wf9Xj2Tg7rGbxttJEBfC2QZudNqP4g4PCPVpj4yr9",
  "key20": "67Brw8o9NjNHtTbnKCUeMAtVrf3AbJUi38HW1RiKHTXQzbbxzfySjGkG5YG8aLXiAZdsjPfDuUKjSt3Zfo9Ab3em",
  "key21": "3XuDvqNNZB3zr6TvYiND6VWit9USTnc2HTu8Lzv1oQFQTFmrQjZW1Ft8ZQ25Qp9wC5FCpnbRt7XTHh2Vnv1Gomzi",
  "key22": "33E1oMeLcZWEfq8pvQV4CXcaGkfHTthobRjY8WbJfzcXTpXPrscpzcQ4g74ZZW8TYAqE5g6P9mEJubKGRH4etknu",
  "key23": "5YnsJH1Jfb4S2Q2KmsQw7QxAphGNkUH7a1oWCphW8VuD1NLCbwU6xaiVostW7kDXNJUHr9G2AqaC1PsGN2979vJn",
  "key24": "3rbjASTbMpwCaJmTkeLPVvEZT7U1oyTW2zcZKo8hSy1Ax9UEYTsez4vyLfqiSkjA6F6ypv4yRNzMnSJbCUjHxHVb",
  "key25": "eeEs6ZvpeTPFZ7kox7BR6LbhkNg9ZfcwPHQDyb5Wxe9g43fUVKAGMmQA27E6pXMzmw8P8dDq7hJni47ZgXDBgNy",
  "key26": "25ErUW5zFrNPCcWNLWWeUNyVPo2xTeupb65CrqwXEw16tZyA72koBEJEgZ43L5ghevTPeZmnUVUApEBRGi9e3LwF",
  "key27": "LcLsHqrk4EZKUZFukApbQdCShSmYaiexbQGqCdtXAiQouT2BJk6fmy47T2vDNE8ujWiMWVnUAu7FtzMPzbGVqUF",
  "key28": "4k8MdQkbr7TXQzaQ4rd3VzFAfQ9rSWgcB173jgoWMgDMwi2pwCgopLKf9gJiaDEh7pK3pi9edKhRSEZmrzxogyzV"
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
