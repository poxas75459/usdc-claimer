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
    "3ohJua3EfMNc2VihvP8DoKo5ES8H2hngUtFdjCm4Ui9QfLsPV5aYp2qRobf1EFwo5mopht71f6M1Zeg6GdKmG9TS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rb4CbSuEhgjffSJM5HkBLz2jxqKWgnUJibWo1YRpJJ5ibEUzTiNv36X5sTvM1aK4YKUgktQxc4tqR4uALezDNNL",
  "key1": "2MJT7sshVcVrubQugDNVfGfN15A1xSzu8QEXwBbhdt9G8435fZXR9tbpN4rVDcBeDwiBgpiDSH1h6REpq8YHerPF",
  "key2": "ZNzYBmDjZFDRNzwUK4HWi8MND1Rme8J2s16GP2t5kPi7p8Ez6KdNHCovkwRRU2jTWfQADBaYdZECuMY8n57Xx5n",
  "key3": "43qxH3hMGrHUgQG7Zch4cX1pp5h4BTPy641862cKCqiom9EPHDm58bJDc4foUCfj3e5wJKMXRmfQH1prS3LMsnWx",
  "key4": "Qp9NiGdyacM9msMHE33hapU4PQBKUTytFUR5M6AqhtTyTxgWwF1LsjZriWvxiPHyfrYczEt75K57ndavKAi5B5L",
  "key5": "WAQWcdMbHou4FxdnbDL9bC1uKzoBiyrV9SGwKcn4nw7ddjH3bUoXQMnXM7Y1spH7DXrwFtqu6dFvpiS7iWGGkDm",
  "key6": "4yAZ9Rf3P8a6bg1UXF8HEVpmFoT3eNAofZR8BLKa1f8VY95nBv3KmTX9TdnYpt1bxjpTGfAyFvBprG6T2mwUQEvw",
  "key7": "3nKN9iGrYn2J93bVBNqs3edFVfc3rNXbo1LSjjSTRLdzqyrfoPm49wuGfH53zxChEV9SKCVQTH7RpYYCN2ehNVRo",
  "key8": "NLCwKob3ANSSPBvQikJJSxF6MDUbmsdv9isGoCFHrSEgArG4WL5g9u4B23G7agxjkfGS3DdbXgYqeVJ2ZBLpNEd",
  "key9": "5BQty4CUtYtufn1NRvqbQgrZr8jxG1zqiRQbvEKDyvoKZh4AhN6GyEGinkikGKWbw1vgND8m4fR6a4m5WbheRJY3",
  "key10": "3r8GitC5HvLUQLvnhg3DySdW95nKQTujnEPfPQzixe7E1RJbrWP3kYyrPYmxryB2MvzocThobHhBoKk6MdnnsfvT",
  "key11": "5BiBQi386smFpYtwNJpEgLJ6FxtPmCkogfGniJagfMBZmdUp2P6FLocQSEutN5votpxEWmwfKDk69HFadKG5eqxd",
  "key12": "5waMQxDCbz28Hoy8VqVrZCAd9SMZq7uMkLrKCuFVJyaXp5WJMefKJkaApqrKnheUkWpt6wTiNgfACsvVrucjkuKM",
  "key13": "6wCGcUtQMMkaazg3ga1WyXaetUDLiYU6oYcPhGkzE1hjBZeDCNz64Ud5jgvTkk9PwjViqAjZTtGCR3NshNp9cYq",
  "key14": "3LA1fMEdgs5GrRBtQLDMPs7FCUp4ULk5JynB9zqy4ScfMHTx1aYnVbsYauNpdRQEb8xNzsGQZV1qgWjmpkmHuQ7V",
  "key15": "55J69YSvBYNAUAC1okgFXRKjPKcy3QhXkV7kMfR846w1Wc8aiybYd6E5LUKb2iTQmBnEFCQuxRVpy7CNCGovx2wy",
  "key16": "4FworCYSX4EeQo8KMRp9mGt9wfiQHMQLMzEdMEUHeuKmRsjNu7VTptxQejcFoXkK5EZLF5GTvJijYAYUxHSSQ7YZ",
  "key17": "5D2sBSaaeFQMBgsv9Q5jU9dadQ9kpyeX6veKMkBN43LQu1oaYUUJ3gewXEdvomJiFvZefdEYpZ3rcFeBnbUqs2Uj",
  "key18": "5FPthovXmR8cYxc9CjRDo6AJY68uGTCRrzXKwAcewzzPe5NiDWudYdo1JeoUiyJUDCxwdpF3bV1qrgkRkzvoD1bp",
  "key19": "2R9WMzSEEhujWB5N3XTyycSYtz1ixgokDzAMi5R3ahKPESKLNEJCjkeS4sbZcgHTASFPSHU1pNvYSmd1wfhAt7or",
  "key20": "3QzVNpGjpsVCESjPWkp8GJgsgeKnAPc6JsNZxkwq7bnnzbW9zDWCAPRt3ZP5xHEmmJkvhQqP2R41wQRU7cago6Fg",
  "key21": "61S793tG3sCsNZu7892qJtsDeBdx3YQEvBwe5HZt7nj69vkpK5xbSccKSd2JxhUXsujPdFf54tnSfPGyxwygcGER",
  "key22": "5gguGZViLV4Ks4WWvukvaib9Jr4QU3rBaMFAtWjJnU25Xq6cAtBFtZFdrs9TgHUP6qufpjVR9WfVzqoRjvf6EBMC",
  "key23": "5mxCX61Qu4QLL1eQg3TSQdaugVz6g26dWFmUvgo7wzoiEhVurc4rfPGDsFijgRCMdu1yoZUPaeMNduWs7fFWan7C",
  "key24": "dRJ8EABWEs3aBYTMUBZYoqwAcaUtcFTHxgrpJhWnREHcyPA9aojqkUoYNnE6JUvNbddT1VkbyXjwb27qfvU3qcB",
  "key25": "27mx9KWH4pQdhM5t7LqKYPnf9t8pHn4jM1Z8VVAxdb2vfwnMKNzqTkbQxtQZk5DfovFXD6b7pUv5DgbEeVmn1npc",
  "key26": "3WWpU45MDiWDbRDC8bCuKfHW7Y9Ek7PpBHTUEcYtKpCn4Kp4JroFKJxUCsvzPcsBCHVsP6goWo6jDND4nzWCq6z7",
  "key27": "3r3asx8p2aF8dfzrqcNfNiuKcadeDrMKdRgYZ3MKGvfMRC9K8AXXjretdgt3X37fbcRB5tKppK5MKR2CiWGZeUDi",
  "key28": "2DAzGD6b6VGvo42EwLpr9dbPrJMFofF4nMiA9bmL743vRwYJVMhNDcr6iLN1R9iBpWdJAdzTMsJ7UCmFETVvbxoo",
  "key29": "gdzx4QTtDMFuNdryAZVQAkBrgbYKsR79msLARQiaBee1EcAVYnYYd5X2PW5Zyqgbw5PDyj4rPJXYNqZdNAXtQYM",
  "key30": "2egZtPiLkoQTrz8zZCMjT3rJ28GM47rf5FWCxko28JGmj5akDasZapczGeYMUKNGF2NirLSbiYzNvoPZVpD4p7GH",
  "key31": "2RXXWL2yUpKBuNot1U6s8gQg8uN3XPFgSCMAuijxqWLnFgnNkQqanDwtGGTQLx7hy8EkmxhtHjapX5goSKV9XxmZ",
  "key32": "62DQhG39CwkwvLspJkoLA21TAp1X2hg324XNkknotyRUxKRq1RMFya5SudB1tw68dTZP2x4T5GcCQc6pNaPfBpst",
  "key33": "WEq8B7gwP9nPr9TkDLrEp8piqLdKdTUbJ7j1KZBy8mSTKBGWShhiEwjNuKMyr8h5CtnMN261pM4g8qtJBpjuDc4",
  "key34": "4JLJUt8zEv2XkejDV7Cav2Vb2fW7jAApTfFeAkCzQYJsDKXuLuWd98exmF6fG1kzoAFeyg1sBs8uP3QW9at3XK4C",
  "key35": "U71WhraohZ2g2tuSdBCWbmxBmHdvEHRVQoFqvrDf21dkFmNFLNfd49HzE4SNxd9FKGfdmQnF5c6qwztBE8SsS6v",
  "key36": "42ULVev8DPggAghcZ4Wc5kU5zut7yG9z6rsGn3dbgCqvzbv1p2LA8uNMPeNcY4hBwQvB5kqMyrTnaneZYTVBAVTm"
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
