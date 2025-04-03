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
    "4L6BfVGGnP5BCRG5sfJGtREoTCb61FP2dXd9He8jznGVMwCnpgatpR1TMHBk4XdLY8VnraRBxXDDyudunZudyvRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dcbUMevTAgFKn1zwTqPWXRTywksSTkBjEW7ZW951NEbA1te2AonUdkJWBeyrXTbriUhhvqUwFmwoWgGEQSgroxi",
  "key1": "dHoDxk9XPHRT7RBamE8TK5tiGVkj4wGFzagnDmThHtudxH7FiLKGaey3NBdiTrkRhTNVVZojbgJXu9ARXxNS23f",
  "key2": "3n7EW9nB34shcy45noLYwgyayD51jBeqEZjDn6oaVdpLjypes5KmKKDrq7w2DURUZMGVtQfYrdYyzQrwpC3v27X9",
  "key3": "5xPDXyevhRWdDGsy3P5jJotsKvdHFfaEFAoh6fPEVDm5QN2V2GkuoBUaWREmWQKd9Uzrk8Xbz4nSCmscvq46jF3t",
  "key4": "3SwSnK5LFGSPsJFYXFE9NRBYzY5ELe216r1BoByYEXeGX9QpRQZAa7FmhFh9bmc5yYMCvB9yVaQ3VgTFLhrMfLdR",
  "key5": "2GxJff2sY234Sz4ivb3BJFTR8DWeVSYWwArzhVpcwAFiC7WTvxghGfZhHHhXExzwnbEMYJn9acQBsxmqCQTTN7vN",
  "key6": "5HgAg86z2L79KbgyHPNrCyL6ZUHpuYM8iZMyvXMmNFFbd42T3fTGSCKmLsgNhKgGSzCRdFvHihBkdk15Yf24d2PW",
  "key7": "4DfY2Wd5YquLo8Z1Vbt5GqhQHmCiJrqQAdhPEjPnAGD8ZCbQHpxVGbh7gHaoLdZa2awyAF4fyterykngMNhMkcDq",
  "key8": "4zcWMJVG37TjA7rG12FKwbAb9wvZyZrC1TknwNLcKUiKUyu9QxWQj2d5xEbsRro5BcnB6A1DHuNgmj9sAcgdmRim",
  "key9": "3gbDe4MaduybfGEhUWkkNmrUNKZCfXnQwVFN7waXuVoP1hG5F1ExjwFZwt8r1NFLRq4BYowtyW2Hk3CXotkPVu3J",
  "key10": "2g9RZHGACnagx7PewbseTtHkaLqaSrAKTeDPUYiWwYoTSmDKHi6wQJ7gXRMtYHeidj8x6m3nAjJ3HnU8ohDRVF5E",
  "key11": "4K2759C3FuS7P2YZ1sEMXukVhKrufviGVevd4swUqu4tgut7RZuYHoHrCa8GCG9i654ByUSTnVpvqitSUdi5LMKC",
  "key12": "5usjWNpM4ZGMXyAwUnVMhhisBQjg181Fx1b4uiHiCBNPu4JvE8EuNPTVGhhudQP69pMDi8egV7kqeLVwnnqPJcZq",
  "key13": "3CHQG1DwEvnX9phiMwddXHWzUZAuHLHzyxUZ5ZGwToVLXNatWcxfLjPTn3f2LM2hVPQA2F47qbRXanF2rbeiKvVa",
  "key14": "2poCEVF6e3W1hoi3g1kvPjpP3yEjtb7rNwAGTKEaFkkCkPF5otivwWjMAURnFY6KLvnm4PQizZwtam139hD71Gac",
  "key15": "42HnTMNxS7bKENgEYi2GZKN7GaAyHtUnATSD7WySYMf4pvLVUSPMg5nYf9tykdQ7V71s3g8iZojUxBSTjaawAcDk",
  "key16": "4e1sqkyJy3FEnBWiEbGRH8oviyTQKucvjaMJ1EqWAH1VJ2LKb9ExZN1NAhh1hiopuZ154HKjpv6gYA6f5MqqfRp7",
  "key17": "3njKAEoKzkL7a2b6d54iMRtMuiDueBT6jjJnVsff4rydVxpw2JZdzhhWeCLgbLonn3P78UNVFV8ZZhPrnSYXSCyA",
  "key18": "3jMrRprgsyJVPUjnWCeWZWUtMGNFkMzdvo5wkPYLjz1HWFVFTR7ueizcUS5AVNdjVSL7UbWK7Aa7Nv2CXt79eD8",
  "key19": "4mpB7fByYRzMuQd2xF9bxDC7eB2dtG8TYrwTo4BB3sYfxfb68X2FjAW6LmErh9cSg4kWG9W4kuQXZMBFvrRDGgZ2",
  "key20": "2N3dVUFb5N1Dw5FH5U8ntCAuUMNCdAEJK2g4KdeczmiDMfEKZdUPoYRXdc7cKhB3RiNiQG1hzsXkd9W5E54hzvME",
  "key21": "3XoVcYn5nWRrwtYfayj2qdpSFNoM5Fnu2sHt8JPkkztDYWWHL3uZA4PFJUg2NeodYrLQfeiGXVskX41rnmzqrzKg",
  "key22": "3qRVK2DiCg9pAdfE4spnLV8pmGUKZvtQmGo1uGXRwdr7LGfMP8okK7LWA2UUc2QdwitaCaVtPhYb5iiSGceFXJ3S",
  "key23": "2so6viywbSsEiV8DH4EUaoNwHafacfvGHvTiD8kjtSCYpL9QxSbwpVUC34FbGdRoQE75D8FEdFKhcRKU1z5T7yb7",
  "key24": "5Fw2nBM51iJhqRCvL4WGtpppxJUWz5kUBUsQSczMejeax9f7ZWkpk348NYnvhv7ymp6HTakaGGfAJqiveZwg8wsy",
  "key25": "22n3RFp6fBkE29Cq1CTpRVXoAkBYLDmNDrH4pBgP87LFUJxXj7d2EJWPHQ9rSk8FH2DEJtQDUH9RKG5Z4ynctSSY",
  "key26": "2c4oMnHUcNgFt1WfSBkvGw8UCEQWEM2D18L5BfjnQ8SmVdpJtyhCWr8W1NPK8rECMURXiZhTm3DzkGcCuuuSEgAo",
  "key27": "5xtWVFggaZhzAeWDdQioXP22YAKDB2Sj7AteaKWC1w8rY5zkGtP9NhRDQPAYAV2XxMK32ar3He4rtQpKiVPZ1nCH",
  "key28": "WmtKkGXxr4LjjrcYvrULE4s9bAS43woXwaKKzQYrJ6nF4x7DzDma7a4B1g4ocUyPnaDHqQUy8YdUtq2991j7shU",
  "key29": "56d1BKFPkGaNv8RQmjpbaNp2KnXJzWSy6gJX4k4Avja2ko9GtraFZqrFSFycqWrt6kzWQFEjY8jMHE3JshDENxVU",
  "key30": "3fAXpen8x494P4AgutZzkJT7QmFWNfTbUw6wp9idHzQ7TKfVpZnC77mLse5szZnuofuKSra24ewAKrSxCX8utSay",
  "key31": "3Np7b8WxGGispQmdJr17yryHxTWo1dEHGqyLL3Mza8Gp82rgmStHH39zCDWV4caM5kbHNcGuN8NoVRqoMBypEx8M",
  "key32": "ZPX3SwyKtj6ZNBPdxkkKsBFPRSQN5sZUvgXMWyh9cRP3CVnqHEcGyJXJVdjxjiWJNF56SBjuF37TLurjHLX5vET",
  "key33": "2HrbdyUcQAKHUL65HcP5Z9P3qWudj8PTAN2XptwPZcySzcCES4pdTxcUREbCqshzUuUbJALU5i4RQPMfJnbSpUZZ",
  "key34": "2yK1Gq7BVgqikXtj34tLof843NrddqB2UC6ekBRwrjgi2QgqA6tt5NEpdjNmxaneCTYTJcGsjmMGuW8i2FWPf3tq",
  "key35": "ecZERY7ySZ2qmDgZPDLnazokzrvcLhY3daiHEfM6nQR89LEpkuFzY7UHCwUa8n5iELuGspDm82c7gJfjecGPdRe",
  "key36": "3DYYvWXEswNqyPe3CZMgsRxavjDZHnQhuZiKYEScK2kCNgGKMBt2emSuSE974LzAxBgr8uvWuTf6T4XmASHYGS5c"
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
