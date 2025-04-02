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
    "3SGf5QFL3Bo76zgL7n5sCu4CwaCmubF7Ty8VM2XM4xTeJubNuuvnfh5Uhiw3N9xN5vr1XMAFDPcDShDZqojtwH4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49EWkngXkoXzMz3D1CmaSEs7Cevoppamjpz4akgaRMWB8zzEbbqkFCKc8tKNhVCXqCwg81GR7GzMbYMDC8ecFdTD",
  "key1": "3uPNg8M7VPK3kwFBBToo9L6wZ8rQKzNsh5j3dEaCN2K5PrtWsuMCJKirshfUAkh8tgiEvXVA7ENu53cWTPSN4xVy",
  "key2": "5j9ZUPKvVwphJW8ZEacDBhSmy6Rv2Vj45EvXCop1ESYptPmu8HzXEYymVDmVqifgHNJ8rUNeXtTT2z1R1N7HHydF",
  "key3": "5ZoYE5g1qeHiia1bBtG9mQGfWoo9aAWtLd2D4hAdxPo1cynCMVNEewPQF8PU3C2uDaeyVpURxYtKbnJVyJpSVQnD",
  "key4": "38m77VRwnCNdfQe7aDNaW52X1YfHvsjZQXcgEuoVdjPUYLipgQ1xRYpfLmc5UXAqQN3z9u9YgVSXVQKV6tmRETZw",
  "key5": "8AMgTbQBeGd7iXXMQTnipfCgHUHjSRaGuX6VnJHuy9d3VKK9ibYupPjcVrFvp5Z55vZgtP7hz2pxmtPWG6aTJSq",
  "key6": "5TqdYvJGtwXnjn167n79Lk15H5FTbe571U3deV5oRDUX64foo7YZRNyBUuxeRSy6nSQsibnnjXWTC4CsqYEfdTmy",
  "key7": "4q23ETg9NpMK7Xkn1VNuX4erJDvb9z5equgm51JRq78sPWTdvUhyrnT16j9VRCWmxhiBgzzqaqmCzrfjUAkYhayB",
  "key8": "5US2LdSmWu6ZoziuZjZMnDWMQ9sYmLgassRBBJ8yUsdr5RgREbR9AtrwuLFTFAqZMdryvUqCgdPfMoLk6GV21CyM",
  "key9": "56wwrxYar36sEi4LfbfAvctQcdZahtST3HFV9WZvDWKJ2VXS8JQQamZZjA7nD76nboQWxycY2N3GVCNZHsimEE3x",
  "key10": "4PH2D9MBtFamMZUyDRZbAfUk4MSNWG5JoeHRep27iAfMs6H9JaDKQ9KvjEbgQv5adibRr5GZMH2Aq4vkEUZo7XWq",
  "key11": "4fVymg1As77jtWRzV8iEqMkWzvEvA333NXD4NsGEPSYNZ5tRHrsT6mMD1HoHtQEjSg8dx2CWpv56raFiX74h2oxP",
  "key12": "3zrHDS24rCLgLjb6YL93aomTJsVQoeaBAX3HPaRvh7n9GqoHSS7hqkzhgBg6ppLPtUrUawxiwx7c1yx1inB4jc3w",
  "key13": "thTUFFw8GNU6d7Eh7S3Em55yr6AbpARMsEvMJj7kUpuabikcYGDtxpefTByRWqTZz38KZkh4DSeWTvmrJJYBhGC",
  "key14": "4gM7U4QUBEh6YiN9SVy2NzemNJYHT5nQJEgfvVWgP7RRbQ9hGcH8PG2NTydLLw6v5p8mWgGDi4bJpeQ7bpUQtYj8",
  "key15": "4TovUWS8XxarxHAm3gii69MoVxJkn8kpXbXxwPSt95G38RRivPxTjpxK7Qv1rZrjQZW84S9vAnZxXXhqMPkEoJ5c",
  "key16": "VdYaLf7QsYi8VMTSvRkdnn848yud6EVwoyG23j1uQQYnYosCUHP75oeWCkGMNdVU6aSqpWwKjCtvMn4Lz4Q3d9B",
  "key17": "3eS6dDM8A2QBghQpjbh1x3GyaiWR6mP9SmyqaJHu9qeztiRPB9Rkie67vsWpC3NZgx7TKNLeTcC1WgSihN155oxt",
  "key18": "5h9H7N38xZ9nRd99eaaPv8TGUTHehRXawTFERnkhTiVErikXthWnADBEfpjqupWXKSSY2ARErjsoRK2MiNseKkZA",
  "key19": "2pXkWrLrZvR2d6J2KU3z8vhjiSYMktZ3q5DAf5LzoZE89cMuQahjJeLoX34PqbMCbyqRY9TYFFJmF1bt83J8D16K",
  "key20": "3843CAC5FcgGsNGifEcahznUXPUvrt9PBT542fEFmZShYszBt3dDHe2xsPkyF56mnR8L2uFvJfCVqHjCPyZVobDU",
  "key21": "4e2F1JoGnKdKK8ku9GrWL5QcSApZmJpdfrMDeQFZ3KxNnzn7oESanA5it8bNucAc5Zi3vMTUV8Kr513DHmCjRJuy",
  "key22": "VQFZ81HZpvxxuAhyEY84e936drxjRWqXc6iPzQose1PaDr33WnzogPgTcDXnZTtsh1Zaay4EHsTLjsiwDEGRvNz",
  "key23": "3c4AZ8HZdJVpB28ssyDUdjkuoY6RAoMsgWotScNbqmmLmsAqMwrBJmyYmpDDVq7asjdtjVZr59KsTx7AdXq5xDeP",
  "key24": "2MhHj839tJw9wwU98JGH5c5B6ddK3zY27yheJqisyeghtgW45iV3fBGAhWhtuowXoSDct1ZryEYCzb4u48ofJ7EH",
  "key25": "63cXSnJmKxe43ex8nWnn1GQv8HKDXaZ4SSJLLfhT5cghWMvCP4mWZwvcbpt6FwtdHr8onTKuVKGGA9V2d9ThTp8H",
  "key26": "557tKQkgibxTnuhr5EQXbBntUGVWrNBkgBQJNNSASknn9GyTUJGEvRfvytkgEy311iG5sZFbW5fhknKjK8oQVDX3",
  "key27": "3ShXrmzNnuLi5PEXjuneLN2z2TpwTm3W9d5fh8EjsRzZzzDPAyShbYXK5eeScSr2z3NXCy5GCSqgX3g2PZ1HfULh",
  "key28": "66kFELKz3ipFhCSRXfoHcEMF6GWATFwrGkoYMv7zGFRj93y8RKpxYpg2AtTX2Qb4j1axE5NTSWb5CVPoCDLgoDd5",
  "key29": "2NSnt3MPccgAHqDRUd5nXECAtvTvsvP3PbeZc2xS2XXoanvpdnJaPnap17p6gQj8GxWAWGKbWCUMcp2vkuT5EMeL",
  "key30": "2k7br89o3MvjwUfcQUkEMxCcgBYcpVAo8MdGZz7Ci72WUm8rcwPxg8gbbyCJivm7TithFZJ1BD7RKZk2gJ9mVDFd",
  "key31": "35CHQM8zfTji7mH5RCT4ckDpWLVGJhR1HmvHJN83ABapENLXWYG3uD4jmpGCgAciMEB97tpQCEzMhz7JpJ4NCgj2",
  "key32": "3f4huBTrxS5YNUcXtPLw7zp18yHvt9HHp2ZJrXoNWPW8Avu9L3HARGCfwfSRY7pP5XS6iysYwGSMYzW3ydj3eA9S",
  "key33": "5GSB6i5wR2svAHRDYvASqqftxbotS6UJywEourXSBnPFdMB3RdK2JMdPRiE1gNgEdr1gjxjP2ckBnonAEwZkzCrR",
  "key34": "43vLDn7w8uqShZbfx9ti2JFP3rL2kqHREVebBZuhU5EpRfidrvLp2oD1hkxXQZ3m85GdXy63GSmDydX84oQHAAE9",
  "key35": "5xQgkCYYYeRHVuoPaUZv9W5ng33fntu7UQGQ4KF4UQWoPFny1U4hoi5NbzuKzRLFY4AkRt9rJ22GZYBtEPiJuQK5",
  "key36": "2ea36ZUQponuAJNSeSgSmZspijF3g71cw7hxmSopJcAFW91PeVksHM1XayiNBgBxVA1v7pmht25ArTZVBQgaH4jc",
  "key37": "2QrkfiGKo6EdZYUdPGpvyGNKDeRio8cqqS3N8y8JDtrsgYAC1tbCFqqwtMaq6kjezCTYHKfHRaQgiS4hftvESejU",
  "key38": "3dunNgQP4vSUQ89KDNzujiJjdR2AsH6NWHX1uBn5SU1Bbr5sFPNZ47NocqTK1GKJGvAm2ThRCWMEP9n3BVgeDPhs",
  "key39": "ps3n8JqnfC6hYvx3bo3PL9AvRMP1nGgUSaonZHqBECkYKkdFD14ufoNQhpeZ4dTvzqknuru2ehMRDbrhW6FirV9",
  "key40": "3tfxA2cTSXntJ6Tzo4KqdDqbBgckWxvjZmMLU68VyHESaoXGMoxTEWCZs4tRfQmJWgYmRqVzV4M4Z5Ge4RJAFwFw",
  "key41": "5n98vMuNAGtmkwRHgBdovQDYz23X8iVmgqjggjJB6sjSGe3Uf4CGXGMvB1ATaALErnz1xAGs3HLpJi8kLmYzUGvH",
  "key42": "2xf2RcFUkVskJBm2cBp96PNgD1aMhbaF3DwdZ86J7pCEVZcQjfyAMxot39i4weVrwr5pJsbcXux99ipsagLehrmB",
  "key43": "5hQPcvs4NyK39U4JqoCESyZHQvitpquxTKU2NwSRVcfnwHohTvvp5ZxQMC8HSVGP3QFpgziFJsWVUKCDskecksTP"
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
