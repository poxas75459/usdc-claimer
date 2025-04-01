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
    "26At7cxwKi4bzMygJiMMrVVVLXT6ueS5D9sRCL3B28UqaQCJjcZ6Rm1ApUGj8PJJam97LKJkScZoymB5zoJS6au1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rxKPHTJVZ4XWw6JD8fdgVWTwdRLDqa7jwsW4wXz2swW8EAQ5gUC2iNb5hKHBMDVeapfQtayzFFs3xEpWfms8WbG",
  "key1": "4TM45RbzA2jHTzABnFr2qnDPJHCtFBqefB7rrXkmSavmkQRomc3auWKXfwVZAjttSaUfbRAYL7fssPHCDA4ZS7ZA",
  "key2": "t7PZzmWDM69mUnJcJab3ne7YN7oHsQVygoS1kEbU6bpwNE2DVCbtDdH9QatogMkBPQLQtWp1jeVJxfFahWLPjow",
  "key3": "YuW6pS7X8H766fR8BkJC8PnoYdGydMFJ3BkmHy6zvhitwT1zGxF3SyHRWcZ7Kq1qZSa7KKv5S2sQrW62PF3KGsQ",
  "key4": "2pKfBkR5ynReLz8aQVrNbeRojznYnnQC7soZRf7P2NneWjuhRpnJrFtHLTcyskCmQFHtpsRTDAuy3s5qekEsXaPm",
  "key5": "62L2ZZx3ov8MgeWjaEa3H9SLAkMrR1pb9xej5UmrsHZ9PDXB66iLvniuetGRMUihVADx5WNgccH893tKtWGSBsHy",
  "key6": "ZBgsTykMA3jTh46NW6CTrk56GoxFEDnsGXxDwNXwwzqRubzPZytvGXXvC8Fx7DQoTL1yNup4MkELJGZP3W51ts8",
  "key7": "5PT4ZazxQ9u1YNpm7BZobt7yN2DfckEVV9PAH2t77e6BEatG6NkpedqVXazKmbZgC4c6nA9D1iGY5UaL2gwptCsd",
  "key8": "5u1QpADZRzLkutrmJ9oPbmHw4euojZ5gxknDtaU6ocJvt5xX1wvyKaphyVrEJiwSZd5Gz1RDhDjbT2xptFqmjiuh",
  "key9": "2jWCrambWFwZHbaktUwEZWWwpohxx74nREPKwsZUwxGTFSm7Lhw6e5zBdeN1sYhAQUZy6wu5BETNeChTbQV7Wsx6",
  "key10": "3JH8p9dx7sFNGPURm6F2cDVSC8JRXevZBR8r7DLZ6yaiyrBLPy4jMFeVGqJfzyoPT1Stkb3nFyfVWueeP6hUZJn3",
  "key11": "3w2kiYfYFFGpd1fDx2grGpq3zyKGFUDqUS2VssuZ2tDpB5f8HmfpLMSTpMhFCPGtoZP31Yy8LLJKdRu97dMmdHzm",
  "key12": "28KYr79oJj5HGKmDbgigPSEmMCpSdxknE74HRtVMGTWezLmWAZteri3DWA2wJC1R1rSF5SGy3rXT7VsPyYQ9u3vT",
  "key13": "5A94hDL6G4HqhE3VKVbgiUABf5zfXH4Z2AfEs6tHvNRgHSNTAhUAQRZ6Xtb7kGq5Z32YaGJdq3L7KP1MjE6N8Fv4",
  "key14": "5Y8iebqScKu4VhLdCfpqaNzR4DzeiJf5mmQGHvRkgKmgpCqMLoouKew1scEEx4YWbx56hoMf5LbeBYWPQBAuVVPD",
  "key15": "4XXFyvA9dXGpAXZySPVFaDsTnfXyBadgETAK3npkX6aVGjfCHSyzDzGis9RA3zKer8TcpuoVoR7nDMxcxYAZyRqF",
  "key16": "3RwPZTzwcCdcvN4LgULKtX1M4xTU5c7z1JuX8Ko25Br4Y4HsdYBYdddydFS9J1JNHcB2fPCtWbB6LU8ThTdw7T8k",
  "key17": "22hV1GSXxpBSb41WA3TThQEYoMJAh5YFgA55Rc5fzL11p46vjnrWGN1Topc69abQEtRjyWsay94DNKkybhA7NL22",
  "key18": "2aHeXnHqdog9JbsZob7NeF19AzRL9yxkWuXyjPBJxGrfhspxifa3SH5CPB5QhGSbPaCmFxvHbNEjGiWvhTv7m7e6",
  "key19": "3Eb8ES7688raHDdQHSvLVQjSfnJX1pdL3Rah2bpopCEFhr3HTjFmBrY6cPSg2wsRxXmi3fPGpFx6xghLuwtuo37d",
  "key20": "5jG8btzF2aXsJNNAz2xLQG3P6JFLm2fnYYfSXjarb8vnYVgATCeShbfA7ZsGUpyqSyTCdsLvFfQarAz5aYurxSiH",
  "key21": "2kKTVHS1akY3Yk4MNWM7Wi8Tbd3npaqFPd9Ekp95ADYsckBNZp1nhRi4NZUkqgf4mD3aZaheNzVFrCiFXarXdYYH",
  "key22": "4YEppnVHSCF6AUQH7jqrdz5EbxzV8naDhRxE8voTy9ivmeL34AMjHf9Yj8HLVNe6MgecWdNXvRV9PAf7qCbjzPiu",
  "key23": "3N155esXQkJLxnQcKW5RM7qMzNj4Xi6Q7HTXLqcLH9DDby6SyWSR5pH3fcdL886e8qtQ89YpK468gtDPqaegZdS6",
  "key24": "3iCsSEg5hQfKhH6iW9bY3mQ1QgcFXBXUjy1JPit658LYE1tKQozysr27JdwtvEWJpSdpj7kiMRr7HbWdCqSuEeqt",
  "key25": "5LP1BUCyUBtKzSTVoarX86p5ei36WmRtkEf4b5N3Erb1QMDR7zpBWDfGrYRuNRyVhDkoA8PvA3cfrmfiS9JMBDCW",
  "key26": "TXcHFCyBTeUay6TfUxnx97tASxX46zSmfhPPegGo5oT695qJiffZDcb2cMkdzjmykHik48r8YRCtBdDbereeddU",
  "key27": "2BMjZ3Ms28LGz9M27xLzrcbVf3zk6bCk3BXuZk9ncAGL5MWGQWb9s5BmiJmQTiS3fvhWmrCy19ziCSBjJUxwbi2U",
  "key28": "q5fMcgLigt8zJiEySGV36YC13pP7PKExrJ88cHpESJVDJej37QkrhwdYR46YDpHZ36ZnZYqQN1EWA8DxdmyqES9",
  "key29": "21ovx9YeiHXZpDP5mWvNaxfr4QgzEHBEECBkx6MrSNuBDZcRsKKdi4XNWg3P3w4J6wcKLnAgNkFzQkx1UtLVUkfB",
  "key30": "5evJR5YqaDNP5mUTe6ifJrhPJWtYD6cYxokAkgsyYfbfmmtYdkrun4WoiWtFmSKFJ6tPDHTj2YfWJizoHhUvf1qX",
  "key31": "23qwK6aeKhB4xwSm15Drs9UARNSZqvTvK29oA41o4Y5VEyQEDJZeDXVuc515DDCoBUwjVixcu6V2D3Bd1W3caVMM",
  "key32": "4niRZ7Zu2ekcBExYM2AxSxUQPFGc8NYCSGz6gvdBoG9y8EQeiHrJk1VCRL67fxQW8yxK9dxPd7CWpJYkb6Pv4r8p",
  "key33": "4VZh4Yw6HBbkEw1K5wxxrZGED3VB7Pudsfw1Up9UmkF6BeMuxDrLCL6bkba96amDwcGwxCVESUHA8LcF7L1WNeG3",
  "key34": "nL6ZbMUnt5yhd51ZKTSWKmC9tNHRfoF9Aunzd3SjYvvUbMZraCcoYcFizYGvMrSPknHdK2Bzuwunx5pAmrav2Hu",
  "key35": "yfGDN9qHU9EEdcJETQJreUrXwhs9PMmfeTqVZdWWF91qGRSeGaz9GbGsn1wwJEEnYSgoaVougaD12oBYA5hFn59",
  "key36": "48DAGS8JRixtffHH5NGQxa4CV5Z5LAyGjqwh6QeDa33MSwJoKkZ5MowyR4DfEqsZtT8T3vy4YokVYRE2FSpGPUAE",
  "key37": "634dQdX3UeHJb6jXUR9WMYep5UeZ9iQ4gm98SisEWcQMY4pgXuJEDsebPgKP1rpzSDxcvwtgTL6sgktNsApKfJpy",
  "key38": "2LtPqefvoYAP5bGAe3ycx5GnKPtBaDBf3ixijdieyaG69vxnhYjXwMT6SjVwU7M6K7qMnbUxoe5VBZbr91tQWghb",
  "key39": "4PiktupTmRAuEXc4mR8vUSuhq11rTftjevthVESmVxP6w2FVHMjGC62rAwDfRyFnKgigJPUVMSj7gwhzuihgVjmQ",
  "key40": "3d9BL2RNUdjTTgrWPd49M6g7apovyXmRM96DNcKBDTNgnweBLYtLsV42KLyKT1w8cuwUb9r2AsyaNk274nvbT7N8",
  "key41": "5TbvUHBNCWFJmF3fo3yD2CAE7Fr3C9CwrdPiRFn98EA7krE5XrUWXpZkNB49rKq16Hvnri32WqQnoJuZfVVjDXiz"
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
