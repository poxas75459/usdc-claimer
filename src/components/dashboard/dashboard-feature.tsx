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
    "2vUsjKHF5LQxbzazmXKkLnRjGqvDv5Gamyuf9nNDfiGGToQmAHoeRERJTuJFKqLL5nr3KibYy3Uv9bn2SC4KHsdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QY5k4kfTNN6AqYaHYN5UYrKsHcGZUwz9Uuw5yqhD7kRympK28ubT9oVbiEJLn6djsGDAyzDYvoo2zaGADhgA1uU",
  "key1": "2oayEVmY2wk8SVRcyKsXSofo7wLhs49MJhAAexokGsWUsDrh5iJj9hJpdAsQdYHim3rKjBxdsmx49zqL1AcaZoa9",
  "key2": "KmvuonzoxTfQmKuvQU5Q1RPNicbnoN2WBX5vtBLsyi56sxp6afhLgJfbHxPCNpxQbvZ6hAx2STSoNwfExLBsq2g",
  "key3": "2SZchHs2TdHzpVdQkrstsKvkdoPiJQtca4BvDbR7xMpiaBDw9kMuXk3ULJsT72xg5Y6Ksj9Qia3dqm48Sa9ESFgQ",
  "key4": "2Fe3QbPzBkvuMmahcj6DM9FUoXFL9W6VQ97nFe63ezaaYspV6hNBwfR9hthVgSsBk3ECUboXhvfMEyFcc9srNaaB",
  "key5": "gG9u4J2iKk9jFaDQj9tAK7rs7nojGpc7xZeY2b312JhQJzc9r2KKePXapRV24Lhjx2tUE4C9QWy4i6DdUBRboRb",
  "key6": "2sro1rQuHu3uecWhjch3T1VVzWXohjdK63kX9i59hdcmALKH8hDyJrhqqgmwVxSgYav9UHcw897rbsJUJuKVWMT9",
  "key7": "3viawRJVmLFLk4PCQpCCAhZMXnJv5ZTcKaVP3iUYhF7eGvhyyVwHEvxZLDReei4toFcxFY6gT8GwNafbJGvZPK8x",
  "key8": "5Sz7rKn1isUEHPLcoDSdeqhw1SToyTKSKYE1cJ39GLERw8W8gvzXgMNpk8oAjdpLEgkBESLA55i1RfXb3aBNbYxE",
  "key9": "5RigVg5q6jY2pDSM2ezBmxQU9Qd1VGD71BtP82FSNZJSK7MVfHWntDieKPV95ZzXpWQ2M49XrpaNcMTa5RQMjyRz",
  "key10": "VfcWyHahsNgoT4d5VWE1fuWiAATDJuxoqjzcr15ZhotQnxYXtYoFxBcSoH8bA5RcCgfR392H4vSQ9x5NhJmXTPT",
  "key11": "4jABdQzd4WGmZvWGdruZcCprm1vg25eX3X4GiC1B1zwPMUkSoscjHK6rSXyMB9Gmf7dQC6tvRqE2gWTJ6fimccY7",
  "key12": "w1yyyt5MRFvuzjK2TAmjBqiHpB34KVAaLLxUDzU89JXvGBL3zayjoVuPfLiNZrQdSRCFQazBr8PPwgiqLg4N8Xj",
  "key13": "3PfB2GoFfoRiedBPhvsELB8oUkLfmgSpwLhBTMfQ2JgoiNmig6NydbvyY9YvZkCWRscZy3Lhxa5bKdKy5XJDG71L",
  "key14": "4A7Er6gPKRUAq52BCDyvuiSAD6afCpmzfVS5yQAp7EFGcwH2PjnDVFzPFqXrgUrAYyQYNNUddgMYztZWR9u1WX8w",
  "key15": "2VqNP1CpVTbFVutwfwoWeF5qrUsvk4Red6AvsaXQBMPZV2A4QJRLfN8rWwtJtpFrJ9P6nrVWuUEPjCyhBqXwLTHi",
  "key16": "2d3GG5DpKxpT8pW8X9zE8B4wkyJJEUco1tDCHavp7DUn4PLqQbnwqzjAQ4XLbGDEjkSmX25nbKEUNcYVV9A4nAKu",
  "key17": "3egezG3Vf46FKAbXjWFjHWDkuob7efKzW28WfuDda1PLWBmKcJGGTx1ikPVP42gFSMM4p5iyi38eoECwc8m6rxjZ",
  "key18": "3x2LR9KB6XX1sgH6aWNXZqZjY9VEYWZagGuYmZWReFzPH2Pi29MMBRTKpyg91DXPhPkP5HWm4PWveXMxnDoKJKSs",
  "key19": "4KtCWpXhvP9Qv8iHwME5bm7dnEm38jDsTX1dpu21Dv3tgtAgiX6Z9ju9zrpD1RrfW3ZQp6GumrSXxM963zfkhGhX",
  "key20": "3F6BEvZiDaqLu9DU7ZLEPpB89Q2tRYiLQazB1kwqoqym9Jq42bix1SrWBagAdh7KmeRFHDeNhFpSVcuHt8YxSsqp",
  "key21": "44XeN7jqgfLZ3UVUyqesraXTVXX8bY9oaYx9WKF4pKJaSiUjmbV7y1FCLxxKxomuFNERFUdhGkrVwr3YELzZ1yf6",
  "key22": "er6mcg5pLW126f5Uuqt3dzWfztTdDyCCWTiHwYfEPJYMPFSAHfdaesTDiQ5ayfEBxtTdkWvC9f5hM8gBX8rngxB",
  "key23": "U2kmGpPM3uVjPnMH6iVLhbXQEFz86wdvkZrGmL5spBDSbKS1R3BrM7AtvLmsUZDtrhS2on6hDtxQdt2QjBidwiP",
  "key24": "5VPsDiAw4KPGu3C4rPTABztfR9CjYXLv4GH2Pn2vVRvDC8da8TqQaSRGekpsssmmf2aXAk9yfsBvsQ31MoBwMeHy",
  "key25": "cMk4BoB8X9cp7TzSxAaGbmXojQLCyeNdVoUhz9VVHcfVdsNejcCYntDS6M3RLYYpnxYeqvsS4dwakW6wRi49ayv",
  "key26": "2zBuh6dGdLLqGYYRKn13T87r2UvkDoeo2ozeHQ986q2z8tDrp9PGsJK2s1RCs4P2h3B95hmk6R4DW1CvWZ8dR6eW",
  "key27": "5tM39D83veRr38NEv7qjkfnDQJ3KpQAjVbSFMy8RSieTJEXcKvu329rjhH8UqjFuqShQ5Yt4UVtRreQm4UT2EVdX",
  "key28": "CnFYY2wMQmEzvqWG7CPv3wzaQnsnYWNBnuND7upPWAnhup3xDHP44RdTuzEvwxNdoSzptsfvSMMspvbUnAbJgAj",
  "key29": "558iqusGfDGXXaSoRP7ebVByhKHSeSXcR9Nwvgcbp3aUd2rVTEHmG4LVmUptE1qud2FP1fxyVm2LTe67PDfjPvc9",
  "key30": "3dZj4wrPfpGMJLr8TnYAi3AkMV2J7Myi1yyzn5LCyuheLyh2apJf3jagDc8CYVKdU8nZYZcPTY1rnNaGSCRo3Q8F",
  "key31": "XbNxYGWcAMcD3Q7nKamQRKWcPyp2J2kZBDsT3Zaz9GcbNHW9iXKZKwggJgrDoJDcuL2YeNg8riaVJsUWfjYUTxT",
  "key32": "CqBv1czqHKqo1ddsr7HmRBtZHWmnwSJUjWWZydffmpMMn1veK57LJ3Vf13JtGVKZsjqypSfSrFE2x4w9V6Dq96u",
  "key33": "3cftMcPdVtM8FewQR396D2u5bwt3xHdsGLFks4vH2JAwqocwoSzDri5Mv8o8PzzFmgESEkBHMYAZAH9KQ8bJWBQc",
  "key34": "5eXw2ch31dmMHzZNs1dVPNs3dM16CHkhZK1VCv4FS8232uVrwzUd5ywozjyxMmigg9GVWuVAJB9pnPzUTjzbbDuP",
  "key35": "4haRwpC6XVt8nrURjsQJJQc3wUnccUCqZ4Kj5rrpWcox3nusWYpDH7saWMd1pQy6pzbsWAPZtAmJh2FUi9uATXMS",
  "key36": "KFeBkoM1P2qvmwFt3bdgkWhyXWF1iPeBvvbcAzGuR5C4TqDWXYo8TV3sc5yU7s9LUmFiG66QpD6S8MT9kagWLz6",
  "key37": "sdVFTzk4kssKu4pkNMxLsKNr2UTHaCBGpFM19qpQnwr6fzxXBVdoor8yhZYEBLdqNfoaTfGbPfLXVHP43sFqEtQ"
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
