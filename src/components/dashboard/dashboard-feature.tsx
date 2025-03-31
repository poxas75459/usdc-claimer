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
    "5qaNHQG3s186rNdWsifWxR9Jv8EEqV1rsYTgK11A87f5REYR1vRE1VzZPU8Ydpp9kqjeF5sM4VGxWZz1D8Hxc3FF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ckVRRiFPXYp6XCXdemJFsY2EXgxyHRGdTZwtmePCiBAvwv3bjgvJJx2v9bSi32ig6JYGhmfteHCtnpiMUi8vmoX",
  "key1": "5r4YRxg2Hf26KrBeNMxoRVha2kZrZ8bewu2JE8bzYy5wZCzojViZSCBysco57VQ78tUazqsYfdHNHM4PaijjpcXd",
  "key2": "t8EwnvXh3ZqG7L8z79gSoRhKvEsmuEEUDygbmKgeUuueo8HgeFT8eQAaNFyfstcbMiiwoRCMyKF2GmaoK7NmABC",
  "key3": "4QtGFYxs1z2cvbNX8puVncXugVxPyiMmBXoYu1XHdqDDU191qZdDnEdrsBufnrm938NY4vLaT9M6zeC3jv8d2T5S",
  "key4": "wuux2q6ka7xMt2WfJ85W5DMMjTbCQ3v1UqGV9YcNvrvpSp3AXfyTTDz88niRE84qyf8XwCDKwEiPGcdnUSkZ7M7",
  "key5": "NVoVEdJpN3zpNt75B4Ticu7nvc8VrHEiR2J9PcFUMEeBpQDHbfydigycTNTSzgJMC6VbxrDRbgBZCjwNm5SHaYE",
  "key6": "5a1tMkNy5NMP1k37LWW8HvaoiCJ7oHXmfkayqEwBQvsVkwr3JMKcuVVDriHNTyhkQxwsPFH3V2XN9ZtJHCqoibvk",
  "key7": "2sgk3gp8pLoFLbLK18EpgZd1YkZz72CoEf76RavfEvYquQ7B6okivsgdbJ6Kzk4s3mbkm965fPkZLJR8zbfjjyJc",
  "key8": "QwAU2x76rWBSdd9CekcFTvekaDpgJYN94oCuvBUaeGHWyv6odK6LHJKKCPwbQZArpkKw7G7obeQEz4z5d1QXRas",
  "key9": "3gCWj6Mn7dfrgU5yxEbCEMHzkLFkgyt8sXEDpxRfbpTV3ELMj9QQaDpGjhVr99G1DJ9qtrmoyoj1rerDoxWCH5wc",
  "key10": "4NL5HFkndPPPWFQBUvF6EJLrv3FpUzzpEyJUDonVbQT5bh3oZSfHFJmaYTTCgg3ezLaaMFfku9v8vuwYxQ4FBmmf",
  "key11": "5QxSk948SJCT4kSDDLAZCDhi3TXmpMqCaMHUG8BY5HyXz5njKfung69SLyJhVXbgvANwzkF2XCAC4fhiMGvF6Jdz",
  "key12": "3ue7Nu2AxFpdZvAunuegWT8N3ZgEud84d6zrbrtPhE8qUcsWSxq81JoTmXwamjRq87A9qtyJLHgsPbWMd4cTsk65",
  "key13": "3VcVooDjRgzMYKsiVF7tY9PjkN64MYKKDYFLzx3LFdxEH7U7vP6cmKB4SQkZz4FxVCSHnT86r4Jvs1KeHs4q1twp",
  "key14": "3YmT1Zngtz1UD2uvUWwqkB52XgGVzvHetmxtggj4npwxQ1GP8Cq4t3GfHBoU7BFkgfHa3bFsApcqKmjrSsXLP9BM",
  "key15": "43EuqqbRcCGQy3C3Tkg2sENzuTzt8JVnMqpBhrkmxLfaPrt7NAgRgX155yq4Lg1dZucHeXXvKdkjrWJguF5aehW6",
  "key16": "qMHsGHkDR4iVbXeudNWnTbc6QmJKhJdefHW21nNhXY9HEk9JmaKH5UZLVSurrWSvurZSfhGc4zrwUcKkatbjc3S",
  "key17": "2G4rQymJXv1dRJWWNDgnzsG5a6jU9Abhb35MSbLy1u6sfccEcvzkPpYmSJbyvPB4dznkgRwUDEZ9SujeUfm19uhc",
  "key18": "62LhJ4yry29ancqzMhbNGMFdH1XkDUmKCPiRgQdm5zsSR6iEsDA2ZDMvUVisWMi9DPtYPtzqwBjFnkBPuM18crER",
  "key19": "3ZdTvoxjDC8KmLkaK3fxvTJe8jaSs3smqpnPRnTaF6gxNENLHLXNTou8pJwePRQPihmJ7qZ7azSqq71TRPkT46jB",
  "key20": "2iB1G5H7sdv8fcLc1ZcrSKbGQNCqks6TGWGohTEYQex5eB88pqKTit2LKH1fYGtG5KkZVrvR9yDsR6oR7qFRrVoK",
  "key21": "3P6U19CtgE1rNKMfDG6Mbb8EKcS3SusCWfbD2KvLDM5RvtS9KCZAJ4aWsTQ56YwLUAPuXNJ3QzEcdDWEx81E4Vdm",
  "key22": "2xouqroCibBbGemMLe4YVvkqop5UTPRogSVQVsoBqeoPgkqmzwRmbT6QZjRM9hr81hB9pp6RgzokjRUVSC6Y8jDd",
  "key23": "5JaKdeKmY6nAsUp5tt3Uyzxj3HAweG1cg25eUt6WfTLJprP7mRXVJYBxn2prsjLArx2bMCBRxwL8TVzCVgjL5nA7",
  "key24": "2F9C9Xn2hfd99wzRmhj4QWzoCi9bL1Xy8rM9o5jZUtPs1wpD4M7e4EZkmBERCmQZ5UfFNdo4ax46Na3r7AdJKpHQ",
  "key25": "5puNocpBgmvk1q2DvZyUxg3gTZhnQp9FAwA3nU8w5xnQWo8jWRq26rhq7hrMzv2ZGhgfAeXAvi8iMNahEByJjERC",
  "key26": "2n4bYmXtw4eJBeJpwAaxjmF17CGNMrQUbKL7vkQmQ9nSNczjjH1N4U9tN3xCjmPEHiqUXecZ4WzHdSsguuhXjX59"
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
