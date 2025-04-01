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
    "WuwFeGkybQiJK79EW7kdtRNu2G2Zsnd3KRhxKS3KvtugCDjMqdJSa1b9nD8nA4r9YLt4ZUgmJWXK7RsMfS6fA91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b1tUpLA6NbfTc4vMSE5DFBJtxNkgXn71XsUAPwWNLWKdjwAx6DMF5Xb941Du3BHRsVioK77bDDSyU67S1fRuhRq",
  "key1": "4uzCdXHpndiiKwkNcqMMZoiZp3cRtsD53W88auUtXmgHCGaLdCVvbBj2cpxna2qRc1QRwcjCuGnP2CkFMtKSsxC4",
  "key2": "2x2uLFcWPYw8r4zE12TAa5TudeqtX5mKo4tw1yGLuscfNNAgnXDdgWmBeDM9AHV2ajC2nyX9s5eibAcpJLRysxrk",
  "key3": "4R7cr7d7NAaMFYBehVHbyWLJrsvQuaLoFd7dgVt93yt3HWbey4kfq84XBP3zLR5frYKM3CiMZ13tKPx9rvLd6pGn",
  "key4": "q8xwbp8FriCud3acktnegL8QLyHTQu1PbzxLFLVYinPbTtSxTDtGzAdYjMKyd4Cgg6Ke4xcyPYgTuwpaRaD62jc",
  "key5": "4BsqTRaD5Y7ERGsxn9MESCHqagTu2TwkabGgm6YVsomWMCQ1j67gUWxCewz4pFUEnifhQWzP1nTdV5Xh4hnjbTSf",
  "key6": "SFcunqw7LA288nybruMv7oABZSwkQjvL9184ZbAEHSiLn4sRv3WSMzALYnWTfALgfNUypnhAqjuFpPJN6F4eZDv",
  "key7": "3KjyH3zwTwCSYgSv3dFkSSiF8sDu6SKxAVzkaLGQmpFrALvoG4Ae3SGaoarDa4G464SwvJiNqhvPqn4KdiuiNyCD",
  "key8": "55TJdLPqV45p6R7xkK7ioKzp8wZfgacJNNUHTcSdVxBcieJnTANzNmg3gYHr1JhBjfB925kDZNWNpACjmqDGoenF",
  "key9": "3WQ9seZSRx7j54xcrxVFxkmo1PAL2FhsZysHqyYXNicQwgG3yK3FMDuWXb3DPKwWLfLh6BL8BfGwqwbt6srrz97C",
  "key10": "2pUXCbzcC143HvFWoW47DkNtaiBg4yub5Xs3pE4sohNM6kaysVQQcqJdhmz5xpzTZxh5CbLWTaZTtdHYMS6smu6R",
  "key11": "2PNdU9sftzqy5KSQ9C9LcJkeGZuqV4FZRrWrtCcWH3EJrbePozjZxdN9wbSF86JMdKpFqXuTujGyXeN2QyRKxoxR",
  "key12": "3jupEfDjg9w8R88fX3qiEoBqoTbC8MmhBucwccAredhgGT5T242y5HSRdAxWJ17i84BpGXnFv5GqNo23Q8scC2DZ",
  "key13": "3xjMgQw93oPbqaE66aHCdybAoi5JDsXU5x6sLuKMCfhK6ncuYCmuy5WHhKve8fALpSZVTZfVh56tWFi8Unb6KjKf",
  "key14": "5uW2EFbcXimKmtYne2YAjNPvkMJpypV6h9SDgXTX6RiEUrnGottJn92rokfs3cvdM6mPLJEsaVHF8Uq6cH8XdVNT",
  "key15": "4Sx1KtCVDsXrkU1rCUqedh7XKZorUpepNjZehr2GiKingLiMr9b2Nr99WoT2DWTyyyAjCqGctTKCfgsXBkTypV1w",
  "key16": "wKrt29G7rTKHhDfPcoMWWQ66yJ1AwHHdy34xAVvg8qNzHcSaJHfdmHQmArBm8KF1hZ71zuSKdA9xarkwSKyfppL",
  "key17": "252u4qwK1CaaXVapgXnjw6hr42qierQSZ1MD1iUc7rnMNjeKkmaBqnuepbBCZzWLiV7oi12rMdxFUb4hK1GCKPfy",
  "key18": "mygWpM2s3LDSD39wVLeoeebFv3WSeP3eDCHrhQSU91pQaSA3wDmt8CLABkgELenfiTmF6H7TFD6gpzhLTFNRMgq",
  "key19": "5Q99Mx5jywKjcQH1bTWg2AJjHkHMs4DpnrBdLvT3pVYZGHUUyy2LHYFSFZRd33aAJw9mCzGspLzNKsjAW6fNarwu",
  "key20": "3TnNjAH5DkS2U8uTVG8unS1NrQPzY8VCtxyHDP8H5dS5DkB1Xd31h4Lp9V5QvKRctgjfKCubYLYXb3xXcxbirvGq",
  "key21": "JdK1qYnd6gdct7hnXLcXed4qenjcZXQQbXNwya54TnebfBaKyVsroqwBtnyvM1pjCdENY4Uu1xzHXTy8YgTq281",
  "key22": "5RsHFezUqv9Q9GppyRkXBoYqkWmp7v19pWX8Rd7hH9vhgsVc9PvMtUDQW2zFuZvNrDMpqhpfQAaYJWxUGSbpmBLS",
  "key23": "5FSHK12e5FkeGV1kxkiqZcYMxnsic3ZdxDWStX2w1BApiAgPZhnFkBMKzRXWJxEMXfiTxAsKMQMcgRLW1Qo65eka",
  "key24": "2GDk2TTbvx5Ao8wd5MQ4f6q2ehv9ea54o1Pyuec9UUCHzy5GQy35inUctjRnfjHrEXTwPW6PnytNLKTvFtn4jUou",
  "key25": "ZPsYqtrrVDjTkp95Bajd81oGK4dTPhjPbhA7PuhVMHs3v3SmfXYP8Se2JxixL7ECHFURZxsJx5H8aczzjgjprg6",
  "key26": "48WbCeHiAb4weFLrbekaXQ2S23VGtMZygapRko8VFEbQjxXajWCgigHHMtyLxL53HdGFBSQg6vW7LPJsSMrQdJwa",
  "key27": "4Lr9setyhrWW5MVnfKoYpECHN7Su8AhHRmWouECEyWM78gZ7eN3t4b9p1phu2o6Uh9uKn7v2Uub6hr56inZRHeDU",
  "key28": "2PRhrfUWL7XLUspz2faV8X5RRyCr3gYrak3MHGb51fF54s6U7Q46NwtAJo1SzZcfJdTJR4BsC3mj9udeDKbPhvos",
  "key29": "ZfHbYpR7YicVovXQ5YSs6xevw5CQ9MkVB9byRVAKHjLyaydapjkkRRJWuvbqz9VQTMjSuNKFqGK8sTCShJSHqDE",
  "key30": "3mkHw8ypoMEsvFepkQ5GavKS5L9LKfdqKhfhbkz8VYpVzhA5CDT4bDPDUALSkBKpQs3CKixbD8njqmHX6VTJ4u5W",
  "key31": "3Lzqe3ec3ixcwYBsdTwSqDixgdssKUW6dn6T4edCtPZW4QjBzjDuaYgtcjom7kxYBFX2NpDTPC27vUWgCk6LMFzr"
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
