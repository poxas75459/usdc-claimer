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
    "4eF12DLqpezDs3T8yaqXCY36gUy88xqxGKubU1mzprJ2SHeZWQzbnDde9czq1hgs494SE3hjuiVavTzeC3W5m64A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62YP6YtUxcDkQfZy3UV9RDQvm1Ez5ngTdRSKEGvSzMvVEiogbzdiVY5Rk2TpFAdzqDWHy43W1yY79PmBN64y7gAT",
  "key1": "5DVNUiRQpheh1w8pqfDh3yKaFfJCPa95eM93ceN1MhJYKtUqbgZfgdewjzuPX5PZqidfWKSBBpphzeXi1GAuCwku",
  "key2": "JBu2ytGGRVmgAoFohMg1ZA8nyN7ruX2bW8zy7wr3VHAjpes96qFQV5JXqft76JhXmnGA2T2bhWw3w5isLUWVx6o",
  "key3": "4ZbrgsPMHCLM3tqyB7GLYb1s4uR9FhnT3kcRmHCuuZoBENMiBHWwGnsp6zJ3bdx4UScS59UdrmTAVr1Xdj7dhqkj",
  "key4": "2wSEejyUyhZVW8jm6mugk7kMXVCGf4DU3jYh29ee4iyDRekjGffPgX1Lr2SYB5YiPUf3LYusNNx2RPeRAoZCg9pm",
  "key5": "56iLUbgF3W5KK93Ua7c8SFW8tXfAs2mvDVi4Ynjz85gdM5UX6bE7XJ1nAozcGFuwt33CJaKp2imU1G8GgyzvnC8a",
  "key6": "35b4vfz7YKqYnNbq2TuBK6ikZkMingfcYC1SKBpLuk8xQBdanckR631t4dpvaTAwoYruLNZc2JnR3brZtpF1FHDo",
  "key7": "z4gPuCPSVBcgmbVxB6S1UDTNHBjXP3K4TnX1MvxRZd3wAzt441HYNski1z8vkrWHwV4pUruzdpeNywx3ccep7nm",
  "key8": "M22nYpqbEH9FoZgwuAnYHW9HThm2XtAXv3KuhpupTVGeNmTxnQSfiNmZV9S5r64fN2PZ3MqDpKvKegRf9DhFtEk",
  "key9": "2z75XagzQM3Gr9AT3aABVVN83V5UV2CciWb5suctTRXXmT5BCK5B6svBmeJKreYcqEe6YQrod3GxgjvSVQUMC38n",
  "key10": "4YH7iUzMWYLgwC3Efiu84e6FV12ojfPur5QYzUHnuZdGADrKqvpnufkgWMFCN87mW7Hjtw9HiK38C9fLb1vBjyrX",
  "key11": "4GR2PiSatXsmLRUzrK3rNzxFCj1kBRKQ6gYmRKPaRvt959iHTvVP2Dr1biue8jdWpu1ERvVPqsXJvJB5M6QBWqah",
  "key12": "29SXVvfqiYcirXGMxTQtsxeMdyrzvYHNMp5SnTKJ7uKveitkm9VoTAJw9W5qMZ8sL1LNztbTbFFTpdYpx8Bau6wo",
  "key13": "3CBHJ1V77E6BSAiov5vmd31YqE5tF2fvZvdnBRssTM1fqFZR3np5XAk1EkwsnksBZFHauG6i4Edpcfd4FyFbRqqs",
  "key14": "54CKBu7F7N12XgHVTqo6ZM7oSatf1MvsNBuZxxb6qywuVPMHkpupXNxzf5S8NYFQBD1hjy8PUpQ5YTot8ywekCEd",
  "key15": "isBbrfT5i97tWTbHsxqqmGqM67fuompcpPJtTNk62ouDfdXbABDbn6u61TyAR2aPPav6myEbQNQUhSMAeAk8Dsh",
  "key16": "61Vz4WZxygitmWMbDmW2Phoadfw516NQrp8MiXHZBbA5KvgGnGonzM3KKjUcPM3u77UmMUsBJA5VriuFufc7dkWz",
  "key17": "56L21Y2wWRVUtj4yLf5kGxmAgEW7wpHp8RB9Dte1sLgUUxM4CJEwgSWoAfAiby9Pj5Zr85cL8Vcc4J8QFyqvcwYf",
  "key18": "qnsJhrdvFh6HjzKqu9cnLYawUniJ1oocmJUFtnSCfRw7vPGqFTMVuPLBvNrEGiXtnEqETb4Ur2ycwjZiS6N6HLy",
  "key19": "4vAhbVzyoFjGVZS57A9Zm14QuSXPhD9oDuUML3CEnSMqGYap8NjwdC785WkZoVy8Tmdheo5nCXfnDsvYHnSiACFD",
  "key20": "4hcwHMi3aVHD3HAQSsUKqEEk9RXQVNJk3wgfG6SZZ59mxYcJ4d3HV1QYVFUSUEJgwood7cCNv4uzrn4knz6P8n3L",
  "key21": "473xWChvSfeKLinUyTf7NzMRmThjtoPRP5h5BNH7a5YexQsJf594xN3xR8WxfAVVM38DgtJYKUSu5thjzps5AcPh",
  "key22": "K179M6t74o7Dg2HTGHT11VK2yMrsoQN8oS4DvQ3nz6LpGHfpvh4xkocYwZvzUEzQoN3HXS4PsPyhdCBRXkzg1DZ",
  "key23": "34cQpBFM8MKwJqQv3XUb57tFtAL9df2A3Uk83rfJ8Q1dfvsLmSFbkUeoXzVkvdWXPjv7drFwvYfHzorw9GWV9biN",
  "key24": "2oNhhKTspA5tsu7gYPAkbgXuGo6A6yNcY73kB8i6ykNSLLFkxLYoRMGTcRe2qBuqNoKB5J3rspP9AnQoYiEESe5A",
  "key25": "3Dec6CJaR64v7fuHoiHyPQB7r2tVMgNfKfn5z7mjPgpS8aenxJeS9qoWwQ5XywyV57RSqjiH9sFd1a7Sw4MxnNML",
  "key26": "2ynBqTic5jbr2eDSS6JcP4SpJW1DSXMLK5FxWrVASaE4jdb4cgDeS7Zfq42MytQJqcrSA66Eh1RCM6GbPuYTujET",
  "key27": "4GmmV8EScE3YyvaBusNpE82avehZJbLFzmFuZ1pNGeq8MDpUeyTNndTeH4LaUgtk4hbxPm2fJUV4riLPanRPnnVJ",
  "key28": "5GygtDpwa7zyQEcLawr3mSR2g9fhFkTebpS5y9AmkrRY4WnjMCqRHJekPsCpDBnUSBMW2e9oUwuDFBMwKEXRvBwi",
  "key29": "3er4r8adi6aEDV2wu6uYBtMywxLXpfFg6AJomn6S4CVcMEQBZF65pCAM6iv7YPf7DExFGruKmxKDcFxdpyEDH1eN",
  "key30": "2UNAPfDtCk2PgCucCgwJHLaGnFtVKdLg7TY2QfoBtAx5N5JoRtFDRVfoEcFrvdtnzxMw2pAqAB98tNcgaFSf4jmx",
  "key31": "2iW6pA2PiuU21a2D1dxrffMjLiaM73yyQsQp1WtwKqmQobxiyvKkuVxjRPCw6sHdKDXEkaSF8k296koJ8AQcPE93",
  "key32": "5gmTo4awY4vns24Er6r3Qh1AGRQAYHnfJY4YSSZ5QHAVc7GpB7L1XMEMLWCYGF6nsR4bBkafY4BS4AzwBGEbyYS4",
  "key33": "4X2Bo8aaxQibk9DEjSJE5Dggc4XGcH2o77nQNxMgUJaCWukRzUCsRdZEScxBUpzLfYhmHqXqiE1YW9Kkod1SvKFM",
  "key34": "5mBYgiABG4tVF5TcCP7qLWkMRnpxajNqnnNaxFcgV4f3skKvGPm9Vv2vFLNiNScmdYxGG62kQ2fQKaT75DN36ZqT",
  "key35": "SMpZDza1VY96D2c6rJPC6whVqRYJZRMS4x1WbeozfdU7SZjL5Wv6ZHUjDpSNi65Ni38qySPGztf9xy2kt17Vwzj",
  "key36": "3kGQKBsE6Sm3L4P6dPKZ1kNYLvT1f9DycEe6kgmwzv9VyizLVwqub8HNyn9sd4PQhAntFCn6sFRgFYSjsMKYd7XS",
  "key37": "xqkXvaTum2FbhqwnVWPKiiHVCULLdCZ1wYQJCpMe17istKq4kNVdKADSmwuT5zhu1te8CZ1jounwDietpXtsqhu",
  "key38": "5vpXBdVXBRdasEifGVoKnSeKAC6fHFuu3XKXtwERXYPpAgPaWgT6vKpGm1uhCT1FCLDwyWGjohc7mo6ESaoD4nBc"
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
