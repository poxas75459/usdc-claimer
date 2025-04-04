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
    "49JHMQyPY3L7PMhzAjm19LMLp5VL91HwL29i4ga1A32BtJzA6cXEZ4EftErQArcRDhK96gf3HvgKiDu1c3P7apj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CEaBsyvW5fZsBKSepUUmy6aqMd4UxHV518KpRvU6gcbRmyRxD5tR1qzeLMJdsqDkmcqAKwgXVST5QzbNDjk9ftG",
  "key1": "Fvb9Ttob4vH2fnVJHc4Unx7DNQG7dxqd2c4jjp2gYN9UrdxW5wUHCUeDAUh5io2wmzkVtSsn4ckfRpoVEkvNiJk",
  "key2": "4Rd75BGhLNnj1TjHuiPQYZgaVqWv3uj94tWvyxZNgesmxRt6DoNLLKy86MwNCBPbVCPqmKLXDmvj3Cx4em7RbbVc",
  "key3": "jduJvwg2GnQcwgoAr2iN1nMFmkWpQxKUKKKYjHubfqNFPqRjaitpRBXiBp3kTozkexsnk4zWA8V1EWrA84aUbhZ",
  "key4": "4R9yRiRBQGLdcaos8hNfuHMPwW4Fkvqh5AferH6dqf7FBKeM5uSWskJALRfaHbUhk3NMWEfxHKYvH4cJriEMHqHZ",
  "key5": "4jccwDYgM4HGhPRCLMzVsZnFm3A8wxwNdPyDuDPFeaktbhE6EEcoCRBPAQwTWh9WUENZDA6kc5EKkQVg2cTCkKKq",
  "key6": "5cTK6mUjPipyRgr9anzuy8t8eyCSZkWo9n7w9bYYTEGXDYN4Pg3TMB2Zdkmgqy2i5szHqef6eH7TBsaC9NzXzX6w",
  "key7": "487nbbc13VSnvS4Eyc1GhE2EYi83bRHiupKkZKopEDVCNutht3wrNmkPjNRb5BiXUfYFvQHYikNN8Au9U2ANfPXK",
  "key8": "V3Zgh513PbG1vaHhb3CkMM2omTprAXmktE3ZCYxoBYH45BpyzQNQcZU7D4hg3kB1gFcVVdQnkhryvKdRj3Jrmd7",
  "key9": "5wRHMUnkQWU3Xb2DM94cAeS5ymaDE91D53SaxRTshrNmt5DFFnqQZkqR5X2tA7EzCGxEswaKZBBWynUmLZEjEB8N",
  "key10": "j7E81z8w12q841MFxrgwzAjXJiMmPPMWduAz5HfvzuEG6kXjb9GkErCAzzNeMM2MB1fBu4N2QB8K8MRQtxauvAt",
  "key11": "4vpUbKoEPsPCP3TU7BeHWwFTLKtjVHf1Tq1LRNmEefpZMHWmA1ktPdyqZqEWpEnbo3hhZnEapcXu9xcfwju7AcGW",
  "key12": "2NR1kCsWvYruntQWr2jBWuDtuuvPNBLQLdfuMV8erZ9tU5Zqmaqttwza7FppriyAugirdsK4YsNzRQVw6S6AYC2r",
  "key13": "5X57SyvZLo1pAgx42B6w4g77EJ8SP2EEwRXSwG32ctNqpmTp3aP6SrrX5zQoT5dss7muijAnqxbNcsDRcCMiB6ys",
  "key14": "5ApcYvL9y5b4q2QqhE8yePazuyox69QytscoYfrbmt8a58Lx9H18SBWzRTBdisP8LGRJGkFzX43dC4jeF9Z3AFDe",
  "key15": "4WDr5BZx68nhknrtHbujedLVzdeZ6K3RHq7Js9RZi6LvkruarVykJxn16EQ9Uptbk7fzVEKei72dQDn2qM696GpB",
  "key16": "4kvJuUW6F3b89fkpJuXnWCFY2hJkRr3boajDrpY7CiW1TgPoKdSqBL8fZooDz8NwGmdvNxxNkGhTjhuShGwNrSv1",
  "key17": "2WRx19UC9r8tmPghgunuicxYhcnt8WTQv4wBfUUQtym68suBEkvVDi8QeDDCW4dDvu97nRahu4XCnXLW1gfMTpto",
  "key18": "2B5f7Yoj2ifu2aFEw8nz9h1qBB7amjNicM2ucxGTBdstfrpxVGVz6YNPezFwgtCRh8J4iXAXC7iqV5so1TegUAvy",
  "key19": "4DAACxRxaPtxLgpy2JhnTrnTdnfGF9s7zZo43Ca3Lsv1a4QQpMN4hnRYov4sgGsYTk8mfRxiRxbgy6nN9Ar81C2X",
  "key20": "4rTg8yk7DwWsEDykBkgpN7sWzRQLcSVMLtPbSA5ZtJHPfQzPTMsJ7wHVTUwsUKon9smiLkZk5c4yvqCHeU87gVui",
  "key21": "5eqLTN4oqZFh9nsbxcc4ZSqSA5qTT6u9TQW2M5QB7RUgTbABVtMfmzikQWXw49FzpBmjwRjToeRAAcbumdMZCv2W",
  "key22": "2inQv6v2UAVSefcxX2CFWipoRf9nvbVseQqWkFoypq3QSB1Ua7C3Xor7obLRwSX226BJHCWmGQQwonAiTTQEdrMQ",
  "key23": "4nHKY9pV5a5Gaj4mve4LnU3coah9qNAkN5kcrAkkGSFbve45UbzzsEraPFRQn99vtBNVYLqfMRX3WdoexrFoKR9F",
  "key24": "2hhnL8S6rKPFLWwSStYLwoNZy2fFfsPPS5uqkFjbuE4oMVTRZj3YaZj7M3Sg25kKqEFmZuf2v72DET4T1rpCsKYM",
  "key25": "3nqQ2f1S6HuMU4Rn91ZfTNu5Hc8ke4uqwa1adp5WwppiSbxHkKJcZcRkWVkb2MzTt3yDwnCFxTCz8PDqTYrMh7XX",
  "key26": "2yu159UjCQ62b3NAmgyM3P972xmH5ufS8Ckgr6St8yWCP7amyVe1Fi81NfULs5Q7i2FayrzQ1UxybFt2e6hcm6e5",
  "key27": "4YeH46yKuG7P2oCvesHHYy3ASXW5MkoK5E8RSKxoLgPHyArPQPXypSrHfS4W3FArCNYkPrceTFzh393p1yxxmniv",
  "key28": "yzjRyZLdsiSAhxg819aHq9a6G9spiTUh8Akww6j81wZWBKkUJPqUpHYwncwUavajBLbC9QasdMuwzzdseeEGNbC",
  "key29": "29QKDxSsikyQSyU3hauYZjhP8PRVrvEizv3WjLsND7ahDrE32MHLs44kmRoGd4vyowabyfxK36FJ1tesGJY7JD3P",
  "key30": "2p98nNKZontSFMZzr9mqYQx5ndBdnHfTRFvzjPzjhHwDtXea7nDVx4Bm2nC5y8KFJPPUKLY89HC8hLJJDFxs5VFK"
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
