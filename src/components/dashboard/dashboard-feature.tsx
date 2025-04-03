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
    "3YezAZB5GnupZzcCXR3hLGVPPg7T98b6Rwyur2hvFGWof7tKJmZjh5U1CqXEHR93PYWBQB3vahwkJiCgCLvhfZWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MvKmT6JNnLDt84wiyKbdum5B8XVqHt7o7rzgap7oB6i78JonofYysGKQTpZUScQPmjRmQXZbUinPNDBe7nQnYq",
  "key1": "3LRi39BkdzRLenUi1fVHPRw4dcxfUzPBQLf4AgCBSeyKGjAogYJcS27jYmW6XDASsaxmfjYr4AxnxavumgLseVg4",
  "key2": "5jSMZSefPZnPwjzDcwsGdSM9MKjKoiNFnjuUWozUUyDh4T7xqADhaqUcYBx36Q4DfZiuxk7rEA5iETSFZhE3n4dn",
  "key3": "2jqEJnWi99HDeAzUn6PhJ1eT3PYyfE8WWBaeD4BwyYkDvhpwEiRgfBYuCP4BuQkUpDn273r6Qf53tXJERo993fkb",
  "key4": "52FcPtXPAaRSVcffTNZWVoWytvCUtXSmwncF3sD2Dqb9z3tKp95dSYyrDVYVuiX9fV4GZ7RbDfpaijVrrxRCor3",
  "key5": "5gJE89EXXPwddqvvX8GN8CnYotE1pbgPmCH5CJ9pYvAN3vHtdGJAxHAmAAcCdrxTzBebpy7Ux5sqko2ouDpE5ZpY",
  "key6": "4mK7TT3C5UxPYQG7DT7ErXAaP8GHub2TSM3wyCNLQwSCDthaySrdnFnVu3vR2KmodFXh2tcHvisz6qp9hY1qxUHU",
  "key7": "4RkKwzsizkSsdqeqcVujV8cJ5jpjXumJw3PdH78qaZG1Z66xWdsjUqTZPLCzXmb1BHBGsSYXaLTXEEb8At3FUiZQ",
  "key8": "4WdD2edcXoZMLFZPx9EQL7bJnZTCNiGkUGrYuDRAWMDsnK2tfDhKGS65rbkajeLkRSgRLeEySGDs4eTekHRt9jmt",
  "key9": "1DmBNg14M4CJXrrxRmw3ZEQY24kdiQbEdZgYSA17WMTdYPLNs932B9NFQRMeWHFxaB4eXhPqqrzyKDsQMf9yHuG",
  "key10": "3zLN8sU8qeMyJUDheRhGmAwYF3uzwNBsSXaqNDcUCcrNhNJvhKKDd7XDLX33vXghEWnFA4EdgVsvri4PH67qCNUe",
  "key11": "3ASExYf1Lw8Rx83UrJkGQ1ipyjbB8JnTHoUobEvs8eK2o1Ujiu86qiutdj8rJJ4WoX2mcCddAgsLxoRav9mcUZvB",
  "key12": "4R9xonZvDjLib2e7AdK5GUst8bqfcYX4YQBBncWturRXXSmgo5qiqk98smCWk6s5L25vHvLGLoxSsukUPPved1VL",
  "key13": "5JgUvdb5btVdSNV2cGDPjAiw2jMaUgT2VMFhr7UNGabzKZBQSHbua41tcNofWB5CyQGuGPFJnVhEWcWZfDLE94gC",
  "key14": "498KZEcdw1pTk2dCMbzFRxohiHBk8eQRLLb1zgM1ntdJVdhXSheQXZV2H9NgYFpGkEW8pzo66scjUjVEATxkMFMt",
  "key15": "2o8q2ZzSvXbx8B9df6Jv8QYWFesKuBsjV1C2n3ZF9MeG83GuYDSrMSXRahuT5bD1fDLgox1zmtAsMaw6JghKCwGf",
  "key16": "KLU5TRK9AP5rPMLGPEpjFh7zwSb46EiSzHh1kyAbkQ3ksfjpUMCCriYcRLzy5N9hr9wvoLoMSYnb9yv3CnT51bh",
  "key17": "4gt4jL1tk4kXxoqzMHLDFLFrbiCfzDEW4vRCyjphchzZhBDD7vMUurMbkJwt5vF1YZZ6FyS1znLtEXusLPWJup8f",
  "key18": "4gQRtNe1w6s9RZ2XFWHrCJkC7ey34HrSSCYu6Qv5Sodu1SZfu3oWnPfBUbBv3WmPtT4dVp8iF8tA9mtVCjX1u22h",
  "key19": "6mX3fwcggeVq5LKRNZvBu4b1MiayNi38A3VyMt5ntay84ew8rMUWJhQU8edK1CZws4DYvoA7xPt2pZQs6iPzBCY",
  "key20": "mmc7PiVYpFeZnNToR9dAcRqDZu9yZ1ioBiy8vSAmXB8bRgp9C8WjaFuyuhrk9XUwTi9ZtCs3ERBPj8tmCJX9rV6",
  "key21": "3qgM2Ndd5vnyNBWAocW3LNiiWpU5VBb3R28YfchgtS9d3FDsWGxJ4DpsrcFRGn5FhBUpxyX8Mqqf1BuubNNp3bqc",
  "key22": "2AD4tJL7ZEx2Nz4FNdaAko385V3X2PN7iEzimVzKewzDL7JGxCUj1JnMTuBG8sGRiJyDpcemibpZhJMPtnWWyCJp",
  "key23": "4g3TLAMFioDJ71LAnLVBvcUzFh5yTSMfpQKDKLcF94vN2esPRdjbK1ZkXTLCHKExj2QaTax8H1LYdCCzf3UmdTGU",
  "key24": "3EBr4hJcv8QbDicu6iuLuMhmrewVfGJq6Y51KibgT8VTh21ixbcJzLdtmn26f5w9XAhcpkdFhNMNwtFv9hqqduSd",
  "key25": "3qbS3TG8GSE81NyJgVe72DcLvQEBxbsG93jbkm2JhApQDBRzqx9qDJD6BokkuyvBVjs9y4S5gXWwnJpDgRXxhSTX",
  "key26": "5mKyi6DCGKU9KPZZQoTV7T1t3M7Dv5HYwBvsudRmK584deApenMDQbAhpdYvFn9B1j1iotiQ9T4yw6MDzz1eiU9o",
  "key27": "3GRKYSdX8LuPEaL8VTqTnnkhfNt4jsgGACtWjAMGTmvavxbQHSEtRRZbgXeSFvrSqYaotSGuufkVZ7tJMH5KyvWz",
  "key28": "5KCbGZKHwN48MvwxtqhakD8Y2wdDj7hS8nNoA4g5DaW812836PkLGbYPv4htGgtjCk8Dr84gQVz89TfyaS7PxSFX",
  "key29": "hSiTgT7wxELHaqQsTCGd2U18MrXDykN67X44ypyDtcCtGHcRKxQUm69JcojvDjdHJgcP8QBpMMs6CeY7EXh4zRX",
  "key30": "3JsRRrHenWWg23Be5Tdd1QC8AUtw79UK2AbUG6KV2CnG48nc5FAoagjauK3nWzsE1uHew78eDkcX8qJRy23zMoTu",
  "key31": "5TFUQ7Q7Kv9myCKGvkqMHmsHdFMejsGabt44qS1BR7WKanYPHsxBtYty41RueF6cdtBcZhHPDXFtX8VBcc3afxyn",
  "key32": "aByxYmLA3Q2jSG78cEZ9CcgnR2Mfgu4ZqnS1QKuYA2wJH74Z25tseMuZsmtLbakXSexDYWSeSBejWvaw8FqN8PJ",
  "key33": "5wpskaZrqF9F8YeXWqsaL7b5pPVy7r56edd725DmsZkhpfaYbpfkPVK7x4zf84tpfaSWVvvr6isyMvjoY6B5GFsw",
  "key34": "CLhioqEorAPWvFSMEwcsnsa1iTttnE8aK7BX94Mm4Xx9LesvHKTFzq9ZzuppfQ4BSKSAngampVhsxVRJoq6HDFk",
  "key35": "tx1ZAbNMjfwyptr45TPLybQAdDKkpkT4hMFUV2FB6wXtHEVBsCKAgmgvMe1rkLX5ZDThCqv4okWgeYndJMpz9P1",
  "key36": "5yYH5RxUUMUQDvKr6PiCqLeNFZP2kPMWya51aMVBXt6P3u8JfbsU2ddNPSwcZ2Gi5WWfjEYpE34QSH6Wo1KqxhQy",
  "key37": "3m7PjayfYzr7v8D34j6XyATjjki4DxH5DDfYDrSqqTheV6LB8RPYtSxGkoVQUeQLFn9GPmzVkVDvoJEUKYYJRYKY",
  "key38": "4GACpRyjgegbZcxRJSsFGTSrS7iHRr6ZVxaCqw2AkgLPSAYD3WseaEyhsPf1Gr4R2xiiLkuaxKgNky4Ans8ZKhS",
  "key39": "4Ve3ZweZ5La83JSTbpCLGVa5uvicxmUQ8jMNha843g9LtfkPh9Wn987KBgY8C5pwHkWqXx2tddJ7YPJX2g7ovnBu",
  "key40": "5Yo742yqeTL9pifPWGh3sHfnEjrytQrEb7guJbXnqG1whZ8SJzuG92nP9mNBTEa1rMmK23dHCH9sfXQVsCqSwjhx",
  "key41": "4zHxzyqARisS7CCu3eG1hjpCU1f6bX2GQewEEjUmWpPANJBTT2VbMs782LuNLBA4RQSdYgf4xDasyC2foov6VdPQ",
  "key42": "5ic8B8gPmS32sGffhwUYHGSmJUp28qrNjMzpLRemEtrGgo5tNWYyWDq27SHAEvidhTM3cnrKSViu8nvYpTeTe1t",
  "key43": "5T7L2LXR6MkeezLbkmzvBGPBHyAtif2QEdqh4Q3R8VgivQYxzHWoSQ9Z4bFjMqUeXoDdYQoRk2LUYtgV5sYxXUwM",
  "key44": "5QDJVc6fszywL8G4XdKHXcySrwDYTMDgm9pPjNqXKP6dp2RQNsikaUufK3nX8n9KyWeMpLosEeyXakq5fM5j5DFa",
  "key45": "4nFgbRDZNjPK1ukeSLKVahiHn96qTbEiswnqtcQz4DQdTnTc9h5catvcY4pvqaR4QeK44cdGYC3FgwuccQXgCocn",
  "key46": "22xyQHf9x3DyqJz5yrgcuaJiiayCEYWDi8hY3BUVaRQVpUTsffVzhYxuwJXaoEp851C1fKKmr1epHAcUNkEyPawQ",
  "key47": "4hkAE7EYxJHchMUANcVKJzbGEsoGvMtJC74k5941xN5wKE69iR3EwELwCPEeJ32rK2of2MwPPqYa19myq9wS7anQ",
  "key48": "2d9jFZH1Ui1PFZu2v3QXtohDDkxTTXYDrQFLCRYKR9FWiaADu38SFFJvLZobKFTBEaX8nwDaqCJRoJmCFNgonTNL"
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
