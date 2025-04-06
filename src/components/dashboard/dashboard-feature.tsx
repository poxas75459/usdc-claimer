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
    "2GGb9fEhWcFW7sHuxXkvaUSqh4YRmznioQG9Ba4aKpirhPhG3DZB4bx8p4Cksc6ypzmPCNPSja559akDDqfwT3D9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3imou7SB1vpztPudcWxDpcAVhKMcrKaCvMTTZV77mQfvrDcauvUpH916aALq1nAna3oorjQ4j8XoY71ormidhpV9",
  "key1": "5vVKjVLAUsYVjTo3pPzRudfmoMdLGEPSUPE665CFxs4oPhNssPPYVBrf3coV3rNGK4GvvTnSoUHYWUGkN7gfvNV5",
  "key2": "3dSqLuvL1e1FBL6MfYYwC2a74gQpAAbQNECGimzB4G2N64MhobKzPtZdEtRbCb75iY4KFZknsxLYv1vzwRHk2JA3",
  "key3": "YMvFry4bZyFy3UvqoBSAG5Noq667U1bPGutgJA4K6Kkqi5Lozx146Dd6BJ3vPDthXgXu5iwSgZ18oJ9meH8T7tR",
  "key4": "3h2Wjp7V5uCA3aV6Yrn9XCCd7vxveybcgSw4uXq4qcWw2AHTLCY4nGcoqkktRVmKt58ANqfGm6KVUNPNPbysbxVy",
  "key5": "4mVNu1Qd5mVjLEbZ5uQmMMBB2CQcHhRvHNNBktwTqunNnAjAP8f7cYXpCd2NrbRFwumkcYfanYPuJNFYh1PeDaMM",
  "key6": "2RHv4hrrCdowPdrq7MHZRaSYQTPYrB75yec2Sxdisf1BTUGPvxG9WLYMrQn6DAu8JQY7CcUHvXAzT89x7H2B3dte",
  "key7": "4cdn9y689B1XFFiSfhsFHtErmKAeDFxfxuP97mZZiaB1rr1CxUta7ki112EJQ9FFmRCtK7ZfrryDXw67xrWowggf",
  "key8": "5KDXfqhreiGcR3r2bZECbnEnjp8F7gGvGG5JpM2qjgjmU1wV5w63DEq8hrf3UdBMXDixXCSU2pJR43MKLdtPHh4H",
  "key9": "3RFSxiQrVKXYQXuM5up6ReGymaU4feF2AzUrthgcdKZUTgWEMDrYurz8JWqZPZveRm2KZf2Fbb3GZyNxrqyLF2z6",
  "key10": "3Fq3N3w8N8rieHHBhMSGYuW3Xw4ocdTar79e8q8fUpguKkykQhovtpBXGiH4wqWsV3VwJcWDXuMy6zdjknHnTi97",
  "key11": "3Vxk6ZqMLzVtDLDaHYbPBJLNBmEgwGUzPMNhG9xjhrVvFY5nt1MpGGUqf7qTnYBVtuCPQv4z15f22PN1818Q5jqf",
  "key12": "5bnBXjbg5cK3GT8Eceq1Vr6h3h1cv2TXMk6JJERhyxAGcJTQVyJRpXvDEwWiXKoeyVPUi2PYJnNun9okF47WwBAZ",
  "key13": "2Lw32YJVyRNwZnvTd553eEnvNRXUWd1RmUqbJPGapse7V9HMxBExnqy1kyjPnN9E1yS7tRafHu12CQef5Xqwaaxa",
  "key14": "3MowacsjoxwPuUuv7gKLq8fjzfqyBi4VJyPf72f1VAQbMEvqh43LLxCTWEc3ouYKd9WR8d7JUzUq142NzypRn2fp",
  "key15": "623t4mpTpn6WCoEkGbo434GmUPMji72YTc39jBUphjitTmsKtCE9C8BRgHrHrLkB6AjoBmxa68BofyV8AbjRFMVM",
  "key16": "2idsGgdnZon9LdmjHV9AXNDxnM4CWnypNhm8AAWHGVHrzVD5NqKWrWnuT7uuEJFeZNerf7NLHLxXn4uVShKoRDsH",
  "key17": "tQV869CbLy72vEdkcSFrsoSP1JHQjGbJuBDJjjHZiNEf5B497JYkXnkWWXJqb1CqHagys4PCX5yAiu8EDCjajFX",
  "key18": "29YbEcUCE5ZWrurbjXqAL5ZF8qSxAhpDLzed1q9hsrUoJ7R2A3wEMhKwGEhuqijGjqJBQei2Ysax2M6PRRV8BB4B",
  "key19": "37mcQ1kwBhW2K6UWM7ivsb2TZEjEVi542uQwtpWqWhfQzn4nUjbBsP4a5qnfWZZtWCAKDgmrsortDqwEEMXoKmRj",
  "key20": "5V3jqykHPsqcqtyF49u3NfkTkrRDVXxyzqsc3np6SfxVapupJp9FGD71XkQEcYWTPMDm341uikW4DWKMo9f1qjSQ",
  "key21": "472evaonqfp4b4BpqvKEoLRiXmJMu7uDpNY9os1PM6ut34Hhd6CPe4unWCpVmRKSubYzP35dhHtZvcQj7K61yn9W",
  "key22": "3gYDucPnG5e8KA15cqZ4DCALee4YxdR1Fd5N2TwU3Stcis4ko9r637bE5pdvmtsaw3a1ihvPRrUvqQEuXHMzXsDD",
  "key23": "4boCiMhvpCPczXMaWv2cQLRaUac9cmjpGPXgYqjsVwjBGfqzCvroTvprY2jHHHWXQ3y4MYPTkLwhjfHQ6MRacojr",
  "key24": "iKVBD5QqX25kGGgV4aZkWABQPqYG9TM8FdqhT3jEs5Gfmbt537YCDHjaQhmXtVy3NbjqdJtZNLRFPWN8cZaNLCC",
  "key25": "39hzPHxaaEhVcGR6YHF2H1PGmuMwhzJ9LuukB8rSZQP3gADECCaSMCemFepE7Q6kky1gPXoZJbSG6NXtquL1u1si"
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
