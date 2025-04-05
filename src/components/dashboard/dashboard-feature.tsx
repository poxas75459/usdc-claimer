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
    "SenYHQF1gmqbHGHLJ9md6fCViwnjin4Gc9TxDtmoaLVf9bVCqDbWKxhnvuYVTGkYfgsgJGZtk8V9kdY42AEKmLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x2PZPPfBYqRQ8HoDhTTKdu6Fmj5zheNeb3CgwrPrSdWbSfLU69DoeZs3MMMGSh6NvTMQ3gsy79upM84yGMtaFUn",
  "key1": "2xMue4d2PHNSBR4uHYTGNGSzHsVsLpDJs4UDbqzhnEDaBqrQAkCinAa1EppvvHNEP7jCRUDp9ByU57z6n9gPpAZE",
  "key2": "nbimXFVa8U17R4vdD1gqcd3vHhopFFg4qdd9wPPzZvPE5UwVLftpTepFytbMRkH6UujjSxd3Lhc81Kz5a16MJ2Z",
  "key3": "PYtVTT25uXfi6EwXoQxBh8jpkqFcUqMe5naCkpbP5VRJDWqStt7GYaLWRPCSWFBCdVqLqLN6S612WV84wpTvNhu",
  "key4": "2HTGz7BEWfBRhQjKs3h2253UGfYZ9o26TC3wYVgjwDtxPNuqKN9hkXvfwGyRBN519Dy5yUiD9yUGCNkmSMTpsLp6",
  "key5": "35Cc9RqbSe5dVt3aiJRo4v5CocXRw1Dou4Myum3ePegxgo82TYfTrSMZXW8nmYpJBE7tqFFszjt1R36bfW1DwDPb",
  "key6": "4qWUzK8azfMCHjzHgvkoKhid99ULxwRc2dGJYRaR5qpAZENKrJnR9C1dRxRxuTvgUmqkNispXK9PWyDzgrSuafEs",
  "key7": "5Wb943VVkFU38u9soA3dh954PZehw8gJrAkCJW5TzdimU5F8iWx3xGuPAJU4oV99FgkKFbLyni4msLXzfLWGTpBz",
  "key8": "5MtF73ampwsguWM5UjBhdwjPtAhcgTcNGx1uTJnBLS5tiDHLDVB5DsR9pxHUtwwqAzLMUG8mTGbBCjLWhE2NhxHn",
  "key9": "2MNxkAmL1u8xkTDcEuUA62xVbdeaee8tfuth6qL46jSJvhCoghtqW5wH2Mofjb5gH8E6HsnBtbkjcu3f2dtqkpLC",
  "key10": "2KpPji31nx6HWzwcuWWfQ2S1QAJT8gmcCBenSPmGihsfDWgpP4j19WyyaqAG23Sm4zZqUoCCKexjZtoh8t1yEiVi",
  "key11": "4j5ZSsXrY8Tz6MthxZG5Q7SxTHYGKRuDRpEWR6wEoguRxrACxRT3hJ5erBSnCpGCHHcLMVeKeryuqVnJccGpuBdv",
  "key12": "21wRUYyxsFtTdRvRimNiBukwHkAq41LPFG8PHvRPw9WZamfk2kzyyG4NkXHqwoPDoJEXvDriNeNaeanaTmt5iuBx",
  "key13": "x5EsNGQB9zdeiS67vJrmC76ogUrruiHkKkCmvB3MrzVi2csULUWVoVtUwDdo81m23ARXJfyCWDJayF2jXax8744",
  "key14": "iRXJw6ninqwqfCvNEnXvS95MnC3vbSqxFq9U2YhpiY1rvkyBoqHkEb3FFFKeTPxngE9TZL7NDmd6ziPDMNSAxhU",
  "key15": "26eFexrFzXG4fprcstWCyeCzVSCieR1a8gP6EiE2p93VWr4pw8ojcTSD5xXczjxdR9EtDrBA1d14etTJnfhm1TWj",
  "key16": "vw3nGJqXicFXeQBXaUvYeTgTbQqksQV5abryuD7pb8yFmnVvHtWzpjRy2bux3rCHTDnqTNN7qHhcMmHa2YfDYTS",
  "key17": "3pcdnFhRDcUAcrVyNrVK3tauuFh7Kmuo8vGKMQdZrAWt5cyk1Qo6V3KH4LoeMTPY4XJAL95ghoRkLbod5wU6WXKV",
  "key18": "2ynF9EgRkPhDnCUKNFEo4KPJc7v4ggqHNHpN5NE15TDGhAvs2EZ3EvT4CUqNvnwsgf4HmcJYCgfMtvnCdPpBRAPX",
  "key19": "qje6HZyUrjWkttFdocyUREXfoe6uGKStHhck21BGcq68QoEG4oa13Trg3ZQrSAee2orT7eBGbu4UzYFkR5LEs4W",
  "key20": "5Q3w7DZSeAeArd1Lpj17nBTeEMF9fwH3rqzx1G1L5tnwnVGBqZwcKpKy7sr29FiTCoyE6A15VG3YLePaS5dKi5WB",
  "key21": "5G4FjUi3pwVXBdQ1yJNMvHh32jBzkC8sF7jmwRK8u1Rwcn3r5QLELoN9EVAiGEGDdCjC2FFNPZWVRNgaQQLmFafi",
  "key22": "4yGNhJt1iW59kEAAhtX8NyCfwW7kkzLQXzoMFV7oJbB5rQ886nMr9bUziQXb3168rjNQDnLT6SrH183U19zVEUbx",
  "key23": "3Sh4khuLtB1cTcCsy2KCyVdraGKMweBY28rJWQWhevjuzhdXqubcK7NjKrzJcMbrupt9xif8Zq4LWPbMKqEX1hZo",
  "key24": "2JkcoDXHNYye91FE7kTDR6Gp5BZ9muk9tjeuKtMLKqUia3qZL9QJ5pw5HsQZLcsavUNei2DtXMnjsAcN8AQPhXgN",
  "key25": "Y6WS5a3jyqkq4MA5iwTBKJoTGgwHpXhb3E4YNko9kp9x8mqqmPYFCCEi5iLVtW4kWuxJhJ59vDW3sSrFCjf8MZr",
  "key26": "2ViYkLW9FSCQRJL2aZbfBN85HVkwHLGAaArBK8gV7aZC1ujQLkM9H5N1X9bb4UAyRLtZymKZpowDJgzq6pWVwReu",
  "key27": "3thai4PXHkrb9rtXVtRb7Wznp8f2zWCAcUmr9wrDwtPvGZJ1vEaKiEopHTejZ3zo8RF9n3kff3AqkjrZJfNy62wn",
  "key28": "5PPQ38cep6zVVWAE5ufjdgaNAZXxkQR973VodSqwqf8FHf29jnp73BZzWny2xcJAysksjXh9QJRJybZhqfVkMcsi",
  "key29": "5mPQHRzH7g9KWFAsULokzQATKBbtz7hvEB6pfsiT3KaQbv1KV9C7YeZhudm4sShGEaJsERpVtWb7TNcmMuNS1GpX",
  "key30": "C1wx8XF8jYQSyYicZPk8VXQ9GAyydxxYA2BzeRc5ZU3kGpjmnG58SBRzG9KPxuPvHkAj3mkjNCx7atJVMbXwXGn",
  "key31": "dje2AE49BA8HoYEj7kgNgP35Aqk7SDDVBCpF3BkmhkWKUm1ouM7eR5NcVhcVqm14V7ERRSbYFQGRZGux5BGhnqk",
  "key32": "3hDkvhCCcPdREUJzSfSpyUbBpvyEWARH2qxUJmiQ3vhKDjkaTMeWQPYmHNmT87toizSD8cs85iDj1NgkpUC2nnTN",
  "key33": "5qF8wEVTuwTAWddzdwNouX36r24wyRWbNTPZWnYif7ipMj2H3ZK1Hw7uucFfD2f13RZSi5NdW7nLhEyCvFy1ykmd",
  "key34": "5NJXWz1y13zfjEy5orgNjoaBRRYJkMaGauij3SgZX4PV5Fav93bFneHoJUfJuV73ahs5tFUTCBDoyPEeXqyjjZC3"
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
