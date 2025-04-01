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
    "2P9zWNZomzupdtLPfrHm2GJbjZhRFbvpoxDAg3jriu6u4icr64jdaCyVm3BVvUVCchMcJSU8EfzAM7YZiZQyVPDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CKMadMNgkW9TQ8EGiqzQAcTdH8ZBaABRrzhAHMrTeZn6JS1iUihatQ1s7rfdKcv5JGb6SipctDDpbbEbb4CYjAX",
  "key1": "5Fhcbzaoz6P698M5M3S1wjqosWdftSCwugbgt1oBefYKwdNAwgypmYbcytJhq1FndmCN9oHtpcYHry1DKkQ9D79N",
  "key2": "46oJoArHHJrMKFVTaEBiaEmburqbsDUXgmMbaJ1jwj6mvC33qmCje3TP7GWzjH4cRDReb23oMggpNhEgssvHvYTJ",
  "key3": "4aVVcgE9NtRbpdqdNqcPiZMrs6E4utPYnze4SD1jR8Cp2Zh3YTTQXEjjh55ZJiT4SDtHTWtT2f2zTs24RzyL9cUE",
  "key4": "26PjZwHC2KiWULE3ZgBdABrKG8uGA5mwsF3YgqccUnoXG1jbAmeWPb8eNLVAMTquCrFjJrDBiyg4fyA1kTjQTDPj",
  "key5": "5x1udSFy3RbihgHWc5sgkrPHo9J2Sisf3Z6wmtNijvJNsEgRNX7P8WB1cnhocJrkMVYHQjx8JWPUZk1oFyKKL1N8",
  "key6": "W7J4N64qYXcJHpZNfaTRLq9tJcCLAsFYKA2fbgHufrw2WzZHLpCrY5EZ1n7KyDuyyqP2joW6teiA4j73gQfSabP",
  "key7": "4S7uX7uVC3B8QoJCUGYZcdZXeW2f3aYyKDCTBQoSNRzfrnreTiagiU7CM9EULe2n74rsWjukb1DusA9sBNLHHYzf",
  "key8": "3bMYRg72n3UYjxMPHaxWMpy8FQCuRKdSUNsZ2teUc4u8tfn7v6iJ46PWc9A9BPyUJxbhC4jbotszPEgLfm1NhfCp",
  "key9": "4DWNK7SFJPJkEh4dHjkkTRAFeoKukaqjzaNfGfofcrLwSUWsRVoKfTJbhoZUgcYJu4vo6aUMJdcuidRr8DGF5MFw",
  "key10": "4UUPnEMBSkaP5NB8bdopaMzb9kH4nQyWEsUhprzbLowHqXPpdvaGtAj3vWadgZfz3wuEaX6VSKqQXzX4GEvrX492",
  "key11": "3adXRugMzXUp9pKqD7Wfisc3xBrNrvqovFs1EnNUwpgDAZMcuqgHwxiPVQopZKchr4GbLhP3oBLJbtto4ZjRiTkc",
  "key12": "3Ed3J2LqhxfxMS63Qazj3GEBPAcPhftdwYexYYHgMCpc8PLmug1C9Z3V2TaVggiJTccz7v4Nuhh5QufptxBKiTQJ",
  "key13": "dYzYoZ4ms8rjiH3QBwSzuN1YazqiHeRDX1UuNt1vVuRvAeMxPjCXwtofff4W5w3v4FkpneYKHuXSy9g3MsVnkBp",
  "key14": "434vw3qz8nSsTGvuW6H5V9nyngQAB2c6d2yvp3oMLDwiBKCyMnJpYNKWLyFAARHKVbPs5LVyT7CBfnZ1C1vREy2z",
  "key15": "hGnXKdCJCxuEnZcBZvWBEfXaBRMFE8g553qym4JYGStorefZ6bxYTNVTiHtP4FxH2UrM9Ki9WN9AF5RTbVEx9E2",
  "key16": "4qdvZca4YkeNzhjzPUZzSXQCoYinBtaExFXhAyRKSZ9JonT6o46pUWgf7v93KR6QT9Uf1ECMrmAuT6EQxsTtfu5A",
  "key17": "2jSDttdRyMuktrDQCJF8nCRYYzn25KkxasHjhtgE9XunHybn15WnTVTzQFMo4Bq2FRFoJTM2HSrTkY7HiA3tNWyy",
  "key18": "3FYQKpqBY1MVHYFjL5J7UxLXrpeE2JfwMW5vu7w1fPDZxA5pdi5ppyvoAZnVcAsGmK9k1fe8jx6fkKoo4i5PVUFb",
  "key19": "3c56GN8Ao6s2dQDS2McknGDVfs5jDVQBKQAGn1aykPyaxgwhGUzCAXB3RG3LaZfKteZXbFJ4KFHh6SyvmwzS5dxd",
  "key20": "25jAKcqeY7s32sViKPQHWU2tBPBbZFXL8yzyevXDNSy1RLyangqAdtons1p5ovYPTpNxhyd3g6LRLNvBB9Gs3hWq",
  "key21": "4MczHjvd27aU1c3a3uUKp5QfGntmV6QNgd28DiTruY6uKgWCdyZKJNV4t2SLxum1qSMaiMpyvjMjZABKrJAdxgnk",
  "key22": "4tQMbHKi5uNcdwpVyowM3CCTwJXwG7izyU3mKdUBjY8HDq7dXbQhKks82bpWYMV66pjEZtrJ8ZAS3JQxvsRACTxt",
  "key23": "HniVjvbwsUzUiMTHJJrW3qySVYYkakd3tdLwAorgEgZbBQo8VmxtuVonbXazwA322DsWMFk6NT9DPN4rPLi1hvp",
  "key24": "5mfnAtQEndS6To4FKWB5d6kfiTe9RG7NZ1DQAf6UZUYEWKHG6gb4oNFJEdYp6X3FEjZjQ2XT7TzvjBXVGxH27Z9M",
  "key25": "3WtK23pDLVQ21dYUcbAZLScPqje8BojfFsUwisdPNfHj9UX8GmDUwqbADPGLAGZVCP9wanuvA89UtYWhVP9pqbHR",
  "key26": "4kAtKsAvAxq9Z5B5nzp6ZBz8U8DHek4ALk4oSkqJc78yiviPDSbjDWo9vXaMuAX3Kjkf9gcrDsqutQv4YmYcnr4G"
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
