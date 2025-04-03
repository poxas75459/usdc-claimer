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
    "gZbuNCaMuts4QYdt61BUB4T34myR6DjsTB5phjJ1Hw1Acd8k1RSAdaFJwzimmmYPFgALmfM24QgWbbyqzhLFv2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iHDVCwbFjpSc87Pc2Xad8MMUAJb4ruEcWbXFygHTsd3dBMmSQZYw3kWWDh2DxgQNCD6K5CyRQUU79pVG9ok1pJa",
  "key1": "4YrChtDpeMZMCecdKGpPSi1j3ksmKzhdiyg9VqkWYjqFVonBptJ76onvGvKynaKctSAE6EGyzmP98yUQFEMgfAgP",
  "key2": "5vhsq8dhjNSJaRj4iFRAAbzAPfGbHKLHqBR3ybGbyXfz8zWtfhb453Fs5XmYvtEpdkHqj47gfFBjcB6MKi11eQrM",
  "key3": "2C885GK736FLQzp4gRjZHJc23PMhtWAXsey3RZbZGodcFCFJHMLMYLXB9ogKx2ThjGm7z7bDAXnFTFySMND4HUUE",
  "key4": "4y89yauj9WcCM87JL8hoRZDvPiAfmVgK9z6FRmufJDn778YmrGQtz7vyoC33Bn6fW7wu7NyD1Rdk3q6T8KR6E2h7",
  "key5": "5MyWuj6SnQTE56rhgRe5RjURVtmsFthGkeRRgEXj7Xx52fUEoTdAjE4FNbJopDP6pAafECXYrgaHHauUH1xWqxSL",
  "key6": "MPxTDL6oYGXj1gdVcoi1LZu1rVsjNkGgQHtgVHhFgiRKbibaZEqyhUYzob9S8BEqFFGhu99Yk3tzKqCzzhuxFNb",
  "key7": "2cXT7gzzS7gkBPQ2GPFw9mTPq3Ujmh9TEvVz9DGUZM9bZYkVpSffoftkixGV3uVG889KGuJ3QGFjrNeF6ZQ5HvXV",
  "key8": "44T8z5u3HY2hBPESDrQ9EEwuB3LnVR6y29wL2d6dmpTNYCvYCNkTjq8BHUmAgQGLtrEhGJ7Q5qMSZVqfETK7EBry",
  "key9": "5LVw6GESxygP7XtqKUZfmAeq24LsVhbvuv8pBbirJLTXjTg2ezcLavWVL4Nc1mUgKPwbXX2EmpbM6BcSkmhdYBWC",
  "key10": "3EzhcAH6rgerCT4tfeCbiU3eEQMfY7iSuVj46LrqAtxMmbuMnC4qRxQ9Ur6ymJAG1LVxAqHhgF7C9R8z2bRFWyw8",
  "key11": "5YS4ScDdxJFNvDMjkJQJQdPQ3KDhSh4tZVGFxGQVTrusmU8tPfRzweRrSrkr91WJy8ZKTNngPcVNh7SG8i6ABdiD",
  "key12": "46FGx49pYxspYK8EZsDzt7LZr414tdftafSKeoiCPFEcvQttRxBJqD7GeXKqXCzsWejRhyHTVgjo4P2q2oy7nZTw",
  "key13": "2gVdBq1VJ9G3YcyyNMzzPsA6qYoFB2T73nxmboUdxRZQute32Fguujp4W2pLiG8S5DrR4tya4gF61DeYpxPhAprE",
  "key14": "gLacnRy217tGtsnsPCSX79mucBWfNRvvqo88ndrCcoaYMt761HGTAM7pMvMXZxnqbfZP9zQ852NtT26gLaD1e1s",
  "key15": "ojcSugR95d2Acdrk117HdLP2dK6DJihzbcDAXzozFjhovTbnjxeAfAGTPETnvNmRo3EWfSL1uuzVd23jifekLdt",
  "key16": "4PURRsEHXr9kTZVSUKDGCrpBT6riwxHr5edthH3TytVo9Lo8oYiUBQvmbJaUQbCJDcNxkfWSuPGpy1UhdbWdigg3",
  "key17": "3tb28puZ1sB94zuN7MtuM5gSQiE2cSTPwDUMVURTAgfPXMfLnJTy5DbnbKbpZpD1A5iLqwE96nmQ1bmEiexamckw",
  "key18": "2hwF99q6mVbuak8LTokk7ZA7mgFJYy4EW4hsFjFjpkAvKVQxF8APwsXBLQUBdi9pmk7CNf6VxJUocm4NgZdiuxbp",
  "key19": "56BwsquJ2iyYTUbRA592bc6wZPc9GsZHCxXJnzTaPdpiTHGqMDLTEHDNKsDNbPBp8eNgHCtxqWBfNjNhaq3hd33p",
  "key20": "61k6hjZD3GQju5dE2os7tuvzRZiXngHF9SATzNXKZgxHkRYRu4Wexhte1BYPnyMfRoXnkwVWha8ELEM24shMnHtf",
  "key21": "2ZxmeqZsqYzaprCrsSXydhUruXpb4urYbUB4SwD6e6aL5YhpjMZw97BCMdT35zAaebiUKR4HQychGBXZUjLjRKpd",
  "key22": "4kLrEHDWPxtu9ouQ1vbUzLeJWdjAudZNcyGYZKi2aZHKxJzyjkPbPkia3uZZkSpF1zkrgh1ofrJu1z1BmnTurHti",
  "key23": "2r9icsiSkFGRzgqKQfHVzbubuWACZw94LZiW4rcVGYCVC2xhgff7uZGfuJMoFqn6ENQt1bd8MDW79qTKRBLWpD1Q",
  "key24": "2noMnjbcJQFzndtSAK5NSiF5oTdaGS8iUkUrvxWieJ3z6mVoQMTRngmMk5jFtPeXjVC3sKJYznbryg5XiyVJc69Y",
  "key25": "3n2nxUVeEyo7VRD43YsbD9ZQyV7wyeB9aiJePW5AD7ohNa94MJaKXqmufMzaA829te8TwAWX6gN5F7j5cqhSm1FM",
  "key26": "3mcQVSK6mpXQ7x6tjLXP5rW5pdcgNtBEUeH587qmYNfGzkkixUDMBRLH2tFmwhApNb9y3Q4XoR6V533BgsU2nC7Q",
  "key27": "5aPgswN9yzAUueoWVGh9cthXwtATyq8yccipBvZsfF6JEUP5nLwzacFVFznhmXgdLQjHkP9FsSaqjyM7ANC9jMN1",
  "key28": "3pEswq1CfYht8CuzLbUNi7K5JYH4nmQro9NHy6YyqJCYGDS1NqwgYubh4BJBiFREnyZ7v2XY93WYDnPcZzZP8taP",
  "key29": "qM6QW39absPeGsnqcdrktqAbb6eATe3N3YhRDspcPSViYXiTvJuoWjK2HCfkb4ZN9m52eYERGrg5gD2zRPBBYWm",
  "key30": "5hZdW58ZoaCCcV8F1ADYw6YwExRaca3Rso5bswQFMDn1FpjdU96iTYDjt97KJWJuWwK13KiF7ykXZkkLCrcNWWi1",
  "key31": "5TtQupX2TECs8tZ1CidzSSbkD3YzSh1AdM4KD4G1nCRZYrKcir8c7R7P4uEYMfFYyTeLP2kwsjuN17PWGiVasWsq",
  "key32": "4v8knZyPbi5wCYuHNvLYULEekqETLTzNUdY1ikEAUMJbSA7XZvDnrjSgQeF9KQ5LHMV5ZkM7pXhYUDjhyFECrz1T",
  "key33": "5RaX86wzhCfg1dB7jUqJPwX9rQEXS7cvSbD2aQqQNsEJiEseeW68ViipWoNYYyqzx9op6Hhror7wxTAr6voMuQ8i",
  "key34": "54MHz3ZShNug7Mb3jAofX5DgeifK5A3yJcSs6H8NDtg8SM2by7CDPk5egxtm9Hnh4SLTDgeE8GxSrwLpn89PBrZY",
  "key35": "2KrKKJ8oZq6tqdfJpenoSXDHMPFiKNFEhKSysWRgRaDZgZbJqYrqKrocYzmavGszN4KJRgGbw2hfHLFaYbybvnDN",
  "key36": "4YSrjBFSwZ2NxVzibBXpnuD4aX6fTtWkMyaRfPUUho7dG39WiHdbc2HyzWnMYcWLzAzQN45yigfDXUfD45cFRYDA",
  "key37": "2hNxtcBBdreGsa9p3nJdqpbGNaqTA8umubupVRSyWwG7F7gF82AVXMrUunzqhex9E626Bp9GjmBnz8vHzSULxvnP",
  "key38": "2wJ9XgJ26uY2p9zpazP9LSBTFzbrdc4kegBWhmSwGN3gayzJnkZWNXWc53kNKkmuqBoC9fNeN2KW6ekdFpAECvHQ",
  "key39": "5LCehJ8QdUEaTVFrvDFP8BBR2WkmfwqH67bFDowZVzUD7dyjsX1cwFLF1EsU319FUoAx2HGmCxgN1vDQXVCUWhut",
  "key40": "59zBN28fXJQ3bLGRLAACFbmqLTZjQVcKXBoJWNV6Dz8EekrcPhUCDGs2cY7igu57ekPPCE1p5vHXwKnntzrrxGeo",
  "key41": "ASaMi99ZnYWMgv44i9s8zH17CM4FiizV9Vd2vTUva6m3iZwCTDFxrLheYvApvL2Yq7cMF4Lz3jrgCqLY9BybY9J",
  "key42": "UwNEB626oi896crgacCQHsq4mQxs1Ec1KuavToi16ZxrjKipqJFxdbbtDY9mRXTVJBNSdEPHeUYfsqtWxFKTxxd",
  "key43": "4d9ELcZRViTkosn7utHRLbmMVsXRzpPZ6LKT9ZMChYWqhX2dXs6qmM3cn5DMWbi2HsaCW2hzAtuFi1Hsum4NLP9g",
  "key44": "cczNeHUgeNr494mpphUHDi7imv3APaQMHQV5Sh78K8Z72EYtkVcZPEpTx7rKShLkEjQsFrCGQX92dFdAytu9w6b"
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
