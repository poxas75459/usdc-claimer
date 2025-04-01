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
    "5gEqJLj2pijxyRaW2cy3DyhschQeEKwuEX8ECeTE1rxBu2dY1vLzVtuKHBvB49x2KUGjpQSAW5TKedxoh8mhnTDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gMQoTc863ioRkrcBs1Sq4fK8qfawsyrmJkbts4vBDAMBYGytxHek8UnjniX1sLXJSe2BNjaYFPfgh4NcmNB62us",
  "key1": "5G87GZNtCjUfcW3MRyHS5i5XrioVdTb3ahziwyzVY4wC9AqRf8UaLdJ2VKqdtib7Wkht3xijPswcW92u2P1wnNFu",
  "key2": "665CPnc1q1hMpaaaAH142Cg6S5KUNuziHz6moGWCXEFphs4QwdhrA5sPB3BM6Et2Hj8Ldav3Pn7iYChSBC4VnRbU",
  "key3": "5zS9QFzYMBvd3bFoeYz7Lwq4yX4LJjVLf5gtaBW1aCiGLh4HC7DKpQqzQPTgEgwFnkcd1zQRuaWDFY7KsmY24NUE",
  "key4": "2HgdycLUXFLPdYKPG2Pqcg6F9ToZq6FSsr6pyv4YmZS8p8665y2pUTypcwKbkcTN4jGsXyPu7rZVvs2Hkv85GaRK",
  "key5": "48vX3LJdfbMM9XqYdQeAka517fFxSWDtnzuU4xiZDkLP5EuRxzdjRSWKNFUeA3xq7nDs7Ucqde7uS4zbYcnCCJ3E",
  "key6": "63KTQLKyvs6BpoC8fEWmAf7S8ESgLdAvomhvS5T8rvDZyQoeifSKBsrY7BU2u4bc5DVYvvreC8vHuEz4Y2VZhqsq",
  "key7": "ugPQe4gHG25TF5Pr7KiZirGNer3hpiSMaGXh8m14Xmcu1iabQGE7d4LrvP7BSNL3gJVvdptMFkmAVNfNGXRqCKv",
  "key8": "3mZgiuhFeya3Gg4Bf3MKGjDKh6zAiUy4ELnLzDNmuPqLVikMJgv8v9B8duK1Xky7NMkKRkzrW3FDz7PqRyWrNGrn",
  "key9": "2ArX8VtHSujMgxwNp7d2FVYt3wpZHYVVND3Az7Jps2vFgP7nYyeCyzP1fXJsqxjFAQG5PMUF1MEAjfHXvWr1LViS",
  "key10": "5ntDwwAywjZbZqWSwu2g9VTfJQAgXpBkDayzu28C11yunRmgm8uNXLKPgyao86GTjHk4FWTqn2VrefkVB3zamjDZ",
  "key11": "RNFNcQSeBEkoHjaaadSazQgcLH5cwhZNht4dzXaVNMHSvdbeZYJEk7M3nyoMFM9hgAqgSbGWoMZYinTCXCvhqXA",
  "key12": "5acKxfQdLRLwK3Gu3qLJcqAuPMgVaLEXGJ1jTNPYxJTNdnFJu9mLSX6BYaFpxiiU7oHkhbLLKwL7WMj3JUPrjqtm",
  "key13": "2mCWQtwTmvmn8LGA8tHmtCxUnkqPrVt3MqSB8YQap43kMmFovAvnsb5uHPBNuxJF2xjY3F3GRcy3KkBqbr4xpQi9",
  "key14": "5xZh4gyWHg1p8GCrMZoUBzecahriBoo7XHcNCbNAdTigQCwob3ShCSwDynCxGo3FdJH2qRJrEpXEWzsh1Ed9bJh",
  "key15": "2nFP73gq1r2ario4sGzbvB25FsqJJ13sHb9uXTCWhNr8dR7HjqYV9NooMFE71v5Tf5sa8kV8QZq1LL8RzAQkoWJF",
  "key16": "4qQRceTfTWrkNQWRFhnNi1YYhAoSYPUD3N8RwNDwMPaGFkDbHnLHUiasG9oNYD9Rac6BEaKv86C9WjUchdaUMQoe",
  "key17": "3M3Z42aAXdVnPQnDDtFCRnCDed4k2q3Yn3rWqtx2Yqs8YYJdpUvypqDWzMPkDEqD3uyQ9YdCpPKs8i727FuGdjLW",
  "key18": "66ErHc5hGBnkexwhooFNrcHb4yVYdUNPvf5ZSS3CXp7Ta13xtarJ9dWLKFXEXecqybxbtR715Gaf2XmEVTB3kUu4",
  "key19": "2QJYy4zscMcEt85V7m1HnPaJrHc8R1Hfg6tDPyKiRqfxAGJ4vASzBRagAA78cG1dMZjao9u27GXXsi8bFKCdr4oM",
  "key20": "2DGGqi8Q47gzXDa127zdpk7K12HaQyj3J3CG7u6fu9DjmFs21wA5wtdXZnh7zdCSU13zupTraPrqWubuB4HRNm9p",
  "key21": "bBn1WaaMuwBf7ESXm3vQKj9DJgUXoE6yTqb2iCCMo2dKeH9YEvdHsHy4eA3N9oK1dv68kbQMKnY1NiQk7EEjtKj",
  "key22": "2o5tdzDkLtH1S2UjwcHL8f6D4irkziW6KaRNC9BaFMhgQJEXmGv4ECzz77aLr3NHZNtRFVnAhzENz67MR1sVoxvM",
  "key23": "3wZnPHYw2RPimV7fy4Ai7FQaHZ5k25VGrfb3yRoVLYotQNodVktkJxvVV91nAzJAPsLYokYu7BCnv6XdGTn6r56R",
  "key24": "4xCKSNAYaqMQtgaYhDuDMsbrVykYGeDxYfYLci1NZ57pa5VczD46F9KGs9E8HPLtVuxgMB4sau7JLy2H4Us3hxU9",
  "key25": "2tnH3vacdpxsubBTdptKtifdMAPz7p2vTJfbsh6s2FUwSFd3geW9UeB53hVHh8MjGoHUQfAC2fLWK5mchkkk8MoS",
  "key26": "5V9GcTW5Uksg5y55ticFWh3Jq7MLDbSEcdysz2bQJ34reFpkqYB9EVx4oDS6Xhac3QBA6s5A7YGEhprHN1Syft5g",
  "key27": "56KGxwvBTYMjdQzzE2PGdztEMtUdjkrJkTRD2nTNgM2wS166UAeBiYFci7V59a81XoMVMsGi2eFtKUY8JaFBepmH",
  "key28": "3zKTtoQY2dSWprR4SdnYYjbmKWZ1Ki1Wus8NAh6sPpuRMpjPDzmXpcyE8FE19dLPZjBGM38fesQFxc1drjDC1Kfq",
  "key29": "2MR9SEgy7Ua62zdmKebadjqk85aozq7kuDXtnE7L6DHzjCeTiqyy2REyg1SamgEtoE7vjN4fNwm2WSrzWKzFhoeF",
  "key30": "5ng3fcLFw9zr4aWsvcnvENoVAvLDyXfmLvJvagcChXB25mwYpDUhCfyGfJxJZusxTUaJktkQJNPvMUVL5nmNdE5j",
  "key31": "2oUHHzSAdF5gsnR1TwUF3S66oiYreJ8NpVXkqe7ifMfQqRuWFFEeConMi9obgdirDDcLYdaBNPwiSz996PTNi8XH",
  "key32": "2b5X6oVs7eSHcgC4ieWiRZT3yShiJ4UBUwWedxufokuowepwDQLV4D2iRNfZ5We3u6EYMWUa3FNH6ckSY8j6jDDc",
  "key33": "npTtk1oiR5zoHKazwLharVMFMhWrWboEHkV172pmMguCQfWrwpeVx9c55nE3P2YzPRnKZ5k876pPcKJnxzcNbJF",
  "key34": "2cDxX8LeEWFLGCF7BcHpxF19W4Eke2ii1PzHhfQUigqLDYn3qgBNbgTy3WAp4SJGtNBgjEx7uiLu3486QUt7aoUj",
  "key35": "5fi3NELQcgPSyNGtHQGscwzbbX3owGmbFNmD7DPrQT1suqeHGY1Cw5DkqRGxrV9B5cseiRGYzodmSXombcky7Fvh",
  "key36": "38FuTZsvxdsnxJ78frBSNWL8fT9HujR7LPFMXRVFfvAaAVimb5wQM8AnPEYcTK3nJvAnvyFwAowKnrKwgH8AkUHH",
  "key37": "3enC7A7HMRS8q6SUYh44LY1DBAhCyevgceeePa7q3TsyyXXqBzdcDASmtySJhnNXAzS3jy8fQfQQn4SDJnWY8SQJ",
  "key38": "3u2FFemA2RaurRHntH3sGKx5Y8KGJHWZEa2dsjqi2QFdHwRB5sjhipjby7R6F78CjVuaXdXNRtma4efZt6oqkN8S",
  "key39": "rbYgJf76kAqEMz3NAtsp79umbAzamc45CgkECVpvbuV31GM4WRk4SvBHCzDDkzBQf7BcFXSiyynWrHtT1JhwjsC",
  "key40": "57SzeVJGTb4xjHymphtH6gtXQJACMVJNNVUfvABxzCiJSWwmsNAd2axZjUTjXRuHPGmqMwKTXr9JtKiY9V4bcR8C",
  "key41": "2wTZEA3BPfYeMtQHEzq3D193Vmu5Fgyef54btXVq6ZceWLS5h8URLrnrCq8btmPHc7NFkgjHrvXirtDEgjSn2jjx",
  "key42": "5u98FQc92hWrem1FfeNV4x4fFgX1mvYfLnrtYx6DJ2gNnHTt1K3SzvTTSypgQp6xWg6YUxpHwQd1sciNNmGAKPgz",
  "key43": "up8y46FAAsk2UPPVKkg5UVrQL9E8bqG5L8qkVkWJznqsRy51gmhqXMkoUDkmsj5sgC2odGhWtDHqkksMdk8pXFL",
  "key44": "vow1XVEgKJwM3GLYSJo64bh6ddrsRp8PRKuqobWTLKGs7aQR1jCndN9cyrT4y3K8FuHZj11gXD1kcSrVhqxBSak"
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
