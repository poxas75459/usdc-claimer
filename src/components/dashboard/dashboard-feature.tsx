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
    "3ognpBNxBSxZ6TcqHLaMQBB2n2AThxegUjEEUMKGNwjQF4Ar98aP9xC6H26pyREKcCftRYFaTecjck7aVtCeSLcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nScPGAcCxFxHqa3X1DBN6WVi5hBaPReZ8X33eEpRQuC1zHaJKrsA7Ru7mrxM5qa1knb4xmUmRAPD81nWVxDsHp",
  "key1": "4sCQqeg55stuqaRtpF2gFt3HWozXSaB1jAse8Hfd73u7RJt1QR2eiA6uptYCkoSEgDWe8SFPZWtgaonCGL6u4DVM",
  "key2": "V1HEDghdFHb27YGPKzVHV1Vkk5g3tFv51AkwG5ijpWc3W4Gyr6TYe31A8sYz5uAATUnWjCx9yyUeBaembRGFxxU",
  "key3": "3fbsfqP4oZ5STyNxZTkaiE6kRZ1L7rsoKUVeFVDrE7rAjVKBS5oHqsALeyithQihn85xd73wcbCVBm1San9kdeLz",
  "key4": "2azSJMvJQf7EoQg7NBx4UXeT3eur5TuFRwZevdr44694UQGFcJ4bnjf4uzccdEQAqNaxUBhERausF5tAXTggiZy3",
  "key5": "2JtYACdMAdPagQzFGWYeQpSwvCsJWGKvv7nbwrds5KDAWmHWKPJV7hkZA3TFTwszYLWjZ4PUbhGERJtfdvvK3Jdt",
  "key6": "8iHRk1DZ3rQ6fHjofBjYGgXL8oUbqyAzVLeiJQt8N59zCjdrhmrsdd79DTugLa8B7vDzumppySB4wTHeWBWs5uv",
  "key7": "5mg4AaNwaX8VC55WAZ7bhxbW3MUkzZwTSk8xzG5mv4Tc9ojTxjSmUuLoXQDRCdMB9TddChKmrUqB8cg9fzRhPbKJ",
  "key8": "29kt85Gmpna7WvHhTTUaNsJBgWNpncwaPfBTCJDe6q3Lis2uWpf2gbVyNEXykB1nTpx4EXRSFkdFovEzhSciRfWJ",
  "key9": "3wLSAm7e3qqU5aKEdU9yxncVb3S6UfdzraEbhtdo867LSf2sVmeAu5n2NHrtQWLz295ndC8ZjhKiYz5gnrzRFWqk",
  "key10": "5bdG1Zd2nyv5vHbBHmmQHtYzTLNXhFvboN2mNSubYFkssUV9CDwp2n6bQity7kg8pnnfq7jSuvwPy15PVSxEewpm",
  "key11": "3y5yAroXCoBVmh9LVyVhnXajYW4qimPk2kg8WD2ZGFY23MdPyxLtjG6MXfxKsy1pyw7CXEqEjwjpCu5eVuwGARtf",
  "key12": "RvBCst15CCDWehrxN6twrbeAuH8aewHb2mNigcQ4RgYgUuvKDF884UPEVFXf32hLjccHaYQcX4BSAtvn3atPeGg",
  "key13": "3taMQ9mZfTtiybx9BncotqV5nZkWfVmrNQLeYRovxSKAqSjJEHVwCGsHaambhrwQvVBKxbswdqJUEbgpVAs49t1g",
  "key14": "5oDzFZvNUitFuMdYLwnqFLREoFgn3aHWqX4ZCvySLChkdzYaZXNUbiELSVcReNdpZ3ayZ3rieGCbxpVsEHFco2fv",
  "key15": "5NBQJJhJxAb6vnva3WYs2vb65rkDQfDE5Gn788bCnQsbWL7gK9BXXJiayWKFt3h48geeah442GkiTrZkSvUeCy9P",
  "key16": "2wAKfAGGxd4bJubXQiYdFfLME48xn9qojzexQ29eRMTCW3D1F9QD3xQ7rPN9VxGbHDP8GotRGe3qUby2MDaWQsYw",
  "key17": "52vfQFWDvKVDZTuu3fXqz4YyXzNanDkJzgGTtDTuA2BtzJwTzspkM6M4s1ZETP6MY6y7iyDX9cwtTpTnYrEXrfxi",
  "key18": "2ny4ncCeLDJdzHGtH8unkSxoGMi1j15PDnHSBR1ntA5HA5zopbMNyY9azCWBYA81zdFBkXaTK6HCiafJuJhTfUCY",
  "key19": "2HNAZwJp7Hyiw8xZWyH1iRyLNDU8dtZxHYAAjQTuYMwRGppxDSbuqoQoHeJsRvYzg71bCu59d3C1krfbUUfvZUVt",
  "key20": "4k7oF75is4ZjGQjFTaE9jnbUkATYA7M39NLi2TiQCYBqLq38W5DFUYHHQJZ12X5uAz5rgo2jCfAVX7RpAB7aZBY3",
  "key21": "B8MfJL72DHnjXyqZy33upqKng8zPC69EQvFquUkKnWt1mbcE3vqKis8rQrT3DnaMksR7wyJU3sZjbsfD7BMxhgi",
  "key22": "3wwDi9nbhiiVAer1v4enGPuz6kMwHtcdVvpqVq3CFj6gu4XjNmuUP3Bvr6mVUp8g9w4pDNRH8yXJ51Hycpo4EkJJ",
  "key23": "3d93rBTrBuSe8sArFJcxGace1HMJHRp1A2BdLnrf3BEErbeT5cVQ4zAGX6FjRTdxMW6soHbk6dwoub2LFhoQzQnW",
  "key24": "4KDn5rbnrKh3DUJpS1AmvJH5sf2VTXVS9KJJ2h7rRx9hSeguhaG7t8Csy2St8WcrnXYRrDt8waWsobPBpFoK1zFi",
  "key25": "5TvejGh2n3uWsHxAdMWQzm85obE53p2ZJatjmTB4S7WVxw8xrfAYjoT4n7Gtk7ns9qAz6zJ3A5hewtWRhY8DTqqx",
  "key26": "VvqteDVt2jHVBCEMUF8HnawqwnqC21MWUU9RPeBuqSjPNQX4534pL6HrvMwGjKWbRQ8wwTUs18Bxn7E8bBAPcfC",
  "key27": "5aY2AckLpCmHpp5ZcV7JQVyWVMfaxfA9W1VzvAk36PaL18uEBPoki6CAHdxX94ocE7atM419cSdjiya8xDcZJEso",
  "key28": "3iz6GKAwHRmR3bzT32v4V2d6xNvMLHU1soEdPrg21z9fhks7zXazL5THgwNYCegt5XnGvfcnYWD6UGmeUvUx2Ys6",
  "key29": "5g6UkMaNper8tzwW94XAjjSf1uq4gJEXtQ7CHGX8nHZa8Zm5ZDYS82FmBjTQmEa992FBoX4KDVE4khANXrpPNnot",
  "key30": "azYgkcuFe4NHGeRFpwKcXJDv6AmvE3zYd4LkKmn8sJwnTfWNrQQNtLec3gC5MMz7CZUdT688cKH88Eo4mvxAuPk",
  "key31": "3E679zuwpVMkAVDSxYxXNTBGVUjJg32YagZQUTMrbS3YcGNpc8Ba49qHNP3cm4JNJWkdNbXLNi2n1i5AGkCMZ4mp",
  "key32": "26Z4P6jjrQH97sF4R4peGXxk5D8BeWFumukMUo69B4WgukyCSDdqVKhByZtmJJKucHJimcks6pacyekJeEGNXxFn",
  "key33": "26A4X5KuPXNCkfJLwhU2WdchBgj4jN6NUayf8K8E5Bu3Xy11xwj46rTvBVgpDhSU3yh5SUwZtqS2vKsHscCAheFt"
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
