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
    "3BHQRhDH1KE6DASjSbGgXDm2juctQAZQNDqxkgVHUNE4BEoUpv2R83D5e5AdFR85YbB2nvSucNdsWWb7TG7QXUwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sa6STTwfgqoLKmXggxkBc1FnFCtM5gTHCwT2sC3MtsR7aVEio1QMGZVShAXoyYuJ533GSKc6HFSeVqjhVLWasH9",
  "key1": "iuf5EryZLBDnMjCaaWYYm9z3vSr826J5r2skmqE462VjPGDApuTkQKFnowPAsbp3NoTeRcB6KqfN4GbZuXSC4y3",
  "key2": "32RykGm131fYPdjp6xd2m7Gm1B1euicxgewzmTGWZRsXHuLVPSVC7ExbQPwrsieD5gYAdBrbKgXw7svRjHQVR9c4",
  "key3": "3c2Uhwt4QgiMrsMnEJgL32YdkzXhp2ek5Nu3EpMMULpQgPSdZ8B9riN24Xh7pCh6nMmWvUyimRKD45hewTEDK44u",
  "key4": "61eHFTNMM6dbCZdRPanSQkb5rhsenj7ZM8g9ZQFoaYMVSw9k9AbUYhp3jRaJyFLBvUQd2rQpVH8wKW882hkErbn6",
  "key5": "657zoPmzLV3r9xBm6P7nJmAEPG4DHncvvC2jaW7W2pMgt297AwTicKeVy12P89eZWcnnRNsuLyhcihFY5pBo5Tyi",
  "key6": "37TCAvTXMygrzaNFwpFhdxiW91ybXwZzWZibDcrGGVzyUQ3X41kUHVhc5i47YG4kp6YaAF1PZKdrWEc9QSxxN4Zi",
  "key7": "3eyqXTji4LPXRsQYRjnsrPDSYH1GPYFiTcfyynfDFpSTyoBAoNRBbxhoqTLz6sYjECq2dmCKbYJi5phRrTLaze89",
  "key8": "3GV3ZBy1BsBiJzzVUiuQJBAccksaZpibgXgxGH7RWntwV3WWcX6PAthPGDYYnyhvwGsccGAA7L3ikPWR24fUPcgw",
  "key9": "3256CB2CS9h1m92Wcw9AvDuqZMMYSzfKBu5sJthCtTP8NNf5Vo31fx5wUU4NB63CiLxsB4ypoUY7sG7BwhbcFH2i",
  "key10": "3BDdxmcvdZt7nAuzvZfXRxxUiAcFQ21b4ZXkSX1pYxtJut2xi7e3KRT44a69NYf5wQsgQZH8GSKnh7SVgD6HWW6d",
  "key11": "3MdvC9oxRf4VBRD4c2CLJQsSRradZoxQChWFhMnni2hxBMcMjMhwDRf6nNm8PTLZMdrEeAEfqt3hfFYGj1sxQ1Um",
  "key12": "4hXNXJEMPY2hBqSFaZQyuo6JvT6jCDVY9h8FqiSx3Pu8s5wzfPfCa5wTZkNnHq95DVw6p87G3moWMPSBvmnM3AEg",
  "key13": "5k7rRuHQEcj1kgYBn4Kh5anxBEHwzqNuqrBF4hb5qy3npMcXYUde7wPXeAmHEWVShCRkZBYrj8uv9JYTMpJw7Mpz",
  "key14": "3ucygtrWJ6PdwR6gPPqKNKFtafpahNNxNwUBKXnsfYqJJxx7wwmDPGi6qtSbUsLQKeV28yzmseJDR8DwceqwyuMB",
  "key15": "5CtknAAXSqAnbzFRXBKYaQsrJ9BtVVBBQF5PnaEsnQyTJWeD2G6PugqZVCeVfkeTK2iH4Ttm4XPqJ94yPWuL6P5",
  "key16": "3UjnWjxYS9fDSdPvF5uXxg385oVWFfywMEf98zAc1Pk8KbT8d4BrxKytGz1t4ZtGsiFmXDxyUXnMCHkfdNCLsWSu",
  "key17": "6GVgWVAVqNnk9M5qBJM9wEv9zT7EjHdvWGBQGciUGR4gE53A2AuFFGasWEY4tjEDaaQxoWschGyZkQFSq2Bmz8r",
  "key18": "47MNQRMDET1JcGXTE9haefDWe34UjKvt1NpGhkyGcxKMzW8zQaxajF5JdBS54ifnzKqpcsy6AiP97PJHFrV2WtTs",
  "key19": "3fEb2DRTEyGzv6zKTXi2VTd9nbkYEkASiyVNtCqN99BzJP4tuKh2FwH6sjCEHpRmJRCnRQhqbkcK2EkpDYTopSGJ",
  "key20": "3RBoLBnZkkBeGdR2BJ7AzgFKtsyhk2Yexq6bGDCSWWQGY6PevH8i8ynjYQ8CNQBhWT3Ura7SbpLL3K255KDgA5sy",
  "key21": "2wq3WyAmFjECujYwDHKakZrbtmXH1MjqrBUgTFY1f6bc2mAmGi9gZL2J1uZpi7fV229CrYVhknVac1ZjA1bnWGZi",
  "key22": "4Eerj9WsbiZdXWZRAfQ9U1QpHshG2ZTJgd5ZAy6b6w6HSa7rrrh9trxUbkPvWFe4RBzpTTntSqSh9hghb1qB9jnN",
  "key23": "2oyG3W3WQ21HkkwBPgACmfa6a8DihaEGBogJDhsqA5fNZmbP93hcHJrPx6qJ9Ge3RkSpgnHs4shVMFjCcgKfcEcR",
  "key24": "4mEVraYzajoTisp3ziAKBkYUyYNBADSRX51AiorFwqTsFzebUQuNhPLmFfjWDV7KCobx7SYDBneK7gNo91eRh5nt",
  "key25": "4ydXKWuHVcA5SXYfWoxz4yYPVFnZFaQAkPZzpeoSaUbXPFJThhxZ7dmszxxoxywuSTt8LGQtakve9HNzrkkPsGce",
  "key26": "4K17ocvuD92NgXzmQ91o7ELZaNNWsZ14RtZ67uWsSzEQ2UuzYF7CvDtrhHfvtyPhRgi6CETFLvuRWPmspTtbQmPp",
  "key27": "5zg3RGdBFt2EieXECca3gSEdkkbabJfsgE8DVVdx2CYZztMM8GXTt55tWmyinw6X9wsVQ8rL4UEv1joWAcER43NY",
  "key28": "4Pr8Z2ay8GB2PBUSxH8juBvY9oazghnne3aTTT7jvjE97M6dPYqWzR8mYJoiUjSPwnn5jin8FBEYjR9RDyty1FJF",
  "key29": "2nGJuhqsynamW1bPKFG4KUnMtY1sEQodinpfxfmLDCnifxXG6wVMdzgpptX4zgrKEXrApaPcoBEyxLx54xWcMjyL",
  "key30": "KMiBW1f2pceYZBQoWkqt1ec8crp9ZGQmqG6g9CgvN8v2GueiX9ywSx1s3sGh65GzgJHpomFP5DeaoWVoV9qhGHc",
  "key31": "4ncmeS8vSEoJExUwJwqdhqcG8B76ZyuNCVg9LhREgQWFdmbHU1DKq5jb9P9zoZ8dY42g5tZxbFHeNfdQMcTE1Wxv"
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
