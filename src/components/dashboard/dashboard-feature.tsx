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
    "4rfFm7y4esZppztLt5E9YiE4CRaAHgkrvTySzR9MHB7aPs4eQSVg9gEENtWaSqqTXqgMJZsByq6HvAgup9Wyn877"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KRBfn2wUqN9dcQTg8eLMh3NbANneF4VTLTbjvYjwuYc9SPdnAAg6BnvZD6nZ5dM3RAdShYLGM8KpSXmTpmjgR4d",
  "key1": "4dNrXD8rx6noaGkfnJez6pXyCDUGmJQoj5XynCwSqJzCrL7RxVgKCkLMos8XWdgGSRpM5rFyFTKYY6e1EBbi32Ec",
  "key2": "UvBQ6XoX4TnPENvA7S8723MVorYrGqkacYjuV2YYBydM68VziSs7JbFyhojSzqLRGiC3BmBvkePDXf35B6hUFCo",
  "key3": "5BRGrVi13kTQSCXhS844qsXSnSQUj6aT38wBCPFhBvNQ9ngvoqrAQUTaA6e6Ymy369jVSgeBCnq19qxwvbyPqkar",
  "key4": "2d8ZuRgrvwyzo3CEmLoymeApv6tZpu4yxmqrXjuyvJLhys8xikH6vzArv3MGoi4cBgutVhrivJusSaQHXVPG7Zzh",
  "key5": "5uu1PjSs3Rot3anprkwtpqKuY19wtYcPVuamSQ79S1GewYgsX19sShActHR1h99H8SWMFqbcfK37hbk5BfZjNfwc",
  "key6": "4SMi6MxPxucS9ZwrX7q2G5qxwRX32D6i3s8qMB1dtVeCAFDFmGdYGqkRNMMWuke6JyTqp3oEyxbh1s8hsVSrNRxY",
  "key7": "5Ujcf5ThzAUeU9RMsSC6JsR2egBmZxBgJwQ8WwenWpECfppy2Q94DdRCarYZqBCCz9Vmxa9Mk8qC6gAyCHDj6D6k",
  "key8": "3QBc6ywoc7rdgjS39KqxqcQbev9PFQzxBVXLKKUyC77ZbZfRBkv136zv8zTtrpteHyreNfspUDidqbD1ERNyobYa",
  "key9": "4XWjJHRg7bvT27QPYVhBjzyoLFSc2QBu8dNvz91En2dmzZLfiKVjjXskEz8AJHJTxpQiXzLKqRC7UgSQeMY66aUD",
  "key10": "4z5A1HVzyejRiepTBdqE4PEyhSiX47FVk917pHhGjFGnQRiEdPCtbmorDwyeK6hMeJPVSyhJtd14zmNuLkMRjuHd",
  "key11": "67GW279AJWaEYyFRUHdktCzgJ8eLQ9fPGaMukJ1doCkbj4zrZN1x5wTnDztwmpTHUoU1MfnzitZPxWiegexJkSQE",
  "key12": "2s8wiXCFKTEPGhcBFTFbDgeyVEGBPhJ125CxUbprxEe1MsB3xXPCVTnBaXehuzbv3zopwNTUYkLafcdrPhNEX8UK",
  "key13": "46bpFgM2JVYgo2s4XcSWLZxa8kGRPDKdobs9ntYkmZ9o98Nh6yBmWoc4wajJ1CwcVrdpTebsbvr6cEdYszaE2uu8",
  "key14": "5QSmUE6SFvVxiGBZjEGtfqCZrb5p3XofXx4gb1KrTav8PMkNnnoeki956bxKTNWue2qE8yeEhj8Tmrgdn7ySWVRn",
  "key15": "2hbRre5RRsL7HKLiTQQgL8Vu5sePd7KmpTz5XXALT2it5vaEHBFYwr6myE1bEa9WwTv7cRNRPFXhCH8rHuzQqW7y",
  "key16": "34pWJ9hPaQPSJkyEc8dy7Q3Hoeh7tk9dTNy7dh5StUhzsrJHZJNNFo5YJoUJFhfwjwSy4ZzEw6Sm2KbvMiF75VFd",
  "key17": "mCiXs4v9ZAwc8kiKWgocpfXm65mKYLWX4K5XyMo9M27nsjXFrdFaDuGYgcgwP9mLbWphWLkMeP1HTwomDhd9gjW",
  "key18": "4Aud8fPQJXyGVqvUoYgd87PNBnnCbHZzWXKbX1DeVnf1im6nBBVwCpgbVCr9vo5KKoj7vW22jZzTMz887TWxUPPN",
  "key19": "2chGBDLrJnD6vKECHNQjhGnXfNDC16a2PbZRob8ZMi5UBzwxXHCQ7fuevd9TbhySHiDin5Dmooa4YxaJdKLLaZWT",
  "key20": "44UJivTgrt4fWpRTnaLUic5HskxVJdCgJNiTZv9bJKDmzJJD4mT3RLvT6WieU2BYXAn9pGR2vWGw8DG4bRrRMFy4",
  "key21": "5wNhAU5xNkXDKwy16WZv5n3H1u8vyrbPUJjLhn12Yjs6dds3Q3A691nXxhtgBVmQkiMNCuLFFjqSL8pmzMEJj4QU",
  "key22": "33GHJpHn2eVVKnGWQJ97DM48guvApVSCrtASR1L86Sn3Yag8HLur1Ed45P2CnTmfjNXXU6SYnMaxtgk9iKKNDkju",
  "key23": "5CXV6fciV1WqhjnfgMg57fDKFFWgzscoUteLTpCTWWtyVcbQePWoS7kAkBvNYG2uz6v68hyvHN1uQzonr81LNyZ5",
  "key24": "4N6Az2NF4KHgTyH7xwPCwqVZCfCitd9yZKbwLFc13jQTkixmwSRQdKxm2i1eZPcPEiU6PfBvyUTemvcVazJautXg"
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
