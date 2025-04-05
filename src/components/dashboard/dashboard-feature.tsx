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
    "3AczZ9dZHsgoEiNS1LWvXsL8JVXRahFbYkzPvzuUJ7xcpZkVgmBWpgCndpJEhnh3XQpxt4ReaJDTYoWgxiE85dvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X58tFBC9kgVJ3qeauD2nSBE8nJK5yc8Sy1FVwqJtxFk9NryaJT6Z2sdoBBiuqvvLoxDGHgfkbDpyNUs5HyXcj5P",
  "key1": "4M6vQNLDjWFjvcfjp1mvGZJFRwFFPSzeeETEzyoJ2PMKpWce2zsCbVp4NJp1ozvNQkAbWsHUVJYwoeKDf4qBSDd3",
  "key2": "651LL8rK6u46AZdi6cLK1mi4UqjAXVcz4rqceLLTdnDZFf9XqXmiJEPsYDhca9urUzxmrpcZEhnJXDGL2HMPD7m1",
  "key3": "48SA4Ms5BCDMXb65fhSgMbeHDF9Vi4HpaK72w64yEqhWDGbaURKAbWnft73jkPACeCppZ9gMZJesFHNJZcsaxqib",
  "key4": "3SXwrEL6rYYxSweHpEEb8zSjaRPP28367yTdpLWKVQnjyFN4Dzic74hbCC2yihxE7j7VjAutGybx1rjZMjkPT378",
  "key5": "289EcBxWQM5Hhj3Y2n2cPk5M2Q2DYbnd9BdWNjcf5LMnckYK8acRU37SVWRv9iu374Aj55wjfgNMrsycC9qDgv72",
  "key6": "46G37oK7Gs7b9jNb1JDUmyBkWgajsuracQZD6y1SoPk7dRu51c3J3w3KVrmzo9S83A1nDRmfqYNPumMcHm4pEXvM",
  "key7": "4yfjYTct8rTqWoUx6otX2eLUEfHsjwMDWJDSKorqTmuDcdSffPMuqiwccumUaikWPGgBFZHzLgv2m6NGkuztkSYz",
  "key8": "35RoXwEVJ7zWujAcX2ggHLifTuV2SPSi8qhrRTGCG26TPiucg9aTw9rA25u6xyBJFYwYxmVZaMxNTyMngt4Lc3na",
  "key9": "sTGkizHDknbJgsoMUXaQPijeUjh3m2DnYPH2wmK7B4Ew2N1mnTrWf1tq6Tg2mmv9nV3fzLf5wboaurZ4uP5e5eN",
  "key10": "36WuBdNV7Pqy9X8iKEtGjXVi46BT3NxY9wuSnUxXHpgawFreoHeZmUhiQHxpft76kwh2dNVHm4CrpQCW7778GSCr",
  "key11": "2S3LDzkRgLM6NugUP2Ef1BAAj7Mn8kywr5zW3mVsbE4z7ByQdcLUFaQK3ECPpXoKJMN776pzq3qvmXqooXrNsTvn",
  "key12": "5spJJuMMuNf8FnVmagF4krUmMFknwoFgV9sywcAm8U962MgTPyy7jzEGqpqsjT5HNYSpZJaxcsfdTPGAq4nRkEkU",
  "key13": "3qY8HX9fNdWbRQBp5fFicRXuHSAqzHAQD8VBmdzaABjGy8nxvEXZFXXLybKQbWjaVkt2AmH6EWsZBMvAtt9MNE1N",
  "key14": "2PNnLNGQQdkC8fT9NUQfv7bvUbiKdZpxoNiPEmfFXs1A64x3bk5JizuieP45tKh3J69HtCmyh4VxgGFz1sUZGNGq",
  "key15": "4mwhdC7X3s1ycRSnjEYJ4ZkG5pupLMoYMDo4qP7e14VgAdDWpLb9dVr7xu36ZyB8h3HQJKH2PALwDCZ3nTArfwnk",
  "key16": "3gvjRZGiBm32aAQaromoj3e1Kpc49gPLkUxRT3X8CaMLWNDxXtsYtSnoRXWWguBK9KBjLYMDaWB2icnDjpE1tQEm",
  "key17": "5tNAiCpqimAA1i3BstAbUC3b7uGY17S2n4C6ssxgULArETumR6YcS6exDXcGvUudyWxB1fN1SFPCNod8deP3KaYW",
  "key18": "5T4kxVq8rVMmf4n6kvQPY5BovFuNur1sRbpsacesiM856E5qJyMcrjLwB9FyyTrbBu5rhdZDPM7ndPETWDGLueKu",
  "key19": "C6Jj99c4Su1aq1FVrQxY82k9k5KLVTnS7hcveePRBeihw4nST2cs8WCGFcYyTFzsExSrRf2y3gTXcMUak1GtDth",
  "key20": "2PFY5poEPDqCZdG8Y1F6zobziTYSzJBkUJC4fJzKvgSRNzLsUqAVzSrpBDs2HJssMaRWCL4P9d1QnnpDRf8JLBtd",
  "key21": "5JJmMoSnCgDfbzGtkMLNvVeDoxjiJyNBHdK9SMsQKGhoQzwjtiNLXCvTLJeUpn2LGeKyRhTxwPrjnSyHeBnaG5si",
  "key22": "5vaW8mgftiUYWJYU7P2fAjitBQcVqC9yx3qMy684ZPkUzvrM2AoT6aGReW4weK8JtKgL5ARV47BTedin4d6FJsTV",
  "key23": "647jp7HWwqRYHfVKy8QXjBZPttbeTQAP2ALbenZ4pLBxrJB49sJDHTN161N6G52L28xuAVxW5MjuxsgbCiF1QuZ1",
  "key24": "H55KRoD2FDQriBi534yAnD4NpeeGi4v8NYkU7NovRbLwfc4d6TWtPRAC6hXiwChmNz3jotyLM6wPEvGRNg1SyDk",
  "key25": "2CbPE2Hz2URa83PTJ4mCFAtSBXyenYS9iAWzZStJgoJ2k4e22p65H2CaiSww7ssiLHhzTda8boxoRrKSurGuKGLg",
  "key26": "26XfHLeH3WNRk82sdFa74PwnCRbbiFuaCWw2WiNJkzVgAqHVzs1hf4SL8Q1M66xemJaRVBDDVbUC8JWSs2g1BKxF",
  "key27": "5UCXuYK6XwtprURiTJFnsy6ZpByFMo6cZdcB9zYNkM9Hf7DW7s8LsKEJ2BfiZ6dmshm52EEoSQStPNFvPjEYQL9t",
  "key28": "ZZxhM1nBuJf3z6P7TnNW8Tfnh9C1VUrhNe51sV8tNcp4KVyQSx3kg9j2HegJ2ZE2yMsi7k8NqKdePHhQ6KEMW9x",
  "key29": "4J3MLsiR2WMxNvrxhiVdC6VGWjnva44yzF93A5FmmSJ9ebrke2D652m2DnF6Eh6DUbGKupKYFNC1ke1GgqdZ24HP",
  "key30": "2kDqFPfDXeBCU2byudyrXMhjLRe4xB9RVb9DupcQRFNHMdSQVYpYbgx8KNNPTBT9qMPYjRG8QPsB5AeqpcwHWnWq",
  "key31": "3wuCQNp12SDSdiAQyi1GxquGyWbovhk2PwsN2Zdq1GPmb4oVb4U9eQZoqCB49HJLvDBpZma3KzkMJyETwCHCYFPm",
  "key32": "4yg3ihdEnAeEmXGT1r5ft9P68WhJ5q56D4NtKEp8uCbjqY81jD6pdjxGVzPFFy99DCK6tnHmhCQ91pSMY7itXPdp",
  "key33": "5EDQ6HCS6H5mgEzxrBSQsXscTecavTzjZ41PA9ZZCgx7oXZrQZ3QACSn1pCQFRYdDiosyoMjzZYJDRGxQ2JbwP34",
  "key34": "215VGtz1MypeH76Jpvv4RpCTAv3vaDF6gLLEjdbsMc94FXrCZfsS7eBYJTPSz4iTibS3k67Ws3zrEu2fpkYa1jdG",
  "key35": "4FmG1A3X9ENhv7ciQBKdnNXSqvPw8urfQXY46eempNfHbhxKy97YJMeiaYnYScZh3cKmjzHZCPt4LHQusNENn6od",
  "key36": "34nBtXGQoXeNVLJQfSYYeK7p82NiYZAU19XZjPo9KP3Cryv3mACNKaEkuc6Q9jWRXRo9WjXhxAgCMbmLAsvKTWn1",
  "key37": "2DHvZDU1nwP9dvtWpzAXwsvj9PoXGcwxyU8MBR8ZgeUQBnXTD887NDQEiRL5ZrEC2377Mm9iWtLra4xYcoqwsrqG",
  "key38": "4FqFUVkemh6ERDETyCEhGjPd5tt7cX47Jm6DpXHENVd24DHAvd8UgWd2K3qTjyTi1FJi7SzMBKG7nxcSkr6Hdkhz",
  "key39": "2qTTA3F9nAeowTvisUDrGh8qXw4yMTfA8QUrU8xCqTQwciiK7LrXd3f6QSZ9nVSUnVij2Rzp1jEn4Zt6hXtCi6um",
  "key40": "5qntAMcK262JxR8HP2juqBgcNvE4nC6ZoqFRJjqXm1svhG2BmdJLR3ZoWvWk8UMshMkqkCeibr36xDuRWQ2bjPV2"
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
