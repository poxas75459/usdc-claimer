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
    "4GRTtMUmgBuQXRAfvaqRikk1wCKzGNCN4xH6a1fptGTkStoc63DPT5k15usq9NGMhPeBtNKP1Hgatu6SnmJzzKZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FGvFtzbc6uaojykvdgrg5WGA91nyW2kFC4kPeG4arwu8S4YHBJQhMg4hDW7QYTZCvDc3eeyNRrHJBpYvdeysYrU",
  "key1": "5Svboc6vBjCUk1xt1RCPGhe2VD4Q1RgWZiPJTU1qaAB3JVRBkBcA7WdLjkgtb16y6KVKeTkuajB6qeYynXW144hP",
  "key2": "54djH9DdQ9ZQUc3M7AXHp2FEm8x66bdrAL7sCHz7g45MbQrbEsc5x5wCQ5biNMpFZJvGTq6RaNV3fMW5x78Zs5ew",
  "key3": "1fxEr2rjzHsFkp3xRoDhGu8JcAkx68FzUbkXWEjSMDEuBwmn1pY6udmj3XMyhjVRfvw8juMvuRi7CXTKwsGaymt",
  "key4": "2BiKbj1NjxqPPGjLDfjFT7ir5edmcXGWFGNFdhBkevMmGB8VzC4SJ72CQnntLsSUWnt7HDVi6nekSTWVysWraZMN",
  "key5": "8tS1B3Rcvc7fXyymMhVY4tkfhc81DrPLxhUXVRFXP72Gxwz8B4QcvDr7o6wuWeTxRpL2FE5e4A4bBPdC543kiLR",
  "key6": "2QefyJi7D3cnVZFVcUrdnvFimYF1oaprKuPR2mDyt3QNG6MEpzUfR68BtiPckSizf74yE7XiZTo58HiudMhfAj39",
  "key7": "5CiiT97N91tyXipKdphnN1qGz8HjfeEwU7zzAgq2F3w7ZRSA1q65aC6UfznLrNkCNbsBqQpj4xEV3bzECpYz4Kc",
  "key8": "4Vwz4PNAYrqrDudrWaLXNogQ8Xp3Seh1UNV651qo7mDUPnXu9inYRs6tMV2ZY8tfFzcRF3aoGjf7mT8K7HFTSBoG",
  "key9": "67GJaJybKU7hBE8xRQzM1D2w4oWuNtKT3GyPRgpCv5UoDMhHD3atHrgh9ejicjUGYuWiRy26XyLVSyCnkSjCxgVE",
  "key10": "gPustvzfbXQNaPK3BZb4hQVSEYx35Q8nj7x6EFa5r8KeKiiuNNKZkVWJ93KKkfdRCR9qk9ZQ3Z8qWD8QdqYpBNt",
  "key11": "2ZGDEtMLzd8NVtAHB6FXdxQUyhaNQP3gDdA8C2RCP1jeXWsWjTyvkW4rwALWTWRXy6vpiwvvS7ovYqew3z3iXUea",
  "key12": "4FrYxeQ4kerVaPWfQ6vqXuNQK2dNPyC3YZ2Mg7KmyXXymAgzmCb4LCLXLR4LCc7CY94H7e4WNEhqZ3mE5pi2PnLK",
  "key13": "4MzWp8HjKoRjHbmvwzpEHbHoyUdRjWC9cbADAKmS6jXweUcTuxWfUz3Bv3JfZBTFMtkEXeSTDYcR7J4cxSARJJPA",
  "key14": "2iL2j4s9hswPDeyewCVsZ3nRpLC8sfP2wrL3Sq7hc5hXPiHJk7ZNmRap3QzmSaPpUUQUx6f9rxRGwmb2bCRfNnDn",
  "key15": "1g2aPa4WHgXXvDTpVGB9pnxC7URNVhgrqivKRrvaYAEztPSknJgWsoqcLgpCAccDXKjvbqgvRTR9BMehBAKi9zE",
  "key16": "4AVZvNDnb6JYQeithtSv3ySjNjdU4FAv45inxTfKePYKLGp9TJx4KpD8ypXvdLCGou9bZGmTwjMSbi5fo98HCAq4",
  "key17": "4XHF2uQFz78KYg3DSxKXK9EXQygqmreU2dkRhumVjmLCedGghts1ZZK2gvNxm3KCRDxm3AJwAxexUY38BozchTiJ",
  "key18": "4qiXFqg3d2wUmjZVfxvG7mB48jZdJVSCi7fFNYqR1jTbe9DSmDGJzV4xeEHwe2uZQhLKNfcDFdcQJg6ngRvHqSgT",
  "key19": "3EkqLocKA87n6Qq1FfxMj5pkCQWnqogH1qC8Jsaes2wBawiWCesJ27e7qmGRCNMvfLvnok12hyTRf4YysdjC2LPW",
  "key20": "2EKcW5HQKrsxFTnQiwPhERFgFFiGDXU5nMZGAJhZa72Re1UoG64rdptVAUM4zg8EyiwHeSQRZpc5LRjUq4ck7STP",
  "key21": "Y3FjScvhAPZ21LHvvkxuGnS63gruVbWg9W98qVuwUae2dYQ22BFC5cqXFExDcNvhYjjd7YZJu5TDkWKs5UCcUyK",
  "key22": "35LKLjKbfiENEDGHYQpu69wjtevZD29EUvMjfvgqAd5wPmdocp9M9HKEzbWfSmo4CJPkv5P6BctnNtvMYkwqGehf",
  "key23": "3TzteYB9qNFPnuFeyAF3DBVohAdyhmtziu8SDyC8jstTa5nj9h3WdNMJ1dtAZjECDCW6X1onYmyaFfwGPzxKGFb6",
  "key24": "mYp858gM1edMGFvGXmXhQ78yvprzarLRxs7oXoXSmSUMq6oSut6vi9RK7qjbS16VhjB3UxD4SJP7z49U2UxwDS6",
  "key25": "4hYzHSmBZNkCJumhqbqYvSsvhiVaoGvxC7cJbtwVgT6tCGBfVdK5ZtkQZ4ThiGV7g4Z8YrRj7NQJ1AFfNG8VB8Ej",
  "key26": "5E1zyRK1DMgciASMTSFPK2jNTnNJYoJtsDasnRmR3vu3q8VwnSv1AFc8GsisTJjs3xQjv544Vpf72txzhrHyLhWc",
  "key27": "5zVzNv6chx3km7PfgNfFTKixu6NkCpVJp9Kc4i2o7S1N5ESUDekueFLoXkT2nVvTLkVfKbtJxbQxzAWMPHAFBF67",
  "key28": "5zGNHuR4XD88cb11tzRGDgsmGD366YXhBiW9t2n7byHcKGUtjQNuAg8LzDEewWBeuqXE5rYjMqo8HUXQQgZkYYN6",
  "key29": "NnZZTCGNFSXH1ikD2ux8QWeiU7JvStims5VfHDmiDc2GCp4QCzbeMweY6JKJfmnhEMPt8FAGVRMsJ5xDFkzt4EL",
  "key30": "4jWwxzy8PGjEXP2eTUS7TrCsMyDzBT955erJaf6qwakiCEbbhaB6c5wU1rH2ctPntSv5yZJ2zj5xLnDP2HWHBcwy",
  "key31": "42B7L2ebYqM5SEk9u8T9QGZsHQVSpkfWYqMH7ZtPzGWs9tQqkSdB2JzQq92gbJAFQ7NNdN3FkgBu1biieW48HrVK",
  "key32": "2p9t1vthKdpLX2VrfMSoa7jx2jTW5E8TM1bdcA28DgBcGar1upKC96e4wgFMRwnWxGZXZUpkajMRxEKu4jy2izL8",
  "key33": "3jHSdmhjF1U75aRvEQTGUAR94eLxti3dK7CYVJ9c7ZCa4znSeGryUUcjKLcHeBNvMkHiChTE49uEyU8o4qaWeuSE",
  "key34": "h29i1Fib9MCrCoesa3S48Fgj9Tkt8jnT6PFY8LZXVvbqNSFm79Y4vkPN3jKEp5fdYSkrNnQhS1HQaYZBG2fBbYF",
  "key35": "3xxMtroQYtv3Pf12j4vqSE8b5SgzvcskPFtj4KzBuL3gDtmiU3sYixer6juDJ3KvtN96oDdzsGKpKbyW7Jan18pz",
  "key36": "2sukwqpm9AY47ck5ZSf9tGpnvCsFictQeJsCMFNRRgzPeVB2et1KdjcAiDL9RmGiFts4wXvihno7TijSoJA8pfWw",
  "key37": "4kAE631JE1BhAintNQmcmhZEhGypL5xnRYshDvkJLKByPMNxMzaKHrze3isSKkfH8Dw9a7LnKJXknqF5wvKdvAUp",
  "key38": "3Xu2w3eRYmyNjcbaesAGCMwQvHacxLfDqsGe1Tzob7oY1fm758RHyZZaCzTpd1rNADySFQj3s8n2GeZDtQYKXYGm"
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
