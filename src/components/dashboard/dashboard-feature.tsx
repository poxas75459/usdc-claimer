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
    "5YqqEmGBqWncGhDETuH71bwE5oLewQQ2pvfdvDTFkM9CQGx8Q6pVQrbASVM5oDmc7j6jrcoFuVZ2JajQXuyrVr7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52EAwVN4v9uEjvERhTg81fuHoRm3Tqz5jtimeEXGfFQQbDceP3KmoZopGEw2voXPbt9qjVG2TWGFBGJ4KZDCnVuZ",
  "key1": "4PM6fZqA4nx6pTThyeZ2e51L1TDgMZFrLdBHT5Rzwd7jXFJKd8E2XmU7Sh8ZuWEtXZcte5tMVUoVHZ7h39GeWUXE",
  "key2": "5Me1eD8KXbC3KuFx78fs28AXe2uLrygcSKhDn4rHrDrb9jryZbSTS5cybWJDG8od9RGX55eY3nfYzcPPB83HWLUy",
  "key3": "4ZQ5DtvXUKAbzrX5NuhAoMAGfG7hFof798TKSRuThwywXVpJVaZMC88ugVyeBh5LwcFNqnM1uJuLu9cQNFQmKxei",
  "key4": "5GP1rL62FQ8gJpjpNTMge8JxWbf63WZ2YpR9175hGNi6kLncb639ABhyaNaiMxysP2vgsVnudhGKEinQaaVgtqy3",
  "key5": "FznDmUcfiPFpGk7d5WY9rfPepBDQWuTSm2otheHKCAjC3EDVT6DFDsR1BucRhue1KPMQD9iknqYqGpjdr4cejTx",
  "key6": "U9K1TtbefimKMi6CTvKnxz2Lhygj73vMvBqk4SxayomoopZxSkMSdEufmenASGnzQsgXrmMw4AghQCgaJSGnt4E",
  "key7": "kmCCS4PygqDykJBpSfZgKjo7c9YfhqXpLx6B1ZkenaYPPVHZvnKyGD9kMBDxV9wo88G7ccGFe8HvN36JsPSUypx",
  "key8": "SZwNCoGNmUGS2Nde8DpaKaursQ45Tdo3KjduZCZtTtmYVqk5Pu9t8CtaYMC8LJoeR5U6varUcUdT3s1UTxNDkzb",
  "key9": "Sw5S4kCwQ9K4DojkpF4Y9GN9GLdMCXkL7ttvnRg6zxXTzNM1FDaZ8PMUd5DCS8wJ78vRTDk28rKD6xLsEMZHoZp",
  "key10": "32ebJAwPmUUy7t73URmfydrK38M2C1zmhmeQBGi6ucP4tJxe3m2fqgbzPpF4MaFVTBP7Rn17NCnFMnVY8Tm7LXu3",
  "key11": "4kSLteBj9ryVPwExKuaMFGiYhCXLCMpu4sGpac8GVGDZCCV5GJVHJ2Fo29cfVp2VEsr6dArkBsBMc2EjLWgsBcZF",
  "key12": "2KM9HX1dGCdhhPLo3NHdwA8LSc2h9j9Hjp454dpknmtXcGLubYBwDwRzbBJ4q9jaoqbKLomuHX31A1mQWiUfe4VC",
  "key13": "3HGyPNPG1qVw9tEBtEEN8kecRtEpH6yr7Vdm5vN6RinQLFHX2y9vwbfWrB8Mrc6yAcmCdUYTpamVEM9TFnAB17aX",
  "key14": "4pBsUcTE4bt9xeEjpw2SFscX2Tt4ek9aZFQJDHSxHPJao97pAz2ojQtCy8NXXYghqCZPrGhNYES8oyapxdZ4uNLF",
  "key15": "3emk6tf3pV1JWkxtk7Q1e8PvJG4FSHcopoicGRFZapnBXmE2wNVThzUJw66JAJCUudGtM4K7KGbMC8LuG8Y6b3tK",
  "key16": "49z1a2duNkFvXLLY46xVHaJmBKeKDcjvnk1FpmuSucEmyVWkAkhb9TpSUzLD9St5C1kccMgwWj6KPAfKWcGu95rt",
  "key17": "2pDGBaTd4pq52AG8B28BTbgGPPUAxts7z4bffsoyNr5iYbQDWBdd3eGPmzb6861ym5NRL5dh2zcZDyCBUCSmyrvt",
  "key18": "2XgUbDnifx1QyFrDFmtms2T8SWCTo7rfzed641UyvSPGSd7Zd36Ns3seKLNsn69gZwKYgUMp4bpYNuzzyNc532T1",
  "key19": "5nTwzjhwAnm1Fj8z5VZbLGMeu7MYoMELzv6jy12vchAtPxCfEM3WDjrRTL1PiKfu33Jn4opjiR1hk3aepGGsrktx",
  "key20": "4CKHrJy65d9SJd8BjKgMKN4h5APUSKUbPENbEctExb74GYw9wgadXMXpzuFpJ8bQ1FZiZw7n9swfJhvQgsUT9qkj",
  "key21": "65WQVmwwbT2qfHkvhPK348ErsYo38sNX1ixARFQ3YnvkRLm75UZjS12TYHNbXYuBDxoAneWznkejgphW9MZpZSkf",
  "key22": "3tXnNF3eRZksD8XWzhPhmDiXFEgzi46fSiPMKuQpXUnm35qvQzb6k3pgVR3PfTiHc18XJHvA7cE193vYxeVAdBHT",
  "key23": "5UYoXXWWPitfvrHJLUveCMYBwV3qA5eixs63kEUXHqLkKtvAXcfboqVgtdaAgqSdS1yc8Q6T5LS9PHFLqCSG6PBq",
  "key24": "U8xQveyFzNe57xjJCnrxLGf97iysnHPoNH3Z35p1MR8QKzXGhoDXaCpcmYxpVeVBsNZgTFoXZmhHa9D68PUJLwn"
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
