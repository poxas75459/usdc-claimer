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
    "3CD24Hap2MPBrgD6E7tu7qeMPLLZSdDpLS6mg2wJ1euUfcZmSXqtfPtcz7rofzyxFUkmpmT2V6iSonnvAZhXAMRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "12sxbSLtpomVnN1EbmcUBogXAzwFnfGFZwU4YxcES9gWyJ3gwQzBT8PkBGXDPqroFPP127fgbpw7HLo4cq1hkC5",
  "key1": "VmDfnxeWzMZ2b62okqkzgtJKj6sEAGs61HK2iiyXZKxZSDmqX5Kt87JNKFSe67dfKL2ACTtqu2aNRpn44Hmikn7",
  "key2": "4PRKdvpfdY4kX6JjCawm7VenDz2yG8ReuhFkNVfuoUyqj7NpYKjUEK6E1z98dTBZ7totMvjjjfFAZUxCfYGddcsF",
  "key3": "42dCbt6YdXAJkAEape66rb8A9nyCPtyDCuPCHfodKvWqABXcNWht8zSayWoEWCiVoZt4BaLQ96mrGjXs66hjPt48",
  "key4": "5CRUNY1pyQxB7zSUFJCeZ96pRW27XwiPzXwfAgzX1QWSMee5MtUDfrxrrSQ84dQD1LoTKYBvM1Uff2CAiwZ7MuF5",
  "key5": "57jnropnD4jMqQCKZzmgsQWActQKPZxAW7qQCCCM8VgJvugRuT7aq8had3mZdcKVHCLKVRv3DUENH5mRj6kT1rtw",
  "key6": "2zQPmCGSiK3qDQkatnVo33nwX3SrrSieXgYCwCYcLuQTfDGxZRXYbLgPdkSWjqbJwstWSdSx1F5jupu4D2TVSQTr",
  "key7": "5gUtixK8QeG6TzqsQ3r1M5R33dQTTQss1dvutEgeorLDBL1LNGUARPJto6KPMjZ5S9gaaqjWJNFTvkDkJU2zePV1",
  "key8": "4KSa31dAZ33GrASFBNqe4FA9a79g2q5EHEaAoKn4zRExfNzonNqYgarer1twu1UhVzZeiQXYxh6G8GzmgqDcznB1",
  "key9": "4owXhRtCydvbuQNATPMnwsX8HDEh4XTJwHFg2qmrbJRW2XDZ2Q3zE7FJnTaZf7EAVEcwzE1tZZvkmwQvG3TmoAoq",
  "key10": "xFGTcPGxyoAMSP1fFgxceLSsQ65rngAmsk64jxtj7kaQaJLq5Xap9fanjBJqL3qpAMog1XxpCjiDQpSEeSwqg3J",
  "key11": "2Q4XRbfP75kfS7xgBkfJXzeKk7pSzK29ZKoQNh5uqUinAfM6kR23Asn314v73vkN4k9LVXT5BrHUex835CoXJyQt",
  "key12": "4L9TSg9cMKV2FHGHRV5pDZqz8Ly1q5c7upC52FEeAJTBJMmFHBAeP5WnTf9qniqpgVp4AM24go9fHtrirop2WxK5",
  "key13": "Je9XbAzdvAZ4r2Ui1wdp3ANKtezqr5tjL5RL9WawzQAbDhwEE9eVjUHzTHAs4q5pJjsR6xkg1WtEdWVWV2Phe9r",
  "key14": "66xJLRpHS1edGUca8ecCVWpJ9QGjg7FZqB8G1soBYohvtgWnhTAprVmiemc51uhvtEMp9JjpLPffVuT1HDDD2mGh",
  "key15": "DxNMN3gLXWYBVbxP6o7rBnctewBc2xZeHsenpUuEz2voEU6vrd4MokWQdMBeFx3r4TsqPkZdMsgEocqFaNNrtDr",
  "key16": "3K1uoQPNJAEJSFqKeEvytrd91KbByS2Rth2AYrfZXStkj1AcYHcMkhgN1g4xUhtLhEDvovDFsJXRpKVdKQ3LaLBp",
  "key17": "4yT3A6A23EyCza8qdiessXpCt11sGrfkqFpCSwVDTy8yVEQQQDUokVBmxeofcJDGvhu4vE6vXbLfyVccxQq9AWQd",
  "key18": "2BAGtwNrtWsiYLXWW4jPvEhxoPcp12ykmgBG2ZPeZn2maC3zpEkQWER3QLmb428mRhTPE5JMwWLqrk3MsiAgigEg",
  "key19": "4g62AE8uBGijmazXdGDtMokhCnMzGVjYQr9fHSJWR6BS9QBSCjSeNFpaZqVtvaVJsHzYLZ4mEm7Pmpjagx5yEPAc",
  "key20": "4EWhqgJ2YcJJh3et5tnJzeEYu46mwp3P7abrs61SBDTZpSkSJLr1kqfPWwRAPDkcMP1zHbzFXpszmZ1XDXXiUwvL",
  "key21": "5PxQ69ctnNXiA9KWjx54kMmWbZpTYnhpTG1wMMCj3nJ73ejHwJ38r3sWt8ZBG7Pe8CHtitXDPxbq2SXxYsQvsTir",
  "key22": "SvJtGKPy2MaXWdMnvadJqpUuxJmXfnpTMiuRQojVwgxtVt5WMqCXbHNeo2nRuHdcJfkfDeRsQLSzQEiQwu8DP3b",
  "key23": "5a4C6dwGqqCH5Pqj7SDTwNUzaJ9JtnBrCfhqC7vZMTa6LSrTFPtBtSpxxmJkHBzBJFKjJSsdYNndUzzTS4NHQPo2",
  "key24": "5jGmgMneZ3v6VprGRYs4rdqd5P89GhMEztKsebCaNFL2JFV7PK32M6FhQVf9aWXzAkheEoFWQJ3ecuJaUuXHfmpe",
  "key25": "37y2UDvo1zUJ4PVNx5VgHBMCDjE6jkhmJKgXDnZRhNkGq4mXBfsgwYPVVBQnFiPhe4oRqW9GgnbAwPQQBTY98f49",
  "key26": "NcL6j9GcKzBc3T7XFrfacpj2sgnBgWcTn793ThZxqVd6ynDRiX8ZkqiBU8akqkWzz5NADMd9H8o4vchbxrFDE7z",
  "key27": "2wP8Hcm5rm4pjA3eMbfuaZBAFD7kEFoDVppEhNJjQhL8wJfCgLEMS3LaRMENwanHtT3sxdy8ge36mNnao3vfqcCU",
  "key28": "3zxinfi4eTgW2whHFuFuGXBv7oUvwN9eZnTFSjYTrBYN2f98gRATv8wcXqdSnMPTsbRdGR71T9RXP7ArFNSv8xJJ",
  "key29": "5gueuPXYhhwUFeXzW1cdzzSuF8HnSPj1hCbCanfBCoM2JHEoWEmb55hjPN5N9j6m4XgM7vsaH5z33qB9UyqF3Mah",
  "key30": "5MTor5hyEuecFuWGMTLuM2EkcVrPUmvwK6M2ssoad5L2FjobizEWHf46NRqEwpvGpG5dExGBdMTpAmxaY6y3itgn",
  "key31": "4HYt4mhskntf5A6vEVufpNLzisdULZaPqwLRtx95nYnNvTCFLm35uBrbQH2SddZ4zzTnCN48YebTgRenRY4PLVB3",
  "key32": "3bP1znJ5qKiArbypgrpsQxsXFJbnLFoyt9NGYhsbda9b5Hgz6bGYV5z4kfydUmyG7KQx5kWSUxqV2gWjpEWwiKeD",
  "key33": "5cx5n5QnX9ux1zTucDXS26jg78Zx7triFNttw8PXwmupm889bFNjkEicaPdt1SJNhLww2GRyW4vwVQbhTqtrfVUq",
  "key34": "tLHZkxpTCmbhEGgVdFyx2C23Z8EojMTWeHXrBe21E8DxCfeyRrB3JJ4GDfCLRBNun3Yc7KRxbBT4Y12b54L6wEq",
  "key35": "54ykcU58FntV2jV45yDHGwEMrye3dqmkJKLr2aCUdwW1PZEx6YkmmVGyqg41BAcy62FdG5QiyBFSEmwmDSusNKme",
  "key36": "H17B8WudbAcDi8EHAqNKgfp3H3sUE2ms7PQLRhiP65DU7p5e7wbcNcvQ7hrQpFdirJi4rTphEpzpAmkYVw2VDEz"
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
