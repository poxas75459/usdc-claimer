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
    "2L3tYS7trtrrQwKNEZ6AfU74zynTBcywSQD7h4EdYcYCvz2NRKtRuGMBqCtiSeuYM6S3erB15ajEc5hGpidfcMyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zU8WnTSpro5AygUy3cLKSV38jXgLL6aFtZnJu1Hq4oeBkaEyYDsEVBW6CAV55QDi2XBw6Fr6q9X2jT4GY9Ngc28",
  "key1": "2SwaSSvjSbnHy5pDH6Nvndh4k8QeX5tAkChxu9CzkDipFNyLNcwPNeAm48KXYZ5MudLBxNtZvRGCQDdLXbq3sUiA",
  "key2": "3RucUi39NrYSDiLKqyBrVN9nZEw6XBUepD5Wd5DXS873ihXJo661tadBcRyxbw4zLoPU4mwVMAsGGmbv2cNePxZK",
  "key3": "5f6dQqbeNqVWbuWgTvCi5SbHHawC2XrKJg8Hp345LwMJ5mLFcNNux9AzBA9grHtsArzxVs9xu5kStTnu7jTKFpXr",
  "key4": "3tm53t59FKjdpFKUSUuTV6Hw4Lbw9U3BccBfkKUW66z53XQ4zFQVZgbpcpJ2YQmizPagKrjx8EVxVmTaecBUA6x",
  "key5": "5C2S3CJykR37J1Rch3rDocRjjpnNBHsKSUKiyasCXXVi5wbANs2KFcxrmG8D1ZnGTh3hngfB3r3X411rurw6nW6b",
  "key6": "4dY5E4ta7dZBNGKQH5xQTPoLhX1URHmFpuc3vz6R2kw1A5xhb53aYRsZhXk9YiHjn3TMoW4vsnejozwS9LUqwgPo",
  "key7": "2buTw8Eh6PzhND6N3g7bo9pwBEZEQBmkc8GxxUjVpb6y6yg5QZLqxJt8B2qP1kUufxoaBCLyqjGzKtkLTNfyh7X5",
  "key8": "5FBuo3oXa16YinwZ3YyhKYchcsbubyj3h2aE7hNaxspqYC2CjVScSYRe7vZ1TqnznNv26cBjYVTME3zFsKD3wFCG",
  "key9": "qR2EAPwyRxC1zuVwSGNnsbpHhS47jBbspTr1DoBTpFBXB3Ha3qG9hvAJ3DvU2KEHoqdxXyPCLHCbaLQ67aQ7oKD",
  "key10": "5PYDGRm6KX1SvKjcHzdQGpeiuztnpz2b2C5rNcED85sy8tnpdc3CAuGpEwjDRJsX4hTsHfRyLF7baM5GEbxuS2f4",
  "key11": "3TkhgQ4PZ5NK15MmzZuBbgCG7i99euE1TBvCtku17HKHFWmjto6nwbg452kLv1F81TqeLB5ovoAGfMPnDfYwupPE",
  "key12": "2UN9v8G1rpgpG79yoi4u3eNpMcRzQ2ES1tSC7VmX6txz6rm3YZeYEvitTcUbytXHXPAHDFULuNNeGUdNwWMH64DJ",
  "key13": "4S2fcGtFU3tov8warG2zWorATNcqZMh8XvmqoZCxH1zqWu1LgKhPuVRozvms2secVxd7pJfSp3fsbTBRtHTb4zUG",
  "key14": "UKKW6vurnZqw9TgLEk3CGaNvbB9ftLcfGQrNVNBXMKkpiajHVv6htsJ8wBhr8VoBE5B8mag56j4JNrXhBvfPj1v",
  "key15": "25CCC7RAoDVCrkHAL4CZcgnjzFjqyhEWbVSQqqtABa55Ua6WntMpTfXKWEi2fAssu1fRQ57t9V57ttYWpdZKQV8J",
  "key16": "5smdhuch7yfDePAZxXzf9c9jZJnjrCtgHGVXUs4qXJvngLLft9ccicyWf8hS1B5aNJpsh7kEKdrf7VtfCvDkXN6J",
  "key17": "4YwSWYJjFsxGKNDFvhX52xHU2VTeQTg7LoUVQ7tcebHqqKUQUzAdv6r4W2sXn1k7mm41GyCFTwTJJQAwGQ2CA2Kf",
  "key18": "5heEFsrwDUE2NTkXcZAEaodwxCLi2SzRkQzgKgctg2AGhEs9ZHFwNz3atGCF1fesARCuyej9k6e8F65g8REs1XCu",
  "key19": "58Rc6Q7esVtxHxv6Vot1KAifLkWwMoHhg6s5EUb2ebf6796MidsRfyJfiChuGjPrRCFsoqL4hDLyfnp9KWDVBmV7",
  "key20": "3unTCATewErBd7yZEEKJycFfpnH1cqpJC4dJ8r1s2RmKds8RYCbsHqvsFjVHwJ5wLa8RCdmu6kGJVDdUaaLqhSBN",
  "key21": "5PRb1xdmCiPcUsSaJanQYhDuLdrzXMxGvQ6Lwf1nyFYnvnoK7iRdwAHtmZH4X1881Vrj71En63E885gSZA6fxfWK",
  "key22": "4wUNhwszKRAgj9qcaARM1ogm7cq3wgeL7ZwhLVLk7XygtmK46bNzdn1EFsofvgnNspJv2qofzdguNR1zjpR54y5T",
  "key23": "3Sq2SapwHBkcpiGMJvi2gFjtehnauzYDcg2yGSFQKhSbfvDSPpbZVRWa2EfHNcsGckRKPNa2x4mFaoBiUMgSNTVw",
  "key24": "44udEHZw98LJsWm5REi3EXxvTEG5DGaeqQQWRPBWND86w9hqzXgKJ8FEW8KwNm9uepn6BpQf1eD69MP4rned3SAL",
  "key25": "5yeiWDmmu1XsxmdPT2mWZNnfs4awdSoYKMPMkyMZgka7e2nqDYmybMxLz9dgYJ5atUjnFtYfwgMDkFWUFJ16cjiU",
  "key26": "5tR7UbfmrLm6Rrx2mKe3eEfLUKMMgjtyLcdACAvCgXA2i1sCW8Lq2FNSQCe8FioYqhuNNzfMTyZbQzrKtar9w1BN",
  "key27": "2oY3tX6Cc5Jqw3rJ5W9jYgBPitCkVwvJeomjxFuK8a28DjLprZQCkXUNZpDBPSD76X7dTuSrapwHaH3hEyDyqbq2",
  "key28": "59a4zDVKa4DnmwJ9R7VduXRUezvozw9gKmvRxGppHnD8XLYFyMj5o1MeQCHtTunPbQvs2UqB1xeNaPzsh2LwbWKu",
  "key29": "3dtQzBq5CjZxPNvXzJTmbTnW3mWE43uizQ7PJ3Uc6YJxDtJqKaoUypgBQpvKnSpmDoLrFGUXRpW9b8qfNC4ftr1B",
  "key30": "49kY2QeSS9XUQPRC9a7KHFwj2vuXE3qSeiynE2nyVJyVbyjd8EvG4YBKhjjzTbhnLdBPa7tpLiBn6LWrEcb26FKS",
  "key31": "4kdQBRQX7kaZrRXYhjs8gsaTM4NyPinZv5fWWvpAeLkeb3u9A2Dt13vKZMKUm5TtXKW83kDuijJSvoe7uYi5qxdt",
  "key32": "4GDw16QFZhv83mwYiv9nvy5imqME4rkUPqZCbCJDEZgriccW3Kb2KLcnVV95ytRVLfGFmeP99DmZr2Nd21NCCxto",
  "key33": "5thH69fjx7qDR66SQ7fLVUumTFCoF4GgCffoAAeWbjbT6cCwe2xZfYLU7NHqoiTyxVhPEv6K9BnoxF4A2iwqGGiR",
  "key34": "3H7SZEPJjBkRVH8HXbnBec44Q9Y6sr1ZQoxuHk7K9wPGb2dTvo2C653wRgy5sJBv2DrmhSbFwzG1B7WbrSUDjBTA",
  "key35": "43a1sU21jd6sNZkbp191UxoA61BLDdcX8455adSmupMsfYwWfbqcPXhsnLiwJK5knqkeBkkqWr4XVsm73CtLk2uM",
  "key36": "2Gat9nozgH3bahFzdxsRVvX7cnZFe2G11DDbP7Hzy18BcUGH9j4Rc66d51CpkRUkDj1uq8RxDDwhTzN62twFcj58",
  "key37": "3kc5CHQvp1BN28r1xQihahva56gBncR3CAUkndVcvdJ8kBNhn6uUw39fmJjayBW9Qum2AUY9YxfgUdo49AfA43mx",
  "key38": "2RtKJfdZKrBZ3Rs5bo4Vks9JTuMBHpYZTQz3FbwsqiFNH3ByAtWfLr4WXK1C4geTxdbmUCiwMvPnCxNZmbh2vi3u",
  "key39": "2VEukc72vy4t4u5iGghuZdph4PFRVNmw2W98S112jmFuRy5GtRizWw6esadLA6hqLF4ntBhrrjKvmA6VD2kwaTFT",
  "key40": "c4nE7xZYJ9THtosJ1WRcpDkPN97vT27YXAm81ugQBJGnj9xJsxeieybuwxtFymej85owQqY5fWyR3d8w1kL7KXZ",
  "key41": "3ZmzDjXa3H97Dh2b73ks2aEBSgQR33aRP1cRzM7KE85mRgD8yGuaXEFXuUafYHsMY5hNe5mYktfV1u7qeHkUbB3Y",
  "key42": "5vqZAp8hXF5s6CP7HtRhxtX7Bq4cEM9i3pYLJpUdSxCYpEf5rnsJ2o9Hq2Y6ddGnThMQ257LxwjYMZExAqUMyKUz",
  "key43": "5QuA7X7ck1RhE4WxwRCNrc5xX688Rrn5EVAxfnTBn6bGwdWco9eU1mp7FRq8xxRqQmevNC9vwTi5ErcU1UGjH39F",
  "key44": "5e4cWuNpnzsC3HtEaVGEVx3dGfkK2J84cVGk4gEvSS3GfDCiBUMqK4GxFs1m6P2u3aQJT8i5RndiugCzSfWUPxN3",
  "key45": "3QLNGF26wT3sKfBpFn9hV1U2aoxAmuaF2EuMGLFxWuATZnhDwN739YLtTNmJ2VrY1zgXWHpQUncsDJWfKGPf2aQv",
  "key46": "3f9EtbWjzgH6tGW2QrmawbM8YctEimBFXj3M5JEFpRhUc2Devb27rA1psbp4fq6QUj39EHQaiR2xxEuQD75btGbv",
  "key47": "2pKU6bknYF48S1WMk4ojZTXmRn6VxcDz5NUth4DjZBi9KoXpAZh4PDxgwywSBNh4ry83KYiKpRx5feD5UKhNPuyT",
  "key48": "4uViawiYPwcZxkHQN2FiAFMxvBqFPhu65DfEZ7ddUSKUpcnwsoVR59qtquqMHg6KcCZ7MNtAmLUDdvB6rv2c4qqS",
  "key49": "GmZFGEUApAttay7gZVtv5odFC47bDxrYLuGfkrdMrHEKeL6kaMPuvUasi6zrtSB8C7MXCgBNtaB9m7tHsSie1SU"
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
