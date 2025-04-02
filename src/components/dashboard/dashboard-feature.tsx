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
    "3ErqwtHcCBMbBENUp3NdQHBrrq7HAp6P3BNDwCdxVHkUs2FZiWzmWKgFcgqzxRnqGbWb6aHkeWMTGmYRbftfwHqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38mrJvvHzGk7cx2HVRasNzdqNNkP4eZyhauLWriNqLynboTCX2w6jua7Y6SD7qoTrScpVjqfcKaE3WPFwkPMZ6Gf",
  "key1": "5nsJ7yT9vDhkkjhu1MJMUdjHrKML5riwkPFvazBmDBeSBo28ZydQMMmtkWq2mdkFYN6BpobKNCB7by1ufu4BWLT1",
  "key2": "3QgMf2fhgMp3Mobd4DF2qoxikhticH76jPzZFRCeS1U8TwfmgUm5DCdDJ7eKEJzaorMPJoiCBd7Rf6a7boHQqnhT",
  "key3": "3Qq5maibWfTnDJY9uWhx6LrsynNZ8Chp5AjiprSbmDNw6hYX6jCa1tiLwfL1GUJxbTsDjVYGECNXsQWAm1HczXeU",
  "key4": "4MxPjnvxdMTtvnh3cr2UBBdaJBkNCBA3eNJ4bTjeNcppm5nC1t9QYQLqVyTdPoa5D6XSRgveKB1zN1LLz4LPLu96",
  "key5": "2SpFVrzY9cA87JD3VcGqJuouAHp3xs49uZU88WUEq5qgBYyMiUSFKM2CFLaEu3vUuYyeyFbX1xUQt8gdhCttLaDR",
  "key6": "4NmYGHVjJbJEApBX1Bm9WkcwMoVjafjZp1LgVaCSSzM4gZw5saxTcK3nL8K4VgvTFSrKJ43qDCW7eDvJZuhsvnGv",
  "key7": "cio7LpRQEp1S2UizUkTrFDCTsSEqyJeELU8ngaM3csGzzxCShDr7rXWYFbE7f8dLF7F29KYenLfkib5BzLYEQKR",
  "key8": "27BDbNMvSxcTym6kRnVNrWgrgpgioEpN4dWuiYbCmZ6kEyjemwu76KqigspHwBn8ovFPDccLxhnZNmyiGjifVKp5",
  "key9": "B8KH53yiEBnV4M8w6fQwLc4nSXVfGahHzk3UTY554wHuWDmP1k15dSPwzewNLNbNFKXEo2v7qUF2hNio36C7pEe",
  "key10": "dbG9eqGLbj933g4MFQHj4Xwi1dD4ZzFp55Po1rHPaX6JyepaJSbuj944ytq2Zjir8xxQeorL31Hg5tbHPJ19DXc",
  "key11": "2hv2R2Hw7a22Xe7vRVEgLBEoDJbZVeuQTyYr7anLwDeCK48DmVnusUnaqbskcTV2TirYAuHSH2G6NYzaABX42iaH",
  "key12": "4zZcpkR8YqL4PmF6yhhzJnYic3UszbXfZa9bFq4EDK13rohPkJSYrDABSQQjtuaZSK5dqxEv1kMLMmkUXmhwvWeQ",
  "key13": "2VJjSWWbjYay4Rv1RacjaurAk9KSaePXHNWmMV6kd455CPsXvcaKryxbVgCPY4L2oK5tuWfiF2XCvZCctyfxCAse",
  "key14": "GBDtNktDbf5THcnz91afAbmVQi5ijQ7gNrSPkGdmwabxgX9nGN1mHvpH4viHtYLRB7Wk7bYYAd69UqLhErkh1Lg",
  "key15": "2KSEkcHXKhNFw4HLPGHRQkC9yERxsBghoYuHTbtaJDsn9DpASfFivotDAcZqbGz3AVYEAuYZKnCNw1Wktaw2PffR",
  "key16": "5Y9LhKBuCsxCmHCXhggkRz7vQV6PyyxxBpWN4nPSaJCpKu4swvmADJjzLSi2mis9G3cfvBQ9Uz7H3WtccohewT5r",
  "key17": "qHHo4KLseByvuGiLfT1MQUTEcwcSXv5QkwaTzPjozYWFwV3Bth1hZypTFueYAq5zyH3ojiimYakHuPBQAYDfo6B",
  "key18": "4cTDibQRcDDp5Y3QMwJcJSJDMC5HA4sqJLLui45aJzNGq2i3ugiSQHwEn8XPz5FKhhpB65dbHVcWU2iQ8xB1iXRf",
  "key19": "3qQ7PJrXs4eBpPYEvJ1KG6iBG1DCPGys5mnfS1zy8cMJ6k9wV9VB66itkLwAJ3VZYQBS5ANgzX1gR81zoVw7i2Zz",
  "key20": "5WhCXKA7h6KNSUkVkaBEffvkNb86hk8grgpLU9CynamEbgj6MEAZnsJYXVf9b7G59332jsT65fX4WTSwhqQL94xB",
  "key21": "33bVjW9hfSSNpmqx9x5xgpdtsPxPdt8fPuokjHTYeiVxAkyKuNLgo9Hn2eNvGveVSdFZXnwExm2UdnC22W8RQPe2",
  "key22": "4PVmJxKqMBg4SZK34ykkdF4fnhFu5D6nPcJnwnCEp4TxNfZutEbzMBYk1draQqrwawgD3PkwA3mRSCS3q6awEuGy",
  "key23": "4wjtePNPBCwAV18piwKTLvAEXWMhEVHMPCRdvKvcpR98tiLTGThx2UzVDQsQb8bfVNAapr1gamN8RgfqBQJw383H",
  "key24": "TqCroLrukw4NbnqohAm7PcMtwyvhTSurpETot6FLxwmM12EMHQLkCZ5UK76mv1NRdDsRvjgS2b3pbYVnUtWTT1g",
  "key25": "2Rxbc5SMcfhfew4YDHPbBvCiTxkLgGUJXbtUGvHt89Adm4MH9Pq3SMUjLkubZVYsr6YxzGjfq7W8bUNy7trfY8hn"
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
