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
    "TYiaaD7cbAp73jGFeMS6MoBtRjJzECYPhMafqGcZhL8YeuBzB4c4TU6p3bs9bVziMiiTWZKNk9ejbbrLawmBAyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cKUhCqvf2ju2JTeSLjgMA3jZ3fo44ExYCmukSmyLVbSKwaKaqqjznUTpYDq6gVGWSeGB83dhULwyiWsK6tvmzt7",
  "key1": "3Wj1hRQnAgJM7RAFfknCJuP3TvW6KHaBGePPYqyMTsDUrEujJjeQZjij1i9KeF2Jxg7hNAH5cB5bcMR8R9pBRfx9",
  "key2": "Kij8cctxaHvjMfd6LGKfEp1ubvszAPfnxY1eJHtjin2Go7sdzTcpLD5pPSnKvdwcszUjirmfytLU2jKecHJAmrM",
  "key3": "5zb1yiLytQKdccKf3FwAHuL6gnhFg2XeSyTCZk7WtpgMz5UBeCRBdUFebH2CKZZWDJ2CVho5wNKF2SwhyrcqV9k6",
  "key4": "yo9jREiwKcnBey6ngF2qStZykio3hYv5D82Wy7ahTaucuij8w2fU2sVXKcR31T5YWGbCbfMq66bhxi16Vzq9ehZ",
  "key5": "34kmEhPDRvbLV89T69HPKUPbp7Nm85yb9Gd3o2MUs5QcmvhrPaXVJAdSvHCHEV9b5KVicJcpamR75KX6uS7CwKiA",
  "key6": "5YWc3cthHK493atV4nigGs73Ywr8L2V5cvB9J4StYyTCuWa7UGSJb5d77RJUhWsaKxMyJ7T5R7npgCPD8ikFAj7f",
  "key7": "4c8Y17F1TVyytJVRaTxjhwJwCvAAv71wNuVrRma9ukFobdQsNECxa45bfCcqVv3jZj3hPUL8my5gvaJwyCVi1kCV",
  "key8": "2U9eVWBjcLRcnBtS2PUGGrMCTyTd11wfKyGi862mAQrHZhQXqYJsxEqA7G4NLYWGEQuC1QYreF5W6NMKqTyaTiNM",
  "key9": "2VfScWXQ3NuhjJ1XJNxmHurd8vmqHZ4Xzc7H2yXuxAjzDTZ4tsNvPWDXKg4rbHiqULCk5vnNXnDZo94nSeR7pcXy",
  "key10": "2RRdJ8vUP13BqCM22Ye3CBPRgQeNAvuBwkfePCZjLEaN45SCxe1RdCBSziEGj1cRTEtrG19i5vXNbN9i6GP262tM",
  "key11": "NqFyEB7vZVH8ii3uVvejGicXyxsjWgz5uKnPUYhHjkhnHZ51vQqPDaYnk7n9913vcSSRoGya6LcX4PySWgJncMo",
  "key12": "3gbF7UHAvM28Cgj2NF8Q4dLr6eHptW9qfj6A6LCHrUzDTQCYZmsxrzJkDyZsrtH1iSCLNKQxcYdxXS68ggiR8dbv",
  "key13": "5RD1EsoNXxKyNpYPuFuKyzwYh5nRNghymyMZPqAytri9zfXeosF69Q9FacunSsHEkipuo9jnywM6yrFdr5REW3Jw",
  "key14": "36Jcy7YSJbnNS33P3goypRLTn5DHBUdBGdbjbTbigC1rjyX4n7ohtPJBH3t1XyXEH7cuT8Xz8DU6KmeBVR73T2UV",
  "key15": "3xmHz1qFQDCCU1P2To6W61SHV2j3f7in4WSysTPjix4NjYAiUTsMcRKXEK1MykKLV5JKLB437ytyYomy1PknW6zy",
  "key16": "4z8iShaESNZuPXyJmy5VCkrpEtoCyw1Evn7s5yYELqMStcuMoGYymX7FX4zvocEA6EgsJPWD75TJh64suH3yr7GL",
  "key17": "2zijo5hBFsxx3jrVpHLb1cdw1T8uzVf8enwURPGeHEYKYeS839eGGjTuGqjRg67PiZh8HkvH6JACyxt6pvuNpcuq",
  "key18": "5VFRfEFYNf7iZF84ocShv6YFTuDmpyibFq1DT1TC6DKxsHHxbB64meHARcPJzzPFqXYX5CCjXTCpCGqDX7mwpQHb",
  "key19": "3DLxjptv4k4xHNeedGaKtE4J8AZ8JLHnJHSKNopDCpnXzuoAhRHkdByM5hXd8bbmEkpWQpvoyYF29MtDbzjan6u2",
  "key20": "26YHA18oR7jwTx9t18yrDZL1V5WRMvRTWfKMwq6CGznkSsbCkpMZUhNC89dHh6M3W9RcdfhKE7j3r6Zx93rcNKQr",
  "key21": "taxVJ7MNiPh3uiDAw5DHsGut6rskUiQ3cj7sq14PhGjNhxq5xfi1MAtbUCYuze16X1WJQ4kparYpgx1uhhBkE4X",
  "key22": "3uBCbV6UGy2fKfbFyAustvXfgRLSxKMegDmyC2N6tpy9ntgNof7QjDDVhUR8v6o4ZS1a5LRgaHodrkh3nsLMWajb",
  "key23": "5D5oEN5QZBuE9HnYG5h1DkY1j7jZoNTPMQ2Egzq6gc6gauXD4Rx5vsLbg5yGdqHkLM5BihpNDBXSubi5py7RyK9a",
  "key24": "5shSx2Qf1299465cUk3WXXFofL7vSSBjx3bpzxcwRTy9S4Njy6qDyyEYSXucGYW9VVevqSz9TnZjwm12DccZdPZH",
  "key25": "1DutFfMpxZFi9JTN1Pts9reLSpZ4M4uvHGpyJ5xDFPK9bcmUWPsbwcuTG7GWQXS8XXaseMgzn1H8WcyfZN8mahV",
  "key26": "3sjDZTBYWbL9MMyukrnqFh81iSmwEqVJicwNq1TSHXHc1TAZMQ9updC4EFFWqfW6VAr96EbPKhsahmPWkU6jS8Wj",
  "key27": "2NnAdTfepqFJDMkTeTAttD7RuNfdFZwV7ivPhiim2cDg7cw2QU7GBpXPSsKRx6B1ttsJFWvrje74P2H86Vxn8oHu",
  "key28": "2igESg3suHhnBBTinaaEfXrCePWYZAD6QfVmujFsGtoKAuUg7KNRVp9LzAZtu7MyYJ7o17kVWVYyCDGdfRpRaqmA",
  "key29": "5huPYVpoHq4a9ehxkicZD3xBfRVUhEpYkoVgQYfSnHQddLE4JfNgFTWuEwHSzpr1LhjKqjLr58U9PxJhwBPeZsJg",
  "key30": "3T6F9Tx6GENq7Sf8q3arW7vRr3HhuEGd7YUP2ZaidRwG2oj9rgZuCaRvgsm2H4KmMvdaCoUS2qxgBh7XGeJmVPL2",
  "key31": "3AUZJjt8jQ4JgUgcxpDUWLjjmXBTsQmghpofYRUmqqEwDGxBwL5cL2mJ1fBtHmgzwY51wV7tk3TE1Mit3BWX4NnP",
  "key32": "3i58uQevHzSAZgpZjMGj6dYQkPnLCfXQNTaHbPGdTWj4et7nCPqgHm7VuXdCmHnjacEuxTMot9FQpG3uDBrjXFbx"
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
