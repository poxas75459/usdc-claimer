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
    "1bL7wxtgr9FrZVeQNFrjFWjYvUH97wPRhCdFPhKZq6XWEp99p314iB77nedWJaeyBUUGgzVY4K4tiVDhg684HC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k9W4SfiNifbNKamxbFpdns5Vjg3bzYaZf4KeXbcrk166i7aQVn8D5Lwm1Z5ygjQ6PrpADTagA1nDjMcGVyrnsrW",
  "key1": "eAhcWPsF6c8coJpenoPo854VLwqtu4VbPijeDfpuXPtaG3tVvunnekfCdpfXRN7Soji499wK19sQY96CoiZxTkb",
  "key2": "55EmDAuyX1njYiZEvEAAnHB3Prab8m8aUG9rFDtFWX8BdrPdVb8vKAYMQrdt6BW4sMf26rPgUjJkKhqZCy3amBwV",
  "key3": "5kCzg9rkLDE79PDJTyQPJTdbjrc8v41WGcYv3rprZTVBSAVgn6STryoxNK3RjC2nHVN1qNkR1tw3g5HpPZek2Txu",
  "key4": "2yFVVPuZWZ4qvgbpTY3ecACv37MKf8PwWv6obWfMxE3Y5DE8w2Gk1jJ9SitmD4GzaowQnJZg1uzvNQ2EweX5k9Zh",
  "key5": "2XpGapgyJFWhHUWgQeswYZdhC34vZHpmvoVHeeaY3UV9P7h4DNCrcmU15RS75CmiiEMAnojAE6hUnsyS2uLCavuH",
  "key6": "2gpE4eRfAnTNsYEEuxbtnnFj6x1QAkZUSMY6efe1wcACgnh4CEkW6MeMu9q56HNWptooXHvdES85WRR8L1uZbewJ",
  "key7": "4ySkdXyxHeTuP6naTaZ5eVXVSoCJh843yGCK5R1yzMs8jfm8Ctus5aVpuShj4MbDrocJeQVUmq8Y1i3MhNC3XMw5",
  "key8": "YmP6tQnSVrQTzuBCNFQndSyQzN6nQG3aeFbRPPJYcbLJGwSWvFLVVdvYNvsDjvmK6TsrM5fLZVg98LHkKst6K5q",
  "key9": "o7TC64j28m2af4jpX26fnzY2etn8MXtXeeRjipM6LbhWF8AKrCcNupEUfDFNPB7zCTVzRunCEMp1vEy9CHYBwgT",
  "key10": "4XDTfpzwFqNUoCN1uPAbYaxyYAmJRQhCs6dXrum481osTpwoVeZnkd47z6J9JLs6z5BjsAJAfkPES9iKX1by3gov",
  "key11": "44r8atnqq1C68shLo6PfJ7qiAXAeK9c4udptZwWcqGuUeprbAQf7F51FPCAQ6UqiTD1oxsC1ArK6dywuFji3Xa32",
  "key12": "2eAoBccZcdR35mRcpAitj8STkQgjD5QyxwKRiiggMCagWKz2wGuRAw2Srsu3zNzifQYRwpefUBiFYCtmphXTiHAu",
  "key13": "5Ky7cKxDXBkJ9fXWgjkiQUgZPFNALfLpWvcekPayF3BKE6XDFwRMSjye9Z9haTxvcosxPPNgrkynYemQCb7T2j28",
  "key14": "rWZcQG4RiPD9ycviQrSfcHhxd2BMEAtYrtUwwxX6Fh99exyDSpC94Uwz8R19SUVj3N8voF2gXEtq5cHGMzhUZUt",
  "key15": "3JaS9EZbNgGM1CuwbBBMBq7CFNfnvMfx4GkForPjUjQAgttHjqzxTiFKww1u1A4Rzv6hASUU8DM2ibXet2rLaGdp",
  "key16": "5jueTUfg2ARrXXYtKnwgSMFovwqnXZXhj1Xp49cckDbwB1SH3ETBWnN5M15ByLe89tZxVzoRJbj6juL3u9nuzFCp",
  "key17": "HoiUCuoqSRHe5cuwLYaxJKgkpkoL5xfShLg8xodggcuQsgfpUjxeVssfFAcp9VGx9SUYVu47UAKgviUniPS7MWb",
  "key18": "4WLhJwyCZbdfwwu7fthLDTnCN348JxPatDoLnWacTZaRWgb67vt4h4CpewWNAmNsru7iCRtJb5tcn9zj3G6nNVT8",
  "key19": "4T8MhYdfyUDX5o835NPMCJ7DiqjX2dZdFCU2XYdX2oJvL2rWEaQJMUxZwfJrRYDDd4GnBo4sSGr128DkhSf6DZCg",
  "key20": "4SMgAv2FdKR6RU2KeN9kqXTRk8ASLLPTjGfYgUfPyyn5NNoDb6ZxidMJL7XwLe4htz2NjGgKFnAiEznCchpVjsBh",
  "key21": "3yaghL6wjyGrR1qU7PFNjriayu51dKhtJRSpB6ggFUzvuNHukpqXR6cRd6LXnpYz5wtLAnbzPML9AAoyAfke9RJn",
  "key22": "5sFaATNmSqtLPxQpMAtTZeaS9SDPysVsVwKihUxs9yMK5ZfbCVLmC2b6AQbbRLxFFV9DgRaTiUCg2LXGyn4SPqhm",
  "key23": "3tCK5CqQyyk71dFrZ7C7e16LQNzwRBdpZvhvCkfG6J3Zn4fPUGGRmj3KjRA3pRM7V4B5nSS9nug6PLwGQNwWhmZn",
  "key24": "8Cvxg1UWdusG3TtqporjWmyubGSB9DDLBeBTJPhRoDvgNfMRQEMCtyNoyyRyGgRrwgbvdNK3kp1Q6JJs5tEZnkb",
  "key25": "5erTBjKLcXV5azVZwsycB6sw1hB3quti17789ArdEsQXZCK1Z1B6LqZgKnn8zR5xZkw3xuyt7HFicXUSDrXUdVB9",
  "key26": "3ykncyD9NW5q266qwjhqhX99Kqs8MsRJt5BHXKYgmrYE85ouo9xkbhyiRzJyzggSvDW6Q3LYohpVivEwuZffCexg",
  "key27": "3kcL5vzmaW6dpWgbsCDkxciJ3eSPvgopuq2My7E2GqzoxpACnnbX9Gd53PdvAM15UeExEP1ez7aZpmFC885eQCPR"
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
