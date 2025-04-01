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
    "3rXGnXXiXHC2fZHsAXGfeqQk2VWW4beEFKKLqNTeD9g21JYnvqTzpxrqgQoSEAY6VrAVoZgtqAjFkTPg88cybVQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qLYU2arpYwQZvmVSv2LVGjwAVJgD8ZfbG6qFmNfBfnSyboPgazBBGtakataLVxfiXzyoyct8vRrAtwJ7m2EAZSA",
  "key1": "4Ygiff2CYYPYrBwtuD8Y3k4ToV2UsWsQAjHJ9fBCyZaufKJwzMaMhhDY4WDFi8EzHFH42HLoaE3KQtEJNaMhUTor",
  "key2": "56xrXFLX4xknfdj44nZdbeLPE86BzU8j4288LMVAf9rX5Disq2ZVCnKmvgvB8VYjDewkVU2TH7xn93RoyrFAWRXT",
  "key3": "r42KbCM5KUSJZNk6UzZMMeP4VPv3q5XVjN2oVrdRwJmWqhcMEha4SCMo7h5fpinXbtq6twiVVsVtU3ACGLUP9WQ",
  "key4": "2BkesYpBvjtNLHFzesM9rQ4L6sCwXh3nwo2mEVjhKggW8nvb8SWwAjMB9cu9gsNeq63tADA2tnJQ2RQLvtUiVntW",
  "key5": "5ikXRXAUyanEPvkDP139HKz4iwAiezQc6iQ9ua1LydUBbwYNKRfnqhp1LEjiD4yvxzkKhsowgdbAWtq23MFWFw5A",
  "key6": "3SBCP2p9Cx7imCwghDLQRxVg1sgesJRmJodXqmSSDGC1Zc4bT7Q26QQX1raBvsPGdWdDjniqRnGr9Zkums57ETqM",
  "key7": "2xM3khf55yqtCKwi9VXEfqbborYLWjQQ1Uch1krSgqgYaFWqGEXFANfZNWARZMe5KfK9MKEBVdDnBVk2NuQkike4",
  "key8": "248NPASZbysLfrSWgFg3EjGyinVLfgxadYFKwLYGkd7Ta78KsMHKdaQxYPcjQB7Gcz1pRvus37o4VrecDmuZ28ZW",
  "key9": "cNnsDcjACmbnhWz8Wxiv4FBuVuk8KeVpimp2RDvAFw3KGLhXwqyAsNL48QRw9vDqLpnvkeUpurE8sZ2QKSzqcQm",
  "key10": "53zuANWfWtvb9hPFdpDSCenp44XSVQ6K3ifFjq5e7e7QqjJ7siPARFUsvQWADc16R3BbBxkMC9h9MDEsYDiVHASf",
  "key11": "2AVZy11qqXZqkHuCM32XyYswwzyYqGy6x9keebBVVbm1SMLr8shYj2fWHS3RjAUF1B9tLe8sbwX4sbEFdsBmxCbK",
  "key12": "4959n6jdpCkBGDUncfvkNtDMx7cKi7C1x7oaTWFvk6yc3d7rE1RTHVAcXe6h9ASiU28ZFK7qhnBjciNpLiCTQoTM",
  "key13": "2ru1K81cTaDT6UUWFbrAhjFZy4UtY768p9ddAwpa7mm4dEnKhv263boFBALkpJJkFqz68LVjUyJJRHbFo9biDzdd",
  "key14": "45TTzjuuNz9BoWGbuJurBwwU9wU7im7yz2kyE3328AeXDX65Db6yGcMaPstztYDWmD7a4Qurw7iC1Uz7tAnuPqLy",
  "key15": "5Nj6P3mZnhVLUK3X4Y8oy2u8BtEhnMGayFF6cZtqqZV23cEuZUA244F4xZfdzMzLNAB6HW4zkydfFMQoztg8uCSX",
  "key16": "JbPwhUqm6HMMptRG1agu1umuhToLgwBcu28GUkr3ALLmJ4rFQhBgjNcFF6bGK35DKzDXS7NTL2ooTGgz5beuEJT",
  "key17": "3fDNFQFESDqYFB9mK9HdRUs9VZhYz4zjNNozDTFuVzvCHKLeUUCfEYoyh4MmkJfb1obU1z4wa9uUs57awL8aKWJ5",
  "key18": "4g4pWoN2N2z5saz1bf5DLiJMC76mowGs8cUSCZH3CDvGP383AgT1kuEqsvtVES1Qgp8rhQ6M4EjTo2tVWfnJTG96",
  "key19": "5EEn6M8Yo21jmab8dxrf1u7rHCGS4WDxG5u5jDFsqYMRoZ1CwezV4VCPjoSXHCaJirhxUNeEXGUY6ymEgUmX3vMw",
  "key20": "2GAn4x6FhuHEHCnC8hk2CA6MuA66sVbwdhVwEvFhximuUCiuMzVcUseWsuk4HnptYuB6F1CTD8ok7bu2eh79JWWo",
  "key21": "25QJapX5zzi414uuy4avC4a4DjYSRrJaWNfdL5mxjWbjgRL5iRYnvHKjDscxZN4CBDMRYmwhEYbjfXcDVXazdvyZ",
  "key22": "2ewbqgjDoKKoiXoYAktQSVC162qTgKhmeDqCxdWeAFsQjFapd6sRxYKyBDMhqWkJV6YyBY86eSJRW3aijHK4CxPW",
  "key23": "5YJgyL4GZ3Jf3NB4JTwWUefvFzaMR1NeKiLfoQFYhjbWEMqwcyygwPFmynYJ34zNwgMbp8Hu4cyn9ok9xVRpBgg1",
  "key24": "2eBi9xRv618ubHuHkYDjAYR3KA3prxaqQQ4zXvGztZvbJawgamyS4pVBTbfwTLyTTTdpvCtdaPZSitFKaABNYSrk",
  "key25": "3YdadqAca39Fa1azDVkHgCSBBnW7W8afTtv3wUBn8H7THZJSNKf9nERUCPXFum1PWfneWc7MDWZuaymB3mmPU1EK",
  "key26": "HadnKTaQBMWqyapCg4L8QG79kKZWE4vjJpbkZLT3SFKm6mGvih4FDgyZwYbNwRCRQymCWp4ecWqiuNBmDath3yU",
  "key27": "4tJnpmgKgaiH5obx9AQhE66RNqPfszQhxsMqZsaLsM4tpQDLRGPnzdcRwd5JMggYuYH5vqHYkii5wUa52xZLwdYp"
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
