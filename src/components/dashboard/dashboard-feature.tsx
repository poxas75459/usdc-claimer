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
    "5WY5quJoT1es8mjZN5H5621ZeLdgz2SzsJTXbqMXQiV7zDD2XaQZFG7tWdctuR4jYoW2g1kHg8Y4G74CsB75zbHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D1xnjrgcb5E8UdtTkXzMTFSXWwTWfFmn4LzAVEbW5Xner8WfYVuveohr4Z2V8iAG5qFsSfCvZYXYQJqmBQxQyZq",
  "key1": "iGx4kKYbaRjDxvzoA5hNm6ga1CRRnWw3Tyg3UMt5qm8gD5ehaU16C2i3EvcSZ3taoAF1UUWv7TYJAUSPL4ixZdf",
  "key2": "pnRscRQXwrqkodNMytnQUyKdvaNhGAQnaeXzbRL5YNBaHaLejnSbgWomgkBPxuB6KXthvffAmXr4QhRARAyyyP1",
  "key3": "u7PJMfQe5sh2uPuJHi878rzor3tzhWZMN81DsY1tspNUstrqMab1kMMy5itpaQjXAbiuQuVd4ZmnPjgWhvSmmac",
  "key4": "2gmRJ4J6uugrFFRnwWPFxy6NDQdn7kex2f7B2L9RuQF5NRT1E9WMDm12Q7ExHfU8NFwov6sRv5RE7gMZZ45uiFhH",
  "key5": "2wsasuuUv8nckJbJjTgjavf9szNyPWNAiUwm2RZtxJDBiVsiK2W6zGaujZSMWJXz6eK6yrf6nX4f4GTKReKP1txt",
  "key6": "3qyRpTJzQf9hdvMmvz891LfkofNJN7nRpWXxNiShU7BnytFYtxdZuKKEbh9pc1z87KjRbAgKdRnTZi8bPUWT3osV",
  "key7": "2o4yg3Q6nJDFFdYK1yjebysyMyHPvu3VjKY1bq66FdXorNMZ1CeDPVumq7tfZdaZ44A4axqkjCSpWoUkFQQFiqEY",
  "key8": "qmR6iqNz9qyTNh3kysk2sjuYYHtFphiyQoY6hijfRLaWRYxVgyHhbuT4tyqxsKLkkWsZTVknK1q62464Lri6cdw",
  "key9": "3pRZXu4CpN8v5x7FRBDdcEX5MiA39Fp7JyGyNb6b9U5jmd9cqfGE4GSNBqf4pjCA7KibJnPmHhPSoLWGYGVNpRdX",
  "key10": "ynnzjaVAtpRKmr3FEB9raW32J6B9ziYgHcEpneZoiJViNfLDahPM562CmkgzBH5236LZU8bxgDngGHN3jFDEkwk",
  "key11": "3ZScmGUcdQvvCyzit5t3NBVMhiMYf6zUqtbLaXzR9urHPxdgRi48rGZXBvZ1RcnArAxPJqeuh93Mr3E5VnDReS98",
  "key12": "3NuXkRUJPq2NqRCKG1Pu4g1xLJLjNnVHVHTNKwpA1aDk711YKVyzyb8xcTu9k5GYcB3RnWL3Vix8Y2qUU1ddWY6H",
  "key13": "LkZfXyfSNepfa1zwEZttprTsaFYT6Evbt1nezVcfJGCEEjQmqVjd5RYDkB5mxu8F9je4eevfNJgnPXJr6NiTisk",
  "key14": "3tBuoDdhRfNY3tdpJ4sHJSuqcagJyjUiRGgvrxhVnA5kW1kMchwdu2eMHgWHKwYWNnKxmycccW8xzHohPJDAmED9",
  "key15": "3Nh1SoeTukUKrV6bnYezmunSAxYSrAVvghoAw6qcc8P2st6CE6Y5oHyDV4vmQ4szQ8fZGfVWAShYee1qf2wCxgrQ",
  "key16": "2USVrYQcdeAnAQKmxeWK4tUjycRZH3oJP3L9T6NM8eDyYguLxbDyJLBx6Y5BfMJ9SKVqvKgCLNCRQEhHZix6vQnq",
  "key17": "2SZ6Nx9YhzSvjBj6X4X9arkzyZk8bi4vTJ3iXZG6Wy9AK9aKw6r7o21jLhmApjCC89TcW6y3CJRX7BRZH7Qc81dM",
  "key18": "5DyNooaPBV1iAiwawXpdKdctgZLbdp4uKrFYEEbf5FixuMhbxWKxrePbLNjpm3SbZJanifxFNCA87cYq3jJHzeKm",
  "key19": "52vMBtJiMbKWEe9c6ZocFDfsrnPwE889X9PTPRUSj1p9YLqMb9VQMbzdgpF5pFkRSg1gUs9uJRemcZs3vB8N5MFd",
  "key20": "2ZqVnwBRj5krdJHKZwgEKBJzjBcWCZKsjF4QHDfUTCfvvf5qYmVmFirKxsQkw9uengmZdcgD9FY9xviLbsKf1aMn",
  "key21": "2VGbkLuVwUH77FcnwCcXLpwHs22SmGXzwygerFDkEZNV7E37D1xxRrRcL67Lh26hqeh9nrxU8HXGGYizsCrrhWTL",
  "key22": "bw9CRoCgrqKTdNMHyNsVgwFYDroYZ8Nf8iaZ54yDTxU2cnzbyek7DmxJVazLSjqdNChiHkRSVfThaqdh2hMKLpg",
  "key23": "3RYTR7BAJkdQEDW5rU1iYDpNQydKG6jRq5GsH2srvAG2Q9kx1gPfS7B567cf93Z2p9qNsK8VgyBkT7TdvcPHE8mA",
  "key24": "5YgumWsMjdtQUbWUkVjojeZzxcQRomuYbBKmUxEcGGfZFCDmWWGf4hdbLX7pnCjiA4C7t58g2E4zxVDmFA3SVq8a",
  "key25": "2DSyR8Na1jsGf8aH5v6zB8rvy6rJ8fSuXtx13qDbaQyifyqh7mPmMipNQL9GvUoRZAnaF4mwz4VgkCNMmQEiPgfm",
  "key26": "3g2JhULF3b2yjGEcpW2n2u6KAXTzDn6PpX2qH8WSBVz7QiDwT9J6264dFZ9j3UpwzabuEhEeYtm8K24eNSEvGPMi",
  "key27": "4bW57c9GDDcRBvA2w27pv74PW5eWkQPDN6GJUozCKajGqTRnc2eTdqsyfCcS7o1iq7zgPz4FdVVsaZBeUGBmcbmX",
  "key28": "5bwtVfUkm2Bz5yxCeG5LbMpBH5KL9Ujt6yip9Hp3hUHBkB4jA4BZ9FXsH3hmV2ncucweZhBaCnqiw7v5QrbXGJ5V",
  "key29": "ojt2yY8RsDLAyecDS4jerSwqvELpH8PRhyTykHGYWVfzrHTt5n4tLDkYkBCptSWKS9FUvzQ1PedeZkUqWqeHaBb",
  "key30": "4Cvau2rgRzXhnbPwjkgEZf3WqwhJ8BrdJKguidRUzwUNLh8N4vme5HHWC7VHFSsHwjUgx1xG9bCRenUUxhD6LENg",
  "key31": "3RNyj1Sbr3jDokzavSRghozCGHCeHLeFgUJ3M3XwSLJVBBiQN3JE5NpdSxFz9vBUCAFi2Fk8skyZ9CA5aDMGvxXx"
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
