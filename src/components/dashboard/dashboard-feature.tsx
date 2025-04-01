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
    "4kgDE82Xk4RKW2FgkuJbJhYK5S6hdW4HUvqmT3AkoMNRXuzd8j8HAD8fhGe9cyLQug8jdYNg5J81ynygW4gSFiAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67WV93tnBiuUkGpw3q4BMAMdYfhmF3tN6Uxob7XMiJPmehG5Gq1xAUK6rEKCB2gNizUcQmR5SR8HEbDusj3dHJWm",
  "key1": "3AcS8ZgbzR7Hwa2N3BruHegSrHppB4CMQGaeEfyXHy1DBZSu7WVQUVjDY9QvQLyjsvjxo5hcKf1ww2wsCfG3cFnb",
  "key2": "4HxEdb859511iyBGpsvmC2ouvHybKtFDGbVuDedyRJ9DRvt4TLZGPctozwMvHavB7Eab8abfNvZ7Qk7JrpYwKnJQ",
  "key3": "34RCiZErXdZacrNaDe5QiNqbzr98NBZwnZZzNFEgYgHmcHa2XpG47BGNvgtHYaDKNf62EagRzWVNpPC5vmhdkowX",
  "key4": "4rJmuLvmmQ3iuwZ1yUVSoKZBGyzP3wMHUv3Mv5BHNDsUsejyMWKdC21rKmM1aFRq5VYjjQAdf6SRNXW9nSYXw58R",
  "key5": "HdKGxVQyosRk2vgutbTbRDSyppKFZec27QD9hdBmgDfRUUemm5fx7unDBiUWagoVMgcod8aiRS3LBhZyUrDGpDH",
  "key6": "4qye1jU8kR8M2tXX9gR7aT1YE7ffbSc5T2SSe24CcfY7BRRZ2U1mv3biSubUnKU5eidMB8EpYQ7neUgKMDFqMZHb",
  "key7": "47SM43W6YSfBWV8KrypqkHLraUyCo4PddKxaG3CSja61PiFFddHPPTZESe63s4d72Pxzph7tbXhju3dh3XwEShNw",
  "key8": "2RtjbSa4u3NsQ9rEfLtLoLCX5YD5ECJK6eNqYGkySJYtc59PGYkzgTGEFdnWey9z3mstJZYCaPmWDAvxr7PwyTus",
  "key9": "2TnUpPjN3ZsweRuetVu1pU99gVPYbc3zyefAwxbNF9phB21M2DW2QxKvG1wFsHxsZ6Xy9W696X3RD4kNnsDuvnyS",
  "key10": "5JBMj63xnbktSNYQ4dPENKy3UjFC3utnmqSJgow6Kuv3C4NBfrWiU1ArMNW1PtQzm8ySiKwoNpGGxDY9HFszjeSL",
  "key11": "4vKGAtSTWFwZCd3xFHz3iyn8EJC9piNDUju9dTB1V8brJag6skAyxy4T1WiVq6sNVn8pKkq9iJPn1yoVQR2nNyPg",
  "key12": "2fN3qdydVwKdAG2QNUiPK42EkRTBqWd4Z1qhPvCV14HjnEvMk7iDhQb7rn93yxd8c5FnZhEpkpX1AypZJn3kSxyk",
  "key13": "qhgHUDKb2RsSRbMWRc2mRUPHPHbzJwkSB5R3whqyeAuV7DS7WJsjZ2PstiemDzzkdggokxLGgjyAep1pNHqTepj",
  "key14": "4F8RsbatKJszhN8RyjWyF3hbkXpesEpuPZfWXfD4Ta1k3VCCieKfusfsoLCVVhKJ8mEbGGbUGiUPFaHqSUkvHz1x",
  "key15": "q4QnWkYi8bDWffehesFa98dAXqPfxNmkRPh6JCpxj3GucdbzQbKrAXAGhRLTU8aMHXCAWyaUbKAWideDpwp1uWP",
  "key16": "3PRm1Ed4SXZfTPJvWw72F1NKWsh946KZQigRkue4VvTCPXyzq3JmQvs6byzkjYBTQaJegvxntskBkVAgC4Uqs6v9",
  "key17": "4mXki4ngw9bGtsnV3fQVBhBPWdh2Dq8vKpuLdZf4zNp1tBcyS6yCbEe4hKyYgCWEqmUdMmoh3R7af1dErZMeajGD",
  "key18": "yYi7eMC8voqyFtJcEgPU5cSSJVbhUpRQAE1vaubMtVJjY54TVJtToNSYbb8ri5MBSixpZTdpzsv5iU6BvBEH3yB",
  "key19": "4oShTv3Ba3vzXU6QRG1JSAu8qWkcmznbBs3Vq77PhPegHvVPZk9nQyrEDx83Vj8e9y8LXbneyMGekmaq9uwsVm8H",
  "key20": "4SzzLtFixis69jsQU6QdeA2kEVcdRRVVyi6K1PzZCGwfUXcyPmz6vJ8GpujLpnsgLZR9WNqpNnarRfyg1ZXnM6RG",
  "key21": "5vT6k5AeN5HRK84dTfmkpAYkpP8YH4RVxP14hKJVRV8sY1A2DBsE5pkV8onTCHvs83RPgqduTL2XVvQvoVoLdMJk",
  "key22": "3agzzwPG19NcYGGUyvemmzm6zmiSy1Axbs3UPU33haTSeVjgG6FLT96L2CyHT2xxsBihCyCq2KeJ1YjmPvaY6axB",
  "key23": "39DXBaGgFET9gwcyX7VhGWeKZUjhFveGRkwtqUQx7Z4wrd3RTmTGSpCn4dmCB7bTA4SyQFMvZRXwXxArkFMdS7se",
  "key24": "27QTBbScpWJWpYxa8EGjsqSriRTNw918xH3ydP8jkZxH8UMAn54YrmuHt36gUTSFPnFDhE1BPA2fbDRNrwYE9jpd",
  "key25": "4dooNnks8zgJ7eRwMb5waxvAUhXftuPhsCVBKZdSK4sybyRwo89necAMzwRGtqsFJeWGzBaUMf59Xo3iRp3Xhpq3"
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
