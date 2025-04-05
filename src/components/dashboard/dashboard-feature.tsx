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
    "4AMhC1VAKcmyKgfZ4ddtkyYy12GH1d7ci4C1e1GVdntNJx5mwnCvPmDk4d6cPJXbVR9JgitENzUGeVARUFHHsdhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52PLNkhUUXSzMj4xufm4viLpWo2H7zrbVYaT7VZqo5DfnzbZDJQPzZNjEk9kzmRG3CcvgVbJMjnXJ2K7tk17Aarj",
  "key1": "28tpbnRPXKn1xi6Nhu98WGjrp66eYAZoe9TKWXKogJp5ew23JKXekcyKizswDp1M55sHuz9DQkZdygodzq31Ld2i",
  "key2": "2nUScWxZHhXSW7njQM4NGPa5pZcKSuQR9Ka1e2ZWw31yQ8BbRi6huVQBcrHRN1Fxxs24PEHz8px75p9x35cxZ24E",
  "key3": "4w9vpYKBY6wYE6r8NeUvoX4pH1Hmuet7KdgBrxVUF4ZKmoz53ZDLhJZKSuFG1gEPnJgrWUm6qm8Cgmd8WPh8enEk",
  "key4": "ufJ7TWzrY2Spctiza5y7jGAnVuVGi3QnquLy4SyLEWB3saaS6oubCCw7efwZ23TUyyYPstziXkdVLUb7hw6bnZE",
  "key5": "Z23tounbYohYNVUGUBPmdiqEKjEn1GTmqL2a1Rchbgxz7A7rnb78zDT5bLj3ezg5TWcyKmL1M8jsBm35eYJkHTy",
  "key6": "46YJJvmzcwStJPwuongCVWXchc9RTCFuyrfrrfwqVwj7pexRQ71dFwQx4iDt1eXD9KWPDdNY8uct1SjKE2z58rjU",
  "key7": "4XfwJMVNiF5T8nSocwm2AWUN7saZemYM5wuVLWsTSoKmJP89yngbSfpzNZAtD6TzAhX3b3ktLWfDY6VX794e4DvT",
  "key8": "3e5wdbfHFwxJU9L37hYofYA5FDqkBznxGLVhUJqF4dRNZ7neXCYMHDKpdww7ShQsiUHAdjRWWEcNmRCcssyPEgf2",
  "key9": "4yX62hd7zey38gPraeMCAfAER1pGrunTY1s6vrDDJKU9Kdh5sujVJf8pSULQJAwdy7AJd1QiQTY4YEynVQwWv58D",
  "key10": "2N2HmqoeEPUD1MgDRv1iQEUJRbBF8YiX1oW1oPeiYtXi5Xv38SimFMqcjfxAoW35NdGxaeETQA7xDe3QKkThhKFy",
  "key11": "5g5NaQwQfZTuN1oiE6nxYGcZjhcME4K9ySQiVohWgdxchTZJDtSoEcfJvUXGe68yMyx22WhkNP7LDTAaK4Me5pAL",
  "key12": "EuouMbws29eEAMNL7ABreUgFS79RRS7JGHD9qy35NTP9bg9MBw7CNRpWYxkE1h8298FMmXXw3sqbwAY1at5eQGK",
  "key13": "4bu534fkeHrFX3oU27VJRYAvL79wGtiwoeKTguJ9ATDomhXuUjteGgZoJ5KS7DgATmyM5uSgRkUpyG4AMiMGKSL9",
  "key14": "2PtPkkV92a2bbm6fFbrKLFUuJKgmT2rd5FT5UhhxtU828umWe7APs4SmGkoQ7jS2fmL93W1PQT7M1DftC8QsZVrJ",
  "key15": "49xiAYP27RZ22d2mrQjiycScYiA37SsNNFsm4huz2oYpabaCP2Ew12crhzq6daPmaAmhSavGEFJPjGct5krSsbE8",
  "key16": "h7Fdtqegm6UsMQvGqLMnZ1zpi3PV2jAZhAmg6xtdbWzLo6KpwPWdgEe7eqjzGDMEfm7334Unyw6UQp3PyKYcc64",
  "key17": "2nZtv3767UQufLewSeeSgKhv9sD26Wtrp7CSoYeDQPTZ34dDgw91KqtvtEBDCC399oZyV4W8UfdnJUNbk5rQ3d5w",
  "key18": "5VTNgtaSXgdWcYF5pvCkfGy1YjmKvKTVAwnNaamKV2Tr7Q9PPShez4Ujef56TNivSov2xenKfcfCqKcDfLGNcWQ6",
  "key19": "4C34ANWd11TB9G2bkrHpyy243kdPS4joFmryaPTLvKq1gAbG3GLbB1a9nzZLm41JLcTjaUiFYqthxUJk8HPC1sC4",
  "key20": "21P6XCxnyX7JcAUyVZdz3hjbYonZ5PPG6Vp7L6gr87xpvkT8uzuNWQ1vnvLcCE7ukv8Ar1Upoj3d5eT9AkjUXmPj",
  "key21": "3CudfMGBKyQppPvGqbPKvYDKbjhBPyed1aQ7ERHwtyzka9JkdaxAkfEXsGSbKSWGCC9Dc5Um6chbcGDN3fyFgHja",
  "key22": "4mKySD9YbGrHsFgATM91J86DgZ9DBWmonxyZNkKSoc2jgBvD6Dhwn2ZztqXvz2rYtGh6c26qDCJyR3bbv77qLKFt",
  "key23": "GbUZsfbhv9hbZmddckPzr5C6ixD6yMMhY7rEfnksQzwCxrbff9pJkUFsf3NftTNacYHKN8GPFyr1WSRNiY7QARX",
  "key24": "3CW3UGyKrNtnFhGsdg1EGaXmYMUkDy3NSXYco8BW9qS822hueNQQ4M8TXbS35uDKZNKvC2ZPrdr4qksiPnF483Y5",
  "key25": "2xJvZHpdkqTvQqxSDwD7TUSNxQQu9uGcasTxp8s7Q1VxQ2Praf6YNme5kLpxJ2SasQehWpCNxmYDFoDaiEQ3QPur",
  "key26": "3THbAoa8BDG9Qt8TjQGDsEjfsauFVV8MjDZwaxiZTQWuy7v7PFHaXzaeXTZBoxJbwacNEZrvLNBx8gBqExM9KeZu",
  "key27": "4JcsQNLjV5SdfMWpR3JtkJoAWtFfjyUT2JRDh4FQ2foJgrCVhnrAcJrQJGYFD2TytyjoYQZ8snVir4wvYpHjSo8o",
  "key28": "2AqaDyS56EsjC3N8QZRrWNi1dcpzeABFh3EFFomS551jjhy8neFwg8KUiyGFmE5GKecCUvb8PQaVTT6B7X53kwhr",
  "key29": "3FEmmt3Q3zf327HrfFwE3hVfGZ1VeBz4dTRB1V8fseHPicUkhxACSj3TaP8Qshc6fYVrzWtN5ytpWN5tKmNUzPG4",
  "key30": "4qmZbSuKtQcMmsX7WnPyw1L9hS3ZZ3UkEByPfZ2isgFWjDEyEaWwqRaE3CZrT6NUaJdAsXGd1e8zXaajStLViz2T"
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
