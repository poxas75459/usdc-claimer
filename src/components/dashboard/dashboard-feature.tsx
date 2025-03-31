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
    "5PztV2qqMxWRaZ51HhEH68281sv4RJhd5vkkhNFkovAMfoHEYS6L5iCtsKZereawvGJuvigTsM7L7iQgM8N3ECQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49yjeeweEEX5pxMkSbZD2aHriCK9g3DKtnQZk3q1nCvatH7HGScCZGgc6KPs3zCW5s55yFAD8sjtXUxgyqASAhqm",
  "key1": "2tjeGByRUt2gWpNeEWGQ31hP9PAyo1SPGtsNF8pUyGgEwBmnTr92cUXnRL59XFxG3DxBRVCb2VmYGtrqrLgRdLN",
  "key2": "ULzgDTtZ6oEK687HiSZ1zYxWDgMgnPXFEBY2jH6J2AwA95B1x8rN6frRaR8DLBcFAoX6xedbaGL316wrv3Hvm8J",
  "key3": "5vg2dAvR8pe9NUgnTovSe7G8Hmoki2Dh6HFnop4N65TDu7PZZe3WpqmrNCfrTDiZYNCz4fKJgBGnsNT3wycYcMCY",
  "key4": "3GAYH8seCWp3grxxACCPvUGphGHAxx7CPvwR9buhF7uXe4CP3nUhM5kXByJCXoPU9f8VWnJE1LGAHNPmdudGTzJ4",
  "key5": "3GBNGzwgovKMmsQWPgbaudNMUqrxpu9rYR6rnqwzS5BMLfVAfBfJp9tpNr8XjTk5VM9sg9GRU7yXxNGCP5GTJN2v",
  "key6": "4Hip6K3dRRtNKUuRzniJGQqwYoHoau2Vmia29jJTqtDDMMwnCDTFdivatJYJA4E7eokHoo6pPHqDPzJRhyhVome3",
  "key7": "38MBGFbMALUqu8qzmDVw9AC5FPNLCbF6XGriBcYHNBba78uHiP7XuM2xSHahv6UMRiShRMuVCMa2zCM2Xv8HWHgk",
  "key8": "MUw9ptFadVh9QwhH5VG7ERUrGuDmaGcKwHV8mdp6X3wPQ5qTzN1SHAwnhmdcNpi5wxCTJEHkMdTWqU29xMvze4L",
  "key9": "3F9gqowaZ91g6PE26yXzR9VyayVJqEsJ8N6dPBSaJfCT3rCoT6PVQ34S4fe5thGZaZL1p6qP74jKcBkZZP8w2rjZ",
  "key10": "WwcJADinUsmbfYLoSNv3z84yYoJcvdAGaFsxuYXJ7eQBJFhX8yCSBGB6SozErjbiL4ja3BBE7KtjD7zv3LgpDej",
  "key11": "2b6BwqgmUbJ5iJFTPCCBeBhs1hZR5VoigkR2T7AKuSxDeAMxTgVcwDUEDkG89zt8mkSsSEb8kTbNfnkhziea9QQy",
  "key12": "4nguPNryThsRj4ecA6TFWDF3gBuQr2pC5hcB1a24WawXinsNL1zocwDfondcgGGsXviytZPGzixVgMRowE1xDZA4",
  "key13": "2uZ5VZWGbaQNdkGibyz4ZgM1ZcCa1sjf5BXArdtb7dkdU5MGg3QF2fxvTpMUpfiaZucCuVjTfaFQ6U8eV7xKe3EC",
  "key14": "2k7AdwrjsF3nfZWgHSvbNLhRQqfLxuJMA7phpZFfsL1ZgzFNmVzs4wmAHU8kucJysMwn5NCRWweMmdPFtnsWggdq",
  "key15": "4bopHvKNqfJCyWyy6tYLfToD7sNTqh6TGQoCVyTbgLapWYZUB8Diei6cdmzsgGCTd6Wjm48pTYHKBCbwFN15u4o",
  "key16": "R8MS6SNVYgYsAwVSSpKPq35HgXfyvYKo22j5T5FQK43vDeXocoXr6G4aGnMNKCS1EvdtcgHbjsb7666LSRDMu8D",
  "key17": "3w7JnBWPWqu6NnP4pnmqM8XqkqtSkCeXDvLM7qvhvvYE7ZJjD6eF6FgqHpWb3aU7gM2WvyMjVCYjtFgbvmj94x32",
  "key18": "3S5TZhrANMAFE8hN923EpSPPULwJXuHHjbgzBQuWqYqR65M755kYaTTLeLJ7wcNju9hvDVhz7oBxZ2yZCsuMGwuy",
  "key19": "2sDb4yver4TkgSNfZAFFmj1frYE9y1tr48qn32vsAcmVR3XgaQ3b9N4UfDKXH8E64hUuzEJGMDRRbwYieeiG68g5",
  "key20": "4pWkPkopgSh1eg58k4NbBAJk3wja3Jfv5sA4UvryMA2WCeabEsRUwCirZLejqTc2zncTiwbXQUNhCMLBMbFaBRmJ",
  "key21": "5mszSqu7s1gNykfaDngKZtB3QZfAaDB1CSGtj5VzqEKXKKEjX4iQfGvLVV59A5JV6XZza1hoUqadAmoJm8iA6jjQ",
  "key22": "2YQrQTzNXWQ4o5v9Ms1yAj9cyC1oFT1ATLLVEF8wBUjgrHteHzC6NFoHXaCjaNrtVEuWwWhKgrJQCLzS2FJpGEEq",
  "key23": "3DtZYSNz8BM5mvwjLusFdfbonXnRzhWDS5XNVh7reLv2T65NNCqq8xCaRWdExbac41ptSWMejusbzFFXHUcqViY1",
  "key24": "529D4WCPntFYg8jZX1aCowVWSr5swQkFN6MSvx8tQbXxEjkJ9138pCDoNM1i4pqPg2AxgqsVHFJ14grC9ZKyzFG8",
  "key25": "5teQQfDorus4jf2QJJmuDT2znyAXw5EEegkivrETzAvGW9VZkRCRtvuQBtcrSSJCP5rmuXUsMgHBeTRYiJLiH6og",
  "key26": "5Zz9RBZ8HEXKx9VF5o6L9s4c22ZudVXKdaCiqmryCCJn6kG9CJUhfsnTtaPX4hUBb7XVgknZzwnHUWhBTb1CuDAu",
  "key27": "5cY8tN131FcPuxX7L35a3edtKYSH178a9QkA9UGTZLVZnotJjGfNyDiwazQ3pPpFbTvRu4TUThhtpYuFnhFooejk",
  "key28": "4QuBasNMAXeKKmyPp82BtyTefEbtDzk7aD1nao1Br9QrVUf8S1sUBDwMc9DopeFynShy2ffgghc3AN4oPqsEG7md",
  "key29": "5UhPUELSC84Z91FwKXnK94NmLxN5jCfJgVFo7cVQw3SEyGGM9dZrWTXnmTU3ZAxJdFjoWGHujaxYh4TQBjpnL9ds",
  "key30": "5GhcUAGJLjZ1QYZkBE4UzwnWTVJqHeHhdd9Nu1Kthh7EUUPMudrn1oVJVqnypsYnfXECkZZFzZnepia8AcGJnwJ7",
  "key31": "5YsLqNk3Ha1FmJhS5jLCbJ5wph8bZps2wz9tDhrQfetWB6Tpyxzeu7HmrjXKXH3eNk4EKD5u8fpQgQMCLg1HiKky",
  "key32": "3kQHHmY4PYgVJEH9f3o8XAX2Uib6AsuWtuX3F81GjWvLzJztEZZMYgoeqSxqdkfZQ6gmzMjbB8MtcmPvaaaikWfM",
  "key33": "4d8ECsC9c1SaSKTxniLmTPb5KebhmogDNuw4zHSzf8Up5nz6UcJeAgbqhcxzUVmrfSgFnx2LfBhtruR4Ua4Gk6tp",
  "key34": "5wph6qZrmX59gFo7CcWo7rFYjNkACtSE4fPjtHr338M6yJZNB7E1NTWnnRgyZHcxBx6VTJmQbjk8ZMZ6Uwtb5dmM",
  "key35": "5n1EynmhGHNFgi6aShkJxiq2dK36n7Xg6WcL5HYHrb5GsXwv3B99tc6n9FqjPjTEkEszQ9BdNnpQLBCYngr2AFY2",
  "key36": "4888d3wvuHp8mCpSqLEvZvuJwXkaUuEUoMdXqXTfKKwiYM8o8wAPem3a83yp1G4UX2zDy9dM4jJnsSbdzxvxutD7"
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
