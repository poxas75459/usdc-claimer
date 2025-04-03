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
    "3dpR5F84U3MPgStQcYUKczhn9NmLKZTtf5LUucB5tjzKc4nzx5WABeDsyPtytTNBYCzM724qAyEnboaNSSB53nr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YvdA1qAP3Qaoz2fcTZoNrxszcbtySVWJUETztqbNUBELKMmSAZKL31DAHgiLCHWT4TriG3tipvvQ7m5rwZTggvB",
  "key1": "5u7TeWswtfnK7j3zDHqAzJpaWsP2n643MRyGPLSfDwUzMGghRwbyidszgNLZavCj5n6YbEsYRn8oeD1Q9NAWCx7k",
  "key2": "tJCRukY8zJD4PoUraRRjuer1LekXMopztKfmKeFee6Pr4FSvcUU8bzLE3eEfwo3sF6UwUidrc5ukiAgv2yJ53dt",
  "key3": "2j6RT97B1rAN1T3QRjNi3P8bcu4aqV6e8RjmGkGTpKR2DvMEduR2M3EaboW4X6qA7UBZTD4bNx3QnTNtoNCMbGKu",
  "key4": "4rGRiEGNqMK3gWxHrB7mtYpSXNycbxE2nwVjLpsH7rFXLv3JK2TJFZmNEcQFSUNjy4BEXLJtAZfTMrPxFWRFcCEo",
  "key5": "3ZfZRywegoDqT7FCUUL9tkjBk3GqLUPCDpxsdQRNGbtJmdoAEMCPo7P22DqCesEGazrpwMXgetS7DuB6HSkbPUAq",
  "key6": "4BgbQDFQohwe84gvsjjs96BDnffxtYsvUQhpjK3MToA91huDc4MdLsSt7Hq2i6jjJKWyDx2jTe18jCfZHdEnZeno",
  "key7": "2vn3CCH6YW3qyR4BKrcBuMp7FzbpJ6XRE1u1TU9MV5Ust6e2HuZHpumiFcLZPNXHMAfoxhnua5RZLGj1hT1XXXpo",
  "key8": "4eZL4xPbCcQaF6si9shYUCibVGfFyyHdWwodMENbamPwFLECo2bLmEZDSLTtgzmyzqaRij3fyiuhtKK9aRopzvjt",
  "key9": "4M83Suq5T2ng2r5bCze8eiJTUMyv5KU5NnBvPtAyJ4WAfdzLCe3kdZ9VUtxsgVm4updGBp7Aonzs1hwPRwEBdvVv",
  "key10": "GnWApXj3X6vVyi32aLi5Ne6XK9mKVSYSv4GnuQLztgkVbFYzS9Q6n9cj72V7RWEmo9byG1jcBWgV6TebNEgHU3d",
  "key11": "3sVewKdibU8kegfH4QCChKpD8KWgP3ptPuC9xRkJmBTX5hvHcBTwrTjPeQPnUjPZeMoW8khppEfxXeFLaP3GsUSs",
  "key12": "5NnMH1n5kUbbQJ6oyegNWm3RoxcAmdixScnzNaetqeGxdtwU43ejNqvUHVY24FFTpPzTuKmTEmuvtCSAQj2zTTLf",
  "key13": "qB56YLGjuJ5veMES3pT4eS78oAEDvLoHS7j5MunbJaf7E5dQ8YiFV2pQ4XNSpFRn8iQ9BfrYNV27JTqK8yNQ1PK",
  "key14": "4i7KGS7Twwa3NzjGZ9xcwbmjpwocRwq1MX4B2Rin4ZMyFqo4sBrzPmzJxvdnpbpgyGqNUKtR9rHASpt3Fkp3YUFy",
  "key15": "4fH6BDPnTftpdgWPrZydcKiFkougvFyJ3W3T2cwMQouDnKSt8mLeKYFyyrJ4UAekd3ccSUczBpV9HGqEjmTqdZE6",
  "key16": "HrACPciY2qxPEDbiTDfrNDc3cmXYEFxrhVz6Ec7t5vSjDHPqptWfMbWbddHLv5RJepcbUQSA92TSeki5SJ5mByE",
  "key17": "36C6WovDBTdeiHMEqtP26arbQacDTJpHf7r8WSkmRUC9nzwqW3Skir5NENWroFD5gyGYV9Kscvj3zyKEELrZXnL9",
  "key18": "2ofBj9iASVe9mePfSnpjAkieZtdNWUgCi8qVqAzopW15JryhqfDNAAr4mLE4ZovSHM4sZ5BmeQMsNNMuWW9BydvU",
  "key19": "3fikvCk7RMkUTZeCdgpTLo5ursSyP4maUMeW1ceJk7FDEbpvDyAfCEiFAeAeGdYtoyBtmfV1xAs3N2vi7QBK9d3r",
  "key20": "3A3hPs72PWGFYFjXnb23XX3Wf75n3vhZuVX61CHnbdBpnVZLZFmH8aKwwtbPcyF3uVRjZrBCXpa8TGu1zXtQciJ7",
  "key21": "3GBRzf7rzse1Kwa9X198wwJcodcAbqCBVTHpULdw9x69whovczzxG4WKj7cfZ8m6zH6o8sHJT4WM1JRwm9XEF7eR",
  "key22": "3cPGNraUV6wXQcWdrzs4nf7U4isahadosYidaMEEiTgMriSDwVMY7MtfTjcCJWpzDkYCYoeFiWZZyX4A65bRbFcc",
  "key23": "5exAwkhkPHTxPFeLRdVXiyJvdoUZGQti2njdjXW3GBdLDrwDNZrfHF7hWZ2PfzoWi6SALpdpi3aw1ittsYvdHtkb",
  "key24": "5nti31LGbecwoRDsN28estvW6z3ZmQN8CRJHkFG5fa7A7g12vAFMtXwHsgZiHXW4EWmLpA97ZjWRq8XpYJdUhCiJ",
  "key25": "2BZpgyyPus9frANA8dGhFGNKrXhUGdUKir2wpbDzvPqksSPeTgas8ReJf9Cxj4KRXmVbtVEyza7tc3xtcpuwdy8S",
  "key26": "3MpKE2iju2XqM1KtxDiPcUEd2C3PsiLb5AoTdfqdWbU3S2NTt3Js7pLUVj8HRotw14besCrFuZaKK37KaYH2VoRS",
  "key27": "31NnNr6A55RKCw8bx6kf1C3qVmyKGihod1pvBZyCgbcMQfks1yvYq4BVC6J1rM9hAqncmX9wqwnbrtJgBJJ7yZwZ",
  "key28": "5S9aUTnKE6b5vz3Ygp86JYqiZjqAUmWvMhufnpcUAg1YMfsJ6TFMvvVF4USEJByiTLGUoXcY1VDLeEdXgA5KaPxg",
  "key29": "2SMoxy3fuHL7BwGQpsKqYPATCDds8TcgDyLKYy8sZbkk73m78BTeHG2xcb2x3wAwx6ndUZkZwAtyFVsbWYkDKi5m",
  "key30": "5CWNPYWLjum4T2h1dxUv1dMfPz3K99HoeAb8Lx7giQsUR7i5dVPieqHugU3XJKauqVFQVmXP84rzWomzYJSkK5o8",
  "key31": "3ogVLVryMwr3QKvc425jNhx3oofgXQ877wqipWdN3dWGs496Wk87qtYizEQX2BQcwn9qquW5teg72ceLwUpRSLPM",
  "key32": "4MsFpawePETDb4pTUu6qv4LMT1ka77ZhKszr97bitYFkiZ5924hH96tfwpmpWPWqz2FmhatQJ6uqrvqYnWorBMbb",
  "key33": "3A7x856pHnXdbnNJUtEjUmkz2RFYTwK6cQ266Q5QqT4V3czQPa57WbLEdeeWHxou91E1eS9X3tXKjSahog7WGzKZ",
  "key34": "4AYv8drB4FSd9Se9R1cmCYTxDQoEZXwBGCF3GS5iZnDnhMZe3XTnQgrVaHWJkrgHgMPbLPhUuiRLmEr5DmRFP6Rc",
  "key35": "3eJ9ht2HdCNcpHNtHfs2mMRThqHDPKiYccDCV8uhEZmFhfBYGNVY5L6Gb2ohqZrpKfYpBq6AP2pHLvNQzAvjT2Gw",
  "key36": "7ec7QvBb1kciLetVu163WgiQkLEpa6EheP7eX2jRrZ7DoEggJZvSjEHg6rTfPCwf47gin6MLgL1s3bDCDzuZvTF",
  "key37": "23U5QPeqaqvE6fzNf8QErJZVzDmzcUPb7GnAuoE9gUftRvFTjoXBpwTn4MjFuF5sGsZnnJNaNFkGhQbgrGFvJBrS",
  "key38": "5uMWJRX9B2KWHiFnQbxPHvca4DAUjpTAKCg1VxoXT1gzCiZjXVQnKAYKF8PMrqJ8hPbjHQwyxH5eWZ4ApYG6psW4",
  "key39": "2q1g9mwrMi5up29jej1K7DUjgVHKhC1a4HJgqkm2AUbaYQMdLkcHXkz8U5A29QF4Tj3QASZBjk4wSEmcrjQrpFjd",
  "key40": "4YDcdqvGzLbBzb2uM1k7oLYpohEfTWF7kVWhe4VvX9hGuc48kseZsaJd4MesnkgugtGUM8SdHqDZLWPiS9jnNhi6",
  "key41": "25rWeBp7Wwou5ydTWKtmtZeTBiiNLMRRTrehmjCNu3Am9Gx2WwqzqUm1CTBnd3zuSTKHin8Z3FLFHcNun1JVYiA9",
  "key42": "4Ch2NYyKPibLCjMm35ZyRnoPje3LNKJjPUGwSPdW63eKaKCKD4DgH4i7BhRpVWnbEK9eMFnGfZqmaRg254PGb5he",
  "key43": "4hQL3Z2QZXX3TkUYBtjNegBH5znWaWzHZ85zNc4dNdd84B6wC5ykSNyuUt4wbvKgooLZ6r1HSd5uLVJG6u13xCha",
  "key44": "2Y7EZkDd1dK5f8H5bxjdgWkjDJpcRgugkY2MDzk8r3Lb9rWyshKSKgdf69z4ZcE9J9maBGjvx8GMRSD4FHkPu1Cg",
  "key45": "38FU2w2o97uJVNcm4S2TjsHK98FcS8PyFVFzBbe5WqcW4gZSwYYjPGwb2zpbyH546UkbZP6pVw81ActEQJuht4PU",
  "key46": "3PgwrEkQd89wD8iYEhdoC8JhbiML47r5mEnAem8AdfWKSixshNF5qiPVdhy8LWebwcN367PCfx1NCrUb8ZCo9j4i",
  "key47": "5um1haRSbst5ehwPMEakXokvX13z3HjNeyxgFvS5DWTE52fbQVwGc9kFk9VaerxvNCD3zGYw3CRFRPhnLYMMkH75",
  "key48": "x1DxU9Q2FvBzU3ju7JFhumk4uJxcbBmj4dJyaiQNNsTHYUVWgSqg8Yegpe5F3vwTVZKt4ec1sHWDWCN3q1UMbyp"
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
