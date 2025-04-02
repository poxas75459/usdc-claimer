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
    "xoKHtPc75ApqFDewQtjJwn23CNHUnAJFxqZSvajK9sUCyc1nwWuDs2EPtE7USQaZnUKU5kK12LUFbRHgFb8Z93W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aLM9yXxXxLNHSimf2uUTkHajAJCwVpa134p5Z4bkPqJMBTQhSVaFNM7B1FCMHpSna3RGJuqyXUwZeDxfvEnr8YY",
  "key1": "4MdMAuQJzPYvr2t8AVwmkotznn5NRbzpH6piELwNi2wmgRJsAKUQcphQBgdbriYmdUdm7JSYGPAzjbKfKQWa1GfV",
  "key2": "3uxpNucbcSruG4vjEQzs31nUSzEXaTWSEZM4d9og18pFXPfYfD5L2eYayHKUMM6qifiRD4BM8v62DtpABJ6KBsik",
  "key3": "5PvsbuX6tqvUpKtMjhEYn4T89RW9c7B1USE3oTytypCLZXTLWm58voihACiobYDXwFmjJfDeKEZPGYmLtciQ5XWB",
  "key4": "3ThJ2jhTw3J2otjjDBDjLaA3uUt3pTXuVnuJRH3K2nA6GYZdic1BpHx1AoWgHUcWh6EqFDJiZzXEG7fFq5DbmBA",
  "key5": "4SEPVWdrsmKSJhKZKDBmocMsk5qU3FiKtZo3JesuWhYuv5osw5HqynKuoeaZ9jaS5ALReS1bRnaqQ7yq6w5ZrfW",
  "key6": "4Lws5KHpDX5mGmj4Jb1o8TT3Tw5GAZPSbGC4mKeaFGGGrM9KUpxJv8diNrNBPcHtixWuQ8BTVYrgTip4XspkwNwe",
  "key7": "5ZmXAbRD2ux3qGSE5twBxXNnMbWUhwdANhCvKqEYCeCvZEJGhroiiYAjWwhiwsxBVLH1QmVLipdZReXurU8Gbo9U",
  "key8": "3VJ89jz55LDrqPfiCTHT4EKRL22E8YbrPmNsGEoi4tS2g5usXeKdT3jcNPm2T3TRKDpqrRn68qkd3ZwgZ8gULDYB",
  "key9": "xZVbNLhTsBCjTfCwRePegSFtYTWastZBevEsyjNFbEVhwNYpzNcVZAhk1yzDmAHAvhAcmGSRK5uer3embF5HViD",
  "key10": "34Z5pfV4fEkqtVP8nDTZzvPyAfLA62fTP4XVLzViaAwTD8iCv9rQNsvNJcjXLq4ABMujrYaM8Dh1MjMpEDiSfBLK",
  "key11": "32rmditDMKWkoj5XXTh6s9BeYcLdR4VpqFxYn6CZgpS68kfdZpsTfJsfdQRXsc7wScv2hc3aBZYsx3zNxWBfmbZ9",
  "key12": "3rVGBVnCBvbxwdLPLUfzWqaPPAkKnSQsrdTpuxADjCnFcKxdSiGnu8o4uP6BFhju5YN3tYyi5p2CX3kLR94RWeDq",
  "key13": "5kbh2aL9vEfq9qvSPMhi2Rwz39EuCaye2e1RuRxjHnb9jNSPHwUFQK6MGxCT9tpT3boX16E3du2hbPRcSULrYUM5",
  "key14": "24FkRsCjcgq8uQmRpW8YKB3ATVdDnSuCghFcS3h1mBDgnwoLRiYWWvkM6LLhgvdbp6ohdM9Nx8TgHjYLDMwvzqv9",
  "key15": "33UMhuHgCMnaAsQ7G8efjBJ8uT5emoagr8d6RSLams1tqL4iP33j1qHR98H3SVk46MZrrFXbyHGhGF4uPVw5uX3h",
  "key16": "YB3L5qR716YXjJiW63pk7MMKtYD3jdvfZjgTPj28ZBvk5x6nHCxhXggSsuuP6XrSLeQhCvZxma2Ayg5aKs5zL1J",
  "key17": "339s4423X9NDwYYYFJV289RngRG7jEfLaPCvCtAijGjyVaVKS8nEFjM7ySFg8NSZkafyJTPmaM3DzxcNcDEdtueC",
  "key18": "gMvxXR9Ueq9LGvQz4Z1LCJ4UumGDqozWuJnWedpBMhkPmqnRVsd6rM7WC5PRZg2ijK8bAESqnibaAaFYJrWjqmz",
  "key19": "K96Sq9akBdqoaqn2nRPHsQjN6RNBZttzaaZspM8qmZ4bAeKM49tDpTdk2mnGyZEiAPwMQLzWXkBJDwC7v7d4NTd",
  "key20": "4RsJ6TwfupzAR5ReGYCAQtDCc13zfczQhP2Pg4NzpgsGtnfXqK35kj3UeQQapSFxHBDRc39y6mxzt4Bjkyrig5aE",
  "key21": "3o45Hbkp3Zqzumut8tbduGWSt8d439rV5mdUUmFLUaprvQVz4dwrAfCr7iywkradxzkbP8ezBvzQUHzqJeieRufo",
  "key22": "aRG6mWrwthH1btFJ7vjxyGgxW9mZgs3iKBkLK7y74aeZb5c5GBo7YqPah1sTWPPDS1X83qPb66SkresSFNK66n6",
  "key23": "31MDcMAtFEJVPb8mxoAGPVYReoeoZUxpAfVCnUv9z16BHwQQxHPUhbg7UXoDc37whXKV9VwHpEBuAtAy3ysVuEqe",
  "key24": "2fies4j5SJ4uBwEKP76fxRfnuM4ZHSg4wiqKNZtjHcAWuDbbwr9Z1jDHyHnQq8knUEUgArF6kM9SzjR3Jpfikd6V",
  "key25": "3dCpTsDWYbzn3q9hWXfZnpkHEjWFUPzE7jaTZBGFbQcydNPQua5QtieBuDDB3f341eEnaMAiWu4XNs5vsTosqMjw",
  "key26": "5ey1Nw96cSRwSrceEw1ABTXS5pMP2BNwNQa4yKkuDKPAHNBcjwamZb6GiHXoN54LkVMng92W5eK3Nv4F3oRT5U4q",
  "key27": "3B1UzoJ1dZJhfgtRDwqvY4oMvZzEjW5HRFA1ajsRHRzSSbX3yV7BjN815ixdsU89xUjoN12GKHd9GCm9hrtYop3v",
  "key28": "5SGK5JYmEyjSzeDaWog3PVcR58KXzuuK4TxkoMLQ5riQs3rnfuQc8LHW2F1P3b1VWHhPsQUG5psEGRcQLswZ9Jde"
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
