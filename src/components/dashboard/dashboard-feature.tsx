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
    "gJCjvEDKiJRMMwfu6yq3Kh39FKK3zqkEGK6EcdEixtmSk5YwM7nTuFWGGiufbr9rCnLnGRPdqzwyWhkxiEGUxG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1NACoYBN5TyciayUHEe7478tpEcQgtpbepbqWj8SgBiUZ9yYCBC5UYLbBhqQkh1qvcqthCLHqrsD4ZqWkhHZwKs",
  "key1": "5mxPUMEGy1MT75Co7po8QFucBHkXabpB2zjyL1sLDf1jLAt94PmShsym4LAvBvV7nAtHtcbk7BhoTN9baoc3VskL",
  "key2": "3wwHb67cUckXqQU9kpgmRi4ZKrYA9Cg1cq3jaP64GMbLa5JmMJsEciCi9LMqh6pM4vABixNd6TCW2bKwVb89QEvU",
  "key3": "2i4Grf6xVgUja5xuuy7k3YsYTqE6bfZA9friYQfrkwHt6RJfyHhBd4wUrUNn5J7JaXscA3zPth6YiUeEnsUxyndP",
  "key4": "5FLmCaLknPavrdGNJTbMZJpA7PuZLfVQGCVLZfyCyyeoUwi6bnTZfKobRGAPfSoB7rqhRW44Z2YUk1Zz8WECVvCB",
  "key5": "3pxpsy8QChtog8vBag3Q4V6hMFG92GRxDzuiqjef1qtsaBgTDXP7kcKCfAeF397AsJHKpnRKxZ62VhqXP3YGSJ5r",
  "key6": "3Js4yBXB2HvroceGiHFutQ82uAJGYcEhMUVGneqZCdHK1wFCEQzy5rDEyvd6YGgeQoUSiVVkYeLmjamHzkWReSNd",
  "key7": "5vrtTtMHuT1adkkMN3Tzf87VjonsXigPveY48zUtxdMcnR5XHheGMfxKiW4NChE7LbYdJCPi1XbW5XmRQTPo6Hw6",
  "key8": "75Ss5w7JhhKa3RJ9t5DXrQ8fabmtFg3ZszSnpwJJHNMTty82hdNpNjYZzYi9XfGwxCoNJGzbTUhtgrD7YkAD6oB",
  "key9": "2MsxgsH5VqRD1rrK89kHyGcwu9Y7c9odNy6YKawzt8RW8LoteabVsUp7w8JuL72eV2q68AKfdWPgF7qcEX62RvL2",
  "key10": "4iWRSxbn3Emrin2rM2sDB9A3nt4MDbYu7cobreHc9kKUPvPLq3pLdfvcP6SMmWzUhvpyusCT8ig9o3aLLyxSRLMZ",
  "key11": "sPGvfi6qcT1f8jqy2ZYgyH2MujYqDmLPoZDUAufSnxyor83Rc5jMgsFLW9jJ3UEy3BHWcV3Rdf6brotH4s5B1Qf",
  "key12": "46HZXRgcHw1L5uAadTsnWSkjXvoHXEQC1vr8XTY9yhRtSrRZT2vfYTnTAZZV2t3BPgfgRskAM74BJ88itWFgLZ6F",
  "key13": "4ThK5G3M1GCZe428QdWHQ5abZPjDZfPnGHNMJmHwYiFJ3weHmpd3EbmbMqte4Au8YmyGsVdYMU3HiZywHDDi3Df6",
  "key14": "4ewFw6oTbjckest4GUZrmzLA1HUhYewgQ8YWd8B8rmptmrcRgiagDANW2Ndk3vLRuZVHg3o2V6ZWGxz5XLbAyyuz",
  "key15": "3vocrmvYRH9bMeHFRMfwwFKhX3nvnnVCSwW6Z5Rvvc3PnAXdwJVTUMgwRx9kkBdaW3XZYcsuGQfppeKwGehrpKxK",
  "key16": "4PDPMKpM6HmavfwcBe7Lun214ZtpuJNUszZdfp4eaGrFBSTEtWD8CU7AwCCwRGMXYgqt15qunftQV42xcTDKxUeW",
  "key17": "31tAYeeV4sei9gdBoiEo8HVkPFXE2Gcqy6kyX81YNWrk17LfHRB9kQf8DkcFE1jbFWFvpTRZyFFjNXd9HZBpjsuG",
  "key18": "56VpjEzw8hqVF4ekunccRSMzXdkP5w2Gvq2qZAEvyz1bv1oJ57tfoxZY1mMremn4qPJL4peuzSVHk7zuBQQp3i48",
  "key19": "2iBEVgkPEktzrhVqfV5GdjkC1rXMizFS4a3uusrnW2qWoPSUiaCgpSChgU22PoKLqecerzsYukyRKTrhWxzQo293",
  "key20": "2LMD6VuTpY2XWZP2scJXUr84fMZnM1bi3D2C4GX65FDNFDwzcLmhdt2o7oPvwcaBDFdNUjWnYb2f51Fa4LAaA3mU",
  "key21": "XFGnZJpD9RV35mdZE9nEhdJYKwrivFntH7cTk6ewZmsUGCm5okFC7fVY9xbrRZFEKSp3NuKeS6uEqiofXo8d5UH",
  "key22": "5cZ9DV2vHMquc8AACkeKM3kXzDPUWJtqgLY7gWaDR9YCLxJ8kJRJ7M5Wy2QmCdK8LJPdhA99JscbtgVPGZUtpaNL",
  "key23": "3EuoecfYyFjSvgTqBypdH7JyDkAx4qz3eVJfmYT1XkqdCQHDUZjXZKmEbj3wSMXcarKyvpoFieviFyEoBRqUmbDX",
  "key24": "3L1QAdLMBSXeTcxSsNaKEfd3NF8m3GPTZg9WEmyQRDutEpLiyHVwWoeJAWnyJkyg3NSm9y9bi7gpw1yH3JmiAVNd",
  "key25": "4ZTt392YYyuLe2rFtYEFRtGfjYQmgmGms1e1SpoUzheeewjftPSqKes8nzFn61vhCAf1t4zkPr7bAXchVvptsQP6",
  "key26": "5fw3uod3Rg9J28XCrbKL3yAp3X9gxGm38PPgQmvkSKZq6vUQgeJHP46NeGCznsX8RGH8NuAAbjFBnY7jLXoSNzvG",
  "key27": "5WX4gnRRPef9ASkRPLcXF27oqJB7smX367V2siWtSMpfTKXvUpDovQ5w5aYBRiZQ15WyLhA1dH8bGF4u4eWRGCWP",
  "key28": "3uMD3gZea4YyRxi7UutJkDuoTFDtPvkmSqRD2X9AUnbL7xL641qxhpSLzs81xiveBpt5nfwHNfku5mMkvyrFvHNC",
  "key29": "1AyW1Yf2FB3yXgCYGtiTb6Uv8TpmiNxoxVF1RcTbav332VqvUe2pd5PEA7KgZ9PAnZc36oXeEBbavEv34aGs8v6",
  "key30": "bSu2oNtP8AVLdTRnFgBdPvL4BfjpSfXW4TsXzCRM2Lmgf1W2Ry293MEpbZDjDy1SEZ1gJys8vxDJLbmLi3xUU47",
  "key31": "4RqAh9wxjo5pvZB7UibFyh1yGd5g9bJvskNZ3jwwgqAhq4HtzqL85kRvgYYyGxP3jN6gcgLkdsfcfRPFt1LhbvrF",
  "key32": "DzcDj7GgZ9RbGoxyxFo4KDSzg7ucRc1QKqcQoJeo3DKYhhUnY2FXyB8dne5Yoy9R544ogGfKRBYneoXWxYdAeSz",
  "key33": "47tMRQvcMYSdzXp4oiVg1bDzjEuwC3rSuvZ23j5fDaujQLP9h3f4SStUJsKiAeZioVCJLzQsyRE4ARtdVwZFEB2j",
  "key34": "3nxZnrjXhg8QoLWvanDGDvNBmqrpBbD74MfhfZ5squ6xBJihQeH6HbHdjZpoQPnxDfZfLF9NTK651hxjeUDxJrfs",
  "key35": "4g6QdFF4yFA7BhakCx5Pd3SoXo9pUFuFUzfAkAFsrevkkvHy6mHRwNrFvCDx3hRyCqTguaG1jQpWk57jsVKXwpgP",
  "key36": "XsghW3jAQwimZjAWKTp2xQWM6pWs2666oJnLirdzJbXgN8swRyNYSucm13Cke2gRir53F2yPP6hKEtgCDocDbiB",
  "key37": "vJHTwutycNHNYFKTtsPWfyZg4U93Uy4ZVGb8byD8NKxLvEC9MaCuLWo8idFNscGy8XTgpfeLJdogD6Ep4YzKZ7E",
  "key38": "2qZsrw2KwjMSk5nR45GVEi796KQD9jyAEiDrAMMTFsKdhmZ54FScB4BhQPQBaTsLatU4E1FT2rZFw5AyDkq9R4H5",
  "key39": "4SPSLQLskcFd1F7Xy6d2BJUZNZ7hZVhZ1JpbMyiJTXyM62TNQrS9TaKvnvE9Pic9zJWXGmf6uXr46YgDH8wGYD6M",
  "key40": "3Rp9L3J3ZDBydGePHQbXL4VP8qW8Ea43SCKJouWemAJuQnwChzVNdzC6idLneSdFMzCdBQuEfgYUx9PMwJtwpVJ2",
  "key41": "wAKUzBqdwYk3F3HA4t6yF8hoCpSL4K6ktEsd6JUm5KneJBu1Eip4xwP1oCt458iXuMDt1MQZD4AinPPWMxu8akP"
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
