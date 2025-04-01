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
    "4gV39ytrrMGie23hDtRsesriqf6iaumuMAkj5ZbBEJFNxe7q6bn4YfbjwcKT9YcwcXPkLSRTg6ubMGUvvoVCz5Ts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JscMqqC8UQTAgRNqa96JZyKpLyFC6EJBxZM9A97UwiYmj6grUrQMRaAEQjeRLB6shAB24pJEk5LMDyoWieXHAeZ",
  "key1": "5ZsDAdwPYjDW5wgEumyo2T28WsBvabdgXddNA59SUg9xtG3AJxFPGiwsDU9kAKqC6dxbyAAN8VRfkv2qzGwLsHo8",
  "key2": "5m1g1cG7fMnEVMdqUGsEvpK8GxqYwqqm2VmPyQDv2p59T3LxwHoGKMZs8cFt1ZnfNt7dBNSmSHrzdnRbeYk3mktF",
  "key3": "465GJ8qtFBxP8PXKB2j7GQBgwcPVS1ZgbwNpmqhEijVHFvAyNa1QsHusLLVacPmDxH3k5AYQTwQBLTKT3da1ULGc",
  "key4": "3SCpvkMVXgeMP3z3z1Pxmtp1nxSK1osHVADhdKLjwELCmh2bEnXUzWDMaDsHrkbkG1PH8WGcxGrbUWB8BTXqpYam",
  "key5": "3PbzJZ59fYELc9FQ5dH4P5Wx2msyeEVkzSfBPFYbeLiTvWhx78QdQBaLtGFWS67znGEqhtc9B5fT6CWghwFPzYGH",
  "key6": "3dboE4QWcweFCyL5E9gd7ZXfVqq8ij3TfX7AYKX2HoML2LkqEpBQJJqzJmG6XjLrAa42yF8EMxQNzq2JtciooCCm",
  "key7": "48X4H8kYhn2GwUuqYLwrZLCGNJ4fvwyMLXNpbQwNFefZ1viyWZbxoTFE1j1CeoPynmAW9KkvyTeCvMCb5n7udagV",
  "key8": "2WX8UA5edPPjxx5LamHEe8XhcGCAPzLGcfwze43by97RBTkvjmickgo8fkmA57ek8qtiqA6ronunrUJPVxwouTp1",
  "key9": "2zRPCpWFm9uisGC8UBQAbS3X9pdBJDdBGJcG5bnt7Hrxndf9MaswQwrVnYRVysw9xwqsfEogfgfobW2TMcG5Dgvv",
  "key10": "pDumGcYcvsnLEuGufc1yJzY2aiZJVGb8AutPDSsAiLcAVUj88TYDqWuJUMxpdmKSCMSNi6gi9WRFENRBBDqBuKi",
  "key11": "3Th4UUvZ2Ykob1LTtwBDUkQhGEPxSTXgqnUv7u8Vh7iJ4qzVP32y5QbzwXYF9U1acNKinzwaC15ELMy7FvtQmC3q",
  "key12": "41T6x42jWXNj11GJ6AdxxkrjBgntBBX4x7yKb1SM9VV23mEzHrVUKXvnnge749aP8qQyLG5SJAzSQUpm8xStjYk9",
  "key13": "5rnVd4jfjUEigWKWQLAm4gAro1n74zN8GFv9cA8xJEQL81mV6eDrAxfCGfqUiTyZDuMjgSVve9b9Cq2N1ZXM6xJd",
  "key14": "oVXGQJ24sVbxBgb38DRSfenv34qibRzA1khqqZFL9M5dqkvJDdfDPd37xVuWZKUJBJztoChNBeRSw3N58oDMxLs",
  "key15": "4QHx33pHYdphyN7hwYz5RAbsc41Jf1CmHuysLxgUuUivvcKTTmdVVbEZ75gYdFBgYgU2xESQz2bE2unpsqs5wdft",
  "key16": "3RQEdRR76qLPwwF6NtykEaWx5mAPnB9HVqwubCzfhy4dyPVp3uGFXy5VV5MeNUyRn1Se9YBy2osL86SPpLHQSHsS",
  "key17": "4U6rY6D7R3ABttTzGgL9p7yUA3rPbkn1dqgmmVGHedYEwi9UCW5K1vePU1gewRjRtD7HpEFmrCe8nCLXeL3dCQUe",
  "key18": "3rtuYyVyx6JTCugfVr4W3yppUpYnuDPdknzW9eRUvbBfZ9N8yeWpMFN8LHpCfxDsLkgpVWe1oDjxAQ7g1J971HQy",
  "key19": "3aDgugQrNdWjU1toZfMH1jLsDaGW8JWXhqHHftK23Vm3bQqvs8GsLyKreiH3VeuLKB8GvcRjCbauQ5kq5reoH8MB",
  "key20": "2kseHW1ecYjSnhVAXTsuDk8kuYJMbgG7uJQQA2iun91DzQUiQCUZJhXyrPu6r6Xh1aNWET9qFMharjsh3vcZeNqg",
  "key21": "5DsymGLDQQWjV8ujHrgf3hxBQZtxD6Fvd2Sqq7QfxDdKv52S8AuKYK7GUeUm75NFe92Lfhn72TMJg8NVbEjRQn9L",
  "key22": "3a9az8XMMFUgJY95tvW2pqZCsU8NJd79X5P12Y8SAHnbUPQMekCyrMSoVYHET1J92Tv65Sk2PCxWLChfzhURucfJ",
  "key23": "PQ2sABLTT5hQBfTPCj9bRy2GTBe6kigGge66WC2va7PEZbg6voY6GxMT7SN7d2HLDjwpkLnh427HZ178auLdhdr",
  "key24": "31YrCQzS4DoixKPrXF8sqFb2AFHEuUvVzLuEGkgGkccMj47cuHAAMP2nbFueJs6onSe2EHp2fte5qSiKYswRkYXT",
  "key25": "5M4tnKDmqiAjCWTmHv7ctzapavxBPvfJ9cQfbTFa56NA4hR5bJ99wFktoQXV6wV3BABoL1LEVCU5F5RqnaBvS69Q",
  "key26": "4vSEhuANy39qhXW3VwC3Td2p7HbHQvg69q6koakTN8vo6XWFE53Ly2VDYh4AAqY8Pf5CqEafr9c7NJxzczoGLGWH",
  "key27": "3rnWH7xpmbVJqWYza5QMgeSc9bXC1WtN7avg6PRNWYqcK3ye8jJot59yWKQYuAejxFGKW5qWdfkLMBewheTv7hJh",
  "key28": "3zNXat8usqHTnJL1W1xuuMkrEn64j4nnvuWtQaaEe7ew8G5MVTfsyYyPYbt5J6TLpbPqavUdsdCTgcf1rjqRZ2bV",
  "key29": "qR3vUfDa9XDF4sjLrp5v2mF1n2uzfEtYZcwLEUQ5jRqBTZz1QtbJEaDzJaoGwYvKMq7n5drSWFuCYxCJ6Uw748B",
  "key30": "37ZCj6WYFoSM1myFFVqBmA1ivNHyT8R3nCwiZVtLZWsmbRyuniY5VcPV5q1Vat5AjmTZTFdZFBBXoy19e6sdM9cG",
  "key31": "4XhRqXBAmL1z1ZpHcHfBVZaeDvouGi3Fyqrp1e7KBsi78z9rYimmukh1TYGNF1uZs7giXd6HxCHUgKD5rPUjHwQi",
  "key32": "535i5XmsNx1JSLPeNVMSvDbucgBb4k1erPCecA7ryo6QFW6TPKNPgPvTnGstSqcXyYSXoFL7UeQKJosSdfHzchkK",
  "key33": "4j7MhA5qp6nFgjrJNv3LvtytWstPPGBiKvsrmrpZNdgRH6iMd1eAKLaRztJW2xg16MAGk4jpak5EDqRkcxnwPADr",
  "key34": "47q5PnvAC2n4durMk1jjQG5SMRkMeeG6yqAZdccU4noSWjx226S5W4bFSvDckq7yHguZNUokqxYmwfiD1AfimhU9",
  "key35": "5dBA8kanu7aj9tubLxdH4VZKv6iZoJ2jut48mnDgGf3XAfkcuE4nu7MGexsmDP2bK8Nyqsq2BVwsL96ueVrdFNUG",
  "key36": "qDzeDB4Tt8jZsVKSSZ4RYsdMtLbWDkEB1czeBZNEtNrkYR5jZGBb3GdTCVocooNZPK2Qw64gfUQHQNnjGDGuE4g",
  "key37": "25oyHxf6Y4c9p42qK2BTW24sVux9MkP3fdg9ohXqg3MeSEdEpSupZASCxR58Xnvc3BQEPtkBxyqAXK11ijWi9Xn5",
  "key38": "2HZ8m16jUGjdmzpMwRS7hwDsvsidUsrt9YKpd4YdackGfVjFxN9Xg6Ug1btWtoHHtyZpbB98YQwMapudiEQoRrVL",
  "key39": "3dL3cavLoNLYhDBMqNo3if1j7uqRGEykb5eR4yLaGz8QKTgRoCpoNss6y2DA4E3hN6aPssExPVrhdguRF1LRfwdh"
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
