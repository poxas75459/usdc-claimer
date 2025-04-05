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
    "5XG7fqk6TPiLDwYvnm7mRLY7attBtKoR7J1SvZZ94QYx8tn1JEhPLyerDKnjSPwr2fTvgPNdEi3Trsqu8TMjR2yd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5apYywy4mzJMMrof9AjkiycHEHL2NUgR5Bi1fmbmp1QzzK6T9hWPBXFXL61xCpmtKAgzC73yyZeonePKFg2nG3ML",
  "key1": "2Hzo7VSsiupJfPgrq8DLzmuSNN7isXoAhTHKirMCNDSHwzTGCyr1ViYVNXRdTEBZBPCGSt8FFqtq7FCxQJvzwJSj",
  "key2": "27ck8vFBx5jgBwVuviVocpcvrECqTXyibxZhfZtzu2WFqkBoPM6c7HigNdZDzEzLQfgNv3AcPyupBhE5vfepjD5d",
  "key3": "ntHEQJQRaDbFXMCrLoqeWCg5vr3c27L7Z2EibUmFeVEqR4nvyVS4U3ixwyo1uZwrZqoDFTmtPqkaXchKGm2jZnk",
  "key4": "cEL98cYVuBBLqoA4F9uyMANyT46URNvf9w6cAutJWTvUbrDEtSxcqGSPYkcx3uU21AvnvkGdeED6etyGD4QfLGE",
  "key5": "31kED2iu2yUjMWXczpi3jypfaiaZUaq6QQ3bow91B2fZE1mHvnduqbtfdqaMo7jnhmJ1xdZ63ubUvQ9NWRxeRvKn",
  "key6": "4ZYLdFt6CvPgPPS6cJRetesYTT3zngDgA3cizSrfW48DDRzYMFToj7mzLvJqFMD1kvsHTBWCnEQDtgBvw8kZCs4X",
  "key7": "3ZqPneuUwWi8CHXBZisB7YQt6MrxcEJAmHpvCUz9BRmrVcGEEtSUg1UubqZpgK1C23TSz3RkBbbwmca3iFNbRDVg",
  "key8": "2bYUgeWS8iJ44iVR28c8XcAyfjLXD28N7mALmMZH2sR9DqfuxuyGCe7KXsXvjndwQJzwmi6v8jXc9Zhjf14DwA4w",
  "key9": "549URnP8hTazzGyH7192EwFpkF1j4HGn9CHxe6d6wpp62UCnsVgZ9RHGEvuuiSSrTAUAsoFJTm6oJ1nCatHa5WpC",
  "key10": "5ejLCpVqyh3UgEwXZGEkHcAnCGNqYXiDvFGbQQHDmJybKazV3wPbQJa1kAp8W5C1s9QUdm5BhEpaXBq8G5APbZ5Z",
  "key11": "4gyvnDbYV53C6Vo3DCNa4MqmtHkdFdmfnfyptX2ySsJH1n2QHbmGx2uEecZ82ciikngAQnuTg8H7gyVLADnzBPLz",
  "key12": "519n4zAGm3Sum7fsEsoYD3KtuYmMa64WAqJwXJCXwnR3cS3TuDR1rGMrtmpQNq2PVdeH1A3XocrKmmFu16H3Ut31",
  "key13": "72nR32os9Y3fkQ1qdtThoBwgD9EkRovmpMyb6bKTjd361jmqQrhfbxhLCKYcxSK9syt7BSXDVQdPRMQcoP7Wo7p",
  "key14": "2NGyaTUTZZVdjdcGU4GmxHdgDKNJjzL9Tmk2fC2C5eSrM8J1BFqbCwqz8oWmR3iHZsdXy3K5J6GXTiLfg7ZLic1D",
  "key15": "5mvJDndZMY4NEQfABM6SwQqne3AEteceUhSFzexmtNMsG66q1SxLiFv6QFm86dJHyB6FG4KcbQDSDToozDo7idDG",
  "key16": "2tfsbZNxa5K2A3jSAh5suoMi4LLmJDhzG45SexWLd2STrHMrb51J4A72M5qSnqVhZW3enAKSyursQaPP9FCFcWrk",
  "key17": "4jGRjesK16VnFQvmL2CRVxy1FaNp54skGNHnEkvQLbd4wxgkvRfeKx2ogpLGtRoeU2JWU2rTxA7HEjfrFTEXNXif",
  "key18": "4onkGN2Lg4HXfHJEqfJoU6tJErzuC6sFtPpv4L2SgCXtABxCw3rrpimdrZgkCFB6hgHrcY6ktB7kefyM8WafXAkM",
  "key19": "5GGQ52kc6wtMHuEAkGMuUZMBjRLN4gPrdi2MshugPwteNbaVUEwDzE287VnQ3DUdRmHsEcPifvjRrrmsLfcNV2HG",
  "key20": "2WqYTrVFabwHHxbuLTmdBumrYSWKhrZpDuta4SscuzzDj658JU82ZfHZJbYfU4Wv6cu5m3QkAGECp96bQwWqxCqe",
  "key21": "25N6XoqNAepUE6z9HmFqGpZeo7LBzsZKb3x6x5PGdpVD45vz6H8nYHstoEgBjNFEehMHGmHdxmEHmMQYYXgsFNR9",
  "key22": "44pQuFAyWgUDCAymvx1F3yqPecUseQ9msTXBJ5JZQ5x4e4GKEKqjaJPWgVfrdNRzRrMkiNhwqqdnJ47xfzt8Ebmw",
  "key23": "2DRXX4Zy8uUoh6eceX5g4FwU1VNR1wwzdTs95gDLDmBgsTZcmMKtU994kDyf54XDVxCuHGGdYLXGWTv4FgSetJs4",
  "key24": "yqFTEAbxH3vYuVaZvt2wgmCPYp4u7JbtD4te48SpshYdKpBdHUeaLJbizmpL64gb7icP7sZmqFsBfXJExj3DcQU",
  "key25": "5HGZRD7VYeSbwRoqeiLbRKDaySikrg7D6KxZuE7kTiKrTCUeVnAkvpYg681fj3uRkxXDy5P9SkqYihbk2pAQQsww",
  "key26": "3PoW3as2m9L8uRHyKCamRtRTWByUmXkfUDXLScFmNLT2DXf9EYVU4LswXrtbtC7wqYMjR8TkzDc9y6BsXVzv5V3b",
  "key27": "52YtAp4KZtVmryD4K3BiZFBgGEE3hKTXu4aJRuaCQqVrgkJ2PS7xmv7yFSETW7K8vJjxvrg8SFGjFhnAraSCuSip",
  "key28": "2V4qakFhkAGhm9S76aP1XQ8FUHX4wJZC3WAfxFfqLuPq1i5cGbTiYjAMTgXLayjL2xoA6YA1Vz3VHyGCDn1nXa5T",
  "key29": "3kSv7hDeKCQkW3SchSff58uh2HDsZEp3xgFCVMxPugKEYiSmNiMkMkbWca5TQrUdcFwn1rwuuGAQucg3HAB97De1",
  "key30": "26hj5GE3vtUpoB2caeZrvtTSDpvNjMN1WGNZhrFPY8qbAADUbNAVZM2BbDWj56L31WwEeodLWC9hxxPK5A7hgGqy"
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
