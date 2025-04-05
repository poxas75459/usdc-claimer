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
    "2bpdEYvkj9uSePJKAoaUjDKXV8X28gDKtgjBcH7SgcF9yqipBVvoyqeAeTvT8nKWLqEpWNZ2Hmo8KWZzoxcVPkgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sSJSGvaNNY9VidgWMxu4QY16WfF9356d5uavzJ5YWWkFTA7GZd1cXdesuEn35Z3xFFrQMoz4whvfY6c4NLJ1vjz",
  "key1": "4ULmw7XjkAt9yQgoKANLQ3G3sb4kbsNVPbLdscTqeNzBzm7389j9fc9MLM33k8oBci7XagiFwLciVLJtvhpRH465",
  "key2": "2BhcqBGTVSADsPo3GjRTyv3tLTEFdt5oZk8dLSfJJ3na1VEEjdPPwefkxRXYjvyP63JAcjftSMsoqZuzZxF5Q4p9",
  "key3": "VHJ92bmgyBtbdYr6Tj6mSVhhGQXGLEiQMnH5XwfhASaAs1gB57nQbmmaA6cKLwDjMxUZmn5Y2WzozXGS3SPpghe",
  "key4": "2Kv4CGB3U5FkEHFrZ3EcDR4AnHRAJNegXqiohcick5m8aZcy7uQKKT2qqFsa3usG9ovkPrY4TAAsWwbGmLpjfqZL",
  "key5": "4p5k8AbFVSFSvNbK3sboRwZGrBTLc473XeRV9divzhgq61Pa9wwyFnXbERqjZKqaDj21L8myfDgr5hxMivUHdDJD",
  "key6": "stnmCitE8mMPSyqFeCCGcKREUsWiq4rDBBNzcAyFcpW2GnzeiZxHq4sPTsYEBjNParaRHKHr8qPymirHspyBtpV",
  "key7": "SSVeabCsxW5kCMZ31ohTXdxcvpevR7sDEMmkvHiuXNT6a9SXjLqEawqWNqD8brjdmqdhiQRREje8fCVa9Xmjyut",
  "key8": "3aSTUoWjzyvLADbXN1cL2NYLBvTF7FJRycZ4unry9wUd2LqruuxqWVXpBZEd6hGKQkTpz7d3i1GNo6RhcuJUb7u1",
  "key9": "2pizbFeZMQcZRNSLNBSqeH2cKcKAU7VEdYFRtzjaqe48q6BTnXoySz8JoE4fXz1bYJiD3fTPcLCgq6XQ44GkXxaG",
  "key10": "3qXjQ9JovSqzcSVKxm2Wy3fERc5po7mj4BdYgyFoUDB6MBFGvGB4wPtKcs5gXnfwuKGZCEBRfgUn1sY99e56sfjk",
  "key11": "58RZ6u2UUUfpYPeM7HZP12E2GuYr8RMDVJNhLYrAhsdkduJ8tp3Uyy7Kc2sKBkkExDTg5Bexb3HdSnQEh95EKLor",
  "key12": "53qbBkgF2xLB2zdY6zvTHZWCN3zghM1FUfDCdnafdL47LFWCB1WTamPWUwkH3SGrtbMuV8WU4BmfmuMCZSyxGCmM",
  "key13": "24pxKiY8P17u3AB7chhrnh4QEtgx27FWwhpH7WqJUzGMoriowBwyn574aQA5AfyFU6GQKF4bEPKUauQ6wBAxohBn",
  "key14": "HcbeiyPowYp4zxTZhhrBXVRrz2xbNF4Yoo4RpthbrsJhnPicC2xtgrTtz2KsF1D6C6LacGrQ2Ge2uwqABja3rcK",
  "key15": "5cW5gRQSa6kho5Bm6Q5yFurnREMBWixF5CTSUuBacAFsQPgKm6MEiU4GJ72nS7J2gsus3crtXAYYbfWS5zTdts9N",
  "key16": "5o4UMxdqpDUHojHJj7bPgR1Ju9dQKCQJtnnqWow8nFCd9xWr9E53j3PejaKR5qc9tNQHTD6YXkNXwoq5knbg3rxM",
  "key17": "3WoSEnf1Da5716cnzLwuDHG7eEJTp71vjfX9iTfNHczHfxNW3krRz7YqJ3uS1skhHba4CV1cMrEzKqYcTmPcYTpJ",
  "key18": "5yxmvQXyphbUAEQG2Ft3bMNe7pawg1wCbQoSactfverbiTYDbqahjXmJLam8LjZoA8L9QDmAvkNo2gc4ZNREw1of",
  "key19": "xCPwNoJeuoB4pmeaY9GSShgB4tgB9Sn4TPMD7vzmAWmBtcyGa48vCswhE47bnACCx7sFgbSQ1NUuCp6274Hsm2g",
  "key20": "mQioAeuBzseqSMcbGnVScPnbBDj6iAqiHifQ6Xzn8ntJdPGucE6A35Bmxe6VMNYdxvWCjYWQnNk2eTDSDpCqzJL",
  "key21": "2MWmRs9uLXQKdW7KtDSgD77hqJQ2sPF3WSNLsvf9468z7jLE6SoH37XcknugzVDYntwN54gRXE4xjJxjiMAEo9Nw",
  "key22": "hCDm4Jzvr7NnYLgkYF7mgEjEHEFBAPsgxwyG5aJMpDfGbqYyCBUgwsX1FEhfW6N9CrXEB5tzbmdhjKQQH2B5rZL",
  "key23": "3JL4NCzy7dysoEssS1e4XzrBkDwtiCmzeuaxbAwNAPQhJGsuCF68b29PeZhB5dyFtiDvtPBhe8zojRM9y68xvN8a",
  "key24": "4S7kxt1pXxwwKDha1DJPQUeny1SNAL9Zgnco3HWCW2wJDAdUL9XuGmTxDJqYMuZxDoJe1R2CmBGXx3PZeE9BwuZr",
  "key25": "4rcnfRZWBCqvz3RLRL6mQxiKWv8eCWVDkpEm7a5Ad2hv3J95YKp3dNuCHVmZVV8L6KT8msup9pECdxx6b7tbn2PC",
  "key26": "zQRdtWjtUz2FjEN8BwGRkCD2GqjZmmqL1hubX4BJ44EafXGWBSBUhF3io7pdKRy2tmhoFVBUHYi1vm6T9GFYCvw",
  "key27": "5eq8EPkpTNXHeSmjFW2S6JXx6tYKQAqWk5ChsaC6MPZperk2fPf3uVDQHbCtUYs1mnZfbBNTS8YtTYh3X65hvH7n",
  "key28": "249GDpfevykMUYJCQahUcdyX1aVkDeDQn2nugf5H8CVhYwDRHo3TwpdqmKYWDRLnWy1NT6CvdwPVwEaX7APe9KZd",
  "key29": "5sSxNutDmzEAipAffJCUhtVoeXGCeEXRLVZ7diJxGac3Go3UJQxDY87Yv3iRhZxsSF6Zm2ENufm2Kv3YvG4VMBRT",
  "key30": "4KyvXn962y5MFY7FTT1vMhnHXCVVDkgjmn2wxPzRFBrarmhWVjm5s4uxw5CKq1Sm34NNv6QBDPzcL82gPyMegC7g",
  "key31": "4ZYKTtFDLwyMdpQxwoeLnZudn5pLjtWyup4xdT4kU9Pfue3WPbs6ZFUPXgLLZ3ywoQYuDyj3s27ANcqjtGknTxox",
  "key32": "2RYRDfhE1fpwncTmw68PKNiqxwgVLZcDhD9sfsPx62amiRmRzHukBpjU8LY5oqKqRTfz6LB61Z6dDWzAFpwNypSa",
  "key33": "2gD7gx6UytJWeJzKPLLFDZ1g9AnzMgehoXigWgUjxVqfS9dYVRTwcRgurMyhAjgxEAaPu4piXDH1gVzrx5H4R295",
  "key34": "4WGrpg1MJHtgtDdRExB2iZNrD2DpFmMMiG8qQDrfgkyF5i7pxxZR87aGXDPSa9TQruWNhTQ9sx8s5wtJUCN3N81q",
  "key35": "4TQU6r5JHowufs7Er3ssQZVE5NFAHnrHba6LotnGBqA5khN9XAo8sv7dGz9fU3cgRktD6qWwXLVZdQaHbsNu7gab",
  "key36": "5Rmfkk6FiVxMotfhxjKtRYZDddKeqwBCiC2hRsXoW3vYNyuDp7ih2Ruhsr49gwK3YekCJK5jhMSj117groSp1eXa",
  "key37": "4ESJrGkd5scJSR7P1LxEMrdTwEga1RyFBqtTBzfxgeRfbRTsdWyk4A55u62M6W8Hcwc823diq2uzAUBV6gXyJrQx",
  "key38": "3778xHnvS6FbsLpKHExZGZdmMK1d8P5nrAwKQD2ucnEM7oVJVpPZfTdW6MVbsHwyM57uKNpSS1bkL8kmGBpqZehT",
  "key39": "3WykEcJoGaPwRhbYmkqMKuwrxBdXhMcuya9qv3rVvteQRoLF4EgYgWrRLZK16sWUGPxKb56rEuTNv5oky4zWqDH8",
  "key40": "4QjTKkyvYDUA3FErSa5Bd9BHyJUYpnouQxhStzE12MUo3gQSonZZuRvXbbKzau4GsEs3Ux5i8XGQ7G8LfHpckfLc",
  "key41": "sKSepupkeTrLcMHn51txQx64sPWxgy79oQeWPBSC4vhKNbvQfxwAN8hcUs44tsxGrVfmyNWmrE8439454DVfGPz",
  "key42": "TCNZrEUea4Qog6YuEna1ziVbfeTXrRq4QFWcXmHTTVsVfKJvJsowybSnZB9LdQKdTfBT2BkWM9yYyUK2NttFP4g",
  "key43": "4St5bT7VmqyWnVUx6ujPaoR7hd7AT9ryfnWz9SNZGs9REs1B2D5mTpsLJEukm56HjkPJat2Q3tDUFbbtM2ir98Gc"
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
