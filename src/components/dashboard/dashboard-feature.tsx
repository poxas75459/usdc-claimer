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
    "4TxwH1m7Bioy7AxsNBDgBwMukFWY8Y5h7vndresi9bxsf6AiHGR66cKyNSri98Keh6tSzQZ9gpgXydth4WYfC3iz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nVquipKg6deJEZW2YusrjGEitD3H4kvJSGNnUtuzoL6W7BJCdqzTHUR8ALjyDH7zzvLrBerEoNavLMNSZF9c9ZX",
  "key1": "4g289MYQ4rGZRTbhXz2nPpXRqRFe73tYst8CX5wK8tTUJJnMh2AqenjSvp9C3i33R3Pmod6NckQY4YLFLE9QKieq",
  "key2": "4v9ux8qA5Ap2QtNU58WXmv4WR35ykHU73tiaPybxD3QhnLZ9rugubG7s3pLmFpiuxM31rwPTu26sqqWHKH7exQYk",
  "key3": "5fH4FAkkDTvq9xegdvsjXmTMtbeMi6J5x9eYyPqkBega9xQAzvvSLHdtTKExQjzbieMDUdgbAVsaZYSFjTYiiggu",
  "key4": "4cyyUgWtMHMjsjtC8gMHQpMGZsWLkoDf1X6dfcNVvLJhDzQVX3dJY54rujmTdbL4AjHohWHsc38sMSgjyDN4bLmj",
  "key5": "3YCMbypHWtnwKXdMm28zqeCdr3U2T8grTFhCSri5G4KhYg7as8EXgDjXy5h95nyk1Rkhgcvi1Rdv8RZELQoEBFtD",
  "key6": "6VMc65QFHcNHLtptinbAXAv5nwgaVGtjFhx6A4MyQrsmkREX5chGYKNhHFZj852bPeLkZ5hDsn78s8E47YK4pTP",
  "key7": "a8oD3ZYNUu82B2UZDy2LyQjK6ZmGAufu8SRFrNdj2ToCqShU92Ce8HsbdMH1GVQj7BFkycgfGgU6kiMdS3mi7EA",
  "key8": "2afyPKB8a3hwqzYjzXX7yjYqzmmMy5n36aom7ybkqoq8RNYchFSyBPYywSWUtr2efdQaanKDGAFZx73tyxonknrz",
  "key9": "3aN2ubP6GGJiWLf3NRf1uGriiWt1iyoEtR8oaWs4Kct6WazQyrHrDmEiTRPvNxd7qt7613GcYjeD5RHCc9CH4Nxh",
  "key10": "AFuhGxjcSCZMjxScPFHybM41fSs6TLCct1iJ7NCgCJxmyyAdpScMEYR5dVcYQoMDvqJDjz1BBeAocj1xecBaKJt",
  "key11": "3tP14uUcABMB2VCZL1RzjtYXJXdYAf5JbzG6SoFLCCiCi25o4w3L5mXM4fowDo3a9Ysf32Ezpje48FizhVpaj1br",
  "key12": "LAujMJkEWJWtmnojLGPGWYAqKztuAbWw9NyptXwUmmsqW2y4EyAy1Mn1PN2Awnww6pwhyqhavQnhNGRJ5VsP44N",
  "key13": "2PxcsHtMhn71qikqXQPkJBnmuMtGNSVMD9qZ18m6Wt3insqYXfmr5DUxiiPn6JhrYK626PXyakrARWG4mvA3U5bm",
  "key14": "YoGPKC1AzqVxgVcKqCQGwdgz5mL6b5uYua5AsG6GjvUJErqrZiBnZTzmErSezvPV1XXL5c4jeu6E5FSCW88ZuL8",
  "key15": "2ZHUnSMe6i5NwxfRUhpUCnVYrepPy6MseZ9RXuw1ASwvQvpY9ER5Cx13vRiNSey9qj42Xiw987DkFW6A4zaJz6W7",
  "key16": "2QMYCYHinFTGpAtWCdxab9yoazb4pBq26NqZXLfg5rg3BW775e9e9VG7z6N9iUob3ZSosLdsQ7DvFBv31qnoWkoP",
  "key17": "5pUs2QzMZzQGxbqJ4Wq7HgSqaR6zVdgKZ6Ypv5pVawrDZGKP2ACCch7y7tW8y8tm2Ft6NUg5j9MB4VovKfEJRR8R",
  "key18": "3ZPxiAgMMBXD1geN5EsLKitMrWH439ZAgQ624FuuWsaaZGhsuYSKJXacAJp16jhCa1m3Ppbd2rcNot1UVoToGDCJ",
  "key19": "2JPBSuYVx3Mqf1GcUkdenaYYBUk13przKCDXjdtku4jnVnc96EyMQ6ajM174yw56392aXkE3P2UaT6hzTpen1wbo",
  "key20": "4P9UsDTcep1GrJToH3suamBkatnGno2vFNq6oCwt2KmBJW3B8UmQyTi57E3wdvKHec719W1eVxoMBXnmHgDMyEqk",
  "key21": "4aHqRxm2wCTGP96Qrf3U3FJ259h48R4imYP5BD2qisazBK1FnL2utJdY8TvrHqCGaghHeVAcBSsQyZdF6tBhKcKE",
  "key22": "2fWf2GaTsuAKVMNrrkMKWNzEWa4YA4eLzMZtfoVjJ4HotweWUUgwYdQ3WXvLY1JrH4titVKsfTYysmb1JGvz9XfV",
  "key23": "3HzNdPhaa63PUkxB6ikCAEvVm7MZ9249LwCsEk3uttpTuW7r6iTxQfb1MAEe8w5sZYRRzenKyCJxQtqh7QxkkWQc",
  "key24": "2mrLn4kzVnJpxBZtUPnV3UDp5BUvZYQ75pWTaDoN4cxbtvGsVgCrMZASzEibCwNk3Y4h2ZdHFRQbMDv63ue9HRBz",
  "key25": "59yFs9jwBxkkTvAMhKSkvaDXfsKwHgcPfqsCd6SfRA4hBveiuJivPuYExguTzakwStLymDEx1A6dXxp47jzgmmGV",
  "key26": "R1sp21aSoVuMS8h8yhtU2RkQHD8YepxFTYactAJSSsZW191HBPmXqAocZ1D7UUL85atQw5z9mN8DPRNNKQFtDXH",
  "key27": "2PgoiTkciBceUE4S9cnmUUUbLPJyUynUSegwx6FKDKkTQZjjSr7Y6qMHFnUKySkrSTG31jAxBGtuL2UDCafx297d",
  "key28": "2pF3KrHcWe2QkLQTaACEGGUiMm9NPL2iMcJzCxcVWwqkXTXDTdK6LWVwLdk9DVhhTSkcWnz2jvQ3xa9kuSJe8jVk",
  "key29": "4g8XwrLo2cVQjBuCoPVPnj2zJVCxvKAegMbqszLCTsyo4hggyvgDJwpW4voPY8gNu2tjxNHcjc2NnHZ9mzm1g1wJ",
  "key30": "39XtF5CUfcMiusMgnQikGGaJgeyxwGVN35WchpR93iiVRgvSSNZ76sYH8WhC9cvJ56dHWRN3ZEzFB6qWPugADGGC",
  "key31": "2F3hc3aGab1Ukx8GxCmXSekZQ6c3BL79Qr6pWLWqFrAxcgpmD3J563cGyn7RBDS6RX7aAjRuaAiZw41KTyQYC2v4",
  "key32": "PfXCuhkS3rabcjNCcnQJ7QHXdUWUiMT7JNkdvx7dRBkNSkBwb8kZmp87P8yGdzGWSwNxcgtt49aHWktim31uHP9"
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
