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
    "4EDBZ6FPZDrus8RDTvGasZWHQxKRU4QQJdVWeNQ2HHSoZq15kA1caLBaNgWpZwXAY2CmPRB4WY5TbatfjEQ6BLgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qo15kQg5NtvhuRDBoKPQpaDDYdZouxqbJoSWhHjfjDTfGHKWbJ8XLsFDakjCspDiDTxkBX96LVzqQD4niviNZ3t",
  "key1": "pfGqcvp7YbizbMFDMaBTUvZvZ9Mu7VxL7AhKctLvjs2S4ijVcepW55HYFAGw1VYjwBSKRYaqRipeV41vBt9nkcQ",
  "key2": "xw1haKKBcQ48vvA6dX5zuZysdbNVKDgE3sw5YSBJWpSnovUS4dmM9LRLJZkbzpru827GZXptwm7JUvYPyEiF4ka",
  "key3": "4Xq5kv7s8bZm2mczV1SUxBqanK3BVA4YMmJbB1QMuKXK2DFiL5AeHU3caLpUCRqZ5eL2DUmEsosn5uoz5FhU13f6",
  "key4": "2oVNtryajeXFFS3KLwNPmWY2PJJ6XeWBBki6RhfF6CLu5ZLM7RgLH3aSCLpVb7XzxQEpEm8LXpacVKsDwmHEE2AG",
  "key5": "4hFn2VarUweyyEQHSVPq4Sb6koPLpiwsAi6a3muHncFvebq4LFhgncfFS51iS9EKCdFZmhnGCnyoRrKeK9YQPoxc",
  "key6": "58x8X57CnPdFGrctZbrqsuJ62nMXPmEHTsgxw3BjLSmHEMrwmQtQDXxYjATupZRVoZ4dNQvyR9b4UyTgMfzmEY9Y",
  "key7": "4AaP4dXi6L7VKiWk1StwuTMWCAdKHvcHHAFxHANsEUb57TcSY96mC57H8FwAXHBu95MhAoYFQwVtz9KQAQWrGqkz",
  "key8": "3kxV9TVJ2WBF4Rr6kpFr9GBEMnxcRZEKn7xyartRDaF2kgqE11iSkuv4on81Gnn2ny18fhu4gXJRPChmxBrKrfkm",
  "key9": "4AATy13mkzSM8q8S9YXjNUd74ZxYb6pG1SjjKPsWc2ezYMhhME4NRBFMJCHTHrtfH6xzT6FCD9mJ21Bkx1Jz6sGy",
  "key10": "318AgS9pzPNmZDyLAnk5SV5AjtLoiwVFtd5VpVvKrxW9o4DT5w5jpUebDUB2FZWez23AJvZFdX2NdLs1YxvT1aFw",
  "key11": "5CocMrBn1sX74V5NqKeyFDZFhhiBCYAxMeNpivHetf9JAasTuAcfXNDQLP1Jw66PkqtNfsjYP9iV8qEHz68s1mHq",
  "key12": "29xCfA6YqvJ1FMGxPntxGGGMhYNgCghr3J7VYvbTaqctRucqEcRkg2CAADoUmefdhkbAstHGghkd69uJTC8JWsDp",
  "key13": "36ZqTMMsZR132paqc1px245zh5hmm6WrjPtjJ4tfUGJD3GR7EU9piBs1j1dPsEQPTkn3r8S2F4W1gs4ozgWNm8Lw",
  "key14": "2FKzCBTf7FuuoZGvNKidXzn7w4K98toxYsB5DbcBhR8WRWw57KPKnTGE8e2ikRJg5hsdfb47qhGvsbYqzcuWuEF1",
  "key15": "5KuFfJ355RvYvP97Sp5U9yWjEMZPuCsegY9fn83APHseGuvhg6qtysrMu9BafmLW3yuKrC6JjvKBAPnJkafGgHob",
  "key16": "3sNj54CFK9eyxMTZwsTpdVzrqyWU2fXWebp63wj2VsKkczAtTnbYH9CqufUwykkCa49nvWqvQR8GiEdFpqG18Aj7",
  "key17": "5biWSjvprpRUqYfKQNEGpF28xjQqEGVSedMMs26bUhYqcp2wh1v8T6fkNp21pKFWTAdtv7pDpgWemgk4SJHLYnzE",
  "key18": "4G12mrSPHHb6ewMDkKTSAbYGjhcdoppVhVVJE2iJ7aig6YDaDVXFddoNoNxcDqQScfNfwyvWtTJmf429zyNHFSmo",
  "key19": "3e7XyuRph41e6a4ALpKDSxXnVd6cA4RxVxCzpMwFBtvkB8rSJbJk4NK6o8rcg3tbpFeCq3ny24uAQJRCV9e3Wm94",
  "key20": "DJShQqy8ZiStaYAxbr8FGwbh3ed7kX1MyfdnpvM4zt8RivhQ51ynVZoSpyvRtRGYBJTLCgZjPDhFVjqTwfTDWjP",
  "key21": "4rZWqyXT78mMjPcQ6NMTNxanJ1VUT4NiNertRGrMdcQ1R41z99jAwjQo8SXcUTVtaxB39k6hjxbM4BQEt4cuk4f2",
  "key22": "4pV3PmhZgAbPvJBYmKMSZnZju4L98uXrKFpQgRwipaReACiUpd6rRjBAdPYJP9jTSCL3tkDELHUxaMempiY1hvTk",
  "key23": "5XqunKiQFbDnsrXMThMdpQQqKfoLY7xaexeKhj1vGB7GeX9gsTBDedCVG6NivLvtEb4oqk6yEHzuq1jKkEaD8VHB",
  "key24": "2USkoKpEunUKbv1EyiQ34ym6H7is5sfbiMcee52jtfJVQcD79sHeFNcoQRC6MxLt7uQ3xZjUYRGn71wCTNZTUXi3",
  "key25": "2zLBeqvR1JZtLsddRamvNGn9dXCSHGHCsz1qn1ai8UnkQkEwqCsCyBcyVCgd4A3ypF83uMETmR2GfFeZeSbcKhJF",
  "key26": "48ZbztBKVNTjkPra2A2rKkR9KatkLrh1iWH9uVYkJZhSJstsFoGHRnuyRmR9edmAHqE8g2v211M9t4jAcqkbekab",
  "key27": "4JcXmufDhRcn2WFBD3CM5pya6Hq1KVNuq3ssLhgtfiypb1thMfrsSyRtRUz6SiLuuyiQ4z8876TpKAMt3f5AVYdF",
  "key28": "29Mo6u1AtuJkSLUfkzVLbrP8osMss1JDZZm1a54SNUgFWmxwtsxdTtnAV8wR7HzwFRkQbmvGBGMHWqJH6pNGPhJW",
  "key29": "37bBdVg132WDHN7XNzQkU3AJUu8bGHfjYTxvWbXTaQBjRAUYqYBpvvj3aBFJw46XNNAeWUDnrqAzNNXjphHe5Tqt",
  "key30": "3TNyc92PjRx7SiZ2JrM8JYaWrNiQ9i3cBLcHk9VM86TMxwEnQJq2r9yR7qgdcvJNzku5fphYbqm5FuzAsQRBywV",
  "key31": "5RLzYtBGA7A5kYnjrRFtKrRXAWEdpbckDcEtWbAENgSFkjTjrvEH3AGr1fE6Mduw5zGyM5eqfRpJjdSWyFswwaEc",
  "key32": "3QdTNmLX1re6XBVrZi95xfUBtD6pg3yvvADE6zBjufaRXd5KgXAZMAsAjhhZABqrPixN6G2oxzd6hsaE3dVTwMgL",
  "key33": "2gwXoer8WviUyNx7BaJdA2716mzRsLCh4gvBcLkG7Qptds9JrLHBDPZfTHUQ4ZeSdy7vHxw9GupPp6uQQFVoDaN"
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
