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
    "274gsmnbiCoZzADQDcj3oUvWJe8ESm4fZsFbFa5K4UPoW1GJDhnAD7iHKvwZ15WPdf5hSCTjukKCgjYGs9RYjdx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ptMaEuqBg2X2Tds7YxGpU5shCTkGGRUbeBrmK2pUE1MjP9Ugm6kV4urUPZ8wDs7ztkDygs3MkwW4oShKzyhZ6WZ",
  "key1": "5PAuU2M7RHVoU2WY9gu2mMtZrka9ggr26rk9nKr2syLu41CZNcZQ6uJt7qMUZSGc9NsG7AbpNjGbyBx6YGZB6dFU",
  "key2": "2aSimiLYeWKZVSN6dmZXkR4GEH91SgKdHQRcYyrSy4sFHcBQwPGxs2tcnqwGFCFF9GsoLnpUV1zYxC5pjZrfZ4Xy",
  "key3": "5bsu8KYPsHV4vQ117ApM37vbs6QG2QHMkMEkZ1ARAZwyhFbaqgdkmYuMqNXJSc2Bj2Nksz96qFRg4fBWFKwiC9VN",
  "key4": "3YGyzJ3zQJkvsbEUZEtavkpqayhLAb6LdRCS4CwKqSyb2TbbUta2AwyqA8DeFCqsRWGDxzmxTCENjYK1uefaF85",
  "key5": "2hTuFA2TnoEtTA8faJjjN6QRSEp14La3GHhEThcD34RBpT9ijDt5bDQ9J5e7M6WXCh739KdSV8gpqeEgJwtSzSgB",
  "key6": "2Hfh5GiZFBdoyVmSyuHiVJEinGwb5xcbqvb9sL2JGZ5MBBcKXhkVyHSDgCGxehpmU3vGdWHmU3LbP4UtrTrSAQFN",
  "key7": "M6A2tAqCMujFdoth5YGD4K2PRU9x6LDpxqtHcVSZHHKMeXfNP8Qecc6Trg4SzrX1YCqiZ3vgPZTSroucYpPtYNu",
  "key8": "5UMsZ9X8AKNGAfVoL2MZsheLfamo4BE9NLumixS9ow8zNPTYjXdrvzemwMtadUSjFaLvrDU7UZvvZzQeogf8Zphk",
  "key9": "5ZmY96nhobHXJmXAFF1sbewDtaNha7TRsZEx6BWLv3unvj65fjFVnRpQ8C5UiKnCEtT3WDvmEUjbQnePz1KPfpQf",
  "key10": "m9WFYfsvtHjHPrT6HyQLeDv1HUBS2PYYT3zaPKPDYfiZqyYNaMBGuo8PqUGwUXuxxMQBF7BwMBwcJWQzWUz9fBh",
  "key11": "2Qf6Qp6hfEoc7wPT7Cdk6T6C9wRA7kf4hoLqLEhtFPrvpTCptHgXuBdxEFBYBKawWBLYoFAwnm1zn97M8Q4XCUQK",
  "key12": "3xHDRB7s9HLQYfaKeuxgcWbt996rLZoxauSt8ABRYqgfFpUyar3YMknWyrZis4bGr46dZkTUfLiiSrGEAjb2tu4A",
  "key13": "2tcDFNkU3S7b7XCVxVyQbeeZzXNoqA2ejsVUKjWJYcvcMhQNmACNvrVpjLC944hJ2rZ2FfrYq2RK9jxm6DKhmA2y",
  "key14": "3mvm45P8kJYXPVz6wvzUwEkWsBW2d6oHwTS3Lg8Tr1en3V9zBdfDn54t68yLeD5mcZyVL2J7LQCrcpjJHXvLmspc",
  "key15": "2DDzWUjyZCqqiWcZbMyNnNqTh2GRoJ32TpiMbXhsAeQyESXRxkADogMGijR6CjTrDdbgrLRf2Q3RsHSvZuXxtgnf",
  "key16": "QjdKmUYer8Z5rZMSLNKCiEhs1WpGkHAssh4VbpgBe8Uqq7rjv7bAPMaE3ZoPVZvjGFwvzFJEbmjXbphVPBNcaqy",
  "key17": "pawJRGkFgAAH22Vjw4bbnGzepz1fS5oaJfGrLaDuejjsezKb2cR4oTA9K6gPCwrNW28iai58ixBuGtfDjqvSs3x",
  "key18": "2u8b8zE9JEU6KJmZLPjzC3LcrURYphJn4wfrDmd9mCmfb5E62FUHCdnKfatYkHTG4EiDWsmiBi7X5zKqUtppznyH",
  "key19": "3FpNGcak9K253Tb21USVjoXU2Ukzkc8jWMBVygJZ7h68Rek3AtnVXYfxkdkSN51heBp1xgUJUsWwVbHBt1R4Jprv",
  "key20": "3qGfyXBEsPtYmR9EQ9WLvWbJ5bANMmnVS77grgVFsCuGWMnj2hdkSjf94R6i9VC5bwW3d4aA61y5uVi9ZiqjKhu4",
  "key21": "2FXgWiQSXxmxt258enqkwXFPdcPYT38bjWJzJjQysY934MjGehd2F8dNHZwFd6UZasG5ZsSjrwD3RqDS3Evp6wWF",
  "key22": "5Ym99Dz1a1fhzxovBLZfdXQ42m23fMcGuLWvj6VKqq5nykJ9wthfAfNcAN4eQFWo9gsWFSatqnDhFFmTDqvfV24t",
  "key23": "4cCjCg7yhX85pKGSDj3hgSmUV6xcjV12wMSr1tLzTdordQSuWmonuhvUGYMP7P22gQ3YHjubcKc79fUQsR5vMLJb",
  "key24": "3AqhANcMGKvGt7Gqk6DiArPEczgDTvs3Q2XMWzWWzAFTyc6Z4BRaAi8WatnAW17sEU7FrhSKxPRBpRYjAPaEFUX",
  "key25": "5CzJMtXsHNUtm9oxRzoCYpWJqM5PvmHWKZVUppUebCZtKahVHbLdLcmDJ97t3fXQa9vLVkd3GVu5aLTn17WdW4ow",
  "key26": "57Bw5uhLz7rk1Uw5LySQu8TJjfnMARt3A8Vedb1d79LwdYzf1bwwhv2XDz14THvjneBHLFKwFB7z3dy1ewLhRpHg",
  "key27": "2RRWgu5HPeAHZgnK5YHPYt5Zud2FUDYJu1akefAWAE9Wkhbv3ZqDnJWFexKSLHGBHTecz9suXVUg1y8jk358ftYH",
  "key28": "5pZLwXxJoNXD4SkLirccoZ9uY4SU4aWj6BfYLXee5iLHnJbEqHQEsimb5Rw3Kar2MczfNq7DD4HmAF6cV28JjP5k",
  "key29": "5HPb4D4JEE27cQnJou2nTv4qoRjrfsS3V8uzRZtj4huPUkezttKarrsg9bLiNCamJEEJsKadjdrkoMiCDnKpVtp2",
  "key30": "4FbV9ua2eij3mR5fRDX1hmxXAzrGUsmVniEysRGvzBhfNM4EsMaRWnSkmYj9BT3sUskbm5Vy5Nd7WSpj4Pmd4BsA",
  "key31": "E1BfwonHx3ULbG1jZcquC7fB2oeZpfSgYmwEdVSAkGMXPqsbqwMWkL9eyfT6yGeu7i5yJXpYmvd6mHJSSt386JR",
  "key32": "sFDSni2Y97CVzUtRn2YQ5qmZEmuDL98viyutu536irysAFGQhBeiK3FtbJ33rckTUeQzH5gLn9HHAjZk8fNaYZS",
  "key33": "5V3kxX8Fqo7j8SbNY5K4Tngswr3i6FeRB8PZteR94s1W9Rsvb8FXFLFb2vJpFX4tWrtBPn8E9oP6wfT58BiD4QY6"
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
