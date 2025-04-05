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
    "2LwaNjFmd9tVpVfax3HQV9vbK4PSzbPF5QnfhBBiVtZM47bNSSuW23QqaTrP1Chi3agF4hnJ4hNG1pdPi1otrhig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b4TU3PMtgRgF1oeJAiFwzxvp4WDG3dm2bmDZUR8ntv3bjik1uJqNGcwZx391xWNq1uJJCrwLDbkM2VoWXNkHum4",
  "key1": "4Pxu4x8upKgeJUh8WCieat9xdE3pC3yDj48KZsuLnwMu74aH5E63eQXfLjwdT8BoNKS1JpHj3rfFKEfnhuhwHZya",
  "key2": "4YtTbstWozV2xJatLwvourfkvied4cFn44ogeEny6MGgaXsqnN4RM1iP9AJksZRaSpBhYSkRgRLnbidZK9ViVB5T",
  "key3": "3zWnb6Gyp6hY6GogqDhdSdhMeD1KhJpuYZgCwYcV3iA4oGbsXipor9aes8gmCRoxsrRdcPfSP4wBEJso93eGKKeA",
  "key4": "258abJb1rM2oJyoCGHFmqAmYDduLXkQMAXtGsB3XSDMMJSWmwqdUuzR5Jew6wjyJ9xv9SgwKUa4gJrAdfdBS5ckx",
  "key5": "gC43rciiMa77UNTK7ozPrbd6V2cx2sT6dCQtEYm3Usd91SnDtqk9ivzkx2MjWqhinuSD2KNxGQxUHkrhzyQq4zB",
  "key6": "oLQghE1G9JHsZUWLZqvE3dQ3rd1pSvjqqeEEP9vTske4UGvvpbZpYhLNKp7bRDTvUgiNrKgBUfdyxD36946joDu",
  "key7": "48X1k9QUCM1QubHATeoXsbLEhcapjETSuAxxb5Gyyhc4EDekJNg9z4p9uebeXQ22xBwZg3nsFYeaomziMX4Ax5FT",
  "key8": "6gpNtr14zuheRXFhTvy529GRMmVLrYStS2HUz5L56rLJsAy6RAhw38HAXQwPkNEALiG4izC6MGZ7DCijbnDNQzt",
  "key9": "2DWzkqoiLi7faZGz3rMjuiBMnNGiYFWSHoaRAwjY4AUP2YoWsRj52HtVwjzMR1cS78LC95AwFseqZL3YWAWfhvvy",
  "key10": "51GSPB7FyPuqLY2mugTrmtg8JVP36PAPHekrwU9WACJWArm75fBPw5byGaU2PEjEtMTfxng5MKrUJVVhgiQBcTo6",
  "key11": "2SiaATeHnc5f6SzvWNEUUViN2P5rbnUorLMYz8evQAZNy3oYgfd5z6Bh9w6K7cwkKytYdsLDkpnDqsGKBL2L2r96",
  "key12": "4PuW6spnDnjzZf4HEy5g1ADm5vKi3VgVbixY4bg5oaq33brKNcA3jzDk84gCVbqdZ1UH3DFxwo7iuw2qyWNA7NeN",
  "key13": "MemanCEZsiCDZjCeGqbvvrDX7B3FQrs6NLShuzsZX1BnTCq7MdXhgn9R8TQF2H76D3CVZoBX6jFbDQHL8r59c33",
  "key14": "5KVmgxWiNGg73nNLDsKsysSPQG3HPXxmNqMtirQDoZqSoc5XQUwEpy1kmXdvMcZU8Qujp2rM3wMuBCKjhbwZsVDN",
  "key15": "4fDp4PEXKmWqF5444trKZwNG8a82ezn7ReRztsrts9fhWhmUqMr1T4hQeUoz38sSZrFA7d68EuFX2YTHLoFte4fr",
  "key16": "2XKcV9oa8inXDweXiHZ8wvzQyi15We5o9CBK7Vj7XrQTx2JoaqryemdexvZLrwJFQJxFqGWQrZsgEjJZEwEs145v",
  "key17": "4oRj1ASADYzVVeTVt3JVUkB5E4M6wLsdBXp7QVLXDiwEU84m4EjeEXuDUUtyZEcNqtqeKqmZ5LTTo8XJs1BERuGa",
  "key18": "3ENB9PAvwpeqyLSMP9UriBRPYJnEzszoHrkdggAHsE5X3eoHZzEzd4AbQnp4oMvN9YA1bDSFTSCasYyURp2EPrWy",
  "key19": "4JXWMEnMkUGeSVspE5DKnjytMw7SqrS9M9Dntq9zzeMCjHtaqKmwLPsmmu6SjqZos4ugivtmkXdS8GCaHAZ7V7Lf",
  "key20": "2z9pco6y2bMuxJeEdzBqBwcpjXT3sqJm3ARWaNNZcUGwKZAsn7PmrTpRPYS66CH7J6oKrwSGPjctn2rsYWWU8pFh",
  "key21": "57FQJYQvkajiweGA5MTUn5r85v9EEgUPnCPLk2y86ArG43W5iTF6TQ89fiMdR1kFkWw1Ax21KdpafjX8sRYqMDDa",
  "key22": "3K2ef6bm7rV6spCNCz4Srp4roQuUBqWifbLhDzEKTF3ZNCeBRjmQwfou2qgsHUySnXxPL1xaEk1JniB3p9w2cB6e",
  "key23": "3fP95AkmQVPXkBcoJQDUVHDvaNJjMJE1TYcgs28dU8NwP5YUxJpTxyXYgtTUY9mUTwMkchRZAg6feNKhW6dvqqse",
  "key24": "4LR8o462NvuL6Ti3akSjPhK3ZtTT4wvNMegSMVYZcdbatgizvi9mKku9jV7syUdYNWgbfxvVYp38tU5YskaHwe2e",
  "key25": "5dRr1zoVyuKMnHSXn8QKp3ZVNma5hvQGXTnQimqNbJwJTPn1r5wfePaobsmExWnBK69cLp73ZHisQECmR1Yix3sG",
  "key26": "3vRhodTiGCDgvocie4e7662ZqpSeKkWwbPU882Y2FLrBmCiUqSC1mEg1CihxxWeEfjj3ys4MbYspgGY8RmoWwq79",
  "key27": "2c9fKGpQJt38oQkojauMh7g3uskoM8srUXqzrJ5dxgH6vuS93pQ9SmTbPzQn2UJNK6KR4mQKZmt4ntYEKEqhzv5n",
  "key28": "464M88BzW1E2qrUmj58pZhw9zSi5M7idXwMLdyzKK2XNzEyc3cBCXkFPvWuSfZ5bdM9CUWt16ZURFcvXJDdMd8BG",
  "key29": "3nwqPnnbRzvTZQ3HAPMLS1opgKDayhViZ2rHRvmhVeEpNJygWJFz8Rr8rohLs6LFesFTsNHMeQUMbUu9u8o2dpaS",
  "key30": "43cTJqtt4x38ToWXJzYYjsJSmKk9Qct29JNtJerF1D6TeKzBgxXSrfqkS6vABFTL3MEWqqVSFU27kBgN2CVCZvEA"
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
