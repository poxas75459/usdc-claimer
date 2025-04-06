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
    "3woAgkvuH1ktriTAVyTAvVuT7QCg69iFZbocrmfZthaizfoBQSPcxrD6JjAXzR6VhbXEHuZjpwxyP9PmXgVNjbSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HoaMavx5XHYTtYCbgx5y8RFrMXjpnfx9ACWf51ujyLixNLr7avGwKbgZPskEFeXBcocuz2UTmpFyVCcthdkS6q7",
  "key1": "3D2WJBkZ8XTr5Xj2wLGWwo6ge5sxFimMBkjqx6gk1SoFrgw4sJ5mYJtRXBkDpAMJU5qQZ5P5hwmjzDVioG1M9keV",
  "key2": "asEnQfuqTymiSyYhGB8F81MQPFvpEkoH4JWCtUtNHzxbNXSgjsgtepM1f21ms7z45QKUC3h7KKczXt6acKDnvwn",
  "key3": "d1iSk8WyriSiyh7fGnhk1b7kYFS7c8sYjxg37M8dnKjM1F1C43MHZuTt8BwpFZFVkEXJmoRA9VsjLjXGj9mepHW",
  "key4": "4wHPkZ1qQHGMCZamMVVM2xMeuhCTc7MZ76feNr2p6Tkwn8xtcw17gF1ZD1vEDHWYNrv1S3UQrtELNdVHosciBf7n",
  "key5": "5hv1fSiU1uufhdtXtb21G5fiDRKLQzBLXPuw4rvTH6XNAk9BGudbATpvrgzNeoYLfyY84VFoWdBGqNTQaGCZMB5o",
  "key6": "31koCE1qYcp5Urt2CEuV3mXZG98JNNCAoWiv1ZiF42UZfLFocH1X32Z8PHxS3EvMjx9QxQzBf54uU87z8RscLr8G",
  "key7": "4ajH3pLK6s1u15CNL4MfyPD6MRKEjEgTrVs8N6LB84PeKhtvNRHHZQFPK8brMv57ANDNavAFNtTb8AQLd34n1cP3",
  "key8": "57hGAxeAT9BFhG2KEmNQF3xzAtVe5SKrr85ErfYVQGjbMdyszxiKM1j5RyNG65NDwqYBY4chzWa9V2UWNoJcw6Z5",
  "key9": "2ccY7vvgdcxJR3BGccN8saY9w3PnMFM1pCNphvS6HoS9iKc3GJLPt2c4GwwVDSUewUAEV4VkHynkjwXGrkfb2wgq",
  "key10": "3DNyW6Gs7PrPdUfxMSaTF9gkqBLPcAb6TSdg3zJqkQeEzjrRwHw7Fktm4aF6uAqnugPAZMLMRyVw8HvoP8A87vRe",
  "key11": "CGRPtRRrbs5WVYFfT5MsgcJQRgg1UKJxbho13bzzBjhjGArFZaJJxrUQhenoa3bDjzyHBGdq4unrU9ytixz5x3W",
  "key12": "4RLJkfxyk9TrMJx5NgHSyFJycbByXSzimuQDZYNfBzUXUVuLX1oi3iewFgccSy9jjt1GArg5KxxjNzaqbxsGwSW7",
  "key13": "286dbZWrzSx5dfvuN1MUwwHdMvg2VfbPqSwhxoE6cSgU9sTPVtUiX9EyEuWsnj2zBLjS6DU8gsoQPxjtgyGBaJTP",
  "key14": "43DzgnmZ28SCvSnq7VwYEhLLs2kWirZSj7wQ8dKCj6pwM5qyM6N1gpt8zjX72RXC3DirVZSK4gLUVf3ei5d6FRVw",
  "key15": "5MMHiuSnr35Cert7uYvmPesa97RcQqNmqanGsX64K4x7jVJKUVVKS61wjyBB4fS7kdVQkWJrqK7K2ELHxYiepqKt",
  "key16": "4VRcQ5VyQrP3d73EAnvgymAqQZmxxwRH5UpQ5EasUmuLJQJ9xed7hNgjNhvBgxTKEKk96fgNq1Niq3yoQFBqZLnM",
  "key17": "5VYLXF4fbLrs9NcHEQcpj2iugLThaXY7vcEBamB2YXtdb3JQcDsz4EMXpEHJWs2MutFtcM2SGn7rMdfHaZyR1w1Q",
  "key18": "4XmGesgZTiixLSkv2pZLoiucouMcY13sKBNfAjDgcE7fSy1Q9myAdevgSQvM7obLELSfzf5ivxFiWm55y1Ge5Zjp",
  "key19": "26G4TZrgvzJ473hE4UNSe9kmUaSDmV2efPH8Us4vh3BEbtWTua5g29mtEQzEyo1pPwQXjdkcif2D9NomKZz1dcMm",
  "key20": "4u21Va2eVxCrxQzkDbPZ9KYhULXYmrzZzAQ7o2DaiMJCbJFwULqiMBb8KfCVnGV31xkmdxH1g3SWywMuGu6YBHVX",
  "key21": "3LKYMq8NmYU4Usw5j9JwvrQR4TLhVraVc255hG91NSHSa3mTmYyNFLHZ1TVsqAmUk78RWdq1gvGJ5a5LWddfh6PL",
  "key22": "5A2WVVSgkr32oXtQFrbhu6p7TVs4v5FsN66eMyFM7cHj8E1bQyzEp2Niaur8xuaUtc1HS89zfTjuy5vTS4xjwm6Q",
  "key23": "4UwHX34Sc9Y4dGaZQJkNqxrLJA9nhtyn3xWtoWzvwx3SifqxQwb7gwMjjCtDY7TYfY3FFFkmDJVK9rH8MYVz1A48",
  "key24": "3G95nk6AfH8A1q3KdDMct7GJC2mLj5ET9DWAwi364Poy478aTpqFmv6P9opgXP6AzQ28pokkZ4rQd4UVhHueqWsT",
  "key25": "28UdKcujjMwpB4aSKqtdAkfgGEa7bDSppia7YjumhMVmjEHjjeXJpPXUHFwkKSbADFgYvKu12Gxy3PFzTjtCMtPj",
  "key26": "eMhmUbCZCrM5HzgnvY7UHu4b48PPU6prxi45cdH7iie1vkFSyzbQGwAY6HVeW78zn4hqxJqTAzeL2QcTo6zYZC5",
  "key27": "24ppUJ4uqqmr2wZFXzxhua1e31hTH1s8GqeAPA84CD2we4K8AfaBGdgCKEb6dJ6xsu4bTyHoyGKL9fdQxZCqjJmP",
  "key28": "oqqaP9c48i3gmJfZRX1beDqbVSQS4EooGBWAZBdrotNh3Z9EwxWc85wF16vZhLy5wJmWnyPQwfssXyYsySxumjy",
  "key29": "3pbAGyebhqiEiC6X82hjEQKTeYivJRM2cRyMf9P1DkuFfL9xZsfjVpG7vvF6E8EL8gbSbv8D1FdqyCfMti4NSKYw",
  "key30": "wJUv3AYVsKhNWUSUuLmF22mSgXpeQXUA5TJ3CCjnXLsTQHSWjFWiaM2xvnqSJh43TPgpcFv7srDteiqY1E8W2pg",
  "key31": "629w18SG7kjgjdsNXPTQxQxULe7ubGfbW8Bgsp5qbwirEAkpHTfThKzuTzyNzzCtju7at1yWfAkr69ZKv9EZdENw",
  "key32": "6HuBRjAsnd5ZiSa1RQmeVTRDQa3LWUKzDkRnMoNFiUxPR9gYe16MbfCRrfUuC8PD9eESGFwY9et4Zz4C1yTzfHh",
  "key33": "Ewg76uV4iGfs4QSD5nFBQddYGbVLvJXh9f5cMaNCdT7Z81oKMWT6Hs2hnLTQM7LemDwsJkpbYu672n4p9dPJmiT",
  "key34": "22icQSShhCrBm4mbseuqmzCJhG8Hm9sMHi5UQZXyAr999XqY35koYcfSPgwGXuWPhRXzq8DoT1HsWhA4nBpHQRpM",
  "key35": "384tLYDTwzN6FoUj7ME48kbV62j8f518DZK395zhcrG1befgvZ2WwQmGnKagpLpAxBoas5NLsH9MhouAfYcFfMVr",
  "key36": "3pXgXGyuDHHdTRsAx8Z2TPzfNKfotnUmRfBwBFSkNRernaw5BVZRK8yxBNJZGnwUFNadBmYLmhtJRsmvPKWik2U",
  "key37": "46B2DXa9KJhSfXvG7gV749tqaoFSwvd1KdNjeZy8p4SWmVYCZCw7QXFxsXAZwH2xM9ob5K9KAMaTFTPTbuhtH13E",
  "key38": "4oDSNqAuE592Va9DHfT2cMCanAFjGmGukT4D69QPyWCBZsM7zgfUWTUCpNxJVNsqCJS8VXM95yfdNiWZGCWTFtEZ",
  "key39": "5LLTVoaBwA9WE7Zak4KyMK8vQ7oWXt3Huiuo9GY1po3CtGxazzcpekQrBZdtEibfaeAbWrMNEZ1VY4c5JxDAmTVa",
  "key40": "52PQ4K2ykDvMuhQC8tPVjU8iPrJUT1LRiwpzMNCKt5q5LD8ek6MWaaU6d47WuDejhTcXnhi7fxg9vkTVKRpiGF7o",
  "key41": "3kHf85QW4JVofhrfagjimjzGJPsf2U5eobEyS1gjfeDfoTUCZHuxWBwpSsf1mcK6VmPGtjXdwbnb5iroawXgabYs",
  "key42": "4cj4Wy1gCi6ULAXznU2gmujNS1yXCF9bgg8oM3N6gpbeFqBqvryxM6J5P5i5zEJREspae4EhTi5xXDG6dP91Bj9a",
  "key43": "BAxx9cRMKuqZTgGQeUkZ7rXgN5sNmtjALnU4cdqE7jXdgoMHy4CZfx3Ky321ZMkmVuY3Dh889UhNiVTMtGfQVA2"
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
