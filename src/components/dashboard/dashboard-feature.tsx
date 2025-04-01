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
    "4zZPoowoHN2RepFoQo2LBQ66fPSkBM1jpoAmLGFKnrXFd1t8g47RwmVEhJ2n415t4EM6SE7hChrV5R4PwR5zMvSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fegdgXxuKqfZEHLc7ArMLubjuHnjJMQAcfkHnLec31q9YkfbxghxpFqhxf2KgCE7mERuAg6UJwux8YvA1cFXadR",
  "key1": "4wTRGh2DmWyCM5Ps8CJooSYC5vTibTqP2GQzMKEFddjUW3ognDi5vb2v4bgbU9GxgeWPejbZJfwNp1dFSQvUkEUK",
  "key2": "2Z5yGprPoTGFGfu1g2Wxnp7bwViRmknqWuN4UBdjZwBZ6pqeuanBtyDh8qRQxSzmmfN8UZsBNba3rLtwiCsbVjRC",
  "key3": "2SJNUgPXNqsuCG7db9ACykTuJNfnTTSJuHNYGKGPTKRjuSWN1eueJspohXDPQ7iTjLa6E3UJYRCMSKcjEC67CJqT",
  "key4": "4jfzTz7Dwc263LDvcqyJkM2uYymzVgbLezZASpksDE3zxuLxmk22qbk8js24Sy1qdLYpfLXpFTuoxiTiD5iNPpAU",
  "key5": "3LLETx4y8sU3yRLgpniQn5wA8dxek6vKsaM5PdzPp4zaGeTnka3uL56M6YjAEfm8BZB8o4UVKSyjtNntCR5FSKPa",
  "key6": "3icNt5dkDK9z17iK9svtSTJgJY7wBfV6Ek1QSwLRqzd875TPsYkv6BzCMF7b3jL1NyMAUimzWKUnea5Taubia1uL",
  "key7": "5frbagGdKvaP3AUTkzoN4Hq2X4BPBumXShPXPC3NFrhEA13Sn7M9so44n8EfGrGDVnHsEWNVWmf4ePdGaZ2t87iJ",
  "key8": "66wQetmGRrD2fjvCH4zHUeQYm9Hz53XD8giZLNi8CCqRHELvvUS7CvmXeage9SHB6N1HbWpNAL8WtS1qfQTUviHV",
  "key9": "3xr4YK5RrvPiqryfCu6TC2324zbjKEzcCw6Z77uaPmtZBMLkt5j4q7yBQDxZZnyRyWd8ihVsZt4vZYivEPBi7UsC",
  "key10": "zsUcamfwhXdFr6DZVTTinZhV4MrD59sniaRBF2KmHpLsytqkVXnFjreJJ3DWA3ssxA1PnJtBLfryrnvVKwV24C6",
  "key11": "4QXJtYsru9Bh5umm7DJNe7L3UwfB1r6kTNK1GFK4i33BnCncDFG9tXopoT6Jrpk9Zq6Wa3Xvc7H5LnBHvm6qxtno",
  "key12": "MW96hJJ1zNijvzvBJQi7f5kDN9gfaoWuSPYoMmEY9e6dPzWjB2yRxBhgVJUVREtKf9Vc9aYeHRdjtbHs87zGJwB",
  "key13": "3q5JtMWeh7wLTF4fpzbsqGS1T1LUr5QMDrfXWLCdepwUWUMxoQAWRqwsRJ6Nf8HC9RnNCxLiT2UFaYEFWKtM29mj",
  "key14": "25vRBFh6gAM7JqKrStMDdcyxAEghDDBCH936dcAir7i9uyQuDnrnwTjhe5hasiKKsbCFGWzUu7sq6XkQgVhmCgrt",
  "key15": "5eTZhkNZMnRTdQQcmEAxTYSC4yeWChG65XBpRHuBpJmYh6kAYVnFXey588gaWiz8oF5FppvtjH7eeBczm5E2emqj",
  "key16": "4CzY91Vn4A9LkvAFqfBhsnz4XfyssZJYo4UiS78PnK4pAg9HGHVnQ13dtb256LWifatZtWLkU9rqo9NrgcWkPaj1",
  "key17": "4wxMz7pGW3L9gHiAacURpbjuS6zV54mjY366L1JPCY7dZuZ6eWovAQ3GY2joPwt4krWpn92x7S2LDRbQexcbT9nR",
  "key18": "WyR87L8HFmmBUHcpPvoZfuniAVMMujHKxAVLSWQNMyYujf165PVCrVbV6z1EKiu1iYPK7NXWPHQm7TpTyqaQQxX",
  "key19": "45rvokpFwue4pzzQ182TfZg7x2LX5McX8BHp6axKVkorGgr98xWDDSjL44x5aEspnvavnG2bweDwMbTDwcqS6W44",
  "key20": "4V7tBjySsQHqHgAVyBaWa5rBoz3omWsQA1E2uk19ZKS8p795jxoVT68GUD4Qocd3xehX2cwymBRpivBsRGnHEsh5",
  "key21": "2x84W5rvFU7bfv5H4KNdn8BGvrQ54qyBmPy29GYjfUumCFWhLA19hdXXM6EZXQkGR3C9DBFtGSXbYV9nD8eJUV5r",
  "key22": "4uugQADxyt79Ct5JuzpNq5TdjDVmWSs9yXxzLmHbTyRF58CuuqLqfLmLLF3NnBi4HrA4JsqJPX5AZkUhw3p6gPp7",
  "key23": "5zgjZosMZd6Qr7vW1URgcZAnFnv65nNvpeEk4qKR2NMKEFNfA6WKEFKwxWTJ6yGz4i4iZJRVkue9bdhv2QNSKe73",
  "key24": "3akZXjwcrdcB1M1w58tPkWkHgNiHpXsWNcX78muDJ44hFqfwnYR3uwfo7sLMstuN2f23inPLt5F6n4j2GAbB6MVQ",
  "key25": "47cAuCs9Q4XMdm92RWR5xXKAkdiNM2xtjYS2gHz56hsWj2a3PThvyRoTLtk5R8Gr84pKMwR8DQy3eneFKv2MwYyu",
  "key26": "2YttPYd5zNR92txShpayUHAy5gb2HDFisMmTMntep7Bq1Dt6tiVg9AaEtdRi94APdZSaZfLkRMnTR5SvPy3f2VUw",
  "key27": "2fvxV4aZUPWszbASXxVqaQqU5crBp2fScoP1uDKX788kgph1u95h5rQ5iaai5FL3irX3ES7oYJ4YNq7Ts5m98baz",
  "key28": "2K3MtYXat9EFxJj6N7U8hsLqn7Xo7P5MHxzmT36iLadJz1WLzH9jGTPED9V58QNCVtvEjBsDmBC3qSphgjWuFs92",
  "key29": "5EeSnDQpsK187RuTkRnVPKTBK7NAnYAztW433HXosheC6oquF9AE1UGHGCsfRmUd7pFdsK4xCvpK1dbM9Knf2GJx",
  "key30": "ZpvWmMRwLZztaDB3DibWaMk9fomJbDSEE2o7yXwrQENPijquhcExYQLttJ8BuEDfu9xPt1gx1GVSff7s2XTNegz",
  "key31": "38iRgueXZsNojpkLFy7VPiiBVgukyGrHsKcSykt4H5VWzN4Rj1sdwCHowQ9k5BmTKNdf8N83kpWhfLYKPEjW2mZR",
  "key32": "2kVrdLFqWqFzatpJFB9iSzzSsUNHE6PEYhB4fJKbJaLiEcgNxPRjTTDPaWW7v7Dxp2hASmQzHv5Zhr7dSab5URpJ",
  "key33": "5LWAA2pnumEsTda9uBXQS8yjcFZK6BKr7PBaBkHLTYomQVmtGELbdtPj82hKBKZenzFqgCcBTidNGGgJ9kSfd9mj",
  "key34": "2VQRSCGWY27FWQjsoro1mN67VweocN7tEq2nhsypLqLXPCS6h88MonHLaon8Gxh82YUq4M56gX8YFYPzL2M51k7j",
  "key35": "y4xU46MUNSAwh5FF9tWoVgsDJLZruCDHaKuEYJxB6wytKYoqEuuwfp5WhgaDNTTvNhaW9camytn9Pi7Xb5e9Bew",
  "key36": "RjGMXGDUxcqC4PUAXnVV2mQ4KiggifFbRjCrHJDrMivR86Qf3oNdVGNtbYcepUThB2eC5ik7GEVhGP63dAPzWgP",
  "key37": "3a17qerqNTm2cxzc5rQUvcg7xqKgMXJ2qT8VAeaqBDYVSHPHAKkru3AcjWUCo1tPchBomsu8PhyURT4nCwB64QVi",
  "key38": "4DYnpjerBn3Mfu3pEkmm3oYzf171qkViNzzjvHmrUnDLBsjNhLpiCdmtHaApxaUf7pBDpiPMaSuFGjWxPiFUfPtZ",
  "key39": "at4HSWbKmNpEEgJuD6ZkqbNNT8oLzEKfKqUBo3KgXh5SV9EthYNqpjggroN8NbuuDFcodnWRMXegfQBCMfczHTP",
  "key40": "2wBgeWKT51zBt43hudZrZZ1MvshpzV69qFriSRkUcMYhXrQ3YppBTeW9BycXLcdgrNyS2Kpv4297RA9agLUtapox"
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
