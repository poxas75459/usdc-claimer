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
    "4UEAqYgqtRPVd518bmaDkKSocFoJNFiKpgwd7kMWivdUVKKJ1ovFT8akH7t9hqMcjKbyYSvK7eywssHMjnp8mdy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7sWNiZnwPNarFKHaSTwj45w4jjk1Pz8DZLRd4Mm5Ak7ZgYqsuCkjLAvovoY5t2vNd7UAHVQaeYUXzQW7d7jkyVX",
  "key1": "457uYzxQXFNZMfQQ2GMXrQWknPYhV6SZ7txa4hp8PFpNJMqDaZ6Wa5HD2VNbxy8stxGp4vMks1zb65yvhE595Tqu",
  "key2": "2sNx3gUAmMFBiycnZYYNmhMuqRmxXCcffKR4JU46GbuLSakTg2XtUK5p96LU21ZRnnAUqnLej1rgC1AXA6kTeRj",
  "key3": "4dYXdWkm4cLmHzhmMzrwnNXsu9g9fMzzUnU4zHPDckL1xxkfomxo3Fx4QJpTDBJHvttRDVvbkdJLnZCeu3jftDph",
  "key4": "9rHPguFnRhenE6seUSQkHWhEa2Xn2KR1A1vxPaFGfYaA77GHb33Y5a7b7bHqduNc2oL348JYnzxdULcA2U7ftrW",
  "key5": "4URX3NX479kqhVCFHRMf8fkbBTcZ1jR88sjocs8TVhrJLiFo6G7oK7YZHayCCCKnptfn48crp256YaxsFyiAaCiS",
  "key6": "5uqkQUkHVyFQXtLLNW5rS5XqVcAfD41MNQ1rF8BoUjJYYHsxhmr1uEVTWb8D3hLXco2aCF42N2RXVLAZf9ycHXRr",
  "key7": "5rQx5EpuzUKfxdCHLXyoJmk5PGWP1UdcUj6ebRMYV5shJpUKbpNUDYG8DNMejGXpHfEe6xXs6d4DjWpcYh6snvFR",
  "key8": "3ZrKmEAYdfHz1BPfKvftbkHhgpFPVc9fd7B1MLBLj4CVTvcz3vzb4y9BzJtEXtvWwhgofzdhgR3pPucGHQKMADdM",
  "key9": "5UAbkZRoRfNETtYEFaCJ69pGfzxB3wCSay78z1sKEuaVxqkdgRzvfKfPz4Fb9aRixCtEWiK4aGtySrDthDyLbbon",
  "key10": "3TGjwcMGf8K1xLDmJamYYci5PsJPzMMmNvjHPZFbF9xRx3Vk1MXphaCpJGf5c71qRUZdSdj5cjuXViCeE2RWmWZj",
  "key11": "pi9uMthjizMScdb36wpNGzBfFiGdSW62fUy1h2r2i7fAx97VjQSFo5LcMg9SaKBsfiNuzdzKAFBc8SyBWD9hXdo",
  "key12": "4FuVQYUWo3SwN55PrAVTtPkUn98BNRf8u7CCut7aWFoHmFNwRwmSi2DXLrmneCY8mGTAXiuDvFv7yM7HdnJvAv5E",
  "key13": "5PuodKcsZeUqKtsvDFtWbZxCbCcUVUzte2zVQuLdsghiBYpid6RDgECNUnsU7sMYL7Wyd47oR5wqNk8ref8pawcY",
  "key14": "VvsXGDbBjhd1iBYRz45Ya1SojsHPDvzAhC6rXq3X5H1JC5h67S2au2XqqUH49YWE13omtm36X48GnsMvTRdbT7m",
  "key15": "39YTYuBcMN8MLCWoyaneM4X1DLa1y46652Sdsq1XFKTbdAgFyv5TPjZmfZ5GwVcFADs8oepMkfHH4AdXjTVutbWi",
  "key16": "3DbWAthdkRDnNjz4h2SUdgG4NKh7hE1VTNdFd2dA9RMbdEwcYXhk3RXBW6tKfvjG6odYtjCHyrPaaH4eW9aigCW2",
  "key17": "gbintPNE26T9c9tnxm9jDPDu5xyjeTxNcsitmzuiNF1GsmgFnUvYATNYYBREgci8oWy2A5qrTPuYkHAytRjgZGr",
  "key18": "418GMwaGYE3p7UMYJnAnUJJAcVXbHXQhRrttktFPHpXzrYr4vEUme4RYAXufGqC6ryJmk8q9KD2MUrJqbKQNhqE6",
  "key19": "JH1VRUpfmtwbeiQ56thHmbbABSSgJyRTYSCRgoHwXVtXgDLDuScBBmp9eQCqRnoMiuV6rp1rHDqb5Xp3K5ZsuJv",
  "key20": "5pSXasqJVbN7DcCxfMYsEdeHTYZQbt1UKxzEWxsBDpimSh43xGmtZtsugRAUgotuzJvFLiGhGda1csMvH4YHNGy8",
  "key21": "5rYXv1TaMUiwRPF6taWTu9y6SXFtP8BH4pCbaFNqhYDAtStb3AEAJfgBPfbqipRDb9bKDkHpPXnJWgA8616p2Co6",
  "key22": "3X1v71FGn4KEjaq98pmyL4pavLSduZwseKV1cDqeXCvS8JHWi1sae8Fh3yXuAUPJP3QH2djB4gBtRkQ6QSNr5NEC",
  "key23": "2UXMJF3VchJ9BkzUSQP8s21rh7Y44b26teZBgNoXMVAdaxxB4eTj6cFkemBWBSQPckLS2bDBmxjbsi8nZK9qRehc",
  "key24": "4VZHmmFTEGq7kiy6p5u6FhjMA6usV8VNKNPUgnX7AmfgEx5rt4Lw8nmNgWeS1UgdvARZEk2hva5vPxJLRdvYFvbc",
  "key25": "4PjTUixGWeDLGQLPhUWt8wiXm9VYaqncRFJrDXh9axMpXnM1WAX7zN5scusavofaT7jDcRg2J3JfwuGdiSdsevpn",
  "key26": "5wXtpPA159hZqqWpkxHTrGobkRPAufi5kU6Z6S4xXL336RAJp8sEyMfGuX4HmM9Fpn1yw65qk3rhmgZddQj6tCLm",
  "key27": "3Th1yXZgFqB8DKsra8AaMsPXNX5H8UR23xcg1E1est9dihic9vcvMxsGmp1qisQ8QDHkq9eAt52WKb5TsUhgu5bA",
  "key28": "5cA1W8C3eNku1cDdaFee1xfJm5KuJ5EdohkXHjBJ7S7Grm2yTcEHvkEMg9hhGHXuKe9sEJBp48jshjDrhkPNUe3w",
  "key29": "5sNHiTJ14A8Ze65uHpXT7yBNQfX1r7K1YgD9vvbvcJqP4svsJuLEVGpDVXvoLe5V6LnXjJHRTy2wazcGbzryygec",
  "key30": "4DtTHQLDwjHfB8iJi7JF3sKP2JoWr3CSH6vJ9boLu1Y12bcT1HJCY6W2Mo3i1u2u3zJncrJAefkUWvjJqAPUXYxa",
  "key31": "3yTf1bL5BD6tBNchBYkdG9koqKHZbZwgspUtgNWCGgWrmktb4dfTTmh112NWbxVFMJnyidsBWJzJTMpkgtRLJzVj",
  "key32": "5ctLZwqn78CBt1oX2pfNHoNTxUzJuRy4ntaxN5cXJsDhuLgKCwzeS6AHPS8mooQJfJo2jkai46GFFScR8GJ9iZB5",
  "key33": "3jz8PLjTptAsSpbPstPYmKAsF67VFaeDjWmMBncSJi1usyD5vhDoExYJgMS3e3drLpwRSHssW2VnJyAMxdKFvtx9",
  "key34": "HwnRTPzLM8opB5zomDFpG45WvSBPLpB84vdjDu8h814WTxXVCDMeCQqv7we8b97JVCqfXGwbUsXgyK18NEjqait",
  "key35": "39r7ra4wPENYaBpGiXy5iEwK8j3CsDfKeC1w6nBcGGvaUZ4t5rZNDtBqZCH8yZUxfod2ikCF5tdgC2kYjFmYU8hG",
  "key36": "2wdLDRFosprTPBTA3xPBZcWG1DEv8kjDUsBHfkPBsho1anfoorzqBJAJ5JEZDr5bcyFA4nDeShbRdQHA4UFf3YhJ",
  "key37": "5YE7CLfLHyiTTKmKpZ945NQmErqvJJgnMCVnshuotVESxfPaKjax7suAYDMFVSiW6vbuqxyNyUuTPQ7gbgGJTe7g",
  "key38": "3UDQsKGFAoLdursqkDzQErRXaq24o6iGqfafiZqDH25NZkjzFPnNAUVSo8mHP6uddbTPnmPgfR2KVrEBzMKg7Jqz",
  "key39": "5osqzVKePuY6HauJmKVS1YjrEDez2fNmasoc35xniH5VZShdwjnBAPPVCCykrVX7sQ3HZKnBbqFN4zQ2C1uEyMMt",
  "key40": "2dqTHRa8wmtMA6CzoSNyAcrwAUDxWuWz12V6d3SJD2HbLsoWtRkdpHeMbaGSQNNHPEFQTEGuT4mzWj9ifq2QrjWs",
  "key41": "5kb2JFuVbZoberAU13VdPVxjZ6VBzDVSZVHQmJtGnsg6JVGBQ2TNYwGqs19DK3veVoaeietdzh7Vy3WRkocCsUJe",
  "key42": "4DJLcL8R4qaVJk1e1nptCet6CpHApfU9sSyDKz7QJfuJrbPMXhEkE1nsmgyTDciHDWcnrtaTD5guDQPJw7va7ihW",
  "key43": "3vDMVe6GwBaKWSz7mzAr7QK93WBXydw3qxGHoeMnsFW19wnUMGDyQmgC11RaDTJSFJHCj6yspgeFjU8s7RjPrLhv",
  "key44": "uXihDiuCVF2um8FRDPYaXfDJpcVHYur6KPYRwqtnpaayFecz3YbLnYZavrHNuGBTaVwoVXdVFKGpgVPZGDY1zer",
  "key45": "2KWbPmgD55juw5kS5gBxs6uHbYRSLerSub1XRWyVCSG3hQQGrAdZteRbB6cnB2zPwnrv1BxZ6aUXZXcJDxoxW9U1",
  "key46": "5VY3LoNsiJkWmz4Ho8NydGioLE4JR3HitzUJxDt6qBaXuojqNBisqJPu4rVAombzR4Rju649ppc7rj3rNVrax7TH",
  "key47": "5EYX32xddZhJ8c7rCLv7BFCDVTuLtLrssCtuzAA1fLoM8sfg9hvCPf8fM8YFAFx2Tni1ALSJhLGABKFR1UPe1FGm"
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
