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
    "3BxYxYajARSViyA45EKEgGk5pNEfJDiKwUJ8KsokzuPM9Psxhdu8iKSkYBYZ5QKtXbKz8KhESpn9qSTBDhEqt541"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "juyRXPs7Y54sHujrwdQigvARrvcGVfoiDSYzJehZ4p5PGgrC4bwy7vXWRhYKUKguRn88NaVu3D454L7VWpXBRLU",
  "key1": "5DsFP6R2zTptrr1dqsBKzWSbwwiR5rzobdz65PPRWwMWaRjcCANK7UCPDBKZitdLhix98V4ZV4yMPVkD9GZqcTVw",
  "key2": "yfzW18y9EU1AqbnYwyTtjYiCXWURDtUVovLcsn8nH6qwcifCv1MW1BLeyVZXkHUe6f67EvTT42b64sJmjjd6ckJ",
  "key3": "4xeFgH6v9b8iSoAsH8CmfPyzgJZdXwVPF18moT1hyEVW5Ewg6nTnWHhYkVY9rLgUSvZeSCMb7RhWcxUgczoKEhQQ",
  "key4": "38rHXtq3Ndits3834MWWwjycEh7SX2TFzEfNZd2z1TMsGA7cD8GZBPMvx9VPi6xd5KfVXHGYmQLprLW3WmHZu1DG",
  "key5": "2Lu4pACCyWdn7SHDPGoY4NGQG88zMYgTzwJhRShBxGm7CsRz5VuTRTWspsDRo54Wdc5tANAAymYJK6KcDYfNfbi1",
  "key6": "5KAF65U7fEeyh95tvK6RU97ZckvkugQ8MZPPYiorixdXEVk5s3MHThPSrtyT9b1Hs5Rwad4UmyjTaj4iK17oBCDS",
  "key7": "35Z1HC6EBzGJJfwPbhYWNVmK8EkBrjLRSpg91BnAhNF9rQ8p5CsxMDrR87JM11fUKHFDbxnReLDbyrSXuE17s411",
  "key8": "oKLvTcVGTR4QH527iAW2dAmsy7KjVNT8uUoSLygJEpYGAzRJj15DGxSoDMZZauahK23cvB3A1nTKH6uuf2LcuXA",
  "key9": "49mb5KtGpFMZQ86UiAt2VnX4Hc7SXfrZns6xL15FDyrr4MzvRjgj2zrX4vLHCEvujxmgPLsXBVazkE7q9vS3KN65",
  "key10": "jdE6eGFZTzUisR9L85nVWkJ5UEzGJkmBuBerjv6ueKmFx4MyuSNczBqDy1zDzAoHRp66cCAJJLi4u2jh3ZRyqkV",
  "key11": "4j7PKQH3WDE5i7miLNKc7B48kB8jMPgcSy1VCgjiNcaK4HGKieEWeMFiBjvLKRNjwfygAouoN8AetjDnjjwe2RRW",
  "key12": "632d6FLTkLbLrkEwNiFn2Ew1eDUqXRzq4xedKBzV8v5Nbqjp3JbwU8y6GVBJi3F4rHzq5j2pPyEEmoQUyCctdYRy",
  "key13": "5QesnnZ612TPQ3eis4c7kHasxVJBNMXenu8q2sHuj7cyrKwg73VKrEAz7TBDuVafhQweviKxwVYUPxB8L35Tnp9m",
  "key14": "E9cqJ5jzow92vxUcaUnXJj5VZgxUNGHjoJu2q4hUvAuTr9dd4VN9nq3Rpj2HyygKyhxDg57Uw5yxPKF4THg8A9N",
  "key15": "67XUQ32CkEFyy93quMixHyBXQGqAiUMdADFUMtEyMFCHmWUHeGAyTLbXFoJ6WSReVsGHAKRJcL2dH94RgcmFMezN",
  "key16": "4J2o1W3p4SL1VWgVw5M8JT6zC9HkuwF5xW2DKX4LLjRjQS4hp9d9jMjVahsLF34nEnoUsVdGmGbBZajCMJPfzSyo",
  "key17": "2uRPkAyqY88u9VvBXT5NczbS4Un9cMcaLv373N3K3GEM3NuLvtKxjC7zR8HN7EBoFkCj2u455Bk4FEzzgPVtXG2r",
  "key18": "3eaXKHG3fxG6iKnntXfyspV6hQ3fHNEM51H8y47P2nPAVy4DVQuzHZFac7XGyKnvWy8gPYHv4JgXFu2fqSd1y5Ro",
  "key19": "3Ff85XUmK3K52BN29U62FkTRwLqCUbCuFmskGSZc2dKq6FXpCdHkCUaqs2nhVjDdniQheWtYRzizu4kNcp3MP8sK",
  "key20": "aih2eHqFuMn4EFGRXFcpcBxafk8xtfqiBFEHyVoh1t8Ms4XEKdCau8TTNkf33oHSwxJVRqsb1WimMLP9vRzo1jf",
  "key21": "5VeW5b172ALj54Sbzbq9qSwfW4iqbgQkHnNLJSFo8SNu9FSaFCc5bFgYSTWWnp7HLyQrkwm23XMrYwpKL2ZgTaiD",
  "key22": "HbkviAigc7c8tiE7dmckFnkCqRqqdBmUnBToMw3mGaxyTiGQxmckNPGmCPFThucWzDg6f2HdrdwqWH2GRsJwa8j",
  "key23": "5iaMtPtmK8hVvJSsiopmQpFBfsJ4nb3ak7Ggk9Up2E66G914WLk9MnayMLfFzjiLHGaRfBCGuBaLzADRGzLnFQ9U",
  "key24": "3WsLfwgC3cJv3atrjCTG9VVXPDUJfM99Uzuh2p2H9KfHd3H2LKaabioXVgFo8gJ8ogrfLQ7yoEPL5odb9VY9kpDm",
  "key25": "3SrLccj4M45CfVGg4ZcoPGrnfon3MZN4qGb9kKQcB3jhCtp6mbH5Awworzm8FqWxTnmem358K3Qgr8KgSHncFGtJ",
  "key26": "61gDjuLbDSRQBYPYkUPKpkLJQTxzfE3gue81qcWAeFnhQaP4t3Tq397arqbJdnH3ZV96uT6Nxy7wTGadcwhL42Hi",
  "key27": "2tPqU4JSfAy2BgmWihTX9bUwTHLNzCTeDfjvP8ZMrykcXSeU9mUqx3zaBkEd1PNNe9KsA9p47pcr9KgrLYcRuyg7",
  "key28": "3U1XBztuATN6zmQ4gbijkMnTxDE28imdC6cNsP7MXwmH5JYdmMkkXfwb6KMJKuF5Q4Fvwvkd7FUbuyrA3VxK9HHz",
  "key29": "79rSPG5CDmvfb7xBSmpXPyaM98rQJEkdo5V742zoQmhVbwmfC1UnY8w8uPXoNcsbEfWwsEYDg49x5rJyyQpaPFM",
  "key30": "5FrNtUQMF1X2REmbo7kacSwbi3Y7k9usmw1PA1VPL43Td2ue9bddtdyrhCnmGUiETBRK7NbTMAaoLqFQ9SfkEVSJ",
  "key31": "3sNmce3Gkc8dvRDvnw9yM6yaAEYhdi5XNTtajDyzLpLLr4i2oJv5bVhLodJ89fnChLprXi8L6qgWNPL7oSdHNQ6r",
  "key32": "2xszNtjv7cDAgXiqcKqLUvLQkCjKcDLamhzHUv8Y778JQjeLEX8XPkQa1ACHHjTRicqd3byD2TUnyEofJuPoww8G",
  "key33": "4NEUZKfHEtnsvMrZG2JeheSUgHxKAps4c3RBVibKoNmvQGXHB6s8gxFmqrKPcvsBGVFYyu9WKbEWE9hDAQrsgfvE",
  "key34": "4qBKwYwrFU9QX2WW4iQEvDMwab4S37GCE9WQMTBvquC6zZrtCaMrB2DPHHTz5ynBaW4qx6d53WEVQh5WupMgxs4n",
  "key35": "55MyABDoY2p8HPoonYw2wVBmVZ7su38FZTZMmyB2EqX9pZXjhHb6ys9QJQyHaKat9NrJBjmp17HZbeycteCkF6sY",
  "key36": "4fF8DZgvEHLSTWDpjp8JZuB2GvJjQqoWEzatJdgtPtxw645FcVXUCxG5HHGv3e454hWLqpWFXhbP9Svi4XbxNW3x"
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
