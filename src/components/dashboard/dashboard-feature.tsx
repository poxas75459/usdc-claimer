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
    "2SC8k9ZdRABwCWodHdXKVBsXi2ohBJWKo61K1WBh1orNrdeAKThzzc3w1B4bhH5Pd4jCQ5tM3V1A482SNRbcEr5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZMs2jgwznGxjMwXfjirr3BUiaLKSj2xJEEnKNYrJT2qkgMh1QwiqDxMfqgMrZxYULvZ5b6deFhwjTwtRB55LNKq",
  "key1": "5BPT7CbEjyrFUX9vTG3HD14Wsmm3A1aQsP6PoW3o5PswCXGU2wFaDjyU4QZ6PBNGei2haxEMeqMnHR3bE1qmFk2f",
  "key2": "5aEXMY1S2kjmX1ML46f3kaWDSjMRp73E1KzueQ5tUdSan4yu1tyNASGoRfpgfz3mVKxET5FCHP6w9787rwS9eQaU",
  "key3": "W6wfqe3gTY8UxoBiT2H96WZ5cc8LqPazmAyhzbPMF2N6f87bcvGhBY3croNzcwcwvC9ubPRL2PadijFDvRUEVYb",
  "key4": "2LQAqYK1sLcYdSxECgkfUa1JJetWw3jD8fGD1Q17qURqxFTzZGkQVcueR7eeLJC6VfknX83me4w7YXDFFJQ9ijeR",
  "key5": "5HPAogFV44bs4ejm4wHwMoYXpQmxfzgmA6L9qhgPwe1VDueK9pR9BvnrYcfTeAj2qTQwR9WnK6GRPdBWA476tQC7",
  "key6": "2AaHVP3x4cw5MXhkRsiYgzsHirV8Fps3Qhjj1N8ZYAB6mmVENPGbTfsYbcGqwcCtwPPGQkyFuAdNzXyVTTPKYgyt",
  "key7": "2Poz72SzSBav2CXemcdrf1f1CQNBMhjwwrCHSsHfk7EftEPep9DiAxx1BqYsDaFNwu1B8hm7uHgdAjSHcKAwVnsR",
  "key8": "34ARRPcAaxWbYXdpi4aZGvXqJtJx2DUui1S1ep56Tjmr9khjYxYwHgkV68KjTeWgchbPw3kJjaFaVxUB4QvmnwLm",
  "key9": "54Rx4DQ7xoEb2kMW17gpFHtVmdiq2u2cHGCrGxUJykDVK17f4f7MegZi22W6NzgMZ3Z8cqDaaWK3VCXSoAdgH6Ry",
  "key10": "3ZkShMdcnEH2ruAcZgqYh1zSBeKwzyHHms4SnPaxAmtFR5abceC76vevFAARofoVNB1S5mEWU9x1dn7oN321wmqS",
  "key11": "4ELBG9r37ynjgusdF3JC8f4shmDMJBitp7631RvzSiZZ6BmBKpN1M48LGRKTAksC4y7iUzSzq9qQ4CAWsAu7kADe",
  "key12": "XxvTceDXXdyBZJQcMXwZdxpyP9p3QvA6UtJF3ThojvXgYUXzgGr4fEirsr7iGkSqShp7G2xmhFxX3WrZkYwZUXV",
  "key13": "3M4FADgn5imhnAnHsnoBeQSLHPqVnWnFSvKSDgTxNgKBAmDtXVycaS43NVhWz2C2TswohZBsjSbT9D4gFr3aooF6",
  "key14": "BzQow25czA3EX9NQ8b5c4BQZkp3VPFtzqD5NdceXWQ9XcAXKH7hbDJLh3uEHrqcZkG6vqms354ENjcceS4gPbSP",
  "key15": "EXmdMDyJ2hRzc9mMwVBvXCo3SDo43KJHqtPwfJmVePrs5neSc3ui6aCqaDHDwh2cKxUvGtBZex8YAvBNsEpKpnM",
  "key16": "4K75VjMvvFKmuJMaeBZL8MPtKaRrq9q7wF3yvj4hQnJh6PJzPUadHNE1AQceomQDGgh4kYCTCu4y5M5EzaBZSehw",
  "key17": "28gMbFtkQY5J7LWBEVCr3Y3hR54VLk7GDM2aDkV9ix2rnrSmH3xS8rnZh3WSeD3vCHcxbWvrB76dTD6iK6TadUto",
  "key18": "3e8vjihU8mfa2CkLX1pmP7UN8WJwtK9nsjmnjWHezr4aiz1MRinwR7ynReuasSYCvgWYFQxp6SEfEn7h4sMj7jif",
  "key19": "5sJ9domCTxHkTZUXteti4yBfsQXNxmKHo4YPMiszgZc9NAH4pT7Crm5981jTuXd7kg5dH5ReAEPK4Cg71xhFSreV",
  "key20": "4ddQXvnEwRjfvfAuA5asK6Ysnm7rUkhZrJ5MB8qpFvj8HKpU4Eptbh7QMuRBUwefJjfmSBosYaejA8Wa47s4Waoe",
  "key21": "4bDr27Q4PDg1KFbJKA1VT2ho3EsB7DAvrm1DPpp32dumciZvnZnK23caZ1WDRM1iuoJHf4Hx29wk9aFofuFyhuVs",
  "key22": "3Ao8TyNVbW48an56TuhGAcQjsDa6UXA9DNb2JuYL76q3mVmNQtAb1YMM91QAd9CidAKPmEFuZyt6Bg4XCNrbYckw",
  "key23": "2i4F6qPRXNLKKH5RUvxxMUBrP9fVTALPxTY8ZvuNU7NMkqQSyiPJr9G15fms6Vqn4ytMocSbxi3DskZR4d7jTWVv",
  "key24": "5aK5akH8ahcx8MQxQQ63hR22xaaKSVoQbjk46vLenTbZiEdXB2Ao17TS4ebv4dbe3ucvNpwRGQLF1BDBavtbCoV7",
  "key25": "4J8aJa97Ph7yx2QyphGaSZkTNcpNz5NeJSvoUaPe3h67CiWRYZQ52AbZvDWiuPxgFMcMxSWiTWFq9TEtg3aG2ekv",
  "key26": "5FyK1TL4LczoBERdR4pcgy2723oBSSDrxMrZAbDK4FoCeqS5Y8wFMgnSKhVGsEA3JyZmYtbAFaPfk8vwTUp1qeLX",
  "key27": "61H45Ry9rLZZM84yafcmUkJqJwaqkDuVpJNw1WKoKPJnvMnHTEXi85P6NwA3MsjbefJQeXbgaCYLnnf7sFhyKda1",
  "key28": "kRw6iEx4nw3cM1AcYpfkZ6RcApPcKsJPckHgiTFQN5RUdzrBtJ6v4A2jMfPTbxpbc7E8RAxAqF4hWP326qQdCu7",
  "key29": "5DyWtQuVxhFz721qbpbKMsnjpBxK8CpxkwHigHbt4yVDst9Zru5YCAW4AEqay7VqFomAhLk6Hxreib3o2ExUMrMV",
  "key30": "3NopriXBjqXTV9Vk2Tg1GBnoHbMMQx4FMgCDdkmCL5bgpycckQaS9afDKzehrQ4sk9n7Tgk1A2nY4DrPTwJhCUvc"
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
