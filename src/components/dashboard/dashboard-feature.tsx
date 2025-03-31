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
    "q1Ao1ADNj6oXDqXnEfEjbBRxYeuoc96UBUZtKApoAeP3diH3HNNVp9QP1yvg9dQ4SP1T9NVkMhyKmKN98ZWSJck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42pGpYVV4Md4EDoUuH4XnDjL3trB7ARpD68WTNRM8Dy9wBvdXxEk5iYyMEWQ8AWgvVQYKxgqxSgkikTr9X7sMcWK",
  "key1": "2HS8s1oMJNMsLZPS1VDjiZYdoVWgdspgmyQLhthaCjYXZy8KpEB3wCFWtp63nEVyUQMTD9kLKsfeTmgRScs8Qr4W",
  "key2": "2XT7NcMzBSrL2XVJmCR7tnBZ1U1A9KGnrxFS8YmXBfh6n1GLhs76EYR5D3HF1UVNdQbNpchuwqPfCJ8aiwvSS2Fw",
  "key3": "Vu6c1LPHNDRR5mSD1fMic99VLihQeK2wyjLfazYCZxBP63Y33j8xTzLXaGxJEFqXbLf6CvXm1qxwddaJniWHRf6",
  "key4": "3eEuF7LvmHmGWqR2hLHiYTuLCSKW8CjCCz9dNh67A1DVbQzxrp99LXwPtRGvYnskfvYdxAwaM7T5htRa7jFTuojY",
  "key5": "54B6yQ89s6XVxEBLQnuaBCGzuDbZRKXacqLhhGMdVHNygqsDvJXnyJrGSdrFDxCgy9YK6v5SDRa969QZgNoAmspQ",
  "key6": "73Gg4Vgmbzd13UbGgLcK6xhMUPeQ1Xbt7yvWnZ3zsB5ba2maaSfocCHQL8ZXKEoA1Z8F9qAuoEXY2e1YzfGteGk",
  "key7": "4fdQaesE2F5n5duwgGBPvZzYfwy6Yh85RTnTkptbCJeVQHYgBVemxXXRM8B5bfYeZRMy2bEjKyNJyL3AjMnqRF5z",
  "key8": "22L85xfSGJV3nC2HU2eW1aApLzMRfYFxoCzztAKd7Rc4prcmxzTHnjDNetLQUm5FLjZXwPPKvMqgXgy3xacQc7Ep",
  "key9": "5GPz4BEF2ANQENkovNzFV7wizxL2MzBeyL1Pj9C6nkcX1mc1wnPnDeCNb2pYbifsFzyuuG6YHzpniyPwUcs9hHE9",
  "key10": "N2ErQHdcLQc2GFpRoh22uLWEKLPTDw68hnCJQm3rFDe3waQi819AiV48ozRE313L9TtMpmpv641fBYWbuGsuFJt",
  "key11": "3wUELKp6ARP9zxiSfgQPVecA9exDb8Zo5eqjKvb1jwHdc3xD6swi5z7nqQiAH5wM8cTUETctgyu9wKe1DhoUDFqr",
  "key12": "5LUWVdCTQcquBeqsLUpozRRKZsyoR1qzYE7b5i6Yy7fGJtxnJkcfRgwHNSkppqunDn7bDi9tASzGoJSReAAPVC4C",
  "key13": "4jdy8kP7V7Ww4mYGv3VJL88dNxx1rBofMJzQhfoj53RLUzRGLkHy5Ffx1mKX7FZKwmFicXDh7ewTPqR8G8m6N75H",
  "key14": "3PccjAGvetvAuqdRoZwApCVpNCdjg7VvURpD9PWiDfg712HixQajgVLqEJnFuPUc9jy9QJysjYMSzvuRbaQwoCNq",
  "key15": "61JDtrHXrt5u2SRajHMa5RaJDbjXwAZ52avxdUAr2eCdV1PZ9gv6dGjupsRGTJ5tytrjywMviUTNbaXzR8a5DmY7",
  "key16": "2FVAXm24uWrcNchiiQtv948KTv3LmJzpy3Jrz2uD8JPAberMPnerzMNDzFNQ6MKGbSMy8HsfjjLP19xW1ndAABpC",
  "key17": "4E4AvQkUD3Usn7h7L2gRoigqwsV5EgEt7rrm1Y8zvSsLudurTAYeQamBAhR47w7YNxSrsTJBCRzd6v2mnWqXX4eW",
  "key18": "2ff6ZVMsDPFRKWpiy6c5KnfURQpCtM94yBcDa95TVoAG31PVdta6RU1Uj12d4FLW96emdEapLHFDXBenmpzUMcnE",
  "key19": "3UwYyBhSZXHYu5uk56VHMcnG4FpGM8Xi44TSAw3DtLrX4Y3neqFGzfY9ieC36rHHK3Z1xZ6Sc8hkBAs69cAGPNqu",
  "key20": "2rXJmnQQJEVfkW6xD3WMWvmja7BJwgQHGmJ4D3y19WwS1wTrbDw9CnxpyXwfRmbn6p7XKGHR7Ys5ZKP94o5mzxQT",
  "key21": "TPxPmf15sDgisE7atYnu1sMYBP8N8sRqyHoAosLGFmgJrXDufYEkG5vqK4SN9hNtZPznqJYGUmYNv9TLoRVwFKc",
  "key22": "vHAeVe6HkdPZLvMK8KHdphAgmS9GGuBmTp4LJJvLr77M1eHa8tXBoXMtuoDY9t18neSxtTwRV9Kji1iH1hAotSe",
  "key23": "4WvsebCPf39VveHLnUeRn2w76WmhpRPmQbFoPpbkGW7jagPDofq1LoCW4YF7EgHisSrqATDAZDxcG8DJ37yfB6Qy",
  "key24": "5m7xVTv9yGEq9SxwZzRSGu229sufGB9UpD9mFobkUvzJU9RaLphqcho9ptdWhD6ffKqEvRy7jEHTgB2ETkaxZyEv",
  "key25": "5R8F7vkkdkiixd4qfjpUAXVQrLh7kJXCdPYXG68DT4brykcqGr7VMsvEnc8jMuTjnqo7LkZD5aZ3GsvrHZdcJrzd"
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
