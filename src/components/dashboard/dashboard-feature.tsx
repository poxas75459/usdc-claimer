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
    "M4DMSW6TaWFg1T66WbNR6egap8bCZpCWfxzgTRNCFTuYsTWhtTRHP5HpWgcgztoAf9CjcDSywMt4oyPDiW3G7VU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rUjmuZX24shBpadmoYMpGSAbC3EWBDJDuK5xFbCqRAPmFBv6FK3ebzvzg2T59cgpzdMXCDC1TD6AUWi3VYYqW3v",
  "key1": "2ubji1ZN44EGR18SfEDAMMx2fn7isvULu2WJAWEuwkbM51WCeMCLRoJJoShk6vk9cRKcXhygYSnTMwtVfx5rGqP7",
  "key2": "4pLZzoKHQSsn4mBmKF6ZauzzKAow7S6WD8UuMk62HSyUYu5eSFT5i2TK7s7iRvxi2Enn51T3rQ8m1fe9aSA1pWUg",
  "key3": "3CQQk99waGW6B6g6vk8KLAwFj6qJGvaqVfWKiMt9ftfECP7gspbCrYzASiQ7UcRx3ofBZLTw45CNGk5WLJ459KYh",
  "key4": "243xgQzmGMT9H87fZm4dWprcsBqfizcfF5H6ST5cbRYTb4hL8hm1NTHU56CL6zhR4g8fB39RB487ixUR82x1jdLr",
  "key5": "2UwzH8TW1csD8Xyf65K37aCC9HUFxjKXs35WNkEaFzmYrcMv8xJNNEuLJX9QjZYcc4ut2YMY3BcvMxnGeYBPq71E",
  "key6": "5br5soes7zWzVd2wF7jAo4vTb2Vo1AcKAa2V9oKLV7CvQyC1Row7gvBmksekK4WuTKCuomaDG3gpRbyemZhzHv8g",
  "key7": "3aTr3hFmGVB7zreFDLpfQjdXsMocE8oUuhBrVcvQbifudL86a6TTn3xHdpV8U6nC3ruL8cVtfZrBxjJp5nyXC2Q7",
  "key8": "4Y3SRrSDKs37YghkWtV8NTuDFDna2cWbhKfhmNvpw3ZcDVUvpR7nF6GVyHp93F44uao5gCZXky2HyY233CEJsgkM",
  "key9": "3ySZQdkhQmK7nEZvbXzxALiiBmTMWpF8Fs7Wt9htgPYt9DpDnygAw8G5dNEoG7CCvWWnr5kh7jVmCHK5DWHLkXZM",
  "key10": "hXb8zfD2u8hXWwteKJFe5aJsCAT7MdrzUpVtfabxtVuZaiexWsYrvY42YSzuHQZS3yjUWqvCMZvoAoFWSi9bH1h",
  "key11": "2sFNdN6eqtYTQXTB34rzYHkFAK1d3btPRkZ8hhGq7NqwomhHjPvCs8rEZ1hPko3Tj5B7yyJgD8dmX1fhJA4cJuEY",
  "key12": "3gArxSrMxdAxT4EDN7SgwFJDQW3yokJuiXWoyUkFAPGQHcNMNeuEtcMyXjC9xWGLEwhRcCSfgFDDTNbE9uJyCEdG",
  "key13": "4LDpFgxURa68d7HKfU98oqEJYzBtvvEf3DWnCtMyULNjDvy25DFPaYgKVeEcu73E8MydoDooZtjwvEzqnt3RsQaP",
  "key14": "3wSs1igoTEN5N5zsSESt4ZnQR9oBmKe6L39fAVV3J4TosGjgzT1MqGNTPtVFTLDwh8qKBRo9gA4NvJnaMj5LEsCV",
  "key15": "5iqAtVQmQKLMbzVvE4Cz9A3PyFZaCcpfSVLbLdxCG38fojuCx3Dspyg8hsRD5D6gi4Y8mL3fShw91h9eRMu2wTTc",
  "key16": "4dvfaQ5oEXn7w2zCmjsUDcTTvygCC119rt4D5rjdfwQNgmjoN7avWCj8iUjQrAg5EfH4yEbb1agMmBRuoThjyaSN",
  "key17": "55owQzxkBxKNND8TBvfucfETbrC2j9perqM9E1waNbsEgv1oRdFun8Vy2pCCqJVfmWhAFQqdvqqGAUbXvrQ5YKvy",
  "key18": "31SRp9J1LerGyVfHGSjg2nx51gsVvRSRcfnuVCUQ4uRd9QUi2nw8GoZKT5VDNeRywHaDTPTwkKfss8F6aJ3CKnNe",
  "key19": "2kRFscoYuBmJJNTyTPQPqCjhoWyWRh8auaS75zT1eThRxKNgNzjNTupMoHS6bdRckm6pxr6gDmp95bKS361nrLXx",
  "key20": "KDL16Gm8BKt1iW4chKxVuRZsRbRc1iCtLnrJAN2gZdTFfpa6Q21RTLiD3HDYuaupUGhFsTvAuh333LaeJvDprBz",
  "key21": "422km2MQvVWLgLPNApoWynUiXb48Tr8Kuogcu6cgky1Lsn9FpAP2uiCKaxrFYJVkFRDdXzkMtZnnbDr6pjkT8q3f",
  "key22": "3AmZhw2ZHi4FX1iT6TydJ3dwNWgnjFYkzQdokQcFKaCgzkyUzPWR1uA7UHRAaC9m2hFREbPVRjcCxyutKwoNqiiU",
  "key23": "4D8xJSudjokzw1sq2yx7DooRGHP7VYCFTEoYE3xB7eFK2VUyX9f4TLJo8PjvoyBTWQZH5j5ZsKmTUzZgKVreXW6p",
  "key24": "1295wThkMzoPQonaMYXkZ92PWau6xdTrqgSBhmzfBSWftNyvXKyGoe9cZuimaFwwd9U9z8iZmHi3v5NwMpDcEPi8",
  "key25": "5pv3UR8Nby5STMmpLrpNNFCr9jw3L7APHqotje8NCxmigaCLP4XBCAiBbRwBHcDALLSLcx365ySi73VRv1AYuiFJ",
  "key26": "3ciBZRZqSPW4uDqm1LaLcx6XxoGimuZspkD4XX2ZHGPFf2Nu4pnfgVfLnzGsJEDEPn8BfEhRFRFUV19k5Y1kKTfh",
  "key27": "2FBEuLS81odXm7gsAYK5VhpN4hVmGkgB1jTvXf7RLERTX6Sqmt5SkBkhJyJVnjRMjNEatUMyyMxHvTL1JkJW5anD",
  "key28": "63bwzpqekdCsEwPMZffNQEMUmcm1UXuLhRN8S5r6XDV1n1unTTvkNG3vzsP71mJtcnPqyKzoz7iXVEFvRmzqwecM",
  "key29": "2osPPtc66qgGr4r9NT8R6zCT31obMe5o2xcxggcfHQpy8qkjponEXyGSN7AHPnCNBqk89xLQpXapddm9Kckphdoj",
  "key30": "uSJA2JBvkUN7A4d4K29XRG9yq9HCvfvurBjJWP1CgSMknM4nFGxu2gyYDpi3k2zpubAfnvDMBfnXGsL7YzY98zB",
  "key31": "5ZrKaokB5ZKqH7D36WM6TdhHAjVmWxm4kbNzj7aUf3mXUC9LNAYkVHCqEeC9nz7auqkZU1b1u86AKUY7gDTz5GaM",
  "key32": "3wHCh2GKSUCNxtsCsResBejqfrwV8jycgXCZaBsGkAemF4sWpWwpYs59eaBNnemhGCCe3rDcDBkPUpjn5LKQUHmA",
  "key33": "5Vb3MED4eNT9LQ9tfZLkk6cZ9uLXE7svuayJjJ8tiuzY3ftQCLds7mvKpg4wNmE2ftyTbaUoCJPN45kZoJ668Xf9",
  "key34": "24HfEMHyPMiRASiS6NKbEa8Avzu4RbGkaHHmRHtndESnfTEn6UwCZs9XEvfHMUQcmP1CJ9Eb7kcV7cHAkbqZEVBm"
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
