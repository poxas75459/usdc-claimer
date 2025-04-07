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
    "25yWT8DEYx2SEpoXWqxkxNS2GAW9Xp6bTtEZjyRu1xbQQn55BjvCMSrSGEb51hBHxNg5Uz6D8GWMKFV2AeP48Y2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ovHHruUWRdVjSrvwxK2Ltz37ribGj4fyN2hkXFfNFWAYHkKpPEeZLvCYP49DcMCuQANtwxcWhTN5aX7Rj7kxxrs",
  "key1": "5naUdKV1s6hQfUj1mH6L577v3cxLhge6BgDTiYjJdKGfBXZx6Xka6c9L34qUwKLt76HMRKgFy9G3Mmo9TXxY8FNH",
  "key2": "SmMp8qWAWr1WrTexKrKPieN77X1r4zzvrdk38FZdNcxwVBAi2sVZg26rgDQLhSX5ehYc2gvsnmukmn75cWFJkPT",
  "key3": "3hTiokqpUh3TWL419YBJVsx8qTattPhipdmoR99TMftXUruZ3MUXtkRrZTCyDJKHa5Rkxn6ga3tbERFiT8aHqgKU",
  "key4": "3CmAzDWKTPRjvXemE4twafkobFaoRArrDGWeSiT1D3oLW9iStbCJJkLamnvsDMr7pZRA1uLVVFB43BDASeQzxe8g",
  "key5": "Jqe2LLPVWzqcRrwUkGznmEVdmeEUvRXZctQ6KpenUoMHwtjXk18szvowP3YhMoo39twLVJ5HQVEWU8A4uDPnehK",
  "key6": "67avACWA65Zip74upacjq8KhiQac7QKvwjningWDMdwszXREF138BnWGWs4Cc9yvFEHk47SNVf14W6GM8cPimzZ3",
  "key7": "5ZvocbQ9SJpf2Vi1otm1xgmYKr1Bk6YmAZbEaoKe32ZY6nLjiNBFsW1D9hrCyZcJdh832fFScfL5dAhrz2LF7qGN",
  "key8": "DhSvrV1D65WhArzvfxHgrg9de13RAN7TquZ5wgkaUUNQGJGBBbFDvrZDXEvELuLR9ebM7hcH3K3Fw1Apjgahk5M",
  "key9": "YDKD7Sbn2BX41TLzEtfLZ47KcDTJsaiaRECSZ5aePSkFd252wyu8v5dkpd6GfjzJ5JEFBaKhBrvZNhG7x1R41aK",
  "key10": "2AduYFjjSsiZv8cAaqXEnNjB1MLUuYtXXj7BkaAw9CJpiv5vw6Hn1xQWD2bz5JWmujsoFYtZ4aur1LnuixhWqzqW",
  "key11": "2nMEnJEUomsw8ASsuv2oqtLsJ5MHhcsY838Hwc71qy8PLxyxjMTcD2ufXuh6omw5M7HQckFL6uBjxLpodpqwBtr5",
  "key12": "3v6JoPu1A6iTsLo1dNd9AkVqmdQAakZVcfpjBRSn9DAeC2tp93KpeCAynU8etcD1WTAJZobaSmHaFunpSm8bFeHH",
  "key13": "rsdvognkLxrtvQAd4RqU62iEkbG8mxFaZwvBUsz8jFAeHvn1RNq7B4cxdwPsvdbkAGbrKmQo97XWMfChJZPxHi8",
  "key14": "5RbamKoTUrpCjSmEnGMiBrKSqhZN8T6qYwgcH1W6cPVg8iBnZMk6u1E7UebvPRmBnzQ9eCuUdA8JK5SeJKL4yHqL",
  "key15": "5AKGEq7E6ckvnR2i77YRzoMUZpAf1UuSPGDgtpnj7euL5aE5EFjni9CyfjTaUg8gJpuxWjjRsHdJao5YXvazpr3K",
  "key16": "oxpBwUHiTLD63twFRMXCqeV82AyBEMus1KggQ3rLibCEgm3XLDtW5HjmTSL2y2Xk5LHc3EWVqBynnxjnP4L3Zad",
  "key17": "2qvrN4SXxe9EuhDWsksxymL2zCJMP4t1PN1Byk8C24WuAMnfZoDwrB1jdLJCXUagSwsV8R9BCxy4UK6fSiVbHY7Z",
  "key18": "2YcDofCw9WwVpSkL62DTqdF1sXZd8M6BmnE7naTdzyDTiGB8dxpWaE1tTfcBmWNKmGTWLHY57LMgh8xxoz6Rn5Ww",
  "key19": "38bNK1b9GqtDDDoBJmH4RxebBNaKqg8av9WQdNB2dRtEWBrp94JTcFU1bdbRrTZsjoxx4AKzGbcMxemxTYVGXz8R",
  "key20": "tSRJq8BMN4Qrqc5BzijmgK6TBSZSJZq6iYeSZQ7kt7xY7vzNx51KWLpydMTrPqneSA3n8Qd6LVxjL8rMc3vvLEC",
  "key21": "4hd6i9uvkFUhvzyehZE6WqxxBsJZHVD9iUQfwmTniRhzsA5vhVacrVEMfHGKz2zW5xRdy9hREXpTj4hQ7UiykMzX",
  "key22": "5bCiXzs3mWFY6e3pmkpF821mUfifMQzjJ5DsTQ7J78KGve4pTJT1SyQJ2JRcYpGCkjbRUPySzmdR5RJYFT2PEkji",
  "key23": "2jPTRPdvUcN1mucXJRDzwH3xAhnUskHA3dpob7stEVws7owxoZfpV8WEDZdnZPnPqCiQ5a6wZCPnqPcHreNBMfZC",
  "key24": "5CRAb4NkXVjN5nkuKKKjkPfd2SjNiTvaq5PS8Uvev53xW84SjriZeLpX7LqxVsLpKzACBupgrWp3AEckmbUzZ6dT",
  "key25": "2X9vMbwzNL9LDMeVQoDAaPPsUmMxW4TYpRirZw618oL1nQBfN7xZVamgsKZdZDDY7Nup4SLgDb5F9yC6JUTh3dSB",
  "key26": "4JcBgvbZVwqB3FwSnqkDs59eb3vX2RtbS1s6VMM1fpyscBzHUodNX5NXmUQAcbrEqL9tBdgzDRX8reXPjkWawDn4",
  "key27": "4w9Qmn2uT3z83GHDHZy7XAQCRnxkLvgTN3DwQPp3A7sXKriHdEKYMbhuqEGf4sXaK4Uscv9mGA53jCEouonRXRxe",
  "key28": "5vtbGEzPfpEcshx44b49myuWdbum2FeSnjZXDP4iC1q7aBdfsXsQpwon8MqQ8dSGqQqhLHcE7uuYh76tRXhsJ29p"
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
