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
    "2pXqCk9bsGwGf9Vj66wYapbdkqpV8DKpTSx3U75Su6A67DDDEAogvMu9zjZT8VkfCg3dVN3FqAFGZdjVk77XFW8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s5uhMX7Lzg7NTC3JhrAb36qtFsJ6iynD5L6fADuD39UVbs3ascVPkjpxVxq8SopuPFwGGdnHF5sk2bsvpXMAn89",
  "key1": "5twUfdpfpvrhWSDZ32pFyEXhtbzbstNSJxCB5QtJ7BTVDS23so6y41cdM5DoC6uSahpGbrCjZMDstBay7ZZyHrjV",
  "key2": "5hDsZZUcx3GZEEgAzhfx21NJej8DZqAGNCALCSVRenJ1sd7MfkNDaR17B55t43USGirqyC7HGe7mZVBBhCUgFpKB",
  "key3": "4yq5FLsryFbvNH7vqWhBnKPhptKK3FsQ8VRYA5Ri4BtwEYtB5Y4TYf9XimSXmasi6LFUmSCiw2vFziJrLPVYxgWo",
  "key4": "y92e7U4WQqzHJYw18c6ZnAkXAffnS7PDsGgsSC54B68UWpReaXmhCoxsCs3534nQJWmqR62rYPyugsZbYTpW9eV",
  "key5": "czvvcsFkZ9weyPnuT2vMM1vmrXPBRomS5xLrXjzVUjbkkYLyf4peVNu1t7SVF1D3jNSrppRzJm3tFgZX3n91XZW",
  "key6": "5hzznAWzNkRmmTBnnyTe8n7W5Vq94hU45Jbpxc3S6nAMjL5GojX3MeB8gTaEZfkje5EXJGNc2aMyurvZUySMRtTf",
  "key7": "DKo53GtQSgACTKqg6YqFrWyPksLLRgw4KBa8LjcXrBbXxEGBubGBnnhed1qZXbsGFL5BaraYCEdiJzb6hyJZ7zz",
  "key8": "2x67CJnV8Nwhe1fFHaBaH77VYQMMToHEoUtfHSjMV6i8rTPo2mr9B72rVzwh7VXLvRafkXTRzMWWJ2rB9AfEhqFS",
  "key9": "2ZDYDy4mLbfTcfUeXaFsHz3BLqjV3NeEkzA3mZxTo9ZT8dK2RDkNTid9hxtTZ4CkzeXSMN6cKCnDSMZv8S4TX5dB",
  "key10": "2Vo5mP72Zzk5hAP3cCmKxc3neYWXV8MkocHVgKzYrqX7hpXPPTfo4rEKZXj1cmMoqgLn29RUdX7CVtfLyvemke2m",
  "key11": "47ZYu5jBZ8gAz6WAvGDUFDDMzr3UmEvdQv3WRoJyQs1qhdjs9BBBupPvxDjhcB4fvHJ8RDe6oquEfaC4PwzsA3xN",
  "key12": "2HMmV8MtfDGW1aSH7d859AFSiymNdJD9NpvUpHFEgsYzvT4RSS8s8FcxZP1oQ2qVDeH9QZGPUVibX4J5UfpsiG9d",
  "key13": "Tnud9MxRyHXZ46m83CndKMmnikWZZwjhYeZgueMwHi5PH4UQb9H1foE1jqqWC2qv44YVtwgVdM9VFw4KBi7F78q",
  "key14": "2zKP7pVm7Q6QofTE3R64TCb2BNLcS1jmDh466U6awo73LkTwM4MUySdBkhPs2nF4qwmq1awyQm3kbFEUNJspFUWW",
  "key15": "23FDrSmJgtYjAmh8y7BCsfj1VcjCTDuA3a3VezQRUfed3Trn8PsFXXfwpBooSgnRVJJGcohdBvmEptpLKATXKuee",
  "key16": "5xvnmHdC6nPyyqjEsC1ooGsRjQ13tapG8M2NzBVuVGnx7j6U54kV7VhrwmcJ1i8MckNAcazXkJcX5ZrvfLi2KW9d",
  "key17": "3YxiqFYRRKXrKG9YsoHSbJGKzZpTzThWrbksEv7Gy5khUS9aF8JWLC1ZczMsvpyoXi3qj843gokocffFqFmr8M1K",
  "key18": "5nPhVDouQFY9cmhRqsakh5q2USRobSDxQnNhSpkFaHbTPzzcvN9pxaTGrRUrF5dHTdXTMKbjkiTEhxTKfHeFrxRg",
  "key19": "39J8oMWWSGvSpsaAFfdjqrr9RFESoq44DegfyvrW9FWWEUwuWHUcddDzC2q2P9bw5hHVfDMx8eg9KRthFxruAMUG",
  "key20": "5SVwEWUbtMr3KEXXd4hZhq5E2adeP4r5eMbm4ezj18nLoRjAvAAWKhKaGB7hcnztPD7zgud4FaeZsP5kTUATRszS",
  "key21": "2VCwaXJxQ3hNg46QGTQWEEBrV5Sb7jKFvQgc94tqNvuNMxuvZdUVYNY9ugpNyaYpLWfaMcCiAgnwurSqJ3Mmgghk",
  "key22": "4sUuZf5urDTSeDZDFPA287QTMzwM9KpwDXnovHrmWkHJZsTWLGVfTyUB9SPQ9aTWRq2tMTcWJiPnYcEnHeLdEM7C",
  "key23": "4YzxQKabtD4ebHdf3ybNanr6DZ35JqxDXWiboTMYwur5aBK8FMmNB6HdvSCa9Qj9v3HPQRacVxxV1K9WoARpW7BH",
  "key24": "5JbJ1dhjG69oU7odgFK3n9m1CMmCrG987MbFX9s9UkqESg94bVPR6YdKzmNS8Z6YpByNK41g6HmVvbdtRbjvwJv6",
  "key25": "4CYV5LUY2SakDgDkimmUwqCkwxWQfzLaFu6btd5Dzwyf4BTqqBR1HRZmLMx4vCGLEbG6c2kS2PCE91TDmLeTZgxA",
  "key26": "3DyY73gkPvRrqwwxMc1C6cqCehZuA3Fe2PwqrHcRpLkTQfnHYS8zH4Yr1gYDqyjQMegxsxeEoGR1o8oEoQvyKYM3",
  "key27": "4LD718soXYa8Ss2gpkhGszLkpqebojYovFn4FRNWV16ShsVQJMAKCCT7NNXhVkixfjvqMFY6uQnqDieDBwcfiYMz",
  "key28": "5o5uhP7iJAptkkEWq3exfe6owUbyCmw36KFdJ78DG8W3ELKsNU4AK96pWkGbBxYpK5Y2VgjXwRtWmKXc1tDnBfJX"
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
