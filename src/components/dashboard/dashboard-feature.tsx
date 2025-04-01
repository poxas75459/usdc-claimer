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
    "5MTTXF2qZHpreoCy5WizuHj65QwHJDXPFxDzSkhJ8MB3mQhVQwqBhUtgod6LVSoHyVbiZ4uyifDFbrpVs6x1pwne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wfTkANfiFRkL21kS9PyG7ryV7zGW9cSy9N9H9DoLQPUvCEqEQyjzFx9UemFgJGJw3WX3DLU2DAEXaMpdJaL4MFo",
  "key1": "4s1xd34YURdmP517BJDbfH1TM99QsxGndnb5zWrmmhxLVAEKuk9XfTCeNJDrjbnDJ2P5Z9u7Tq1DqtvETtfrSLfc",
  "key2": "WTGAEeXQkzZKpnwKG1a5wupvR2vuZCgV1cJrs9iXy4i8PdNpBKBQGRoCW2aCCnA5zRDqPHAvxtaMXwiV7dJMxhf",
  "key3": "25QfsViPwDsYRHyuPyVJceDegdCh9c8xyb3GuswzMrt68GyS3xdfSKeRJ9dD3tXALs1SrhSbTnp5NdCghDjrNuwa",
  "key4": "37kzEjsZ6diFi5dsc38EuUQo7t29tPHyrBWgNSCL2d7Zx5vDmd2rf2re7SWPZqUZs1oLTLrzHG9fNxx9gsii27Er",
  "key5": "4dqwwgejuxGuBdagd2WRiAmGvHqBLEpGdNeLMNFDKWAJeC45nkgPnZXXXikF31MuhaVmD1ZLeJQ2Ep8g8Ma6awFa",
  "key6": "3g9snEahwwg4JV7m66MMQn5aeyFSASKk6PRAYVVfmbb1KoXaZdvrbPDmu9ZVAJZJhh6sYjnmZroke1mqUeXh4exc",
  "key7": "4EraPFDwivWGeJd1UsoYvCZUZZMo1XpDtwS38Q4pexwAHFmDk3fTSPTfAvRYd3rpRdndAWXbubvj4A5beS7USTsa",
  "key8": "3XWiuv9QeFjuxqVMdZ6dLrXPmB5Fb1Jb3PVfv5hrm1nmnhVX8TC2v2cEN5kuvrYjiyi7asus3myX11uFQHJvMjBH",
  "key9": "4PU1pdqZfB6FLp44z8vkkawXn4NADeWJip8kzBbApdm7QnjPc4ZnTjta791ULaafy13oW2TnbPezRtFBF4oyhYSP",
  "key10": "3vbdJaZeJb3kNaC4WDzdimFf6GA1Fbexg577RoBQMcJ5E2jNi2PxMQDsKQZkxcwezHCSKm18nehi5qmnmNHUYFgU",
  "key11": "2fko61LVjHP8drx5Zu7ZodsD7szCf7S3k3KhPUucEEL1qJCpjqQ8UchnbTsxyifGbzQyPjeEN3MuLa3aRJyNpzyC",
  "key12": "2sobj3wdAMiNKniHwLSaQfPcvS1cZfZz9DrVVBBrpyRdxQyjSNRDZGi5wt4YF4NPMvTEyStxbsTpS3NtQ6yoXv8x",
  "key13": "2MT692dUttFb1NMuaPFBQsCXcn69LcwiWXMMcmYp1XxpHeLzkqtKxT5FsoAhKEDmqVy6aFMctFyx9mAY79tP4Eu6",
  "key14": "efdk94ZTH1vVd4D4eaSJ4gb6UQZa5ghNEBVp98qGr9aa7j5BjeZFZcBWjzM7WokAgq5gFRGUQirdaMKdrw2b46W",
  "key15": "5Au516QiiPHUSJM2UMWVpfn1eoBwufUhiDoMYo3oJymd95MfEEasZA47B51csreEMwBLUKbVbkiXiwE8j6hbLgbH",
  "key16": "2yyuVNaEC5hRJPS4V84Dkg8CLjbgGroAu4KJnSttiU7s8nZTMFwC3vzehrYG6fXABhwXSja5jMAPUvM7eHPC9bJG",
  "key17": "64Xf6yLSb3hj7kNyGgM6cYQMZxn5M9ceDpP9SUx9z4ovieNs2EjnaMo4cmCjYGPywWT3oCsec7jAutKJnBq65A3U",
  "key18": "4PvjCH7Gdnj9i5brSEiFRgA9J2E3LLPXGQ8jmENS2Rh1wiJNbmLoG3f5FnFwGy8LTcx2MaVBSYtKXjpzjEZbhHDo",
  "key19": "3twTDHbniPPSJuo146ESWSD4CVt5LPyES3aij5BMXfmgzNCmiNVPUwfDVJZDr5tYfHrJKrZw9pC2fLPEVjSCakYe",
  "key20": "4MxFSAdVfhjDP2VrssHnNrU8FM8fa3DxYev88zVyw5VpLkrrRsm5aBDwB1MtHwK6jDrMMU8u9joGr7BkuVBSM8sJ",
  "key21": "234bEvUyeDxojhigJo1Fs5KRwVKYbSL7LkhYwwbMrLfARYypVTbP7QFN53ecxhy2G7M4CsguVSrmAVFmDpXH6w7d",
  "key22": "4G9mDJXxZwUxqMPAB9kBLFMYvLngGBUiixLi75d7hcu6pVPuo7fknfRDfVGG8GRarQ5khnvSebePZHXt36MCg9mo",
  "key23": "4HDVZcHuhjTMAA7a6e7PaKNY1ksK3N2VTUH7vQTkScLoReTZM6ySBVEVDtkhvpbSsZDAXNdbjTaoB89VHkD8GQrQ",
  "key24": "3jfAaodRczvMmZc2pmmyJM7Xmgk9XYD4mkNP8RQJBxXWmXsDs5vf4Q4EZF4oQTw5XY7ULTBFuKYCxhtKDvERgyFi",
  "key25": "RCx9Z1RMAZJLBxDasiqzMejuK7djbF8oAkHBt9VHJAgfKFxBvz4xdpuowKVKa829ySDsqxMK5DAjQ4fTaUJUrk8",
  "key26": "5FsourYVb5VKUpFLJxukJ5ECk5h9MEXVXZoULu9GUePcWKyU8imxUtDemrVxN9nSdvTpojZawft7HVsD5LXfEBwS",
  "key27": "TvGKMMcvT8Uk7kvXyWyrxDk1AgRXPkt76AWNWVq91BSrSKUu3JLTimk5QtssHL67jafcvhjBTBoyz2fuGcQcnjP",
  "key28": "3vxtiefiVNgHz8YR324ZZtSyMZkBDpWYPw3LZJCzi1j97g9PFaC4H1oGm2WXYdxbq191nfPkvjUsqzMn7ggM7msA",
  "key29": "216Q6jPf1cCkr14DJ8jtWE7GBKKP43XFbPxAuaEmALdqH25LNwcqgA7SaTQ523JBZpEgAjXFD5p3Nn1WVud8tkZz",
  "key30": "2q4RDjfydkrP51fFbrirVhvgfDdzitDu8ud6pBXsBZ1nSPRUce8E2Kdf3zRmZW5Potmhi2Hj1ZY8aywum1cEGt9y",
  "key31": "3857LKFwZEa9YK97nLTyxT8xpJjDXm8NjUNHtk98H93eRV3AhnbBZ8A9BZGA3UkDby14mX7StE6F52KHfzZ93Pjx",
  "key32": "5dbpkM1dov4G1j4H7qEdKMn2YSNL2WyGb1y2EbAAKLUif9vfWFUD51ZpoVhc5q4NumgREzTRw7zsm4LcEa3eDKch",
  "key33": "4wEDZJiSjtApYDCqf4sGu9Tx3Rj8b76uRZXVMHFNpYPgjS5MmqHLZG97DNjMHChRcLaWBkHkRSyQkgVQXeodoo1R",
  "key34": "4YBDEcNSS8zVvKcnDgfDntvFLcitEDBk1nSpkG22MyArCthu12scfqdVxYDmyDxdRtCdAvYT2H7hCwgdV3uiXmcg",
  "key35": "eak7WJubzqjCrkM6zLmbtdFmTtJmof8ZQAnibAFhvetdtnH3Sbi27DXm5KnTftA8UQPD9NcvCMpRxazaNquTBUb",
  "key36": "5tXMFuh3GBwvBXBv3FdFKzmcrAjBVSx6br5yZvVohZ57AuamctZJMiofsskiKsmvgBsaCyDw8JHe2pQeNRxfSYLj"
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
