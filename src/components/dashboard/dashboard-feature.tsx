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
    "2RtAyk8H4HDekbdgqcr61izcjPBZqVE3VVDwvFyfJW5MymvYiYsnYpniM58jskAUXq9QvCASuAS57Az7K6kR4XLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pYujgpSNodZH7LURK7QZQiGPAA6CuDxqF7CzaQSknqcVvLuBNke7Ef9NhNiArYfFcUi1xddDgqcZoLho1ZFmrUR",
  "key1": "4BrKJ9UZvPiJrVGLDrHN4sUtsn7XJNFcc6wq2Gk67v3jwZ6JKJX1ot6BLLvmwunZU8tHfKgiSsgKoLAoCisji3bD",
  "key2": "4M8jCbDiJvVe1nGjezuNunBFJddaD9kiWPs5kTDooRrAL5tVy3Ji8hdCb7LSWp1mo3hSyKTXCpwHRcattRn8HLVa",
  "key3": "5SLgVCCMS2Avtxh9yZkdDN2oCgpjkWeARZhFhtF3qzYd2fWGStkAjZETniFG8J3ihxKLDWTnUPVCP4dVgPbigob7",
  "key4": "xKouZTW2qbvuz1ek1TuyTbLAFFiiXeXx4LMK3D5iSPhSEzv9AKz6GxSmuydGSj53eV3ibNnfdoLL9QLTYgVRNqr",
  "key5": "5gLU9GtWfqZWyikWEywWUVsFztKSoYj28VPddVtXBBdDHeBVYafTp7sGtaixV5bXS7Se2cwPEdhqDYPQ2pBYEUCJ",
  "key6": "BeBns3teFeAcKTaXX2BHLf45Cin7WKppi6epQp3Mvny2eRHsHphaSF9rtDfyQSgtFHN8xT68MSKtXCaQgH5NbaR",
  "key7": "ajdZzDuRgUnSrcgxCvrQaUBzbcn5a35SsAbScSz3MKWwLN2VVVbQ2SosE2G7j55fiUo4EcbPA9s3vsyBpXHTCvL",
  "key8": "3inqotZA8d1L1UCejU6kRnKECDB8rzcjUxdjCCB8wNQmc5aqdQZnzTQ9DFFK8JKcVMSDRZZwgdr6GLz6QduU37GL",
  "key9": "4pY4SffsdWHxf4Kpaz78XxEQrb5yiZkT5iWhMC92RGUoDaJMAVe7z8eJQ8nG9PJEJhBCdeuLbpQVq4pCwZE2vxPB",
  "key10": "3A4QGG6jj4xXUBkmdpfZkNZMoLeYvyfpG4zwNMFGZUcykq6VBCwrU4xyvGgGQ4s2Ugv4MizcX6DyAERUfWupB27E",
  "key11": "3GBbPyBGCohLHbiMRQvrLHScZsU9tQiHFTuDmVUnZanjv54TZEwayqNqFFVhJG5cwNbaGUFqJWhNBwuzVK3SSjnv",
  "key12": "3AmnkKW9KeMsjpKDNkn9RiMm5Nb2YyY27Dn8gDabSQFnurFwsvJb6ihyuMfA6WjYf12c4fxQtT6Gvj4hEdJRRbQS",
  "key13": "3wUAExZ1AswNf6iJ5He4vNvv49e1L8BztCkL8VsYnUaRnbBm28LrLdRTN4RJcrceTBm6t7KawfLKyVYJAyt2roS8",
  "key14": "jfuxuse4PpkmRSUC1BT1Dhy4WmcqTJx4Mx1LYVycQpG2GCgwNnTpLyosijKFBy2KrWdbAZzsp77scHxCBuuncwc",
  "key15": "4JgMQbyDCmCmUeUCjAt5rzxY8U9gjBR2ao5XjiB1BSJUeaySPHgwwHFnKnk9f4BmpYEtXCRQaxM22QWcCznfP8xa",
  "key16": "sNJSgnzD3dntQdncpCTvQ7jDLcTRisNyzPq4N9LHatrKEWGSY6zCAPNW67L21HPnaDySrnZWWfDs7HkFFQmGh8v",
  "key17": "qEBAdLnHEAJFZtz5zGkddun2bAuiZWLmy5hn9f35KqkLCHo6cGJBhtjJvectR6p2mRq1VTy4w2vkqHUviP4RE25",
  "key18": "v4vWh1r7zeLEMZ1vJmJBbA2wav8J1H5Nkf9FQ3RyQBSF2YqmMAtyRkwPEtK4Gb2ccke4ggDw3adTzMT6fe9yc4k",
  "key19": "2KKFuPWnZW8zEEoiyW1VSL7zsqKrxyHB5qpVptA36xeFUzoDLC7UY1YWJ6T573bQgVpXU4WsyDK5Ee6TB2aqEX7L",
  "key20": "49KWTHJXKntJ8PB1BnHSMqXBE7Eh2acjoXPSBvoyNv19TLF9VPLceAhgVFu2MrovqNVxXyUQ1wi6FfYkjtF2Le5X",
  "key21": "5FvDeWP1ifTxggRJYtetdqnyiUF7EgCYAtGvBTXrS8UKSBrsBPPwNGCMewmwpV4BdAMLdKzNAgobPb1TuwCxctHc",
  "key22": "2PsZH2j7owXuR5ovRwzfGFeFMyr73Jutvikz9zn2UZ2ikmV9LjZuuvaCDHKhj8zaHW7Tbaw8i8NFSpB5UycPxZ3r",
  "key23": "4LV4BcuUcAm4KLihd3f7f1XAFG9mDcW6hSjrbS2nUyuYSGyAZSbc2bJN4JTZsGbUxPe7Sb3fmFhKUm8gJbMGh3yY",
  "key24": "4LKbV6Y6Bzsx8RWCz2cwGPwyM2eL3mMpMiQBBoTsb3SKQKuTqrMiQj8pMgn1iZe8jd6swEP1uBuXLbneoP6Cz88w",
  "key25": "4qHydj1WHg77mojVYq4V1rNtyUn5Kq82sfwLALHR275wnLh29yjUDP2RJEUiWKuYeopK39kC2hEqD9iofoRx57Ya",
  "key26": "2KPD6NaHViWbiQbmMmpcHCLBe3tC9UzJzQJoNRUQupFWv5VNMVrvRGBppGFS8b8c4fLQx3n3DYciKfMDoPjNZ1hn",
  "key27": "3v8nSFLtSTM75jKn4BwbHU3z2zHBsFUW79pFs3B6ryNsdLVuu5sDi2B4pk3YaAmJTzomTA4bFH6XCiaDdJYdzsBW",
  "key28": "2Ak1P6yDdTqqVEqyamKG2GDfmj1kjrQY2SF5xM42dLMCeFuAnSudum5YC2YvRGTdxyRZm1L4jxLpHKMEXJAagbir",
  "key29": "5zP9G4jacpuxuUDf1gLGjvBpRyxnDt8xYVibF3hr7FqKcQS4dGARaDBFrDQJzLX3bvuLG8fS4uAPbwArF2SeEpNK",
  "key30": "qDpHYXqB5hqbyVAExqYR9m22PegJuQLRTMaXttrmcLWmvyQP4GXd1u9onZQTsmQVAwdKRkU6LndsbNwc8dYtoTz",
  "key31": "4eodA7Ceyu7KfeUuWLq4N2STQ6kvPnXd7jjwBDLTw6fw5psfZLDgxCxe4A83VyQyuUuhxgnQYp1YJb9xMq5hFM3f",
  "key32": "4mRJiVsBtHqjGsjRp4wR5A6h29HCJdDZUHakBSBcwLaUQFp5LEBgBpx6YF5raRBd4MLfdaqKkdZySvnMFUj9PzP3"
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
