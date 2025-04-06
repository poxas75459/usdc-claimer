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
    "3ECeR8UZVVGn4JsuoAshC1fq8KNx1yDvt89VABBcdoDdgkx9zXsfwwVUWhwa8axDHrXSzAmqXG2dNXRD8ic85CUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y1Ldf2VECgPzruKNQM4qqLEsHAQVeRCJjUKwWf1ndz2iqy5YaueMvitwr9JFTtqxUpoxNuzUUWxjCru4TmNgarK",
  "key1": "4wmbNSJZh33imkpmPEmUZzgfLoYRKEFfGcjE7jCtSyBkgUhuYnJ6sQH2Hd5xgX6JJunwsFnLupThb7ksGMu1WorJ",
  "key2": "57hffsfjRs5xQQM6JhFKdHYhjn1DmRBk8WT87aCuqnVEdwSD5wKABeo52pJK3T6tq88qfrUJYyaqGYwNdc1J3w81",
  "key3": "2PhBX3dCcDV9KuWWtdKHPC2UNEu8j7DLfjmCMwMPYipdFod3Qd4zxWGKDuNDmLDNeuFXnj5Lx72GLKpMuUm3ukso",
  "key4": "2PXkxEPbmSPNo3qS4YkM38Gg3e7s7dvv7L51dH16u1bcepwVDBsbkCoJqrMLkzD3CVAT1kKbd2ezA3dbBKQ5zKVW",
  "key5": "5CXubYRVE71SobKWDSpen9e8aWinEaXhZCpo4CoaG2VdM27A1WZtwV6D7UGkXX2EYbT4VLofPGKyhUGyou5cYzz5",
  "key6": "rL8A5DTZEDRonTkokrgzMMVtQqkuRF1d1fsGrrWQ1mN7rNjzqh8SZRNNn5JTiq4r6VqTRv6jtz1QAc3K3qmyMBT",
  "key7": "2aRp13WBazkjBm8sY1iaMQY3xk2PTKyu3WxtZjWn72ZB78bpdw7Swr9ytdbnDER7KA85qPGXQUwy7AXFUzRP2evg",
  "key8": "3HRoqxyG3H8sYC7d8euZ5BWsuTntrMnKxYzZ3rgfyTb8puyXaLQMqjRDfQiJWQj1KA5ahhjJ8SVfJkVMGzUKQmQY",
  "key9": "5Afac3p2T5B1UXPpCgadGj7JYoCYE3R8tXkyzYg5RiFF7AMV6ZiaTi18Zv4CdpWCkvAg2i7pqcDm6SXdteqogrFp",
  "key10": "EfCqBsQ5w5iHZpqA4KLBJ11KjArd6MsqruwFrogGNY46TkRzNwKkDaJ7QU2r61RUBsZ5W7t59e3TyTBqpMgBxUQ",
  "key11": "4Dsuz4sacy9G64Y5f6qCeQqAGU89xDFxUM45RZmb63RvsusZ1vZApfpGvZgr55HEf8JnWqyEaQmQXhVN1LUrePAp",
  "key12": "3RLNGxnf7FCKTbLiAXbZgz9sc1HNVY3gb64CHXNKJtwpByVJtFoASDja2mFkEGkumAtsSPTVGQU5S3u3ZCT1nJJz",
  "key13": "3d7KjgC7zwpfbuzFp5PAVVoaBSezwRyZhKyyuU4YfHDykqPmJiJew6iCpCstsVut5cDnafaKQRf3eAPruQ2usocM",
  "key14": "5amYyoyws8rbU28gq7pni9eznemLtVB6zYpup37j4TXt5mGT7HZLzVFz7MFf6e4F47pf55Ezc7e9SrMXC2n5DfyM",
  "key15": "3jM2Mmp5sbyv7EDmzU9rwMtnguvKEr5ucRqz9DYAMnmhk3NJHRoqQ8yEJUDNfr1RSdJXZQeEGwBq2mwCpP8TTVZc",
  "key16": "3jWpeVobAUc7jBNBpST6CC9PdeHGszktp1cMbmvx38zwTh7kGDkG2EYzUw6nEFFHwZL1PeUF9eSDaoCiUBfe8zts",
  "key17": "4KBUufzdJ3v9gTfSgx85H7Td6uRYC2miSoDKi3ZVPYaGsnbmpiAJUVLnYMZofVhbMFF9mSZzRx4cFztGX4NvxYu6",
  "key18": "5ABgDBZKvAziv5g3B89LgUkeAGJGSZ5cm7SyZ2Gsgh56i18Kd3ZeSSq8vJu2bQGBxHobGMMzxScA2ZRiXXS2S4by",
  "key19": "tHi7R5ojAPc85TWaY5BNwtEZat2CEN4Tdfc8gFNFXcZY23kWEG4Qj4oWQt18aGcZ4oY2BEUe5rhMoeVpCkU7h7j",
  "key20": "36ag5fDzPqg2rmCbrkddDmopcbhWHbqM83r7Hr7zroQzA23j8PM1UgXuT8yZBLeLAqTdirGCokE42Pp93sjrL148",
  "key21": "57i1x5u9oBnKYTfVWv7NYRRnQWyxLjKQwZC4f2wjBePEqBp7TZwLhVczAJPDsDKbJdxcbv7TnXGd3FtmUPWRitkn",
  "key22": "5Snhje4ZeM831S82UFerPHeHTBY5TQe7UeAYgorviAk29yt9EBtcbb5Z41GoUQ3hAmN2cZDisqsF5sycGu431ASM",
  "key23": "2vLv8UCdSzRex7ahFsNKjsqBXGioHmE9T13ee55iPu88robsPVpm66X6TYQC9F9PMrE99V54unPWEBT1yKD6mkmo",
  "key24": "2Q63md9pu6C2VHJUfRDUishfCMQ5K9ctATtpSKLCVLg628YjXwz3e91zQpAkRYk1pr7aQMY4Cfs3aEmZoL4CKwgk",
  "key25": "5Y8h1t5P6YqM83wCDn4xfmBvH8qdZcyrkpuhff38UqcHY3JKGxBAAp8sqWDjj8wSW8wHaht22d6aerMnUPRp1wr8",
  "key26": "2oQ36N816kzyteNHDrYSmpwQbx8d7fRCRGBxFRmbiJ4aVDuu5pUQZTvgMDxiZx8yEMv3CNwBmtVggi7cmc98nZQb",
  "key27": "4RJHR9rKyWE1FZ1RiJ33MTtHMoGDbUJcWaeRo5K3Z5dJPn2JaSJmhsJVSc42Wpoz1qjbaTmNLVwFvcabYprgqsH4",
  "key28": "3cHwRD4z4BfgHYHVX2jPWDU2XYKAvKzS6YpyLFVQXy9NXYMZDpVNY7TAdLRRoppjz8ESo2QEvNb7NQvXWZUiiBnH",
  "key29": "2WAySbMcgk7X9HSPgrPMceqVHHhRFeTXV2cZ29jwt1gPnpHhtCsvKuWouU7hzdHCguJnVyrk2Du9bSMQs1HAd3RN",
  "key30": "55W6hKWBUooWBzMDqdKCaDEchbNPDubVMFkkZgeJLggknHg9fSr33xiwH1ukGhUvAaNow6QKZhjnfBCQSPjvxf5C",
  "key31": "5kzsw5dub62TrikymJe5DMEjNHX5sFv8dhH2P9b9hBV1kocJNbv1PTNf2U9prfnKZGKNSNna87as432vqW4beN8g",
  "key32": "3FfvUrU5jvuwEHfNRSP6wNgfmATGSZbYg8T7mePkMZ3NNaz8Z6fpAB7fPrUtXzRfXFMs2j9mU5RA4ZGdxZotu9Z7",
  "key33": "2Bm2ir9hoF6PWu8hapYNWv487KJLSXxyapJP7Yetin6UiCvDrbQWf1ZRN83zSL3KoZEUWtNY6V4nMwpRUBkTRFrV",
  "key34": "3g87Jri532DZs1uGxTCBHGcmEfT21sSa3mPFZdfTPXhpx7iRxyg4pB79hV6pEJxmX4xQdfah6zVtJwSSewtH73XE",
  "key35": "5yXEWdPE613CHZ3WieEFKLeXj4JhnkEywv6LUsa5s2pYhbUjmtadRV2vzT3jAb1r3mCFah1skEsboa6L8Q5kcV54"
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
