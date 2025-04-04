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
    "5g9B3wB5GQ1nJjiX1KfyxeJffvxK2p8xaNc3J867teuQPXez1Bpe7SxQ1nfCj9E8DFBdg1GPRMXNuzUU73rpjTm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2otkoXvQV5VM718gDP2BxfDjkC78ibrmZ7vVDtnLGZPJMbuYtQNuBLtqvxdga1GsnXS2aLc9Vg8BmwPSVxaYrcnx",
  "key1": "4NMTaCUaDXhB8ebYYderusNbtzEUtMrnEvxsFDjiZKEoEdyuF2UNRw9C2XjQE1aSKgV8sjRZFVPJ6cuLfJqbcAgY",
  "key2": "BSMsd4seiB5vmEGsm8mBQZ51sfUXXvoV85UBKsb3z9YtuF7tbTwrKF7hPJZ4GjG2mZTdaP5Kwi1RB4m9pvSRapy",
  "key3": "G1YM6jCcC3bN6YJRehxKzBcprRiH263Gmu2gduNTPvdpmY5P1wvdupfFQfBZtKrtoQHoQDktVyeHuVE5ZrQDxTX",
  "key4": "4zqFYCboYKMr4JzwHjbpdSpV9SN7KgvvMZUeExCXsN4ZV2rmVoo6NHBErLB9C4JRrX3o95j9cPPq82B2VAk8PxJE",
  "key5": "vDnc9718TpztiCrnb7HsDgBMvW96XaCbPMqA2JD8MZ84Mcnz1TRbC4sixVjw2ahHvrmwjUVVZnBoL9m9ES3rPZf",
  "key6": "37NmKqMidzaVufHsjP2sBbBCTrVLTCZJcm4SkwJzE2AyVbiXD5CbynQ4qNPTxyrYkURYVMEvChPF8LNC1xWGKr3",
  "key7": "4dxCEMJrovB7W4zPdUANRdzZDz8am8NzuL9nJhmemHYXpJNexBpUDV1pL1ZhwukQmz31bnuHUChegi3hJRXKXGvG",
  "key8": "3SLkDd6sBfTcUBnjvtjvri8pZ1TD4uCLiBxMXQLnM9MA23pwFnTtXe5HRUWqJXqtXfZNzihzCA7fPBcwtWsypk2J",
  "key9": "4PJhXrFNPERPTc1268uYUgi6f3aMwym5sXrVdPYG5AfXHdUxw4isTz8iGbC7qv3BUqvmkFQXBJZtEQTqSS4Ymtc1",
  "key10": "44hEdcV1C6X1BqyZHexHzXbvkSAMNEQjwi8M8fbKBcgAmJoDQBdCe4q7nJERx3mXx88aCS9Ddg29ytjguPW8sm8r",
  "key11": "3hWSqEocvSWm8YFc3tup3PWbLB7Mv4aWMBfiBBqYQojSbxGy3qpcC5ktgFMCFLTbHiwXeu8m3uNHX7cjok4WJQPV",
  "key12": "BeCCKtrqpBFsvzceWjbvVTFrArzbi2yUMfbYQAkaYyiRuPAER7Z8Q5Ni9u3by3BJBUjrv63Vshpk2iaCPb2aR4X",
  "key13": "5MYPemPf23eX8t5BL3uUbbCGvkCdvcmMeMsMSZQKcigwQovwRFdieExdiejgoTomqhPsDienCSKiHH2Ct9Tg5WJT",
  "key14": "9xZWWMGZG92v7iHhiZf32GHgN1Z4Em6unpR6wd7gXa9Khjf9ydd575BBZj4iKa8SuPHE1TEknLYYgdDP511CzLB",
  "key15": "3d1cmTMPyUaFGZXLshp99oKhqRXPS4BRdMfWcJWzgMuC5vFE7RWtoh1HTMein83zGcsGFUQiakdjVYPMHo2qR81p",
  "key16": "363TQ73Y3LEDJ9X2e7KXJwqodMui6bPphhGJuWfCXoAkS5LGuho2e7hKApaTfpRj4VFoMwUFjMdmmWU2RYQYMj2w",
  "key17": "5NPkBopCid9Y1m9ZbZSgxdUoyQA3bPmn4nCgh4p7SiPKauEwqbz2W4Pco2S8qyBjLj9KRj4Qb1w4L7PNmBuczkk8",
  "key18": "3Q1UcF5dcVS8Q7h4zAGbAhAUb6osqZjUva85TQxyVXiwktdNnUnaZpYk651dYUYPtytovVFw1DDFuRpcCnd6EYzD",
  "key19": "4a2PnYqRTMXc5GcJoLPE9SvHtv8W3YoJR9B8rRpjWLZmbHRfXeAMH7BrAqaXqKyh1GoxVirjkf23bB5Pvyx3wWZz",
  "key20": "4w93bmBdTAiMHQxuFiTgTurGRp6zeFFj3yBHr1LG25VmoxUFpu646JTj1YpBs1KCK8YmtzYuxXURQm44DnC5wM6L",
  "key21": "3CRSANJq83hi2mtJU1WqxHCkJQnEMu5Jov2w6ahP4fQYmCxj3qHEEJtzzRASvB4f7baw5i71wxKjGeidK5R1RmS7",
  "key22": "2zkQkRHLPG3soM9HisKFHmXw3nEatwsgCDN3Kk5GMEDbYyRpNbwWuUrDxuaSY11fYQKL3wbMQ6bpkJcTepqQWngQ",
  "key23": "3eaPijV7MaMbEfFTK4sVV2uZNdbK4ZSrne65hgERNtqkrqV5yRAq8vathNFFbLqYtmdMpG2J7ne88rsD8Gyw3gZT",
  "key24": "2UphaH8rN8GuwqP7RBMFeKvBoqLwcJDHXUWzZwk7Kx5Qf1YHd16Rp58R8WyjA4icHaLVjtg4P3GAVj9DJBuYcMdz",
  "key25": "3KibbMm4LozGUSnDfkhmmhgnv9bLMNmBsMeYYe9oXhZjJiUsMB5Jau7s7aG6kaDmmYBFyJiJi5A2uFKY7XNvrKrf",
  "key26": "1GN38UH3oHReSZgFqBru7GywAivGhbJt18U24snvkTkoEtncm3WkR9xA541bCTQ8hxvpMcdbKTHdHyPjMnYuru7"
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
