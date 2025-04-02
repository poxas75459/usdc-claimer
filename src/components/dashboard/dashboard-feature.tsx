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
    "4EnwUc9fst5jK2ptECVEPLvATRS9Ei1VANh37prYyBQKFD7RWLVFarhg8pR1nsPQtD7VPRwuL1eigi4RusbJoGcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34mwVpA7MgwP4o7uvCSW8tjgShGYFgkqTX1nhZzED8aL9eMkyk8dFw1FsqSHgmWa8chMYANDW2buHjH9LTygBFEU",
  "key1": "Zt8GFYACgC6T5aDahzkBmrmM3bowNzcqByDtwB2x2Hfe1uDtjF3uSRxU3ipqPiqkwpDJF3uQQ9w6f5EV24Bq8Kc",
  "key2": "1cyiFxd4tovpLTdEQ5Ku7bsKLXUrSSbuBE7GMDD55Gr1H5Xp8hsUUey19rd7NsiaV31UeiGRMfz43pM3gqzNLZV",
  "key3": "AcksAjFNuc7e7xWb57pXRcXbiQFUXmrXX85MJ5oiHTiXuEvdwf8dWjv1v9ev32LB9HCPNTW8ZPdiLwi8Xx4GGu1",
  "key4": "32pkv169ybKjeVVTWdvUCsTbkiDPwzNfTNATUwz2mEqMzj7CAtyjd4kVaFQda6ptQVjoG9xfaLDXEddPduGedpy4",
  "key5": "2eNuz6dz47qV6BJXd8D22KDQkNUBgLQyiaWKC2JX7Cc3exZwr8t3gvwejYojrocHrj2CCg54VbN45S6bN1LdDziu",
  "key6": "rseXZimkPt1u2gxp9yVSmmsPptnWHKNghWGc6eL2dXqAB9n2fHghVo9UdhYVGGSPNPDtra9W3tDBBuMA5Hcuj7w",
  "key7": "3tzMUFEQTdV7H1BpgayDvtddyWwASxF7WfVnb7kBmzX5RNiPJf2wDTiZFLsgNajeCL8Gif3NN2YxizM8DMNrntLY",
  "key8": "39MLLkGP9cyqHSGyfpkXXxRhno2Gi4gY2bxfueRDkoxAedqqs5KAMQAdVES6BcSHwiNFqME26tFBp4w4roUdTJYJ",
  "key9": "4aJPRoUxmQjzxovQ5zp7cZoJdChq6W5H3diLyLmU6r1M5omwA3RyiFU73GWokkSk5JLGvvJhKM2eMsPciex6sepF",
  "key10": "3U1uGJZ555DfjdxWsk229rWvnCtSEsfxGzk9kQR8oA57fbKi6fEQzG9hnrFzAiu7LTsmckwQY1gygzTEWPitZgWS",
  "key11": "5AuAW86SUghUYNVQXeLy3YHSudmYY6ymTqFgSEfHhx7oNsd3UWGvHvLuwYFS2be89crj1uFE6F3WeY8NfTEJRyjT",
  "key12": "4d2gnyEPyV4GAbaPVF2yFYkFEeh1sGusVSvcMFmy4WVhYDJ9RgfMpCVbjN3xecfxPJy5YaYYHSZyJXnXoG6uE5ZY",
  "key13": "4xsb6ykWELQC7eDA38U7vNY25txCBHADb25fy55bJSsuDbAdHEc8rMeB5yUN3w6d5mcEukCDXW1Ea9i5WMEmRmEe",
  "key14": "dbAb16gcxyyGERg4ZL9M3GcYxdtLEBAoKyhbMvnEXuzVxxqQuK3vXg3Mp4LaXtSxfEUQ4zjHNy3oSHMuEskpkVM",
  "key15": "3afF7Z4mve6mX7Hp8SAtfdEcebPmvxt1QJrnBv8yaQazSReXR7gRHn2SfZ8PcMCv5ezg2JnqVjrnd7SKEkntB8kS",
  "key16": "4Lcpd3fZYKjR12xQjriHTUWUF4i62LRViCD4LPBXA781LRm47r2b3u2g15XHLCzQWfx1McXuxEFmBQucCyBLTtrV",
  "key17": "2oYhQGq9TNDLnhP2kRPNTts2YwiXgiA74ew7J4eVRJRRQbix9McDaguo1xbpY2njhZ4qQumXNKKPiGPDymWJe3NX",
  "key18": "2gmjdsBxDQgdhdYymmQgafNvnwZ4AUYsjEKjXEuzYXAqMsH7zvvPd3XUwZX8rJc2uvXcNME9rniscgqUQSFdSjvX",
  "key19": "4TQuc37mYLHPLFSspi8Rspa1mLh1m6CBd4TQn4LAQBnAntL1spFaq4hfAaikr7tvApAMkq1HwQrU3qUjwFG6nTb5",
  "key20": "3W3NPf3WGbtwPM79uT1wS1LHyY6RKfjaoS1bL6uQ1DkEg86bCN5Cwb4e4mDAuF1tnYtJHK1tfXfursc1aDfT3m8N",
  "key21": "3vBiebne2PvrGN8pcmDiHuLZM6ptCFycnx8DL4ZCbEiseSVboBYC1sE2g6Sdhh5v1vp6KAHe9Y9Em2ZDDejkYZY9",
  "key22": "4Ag99K5VQ333Tdd5de1H8o3Ge83QiPJm7xsTrGT7YzLyLNmgSAS8c1WKbTbB6w26wYgA4ebhw5b5eELcJLp8aiu9",
  "key23": "4wE7QLxE2My5BHLaPAbwKnoi84a98xMQVxqESJFyiMN8coLLgyXs3Hs7Cg9Rvo49pXwEZPcEyVPEonqd8aA4sDJ2",
  "key24": "7k4DMLchWHLfTRFYKk5DkmpMD893UP6wwg7dUWEWeUdLBmtTbvy6kAGsLc6xDMuugkNidBPUzoCrN2GwihbeFTQ",
  "key25": "4FNhNuxcUuPUVeUYxj9e3tfhjs6hSLjnbBXjJP5ddUXcMkEuFBXzbodUjPfkQv9Gh9EiQXgvX5bmXJhC3h3Q695C",
  "key26": "36jxsMeZTC6ZBkoQSbFy89mShmonS63xtepKmJFGDgvfwLxkQJ551WriiE4SaZixWPgwpub6oqwCMeMASggfqsQi",
  "key27": "NB3nccGuJLxCWQ5Bsr8rBLfReC7ykJpxwRWNNqhmY6uWPgCkBoA5z8c2DEVRgwZEbb4i5pdtejZaL9YTMx4j4Xn",
  "key28": "3HMdnVMcZBNstfiF4W4W3Ari8EUK1dD2CBSCut9hH64g6Rt6Jrc2kYWhmn92Vj9kPXznMaSYvbpqiZ6M8WYNbsZb"
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
