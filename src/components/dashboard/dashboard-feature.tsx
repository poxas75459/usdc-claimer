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
    "5cB68HmdrKEbsdSDVYK9M7zL9XgXT8cLjBVkhiXMdBSwmCG1ACYPy7pLpj5tN37pbMzywBZ7GSD6ED5nVau3jnpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EoEocQR18M3LKmEhcpkXxwLp7dubkhgfjumiQCUBL2ECqsoeQdRjmbRwwjRcwE6M3JCqH6rAxVqWKKJouQifPXr",
  "key1": "2Grw2JeGuVGjzht29nEHEz97astqbx18RkzuaXFhfvsPeN5pVeWz46JnYFtyeUNMWttZ4n5xhSrjAZ1uMCqQbFPZ",
  "key2": "5ZdcWmfiRDDzUYLx4EwvcBsPbv6VNnbcbrv1YJo7YDvDYzbpC1rPSSoW4Qr7hCxu6KMmLAqjiP5PmDXA1X9MsQ84",
  "key3": "LndJ6hBoxazU6cC4AW9zKpihquduTcak8CTrfduyr1K1QeReZ3ohRb25rBDzNhoJuFNn5ruuRtGAg8oLuRkLyP8",
  "key4": "sNNKacj9kbMqrDxQKXbctcAUAqVVNqsXe1RwwnaEZDNxSTEtej7d15d1hrxAbUbaRRy8K2eM2Q2HgWVJXzBtMqN",
  "key5": "58hwMoG5Honc1u8uRpwVhkUbE6VxYL4WqxXtU2mNZJhQ3ksEmvBoBP5PHVmNFE7ZLCqekcqVWjCBdGoPbd9VXLqG",
  "key6": "42nyu7TJDRfQ1w6BSMNPVKKKQgAisLq5A7Atd1XsbYCfm89aigoQEvSTsB8hZxv2uPg9vobbcsrRzXLHmaJLgFj7",
  "key7": "4c7jebWzt4L5n5hMU6qN7WMhjnMjgQtgnvGeQz6hED6TYKFY5VE81MTvgd6zmRKBJZQhgg4AVTPJwwmCPCkoNDN1",
  "key8": "41CEpc3TVymv81XMhocAHtLoBPMEp4YVC32VoyZDosdXXprKYQRFuoFXsfHSGQV1CiG7CDLGp4XNtAyj3WEpUeeH",
  "key9": "2DCBCWyhCwN6ebkVgxonWxmE6HUdgdWjjpmM3756E2fERm3Soy1zG19PV53sU4kvyzH6bbPqQWvdfbnXj1tTXLnA",
  "key10": "2pfDzpJc79rNaNfi38xxkQ5EUtcXJHmCx1d6PVspyYVrKv1S3AgMLXsE1PwX3zAfRg1P8DidLnSU6WgiSN9kzuZs",
  "key11": "28ttNFWLsTgZDzdndSUUmddP7SK4zRcXU9L7Zy18squw7wWGrgo8MxhJrjAp8XFhuiNMNifF2nrdH4dZ9Nozg9P4",
  "key12": "2cC2rZFXS3iZ1H8TthcibJVU9LWz1txJMkKZTxn5jChbfqKY1iV4GkMYXnVECEv6e8bvUUGUANJmyGwcupVZ9ysp",
  "key13": "GqwDnPKJDf6TFMw36WF8XioHVGv9X19mdEJ3pHMsnNwL5zuoPgLGQcStgSpZtUzgm8fEvhSEtxqV8w9nCBL31DU",
  "key14": "5fAqNrBDNsYPLZG46NZtsyXdZpJgQRp3UuXboLBqkpFSp7N96D3hQMAQUqJmccrPDN11pFbJHtZoJQNKrCYj2v35",
  "key15": "ca6yKNspQ5g8T9bsH3Xh3zYGDj1n3emgyKvLrKmHLAkxt8kyT8Eb41wZwqyQ49PXrn3CuFeiJhosSrUpuDjF3i3",
  "key16": "3BLUKLgaT4RZmZiRW4Q11vutm6b3tHrbTro6owX1U9dGW4KYrgMUD6uT32Q8LGEeK34JHb6sT4ijGAhLB9H4ftGc",
  "key17": "5Y95gD3MtGR5UL52DxPg9z2HNMfPKuEuY9tGbpWXsjZKgYKGwvibdYJ14UsAomBtfSThAMehqEYWbMDNJfhSi6qj",
  "key18": "2BYh3fZxF4mRMdauBbT8Cd8BjSFGSiR3GA9ymogEAa5TRn1Msu16CNRnhcjPfaTXjv2opudyNraMuQvEHT7bma7u",
  "key19": "2Zb7gN973Jb1i4m4W4sb4CbsNgr3dLfKDp1Qk4eXQjgKdAYEPywRmk523Loc2zCjkfQ5aNRuM5TaTrNwgGZK3Tt2",
  "key20": "5ANPn3ZkzXkLx4xJJZFrz9YmKfA3crgcdEnFHeuz295GRGXWfcYfrTBA237Ez6qXU5LHL5j97R162JcuAK7kFdwS",
  "key21": "2E3CUYrfct6wYDrBWRPedJGNeouRij3DBnzGcRBufauYekJUkMWzpznjN2rXbnfF6WeEN5KiJLjtAE6kodFVxE9p",
  "key22": "3xzFN3WGfWmkmeLF57JZigu5dckAJXXZHos3vCG6PV2daXYhroGDxRQQGdBpv3VztrRLes8ngnymPGd71cQfZsbe",
  "key23": "3JBMW9SFF5F2dnpiwWWZgLJesNGhpESJGS7Wo7R3jeB68cY9GVvJij4vtveXjqRcpPdMx26BcT1cXWfQNAaiPMr2",
  "key24": "foKqMP7yaHHN2NqaEPhs5kuqWDrnNjGepb642MbMNHKkU1uFTHpAAwNvxJ8M23iHwtEKSiAzd3fNwc1WdKeYmMh",
  "key25": "57AQHrp7mTbG3foSZzYmERVeqv7Fkz7Xn23Je8oK2jTVdaUpLeqCGSvxgDbX7wmJ3T5gawdf58956XU7SfuVuCEY",
  "key26": "cgkZhdnAwirRPGQu6Ve4gLE7Po2vNHVrJ8gMJL7E4T94oQf3jXtCY2xrGAevuzteFSUYqZ5nf1DoSFCqRtU3A9C",
  "key27": "2Hdt47xgNbLSDvfwRdU9beRtVfFAwcnvR79XVb82fro8yP9WCS2VjFyBHTwvJsLYzEzWM5aENZ6Rhfr5W9mdoijQ"
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
