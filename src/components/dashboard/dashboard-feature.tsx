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
    "64FyPGCA7kdhjLUMRo5v2MUBNZLRfnpbMMwkRWNYx2yKMEqwMh9rnwSYm8D2UYtqU43h7LTbxaJFDxEVd6me9DAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qpmDpoGPHoukF28NPJukitvCGfs3w7WXAJDcjyQ6PhvRkt7cq36aEwBhtMYhc7N73wT5be7ARm2itDThg35cK1i",
  "key1": "2Ntw7w79qrwbB2M3mUgBRBoeUQuYn7SsS9bA8KHyFArKcsL8tokF3LdGUp9SUtpHjH1Y52fEa6veGW4TxM7Zi1G7",
  "key2": "3dc9Rbrqu4Ht7EiSzxbdDs3vRepHL8tDbfqPfjVbTttErV3HPDKMTehgfjPHJZvPti8b7Krfm9sGawj3V7f4kBpq",
  "key3": "46hoe84MHV7m4nr4w8hcL9qhtMPNX44NkqTSy5BBFvjSvTigazkjJXqh6ibv7dQuvFnq3uhS1QZnmEcKNPtshKYn",
  "key4": "T9oHTVh7E6q7e2WAUfRJSrtsosboGJBR9ipqQri5ZP1dgZt4BR5GeQtKbynGLuqfnwNJ9KXtrFjK4kYaGVPGcAU",
  "key5": "67hPpQ2vTqH8zPh32kmZ3QrHTy5iyw8FgRfR6FoiUajhWckQyuqGRh6jAcChL6QpQjXbPh1cmh2gvmmZgZDjkWwj",
  "key6": "5Lq2ugRViVuxUfNc5nLZoWFas5KZcnu2zPxBnjitABqDQENGqrY6sKUV2NaLJULs7xVrPW3Cq9haU3mQBVpEasni",
  "key7": "2q4G18ZJufhh4UpPXNLd9uXbLybHgyY13e7hZ9KStFgZM6No9ecXqyhLxdZo3zJ2uMtdnwQQDodSDmP1BbE8Q7HZ",
  "key8": "7fGEFG8VESfkNThUqaW9a4bJL5MMZJF1duNkgMv1toMLGmephbrpM2MQ1QzqicMbtgd4zMGhMpedr76UZFadzgw",
  "key9": "aLcSmiti75B1x14Zm2uDvFcbRjp3FYamxn3STuFdhbhXEJ8dYTh81H4uwyyA4YosLzpS61fFcoT2hMCcDPKaSyS",
  "key10": "3w22FhCtK3pQ99YnEgEWQGBzUDcW2KzKV5AN9H9uMX1Q3eTv9Sy1pt89dUzpwdm5QzuSvcU79AUXjNfWiCmvy9da",
  "key11": "2fFnrAwSgq9rm1TgQwHQzDp8E9LqYmVEGVBFqxGnTJFB95QgZbquXzThFyZHaDkLpXeEy3LTpYLUEXXggf2oWeA6",
  "key12": "276QQD4bRbwu9cBMshYW6oQSuWxfnukj833TceK7oKkyYt2tnbMDMdkMQajFar9tiR223bEhJrWHkh6m6sX6qzK7",
  "key13": "5KszJ3eHSU9PozxJd2tp1yXo5gQezAmamwvxWnsXsHH8pPPphpK7VNQ22aXggmyU9CzGGTFuJxXRXCTBU8E4WYDT",
  "key14": "2gQxSRJ6ppc3pT5U1gBeUcTAQcXuhxfamgLj9dbDdzDXe3XZRcVUhVo8U9t9d4Jwgk4pJoYgz29NL2L1N64PpJRC",
  "key15": "xNLxuzE6RdeBtmbnfrEQLaXv4Zvm9VdE8FMb5u52xjoVjpYeWUjALt9LUsGYKVmgfdGbH48zPkrHxBN5LxpdDAo",
  "key16": "457BZWHoyfp9b7aBEuiKAtuxuoMZ2BnyvSPDSSoTNi3XirJrfTmv5LYmJFKQR1fXHQvNKF9mStiK5cnt5puSJhLs",
  "key17": "hbcKhvnpo4qoULnJt4SpMjQxoEKWFURPkSZAurZ4tyhaSFRsLHaNvDRQAjsHerGYzXxfBCHMUbYuCVc3j3fTpWy",
  "key18": "43RLVCpeQmDowhyAmyx2B3Kb1w6FbD5fe2gU5xUhanRWq4eF1EnpFaaC4ggEqKTdZvwnhAxNwCNXh3vJY4Q7J55X",
  "key19": "5DXL1uA3Qv6btswT2xD87aZQpC4i6WsQRXJsd4ozBFLzB3Douxz3BPb1izF4jzgzwhiGD1iLvugue723sy7CeFvu",
  "key20": "HrPzPfGof2FMVNGaSZ3x7gjpUpS6ow7AtYXtkrotFEidpJVnx7BB9EmhoU2sC84pZeUM78X1NxPz3QHye1k4Xcy",
  "key21": "4vvuBTskd2QPjVkSsuHuoDBopT43kq8LrsWNdejkvibGTS8Uq1fq6a8a1wS3dV7rzKjU5vsc8nw3etCNXbdgxz6q",
  "key22": "2BfNgiS9F5VpXvJJn46x2UZ66FSYygiTSYy4dcJ25vhJRmUGAEAHruNxwSwP7MKzz2DdZPTuVwqbDL6sFFCSrSpH",
  "key23": "2dbxQmEAZAPCPSRkiZ2eJDh1Nxoeuw5fjN3MRioEhEbyRUhHR9pvp8unxR3cPhTak79uaSTGobZSmVa8efFAmH7o",
  "key24": "63zs23ydfXkBAbQEhPV1pLAY8Sub4nfL21HQYPX2dnwd26zanbzn6vuH4QWzB4ihMNXRWi2sQVy8oPQWiHDQ6Lgu",
  "key25": "22mNHxQCPmgcbvVm7hizaK7GkA5MDwuJQokyEmbHNms6A7RcYq8G9J2niVLN8RVycmigSg2pppCBmQcPH7aBwSdz",
  "key26": "59uXtDZERofFfcWzhcP3fgkMfFZAKBda2LKsZo5cujxzgV2Z5wpYLKoiz8YvdNVAUbgxK7zhKJwUyH6jDpGxysgq",
  "key27": "4FoP2aZvtozfKmQi4QMHwVY6ZzXyP7m13tb7H9nUSmxNHHU6NiGT1SFDh72FH369JTnYiPtNhuNKDnB6zasEcHif",
  "key28": "3rffNTqeg47Ku2dLWVXHDTJjyStZWCUuUVZcvXRjpdHAbgfJWrnNxhJrJD58hpquANRqPW1F8bb8EPq4Bf1tqj3b",
  "key29": "41L9UPddZ9zAvBndcN4XF1jfoaT81iVzwQRVyi6fe9HN3HWpfMg23WmD9mHD1EbRSGMMwEnEpfGNqx5hnwwdvD5U",
  "key30": "DCuTeYvBqGmm4gV2G8QVjk4fNbHYuFoDqjrNT6K2MJSepvDesvAdu2fPBgexs9DpsCoDiyqSupV8JfBBKDfw8mm",
  "key31": "3TWY82e3qRiYq5ejjP4sDqnwbfmHzB8aKXzuTTSoxwz5Z4HwvNMZvjiicLNkfeq8QqSmMC34uBZW229Lg6sRHBb8",
  "key32": "jeU4gEiw4Th5FyS516KPTJW3JegV9dXNy1BLFeUiPmAvDP6b7Zhzuqgy7eFCqQXn9bHj6U7AmcZowQs2RfH1tGG",
  "key33": "4sRwHd2irm17U9fUuUDQ74L6CxXNUPBtRifyab1kjoD39omLuYJ1jADJczEjobhMymcuL6C2hoFJAwpn6318mgzH",
  "key34": "3ZgUCuDPGiNtGvXbgzfHa5i5dxtQYgajRHKXsscnUqFGRtUwHLfHnYpxKmmdZK3teGPZ135iwX1d6zoZnRRz6pVN",
  "key35": "4EJ1F5rJK8Chzd1Zp5tSnDmurRRVB6XmSmJ1FFKRQxWJ7Vb2kYi5Wz6hCvF5xh5MjDd27VcLuidsY2Z7Yk2suYQ9",
  "key36": "5VD3eyFWmj5b51C9JWJqGh8jgruJpy1X73HLJoZZzQW3GnQUReLnht4VAdAQwXZEpjAFPmhxYUvuHpDHT54fsu1b",
  "key37": "2AtwcAzz5C7zgYbF1iqbiUSr1JSFZvdg7KEqJXuUaRZKPQwPsp69UYMKPHo34bZmqNLqTyEx1nQx19EaPG2wdvh6",
  "key38": "4opevouFy4r7ndRiuAiD3NwDWTYPbp3KVz8sf3YyXSadxBUiFLEXhAxS1jyMGwNbk4PWkp5Kz1hZPaEaGB7SDHVb",
  "key39": "3q1yJFshjkAGycPBGunBx1sVz797x8o4GHN3Ln25knjG3QksXkF8tKmCfHffhD96PYbTfNyZkx3kPgGDdibdSvbR",
  "key40": "53HrL6XVWW7mL3tcZKM9ZcJKbpRRNN7bx2bsWW61NaD5AehTQcPkhhvRiRY2rPH2Tq7DzKLqBp6j5qUNuducrSrh",
  "key41": "4FRRsybACs8pzUdQauExLWRh7usx1S9W3aZediPgw8fCv6EQVQdH71way4MJibRUHsCxH6T3wGmpURCK3a7KA3Hb",
  "key42": "MYavS4zYVyFRcFsobSb5QLjTEG9bXZkuRdcM4GStmqgzQWercotsqvyDc2YmRwZHnUPmwhgfgWcQDZknMnQF4zK",
  "key43": "2KymnW9kwCz79TSnCzxrHygWJNu3Mc6VxrYJmAYUAJPf53KJNK7PfkiQGqojGp69GK2zQ7xgYgrzCPqrpN7MBQkb",
  "key44": "3jJNxXALJ6HEksF8TXHtvuVgEuA2CczPK52s1XifWfo6PxMBouWXKuR4rCRu1UVhXVzco773gWe5V9ohuTKLu4qp",
  "key45": "5UMwLJfvkGdVcVYAEGcnYMBHTwixzH42ZHdMCWq7smAFpytwBUdTthhJHHXb3W6ZzELw1jab9ot4A13iVQSgPAjc",
  "key46": "3gZk8Xxmo7QZtDib87JMVK4wr1QGkyi2u9jWio1EG1pZRTLRLZeFrRstbQoHdkQGsF7krMnna5HQLZhtYrP17eyw",
  "key47": "4ZEjBwh6Jh5HgERQGL3JWauJXGt1ohokP1z4YsHLo8YPSvnAn6bD8t9Er4uSK9pSR1ePGJ42aW5yBPyfXyfRuJ3i",
  "key48": "231wLduaFyuJWcJTytEbi1VT3DeStNjG1CUQcwDVbd9T21rZrcpoQ2pevoNa58XzMxeZzgwW8faQ6QgWePEsT5S9"
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
