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
    "Nbo8tPwRzUN1u49uWVPkKKLr6tgzocMANS1y6mroM4dPu72X3MQi8Fu7RMdyfPrWQFehkR4rhbn19fPg6XXSBci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64WkScQYGrCH4DMFaicDXCgjWnjcgci2tV1rLzbiNdq48Y6ChmSJB1MbUk95bqPRCPuiiHByWReqnLuyb7K6cAur",
  "key1": "2B5vdyiHTnLDc5FcPVHVYiKmdckQzgaVMf9D3sL2ycvoyw7LVvJsTiRc2opn8qyqiuhxgTHHTuvqEAwn7myoAFbo",
  "key2": "3RK9V3bX7mwvas2VQUdTyPwsJ4cY3pGUqTGsTcyQ6GhPhNm3NUZuBSgNiMzpNdS1UytRkSptSioeiqdPAEj8wJyx",
  "key3": "3MZMN9he8eM6io7KcZ46huDvZc8ffcXjNcngu1NcoBXFgtaSriQ7kTUSgokjQtoRZTgaU2ek5MxVQfSNcz3UTotx",
  "key4": "5oMf8LDZHECQ2Thae5YqSk8PrJhpXKm4mG14XDt6Ym8sQUhHpqkX8jSYXXVnHAMCwEkMRiWyv288UEBY87EELsEH",
  "key5": "32LhbFH7iHpxb7mi5UbfdzGsJDUjPGdk9FdEnGpHxJdWpBJ2YKabZcVL8LHW9PPRtfhcThVjkd8qRVUG4b5dtG9Y",
  "key6": "33kDDKjD6B9TBw11g9K4TXxUKgfaxw5FZqqPLyGNfGGDnhJrULppybFL2PBobkntoBFkX1boYw4cXYUnkzgejWv",
  "key7": "gRvGTBj8jT9hErvkMkyGSmnCURWUf8khNMqxKH5iNTqXDkLex5tAqR8AdgoRhFyzewhP5aTrJzrn29zGWh5zr83",
  "key8": "32FfTBhheFz6jufEZ6QXwbEfiSb2ujGnfHtuRqenvm1Vzsu4jV348CkQmu6d9cRqrTP35xTsX9zad2uGnTjDA4o7",
  "key9": "5cNsVgp7c14zFVznzqJDrxF9jFTHeGFXTd4TndmJrFwMkLBTdTcg1ah5bFPvj4FrqRhGhgYe9dfokzBp6ykrkNg8",
  "key10": "5wPy1aDhYQQ5PuW9eVRJjo95U96ccdTer5gh9Z9muyibkwdQdfu1Xz57vW5Wn7Yy8EQfqSYW3zQhp7N32gUmpTgp",
  "key11": "ytcd5fAtrxuHN4yGbLA3VXG2S4HFJWj3AUuNGWWZtB8Dpok3H4ubU9NMKudTbpUPGXZXMrhUFJbCMnGQA3Kus73",
  "key12": "4hzxL3jp2thBuTr8nrjftHdqdVhTKnYwepQUGjp9po7pNWizRJxhaLZwAiYrrW4nsgpdKRLUxyvs1bQw4MKxjzoc",
  "key13": "4QuGWmV3tZ8HmhU7RieKAsjiSxr9sFGCfyBGc9WV7rRtcE9F9vSWPdLawAd88V6VGnwiqqKuxBrb7onYGuARbNta",
  "key14": "5Sx6XtJYdGuHtjVZNiz7Eqvgojt2MJU4u6PuMngtfs5EFnrwhpizvqgSVRi2ig2HBKNPy5GH1Gn89WMPgUh8soth",
  "key15": "3tSUF6N62zhPpb7pXioZ7zzNkMVF5ftZtHcTBtM7ZuiE4kmitezPH4i5Dtorcs9CQma2xZun8Xic6JNeudYUfJfT",
  "key16": "5nAQ9mEq9fcypHCYWbLeSMTCeqHHP9Ao1J8mcSA93xs6faLL6rVXipeqWVgnsfUkErAFT6z6k3sJZmHNuyyq3PaN",
  "key17": "4nvLTB6Y8g7PNTuhSLq8mrC7QBAauMnw2Ky9weDLoAMoHEVQ6RJ3z2Bt6mmhz7VBGFZujxT1ybSFSQYW7iDmvZSq",
  "key18": "FPGYRVo9cfAyEW4nn19z9fD3zNkbiTGbGxi8hd8x8xw6Mif4Npm8D6uaKkno8f6DuREiYHgRyeosyzgeSJ6SyD3",
  "key19": "2avfXpbFCPzyY4SRhrvDqw7dnWgBwvbTLLtPXPMStKXgbEgs4BqS5e9cRQaYTD1JmVXpAcYZwKqhYZQhhjAp36g8",
  "key20": "4kSqMuPWYTigCXGfuabUCu2VaASdRFH456X6YPE3ghSWLyAxHC2oSxM4c9ybc79xpSrsah8Ncfdomm5X7fgqm9on",
  "key21": "5rSmtZriyNaz9DEsGHTPbfEbR72WKSjWn4eFip289j2pcNsMgg8CZp6rx99FHXjMz6zqz1zecExMLZuoLaJqDixQ",
  "key22": "2gTesYqwYzbsg1EcpfUdXGeGnKXHgBTnvbJf4bMcQKgovPN2NmqAbkeJ3AztnZugoQiXmUvTyzgynZ4ep8RqDRU3",
  "key23": "t7gkik4BUJZuiU4eWoBA4b1ixuwV3yMwTFT6MFgY95GZ1N5HJxrMSeqAorhkA1ztpfjsShDwiFkv6w79wmYTpyF",
  "key24": "2w4ftEjih9v54Lr8h3hrGxAbPdMPGK9dq94gMEe1gNbV6c371H1s3PsR3wGt6wAUMyPstuD8FRja2BqMdTxQLHTK",
  "key25": "3xt5BFExwDX9JLT4uPojP65vcV3b7FiZWiWKmX8qUpNk7MouPAFeJXaMu15tDCG2atMfKUCXpgoyYKy6k69GWw8B",
  "key26": "5CmKtuV6BiAJvbA3SKxtHC55SgiU7n2N5CE2PPaQsY5SRGRDz2Zfusyx4grRMYrZQ1VAXXtnmCJunLS7uDgAHhAA",
  "key27": "59KzdpZ7ArBBYxJtnknVfubQKBY4XjRud7LER7KRHpUUVhnrNbhQ7tFA3sxLcuB9RP2u79ohUgcmFfyVViZRJDEk",
  "key28": "5FjN6Z8coFQZ5DchL5q4gbL2WPRYREJ2ta31afYjqzR4Zhuu35TW3uDtnpA2r7LmyiEzS5hpPTGVJdBWGQoW7ERx",
  "key29": "2ZRfGaPdSGw1DYMWeuVhahzRGQFKeimcDNWbGF6WREjkSXLKcAxAPYhGakR698ZeRkV2JyzQycF26frnefiyRLfF",
  "key30": "3aKrjBkZNHpAM956jx4hBLYNqhUrCMjcN9KYAWxsNzJHnJuUx2Vi99LJSnm34hXnLdpeY7SkkQbdjexDo2jenHHA",
  "key31": "5JwCDxnxWZzwfJa8Y2tHkenrupxqF9SNEa78T54oB7Fq6EBZfGjohCofka259AmB7XdcHQDHP43RFZPfQcT5TVUR",
  "key32": "eYV9PKWkLJzo8fBkV5gDHjUWJy1JDft6dKXLD8Cq3EhGdGN1LdmqvwasY1X2vCH8jawBANMNHxA6Kh1qPiisjmc",
  "key33": "5ReZoRuAHo1nDhFDgLutiyF2b9Hjwi5XogHo9fBct6nVPKVksgRQ5eQNqTKB6qnJNqjnCFNkWmHX4mWmG3dkua3E",
  "key34": "4RdBMXwF2ZE8tXt7QFv4Vr781xrskXmuamxL86iWmmpAsx4TH76PHdRNmcChHiApULZc8rANGu3VM7eZqBAcgCNj",
  "key35": "4Ufnxz72w8kKzKyfD7iC8VWvSBXrY1UZWich15gvdi8GAvAUUizZnBuJK77ZXVH5eE2zxbSERvnNxa6My5LyT2eu"
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
