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
    "6pok9WQaMkN5V8EGqLJx517vZ8FYNHdWqQmZAn9bjfrrHCGcp5pWp2MhdGssd6PLNsUaf4Bpa1TaG3Q1btb7w5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21HGqyUrLe3JHCtBc83fAAD9mTAsqC5FSdEWNZDrzWsaKrGHs9BWQNpWiBTQciJCRC2gok8KjxKwWX65wHPQHQzz",
  "key1": "ZNDr3iPzrTxz9a53tXRb7vQcsnpDpxW7FMnHjSWnyS91PSs1dLeGnNZ7X22hcRDBksrRhTy4ur72KNtdwGQK3QL",
  "key2": "3ZodLD38vWVb9Brkz1GkLxGtMPfB7J1VQR5vZCfAhMUxjxgWs8Egwk6fRPEfxDL7Z5NZ4NKdskTG7ErszCph7yS7",
  "key3": "3mvbXzjXBiShkrjxgeb54EGu1HH4TwebuGi96N8fZLo4Z6yvMcNzQQLm19AtnkBjusoM7UifFySTC7AcfQh9JFJ6",
  "key4": "5v1XEYHa9Q8nGGaA9gBpML4dkops283jeXvgucDY6ZFNEdGRMfQWrFjx6obnQhmRvcdhXAY9JHiysvYjJpMgbGWQ",
  "key5": "25AW3dzpdgxn7yC6u74zwsF1uAg9UPscWqPazoTokthGk3UhbzgsoyDU8WNUhR5ufDTTNmU3CdnhProkAzfsjnnm",
  "key6": "3WijjUssWc3EAsFrPvU6K55rZyCdYeLPR1G2MWxqZ29Q8EkZpznsCnkVbx8dMuTDkU5AjJBPRfxSzjm6uLUNDk5i",
  "key7": "3hBVew7NqHFkHGmmRYq5oQFShnkAjcv6x39okEYBK16TTzciDFZdMPYhb96rvhPy6E3LkMKA91mppXYDFwExJAH6",
  "key8": "3J8kSX4dAa8HEcEg9bUX1RQh52ppxgCgkpzEZzta1BM8DHECNfjBkzJDcjUGytrqH7mNSz21spnUN7maj1y2zXZW",
  "key9": "4hnBo7oV7isZ3RFQvW1q3eDG7MZeRFGMCsaFcacNv4rD5eR9N4oVYL6HsyJv2m8FhAuLkTRZ6b1FE1iJ4RLv6uaM",
  "key10": "3GfkGuar8bb8JDMbSbTyb2R3MfZdg31v7dS2JFK3TBTf8CeqiLoGxGuwazr6z8AQ3kGP8NCLNG7n3SUVDXzFae8K",
  "key11": "g9C81Yq5LWFNRRfsv3msLxdhngeaAq7WRubDuNKTLxguvCEPtTKWSSt5dc87tBVQfV2miXtP33sSeiAep5QS9ik",
  "key12": "5QN7zNj2LxvPLPmsjvEkmkYfWyR2RpFG2sx3GZxFJHnXtRc9Ca8YEZn7TUGYF4XTQbgbw4Lf7YSVHniMtqDFzREw",
  "key13": "gWk2UpsC791mQgnYDEvk18oegazJR5jz8qVPRSNy6H6GH2vFJZdYT3ywG2zBAoS1icN2awEMEicioBWuCHt2gBr",
  "key14": "4MVbavNk2q9n66sqE7YiG7epjDu8gvpkVKh9nQAYYkAwmCPmywQXujLa96VQE1bSca9KvnU16fJ7HKWuzhxa2ZJV",
  "key15": "5UrkWz6AiaaR1pfNzqUgsmLMKgGiN7NVZxWuZwfTEPNUj3HESNMNtEe9KWnxU2A44uasnaMSrLEuLN2EPYAzYwKo",
  "key16": "3zK67S9g9HoaTitjM8vLJftsSCksweG3mFWpFw8kyyhRcQysXq88Zz6A3XBg3xtsF1zysRBsv4Nd3vUpWQXFf4tn",
  "key17": "5PZZTmutJcDFc1p3R5Q3zR49XnJWKD7enzCR122SUF4ksc8YijaQT7MWZoTaPrzetbNiNZhnVNS4gz2HmkmCb3Km",
  "key18": "57a8gKbjED2sdk7PbBDNg9hqA5CsE3wGE7wpCHGpDxSW33TdqeF8d4hFRSe3VY2uANavpocTCPGKcMdYYph45n5p",
  "key19": "3iLHgBZ7MmpeT436C1kYxjQvbqsER6f3FCHswJXTBnfWSorNSQYN7BRiEofftmcfyoKMZhoyUZUAnSSJKfWLE58t",
  "key20": "2DvJwXqCss53gStnwvoJfJh1y8nPDPtWLoZ1qDykLUGDkKcxVHEiqCTt2W1f8fGw6gZs8tWSmiJjWBEii6ybu9qH",
  "key21": "5xaKoJjAKDJm3JCN6dZ3pc4zigvecFiXzPk1hHAVJ2cG6z3Frqf78RbHeQ7hwLJYgTZtifX9BUp2i5hj2y1JGH4M",
  "key22": "2ZEdB19HNwZwKPNtEomtSHdZhLBagbHw8VPy1zu438fBqViAWRMpeqcrLkEsXoPWEWa5J1uo6e9FUeSDLbqPRh8M",
  "key23": "2q7PvDKSWGdp5GeBure5ASyovNk3zkvyS5vZYGEkQy9Av27YT9b95b5h6GCrvybhCeFMbsBNbxcwsD7iBK6JCcDo",
  "key24": "5uTEJhWDKggXeNHxDEJmLa35sVq2Fkh1AZ7YmgMUy3DC3deHuJ24EUaVcXg2DtagGrWrkXbseTSCT1L5KJuCGDmZ",
  "key25": "2KvQNjRofGHuYHrx2tF9vtZ6Zo8sGeg8mr5Jvz73te9tZUC9KfcYTVSQfE1oNM3RmDkktwcQWVHpAZaGyLpf1FWg",
  "key26": "39VcJ9PAMZ3LKjvsf7vtpnSnpjKaYNnjU46Lp8QsmGiBCkmgs4YvEbrWp2nZKRF5WDkiVyZAX6XSzRfk4mF5pDTj",
  "key27": "Y68pnszem6TCQJy4iuyTg2hjn9uzqdwALrJb2GHbfUKyeVY9N8QD4VZPHCrinVtbZWEL6kwumKkKtFeBHN8j6Yc",
  "key28": "57YHUyoK3BWLgR8js4m9uFrDVL4aeoobAgTrKF9mmcp5XJrJ2XUZ4yQFzf1BFE4M598HdzaLiLt13vjbjESk4GJ1",
  "key29": "5J3EHc8Gq9rpzywsuAGG8xWEXhJ47WFJfoG28Szit2vHChUU6ogojVmr3Hkhmb3in2ZwqXaqxQY9w3Ag5DRwnQGy",
  "key30": "2XG7kE3BkfCrGqhRjL3e417HQDM2hXpzv1w43rp8SbL5Rv9hMe4fTDDAzbfMMB1spVUn4Rv63t8km1xHnxmfvPaQ",
  "key31": "PjheYTrrRc3zqsEwP6U2zb9q8BL3WNLiASCw3oFDokULEFCCcsf1iSbtMrjo1jhWkTA77jzEVjmQKU6oeYCujrh"
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
