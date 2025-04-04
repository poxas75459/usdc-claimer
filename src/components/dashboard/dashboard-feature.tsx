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
    "2R4W7wSvyodGgJzZ4NJbuwMJegL2ZvLdiU8y9xCykaKx9Jj7U8hf4dq7R8S7ZVLdhUdFzBHLohApa4CsFEmoGSc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27nMPXr2DQNPhynPMyhD6Xib9Qd1Yqxtwzd2tCNQasduSGAJi5mGFc2zszVU5BqdCJNz7jMr3ZYzgk7vMXSfmPnR",
  "key1": "4C1NKhGsNkEorpJR1RcyexL6HqoXPoHHs6rRPdAdNgV6WGDwtZ7UZcfsmXCeoCLvh4jWASXYBmTtXi81d1axyEFW",
  "key2": "oWK4DYft1tfvq3BCs8NLzgyCHhjBVzpLRFiBKKvUpaNdGCrGL2Q9tMTSSMezjFeKRdqthoRDsmndg2wA6vh4TjF",
  "key3": "4YdAn9QMenpfZ1Lt4CUNwJZDPNhoFWU5RFdjbJ1VebBiHs5RNoBmnLW2UFdcZvGrqNbYNodCqVAsen2fkWdCyYys",
  "key4": "4jZdjbGkEcjjWWiaKogxG7YE6XeX8wrafowTdEJRQzu1av4R1dPaAp2dATRi4bReoa8kzHCNL7QYF1aMSienmLG8",
  "key5": "5g1nwL85bZkwdxBSHs7kbCe32PdiJ6ZKCVHo11cHRCHnmTJ9UiwheDj6jZh7yxEbtgPgpKNXztZa3JeSrG9hSeg2",
  "key6": "4argeGszg6AJDupt6X2QAmA6o2JJ2uVT9KzqBFqMyAfX1s6eZ2UP7gjr8GF55kBPGcao7BU87g4wX6epMPadEB3e",
  "key7": "2FTbzgaYCBFtJh3sn17kZ3D2XzzCR219HoviU7LZ8XtzrCpbPbXkw4RHjbB1PaCy84rBBifeXqogz4QTGL3eXLa2",
  "key8": "2ZdGi9SFsvo9WJogCg6CLGav8Dtx8fi9agWUizodqnujuLtWUpJoQNS7dZpFG3JCh1qkoumyYfGLyZmg71eFa2Mg",
  "key9": "2eqRs5YdGpDpVbiZ5PgCqDuoA78UrX6eG6pc5L3wmjripMpQ2yRMxABeW3Pk8Tc1iFTaDG7PZmXrzghNsuGw9Lmm",
  "key10": "4ZCjd1J54cwfkidePWc2uRvGANj5r9ZHqmWpoQY2gooDJSAJ9VcLR86JXeavawGoKGSiAy1uoWFbS4YE2Nhrru4w",
  "key11": "571sxcgU2gc38raSS6cNLjtpSyPRcxMkpJtF2KfS79yHcokzZ24xXrLokZjCNSZZehja8oaHRk7mycK9m6m3hiiq",
  "key12": "2xCDCGfZENDjGhxSCVtASokr5wxE3MAAtRRYUgx3LDWhPbGWAWaW7S69d8DDVqeJfhertLh2ysSw8dtiMSa98d4u",
  "key13": "qzneYACEys1RcMbjmx6vdPFyjUBsbTGjAKJoQD8Uv3Juk9a53NQqCe2cr68LEYj2dxAgBhgcrp8zpfm5BFpqYMM",
  "key14": "5ExvT4XQv4AD8MBB5FKySmX6rQUTGUom4CvM4qQVETnEnHGjTnvsmsqYusVtSUpGFjHJ76dJebPGifh7dXDv2XQd",
  "key15": "4mQ9UBzX4LP6GDunKtULnUUvxXYSKny9evN3DNDo74e1HDzr93QFev99gAW3yL8Vgb6kEAa2ChnUWbuukfLHH9ko",
  "key16": "BBCQWudGKRgWuD5PXBv2uPFZ9zEFxqGr1wRcazEbg8X1Tm8pQq8M1kpBU292XvJTswaFiTwb5yqMt7aLxKtBBX3",
  "key17": "5LPYpvLuEN7QJfrNPiF54NHAvznYEE972zCVh95njj4NX4M6eg4JSryCJhdTns54xTJXeDuYjWtCVgfQEACSgste",
  "key18": "w4i2JLJYhyWA1UMFji83CxZ9Qg6xcUU3o2nn3dJQKy2LjYGvAo2xGhZBrdkssvcYbDPZ3gtBdvaWrvXhRnV3Evc",
  "key19": "5t8owcqg5nwTGr7HWQtKHyHrCpLiTHe1bXP3F9dLQtwaFdbxDi6Dhthirr6HEhjCTLhL2To3tJkj3zo4VYC6vgSq",
  "key20": "2wiguJYWZjpDceRhYRPCebdURRRTvZeFWzm8sgoBryRSM5acYo4eAQmi9224tQidCG9g3Cfo6n595ewdAoFaFdeb",
  "key21": "yrbY87fwBgKxnuwPs4QTWi3L5X8LkyEpFrEtNPEEhnFoMJiybRoMdK6fYohCf5tt9SUhdHme1X5yKohvjhLDiDC",
  "key22": "5Dq35fz5zrDcEM77Q7DkzX5m1FNiooyypBYX8ykqtannkR3AUJRqZeSVCPPkdidUAqgJ8ofA7irQFKhmZog2QLFK",
  "key23": "rmpqrJinfct4iC5F2DMwRmC8spNfKCCPNEvU1PixsNH9yoChhHfJFjdkGQVinhDQWbPPkWHNWPMeUcnqBCXMQvh",
  "key24": "28Dcb8KbRnMJLmKTAmDX2X34Q8YGPt8uTZmGjK8qTw12maYzLJutMxNfGb5Lw435f98ewsVxUdygSqaFhkvb8EeZ",
  "key25": "5hu2DedsXGJK4BFx7W3zsRy2HPS3HxY735ngT6CRf99wERH7n2BGb7F7MbSAYye3Mkwqegdf1b93wumc5Td8sZm7",
  "key26": "Pgq8V73twGssbWPD1NxydZQciHYs9vDzwmPQmy4q1trH4fkQR59KmUEnABQobFjZHRBiZV17BGd2S5uvjvghv2N",
  "key27": "2i2zUmsaAbAoiwtZCrDMEH7UBbE9xvz1zMGWn8GqBZvu3pZFuYj8h5AtLurV29ieCCk1GLyZHVgDUiTcyQd1MAB1",
  "key28": "LPxQj7Rb36Wfh1672cq82a1wd7uRiM31LcevYiieTP5ibQTk2qYNy4CU91Nt3QFmnTgotrTEyRmjfQsrHzxv4Sz",
  "key29": "3c3MH5kr7SYemWinJW9CY8ehkEsyzCxkq7ax11wEWRY5bDv6hRAJ4G4AgmgtSFa47WbRWdeFeJswKmin2TdRB8EL"
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
