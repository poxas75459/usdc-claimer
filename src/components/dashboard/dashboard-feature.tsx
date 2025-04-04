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
    "2AyRmRyvcLW7V9gT9SidSwQHj19eru2GMmBVyEqTQDMANLYBJSQucwqVFpE6i4GV5RpehDnLwMBMfnLLznDPvGK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zaMFuxAijjsEtcVN93qWSMpVCDF9AWQnjuCYfYjktBoqvzfAQpmt86Ve4W7VN8DXjJ6Xn8C74XBWP7KjG2De5Nj",
  "key1": "2Xdn2fMge3d2MjEjY8oB9Q6aBhhm1FG8GGGTwWvuq3CJvSzx3wLkfuSB3VZyTtC1XR7xnSeduUF3DYH5HEf53ZsA",
  "key2": "2KBdNERsfssGAaEih7uxrQ9vJWQTyaJGJLSMTCKWiYkNRee41Etnd8JxSq41n2b1KEk88s3PbGHKTB8HuaNcS9K",
  "key3": "3HDNAph13eeFQpDqnga1YN8e6tSk43Tj7LK4A5Uo4zN7oHS5ekmBV6P19vwemMEdyZQqHJ7oRvP1RyWLHqwsTJ9s",
  "key4": "4VJoH77RvPAn8tLk5izgwWqsCoy5xTVtVuQTd2ohrNH4bRFDWZM9wfasTeyJif9nf7KmxHrJUAZ41wFCHPXLScAs",
  "key5": "42oCZDCQxAMShwByifGVr3iAt626JpLscgPny5W47TaWe1a92DNbE9aHwvpgLpJN9aB9EtHvXNovEBv9jTKZvLYu",
  "key6": "4AyHToWV9RsoehrjaEckASAmmpqtUBG9J7H7mBL3DzT8qdkJtoTToWETaGtqoQXgomNwuBrkwTcdQYgqKYjLcYE4",
  "key7": "4FA3rzeseZoCmApQYWCoM3mtpZnD3eSumiV6fmtofC5PaYxrat6cr3H241hYXWnynjE9iTrBmSkCHRDk5GYCJgDk",
  "key8": "5f7WgDijDG6dBxohsLsXNzXGNHz7iCAuXxyPLdLqkniUWYdCEsqED58f3M6tCdphwQNtkRV5JBnwCyrWNVNsbyg5",
  "key9": "3viEiQhk7eo4Jzrnp3fbBXsuGFxyDqc2wexGdQpgpFS4byoPzai8q9C9k8UY1GiamukhtRPu9XQaSsBbLQooqP7A",
  "key10": "skJD7isDHLdHfKZYX4GP6VM1AH7RRtAYxu97mkuUXNQrGffGA22gFT6zDcqtM7n925VoARCakmVSC9b7C5Dh9pE",
  "key11": "4EnxkUNqKDBdwge8XKW1jwwNfVbzaapQgfa7ukW3we5W3et557zz3NNfweG8Frv9pG5y3mjt5rFab6CQqPGKRQjM",
  "key12": "5bSXvnQ42KLh8rTEqnJcRHPvZq6sALuA8VaxCiAD2tLEsmPZ2qT1G2PTeSGtegjV6cVURkSyFdvuX9LerPxNPC1B",
  "key13": "5ZR3MeKvLnVZhXL5KHyZQmbAcYHqaKXsV9LNAsrt1M59HJfK1uCZ1AD9LyRWuAsKa8TXhEnEuMBEXniZ6EhAXpKT",
  "key14": "5P7TzeAarNU12XjoNjQZ9fyz73VpFWmicKPjNu9cUkGAzvAcYrmTU64jCYes31we8fKKDP1E1qwXPJNLH1sP236z",
  "key15": "4xs9kKtyasYBnfZxghVQVf1Xj6PothknRofsccj58JnuBT8SHUuBYYULjZAhMUkX4jZwqe1xkc8VkYaKY3AvYSWW",
  "key16": "3ci2tYwZ1Tkr46WjFQqkLqbYRsuuH62N7BbUNVH5Yco81VbAyNu8uWnCWZBbBTL398dxMXqW47is4ajh27Hj52BW",
  "key17": "21jTfnFGygybS1WgNJ12aiYRpim3zmUyzJaCBh1XZsNNmAEBCHLVRkahubQnyBCTQUGjb6BitfZ1aMmTce2X2Jfp",
  "key18": "WK67RXUUCJgpCjCLSB9vHjLiVo89pF6E3QFSKBPDxANHL9Wi38KUm2oE1zvYK73bZ9C4AEAkmJVJnonRtr3jTjq",
  "key19": "Li9UbG894VxwPj3prKMmD3aFcdr946YentksbGVfdBMADdjjyuafUoRxMisRMBV8dHJUwgbVmFjTVwEYyTjv3Qm",
  "key20": "mEXvatN7d9U8jQ9CgCiq2eXqJmtAoRwQHQLzZj6GsrgACERdoYYBq3FSdAJHpV7x4SYhqbc2vARmPbQL7MBSouD",
  "key21": "TnC6WVKHpmnUn1BGciESBG97rpUF3uXHr5jFDtSEVHZ9yLE3awSHnf5mAfwtBPCE1yVcvVFMYWLASJNg2v4MpW2",
  "key22": "5qY5nVyXRJqK9zMN2y9nP88T7CjnwRsXLxsq8pThtdKsHK9tNK1KQGWy1ejpUER3FT5Q6CGnkcmxRX41Tt5tfxf3",
  "key23": "4Ym4jQeQVN9jnswzDb2ATKFF3eWmmceSaWazG4JtaLPnyGVkJEE4dgyznctWtGUQVrAs8ZqfhCYLG9PcKjEfVqeW",
  "key24": "2qBDesRRgwt5YVE3vXoE6vhTiw4uyheWM3tdPWNQzJx1e3LTtSBQfaVL8yaXnq8GckEVZeswMZVeXNZFmxokV6HL",
  "key25": "miDFUq42F2pGkUEKqVJGks4bFcGoSWZievkRErbtiAbZinDZMYkGpEyjAfyUSTZFFZNmLSsraedDBX8YD8AuZpw",
  "key26": "5weFR3bsZX82AU4kcw3shzCJzKJYcHv7Kqu89ACNctqptbpqFgSyef7vV92F84ticpmmaxWbzwt6rwtDjnHj8BTu",
  "key27": "3jTYVQcDtF4SXAkDWpwKfeLLeL69UaVejdPd48F92twvdttiMdJzJyVzKCQAKpgCmU8ueyzjvmg6mgRw5mb5wURr",
  "key28": "61YFowsnnjBZ9PpobwdR8fK1HWvNo3GU3tyvZLtZLBZxMR2nMU8mgcE98sALmsFt8kpa5qS9EAqmfdZg7qjs8zUV",
  "key29": "5LANBAFEKjfZcrfLuxhz9giaeZ9bxmE9rufqCN55smdFk6tgvqUe7yoyZqH5u5ymNvL9ErAEC9pFssgkgFmh5GdX",
  "key30": "2K2wfTsqkN8yEwuDMVfcBYW29j8hKBKCeHbXussydZTwxHfweuvXYu2Bf52sVWv78pEgqVKnKiyzNCJZRx46dFib",
  "key31": "4jaFKjuhrEBV5zjFS58NZBk2nr3Zuqc7m1rC7y2ruRAqvYGQsYW18MKrVVdt9GnfV1g94dcafrWHiheVnZVxJQNy",
  "key32": "DTuUfyfVGMoF2rVfq7z4y9ZuLA5uJAx5b4GLVE6Sxy3HzmcuEVvFsJJuUtBreiJ6qkan7Hv3QfAb574RJrhf7QN"
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
