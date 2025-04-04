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
    "4mFbhGg9Mxi7qrwSQXbbYC5xba3k5BRUgLHa2d2c6fqPSjdQxtsMJDXpHQ5ZiepCtgdf3GeLKTPrDHvrmQHV1Ezm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FpqmGM61wfmScftPcUPo219qJrkYjTpVMkbEdxWz1UWCtQ6EQwGeNM8bKySWLzggR6jdLsKnAmVGEtnNN2Z4gG3",
  "key1": "w2i9RJM8B8hux95b6B4aLSgoqz4yMJwhBqwuFDumGBCzgg7W1mWdG5Ckek3UtWY5DsriSTorukgDcxLQB6SkV9L",
  "key2": "46VH1eG6NGL818Q7JWb345Jbdi3GxqiKaCcA685ux1RSBtsS5eWJSrVEkzFETE8pdPhBrvTsc2Fyc5zGxNRDMqvi",
  "key3": "3nuwHcpQwtu9EF4chc1pTjo9wgspCWTq5Y2Vw2NNtgxNMmBHhjA72JVLX3JPVVUAscWrbZ6nFYSchkpYKe3tEV4n",
  "key4": "4awF5rsh1JcYJbYG1XMzVthX3YCBkXyPRTWoBZmfqJb6cKP89dP4fdv6kSescZ7PuHb72b5LS4micPfpkbhhsWwp",
  "key5": "3FoKbZUhkKaBqsBdWMM2zaZFg3bYdT5uvMa2saeijjq2wgkVqsEiu2HsSWCaUFMg4zFQ5TbgYBCbB8BCVgrtQUns",
  "key6": "znvSChxgyP7ZLaGAM3Gcm4NWP3sNDP6RFw21GJBBiXRrr1beJyxTwf9MGKh69W7TEBxLTH3qEYmn6tC6GeZCKn5",
  "key7": "4myn3NJHJRkHEM7dJ3pxjQvDVg4oowuPAHdirF4QxuvcsP9sQtvQ5hHHuNxzPzqYXLsYHekK2fzfboSqJ1RKUHCw",
  "key8": "nB875g4CsfLnourBkBzJ17Tzy8VBnohspVAtjaFefU6tupeuh77igtj2ub3Xic3X16bSLaYsy8rhpgAGLPek6Hi",
  "key9": "2C2A3gyusG8soYRxDRVPrvvks6xjPvD4Ndpx174Y2ZgTzmv58gE15Tdo1uy8SPLVK7rfwm8V2WH3QbR5zqfsW2Np",
  "key10": "tHhf8Jb1T5sSRu5uFdF4dQfKsz74bgiNhe6XfeBYEQpfbQWQgRyTFsfPXhXcWm54G4YDSRnTGgQ94aw4iLoxXFh",
  "key11": "4qtm9q6iPwMM2edZH9vNRmFZXBUfsub3HALNZjQfnThmKJpQLvXzXJoM5Sv82iRjZRAdUXqS4yTZPNrdF9CGE4qU",
  "key12": "4WXbYQuJ3uNR6YHEK6snvCGZBjB1xKESMmMBCjpv8hyTqkzkCJw2Jgf8piCmYr2DoMFqR36XtY7NnipSLXjRt7DQ",
  "key13": "HQnxin7QSezmAm739RdtzDoFYqa5NuHy6NLxAC4sGouVBgR7pbBt6tUobgV9j4nCoSkKzwsrYvb97t2qar4fUCu",
  "key14": "5tfdKcWEkYsoiH2ZtW72kx6x7MK73iT2pVfKZVDxSx2UyTqRicFkXjKqmhgiCt9j8dBGWNgKhRtdiTKV5jKftGXo",
  "key15": "3Z3wJTacF3i9dndM4GdRcvPghvuiXztof66AFeFZsymxVhDRdz9kpoVbqvZzJuWWbazD6BVht1gSg1YrqWBoBJ3Q",
  "key16": "4KZCJVxvg51JQSuKXBAKQY4ifHwJn1PLLChPC9ZfivoVAatECyHp2szYPdA8uPGFhnYULf9d3QkbtCqbUVjkRqg7",
  "key17": "2ciEJfCNFDRdbKL7rUYk1WSxeb16wDjJHtLXsfAjmrY1QvBEMch9sDnr1jJL3Vbq4Ab1NGtejKGuSYDtDk3gfCtE",
  "key18": "2uqhMEy3g3hpCg54Ey3XVScWQeZjv3RVcvJkZZ94BDLDBvfUcwEdxYdhf46Ph48vVJJkLggTVJRA8fdTfcpP3wet",
  "key19": "3GycmdYegL9fQWbYUvu5qhCLMnJTrrN84SfA94V2Y5yLRbYgGsGkdLkBhpNcK6Hqz5kWCwMCJQ7QKcjg7hj6vcBz",
  "key20": "44V8Z22yb4M65txTNVNvF2bzw53L4KoddvxwAkXozW5ioPm2aEwPfvpmA7Ux6R93W6dJVKeHmSFopeEhB6ipHVSe",
  "key21": "4bRYsWpBMRgiSrKBDdsgT3n3LychWzqu8emXsmm7Tw7SZxSTPW6kotL78uwh8TMkDkJRzb2ge35CsuoVgNjfQan1",
  "key22": "55kpf1tkbjw5mCytUBjJora7uoATSZHztPwe5SUK6ai4JmUe1BxpMotAU4i79SteVvWq5wvGcXG8HSoEuerwqH4H",
  "key23": "5MRqBRBQLqsyJ6JycPif6V73gYzB19Nkq7zYqBBFG48EECGnLftDpMnVg8yHwTwjdP3DSUG3zLvsEj3df2ci3zc9",
  "key24": "2zyNbcmNsoKarnXuriNFKTvpUX11ZHYKMF9mZCpnFYbSjs4Q7qhdfHGMGb8RHBjrDgdmUHtyoSwkvwbNngCYh36g",
  "key25": "4HWjUwNaV1rPUVNi5HT6mCa4xAMuYQLcsWyrXdisVWchnTBmAW3NaoF4fEuP3SWY9pYC8KoDnyfi2anBxCi3vqiu",
  "key26": "SfXuJj6MpS3b1GE1ZzWJPvf8FaLeTBABf3qPagZHC7fbPT5LXR1abcDY2UkzDNSAe4KUezieSafibiiGCjQsGwi",
  "key27": "5z4u7CxArJDxxsUQGXcgox3hnKMQv8MThczjutLtSzrhbBsTTkux8hGtmuaefdRDYZfe5K8D43CqnMb46WpBNu5x",
  "key28": "5NPj8BQBm4GUNg3ek2FDaC13bqFXhfaGNLCs31TfJtKCnDtbymDThiZG2FdtDZ2yhCCpZzjpaJ4XmZUkfaPSAb37",
  "key29": "3bGFpf4Zg41FPFxY7e8a3bUtEtuSJ8kU2SKKSEjG5XAwHeojNWxk5LWXThtex5VBCTdCKb5EyPwePHZBfSR5QguA",
  "key30": "TUXgBZYoHGKjQ4tKoJDbLG8C8J1tGDfhdBMPmnhPYTMedSX1k9UaypGqFeDdGggZ4byVAAfnZemK9ZkeGkiKubt",
  "key31": "2KxYr9VxZtVMvrsz2jXE9UisC2i1NP61izji5ozdEE3KAEDLmQcqdYLPP4aMRDXzDZ9ggjkQotqwNhcYftAW24L1",
  "key32": "tYHnksNJcyKmj6EoWGrs5Ay638zqGRwN7ecQ7Dr9z4xPTmfoCTpSA391MP4Huyfo4Y2vR3ZXg44NA1AZKGkQXwN",
  "key33": "4muTWuUmFnU5WACJeBE6T8CnAeYR4tQCcLtU6D1Gj9vGm6HfCBdEFzdgsfCNCub1dJueDoZ5WaVt7YA7YHHRkZGh",
  "key34": "3R5syi7MR1TFwVjr3FzcLAkM6CzwUGKYWENfkJtFtzBkwxWYKWkV4KeogxE86s9529M88EYa5HdgtUX1PKoET3xX"
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
