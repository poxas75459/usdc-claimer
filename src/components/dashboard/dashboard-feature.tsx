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
    "4mTS1gj6j2TZr38BsRSHZKQkqfhGv2mBcfnJ4bRbR4pF8pZRXa5tkvnY2xxFp6doaLrJ3mEkwRVMZ8ZogVtrK5kg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qv8XXUWg1QrMBgvDkVWGxvCPcpcR9op4LbAu6YmdcMc41dMcthxqJXeeg9hPnKYnz1DPbxUAG7KTYbDGNNqL89t",
  "key1": "2Zim926AhpQDQXBbC2EQgtphivYVDJDi3rjH6mNTbeP3gqRVk8WQFU7Bbt5yQj4Hu2ZX3ZKqsARGX4oyvGfVyEpM",
  "key2": "2vgBup9gvAXWEsoJJYRHQTjsAu6D6uiGWsG3B2cVcw6pUM6su9i2x9CoYhnBvGKcSCeFWvfTyNstieDY4Rh78kkt",
  "key3": "2hjuTHDtS9KyJNe1kUE6QZHTsyso7D2bX2iWZp9kPm3KKpRcBoNMkG9mtegGrSXiVfUVzPgeDuwt3kzFgY9nEC1m",
  "key4": "3kPT2DLqKVYJch3BPYw8o1jZivViFHVj47p5x49WY8s9iEqZojbce5yTtqCfuzBYcGFXoSGJkXBygS8AuzP6LrV7",
  "key5": "Q5s4dhDgxHhEENiFui65NZwXg9rXmXbfuMPDAbEzeGxTjB8mNW1DjmWQ1UJgFreVmy7eGDHsiMtUWcSSLzxYJtB",
  "key6": "5NnTi8SHC4W6fMFghMEKzZLj2LKqPMFqmppBwDeUfKor5LPBaWk9nxU7J4qKfTKNFG2C8a9SPwekEm5o6vfD1Akx",
  "key7": "54XaNb7mnffYHvva2rzeWB6QB3ZgbvAjSjRv1kbhw7AJXUwjwnc2JWhCuEVKGWACnoStFzoDMKSVMin34TumGUda",
  "key8": "5d9TD4pHqbFVtYn5ndwRz8pDgvWjGAT26rnbscGuonLHHiuduGqvjNmajTGpm1LimKMPdmat2ZvsxXQSZLqFY8sU",
  "key9": "2XgX53Vp7s7xqN3NwKQuEqNY3aGSGGepKTxscSJqA1XbUQt3KvuYtqZpKa89mgjXbcqeuP1utcWUpSd9me5QQDeY",
  "key10": "4VaXRuAeFqKyXdgB5vSFBmfGNHWHHnTiYf9QuhNXfz7b15FQsMY2FMLVJrQTGeK5uHzeqLzdkwhHzxrKZhqYtFNA",
  "key11": "4jEUtebNZn1XGTeAE5HSLFmNddioZKaJ1EY6Apbijq4fmHuRVRkJDfsatgFnXtvDANCco3WUdpk71LmvfQdzVfdC",
  "key12": "3idtpF7HQZ1mwqeNHmijU77grc1ZbRgxs1c6i4ux1uKQ4fhhpkmJg4BPqJ1ZTce7X9h4CXKvNPCLCmHeZPdeXPDz",
  "key13": "3Y8UPZaTDscQGP6RG1SGUA9nfqVHQPpTLLNQ6GNKLSY5PBKQX2BuebnSHK6EpCqZRHqZMZGPRADN7ywWjQnrGskQ",
  "key14": "cDMUmMV752enLZkBmXes95aeuorgubtPCWEzQtDhAUQEU7WZTU8KNjY9iZtLiNuhZVLyrwLJbWk6qTPxXiy2jAJ",
  "key15": "4tme6J8FkkQ5JeATas5vHet66PLtwN9zeZSrP9GkDcgaeH7NT4ANLnGrrHukwD9RYwsHDXYdL3q9pbCihBnSuYjU",
  "key16": "4GptSys43HTwW5AhYjsEsHWvcJG9aeTjzUzNx4qVnqVpZhQv2HL9xgUtX7tMwNaCkqSWRWrrbkwnrFMa8hntmRJ1",
  "key17": "2UiuXsDWbQuYFbhFX3A7BsuLYu68RQNk8LQ286oGS1YNQeC2t47Z4jsaJgn8n3rWYWaB9MvnDaty3P8RKuoVvyW9",
  "key18": "4aBW4cu3qJ5CeH9iMSE1sctFhYiYv6hFQSGYt4ui9y65co7iD2SVUYMDwuZZVvWrZqabdmDb7MGg4LpbY4CXccub",
  "key19": "4BGuFJxitxWKQFaZzeXaAetmP1QrC47ffP17hFLSzRQAQkev2KonyfUsE51NeAwnR9eXoEx3ZScBW3QUUeE5Jxx3",
  "key20": "2BRY2fU9m4KuRakR1x1UDS2LkfK2Y5nKUhHVQEHpMet2PjxaFP3iH5SiRYfAu9hjaeyVbBrwsnZ1zcfseJTej64C",
  "key21": "3z2VLgKU2K3hDgnkgwkzMc6JgZ2GMwx5Eq5pK8MnEXMFmxcWwCVzsf3HCNTwyhdV68vTCAu2VRCiWXmpyk3nksZK",
  "key22": "67aYCfeW9Ku54VZE8kSKwPD3HNuTqw4PYHwsR8TLT9knBmFDji4vAJCnvMui2eYce7F3txihGCJ6nb6HGdyWF3PP",
  "key23": "5tf79w3S2rKPZxSuBxsvGtjeYJAQbqhZp9r8wWZuQ2Cfnmi9ToufRQHBPnKbvcsVcD8dTssxJ4XP84QeFF64M3jR",
  "key24": "3F3SrAoEvDiUUSpt5rnUc3dYmFX5p1erKrFot4bk7yGz7dFjRxqHP57AGwgNZdMpizdfMjUjRxgoEdMPQMVLUPA9"
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
