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
    "3X3L7x3t9fU7HygLHUTeiVV1MeGMSptJk8HeQ2wUpc5Y2t7GijvDp3ViyuFRCq2xjTvsig897YAYHfAoA9MaKeRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34GM1V7AUsL947oErQiTxJsUgycgEWij6mmYhivyNoa8HSR6nuJ5FAVNjCKNAgZorZMLfekkrhqxQwJUUp7qAGg5",
  "key1": "3ZhAqWcecjjZewFjU2Fj2c5tdc5UBAR8uwEyV9mqxeCcXfDtSZBRyQgqdcqGwMsqBafbaux96GiQvU374achSSPD",
  "key2": "zrGaiLsSGstk3oJ431gLwbpoC9VWaB6F35RhZAAqG2bkQC5ch3e7CaNqJVnosD1nfkfTM5Ew3wJoYK58mDqpQ2R",
  "key3": "KUy57ERMSmpxNF4D6YwXyudHK7kNbjfBhTwcbJfuj6wMeBndQagwq5UZEYjcR5qQpDVgxYEnRhvD8A6FaAQkpFm",
  "key4": "3omKgmZzw2dAHkTtjMaErXe3N6TEY5o8R3Hz1FtMH6yZiT8ay323pKF6xK7tgLSgFXgbmrqGqTQgpC4cWQqmZ1xe",
  "key5": "3RZsEsLaqNUwgNGQ9pCJd2dsXG7bxLubeca9aSEPMNmRXnLqeVxjm3LSRTHpckkNng8quUUch2QgDB6JXfBNMuEe",
  "key6": "5vyFEwDf2gSevUJJbFR4XYFy8k3jbb1jjJ2XKdxX9QdEDanz1hGzZ5vQW7Vcn6CP9NSCeVs8Cx6pW8rRoF6tDbas",
  "key7": "3tt8gjnkNMfpSTC219ZgJjgZkikSzL9UxXY6vvyzndNEfqgKcc93ZAkzmnjT2QikrsdVPGf1qk16knWZze444FeJ",
  "key8": "2ZrcGRqHU6tW6ttVzFeT9YMZ7aztvMbhGYk9u8YKDv9A7vbimcYR9imvBN4mJRb3JZuQpg7sVGdp78xYgKnisMBD",
  "key9": "4fzff9ysqrB7BWNC4kh3zgxE4XdAT9rywdmSyW8wKvfy4hzAQGtcT8vqvo23P7ZAjpk1yiAMCdykAYNG3piqd5Jb",
  "key10": "3tMU9ygtkKShKm3hnq4tS7UGteGND2ZcSUpdXo7Gu7d4TGDu6B12XQV5p3Mt4HBETfWn4XZdcqurh1riN3qhMqgW",
  "key11": "3W3eUL8EET4qGvJNfJK1sdFLsUeAkd8J1bFcSgE2ChYFJBEjJ4DXGEKmTuNnfvYsHoPiEhBip9Njkis4PeUyox7M",
  "key12": "S4N3NWVvja1CHK2DkEQDVbfTTJdjRs7FbXU1DPDxHF8KqF31aBcp4YsrqUhKiZbX1aQjtHDckADKA791VssFdYt",
  "key13": "2zk8fhjCc9c3vH3a8UhcMqEuqLMJjUecgxU2taq5vuXB9euqrWtD92xv29ZPGbKzVXQuKoSK2dVjh5QpE7dpZRVz",
  "key14": "2boVrwXoxohxwmvYebJuZN92ZJbergreQWd9pLfa4wLRPgvXLcy2hexo1FntDYLcBKGbMLxa4MUSGexfyfiEnpfE",
  "key15": "2zk53ZQ5ne52JpCgbegqZLfEaBxWNVAzZbaGmYz3CAS3oxMDSubNCRiJxTT7NpXLvNtbgccUDQqwukZ7iSvzSPv7",
  "key16": "3jKcRHAaoJPgDUYfWHHi3uML151nof4ddak563oBxkrCkWw5znYY8XTdyvcJhqy5HhcvZpNpKMQtvPHRmTBeGpRm",
  "key17": "eX5a4v21rDUubo1C2tMaYUo4hGRL4HmYUGvYxHx2HcZ94VEt4iTyuKnYTRLn5RACQaBsKvhJQfdMG3JLaZg3RFB",
  "key18": "5eyHLT2r8YZUD47EYfjLFQmzKTg1JREbFy341x1fjKGdUWsECHe8ozKZBsHhBjYs5teUfQidQUVFNivSEtctGVRP",
  "key19": "zw8bzfw5ZKoZbC6TmuAbz21FcUusZwkVf1HRK5Z4UTpgkzMnNKZYCJMbqmYfbauJVPwntiaWL6H1VopS8sgstWB",
  "key20": "8u4T4tUCaz4KnPxrQsann92h1BTqfFPsTPvZJcXdHrjYdwRHYWjPEAfujvFd2aSczD2vguJu3hiXGt2nt9U8eTb",
  "key21": "4Dmugp8HHkgjXWvUnMMRLaXzg2RwcR4uMUfpdtFt9fD2j1RqmyMnGBkCn6uZf1WkR8pb9JoeRWNAReqqgv6gPN8H",
  "key22": "UrmPxPn5JCDgQHMAKVBAdM3WCGDnyhizHwxP1r98QPtEPzbyy3iWkswgLCXUpR6fkJ3yLchM5c2hCotek9m626b",
  "key23": "qqStzJikERH3QoQdYmHfgMT3Bvb4aKPmLbu8S2p7DRhVeauFVxzUNEtAWM1JXRCiU1nGnNaT9fxW1qdH5K9uRZD",
  "key24": "2zWCT1HANJTaEphSeJqgrpLTRbtQxzc7wENcuaibYWtXaHdLxUpR4mCj97wgVJyPzbm4R8NfEWAsjMQce6YikrVF",
  "key25": "3gkNPrzm2npVCtcACRyFX1gHsF2FMvWodsNHFDYXjJ2Pw8VF7AGEwWDjdUrbFSWRwaUZrJWGWGnT9msQcih8Vr53",
  "key26": "3MQstmaBoEHmoH4NPGEuvQSXws62ujSFjtcT1NRY6X6C2xmmzCCwjRbuQfB84mUUeFYTotS8CmQ6wwhBr2i7nZoE",
  "key27": "4bkPS2RumNcXmvFMZn2Mz8ASE7Gtu1VzNqUgDgbMTXKN7umF3nvu4x5TfKDPWcL39Rt8dmgMJVSkUdap43svwsLJ",
  "key28": "3hwhDhKgNsHwg6qUruTBgy8XvhkzprFBM67FdCstC6Q2BRs8JNNrzVXtwo6HZ5TA66P94TVUAiJns3qps9566xkL",
  "key29": "2XFBhWGscLc16pU3bhU3ZaBocDAXZWs1dj3AWE61SbWyPXPoZzBiWYKY8S3FntDhmvoLcNVisVmBAP8c8Po7xJE5",
  "key30": "4dktGtWGaCo54xuEYs8tV1V32vCjYnTVXsAAaoCBfqARCMC9hvC5ngQ4xnvMH1HgHFd14jBy5PFpz8a1PKGYVWuW"
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
