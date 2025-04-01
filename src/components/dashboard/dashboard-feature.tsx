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
    "3em4Z2pLM7zHfQiTtkaaAwufUhQAAaJEDvwoiHp2TXdmSsm8aB7ukSyDoyvo491gL1niANy3n2fArVkXkeMbSi4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L3e3nhvVPWrCHZtLniPCzaNyURDWze4k7pzPP9xFH9LBvq8dFkaimMXVhnyzyrNrn8x8X2ceVgZ4GBzuPXt4jaF",
  "key1": "ax97DwoKnU2qAjpQDQePzVGkYYUU5vYJzQMn5cvygvanmeL5MSuzum5BRQFX5mnJopYi1K8Q2akD7ioAArJwreX",
  "key2": "3xxnuRaG3YkX5ydvENJ1k3PzcjWckjF235GCjRFp1oAjE83Los82Z5V71A3QeBQajWwYMa65AHUzxsR9YxB2TGPK",
  "key3": "554R2m3ysvcytxRSYu7YbBeiqjZXKtAHQLRhXDuD2xQF5bEABRGNAvFTwNpgbbWJFXeiCarxaDymitdc43GBBpJf",
  "key4": "SmjNSiv6CwhKQF7WBiWcUc8smCtvM5D2AFoBaLQ4JebBLjb7Hjx3iPz4mkGjQDkm8yktFkozMoV6vr5iCmZ9fK8",
  "key5": "2sJZTjf4PrSeWPy9vhaYq24r8DPdTSLZ4R6UnUL9w6BYbCGstuvcmuFzJYuTj2TjK6rjgUf1jaCqqLThMGAW7G8X",
  "key6": "3P5Z24bF8CTLQUQzmR2d4im5roxe12gWKyXXzJ2mgQf18WF36enjduBDXbRVNVzcmmcMuTpFfqneiWZsB9AoiLrU",
  "key7": "CRhnxBttbvRdgsseaAdVf8bCwepUrpY2NYP3qz9ueS5h2V23KpMzFyssSMSomgxJzQPkCBtPWFXQ98KytL8gY63",
  "key8": "2p2KZdzeGwBYj7PjjWiAty7seUk5iG4nzZjaqAmNo7jj1ZZ7hTnW3t3XqDZBcKbxi7Q4XhJ8mVop5xrHkL7AS5n8",
  "key9": "2826gD4umLg9b2uXHnKUkiEMVuuPCLbmFhSYm4AywDDKn7Jqd9cTjePB1bDs8sRRqcxbSc5D9grV5PXTHQr81Vzs",
  "key10": "3XVyvDm7MP6T4PuFHxuegEjJt1itWsNRtdiBZwBzAqz23o1BNe5JakxTsdzcSpBGatyEMTZfvvhyPvY77AuSAVHZ",
  "key11": "5qQvb4iEFtaN4L6RKdD48yHvJvdPC8jsc6njPTeeVEoSdb6UiQsPtWdPKGosobErA6TipXFxfk5T7TaBPnK2iXjF",
  "key12": "5Dj8wb8opHZMkeBGq4QbGVjsPs15WAgeFtfsxDZ2aLTGnVA1bGgNXooqKiadVQN6Xsq9rJLy9Hn2RDcvD1Uij22W",
  "key13": "5X79XzDJCyBVN7fvPyLwudd9rAgcTZZJRdZhgr7BzZivy9NjUSjch5rqbxL414BMrggNd9y1rUL7FXqDBAmZUkHp",
  "key14": "5FjEL6xQJNL6YHeaihcBYUgiB2py4E7RKUkqovPGCtdpAfHdU7wVNeWXLqpuG2uHt6AQzFFYTC9hcbL5TTH6niM1",
  "key15": "3k9fwFVArR6VhebV1SYo5mcny3PZjHMUsDw3Ef2fcKw3iGTYVXNPi2VM7YQsBFa9T93iTxkRsVrYuddi5k9skrw6",
  "key16": "49WvhVDGKUEz6qjeUmsxy53WHQKsvvxfoH7a2hYhzUN6n78tnwm5zmQ6UYtNtGAj46Uszgm8kDSUUtbmtzXMiS1d",
  "key17": "2ZaHfag6BKPGVwGa5iQduFcsT9gmtDaqBrBkMzqKyAAk67tP9uv21y4a9KNNLwBE3krT9hDbUv7HS4jd1FPriNUu",
  "key18": "2N7Eqtg4h3ojr64ndR8FEFZTANwdptEV973Thr6amLeC21EVQyD3hDYSK3R972AgpztFkekdgWDRjzkAAYf2S4Ud",
  "key19": "4pQ1x1aXXEXX28MiY3DwyQ45L4sZm8sXEUFEjWFdkuRxk8C7qys5vsBAV3u4GcBiiuZUwGR9XtGmeoadsscqeicn",
  "key20": "3pho1LhAvZnTMPX36QtvHweo3fFtG3LbCPJ56XHVo9Q4UNDtJCesCxhvxitYqRj2JipwwQzZDaMYFYMKECho9xvh",
  "key21": "5ENxCstzbyeWbq1cpdFqBKDSTWP6yVFY3Joe5gsZXjWCxW6VoSTWMoqC7bWpenEXtZwMUBmumjJaH7pqUEtbzDd1",
  "key22": "41xCcDAh1nWPfPQDfcKVc2oB7L7UHTYf3HDokyf8R7WDDmu5nt7SKR5ib3YKiY8pQnP5UGjXnMwrmYGSnrJR5LXq",
  "key23": "ZLUAdsoP2x1h5nkarPbnUwzyJ6nGTQVrsCtTkbBtQzsLMJXXCQs23ercthfWzxCDgLZ7cPMcZE7SXeZYrEsouE5",
  "key24": "5MtxgDjcFxSASfABcMsaWyFcNQp7Jqf4RFwP1rMLE2jZUTpVgqdDqeVtaWTaLhtykXf9nkgijh8UaXkML9zqps19",
  "key25": "2QY2UJzv3xYABh7qkTZuvxQ9yeshLRXRwSSCsogM6uj1mzhGUGAdHnvZjsJ1jLaBnfExgNWtuLUx2PEa9kELPNwv",
  "key26": "2R21L6TUBdTDtF177HLQrAS2YeThxiN1y64NG52y7fgGFCTSGyzCbR7xKQxiRC6wwpTn5tVoB49Na55ZDyBc5xMx",
  "key27": "4sgpmvAmiRng7N7aeSmgJ88JYodye9LrGM2cXf7HkHB9K9tboqcE6HR9wrxNzygEEE9Se3wurkS57zxxCeNS6z4m"
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
