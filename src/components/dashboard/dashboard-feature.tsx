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
    "54GL4tEsEFWShNvbxpWX6fVK3JC38PbLsNy7ouEDBMSvP1xyDuCiRq2pc1SAiTg1FPf9jsRLiMCZ2Swr2sNpYdzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24iuZ8WSGKoGXmFYocWMf44gpq6iapi2fbmEYy5SDYLDF7azNmBoBZeEkZbFAJAPJ3pSrw8tM8oQEPbizifT4WEP",
  "key1": "47bCWeoUFNouuo7nRTayAPeXWTzo8GyQSFZx5zTxw6Uqx2bEcrWuz5vCwHX8wWc1qbVT9LDmCCrTyyhDVjJZvwxP",
  "key2": "42pWEmdx5jGRtrpAep9iS2k7N6yiZDxAhQzyez1HU1xg4XNNUwasfSwDESQ8pj7jkz9LvWKBkbnxTNQCNXNf5J3x",
  "key3": "3T7159MADkqa6CkpWNWLXMfGkzMSLTBzpQfv688FD7WqAxZQFNcoPeKCHuPq1G8t9C5sXsMqNvbpCNrRTUh5D9Fm",
  "key4": "zXPk1nx7c8JhsdH1KuXEanePXZA9JWejZwPHdWZnyRorYeAfD8P8bj4vZEu6kwczq9cRBi2u88ebsxhiTHv97yg",
  "key5": "3M3x41nnMXiXGW2KyeSfn9EB8GhiPMxks3HTRTrP9coGrmn31tXNdsDMoQqUojM1ZwMp9ZnW7a2nuuU2nnytETsK",
  "key6": "2TUhp6TyhCHdBnAGd5bHNhicTHjxm2yfLxDNUMwmcfkbZsxhdqbbJt5namiZ1E8B98zBAySz1WxfeqD6CEk9iZYv",
  "key7": "627mmYGuR9B3dAzMgT5Bezf7ST7aEZnKVNaTxMXbwuaKGXv4hDdbN7BLQszZHWVjcuC8vHG8D4qdwE91A4FzQQBS",
  "key8": "5owPxaWM4zMbRJDRA883QCH32yjNsFKHQr5zcPmh7EQwQVsWDXAbSYkcC7Z4A8R5CtMAZDNXawSzSTjS2WL5TxTN",
  "key9": "pias7TfNAbLqJhhojrV383SQPDyWhXfCFt1KyMYaVwcVEkze8m5pmv1DepuMG1faoPcEn3bmBJDLePJXY7mcY7k",
  "key10": "4AZJacX9RfKmKq7F77iT8VpjRSpqasozie6h2WUd8rr64AgmqVVBYJxCQu9GKDFPBbToWPVrNc5jU4JxB4qj5gzx",
  "key11": "jk8QbZMmcMgfF7zyMBNPp19AgMRzncuZSWnAabk5tUqRRhWsC8yGqD23t8S9eSeVBUWqmddKGk8xT8asHTE7Gjr",
  "key12": "2aeEF9fVSKyGfxLeV1JCpwHHn1UfA4yro9FF3RGqQ7CX3vcCWsWsUHm3ydYkEexyRkQqVj861WZAYi4qQAUMEYEF",
  "key13": "2eCcmempq2DSiKq5WEr2TRbJdnPbtw1ZP5UUkLv9aZo7yqHvtVpbmrxuX47TgFCCARTcnTYk9MEQMDbo1NL6WwqG",
  "key14": "3dpwjGPpV54z1PLV6BobHTR6b9Zae48LqNcRgHVkP26dMNpFUL8d4r4Hc3Q6SGhpZGTiiD3hZVngKBYrDuXnqXtX",
  "key15": "3SSbWvjfGNPkPcBNZConGYJ4gSqUexmMWGpSF7ZWayNyxTX8DsJjueXutG2Kfqgcwrjd6uiGfTdJ8ywPbyWUBSb7",
  "key16": "5jpkXRrLegrHSXmsdg2623dqZvLGyWkW4dtF86X7PFqPZGpMQ3yUJAEmwmEXQqdDpKyF1PrzK3ThZbg69GjEk2fK",
  "key17": "58CBMkrxyTmso2vuzA7oSJda2zEaqyEBD26ZtpFATTo7JwUGTNmmT837sfDyV4PFTSCs8NsKaHeBfcRqZY8Qa1FU",
  "key18": "576qS92eM5LKbALev6bf9N2aX155AP96sbY3VfwJLRiCgkBSKeCFYf7hpEptL3rTr66e5hBLXtvsDNFH9FXGJ56k",
  "key19": "5MkFcwE3KeBrXtxASZyXj7TJ1w7yzFCaN4Juyt1rBjKHAohCcQQ6DGrz4WEFbfQ4r8h2grkX2rqpd5aP4YPGRAYS",
  "key20": "QXK9HNLtvPDuZ1toqddNxex2HWbGPuRiXUGthohiWhskkSyWS97PNuxQhniEvGbYob39xBgnS1r93FgynwJnJvz",
  "key21": "GMkor8SfStFFbrFdjp3m2e4t9wsMSn4tkKxMUDFApyDbQDRcQiWfxhQfTmp2XqHjUZDcDrqVTRWw8Emfh3deuwx",
  "key22": "2LA7SWQPgjuSs8fLe9kFZZkNFUrtVmNEbnRnLoECa7y6MdhvKsUBRKrrdE7egP7iWpYsfPo3U6aALkMWjfiDvPGy",
  "key23": "4YgKQGYqfnyDvyoBJKrSMaJiVzzov3Lzbxv92B21KnPDwtwPWRSyVgi12RpMfY4GUAnEbo6VxEae7odFPCZWmoF9",
  "key24": "34zpxfpesyaW5HjqF9bJzUyNcSWnv5ij8yrhyVDwpfUoXm59vTxvfPbQdLK1XG4SxDdffojFxc1wygyaMp1wABni",
  "key25": "3wvG1UPzi2mN21KWXNQarQGAxnubuSKdvPVnqdEfJDiJvDLnLka2wvxKawD9DmwVEAaVpdMRJKMqSqR5R9Ya2RbW",
  "key26": "4zcUHGYnaxtarho234NN9DYq6wSxhKbjgzpYrnSNFZ9NYQFQKM95HwdA2WU6yR5kVvrGwWCXxYm2FxzpULhibWdX",
  "key27": "2Qhbxi6JY9cepXRDJuGQ2N4GTxdPkmiRqZrnNZe63P6BnBeLRv4i8sVi5YYSXup6h2T7hAGVW4PnprNGrLvtnVAU",
  "key28": "2w8Gch9JSWNjP1tbBMy19BKUtVJwbaQievHaDAHHZW1ZSdjdhNBe4pJGWfghvTmpNtf44DVKU83GVqU7VLe4K31f"
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
