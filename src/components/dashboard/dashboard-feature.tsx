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
    "63ZKoYfEvCjwr5W24LSGKPqXwu1QEL6LaVUFZNHAJcXrKvjTtjdSoF4B1r5rm9pAwom2QBWuzgV7rUfezR6CoWhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1uR9cn6aZ1fXbJyNtf6uhWot1eKCb6djohWxVzyk2wMyAGmJx4zTRpoYZ4GLHuFa6tiFqUU2vjnf3D1Kjii1xnt",
  "key1": "5pT7Wsux3UNhs5VFTGMRX2TSh58XTjHUMUDLAMUoocK1m5hSv7DF6KbPAanC3XcmmnxYmTuz9f3f1ERafkLccQtd",
  "key2": "5de3VRxLXW14YJHrSj4EdowFJPxsv6gMfU4LS63sNU3rjS58FTCyNxVDFY9b8zk37q7srQ79wnr4xooLR6GM2wBU",
  "key3": "37zT8KoQFRtqgqPUMByH5177KhmkHHCx4cHXiN35o8pcTQWzc9ydHfG2WBs2i3KDoA4rLWfEpsgtVmouqqEA1sp8",
  "key4": "4Gy8rNYikv3jRJnk6ys5kqKPkbVXchKijJnwNBn9HcMgJQX7M7PMZRcPA8iCGy6kGNGt5NnFtvmzVPLFQ9m3Mhos",
  "key5": "431svYXZeM9b3PeAywz6Wc5CXx8DDqwjv49gZMJXt9Cjc6upgf6WwpQUA5jh4oi4Tjed8ni3XdvccnKbdQajZivn",
  "key6": "5EeS3SwQx5oS9fxTHGnPAQmycr4JEv4yRyg5SpRafdZxU9LqCCyo7aKW6mRMVSkaJHSC3fwb5nByVwjDcscnJgsQ",
  "key7": "4WL47W7JZQrWE8L9z36y82kwQy2fpQX5pdVypdhW1gFE9EGHYsACUDGwFS5nwGAqx1ZrHvEyVzP6kJxj64YEL7Ax",
  "key8": "2Eu1DJbaDion2RWdDDKvXHzWYDHzQB4WnozfipDxm3HZaDsRD9WjSHZyCBvkRvR6fQpvieEfLLaicHCXmYQmFPRk",
  "key9": "4qYopcBji3N8V8JWYLZVrijQnoZbXuwFzmVhLiW9318A6KdNkNg6wV2FYEMEnbfw4pcmYit8moX139ihRXoeHVMY",
  "key10": "f3b9uLxarNV3vPxb1fandBzPv6MzDwTADQnznCKanX8kyWZV6mrfaxkRN2vVVNJGta7JhMJtbSyAAChTMHeAC9F",
  "key11": "4kH5kfsjHtWpucckHVEh3tWzsJWUGU2bxn291wp6ZWvs2pCsfbAJap11bQvjB3uTQS13yF7tqgNA4dMSUuXfu9Mu",
  "key12": "3RLg7CowWft7TcB68SusHt58dCWRrQqHsZpagBEqHxcAdjteEMRfjrLSart2Z1z5uKgiJ3q3fXNXoHRFddy5bYrA",
  "key13": "5dVMSS3peggVQTqtzkw4d9ioh8PBQoD8qAU7VH2riDPBUHB3AgbPbZb7C3NJyo8t5QR9rML2NhfqqJ8dx1YNwvG9",
  "key14": "37aLdc6fPyLLYrC1WgPaatokHQjKvt2v42gv2Q4MsGPKR5yUL4y1aZPCTZMnGXUA1vAE9wawedJqeAEN4X1Z9qp7",
  "key15": "4faRFE2VDxaFgVt9XEfM47y99Xybi1vR9T1pF4adRnFue7YRnv295upo2GKF2r6kQCK4ZEn6xTAJTCjbpWxyWifX",
  "key16": "3xzScSNr2Uga9gAQekn9a5shAeQnLxjSHLgZZ6AnAM8gDwk3ehSNy9bp1gHqq9CxNj7yASiPoPXfSk6BNxC3Pkpp",
  "key17": "4WcYFqtgkqjkw42dJEwMW7hvAr12R6rDB2YEYuViDdbz5KDPqDAqWnoG2fmuubnCLpdLNG5Bc8F7b8gcUHiePsb5",
  "key18": "4Wzy47USYUvxuQs7349uaJ1axfk3QE9ksBHJUVrmsikXV2KNNabZvXG8tCnNSbiyhYXYbZL4o8zUGX7pGE971YzU",
  "key19": "3s6zUMWNGLwm4PUMxsHTju17VBA1qcvTmgtXqkBLSozZK6GwAYR9traeCLJBPi68hzmE5yNcXj3EjT7NF7v6KLJZ",
  "key20": "faNHLx7AzkygVJB6zDawkaPAMZPZdxi6m9mJvW2QvdwUdrT8PFPciYVGxqXEfDrS4tHR3gnrcBGAmhQyYxZuJ71",
  "key21": "4fTzMvovhFvQ5QSG2AA3gBnEgkZK4ofbsb5oh4idFfgQDn1f7zrx1Y1bJMTVhj74uNaRDTtDzzzEK2fZJRon9x7b",
  "key22": "2RZH2fo9QfvJ8ZT4yncpggwvcmGXffTPTjVkY4YjfsXVJoRBmn5ZXzir7V3vVDW8Adr4uJApFtEMB3WtyvNFHxNS",
  "key23": "8JQaBGCYW76PKDqJo2ULVays1QboDcRaT5BTAPoW2VtEzSfkE4KXDsw9SUoZPfQ7aC82ELA8rizyHP1pC1X5w9U",
  "key24": "4kx6y2941FgXjVVp1N4c6fbsMhTYEqfxHgpzZmVBkjDGR7EHgB5FBJnfXfF8Vrf4V8ALPaHRZCgARYghN5tZa3eg",
  "key25": "3jsnQNQ8xUhAym1TFokDNg2q9my5JQeyYq2b3EaPd9FNBJFVAkgbMEsai8ooRsSws1VR8KD7jmiG4GjwA9onRMx1",
  "key26": "5QC88d5CuKyg1zAHvexiWsGDL9vqq5JXoi7EDAVMbtZkw2LGbtiKRyGcnhQEDhXZPc4495WQ3rixbrkJhW7Cscgk",
  "key27": "3Z4xdxd2b7sHTfSp2trzsEmBSvUp2DiEL1aBrvdMv14cstY5xFnfxE8ziZRukxxDduudu4BYgeQr2QwUWBxTzGey",
  "key28": "4u74KcieKCsCJa3MCtJeQXsENmb1QdFzZCYNdXqC2AyD6ouGtdcchCn8J3NqJ1VHGirDvyrmkVHWf7MNuGHU4oYP",
  "key29": "NJa47rt1hBRGLfNWLT3tK4tFHP2d5Thn4Ay7E24kGYzCsfnucnXxK8nRcTCZWG9xgJQ7b37tcMZW1cvV9wVVu8h",
  "key30": "65jFgH6UPFcpAwdukokYRzVJtCzBoGkFgvZ559UE6DSNxzmxA8aRZYneK2xotLGu4G4NScsrqRaeJydmYbgd29gL",
  "key31": "2bXPPgH1NViYVbrS1GRUDvQtFtrNKgT1uLgnkzpsbhtMLDKM6ofjuXHHe9W8K2j1BtdytZgJQz6cJ73D3eu9XhMn",
  "key32": "4m5pM41FNgeCVTzwuj2ZQ9fX6J4pUg4G4kMj4t3Pog4vH74ryrXNYY72suHyMZDSWpYBgtWrs52e3VcmWSUkCETG",
  "key33": "2KoLsijgSo9M924rbRtqNAaLSbJjQNMvfe5vB37n9t9ftB9dR2FT3bMDPhMDqFghfXwcT8VJYBRf1AWgVrdj9Cm2",
  "key34": "4SESe5ntQpw4HqCMobx2t1UG9AozTEnJDLsmewGM3a2wpv6Fvu4oNjtWw48uEHbnmFkq3eZ5wwPiv9Z8cceacTuX",
  "key35": "57FwhkPVaC9cpc97EgtTsXSZzEx98iNTP44ZKFdG8kCq3fdba3NRZu772w9RyPDMBssTeaWMnAxKyzemmUSdjhs5",
  "key36": "3vz276umsmHx1SvK6TPRuaVBa8QgELYw3s5GxKGp9msLVcYs3Bamdbyfw2Dp5Q3UzdLtTxQY7rvgkNNkKvx9BoD6",
  "key37": "6eCbDHdTWwsYs4HuZBNT4MaNyz9KjcZHQKmTuV3mECHAgZAR1C7eb32UyTvcFJqGRim6n3mhGsmuHr5gtnuP1FR",
  "key38": "Y51J1m1pJHMatfiucPtKDvdpBBbNeY5yMc1RTx1VyrusCnGANMcK3iSDKgy32dZRRm9d5FK1rKpdR9FD3uMDzeU",
  "key39": "eCPbWMe3W9TTqR98s9iBZdureMn3n6gaYaT15CFGsqvznsXtTzHchKtUahcsm8b7P26qAWw7jH82mW94xGx7H2n",
  "key40": "5sVYuSy9LfoKPsPk2yEwBwRGfp9pb72BSjddqE56JhT3i5fHVL4u6rKoE9jzd3dmQjUDUVbMo8PZtzgFYi4FfBwM",
  "key41": "44bM5B2mshtLYHzpjBVkWb5piu8RmEmTeB5QDqrXfFWcUg9KwTD72TyoTYeWRsuneu2yjwyMr8PRdb4icxBUjufx",
  "key42": "51mqZNxHTU2cHszB4wWiUPhrAeVScv9s2mpUHXKitNWhSLLhhMkU52Vd8P6UHJ8bPBiJFUApLxNdtgduCkU7peV4",
  "key43": "2vDtztrVLuoZqPYUBDAgtdZecSLYXJPXnHbQzYLNeAhNH1jyh9WqWaDZnGgLfGLanec2DDGSYn6mTotagn6qNEM9"
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
