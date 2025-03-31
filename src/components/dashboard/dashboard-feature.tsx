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
    "5dKjQPPzJAPKM43UwCKLGW625e4Su8MAwh746bybEaeap917bpFuYsWM4etNR2aQdmu8YcSnQqEDigwGGs8YTvYE"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "xgDRxAwnSWnADnWSvqrhT2PUjtLkYudCZyut372YqA9DV7PKw794wYtVCummo4JH8YQCf6c9RnvXxLNBsV98riQ",
  "decoyKey1": "2t78r5jyD4yDpcgWSY9s3esLWN4cESXXin9MtwPjmjtiy1dzNDQhPzBoKgUCH2iXrnM4Mu6fNhMHyWMeAYRAkKN",
  "decoyKey2": "zFRDKGPiC7fNMpKtBCzUs4w76h4T2JZ37cPcaamVHnQFpHbgbzagLisxGabRXnUNkZF66bHg3RptAJfgnRuRDaZ",
  "decoyKey3": "pb3CJHm4zMzYZ34kWjgR4dVBmGhSMf5JCpTzzqTdVzGbqjLGenM4w1bF9vx3kMmoT2YjjNxAUADtroz3La3sFaZ",
  "decoyKey4": "5iKoumnDseiLPYTtS2aLkNdKTLfhPpXV4SYjPatwZtRT2nRAEdPnd7B7nZ1gg5Hr9UMJQ6T8dXqUX16sFN4RtNoN",
  "decoyKey5": "4b9Gueu6bomm1cGX9btQ7VPS3HpEEjqGECcFLPm4FnrVcFV9L1FhaXeNMvd1MFY8K4DosbGhTS8FdWyX6XQv8LMw",
  "decoyKey6": "2z6UfiASVcv7fhHnsYQ7wptbrBpJRnmzkLEGtoLzCP6tXrHNTCDchesayJy26ViPBt2dRq77APzyahjqY3ZsddSM",
  "decoyKey7": "2cQ9459qjFJzZdCnwDCbx4yTwMFsQoNVFvtDaTMzbNVCZy8e64DvHB7jh9efbiywj44nhCbUZEkRjseH29U1tv3w",
  "decoyKey8": "W82b2FcHL34BYiBdXJ7r2jmW7J3usDzCqxQtgRS151VvHvanUBmsbmysyNFGq72g1ejqZj1H9XYvGbEK7Wzok6A",
  "decoyKey9": "emdZdrB9oAZX4daw7Tz9Waft3xNvnhVVmafvGHurwWtPokLz8RXyBevDECyXdKAXg1bznCAo3jNJ6sMTQPzoeb9",
  "decoyKey10": "4kFmnVGP5dMwdjwMihv5LRxctSxzPfPJ9eXN8jaGgNyadpkaUdoaJLS8Fj836RWHTJGNR3ePH7GRFTFdUf1YAtQb",
  "decoyKey11": "2kjcYGR7AMS8xf3aHscdn5K3spDCm8ko2iybKthg7cN3q1AF8xVqKiTzpZgEf3vvuJoqNNDdMSA8CXFkvHRiCWYF",
  "decoyKey12": "646qJG47nXfXiLjrPPu8deeT4T4LRfFR2bgbspCp9fEpSHW9GLRTb3oXLfg3y5h5xko9ZJX8cQBiKRixFE8DbxuM",
  "decoyKey13": "4m9p1J7AJ4Fni6EcW4Gf8PTeiWFXgpM3jFkEY7dgc9uTQ1tjURRfJU2HKf6hyKHa8J16Wdcdt9T9ZkQn5yrfQsEA",
  "decoyKey14": "27RzsNesWBNScpQQj4gunuC47XqEEL6yVYZDeQ5a9UjZhNSkVh7msX61UGYwRht16TCep5UEkWmcNFHuqcvwmFFa",
  "decoyKey15": "8qQMHXjQNRUArypzhyFTBw71bfrYX5ocTDJ5EDjzaTNpjLE2PGExeJ37AkWy5BhJXU1LAv3FQrjKyK3cesb17b7",
  "decoyKey16": "5YgZbkic6X9EoWoa8RkrATyVR9e5iS48SS2Vsn7bbmdC5iq9kZ9u1f2V9CfEAgFeJeRGdPcy1nQqXCAHseqtxPd7",
  "decoyKey17": "2QqRbwMwVtHD6yVRJk9q9bkGihGGdnGeLmKdusgCLJ9vQboik2BNDRuJXWMoKSf6wAcDJhkFFophri71wxLow7Zm",
  "decoyKey18": "4KP8bPDRPxnq9ZKauCGJgafQjHb8KGcMrGuit2qAX5KKhCraTJ2f82DzMySc1rJQDd7s4SkwPQpy5DUf6QMuozmz",
  "decoyKey19": "4zs9vEKtVCN9ECFJzV7tMUH5dEcL3aBN52Wo1MLtHJHSsXWKJYrCaKTjg7TkUd4aX5uZc83nKBDhCxaS7wrBnDHk",
  "decoyKey20": "3XVWgQi9fZwL2Ugru6WAtHkK7tUDxxc2w1nF9BNH2TW7ompeKMXMVHis6uWFmwpVU8sJkNErSXoQNfvjugzwBbYK",
  "decoyKey21": "5iA8MPzNZ65k27ZLdr9ZXDiofPABNU1JT2TRdheNURYUegXrnp46MhtnE9h5dxNbc5rmQ9ZaWUeovyF9mi2FzFPu",
  "decoyKey22": "21EFDAH6jNuAUcWV1qm6oNhuhQpudYWecZULktpqNPFMprQ4uqNWt9tj8LSybx2gbuQAfYDJpRabssNHoD9qxrsg",
  "decoyKey23": "2gAN4xhvpMJNKHvLHN32A74pjEMWjU2H6EB5zDNUX6HJdzABvpRQD4Ske7dSocaLnXGwnYLS9S34WJcbkmiXbBmo",
  "decoyKey24": "4kGtmqepkhwBisQRHsUD6dBQUUiiuGnL4KHQyewvs1DRftzbCk1kTRKkwyHgzas5MfbD91745HhUXGiW8wrAYx2E",
  "decoyKey25": "5Ry8Q1jK4abpNG6TkuvDWKRqe59QUMVqqBbae51t4Rq9hanjXG4LTUfkeQnP3RxfMmPCJt1xN8VCemduLMkGK6CQ",
  "decoyKey26": "66YSiCbK9HNneEvetdMaro4fQS25Jv7v6jEmGVYHYKRre7eDznR4Loh8wpyhUgxPdHXXqe4WChjPPZ1stGdAi7nm",
  "decoyKey27": "FZF7AkLC5YhMHzMhWoM8eP4thTSP31KA6aBnGRPYJj37q1n2Uatv4ZYoZ6UadwxQNBnYL5rS8ppwZ6bJk6oNsHc",
  "decoyKey28": "2WU9Xr9VHi85qwiBMq9tmCqZ7BjAFPDdsMFpEco9LQdHEzrsc69Mph9z7zfshk6Q7MWFjJ1e2J1UTvPQixw6aJBb",
  "decoyKey29": "5jCrwbNjQbDEB2nUZP1kLKppkoJpMeRjD6FWFnn4idNpusEcZMiMVa71T7g4a186Zvw88RsrzkGmcbnHLJwBCm4C"
};
// DECOY_KEYS_END
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