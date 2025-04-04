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
    "QWU2yEzRzzQj7bncUF8jwfiTNkLK3ohq2tCEfL1mHifpiMJyAKhzvx7N3CQwunKSCJsuzq87PQ96oyUPNyZ2DPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BjXJ64VLC3PkDqyyyCCTuV4BjQZpYzu8KE6q4VfeEP6YQAYnokbVQE2g8CL1uWqHhbAssTD5CnrfniAN9C6u5Zv",
  "key1": "28u6oA6gdYe1VTPfRV3jMCZfK3idxeZnFb13zFSShjJEqKebyXecc3HgNyjbzAUyr4iH1q133FosGzhRY1D3kUwy",
  "key2": "51enWwEaQSqMEyUvzRP7FM3BgUJjTXLo1Gv5BovicbpMMgdrqkc8ESzxjCz6erCduaWbRLRi52aJAZTcuSwo97aY",
  "key3": "4NjVW85aUvpsSJ8QiT1rdTDUdRCP3voG3cbNf96PupgNXLo574qSRvkoVw4TQVqXPcJjtB5c7PN3xUeP5rUKkpsH",
  "key4": "qHx1gugQvwwFAnp5RPdKtBhsiQNRb83rPe9VzisTgMu9PobBz3wwAYFxvHd4PmUL9ukya4K1QdU2RW14TtFqJUS",
  "key5": "4qpb9x7JY6tiQAvtJSsR2Liad7FvRFT6YSa39duTKYiNLVaZoX2231XPtPAibpHrzRoGfcrKR2bMdL5BLRSoB63P",
  "key6": "24Ut3yrGt99HZChLYbZkgL6ATNKEGGVJAkr5GAToe32nHuQkXSSWLhK4ESP7wNUe9r4hmDWjccMAC6L5R4TpYKWV",
  "key7": "3FayhBTMN6wooLj4BAv3rvuhCSz2LaepeYseuRvuaoV2Rm26xWSPsPjt2YFgN6eRR9zpZ8pEaE8sH1JcgqWWS8DJ",
  "key8": "2bcXYrKGvRnYnE15tuQwgJBphsqbAbn1n4VKqyy4g5HkBgYhhmgspYYR9jh6FcZWiY7s5GtMhf3Vz34rjkczziJV",
  "key9": "5KJuPHrku4MH3x9cj2r2N5Aya176vgbdCP599T5FiL1pzj8bG19bSYZAJnfF53aYp7psUSyQgyggqdnDC57Frg6o",
  "key10": "5475hPFFA9gpAUwwqogEWUQDnrEggB4mLcoEptHnaeTRv2b9hkH67ggZkhVL7pd6NrKkAABa9uuuM3Tye8rmr1Dc",
  "key11": "2KZooRWN5kANaEUQPUuJjNFiSznRx1vJaebRTS6zkKCdTuFfD5gDJvxdPeZdm2rJtudpNYDkRSy5qE7jZBxcLW5L",
  "key12": "5oeGisFqghaAPpdWZrdZzG2jNoZoE7L48FLeQwMpXs2QrXeiMAFDDiSxpnSb2DR6eiyDnr3t2FMegUULm6zvXgYW",
  "key13": "38Atb82mCJwJ5iifbLbuVCUzoeXjfopxyDuvBAuKQj8EQgkhYZe53tMmwLFxPoVcj19qtN5bX4xhFTtTfWcXwXnq",
  "key14": "3KQP7zAoUrNTqCznS57Lo62Qcy3xY5rDXzQFGwHqBhZV4Q3DwSdBuyQLvcpXZCRc6ngEWZw2NFSXwWNzBW9WC6SQ",
  "key15": "3uLhbZ7g7C87k99mQZ2qFJECMyXyve4bmKDqLNds3toogHgkV91TXnWnHiAhwNtiXi3gwzWaS2x14ezhZGn37U3h",
  "key16": "3UtgYPqzCiHiLVc5CLk5s5NMPCTiV3pYERkxSFj1cUBiXmdAz4dUmBUsngvaTsEpcMqQnSFB4C6XQViTV5AMp13K",
  "key17": "SPEWxcCgBMj1ZhqLyDqFmT3kRfks6VTxLXJ7Tn1e4Jtnu3w3CZVD48DnJgeVZdTkoLkurKukumbGZAqZfMVd912",
  "key18": "66UFcnRphXVU9d1j5eLngjSf4nghbLfkAf6V3aDNcZC7sb3R27c9EVpqHKVudWYBoiZN5stcyBCaV9yahQEC2jCB",
  "key19": "2ngV1KHXu2NU7D5BwdXSSMSitHoU8cDeq58ZH8wwae6VTUuakxkfLV2791rXnS65GchD4JGzN5SB1z5e1eGJbdeM",
  "key20": "243tdvTj44ibtqYghXphaKxG264mCXeWHxUQrxqvWhFV3bAduQQjFbfZ6rnfp2ApLhwqS2sniXMG9rGoj3YNV5XR",
  "key21": "4gwzYJ9c2jXEX1hxcTnkntqNKeHkLL2VuefzZaqmTf9z6MKruT9iSyrd8zAmh1VXP4QaobWjSewvdAcnd3GZRZcs",
  "key22": "5AfBCFJVV4bLLgZgtApCNNTCFPDszuPQXDhLbRkDUfvC6idEzp5xqndWevixmvJN32YAa8JEKx4AmCoYzCTuaKd6",
  "key23": "5TtYaHaSXW45md5MrjmXKFZx9iSkCtW1mpJtM71ArxkRNUYTHP9WEn5ecwn5xq3pfotsqz1T3GJSJtxMaaLhN9Sr",
  "key24": "2MVm2J3rhTkTAHJLdSRPry2NKyoiQ8iQm4Uq2ixQ6RpPAjPMPciaT9m3aoBhWT2EiBnDCsUdw4JyTUYu3B4WfUdh",
  "key25": "X4vmUM6qYKUuQyHctPnUn74fmXhVvV4j4CAjZTT76Eiv7PckoC19x7GC3KRh573FEMUbyg87cvtQhUssR2W3xHM"
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
