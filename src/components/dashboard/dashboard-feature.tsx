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
    "5HC47enQVJCWuYbgGoaXHzb727oXpDe2xkjFa4soEEc4yZxiwHRbaXbTGTHJGsEYB5nihX4z1k7SZdDxLpnfqEoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qHVnp2BX3vPVSPX9nHnoRoqkzAa3W4fKNKuDQF2uihQf2o9MWRmduN9Ki1FjZHCCeha4kpeKuYN85jn741cTopS",
  "key1": "2Y7Y25vofk38C8PVBLpJ9xadUu2ksVyUf6s7AcWSbRg5okj8bhAygpQwx5j7SLuFQamFqDfdx4JBLCKUPiGGvySb",
  "key2": "3f1fBvmxfTcTrrfzXgWMa1GKLCs2YtKZcE9NFRXuQ1dCCvpEgrYz6PcYBUZMuRD2vvqEX6HFCFW5jcRb4i2FaKWi",
  "key3": "3dPZLE575986tPykYmo4TfXfK8hZqBMUt6JtFKngpjjNXh4DhDbKEc9ZHqUWYrWbKPi47ETzZP5JMEwmBrXgy8e6",
  "key4": "5NktRh1H3iLn3hx1XQXoNpVVV4M8Db9Lqmy3Dv5SxFfhNa9D3wXqCx1jmD3PzAEDjUqG1pDQxxuSp3AsWTAsyJWb",
  "key5": "3w6D7zrswq3Udaf2FMgKiPa9XvFxQhVRacypeJnjJSukgiH5Ds6v2JoTg1SSRbHSSt6ANnT4Y2S2jTdVrhXvK7sJ",
  "key6": "2eWNXp2n35ouh8HEwEsYk1bMatJZr1Y62FT71fWx5Ug8bBbDkgFnCB6MvhS8dRf4vE2aXrGgyYoXneyQH2vTriXi",
  "key7": "2yJey4tYCRdq5WAPgthw3JS6bkiVib3V386haD7RzMTBZKHvsi83ePagU6sF6GWrhbX6d6PxzeEwfj3xgVhX7Zxj",
  "key8": "5bwdPbY1oJAfZnydSXomJZZ4aGsnDpHWSLWAdSQctKQL5JyjZNWZwZQPhQJ7hukKFx9ieim1gDcm7e5FTgz9uRC1",
  "key9": "LGngLrsrPdzeVE9jKi2CeDjDAmGi6ZiRN5r8pzXqJqXbxK9AmoGwXq8tsH7XcBoKhE73EM3MzBRwLmRV3ibBML3",
  "key10": "2fiCEAqjFtiu2h34nn5zFXLGYzP2fKdskx87oghXEu9C4YN4ZRWDV91688eUHXxeLHp5Fc2qgRAgyy9ZdiH2L468",
  "key11": "3sQgY1uM8C8A6HEVy9i5njYHQzhBWuEqZ78zdqJewWLJWEzJ4Lv5hHBKLhbKBvBqrRFB1TagPh9nVvcLyVAit16D",
  "key12": "5RPaUosJrzifNTZ2FmB4ajLih89LxQZH8ENkngMaxNEz9gHbJqGJafaXLGQ1s6MK1xsdJViqnrGch21TgdkU2Hdx",
  "key13": "4ti6dk2KEW3BVbwpLtkFdTiiBPtnWeyPTFndh8pbNx8f31cujGHYYqCoqAuDD5jEMEpRwq5QBPEtpFzf7LT1FUUW",
  "key14": "5yY4Xk4wnQZYVjNEUa3i8Gh9HcAz8FpRzY8nNztNWcghmx2eBA5jqF8vrmNr9sV6NnFseY5mV6BvTpaQ7pfE41hT",
  "key15": "5RnuE26keXo3zU9NtCTeLrtTDsD4TUeZfCFqsdBEprUnQGSgX3aeMwXGn1nRTUNBhM4pfkB1PY9itt8S41ukW8Wx",
  "key16": "4SgV1798JLVqDdkcxFsG6fhtENipwjaazTJRSwB9GSieKYptfPnYjYNat3wD7FWcgT3TBXGex2zw5hGZ2ZXLprD4",
  "key17": "BcWME5zFWzAeNd8zzkXmDWXyxRQwmYdiwAywXCQWGt1X2JyvqjToUwTJ4gZbaouD3AqW8nuhfQoqniVjzxLyU2K",
  "key18": "5LUqhYuXSmyaWp9YhFbPnhfYFaZk4M3fQFiT7xvg8wCsCW9uoU93gDLQKv3gBYiSdY74vb2BsA6ov7MAJooVJCYk",
  "key19": "5Z5y1JRV9STDt1ayjPdsb7vrvG8NG2mu2UTBzd26qPvQD9mvACrLn5Z6Pc6bbqnKH8ouwswYY7bbjffxCXSaFkEV",
  "key20": "3Se4VWK78yLoUxRL6YALhHpE5JLp33wrmaJedQX9ZynzyXYUQPpBdSp6tuPs3G9F6TYuKseyQgHbqteCRYVaBRnk",
  "key21": "wb6fTaKnxXQHHio8kX5cPQ1yaPmRMW73CHHKAp8reejY62168JVkd1Hbpc8UVur4g4jnqGeM12GGWX8syMLSWZU",
  "key22": "2GnNbmgji1jj7d7TebVpfDaCBcxSN2KNjMjPqU3bztpB6ZAXTPm5Tky3HkhYftShLB9mtYjTnTyeKZpQ7NKKhx6i",
  "key23": "xfo7qopZvkNguZjSb2k56DmkaVuUDhy9zjjFKmEiPXwu8RPDavWgc4DXEHcPKVj3zi7XRjESyqaZX1PMmYzNT2a",
  "key24": "3XGBgUpS5HaAN9oafw5kZhZqZEgwimSMzdWcyW5jybzFjiSywmaMxrMwDWFqfjWcWQdcZdqWv6upe97cZrtofzZB",
  "key25": "2YxmWKAUbVVpHXTNwQ5wKwHPgPeEL3nPepZcWcpJQoMqFmbjB9hG2SSStEJ9HEK55h9q9rqGYWTnnfz8Mgiujknn",
  "key26": "UxupGwhu5S2oK1rwN7w35Q884zSKsVPQv81MzzRHpjiqXSPyiMaPKFCaY1AjkGq98yhpup2n2Y8xDFmMvKjQV2D",
  "key27": "4cCd3aQSVnGubnCLFkWCcdRpukWdox9HK7uv2FTDPYo1t9YmqmeSr4k8kW5gJipCzg3tB7X3HCTQfTGwmPpMJ5Lm"
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
