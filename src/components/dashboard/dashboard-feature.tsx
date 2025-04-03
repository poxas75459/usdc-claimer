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
    "55pkQ7XyuKVCCRJmozgsw6iNrQx3pxMtJyAEw5YmQcQkLQgaM1dy42E7rRgptckWRY7E71QsyDGLAUH4KDLRxccQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ARCQkvnby38RPcHVx3AKCbXjZPQ66v3wZnYG8w9jwCEzS8ANj8ZBpjwCyAdVjdJRXVNBzantjCv2r8MDKtWgxmF",
  "key1": "5UqKs3cGQfNpf1kWgcDSTaLyKs2Lq6J4id4MC2imQK142Rar5Em3LADi9KKZLA2ucyg5Ja81RxG6rScvNHbH8hd8",
  "key2": "2ga9P4YMR8WNoy4sAcfjTMywdaat9bnNHp8WyBsQrth2uAacora1ogw1BRbBbpPRh2nEUUxtHgUkVyjC6odSR8hN",
  "key3": "2uPvd3jbz3dHyTSeYwnTx1D1QTthBkYXYDBjQwP2HyeVFqDEtn8PW9cCf1KZo9sBFGuqVhEiomBS5JeRoVFn9oRo",
  "key4": "33qgoS3RSoEY188pyqoJ9VWGimSJU2g8aqv5Hzttz1vfMkV9RFWdWpjPDGbhSQjWHHLLsbrD3FCokpr8UtFuobMG",
  "key5": "66cwW4DUHNLannUv5GyVWc6djRUXctjwkWxaHj9Dvp2arKVNbup8dXSKLW73FDmLCHcwnxtoJEZYByBxKGJ1QTp6",
  "key6": "ajBBPLsrrY9UHPdnVoNc88ZW4fE4PwZoqAFTJukibuCZ1BMuz517U7kJtgQsrwTmGLNgaKkwXS85fD8yDodoKp3",
  "key7": "3sYX9nSZr7F2MPQzPjoFAjvEv57eATS2f5pnjSyAzrtgShVPLWXGxJszFFqkDcRgoFrgGhxZPCdscSPWDiAoFkRQ",
  "key8": "2269n45SXYfj3Qwgf1VLQiVNpVriSMrPtyD7zwdNq1TSEB1KxmXV36y1CTSWfUokteyrWz7suPDyLQU8ntGD3Vzt",
  "key9": "2AYnQynnA3bv2sTnjMyJnb7EnsMUXWijAhXVN8urZWSsU6wkZHfz81ZbQPntsJQfNDmq9M4bsgZg1hem1uXFZLZ",
  "key10": "5v1zuV1YEEsk79w49rLxhqHwJ4SLMpxHzAL24eRFdbu3J9udFrdtwaU65b2JD7xpuBft9iFCCYxHHfVLZw4TdKhx",
  "key11": "7oebUKhYeF1MmM4zCn1z3yoVbEQi8psuJTXNx2JajXp5XswSkV8LSg3vLpCXXxCKSSJvcP4dxSCsmQoUFtZwFsL",
  "key12": "3yupi28wCuZ74aEod8CyJpuMHK61D5rtD9UogAmwZgMEgLZz3ud7zEUSvY8h2vM2eWKK7ZSnns7iGdqZgrhy9AQR",
  "key13": "2qrSkzNdMWfKk1WsyWBMXPj133CxdTupGaqsTwH12A7Y9pbexFBCmmTC3GJwx6LJD2KdHoCdQLfkBgSEYEVbsXqr",
  "key14": "3NdB4ebjZSzH5EDaG53EDkAr5SR61vJNRHSy8s2d1eHgBMog74Zxfy2XdXVvU6UadUqYavwQ6pzAqpxxWYTyN7EM",
  "key15": "mQRsVroCCKDKejZhuN2sYwQ8bvHBZRkACHVNAKe6LMmPKsKmhCdrySVw9bN3cgyra3kp7ERX6UEtmiXxwGgqVSK",
  "key16": "52dUsHGLycmB9CtrLFso5ziAou8N5o6qWfXZjj8gK5sX4KTu41RD7YFSbbTrHQpiSnGWMMHLTTyiR3CS9VrDeixc",
  "key17": "51HLE5Ddbkc6mPJKEhsAeSptg1TsMAPAhZSVGS5Hxij9HrFrvpmiw4ZquEPzKScHhPaLCRuvG8X2MsLL1aJBeG3R",
  "key18": "4tHZ2wTDYaKoUtxHeWVt7FUoMhe9RE7pxreKqjSiDYWf5bfAbcQDDh6bMYmnYkTpJ8eaMovoCHSVpF3vbbxQufJ4",
  "key19": "Z9tqT95zSLvxs25oV1ubMJg85KLeutehPJ7VK2Hm1rNnZrdHn4PTmEUWQQ1U2fR9Zp9sLUw2DfHzKg6CDKYhJQb",
  "key20": "4epXc3cxPptJLFirARwTGPeAfqkrqbCSMQv5WxSKa3uq4TYDgiKGADHnQp7zhg7LGms7BWEzHBpr4QBszwnU24TU",
  "key21": "3fJqcbxwQndp3LkbBTXF4MKUo8m51MTTxFNEBdLi7pXZ6F1cgNHt6BQFmZvjqkWJhR2fFvUaskv14a6isNdjCb8R",
  "key22": "3G3NJyymSvfihaR7WU8u8hHRYdHNfYERd1Mbu9qpnKbWYdrCk4u4CQ5NWUpwiPBFSY3bbgbcM3gThewabC9w2PoG",
  "key23": "24YP5AFZBFPdw9ToafodN1d3ZKFjoFELnuXrFF8f81ogCHY8vUuGyZeYzQiAB3S4AWTVkWjWXbXiMRcaQkwn1dVJ",
  "key24": "3vUjy2bugGoU7zw66YnD1UR7qdphgUF5PV2fMbW5cf36zfua7vU2NMsFK3HdkSVyfKjEWkfDrq1SHhStUEHnMTuF",
  "key25": "3fUHU4hpnA3JyZDYcbV2B3zNcNJJ66aagfEpGVydrNm7bfBSsuwXfv1ic7KKVZnWNzMggRegLxZ48No8bDAsC5m8",
  "key26": "47wpfVYdDe18bBrapYQ1EKqjDtX5ph5kgwpRFgNjtbHZkpskKhQQCt1Km67AcqHLzS63XeHA3krgApVaDVkPU6HM",
  "key27": "GWAkVFXkHFRfxpN214EfpxXi1qR5raRpiji8EfTU7P7eGWjifNiDFTtiZwMeTJvGJJWcFofkprKC4WN9FLtpr6w",
  "key28": "zHApMBveGRCxqXbuUXuhjpFAHyoM8NfiHJQwWXtNDm9Nkni4u41VL5sZY1bcevLPDyuNDz3gFrNB7vEVoGp5vXb",
  "key29": "QSFCcbAhrUi4nuLFfdAADgku4n9ZXuZZCpmxjnPtRjaoPLcjeURrFPMs7tZ3pXhwp4S33e4yt48YaubVVGj9x5X",
  "key30": "33RYjunCNBXH1UHkrdfagj1DbVEmig3zC8tUnanbdYZXWHCQuRogy4YEtf98EkyoS4oGywdt2p6TSGec2m8j26QM",
  "key31": "5G3RXWq2U3EmNANydsiHSmJ6LyGgt1VkECSgimBhemJDpQ5cvaDfokgt3CWcMvAuzxFrhbfyGPjp2zAgqXErXQ5Y",
  "key32": "8nPGfXpQgAJmnMd7mTsR7wfEdcJ4KRJahSXPjSR5jxDTcWfKtoTvdzENssWMa2aBQDLmQG7uzFiM7d3zMFDSXFi",
  "key33": "3zWDp9Akb2Eepg4g8MV3Lp3Y5H86iZK4xqm98qj3zrofJnx6sTuYdzcFChKx8ZtLMp3LzkETdKHFPg7Ehvhj8PFA",
  "key34": "2dekxAFTSXDuPBCZazwUKa7haEjNcERPDsPSyCkq3gfTgZwTnN5QJhoX9utrrqiXwJ98cT3KatDvyKCngiw8ASgF",
  "key35": "2WTkKsYysZ4PwCvQLigQPQsZVMny3EQVv4YUMY3DF59mJTtjqdRbmg4j32z2NN18ck5KhhuXN5a3DuG3iyZuTvKo",
  "key36": "2oCiFENpFD6mYhGLmdTUSaYfnz84YT8W9woBNmUyn7kDBHVbT1AdodH8ujUVMkB8ZvV4e91wg6EAhZBYejpdK4kN",
  "key37": "5frBt2H3GyqYS7ZMvspMzRES7v1ssPh95uYHh4jLD4yV3tTTpFKikYAjSqEWsfxh3hJccK9xxYbPfXjbyfU1hrTH",
  "key38": "5S9WFii65NzxEm9MkqDdt7idb6oWvuEJfyPP6YY6UCejgKiDYMFX8Av5V3mr5h4EJSgJUehHf39voc44HFti3Vxq",
  "key39": "2jP7RkxQQBFwpEY69GcymtiXRvD9bJNJ4JE97jaYa243r4eGJWQQrUJTQgDe1GpZeWpkKEFugQu3RErFm1CsJAsJ",
  "key40": "49r9cVZdCS28csg2BNL4hhGDcNFuxyG3yvTbFMxTUixNUuBrtKTSy9zjBVFNmPQsVzh48Pfs58RF2Wn6y2bvkSp2",
  "key41": "2KhbHJagBhtxQTuY9fA3WUbtDRttsc7bA2qKX88UQPWxcBVZegJvFHZLUBj9o8NKTAFrx4UCcEWdZxwNCRjdCjCj"
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
