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
    "43cP5uNTVFeCVsTb2GMbD2twzhZmbYCGp8ufdNRtqU1NkzT21qriUnJFmUAxdPtzWYqzcS3T8qTnezkUoxyGkYaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gh4xJ1cAQ5ruShA71S6NFCvVMACgv1bR6kuLcn8yJ5mW5rfu6fEnp25PVBTXBBGB9V72QPu3BVgt5mGUeH9kEH2",
  "key1": "4HUMZeUHWFDTxddZD78dAviRZ23zUJgKiPeLsdpATEwZ4cKboZUbQSZmSQBStTNgtvmfFjKFVFJ6N8RUHXpWAH2C",
  "key2": "vKkUTLB28gsS6pvZJGtAqjyvWHJpt2PSByjQKSbkxPRzR8NFXy8FZ9i2yN7F1aAW1XERC1RteNt8VpUig3kyKGB",
  "key3": "54fjupvnwJnpTBssKWRDzJnDPa5DrWRmvzmpSZLrd1K6fBBgf6mYub2HCi87DbguJbGtHf7D6aJCBssF8iT5KNok",
  "key4": "4zGneWhXDoirrSFzJ5WjHPvwMUe3mu3kGAWvQA76gnQz6EE7rQAvNgREJfAcxPJaeZ7qr3AEhxDxw6YuzCnbmk1T",
  "key5": "3F63CmtW1UypWNCEh1EquxXAVmRxWRM9QNU48JXfki7tVo2axf1BTRV2Z8GWPqpr1XLcPWCvqndtutD1JWh8NxYs",
  "key6": "5nj73tL28NkdTChAu7n7W6WotQqMjmp7sy598pFQj11BZqGGBXKuE6Hs6teoKUTac9f9NZBcT26DuLrYBagnJqz8",
  "key7": "3jaQqUhAniFTfJdJiBKMmS1wftQJAMNgtQVU8LbcCRKofBj4ATHMYy9kp7wsDBHCUjzw2xd66QTyqqNVoP9yorC6",
  "key8": "5n3YZutVsijfvra23F3wtMNswYSm6GcNRgH6D8ZmJ9a6Uir8LLKogwxB3e6KC4peWy4gcfSEwZHTaNpyVNLnRuXm",
  "key9": "1Kh1n6t89T7tmJQ9ufF9JoZnNzgydB9oGLkDP77aEW4sVCBR3r1S4SnQCvXLmJgByNhW5sruY9xmN5YuCqjP7PZ",
  "key10": "4faEriUNtg3pw3VHEohauLSgd8hM7NiNFb34MhmgFcWw3wusknYTuV7EVNzRi9PGMvuLcG9cTpaJeERae6HaXHEK",
  "key11": "4LYPgFstoUyHvKGyXrP3KMCSCbL9SmCwxjBJRannUaoDYVrxXN1v159LiBK7JQ9Af8odAmMx16ASMp1SC9Chnn71",
  "key12": "3hiX3Etg1XzhipEoDZDBRbrv6oqQs8Tm7c5g67HmXfo8Twg3FjxynjYjvpGd6oByQeKE1VTFr87NgDAuikVF6Va8",
  "key13": "FiAZLhSXafo3sxYhAfpPAJAbPM8krEDN2D414jECacq7rY56ZkdS6d1BMhBA13r79LBcbEoQvqh4RieY8fb4cco",
  "key14": "YAidfjtXWRPg5kochvRvBvFKb3sqZRyuuq5HN5dPgcv79thBfb6cuwskBBXTzhsSAHegwPWRfBYqMtutcVzUAaz",
  "key15": "2HH3vqgQ6qn8a3T5rMEhtJDfKjjL3eW9gkuoXJWkyXeHQiyzcM1okubd7WHjAr5X6NenzyWZsBWS23NBxMatAo1E",
  "key16": "TTRTVa61oEvTtoeJfFuBjwVT4xXS1NBKWHaYDemf5VzqvWFgYBaz7Mxx8iAaTituiKkdoMJCZn1oSNyd89MwoLy",
  "key17": "4Ss2bYF12H2ZaPSZvuXmAZbTPrXiEsg8RdXJpLuMHajt3cVV9CJ6J92ckXmVLHVWEGUZnuh8Hptki1wAHM2k91iU",
  "key18": "Gr1jPMFUx2G86G1WqtFBpzK5RLC39miLycYbjVomSM8q7GUGVWuLG8EtGqRtq1a7DnPWE6C4a8TGx9DWeoXd48x",
  "key19": "5ipgKZrFnc21Zp9zEjwfDVicyTfikDgzppEhpsRYjw6VcqHwrs1EV4WCaQYf4hvWSFWzDaEoR6wShcHPyww3XXrh",
  "key20": "4VFKCDVcgtHt6bGBvzt1cBSsDr1m47f8EWBvMZHth1Eqm5AYKEV8zm2DSm3FwmtVz7KBKHZQ7s1MfMZkPCNj7iw6",
  "key21": "42Fb4CL2dwVzhgR5rxCZP3s9cHfm5xFt8JxcBBJTAvWozge2g18UFXBMB1NXqkuf8hZvUgyPjVfm2NJzwAHEAJAF",
  "key22": "5pVp8TGxc162snpXBxfUByEtT5687XbT1TSarhnLUuQRVbX6rSgzPZVa1zEkWitxwWuU9JjCw5DZFbkkzARoR8E9",
  "key23": "5PaiyJ5ou1cVFyCtAZsXZmSKZJPCpdLb2pJhrTHpj9ioyefJoxprS63nYigyKbKx5UZh6ue8EAwbUZHyCNV7mCX7",
  "key24": "4J4HVNCbRXuwxLYEFX6e1Ep2maePGf2U6zr3ipaU5kxbaCB8LE5tawj8vs6F3znWGWMxK23yQPMX3D9WCVZgydaD",
  "key25": "29BBDqAcx9hkbixJ7XcM6GsDb6z5L1n7EdBJGEkvXjGX2WWtmudXYej3bK3CN6CkUFCJrBncxXjaBdPCUQSxVYc5",
  "key26": "33m9S2d1rgY3G5rtC5C1XBsNeeDxWJe1FUQueCQXXbMmTaQBBCVYv5B8nSrrTv6p8sQPUUU2t3C5ZvRChkpjYF4P",
  "key27": "3XHNxwS4e2XnGXSioquD4fYL3swHVYVp9VhwEYK5MwSJWB14xmgkg2Px9D9BNVGxQDTc62gwiJNQBp17oP9HvY1D",
  "key28": "bA9PiggkmZ4Hfgv7RZK3F2ZAH8FjxSzjmmfTXhWKtfuQmvXsCEZBPByhuy61tPWbZhfE5B1KkueQhbrE3FzTMeD",
  "key29": "3y7JP6aRErxWtc2WWEzNTn4nEy3fdHLtR76iT3b8pBxmUFDPRb886c6GSzVzn15jpoecpsuTdcT3LjnVB853JuKP",
  "key30": "62JBwGRS6tzcYoyNjuEAwuDMUimpvQ4jrFdFNo9QpdHTmZEXyeop8bnMriqFyZycenzNUJVWUQNk3JdNLmo17yuW",
  "key31": "Wz2N1yyCTTFGFtw516PesPvVSMBveePTHFfEcojEvJjfWs19yUYUsffae2TBbHhYcLrT2YtNdEr9sNokvAMTA8x",
  "key32": "57o4qDVGtE6s2fWmHUbrqx5EFWRn43dqA3V6Vbm51nzZks9nmA5E3xnEaL84fnKyCBwgiy5suoasgMnFGboZN1Hb",
  "key33": "4J1UpcAZWu6yD5f1oCZXBGjVj4nKTNWU2QDqtoFt9H9VDCapuohZLK2EY9PKuYQtTdTukfWk1MCc3RHtL2rLe5ZB",
  "key34": "4xng3GvNcxdoJhgb32tKUiB5rYgFcywBEawVGTjZFUzBZSBkanXq7kJq36hL95AHrRsfL7vwByiJ1oaah2quy4qb",
  "key35": "ncwkA4mnAg9DAfBKXjY8tXmqQ29witQg5rNouxBpmnqBUnJinVq4TTa5RUMfBBJ73bCKMSZbFMjjEzMT6VxXKLp",
  "key36": "4zt5d6rT13AmrKe1V8R4CHXb2BR53FXCeHtf9fzR274EVfd4ScFpjU9KgaY16cY1zAXjQn3NkxqGhEvdAtr1Ci4M",
  "key37": "4rtQvE4RQFuJfwLtW1jsgKJzkBmB81Q2rnE1D6ZqSzdzMGnWfEn7cuLBozUQJGds9Se5BLhaffqPvHNyf4L6x4GL",
  "key38": "2RD3cRj7MNSq8QYJxX8nJ9b8itAnHnB7BPGevtnyJP6VcKpvnVTCbZNqhJtHd9nD8u4hqkNXJAxbevwWBghk5ahk",
  "key39": "eYGVR5BsdL3jeikUeDiM66YEGMCG54bHi7vFR4Tm7pMEHuXkqTFM4UkhHZVJHdGCfPWi1FoBgWAjdcsNtobfxbW",
  "key40": "3dYr2zXoJ9UA4nTLroMpVj4awgvZHHuamy9xgkeSiqu1WNfM78Vc2vsnRu5cvWDMQWiKoMbJq7TBhmSof23ZMMd7",
  "key41": "5RW9YCFdnMYWatK5BCyonDJWJZomFUfZce4w7Gq83ZZutXCUiZEZNjCu33Yuugfb1KJxSe7pTy9qj66QNZkRj9Ln",
  "key42": "NzYLx1kAfQCx6mYCy37xJmj7WE4Znrtz6irVu3Ub3ztcomNqsP8JH7puYGuiCCA64HbR6wzpeRvuiVCE23egFA5",
  "key43": "59R4gwqo7Ln4287uKLQkxLW8yJ7ziTtJyh3RabTnps9hWXe1hYKCWGJZf5G2cMQCfDTTuP7MPPrfPWowQVjaYhNx",
  "key44": "2wtV9t9skwzsmWqoFXuhQNYvzmRJFzAsiW6f6N6UjrRizjR7V8L2pXwW8UuWNYSDrAxLGGi1Va29GkUntHxJmMAy",
  "key45": "3QEM2iHAFmenJa62cjk8BGG1VAZ8LjD5tZuwFoqa9b3PXjN4LRgZkekSWswDdt3Y6vKd3VdKdZoPU42gzgfQiUXB",
  "key46": "3xLCyWoLExi7XUCZTgh7oybRCjuhdFBUeNDVbNjDbYBFuRJxTAi5GuCsRNi4JsiuyLRrkHqrVCJysygrmPQRYUoU",
  "key47": "3mQzpraQqDesE6E9KtvKZEbt7n8JkRyKLG4eYyePKp8brtA8VfZeHDUsLMiBPWRNoHGisWpKfnr8maDuwMtfBWQt",
  "key48": "24CQVZVPbHscEjQZRY1A5gZXtuYL5K3szU31Vmx2JvzwiYTh5diWETHi88tBgHYyXaevvsX3Q3z6LXY3BE4aHihg",
  "key49": "Kmw5XydDFkSSZE5tEsDRfU81sxQuEM363qibm6cf5EBk9UFDtrgcHyHPyQGhsFLCncSgz1u1LRvjheFw1Pv3sdA"
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
