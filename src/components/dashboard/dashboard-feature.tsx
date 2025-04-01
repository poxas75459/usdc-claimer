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
    "669iSA1Jeb31xnpkct7cmrq7KEupF4UKyvU29AHnh3qewchjcfXXyCLoPq3NU6N4RmG21uvLgSUV3ZgGY5Hch89D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65qtko4VMXjdHmRT9nxwHDstNTRfBg6poXKwQT73EF3YD8TX55sAyeiBKAA6XammmiYZQcPXxfM8yToixzSM4Gxn",
  "key1": "3focycSo5Ba3VUeTJGqMKH8aETfsxfgfReoRo45eFKQKXYEyAKYyqq6CYCjFnDcYuusjRJDFZeFpiyrgGjPDKGVC",
  "key2": "2NAM9WgEMuY8dMbhSbSTgpVm4jgrBmigNqKZDfnJtXx6QmvGEY94Z8fd447z98ij7SpDPbQiaja9Amr6gtkCtYrh",
  "key3": "2MdKKhz6UBhB4UatRwsd7wsGFSL1w2XpRTdC5SoYP7sTA5L4j5qeCgkWdy4PkEToWZ76GCaYWH45V4Sh2p2pxGJz",
  "key4": "5VHRfKqSPwiJN1Vz2sTRPmLLvi2pzEzZKc7rEVRE8C1jy5gT54UdCK6oxP6NJb1ce1UnPWJ5JjuLeeDqnG9XBPUR",
  "key5": "38dQdUQCCc1STevALCf66mhuh4cqdS3pzj3kqakvkSSgpuhMR6xX6W2GMi2dHZnHCPRPejKYcFDto5hRdaTKrKjy",
  "key6": "3L7gdL6R1KBDorht4ECSjsDa8hrY41i1x5EU6WebsWqEYYSsj93yatsNUFoY841R9iTefRTEYQ8j2LiDC1tVfPCC",
  "key7": "aeg8NBXocpZmLZGdbnLaxcACDcZH8HijuMMZVcx9y1fzACQ1b1fLTwmgvCpSoQE1gLPHvijyNaqwiA7Qnk5kfVg",
  "key8": "4rH1fgjWpvPDcy4romMPtCcnexvBK4VGsUmazTAeBh2S2bBgUgx3Dr9K31ingVULR7Gk4PXYRwDB9YzXuGQwLrMn",
  "key9": "36PJfGhpJ2HS1BgMwNkhb5M5KMFU3s34YA3KsPb7HrvTLayZu73np1x9cJaTz25dfHUugPzTofFVYP352ouoyvUn",
  "key10": "3BuwVTbGpjewn4V3jwVg7HFGDpjqEFeTspuFxndauS6DSG8S8BrHthZ8JJ79SUnSHpWJ8z2kgkZJLmiwAFoT5KjX",
  "key11": "4bsfxUNSLUqqZWaTvtjoN1S9Jo4B7PJB2BAmm1Lx1agq4EwtGkHNgffvsD8i1mPv4qVGaLA2jquMta47zZdedYJm",
  "key12": "2eTxUUBuVMgosrRSKurUAPoYW9w7Zq8fMcxDxvhK5Q6aw8wJ2rzZCeH9umNXEiQWqgXsYT8efhqHHjrKtAN8AP7D",
  "key13": "kyyX9wWQRLzDNvgbMkeLDd6HBXTeYfv8fjN1CUFKNUnJaHakUznnN2tPy2rZmjEe5hV3C4BWR2Tw6pgGibjCJ7J",
  "key14": "22qdN5mTAM6m6yti3dSvZgAT9JUCyvYxCwJ4iKdHNKRMeFzssm7X9mXhtQb2dF8X3njf7aKjRq9bS4K6QUQnsaE3",
  "key15": "2vdp9C5QTv9cwWhz3j8ghj7j5EvqsDByfWtGs8afRJ3uGzEiWcfKR4d9fr4fTvBtfkZndXaQDU67R4keT4SM88DM",
  "key16": "QMuPPPnnGYccFMz9LRB4RvFyA6ysBgMa7mwPixYP3gxS36PkgUg4XEREY1DKoXCtXrFGVL7qJyQHsh6CasakFwT",
  "key17": "4EPYM1YAKufy7HJ7aMhA8tFtGEDTEJmSkcZtepdsS4qLKaRpih4oga2UxhWuX6NoqcU2VnRyauamJiwEr4EKHERa",
  "key18": "2ihMSDrmeSt6tC2hnUBccDC6tUyqZEjkVadgxGp24QXjHxurWGNzJmDPX45tsevcbRqsfjun5WzcDc5RxkE5jyAA",
  "key19": "cHA4Hre21kYAETwCoJi5nggjsxU6Hp9Y9a3enwuzz9Z38xFX3NJpmH7qbDWPQp3dz8raPnGWMkAidf1mo9Ra2my",
  "key20": "3C8E6UzbGy2JgKRGaQccnCRxTJfqgwq5UM51XzwFo45iuprAPhE9kYrCBZQ3FMPc5rwuihHaSoKjBSmdqwTw8jc6",
  "key21": "3GwGf2q5BALTSAGE6kDUtaSXfNCdxK5MsUBXxbXCmA89kx7oD5qfJruFhZ9519o8hhbRvuBZ6sVF6U68e7UrKR54",
  "key22": "5pUuAD1GWWGjLr73az4Umem2GUdNJtQTXifMY8jJLDe4d84pNgVGZKkTF9wF4KJyXS4sJM533V1yqr7w4bgMf4yK",
  "key23": "5igrGMo6SLbySLL7r2uJuiUVGorfnnys7EhhUfeEsqbm1kTXJPX6ia9Kvabu6hN2p8G4vxaaSTXZwwJQbnW3BAr",
  "key24": "QjSo29cPmCuKNA2cqwHAymqvJ9zhzmjrvkTyDDrjCFPcUG4P2i43cmW59fZSFj7687MfbbAijseHm7gDGYkFRyF",
  "key25": "2hYeVbqWhwTL8FB2LMrQhmJWeiE2eiLZ3ZkPRvMSXmhd4dFwGVpcMixJKqZEhXgFCmJqpGTsjVWqSp1SRMKufutm",
  "key26": "3YvSVpEytpxvoMPnBnNQGPpTTSRv8TpEzwz4ZAU6m7JEtU9c6eyyai7qZf8CtY4M8Q4YrYZuZ4KSmkuW9syzZ1Cm",
  "key27": "37zmPkunQAtVEYTfw9gFz8gKCi99PVR6rw8HMe96xMjQDgMwXMziuti4wLgi71pXaLf556Yo6hS6HhCTc51ZxgTX",
  "key28": "3KG3L3ke4gNV269Zj9X1kXXpS5JePufD2N7R2Jb66YGwFakTjwkRF7mJi2rDK39CqjcfBgMPsQtQWg1i4xCoQG5K"
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
