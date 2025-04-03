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
    "2juMYPnJu2dTGEvE66ig9fqLxvnwspKdntZY2eh1vyVaSeHpYhAbwARvJpaHDybxgAmawQ6WicHtqnrRv5bTbxqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gL7fXicxzysnwjFDhPHjxHKJzpQFucjNhvyEzxiDgkNGd1XxcZJeJS15EGuMoiu2ZTyPW1gNAdzLafKMd3GeCr7",
  "key1": "5VkACwpZKB8kNZXRQesBKzuGrJQGj4beVC3ebiUSjhYWdGNiXFsnneYWEkyxKXvDgbBoGZHWGKTB6z9yZR1JnriW",
  "key2": "2srEyZxBDHBVvPDCynJqLrvkKoYLKFMtRxkyzwBe6RHQvfbnKpD7f2kvFfqD5SB6dYSynYX2EFe9MwvxQxtnHaWq",
  "key3": "5ynhhsvJX6fTPyA3cgea4oUYfsTEELVsjZDhXed1N1eVSrFtNVURgZrMCyM87DaCKVeRc1La8JedM218qE5krRQD",
  "key4": "5E9vuRsU3zWQEmzK2umRXjrcU1VzsCydquwLD9TK7hJYpdLxg8jB9U2Ww5GHp4zqY3jHDSCWzpV4VmoxmfAhtfju",
  "key5": "4CokxE3KEGfCQ8EFbRUDZfVbxVgWKcePAJGysh39J7w5zcwbvtVJVd6awsXvoqMDe9sYJoj8hn2KrHBmJyBhPF3N",
  "key6": "4FAGNPR5ikGyqjRSxzJQa8XxYecYtoHktudyvTpcFzvbWK5jt8k6Ggc5mEJZagr3kppKmf2jvAgwBUezkucTF2FR",
  "key7": "4dktkJHpPZkQTJbH4Vi8JLj24o6H1G6VRq6HjFFztoPmkZ1JUSXn4EPHHmsWwV2dvvkV7RqZus9aoKcSmgFhAbhf",
  "key8": "oWa26aavsfTJeTTPTDkjvG1fsVCuHQKdVmxJNiWXEKSxGSpQL8sJZvqKTexrP5xTkY8me4xDRVYYp4uVeBNRZ6H",
  "key9": "QdPsV65bt91A99UuegdnsgfX2obaVYKuazjjqE5HMP6Q3DBe9cyYEhyKNhC35CPxe63vuArHfSz4G68dNqc29vx",
  "key10": "34uEa4MXJS6eUhXiYGdGQy2m2RqDhLqNym1vRV44WZJxa52MUV45HsY6NcctWNrQccAXTTLrGxigz79fXVXrrb1q",
  "key11": "59C8DxnxLghV2WQCpjo9Erv8bPqzXfbDH1X4ZVVj8MTUJvCP1xVQZ1KWwkKjSMZjWwSL323SoCvxJu4nSnJS9aTk",
  "key12": "nYQJ1xSTDezZ6MhuNZn1KURnvdc7yTf8U1j7f3Xd77UhGdjwC6yYexUkiwgZ2sU4oib2Qn6TZKNJAzJ7AxyLyST",
  "key13": "4Rqim6cMEjMWzySfA68e5ukv7x15Mo9BHSheafwSurvtgp44LqSmfj8oY53SCqzdvZKC6f1zWz9Js8e3NccexTGm",
  "key14": "4faeorV7ebk3imk5nLm4qEiPLpJSYmnh1Bep2Vy6DFsUEuK9BUQsFJfsrtDFz9mFSvT5oorSamcAgouQdboxi57P",
  "key15": "39usJNGVKaTY5ynGaqC6vKPaJbYd3XRHUpUVQQmfCFhrmC9CZn8e3H2JZJ8WsBzY76n684dEJBxwioNvDB8pGcVj",
  "key16": "x6NXtD8Tb8LnnfjLEftn8KEkv4wG8dkKSvKRshx4nNwRHmEvy6t4EvdQMS9Cjp6QcCYuPW7jPULCUwPbTQzTCB6",
  "key17": "5LwhLyWDnm4mShEd52dJTrUoPnqYiKYHW4SWXWdvTAQkDset9hNJ6hczNEWiK1y9PEpqz4snVf3V3JnXFybv278e",
  "key18": "5YnKj7DohXkdYFmAtsnnCEKw3MejTq9yNGEyo22i6iEmNUU6Z39nJB5PAHXBTwH8arE3U4DVPvfxUqHmPDFggbqs",
  "key19": "43jRE3wE6a2pLR8zP3vME2pZLvKivMf7SQMckQDdXAuNBzd5JP7HrtmpduR3N3JjCUsDpn24efMYG4X27e2AHah1",
  "key20": "2JjuVhmGpKijvvbGrj7xeaXWRr843dq7TUkZAjrzHRP8jE4aYAZ8YHZ4YSB7j68rEGD5YwiXk3SsTrJANEMVD9mG",
  "key21": "4BRxrKmehpKXDJdQia8nNUEu7EjnNgATjsHzzE9hpLanNjHrbGrehn16w3zvqVvFefYq3vmLWBxmdbz53wbEQHGa",
  "key22": "4C9Rh1R8fUcFrdisJpyCtKYs3NMTs4cST1qJ3P5cY6s22McXHADXBxkMXEmGqvE72JFdhLKLr7YjweB4CLDzcVsS",
  "key23": "4Gn5Nky2SvZqig55Zy2tA237ZB36o1VPiM9BHoF4C3Ef2ty1VMrfkmDAq1zR8ZvhYQBG4kKB2DzofHgm6JHJcYdL",
  "key24": "2bkmQtUnSy87VoNraqJQKhFFcrdgypPGsx23a8RJ34yjUNRm1JFGCM46wk3qDpNgnUtWW4t4LTCzvGrkgAhKK5jZ",
  "key25": "2onwKq3A6y6bmCrxqaKuT8A9ozM6kXDC41d85bBj7MviiNwuWroum22mDVK3NZXuaY9sTfRs79BdVzxVSz6eRrif"
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
