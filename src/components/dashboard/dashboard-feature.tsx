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
    "67XddV22yPFNf7V8Me2jSUTdYw2KKf4QRG2b7WUeFneo57ZxtyNRU8jWU3FsKxk5H921i5GPVwrhFjguQTtNbNFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8K3zYRcpUT4CVEtHPdcFxTZvWzU241ZsakX8oSY34bm8ypwH8v2LmnPECYGCj5Mu1uXoUDhwZwMg2mgX38JoYGp",
  "key1": "4CHHrqFn2woSMRh1JEadFySZFRZ9iK56zaBwkML5jKYM8CHjFzCgSBMKkhNHJgU9yv35NH2HF9rTVFSq23E5crVf",
  "key2": "4ifYjJB54YPgNJT4xRms5u8UNnTdFaa9MDWKYgYNPFcZDUCQfP6XqW7gqNA5PdkK9qRuTrkZncXWv49fnq8pG8Uf",
  "key3": "3mYQBzjgPuxUSnCHTXkAdVVwp4MGNmLdK7jXXEYNUJm3wJmE3VxZMqkadn6CeEhFpZFhfWG45LHjHBMtDWq61FAA",
  "key4": "2wbFUzJnHVEfsgyrrZTBumGGZUnEkSVtpiT8aDb2JmLbv7oMCgCRi22QLDVMPQPA12c6g5v8KW2Y74AArtctjE6G",
  "key5": "G1DaNBR8BbvAjgUgBASFuVnpyibX2FJVb7qqJ4g4wVHH1XCdY8ZW1J6eyornyhP7f63LPLAhVKzonQPn7zUCqfc",
  "key6": "vBNRRSpoF2hyRoPFqThtW3dDdFQ1be7xY5HXDHiqqCRhVadwrDev8N4p9f48dgVWsCEVSQcf5xg7ECHs559cLpX",
  "key7": "3YQdktbYhnKW1aWMd2amcx5yzooWfzYnAMRY7296xJxxFqZgzPyxNrgrrBH9noPGwKGcnD14Lfxwdcqq3DYDk6hS",
  "key8": "5qZWCNzN2boV685fusdseqKvYEMZYPn26dLLnW8cUvKhr3N9VCuX9XaVoDgpdKQQnd6wmAUpK5YY3tXLVbaac3V",
  "key9": "4C15XNit3ZYkHBqTDamzvrFK5wg55151qvmYdKh896TpBNyAWmgAgBCH6b1hvPLukQwj5gxjtNs4Xt6dca5iSNzw",
  "key10": "36dsS23LRuFFwn1S33fkDPgLurFUSqH7s7ghwPcWeuH8Zkqzq9mNHo6ib87rmgRioYejUNzkzFGeXVrep25FhjaW",
  "key11": "2XxzX4DZiFKrcaE9YQz4LetnRiVqg3fQt5uDntmReVwX4MQrtq1QzJPy3bT4769JsTQuxRkmbtNJjop76EAodZLo",
  "key12": "amPFEg7eTAgjZe4PHp2t7JgASCkFtjDgPh2HmU1c4YErR28NaVth9UdBDqaKq5JaG8N1cGipmKqr6xfRCdHWCgK",
  "key13": "2XSQk2VuQMQmrXiAC6umnCKVi4htSao6afrJkCNMvtCTCYrLkphn6jSHahPN1e5CtCXviXjRbif9y1VnXbxtqQUz",
  "key14": "3b8YtN2WLpJQH372ChM1KRJfC8QmRUMBoAQAZXahkoXEcnioEaYdsMr9sVNTNkhd7bpWXUiT8nmN6b4LQd51hnGT",
  "key15": "3kpC1dio9BDuyfVcuFzqZBjTEggj8YbPBRtYAixnepg4wFM5DBVqfm79qcr9tmJq8Vqhg6LQgqvwkM3XsvyH6mfr",
  "key16": "4DNdkXQXCGo44CBFB1uqXK8vRPLU9SmAm8JTsnrhin6wV3SvzEFbnedmP19j7Jg8EuPpNNPLdTQZw72WU6T4DNxu",
  "key17": "3DvXxQ4o9jVRQBmXpSKBvosG5e4FCmK2p5Vyxe23vzdpDZ3GEn8VSvin3nAhDhQ39HK6JEz9mVvvurc8ik8ZQzJq",
  "key18": "4k3vHVWSoZNbWsQuriKuUddQk97B3dDaWuhfQhWRCrRMw5RRNKpaapiYSeNnWNXfy5PdB1FSpfyFqPspdt7AnF67",
  "key19": "52xRzhBhjaEyyyE5cc7sH9YSxeRUb1hFdrs6FqeHT3NsSZ9vwaC9dDYBhcGFcg2Kr1x3Lw7SiKaEcnhe3BgKCQuH",
  "key20": "4vLUGRP82kFXWb6YfVwAd3ztf49L565Sh9ztaTHezNwnjKuA6uRPCaZXgewyyF2wCCPeBfLun9oo5x1gd6aZokYH",
  "key21": "4vfLphf9kAEmxKk3cdwuofmYEUKqwE1DdMibbRBBrVJtDk3GYtaxXYve6Lh47pMSRJc4nSAmdrML821Yip6sY2bT",
  "key22": "3T1c5QzNi8qqF14xLkTvhLj7WhnKWJgopdXu8G2itL82S9KrZid7gkdbvhbFMPqzHjvExRRPAfUVmHmEdepARciL",
  "key23": "4xbuHb9HJkABJjMb2eywQkgizUjkGM5G5mXiQiPbuz9xRN1Lt8hHo7VWY95X26z4XqLWggQevMhfVREZhL2wuVB2",
  "key24": "5ekZudyNmf14hfQZSvPdKJWqNTSbQPxgk2Sa3cywoiPjmdbvyhTHxBiWbXKADNURRLkjyZMjGURkMyjpJTytYL2k",
  "key25": "4HsVyUAxNDR3chLu9HC93BZP5h2DodXbeY5o2z8ZUs4E6bgeZmMvEQDhBnkeM8q4hPH1HSeVLv22QUgT5zgAPhoi",
  "key26": "4gE1EXxrk6jbk1iNq9DQkqTTWEuMgUiCUpLEcSMNru1KipHnaV58YpVKxze1FWB5ejn2fEXYdJy3j6Y5wvqEG5sJ",
  "key27": "2PBfPwHMZNWGbMezJdUjtGievUmVNgpu2tvGs1zFSnbDWD2szhaehw4FdgZ77HFEX1Hs7R3Qi67EPSdDWcv733yK",
  "key28": "wRfYKSTooKUCahbsTWeo5x3P8v8ogAucbg26uLAZoVVsM9FxCEdRgaHm1dNJWPYbsBpvwHAPLkWLupM9yeYaNEe",
  "key29": "D9KQHmQqsbF2oefHLGgswKsp2n6dc9xWTc9CsdDj88bSWic22cHWqmLbbEqvvecoqjKwjjiGiv9d8iQTPafNFG1",
  "key30": "nbZCvvHxbJcVWAgvrwbY7REmrRK2GF7L76rVmWnKHBo3ZHDKvnRPy6xyCwo2TUjxv82UHEvCd2DunZPNy85nutp",
  "key31": "4uarxgHh6w9y1n4GPEUxM85nsdHMVjXtwhymSA6aeGJutuuiLUDYLeK6L42W5rpJESyxU2PwhdEsPdKt4ndJSrf5",
  "key32": "2jbmL8AC4MEoRcgzoLp8cccSfWJ9A1Sko2eHpHCgZMUQeodZ581g6W7jpMXwu4j26UuRemVxu7sFxScC9FiQZixH",
  "key33": "63C5dapg41KqyfNFaEXnfpraTVKXyKJWaiVysJxufZDGWMzYjDyaLLmN7k9UMsT5fowuCKFXzeRPcijtZaVv1DUg",
  "key34": "5jQ219J2RbZ3kkY6YUU6kRwnxaVFtw9iaMoQDzwR7WL64LNVEZg9CD7mooDHBzqKTGiJrd4ZB2biASwR38cWVhzQ"
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
