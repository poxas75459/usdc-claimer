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
    "txHVBu5rYCqHbBznuASzTBch16kXTCZYmL1juU8ckWvNY1KvEMZoCCEvgUrdXKDAS93DEBLuCKK1BqABnacwtYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qJjEStq3VJgHqLoizess218ErWpkjw64kzXELrdnX44kncyQoUYoAsMdJiJskHEYAXpbu23Zq8iBfyba1c6pibm",
  "key1": "5E6J5ysceGmUYS7jDYopyHt7wMYnvMSZkU6hHooF8ZhjwVTAUpSDEtLi58TpL61EarDzNzjr1QGZjowYRc1QCVbk",
  "key2": "4itV46LHatViqgLA7DA9bRmAXrLgh5aHbKVC3zueGyDaAuRwFmYXxMf8BVPGcxZgWkBq9zB7FUvFU4GHnrbwdmVd",
  "key3": "KGKfnM15Aa1zxH1t2AUvo2mryYADiMncjScRHQAvhrG8R7FjxJ73sZZWGzCr7GVnKTW1gR696LMHsAv5emuxiMN",
  "key4": "4GZq3FvLg9rkE179Ke3QgRec4i4ver8wjnFBoVRDxAwJgtqthNEqesAvUnxAdERZyfn39YfjR3pypJvhb7gLPt6b",
  "key5": "3UL3RVUbHfam5SQN8kmDzqYFatxEnsLFEcij4aigoULmZrcL6eNteXymNAc9Xd3PA2XVgrE4GNAQni4CwYTt2p5k",
  "key6": "xFMQzZ1pEPL5DFneze2hsdL9fLW39gP2dGQvNGLCWMao4dWk6RxnVerz7djf6Y8doJmx1ERzwvYV9P4d4NHWDcq",
  "key7": "3mv12LeFYhLxRpL2tuCX1XW5mH2cSp6cwa9ADJBha7aCJ8jzd492763b1gXUHJAczcSv6k2qNYsDCq6xRnX5oYQB",
  "key8": "2Wp1GaUyVbHweeraaw67gzneZcmLmy25qeaEMTw4MQ4L7MZ8ygQgjCouM2c1NmcLRFN5Q1F3Ch3qQ2HbwmtVLkEU",
  "key9": "2pho4eV7KuDDh9e8i3e5t4JZMmHDtWsazPGo3L41LKFgZkfcTisftxS58LSchYu2ayiRncKYwUk2kShHTr21cC8a",
  "key10": "EJ7vZGhUBtUrtn3NPpt93DMzgUAqNNN7UPSsdenhVfXm9rKVwFBRLoNudwzXWzS4TYbTC6H6YLkQAHyKaK7Ttbh",
  "key11": "3a3Xn2hFzQgNmqAASAKgzhrfvVuaqec7oZ23XJAiNbVcz9RcQX5AYQySBTZxRc9Zgpzd7KLawYmd4GV8QKjMHewh",
  "key12": "4v3rTYa4YZ5rF4tNTk87r5Dn8skdF7PS1GUwNH2y7SeV2iU4RteqaovtYn5EQn7xexg3A1tjZ8VkosQJ1KVj5yev",
  "key13": "3bBBkvtbsWsJkYJkNd4iFpAdg2h3BaapH11obQ6eKUMspkQPqQjaqMREEktQcjXXn1TSpUs3yGqDAAhr54AmaSFE",
  "key14": "3KPq8Me1UB9tw58cvjBaWXvPwfLS6HKhB83rEVzPwFQz5KSJs5CoFXyEw2nyAcYRQ2sjohc2v5sJLjv38Xxk7TQA",
  "key15": "3WrEUd4hTnutk3QMKL4pkzPfxV8YfbfjjASKpFLixS3GEkrG8hNXjiLpzSwB58aWzLZRU9qhc4PBMgRp1GCTGdY3",
  "key16": "D4K9xtu54avHJ1r5MtfsveBG2a4hyHe1bb7FJHybwBHbGVshZ5vKkXWPU2gKZPF7rrD4D6rpfLT8NBwn3vEfKkU",
  "key17": "31NDU8pcQpnXWgcdmWgcZYuHoQhLSEUwnXtPUSQ3qST25SenKTTDdFSBtYdKNwwFLM6iueLDPQ4hBX93rT723Wj9",
  "key18": "2nSjTFLUqBAuj9QZcebFdwDaQ2vUMxPNzDKNnpsiEWmXzXN3FScCwrd45yuwSvjGMKqpJLF2BkzauTwNmFaFpaRY",
  "key19": "3A3ucL2KdTGkYoNFMwwysAU5U98LaB7CZ9zF2aGCRRX5A2mNKdhWc4nY3DLLJWPmsnigMSxWY24xxdXECtbSYqDJ",
  "key20": "pxMgD5nJSLmFeGmfLjy7p9d323o46EaeJGjxWobbC8Kwo5YafvfbTU7vME9yJW9QKsFszaqbpvL6HWwXQDNoEKB",
  "key21": "48tayaUXd4mA9wfrY8UzQMjZBQPjLUrv21rDcJ3azbVfmxzP8MEC4n2bDJtMrVrhK7eTpEVDUHFKbsH1y8oy9SxR",
  "key22": "5XTUV4Y3KHscGWLrtTiqJp3fU9QdqdAdFRNnQG639MfPPS937det7NWF8bto4N8st7hzaq2H8cXTM6Bsi3tZcb7z",
  "key23": "2BU8ftrGyUbWBNhD8jorGhC5GnuJGVSDbPorhYPv7yusHU5DnJkahidPoMuamyPo86y9azN16amenZaDKixKgciP",
  "key24": "3NdS75Z8qykphphKc4k7uu1w7KS629GsJMKvGTPiLKUNFDkG67ibAMgtgkp5iJphD68XM73DgGkcMzBrAkBqJDvS",
  "key25": "4LpPeCpE7rNHDAUii2vLB3mnoF4ncF5iHSvSycugFwNwDbMpHS2VygGzUPqvE6kBwDvVz6YvziQvJ8BFARuy4Dbi",
  "key26": "M4F4JCWSpK86mKcFejHhVhUwcUuS7ZpNVPJVBuQaGP2Lt3n6cUn5M4CBGehFHEEZhuwc3suCcQacmRgL9kmvLMp",
  "key27": "5BH5AKQkHr8aMnRPhuALiXwYXg2nFGzVhdrqiTtn3y2eGBaVEDSt6AWPGHsfpK2acyb2v4ue7vNMNxNaVsGrRtrQ"
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
