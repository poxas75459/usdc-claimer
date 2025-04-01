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
    "3K1RPv4eSJJT8a6CGDpSc3kEXfPaas5WAc7f9jsKjaSdeYcxiq4J3JEkVG8DUf27RRhNT75UJyTmTDmsRTUoWm3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VVwBWwKgTYqTaWZpbCJqa1yUxYUTvS2rHsNGN2VN2biveadL8nj9Eqa7aLdguJpu9vrzaAWvfWG56aiTjgrLHT6",
  "key1": "3T7UV5SuTSiZzeXkCf3WWZsMUnT435eYwgKdABUYU1FrGp142s4qtztRU4722HjnsKMWDPmYHMjSkWVEwVKEFQi3",
  "key2": "2ey87k4e3xH6ETPHQsUZ387GNUZFJyj4KNDV29wRYzrhKdzXijGuh8ar1bNKX48toZp2CxS4rzrais8LxgUaUm5C",
  "key3": "EMV7vax2JJ95PXpo4ZGknxaQbQs6APpdJ3smZxNT2TkFi5sStXUoV2xRgnkZk6NjzAf36rziWe7w3fuyLxteJUd",
  "key4": "2369qTep86G1VnZGqATdDxfHkPRQGtP7yHhU7qChWeqWSdinpmf1KtTVGFebQAuvdfMAf5Mi7eXPwWwUc7tYXadf",
  "key5": "2fhaV4qnGJuTZghqjoJPF7cya6vchLm692zEGzNaeQYVoN4xgqKnDi82aH5PzRHSc61UjLBcEYqadyiVKXbUst6f",
  "key6": "2umQmpcaKqYVM61Vt8vSRVy7446US58RkKyMJYskiX8B38abeNZGF1HiXQwETSHbSYKYLbbxL3eHCE9NJc9zoDHx",
  "key7": "4YmU9DvRNHs8EAdyjDLf1YzeLT2gQMsEPqbcuFRbvQsbznu4RqQMdgbzdPuLyDNveAQqLBSmu5oWE5mb9WvG3V97",
  "key8": "4bkM64K8urYyWWCp89vpDPcJ4ByquZmvSWnnMmmH4SDj1PZWfgfHQpbD1rd2htASHeeoFsmhFhvY2GFvTzUBeFgm",
  "key9": "2gwfrU2Qh1PWFeC2TnZ1mLvhp8429E99X5wHK57c1w6GcEWjw9GePM8w5Q5GufvB8K8DQtjiUZZZFAG5AdfuVg6x",
  "key10": "2brCPgX5dJvSSMApxEMiorZ9Mzhr9xiAappfpAt8jxkSLQmPtje37yQGMpXgmNnzb94Rjx2c4GfdLGzoFB96bt1A",
  "key11": "4wxHDA7na4tHBwfFcKrzAJZamyS3ZgNyuUFG6W9FLbfuwp34om1dESFrt8z7QspxexAWXKThpVvVwZDoQnU8xgSe",
  "key12": "Xpqg39pSThTmkACBkNMhsXZD7z96u3N8Tx4PBVDUJr9Kh8ASqB3Cu9n4AaAUSxUJxGRG1gAoEzNFWaqvxqcqE5w",
  "key13": "4AFZxz5SrkJPaChyiXxdkgDT9QTkFjCDAtXnDC9G6VL8ocrLz3CQLCQrdNLRJ5xVnwEtwD196vDCwebmboDwg3ut",
  "key14": "2ixfBJ5zBgSBwMCEhJHYfGRwZw3sPE7cSKaWpZCro6BzHUKYwqpa1ss3Qo7ka5JXkfaQ5VQXHFPMDW49YXuQrtUH",
  "key15": "34SEiUES4M4fRpv9Wp9qPcPfz6nxFpsudarF4QmPsaLoNVPPbcz8P65EFF2oQT3ef1dBNWLATN8Z3GG9f9y8g1KT",
  "key16": "GFYnTWmNzNELqkiZhev16WppzNDQjE95BrKsisAzndhxV6wJizxzKDZxVUJGJSfeyF6xaReTR1HpuPZzhke8g7Y",
  "key17": "493RS4zKicJDA3qkVcpEBt3j8hXUw6obwDAUKqfXc1LZAVkrnBwd11yBvhH3vdkJWimKXTobekgDxLaiRPPqSmjw",
  "key18": "2HGot5EvbQLk8B9iAtcRwpQwWUZNPUNELJQfMAHzi2dRRX5a9ahBE7MZKd95aYn6ysbaSiFLNV7xzAqr8CPencbU",
  "key19": "5oBHg1hbsaeDfY9VNrVszzki6r1KDowhfGFMoAuDBusEbCsNNYByAs8Z9WTBPP7vs2ku6PB6rj2tJ6g3UsBe7f7D",
  "key20": "3oXn5pvAwMJPUkKygaYkLhaib6ciZBPFsTY3qjYQSSTu5z6iYKZ5cBR3ceZbnrttYCVTRUaYg43WEBXd4qhrSZXi",
  "key21": "2y4HrGS1G6RGAVrumNHTMW3iHUi78HSummEDCNpopcJrAh5J1V8RXGJA9D3okA72nn21XdG8kU6afj4NKqhx77fR",
  "key22": "3cgUhSq6vpxA2YpgcnVot51bwnQuxeZX1idbGVQWB3ojdQv5e8c6ksN6zLbUTmC5L8uFkarSeExXX2Jg2es3KWJV",
  "key23": "TbWvpnN7W2S9jcUoxYmX3UzFcSeH494UqEypnWwwr4Ywa6bQrxYKMLKi2RBY7kkHBec7xKv6x3yAUDzWyPxDJ4o",
  "key24": "3XCeVLhHKQxAEtnHxrkUHayggvrExU8F2Q46GwZS9xmrhVoPwNxJi2W1ns8fJzpYryJY7P988TtAu4scHFCqhjzm",
  "key25": "5uo5CTirKqBxv5V2YcC6oxVV7cVbPyCG7Q4c19zDuwGMwkDGntYCx8f6XSquNupd3X6APnY2su1iQf1CHvtjabzz",
  "key26": "4wgk3e7ifAG9atBjBM1VY5YwT3BGKGHwvwfd4NZCj6czKWieAeM8tqMQ3947aRMv1h5A1BuDrfPF4DjRnqGoHm7w",
  "key27": "5acmB3P8yddGEecXiDPxHbx9oo2nG3WvCSNjYfCvQ2yic6ZABNRkSFZuUKJrwmTU1iq4DMofVrCfKasUTVaSrZCN",
  "key28": "24ust5Jm5xYJfyrWyckQKtbgrpteSwPsMosmvGuXc39uZJqZ9eAVVqSDDAoKmQLxC2Y3jySMA6LjFSbFRiyvLkQs",
  "key29": "2RatHLwZx9YxYHYoZsA2tJzDtd6Pib3yqFtZqpEaDqXHQnFv5AwWZkNScWUtHavHztBaigu9agzoPU3LUY4zwEzH",
  "key30": "3KsFDsSvF7rYNUrY5aVfuusf96RCsoUcRohqDhLKQogBGtmbW9931htAfLXGuQZ9m2RUPfGhQBvFHegXyzFRiEUh",
  "key31": "Hz98bE6to16TSNDJxwbSi778pZLiBJzzfNW95ey18x5zRUkgsbaWopcV1hTUGK66KM1kFM7ojYdsVq74k4zX3B1",
  "key32": "4vsTSAhmLKp5PHFCzTNpJZbWwPa3Y89HMSz2Sw8SJZXHFxRd8tCHNWPDaP5a234QMFbGggsLnzZoBDmpxD6rbuut",
  "key33": "jrcjxcUBcjhTMzK9DTxSsYSKCZDEWN9ZVcWHjrWEv4TkciCfErJWJhviJVssDDTVwnePubSuhg9dsJQfPx6iqSn",
  "key34": "5j1uczuGmE4mBzKZGWFE7DwgPZ7DAaDoYhS2BMFxntZXygQkcxZnqfaqEfnzkMcj186YZd4Wcuj8nMvmzqPt52tP",
  "key35": "v9TCeCASAdaa1uWQM252p3ZouHVYLiFqEEVhr3bc39YzfwSvTVGdtPBAaSHeZwqPpPw8mZ27AB1z3a89BZ2izr1",
  "key36": "2WrMoFKJ5QHCpah9cDkZWeg6JUPe3jD6m7wrrzNVbumeYvwxne6eZmWFHPHkNfJh1Es4eoj1Hurv5jDN8frCqnb3",
  "key37": "5VP8FHggqXAv1aUhbsynzaMRumGc1n7Xa4VRCq7BDhca9KD9MfUZsSfWhT64q1QFDperra6bqyi5JWrFe5mtU4Kw",
  "key38": "2Yk9Be5TXqoFBnxRpsyUvR5dwYjq5uXX8CcDh3tTLxVRRJAqrDKtbJgnyiu6cW3CXwfE1DmnrxsvB3D7NpiGMkZQ",
  "key39": "yRuyvEGKoynUoRohCvQHckMGi8bLxLwM6ePc2YEAzJoCoSS57Z2MQzxmV6Hwz1cGLupzr2pp1JNhESsqrbMbGtz",
  "key40": "4zNZ4ZBbrvnR9NQvG2bxR1AYNYeQ2K3Cz6kMbW998wcizgt6JBpvAtt7GENPZCCcioCCU7VWrpCQEYsGRrUNht3K",
  "key41": "4ALyyX9NfTNRQXH5DNPWMpYumsuEr1J7dkQLoWsiCnxNTBADRMNjXFaGyW2PX5B9ybB4BKV6X4TaFiKYmUvtDr3n"
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
