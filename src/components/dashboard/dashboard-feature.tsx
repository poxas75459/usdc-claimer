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
    "5AvPbka32xr9PW9xD7DxJxQWh7WrNZZLocUUpbXgG4pMTtX7AZ3kK7BuNjMYzfXCeLTVZorCRQ4uxykfWimNiJne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wZhNYF4L78dE9Gn1W5duTG3UMaSWzXUFNP4XVMZBXb3dTiMxHiixoSXWdcvXv8gzCxPJqtvCdKsqr67xqfnDZGk",
  "key1": "3WG27Xc2fmh5hKMmQVGWzSMVKhMqJ454q9Z1VbYR7bDgjWVNKHLmKB65WR5fwnE5UTt9WXL2JgZ9MY42X9SJCW3a",
  "key2": "3CSrkArBE8F1zqAtNkKpzdZjwvgVRisupYZbRNVSbxYevVytMdj3WmRMnngzJNPUrjzDZDmGh5DTzmxngCNnqP8A",
  "key3": "3T6tmX2c5AtXREYtS8FpMEHS54QAS5caCs3zz4MPfUUciXogWEicNvLWWztqRew4pKnq5a6Ez1dJMm4AbZark3Yt",
  "key4": "5XAbKDwX7G191eVMfZfMkUhQkmdnXzJ921yjAFTQs8MP97ybmhAREQPC7haQZviMQkK6PaUGUakpsViA4S7V7UpJ",
  "key5": "3z7hzaRDhhr1CQCoFLKb4j5mR6JaXRT4Rtykho1dHWQ4oGAx7AQemvWrK4bKfk6M6mTNV9uzqFnjdGMbcbsRE3Zn",
  "key6": "4n9BgvD35sKuc3Uy5b5fXyccHA2ETnGipSBQJoacacFAtpRCMgExwWVZD8HmUX2BSFMnQbWqGZ758qgmZgUwgRDK",
  "key7": "3g7cvTqH7c2F1jJHkkherf333kkxQ4CggFDmrJUzGSWxQjZrkHM9c4kTu85ZvcPTiG6U58soxce96nGfifcZ7Yi5",
  "key8": "5M3ChKmuvbExrTY5VPKWptajzpoiXrgDzYy2beGMMyNx2TVJsMdjhkWur18uA7oB1uAYc3JuQphSpKPKJ6ztNWkN",
  "key9": "5umSNuPTDt6MDe8wHBZJViFVEtgigy2ggaEp5FX55bdzzqEgX4RJU5U8ubChervee2Z4CthHgfB7fPXrhYvbkdJF",
  "key10": "2UGVDhSkwXxrXDyA4V9cTgsz9e9UriWWk2nWVY7a1hFmzDhcdKL3xhnLmDqzJPa65xB9E95suaB9uhGNWPfSDcnf",
  "key11": "3UwxoMj3ZVUJ4H4qrx7VHpzhEQZMjTZLTRWbcHDQsRjZeGurEe9CuLfWSkeqhM7Awpk4RZDNdrfbk9FuGnJAPb8z",
  "key12": "22vrSnKakEMzVvmHZc7CSBaExHbykm3H6M3XDgZto6jSN57fWSHnDFzQ9bEkvCRXJoUMXpYQLcKGRWxGKY8EvKsK",
  "key13": "2ZinGm3faU2FkR16BwGMANuJCU2sd1X4JYag9HDsAjRDr3dJnCGY3z8ECeydySdC2jAxFzgwgH6hsLEf4LfMw6d4",
  "key14": "iQR6jHdtjCwFXdscHLYYhrWagvZDNuM3ScC4Cir8noYLvrx2sd5NLiZtFD8aPxBJZtA58En2n5GnrvpegRf7Kis",
  "key15": "5QzP1d5YxTqSkrfPW6KjqBpTs3Q4nb21RRkXowCh8G38ip7kLozDLBztxcsc8aHmpRqSeS9Egv9PEok8tZxVv8Hq",
  "key16": "2X51yxbtSPqWhmL3FGgFRRfQ7gisUfrDFhcn71uYAkyAgj37njawqd4wVRWkgo2M27AYogJmz76MLHgiQwtW9EHV",
  "key17": "61tEz4XXZULufXCfNdcCeeDHjWxTHiPmABLyKsCyZ3Yz2HBXf1kPJoY6gY5bCT4HrfVwT4AuDkoWGtpiayZhWZoV",
  "key18": "4kW5FFB7PspwdTTBRbuJtKassU8D9Yym2CQXBgzGq5SbrgfDrK7TAvwe5qCe3a31FFasXVL67MYddTzs4JgagnZA",
  "key19": "3TBwLcJMFrQZCYo37aTJ4TChohxZjciPDmKxxiBoN4qi1KMxFwSNefmvnK1ynXbT8oUL4TxBPscz5o29ghPeEoCj",
  "key20": "2h1fjodqC3X2aUiLgbAxCweYoapsYCsCSnBoGHaY734V7Rek6gh4KaFsVRm4sF7J1ayLYfNFXNtA2SvEZXg2DfEb",
  "key21": "3XQpZYMJ8oTMAYjwkhVo42eqyMTEkJLXPGz8HD8XkrsDscvNzUwcGQFqEs1w1eV7N5mJYvixcygC2Dh4B6Zu5sn1",
  "key22": "23rkUEh7RzhueVzn97UxuC5wmou9PDSkmwFrtjT9DSqwfw18GbkFTPtBkLP9nLRQGkTRE829ax9ww8v2CWzMT3UA",
  "key23": "3Gdt4bxCBJUfpD2Nvjtn41brMa3v1UtMxxMHYsFRfUKVhRED8E41h9RNeV7NhUaM358HcqzgewYLPtjYWMJy7DVx",
  "key24": "5uD2uw9AEhrbYcp5L8vAiDTh1Se3zRhkEtkBRvfZX8yaQLeQ9FuG5aC2gVGko21AVgsjBi29d7wHtcasXEpNduhE",
  "key25": "5Pdfm6ARuABCP1WewU6qS8QQrGJ9jLV6ugjiBQC1wP9Fmexs4hGVbnqRUghGtJn1NtH3o3tQgRupTsxhSX6SpNgi",
  "key26": "2gRHsduFrYz9kASuY2fUgHh4KoWAz15V4oJDty1DjgtYKUsDcktiCXPFJRpCpCkydEQ3z7y3Z7ZWGNZ2eXfdaD1f",
  "key27": "4ah7VjFuyADKvJwagRDpSiXxgS1dxVJGdqu3xMYJAZVTjpm7SHvSBieXry7kr2UKQ48n9C2eYg9FzRb8RQRgqNTS",
  "key28": "3FKEmi8kBTZKnAAmDora9xP15DoQdKLRWM9N6ztr8KQGf5iVhjqRpRVmByBDDSk8VE7LTUfZPDNRLC2APzpXaPJQ",
  "key29": "5vCm789wK1CVPBXbPC5SpGSRr8AWxVewbsTCHEmoiS2FivE77xVaqp8Pwt4DobVTMq2B1YsGjK7iyE3xadH7fNoD",
  "key30": "39Bc84gE6GzBa4FGUFDb6oSsdbCjdGHD1thKS1Lv2PJpVWBopiE4EcozqaH7uXTN12xL6fSx5RoTDox8td4SvCHz",
  "key31": "4EkjYgTVYwL5pXxxuxGybcHgMZYEsHGeWc5VAhxMNCR1rfZjRq1874MNDadVJFSHXJjhGCPDfkxgfdzN39SDwW7Y",
  "key32": "2mf91co9mctqjCxyuBmfQ79VsmSnBybjkiSkDX3v1wCKBkX8gy2eqsHEUfXBggz2y3jpWb4tBRoYS66F1c1RVPpc"
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
