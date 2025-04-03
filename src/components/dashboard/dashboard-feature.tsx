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
    "4s2tDSz1K8WEZqdgDJgWUBn3eWt43XhGBazfkgVygvViWAWYYCc5nhkGCQnyzgi6FiKeLR3hQVx85TUcsso5oqsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SJteaxZwWixjB8PwwnMvvJTvSoDkpnZ32XZaamKa87io643mqwA9J6quCUovRNnEZzrm6rjTNHVAMdFsxr516mb",
  "key1": "2oKEgucax2NCL8dfExJv1haqGtZ6g7dChYPW2BNAKWonbU6xKQ91g97CckpzgUPwPcF5SzMoQapL7rHcALkdhcBX",
  "key2": "5WRT1HeuMDgwMokA6r2Nx62Cpeq7zT2ADVufxfEXFrHuL9hgXy2vY2d4K6vPzpoWWpWdwyRKFqgqusV9Yk6fY6RB",
  "key3": "36cvsBkBjSmHL3mMiy9vaabKndC8DB5bVE5f2HtpoWNXBgTXjCGtciUTszTBNxYN3CDv9odgxA4F8KroWW9P3Ydh",
  "key4": "4ex4L7eRfCm9evStarfKcSB2QySosS9NFwB2BQpUyqqmwejNgWXsB3QqhYdxjVskVmDYccYkxSgxfQAhhngdp8VF",
  "key5": "2FM8JSFY2amPFCXayAR4LFEdUjky8yysPUBFiZNRXZDyFC1kjLbrJinn6Myphx2SzmajGmSQskiRx7fyN7yHK6SG",
  "key6": "RYhJBJAoTFstYrVQRFK9TQcLEeCJfaXLpKpgbicuDxEspUE2rHBHmBQezDP3RPyfiNc1ACwRg4YDDDbuTwMserd",
  "key7": "5i5GhzZBdyqj7DW2ggEceTg2adgCFQrU4zW1fRcZdCpP8EHuZ3Ny447FWUuEWTdr2okMctN7zMpBXaGxAFNiNN5d",
  "key8": "4oVvhHxhqHdzXinWmfhn2UgP8EnbWyRHAuvtMfph171GM3UfMDeWjqKmGHgpSCpSuRKZP3SZUWvnkLA2PBqZRQZA",
  "key9": "5jRnte1ZC591G6iYh99rBm388xQUR1a4PKwhuiDzCR2thMjAccrNp2R7QYCwhgvMzWotoFLQG5jVtXWrKZ6tZVte",
  "key10": "5wJHxvr8R3vZ5NENzNamnnLZpriWDBU8VbFc851u19HvpWUSBAsgAUDffTRc4nKzJgkXEsYTHzbS9fUaYdWrVkkF",
  "key11": "25VojNragk1WbJAh1eosFSBvdGbYgXiD4QVw61zk9ocyvmE6mwkQcsSgBBrVsVsNAcaYcEcY7do4wqzWumA2TLxH",
  "key12": "3gy6XyuJC72QjM17tj6BEPfVcJBYATKPzJDJadnxzQehxgrwXnu9JioJgWgGtdwMvUhC6Ymngwom2JAtXBkX6y4f",
  "key13": "Lqn6U1i2e1Vg4Vvgd4vHQt1MxLANH4fyWbkvSFKMPdCUxr62jRxddw2ASAcFPwfuqVGU7J4FRXVuQaxtW44zn2P",
  "key14": "4ngJYc2oAkrqeoU8DQPvq88wkxSoGFq5iV51cJdmHhaaQ9ii95wq6MhGE9d9TnzBKpXbx2AETtb2kYvf63zezXrj",
  "key15": "3yyfTbMrgJJ5xxuZJhvPQFEBSjuGAvBPF695MUiWdvfY7ynMvjKPkCs1doXDCUvgztyxs7nj1FEyADDgyyy9wEqz",
  "key16": "3CRu8v7Ts8eC95vaFUG529GijezMarq8PwxMyaq5EttXErPNVSM521GXab4jEsngKwVnzjLmzNixoseWVfSrh1Kh",
  "key17": "38NdpfXMXZwAyJ8UkaDV8snDMFBZZaueNEfTHvEHMoFE7BytTdnNdoJ1XgVDTePryUZzaNmMUUQtkM7Q9cswVc19",
  "key18": "cjK6yxayRw3b37x6jGF2pnnLvhPaQySqbQqpstyHuMniggLrmmutNGj9KCwbr1MCN67XJ6fqoVKCiBUdBMrDeDc",
  "key19": "3cLgfXEro2h2CwpWMXDnGYB2E7UKPvM46efSLL2GMrMRFNNVAJP27YusDxxrCaT3sTAoTZs9J7rHdAuEKyEkDxfj",
  "key20": "RnLayurbkoWGdvrWGMEMinGoJamAstp8x4UTQpcDWdpk3jEH6hawsYeZKAQuamwG3RK4S9PrRwRBC788khRWbFo",
  "key21": "62eiteJs7qKHNmFA18LYyLEm7YHkuAaZ7PPx9ponJE2DdfiEA5FMRV9uu6LMejLgwqiWicnrhNj4c87oyJ1ZQWYM",
  "key22": "66uxh5KjmDtes9zHT1bqyRDj2FPhmQZqmvEikwz8SiCUuEjTGP78CenCfQF5wqfrK173z3U8jCvjedSuNQzZu45W",
  "key23": "4NqhBMGxP1HPFCkXgwfzqR6ykjonNGFyjSJAMQoQJqexheHnQVTKccFEiXHhPaPjrt2gydM9FhAvN6dFjznthU3e",
  "key24": "5dLBP4ZeE4n8zRooBgtTLQxM7NkYPpa8pndCPpC91XUyXYR2n8yRto8L1Q6eSiAVxVhZYKqnKQuD3eLzS85AhoDK",
  "key25": "Z8qcDiNc99g7MyZcndaTyJa2N72upFdo7TkSDjo62u625WazPgiwmJus99JgUn3x4BxsGWZUPUvjmhByAV5TZYv",
  "key26": "5uzX5aNvNC1GjTEkLxVDgDLHbgR36gwkNg8WxMWirbVLjF6JCr5q1oNTFP5PsqZxDVvVTMxAbfeeLUjcL914QqmB",
  "key27": "WTCVeLhmh9tGZmuSWZGnKHihDX8BeTkBVeGTjro7d9vTAMcJowhbpEzg94rxeUP6otTB5XHFbjEh3J5Ujc83yfG",
  "key28": "FW2pYVHeKTNh5N63Y8NmwCrLVYDdCv2GAU2bUxNG7KRHQr7iJNkV8mahS4ckL3avG4DYVV3sdXtTnAftjEakw1H",
  "key29": "2oMH5eNqHWDWuGyhFRzSx9jCuTYAjUvWnitwDcEUJddaZqVTuVMS2vt3oGm1fMCfB2MwJocJabXv37qTWF4FH3dE",
  "key30": "4Tm51th8HVCEPdWZBLaZTX3USKhkGnysFfFNeJ31nghgPkPPBEFCRZE9uqugXPX2nSU5EpztfdbD5PqphKVJ4i2X",
  "key31": "5DTDDngXKYrTwW5QrzJZnEiub5pRfy5UD2kPUmG77HB3CqZw7CDorYWVqT2qfkXysrR2tsjqnZgdpU2vbLnhNzKX",
  "key32": "2UVBHHbi5soXX8enijFG7kn5svRCB9vouTmHwNfUBiQSZUKfLg75pJQGe2AbuJ2Q9KiXJbmZMEGFqKfKmj4Ta4g3",
  "key33": "4WqAFxgZbKkr2sDmC4MRjPrSn2CzJxWbE3vLFkS4ZLmtdCk377B4g7GneGxCPeurancTFmqc2WMqpNNEGVrpXk2W",
  "key34": "4VmdUMgsKh8nqcs66cScJ8CriQxBRh1GukhKbK1175vae7t4L51peL3eWGqYkm6Wua1WDMKWTJD1Kq9SBhd8tyze",
  "key35": "439bunxSfH1vG2xXbygpaqDyriLuzufakKhjhEiZLhYQ13pUKqNZRkhVdxHVeUGSCb39K8uGQvKjPbnQFJNpJtaQ"
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
