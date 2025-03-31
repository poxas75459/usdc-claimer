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
    "3bFcTp5gtmJct41ChiQrCPp9KT935b4sSiehgMc6zGf5JvBPVZdfvApqEkp16QXyr7cS6jLofWApZMAnNUqzCUTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "289BNeMwegGM8PqBNQ1CqsG64bavgDJCEaekUewcpGZJrhGdm3njdHysCJfJpRNATsTbarBpgZ5qY8wftyDMu9Hy",
  "key1": "vnam6BXFCgJr9HpASpNokp55RpJegU9yLJZdHvZDeEHnXnNsszsRamzorWYzwbiXYEhvNwDYeV6DgFAD4sXx8Z9",
  "key2": "5F13Q9YkZzeBGp6shJJWkNLSsEbgRMV63qxiNsYbUMuYdvaRuLQpHAhDGgNgT34Eepg1i8HibP9NWFrDPaSTnff5",
  "key3": "2bajs7kPY3zhpnZVEK9FW7X73eJfVTLhG3VAoRK1Fr3xR4W3w8CBKNbQLkCrao4YaVT865C7dTM3bqfy8DNKBZL3",
  "key4": "5rqXkB5QAivf1d9mVNT19WHKWPTeohAXAFm34r38LyihmxgAz3Th2zwqVfSanCfZy1gE7yAxaM2dsVh51UMP9ShS",
  "key5": "3DusCNucDMDNjStjaAyXsXJrgDJA87Y5oC93LFNREXpJ2RejERJb2mBZxbarSFQbmjur2NUnTK4TNzQdEsv7StL9",
  "key6": "2JfptZesZ1nvHfaqCn7tisS4YxgBtfjLPJMRas2XGqgeMhHxCugESaNKcZZ2NJMcqw3jgthSB1hbWH1vn4hkTCzx",
  "key7": "4Lu3y6cB9RZFb5EoB9KEyRqtaXuQt1BnLMKYaYAzxwM6fUaYnVQuampp8yURQyPgWLeTHpyhfR4uk7WCLXG9JZeT",
  "key8": "674CWbSAJjM3UDoHdQZqhD9B8MZsagWbZ8kmjKT4Y68jASbhUdEdYy7zkXccDVtEic12ugxzAG3D57sBH6syG9AX",
  "key9": "5XW6un81UgzCvds2pRZpvfheZhvfLRGAvXRXkdPN99tHdU7hsLDtMebdLjrTLs2PnjqTDQv5eDcVeraD5Z25eKZ3",
  "key10": "4gJu5ELVTdxMDvfQu4BGittbsy4azdKGNGrpDZiByP8zdZKV37NsRvQ15aRx6rrQ6uwwWfA4RSxgJoRRLGfxJCV4",
  "key11": "3m5uJiFSH8aqaUsdjWRTvun5doTrk1KwRqCFChqTA1wV6ZY6cpUBGycVZxqMyeZ6jTqfUMpEe1JZM782LsaNs4xS",
  "key12": "3kZvxb4uKf9ieg9WFJWpjGYwcShrZZ2u9wFXFQYdX2esn6M9dqMTk7pmhikgcT467F2mqAkUvnBFzH8j2PnoRfJz",
  "key13": "3e11Th7vEwuVCj7fw3owyMPz4K5etyirJtwkSa56SrFvd7iiT5GZS74QftSKGh9oioCpQJy66FGBY11AXDyikYwL",
  "key14": "5dK8G3b8LuBr8gugniiFSeUHzcJEkJFsevMcb3W6WsV3VcKU5cYHQSQtrcMLGGykNc4zmiH7KwrcHqY9kYcXynb3",
  "key15": "3AZRuWQimcPcztBVYs5gNPhpKrhzrhjK2VUXDquJ37ZRq6Dtis7psSuxMH2UhYNueTASezKN4yHh8ofKhTLp5J1V",
  "key16": "4kF6KF3a2vGjYRk3CgXsqp869nFLywH8HCX4AcV6jAXi5Gcro2BXjwe1GNpfT34ykz82fFKxFrzkTpLinEwGUvpx",
  "key17": "3hw2uTXDhUnbYUcNtYPwLGSjvZdYcPvzLjkihc8iydrm6UinRZLAe2UXzaE2cL2urznMvSgeECpQHK7G6hQCAfHT",
  "key18": "NsghfZYLEgW9AVHKtLkPTHCAqU5GkfJAtscae7dkPhs54Z68TUjm2NHRi5LSnyci6PigJLn31vNtq7FtzqB5emV",
  "key19": "4BMsQ6CWCzWmKLDFFRwJMhDq7EyDmHFGpqy9bSNTTNunun3Njm6h9UQU2RWsAUyyCSW78sPAzbWaiVrEnRwRnTyV",
  "key20": "2gF371evzYneo1r4XhLSthwYpyKdhbV52xMRKmw3XBBaNYQxd48jAsUbazVAr1ShSgNxw5WmResUimKdFEtLUhZu",
  "key21": "4ZnrVRtMU7B7Boy7i7Gh8dVHPACyj7q61azy67Fb1HJB9FGXyK4gby6FTdmuezmMfMDn8wHq9RwpXchrmW7XGCv3",
  "key22": "4VSZKywgzzzFfJ3AoJdRzm4UFZc2dFRWTo6e75LZD8RC5gBxBiSbqiJyQJhuMecfXVWFL2F4hsiVytRBM6UFGhFW",
  "key23": "5UhLwhdwLwqdvjGT43BZiytoc37Hh2eJqEpGngUgstzVKz9cfouBTHAzwde5jENBonzcBARLd9S5mczgWQ3oQMbj",
  "key24": "3ML5v6WxUiQn97cXV3z3aTYs4wUa9jKZ2H3893VuN94vdGh76h5KdxgL4bwmphBEwm8Ek5DM3RmU5CMRU5zFFxEj",
  "key25": "3tkiuW46SafbkdbLcNR64GdTxnqmCsAkxZsKAqHz6SxV6ZqhGt2UHYkQDtcQpXQazczMq6vxVn6qg1x88nygzwhe",
  "key26": "3utFnSpy7FwPyoCgBCYFgokEHL6YkcKqXuddMAjkYGNP8Aqnmy9pRaJGNuXSCiyeLEnap2bSDTd9XUHvZBg1dZj8",
  "key27": "5zw5PT3WFzZBVQsVeZqi1fzqdooJxXDeRE3EcFCcCx5WWNYVfnwPXTSg3nWGbYQ8RDwJheApHTwYQPHaWhraXySE",
  "key28": "3qRquEFDPWdSMt4wYy2WhdEUSabpFW12FWQqAay4UUfAqtr2Mo9jJWMftPk5UKkKLizGbMuPzmRWcJfkTAPHYcLE",
  "key29": "5JbpQdcdQuCGSMVDi3PjJCFT5KF5MV2Tz1ueTQWnxpAohFC8Rc9phumeho4BQX3C6HcsFrKhFM6rM5Zgk8FTqf5N",
  "key30": "4XyiQ1Kaj7sjzLuxEwkdWUN8xcyC61T57wz6UkxNfbx58tYzi5mmt2iEK7SeCeHnPzBH46ZK5Epy4d7eFoZhS91x",
  "key31": "57NpvZwHDS2T9AtMS9Rs2Kb84voDUGYASYtLcAJjAy9pe98Zp8Jj2dQ528MWqjAyAVsrr15Cw65MdALSr7FWWKhv",
  "key32": "31TmB5mnvgfyPWC3wVEnSkDEfLTtkhwUrLyWEwbPtF1Q5XWqFQ9dsXTRiVQVMHbxVcCWyncq98cbhkca298ABNgq",
  "key33": "zWXNBr8dXhxjHpYjtqf6m2gsLCJorYANDYW68DNypuAwUNsbCEGBvBpoDJVfovNXqTduhr7efn9r1nNsfZkzbi4",
  "key34": "SLDbCzh18wYwBFxidVpRELfcThneBDr7R9GYYKp3bUkMPbgWpyNPpWrthhtV7wajVfMP8UCth4oEHBDyQTfB4ns",
  "key35": "3kcEh3pBYtZWfH6PwmTpf2REz2CPVoUA5apRLdJQmSu6rugNYEJtQu2Fva3JraStM53NE7KHZ9JadSf5PvCTf6Ui",
  "key36": "2K91N9qAtKQ1eTHDZarmSmWixdVoPnjm9Mizvs2g9vtvRTpQpz9poCBBRrUp3WhXynXskUByx571oQQkzauaSoEq",
  "key37": "2UiuiZGZeW6uFjGAi2ynvcZFp7W9jPwRNnF4pgyRkFEvJMQPs7vTS5WShXAkeJRc5RMtG2DmwLN7csgvgvhRPvKt",
  "key38": "2Aru6cg25LAPSadxieFDehQ1Z3tyZhthX7USMyz7t16RqzqNYv6Uv5sdf2eSZ1fJXnpnRZKiEti3WYT3H8XUwY3M",
  "key39": "4agTkU2sXuNtV8AhtoLZycZ3566GKLQwJYKuSyuVcwCC8rmZ3uc9TpVQ9tXKaHpQCrj39J4AUccfNVTo9A3JQvcJ",
  "key40": "2ZbVrN3iQBtB4pLbG6rui8szKmPxjLNPDtU15WbDC9mEkqGpXTyByLPhxBCoAB1aGUNrDVvLiB54ywKJT5RywKuo",
  "key41": "4CxmJxWvDNTjCqai6ePpFgz66x1arLzD9ucbrQQFMZVDUnuhSVvuhXCAv8FK72YySXv4PuMFzQuc79KtdSStJQPm"
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
