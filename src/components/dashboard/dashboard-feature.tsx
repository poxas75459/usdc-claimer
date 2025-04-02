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
    "24Yawkwyd7ipdM6k2d42J1b1cohkecATK3Zk1iurxBnGJ19Jy8BwspAfPtEM7MDEEhmr7mGj8iRxWnAjgmveAwZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "484RKP1kEWXMdBScG5apueMzWj1rT4PAu28V4kcWBsimqSHbiWrA1QBSAhKFDoc4p9TV2CKjyKLM3SdLjb15wvYW",
  "key1": "cnY1qykNr3A4mey1TzJjoRw5hHiz9ApqsqeUDKGgBuJtrKyMWzemyJpVkyPHhMBJxYmRg9p1mShRecgexYkrqaT",
  "key2": "4PVEpKvGvm9Hem12fJoq14GYNjJKgqWcjGJJvwbHf7rvrkLGQRsd8XkCp3637iYLr4PKQhpMK4WwtYYXAjUYpSh1",
  "key3": "MGQjpTBiXEcPU5NUmsEySmsBm469PqHYzP3bn6McJojjosnesUmeVpJrfdqppXGEP8rMV1foovKxQJ5rwZ2mgjL",
  "key4": "5CMLB862ZQLyYnCFYK7apgCt8A6saGyXteRdfj2dGqTs3eTEfgYjZHESAHcBM2P8Ww3F8VUGvtqr29JMqSPAHe7Y",
  "key5": "2Jo1juk5jeLeo7zQa4LtSCapARD1pS7dzFJbxBjrtirFy3TQVe88o7MiRwNaRL4pVMwTFkNxdEbHrE1YUngkP6i6",
  "key6": "2oR7LbaC7vNEx1QLZ2Tn22BKtngjK6aoKPiPeC4cxnJeTFf5F6XnYmt3ScJ8stV45PthY2zpFZknh17XJivZwAPT",
  "key7": "5XL8kUiRs7uY2MxarHR7V4z4oyJprLz1JPLeZPKPFSsGTkBTVfTuobELZwSwo8rxCc4zriMYqJPGtKMBpBToxCmv",
  "key8": "65Rn3GpHjmW4uRnk3DSXpJi6ve1z5pGowLac8j5ddXCdrL3HzbACH6zfGgqhfbxAy7JepqNaF8WCpU7i65t6CCZn",
  "key9": "5XBr8zehxabbxFV834pLbHuY7NvdcfN9XdbusLfNcLGnYMuDoKyHmGT9Ba95L7VRohhhQ4ccF2wGTNVr3gExa1Rz",
  "key10": "2BsMA7wduKvCtnGEJN8StHBavStxZBYa8fVa4duKKc4SrQsAYNRJwhGKRvA3JQxmPX3iSE4TrTzfDmFRTzFHTxDs",
  "key11": "4ni2mxULt7UvPzbUooevMnxzvDXozJkS4Yz7AwhM4cX9Ps7ngBfmsdPB6wFC5LcboVSRuJjMGEYz6Juc1DNJKWka",
  "key12": "3CNDwSDW6J36XqKi3DTCCUiRvWX8VJ3RBMBXvjsx8Gc3btogydagywMpfF2ao1CeDDLbFdg1PGEcxyCZUmRBzikC",
  "key13": "2H6ta6kFDSkYtR4D5QciRHfewnS3VnXYvDXgnojtgt2TFMZBBnX775CVUAUDsqvhdaUuzZXNj1VaBvuv2LrN3jNR",
  "key14": "3CuJFw5uoymz5kyygfyKCb1Z2exkLjEYNRtKyXY1cHLRrgRHRYhHuoB5oSc6jxpqnDNEG6V9aMeL4HBfVj7MXJUx",
  "key15": "yfBADFzkKtpne9iiB5Ldwrg5KZRA1zWgkP8Gi5fwvQxRWhueq4uFUy9ZFqtczK8WedGZGm2NXtbL8aAoStjbXQ3",
  "key16": "5fJ3RrekVt65b9ebiuQ2erV2AgC5BEgaT8HprcS1t9C2VjvircF12vVzkvGDLVBjEdKahBeJuE1fzYTqXaPrhwKL",
  "key17": "4SCAbyCHYfHseXKU3TwkaVRDuW48tYJcXyY6Xw6EEfeLoMA6b5M4pusavn3xNmAN2FhmK72LPBpBiKLhH6VnPDKH",
  "key18": "5Wrm614q8Y7yFUTCmikDkpxEkqHxV7wgZNFpnBbUwN2zScV7fEAv6Jb6qAzacLq5jbP3iaJhYM8ZJUy1fdqZ73rR",
  "key19": "2XZbrN6Dgh3VMKBZgB67N3Tj3AiPghekFP4DK8gJupKiWo59qKqU7zqyf3mrrzQmUiLvRdnzhdLXRd7aGkhTYYgB",
  "key20": "4dDF3yr7HFjtadzx25TKB9Y7Poq6uetwo1fbrfS4ddR8q2eVP27i5JkJkEvcW4phXxCDZtxoyAkDp4XzEtCVYaHS",
  "key21": "5wptm9zVFnYXJGAXCx15gKZELDdo4yeEtYdqgjQiENSafnbeqgXq6BvjFmp3zChBFYWdLBHm64syJjv7toMpfXto",
  "key22": "2vr6ALrTZKo1gjapfkGiZte657kT5ngA6yZ29HkpWdTdhJLDQgtWP55vjhJFf6dP3Rn2f8B1ip9B46uVLr5yPBMt",
  "key23": "4drjfwix5JS1pgisWnQEnsmCyHMS2sadNeUb8xzApNRHDtte2drk8y3h5MAnJV9BuSrB162uvLkiZtot7937pdnU",
  "key24": "2v6kDhbdpyY1DFgP8KahvL7SDYjMKRcp1XDKbrTLZNB342P9xzRM8EcJikqDqEzkfFp3CKyueVPL1YTWb9YpuoGK",
  "key25": "fnJpy8AMNYY7ucx8qMLrSzgcEJEE2incf7DqZdgfAYKWYxTzcWJaHrCmdzb9m6tADKziVFBnJZ8mrdofLikPAJS",
  "key26": "5L1YxJUcfKSVhvTaA575FYSdqW5LRCBPrQ4Fna48AcaL5h9s84s9RkfzQKikBeKUdGrCRgpnZvuBTvKKJTBUi8RW",
  "key27": "2K1dJarVkkPE4VQ9kw9zJsRU4eMvBb9VovMU537TLq1QtwULqZ19ituAHXNekf5z927ZVxszRStLnXqcgKreG2Ai",
  "key28": "31CpKLLj8PGeuwuNvKrXJtCAwg9pFNqVWQUeqWsf2d3JwPRoj7UAo4S8GAZHLq1y8eLpcS94nZr3cU6dJSdB1ika",
  "key29": "qdGfRkzANPXuGmSxsiKstgurcWZ8Pcsch6fwWMmH6j2CPoyePXsp7ezhYa5hL83rmYBz17NiBoY3z4EBNR1cQNK",
  "key30": "4L4FEYxFJk9bVpKxZeaTn7myKKiVAawtCWSxobdxHEFJXDixDr3VF6iHo8JS9q1YLx99UoWWHjGvzMgLJLLyQhp4",
  "key31": "5jxDpk3ngtCmhdZY6LkXYtrEGot6wVNvsm1pQQJYRJLDzT3UEozHKnQ5iRnSh27vibSdsCKcceqPoMn1mQM8W5zt",
  "key32": "v91krhGN5DiugfyyLEJugBTGHS812Y4CVW6N33WtJjKXWqcFf8sP1CUkbEo4aiLyjdqLC7KavGG3uNBk47URR5k"
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
