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
    "5LNkUqwXfX3SXR8SXmJvCdQghULiqdUiNUrQJVM3EpVg7bmMAeyEXx18Ui7k7Rw8zaeii6gut774BLSvN9L5iWYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JDmeX6a8pNjjin7aZf2kRpK2uLsAJC2NFrbEzVjQfhDuzdqPibQ3kHe6ctRPmcoDYwUqV2sL5qWLW4oTejVaKG5",
  "key1": "3mVdJKgoeLwk4i2Nwgjrr3tRQBMGyFh4qB2Sq7u8oFwBX2LnKkf6dcj2AtcvW2ZkpqqT4AnF2nQfpkxEgXDdPtKL",
  "key2": "5VL4fFtFni319Vz6ZQRziZm7YQKFsnYU96ob8Y9Lm5XmyTk3ajeQAMkgYzii97JZ2tJxQNmtosRF2JRVZspjm1dz",
  "key3": "ygvQRWsk5NPys8wD9frjEF9wN63YZ3wtKF4yn8fJyC3HnmGo6AqQ9kZDK75mDeAtEFa8aTAsVk3Xb4zh1CwBrFi",
  "key4": "4u7vULpFS68LeNYonpG6TiW57CZYswXzANktqqeSmvpftDUF4HNS44PB7bn8XxyNaXE5ZRviF6GF6rfovWh8A42V",
  "key5": "3nKQB5Ygvz3VPemG1kBHk6s2wb93yBdCMABctv2vLxT69HECqcuk2LnRce94CRQfjM7PQp9puZikXEFF7ZhjmG8n",
  "key6": "5vSnRm9Y4poX3sojr3hvvDcc1W4zcgA9sN4VQP3Dcgi2q6vcP3cPWatkduews5gUGRJMwhasXKSKd4izv5KaJMdR",
  "key7": "2EhyThCtfYWw2G29qBZDH43kDRxMaaEuMsDpZzFHnBt55KoAnuTXkFbRuDqbdwrS7QgnqKBm8oH3BsdFhvCU8RGT",
  "key8": "swR2DGqLBEzycdzHckUvYWHMKLdSTk3nnfNWdBcvx6xH3rdX9jjFYgnNFUairGK5jscshxLdzezSsJZAd38KWTT",
  "key9": "3a4qrAcDfvWtpEyWmN4i8YqWaTd7oDt5hCry69rseohD7X551Eo6hmK3s354HHrXtDFnDgcnY15u1ASdKu1uruPH",
  "key10": "CfqqqyDYxE3nSpnd8JKKp2CZ8q5iPeMru9tDBwJ76E8LtgMsVwN7crJLLHYD76E6Ujb38LNtixERm1ifF1cP65N",
  "key11": "N3gb8vpqJevVvxzQqSikHQGZD4Ku8dZbC6iafaNKWs8ZfL3yBiLs463nKJw7kxBXT7u4VvEWVb1hYLsNpZs6VQq",
  "key12": "2nDg85BhneidE4s4cggRk9rBm173pbMQemmmYYVuKSU2hib1KUtnvLP7APu9bxBm8ZdxnMvQY6TE1pHPBzW3ovN8",
  "key13": "5aWMDN8y2AVuYTGSEAv3YSNDTCeivKzzQBhBCctkL8RU7NSYdQcErkL9PdEa1LxeTCHNbJS6ZTrLX9BcQL4Ps2WQ",
  "key14": "3YzNQj5KZ1YyNiTaFxNMMZT8R2kcA3Y5GK2sNULetsowXUsS4TTcaAQpPUiEevdM3pRMLo5DdU8xEjvsLWSoTM3U",
  "key15": "2J9gHxgeMK3oHh8c8YsCWgenYnV2PEcGJCXknocsaFqLAQezcDgCmTLRnV9JaF5tLrM4EnMivRhJZkhSJdTLQbZG",
  "key16": "56cdtmDbHXhaaydMXCXJ56cu9fprUnzREJHx6SD1JPXP47VmL54HG5rhA1Xk3Ej61kccvLEymj1QwJ7iuvqKwice",
  "key17": "5u61dNtNce2EpF8HK1B9P7gSSH97v4hJZasGje1JXfhRYYnqYw8Y8oWHsGesRHTLyAiYtBhv18hRvGKidthtmPED",
  "key18": "4Qg9wEcVR5PLnrWvNrRRwimo1CQWJjoQgLYsp7Ffs7Ht1PKymty1r4oRf8U2LJ9Lc1nHu8fVEVFQdJ4KWcuZgWN6",
  "key19": "46ZyijR1G5hFq3L4SmkjBdssd6NZenvnCA9a6uPLj8pfb7Q9ybGnwYLUMf8cgpQgQZUf2s2CudiVNis8axe3smeP",
  "key20": "GuR58K4HuvUD8eWV7nG4mocfvYtTCQ4gyxcjNZU2tho8Lk6XaLU5rkTiDA3K6DgShcEYNfoxsPDLJLwktwdcNy1",
  "key21": "3Pfwqjk7QLYGuzKfk8Uzw8KFFvStZRy2NFi79CR53PFzdxWzzFD2cUan7uPfrXp7LZ1NedsjPK5fVEyrf3HHhxGA",
  "key22": "2U93ruR63hLFueEYjgvbqUJYV4mQFK2MEX72nCYrDeSeyGJwpinguHshsRqM3d2upCvLmDxX21hvq2jfsGnquGqT",
  "key23": "3waKLDHuX9rjhXt9CtAfwwp1J4JUbGKgDZ5aVRx53L8Ky2cK8EQoCPF5owLF9BquXBgTgbmViEvjfYPZPZ1zoMEe",
  "key24": "2tQuWFpQWZLiBGfRM75qPb6hvs5vnXPg9EH6Rk7prds3LREkSieZ4pBjHigu2JvnJ2xgB546GMPMeMEV527VUQoY",
  "key25": "eVQu1UCfJpBCQaFcBg2LGuB4HmradP7dSm5Yefufwuq6uXTmFEd7SAtZp8Dmi3oEXwWmL1dxyozHDcpNdDKkoAi",
  "key26": "4mPBFoDNdTc4AysWUQQ6SnamhA9YNk6udJMuat4q1rJLrG1Xx6bChwRWJcqLT3MNqwQdMDFdBmKqY1rt3dXEFmhU",
  "key27": "4K7DUpvpLyomcGucFNmXyzncVSUALGCgvbRV3H5ofN5cL8eJuzqu7gwDxMqr6aKbhdwCz5f3QBWhDBWT2aAr5iva",
  "key28": "24NtZ1WNUEohMzYjvKcFCV7WVvpimzSzpP9qTRy2NxtqK5e8qqk48Kvgan5h4aXTAVBnKyQcqLWrJGaxUHUNrGzS",
  "key29": "CdjgKiH6VybSg9PWmh9dY9Negx1fToBhYEKK7CeAN31oNmhm3yRrHZe4Q4hFFMweCmTuBpLYdZJaHfv1NF6WBbm",
  "key30": "3wdcno6teB4eCo3et1q4HEx8ngQ8QJwarGQpwscXcYWVLiybxSYbpU4dym1yjcYxUbLmwvUdP5XD1rPFyM3NFSTS",
  "key31": "4mjwENW3awhJLcTvpMyVWzUceCz9VEVpKgK4uZHKbakm9ZXzXDrQ3c1DyRr6vqGXhHFVoEjdXL6dkgnReDz49tXP",
  "key32": "417DjrzjAZN4q8vFw8PMU34xDY1s94EoErkBZuJkdu4SasscjRd7NTtPMspH4w7YkpQZFmYZiYyFbJCpSzyuPJLa",
  "key33": "5vWoyNxXZW8JAuVMYZV4CojmsMFxi4W3DTcjmuBUTEmKqrFyWDVcwg6V2divAsxg7ehmDAAzj7uSvmTYSHqffSYs",
  "key34": "4YL8fgDt9S2nEzoscDwDvsBBJ931ncexUXWg2raDCdPQz49yhEBALMdQoCmAUvxRESUogzX6w2h3aoSTuMFVBaLg",
  "key35": "4zTydFT6JF6fawfvtxAUaWHCaztfcKRSy95ZsoRP3ny7UhUq4D448ssbyD969fcK8jUBeC1sUgjPbtHiaipTTkwF",
  "key36": "rAWNZXVqBpyCxuK9bbHynEdNLdWW73UUtNyc2oJv8hXFKtZJbsHFqrc6NoURHHbsVJXs94v7M4WmyYMmdoFgX8W",
  "key37": "4besV7TuonZ8o3odWiuKTu6tsa8zJM4NY9rbfgGaYR6PxtMRuVjcrqc21zuJKszSKsSqsoWX9vRoshza5f2nE5ME",
  "key38": "5tug3Tx5xnfEoQHVTvgF7aMtWzDHtSJQVv9modEo1qjRxWnnRECiqq2xq269gu37mjZtcGE9NfCYBvw77QS4QmVW",
  "key39": "5qcKLizNYdj3e9ohox1DNET8K5T9p54qmKEa5uTdYWzwbXqfA6oebDYJjk4DTMTcrVnpvdRYi2xcDKuoz4yqksQS",
  "key40": "4Qe7qeE3Bg6AvBrV2K9M7h4rxFsT8bdkXzGHMHqxfJP1FxBiuaRcTVwHitG9SFK9yecnHXZBZXoHZNopfukaLqY5",
  "key41": "5x5gkTeJHN4BENqRkxbDDTCMStkpfZ7UJGWsvNkw5Sa5QeXRVSMPEMXZKXPfiU1E86NCSVKsugUxWbuAZHTJH81i",
  "key42": "2qAMuh2RS2gAtJhDxBcLwbTE9jYnEXnuMtfbNzg1T6pyTAPujgZSvSvwvjrmUA9PSyoSpqSc1rrDNjjFU8tp7yvq",
  "key43": "fq5YXoA1TLd2mmobkajNze8GYHSL8WxNH4Xyrrf6vXrWC1RVmAjXcRgZTUDt2q3jiomZxAk3kEZYMHtfCFaXNqT",
  "key44": "4yQ2HzVHTdFvfrB4qTpcW8dPS3Bc1LwhDfi7TdGP3wBeCvBhrKxi3Tbt8UAgHuctrenYF9yYHRCtYQ7mETHe1kkD",
  "key45": "2xgcSH6eu1KjiFrZG9MUPHrxhVhdo34QDi7cSmAUjd6K9gPrVPHUNXvUFLBp1om4xBFgbtewBWhxDQywu3y1MMD",
  "key46": "5gwYM9GoBbmSkFMj7VeZfbyPEUqCYKoLthTC45rZPMDbW8sS2tdsev9jjyYQSwGsMEtPXo65MQB8e4QvXubdCQT3",
  "key47": "3c9bRDSiYHhdTbRbB5j9FwUkXC7AApon34pVjeiUkM1KR68MJzAVKF9rEHSkgWV97Y3b2NyTvYtF3od2X8rBBY1G",
  "key48": "aVTrGSaaMX722jvDqmf9fUBHkTHrv7U1rx2hUsyy4M51Xcyrmp1hsCmwt5f1g45Y3iCZwDRPg7p8AsQ4EEgnqx4",
  "key49": "5yERoEauyUpEqwDz8LGbvDE6yToLbGAkEXb6U5CYMrxREX3CWvSVnS4PAaLBvHju31mxLHNzAz9HFCmwB7HDgHFz"
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
