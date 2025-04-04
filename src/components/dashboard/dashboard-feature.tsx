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
    "2K2p67s5ncMSkBgzNLo1fv74Y647ojcRBeBqDsqXiNjtyikFs7AFFaMtNQ7ydKjy9s1EyvxwsE2YgqYFcmu5VTQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gZ96d6FU9SUCwuF4aro8VwLekrizaGzqyiJvCe4PzuJRPEiNG5NinscAE61xSF9SvPgEfwFR7X5oaHhcPyVCEjt",
  "key1": "4SfYpqqRkUpcksfDJr4H2zqBxvvXCBJzh1pf3ZvNSR8fnqQgeJLQx4kRjxFxPZNS8MUPxTrX3XJfYSPJ2KR41BQ1",
  "key2": "5jEY6rYH1RmQXRsgKowbHHPctmpBLQMArkHEPn6PaFjbnn39QNiLvUJWQTCwZBJoAkrd5114QELkTpZTfkrDPN43",
  "key3": "4CvwCUtzeDztcf6k479cgPwhWaYXQYwyRZiBLb9Cd4hoYnBy5f4RorFTxZ1VJF7YQnM3EAfZmAiFd2tdNPVGStgf",
  "key4": "3Hq8C1b4sdgCH7vJRpxjhH4kdW9gGceFpCupB3nvp4gVNdAd5UXWFj7fx9YBsXB8sCD2DBP9VsyhXKPoJMi7WsiE",
  "key5": "5a46fcyFBDXjd1wKuFajKm2PKbE4fvbBcu5iyL4HmH51P8Kk8YgBAviCLXbfB3Te6ZHXfZvm6z6ro5e3f9bHoiGK",
  "key6": "4FMaztmaM5v3R7ZpxiqWEaaLSB1EvG7H5Sd5bShpmonZqiEmJJx4V3RXnof8gN6NGrxSqyDxv1qsuoes4JTy368P",
  "key7": "2s4D8x8MB2agw2YWfWnNzi5qSidYdXRB2UXcjXcw22BsFGmYFLWSx1LnsAMu3ARK6VfQp2JQ95KWCgY4BDaKrnPC",
  "key8": "4j5arcpC6bG7KSKrzygvuVgeZ86X8RB3VnRvMZcpnMZdTeSD5WWq5QvH19FkSEFFuvz25GSnaG1mHqZmuk67NmNU",
  "key9": "2U8a9oW5B8DVst98xEEe1GS8mvkFKNaLEeZgyqk8cqTeVJbyuATATaW8ipawpiY2r8wcd5q8XRsQfFRzhU3uxpPc",
  "key10": "2bHjxQScZ7Y3siyS4ALyfqvz7HkigEZGpFkPyjD8oY1avjwpEE2HB9ybfbn8ncht1Tm2m4RtACt43BPq4UBrbuiY",
  "key11": "HxczqMgcZriTjtvpzosKejqUBmqBFGNshwMcfiKRoMdCstyKuvapD3Y32fsfbe9D47xypqnbZc6Q7zh75A3iYVx",
  "key12": "5nYuX3rpcxw6ZxnUDugnmVJGHWvfBkNVuMrdytVG4AdnhTdijBRFx7f6d9fSNRdVcKetZLkUVQs5JrNeFMh4gqbn",
  "key13": "FbhR4JyKZ27RHhFGka9Qgsw1U4oZWepY8esco3HZV8CkBNgRZ2n5tFD7ebwiHtALN6AMdoceNuvHzAVYD8y3fd8",
  "key14": "WQjhzH3P4EqGaJPCQv4VazMaDiukxnwUzEr2o5iFbb8wL8pRsKiSB3Va7T59J4MMcRsrNwJue7XawrmAdm3Kv9r",
  "key15": "64K1GcvTkn7NenBKHMN6PXQYuZwCmAvTB62HNio2qM6Y1BtcFkUCGwrtfU3LKYjXv59GVhHMkGyVLTU75r1eFSaq",
  "key16": "46WBZtcyQaEny7U1ccLUEi8kzPxpjMse1WfoZzWe1Z8McW399WvaqgFDrjmptp4wayzAPRXEDcZ8dcg9kFYJF3Qw",
  "key17": "FrEEhMdC6mvgJHkxkSk6uVby5FHNTzgQ5D3yhoknJNpe71FQVz9FSQWD7kRYSdFoYw1ch8tpVq7z3jhyE5rq2eB",
  "key18": "93qZfFAuerJQ52hPoRqNDHoRCSnkfMWBabWEnhw5xQSf9rdG98mxStey1e54aeB4ei53ih6bcDdcePGbm1MxwpA",
  "key19": "4t2isx5yEih4cffKwJ182xXPyGYMtn73uJg8w6KMrB7sn8u7TRF1phQ2oLAJ4FNShfJKZ8a1pTBaNYi8msVoUGwB",
  "key20": "Ssm2c22pcsobHfdGazfja7mQZpjqcC55Lmxhxbc5WNj9fbAUzw6PVs3w2b7qPZwqBbUKkfru5gXmbuatcdtkNFm",
  "key21": "2qRmFbdXqhAtDB8E1fXsbrmanSCWJCxozRpEQZSNKsMDQTeaLdvbzPQRme1i2ZRLbfYz31fucqHRroxy5PAMUfHE",
  "key22": "27XBsRwMTnpP6sKqC71hdGmy984wioAUbe35mSbvrrKFfLwrmaKLgEcx1xApyF8AkT5W7vyunxHGg7RvVQA7P3rP",
  "key23": "4nftYuZVkXvQjSHmPCSjSk2gztfXU4PQLYSHDAGV3xRRGKGSRHpk71NDG3jRRt369j9q9uC1rEtgV8mmyJann6ys",
  "key24": "4aTBSqDTEjnzfo7Hv5MxsxSVMaVth3M1F4Hsbbnku7R8AHCYCGGAa31Gao5gdKSofYD889FaX1HeadwYtiiiqFbZ",
  "key25": "3iwPCkvqwepkM1UYnL1UeofkpVaPLWiueydKgdmiDGMxn2vXzexFW3yUx9qRfq9mLoJuthYwEttrphFkxpqGhud4",
  "key26": "2b8DgDYsFc5MLLnMfpcLcRQtSVF21XHpoen5X8K49sZ6txxnVkoBuCAuCdhgsxnw2VLz66d8sDA5LbTVY3qLfaMD",
  "key27": "3kehrM7u9eL3f8HCFSsbTesa1v6fNMUb7xfhUiYBDkYJS3SFpgjBb6PBEssdx3AwLJHfys4xKYgB5JCFH4sAQ41Q",
  "key28": "5QiqegJx23uaH5gPn151cUNVkrwgenTVeZJNTYzN73StT9wsYVhhWyddfQ1ZobFeiWMNufS9RNJH3f7C2CqEoG7a",
  "key29": "U54XeFZ89swGUCMTqqLP2PQWZ5uBVkMKR9hxz6ZVH4kL3hgLSFa4rSEv9XTg4HX8LndUKJLfAeN6ZAqGSamKtLC",
  "key30": "8Kej1YyCQE4qZjMMHhu51CsN77yfqGGicFVG8mDfRQoWqcmsTLGvaEzt8RmUWxfBLUYHeMn8haZdfRkZEuvrdeW",
  "key31": "3yP1yyKFGzfHSEChQosFaLZBcxspiYbPkeTPx7Rw6Gtp3wuVG6GNVPVfr49zkCoxTG6x32u16q2SSbQNQtD63ggH",
  "key32": "3JqRMBKWQmxx2KWSQ6SmNv9xo8mFRE2M2j2aCCtyhiDh8kydFM6VcHvtBLK3cnNCJ4357J69yuv6xWG751Eeoa1a",
  "key33": "5iqw3yTjJ2ps3VEFiSibDyLuEA2oTsKiEu3BprWrsf3hPXxf9JjSQBy6bMqvaN6ZFcS3Wxc7YYsm641FujQHP6bu",
  "key34": "tw3ctXxXSgdw7zTeBuKofLTyTJ7HQpFfrir7HyVwi9fzMuDA4WHhzHD37Jn6n6zQB4TJ6GoWjFkbTRj96e1zLEB",
  "key35": "3Ys3RenAz2UpsRobjZAKkongD7DwA1U9rwXiaRNaEMrurvc8yQemwwLJHzCoPTrtrcTpAz82gGZZRBDBqTgFmYax",
  "key36": "4BstjrjAjwBM8stGrGDbaodX5PnimDJocPW5bV6mmEaHgWTmLC4zi16qQ4AuBai12BJpkzxdz6kG1ASQ1g3Kcv5C",
  "key37": "53CPAgnFZ2kLHFG4Boovcr5bfy2f4Ep7GDFb4oTT1vCY2oUCsWpNZPCnGiUcrXGhMSfz4QwtpLixexuRw4VHUkM1",
  "key38": "4MhRoC23PC1gdnZmUwrkKLK37NhCfZHZbg6P9sDzw58RBrbQUMQ58z4vTzdPp6bD99fAbYP29NwV9fQjhTCCy6sf",
  "key39": "2LCVoi6JYoiqNPYgv4uc9fpWp5P5Khx3GgKB6qwZ331PS2ProKGR1DcZLdp1yi4iqKpHWhc22M8yANpCDY8vt9xi",
  "key40": "4sBDYYUNNFDqoVxkdFKhbwACP9QjNZroFusV7QvoQqEDajGJsewkyfvLqFG8mSZxTooPDV1t5hKty29nbkxJui44",
  "key41": "2B6WwaFoVtXkdEbyF5cHjxtQ7uJEcjprnyzizRKnswibnRjhcy1GSuwjvVaisjAZYenYtEXc4QmYyYhhVYCzUapF",
  "key42": "3VBDUzCeeK2JepbcEb2RW5XzZbKUavup9dVoBvJfo3UYPGaHjB2NNBxjdJMs7ULvaNNWX46fHZ5Qsy41SZgAdqGL",
  "key43": "5Q35A78MbdFewX9snWQMvB2rEibJHjE64NWu39E3baWqf3uFfB2BxLToUwtNDHpmnBQe2gFYZezx3zdtvy5JKAba",
  "key44": "4TMEEXNKJBmuhsakgsQ6x4LZtzkMZZsCKdi42BTjpvTivNqpQbGA8VcrDbDxZuBhSb3WYZswQhzVXd82Q5B4ZgBV"
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
