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
    "2Q2kt2HMbmnJjrViGRSu2oXLT1EAsg6CzbysFT2K47hjNuP1SWq86w82G2RWPeJm5zFp7WyG928pKsTHqCmGHzac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbBCL6pEifTPBY74CPyCqXCD5j56N59HRopcucq2wx4sPPo3JWz67MMZPmVBxXqkbZyavWyppWui9wQJhrLo99J",
  "key1": "5vGcw9f2vkSUggYQS33jJTnsQ8gJiVNyxAyrHpJGyPEmG5sXUbBGHtbizz2ogyftSHpTbPEeMK8o7YtrzeWAAmPq",
  "key2": "4wK9uhKfrMSRckayiZj2KT5JBv6Fjm6JsmhbwQrCkHAXjetPCXfugCf4R9hBy7VqCEDCbKJRvfYThAz4PYTcSopB",
  "key3": "5aGDzQo1EMSQuxwonmn4qpfykh1kWNwnpEsW33PrLAXS6BWLbxJYjzuQ4v6YzDPYgJDd7onZFu3SdNNPmVx7PqGE",
  "key4": "5jQsksizkQByHDurohbgpmb9cnhyL3TSrWkkwG2n4M3RJgd58dkMkC2MbCcfsAsvxZY3iFDquxEJdf6puyB2VAUZ",
  "key5": "3JVFCX7eyr2MmpsyPhUJiekUo2cErqAMGNDnFhEtRcoL5gu16HTyfYHSwmXD4n5DfkfET6ErsPQrqGLReJPG5BkZ",
  "key6": "2XbrMbvCfApPv7MqaTvDjARtUSPfu9iUwsUSn1eNpPJxCHJJ6VhFieCw6FDT8KgLVqJ9F3GMg3fasgonX56vueXB",
  "key7": "4XBdCB3Fmce613HfetNDmahxtrrj1nGgdMPrZUjJP2YG7VECBytFJMJr1yWq9zDLtKj7LJQupQpHVyjG4dfWRztd",
  "key8": "5RPuzekXX2NrX9sJgZ3ixc4Q7aE3pMNLcJCKMVFfZmUvkgrEp86cLuiPAqSLuj7BNXWdumcbWsTLrAapiKXjWiNK",
  "key9": "3LHgALijuu4Yxi4tFeBXb4ww4wSZdVb2NiE515ArknsdKcyFQWtEWXp2AmA56HXKdDqsZ8CxrpaNM7EM8nwxFjB4",
  "key10": "5f3SRrL8X16H2A1XQQvnP42NjzPxN48KNFnpFTyaDaDhiyrvef3V6App1FS2GRiUmSJHPAhzKJUBv9ZdFPGNSEYy",
  "key11": "5VoPEBS5Hbmf3CgWeyXjfXzC4yYwhYEg3d77sYttNJzmqbuUpsPJ7fEpe4FdTjNCGbpHTkbkhfZiD4N1wWJ8ZzFW",
  "key12": "2DpsSyBKF1QKk7KSKGPKuP4zBC3eSux9mjdZwhho4zMragih7WpZU66P9nJ3BMH5sm7LiSHQ976M8uJAa7kANg8c",
  "key13": "3Djce1QcR27yuiSRnd8Khy3K7dyVMDM8do3eh9AeR4UN72mQRBeoQsY9FyweVUSm9VDCRoWvEZsx6cMHsYW6Zm27",
  "key14": "63Hg3qZm6j9g3vLtu9ghAedxFnX6WLyRTxSagPyXitCUWFnBxsT311Nr9gGyzkgJLitHiRHKf36kJXnK9ENXoYSV",
  "key15": "5pabmDmEt9LbGiz9raB9W6XzU9H4LvHYa4PZCFUBw4VJT3XMMCjQkFTDYzFj1tvCaghW9KyGrLXonDphf1DDyYXs",
  "key16": "xC2bzT7goTZT2751yaDYp9mZ17bjzDUhBztezBVJ2PdBCknsefMYP7YtJmJhZATqhjeJkbdBqcaYe1yp7G5ybL5",
  "key17": "2251HfkXvNSpNCqXNT7dHYuAziSHQGeCwZo4jeRxyvbdxPJVm2XzM7G6fh2XkqtgjgYiWH9Ke5YYJKtQEm2vvsif",
  "key18": "2n71GMJWFf543MWN1PutbeHsHGXHFw7ZinE7YRVMdJt4oqsT3SDkjWabw1XZwNvtFW33YWJneXQDk4cKDDNERw16",
  "key19": "5NvT78zEVAxLNAdfyojbijPYwuxaQJ8ZdAZNmo15eVfNHzwW2m1e3fe8NW8SPmE6GnUutDThX8EGtCFHdfhS63uo",
  "key20": "2QA9h1JNhSH2RRsF3GAx7a3aPseRNMzingVVW998JzsvqrzwxmXkc3DmF1mcD87CYToSyTV1jmzoLxxt8qU1qCXf",
  "key21": "2D2u3BNbh1FSfZ96H7S6yJJkKS5iNx5wQNEYFwjgy7JHYzKGKYDYMZcRkuHeVsmCmbE1Fmybx1LXRtsjJfE54VwU",
  "key22": "5sGfaUCR1fxJ1E7HPcPzvkqfxa7mzz96ig3s8eXWcUs22UQ85bPe12KEkPv68i53Bummjx22XBTFEzsCxrKPAKGX",
  "key23": "vvQC6C1gJoaiC253Q3rXvZERaM1zcVDvAJTt778bY5wGevYnRD9XxsMzEV5nNCYngHD7B5rTXwbBcCfJdBT8BDA",
  "key24": "577114RtSyHrd3gK6BpCVVujLoJBT5VtSaiUox5C5B6p6UfySP2d5r2fK9rwPsSAb3W5kSGSebdkZbk6R7gDmZx9",
  "key25": "kfEoNzXADRQikZjMMugyi1zwBXTSnERjFWxFpopWU5g5Czm9r7ZV4vLjERJYFaSniZo82eKcKhP17fvRe6wve3W",
  "key26": "32VUrRLoMLNVXWLbJhZwuqdUFpcBaoChTa5hHoPAfjUZ6rs3qvXGpvjsUgbAC5pAjThN4X8ZJPjmvym5PDXHdNcV",
  "key27": "4yptWncbWi38NAFZUWn2ZCr2cUVX8HHCUnJqLveV58yNPdr5CVbu2MfbKYyCXqmCCDiK7dtzVaSirYoM6cbQKqk1",
  "key28": "2JqmQgaKv9ZfkiqK6SKbYo7tcTJujTqXtiWmqEh4dH7634RsphM456PhcW5rCXuxaVJxdwKbzYEYvFW2R4QpkCfz",
  "key29": "5sqUsckQudKLiZQam3MJzvB2NKLKMYD6u3AaLoipQ2irDhhQUaqG2yhmKs6U4kGtjPaC5iBVhHhi71ohJavRtpXm",
  "key30": "4kjiZ86FGhVnQTUkFZMfEZfHLXbu5NagxxbZG4o4nFN38HZ1nkASgDhtCBu27eyb362thN66kZRFSKbExY8udAxr",
  "key31": "G88nsYPhnFyUQwJNqq3xXhsppPWiUwsHDewovGym3AGMo6iuBroirkhCqwdfvekK2HeZ6LLRKNuYrkCxgXxBV2R",
  "key32": "52Y8aPrcZBDXiyFy3SUmccsdUHVMrSGC2aoysPngurcQW8PKEtA8Gx6SH1BdpCfH9ix2wysitN33FnTK1ic7mmpj",
  "key33": "2fsxXuPnm8nZw7fg8y8SB83Layoo52kGWJ53w1pTbSXVq8GEjmZZ1quc5YoXGMGiajJMZgZGC5iAFCLxAk8Sa2Bq"
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
