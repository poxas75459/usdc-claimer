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
    "X2xaiwDuiBphuFwKoS633xW6P9VUHYTcRs4emM65TzPThdQEZaXDpxamgqi5XXztxNeaVzumaMTm9BBDRhSiFgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QwRLNApzKHoNwfdhj4sx8HJBHheUwX9P7wyvuds3mCszUaiGzQtHqkMzm88VjD2EmhYRiqg8c1XUxdecY815P5C",
  "key1": "3YkiW2HqcTeomknfQ696wCKEzLYzS4b2xWKd2bHuoc6erGppYEpQkfapcviHiJs6uHafC9CZMVoFBsKTtfmiWe1S",
  "key2": "2sfyP1AGkXiwwpbfxQJhXFDMaGPHByv3vjHkDYeoXBiMauosZ2qX7u5b6umU5p5XZhsWbX9eANAncVcwPXEaZE4P",
  "key3": "5gAC8xo7AKReb13brys54b86rwF2Nphtobj99ufXFNzGRa3HVjdqRAG4Nor5oF9ASFPqKbhAJaNJsdXTKCakTwAj",
  "key4": "2jBVMh4P9bHtcnWiWSYBvR6JLZ6vsw9YUPF1xiEEd3i6rheA59n8b79g3LL3DD6t5T6NhSYVrMyTnHeXZnkXfYw8",
  "key5": "VpbeUq4S8ZxWPgYhHKpoZGKADdrqY8kkFkJY9L3r4X1usr23drcBPteTcqjdpZh3KPMven5DdLaC6Jz1BnBSpfg",
  "key6": "5kmuV3rP9safCeWqmTMGYtK2CMq1G4xmxwfpgmRr9cp7sAZz1ZZLS4S5efL3u3FAeY3caKUeQZsYuAswZV8TWtT6",
  "key7": "xRPpzwtebbJK15ZrMi3UY1RuWyrxaBtFUtzVNuWPcQFXuh6WefFH8BZ42pY42VLXncaLi3kCDWejDDzM3UuwfRB",
  "key8": "AJJdgnvjxjdfR8ot9QtgtxyoWH18vwRLHSJMv5G2LPPQQqArUKd17LBpcWsc5W37UyFsBrr83bzUUSyxLMFP2oN",
  "key9": "GVFypVF49zS9fxytGKV7ujXSBdp4EW1BahvbwbZ2Y952d16oEF5wYKhPU3nRBaaoNYzQrC2fFxCEacMyfeH7idS",
  "key10": "HGj6Kb3utXowpBqbCEephatFRncB2ZdEbygfiWkfsapZC67kKNd4r2Yv2FEdfpZzFiCnK3oyrZwuzLbavHo3iMW",
  "key11": "zBZttfGgE56p29aVD4xEZ8gVHt26yE3DKZM2LrFeDv85Kq4B9yWZZ4W6cFZEfCcCKE4KFKyaDXbvNus6siDnqqi",
  "key12": "5WmLMGUkqXVYz86EDA6yTfbfTJeHM4t1m1JAXPqWdz9HhrePopbuA4T7RwRS86Mi6GUmt8UTUhdPR3SH35jCWXNt",
  "key13": "4wVRFSv5194M3h4Fw5LYBmzrp9ybF8FMN9jovc5JthBeNL9nV25sGcoRZJjhgjsagKMBfsf8FJqGxkYV2Z7kXUy2",
  "key14": "cmqebaWuofEPifRfnmfmgJKZ6g4ZgXSDWw7LWGZ3n5VMB92ef8KtezH162cuApqDfXFwLXMr94MqQR1Jw8nyvjr",
  "key15": "2Wgkg6xxg4ryjMNBUJSFsYw52gtLvVuW1S9KANkDrhPS15QpU795MsRpddo6bHsvotxjbTcLH45HqEVqNSKkZAmc",
  "key16": "4f7yjRnEG3C5uv77ia7NpehWqCRs9CsuHckMWRwQajuVeSPNhkyC3M77m3wxGmnKjCEKA4tYZAPFHuTu6zq9YY6f",
  "key17": "2Ge13RuMaPoMx5rxyTtaMzR6DeaZewMdzVe6wKjmNsMAxauVdAVZiWcS9kRiKDRwBYAZWq9AjpUSow71JG7iku7u",
  "key18": "65Cc4h1yTdwNhkDMozC422t9MY8RGopQG9TutoG835BdmoJkRbk9jofHGqz6sCTHZ6ApTWCan58JC8KTfGgiaBLv",
  "key19": "4xNZPWt25cR7faWzJdxZA23XL8H1jqAKzd3FfCCvZAPsP49XUwNYasoiEW5nZPa7vEo2brfmWcfw9t2Ddj57DvAL",
  "key20": "63DVZDpeg7gByPS3BwvwdjbVney3ztXJ1QbU3RfECPY28JtWyhgSkZJ79P1scuTSyWsx565cL4ytBtZQgwYPYbLT",
  "key21": "PU45KWW2tXypJnh5NE8kYfWphXtBDse5Xhiof6zf3wvpLXrTwpnK6vHictVfebikv5Gv9NP9fLZsdnjxeFmUZfu",
  "key22": "3MRbMcaFbPJkpBT5XS5tRVLrZSXu5aFDy34eovbvY4Nk8pa1b3q1F3d69ffC8a6WXXfV3qvDUWBRPECusw9CvPvN",
  "key23": "nGoidpgWRp91xVCpXtR4WL4NDsraWkoDvaHVbtZ3ji9BG37cuvQBj4vhzJArxskgmRqANCNuic37kEpM2s5koCo",
  "key24": "44y9QAXtjZaENf6Dx9rwsHM7LH1S6GbH1f8LZB6B3mCELw2UzewGXC47BX1egMwFsbrzcBxNj9YPEituMpxmyfzG",
  "key25": "ZfKkKwZsKGDdyGGxBMyYNyoFCoEf1Yh1P5SpPPTHDJPvkqXyvYPqUL96gVNKR6r4WdWGW7LJdrHCXfELoMF74Vt",
  "key26": "2rRYQx3VsDDZGvHxU9Mve8HkNxbEz32kFnQxq7XLZihgPJycGAQVQ4a6xT4cetmg6opAxLgm9TDZkUn22ZEknwag",
  "key27": "5ygHzoUCofA9U7Cb1KM9Eqyh4CcviC6e2EdB5aGC4R4txRGxVLPCEsCJaHVfquCgvs38pXZcg98YjyVrfZstpt2Z",
  "key28": "4xwX9zPRdVz48VRY7BewTqusBGFW8FQ7Mh4rAwy5r8DNhJ9PjCU31FVGwmfM64P8NE2sjg7EjXJpz1Eyzi486PBJ",
  "key29": "4eBfan9Y1SAfDQPvFBx6TX6bVY7NMD1nbHbdH6DnoTjar3SVM49YmFiWfHStXyWW8urr3RFqcCT3RdhNPfywmnNa",
  "key30": "4L6dGUTZCCYNENHWFBTPA76ofS1Ab4uRsHajpUcfRsioam6Ce5BU32XJMfszGCAbfFTLvJvwG8iVYLhppA96vDby",
  "key31": "2WpaGMJiEVHLtS6YZunoSLc1j4Vres81Rn5hn4S18D8JmtNCwYabhrM722QXzXRKTS9YrrpWerEvjuT9cpbBdbQh",
  "key32": "ksieCsqK1egrCt4dQHN1X3RiasU7GdXtBM3GwzT3Cxh55XC3kDGjwYtAsvLpwoeGDevKoQv4qTzbouSmSC2W7Lw",
  "key33": "UQmrppRJcpsWDH4gXKgKEMgF3jgwm9suXqJNmpQgsQqnxMdMkvBjRi4iVnqDbEonB8fVGBxrUNx3ot2WfLi9qTo",
  "key34": "4voBsNLhGGcQ3PcnjiVjYZveuECv3qBdkruVhxa5bjsQ2cV51QfgLLT7EJ6hqaArLer5NeWBwKKDi78kNKRmKcuU"
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
