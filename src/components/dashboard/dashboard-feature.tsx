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
    "2Zihh2W9KbyqeLQgjvaoj4CiSrQPhVgKSonqx5ERsfKaWVfFc2anWhqhVcDvWrtiMfTgWDCqwLaJSAwzVEdGqx79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UWXoJvgBiZV5HTEjHps9Crv998TbWupeGhnbAqCRq4iWQ2bmwKBAe3ePRoadLwACTg5gzUWVaa5sJaDnb9Sn7Ef",
  "key1": "2dMKRuVp1VLBFthtbRdrstPZf9yUCADPdQQ3xr9QGsAEk5miNq95MXQ44e98ycGaq1ZLZiShudPj3MtVbHVgZMtd",
  "key2": "2TxnpAu35z3jVHg9Ensq9U116GtmW2ddNyeXL1xQCL3dBuETZA9xPYAcsJGg3HWZpnVmti7zyPuycSj8ZeSsDASL",
  "key3": "2f5Yr9veqWVUN7vkWTViTWnRuth473tvrzJDc3ykPD7wYf9YouSWWuQB4LDgVQ5QgrpGHz1BnTXyzLgkD7S6ESTH",
  "key4": "t7jDJYUwHKnhxUHNV6R9Kcb76jcnuoj74iJtjVwKUvwng93Snukz5oyog4Xgd9nbMMjqacbcbvAgqKDXQ7AfWkq",
  "key5": "1B5pG6hjVjSZ4x9Jtn1UGjMhUKG6EAcHGqQKVq33quEHLqQuHJxA4ZTQmp5JPVmsUDRBEoLKwzQdxzjDoy9Zgxp",
  "key6": "w8rqHhQD32GDUcFJbyFiFnPqu1ncYcjWyeSJGgZvQdVGpsxKEKU92KgAFmGR92uaBwmKCGZ1U42XxHqeHBvpSPP",
  "key7": "2ZGtVwoDX1Xzhipfcmp32q7NGfBVAJEpfFkzZVZmybobhSgra5XFsurumEhc951PpmNkqq9LHxsUTFst4DXJiF7A",
  "key8": "3NoURFoAMkTW53wyxukL7ijnZLNRfVDaxEjYyho6VMtsRzAvFMLJQVsnTBpuy5A4LG9RGSmp4B3M8KBRfTkudyLQ",
  "key9": "52PHqovrfbeYWMdWn1U6eSkUnrSmLN2EXHnkV46rU9pZVQDdxdZDrfWA2tVaVhChRuPyhNAnpy7mn3bseLTgMZmQ",
  "key10": "4mpAfriPHNDebWQV74v44VTuP5YUzLrvQHg2hMjhWLdQDTX9751UwY5rH1utKzpV1TYA2Na9MEyKRynGhXTNDYFh",
  "key11": "2qWVijkhBXshunRByDxtzsMubrjdw74C3FK6q5Z9eAqA62G143JAuzqjdg8hXtRYq7aGFG4LQifAbuXyQuvCvaWS",
  "key12": "2AyqjUwKptUJKVy81NzW4ExFfu8Yo3KSwMj55MwGFv8XCh7gZVLnEVxm7wPGmDTNxm5r7R7xCuVf6sf59KciB7Cg",
  "key13": "3MHLB8Dz3J4AB6UsidwX643QdX2Ss5tMkVfnLNpFjtyyShWVszVmtps3DfHPSKUDqJbcx5297Qp5x47pVhQBjoNu",
  "key14": "37WLwCYsH93eDpMj4j1VbqMQvmXA3zpQdCdVtDfoNjvyPnzeNCuCpEbcFityp915mZ8YC1NUgEk6H5TvRpW4Wk89",
  "key15": "4nBWqbjdvHHf2RQKooACXVUVTSLzyRFHMJQVzbDLwwQMX5Xt3m5yM94R7vYKACXeigjaDGhG7YnBYEmNbY838boF",
  "key16": "57gXQd2HmCS8BS3zpTv7nFeG8EuiM43rACQQSXWjTu5AZJnSpicuo3Xs8PgHRhVmSea9q6ToqMXkYzbuX4ch1zzY",
  "key17": "5rJF1JzLBDnZVRPHTfRfBpm8fRBELjACAnS24WZpmw4hHTUpAmGufKiyTdfewv3NDCgvikVra3NmXiJQUxLLTCX6",
  "key18": "6387NaAgANLiiA2bXK6eyJvTxPCy8ze1d7AtGXamk2hrAyDpW3ggPHfWSzvBc3TpTDGKzRqXhzAKWFRJLBbD8gtd",
  "key19": "5MwxsvV6XPQmmdo8pCv3c1JuAg8uPb492RvRppU3BMUhez7buVt6B5sZtF3tDbaejmDcJeezB63hP97LbxgAooKB",
  "key20": "4Qa211bka6R7qBDrdDH5TZtv5nGEje4DdAcvtVGBVoq93aucbLEKqLqPdwZ25jr7mEPp7iUBTC45oG3XcDAQdHvQ",
  "key21": "kU9RYBUFH2Rjs96ujxUv3okMwWgcUNi74JSUuEr3qTRooVfJR7jrRs5PejmK4DwDRpTLvVGo1YyBZ5TXVFWR24M",
  "key22": "29znD1Ro2hCdPKA6Kycay6u1FZwdgr7cSxYbR6a9kiUXBvUStKYhRiiYkXNkjfamHTrCBsUjfqkkupxV5Vhb3uQn",
  "key23": "2yNLWBV4XE7YLuA9s9wz2ZHkzVaNhgo1Ck1TGpTmNioiaAXDQeApRXGcTfAeaNXB23aZUMDjBC9t4L52nN8k7gdt",
  "key24": "5DBG76MM1Bi47z4fqEfKoS1EcwtqXsvLEaWeHzesBEANHBS9YNV82UeFozRMYe8dtiEuDQs1JwfHcq7ou6LFnmEW",
  "key25": "3YYBemrBwZKuMSgt2nAdubZUGiazPZcqUSPNcuVC1NxS3XL5c9j6Lae2PGQSjE7GwHrXsAsdaM7sbfC5a6yS2eDe",
  "key26": "4uohdqWiNJEFaxjhfHFwpv2GZrVgfW4WNYzZENGhKFbvSydXXBis2hAp2wr6iStkwRkXifLjMv6KVS7qdsVme66",
  "key27": "38paxWNFuMZqWXRQ54jC1KRwvmqrLtkNSfyRJCTMFX3eWHitUFJRzWPjB7vfNsw5gjbLGZoLMvH4HAYu5Ruw2Ypw",
  "key28": "25YYgmYBdrzthw4peJY9ixisaiKXBmEyVY1fotDRxdgBjbHZhKpmLSChxFbpyipA8o9cZnrfw8HTsEmBPLre8cb4",
  "key29": "rmQmYw74so7y2wGwxaAbsR24VhVncELzgSV5ma637BMoBoXEjxDS57B65bj2VemCgNm8M1Lf4BvQNTXMbNMs6zm",
  "key30": "4CbHqzsvVtnnzcWL3FjCkGVeyVZiiEjhNo1X1PUepQWJiND7VtSu6SpkaQsFNurgDMMQUzECfyz2XxD4NMN6hYAM",
  "key31": "5dWiG8EXfEV5FyWSgMSeG7rXAuH8M44xf7D3dY94SWnzXNUxcjsFm4TKgXaoAH8RfRXQiAbxtwt3k7M7F8S8Syov",
  "key32": "5R7SEztWi4dzsavpiQDcqdC3ijfQzMFyckviEGjU7PFS4AtbB3wryYChJZ2zei5VAcfgxsf8A4s9nYpqoEzv9CB8",
  "key33": "4KJ1og26pAvcDuKfVQrCiT9qbPpUkeAmxY6DYbybQmmyPnuUtRqYA7fDiMufdZ1JxFQB4n8YELJekoUwYwjEkhji",
  "key34": "3U9zXTDdX5Kp9fkUNnW9dJwfXiMnQx3RCtcvbMZZwLgRp2VjbsfqBA31jQ3BTegVKZ5KWCajkbpKmREFtLE3ttuh",
  "key35": "32VCjNjSpbiSuXvSmLkJtVqdT9a1LqMUktkAVyS6srUdH8jr2sp9wFLJzBaveFnCfHgUR4gBqvfmrzRp6TUSJyF"
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
