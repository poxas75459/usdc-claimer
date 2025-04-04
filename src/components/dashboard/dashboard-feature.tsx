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
    "xEQoVqVyoKcT3q3KyKjCr6MWFWHkmNs3188PuEDgQBxodm1fF8PKpoW9MfMQ3jas4zTF12Ht5wU58ikCaBSS9mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25VJPk3rSF2cj88NnTPu7e1DDWBtKc8b4fkqGwVyoq6iktV2Yod9vb1aDcZtNkFXMVcSSmQJ7t9bnZTBrVxsdNqr",
  "key1": "4bxrhqMHJEk7HkzwAdFMq3vkXEToGUy278fMp72Lk1mjufQHKVdhcZ2yvQXwqzzrKHGo17YHo1VPqgpsBBFvYb7w",
  "key2": "3HQ4gYtq3AYSe2hv93cfopf2EaAn53wrptTjrV6jWLpdinEY4wP5rkXDT5HeJEmBoTmokk16MwSHKSg56Pt9Ukii",
  "key3": "54hmFgSVqrGiEddQ6K8TdmJfyE85FVxCTWz2pvyjKRyy6KyknLT56Pvst8Ro2xe3inqjNus4nzRqmiACGUReqmkS",
  "key4": "NhEL4pmmzQVgofRjQUaqzVj9F6KBd5icVVxaUvPt4E69iy79RCoXkiXgDjQDE15j6esuD6cy2wV6UN7vN3mG2o9",
  "key5": "5VUGoQ2L9CaGEHLsuy1e6L1H9NTHaShBLse2Hs7GQN1gveDRJnskqEcQ1qySEibriyhC5TvxdPb6k3kFGmu4rGC2",
  "key6": "QsCbN2yjefSV4smWY5EDZUEoTswV4xYMDUnjc9BexWHYXLDbP8m9czNRoiED38u3TnEa6PPu2qLZiUU8xzwzKp8",
  "key7": "pa7YZ8tmfneCJ91tg5voQV5NQLJv7JtGkjunscxe78Ha1RcDeu1c6fDBCLFGwgRsBn2DAkDJXYerJT8kagVx6Dg",
  "key8": "38jx2GSeDdFewVnUELXwt9FFW1SzJ4eYeNKwfSMmA6L8QCCfWbDjqxeT68MkPX8L6LxtS1v5rpCtiBi92Wiaajvf",
  "key9": "HpcVZ77DPwaUGhv5demiczhMnnvrDqmChVdX5SjQ4YRrD8gWiFqEhoXsRRgG3z6ZaYDFWp75DMGyodAHzSxtuhs",
  "key10": "2vzNwvsW4RDuyTsEWLSJB4o1bMNfhtWaXfMCKzbjgbBuDTLoB22uKNw32Eo56eFGHetQkSkZpxTJy6ynjuc88b9v",
  "key11": "4WkdtuBFGHX4m429VPdEKGZtbaHB19sGtwEKyoonV6iMiSd5aQVGsZXtWvE4QLtdqwqSEt9ZkTo3HMZv5zSq5a1M",
  "key12": "4QG4NjLdDBvYAkWzuZ5ZFoVEiAsLdttheeaS71v7dtJhCoJzGYusSqDUWvZo4ChBFtAVYjJ7pxYrbuYHSijYXjtw",
  "key13": "2GEuEFa3GeydCupLYHqFjr5h7QA3XuSv9KNrzo7wZGVeK8M1WJKA4QW72dsYy2EJc9yafjUex5nJBcEcV5zsRyfE",
  "key14": "5TyJNpUmoDaNvV3nafdjrom9Tk7voy6XL6PnuUz5YDRzDbEJe5wzYcKPzSDXMz8UuwPAXnRq3xQ7VqLuMSMLeTur",
  "key15": "3vpVRBLapLkdm1RNUUqcbrzRLC44J2eG9Qv3a2nU47LfF2XGFiDBU2VZoyf6yZwPqSDnCnT3D7iFq64DRWhG1rfW",
  "key16": "2DbZr5C4nKUcN13u4TpPbnrhSWCytm5VvZNA389jxoPKfH7zakD8cVo67mJRXKhkYvFcKp2TJEcMpNCzRLvVSgko",
  "key17": "3jFd7d8AfHBSEhYimxyUCCNjQFus9nxss3nE5w3ZmbewhkGf831tesRNAjvGPykchsSGm6C3swD9yT6kHQeaABLB",
  "key18": "mNZoTgV8ZKJ3NLBadJb4ivU7Vn5NT2WeSvCqxw2EmCNDRBCzxZgXVM1Q6pjwX82PJNkpCz2hYJ7KatKh6SaEvR1",
  "key19": "3XwNtyV4Y9ZWgL7q89r21DDFLhaVzXrXqi8oeSiWsCJe8wxnsAkoCaMmhUHZx9d1SFjJdj32BVai9TJ4k2uv36G7",
  "key20": "2L5JsqNosL1j8ubP7VLT1peHpUX4nqix9NTs1uZCFkzBsi36uT3NvzP6AKN5xFLjvTrE7qcmTVfygxaa3b7jEze5",
  "key21": "4TfRNUEkAzPtNBeaAG2qVXS1jzEHBTRUy1um7BCsqGyPMbaybKpZcBjHX2EwmTWaq5QnJLhQjRxbB111FBoBBjem",
  "key22": "5BKZV9yuzbj23nSnBnnMhT19SrxD2Qx3CHgofDSgAVP29zm459uDFcUHyKGcxvii6ffAaeoQY9QhUDoExRq22S39",
  "key23": "42nkj6LeYdachp95DWJpCQc3Qb6oXkxCSxPFwXaqKH2vZRWf27VTnVWTrvVFh54SA12z5zDskXmB4AayL7XY6iHy",
  "key24": "VoRtHSWk5RsoxXGivmaU2Dgx1mUqXXaAdr7M8hjAoWFcijd6dFiBR3nQFEAPnDE8ViWcXixxKa2aQA33S81CN5U",
  "key25": "4cSun8MHwXfkozPwY4VJxFKeaNPNGHCViX4VtZqLdbk8fVKgHtG4PDsXWcuBeBqCTchurQoP6jYm5hRVr6i9cJao",
  "key26": "4yeqYQkYUhJWQmwLDCHYSmyGVFKLWW2SVLB8Pi7gsywPWx9wrZeTMKWfnQedQ4sWf3fRE5mfnfYUFiuEs9WDW3sh",
  "key27": "5MRwxnmeaq7NUinA9X9mY3LCnQvhaKCqfYhkuvRZMVM6FUN7ryYnRAFcUQFraV7EP52ytnsSZRGYBc3MYnsqi8Lp"
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
