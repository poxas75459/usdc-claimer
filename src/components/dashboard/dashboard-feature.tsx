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
    "2AXiUA7odHMvkNQanKf8WLKedf3KTSFqdTUVMiGXoxpTB16CC1AMmdgx4MSRHLRGD2PrEmKHhCh81gVFfhtPJ8mS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WEqtFPnJHEEjy7eUpY2xNTdBd5zLSY72eTnSjhMJkQuckDMF5EHkGNfcFczAVvdgrW6uxqJ58sfZLoCoYgDZ2sQ",
  "key1": "vtr5WLk9bZeS7kFMDug9Yj2vFH4pWyKecd6YWbdV8bNg3HRFiRjBNAJisn2CXUDGuNyyP8gSiKRDgpQNRW5UHn2",
  "key2": "3gYxtMDhXGRv3gyqnrNWZmjTNnrZqD5DgR6idu7jxTw8KG7M2BTsSDqWoVptXJEMoXm8unBcUPmauoLkRYmCiKrN",
  "key3": "26YxJMDE8ntx1jirdZMY313LzEyW6VQY37YTUaoHFruDrRPxrewvdd5YHpz8SHdF5iAcS2SZVnjgTriDf7yX7Neo",
  "key4": "5pVRRcvCrfoy2xd1RR52RWFqTobNmg3ir7xPspvCPf1mCaYZpL5BzJAY5UbqtvfbXCppgu99YKjQpP8WiNj2p3q8",
  "key5": "4So68Heg4uqWQQvrG8fK5iqTj18H2AKCztr1woEQiuLbjuCV6FjQZ9XJPSshcZCHef6skh2RhRuqpDdjFSZEnwAc",
  "key6": "sc5H37U6em8sjy2GFG5t4VYGKS3NMggoWuJs1Zz3226yjQBBEfy2Wt3JR71pE7KXrgox51UBj81oF8Nu6ckCxdJ",
  "key7": "4e8K6L8yGMC2T5X2aVHCTRA4L7zatqvZugQMqqSK3kj3v3H94bAeWDLmCgzrzbJ2auSUw7Asv7HdpU8LBFLXYHWv",
  "key8": "3obrLa6rR5MMFarD5cKB6fNUHRiFxRbY8sv8C1k9ATwxCgD2viQQFhhnaWHWjw7jQ5uJJpZLpXvnB638vBTUUvLf",
  "key9": "2Ta2URpZZk5nSx24YG5ngWrbFU4YsSkpofGHEXn7VLghMCVXtcek9Qvtpi9vcMHGdzRMyag24MGVR7t9C3ryWQZS",
  "key10": "57iSzHiJBZCuMnSzCaqvzNbxBWbM8FFxGDwdc4q5qE59eBd12KdRCNnmKUiditXHtCWGKLP8gGcXEcwhfmdgDrsv",
  "key11": "3ACjyv458XDux2MrPCTs4SqBXrY84kc6MURTnmLU23tyuPWEAcTBPrCtUm8CiPv3HxmWveLpnuDHbbLaRARGorho",
  "key12": "5r57jLyU7UfNetVqyMsfzb5g3SMGZogbVgFKZmvtTC916kWpfxXxj9SCQBCF2eUqq6LEABd6feszGTZBQxrRUK3S",
  "key13": "38oLm26LdXP9FDuoyXBFf8ey5MKstyhT51ZMMzwRS6DX7MesbfdMKbeUhn5cnUTHv8ZoKZ1jKctjvA9mPpDACYtd",
  "key14": "2rtmXFYheVWk1DGqNHcJy6ntNZfdcXsc5tjRmzDC5SK2sZ38suDd98J1GtsM6iSKrBoQbc8LHDviByCeuJpFbLRf",
  "key15": "4k3ZLFcERPZVY7gKtQpW6JhyYqqEEagY9cUm5PHNohcyY8PFsmjgJYxqCGWN8uEACyaDZcU4TYrBKPjnxYshCah7",
  "key16": "5CKcetKsfsuxSjjmxW9EqiHWXLixcxpdZkjsEieT7msaiGj34VfNkpqFcQFarPRrnCCT5y6muy9EqUU8iG2kqhF7",
  "key17": "2sRHdW8X6GtKWNmgvmSTeFgMW3R62g1WYrsyMzbbzK4i8iYdzVwf6d8pvB2iX7UuMqdA8FAZismZZcSkULXujQxt",
  "key18": "2qwfiZYBGuWTNtYtVAD9xuiHPQw7b6yeuJ5UEb4xRLX2aGpYLThUAJcBD59Sr6QtWjvTkWaPZHrgYCET5FCxxFKF",
  "key19": "5EcugRSXSys59Mnx2jvBwW46psL3hzvsz3Rrx367MsQHiCzshmEAdARGLBizkbJVg7DwtUUEVz1eyVnnwLceLGJc",
  "key20": "2FHnvLEmbsLUiiZQhN4tm6SWoqKFtggbtWQqQYZ2MimchQKiS2GaB8A8dEqxdW5hHEXbgKYF4evCg25g1AtbtqA6",
  "key21": "5tBsN4kgCu2iWoCjvQxhrR47ifes8AsHFtsbHxYqrbdF5TMCnzdbF3Xj5XEgqsCHXWquL4txXd2SfWsBBpAvVBGP",
  "key22": "WeMyB4p3mK4bXVcw9JH8Wa6c6ed4Sg2qeNxdW6qd1qUQphoyunbdZG8EBm6U7GAVEiQ6h59Bb1sPLBsQgJMoAPJ",
  "key23": "4ai9rj1RcQ58fJw75RnLZpfnHDrFpti1JhkR9XsJefJRn1ggexWBivEbK2WZicdLiznEKxev6hjJKxBcrC2CtRiJ",
  "key24": "wJqnNDaHX66AHKnkdURHeqXJsaZjkL5qWxL9hH9pUftg6UkWD2KPCR4bXHoJHs2yUbkC2eGjXdMnad5oSSqTRaF",
  "key25": "2QaXMP9D9gMtCB3zAGLHNzeeZRQZa6UztpSKTc6V74NqVf4MQJDyXTR4cBQzk9FaKCtm3knrhKmXxMd7Ei1v4unB",
  "key26": "2c7dgjeyR2kd2RshnHTd6EJGHkqScrs6TCqZtsvykdhyvenqqAyMPfLgXk62cEoYrcH4mZCg9HtoPkVEvwy3BuTs",
  "key27": "2SPGxWdVp9hCSXUL22j8hiTUe9nRuVcV4yWaYwrKtVf2sPjZVv7EgENm7K2qX4QHpL1Qct3VMpY1ArtPqLEBchwR",
  "key28": "3p38dW7cmsKXoLziYDQQFCNPK4ybeW3hppEGdKbPikEg3X66owMboufZAebC26V9yvDf5KDNVfZGDdcTsKAu2ovK",
  "key29": "4w9FXvtCeDMJN4Knm5BhET9hwUZF8wJwtDfLKUWrefspqx3hhqH8Wayi5BbTtzTmZZzCywu3uN45ra2eNQjRtopq",
  "key30": "3YzFXrJEgZzmmrWi4MvGiTttP2ZXy82WWZ7AoqwZguk4VY8CejztK4ps6ndJzv7AnhGy2QkSomnuPSk7D4EA1xwK",
  "key31": "4iPbigZeCTdFGBn411ZYY7dTqyp9jD8KvwoL7Dmg3JJVGJxELbtS5deB95FRigLKry8Y6BLwxZ9tgQ1Bj3C4ngPQ",
  "key32": "JqiszqTa3vey8reFYb6KMv1r7qzNmYDcF4wWWJTAA1PphbQVhRyibVWpqrbSevQQM2q2t4cNVUNicVSgJGXVZkv",
  "key33": "4fWp2uiYXUQHxouuph13AdpQpJ2Hut3e8MgC7SQtStqdnpaJ36NhxP11np6RbzxSQh2L5SemMQAj2GhcaqNCdtX7",
  "key34": "3Ag5erNFfW2NTnhX4k8WA56FtP6s77V4rfxc2VqqWHePLyUTXSnknPM4ptnmqbDbuDYbiR4xSmUgBBbS9Ex2vg8P"
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
