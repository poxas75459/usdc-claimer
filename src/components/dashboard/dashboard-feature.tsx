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
    "3jRzc8KW45p8LFXwgFxVMBCjuGNounUwPLe5rQeUKkewwHCSPnZLpAtKcgGsAL5F5YGm2F29tdbzy2CX5jQpMqNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hnWFx7TZ35wU2ggA3d6LniCJT9r22JRDo39vaU9g2uMRvSwNDTGXN7T67ZhS5wsubp4df1vG9ZM1naAoAVFfUka",
  "key1": "3WwtPn3B3LvcTQMGEJRzMm4SB8ftmRC87Q3NKpkGm8MzURfenWRskeFRF3YjkNhNZRjS9TwuEe8BcYzvPHL22dqB",
  "key2": "5twALh9d7FDJ7b4gFsCSn4TPtgrQ3hoD43wQ8FmXkTnWLtWAttnFFctx3gNZ2Ljet1CrM8hBRXHvLuFVNQHY6FvC",
  "key3": "heAaQH64HFJDTBna2nvxGWX7hJjhSK97i6kjFwQ8D3R91ThnMGT2Qm5oz8v3DRvKg5fsnNiW2YhTUjKqMbVLqv2",
  "key4": "HppV9vyEwWQxUpnQHy9DGGSeUNUAYfMG7mDvU7ioo54CJx6HpC6gJZoELZLr2dh6gaTRxr2VLtJGYVVj7Knpn8A",
  "key5": "FbcYxLqSWFg5kCvj9Vpw4yg9FTiZMfa8RTXvAbfKMNXUzYXnPBeKFxTdCAZMjeUv2SZeDSxjKcA2nGyZxDmWcLr",
  "key6": "5SHvPZF6K3F1qWAdNiZrcfs4wqxXbuqmNq7ZgjQMj59kHuwyRimrz3xdnjyjbwS2yGX1Q54cf47ou2vRHfTva3Yq",
  "key7": "2wnyzEjBCzBJruoySNBNX5LAt9MSzvHW8CXs7j8cmw7cdG5D8wfnuozs6wvrVBCpa9fn2cJrGBDUcxWPLg6B7M9j",
  "key8": "z5Z24Xtpiys1yBDebQZQvgSk3k212w6S4u2CDX54z8RyNXELFsKscz7D5NdYowXFDiZKdVG4bcZca9GJy12uquk",
  "key9": "de6yXPRBwPVSRYftu4WSJGACL3ivZFcH24qCxvvRQiSisJYDkFJAoNbSLzsoPpWA15z5rLaRCSrGhJ8CgMwhyZZ",
  "key10": "fXZCZC3FBkkWFWcPbsutVEVhtCKxMsCZWnpj9y8yV91LDgHFWHXY1qLJZs8oow9om8FxpvDN3SU7nKzu4Sg3iCa",
  "key11": "3zKqhd9bpg6anAJNKLnyjFCQ7y9koH1eMLoDTwFyM2rcKxZYjHR7Bm4sw183VQy5CrD6ZSTaGPRcxkucy6tCpzya",
  "key12": "6XLJjSjDJERzMA7JombsZpmu3QuHU3Dy4LYwbAcJJBQxtPxdpGLuPHuxKfwuDoxRBLQdvt8XUuB8apMG8qEykE5",
  "key13": "2hYR1K7W71r25KPGZafoDLcYhAUPMPo3VgxS7ofRSBSE2x99jXQt4weCC5kyQAYNhNqWzdyhi29wewCoNUYqn9Sa",
  "key14": "2CV2nswBt8a1cMfEoyYMbV31wZ4Qx5MgfFVxjUGJ2LUAuS8TAvwFQLXvRYkyMqy949sVQnj8yxTCYR2J8o1KnEuA",
  "key15": "3ZqbPPkerFMwRk52szWkBCZsc4fdhHrfU7Amn4TzFFZmJvPCVCSfjhKDYmk2m9xNzeSHqn3bt2evyYv6Zpd3QNdp",
  "key16": "4kHET4bnLmZ67waEVwNtAqGnMXwzvUFh3hxYaRG77u2xSxryfpGCyECjDmWdwkJmpMG1Cea4mkQDn3GVmhNjiHrS",
  "key17": "5LHxKkuMHwVbYeSpMu2Xu6EiheM2nemE97CiTqrRFc7g6uV4bL83QCQnzy32JjbUDjW6J41oxm8ZJ9oGYWbibSjb",
  "key18": "35fqK7xbnFSc6z8QN9sZVQiartknCxVLGX1GJtZeJjVfeKGAMqF6c1yZTJ4BYitt3x3jJo4CAyTwfsLztWLdMKTU",
  "key19": "3V26Coa7AqZzVSa3SCCkV36cqwLxEbFRWnRqyJCzRhvkfN7UT3WseQhSfUB6ZWz5THcsbgUkFhStQU6TqF4JPCTt",
  "key20": "4geZXCFgLZJ4DcrPGV7AUxzdZGRLZXoZPqMKiWRYNqA2UKwoes8yuEhvu2eAK57ru3unhp3wWa1JjAX7v8cvmay6",
  "key21": "3fivVMgMHi3YPMs7J7SoGEJ28A1CxmVNa9jXUPYUiXmDwiVsjX5K3XgHKHSy1RBPP8u7PbV6D1GyrHVKogDWZnnm",
  "key22": "5bUgLrcZebXMUzRW4rPF1EiDCsXV3xzysNbPo8MfYw9mipnuziUKJpoThEp75htAPBwExmx8HnNNhaG4WWG8uUBH",
  "key23": "3hxE3Et4VCZrkR4wL3CSXm3uZvDtGX4q5EFHFZ81Tfa114DKABTKsanoHLTsdrosFhDJtfhucDPJebvPv9Ni4ReL",
  "key24": "iwLmJxyQ83UaTmpB7CPm2igumqE3vEU5rPgtthTdXgo11XHmvtCWE4mjAB9FX5hcquSJnTxDakc4JEfXSdKiR6d",
  "key25": "64wX8wdE8MtUtZovuaC2UXAXjqEvkc8Z7NKawGV7aek6D5qjJUhC2WaGefGpQHHJ4u8XBTW6ZuYgmKpHrycpWF6i",
  "key26": "2kqtsXLV4pVhfVjtE3XdEWNK7iW8frsdQLo3AWWkPzteYa8gPyydsiNPLzvaLqq46NJ9R39eDjeYc47L7JvBAaPC",
  "key27": "3meEe8ZAhykdeQyNepXQTT7Y9gRcbaTHryz7ktwbBezywRC68utfQMyLm5ADJg3eBUXxeLZhXEyFcgjfhZshmCGW",
  "key28": "4RuzEcUNsJmDF4eWDVMBMyFNFQBRd2V7hxAMKB9n7ofNQYgN6ykJ8bPT8v6zRfPfXCCgQpd9AuiiaMwMxkryuzrR",
  "key29": "4ufRBWc2efSYPCYay4kAAPUWddNPLcEL7bKJXyvmArGHAiK2t5PjeWShgqsdTQLNmktdFDgBDgcFewf2Fe6HpXL8",
  "key30": "5mDw6btV3mLAj9PWcH7GsZaB5FCYYyGhsBjPjxJVXZbotUQUNHA95W9mRvcWiMDi6TunDoLbfH7nREESQBr1twcc",
  "key31": "5rnhoyPZonEFMMZbDxEyXte6bUaCWhE2FLPD8iyEUaoELRR4UBpSYu2xusUXjCAKVo51pNLx3Vu1cnzDzUjLoBNs",
  "key32": "4CmBW4sUVvxN6ATC5bjXMmTcSoYr8wGAYAQypr4e4kwMRgLsdBUhvfiv2Ar7zNBSqSESPH5utX5BKweihvTnmUAc",
  "key33": "5eWVa8wsHx2FMBCA9FCERQaRGRKsasmS9WSmFgAyAJKRnGhL3PDcdQ7RRaCUjdcPgrTbphfc9otrdut1kGQLgKEC",
  "key34": "56KthKdEAPExCeRLeR8waFD72iSnDZEAnpTfyxaUb7xQSq6JoDT7zfdZTbyjaRUHYLS9cQs33FjHJ325Qnogcu9D",
  "key35": "HJurLvxPjEavLxeGR1UTnekK9wuLrppjPDCkdUWc5d5DTss9nWa2neJjGsVCaTBi9MWFy26vQc2WkzU3EMRxfjv",
  "key36": "2jiYig27fTerWcYuk58wSuS6ihhRVxpnRCBW7H9gN5m3yayvGN5BduXCpSWuHwu8pKKWHfmapiTunJeF1aPzUzmy",
  "key37": "23HKb5YSWHaqgFXhr2pAC421f1UomossijEKZPRD2nKwk84Jzj5VmyWk5cqeNPB9ffSmN5EPKNYmXE4jW5AkBVoC",
  "key38": "25So4pJxedLBxHtAkTv5XuhjsKHrMmPYXvYjLWthGXdcS96Gi45WaJer2bgi39ADRT7cnyutLQ15gmZHasGfH3V2",
  "key39": "5m2QmDsgLpdA3wLSCQ1tFmE2UYqM88juadazeiz5b6zsnbEgG2ksBsa8hQsd5WpFLiWK3xKemDHX2BmcmyEbKsPy",
  "key40": "2jft5PsiS8ka3HGPFr7qzb7MeSRK3tX4MGLwBP9hZo1pMVBu5utkUqyfNPipwqVT6v4gC4Hf8MwUfkqd48FD82HP",
  "key41": "1mvS43y1oe8ewd3KxbUUMqSGcgKzwvLrSyGubT9ATQb9zPKsGggrv34tNrcMGdmCxcejvcp2ij1RtX7AqDTiha8",
  "key42": "5H9xLDPuh337DP9Bq7BH4nkGqkJFEkCxyYibg2WuYMFY7krqR7avnariu3fc4QXtaTvyR35VxUemt4NwDqLJGr7t",
  "key43": "2FX68VvVtEnvqMpdKSUFdByvemftwdSdY152aER67pJTVhBAi2wJvikgEpApbQwy3X4h2BAKCfti63wwrjLKaXWD",
  "key44": "46upByp5RNmZabcxrZnqupbgYxi9Ujz858aXKby2kjkDd2rL6CPu6v1tBf2aajf8AUoevkZgTWzN2ufUjSeSmEG8",
  "key45": "47SGoimrsEdi9uDj9VF5NEwY5E9yHjw93Ja3dPE1CWPECmjqePhfkNjgqJnuoVjbQnMneNqW3rUB29MeTKvKmTC2"
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
