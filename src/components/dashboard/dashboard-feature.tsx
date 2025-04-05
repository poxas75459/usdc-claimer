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
    "5ghf4YTVrd2PGMj5NjdWAW5SPniRdpNQRxC8bXGGvn6BoNrwfsJKvPF2n8VGe1TwzLN8GC1XyYHBWzop5kG5tsfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TnPP2KDuLfA17FCPEq1f2vTpc7MB4aTac9UXnQHpSwXyvMudKzjAgGoTdzzqbEwcaWsDxYc57cbFgDrUjRqFTf9",
  "key1": "2dTcNrWF2NfYwYwwdeGTmWqzkEmaf95cRaEFXWU88Ln7qdVgy9zLeSuUJRxVzkmuc7zH41n7BHhs7wyA7rNKUY1E",
  "key2": "2SLkYALyWRfTgY4wAqDWcvb3ZW3XyBdzXqFZPXS1SNyjh5KEJ5H5odZkqPB8usZf9rZ4qH7xjpNEieHjR1SqYTcv",
  "key3": "2J9SCY8jHvaxFmmNxYDfSirnJwyJ8oozn9wDKvSp6BAt8GDeJba2YR2JLA54VVyS391jkWcLZ7ceirctwkJXBy7w",
  "key4": "B1wD9c1kzSxPCK5rHnmFeNL174ThBaaZ5vQymwXMJnU2LjzagR9znpm8hrKLjvh474aRCmDeT3f78rJBdqHPoUH",
  "key5": "r1NT4WCWdSCDax5oQaazs8CZQA2HMgQTr2jydx1RGzpsuC7ehsiC1A2BGkZziiq4h5myUYEoe4r7aLWn6cGA6kG",
  "key6": "2FNkP6qK3UBMANSZJUUeMa4juw1Bk1KwsigKDwGbvWL5GbXoZai1kgCgiSLdKynAMuhoZn58fLTFZVTftxg5udHX",
  "key7": "3zdrHTvotqzF6BoT2dBm1Kzz9Y6uegyPH6XPj6s9mPaGxX5hn7DKwiaBoehBpksmRemUdrVryHgBi9sj8ufqewA1",
  "key8": "5BFkWPoYTXKnxz8Vmn741btny2xjeLZZBLBkXf7i9uP6MxNdEJkE1vCH3cPRsPkySYe1hqx7HVdtj1KBYVT51om2",
  "key9": "4DvN6Yoe2xe7DXwhekBPCPds1ewfuUmmEtX6pmEyWJRjWAJaEuwGbZdz7btsJxTrygVGbCZynW6MKixUj5qDzkEZ",
  "key10": "4qiNPKaFF5anyEW3ytZzZ4jtEBcgEBwNBCdFF55AWjSZbYtDAYA3bSk6wYnTSL6pbGmM5BNo6r1fyJqjxsiNS6At",
  "key11": "4FKukEu6RToNFJQ6qTmZeW8Svr9BX5rDTnyv1BkLfrdst5Mh1xYTWT1QJADHyjrNnC2auoZTM8D3sfzVpiPMLrgt",
  "key12": "vmZ5K88pn152Yh2MGMqxnyRrV17v5bCviAhB7kTg7PkTxR1hgvGECLcBKCtRrbEfBttJVQrDYNGmBTRweS6HcB7",
  "key13": "2Nn9BxooR7HL44fnthRXtvFHvqFYKoQVHZDHZMvzrdoiuGk6QVxKeN63RYSFkBeu2KcktQhghzfiBxuBNhsLzejq",
  "key14": "4aKy1XnTjeKoKnnJ9bNx4w7qHxE7wWB48zU9dWMxwG3FpWhMjXYih4LhjBo4b34GMg6BJJ3bokPCGH6Jt2ueSNKm",
  "key15": "2f4MZE2cpyQb6TCjenP9dZawC8SaFBmWUY8jjR82tYSwXc5dam58jbUc9FioYtgrBuYHVz6sQCjNTN377MCGdyqR",
  "key16": "Q6roCHEkv1GZZANfPgxBeMqWKZfsbCVAEZQPWXS4QE5fnTr5ppJ6bJ29K5MT4vuDPNiNfyTDNcsPsApPZDuqmgQ",
  "key17": "rjvZRRMCecFAopUxQoD3xRsCohMFpNs2GBR74VxDMxdHQrXDj1GYiMnLReNgu2KcRoLxJPsUnxvkBKRkf54UVMf",
  "key18": "3ji9VoPCza3WFFW7Qm6SEEapv8Jhncu7gugwRxnyEbXfwsusyYGrzzdSsvX8HUhSdxBFTJLYg3RJ4NSUdZiHGv7L",
  "key19": "5rm961iuu9bSgk6zs31UB2aKG3SCHdd7CNHANJffuPAg8ypdECUyW9NMY6G9FJptbhviPycbCcfQzTKf2u417GQR",
  "key20": "5LsYsY2U1szgfm4P8ktx2srtsq5HYR4UTPDEcApaTchMQdW1mXdCESRxfZ3ZbPkSGTiB288tZ6FzXjZyEhZ9tcPC",
  "key21": "28azgjuQo8nnrjaQ8RxjbxBzMHemq5juAcJBE2Vp4KPRvfbXfR6n67sLKNFwg6kGGNPys7fd48KyLBRrbBHUihnc",
  "key22": "5cSHM1XG81cXuEqLtTXnuQzXGWMds13MtmecreqKQ7xdyxaq5Kz5CTcMHyyaVVJcpkCby8DDLNWXP7bt6uP86NHt",
  "key23": "3NBNeDW8qM2eshVjWM3hV6j3UpPpRuNYuiBWMjopqmvJ1ju6VX5Dx5AS6K3gmAKirXE6EDrqNvDCFYCDpwFMuMSD",
  "key24": "xDoE2EChWFJJ5VYnmRd6p7eQkYvTcs8dkSDHeLWw5aA5AoB7cKynjTebHBoAbS2QqadPSHam87ksZyiRMWCf1Xg",
  "key25": "vqx2uUUoQGwXD7wVBhDBc1gU3XMXt7Dka9QdwDA66ejXWPwMqw7wTpZs2pZizt8PuQ7W2CSFzbuLHt7e3njCG7v",
  "key26": "5B4GBUttqazng37on95tQ8dRmgqF9e8GcbFwfzVuVabcpvJNVksM621gE6prNzrFHk8H7LUiiS9HUtRDRrgBuKKT",
  "key27": "zDW6mNXYNb2CMPa9CUrxLaY4ZYjHNchNcZ3v86vxbnXwGRadEVAkmqNQotMJJDkomsr7rgYhbnmF7WWvKB6SnyB",
  "key28": "24jejLCRECnDwo3dowKPNfGDpXv1Hp1J7zYZsQqSb2iwkxrvsmi3b4RnuxB8ZmCNaXwUMp2kznMXUxnTvuRMSJAQ",
  "key29": "37oqJgziRCuXUjVNw81HUrF3CCYDrw4nLbRQAJCDRWHuackHs5E3fCHZ4oKgCFaRNyag6WThNapCFmvJDsAk6jG6",
  "key30": "8mSgesNxs9YtBVovWvEGs6gqgDbNry62Y21b6UjCxWUmN5YzC35HTwtgr8r4tKr2iivq6qRbcw6z5md9KbdTsGM"
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
