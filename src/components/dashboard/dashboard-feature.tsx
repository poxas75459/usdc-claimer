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
    "4qaqPgDBVFrh7KjVsQqSdDdyMXYi8ecrsgTkMG4UGeUxi251VY2wggS2nRCcXjgnFsKuTPR6X1FtH2fqriR3jhbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42b5uREvDQGoeofqypSr4AyAvyQVHp2NHqLF7et9PjdHqe3uqohG4dhEcxsCG9ovGfkkg9YCmEArKGsvtkcYiUbH",
  "key1": "4BL223WS7gpfKRDfDMKdH7gG1xA6ttKZL23XAVpJRcijRVyg9Zo7jiXjnTMcwJwW1CPr2GUiv6k6a5MG1CXgvNN4",
  "key2": "4xLiCLFtZ4kT2JW9vJmn8XGyQsHDB9vgpNXFEgwMA7kEfM1vRGx4AMxMnkbzNhHKuFSNKq1BCH7CDYT69SrLQKCt",
  "key3": "ognqBYNQsH95sBH7Cti3ecRGgmVMgF11BeggLwwR82DWr93s7q88jMWizUoay2CGUpvBA1YCbsG9BuLZ9jsxZwN",
  "key4": "2oqXBCJ2uk51BJnSEbvPa7QaNyikAy5MAxidTf3pfpuVE2YAuXsHwhstSr9kTgJgSu1xEr63mCkkA4ih6d7JJt2R",
  "key5": "2QUgcLPn7xUmQhsFt2kZyyHWntdm9SguRvrXDk48PudDK6M1Xp6L5B32v9MBwfBxs7awzMKAF37soqaVXkhQuRGT",
  "key6": "3bJEeFDCjRrMovpfmFd7xmUCWETXqwab7SWbn6E3FBVnLZngquA3aemjVadd2KobXuhde8yMArTRVNTv5BHPn5hu",
  "key7": "dKjhXfsxvfLC5wegfdLvytWKZF22uTRDdA1VPJKErfqjdHAtMqnK8gz7NE2tw3xTBbWcaQrXZEMGtWmqRcFcwfx",
  "key8": "3HnrnknSLigAUWCGepaqfDNqbTguKX8Pc5iUwAL5PMXDeodbiiFPU93Z6NXemMDHyaio17TdwQkA85XdabKUTLd",
  "key9": "3hyq9cF49t6jen9fyUYS8srkhxX7CsarY2DQdKQmRQfEBk9D3UFosjGyLeX45hprPnHeqSAu2UxLvcpjFjgnLbGJ",
  "key10": "2CqZTaG5PDvtvLWnHWNsysZSNaa6cdrHZcNwo5Mu1p9Mz1PLYip3vNrLV3TPCSbHPMz7uttfdX8VnHRQjFoRY7hX",
  "key11": "3hDSJ92aq9xRph96Y2KzX2LHtn6AKcXK4ix9VvcxyM1qBGB18EyUnH8H2wNrrjHhmy6L4gFVY4XowNjBDGfsAQfF",
  "key12": "sLf58iwJwdWwGfSkVWfWdU8ebVRsMiNLHeuWLcvvNcpNi1Xtx7bHFCJdmAugmv7ZhCBSpW5Lyyu6yLevcEotra3",
  "key13": "bs3EbAnyLoVzo9H2beN6VXTDpnfHrRYWV5G6sh42QooHSxku5awjp7SUxxiWjrx7PsNDdwvEhPfeMqh1LMKC4RV",
  "key14": "4deiaTz7qCVLaEg8tGj7VL1qE3Zv4PB5foRoTmqnwvBYqpc8bt1JNxAtY5WEfJbG4nWb3wvxeDSCmzFzMNbyzidk",
  "key15": "2fSsa9gXsRYbaWctppp71eZJiu613mPgGWhCPKwcXGpzL8tKp51gpZUS7rh7NSD95RJkdNS93aUcRfrsXJHyXEhD",
  "key16": "4eLRLUdZEDeJ5vjA8hYByymoD1bBoSvqJAE3V1QREipeE7HvWdBL1LWq9jgxJpUdMkQj4tFyeeaCVF5KTwbvDPF8",
  "key17": "4jrH2d5iyxwzzZM9MM7MpKSCqCqfRyHT711X96A8kN5J8bVGc7Tx4odSi2xKhuNf5CKCVb9g4yerfqUtxn3fhGEq",
  "key18": "5zjoQYtZaCJa7YmM6jye3Q8A2kK97687yyaPj5KzHpDcittUfBY5xykDmVn3oaWZqzB5DySQvDjVzaqv8VBW2iHQ",
  "key19": "5Z3ndKrbVNyJyhxJwhaoNjyfxFE6aVfwPwfC1sQ3Vi5wKwVpH8fNWDaUzWcPktH6dChByw1kAXQjrdhXyk6w8QVQ",
  "key20": "2wCs8vg1zdXtKupLrTad3vbCuj9kkDe8YAXbn1tTGTEkwUN6AtLQku5bC5tDazJvBemknxb1WFXVT655CNL2aLVi",
  "key21": "4qbaGqRLfVLbUx2KnUH7PxW1wGAaYAk89AmGcjfJtPLvJtAgsHdNAF6zAQuE6tUuYPRxx564nDVRcJPP9vPRnS4z",
  "key22": "5pVFM3j6z4Vs3qZ55kw7R84GXhDKjvnF1BRAwWFPVKPZMFDyVZdDggcvQrMGwRpG2YrwUFW5QmHkE7Dq6XT8BVUT",
  "key23": "5gd8cgE9id3RRJ5ZSqgBcefTdjgtqxaHaMxoLfvWkGY4BHTfJbXMxhrDXUbxy6Lvr37cESRTA1DdsTdpxRQMuV2a",
  "key24": "4v6TNfcugWfWQmGmNhUcd9KMs5gfAKq9a2AdW23rSxukKg9jixYFJntwi6GbFSEpuS9eeK5W83zEUFbGuuiA4GCY",
  "key25": "4sJv2bKHAExYit1BAbm5AryDjonGKd72cVSKLTwbG11ieukUujGtSfL2KJbhkpkHuJGzopYxkk5DtXye49twqZ69",
  "key26": "RjW3ZLYr8ms2UxtscChno4gkNL7hbkKjGDqCFc3ZT6jeLQMsjU2HYRWouRCNWUAgwxkERyaCwvLrZXdL5DaENg2",
  "key27": "5SxvpVhdqJXTZYRFYX2HYyqVtcdV6MeiGWNe3Bu4UgvrjaAY7dZNb3tx22C5rwNJ1ucdVtxSZZEYurYAeuvc98iZ",
  "key28": "3jh9zExj4f36vzAeWEUuS7exWPafuUWTbiAT9QpDc2dghvFN23owzvkHc6rxKCQsQWEgZzVfUvajHxCG7GDZr49B",
  "key29": "1HMn5PEc9UfXbkmKNvjVzqeX4B6ZcgnmKTehgWrD8xau34x5nRuNTezxBS8969tMc1CwGRed2r4TfdHjuSmpMNq",
  "key30": "5MXLA7h6DFpvGCtTJMHvLiXexb7h8jbcsPaHMQKhEwwZEugqjq13faC263NFLQPCaJZ8QfbMGcBeqSYfLrtKZren",
  "key31": "G8xUSvdK5yy2Up9ZPmBcsdUkgvxiiWJ7g7ccdN2zvHJNFjGRL3q8JMaFxk5JKibwnkAtB4kDfjF4aCoCmdavbBq",
  "key32": "4iWNn1sDTCp9DKBVuoBdUrM9c9fTe9BLqcWo4ZhCN6JBePj5KZdrBJRwEyjc8mXT8QTGiyEEZTU23aVechWHEHKY",
  "key33": "3UW75a6S85ky4hFkAaMRR4JGeDPDEVJxdekxVy5nGqr8RHhrTGug1AsdF8ntpx1LBXBAsRst8xQg7EH4NRydqD9q",
  "key34": "3zab2Pca3b7PshMouHQMLGc8168YEX6r9e65dmDbMgsvSSqSX1ePSDpFBgt2NeT9Vtw29pfG51qAciioGRr8negh",
  "key35": "2ki5DjpCEZHH2amybSnND2zzciqbijq7Jt3sZBaMFrVxxQmsh1R53UCCamzEcnwKGiEnKskrt1diNaxw251sEAun",
  "key36": "54xCJGMNzieV5gjnhmVmQjM9bNfrjSpSsqSWpmPVwMLnyX15Tw8pPZcafbgm5zyhmAcFEez2zp13fVg852hD7gbg",
  "key37": "52FtSB9URpZP5EqduUtKs2VR7AGFojsyTjBDN2h3szL6HBU1nJbDKpin3CCrxv2SZUG41G1XbwLrnPghErvX3LGz",
  "key38": "oV74NxBcy7iwpNyEXBD5ymYBuSRd1qe6VqdT5m5r39dZWc1QjbMqf9xfnGmMtrPsva6vMt8PHVNhaSu86AmzUNK",
  "key39": "5Za6gqCRd7wiS6oX6tf23PdnYpguY8Lh62SmN6Ev4PksqLKVqNx4SPHDcZd99CPrQXdtyY66XJu4nyj7naYKtZvu",
  "key40": "ipYbvi9XskFxQVuSkADK4DBux4TFMd8KXrnYggCD8amnrsCpGv7ZmWMKgd4YNen9J6Qk3pgNWEqzWMnNsN4mHWz",
  "key41": "4uNWBBe3ZYgfUWtvkhFe3RrmXnp576tBBrKiGLMnpx58oYwDTAUNRB3mnpiP4tYzGWiofAi9aA52pfTBdZf41Wdt",
  "key42": "5ENo4oR75qThDC7EUwfg1KpY6EFBkWXvyDWz1sfj4oNy9Nu2525sWHS6mZquQJHSAk2Eor4o68krNPrMZ8bSNbTo",
  "key43": "3ZKiiVFvVP8WTWTWUXyWb1pzvqvvSHD9w2vd6YeMeDPgLEhXmoG8VYfzjsuFSKPd62sibTdFWDThL6sxAKhiRzSz"
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
