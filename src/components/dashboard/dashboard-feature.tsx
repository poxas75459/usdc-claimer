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
    "5pHpCZn4NpRtTvir4kwahsvcKQwRhSzREasjxmAsvQvR7jUXnufR1ee1q47wqBZMJjGj92fzXFAuPQ7gMqEDsHMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M3SEUJqzjTiMc4iqWYKNGTEjdo2neX2Wtg1ZR4cH7BoGEp2fyhjvrRxCsdhU3ayEwmC8cm8fi1Q4d1tyU1L94v6",
  "key1": "3TGkj5jBwPbxuz7jYScvhMbCGRhcpD3Wf8oykzRkJcgJa7d76HPeFgoo92g9Utz1cuDpWvHPnh1BR1JaVGTtpJTX",
  "key2": "B9gMdmgZhDVaKa8kC1wXbUnxNxPErGabbqDWLgmByGSPRDVybPBtKYCvZ2ESki9Ss3VmG1JK3SRtuv3fkZYGUUN",
  "key3": "5jZtG7XW2YiLvvUWjXhQjGBv4DxvnM5hLfkCAEXiXZULDVqpSd7ZQRRuRkpj3ZTBK17foQesZhCZF5JZhFyooLQA",
  "key4": "4viw3TKrESgx9p2LNdAcQrYZwQVDRigw1Wgt1tCCH8QAJjLoo3zcsFfnmTDWXRayPUnWfdAqDbaLV7Mw2bVeTg2C",
  "key5": "5cg1vBfDS3DXeKHguqB1jNGg9QrpZcAPpWkXbfMguy4tRm1VXean9XMcbSJdb1EigyQvgrpTYmyzVWukqGk6ZBbX",
  "key6": "2bGt4tcJkKw4cXQtdGVgxszmeLp5An3Rt5hWts5BRMF5KLxB2WQQykmL3YMAL5H8u4XRxE5mfDcwd12qBY8xr9zF",
  "key7": "58LxsrsjpByYgqaLR65SojpLduf6D2uqep2RkJfYvCVEaTT1t2XLvoJGifjFhvLtteSPpdTpuxkfUQLoWFGmHioi",
  "key8": "4vxthfN8prNfBz2dHSXdvHtv4AKMcYmPqPFzXppurXq7WAGv6h21EXR912SjqhJBwBcGTXHfkK64kgCupjNaQr5y",
  "key9": "5vnRTLLNeerGbdkTVYRU5a5TNbVJybWNMMRmZHgZMfPp4YC6pSMNjiShUQegpMas8Q8XGnHrAKdtysiG1juGhGuf",
  "key10": "4D5XzfDnk3RU1J2DyBCnEJExaMqGNtBHXRfPNKmv9iP55LViv6zpdyBN2xn3wjQUwaSqPVAU6R14jvrUzezd5wc4",
  "key11": "2MLbogN2s813Xiytrm1AeAMgmz7crt6Zd7ZGSbnofboebjVan1p8zEck4HbJtT7FAmP5AhgsrujXzKcU7fVcb7Ne",
  "key12": "57Fn7brZfMn11kTFSF9kiP6EppRCHPa2N5prg7x3wauSgSbJeobcTW6okcUErUkeKU6KGk2HApagd7eFRe4gMVaW",
  "key13": "34WkBWYm6G84crNxfjiozTH8VbcayqxhPqBHaRQJyTgJ9iozb7Cf9jP3iL2dyNNH19Fxa9JZDkHHxVLyY6HyZdYe",
  "key14": "2wwFL62m6gweFvZLvh1CwE6nFGj1vk8UPFrPZKf3DRfp3QqEGbMox32m3XKBN9FvTSHdF3SmQDmJAW4NwBxgDLHs",
  "key15": "2hrSiWWk7jwNNkG5jmnLcN64tG5vPZhTsuDrLC92uaBPBYZm8beeCxaqNSWx4SqDCQrqPymsztByq5ENDCJRq4s9",
  "key16": "4whdPUJVHwfgobUCTyAz7zKgci1gKLieG1swDMFH3vx5L4LdD6PJdrRrRsMWzULyRmrUZXD7DjGtyqhRSC8s81U4",
  "key17": "35T9azjX7RsrZVv1EPmTzdfcrGdfbxsGCZAUr6WpXC67gUHCmkWMFPzmcsxkEWM5GyYaLawwDXEqkkVrEy68UYGm",
  "key18": "7s2ebJCobBdp92i8TVj4V468S8b31EDSjHfHCSE8EakaJJvWyf74gX4xPbvEyQuwH9Qc7UYXUBsg4Bp7gFJVeYG",
  "key19": "2bWtQEdZVVnFp48HZzDxXkQcAFtmwj9sHz8m48zNDqhCwxTvcp9RHcNSiLDq4KtiBcHkPxxu1tmS4kYunySxrasJ",
  "key20": "2PymfmiQtY9mukThZVAPEBXFDNtuzViS6FgtDUYqMk2mSrKwsNagS26iNRp84dKv5R2oHEf9NWrVmchDL2ZkqZmM",
  "key21": "4z9ubAxs9mHMsuyxTobMLzLJmUq24cUVoAtQrVRC72AwWyhU4B1zjuHV9LnL5H4r2yuSJwu3ByyqSyHTKNBNeDZg",
  "key22": "4EKetWZAcGGTE11Y3XDREvm3DugmasUS9EVau9rmyH2QzLP8UW1GfgeXa72xbJ9eNizpY6qc78e9x4smAkZ4hCv6",
  "key23": "2avLnWtpokcoW1oW7LQs7XugVUiida4xVWygc1ERavbbYcCk3QqJWLDfXHwoWFVZeCp6RvrNjwMBX1Rr36hpyGRn",
  "key24": "4pES24WibaGurAPFfjpch9kxYn8BKY3zMFdqwhREUp2JCYYdfow9oPji1DVDeY46RBuETwLCGntbKmyA8iC4Va5F",
  "key25": "4vZsV8GmVUEALip1ZhHMDiV5ffwRaJuBScmcMHbmfhgnG6FuSvRhi5pzk18x7BMLbybBF5UXVgtKZXXnEQ8LzZEh",
  "key26": "4RGrZssbAwuVYQbYUnNdDSBhGw8Ks3wK8hTAT16XWZVAPBF4nkrjzFwRcQstj9V8faYkEgVK1ZGpEAMhMY2gk9J2",
  "key27": "3otVd2738e5An8HWU9RvvpRFECgdo1shrBP2ydneZvEkqLYCum5PtAAuszvyCBHtyLr3AeC9ati8R7FdajyE8Jer",
  "key28": "4GV8Ba7dAhAfYgobjwrQu7EopN6VEG7r1Aut9zfdCJZCB9rCuNiCUqZYPGvED8dM2ivfR2aFFsrgaoezcXPmhv3N",
  "key29": "3C8CXuTCSBbodMipEZ9p92frfuKbdWCNw9EjnrpdKyUQT8KG983RsNYhUYiSWSFAjzyZur4ng29pY9fpDTQgfLey",
  "key30": "5dgurVfdJF1tRABQuSroQW1ev8VjMseSMZLLE8m5JQ9jGvjvLkUB5d2yQsUsboYFXPutY9aVPExH4iPV2L5s6HXa",
  "key31": "AvYefFMCKCrngmByK3oufgjaEK9krY4BKFVQbXXB34kQ2neDJEDRNGQGKe3fxNJTHGqqc6gVek5gqdXWpRHwxZt",
  "key32": "2RY1W5TBL6edC7byGeMGoxDKHRB8P6szgSTCAFhCvxBmAH2oYF7cadEm6rz76tTmzpT64fcp4Bm3p3SR4YG1HeTh"
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
