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
    "5E8EcbZEXb62tgBJK6uV2nDiBUBzABV5kfPdpAqwDA9LXSo1saYkX9cHTJeFKDQdWkdUqjGxLHw3GEW1MvKAE57M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "srBJXhMA6wGPt1FrT6yt7UY2L5xny6X6UmaSyELxJuFc1oVgx8F91Rw8GBtzAg767c991G5z88Y3KWEfVTLuJoi",
  "key1": "4Z9P57SAJLCGnrGZ26fKMDsxM9tvzfphkSUPYuEFsbVQyfZg7VTDZRJWYLoh6ScByLFW2m3AGLa6Dwj7G6PahSQP",
  "key2": "48KAQx1eqrZ6DDMjrSJXcD5QGfpLqyEobREFiGK4Voq5ax5QodbXPZKcW93QpxM67irepSgwsqpAnepWAfnkDh34",
  "key3": "5MmZU1Tk274no4hVUQwCkiw9uHQwtHM1tfkRcpnf6s4icCNsjgawWV3EVdaEjRFxBiZrNpMwBWNmPxstN3GswnEc",
  "key4": "4NtykUsP5We4qWMmypeELgnhWBFBays7geGAuH7E81HWKmHZTJQTmfrtqcJ78wMBwg7934pwzEGu8apb4R5R4Ffg",
  "key5": "1GjmE9NR4hTwvsMD62HxVdxyitMnAELr7wXgo5Xiz34ynynBfbP7pNLqeWT4m4xzPyNE55UNvjQmktcF1dv34Sp",
  "key6": "2sx8NDGrggs2hrEDjoE3kB3YRBgt16ozumQsy64RLneZK2eXhfG7ViBnds1Ryk7UdzaxFSBbBWEVfpUvfhyPBdCD",
  "key7": "2DysVanDeSUW9WdcFAheUKQFSZRUTtDgogXm3ENPZkeQbACBu4YBZpvtUNeHV2nco1cNP7x2WADpVf27rQooZARS",
  "key8": "2CH68HkSnCcQKjGwjr9n1Gzpos8tJcQcgN1GkLD9wsH9jrEfgctAebgqnhkBJVtRT8uvUGTLGkw5LMsSmmRxDfAr",
  "key9": "4K8uHvCqq8NxQkxXtpwCW4u9hjysTkB9mn3JR2sRC5dPEtuRggqM5LVGssVnWpzbKJP6U3yFcC5ui72QFmP1zEou",
  "key10": "5KeP6D247MzyAmTMWjoZ4PRFwwcdDQ8wcoRScXqbLDhQq3UaRBQLhXsq7xEjyeAQFaeAn13gac29gpjMhCBipcs",
  "key11": "MorsHWvXHL3csTrrLE2i4621kuTL3PP2eEgVHrpfdsd3qsq4YiEUS4goasL2WcfDVqizihamk7WHGkxuGDaKRjY",
  "key12": "4huXgbEWU9X2NwzdEoAVAcEdpkD8oSfgxHAGsKstNKbrBSruk3jzqAxxXY38rc9ioijXUuhaFY6pEKEe2d8wYaoB",
  "key13": "ANPtmWZ6qcEVqCEC13iu4rH1s1HgzmWueFtb1838zMcV91wmbjTjABiYdXsJFx726NZHasu5wzG7JQ8w6ciusoJ",
  "key14": "4rjLCimvBqnm1bgXjQvrQmtULL8bDa3GR8iKCa16XezGi7ofYnS3ChdFdp4V1WyEoRkxmiWRLpYq4MSQM2zdPn5J",
  "key15": "5NU3KrbqfhRmSgFhjNuxrLHGDa4hWG22JZD2HzhkPsJeBG7pE6k5KGEcq2pizJJ3XMMvfExeY6k3j95oDix1D61G",
  "key16": "2EdVLPVwmiou1gZUUA2g4vntu6Ycg2jmYKfL4SPonHDrkqAk1MomUQfT3crjuATMK4bhpeXugfyAhNXXtmidggKs",
  "key17": "24DmpDBajuWbeR7ATgow9yCSkjR5qccZZLyg9yU5rUQYH6DZKkSCCe1afyD2jbAsFCkUfemcRUsSMymPE2wCiQap",
  "key18": "47wDaHaCBZ33UsVuGnu8mAEyZ2jtfT3V9xW8vSkD49LoMDPRqiDCekawhy9X3SSjRB4stwBT15iaKqvmR9WfAt3i",
  "key19": "5pevx9LyaiGUA8vf2cUibimJrWDKrcbo3sHbiWkSRica72j4bnL87va7znnx6zZQ8jQD7Aj7qaPGDm9XyKUX5w5G",
  "key20": "4gUNVtBt3Z99CLSZVcN4iXrEgNg7JG9U39CQofZVdrPcSP7sehXsoUxbG93XEXqiTfeMDTQdQCAk35RmDfC489s5",
  "key21": "22Uqq9gT8pyG6VwznG2wFHmM7fo2UCjWFjdH6zRSMS1DmXmwvMTaRGJj4TMHJvd1PDXNv2eQZ61aEewsRZn9enTU",
  "key22": "SUBjZjXcMKnFenamJ5NRJdek1tgxhApSswTVksNhbTWF7ampvNn2ezUtBXtD65M25BT4GMMjVcZwYVz1E9YydaA",
  "key23": "3ZavWejZqCUMRnKAbv5kefFh6CCwPLN28fFSdXrFbEPA8e5TxYKZBjRAH1M1qvD7WwWM8Xfiu54Bh4DLceiti4vz",
  "key24": "Ge75Jna3bpwt2LNkLRvv6hHRaVzZ1GWuh2LafkvAhfY3ahHEovfbManAdtck46ExJpiao2asQyHDv3Ds4DBhbBQ",
  "key25": "KoNCSCVvZ4JykkqmZ7oK2SRvuNJ8oA1M81cR3vHLK4A2tPbxFYU3gMLN2y6emCYfsp3xkNCZyihbrcKvwGKZnMm",
  "key26": "3My2UoQ9iejQfZU3LPMHywjHp48AXdx5YcaDPWnk3eYqMDi9SifDJLgyKWKg446k8QK3k7zyfqJTZLqLq5qd1sDj"
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
