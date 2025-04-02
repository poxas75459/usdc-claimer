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
    "4HymXASy4rBoWpxvE21tu3QTXx9KDxex6cs4WgWST844xmbHc1MzJBDgzfKPvQi6m3GaepfNPWS19VmzqiiTtWVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Cv5nzPwpJgtMdGV6bpr823R7mfmZPGutKUnXtuJBczsY97vFcmKBo3k8qC3vd51dyBRshf7wYBCLPVbMyHGDtT",
  "key1": "4w3dCxCWFwgcxsGKAv51wSv6dVujd3NdPQqFgXCoeYAuwFWL253L1sUBZWbEZJMqY4tzkh1btNeahexpjR69JMXY",
  "key2": "3fUSH6fmctMKhkpNrMjCFvYxqTTSBKd5LbnMDT13aKyrsXVdm4imYqAdPrL2Y5nku9xqLz1972w3DLDRLfmdQh6r",
  "key3": "4xPN5dHF8sXnzPNX5QveT3sscLAYZtR5WYNkrLmye7DdGGW474Lib16BGaoCEgtnRWyGYkbCgRw8KeEe7LLqwXQP",
  "key4": "5V2VhAVTjN6Ex8yCJWoBEkzFQxDx45tvrrbx4Lx3pMLve1BDXUj4RSnP7PKG8ki4dCBoDzW4wsDHeXP6WFUqdyLA",
  "key5": "24dFEA4kuffQjjbsz3eCjfJUrEAP6WVLUayVdrXg3pCNWEDBzGX2Ecz5bVPmgrZpoLw3ui9uBAszwWmgmJKMqZJt",
  "key6": "42kujzpBjASHgVj6zcdJydxw4x3Sh5Dh9GKBy7V4TAbESNb1K4nmz3SPmWSCjyKkNET6T5vtNEmPbNmsy7XETaw2",
  "key7": "2WuDpmpQxM7SbFSqTYajmXUZQWFdHD9bAw9vRoUn4S1k1MTsxfY19WsCxA6JaAV4ovAHg8heSSqb3ogpaP2CfhBr",
  "key8": "3hzDHqEEc6eSyBoXmwTZzbn6P4LCmqwQ7rusNZbdk6SxswjftR2XtbE7ZkBd6WMjCDyoeSyV3iNETT1xaGf27RkS",
  "key9": "2LZPH3uYBERfiFup8yMLEZWTTB2gdrX5Vuf6y89L6iMEndQDbvbXavtXu2DUkwYTjgtLe4Txj7PTGVoJU6eJfnU1",
  "key10": "23stVAiusdUgZGUTNTbHeoC7U56YWwzmUYB3UoD3qsVppdKXd1oETA6Zo15vNKwcjFqsgF2QqZv6rDyEeWLs6EoX",
  "key11": "2Rmh6SiKx8PgLkntsXEFsau2CEL8nJSY19jepczCrnS2bmCRhzapWBCMKLZUaa4HaBJxVbStg1FY69YXcrCV9D3s",
  "key12": "1AwG4uN8Zic4jsaHt4CJ97JPirJKzX9Ms1M6hzgD5pvPfA3W1CVRbdKr2cX8XrP6mmGuQKAq8iZRWZw965rDQUt",
  "key13": "25uRkdSUtj8qJa4MuXvYsLoUVRxdyXhqkAHmKgBMScSqDPnareWgspNxvPncE736KEfyGzzWhKEFadevH79BddRW",
  "key14": "vrhPDwrvWEkjbV6zhgSKjpX9tx23fWBgJ28uSHxZk9PmkhxuKpQW1ntCZEWNogjvCwAjxdpXWpN7TVthCeGUxFG",
  "key15": "3T2dYLLKuc12MyLRBcjvvMeWGAgjkSDYfUFFV4mrSM1KVPoRNvKNo1LUJJtDiT6fcgKyxEvHEkHXC6xA888DVFTq",
  "key16": "4RnPZZxJC8x32H6ZdR29Hgnvuwbx7tRmBENXpD38nbntiiZFBJbi1YkoRjAtCMSKyzrEpUBe4xZzCsvZQUwkWCwo",
  "key17": "8U4tQmfkqTJPpdsf93g3axR1bbTvCvW16cQrMH1jybW5Xof2ub7aqP3XAuPQv1FNnLtMCQFMrej2nTsbSA8qi3N",
  "key18": "2XVXDbzhHj22rxLs9iaey8yKp6Frr9iwtoV12br2RB1GtscEP7XhxtM5VRsVAQLv8RqCX4Nqs5eCA7Zbw3ydndeH",
  "key19": "5YbeDXLttEgSzGyEgfpRz5jGAs9hMd8s9HeQosPonJwUwhvwpuVPdW4ksXuF2VggVz2spRTwJUpVqqozeXL1DxuZ",
  "key20": "vnHqzJJXgqhXDoqujjLvpKKE94Bk1WHrKisxu7g1TQNUK6uBR6FR1XMuFsNBRzkyZAY4yMS8KeofxbX3BNNj3nM",
  "key21": "QZMwsVjV8rcUA5ySwxesJX6AaJmPRHerpDoCo12bSTWJ3xSHgc5cPJ5AShUbUhQB8Wqsmqfxa7x7e3rwwxTVWkd",
  "key22": "TSsd939XR5HNbjk4uBBZxjJ468MY4NotafS1zar6Vph2sKxEL9wpiqBVMfNq4CPAn7qddNMYkZ4WaeoeSaGqhmY",
  "key23": "QFoDiHZowKhzC3pyvU2fjhTdS9mvtaEz374YFBmxGgssL3FMQDzmqNzCrq8XSyWMEEsqLieL6aTLixMDWeY5oTU",
  "key24": "EYgUsBRMzZsj4d3fYvvrQH7yWTPJwXVjen8Cc3mQbrJdJMULVvkvYfeLMbQT35kDRxiiDigGaEBQ8gvTj3Kscu2",
  "key25": "4rUekXux5RgdmKma2SVLyHQmzczyQZZi3BAK8htZZ6ULrpbpsP4xuHwfki5t2Wom7zfyQ6TZNNvHzFu3AKMw4gCW",
  "key26": "3rs7ruhy3E9fYJq6yG9T6yZwZJtNtj33JR83A3Tm6JpsAoKfe2Cwrt3C4WCHgEyyzHPYXZFNee5tYt53MapceSSq",
  "key27": "pNX5scQ8AY7QGBCUQkK2vNgLn5pktPg5W2QPWSBJ24q36KrJYMqjyhUdXgBynBnRJksTovRokby8o1Xm5Q6a937",
  "key28": "55M3ZUXo8bMMzNrf3N4wGiDB6UvANSiy1afLH8oqy4m4zYTqzHAoL71dgeE8xuHS2QkAwETyMvyp1ZWgCnHFVUXj",
  "key29": "318V7hj6XdSmPw98FndDSBEf32Z8HNDF5Ta3FS51gzvXb2dP89TPEzT9gNpGTHa9dL2ZzBsquF4ZW59hP1khoVNr",
  "key30": "2xtWW3QShMYLxqW6YXpQxd1Esr8QVbvUwnL1qJAkxDqBnmcUVcNa7ueG2Z5b532T2dMwgSkLDtUr3Xu382cWcJaZ",
  "key31": "2JRoa4C2y1QALPRNe2KAN9hoNQobKu1fKBkS4t7ArbnazCz8PjP5v9TK5nADhwgRaFxBQFNDspaSWV4zprnpGYzk",
  "key32": "4uViPouHdN1ws3tWxAg2vFJ8JJK3x62972ywM87CJH1aDVNQjWZcctrBaTKS1bpyJBcE2jHbvBYMXvTbY9ygqnFB",
  "key33": "vRTpkhAbTnuBzkrxDztFcLEGEvMnyyjDfnpoYWQQnDkjrecxZk2kBhy2qscWuToV5Y5Nad2RHa31PyvponGBaGd",
  "key34": "48UevcjzYfriv2Sh9TBCY7jEMd3GrifvH1g1Kp6t6t62X4yL1zpgHh2UQ781RkyMw1Kd4nVwCXpXztUB4eFxbzsR",
  "key35": "3iiwGFFTSg661ctv4aHZ3hQL1eBRZMW3cQrRPDPmDm3Udrz2iBXsNoweMfnxAPhi6PBbTvLd3yaidJVbQSU8SKrS",
  "key36": "NFGwqU7WgtNa2TuKN8Wc79s39fUqEyqYRbGrB7PUaHSYbQzJYNHLmQ2ASiyUdqNfQ6SpyfNddjjUDaSLrMRaxC4",
  "key37": "qwDETYcNxnjvw4NJAeFmbWFyWdANX3GQiTDQC1KoZZJvqMhHcywoUNuMLQgKrfd6nCspK68uksbFo2mK2SepEHE",
  "key38": "uzKQdBVt8dJn5MSe7WCTQb6ubKb9V76B9raERGEqPC2B2RMwSzTnPd3FrFDqQCuFQs8LBZcvKVDbyRDHBUHv1uu",
  "key39": "3Kub4dEZcAxomDEQHLsEjsYn4JaLgA6tWHtwS6dNCQ1gR54Q8pJdtkqaiBh3YKJR3pwUBnfbyC7gaGyRx84PrZuP",
  "key40": "4T5q5q4aKb1hYBamove5oDqVhwrX9hBYAMZRvKcDLxoY4nM7FLpGE8ehqJgRZxtLZs2PY6rEzkMPW31Qt3HL2ZnD",
  "key41": "4oDVuMWZfZTG1dsNbvu7UgDTTpD4crU9cr8AJKjecxHTSshLT1T8HDbqt2mWGLsVm3cp4s644Gp4eLwLniJUKt8D",
  "key42": "XtRZhBPGLqdsjuFfmJH13iPwCk1GPz2dTm3jpV1k8Y1FdfP6p2GAtWtiUfAUErndu7hC7JXMcroucMFiWuxWqPL",
  "key43": "28gLRndQFzVhjPVE9avRVbd7quDxC4QLeoaapUafSGUVop9ZFsrdZzqSTG2LmL7JhUuYCPeJdk7yq8P6kbha2b1S",
  "key44": "MHxW2EbxPqocPmqx4BNXz9Ls4ZfS5Q4ZFc84uDpYP5GF4fZ5VuJPd1U2zL5uoYupQUANMSKAacHH8yPcd8heCM9",
  "key45": "deR9byAZCp86nNTcLPo8U96nVZEmd9kC4iHPu3AH2o82j1nu7aT1gkfgHX4qoarQci49QZFmUYXWEG8EPCL94Yy",
  "key46": "3rSYrRFyvCtriLSY9uodqJ5MYymiSCkL6WNRKYYqDzmrBEYzcr4XeBX8naHXqExobysKDebfxvos2oiftGEjF9XM",
  "key47": "j2ptBD7eVvJKNVEbmWomKaoJRKQeAtDKvFziDrSrMZvimhFh8r226Y1jeGABuMrdVKtmCgB2smHQ2tjyr5NRHhV",
  "key48": "45KgxzLnUCyaQ4RKVRYLY3w1M2pLzsE7NbELvwF1R1TFiphU7KJPM5nsxoMjQaQaNgmsDWZ8jXsw4ZrsneG22ewc",
  "key49": "2dEJmm5ijSTRBKsEi7ZgkZdNVCTozqDvv6bSabnB7SfLP3kCpZMvWjJnndAyjHo8JWuQmfLpd1xQ6yCWYcExqYD6"
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
