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
    "39n1Lbv79FfC4oPjcx4bZQ6FZG1B1Y2RuQTNrHJinYEa6oyED6PpBcnL9UzkXP66oNLTRC3esZc58Bw2bDVPR7N2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G6J4J1ffc1H15pMDdJCPoVEUNqGmAg9hDMXXa7qYhoTP4wxC9g9BSrRnYZZN2yqxAQKgWr76HB8UrxZgR32R8JL",
  "key1": "5YsGmrV2EuZp4xLPX2HCjxXh5N1LWUSCstVi1zEvZwMHJB7qY16drPB4Xs5Gfe4JUCjWUKsm9WVT4AiW6TqBokvL",
  "key2": "277KxiLSm8cnN4Ct6CVk2eHLtmXczA58PdVixwct5rXESRBkLevndPUZsWK5SHgv1HKNzKYV5N3GQCJqTVt4qywr",
  "key3": "5u2DoYZcEvDDZGF8v8Xd5KeXAUWyPre8yHSQ8j6QUbMXanwsskwheYAwRtZhaqESKEUaPZtPypgQ5wBw5gh3kSHX",
  "key4": "2DbknU8zjJLuxPng5KD1sWDV6vtgYEM3sFZViwh4W2JSh17MnDZNvwCp1bcgMSvE4pmZbPW2hTrKtQF5GBtQWFLH",
  "key5": "582rseSBxjSNFQs2aXhDfPLvCYYAswDUcic5r7k84MMXuYLRWFUxt4fCCrHuDFA7k3dMapsuyrcBaNyuXCy8wp6y",
  "key6": "3siLZr9Pe8NruihcX718qk9mP4zigefZ6avBmCXZjfg5JgyVQ7TWVeA3ReFqBUMobdXLMPhqsQWCEcEdRH87WRN8",
  "key7": "8RX3EHTyUKtpLA9tAakGqWtvtxLTJjzi5TZ6rs9iLLtAEXywQWEap5WJZYMMqAvDpd72mJQnx2EkuKvuxGw6ru3",
  "key8": "4aqpUM6mxTNRNTh28Hx1d2eNrXYzPwynxzQT1qHhnTKo2UDzeR8RYbBLVWnWoktMvGZySEymunCWwQDjnUZgSUHT",
  "key9": "2Hn7vpA2hCdVqxyRJEw8AudQnKPx2kvbN1JkgDvX3T5b66nBCo9cpFDrYc6nnK1Q1Dm23EpMuGmCe2CgvH3QGjv7",
  "key10": "39ZuWcEE2bNTx4D3mmYaU714kftbxCvbAduEVqJAExZVz9tm4scpvSHyfQeuquAGRxMyPLGZUTrU3NpFHRS6EuB4",
  "key11": "2ii6tLoqaYW3tykwnCX2ufFpYrmazNMcejAr8aDBPHgnNopiLFeBripoFnowjpsE7r5La4SDgjZ2oTkGCFqMbCko",
  "key12": "475f5JVyx1gCNqQUSG6hctTUYwhAW7LgxPSDHiwEAhPS2XMnFSkUPuZorG6gpvbebMEDTQR7Y4h2ogghqbdrbr9H",
  "key13": "24YrPSxF4pNMVcL9ome31qHotXfyBwuKDVzZgvd6KnDB47cNXs55UwByUBfCaYB2Pdgjz1fPw7myMZ5smSAUny9m",
  "key14": "4muqBh5ZtbR2EfEzpGfowFeMdsGyckuWmLRQnSuyUV287vRdvtSfGEdAuSjRtGF3svHPzNLZznJVv1BADnKteJip",
  "key15": "2nCN7fnJTXX99R3Yd5r7BbzfL4qYf7zvFY6JUhPXoSpqyr3br7FY373ArHfhTpwQ8TF7oegXRhLdMFpe6tvPiskP",
  "key16": "523Tk8dFeYvyodZU7qLUgTJhUmEJf2FxR9z8eQCX8jJ5fbt1dRSNewUE9eviMgd9tQ9HQCspL2VRnXRKaJyZsnbF",
  "key17": "5CyzJRGFrJ2uDC5tDnzEujXytoMrUCbZykwt1ChG1XueZM3wVJnX8Y9G63RYCtnAEyXPXVyMmyrhWzbpUJk318nL",
  "key18": "3u1Rj6qaMfbHZwMhdPgtPK5KFRXjtE2grZFXDMSaYA5whhqT4teinySfT7RPwiBQN3JjKzdYppieHdLmTC5eMvTF",
  "key19": "S2a97BS1ubwVw7NxUStjrdBUNVVjcu3NuAJJY4PbozJG4Xd67DRoNMqVSW2zYCpR8JFxhSvn6mibpWmUq5UmkmF",
  "key20": "CyzaRbpDZhM1R5xnJkxgQwq1MvhEe6ArR5XG9c3tNaGN7tvjh3VqvKC4RojCS8QYHPBpkCEbcudQqjcmEzd5Q9t",
  "key21": "28YjiRkcNNpQfXw7wWkfsCTS1beQzjtqowfLheTRaZCAPwS7aBX9rAvLSfchVnhsux3jUwX2orys24W58ViKPYPf",
  "key22": "2x1DEGNnzGDxywtSvvPDGfcMzGvKfZGojjYhpYF3s1VASK7Cu3JxeDc3x4q5yKWkvzNK14TohGSr36v3ML4Koa5m",
  "key23": "FdWyVFcv1Pxo7Fk9rZXw5kEW3sGmWNDSTTUp7RsYueY7bq6UU69rdRNhfX3W9W9MZ8bkCn34wwqPGkoYdKmVMnG",
  "key24": "5QDUiodUgFVUkWWqYAL1ECEHrd7vzimY9cPGo6RP5WsJo7SSzuHmsenQVgwXup17MDtiP8gJyV428QHq2WpEu1sT",
  "key25": "26K35A3KDvF7VwQ4H4MtLokBjFBNWEyMSrCsF86RzSaxYXgHHonigFTALX18Xz45e6CJdDqLrMKxs6ssDf1HyhE3",
  "key26": "4ydRQfKFN42zDvFWb6186EDQnmdSkaAZeUqVXfvmS4ayZG2yDCvWJBhu6wxTP2FC81iGVVeSHzgbHujJPhEmRmdG",
  "key27": "4njcv8Doe4arnGVGXjHTMNTw2sxU4G3j56Z2ZD6gVgbktMQcfhjzmX3a8jqzVVHZxwr2Xvsjfo61zhNBW25WpDRv",
  "key28": "2ydoTLCwQwWWAR5n9p5GQ1bVcGMzphE7JqmLPWJ2u39eS4PSQJKK3RoQPxb72KMn3pcR6ZQ48KTLd1wqFsF3A4yg",
  "key29": "3cw87qG72iG4XUac271h3dEgtqHmjUmXiBdDVn7JipgAExeGNFwhDYgzGFL87BAxevWCwGcFYFnjg5B5HhLvpujP",
  "key30": "641rmmoXSWXUiDzuLAfeTNYYuwT8aCcVnMGaVNwhdzS2VMZB1RrJhP2xhQgrAhGRYU26XQG286udgx765SyPSA2g",
  "key31": "3ZS8kJtUCyDL58G56oKqdrCW7WLVx4m7mgjbv1NCTK5tbcyuLrMifhg8HXhfaRcVEtF6eR19eobjtgFih497UwWe",
  "key32": "2tBRoSiCbBgX82UNUYnVDUhKZmDMs4Qs8a6gRnDemFFDSm1xPzrUyLXNEWf21WzweWt2MVyZLxsHQL6b3ZaFjFtD"
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
