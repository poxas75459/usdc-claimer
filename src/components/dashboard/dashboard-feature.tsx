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
    "2QLdWch7DpGoitupLM5o6CcZ4qvECEiYkx8YX4AqbuBSSfbFUQwN1o8qwnPcPAGHVMgyefxa3PtQVaf2FCQKrWUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DdDvH9HYzyCeSZoqfvdyDz52uAuQHEciwHxrbeMsSmCsbpESLFdwdjuPT4RjCUn7AeHPWBPx1GWZrMEkUiemspr",
  "key1": "2B3tQP2ZDdd8cAgJhkJbdz2vgVr8x989dUuTVPqcydD3A5Df3hKvEKq3hTmCo6F9J1H9q5wc9Nbt1JM15cuf9kSD",
  "key2": "2abqHsSRmVSLedtAbuCLoYt9KL3akDG4FhV2LSfVF2ZbCaHtxwZbgikdHsTASVKRiwfrbBDGMV694gxcvtvVQeAg",
  "key3": "3RPTUMWxdzXvSQNTgedRt54qnsgtAJXkXT7WiRCFZetP2xxXY6JLStLRqaAurRBsKsB81MjVtkscoZy5NAMNWN4V",
  "key4": "4NNMTst1q3B8Ce25v8773FUf8vffJNQXtwRh8hVM3ggFjWUiqQtjQNJEriru2JkEq5Qy5MWPo6HgEMELX2aeYfux",
  "key5": "29QrxD8qtKRULwKvm7F6hiUaB42mnVtg21EyWnASByL7XnSodVnwcjztck16v87X7QujHzANoSL2U3inrmmYDRWC",
  "key6": "632BEiHiJzW4PwXSCFhm1FXNqEvYRvr9dAQBdSW1ywE7bE96B1qdZZrRUHYPVX9ZBAsgw1LT7FcSNdMGsSh4HzAh",
  "key7": "33MQ8d7YDAFdietznV33uvnvv53uAiNDbtYVcJQ1k9M83DvPS6nnMuroPE5CqEg5Z62sG6x4kGk6FBaMozWspGje",
  "key8": "21av5ZEEV3A9w45YgjKhH715pmZT5tKo4VYCdu6ZSqPVoFZyC9KgvnK4vA4eiLFDzyrCC5RzAHGTRGsugynpuKhW",
  "key9": "3vC47VVdidJyT5piTRjGq7e2H1eZyaEhoCPpeZvTXnRux1q7Z5z53w68pVUsfonK3LFrS4rjyYp1V1c1nqpSLhn8",
  "key10": "2upf2SK3JitJruiHoFzDcCQFjutToikYfHbmb7FRiyAdsugCmeebGxRBpH1wDxhW7kUsZGuGXhLy5Na6xZGjty4P",
  "key11": "4k5HVterMExg5XapgBDPSveQgYCcUBphcRuUkygPcwjHdeiuHrvkuJskAg8uMYh6oUTgEHwoGqJk8YwgUgsch9cs",
  "key12": "5z3kt7EFBwT6CXKhtn82deeS9Wx5h5Rzac9k9Gsjf6NoK78XgF31aaEQUnoNp31vwrE8LJuDgtwKwhnsZ833pbdp",
  "key13": "3Rnm1HE2qYvRALjP61fJAn5LAMBY78TvgZRcmfa3XimXSxpzfWe94Ec6YHHV1QMgvZqBJ3EAQSbyXqMUff556vgz",
  "key14": "4JxsPeQwDjCWzkYneFNZ3QAbLjrpq2z1buj1nEMoYh6SxieHDTU9UxJQvx9xPfLUSLmJYqDk2CQpTDshuFiX7WfQ",
  "key15": "5aso6XMSzYyRxo2aCDMxag4zs6BWpPbrcADtoePXbuWx7KVtuuYHWzzmv3zNBNf68u5H2LJtmbCDLZmiJDKL96q6",
  "key16": "27yMURao4nqFbJeyzYQ3R7828rCFJz48BCzPonkywhEY4ZkLSXp1pSaKRULrjoVHRqGL4NpMxrFbpZQ2urrBEJzX",
  "key17": "5g8qV9fSz59GR6nwPtkcdYHPkyxuuEoVJyBsyNwrtztjKXGUtRAocCWu87AFJe4D1EpPeRdCpUZmJvhBp2h4jTYf",
  "key18": "j8vPoDDVCBt6abRTdN8LEkVL6FrT9dxycvQJhEDEGVr77J3YTfKceVvNEij75cmMs92o7d86QL4f9bETKbwBkAw",
  "key19": "3SwfqfSLSF9uprAkqaCNwNVfjfn74EfNQvtBu2T7LQYNZCVaiS44zsiwv8ufe3ExWggoUwqJJsxe3UA1sq7LMfMK",
  "key20": "2a5sN199koYdJbuajj11fqXz7GokDzW54wato2XNcFz5s7eS8M2aDa5ZanJzknjBfweJqAb3XbwJyubHpv6WSHm8",
  "key21": "3bVA6uFJHxgUUWCJDs3xmdgcFHtPqat91Ss2zu5fR21ANdSH9qWduUnsisgKSpYjCeiJwR83MzmrSEhyre46mQR1",
  "key22": "2Fpo6QVuA5gVp1JnSGrAiDAN9a1kZdxstN6e6yXk6c8VFnSBrcfpnrfziEdADEoRimhjawCgBnbEQU2xsARtMvKA",
  "key23": "5QodxSocF3o3jVvn6srPHrDYJjMfizB5Ear8SYBqL7wZvAzyh8QBccBiHFXAnrvuqYGuHJp88gMrHtyKonVYqLwZ",
  "key24": "3wZ17Zd2iijV8KH6f5R3MsYH4qbRmnw6UR3SePVmj2bbX7mv4PrrVtaVd2RdhT4dtvqpGzNFNbXc1myAVv3bKqkW",
  "key25": "5T7kckV8VMgV2sLGaggCeFZbTm9VnHniZQaCWUetSmCY6aY8Bvf5bRrpoiQ3fchFjCSWPuBai6KhTSmJ35u4v4EJ",
  "key26": "3fqiT9bVYUhCTAeNW31KgLYN4RADwgMLCTzEzCNH9bJoehdvxDTKG1tj2RZdQVNRm4kB9cJgTsVJdYckFcJEdmLx",
  "key27": "5NthtQ28X8hvRkHfZUvf2PzKH6sBJGheAuhPJbmK3Zfau7ztrDdZXMD8kQiMx7voqMnxZhZzy8EnrgHsSiU464Sj",
  "key28": "49LHy3gQTgULFfgFdCzfH3RL1RD3ezpAMHuBVRkryE4ujk5NRpU4LQGtrVMUKu2tBeKnAUrTBNio5bW3GycXWJxy",
  "key29": "4susEBpAhyAPXWVJ7NER5Zhycrno94JiNRkqQCViVAeKwuHEDEurFfKzEScFYpTLqtx19AARXBayvEevY6QcqkZU"
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
