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
    "2cYMa5GFVXdfuCiYwmKriFDnxepfmPjCsyojsFZrMSPwYU4rNTPhqQssEyXjs3pFvsU1m8Gj1CxhQsuGPBnPtf8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gbfD9dAVaCkJDmPrqbvr4kHjoap1fC62FwPqh5GiUdf4BTnP6f9RN8wZ8C3QsQDXz3NrS13xzF7o748S3soumKH",
  "key1": "GRDwABAZ2WA4WCqfixA8yMQzX312AqwHftPxfiRxFYEbHYUgosHfa4pE1g3aSDcKpd99NGku3iCk9cNz52hM3sm",
  "key2": "3PJvW2VA9jQTozETEAVVBzKxrCzjTQ16RDuTjWsHoDQoYNwU4DaJNgmCaaNApqBD4xKYLEQA6XkkH5SjdJRhXjR9",
  "key3": "2JJSwAs8pDBPnBZK7zSeUCLVBekhnubAgBiFiwv5RoQcrwGwLYjKR2M9gXmNAubM2Ny321iiQoropE422KruVJrQ",
  "key4": "4T57XpQeTjtMzu744tBssfmqArtfYhEx9Te7K9EoEJ6vyX9uuGWp2iTYtUKfGf7NkfyhrkCSUCZCwiYo92a8MwT4",
  "key5": "aM3vPRzMMGPUX4cbbWig6f1tN6oSodDWL8fmwo17BXij3mwRFUNUHpj6hNDPZ2ye9iARt1jLfazcJsVwXxPZ61p",
  "key6": "3Hwa99PymCPXworouSAePQd1R8U18LVKPfxL2wfrVR874Rt2KVWuzaFPyhyG2cAQyRoSGvvXLgZjscVZh67yEeBU",
  "key7": "2A94F35osPycFbg1GAMc5aZv6PUTkjfGvR3mLByHARaMV675eWZbQrv2tizgTzZVj5NuV17FLDApxiMLZVheomAP",
  "key8": "WVSusNpef3tiiJRn25Dms4euic4xgNJzTsdzHCVezxNBdAbnzCvyGoFbHeKCJ33gQ8vUHnXcJvjCWfTcG3LLAiN",
  "key9": "3iPTBmnGrdRuNFRoeRo4g4srjz1ETFNt39kJey2BZgtUd8xL9FwUrh4PRfKdopDmrEqbkqtyvBY8CeXgj5wNoEJa",
  "key10": "2n56AhT5uR5WCUYjPneuKVP9vWAXvX73dMknkBjEoD7WKMrnu3QBVZRcymtZ1bXEpaajqnYuZhjndK74zcc5zT8z",
  "key11": "fP8TegZH1d8c3YxAATQKQLNmqKsJsqa6NF4rgXnFmp6kisFbgswqxh97jgJhizyGu4TUmium1nx6MRFcMNzBrhJ",
  "key12": "3WczbQJpAQiEKmiwe6UtgeUwtzgVpBTdPBMfrsjgKrhq87J4aKwjFq8wDL7jkVJRKqAYm5Kt4UTj9S1ik3ci3k6X",
  "key13": "5bUY72VaJYNgi8arXKQTKWT5pfcihawdq6kQ1krGHa75ohiAUvP4a4Mcn1B6cqJ6EBoWFYWP9UnkLT4ftF1sSBaS",
  "key14": "SrY7eKUqSGSdmGdch9d5Z7U4c1vY6v8hsw8RDgoSXrjvJnM5fab2UL5qPJeq6gwjjbnzYraUmKeqHjfQueVr6us",
  "key15": "3nXp6ZsZr1y4HWTvdSz4jaZLR9orfBryBHtqkm9cmAc3V9rwsga6DrLfwjRDiPuJWzvayJPqwa4Vvb55etBssAG7",
  "key16": "2UvjXm5ihpnja5B2uNC8zAkSwDfxjgWH3QZMtXXjAjBiuQH12NBbLp6kBpwhxT6hVn9tLf6S7EYrUYT4jykTy1jJ",
  "key17": "3PuFzAnQwDsKcGwczayTcideVa7QLC9hdBCDFxhNLT7nCDSAzZYDdyFnaL1VMVeb9qXeyxaKPK3ydPRKJjPDNTV7",
  "key18": "2BkaEo1YdAQ8VRJLfqUz4hGhnCBHHkB5Dgi3TNwhXahHW99P2zPBpH3RXneJ1HwgZNVCMaWHrPukf5vzBU7ZNqKG",
  "key19": "3Zxe9VCc25FNjV1ZycNtygDGUyzY6NPcd9UzwwnDcCiiwRkxvJna6TYbxokMveJUU9uLNPzJQPtKHgJGAoVYb4pp",
  "key20": "4NmZz2HEs997Gzct6TpL8sib2tDWggBWvhnaqh8UNfPiw3Tnpe3pSoSErWk3JcuZ69nYGeKmNV8HTdYuwQf2LnUs",
  "key21": "386dm2syPDoTX1rySPmoCx81YBnaVea27uEunDinn1p56ww26Xu1AkWeHuSnmvq8YPTfmpnvtZcrRrRoV59xiPQD",
  "key22": "5inQHEaxyDyT85scoeZ5nE1wAP3zAdv2ok7dk7qK3a5pEM87mEEGzAHqfpQ49mxxKgzeBwxWLjTcAG7FNySBHX5V",
  "key23": "3U4J371acoNpXTS73byVUJMRqUzBVzPTEqTAoJnvSpaNM9aRrVana5T2c7Asjym5Q3Amf6dLjaFfoYfEZqcKFBwX",
  "key24": "4F2zz7JXqPzYVFeKGv1JpATmy5XQawSGGmd29EAq9kMSPBm3omWvqntYbRzBuFk5GnSJsGS6A7x2hzrSwXXZRKww",
  "key25": "21A9B8XXoruM8tVwitoqPPwhBJAvibCamLo1p1BsLA9iSgaFtikjDmdcUp4W4iBymqA4QVmbZB4u65rnNcpGCpzZ",
  "key26": "5y8euG1b4ZWWSc4Y8Pzx7ZJKxhM1m7qz55ePqNDG5FvgDjVzsyoKdwU3MSgLV8HXN4yPx1vWmPNQjnFkvhuacdkS",
  "key27": "4rDSuqfsPn9dz4ebFESP3vXejNVye26kJDHBaMKU8tAaAeMSHFWKPsKkfXiEvgqyPBWdJJ6zHEPAqD1e81tCFvHW",
  "key28": "3CyquKjyFBGE2EF7CAVYf428KjFk5qehu1jqLFFGiDjsNJaknrCbfFQnkGfvmPDu1ffTTMAVyFvfMzrWD6aBHPa9",
  "key29": "o4FRiGdxVyMxcP72ALSnpfd2LDPPmqgT2FkVDK7DBoSCA1Pg4Dt6FLZaGAy3vxJjHQduA7STjtKbPYzu5mLGRHd",
  "key30": "7TQctNrgyXbzT5YCofb1nvJ3bmLHAntTJpzpXyCFL7BMixAxr57mg9SsxpAkpQYhcxrP9Z3Ew4KauBfVz1Jpmyj"
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
