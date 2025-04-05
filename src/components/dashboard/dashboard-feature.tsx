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
    "3MDhRivsi74qU7HsAff1zUPkH6g8ukrKrDR5Vem969Bmyuarx9rTj13ip6otsSiJngccCYUnotcETwLjsjfuZrao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MGnwpRSgKXNdBpX2uxNfX97h26FXrSPTYgYg9F1T3NX9oW1NDCU9TCswGcFNx28GaJ4doKvgb6ZbbmFLADKjg2d",
  "key1": "2TEZQptrsHbRoyn1vddHwE26DLyPev1wdWcQV3wFJggZK5eMNV3xxt9xdcVXxJyxMWGRsDE5kG1mjcvvnLfuhbjn",
  "key2": "373TdnFYcfXduKwe9KLZjbsmVVHrSAyd6Hf5TCUa5DafFBHveEPwHq75PrafbyzHNCHiPjBd3rmfFWedeRToDUMo",
  "key3": "2pUwxrtTNdWQCaJpS6V7C6V36eMyUBY91UF2YUP6gJnma5LBD1qz3xsQzXs6W3c83yjPXKkgDbmff9ZcGNwrFCVi",
  "key4": "2ECkoQqsuNvfmZqNgjvtus9r6yXUs56WqsEEpYk4CC9u5eZMBBebEAa2oZhQ25XunJWT8d6xxbAohe65aaWB39qz",
  "key5": "dxDpvt5NuaRmhaxTb2WnSQkoW9WxreWcfnouPTDzHN935qiB5nviMM7XspeBds4QvY83tx3SSCowXWqNi8GUrut",
  "key6": "22bD7g3hun6cqvgpQGAGfnx2EdKZ2MYJxpvTt2kfkuJxxLSyePpa2vucEUU9Tu3TfyJ5Z4uLaXviNXPeVh3vmVyf",
  "key7": "4A5hwBmkDzCDsUmRcpTxt72gumkr5F1GsLZkjtpfdKxSaGwUASL9Tt4wM5HCACvnVSCvVGRJXGRUp1rNu6PWASPe",
  "key8": "487A96RUxxuBnhuuo68Amn7dVwTqGNGAJTiNkzBK5UN8cBevfHsuoD6crGbkfgPyDYVZh7tjRqTr8V1Sv3V3ztGP",
  "key9": "fVVRjFLBftjCUgFHhCpKZUfHij2XwW9eBreYn65F45vUaKA43XhKz3ejsa98vi1L7nFufXwH6hcH5DBBjEEMgcm",
  "key10": "5FCrjsP3nuzk7dqUG8d9bfvcH5UWQe5Q86ewSZF8gavmtjhm6snugeoGCJtwANaph56afaP6zCsJr1wgyWGAtxKH",
  "key11": "3F2zapfeC7kechi7dNAesDmZo5BdQZUmZAaAKfVfrvdi5uWRHYkMhTqZi8fPCGSi6Wpi3qKF89ftHMM76kxSL9vv",
  "key12": "2eJCQ5vNB39H3UhMobvhkwRzM2eto19cu5xwu8Q4NpDUKpsPHg23pf7j7z9K6wDNKP9LixpFMEqMkbr5LbkaLt1m",
  "key13": "5dEWHdChvdKBJShUyoFoDqPJ7ZCLCT2uByzozQfQ795iybU6L5pfh3RRKdh3758hkwN8hJLMcEGxhhXGprRy5Ac7",
  "key14": "Vg9Bq1UYjeqnT9TpkfXzdduxNUESTLQs2DNYk1DLQaNyDhJxAGdVq74KZb1DR2pxRsAWXvwaoqTN39B5T7ULq7X",
  "key15": "3xAhBE24DuDkMpkjqs3gb1q43eQ4SPzNrpqViGPabDE3wQ6jDs82yFXYwASqd1YKHLwdjLgTGf17dDaaiAUfPM4Z",
  "key16": "DGiAtPaU4nf3y8qpjjwPRrVdAUuJwCsTBpP2FS1DQ6JXFu2o3t1g92eWE5SoLcKuQZE4ahLPT1gLzC5MKcNuHHj",
  "key17": "56NxsecHJQpbauQzsy33qsPJ6jvH3ivWQi8vT9sqgdmZEYjW3528geFhXzPAVry7CELtFA1GvMC3rMru6wrMNnNa",
  "key18": "3LpSNEdPRvNWXjeS3R8gxqxmySX9CfMY1v45osJESWkBtdYvTtmi2tLCaSKB4rtfRXg97BswhcF88vwhfFysm7Ln",
  "key19": "yjphWaT5cvHL1KqGbHuwvktdjBwwZGnhbCGMRd5iFs1YYtzoxqZP8wHi4RbwDuP4JDbnDZxWjddo9HsyMitXdw2",
  "key20": "5ohbMAzN4A8f2hpZnD59CTffSwC5eC7Y9wkjHHGzFn34wUQVDc7bJBPAnkdnvcj7zvAWKzc5w8c2c2XQaoW85dbG",
  "key21": "2UMgu5S2wYN6FhagE2fCKQVULqYkbjg6eXDgnBLSfepa33xdYbtTHcN9nH14k7B7v1TkhwCtaowan96YTxu2xQC8",
  "key22": "5J3ph6oA6breCfi4NFfw3fh2EwEkuAvPGZi7rTUbwK11DBxwyU8wibCFJvHFufMpk9HvtyJ8wtmkfkrmV2RXvCqe",
  "key23": "2Cjno6w2LEG4E533edtk2LRxDqKJhAzndVCvhDidoNkdMa4iRguuo2N7bcts8qyXSCtEr8zKGVd1EtDrVdsvNzXE",
  "key24": "2Zs1uGUCznG1FzkEwNSq7RxesbDQkuBqxEPxZnMHieAnUzsRq5KaqirwNeiz5b67Ev74xZTjUWPzkcv4QeqyjK4o",
  "key25": "3hH7b3R59BP7eqXfUmLkE8xtQZThhzyNRYpvBu9M2oHGHF9WuCnQbeqPks1RQCGR3bPVYq7xDvQSGf38EsrpV9j8",
  "key26": "3jno1NwSow82gyd9HGWX2D2UPLKYeLHi6FLyRdx9yM7q9HeDgeYhYztFRjtxUrxTtipWLHkNT7BmvCaQDVukrekZ",
  "key27": "5i2bRSj4ktzZLDtCwzDV5Cz5Tawh7XHB59T5tBXiCarJw5HXLpnRd84woCmUtHbj6dt7xPakQ8Qr7UxyjBcp3Gtt",
  "key28": "3CGJNfjQ5Ap9ZBwdQ9cR3XND6UaPPhcznZ23hcFpTzCk2pQNvEFfNDxUJdPPEkhyFY9EZVuUmQzL4S9BoiVMmTF4",
  "key29": "2d397Eyb8h6CuVpPJqWgzvJbrspKNZCb56UJ14ux7LRc5smRtinWMyvx2J5rMABzmVKPZaEWdXdET49SrbxnxsTy",
  "key30": "hdk5hewKvHPDRJeUQTbZTcwUn2q228oJZFP7bKdyjDtPnVQzeqnoLLsMj8u6cAximKFGvpW6Revs8KJTo6Nieuu",
  "key31": "GLYLvNLTQ23SCgGWQJCSH3jRwgNSHWb1Dd2JAdBzutVbzAsZK6oJ9e7n1ZrA2pjjG88z6Xwmuqcy3dCe1Ly77BG",
  "key32": "5fBwb7bqyw4omoGBWH1ELvxRgGiw6XFuSc3mvpMsvEqA3Gb2cKFCgPAH6FwWEU3ZFb33Hb5H2xkEQ8paaRYtXAVa",
  "key33": "34S2kU1uN13E2QjDbnNGuYU1tsbwt2Bbdmb9dtZio5wVmyz8i5hVXsEbuf8pcEFtt84vpB3ZCrx4mGYtgUY6BiVL",
  "key34": "5yvBpE33p7Drqe6sCpH9bEvDAxmi4TTU9jsfPEWBq6inazpMY6Pcrr7mw6eUmoSceoDxAXwfnwwXBsNke3oZY9M8"
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
