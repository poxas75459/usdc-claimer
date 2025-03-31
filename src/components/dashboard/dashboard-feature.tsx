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
    "3FS8WkUychAeZywxKv6GV73XG51KvpTHPCjLRtgg7o3xXbi36QyvtnRj5DA8NzZuAbrYfrUpsk3cCysgxsZ6c6k1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kxbv2pkZNemv7stU3TpvitNxwS3FJMATaFCpskhSd7pVuHgt6cmx6FtE53jT34nsX6hefsUQCAtH8YTFJxsUiLV",
  "key1": "3SD5sy4Pfd7K9TR3WSJqCBPHPdsT2cmDgb8N9j4heqYpXPtBujy84TvQUtrNFnFxdr6yuDAffxKjiP9NkFU9LEUB",
  "key2": "3Xj7rqyXhBomSxbRg7U8U3YHLUaaTagHToSftTQXq2knRMBGSpefYUJKBsQMdgm2NN6AoREV2SKLJbPS2DtY4xhf",
  "key3": "4raXSQxD5ziZjjs9BKhhbNS3hMGbB7LoNizUzcs1NKNQnyVZxKWvEq3A3y4EaXFSw2DviGT85uqLi6RVqJyGkL7D",
  "key4": "54Ajz6ERG3zm6cngiybiGbvWJoVc8DP7Xfbwa7ohPBs9Mxu7HGmGCNVJFbXYkWUSinnr8UEKN45cqyjMHjEXs5bh",
  "key5": "2c7sMiaCmNnLBqru9od7mAW9AwUNPP5jQsXqpvQ3VJDHnv86qHY8vvAcsTfhRkzqeJSTH2CJaebrN9zFb5b2jTKB",
  "key6": "2gPtRhA8BHWaN8H8Ry3DNN8oaiNep7kEbkCQYPxQ7cDKU89uMwj4fXQsTyg8yUNXypWYPiGuyS4z5pjhEURM7TcS",
  "key7": "571e9XW3qkg8LkNHMBMxoNmbY1BZD8FL9yefnftPBc1z2KPLi6iT7G6gNfaMy7EXoxQjkrMpgdNmqbgYsxvNoFNf",
  "key8": "3bQaUqUj7U6avyLVQdCgMLhVsH2jD3dmyMr5FM2h2Np18THfqez2LJ1fdPcbVDiPPjxirm7XsXtG6Lom7qdmGzA9",
  "key9": "5RpiYvAgFmiBrGLcCJdpgWCcSan139652eLna3Erns9A7Rev2C1PSnN8vPCN1Bkqx8iYsqWf1L9CKwesEzdVSHRG",
  "key10": "23wP4dRVo2sekcGJnKdWpPMEGwM4jx4XaZzJTXzRQQS4umXCLLtetimwrWLwJfh5E8KQS4NZi4i4ReFFQ7spa4sm",
  "key11": "56itsxQwQJ2JysXbq94XHXYGiuS5VGhhsFKqqLnPw1kjmrY2rs7qDJkL85x6dYoxfSWEEQbPL9r2TK93FxaCFdL7",
  "key12": "5JWjF6Lmnz9W2SS6KU3aVnwJJWRiLH7unE5gWnrZPGj6bhPFGHdQ1W7PiAp47Dj8UffRvocKoybc5vXoMDG5MwYe",
  "key13": "5DPZnajiwUSm64W79arEdKhQVVMVHhzXcEdWwzFqApC4Fix9UMBiLMhqfq3frdBH1xzCF1RgeAEkryPK75UanNaC",
  "key14": "2UGfeCKZZniPHcdPoKnT25oJzxpfE97etZXCnDZERcREyfmp8n5p8ZJ51ifeY5vhUNHQH6GqrzBBPiDenMVyzjSo",
  "key15": "3xGyHYaFoa1e6pQD6FLY6uW3yrSQSf3hcHAs63hhaqSqKjL7XNTXxqM432PX2X8BRAxrqa7AYTDQA1DsbmR36fEH",
  "key16": "5NBZBAWFYkMRKTiShfF1yZCRgKtrRQEzfmFnnD7JogT5ysnfsHXDZ1KThetmCs57dcBHGncnUhXm2T2YCx5TK8vn",
  "key17": "aR8Po8UHKrTPom2C5L31RcdyrsFwGLW656iynLGUST2fwWdQembfo6jJPH7mHxAEvNhEBG6MnzdZPTbd9ZhuJNc",
  "key18": "5xmmrhJ8pJ4pw5bfq4qraiSXckRYqQMRL7KXzD1wu4DQLham6dEjJ6rcZT82ym7NLmtChGNRb2wQEji7bF6M9rno",
  "key19": "3E7hHPr8gwihBG7i6K9dBKTnZkzNyJrWwqRVXfR4mAJBqSKV2SHPHyeLcchUcYqaKnu6p1YrdnxD4Zn5SytDgZH2",
  "key20": "29GjbqgE8XzFzTrfUqVVrjK1Fe94Kp2cWbzy3dw84Nj1e2LTmaVabMAvQnUkoRfidqUYW2W8YKRG7pdwabrUhLvX",
  "key21": "2j4NrpmBM4YRYRndrSzho1KXgVGMRt3AvkCG7nFMdU5Qb2k9REqJ4bqCN2op67Qvj9etWeRkHiSbdHXuPLw262mv",
  "key22": "2dySjNvH2DyxdLSmpQkxePqiqGHZ8kqdkRqP4X8ovmfLSgzjfAC2VmXCfrctjU2wNGzLXXBTazS9DwRzJotAf27q",
  "key23": "2DudEpXSBs1tfqxKA1jyxsPCAnu2nkXd5dzdfQDw7kQYQXDQBjmN4RqtP4w2saYnU2RTfUE4WbWQKhZ7xmwiR77e",
  "key24": "fQVeC6uKN2LwH5VdLQmLrmQVxXLut2CpLH2TaP8Gv9UKPUJtzh779Q5qHZBVWKjTmnE4PvgqV2MuGzdFFBJUKCa",
  "key25": "59fXKCG32TmQ1oJxiic9uCVt8cpzRmWz33w4BxQrAm7Y9eSHu3VV4cPSE598eCM58U1amvd7rDHQs6t9EC8Cfj2H",
  "key26": "5mdbxLkU61a5cCC2M4zTJzPuAvnnmKxRGRFzMEEGC4cFCbc9gLuahNZs9DESA8kYucAa4SV4Lsxqoipz1Ge4jkNr"
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
