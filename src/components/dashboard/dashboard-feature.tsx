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
    "mZj25aJe4N8ZpiKecudSUdfZQ2YqnYsyBRkEXPYE1eW5qBYdntmkML1zKKeduqMVuMksBxRjMrs1RDKHiuY1hNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65KUW3FwT8kNBQUxo5CK8xdk2BvvdbAcRBjLasxfiNruwpX83tCmJp8zdRvTEsLQCrnHjEJXZ9RvZ4FoGCu2MVAf",
  "key1": "354Dsni2JQaqNjYkZ5mbCmqrHXK97AqgLkgBe6wLbf77J8x9VUvwMPPKWKWYZCjH22Ahp1i3wnbN9BRNucMY7GJU",
  "key2": "53EKKzK1c3GK237vATG8knLKjVWJGTGbuFoVnDjiTGg11rZ7fyeQE3kq6dkP2PuhnX35LQpBkex2JECNWx3rv4p4",
  "key3": "wdKWba3v4wY6qYcVB9B8LfByXjK2H2Pv6JSFBhxA3j7TKaEjH46psDSW3yDaatFNGxLykiDCPmPSRGiBT6vov5o",
  "key4": "Y3wGCi2oiC2idbtEGeUrpQ8zPPVLJtWXkqo6aAN6tgUDZp2Bnr7GRuV7cSdCaWoWcAzVkoraR1dStMAnEa7ienB",
  "key5": "NT7hESnT24dhPo1iH9fLnexxQpYwbmBq3xh1DJPo95mSCLQYvJWhRfJQQSi7iwJTMRZpGg9MF13rNnjWo3Sb4bn",
  "key6": "5MWUZ2bzkaJKGzQoq8ywnD9eLxuQkwSDuW4RRetukRDMU24oRqUPg6jBXCNiGaaUZSuiMJCLgdEnekqdV8gucMZD",
  "key7": "YWkPryojCnJqKzCZL7BC4xQjpmA1crsAeVffe4U7sc5Z7PUQrfKKcgKJqTnRLBKduSp6L1JcLBMGah3EZ33KYhK",
  "key8": "KHBGb1pYwDFb3LJXjsQKKKKLVkn8bo8UFetGrCpk5yBL8BgY7gix65Nqf2rArAeY1PNPtJFL4BycEM2MgRPATPt",
  "key9": "iH4uRP5pGAFt6BMS7JZPU187pJGUSu68CySpV7k7vhZb37vFUxVtvqAuCrHkPWeAb3ax8iFW6aeTyAn5YUjN6TA",
  "key10": "3NwSZuZ3ySp1okSCo2MoXGBLygKKSkMJhhhACEzjm7wd7i1G8DtrdciWQaw1bGLarrQ6KiEjAkBGjNjye2Vz3DvM",
  "key11": "3WokoF1J6K7w4tydbpfBx9vFbBkH3USWZZTeZNxHrmZkB7xGibatGdih2Zf6DAJ52BmHdetUeT6T9ZgHPyi1ntRe",
  "key12": "3Aw9ZiSrPadJQn18AWTDBjPYk9DJEVY8kdQy9utufkNqrrUZKpmc5ohnDskciPBiajTQxbiMY8rjZZDwzQWUqNCF",
  "key13": "UMZHC1kgG26BHQV9AvizbxCcJ6WKT7s5ekgWfqJ5QL4GFp4WdmKZ2aAkh5Svn2WuRZLUMQSRpFxYCQVUUjkbSpx",
  "key14": "4SishYAhGmx8gZfM6ewp1X4hDPnbjS1syFmqR6LSNERxxN2hK5KvEzXrK5HUpQn8dQ9LE6mh5dUhob7MmcrzS1Zo",
  "key15": "5tn3vuQGJfertx5mKBtWjgWPoZt55SuGyXEqYW6m151iJoP74qFwxT9sCnXhbqcftwLn3sF2tpYQrvHgLvmCc8zJ",
  "key16": "2ywjcVKCVngcmPq3FTgh5gq2Y4J2SWnGS9WYBkrWUXSRXgCFkHXzkUEuQkwzk3X3owsiAQjhmuaGepyCFdYXFGgT",
  "key17": "3GNRWkSnbg3Hd7z8QsQw3fc7VaysrMBtgukKAVkxPaXVc9hi5P9PRmN4meEEPabSkmsxak3AM4N8QsBiLcq7uZ2z",
  "key18": "371TzjKCnxrtxaY8DPaus2G9WCfWYrNRLVGaewC3LBvZHoshQbQ78KaxaQ71AErcCscCAk1eThZ3Zig3gvXsYMwQ",
  "key19": "2Wo6nBffZ4YKbqSCnjbi3tKbfaAUdt9ZR9zfXzXcr9gUFjkiybgsCGo4rvL4cmAbR28pUrwkV7hBeVAbwVUNHyXC",
  "key20": "co8zw7p8XEMASS3x7WwVwQRTuR2aJDunsJuXeNtMi6XeQVhGVvNP5dMq4gcmfu7RSL7jimHF8grKa199a9x5Fdj",
  "key21": "5JyRvk2bnWA3cN6jDTjx2MruA84afQkdvqpHrfFydyw6JwTbXbqZCLRPqpe2b7YXWsb7mHibTk9yj3CRqdXGzHHc",
  "key22": "4ahF2zncDDyRstMLJWLPc7LXxEQzs3k1YBPz3dUNTJgy5BhCRCjDxyXTGtVFnQFEDqvNY1YeAzun8iPu7UGpWYLL",
  "key23": "55tknmmYK5sVVf2i2tgJa1kiEArNuJo2Zxoe2Frufxfr6AeiFgQM4rSTRSge6GnAC6PEsF4gSDW2fsyYLB5HvwnN",
  "key24": "5FhLL8Nx2ThV63Cp64Nys2vgTVDf8hd7V4qLt6dYDp9ygcNhpd2uzxcKh1SsmGE97daofAPoTpHqa6Pw1VcFdgfh"
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
