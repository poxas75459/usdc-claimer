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
    "2XDE2MHvb635iMF1saMXqcoqq66Xzppa3ub8yV14PLuZQqDQb6ieKuuocu4XLAijp3JbTDwmG98ek9DsV1xUrzyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QZzy7nP1tjcCT5pbcW8UM97tGJTJnB4ojrySDyUG1eEYFQZgY7XV5CQWCBsDNMJSTRYLyPt4kVwTNKs9imSfZjH",
  "key1": "2Je69HycrfudGEMUWWbCJf8TyQJSk9zwr9Pdu7AkJx3z6aAp1QJXNBf3gwCS6v1gncC9R882A9PzwS8QLzzT9Pm9",
  "key2": "2h8AVfoooUMqbQT4g1Kwf9MpXEWfi72H3ix9CMZeaX73yBBxSUg2N1cjN3rNpEQgNtcsRHfQVqhwyZy8DhADR7vp",
  "key3": "3dHvwMU9Yn26mTC2U5zvi5wBmX2fM8DujDHuzxjne2igmQTZBZHrKEPLuPZ4So2FjsGa1FRU52prMNdgZbwamakv",
  "key4": "4Yi8q9Rpw29SngYfYCS5KRcGpX2UUpkAhkcvk4koCg1zpy4PieBt18TundWNkqawk6E64JHyM426eRV9n9dyXaTF",
  "key5": "34AZFpQL52SLe1YgsCGbU8TjuG6Xm853dcKxgfWk7DG6Eiu15yLAdh567nj9HWRpbPjqCjz2fEmVSXNtQG6pruGr",
  "key6": "DdrhFadFABaxePkHA8Gcv5YSieTmSukaKkQ13ApQ2oT1XJA4wuoUUp3kQUyUNXjZ2vinXwh2uSJ5dJZP4NBshh8",
  "key7": "KcdxE2px613qoNMBieFxyqi4Loge5Xi1Ukk2Wmfz24LddUQxPQczF9gAmDwybbwz4dFPyoiiZVARaXnMuyQnLLc",
  "key8": "3PmfNsZLg13dSqnSksVYaX54sFULRHEsChjZkKrcUfRw6VF8LiCDrijbB51unW9BmtsBzFz5r3hixUcx8HX3ATLL",
  "key9": "5gJAMNubjQ4MjkiPZ6nPg4fAvMV7mRett7tVr3ZQUpbFaJ1uqqs8j2db5JWU5TKiU3qNQedGStRsiJSYLurntAxY",
  "key10": "4xLUWNNTNyx4n2dAaueuEKPgc9FK3tAFA99SazN2RaFijvEPtxkUB9RkAjFrvBNnyx7Y74uXRNB7X3xbPskX6ge1",
  "key11": "2FgP8gfEBBTWAxoob6zRSG1ec9ami5yjtXnVBNUbQsdigbsFLs8XALaT8m3aCL95sMo4suKLcojnXaBkYUEa1gHC",
  "key12": "4xxRsaCkktkc126aP1KVPmvT3b2FW6NmpG9eLMh5Gag556M3a2aM4tAm25HQpV6dyztM365HmmMKadsSeat2gpPe",
  "key13": "35cJJXv7eC5WAEXdcncwwQfQzRzjfeXYAVHKwTWrUf3vXzhw1jdw2DfcMoJy7gV88tzkmH5TxDaqXDK3quDsDF8E",
  "key14": "67HGECX9YFZhsYbaUjSiiMbD7ULdFbiDqjE8X73n16dEWJAMm5HpgRu3zapeYNtM86mX3MAE2skXH6DJkebixjwk",
  "key15": "4s4LzxT4QDh3Mc8ipkAPegmMQ5ufNqCpjuYr14vaHEDpxkRuujbYksthmejCiKEcPZxye1RQeEFzJSNudyBjew27",
  "key16": "3rMRxbynPU3neV8GNje1jbJcZ61UCbwH9NVWdLvx7zKSZmGe1atDPFH25RFSDVa7QF8EJ7jZQPA5HM6JXSsEp9ZD",
  "key17": "4uPHjVj7c4HYaCGKa2tPiZE1gLLL9Nk1QMPgRwoLbMZcowRExTtjktJNk89TdgEfMA6FeX6yZH2ase672kFLPAfN",
  "key18": "3YJybyJJzBkXNmtm5V3uYxJdC8FegLMi12xchpahH54h6Y552ZBaKdWvg5ZdSMkJEVo2dA2auxQWvH3DWdYvFUw7",
  "key19": "zWyczsVR2p8vbqaowb42GjRFAxjZpqY86hptEzUzzAoWBiHBrjmYXNfbDVadc2CyVjqUrMUhabiKd8G9XVWwNdJ",
  "key20": "2omiwtgdALAWhXDmLCTmeHuUyEVxGVdkct7WfqBUYiTjHbhZGH1YWaQe1mqjb8vhWat7t5quJZN7b4mYZPjbWHWz",
  "key21": "5rwTS9wstMxuXQLu1AwAgkH3AiJEo2cRgkMJjWAXGNyJp5uYZfxki1ZtEqpkwr9i1mjK6asvQ8xj9KMex96xYtgk",
  "key22": "2tgroH1qxdrw1ZoMPdmRrFPwNU3woHKJzpNwePu4wis21tJFkGs9PiZ6RXPT97Qc6X1qG9kfbmffgjahG3f2wRUL",
  "key23": "4rzRfDPkZVUY6x1TYsE7eBsnsSdq63whB572U3MPMUYEQxj5u3BVgNbiFBNEXA4e5pfXcwvsnEw1GzJL21fn2dbx",
  "key24": "2pqdjCtBnFTXSwCTB3BtKEEt7VAKf6p5Z1MZ5F6PSzHAbh928CLATU3pZFniSFtSoobfa7kSrvUc6TtBUcVHEanF",
  "key25": "4DFzt9QcWH5rpKrrPfSKmUsbsAdk1Cuw4UrtCS7NmSScMe9PVL746mNphknCmvYPC6jsjm4oeHnEDg8rM86iqVKU",
  "key26": "Qt3ftVgHvruXjqoAwq2TnME7zZXwEMJVL6mia729UMbeN5KRvsT87UJxoi9NPkUMQkhNftSVevJ46xBv1KrzikF",
  "key27": "37XYN2v1ianRPdhH5HpgTBJSrd7kSFtyVHhZE22nFioCKPFXwpA4QPLGbzdiEweMZU11ffpZKd8R3o5e1RAhH9Q6",
  "key28": "EmkXVShneuyKoEf3C6nuBXGvkWmUfSrDFBd4fz2CriaHmsuuegregR1PEeo68JTnrcxEoYoaZZDCAcrBQxLX4tQ",
  "key29": "5MKjj8wwhcg461dL4eop85k3k7TxVErnnTfK91r2egbVNSt6vNYansoGkVPamkhP3KhLHWhsuutEgG5hvben4gwk",
  "key30": "1qejChAL2sHaCva5QZHF3AUGs7ghmVbQeAcSCigBvKCATV6tBYgYLW1Ev7Wc7o1vABK94Ds9r7g3a8cCVncxuf3",
  "key31": "5oS59Ai8GmYEEH5F3ke3MNPVPFjaShxQXqdKPBUQhrMwsxcLr1wxS5p1oEH472rQPwhRZLRbbXmsBUbxjHqUpe4A",
  "key32": "582Gk9vZ5X34sG3bGJr1eS8NvyfwfeeFyq1EZZp5GB3iJWboN8C1CECAQzqrC6DafsonM63ikQBNY32XBedUqSM5",
  "key33": "5qgB3fCm3c8cLfr6AD7bja5vDeVAjzaP6aXHzcMh24DtShutYBHzfGWm53sRUbQkTQjXzWCJUACjcr8raVJi7Y2b",
  "key34": "eu9XuCcbhZi8BuH3DHJRvS8Bpvxtdknu9SjoP2eMrq775LuHHr51oJBrKM22v1kuNw2jwpXrMFXDvAuFVYCfuNu"
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
