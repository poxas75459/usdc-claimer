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
    "3frF1jV7j312KAb5hJgkxYTw6wo2rvoFsB2aRMw1TtUHA7xL3PaGvC9oCWF3MFvoXAoXv35ytejzmouhn8axc5Rx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JB2dH9aHJBf1JyL2GrWTyHWQ1NKjKxhbR1qc9a2kD8qi7frKUigD5vYkagQ4ws61FXPyw5URmCGfJm7yMPp8Yi7",
  "key1": "4YM9CFtTvbUHJyH2CHDfpT2YMip2Ani7PmgpAXervXXP5mTVnQpGT2a9VR9AWjkN1Un69SzTEQnZKPriF4MdWd6Q",
  "key2": "3Eca7YcqjFecXW4rv3H1DjCP1LiNfbrn9TVNwsZmX3LTXhFFBHirZH3pk8N8nvJPYD8Zb2qRbCXWD9yUyYnSkNaY",
  "key3": "DE8F2cFGNYJEvJW8fC8EFHsQ5g3Bdwg9p3PAPH6QWnMkaQjrBcitqmktjhFRu9quGixBNc9EWgsuBhJB2sWFkXa",
  "key4": "3rmiwXsgtFmeGvatCG2NRLZsnjos6FLTeAtNthBsfHMp7XKXW8gwiTxKhkzRsC4YVFmMvm5Vf1uH1qn8HNGzvjeS",
  "key5": "2NySc1SbpjEt4Qg3hyuuRQUNCEw9tEzDbpoyRNxQ1B8jXt46nXHwozTnU1fhaQPEZbYJziF9fBoHdhLs3Xgegqd5",
  "key6": "2qgFVBJLnQGdExukdA5p6SzfTj15KovBfG4gaVEV8duXU61osYT5fdmwb5ELdCXSPQGZ8rTaRUYZAKpn5J2sB9kC",
  "key7": "23CQmerQQzQmEQt6H1DQmX25nHTDaZ3gMHAjMJ3je3m4GzC4iEiDE9pioCJPtPFtTqWF3LYYhgbGxyvi2NnHgEVg",
  "key8": "9h1PxJ3hjMak9ecY1QwGW9jshkpLaJ95FgP5BCaYzdR8mdU3LnTbqq3dm9U4F9PDjNbo9Yrqig7G6BpE4WX79Fd",
  "key9": "2nTiLWSs3HrsDtQrgLtSd38zKbPx5kHd3h4bzDAe8Ay9dHtaJ3mFQgtANfyysVsD9PVUeBBeCSCSHTgichn9toeq",
  "key10": "49n9yecvYj88cFmKx8RSRvq75ajwoa6CvvA8uYM8g13ieTssgCofr4AShojPAhTpBg9idVCVuHXbyyrp1233obJr",
  "key11": "31V5eU9xDHDVaFXwRWvmo7GC2YjkkqnDDTcaW8jex3Uue69qgcbAqXtaSBguYdsTZsBBPWLRgEPCgj5eTDYycMF5",
  "key12": "64RuScUPEQGqGHcAiEzXVVu12cZPDqV6VGGepMNTbQkujE92uWn19SuFNnweGmAEN4SN5amFBgwwHtpokJTWrvtD",
  "key13": "4eLuyrYh93tRMTqFMFBVSaueK1Hu33wPjHgCcczmF4dzJyopKsfA5XFCrGXy5hAEPW1yNsvT3Zh9dD1WNEiejbaj",
  "key14": "4zYMSVCQ9hgqNEemosq7XDX7sBNNKvLqtbimFFCXWk2RQ2Ptj6usXStHeBncXzBqj4WJf5YyGTB1uywEtqzBWFP6",
  "key15": "5ic4obfHx3H2Wrp4emi2AqX6YcYt92K86R6oP6m5h56EMWKfdhkM7n3ksBmDgoMEdu8z6KG5vXx4HFaNPDaJmxcm",
  "key16": "3FEpuRoqm1F3Jczm7um15qRpRxUXjAmUevvG4rVCiDecn7z8i53LRDZ28mDpoHKBVhcft6swBxg19csUSoLQ2CHH",
  "key17": "3xSdXjENigay1WXQwt37tk9xZgEZsQ6ppAZPieKBGEMWfjVv5DocwETfWFYDtZhZfdNQoH2bhDAyUSPTEvS6xmbW",
  "key18": "4Vegn8YdrPZ4ea4kWHYgAojXk2gKHvdxHn7fX9Rr85w37dbBREGnR89hkq6UX6kvBHPf8VcsGx7BztNHEc82pzB2",
  "key19": "3Kbp8qxALoYULGGg1W1HPDMh1ybzv4TA3bmoMSKpbHmEUih2ErCGZVH9nNSmb2cTLdtrmEE4rivXvr6mLHr99qvg",
  "key20": "5SaYh5WiXTkSRCB3suvL5Q1WvwABWiVk2JDAMcdmo98Byijjiy5NJ1Qpz7iP4tm57BxgcWeD6K7hd1epuPG72GeH",
  "key21": "2zbMshqgd3aNYtECRPJfU9dxcUaKa31aGxWbbv8P64iaAd7vtwe1LpDvFu1sQULCiTtGWUgBQf49eZ4Qw9boVXTt",
  "key22": "JnpUC1atWbfBjD5epPG4EDVyc8GGFeXfw4FtERL5LboNn8f7afjdYvbXFnqiMFfnsyVJ1GW1yzKjZjPAgXS8Nc1",
  "key23": "2cKzP42Fofqa6b7KxydGMDaooBj4hbpuP5EvfoMPVvK7WnhmfV6zKCMqrQmgXVDzsyAY31BCPCRioCzFj8rqYbe6",
  "key24": "3P7L9EUMU8QGFvk59P5H6mFrurp5ZzjU8H57YYpxiNeKx6EY8FnWCfB8sJXuGi3nvFb5PSN8NzsvnLbFzJhWEb5K",
  "key25": "55Fsm5JNH4cMHqvQdq28d3gixTdRKtMwn5zhbxkFyMNdptJHJw5yZ7s7TSHm9s7fv25DSZzbH6Dwv9LLmhjLYVfZ",
  "key26": "3X9RsKwsqJPDC3Er1choQcKpHtd6kHZvqHeR4WVTzePrxtinqGvs3HLnQmJ2Ne5UXPbTaetXtFPkhUSNchZeDzMP",
  "key27": "4SA4QbTqF2sApNQw71aHWvuV5CbgcarUWpGvzt18B33cXtGQbBX8tHYDij9bbbQW9jFErpFEuh8meF9f8jKETzKA",
  "key28": "2kyJ96UpuGKVMGvv4WBfVKJoyejYG8uTx2EvHsuVtqrcmsZD8RYM4gxrtKkH9M2h8bEdUMwD9HbC7rEyqFFxBHr6",
  "key29": "27DTLDi1XMVu2mvwy7MUBnUpZGqwFaD41apKsE8pH5dw8U2KJtp4ah2vpmNmQuZ2J7s5dDQYG51BcB616iMCW6kH",
  "key30": "3HPsQ47r93VCWscnHbs1uvmgHEMJzFHLxirVxxSWMuaZrYqkaafjMro1CewT55uhk732Xy3RWgBP2GJ9gAAA6QNa",
  "key31": "4cJhtvmvqsqLKcYUzyKFD4Skid6gfKaMyz7VT2HKuurgfu2db43YsbAphPCWjNh8MW6gvekzUPfUFR3KSSuxzTtb",
  "key32": "2PS3axkFpYSkruwCcVDCdGMwkZK8SuJnmoPtLLhvd2kmFYHxhLpPZeF7CrSFhpdC3fNjR12mimQnEDLaDJNFppGa",
  "key33": "3CM442p1o8RGoff2Z91gPky3Sj4attegHFnQ4JABcAiqGneShkbesqE3VVosj1iPHHJuuazWbLUVcw73yNwSMqk6",
  "key34": "3ZtLNm61XRRhP3qdstrbGVUFg1Mcpc7FrRidGkFto5YEgutJxUjVLKgnhVFoW2HysCJCzZyDhiNPYSYxkDSMTCLj",
  "key35": "XKUpNazUGT8tzDi7Pt6kbq2R2ABD2UW1VCavxBJeQEXqywW5x1fC83yXfzVDeVqvED9bNntRT4i8gbVnSnCXcHv",
  "key36": "2Zw6zLs5B4KnKp9VEXPDzucbviohT92yBSchfgePK6t6JU1JASuR3VajURx3kg6bcaBkfpgaDhTuBik13yqpRr2",
  "key37": "4vrNRW2Brjj2mPECJJaVUDcQinZQNpT9HvFPk8iFwTodpijRbLdmyQF5j3gWd5MYWwJgoLM7XdhdnY4F8EyFUyb8",
  "key38": "26TShRSMbs2w765kQzt9heXP1A1ZVqdXVvxW1wL7su5EHxCMtkdKiDRQbzo9xZqnG9qhqBPL3vYKz3BQJHZwBBwq",
  "key39": "5JeQJBs1uJBS4uPocSb8VPoj7bPWzUT1HG2GPkLCgjPmyUeCk43pnx9Nj7DqjcaKMddTBiyjiAmBDjGCb6dGAtX5"
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
