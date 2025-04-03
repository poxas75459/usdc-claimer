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
    "vqWN9Fx2rzrD4jzHxBLfovXCn6NDY6mcogxV61e3cuTpsb4ktbCbgK8AK5ntFpRE8LKEHWCDARfNVDmavrgVGSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a7HEUh7pTKuS9wxbZBcjXQmBYPV2WR5wcVGcSS2bR2GXdNgKDMmpALreVKqVwmDbHdk9MxMaAcKjgSY3LgtcUBq",
  "key1": "J8g8Wh9YEQxMg3n9kqSXMogJSKitdLtswUFcQrYcVhbnexe7Y4yzQGpGtGjtBJ1Wb6bFfVurfZ4i9bFhTgX8FzM",
  "key2": "Y6rH5EKC5DdZVGWSvqqU2KnUFhjfd4FjyaEkqPP9fwgfpfNB4mJNkf7CisZ6YT3WDo5oSJxd4jFtn4hhrN7bvBp",
  "key3": "TXYrnpKbYt4A45a4FKrvLhgbAurY75vfXUyifjykKPSjYvymgizsbRRYEA92xQ7ETgo2eTBfTcmeYN7aik93v8x",
  "key4": "4i2gD57cTtReYRpH7gPmU4ucLz7NpfyBRKWiozacCuT3tWMmYWLirJ2VrLL8BXYx7TocwyJoT3NNXTjKFr9c1TiT",
  "key5": "m1sq6eh6Hcpgo42VZbkxXiAb5YUD2vEkAQiW3DTqryaoJEVE2xg4THtu631LYdXnSUGdU2VUztDAGnbuyJ7vcDT",
  "key6": "5X6jp7TimLDNWFyFMZ7j1L5kxYkZNps26kaZDsw7fFwmPgxkSCu6hsjtr74mvdwx1GXksv7op3NkQqfqN24rwG1E",
  "key7": "yRSArWfcNVP54jULXYsSTCdCdQTztH2LD3wyf9tHNQp7PMTXX5UwXJCV8Wv8rzkyEodSuqYzSWs3Hnq1kssHKp5",
  "key8": "4ZknnBDzQX7JmuagyRUEUjgCKm5s1aTqc2HmKhXfJmkztV7bqGJZGWNVgWU2fmcKZ6BWiE2ifW1VhvFmX2gNW9ze",
  "key9": "53XyApUcSDzHFEAr5aRwnTvhvi9wTcUio1yysXfDADBTyy24Jg1end6miz3viu8dHyWQ66ePJQg4z88sap19shtD",
  "key10": "2Yj2xqke2PjxvYnUkSvZcSY5w9Dudu5R9QNCXuVkWLoYAhQHYrXPeZCaomC71CT1V1A4nobwKQgJbHguuNXbuFs7",
  "key11": "2UsdRaRx3WNNPgiACyHwDuZXXiZBzxNZ8tFa8BHz5frJ7y793Aj6VR4LvyjFFvZ3GPA32tH69oKwc2LrQpvpnCTa",
  "key12": "59gFHiTMtwc1sobkZqsFZN1j1eRMcC4QqRBwVBNF3LuZF4rgXXpcxF2GLUou4RMWkXFaTY7MNyb2xF6vVFc8E6Ce",
  "key13": "66GKGg9h7xJWSPrmsaPUH1c2YHwePxxjqfrZE9qJuWGoyKAvo9WhE4CU1hmbZmQzJRWEeQ7rQ3FJDqTYLKWac7Uj",
  "key14": "2CGvPY73trQ8h8nrEbqDwea7SDCnSAB6eaj7fkMENEfFcqB6N7tVWDjAz3f2JSigCpvpU3Q25MHQGJzMvWgDvp5w",
  "key15": "4xLfDCj42Y4892JZKRwFzsWQLpwUupSMZFsVWmBh88vG2tx9Gqd37QBCtCProAsjDXCR2gy5R1DtW7w5WMUXFPC2",
  "key16": "5SCBK36SEZfrzjKn8RtfSQLiz8xk2aHmvbeP53zK2n9GDxUMNQFZg2YZTvVw4W22nPR6XL3XJ9nJxGafDP2kCCYu",
  "key17": "5oWSfPRn8pdvU5rXg1ft1v4wtx8pkoJ9X9TGNwX5GYctVrq36fjR7cF2nzdevXdTJ6zo8aoz2Z5P2FZVnVqizpZi",
  "key18": "4xpvMFL5gC4EYRHXQfTeLKmL6iYyVyZ3V9pE4ichtojTtP4izsuvwt3wdyMCqZgYR83Z5zKtUf4NDodfSZfjUgMm",
  "key19": "3W7GpLifm7ECDMCBdPQdzjSmmh911P9ovKcDEas1PAok6zLwE2rNWVW5QZYA9jwsZ4KqWksDoPbjHAcHQkkzjsHN",
  "key20": "4wYtHBfLFU4sZLHnKMR64GqJVHUWfjjxupXbDEKoGnqeaTeBJH1TVABi32rKodggPTQ46fGLNwYPK2wjgABjsxW5",
  "key21": "2Nzx1axhT7KRZboHvGKKyxyxpz5ndgP7WA3f8KBQJ5QgwMQx9HETjXtD1shdx8eiajsgt1j9rrYxGgiCEZhqcDAy",
  "key22": "2HPLUf4yyV5YXY6BG3JBNtvXV4tGwCVXER5r38LySUPyYF8WYzqiLANVpatHCSdkjH8MWYCgvgUz6f8KTpGpqvb6",
  "key23": "2v6Fkuh4qrxT5Po5nBHFacsSTzZ8H78qa98XvM77MyzJqNgERr9myGp2k3UEzab2oKzMQEiKs6gpMSBqTMHa5UyF",
  "key24": "4dxXTLAk8pLXFjsm4VbnJe3rTqc9r5pqepyLZq3NCnVXw4afgAq6TwMYT1SA3nUPGJ99aNcMCKvz28LLXFW9fzJP",
  "key25": "Em9eXEHdHhDC25D2BqU8ebbDM9RAha64KFbjNhEMJdPbYKFsn2nGymzqjZaaNbYqnLMb38FncRNzbxhXzKsJpdB",
  "key26": "2NGJR8pyiy28k5Sviv8RakkjsyKGJ2oKn7Smm7SALFboyizViuoZxArAF7BzQyUEArPqucDtfrTCnywNAWqPzE5f",
  "key27": "4AdaQmtNwPxUbiooEYg137e9RLHpjoybxLBJYBbDqhVremQsePco3Dg36e2QPNaFH2NM9JzkNqrgxn9QPRv6cc7w"
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
