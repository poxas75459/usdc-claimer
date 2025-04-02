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
    "2VzLN4Zzxrx6CaBiUHrLVu3kC9nMUoDex3EHksRXYGisEWAP2jDW7gLgr4Mqo5u23USmV5hCbtCrqC67PzEA2Qg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gZS1BcYbikPBfMZphXHf2yN263iViJZzAAimM2hN7xwHNJ1Rw2Q9BhLUv7VvsdUHRVuYGSTVzRUrGqi2MT9UcPN",
  "key1": "5BdyXBNykEa1DEqBqNBHycvYsmQpJKio4PeHnTJ2VDiha8t1UzdU733HSvZQgw1eJy52jXSPFjYQBrAhkWH3wWFD",
  "key2": "2eLM7JMFrBYUXSNm4q63BDQTuzi6vRDyk8so1JFmFcuqhvXZBmrbFisXL3ji45FdP7J6YQDWJPBpsvDX61Nudp3V",
  "key3": "42kJkV5i8reT1iE6CFiYohxhjEyeGrvSNAWeZJhoQc8gU51HEsX3Ym8QS84fYmoeAC9NrTFgkWKcJnhPZXHET5bg",
  "key4": "BzcRLM5vxm5r9mdhwz1VAcMAtWTvNrzqS9BwkxuHD5znqygj9uumn8Ac5kkihbupFTeHKMPMmeoFpQRfFKMnNX7",
  "key5": "CuaZXQMkCQzXAya2c9Wn1DhRqd4PUAsrGbrtMoVgC8h2Fy1wYQoXBtofHQ5PppF4M2smLRJq8zqymBdwnnQzwqd",
  "key6": "3foMYUfJYgayAGCkkoBMmNe4f1e7qj4cnbyHFVEdazcHnNY3ruavHgQd1sNMbWDW8FAcvraJaoPP5e8VxLToUFVD",
  "key7": "3ATfd5sGcZJfB6agcUh6fw1wDTCtVx9kkLDPZ5bqshjLmC6y2M7xdghif7vn9B41BkZRx2cTBD4Yx8m4JjiEX2Nr",
  "key8": "5ws5FQPEDJESdSE8SXHpT1MTDNFbVCxW2PBHcGHqhLQXy2Ts9QguKmztZsmKh9wmqraK5bbQBCkwCuGRpKL94pvs",
  "key9": "3cqJz1Y1WX9Vnbj2xkfLRT5Yn5dXMPjutmFpokq6BBbejS9PZC8eux2FBatUWoQM1zTK8mb285eUR27ww9m2Sk2r",
  "key10": "2TMZiL5W5NKoma8fXnjcpVBjAzQq2NwCTjqrrjDs6Lbg1SdPVsxUD6RayigwWkWEkrhDEGpbcEfSrgh1eC464YoW",
  "key11": "2t8ZRwNcZCCJxEUz3crHKdbM1ZC6RWt4G7kV9V5Q2wAh44LM6Phdr36Y9yb1V25UAk38BK4skACKePZagpQnSEcB",
  "key12": "4C2BUJDMh83RnPEdgjHfiH15N48aKa59ygik3W4gUvhJN3WyJRpDhiksi1p4r35WM5t7ntXTUswPnqddV8JP1CJi",
  "key13": "32QQwvrBPEhd8Da4cCKtDzFeQvUEurRAB57jqdGJbisAoDkoDCcpaxKwSRuTSNXyJoWJA4kME3FaeSFZ3W8JQGZG",
  "key14": "rVmWqhdWEBo33NnWtUwQt7gPuvzpMKJeVAELF7v3PKBeq3L2TpFZVrarGbvrXYntTDt98ShLeXJWrdzVKfEcGPy",
  "key15": "4LB5hBQhfYjpDj2yJwkiDTUfQmiqvdTQbea8AveFzm4bF4cHd7qQzLUqzGpqu5kpARtNAbqB91vNR1xpkfRDr68M",
  "key16": "2HN9VCyUqx3FpDPLT9wuUJeWEcUyD7NqA9kRcJRVtBYa3uTRfwdFx8RXRNrHrFMg9heWKbm3Nxet3iH1fRSkHEEZ",
  "key17": "3fWjFhGmZspEyw7YuKeRptj9kUnr25KmoVbS9hHHmcZHLaBTEgKLUUq33F3taDSJPP3ubTbwVdPmRpWqYSUCEjGH",
  "key18": "3kGJz5gSiaZCcUmReZkikN7E2oAzLtiynA81rqCTj7LVaWsyxFBSuNAyhFF9PfWVzfayjQQKUv6n7Kfu2Eri6XpM",
  "key19": "A2uUkz6FhfkzJ7e6DiKazBMVr2ZNJdPjGpesjMk5T6z91hN961mKDBVHA6MEEc3XXhXh82Qvg4mxEWtEfJTAob5",
  "key20": "2z6TV2QqgooXD72MiioBdW4aqbkEkQHD3q8pKoNASZkeg8DWtox25jtEEEfL4gfZ5kpNjKPtkFm79dkyWpf9KiDk",
  "key21": "QtTirbJgneTtqvh3kZnDJbRPX3gNGCixsX4hx1ymsBbmqaiVgroi9KeuqZw7NXhH1PaxwBY8Vm7CKkt1nNpv2Vf",
  "key22": "2kQPAT61vWmgjf5zxqCegJPShVoqJbvCtSnBAwStr5v6cANnN4Lf7kU25J2U6jrUS49nsDcP8VFjq8n73Qpix4KZ",
  "key23": "mMLFUaq3RZxuREW4xfJCzizawk1SBmHuph318ZBtdRpuAsCMfif1voxa2CaQXYje7sev7QYmukNGaEiXttTwbPT",
  "key24": "2k7d1NXLHGrz92bD6n42vF1y9fEtU54XXPCPqaVQkMK92hG4mLyx8cVKyTBoAW9BhEmSBLv55V83qUt4UsqXHfSa",
  "key25": "4k9b25h6tFaApX5ZtQwA6VcPcb2btXR8rMbMiSj93icN1DAoFDaitKtrnVsyBuSYUL1Di1gDCq7edzyLGiL227yx",
  "key26": "5ABvpJutnYjpXAjcRdUe4mtzfqa8bnj8hqkWeZJy1b11bNMCDCjKBFqgPpZJuNg3tEnNKDxgWyWs8o6dC8uNFu8F",
  "key27": "eTMHL1nhE5FFrECj5CmT2M8irawDSXG11bUwyvy7ngX8n2GhT2ryPpuJsYmyVS1XQpn24rma4DFSGGLMcgKaTBD",
  "key28": "2LPKpSWAa1ZhRzp8tEFZyEntxwpgkGWw6ySsH7CwQXXbfLjKM4m67ypYjsSiuS1bj5ThELTHu2QHLeomKXsiQkxi",
  "key29": "3kCM2jj1AsJB9bq3UXBXVRMuvH6Hv5L6i9JyrQ3Yk45W47DuKCihy5ch2c5388CbBUNKF4EcJrvZg1MZDjNN9USh",
  "key30": "23kj3wUz78QFMzbUUsrZ6nXErp28B8JURRtrvkS9HMvbfFqQgiyQ76rt1Cxx8Dksrj2sSvR9UL8ZuFFB84uHWJxF",
  "key31": "52FKpFnZgqyaQDfjEKeUnknGtpuKBUZSUdaE6hdLUKZ4Yni5jXTMT6ZQRKHqsM8ckfEY3C8XAqyzu496XsQQK5L1",
  "key32": "5T9HYMA7HmB6Lr8JqKuZKzdaHqVkXBKL2uWnnFQx5AtEtFWNJ1AX9ebPZSicPfUe7u2qi21LyRXzcDzLAVMmVthr",
  "key33": "45RoAGd6oTkhjRuB44HUmwfpvXw8yGot9bDp3nMU3HLCcX1FLd1pTDSERSZJYXHtWHbuZh8Ug2m23pohFFbpdgJi",
  "key34": "4FWZqvwyqNZ16DFR41obDjGebcrK9bxi293bnRQVxt9NrRM8GF6vNK1PR2qj1Jt6boi3ri8CVHd4LRHexXjoRQty",
  "key35": "5thWpkUnAodxqTd6nRYG28JNxgSTtJSvyokExUScaST1vecke4f1U3rZopsoguu1EAR5jUcgBHzZfDE2rrG1ECG1",
  "key36": "27tTmjJgvoevhkJwgadKpXiyxfTnGhZqW5pFxDB8YiYc8wdzwZWtZs3bVLwXdsBUWX5N9nEAhkdK8huLoRkmizrp",
  "key37": "3hjgCdM3uLrfDnLxcrMMDtdJ1DPVnKDW9iNuxT4aQX7r27yiecXp9NM7L7NeZcRTFYsh6uFa8ZujMrhqwVu1HG6h",
  "key38": "5iFmo6zmSqPJkTNMv9dND2kQvgsEHM17ZAzjuj8FKCvLJtLNje9bHBqvLRMTNyCzpHfscThEJEDtFk9KECSuE7PQ",
  "key39": "3cpSpcboHhpx2Ni5XRp15sXtxVQyu3uUvbkVePg2t93Q8zUQF5JsjsLUymbWRWmkSystKx1iHsUr5QwvwJh9dnKp",
  "key40": "GvnFy475VKyJ6z8q58F9V6F4fFdb4dRe68aHdP8YAHvTWcmkxvUoUs7syr5nPFEkr1kofZVGeKPjFA2nkrYHxm2",
  "key41": "DLuwRBCo5Fu7sZN9Z38zBvoi8vYzGzK3upUY3xTteKZpdbNnwAb6q6bWkKd7rp528LswnQ3v41CP2tecEoDkUSx"
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
