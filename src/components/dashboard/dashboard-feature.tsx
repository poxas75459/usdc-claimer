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
    "2hATU6hNH3FB1iW6aMN2mYsnUEz69yNAJ9FNYnCRVyPQtFdXDBvQcWWv3VnGFSVk83eybUhfcnqejoRWxAYLLRZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sCrmcPeYnWagWbeNXSwybCWv7LDqKZWg34h2XXX93vdmFwovyKivJBFpdB19D59iBQZhM3c2EJAJ7AqN4UyQTEa",
  "key1": "4YP6D1Fo9yvPr18TJWbiVy6X89wtyWaXYa1xZeP4PhW436shWQpffgdGQZ7JC9L8kcxv6QSNWZXSShFUg19WVL9L",
  "key2": "5JLZJCFoQfhvbXkMtUiBUjy21bMs5yy3zXXat3YMuJTnu3e9oxMk89AB4iiNpwjoJxUywcfMwNVR1bFQcoxQs8vx",
  "key3": "61BKb3zoYuj94rVd92noi3ungwjRTUFLAXV2yLqzKDtQWG3DUwcHFGkqxmUiETsNkqfEBWFToc2EmDMfA75Mnh3W",
  "key4": "5w5kBuVaa9xvz4aYLr95YXJ54A8BXD6QUyUuSAMEChC7HvSeh5P56wPha9FeX9rdZhhcbvFm3qcsiU9drX1n4i2L",
  "key5": "3RZ2DBS2Bue6AuRDBJFNBa5bAY3jCVY3KX4C9AhBHUdJpP5uxKf76qxDJajp9zWjtgaMcXA1TgEzwq6zhK7Sc3om",
  "key6": "4p7tbRyFjpbaroVYEB9iayA8pvh5JxfaxDNndc4tnDrGQPrCak3nqB4u98Tup3mRK2t32A4BTxRp8m2Wq8BtMqoF",
  "key7": "5R7WD1ZAj2qhJGmNWN4FwF2mZ8Dc21EPMzWN1YKQfQgjU53S8KaTxriwPegdQm13698EUfsuVEPEb25awEaURYHp",
  "key8": "3cGG4dNq5U6kBpJgabVJNdicsTDULu98wA19fhQX1JUvhYPezC8kX2G9dDrE44cDDWf6t7A2jCHHwMm2e9MRGLjr",
  "key9": "5EY13bW6areFfffXRcwANTAV67jhDxLSA99UopVd4uzsFPKrqCKcHrmkxwhKbLnLgBybEaerjbXvBDUyWqyJ7eos",
  "key10": "4BP5XQaWnHKZuwysDiBYWH52DQ7WbCMi8xNa23YQLt1jT2eLP5JNTSAfdWUmzZ6Lf9wWdWHijwQ3bqJEneQBw1AA",
  "key11": "2U38uHhVFUq7t59q4VmcBJ2EWnbGNYm8xDkpTmGBsW4x6bMb3bs8E3hRM7xwZ6qrYV35PnzWEBs5PgJeNFm5ECkg",
  "key12": "5mktdFgJpCABt6bSYgPFwedLEcqgJRTNvhKadLyWUUsW7gpBa523akyatoRvwX6jtRMGBXN3Xu79Eqx2GKu6gJfh",
  "key13": "4afKEhXCDcvkzAKE6xjgSm83Ywz6ZNtCpVEJe7VejxCboX5CfmHwWVg9GB9wjqcu2yL5NxJisUYMcuY9Ea9ivcBa",
  "key14": "jit9tfF1QwRn7yPzauFRCGAmtioTwekTpvvCGr8R7rPYvt1YEFKPi2GktdicBTFviX2VPnvtJZBSyYmU1n7Byhv",
  "key15": "VBofaJU6wpNV15Gge2crNsfy3Sp3xSFqz7qakHpv8jB9SfPwP7qK3CcoxJNuvVHDwshNAhvyksgq5qFdDW6XXZj",
  "key16": "4MKF56xVT8nAW5fLk8ccsp6GVt58dWZmGi9bGPPZsnVEAJNbNuCoHkH11oYC8Ztwq8SAxxvGYNrmYWeQMTsX8wHv",
  "key17": "3gRoG9KwPnpgfi6w5pdLMaBy7dfJxNZ7PTbhx4C3PfzsqHBYvpKeu77TWLKLiwiqJ9WjPNNW32f7rRmXYZH1UB9z",
  "key18": "qQToYo4EZf9s2RyrBNiszyLav9p5zYXS2sHLbMM8rNwAPRMtn8KNFPjVk6t4XpQB4Pz9kpF6iKV7mupLYacNVta",
  "key19": "2MNMZQ4o2WZYFsqqFgxnxqAub8V83UVmC7LfTea29RCizghQCdovUCVpakdqSsTY91pWttCSt15Rhucg3nJVrVTR",
  "key20": "4yY1cndpQjDiwgwDqiCNdD5Rpawk4WWnae5hwSBtDMZAe4ZBnfuSzowZYq3aWdLGwgvykz6CMzHEmz9HWPCDgNAg",
  "key21": "5R429PWbreeaXMxeynvGuXjPzcxUg4khfpuhcTfenJ8dG7t4AB7ZxsodCJu38QWKNMgBy1FWJAmcaATCSKTjp3CX",
  "key22": "3EB7QBLWnd5UVCZKeSy6cmZYNqCA3qrMzxCc9E7mC6t8PD2Zrj4VNMjfmTcBGuhpvFh9dipr7WB2UVYh1ge3nDkz",
  "key23": "5LtrDLUPZ5Fv7HFD4vPrgmNtd5FQy1YbQXrd3J9SrPRqEHWQFjovZtURZeGuD6uXvE61YMnzdQc1KF3uGknDMmTs",
  "key24": "5zLRwSBpYraCVj5Mnej5KtaVnzQ2touV2tREKacCSdfFbZ5GrTDard5X417WLMheCny6pVXFtcM5TtnAp9yaTmQk",
  "key25": "2N8NJCR5JgrWHPVkPafDRqFMYGLwZYY2QhNKRLwErtted8ouEZUvx9xYAAmqbbickMgczoYamBU24A8znXRUkrHn",
  "key26": "65mL6fJvuEdJ8hmyWGTenoA7xLHnVjca2DDnzTEoS6hkEbUnDHtvBCcFjN7kXPfXpyUDaq5oUh25SG8FyWiZ2a4M",
  "key27": "65Vnbmpz4bw37JDXvXGkPpKkBtWWfptnnqe3ds76jCo2YsHq33oANx2PEYZmSY5ascW9y8rnJgnAd92vj718W3yW",
  "key28": "18SEAuMU8rHR7KrzEjV76XmGhceKEpQoXGH4wbiGgkPcB5tQzFAPv51WvRtTHFBsy1QhxSMPwyNcXTSJNZghwNB",
  "key29": "3U4YmaXcqQDDeddXTA4vm4UJXrxk8wvLXBy8fhzCAw1TazFBc7giEeqdoCAwt6SdtiVNp371HFGscgHXQ8frCVQ5",
  "key30": "NrpPqj7gjFjCxCjrb7PsikTK6zZoyt3oagvDy59xE8HTShPse7FmGLr4J9tbdYzvvatoRWUvTdGBZWML3ZoPiJ9",
  "key31": "HxzYT4GBn4sp9RRkzpcoRg9eFW6kwTPFi2Vfm1WQvAVuEpm71wCgY5Kwq3JzCUbH7Wtfiw2Zbehv3ggpcmWi7DP",
  "key32": "3cfx8mRY3crPSbFXTsSstfBg7y9zCLYPhA5vkeeVUs4mJwRpE2pCwEkzmGqtfpcTaK7YKhc5SaKGATtFoarKUyFn",
  "key33": "2LTxqsBoJi4XwMJiM93xHLJHAw7ye4i5UNJi4TnRrEdceU38egWANbRz3URv4PapaogDwHH2RmUJjypaWn2rYZGv",
  "key34": "rxMF1tDQw7qd2VoJNLpn3oR2XYvXLFvH82ji8AJTDWqdiT5hZaoPqid1PG1JyDFTCe7yorN4SKzH5LGzRBYwLvQ",
  "key35": "5YP8dS93SSup2FQcUaMHcCnYyVxFEstrRb6Yud2BMa3neCbnJg1gTWY37sLWcEhwRpbriKH6jzmj4zy8FTsGPTSb",
  "key36": "2TsjEeKNDyXMecDeZP2MvcCix6jiq1pRyNGmZHTHM9JsTChvxvizHSa17gy6P5Pw59goA8AuM7HpdML3mTyPZUAY",
  "key37": "356sfujQHArs98oYpPPwdrQHnBxFxKZKCUCm8YrT31CNPpDm43RSDuc9HVrAneJYkTzyohkhLQRtuPZT5C1u5Rgp",
  "key38": "2Ujhv7UgBo1A5F2Xjifp2ki4bxZp8eMp3nWq8qVXvFrWZmasg1wwmmCbEkbHMJZabB9kBdvQkZAYotoNymTmfHpV",
  "key39": "3RSPKhMKDDmjn5FtbRqCWGN4ce19uuVaEaRriHYTvFdFNsGj8iM9yUdHjRsmHwq4m1oqpmmFJBkbSqVfo8b76cuj",
  "key40": "4MrBwFEppFyJP4PzFtUQw6wrGN6vjYTPbtm4psNHgSB8RrKpP9fs3cJ2BuoEgmXjyZ4JuJfrQYUJTATpRLkAh2bj",
  "key41": "2N7ZnYeXHDkrdTQxF7ATbQvSR2WhBr3yy2SEQwWovzX4rMZnJeq9caQLkJwjSdyD4tHqhRKYuPnfn2MbtzGrVrMZ",
  "key42": "5hqRD4BaUT3NDZzhyPNGFcfswPrKT4WuspNVLth3tF8uAKuPELkVkBZTEFgRGuRLbZxEqcqRMKBpGbjMUNVJyMbr",
  "key43": "WajBt6XDvazb2Yz6Ki1eeBdMwxK63TnUxR5tKJfWxGbCRXDeSv5Ca1G9dKSUodaM13e1pc7nFBbgXm29hTqnbzg",
  "key44": "4sneJspVPbMGcV4X3FFkqrPviQpHWzzYTwEvy2o1gxjTwsCCMn2icxYeRP61vgyChn6wLQVV5p4pH5rvUKRM54rs",
  "key45": "xiWmA9dyh9wgXQnkgcv1XwHqPLcusXZDwTGX7x4qBLCjc31WeScXjzwhUNhV5QXWzqJxQHGy2yTeBDyWopFSNvC",
  "key46": "3NrViRLjmcuXhbRtauUbcTycVRfEEdeBCyRYv3ry4PSCzu8vv3jBXrb3BMcYnK828whTyxABb3sAVyJGgZ3MgBxT",
  "key47": "4FL8pydVBXd2UgM4qfGUtHYRy5a5oZtvHVuyaMoYxexJhcXZWnZ95tNYgqbvdBzp8E9BWgrSBHRCrrdie8odNUB8"
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
