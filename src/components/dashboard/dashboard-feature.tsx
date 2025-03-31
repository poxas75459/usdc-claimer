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
    "29ABKxrXxyyHvjTLPu5CFRVc82HB81ApxoqzJncRu73mLxm2qkfvWNybCwVmMfDCvYFjJsEvKgz49vevFyMdKCrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P32DvaVhFAPZJCaWeB1MNpftSJJThqnucE5UJyjC2bRmpMtQ9Spgf4n8EzJBYmHbJYT8zc5tptAt4V2XgjemsGL",
  "key1": "4i5YmpvMKsSooY37r3wMHy9h53zBkgVdnYJ3fY1myjUn2sRwvSiHigHLwBcWULaQvhLwqU4t5pG8aBXQCQuacSzd",
  "key2": "PpnwG7k4MBfR7JfgYX3qkAkdXfFjpg7hFy7c8Cw9yMQQbubD3VRVkujUaozay82DxfMnQj7YSn3G8NdE4Kxk2j4",
  "key3": "3BHJ6SE25P1N48QssvoGrTHb1rosfsC64PpjFJnqpfJ6K2ap9YjpgwCXjGnUtNsyrNrf2TCLyathpp6fRRbnkoXF",
  "key4": "2N5VTSo5mGLKt1dh3PLTDfXSjuQAquqsDodgDkgBXJ4P9UGVa1khbCNBtWCNGFmFAQP4QMWeemYp63SwXMGRiYxo",
  "key5": "3R7WdjMPMMFzfChsnrQQ3NoPMipDcYpNR3ESCrA4YvmsEWRe3ZfErEADa61WZBmKmvJ4oKi6cVqM2VZNXQePJ2E1",
  "key6": "vyuYyVMSYKjp8hHJH6erxjXsB64WG3jbkR72xFwmata834Utb53nEbDK9UFugZ53B29DYV9cTJWPMeKAupqYM2r",
  "key7": "2nQHKMZU5wEwesVad9ibx2UCY9SDisHaQ3hNd8R5pHfQpYen3i9R3MFBrchWh8kAda94jk2h7ob6FxtMi5tzG1g5",
  "key8": "2wqZNjxS51imnbESPhuLvcLVMd1VYiukXfqzo8dooRMr9TZGHCLPrEfVWYHJVtwgCQM8Un7rynB8jJWsg8K55dHJ",
  "key9": "isHzjYUJ3EcR3GVFueihhvHHeq853tLzAUerCME1QCZeiqxUhosPq2fVSMnxvvqtrw29QLmxfpUPkHz1uFBHyXA",
  "key10": "31KrihsevTQFkBQeTKTYkiutjEyJ13odfvMNYgriZP9xozc7eh9kx1vLqxHafDDYs7CodwV3RcaQwVnbcQJ4Awkw",
  "key11": "3vuwEzhEwj4NW5P675QNejJDrozu9yHsaPLhSmKr1Sqymv11a9fDDKfcWX123mBFNrxBAZ7GJhrLUMBFL7nuUzwK",
  "key12": "51ERB9FdMVVRxS9q9uSJXy7BCmqn75aRmwd6DTWbJcYfmToXAjo33mL9ZgpmZpr12Ws189BBDyq3boz8JYqLyMA",
  "key13": "DQRTT4nG4Ld1UV6e5Sdrc3Ga6zXBLr4EzZhtzqrYpFS1KvMLahzQmEuXWNYMiViFtmkviURvScvffQeQi25M7b5",
  "key14": "2yRijX1PfSHh1oZ97Lk91sFj2qjMhqxaKL8L2g2u3rqEbn1tNFaGbvRRTuCu9PNLHCfZuVMnNgWqKJYkNjdWDQTe",
  "key15": "3FdnPnEH6UTrvqBJjYEPnQRV3SKCVPCezcZV3uyhBTy3zYq8ofMS989SnTUA5M1iCFHy25kyjaA4kY2uQjk1coVz",
  "key16": "4kuJ2m2anm8CHWmbaBn77HrcuQUFHN2sgrgP1iJzjX5Kv1StSVQHZfAMHfsAj8NHN7NUCxy9ycqAiditH2chKfCf",
  "key17": "7JnrtSbW8DcFxkgMn7z2AGjmXn11Whw7cpfeAmkaKCriFAL56wmb6xmSicqpJqfADDvmkAnQcfwGPh2frBq57rv",
  "key18": "2YqFDgJuXojeKqWotHpn9hUBc3kpYzHDTsCnqvXbaSB3dB1ENrsVZ6u1oLbWwfD8oJ9k8HT1uPjYB5Z7Dksv6nHH",
  "key19": "F14gjRdhdFYMzN2Hv4XN8us7tLFUyCw36WKwEWMzfhCJrbhdvcQBWB8chVUd3CrppE4xNhRsBF2a9SaM3WuYodt",
  "key20": "3gWdydPfVuMGuzWtMHqSKJhvktd7ycgB1SK24triebhDLyPedVQuD8cZP3nyTUwj6oPHw8RTpRP7nq9eVQSzF7ra",
  "key21": "2pAqbDfKxCvxF72KTw3vKAjs3ci7s3hKpKceBLcohbQCGBKezV8Atqbz4eVVUZSVvXaF1gGsDy2drMoQQhtiFLWe",
  "key22": "36ziUcNetuwWi7TPYZCuopb9eyYR9ZRcLK7vEsmQvfGkYzqJrBtp9Pyg2uBogdo7RWHuocCxcHmdxsVQEjhtHwL2",
  "key23": "Crjhwq9gbSGC4eyijTin9zG95Zs89m8EqT6gjnexCvdYhfy51VbLoj2RZ4B1aASD6XXGqy9KHYkeYhu8Q9WDzQQ",
  "key24": "4ft4PvXxzTsj63NXp8tWM9rSsXAXcrYJ2NKuoX8iyiRNBgoiAv5k7LHywLxGzVDXTCW9qeUD9iCot6ijXAnu8sLM",
  "key25": "63rk73Scgxep6s8hsLE8mqU6X9pfRPq1SaQz225Wn1aNiwksN6fMSeXiqJVZuonqrfqHsdo4hag3Ru1dqrD1212N",
  "key26": "21hjYHUuJnxg6FstdPxwZQqQn8ws1crWK7ARSrwtCXX89hrJ6zTVQ4D7R2VaoLS6RjHM4PnKz4vchPGtE65QkEqT",
  "key27": "5LPY64p6eCoFdJyAxCuuNF7PbtBP2Y2LUerNTcmEaE5wYcx1QeSLy76rLuLFrF6pvMCqbzeJPk6FWC4Yt42okE9i",
  "key28": "oZjauMEv4nuifgQSFi2XRiMqSoZYgGieLZkqGSpqPzta8A2CNS3Hy8ae9p9y6FSZsQmem9Vai2uQ2P84SWfuJfy",
  "key29": "3KiZQJ3hwTgDbxW2qn4VDhV9cMic5jddBzD6eaeoLSKtdsY5KzKiDTxeKrt61J5jfGFZrSDshNTBmYkmas7aQeAp",
  "key30": "4go9amSVz6nsXpLbui5tuusXDyc8FjT2qHqt5AT51pMb8DnwMqv338h4fZYJj2ztyknb42UDdE5G6gb1xdJ8Qmp1",
  "key31": "43LtZSQSqRZtuBYRvvLyeVhfXU1q9PoqTopSrmSchKTz13G5kjmQjrScfsSrNiP9nZQZD1oZoTWuvgGJFtc5427N"
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
