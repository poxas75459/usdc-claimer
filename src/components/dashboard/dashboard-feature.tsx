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
    "3yY7kVx9f8HrDPT18PwMXEkxfDBXRwW9GKvEJXuppnJGVzJ9qRLe58akBzTb2BXpsqcHWLHqYoip6NDRoPgqpAkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m7EcUSfzWJyeYDqNDfSFuwgNSWJdu6XcwGkWgXRACR2K6GPSytqoBynQxRewY66HPCNbU4atRtVyhamA3vc7mei",
  "key1": "2DqNhBw3YhFdrRkjbZ9JW79KeGz9wtE4x3EwQFUNToqfYLCpXKGwVNq7bWNzCdNPco8j9zZdESRZJxFsGeUD4Cp8",
  "key2": "nPv9e59wU1mnfYjpoZf9GvPut676vryTRkvBRaBPEvtR3AzHzWCo2UKwdB36dRcqzVXfwg5YokeJxVhhHNe57ae",
  "key3": "61DDa9V36LJdb6iqkPz5YvH72g65V22VuhqJ99WH7BsHptDDnwhSNfYjyBiqdbCRQWV4uWFHAzFEneXtB32sFL99",
  "key4": "34BjCdqhDvxyx89Vb9GQALQssThPPUn8g2bsbAJJUT1ZdjJP8RfF9A7fHNfFeMt4RH2zYYcHhrfDoTUDtby6Zks1",
  "key5": "2watVNymWHL1CdZpG1yPwSPR6hKHSxKh8aTTCg1xYBb23f1rA6NtT2RDTtHVy19JKLDga8ySEYyCQKWu4ktqF8mY",
  "key6": "2p4nWHNxWytCqLHcnkh9smhoRHZKT5rarNhFRYsFCEhAh5rK8BHEToxPUC1S7z2YY7kC1GDvfrVYCX8iA8wiVPJZ",
  "key7": "5aEK2BYriCDX1Xik5W7rJ5JsBYPy3Ag2CZwJ7zeaAzsyjTTSfzTX2wpdxnVwRYedd2MKuFwL5CFuopQcLcQDbVMU",
  "key8": "4KZfAbbAwK7FoUXEm91K9QUvd8qwMaTyXQML36riW3E6Zf2JwG8yosvXd99cZSgXArUNEhZ3ojaCWYJs5ZfqPQ9F",
  "key9": "2omdWCvpmrYF1D3M6E1zUn9eXzft48dJwhHVCnFe6VSQTm3Mn4B3qZJr6Cf2ogPmrGmfCopSaCoPiRpb6ACs2Aui",
  "key10": "3bS8tHWhH6EeWathHmpgNVEuPtyueF6oRYBUVKa7zbdReu8UM1bgo4JdUX5d8GgvAdzrinVxkMFXVYSiU24EwEaD",
  "key11": "VMLCBtzq5oELu9n7B9HAzWGnQV7PMAqpE73VS4C8jBzJBLCQcj35Ziy9S7SzEQgzJVXJuCL8hzJG6tFqXucX7Td",
  "key12": "5Xpw6fq7HzPNimC12UE9MrNZWVWs2NAF6a4WpU5KZXF6LYWoK9ZrPh4cCYJ9jVNvkfnDX4WwRrmqfPdyy5DheZBn",
  "key13": "5ZB3Rzwu6X6QH1ztuhyEt4vUi8b7gXGguUA3tGTT7sgC5jNmQ6unRTq3WCgDWaCcnoCAQfX5sf12dDses2F7f3FF",
  "key14": "4gtcsYfh77WpSXgC9TYMPm9DB7Srd9iLeaFFetVqdd83exEHcmFFMVMPfaFf73PiqssTtFWStmhGU52u7x3rXwHW",
  "key15": "2DHRgQZ9VV9HtHZ6WRsosYmnQLsFg3MC1BRZBPrvG5PnoQVitKBvjS3sJb9mdqBpbmVg5bzjpfShskpNs4bmz6qM",
  "key16": "5awbSGW3uEvJjjqiMNkcuwJPwXQ8VGeEa6cijLY91yi4tMNnJwnZppqq1k8fY2Vj4sj9FEv1e7cm8a4cMDB1DY1r",
  "key17": "5S3R1ehecEhXx8gxMFLbEQLn7taV1zvM2QMJbEiPNAekgsDEwxQkLVHEG6tcThnuCZEAFFQTxxBcfdSCVNdz4qPJ",
  "key18": "4ZJ2TnzLwKQEd4bnPQJw47Ty3MWYdCATZErQxoXnPMJLFKpevAbScbkaUF4fADgZh5LkkF6CgHJiKdR1VeyBrZg4",
  "key19": "2Li4vfcesbKkhsP4iKNfmjC3wYvr2H1fEAPjdUGTB2fToy9CqtfXKDJ1FZiYFh4Rp2FHasJ463XSDJ39Rfm3tSh2",
  "key20": "5Uw1i5EHB1fCMJqyHHrREurkznZZNSYdjaSpuTcTFBD66fex5LaPg6Gb6dhrbV6k1YeV9dF54EkzPgUAJBrhwRv5",
  "key21": "4wLiuvhiR8hU28DcxGk2Cca5PyQWVL9tts53hhdu81UJs9SM1KLVZnTM6r6fQHeS4UXLqGn8psgor1gatzbU3smQ",
  "key22": "3D6WatGroSUDepspeEWHm1Km4MiVxvP9a2RSQHcga998aR2WksRRdSXgUnciBdtBCjQunvTikpC42ULGJN7ZpSaE",
  "key23": "4CSrxAqy5ZWU4563bAgL7kx1RJaEuofpCcgjHoCLbtMfrmaoCdkWfNPAqtHcdw4UiUa72waw5VoGUAnTVv46kpWn",
  "key24": "3RpRenmYNKAcsiQ6XygcKYqErnTTNQqHhbzJQ1a9N2ubxMptdCzHfzRYg2bE4EpKcq2vFLqtirXpCTzS2ocTMmcN",
  "key25": "DvfudRmTfS8tgkuXyJfGSPbnF2FVTBKGKZtakLrpWaKa6Cugx3PMau9UoCN2Ui44x9CnRzRBW1fTF6jEdLoKuhe",
  "key26": "fRuuDAFm7Eb68rmHHH52PBVzVBagj3BMjmJ26jFZFodoSZFen718VTeFFPx9h56cnEae6W5tMCXV9SAjVYdNHeZ",
  "key27": "5yp9NXijnmgxyMbZvKjm6YuBZJbLXihK7RVf4pAUYYw5UDXDTG4gNokxrKk4PcUvTFPWdR3fMmahVbWAxGcXXWiu",
  "key28": "3YiqWi3VWXwpw1dtqcL5GEDuAxQduUKjBhkQ4MFzzQFGNoYtuvtPJHBEeZgf7RjkosZSUBNvbwumiZ9g3bF4h82n",
  "key29": "29vkRJd5W8GY3GkpLBXVjcsUGaM1eWV4jrVHD13GYpXhXvpkZntzpfJdtsfFtvDZNTZa6w9m8TPXXvnSxvDejeGr",
  "key30": "LjxVBGraUVAbewPiFyLdSARpLwNVyTaPBntbFb8tqjPWmyhiCFdkkBHAJh3Nd1Tz6txcRqbb3JYcLuaGKH9CLzy",
  "key31": "QiK9kjNJSWDACRGQAgQmX6CTb34xXZpKgh66V2mxWQMGGEQpEigrmSauMtTr7haz4E2WHUHNqqQaNPxucv9HRt1",
  "key32": "5XZLo3VNZ1KCKyi8xzCZRUWTAbDc9NuMYdC1YNP4HDQ9UZKFEbYyHG83T5BQ778dS2dWLdQ8Xs2BidaHEpiYrVbu"
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
