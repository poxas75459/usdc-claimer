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
    "3aYTLF7EkX9518NA2XkCyw7XujL7Dpow85key436utwqkXGYKbacnYyCy6oQfW4Btw7AXEEA7pYWMMxz3xThWorE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49zMmhB6UYmmUzKdw5U3de3QH6wvSbNHt9741mpFSMse3hV7Xige7VwzDZA2vvrrnWbBKK6QoDnKv1vKRvxjR5Nu",
  "key1": "4qHokNBSwQphYTknEjCbJ7ic2oREzvjFfgoiKM63jkLf867GmemKvw6WeztCv2Zgzxp2b52sMXNrKpUq9RfBE33p",
  "key2": "3cSRCqFC5w878gTaMWW6Kc9uTUdtXedhEEXo5HiyZBVyVgokxyuxqQYdqi7QjZoNWVzRUfUytmYKGNFV6mCrc5DH",
  "key3": "rxousBRF9Xi9N4dYNVc7RU7CgrH3or9B4NpUAtz6NfRaUuPgSTD6LbRSnVy1cEe1qV7AKJZom9WEfhw9wwTMC6N",
  "key4": "hnCagtGty6WUTsu582QSws7xGhqSqt9Zsp6c7tdLsaGuypgaLUfpf6QG293MiTWJMRvPEbXRD6sA9Ft4niaBhKB",
  "key5": "3ENAbADKNhCvwudmvE8TuAXYhpgrXr8MG3PvHuBbBJ5ENoKZEPQnGXB4mnJ5YJiwMALWMngzCvM1NBShffmwQAR",
  "key6": "5ebMMRAd5yfWaHiGXh81DVGvKRou6bJTcgeXbzdExc76CiFepu9oTGDcVHHNxNAUQYbMJdbVSHt2oPMo74BkjcU8",
  "key7": "5Cb9J91HEDM8ywDXDCKoaFnbJbKkQ5HnmfzX2Kn4EivDDRp1zKWUKgk2evSVRMzYwnAmtWWrzF2CB964nan8F1wB",
  "key8": "oLtHeKokCk23BEKCvrryhwgF8wuSHwwLQivDRRekcVPkNeFeDstthV6qW8CLj3oCDe2TGoNvgTc1SFVdyMfdRc9",
  "key9": "34rAmHfKmFzpXWmVQnb15Ps64jvw58fxuzrcLK2R5F4b41DxuyNXn8gF1Ew4Jmfiz9ovVRKjFgGdGuEyyvBRwr5Y",
  "key10": "5Y6keCmQTdyBdsVVf2wFwuxTv8zv4HRQA2fbp3LRqC8Bbm4VRMhGoAUTw8gjZfgokMAdJpdna4tSKoBVm9Q9SGok",
  "key11": "2Qq83Xa9bAy1aud2CAz99ueK5LDf4Zm6dB4ovGZe17piETCKpm8RJQxJa8qQxXPcQtWM14XpQbvE2UBwaeMHhzH",
  "key12": "62hQaUfMA9Ecc4wfTBfyQqNtCawLhHNNeJLwY7kvRwBiJcduzXPZYxtRmomTNbj4FqcLVknW534upDiikrckFzm2",
  "key13": "5agcX7jpjooAGiKPcFTNHEu8Ldzw3yHSfvMusj5h5LCGec2veVZ9J4FXP184J3ugjKe4ymBRfUMJmUkQ1JcTGz8q",
  "key14": "5KEFSmfDX81mB9gfjLy5upFVF66UZzzMTrQVUyJ7jUo3B3Zam1axYMPS6TUdBZ2x2q59ZN1vJevyU2cMMmmV1jNb",
  "key15": "4BxDHoa7qd6XpQBf2dBwqb4JAVEiQnrbvRrxmM7cELNCFokYEAwmxWrixVn2DLpRb8FF3fuPLB37RtaXGkBYyWTT",
  "key16": "3LnRvhpQV5DZJ6FwSNAkw4QSwd7XNAfQgwpjeZpsbRPR67iZ5295bszLU2Zd9r6RtyJXwHdHaWvwQyKmbPBzsx2m",
  "key17": "45Tfy4bVWkXA8ZY4nJwSt1EJfu7jvSbCkhvED63ZQcqinqqxmFckJT8EV3Kpf2EfLcZoNY7bKL2kAgkeZvWYKx8C",
  "key18": "5oecQA4CZZiyYNyZDJVt7XAL5SaFdot1HYj6tLnsmCdaPRkCauc9LZt1qr3Rt2u9T1p51NzqyLA7YqRLsVKzrY6w",
  "key19": "P81edr1pdhzFpkRYXWxGdCAVqHcgMDqLPDBJkq9W3gCbpuUgW4HWNZrPDMAi3F5QXQ6y8ixuHbp1bTyHh4JLsbw",
  "key20": "2kJDVv7UmNWZwSsy1hjpvH8VhUduNUrTAcqjeiyW8d5KRh7Q3h2XiRc57G5BFMEfSdQweo2EZa7evedpnUpoKnSb",
  "key21": "2PpJEGzWbF2ZgC5BZqc1J3rbphQrcnHpTek3ZNPMcfRtvQoeS5PqdXQUr2pHNwSioTWtXMW6qzVzznNGke1qN41h",
  "key22": "3uoMff29NfH9Jwt1anxT5F6fEwpNY2MP3iWx2KjHeVFmTU8jX6Yk3kFGY51pVkYZkvUSXamuWdu49EmuWzoYuEru",
  "key23": "59QYTpLqWxMrhrpeZyuJLE8MAR7LRB58F2oVfd7CNjakymM5Ma9SzbyQwmnFJWvSaAXYd98qwe2Ts2op8dHpx2mu",
  "key24": "2b8bo1R8eR81phucVtA296Qm3rhqR56qUd96ixuDLMtdLmecV1h7BcfVSD7MbzSYoEacjecu66PyHxb7jY7K83Xp",
  "key25": "f9tjGBhALmHt8jMLZP8DEzEXK5F8EgtFWPtTgaTDUZ7uQTBMce25WmUyLoEJNuKCYQCnMNBMWADwC5rhKdvARJu",
  "key26": "6uiYw8Aj6xg4vYb4zGpXEGfw4giQXe8BDRSHoe6JLi97cHgrFj3j4wcNfi9ENwR9tw3eKUCAU6v7dYpQzxyZnQz",
  "key27": "3Acxmw5CC1fBm7AddVWioayTmqQ2Ht7FNzb1XKAUHX3wUbSzuZpzA6HeamQNWgH4SC9tF6Vcho67RUyC12oWmQzt",
  "key28": "o6JP4ckCM84Ptfk3mKmhKd4MJCvhiDRbJdZmTEZUrx7CMc3Qwg9b3FfnKFUq1vcFMNFuJfZhrXbHKi8LnZD6BEy"
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
