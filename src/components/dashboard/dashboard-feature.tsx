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
    "5SdjgZj2TD2hW4airV4UgU1Knhe9Mob1aC8cYpmNiA7eMRuBew2dtH2t87Eo3F1DZLN7x6tzu6E8NHwx2tRN7Rjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Zy5PqxxM5Sq2fARdLkUPfBBMVMZ7B3DCuq63Bp6TDo1YcQZbi4doT5j1srTTKjNwsTsApPFcTDCwuQjCtCkqVf",
  "key1": "4vYrWF2W84dr7xBPUYg3ZweP5WZ78h4xUuLfAWB5P4gvPJwucn5iH8tMVJpvmFcp88ZVhqk4Yto2dSkiUiUbCZgD",
  "key2": "39RTn4gPtCpiKto94WuNzXnPKnWihz5NvsvA7NySEBnyssXZSvrrgThi9xmPMuX37nDcgUiPotm5bKunzES4pfC3",
  "key3": "4Npk5T63MSjaoirjd1GR2ebHFeas4P57DJimKsmxsNUauirn2S9HymNGP5p62hLAsyD3GGZeRQ4v86MvxbTZKpD1",
  "key4": "3Ag1hXXbjrUrQ3EeFnp1p4PGSUreaD7Pz26rRjybhfoa38oZDSsNUft7YAGzYrurQ2GtRiduMYa9dkmH99PxYNPQ",
  "key5": "3pcqUsxS4SKiiqc9JEEbFyrNFc7A2x64BuCPD61hdjqpSwQnY6aC6e8CDcCKb5akgrFZWqyRePP4TPZnoMCZFiRX",
  "key6": "3Aw1Pn3rvHtJbGCWewAmtuH9ZMC4td4DfznZ3z3v9jCGyXARXMFafA5GkP97c2YVGioxnwSRGKeHgxw1jkCQTMRt",
  "key7": "5HMGgDy1jc3mTqDYoMDLEw3EMhaiyhuYDQTKgqi8eFbk2rfCDZzZtf38dHacMAP45adG8XkJaHfsaKsGt18wY2Zh",
  "key8": "7PeRKgkYXh2tSwDoR6JfFwS2uu1nvBgQnnkviLaiUEWt32BBmubmKVeZCn1iHRQeY3UmdUBCNyjVPmGQ5JaQEMg",
  "key9": "3figFAMLqPnLxN5AuqXssubRauqj8PMGB7uteg5UXRNY4J8CHVtQqiY7KxJPCEMJVMpmxbcHo8kCosEEyCdyDbN6",
  "key10": "4bV4Zsd2oYu9dYsT4YZzhtxVHH93cAENmuAHQ4Cd7k1uahTAyDxfq3HCC3sTHqxTv19TN19FotmeT5zrjXRrxDtv",
  "key11": "553QS9R4uVKmSb4J2iEbxM7vRtVwmRNaDy6Gz3fJmJGf5pss1kREKCX6G2X3khbj9BhYc1tKjKqqZgCBdiQZ64tF",
  "key12": "4yrZSg5GusroyksJurRYUGKy8dUdgvZ8RSmRGK4m8VJxkHMb6zhPmN6jvxXNxnZmUK63t4zSzDfptj6rCNEuxcSq",
  "key13": "3HCGWNsN3v4zDX1TnyUu9a2CDJZyvxufWfJFgm2nkWQNaiWYBpBGvvg2LCajXK9VkAAH6bGbUNEGjBgfHqaZf2gh",
  "key14": "3ZVCu6dVV9UdgWjbp4kvLiMnqSTeUzi8zXkWB4LK732kCdxX3nxooaAv7NSJ3Hd158JvYTQvXx9a3kfDAARjmkZ7",
  "key15": "3u2srnZu2pGsd3Jt279Y5ZXQE4oBsHoyQtyjnoV69LAJxkHGHzg8b9t3PFLeucCuxSJmLwzgjoooWu4EGQorwamk",
  "key16": "4noQVJAXD6FaH5d8J81Vpw6wbbnB4o8aLBeJG6oGhckXGStXUCgTApdDzTkjsFUwdYkSnW2DZVUH1hKacQ8Nb81M",
  "key17": "4X31kmicDamJf9bV1KW8dzMJPGDe82v4dh1z45tCDs34yi4JEERMqrB8exiWarsHzG9c94qeGDz3aL7LRYfU4wyZ",
  "key18": "2VcDJTTSN1nVps5SmAZBnDJBLXcqSfXTU7KtvHKJBU2VRwToeWoTnKFjrQ193BbtsMz3Sf78Co3goyQKh9d2ZE3Z",
  "key19": "4m8RoCaiK6JPJxcm8WkpT7j5k4MdtwGJWtxNmfX12DLe3YbzmxDC5fT8RhxP2rmHDx4mDQvMSmiTH7eUCq93FLQZ",
  "key20": "m3GHzConSGeuApdmT8SxVX99ZqrbdC4UbCJeQPc8fgKCYbKkKf93jtpVdPqxwSNA9PWW9YrpkADDcLP8MPVxnTe",
  "key21": "45uYsYFV3tiZMFDjpnrXzbPibjxqL75iWzxJ68TapuRomU1R1Nchy19BVuVMw2nsv1wskqU8U8SeWPK38eRq6bTV",
  "key22": "3PraAcfUirhLPc2UqVLCvJKvYTD6v4jtUeh7bzWEYFTkc9vDLozNRv35v9GEJZ8dbp8RDMreS6kooR9BW9xuS772",
  "key23": "G6DdgxLRXXsu2rVWU91ZWYVk5d4uSaxRDRZn48BcUrDdXRqdHHjxCet9XKerbC3DqxoYcKEZofftMMtnVAzufnf",
  "key24": "5RV6MhtYZ9pAdJe7gX4d3uBdNkrKRsJeFrraRZEYVuaC4CN3EJaaCNN2xs7oHSvmcLQminwj1VSXTXduWbLwYVeQ",
  "key25": "4e6KmFNgNL8KrH2kdKvSgeDeUVhtZ8NBAZixSRynxoejkjVQG4fkkDbKbLjxxbkaFNmCvAwer7fjNGEF1Q5pH5eC",
  "key26": "5myvxmVSdKrx4mKfgAzFCZckHgfqcL9NEoJbiPYxmAmLBJ11RaMiqZ1C3AFw3QxqxDyhRK7YJ8bA2Zojcc2GeRjU",
  "key27": "2Dib6cqtdaDkyZ3jgrLPK3HU4soGqmir1fzBTfEVaiTStFYtsyMdFG7xtdhVvqbnZrSziYWZVVJnHCLRrzeahyzq",
  "key28": "5BwRc2y5NbBWHPUrkq7AwrsC79LGxRUY17ShzwRZ8PaAJuwFy5EPnwW3wQc6zkVFKxNmwwDQjvn27K5Tvj6jJPSw",
  "key29": "KzX7bpUqDnH9hP2WFBSmLVCzrjrndw79ThqUqvQequpawrGtjPQaWCNR8rBpCWjSDandYHvCAF2Rp2f9A6spyby",
  "key30": "4agqQ8kmVEvSzwsSYn5E1xYjQYrADwr135rjsVqMpGHkizeGodEy5k4DzFJPMZrFhyuxnjvatYHoQzdFtbyavFVB",
  "key31": "46y1fkjN6DNHjSsKoDnYJR5ZhN4MX9iztLeoFNuc5Evu2LFFQgrKhX5z5vNaUNeyiwZmDmmJSNdXqXYDsaJMS89B",
  "key32": "5vuW32WzZUa6NjAJGFSrMbprr8Tp1huqRd4nUxtWwQAgmNejPdmQC1F3Epi8mcX8Wd3RD5vpuVahtjF6Gdktwvh3",
  "key33": "BHbegbP9J4iXXA32agy6MGriN3xVh9komJjQEwaxxb38gM1JBfJjEwWComtpKg9jvJg5QxwXL28EfTQHU7u8khf",
  "key34": "5XxcP1QJbEMVXZTgbpxYfYbH2seNcoKYwqJcRkqtBpEwLCJXhVzSUBUd18rB4kvth1kkF68YZTktbCwC5JZRxmL6",
  "key35": "51wvRwYuP59gpgEFVt5upJZq3GzJzwpTkv8zJdBLj7yAvt24YEjDQxsTYpGRetrWaFaeeT3ptorL2cui4GBcRiTv",
  "key36": "64MF5WR3it1MwS5azYLjjci1nr9DaE3cV2HdiBVzdtozQFrQvXEkSu4251fodduKsjiZyWLomiN2q6YB1UNq3tm2",
  "key37": "5eYjAhPseEmsYLVAFFS6bKmQvZK6QtCA2rtvfvf7QQzRAixQ6Mx6NJFrBNKN89mFN6TR7hbCF6VRXKJebsc8xdLD",
  "key38": "o5jfYpCNWpTThPQP4skFPbK9AJEZtR5TLYcAR5YxkzdxHLfEkE2Jksu9oA3oEX9YhwpAaK5s5WJfvw127M1TzMt"
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
