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
    "5SESCzHw6RjoTqDqGMDd2xu9TSj6mM2FwbVNFCpknSh1Pfter4iZkxVQva3y6C2nuAJbBefQGhg2Nv5P2YmbQKL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cBDsnDvsNkbtLc36UNu4W4HudyAJdgsEpphdDXtBEbuecG8B2xVVA8nb1bCmA2n1j4qPvQ64ig7EUFbjb41vmvD",
  "key1": "5AuGxEhRoAswCpRYS4bmt4uXgm1fPkoMsTbcDwHBHraAvSjgnRe37CAn6johbZfPa9HcUmMpdCk14ySpLkxJbqGo",
  "key2": "CL1v8na9QztJan3ALYmybdrRb9X4dwpANYmpSDU3tQ4nvPY9BhrtvpCoyJBqKN4bUcTC5spNrRGzZ7XZeowX3BY",
  "key3": "4eETvc5dez3PJVEdZ7Pkd8bk3wCkzYweLHgQPa43JMv9MF3VR3yhpdZZW96mZob3AeCT5VWaavVzZePiQL9Z1m1f",
  "key4": "5KmGjgcbyLoP1dJQCgZbE6rtYn6x74Ja5eFQfrzgNDYpkTQQ8QYFsfzPLLjXJpLTWofAKQPSafXz5x7z6mSXPRYp",
  "key5": "5UQceyMbWSpLxVT8ikwXCoGaVGr97HAPX7W9UC9xyuQ3VQ6NbV47qQiAbXNhwANqDEhqRjYWvmJmby98QopFCk1X",
  "key6": "4UaZbhKDJ5cKWHPCRU6fwwzV2ZJZUpoiUzbH1AGfVerqHezzr7epDPGDGBczzAp3qr4mAaRFgw4wuGkERmRPGky4",
  "key7": "61krGoHN1TCXHUw6JudfZ4ZXEPfe3kg6c5tPjFKgu2PgoCxU5eagbZNuvL63MTHB4x42TP66ek2RmLHKhmN5hNHN",
  "key8": "46k1iAirjGrWP8nXpxipcXR62zn4Lkapo5VP6azNW2r83wkNB2i9NqtYzHzunSDDsgNeMioVoUcxbxCbrJ3as8Zb",
  "key9": "BTc26FgitmCqFaeGoxnTwH4KDiZyekUAhectiF1LatgG2B2qFx9Ad7msp3y2a912rzxGTnW5evDwaXTC5CNRp8M",
  "key10": "3J8DuZxEaaDnteNFBhEomBtbVDgvN6SgHXfgc8n7RSvoP4VPNkbyBeHwnHEpKL8AvxHytVra9rCaPZNZCrfxedf8",
  "key11": "4h9X5bwRUYeDDcDPaNkYtr1uGLzBwRSBaNxHoMqNsCCfQRNsRsivcj7WKq7pdniYR9DMwHj1Bhr5aVskoi6mLWnw",
  "key12": "52AAEGZCg8bjfLo2tAM7MKNFQZyT6CqMwgWFsJTW7K2V51bmh2QqZoPTF516o4NB77qMrV9pK4gyu9UFQcnfatS1",
  "key13": "39f5JM3V6v8Xmtb4gBp3VeRDCxXzhuyNdzKxNbGpUkT8Bmp2NQHGDo8cMDBmG7DmZuVKacSub6FZAfuYmEyjt6qr",
  "key14": "hHapqFkxug93rT8K6UwpgAKkp24ygfWN44X3pMRF8zfpcwoUbP6qiXSkoiREqSA7DPuMXDaAxcg7cM9pAnZvDpx",
  "key15": "3wS7yeSqK9F3djdvDoNqzbgZhbt7s4byVoXmkH3mSjEuvpYAQ3Pxj1rkZrmJa3D3A1LQn1Lom2KC2ZP5nR3j9b3C",
  "key16": "32PrHxzwUxwZYxiMphS3tCBJvwD3zHchxPzpxYMeGdDX9mXgskhBPUc5ejjYr1Dz89C11WVvgBhSmC4kwDt8yYQ6",
  "key17": "GmsCaZM3PZwcYmV2S2bFxC1hw98CwB6ag4ohgSqR85Nfzirkvv7uQeE4R3aRiGEDrxDUK2P4CjaGWMmk4RfH2Xy",
  "key18": "bfzXRyF5agCejMzio86MxwKddgkE95UfWJDSHTZDoo52HqL91RUfeqr5oxZU7jJBRhrGDnpYx6Tczb6yAN5HiAX",
  "key19": "59EsCKCfqFr35Hio5zBSfoPWBbQVZTdoxVAYg5XJw7sK5wPXifXYHyCmhGpc9xBkX5VzkFnZgkGiiKg9JSUuufzp",
  "key20": "59VDQu3bhsJzLSXELUgVragqHUD4kP7Diorm6yDZhx5NqRgN3z9dmowvnQzyKSmQ87r2HeC3SVgjAF52xspD7tKq",
  "key21": "5Pj4h4VTsZMCgssCELBakeL7iyGgPR3fgUmDES1Bsko4mRX3ir8nvbujRX8E3SfyZpk6s3bUYfxVThg7ph3pvgJr",
  "key22": "451DirgPPkyeLEoU2yZfePnzbWKUBbUfLchC4RL2mLYCnBta6amwCRyaS8NcuhUFE3KefMGZmpwFazUDXPMoJZhX",
  "key23": "4a7tn7vJwRm75UR4kLx3GYgexaVX895Wkw1tHLt6WXyXU6U9kHmn8oxyT6Q9KrJrhDdWSFb7iNfKPdhYCDr7ye8x",
  "key24": "2SiADsyW3ua18C7sQbguu4j8YmbYc4orJDMYAgdMWqcCrmUzA4xeGLg9nveYuAvrt4VBt8sx23YSNQSF7mAeyVKm",
  "key25": "5x3QTuL9ct1VfpSJndTyNyEPboKXdCRV6vmY9KnUmvyBJm1V4P6AAecFdc5JuJaKWHTL1cTkn1HwNh1nvBZd5D4j",
  "key26": "XCL19B8btDw89rQDCoZthYy4GS89RaGrHzF8xCvGcNUtFTe7qhkhZXsxiYrMrfJQSANmNVX5JcV8zEbQVmiX59a",
  "key27": "4AHb3phhqAWKfpfHmgFV8YAYKdpH1Xfhf8sbRHUKkMscKYReUAYsC5rArFZH2LF8mjhL7kyTZvd1MYsf9LUxo6M1",
  "key28": "4zyuz8ynHUc1FmXT7bnoofakR9vNEgav87Qw6ShaZLbq2Eau2TKtgt4fWSs6rWDg4rvNYDQ3isHATs5YJceaXjyW",
  "key29": "mpXh9gefj5GL7CooUciyeUZ92cTpGLtNWbq2aQKhrTeKnieeRex4P8GRq6rAHkwNnoHirWTzKWC7za6WLNmiSDX",
  "key30": "5e2jKyXW7uSxwQ7B8JBmdnjVExLostwUrVyiM16i7Nqvw1AW9GHobZCotksFZcUsMDhaCvpVtPY9iEncEgj5K1VR",
  "key31": "4jw1UWWsWZeK5AMCboAqJEBNHE1ddHxaEJUAmrmbhujvSfcJS7VbmUurw36QPz5XLNvoLmmziWiJCHrioLyatVX5",
  "key32": "AwL6ZBWMikNAmsqQYN5GCZsMYPzsQTyBDYFsZZxwwgY1YxAkh73y9N4ZFb6oatTPo3gtsVkd7LLReufafNCbHSU",
  "key33": "jbwQ2UKFGGYMAqbjSNSYpD6acjgdfh5Ev2EqAnjfQbwj5sKVLYMtmySxW8DdcNZVFR32aXhhc2ctu4cpdJqz8gK",
  "key34": "5W16KNUwZa5zdafdaPjkdu7JvdBv8JdrDigXeRC4SbHrURGNHejLSfZLyuofwZB6XYdX1s1NNavu9zWiKH8FktYq",
  "key35": "2da2E4uXFJutFBhu7wTv3gt3GTStyiYgoxTnmwqcCGizFgQzTwQpr3CBYm57fU3eDXEiLWh3QwUxkhYTyGP2nuWZ",
  "key36": "3SoA8H5gnp4NAuLdc2rhFw5JjrRzu9oTFCRCe2HescxuKhGdVXujQQRvxeGWUkoUe6aZyn9LVPqn9q9QVoFS1dA2",
  "key37": "2eE7TyhxVR8u6MKhN7i2bAQ6ryAdco7yEaY8knStSPs1QGwobgStZa1FbKJqspfSTaggT6ovrvqRecvA6ApiEuWt",
  "key38": "5DyjDN51yJcgLNUDnJhd9spAFvEpmSBgYQWDSaCceqZb7DGN6M7wCqyrD76vzQLDSHEfaChC4B9RxUr3eKf9TYjY",
  "key39": "2fLiBQ1uG8kfG6oGVKE8MhznCGr871o4FMPLvBkYphnTLLdotsboZdHaVGyxG5TdEu1d2SPaDtL4fz8ApLTRh2Gj",
  "key40": "5RSe5AuFkqy2fiq3zduvBK5SeD5R4VFEiXu9ZsLkGfJhiCs2qCtAytY1VUw6ta1hnFwLKSpM4REPEkWj7RCJi3ak",
  "key41": "51qgj2mrKMD3onYPwkS7WB5pV2sHZvHqF6NjRiSXpdspmBkxXMVG4tnpVo9WYZBeByTm9F5mRLf9a6nUpv5NpRky",
  "key42": "3HTKHJFUPCkfKg86LHPp4rmbZ7SdMc68UqDyv255TeUp8WZ3BptmZuCoS9rSnXCW2BdkcLg8K89nZReVPcHtH3ZC",
  "key43": "31eYFHuzrUNwdy5D54DZwc1Pk39ZWkJs2uYmnrLy6tN9rgchPttthFFwSD8JEV63KM94ChnsLtt3vhGFtcZab2q4",
  "key44": "5v3kxEh72NBfPw9d4P4oa741XHuF6tKdsoqnF1zN2dC5w3NCEXRRvJ2rUNY7VYsVXACs7eigbtFeepw692kdaz1r",
  "key45": "5YYct45nvvmprwkBnqWgj5kzWzt2v6uDUbNphGUtbJqry4Drq2y1b4yrJgoSVPjAS4weK1TfCYYw6gqqPt4QE41Z",
  "key46": "4HU5eYnTUGKSBypHR4oETiQYAwoaNoxht825KFz7w9HDAQ4wSFhCz7LxBtC38o9uo268HfA6Po7zJhUh8cfnESGT",
  "key47": "3sEzjxH3SG24CoDAb6U1JNcCAjuTP77nUgC1TJGW4GRwcfiMxfmQzrehf7bKYqEHRpgc6RTZT4tDhnyfMe6fiCT8"
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
