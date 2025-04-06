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
    "4fDsh1RPrrVhfYk7XHGsV7J4mTAjG31joqG7q3TGC9CWnaqtcwmh9Wt3hvMseoPS3HRKja3jKNHwui87VVcN6y2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ck5D99dL18p5vMxwJD1FeqHpirTKoiJttyYpRQSpX5YB5HBFJ3meoiUzG6HqXVmJYRVFMSQy5gjmZ2iLK77qzmD",
  "key1": "2XTRXpytHbX2TZECK4kfuqcDFx95ZozWzcjFJSyd1rA46tKiGjDYR5DCvJg5YgeU8nteCoPs5bAUBdq1sKAbwFeK",
  "key2": "N8YBpuT21V9iN3HhsYmA4V93YH1rCZnSQ4wWnLKMFf3brpwk7Jmfpz5g4geM4XYcf14z3fhWERZQpLPnrsyJQqD",
  "key3": "3dUUy67RsqPu2iAxKPM5jbYpp7Ga3jF2TEVD2tMduWJ1SxoyfoJ8Hb7aVUHLqHmHh9CjxcL7zmrao7ZtXNQyUEXq",
  "key4": "3idTJtMDeoUYJDpwTiEevAjQGDbjzBkSf4cUWzHZMcDztJz6rveXJLAncnkTuVXb9NcT1vEjfo3FGSwn2Rk8KKAr",
  "key5": "5snCXWNDMS4McCXiQoLSuHsp5rckVpvMRfx1uaGjMDCo7NPJNEdEPcjRPasYwtW8grNT37YK8NdoYBngkyqmpaPC",
  "key6": "Ve4LfRXt78VEzPSb9MaJaLv67Pq8SyokRVrP6wdD9UgeTjk8U94osZDAfpYxdBwCzkyX1h2JcLX5A3CgWPLf8D9",
  "key7": "3dpYem4Rj1RAk8q95nrByKgS9A5TWALRRD4nSsiHZ8V7TCR43j9GxZbAydNAGGWMMGs3pYVcB7bdxPbNr4ABQw2Z",
  "key8": "62PCbjC95JgaQ5f8azPC4isK5fzZ4QFQAWhv1pkcPFvJ1rRscCxX2obJ1SBEvWc168hfX5Nn5gQVffX658KiW4aD",
  "key9": "5eNHQjz3k4Sz8PUH2xzJUL7tgW8dwK989zBGkCsr2wmr4E322jBrPPCQxT9vWnHJFPHXG2mUtpQiD5uwFHjinhE9",
  "key10": "3i26Np7fbhwCVhmgtWYtEVDkL52XSUdPXBtVLiuTiVVAZeGChz66jPgfEVYbbhnsWnLK7cN2VNKU4C5tZC5Do6Kf",
  "key11": "2KvDEMEe5d2VTWxfMDu8Po3mytdiWPJ5M3mbAWgg69gh4aKX4PW6R3q2UdVmNhju4pEtGfJKsAAA2Upe4xi76fEn",
  "key12": "5nv9XTG7XKU3DuyrJNmz4LJkAt62825ZrSkg6asa1efNKLSdprqoSn77Uh69DCBJtGgPENBcf1qstG1WkqTRhF9i",
  "key13": "4yNjQfyuhsSDWHSi1ne16UsZEvdsxzq2PQmzW1k3R5cc8eR8aehevarDZiGzaRanugYACeW5aEP2bidsUWgSgB9T",
  "key14": "4FLNvzDTHwMNTWYU1vZ9hB3GFSqbEBbdWXFBWcsgSgdTTo81fyEwjFAswnEw3PT7jTR7C3TFLAfUmJjV1vbdr6cd",
  "key15": "48SN6CzJu86LXwJnqRygJHc2ALMZ5iq6Wkaq3vgKM582jikK9DYmb5gZ9wQWJQJcXNDyxLhJJeZk6ooMYM3j38Ks",
  "key16": "pqQHeE7JvYrd9mBUXLZiEnq7hVPjPrSQvcDTgcQmm484BjTiL15E3Kitt2U1bRQefvwaADVkwcKrn1GrCvQ2vrd",
  "key17": "MCRZFDQDSF13Y85ApJdre4aSoQRUt75q34iH6J3C1bfA3mAjFx5gHf6Myp1n1HvTQTuM71rXGQ2A6YNnshxpPxL",
  "key18": "4QUrMM5KH7NoTu5tkUVXh135n6my9nVLFXV6XZjg5aaZCfL5jbEX9deLqMnnHtY4nUTadWkKqhENPURWaqNnzkTr",
  "key19": "3HAM28WYf7VuT2xTqrkTJZVUxLku717Ub16HjkeMdExY5zjV53shoDqZHZF7VHXfugBTQNRfQJjDzd5gS4EaapeD",
  "key20": "66Sw94kjJ6KSB7LxsxPUy9j2er2pLzfD3XshBB3znFkAnBm3hqqqkEo7pbdRFHnVyuyECYcUomU25XJW6yUQANJj",
  "key21": "2xYxCqzt7zB4ahKV7v7KKmwbyvLrBM5zyCFXjWhhYkoJTf8Qu4sgWvNAYJDxigWzcjjLhQDZPUqyKP4uHRwZsTPX",
  "key22": "2PYVtdr9sbzXQJEjCTEaEkWVBBUzGzMEThtCZeNi2PVQaicxkPAPEG4qKjfJefvYsFiLLjWnrdPDTToFGKfxdQWN",
  "key23": "3uymsuZrN3xpzucdFWzqHcrFf9wTgoF3qYngeKVWVPuwmqFYK14QfPaTa5hURuLvtbSGHgxo6MmoUhtopeqAk4rn",
  "key24": "wpzCj5PrwEput7aifKYvRE6MQkJL1nEVAayp1WzTnQ1Jf6AE6Kneu9P473tREj7kZZ5chc24PaUNG1rchLS1N2w",
  "key25": "4KkJubjZvsp7TZyt35C1XA6RbuM1UCSAbYAyeJTPaDh6ChZjWRBqLyMPdVn3acHNXfmrmRraEcKaZ1sd8VRKk7Ga",
  "key26": "2GAQt8mkEnDGTk1jc4g2q6f8ouh9fPony2u1tevrhudjzLxbFb9eNXZdtCMw1Pt77bPujhVKXepnT8ZZqxEHqv3c",
  "key27": "3WbGhNB2Akv3W4gE3a7UM84p8fDZMKAbfcvTLn8o5AEgQsL69u8gPGTjTvZgAS7RKPLNRaV38Am4xpMT1xEbDn3s",
  "key28": "WHiVpRftLbNbt48CHAa1zp12SEDWfRmvo6YqAoDVkJLEMvkwBE3gfDTNDbTtx5waGyP3hxry9aQQGxRGBjqNJ3A",
  "key29": "3rLDKkVFwkLZW4ttZcfY9tebPEV5nenpHCYoYZeMbBfShjMxgWvR3tDrU1GFXGGMDnr92pjukxs6xWSMNVwoKchf",
  "key30": "3TdmCpPUy1X9R3B7eYdqSXusN1Fky7p5Z3vxn65dEgqsKXSzXdSZBuauNc9YFR9HQkjaeof3anVZR193L9GMonAR",
  "key31": "5wtUCu9ovnbxnMsu7u3N9yRx9D95xQj4Z3hCrqyNYrB2UHkTePCTvDYUESxTSpBCyZqyk5ig17jjaS1uYygVwXhe",
  "key32": "1YjoChw1px6L8ibchp8tcbkb8XVRgek448kpMEek9UvZhgVhbDXx6VGuJBQjKjzNvsMVoVSsazaoRuBJTWCb6KD",
  "key33": "4R9KSnY1KqF5qLg5cmfgrJwT9HNrb3sNEjCYwGbSojTeBu57XwsNTPJX2RV4MMKvm4xens4VX1K2q9aojHMPACbH",
  "key34": "3boFBCJ79WWxSoTF5J5hkFDtNjKiGxFspnqpG8tjbhoYMjVLUhmKNKEhLZiFxhAfX7bLg39dzuQj9P4tdbAQ9bf7"
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
