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
    "45DKfABSXsFSiG1b69opYYgvJPifjwyLLhiuwfjSUbDnaA3X5swe22kJ2hAnxXeQ3e328WoekP9XAbcbA8RsjNxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cFmVHa1KkfW2QjwbC5TFp8yHwpwsF5kotrmQwWUASRrdUKWrB1ExzQ7tKkEggbo8h5hm8F4k6H6JUgfiHekWpxt",
  "key1": "2sTUdy1jvupZ25oZgKnqBpLqF2ZpTFmAWtxSZNGrB8VtxGwBgpHARME4R9o53SnjY7ZF6psDNqSPdCHykec1t4Z",
  "key2": "29dANAwio95StNx9tnjCEmNcedUY48DmkMChgFCNYnVFejESYVwVapSbHnBysdBpbuuj3k4EBLds575RiSrieL3A",
  "key3": "6QwbyoYGSRitqevbU8sxtDANJPJnwMpbU6tYYrNuLFo2aZRU9G46NRfwtzQrjV3YbnLd8rWe3HN1yAdVzXgCP6M",
  "key4": "4Q8xUubLDBXZNH449Yqi92pQ6QJHgGAefipLheqyqu6onio2V3U722rv3qT9bxU2ogyVSk8RwTKXAKs8KHTXrMVv",
  "key5": "cRuMdMoNTmTLQaFS8QEF54JbaxkYpwLSqXKfBxU9C2gMcxsQX1CGdT5bTLjBJbXuNdHwZr6feGMMrK5h68XgQmu",
  "key6": "mppnFUxsLLTyYYb3gEXokyQhSxvCzSVFSEMXDHBVCwqvG1nN2qH5yiqFwXcPDYVcdjrtHKyBP4bZcEv3k9LgmM8",
  "key7": "3nyUckE2iQyN65v3JbnRaQyR7jDntpdZeKhRr2VZk1SZsDPx9Tb43qnitj83uTrYQhcuxr5PkKzzqpT9qWdsKmFD",
  "key8": "5WrnTBE1nudx3FtfCjnSWpN9HQVXqUqiCav7vrhV511WsNSp6ZBwrs8VkR5AmiJRckJXoguxnP5ck3zqHJvR5QLj",
  "key9": "KjRRwGL7Z4KpLYjSgBaJJovMjf9XaeQ1snCMZbn2vrQrYHr6FWYtX68piVWHNYk6hbtqchnGhZkXZn2a2QegMiN",
  "key10": "DK2iqEggcKVurArL3QfzDgGj6Agu5wJchtF8ri5YLCKWw2S4ojemc5ScctB5DP6m1vyPunXoPA7s9PJPtwDxryi",
  "key11": "3VsCGGF9UvxfUhLynXWPt8fraNJma2ukGhbPeGg1i34TUPttbCA6Q3wVqkSXh1bGAhZCR38Hkgzm4UC3EymqUmFP",
  "key12": "ix6pNHaRAmSgCEa57L2jBCc3inytcgLaGc8gsAWbv45yptr9BxsLYD3mBUmt4QSayiBhNj2a8AS7AbWCg5zoSMP",
  "key13": "2vo4gpfR7zHtLR115cjpP1zXJhtTWF9ChFKkkWTKnb3isRjtwrP89e5wiuWiX2d6z63SweHTSEBeALjHVu6wfU61",
  "key14": "3qR4kD7U4LzyQpqWF7uMTnPMYjimuoodN2iP3iX3FrKj6N6JeASksQciiGRRquU3hZ77z3PJLH7NvJpw5E951tJ2",
  "key15": "4QDjN67RgjQmZuwiZdhiwKydRD2w67N8eJb2VRxQiHUKpaCXHHCponhctZrHc4vMmuJ2NhVGRLbgHwnSqrxh2DcM",
  "key16": "e1T8JS1Mdf5R3UJ8RLGuiNFv9pFbQ87e5JHxHUibUc4qGSrDTcwYQicP6ETXBJ43vhVZ41ukpFMVzSajduQa1wL",
  "key17": "39FvasY39bQa3HqPgiWZYTXjNEpswn8VbXNarq8Q3eLsPH24jhx4gEuhtbecxv1nmLtUkNoi454yDUvwWm6LxPeU",
  "key18": "PP6vsTevHTGyoReLuekKFcmXxYqHnCoiYZcEywLHEZXccD8eaScZ7rPk5cCfrbjczxZVsbRtoVt7TZNQU9joRVA",
  "key19": "2CtC1HKyzqD6L8FZ1ZqPp5Gc2XewWKinMZRpBEhqrE51RN15owcPX7otHZdjKdp3q4bop1Qg9HrkQ7cBKSkYstGc",
  "key20": "33YPbTmUrDQ5j5VV5Nwu4KvGvCPxs2vDiR4MepbpE65A6dE744xkyrXvaCADcCMFsGff2wYAgTi3pUtY7YiBwjcN",
  "key21": "3WgKVUoPLAaJgBqZZk4bNzBJK1fQmFb7yCxZWyoCGaJV9Fy7rGwHgVjfBVJaVGbRCxfFaHX7Pwuwsb5xPvyLS31d",
  "key22": "5EcKSUdEkwZdwTaC6KZnPmz7ztEN8e7hGcThwPnNKoygfDboxca67ExkEchre1A4CaJRBa8FT5FjC8JteNXJCsPV",
  "key23": "2uiWGw3zCZr7qD4Q4gYWTT6EDoDag8ShbKMsek7np15Vt6KRsukkvSMdCUkYiRuXyoAhZksq4QbJQuaLh7oBiAao",
  "key24": "5YuLMvmYUbBeCPnPSprp2TUu2UnXcQJ4uouezoKdYkiCxEoa36NbXbwzQpreXRZZ8NMrBfLqbXoDiGy2JA7t39vV",
  "key25": "59EtVsyeJXd27AJwsVom35wnfifLcDWd2baNe49oD62Y4eAREsnTyN3HgXYVPfT95rCqBgu1B6JBbdeWsPU7Y4qh",
  "key26": "r1iFo3aewU9eYBGXv3pfWNMK5ATXvi9j7U6wGiRd6HdCu1MenWF6o4cZ4BVTSHcU1wNaaVkVYxD1eCNUcuPcjv7",
  "key27": "5N8KbRteKFSkeH7jGp3krv9qYK9XgZaMeGj6ZowUahRhqWJXhsj65GG7L3oMQYWaCBDrhFvMDuF8exWukw4kY9h2",
  "key28": "2wKLaRhUUmU1LaBnfPKauxN7CJDJWBN8j7gpKuszEdv2mypHz224hirdE5qCFF4wBdZCeganEDCz2NYKnQKM86Ug",
  "key29": "3Ms1qmX7zQgsMRwrn4B1WfdVLjMAM1nMN7BBFAFdLWqUqTsU8EkKEjwrXc3jEuzMFhavWwFQ57yePnTc8mPkc7zQ",
  "key30": "3dcsB3iQ9L6wiDwzkGVasaTzpxczZYjBTicXtKB8qA1kE2ekaDXFfmMhQyWRdLLDpQFDDVAD5UjAGLJxDabvhiUM",
  "key31": "41KRfn3Wnvfi4EVdk5cUTYfXUPbpqJZLei2kEiNUJraykkNiGodkhAi9fufZJBnySm6NWHtrijH8564ELWqurHEx"
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
