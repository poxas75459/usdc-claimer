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
    "uXXKoqdpqeE12MNrpcL7J6Nyuo7JQqsEvxwKmdHFGoxHvBKkC7megshHDDQoAspF7MPT79NKdy7QJppmRdNEgM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5okzfUDXL8ZiHECXPjSPqpraznUhyZTdPmHk3pdzWmFiCPKWENy5adtjznufyBqmHiqgv1ryrKZ59cQg5A4wXFuK",
  "key1": "vTP5qnJ8jJkPQvJu5ppwxnhgtgZUfSNcMVoFUKfY8gcXaDXn8TRs7L9DkA3rUntiSdbF3DWhQDaB9pXEw2WA42g",
  "key2": "riFoD4RiLnqAinnXdUtFVhimoNeMsmi422w7huv911gBpuunNeHCy2yd5MHBH3DH6BWEiZcSyaCkw7H7PWVYwGg",
  "key3": "3ZiKMUApM69xgAsy7wsa4Rs2jmFBiwTNtwMfUtDjmKpaffXdEePAXtemR7PLVBjhHfJ3EuE7ryL1cj76DwwWJYur",
  "key4": "5aTv29g4pYEsFoPT5F2xKUPmL6dyrdmqWqRv2Jj5giofjdyC6bQrpWmaa3Wefg6GE68atVWn95qwf6wpJTMr9SSD",
  "key5": "4cZ1KQbapJTLaEQHhZ33fQqSHfzFXPwVSB1M2ByYnSy17jLtUNtuKCotM89vtBD3vxHSN7can3N1zuPtxQan3WGu",
  "key6": "3oRETgKvrzxM2kGZroVJYnioAB7awqw9zRFyURFMK4AmSywhBPSYifashSjxy1EY3vxA3Y1DViHh35BAnn29KYkp",
  "key7": "3Jf5XHeVdCEvp6nRPCzucFDrwLB2PPkXsSSGSxT6EosGfJ3vtxP2LWt4yDRe7RNxyc1xHmbc4bVtT6CE4x2mYfs8",
  "key8": "5fuiVttRLenruD1ZW38m37PHEwhoU4tcWvDjZLtrpNJaeyaZVUd667Gm8y2VKsrqMTE412Yb4XJas5ANrKG9CWTP",
  "key9": "3cBt4qi11SDkrxNV8stGtWXwD53x4uPtaFCrqUW8yB2AFGv6EaXZnyZReuea9uC3CjyspRTZ8uRzKsAwLAMH9zUX",
  "key10": "z5JTmGFGjrYptPKT6AwHQ6A5Ft726Pj4ksrvVPTdkG76EfgwV16rEMn7jP7jKmQgm2iKvneNTf3H3HzddMoSRGa",
  "key11": "2TB1FFrQsqArH3XyfVqS5j1xFfmBzpATeR8WSXrMpXbbDWboXTxvxNyz74RXCAMv4Z36X5JrjCfV5UT8JvHfGyLB",
  "key12": "5oNJ6EaYb8kHoaQwvByabFspoy7MAJkGMszm1S4qB1DrxiYQqTD5z5VsmmMsuSgR6SZx99FVvcaauuR9UFC8MwNS",
  "key13": "KiWUXEfgUm2nin6ZZoSmGqahqr92o9NSAtcN1YwaD4yUR6bToaapAzQzcCBsbVpSD1tgmR4rHMtmbuJZe1NNGMX",
  "key14": "T7CMFGuGf59nzoa1QsrDgxq3U2e2utugXFGpwPcuktNgZVvs2WsfPtNQgL73UJRaia7dmyRTRjtkLqNHhUuXiNA",
  "key15": "pU1u295X4FY5cVMaqbEaZiUgBpDn9JgtXQBCYHn8jLRE8qSymENLfVBjY7qDGaK1Uu2vuwcJuckbkfnLBWXHP6d",
  "key16": "4TWB51QRub2EfVy9r4FPvqdYdctvbJsYhRM6EakmG6c9dNDuA1TEEXe1LqrHP9VXzMnoB8mVRPpQLbQYFxVbtJHt",
  "key17": "2s4EsMnZmSa5Lzv79evtgVStrTfC254V17JYNiTgaxz73nsEquujptEKk4ya4E3SWUdeWFzc7MQ4wiQKbjmodFoc",
  "key18": "4xTZiU4ooNpbnZR41xEGvhpBTZq9zxDAGRF2ubBKktumveJud5HPEjZ6iYeW7ad61RrLz7TC4tLzoEZkTopqjSFe",
  "key19": "49Hio1BismU5Tk5XYDRa4Ux7PAoDBe7A3WyxbsrLYa9Lznwxx4RRp8s4E5vZCe428nhxfD1ex6S8286zNYUBsyGZ",
  "key20": "4K4epc4LY7nS8UiZFYkfkVzohiarBhSq48rkAL3qnyLApK4PN7SHMCLUP9DKBTxzkNpKRWBEUN65h3D1w8sGyi7F",
  "key21": "rGAgeoY7CuQqrVij4gNVTNQzaTxt3wsTkZokPtQF2ZEK47PTMQaNPRCUP827Vk91MeZH6rpvy7cYpAnrs7K2iqv",
  "key22": "4MmPx62N1587neLzyUUc4ZeuWmN37zFbjvvBmkn3jPPLajdZDpyo9hrkw6KCNLVwJFxVbFikdRQu2AGLJW66ZH9M",
  "key23": "31iFkgU7cxAEPtBVRoXtdmVuxvj6RzsA23smYBbodoXd7apDgYY3H5EcovQDqjqoASupdqbdBqPCYaUhSmhm1ADQ",
  "key24": "3WmyJtzpnCdNXZQJJRfNgpEqEQVv34CuJv4hzHcwsnLvvJ6qSzanLWErVEg3uYQN9MJuLamUE99cMzddncKAHFi3",
  "key25": "67GHMnEEBL6H22jAWn1wrD8nL3TseRvjf4QDjRvHBPRZtDnsVK7ZNHVeMAVVqgyxJpreuZGZZQUXD8hqhw6zZLBz",
  "key26": "2FLPLbqMvWeS5yqpHPyPzRb8PBpCoN1nXhSnL8kcrJQyeqqQrVtNnpqXuQFxw34X2RnccK3bRi9vHMjhcbinbnya"
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
