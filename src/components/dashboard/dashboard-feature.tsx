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
    "4jLnB8ZmBT7dHgHLHFuSCe5a8NWA7SKzUcGDVdaKhQVHnwq7P8R6xQrHz5M9S2RWH21M9ViT9c4tm3dfbnVLrUw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k4F1NiyiCph5B9RzDMUzesrdUkQvK8gTFcMkSHfo5HQzLugbvDFYNaAnTmrE7wNkHowo2GGTp5hRbBeZALYDkM5",
  "key1": "5Y9yazCv1CxwFk1S9WSL1tnnYVq1jmV6e7Fvp5jzfR47HuG8a3buGj1sqyzL6968qK8AdnRLJVWepx3hSyLCZ522",
  "key2": "3aUaeQgP1Jxb2rZ5N4JsJRM2c3GfGFjFmXhr4A7jNQzooVzsMFRytDSnc4VnM1F5S5M8X7QW4x6Ldnxv2JiGH9n1",
  "key3": "gLWGwqyQSnghaBF6gQSsnNFCZY2D3K2JfuLDZrgKnqP8WEXGAfgvc5L9upaUTiyM8gEFXHEPX8HvUnJqFF2CemF",
  "key4": "57Vi2YE9qMniL2urzsDCKDtmasexQZr2wyxpxDu6ra1aHDSLeCCgnFQsVmeaMLpAC3ASEfgXXjnWh3nE69nUWaCN",
  "key5": "9g5arE1wMwDvmhfPtUMUdvS67V8PzKSwTnN5tFw8qWr7CSprejmLMGSBz1iJ3huCussEHK3j7mtRHaKgtmn4FgB",
  "key6": "3k3qRQirKREzJamtknbjYs45ru7tWrFPYTsNtEt3rGjvSngiNFiEVjPJcMevsm1LKiNLxZyxBVwMpH3hmQ5EXSz2",
  "key7": "43JNQCVHeohtPCUc7SqFgCLKk2xxHR9mExGipxnZpEwg6AqqFV7TnVVqHWbyZAQp957y9wyKHiwGkCpfFkFFJj8C",
  "key8": "3i5ZAi7BE47xsrGsL2WhccXjJxfgDWyLnrLSax1BGjZm8Vs22hRtm3uQuoPJTXr6rQ3fBw3RBpBfeYX4kCz65bQc",
  "key9": "5b3bXFpdz8PBkoTshaV543nLcz4B46phMnrTCBuysoqmRxYhoKBhV4iCL1Pnw2N2pNdRXWji6ioW1J4aZTB3oupn",
  "key10": "2r9NrBetSmBL5mGYUKF6FqdYT9f1g6n17oJBmmQNRQYyVLNMAGrfKrMNrZWSK6c44K5mECYuafQLvtt2LcKG5924",
  "key11": "KX8ZxfkkrrxrxYz8Yi9jKuoAR1SRariq5gMQacaHP5Gup9aaMh82G36trPeEUZ3yCteC1TtE5LAzBTgAhaJqFHp",
  "key12": "9M7RadzHchP4axyG9Bzc9ipvYkTsGAZtnGX83K7RpiNVTisJQcVQSbHMGsbxSNcVeTUhKnKyoA4Hr6WJbYXSH9F",
  "key13": "44ADVWoGGoCm6XhxJxF22cfMfRG4WN9m4dC3jT1dV2FwRmCKc6qybtbxLF9NjRcr5LXdKFQqFM25SMHtTt2Z5pvR",
  "key14": "5zWhcqNYESUexo1HV5HzkcsbrahkNinvP4qZenjttr3jkQaATdgHq7Pd3sRpZYYjpr3uoLKWQcUHkCaBGeCWmygs",
  "key15": "3uzLYQwhrbKtZPWofj54D8EcC319NAmg26y7pWGQM8SAjrTt7jepzHA4U93oD5dV8rTHEXkqEZ3ZoKr9SEr3hoPx",
  "key16": "2v9BNN2YAUfPQ3ajCxXr2ynv3o4W2uA8Tk427dxtkFwdUZMWHc6GboE12HRcde7LMn6r5RcHQpMpsrumpVYoRb47",
  "key17": "3R466ZkLDc6wFKqGQrVqMamQgKFfcQQJHx8cT5ThdDhRHuKAen4pHQ93pJGoPksbfPkfXJKACU12V87yaaXVbwN8",
  "key18": "qj9PSYGvrFNUHKFRskEi2p7whwahP3KSY69mAyEMYwNpL2aDsh69iVfw9rQGsFxyJmrrbbFU5ZsF7wdgJsAS7iD",
  "key19": "4QrUUX4K5qDsnJyf92kMMMjDmorPNkemDVm29SYumUjX8FwMaU2PpsUmfT8RDvUB9v9s1TmYFQMN7PeTAVw1TGhV",
  "key20": "5GsTLd1mHutTXZ5mQR1NudPsgZ9Gzv6eeurfkB3cCRvjSD5v7rEkF1jVwmnX8nwD8zaHMu8xYGC5z5juzM3G4row",
  "key21": "4zG57fL1zwZNrTvchEY32PLvkUgGvVgQY7NWmeEJTnrwjxbfmMWCEabxbBXJMVCzZTy1RurDU9vh8YaMuE6aoLkN",
  "key22": "2zApBfLMRpomhLYfX9A3Z6reqvRpkVKU7UZ7R2e1FHrcYW28UYVuHJWJ73vBFPdXiZsGh8JRzNGMwuyNANbxMmYS",
  "key23": "4fA4My3i8ZF9cpzmNPwz7i3S1Ps2zJLjAoBS1DBTbzsYNzFZy4r49A3mKozkVr58akjyEkeDWtuq2gRaE3TVxetd",
  "key24": "3NNq3EV59LxEyfNz2bLPCksJo4j7DRiwpsA4Qq6fHgPHNPAba4YmitP1fC5QWDzqYhme3YP1Fhs8LqFmCh3t8pNn",
  "key25": "4VUb3gQXUjVAhRnHm9jmFrSVGohyAFtqPtHpHKrUszkdkqWaSfjE5zAZ3BekvxzrYcshe1bLXeaUL95SZ7TtEqjC",
  "key26": "3piuyjpaXGM5VwWqnektKT66s1m3TRmrwK5ffVYd7oFMNhSDsW91qUkpp8rxCMJhZj72XyT8xCmeGvhuVFtD3cax",
  "key27": "2SLAY2B1XtiLbDvpakqCv4fk3FawfDcnDjKJmfQwUgMHsmJ8PqbZB7g7kx8RBLeqJnZYQ61Rkvw8grvDSTpmGXtk",
  "key28": "PAN7do3k9sxaAxgSEEmX3UeRFpU9RsS9qj8YPeypkhey4PVNMNZGcEN93NKYAZn7pXu9yWbrEzJbNW5bUhN8nEv",
  "key29": "qyQ8ppT7xPctSaitb6NkvV3hFXnEBD5MhEtY9Vc9iDkCSUGaaQeSnhJvyMa63TQRCiw7pLdq4ZipsG3niGEmcSe",
  "key30": "35yjWZYG6TQ32wNbs7pLQRQSGQ2HM9xMmV5T9Wmx3ueyNw9jC3y799SC96fvDYY3NYaskf3cXouBy1AJQxyQMXQn",
  "key31": "3LpDhMLbECqCdxw2jdTEDhtPmtew6Rr4UmJLvR1QwFox1exCHXWWhGTrdD1czYQKuZg1uPjL9JTxKNxunRJZMBzC",
  "key32": "mCWgCeycysGAGmm7BB6gB9rDYjrQrBRzz97QNFHxqt99fwBa1ZmwiYgGD22LhmaBJRKCXEC15MmQhBpXydqFNmA",
  "key33": "5dVzKjnGDPomLpWzP4b43ddExwZAafjivvWyfsQZDwQXsNhu4UX2EXoMdjaUSqk3VDZLjRep29oL49xht6u3SF9f",
  "key34": "4gtGi8QBvfJy7WHeG3ijBF3KBmApLEPshVLe5E6Pj27XDcggg3qNZeKXiGPzh1a3qLs5yMPQ6t4oUfJhZy56tb97",
  "key35": "4UGFh2QVrVivc8FFfHqosPeSJ5tqiKuNdjPgXCoKE1F41ZLzQExWghWjSvjwWxBh7jaRk7FFrSguHc1Fp1NTXDQ5",
  "key36": "4t84n9s8AJGfsUUYUBTc8BU7J7diBeVMgjgFLqdg8GejfGnrfGmtkn8MH96qtJmEjXRovYZ8EQ5bDKr4cvaMGj4V",
  "key37": "4d6uc3fhzBcSLrhZi44EdtZGp4y5KzA3XjVCo93jLfexvpLQ1mykASi2uQ5gmV9MZhpTYu8aqpLfJSJ43u5Hbcuq",
  "key38": "2EJHbBAkZKNxDkinXxixfyh2FLXntgrCyHgRqyD1ceE9RxAiRHny3seS6ZQeA9LvJnTToc23Lg1HoG6M2SDfj1Wb",
  "key39": "53cJT5Z4xAzkjhEBANZvY7oM1vYM4X8p5j4qD4JApJ77uFbFFUXPL8mrdJTKyUXuJ5FWKQKpwdom88XGJVkW3g6t",
  "key40": "32oPwUWrXVLv4ua9NHf9FrYCdzaPs7D6PFtJ2VF2ufHTEVt2yEv2JfvGrq5xsWVRLUi3osc9oGCJ5re373gpWTDv",
  "key41": "2ZD3PM6X7PEbt61n7yveVztgBMjaKW5TMFKg6UvkyPHAzxcmPadMzybhbVAXseiPeYjhxD3w5jHHvuFJAZK7r6x8",
  "key42": "52Y68zhDqPhEgmujqmfD1ACVDW7o6WxcNZBsGP7ZvLUCovrw4A4J8vKiyCCJGiqh33jmtDiECTH4ir9xC7gK4gJo",
  "key43": "rtbmF59VdmoNG7DD3JBGhLTB9SvaEvEQKZpvqKscphsMMxccSxRNojJU9DDBaqu1Z6epeC6YamggePFevUtQM8X"
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
