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
    "3WaMFJ1DJmGT6ESt4Y69VgcrjFVtrXixe3ttizAoZC665zW5D1wFU1ieqUXEk6ft6q82mZayTdH73LbAG7197mDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CCcHKcyMKqVvxunr7qdQCm2nMrx5pwSz6QwurCHMLHTiPDiFv3PiihMTrerbtVu3xZVCQnp3HyTR9dvxq5b9XBq",
  "key1": "4R6KVdMWtHG1X3cTxFQxfZwha7Qmi6XWUHeNwVsSojvRJcS7zogpJTdz9ZqHPYPt8ujLNDznacJiesHud5vNQ4SC",
  "key2": "hjDTP3KuXDuhKcfDhiQQe9JBQFDPNDVRyh8PZdiD9XTdgPL1jG9p7GLEWKLmszmroandkcvpaYxg6S5JFR7pzLC",
  "key3": "37RJmqnvG9wu6wjfdPfMqZ9ARDJ8eQUFPhts2MRT6qRyrqXSZgR8bWuRv7kwNF1YfzuNAL6XteueTtadUXDXTuJA",
  "key4": "2XCRUPCSZHp2JPw5sKjCASH7FM6udaPeqQV1w5pxkPRwrhRk7V9ZearXnNLHbzuNbhRqyW2SqrbPcVUrdVU9a1p9",
  "key5": "3chJCPXZEeRi9MCqAycgJWKAcpBNvSzvnxscPsbeLbBfT7QoJXi3kZXTF3soRhUyeLdW652g1Qo1ny1Z8VcKPhF6",
  "key6": "2if9Vk9Cnh8CvGpa6H5fss3uQGzdoSbMFedft5NTjcGVnht3iE1n4wpcNhDfiHfdjP4BnjkdbZUXXdH4R1tmAbJy",
  "key7": "5KN1P8ocwQUZ1agojoTufAaoZoLCFsbje9SnE5hGBCkudbwX1Yt3AickUchYCD4sSTA6wDRGmuA6ZihbY6JJ3EU4",
  "key8": "2UjUiWyaLKUbtjV8x4e2RySfr5BS2iYHoXRQ1VT22nWnM1j1rPF5xbe1jB2pwgiXbwAEkN3syYRwyKJpqvqrKh2f",
  "key9": "3HGdHjqzVNa16nyDWkvdmr7A5Lj4muhYvmotJtwbnS9veD6V81d4WELrytgxb4uEzEtGFwVUSTzSrhkqDJc8vkok",
  "key10": "57usjF5ePgieqdeaK8HCV5tCv6qgDvbZdLMKP8Af5eVBRWgNQEt1Qk21gZLPBZrarVEw9d8enpEcMwKHjE6R8UaF",
  "key11": "17tTpZozLUxhsqudZkF1PDocswWgPyAd4gWSbPergRBfdcabSHTMNtiXQF1cufoGYHYG5kkhSE2JKi2dS2n2yi2",
  "key12": "2axsCveRKLzYx1wTNg3GAFkRN1gyEX6vkVcam8FLfPCYS3s4wt3Ap9QteVdT18qjpP4Edq4T45crnj32NrTK5rQp",
  "key13": "3zmk3hDouQS4p1VM87HNLPxyXE7v8cDU8kVy6rp5tokgJDYo145NoWGA7GeB8ZgMuugmLqWWYwsuWKo1jXwS3RE7",
  "key14": "2Yu3YrCMX7mfmwQQTpc5yktrzug2hT1CSV4DJxd6XL1NbwFp1yuswrvyYc6KyJ1hiXZZKP6xX8d2XoXry3PxXryH",
  "key15": "mR9GSbMP9j9o3mzE9R6P8FJHkx4qEWMMZLdvMX95WjF3ndFCJ2DzJCmxMXpeTycnYSS5UVu5oH3bUCjqH7ptyvG",
  "key16": "GjPj7f8HHe7AndmKVtBHN7YKBzs5maKj8FW4nBF1ow6RVJkk7moG2jyc2yuQUqMpco1HJ3FWqhTLgxLRUky97SQ",
  "key17": "2BreNXgwhqD49kdb7XTcHddoz2suiLzrnz4qb1VWrSMxL6RgnVp7s2xq75kBvEVhszHHePMXEDYbw2kdLigCE8EL",
  "key18": "2UywwxqLALYUpqznW4j4rgpzENFDFZyFRRgmqhRXhiGRFP9Z8b31auf4AHXVUUZcFya8CyRuLh2X8R3F8h6uxUWk",
  "key19": "2ExeycwWkfjtWeXeuBA6stxsvypx1DUvB6DKoG8sBDxcgCS7RrtBk1ofV7aseAGUj888ykCA9EC89NBT8sbiC3FK",
  "key20": "nRPubD1c7VwnWap449TQStRtMH8oknZ2kLAVMSeMaR9T7owUzh2Hmz6UUePz8tUJLE5AvxNvGfxbYVG17DnztBY",
  "key21": "4vgXbf1ZDJnDAb2r7SRnk58qnK1XZv92yiuppY2VuRqQyxijN2vxMjD1cv4bWuh9RuRZfGuzAQbVRXQjWeBHnB2n",
  "key22": "4SX1v9CweFV49k3SrHgJ9PuRVZofYztw1sSoyaZyULWKeLYPcXikjahCAbrUamMGyyRpe5MgViRWrj9DqiFxq7f7",
  "key23": "4arMBkFyCCFPtFJ1PRSs2q29KCWSi9twiF5bpj9FT49XNZBQAkZfwwG2mkNKmj1BuA2e9ct4DoCCyLUFt56SFUA5",
  "key24": "2fpPCJrmZcae2vbAK9SZcpnBqcMt3ypQyEfjuqAEr2sVnFR42hbnxPcfka2sNHMgfeHNQHE4kHGEBaW6pYQ6yksJ",
  "key25": "3sx6sUUsadYaFGvQv98pfs7ZGZkdLnqQ3u5txjMHf9BogYefjH8edHnMwZXFwAt6A1XhCxVsoK4kMdRE9hFv4w3z",
  "key26": "4LxHTsELYrAnynVh7N62wGmZXQtg8W7ivWxuHbxd6nAczEGQ9hnZZdgJnBnLbbi12FCPjSeTtNhhJNobZpY1Uc1V",
  "key27": "2Zt27jrsygW7SMgpGahozFYAYsw7RKreZ9KYGcj3QevgZDJtvvT7hmc4XY3LfobyBAZoKzQyvJyyA5btxLegvja7",
  "key28": "36NqBF5BwoZPF8jw3vW2a6RZhhHJBjuTfQH9DaHmgHovFaGRx6ttiHXmH7a6XejgDVdwzKu6Mnp1pT8Ug4GEpw7P",
  "key29": "4qUTW2W2dKTEyFe2M2Y9mUihYDHufsSJGwRyzczAyJqiQBYmbLvGrM6hzR4NdwPxKDqNhQHC4rDAHCUDgBfABbtx",
  "key30": "46bn7q9qSSug44MkK2c2ist1D81WsN5o7qHDPryfCrddf7QZjNgBgEaDiWab88SUeweHZhGS1Gonx9ZHiDaWrwxz",
  "key31": "DDdmgrT3Uf2mJygPDLXiEfEwBLeYMnB7LfiqvzPtwfk34RoTM6h87iUHFL7CeP1AhxdCHQPtiWwiDimU2BS5s4N",
  "key32": "2Arv9hwc6XbecfHsTynm2iJGwFZHkp22sUjbztkjdmyzoNKDYByX6F4Mz2VCHSucz8nahonCwUYFxgoEKqX2Fitf",
  "key33": "4iYgLcc2zL369DpcykFrBicYqZyfPYppdyEztM8Kvi7H6CUieUyeYrZ6cn4dxBdgb1m4wSHdLcWcTb4Jj91g6YSg",
  "key34": "2PEk1Tam6qJ9W7fzFwLdMQWWoTpr7vAzceXhBiTMDsi7v1ufoyzJWE7jAKVNRmohBaubyotvhpBYwRzudfq9AFqC",
  "key35": "5VgH6XfEQKpmYXRJoZHzYgifW1VG2hFBBcncMJGUv21HJDhXNEqA5f4SXb4yE9cDN83t35VhoJwBVWv3oGDK4tro"
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
