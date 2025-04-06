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
    "3nbDNxPHstUcXfUMfr8y3GW9xxbBNfvBFBoXUDLh8nWLEhFBWhwyx9XAK4BTyzKYKRj5b7ir4RZF5MGrG1PGQ1wB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AmtNvGMHetEDWzCFELZcBsbZZz572EwDb6ECukLHzT9cwvVvuYeSbueo3ajoUbaPwHePJnNNGLzoxjpz7brCkdW",
  "key1": "5XHoRYB7EY4xSjfxSfwaF6GHhFdBEMiqBBDZnCLFuUX1YAyBihtk93m7hpEo3xg77vTFZcc4Q22XcoGxXEUGoHQc",
  "key2": "2zUfVMd2PrbG3vq1NyJtjbuSMwKKaoo4ZMhp5ZwH4kY8dBwmLi3qXgADFcMhfgMJrvfg44wFZFNrE5BSja5Roqmy",
  "key3": "4cN3j7KpsuvuBp9AxuaJBqdw6Q3vNZxkbURPhK4M8EDFaqbPbu2mX3ge95Ut8DBbpQhfZwMa9Tb4xNnWfC2d1ziG",
  "key4": "ZBMEVkD4quQhAz8X3K2xztgqdCg9H4qteqPsdv1HUVDd1kwipx7kDZfeGqHoN2618MzR3FhXpXvz1N3RWhSvAWH",
  "key5": "5oLjrEfTy2yHBSboGspd1v3uMWH6u5KqkXVmAHjFg8zUzmHjsuA6DZD4J1tF1JUTrwaV6ekkYz4eEjbb2SFwnAzF",
  "key6": "2cLBXymrXu6PUUhqGqShgn3M7bLG1siV5nCCd6vdLZfKyi3PZ1XEKCWzZVg93KrNdDfaPgKa3eL2JoRbXVGucv4d",
  "key7": "3EaHR2t8wvgqo8E3mv983QY3u1qxmssYBsxd1EpVUpQ8PeKaBBhDZqSrDFZqwozQYm6SYkoDrcQqpFxqQQfCTw2B",
  "key8": "5s8CkjtabtRbqUhxU6x8bsybMmVX9oYaWauFifWJ7z6EgE4rH2XDCUantzs4xSfqoyDPZ4S9vbbo8QuC7EahV5LN",
  "key9": "3LDpjyZVHp7D16V1Ay1QdvKqoXCaaiNPRZapymehoLLeU9EsgU9MWiAbHAg11CLduJ1QfS1iKsN1TpotrUZHML5H",
  "key10": "2EaQbn9QvBYRkeKYtMgsCZZ4xcR67res8CLFwesPyodrw8HQU81Ttsx3JGTN86LxXZgh4UiCvbTpMj7Nyk6oM56g",
  "key11": "4Ve3LvYiDcMaLHdoi8Vsq9AA5KSaaiXRgxC4xRgxocRuJg5VegJh1PWgzPu2M3f2wFbFXrQQd88Q58CPwf4WyZs5",
  "key12": "3xXS82Uk1HdgB6kJ3Ud9bT4QH3NeJJZskcKJBcfu7jNvg5zh8bxbXGZH7jPpqoNBuh2CRodj2gfWDMFy1fQ1sfVH",
  "key13": "5Wycv9d4JMKmmn3UgJvdHUJU2H7k7co7THFk1ZXABnzfP96KH7cKyR4Lnqc3Bwj7fYY52qy4G7qw9JfUaBxnSVH9",
  "key14": "5nFRFD8Nkpt2sXkJb3yw5BeGbsvd18qPNESfQhi4LqSxJ6mbAVMuLjqy3taQSxXVZSPD2icE5yjMP6PRUbrPF6qs",
  "key15": "5hQFrYsHaHZkicvUWAqRBtgHuk6GR3WiUcJ1KBQQtXEwhLkbksmmWhVXrekoRNr5Tvn59JWLYdKEjwUExZ1XgBxZ",
  "key16": "4ZP35HDYNPFdsgjFfXtSYuftPS1iZXKVniDk83N2BKvSfDUbr5TbjM2qC1Lc79pFxV8StoyJEokdgE2wRoyow7fG",
  "key17": "48YKJRwBKcKycTGQ3c1C4ERpr4SbTfunbtsCQQkN5rx8JjCWDuMTLS6P71u6pqcXmR4v6icVu1LDY9phJJeH6SiK",
  "key18": "3wtynAw4nm2qHdXy5M51peHHeDqzCczk9ekrtMqSHy7iM5PqwiaatWZ2n9ERR1gLdjueG8qwrawL2M3UfzUAT5PN",
  "key19": "3Y6oQnyzvtuJcsKXChSAFUtjYhXsvcmxyAQr2kLS2wEPoA2upHib8ZBVFrW3LYWMvYaoiXJSnJwRPumU8PU4YomD",
  "key20": "4CcVQjFxx93yog6oAMMFmgvYan9MznKuh9K4XKzLpSWJN1PUna58pi1XEwz2Xn95wK3LxXksbpdjePz16J7W721H",
  "key21": "3TrczedFQDFE8hrvnAcDPGXffWJTG6BKtBw1ES6oaDu3BAmdsEpfq1RSywWaX66xDTy8LgLXwcUjzdUZHH8upmVv",
  "key22": "3fZWFZTseBSVEe6ehxASzc5hfExV1CbULpCAzic2WsCASnFnWaT6oaLekzaT6t98bZeG8nhFK5NZrxf3RPPPzTH7",
  "key23": "TSg7bYZxuD3pT5p7NAfWnPrfBmcucDeTqBArpSK2ZsTVNGq6kihqM9H992a1eah4XjvqivNbiLHEqZiMr9JRK9N",
  "key24": "bJV1Pyjbd8nrb7c4Db7RqSrjZdz44AE64P2Y8RJSd8VgQqwxDN2Kw9QNCPor5NYX9ibJ2e6exwzDxPyJNB2oLaq",
  "key25": "4cd7XR5ZEJZ9gWyL5k4uQhdkpcX6VCHRmvv1Hf9K9b1Tr58tByZUocgH5VkKbfXc9h9gWUhZXP4tFB3BmX7BBALg",
  "key26": "3tDhryA2uHKTLJMH7ELMJpyLrUMDvCWGFymSsvME7FQ6z1t2gyHNsaPunWZSJpPE7FCXPjw3e11EJarcWDrGT5sb",
  "key27": "SK3Gy4jEushjididiy5aGngvdsAPZdB4oqMa452rZYmkfQe9bWq7Tmq6ZPBWoGMrbLSTqvueMj6RsDLMkSiZUZn",
  "key28": "t5DV3d2AJGzmyELdyhXWFR1Dhr6dykSS9qusJyUXLmFKxtrLRGq6N1W2FiqxB6GzVqY3hPjkfEKsmQXMvfDCcQn",
  "key29": "3Qk99VHvkLnRNjXZJPzEPq7zABRTmcYTLXSH1RQavNEiaxrbXCaMaLqqVVLfv7ScmJF4DaDqKPZzeha1biDEYjGP",
  "key30": "4q6aew3PWwYys3QWSm8wHFmetGr56ujHHxpABfCToxUMktgV9RDqtUt6SSipEnA97qFvHYTpr9d2UAJDJ5uGQUqt",
  "key31": "iACEQkaSDYSE23kYa74o3uJjm4zsuxqGAtqi4iLj91fi373XieCqEHVzXGqNiMJaQiwpihRTapVMFwyMCngWDbS",
  "key32": "4UcbExGbZ47hg9sVfukFaAv7enPo9cwj7D5nSSkbX98g1T3kAYwEGntS3vxCDxCY7YdvixNrpFqMuYb62ay8U8Kh",
  "key33": "5Xx4DG4hBbPVUy4wpvwUjco8WDXsVJVgsmwK3ArwYEnS8w6NsMe3W4RitQWpHRcBRtxzR6iwi8H9HsN2TUcXzqZw",
  "key34": "44qJ7tGLSn8WvedviqaUmRefMHpao5ebNH7NjMf1RYYjUjfzfkw3Av4QQgvP92UoQ1KHgQvqGyoLg7McDw5VZ94L",
  "key35": "4ZUXWkchKeiswbS76FWLq2iQmztzaMwVLPRM7JE3m8XXRUexvZiQvyfMguyRnyJioUrNEM4JdqJxLcwxjbjudXsJ",
  "key36": "56Si4hYutvhB8T1TiDXtiLvp1jujHmvxDyAFK2CEebnJDZSDRu4PrF1DkUWrgKmCN75zQkuMVVBjWjE6XtkuPbNh",
  "key37": "8QAMLfaj6Z9Fny4gXAyMKqYiC87KhWoyKhqBkeeRfzJeu36BxfWPQgkGD4iyantyDyD2mHxPUieYaD5ZybeJn63",
  "key38": "FyJGrKeBTmMLBARDXjdKJrAobAuz4pHkNJX1dkfJZGHWB3u5RngTSrM8i966qqeN1nCxVWhyVeECj4gK9PMK3UQ",
  "key39": "nGJtQeqkHzciU4XMuCnTxeuVS6DbFzsRSVQp1oJQhqxbCi5f9HebS4ngEdpJ95n7sbRPBd3LJvqSAXmBEx9xbsM",
  "key40": "2yi8hoGfqUsCM7KmHp966yTTvZs4viBgg8Ez75YKRUVmozdHYeUA4SnyrREipn1VWfhHrUU47aDWjLR9rcecvBJP",
  "key41": "2i2YASiZLSfAp5qB7GQ4xMv5jhy3ND1sHZsTXuLzX2DjAHSmc9AqrtovnCK1PA9tv6gvbaqqtLbruSxBvEijgDAL",
  "key42": "2NBPvuBxkkeXjZBAJr6pYUwVypAVzfPrawZEFjDShHLaGNrRR6mYM7rirESvPNLS8FqHvLEsBRbb7vxLF1Cykwqr",
  "key43": "53K5CdoVV3nfZrT3cmdDm4pxNHe9qhiNHJLJKj7VVzQi1iqq7Dqy117bsKBtFfFV6vuV6NLdi3zvc6Wzu5nQBe61",
  "key44": "dc6wHtQnQivvtYvWML5NbNKKhzv3JtfGGfb9MUfJz2JywQFG2wFYhBrFLxp78C2HgtmUX1YCQ8BjpC1K8Pjkmfb",
  "key45": "4FjJSkXLaUdoxd7Yuu2t72rbAghawmEhBQDBJxPbqLukQNdEEEhMbT3Lh39ViC2kPJeBGjZMYdqwZcksiBTfvn17",
  "key46": "4dPfotP8ZewmEeWxw5AX32tCc8gzGWwXDcWtBS8TEGtJiVRYZ3RN8fZUDwBFPhMveq9RR6XzKvM3hT3nyAyPyRQj",
  "key47": "5DLLx2tbevAmu6GWYuURKYFSdxTh9cWbSEkbqh6pZeRM14JSqRAa3Cibj9aejQjBjS4ob3GYL6iVGug8Qing55kN",
  "key48": "63kuNQcqhURsSmLnVrfkpXUGg3KetfS3o5ji6NBiTSLPbsTgQNt8WWK1LskgVBbdCVcWfNZP46566vmeo1wovFJU"
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
