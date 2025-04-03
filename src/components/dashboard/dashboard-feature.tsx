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
    "41SmzbxThjGHjQTF6GDGriS9AQxPqHm2kY1YM1q7nBmjRaLDM22qi1UXEGAgxqbDJ5kAL2Mq4usCWK92H7HocFTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PTDs6LR7wV2n65GouhX23vCgS1AJ1q8rm51cUXcwG1pKVYtkGLBfbviboLnw2rDa3CyePAQZx7iAnYKNBDNMStM",
  "key1": "49Ns6eUA4AbyPQXdubUxg6zcnYf73CueDb42zezTGq22dij4QShXm7Rm7yTtJYRj2QBV9QDf6JXEcQG8yXocLMuo",
  "key2": "25q1ckrAHjadx2Qj6EKV8vzzFvTeftSY9pK4hqwDW74PETjRAqduFvpXHAvYuR59z8fd6VNGXkfWDtsfX12F7qbD",
  "key3": "kRQpuULT1Zm6hnYMmNFZY6GafDhAvCmwbh85WSvwxBBzgNDzK8JeXS8z4zjUjSLTbqcxQUMDyP2rpVu75Mii2xo",
  "key4": "2WVaY1FoP4aYy8F3ab7GqAKSUNSi55ygPccP9QySUyXkoZYrYfkxM1Hqa4gSP9SxcJyhTBzAUdLafVVQbpBhhJv9",
  "key5": "66G5tzj1VECBAj1ChKWMehdJmGhqaK9g9xvzuzAR3e6X7ExKB7naXGJTbdnawjS4ybKnj1bYLjXuXBFoHZ8XuEXw",
  "key6": "2PL2Vanya3SWTKAqVqBTe7rYM3tAQohmaKav6FQbPWLWWyugBGDbMfx6Z9GffFn683N6rHJ56boN4PX7FeBvfcQn",
  "key7": "AY5526KodQz8RKhoHENX9NgfpEyAwSymuk5yiZyNhS7tbL8ZEPEvHXSCnbQN8gu2fNkLcuV1ceoq33CW6YrdbJR",
  "key8": "WaqVBWX1LspWP1DRQnLqApbZ2HnU58uo8H2bH4rafvGXWLE2Z72qtqi6uWAqjbSXzrG41ZWGecjTdDpwtn5qKwF",
  "key9": "3tUarkSvUXZjKxeC911fsxpvMJDMMv9xcqEu2SFzq9kWzEyWN8tcu4Mk8PAaYZt8A2RKvgqNxfjKG54JvwaSRugS",
  "key10": "1BpND5AizZ8Z6Qfke9YG6a18jzMMaK1PbMXFRwn3EKbQooBhAcBHYyq2WNx6jw3ZVx3bpVCjBt1c3rX7wj1ByRC",
  "key11": "5vGv31JYFpH9Tvg5KVfik2Ri4v6CM1ed2Hw3YL2FG6cNPrzQKMvAR6FsSjtuUcgonUeg97NzB7oN4Vagtt9bzD1M",
  "key12": "ApM4C67e9tM51y8v1CoqeMEajamXDNrN418M3iPc84aNPYKd1rg5819YfueDYkEuQQXqcijSCNeeicmGejPvBud",
  "key13": "3pVWv6bV8hQPFA336cfp412nsRW8Eg3k1h3zHimgAeHqUrV6mdXHHabdSWqR1WhawK7xTy2RqykPsPRFKrtM4Lwj",
  "key14": "3schTDnErEzCEV1FKdA3hBw7nRufgEHxBWycZ5WzFF9oYS1dXtM7VPgeA4JtqRrnEApWE2ybTWraYcWR5p6wpgT7",
  "key15": "ctaXcWGxPqwV5qK2bXEucsDcqiLG1fg8tVRvai2WtaBRXR9aeXbXyNTBsU6CjwcuU192DzGx9Fasn5YxtRP89Bu",
  "key16": "5QokpqGnEu5G9vcLbvjqe1gecHFNBz8zzmDM9M1qU8KRdDdqb21E6bKMRJCUkMHxdv8oUmB2ZaqkDxiYfKzXyiin",
  "key17": "3zGY96YeAa1mk44J9XAWQ7hgjdG9mhXX6P5qDzTQMyqPBgzuWuipFwpFtyjytYoVLEnTkc5NwQxCgp1b2WrSAkv7",
  "key18": "53fkmj7zKYYxyX6kzWcD8SQSgvVnVZ6Li1MLqddYSnaHSfjwfBsXJapzunE5oaKy2aDD2SZ2LGPVqakzoKqD3tNG",
  "key19": "3ERbk4LnDsGWMm57R6jFQPv1y1QcLAg62yzzh7Qtie8iW7tB66F76TmSUusmEVJkWUPr5YRCPa9D2L2fvNYW9D76",
  "key20": "TusxeX2C6eEyysTZh8DSY87bTMMXUeWwx94iitSPareerJLCGU6SxaXPk9V4r768XyFH7eh1BZ1GJ8VTxaxsHcT",
  "key21": "YfpvPfjn89GsPgnNW9iwUavXHe6Wzyrrg56csPTiedpTy6qWonn7ZDrpeRAz8sredD9q7KfYcRCr7arRrBuq1sV",
  "key22": "izWEAG3E8T1m55AYmrV9Xm4umJfdvsoVz5pYr31t1AdsBK22ELFWKvztbqRYvgjze3W2fgLfnr96nbzt9RgFxUp",
  "key23": "5zRYAS2tySWU1CDW9FsydB6soSnei1St1qeXqHcGKneu7ortYXnTcQzXfsP5x7qVijWwcSuABDtshfwgFNHvC36i",
  "key24": "2D3BW2y9m6rYGgqEaU3z8TbXq6ygmtydML5v2zDsREL13Yf1XUALf3y8An8cpoe9bHXuiY4dp7S7xU6gyN3hFrM4",
  "key25": "5dqz3ok1szAD4oGhWN3DhjxpJaa3we89gQersWEFcSQcsbb4BMRBsXL52LSJCr59iWqnhGaeo8p4KcbhY4Wd7pEp",
  "key26": "nqsQQQXUGcvzKGnpFBUxm614tAgJU3dmLSrWPAoeD3TrUmevLjamXHLn4xR3oShvyukQAojFEAkgabWeoZRqmDL",
  "key27": "3PusPEqG6Hcba8jfJKHVGdL3UdC8TA3eqo4XKxMseRa1zeN1yRSBh1Gs5EkRdmKDs6oeHHkHCjQGjs5ENeHWM7KJ",
  "key28": "4rPqWm1NeQi3RuJiRcQ8SkYAFCQVqrR1Zqbkidf5kuBnE8rZDGBSCnYZYMmfuc9NCQZAXVaspbPzSKBDTBVjZtWA",
  "key29": "3HsmE38kZ5Nc9DZ9euzREuBoftZeVphRDhd8RDy9z2pBrUHbR8GFRwe55A1qp3Tu98vFgWLTCEcpCW3SFWENtg5Y",
  "key30": "2sUwnuK9Z3okAVv2GrS7oGGs81SZjAiWMrHfCAthP2hga1LLbsasvafnvd23ANSi5iSijAjV38CgB4XQELSsRMjh",
  "key31": "4via1SnunN8bMFRADSrVVySpVoTa2tnEJopnaVpKWiEG2UKMWYGdpaVbosZiPzUeazsEaLUGuQFq1rppZTwwESJB",
  "key32": "3Xg1fwEmruSbCnhQzmPDTLmhLMBuyfGQ8Aa8YPe5z2sHTR4bX3gQ1QDZR7Cyw9dv4wZ3Y2Lyhc6SCw7HUad76iun",
  "key33": "2PWXVtb7zFNZrM2dkqHvMd2DewyxefGymtfHKz57QTSGeEtEZDzFe2u8XvTjDzgunMD2YDDKm47r63DwHrnof6fd",
  "key34": "4jj9kQaq6wnx4psSRt9PsS4o4KVGbNGoYcvq63ecSA6Nfjp3UmiwfzujUcTjxk9jroEiDWHEQaTheq5vBrF5p8xd",
  "key35": "4FcBjBXBHBAHhWW2X3x3wo7Bos3xYAEGbyoUnM6sEH8J1945p5zZebUrRmTdoSSG2quNvEsGM82yYRs4ziU2qkar"
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
