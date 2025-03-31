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
    "1TburUg67kq1DFf1eXqPVDCMU76QeWYcrHp5kq4GbGb9ubW8RpYyFxasY9YNSMVXWHNmLWtnoERGiuYo8zMm1jX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53aUgzsEsgT2nkHTRA5ba4fko2CpWnGFoyyjhvxA3omHjYtAnYD5AHnsZHjv6LUEBq2JEq9JimDLxyJLJJyniwW8",
  "key1": "4SVV7PzodXWD7RStKhEYWmDeWtrUfS3kM4x3A2odU2umh1CuE3qQtMyA9VPzvaPbyywDRj7UR8r3MF5sGQEpLtLY",
  "key2": "bbgzN3tkSXs9hQCAGKQvvWtDpkvG8oDsQ9dsytG5AKruibiD772WTPcGAseZSAdCF27gp2qB6MMogdSNdpikuLr",
  "key3": "58Va65VVauajiNGTHw2htvag6gvaHggWX27HoZ5koCG2YbhN6HimfXCviEEWkVuy2xdAuS98x3BY3Zfctkq277sE",
  "key4": "53g8DrHXRiqLT7cgc34TGttvKwUi5pX9pdmFF5wVczbgakaodF5RhMnuqYzGx9reMNu4EJWML7bDU8m6VL1Px4my",
  "key5": "5rG62S7xRNH5z7mMZVFrt5NTcDDboxxqrKYN5kYPenADTof82KgqGCqb9Z3ZDKBAMkjRbgGC3SiNN6jqSrn4HQvL",
  "key6": "2Pknm7kjwTBQdgfwDaXJNU2nngehoBUUKAZwWdgijeddmvTh9zEEHfT4QFAC87RE5bRoxweEvH3HXLjquN6QNAwJ",
  "key7": "52RxPE7GWFUNZ4brVnTWMQNAX9tg2RTch9nBmDWXkmnwnf8oejkxskuLhiG69JVfNuJU8NpF5FwXuSnGSP32bsaA",
  "key8": "rLPZy2iBGFxe844ZG2e1ksNSggtuBSWh2wbP7rMsL4AQBQf2X3kvy6cp8V6ewb6nknYbLu47w7j22MEGsoic2mU",
  "key9": "48Jw6GYAhAGhCGwpwDxPMMzsmMFLgBQwbb4UqMhNSft62VfVfYXgyFurZemNac1D5XUTfkdsonwifC7uhYrYRg9T",
  "key10": "3t22WFPqmUErmjn81bxq4t9xrR6FiocRxGZ5j4A1SgPZRcJm4tpEcsNo67GqC5UuvnuaTeuY278ptxNuYEsWVngD",
  "key11": "3mafxttFFiNHSAt82EhKzJ2Rp7zvQNB9FBzCRM4HCnXuV9B2oHxspNmoyqq9FEisgUuhz7p1Am8UT9mvvAqLRhtL",
  "key12": "4GaCRQ8NFJUSsocS3qwzhuTC4LctC5ggWsSmHeGcoKCZqskLrJQ2SzmNLur1jixeV7W88XQRE6ZLSq8mvUrRmku1",
  "key13": "MLepDjKCqcgWXbtqRHC72BZHJnGXJXfH26fa2NX8zptst4Rj1PAsNkPdQ4uYc81MgmjnjrZZn7zJHjiYXcxNTPg",
  "key14": "2WQEqCvJoducZ2fabSCiD4SouPLAKFnWKNNmEtHFs2YRWyyvUqLaR7rTT5KMg6KMdj11AJcLBQi5YrYKrwTint76",
  "key15": "2GSxbXVJt9eLGRqd9eo6rTCYkfr2gZPmCu9h6q8UhuEVDstF4Cp34TdNLb7VKkhJZB6sHSXGbN1vare7c5JCLMQN",
  "key16": "yMoikNSmuAE9Aj6wqkhM4RfZgvWM1CNegycYm5dgzBzfq59MFmZqyExExPyL9JtFTmXYgHgvfju1dtSWwwdX13r",
  "key17": "ZDtFKa3xPVXepame2BevZQx6kqVdDbtsvMqJWNsFUrcCJRbuYVcsaZCPeeY9LT97wBhUcYPeQfxprqd54JwQbm6",
  "key18": "2Pn4Pmq5i44ck2dCWwstqSLaPb81yHfGACRsMZGpmBxnbomoozxNLr9nkFRNVFrow7DX5hmxMVt4Xvk3oqixETep",
  "key19": "45oFWHeZBxihuNRMkPP1upCXdiGyp4gHu4TAhexhioqEutrtFteAQxqeM169s3GT5TKbcNHZ8i6iahqYEYYRyukR",
  "key20": "th7kRZuxixgAGhjVSJMEkqwfBPZwVMZwK3KP3utiGjCLV12cKyBjE6DnxjeCtjH3MD8ncHGM2xk5njGXMG9A4vt",
  "key21": "3c9kwkGVB7pBFJ7mqnFxZFj6FkrAMQEs5oXtPoymPRJ6nEaiEbS4yVWPYwYiMH5vRXXdBAK5XJUaHWo1ateZhJTk",
  "key22": "36wiyCwpBtPrCrEPJq4vjFHTD5eFTFXmQxdwbpZpc7G1Z37s6Jnji3X2893JdPsNmPauFovFoQtZgZ5etRiFhkEf",
  "key23": "4P8rsX6QyezoTbtaP4Ld2AcEoFiqZWofazAMjBzvjsfwov5SLLE9FHnh827fBwCufavfw31TNCFbDcFDHdyQuF1v",
  "key24": "4KkJCPeYortCkibUF8xgnkgasmeadbrpFdut5sFJbKfrXfarRU4uMto1CSYrvyBmMTRyEraTAaRDmyF9KXfo9xVf",
  "key25": "3y3meEjJ2zoDpkX4oAPDiTABJaSMx9rD1abftKnebzEptfypLLE7MFMR33hBUqMWyC5X8EuQqaStr81kuG1H2KjR"
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
