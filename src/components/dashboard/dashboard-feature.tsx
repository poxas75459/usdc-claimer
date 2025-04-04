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
    "47PqDZ6ypS64dWoZBAXQhM3F9bhuJPntov8Nsh7gvwkVTPEq85xMMDnd3QK26ycr7XZzMkLSzYS5bL67DKwC5ecT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CD3r9GKGiUjNHNv5H9LDzCGEAn67BABBM84wXQeV6gKmj51qfjaGfk5qLZf6MgA7pgCXFoaFruvS3GzxCiJ49n4",
  "key1": "2SzrfgxaExHHWCcmijNZJRsGZpy9prqLGkG2xiT7w8QhS4NeM44YUoXmRGK8AuFD3fopPdCSe1X6xT6XoXA6YZVh",
  "key2": "8ND7qDKNPG7LskBVJurbkFuvuAUgqQTbW5H8fD2jHHGxfTDqGBBntwpXbDT4i1sCdtCCs1h9n9DWVPbPaFHR4kJ",
  "key3": "CjXTf84VAVYQ6KtJQzbhv7JBYStKaP43Ft6dZrknFbhfRBwaEbMd2MZqx2piPTYgvr5rfCz3ENYeoQeqj24veQi",
  "key4": "BKtJWA2Cgy5ocz5hjEarcAKgcyjCW2g6YiB31tDmsEH29Kaw69hiyVwfzFzXLfMgFTQruuB7BzJVLn7oTo8XrCF",
  "key5": "5gzdQPSrQ6Y99JXneQfJPBSK23SMgBRGRSP3PmiNAoSQyxPrX3K1maDEvfffNjhGgtQ7qHk9STgKvk43hrxUhbiZ",
  "key6": "3hzNRLYevhJYGHhWP5ivMVxAbksccqXPCmiHTTCCvFmmdBjM1huxYxY8oC5QGM1BxGbFJnYw7rnVEjXNHuPBbUBA",
  "key7": "5hzat3DYnZs3bgrgrUQYJtRwpLeJUhKDqHnpFXToqoqfBVo1EYvZ7efUS9YBS4brsL2cMLA52j6kNPyDoUNeiPgT",
  "key8": "3WsMTrsTNg8XNn3vWL3MMLyLC3UgC6ts3jwsibiXvsHugc5pVjkMPTBc4R7nzDdYMpUnms1NqDwaUbtbxgvv2FqC",
  "key9": "392TnzUqVQ8eEKeDEVjwRwNCkwQRvTS7ctv82UQfsdCd3yUdm5M6tjRUKjW6f7DmBuM8vdn1UARM9fAgvMTTUeq6",
  "key10": "FknF2Lazour8CpCfuLmWWtL7ZtN7iZ4wfMS4dwrnuTCcKRAqnNNcPERPFD699Uj5Z7WVexXzy9SY5XhetwkETi4",
  "key11": "3N34ehDfJp1uCd7vj49CRUVcPzMVM9PpGVtDtN74tW7Ytf16hiq9VTxvff9xFTNNsfAqZmb5keSrQE7XLjc2sUDn",
  "key12": "54sBicqUeHrYwdvGcai1QtU4p48Au4F1NQdXQFqPwVXsqYMZRXipRCnCcebzfsRTJShBoWH2zARjwPkcL8Ay7zZe",
  "key13": "3UiDDc4zEbV3qzcJWp8RRNfXeY4RgvnuyZYWjXk3Tqd9YzXrMuL3hoPMTqaFPxvfVh2XaVTByL8Wg9wswMgisXTo",
  "key14": "2UzYbiXYkUHhqARM66ZQZWBdgyCQk7m38GaWEM4DnzshUSMcv4GrVpBcCSME1jTHpGdpKDjyQE1GxogVSV2yWrxM",
  "key15": "4GKktYbawUiZNCMYYJo2WjwJMfuVvjdLGAaJjyERA7QgUXJijamm1FSBNsgvWdQBJsQkwYLhcn7BzbCTdLB3RJz1",
  "key16": "5evqaDN2sKDNnhBijwfSdQAP9zBD9Mvmon5JJERqypECbYJXmGnpQpYmJ2UxXVzgxMncfSE2zzboWCRxWDX4ibJx",
  "key17": "2tbNzdthjBF6nMK1mut7gCuyfPHqPJTyiL2TJzj4YRAKqFEDV8TFMjb2GejqiiuVBJBxHM2birbhKFtfrAqQ8ieY",
  "key18": "5XnEw741iSTTVxCfKA1jepXWLrETiVYvoX5WpTC4ZaPENtVq2A7nRstM9hkw4Mg3ofwN7KE3vMGp4vBqxNeeKttB",
  "key19": "49jWmthJFUBESpFdLxcK4QveoTGepCqSkCmaEpQsBGVDodQwymFx9Gbr5Yj2BBB9MARfjUn3WaXR8s6nWQACATfY",
  "key20": "31uQTopAVbczTQRv93ZnkkE7LSy25jEsVT4HwLvR9eaw8UfnN6TbJNyLqEHXGZ1YaaENyRvLR23YXXdiULWLZ4yA",
  "key21": "2nbbupJccf83TEptZ1mpc5kwxzZEkw8iUhk2vEu3ztyMYtgARxsca3HG56ciyCjJSuWGYbMCUQ6BToQBd8MihakV",
  "key22": "3SiZG3LiqqinuTnDYjfyMq5CZf5C57PHQWBqZs8pUWSNx9YJaUdew9mrPfFnoiuovJyjsRT1LLHEXXp5RePToEVs",
  "key23": "223B1FZjGD2BRQBEZYGyzZUDMD5vjUWq5Y33dUwCndvb1tJLcdoAwccofmcpXDHVtQKmNCXY3wAfJ3rQwYqRspfS",
  "key24": "uCGV2GUNZ1uxKwKZifJkfRY7JseirNZJWfy4WHmcVTCY3eRNLKHcwB7ErurhVgFk253RgPao6uPphkfeKpRev2N",
  "key25": "25SNyvPQiPobJRdo7QgFboxpg3iz4ii1JNTWadDFVZRQcrHcWra3iX2TKTDgSnASBSgTtrQuLZR7ySDQhvFXFyrZ",
  "key26": "3Bs8KbEbCFnSuKXDMirgbGbPZsnqaKGZtD1SvJ8HwnWdvVC6vqakceNe7Ee6vTr17LmqFbr8mQmAHgr2dsmGwyBu",
  "key27": "35yBYN46jEzb6oV3VJRHC9mybX1urHofMjZ7eotarHMVK1NugEkipgnqjeHTE4Yk5UXWv5q365X4ZB749EKnfYHN",
  "key28": "3gtBtKwMshShAYzwcPKVEov1FhyS5uVB4xgaViQE8eXgRR6gARf2PKvbVkQucEVaLeiCqzg5H6b5PfGSeMgzkix6",
  "key29": "2q2j63VD4KRGrBPCGfWtTCDMFxoKsnXbxvXk1zsrqRLrvHdhNLZogPWGbtAs6a6MjGgRNJuq6ccg1RikjagTKVRq",
  "key30": "3o25epACHULXpmzVHwfe6ERovMXqvta7mkvCyAQyaduEKdRZ6XPXxALtSjZgQ1eMqAG7Jdexd1iToKkyyfHRo64Y",
  "key31": "9ugRuhGmCFZupQyx1qd4JydMVKY7c44pAqDcTMrRp2rekw3zBV8N1mQ8ssAWHw7DJUhd4QfZR5Hmpgwe1ePLakE",
  "key32": "54R7cgciZcRd1t2MNChEqVivr5x3972iVGQc1Fk2gku6zqmzFh5ogRumFWYBLKW6p4bHq7nXsHGySzxtZTX8vpUp",
  "key33": "4SKEsUCnerUfKF7ae2cWkb9zLcd7UE9Fvo6KKkAm5682ZLVxbKqFMCUHfNPu5JC6zUvEKCAGpouJL6seheqBzps7",
  "key34": "212ki8cX8D9LBhvkkEmzk4nF6YRNrWDUiXaPdCAT4zSc7qMZktxnwU8cE4aqmbWMYCMhNJHUAqKcuhXXsNAGpi79"
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
