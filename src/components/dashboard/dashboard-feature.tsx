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
    "5MHKoJSeUSDykQYqDWNxat55woRxZKyidvK8p1afwo9P5UM5z9BahnABFiam5uHLYZSK3E7HNog1vKss3vQyy6iQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zh4WzPwn5ENMRNcLibR4xAMnxdGwwAjQzFyAT4fNgGtwFHRUe8XjXpADC6UMLLsstKKL4v8xqYiGL4kcga9SDby",
  "key1": "41WCZCSyzj7uBk7fCdfSBrLPUm38p9WgX8Ro6bXpAyg24gWSCPkx64LoLuTisf6TQHjLiGM1iH6PgSHAdSGSuh7d",
  "key2": "hkMVwAbsxwtGZ3E4FP8ttQuBbeS9Dpez7Ht9jZk7xVEMp3KnjTwXxkbgr1GU5bHHLzfnkouVSTYiwRfDx6khjuV",
  "key3": "4inXD1LDPn6rSw2tRVoYu4RfS7K6G7CTSh9A7CXhmsFrch1tRdHjpCcrLEqiC67X4wJUchhMU3b7p6RjUeYfufrK",
  "key4": "e1vMjn73PhvG2gbAy2amXn7eGK2bSSvbVLfV8pC2hoxKbgEQ6Wytd37CQ9LCYkimxTouaN4rKpuJyxpKPnNNsCh",
  "key5": "haskCLnD7sAJn4w4yxDx8NBkCufQGW2CedwQHvutQsTXTfN9MwdCMDNbtAv8gry1C4wTg9c7kKRfcm1s75kZg7F",
  "key6": "4Tjj9uyznTsCBTTLuj5bS1TYAbVuGaQ6NemWubunECvw8KbL7uJzMTqxBxxf6FHz8uKRP5nuZM8n5usNwXCjDkrn",
  "key7": "2XpgceL85WHtXErUf7Hso5kqomP2L1Jw1iumPgXQcbCrXaCKN1FZZRu1vJuJ84bKG5QJCUbYMU3SK8QKWyxdzpvB",
  "key8": "3tR1vYNBkeAsbTugLcsQtjzmixZf1khYoPFRZUScYyBFQnEn3LxsfGKuV3jHgC7TgtyV2ME2qK76BUwSxU6538tB",
  "key9": "DJ6x72W4CM8GgoRfQ4FifpMEdY9vfGniracpBv8wRfR1M2oCVQYJeeUHrdpVGYkrZUuyyDn4Mg2KejpkrQhgK8n",
  "key10": "2JVSyhUjcn9iFx4vfs5wmJtb1pzX5e29V7bHmuQV9BdCKTvFDbXBnGHrpZPXU8RSzdeX6Y56DN4iacDE81kWKevW",
  "key11": "5DjN5DqutShtd1NMKvstu71y1MAVJkmhv33VdpjuY8kgyrUc2AvPuQTs9cDL9yTH3v2KUNGmpC7moCKeLSr7jksk",
  "key12": "3EppSEziatfQ2Vk4n4zjaBdbEFgvXooRMPKmSByFTfNb7S7ejyXrKypmyvwRKtKSYA5sX3yxAwBygrZzuBgS4GpX",
  "key13": "61EiE2KQRWsSBnoMq5BFUXcQQTPk1RJVku3AFFktw8A6wZTj1fScxVHg8UEBhMT9ZukeYXSmfdByLydvzeVTWgEk",
  "key14": "34aiytsfykZRpoEStL467zMzugZCppfF6p1MENgyTXCe9GQNaYyY8pJitxihdjQRHHyBAUWaoyqWWxTbVqn12CLK",
  "key15": "5x2ppmz4KPvxn5GfHqi6Kukj9TUmdRNyXkxbtaEr37M2vLogdbFLv8axaATEEzMKNvRsTwDJDjK4zCerHHfSgMZu",
  "key16": "5ZLSbqviLg7Txb4MEeYg2ENAcX1nB2kmESBz78smULsMDXT8tqF1PM2JmPBuWyJyPBiq72aPzxiv4na5pWjYTgud",
  "key17": "37CVKuRG1cYqtCW6n49opPqVYGqPFYFsVVpuP5xLK9ao82CVV4czrPedgrMJwWeDuzUFSmqwgCe9LoYxL5rgHhkD",
  "key18": "61nWjL1hFxDM3bnELMLje2GXdyosW71NBrdxPCHebWhyD4AjNLny7pX4rLgEK2gyCqdJFBGg9FPwwE28betkHFKw",
  "key19": "4WJuHzmCMbshNRxGH6zcR67zmDLsce7drzSSrNpp8rYpRp6yaVrzdpc2qZP269Xkb5XejKNtDfuvxjFgpnJ9XZ6C",
  "key20": "3jwkPSD6MJSF4LmaYXbWuKp9Zo8D1oGuH2W9wp6NLkZ1UB59pjpRc9PEk4mbfeJXAzzG5XVgP8pe58331CDzLjie",
  "key21": "4UCdpfTaCJrVvsCVaAHuYuSqu4fMwivoBPFejKQts6FjKNW1LiyXXZhovUzPRheB2b3zAVfucHVRBT8R1NUXx1ok",
  "key22": "37ALtp2BDBikSVyC4maybLgvvAqswLhV6cBK8HzxeDpth9Q6CzV4ocB2nduN4yWRYJV39GK2SNLnsLkj9wEQyZ6d",
  "key23": "2AdZMv5HJWKg1ypCxAdVCc3knF1FKaQ4Wga7hQvwbrvUkBPoZUDtmvmkuiT7gNGBX5ZX7tXLPfeqm9qRGbw8qSKs",
  "key24": "5wfFWbap75FikkkSYZQBMvpv4qiYqxbiudYSyq6wjbQMAn3TX11DX7qG3XzRuhRhD1nupcBcMfYL2aeCie1EtAgs",
  "key25": "ZDtk4dxkyafrJgJ77AWh75SSKBrrmzQrnSJQWdwMpBG1qYrChEQi9xPbtri3Srd4ZuRW4Bzo82cpBwyZ3j1qsr7",
  "key26": "2mmDSjEoqFnGH3kbAm2QZVkn3S1A6w6H1o2jEbEiEMAaFumhw3N1NALcrRHJU8YRzJLuqHWHUr3VYAvWmiGe1XQY",
  "key27": "5427Wj9J1FdHHcYgEtwuGzBACAr2SBESRwLRqGgHBCUFQx3o27Jxxoo2eq3TCCdzCBA9tCWJmmof1peWDkunp5m6",
  "key28": "WbkAc84q9JoYRGDjFFUvKfrV6AcukSFUgbZpG3c1j31EdXHbmbp4j7TfV2hS5ZTt5tHQRUphUfJ3yqCeNrkssz8",
  "key29": "TSMX4rNbSHBtHSh4eELtdzFBoha2EaJEbgMZEwo3Aej9seWvcNRSdWiYWkNr28A5S6c17cUbpyrBuaPuC6jQm2M",
  "key30": "2qWvmDQcyGnDoTiFuwEfKCydw4n28UdKsgdgUVXBUu4ini5EhJM2KsWncu131BeP4pYbaYFGbv9Sh3fBSiXRJjoz",
  "key31": "3p3Gcdkn58tfpLcJVS6tpJw3nvHUbRwyXRBTXt849q6iEn26N6sQpu6XhNHiVV7fP2MUiB7Qh2JqzNCSAFT31Pa7",
  "key32": "67pehC5jMvseEaXoBqQVoTXAjN3jpLN59jWyL5x1j7TwAt6Wv4mefRLfqpPEeru5C3oqcC65RsdsmBZwZYvuWH8r"
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
