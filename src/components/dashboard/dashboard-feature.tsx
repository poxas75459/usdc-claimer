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
    "GFASo15zBfs9DnWzhEUJgPhQUTTtdtQoKPAtrjpQrrcVeBhZM7pg8FXkvQahVty4x6Pqf7QkpHG8zw2ohninrtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fo8wmvDais1w8sFZD39bHMDHnFCGqJvsbL36PyXHhoV7A7HwQ39jYSws33iwpr9td2gWejYCpFhW8K7PYqJN5u",
  "key1": "4hzvGhQEXCoxPXS3bBGzap5EsdZV8NAbS8ANVdn4jrjBeu1PBcu7LwnwLhLHL1dZcrcH2sWMVYbXcKkV8qFa9CgT",
  "key2": "saF6gXbfg8PkqcRo3sMdTidFmoivoFZLgVS48RZCp13fLD27zCCQ8dqhM2TfcehmuxJWUdXziPEwSGbnaGHLV6p",
  "key3": "XQucVT8xXo8YDWF9GcTCzsgBEV7ZB2rcDjBGzxPZ6PUPMCWkdZDBJFrKPACoxDUH134DUfM3kyWjiWNokgiaYL1",
  "key4": "5RQ14drfHTg7hNvBSJmJBURSjgUPS5ZgmUjNC6TnDGNNmjfjLRZNBDih1y2MxHYZQgDS5eXB2uHF5NAW2sw84NYo",
  "key5": "5AuSF9XaaxuBWLUbCzEzeGzmXC8m43D6hQb8HhQA16mQiZAE934UV5qTReB9Xrbu7hT7ecuDSrcUS8dMkFjC2M9N",
  "key6": "3NaYhmAPqbkdWH9Ejvqh2zz8rKzZCjAQsqVdh8zZUMrEAAzdKe2KhdDBMAyYwpCY4h6jE2DxsLpFbhEzF2vxowxS",
  "key7": "5PhQy7gjogCK4iKMN8KiMxGhzXjaxEaDZnSjzeMcZPKBwGBfVGymsC1tqD9tiYiMmooPfKkGe4QW4VSzEmCsdxAM",
  "key8": "gyGKzj3TB1UEQp8KKxsLDQQwnEaZz3MgAgXpKY5KcfdAFcxV4iRyUN6uf9bMq7rW8hLGvbW3E5ARGEQt8t55QgE",
  "key9": "Q4Z1ZCsjhoS8EP6btSEGmqAy64MqaqN6fqhKLqUzWMyHggspBFoJdBE6yF7wRhDE1dvQiHqz1c4gdU79isdQhK7",
  "key10": "5XGhmSZL3eTzDaQ36G19ePsiYF9YRzeT55u2Us6oynBiafQ5Eg9vMGM4T1k5AfmMqeuyctgd7HuX18RcGNK3VZaU",
  "key11": "22ERWK5NGRru5wCWeWSBpYpzRVes2jcoCrjSRqyd4wW3Gq5eQ8hqmvV5AYBWyydjCJq46TSp7pP7g4kxbkzALQoV",
  "key12": "5AkjdkuB6EgUhEPKdC2uEaUBrxvuc89oFxLabHgczHvpTAq1KeBw8BQ8BXkePDvDGQVb4tD3c4EpZnzwQHZLSren",
  "key13": "2qfKAg4j8Ld89YtDBwXWDTTEh47cFmu3Noc7BVyumLKsGMVwViry5i4Jfr8YuZP28WgrwPyFB518ZFmEBPWbFCwc",
  "key14": "583C9zLGTJ9cBYyY2nMRoc2V55sznq9oyExYCoNA3CDv54HQKA9n4zebfrLxt3rx2VvaQmayefNvSRZLQhq5LrpS",
  "key15": "54SaZZRq4kKhi7jfZUo5WKA5w6rQVMfaBTHZqFxC7ECahhc1Ekn7719dK83jkeJog3GkhirK4pmKGx83MwJpm7y1",
  "key16": "4r3scv7mfeGS2WaVPSheW1AWmjMApHknZYuRexh9ZUSfDKV8rCLjEHLhVk3PprkcnTNcd5A5tVchwQ5LfinbKwK7",
  "key17": "3NgnEKzeJgFxRNS9uYyH6gFQGUtTU2TMYKHXhs8FCFb4isLGxsLjqNfPsy2nD88sfqRwHQccgyZ4kziXkGZCFQX",
  "key18": "5fqsTDQNgS7TG4HjmBumVEEBtVrjT3rsMwHWYCxs5PgygRVtV4NotE6UVE2MKxP8LqhxjASft1ejUexcvSxHb1ST",
  "key19": "3YSHE891jkMfWEMu3tYbAbsB5cPvf1mAAhMSRg14vY4AeG2VzhzW7SdFwx887hXK9u747sjeUxcAQoioVPVYfrd2",
  "key20": "2VdhGS1xw1kBgFpGDmYqpQix2drfXxDFJMxeacTNTnQscPKoKYPaxnVcaPxgkJiUcHno23SfazvoLnrTPayATyjM",
  "key21": "5fdahX5NErQ79BuiBna3WZ86iwcvpYNB42rmtDhk4cMCGUgdgUfxyqKMBbwCZRuVfaWaTUsZnSZEZ2korxE9jVHU",
  "key22": "3JU6NnVffydWPv1zA7QRpEfBToYpiMYgYBmy5NTcCXmprxYdgNTLphbwY9hkQvjXAHM7944zUYnYowu9QKB1bhWe",
  "key23": "36giPaExjhDyQ7YMfmWfSPVBhezXMXcoMC6mHHwhHiEKbSjxZSJLgyHzhATaxVxeUZbYDp5ofEfMcXtPkxpfi1Nj",
  "key24": "2JBRwtwgXbFu8ZEi4byM942nQf3GV8RPLBqRsGvsCPNGfgJSLViApvv5Ey6pLihE5C9R3a6DzfCz8Nh6jz3vyxCK",
  "key25": "31ANyHRUmcDqk9FsL3aFD4Kn7zjs6iX5JXFqfoDD5EvsjDjgdDfL5rTvRkywxK53VCnyt9K39uZiEvgZNo7SNXq3",
  "key26": "3WJchhezvEDBFzAFwztXCKwa9NkpP7iz1XhFsn89aGJ3Yked6Tu8D2YUF9PDZLH6B9yfbhGxxzzsFXuAvwgo978v",
  "key27": "4cTqw2caYjMUTLhQuw7P29uEUMvWpCZkMd3ysJXy5mqgdCxKhvjQY83Rt6uybnVDXak3khS1zA2yxa2VB5upFqeo",
  "key28": "5PDLjP8iGibCj4WWdK1MrfBkRxTeQb9KzDtkB2MfBZpgqPwPHN17UJHexf6wpLnJGZya6zJ1xu56WZoLePoUnTqf",
  "key29": "WpU7i9WpG3meBfQDR13CzPJCkVLdkq6MkkGtn3Hw1GZGwXGsy4hT7X6CA8JqaQchREyMosYCSRzvp2zuQy9Krdn",
  "key30": "3rw3s64LFfyRbbUBrtkJ3P7Da9efMxWFnRJXbKhYtwq5eaqwQ2JYZ8ScyKXANyGgz7BpkddarxmRDiJNwKMwjfDi",
  "key31": "3FTwcZzQRDxTDjrbQe4jCEkgCNx8J7w8Dyj7mhVGx7SzxCEQDarRvZcacfGWWUJ4iPZ5cxPTUjdmwGvgrdsvmYBv",
  "key32": "4nN9EeNzBxenRHyZa4ZQzRpKgTHhAZ1DVyS5GkpFrLJGeBXq9Pjb3Vrx9DRkQKBb7DD41Yf7mwxxrzeTupmdijf4",
  "key33": "2MG44iZ1GbLRqQCqpkjjaAK8YAdyAEGY9kPz9aY43t99bd1yYphm3EqihacjzRQtvkJBk7gdF4dFLLHoCs9jAtJK",
  "key34": "4KLwGCRxiggnibe3iTgAFpNtDVBT7TRpMqP6Nt4LNkRU3pokka6VYM4GkDpHSLvRE4Qm9Lu2qtx8HJ32VfrNxjrU",
  "key35": "45vfGkwimbHXs7r2N5MCVamGu9WEbno2ef1wR3wmnVrymnhz9VFzNeHecsNG1fAroMJnhFoAYCkBDKXMTXkdWWR3",
  "key36": "2JF2xjnEQ5b1hr9it1DqCXMHwt1DgEEpw4xd67vDozu3h1wpoNtCRexDwuRySv7Y4h6jdvkJBqh5xPaXcyyfx4is",
  "key37": "5dmirxgR1LqF7JGWWCdSBCjLK8zTBNGg9p8Y7U5Ljod6ECm26x131XvYtKKkWrCaS1es2VgjQc7A6LkkdMZDaUFg",
  "key38": "5TQDjrwPTTkPa53wPE69wLc4JdzgkZdLufYhYkiCbUUpY36atnY2myE6Kh3ojjs9GHQv9MypaRCCXz5Crtk8sVYf",
  "key39": "5kLy5LyFuKrpmo7BozCJ78Ni1B7PRtGYfYiQ6eYkDpNcSykCrDeLh8jzHeNndrAdULwBk5cr9RKEAXGf5Qpji2X5"
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
