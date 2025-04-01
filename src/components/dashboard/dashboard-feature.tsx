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
    "5hVxDVdpHoTf8Mygi2FQeJTRm69o3nhS8rrcAxveb45PMTJtT5FPRQn6raVxGqtbArzJhUVeaoTgHXxEhJPb167Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57XrxeGpCwz6gGyXMwfY8y1bjQURQPQccVmSuE9o8GtHPiiPVfHsXxT6yJMe5PrnVWMweoXjDhs7wNFE6U8vQe5T",
  "key1": "5guM4gKXd1LNbHtHQdBe1v6Ubapx8BmjjXG3NYm2njgSqHRZNHMguC2P6ziibwFiDSjNQSd2sEtWqZ1wdoEBbUaV",
  "key2": "3yUJW5JjmNSU37mudos6cNaXBJUMFZJvXJPTDiMT6XSjdgqwtGc2birSx9mDMRj9sgRMnQkteZZE9KQycuXR8xmL",
  "key3": "2mdEZ34e4cBdSNuvz5QrsSnnvYMmjaJQNjmcCiYMjmDhb1R1rxeUhFrM732YuDjzugwDLvsj1zQvoCdRNHoXz8Nz",
  "key4": "5sNv97EpqZxdMXVtK5ng6YuYuLKuhuerZ5UArVddTKikcCJg5nuuKwM6UnQuPSDUEjSyRKbrnsjxpMHNbByCEtn9",
  "key5": "42XwHdR3hguRmLkEsUCZhSe5BHn32YU133W6y2xXmAbS512AvZt8eU43uY3ovJgQcDPq4EPFd4rM7tBByczHoF4n",
  "key6": "55sGBuLV5QdA4B2jg6A3rY7Vxmu2htgkUXAs4geCHoQo6v6N5s8tPRzBeXVzcNbozxFa9yE57LsnxntH99FpTXse",
  "key7": "4ogdqMXcVGLR4oYmVutGTnoqKW6eKSDStwFX6TeJHXCnuAuXnyrKPMdZhA9whCZu2bCnLNMfn4dXDsPmM7DXndPK",
  "key8": "5EAiwrekEjbaA6uminuHC89r9cfQMLHyQsVAYt7e19dLgNay8wVfzgZaXUn4aZAJ7DJ74rKeYSmyiY5XkzGiB179",
  "key9": "4TcdtNtE94nS8UXUVr43ce3smsCDpSTf1LiAQhnV3p8CicdmdPE9Yp5xnjugZwbLJJf8m7x8aFAV6zGYnxg2Kh89",
  "key10": "5ebH1dESfdGwebDWbn78GT9pxqHWEbPmwGpHBn1HGwkoQPC7GE6EPwmXR9Q9whEUZh5CbEhpywroSzg9ZJJjfSq7",
  "key11": "61dFZsxwqHoukKUYYa97xndGaGqA1vkMxdZuRXxy7cGhwFq2AjfKUCmSSwfACsjefMEb7SorJx54A9vhU4ztwXte",
  "key12": "mzv6stUbtUnQvhgegmaC5B4wP838GJLSCgpKTpwXUe4esMAdsyj9PMUzLPaXVjnr8GHYSbCteA5JdzmMut3WWFK",
  "key13": "4rnebpUK3zcr9XHhos3s8s6mGKMEEHRtmSqJYJMKTypSPi8ciVXniPmbBdYifsadjkTKSF3N9MRB1FNxKewmEKWT",
  "key14": "3QYrkiYtY7a9m5f6Rz2CX5XDyj4RQpVuqBSqDaGNh64C3bPTp8argipGd2go1xTkbiJjhMPgYq16jQEDURvQ1amV",
  "key15": "5BaFRapndymySdp2QuNfvJdPJbcM4xYnoeSFxEU8j6aHGV7Geh4Uz45dkBuZffrrbbvMN96dfrdQtWcgh95u9wX1",
  "key16": "5EDhKEBVVkxApHM9wd8Vdf7tEg7ASqshBSXe5pwAyeM958rFjvWhuGMe12gLD3XmfhtpKRipQHQQoq6YQtbDepC2",
  "key17": "3moG7nbSJUwzzSkarv7AjkGP2hFnkwVGvLEUf87FwXCsUsQjJA1SbzT2okP2MvZb2c5FqzN8DSbzBn1oZgdbVA1Z",
  "key18": "2jyZ53itBzNorsBVqginnFYKXKrwDFpW3xB1XqEGMBRPmarcokPMs8rfFSVdfef3w26wa9AmDao79tkPzDkyHG7L",
  "key19": "5drjRKwH5A2ub2Vt4NhDeAcnpSLcU6Xy75LfswBBmqhedBdKr54TBK9TehiN5BFXQJM6e3QJCCwi6Dk4i22mAJsa",
  "key20": "4gCJ2FkGTpwz1HSHzTxoFyAg8YCwWH1Bm5vbfLAvV6b6dn133q89xeEcm7bmZ9FGTfj97gCcs3LX1t9XTwX7WEkt",
  "key21": "2Yfr1EfKvumxYBsqJ331pz5eur3sTBTdryVrhC8cTe2BduqoiDsXLmjscSVYyZqqkkdR6RM95KRefQsD9pBeWsZ7",
  "key22": "4xFWH6siDKkjbDWs4L4NdvQYYAT9gtXxVCurEoaGeTUhg47ed8s8HiCNTW1RHe2ARPLyTsVrtU1jZJ7ZRiibTTfY",
  "key23": "2FniWEXuv1yB22h6yo6yeCZsve3VqagALdnBy1vfT66GACTDHK8MpHDPzCsPDGEFTUYwdLTdpFr86ik1gV2t7hsL",
  "key24": "8UjM2XV8XAv8JokZndN5vbGV53NyS9aiXqji9ZVnakSbnapoUEipuMqc5jfwHnidEe7CZtPr3DPMv5wB7DETCCy",
  "key25": "44gKkBmheFx2gbJGUe2BLd1HJSiNNbR9fUAUuV4b2VS8r4a1FA9NAsUihSk6716Kxjd5A3AuvDDa1aR9vc7oz21p",
  "key26": "5fRotm4Ak9DZhxNDQaxtj3gAGJQbux993KoudZKG5ANnnQwg9uq1ZrtQHJ9wGFvnNgjGeiWnD2atBtpmNtmRs3Zj"
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
