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
    "5gTGERmgtp15ttHJcdXwb9KYb7H8EjKWiMJcAtVGnSqPxyHpRYRC982ScgwrSUbRZdzcdDuN6T7cWzu5W7FaeiZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PjZEj1emcoXgDMTf86NcJLdsfHz62SfoTRitHSmUiURL4FkR84o8xLpVfBuks213rQ3CSjjNdS4YvAjeHg5Rba4",
  "key1": "3hQZFe99B5VHQxSKCymHdGnTiJb39MhDn66LEhHaxBTXimVkob2AxuVGUDuA8u93w88pm5jR2K5sSDH6xFhGiAp8",
  "key2": "4LBWUZoVcbjexGzNDpyBgFueYUgGKNcAtsuZ8Pj2Fj7frk43zSdJyqNL1spkVc6nDcB4yXcVJE3h7AJjcXUKovbA",
  "key3": "5zJdJQi5JV8zcjFj3aNErujGFteLDuRtvRrbMRNTciD1qbYt3wAAv2bUnJyd7TSpgD1LNJf6qMz3gCk9J5i5wh2a",
  "key4": "65B6t1TpizipeR3zcAkWy7LKuD1oUWbioiPdv7sxFyPXyH5CozFFzA28x2SxnA41FKNgQF62aNwkoq9h4sW8cBkh",
  "key5": "3xjiSaZ7UJGbUHMownzZ4Ckpe3dE3by7LbMDAB6HunwXY7EfDZeYFHSFdhFt8TAgH5rtwKJ1RB5Vq5a1GFZCAhXh",
  "key6": "4ywCLNoVJPtPYKVmfAt4hPrhbz8dHU7j5QuJWUL1G8xWdP8B3gUgnhGerppwCcetY2Y1JpAubiJbjEosZK6vG15K",
  "key7": "5bCX3aQqAe9NHpBd2Dfn6F4Q2Gfc79jkYRJyx7nobqrm5DxQ9bWDLQ21MzbB6hYmdmuvdLZusvmFrRmGcrYojyRc",
  "key8": "vBXWGT58mwt9uvUhvfXfuVwg9N8YzK1ytchzBBNVBDJPyFFC3GTkQf1pATHgdkUrmQMyLC2881LnqTi5WxjdPmx",
  "key9": "HxUapeeHj7DCc16d4ooHqB6KQPp27gouDDTubZnE6Yz3f7r52RoUr8eAQKYdRti8hS8vCG29ezFmefB5Tn4e6w6",
  "key10": "53Dfd3TVvoqw4moEQhXPHihPs18DWthUx7MNfjRxex1wjNxjaRhLKm7j7p5D6i1zSdrcaHWJhU3387hePbEz9Dzj",
  "key11": "r6FwbRj2L1xvbnQVykRmWT7ah5ALUezmMJ9FHzhq7jSz4s2EaRsDVRGujjtDFgbj1pzJRCtdeR3qhbX161V35Y1",
  "key12": "5HsA5deFNiTSxrccFPC9jYqoC6YPahw5P7VpSU3RBbJpbq2SPvRArajdu2XXBpVVjCXKxmMuLPyC6GMJLQPYYm2K",
  "key13": "3iB6UEneq7R8YMNJk9ijqZiy9VcjeNEpcMs2DBRz7R9F5sitog2bbY2JDPGfGwocxoyJekRb2WzJRPzVLP7CqoPt",
  "key14": "4QHVJEpNZwNWjpiBELAxCSGmwpVAWquQZLxruiYymrR9S4DrZ8JuJQBus2xmvqb5VMPSJRgq72FmfiSZMKaLmUnw",
  "key15": "5zYVZD7orV4CboGW151JkjRnLb3pKBVJZt8H1cMjb7HfreEJf4uuDCxBZ5NoeRq97NMys6coJkEYhePPAz6vWkem",
  "key16": "2bMmwdutHGQ3jv1FXvETrYQWJ6TrJ7wEFcgUmTCkdkbK3LYnsyNWDjB1qny1EZ1hGHDe2Y29zdTUL2NVB4sUBCdy",
  "key17": "4svVBX7sW3qGBd3ckXXgKzfjXKDYmE3p9K8QSQD6QrKtEo74KDRWkugPKwsbnoVb3aVBdWH57WzGW5xvVjREWEiL",
  "key18": "41gEAuFZRVXvLGXhpzgBDtaVGotpQZeuF9ZHBfe8oYrtgPpXN3hmoxMiiahmBZZw39TPcUXmcJ7YqrEuJRk4icSZ",
  "key19": "nYKUGW6bLeQdtN6dL3vjeDtLmjDEJBbSWZwNnJZ1XzMURYuEWXEUdqmLM2NeAbRaE6FEidBEcpSgvx1JuKbf5C2",
  "key20": "5ZvaEAV94vUrvmrRpa7qgmmeGCNag9C5wV5VqEGdq6F99kPEvDBaMDpHBRFf1CmuzrHxjd2Z9kkvjfJczpUruadR",
  "key21": "5yRWZFpPPKhbH3FV9uUcFe36p3bKs5NymQeofJBf95eK4qwFssket4YQvfp8XWLm4V8MAdQju75iXz2y2kvGaoyK",
  "key22": "2Rc58hbi5NHpGFFRpxJubz7K4m6sgs3jrTKs8FevZ3XTdgHjNeT5YtWpw2La2NQW89emzpirHfGgccQ1Yv4aBP4H",
  "key23": "43b3NyUUrwYSvfrKLcE176vMCXuh5xNWvCANz1hSXjiUMn37rJ4Rya9FuSXTcKBftSASCb122X26WJ8DAL7uAhyR",
  "key24": "2B1HStAZ66X1a4KrsRCdWrwJG9RSLccL8B2sqtvc1NoYjwnG2b4KuxTpJ8nz6ESGapB4Dpi2QQVczWuUAGKChAXj",
  "key25": "5vpuS85eTY7wqoyjqHhBk1Ti6D3ttbeRSbZ5Z8UUpoaBPyYXpTR9FCF66WWdRqkVsSmF5q293dLMFwHoR6ymKEMx",
  "key26": "5CEbTgFcu2abNi86BHNfgrWEkbPTo77phS21non6eAroabaNT1qFu78ei7ep6J9Jda6zoAhbPd8vgeHwjcpJTpHh",
  "key27": "ZUMicfuBp6naLAtCqBHay7rq3kJt8MESf64Au6RcsZkpzGLMWdgFDoNiaCCFN5q7ySkRm2TvfYXP8mNACs7BRhS",
  "key28": "b6pJzNzCA21DUDadZfNJgbgG3UAttVkVGfURy6yH6uMdpEn61RFi6g4cERT6baUB1bjWq9ikdVTGuR2MtnCYEcB",
  "key29": "3dWe3k5cdKaNmSGHgGyR7nC4fvwDZBi2x73eKoFV1mJkTyBnaSziVJMVFEBU8UtUBMytQwz7vBGoWoDwrPkF6osz",
  "key30": "3r4FdBLBLFuMiNys7aK86VgPt4Q9KeMrZjmZL7Sf1FFAwxSb2crhHafBaRUt5UGdStGXmU1fjKQ7u3hMUhVi9rmH",
  "key31": "2zRk4MscdJLwRF2KwgRmyomJ7uWwypgUGRcWgrgQrNJrtw72HDkD8cPNBBSBexvqdWL1CCs1JPyNpVKJvub9aeBy",
  "key32": "nDsWo3Qo5YRptv3TUoaXURgH721omdWkXvGJymgLAZ6ihXJdAHenKkHZKXiDy7huBoEWuTXJsyTdVeWkbfxoFa8",
  "key33": "3tpnxb5fLDgtLYjdnhA9ogwwhtReK7rZJcAqXgkisSrdnHumcC132ayBxGkjJKeRfU9gZsJNfgeJTqXqc3XnaS6F",
  "key34": "2VcHnP2VNYVShhSh8zuNstmjix3XHSe9YJ56zNCjKciDy9udihTZys8c82K1Zj8nwRvzCjaHKPSBDH3PoGz9empG",
  "key35": "5fUMQ1Em1MLnB54KZx5519BHj8PKWrwNdGZPqAjFgp2eiQmHe8ALuTycDGGMv8oR8ZUbFsRi4KZHUjHuUfyPtKhw",
  "key36": "4DRohSKmTie1YvURpz4TUBfpA5SUtyrTuVwJFGVWXP6D9LfrLjezriichdQnddtTDVvXw8cf5mz1AAjNQD3qXVBG",
  "key37": "2XZtBQp31aDMXtED45QcY1c96aiqyhMC6sTMC47MsM2Xjo6byDs63rsEZWHevg3s3nn4MBzFdsQx6nhB3Q9QivwH",
  "key38": "5YtWXEULQGoSXaitoTYQ331YDdsfEniHugArHWVp4Gae86bWGyAhe33wMgoEtc7Latntcv1HG8L5WyKUersR7fkH",
  "key39": "TKWPENbwKP1DDfc4ajHLaoDFf2HXvCdzJ7tnYuWv1qJAiQxDWG8kVPFMKtR9SCiKPN785tdrN2ruAar72qa5u4A",
  "key40": "2q1oAfXLkTsgs9dN11XXkx8LJFpARiMb8x65UAZm14DN53XRuK3EaAQPtg5fiqc8u9e7DxWF44UwHCpg5Dd1FxKC",
  "key41": "3wxuC1oNKLRAGqjbE6oBeqcxi59wZfjYVmVVCKYpDfm3cfBjGa8SCGZSnD9LTuUs3FNA5it6CbU4L9xARerNwzfa",
  "key42": "3x4mZFJmvAYW4xP99owiSNPfdQv7DbMyyVwNEGxdVJZii15iitTjxd2H1ApXpFaWt5dtqgXBxaAzJqHpQcsHixoS",
  "key43": "3VYJTUga5Qusk3M4mENCDo3ttALjp53ZBspMQxq7yEURfELySJqFMVLr55rPMDCUkP83qStoHMY4cwYQx2tKYTYn",
  "key44": "LwF1NVyhDvuLrUfk7WjpxmMNQLTe7ti8xivYEmHwEDQC6xfyzSm9nJzUVs4pzon7xyVUmKqLcfxhfHuB61kb5pv",
  "key45": "4N4Ap4nVDb2TkEkYpTxtU4tizY5YFvWP3vERMtMCsHUdsb45wQXCX9FAi1mT88KwYA3tNa8vuL4MpLkx13B1sV6y",
  "key46": "5A3xMNM7epJdTGrqSeM6nqtQTgzM9bg5T4BDGv2tnyGghP5nULBqdKXD1KcT8XnPYTkbqQQtJnGKctWaQp2HHPEg",
  "key47": "3YErHt8QfYXp4jpXPuXZ9yKuMquefxN2jahE4ThBc9tWHfoD7WJpMfbg82344CBtgZ6tuDy3GqcUtdi68QbwoqWx",
  "key48": "3ZoQ5fHp6VQfJPB6LNB3imexywdrm9vw1HaqZoNJN1FhQLn9Qk85bTFfLrsNQdeJNrfPu3BG9ZmQjE2sNawBdtev",
  "key49": "idPDhkvfm5rMbwfbFY4z3o6HaGNtJYW2VE1WAo8NQpmSJMLDqaWRhqQmYyNTwvHem2ZWkHxgXEFU2YSHBNAhy6Z"
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
