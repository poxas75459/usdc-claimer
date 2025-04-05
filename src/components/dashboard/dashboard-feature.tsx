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
    "2od1MGyp5kkx4SfUGJbH9sDjWdSKCfhKhAJGAJsjmGwSd4P38rvNkDTdhWzGBptAgzVcwfoHTiv4uhgymCSLzU88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ME7pYPwyvKcwJeiADwrAWGUB6wKcBm5zeFkUwKYxs3ZQ5MH2uU4JtUfatVxf5rSUpPMGGMwzqsi6sjakyq6EPtq",
  "key1": "2ibYEk88CukAXqVbtBrCmpVYqYoUZTRJeizsMupX5fpU22N13LsaK28kVGwNQEfgRkdcccSHPcLMDCtUnWL2XuVv",
  "key2": "pRuGBoFoEqwBDHXVBdQ5KfJch432qgUdvkByKjRKAooFzkoWC82KWYdibLPowtoWfsZ6ppT9tJCSdQ6T631E1fr",
  "key3": "3RMdAfRQjEogRooBDLMytQsxzKxXs4iUWUYLm7cX4HcHsnPRN2EBwY4kCNHuQXuMGnk4inmSdCPBHq5gCMPnNeWX",
  "key4": "VcWNTBG8SKNC2YrrhrdQvzGQZe52vjWu6m1xqGk5BRmsbW3bZ1qookbTQnLMxcoBQgj2sUAcXncgrjZ71CFd3uN",
  "key5": "43SdtfNh4thuFLeQACDY887rkCkDk5wKmGDpmo527ZeHHaA6WS9JpLicsrVCxqmsw2HUU1qXq1HDmuZgGeoYfZGf",
  "key6": "HfQEeRKqAUN82EWVfKfrwBQAnUecbCJHpPqYLRs2TfZdNjanFcqucSavwfo49zLsgVn3bae2uuaRMuaLBEAoYXr",
  "key7": "246DxM1TdJ7TWUhc5hvBhJ917855zjnnnuFW9441D8AXdPEhEDMFcQ3HzJw363b7VAie4Vxi5UMnpvC1misDfQP9",
  "key8": "4Eiet3u1WM86hqSNdvpPUcUVLPBNB2CQStZUh7wVkr36KSpWz8zfVsDvpFWHSUwURujD3Nmyu64s2LzK5Ph5p519",
  "key9": "5vJCage2D3Y6gfxHptdeNPG221wrB6GCTMZDvUawnCfGMs3qZtYWdqsbkyuSPZ5rNDz2aduo6AE9NbAmWivgfe9u",
  "key10": "4sVpF6okpfXs3Jpe3BQHApVi1J7pCjbS378EwWPPrNEoCuPn8SK114yeeerMtFfUv7FMp6Fs7kMqoZLGCAPQAppb",
  "key11": "2vxaXThH4PFEQhAW6njHB997u7nciptfEwt1pNjTsoKYLHDF9YvXdfvtx83dDdnY8gjrf95ND6QRFurD5LhagDUH",
  "key12": "45H4UQdjLS5PVgEFNiHMiu9vLSoWUtopDpTec2Lt4jqEVcQnD8EYG5y3WHrbeoQGink5r3z6tjjWyrFiJeqGcuw2",
  "key13": "5vCK8ezgkSY15UMrPzikMhfu48GdTtp6XRDrRLUMe9AnsVFgaQskog75MMpGzp4V3APUcNvqP8SiCfifTaTpBmRf",
  "key14": "4wfyG2tGJDJxnPrypzhKcGqBsrkXv1zS8ULomPVCA3GudU21zhw7JTKWHgrZ7kF4GuVxUTjkx8XDpeVtCNm1qHq8",
  "key15": "32n5zkeJRqJWKwsHuLNqAJHsy9216ffSxENDdJ71TGfwtGx8cSxyN4Sv21dqUUYdCVJmxVhtQ2q8Py5wLdNJRAsE",
  "key16": "huNUCRCAWv6ExVtEmC8drCscZjHu46218fs3UFwVMA67WyJHa5yCtqu5mGHiqPZ8E6KQTfVkEs3EQBN1twagFE8",
  "key17": "Dxs4cZnU8Fi2qc9CfurnYg8fKyMjySGSAk8AhWBVSZ5XYFSzzU5CG63xkYpzuodWh37qsVdZouSzdyapwB72fwa",
  "key18": "4LppJkxsNbibGb6oi2npRpWoMh4EYqg5saJcdwomPTiQZfawPEvkZN8bi43J2fZSKpuzv5LG1LdiUnov7g4K7aoS",
  "key19": "2G2aP36T9LTF1DHZLdLWgaxy4mQZmh3rK5cYp8xA2u7a97Yv3TWi9e1QeufjYNTPt8MSVgPyG6XY78QLJXDD9yBr",
  "key20": "2fMpqRhJwzY2mv6YeTKo5HgVrGy2NEZhMQDMATEiv5m9JbNh47j2v4dJxkna1Zq3AePM5LWzBPbZTCEAYvx8HD36",
  "key21": "2KjWuT1A5EGZd444wQi9fwfbXm8izSvS6e5mM73BLfi4ikSvA5ZLZ7XDsFrgNWCs7H7nxQJZKiNMds7TSnS5QLSM",
  "key22": "Yh4HybHc7bFXUCYiqmpRxdqCEezFg516XMm5e5j2BFA2n2Qtq6VxH5CNBFJbdr1CRaxcCCihpjXLZNDAm89vKme",
  "key23": "vCPkJtGKduy5Viq2hb4gvbrgbVsqXMi6TbFrkejQfGZ15j2F2whinm6wAtbv3xnan3fitMj3wQvMeXQwFrECFPi",
  "key24": "4oUoM645gjvPL27Q6dezYo8iU4bi947pyojosJ274Rdhy7jcVBCtdBxZTvf67oR8WCzHdG9LZQLQhXRug38dYr4S",
  "key25": "5EPfLwzrNXpUrnAeSdkiPdN1uq7exPcEvejjGGc4ZhTQhVH95twJin3shuipQhFB4tRWKQBDuroQfRX2ZWAn9WLj",
  "key26": "5WGUcZ8gswr2VQkdnruZBf2Q92dCPuTm9JLBVtSAxJrJurEGtfcJyYf4Q9ZjuGhDNxYNU3UFkrnp27qXfSwc931c",
  "key27": "4MaEwPYQng7tgZ7hted48QoyFMi1JQQMv9VxhZMzkQY5uC24RvdeEGK1eRSXgWQLDMCsQgrSS9cM4GH45VkYtGsL",
  "key28": "4Sabnv5nVg1SidDkU96WifELrjFqZKeE5CejNY2xhfXitEHkRu9KRRs3P8jGx9Vp2Dt6wdaKYNNdNgejVyFZmRXR",
  "key29": "2PGFf5yfetMAwiiLtMi513SzaKJnAbnJaB4QRB6a3nhbpUU6PVVhXQhWUy3xsXMHMakY89GHTkn2RBmLbwoT6KKo",
  "key30": "5BR88RPMeT6KQ6syFHDq2Z8tGxkxfSGYST4pSuvb6bERCZt1y2JRxJvKwbDKH5QdMS3RxavxenFNNSzthLzdAHc7",
  "key31": "47c4VAmcVpsPNSiyEcfaAQTNYmD41H49J8pwkSJBrFPHnNvQ7s2L9tjR8gf3Kj34gcUko77yQTgVzBYA65tabcwd",
  "key32": "cfKGMkWuJzBLszWuKAkjyjmjUheVYBatKDbmJL45Z1HQATTyx7k2Wgz3QHnEUJFP51iAeAyXP4tp4Gii67s15aN",
  "key33": "jVY78tznSNpCqoeK1LensgFDbjkT6LmAafbmRvZuyE9Th9AVatpUgPjBGHQUAMG5g6CZ6bTf8mzj1U7aqgrhH3G",
  "key34": "5nXtQ88sksMqKmXpA9gx49He2PArwBdiX6mL25Haq55VuJiiqCncVorDbv5ZrfFDvsCbAkKxkRgyNSGkfcMWL5MM",
  "key35": "3GNWhVCG3FZoCwaGnpSoLr75zUZeeUYt2JNvLPm9TBSH9ugRgdWbEXJdhj4wyqyqJU5LXghqNSpGUpmov14W1NzL",
  "key36": "ynWt87x7vKUrm4LLmmz6Nt7mXPp9zVDyTH5w7PkAYLgDJ4NmEGV7Tzuq4bYZYKcxAEejzXi5y6nAU1EDRpBZ4vq",
  "key37": "4FVE4vvejzCwez2gWuLZPo26zPnX3dUcEHRtxR4NWZEuZ7Gn14wtFCM8cteuNi3gKp4efwMdGNUT1rwK4Gi97WC9",
  "key38": "2QNJrKR7mJVaHnnbuY3eVciBjRbEe5Z7DX3SJMMWjaXucvJsRkx4cxBJ5Eyaq8HdsUYFPpSmGEjLUz8mWEVLFNA8",
  "key39": "3X2e7whgSZVPAZXbFCYMcHfRzB1p2o8oaSVcaCYG5H1Q38PmCwbMrGE96vJ5HyQo6xghFLPjBwEPpJktvSiEqz7H",
  "key40": "2JBzCQE5h2MTkuCvr3Ty4hQWEV7dECnSEbhTjdGHPkppN2hTbc2kUGiz5htaasAJSNzg97nTAt9bznXwMVwo5Phf",
  "key41": "5T2rKeu71HY7wP9Q1upqDcncjdAFxnvcKy8L3AGcj5CGCpv8yCcuGDB73MdcSfSupNM3YUCbJpooRawb6Pz3DNLd",
  "key42": "4aKHrw7CHVtcFBNwP9Mh35WkuYzxc1zZ3hFgYfmn44KdCsaN1nvLEHsFm1uvKMiu8cjr5TQfu2W5mG7TBjMF4JqZ",
  "key43": "P7Txvovox4Km9gRuSeGJY6ZXTFRrUXMwdu9A1njVd5KqPcjWWjVjduJHX3SdymeC4wWin9sBZCqrD9YrgEehya4",
  "key44": "4KUnChk6bciopUVY25YVb5LpXqufU4uadDwz3XCAKw3hp51HWjLD8RGgkkH1PqCWXxNCsWUqoSmSGQFNqkdp2j4i"
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
