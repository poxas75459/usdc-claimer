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
    "3N499aDRHF1TViFNomSUtV2eCbqCezBF3XNbeSuyYhP2CqhHv5E7Nixndwx7VdNDo7w2pd4HpEw6GC3sSNLc5KLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JrmXFSmCEvnnFc9ZVDzo81da4zhJyV9Mrhac1F7m55QfZz2nsgfbcgBQtgMk5s5akDMkA5Rtj2aaMKtqsUKbxEJ",
  "key1": "2aR95yizZtD3Yka62MjPtMgdZRszhtiudN5oRxs3BP9b6RuEFLPLHhRwC9PqPukgCmBEQFToK9aChqVAD6aHEUXq",
  "key2": "5G9Kh3MzohHThvK4DTkCRocMekb97gyBKeu2zHzmxNX1M2iCtdPzN3EGsFmc9pfAbk3imsF7DFfzu5Lbf81ZfNuu",
  "key3": "AvmY1yU8ZqE471CGUJp9aLomEZWEmVn2W1jo2HQQ9B1SEoE4oriEGgnTofEHTHt7Am8tQYYFx4CRsvezrQ38ru5",
  "key4": "2Z4XxhVLRpcbDb7yLaDhyQo4xZerfBc2tLmvUCArfxgdpp4z89gEJ27vtXApwRpWTzPWpPk1dSErSNS2yQydjBF8",
  "key5": "pu1qE49j7RV1YmkkpaLS2YqeTnSGJSqEe5ENx62SHQc9L5uaJ8KuFZJG1yrtcC5WFyGLPE2ceEmRCzMDy3m1eHd",
  "key6": "3bajMy7kKZ6VELdtENGAQAjdreWePgpFwrdgVVLDkmppmpe7JHQKzMEL6mMqVcoRFW3DT3pFtD28NnzH64iJw8fF",
  "key7": "2CGKgZPSnbAFF6AA9bHxoyFrspSzEiH72rYiW5bMGjDA44pgqDRuRz95aaWJx2YFLsrLjHTBoesMTV81sJo8WhBq",
  "key8": "67kDcFkv9MUVtfYkcimBiSmq9kP4sstb8veC2AwTtxKon1jYgnFSD4pZAEhrtYYysNDEUWVVf3gnV7P2DV63ub1Q",
  "key9": "66nsmwVNHHTpj9qJS8gQ1a9NfV5HzWhnyGocHKKkVUBdhmvdCrRLGFt7tm4rgfboagAFXjEfTmGkwKjKjXQpDBPG",
  "key10": "qRkpL3Yq9rVgQ77QT2BYF8k9R6X19gD6wQBRiYY6nHJMQB6fTZ1bT1dcJUgnpNZHWHoF5BX77D7YJbUzJszCrK3",
  "key11": "4TG5B9mMWC8v5ZcCCoJVCxPo86H65bbWDWTFGDQvCBspbe8bbthRUUmhdh3WpJkUnA4Rj9CoAai1rYNJGWnpNJ44",
  "key12": "Jr9c8DNvLsfvtvuG4eXhE4FbF15423wEyC24WStJG4rUFtnuSBX92jvB3NVGjnFeBZEiBL7sb3SLm1B4vgitBJF",
  "key13": "5sNkcE2uB2eB8tg56yKkPj9v23sdsU3xEgwnx94r74TE29jXq4veffZPdG7rAvDTd2wnz6BAutqo14FSdxi6xXq2",
  "key14": "27TPWfe3xj2ZxXNrmQJSnT4jJNYHTGUSwg4m7JEKgM2fBDqxRD47eHJotUDvcv5ra6fgYjhaVy15mkHRKJ1xwSdw",
  "key15": "5ryGP81yMW4BLo7WMTWGjC2CsVJH2wW2dd6TP7JGJybnDySArHXpRw119i7CycNp6RDCWMuJkfJJWTJTpeeFXm1N",
  "key16": "5zwsP3Rv1nDcPAUyZ2zbwwtKxXGoeYmUGggu7eadsRvftuiaFfuDQc6yifCk4yLuLZmpR7QpTUyzmznNyhz6ZYjh",
  "key17": "5oimmo5FMKh93HE8Mrp5nsAXtnzABzJmfGPhxUmqgYM9Vck98wGqKa7hrmb1ZtiX6w2xbVdEUNKmS1XqZcbaHJtA",
  "key18": "2qfymfUj9wmeAbZYvJr4dcTcqLniQAHeudsSzJJ9cGTa5nDm369kDuQv85HeqiAuXDeUzS1xGinfcwUocPSaiSLa",
  "key19": "HoySafvPN3cXazfa2q7GcxPjBDyLvi742oGNKsKx3AoXwffurZszETbdykNdErmY6zTWNfJZJePwNvHQ5CXMLLT",
  "key20": "3z3L4acmrNJZgnYV4WrBdVL1K8RbefTgPm4Lo1SXECF5XKb76Bg13cVYC9JWrUqELKk2BduQEngs8ktFbDoxY57w",
  "key21": "zELnv6zdxgZwkjHtYFup1Sya2RRj9kxGf3mGNsPj5DSrqRA5Ei8Zz44y4cPosnV6yxf7xd4mhieFuUbTkaQTVtm",
  "key22": "2VPt9AkUPTAxA1fjtCUjwAEpMVbgJTmYR6hFk7E8w9m31boSyv4KQdBxov1SgnGhowkxKti89RrZzBHvf4owHTcx",
  "key23": "3BoDpA6ue9fZgogxqRuP8j4vWXG2eewVGZYPbaDaUGZDht2Muu356jBM3bkE8XfVzx3r7bn99REJ2v3CYDUx93Sa",
  "key24": "492bc7uR8WEqrjUPQwv6J5x7fBnjzLHbCd4A7yEvG7iG4XJ9Bwz24eU6gKy2Pfg3ro8CFzCYFtF5cgFnk52w7bdN",
  "key25": "rL3aYPtUofmDkARD2U3YJJytjT7eXipnTGARiwABiujZpzK1XSMKXCwaosjz9whHQ19dqVsqMdTMye2rhUJXFtG",
  "key26": "27h2qAJjuZQPoLqxjK6HpEdstPeEj2vtDrSZajs5f8d77uk2dsYioUmrCuQJcVdQBK2sbhUVirDb5ghzQxGnR1BJ",
  "key27": "25MtFyjCMrbygQhNG54oNyuqFYECABwonovSQaNc8fPKZYoDFroKVtq5TevnCLYHbTKTGV4VCn94RcmrFsGTUfX7",
  "key28": "3KngDxC48riQ3AyqVRkJ2zoRcKNL9cBux5KXGRBVyPs9Kg2LzjFdFAjWVguynBqTXuRjebMyHuM4WMg3b1WAEmzs",
  "key29": "41Yt9PnAAeeHc4fLuok3HajXUnUJqDkBqW9ha7epEAq5uz18wm3c3xwY6micMfiw5TtQzs1dhw1wWmfZJiiDM4fo",
  "key30": "36CJwshYgTmGspqX9a4kWafrzrStgSi8VbuGpML2uJNTtVCX9qzwqHrDU47gYuzceUQANT8K7GkBtPR6bHZ5M9Un",
  "key31": "YtPyEQR8dbJengXVaTK5sbVxyFNpoFnaC6Z3aBoV2tH79LWJropBHtuzoJpcAGj3HtA9uL6dLJW6YPg3wtq74yW",
  "key32": "4gtKfBLz2mMJu6PcqK4wh9t2pFPNV5ZjytocisH6Zd5z3HwrGwpn9kA5LMYaCxsB8W3DntusD5oj1D8hyssNTYHG",
  "key33": "5kcUUV5hCrWvDrzFgsx9KpFHbRpeb3yFxqrkCfhiKjx58NvLGHqZeV7tpFx8xGJCqL1ih8HEeuaDpV9mbVeRE2nx",
  "key34": "5xoTqRtG5bEgb5S7xmELoxVHGsGDxWGgXMoGkWnAf1eJfJKJXhbKzSo7EXEJ9Mvp72iCCQVqYF3FxNVbPiYAs9Qg",
  "key35": "37GKiNmV59rR1XrJEnEZokCHr9twh7dzcKm339m4ZDehtS63RoS5Q3vNebbqK5Sxd84SCMxfizSESMQWeAJVsE6P",
  "key36": "5T3wC6FMwFbM8RFyGnCkgdHGafXuEEs7MLVTCV1XoGDbLJwREkqoFh3Ujc72YYZ2Yd7PArPAbR4mrqMwDqX3SgQB",
  "key37": "2ZRYKKU7HYvAD3ha89HgNP5E7v1p7YQQ9oPEZ6d6xgy31jxPBe6tCBjBXWP6WbpTW9nK4HtaoonH7T1hdbpKbvxF",
  "key38": "55Dv6rGcH8fjbUqig2G32jrZipCcnRX7WNKWxqTdgVyDTay4PCgq9verpv62MpqP29wjWyPxYCsib1mVe7mVfgeJ",
  "key39": "246qNdsc7MBNcr73G8xofgRHwsh3CspPTCL8FQcCcyPA9uQmzZ58K1iYmCpMUN1b7Ji93CUyUqKsVcrZmvqi6jeX"
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
