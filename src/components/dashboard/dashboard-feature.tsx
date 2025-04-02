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
    "5BrjPB15fVSuzo6qkHtwYXdANS7x5yRf9y712eGeQAcoDsAuC9pSKsG1sqS1yQqvhN6GKp6a3oZmEfaob28xoSUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34cBXHFo9MT92nD6jSjMD4FDfCeBgddc5WBqeJ8zWJaF5uTWSJsnsXgQEEEsXBXYnjXNqLQACcRWb2wuud3bjJe8",
  "key1": "5M2qgYGad3YNfd9JJ3TTjs81cGHrb1fdVxXp9GCJY3Ld3Hy6i1ooNr6MMqVkXozVMZ5TZs7LDB2DTmUsnd17uaCE",
  "key2": "5B4v3tEBZNFLKRfwJme3h7iKWNmmq928oT4HdgeDayr1F1aHGmQjVEYgjyV2vRRnperkq9WmD3PDp5Vovr9DNek9",
  "key3": "4D7xFZu1DeKFVBqAw66R5cyuZvLKefQK9RxoqLdNqyi1Zu2NVrVfxNeNpU15jtoUW3MX6sCVx9KgAcJv6g94189",
  "key4": "2pJ4g5NEJEXJqYCeTHR1va3SbTXj8Xz9wY7DNWi6RVTLQ2w5L8seCHGLJ5fwbrFP4yCH2KP1z2KMYrA4JZzHpedF",
  "key5": "4jaydGpgHEbTSUjfkFqrm4ofjmkMoGonGLJQueV9KLQFmHALSMwhHftyRBkGx63CFtMhnuAcd3DYD5gs3juX5UXo",
  "key6": "2mC4pbRQviJuVybHsTw7ofkHmd4d2RvEa1MQXG2Q6NPodJtsZvYVbAg9VQ7JSskiGd3aenUzdjKbP4SyYcJEAJtM",
  "key7": "2mcFxmUZMrxTn8hdRPWDPbSU1xJv8tAYziv8LBDQGJ7KxtarCTVZsbYYzeNgMYXoLNUiAJzFVb6HmfMfggN6XvDe",
  "key8": "4AhheZxUDhsUojYrMg2626rcyBkUeZHeVP2GCX3T6XCVDYuCsS8ZGkEEQ38iToccuD2PssMohbvhud3mtWFFSQCa",
  "key9": "3gAfE5pvE11QmgK81P5C3u7QZS2o61AtVbeFePf2Xz5XQeJXgTRZbcd3SuUcazBu76maqURMCTsvSCDY8XNDnh2T",
  "key10": "4sbfoKcZv64ywCxGB7jziERNrNCL9YZ262tnbcyDJAX5v1cFE2YFZSNSfRCkMg63GcpCeQ8LNXFfznWgaGJHrtit",
  "key11": "2qUtu1PTNkg2wFJbiEosJ7VtSRCnP37LQk36JipLV24gYyoVPCn7qmde7Pq4Lj2TU8WDujhew16B8XoKN7GhEWVy",
  "key12": "3krvEd5nsDenkTGiNeLL33WBjRgxWMrahET6U9ebTTtFk13jkv7jtJmnaswS6cnq1eNUwTnnhHXqMQMrB4wEg15V",
  "key13": "2oSrgq5JocyBkXfWarTS6kpXpX7oPunhHCePhXyCvZpXbsTk7AtyWmvCHRcA8Td2wvZdhC2BW7aTiogDxPLtdz97",
  "key14": "26fejgAtop7qPNprmqhrCULVDrodJpNu8L4aNxC1WTiudNU6LfwqTaiswdXMet26bBJNcpTajBkig6UoqYyiBU5K",
  "key15": "5hZR9ozBFvu2xC6joq8jxnbov3AHrrBiM5NoYJgaD63WpEt1wzRAEFNQsbaH9vuKzzd8tKbt1g6NRdUUAStrjUaU",
  "key16": "418zdu9JGQacdm96MTr3ybvvXdYztdiB6EdMtz5EumZWQGQvGUMQJvkWRTSSv1YEdbgQrkJubprCg196BNyr5ny6",
  "key17": "4s54poCZ1AusWSugjMDoXZNnej7a4RrxhpiLSr6LKKpUBFQ9kyi2bgeSzLZ1R4LZU3cEKdigNncbrNWVgt51iTBS",
  "key18": "3SiKRQbasvfuw21Vo7TwAiBmTVS6T28SLWqYrXpcAVfRZPSgdfkF8KUceFhiHuiTrVDttvKcxh6iJ7hkWMHLRPNS",
  "key19": "481pLvquK2fifAGH2Mg27RhVKVQ8XpfkjuZBq7WG1qKCnTqA6NhNMBJcakyVKx4XqSnbJJYyvBw7YYVyUtRvnja9",
  "key20": "3QoMfaFcisGLNkNT5Vk1vSJEwdy5E2iMVQWsjdppxKE3mvgN2kN8v4zw7DECwW4jRV1zrtbwERZEXfUc7v5JHWmi",
  "key21": "4iTHnTBGGXoYHFyK7ZMPqcdivboA2egDW5hNAxZssan9CMyS6DgYbBpZykaFr1uxg9rWdqHiGe3pGVxPHGFSUuqJ",
  "key22": "4pugqkrz5hKvf2R8BdWLo8czZrw57gLiiyr6RzCiFnsKVeV65Z2pKp7u7xRks4vKti7HuhmttzBEWwtvXxrGnhb",
  "key23": "4768eAUuGnkAbXZN36cf5cuoTPExjSxG4CC4SjJFZWSjE5XwZcy46bWyNiCAB2bnuJjj45Wcf4RbTHMGXrZXCUt",
  "key24": "E79NQqNuAPK2YtZJMQYPyngrqYLYzumuM2ek8cZMwx3Exnc9tqJbEf6nUy6FnqAuYwzssVzzUuKVCwry2xmgWb6",
  "key25": "9FvUxjp8uoRVZ6F98PXTXX5xbhkcBxtintEpBGq1v28rYgzuZ73yVvDoQQz9SsfezfajrQncRi5FwCWwd2zezGV",
  "key26": "3ATQji96k7JXpzFMtqqoLPMvU8FMsjy92anJs4eDNJtUv1d7BtNijrdBZaaVL3zFo7grcMcMZRXP3qnMtt5n4TAh",
  "key27": "2qnwkPZgrFH8eV2U31ahiXQyqmE5j3t8UmTPfh7Vt9Ngi4wPsKicBjmdNSykBLKCA8FrRM6ggo5wuRJV5VyaP4ha",
  "key28": "4rryR3TqwvYhtEWzrG6y3HZxyriuzGBw3cTH1KUD2anqqKq5XGMZJZeNjZmULBjTVYZAjyE9CLaK2rjxV6A9WL38",
  "key29": "5qXFUsnA8ni6QBF3Ug2khmLK5JNwGhEZtgGm9LDFyPAjAxtWEH9noNTwe5kXaWKHoAMc9CQfZUApmWC3pxH98XpQ",
  "key30": "3DWeJYS3KSPWzKvpS4zcwi21stbj8G9pKvfeJVUehqyjHxt3sRg2N2FNUgGFRE9SQV8rArm9Rg4cm8mVvd4mgyQe",
  "key31": "DTkaMnasaRPd6RvDN2mHfPXWENwmJajTBHNwHJCnwKpTkD2eJnnVJyfELJvDRfjy37DNi6dgrkSpBjugRb7WHUU",
  "key32": "McjE54gkFrhsDwexqyShi7rLPJF3g4Tf6S83VGmSbpkvW3NfYrmnXoWAQS589MCaNMp5JY3Md4jBmtPw6VMZu9E",
  "key33": "5pV1pZvpsEhCMrtmei8bMRfqXNfvSbBFKoAusT9mKa2mWaZPVzJA46k1echoBYrhYeQoLLMm5yWBZrjp2MUQW9xx",
  "key34": "5gG1u4htcXcwu61YrVajHAorS95GCHFkkriD5hh9dKMYLxvJSEys2QM1B1yeg4Ae7sxNhFXe3bwjY9t7LKM1v5Gd"
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
