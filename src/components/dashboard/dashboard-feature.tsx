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
    "26KwM9hHRPpquBBnQwXkde7JRoZRrm1g5QB6i8eLYZxxjadbcDEeRQ5C4CSEn9PDkpHSpGtPsjFqRK5m72fZSegt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xdho82j47hyF9ke9fPnfHAhTtM8rNrhifBB6j7rEfcov6ejmbpBnq9RF3YqvoWJJHjp4bsKhsWfbRXj59UbwGqs",
  "key1": "2NVRpyjbW2pRWqeTvjzwxYc5yVC9g1Hk97NjdhwqsJ7cDDj9QoMbYYV4hDemWYEbM74vKwTb7hCPDeGHKrEyYY6J",
  "key2": "42ubJq2J93W1BMkBHFK2hajdYWB6wtoWi2JaStp6YJ5i7i2NxJ3LXFYMnn8M58jAm1aHiAoWb3BxjXpG17JktpW",
  "key3": "2SvRiShDjv6GnWCBkCyh666j7WXPLoq3w6HK7aRLrNqfpgxFPsxEuAZ277K1CQooXe4yAZcmcGVp3PWSD7v3JW2p",
  "key4": "4nFNqNvBKSFTMxkMziVoYS5Xn6fcMqnkNW3SnWbtZ2Zct47Hx2zqbpokEk5ib66r37Tfa1TeUWPp4GJZ7VmWNruA",
  "key5": "2TbkM71UYjpzawJhhC8zu5JAKE1qN7H1ApoRZZfWJEgTgGpAcCopHwpoaqY86xPcUNmumbpbV2VbJN5rxiAiXgez",
  "key6": "4LHnBmqndQpAAHbLws8aTkmv3ZLWtr2dtcftV48orka2wo6AkvAV2zdi9puskNcWbTT7poZ2SKnGekrg1aD4VEN",
  "key7": "4jQquxvCgU3qiPaUPUZTaej6Pb4rfGpgqrrxggLBdE1Z91NZajAvTxLXmEsxKExRDueNtbmCPG55f3MkTSXhYjfs",
  "key8": "5Hg5D89AghRRM6y1S2NpbZ9jkSGTnmCWRHLktLNvXyQ3QJeErn2XcaEdNBDbAZ5eH3SyNMYAU5xHgVwpLLUfP4nA",
  "key9": "5hftANFjLeuBC5iXFd4EGhisoDQkbnYGrdqT84JruzKSmRqTSuRYVj3WVeRD3e8tEgBxRo4B3mRuLS6gqW5WKRyn",
  "key10": "ubSS25Fj8ougaGWTveFQMtNbApLq4CHEphUaNhNa9nCLz7XeLQKhTcCh81caBkxc1DJwbwG5TfrWDnBgvWfb58W",
  "key11": "5WsGKzJwq5z2CSR63fLxgieCtgskn4P3uwUS9xspFesACbLKzkyrUpRASWAtyshesZYcaw4jbVvREJxwVU3VYZ7t",
  "key12": "2egURWvVKmZUqLBe7bHS42M4ZT8sWqQPJ5mBGjDPUeWdXh8pLrf9AjuDneuKoWbG3P13QydqsTNnq5jeMvbAHTQ6",
  "key13": "39sVKL2NuZDaRXaPdLn39xHRJQZfe23VK4Z2HfJ5YRNNFfYAhWa3pkoRFqfSNe4NKffcABmbtSGXMMug7FzJCoB9",
  "key14": "3hgwkQz8caS1isQsuLt9YDHsfi8zz6RYxvoHLHWb2Xsdy4F2JWoe2zcG5m9ZRVPREUu9u7LmB9TMW94RCiL5UuZz",
  "key15": "J1ZNhksGYufg1m7bPjv8KWV45Lhhjp4CFjcngcfq3BRzKMwy5JAWCavbbKGGjjEyFQy9mV38bKyDJozCMub41HU",
  "key16": "4wQGP1RsS6HyExBUhX6wQ6xapRMMvt8ZHabAn8oYDxkf7pAuZJnNVcaoNaGRTEzz6eLwciCEMRzrvTDmybdi2JKY",
  "key17": "5GCCmE8UfyW2xFHUuVKGTF626yqfGWgpMrzMuEPJZhYoFfN8hJAv8phsAPQR3HYKfEGHNcN1Aejc5978rXkti4qm",
  "key18": "3963LWkHoXvcavxb54Hpb2ES9UkguXFnNohzQ9PTDn2Xt1eB8VDtWJni1MfCv79E4xBqmw6wfVHc8PnZ3WpeyJj5",
  "key19": "HFPw7szWoieQoFxM1qtwh7hQC86HfhJy9RQV7NUWcc3fUzzViXdYizwpNAV1nertcT2fTuhjacHeU3KBUtDmdAE",
  "key20": "4ooTQ5cuhxhjeCNbRtLmXcYzPvF8fZRCDtp45uqutWNspGXssmcd1sSVtgrnmwZsRHx8QqykuWFmR7Ny7vz7vzGY",
  "key21": "ZnBB5jVCuXfVWEEx9PEo8NCd2EBTLeE48sWL2Evr5r8NS9ishdh63LcguFohusTpzf3dSXc5in72c3j5dbHkABJ",
  "key22": "2RRA6pRSdi8HVxjJcVgsR3ykNXbTAZ6gSdJx8H1gCE28pKxc3ENPw3ttYwSQTc96SB9QnHEaNLrNznTsTRU2NvTg",
  "key23": "2vjo6dHHGHB1f4PBycddtXJTFxT32zjKX5WyEdF7CXzV5qgdj2uUk8qqacVnEqJxymrDnLHM1ZqrZkzkgCQtxFE1",
  "key24": "5MTHpc4qySScWc29CYXz87QmDpQbGAb5p9zGKKeaa7DT8HcmbUixg3jteSXoCvrKjMKaRDTT3XjSLa6UrgdVcUjM",
  "key25": "2MouA9mvPiMXpCiTWrt6hrePtbD422XV39LeuvAjNfCfonujFURk5xLfovp8HMbKfTxiJ9MojM2mkNZBLZ1hiWpA"
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
