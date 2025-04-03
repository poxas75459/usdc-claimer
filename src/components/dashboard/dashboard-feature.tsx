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
    "8EQbdkFfEDcZLYc3QHfpUmsJsQkf1S64AFYbQiTaiPXeW7Tkc3RpdEhwGs7HjCKo2LmBQQZHr9HvvdRL3Y1YiY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33zGwtfgtZFAGRDwrajaUg2qDgpZnhitbcEHBqUeDbHNPEoToYdpHX4gecEtpTY82GUzSR4E4RrqrW5GKCbAug4Z",
  "key1": "3xD3f33Hvy7mKTNtpEMinuaqJGEf1aEZi977RR3FBcJAWDYUFFWgKuY8Rs3euwYYAwDQR64VPd1ZjGCFt8dHBMMr",
  "key2": "5fa1BGpVPjWBrGxy4zmbVX8sd5zC4VKv82P1KiNnXmniGaWeDsESM6skvMHyMc6AMfjBLNiQyWCvSZ8hgYwahM4d",
  "key3": "4uUneVyCad6PD1HDAfrVCMA6jvgd5arkU72Fo4XWPZAHNsTEAvMp594oneN8Qd5EWEEUDSTLhQqU2EQEaVWXN9Mz",
  "key4": "5nfuYVP4yey2q74R1KP9zm1RwRSVxiKaCodi448LpDmRkdBHX3Ko58JfwKp8XgMF3TcW1GRCmcZEWKwQU3nS79tx",
  "key5": "3BXACMq7GFfyZyWDT2iBX1RzEndNp8R3Aq93i2U3hDofcoeifyBXW12maa9PuEPwdrxGYiKmUTvtmEcLo9mR8tqw",
  "key6": "3XNpMS8hdzpMoMqC5x3Jy74WRokFWqSZxVMoxRKPByVitC2xNQ6ZU6hXQBM8ydXErFDWeVgrXr74H9eZJjsnbnQA",
  "key7": "sLnxpeuqsruXytQMHT9PZzZ6Tt5WsZXwsjTmzp4zGTdBHU1PKKJFb1bN3jHk8HX9m2kgD8LE1xXBRAJ5UiCVN4J",
  "key8": "haeuGUPXHLB1yTc14kLKsGZZK2nKhUwWnj6Z9idTSAbkphugwrieFH3sZSSDHTYc4NTWrg3GUEcYGnhKVVqLzqA",
  "key9": "BbV7rUtj2YFHmRBv8CzEaSYfPrs4VDAwKvmAvJD1zrA89dHXBemtDq6kHeqT2FbR3V9qMsHW37qvZUSkAGS75z2",
  "key10": "3Pdrvx4VfvvQr8jo1kc7bfV5x8hRpMsrVVWcWFxetPGL1f7sJ58FPtjS9j8TCY9pEdPGSYk1eox56u57iYNmwwP9",
  "key11": "26braGN1PWi8YSE8nv9nqB8p8mmPt2krz5bGwzky3nR7JXh6wWUjh7t1Zby1ZsR4AzccXQt9efymobdaXEuk5w1Y",
  "key12": "335fyHpfBgzxpCNjVKXJeQ7xCEa9JMAyWmzGgADxA52r4kRV4nLfGXnBfMMQAmj7jBPBUbKmGqaPmmsAKFkDX298",
  "key13": "38PbfSc42Cq7yvZT9s9pANbYVWTkbRGEVoK3ymPtvDVKxVi2Jj426kBULXPNFLBRvkeCbjr7qG5nbYDdf4NZMu7b",
  "key14": "U4rXahaAhNf9C4c1kMPX5DxhZy46cBg6zTNnR5gv3LvfAhN78C6J7YgiSDvoh4nVtCKx5FD64NHmAEZqjqATJBn",
  "key15": "3mfQmE3tLrnK46s4ksAnqUYtZ3Wt1DupL2squw27ikAveQnYbLcaeTHaV5VASQmCpgHPmz9Mgsokt8uXVtVM6TnP",
  "key16": "5h2UZc9Bg2ujfJdB1LwESkHHBg9uCnFgNxTpuAjM6dT44mZWXdtLMZegJo43JqRSYhUV4My6LzJTWjpCnPnD6oVt",
  "key17": "5LGj14KWKL7QpVuMLFFGtmxhUkxTEJS8gj7PdvAt653nqsdrymGL8S3Cu2YFkKjt5bwSBPKhzWBaUZ28tCWGegfH",
  "key18": "3RPBcSaczVsJEcZHKbcEGWnMcWvQBveiaU31T7of6BA4Kn7BKmnQva4ENZdJCGFPSUMaaKQovsPQyQcFxj4dfk8Z",
  "key19": "3rFKJAZzFFKz4zm3pNGYLQ8HnY46J1ddY3mZsF5KX4M9veAErGx2z6bNy34M1D7VnbMSsF24cpB8E1Yebec7qMT4",
  "key20": "4tmcGNdnCKFzLVUYtKoxNiBFSQ3cvEgQsRZy51xW1uabQCPxNixkYJGmjfxWsBUwUw4d2H2jbC75a7P9CUoNNGXf",
  "key21": "2ostkDeQ9BiUBVZ98Di1nv7VjKW6iQkVyLK26Ztcpb19E755q3kF4q5DJrVYWCDfb5x5stvn8q6cpqMEHXrsPhE9",
  "key22": "tGErdf9ii1HBpUEvDG3wKxoxpT3TGtEbcJGYym7xwy224e3E42vMr51XqbZTpGay71YDXgnrGUPofVAtJ3BU6AU",
  "key23": "5AjSQAh3tSgBPpnA5JbmLsJovoVNFGWZhatkFDdV7U6gL3sgb8Kfigg8PN5F1do2Qq3EhjtDw7XUcyzbMdGM1Ka1",
  "key24": "65B5MD78Y48mkFakF9xaixQTNE13BNkux2kXExpYrz7tiSAvjY4M3ChqFinzGikaobKRnXJDMaZMQZUUbSNgYRLf",
  "key25": "2GrfLUBx89JwaKX5dDtVG8JNUfck7WzjQaKZ2Kkvpy1TujjrnYooHLLpqcHeBt7A82RHrChAV6Q4XsmpPK65WNJS",
  "key26": "3kfLEFB58fdTLdcsgEbkoiE4qstbFQx3wwWGPmSTYRiKoWRWYUo8Y6m6rCbQW7SE3zzLzzu9FvbdJJBrAPNb8BFV",
  "key27": "3Y4aJq3Yz8towkdcCBUZbobYqzUhTV3KfYDA1VxqaR4UkqakJbMcixJe7kFmSnwb3L6YhxPPgZCNhSD1JvnEktau",
  "key28": "33VEwuCPyQDWcisVsF7GYqxV5ZQZvpQADWGnqYuxRvnEQrycdFDtpv6bdGbxbauJ9g63mYxwE5GtoJgQccSU6kvL",
  "key29": "4krcm78dHPSr2fNQ7w71mSTyreAv942qALz3JDrgX4y2fCvDxYh5RkuX49yzZrs5dhHABpiYvRao3WN7Dv5iX7LQ"
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
