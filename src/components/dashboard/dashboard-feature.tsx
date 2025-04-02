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
    "636f4q8RyFzKxaCC8P64pNRdisvkRbKmvWsa9yZHS5C8MwwBrJwp28EFBv4JWUDkF4LwFJs7gsz1xBDnaR2ZsKVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L4E2JRvsChkqsxcLZ5czxVNf7riYaSnx8zy5Sx5ysobDcvxHfDmEU48Fynwavj58HNtotVKGtoVnjNKsDfrpjxs",
  "key1": "3wYNYh72xHnF5jNoLbDprepUiE4uSnq9yQzFTusLaDoBtTsmqgJrEm9Lw5uvTmDBXUEj6mKX3A3cPbb4teGbgoqj",
  "key2": "WGkTgWg5Mst5AFBFsmi9KKoJQWXCkctsDs1mXiA6qaYdoLenc4TBaFaUvdoLEn33Gw7zFdCnrmQQ7BpDKGWFEbm",
  "key3": "2F9dn4Z7w1iwmMYoUc1YXEJmqhaGgTLva3F11pVPopGVtj2BTF4Kn1uVvwsNEw2AFq1ePzfhTzbDV7HiaqDnTCVE",
  "key4": "mvoAsgh1sbhKzjAm2bnSa1Z1sx69GbxUsnpWwCLsZFYHLzcH8a1CD5g9eNEKVqgmBebGq8RQs3sDSPBZ2shdwuH",
  "key5": "LwJid1r2FzG5d2PvSyKZwFyFU58vh8u5TpA5c6vpzMFWU7eZAHSey6DemwPazyhcrLfBtYYt3jgByLeJYeynzWK",
  "key6": "5bmGtCCkBCgSwcaA6VGnshecN8G35JEPpwAUkY9cPzjRhNYVRJiA7h63oQdghSJvRGGkyQPu9dbn8i1xZaxxccXL",
  "key7": "2xFEhsmrhFeEkENLrSDNGatnCMa2jmtRTDads79mSirJdnfb6bBqWGrHVrdb8YznEnrqAuVaKmVMiBfevrZCeLWV",
  "key8": "44pchnDfZDCza9wdR3CsdHxXfA2fFnwTRxQBCbS6sE6MobALEr81VLAH4kZTqaREZRkVDrXgBS4F9qVyuE6KTUDQ",
  "key9": "5Q4BTM5ptL6W5TVuXYusptXh67sRGGH6Q952Jvde7qZyFRrFmzgPA8v4EzRQinAFdWLDD2uucd9UkGS91Lte2rQr",
  "key10": "4qeW6SmAtteBigPNMxibJ4Ka1cM7aXyeCqDMkZ1J8i9qemrG3DBeVKvrmgcTPfVW6uoiaErBkJgnBmtCPDAkPsz9",
  "key11": "3riRQjgK7mEqo31gBkFCgWZwJNreXuBKLUVQvc8R81Z6dEmR7XD8RsQiqjM7rD5dptrLnZ4ZQYuFNn4bcQgYNeeN",
  "key12": "2Gm2A76RjSXKfBYctstrowET1X2QpeJPqJFk5JtXdzNBA1nwduVH3A3qJSW1L8HMPkJqwZRYPEnTJ9LF9kmHFCU9",
  "key13": "DdKE3jXDpLkAsLSezHFDPjMApHKteYpHKfVER2jmsbzn16NE5XSxkWSSp7xoiwANSXwhpHk5ajhR8UetmpKPcig",
  "key14": "42KMBk4YJN7dcfsQjHquRJ3MXX9jF7Yb2ob7jZsTGgcwnW3RtGSGL3CWwL6mv2jR1MDM2tenCWPv8pw56uhiYyVB",
  "key15": "4pBbG4VCXJCfkB6YDeQ54qkdRBxaTroUpgoDmX5AkAYR4To5XJxcaCtHWBZ7ZsMQrT61WdPy59kax6fihr2JvGjQ",
  "key16": "2wAVosPW44HPLy3xjBxeLuCxsEVZ7HS7BnwfiJBZD6Wd5rDifpnWoj9VMkBhJ5gcHCFZcWYkKYHrGr5h7EVXkmK1",
  "key17": "rjHPT2nougUvpMCtFpmrmoK34AuD8EuHbUpk3AUpBVAyax1CZpGSLpAAAQvohuuKY6qWebTLai5ksSHRjytFYSB",
  "key18": "E1XqJ1y1JEZBkiBxjtbjVJa9sKyW7qKNX7VEpqoNkJKjjLHqTnbMcJoVmE2FttV9BAY3tihzdmAoPCVEXkEhW8C",
  "key19": "2jy7khmLSfjE92EsBFpPHUmV9WGyDU8tVjesGm3v5fuNCzU3QLrGx3159yCfTdq4nrTvEz2fbgXYDCtbCXd7nRUW",
  "key20": "ZqojELnkqMxYJvy898RnYPeXMsF6BTS4r5qtN8R1Kf7NCR4VA4vYfiVDhrfsMfDULt2xwausUAoJrjBZnefieG4",
  "key21": "5FALMLxhHCezZcQCuNf9CLf7JEohrtfzuG7miNGbG1WL19isAp5FmvqWkDWEkbGtUfNDtKwKuZ6VYVDdH931KYqt",
  "key22": "5vxUohWXsuRFZf71HFmxxK3aasFXtuHvCYDRmHZs7o7HRktUrXhVw9pUt9DRB5AZgWDikPTihb7hmf8VzdCtauLB",
  "key23": "5cdPoEkB5yNCWyKZyQ2AMDZZVTPqYcWQhVNo4Gv8ZtkVqWk4h9i2nw8hqyStWJ178zQc9mi8ESG5Y1BM62d4yAn8",
  "key24": "3FrAe1JQhfqJgq9HbHKeokh1S4cq4jEk4cCVsAATXDaSRUDb2f981HFeUgfnAM5ECjV5A246fUL2yUrBq96HdSoT",
  "key25": "H2ARPJkipiwNKCrxsBmJWkS5TgPAd4wHxKWxBnk1KYFjAU1WPeUma87C9muGqcjn77ZoPEQ3wiSYRxVEqjU7344",
  "key26": "2sothopL2fd6kA1kAdeRMCjivfxk2Y4u8c9v5Exg5SzJQKY9WoE7CDL77s3VChnvo6CsRkgt7YtzBXFM5VQednEK"
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
