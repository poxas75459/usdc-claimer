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
    "4eGrgrBUsuotAKwuhDayikssbLC9ViiMR5uEQhEZeRSUEjyeuQb8oQMfWae9Yc5gXdc5NXnpa7c7p4uGnMkgfxco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CEbRjbN3EACHmEkd5LCP23cit8JXGaFjbQpxgF1kdcfquM7G7R2DStwC86JgT1LCzFNnZHdYX4QVtYchHWzPDc5",
  "key1": "2cJhyG2t2h2sxDQ7wdYoGfvUPkoA921hYQo92S2WZqfpNTWTjW2x8bKRFGE6iVG2347CzsNF2oQyXQ6MRkqRp7EG",
  "key2": "5iuYVGDfShjULRU5VLtzvFmhNxM1SStyQgTrtriYiYCU1uRcdCds8spNAdoUN3WyHSPDrUkQqC1AywbQHrDooD5v",
  "key3": "4cLmzCWWeAMLFZkTWhDX1DL4bMob4M9aptvyPteoUQhJmJhKKsr5YQMhzwWjt5yTmu9x3fb3pv18KaSgaWssh5wg",
  "key4": "rWVmrkTwNvNhtvvtSLbKJbXKzqz52YGAPYB7LV1yiNT2tXTE8TDw9LsdjknSpJuMZAnpG8jDnsrJvAZjFytwyfS",
  "key5": "4rDLwvTobQouRwoqA5JmpeMk4kFc41oiq1dJMuLkcug8no7M8uNuoNstCTZTq3DxyumTbmazi3omZxWSBcnNubu4",
  "key6": "3dgzoX6TmUvxBrPXxphyjLmmCLCGXLnJAn8fdqJPmKAkKkkdb4FKyqJmZcYWjPJ6HRmqSGqmhpQ7BFy8CTgJvgvr",
  "key7": "3hCszGR31KfzrWdT8rbt6hjfiAHw5yBGdcKZdeDK8uc9UxpjaYvdSVCR8H2BFvToVgwH5BgyVKXwWJbA2PMtiBRk",
  "key8": "2dBcJQTNrkzUVtrW2FqYfyp82RG8ttJBCaL9WDxTyZqhBDEe1YSAC69eXz7ygoZNxJb1dpB9ivf3N9DgpCNE9fyK",
  "key9": "cqiSiaXaEWxTMTzMdwfiQ4Np3KdCP5hpgbUfdpKb2jkmyn45i9YuDNDmpTJdvMRzPKdc2NJB1LStZUEgReNNurD",
  "key10": "25Pvp3QrWgMxrZH24mQZ2w8ruvFz7WhMRVY2AqrAuwUsHorcPCUWnUunm9NspspJdRkdQfb9g9fn5NFRXa98LvEE",
  "key11": "4R7RRGZBXokhs6foFzdXeHiwCa4PLXPKw2Ppp4f1Krxazwx3Kw8xjTu6RxjAxHmanUTKuekcuwWWNf26S6Xk9XEc",
  "key12": "4c64Usnbiv4MabaexAqVMr51PmyYLTGSVV4WVdxx1o7bvGKZbhzL4Bgky1dJpvutamPnvSaQqCs58f7BmsrsTZDy",
  "key13": "46PFEQD7nmW327HoaKkgcLDNrpvSwPNZoevkP2K4vRk7SJFLuAPqR3XVuHnsWTTsDA5cR7cQ51y7UbFvSHuAP3q5",
  "key14": "upzdLRy7iXrVX25J2WimnqhHakmwLHwPVuCo3bHHXtNyKNMrxrGkKFMaYqyEqyLTaDAVNBGJvsRWwF5MJGaapQK",
  "key15": "5ruVddeZ67xBqfhWm9K7tVUC6zEK6K9bDRu4vPoJAsxvz5SU5JfmjNzYfgPtvhecmrJdqsD2dHFd93zqkMoGNgju",
  "key16": "4dN2jC9NPMsponKiSrF2AvtW5XjrYnzsrD4zNNh1g4KHqeL4BfdCc4GVb4JtSzA2fMFjXRSis8DnK9X2PrqPnzcE",
  "key17": "3EiWAfexdMZAL3Z47W4UbRBaVhLdf3ugknYcmWbyeGn6PByGhhtV2htH3hZsSsDUHNhEurPQK9Tdr8UHux1QD94G",
  "key18": "2sCiSKjCky1FNyu2cYzD7geyGQHBGDqEw1SaidTn1dkpxk89cdScxF3kZbbhRVfB4GeD1msPc9ABbbkC5TkicaLJ",
  "key19": "3jjdA61jcofXEWarKNCNLZDhnddUrBztfTe5d63S5Nm342E2yRDoo4vs26izR5cBb52y2cfoWnpbFkUALUXZZZkL",
  "key20": "5WsfuwGr4vw46br2mPYd7FSYXZdHieKgkNoDedfsjvMsNAJVXaE8nQUFsKcEYpDFE6gCrzKP9Xb5QhLsbmuAUZyg",
  "key21": "3LdM8P5D48RSUpmS72c5LVypkuvhRZcRsWznPhG8VL299YD2kkV5GQRUPqnW3ZoFtjvZB4dqdwKBFqAtjfJ3roFD",
  "key22": "5wYiDtd3Ziu2ZS9DvZjoiBQkyLnGoSMie3FWcEp9V1kMm7yaq8uxxG3ZTJm5Pvgugt9AT7aoS5R4cZd4gHPdN3v7",
  "key23": "3RhVgRCLVz9f2Mwh2h56m4r9e4tHXMG6ZjDqtGVo8irnkimszHVNwEFP44xX1Xy7vsNjcvoZAAsmL1ApqwNHw4K7",
  "key24": "4t4AafCrU5mr2PbfCDhVCXhvjr8VHm6NU9RBBteWVwmEmwFw1TQGrnn6qBbC4uj6eHe9apwcLz7Wtsy7sGNmyxF7"
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
