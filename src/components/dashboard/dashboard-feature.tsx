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
    "2t5mYYhh45gppRPETgtrSMkirZv9Gk8ZNu91nCjzsQMEzHFunvoN9rgUCWLbBeSWKKpu8hnhiztrRKjAQvmWRitq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Rej93h2CaCyGtKiAohi4vJvaCQdWUVX7eB1GDyRA7DcyJbYtY5MFueLk3cfPFaLrCgca2TPnHhFNTJqrSC2eBa",
  "key1": "64eExKmoSGFZH9jErvtB2L7fr3XF9Fh1mRig7m31Q7LAxvLu7oozV6wqCgj3q2zwdVyhesRU4her8uuCTc6GAoe3",
  "key2": "k74BexXiBynLHUtR3sTtHYXwCCNxPuZ5c8FfKK3DCuiRkytTx9dd89sPKsBSEXXbZ7quDfe4GKRaofVwcVgtHbV",
  "key3": "3Z6998uBGjAE8nRJSmNg54osmWk9FnHhcAnfWFt4xW2tnjWAiNJxcncL9p9aQSwLWm2Em2C4iMbAHEdRxp1FHCii",
  "key4": "5USwy4RY6sQXTWwMjyLSUfTtSih5hn91jNbuVJkGHq2GBPatFmg5ycx8dLf9iCgXQh7fhcyKGuiyFXphecHhQYZD",
  "key5": "4cR9V4HbwnFRhaHZSWPZUdBbLxAuvjtSVm8rd6L5QyhdFdhmKe9xoZ4Cjn4FfvUMsRMfMH95V4CVmzp8HnT6k9BX",
  "key6": "5dUJKySEdGKM3ieSB3P1XAN1iTyx1SmQHC6rMyBknDpNxVURWCBRNbH5sefjS43Y6ufeXtKTaB1sZQdFv1xW7BU4",
  "key7": "5bK2iTekSjSJXiwGQMyPy2VWKUSmAtNf1DVviW1tdj6qEcX3aYY4bNc89KvaR6nFwMzwwmpKsc5ZgU9RmMKCV9YF",
  "key8": "cvf1E5XyepZqJnvZANEWvxSArry8FaYGwgLPr9V9iNACgob3doxPYP3jKR2VZoxUwmUYQRMGqRzqxDuQr188bHh",
  "key9": "P8aPMD4ZXikzE7jfp2BTdGcF3gpbHxuTJeaPectvYrDWLVKZU4GX4tK7bThzV2XfgMizWWJyXkKXkzuBwHqqKpk",
  "key10": "2tCC2TvjLAESDJmiuU8dCh7gPQcBYuJHTWRrd39k3VMbAzunC31S59sB28oQo9yP2ShyQn3HeZkqz48fWdzAf7Ve",
  "key11": "jC4oRnzPh1wS5BW26mo5JaTYYu5Hqw7vs6DDF2iP8SBTe71ax5XdXExrgMbrbX53HLTzFMDtA3MB3Ehr6TAMKpu",
  "key12": "2svVR46AHaUAzrotYXPAvNoMLbdcn1SvvH6uTixrhiL1zbgmMkWHE2fyzDHNVbgBq7ZMdt6V3vXk3hA84FVpBdPm",
  "key13": "4any34BNNGNxQQtdk1TSiqyAhwf2GFCvyyCsUZrfjvAPMTHXwcJwSV4jXBLsnNWygVstH3edypxLSM7aPSrbiaZj",
  "key14": "2oBb2TZTYNBD1EMh2CnmuxohThguNKLCBATftJfdd8ssxvS7W45Mrs4dbbKJBdtGSo9sCsjRoY13TAJ3bF1TCBsF",
  "key15": "PS2EBHKzCPWjFax9SmtHJfALBvQMVkiBC4dA4SWKxwELqLiWRg2DwMGk4MENsZLNZeoGQaPZ3BKMFvXfC5yhyC3",
  "key16": "61csexySZoQz9JPnNCNrMVzsYyRYQ2EuPnDgnSP1ggzZW16Yq5pD7rkGU4nXTo3E6bkX2KLYBE8JV1HBJgvPyQnE",
  "key17": "3e3acxihXRRmnTrxVKzeLm8VSYLucXMTwCHgZxXvaB44fyVDU6JepSzGBuNoqTD1exV9XCGj7U2nXJJssriBC2hU",
  "key18": "Wu8579PKMno2PWuEiiLzRHR2PXAevoUewa7t48Rw8L1tFYnTAnv2vCKncsP9i9S4FnjFtQ6w4MLcgS8mQn3oUyT",
  "key19": "3ctjfRC6zZQifEM7N8usZ54igUg7M6BtpwkxPwF2ZhVxbxYJuzFotRG8CFknjD1zu7boXcpJZCMqf4cHvnhDtMLp",
  "key20": "51CBjrZmdcko411cKPFtT2BJTQvayiBZiL3jHijRuVoDkYUJTqW7qSqxenG8dHdv1GZJoBgRhNeQVLVB7cD1A5M6",
  "key21": "3SjsG8F4iS6dZA2nyyaT4jQRwQoPKca6qbjsSozbwLo3ga85Jt3AwSwRn2wZhBDAz5UansPY6M3mrmYvTUaNSnPY",
  "key22": "3Fgesc51tA6EcEmLanygARz9ZbNiVeqVmxC8ychzx4gBGudCLfco9k8puwgmbmXN5Dcg3Sn3pUwTXznaM6LJ91RT",
  "key23": "2Po3AHnokr2DXnC4JsGxDDwcr7LvWqtptmqku9HiR4RenfnN893XxGghtXVPT3QWn1Ae8VEGzs3zTAxBi14weeuq",
  "key24": "3S6FBSXgbb9iX61dxPSH26cXnwK85nqLGeqPU6errfdp4Uc1dsrqaofZGtweCvPfFojWd5Vv1Su3UaHqDbP2gWXq",
  "key25": "4mdCiowLw7ktzTynnpLD3xiDRqqu1G5XYfLzQAWZJL5i7YsNoso2qyARKeLYbvNG95muQRQbk6Gm2Yq594yQtYr9",
  "key26": "3C83XiwCaHXZMLUBGgUmBmmWhKCGQQwJTRqq7waMHDXakQYC7FK1HD2QsBjXyHytsXxXWSnZXxS56VjYtGvFcMun",
  "key27": "3yPQCoPqAZqCjmNzWnPAQeQ8nnhLnpatYLZyjtKY4pXFcKLPX2a2ShueLvbNi5bpZJjN7VKnJ2csowXVJ4YCtomp",
  "key28": "3Ui3Pc9gWLnDSf3H6SxjeNWh3grK7bgBmf3nAUQGtQHJGnVLu5Qu2gBX4dDSW3W6HSzrsZWDYUmicuQM9AxCXcPR",
  "key29": "3xFHFEjQUioWdJ2AGq97xtYGzfouenQ86XhRx8uKS8dQnZXrqjFt962smDnbdMwzX3zSprFuPDWdHCM8RcLFptNr"
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
