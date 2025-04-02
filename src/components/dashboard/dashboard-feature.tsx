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
    "5UxYSjXb1E7cWPZWVKjPgLXXxh4wk9ZEogTwbPmaKwjpfKZNderUgCeGtgpMe7a1NEnN6LxFKfkyBB53yXuVVPj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NBTddq9niZn8aocGzYYwVj83EJtsqNzbjS6c3DTKwXiNJBWzDziP96sy7BA97iQpFNJJdD3yxi7hm4vydewv3b8",
  "key1": "5PbUwcciRyvCKpeJb5ZAFvcJwkHx8Aj84GSLXfiN6wgmd2adcfQPWsWGLr5Wv5Um52XF3vbAhvyntxHaJv8P3o6f",
  "key2": "2dQiTUBCLCZC3RQfr1YDBGDcDFjWVD9WNa1g9mL9EPn13rXNudtvckmkrXbd3EYxxrUcmtKiERSs4suJxrATuGCq",
  "key3": "5nfR6UcH1zf3YD5jGSJRSYedJK26C1VCR9BwEPfYD8uSzEuqVqLEmGhaJiczf93kkKXFuEj2RvbrTasmNZfctT5N",
  "key4": "26y64MRWNogeG8M2BAVRoyttdp2gLmCKVWvkUF2hUbi3TxtKduUz1U877ajvP1Th2Lc94kDxaph8Sd52hkrNkFcu",
  "key5": "5kborvdqArhrvPuTvML9bSbCMyzUaLkghH7tksBe4TxTVnBjWSCpiA4c16k3PmHfzHpraRuixkMHtwaKWvqgeTcs",
  "key6": "W9gtANN1JaC2H2RWjZWAKaupw8xnkAZ6gVp9zgKpsd6qdMyKFTv1338TdPW9uzNHZfVL9KQWDrtgU5cjuPv4Bt5",
  "key7": "5UaE3eHAGMX2jWKTmyhzDQxdRxb8t8iDxCHp17We5Z1oYu2dhHeJyV1WXZzmtCfGyxYFK3f56JU7i6nSR5Hyypp2",
  "key8": "27TLBvr7WoYs5MBmFwbovmgBiVASGofgRxwoPPJQ5K8zD1PuALxP431m8s3uRBVNmkiPNTYyZ6koa8HXoaGQpNJm",
  "key9": "2uxq9KXqmpyiAKZjKm5Z5RpRbm7gvsxPYSQ2D57nVVCHVHjbpnBCqsSLzjecVvBohMcjzQXz4NXKcrC1xz2Z3s8z",
  "key10": "34T1c3gyZgMyChTbinhX3QdyepnQSxuCfnc6xkFXUm87ubuW1eCoWwHEKyck5cBn5FfVSp15LgBESahzsCdmwboZ",
  "key11": "4fTX8vuvJFJ71WPzvvV3W7wtrpn2uXa4PzMKicHuZRiKrPdGzp1W6okPNCMEnXZ2QkevKHG8YTPS2Tm7EVT8hhcR",
  "key12": "65HqJsc6po8vpH78h1qigo2qgkJDdWh8VQxtwKNSGs7Y3BvSguKtjwcmUxzLVfA75GjN18Cy9Y9ctBdbojZKDDew",
  "key13": "epKnCxRFPhXJqmX9neTdc4zWX29ad4Z4jYpsJfZfGf5HhbmWQNgbueA1TaeSzUGNfaCn1jkg64A65ZSBJXc4G6F",
  "key14": "3zDwUnaDxfKqchdBHEYKePFyL4qp4FBRQEf46QHFoCxA4gpuATFyV7qySbK2xw5hBvvJFUMkk2TrqEpBCNfPsn5t",
  "key15": "48ghxe2oraCbTbp8BSD44dv8zbWrgXkUmh1yn5rnnuhBgXHr32j4BxLKfE2bnQGahczZ5gT7kb1vu8W8WC6EenWw",
  "key16": "HnzuRUTLF24FM6qKosTTTRKyeJgjPCZde6Pp3wT8z3xkr3LzvY7i4bxV4zdtjzLWxbb5WVwi4ogBfyhGNsArWof",
  "key17": "5UN92YLYNkhhiukzwGTnDdbeK8GgTdLPrszpP28BhF2URcuxqvmKA5Y6k44nKWuPTzrQjQX82zRqYSFWsorsHpY5",
  "key18": "2wzYCxBZ12HgNQDApvzgivEZEaTF3iY3yqizV5yhHGjV4Lqa65UvjKFsmgU9A36koXXU2yotUxsUGBe582rLZmi4",
  "key19": "3fNJ1KKsbLUrC29b9YHWNiYvy1SRKh8r9buKVEsa4NJ4u8zWzo4txRE8Ua5jKyb4k213rxjcFBht3nj6SXfaT17G",
  "key20": "vXkGCefVU9fiFf1v1QhRW1ovkEf9TtpcuAMBj7YJxDAfym8NoYZy7EX8unT6d7WtDsmT7A8Xo4R4mFcGsGRZfGS",
  "key21": "2aHGWtDcGWxS8JUN8vb4NPNLNnAHFC1LbwjdgtrAyE2wmSqaQNukxXWRB3j8ExVGDfpGLjbdM4rxrtCigNdMmvUd",
  "key22": "3oh3VhyL7Qmypo94mChEwzqtCVwo2asmEeS917ZDM1HaZuruczBhWivQv8A5HrSanC7kEmEawEnPBU2Y3Ap856cx",
  "key23": "2fqz1NiX5k1dc6NQWikESoJtBXZfV1Km6nFEaZZ3hccJp12EnXvSUpwhj7W6dmHf9FRL6DwLEWkdkEH1udUQZag5",
  "key24": "5213cCnRuDRHD4QUVrFTfBwuX99fWH3ddLUcyAy1Hb74o7tEYTdfnNBimgCtzzWwEcCu4aMbtoPp8PEUVevbPY5h",
  "key25": "26e8PK3zrvpLnL6xxCuaDJVEVfwTzwENqAa3PRR3MmqVpTRFMCS6QoqDmteqBJyZ8sJUAbGVDTVFY23Y8sXjNVL9",
  "key26": "5rByrYXoGAvB3XDszQfE9mhJ9a6hmoFyrvT35HxuZGow5yfhUUKPnSVFzJ2i4TL3RT88SctKmewK575iAnGmwtrg",
  "key27": "YfriqT8Pph5fzLnRELUMDdoynHvxazf5KM71SsvbcqcfL7upVPBnRLUS348ccD9gDv2Nt8QWT6FAkWQQg4kshb7",
  "key28": "5Sq86AZNkRZhbwNEQihBGw18eubkHsaoN1rUMK9Td5NqkmGSL7xmqq31QtqG1JUu6Fb7vc1HdfyZYJv5HjwWF3nV",
  "key29": "2gW1z1xHtwxvjYaqRKSeVYr6M43KosiDP1Ma5eBJWgtnEiHuCX2rNfU5a8TpErhqkwejVFprYnQn68R6euNSCRen",
  "key30": "4YLoHZEZfwvYBmmQ6hxUqrpjDcqS1s3Kr6WdiR88GzEiLf4mPxeVSJ1nomD4aCyRPMzx7HxqVvdGEHbndBwFk4Zx",
  "key31": "3rcqtJqF9FpnoUKZep2QhvwAyT6kLy1XtXzx3SXyQCBx6jgb8Qgtve3tbgaGtC77Urdcmv2Zkv3sKVGQgoAQuQjW",
  "key32": "2krUE4t2XkBvt8nF8NzG7ok6eZNUBP5kSKWkbhHitFUJR7BrhDUo9usVDXVNjR4WZpuPV9NLxkTdcvLrkD89w41h",
  "key33": "5FkkpMqXqm7tD3PRMPQDtBuFpCbBvgmtn7nABNcU9CSk9pSDvRbwqaPSVZ6oEx5tQhDkV3nePShVDnUSHggZpVih",
  "key34": "51jAoy5TynxuSutiXZVMxiW76TChJdYcedji7DNnYffXckT6WjmYhnLo3FvdK3PJgbf3ahuC32H91qq7LrW398bE",
  "key35": "U4coGAVgmNKWnjy2Mtk43qEdWuA6cZ2nQ747hMdCSsTrYysZ12DtCGUWFkM5boQVWvjWPkP1gRDHGruqJwZ4vU9",
  "key36": "5CNowRSZFiCFoEzaW2Fx4EocCHhHTGfxDVz9WbiwXkTYwNoAk2XpW2F7mFVCVpoe3HcwVshKLyYM9rCiLpSUbDMP"
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
