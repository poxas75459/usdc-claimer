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
    "5tVEytqprsU1qumJKKjEaKhgtVGdWoKtRvwnxXBgG7jpnBS2dyc98tVXvVLCEvE1fhWxdVBZMuHEgx8niPiDtHx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hcud4H1WJoV5xTTMNgHCZbn4zrKoZ9aWwPXhTuJKqFFYqPgXfDBGqagGoKa5edQ7yjnaBU7gVHM5wqokFhHbZof",
  "key1": "fg1xCroWMUEPoSnEyfS6EaAhe1hbFwMtKcYe9GsZcb1uQrdwGP636KrbyGtaq5iEyuCbZotmLYicDJg3sxogtSn",
  "key2": "4TAqnHdxYRjq8RVvgrXaYFxRzSHZ7foKX6mcFxR5wH9aYgkwwezkCZhKrewxQSLArdYb4Ne78mzKwhNbMebJddaY",
  "key3": "5DrPpZbp6UZsfrizvgGhK769qpjgRT4jB7yTdWMs9ap3b8PpHFEtTv8m4aU43GosiJ9oZJYveMGeDHVFZo18oy27",
  "key4": "2rZbtq49kidGgUXrPD9FFDahM9nzfwy7zMLB5kRUC9uVJvmbhN4Ggv5ts4fqFm892ytayWLbyo7bJRcCvAiXdmCi",
  "key5": "48DYBauqXaZGWRdVmxjKo2SJPCa1Rm23iZiPbmB7j3hbgp3aksGP4D4PW4XVwE1uTpAMuK2byw2x2mDetZB13Biw",
  "key6": "4yt4hLaDEaWJxb2hZZQu2jPTkC1Lz3EkfE5yPBQXPrDRGzcAJPPJmfCi4Qtc61L4sqh4YDtDGaFweP1rfxFk67ky",
  "key7": "tB9XyA5FZ6s34Ts1bnPq3Tpq1iRtznaakJZqGHGF6ycvUeYmBJBLXXMoMjvULBgPuswwGFcD4NjprBSQdGrRkrp",
  "key8": "36jKb7cAVSQtKPHDyDpUHofAttJpsSJnkDRgqNVtpwYTigBFiXW9685VqtnRBC5vfLUViDoWaM31jNpDJRrULEDi",
  "key9": "5dgNKSqZgXxUuR4svumChvnQfKPiheb3aFU7fzb9cMzkA8io85K3x6BAt1jnwudyHS1CpqKQxLEAmKsZCaV6CGbC",
  "key10": "4Lr88VTxPsT56dzFHTJJzSmeGbm7Ez1wJuhv3JHfUYXzgTTuppnyi256uD6YN245D1J2JXATUrRJbqeaqLB22nbM",
  "key11": "4AfdduVPpnKToqA15VSciMaKG38xDhwptBaTvVZdSTtfRDkdfgedfe2bPwfDD5uLGq5wuoEA1KwtirLKaRnK8jbs",
  "key12": "2K5gNjscDBSmjBkVRdajq23Cxg9yEgT3uJJBefinDQeM93FHsqSMvkyQ9p6S3KSv1aYdgEnqdSr3kACYouHFTJgz",
  "key13": "XLJiQUFXrXdxNe9HxUR9fhsFMc2aUi6kgdFj2cL7d6f2DtTHCcWwJaGTvHSmzAsHifzdT24KQkY9YPcXkuWmcn5",
  "key14": "7GVqKGGcPLbRGii9tnbrDwGM8cGjXYt38smxZnGfk91uX5tWYDGLwwYw3oRQnsDE4BjbtjdexTKoLJHzaYes23i",
  "key15": "Ed6Vx8Pn2RBLEMXYzD2tGKCNU5FuyryD2WddjXQrYwQ6ciyz2WDG2F86mGsvhh1rdbbruvFVjKUzrs6VotBBLV1",
  "key16": "3uw8ED5F5wWLcSoGjVKyrTqi4qFBfV6JcNhE815BK4vHdHFQPNnoFfY1zLVR42x6BmN664bEzRos6tM1pAzhPX9d",
  "key17": "3CVSMjTxB3UecUzQycPJuvj93H9ZBkaXp1D3XnQfw4Ciy4ZoL69EDcJ12r3zVFNTbgkiCBUvwHw5iYdLc1BeMhQy",
  "key18": "47kcT9bZZn4NTXrMwSFn2jMPY3rCTyQenYenh18QJ4eLPvjv3VJPnZQp6NprwqvxnpUFG9kKP3GEPziG17a6AGvW",
  "key19": "314QgAKeGrrWeNtg69pi9yRvFCqEJkaNjWTQ2twLxzecqSYmsQPJT5S6TAJ471FgHfDs499Jx4f1Lc7TcxmqzFcB",
  "key20": "39uaVwJS7jZa1Knp1YVjo3gEptfG8rC3acoasD9MHqvCd3Yf1KLwfe8BKo8hJq9rB1FWg92mAzwkpFcyDWh8WKwq",
  "key21": "2zX71bDa7cc1A8gKTUR7tgmTs9Dq4E8u5qcrTPgVNZNMLMN59E3gNVBd5KynSYQdurgKk1xjS63eMPY7pkGNB2s9",
  "key22": "3pRtzBzpUtRPChN7h8GQzjAaciWyFLCL1TECzHADgVtE5KS9YsCneoJMHTfbeXsPWU8qEKKsBEiGE18YjTUk7gJM",
  "key23": "65xTegWh4vXKbJpfH2PrNeEdBuZK2jUSn2L3C4VX6MgpEGG27yJaUjydBa5jRraegcmEEqcncCt2B7BPEGA2p3Pe",
  "key24": "4BoZSjWd434cpfhnC7xigGR8zGHohdkvnkTJD5f8qy4NXfG2A7ZncgJo1J3bLjEFVQUappC9CSb59u4sVPyj3vRi",
  "key25": "5E2KTn3dQ2USsQfnB2yA3tRDeVaD4qimwCMbLBJ5iAZ8JXF9gAVVWFjsPnbd77bDLmX32oMeMaguo5jpvWh77u8n",
  "key26": "34x4MirCXphftu8rJyfyzfxFW9TpDz9n5QPNvXahoorq1538HQUd97qDCQzEWLqf6WMuZiQphLDWL4ffpumh8md8",
  "key27": "GRehMrJWd2ms4eSBqqUWjW7RnTZCJyYrX6ykWZkpCwXK99yn1jxYAPbVvnofjmm8gZ3r3ZZ4MCPL7auS3x1ymRX",
  "key28": "8kfubRoBjsUD3SzFrFRTRLvqCHUnuUNRA8JwKJkMySYcy8nV6QmPwuZc6HochLy5StBwnaxtk8JjKY8P6xAMq9M",
  "key29": "3412vZ3B8y6cbv2o4DeDq2THFbuy2M8ib5xWLRAEMpD4GqksmDxNiprDT2fq4qp1UV2mj7ioGWBzkw1x3fZXnuaX",
  "key30": "LUupLr3gTiV6o4jF2moUbjZx5PWQmauP5sTNg7kE4pLFkJHGPBjCkw7a7wJLWYt6fVN4su6ssawwDmpqiSpqtVQ",
  "key31": "CmFZ8ZMNBjSM6iJjLGsLvtEenCQhvcDBwD9f7y9XMn2FjZGjddrTQqiYZXMnBcRXvC5N2qrvKJvynjG91yB6Mcc",
  "key32": "4Lbb5P7YXcEADAvi1uDxgQMoqvbHfzbN4Ai9DAShgQA8xvycb969oXsp2qfaoF3NJnr7xTWBzHHv4PrMMyzMa6hn",
  "key33": "4PUAQu5YybCy6bLEfLUJx7KdMHJXP9jNFaQFcEKggacmvjCXXkS3RoFMkoBtn2B4nvc1rax2jmgZLG3qH18gRHJV",
  "key34": "5yQ6kV31FZt91iZFL57nFu3LLhNvhp5tkHgtnHAdmpDzv3vpVDQMZMSNkZ1dSpFbFFCRVdceq6vF2zaDe5fLtYX3",
  "key35": "4K5L1gL88dqYgZFEUpUZDVNaPET7xJmTMPaJUFq7jAyrhfQNqEiPQexeHnsGTLkmtvBsg6P7bXuBpq6erh6Y8L31",
  "key36": "5sStwus7AbmvpGRX3mMVLWu3dsgHSX6gqcKkGbYpP2g2AcWeW3BUYiep4cm29jxPgaoxTgyuJBuqerSMaYJEwaNX",
  "key37": "3qu7189ihh2ewteoSvogFsH8B3ZBYXCaj1qZthYU9M2Ty2Kq4DrPVJf4qGBes42ynieHAawfmAiZiEfKsVHmMo3P",
  "key38": "48NXVPm4TYH54u1HXnLA1VbNqb1Lh4QNQE3Lkktzkq6kott4WcKKjo6YHUMAU4feKtvFCZ8yRRPU2qH4wEHKvYJE",
  "key39": "Uqrun4d4xZ9xsLpqiHg8fdFTE3iwaWYPWRsJjFhKTZpcm8WKBGmrfMQ2ac5CJzndyVyrmeQF8BtnN6EeNLpnjqa",
  "key40": "26UhA6ncRiAn2QjMrGK9LSqBtuyrKdCsHJ1jWAdufLSVEeDoaRv4qjEeMssGBjaYyuMWQPRe6hpYNybfYyd4ZvyS",
  "key41": "63FUf2yNXG3DZFR7UF7yUy6vFdsqWHNiqPWXpGqRpxxNcTxKcPUPB6EeMBeeMvURe3gyv8YRYT4Sy47kF5q2k1Ns",
  "key42": "28McaHtbkqpux7udZz3iQsBfAV8d3BPXc3PEd7JRMUnEFEvyLCHuNgJbZtnzsisq13mUEy5Pznz31xoVazJqK7C8",
  "key43": "isDdNjeKWSjPmXG3vLvqZigXAKCLcsi91k9iz1oHV7td6aYRep9A3cCuhygCKfA9CWX768r1mRHyV598LYinrku"
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
