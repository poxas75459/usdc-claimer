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
    "5ZaSq6py2yXXCi8RN5JrW4AiSFGmU2MS166HXnj99BVUzhqtQnSVUhKyjA21XaXRFUov2ZMmAbBpyNs1B6o6EWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LmrBytKhSmaL9HU7Y2aEaJtmWhV8SGULgtsXVWrqSeBqSNxbx3g255W9KJxpxmPWKvgTTvvyVp13KFqauZ2S7Tn",
  "key1": "24YYHWVzU28DLQpznJGk7VXHUWM4PfWHfXBg57fCcwwHQjTp6JBFsddq4h2dSF8jD1TSnZikCfjgQ4VB7VEY4B3R",
  "key2": "3TK3A6AXYXznLXmEDQdV4R9atCjPcooHKVAkiQooGaneZ6rHBMgnvBZVnSWBg5ji2AMKjnBbusAoSd1AEUrGtjxR",
  "key3": "54qSDTAYgq5ZFY58NoFdnzRsv9FAEPjdPq2ZwhsTzuUC18P7urHonz78qAFannnepBrP9Kh6jjzayT7bRX5ip5Hu",
  "key4": "4GYUxfXoTEqKoTc6UcMUaDGFKR5NRoi3nQyGujH2xumTr1QG21Z1BWtyKdBRxkf8opbqqRU8iGmktmXbFpzUXaa5",
  "key5": "5FpzriJiTPcvFrDyUCjKpVrv1puLoauRBYmN1BWdx7xMQcg8tDPaT9N6Qpo1zXNkrD63aCXyAz3mNp1BiDD4emBH",
  "key6": "VxTt5P23QjhY8SXuAsZ8EB6nWZo6hsJkDQeMUqKqvHT2oHRugVMmF2Tvphx8ubzVw9WbeRDk5EPDLdDdPB2adUA",
  "key7": "2rpRo3j1ozeDZvEHUdErZMn5rZGwjSUqsE4GzPaaRNbu8pFgC7fgFFucQg2gxDsUVBjHCdpknVm2ustiMLUqbRp5",
  "key8": "3sirjoo8C5BPCzTTKAwZc3KZuYvaVqwNjpesnadaAuFZdjBf1d21CPWUDLMsjFvnwAKWm8bzWzeJSJ8NEWoh6R1Z",
  "key9": "4Q6pvmP5bG2stCjeYVirtNiJPDSnSKenACjBS41Kx9v1PpA54PhEsY52ZizjH9uQCFDgQ8FZrTRLRqqfz62RsegD",
  "key10": "4B2s1rCE4hZXPzExvrP3gJ9qkbye92zmFLoQAP1kfMBhqkTvGD7QQwzd9RtgceM4T69XYQkUNywcaUsgnqMB7U7G",
  "key11": "5pn2NdMrrco76zgqFybQdrbAJGjF2RK3PkZKbKRgZiSRYw5Nd588fumFYWhnTKrXNSnpejvVm5ZsG7uc5DWLbmVY",
  "key12": "5AmSNjrbdLUhkQgsWPNzievLU1Uk6SLrzyyQTFpHAvgwCkcpv3HFkkXKAVErHQFrD1h1i7zdjA4vKuwN4T8rweQ1",
  "key13": "3za5AXeeLJb63RFXBmknDGX4iNnXKWWS29PhprCFv1Ygy1Pnf7VGmSDmPkv3CqM8zrLBBiVuS1ps4ecxKnnkkjjJ",
  "key14": "RUGATtvdiyn6XE1S6FridbbXZ26MiUyvFBhq7PtdFGYPCuZpiXXMyA7hkLLSpCcx48vqszbttABzLswFbFj6LfT",
  "key15": "5hkF4veJvjniJg9nVRpervZQubUj2oGwRHAEsea2HCYXPbrHqoLJfW9fLzZYLAKWaZdwMqFQeiNY2m3vWmVkbf4s",
  "key16": "52cPbTPhy7kVg1aymjC4aZ67ihp7jN3yyT8uQHexsFazTa7DYCdUhKA6dHqyRU6eLVCp6pAHCq65U6BeCP2YbUES",
  "key17": "3wVBgxqUzomf7N39Peffymx5kmsdBD9dV1v8VEDWs9zF9Frvkyi8qvLT6BwjGivXgp9hQGUWNwHeJaN2bstDkbRe",
  "key18": "vekiVsd6bdkiTgKGvdoJiKzkFd65MxYxrB18QRYodDprFGiqY4Rro1Zu1mcGfpVrwj1SHJRRdTDvzNADPDZ7J2Y",
  "key19": "Zuz8d71ep46HHVyNmgdGWerFaA8gfmzL2LVTavR5Rd36Ey5PzWiihYt9zNJN29aTeQdb2n4yTCdATryBQkYFt9j",
  "key20": "3YoYSwVXHhJWVRmcxqzRYn9A2ZVD2724nyraS3hRUKygx6MQ5ZDjr3Shs3eZE7b9vgojgshuNKMAfZf3ciAf1jdg",
  "key21": "2FgiXCeekxn8Yu47dMRAq3zC44W69wP7rCHrxbNdxDTXEP9J7EqEh2wnZEPL824vyxjNYnRDAL8BdpA4o33yvAHx",
  "key22": "3sheEL4yxXSo7LAvy7kQdeTxN3gjuKfDhiLaxTJ55iHBWcY9ReMBu42vGRcM9uZrbdxUVkiARXE9heCHXtZD3Td4",
  "key23": "4tDdVPSA9vKR2R4QtVcephPyhZXeQus4KPmf3jG2TXYXtTZohbnmmG4zoYHS1CbrHaqTuJYUBaMLD2dkiCZKse9t",
  "key24": "uaF3jvYDRGUCN42ShBeuEdS8mmydcxbcz6hNCNxuved3tWhx6k1QR5CCLZtY5ndgGMZQeJzd6xhVChm1ujY3Bk4",
  "key25": "3q4bJAeak18HA6kRPEYLiJC2QKySLmNWgPiPRZWkUGaA4DTpXCyzHkzzxCYuLXtMweZuLEsXCHRzwCpoxXznmJju",
  "key26": "3Atoa3hdGABqkvLaPGb6E5QXEJrpZWcKjeBaCssDKMXPhwrFxhfryDkY2vSvmuvjPErB1N1ixfNkdC1n2KEVXLzD",
  "key27": "5wExNKFjsFD9KMpjjhw8dn3fW6nur9ViRaTCMHmsMy3tLh2QsiXEpYWfTinCvA43yquiPVR6trdemHdicsCZ96HF",
  "key28": "3kYyTEBEjgZ5j3ea8GzbRR8Cus3iF32dQRcT9pAni4soHzT26TJghgogJojFcr9dSCGH9NrHQw7RZqb4jxAG5gv3",
  "key29": "2z2Hfftf2RbTRFdkY7AtEn9JKb5HvciMowpaA8KZn6SWUm1zfAg693oSEj7osaw11JRC2iaDRVVnmgv1Vij5gPxU",
  "key30": "2UdGFMCRS99nQ29QvNg6k6AY5fxmED6tUKS4EAC6A12nyCUeAaLrxMY36dGivY76wmtRyVcq9enCpKDVZ6FXmFE5",
  "key31": "bssXcqyVrsK1MoQnQfYZNBMjLDH4vEjwVjWW36oDyVeRfkoGAaoZRwr4AvYhKpUgzuMb5EsgGy2dBX9A8piFsCJ",
  "key32": "2Yv9rieF7brSLgc27ki5SzgnPa7uyFaL9zzmeLZpsAD6PMobGeUNnChN8xbsCB2F632LPzhJCKDrS3TddUXqS1vf",
  "key33": "5X9V5tRrm3zQGPSnUAK1BdkUKXVMWRVa2W8mqW3jWy2dyPZpgyuKoTA3W2QsP5QMces7tr1PsKpJvJKAXBXYZdD3",
  "key34": "7CtyyPnRjyZ7Nty1duqAoKChUozGfZo7tcJtPgPkW6oQUzbaiF61urRoEhATGGUefQCVqHcjHMfCxz5McPNZjBx",
  "key35": "33E4GegvWs1moRTD4WhrkwecV7TdN8e6zsQ3UvUG1STVBW5gjWJvgjQQs6wPBEiyU53Jmf1Ue94vJGXP2vxTXpcB",
  "key36": "3A15bvqC7AwXfSHYqVamrTP6oiS1dtHB8NUNDZsqR34tmFNVwqqgpotWKfM6i27W9hqJ4yJHxPUCYGrnfugDSjW5",
  "key37": "2VCqaV61SezFMdmzn5DgSC1WismNh8Vrj8kAYcRM7sMR2BuiWwfEynG64ZuthqjUkf7qpMBuGDeFZLmvNfv8cjmb",
  "key38": "DDfifzZ2oVmDSbASutvb8udCy4KgfVkm2zWeBpAgPjeUH4y2Q3g67UsKeXiszPJGqzHWYggp9qJxtLwc5iqNpdt",
  "key39": "3CgsGxqckrFhcHLchKVqPEzvpqkwtDTC4AzhF5XjRPCBs1scSCWwLK2FtHWfutMcvzAsysQbVsXnPTtJxn5v74H8",
  "key40": "5HLfNVtCYoPPJc99YrWLSbb8K8d2zt6R5jxbfqkbMcbEvXB89LM45vK7JkEia3FRjE48HuW4548EzLL9DVxiR7GL",
  "key41": "3H5wkz6ShAMNXDUd7ND73EhFLM87uKe938yhbQpyLAigAfD7XkL4WSoYircEWqYN8X6Nqu1uETDkVCHa5XbP9RBj",
  "key42": "3mAmuR1dSmKC5K3c2ktTHzGYXDD2dZFNjHTiVeNqUFYRyowVmRt3TtB2qn1UtEJeTHVVfxm7fiSHdVpyEN8DfFix",
  "key43": "27MLmukUk5RSTrsuAZ57yf8gAvvZ9fpcURcKhAEqxwu64vhm5ADXJdYVybtQFjK4gVLGVqHxu4QA2hGyLCcuQ3et"
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
