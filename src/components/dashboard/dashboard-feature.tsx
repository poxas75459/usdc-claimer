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
    "5o41hynyw49pkN3WPB1AQeaMwm3DAEPTEXXJjqrxqe5QnJtuZxqUQD1rwePMuU9taetjC1kg3jJgBqhXoiGXBABF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BnaDjDyruxMiifErmA5BtwgnbFyPMWjGJtKsWpKkQQTru4J5C9iYfbzTeLpfmc3RYcvzG1tdWiwUz7UDvL5Rhdk",
  "key1": "2QXMetFhtm3nXrPRtvjGegz2QrPQnjmU2adB52VgAohiecYxnewwecK7JrTNtf6qfif9i71SmjGAXCYbvJmCUkSb",
  "key2": "5xUHdSXUBreRyHTbz64yesGRtfj6rUyYvZFdsZXpKNKBYUCStgesGJCf42GjMTorvsKaFL8oKRWNs6qJTbvJ6JRm",
  "key3": "4fhRT45EGpcWZ6WP8WTM7e9YTgBosoQukvMnxzfHUiefeq6VM6ZGUpWzkB6gxtAfmajD1ow5m8zai99CGPAVttuV",
  "key4": "3vmf9WgEWe9hvb2vPmA1QL4NdzL3Byks24UNABgWHgekh2DyCQSmGBhMxWMoP5yPDgTbQdrm4NGf4hwq1CX24NKK",
  "key5": "LkjtRhuZ9DtSagXFwXeev3DW2VFnrEobGLDwRzQMuxSMt6nSqYXspjfTdStv4SwnhFD4dMRiBV3mWUz7fBPiwMv",
  "key6": "Dg8GfTH1Xj5zk1XMhoszPZ1VJBzyrtmhbdFRXcQ3athVRCF8dXTLKXvoKH5EPuKQz1DNDBba8VSDXFmJNv1eQzo",
  "key7": "5eLTTbfMqhAQK8BT1Ft7wKJ19773usn47xQ7nJtYNNFt2NGJw8zwkfRig1t3VE7soWuqpVKoby5ciR6bCCkVUKgP",
  "key8": "64AvsRcNDJNB95sgVmic2jwYogf4Fq9h9h3hZQtCb2nodxt8pLoE8MGtkoJo5wnjEGAe9j6ZMyXWiWeLJy7PXfxR",
  "key9": "55W41GCK5uCdTqBZSyGXtPj1f8mwtDMac6td62GCNmy2WYQoVvqFbfxiJGAtn84jwT1nnUx7jhx525gSWrGQJQp6",
  "key10": "5t5wBvVZgRjxLcWr21tgWs6WycHouFobEKK7acN8ezJhLVrqW3VTqNBZb2hSKJphPqwYaNCYFE3u1DsJ3aHet6kb",
  "key11": "5pkQdRX5aqf8wQM5Ueic9m6EdwzAR4QddoUWm83UdrccyNhQx6bRxW7DvEFHw2Mvc1unLAPt8CZpuTdMGnwvXncR",
  "key12": "2ayYNsdCc6k6MD24bsMPhTkd5n19t7yxyfXi21ruf7ayvEUZK9bs3ciJqMVgLSLbRAs82KoTBorGdaLtwXLr52zi",
  "key13": "7eUeqKa3ZzSi55znxCRYC6qsa6sCpK5xAQQwJeNPKohGw4UzNjr91akK1bB5LaD3k9AkVJj6d713hgoPRGcL6RH",
  "key14": "2eCBDDMTUaCheXPuLX23KUYrvSPbUDkfDvN5JwBkwbaZV4Aox5Q8BoedC1iHYPdXj6vLNJStzLbsGcWhuUdxybGG",
  "key15": "3ZMjTB4kMdLQrtbbSCrUwATAXqMYbqnPtJAxf5phq5BrERhiZsB9NoVsvAMBRuhqL7VukjPxzHrcN2Y2raGm4eES",
  "key16": "5s6D1RvJh9zFMpCBaJ98st11mAJh26z7SEwpxWNLArJ3bcBBDN71HVfFSVLoiYgoP56URyJAnUHC24VmNPHunN7N",
  "key17": "5mz5D2JVA8zHt4pPXaxwh1vuN6rA7mj8t4QWRXBUoGWirR4RfJBsMY5Ry1mXKFb35vxwxK6Uj8MaTi5U92UbuCZ",
  "key18": "3h3rpvzvWsDjK9jTfZKEqxXQgc6472MR5zR1d4K3UqpEHD9xDGtB7ydfEethczMQcUjm4X3vXEqKCd3MjFw7587q",
  "key19": "55ShUX95PDNrZZxJ5E9FZkwhHZDpcn7widYnMAgxcMgj3KAAFqmw76iLsvpDQKxZbEFsLpZBz67PAKF3yuC6fczh",
  "key20": "2NxCGRpnYKoFyNmhK1gjiiWjhEpycf6L5RrsyNUxZrc1DBZdTbsssb9EMWWouz4eiFivA5L45hJW86PBHrj9v1NH",
  "key21": "3oc15SgAaRYio9JQdRxfKVnkEKPuiYVXs1e1XW7UooQB2a3DCHUyhEPpUk4Q6QLYHe2PKhfR6iSR2Mh1hQQEc92Y",
  "key22": "4cQWmQzbdeoba8tkdknamwRybELg2VCSSeRnPXPmQf95wgRESaLJtCNmTB4UpvHJuGcBD875ek1cNWAupRaWsnXo",
  "key23": "57b6uEeoJ561oAZnM5sp2GuMqdMpUR9YN4rnaNbo7iH6naZjC4N9CUbb3WtzVehSiKbSQPQj9DnddXoArNF9jdHC",
  "key24": "4RhhT8zEUbij6wYJ2hRiNUyz89j4tBtg9XaaE6C8iLqPrgYf1PL9BxWTdLEnL2i8Ysrup9swdk4zbiAhQnLKfMTi",
  "key25": "3pv2DKtbwJEWJhyW1w9yBF25QnoM7pefCBemsABRM3bxKa67vAu8VzDThXp8ukbFeAfSWiYmc7jGMaJXU4N4HP6j",
  "key26": "62M4w6oSHAPjfoUks9Sgb2CW8HeXu1mNndpNSVbq6CKhvNC2v8A6rjJvKHvmmPh4LxKmGaaxvs2AwDDHyPz5UEhv",
  "key27": "4V4DoGVD5Nhg3tmEPQU6oPdqScsnN5UUw9wfV3NznF9JUe5VEpFgZ3mvYpCnvcmTcXyeMjJajs1TL8C7ZUheM5uv",
  "key28": "5ctXPR11yJv9VBdhSmHPqARU86SE6RmBtJjdnT7P429neyuo2GqY67qiBrUCvU8WQtpTH8CByY4DkY484j3dZ51K",
  "key29": "361fPZSohjps1N4wizBrq65wF4kcJM5h6JeVuAtVgfrbRNhx22tqyrfwpZ9VEN5GBi76VfyLxvANN9VTwNHm2FEA",
  "key30": "2JcsGKMkEAQiK2B6KsDk4j8BuCCzQXouo3zR4toWUttBVaJGnhZv9pNKguJibsGQ5NSgbp5tRNsHCJTJu9xLC7oT",
  "key31": "4ouFkad7N2jWiZf7F6rqLU5hSouaPNba21urUwLZcYav5f3o3vjLK1WRRUHbSAytrntCm6WirTnTfVQ71mbL4F28",
  "key32": "4ssptaqurXuJv3Bget7F3ntpkE8jKBf2sRiJyrfgAMcnYvinFyvQex6mENFj3iZ13JpFUXsDitKv36L6nT6EpjNZ",
  "key33": "4mnVUsZ5TQeFvUjPBFXhAPy1Z3xKGVKNV5kRAmSj2uzAavpBXGLcaEKb91HzgfABFtdVLjAMZbyRGaF8jUpXa7rd",
  "key34": "584bYSKx2k4PWcGRP7ksC1fkAnc5NhArd8AVaR7Tqov53Uc2ur6fs3swxzV143YTMg83Jihre6Cq7RfkDQjm5RD7"
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
