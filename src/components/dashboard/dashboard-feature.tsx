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
    "gJg9m3Pan91gTppKqaRV3qPMKUutbbxKvHe8gjPfSXS22Ty6BXpUWAdsTKL6jkD1n8ir6TnECu6L72oxL4W44kH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k4NyxEPYqx2DBqP5sfwUCA5uj9Rdja8ftwitiP6VpC74bCJ3vVHjFPrSRgv1HHv6SHrbQqsekKjyBYZ2fVb6cPa",
  "key1": "37jd8tL3r6dEcExTTCxkRscWSxzvGQ62h1opZe4oujAhdjJSorQ6bEExWoVNCBhWtaKkWX5eqYDFvqAqcmAWVnPA",
  "key2": "8QaVQ6oSbgc35UBUyZwtu7zofy7JhsA8iqipSsQhU6Up8LLxqZCBYcQXZSzhcqDKH2HMG5WbERgtvbuZZqWJG8D",
  "key3": "2kmjN2m4ayzyX4gz1kFq7VAxoRz9PJLkoV3jgRADyfbe4LZ2mSXiVfaCj6qtwdKqBXd3TpYRGwkXEQiADY4jF7YS",
  "key4": "248PmumjsZ4oEoB64WcbwMhowGR87SzpspijpekPZc4j6FLaRKMQLL2TNNPXS4PfDQfVknDwXdr1paPjX1SjPVnU",
  "key5": "3rbzVXfTiUrRRPNoJpm2Kxy1Ab18rh91J4Tytjxh2R96EuvvTRqmQyAm3oGXoCFpiBcZ3FVJDSpLweLq4Az8JRa6",
  "key6": "4eoxmBeq2MGDFVtzKUtrZMGN5Yg1dXR6NbYwYf2584kqKecx498qTkURVp8agymkZy5kUv5EjandAdzLdhv4rWe1",
  "key7": "2kyWADrQDsZ5itWNUMGiBYDjaEciTsC679G3e29sG4d2jDSiLNHhyuSCacWobywFCdz2ztbFeik6EUp8kwMdwLtg",
  "key8": "3VMVAthbVrnaT7jpTRfzRmNxQrf7xntSWVWJg9vGz6muxAGKGm7xEhQanut1xUK3GtLmv3MboArF3uCLhUXGkHeL",
  "key9": "8iqjkTri9Z7kij1j9LyvRJYTTmqiNCKtE6xiaudNbn3iNxfEgDUsofDDL99jKAu7PsZrMBk9GVt9nT1dfwXYQrN",
  "key10": "5TZupRTzXFoDqQqd1xHqhVpqA5aDJJGA96E3oU6Q4PKZSFKm2dY5b37oXuJR2gW6S6PcZENDkDsuiqHZoRGnyStt",
  "key11": "4rzNNViirWEjzDWR1qEKm1NLAonTVVQCAffpLRjbKLuNSNhwXwx2ijad61QwqR9CYq2bZSN4L575PN1MqeKuYwD6",
  "key12": "37oebMDiTnx37PbCVBohtJtpnEhDsBQZtYdw1KKBttPwyUkKaLF71Nr7TH4jThaD9bcs1joHtmqFCtihoJDsbEpw",
  "key13": "5zRr86U19hSNrsxA36U5Zdi8jX1HUaeJT96DEByuAPcH5Ng9qKpn1un8SbqGRNgmwokWpwYbt9ia838ENYHuWW5t",
  "key14": "4WP6MTjukjhsEUf248r3kkRk9dE77fJFbvEh9xH32VuyxddXRoY2otQVF8DQneXkyVLZ9pVcig7p3o7iJtnXpTZ7",
  "key15": "xA24kA4x7GSbr6DN2P95jH2xTcDY9inq1VGG4sstQE2e9FAU25ihTq1HrsG7HF7dRciDNhTcqyqYp2U3iMrVjVR",
  "key16": "4Yk7ThwAygLwubkjqD5mWPp8PwxqXc5NjoFuXaRd4yD6tf3GAt7P7L1z8QMU6e4iUUD8bfVE936mGZED2KShGkEK",
  "key17": "7hb3yhxQFhTqwVGk7XQ7K7GEqScrW6mQfnLSaB1t1HvhQr6FV4NSxWfEt7SRcjXy5vbEy6fMeFhGYzK8QjQJFPY",
  "key18": "2XvFT2jz7a6SddViKoWQesVAeujnASQYazAzjJSvi9A9cjkeZwt3yLia8YcS5STePZbxY7q1ELb2stcsimP7G69t",
  "key19": "3is4sk5B8dgBMh6jF4SYEzdFpcshxdjk9vqxzw6U3XU2zawWAZx4tga6dvx73FDMVCLLfx69Jk6CoYzsaVNdhjVr",
  "key20": "DmJA3fKnWZW3y2gcbLRDzRq1yKDbS7gZWgHyTA5WkCHtyTM5KGfnLL67yyuBDU42QzHVuF1Cz93LgBZXoy2wxJM",
  "key21": "4dHEzq56QNtX2dSpfAS2TdCk37Y15rwHeuRznSUhmNCkDTMsPqXZCAELJ2vPSyxvBcUX9ndy5NaSbDVn8eMYfJna",
  "key22": "3Puf1ZGgKAWvjmbN4V8wfvrZca4boZG15FL1xJxQNhqqek5FkMsPoEse4ctyjMC4SFhotuogiL51HR4WSyhx3dDk",
  "key23": "VJsz8JVWAryNRU7oyfZmNZJZ7s1F6eCogt2PhJZH8UebAFgwkuF1TXf8pokhJGkFK4gLCJpQCwX1QaVb92hRR8f",
  "key24": "27hq4uRb5wQkK6o2iYwwJWZhoDQjfmr7TAcfbX5Rwz6rDiFskoccS1Jn5evt9EaxBz3k1XHdkitV3YbZEgzystMi"
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
