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
    "3y6evQA4hZt77x6o3zvuDHM1BNVVX24rnyVxr9yGrjVAyTBRLaPkPwhsayxZ4HirRFhrfmffUr8yFT48uMncQgey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xt4KJBJJt4nUmL7dgMa9sXouA49aRmceYubnuzDg3HqCu1V4mzwLXGFbGTKYfCvo87U48sAWb6buEh5Cpmfg6aG",
  "key1": "4KocAPmZkTaGWxXHNtZkaR9MUxDw6j7RzvKcjhDL7jSM7DwKyzQTVRFr1jPUZcQ6untmMNM9aBa3EHbGR2J5dpb3",
  "key2": "3cCFskBGiRQy6H2FZYfhmcnz9sxDCfk7kwhWFsUa4WqoJidmhPNmHyotThY4tJ1eUEowsfhNugM7tbQ8UH65jq4Y",
  "key3": "3GajrKQ5Y7qCUy6HGunwRpgRLFgXGhTC13TSBc37aEp7mZs5QBNtD88uZdWo71zfN11mxnKPY8x99GF8pix4AXMo",
  "key4": "WBuxfWyCz33mUB6cq9nPe6EXtwduxrBuBZ6zunTEMGEwBXW6va4Y2XX85tbHB5Ykems33UeQzWPpB1af5eccf6G",
  "key5": "4MiDkFX1Tf6Nurbmku9129EbkDPbHqWqx3BibZmGi2ymHGNaRkguq7gg4D9ECEvn3tPYSKGzW54rB4QBhkpaLeo9",
  "key6": "3WEg7JNmxbjf3P5myjmLRtMBpB35Nf9p6FbvLZRUyrqpYvZkP9xSnpUMGYzqyZDg5YvN6EQEvVp7CwueeDgSKWdy",
  "key7": "2YSSYfsSwwdVsdWwbFZUrrBhPYCL1QB3y1H6AdjNMW9SHAQFd1NnKGN3PSuzW94hBaW8KX6PUDnJNhWGFmWyR4ed",
  "key8": "2ZVPy7uAbai7UiYSHW18NRPQ1u1r8QjaC5FjYwwshSs8niX52fZHaaLQyAFWrrCrifoHn4Ah5vgRYDg8maXtPvKt",
  "key9": "3wJTeyDYHxTo3qfHtBPph3jBADQNZdkRMxxyTtaHAKSPuUoYDjhqRfrZZoJT8monUWeeg5H53LywXAKD5B5rZbup",
  "key10": "3bA26DqnTwBbpfnHLCi5rQjvWPLjKavKsdpycovpkczRpDTn4AjhSt2UFBEn5DvirRkjLR4vtUACtDqUKf7svSdo",
  "key11": "3tt149CguBxTMasf1uCJwvftp314mgP6RCyMR12Vahx9NjZYk9cZEjeGk5fNdBd8wArkfU6rU8NnRhzXMWQswXjw",
  "key12": "TfeEYmm8Gdf92pnMyENR63vEZzJ7u7YmbqcXcX1pQtMzWj8JyYLG87aptHw7Yc14YrtpcEp9j8q7pk8iJcFXo55",
  "key13": "3fosMTYvQGHCCbk4JpJKcEVKio8T9HTQjjzPwnucjJbDZQ4JETuS1dpBKuzsxKHf53soXUYHZLCCRMHMZLvxKSFV",
  "key14": "3tRLupQfS7CDzg2EDfBNbMwZmRwaQeoUXNo3EvzYRzbmZvaS3Qet4iZTyeujFWHGX9NLBK8aDm8rvfFZF9s31NN1",
  "key15": "3Ttq4ZFDx6ZoWowebEdk7jCJ4nouXb6E8AQn1NZRSWJait4poHRu8cTtUqyQswyQbUMjDhHyvuic3LhwB5irwYdP",
  "key16": "2XpnVeufVDKGvrpsiXqvcShc9R4CSXw4oAnGtbwZNDNuuYYtRJAexx4AxayVJA87eCth7sHS58pCCzkyJiqetp1J",
  "key17": "5LSWFjd6NdhDAf4vxe9KoWXpqfMr6CVM35ZqUQL2FoM9Vh8y722KT1quArBx2xp8MaAPUy9wHgnWmria8dAns2zd",
  "key18": "2kkfJUt6LGShTmdAr2Vk32x96iW1aPMAD6myecNwvgM3KXBNG6vzoZgnMpX9buqtv4Sq73J7L51BLtuUKnTEdj3M",
  "key19": "3kjBpXAbTAbMt1gGAnBhgoL71xB4jQxPKq3UfrVBikforrvmUrNP7FCuE1wQgeZS4V8DvA6gPHEPDCtWdPAPAipU",
  "key20": "5ktUmBKXUzNoD9Sp6ybcDWQ32DPD4Tz8aJYcpZD8K2joa8LzZjQv7szdnV3ENHz2c6DvGXF8Wa73Qfr2jN3KaB8z",
  "key21": "4uA6MmEJM2CsYAopic6vryTxc5D3wZBmjjL1Dwau6xkqRrgVJffzboswwLi25GhsL4Qsi4q2VQWwdBkeBcphuGCw",
  "key22": "42PaeqDnjnFeqtJpe5ynPRngsXjq9RdyDS6PcFAe9VQfNYzLE53FQdubnjSMqWJzCdBwjo34dXSePVmBu2BakSpY",
  "key23": "29tPMKSoMJ5WVo8W9dXReWgxaZtejwxYtJJF2PQCYZMiaExnUTkukCP5USYYLxaoKE56eMVYm21sCV4tiJ2yn3Td",
  "key24": "4zZFR754huELqcHrw7XEYFNnsvMxQJmHnKGzVMwkshZZRwMqp9Vhr2nFmw7VxQpVRzrn1xqPNixwrHL1JA4v1xdD",
  "key25": "sSPHUEWZU2UAMrTEKafYq6cSSx7JWvEwQ3JDrPH1jvMHrsC17c31Y7SiWymKFh8is24WETUegzzkjieXGVQRUvN",
  "key26": "5SLGyXHpMFr7UobkoruLS7ji7nfqtcLMieEfv6L5VCygzKSaPCc1H6nuswAfZbjesUQD3xsvirqyAtN3eQzV3Wci",
  "key27": "59Q7BST4yze5gXuvB3QgAzANDR4WsWodA82EGPbvaemZ1PgBEJB72zsNA9VxwNFnqG3CCbfXz6QaVqkpb4H7TcgY",
  "key28": "3WUvxawsUxFMGvm6ZPKdbBwNnYegEgy6eSTyzZBXWE82rJEAydneVCry4VqNSRdKdH2qaiy5h7XsXDakbp8k8h6p",
  "key29": "5221dpCEkSJxNrE2bM4DaUCrNysg7WexecLedja28si8weF2wjDRDjRisJ7YtFpfpBVD5z1YapJ6xZmFAkmgACKK",
  "key30": "3pjw7vtErSXJBusX56MD1vs7xoju3LdNbMa1oLvYeFUXdtNrbrniP4oFpNhJ1KShrzRbwaNRuyx5WDcwiZrrwoN9",
  "key31": "2xgL9Eu4KhKneDHCTEipD4bjyRXrkatEnFd9U3dKaDWtfhwko4Bsf9BeNekcPKgeXeK2psKZvU4PqxYzLTSFeEcb",
  "key32": "EPnUrRMKFutV4qYX1EM5jKuqCCWDyvmw2KUDtqqbFwUtxFf83jNVHUmxGq1Hui158tA484FKZtHLTvh9vdvgTsj",
  "key33": "2iunGfnttViMKE2PQTGfGZuQKQKPNbsLxnT7dUUpZ7QnL2aZ1w6yLKWDvxRarfgzqZ7AM5GzMiayakyehmBN2gie",
  "key34": "A5KdhUZuEJfEQa3EuMi7zKM36bGvsY3oafBU2qauZ7pa9UDHkCyqzQQhzydtPYcWFxVoCZQ4JSMMR7awWMyjdhm",
  "key35": "2vVAhVhZi5W18tm4ZxHHUuhaRWyL5zhq6Gmp1BeCtLa163DaxyZb2uw51qGDF6mf3FRgvvAQP8bCvR6hyr1b9hNB",
  "key36": "4TzdWfZAh2GLSWuXU6BY3x4kz1uaXVxnj4peng67xE5xVbddiFUtgWFwwuXSe9S5whsMFSqdtsKKeWRhcGJXYmyQ",
  "key37": "4KKx3QVtZfo1tAF1HCLLhxWjVG328agaPQFfzVyZs9DjLLEg6oV6d831iD1zupqCr8n9BJfeDPER4b53Zf384r26",
  "key38": "4J2jUyPGLpgzYMfJaXFHn1AuNCGYqmihoj26PB5Mj9kSoTMSgYn2RyvqYYKvjurbBDskdrEMJedCSvcvcnGu5wQo",
  "key39": "45bBBVEfxQVyGgAnQaxfWcdjZdfVaxekYQ89royHEqEcDaLUxY4sZZEvugybPGyiU6gcnGuSKVyEvB5PqQ6aoZGd",
  "key40": "4QopWrDanNoH14e75QB6nx7exHDjMip7kGSopCXTWqn7zSzJNUJpB1C4JGjaxHNWnR2PPaANeVjHX5YB2ncGUoKJ",
  "key41": "3BRg1YDFCATvSDcVYp3HacZ4WujsgadzFdBUwgG4nCshBPgFmgCXdzyiXPYfKMvK82rBh66nb89iLzYbMngNuKCF",
  "key42": "4ShgCz4u3av5pXg83ZQNdpb8HbwdFGbMjuWCr5himC8eEP6JbBzQMuis9X2QBwuncXHYwddjTWFsEycyx6QqrYLG",
  "key43": "5f2sBnrv6KGoUeQRTP1HYzpzn5LLdvFr9sWMLuZj4GKJsvT1X342R3zsJt5Zj74z81azhs2g3Ciyc47p4rguxk7D",
  "key44": "5bJVnsY1y7PbumnJPCQg7P2NXeMTYSy2qoQxCyHmUYbJmWdaB82dTVwJyapVvUVPZ1fxUKL2K21hMTD149GV9XRE",
  "key45": "33smW9258PLkTDw2ZNAFEf3adMB9ZULVYox8XpDUmXPf9aKWjVFBBzpvDGiCMFLo75v4tLqYnN5uWBCW51aWjPtt",
  "key46": "5CBr8y4mVZ3bzxeUAcL6ynREW3SnEif6qTnVA6LoF5FPiGZCH7LhsqLCr49ekZ7Ac1tuLgbQTYXqcHHqk6rGLrgz",
  "key47": "3sAmkCfD14TScegwNCgxaDmCuYDp1sdMH3WFMWbHC5qCCiCqUL5u6xNpYkjivpBDRHeFGZ33b1iJmQwrKxxcBFaK",
  "key48": "5Ai7pFWTWFMAJWn6GvAjgf95m5mp47mRcz6eL2K8taJBYQJrqTSDLhohsjtstbWsZsMitWKtraPpRAbk7tpD177R"
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
