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
    "3eaYYPMCWRcMWU5CBaGpUsbT3mkokX5uTkpsoZAMFdQz8NLV7yWtdEiiXtgBBxtkeekwfaQuTaXBpE6V9z9WXyiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C8nDW9uxr77ZzhQFSuFXsQKenKZJbmj6ioYq5deqJHperYTKGG5A91cp3xAPF7qQPXNj8vqcFK7nqETFwz2YbwQ",
  "key1": "4tcvfvpNSCHdarZvhZHAcVvo1Xfpvb95PGbQo3SzxE2D6aMTWuc9E5k773yRvtHnvgkghFVwLpF4gZcXLDNHXmqQ",
  "key2": "4oQdCc1mskWd6r3vN3CcA1vaTYhLTxuJmhnMXcFkVCJWjQACTGtB9oGqn3oPiM75Nmva5TBY4KJrr4no1YsfLnhP",
  "key3": "5NR2jq5BsJCetNBi9Dbg2mknLEiFiShwFJPRuuSAMjSCY2SvZvmuS8vJPvLGaUnC11ww7SggqJXskfCd6DXD31MG",
  "key4": "fYMjEBtB7y4ZyeZaWLuj9w8cwgPE9VWmYB7evatZFKEhoU7g8Fwr4qypfXKQKkVRoaxTw7iMoTT5bLtDA8oQ5gw",
  "key5": "K7TJ6YM53w35vB4ZBAXwGxRbBoVVcDhnxTLmBmjzFYfzPjtkqXG1jzehSmaUPQcJe61NPnETZQueprZBbmFr8T4",
  "key6": "3zBdyu3e5s32r2XSWFqsVbLZBQgKKDiuMPYad6711BD7KgWB6Ja2X2nGcD3QUTnedZPmRdxwCna1v8oxJNvczcBd",
  "key7": "2633CeXmg8DXy9L68U79QADFvbd3dRLPTb4P1kvjgvy89xt8fMDUaNkc6VKwjS7CpBc7DPx9en6a9d33rzo4ByLL",
  "key8": "gPWJwzYPem1qGRdndHeU5wDyZyWdqX8HnKiPowndxVjP5tCeavVphx4a1BMyqPJm3dqcCqUNuTarBYhfe32tWHY",
  "key9": "3WvVXyAFT6T4TjuRsxYXhvUg2Jq4jEu3yBJmKasEzT2C5dGxsZNEHvRoKTYrQpVCLDVE2iguRh2nDwKW3uBQHPJu",
  "key10": "3HYT5rsDNHpn7q81ArPTYnzoXJeSeqZiWbYSLaY4fa5GRNtPwcuhgZyMMTDtoZbCJvkZVZ86s94iZTnqReMibrFF",
  "key11": "M1K3GZqAiw2wbRySFb8wLQ5H8A27Bq8HfNvGSvxjfu5vdZ1B3z1xMXCdZyofKzth5uqg1upBKxZLavzdc4EJHgz",
  "key12": "2LQNvLnJXqEGH2sY2fCi5nrKzqarmqiT2PQk2yyw8w5XHX8ePZdxytv8wzrP11rGrxSE1uyH1y3U5ro2q4s93Q6Y",
  "key13": "4AyibT5MiP3sMZKsKTRZH4ASp1oAtzkQtKGghmrDsL71YGfRnUgpnxqytu4NSjVx3PVbYWoQkG2Zpcz5FtYUVYK2",
  "key14": "49gciQgXLnfTFe6MUP94u8Q6X4MmCxwrg3oLxBSTmn1gnnrGSXBofBRzn2sgo5Nor6arPHLHsh9rL6VjXB1SHv7u",
  "key15": "3wS9gquff4G7ec6MJm2cScXcuQoKWW1QdPpmbFACkpuuAFfFdG51DkM7TspvNfnT6hLGd1RLsAGPJadCmEWCKjrF",
  "key16": "ZvysDog2p7wb5Mby2cx4sNVukTLBRaMxshDopD3ZNZpb3rg27bVwb3T6cDVmY1ncc2DGrYTKpYhHt2y97k35j8N",
  "key17": "5YFBTLZHnDMJEHCQUQqFi3MqDGPrVkhStTpLq8g3bcPmLBaSZnjbHa4uU3dSX1x7o1eyhAuUQzNku66ezfLSjiTq",
  "key18": "2JQjVynf56SpSmevv2wwEC65iBSs7xd2yJCTrLnutYEAtUkcdXRk1rD8WKoweEsHvRGZYkoQdeModDEZyKurdZXd",
  "key19": "4PKxwBQ7eNcDa8K6hyGLhwnoWpYVmqCZAVaXuEC2JvXUKavvtf9MpMtPGQFT5bpLuLuTYHQ5in4n8qedVZCNcKrb",
  "key20": "2NrFEzsJae2MVkuQ2u6FQFYYhYwLe774WYtBkHSG4VtQrg3nbBuWwJRLUzUJUvua2nMbQLmynY92xgVVohbWqZX9",
  "key21": "62keaebeGnwVk5ssTFux2iJAFkxceiXrSHi3MNmxSvo6PvTbhFswTdUMjG6Hkt25j4b5777vzqMqaNSru1fAkbPT",
  "key22": "3TrLwxe24xLu2vHzs1uKBSRWHs8ymhaWmAsvBwZqk9RkhyF1uMBNdf44czyKPBuViBdYkxeog6a7oxATBLCDDKoU",
  "key23": "3SzGpBY9ebZzgDy54bDHCdRDW7fWvSfGCcBDGyqgCVPX9w4NP2KE4nF4ksa5KhKLQJG5cvu9WKx8u8GxDumvgnr8",
  "key24": "4x3LQYX2B8e2rJL7s4bBX5xLu6LKT38RoxUdRfoZejWsbuS7V7ujKbMJt1kNZ4t7h8Yz68LaMZfedb1gb68igEMw",
  "key25": "e19KwnUoF2hMuxYQCY9GotS6Xs5yo7XWg6YbbDh3qepo2qUvw5bvsnR5saZwrUHqbZVkPKXfvjLFNrtPeUoY4fP",
  "key26": "5ceWeZEvMHypwYqBrbrBaMQGMctQXfzJpHLvZ7c6oyyHdQGTjh1ZcfvRypxMe1nPbfKm3akKWphg4oKVCab78bdm",
  "key27": "4sey5SvmPVdqfEqbfkZQmTKN6q9rbhPBNbQ9tnoeHq6FFFGw6QmuGkCpsn4UjGB5nTsXP2yEgcCBfWoyMWzirC5M",
  "key28": "2CASaQ91711qL8KvLHV56M3rjPqyPrDyN4WJmbeG1CNKfYVacAtFXofWkHa8Vw12rMmGv2karC4na6Fp3EBQ4qAE",
  "key29": "376eXntxQqR6sUfCSan2fRc11Dz677VT4YHamjfEgwX9FxknVErpwuZG8NDVeiTtq3yGuQcXQRJA7oLV3LznvqZN",
  "key30": "4vPiUs6wtupuhqQkJ6eTEhh3YG5DAG33RGi3cNFZbwJzFQZvKCTgLPHhBVhZnJNs9J7hsEdT3sAdr9yo3Pzo1Mbd",
  "key31": "2t3PkfHxc1tFzur2nagsHRPLWAgt5AxfF7CTsaWEtXGfKBCrXVkxtCVGuE8t8iPtvRGWKt3rrSMvXENvWg6zSS1P",
  "key32": "2yjYYBTQjxyBmQsqS233WyFHEFt5F6jqJrzv5NmHk57aZtE42vSm9yVdoSK1gFTqLsyuwwDSMbr5eCeWqwosyL9Z",
  "key33": "2we5zgvDZxzwTK45yeLZKasykJqsvfHGb1VguCdk6T9XkFs1BZ4apCNsSfVHCAodwYYL55wRdX1dLCP58DoTNoDd",
  "key34": "4ZRPV3HYMXwkuuoDNDEmcm6W99kFEJUCanJBnXESW1u4EsHLP4dUfBuBm3BAxsttbzRJW3Scq24x8nnpG5C2ZL7m",
  "key35": "5BLqznQTvrHQ5XKBZ9RRXhCX1WVke259KrHzjvffJ6wtQbPYCVz6ncB6esirxhPm4FfDobbyJ9cHeoGsSe7yreNc",
  "key36": "4HP6G8vb9bEuz2isqu8JwPgKZodTcmyurwmZAEWNqPwPwy9C66R7M5YbxN7iWjKLvcm1fnbZjxusZ6NJM2fZBkDh",
  "key37": "4vJBQcBmekmkhx6NTJEttSoFY7ny4wSug9HSdQXTcWvM71HoZKxeg6aXerkYK1TUcKENdN3d3f1JMGQxFD5oEErz",
  "key38": "2kRnzpcjpiefhgrk8v2VZqAxe4QAY4JqwcBnKBaV1mF5kxvxmrP5NuevZ3cB7QkFhhgueMvmUqZUrqfEBG1ey8e9",
  "key39": "dm85g2nJd9rCMJJx5iM1dhm4RQ5VUjzMQ7uDgEBTbSrHtg7Q838zdsBMirabL41DdH7qfTL9V4XWHVRapSWYKDq",
  "key40": "2HS9aLHk9BDxXuFiPdnxkpE4p3Ug2UFQKyABaZ4U3E2iTQBkmFnRKsiM8iu3UwDN43PwsJYr6E1hH6ZD4LWai8xG",
  "key41": "2ChFzTQV6KjsmXLL21oJhdmQiCWWBt19uujcRhRkPHGUSxFHVKq4wT9igTAzYPaEVo8qteqKFgKoQgdjr1qbELnU",
  "key42": "2Cfnx4sbo9XNmEg692he3UeK5ix2VLHUN1uXDTCEriQPNK8sWpjkMpQ42Nvc4xgssBnKpoVMJSZRM1coZYgAPPUm",
  "key43": "6VRcZYnawiCMgQCs3c7P8jr7YShCrXueUxBdNxzSGXGhbfesTqcQzXE8bEmS6kXGo3Y8Gs4PuQ18DWEZHg5G5Ym",
  "key44": "2yJn5CesC52NoCcM9tj6sUBuDF9EUWikKFs4YBMXKznPHEzZTsKH9ZAR9tDNz4BvEqccjuLxa2WV6SEMdt8HaeNc",
  "key45": "WF1EBvAemT269NLi9Umv8894rVWBSgTNjS8J4AJNRB3JNtFuic4u2pvpeE8xx1QLh25Yr99jeGcMc1maYEu4Fee",
  "key46": "CbN2xawAXBhHuySewdc3GaZVRdwhQKNgyEMAkRZU2NU7GbKYos2Cjok7NpWnfncQZWcC41WdvBpgUZnC9BJjTHr"
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
