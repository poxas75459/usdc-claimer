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
    "5HJMn4gGYSqZVhQ5Z47ND82mySC6C3XRMjzu5AndAe1aZL3PntBT9TVsaqeDCJTC1ARPSgTkLNrcBcfMfHGfyKa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ipAwg3gS3ymY5RxDM9VxwWGZzd7sCA4MCEwDBNBpxEfALzcL9cBDBMDCmShGfXPSsbHuEw298X4nQgLVmBxmtJd",
  "key1": "217e7GZtBT8rijikZD1kB2pQCxF9kQreCm5VmQDUsXX73jnVFM1vVFXVJyurL63h8tZsZ7CgPJx44BmnYWc7ZF76",
  "key2": "3TkrYbFfkdJRx6CRji3mnuwfPATMq9LbzmqaEqQMtkC1j1aap3bCHy5JiBN9JXxk2PDdy39hbnBrKL4tAyCayzzX",
  "key3": "4Arsj3prkUQBXVE35uJtSoPT8BBYs9qvMZXFBz65fPdpSqh3Mu8vxD7pevbx48mcUbdjPud88pSyyNpUWq7cTogP",
  "key4": "4dM5MfpbhkRoEFnGnjHLx7EwJK3WTLsZJ6ntWJMtKFh6NMd9FyoYhdQCqbRrXCnF3npQR1CT5siAyEzPfr2drRuM",
  "key5": "5FGFbN5RCk1kESJRMV7KEJZkk9nGYSra8XJSUKDqUDHpxfdvJDfWzAQr2LARoH817WuNq6SdCDERc4XqSsvi8bAr",
  "key6": "2HcxxzW6FsvEhFHKBsduRoEnHQEyyyLRvvzZKGYg7vAQgoGBebp9bDSBBMdDZKQ1yo8VNwsPUohbn7J78g6fhKLz",
  "key7": "263bYd5GKP7Sy8SYsZ4H9qDxCj6xX2VKvQipaehaWCNmtGb7mtGjG23mPXXVQUPtKKgnme5BiJeSGXvvRzzZ7WVd",
  "key8": "64mhaxeSiA3D9bo5BdKikGQ6Zjo1KmTRk18QzDttvMY5uHN8MBS74NX6SJZuhhYwDQVoGa4mPTf3LoC99oKwmhAm",
  "key9": "4KsRbFLkETEvHVkojwPs4QmACdw2kR8nK77KYpNt8RiRFW6syQ6LfkPSLfCMaZgkzfjhur7RfEsZvYzZnGFekHSB",
  "key10": "EgiabwCFbc4u7jcCsJxiTrYfPBvkLyRgDtNcCvpSWySdXhaATL8aNjycng4kVy9ftZschhnJ7YUy6FwUS99HqwM",
  "key11": "62g1d9nV4MKLB1aqaz723dHU8bjSqsBBDnRGaJnyEisNgfbEETmnX7oEquMArUQ1Dw7LcFF3FtGGgdHZQprRXmT7",
  "key12": "2NWd7JDobwBnreXUWU2c3FtCJ7EJegM8KVoHUfxbVuLUTRy6RsQygmeMq1jinrs95NZT43WdvoXGLLn3UbzqBHDu",
  "key13": "4tdKUfwzeECu6745Gciu6nYenT8yjCJ4YBGJY3x3GRwdzLFQijkY1cM2MfaneaFHTrozM1Fak9AjyfbhczRXqPue",
  "key14": "2by2Lvxko55UPVxkaHfRggjcmxmZetCG23HYdJ5SfQ3BJWjZKf5zEpwX3XB7kuV2cG5urNGYM2KC2dqpSb4VjHLU",
  "key15": "5uSt1yh5HmdYQdWm6psT48AxThF82obSYqrdFYPjFhrmLY7Y3mP9jegWhkmTus2k9a1kh7z11JMPZbYSTLKNLoe2",
  "key16": "328pRefmzSmrs8fdHzgxCyhb9Kj2U6VAxnUyAzWprN2B4EXHr1cgL4X2WLKFmQVA8EQEHopA8MmTjx41xD8JtxCv",
  "key17": "47q99LE9oHaXXtjt9wvJ44kB2wMtBJ9VXesMpm1hfHWKVLeDHzYWy4GmGUyrZYHK38e3dG1mA6SpzFFsp8UEbfZC",
  "key18": "4LkWbTDhpDwTd3cEfupJ6sdqqwxRCALVPvdugr8USPmtUEyGHeYiamcG1AXxvdWizzq5Yk3ntmoiRBhPDNRDYXjB",
  "key19": "vNag5QKPjmEcniWLCbqF2t9rmfMEhQyUVmu5Hf9mBUG4v59H5YE9u9o2Q6ae2VabDVPiLuTLqsYpDxzCyyjXkZp",
  "key20": "2GyQYVhA3Yu68fGd2PsoPmF1NJraCcn9JTU1Sm8F3V9GpNL9ycHUjir4nGAqiK9SQHN2yCTncAcppfc9Tw8Wfb1u",
  "key21": "FHCRmwYQqW9aJ9k44ozueFEFrgR7xMMovZnDysU1aLU4KcUZhutbb56ZFdPVtw6gTZMLhHoL8KJ8aL1n1C2GkBG",
  "key22": "3E4KWde1v6pPifpNa2iSQd3JRAwr6drr9bDuriP1AFPL2T8tX97c9n7skP9WCgsUByDmSk4ErAVSqATywMKnrNnD",
  "key23": "3tLJmMPeazjNeYR7kDBXf2hCRieQGJPhPi1bso41vtxDXbvbeGjU3GufC5fLkheXiGoAdd3PmzL4rjY3pTM3pe6U",
  "key24": "656oUnd8NZAox4rpk1es3WcxbZxF3pyyntjr9vwpQu7kQf1dy2zRB5qcaPtKTUkz8Mrc1unph3sAuXuSyh1mWvFH",
  "key25": "43jeJFTptqLXhzD5HYznhewrpEgPqApo4tVAGBWJChhijJVNq95YEaDKpAH5vQBn7U5jjL4nYzFhWyyANWi7kAAm",
  "key26": "KqVi386W4QNk1AFyRouEWrcyAezvyStK8qGuH6vcMhcLRZBEB7uN3ZbkdxybLW4WTJ9zTXENe9Vd2BZXxELi5v5",
  "key27": "3AaMr3TGrZGWRXmgeqiCX3T9X3J2e3zrSxKstcxwfEEMyj2zFqPbWuAbhGGHuruQRS7nH74bjnZ4xGYFXHwP3a81",
  "key28": "jdccZGJXeKoCsvMCbrE7ZD7aT4rUd8WHE3U7Co6UksCa7w6EZQCQhkUMDfiXfGA4e7zz6k48294KpLMPatt657x",
  "key29": "4qLHguJ8YMzoygoSs5xcdtsE5be6Wzo8rmnq4eMkSXR37wZQd3sTrGMGVrX1UNQkHxqQud6w7RNXZikE4iQg3mxc",
  "key30": "5Duv7Cx64AGPWbNp5NUWjyedshKnnvEaZKAqpeBYo25iMu98ao8jTP9oW3expT1uGNECFoMfJT76mrwSu899eT87",
  "key31": "5DYm7PX3yY4FohLhaLuEFw6kqWGsNjCZMGSj8Wz2f72f9B9HQC5pJtEz3PnT3bpqZSi7NgCLoWBqejQ9oas4yU2V",
  "key32": "2jue8ATqacsL63w5d3q1nyvbiycGi1njsCc3m2LGDwUYYYfjJMQkEFAq7wcXPKQif5ekbjYZxwV4iVeibemLt7Sy",
  "key33": "3MbRbivjVVdhBP5MhanyMok1eS7gW5UHC5mC2wzt7JQKAG6QucGhDjXM2H9AdWuobjQG3b2RWadmBdSMozFcmS5U",
  "key34": "26Beu7GDWDkfBfvi3j5RcCxChoTb1FPHx1zNhTH1TYUS8gFUswmeP7sZBcxJdr2ELCwzeAfi9uwmeXcTAs42dXRp",
  "key35": "nPfrHGUTd6YkAokTUcsNhaEPB5n7G6XG21nYxGNGnSFWsGw7myYB7fg51fYGoXYLXbcuWmip7MJ8H2huW5Cwrku",
  "key36": "4S4zgwD4QrYub7yT4an9DjCsrbVcrKp5gSKcmFeb3HDCgPAqLAuXzJG5KjjzLZr1otqg8zWieBNaWEJTy9kHadUt",
  "key37": "4F8i48CsUqfN3DYrBRm5CXbDxvsjTH6iSSg1gB1Xu8fXRDFwQsaZp6M58yWCCeFmYH7nGpoF8hgthSAaATnXL9M5"
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
