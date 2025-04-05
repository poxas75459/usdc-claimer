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
    "4Xf2trqyqgY4qCdZEjdEyJCCe3gqyQKenEWCMiGDKqH7oaCRQ6aiBtD12yTRb3LsDjQvSTHdYABTututm1JZZgmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hp9wGH7q8mR4W3iczqpNJZMUNtSoYDLd1FbXYjW5EqF4XKZpmyF3oJAkExGFyqcwyKbynygvB2wJi6v5joMEN1E",
  "key1": "3XbYc1GcimufPrzwhNPSbJjJV2DhgrDPqVqk5oyNfDcXGUDn6kjwoq28MnTJGkPSZc45YWmkrdFh3kPPEEi4T93f",
  "key2": "4Sw5cndSE6EMMnNfi6PeM8tbKsa4baKcfrnsjVFv4apPgqPgeUpa1HAt6hg4Lm3o4Dmr4zLD7D8AkrhQxdrf84c9",
  "key3": "3LcDch52QAJq2bXcBSvv59uhb1HnyBTG9ExHAmu18jvAkBt3Qr2oeCYVaVQ1khcwnC11VcNN4e1SXcQVYdomzura",
  "key4": "3rzA76vW4yYq4rUokBMebqCAo5Kngn1NcwRmd7F5vZSnMtQPNbSuw6uFzReyPDFEaqYqWcdBW9uHY242C3PfzRvu",
  "key5": "4fGjQG1L4VGaGfgJe3uYa98ooe4eckoZkUktTfE3iaAiuyqGf2LCLJ4PtFjiHuMxXhCgKSHsFqS964D6rPWAtmrk",
  "key6": "4DygCfe6MSe8Zy65vv4czeFwaLCgjLAqJKGJAfX9RbDc9KpDuRViLN36wqA2hhhJ6FPFGGCGLdnX4Gy8SwXHRYxe",
  "key7": "4z9zpigAsHasJCdCWK6CuaKGPCPwKkzsbSxo3qBQpmCncPvLLXDLwBuSMV9FncsnKU9Q4uBNA311oHCXCXsgHTsx",
  "key8": "3qvqajbFwQ8thbTFq8ryWgdqZZZSDq7cPqokLw2FYpmVo5eA2wew6Dm8W8XVNwL28R1nKUChV1EnBN3U5tenFngh",
  "key9": "5xXV3pGRokDXE3yC6JQSwJwojsBdZtrTm7ZW7ZjhxtC3VuXeL54ydSDC9rAt9pRHnu91aUsg8SKxXN3VB1j2FjDV",
  "key10": "2Wqji6DJsLr4H6zLb3QfVuetECVWzQzxtUDD1TNaE9HsvpsX8ZNUN3y52JRxLhBwt2g2aa67Z9Mat7uxg5rnEMA5",
  "key11": "26WsGvsTat3RxU2JE2G7aQmGMxg4MEewwZH8wWPuNRhwhdTrUycbJj5BC6Y1btC3iQaX38sXPDBpu3Sj7nLerMzg",
  "key12": "RfVkzjRddH8W36Ve2LnWVebGBgeAYVMMKaQwLj3ugjrMGhS9ZoXycsTgyDWTUUYPvkye9PiR62EC3AtFKSyz1Eg",
  "key13": "J37BTWpCuG7mLjTWY7GJDXW7tRNLru7sDt64ZKfPPGzHeV3Y2uCs1WTms34irAaBfj7mTM7ymo3L9j6Pt5YdJEk",
  "key14": "SWfDGuMTqEvJHnnE6sKLHka8neQYC711uFE5T5pGMt6dv7Ro2nSCocPRENjoadaTBbKSjEezZb3DpZi8nhVn6SP",
  "key15": "3kXMY2nVNq6tB5Pmh5DWMKHp7ZFmmnQorq1xjy73fe2KU5h2p3TngfjDMQinLgB6bT4Bk15t6VVJkcxi5Bo98Rkq",
  "key16": "54dWWEPZBiZvxMbTedJWUY923j2FVYpiLwP72N9uX4uDG2W1c6sPwKUmMozewk3dEbVWgLJDpvXUae7cBM1eHPBy",
  "key17": "ZaWjWMAkAMAzB2MPgzybgrqTCGk2tSj9mcTgoxujbYkL3rQ4VRbsNk3C4GrBH7KetAtqZjXxd2GRvzLuXC3wn5H",
  "key18": "2KjJFNFiJeaFQDkuJni933YzjgyXmAFa1DoPXtRUXH859M9mcaKgkVBDPXSTAN9Nc2HGh7JyMxyJTz5RTKJoChYb",
  "key19": "2Mpmb1NEgx7xhnD9PGZpJz29zNFWzLQk5NSVUnvaW4ZWATL1Dh1FRBn7RfEqQuezN41UkGs5mbgT66S2B6bYLUhr",
  "key20": "4emGEZ5HuEpGvNNGRW1U1ECkCzczN7JVUFMXzc2mQTWKTJ1Dy1X1BgQx8fk1SdKv2p9zpaPUQPYtcikEZ3qcfQBc",
  "key21": "5UZXd4DGvVudy4dCGvZ9YDvWzsAXmozsYdQu1NmRVqdDwpAP7VJWtZsxwSHGuYxzkqtTp1jzAstJL6QbjnvtUqvJ",
  "key22": "CCGfmCZw4udFXgSHDyBNDiFwWYjThPEgaHpjhgpWMrQizm2TkSzWAAdbsQRWQ3sWsvb7NX3mEYywTB2hEB1qf7b",
  "key23": "2Ju2THBBSAHME9ANyxVkEDR15rmC6KTuFLQqDW4m6M2a4URuPxugsB7vBZJxK3sZJ9eWJskAd7H63YLTCtdRqDRM",
  "key24": "4kTgnLCVaHSjzhisoXX2muu115R7DMrSgX7W8DbT47T7zJXia8xs5NMq8aJWvcQT2Q1u8P7qiNGsa2BDcumGhNQj",
  "key25": "444TKDHGXEeAJQ5Q22XmE7UiLcVPoA9qjBQXKVN8MjoUpKaHeBJ3v5ijqTp125PN7K71PbsnYQppGdU1PNFPX2VP",
  "key26": "5kV6yjVUzsJm6AVXixwTUfJ7fk5gZiiYbB2WCFQyBF9EAZchLdF8cBfxWJLSBpWMMFQoWpyW7GGosQ6HgkWfPWZk",
  "key27": "2bc8hBywqp7kaVhfyig9ZBGHuTpiwdXmCaU316rvQF95sG3T5fzzduvR8NQ9yD3ab7E5DSNEqPq3je8QTEPknoyh",
  "key28": "5kkveewfd47LUke4fGmtiTfzs6MUGnX8ejCmvxZT3vQZ1shrVXibiFkT55DQxkhBTYkaFJ37fg58j1rQSoQHo9bs",
  "key29": "4yA93KqG3xEmgdZ66Jx8cjbryEwza6k6sbWbXH45o1jcmNpW1oogQS3d6xAGmV6cGZLVEQUhD5ZFpBPL9nH757ci",
  "key30": "5noPbHHyfa842Dk4Qk1Ez6vp8SbAmUCsFTLiaiPkf5RpsFxUt9GCS4gCX27byP4yGKiBYRYEe1acHTVgN63rNT7d",
  "key31": "2fRgxtF6YanoTM9bhWmFMPJ8hpWoEAtobRPGSuZ1ekfvYpxT2aruMtoXkvjZWyoxdnMyKR1oWMViZotGfrQLjKfx",
  "key32": "3Y6w2jUE9NxvbcY5Q3Bi7eN84iCfidbd57F77iWmomYxkZEe2GVE3hNApcBdjvPYKUQ7Gh6tcWTigMjtPHq9PuG",
  "key33": "5U576Z6RztJpEayxdmq2Vmp39Wfwo1aoMJvUoVD3H8hpwpcZ3uPY9uZDePGh4NAtHJpocD9h8PWXcujjzyYHHYQU",
  "key34": "34yJgWBW9TZcdysYjmTjGL6RmkCyDbH4NQGRGi11Xv9oQzJmSgNM1S7RdLXUHBrd3JoDpdhBYnypWa7bZUEnXCna",
  "key35": "5vH9dxXBr87mA4y1y6oSE8eDHi6qf2SfTB3VkC9soFBSf6e3qgnguRGnZW36PPRBQdDdwU36Dr11mpbtpiaZEEPx",
  "key36": "4ehZty1kTAMJ8DYHbPf8KKebvuDEMRSMYnBKZ1DL7kY3vxR6JmdNZ1hLDjTvku2rSFzD7ZCWujQ9FMgoVLfnrFUy",
  "key37": "2wtWi5GLsXbW5EvKqJXDLvBEuNWQkZPdvqYsPw2Ew7hzAjeWsxG6sopo774wkpcM3jau5qoKxdZaQUvjcHtVCKYy",
  "key38": "22gAT6p5e2GkqandPsWCSbi8y9heCTm4bznHJuytcH5A1tFmiHbrYGs3ZxENEH44oS5HBKxQy3VyL3oRcNctymZY",
  "key39": "3JAt9E6D7eBYNhQWLKJz9pYtbiS2XKYvZBrmA6oKW2Ladqk2b15Et77w6AvX44e3c1ycjo2x34U7ok2aYqFUHZKP",
  "key40": "4BKTwuZDWh4WYtJ9uQvjFuHwcukoJSNj2Y68MPikhK9ZK5Eggd58eg3g5Pws81cHiohcNbYCS4UgQFnnuAHRWtKg"
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
