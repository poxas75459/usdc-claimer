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
    "3RLhdGPwnggpeXMyESnoNoLUqP6H59GDzrCaYMTxTeB3dvx2qEcCZDneQDNUs1bjdjAjdkbLQpxNxEjiTGqQy2rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46LAgHco2ea2FxidpEjQWHPN8xx32BGJZbgczByKLDJydJeHJBQzJxdwANRptGzqhwjkwNWoxnH8JzWqLDSCnFSz",
  "key1": "5xiBuySANZZNwXcqTJv57thfcsG8gJSs2AGv7ViVypcAAtD1bDSFc4qrCgtCVNihLrhbTwp6ifHayrznuMm4AgtG",
  "key2": "5NAoahYnL8bpWUuXM2WYESUJeu4KBGoz1ucyaM7PHCDYoj3uHUPaXvKbJ5oL6MHJVN9HegoTnFZoV25kc9KYGMsN",
  "key3": "4baqD7tBDVpoa9yheGQz8cL8KPZe3QM61yshNTx7nWEgS74EbkE3vtb6APRhphKv7DLA1DVncHKUXPcLooePq1Je",
  "key4": "mgUNY9gbdG2pU6KqFfr3BAbsrUnseDVrguL9Ft81L1iS3aRe7AUTpKYnyGiC4srC1J41yd8Am6DfXKuRsaoDGid",
  "key5": "3vybgqf9utbfSNmQjTfXXq7fKoe96dTfThBhJyfi5N4pKhYz7yiDMtroS2HHyoxJPe73RtCxF6oj8YoD9mwAGQAJ",
  "key6": "k1HoGEc9M8znLCiFUgTt6bdAi7jFJJLDsRk2y6DnwuZ9xGnhyBEquCwAc5ZayhWHWaSysDw2UhUqUXjddjdNgJD",
  "key7": "5ED2ryBuexQqtM8SE6MZPuHH7CTPYNJAriD1XJJ2o3chAU7Ww6SSEZQBANfCEyx21435FiW2zMuG3oAq6t3oL9mh",
  "key8": "3HwtYdJYhJnSPj3rs8f2sCf88g1aD7wnQPDSL6p5vcbHLcoAXykcdqqNS1cXyHd6w7SfW3qVSxj1izgWCeGFGEu",
  "key9": "UFi97rK5i6ELM1tA1GC65uu4n9nUG5U1Cu5fFw5kPBuSbmyxxtmSDNNxqG4sCrbmmmERfoBFZjEYRBqrum5JXhX",
  "key10": "5WcbdsQ3oyjH35b116fEyo59xG2cBELCAsjFNP5gUHCM7RLCGRZZ2NKP5mwPbyGF1ryaShGND9mTrqKZF6uEdT8Y",
  "key11": "2FGiDdQf2RfoUUyNYvqWqe6s9154mHsYvsS7sXechQQN49BJiaspyAxJ9xbSzEdL54ogLBfHuYxCrGsKhWCpuNh5",
  "key12": "56NDdJpKZJDcrBe89pVFQXpZwipzbnVnUsdGm8Lfy1zWk27Medczxrvwkmz2qwzCPkmv4h5MgSrKtXEyi4ceikn4",
  "key13": "4QjXc6YKiAWkGah5h33jF6DYHzdd7RjhZcfPcXEwpWUCVkuTdFtBX7JAUZrpXFJ7oiy1qSQ7QL2MdQztRiVZB9RL",
  "key14": "4boYB5zzAykJWvbSxxwjsK6zrUESJkW77id865UZQ4of16fscb5srKMNcnskpwLhDGoAQSsy3Jykk8dFH14szqy1",
  "key15": "2ockT5oLP7oFRk8j483tzHAYnm1swfH1t1fUZnm2K2yMU5WQ25wTG3jiciaBYJe5TXNWL4K5D2y6m7K52f1CgVa2",
  "key16": "2Kr9Y1rm7Do6ENpmqCkG15cj1F5rokA6GiGcQjhiLdumney47VPx515LGQf9bmcmDyZGF267ZoRmYpGAMfSHXYrh",
  "key17": "25U85jB5KgyzWd2N4PbtTujJBE2trmSNZGhdixENMJmxNpWzH4eaP96fKiZBNhj3pCWBSBvRrNG39Xmcmshx42kU",
  "key18": "3Ezf8xoAJSogxDmvvRvWmmo1WngScaTocnbB9CUBadQhxZybuf8vC2fzmw1rrSXcaWZCtcmW5QwuRCn9XxdRM7dG",
  "key19": "3SEXsGkWw1BAhohcaWiYD5ajd5uEDmfViHkGzczEpUgEYv8KLmxwyfu6TQL6PJS9r9ZEPoCfF6N9PXbXP64egLM8",
  "key20": "5Gp4SWNtPzSABs5ERcry5wCvSzpze8dNXqwUkq8Y6djgC6ud4fKLZTpXQrj79sjyPPUeNnETbBodB6fDU5dXBTor",
  "key21": "3y8oH6z4FjzL6VFxYkcbKi8vbtmmRxUfkQj1eiymG3qWdwH5kY8wsMkQSUv1Jafqn84zDtqyohjJkgePxjsGDrP3",
  "key22": "32GtCQ52uaDEDcbh3WqRpJ7G4ritVhnPuTD1na1Nc7aGiFrSAFkmhtctdjgCGjXaczocr9Dz1XA5f44MYaoaqGy",
  "key23": "4qYMi8S9Aoo9r3ZVntihGEq5vZTZseKHCtFE1JinEr2NHWY3k1sF73W3MCkE4CPPR8jUjyCRWAc55bQm2odqpnpM",
  "key24": "2VXHzRPw78fYxVXhbryeGc7wVMyXXZyUBuAfEZ3rnWFNonAWPG4Z6NXSjdrDvdPmg7PbNDnpE2ceqYKRPLDAeo3g",
  "key25": "3UgaJAgMRQk4u9iTisrqjpHCcZbeStXpxLXXrvGMaSdmmuWVx8d9w1SH1JJKHorgLSDrXRjajzaawncDgTSiUrKf",
  "key26": "b6svmhUKkB29KP7bjnwNhHpTKZyeSRSHdtoB4ZSnRitqNUErtf8ZKBA528xUapsR8SiHPqiWJsFY6ykYyC3MynY",
  "key27": "455613C8W6Vcmdc2UXBVmL8UgBiH88ShMvjH9aQwNFHx4zfTzJ3EgDXi4EkiXX7EPeXWdzzYLUZ2FL8682jGUXoq",
  "key28": "3nyMFcrGzCtEMKDMGAPV9MqAwXV8vSTDGEFP2ZYWpTFE6d92WkJ6GFcidQkvRAg2VZUvAtk8DFf79fgGrWKiQxq6",
  "key29": "3YY9WvvkJ1TPq1oE5MJ4gYStpfxTzBM4D1PEED6s6TFZY5AZtRwSbrhzVepAXB9ZVuu2zJMwyy1oNjF6se3QeLn8",
  "key30": "4wM61QrSF1bgQdLaq7bUSZyxSUpnp1jDEQAWZnjAM9y1PtV2cBRp1wiVj96ZJkU7EKrVieacyDFbZmAW6ztoZxEk",
  "key31": "4CPJKyw5BMbx2Npbuyiz1m6B6u8cyS4MYXU9N4Gr9vBiwD5jAFTdmbzrtk8otr283GNYNCmoju4Sc4YgWMdN7Lh4",
  "key32": "5ThBmC5shGSuSHyHZCZ6F549RYJZEyAdk6pqygL1pJ9SgFZXfhB1fYs9zK6VzzQLz6zQ4B4YEYznj95Zgwn36wTG",
  "key33": "3XWkVkg8yoRurowseYGKXcEUTozkD7TeBbRhiKEq9T43xKkT2eKhKdG1zDNvtnQabBkmbVojpNQRnjYBaww1UdtF",
  "key34": "3zT7sXwHvJj8FrcoRXxUyV7T9AxK5vkMWDEfhe5ebmsNFSazy1bWxRc1RdeAbZPckvb2LCtk8wGEwfZzuKP57HML",
  "key35": "3sVg9R1hxWZcRkT69YBFCLiBqVqJiFgFk2ywBr7WGmSeaRM5DEj8rpSHP819iT2jr616vXZkh1FxFVZFbgK1subZ",
  "key36": "4LQdBhCrYv8DbzuWtQLQcdYMhTyhwmP3vfZ9NJEpiqcB2Yka8s1foXS2b6c2NYx5NbBKSqgTijNcRRwobmomqHjr",
  "key37": "3MNaZp7Xx1srXDVFagj5pTGV4DFSQtd15TqLseGWBhs2iD5kA4VNt1d4rYGrr1i18rnc4Cd2WKEPyZbjAHp2CpV4",
  "key38": "fPveoDrgeoW7sB7JdQKKtodd1g4LtSLS1gw2bsDPgudzyHtv452DDoS3GiF1saQGgcsgbdVCpf5KwvEDLDRsmM6",
  "key39": "4SkjtpFKyByxxsNN5smxmotnk4qDDdouSN76qH12pucfp8SzkCJEU2pZNn67fu4EFJBWTuNXaZCFcwHsCdBQL9b4",
  "key40": "1ho3h9Tr6zfotAaH2LfjfVbDbtDyDXRHDTecPhqB2QQhhC9vUDYX2SAa5aJkNxxgVZXAgheTbTrLtFuPgAQjA3d",
  "key41": "2wZZahPzPwShxvomQ9TAfdWb3mFt6ivyensTqtxjcNJQizibXVFhoeejPb8tnRSyossD6wAGHsrrKZXPSE9rq9Z9",
  "key42": "5Evam7rCFUkEabCS7EFk9RVHC1axwTEWPpEgwmum1wH6egZsnZPXPdN3yr2tWqcn4MDqP6Kho6DoEYJWLyPZSMqi",
  "key43": "5A4prPk2L3ruhsSUeTu6KpFgbEYPiJ1LzWbYBczGAvB7q2Siw6spEG7fVc1fmRhw6t4bU5amB6UXFuDGBxKExLHp",
  "key44": "41pEChVoR78NknKv6dvHW8HG1rEZ1G5iyN6F3zXbGhDwyWSfCr67MPk4aLwocQQDcjsJZnskthTLp8V2eUZD4G3h",
  "key45": "5hPVUcHr9aa8D9Vsc3uEodFr6hLLAAXj1euWu1GWitpdH5eCAn7pikorjiZX9w3Hg4ZtQ6e4viji3Vv4inQyebDa",
  "key46": "4vDuRa1FPqp62WAeRZH1r47JAfy2k1Pzw1aSq56nYjmb9rc28Mbj2BvDBFcjb2tpbLsTN9W1hRLVyTr9qVKCYMHC",
  "key47": "6565W1RwVHJTjwhUc3VhGSjAb3nn9efJTADMybxvXYjyakpNXutrarQKcQySDJpgaroWxnDi8UkJKovwQGQj24C6",
  "key48": "5jTD1myqWxANxo73iDuPPGEH2qtV9k95HscMBiH1hukysJdLaww2Q36X96M6BvcxS6GvqfwK1p3Vb4o4BF35Codt",
  "key49": "5f5HDseznyygbud5v13oM3R55Yr2G3XLbLPkzW6XXTfKQ8CnC2A9XVQJm4ErrMVfCeB2KzYAfZhUtTnaQ9ssRL3"
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
