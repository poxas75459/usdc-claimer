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
    "4KmWrupo4vhDCNtW6SsTL1buJoHXjpV8pEGvgxyU7wvyJ8iZw1kwrRMp4DEzNcw25mSREn8SxSxeYRVmTSF9MMY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q6v213MzpMpRNdG9iqAzupSLXd2yvZU2wiC9XzQZQ7iW6QXWHzBPH3Rr4HXDeCicL6ZuidVjt3eDX5MkyMt7owZ",
  "key1": "45YWXuMmds4GfgyTsHzxGUUJ53XDiApjnvtrFkftJ7wENUMad1eHVRAZ9YwAjNT6Vhn3uAzcefiq9KoM197nfCxd",
  "key2": "cBa2HJ9hLLVDTvwiAYStBy99LL9ERuPbKyLBidubeXoa7g48mYK3vKFAuTWQzPp55epAY75oZZYkvkMZKemY17V",
  "key3": "3HR7iDnW8M6kd9SGEYVwf7hZwZRUDiRJb4zEXZitKPVYtZkw29zRY7XZtStsBqMtV5aZEvnGh2oGPogmkb8q5GHX",
  "key4": "4PumQ5tjWkXZYDNhYqeATMzE2yzBwsAaLEAJ8mLHeRonz3qwZ4hH51Vn96iQo38KPCT5mqzTJkpoMqQPV9dWwpsw",
  "key5": "mdLBy8rnudkLqUBtqP4hsXbsEydz6PCDLJPh8xkBZBdHy8oTAPjLejeuhzw5yzwANVve81A6pJgLV9kHhU1Bpxr",
  "key6": "4kLfxeaHEqwiZ4FyyG5Nr53hzRD1fHgmfcF9wA4oWKBVKVpiTTFq53PTskLmhay4rCwb57k2TjzTRy8MzzWaiVeB",
  "key7": "5zgfAc31MvhrVwU4cjSNGvqSDDuY4Z27YnFNwjqNdR4x3bPrFBeVhCCUb8WQutGMeQBkKVVDRGdYtv6ohQgPNdQU",
  "key8": "3nqKNUvULud5VDDaKvYbriVgeXkumd5op8KDpBE6DNbP9dzQnNybqSU4AuokhE6qpc4qTRyKJ1qCye1YDiLJpf4d",
  "key9": "2kkEoL4bi5vKudQs3EBDJDoYXm4cMYqp3wnxqMexczidMwBAD9qmzpNJ3VbCseNkDbQ1drWs6peS78C6kfpUiEGW",
  "key10": "cgKAzR8H56vZKV1Z4oWLQ2k6rsg7iSXcCYiez44aMCxQKHGBGeWpTDduqJ7gf57H5yJ1sVgsfoQ9hNezgLoYZoc",
  "key11": "2LgLAVaFmBQsK3EWvU64Ket34AQpixi4TsAL4LwcJfzcEwaVQ8AGAV7sqHmDp89WHNmC89fLuvsoQWLbDTvgCJd7",
  "key12": "4Vv8587EQmUKaiisHcKszUEYsyFHUdQzTX23Sij1JGNnNTbVjbdb29FPHK6rneArPFnKMjeVhxyuFCbPbPu6nVs2",
  "key13": "X37BBeJJN9gQrXCnPTkk6QzMuxWAPgqd7oy7tDPK4bdsDBoUBPprvjyjgzfGTCgQC22FhyMjqoseSLLVPFzNUCd",
  "key14": "2REZE5a2dsek9kw8MmSwT3JmHpUmQqGCjFRvs3MHQ7iRkFMtGkZrEqBYez8ZBfgYzvkfPTuC3PXiBssyYUSQLubf",
  "key15": "4PK5QNy8CPAafCUBPG3Be1Kv4nb6HXJ7ChhYZJA1z5ndVCzcM8pt4T9fWzt43NfzPcY65Xc9dJvTePmeJZvPsyJE",
  "key16": "59fVdWPVjBk32akHTNfT7sS5i2PanJWJbAs4pa1EVC79oJmMFVXw2QGBBGCACrUEe9AaTFHMMm8fnBgT2A85oQd8",
  "key17": "44cpLWrJRedLW3c2eoPiJsAXyinbS75CkaaFcqY9Xi5UUFH8e79jPVpBonHmrm6Eo8Fph4HLp64Dn5yPFizzoL23",
  "key18": "63Gft7EGeiMR5VQgnEv5mN9ftRPytJRxzCeEFbQtctBnPutBA45w3NgKqB9v3LnpepQceRZYvndEgq8Xj8ceaVx3",
  "key19": "5ne75ZDqo7K7hXfFShtuKR5LqrUsFvwwHu22nDS19boUGR1fFKExY9Gg7fNKxKiati9iYCu76nMGYGLqFzUHHGKP",
  "key20": "3aw4FcmVToRQaoLnZxpzkfXpnKBZGydmjQQTG4J2Nia1sd5cazpTra5Xzb1R6HUD4eniTPHNXWemzV3RhouvJBJN",
  "key21": "2fLT1uwXjxYQkZvSHuL7KdtpRv4oGBoePRqz9wdvtqER6MBpWU4W1uZBkVrsFcFd7RQ1bsT7ZX3Ygr14jydJ2asb",
  "key22": "4iqhJVmF2rVzsMZowYmmsP1fgrQtvVQRG3ypPdhjbRVipPZ6Kk5GiBAtowzNiCCFhdrrYKtYdTQiuWDmsfkrRgK5",
  "key23": "Mfvm3FywWP5C6SbDvsbZg3CZySXPgeKMz8xZfcz8RfSotmahLwC1doLLdtEdQggtmkRp1AwB5fesBCPaHwazvvk",
  "key24": "3KpQvzLTjweLkLeDLDrvaRPAbjNgjrheucuz91PzQKWoLYhf5P2D6KD3yyd4edEdRRZDPBLirakZMjneacaNPcr6",
  "key25": "5jPt5iR7NkjQtnhkjsvhpHgPaLYmjFENRhexKEsvD8DUBwxWsjhv1EZn9zoWmNPgSbsN4e2XJuRUsMH2UbzqNn87",
  "key26": "mF6QT7mCGpWjwTohJWSMekxJM1YLoXoCQNwyD88To8VvPSdHdfSKDi3UyMg7RsZ6qQYhsNA2CignnE9YEZFuWbq",
  "key27": "Hd2TeodrpCWWJajYFeqZncMg9rs3GXgJNihH4bzAu4xGEg2TLeq6mvELRAwXZWhddLFbu3Y8usZsnaSpjq6cDWg",
  "key28": "5DUyZGfQUofsvpTUTSVAaxHxZnrNfrB2tRoDsyeiHMXBrwmW61LgYHrd9KwyXcJMtsc6sztuZQG4URHcXnWVTP7k",
  "key29": "2xpgyJfAR4z5JqPiuQFgpPEc2bqsjSgzmcnT6qmsSzdJkL3qDvUvS7Lx9in97QnVuEqTkVB8Rs24zPJRJiHk7gnq",
  "key30": "5m1seNKjetPHYAYf9PmZ8dSoqVFyATJnkHAj4RpvowGtrev8ZLrR44iAfSifRpMNGeh1S7Ckp5puR4mGAchZ8Gju",
  "key31": "28a5kyx32JYN7RUefU3hmK3dEkxrXWXQvtigYQ69jjxhw7fQSY1SkvRJfw8CRSsTGkgJoiPYRQncqNw9Xoc9QyQz",
  "key32": "2aqL6FL2BobCs8WMASAEgbQw499yQn4To748h8c3QpzRsTvSPpQ3eeVxzzsKcwjx6DX83q4pvvvZ3ziKTxxMWhpK",
  "key33": "4hpbmAUMrLb6PQfC6As3KpwzNwQUGi7PuMnwmPsWnJjL1RZBcbdWoo2gL8zL8o8wSziKqxAbU76Zf3JM4oicAvqz",
  "key34": "3A4QKUwDFNc7Qwu6HZETZRKmFQvrE4yQrAyqc3TdY9ay28EAXRE95EofBJ9eCqdyTY9fBv37NT92YoffJaVQb2RX",
  "key35": "5mXFqBdu5QwTr7bj13PksNmJyUrSXPN7pwQKesBGqcrMTXQio4Gk9ZVXeDt9frTPhYpfivdCN3Ce9rTcaYcAmCwz",
  "key36": "58zfvEGpRybaXhTcVGkXQfRk9tZHccq4ihngyn6gpZWhJ3CUTservdgYXL8n6t338Hu9KfUVde6C88EHkvfvvCBu"
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
