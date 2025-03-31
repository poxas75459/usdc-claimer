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
    "5iisousGkc9Q1Dd1R6b7bRCdJ8vzBTf1YXBoXeE5ieyqFZq1JtTpB4tZpUDzhf7VsdLbKEcoxeXkJLp63XBNzi5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32AZonqRbniceoH9kMktsitJRvEHLhaVsLkBfB7nM2MCnthTntrA1EVAgY82htGyAmR83BEXnSVz6Vv4EwxJyuvv",
  "key1": "PzNhwQodTzjpihTrKPbAMzHp1tv2gFbRusa58KymzwAgjMCAPrNPHQoF3JVk3QGB79yaQnNbX2H2W5umabcW1aK",
  "key2": "2g1U9c7ykG7QUpJ4e2qwMWiGaZYJ9PUM1AMQkdeXcgRC3CcvVnSP7ntk9qWt2YM37grfHZKUJkaNVcLo6BMUwtYB",
  "key3": "48rquS7js1tkY7ukmbRPJZpmgghCNFv2bN8A6ppqLJyBs8sEdmLy6nLTJjQaNrb9mNWoZ3kq6Chs4DBpEkvsiQ8K",
  "key4": "XyFuYMNB7V7vBaiPthjo1j93MA31fnuWnRDbFYHNqnMQUczQJ9fDZJZv939rLdQN2hXR4Xs31qnTQ8odK47za7R",
  "key5": "2dNXPbn4NCdsrbXf61mL2MbPwenNE5tzwnsKDRmkSBNCvxwnXj8KSESBrPpEjzVPcRiE3P4zuJDHfhKi9yMuPVwx",
  "key6": "5NVtNr7Qs69qJBsz7XdL9JaFw3Tx9TjAdUMVUebx6NuZRPkPGUsW8U4AiaX2dG4q3uiiVRS4ut357qpFydhSfqk4",
  "key7": "2uSkaUNtqp4UG5d6YgZTo9CiGfZ4JWeFMew4p7HcLQfx82i6L3NAXKc32scRx16UyNnMV62SCS5cNSKAawekaLtW",
  "key8": "3ZqXS7jyCCiN1EDMQKS62aVU4YhMWPoJnQw4v8VezavKdchcyHmYgJjfmLM3ptJ4L8EiZvGx6mBtuhSGJCBJ71pm",
  "key9": "28cF5id3z6zd5AHK9oMsx31H4yE1yNVhSRX5EZ8xPZbvsVuJyxWHWzpAydFzP8ZPVj8AE9efDSADbaWKqk6L9Tnc",
  "key10": "3D41LMix8BJxFSySNstPU7Jep9wRh1ep4sVfxLVjtmV2cW8nPxR7hnnJqwhMYWCV9k5RR7dYn2SpWCeHiYJaXxY",
  "key11": "eYi37ETKme6ogdgMf9hs6iQvDHdJwf2LZKhmooe93qiLDmdCSBcUHazVAV47MMdmkM8eFFxyywt3w18vBwtKJ5q",
  "key12": "5deUroLUyi5a3hmqTtjg75FkYQWexkWX4vBJBkzH3pUVft38nVMw9U9zyWzTAfUWEENQXDyeNDeZxAss52rz72Mr",
  "key13": "4183xUCAwYo3Dt956YrCoEbDQnHHFFVKBrjp3pt9FDmc4ciMxywBt4hcHKTKszhVeyQAmZ4bpjwa96C9LdcbkEHq",
  "key14": "JXHVavBXW2NanyMCZozohxtbh7Z6VdnJD4zR3U78aPphMjGU3bK7T2o4yriZENbHv41qz1JL2Qjga9YMDzcWNzx",
  "key15": "21QUJ3NtNS3deDQRiWAFkM49QKfbpNAfxatmScm4Qqr5RdRRyrSEB6L7R1orkpuBGWHTHhy4eeUcMGNUzrHjZ89G",
  "key16": "38CHJYgXpbpzVqEqc3ckeP3cGZ8fDxqvCFCJ1PqgtFPeNWkm2hBVJiveXVE8UZ9QHbmTqfpnVzCxEWAQFp4yiqx6",
  "key17": "4oJi3EdBE2o27kk2HeTfjTcydNFGAcY6wt9iJ7egXTRHDo1NwAHfGzGi6zkDE5Zedhuma7avvBLVnzjfVVCCEqtK",
  "key18": "3hFxWWsQW3ARTvqsjv9GSCo9UQ6gfNWanTkprvbtdz2t81zaFVBYDmTnkpmfYP6Xfdfp7KMikxAQk7y8o9sFU4da",
  "key19": "2pdu2t11X6Ej8JtsZf6YgdWMUuUR7EqQ3GbGdxtGQ9i3AQiSuuZr3nrwuxm5AVzqXn1KX2GyykZNSALJWY9jgJN5",
  "key20": "2aBymK1A7wzvKagR6sNjrERYpvrQEVX6gViRsMYVUy4wu651KXEtRFj7qpGwGcXGDfusxoF86oWdyXjNfCbqP7eT",
  "key21": "qamsAPaVFtMMa2k91pY3FnQmknEKbL7curp3vfWLgkkW63jo7t47JA7eYiwMiuYJN1yFL8FHr3V5wgqpjdyEd8z",
  "key22": "i4WS251d7WhKMYMTnzfwhNvkxMPzfFMyjHpEDBEABsMczastoAdwqtMKtgHzyAzpcTqVKKhTzfSKy4rnLA1D9Tr",
  "key23": "4cTPcLm97Ndi3VQEVTKufvUEczfWFFayazJM74fDoNeQGJEvYDJBCfWfP1pEacgWLmNV1BLR8nkgqrgx3v7d8tNg",
  "key24": "38k1xEZoDnpHNJt2cywKFDG6SJW53oJdhM2zokxqVi2hbHNwhqc2qDUCjHS6X9jp5LVdaovx79C4H3FbfDa9vYy4",
  "key25": "5R3az1i6eG8K3EHBsbKtvtcdWBiS2zX31b2KNewu3NhLjK9NYHn6RtXMvxxnbXHBWsUXJNgTZ3WSx4cGV6CsEDZs",
  "key26": "3EN1BSXe4i9up3Y94X3Eijiqw5YygNzWEQLk6a7vPu2zJ26gByK8fkQTiYrvm6za9qzuXwJh9yXrrJ99Nq8RbAYE",
  "key27": "5FenZbCxdcszwqfNLBMhAJLFZ1eqtKpF9ZTeLfEq7HU2FUFF3aZ8jVhp6pASVpLuH72txFi9n3bKo4JsMjQgbqrY",
  "key28": "4jjiAPGuNHFhXUV5NaBuV7awwTdt7wjVzTvRWMbahoSJbh4ZGVacZwZdNrEepPe81Ybzq4w1cpTsZuN5maxLX6jN",
  "key29": "4ih7XAqKBan8eDB3Gsmaji1RoukNMkUJCAojkatvojQCBVw6vyFU9r7BkccjF84yZB763p1Lzrg8Ndy8o8VSPghf",
  "key30": "4sohq3Mqn6U6P2Ndr1onPUBbKhcWj1YjBGwtMQzJxbud2hUVFaefrhZEgsPGKhNJkDmor2ZjsoBfW7kzTAonVGRD",
  "key31": "2uh769JqX4tQ3BadfMKxBvFXKmM9nkXNEtAELTGiQvWdZNwwd3ohzqZErbBWZFMUzQAz294Fn1HxQHagtrQXSgSE",
  "key32": "24PwDUrH4rBErab9fULj8oqRu2umuRTEz2y6KSEt133bXe3mZsaJK8mhg2fkA4o44qTfgLyjw6gBoNrJoaRk2qwn",
  "key33": "5yRrP3wnjcrUaQTo8bgfHn3pjzHqGs4MtkMnH5JuMetRK2BY1FtkdKPDScvmGy6bYYY529u8nZrViGYwgY16nqxF",
  "key34": "2T1mRCvPjF57NViaEaCMZE18cAckT6mb7Sj29HcvTcpeqqbvGNqqjKTCHGb2Ax5td6BNZfMBh6Nwgq4RY8GnrPX8",
  "key35": "3JUP3Q7CHzbPHrJFbqHPNeTWhfSsUVTbxddaj4Uwyo4CHtqwHYifmFfNkF3V6mVmSzRmA1xkF4y3DsVd26LuAA1c",
  "key36": "2SVCTNcKSEMwTWbnMVEig1HqWZHCXdWGSCWdPPHfnfhQdCsgMb6dQFVWzgfrBvysLYqiYWLtRj1GqtWroJ7gNQ3k",
  "key37": "3ioRywFZzzFurruisvoo2uwvs1SamVggLGuuKpBXPT4ruRQ3BnYxs9BC5j3rTDD3R8kxgtLeQrWQbT2VXqWbQF29"
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
