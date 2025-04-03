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
    "5GNXwvuqufjEyGMrRwTzHfFFyNokrqdQWKdDp8jY7CbJvFYV6otLHAtDWca49Kx33FF8sFiHEpmhuuYtugNCmueM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UszLFVh2nJ753DbFnr9B1G38gquqxaabJw3eL3jJ771GpUwk7wfFZdkv1fNN3CWnzxnEmhJYgsguRLSfmSwThPU",
  "key1": "5Wvy4nk43vttTMZhMfM73ZyC6jGeQaLBGQw2yh4iVzUkXYtMFoBwKkE96TpEroY3pDjcLY3nstwufnBmscN4sw2p",
  "key2": "5YZuipXbw74VzWPYbxUaCkHLHHsjAMg1n3nMdAqxKfMvZsvQ3FWft4UTfqrmxBcmRCt52HJz89as7qvLURtsjX6i",
  "key3": "2XAscncD2cb4JiAk2aUXdHhW4wZPXhrRMGMbkfXoe1rTtadSJ3XREmbyx599jB5Wj3dZYPuT7rKqPozPQ2s7Zhjt",
  "key4": "SQ3yzbPdARcYc9QUpUsQPQ63xpiX6UpKX1wutxTpgvCUEVLBLvKUAzJ5WVifhNS9V4zwmrhLipPyiXuDuqdZ5Qg",
  "key5": "2aVbjuN94sYnQgbmoHTpzBvBspxLYn3ywg1FztmJ6pcjLDQWNENRAKTG3ZEdrdXyLVHUXBNHJ8qe9Bbyop6Tqpvd",
  "key6": "3ALBZZsrMgyFoBJ4wMfTwuq9enptRPzf1PuEFXRzNbzuzc6ZmCsLZPXZAnsKnzFuMo8YMp6L2zUDd7pbDupBeLui",
  "key7": "3nnxMogu73X6q5a7DS6PMP17YcjiR1YCBav1fEPJxLvo9J3bZ76hBLBVits5JbVq9jD3DKwZ75PbRLMpPMzFau3W",
  "key8": "cgRmXfYCygFxSoPAF4F5BAeiKpAqBzEPUAPrqowntEmVi35YH1z5itR2GtztXhutWdCyDNq9SjK5d1CkNVq7NjH",
  "key9": "4SgaZZkgkU4aFwGCV1Pz815h3GoffdHTa8huk5Ws97HadaoFrm4nJ2eXKNgk8FisQgvuZ5u3vvk24Sq3961et4e2",
  "key10": "2kWYZfHuZ2nqBVuPCDqnN4dvAucmYsPY3AEoAhFkKE4jyijDSDH1N1mNk4emnkUP9mcNQHu8WaBBxo3zDyT8jgBz",
  "key11": "3hJoYaDPPbgicZ2W2r9VdeNxnk3WD2DZFEx3ouAsnMm8qk57moiTTvZQ2SwtBmVqUyt1t5qUKiSoxvDxPkzy7qMj",
  "key12": "cagMyFxgBgtvhAfnJVHtwVb6g73gebJS3dP7jXrkoAkGt2BizuVdom4MRFdMMg6YtLX7JDRZ4y174QBg2WLT2Hn",
  "key13": "5oMTAdcLnkHKgXRLq87T2J8mfxMmdJ9pVx7iH6hrwo4uxYWFPcdEHN3hemr7iocMLfAtKEQDXcMHoydoRpHhMxQj",
  "key14": "5QWh4wDeavtjy2TMPKXgUvd4gqY66yXRCvwq7fZPt7XGmTmcppT716krBLasTK3ibyLmAJF2Grj4zuRxQAk32Ed1",
  "key15": "22hw3jCeA82adaXvh3zWSAr6t8mDnt5NL2utue5aP3TjvvUv6gp2wyQpPo7mQCgwuPxv6WYKoFdTdZHvA2KdPcen",
  "key16": "3aowrSjtbvuUEasbwvU1p76hjBipR2RGFWuCehPc78vDk8Sy72R7XLHsGSDDY13qvZGrVMGScXjhGm7DCcgCKRGz",
  "key17": "3zATJ37ZWreNeJaQMPdgrUurD3RmkPjSkd8NhV78o4HNFv1MyNVVnTMpfXd2bjW6591qegv6s1EDDh8KtymkfBuR",
  "key18": "ZzjzxNf6tw24gyrHvde3d5aaEiX8KA5u7wd3j1kDnHwY7rTR7Qe9HdJj3ZgVBSvLVXALDRhdVmtLjWpLYVnKrLT",
  "key19": "65CroUqVpiUAH5Z5shBafTDfuAhbp88NXCWyzodTUYoGpn3Nog4vjjQB8qfhZEadipKqBdcLTwcSm86QuX3EERbj",
  "key20": "3WaaneFD3c1wPN8JJeUssHWUczmagKqMT5vacdtwCM9hbVhLGdNFPFf6AeibsknGwtYyeQqAM17VHBNbp18e7ptK",
  "key21": "N4CgEtYcVFmxN6PAbAczomjC3ziWiE5KKhSH2kjQkmuqZ8xt5s2vzBET9LUbd7wwfTVJfc7Jh1JzLfaGLMnhrDx",
  "key22": "5p6yhG5TaoGvMVNnzPPT8hu5wjqjd5pyiARvrnpt6waaUiAnne9qJjJPKDVUSG1E78yByxGzgStAeMqQQU8gNrkQ",
  "key23": "2JrWkm8ERPsEzGLU7ibRMfKAo8evTUXf2irGdpPkA6YFjnVoUUjiyRrgTKc9CPxSPiPaSTX29PUbMupb1oPXPrnE",
  "key24": "493nBJdeCbxjuEaWVWwxNqTWEzeJ87rHVbTFwe8QKFoihviBwc4wGV6weHrzzJAWbPKZs3NAt5TdBzMTDjBoqCwP",
  "key25": "3Mp9LsuMaNPe1J3tC761v8RXREFHTqiuWemSyoZKRGNWDH7aTX62ds4tjkK2f3sgYdq3151igsKgcYLFhkhniscY",
  "key26": "4Fuxo2UmQzZsAADMr68A1JxCxPdqeWFkS3kA9DgvfQW3BLSTeqJWR8UCU8onGEKsMbMybw5NgSPFgBMJfS4ZAQiD",
  "key27": "4K6yNvqDAcpwAJ3aATGmGkNbm74eb7Er5vUTBZCnXrnNz2KUf7fyKjrR8u3L16D3fsTE1m8MprQdCuBwU7qYwDUb",
  "key28": "3tkiBFBP5PSaoW3EAh2zBJhDyr9DdJXXxYwLLhrqdVuDA3oz6YKGptY6T4tkhhmwtePrBPbPmDxtrCttauR2DVcE",
  "key29": "3kyvoGdMKboYruVYa3o18jLYHeQ5mQq99iDCnHPsFTyMZoTBm6MVhVN1K299Zo7Ntnd1p1cJg5S22PGhGoaPaf1Y",
  "key30": "2KaKNsTc6GQAFvet3KpwwmZkMqrbAwdwf9qQPnupuz9xkQcGsmW6cZknvVfk9qwoxDbBeoiqc33jgTJK6F4ZddD1",
  "key31": "2cEek2a2pLvjWGh9EexZpHVbcFYBFHFXkrxjk4Sjd5iMwZoRkku8BvtJyzCDRGZdnM3BvnEYHfyDoMWwNkNqcbUx",
  "key32": "4xrMFzZ2DZgQRqju6MA51ALebMEtDBVkYzqutHj1aNTE7hVTnsNyhbRA2bhPLMYY6NQuiqkzaDYGgQu7iHxm7oEm",
  "key33": "66h7BVQ5DFr3MA9Spsui2sj7DgXqV2ktYUcLR8wKASTVpVXv3zmBmvPzASmxj9hR9PcQvzpsvoojwTb59TWoZZtM",
  "key34": "3yJHtRg5Ydb9CrvM47sJA3S1VsmNsfdKxDbDQtKnUk3RhAKHANxUDjJzhSAdvYGu2q7hdhrsk9yanVTepT4ZdoK4",
  "key35": "5RQ2uDLm4dPHTqsdjTDWmguw85WwSq1UtNLd9g2LJgHMQkK6jsRDZsWv9A9PuQ6NLHyAtjQL7prV2D6AshmzuyB5",
  "key36": "2RDPBbqPdAzFQQBKLkDrSzJo2wDnnVSZxvGSXGrDQcMxDwpouxArjEir7RJ4zkWZyspffiyuwvKFaBVoR2Yv1mey",
  "key37": "5heiAPdNki7Bmm9SsXFz67cfaFpbyj8XQt8SPXrQGfcdqrNR4uUdAPkME616sNt6xwny2bWebkDAjSpfrMn2jWFS",
  "key38": "49uDTQp1FGuTnA9jXMHAFmNuJ5ky7xRbKRpqLfRXZ4sg2GjbLDUaTENvRZpkuAichvXEYXSNVukBV74Y8DaVwAe6",
  "key39": "FrcYoJL7U5mfsoB7peRhgKv5Q3oTm4EUmYjzD5UrW28QrWDMF2qDLhExXCMGdQJw6UHSQGrciLTYepH2qruYqxN",
  "key40": "3mWNWbY1AuSGDRcFPLnGw8WK5dR24MfGW5oBGsRYMNQxJcQvDWU6BFkygbrqwesoXWbY6C4KEmf5fXBwBjE1HpJg",
  "key41": "4NaKejN16Q83DVPfShSRFjV8PxtDxpwLg8MpXntdJ8t88tnEKMmRiuWMXatK49RGa6nKQyx6AQpUR6CC96hCs48D",
  "key42": "PRf19iiS4fjALBJGVeT8NUYYR7YcVocN5iP9bVJpitP2W56HUNbhJyTDapUgfaFFPLkrrLJuNuJ1a94H4NxGtjL",
  "key43": "3FHMftbEJhzq6rGYQysJ9LACYa8C2TyuoPSpwTTcLaVg7LusEpzonbDFCG4pxL3aNDTUNRqhbZPx2AfHoefcX5GD",
  "key44": "4rgPRGtEzyDGigXaD5AQqwoAVnCtY9C8kPLLqrWjTKj4Y1Befe4TLSuk3bDmKKeNZzCubL98T4BWAwV9axYDgUGM",
  "key45": "g7Py4B5eNFJeAZKNF7BBB4pj9HvxoFVcePnjSNqnUNgWg6Fz4Lq8vrWPmjecFLrCSvQvcR2Jjtz1GZ11mfp4p61",
  "key46": "NwUKtW97mcyfMdWwWKehEguLhZ3NhGRAmz1poCxhq1dA4Hi51bqy6U2Mnw5w2JMtmvikQ8TLSDwQzWEicNgxhB8",
  "key47": "3QzwUqvTNi75vpNP2V4gkmd23o86LgZojAwRMtuMKmFF5Mrk6zZyCQYxt1XYeoNuEXJPWLpD2B67JSdvMj713MxK"
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
