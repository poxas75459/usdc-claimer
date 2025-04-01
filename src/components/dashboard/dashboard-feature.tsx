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
    "5Sv3z8QLH7bMCQmoFTa2QHnoWSRCLRVbYJU7aY7cKKpDKw4yocBfVnZjAyK5GbvJ5uHirPrSxosE4kfsU9PbCPL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J4YWNYkiesRnrTqFve4YUpL5NJhv3qYWkkN3HUw1PufeiXwqiVGxqFqMU3haensZFCBXJbrj7iYFVfdyQKiKjif",
  "key1": "ogbPdghYbg4gSs7dyS3hjGSB157bDXCbY1oWek8v8ovZ6HH1SEddY1YoYpfjCaZtKCAQUis4TRbKdHLmnGCcqPQ",
  "key2": "gnEhtFHN7zztCP38sgATV3NybptyzyCFjebgXrCmpmorhJqwr7exGHk64NDZ4auBofT9taDkKf5hroP2azdsZ5q",
  "key3": "26dhAW6GLMyyqAv1tWZMXtbo19y3EnVxCSzKiPcvrCj2vndwcfkjW2cSSzifN421hCc3TaTmAUPARZsz7ig5mQyu",
  "key4": "2R7E3D81ANVzKxRmUxSUjw2uSNbA9UqLGMNkDfBd8EKtMwXxte4k9yhzFMEWdqBzEjhdcFGQpXu33SwY6ArFQ8Pk",
  "key5": "3AZgc54J8PracUHMe8syrZ3LQKTa5f3RamoH8jJFSmf8gJEhLh247HMHjjD2bud8cnFVNEcQmp1ezcu2QXmVA9Wb",
  "key6": "4JVaGmzwLTYAzXmZFFywVRZNbHppq8XQyW83yXkB8JQTgq53kbMoPZxid81GBj33afYLymgHPjzVD6T8wB9AGXnr",
  "key7": "2ao8Yf5W2MDMLLtxg97xq56NFaPqt2D5budfU9BM9TVFH3PfgFA15RLeUjs6haGmtg3qSGMhN65ej9bQFyqdqHjX",
  "key8": "22yAQGnwuUDg5gLM84gTNykuuqYFDUFaTccCdPFwL7owc2U6y589ySAPNjXLih2fn2V7bAs8nR7WPvbUNT5wpkLd",
  "key9": "B65UjkB56wTv3bQ8AL9UEAmJbBLfYJAMACzA5WW5sYHtkA1uoQbbFaExBk1vW8xX3mWZu13EmKSE9C23EBEuJB5",
  "key10": "51ahgEEHc1dcerDhxr138JoTepewPiw3hyUhDNspVJWuLgMj2rxHDuFHrPgT8nUbbvfU5s1igzpA8qyof3EPNtSb",
  "key11": "NkeXytVT9mmcLNxwoVRvJLmR8WzbqZn2dEx7ujgfnfFRQwrWzc1whczbpoXu8RVLU8bc1xG1qjfBvSmnbWS2onw",
  "key12": "3nhZQtPb34C1rihgSd97eunGCuPPp1U3iLc3iwzdrZ87qngWTvZqWbpgSGvmhZtELXR2MYA8hjiyaeTh6hrmcD1k",
  "key13": "fqCkwrea4VDJkEjM8YnrxiUijaE1g9LyfVYdwBgMzkLNSrd3hBqP2CV8VN8P4kqCmz4my9EhSMJGVeqYJCebFZh",
  "key14": "416E8XG2dAJ5mSPuCMKZxZbFWbQD3ocT6A3pfaGT534JSswP7VUzntzDvv5Uzj2rJ4ErW9LFMormMpymUv7bDfxv",
  "key15": "xSyMUb8kUwkGFFiuzZJmoHxEYhm2LvC6opxp2Da1dyWgTJXYTR8pfhvQTF6AFFrQoGrbc5mBkgVFh4fnoEf6v3P",
  "key16": "4gzFBoqwB9scUVfg4BYUg6DbQTrWmuYahYrugUDqSbuFYF5yReGCwDypfN9p7dwp1MWJN8tjF7kmLTzRczRy1Wqe",
  "key17": "36s7nDnAuXBpz6PQiSv6XoxrecYEngWTSMLJ8mCPDEq1CDBCfsHYAZj2YGcn43YG5qtS5xAVj8uCqNy3n1Xts3LF",
  "key18": "5HvM45rAGmyvsaSG5zPHWcfDSVTV9szsGDptGzcwTfJ3u275JqCFwogTWKyRALt8iXNiVJQ9NnXbCZAkzmkSpZJs",
  "key19": "fuYSEAVNxNGGh4C5G3wA9yhRuVNPQduUBtm4NHuxZEe6YKZ39xdnDboTriEZC8D1j2wchmz7xzEX6JfWxqP1qPM",
  "key20": "2y8rewuPF7ubFasoQXucDbUANney7webh1pShJQN7uVnzS3RYx4YZa8JkoKfAU8iFR9FHdLMqBvz9H9K2Pp3hz2z",
  "key21": "3ziotE1acns1GfL2bnSrPSnSv1mMfdHcFBqytKGTBEwYSZpgqS6Xdyo7th9jFTBw44Zyg1jC5rJBCd7TF4H1NmmF",
  "key22": "3v4mcGF1Ukx2EkeCRBsPPzTVxQtZ6QRNJHCc8b7Fp3BtBMpSwjhfksfXuD7FYXZAQcLDxVVrbtPbfYATY2Bk5MZP",
  "key23": "LPss8qa4aJKEy6uobpvmZkZMQGntUWeGY5ktjj67eywNQbEbH7fYg8pUhRdhBAqwYBYTGG1Spxp8CHv3BYc28tR",
  "key24": "2mPvVDfMv2a5aBmCWHdmTZoimLgi3s7xgXd1LHLvsPYyCFSkM9UmY36VsHamVStMhnLAAHVW11DukGpN3mYaG7bz",
  "key25": "5QLPVPE7DbrKGbFXgMfVviM46P5gfZwZ5uFroCZWe5cDneTRMvMv3CjABPSVf5Q97zE1CC2MYrZ4dajapuorRw2G",
  "key26": "3rt5otSjW8c5kMZEnnNZBt3cvYZvYUyr5DTV3nNnLpzob1h4vtjEezpHqEiM3JA6SQbJbic3Xgd7g7gWQtDm9xtt",
  "key27": "5p9iVag4jwr3z4oxs6UeBbfoujKrCigqUHaZMfRLAyq4N45n7chha9oszb5itT1AUxaxXrJnenkNFcKFucy3kXhH",
  "key28": "SQexUiX2TPTVoiNdN6joD6SVbnEpRXxDXMm3gPHwGBdALMNx75hJjJts17Zm99a7wbefiCqHfN4zzjxRZbuB3F6",
  "key29": "RTdP7ChEpNyoUD2jpW4sCrVYuXLMNkxvAoTAo4oZFrJLAQ4cFJBuqAsPwC8ncfRRT7Pv2PXjAR2TTVmDmFFfFMp",
  "key30": "3gic1m8JotqUXo1fGxKdBgPPh3sR9hhrqkXRB5jLmRmq1FrBiWWUyv677Fe4xaH927GrdX2qvZ2bZhfZeTWwJJtf",
  "key31": "5bbSvTCnEFLoxriDFRCBMJ4zQSnSnopFiZDDC6v6SWzZQ9x4iUiGJmj63wnU3ayfJB9fXfYwLwXRfRCBaPPtk99L",
  "key32": "3VfJvzc2k8ThYx96ZBpSiaGn3cLuAFhHU7m8SAs3gRKpb4bCZGJfidFj1vhVPvveU5iVn5duwXfQQNtML7wktCNU",
  "key33": "23PZyUyXLtZb9H9v87ou3qnQzm1F9wjqs5jaTd7CVhNTGWicP6cwoBGzZsCEUYSvFVb3op9dr1U2fWFqXgmU2J4M",
  "key34": "2dZ24vAH3dB4g5swcN8hd7GiZtrCWyJNB44NjEyGezemTacz1msyV4MuUBJwBAvE7QD2TQi36hLRZ5ZM5a3zH4NS",
  "key35": "3t9qffaRhSoZh6kZHGWYmvDmEwyU2G1EcoKHyVsQKtzvHBKJNWwvysygP15nrVos7MUE7iRg6uZdgy11a6ZtoCRK",
  "key36": "JsLpU6Sd3TJvpkAyJ7ESVYn2634J1rAhx2DxJ5yHbdiqe3V1SbdicNX8aP79NsxCNvfrMwWpAzDVvvYBoEjxUAq",
  "key37": "3xnyVhPMem2Dti3TdKDeRrsZjodukEhsaT43ULMJQXtDQxvPUjRCUhp1vevRH6X1xymKxFSRxR6RUQenzzNbkBUh",
  "key38": "4ZpUPtQ4fwp2jgiiXALgKqWMfU7HgoeB2Fu5abcnrEHQrfYhzYyoZsmJLnZoJ4ahUpRPBQVXEi47H6xGdmvWTcWS",
  "key39": "c4CuezLV5zMbMwxKdCNa1JzCiGRZhahfWPuNjVDoYzsRmaHvcY9VhitvSMimSDA63KWmPup8RZquqBviqpNKSGW",
  "key40": "3sBdPWQUBnYsbKPwFRPkg1TDaXTFAZxXDSPLUn3LVxvCEuwZXUQUTodEPv9ijQq1CXa6pATQmvvsut1B2H5ZQHdV"
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
