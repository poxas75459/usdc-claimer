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
    "2d2xg3grLTdysJg7j316GESx8qJMP5gWq2przrLfdaqqUYi6t7bzu19KEmcE1RWbXAA2VtdAt6Tf7Fis1LK2FsRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ui5VFdRY5Tk6T9NYf8jd1XsNbGo4GPKRDi4effSGiSn4VNCLJpF3zUrzG5PE9ZfowfGt9nPARvmkkVCwhyiDnGw",
  "key1": "2b1ibKZDyPeiRAeSdu4Wem2spMeNojUZmNtzvSwsi3gW1ZjZTDPKqjSY9cZF3YMcofamF3a3uMMjx5h74pYGiNpG",
  "key2": "2g63cGX6whyCVMiiJM9fqAHoG1H44qZ75MZLCCzurw9HkvCozYuRpW4RbWtQLNaGibTBZJ7T42zCtSfMgrWht8ad",
  "key3": "5BfiroKSUcE5L7A9mPupGWzcByr9Z1PKLtHSkrbRgkmAGDiMDxyJU9wQVj2yi3vby1eMXSH814oSXsdmrM9UsYJA",
  "key4": "3pQpxVQrddz829jkXX3j8JhcnGFfChj3SguagSvwAWNsWU96mGCGrHn1XG1vGY6H9oq9v7gQqhWcBxqR4D2j4BEn",
  "key5": "2ahh4hXHSPXRhvxHkBz4pjtXFbUNx4jVgb4b5qh72DcyMGWwSDd4Em655PxmfFk3UTgaD54mEbN6JzmffkETA9SC",
  "key6": "3Tw9W2GGwaL4hPEq2aBLte3jvFvuVPDf4aNrxaCNNR4DtJokXqUfmgtoqDdPVLujEdgrhTPgnkT1KgaEvnuLJTTq",
  "key7": "4tBwiSkDzpakZ1LmtfmtrM88SDrfHTuBC4ZkogfxgBPp62xJbbtpBRbHMvJBD23GeyZ2kgDijR4s3Mzk2WsDFkfi",
  "key8": "2wHCPkb11e7CKV5zq8Ep4Jj5p4nfxpLErEohkx1Ds7nZNEBPru12UFUCNP9gNKNYp7NFTpFrDmpjqrKJgf48fMi8",
  "key9": "2LQvikvaeawMubQtNwYa1KfNcpDyoK1hofBtjsjATgQYiYLrh3TZkridYnvGX7dQafSVfBMxJfkY37Pt4hAQD9sG",
  "key10": "33ghbnp8pz4wnmSYsdmKdWVTJgLRtGCi3eGAk7uejFWChNoCd61t9N7rM6BNkVh9AvUtAZbQBzQ7NmYMiwA2z3RE",
  "key11": "4i2BuZRLEJpZCmQw5mccGuccXP7KQX7FpNMFznSwdyjNXJ2CJEyi8XrHfAMn8Xtah62mD3vqAGiZx7TY6nqDsGiJ",
  "key12": "2WV88XXtRb2ALEn8bx4wFgqHhxtGJb4ETgAdSUEbRSC7f1VmccqTZpZP22XwwQXeVfwxPwQwg7byKQdFpyNchozx",
  "key13": "4JkgTVPQfaC2272tDZtyrK58QHAasHCY7JLqZ2fgsQCLy5tYG87zPzEz2BxLe8hkzNPhvkfuNNoFhScuWop8KFR7",
  "key14": "2UxpuNXbufEFjC9t7Pkm2HQdY7vgHM2iF4kao3QwBcqvtpFDdsDueywuJn63qMRos12FUCNE8fqvDTqDrZePRVWU",
  "key15": "5zNgbTH65MHzyXmSNq4CAAkguhSqtZra1eMPavQTSyuiboUxi25oUMyfjAbNoRT4XWGjY2MLjNBCqk8Hk8m8spGq",
  "key16": "qMdKM3jDBJmKawNcrY3KR4aCExrTYo1dYzQM6e8FE1j9TBmDiC2FgrFFT8GSVfcdsHFt95PgaJEPyqwiwYqcjME",
  "key17": "3xo1JXvgfCEEzFyzt9FUrZLY3jjZv1MeBMgGGGU4wWSbGeUHq1d23zEVTEF88BNNVA8uHXvYXJ1aKQ8arYJnA8VR",
  "key18": "3DfMjX2NXCGSGTAKXyHmaFkbb75vT5CgdFw5L12Pd2uRF6hmaWMvohJkGtnt4jRd4AzXi1VwCoTyJQWf4Dx1xvkQ",
  "key19": "Mcq6tgN7Q1Qfqvkyd8KZk2GMVEnmLwZB4nNJYEkbgkjpoR34yweWRDZzonxy3PreucscKWYmAXcLwskMPTCi1kg",
  "key20": "229rcanhifBdTB4ebJEztGC8J9YAbvmg3dBFveW2J1E4bcHrt7hnRgBC3isAMLka2fUtk3J18GTbphTRWeU2o5Dm",
  "key21": "3SriaNUcGAxCqo81N37itDgxPJLTKc6TUd6vnz7MLT3yV65aPcwNv2fhQgRpoTZW1TVbzbKuh1Qx4wbN8JRXoBh3",
  "key22": "4ZcQ1LzEHwhVC6wRrRvMAbeHKMgAKXRsDnURGAhgwcb9a9iKMgQ61mBYVYyinANjNTuBLoidXZeBX4KNwKGt3jzo",
  "key23": "4AKbrkMPatrhD18fPvjTScEqN9tpMBqiaLojduGHHnrAah9W8dduJBmJyg8iYtbD4QrddrjHeUTX7xvVELnPftds",
  "key24": "5Ur1YzbnUZaVDnpKjop8qddc2feq4no9WQvkainnhiVXysnTsXjfLWCpPb5kQpH4aZxHxjDhWbJ4miv6VFn1sLuT",
  "key25": "4aXf43SvMAb87g2M5Lf7naqiTmJFvq3FNVUHtdMtbUexfUUfrjLXoaSrXpLyvWnjzHpCjKFUsikKKRRkhd8yAyzd",
  "key26": "3vRUgLtK9t8sfMeTMDcwWpcUbNiTq6ygxpLqsCMBXX6DhgoPJNC2P7AgH6J3t2siMYjs4m5cdRaxsL3eGsnfRqf1",
  "key27": "2CPZkAxJruGSFiXreuq7u84Xtdftpn4m6a9hN2uwuBFzkiT1V27XKu5j5BG7VXGwVurvLM4fzV1HiGymeqZ5T3ns",
  "key28": "4biUzLH4K9CiKEcJmaS23fauHugk83X9JoySZjtVSZCD3mFXyj8CF8JLgewDZnXKF9dBToTDpph3fPBet42qdaVe",
  "key29": "r5raHFB17GdLUtES16EgPCgo8Bunz7rzrTFC7rAaaFQxKWh1qdSiooKNKZTUNaKdPW8seoTu6DhvDZBGsy9Mf9w"
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
