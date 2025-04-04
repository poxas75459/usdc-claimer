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
    "3GihwBN1Y73VfWkVKYXg8zHmr2SDGze81XGb7bXEMZfh5swQVb59EyTGkqYsy9mZiTjnzG3iMgoBFqMi8hQ8TTcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GtJ6Lrs1tXBtyFZ62crHtFCL8o7kCMC1oomqQm9W7jvD8vawxTJ5fhzbYRnQnoisWbfkaKsRBFdSzQUdV73oTQu",
  "key1": "3feFPu1a9W2xbakJQ7adcRbe8TnoHnoJkmq5ANYgwuHQdkN9UkQ8sUmQZrNxc6qYqr6WwgrivwusqzjmVZywkQdS",
  "key2": "2XQUHZHBR2pEqhnmYEGKUey6Sk4gwxDxvPxwUkx9t8AWT1fdXVSwwPTVD6HmSDGvDfr7JicWR41VwqB6g28Ritdi",
  "key3": "3wYQJUZkGC5PmHkeVqPgnCN8HGz6Ma3rC8YuKD6SbhgBfyjGJRN28FDYDWvrgmWQSe96izWHCXKcQg1jbZud89Ea",
  "key4": "4gNhYLKS2ik1cygJW57sR2DnEDitTbjjNSc32H1Hf48JT5DYCAVGf4fhEPYx2Nj73kGN5f3hJ3j785omazSJ1QL1",
  "key5": "5ninuZUZQA5dXJYZK4HEySGGSWMyFCnSX8WPPbCjg1U7EuNFvXszPwRu1SjUze2U3FkeZ7t3vd5M6hHY2vNuJ2Sf",
  "key6": "5dRGAXGtNpiueXYHAmM3pPjSwkyBXHksMsvCgJYBe1cqMEuoVsS83EHt9ehqLwZ1EC7WeAgY1PBvmpi6cMB7Zikw",
  "key7": "4MPv71RVDF3CDsiwvn1jc3Tj5XGb9j7kf4n1wh3BgxU5KdHb8drvtQdyHoPTpM7JzzANBRTiezHyMRumFj5MRWr3",
  "key8": "4Vh2EMnXg2tCjovN6ffJgqWvYw3iV5fetfjChACvq9e1WesySMAKjtB7D1s7244kUDQokUmcma2DTpbSn6efVR1d",
  "key9": "U1f3xAZqn19ujhpxPmiRGC3cApeoE9mvCMFuaxFEL95twvSiVuJStNUXMi8F3ugFQftfgceuLo4RVub1YFmVQMn",
  "key10": "jMmUjL7fGnVpH4wxA28CFgtGtAHkgKZUrEfyZB2AsDrxiLeaQnDxqCp85SsGNp5RfJN1PBJE7KJ6EpctdEzo6bc",
  "key11": "4swTXzxv3rsCxggiZ4nQib3f2bQBGVCLTT4XnidMFcqGz3a3PEgDgn34kSbLdCrR4UW8AHs1pWki8A4bnQ1rKzgR",
  "key12": "ahgxTny3QxKRAmpEJFeTk6Lx18wnLiHdPr6x4Fj3Rp7bwz77gq6zn6XpFeMgiyV9BD56VaDKrmr4Ng8UxF6ZTPr",
  "key13": "2BSoebcBxM6Yw6sAh5NuRRnCdhfgrDgqa1Y2PUsMFh5bcbwcaZe3Azf6bjZ8wZ4ziwToyLCpWrxZ1eDWyqnGv1Je",
  "key14": "45Q5Mpgn8SumW1AbiWSqbQa7kDccTbh5eERdh6KDz1HmKX1e49dW5npYCaZ9r5yC28bbJCEbLN5ohc9rP7yPcJAX",
  "key15": "3Sonb6mM1hthNtmKWWvGH9GwtELsnpTL3mNHBnLFBe27tHuipUDxJQ2NWg21o4WeXBUymq7uB3Ct969P93DLYYjv",
  "key16": "5feeFV5E7XhZkmFU52jiQk4v3dhAsLY7ZAuUQ8EcbGaqAf4Z8kPV8RTVF5ZcdZr2rqUKa1Tng2DcESZqkyEcBUUS",
  "key17": "4fptYkqfzgckV6isyU4ipx8aymq2vqXdubecjnFJgBBhdXzLnC8QsMSvoT1pM69MC4BGscvtH2pwdW2f87aJixXT",
  "key18": "4UJqZejK18vsqSzQTBix2yFrp4NqefbDNGk4R6Y3ZLxYraJwAEzxZeU1Heo6APpxaHeGxbdNzhA54ACkkUF59RiR",
  "key19": "2vbe1zwwKTeWkocZwEsW3pMUSFpXJvJrR4fxyUNAAiSvRFsvJbFWwcCt8qMNZ2HmDUAYeGPXnqxb89CZkh1ZJ945",
  "key20": "5Pz7dHnNkZoqCWgT8jvP8NKtvUxkEdEj4aUaCAgbTFXaLJM4ivKyFRymipSi8dBqWud6irBYpBFXkyDQexhbL5mB",
  "key21": "2gP2kRFuP7tjb4cVDk5YeFN18nKynqyhw7NdoNxkpsN3RBBehgDe9cJLpJRrUGPR8aFga1mwmNSojuHAFYJPMMZb",
  "key22": "5kLyN1Wx7nUpctboiqqoBAUx79WLueJL1R8r7yKWoWLYpoiTpuipF5yBAa8VMEm4PKxAa9gMkEzp2dTZmdFs5UJY",
  "key23": "55Z4ttwUYx1Uz2ropUnWKQjAYC1ydwtyE5SJcnSc54pAcsWAbKbsPVcBMcGL9Zzu8CTFBvUdfcB49i5URzH3hZy6",
  "key24": "NVmw4KCmF4fAMqtNGJbRMeHwd76SDhfK4hwpRrnjJo5jcTb4XNeM7rHcNAqZq9B5PNKXXcAUo2LtQjN3xFj4utg",
  "key25": "5qKsFivESRR7tCzpTkMCJBsbvBye8X9PVwmR8yrmNzL9ceETsg9UUrD8CgY5zJQ5UUubVEMBWLbsSdYkdEnxo65o",
  "key26": "VrZWXEcQxDvMXGfoif5crBCarJWEFRQ3maWCGPXoRwggCaMyuKj3HFqrmaJVFrJTPk4taHJKvQw7RbsMcnTVCeU",
  "key27": "2L9izAPHzehiv8DhK5AjmwSFG6feac4TXbf8Yct6nHkcCqPHpdbcL6mPx1j8uvNCfsMsyGqHTSmgBmvwkhByYciG",
  "key28": "2TNJVyUzRYPyiPKiiGSKD4csLzC4VbDzZSdKfaTZCXCcgnqgYgBQ5eL1kt3bzduMgkLXixoSCSXdzRpRjKuJrJo6",
  "key29": "2FLN8WpVCajy1ddpBejv3JsEZpsjGNspxdvftmnfREwAguY1qYYKvbyDGCjnywNxc2V3fDtUYqrpQh9Fsy3iNV1e",
  "key30": "2SDDB9pEW39e17ug7z8dQFfxx8fVohs5bdiJBBk9FRaibiFAVQzwFyywf9bTvCAkKo77ZzzdUfg4WJYU4DrpaQbi",
  "key31": "48XyZPL3FKWv8vjPyTbFk4EZc6F8R98Xvn5KJDZ6irfswznj2X1EWtfzF6HQA8BzcHCR6YJyighG2bnxwLcbqt6q",
  "key32": "386FJWTaSqy6BcVU4bRGxPugvw8TruF4NQX95rVqN8GaA8GPUZnFmW4NYWWMksXzuH1dxjS3bhsLYDQRSzR3E3hN",
  "key33": "2vffCzDqtP17EXHgWq7BCcbXf7PTfYLPaf9r9onDHhRG1aQ8nR2JYhDkRqfDQKteeMZ4Hvbqkj9aN4M3ZeuAhtsn",
  "key34": "61xjVokmTNY8GxjkT97WKk19bVQNmg58n8Uxh4UzhpeMTEZdjeUcNzNFHgmR8u9ff8Qb6F57X28WdBz3Vmdk7ehT",
  "key35": "4xf7D3T7uPiANhLdeiePHrThdrxGDahQKiPof5YpmDoXDXP39UmmBpJYCyvStNHMzXb6QxL6yiFxAYTdNv79dN7q",
  "key36": "4zQrWTQFUGdCh7dXjMr9ToWi1jdGfPqTqh2e8v3W3XMXDuaAiupMfNhZD6TJJzBsNGyZ2Z4DFMiXXDggj4sRG6ei",
  "key37": "4h8SGJVGzpHAZ3HonVm5BoB4TGKJ8WCmWcLL9n9bARiWRV7daWTJ7mST8hDP4tRt5uFfEp1gJecxHUM5Zndo6Bar",
  "key38": "233aorjt8wgKtDeKW1huYasAGpFnobg5miNVRUP3znGF5qUwMzJK6Tu9CKBKuon6SawoAxaoDx1AqPAV8vDsKScN",
  "key39": "bZvCdqxnfyRU6PdjtdvQRWccQts7uAbs1rKRFL2ePG7xVY1v5twfdT6kdTbCUgTfjWmUCAxWyafdvcv8EdFpRd6",
  "key40": "2jGjeXzMbiiPiVNZcwaLRQ7zG3UGLWyQNT76wZM8ZENDG9bg4hewH7sXxd1TThSMcQv16uFYJNBfTgt45Xus9hfV",
  "key41": "5sHphSTqFMq84FfuA5LPHTvAFL8hrqHqJtDJSNjZ5ESnH1io4NXshjJAPFJeVxDs84ndqGWZctDabvuzr9jYkaFa",
  "key42": "39VwSvx89uA6DiYkh9jMQ9oFn6xfFuQfZvKWuPNMdQVrkqBYk4MefjyX2tG6u57dTkBZ1A6M9nh6EPhX5ftWzH1H",
  "key43": "24yFf4EiLq9vz2uRRzBsHD6BbiBu2ejxwvzB17vWg1H3ouKtgPt9itwJwnSuHsVBjKLqUt2hEtGwFmPqJPTPgoo8",
  "key44": "cXcEXCyFBToZwvYJ7ByVVjjGgtTgHCCj22w5jaiBfEbKtNj9mLwofELwDh6i8r5Arr7RTKi9dtppRma8y5mG5xw",
  "key45": "4onhU4w444CXVvAM2jwFrgvtD6staxwQb7nitfy79EG3JAm9xEURu76PuQJDwg3QFLt1o5yhFJNsPFabkRyK4hss",
  "key46": "2DyN4RXaU61FC95UEkDHXhvHvVSwYbyKqWLFARAGKpxaCyuHrgqErQ7AXemLWDTDqpMfvk2EmX1pUDjGGxrA1Lpb",
  "key47": "4fMhJp28QsSS8Yk7Sji8DV7PTbjwY5AMYzKB178dv4Aup2KmKNfCJUB8aS1YLvdtidwTqeuT9r4tAxJqR9En7UY",
  "key48": "4N4dsJE1AUBipW4M7vpHeQzaxdAgUSmJkLKt4YgojucFALkgxGYEsXoNYM4MM4MYPEdVKnF95aToaphspadxf6KD"
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
