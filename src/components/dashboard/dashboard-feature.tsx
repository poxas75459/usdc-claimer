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
    "P1V1eU1jUaoGpGm2hjAt3MvXYuMvxQ8cpLcrva2tHaaFYNfcegCqjfJZAcEyT94tsC2AK7BnUBnaJjbJNSxLcoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HVb3873xXqQV79UGdQH2rqQ4G8sz1pcLC8zah8TNS9Ni1GCrqSQ6zERbJXSkKe6Nf7Y17LJ3yxpacvsVveM2dqP",
  "key1": "3VCrzy3SH4Zb3jqoe59PzJUEQyoyd19HMEJmUKpUoFPycFt3g6vySPHsWGg1VS84bUU37CPptFDJE8n7PPjHbD1q",
  "key2": "3ThrKQfCrk6QRioAR4Rc7fVjfKmwJnaWuYnor7MwJwTu8JjJ4C1GdzfJ3KZ39oLSjhxZgmW5BN9eASPgD8UFzW3g",
  "key3": "4avNZ1JMUVwSGhcpgu46Wwe5anacejs7axFjBWRHEVnNrKwDxhrxmwBQT9faK24edwRmoB2b6vc4noVkzSwmKCjA",
  "key4": "63yuFh6dKgBEYFro8uXnd5tC4CwawLBoKP3TyBgQkywYEcC2d4avtVBG1UN2hz2dVnqUyyvjip1QMGFiQe6bVrTm",
  "key5": "4NQUsKKqaGU89ykfbNt2tocXQPn6jT7KRfKLDTuZK1cxka9wVQMgZUqo15mYd2znt4namFdUfAyHdyHc4VBUsSkj",
  "key6": "3K56NLM2XtmZ6MqTZjik5vsWWXWuNcoubwH6cMfFNFQNqztuwjjfGe4m8kajTaLkp9c6oVj6xAQhu6ffFeeWBRzm",
  "key7": "4z2tWfKjxaeCy548TH4Rjbcm97ScB6Xsy2gXtoh2CcDZriRLoEjXa4MVwnmzcAaPoiiD87ZYSFvsG6LinNPmVJe",
  "key8": "3kAf36jMfXL8jxBdKsWRihHPVg2i7UWDQzT389zneYo9aKVPjdqDg83VUcWyDtLFergpWr1Hb1DnXf3n1G5E1fJA",
  "key9": "4f1neDJ9iW6oxd4EfJHjEWdDMZ2mydRfZGQ5zdKd4NjpoMVmeQmC74FQGRiy68naugEz2foP2R7vWk9gqDLZVmvf",
  "key10": "4ZS7PaK8qnmkj79YVfV9BTVMycJLpR62FrNBb6T9h8eezDvCDJqXk5auuCecoo32Spa6HYMFd5LN2vSxh3bpfJmq",
  "key11": "5z89ETpk8LDsZP9Q8CNjRusW7oZpWs8wMny8eqKFC9jSuughansfxB1r6FSHnCf6vmhgXDj3sCfY3CRHLMUZwr6G",
  "key12": "UJKHnU7rt8M3oAXLBBvZRUGnGH7pKiXP2JbHcdzxrVe2LHEmQEs96RSiA2BLeJqxwdKbu5umZeMRyCGFgpE5HHM",
  "key13": "mUqs4aXJyDt1u719cKG789YLmQEUs4mrNSiiGf7tjcU3gQ44oDvQ7aL6aMAUZPC8kE66yQywpzH2yvrcjqAKhnX",
  "key14": "jJNTh23Ygvq1J73rCsLGQR6Qec38pf93TNNn7BaLe57T3aspBDvMHYZiy9avbDB2RMxUs9BLegzYHTRdTFnLosZ",
  "key15": "39AwEDbsMaBC6gn2wRQc3vBXUnej4dUZsCqb2JDrrMfZjsnwxuv6gVj7HwRLEPvixJd7icNvGC2d17KvLRBuc2bF",
  "key16": "2Cry1D361XE9MBCNyknnHC4HLv65mPE5MbG61qM7PWX1sinGgsHnEy5msEZ47Q8KfA6EYwrDosj572MrDNG8VJrg",
  "key17": "jys5em5ivZa7uwk7sUFh1BMHAvwSFzdWeqP8esTrFupp2ogTDpxXbRzW5USQCD5F8W3yu7cKb6PpNSsbnufWRak",
  "key18": "3Cs3JSJts9qaD6fLbRsP6zY7n7AbuNCZML3hjxdzs7ws4zCn45jFBgbu9NjQWzri4mtW7arMhHHVWXSHj3hqwLWb",
  "key19": "2tjiTF7BoNxjWacR82wibdKsSVKUNAfzohPb4NZwqKMYDsUZ1vVD2jEwMNUcQXPrrbUQKfAojMAjCSr1oLE28ouq",
  "key20": "5EaPRDz6e6UsL8tZiD5EXvRo5KfPBs8rfGq2GycP7ifNXmjESzmLdgMk7T1CbnTVYDNKCc5LJHGfn5MwtbVzgNsZ",
  "key21": "2bMGWrR1DdD9AkhQFLjbH5deZK3jGfjYt8HfezKnVzGLDVyeWh8x5WHWEtY9cn56N77QyNMN3ngtuXBvmiP8Rx8D",
  "key22": "5h3Sd94cBNDeDJQh2V4YhEMKDL4Rzinz5eCt8pfNrJSSroaeeJ92aJeGUDwBFhWASCvxU2WptqRonMmNQDpevrL8",
  "key23": "KRQDx4wBb2At4pKBuY6XEEJDg9xZsTZArR4R9oLtDhF9E5feGvJ22VXkKU3fT5TsqNUvQesdmDsvexYB92jmdvp",
  "key24": "3SLzomX1tBkiHi59Epi2WH5NyYtTdABySAgAEuuHWgMTVQ4aGsYGutBRooR75WreWgD6i4acTHYkxUj9gDkjCDTa",
  "key25": "2HaFLmUx6Z8UGWHpqamo4ysAAKhcNSd6e2XNrwC8TNL8XYSfKADcDejyhkWTEGJgWuJNGmL2D8zuNGjoVB1vqrGP",
  "key26": "H7ZAQicvKrVcAnpNA2RHYW7eodKYiNqbbEoBfauuuSEC8vXxooKCrgTWMZpoB5U8ppCqgTX2wL175HtkV6bxbAX",
  "key27": "VRUFFsktwHgrf4bpgLfXMNkmmMjy6jTPJAFy6XZfGb4U4ea3VLsTtfkZpAmqf5V1gDT6HLohGjdoN8JAQYioFWu",
  "key28": "4ZwVT745wmTRZvR4W5JifUWjD1q1fqdd1Z3AN62vPKM7CxwK9kmSTSYPwFPmnfX4uoXjqdgVdbhMyht84KQRN4sj",
  "key29": "4Y5n96K2nn6XZHtmbnujveR6n6rShukZ17xLZprhsW1dHUcZpUM47JGvFc5eGD43FHhcKVvemEF8fjw3uxd5krZQ",
  "key30": "2H6vVknEYVrRNxAg1z4FmryHnEFLWSprbMzaU5kYD7NiUkipYCpyELEJoLuCy7kJk286NXodXq5B9ySJAmUQWzw6",
  "key31": "4i2ot4WsA5d4MG5nSJJ6T5m4mev8enmtLJ1UhBtBKhiBcu6QAHgnWSgWUXkwZsr8Ln2oiViE6q5WCPpBJGyHNUKu",
  "key32": "iXEPTE3oRGQsskzGzkoV6HH5ZcLbMM18usq1trp4RoNjvGzjL6nfgBUP8sBh7wL8omQ6Ux32dcu6m6V3s9UREjU",
  "key33": "4j8JifnxA3aLFPxAhKtnNZRDPwYQ4d5pc9rrREQadSczXzhwqBWMUijHdZ72sSczHT16xRNT9uTC4BfBQ2zop8fs"
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
