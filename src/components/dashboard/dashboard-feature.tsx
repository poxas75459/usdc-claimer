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
    "2sh7DFThctj8i2wLGvnKMmsAVMTm1Nna8ZcyhTwc9ETGaVJBy3ZmwD5T4PYfm4jo7WD22MKFEQveFEq5opQSkeU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WcYHW7J2394bsJUx6qLyUPqTNJmAsq16V21J6Jq41KC27aCMVQhxrihpV5BtKwmaj6DvEpy756yWwBd5LWCVbkg",
  "key1": "3k7NRHVEjcoF1K618UBB56Q4rDFpi4f2BFB56SYM8kzboudA3Jo7nCgSDqmLbPS35Q7grjMBaabS3Gi8NrPmvZLz",
  "key2": "5UbGfqK3FjoKqMhnDWx6viMmWev67jg1hcXSKwJC9QwEoKPZzGZ5BJMK9fu53HvNZH15NCUF6MfRW8euXLvFKaGe",
  "key3": "2D1ztTaNBgMhbrAjhFLy8p4JmgyXG8HZ9Dog6d5FvWVBDjgcQ5R1nHKprkyQtwY5uHybCSa3TfGLnmwoeFgSnQEh",
  "key4": "4hGpovPivUsXVMSdfPECY4pLoCytiBvmviYbPPY1Nr24MyK7Bb1y4E4qi5EuWvsNTpPZYPhEZM2ysEFyn755SYwW",
  "key5": "47Unsrh87Myo8UX4nwHNsT5zBppY1BWXerXZtio14Z43X8fibCbTZXB7TB9iR5ica7JV3jkX2LcW6vbiZWzDtN5E",
  "key6": "TYCGfyBNpLJ2MS4Gz9Ln9eG8tQ4wYC99VtbQbwSnQmVB7VuqZ3GQzD2CeWNixVah9omwn8pzMGEzf8nnQB6TEsu",
  "key7": "ujLUccMjnZMZ7gfPPJncHfACEK8WgWFikT8ZFEuxBp7KXbeYCCVPGtCoZ7irKTn97AkgLkAPRME78JBDwKcBZRM",
  "key8": "4w8GFR37QE4kWei58sZDk5hiEagKeWdAFNQtr4jSWXtzAd1LYAaeW97DAnno2Qk4xG4NK1Rm8EVatmFLHnxn2UDF",
  "key9": "4EoBFmweaf5RPf7MHZpkfNM5ePUn2mxMGBvdQEPU6d1HDHTkAjBmUrT18HjSVihh5Td8ZpvoqSQ3Qoq5atFaboWY",
  "key10": "3cE2LbaJqQibHkrqGztCdYiKynYThCn1ca1i7YGKELvyq9n3ngDhC7zgRRPjuyWcYHLKBVWe8GmvESrzLnF795Da",
  "key11": "32D1LfmLMFBPmwVyCsicmo731cW314waDH2DSZwYSC5RUmzYkjVsPKCzJDNeAWcDygyJAQRdunkXdBUdFroyPmhh",
  "key12": "3ft1JDGHecHMN2frPnvmJz3sHJewRHn9WaiXPeLeha3PSj66BoyVVSpNkndE1eUU8JapcJf68DwTHqecQgpvAbjU",
  "key13": "2ivRcZSGD1idxM5Cf3EbJ7UdhYvqbYoWcUGw7toYCxx1535Yx5kuo4fcxy1hcXHdyuz4Ymxx1jMfouL7ErMKdf2o",
  "key14": "2vovbBf8jabjDrLxEaBCfN96R6tjPWxqMT5adQa5JTsSsQBG2tyQzyxdnRnFJaoWZrCyPnR6qZ5Dbvx1dPgZmaYL",
  "key15": "VJz6sKbHhK1DRkQMvvVDgATgex2zite8HcCTrJu3DcfsfcFNo4rpJp7YCawJWesUvXLuhPQ1dzLt3mWXXf46fde",
  "key16": "3MopvggjwTaPjpDSiu9qiSUeVbSHoKDee7xoeRxUEvkFVTDjGnS9Tcgbj3aEKuriM6ysgvEiMRAnNUj9gckb1L6H",
  "key17": "2Xv8xy5qsmWisokPeDxvhHHQSVzs1pt3sthx74z7SKws3w3S3pe2CKTShWwEVM885TKTvB4rzU3T247g3rSePSA2",
  "key18": "2TCBhbopuxTCj2qWpdCHUBCKfgBXAquQHYowFG9BTtTQ7YWNHJkvNVm891RTRQYRRyU6LXTsMgegeVbEnucku6BM",
  "key19": "2bJaf52QpyRKxiBP4pVmcnGE2qVW3e1QgZVaRN82H5YAz8FByq9HKvWYwAgcj2gLKRtsohTC4QvvzNkDfiWod8pm",
  "key20": "2TRLkPi4mapHF1kRhkMibbbm9AxBJBDXhQnZeWDKFwEhyPCY1PjCTLkB2HBkBE5CK66RjYcvm4HtsnQ1ZJd4xWpg",
  "key21": "66XZBd9koqgzaiTsQCVM5uVQJ5Nqc64ZX8rUCA949dTJWF1aCDvSgTz99Jd47oksd9LUGHRuRjHnRzo2znqgY7qo",
  "key22": "2y8C69fDoTn6TxGBzy8h1EZA26QpqXsMQ4EZQyreHikbC1WWEsybxhPijTYLNqXkLbbpJ5v9JEwDLHM7CMq8BgNm",
  "key23": "61pUD3WBrrABYpQAhF82f9GAwyUspL5kK791SNWqaSw2kdk5izCf5qwetYmtFjnST7mUBtAzcFqe1rEgWdCdMYij",
  "key24": "4nAExUkecmqj1HHVmHSUkTJ1XhKkFv9bZ4YEb9Zss1BWBTFmCrcJ69ozZp2sEtPjqQw2ZosZp3gS13VXv6BnDXjW",
  "key25": "32oWxotetnBb2b3D6HRughktkQewxux46YvPJyXZbdTGDUQYzeXqeDcwqqHg6WyY4MLHCwQiJkQu93E5BCmQXRzx",
  "key26": "4Hyb41vZCt5opSv16simPnV8Anz92ry25YMNosPef9Jj1wZUwoTwp47kzXHb32LZaijfPWZF6AB9bV6G5uLK1eLn",
  "key27": "45Nv7XuH2BVXdPab9nrz4g9ZKf1PzQ94h6KkuAwgJ5obF5faH2inkvw6gXb57ac9xXpPRQudyTYa73HHWHoWDCEe",
  "key28": "4TTYwsFPgMT45iV3sh7H54Ro7BVrkmjh8KDJ1srdGRo5qo8j9b1GZJJVeqY52YzTrN1SQmbLQSAHfY6oUaLRJoTr"
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
