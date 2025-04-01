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
    "2g7eJcEXmmqeJhmxRQW5bbZucTockTu4mvrotEn4MqRazkP92ehk3pm8kj2y3wNc8XsQNKB3Pn4BphBZ2gKvQdHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xh6jSuVw9WHmMxeKC3Ls5eD4GajpNs7odyhKSf3XyLwRKYmzafzXtnXN6ERmxFa49LYzs4ad6wFVqFxxLCobUKX",
  "key1": "4K78ZQxuXV5wJT9bzWLd43GBnnk4LNsdb4iT7P31z7N5moGiLU8QSSGT3zJjKD9Ky11uNkSLrtf6T1VFhdydGVe1",
  "key2": "512XR9RVe9qkovUnprUVg1SEMCSE3pSvNQxw5h1RRJ1adi5EdLqv1PtBjcaZe4GyK3hP3e7BRqDH6tJ1Qbhep7eW",
  "key3": "52dTuMMTUXVASbDanwvconJ9ghwo9Mg9g533z3EDvaFqHYYoMmvSZ3KLCDoRN48GZSmaopiVGXBS7W2bgZ4iU7rP",
  "key4": "2pKKFRx39zx8bQBwga9zupf8kWeBcqN7PKsVtm3CH8o3199AELMNKFqewtJZ7dWheCvvcBU39s8waLBZ27UnYfXN",
  "key5": "3XaaHFvo8JHNCyBeJQsWvrQyDVppb3DDDm2yVbfedT93jo1movv3Kf9k45QUVSa3M6K9qrh6rpk1WAXh2RykfUZZ",
  "key6": "218ytewKGanAMZZRrXr1R3b8voKQuDKoFrXyKSvk7dz2MJZ4ACD6yU5hbG4q9yCX18JqfcVegUT7XYk8wnPFkY3w",
  "key7": "2mj8nq5iYzYZ5rN2XAiKYZbFT4aFNbxQb6dreJ3nWfcH3iQyM2R8BKn95iNJB597Fuq8HhojmrRvJtjWoowVGt4P",
  "key8": "5iyuFRfVcSHajKuHPW5pVHcmiBBassPyBuY1bTGPmgVouQ6CDzd7xfmxNCxsrUMMFWWCzeAjZoKNwygp752R4cRm",
  "key9": "dn5MVku378UDA4h4Af1g5JnsScF9SMLSKrXQjvZ2Rd9GdN9uAmPajazJ4zShvRQqggUVax94Vfha7kGRWQWXsHM",
  "key10": "3GHtXGbn3ini7WHP3YWWM85j2PL1tJaAdzoPtp3qFKRYS2y8kd1H7qgtPm4D32HLYRM8gGqTNJq5TxDKkE8iT3kA",
  "key11": "5TYVUjKxdM9LLKettZkk5H57nGBnAp2Qs1NrRSYbQHtTYydjgteqTtPoYZEjL3FPfaPFRcYLT9MmLqJ2fuSfEcWz",
  "key12": "4oeuQriPJ9kcNhRZRhHGDggKUysjF322oe7ELrjbcjtC87FoZphoi9hH2t16xhBY3YDEGMoyZgzVw77eifCBogzz",
  "key13": "4LMoG97j3pJmRj9pikfi1qDDjHcrSgoS8mmpyTKTSWbDsXQLaPNLrkSCqzZm5nbC4dcp5EUDHmBsiTVvkAEkqdi3",
  "key14": "5mkgCZbc6rc4PKTWRtpewQQoh7qcF6jmz9vELVZ8TNaT9b7t24aTB7mKehMtT7DMmrcAscCUZYx4pvLnTpLR3tSx",
  "key15": "63rny46PMXnHDhWM8cYHGySufUmx4SBjDEnZEEbzfHdFzhjsVn1BRXL9LA5ULxtJfzGMc9sz7BbRHH5aFWXTq97V",
  "key16": "3Hf6eC9NUPQJGzsdC2o7dydo2efUcjjZjyKxffubiR2zU2jXAfKiEGxVzBrpd6ASAAnPcq8Bvdx2mSuey9fMJXMt",
  "key17": "rvYubESqfsnVa3twUbZ8QKnEwKZSmQR6AB4mmMAywWepaYQLBj873cD5w24sy1KLjWPA2y68eFihXpdQEfDBDP1",
  "key18": "2x3d4rYeiwcR15QhdQJXijpdP6KYfQHd7oewvV3Mn5ZEAyu2A9E2t5LX8Mq4HpZa9aJqqrJAxc7AC2aSgfo3xVTH",
  "key19": "WzPWw8eAUQxhTsy2V6U3dnUWJaHwWQsy4Ej9t4QCZBB2XTcBSSxuNqxXaYMyY8fihYtNYeyby1ibYcQ6LorJ4YY",
  "key20": "5anubsLbDz7CwhP8axDwqpgejQ8j7JJukySodZzV1PHh7EjJeCq56eyz6iC3cZ9k2P1p3YHSjvpcoWFhdmmCLCzk",
  "key21": "whZMBEEZdvZHKYX792hFthUfGQ1wcLrzDiK9ngy9CdBkJGY2FUi6xj1wD3MyjD3KVZN2iUFu518SGGRFk4nXAvV",
  "key22": "4MbHedsQgFcz6QfErZ97P8yAJQ8suEZJUiyBorTes2NMxEjAWDZqFpdBcAi9zCCJztg1gqguNJe4vZRbpS4JD8TM",
  "key23": "2xsxaX2scRCoFJ2Xx8a3HJvPdCzTfxZG1JiuRfmcdUyLEfHhqoRa8XLwvu646YmNCtEjDBmg1S2YYZmtK4TJmRWu",
  "key24": "nM35YohWLB5e86LSCbM4AZHBrGCunK5eprsyFsX4ZZ2wCMFPnDu36jFQwgq1gtYqwtxQQXZbVZqYQHq2i12eQUB",
  "key25": "4ELUV63ATH7eXA455CzeXM49guXD7qDS8CWw8zoCtSuBTMCUq9ascwxGRdAXjX2SW75ZphJPChu8BF4a7bg6oFtw",
  "key26": "2HXqngLEJAD63FUhGmLEXt7o4ePDtAKPT49YKBD7eETLKdfUR8s2BvjaJwKMKo2Fbm5vLcgSm7DA68mtAPWdPp5j",
  "key27": "3wJM8Eyfe61rLxBVmqLunXHKVNZdQyyKNssMyTgfhxB4LgWWCFq22yD9hvZBBsTNpkQDwfkuf5DfTZsPfPSaxU8W",
  "key28": "5wbp7ijgLudr1M8x8e1s1tmMExgDgAXh1o6gDyg2itJJWdr9V8ky51eRRGj25GV9vdt6ZyTTQ6FNxhVFDkRNkNvv",
  "key29": "2MohjACDt69TWJWuobBizFKvWM38Zv1J6dK5WnGMfXdAVQjunY4MMGWLZFgYy1vrSo1q2oGsUvhYXZRKhE3Dde4Q",
  "key30": "2vaTh2cKAcx4zjD1zhMwUUS3hZJpp1k6zy2i6Qo5zL8w2d6y9h8nCTceUBYTq7fwPWJ6tvBbpLDxEasXTA6wNos4",
  "key31": "4HLp5KirsjT8AtuxcwX7qah5uqdePSXfKa8rBnfwHuoxd4Ukb4hjyvHHrdXprwn2vdjse4L6QaxnV8A4Zmi65HNZ",
  "key32": "2aE4oiJ8wgLLR2yZLvGsaHcnyUewAg61Krovcx7G6PzRTJoeK5PEmP9NzoaxY2fEwQwfT5deRLaXRQx18vs81HGA",
  "key33": "61hVfVgXRpUx9mfstiwnGa6rfwgBrJzXT31ao8YBAfaX1B8rAnKeyswFAyLVvKumkyQALn98g4Pdk6JBkkVHz5br",
  "key34": "44r2PJKR4wrajetCPuXN6zs527okUUYXVVCwytM41eoeYm7DQqdJaG9e3Q4bJPjoAqTGDEdzPxG3FUtbETQNGpkM",
  "key35": "zVYQySyXbfQJ4F9RrFGFdyPakccwJbgDZSkWxzRKf6YSVyetKxRC4GYMaDKpFH56oPvac3mAwDxbQ6j4RNiRicC",
  "key36": "3LJV1Mto7fCJVfcVpj5mTC33RmccCMPchSr8yM6q328XAMA6S6gUjKJPqHqoR2YzsoaXU3RtM715rxwmnWG9xkBW",
  "key37": "b71DYLSyQcAX6Arqi1TdrNPrhxxTQ8Acgz8hESqdCCGvY7LtD6xGXfNzdTRbzgw2d1ca4nvTxgfBZTduUtxhNGP",
  "key38": "3c5NTLvpSnHQWBPiQQH36v489UtUJ292GPrn1QudmzQLxqxhSHXPyPJMYW484M1hnr4aBpPGABLwcqEqHREqySNL",
  "key39": "3sony77T1Y1ivyiDgFPk5u8QikMz23zar9kMoZauaTBWFTwKJBJxsFwmeBoFmxR3RaFKKoonwEeGnV2k34VtRqtN",
  "key40": "3UPUUGQKH62pPQpzqGteuhyVirVHbLvDop2Y7gwrRzHr8t15VT3PQwEao2NNkz7QodZvNYz2vaGze5p1YArZK4fy",
  "key41": "5kEiMbEEH5fHJ8pr3QXorYjpffSZYLBEvtctrApTmWH9qJGN5mH1f16FEJAsfCLkARyrxyPeHZNaxBGHN2FL1AqN",
  "key42": "5asXhRskEZtgf3bzPJmoDNu1A2gUASqrrT8rLwUJg9GHA2m5txJh5tYFhLuezqdCyUwdQDdWuh8jL2uNTrEYvJu8",
  "key43": "3124BjbQEtaxgRSUMnm9FMAT3wCxWAcQiPqK8bTXbQkg7KWGcKxiRvikVcbm1uRopTXPGCUwZ2Tp982M4bye3M1B",
  "key44": "3VuoDKZQPuwayDNyeve6CztvqjeoVK4xFHccQvRQePgpyN15aRHYPZQxn1eNfq2e3ur8TYnSegBVxvzFFrU9wUiU",
  "key45": "5WLeoZzeZJnUgvShRt6Txdj34ivMkoYvobPFPoCqAQ1B3kSqLhbdW71Hwj4DvTTyoUvFYaBqjQW9XfwGh8JtYdZ7",
  "key46": "3iZDXYScxUnDxzRXV4jwn377GndmkzSYv7p9Ev6kz1ZhoqrdGdTXmzHyfcHGr1TfPFdmetQKFHpxUSbm2rrYkD5Y"
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
