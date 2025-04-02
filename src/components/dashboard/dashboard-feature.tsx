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
    "4Se1kxxkYyAzSvmb9xiDkCenMSRSBZvv8yk1B7PN9bxtkrLha9z15PCx4p5PJQGepj1bfzADtGSHUBeTfRaDZYDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NVyGkQ2YGZWSPj4Hgu8mLYq5499ybewkEobSba7s5h81GNo9gHXG6LHxR7p3HYpZYocCk6bkM4HGoNBGnMX5xeF",
  "key1": "3Gh7onuqqjRwUbMkax5EaxRUz6QGd2rrJWVgb1Kp7zR4PmJLYTQkgcKeFvFwV1uVCMeMaV8Gv8CdoEpAXyxWRLzU",
  "key2": "jb27u9YaaYmceuyudrg5FNgYCT7hbGUnb7P5BuV1Cjwt9CDL2UzmaZpq5K6LvaKSyae9g6cS8kbB25Psgp2XNMh",
  "key3": "38UF69Cr39woaSUZDFFiHQ7WzqjSirdWBA1yA58jxP4TTyeTuCe7H9C9PDW1YM8PPxFH48PmPuW4F3LiyXJCcEah",
  "key4": "2PKmQ5UbqAxGbMsCLBSzjAU2SeQwpABCCGAW1ndaWG63vz3f2qNNEJ79xCGwAzGtmvENtuw27MmzBeTpPH9Gq59R",
  "key5": "4Ec1E3CewpvxLHujpBMpthV9pzuY1EMxEvsf5ueJ6qA1ZZbxdaZNisrHG9FtwnCYLy2sd5qsMNzzWnqsJSPeEfNY",
  "key6": "33Ndq4yNrShzhRRPExeGTmZSeKWkSsnCVdG9h1DsWDD9SNHbYP8goeHKQNTi9u1BmJYyJCZsSEtLfYnBTgq6cL71",
  "key7": "4v76AXuLqRHNQY42C7p7GQmNVVSxDnEcb3fhEkviiFM44xwkSk2WizzEcncabL3rGmfeQaYvrszGx8aTDL2X7xAX",
  "key8": "jFKgRAvRdzs8syoPoWKqPJcwwPEe7uGJ1JH2B9Zs1a3otBXsMjewV9edBRPM6jVMgBnShCBivFv8pxTbQWQcpeb",
  "key9": "237nrkfcd9t8qHo3WvHNAh47QvkpuZCt9c6jrY3tsymxZdb8f4uWvUY5AsMBx1krxj2hjexng2sWTnS7M8yHEftF",
  "key10": "4QTka5LSktqvJksfog7M2MyvBTV3DKcmTKriJTv4ZJzwUS88Pj6U3Ad4DHgXnzvgvdX8DdbzZscBdv7StpmJe9tU",
  "key11": "4bXL92ngw1QAe1iVt3Vph5tsstkvKNpc1mKZV2n88sfaSSx6euh41LCofUvrgQMhb2E8yp8jQw1vQAG7pX5CEnxy",
  "key12": "2wfQTpqu8Ks4Grq2ckjqSaeNKaMqQnoexUvd1it6whSVNjWExfGWjtX4UHJLmoYoYX1HtxVjqPJ8BV2UQ4B2oDtS",
  "key13": "3x56b6fnw7gUHNh1NmHWMbEzRws3nkqqpM4wXfLqSjDKTm5TCwstLuJCWZoJD9f6XdWYzM2WodsRcLUbbMRA8Sfj",
  "key14": "2Z4ovy4HBSubgSuMMuKQd4bJbFPoGAtxKnY29sR4HvVSG92h4PAEP7emw48t1qRGw2hGK39z3JCuu5Z4XWxFXeeT",
  "key15": "5arp2PH54ShG5QVrV92gkpsPmR6sfQmBcQd8EHvwVvBVUabKL25FXsXSLZz9pM6NNx16uDR5xXAC2DVzfgBjkmFj",
  "key16": "3s4PCpEADJiZW9CX49NRgwMeWt2TRd4b3RX7t73LGL7sJxjX3AZ74ZmaJX3uRnnCAzUpd2ACyPtt8LA5VaA3nVgz",
  "key17": "cDiNY41fZxa2gU6Bp5EN1m7wGmY1GbvcivCnjp4epm99Q3WLugiFt4FFtg6qvMyaHJdnxojjH32S8Yd2iLqT6z1",
  "key18": "4ZgaEP68wQvC3U1ZY1B3vPFvWM3QNvoHNHz8aT1cC2o1Tk6zU9DKpUJMVvFE2nj3M7XoXQq8uggiP7FuoF66Z3tW",
  "key19": "3yod4rc5unuJ2hRinWVW6g9nouvxW4hBDkntuEPrGQWMHX8eYx6DJ3bNmxxFuvGJZpsKqtbvo5JHrN5mHpjxFsTt",
  "key20": "4G9T9sfGLhAgfj7k9zbU2zQLck2LFtdBbkQ5KbS34MY9e5ue4ksBXzVhQpLkqUaR1ByPMMYnukRL9qvT6Pig2GYC",
  "key21": "sisAw2qFAcYtCKbz453caUavcXLsvL8h7vDMGHeMToaQzGtsbvBFU2FM6YgDmYkh1FhBuCS6Lz9hqxgbXm5u83G",
  "key22": "5RX43EfRWcmoS5RjZuJL2pgxM7sAjpytg1q7qzvDqcwZuJMuoYjbgJZvXFF6inkWJTS9dT6oU8ZTYv5QBE7Z3Vkq",
  "key23": "4uMTDducJf9dvbcoFRdq9QHFL9FjHQNNxRn7WsXK3oJbGAKntJWwfc5xruw8WXc52dSH7avbKgW3xJ6za8tv22Xo",
  "key24": "4Tsj8TVQ9mGtdoACZet6LVi5jwmXamsfKt8F1vosDN1ntWHguqyAHp8Fv2dtZKABn66zPXKkURLEJ1P3gXqCCUj3",
  "key25": "2LgpqqKnezCLNDc8yabYQKrg17BuUP1ZGGzrhsamvga8bHA5uhLZn1YZQtk9BbjKka2NNoZLyheKiLF5FX2d4UcF",
  "key26": "559whpKe2Ge7YFLrEVAmSTgptuVafXU7q9mzUDKVC97yMs9N7xaik7pMc2QidA2DrZwYfGA752XAshazCLRSGu3p",
  "key27": "4T2CZR76jKFc3J3PwwvLcF25XrFXeuBXXFdtTBKbR7HYLFW2dRmQqCnRRkY6DwY69j33cmdG2WsfkwZXqpzLQ6Y",
  "key28": "3Kgc2khVuacnwMPG7AacGQ1MFXQouWtafLj3ZmJUy1Bpfdr8zSaen24KVYKtCmAk27wNdiX1vF9jjdghm3cTX588",
  "key29": "4TBQW3SidXuc2hBJuiqqcMipopwRDXDMHnwHWkFaRa7ZUeTb4jPGYXYh82b8yYgWL7kDPBUp5cj6qF4D1rgWyNP6"
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
