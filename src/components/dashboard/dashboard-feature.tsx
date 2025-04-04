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
    "HzP4EL29nenN43CzgmcjZWCTUG4JL5cnqhdhSeZmrfbAv948MaF1SKS7v8pfuf4bj9EwkPzzsH5yzJ2ZjwxgCse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iynuyRM2uzXYssYeMKKUsoXLJH5pPLZfndHXqQjqkFGuE9TUnxo2nAkRc2pFgEo9hJ3b7FNrqNMX7mvsqGUnDW",
  "key1": "2dhcjk6VVWZhdhhmYG32mdrWkveMt9bEMXZjb1sCrDtgXuA3jkHr8ueDo4EbcXapAHBKZVQRvq61mJs8a8wxixnd",
  "key2": "5qrkorqLoL8NvTDk7uVMQNWsuYGbhN3cgGDc4seST5pj1SkAhH2X1BZmD6MwdfV3YnQrApofr47DDnjxHMdQ5AcS",
  "key3": "2S68xUACqJGZffvo9ngbYRUBevZjj7AYX7JMHNdKGji5QX6ECE4GhbVKYQAJSPji1UTdFstcNcAwRG4bwpHKFcGi",
  "key4": "4rek1xN7T4hPezSo91tvjfhCnmndCTDfvF3dH6N3Co3NJbyr1iv7xwnYtVtixDKT69Za9kVxs9rEh3KWVhV7YMYm",
  "key5": "3dX6jEnPM3qCLGwXQWkZvNa9sLM9dKNFKAD9qtBEDA9iiRXYqddxc35K7nr8pVYTmv2VbEdjRJQqTmqVzEkzpwdy",
  "key6": "59cYNTjkwyYDchnWZAHJqi45ogaLt8wCcZ8VJASUK1jADynSovxZZbghQmPNVKRnWceZ5TaE2qJhP3ukDpmbSbFc",
  "key7": "BEb5rTDuXkFFxTdKm3FTsytsJ1ojmACcqzQYDrn9rdySUscnyKg9kLNBEAxU3MozZPh5ZticTt8hkM3JsPngCir",
  "key8": "SsFZSUssHiGfaa8py3UwdZmGyfkhJQY51Sy9u8Gi5xN4LYsh4D64eudx4MWXAzmwvuNjWYLCxarFU5T3JRGi3i7",
  "key9": "5yds7wGq3F9YmK6JJZxcScsxXf1Hdzq2VCMsYdEcc8MBtj8uE41u4dhtsb8TgySnYokYuyZpjA9DDqcUEb5DHuMC",
  "key10": "3XmAbTBvqXgQJw56epfMyQBLeAgAuVxpGDbAa2kBn6WozWuH4XNm2NAqQxeHa3p5XKPQRWG8oUKPGpGoDEQE1bbp",
  "key11": "2NfoDeB67Lmmwp9cdUXspRfGher3Ku7bV4W4mTgsdpStATX1XDiXdmVyQXXuoDyEYTMzNVg7WecnxTaD8FYYJw7Y",
  "key12": "5Er3ohKSa9gniCfTnYios5S4yVH1xufKEuSiaoZYwGR5NdttKvxo1dsZ4HnLwfQzrn5rUTJVTjX8Z26vv8icyc4y",
  "key13": "Ey2WsRuqPeZJ5hk4sWzXYdHxznWraSzjoDtQNtXge82cCx7DvqTaDrKguSZF5DzZ2FWyMFr9udWoyyjaw3mEDMz",
  "key14": "M5hPRVYEC9UHxBP4azWbjg4rqfb3NtD8b9dEgrtGyn3Ka5geBG4tFXoWhZzZaq59751NqFfRaket49rKMCdK9pB",
  "key15": "2wLffQRheC3bTgYUushoPaDau6KupPK4VixCaqN1UEbeDqNbRDXLRbe5njGAB6NV5a7vZaECuyMjQYMvZvvmfqDW",
  "key16": "dX79Hn8p2pT73CugdTb7dP7yiukdLCZe4J479sJ9i3vyoLcd9mbb35rszFX7JzgwBmxWxAFAZTkQux7v1eyeCoJ",
  "key17": "AX2RoWecvHb8KjYYhgcHeCEWfiRnjv8EFrhPp1QbFCdT7u5oZbDpDZLnCB8MnACswDjEoQfGeiGv1ZS2LruSWM7",
  "key18": "4xfK29JsxrrF4KmSg3rRpVaxLcG3RQcfsVdXYtfPpFwmRrcPoLGMyepo1GmgzxdZxQXKFYg29B1CCRqf3Vca17q4",
  "key19": "G39zsVoawNc8dUpMFmbYVo9Z3wBDWdqH8P9xQwxqjhjWTcez3QMcofm6vCgm9itCFjT9fqWu55zb24oeAcL4SyF",
  "key20": "dBDjacUoqmmsCoTM5tMDhjCK9JmwwTBepfCmAUf9aEf91M5jXXRUFTkVfkHCKggBGtUUKehpz7NK7UQGjs87sTS",
  "key21": "2R9x4tkoTkHkauRz2JfhJLxAh7ryTp4KfUPWrcfgrACtAtZ8tzoBf19dyiHAVdsSEkh2rpBsany36ML1XyFRTUBv",
  "key22": "5srp6qUsz9iSvceVuvcFFJrq2vNxUCD2NrtjfecrVgJjZir1KPJDPLcZbvGXoS7g2RByXDHG7vdguDx3jVwmErCb",
  "key23": "3cVicp8VfZyMmvrYraeoAnaqnrFoWiLdy8Mz21jBg446W9bbdqbeRiRAA9BzQyC78zuHZAs37t27e4qxtrtBKfAm",
  "key24": "3AzLHiqXBL7AEPC5wX8gmm62QoEogquC4PzbJyjD9EdZbS7PwGS7VRuRYm1rn2QrTxesLzPnx71GGkQDVDGz6mUY",
  "key25": "24YH1FyKPNMfxJtRD2hvcXNxqDoC2RmDRDJSnzaDHQURBExEngtowKLeDjh2cYvXLBzTALNjYmUvEoPGDQceYyu2",
  "key26": "3WbHkMgjR54AP3BrDdqdMPPJHGEe4VZ3AhMuSd8WiWYiSaQNwbq4mw9V25qAEWdmAvVLavRgH1LhBfYjQeybcvZ",
  "key27": "3jXtoVbftydjAmy1HRpDqytmmJzCZ7hwsh51687BZLS6SU9EWZgivtvjawoKqVoDxaxncLL3G5r683ievAzxMdVc",
  "key28": "4DjRmgMbk6c7R7t7Ej8qdXdK3ubEBTVCKZZq2nTWUKhT1BorByeMP3pK9Toq1hePKJAFoWTs79e2PbEuxU7rNWrg",
  "key29": "5QVyPMPxL4TDXD8kQgArFoiRcksdLEpnXgx9GSHteq4yp6gwhup3N2H4EGhoj7DQ2h9UdbPhvSZvK3pK3v64WBVV",
  "key30": "34awkEQSRNQMa6k1Tk6eWZ23YFHMUNfmeeL4uNZrsXKGJHyhV8WUqrKq4vVFKDDE2op1CyeX4wJWoBAb6n2KVrX",
  "key31": "4G4fUAkgYNCq6GfcPkRdoqK6bjYfnMShyPc7oxgrqm2p9Fu43Re8rT1qiJgRtpPGf5b595aYZh9vw6sesvi3KsM7",
  "key32": "4w6Qs6aDJhkZzzUYe1DRGa3eLgR3oaFV4qcWhzkuieP7pF1gTDsSAFBQRwm2gGc6Uw5hCR34eFRyMa4Bvg2SMW3z",
  "key33": "5B5R4YZHwJTHdV129C2KAd9FtuJstnFp16gYFJVKLQzP6xsLPA5Dj5VGcYzVByZt2iEmvAf6nAJkeZYjP6bNFU93"
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
