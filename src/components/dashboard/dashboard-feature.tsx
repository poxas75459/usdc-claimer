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
    "4GMgAAnhNUTT6ufjxYczu3jcGNUbeKL5wSKemtyHsiGHFMZsBXmskuvKkywQGtgCRGvm59WS5HyYfnaHz1dUJadc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rXebR7is13Asp5G3TthGha8DpMWcGztzKzU3FR9E7jWj6wTLpWrMRrTQTM7SxaBvHp63vP5BUBz9AELYhQChmJa",
  "key1": "31iLXfPcPN8SHvmVEyKAuqPisx1TAafPU3tYsdXuQt4eTYxuUJRtqxVV3vTSeS8HBJt8SwxSUz3qC7csw67Bg8NJ",
  "key2": "DSCdcxNdTYZtxEQxxDj9KYfwSCXsHqCBCygYVBDN31nc8mpoWReLgRJ1p9zyFG431U64jyvZmsGgBrskU3rU7hP",
  "key3": "2VJaf3ttg9teS5PHjHcrhrEYgriEL6bRP5g2WAypjSNtA7KrwTNJYejBFbH3djtgt2ghqSsuFV8docQYAtjDpZLx",
  "key4": "2YqRc65jWbSuLnGYJiU9ANGaLj5gGeFohQrKkKBMnVi2vCF2c9XL9iXyRbBToYN5ZWYDmD5Ex4TxAE3RwUYu24vu",
  "key5": "3t4dhNgDJKFDT2TLFv685VCsb7kc8vzWbZMbwa8pfv3bY3GK2T4ywz6LKPVATt4jEHUtTKASCwzqvFCacgdqRTbv",
  "key6": "5n2yRHU2jPfsVtTFW8c9f8UK8qSEx5rtx24c8kLiXgAAeEQku8KXgtK2fZRvexSFRBYCBjrDhJjhKASFv5edjcRC",
  "key7": "52jx3XbdbBDkyT5CfwEkb6qi6qJDaLzsZKVdmUNYXSF9L8QmfarfqqfqUioL1As6se5d8vo29sJX52gBXibmJQRm",
  "key8": "2oT9kFMCFLVkCwmiqcrv1QzN1UdZiPccDHj63SMPuYyjdi8qjw6tzHmbqLts5kJoDx1YSRdSz3pw3sGaVwEQhpoZ",
  "key9": "3GgPGw69uaoHkF7WAdYtWCFHs43S14gnqcEzJZJGYMeKjkGYpeR1bRWaxbHiFLUDPGt6K4ZLspFgMNWP1JeSbNYt",
  "key10": "sjpSTsnuyAbqDGB9HreS3atAMZoSh1C1TVaQqPM1bEoFou4GkMAu9EmQRRGi7ENBnXNGRpgZ61UMMoBmYHHnRSn",
  "key11": "2Q3kDnrLUW7XM9wNmNzoCzd1srt8Mq7Z7GbX6oNXXZH6e6QiDoLq9CstBZNTiVKiAmvD25vv9GEz79nFAvqVsKu8",
  "key12": "bpH3uqq4Zj6kd1s7LNRr17G1dBzhzbn5MaVFk9KboGgjgCeycuNeiEMm2ZicwJfmbT7Xs6tNnwhmL4LkurYd3hz",
  "key13": "p1TxGGV22A2hdUsSi2TCy5DY44gPftmvEhzF6pWRuqxssBgp2tco18jwdhQ3ZqfPkcqgcFFWvZFP2icKf9tjzzn",
  "key14": "5Va27YJtYX6e13nEUSNFYcjp1Gqu23sLUddhg1a739959kqne1bPVzXgv3CEyz4dZqDVHXRWKVibusV4dkAbcxEJ",
  "key15": "3Rtf3kb8BoARUBEMrJVNEAmNpnXwQYa9Au8HrJ4dMRPgZjm371ND2Y23b4MSyBx4VJm214JhtcPHhEq153Gc2sRP",
  "key16": "5myimsXxCZbfqNPpmPZMXZTKTpQtpC5T6iNDrkucA3oUquPk47DmkrHAMp7AyD2kqkkjNpLvjqgL3XSGZn1wiaj5",
  "key17": "5qfrk67vhNHaYDtQE1tzuPjpbpz2k1uk2UfmMpHHwWvC78Nr4NjEK4X6zuiP61AaWhJuTucNWvNb8cKLunPMAqzg",
  "key18": "5CC1ADujW4Yy7fT5gDG6jTcn1X8p7dZJna7a41yaBJEioGeouQKpztfsb9k6WMT7Dycx1kQEgba7pzMNwUws41MU",
  "key19": "438yTjGDwCd5yPS1tXBSCb6zvwfXyswy4uNskeWNSAD2N8DitWunATQHerY1QyXfUji6Ad5TejknDYiM2VenyjiF",
  "key20": "4P8EbYvtEWFYaHxsAZc6VvK2Xu15d46fbsyBrY8cA2yq8SyvFSova6mxwM2REj8VG2ZVpk5pHDCxb2QJ6a9UEQm4",
  "key21": "2Bdc2QmfLZWbp9UTGKN5d3L5W5quBWFpTJJRbZ4ZH6wExwyd97iSpAijxBpsJ4crGVM9ZRDYknCw1whXfws4hjHH",
  "key22": "3tEoUAjV6ohs82jhE4a16bJX8GsuB7nt65NPPJKm1g8Y8mEPAc1o1XbHxfvs3EY1Zo8tF5tctdBWAXqvHBaXrgao",
  "key23": "kSMkunEan4Lgq7dxJT36sjoM6cmAKb7884A3asDKYkV26rrKMa8iW4MdUTenUk2VWBeyveSQTgUkc14NJgsnggs",
  "key24": "B1vznv8iNDmbmJvDDJ4A6iuREsnEnj3mDFeraexX2yrhW5ApJzMhNZ3TTr7AtKtrVBL8K3GtPiAGS3m8BT1X4PM",
  "key25": "5pgCTgiPpf659y23Fut4hMYvFKQ9yZCCUzrC2BTXxX2xoH7yCp7VBgjLBFr7MSjduHz5GWSr11y4nR8Lb14Y1L39",
  "key26": "21HZWJfjRNZYeFoUNwEM9mGnn4Qw5pejsexoQJykbKLED4MyyzdKNpRNNL6RPUkhjSffBASfthR7fW8oNoJV2D9Z",
  "key27": "3Y5iYNcy7LQcaAwz9oQi52GB7evpxdTGtvraXGfhMegKKeSS8sr4nybTGou25baX6kUpDXf1Scrpn1tofSpQH3LW",
  "key28": "54n3qy8BbgLD3nvCxNGYDFwZ26Pm94Ymig1GYc8Stj7gvDV1HgH52f2vVdRE7BZMzVK9RmcBiGAQ3zaAESMDfTGg",
  "key29": "4wQApWr2a5Ed5gt5tUFeN8GBRRVqSy6XfHuozTSpRmdvH2U9iKCrua728MxVGUcemwGFnuJ6RKreWQcgAMCMJpgN"
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
