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
    "3UXcwRGiJFwxbzy875RFhTBjRRsVYDpfaCzyqQ6zhZfCdB7So1qMR2kJfxL5XCUpFQiPgbLbPc5X6icwzcgqRtJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a7PpzE7HbApHoS2oEobbWcd77QRz8Cvk6xnFtc2w4wrbupTpbTkisF3LPAEEURRaSfrrpSypE4J1A3Sn1CBttYN",
  "key1": "2pJVVi5XVMaBzivtDjwrxypPoaYxEUonT2ist85PpZfA1n2tbsCsu1jce5vdHqRK6ZCH5EodvW7ZqZYFPwinJ9mL",
  "key2": "YfcC6iCwxMfzP3R4TYE2AWfsC1GzhSf1SJh3ef8QYJoCiQCQysvCHvDzePfg8ogn4jDk1VfmX14iWCPiwSkq9Cw",
  "key3": "65deYx7zsxmVKXJ4SYFYdLUtezLyYmjqei7hF2p2mU8rs24g2vMMLGB6awVk6yVSuoPirCoRmRxKNrVzW3Nr1S2h",
  "key4": "34g2duEN7iWRQ3qpYAnNnAFWaUSEmoR4LKaNudiUD3VkaMV23LsJA6pJ2Fnsk6J5Deb2ds7zH8n1xNWEv9ayHv8h",
  "key5": "5iJY39seGadfx1prFyzgphLUuK8Zvp9GSp9qhebHXLmSWRTmQ2o7iaR6LMfVW6C61krD9QPmCXGyxP4TnQF2rWdr",
  "key6": "ipvxKY1PdEzuiDtokVvWpPMzrJgAQJycRJo1n89bBDywcd4WZo8kUtSyBqCVR1b6CTkeuvU7Pi4Nn3sTMyRdrCe",
  "key7": "3TEAoEBss4hytJcfu4XDn5SjYQ7AgD6npvzvQdxHDZm6uyK1WAGwwWHRCe4MW3bnj1rqigCCsH4ZQKX99SWTbCTK",
  "key8": "5Q5Rqy3EB7NkCt15jsi7ZoR2YZyNSgPxCUZFaowgg8kNMQTrX4ofUhg1ENjrZuMwKw4dp6GtwcoJiSDD9cZWhRhj",
  "key9": "2YzgpNt6mwqvQgzfJqapcV2CWfX85UX2oVfCVzqgLULFoRXok3fMHwg43JpQcTjzyJCeNFFPidvFicHCMcyWU3gB",
  "key10": "4r3F4WGoZi5RfHQiYfk3PS57TXSPersX2jCZPQE7N4wdk6JBXQMJs3TSZGrvAPG8ohzRrEyeJVNjjtFX1ZZcbnVa",
  "key11": "r2jEyvoDyY8p3wj8oQAYem5Ya6NntSpB3iPxmKjo6w3gJVPW3RYPz2uF1H1QmZPf2RJM1jdk6bsxtS3WK4zU7ky",
  "key12": "4jyoDgQujN1ohTUmLFwQ1JubeU8F37XT22uYToRiiX4CJPh3w6cNJWE3R8FB3rfPdFoBR6rrrBwzx2ZD1weLeE6z",
  "key13": "ouBYQr5qQ33mwzjGrhmUKhmXR8gvg6XzVxhExkTH1sz6CnWE5krBtMtjahTFRAhk4TmBz4wriv8rQVMGmf6r8Lk",
  "key14": "61AVwyGuazi4buDzgJfFTjsBPFuGuh49xMEqi3UCz5iMZSqwUEJmwkTJHjNJLQdcFMVGanrugiBvLsqko7eRnyBi",
  "key15": "2KkxcGKueVe19Qs3QCZeysJtoEFFPXt4DvHZ94TffSrs7EwhofZbDDHqXjzHA8e6vraTuWJAfWEznACVAzciT4q",
  "key16": "3HPDhteswphufNAPJHySLss4K2krBybxA7aqE1fvn9sSRKhcS3wnSy8tNsm7jTGUeiDYATXRk4xgpWepApPoPzKD",
  "key17": "2h7JXakyzeRT2yt5WhZJ5qvMpizHhs5NXzox1CgULvYTtXfBsL6uAmf7YzWAU8hMJzTkmdMBadhcohGKztPMrLPM",
  "key18": "6eDyoW7MC9Brny2uFbhCm1FvtDuj3AYpig27N26HqetavaBWiZepnRUa9ieGUEfTPy6nYYHaNDvbC1NV3eYEA7h",
  "key19": "H2WoBXuwGrbv1ryTsbdibwzckq3wU6b5YvqmDVEwvpxRdEjcizwBZrayBvYufqsisQAHud9aT97gfsGtbbyg1VS",
  "key20": "3R462cfeNdsCS9by4RGn9DexvJY5WPFasjKmHcLfp6GBYx2CzoRKeF5vrA3W8UgLRCAkBiiohVGACNQ5siyFa2g3",
  "key21": "3oY2AEnVak8Z15SrT7D8gRHPkmWzLTQMAGL2p7DDsmZgffurMA7QTvXfmKSXk5xTriBmBhgV8jeQc4xhtsJ7Jgop",
  "key22": "2M9FDXRSS5hTfALJCNbdW5pMpHiozNayM3iYHisQYAGfSRZvyA5z75Jjy6g1XJ36ZoXmpBMEfUwhundyxLb2F1tk",
  "key23": "3BmeQkyZ3KMZTVtErFjAH9A9PBvr95oEon7kBN3Qr8iB672x3hLRqSGNpKh1m7ciGkPJUBBNEMdSdWdtSdytMQNJ",
  "key24": "3G4pt9ruUiw4qA48LXqrsxaAtBCFWe2havLHddaJLtfjumzMxveki4ziDVEq9rtxHdKpPNdsTLFfLVJzXrzfUttE",
  "key25": "4enssd1fAbEt1eQ78qXjnWJgddvfw2yf2xfz7bzQRp7hQ9WNPuvFarbrmuB4AXyvZtuTNp1AJ8jSoyK5BviNgmfw",
  "key26": "5pvaX53Hs9VBBsH7w5of13NMZZryEJqigHUSKdex3tUcgVdckNMAVYKHYrcwbt25U2iQ4VdfZB5K7Ke1jhRujqMu",
  "key27": "5SYAhUxvAkkywTgs3TxkRTFTXLgBqQ7Q6ALP4C2Rs2RUHvQKZV9RFRV9nqgpE8Yw4jY4kXVu1SmZv3UQY595NH9m",
  "key28": "2AkCpifNeDYBDG14s1RJ3bkLA5iXvihML3MxaF83cwSKJJ1zTGsHkFGcbWr5FG491HwDnPrPYTtwuNb23P7nAkJg",
  "key29": "53Z41Z3pNu1SBjupaUo7gVm8mf12UJf1kVLCbnAMMT3Z51GvaHFcY77rDofNR1hqxr1zMMDm9LaEVVwMLZAkSXKH",
  "key30": "zCeKjFkiRZRGzJwh867e1DyudfMvZqB2PpvwbyVyN8LPRZ1CQXaDPnzizpTSXmUCB6AuT2W5g8FcyfSQjKpHa2i",
  "key31": "45JgqoawTMKXqeBTR25NFstDD3geWfJ6uQgUzBb5mKKGicpQmZr2nU3GjwE6V76qQVYpdACi3e343N8idzLTNDVX",
  "key32": "5rUrSVcSp1Lvdrnr5NUJCM9oWqYHK6vBzm4ToTV5Fqk5NLAcEr99cbbkuXHfpWDcnxtd1qQWYd3h44Xpagee6x4E",
  "key33": "AU7iFsp8dMNXxBzwEWZKXgY35kyXVUDqpda9rv3H4Kh55HpTVNUK689F51C2GG9pTm2g27W7Y9G9mDWHVQJabQk",
  "key34": "3ViL9JWFQEB71U1BgfWoKSvePyG4Vc5vrbQqjJNesvv9daGr1XxEJwhXjZTkvHPUgkFC3iL2E8fE6fi9gXJdRJ88",
  "key35": "4ZJpf5p8FSsCsH9XMfnAbzQ3Ppbb5uHpKiXaTfmM139tipL2tzy6wtJSucgeSxDCuxRvpiLiTBpDufoM3on7uK4b",
  "key36": "5gcQTAzwgExHVop3x5hgjjgFtSHheC5aD75RCZfZU9m79ohPNk8QLQUrT8pD4B9kGWUGgruCm6NoHySQeHnApeDk",
  "key37": "EMbWaPfwTBxXVcT3DkpFovJnFSZ8qYmQrGgRUtNpoNPpJRxraBYmv4qe3ZWoXi5UUshiXZAVo3ukZwmYc2ReTmT",
  "key38": "5b7VTtyAB5k2iaXkDaXwbMFdgEmVfFeRJxxPeMt31ykLJrETgk3ct36kcHDscqLWDVVm3PyMVoxXkaTwyc1MFfWH",
  "key39": "NDKAtQTHfPK5PR2MEBLGNGxrfDMeP35NopK4i62NdcZS98cv5HupgThJisR1fLQAabr8fnVmNZrobrBGYaLwnwE",
  "key40": "639BkXxWzFWHLnYKigXAa4hH2DFxoNf9vS2tA9mRHFFtAwYSCz5FrMJPKYKubD66YWcxxhNhUfdK1zqRVSetJG74",
  "key41": "5APTXLKyUxgV6Jv32yTbpKqirJBM5mo8u3XYKoi8gWFvJ9HcTxsyUvXyo7Av7PiWsc8LrmL5iJ3njLK8mcFfUmB9",
  "key42": "PyaELSsFLi1LpEjmUpvZYEGcwdGyDtPBfXob9K3g9NPSqDk3QatCdayZQtKee4y6rFxwbbcUeP7C6RCyp9kBnRW"
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
