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
    "52HGixRZXZepM4kCDwJzyf2SQ7prNATTY8VVCfArGBGMzvSvzWnQpMb3FfZA4ddxpe99i6sKZpkCoPfPwk1EeSMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cKT7xsU4AD2L81XTRxmtEBbakJJFBnr4BHs3Ywif1k1rv1Xa19Xb6J68diWeWqwzBErpudkBbzhkRrCC2wvL28C",
  "key1": "34qLrYCDPaWZfE4hFfEwfbSZvq1W29iquBspJyLB6sQgRFe3rCgMvwsURX7NtCEdNW1oQo1ddKCZddGek7HQZwq3",
  "key2": "2iRCkLkSYfFDm7FGVJnP98dNbkpfxf97xKiq9zkceJN9V9pqM3uYaiNPFQjLhetewsEvCAPZ6QVxQ6L4RY4V3CGL",
  "key3": "hsnuTQh8jvUaVFD4MSoNQA5pFvtd4x6ULbka8x9ch7HpKWHV8QDFwup2Xs5EXu6RW9BJqf9HtwGD9689DC7Xkam",
  "key4": "HkU78dQmykypZJfbuusikMthLYfbsUoGA5Vjxtr6ichyD58mtgb9J9S9K3yabjbA1tezC2D9SMYdiHpoVJsHqGy",
  "key5": "52GXYBNhP5ASL4gKJ4FBQGa8mqkXKoTDpn6FG8Bmagm2KoTfzzZ4D9HQp4GWno5TN6Tw7ipiro9sAY2THowU7X9C",
  "key6": "5snYV4atEMUxs1kAcbF51UBGLGYMToXH8WjU7CAhvn45rrEG3gz21PBjDnhrAyCQ2CxPXsUyNAPh65Qv7tAAyzcr",
  "key7": "58YGRHkvd6WiAgBe6v5UniqiYrhJ5csv2uUpsnHQebdBJZxPQCewyZf4wP7aEKCMTMj58heMoeexGaFWwzn13H64",
  "key8": "3GaEdaKALRHHN8TB8xMMoWnWSbeGdYqbT1wExeXaqbVpVgkTBGP8LvCuXFHz1YgScEXKQbVa6LxMm1f1yvw1jTQ8",
  "key9": "2ytmY1j9xhrG1ThkdEgQtPDqdEHEuvmkR6LTXtfuLRiSES9ETVk4eMYmJUNFM5WbK3rGjgk85zfXvzJZ2aEtnvQg",
  "key10": "2bSFwQ97z13pWPAiCzzZr7YY56bYQJcFAqkWKeSQYqiSzBonz1yHe9e42BTBHSK5KqhaYHWBbMPtCrPxwC6Mr6gK",
  "key11": "JYSy3TFJjPbWLDd2gnHGFBgLXmiuXNwswDChYMAF5mdkutM9LrxXW1h3ZzTqKE5D8V37pGqGDJZNpddoC1BsEqb",
  "key12": "hKSSNUPeyrVxfXrZ3EPQvk3Cr7WHRGHiJGQ72dsmcsxtBxxuq7TYhgZj2NNbUoxpgprAH2sGunxmMizktfX2BNd",
  "key13": "5fesGPzZxRCtFfFCLshfR7ZywR5DfYt2PcFkPgZHfh4yNDYuVqVBTEMLfR8EdRo3sJft3HN4bN3x7it6NYB5MBpz",
  "key14": "5qhA4PDF4mmgLxpZSUJXBvxce7CpyouRB2ZZPrGoYKcYM9x3GTtHSUDEjzZPAoRWU2JdQvriRaJocAUCrciVWXy8",
  "key15": "36FhGHBYiEmdYJsFFrdaeuT9Pawm9FkRq1DEQSVGBMmnZqG73aU8jT6wQ2Td3wevKa4AK1EvKDTR2bWLqecDbxt",
  "key16": "Mg44bDpS1gfqFHiNjZXmHTLHPtzujZM9fG2kHCnmwLdAvbsPQhNZfTT9hmGuhYN5obQHQ9cmXvCcgvBtjtsw9Q7",
  "key17": "umcAhv6oQrQSeah4GrNsmsodrijWSgEiVQZQyy9mq7quzkMX5XRCMNjMpDfMTrmdtwbPDVNHEdcUUgpSqyBPJLA",
  "key18": "3p8EC4hBrT5wPd3XNJnQfDv4SBNt8gbq5TcQeQhszgZjoCU192Eyd93SvDpWkfqwm4ZkHCdixZiF2Vi286TKAWAp",
  "key19": "52ADZKbpESf8HpfdPxWbWGGNQHp2bWogb8RH8EQ6pUw8JMQmSh3dijDdSsdp4yReSitGDFGbPpB3AeAFzUNcxAJf",
  "key20": "514vZHWDCveQcsdqsewPX4Ehp4zFqZvwseZqJKajRbcRZw7zqHiomA1pqkJPEruZK1sVDcnhXyTvEQTwpNFMkpBu",
  "key21": "2Wy6cTntCchGDtVQkbbvrCDjCdp5K4jqX82qs6SxdNJyirAZW86D7vTU8TqW72anhEpCyEBvv7mhhhcXP5bcHuQu",
  "key22": "4rV4fyhuLiwG184j8eA78Kkyc4k6L7SJ2BFJrARCW4vvoMRp8vGmczCNL8qUWKqQ7Gtsgnf5yShhkGpHcUxvYYV3",
  "key23": "6HJhaMx48XCJBkvxNDiiMx1kkwuhTnnjkvNqJb5J4tVWiFz9vUfM3QJmVTQStNkuM29vfmohZWXpp9Mbhc93bdH",
  "key24": "5dbxRJzmmMXby5N96qMwJ1PGPgAo5bgjJ52y6z4BvFADKBLQpA949pj2CtCXJTGW5jov3EaonACjDxQjJbooXCAZ",
  "key25": "38Urj4gDc88LRB2b9SMgW7DPtjHiYUY9KiBpenYXFXdns574b1PmHhd4Fd4fNgUSZZagEmgHvdszReTPw6iny2u3",
  "key26": "5JYxE8PjfB1xan1PGSDZQmWthS2zLfG8rEKbKuzfidEAppEbyJESTKnZ6fknUfV85ogd9R2DGSGQRaT4uuutz5F8"
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
