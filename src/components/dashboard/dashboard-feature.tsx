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
    "575Mr7h7SRbf1r1cB44MqeDZqqAnpfK4QQ6VqieEvCKMdEKKtnF2sSnXUEAtcGp7gn5XyNF7NjPGspMtgncq2Tt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RJinykH7VdQKBriydw7V6vAYGMXjRv4yz2b7EJmTfQUkLqyDDzKcEbwhFadv9aTtrinxrznBJNd5m56XTJ5BD3P",
  "key1": "5RXFa6uoy9joNSyygvWp6q34tGvCjCBFem2eWmmUJb8XLJ5iXAN7XvV294CTJPbV7Kn9938k6hKevq2ZDCUNtR8j",
  "key2": "2gDd4AymH1AdokteSX4yFwEz7ByoaddCFyJAwozWt2jd1Gm2mnsxJJ6Ha8jGDLELLpZsQheDtxmgbj6qoPc4rd5F",
  "key3": "872hNqTJMkVst2ANX21qMAY4h743sQhE3PFvzxkHWyEwSEoKSnXowqgNynx79hQcZkkG3oLzNpZzoL2gNW8zjd5",
  "key4": "62V4FVjfrW6FVqh8KrKfP3escUwySKG6AP5eWqBFJhxvtzswQmzuCFmtjzyyRypSJadgAvFNGoZ2QLQkfECTHWuJ",
  "key5": "2mCCh3MtnLwZfWXmpSogrLpBKkYbzyJvA8wT9b5gXBk1UMBujshNs25gg5yPyd8sFfBdVUVRu4DXPQaCTbxTWeB4",
  "key6": "49wnmMkdSN7EXJQUugyceMohwdFmJ4gdsLgRqsvuu9bKzYx6XLC5Yopg4zpPaKtoUtJ8yaNE5Gp7vtuoNgXGpoUv",
  "key7": "3PmeyRtGcer3xPUX4AqvCp6kFbfhemUVfci9h2un6nbmSiUT1yJ2gGFjyScZyGT6x6PyVU6UUw9FPdxo3B1n2mqy",
  "key8": "2D4TwXhSoZWFdbEGu6YaA2z5wxeBGFH5emTFv9hS7TV9XfS4nuH3BeEbCHD7o28SS4PkkNhx9qmRTZHcFwWUkdgX",
  "key9": "36NdUnisVRsP1jWXC2tG26kEGZrYkj9GnSWdZpPmDT34XXJVYrQ5rZnD44qa6Gy9TsDgPZFwHeu4hHHMLoAc72RD",
  "key10": "SdrfzZzHVLLf6jTve2C9xjYf853K5yVwh7VDdbH39hYSmSCQyEcTR77gm4cHjRd8GCzhYNPPTbNoWBogSD1UyhM",
  "key11": "4hDsk7QhsKrMSi7H4aSetNbxnCUBJZaN14fb3psbzhQN2UgBU7SssJj2jdMRj6uWLzqoazXN13JUJ6UnSQ1YHhFw",
  "key12": "fwkW68o7KUQZZUYbCwj9P1sKa7nqxW5mKQ6V2sWxen5xe7pgfzAKQakzEV9FHhJaCUhAheFAMvS78gmbSeFACA2",
  "key13": "ri6pmfD1yh8vAg6vXokvP88VgL2Et8oP6GuDLSoDMHUx5YKPdabhZmbRP7akByXtZsvS9tUTcT36D2gwTx9NxSW",
  "key14": "2uoz1UUqSbsw2tMkFs1X8EJYHweMQoSLvu639rnLyKKHNpm8dEMNMY6UXE5CmEfRL7ewWue2PifRGnqn6yeKdgCB",
  "key15": "jyndxQ8rh7fT3fVgTq6gNfrd2hYV8fbEzsiKdSysV53af6mvUGiyhYTi5v5vSW8zUWxPEo43sgmZoWoKZNG3HB5",
  "key16": "4jHWw2LR5HUZZQchMLSY59ByEmMDmKBE5QwNyXaHLerULSw4GSJLA1CCoFjLP9wpTpiGrjRYnWxPiEkQ9wgz2ea",
  "key17": "ZK5Gs5xKbuYzBgkQJAwxGdn2i7i8RveSAWfKaQXsrtYPu5TymyRLVryHCuJxGhUm9DWb9rrT1iBhp4W37FESvCY",
  "key18": "5ZCanPAHAWJJVceD26vLxmZEM7a2inrRn5pcA9PaHKji4o6z3jNZjYGVgWA9mBJRKUCp1ZiWjoNYtgansAXsYPkd",
  "key19": "sHt64ksDZMzHSA24R8WWeH2ttQHJHEDiCMuBYkDro6AocSoZVVCtDropagPoR4NsKGG6uy7RCVRLzPgV68c1RDB",
  "key20": "2m5SUEEX3qBiJWKBzqFKMTRwvj5woPr4XPyZWF6epZcinK3SS3mn4nA5QkvbAF46qxpQ1ns9rzYikcbQkQdztt9M",
  "key21": "6bxS5yP4cgEpGPcGKEewzv23Goh8E8k1rE9N7HKy6jNB7adhUzN3fcWn1UBXpZy6uk6bVwuFz3SPbAEXaRY2sZ3",
  "key22": "2eYSd64AtMYvYUS9hiTiTLCHSC9sCqGzgiMXtAxHmnUh6JHoTEeB8FDc11cz29KWN2QDipMjetkysZ4nxcyWZgnk",
  "key23": "2HLxELQjSNzGdrVbbADYmf3fB4dAE9XYeAWRKwh6pyRhyPtxn1CNrrmq7Suw1zxLGm129mVAJgVXpBUNLMx4PAuz",
  "key24": "44zfXnLjUSQ4VnNtJCU7FNGmSq5tVQzMRFaiYc95uyKb72G4Sh31hv9gCthoJBKBoKdhuQ512oKtv5amG5pF1tJR",
  "key25": "4oLpffV1HJ8jMbsTNFwzeVJJZoTxLMprQUgfcrg8qngQjygc5haAxTHdcbaHbLHE839ViDpcF6UMLaEKZRbCPTiX",
  "key26": "2YSXgezLDcADSk5QXpKACnwuJSSmYe8RxPgxMM7jisbW1ev4EaprKRCkHwMA9UZwh1nZrWgfmqR7N9897gPhDqqJ",
  "key27": "4r1u77DSRuqmFC39V7X6bPG2AXcx7zehU2Pg51inW6DgzEvnN7QQ6FhZWMsnWPVJoMKAvoqatY2xvGGomAyUbkUQ",
  "key28": "2mahqq5LtxaWB5JyhZCBiydL4B8FgBFTJY8RWXbqMkziwksKmwv8AVLTcQ8D57i7RXYQ1EDAcBi5cL9Hiy4vEyKT",
  "key29": "3uJKKRUmhq6AWdoczTfxZajytkRCsEpjwNH8JKaUqz9jLm7LTEGz2BTFYwhrrGVatq3ps3h2DivVeiw67WohY4z8"
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
