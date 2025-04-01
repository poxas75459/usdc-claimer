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
    "38BUf9yvevteNt826vszEN9rk1MabdTna3PYLDCkeamzbfzFTdXGA7tZXwqD5YaLVasZeStzM9xa2botfkiTY5G5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TXDzm8dfkia8432RvsvWc3NTUTNMvuy3vQgPYLJwY8GTg8MWwiS7LCd49r1KmtusraFoG9GwmRnHcZzjHVDWn97",
  "key1": "4qaCdfWyAYEKFJZJa3FrjmrU1VZX4oC27PUu4onUDpUsesmA7KLsUPFWn7zJCM5L8XntBcyk5cbSzhG869b1yKZQ",
  "key2": "KdNXDkvBpnq9Cwio1ZmkRYaSUEARPt2GHU7oBiSwExytzq738fcJdBWLTj59UwQztFzzxo3Qpq8GRwzqoZJZrU1",
  "key3": "2GdcW7jZnKZLhc2RkuM1FdVeMs9gH92pr1hoaNH3qqJcRiweANPuguDr1pC2GhJWA7MURRoTxgkuFbKKaQ26cHdY",
  "key4": "3Rawop1GiB5wwV9nrkzbAZ4KGpFG9Qt9R2wo5TkBs8DGDJyi7Sae2bKysDi8NVeJwGMKPcXyDeMEwRSgTZFV4qoU",
  "key5": "2UNi2L8knJy9buWu3RCgXnLp94N1ZfVw9cYowUcDQBS9Mqoc1w7k3QMZThj62qMtxStmYGXHTzUevLdpJg2aBUFJ",
  "key6": "4u9aNGgioHaS8VP9GzKMmMrHyPPmh4KzGjDyrGXqtPwwxVWT3gAcH4xjD4YpUyiT7m6KJShjRcnhhqr15a4ZatVz",
  "key7": "5nvbgP4gCq2Z9SDxjqyYNso4kJskXS89TLaoKta6JZLXpiQYXxWqrtZx7MEf1scACTUeFq2fbaQNvbYHaBu2Z8rB",
  "key8": "2cdsBSVRfjnVBoYceCWBbS1agGYW5KK2JXQA5fSdfEuYRDPY8tjrBHrGUk68hXfQTSHFkM2os7an4p1ZW4VP6DBo",
  "key9": "4ENCuo2oRtpxB2Q8NtoEcwZDPAZ3jXtJNfPdCv3a3fC8WA8fY89AKjimuzMVMmS25gcq4vXLy8vFFSRqEn7cc8uE",
  "key10": "27VvhV4FHE9djaBxBs3q9deo6NKnD2H2jAVL2U1s7YninHr1EbKqzi62SeNHa8UxRfaR7XY4sJVzxmxHavVWXfo5",
  "key11": "UtZ7y1vPrjRgVBKtVDHUT2MbFNgYJWcHzkqoUt1nUUEkKLAvC51gpDHXjoAT3zWcVEnw9FGaf9JhPkWkcJMeguU",
  "key12": "5pe6DvequDts3NocTAAbv5HXX6RzS7XvY715WrQ1p5jtckaGjGf57gVNSm9f9U3DQya2nTcpsddotKLXxtGDzstr",
  "key13": "4pwNLQwYYj5j7nAibPvi4Q88YsC6WUe346WdaPu4BuEpLBWrbFUJNA2StewzNUuBr28UE9VSDRPRHpkPhkUSGctG",
  "key14": "4x4HrrTDzbabBCDgXdDp4CnLkMBmYSyQYAZjB2ZV89TjAExQiQS1tDeqjXwS2bhqNyYHU4tRnWawbd6sL4U3K6jc",
  "key15": "4zxFGySpPkeFqff11qWBswgVxAT5hYzQAeXGAQSB68V65Pr2Es1GwSpQ7naANBVgfTfeMe7QpTzbYcCSN3qeoGNq",
  "key16": "5ASAshZT88KZh5bjfJz8842C2MaWrbzkjcd664c9wQ2ugoQTcjpB25Y3HLrfqVjLFnN2CMdze47QmSwSf5xUsS8t",
  "key17": "2h3utgARQNHxKhx72jJfXeLXvoqRjQF6XW9CbB9EDpmzvR9fK7EjLT8Wob8g53GCKrSMei8wseFZTRia42TfLGDN",
  "key18": "4R7Bko4n4Dzv3JkrHvJ4LZLhCbcia7L2swUXpdmvFWWE1NR4cubrgG1wH85dSbvqmEdNqaPpcptYQzmHJjs3LBFY",
  "key19": "2UXkxohnW8PuD1gGVfcxwj4tdg6h2kdtFguBM82QeWNFfyBbtEpSQGi5n1EnVLaxfemgv2vMKmDM6qTj8bhttEny",
  "key20": "5WXThDZ27NkhRx3cuhaPFi8xNPr6M974Rq4qoTXKV96Pg9iy8VEt74MgmJRZyGdUyZ4hx6YbU84qoQmcefoh5DMd",
  "key21": "4vsHhQkBhbyczCAJEsnR4AAbtguFQFYDMrFaMPH2f66aP5WFPCfKmcLhDwZF8daYESsgMkDCfZYMMQXa8g1yaxPv",
  "key22": "4RhT5NS8crZdH7HjmaRJVfHpbaGummubZWYDEfgPbhK4u3P88694FnwMwuLo4FZGUUR1ahkGBvSFq8oZs1KvgYH2",
  "key23": "2Kz8LNNxnEB2kgRNY7MLHzBeGAQQPeiC5QDmb7Jen5jNfkL5StqL5828yuD9QvhUnNWaJoyLNXeqpAqKfMBzVXhX",
  "key24": "5zYkFVVqTAC3LHEHfo13VPvQZsdFTfi4JuSxCzoG4jPDxCT5Ht9nVJkLFbgZL4o3n7cb6Vro2g1sFpL4q1Znw9VX",
  "key25": "RPPpHDT4jQiKSYobV1js8zhAiuBSb2cQJayNEXbvE2BVQf4pACNcqhfntXGRy35seXqWo5TgWMRrdg2MbmCxzNv",
  "key26": "35KGZcodaEjBABRa4CRHHxUgy39ggi1o33Ey63ufu27bi64y5wV7ZqdgP4HShoy71MC7hvfyfFgZVEyXUiDTiCrY",
  "key27": "hoSeHE4ZUkAGgcGetCyCqkYFJUZfBZtEYGf2pBRymtUEh7Le8UhWh95cgGKa2CQUz13jdJoRBmViGSp4aepFk7R",
  "key28": "121HXDDL3rKuisY7HkxZxbMZjx7z7TjJxvm9YWkcChuSBpWQQepWgbEhATF75fN8gMNWUPSomXBfY7cLYahngSmA",
  "key29": "HS4kHNn1KCQ1fKCpBscaPP5tQSzCDA1uhVs6MTVRqF6EZ4HDKAzfMytXXbiMUMCW3oBGJe7gaCWUo3n3ZFKmgfZ",
  "key30": "63dqAiUrB6LqqYmLK2zsdeZcfx9hnZXx84HAK3PcxSVBXsteoRdAwJUWeGvf9yNAAgBArEq55zKJinSGbaXmjgu3",
  "key31": "5E1kLwf7MPSZpQocTeWmnJxAQs9FHLFKL9xuudPRoeZCw5sQVut6DsuPAT1q5D9RndJHNDjTGTXDWykdkjcQAb6c",
  "key32": "3e1DvU1ghQBpi3Ps13dwASstBiXVG1Pdcsc37mznouuTCb9YfdMD7w8kK86GsKoP8Zsd3SExBGSDt4cTa6YYfFu4",
  "key33": "5fLAvgJLiPLYtgSC4i6eg6aoQh358Sf6hug4pr2y9HGZbVtXyH1j2KAVgR6GAZ3pgseHLfeTtRJTQyeSxz1Kjq4D",
  "key34": "2ZNZo7V4oC3UNLzf2nBXhmASR9MeHuZCfEvjDUdvvL2GVgSPQGQabs8bfBvmrckHqkE5SNG6KkwCsjbQuJMKbT5S",
  "key35": "2rtE6CuBf2uGz8JKMfqcbD2zAW5TUrgqzDnKPj8VdSE365ny1pXnnCxu8NzNyDxRbPAMpJNctbGacTbZNfUUnzQ9",
  "key36": "22Ku6F6HMt5oYLD3L8SGzKcfnuib6wkmRmhv8y3PjymPQ7XgfdacrNSsK9Xhbzmn7ATLgqNNhVuq8MwnuFtmos7R",
  "key37": "343ntEyr5Y9Md6Zcup1WsNNKmRrZALvQ3Kgvw4HYcLszACiRifcZVevYvBuKsVx8AphtTenpkUgZUD6QUSHUJ6Rh"
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
