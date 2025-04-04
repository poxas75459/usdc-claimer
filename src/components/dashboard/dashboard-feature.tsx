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
    "5xQcQvUKAsjDRg7U7ZVkBqJAqv9CJhBoZP1hFGL5bTeodqeAShGdDso1C5CaU5yDZnf5xuf2r72tc2yRhFTkyE6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bs4CtY3NaX1KbVG5YdkYX4hXZmvxEu8STBamZvMYgStZyrjmufcWSmdaDLfikraap7qCM2hd311eVqWSZWJ7YBR",
  "key1": "5yop5VAhDRtKYQYYZmbvTRdokb1GdLcyagaSkX5oi2czELWuRANNctiwbLvgpu8R2bpZ9ZmCPtYoDhXGPEmiRi1X",
  "key2": "2Td6nfwqziCWnod8DWYTBpR7Ngoh8KNrifQQBEuDC9MsnSqFf5dxiGAKYh9bD7bvYoDXq2FCNFbdBsCZepBhLGs3",
  "key3": "ifvSWkrFfq4SGhJSQe2te7FmxY6KzAQC4paT8kWZetqmiHn41tkFFp9KzjRJVsGTEzLJzjVU6hZiwNAGY4xjDeR",
  "key4": "568mFQ9idL4vNYyRuyhWQCi4EtooD8chjo7u9NqH7obz5ZUfmCEY4ZxFngkuGn1aXgk8xRo6h1vPfcksZuFmZsnH",
  "key5": "5cuM3Pqa8Wi4E6ghrfPLcWwSJkKFE6THLNfBvL36vGXyCbqbNQRxiTXh4nn3ANXGwa3G1JKkJPDHrLfoir9BVK3e",
  "key6": "2SQSE8gJ8WQA65aPPQmTNtWbWBUDPT2bYUzbfkwZXL7bEsyUVB21M1wH8hWNDztLXQV1jtxDVkqPSpisNm6G3uJm",
  "key7": "2XaLSLZtZrnewQR1DXA6Xv7MyJog4RzgHCEBAW7C99LfobyNepoQwbB72nPEEmfjJ7KpnrkAagvsVquWjqsU3LSM",
  "key8": "2mDtzBM4tYEeWHDhwexLo2b1FCRTz6n71FoLy2txCMNSrbpWWS48fjiZTjokfNRTYMLRS2Jbd8vnSA8Caz4nurjs",
  "key9": "4mwUaUec4R82qZeDdGAB8pshTfZLiLC5fNoxhii8zb3KpB3j89eS4tbsWGAEH6dpxicPo8YFFzLR4vegG1YGyUyx",
  "key10": "22TQFPLdaSqFuZp6oGCCrffda3mPQF4Rd1HNZc6EHu9kaH9Gn3XxRdGT72ifJTauaxL8hjXmCkceBGfeGRMWJGZq",
  "key11": "4VYH5UHdZNtktY76mJaBFbCGid9PUtWS9mN6dX4niPbpUFwAUeSmdG2YS9GDXKnJmQYonKtzjZdUpNQJL2rzFfm8",
  "key12": "2WERyhcypM7F9V1PM9TAeNtqfomfhjFzSbHHsk5AxsXuHUvPctNLG84xE3VyjUn8Tfh5L66BkWNqu3YPjuKXt3xz",
  "key13": "4skBzmd4ZzzrLawssedE89jTAqBFbsG7cmpubbXBKqodBAFfYLRCa24CJku4H14cenW6CWA8ssTkfGrh341NfkbV",
  "key14": "4pQcVNueNz2VdFFRELpXiHuPNfRMNJQM4JxchdVZJNAmQCkaLKYPtUXjTvfRZR3iRm3EiFpfzTkwWFTK2BwVpZ6e",
  "key15": "kNVDXABMxgNPpxrwTF9znvVP4XDyLK6SyP2GY5F1NSCkvanapNdY8q8VVDdQxR1M282cfjRfDha46KRhx5N83Sg",
  "key16": "27iMyPMykJWv5K1kqRHVoDCZDJJdVNho1TQ6STp1u9Nk2ACeQnntNqCfmsv92GYP2qHebfgYmaN4Cj8UqJDinSP2",
  "key17": "3MVHkaWA37S2MG8WYvH5WDrvFDyhVXFFjyzmvaedgeNBynRCWQfyyNWqirz9ECNmNWJoFPaTfNLGPQweFJXBuvg3",
  "key18": "af6hKJdKXUakTguinHBiCPyE8gi5VXnNqPTvBc9cSnq65emdyC7eVHbUWZKs8TS2ygJfkwMuSit6Yb2CnJy7Pxo",
  "key19": "4PeTtAr1cmDmKydDAJ7GWStyzDBPkBGkfqj1p622PoFtvLhfrZmUHPHNYGdBxVekiYYZ7hxc1zZYpsubMfqRhho9",
  "key20": "5x9ftUh2oQxFi4aPbQh3Mcd6M4ud9ZdkqrD4VBTWWZ5PUAVHyTzDXFrkCbnnGVNwbA4sj8w6mYh6NguuJU2rYP28",
  "key21": "5GNmBPwGGZPkiUVJj4MowMHKD4vsVir2nyUw6BKZozAVvviRFrqSExYngDAyF1LEyVPpZ7GQiRHaNBVCiFgvwoje",
  "key22": "eoJKC8qzCKGsKVTm85zxV8a7tyZcU6nvfkYHxYuh4ZimfpDXnoPoEq26pVy44mgzXmCiSVH5ZC175UaoAJk9SPS",
  "key23": "DzHbxW8jr7z1UR1QfnrbWuoUDAR8UKo8juCBX79US6KhPL63fKva3wAdqdo6im1taBcGkr2KissFByCsjLYCAWF",
  "key24": "4FBJdK3jdkGzMjGrsHgmZnB92upqUdbcJmqi1g3V8V7wHPdKnU5H1Kav7yteUBaKtv1CVid2aTFpaNHhQiXRANcj",
  "key25": "4UdUUxUFiau1yd3hA847VXqjBUVk8Wvq27BD44VAcpbdGgpqjPVEiFqXHQFPtPravXWzcpBVKoxSB13UL6BudUao",
  "key26": "2C58M97GDWZq9oN7Ba76dypgc3aBkoRG8aEDHkviqoqDaUAgmJTvRDE1e4ePVzwYLtp4MgGvAD7iVuFWFqZJgQxk",
  "key27": "9STs7ooqAK6ZZcobjyJUciXGY32WPU5oYrqpAQqTcB2yjUVAAsZSUE8Jef5G99Fh2qfMjcaHzUTDkpajW1ghAKe",
  "key28": "4VQqtuMeKaVChvr19wXe6AYkUrFhEBrUi4UTULQwjFJdWgevDyFghGEi5QVBnVDbg7HWY5FEVozytyGzqmca6fCR",
  "key29": "2EbPDSyQLngzr2SxAvNaoX7zLMVd4sEch9yukQASXw9CDx8RsNUhzzkukZE5aXcXvtQrH9AZqXdLWEhvC7cov79g"
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
