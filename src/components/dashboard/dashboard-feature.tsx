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
    "545y5z22szd2UqQLQT25whKunQpg39UmE7rLKtfbqw7gGdrK4RwNLvUVcFY1rRHvFJnHsijBh3MHzchnisRuMUEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N6S8cm9XwpW6mxRVpzYy2BFd93tpF1tGbcXP77AEzNa7BhtFnF5vWbqbRCH29zC2o98inbuQ7CdP1vChxHSW1xU",
  "key1": "3naQviBV5cC51N9B1cym6fRTZntptDN4fFfSxHaXVu2iFap7ugW8Fvg19uozeZhUJ7pahbQgrcUyjeNjqYT5TCH8",
  "key2": "2gv6MgBGYDwUVNd8WXCHrpbbERfoyEQ5GwjoPt5Z64hftyHeGmBJGfTukHjv1iSrFfvyLSEHreKz4iTK7wnctTrX",
  "key3": "2VfoYhssAwtYi1gb89NALpaN9f3ksWqKg4kjG59Tk8fAr7Cf2X8HwNf6pkBTkeHEH6AxKHx7Z7mSkaDMPhae8u9b",
  "key4": "5JBvVDNgZU1ViTrBB8516irgy3h2Hf3yDQFGTTorRQnmAirMfrEmkCGNcSNi5RfnGnPd9uJoD33ZsSSZvoRVZkg",
  "key5": "3kKMMaqTmdXKf9s9ozLgudbhRt2d3kUVzLLNoRoRzGnUxSe4RZrGKJGbHyUitGUstzKySxywjC6cRbkVMoRZJvmn",
  "key6": "4FirBfMsq3spVJSfEVQZFVMWnT2RGcgsKt3nR1LFDc2GRd8ZqRCeJtYKVQ5Q3MjX62EVkC6vYxsj2cayAyf12xG6",
  "key7": "5FxqoDQXdPg2GzdMCJBy85b8M1yJWsSWho3k6frM4jWruJQotJwfZbxGtLQ1DSsKb9P7qyGVErwwLUozox55VeHo",
  "key8": "XCjQ8cXdAjiTCH59YFdcpHmJpGvAViP5PNC8FKWxD8y1FVzhASwAH8hb648Fua4CZgGFH51UELdGesxEEkf5R2k",
  "key9": "4u6KVtG7S9fHyiynKNEc1ENcL9H3YKwSv4DVo8UQwwuZgP6XEqpYSBEBVcTJt1LX7nK3n7wpbVNCbXqtWYuVdDKC",
  "key10": "2Fs3sp21VTSFWB7Dm6S2dwsjj1Y8ZCbbYMqR45fgzrVej9e1Xr63z2NzSbaZABqwP8bqrDf1vbRKDShuFEGrniU",
  "key11": "3HK1WiRnDPoNSyoZxwfMRpUthWDBiYXrc9BaDwTEx3HBAhLpMteB1NifP9iSeAJZ1BjWnC6pKt8qHhvUJuXUroyf",
  "key12": "5mctuRo2dqNpPKnsxkDppB9XNuwQfzr6NW9biTZttYUR23LxMjyqq5GZgqLZfmQvdkSkwMj3HGqqc4k2baA39yRn",
  "key13": "2phHZR4UWMXiBE2prwTh4pyrUiutjxhqXbm77BLjnyV5ETwXMVcXD5refHgDqHYw2DR25hkTWLYoLx1MqSDwfyKV",
  "key14": "5QavYAg1njdkTVANJK1hwsyRUSuLdps2Niz4megCVCFeQ4EmgPQb7FbHeqQQgE3b9vuZnGb94ujQPKni2XECyur",
  "key15": "2gfvaiFWGxphPGNw1ZBs3NRtkSABmpTsjiT7VgcMf7ELa5U3ZM2SoHYXgkBV8EteKJEYB2S5VpKNyKRApJRiBJTg",
  "key16": "xbVSeZ4EvBQymb16w7H7ihMQ2sWMtjNRnYKyFfdevcu8zzLqYGmPoBFn7d86VxPuQezWCXrxP4yKgXHHve2DRqX",
  "key17": "3zgTV38ikY5Es2Uciz8TgwD4bsWeLvLUecmaBjW6mo63MwLgn4cba9UCMDktGutTr2SZPhF7i4ycuSNec6jadcK",
  "key18": "abSuNyY24deM8YjpNa4jZxdmTRZiP6sEExobkDWVZPCQ391SCFzWHyG1CrWDYPB4rpRP3LU3DCP6h86MdrQY2do",
  "key19": "547tfhGbkEijxz4TqCT21cuhegm6xxFWcUq5gtWhCg9To6XRTbG9KzQu6L8VJvypzFJbTV4SiPehRkZMpjFiL6Ud",
  "key20": "3depkjJwW7GRGXc4Ka3h5L2vBY24bJ4FoU6Ejnd3bxVMQ2FS3TVbGVjSCwX7hCNsNCByUF4MrpYyBNocxm1MLyva",
  "key21": "5EQ927X9UYdYjaFrDVK1HDodkEdFtqfXkD2GHRNXRVTBxgLqkKVk8AfKZ41Em14Rayxnuag2WmFTin1T79rkP8xR",
  "key22": "3Ha24x9NbFaakRJueeuLe6K1vJCrf3a5AC3M31BZ21dNMWeJB1JkpPrj9sPF1gTTaJnGYHumqNbHf7taEaxXqRfz",
  "key23": "3kx1vNSrciZf51KowzQ9jwH3juSu6rMoYYDCn63P3xYCpmXWSoyjWdukzJ39K42hVgV8WmVs6x578qknkx7HbccG",
  "key24": "5yvChbqAJsactYLvHFFTQrSxCtCLMiiYoJGqSLvZfaW92AiYrWG5ACiLPPNdf6KTt6dt2z42RbtRKtRmV7idVsjR",
  "key25": "iZYBCcwjkMiraLUS3yuUXM7GHynPRDBoQv4kEDWqsRcJu7ffifKAWNxM5BibHvV7K1UcVA7wN2d8WvAYKSRvzcE",
  "key26": "2ar8Cf5NnebmzqE7ZQbsVipxMcgvPFYyMD4eHcAbCSV75sTCNyPkeRTksdbfDcdxNbtDbNMJSk4GSS5P5C7L6bWd",
  "key27": "2XTukDHbNA82BNobuCtF2pph2QbHt8LpXejfBriEY7D2sqNqo1HcPeUPJ84wwwmCoSosRU2359DV3YjDrdz3pfUn",
  "key28": "32w9ajCTKFD1ZGQ6B8gQZejacFS3nJVEBYCZKQcjEPojNnbjmG2qTSf92u3MrsAda4AEKtJ2y8pbuQjBkZNAfH7v"
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
