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
    "UN3RqNM3xxaGCVjaH8tT6rMUkWhMoj1AqTBtPUnDLkjCwxEYkhTHD4MJS3xEMLpBBkiA77BpfwKWpE9Z2D4FUaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rd4fC664NUvzpbUds1w22Q7Kbea6sG8Q9RDJ9PSqTQBjoPAV2Lihihs8HSDw76A1aFHY3jh8mWHg6o3wkdCuMHy",
  "key1": "LEZiswbmkyna8aXtzU8jAD1GCyQpcDQk8zdW5jmro7nppFUrmnLMtLAV9uW8xjmy877tN7yvBzWk8ve5jjXnhJz",
  "key2": "kYePHSdFoV947iYfwAY949eBo6YouYSdxqqJTP9D8bGnaJpd46aSqnisK1H91S2b8S7ywJWHbUKFe6jiJuhaGMC",
  "key3": "2sBP9CdNn6wGwuoLnKziH2zchiQdpEUuMA8ymkNSGxsJRBqSeroVmuwjXhryXvHuz9u7tm8t4XQrhCWPybUsHoBq",
  "key4": "5J61pR3wW1aG1vM5MMyRZoJbcsUU4MUQovLrEtAPCv5rVamDxg7ebcKgUrKEc3pcfHrBVBv3oMjYCWyCyGndQRfh",
  "key5": "52jaQYznLNYCm4XYGxeZaWcY4VT5WjpmmvhnG64ffMcdkbN9UgDNJeMK9cfdpTUBngLpQRm2ezAnTwVvu7DtfWEj",
  "key6": "5aHGwTiE8AbsRg7XzYegj5rrYDobTQSthG8gJrjtp6Hc665vfNiEXRvNck33CszikjZob8B9FxWbXT74D1g7tcQr",
  "key7": "mkF3zc8V4MxXnXMBxaKanWRFFf4RV2ZF1HyaZdKTq9LpdTJnFBgd2gYLpVJUxZEzohcakQCf7j8oguT3D2pLR6V",
  "key8": "J95FH9RTs1LvkqadGWnDvd46js2oSxCZMue1xcQhh2NzhmjYERxUsoUVzcKdzWVFH2UxQ822gv3PXf8AYpDigMA",
  "key9": "2kQPdsJ8XWdtb31HJVcUsPr5g6p6KTy1WVHrskCkgy5dpowRrJCocB2Jpms7RChLj8FU1rQ81pUBvSQtDtLM463b",
  "key10": "EXDy6RJ2qZj7z53JRQ8pDgGHRj2UBGBs4pE7DHpL7WSLDFErTQFXckooQGU57XNUndphiW5vhaURYQ4e4f2W2Ri",
  "key11": "2Qegt8TXCqg1r7Ps5FPPY5EsNhdSjHufD3Xbh3AsZaoMs1zoHiVMmpDWjHNTHFT85aAFrGizW4UvpeUbjtmDVx5T",
  "key12": "2vqkoqXNY4zobZQr1WcwC2aJb9PC6J55rng9wQpi3ozNxrUyc9kKqsJ7mAv5vkKPBiXqtpu8q7FVHiVjnTT1WQFZ",
  "key13": "am5KxS5GN4fr58v8WXwoycNN1BGpd8sET87TYRzaRsBGewXL9jqsgzf2zyqxJsmM1CmFrWvXAdxzHknVYVQGgq5",
  "key14": "4mqmLBr1FASwhpkK9fCxR7dDbo7xxLkYE57AjWuyfMDiAS52nYrf3TukQQSHDCnTW9deAH9pe3ErPY8z558Unh9R",
  "key15": "2cUsEu424xKME1PQ6z7zDbhA8JkGpSqiyD8Axk8jtoBaVq7SETe1vAG6ts9HJXog6f6hGXeddpzwmhWTVMEm1xrM",
  "key16": "3KFa6Q1Ctcwcrhk1Lb31xqTwZGmhUiT1nsZ2WG5Z85xk5x6nmT48Zkx8SRAdADQo13bFemt3A5XoQyWtUUxMyRgf",
  "key17": "srWxUouX3CGkwv6FUUYZKGd2wzdxn2yGpKhv5Nhg4zpPv7vWEhPzXj1nFoV9XRSfZEtgXUM2HaPF2Qa1bErzb2D",
  "key18": "3uQGmXsbu4SZGCmuopHaSaXHTiwjUDfDnqDBubR6x1jNWusTDoMBKkqw5ZdryZwW9nspD5pkd1Vw9jALPVESc3da",
  "key19": "3NJDxp47npaoEG7oovWvoqhanSjsExpww5dzrccF5qhGAdmEbfWnUCH3acZcXUJpSd4TbSE3Gm6dkZeQtd9tyiFY",
  "key20": "5SLPDPapTetuF4QSefY4Zuaei5eBHtdwYhVUuvaPRYAGwRsrCvfhtZS1Yki3oidnteQPtw8fQNu7VuSZH5CvHKxM",
  "key21": "R9h8ML86wd6yqUJp5huvzJZRbJ99PzyF25zpZDoBbriTcTMxkya5vnoJ5N7TmwXzH5x8oTKjZk5MsxF6jRjFqvX",
  "key22": "3Xj7nhtyX9v3JWcdjGKLFnsbqigD4fPGkjYkY7xYnuyMJgKSefi3ypuKWq8DsVdHvTA3HX7jGHKh9o1prPXuW3jm",
  "key23": "56jPLhTmsQEYHzZMVTG6syz5naPshMCBD9ukWVPeRK5zqrs5suyjfFjC4NDCAsJZsQhSBKadk3zNxdu3wuu2YwTM",
  "key24": "5PAHfcBsX8sku7nnbnwyquX844FeJLQZupKaeqWuuATHJhpwV7ES5gb8zLPHhSYy7h4d8ZfCqBFcH6R9pCCuCHaD",
  "key25": "5ExAREYJweVhREVWaSTHHhbEMq1FAbgU2FnapTiPyURmBELGLiWwKSZJTsn2sGwC3jsaVTvSYhdfwYopcy6e82AD",
  "key26": "57FsrosbaPFzYmdSikx8QdZ5uvcoHNKZQbfpcjM3U64UsStwKVrRE4ooLepzxjKSa1HFs386Q2kEhn59FWLrYim3",
  "key27": "3T6KJWY8iNp3MZvunJ4tPJEoZ1WA6UVyq7gx42fEYs87nCp8VEFe7a76FEp7VPBE1TWxKtb9KWUStrgvWnpHPzon",
  "key28": "RrpX5YQ8EvFiLgz896KA5qLMnYvaKBayXLhRMDEkoLYE1i1diJEtGrV5VmN6S1haCky4xpmQTYJHdQwAM8nqKPw",
  "key29": "3szVXeCZEGBcSXnuQdMCaXZVAYEHk6bAzUAkL5XbmAWSPKUNYScqmpy3LA3Zx5xGriL5GqhbSAK2KBTFBpXMuqrc",
  "key30": "5WZbraD6iAvb9c9Syfzgiv6v2bAWFnRH5fbFXqSNGCm1zoP1tPVZ9an7wXUUxmnxu9nDpKRH8xZnnTYTrB2HjScj",
  "key31": "5ef7fR9C7CKTffYbZiaUAMfcCe5SXMR6jo8w1cFup9MKhkJ5PxGiV5p2bM4TvpjwFGHiKrReyBYHYPnGmsXPszYX",
  "key32": "3BPCXRCmkp21azxJ1in5wjtEDcVkgG9he3r4UfgGj43kwTkiaBSGjAZF86NVbj37nVWNib2rsJYRa9QhRkefEFAC",
  "key33": "5wCPmJ6vZGey1yEbf1WKmvdRSkoq2Bj2h6xtPf9Fvtv19xNbe1SM4KJJJZQ1m6Ztppn818XwsPjqR1VwqRnynAjU",
  "key34": "XLjkZxSdjXT6qA2PJtPxzaJ9N1JzEVaR2jgSStk83VxNdTuS9h5bJtRa29EUqRPq9GkVcBvU9wkbEE8jKWrB2Jj",
  "key35": "bqgwHTJkfs3eGZ9w7h3v6PB9hSVt8pr2uTjmHjambYuUTmJaVrFKySmEBDDq9ebdogy4ywxfTwVL3KVD2umHMCz",
  "key36": "3FCvny25ayYNAXEUK5SNWEscZU2vtutZ9x6pNSG3Ra4iHxRHL6MeBJxzVnn1xxYNWSg7aNJ5dj8WiEPggMpLSMZA",
  "key37": "4d3K1U9A4r4STAZdbBnYPRZxTaucajAF893MfWvwBCH4SMaac4yVo2WqimNhV2Qcfcn1aCXJXgb2FzvGzZLHuGHh",
  "key38": "5uV3VsG2SCTNekx5RZJw7LNJwoCnTLbkszsGnzb3JvX9KC43YQzRq22iAgBQFpLNE44KANHv7q3FBKrtvWb4dWt2",
  "key39": "3XrXoJfbmmJQQ2snKzfWBd5ynkXgLQXqGJfvuKL6GuRvAYybvAPZFfg47Z5wKqRVNhqmRXB71UL5wvpQ2vzfs94H",
  "key40": "62RapQDATM7nKBAeupKp2BsyCUnTHmJw5L5YRLJUhcFUiTFJpPBd9L65iStpbyEPTN2Pnmq6uRgUBWj1akEHBXjB"
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
