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
    "bN8avLYuKDtpNpUSQnoS1x5t17EeV2JGbEmRNNTqeEyGK2WAUT8dLimcVtCFStkTmV63U3TsdTTgPtVtgF4cw4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FyYQJXK6NiPDXcHBq4V5LLPoG6PELgaiD22BAe3XB7mnS6NgGVANY8eC8ZoRywQyjDE5YGkazUsd8MoPoVozDdu",
  "key1": "5G2PpNicjC9dhYeQg9dAok5zXP7sZgszazsdBVH3HEsgrYRv7YevYrWPTBhThbRhmWeKXTi7PBHpYdoanumBKBeB",
  "key2": "xvigFmNRTvD6h1Qjfu2mzmdZNNdsXLRerWiXsDYSaMSb7nc4dv64HhRRPpcTQTna8L1hWjsBVm6iv6K9YX2EKkr",
  "key3": "4br76KD5GHHViHMAZ9NRRzuR8PcWx5LYHpRQ5Mo3pETVzMr5uvoZ1qEevFa11BpFcvsxW2nmwcT3iuDWWrYbQYzt",
  "key4": "4Qh9LRc4bLZfPfHys68ngaCb2c6d8nyYo4fYohyt92xaTeKvq9M6jpWJ1qHYAYwp1XR75uu7uAa7L7dqHRw5btBw",
  "key5": "5XP2SuK8PVrPVQHbp21PHcHr745eYwibnN3FmSxfSThcSPtrCXkMBBtbe2LKY5YW7GdtegfFekVPWxBRFLPttTzt",
  "key6": "p8teoPHCaThsb1toqVejXrW6vgmvq7HNbhxqgCaPJKg76VFTxpvANiZ7B8WjzBHHwn1bjmdojrvwgJ31hpLWHPM",
  "key7": "42FA43vuvXhz2izAEaiYum6s64irXn2MamYC4LAgj4AqCZ4wo986rx16n2hf1GRyQX4YbE8qsWWgGvVx82zgAqRK",
  "key8": "mwWzRVrVrVhedKezNGUKfsSWmJrYuwLprkyzWBVgouF5KVi3JaDFMVeGNY5ZVVHfAQa7gWtQvYnbdVvj3aRqdCA",
  "key9": "3rWdosbZgPuSx6iGsACsqEzZ7ToBty8d7WANNoruaWARK9srAxNAciQZgBA8sumPU7MohWya7SUWuxmWRoxMBmfA",
  "key10": "3X9FCY5wcUmQvX7ArKZdJPipm9sZpeXoEGZW5J5fyCSjpgbWLw6MTSQLke8mgcr9SVB2Wda454MEAoJmbwPBxh6A",
  "key11": "4DiyF8i33sB8rDCiRm1jagtTHJFW7SFkwwcg3Jeamq78VhbnbPNPTQiFpanpGc54pVbGGRU1KVfdoB1Lu7jm9RFf",
  "key12": "vnREcDYX43J5V4qZSNEP54g1dNYXhkGYZGxYqEjYFWz6t9TkgZUjWhFPHEXZmujKVYCy7A6QEeXTZxT4nreSCX3",
  "key13": "fwcE9fRkR5GNHCPUQMudVNai242k7nykGeKuhGBhPxQNCXJs6D8fSGEsatWehhNJQb3bnKKA6Ei8hYNh8Gh9Cso",
  "key14": "32UNNtpnkJQXi1x2ozeYowi7coYhc9oD7Ui7NawEyw21PBkqigbHpwU6BWL1cJ39CZ39bPAwXLrSDLzxEhApg9Pi",
  "key15": "FtkAv7fvSLUvnPy1SPQU9wpUueSTq1DjzTLvtzEds6otRV8SwMbG6cETqSLCSFc9t1Hj5zoZBVEqCzqiBCFsAJe",
  "key16": "3adbEoTmqwoUJDe5WfhuzGgp1UWHr9EpnAem8ct3S5jo5pgLECCYfi8MMtuwNck8e7RFf4LYUEhVaCdtWm27hrb5",
  "key17": "3wZJoYtmYeW6nW2uy7eaJvEsVwDAEF3fvrh2baZEjQ13xywzqaAFEeqK7iGDivPKYwpFCKsubUQJi2XGYhDXfXif",
  "key18": "YeLb3qnLBHNFXtLG5AnXxFFEr956K1YkbAxN4YM6wCNerMzFbgn36NpRGG86SvdY83gwwqtYV54tQPrVVhJzJy2",
  "key19": "u7ndQV2z1V3SRVVxHFjesawsV97oFfRtwdKZVZ1ChgT84upbixi47mZnR6uS1K75zHYayLdsMBbggrvfHNQN1og",
  "key20": "2HisqmMU683tF9bpYYfZDzNE4x7NnbgzzbDx8APymQP2cCEziwAb2yMea9j2sf3UMmAsxymLM5fUM4wch94NJZDe",
  "key21": "2e4a3razL1P8vF82miEXxKj8w1e135x6EufUsBVoyuDV6SjxibT5fXMSNmaSh7VdFS9jtUM1kY4yxav4wNJUvGJF",
  "key22": "CkqXVXW4nhakiXGsF3njAkHc5meGv9MY8XoQkn562NsRyADsJTP1r1FNJo9SnDogHjiySiTGK7sf1pYxvvW75WM",
  "key23": "4mowvVfKiW5a52qLgGpaHhscM58Ld3nxNALaiFnUggx8S93hmESi3kds2rX4M3hLDSU9NYzATgBTioCtdiCtQ1Dh",
  "key24": "8QDStohTTZkTB9LzCiUFvZg67kLU9cDN42i8mCVTsFpsxUdPMB6TZkFQkcvsu6vfsrJZ5rV8eXHufoGvbNzoMQz",
  "key25": "579e7783KLUydTjLSgAMLpejWeMgVgUhnnXvrnaMBERMg8mRrLcFfUcKMTqZZ4w2eK5DC6n7tJnxop86gc3eVm7b",
  "key26": "4CCQGaZ3WGkD8NHnCgwM38cByqpx9g91vCnv8r72TqKmnHizGPaVoTt6XsaP2nJKXBgozhthAyLFZ85G1DLMPpWV",
  "key27": "3xbSrpzqXLb27BFri2x9btGsvrEUbBGnp58FmCtXXUysPKPkCDfNBFtoL1JwZQM85mmoquSQaLJgrwZCnFW5RQAK",
  "key28": "5MJFaGnNQLMZquwGEay3danZ4trjJUJ62ipsZirMWkWV79SXkeUXwv9fdh4d14iwWc8eQsoVwVGG6avyYKBS7fiQ",
  "key29": "53MHtPPehh7wCEzjdWz815tpi7XkayCANShL6c4tSk3R9hKGsZFBX5ed8Xiuhsnr6jYCEwrGdgFrWEgNbPEXdDZe",
  "key30": "2rFv1KiyJRBx9HUZaQF3RdHwiswJMhrKXTv8H8dxWxW8SmQq1bxMhmjMuxcQbUQvSd91kCGucJAN3Q4sSqn1agsZ",
  "key31": "3WWF13tPfjgrGp4LiuL9yxkqbGA6AnvQKoPCEkPhiPvtNwKKyaG96w5ssrj5XZr6n8Jnz3SakUUr17qmYFPuWowa",
  "key32": "3kvmdn34mFW7H6FHLmwpLrkchTzKmFpHfCAqo2ZLAngMmGT8WiXiardaUnwjsqvLLYRnBJdgJmbsAFpXViUr9wLy",
  "key33": "4g77jFdMLRuKaU9n2bwLk7HRYxEPxqYNvFV3RkvNYd5UiWbppjzm3r8BZGffdfns7UzzgobR5wmUFjApUehD8omX",
  "key34": "254Q9e4eJ5TizELQvFXGUF9TyAoen8TKfSDHzx792ncd86CBKEvs7WNQxvZMAJjno2WGYgxpSCkUu6cvMrwgqD6R",
  "key35": "SVzbFVFwBHvsKNX7K2C7Bhb241cN9UCUCJaxdxPs2S4ikCpW7GHhvUcksnuGVTxJHFRUkQZ91qffArFtWpjiL2k",
  "key36": "4fz6CMZRgvhB2WvKzupFk4KAW9wohtcbZ1swqYSQetsupK4D2bef1czLgsF4TYtmDVu8PoyiXhg24Ya2xqizLBPF",
  "key37": "5Bq4VUYMpChoKRT1KRmSUpu3eUe5gPvAL6nTJYmycinhCsV97bBCEpfqg3bYqPooUNBU7i5vQrj25tLtLBwjcDQv",
  "key38": "585KkeLXAT26Hv9cdFpJceyJ7Bh9WJVYMfLQuXbDdCSQcNd9zujPdn6PU7MA1QcEW23iWcb4qRfWcdzQTZYP6jaG",
  "key39": "42utsKP2GoMdeKkZVuSKWUiMrwo1z3xiwTUoqF4wEbia4xfh9mp1gqB19v4Bt3NBHwSn9BTRkYyBtR3ReyKrta8G",
  "key40": "3PNpxnnWptpXcLgKhSDbjUxeZPB7gr3RrS9rBc8LNA5gS21ipJwVNGUNNab9WXewktazD1UEzquQ6uY7KrY4zbhV",
  "key41": "4rTNtUY76MYQdvMVDskqxoyirVRBeZniXm3CsBXc8NMUBde6nNrsmU7c5924NxwGvE23KjAq6RZ1R9qikJBCof5Z",
  "key42": "BmnFAUnrtBjGFLW2v7WeXJDtpCuqUsnoHqcEvMckaYSEpKwFVoZM4cGxN7JR6auLi7ozzcuiDzcv4dUACaLYrZs",
  "key43": "JzLDZH966zxi32Yxfiw17dS89TUCGH6HMfUB7jZ5tkhoZ8b1Rv55dqemKaK82BfeAfxEuzeZarGMemSThorvTft",
  "key44": "E3zpZPZe1NJg32BJNo6FavS5Z8sSLDTSVUDxTkoC7eAd4gTLZQcsirSi18NJfsHKLEJtRmoRVLhtEVNvjLkdRJ4",
  "key45": "4ggD6iopjjegg3L89PmDLh6cCmYXiHRbT5Y8uyrXfs97gzX3iANPWKWx3GCnw17LtdVJwTohvfAhiQiAgrPt6rP8"
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
