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
    "4gkM2Zt9X4PgtDVADWh3j7DQSEuWzCiMoMmJddMkgWqPuGFJrWffxAfnNaa1QQYEKBGyuRAPCtVQRW3gjihvMyr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pcETLhYwNfhizo8H3AxRD6CtwXkA952SaoYWprjuH3QhB4Yasf9MwJ5r3fMoutZ7dQHa87esjnTZXetRKs1nhs3",
  "key1": "3MMYoPWN81z9Tc2BHgEkcuxLN3fGMa58KiiM2Dt9yq6UfEw423yZWKyM7VfE7whvncQLUSNaMbGqqygUFBfv9Zpf",
  "key2": "41PPzqWJsdupZtaw3stVK6zR6qvJaeNJ2jkbfWF1HHcHMXborCvDWdgAawcVD761FhEHnv6vHWgejpYPFQvrerwp",
  "key3": "v2PiHzfLMcQCV8pRERNMmdZCv6TJYYboYVz2uxFGo7BErou9X583pC5PV3CMVM4MZ7xUfHqEnkhPqQsDpDCcydH",
  "key4": "3Fv32FDPF3MxUoeyEKtfRgHsZ7KrA5f4852qNVGsUGEDddRu4UdD87nABARNxUw4YogHtAdzmj5GjPbWt9gc6KdG",
  "key5": "4HVD5qTiMD7JeuR5fY4TZM5f8UiUNNxAHd1uvLkx2jB3qHNHJ3bnEkJfjsCo9ddcQ2dRqB2EyurfU8BiqL5zW4gH",
  "key6": "2mQNjJ2fCNKhm2hHezBCqzd1Psih45W5ycrypRZhk7AvAGyo6Fj9EHDQvFmFRWrUSbBwTMrYm5eyT26ZEYdEBL3p",
  "key7": "3chovLZdqVHRJruxGyRN2QttPMPZxpfNv7jAo5CKSStCiACQE5uW2gvki36AYrMxqWPCNESJ4vGvzanjU1EcDNog",
  "key8": "65CHtv6wAgGdbyEkFnGwvCDUTv4Q7cvQ9YuJD3EoQBB5fdBpVj6ELNNQRrmSJjrGSoNkysw5dnuZM41dCjCv8XS4",
  "key9": "3pKKSstMbgSFYKgeUWFsmFT4DQT11cbVirSe9Yt5UpoYm6Bi79c2qZRG4kVpaTVqNT9a7BqdJt13sD9HtoTmYLqE",
  "key10": "3o7AbetUQdzUJ84ihoT2p3QWScAmeUKSnwXiPB7SZd9e82A5D8YJoLd3D4djp9AzkyN43NFySJFY7hZBPQ9YGpYD",
  "key11": "2Vqxsgk5nbHpDqg1HPWbCWVYZqUrXGNRdHTc9d4dqtaRwaWULcCnSAxvbJPW6NBkfb4ASxihP8YjTcAJEFwhsagk",
  "key12": "28PK9KwWjQHSoho8pmK5wHpsQg5heEV25KquRnyUmVHyp53mVbNm2AY62HEoFbRu2gtrihNM4LtcksojLDjLAQmn",
  "key13": "hCA58EBVQcez7Bg2afEZtjVL5HXZfWTMgdYx8eJeKT8EpsYMgqei5VJ9KLbfNeAPR4crDC2X2TWLijWzKqvHC1n",
  "key14": "2vwAivxNXHEZf4kbpeaYAyCqhJ7J7Mw7paoiq4QmwRqyahurSAXUahBTzmwznYRqqh2qGMfSnvuxP7MAaEw9vwGQ",
  "key15": "23wvvJvMPxeQRBm9CmeZFxk8BThBdnWJBGKzkU9JGgBd9fuTYNGcXMhNGgLKWsgtGGg92QSdbNPD36TZreLjBiJZ",
  "key16": "4y11rAHaPy6WDP6gH7xmjvFGRgFKczBZLuvmAjBwE2cR49gPgVSeWtRXBpevpFTMJcySazagTZRVHL9AMaHsMc3D",
  "key17": "65RCzsfesJ8XHoEToWgg5JFRYWew9UmxccNpJXkbqs1NfTfrrU88t7usQdJm5f1xTCRhRFsVmUjRNNXFCsm8YfjU",
  "key18": "3xgLS3SFKLCgHWmd5BJW3Qgn3Ve2D7P6vctGoyqm5VLgFxKYLWhXFCupMxt8zWcEAAsAxReE69akQ1QXFu2shmXk",
  "key19": "2Gqaq6ewJZE9FwWm1ByAnPgqXnFYsGwfBNTHMEbRCzzmP7YQuEXz5j4GbdXLSfki15Utj8SW3K1xnB6aAMzuhjYz",
  "key20": "46bNQCQUJiUEYCsYr5ZfaYgmUsi1XVKnypzuM2Ugwy3fAnbdxoVSKESUrCYVpK9GvwkFKbFr6g3B8p4hmPk7RA7k",
  "key21": "2N41sqScLmfM1KbE79A5LZJjeDZN9xpngggd7EAGxG2VqgcF8d9J9fA9rTXzNpn9b7RadMC9yj8YTcHcNQG6fVhf",
  "key22": "2jsmSymwVpxypQJnmXa7CXAPsbUdNBYpRDdwEnSG727BxodmHpJq3W6FzTrBP2i78RA2VDDPHpSXvjdofWkbCVnA",
  "key23": "5XuBsLkUmt3NVPXh4mX5MrvUctApWQAxsoFVezQdaY6UPE1L8LBW2bFVLpj9RVBGmSQCjx4PfwjaTinhQEANemZy",
  "key24": "4f2uVu2dUs6qzKvS16DKaTkyYuE3q42RDMPZ2VHWPvWBZ5Xhhsj3n1gphNd1xr6NCcoCkS3fQ2bshrjidrARqay8"
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
