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
    "5XUGzyspn2PfWnenCTF17sT3MedPpuHPxaJ5PxW5CkAK3AQBvu3ZE4UxLBaN4JX93LEH4dS2P5Kg2UKzm1QHcuS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4icuUY5JU1jM7wro7JwZRya873rYnvQ2ULCYfanDWjdS1R49wfh8MHCHwove75EQwPUkVHJTBX6Q5cyLvZV8e5bC",
  "key1": "4AitWyR55eoGEJNPZB2jH8VQivdcmxQ5WQrs6wDMkrULYJqxkicVUXCLHWCfNpQpTaFGQDsKu2p16UUFk9LFXS94",
  "key2": "2f8gUBGC5fXPQ9jzraLotPAyBmeXZhoTcMPG7ZGb28hg8zQQ9i8bwfpK7j2iUkSZU8xD9WbuwA1s7GVaBmuAviPj",
  "key3": "3UZ4Z8UTmitzBDmbihRdDrgK8qX2f88SKxqWTT6AD7EecK7umG4SiPAwXbmbMG1FjsNSarmccVTNR9yFDQ3Wh5RZ",
  "key4": "4pnVFJ3QNNm9YoKdbZwAxXoB8Y9bBTWMehkHcsLR6HH9p11EcT5b84AmBS3Z7vLHN4FF5n1CaW2kVuCrqkecG4nS",
  "key5": "21X81hQD2PiHtFjq36oiF5TSeDTyy9gwuytVxyZGikHgaF5iKGXA8CA6QbQsQePX4WWX7AP5p1uPZujSyAZjsuge",
  "key6": "LSye5fJwqgCiN2NigrmAa3QSYKB5giKGiz4x8yvgqfDCpgWe6Noe8XmjciHA7BCqWt1ny3YsV15YC6wh6EDLRR6",
  "key7": "4Yy5WDkbDobAUGf3ukU8bj8xyM2oEgBzmbFKur4ho4phJroM8TQbSfQuH5ysvMvFfKjnLUno89HxdKgTNijKhNzm",
  "key8": "5oEkLThYJd5mG49uSGDd5gcAb3KCs9BQcJ4xvGrbCJ3eXtfzqyWBX82jBcA9XK5MHegTkgYN92aRKcAv2qvd2bCi",
  "key9": "5Ck38viavd6Pz2iTB7faTGzpU2jQZaP6gqmtMwDQxGit3iLusBDZcjx6UweW4Fsv1RujHPZrm7vSrdiEKWHRk9E4",
  "key10": "GXSKw293LxpoFxqdoMkhd1tRraVyvZr6pnLN8gUEtpKCiWhpqnq7bCzCtwhRXzekuiz29dLe48veLBwsqa4kHZj",
  "key11": "3EAa8Nt1yAMEMTvfeyuvNrtBeqjPaN2P7y1oFMWAeVxerq49tRaxctT4ZYNwZVNfrXpsYvmQuQJtpDAbE9a7Puno",
  "key12": "5nAzk3vvzUzCYEcuy8juZi3K7Gia16T2cEaYhdQxNMcu8fXpeoQGjKzqT5M8kMKZUFRf2xFtpbLtmhs8oKoXxhn7",
  "key13": "4rzw5eYRLFWdpAULEWuuPmqG2J47XxRXPcv7pPhNgCKsZ4nsaf1KzW1hF3Eb1Di6Pgm7otNzhaVxkmLLc8xZo5oB",
  "key14": "5tKbqjC9mNCZBegCsxNFoby4pwTWMpi7TEx1CSk4eSWs2tLDM62GcUtwrQL6qR323fUNJj1Yq1T8fTSqWwXKjSah",
  "key15": "59c3zSHQtK5aQA713AboXvgFjw25dP139sV3DM271Xqc5LcEcAWsxJAwZ4kGCyeamVY3PFkRjXZdLqGzn194PXii",
  "key16": "3gPxxP3PKMyJoUWVgYj9Ksn3XAAmJtR7cSgdTNBZFABRdCtp6xngDkDErVer3xio7CFaKcP2b3FN43PAxmzTLKHK",
  "key17": "471LbRW8Ki9Poz37HyNaS2UY3KakG4bNs7WDj6bfu2Zyv8rcsKhKELP1XdeYKkmS4zptQ3rLrcVUjpu1Yj9yxrZm",
  "key18": "5c2XtWHoW3sTYdtr7eFFS8xyho28jfbH3jNpXHJTxKgCuCkdgREHQd7zTkNcB4ipSJdHBeUFzTb5mHtWfdUyrG8",
  "key19": "777HteVytG2Zjeqamhfv6nz5rV8hdDWaQWu4ZYAC36QX47Jd3aEDY6FpoQuR3WQNmyGBVvL1EmbwEkX2YhZbxSk",
  "key20": "2kjRsqi9gMauuxZ1wdbu7GhAUYmXAzA39UK7gjpdXrMKr7gPsMW9PoJ4weR4eAURYxdRMJDva8hpdETLYtLZt9Et",
  "key21": "2uex9m95oXFhfN8iMkEKCqn9tqbEJjzHf3swD7hjYEcjpot7Gj58soiENoVrd5QJftkBRJsiwMAB3fbv5MvHcYTg",
  "key22": "55paqD5WV8UYhYGLQoaCgUjxUpnQdr2b7wHgiNiGgXMBskZrNutbbJJSMJjMzQQn4RUbm6uZREio1QbFdRB1j9k6",
  "key23": "4PmcA5MawzgiS7PpJfVX9cn8qt9VCgSfoUg9VBuMvsnR9w84ybqgbPqw4Gfj9Dp1SSaTu2iohsVeJ6NhbLvitkD2",
  "key24": "2M4Y3zygHPXCMZwfFN9QmZ1rqft6XBsvJLzG9ZsnYXKBWMNupaqT1wp45QrSQfJCWqGSsVmwpzkVD859vjGzZwnY",
  "key25": "5ijLMZ29cjDfaSGQ72N1eqYG9bwYKnfTyy2hX2WJ8vZRo8GzRPPLRrVtnG4SWXViNuwi1UrjPGrPv8WLPmhCNq6D",
  "key26": "2zT7RYy3LAN3Kzgq17h1LuCeSFJwJ6xSDWkVpp7qnJpH5Ybd5fJCfcLDgr3BbgBsiv5HhijMRRTPP5iZU68Zm7nR",
  "key27": "2UTrHDekJVcNrGau9kAoo2MpyixCswvwP2eqFnduCk6P99BLJ4NJq7efjHnTLEV6YXHHetQwJTmNWqrvYjoT84fM",
  "key28": "oUVBnnHBjtmn9QMNSrEavgSzBbW43scJRAjN5HmvWnzmZfSSge89ZRuCEUJxS9LkDLtwAjKbvQaBkyfCT3EqRyp",
  "key29": "gob8GDgEMupGN1L97enuAX34pr4EFjJAEWbgb3p5edNApg1n53Vg6JNLePHmeUfi5R22gyd23KXQ4vaxLz9u7rf",
  "key30": "5oHFtPEPYjkYimsYrmt1vDVS5Bosq2XbskQV1si5hka5sKzoCQLnQ85ox9D127PdEt351piToLi2hJXG23LS2SQR",
  "key31": "4yoLYeDU3AHtjqrSsDTF4C4bqWe36ePbhMhHAPoNuMdKVVbHCxuutpw7iepqjc5PJWMGnncCGso4tDZPzick8DDj",
  "key32": "5Wcfcax4uKphHAycsggaZvq93rDs8bKtw7Hv4C9ExjhHhmBXm1karBc8tpkZAPLXk4cdUNnpuVkgfV2kWJupp2Lu",
  "key33": "3WvAAtMKPB46hCnZjMEJtkNmUKe3f5wPMWJwNobUYQBng2EUBHYAbDVrvJomDSpw8Ai69RoNLytHLwQt5ksd4Gpz",
  "key34": "2UmWNNamFNc48DpuSoMk8cyRLE6sAtFnBpRuckXACvLTVoV1o38hjpG55CYjZNGQtQFQrj4pndYj7vtEKEzmGw1G",
  "key35": "5vpwUVfU6UXNuAyyBsh7SLF5sZCVz1nfNpAC7gwFiDcSZ14X3ckKXncVQDH3pVD9PKYc3rCCENqsUrrcQaZj8XNz",
  "key36": "32ddQN3csJ1FB5Gn8oczz27mwYY7MWG4KjAZZvSg3U5XJwD6RzhS6hPPVQxhFQS1kWmMoJASyGazDgULoPZGv2Hi",
  "key37": "3dzmtBVdWBVchZNz6FLcG4oLtk4JD6CoksBm8cbBPdv6Pdi5h8r7ScdYFttBD57Vg6w4bZPPtAchqtM676iKmqDj",
  "key38": "678mNskPmYcQ12EBYcQwJpNRFuaANx3BZXLLvhatawjLiY9F1z1tehHKjcAUQPju7hrB6Ai3yid1x1TA3JtDWEDu",
  "key39": "2FJmekLvLTZzSaRgqt2cATHnLhM7jGyiAayR9v1gFx2WkNynnZxbT1oXoCpbS1aZjbb3JgXrs62KUBKsx6dNC3Sw",
  "key40": "ELxdTsHK6xmZS8HNeTiCKbcNUHJ1MNHZ1Tz5xpf9hgxgh1hHF7zydx31nKR3bwwhtsb4knAbpHc9zN2VJ3kWrM2",
  "key41": "Jr7oeSji3ma52zMR6uvU4kzyUKJNw1kcyYGMK6a9Uc7vHNjVixtZfXkatiwgEKzKHEi7iq3UQP2aicuDKirD8oY",
  "key42": "4hgiBjej4mz4YEL215EMGTvJ4YX83ZbXnmvxVMJtXbudgkjy4V1xc61z3EDDtbGNuYhWDfLr5xKQp57tpG1NRz3E",
  "key43": "4Y1xrtt5g6pTxKzpUgJeu3mjP6aconZkUefzLnJKbELFMbNvPpwPZUzSTgxqgH3Pf1SV2MwLYhBdRE3RkUfSFM6r",
  "key44": "4DPhdi2H1GJ9whUTJzwMVUooh2EXcrbyr3uvC8WfYyNrJvNSKEU3vtbAsvscsxv2TToze9y3ysP1VC8Z7ypCKH8r",
  "key45": "3tbnAda4zgqiqHWwrSEvcM7hiTa5hxD2uQPjWfYKjSj4qoSbVUApiM3MCv7CcTJ17rjFiod5VLjko5MiDHgtZvki",
  "key46": "5h1G6xNBFjvfDKpZRLWvZ5XHM4EU7PdUsLFoUFBP34bkhpEXcgdLG5is7Bkr32BcqP8C9CS5JVoJy6uWpstFkNCV"
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
