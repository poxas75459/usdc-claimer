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
    "43vqnpCm8GU94ucZjrFqjZAc4mVdqUmyBZE9kCc4d63JRx4ZN6wkFFbSUuQwjV7YtQGihLtypNYJACG4wMndewTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "psXmSnUCeu3YD19obCieKyrAvirrDkyfPXC9P6a8VRxtKK3C4BcnmvToNwhBBg2J1mnKDmSxJBAKs7iDdBeS1bU",
  "key1": "2MEfh5wkb1H52asrsMSnnHPpBaUPKhcfJHSTDmgH19nqM7v74SZZZqJahp77utKZvb5P7vKv7nYkyBB6rWrweeS1",
  "key2": "59ghvUAZCu4zBCzEF3zZuEdhnNATS4ycsaWQQxwy3bgAJCPqnxg9c9F5c5eR2yhUr8FnNNDZyf7TDWPVjehU93VH",
  "key3": "5RLBqQt2aEtRvp2EtBAZc91ULCoayW4x48tNvPoTjkZpPSd3UMhgk7PjZtbsmisYMkrKxShtc2rs86LE25dWZ7SG",
  "key4": "5TTrFKLsrRrhx7oGojFgECWkTwJdrYWdJWgfu9Pf3kFw2Cig3FAN9Vw61BCDaDdyttGkcT8kmfApPL6REDfsmmsn",
  "key5": "4DaB5wcQd415aGDPvsoBqGyUmhjMSCSJ9Ne3w2io6b98YeExthMHFUjQAmYoRDJVREMGPgnRT1CgcYMwwAHvpXQy",
  "key6": "5SYX85fCYCKSv8hfDYZeLJtPRk8nW4egEkZ4sGeaY9999j9FWHA2Kzp1fo6juEK4KQDQjUHyBvdcvWb7hoNDpmin",
  "key7": "3BYbncaAzUspS1d8xF42dwjesixsypN2iwBcPEigTR5GwngQ8ePfwK1oBX3bXq2yVFoSedPzcsNsYQShoQDRQ3mv",
  "key8": "2Q5TKv9DnNuMEyGMsPYrdfeZb9hxW8ZsVWxsui2C81nGgRRe4LXfupJEgSUMgjcnb2rbJLKSZrvXhDFuLQbxuy1G",
  "key9": "4W55gtsMdQCRzr4UyMu8efDGL4NWiS7FrFnVHwVzkyQhcPLjpDnj4kmkP18ea1W3PuhSQniG4YeSgRK3siUCUXst",
  "key10": "MKikjvaE2nHoPn5fKpeRdXBkrn4oMVEcQiMXTDsHJc52M2hdCWg16vLmLovkFFrqLUjikcM1VN4eJ7L9yKLGXAj",
  "key11": "3whtYvfbRkaJcYqh6vt2c1weVcoM4MPq3pxyyptvQYDLVAbtumRWQjiEGcr1KWMpgBq955DnAbqtJhczpDKeZFnn",
  "key12": "2moppHuSVxJ1Zr4X7g1yTQH9fpV4iHsnomQaYCDeQdGD4Kr8QyMqhWqMwPrri7NU3hr3J4DyKEQDtuQErsicaTZ3",
  "key13": "5ip86APdiJ5585CvmyKd49xew3gfHSCQn5KWC8oHqBuu2DLBoBXtRrnVuTZ1RsUwfhAP1cDwMeDoVJ2hDZyUNewX",
  "key14": "3aMisyfEzWb2M1PzMv1sv7FnN9f9BzrL2DHCxCz8wJKLiidWuYbPRNRqCMoWSHQ2dbPLeCZuMU2Ub6fXQbg1Kbwt",
  "key15": "3K5Hh9JuBHrHHQHufko8b9WqmunS19FHAejPbwQtgqN7nQvazZ3EVTuxv9NP1uY54TudFCYcGZJij4rEpYxLpVQH",
  "key16": "4d4CzXDH3LbDiuWkUhBpaRzJRLV347hNJtnhZxbodcZ1i7WzBqykFTWVfEyZXa9sxJ3vH5oSujpszutPoJQuJpme",
  "key17": "4qgGiTmbHUgUcKfmqDz8Zgc3G2KJFxhh3EickWEdaLdgzNNEEaXvn32DRgpYBjnL1PsAXmaN7sH1XYvdKBjcJhCu",
  "key18": "2sYG5AtWi9oQvjsVEUGujyvgUzHDKz5r62t13avqDEAdJs2rr2F3MQ1WLYhZWeHVcDzeX7swnpuFEYgo6WQYTZ2m",
  "key19": "22qHSmLR4Do5wAPmYtJkhcmrWJuXKHhr2cwjPrBopQ91zeKweFwM4jp3SuXBFt9phEM3dfChkKHbY7nwxeHYvbj2",
  "key20": "4ks2N6wB183w1ASFyE4myVUVFdQfeakDueC8oW36YXACkZGVdSuQyUvpASiMXihRxJg2YCNT9v1mKmhNVeBD4fRw",
  "key21": "LNUDEYnjju8bEkpsrZFAFwBSdKLeLbeyCWsckqMQxZJjbQ8ZeEmicoZX2qtZ5G6AAhG8DUebJ4ZZ9a6V73acRZM",
  "key22": "237yswsgPhkd33rM9ZEXAnZGxLKkC2jDpM5UfbLTJFikxArpis22qv2yKsnN6MaH92dYR22Ck1A1BZTaLZmR6TSi",
  "key23": "28FnwarXprusWnECtw18xmrmgDcTeHTWGHU2CHyYPUKPPk5eCpKoiyWBdnf5rE35VgvuijrGxzyxzNoocrDHLpPA",
  "key24": "RD6ZG1HQ9dVuUPGkLPcfkfGEzANAHA1YefXGQFSdWtFbvc7QyseGwcmeBzM57sebPL5Jkc6avLBDnzpgzFP2oup"
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
