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
    "3QKBEGw6fiJYG9pbMeu46VeFgd5NwM8FHV3HM43ZeP31NDWeE8CxjwBMyFov4CSMbdWqJZBYR4ZGXZ7nJGX3u3gh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oECXXrEr1vY73z4Y1ikuG4XbxHcAzcnvxPeAHWUhTXTAE9MsyWeNVuXtR8TL3tQDwFbNCtRaKYH2WMMqJRR9yrv",
  "key1": "3nSHgdfomCb4ZFxgnfugHwMGm56yY33Ue5b34dWUbrqeVqkU1QKRPiEWDMeB6i2nDTR4Nx1GC2WTaYVt8U7NfYMf",
  "key2": "5bKmAfTZcLs7HTbLRXj1ofLUWw9iFX9ZAKzLuSGyYYJC9bFT8RtWsTyUvGRnDt7KwZPMMsnyyLM7VAJZFfdHFMHA",
  "key3": "424qwQ82dCW5ZeX89KdBRck2GW5AdJ2hqNqMCASdZJByPDPAUywZAS3auTDdigFtEPDr1KRyJ83HyEAqiCuwZqYQ",
  "key4": "5iY65P2hSWrKaYy89ZW28akqMwgzNB9N6fiNLKAzE9qH4eQZ1gi8kBYxKpFqDtdyvDgFFiAWsw4SDnyDSdX2gvDj",
  "key5": "3j16ocvm4Hm12pdaHi4nzkZWiyDj5tyHaLizd6LSZ4jFwqenQii1y9BDifDZg728o5wWM35tfBodJ2yv69cXrKkC",
  "key6": "5RLZCX1mKtEZ21Xv25ojsSprmVuwGsfLDyNmmhrLLEZJdwXT8ZD7WdVX3NibeyG5Pd8vmYawEAcpNvymtKmt6WoK",
  "key7": "5uUyA6DYezdHCDHi5cdMxsAYMU3QiZFsVKKzrG68z2GdTQHySW8Y7hbWyJeab6x4FGP7xhJeDXUt1mzzdB4QRugL",
  "key8": "3CfC4puzxbrkuD6QPsDJr4ajTdm1kBBRwugteV3U6S6EcV3aiS8sH1TGAKqSQ3MQbmY8iVewB5MPM6onncVkXNwJ",
  "key9": "4q8JsEdhCn525WHdvq3WkKQxWAR99FAooSeKHPkfUVztAZqdWSYETRdTiQoqTaax5tkg35NSVvpt2cW8jtkRM9ZM",
  "key10": "3zyTKTvMKioNfZ5PXzZqzFjru1Kk8Xuthtpd2E6aKCgzFoiuJLhLyH6tEjGNrY3L3HY8Pm9C4iNHztsn418SvUEn",
  "key11": "2iuFS1Kf83GX9i9DoYewtG3My2oNm8Bn1rJ1EfkWgKh6mtkbr7GQwuztBJ4PcscrthThYcNg1cANBtnarRxorNCN",
  "key12": "CWqV1b4drgybiJgobKrjbB5Xs4gcVRBWBKqTzTgsTkReQNhBFQMAS13nA5Ws5b2BJoMirkQ1EDZDYgMat5ZioAt",
  "key13": "2vESdvymr8Ft7cHK44c4jwbYs4xGKEicj7bUe6tWMbFKTy9m2PcCEF16AamR64ToCGaHJjT4qKPbvzmXtMRsRDpf",
  "key14": "3ipJLWqccupgEVeXo2wSdzReR1MQSNeLpZG8i6pUY4aHhjCgpTDRzzzLVwNUkPFQanF2SrcMCnS8kgfZ3keRgdRf",
  "key15": "3CTsjubL8E5gvPNAiJaJ6AiirnhC1Qsh8bsjbSjuDtQFUM3gGHZvH2RbefpnHuRZaJgEk2R7aaVBbcNmmfizrv9Y",
  "key16": "4APztAUhFtwteLZmNoEzmwqcHScxbqSsGZub48Upq1LseVsKfiyogqW6aAZ6Uajz2SQFzvq1Km5BQfmgztbYUUpi",
  "key17": "5qM3rJAD4W8opuJA3dyoVDB2XTvJm3Z9SfJXRT94BE38oDC7foWSEJ69KRvrrGuvyTJwAnnQ5UPZ8SJhvgzt3cov",
  "key18": "gfqnPQsUGuydeGjabLA689wnk7d8zAVw2CUUwFk2dguoBDuE9WQXY4usAt7V72E4SFFNCDoJwAbdWZRyHDNpQ9g",
  "key19": "44ACEPSKsGGdDW8mBb2Dk9jMA2VGpZTH47qPbThB2xiuor79EduYHP3qPgcBMKYc499A17qTrwVt65Fmhq22NPub",
  "key20": "4rSJA7RjnPJYVeR9uzHCjkvQCgZT7gBeUVZ8fAi7D4T5rYU2H9eC5Rk1G7MFcbaVU5BnbYEG2vYE4U9mtDvxEkvr",
  "key21": "3Row143MqAar33ZcmA8rRuLVemvE672Xg6i8s2AEp9AyrXzCnuGeCPKNY56h5ikGUZf3L9HsaDvwFe12Bx8WWg6K",
  "key22": "4crojPsLC2gUqB4HboTZ7Fx1iPpz1D92MULdFZbe78QmBL54xdVAd2vmFT5xYvkMQQqcwrvY2fGZgg1HVeVa3Rbp",
  "key23": "2eNpZMaHmj2SZ68VXYDjzj2q8D7oBXGHWFmbb9zt2ExP3KEDdAWSW83NYUiwyyT1WEXpghfYECwhsLBa2ShdG3xe",
  "key24": "5kQd7DDZU69BtaTNHXvyT1GsLdwtrn4spHeybywChehGqMwmQRVudqGwU91L7N1T4n5RmmvfPitAhcVScDjVhU4U",
  "key25": "4ZDQxYfnYFg4t897KF8FsVr779Q35WqLd7SReo6to19wu29DJZqXEYFyakYdCHZzWogrby6LJPc4fi5boomNTHP1"
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
