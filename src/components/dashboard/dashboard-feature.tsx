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
    "3tmEes5fpAXnAeDom5anAwU8fkCk2M9EYLn6yhWMhnmrRCjzqijz5TVR3dYsA4M1fMePwkaGwTstvfz8vyGVr7Ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uVnyP5gVsZiajWZiwG5aAxWaSUroyRkRymuwGJwNKfEPvBK5Cd2NPJTZHd29z9qMFTMYmgUwJoMhHDS1SNQZZTH",
  "key1": "2CD3WmpfuNUNik2xLFb2ufyJQRBq2pe5b4HPJZsrCBM7LH4GFytPZ79cfLQbe9NUcjVULECdv5RYnSMWeAuGkioB",
  "key2": "aEQs3HPfYoTaduhX5knpvrZmHBPc7UPLvtTrz1wzPy6CdA1JDYJc6foF6h16JRW4QUpw3jAEtAibh3Zvvx2kbK8",
  "key3": "3jEjraQoEuDaedW4t5LU47rMteBgVS7j23Auz83eSEQR41zyhbjDuxnzjW9fsbnHkZm7vQ8CuNxKe6JWUEPsM7rv",
  "key4": "4QHT9voAXTJyXY79phfsWsxY5tL4vPty6ZFkLeKtoSZ24CDWfFSc3t1kWQLJ8KVpVW48UXJcYwweUY9PS3PEdTpg",
  "key5": "5xXXw4mcTehUHTcjrX86koSfynmgppVXGa2GiUXRiTEMC4UhTBYr9CU8PEUj1BzzLLSXbUAhr3CnqvPHagVFWEeh",
  "key6": "329KHisGSCHcQaEnbnZyjKhAgY5a573hzhKk4QToTVsTQxbi2UyLdweseD1TrqNQo8d7mWy4H9yCjrtQfH5BJQMf",
  "key7": "3oevj9tJ617aQno3epeoUVm8ZiaHHUz6p9H8sSio48vTbCjEGv86zkNjdVX8m3wX6QMwduLNHUuy3eYLKw6nw9TJ",
  "key8": "3F1ow2wEPj9eaNpHdcrmfSnas43CUdSLqUkk7TW6FfVYgTJ5FoAVXisAMkVMg3isrcVr1K9MhLpLsBHa9cWL1fzz",
  "key9": "2D6at4U3N3rGoTLMh6eXq55B91jFgeJsAtZymTGSZn3xC6y7XGPXGV8fJ8F3ewMLFoitqGbus7gMJRpwjTEohjKt",
  "key10": "4bz9gcCU8mNWF3hnLtWi7SkgTYpfDXuJ9Sa1YVnZ75UwML8bCv6o6tNeCsr2ZgL4WwPRc6wUTU2gmepMziYVTcoa",
  "key11": "2DuJ2dAhiXPLkB37zzv7c46WNnQyL3ojNmhDCJwrQKdoUMqHQ3Ss4W95nHhBTHk3r79wxnTimtQq6DmWUwyHmfyo",
  "key12": "5ELzyACENQPmmnGRuoYpoXXvuBjTTmtyLmSkKdTUGKkJHTQu7gKJvMENbDbzsiJjfnyFTgbgumbDXZPm61aRGTxc",
  "key13": "4nuSreedYyGhJVjjtuFvNB4iBae4LjNEzfge1Snq2X96YAz1DWoRzHmDEHyTSTv7EurGD7hcsi1WQtYk3jeyo9Wb",
  "key14": "495docxELdbNYfeiVnA6eQ9v1JamZkzmuqAZMv8EeykvkK2c8SXAk2tGwgAbBrXCc7nz1t8tfQdFe4ovgxKT5eap",
  "key15": "3HrrL9rWt5F1Dp2cdw8Y6L6GRr9HhkdKXTuvwuSF9ZLixCSZ1eCHPqLbCErbFKYBcEVuDVczWr6LrwQRSAds63rM",
  "key16": "2JMDuPXd7JxGGnCgUzFkE8AUCLfkbdyRmPA6CjDwiuFcYyazUdFss64nAKW1hrNrdujp6hDZNtvKmqshmTdCZgqg",
  "key17": "3m1eYbrspoze8YH9cjWZLextyZ5riYTzrxkjeEAi4zTio7xzDF9s8kJpJEJsXTLtPMypsXW9Qkbuh6911JeXrraE",
  "key18": "41MugefYPLHYJCmQ6mKRxxNNtqnbN7zAkhY6FdwntwbMgH6cYwhTUWPVVp13dVcjphbBjR8gCBesmRrPk989uScG",
  "key19": "5qgVWhXDPMf5dKJr4sB36Av1T3mvfHHZib6pLNTrTW3inVuFYTUskTQsWQtQJr75qmQN8Ceo8hwPJ6j65F1iDp5z",
  "key20": "4YdoRTxRDvL6Scwx8FDNuDVkWPddh41hwYPwYwbAGUj9SJR41VTiXoyJQFYvws3vpcfpnGG8M6qWDwQEZhssA2yw",
  "key21": "5onnDDt8Ede1bsDmxSm2knkbGmJbtg2za3w9QcV1BmJthAvvTf93vEMJLnRaNaxB7J8uv39iuSmbcCV89VHGsREA",
  "key22": "5hk1JzLEL7XkpEH9riXbFQ1YXb5KwZKGYZMzW3hkDjXEm5H8D3ok8Rdgzh4m8EUoayhKyStPVrcJqkwQJcPJX6Tj",
  "key23": "3cGwgGXDBDYzg286akZdz69ovvFTjp27zB1ip3hkH5A5GXoZ94jdxhC5noD5dm6A9HznwCQ6gcD5aU3LvDNmGWtW",
  "key24": "5D2WfdPYBFRL2YiqPwiPCWAoYExH3a6rrZV9uPcVT74sfyZf4Xuk7dBgUYWsRjBDU9QCKgkMhcmf2Ke1h15ypAKT",
  "key25": "4dHQ3gr2DF4ytXHneCQZFBif53VWev6Nm3jRNido4PJxUL4SDW6xPgR5y8fUvSiscmpqt7hfrgvPR4oVpT4PhmMe",
  "key26": "5eNPbcj6cWkkjW4j1cy1uEECpiGJicS8WSFgRmdxawZ2J4PpHDUXpNQGSLB1bnx478YiYKeZCyyTBJv1nArZPch8",
  "key27": "4PbprgRAuiKdcFiz8Fns2jXYF9Z1CDqG8UsdRLhhpsbce8eDYrzFixRLtJ639R9ej5W3HRidv3Ctcf8ZE4tDB989",
  "key28": "27XS3pfB2x4HkrMkZfEAekMmmTf9g3YX1BahmSYH6JZ6pQeVjyyLL8qyEu58w7swfQZTyACkJweTE8pWPz2XWpXi",
  "key29": "65PVfyrAFMGSRZPWp3aPnPSuRGUQ3iHS4Bt57Yn883Nv4z2np3MSb45Tu6fdV61zPDpLAnMzhpiNYcaxyHaAX9cm",
  "key30": "VJJw2hxq5QV7m5zma6oQBhioVpXCZpHj5RMHDsbAC21pwThjDx6HzS1YkeVJuTqsAAt29X8t2Ww52AmzWSiZqbp",
  "key31": "LyDw4gBUQEXpPqs73zD4ftr9PCBRmc9SQtbLvS2ZgPhrxyNYMpXpb2C6t8jySgSVKyMZSBXKP7fjrcMFjtC1awX",
  "key32": "3xoJ8YVAAwhYBz4LWsf9S7tZ6riy4WiAuHAaXGaapUBqSY8chgzZDhQMYrcJVNQirQvs3JDGykdwvEDv8BZtBmxD",
  "key33": "2w5haD9637f83HUNHvNfa3BChyxVxRk5M9AuTUbuNNsdDBKG1KNc8reFqF4DkbRbzAMvdS7otKt2bXRUgdUWQ695",
  "key34": "4nNGv7PkbqkBp41sNMJwz61HrRAKLVEvXRNkXWBJijW2gAzWACbtSbkqp5rsUKr2xTSeHUzg4V8F5vhQpVLuZXEt",
  "key35": "2Aox385epj8Bn61N5ZjKmHCVXDFwkMreZkcHaDpmmEPySwhd5ag7rSpqqTWdjHuTP7LW5S9Cs6P693ZQWHGE6LRg"
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
