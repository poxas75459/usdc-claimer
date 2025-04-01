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
    "5xHccgFbfFXDtuZEP5TCZzEgsUbV5GuksUZik5xr1tWEtZbj3EF288psGazNrSgrPbW9yDZ9AEet6VWbrMHp65Z2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pt68utuGP1j4nuQftNyURo3fLJp3izFcxzJyRjq7AGEcNEASp8S1ZB5TBycr7Br9uj43DvPUc3atE178oYLwnW9",
  "key1": "5ZGRgnKsN2EbU1KmS6ujfSCncXChLtPUoG9meQ5GkRNdxM6mrLcK1ACegVLdw7whPaMLK5r7aPg9PCmuY151nsd3",
  "key2": "4mjsysAt4V1oGAYtwdtE8fTTsETAsALXhdv66ud2v9AxdYeNieHuyJRYioJqJccwubRtb7Dy53DaU2aL92kutorA",
  "key3": "J3bDucvxdn7NyNECLoDUzQHGUGgSnBCEdTV4DEMHa8LARAnMhJytevcX7sdMYcWenQrbfuoPwYYoScnfhXLMRQp",
  "key4": "3FY5REp16s18RbxngvSTteYQNZedScux9wVKc1tLQtSzu5c1V33mNQJE6U5K4poY3AZjiQn9FAArqqudgDQzupP6",
  "key5": "2kQbhGi5riVcx8R212N1B66HwrK37VYHiLUCRjGpVt2FaoGxi3RzwhkUZDkcj9RW8CCEspNCrt1YzzTNw11krgZt",
  "key6": "4HKY2rX7nmudrDeEd1Ui3WzAospF6bDNLkySkMTJNrd4TyxZAMVMm8wYP5fU8Pwe9d1McBGSiGCjrLgURR4nopDQ",
  "key7": "RRsa7q45huR8DFXJ6FgFsc2sGP5JK9igLshKNVJY9gkN5WFSpKsfKuDYWgF1MVRvWsQne93h5gd6XG4qeAMVGB5",
  "key8": "4vH26ugbLs8USqoW58KrTinEB76urmchp4ozx1Mveaxu4dBUWd31dFuroG12nEXePxxJuvSGk1BFfzG1rUGWTtmh",
  "key9": "3tjzkcnXsdPA5PjXSF5uauysYo19VBMKQLtY19qoA8CEHf4JHApm2yrSFoNXwR9riR3mWzY85aKoQLMW5cmianiQ",
  "key10": "2P7jWA8hzRg1XyU7SVNbZYYdEeGfQBhFSN634eEPzLXVsEXDKxb5sCDxDg49WVtCqnJCA9SKKFGM7LhR3FQSFV5U",
  "key11": "5Pq4xNu5jY5J2xgzJ8d5gVdJPkgFjHuagPpck3TeFgkrXhokbRfEpdRuxuPaWsCaDHoAEsgHWXBJ1zvjZYNbpRtD",
  "key12": "22pA6MBLEUwDB23KBNStcgvQLbDiVStN9WgAixBMMdSBDdrSqkPDeB4yUedaqkRpcG7sBXRUcEa3MXpoxAkDbPxP",
  "key13": "3UXEg7cj4QnrNx5Hjp6wGkFjLYjoA8RixHGhxTLorxMtuu9YKqngqSw63ksfuF583wAiLhHv5BxnHK4H53t6maRJ",
  "key14": "37wXYnmAcHCDt7GQgdXvVNkcbe9HmzojoqRscScovq3WKWchWvwrcAEjSgefUg5gy6m8Qx3ZNNxEzY5D2d5xeN7S",
  "key15": "2EKPy4pewK3UjHs3uRVpGGBhhChXg9v4MNDcrRc27a4ExspJ9yyf8117RPrwUFFu4mGiUmTc5tDHnUQXF74mqW5w",
  "key16": "4Uqf2hu8Epcd6aKn5THfC6DHyeWomyGHo6S1LTyoRGR7cAji63unFKTVm9FjSeWUEf9PFskopnrSkW1dVVBJDYyh",
  "key17": "3azqvCXVgFyq8zhn1am3QE17tSqwGSQAGsaztFdzTb1ZJW3h8XdabSMuJsg7QiRSTVhRvTyosUPHyqRZoCfC2kpr",
  "key18": "ou79cU6dCKfa28opLtgf2UnckyD1z5Y88DB3PJWYDe61WgjQRw1Y6V5ybZ9mgXfX45vJWLSvF3p31o5ZKtC9m3C",
  "key19": "33m7Pwfeo9mHqNCdNzVYPZxmqgEusXYfKLPeDJoLWNegvGJnmKQdVAKak7LQZSnzDtpX5LfGrY66XM3at8B7TUKh",
  "key20": "4kmFN6G2suYExRpjE99ridHoMpvgzsf8UFaKSf6zkxofwB8r28sr4dJyBkRHjsbPk5Ce2c4rW6yVzLqdoDEYPYtc",
  "key21": "4aBzFXDocdyHoWTdTDR6WCy4eZq1TZ1bUwJGZSV7ZXGuWdNJJNEDjn2LYdQdd5sKjoUY6wNP9zKZ5BMPnyX8vDCK",
  "key22": "4HsNjoZ5GekpSWVSeRMbKkhkcMYWsS3jp6qPhkJybQ4CXAxBekpLZ5Nt4JC1iEFqMrnZiEmupQcDUizpityMFuwG",
  "key23": "Lfc1uQMvkgj7tn5QjBDFdLubJmsB2FVGyB8rz7CmmPwXYfrrLtxUE4pgUbjoJVt3ffFtLy4CKxNzKcQkufGmjfH",
  "key24": "2maS1HySVyoNeqAqxgSbGSEkYgXBxdJ78M791QhURv8FJsnadi3qVSvkLRrtxF6Af84ADYJuqkaHBigqyt99fyE1",
  "key25": "5mR4m7Wza19hpCtFjzmDX7g4BCnZTZfEJMuBLCMEHhLB7F46qZVh7p4ex8pNbx5fJT6DXVEXnUefYnaj6dVWE6fS",
  "key26": "wt3d7CPcxqdsVGftDZdZvFk83RsS5fU7kdFh7rnzrQAFKpEXi9Ji9huiq2SKqumpDo24TbfG79ku6tY6s4BnUrq",
  "key27": "2qHn2Z7yHyBiXMYzcnLNAPzBZrY145id2PaWP9RqSDgZLYtRWTDyXW7vtvnqw9h9u5NL16iRXy8oWjWKueoLJLvQ",
  "key28": "2EuBAFWB7dfJJ13mGtg53tyifPsK9oeAirSBRk2KGbpUbpzsGWngdn39EDQRbJBLuM2YcUARoHRuQwuSmfMv5tcT"
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
