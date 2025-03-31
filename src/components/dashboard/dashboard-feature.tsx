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
    "3ixUSuFytK9bD9eAD8uYZKiwwHArd9qcANuGWHnU95wPvUBesn5jc9a1rDkMgKZe5YDqUEAmVpCsj2rErWVbKk25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Drdox5e6QWzni2v8X6Cguj1zKwq1ZkAacuF1L13tL2m7P4sfaew9Bwipso5bCwzXC5PnArvthjAeM4c5Gjr2fqb",
  "key1": "3pZpLJ2S2nak7SXbiN7TD1sxVYyiN9VFncW6hkq8Sh1YbvpJKGHAveVNbMuTUZ5Tz76eXyoinSSN4Sb7rUA3aNg8",
  "key2": "5iutZrYMhfLveYzabovm6HPmfazHRk8sNV4P9Z8HAhgmHATtuGF5HvdtRExtNF3vTJ5kttqMf2U6xQZRbFsc9Raf",
  "key3": "3NWLGQAoR4Cr9XHJv9wvQreUs9WNxD1fY8Cs62j2Kntgrcq7hgNQtsLFn14Nk8wispKGWxNB2KpoMyYWwLJwh3Qg",
  "key4": "LpwnnvUejcXDWoj1AKBeYZzs7u8FkmtbaRojZ7v5Dc1zmm4xRp1TmG52mDJ5H1PdEGpXmGBiB16dkCuubYg6tqQ",
  "key5": "5A2B4PE1U6dKzTwU3FM7wm2k7ozhWz4uXt56VKxZnfz4bH3RuZNdThCz5KswGLwBoQC5mk9tkcoB9diP1eMrw44H",
  "key6": "2QxWorcouWGVBJpnqhSoxxzFiJTxYWf7RQqBgLHaEhxe6oNTkM2kjGgidW5bRFZqHzQCBUVofwxRhSDb6JJk5EmE",
  "key7": "4p1CQxpBB53ASacq1jYKPtjjht5Mzjq4Nk9N5xM4jNP5rpqBfoWebz3t34jK7NuVm5maYEPakpEdrj1hXPnpBzUj",
  "key8": "2BoKYXpKbpxjAgp8KoE8J3oJZg8DKY9FCCrcwazRYNFWCnY9JthcuYhX6rux9bc7pSJ31rQvqAY7MkyZjFxYrnjq",
  "key9": "2Mi7w96RJWRhsL9eBn7BJy31ubSXUfgAyU5DJxScbByaVSkfb7NQWsk5VVyf5N6BJJWj8xhSdWTZFYL1sGYJbeXS",
  "key10": "3CMSJXe4UhcsaE2uGauTXiNqnyDDJHBzX2EAUv3zMuC8QYgZUSz9q3z2ayBK6LCEhep35juJoSg3zydyu4fc78Kk",
  "key11": "5YMdX2J97opEjUk5Ea9JTBT2ce31xvL8MdtzRpu2NqiydWi35Gwx7qWqU8kTtDJkG1cF1Z67gviXz9N5wEhQvAy5",
  "key12": "56TNSN7SrUXi7g95b9hQDSYdsLqBm8HjrDViEBzBVysxJWxeFrxzVSd8j6QEuzidEoCofvxfM9CH6agJz2beL98m",
  "key13": "3TJB7gnLGLqUhqBLrEBHsBSnoQhrnRHtnHieosdXwLmKpKbSDKMqVnJFfTdWtdp6qWTLZa91QdBtundZsMNL47wB",
  "key14": "3JGmgpWYH93KRub7TdFSsaeDgKtkmciXA6467QE6K91k8B4cHY15h4ZMX4mND2c2eU56B5rjNdqZJiqxpQ7eMYaP",
  "key15": "2LBY3stE1mFPWyzs5NtDxnvRmP6js4w3dwoGXn5mwEP9ChkoEQ81w5xhrMwAd9kTp83K4vVcYtHJx9XnDhJeZq8s",
  "key16": "257s7wG34DYTT6REB3jseKA2uJc7Fb5SxSS2Q6P1aQht2eMVU4a7CqStg3RowRLnKNUsSSHpvVkE65NM6Jcz4MZa",
  "key17": "4hoAt9TFg6i9MetpDz633Uzqt7FmRwLWCwfG6D6mZwcen44q7j1NyJBbztqPD699rwT68j6b8AHWgmbAYYQkDbMB",
  "key18": "5WXsM6sYMSehchDDKbnzgfDbeJsh33B82aDwexfMWNeHMA8QYxZbnhLpYK2BLvUqx7GP2Mi1Vfc68j1mqvpmsLpF",
  "key19": "mqtf5Q4Z5ss82eEUhPUQGng6bc94Us9LWvPX3ghgg1bTDmDEPEqYqcxD2zEK5J9XU3We27s87g1KjaiW6is461c",
  "key20": "3Q537hRe6xL7rkZ6weQ4z2aKqzUg2UgihNfnuDzrBW2tYVREBG8QYaaG1zwPKG2hzzmHKCJAY7fyieh5w8dkKzfU",
  "key21": "5DUxJfY9fmYmavMxMLvzb9CVX855woBH6VGjyhuEDEr9gBRfDnPAXL4ebWZzPH3RhYSjqHjtEPYrUg2DTdfD2S9X",
  "key22": "2H85f1up1t5HY5UDz5s8auAJdwZ2ecVX3w4GCdLf26K3T6ojW3rhtcrPEK7iyFvgcDrZeVMY5KjNu4MbEMyJENpY",
  "key23": "Pww2xpV7xWNXqAAdqaGPdB19CgZzxXj4awfc2PfKQgyNeyoSTPq8aBNBjUnUXXeF6zJ6qhfh8zxatuEL3UgXz7H",
  "key24": "67X7uov3uQyTNDxz8KdP8gyQn4bTM2jQwr232mJNDKzuEernCkBd7Vf4TZeZPU2uAEujeLYojCkUcjfCxisu7jef",
  "key25": "2KaLk54XguyGGosT8Ru7owFy8viyig2Qi18ggqD55iEArnWPBSmWCm9PkFNKD3v6qSNgbovS9fsbnyWKSNAVtwMY",
  "key26": "2do9KsLHCRHgPtKEczR3accNLzQspknQSXFVaGS2stKhuuTjKg8XReBjSnew8WBFWTJjwgdBU37Yrk3oPrR3sfHk",
  "key27": "yoNfwFrDtaFDatQqTm9Lf6xsm7LyB7QFRbXQbHM4KB2VFUiSx7q2MsUaEmogaf49reyQE26LFLSHJa7MQoHjmZH",
  "key28": "5jGa3BG4qEWDyMqaLAtGieGy8sFWabjMUqKsagMhdQseUwL1qiRAkgLvMkqRTCXTHW4fdM1W2aJhmyDQiUP8FTXt",
  "key29": "47ac19Kb3CUgjwUreJb4BK8aTgfsC8TZyCwQw1DrqUJEL3FohYyh9gRcgjZKAV15W2A8Gh8TMAgYVvdoDwPJc6ix",
  "key30": "4EMmzJ6MiMXSaANXuN6QdRFcAKK9bj99qstsoUCaiREPWKgxf5iuVzFn9XXxTsxyE7hhcwgrMpUam8KjHq3d8rqY",
  "key31": "4ZMg3iibqFhzYMYfKNQZkBhvK2Xpj68bujzbJaFd1eN6nDPre4v1kDVhg5UuyaojMW6zhtJbPdCdugaXoBZ45eYP",
  "key32": "3L3VHhc2GKfyWEfAWczyoxi6kTZEVTczCLZhQZJYUnw5w2QuPhLX4ZAjmcxUVX1o9PSfwDZc75tSPmpgATGGtkcf",
  "key33": "5bcLeC1nFx9w4ieshGPFxyemRSEdq91vM4aWwGYtad2aNidx3tErAikXsiqvBrm11sfLppMFYcvvaDAME6dXjH4P",
  "key34": "5zMGWJv5883PZjLkfQ4nuNN7DD4Z4T5ck5BtWoePc5PRVL6WpgS9Nhf2fn2JaF6i9fEtCLRXb5onzCR1p1VemACi",
  "key35": "2Lr844b5uWaz9fXops4MMEy6Z6uSXJPdDmvH1ZhKgW2apJhwEFTBdohAZAuDaTHap4ovmUJS1fEbG8ygtNSDigNK",
  "key36": "2v3CRXD26YHcs8PtDzjTgi6wbtCP45oX5MFGfSXHCAXT9i7kpPF7Zh6STCwRvJyuzvz2j7QNt2zqdHQPZgJeGmJV",
  "key37": "3AkEA4ew6MSCmc1hPMQdJoNHJdTK1NSUD8j8bY2T9WWCcq6z7gHDxBEtKHhg5VMUNbTAh2xdTKudMQ5AahncxRAW",
  "key38": "T64W4293QWYfNTimpT769DMEHGGjxSZaYcN7veyTHhHM9J9egK5S6NaChzS1xSKBk7uRtUzHCwGwE4BAYCVLUzZ",
  "key39": "4tZBqtCKg6HgsiKFwgUXwSGa8H6mVAj8qmrF8KuPj757PQ58iEYJL3xuvcV9nwaB9sMzS3hnHgGD2KgNZnefkSaf",
  "key40": "orMsro87iY3fA6WquC6qMfLUgerQYBcDsRJtn2egceNwMBky9nvh23BJ2XZgh335UvuvpnufGiYKegAGhJt64jD",
  "key41": "35t4u21h7DgrcRMDxE1PHAFjJXdy7w6L5t8JNNuwJgU2PwRo3HDYPdpDW2gjUq5QK9zExZu5ptN6NFCSUMimsTd1"
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
