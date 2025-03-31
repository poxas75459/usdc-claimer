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
    "65fxYobYmWx5NZop2A298yiNo9oa3xdD8emkpueohz314G16xen7GEF9n8kP964xpuASk4z487AWGXNEehhHGUmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SWWuHqs7tbiyLTUigAzYE3SuaZp8VUx4nXtv9YZJuCHZHFmVPwkvyiard3yMDt1LoXHTamhm6XBM2CXAY6rUz63",
  "key1": "RqrTTLcYR1JvrBWiBGiuUXgUe7TqW6mqhbqfbLDCGgARs4D7Gn1sHHMkuWjge24rW9vGv8dwPyuPpPcGyQJz63r",
  "key2": "3e7Y92bBDMcFFWmvmmqYtUFauDuHWDEhWpyKEjyHprqiPuDBkdsR31917VcsLwMgFaF4WLEewj8cocZeY7JRgZ6c",
  "key3": "3GRMXh6LLgjx4zpPDsZaHspauwdNYN4iPjPeeN6dwGUszFUE6Fbu4NFyvfZ2CQfbT8LuejNnxYKd4qNUypqptUDn",
  "key4": "42kbciXAt9thN9Qh46dYemEw4aBrkwzmrTgBFFMUuvsJDfUJLrArsqzvZKG6NaLdE7R3175MZS7VfKBs1vLvPjpm",
  "key5": "2x9FZaBzbS9Wr1ExoUBtKLqnhuBFJdpKwWFihhqqfaBJZ1EfeqrS3fLXnoEsaKibX7A2fG27NgncfLKmyvYLeXyk",
  "key6": "2o8m2QRha9j5bL7dYakvmMpmBc1TkSYqU5NfU6RaaNQwqvaDEhYnuj6Ui4P54suGrsQGGGhRse82GPGDbKaKzZUN",
  "key7": "66zjwgctA47qvXC3wCBSynzfjUFAGg9xkcz1BFNBsHwYQEcsowai3eBBv5ndADxrUZQoY1wcmxLgQAKbrrN8dhef",
  "key8": "DnWN5TWwWarh4WqFHDn98uoT8m716Jy4mHdZQEBU2KrkgBYBbu6ZRmD2if6zMjKc6j9ygeK5f54GcUcQpzecxUg",
  "key9": "2sjsUeqm4kW2trzss7jiCgEZnGQqCs9WBXJm33SwNwq7FVQfBjAAFbY125cwjjJrwso8CYHNi2WExK6f3azbfB6Q",
  "key10": "55FaxFaeDNSuhL4mGosGUjQoYuHENFFW8wKM9KwNhTqK8ce8AiKXbBjbgwP99bi4twtLx2aQpp735e3nAhAjNAgk",
  "key11": "4qUxxxTtoxFuUMpPGTCu2j3HdHEVQgZRtMhk6VrYMCXXQEmduNjNTToaanWj4pfVsNGTCra7Gv3xKE7vT7HFht6m",
  "key12": "3HEqg7nDdM8T6zLPJiUNetEPmz5CEj8J95YNztuT6Z5sa8Xp4KTUsNvPzSgpAqtc7uJdDFC4M3RbZZCmgvBwKeN2",
  "key13": "nLcDBe9HSiosonX9UqPAQjsaBN6AcuoK3cZWUpjnZpSzQUDpkCi8M3i584We8tsff3mJPEUYinNE2tY5uP1h3zt",
  "key14": "39chpqaPYLypZe9hiqHkCvaoVPcLq97z2F2w14uiaC6McDd4xjAWN4v3SLCFscGo3edPwkMgea9rgoMgKDB8HcmW",
  "key15": "2zNawqLq7oFQcqnXeTuTuQngLwi9Fa8UqjXpZyzsrvcWXdPhZK7AA5AAZ8jRur62WDJbjnBJCLA6VWE385apGGki",
  "key16": "5udayCUVugxgVt7nuNUJzStX9gUDKTgN6Qz7b4tcymw5AH8VAqbwcSVkSEXfnWe1JjZS6Pdnt7tZc5VLCUE25dWq",
  "key17": "5rPq3Yd2VjdnG1PKrNpmuNwZ6ss5B3wHDxxbT8NfQ4ZrMSppyUeMCsf1eRqg9zPKt48Xh2WtidTfEVzuj9vsxdzS",
  "key18": "YCYQTTWJLsEhXX3VuyDLqq6o4pnofyE4g7BMp8iS1kgNyVAwMo6RGxLCDJAYCugZkW88Ph5FV3eNRk1jymsm3h8",
  "key19": "4CTQzrdTHSRrivN7To9isvA2VJ4SUJqaEHY5D4wDpHA6NiBMj6m3xbXr5cryJb9dxGPyZDWiL8HE4vYZCdJKnVem",
  "key20": "56bHrtKieF8EMdfFdJbp2Q9tq78r9NafgRty66ARAuM8NcUf5ontA38nA8243bmbaMqwmMRqhT5foGEKZzQUgNsP",
  "key21": "4fEPDv4xq7CWx7K3kuRe8DDx7ugRYvZx7MfXyCj1prNwkPByQURCTAStSvafL49W8ARUDhVq486Bz9nABjLGKGav",
  "key22": "4cBnrC56GJobV2CiaUrfEWjbzRod67fTwPGSRVSBWX3UHtFkztgyHo1XjqoFVj3No8p5LW4Yc57kVsM2GXU3aB9r",
  "key23": "3o6uk1oaeckK5wtFjWDrr2Ynx7eVdwJYYX7M8EyP6GV11jShtFqBxswdKwKGvBuuavDdkXuJiffNjwrmZQ6eLtLn",
  "key24": "CXbWgjsxDkcN4h9a3Pr3PYWfbtoSa4XayFbb531hxmtUFPhUPbW4MawTmHBE8ZuexfEZAhCw4oninj2n5uni5Kp",
  "key25": "2Z3YYEEyPnQpBD3Vduh2dRQ2njVY1Z4k7ysuf1gD8DLoz7v2eLfr8LnRZdZ4DFiLFvkZBSknJQ6AFErF2V7W9txa",
  "key26": "3Y5XGQRn5ZQ6Q7s1bXgiBXzmL5bpF4QsbXp87Nv28mpaVhbr8R2HpnoSZEsZXz7QnNupdQfkoDyAaQvfg8LxFTFj",
  "key27": "4fxrFzrdaBQ9S6HduEnyEBVnX3eodD2g94oWZR8jEGqiVasrbfMAiC777DZEyt6vs5TYPZFdx1ew1Pr6zpRxHgwB",
  "key28": "46ArirY1DADFEVNmZK2cPfVZym9jRWWUpYgEjNpBr71TmtvFT3eEfHaNQyBVxCvzg3EPkBzHNNv92o5Pt9Ud9z3o",
  "key29": "3fpLWrYL9fGhKCvdej9JKZEv9f2ix1aq2CoG3bwwDvK6iD62vXoyLPSH2Jhm8E4DynV5Loxswnwj13XsnaTzNZuT",
  "key30": "46DNmRRqJxa9zfejra2tSQWTQW8pUXPGUbwAx5rLCBi1gPbUMxrD7evXtuBFNFyV8TGgXcRxk3P1UiHm6ugtUvSi",
  "key31": "4z1CP7yHnmkTct5Kc2ftP7qyTSRcAZWUzFxhaSDTvgPJd9Kn6dz8VUVtCz5xfhqWVYbzYTWszdFRUmwL3FTEwx1T",
  "key32": "54fPSVQSMg65g6dC3Wra1BeCyGmsbDzMqqRYULNLKU8XtZU6np5N6EXfuYVbXzQU6bzia2EjFN9iXiaBFH4Ha8Yc",
  "key33": "573wzg8Wtenmumf4az5spyHASAzjQLY3pTfyVyHjagvUm6eTmJTzXWBhRS44UUsQKkacK3VQkKRJUx4oHcRUodgj",
  "key34": "5i3bfaUv9xTmvuwM69HejYktcCvAuoNa4JqR7HoDEcNvx9b3qjUjwUkLBbhKAyTr3ktXHb1K1jQrctt5K2Je1LEs",
  "key35": "3PVwUEKEyszV37cKNFQKWXH9K18qA3S6YGMzAwTrehKJ8A4hi3M6ZzhfrvzEvo5G2BwVV6PGMbwbG9795CBJFYAr",
  "key36": "3MkXP1BmoezVztYnCTvCeaNqxua3ZR7GRYmFpA7gNbdoXmFtFvfRp3AvQrAbGnPSp2xRYRDXxDzEuE2332xFypkQ",
  "key37": "38JSHNTYDHqz295pEXZmuQF9wm3YZZAYZ8ZbuxE9R4wBQVTAv2thVssuRdA55yyyZBVkfKJrG7Z7YDzfECe8yHQF",
  "key38": "3xWnmQMSpYuvz8xy1HCG87Dx4VmFZBeV1aopxLUV2F4vfZgXnagJDUPy8GQDbqoqoCtLfoKCdsSJQjYrBmMeSibY",
  "key39": "4To5MsasVggvmPFcZAbkrCo5J6TLiVi8jnygk8MEE9W6ShBRHopzrkJsYC7qi7b9DTMRz5SRCSFzmmoQXMJQBqx9",
  "key40": "2FdqUwB6vVUYFH5Drdqt8TF8Uc5BCpSYvRttZQmd2fW5eKEne35vhK94pQa1Z2yogy5v325NdZNgyxYPpBDx8uwe",
  "key41": "2MFTv8kqTD8og2KMiy2bbniWaB4r7DXGhdzkNTP9oi9UByTM4schtWKP6zc6YtyDtc6QUpRKpNyFs414CDoXvKZe",
  "key42": "3Mh9udVZEGcs8HJLbVPEPuMTaQsqXcZjTF4ZjBdYnsm1sJEH4AiVm1k4XDQZkcj6EgAVxyVx4xuUHMD383nAoDUk",
  "key43": "GCNpaiqfHQpaepYozQtm1HzfNsh2Gu4QpHw7iisUSrCPWU2n3gJ2zu4ioDcLxMDn8iAAZmx24azKCBjCCJFAh4L",
  "key44": "3DNZSwhF4owsuy5fTtseYKcndhT8SpAXThiCrvkgeCopPwrZo38FE2aj15FA2fgoh7Duf3pDwtPettSZdvuNdRrz"
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
