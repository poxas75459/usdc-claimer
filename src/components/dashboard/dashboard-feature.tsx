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
    "3Jo4DrXjGCigpphQ9wHZa8WhsoKckvy5MXpQ3gz5h6iYeqV4XUfwYmYY2GyLQwYKmBxkZrPt5MXCDTHtJsdyWr2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47aGNb7KCZeiYuivyoZAZ3pDFNN3UhiEH43gKMrBTyhonBXkNWSkdgboVqYTjzuBKv6FRu5G7igKg7aLHCeWx7vy",
  "key1": "5ZYJ7PX8WbC2W1fKdrT9RngkicCBSMEtXgagkFoDb52ywYoCLNPw2Lgq5g7B1n4brFkYfF87U9V7cRpBoD76Rjou",
  "key2": "66TXcMRhiLe8CHsyzqCb9saazBi6axWTFNLZTup33q3ob15q1WmyXgfum9G9JVNbZgRTL8e7Nr5hbLytwQcW6qxM",
  "key3": "U11nM2editxDCswZHGqkap5p14Y1MhiejLGnuyjJBCtk2jVins6KWZ6hGXGCN5WqECVGaXnfBpQRzaWpMtrm4DH",
  "key4": "4ZRra8gSvxFnmpMtuKiFYEugm712Sp7m7Sqnw9ccRee6M14sK4KTEgsaRzcAHCvo4cGqoKEofyPZL5smA6EQfvk5",
  "key5": "22cjbW6ozNRbXWQdDNzFkdUHaYBQ5psdrwboFPxGrGS3wjkETJW97Ev4UMnnDb49FSFrdv66onwbpPzRXKQFJLiw",
  "key6": "26UCtf7z8qtJECfuH1AWUncNNQnQTaBq8x66L6gBPVRsHZLnEErVoPccfFizVMsxCmYEHVY679yUrm3DAaxVcZeU",
  "key7": "e4R22eJYPxWbFHFKxx9Hv5oxpehrai6YKv3GseBJ5X1o3zxEPTM1X36bdAyJGGmVTSssxNG8ksqQf8cszbs9R3s",
  "key8": "3szZqniATRSnninNeBdUq1ndAufXZoKCWEFCsZJFTcWEM9c5MvpbxJwGxrDCc6VKfBaNS3hadDdmQHA7figAM37K",
  "key9": "67jny3dKkgqK7SihwZ695dqD1pDEhNBhUXbEMYSLLjbXDkTwjx1JkPPwDAJWEWiVQjk9nM1GZMBsZ24TBNpY15YP",
  "key10": "3Lgt2Rcgnn7eig177orhYpB6b35kdaYarxLUZdnKWkSptHzntbFUm3CV96HPGhgyUkz4e6S1yqmR2N9B6X51U8CE",
  "key11": "4MWaht9ut5bDvThzsW9iGiZur1rJD4DHZgYY3XGNz4KAn4mhJf74RyuG4BmEv2vUGQzBojXC1juAV8fKB4AnGRmH",
  "key12": "375x3NnDABtzGqMx8CQtm3ZgAX71XtvQSySKbnK9AhWkjkPy414RkALGF2kHMXYzd6crCHmK86LCcTQm2DaV39j9",
  "key13": "3kp5aCNHkoGMNyCLK3R582rgWrXLbyznwqfWJhz8o6cVZBckBmeNBuF4DLTiHXCm3kDodFW7PgKgrc5tAwY4c5MN",
  "key14": "4z3rXX19qSEcj75axaaayrQCopuJqWeyHrrUKeGpbRMYndbXcBU9UoxZt55e9XMPTE8Kgq8DLb8eNV6Pq5wa1T9W",
  "key15": "3BsksU6E6Ljm7T9DRGgpnneAsyuuoGZiEwAMNNMjTBcJnu8A7CcJGaPqjbkaaFe7uHJPJGGAdfhnPmuRghLXpTho",
  "key16": "2v13xMyL4ZpFJ9d4qaUZLK66isKrbbiQSQ9B3EfmmbyjG1nyQJfDFW9JQbcgKfqyCYivsut3bmVqSmruW29TopTf",
  "key17": "3xMnnRRqQJQTVaEXiBuwCGx6jJhCwMBu2uiVeGH2AwTPtkbrKPwFC5dV185yYbcQHuWVxkV7iP5XFRwNm85EJtpM",
  "key18": "2E1U2DxLLUyqenpVi7W621VQjMRXS42ECt5QnTR4hTLfvXZPyy2igeNSH5yuYb81FZLHWU7ymS92DRZuFHoTqbAS",
  "key19": "bs2RKLU9kGRXb6qNkkJHoSjvxgWGRWA3njEsM4UCsmv4VBTBoZAg3mMqxcSabWRrfPhVPZFVDboWRRTgpwbxSyv",
  "key20": "42tEFCWJoNbLhitXJ6vE8GWX9rSVo8wZZNahG74M27BBUJY2yerQHWMQd4WeQuyXHRC3387BaPxpVErzTamtiBLA",
  "key21": "3gxuS3uRjeH5yhFeGW6KFZv98jQnfUckxB4KYL9US9QipsevmM7BBQRYQJJKtuSLDG715kNtSiPsGXqGgCY72bqv",
  "key22": "3Q4t41PEQBdefsoXA4QKT1ddwnkomTrpUQwVdPtUHpit5BkX68BH7W76FS7ruoN2BpawH7BEKeJCnvLj4VS8gkBE",
  "key23": "5VPj8BDbPPzkEpXz78BD1EWMko8JzHd59qN6Zyyo9n3hsSg9unZZDfhYm3yXwayCDHnrgPjBZ2xEWhQRPRZHJWTc",
  "key24": "2qCH7yGvv58TUKgXp8NncfjkuHLMJPzNYWcuYJ83ig3vmdSFGyfMbZXFuMUccSjAnVsjyMuSxSAZ6Ns1fwcpz8AV",
  "key25": "2RorAaGavcmLZMfSkUPJ3Btd65oaQB5a9hFxDTGKoCgeQEJY8KugNf7mCh1rToBfUvQMiwZ1VPfw5o6FQWMVf4nb",
  "key26": "29AUkKqJ1DbS7vmUGHBLZfDyJdh2WnEmbf6vw6EcwRupqofUGMPfQw3hPXETGkC6sJKL6BpNj12AeMMxQUujmwPh"
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
