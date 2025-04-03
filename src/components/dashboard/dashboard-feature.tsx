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
    "66vN84jGZcsYgCNik7e7Dc8FhfrSijkmgXnQV5x7rWw91oDy4p1TxS5kJ75b7QbtS2pqkKxiG3gyGKuruNCuxxiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vdWrPP4dW2ebgeAUHdFD1ueLi88RMCLhcnW8UWM4W8w1YqT2YFQkEjPrSGWSRjXuxQGiQXQktdpm4A8RNXeZbAq",
  "key1": "5yrR9n5h7BYuBZ7XFpdC5AEvG6GzXWiST4pBMxY8uk53E8MUo5t5mRDwXDpcqrP1R93AycMdVfmjfLif8EksTLJg",
  "key2": "5CHkTLa8HDKRdsUJgSoefXYJmXUvCmn8DKzN9o4QK9ra8MhLzwK16gy9kZHMNzMrodUPhcsVCFh99fHfPu1gnxZQ",
  "key3": "3iurR43sQFe8LrzzCzdgQLreDn2F3QPmCoVsdskAFJATvbmBenB9Psrjqat562GpQSbCUsx4snocR7MEyHPnJxWt",
  "key4": "5kutr3UcfJB8AJcu9q4uGimvkda1fw49dfbDz6a2tFvdAs9QMpEhkozntVikE8MZbNZCyHxDWjxDDvX8a2WxaS4p",
  "key5": "5rp2badtQRwxPFh84UoAvkXHaJsH4XfXsbs3ky8Lcg4Q4TaHJffoeAJitDp3Q55yLh7RLYotqBDZRpfwro5PuV52",
  "key6": "5kR16v11Q1M2jBJ7wifSDXQuiC54PZ5rKq6EXxSYQLmHK3aHZKxhkW12PFo651MU94Fwi1gqG7zFDSn82x7VNg1v",
  "key7": "w6Wz363BiBwSJBJaESLzQ6CscHcTBGeNMbhK9LNcdyskoojiS5pQ8FF7xSgmovcaDuAa2iwWi9xkj8U1FckEk9Q",
  "key8": "64Zn59RPmPLaETeMVAMrPdCi83iaYqBBndDpj97UgAevFKEik3Yw2ztajSPmEYWpRSgqon396XoVqWfPFjBZrH7M",
  "key9": "3CzQ5VCjtLCjYsQa1EMFgeBrwEQWc4wkJUYybV4gLoWZStAZ2oZxB5qd8fvACWDRo4g3NP2Vy7vYrG3x7bn6y7Y7",
  "key10": "2YjSqATeZaHucF9a6oEDatU56cM5GS5X42UcgMTETChcEHpJ9gqrUkyEcKqRareKzDqj95Qm1Snu86LcNKmU238H",
  "key11": "3YJaUDLXgdARCdZDrXyKodoAo86eBwpphJmJFXxds6m7n97iumaEJYLKfGUdmJ3DZpjs1zJ6XnnrABmtXTToHjVQ",
  "key12": "4E25VX5X65oHhkiBy8KiVQ49m9jrWjGhAVkuJTp1dWEaGbLZ4zZm1MjvzZiC8vcHHcfoxG5L4MpdH9ERmdEdG88p",
  "key13": "cJ3hp3TxnpKiAe5uFVLw3XUF4c4AZMExNUoL8ieS7SPgz23AVb6MMaXx4rwHowuqJKVXZdWkPDwVatVJ83QgPPS",
  "key14": "5NebhdKkegxruUYoUeNj4nthJuW5NEThzMd59MqJKSHeWTLtuKRn1FYEFiAMAbd7Cj6TBoATbyKHdzUhsMujqxY",
  "key15": "9x89rThkKvu9N6nKCNBApsvZFoNJaqrCLvDu5ESyd4hEksb57v2n44bzX66XYonY1iqUWUUQ7Srb5p2DiodkV8B",
  "key16": "5qcJbdQXFAVvAn2r6aCWSiENzH4gdCHEUsJPEUs2RshkGnCzPQUkwbXFyhJTxywHzkEaEDpQUBoFqv1w2XrWivcy",
  "key17": "25TFLEAqLvMkhDzqE6GQhwFszQVCTpLErqYSBum5GDTRgfnqDKsHSzQDWGpqaBrRsZXeuQRiDU1VnR6RwN3PX9Wv",
  "key18": "2mD4h4SA1Mu1UaHK3AWr8aoSC6VdcNPqJ9jFigz6cueUDBkvM7iq4yqWKjuaMSZ7BfTe3n5o7pAmb8KSrsaL3iM5",
  "key19": "2FL1Xppf4YA5bAfu9dsQcBxur1iLNK4whqa8xc4wi6tSycx1oQ5fkgEaEvhxXVgr4D5MSXXQDQ9JBTxkrqARKVQ3",
  "key20": "sDJaHP1mLiVaBpKgfcVsgoyEsnktD8uWBzYyn2NU876GjwoyrpcPBmMYZTFBFpWxmGneL8bJZZ761qRrhtRkFKP",
  "key21": "5U8zFMqSWb87qfmEgyCj9vT2Pyro4FTEcCcnnTKsuTZj2d9QQ7pHCfQ67kAdsxCxrdNWufzfvm5rD14SMc8xj8a2",
  "key22": "55GjYDYydPWGpnbk69DifYKDxqki4q5JzUrycDr3HT52vgg8ege6WTrrJgF6pSs21vCj5uVyCQFCmiQJBsdb8e7h",
  "key23": "3ni7kqkRip7q1mQ3efYpn1DBGcT34F1rURB8NxoW4vCBLQFY4RinBCGMTu6VmqedmrF4SEna2t32zdrYbiseoiHL",
  "key24": "5noDxqAF4CzqxYhJ18cBStLKM4M7ShphLPNTF8ACyMHU95HiZ13ySX6bwodAQUhE6rAXbYmgTLf7dSo11fP3aVXv",
  "key25": "4otjvWJfuCmXCBY6sD7QcAE4TP1TwmRps4ej3dy4bvFZTTpwNRPbEX6sarhXSUSXuv7sHijREqL2NvamUdGHd8H9",
  "key26": "4W5ZmabxqehKMruCkWYAMao1Jzej5vGhGFBJSGpxAwgbi5Kbso8ZRLoTsXKymg7GLhWjZxe8MxNxBdA8LinKjS81",
  "key27": "7sRcG3Kctmv72wcQFrGvuB2xxK6XSCdXfw2KdwT7MGzi1GcMdVb8CFujHcaHg16cPF1ico6xECpoeAKgs4u1yGG",
  "key28": "5WHoxpkFmDCeAsA1CA72Y1gMRbghvsoYSU5BraawevpNYSDfU8MJHmmfnqbUT4j36NMTKtQ4UHttYtw6JKo7cz2K",
  "key29": "5cpHPW1M6GEn4Jnp52xdKBykrfxmuEmmHb5RWox7DNPxH5qRjd3LqB9Eqb43ADGtzrB27wYj3f7kYzsUkgiKFUnA",
  "key30": "51JVfyPrqgvLo73VwBFxJUhHuDBxY2rsW1hGM2xru6FG3mqWaUQUtD61ckHyMJKPDTsBk5VcKB1uvov3dJcF8vZ4",
  "key31": "66s8ZuMo7pdPz8ACiRJh87Z1ydTrRmrKVWyVK9qNEUJ4tUAnVGicDgsXYpEpZdmu8ErS7p6XPjwoH9YfZrSg3Bqg",
  "key32": "4Q33mn1NZVng9FKNsfAYBvdjiywAva1mBwHSUDMGKe7QkrjQ5GD8K3TcnWQuzMNrLqZURpzpzRbudkL39A1oecxk",
  "key33": "3azwVFfBXzpKpGCpXeXPc9D4jSvssKENBz7XCDjU4jdQvAydVnu4Ka2iFoBLbU8fse8nSPSZMV29hexFTeBhq1Kb",
  "key34": "41mWjUsgKYdFZZxmAobfYmbgzw2jTDP4KB1EaQmVnY4VwwLqgrFSwzqnB6pQC5T1YN5wqPKmua4KQohkkyuA2MoE",
  "key35": "5DJCL7qyhtbh8c4yvp3ymSFpmcdstGXEvAK6qN8hi7Cd3hSwRofDZAwxLyHLfJweGNWnRofY3uKowBrYGvWv5YgN",
  "key36": "4z8ndBzexweW7xegaTRYCnjbTMTFNfucYFMhDg4Kih1VQrupvg3jy6KyvBpTCsG49viGmip4RtBkXSwsfMBxBRLX",
  "key37": "3TdGEFXL2kFtDuugEgrKWGTyKD7hZcjodJ6zgaVPmBNzsQMeGC6BbQpCbiYMtKV9Ss6F9mHoLLJnybN7KSvdgWP1",
  "key38": "4yuuqhpaSQGavMtc7L67JiVuGn3gYwPpEnfWuwdYBz2k5mfXZKbWJNoaR1EyuFLNmHDrLeeqYeJqQJoWiyo5jLx5",
  "key39": "4fL6qKET6DFdYTK9DLvgDGxY3yASCvuiAXfSiL64u4ptqJX2eTpyyQi129sPLkDmNDfXWKzkPUSzVodfRBhymZ4B",
  "key40": "3cDyQ1aBP1G16VCxyNmbwdS1xqQtQ4vQhcovkaVQoomUvzeusDpqw7g31XW6yK18UfKMJD5nFQmSVcWnYZtfHVJy",
  "key41": "4jn1etKuGwVb7y9vfSoMD4dhANVJao7naLFVeqCUCdN4h4bmrBgU5Ry2SkQGMYsQ5NasXVHvcbxaVVEyijDApt82",
  "key42": "4hF3o6RDgKPzRTshDYZ3d8VDNqyWUvQaCbC4oG1iZUXfD8jW5Fe74MDykaYezK2CbsapBGJVCYzVEbToZ539JVof"
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
