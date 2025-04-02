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
    "2UUtoNtWo8ot1e54xeMtQya38JWMSHsnBj7DDJYjMPiboZz4iGEYXBjsfFv8YhU9hwpz4GDx3ZzFhhkSWsRoJSnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BRwkgwpCcLvQRjXkMzJLAriGFrwQwa4a7ApUZsXCTV71WoKv2hMBnDFteQo4pcU8GMRHNjKqW2UdP9ofCzvuZaz",
  "key1": "35zhr6nFjcX8uiw2yLw5wZjHAGr1B1FCePZQ3i3nsQTfxDLuF9Fr1eHS5s9yQ6Hdj3FL5CW2XaBSo1TeRiqz7qsu",
  "key2": "AdpPeqSWH782Q8fQAWE62FTXCRLe52anVUThMpyL4tkjLZNNegW1QgDiTApy8SVjqpWgqDb6mzqJVYJNWiM9sVN",
  "key3": "sjS5aUqx3XhaWMPYe2Lzeg6atMU4EazuNVTSk33k9jUftmV4ULr8i6MaUmR3ksQwA1VUkbFuZQTrsRQitjM6Wxp",
  "key4": "2fGaLqpYAacqkbHWfuyhtAu3atY5Zf5dRM6LAckw5SVtLiPcPcf4tvezZNoaEcsacXB3i16XqP9MBjZi5i1N3RXh",
  "key5": "vLgUZiBUQHcrCJAhwJAPk4d4AvHL2nP8MPhergQz8cJuvMPEHaygFZWq5g8ALrhyjAQ4ePVEtr5R48p6zZzdha3",
  "key6": "2Woi8GtobgkdKQnbzH5Wywkp6VMth3YT1499NvXbNPQD4CdPqP9jTto9Ba9eu7t8wim81a1KfR5bo5E6jtCKsyvs",
  "key7": "4vfxmaeWYv61aEr77m6skEema53DY52GT39fPTu3Mf8SgijSL7Xi3YAB73DE4oqawZQ89De2wVdV6Myc5A3SApsP",
  "key8": "4x5vV6bKdVPazzVRnYuStKGCWWUG7ocRNxGQu813PTGzgk1UuL7yBEf6prShFZqE6KusrmaKYkTinCpiQ11XrGqK",
  "key9": "3qL2CDzfeo8e98mKGohB5BHcspaJMT7Rxr9MVF8kPfTP6Su27E71pD8uwVJzCSLdXwM23XMKhQ7wppUHCWdxTZKz",
  "key10": "4VBaLET1YQYqqLTyfRbhR8PKzYgnn2urDmr7KeS88wvzp26surQUB9WJzuh2utRV2WjDNJaXEa9Gr7Uffzag4zbo",
  "key11": "i7EQg2F1aumgM3h6cVfd1DshCS2za3WbgHUBt8Tas5Hbwwcph91NioNjm5FDXsk2HeoBd5zz8rzNqEzjQmoMZTU",
  "key12": "4dkvDRbi8ggDZCUrfqguSWE2u8HUhMFpS9jwgpeR76Q5sRfMBPaP6CNfLxS6uVweYRdTMFBSxoyfoSQ1s9r5NpAX",
  "key13": "3j3sJDs7Nev2sY6CTCMG9bQfa3moEzKBxwEZw45GHDMQBRQ1isXdmud2o1jxGFxdgWWX7BLAGEiqEGq4xGzxHJKu",
  "key14": "4bkhc85XbLk5gMxLhZ47rw8RLRVBhqkcQao2wScQDWBw7yPGnBbXzwSB8X8cdnVfq7S9FngFEC9utoz35NgcgNFn",
  "key15": "2wQHHD7d12FvnTerWPUsZiSy2tp4evcu48JGeGvwLbeqeptyWGwSsir5HmCgSVK9hjpNtskf1AdSSbL1RgGqFPN8",
  "key16": "3F1itFBHBqWEf3qw1SGodpgZpPFVc79VFrLWiaj26dDNakF2CasGyDErQoyw539v6tmsL65pZfMvmF3e5UbAdssN",
  "key17": "5HF8k95aBLEv3Z9mSaDZiSjp2TxhNuHdwdgyfSmCJopQNNbu8PnriGorytqXRqKwje9ibnkAEumBpwFqSUUb5sED",
  "key18": "4tZZLwLFhZiuT6KW2beZMgmUY8iMRhppqbm51BwRAkt1QRBsFx6nJmafMSMmswiWzudhvPm7J6AGoTdaCgcRu5uY",
  "key19": "qG9SEmrFY1ZzkFXNnbo7NzmTjEgrpNyFun4qihcsBzMSbXyPMmtHWtLJeYbAwGcpXazTACH5o8hFdvo9Kh4oxaQ",
  "key20": "65nbCFPHZ6ghAc7zd2cvmC6AnaDabAk3om1NsMzLzvEsr4UmLrHznyD5uf3CcvAFw6BUbXDZEr5nEsA3VrtgUa8s",
  "key21": "wWSS8GBMdXpdqJeyLimkWBBm61RMRwEr32cMq5zvmryAZgzazq9uWmbYdY3NXzkW3DGjamRv3VVifohhX3zx1wb",
  "key22": "28mix65MfPrjGR2fwu341vGqSXGkxjqPNjHHuBX7VABJqJvuon6m5u7q48EeK5Vg2vppQkHkzwGSXEkwjvgCpYHD",
  "key23": "5vgyJeHrNBvJoBkXLKg5deo7iyistYMYns5YXPWPBvkVgMUSDEpaaVjCcCLQPhamPkKppFfkE8fA9A2ELEyCjo2Y",
  "key24": "9kk6QLKqiFs9u6ZvmSQHZwvbNAdR9ELsA1kxSqEFkkHoFC4tnwLASVkAjdnyoycZUrQKu5tpQ1HukA3iUDyWPPr"
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
