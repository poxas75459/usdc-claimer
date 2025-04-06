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
    "4GDNFXWbQmsDyBMydTTzkbHe8nJ4x7vWcCEdTHTvqcHskYG7Aj6DpSTLtRnyuQ1m7GTTQMoFmU1tDJ8QyxX7iW5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y3Qf2xRDFKUpdqe32Kw5FmqEyMYmY1sACFDHPWZDHwfnfyc9AuXsaDvCSvBTnJ6pBdNjy2eE1koqFc1zjRpGyMm",
  "key1": "NkJyHd3BkWBvhw82WZ4BTTaEDQqDGNAnHc1HotXbXDbAcRf8JXr1jfUY1tcYfiuu5mpDKt1KggGcaDck81dxiaq",
  "key2": "4Etz7gvJjZMmTyUdzbE6eS1gfbHnRvuCuC3vQMGXJvbUprMqUDj1bJei2P2mJqinMcY89LEPWskrxxg3quDoSVLR",
  "key3": "3JpLnjt7XVRjUce59tbzJvEtGsihTM7jSmNypLVyJ5jqMafuVMzDARoBefP67kKr1zDnZU1Y51JkfwXBU4t8qpZ5",
  "key4": "o6Ja1DsK1hPFYUntFHfr9KJMYiVRqAyZQXryCUZhCFL4cPPup3Vxmiu88w8uERvqURNcnG7fuuz9Z98RbhNXiDS",
  "key5": "2eKiqZG5oDEqx9gFRCSRAUCcczLRkneB22Kp3L3CuiAwN5Q7CynThgGzR5eYGNcTgngUaCvk8ooARvAbeSiMydSF",
  "key6": "4xbB77G8f5Gv9mM4xZUr3wwYUwwReUyrrGAe1hJeMHLna52rsmWHgNbPew45LKDQd4QnMP25iYRFDC5LyJMxGxGQ",
  "key7": "2ZsQGyaqLhEy4QLy1TA1qe3qc7gvFphmVXx2k7Z5rFp8qBPR8TTZVfecuyPQcVFqURcGyS9CQriscadjzkdpvmNu",
  "key8": "oni6cbkC6eVjB7U4MVL67DcLiBTX64kXnn1BSbVAGCea31E73e4Yk2E3h3zWetDxBg7pASXzg6pST4Z21dE1DTj",
  "key9": "5KEySVdhoCGPEfw7tRhcSc4xLqRsJotcsWr11srvUpeMjy351tgXTpsjxKDwQi2jkUgPWRh3bsxeUwvDCSPujyg2",
  "key10": "5KEf18LuoALMNB5WwU37oQTgWhL8tB6YfzeuHzoAJvGub4CCCAYeTkfY5xB9Y1bTMfZfJAktYqXjxyWsU3R3bHDf",
  "key11": "3FkVswmThenaYdZWyf61McreUQfKJWn9pAWAJye8EaxQhrmn7PQE6Gs5m5gGCPfKxoByaZ1yJYroE3nB3eZYKELS",
  "key12": "BBkqUWjBxsmxKLxnJCS1trgvZTnn3zS634K2Bz8VJ71y8hHQURNLHQR7NRjjfMcrbNhWsys8nmh3mnVyStvLAAg",
  "key13": "24PD4Ez26eRR2pAW113FQip81ksTUZGtm8Xdyrrw1diDN9KimfoaAvu9mMHewFjde96x1kjC8BvHTBhxRNWda7ND",
  "key14": "36Wt9kbKUtoSQkzKzLEVZDQmcXh5aCrCVqBguJmfvKgCJoC6ePVSJ34kYvBxP7e97tzAWKBKXeLXA6Dmz61QtkYa",
  "key15": "4dcjCEbRdrmfLBJapZ95qiHGXYEYF3wzEn2KU5RQjTeZJJWPJLmLLRYAQ5PZEdAop4WocbKrAnmv8aRPvrXdFSbs",
  "key16": "XSkYVoHuAKunDMtqqrhtDrKrdhsDsM2s8jGvjnk6R68Dpm8oJsTkJ6nzj1HKWGmXwZ4mFMGyaBBmDdBcy6KcNPZ",
  "key17": "46TytBDeD6a21iRWQ1fAy2Jf3eMWzCpU3eFz9xjohgHToDu3oMXAsyYthEVLN3DEPWcQraNzw2fdtyTuEqjoKR6K",
  "key18": "54kYZqoLfdzxFGwiejgnu2x9uXCBCp3cX7PKxmvVPWbriE117QVuYmMQ7CopT16GcS7mhFCVMdzNsSgLjmaARZar",
  "key19": "jhDfcNAzS227swbv9HewbKYi7RpckUvHMDuTJmdHm81LELfmNG5P98ZZKMwk6CRoBG5jQEfUdPPNJEP5tiN69Rc",
  "key20": "8BwKEqPwCm7cKTpsozifa2cuRBMexYPe18s6SSvTVMt9sBg43pzi6jpi3n8gCoV3oXJkQPF8SyxpCrwcDqJNung",
  "key21": "mazvkn89hkP7MLQrYBL35jSg2oemgqQq47fmP2ecHFaFmkK29iwATeW8QWvGwehodyL7JnWSUHwMzqETi7ir6ED",
  "key22": "5v6UqqzhTjwMXzidXdYLjvTcg6KNZ4tPHvaSXGYw1fpS4vxEBDFVPrsjLvFNFoYjwynFtsVLZ3Z5qjXZuciENi2y",
  "key23": "31uuLZemybC4pUghZVjFRhDHatAVNKTWLRdrB3QmxZvC6ZfiQGDdvA9p5QjvzNu4P4wFWDCJgmnNsxZezb5j1hD7",
  "key24": "5noiwSLLTArvo5iasjkW5rxSDqt5GjdDoh8Fq84Adp6qLKPQAAiq6dUtsLVmhpypvCnCHCpMPBSod8QjrHPnSTbx",
  "key25": "3rTcCPGR1TKAjUoaqe662BiYSoh2p9LmWBLQ1oofzJ39xy2CR15FMejrPobTHsueGf4oBKAW2W3tbJiMupswVQJZ",
  "key26": "RoUqCRUMHG6oSxPLL86zEFMD8MpzGmfm3yzJ8JrcNstXATZ4yjtE4dCHCS3RywVmuB8o18Mg8NF4w75ZF9CSb8V",
  "key27": "2Jv4HdPbroGUWKAruG53eJ1drWZ5ywFSyTEUbVjfc9V4LrDGRgbHxSGoyc5qfHZFHfWRMvb9568qUw81H6KRdmHA",
  "key28": "1VszmuZ7sshvhwyRKCkVzUXhf4ws1f7t9JvTpsHJj3cCUe8gSAK1ZpusVgKqVTmLu5U6RErLDd47THkxraxJTfQ",
  "key29": "yiTvDcesoLM1RdinNKnx4nLc7JG8VymYBrTxfbUAjQYdDyPu7x9XtTj7BbUzHsHQsiD3rSPcspgq5n27551Qiir",
  "key30": "3Pk2rgDVCoXgCvBAZXKMgSJ9G5wUtAuUAJ8ACZXb7s5HmMS1wcumMKVQ79SD386RiUVmwETZe21EbhwG9VMrbc3A",
  "key31": "Y3nvdNNiiPYEjUJkVyoMyWHgGi8iENh4VMu6pcFuAGWntv9ZCnfLFK518QeyWjbMhGtCdNFV7fLZvxFYSDoAEhH",
  "key32": "4MBvERov3UrX4MNekw4Z17ibipFkzUjr3MXrPRXhiskVxZxumDhxxJWPYUWyT5qabawVKCRNYmCKLyraivfTZmkQ",
  "key33": "2R6Zsnv3JrqTBbvoGYTCXv5LhvZgwivXZmoNo7WX4b7VCVERGWpC75yqdXsQj2La3HgsW6Q6DpaMf5gFVTbwu7r6",
  "key34": "fUhxadsVH13SrXWuwsgHnijrBawE1MxqbjznLHjy7uWETsZTt1WUy5hd6yxJwUtGE9AsVBNDREbpvUmC8ug4SNE",
  "key35": "feMiQu9fHFkC6MedYKn6cE8t225tuEFPJVxiYdy1ZYB6zBJm2sFaTxPt1KAAV18kVkyUjA22vMjUu1huUcaEv7X",
  "key36": "5d3DbiugF5QERzEpB3rgCqB4gXk8CQaWeqSeicoXQDRexqyPwJeif2gKKCZCdmpK3tu71ZWTvJzffWehivU1fGiq",
  "key37": "57sWGpgmmfeC33h7MSK8ySA13vJ3umEjw5j1idEKfN1UoWLArcMiznuZo1Feef5v8qZmf5XCP7Bf1P8NSZBtHYds",
  "key38": "5ACHggvto7fg5XC9RooazFJ537fJfJKnPCDSxvDHMKCXH1StiLdLphF3Pxb3NVWNqv5WZbMVUqYGsfqsW1UrqnQK",
  "key39": "2CggTPDjN5ct6fytyuENMdfutLsKpZ3jLj7RWD4B7kpfpZubMohrow7FqZzRu2nbHtqwoxHJQwofsMMJYArpqgi9",
  "key40": "63ykUBGoM1Nfmq5TX2iWRWoRQt6GX9FGYEgoD7JN5993xEDBM3nyks1JCSpcTqV3afjRnunfr8iDTNxr6EjUtsm3",
  "key41": "5eBEH1mTUZ4GyT9u47NXBFoubbigD4Gwi1uFKNbtBqyN72ycgso8wGFZEDQ52Vz7zutJtBi9QrkZsSS1kwTkWQHZ",
  "key42": "3UpwQDxkr11YfP3iNv4fwCwPX4TQjyhzY8FHFi8JAUXPLqBbawRNNZZuibpifZy49kRj8CfF1hWn9HM1up1AzDNo",
  "key43": "4PpiBhJQrGmAe4iB8VBcZkmxtwLf3F6X1VB19iwxw231itwCVzFEY2Z8YKnV8KHwJpCgVcxcPWWSieE5zD4Y2DwC",
  "key44": "2yZt86WZtxQkxk7yjMbq7gwbJphgbraPhdUGaJQGcT8C1XwgHC6oncebYWM5tTbF67AWWDbVCwt3GBmAnRJ1xhri",
  "key45": "51pBgVQNj8C17g3Y5dvZkHTFZN7a6skKiuzzq4CCuZS15rJn6MsVjEyjTRXAEZo33B25iiBEaZz2zWY9f4Z8SP8i",
  "key46": "4kS1gX4c3sRLq18hud8hPy6BSQmgMXN7wYfqVoDTaGYLxuzevE4R7Q1Tp5MQQXaVDuAnvh1yTC7qvxJzb6cp5z8p",
  "key47": "2mGdVDh7feY7EiWNMyGMCkHEaC6dT95QCTNkbokS6vLz7h5GdbfkAWRHMYiPugwB4CfTTzaoFSE96GRww7SFeGnr",
  "key48": "5c7C6j3neQbrrRQzBHi616tSALpu5F8pL1XAYAZnbgyepVRjWxYeoVgzNPrKAaMrMBpmowDHeALXmjuVz9WiAc1p",
  "key49": "vL2sbtQNMiHJDxXYVG39XH676vXYeaspSX6rFAj1c2thPupzyoYsaSEN3pabdfZpC9Yj6Ft6VJrVAEfxG9LsfuU"
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
