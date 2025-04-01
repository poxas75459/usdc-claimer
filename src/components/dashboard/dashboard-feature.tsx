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
    "Y2WACJs7iqSDmAfmeNaWsKu8BbvxecQgoW5w7LaMtS3DK86arq3FDuhdC2tKQiGgrYFwbFjpkgogVfS4Ej8ndTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aHthSBAXEphdFJDWwrp4ptYHCN522sCUvoo5XX9dZp8w2hhBDa3xrMsAiKQRsMpo9mdFnzj7Wipwxwq8D2H76TZ",
  "key1": "4VVxAKFxG99p2xBkHq6DVFbZn8r6bCz5X7tiSEpyPjXba8Lcaqqbsf9MJxCS6HRmu25JRPq2Afh2USdn5bpaHj1b",
  "key2": "qt6UgxVEm6bdDeNxn68H3FUutpKH9Mz1GBQpZJBFAWvbx8C8kz1PPXmxmkDnP9gi3NnkVQAtj6ooUnTAMhbhJ29",
  "key3": "3EiHRvj6mktXaXQXLKq3X1KiXygyRxnrFWBBuGyyPQeYLGkWAgssTpKnFFryR1UGTenLZksRLjKTYxBQMnJMGpDA",
  "key4": "28WseTLRmEJeTuuy1DiSH9c1XFw3rmmYGYJjJYzaMRDxatghY5Fm4Z5LSewyiffR8F2K1R6HBntiNVoMLh4se8iS",
  "key5": "25RJdRqD5cwvBnFpryv7UKfgnxNf73XEc6A4WTS7tnwk4xpjwaELV2AYchVuxEsH57KHwMuLwNp5ZNxXBbTo6LkZ",
  "key6": "3HWBmAyBojgKhcdAjHXxTR5sRksAVMXPJN4ddn1Ytam4ANoQJAh5ECMVwaxuUaMTtMe28bQZc5CLqiPZD1jTEfR",
  "key7": "fxRAGiugujCxHvrRHTURxLmZ7JZwA5NsaFFnx1bSJuUUEErrMSfgK9TjVVt5jaQeaVSXY2nuJessFBNmBumwa2d",
  "key8": "49fViZCRQbv7bPpJWD88FBNAbiksthrib5gpna3d1qRpswyyG2uziX9UFTP4kGrSSzPjLUQVnyJWQBKAjkhDsyR2",
  "key9": "3D59nmAyzJEh4B5U9PbQBwB1Ln5uWHCqvMwXzYxBZ2mRBwUaUYF5Zjc8RTCcRcfTrzEAHvKqyhExadbUws4xveX9",
  "key10": "5H4gzBuJBaF3GQaayuquhh4LCwZ3LxVE874TujaE2rByzWh1du3xW9vbLkR5N8Cd99KissuwVntp6QLvkLSTG9wZ",
  "key11": "ognzYbGax4C3npapEa9WggsWfMH3pZsmjDC2bZjj1pXabeajWX5aWakvTF8iesHBFt97cGyt4Fi1SrtLFHj7h1N",
  "key12": "3LdFi4W4XzfpCvSZ3pL5woodiyC3MnUtxNnuupQknn6TsWKVz4byL4kVrMyuF9bb3Po7AcCqhbmjz1zgXghobkTR",
  "key13": "4eUBbdu9ER7xW1SBM4hyie1nDnjgiv92bju8HcmgdkwFjEuEXrKqSxnmWRKfmBhhBaS7zrHmGAASBvc5oX9q8KLC",
  "key14": "3R874ShoxUAXzUHrPVj7xyqN7dFyhqEa8mV1XtP3cDw5rGYwRxgwN5DyQBVJweenuPySjzdE7bPrNZWzaWLCov12",
  "key15": "4ox9kmFiVHZP4aCqNAdz57RYF5zaWNWJ698nnrFUpd7ygk4bxUy9nRMHwSRSH7CenpbYbionRRNmR7R4djgiKdnX",
  "key16": "B6MnXEveyqUqCfDSHqtd1yTyaocCBjdQd8u1j38nh88LqMnQMfULascJcCxMwZVBybnvteuuY6r5nsxwhDjSDcG",
  "key17": "4muiqVp5aYTSG5pS425vW23FxmzkLW5KdBUgYWs6ezsrprzWDat1rJmguDWkhbLKjPoCEyY8jWYMreizrpRi9G5t",
  "key18": "fjMiKhG5UHkJmxs1P8yYpF6e9v4i8T9UZBjc1kNLVVzXmmkr2gKYYy8XXH9bzi5f3zcLLZSUu6qRQCsP9rJiz4s",
  "key19": "3qqEo8XcLhi9yzKHQQxcu7GtCakiQMasQHHC1eKNMGcZXxyc7w757DmASgQBpZuCzpzg69HKXioHVVGRKQAoT48c",
  "key20": "2qv5zt9wkLsbVW9Xv7mUBWkeLemzS2AXsFC8PT1uuU2LJnPHeZr62Zxjr6Aw6jGzsJAfv1eVofDBVxRMPK6gwPYi",
  "key21": "5tjCASzBAYwi9Q9wfe3HGvB1RPnvmNgef3oh5wdt4UhnBgwLtiHfGyQwYkn5ZTQD3KQvKGN6PMLepZUZ3UWRrjig",
  "key22": "gmUSWj3Gqem4V6vrQvwck4W83aZU4m2xKkMTz4EasjJiLaCNJbHCLKVBDqkmb3n5TG1yssKnbt8UHRedf94BfZh",
  "key23": "XjTeJx59SGfvD45DbzY1qmvGorSqBTWaPcwbxsJoh5jeMDBxhyhJJ7HwqYgSNEXTijdMy56K3XHgvQtvRRKRqEy",
  "key24": "5Guc6jTLBgLd3qSiy8ePj1AwezotxSemijH3YLaQPDwv3AhNo9gdUddhrMXMD5tPAwWeS1HLaCT2radxDNuYW9da",
  "key25": "4rKmu5MgF6QQi5hK82Wpeg1F8wmrnrZ6kqCqfcMjpVc7VWfX7fsSLDHvNBHPZvyc26owLSGy9QhkCBiK1XChLoD6",
  "key26": "2Bzxsw58XtmakreKih347iUEva3qm94HipaMLz1dLE1TXuGuBqnaaoWd3aGVuQLeGb8MDq5Tm4DZ1UkLsxpBYKWJ",
  "key27": "4ewVovm325nFt4StaszuKLXrxdS7824ZREEqZzhmyHGfFF9m8vTBqzp8mfHQ1kcFyDZvJG3A85YMfECYTcAMhLc4",
  "key28": "48vf6xDrTmUUAiC1kaqL9ryBv7iNnfAsmRBwcpoxg778MVuuyyruKMCWXfPUX1SPy7Ap3JN85n3gbMSir6KXkWWS",
  "key29": "2MNB1fxayyJGR4Go43AvtuHZmHGKCT4ZfSaD5VJAsMvA94KRAJreXnJkL7dsXmrMW12oZXVGgvL945vR7kfDsbkN",
  "key30": "23jDAiPYZE7APd1aRvuPV8wpALdB45Yd3edzVBSYhn4nBa6P7XuUhVq9hs9Y6QHD4u4uidCEDTEdiJGPeqntXidp",
  "key31": "2uVtPP5P359YT1V95dm5i6wwBitrEnAs7fRK88jrVmGGF7EV1bgjWtDm6gKHWHa4GzdF5Tr1duWbH2mHVshVsd1o",
  "key32": "29WBjkvNWhsF8ZjY6ugqtsnow99hr3XigXk6c1kMG6wq96fSKQ1Jtsm9MWTkvt8FTAsvXMNxB7BJSLbHFnGoMoCy",
  "key33": "4aL6rCLdTQZrtuZAeb9TdV5HTDnibrMttHcv31uDD3E8vRNtbiyGvQvHSefRTFTVAJmTN1wD3dkmWxLgSVd6XBr8",
  "key34": "5Mr4a21QtuVHFQqAF8npur3otTVGTiq35dnfwZm6ai4pEG2As26Ax7iV5wZTmN8pHUDFXaqyCQugRCVJ5fzDKSqs",
  "key35": "sTkSa6JdgCg7G1AphnAtSbb8GViooKUxJm5EDteLq6epCpnVx6tZPGj7aDb9JoGpahMRsGHku1NtoftNJMr16zk",
  "key36": "4Am7w4cjTeNjjtCB1gpvzimLnhQY1jj7mHTHBD2pYbtDN2JARGa9i8mDfTMpBdaUroEmJV63oogHTaP9NksEb8w8"
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
