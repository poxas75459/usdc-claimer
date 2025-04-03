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
    "2xrMt4FoqquDTCHgreD3fSqUsCJWT1puKkMXeY8ckEQ4EHkZswg6qeRKoywK2897V5ds2B5t6kLV7Cdikg5R4rrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V37mMAGpZ3CALMSFhX7KBVZe1BhP8XbTE6nvBczs964QHw3uUpNX6d4euHYDHof1ruxxCyWsqHgiy2zeQpBMmia",
  "key1": "4wUw4d8XscqqbcALXTMPAcMDCcT8vB7cMNrPWAi2tQbF26fWs99qm2jd9PLyxP2saA19QYYFJqjoq9SfycSeF7RK",
  "key2": "LLF5Y4uKgJahPMYn9MZja5zkywamQW8cUrEn42RPm4TRfbtK6L4TPK6DPyQ1nkqBNFvNMdyPYG7q1w3xV5suUdX",
  "key3": "5io7U7EC8xNZUNNNUfjf9KS7CrskpKvR3gUShy6MTT3riyn4wuy9HA3RBZdS7Ea8MYdHxd3iCYH5bSEtsNNLJNeQ",
  "key4": "5vMxqwZ99YsPSvDmC8ow4bnKghQCsdAZ2xxmBuxyaN2DCTddAGgGp7LvpxAp6qJpQ53vpBYwUwCfNh7o8pqdU5H4",
  "key5": "3yf8PoqSZuWva4LcPQZ5G8bPamLqFdttM1LcR1GLYuPs2FKBM5JPsz6qyqWGsKYYitsEHox8CswsV3zemLva73wv",
  "key6": "26dco9YhGeuuVNNHWpGWu1JhevHUzJSsHYiHuCvwaRwDAtPdFn1K7YALB6XEk26TLneCy9rYWXZB1mpKnnPqbXPU",
  "key7": "3ad8J8SApiSYCwtoDD5dFiBTGMqbdTxjuoJPLgNW8ZZMczXR87dkZ7dzC7UPLz1m4PqNCTx87qBid4ZX1iTsLYn1",
  "key8": "5x7ocdrLPFYxuqJEAJykzd9gXjDbF1Qh6qrf46VspBQ1CpuZdYH4Tm3n9QpaKYdYDG3BENnUZvNxUKb9WiwZJf7t",
  "key9": "4Dd4S9QDnitLVmZEX1zVUwGKbJkUv3ggzFbPDPCZrjHrbwxiAju32FzZ4VN2VVk2fXFiLNbb9yXrJNRLF7821bF6",
  "key10": "aCGy1WammMJ2qcSMV7Ehh2y8fAGs7tai7poLcAXiivM1p1kUbgh1QXuhSCzmyE1TnqpVpnvGtzs5xSAGXxmrCVY",
  "key11": "3NTG15wvFdHNznCxuXtJCuDYTpHLBwU2V1QpsiRGpBeaLfBP9SCdWgonQurtaHEauaAeAcz8sPcgj76QVBfN6zzF",
  "key12": "4szAv6grqbf5myAw47vow4euTDYZScSmRpaskhvayKasirSYGaQZV7ob8Wf5heFXoWAWYRT5mpeFtALX9o671MNV",
  "key13": "2DcG8sRNRecRqTVNBGq65Uw7hCZEfXwMU3gtZskQioVhkHxoesTjAusLri7fjp1wW2E9WibPvUUUT9vD3jSvGyCo",
  "key14": "4aAtSqxFKk2qpaWV5ZAVC4KrrhPmANX5vo9o1Q46mmEqo6wdBjRBgxWLjK4EueeHA3LhDT7Ga9hNc2k7yVosiHRA",
  "key15": "eWrGDQWCfBcc1JgbSzofmSX4zF9M7NFSFpx4MusP1DpEJRjZ2TABNL42ZmFtG29sDNBxd2Lgkemt8f5T26vwTYa",
  "key16": "3ChbwKwWFBgGk8W9JJ2vVJ6JDUQhGWBnYLXtAFNcoErBX2aXPEP7AQ2owanBX3bDzqP8YgEAiqRwSmoWnKtxzrLP",
  "key17": "3FjK4jVU5K4bnpgAyMQbhCNuUa42oHdm98m1DW2vGGdPbhs5YTonkJYcu4B6PMvuad2ZaUKC2cSRSP4ZF4fv7Vk4",
  "key18": "4p18rbJg22rv9vDhV9JdcFRby7rr7Qo19nrEt4rYUHSxmkP7aszdsScbgbGZnGwYoASASnc2pmSGYErAyki2R8VR",
  "key19": "waMnUE5Ye5Tr6Jo8MpKXirmyqB46FHTWw9Q1a4K9BDZxyckgapXgmP3WEq35efKPiP6hjTXkjqh84ZD8XZdKQvJ",
  "key20": "5NPvvTBbd6MRfgM1aikjGGW3YJyy4U15Z27qYGf1eJeYumm16eXzi8hNSfCvBzyqwR819NX6aP3ZiPx5dF9qepNE",
  "key21": "6yP9o3aJaaSmbNoyzwzUJDWS5QW6RMVbtPKXbTAy9SPksSe4PztcVXNYweFLchReFHiY7qYsVGBHVUkdk3HXLXc",
  "key22": "4RNF3dRZEdoLmf5a6bRtASukbP1XocWGLAYkCWBX1pijQEFeFA7se1zXxQLenSapSKwfJwXGzbUfBH8qw43Gt5XC",
  "key23": "3vot5GuNo6LZr92eFWSbHkQJTKWfSQhi9HNV3W5Q4wAiWNsAfvzMoEJthihUXy6A77gdif59FR8Yz9bGdGGDPNM9",
  "key24": "37oQZukm648NmwUgLazEz9ghDMrY8MRVs1xev2L2PxjH6pEDtwafu1L96AY2L8J8NiCj2YEV1vdnzRNzyRGitYRt",
  "key25": "44SX4cZxmSnEc2h722eXTRdjYGQdYLnUA8qDcszCZkdajT4nkgnL3V7qqw89RUjF68fX4o44VcRDaVZ7X81j72qU",
  "key26": "4jjJVd9GS3bHzMWgqfkkfBQwrWG2FeoJ83rWX7mH8xXrNLJrAkqY8dagacVarYgJwKDw8EzdPJ7NwkDq4dqAVH4a",
  "key27": "266ztTN6KorQCPexbuXNAdjQD3Ysz5JqKR8mKirBZYQCJD5cbLu25ow3yT1BDEKv8ZM69oqdLAj6qcU1kC8LMCLT",
  "key28": "4yHfDo8J38p3PwDmg6PQSpLREgjXMxvDbuTfn131HeyYhVbbsXKhSQCAwQJmYanBeswCNps35mL8CeZ2i51BzVCP",
  "key29": "2zMfwjaFRvosLY5CjaW9YEhRcGWZGVMrzioSSyhBtPap63P7AmX6Hqp5Ajwih3od8C4dduRwkihFJXiwQ9xc5pYk",
  "key30": "613JjdZ1AYt9q1qVyiZczUBN6ytDn6KHeoT6MSAHEApz7M1ExqDkPm2pepsrm2utr77PYP8hrtmvBpRzA3eGJvE8",
  "key31": "5szupYma2W6qqvHx8sh4PaugopuiX7Azce5YX5Ecu9LpfLpx9SNL3vYTHoZGw7hfjaQrJm79NRHXasgGiobVruT7",
  "key32": "3sLvvWbNypJHpVtmyBTC84SZXb9ToG6eaY6mUrZpzvSNzNxNwbXdBwMrmhDKjX8Xab6UfkirnwRr8LNF7NJYib3g",
  "key33": "edNWq6DdRKy1a1NNTKLVxprc8rV4XyKWFDqRi4wkXEb82Bu5JeJvkasUX8bAbds9Jh87zc4HdhR3CMDHttqQTL3"
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
