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
    "3VktEi8cyusEoVKt2tT7WpDUWt5cd9ZSoejGio213Eg3tBX6ej3HctAZVmojwLuvkYWcDMouFqrmA9Zg979F2REJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KGrsGGL4HRHWB1SCeoKAJaG2kRmi8PUSYHaG31f1BncQVBhPFrkhgfvANG7MpbugmkQLt1YFhH7djmiyTD1cS2x",
  "key1": "3SQR9cBuALTGXEDoYsvt9ZJZzgBpCUFwfcvY3NKaMBgBnYbLFHchK8CD1qGcTFRL2V6ELhrtc1odbwNtrNrWZQVt",
  "key2": "WoxJG4CttNAoC73QxZYSRNEEX1hH3YiP8ZeGpVDhPkoj4ceUiWACQoRN1p1LgTbrPkPZ5SFuf8kWmPM3DZHfhoj",
  "key3": "41h8XrXgA4Jm6JAfLLyHCh6o2V4ji21yoFxojttPRESj3fhmxKPbeGnpz6B4z8LdWajyuu2G9TfeEnZXJXt2BZ49",
  "key4": "sGnfbVxGP3pVqzvqRaqG1nnjRmFQ1LUDBMtHjS6GUCxKXJkYmjf88yx5TmRk4ajVJQLZ8hTkZ76VTDadEwchWsB",
  "key5": "5krvWmVNRbx81ADAmvPsd45JKLHgguQe3SZD7LbWwHmnDdLKDa8o74uWzrohGUTJGCVbHoUmb86uYSUDw2orHA9i",
  "key6": "2DiSwY4mEqyvUYd3HfUDGFYndsbEDsEhweyEpkVdJwEC2PSCb69V5qa5VCs8R52N8rARnQ8PNA4X64DDweNNXDHB",
  "key7": "jpB7MHH7bFPswcxKJHtaZi3xYespKopYKNS2CfqMQeiqTS2KrmQmxxwmE7DBDUiezpPMUvHtsPQ45zdcRL1vgGr",
  "key8": "2zb4qWzpj6N2BXNZhpoM8p6hvBWCy6jt8u2fvRAkCFXYqsKSMXPX3Hrwt1JvE7WCqPffTdPwpMEfmWvQZvAioTy4",
  "key9": "3oU41XbiXgHGJR7qPpDcAQDsLAVZ77qZbhmL6GC8hjvyjP9md1JBaoat3qSTeXE8Dr7waxTHVsyWFbv23h2i8G8g",
  "key10": "5sPyjo4LETCPpta9Wx6BZqxoYVhCbN9WUiwc5DPuGyCFvdTd5zvjgfR3tKQAdcTS5o8rPuPNfxVffTZMMeqWksoZ",
  "key11": "4ey2Yqz7Ysq8vFzmdA9xF1sSWbTzVd1Yj6owbXLzVAJJaDNMFxQbaGunHEn1CEhTwxCFZhJeS8CvQmSGSV3GtwUk",
  "key12": "5AMEgSKrjk3TN8R61DKCdSYCT42xNoaf2oM93qCUQyFZj73pDVDgb5azojkrGvCFrzCzEcYCmijbjq79PhacdBmv",
  "key13": "5b9mbquXGbt77K1hb4US9ad57QDL9kugEDHNZHRgP16tqrvz3n8UjaSv7B4DLuf982JQvXRhR2w139YLe3wqm7N3",
  "key14": "5xh7PL9eXnie4ncPm2aNhRezZGhBCUqvNqNmndPDwanE34K1yottGgYfdVKF9ZGZtQ3jkd3QoFeabkC4MbBMZ51W",
  "key15": "d542CXeH1CsMFtygFqd5K2KShCMkFSxupQAGtC5GS6RY4Ys45V5tqC43ADiRwCpaZgCLLo4SxRea37zFeE56XJQ",
  "key16": "26NGtXBCWLvP6uKAN9R8H72N47pSPnGhxYxzjeyAwaMHvg9mfu1t5mECo1zq6RmtCz3vviiPkhPKafE3eKLxtsYA",
  "key17": "4tP5TNHGgSRjQCCcNGg7EBwyEKhuVeShVBgGQMrJnfsCaxS9EqubeJk8rVkTqoe3jTkRxgRkG6Ft68UxHD65bzf",
  "key18": "3jFD8PUTrXmfHRFMApr7n5ehMz5vzARS18xvNXh1b8HTE7TwEvF9uhPRuB2byuUxwx2BecLWQpd1d1qs9hfAdbwv",
  "key19": "5E2NoWrXEKD9wFuWDbPMFDQ7fo35AoLxhkqrHKoC2p4xPH4MvcZuYmRMXX5qKRDk8XUptMKAAJ9BAAgzevA8MGKm",
  "key20": "HxesCzmPARsE2WXmRvdMG27nrUisujsKFHjLA7iYNcDRdsAC55PD7ah9vbruCwMCWpqcz7EXHFwxjUKvneiyuaJ",
  "key21": "2GYaj97DSJn3AR2mA168JpMh42N7VbxPF2iR9k3XbPLndUjYDJ83MfE5Wg57r8XqtEN1oVwo6hBY7RHm3HD2j4Fb",
  "key22": "2bjam5w5LJfjcgcoxgHC5y6Q3mv1bEwMVVu8CSADFvmm9GR8ja2atkqqBxGpJWsTvFBGzwzBxZTkuoxYy1U5r4PF",
  "key23": "A8Ts35GkxDDKGKTyFoJ9YEDQuwXNAetdkrvScyjRX7eYp1BXakxotnPAZV1cY44Qs1Sjk6wANxSAgXW8bJk13Jy",
  "key24": "3oGJwZm9jkhSWQwqXoTbRWdXP3N4Mb5JRWV62LVmdxgzSpcSrJSHruTLdJnGXbn7dwWvP1zWrTGvEcnfBDAG7pKS",
  "key25": "36BPAaJnQWUMTYLxEQjyTZAkeJrgqXSZRAidbsHN9bY8FftJA7zRq7D8b9jF1Lgefu1ZgMXCSBNNdDcaCcosXmDk",
  "key26": "4Pfzedjim4YDLUi7NzdiWzzViKFYsfh3cbMTaHCfPeZd3Q3eWnbahwJHHLgk6b7CfPXF8PNHMfCrVHQZQSe81NsV"
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
