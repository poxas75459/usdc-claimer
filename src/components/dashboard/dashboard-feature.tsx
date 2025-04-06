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
    "3gsyXp9y1Larrxryqvmd7oaeUj5aFTyn7S3mPL74M1Tuq79NU5SMJwJj8BhHUttN1m9GtPAVnwAAdRcj6m2UWB8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52EHw5ZTUqs28HnVyfV9oYBFRF2E4xHTMHbrq58otebR8JgczWtFVTtUtXVJMPZYuazd7c3A4JWxvtszr21C9oj7",
  "key1": "3EUCgtohXDCFjzSpP2wLhW6yN3TVs9uJvpTjTqnQUD1owcuzwiDvRqvaXN9h8bkTxEMSuTtBZgtvKjKV2eYkTf5A",
  "key2": "3fEv6xvU6VSkgSs7E2AE84NC8hQqS4hbpupwQ28UEWDbUprjw2F29U3GkEHjex1EYCbFjjNvV6QtuZuH2pGXJAeR",
  "key3": "3EFiPT3XuvRwR1pamPeNkzmmkn7VxYX9VnKZVRpxTnDoYXR9kA2dUUrbwsmbtprN1AabF9hs6w9Uo2ruLVEybMAN",
  "key4": "67VQ5KcHxhiFNAzwkdEzAX3sr9MAqhmcWs3B7guqSo9FHy1uJk937MNoLDVxnx1MxxszgtLcNFMSxNJRjufJWL1m",
  "key5": "3mAjEz4N6tEPZEnB5ZYSykXCZMBguc49SRAPKdSwB1RDyaP661DN5Va9DcvCx4oiQEYCZzTt4zgyTR4svWW3id5G",
  "key6": "3CGHFrqddyFdUNMTC3bfdt2GJ3NHweXstAnD46CLV2hNVjy53FPtXg2KSSPJ3txLTCfUC7FSEY5smCQkPBECnjwQ",
  "key7": "4mDLWqiu9Co4EanBX57LTR4PqJugtFLzKkabZRQMnR2gJXuvaibxj8dPg1Dnm84fcy2rRpAWjd6B97493Ti91ECL",
  "key8": "2GYpSD5SVS3rbAJwjNykJVc3QSbdcKeA5ifHnwpXXnZ8kXp13DsEt6wGX6wqfn3Ln3Mvtfh3oVTRcY3ujRArWnmD",
  "key9": "mSxGPbgsFbDgVX5QbkF78FjsR7FmmoKDP3mAoTK7ygfg6EbxPqyMejUJMRfmc9sWRDRWpRBjKNf2ZHDunUQ3rr8",
  "key10": "5jkiAfUzDht6SWj2j46YsJJma55fEjkSnpH1onigmmuPS2ToN4XVcVAZL3ePMAN2yx5WERLQ6bPxeKhwfuvDoHqd",
  "key11": "DT4f7jACfKS4kN1PjViQ8AQew6JiyqQbhUvzwJp1iV4a89bDgXFtQYa8hPxdpRy3Kbvv2kZ6K2woKtHkibA61Nq",
  "key12": "4KB7fNUpVVMmhX5yx6SCSuhj8iZyBj8Y2tVzfA7oFWMvYxX9Y4WRo9FiQVZ6Cvo8aMqnJYp9KQhTnPTSbwo43BCG",
  "key13": "2sF9KVm9cm4JkJ4hbk8fciyFiyWogxENWL54dWXg2hBs6yMby34KoCeNkkSNRANrmYc5AkJ1urxKRyz5Muy1o6H3",
  "key14": "29xhibx929q31Guz1gG5KzNsc2pTSPF7Rk9xtw5Fstvhbwjh3aA52xwRAv1A5vVsnkEZmhNRzqy5L2XAUe83i7pj",
  "key15": "3HefCHxY1dpyDWo84XN7vcRoVwbSKhv99R6oZkDXyWaQ5cPqV33TBAhjxw3jV3Kh5mWCLEqkqjwQX9a5pFXiKRmc",
  "key16": "4i768qAH1o1u6rqz2KDhe2FMDQQa54ctSV73mNRYqitun9DBYcbS8f4icJQ64V6fHezGFyitxxP2bbNZ3M2d8g86",
  "key17": "5191V8ZhqLURJ1twt7UBdKDYEsVYmH8hdpbx5HJ5yxxTZpz3F89BaGVgjFGr7LFbWRLpeeYrqQA58UfKAYz77Kx3",
  "key18": "4niQcyRj121rc8iGdHSMNt1rLpe5XCgJDuTJNksmrvprydr7XmNJoz4xYva8eQo5tv5dySm93T4rHjFbqibmWmJw",
  "key19": "5vXzYmGidV3Wt4RWTDWW4ZDqkLuxBV3frAzQ9eHvpzorRoQTBSHtRvL7ChEsmPwQZTeY4iL9Eew9XM7v8TF4aLnu",
  "key20": "4BTmjGhnJS61CHRiX9prJS6YscsGiddMUegETst9aLtCFEmkuBvAaTMzCP5DepXmEUGPmJPiWSEbB2vytx8Mju4w",
  "key21": "4jpkXpEX3xifJbAfsJ2WCaVUhpFafmxVvPjsUupvJY7ozwcxMJkEXA5AdpCivishQqjS3B5daYfkA7uyXk7U7WoF",
  "key22": "3mjqpRyDKEgfMYfbtnMc4t2cddzDan9FLxT3vNSq8pNP4n5Pm2CDGTNftwoNoAkoAa9v6AiyitPPESdGM8ABjEXp",
  "key23": "4bE44kT7RySV3mxN5CrSH7MKK2V41qaczkXZbp1F4RRDwcNd8fTpDsn44ActbP7oMcAme12jxSoDDH6tbk5tcuFo",
  "key24": "2K6nBU1Fu7LpsQprFMhuzVi2wHyPpmMo3KTXUWyA1KnoYYuTTfEcoeFx1CqAv9TqWhhyRSdxZaw3eZMxakqBADUe",
  "key25": "37SsHCjKiZaG8kd1at22QZHKVqTuz6K11o5gN29r3mRxDNiyBQRjCPp2ctBS1y9Ty7E3NN9tusfCBbBwvmDHWLVF",
  "key26": "4WqoC2B2vhWqVEnTCGFSxneBnUSUuGVDUZJxP62DH5GYDEHamsfSCMCtsGYRcdJVKWoeSLKeFMNFuwdpchofD48V",
  "key27": "4V2MfWU94zVDNzq4KydgkawGN1DNoTT768TVomicqMCvEXe3DZQHHMpoLFbHJpArwsaTdRftkERmBhFUd6hqg6j2",
  "key28": "46Q2Q67GtVkDDbcwY9PUF2rSGavviUu2JSadp3EUS4aCWZqmRCo3u77uZbPRVTMVXxo3ge29LtwyQsv62cCDwRoV",
  "key29": "65RqFsTzwufcaBrvNr7tBZw8DdynJe9yXmsLpkRUCDCwumjAGZDor9ffUJdzShE1mM6BU4g7J9WAfBYQRZZCGvd",
  "key30": "5dDwVCMh9MZeznKD6CpLKgm8HhtQkEmE4aes5N9QTAQiWi8TxyJHKnNVwu3p5jNJRy19vdgqFmnFhDSq36RiugBx",
  "key31": "5wMwj59uCRj7NwkPHvMp4eSs4PetFs8MEtrmhwNVSdUxFUDZ4dTGY8oWGiQJZbz3hzr6SAq5ALjene2zQ6dMvscv"
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
