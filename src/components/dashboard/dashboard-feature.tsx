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
    "5kGqxbSvL6s4YwJ6jx9WNZ4uVXCRjXeU1qFYVgDgyMkSTv4sMEqUYvepCLcZg6dRXbzZsJBqHKsRYRon5qd7u4FV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d71Xtz7vqebAREjYrn1TnvqoNwkEmaWarifa5PSP5RNAxfUX8vDvHYGaYDjwoVECHHC6vBuREuGpoqVWoM12Kr9",
  "key1": "3yEvQygZBqaWbHM2PxdzG4h93FHDVxCx36A5mD61TSy996bcYJ7UoQLiTCGau6wkewRtMZZStoTFxDxebHHVsA9u",
  "key2": "jmkn9ZaYhdLp8hc2oK6jsRLpBRzQ4NnR2YzrSmF6oP1iaxhvFaZrBEsDbHisZk7ArPahg5xuVroqHBaXLMkKMRG",
  "key3": "5H5ypguFCDccu5ph2ChoshKJwxdPhPN65mTKjwru1fUKt3UDe2j8eiSX57irc1fxinue7RsvSqBmV94wK2QbypcL",
  "key4": "5QyqkMBGhsXh57k8F2dRpde1AugrsT8SKwKqDWfx1p2cUHenhZcq7KN8iP3hmftPDQY5Fj7dGmFBA7j7MoUkvpR8",
  "key5": "3DSKT2EZCgBgSxF56WLHjNaBNHQKUJEw8T1Fjr5Az5CCqAvbJDVubr9RNLriGTMwVPMww29oPmC4xrPfRUmZQKXF",
  "key6": "5u6LBD3izKm1Hh2P2q8pWMWoAFPKecj5BjNfVGXcz6ton2pfPva3jGZe9VrXfiM9fUwkrZZeLur3FZpkvTXnxHhA",
  "key7": "4u2gZh7h4JU5qzcAg4tZZVXApRA2eYEvvVtdkaVJ5EpqnVZuHRTSPWYYH61bj22AjqBucfMzvonh3Fv7DUxpqkvr",
  "key8": "QFCoSogRX5gsUJDGmAphTZ191w2vaX4cVqyjdL2UAhsUuniGT2z4c3kSjxUptUZKo1wueZq5wxED8BvbMFh5ZCx",
  "key9": "32agd5dDKUHTmAWR1GKadwV8Ps6Bqg6FyY6mvm3axvL81iYeadmK2e5Akrn6gK6hL8ydnRVCJ5R1xk1eCaZtCNqp",
  "key10": "2Donv4nRBr87cCiRo8TMNzsCHkYhf11ryaqc5R3cinzsPLnYt8tmAMRzJpFYyBw1uzzYTxSThfxrSdeZ8XsK5Kn",
  "key11": "56M7d56wk2fv2yZtP98wk9KCKk5zj3bCsouR7qx8qHqiFfoEVGUJEXVuTCPp7oAL5C6rRKrpk8sYPxRHJ1SvPKJC",
  "key12": "2jPDH53ZGLyzWFVPmPVKzj3J5yEKnubTDXYuKQ1FMD2Cox4Mx62UGTmX5LhzVFvPLAVHrpFmJ5ZajmLg6nvQWk9k",
  "key13": "jczBZsubwBqzBZkH3QtoHW7dnRwy9yWQBHKwQavGcNd3JtsWjfanT7XoHYH2zjR7zxVju9BkgFPuTMBvmeHz8NJ",
  "key14": "wV6SgUXvQyBfuFkjN3Uw44UEVwypxNzk6waVQPi1CCPXTd7GpaSBcqdHBvFoAzBJfequgD7KybTBkHSEj57uR9X",
  "key15": "4HCNs23pVDPMiEfNGsYc5WM5N9EsAKEjHhaFonK27SLuStAAdMKJbr6SzwXx9DwrB3V9kvYA6iVqHtMrtMhhYQdc",
  "key16": "57WmufT2PRDgUSftAM9R9eFFcZSHCSn4usMexxxjXnTWBTmi34e19zGUE5GBojjHxTM7SSHMAbDFqQ3T39MfmACq",
  "key17": "3Pp2A5WAddg1jJpMb65HVNDJbnwfsqbTG1AG5JovXR62anydd3HmJUAfvsFqBX8GnEUnSuy1PFybKHt3SaLAvS1R",
  "key18": "2phPt35TQ6hGs4s63ABbzhCzbZYa2LFb9Qx3KzRzqubjogwXUfbBQ5Q97qciGwVfYhnSqjpUcdnVMGciLYCw8KYT",
  "key19": "2tQdcBFG7mzg3jWuUSgZSmVeNeuatQFBJeS7yoVbRYfda57Q9GwbeAvj7XXnMh7GcQhhC7cX7BRbv3HhXqebJvFp",
  "key20": "4ybh57kBT99FRUGAywDtyzGKp9JU2UKBLREae68mnfcfkSW3JfZX2jXYBD41mmZz79K8dNTwpKZFiPX3F5PcykRq",
  "key21": "62Ynfu8GYFBwLL8yN2kXNYgDGaCQ1g83rbWrMM5mQVUk6sqKEnD7c7UkHf3utf11pFEtdhVFCeQyBHdL9oYss1qD",
  "key22": "3qJpnEVUMZQiDwzB74m3ShygNKDW6MF6EL2TFeQTnmG1iSoVDCY8zxnWNSaEfeWfJLe18xxdnnToK9BJEpu7rW5x",
  "key23": "2yuTBZtp17NNMwncdweun7GXywBFnGM8gWNju9vhuoawGdn3JjqXtUXaTHxYPcWFkdpTKHCDaRZaCAY7rgZUhz76",
  "key24": "QJm6ACMvhToQM5npCRDtdDD9JvZayKsJG3XQtiZexUNP2x7CjQJH56FfDy58d2yoSgXjLSiEuYexQjdPdrj1GGr",
  "key25": "RfMvwQvMgwr2Bxm78t9fAeCX4RE4vu8uGDxDHqME1cmL2y63xbPdQc1bztgJ121HRN6xfiaCmPXQ2eHwmHmnddM",
  "key26": "2mwb3mczYAeUPz5rbLGXxnqsZpfkP4y2iDGPYDwmkPfAYdVcwX5jcK3Yo6FbBFUp8w21L5F97eP2YHLy182jvB2n",
  "key27": "2TN4pMigyVtaq6EmSJV5LeM5oovfhkdPUAXBsfRHrphDSyWsxwoQLrdSjMHZrXdyVBBGDAK1bdo88Enec1nCQiK6",
  "key28": "MM1sTrYJokdnFsnBrKKQ8xhoi5JWJHHho1ys5H3ojAs2dcmSV8Bw6dM9TmbBCJRQverbco4xYtP4tcCAbiG8jRY",
  "key29": "2viHaXrgAi2wuF2crJ2P95PtV3KetJ7B5rUnmrXkEEBBuo5U8Ghv9pXkubXnJhZkUxJPfZfe1VsSp5oPNscZruWp",
  "key30": "3kC5tDWyxUJqDTd44ogQGaFJt7c373cA5cePQcvagr6knG8CDTebjWaM5LxsGjMjqPm1wRQ1AzEtbN5fWqhyixCL",
  "key31": "4EaCF7L4RSgHLYsQqViEG4AhfDTDEL57Eyq7AytderjaFSgAcdTtmY5eBcn2Q2dsg1tMVmXsaR9MSdXxuZRHD4Ds",
  "key32": "5VKT6VaRfoLU8TTnC5eph3VCWNusPBQYQ5P4ryaMenKc3UWcFqGgi2jhtBNmdrC6giAENieFEmsmm8B37Dx1ctVX",
  "key33": "VHwJhCXH5aiERe9ad1rzAuzvjfFKuArxZTCnR2qjGY9LX4RF2eXYgnUbipws4buntBPAt6cfpPqPGoVQTPgo9PZ",
  "key34": "37b1mRNkKtLSFJG2Qh3mUfjV38E51CWBX9P9d7s2gyTjaLqs4JrQupzaWBLzknfFm1Lawa3LwUFSJroEn5h51avP",
  "key35": "2UCQGyArL5oG9nqTcoo3uGwp9pDKzLmVYJb69WNjNJD1YpPABQ8ij6zMcp84MSKdiCs9kKdzQoZjqNbmWJuWbosS",
  "key36": "4BTVpT467PjPP4YiLJuLG1ru3SLG8S6YAFo9Yi9sDfM5num5sa2BTQ2k2rbrxpq5yhXhaGTVuXLVqY1u44fSRpTo",
  "key37": "2v9G2NRbb3SSMP81iACvwhiuvApMsvxCkRboniCDmfqudXypffDxNBuwYTZKLxEemRF8UwHn7p5Ps9AgRcKgepgx",
  "key38": "3obMPsLf1AY5FD2ZXTUG3qRxugwUKRFfoaLTF4kxWjHjARM5KAVLEAAz2VTDSZFjSJPJsdFTHfNQhEczJej4Bi6U",
  "key39": "5ZrGnDFes2QcE3qUxVNMKb7gYRthYL3nQy7JvuKWg9M7Gyui3g8socGzbeFFKCWFLM97sPk8T8cBj2DBcxaoGcuA",
  "key40": "5J9DRGTVB9jEavSFwj2Rq5SFN7t8xE8M1GeYn4V684AcyTcPeNbJXvrWXkoqDcveLFP9yMHjkXLQcXBMs3WtRyRD",
  "key41": "25m5DGnc2QTP8fVE99mENCVRxjRUCmFJWr5cYmK2mvE6PAvf49dmPyBVN6PREPPbGWgaMXVYt2ghUJLs2P1YHof9",
  "key42": "568SF9ZtziCz7DPTWzF4MF1QbBE6TyLdvPZhKA6kW1GetrrCPsr2JU2kNEuQ4qxbU6ivSEFgN6jn8ALpkeqe3kb6",
  "key43": "3YstSBapw58i7AsjePeoxCD2HBAFj46WoagBo1Zk8NzQaJk6GijeS8iqGiuzb9MTHpJyFr9p2VoeNJH87kqbokoq"
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
