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
    "2CBQVXDUrYJ1tJDc4rtHfKzRF1kh4rn6qFtgoU8ZmCFsg2GU4tgRgghg9ASQX4EVZozvAFiNAuixEZsGfV7MKGyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "675pN7UhEBeNAfGTyGXpAuxT9SG3a2c1oS6WDq12vWR3kAMjAhDKYENYwFJJw194VhP2VgYtWzshJM2eZCTCMCPc",
  "key1": "DKsS1aEgEemYs6Go2AoVyQCVCZvufvtU5VECSiZMdSeZMKn7taeVBBnRU8cW8H5EP5Hm3GwQLgkkEbcUECmrH7A",
  "key2": "4W8vpHPEgKVP2dto6Yvof7DjTNtVNUfPrGEzrZnzep8zGwQvzQ2YhoTVYfEUtdfcMAkymLownZwhYB9UddRg3SdW",
  "key3": "ifDHY5BUPQBstfWCxBcPrhdiYiay78R5Q7CHeFHtbiEr2FQDydLhVSNxhiDT2uhifPze3Z9vvn5dnMSSbkkaXe2",
  "key4": "2PwxNTTAAZYUcrzx9qTYzZ8XsUZg1Kcu782XSfPvMQsbeLJgNTHcrdEzUAsTY1Do2ycM4TNbMC3KVKu7YawDw7fB",
  "key5": "5x58MjUnSzvyXzmLPQP9gx7vasUoSj2cHNoquxViWjSEhxNJUcYWbUPqVoXg2jEcc9nzQy9PxzTjV4BXnwvF8U4b",
  "key6": "2MZoBhzpwmcszSiiWwrS5iM7pbB2QiN6ZH6PsXMnAXucBmXFe7rCthFrfFMQz6vf6wZoJzWCxKCBvZUdeRb1WmpY",
  "key7": "2dioQwkxCGhGN1XAAVUzwWbEAjj72A49cSBaVyf8CYjs6ucXw7hwSKfJ25vaNkQNjBAEwA3uNBUZYCWzRax3TZgE",
  "key8": "5SZxD2JYTRgtisimTS6fz6ZSD7L1bF8ZopmRZmuHukL54524y2C2ResTcfZotc9RYzfvdTVmrX4pQVJYrbUsx1km",
  "key9": "5Z9BVozQdJ4yyQoCB9AqbTXWtJcSytaCTiKNgeQDNVKBjFY8wu2MWdmsq3hocJbKsBzMPpzdcZxKpDCY2WR2bjae",
  "key10": "4MRRcpLxZMH7X9CjHnaAiXZL3FzcuRfDUGDApV1CDhjwghwAMqriTWA8BhLfyLhG2ePgwcSCZzrHaUowzxAwfgyT",
  "key11": "5yBQcrRHYvZ5FbufnTv3nzHDNbDgLr3rdUZ5F1FpPw9uSH59D6p1e7M8AbKR3prqw3apjzXKeFLACR9qLhMNb7Ge",
  "key12": "56zQEtDWxmuDkpWTKwUyeh7MSL4VvGTPpaF9bEjzS5ag32iCbKocNKHDPr6cjZ5HXcSo9HQipLuMdGBEAoYJbSEm",
  "key13": "4znA4NxuT2SRnxFLbeisuM7E4A3Fv1B5iz71UUrRBUEo9ELwuay7bPkc3cic8GNFLZQVzcu83vhySX97udpRezUw",
  "key14": "5W4pughSx2rFc6wTrUMNPhMDe2M4JCDNVbzZrfazWW2qetdyAtHAtu2S4DABubVC2pWpePZ2vqTaWXrNU15zEkZx",
  "key15": "3z1SEhPyRo4GPNdNi22jFB8F1yFiYcvBkWfiMbArRhGap1yzi9cUEfeqWdkj1bVed6fUw28hbdy3EbrBDN4AhwcN",
  "key16": "3cxNf4EVuYRWbD5s74DUVRCmr7d4rGyYuPRh3BPHP1L17ZNqsfE5gNHUkkmkkg5YuKGTEKLKq7WK3hBCjez5XYSq",
  "key17": "66f5mTMevVQdKJtygzdC5tH17zJU1r5YnJooMkjeSotvUBr3MLKDTnjS7HQuXT7AXjdecxK9hQ7d4UnpYECRVPMK",
  "key18": "3MfWmPNaN4R8C49EJaAwCQBrK5VdTb5WRA9DoqnPcTEQyMFywwvDn9QjUKS63Ku93tSqznNQakpL8czE5ib5Widb",
  "key19": "2Hj88fMZab5vAdzUo23jtkDEoZ6mDXzBPfJbQRtDcG4YU5beAvgFb4Mfgu41amYMKLoCux4nKKk3ijrxWrepMCrx",
  "key20": "3bkhNTtvMcrtzwgTDHBVbZ2M5v4KhZZm7KmX3r56tZRee1u2dakmYLmpGB8ULi29xYSkaqjrN6ZypEQa7wbLdDuT",
  "key21": "5hMRJLKVhUSvKXrE22Dhep7mtxe1NEMRCdUWoUQezc5ev8ZcgVR8H6jZ5Akp4CHQ6zjhvYL73RaVuCpXkxqVtFwT",
  "key22": "49fseZJLWph2ZjkqTn6J9PZcA7YKVNATgALtpBkqey2wkPRdnXDPGxijWC51imVTFhG8xF1yQpXMrkHYRzibc9s2",
  "key23": "5TcUxB7rZ6Y86Qg72aURp5vgrmpfFiYnV8mayfRpX6HhTNXjPtNB3S1TgiqtTPbifqfutdu7CZdGhWsKFvK7BbBF",
  "key24": "43ycc4WV17iyPPPSDuwNanojX4QCKgKQDq21jkvDRuTceYhacQibdCSx8gxPgvcHsjDe3QSJ1VKGE4HtRPUPfiGB"
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
