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
    "2wvB3qzzaSWNGQpfxAzGo2fHRu7EFfUvUFGJHBKHYnxKe6B835PZHAsaRaDv2kY32y8cFaagzC6LGPfp31xFsZQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V3TLRVcwB9GCW3U8L3KbeTS5Rxy8hwBSFnpvNbkv1SFZE9fKae2LuLrKibwdtyzf8BJo8JfW5G4ACtWcuwQNcQv",
  "key1": "4PhThxccDmY87JY3NyfVtXLr5e88RJc4d398fqvDgknfzbiWfdfFFvr7JcWF9q8r8TMW5ZMJkFmn67GZcJDaiFUZ",
  "key2": "64JYH6NtAA6ScepRDs2N5wgEHifEP2LqGdKD1f2Ub8HXgS11nFFpoJEuGwpga8HHe8UQeBMoSiQpEEPVLbNX7Nqx",
  "key3": "f9AfjJxgpu3SregFZjyzQGbV53k3RPGdhvMnphbVTxGb1qWtbEhNjhmsr1Axjv6NmzM62Pn72Ubd7UkUsHNVTmn",
  "key4": "3zGZtbQ4ztooWNj4vYofopHirrAqjjy4ay6Et7Up8KJsEd2b8DYCM5n8fNAy3M3Vqk4Btd5r3g2VtmHm6GYLDw1",
  "key5": "2cCTxbvomsToAvTMQFkT4daYkx3p3MuapusoRQP7AmLvRevnvVRHtoPPeEYiANibSDCywcQXkcwXRVUqxYrVGxvJ",
  "key6": "5S278PHmGYHagQBs8fKa5VLcuCftFxPQHLNKTigJSVM7AV8xFPzhhvKFMfZwiUwsJqSLZXpPv56awHfH2E3AtKEX",
  "key7": "qQXBrW14SgjJTKKa4bPQvLaVBrMwYFPvoYeCyUGUh6in5tQtiD7B7EZhg9Ju63pCFgkDptbVKK8oAFWgyvxFsTv",
  "key8": "3R67b1rnCkiGqZ2LG4TeCWen3T32qkfnqmLiLbtruJXhxCohVKtUy4dGN3rttTh6PZokjvr5sxvHsnu94RvWjyg7",
  "key9": "5nD5jsFsgY3ikVTpxeE4SLbeETUrBBbxcADvvGEQdgpJyUJ67KJcU2WCHxnVBNuAyufme1StQwDkm1YarqpT73b1",
  "key10": "125sSQ84At9e3Jd18xXwhx7BCxRdhSZ4shfh35GGzGbtuRksDcrKimMSce1iqPrQnPeD3ke7DAeM3N7nNsZAAwcX",
  "key11": "wsfZHzSxSRk1UhcoZpuRxYmNErLGRbbH9729cyQ2H5pEYfNdPuJjMPTA3GbkiKhCF3yrSV94jwegxT5XF2FBuUV",
  "key12": "5Vd3g3QGbqQ6wMUT4AdyBq7gQxjxvyEhox2anyMChPaSbPje1jiMnfdeAGTSYv93WBgPDH6RZNQ6HRb8KYVVtdRH",
  "key13": "x4uQbRfJsCZq3TKP2LRDsbahjG1xddqwtvUTp48j23WQG9JYC4TVDd3QEUF6TD4VxTpMLdaRbXCAA4E1p5u7Mwh",
  "key14": "ymFd2NkVg7mhGLA1zuuLXBN4EsYHdSUZwDgMfCQCULny8U37t9CjP3haXa6PSPyFLKnp3wDkqRAHj4FPw89E2a6",
  "key15": "2udizGEmmmwYnZf98DVWnyDjPHxvX7D91Xp366BPFPAjfXKBr3mHz1GbNptdnb1MAKD9Y78Sh9a2jJKSQ2RPABae",
  "key16": "zoBSJcnvWmSAxUJHJ5HCBejhruF7TCeqrjquP4nNevGhVonwqv41sDVNs7Cq3FryEm1BMYhYAxkdnPmJ8GL9tD5",
  "key17": "49dNHP3czL17A5yda1HYF86LAWxy9tMvaPqErLwzY1nxvr6iDwdr8N63Epn3TnEXNXWfuJmtYkpYCSMmtH9ZCqrX",
  "key18": "8vteUUR2SQuvQehb7xz7NbNNxWDpQQH14pCXJ9zRaCNocSFadmm6wB4bppDK23oyLdhQ2TbW4eJs2wauYGZMryR",
  "key19": "3XHDmjgTcHvUCa441s1t9ahELLGHA8siHF91BA7p5ur3xm8MHpDLYGY28oyrzMTxpNP5y6LExqXNhAwxrpVKEuYr",
  "key20": "44PXPeXpD8SedZ22bDtY8LqtRBFz5MQavcUbngrJaR33HhDuhyK8ErZKuQzq18Upm2k3bEDE5PqYMXzpPQ5jMGNg",
  "key21": "3eUKXuP224bKtwwQkneU1pHFCAqJCsk3FoMJD6vtU97qzE7aygnxtsh5LAcN4L6nFP7wiAaVU8MvF58fKKKB7PaL",
  "key22": "4apNVPnnQAtiayQfVeXdtwV8dsSG1fsudBtjHjRgNVpACsznz7Tt9NHWznssD7Vyo1gyV7UraGbg2DgXo8MhbV1n",
  "key23": "2MQHeGZUFF9SbR75sn5Nobh68hVPLgUSjuJ4itRzWfDmZehmnGZvbD8d5BoocRWTyFAy8eqZD7Ts9azhFHQ7RPGV",
  "key24": "9AbhAdop77xaXxLKspfmkCiwzJPa1WModR6QGV8LewTZwj3wPYTH4cAGTmrUqhzAq2sxuaGMGb8aaqxAPDb1dmM",
  "key25": "5RTcLhSHCMuNpdVmV6VBfaWAfZ5ZZnLM84srfx5HxtXfnJa1C5Q4PbEx45GTEtvWAQpJmtZjNTtXGdT24NAVsN6g",
  "key26": "4M5r2bYa6vMYtgBQbxyg5TyDDX1J6eniUKUc4rwevZuaSdshaE3CG3pe5sH3m91PnECQUEpMhyQqE6X7HMVpVwZK",
  "key27": "5wiMLF3GXDwjuSeXVS1q2b3UH4hZwczDNFuJq7wo8P1PYRjFwBUjdmzL2T4oE6gFin5UQPGShV7ATB1vjZ6c3koN",
  "key28": "VCKAarxkKwGYeeZHMMZtDAVmXFJkv6SbmCUSZMqLzcAGNppsXckfj964khs1jZRgzssQM3HpxwqVbkn6tVfXK3N",
  "key29": "R9spPWySSV2R2shmJqAkp1zodSGJrw6FVEcxxe2HaYueaktvCZ1c44pyejWfxyuQ3SVpcw6bn1JZUQ8b5c9LAjJ",
  "key30": "3J5fREE91Zkntu4UyJgxBbPBx1yzPmo6yVngwJymut6Uvdr2eVeT1oxrtu7jKEK7jVjkEApMxQWAW9CyttjFJZcP",
  "key31": "4tgrno13t1wrE29BaJLVko2LM5wffcpKhJaPQWMGvRaZf7Qw2vnmud6EHLimJ2zX2hbsH8zQgg9LM5J4G429CAtY",
  "key32": "5cjagpm2twrEbjtc1vv6HpburRmM22AX7M81YnwQ24egqsHH1FBWXhXK9CN8Qs1Bu2aLsN9kEcTjmw47jQw2136P",
  "key33": "4QqZ7b4dUGpPWFaSXfKsKW1KPMeJmEBfsBmPkNBtbctSYVRnxAQHZt6XjWT5f65DX6spzv5s4ZdL9cRYodTwcPVE",
  "key34": "276jeTkSv9SeFwfvNKrDmYzgY1ASnZiBhtvcMLNCUbQPxm3wC91W13NQgHN7ALn5ExrTpmvV81hS6hxyfm65DG8d",
  "key35": "5utMe6k24dfZcFvrG7p66Mwbkwacd4jSBPpcaCkjyG7zzrUcz8uUEEZXKqWMfzM5S5FHcY9ezV36Li9NCFWu9pyT",
  "key36": "CBXgjbHeQ7bYBE7WMPHssg5bjvXf5WuA2cfoqemRUke4iWoDfawQuAyuj2gvNckcthkfacBJCfmFGZxrGnEkK1a",
  "key37": "4RQTQPbuEBdqF3DjKnGp6DF54Dqm44mkxnBQoi4EMng8MtNAKzK9MyUMoi5mgnFFF5LBEe2g8xJsetCcDisehc6H",
  "key38": "39NDQeNtccfbx2gVD4LyrPq1XUr663NzfS3dzGpXgYz8doQtWV9ob7fVHsMCrdmGx3e9TfHzcwWqkRz9a2Yysxf6",
  "key39": "4CVxFFYcg8SwLimovUtF1ePB5HyYSXRHB5pjDWBKAsLUE3vpSGtJu7QTDshv6Kqtwdh4CpeP3JNEMo9MBiKZAoW",
  "key40": "4VLHbsU21eTyxdVsuN4ZyBbxgdutAFVJF7ahJ6w1uZyPTxXXErzKFsnyqQEa6PBwBZTK9qqBrptM7a5CTZAq9JkA"
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
