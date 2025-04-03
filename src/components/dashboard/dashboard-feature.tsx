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
    "3AgDsWBQQHzcLNsjz6dExpY2JWjLe8LSYy3s2q5pR1FS72iwjiX6eEZv4ghXmQ2msFyybz5fVezxvydtKWJTxT2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pncUSrwJf67MAcEgrjG8JoNBSkoyAaG6DDhPt26sxA9YMZJr5T9X3xkzyz2EVvd2DNt37QyxsnCCevhW6W13M8T",
  "key1": "3Xddb6JG4YNdSZSZGK2qd7EhVk9TTjNw2XmCkVPDaamDoBdxBMgW3c4JLVpf24PmLAC2KqkPEV8aYmwXURvj5CXB",
  "key2": "9SfKceedTHgxUduydGTezJW6s4nQtGWLAxQPbSfAiM6pieP3XXjiQrBJfozHjJwinDU5H7jXh78TfytLdunBg4e",
  "key3": "4iBsZf5cYKubz3gvMekyQLbhPYTbD8YvVjsuFuwyzmsQr91nogUetHPsHNS2hhMGubDPTaBrgpgULcf5rRfzbobJ",
  "key4": "53vFS4XiTZSJbDWedT11ktGYkW8nnSJyRDCRoseD88NDe3MYvG8u5V4QwP71tGgh4rZXpQjrMgJRyybfLvKA8bcu",
  "key5": "svGLRffFMNbJvWsS1XgGNvYMGNDVh2ovttkKNZ36viczyZ8RLs47TusGULN2sEUSNacupAQqhhEFQeBXJu1dDHB",
  "key6": "2RWzBn7pRECR3gmq9K4juoRFPyDmDevhHGbg99S9WSz3gA533EznTrwixKXxxippuEEg8ob1ByBwHc3kZ3jwc5kN",
  "key7": "2Tm5vh6ZjNNawNXpgk5Zr4EQUABi5vop7ULkhj6iraDF3Tuqu4KKQyADjtnUihPduyqfRiB7oev5HM9qc4vPKEGA",
  "key8": "3cbZZZp6L3gezi4fFh17kUdwHMxByACuvFBSuiBHfsmsVecEgMHombbRjrzc1sxF7yH7gmFzZTMa88pyKEofKiaR",
  "key9": "hyB716facFC6XKtwiUD1yvS7a92GzZfqZrqa6CHDHV3zqENaGGT6EWyWM2RgK9RBfdz31g5VoAVuH4va83r59QZ",
  "key10": "5a8cebiB1uwzhuKd1LPSd5Rfzu2cn5kZ43nCS5dYS2KiD3ga859ohtqPW8kfS92kmS2W3EumxgDTzQY32rbMT3MW",
  "key11": "5iAqjmo4Eyh8sHatzEmuLE1zye1TK1vdkVaFCL3ngQwLDntWAtJECRsYkb1SpS9uSqtXtFZc4tWyaSykTEb4j1x4",
  "key12": "5Y9faMUUzFPsq7QGfySPyyyehrBn8mhWuSz8AehUqvQ5JQsBDHr8NpeHVAqbKtyVCQ5uFM2pFxMXFC63Cmy6iJ7n",
  "key13": "4RKM5vEcH7AapJaEBCc6fcVsR4jzfUvpAGLHK5a4zYUFm4tMcTaXoTbMqGXCuQbC4sge7zdJAhRy9dXxJ9fdDjVq",
  "key14": "2YiDBfWvKzssKQYTskvYJrNaK8ZGtgYKSXJeBzf1PMbRmhKx4q3V3Q49BbWYCs5dq632Ptk4PceSkFvRUX6wtMHf",
  "key15": "5EZYJH76d4cQYj54Jex4oQYgwnNf34harkd7fLKUNo3os2BAAYGBiQWZ6yHVJfCGqGdsvxJfoa91UEH14Rn1Bo2B",
  "key16": "5dEoruBHTfsdPpFFsmHMVbinbCkzkmyVM2fd4DXn1VCCUigLyRLkbagu7gnf15p7KddUXCcE2dqzPjw4nWzFMDBT",
  "key17": "3Qa4rAoRWohL9Wg1rWAmaDJCTXnGjRxHvzJzQTSjqwjLZrg3CUPHKE6GucCBt3X8evVuJbT4C6ekaG5zn8pVKU8u",
  "key18": "SnTdgwfpHKzqtK33rbyjMhkdSs8FhEN3mUvnYU6ky34vHVh4ceiP9S1UWH2rMv6W1kf7sfsy26CpWX19fuH2fEH",
  "key19": "QZJWtKcbKZ6HAfVdi1p5Y9e9ysjuZZxctrCwYXnUW2g5XQ5gvHLZKoHFTEn85bA4A5nZKtA2oWFPztZAcaGS2S4",
  "key20": "2xRc58BX2EtdayacjxyXYbcqELzy4PnFUjkoFG6Zt8rwNSHirH9NbnH7RqLZo1Wqx6tAiRDhr3uMq9MSZqfoht5S",
  "key21": "4tZACkk2foF5eJADybtuoV5fbZej9QNM94JxMbyj9yEYLgofRuPtJkK6QSWvdiqRRiUFQ4cFKPNEMJVA3PvS39hU",
  "key22": "2NaC31pxbxQwKGnHqcHwmsL38UcbNrPYb5Jsn64VdBehm8HbWxoWjj6Sq5ebQD8mMbNBS3nq1wHJDfozPEZsKjan",
  "key23": "5PPXqJyeegfHFAhu5DxaeZWrSeQZugknVuT8FgAk3wxsfLWAPyeha1tLePX2yKAFXoAe7Y5AG9bfjCxoWbPBnbaJ",
  "key24": "sbmnUyVubsikR1xtPvHSMUjsXELcL3NLQYDipyYkmSCDAT3qjYoP4H8iHQiznYCkkrhMTWhybcNmrUVc6PU9HvV",
  "key25": "ToE4WG36XKqyMTmkFnmsFrdwGMirzCwJNhhSuAYd5c9DTZU3TbdSssvrf5QkbJe4cgBfbzaR7owFpX6dtbFVdvu",
  "key26": "3reKsHK4D7rH98huUWEM2rvZ2ukb7t1kYszJCiZh2qR7X7UAdcPywNvRmUoUnuU7YFKs2rx3AmrGLRBtNqGDkPyv",
  "key27": "5tMaTx4jt68rXzhv7E4WVFrqqveeUBSNAdKApSQXJ3WqVUxuj2hsNJ9nxJ8wi1kTr6zgHU2PAuxixgamcJQvw2gf",
  "key28": "Fwt7mYBqdZRE9Mq4s8uYwkB35TR5bXybGMjp7TgNo5JWmAGuX4gBYrFEEkzx2EuhsQpXQiDtwsBJ9jz8ihSmsEV",
  "key29": "5Xkmk6udjQPSAxizFTVuT8emU5fin1idwmxgNnLUockxtY6YgLNqrbiJ8TBuwkW6twCZttdYnyYFxxM5zLuLuH8y",
  "key30": "4qvxYwDMfroWuhgWiCoLH1HZYkho8oVv5paEfduNwpkMCp4fqxp1KudTgRbYFG3ridcUofhVjoZjZDksuhLVJWx5",
  "key31": "36WAoUXQaLxAsYYcWuSiDqi5JvoWhPGRNX9p3QyRtWgrV3zWrfgBvZsqUXX8RAGGgNvEd2FJXe5JywSZaV8Ba67r",
  "key32": "2CzLmrzeSfLSizoGGSRJV5GhHhJz6YubHAEZgoYmRVwTUhUYySpYmjPhBKqbNTj465Kwue7VHsnoKQxAe3Sm31z4",
  "key33": "4KLg3F8VfMMj7EMkPRb3BRhMU2ySVUGdPV9QVtqAmf5SfcssRkbe8Yec6FHD1kdZiYK6SRHyEHJGiCxZiQaqh9FS",
  "key34": "3oQ6whj898nRcFPmJAiaqqQE5HYHZHJx5oUEaeCwpuDnss3psXbfQgfhxekjhn6WoGWcxgsPBtscygSnHEZdh8rL",
  "key35": "67ZwMmWRqfkWdZhPUmzrW2ZrYQncPy6pdf3pam2rJHUGvyd9ALdoFknMfsM42xK3sMyrz9cw5V1KFH2QRQPzq4Jj",
  "key36": "49HwSZiJ7WM27Nv1z6n4PbEjjEQRpLNn5vWvsPGgYqx3cyVN5VXarm51p12qBN26NuPrYFCPKh7dJWcy76Hj1B7a",
  "key37": "JyEy6jLpLZFHmcnfa1r2LRtYQnzziXUXcQQwetKuFt5yxovywG61p4fUfNDbCvBwKec1nAwk7SmmNyjv3sEa2AH",
  "key38": "2QkSpTnn6GJZn1TUhPNiN5bESzGXBATVAfZgyKcGJddNWEiBfpWJYYXgQ6txFiBbyC1SzPyEvXL1iVhnPFWNYpU7",
  "key39": "4kUfKkmyrtpudsK5LUPapT35McgoEwhkyMPXnaNr52PtYQ77bRi94TC19xfRezMvhv5eyJDDrHJutDseyENJ9CEk",
  "key40": "5fNdCZsH4ATfP5zpA1X4yVwQq1jY9cuBMUNKHJBrSMDfdsjZeGsw8JuJetK9zbivnkTFW6ZebdrzT6NRQb7YaHwA",
  "key41": "2DVK9mTCsGBfKgBLsJRSwgSn9Z4TufqhCoQ8hMHhoyaBsbzSzwVHi7jgRdQzzLFDco2xrERqfkgS89WCjJTKhWv9",
  "key42": "4Fpu2HGRDfTFMFMhBquUjBMAdWQmrmd72vWR1efZJKWx3KkPejye7K8yUa2UiMNtU67NJb7Un6qBWaYREkfUVzXb",
  "key43": "5i95obE48up9tJoMBkGFtKA7W6a4RW6rYGdrrgYEFCdE9Edu6DK6j5J8Zr6bG9GkdcMtzrjtTS56a6S4DaW8czYe",
  "key44": "VqKirJy7QHTYAFJq6zfyhdjAaeUvSapHvsB525qUDNnZT7uKVUU21GkahbbDY8iW54zfmtSvB7ZJBvsBbnqcbiR",
  "key45": "vpvUgyWS6QnTcjQ9ztpWQuqf9UBX5M75nCP9HcnD4ngiWZRujWPtXYUMbEiiAq4viv3eV5AnCTEfHX29Gmt7WkQ",
  "key46": "8gUqcogrF5CDuSEf87DZ2cuixLJr2vSBg4ByEWWuHMiZZrkNxt6Cvup2N5kTpLRWCUuwf7oGtc2TTbjYUfeMFJ1"
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
