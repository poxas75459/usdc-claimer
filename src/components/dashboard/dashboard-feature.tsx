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
    "26vSigYnUd1Vdj8sV1J6FDkbAGCNveYcyDrFUgSBNmbHt4fGuCJgkkSRo81C4fyxNYRKBPsPiyz6CyaEAgVRbDDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KkUdXyJuwxS6Je1oDSpEV2hp4NruZm66ZTxtrmfhc6Vmxs7YWDfNXsNs433DscfD9bhwN5xGeRBJcgWYLZD4LoV",
  "key1": "3VJGLZN3p9cCQpus79SyHwnygtgFfEMouRsqCnC7CJ8xsAMNQVDgGYfXz1QgfMe6S2mrAbastepdNuPVgecAaar6",
  "key2": "Y6VwFe4fCEuGi4iZiGVdCfre4ZUpLKLFnhAspVnwGNeTzqMoftepbEKgxhSD8VhSSPLL4crp96s7p9a3QVBAahQ",
  "key3": "5v3yKQBF9YGkqG8rQLsXiiyLZoppa38kqdwTrpFke25dqmM9tV1at7Z536S4nKogiGQoUpq6KaBv1tgYN43EBJ39",
  "key4": "5bL5mKS4rXTk4LyhLUu3T6Y353tkYeJoryKxkPnGcFzTdcZJK4BTEZDa3AWwUoDLazzAmYLJD9qLJup4CDsQnrsS",
  "key5": "3n4nNqqSjHiiyDwG7FyPbFWX3SWCHsaXstVRWNJVHptvS8eWDsvU4K6wBMKgsS5APqFzySitoJBME3aqULmPbMy",
  "key6": "3Ev1vRt9uqoVHqqBCNGs5EHUigS7SnM1JQjo6PChdVGqxCtnUnoVZDddbcZLQxC1jKDhsisbcUuD2MhqETbhxrcL",
  "key7": "3Lax7cAeYnLnczz95zRgGakreCjsoX7mUr5WQpYcSMV8UxSbzbDZjfwxiq3LHtG2MEVizZDSGFJkArhr4XMUqe93",
  "key8": "3EUvDjttmGsa8onEPU8ttt2Cq6Y6WzTDFuLcXo78NgKUeiTKDUvZhfiYpz8y2sbMuQmBVeHMShgde3Zzh6C2MwrZ",
  "key9": "215rURNwfAjsUMmb3v74ccXBohWPgh67LPNjNQT5LfQXxVVc2To7rJBApf9jtQ7JCEghVDZYNEJyM3oBEVc3aRRe",
  "key10": "3PgwAzoXnNu4o9s5k1Rds5yE2uYk4HyZCYZzNnEPRgwV1MUZK34kR638juqcYEKd3E6xt7qhV4qVKZMcNKzUcCGH",
  "key11": "4BWxREJVZgo5uDVnrL8tQS1VhoCZfqWvbBhzNDgxbS7shFngvsdXCSQ6aZQsVCjTseW7i7HNHW4yuWz8SuvTmh7y",
  "key12": "5s9NBqRE3yqCT4U8xwEsF5srng2W9PVDbGzmA2kcUQXxodY2jYjXrDFnYPRrjeqUv2uBjVF1g6Fy6o3Ngt4tmiDS",
  "key13": "4kJ9beuHeJv2deCUqL2dfDY8j8BibaQdPZxBSvqWwVWwJNhcGNitM1djiPK6kkEjYN82MgXcVy5E3bidGoJdb8Ay",
  "key14": "3ZTdWPwYJVkWptQq2ey18PC3RzeLgko3FzK5z39Jwa5avPKY7v4tMT5hyqSbywwRqHgETCjjd5pPaEQ7aVkqoMVz",
  "key15": "4qTMFnQ4ZsPAbyRGkaeFksDUwpcnxfXyyULY7bk6ieoNEM9MKWdREQpYWRUQPzF47SWRnSnVTCbhyW8Q9vxrxdTP",
  "key16": "4NP5jimwtbeNurJYLX4DQbx2QV26Fi3He6KQDj4UCcUtW9vg8KsfrqYZfsC4NWYStdBmnSrLd8Azd3p7A3gM6uY8",
  "key17": "5Vmgmg8GYaNxvpGPhPgVNVEmYwKey7mQDogzfxefc4hFdTPQVCzAWAdjnTBuQboLShydkHTgYcxPQPEhpQSDWXjz",
  "key18": "3g8yq6XozhYz1HuYTHRYFTqgsnegznu6VoRXbF2NxsDoWAhTMuBpD8zBngzt5RTFssAttLpqr2pTXSgNVbgUuhdW",
  "key19": "3dRXoVoYZpJz9QCxuv8C3vJeDMuKaRdSgKSykQxudsXEDr3B3tJ9nAqWm6ciCQ7sCjreY4BCHJH5ctHMN6N6UGXY",
  "key20": "4RcsiVvJM3zy2mQAnSpeVauAwrs6q5CwscbEgDdxxARc7kHJR4aQDx8UJCYbra2pcVxYAHxVzchsEagiKrvF1GKw",
  "key21": "4EP1srHctPuJT8RaXGUg79E8q3H8ANgh9MHYgZ58PEjWbi1Q1DRauSSfZUnKaTWpTYAmbF9SjhCkqQQjadgiCw2v",
  "key22": "5tf4NsYfwZMKWNdbNnmEW5N35Q91jPHMfScg9k4nZHcusEnhpq4dsBo5gkVMBPadimGDegoP9WbQ3bdFhgC38keg",
  "key23": "4pieowPBeJ5vyMPAG9w2JxKwWyfzYDPUdvABJFvHuQAABuESK9MceQitJD1vxQ35Dc9PjhHvjeP34fJSFg8q1GK4",
  "key24": "4rmd3PYF21uanqCaXncePoDeX7B1hdrRy8UCkxCeNoz6Wxi6QuokyFZud1ayaJUFBvH2CCq5hanUTZcsMaWq84Ny",
  "key25": "uqStR9mGrpoJEzRURCPSfLuSGpcMfyQqg8NXqxFyuVrFf3WQRqM9mjJthcQ7XK2zQXPZJ8Z1mXU5qoDHGCic6UM"
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
