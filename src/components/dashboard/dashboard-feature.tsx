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
    "49W7rHms6cnBkX9nCkfxG2qPv315VU2R28ZtMV3eo8Y8xqGB7otrJN4dstXRh62p5auzQa8sHyUBVzy1h67DrkrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ngA2d8yG1gvbEDAWW6pKfEE3jXuKLC5r1uS8YbVorppR6J7vsHDWzcZCW1ET3H4jhidXWS9bxhv6kuPaj66PsMu",
  "key1": "4zHqGR2tg69hHZGgN7ihK4a4FFSB1U9GF2NbrT7xi5yZRP7q9HNn7XD5Ue97wjW8Z1KiFcgWmJVEsk3K4QhQL4CN",
  "key2": "MG2CU19BMUDPqAz1h3oHPrvpr5zCYbHwxvj4vz6zzarumCyHptkLJD1imbRNSH62tzemN6ytfMnN1TF6iKxgNxB",
  "key3": "QHpnPCsyWr8KF8PxhJ3hQp8mEXa3qGmGz1Jar9jdpZADc1KLudSL5TWbvpHLiFh36iVW7JUGDYxGH2aMHp6x9aM",
  "key4": "3H3v28o5gpTZwBWp18aX12LpNpw68oxqDrb22AL1tyeJNaYTPdb69u7xwVsBQF8WNF5HRrxMHw9LcxkKbyeaQbVW",
  "key5": "5MH9nmvDgpKbbUK3W58dwiebAiPyfq752yzXohcMSWNE8mNpvHe2bidxGUM1z5nnzwAAzEonD9RVS6wiUuBvmZNF",
  "key6": "mr3G6U58xY7dC2wkAHVHALuGas5gm8K2DLz2YrxYXeig9LPw2KoDVG54q6piUMJcRc4wA8gkvzLy52WmtP9uiSu",
  "key7": "3e2m3xKMD8dSmPKawLxVJ7moviF74Lhtb64wkvuL7HDYyQpjxijfyZsb86PwuE8eRPoH1LhpzE1T3SN8kemAFjpU",
  "key8": "3NXoskmuzsDZxn5Rph2uiuF11QCMHAqWAMA8gMj5ps2pdCkDvfTwHvXQ5L5vqLajs8BCWmdJnj5SRfvRnH8qR3CJ",
  "key9": "TjcMcUbd7Pf6u6o6ywLFcRMepbsqMXLWrqVMadxWqR8C5QKgUGY595sv99xGVABm73UsCJgevTsYbBtUSiUkDQZ",
  "key10": "3oyt12fz796GojUUUzJp1fA8pwgzb12gRzEgVbpin19YinJCeGKbpGDay2XXLeMqhpGf7RirtfMtK36aoYRjCPyt",
  "key11": "544KTsSKrFwps5AMUzycXjHyQhWFsaowVjrmiqjTjMFwjHfSE1sNJyMXxvSHKK13NZuT7r1Y7zc6rP5idxmbaXEx",
  "key12": "5RVWHDmDoRjj3s3D4LdKnwo777Lx1ZFsqiBkQR84uiR8iD8fVAWsvpbAgosxrNofYWLYQJbnkWSsJyNVpHGwD5Sv",
  "key13": "66tr37AYo28YFWEvou6k1en4nS1ZZ8cah5sMtRfjFZpCgcJAuinHoefsE4oZsQK9nMbA19vddKG5jy54n2kozmMx",
  "key14": "2e9hnxaChyjrAG1xRVs6C6bMsHM3FYQAYpmgEPP9n8J4C5TsPFbZbPqdZ56W9B3gzp451oVEXtJJZfmzSUAT6MT3",
  "key15": "5qpCym7yrhYqR5hMoZnoQgVjd6Ynk3MkQV8UNKLeJY2uZtCE2j8poXssxHjvc2G6U95AtDz6qrbsw7Tvi9j3NYXK",
  "key16": "4BJPFpzFp1ZpP3RmdpyrUtdoYoUPgSpqkGJgiemJ5eYaiqo6b9nht9vLTfHCPGj81S5ApQTCg5Uqe3F9UC3VG7X",
  "key17": "66FsL5pTiEcXTZBBCzUNPnxpfDd6hzGeCruFXK3GGA5BiuiSHHGi5RqBRKp2Wgb8Wbhv3VRJ6xo7CkYMiW2PK8QM",
  "key18": "64Pf47NsBJLdYZjksDAb6Ttq5SobAuGBACvNccTFqHEGGe7nV72XAL3d1TJV9cJXhVYHGeWn1MHWYLQ1CSGj3UFA",
  "key19": "3nbf9ChwurMFgHrVMEpBcEFNMCwFRRNePnB6hbtvp1EAK1wANBYJk7U36GQny9u1JnByMSazES4gRYouxcgFSzpu",
  "key20": "yPoM9NsqHAKWQu9qQeE37yH4WfZrvreUaN4gWoHrFjxs769CR9TrReLJh9NT1nMxYwSKhf9nPehfVuQR8HRCLg5",
  "key21": "4FNz9iSemFQsPDxyqKDbSXH9cam4DnRzDTtvYGzrgUixaTuyHTLP2BV8NEH1tCTfKU3fLGneLGKnrpmpxbk6npa8",
  "key22": "2uVMMPADGJfGzo85EfgCDwMszerT85WG23VWLWtgwhqmm9KoqetqNLjFFWeFfah64mNgjx8SZkqHAXZM3LfbUf95",
  "key23": "6ypUhUpxAuwRbjbKJW1cH5tC41ua7caUVk33HUCEyfQ5G5bog6LreHA4YR6F4PWnVwbbLzxJVTyb5smgMxGQXE5",
  "key24": "37UFRv9vSBQ6Tq8XAzw9jU8Z9HpW2XxLCcpgfkw5jEQj2YAdXfuRsTx9Muh2U7Cjn5i6L6JPoXNVUCJ2YNR3X2qU",
  "key25": "1Djnd8anijpxbHyNbY131Jx65mYB4ctPfdEkrQSvDChDBdg7BC5v5A1Gxs9q5kVfJGyiXbkDhAfRNggd7d5dUpM",
  "key26": "pVsPkEBKu2Vj92p9F9KJcyyw9jYtJuN5WECPTdountZGEnDmp7n4bj9dhiKWEQ3t9mBoHPrZrr8CBKg8mYsZJ43"
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
