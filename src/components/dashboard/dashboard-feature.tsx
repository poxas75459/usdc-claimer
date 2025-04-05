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
    "5gTnQ3FLA5dTEXCtN1MWLys7Y1PyrawRj6Y35b5yZ3gWBhTqgY81u72wGc8biVHaRRKHVEi3d7cFFdmiMpqQ7P3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ir7a9gmsioMUC6Xp1yXdVMCWq1SJNDZRSCLJ6gMyUDjzKbRN3BXGbbHjMvfuBfvi9Vtndw5bQW91HirhpCA2A9h",
  "key1": "3vHnKTRToQS3BUhFevC1E4X9vLUL24oMWQMZaAYkyVVDfjEAcna8ufo7kyJk7px15LwbZ9bYrKpVRDDhTD1USpAj",
  "key2": "2grwyjM4C7Hqa7Y5kFYg47rxXd6soc1Rmdfc55mp9n7sjFo45DxRucoME5G76fYR5NVcSWJ5ZawCCL7JJGoagFkA",
  "key3": "4wav7vNtbm5Cki9Fy4wURymcoBdp5fqMjibS8PunncA3inBoCtSZBmTNVnyk9UgRfwZdurc8wH2bpBR52qWS2sgA",
  "key4": "5ERAW4je7dtUd8jj8iGvfFHLzDrjYbcNWJcKN9ixXjkfmCu7yyBZs6jKKJHcRpdVZHo6CRnXWCXtBudVFHzeJCdt",
  "key5": "izKspRy5X7sjP1GbaJtLQybcnZmV3N4gXXyTWKEpnjyBa9SZG8ZPX6BZLUooaSPZE5i9fZB3yzBuFWE2tkgwXnS",
  "key6": "2hsYg48NyCesNo36d6fX6Tb31a7uobwyRrWMXwLRZe8JH9qRqWzoFrXdVnqm28us6BFJXTEy1PEbgNKhuvFJrYzz",
  "key7": "4CShoXEnopg7wnbFpNt5wcAbGfxLm3VAQxM3wYiBUmfVVEAaAUJDgsV8LEYaoTXFoZLqphfL4abmg24N6QQ8Yyem",
  "key8": "24DwiPR9wgHM6Q3xe6HyNFZcKdbhiTUaWQnq5hTCucmfJwdv8JSxwE47mqvfTC5gRZqMwNorySqWx5ofPnZj1Bg7",
  "key9": "5gE6rUw1tHeS9xTSaLDhg25kUx2CkCvQYBnJGTnEerqoDUTgWMkCgjMF5GNj8et6sLWb828GSr83NgvWnsW9su6A",
  "key10": "5ffsQZSSPyiUwg5vtoxzEJR2cbfV5D5twZ3WtaHA5dp93JziamdVBbTXbWxgc4SAyTs3HHj24eToMATdTfFXpjkj",
  "key11": "3mU9BSPpM9itrZZNaKAgCi4ed3vMhPBJbp4WMwix3QvYtCjMNvDyzVyZUBRFr7MMXQwvXg6LMpQHCyu2NTN2hbis",
  "key12": "5JSuvfS94KroQjKRUBbE5YjsEpNuzbyjt5JbxYPq3Wbc4pejypS2vd4qmGdVMbFvq3La3CsW84ruBNSCkK8dMoXJ",
  "key13": "469HqZy1pyZGTUyoCgzskmz9gX2512qBF2vzUgRmkswkw9cAzMaLbVaF6fSS6gMm7bbWrAeZaTkdzposjiLuokCh",
  "key14": "2sTxWYxrwhAK1cciDVUjjXd2zT8wGzPtYC4nASNbSKbKfGESCo4P7cDUjMzX1hxchFwhvPWy1hQLVhWCPug75DLN",
  "key15": "4NELDdb8zGr3R4xq79QWF5PkaRUpcsuD4tyj3m9iT2SAsLfMZCp43PYNB1uRyc9dYxp4BVpoxMsBMyNunj6acWR2",
  "key16": "a8cPnh5FX6vvMfJgmFTJ2TBbrBx4hxPTh83GMNVb1M25YHvHGarej8L5eR9CLqiWHwECbFqt9ofbJQMEcwmzhHz",
  "key17": "3aSrpQgdRuezK91fzi4kvLmYoP9vGkw8A4HLCU5YKctx6wxBjWwsTTTHTgdGptHqDXYw4ACzAYmL9ijkXmjKn6gL",
  "key18": "5cZf95ir47g8iEh9Ph5YbAjh659fwF567j9LHqfUxTmrcBRdFWKNsFNaMvKvq4zobkTYfMCfiByWoGNY4RGcLfZM",
  "key19": "MficvR5ZeWejCLHjtECY2entj99H5EgYnAt6Bgzuw9N4UKsDL9RDBLLcCZo4TxPiwT8kVqvaRue9VPKJ2ZeVTzH",
  "key20": "5fYNGVBVv9xFvvKrzuyvRZVkH62YE7xhrsNg9Ve6HRYEEj66Rdts1hr1FpJbvNgoWK2GzKKPab6rMSycwLNMo1iy",
  "key21": "D84SyvQrK15Krqy4DFcRyE6oQ4wAJQ8FoRiWNchVo2EpSzvxEtqpEoFdRNm53bjf27njk6rBPqFx5HQYQ8yoTSR",
  "key22": "5J69hAypanC2oWA6UnamBYhhmwfEqmtmL2jGydc4STx8ZZo18N1D96g9kSSMuD6C37weBhJiMJPF1xgZTmp5wHSX",
  "key23": "4pusXrxqLGVmnpMV9FMYRr3eXecuzv4groVLHcignpJn8zqLXP7nZSryTmERhgakkk6iFKekmdtKPLJuAwgckJ3v",
  "key24": "3ZMD1qa5W1UFsbwmFZvXtU4cRV3tFs8VkpmC1GCym6aEjCEdVgz5Q3KPa8c1uxmtP2MwFUFhs14Jns6gA7Z1Gism",
  "key25": "xvxoND9keYio3VA2dXCD1KjCHJjqabRo7oaoR7y2tvTsGUFi7ysCot1puxiv5uCtG9bRgWcdU7m8cAjVFTCJCP2",
  "key26": "5TNV2mKRZ3iCbwUjmJu6RsEz1xyPNPgKafo1ZSAxghptJqYrTkgRaMmQ56ZJP7rNYi1bu2LUZ7WEoyL4qZJZYZ4Y",
  "key27": "4Dd56timTxg71VafdVU5dyQdtwksxGCQ8nzsA7Kzs46DLqkJPj6N5pXr484sno2SF9Gpoy96mvK52p8mzgYPAVLm",
  "key28": "nBVyLbW4XcRsVKesx6FeohxmCuqWQD1xjx8YDPmW2GchJYZKaStPuPNfEJJUQMSFFHq34RLtfNwt1VgWrCWNxcJ",
  "key29": "wR1R8UAW2peVG14LyrJtVdHqpdHTb49kXRfUXCKGvzfPMuecvhzkvYiBD16k1sZ17dgaFX4JqCD8PugyZf6XYed",
  "key30": "xT2SMBp9rNeFyowV5Rth7t8KnN9ES69g3Wk8xEgMHJmkcRdWHrSK1PmujaTq1XkMrQKJKaHQxsZ6TvJuvx5wpzW",
  "key31": "3sbKTu5uhHjGqrYGXAW4AvnNNAeHKyC7PgAkNVejZnsoh4sFRNN9QkpqYhGxGLQcgvwJVGd7GkzhTaWtWVJyRo11",
  "key32": "4T5aDE4dyqYtEMecjzp3U8eVBvnsqSZwbaPAeT82hCYarha8ucT8YD6rTd71JbymPgqmDy4knmoYm3u2Ds4ALkhA",
  "key33": "gCb971Fm4YRUrKsiwmsK8g1stzSvPtk1qMM71eLHmWf7hDTgLUYSGh7wtkLSVn6TN7ECXi3LaDRFJEKBB6Rs8UW",
  "key34": "5vj17uhmmkSdB3DUNEygDWJrLBywb8ryRqPPsBWcKrm9C5PgqQ9wxtSxP4bHfSxd3R5ocTf6zofE5GM1qpqWCxPE",
  "key35": "2omk8B3rMk2sHgSCiZGxWX8LSYhUN8RKnE6bK4hJ6nktSuiSLSoY9H9MUYS3u3u99J5imhNmnDqxiXqYPcL2MvF5",
  "key36": "BNroxu3W2xtp5nrHSKHJ98C52Wfvytk9izPqwYohMy9idCrxVB5iyGKHrNycRAq5TRtaDJLLKW2BzAzapcHG5cm"
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
