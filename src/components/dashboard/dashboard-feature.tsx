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
    "5SPvZaWLtVf4nEsWWkNaSK9nN5VrZiDt6rkJrH3fPz4f8WeXEqYuAh8asKKNyNFKBkFAS6ebxnBD1T8ehxwkiBuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fm8oYqD5sBVrk7mqvPo5t3mJdoGjjgDTeiDrkSQ9nJnXNC1Mnt1m4nxpypM9S7qZp4cHdU5KMSfvPBBo9kgW6cg",
  "key1": "4bHUBr9MRRShsioUb6xkeqwQXSuEZhjPCbCKcN5SZ9aSo7hyt6TJTfeXfNHqvWFvSRWpjUCacrussP6PscHm2YEH",
  "key2": "vA2muvLwXmaJNN1uKWwWnKtqmX7gioy3xzhaALu6VKkfbadRguJqGVQXHq6pu7ig11ByLUqMQWwqjvoZivuqvPP",
  "key3": "sRf9iD4CFUkNxHLUNPAAUdNHn4tBqLsTo6bomKfwMSuXEsL1G4E4tkt2JQKDotcMGCKzb6GiQHjDBS8eR3Z9Mgg",
  "key4": "3udxRa5hHRbXwx3MMyti22jLYKbdt7AZXMiPVgahokLFyLXJF4zys1T7orSPaT2v8SSeNZyGfg1HWWWhehspnpbZ",
  "key5": "5cokdDSKDffpUxDh4qHyFHwwYDgJvtqKz2KpiZ4y63zwcbi55E3vy3nbb2SBtWS6okLqEpDdKnuYUr1vYbDdNQna",
  "key6": "4CXabXPkxHF7RyXpKa4Qe8SdyV1aZhKVBepV8bgeixkhZjnEZYFtfVf49HXkiPGwUrAqjAZEjUHkj2zVFg6Xahrz",
  "key7": "28DD3WKQ2XLSqFs8ZJW8Bb3NPJg3A7dxbkf7FEaCNB34br69bsQsXyNdeVT7GpNTvHhWrGKCw7WXty4enWkdeorz",
  "key8": "R3bmcgAhtSzbTuKRUsQiKnw5PWmLPSrMnd6kuoJEQ3L6Aa38LS2nKHZnckA1fVJYTgCwJx4rU13K2kon9s12Ghb",
  "key9": "66whgAKivs9QDMXhgzQJUHwiQ2P6TgttooTpDbQZL2shGznu7AXfbSwbiKZBeYpkdizvAvRaaAm8jQ4Xr6fwfqKH",
  "key10": "5cr3EUJCCXND7fsUJzh2GnqtKDrP7XqPf8qmNfShxkGYtQto9PciXaCiQMpgJS4WNPpiuETHRNwpA35o8aMw5Wgw",
  "key11": "4a34BgzTotGQKtepE3CZqJGDamGqyaQmwcEZ9SX5bpXpcaLZ2VgQbQBDnGtEz5W8P94xG6nF78cH3XNcdDSkdJWd",
  "key12": "5shW2TSAJeaHEh85zU1Nwu4tCeqyygURRM4K1o8svD4Vab1FfzrWpVniKrXkjKD521GZwYAUNyQ5MNM8EPKvd5Ai",
  "key13": "3rBqGuTgtbkprYqT9VBYvwq4EXevw4v5SzaMRmCTwBwbGrq4dQQqTrpVbGyNxS9xNKuBTMHAnQY7F58r8sCgV18h",
  "key14": "4QGBSr1UAL8h3e6cF3vf7L9mG4eKhu122rHVtxnC3HETmsZNdguPJgE33wpPtaA2Jq4UewNymSLBTG6dbNuniA4",
  "key15": "4jnKVSEEmNhJqvToqsXPDKRKXmPZRj2vE8CywyQD75nUfbQioNhaLtD5A1CpNyqD5VuYgTgbZQKeX2dNGWfovmSq",
  "key16": "2gZ4D597iLJakPHyduCK3dHqLKC6rApbULJpfxHCm3L5BT7oEDcHYtQmrU9teNv5VpvXh8gM4Z5u68LT75xrMwf1",
  "key17": "5cHzdnFk75e9tJ3nZQ5Ey9zsAxp1K9wYahvq2GvhX94mey3wqVXbJHjmYrAWCNQ9WvcY8WXrChMZNuscy1C9nwQG",
  "key18": "4Hkmgb2aeNvG1gPC3WgVnNxDnWGGKaR7kmfYMYzGP1ismRVKJh1S9hTMvxKQmpudtFhc6r91J6zMT38NunFmzGq5",
  "key19": "2tpJdiztipxyft7DjqqEyHo6ri8Q1pB11PBLFVoyGC6xryXToCouCiZqZij3xktrGX9f7txSTm7XXC5YLmAyJ9uY",
  "key20": "WhayWgyoEVjqkCSmPED835uxfBd553MDwMbygDVxZkUDVXZ9jx3DgDg7s5QyFmuBasEWiyRMvprTbAgWU1AbtxC",
  "key21": "3Pipeo9kLwpyNUUbqFQzim9U11ZnS9wqzL58hCcgsVWgsS3yFfmyFVcg7Fc2xmRTjjJD1SsunKAzdrj3jcd2zHGt",
  "key22": "3QVPTcvFVynVFEdf1FNCt4RkYqUcDHAngz8sypv6paWPFAM96rSYjDQYQ2SgawE5YkYL3kwpgWM579t1kFZfxip1",
  "key23": "5CZ6WqE6Z5nLW5NkVff5ftD7riy7bUz5aRqT1MKTPFyZU4K3pGYhafw9NUKv2j6GwPYJjckBVi4jEN3eXPT5CSmg",
  "key24": "5XVZ3gv4Kh19ME5yYYFha9PNBS14hCC4xJ6wSeuVTJ5STjFCjCpDKBhLFb2jA3uPPmmTrkHhwVBcGufV5fUgJLpG",
  "key25": "22a2vvFah7bb1xAvxZ6KGKKdeYJZg84C1pHFbecwKjpDe5RQE4oJpiHUvZFCTeH6vV7Q4K8AeE2wvtF2xaDqDmPh",
  "key26": "3JFd1ue5JAtVMpvs7Gyg92YbcKdB1Mmi9aUFKLobJTDd6eywHjsA7gczfwgJEAwLhGo8cbqDTf6CWE3JfbfcuHEr",
  "key27": "CZ2NS9SFmD2ioXcyANJ9Hr9wx2LkeFwCkaQjnYZYwVvFZrccV5QrwXDFd9vRi9qLxvXdBGM6LjnosvoxV3umxRm",
  "key28": "5UvGyXdzQpu7bYU9QQRKeCu1qAv9vsVQbNDuiFHamwePedsXRW9iUjLoDmC6JQzfYNZSx7mFFwr8shEJBCCJ4yuv",
  "key29": "4aVG7C69Y1mGogaNvwut8mSTa351DCtAqytn7E5LcyJppMNZxiSNQEb7pJ1AHkxxVLGc6yKygcYMr9PjeFwxJfk",
  "key30": "2p5LWDhHu3s8wvKCCnAjuvwvvwfiTJ8CQ9cdbv9x14SQNdtABqZM4ikR3tqUwxH7fyzeS87kPDWUxKBAHtdWNJF3",
  "key31": "5M6Vz19ZVt7AZYUk6Vsn4q8TaKtzcY53idFJ9SnAS5r4Rd6NLq8equtfeTU5rMvPugeLmJzcNaMekK6dpmvF9wZe",
  "key32": "2RSNjcarnYRcRmbK2zHJy4yWarDHyouBDDeED4fcx5YnEDrJrA5fAUSBfVBqRoS9FpG92MxtpKNkGgaSo8y6wbxk",
  "key33": "JzgHtKCZJGXsrpxNRUsTHbnTzobCmonHCefetDysTmmMbZpra4VgRkF1TSvfAj88zakFx7zPrjhYyiTwU42b84q",
  "key34": "2Kaadwnh4RYJQhmgFQoK2L5D1SWw3iU8FAvAp3oq4YEcLr1EzL6ETU83jf2kGFYFY4Qimjpvg9ZuLvSPWfFSCJ32",
  "key35": "2NeJ5zuvTco19gDAcnEVNci6JGTVEpuC9vvsgxYCLxpx3z7BpbQXQCPuLM8bYJSjDukaD5enYfJF1M7U2eTbmD5k",
  "key36": "3QdMJAaP1kx522jUc5PW86t98sgZcSA2Mu6J5A4EhMZgr85fZZp4LibK22yjiCnoZ9W5zCgMqu7wR8Cpp1cNMyGi",
  "key37": "4bc8QhqvM171GhMLCdmbLhDCUof1ANkvg5Bbo77Enoee62W6ZhfgWKNK5pWjexyoZx2ruDHZeeAcnNSZv4sXsARc",
  "key38": "nEt1yUqNjpJ9q5c57tBMAB3CFtcJCvVAv1LrgrCXu1Cue8oBnqPJpdEzxpxBdk99HQkDCspjshCK4eTSHpV1SJo",
  "key39": "4doAhYEubjZBv3CdrMjMZZxADUmVL3TozgCCRbNoffwU6pr4o4B96GCxF6riKApiEyTb4tJ5wd8JXWpf6e6Ytnk7",
  "key40": "3qSbU3TUfH7xAzpishYm1i7HhJHiBPLKccvKcnqSRVreMcS4QEcEeRvH4aZZVnhYtby4Y6qcFZiqFqRDA9P6ZxSQ",
  "key41": "54oaxfr6D2tUzvxadUdW9rHydqPURi7hrGZmLW1NfBQLynVBWorMcyNqQsaNg4SRkxbn6cVnAj3RjiLhbne1Qttx",
  "key42": "3E24cYD4ZEtpJ49XPqyVDAUJcRvHPop5adbYZ1TswXHTSoZmCJGkMKUfkc39xff3dsdoMuRe2d6ethExyWP1HZAL",
  "key43": "3kcTo5AtuUwgMsY5KS1111Yjs822Wb8AckKehoxwG3knyQTrF756AKBwTnqWCzm2J52iuGczZT33Z8q5HuvWhZ1s"
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
