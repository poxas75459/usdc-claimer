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
    "2yBDHsJKwP4cR1Zsfn9nVmzYfCQj2mXEvtVnLB4TTEwo1XnR7P467KCUp2XQPaCheTXETjEraS8TScXPgaF7xJ2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ev6LTBnBxFP728auQwLDUy4Ge18MqR7k41CTeBdwzqbTM2VVchFTJHfm6iWQMkMfcvaCCxaHqknAH79oyzcLKB",
  "key1": "2YBm3FGQ8JwZuZyDYjuDyGPSsquqxHanuUhcLnUZvzAkjtSSBBNNN2HwuRC68YjpuZHjgPCsRHwmy42msKnmW7CA",
  "key2": "52B3c6rs3ym4v3MPKkKN68nGjL79uGLrjU2txcpTucutmt4URLgF1Bn8vVuBEDFdhkWHKkFQLMoQFQfRiA3DpEuC",
  "key3": "bXR6zgvGuibpWiUQLDubnyTiYBfUdjYuah1G4WzUQ1RsTYZW866etgUP1o83nh8hn1tWZrgnUEzJAVtHxiZ93SS",
  "key4": "2PC21dsj9E9dbUWoxwwvqhXzU22o8SoBTHQMK4LtS6E16cJk5u7pYHfCR8srPBpcTaPSEpkBLqxffXBuehoz2RkR",
  "key5": "5TY6vdH9MYJN8GUYUrKWn6CKYoQSxBMywNqNPRnuCzJdNQs8SnJneJx9z1tLeWeXWCE4rVLW8n2s51E5yhC5URK1",
  "key6": "2dsyhRSiPcNMAV7uijh5V9VwBjevPzr47ZSpq3DvQYdY7bQL9pXyDZ7YQmwfygCfTob4uvmJpUSkHMnVJAv5LvST",
  "key7": "58nQbc2VUQBSsGqsbrPPExy8jMD2skJbSRXb2aea5SCGPw7bfMHZCxZovea5RwyrewNVVV7stiwEyBaekxPHNDbB",
  "key8": "4EQdBhB6FsXk9wKfHoS2bhN8Ptp7qy98CmTMCRRU9jjUs9dL2ocfutG3r5FYkMwXi95ztrZikE5dBjdFbyjJXha5",
  "key9": "5W9EtpmjLE861JyxPNYbcgHNwetbR255yU96orbiuupMwCMX2HHnqWJsv7zqNV4pBc5CpbfA6AZP2T61K3HG9iWw",
  "key10": "2TasrR7WV41Db81XLFa2eNwg4GntsH2r4hpQ2QTFSDmnBG1RahHLXKBbej2VGc7nUvSoNhY77WimXcodyeNjqogg",
  "key11": "258AA5U2AXXEqhidGKG5zbLpqMWn2uQBdGrn7ZNSAhMX8pJNc7kY51XR6Cn8c4EeKCCyaymQfn7xetCvgFyConiN",
  "key12": "Q7jgoTNr4YpskigmVBJW6zNtLTed7RwCJSfgtN5DMTBf5RHUksQWB56rhLM58WCzknadyjG76pFY632oqkCznDg",
  "key13": "4wWqzMKb9yLYd17a26cGL9Ur98zWtjYwXRGXiu3xghivD5pEpLV1bjixKmcjfMj6Sb87KoDsTstkkgm8ZjrFozJf",
  "key14": "5Z8c3DSvYh4rvCsm3nFQrZg8zn4YuJDFBjXyZDZKtaTuSXM6Hv3XXgnC4qNDWqGAphu8vhg3iWdcj6kSmUvXvGVn",
  "key15": "3FMLGAvQ1VZWjzGXpWuisCe77GC82FK9hF3Nifm33daSvy1UeNy85rLqpqvcNvg37fhXoT3KutymhqupJKK7pXkm",
  "key16": "x7nwU16KmyfuW4S9Ggv4xPdS93Fah9GnH22GtuYNv9PyqyBxea7wibTkrNZ3XWyPWhFsVW1EUAA9RbF91fscUAd",
  "key17": "427ePwGuBWw1RZnaSMjpwv9tgc6rV8x1xuroSaHNXAmrRicGKkbnkVZbdfneEmGYfnbTm1JREuTq6tePvV4hhVLj",
  "key18": "AhNzi45LuVeSRBjN61xAm5cjWbLSgyVusBfKU9UEoiNWrhujeBgiRrYi2xi2yrC5orNA14bhRveUKay4D6wBXxL",
  "key19": "67d5uDp7c7FvL78PZGtfLffoCoBvHP5eSQ7BvXTT2SbWikMxoXXiFkXMtp2sVn58RkerRh8YyxvGyCsNKsFYVfBu",
  "key20": "5PUkuviBRbaycnAdZS8oM3DUsHYCSbco2svGfYxDnEiHUzRL6MKqQrYk3JawsLyi5fcQqLvwHUcyzBt9vEmGBSbH",
  "key21": "eNL3ZA7F78pA1vvUwMSZXTTHVEiJwy3beUhREg324ySmbhwzAwxf6Lv8HGjbpPzeNj51LGBmV34Ty5cUvq2ExY4",
  "key22": "JDuktVcKaCm8bJ7aR2DFeuYyzgYacn6QUuaqM3WwcWPci2XepNP9nizbQAZ9jixFbj3FrSdCD8FGGUDdyNit8hh",
  "key23": "5UpjtgEwfjvoRaTaXoY4gxWiQGDqRtW2HV32BVDpzG5fQmBbz1yUYSVaZQKATjwsay5xqeQ3v5f35xphdh3bGpUR",
  "key24": "4tEFXcEKFJvRv9QLNhijwNXHPVDe95riEAL9YCXrXs2W3MHXjugWjxawV3e1ck13vXGi4EZhb7HEPKdZktaERe6F",
  "key25": "65TUM6tGBrmLKpDBXun7tiCzqJgssyLiTwTQnRtsapdgz5NzKESjhS8ow84qK34XxHPSTsAUj3NNjEvBrqdgDU2h",
  "key26": "588pSMEYFR63EZuxBY7z1zGHcYoT51txZCSdWqqArfEZtrm1uq89zT6XezcFKa3PzzuE5r7tDHx8aH9zmnfga7nf",
  "key27": "4zJL93ad1X8VxNsfvLixKVsRCE29wkaSKYRYdSFGBeqQUCV6bBi2eEVb4wab74xnLtvs1xo2ub4vp8HgHa8ZFyEU",
  "key28": "V4Tu5ZkC1TzsYt2GyfpoSYZPeLciNoi6fHV7WxNzmHEVRW47hg7mB7BYq6jwv6g6RARpbZ4drFzsDeoHaoE2Vre",
  "key29": "2iHLS1wTeu5jxyB5487tK95ukfPJvasUytvPpjMcBFgjjLMJBihP1XZdABRqRsUSFLqze77dNjtEsZgj6cPBUtFt",
  "key30": "2PpwqXwAEKyv14HinFpxmWhZwYv1sSdXshmsq7zVsr5J39VWF5F2RbzKwqa7a74yY2YXYwNf3aiWn4nYEkLrs9bM",
  "key31": "2nNbZCZuFHswqJt4qKhs7EGF3t4dzAnovc5da7DqekG2Yi5GhwroB1DRP61Cvc7x6Ep3zfv67ZdjW7QSP4ctRdc2",
  "key32": "3Vsae6WC9xn5y2yqXLqLJekfv3XpG741CLgvVSZjqTsfp6o1EPbp2rwzbhHmYvvRq1hEUjUskihhtcznvVkMve6E"
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
