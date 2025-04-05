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
    "2bzwmd2paHn33YUTqvuzvnEv8CraXAcT2G2QDTQou6oFYqVuFeBkKwQhA9NasbcB4iv7G1HY2odJRwhCibNwu7rP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54SXzbd7XUzvGoTPpFpjdobJJV8iG2f9XTWhm3MJRzVJq8PFp68SfHMh1CSXacRyxsopECWtqqStYHHMkyEM8MS9",
  "key1": "3bZzcm1U9KcTMyp69JB7i81gZfnGa736UEYcpCZGbX69LVwCJAfJaPsYMYXAQXoVcJ7fMWNxq7FuxFETPnSeNPti",
  "key2": "3RfxAwXwu1xE4dgZj6jhVq2z4cSpdy8m6F4CrSznq2Udh7VzS3NJQHbMNgfxALB1Ee3CWgzkTqve86yKyWhYp1tB",
  "key3": "4GsyuPkzY5QdtrDc7Pp41owPPiQKSa3NCHBnb2Jtktw8ZTDLC34qoGQ3MhDgaBHEVTdvTGhLpaud8S7HskAUCHn7",
  "key4": "3eBKJYrn9fnXB6ncd38ALj9WMib11RzPGbP44LV9tEuCjLd9TZhksMC34hb4RLLeqp9dYPw3LP715sU1qUHc8b5q",
  "key5": "2Ker6xEVJrsgUGH9gq22f7f5AyAYnVQXm82wZaHGujfiwjxk4G1YtnDj2hDmxjJ59R9GemZkmqxJEpDU4MRYkotD",
  "key6": "2NCyAJnyzs6X7n2gAfnmDzPFtG1eJQymxWHPYBkfUEYbaQ37Rfz8XnKjRhWXj2Q9DYAKDwTeKCQvgEyKYtMojnDU",
  "key7": "4JYP1MeWvnA4qCQaaEpP3PJ1WbLrQDhWUyswbSoJMB6dmogiRD9uxT9ipYSg7Y7EdzF57z9zmdE6okyeJafxQwsq",
  "key8": "58ck4aVKiQMYLBz2dL32JcxSD8WvMNQHsZBJ1MH8PpcRLuM9DH8ph2DqwzrnFmus1FsmXwAh6eQPPRLKneVvQ2eC",
  "key9": "3X9Y9PFJ3rmewknb3jHxz965VaybKS9DfLW5SeuqtPTh7HhiXp9haYV4phw3puCqvDKRd2yojrZCYhsuDDWEUZMh",
  "key10": "4wCWnoV1EFYsarMa4UCSSQ1cccCXLCtNfYvcMLW8BRw8kcugMsrDnamh6RjjS8vusRuvWZVKoReerQXEmebmYrYZ",
  "key11": "5J92xY1ceNK7mgh5qK9xv8CJB24SVVLtiuoYbTtn1wwSwvTnDfVKJ7PgvX9gYsfbJ53rfpa9YyGbjeJCt2LRY3dX",
  "key12": "HQqA8DAbSPdBgx763FacMpd1bBEWaUe7rv1az8Jo3zsLkn1PTiWdPYujeRtJMBbSPM2jULgTH54AiQEPhvVP1m1",
  "key13": "4B1N1rswLV2GX5RvEyPgWePP69WoSf531UjhaeWi7BoWLo3PPZRBnx2kYfvWM5cuQA8wMjDujgdTRoQQo5cTn7VP",
  "key14": "45aq1R67gGudDQBBpBjSaecnNVQTDTY87WwK9vqdZkZTjHL5JReuheknm99A7TvwcRzG8EhYyYsiEGqMXqChSxxV",
  "key15": "42MQxh4nPAFY97GfbpTnopZMM8GLJqNaSYqmZnFJ6wh7foZhN5pAjGgAAQVQXM3M4XDDsgi6JJ6v7GDmKfnsmEzi",
  "key16": "63t8t8b5eZjybe2DGvirwdkNHdT82uPWE532gJwJ7jo6uqxqbRfDafBaQGpcNRHZ4WXoK1n4Y9sKuLzrw3MMGpya",
  "key17": "3CZL2kRWb7iv5AeaL9UJKxVt7sCJQ8YNUjikmZUVg9MNPevdNsoagK2pib2YkM1vhmvQE3b4BLaSMQ76mXjGzUap",
  "key18": "3T5wMwd8dP5MD5d63QVNsX4TuL8wueXKRxL4Kov8tG7iz8Z5GvbiwDv9k4CjsLAMxPqJS97DEKC915RA8nAzt79K",
  "key19": "5d1ZS3igZFcJc85dsWwLxtvDhSKNr19htDdwVq1GnYhb6WfykHWbG6wLiANHfd4HnPJzww1EtMCTCabHz3DKHCPu",
  "key20": "HKKWB8cA6q1jshj744sv2Zd26iQWkRJrGMFrUi1C6tYoTbvnVqcj2Pxg8x4kP8hF9Ph6d9JKG6aYMPmx6M7BX2S",
  "key21": "4wMQ1aAAm5BVsXPCLHn92hTCwfQHtpcCSrApniq7eqJyCSWw2S1Asj6sGzNvLQmV4CzRmD53qLFkeRg5R1xqq2oh",
  "key22": "5dXbAEPhtDAepUPfbKceZpbeRSzLBwn1WmmA8qmiMjiD5KJeWTS1fc2Y8oxAzdPSFyLxCFLV1gxJiCcUkAKdvDVi",
  "key23": "23nx39vrGt3bb2Rtpj2XYqCDfvgx2EKEmZdunoszYFzXP8euyhk1o76reCzSDgynMcEVxReF4UxLTg2crPz4rput",
  "key24": "3N4y9Zt5TqhTT7uyV3GBvUyEEQZRJgfqDgFiVbu9U6fPbiv8YKL4JyPY1yiSvdD498QhcBTWesSt5tmC8mHF3ndd",
  "key25": "5P8p8hDD8FGaxrMSyycwmNBsyBQd2AM38jmEZiXrjBQKM2WUvFNXWBSXa9rZhKSNxDcp9vcKbZSQx3YneyZCsnXd",
  "key26": "67B6TLiX4dpnWkwm45Ek6cTCwVSTT2NSLzGmWfvRf3Nx5Um2ARtgoy5QzD2VoMXsitJ8Vq5HDp4s5hT4D8wp4vFZ",
  "key27": "2RD3xWCaBBjkHnzW3DaZoEnmjBUxXcmRF2nfoPk9ybcX6psFcNdL6hC9wSMd24GWb7cvAGxMp8qNJrF1CRPzkvrq",
  "key28": "2FaMnEfx5Zwjc6bKnbzEG9K93dMwKXuncPPbjG6HfBLCa5a1v2MKmCP35Tuk3Xo2QwtYjhnzd2HB9LBHUZ92cFLi",
  "key29": "fcbYHGQw9SdLPB2ma2813JftoQgwLYURePy4kT8rFQmb7e2vkExP1iBVHs4syg6pfAsgcpju3KYid3QMq5p3byL",
  "key30": "4Fvn8qUmNL3nWsBUSZK5qW8D1PSo8ikkqwvVMmHdVUAHeLRMjw1AQqQer8r7stUC4cckUgYEFSUFJUPgetX9eSoN",
  "key31": "CpZmgGYjasLFrbnuv8BHQefHjazDubni6fpPfzdyTh2MRPWXVJMx9VSbcH8jMrLnAFN3aRw7s63HHg4JWsM4oDa",
  "key32": "5ts88tU5kxiouX9G226mKSadFFByf9JhNwrTffkFCGFf6y5r9LTdkronisCfK2JZNNiB3TQvFT8oPWaYAbpDwGHU",
  "key33": "43LVoX5is4LV83DXcDdTzL13xPkgnSRELzMQVqXV8ASMzmTeN66FzVXn6Pevz62So6ZDb7GRd3HcCpnV37s1ejBe",
  "key34": "2ruzZtrFj4u4kUYaVLco88YDqfARvxr6sovG4WbCUwHBQnhhDyizihHfxPsin4j7vZ41SaPmBRPTaJmoTngVCu18",
  "key35": "M5WSg83tZkFMiMHPFWPfrtDaSFgDc5bNAg9wGGRDA7LQj4AaoyzXGphQtU1UGFe8w2FaqD5JLPzbY3AEGzvBAVm",
  "key36": "2DciXxvfv3DjGM1Fkad3fe8acnuKUoHWUpY3isPVkRYeTm8F9fBDi8APGMBpjAprZGwkcBgMmJSAeUDtn3q3dAhV",
  "key37": "4Du9Lxs7CxnbDotRzsV7qHbbmS21At7ZNYPQfocSQvRh1XDThzpxSbKgsGV3NxfwwUmh9PPdQktdv1zBCkY3NqR",
  "key38": "5H8Ja7PoUPoAf6CY2oZd2GvbpFEVYubMSEhWmxhBkzHWjLjCDMgfDLmbqsi8C1pYCmvA4cDotrjPP1atJKteLQA4",
  "key39": "5eKBJvCSx2G7KbsXNnmTX1757BDNdNYrLS2YWskGnAFXPva8tJMFwWyLBhUgkKenguVK3ikXLbUxt3EpJ1F25jC9",
  "key40": "4LwsDmCXkTSc2GekSyS4u91HErmG9g9bWw5BqRJY73dxZMt2Laox6zzjz1thYvAZi3ThSwGxHDLYEKsDbAueCJTN",
  "key41": "5pzfxXuhpywhgZrb1oL3gyEUhTKpPuT5p7gH1oMm3cWf8DnLCg9Yosewa12UwASvW3KxbshJjFdwSmSqVA1hCfp8",
  "key42": "17JjF1aScY8kkLJH5Qqrvd8kifNs1N9ZBq5gZL3vC59kg2Gr749itqaC3pT3tioTQsmptWxof5FAi4rh3pEH6eL"
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
