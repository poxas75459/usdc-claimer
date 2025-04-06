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
    "53wuBkwyPgEYbtdbmyGp6djrp4YEYsiw6TSXVNnnb8woxWpYvmZYEaSAa3GvTsrLU2wj2bNwpi9dLceWsSnCweYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f44T1rAfecEEzRLkg2mKodypWmUicAwWJNxAPc13q41iYucAXcXDQUSbmmVj9tSDLaCVS6s1TChERfAFoGChLi3",
  "key1": "skpMCJb8aGPb4TbgBeRqrbsJ2pRZLrUa6NzK1HL3fC4FePRx9Di74ro4hmdWHDSrE64mpEkoQTACZBCSMt1b43D",
  "key2": "4APWBDu6xNiFfqAmdpZ79d5Kk8WmEz4A7iPuQ3JJX2PFYNhf7futGQrqaNY3G8JrAqX72MoyZJhx5STb8oQarRTD",
  "key3": "2UqPma8GrM5otu5MY7eb1Tnu7ZjVrz9ZGYxtgwvuaHZELAHK2bsMKYsPwE2jqxyTpiDkPknkbYK9vtnJ7Qm1xmch",
  "key4": "3B2Yk2jo235DsCvR1viX5sRh2Fn6WhdP57S2Y66sgGh7y8o6aFVowJmTnfaNqrDUqCDeapNk17zzcSUH1fKDbyip",
  "key5": "5aAuRhK9Jq8yeTh9krbL6qwv1X98Ngn1yrTY4MWRPxEn1g2sssaGngbwWsykocUmJKnu9KvgkN7V8s78W3nzoTt5",
  "key6": "24h8V4pJFqQsAZHcMaeAWuFmupMcx5ERqGNEZmSbB7MFieMshwg2XTcRVpvqYigGWkVf8EvbqcFJXFM7WE98ofhR",
  "key7": "3vePugHruuyNJZAMaaj1VH3SyXkMbitgTL18QPnKhisy3xJAu29PmrzFsp5TT61KK2qA1KBrVLZrwTPrSxNK1rq1",
  "key8": "4JbynyWQk53eMyz2dEZnjdDJD8DwA3ExzMM4gasrmtEFW6m1e8iVaGxjwA7aJti8t7AmFDHtmHWZFL39V7uV5HTe",
  "key9": "4RKaxwLquFhX48ZGTjZycyeJLkZ3PkKfLhUi8xSynpfbQLqt6h8CBzdFRBMUzDy21BMeHDASrg1VHJ9cAVUdkkYz",
  "key10": "2iUUXDkm4daCVJcjLrCF321oxJxQNmBZAN3MvoaKMNDdm4XkNQEeC8eQRsnb1fvky6XdWUUvE6MqANcQtPLpQLPN",
  "key11": "56yB87NDVQi6hRh6cB2SbwwKzWjLZamqbTM9oZMkvTmowAvBFZSTcYyXGu1cr4E5W5hu7PVVFwEQrAf9jJ6JNrVf",
  "key12": "39ZT5MpZhWu3ytkrsWj81MZsEPjS6HRX2FZoAzxa9zf6E4VRe3PoZmMkjzkAzdwKsdxbKdBtdYH6pA3xTgcVRVAc",
  "key13": "AQ6aTdQWCb9mTgmTmzZPuG5yLr1AXjSeYcWqkkD8FvpvzrFzgaxiNccZfeKZ6oXToUuEfwPqYXpHPbq1cV4UBWk",
  "key14": "4wNJzSCAwt8wa62rMdLC4dosBE1Gyj8P3NesWkUPpfQ8P6S9ER1nuZtUVtZGq3djpvkF5jjgxdoB4LALHAGNHQGu",
  "key15": "5eqFhUUGdYuvoDGNn4xBkjvQp3AVw6Bnci5XojN6xzi1SVLmRoXYkAaCkJoce3BPJGoXgDALmR4K9JpiM7zQQKdZ",
  "key16": "3mVbLYCUgFXej4pAYgxbkdR7bnWixHYqsUsdEy8xiK1X2Nm4R8BVNZdHX1VPtsedEK1WZyvSX9ckzFM4nf6ChQ5K",
  "key17": "35uUtMMEnFHNguWQhprqQkKZVLKB8nE2i2C41Lh2CZe542WmYyZky6gq536fUCHUksmV8Ux4f4AycFTfuM7wdCfh",
  "key18": "4v3fkKmGXfMA9Mv34w8jTKM4YgXFidMazgeFXm3FGDeyQL9fNAGX99tZjHSKYAYofGCHaxuzGL7jPHyNCmuTX31p",
  "key19": "391nzty8pAj9EVY3MScaA6aatQxbdnLSwFSqEhXZhn6izK3r8XegCzdJtRTmpFdmrC5HN6cfrZxDriZ3eazCZEs5",
  "key20": "2sFd4add4fCir5TLDDt4RvXja4Bu6oxEyjt23o6BD14CsWqN7VDb5zyM9BGtV4FNYL7xdPBREfCDn7bkgdq7tknV",
  "key21": "3XSxBJRQ7UPxQoksQgoeqvmjapcwTna4ZwGUeC1C2n4z29RHYAkMLPoWG1nzBWZ8zbVFqBXyr8U96RCRFpVyEGco",
  "key22": "4vDAU6rE3RefR3aUofoeCDLxTdoXwHa2kZP5tnSwWQc1CZVGcig2rMh9vwxb6YzS8HjxAeQ9CMuaDk79rv5xn13w",
  "key23": "fPb4VXNnKDPSG5AK1sCirUHeGHqUe8stbttgp5kMtDH15iGEMbGiVkSqmdPbQMGhpyvipB6EaBfZiRAjyPdM3eY",
  "key24": "5QdnDfsV2uiqLGycjCmfkHx6t992KXEGexMEwntjo23WiM9cKUNprZgmA4mWDLsgT2KX1zQbYwQKHxxMeiiTm2vf",
  "key25": "6UdmsgyKgqDUxAJa6wPfWknxFFq5LUcaSe6GzyBxCiwhyn64LFqLa5xHEuT1HrtEeeCQVdSEkcYxFodsWirYK7r",
  "key26": "3fMP6uj8sJ5jJsYc5A8X1YudLPatV5NtHuVErrhYgX9pvcWr4aMp14wkCqExxodXrovPCMjwZWcKqpwQXEavYgBZ",
  "key27": "3DkGAu2TGfCMLmvcM4SNhbawiZe8bHXz2YCoHSnJsR2ML6GbUYv53rBTvmDgLN9MYWXcum4uzeHCZriWttcAgkMY",
  "key28": "2WvcnJfbegcWCk6LVM7QWjcrikxrCeRBjojjKvNkBs59p3b7ovTKhdmkDNsmouBb8aXHu2NxWXEAPZDSTVLN8WJT",
  "key29": "3DoL5KDJ9bpZjnS4M82K857LDYzzpbEVJKXBhST2Q2TGTjC8sZWFnL7fEk3gYMq3fovkRNBgBUv1vY67oGFqFzt2",
  "key30": "47JeafGV4Zaf6aQ8xuyxubcfswCNy4EeEZefu3eErZBrEtEN9eAocDGU3wyr7gTHzHvanJ1Bozn1BBppTE7Gd4L",
  "key31": "56icYVyt3hjfAyFptCLPSxyS6t7B8XC46HmDtT76MSLsPx1n6urBesEaK8TtaQu8WxgZUdghEYaR3LXMAXHXXRXK",
  "key32": "3gDhmA46A6bHufGTWnA85BmeTRFUzJyUeSTWPKc6pXYkUN8eTXk5sry7y9JP9EMenmApATjsqRZU1aG6vKmyYV5h",
  "key33": "5hiWUnQMSmLtopEUahtRUBN6xBxNaXoGaKMsDBpqFmfvSgcdvz2coVyaf1fPs225YsvF6tpgd6bPPDsQKwxJyZLw",
  "key34": "3qSkzzTapRK1SfZszC28tE2cDMuxWWZRq74Agj33dDfWHjSTKPGnLWv6cGteyTUGSi7YJNnhUgW27KV3wbQ96jVk",
  "key35": "58UACmNMwZqfmJenKeECXkaTkp85mPrLCvkoUqp6tooitPiibBCQKN8F89rnrPjKUXfZiQj5Z6SH8EC9Lf8QJAy8"
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
