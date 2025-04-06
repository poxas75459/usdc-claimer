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
    "3vRJYjiEvz7i66TXtzQzZ9BCjsvEqUcVrLfK2a2r8TuQB7pgJwG8PhDd8sppLRfgjSosdw5zvfDHE1stfUG67m8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oG2NQ4M55jv95DWk56BFNuE5FnPtMJ9JUYzq3PFWso1VdKj2mXqTYFwc5L1vvcZPrBmHHDgj1rqrVphcmAtUipv",
  "key1": "vnE1x9MAYFUc544sp65nu4u7h4fbGeBz4xnQRHhSJ6NpmgoRp9piyUvy56rV3Dr8BfjuLPBscDdJVrvGDmvtCme",
  "key2": "3q7y1ACViu6nLpjVDeVigrJYuS8kMoPfLzLxidbnDxYNbjNbopwS4fdQag1kKznymnKWh8anf7zkB1EEEQj3TEqZ",
  "key3": "2dMVbxEJceLUnsPE9kvhhWfbhhqFAS76UWpLx4HRw7wmgd5XEWgbPBr8sen8dtzRhunWLAaKH7MjfgkxidvA68Hf",
  "key4": "5iX3kB4kp3fJVFpY2YfRsJ1FPgAsx9JJcLRhr1sEmrFwPq2iMSDP78UqyaDFAg3v1rAG7a489d3Fogwa3Xxv8ovx",
  "key5": "3bvF1qXwn2bq4XRQpA5CyPkgayLGgWpDTNY9Zr1pKJEMea3jrYVQVbvruZZ9gnxg4jeabiLMQgRkYt6W2EB6QaiB",
  "key6": "3b5py3gRXxeL9HzooiC5uEy2jXPkYDcDPSUeRJo3P76h5kmkh59xcGYEEYeRG6CdX4hke6gnEHGd9wcFHLSNZeBK",
  "key7": "kcBn64oaAU35j3ug976z5W4YpyuNL5EuZvFSkkPg3MUKbcFMNUK9XFaExNKGiZMvAgVi35csqsJy2C9D7vLdnPi",
  "key8": "3HwSW6F1r217gha5qsiC85ThfhrTm1AXX733yJnM5oZrkVFYKaHH6Dbi2RJ1mhHwhipWshUfRhZTossjRUBP3xDN",
  "key9": "5uBpg76U9mp9kpeMRAVpRudRrLANhC7cjp283A9pMaHw5xH2RAputk64wjfASdq7K4Qgx79byTjCjCDo7JjqtMFA",
  "key10": "283q2dtmgxoj2uRSNGhQWx4BF8BCWP7u7oL4bCa3vqhuQHesR1Bv7WC1L1i8tWQwuLL3UFHQXtxoEHqfPBjGeKYA",
  "key11": "3neLkPn83R8s8qK3EpRwQaTRtv7BZwAgbnNCtffBAVAqyYfEMp8J47D7BhGM45DiW2v5JvzzHfuu9pLuFTsM6rVM",
  "key12": "5NgTRqBbMuGMe4oTfNcLas9Q2Nt7aVAuz8KPy8RsxqxzaXy4Z1emRCSBuqdyx5B2mknsQujnhTV3eVWC3jeXKtKv",
  "key13": "5F25JHaX3YrfoZGDzuAWYQEnJiqfdQ1Xdh2dxjxXMruayUVFVbWZxEMFVnUKJKFWn7Ss3xXS2E8XyP13mxkrfoxh",
  "key14": "3SqffcnJTv5PPhbv1ceyZ6Hg3SXKJUnGtmxGRwY814Z5WyFy3B4tQRrsfKjsz4GFZNvyKDW43mrVJiZ213Hf9wEF",
  "key15": "aGVjqYXYcgM3F6AUEE9cLeY6u6SUkBaGyjbMZEF44R1MSRHq3rEMVahYjN2isKFmvKRxsNDwPY1ztCDn2HvYymZ",
  "key16": "5RAdsNaxszvVV5dodzS9LMzbDywqLuPixnaUZ94SiXSA2bkBsA1D73isBXGrzwiPQh1yEEfNRRCSH6wBvWtbe5cU",
  "key17": "5ESZ8hqCSQq18bToPMg3nSuEBHys9NsFhDSCvjeDzmjTkDt1KhQnnBFKHxBGGfNPpBUGVNkYxaKZPFskeBevWHR7",
  "key18": "61AKY2qdSoqtxehjgjmWfVeUR4PQd8NneCQUnSaK83hrU1apn85ch3WG4wr7X3ayAwEnmmYVsp2Buj7kvvxR4TpF",
  "key19": "5XuEEJHdnbMeCyebPUcxD6uiVm9GVXTVcB22DyvzGY7PU8eNWLSMU3YF6UviYokeVbBkqWZByJaCqmhTAS1qLcan",
  "key20": "55U9nxvVTUXabrrezmgd9uwuUicjc441mGqHjYRsyW1wzGoXJkU5bNpiri5h7wzcLiyHUasC1E5j6NJB7PmDRtDL",
  "key21": "4DMJWLbAbUvxW9A898wySeeKZNPg98Y2MTzdezF6tnc5WDGjJUtihfHoLohQ1kouLViipfxFTjPvjuj5jaKRMf5i",
  "key22": "5CMV9UDN8EZx8cD8x41m448SUsQhHuMriRFP2bcvitqQ3DqqmnvPbSwNrwKSUtRjkJakg6B8sSwEoL8mwKofLmTX",
  "key23": "26ZfpE83a5Y7JMST2T2qrSEVAsQd4Z4PpHhC7zcm3ygrk4Pda27KTwKKMpo6SxH779heuqS1pzkyh61xFB9gQSJi",
  "key24": "x9ViAkQ1F5XWtA7kcgrar6We1uPGPdkKfNVK8WmWrw9WaNHMq6bRBpd45tNuxarzjPGvxX1vcptEnubCXPqaPhd",
  "key25": "2WSMM6XemYYB7gjgjT9fvRk7LkXiHM3hAx7mctWe5TSoaJKrbpp8Qz7U798vuL5sEX9tLw2gtUYg4DazjRsdFmg7",
  "key26": "4xLJhXN37J8nd3AUZZhXQU6RMNBSfLg9XFMBmhvdJ9Tw1Xg31Ps3CVyjYMEFXCcdFYfhhqNr2vNAwWby7hQnUxKW",
  "key27": "2mN3Fwd7seBfdPfdtigkXWS5rmvqANStgwbYDuMLKNrCH7so2nJUEsUVGCSSWdmND4PYMMgBovym5bdzuy6gfbE",
  "key28": "3gEE7FnpfAD7pS57LskZv6CrLjHAwZ4mpyUtn1KyRfhg43cqR61d17XbGoKee3Z8hXXmD52zfXTDt5yHeqeVEshF",
  "key29": "3MJ96fCErQU44Tz5r1d47vMW4H6sigupR5cjQmEcdijiX9BznGA6AHkDWmj9kK8ZQHzY51ULJvoidQZAQxkfkmMP",
  "key30": "2FcBy3vnCaNB7GtiamqswqJaFSS1C3rWahKFDrHxsdzbL5YrFK19WMN1tHXGcrP8P1WMS35WLrzQ8dPz8oYkTq2G",
  "key31": "4pcH1i75mHMYmBSYEuY15i3YXpo7PXG3Az2TVoiSoeEB5yXuayCMSF57Dne6BxHcJnXPWrfYfNamRQXDgPZoJjdX",
  "key32": "5v2FTwsp66mLVy7sdCPyseUQ6AeCULTkQi3xWqbhKTpHCRHXhhEZGiRNb645ueybRUaqbtzQ3MnrPAdUyW1kwQmu",
  "key33": "2VeXqdu8e72dVgXDK22MZn7S1UmpC2ZxvuA6ntwLqH1HwADsf3MNwZLd7KaYwWkGz5zfvV2AJaUaGm4BNviyz92v"
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
