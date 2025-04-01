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
    "4ckEYWuVwWzpuW9YP3WoPdKDdF6wHG65SNHYEiZ6PHtVtEqKx1cVWKfX3XzTseyZh549avPoFScdyE6rYy1LPquP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SzeRdvAFgiNSw7FyPkYFeEBYpqQmSDTkd7T79TstrYiStbP1bXtv5a87c5dtbXok5VVSyo19vddzjD8VD49DrbV",
  "key1": "3vuMeBEHZAtD4ZqETxodoLD6TKseE4CpqUHAHUu51S2t8m1hQQjLi5zJz7ERkBxMAHKScVnsomzpQfv7LCmAqa1Z",
  "key2": "2QaTa6DQv21VCB1s2VBPtbdiwDBmsPbLZzY96rYHa1M3eXnZNQR3S8xktxVa2dbenfAZKngkfXXS2eMCmrnKaoRq",
  "key3": "7DAwVHcHMzEcCyuhUvosCZemMjaKjLNmmv1CJL4eEWF8SkRZqihfC9joDcLQqpvWJJJsQS3NB8j1akz6d69a1n7",
  "key4": "5DimUtVb3NFFSkSRuDuBQ6kimKAgg6oxkpZ8GNMgBG2UtUn6KPw8nUso1toaLk4YjgtbHAkHob16sKhGL3SGBpst",
  "key5": "4f3fGnGFZNKWXwT8oXJyvZDUq4YTeDLAGjjZgTYBmRb2pbuLsPK2Kd6UcErGkEdbFgT9WBjKKYWDxn7d51xsjtBP",
  "key6": "2n2kMeZ3ya1dtA34X8M78GmFUrA3hTrmv31LWvQjyCWzh8zbF85G9NgbK5kUYXtoCDbaaUEad8sy3SYx27Q74Jrm",
  "key7": "5C9Y8TiMudwbVQF7XSefUmiHXbHLq4jFdBU4mFWszkiWYu6CWVtKW8nensMzo4apLBahebaAXbkFtRfjvD7svqjE",
  "key8": "2mkkhUuTCm1uACt51HBEvSpNhyFP4BvPNAnAaEMhme87fzooqfM1fMstBiVTVeoP2h15Gjgg13gEKJT1h3EBJfo5",
  "key9": "2iRUU3rD6xCUbvhrXcCwmV8CC2PjFKfGQp6AoWQ8gawxg54ZXSyo2FFJDxSRNLtBDSK5cSTfjHsPidTFXr1fD1yc",
  "key10": "qBMvCoAqDiUGwxyDJ7TNL9VuDA4FYogJiHRV9dz52XYr78cygY6ncCEskkap8cAfqK9pivSkeJQySrTsuGpHMLy",
  "key11": "3vcXCsweuRY7wfPshmC8PsVsuwQPcQjvcNyJzTPuwGHzLJtVPZGHzx8C1uSpsTchQvNEDy8H7s81qGGEq9RudEyq",
  "key12": "5rFqL8jeRL6ucxhtsoaSX82aZeWMM8dHo4fX6ynffmkxxGWNoT53F1WknCEa67vxhjbuPmMtWbTKsTrAMaDmGTTn",
  "key13": "VSbAmGscwUia4AnwYPEWtAUR2soKyyZBJpeMRZkWhJddN6kpc4nwsLx4wqwby5ixG8T2z3qnyssLrbUtRLimiGr",
  "key14": "5n3N1p19BB9bCXHAwfxhWGzLdjCwSabXXZxuU32kdec3GtXMLcc1ZrvEzBGW8G2zvHLqhQC6dAcmPAi6TBndKFSF",
  "key15": "4evb4r4MyshpBKaLC13GbtgAAJR4yQAY9ZSzacgzFCFAHAoJrkSKdc2VoWWEb6bqrPK6iK56U7cQJkEDMpqamAEx",
  "key16": "5L81xxeUWgRfYyfYeEbxH62NoVapB65VjW718PqoGx7UEPis4jJDWP2bwicH47TdVULjZPqaHmiwSYfJrMscC5Lf",
  "key17": "5iFgnLMrFxhWDJ2EVn2syM1AkYvDPttxoU7RXhub515fEXGW2XLE7NXD4VWMJ6boXNUa3sv4eTxLqCNsrUHaUatj",
  "key18": "3k2ap2vpTen7CMW2kZP1QY7R3dP3hA1RevBYQTMdaHoZHaUR4cqfJYssgNuHyVYLBW5KyQqidsgbi3KizT1P2tMP",
  "key19": "3tTUGQvnDDVAmk2iZUT1R9gdD9rqe5BSepuppmiwgEzpP58g8dhXPhF6mS349FugPhpoJGGrkc3SCbvMwwsmKaUc",
  "key20": "3Ue6tKKo7iCxieW4VgDGigVLhSfpjYZYGdqeYcEho4TnvySvMGvYJkAMbSMef1Yibc4VRhwHcX1d7bFvsd23RPHx",
  "key21": "3qTWJaoKVmSAxhZ6Dw1s5KjKe2XNQ8pcrs2cFo1gxgm2yCbTzvDF26R9qYAC2dyfBV9NVZyGTCiYryEoyfrWQ3UB",
  "key22": "5YwRh1H6xSzH9xsg3sW1aJ1PAoeX22LuQ7FyAArU5BqYjAKp8cBmtcnjo4TW48zf1E5UFmNRaAm8cAEAYiF1iNSB",
  "key23": "y15GDSychdo4s3GmSPTsGJvsBHvHaGqm4DWv6SpDqf5yspJAr3y4Hwd5g5mPNvVLY4MTXztbrrAEVcxUkUymwgN",
  "key24": "22ANzH9851mr8hReoP7CMoiGeaaxksn3xgKzU9XvYeJnzprVENwB9vj9dk1hipNrxp7TTD8A6eiKu4iFpRjzUys7",
  "key25": "3RvN2VRsYnHUzL7NmoJJ5aF6ViFmPLVWzoshbBfKAd4yAfKngg3Qift1of8pYQHv7iBacoL9MbnGdZnVWbSYigHZ",
  "key26": "2asH1fAro1oXotzQ4gzMAYYdj1u3HonvHZjtspp58xtbwEuMz8TdcwKBdfQyjTzpqjXQk5fq4FAZ2aixsfau5Pi9",
  "key27": "63sDux6fGFr5ssPW2nbp65JDSkY6rnmsxBasgATbnaECatToam5GZYgnkSrbYgmLx4BRiXUkJLj44Ye61ksPRGFx",
  "key28": "oi3CbcVKzLwL24qZK6veT3hfZYveWotQgg593wYw6QvXUDBWi1LSbQSpLuwLjMqREqC5GpoWVnATaKYkAkm2gv8",
  "key29": "2tRw1vc1zJwYgjM3gBfCFDLpzLznteyvPhoqfTSxvh3HsnaXCrC6TrFRoBmJQEaypZnHpQ5KYevuGoGErGb8Q7Er",
  "key30": "5T7CycL9DQUDzEygWzhKYEZReCX8UYVECRZZzGkjhhVd417Dz6FU1pN335wEao4n3NL9M3W5HxMUKR41eAs5GQNy",
  "key31": "3rAhqtGHkAh8TJhAgyHDsA1uxUrCTMTudddM9SWVR6kBLwyzRWeVTDRx2whoXkz8hTLW69uuhXs9fwAwV2ideAFk",
  "key32": "4h3ErDKxXX136u3gMny8bLWVEjoJY97daqZ9oBqwycecB4bWUR1LveAT6heGMmErJ2KkB9LuVCD7TuCd52DkQk1N",
  "key33": "r2z7zBNjw8k1vfzBuCQr8z7R4DNBQVvPN4nAEN7ANM1QvmF7xCGi8WhhY59ao81EF66Ccv2saDuATYJcfHQ6onG",
  "key34": "8U9Wo4agScK11hssPDc2cndLGFvFGsCdkthH6GxFPVZsS8pcwJwCz8ZXmxZXcWyfjJHYsbafXFnAgK4pesETNSG",
  "key35": "55PxDRZSbd1cYHB5xW99zqYqAyc8gGWNHgiGsxjcoSo8yR31NnfKy6ZbPuQjBX3TS4WAvBmH9JXGWSrX4LFZa5Mu",
  "key36": "2aavnq6t3gVcCmTEbvSzid7uoVHrdXJvkq7PMQEGRRCASDTrkmoCoGbjH8rxY1UYKGyvuKYPrj11FJkoqPG24jd1",
  "key37": "3oH7ZBY83sG17LALtdm6okqJnkHBLjNi2T5vDFGHWE8pEJtxT9URPVu192Ugdx2rrGvXfLqhpMS4mNVmxrhZwhGu",
  "key38": "4xzDSvWRy7YNaQASAxBRte8W8ZzN4BditHHkqTQKFs7XfukHA4gg4rNLdKkTBNV9DBbbF3YybMfzppEnkrxWyuSv",
  "key39": "4qBpuYrg8sNstMgsL7HtQyjcAu27MuDMufWzTKKtGkcMiPo7BtL2b2UjuCC31uT1j88UmSGjetowBZ4RSAYWLdvw",
  "key40": "4PpaYq9owt2KwLcJYfcZFxsrFkLiACPog1MvCvpYNxLLYSjy6nSo9GBj2cjMH5Wv1UyH8k9GAxkAHzSo1GCGJnfe",
  "key41": "4GYegeJ3jsFbHxNAw7pwqpNDNbbkxW4MNb2rjRoMabsXaqbYCBCDeRroWAjQhsxqqqBXkuUEaLgNkqbRF7BSEuQy",
  "key42": "33jBaAAGxs9btBf67vJex7FfEbvvj4DAXDAEsYF9KyyMuUPkHPvri9M7PFmqW38qgAXFfa4tkBDjuzAX2zMAmBea",
  "key43": "nmVqSibt1ywRerWjRV5MjKW9wBWWFnx5VTfFSPgaE7M9hFHqe23exJS9kgWNsXsSkujo7trhHrv5qWrTaqsSrRK",
  "key44": "55zHf2ZkWQrBEZ3fW1kPHCMstYN2HbPW1K8scWs9CoGrjB4E1zqFXtk8E2CbbCia8s7PjtvdkjMxbyf6kcCQW1iv",
  "key45": "5KF6Ac3mKaMVfiYA79Z4tbvjecnUpHxnELQCDi5mkVSnUbtNsVx55w2ktJftXdWJVPzHwfoa5P2TzDUdrKwfAymG",
  "key46": "3ip6fp4orsLX55DgD29BFhrHmbNUsaL9kwRHAUm4X4Lj9nmRC9RyLPu66td6eCvQC64cG5SFQDx4wAXezL3MxCh5"
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
