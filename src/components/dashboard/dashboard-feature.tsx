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
    "UXLhQcU6K72FXmqs6dGKxsDMupvH9Rmcymb5UyovQfndTjCViZunP1kqGmWEDBLrKHtG5WZBW6sTKoMfUmGyPEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mwkKStLQQ2zmrnwYDbjuLKLMA5Phbxmu7pG5hwVCSyXCPgW9nT26HHxiEZBZq57QF2DgsKNsfFgjQACamaRQ6DV",
  "key1": "UfESbh7xKfMGxXJTRpMWqBFLWuyt3X5UYvWT427TbqMuTHaSSXDMr3cZeaNzNFN4tRCh9NZgCywUGggZLk1hsdn",
  "key2": "3o3RgsSNFFbEsJ4a7gqYF6xr3ChVGSE4Ke8L4rzh4apZpuoS96RDu3CWHwoaHbhugKAwH3NB8UQjgEUqKxjAhNve",
  "key3": "CkJBtJMXgXNXD8caKZDcnK7Y6LbpLennQvRDySSe8ou6EgH2wtmLPNqxJeRCeKKUUCgJuUBfzC1AY77U21HdbxF",
  "key4": "5NwZUt2YNrcEvxQt3Yf2WKsYusTvnRcfBQQpj1m7qpeDEqsyE1MTkazjHyUnrfeXkNMVomR8fqe4TeZAicx1ZuU1",
  "key5": "3nzxep3CVpriJsk8Jviebc1jJjDSRk6iioHL5vLEdSPLnY5hDN5Tn3iDWp5nxn1TsWDFsxzfc7dQTgxCm9jGeSo1",
  "key6": "249r67VWrRAygrtdacXS8YkFQ5CA7EU2rHkTQU6rK7Y5oJWqw8GeK9XJDFKBPX1AuK7bebSL2k3W7PDTGXryaZdD",
  "key7": "2drthQbWUpJg6DXbpxo3HyHcsmuZzpfb3SmfsF1Q2UuKoeqbdhdLhVZBqSvDimiwQdmyruVvnMSySyHu3YnL3fWP",
  "key8": "1df95gVZ2zjzdfDuePbVFGaSWurzUauK2pqspgz2AsitkA4YnYF9C6CyPTC1E8pqTW3pArfwFM6YMtKTfNYfVWo",
  "key9": "5aAG1fCivkbs9ACE9pkcLv5jUBGWdiDwGKDUY7TiYbXdvzsDzGd3BdXGRk9PhzHB5vsW4z37zTKpfuHKyegmoC5U",
  "key10": "4DA8QtL8QFYzhVXDsCneuYGK65Yi8H9zurHKfKCsaujcow4AmcgfCaGFnJjHgP54ihP2TgkbYmN3es13JTG4qS5Z",
  "key11": "4MvcC5ZNJveANeYXZ7LL2tC7RS9tNorRZiJrCxHb5TeM89A8h4H1oi3kNUMsdtZawwG3qk45KnSTVvBXPfDHZPKu",
  "key12": "4LWNse79jwdVH28dN9c66gxqKAhRAdb8QSY5pskdmzQH9unRY7QKiPdgTRKEYMZcFTqpFEVBB6ovxj7gK4XfNPt9",
  "key13": "3s2m1XVUzcFW7bMACE9hFHmYmXkY81truBEWbApRRHvVCW5rVWazKgt8f23afLdWKVtbVqHJpWZ9nVzGkeAwnghA",
  "key14": "2bgGyN57jMZRcN833Bo2FmbQLGLtKvM6Ts6fgh11odB2PgpDGf3mHtYfrCUuqA169oj1QkC6RfRrxuccBCUhcv38",
  "key15": "bsavAfMQc81RDtovJm9meWAmXTemJsm39k7wAXxiHE9eoxwDbFgdFqEaVj6dcrouMNL9s1DeZwEeHWEjRVuVW1V",
  "key16": "2kvESLwy5NeNExMkRZVw7gMdhXC6VXpjobRAFumL3trLEt7eYWyACsFCofsFLczMysqG46wXjfWBWFbadU2yeYmo",
  "key17": "64k193s3uqNiePfNFZco9fxqG1akSMCg58V53A6J6jnNLQFhbSKeQvEstcaUC5oGrmUGnJtjfbD7dcMCY3a1tafS",
  "key18": "EXrMDexyoPoGvnkK5cNFg1JShdbjwuaA8ai8er4hVQKcp2eCn38gwmqu9TfhqyPw4FvD5MQWuoGcDd8UDp8QHQd",
  "key19": "Cq3Nr2ESj32MB6gZZSE6h4TQ6d7a5k32X9yoJuyEZy7GX4N7v2386dYZACYSF17vsF7Q2iPvAq781ziAGfCREGQ",
  "key20": "2dgXrXPiPX9Jaq8SiDsZ1qbbjVSCfwawRRakTTV9wQbRXVPcgBhYUQqP8XhxgVbNxWimFjvGkQvt4hwjFxB1hhrR",
  "key21": "4pG74BG8mNBD9Cx7oRWR9ZFPv8TW53wCkbdQ5TC1CBzEFwQ8r7DsZfLR7pVyXf1sMYjGr5LRAUzeK1nrHrHLKDak",
  "key22": "5v1sysCHu5aMPfwPuUgNKB2yoNF2bLWZMe9jAPK6h9JzjXnwKaRJ3Jj7twrCw6SqUSNhyBzJeqjURk9URLTECGSt",
  "key23": "5T831Mmue3yYRnfaxcuBPwpcnMvN9z5z43qaYQ83taKoR3vkLE7kq92yDEZqPFfqRXvHoFme1BDNhag8BVZzmvbm",
  "key24": "3wWHUYZ1BFsuAy83EEM2LFbVkc9VHRMmmSe3kPELwrDUEyGb3cmjjtHaVNZhewxeYabSwAFsfx2mT2piph4Vh7kc",
  "key25": "37QbwTbrUEi7GvaUWdHx5DxjE1W7VHqqhK8WbXsHjF8YJbXB2mzyBE49sRrvesXZWbmG9vD31aUokkmp6xY8njdz",
  "key26": "2EVkoYdmq1K6bNjsXumEmzCjyaACtdxSXkVmJ3Uiud29RWHSvNgzioa8aUY74nxtNeQ96jK1b4jHJoNKPyX78q8W",
  "key27": "H94K1FhKPrRgS8HD8YqgjK5QCmm8JoqmYAN9ThJ8vFGojoupZuhRijsf8ivo1LetMy3jYQcnkrVh72BtbiFwFyi"
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
