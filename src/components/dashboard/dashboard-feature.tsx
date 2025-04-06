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
    "3ckDL68RCAXso1Cke7ybJUnm6DfzgtXmgHrFGow5c4LuS3Tvvt2zKuVZKm9F1zTxydrVGJAc96bh7sTmHGogxRfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EZARMDVZ88GbRwcuoNoyv67eJVGQ3r4fKwmXMvhH3fWBTXSYsT1qQSUtF4VXRXp4zahX5A3vDdWVTG8muQDg61j",
  "key1": "4dGD9dVhStCfRUDAKVzhMfzds1yPU6XruEqDvuRg24z5exhkyELWGPa3JLrdHat8UHv9V6jUhaXegVUybVdiVuXY",
  "key2": "64Z7mexNy2JJgn3hYTrNTSdFFWx8aCq4MyKyaF2zkjJ8CmEAYfPsW576hCMdFf9Gu4mHJ9jzfhEG78eBL6PnoFLp",
  "key3": "2SZEAhWYVjL2X5YT12ywsnYjMbDGNp7o3MYaULzZuQE1RUddutcvqH2YwALAFnwXFzmd172q7rhmyPqRFxS2vKmH",
  "key4": "335cpmh7V5PsjnqiYnANZY3SEnZpinZUSYcymjucdbisArAT5AHNfQu68xvLt9ex1cXTXTpvNnaJkG1XXX7CopP7",
  "key5": "3xhGxNCmyqZmaartkXnDK2EGydQRwRWePfWVTfWdrupTKAXn7Krrjg8XEFymuNNisG2HgzSk46NLRiVmtRDg5Qt6",
  "key6": "2VdA6PNm5UeBjHHZFGoEcWqXjbXbXQrkKnE45GrKpmwDC2uzXe7jx42xNt89qcpJuVfY7QuNAHRHygEArx99Sm8v",
  "key7": "2P1oFNXcfMQb7D7eBMkZCqWFAuffTuNWw89SFAMvdPaUeSCdsGCYz3EVLbMNF3mNviq7AiLyzvf9R6smvdcpJckh",
  "key8": "4p9avW55Bckh6adToxHpBLthnEBML3gd4QpEx6ji6byuQpBLRETi6pYa5pnNmz4Az9FG4LjwF1VQRjJ7xBaKtR86",
  "key9": "xm6GN2xmduVbJDuYBxZKAxrknvseQ97Nj5PJGXMeF5WWDNddQSfF5B7VDLVVhEanDs1vEXzhaKDNKgZkD68PB49",
  "key10": "5rQHn77yHrvo6o71w8CP8N3C4qfH65nziiyG2u5xbhmcpdxEfJ4unLuM23sTWhk6ud4ec1PBGNcsGKWbPtYBmcMJ",
  "key11": "bipMFQkKQEmJsoRjZizLvvny9zdY36jqu2CmHrwnyBbbkfM7i3dB5AjnLeWYYwTgsNuN9mWDoGk5ZnitCvmsEhp",
  "key12": "NqcJv8aqn1JfK3xMtkZQSnbPtpvesrgviBtvL7Em7MwsMyo4SYiErMndQ46nHnhBCjYp8YqHevxrP63C7MEnLpP",
  "key13": "4UZ1Gt9asVf7MV4F6CFenJoUTqRYJYSgHrxgqeefXrDXCzCEQGLAbi5gu718vvdsCQsA7aFdHEpc5mEcvs8yxagr",
  "key14": "53fuvuokCLHQaMHuqQgrKSRcswa2WrNNQ3QraCzSb1qySfDyKY4ShCqqwMMN5S61EZRCDYZvqjmkL5bVBy636M7s",
  "key15": "3gZP7g9iZe6smBMewTrMGgvjMFFLBaiFCjNCALeFyPH88Mqk7yzK9s7zng4v5EHCQXFfr96rx3RqRFuVHxdfaD8h",
  "key16": "5237h5n52AkHPpPy11t87uvtG9HZVCXQG5q3N8GnUsadt9rsWGe2Aarey5edXzfsfGrnUc4Gse9G4ws31VduYEbh",
  "key17": "4eahKXrYrW9zt9UvsAkH6H19gnC3VZ44Ahd6SJvq5YLTQFhaWUAGuEsnMyWDR4BePz1SUksNuG4uDvtRs7zzFFLE",
  "key18": "5Wr4hnv5kvSSGU3qzXgJw9Z2BJ4nzEjmhrP2RhsEJm5ZEkmK9q36Ry53Cm8fm9fV3eRa3hrC7qp2pUoWMVwkDUXR",
  "key19": "3GcKhGi9fSbfvtnMbWdK7FVpCi9dSb7UtAKDWQHa5bacHJ82D6KjapsdLsL1mMDThgo5NoqxPRWpJPtVH9V3MjCz",
  "key20": "VS2seJi4A5nznEfHFnsJgQUEWhf8vZdMF7Qn2mKCc9TP819MAV8BFwr5YTJYbGf14AAu54pVDqgzDfS4WLj6g5Q",
  "key21": "2Zp3Wv5p6A3v577AjEy19hF73JhV9aWUGDsYXB4JBKhfTXr6mYmegFmbdiud8oik19inCFeqw8GgN3RZoANQjrQb",
  "key22": "3SqDh9z1AGhjoGRqhM2AxPdnhk31XguSsprGp923CHtEXKgEwpNqM3t8B9gQngFpsnrjoDWuaAFFCVjCsYytquSN",
  "key23": "5VGKNmXiZGVsmsAMLWHVwJiafBt87CbSnUc51XVxPtPutn6TNK3qJbRVayQGGfk5eUqzsc8P4HkWV8dpCibKGLqW",
  "key24": "3xT3eZ4Rmro2FhuDL2FBtYqijk9bLeKukPDFRkLDcGBQ4rWHFDkfv87VSdJrYeKz6Fb2XMhEnm69HZeA6FpwzCDg",
  "key25": "4jTRWYH2uDZLo5Vr27rt17HtvGcnAaEzSxTn8BDTHkHYa9RKF1GX8NeB4cAG8KeeKKrBvVhca8eFz3PtBzb8zGgH",
  "key26": "AN1xqoqFimVtHc6nB7irUQF5aHynCNuqzQYyfaozWeYYGnWukWjmD6QXQ5uRbE43atWPeKMmNJ5JLRUd5pRTccb",
  "key27": "3tFc53eq3U7pBhemAMw3ZS4tx4ks3U5EtpVPRYjyXJhCjghP1xWNvHGUSJu3R1AG56pKkt74RYoxn86JZuFV9Kj2",
  "key28": "5tRALpKuBKdibB1xNX8zHDqaqBqRF2ReuC8e2g1gUJv82GWUAS6J86NR1L3cgmopMwdovcXCgWVTR1fgcTzRSAAv",
  "key29": "5byzom6hZSbm6FqP2N1wKwQCkvp2zXi8SPbuqyQBzjyzFFYteNsgxeEvKrNABJ1pSdG4AU5h1RJWe8CcwpCnSTAy",
  "key30": "2mSnGqwdCwKst6466YmvqXdsg331nEVEVMP4iqe8HoUpbokZ7VvtCT8aSdgvWEUjcrLFjmToaHeT4ZDD7xLnuGBu",
  "key31": "3C9jEwUGqRmXKGAwohjgJ7MKhUUg9ge8pc8FZhHtCveZWs5awfVq11hN8t9GkA2aS754K9YpqFg5vRrvr8V8mEjA"
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
