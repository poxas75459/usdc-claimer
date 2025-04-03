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
    "4THywNutk1KcM8J3KTeqJ1h55SmNHdJ1GqAdDH6rNcvtkbBh4hWZDfsi6eg1xkDD98AxkfkAd2hit4VhTiwB84H2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21FNvLmw3q1YbExWyik5kx7rbMRakG24AkApHSmFywRVvrFVnKzHLcpZFwTobEGDXNJnkzzDRGo7DGNeYMohsDwi",
  "key1": "2AvhUrS3P5KagusmZQrh75jMj3kBRBoCKnkCGz47XyXBUmqRuKRXbXrc3rfjSUcL8h6d7BSNyvDBaxtehGd5Ap19",
  "key2": "4WVphJ1gELETogbxPyAHdY59Y4fpuZ6JhLPMrxAuw93bZmwXuGi6oQnwtLEPJox9yC2DKcUCYYHzTYqfNz6eCEaX",
  "key3": "4FWgLUWtT9T7cUNSiEyuKbTCA5noGSaFnzQzky5Jz3qYMx6fFnUtkqNgMttEXiRGMDLTDKUfEtoDv9YnwGbV3zM",
  "key4": "sziG8CAfwW1yxkwgksjRqsYZFyz6LYtYipvrzKUZ8546wmHj7PsejGF1E86jMcY58uZ52zzgVFkbNmnZYZ2eXsz",
  "key5": "2QNEKPy5rKuVed794qqLwqGgHPLqacK6LxGyFRebBpwDqabo9i9JLsPipyr4sLeit5zqs6zTnbMkGqJSLMFgTGaw",
  "key6": "5No6t5S3A4cHMFkhZFrMPKQqVkjuDYZALHojaUgXoKHtyqHwsjhevure8dzGBW5tV4FP1YkJHwiQZsd7QJf5UBnS",
  "key7": "25gfXBTrUDXDLd3ahb4Mb5xnjBHdT7NZdfKoJQ11CicLqkFXphSic9y5Bj3cK6tFSn8Mw27rJj93uPg2tRgcwHCr",
  "key8": "7Ms4vtAaVajVxqT87gFCbFMvYovaPTnumudEVce1pXJaSqauPvqPnFoBonWV5UNR8W8qrimCAqbcMqMnXCL8ML5",
  "key9": "3aj6jNUEvuv8iYotCAVQnJUoKaWP3gEpoeKgojPNHoQK7eYCTVU8nox1NLpcaFTTojKGyrzjK2L1UrUR3hJV5hCF",
  "key10": "5tpN71v3pbztxF9E4m9ZYxdKZh9xEyUbvBh2E7HcxLcorR29h9iTnqresoaUsaS8s1hmDockrpPEQ9GAMBtTxK6D",
  "key11": "5LFQaX5NBTnBFV3U4qTe2fajmoXPRMondNZfhC47MrfjkPhcgecTTHrWySDVQbbcsbSCvbLuueGy11bS9ZWMkSJb",
  "key12": "28kGDc6bTLUzcCxiXUyTtHEoczD4ZEzvtzF35ZwV6YBdQMG9HzHYUp8CyD6JcicwAm6nqY2FLL2W7mRsTVyFxAzC",
  "key13": "2YP9WcZ6BDzxfGeEFEm2VC1DKZLXiZ9D2Y2TDMAmkyBBQFswabnw2piAQWEMvEbChgHAqswDVhDT47usEwQMFqYx",
  "key14": "5mK4faY5sAYDoFDvmxaEYaCP6DncRLAFxVKpWdKX8SPjvWkCJcdrrdpWYaiGg9YWuRjA1XZreDex8k3XkXhpSRnx",
  "key15": "55ZDKLAT9aY5jSL8jLcKoY2KhYXh8j56EEJReQQspr4g9X4omjmCtwyZ42e64VEg5sH1T2XXyKMyMKzo72hXRYoJ",
  "key16": "4TEQdUKLXJdVLHYNep8y54Rwootvn2YvLr9SsSf3bzNpbmCZq9yMRZEarVZBEim8vqYkPwxitrycKxSxeHzQDG6h",
  "key17": "EpGyUpbuTtKYAXZSUjH3MHiGjv7vQnN3P1noH6HGCCDC9ERshatGBtymXiC84GBTD2dRpVAj46RZ3JdPXSMbJBk",
  "key18": "3f2LHZfAbtVWu6ongNzePTLG1zFeTNJcC5qCU2wLZsEGSeHp913rjCvmPtFKkYHGBeTZoAJN4TNtZLfiLRG1k7Zn",
  "key19": "2vznNJoP3n7JeurQtKozmWWZZ2Xj3VnWWUSRVr5KuCNHEprGjipxrnYpLsq7r732qXySDBkHkCeYDsHVQRMhYLDL",
  "key20": "2XBKChtMnLwytFhKQFW4xg1eBoHsHe8QDqmdD5jnRSFRA1HDJmSYjaUwTk1wYTQVoUaSMU7NrLrrg9JN8ZkMnQ7L",
  "key21": "3CdCe8ofjHit58NNxw1cY23KLEzNxoFD8GWmd1HLCQaSjKgxJaQy3CqQU9NqkiQjPUbT9JXxeh4MHTjLMBDkY3uo",
  "key22": "aWUYPM97nsRq2Sh3nACjosGdX3E1bpYFbs3eDwqg8GJxd5jos4QtvYRSkAEpAVKEY7cgVsL7PTg8Jh4VegAUNbU",
  "key23": "2LTMnMpWMpYx8w6QKEoPBgrh5H2F8Cbc7B7FRNT7Kwjx4DteGLRpE6djw9hALiGSHYpURU5Dc2AP7bf44QALvNuh",
  "key24": "4NdGDi4jgTA5nLpPiCitQnzN6drxQkuBW43KKoxbK1n9KdcNzgLSu1AbH5y33nTcybbHMcak61QgVwuvWDRftFnr",
  "key25": "3e4e8nBvVf3Jkk25M5v7AwUMqXneKMi3j4Wxw8gepiwSrCNL57E6VPcrJCMgJdh9jZim8B9Y2q7fDPqpBdrNo4UM",
  "key26": "327Ut4aPhudipdux2NDXjnz7eUBt3z4B65jiL77HfRrBhE6NUmDtzRJ8DywLnBDPtfwzKmmHFERntK2iH4ooNAEi",
  "key27": "4cMuxzgEpDzQHCPxkfcxJVE4J98QXQnuvXoxoDcggutWN3rggbenoJn4qqBSn2J22rirbpVBPH9RvyWrLSKkoiwp",
  "key28": "5HVxDTCed9sLpxA1rh5eGg3nsfJvNKAFSzRiNTm8GLTENvDg41SV2VEeX8SfivgsxNw8jTBUW8GFjgjEsoADpCuW",
  "key29": "2yYn4YV7L3sW6uJsWgqBfNfh5WAeLqZhXeiUwLdnWLd2bw8Kc9eyeT66LfLwkfkYLx1HV4m7zZGEBEuVwdnfrD9z",
  "key30": "2RkGjiddVFHbNsnQbN7qXaceENsSt78sMBFpUwg7h8fJyxkuaC7vog3Fm5xJ3HsBBGDiLRHdfsQL8ZRGymk6hVqX",
  "key31": "4tXkgLfdUqC6fSDGf7a7ZPehYNFNkWZtkYyarCfLKLfWjG8w18bPnszMBGBfPU3ajK7DZTdPDjJsbo8ftuFsvzsh",
  "key32": "JFXCLGLd4W1L7DkDttiqqYZHsaADziZJWmEJ1mpJX5Sk1iGqJBLvnxNh5xkfAR7Jg1nQu893XwtHsSMr3aL2N9x",
  "key33": "3LAxBsWv7W9ABuBUgKZw8Pqv39cQCmCgcg1bu59PLF7S5J6nR6FdotXNVBSvZBdDNM5cwZgyzMitDGgRSW35Fevr",
  "key34": "5pHwfHQvXzTSUWXJeKVR1czvnfZ1B5ETbpd2c4BkGoiEUQmdtNpcvxtfcrxPqszyoXUpebaTJryRchstuVWWJ8CB"
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
