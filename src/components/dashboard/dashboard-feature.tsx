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
    "2JM3EKVNeRcKMcwM5odynjwQ7a84iKzGLgexBNSvo8B8p89VjSo9DTcRwompGhZbz4FmpVX2KrGHuYjQ5ZYhnAKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29VrNvEa4R1JYMn4hc97t1qUdfYk4yDEkvioKJPG2zeb99r6N4qPkkumZMdZyZKBchf6RyVV8qaeaAKK5peLGKit",
  "key1": "DKReCDzzVmWZA1axvTPDCt7SPP4YAbn3oxf3W18CuJiwWbGoVFK2uRB5HTQRusvoXMHRKsdBHmzdFNjEa6moC9N",
  "key2": "63H4bUhnaH5kpEDfUhvWS43R4r2EwYyScF6hPm9wkryfnvpde2YRKASYRmPAgdjYxApzA3tYDYVMvHCKypZeEHNw",
  "key3": "CYmSer6UhPSv1cdccNJWkK1r4uNt4Pc54DZqyR1bapA9cLqewFehvvWCMikdTTzE5DACvYsAtBznFDLm4HV1ZFs",
  "key4": "BJ8SJA59STykpcDtWiAg2VZLez82yaejhHS5WL4RXQ1BNwTk9E1VgF4WJsZ1n6tC4iUjFzzUu2aJgPyj4WoF3tG",
  "key5": "58YEEE2HiKKriE362VkDGRrPcyGwAnrNBqsnebwJnzEE4dJMZRCBBnFAFPpqrdccKgGFwo1TP2cK992FVbnr5tda",
  "key6": "2uhpqmiwwfnH6G3HEw8TcovYwrsZfXXYrG8JBCiGvPCpm1PgkUnH9rhaARjovmgC1FzYQRiJAMuArdacu8Nx5Fiu",
  "key7": "SoCeRFxdAWcPnTRAqLwyy5tbAFTazkcwrdXYKrpWsKyuD8CfXkDLo5gEoyyxsKJUpwA9S9VrSPnBjSjhBiRA6jz",
  "key8": "3Z1Qr1fyhvdwdydAyfEq3N8F9hCtzhr1o8yWqZDCuGNEWt59iGzrxxuwQNXaGuC22UDFiVSX5ZH8i5mogRxKF51h",
  "key9": "32woZPoEZtJa6ETipVx315mXMqLnQP2CLRYhDsrEM6fx2kb8YPYkajre7NrZkX8eBD8dYXoSSbmdFsR3ZFjGYbmS",
  "key10": "5GT43EiCmqSaLaVpSfgBoWyv9SgqsvLYaK8GMKunLKnn9oGZ5PS72X7MRej3xPMktu9cdm7Q4bGxzmCtXmJ85i5g",
  "key11": "5Lf4NxkLkVBkKjF6jhAs9Zdic8iDfPXk4zQW29PCYhyizuRKj8XetBccfXiYy6guUdpUFrzsrVFdBRi9yDotQfSY",
  "key12": "VnrNiChqZWamwiiRoNEvtMf1mKsxixbFh5r16fbiPGvGMDcqiGv61q83n1FsvYds7pacHvDVjt4iUgVM6sLp44W",
  "key13": "4cQxzUzCHSp8Aq1djqqge9H7bH5fCRVxgnFdezjMNKJMW23wUpqwHbZ6fFQJ4iezhS1LFC1ACfyDrfmNia4kJpMM",
  "key14": "4k32mwyLL4YZ1Dst2Bs7e2PfMZFcX9mh16rp2AmPN55zSnnPZVHU5cmesUKD9iDehoRrcVeuH8tGRJyGor7GCCTb",
  "key15": "q5empwuHBRtM9u3yFftvyVEZXWLwX4aQaSAWWAjnPDHE3AnRDBMvSosDVjjExsncsputZV2wTZ5R3Tk4A3stMNd",
  "key16": "F6jA2JEKxpLB8e3P5myzXVZYc2QJpyepPGKt9htkr69zKoETcCrKLAU6AV8rYyraqNKUY2KSkSJYC7GMuKpoKE8",
  "key17": "2DVmDSHs5xSr12sNvTBz6mvdXZcQHNinyohZb1AspZJGWUCLmBPaN4Wsg3uULmkmUMXS63hnf1TeCsENyRyyAkg6",
  "key18": "5JwrEoj3azo4QN8bn9S8v7ndaRuQMXArr3wFR8Erj2YCqb4r2rrKQCMnwJydzCZSTZdykqF8WmdGfo2u7FZxYkY5",
  "key19": "4cMjYpU5jUJ5Dq5QCpdBvozdiQwd8HT4qDbGPyqR3F4mb5p7uV2oHw3TiGD59mtQzKvmDvMgNWzSUvFMJiryyCUe",
  "key20": "679UzKDKs2qVdKXB6uDNb8GajeupfrPfTY1RTLhY846qiC7tY3werDh2JXUWejyH8F67dEBggxwzYD8Y9UFHJHwB",
  "key21": "23AfnAkcsfah8eo9MUUaf18F94P1NcDysNY7ccSFVnGsVxGB49Wat4CRA6rkBoScHpaGVzVtz5F5fhvVP5kSxDqh",
  "key22": "27PRjc6rKktwHRKeF1AXz5UK6QfNFwH9oQNRjX8GTnyKGQUWU8wMbaYpco1WfchdznfcKHR58rMn8FytR4XWVs8P",
  "key23": "5Lpr9t3x7Nc7q2D2tsKfSzQQiEroXgPcXSvZc2BX566oA44mnf7DfZh1cgYw88ZyuFxcojUQqMGJ8CVotHt9WvzN",
  "key24": "39Gpw2NmzUC885BGiNaxaooNKCYwZauM1s7QpwTDqwnXmsbXJzKwuocArcDdTzwefBywr4jJnqANajcRisGe18MN",
  "key25": "H3ZC715atWRgoGRLJrFyNBHzovvcr8mA6iD6tvLJekPraCfLAwgNZzphD8jjrMEvaKVktrmyaDNe3vRxMz6xEb1",
  "key26": "4D2k1HnwhTaMPSggdgSgp4b5v8tkGxurzTXqt42vKyPPwD6ED8XunTUwP77aFTbvy56uFSvs7ivnp46hJpyNoCwH",
  "key27": "5fcoyiNqny3oramEZG2qt9oRe35vNqEMNApQZoq6rxc32VettdRjtcJLMbhwrUBasDyNVZb5R52q91uwJSkSJ8nA",
  "key28": "3QPCk8Q6GqihRwcvwo8ehRk2QxzqPSpxHtkG8dSQdBGTfqdQbPtMnMcm41RBsb53wgrhFQLvGtqHntFhUWoiFnJT",
  "key29": "2cQw5tdUWxiwt64WxYP6qgMX2DM5c6c9YZnRcqEFvdqr21Lshmtm7MSt7tgJ6dGZ9G5qyBQTmGn3UdQCrqaiQkrE",
  "key30": "5hm6ptznmEQvmMg5tkB4F37oG6ztSEE1dXZew3GfJ9cSUdQqan1Tf8qqBaNR2gpmsFeiAK6rbo7yTqvpwmRNdXbK",
  "key31": "2qigu4HeCyAfF38BQZWme2yEbeoZpyADqQKYfuyTUMUZehF5xf1uTLiaPKYef4F2w6kG9Ji7cKLZ8sKAVx3keYV7",
  "key32": "3kanduSwEL4yYZSkD2SCXLBQ3CuKPGm5rUdYwjBUDErvMCCoirXhFaDjgM8dhXcW6WvpQZsVaAeLc6zp41tjB3ZP",
  "key33": "3pfR6k8r9ZBju8SxGZ7C1qizshRgdBMnLoFt5rZMxZUJnu4TBryCSQcdXAktwyLqoAXW3iGMJdH4izGGLPzGHoRY",
  "key34": "4Xmn94y1yX2yLjiAAL7BcHDfiQkypE59RVT1rqfyrwZ1Pc4DAce3Me3HURjJ3Ad3dc3fYTeAq8UeYkFFtZnsJJGN",
  "key35": "4ThzkCy1HTS58PAViBhaLUc8YJY9R1aax8eUF49bo7U9vL51zkCSGu4b7VqfhCSjmztKsZMhNv6iXFUCj6Tsdk1F"
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
