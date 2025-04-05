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
    "2tAF6F3XZ9JqQhHSRTysdVsY4BA437zngXekfNuYHhfDvkBm6XwRCH8xbqPwjWCmaQ3MxTSK6S5LdeNGCVjcR1iT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yghn1gSLRkfxsZokNCYCT9cDhpucQb8eRSAiWmGEbNnsyRd6UYYDwMhNj2YQcGMxf3WpriaYkoPoVLuZ5BeYAWG",
  "key1": "Ds8AEbYktdBrotiL87nz7EKs5KdTXE4oWcibvDNTk21cnvVtZ4mU1d5uRH9ofkYFobL5cMDk2ywvP18RtfXCZ5H",
  "key2": "4tXxE534SrAFxrWgpihxxt7ajYWHnLZspskFT7XG6wEhz53u2PBEnscsGYsEhzF7Z7uV7qYT4KZrY9b35c7jjGRK",
  "key3": "28uNGmNCKL7okoyYRZ3DTPVyzjyEizxwXV391eKZHZvyo2PRJHvfaqGyHpbpcihqi9nZKugQVKp8o6nS9K2EUGow",
  "key4": "5k8h6jDWhygcw9UAUdaE2CRhRxg9wn8yq9ri3PzDBpALK6yQGFCNJ1TDrMqczMQvjaDF4yKaNqNCovDvfYaztDfP",
  "key5": "4gUDGvGn2e3QPLaeEPu9b37YhRPvZmSD5TsFzUWMmdYuM3FnQKV8TX2hazZMEkwKb3t1H8VoPRZ3FHuj1AhEkfrs",
  "key6": "4QxZPjYFGP8uq8CYdFwV1dztrBmPsjNvpSNn6xGCEZpMpj67sY3jVJ9ewRS81wm62hhzXv2EkStd43zTZyY9RQpd",
  "key7": "bMRDJ5sAjip2MEmyYrMw34uKAS4dpGPoG92D6ppLriTvjS2fXrfBrm1t2teKPawDkEgFRBueeMdMF73UDY2FZZU",
  "key8": "3jnRPEtt8xX7fBFFzw2zUyrRrWvVs3GyyvzccDPyTwCoYjmPDmZe5enTep1XcVeAdHyZFhBdfBiAB1gzrBSeVxQB",
  "key9": "5WmeuoCvcDmnBET52z9BEeGA893WLVqQQ8cPg9JCJPqANLXoXH5hvKVMJz6gSHmAkb53QkszdvuouPHNzHHvnKRZ",
  "key10": "3sAbQipUrX65h2AwRTUvBvp1re1DSWzgqCxZB2V8A98oT3aPWdU9GNr1q2HxRfxHcnc9rYgwVQesj6uVMctNWxKE",
  "key11": "3oZWn6XYW1EMMWZqWD9tqoybqQTmuPriLe49oitjxCAWa7WtLEHKNuEPhjiTHp9maewpnWsJhsnQH7yBhNLWuJxU",
  "key12": "2Q7sTcR6vEoedB8zyxoXXvX7ndBJaLV3gCoNvtCLSShnyykmoEVKUaHQb5Mn7iSJwRTRYAbYyAaXuT3PGQYgxApC",
  "key13": "5nSYYDtPscZHQs7GnWgx8wZcA5tNoeFNaXAGHXNXFWzbPAFNvGyAjsB9kyTkD9Zx5xxMesnDMNEmHGoYCii84ph6",
  "key14": "3AzmrxTJwfpYG19hUbWyJDRgkUdUHe5q1nYJaw2pFgChBNDZWaF3wf7uS55fmgsykRShuPXRCCTtVnLCWCZipnFC",
  "key15": "2Qe6ae2ijVnj9ByvvRjdSQxfRPDDMNhubtzijjxEQJ3Munz1qPP5oWfBoHjTQbkdvvbom8ryBKbN7hGcr4s7Ree6",
  "key16": "3wn6kkeVHrbgxM4NXS6e2GsNdGTvYYVAXsnLWsvjc8wpL3eD9Bz9y4ftbtg4y3p4CUyFe8hWrejhzxpPGJ4R9ynW",
  "key17": "3dt43E8MVHF1Nqx7jGKoRNWygSJJaeuKG7HGS16wc5M4upSVaW7QDawsX7NWGh2qjNcQzHMKVbxrtnAvp2QdbgWg",
  "key18": "3xZGTkFX5ETHxXjB4DRQnmqx1o8uCorKtrXHnzDWV99N2kvCEDqG2rq1r92kKEjk5wNV6LSKzYv2T1qYz87mzpti",
  "key19": "5RoK6oh6mmRG2ARmcRc6Mx1BMAc6xyK3LaNcSQFN7svMW2SSxNPSfozJbPetjH2SdfGCbiaj17y4jWSjqX94PDBH",
  "key20": "5RmfeSLS4W98LTZd543pmbAFNbafW9q66hAjoS4fKavCvfDG6B6YniZ6yQrjpasZQxGCNgeZw931j8g79QvMk1oM",
  "key21": "5T7gE45haCzSrimxYZvL4h9Jf4hVEQ44HJgCUdeAhtddVcCBvjnbXsTH8RKnaZcKCXyqyE9nq8hFLZvrHG7S1CLL",
  "key22": "3SBnh8o1mcVh11nEE1WV5tzDCFZGqhc41a8HjgefcY3rtQYe2guWGksLZp4qJBQaMVzH54jhX59SybooySnv7fiT",
  "key23": "4nbRUc3cVDkxy4tK7xp3b1B1aXgnQ69Hywceqt2N7UoPx5P6q2oFYJYhQyK7m2Mgrxg3hsLSAkifEmvmatFxD4Gm",
  "key24": "2DScmyH36VxqTp5xURopmhcDofVqF1X2H5Di6aQ4AJDrdUA8s6sxMeLZk8MTtt7nrNqfS66EutyQv3tsXPEFMH81",
  "key25": "59WpN4Ccpi72i2YSBqCh6CrSv4CLERZ2ya2Rf5HF6b5bMb6WnsUo4Z5gv9jTWZAy6VwRrDh857mqfRPMHwsxKZta"
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
