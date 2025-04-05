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
    "5Dr8fvAGgxEaEUFuwE7TwzSfMXUfHKVsXzvYVg8xiAJ48sxvsVuYHrSbQwssdeKHvn6P8hPLAsVTPaR3J4kThiTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aRKEiNjBn8qt5dVn9au8mawAWoyNVcue2toAHGcqanqa7TaALqs5Tiau4L6VkAkkVJCPjg7HykxcMmAUNjqtM2v",
  "key1": "4Kmqsm519nsp1T9u7NKwV89bAFcHGoMTsxPRoUATepd3oN9XCmXpycN6pv8f1mPYSL5tr9j9NrZkTcHHSUfkwTts",
  "key2": "56AXpq7JwcAQakCzuuknpF2xL2Zkuiu6N6NUv2hyFk5S18MdKV9W7PX9u6U9V8pxuimjDMitAsiV3psT8M16ATAj",
  "key3": "zDjcESqCsPtgxSAncfumpmnCG5gGCircbPR8pVk66YybB91f76cbUihB2hyp42UqBfZ5CSN71PJjtGrp896sfcU",
  "key4": "5ep6PrCQM9jvwNoz5HL3ufXBwxiCRw962kyrWy8NtVSiL1JBeHBWypGDZFSgWS34U9gtH6LNEa3GayBPP1DxRBgX",
  "key5": "3pXE2uMKjfukgHPMMhEXY4ndZbdzzghDsRMDymf7pDbwbENA7sEzQsxzhT97kpxyrSPSyYs7JGCTjmavr2nnJKbY",
  "key6": "3zG4t9BQ7ud4vFrPDxnixuvSz757tzDzxxC5JweFms4cdRj3R6AUCh1C9mSD4mg1jeRs3wo6qk4iPUSWnEm23XSY",
  "key7": "5RYyVad6sF4kmn3Ezyz5CeTmC7dNB8wr5Xa9bSnBnyFahvpKtz8DCsQVWbACFq2v4zFzYQVWZs5ib2hwKoeUGNtD",
  "key8": "4bueUdX2KbVhDLLQfub911uUpWzuEFcaczc5au3sMzjd3dd2FDVWscJqrCRJDCknPJvyJkGtT7KuJmNPHj5fR3M1",
  "key9": "5nPnLy3ps2RuqADzf2e38LQrAMDyW4cXddEixHZ138vqXsHAzk8vWRkRYc7nxrX4pqjxMXaf2KamB3zxoc7NKTbP",
  "key10": "E2agRiMmYUgmrPvSzFGSgzVsdeoCoiSzqFKXjZykiUS5dj4191Sfzi1YRbwm5LtQSBH2VbK1a4hi6xj9xrvmGMg",
  "key11": "5W3WqFwwcJnyFni1eB3mtUkGvvLddoR3aBY3hbXJdvy6Gs8MS33VNR7GdvQVfjPQhJPm9hfQ66RgjEDEZEE7B3o3",
  "key12": "3V8TtR2yuZP8sMNwCTGbEUnnnVTRx8mavDzqaQDqyhCWJtaQBDihJU8saubyprHncxpZXe4KEWnoBJAoiB2HcucY",
  "key13": "2Spj1k1WLHKLezR1uyMbBcFS3mSWir8tbt2imCa36sTL9V2KJSMQFxrx2WjvnAkrB1ANgDmMuYhiFHr5ScWJofD8",
  "key14": "5PmBgSBe46PrSxtufdg2WH8bH9p1Z1k76fHDUyjDzwiLJn3dYY6KMKTzjbpgye2gGpJs9AD9ydbBUErErbMvHqtM",
  "key15": "4q8JG1EuKNP1FhEhjCfR17J9aoUGyWJsywjjvMzqGE19N6QL8HSBcpBAoTw8bJpD3uTeVnJTp1pzCLBDPxwwxP2q",
  "key16": "BHnoX6kGZbkVCPrbZu8YK2cofBeKTDHGazpUcfP9Tk1HbYhaRePpgpKG9BB6mhVx1JBd4sbBLm4ZYUfN82WAo4Z",
  "key17": "25Vu9d9WzA2yVMbEgrBwTm8Uv4civnnj2giBP6mA51QvsYiXwoWcQRrNfXHXwxtyQkzhzxcLKSWwX5S37A2zXBd5",
  "key18": "3dWAc26EV2YypssS153Vf7Jz7Z2o7BKJCugxdiiCE8UytHEBvME9j2PaovmuSscWy38C7mW6uwyG4bup5ipmDWb6",
  "key19": "31xurNr47MYwKznmPf9UznzG2bf5R7R7V7N34phq6UPw5Xnfzq4Ubjme6ibKvpMCc73Y2TUp6KaJtE4x7pPHS15r",
  "key20": "5ToZXaP5VjGeFFXyF9WeAGgupxY2mge2h3QMv223rqYVnGqccDH7xGtGQWc8a6RsJ2nq5KvTHsbxfY8X6iWVPRac",
  "key21": "2B4iW7WjTUsDDmrs7YAdd3Lh6aJFp79KWHZN2k4sZrQCbTERa3i5DroznbmMKUZp89GYbiJ7xSQYmUW3yaNDowJE",
  "key22": "2grsR4XeH9KV4cjMF62RAb2xnKjSSbiQknXBj2rzJPk7tPqKtF4j4G2Jbi8863j4qfqybXgzHcTC5jyMQynRjBsH",
  "key23": "4ghJqyd6Q6aUeE1Y4axtBL6Cstp8UH8KaqKRw5yUXMT1YmN3pbsawPtteLPoBTLgyuEtSRdtJha2EDu1Bvs53Z9y",
  "key24": "5xkqrbAyeBekK8bcZiRQLsUudMDpfDE2P8x9MnDLbL59rXbiGi6qvDgrxbA912EmG6viuHw5XbZV7vZxGZ9nEXxM"
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
