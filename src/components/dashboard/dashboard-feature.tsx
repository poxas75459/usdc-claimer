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
    "XDQVuQwH7pHioRQpn9So8qdfdVgCkpBCPs3nYy12yCcX4ct4hZ1FejF8Uq7XvAhiMY7ZQQYTuTLVVdXPiBBBK3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kZxNKdGbm687TXdtx1uxbrHsVJGsF5c3hYLFuSxW86jBhmnJyHxHVg8ujTZoeAzze8jTWtLfp39DyBkcXxRa1MT",
  "key1": "2Zbc6iW3tG7CSP4BTX46sZBpfWzE8B6sFK5vuAVFekz8fGAbWvLbThcHseJhpgcdfmvY23hFvD7ZqX6prwFuSyN4",
  "key2": "4c8D6DhnkvTa79t6PV9eLLhxrJxyhhzoXpzjGqdBSDfoVy2iaqG7enppLFHzjeFvd7Eo4MpBaMyTW6VaHtD6zeM1",
  "key3": "36HcXmP33tcss44Z21zB4vR1G18eD5pnsjFBW397uPLSjAudEngWJUuEGD3JwM99hQjEJJVm5ubgACyX3AZnFEN4",
  "key4": "b32KPXWXUvaxeiMaAj711GbQiKWX9dkdh3wrkkY545jtDwNWujYrBC8McZTpxfLtaphDq8K2QV5NYP9KioEDvm4",
  "key5": "3ZWehmdppFqLyCMoheXkXVgLHYpukWGSnh1HHeJRY7Y3WJhxqiLNjnaE2k9ASgZ24U3JHdU24XsJDkxxSLmQ84kh",
  "key6": "39JGXTNoWa4YAETaPDi3HGjep89RpAJjh7HwDW6q4P9126unbvWaysNJkRZGL22csnTavRs3wtcrExn7K7D8tCAh",
  "key7": "9ZeSbG8wK4ga9FzMvs6wtNbRavvFhpqPbxsDhPB7tHkM6jSMRt7KMC3PWZGZBVRLUFEA9f4zQqkDMYp8qxZreaA",
  "key8": "2UjaKXDivQnd8pM9yRRBC6mYY93FCDur7kDEM8RgWtUECiYbeAonemccsG6TLKtCV955imT2rX98Ey21VpSY7FRW",
  "key9": "y7p4NCg81xkg34sahUoGYfFD1cKqrcfyAWkCUWvfqohTkneRE7aGGX5U71FNhSUk2JikXJLpHHt1zwg8hvWzMDi",
  "key10": "2TNYRzJQiuFbtmikKaVX3uTJSSa8oKSen23wqWMpU9z74mV4KvvcjqvkfLpYmfP9VfSbukLhyps6LdsN6h6zGCUs",
  "key11": "24yAGC7HhdWiT9h3ZduNcdTaKmUU3C6qrSJuGwE5fw2xu2wcucX8SoFJVcuAvPbVCkodyjQdFKPu3aAjYH22ECZc",
  "key12": "57yjhgTkPPJWwUSK6kytCM1yHDaWiBStXTHd9iaAtHBR4HxAkBBp4yv6aHX4hzkJJSAhpw1C8VbR4iF8VdN9VMkU",
  "key13": "39wHH3NPaewL6ubdPWGdfS84VKiqTXXugM8qofsoNmv35QMRdgYd8uBkgJ2BgUJttAXM2LCnwrmBZKo73GV7vJ63",
  "key14": "5KwWSHsaYDSraPLJ8Qk8jxngR5tvkiWtJ96JGrLcXmRqhSPFpdproRJmmrThgbtPYCr1VpW5WrKkGQH2poAPRDJL",
  "key15": "3ooAqeGMrP8xsK24dW7XotyYZNwsEcrrwQANQG85Nv8gatFipLGH92kn4CNdNbMGegxYE9BYPmcL1EpxCTfuWGgF",
  "key16": "n6paJw36yPQNBrodRzLCJh9ZY8HoRnu6bcMdKiXfyzARR3QqQb8KnmAHyNuh8LuUcytTFqwDHwyRck4bmf4XG82",
  "key17": "CvZj3fN45PrsCXdLZdZBkSrV1eU28imwx6146LhxCtNeyQyx53fy1z3CfBwFwEp4swrusE5sUVv13A9Bpm7PzhR",
  "key18": "435cdPkad52KeJKEaS8yXoqigvdgSyMUzoH3KkocYenokuKL6gFH2vepaQEdHF38XfkkeWK3TYwS2Q2wv3ydidft",
  "key19": "4HL1vmthBcJv6DbLrZXn71kAnGFdT4xcjpqBaYnRNgY1X1QZWc24qZBucBRfjRUJSYiXPJUfWKJeyuqG6rQztFrL",
  "key20": "h5XwjewDdQ3hTLJ4H7uiJTG4F59KKiaM2nNSPrDWdmGdjPvMGaiczTkKyNPB3amuVxpwDKDP8B8WgCZH9cWEK2d",
  "key21": "2na3TRXMfcVfbtavJadkt8HsLHjMX7wsMB5Mat3ph2fJXm9Lv2warQtZz8PfVeKMqyLWx3gUYXAzbR51Vn15zfCA",
  "key22": "4xuNQHc2Q33A9qTm6W6XmcrKZHBDez76EYSYMvdP7sRDMZFd8Gv2WjELApGRR1Hk6VALvAMUdcEdqhrUNz6NegqW",
  "key23": "3TQ6HGWgMPyRYMPpTGuybdF85YSo4VRCj2juJgngXRPDhHpT5oVESRheq5kpycpTv9YNTayKS2wKbHtfLZUK1Q4h",
  "key24": "66HSQvp1JCRPQ84a21EJRY2p7ev1eqnYY411sve9e1UmCdVjybGFbta7Ut84aiGnqBxm9U9eAGAyEAQgDdUkRka3",
  "key25": "3eWuzGsudD4xBMpT22QzXspf9RM4sfxSKHGeJ3yStuZikzbEnQn6WbU4nfJdcKkj1YbcZh2gh3QYAXDLsDNpjDVq",
  "key26": "5eVoAb1hnMVohxQs2huxHkRwPjboWSZHwW7yMqKS4MAf9U2sAjPSD9GoNVC25ZGVfPPAGPGdMqNsmnWGbtWR1W5Z",
  "key27": "2cCSCY5oBr4yTezWuesjgRDeQ2LDEQEHymjMdNTqb85QyQ2oPmWKLAbUNchCS5XqYqxfM2uGpoQh9kCAnj6J3r66",
  "key28": "htTUDgZKRhUxSbHbHv1ihwXnJNmM6NwVmQ23BGYi9pzodwTShTWGL8BZugej8P3ts86aTdLdYBhBKuvZbRhuS6h",
  "key29": "3eHTvCjtCkqKprznfUcXfwjXdmEgCjS2g3h8aHWCWnWSMUSqPR8tfZDa1Bcc698oZJ8ay9tgDB5wZHDzBQBSPXhi",
  "key30": "3pdZfRznZxC2STDKBTaAcLhAWmcWYxZpPz3sBT9nCziF69rJL1YgwaLmvczJLLL16Rr9oRHtLR7JyYLmPVnacEb7"
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
