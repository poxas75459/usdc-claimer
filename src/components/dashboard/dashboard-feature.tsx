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
    "jsWqSgg3kPxKWAmLAzmj8sukqw2xPPf1KYY5ACcSVzGV98DJirDCagr7SDTgnCbFRw7xo7nPQtsabYzZzyWu9th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39FnixwmfLxYwj8xtz6UpmnwvuNF9AFojcr2i8Q49ag9os7jfG8xKLBEv33qgZGzt9Gaonjz7BF1KS98opdSjkcb",
  "key1": "5hJugXCQNnqgQkATXgLueAPFpcMe5MM3dM1L9tPUh7YLTfjfv3RygSv3dYy2Kshdrisr7HT8U61iqTfDhek3KKCC",
  "key2": "Q7gXeUJnD8LbqBnfS8gkvmBzWTc138G7WUY3AK8csjqTZSKyzjWoK5iGQcgJVRwSg72mpE2jQtCMDQUSioGotH2",
  "key3": "3txdXuGrXGV1HaMy7boocQ1QKvAKTkDaPphiXkeMfitNea6DEf7zHdnWapD9Y9juajKtqqBkczZyyZ65XAa6sCpM",
  "key4": "hbgu34S14Lftg9QPNPUvhFcD6MgcHYFcMwFJAbTRxnQfyW3WP6qZWz8G6juEtb6yUwTrDwxGMNqpEt6bp4pw2MG",
  "key5": "5E79J41WCiiuwjCpyDvrXbY57W7SaKFcwfMDEgpW7cprYEq66h8diq2pp1ayKJvHi8dW21BRq9NxbQwkUWoHkc3X",
  "key6": "3mHYwMGYHtYWf1S6qCMj18VeGYQCsC2fg1CPvvWhxRk2SineCwd7bdTfcn7Drq9BaeHpGzpwtxXHbPHTwFBR4eU6",
  "key7": "3ZvdeGPo32kgqwEoUaXrsWewLAhEpwYwQnN3pyD237eyuPYVm92hUPJW6KLkvQKZCrradeQsJdbztEcR8trgGTaq",
  "key8": "3yuoUYu63HLhoYPzXY76jSFPtGBRVPWRZar42sDqivFf7sSqE6VAY6f5Jb95mcZGk5q2vsD4odLySFDvidoCJtfp",
  "key9": "5RFTTj6fKLUkDEgKFRFtcHMRMa4JKutxCBAVWYU1Ug7AiPTJ6JCrXUP8t1arRYWAwN7urGKdTa5YU9nr2uR8sWGt",
  "key10": "22eypVJ4GT61uT1ZBhpcwC5HnpER5Xj7htwuxpC1hEPdeojN7EXqv6CP39DEQAKbJFDKT3zgUdsN4EayLA2dzEAy",
  "key11": "3JSBrSfh5jXKr2HAPhfEziFTi5AK3BFcYKhn762zK3VDxgfuUPecxcfN8dEtP2is8dmg5Axbc3DY4tyYaqfTQ4kT",
  "key12": "2hKsrBbpcMbWTKC4QVU98qGR7J1rvNnFXckFanja7qopYG3Twd3n9m4n1RrQPTF6xD1qnArVhkttZ3fHCQ97HtNc",
  "key13": "71gZUuhD5b1ttk1uHeKGsdBRkeVonfXRVBEz9W3MVfh7JvESswjUmu9zbeSEUr65ifM1HGhFsePdbbNzc4jTX1N",
  "key14": "4KZ7itC8H534m8LxihyhPHVJbLUGZUTnavBvWJyXqzTT7YTgxDbTqP97UjBkfV2eBxUdA5FWp5dY9Au7dYNJgFjN",
  "key15": "64t66orqnNbrRizgNbvntNfkJvhRzNZoZwuCPeMa2nTAJ3pApiNBgXFUWmHVwPr7jFYgH1VeTURNAMZw87hKQiEB",
  "key16": "2jFvPp75oNxEDxdWoWwLXFxfYBjSGwCRt3XndJ4Eb7jqzyyiLFjYwm1y4WAj2uDYaV7WwNbT8wf97amQWqFAReLL",
  "key17": "5NQkJajfMAPav5DAZzh93kqivQMLmDcuwHMhg3DmZ4oZon3XA8pibwsyfWiaHfkKdMdiHnUaeau2eAZien829qyx",
  "key18": "4BwmDP7U7qTy9HZ3sJ8cwVQwvAVWu2VhZZmDsfAxw2jx5Z2dW1AKenQHnMZymCye5autrwZa7ks5AcnoJgJNa7xZ",
  "key19": "KVbrc5ZxG3SwAAj3gefuqjGXKiZAYYMEEVdRG8SAJ1HjYHjPXdK2ame3rtAmCPWvNnYvKdcwEst2GnfdoN1eMAC",
  "key20": "5JMi9F1NckqxBF9yt3n1Xi9uxGjYhsrHEUQdLiSPwhQrjzA5Cyj3tE1LcJmfDWrgyfD5cKJUvq3qpNgWfu8hHJJp",
  "key21": "2xEhmYUzNmJddo67wMurwQNZA127mhqySupQsH3zA6wXPymkLabfSn6Wvs1Auv8evPBXoUodUqev7mpzy4RMT4uk",
  "key22": "CpasY1c6XGtsU82NXx5GErGbKTwYcib6CZpCEe5jRfE32yM6a6Nntd4MnqAe2YjrTazmsDzx8YTHJSpXwgDHdGN",
  "key23": "4H3agy36MHD43u3umz5uxMGNpTsm4C32r9pnFLYZgS5yNmGH3146CvRy8VZ8Zsi7vjrdmj1a4rRXDhspEJbNCC3T",
  "key24": "5e5VdYX16jj3P2Wv7ah2apthJmAqNr7RpDMpbnZMSAk7Yur7KHqi3TXLrtKJLLEYcWqWPiUU7kiMoHTauTuemGj1",
  "key25": "51aR1V81UrhVr81yQfan1VTvYbWkabiZsfHG5jEJTFDdhmv3zqPHjC6iUKS9hZrTvR8qXTFLLSDagTt4TXpgeqKf",
  "key26": "4iayTWq1DHhUyNZVMvmkJ9LZme6SThLb7muS7JsFuNPRzzy62WWHd4XeLF6X7cFUBrLbq9rDorn2SMrqq7N3CJPm",
  "key27": "2wkKCGmH6qTHxuMpwHk2q6csGsALtp1xYqmgryNjqdjf56NiFLHRtNU1aUXJN8HDsUfBj6FP16r9k9mS7wmFe4M2",
  "key28": "2YLm3gvS1xy4Sba94vCc7LzeA3gpeaqkVNRGUtyoxhsnGBhraHg8KKuaJ7Tnu5Hz4vw7V6Yk8RFm6Fj9N1WpDfSf",
  "key29": "5MKCjEvKHWjijGxCb5M1HXSNkUJyKa8hYinriFq1UxSngFcMtqQqsSohQMU7xvreH2xAKc2ozUNFjCwDYHM2PRwW",
  "key30": "2Vb3tmYSZk4z2Uz7UouiAxNDKkWAXY9wrB3MJL7ra8KeHGfcrCpZp1AoCzDUwMPtsnZhjV4D6HHy2wD9PXhqXrG6"
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
