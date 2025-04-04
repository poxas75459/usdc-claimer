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
    "e7g2we83brQAmxuFrBHX5oLTawFNgq4R5CtR4Cjjb3YwuMgC6spcg7tpfafa7jmYKtc8uZqtTrw6YsBou1P6fSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wVNK2zaRgbxrzPrgvE56mpX8YaUguNqeRCRnVExsceTs9WLPU6a9YxCU4jgn8GQR74mapTep8HUhFGoUa6LK6bt",
  "key1": "4s5Bdfrm7EZVGmZwAAhTsysGZj8ju2a7HTaZf5HWns88RDhqPxdbTHGNm95wXMqqBJwgGFDsaYQivbBT64GrpZrH",
  "key2": "35FrB1BmiXQBP5o39PJW8tZfrRnEXUQ5DdACcQBPsW5BbEyesisZnYMQqTY1RJCqrX1yjd3vZ8KttiQaFcq2UXuE",
  "key3": "mQZmsb7eJwQ4b1YRrCHQanpJ1JssGajksxWDmVaJ9q3Y7f9VjLqsPWKk4s7pu8imkxXsuYSDHjdsRt53Ghfi3NZ",
  "key4": "NhsoDteVLHKnfCJac7xHv5nxvTBgsRh7SmEdZ4AuHyxspL8Pm2YXCqw14bta3rQcRcG3viZHMJH1enjWQYHLZ4k",
  "key5": "Qz1bHT7w2WrVEr9ZFFzeUfiWd9cDNUSWgnM9dhHtNeKFj5HwgezkPLBHudQ1wDxyEaXZZFv4tUjVgeo7qX6rRsD",
  "key6": "8YX3y3ropN5uy1TMm8XhST3CCJNSXYHYF3r6ad67mnU3cCjKD6nAKuRUJZqDB4ZFreRSi8vY5tmJxQWn1BnP2gm",
  "key7": "3kjr8jisAsUVAe8ZVY5udHaSFPinS4NPeWM7Zvf1hQxjbfDEWw5WQ7xLGv7E2PNSPnRf5StgySqTw5j3SZewVVSA",
  "key8": "5n7MjbvPPS4k9knEGsFgsizsV7KU94rGPFs5F2VTNvfeQJJAezWJc1eREJew8z28VUhdfeACeAeZq6W5KPyvZ6md",
  "key9": "51P8abZ52SVkrkVEj5nKMvLZ9K9dHhowM8wEPqktZiYddS4qStpJXLUekCgQa1etjh8KjhP4FuUNUXaQGW1SDNzJ",
  "key10": "2yiarSC2QJz1QjF5sQtbn9RR9xEiSzYXDiFPf3W5gHHXDPhiJ2yHUCNfJExNugbtNZgppdJJyr1nLLManijGfrh1",
  "key11": "5zFiJxgz1gvhQb7ZFSwwKbkFSUQRFcoiE6eZENbGro7CqfkkCCiJ1pn3uUUZZLQFXZrkCBiNW8XHoUCTB77pWdPx",
  "key12": "2fPBfkxC6H6a2C2YuE7wChnC8NhMFfZyTANABdDoH8XR9d2oGVoN3ZUniVB6pB3B18byfC2zfZsy3yrx2LJfC4ko",
  "key13": "sKwgvtfSYZoK72nPqnv3pkUn8Z9wbC7TyD3dWKhn9WZHG2VN1HccajajaJ1oNzT5NRZP7n72LcnZTPzWf1YCaWK",
  "key14": "5cniqKNmYp2HgLnHiH6MCjM52UorMittGjpN3fPPuoUMStaaS7mTi4yX3nN4zALcaEUKKfnmk2KgJife43qYEF9K",
  "key15": "J11DWnc4E2iepdAt4uM1atPCjoe61gUHouYuSXc911EwKUSG6ivHz7Hvy27fd3RTTYyzDWZq1wpGo4aNudBzYFP",
  "key16": "53QFTmLpZX2XNRjF67RqptQ55frRGtZmwvuonKw6X4yqjSAL9AcWs1yWh9CXrwozwPjJ1Y9Cbd1E5AVPotkEsKKF",
  "key17": "2Wd6GUKqENvaAyznyM295x5wD2YdED3UzQLYngXw41bNTjEubRk2A16shsKpHUybTRtoBDrByR2w5n8mrBkaE2BR",
  "key18": "5JYPC2eRohw51A5DUQD6ed9E19TxjUmjDRcUTeoWJzFEVXWfaYdnPQvZ174LSzaJDcX4PfLddq6xtE6ypyJ5ebVz",
  "key19": "3cTvezimG8BmzXuQUa4ewgq1eyPPbuSqdvc1jyJhaip6jAZLrcktbrDTRq4nSRRr8UwN36WE217NYUMC3KtHSjwC",
  "key20": "5acSeD72oBjgVfHqssVerKzoQJmSksYQ2xCArZkpgcNbr4hjaxjuNXTZESECAuAFbLoHRzoEvy5Nwpm6o2uFGpjP",
  "key21": "67Hi9csLQAQbUMtbipyFrExUtmv28HcsShUkaLqAqL2Wni4bemirwxpNyJgKq7n3FwBKFpABugF8JsWUcd8nwW3R",
  "key22": "3v7uYXn4MRBJHiBKL6gRqFBE1Aw8rSBJw1Sw8u7jjYjBsAbumWLqUGbsmjgzxjVG8yx3Lyk1mcHnvgYQy4fkAFYw",
  "key23": "38TguMNfgDpDNc85vXgCuutXwZRs7CpM86y2y7Qxnd9WPqrfxwotzCsWTaVf55eyT4KcRUkmLkeLherdVLEnWbmU",
  "key24": "4eorNgxG644reVPm5W2K9Lwh4Vz6ynuffvte7MXcpHCmFH25XgbvLm54Hm1Cvao89WNPiUbVRUq6pFFPA4ovY73Z",
  "key25": "S8NbWAMftyUjps2xNHZWAiXD7zU1A6CwrDxtwYF9GMSwuY8uZFhmowBUm9d9wb8gCnwNqY2PRLuDU48613iKiA6",
  "key26": "2VRi7TmuKQRDpcZaa8TdATSQdE9cnfexM8W9J3e8ZA6cMMEvYeVkciy1pJAquZn8p9g28tT9dJM2tW5wWEgGrALP",
  "key27": "4GzJds85UYG639QpGP3JD3oM7WEdRgJndtPzEqyJVCZUcXvrKCh2U3kkpXwg5uiN8npEexHXDajg2QFrmuzwokS5",
  "key28": "JyFh8qTFYft4Xv1brtdBreeUpLSX79pTwurAEbKRtZMD6498DadAua7xHhFnhskw2m2M3QwCdUEqo6RQb4jexLJ",
  "key29": "5UKeZibyGdYSaZNp2U9a4bexr3eqHE5x97rzJa2bTgRW12zUEkvacKseCQUt7B6d5en9VQZVAcikKdYNiPHWbXdN",
  "key30": "2iAqtNeM88AVtirg2kRthsNjLSkFGkLVvwJwMziafMkenaGcRvm6uiiNz6DhNPuZqKQocQzz8j8agQZyxh3ip8xa",
  "key31": "2SfHRtN6adw4FmyXSKCfQhFZbUt6jP7JeVDd9FdVjN6BEQtm2atbQeSeQoYPGQcyeVvu4ECDa58oZJ9uYVSuq6rf",
  "key32": "2FZZyVk7bAa84eF2kM8nj6fcs4cyDCHHNswrnAySVegtGDZN963oHKbCMBTn2UMAwG2ygFzPpbM3jWVoBNStHDBG",
  "key33": "5j279qKc1TjSQawxjP9jgrtBLUQm8wseL33ZVyaGo4nUw89jQj3zmzFfFD9eQLeB4gEctwSfnBPeNfthz2tsLRne",
  "key34": "4xgUczFtuJX5rkFT12mL5ewWRbEGKZwmuXd91YvDNJ3hMd8jSBCL1dh2j82bx7CRumiZqmStnQ56pyV5ADRBwnfW",
  "key35": "5sFA9YyUWfVWxJtgFsVyKkUjNSxzb3ifEY3hrfuRpn4tcswNcoM9kyuqgRvkSMQfgNLhUY3ecaG1bUV2giXaBEQ3",
  "key36": "4AvpTkLULRboWxctUge82mr1KRJHoMZyQH98AdYgTPMfBLPNCe5owGi2RdKpwULMb7CLtZvQwk19NrZTLups92TK",
  "key37": "3PZZtA7e5Q3CWcZamY9P7R9J7xYEJo9mE3PLfgdMP9i4y6wfbWw5zwKkfW9o5bNsUzhEM5AjtWWJPsv6LGRi7gdT",
  "key38": "3mPvgnmauSZiAYfvZEk7cRg3jTLra2Pd1AQ71yHgQJSJxqYNJ37Nhw5GzDqb4ksykTkc1imfAC2m7uwtmo8QNNFV",
  "key39": "5MUGyB1zBYCxhCMSsso2UbCGvu3bT1JNyvCPcWTZQVQpauX4FzshbEZR2fkYvwDfcPverQoCtNJo9uZZfh1cse8Q"
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
