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
    "5ap6FvNJgLDsB2dmTfNDcWtJyAaKXdBqpvgjTFH2PFjZJYkepx1Smc9cBfVwKM68pdM2Q1zVrsFuze2dMTvWCELV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D9kXMWnsUfetSE3ARdsRge9pwDQfwUJYXSAciN3nk5CcJS1LJKX2gWKhfATW1RdC9Z2eNQFctJbDTbDDdt2sYGy",
  "key1": "2DbFB63YnXFyv7hSyjyEPwEkaB3XcJsPTPdJoJwY8MqxymF26rwPw6qjKWZZdwJXhi2pmcRnhNHK3zaZBPKHHAKG",
  "key2": "2Hh9VjviiD4BZM8we7ABzf8KQrTDYYg9vQkqGGbbhdEZydWYrEVwWMBMHNwRwGYLuZ3cnboWzSef69eGvvpeM6xz",
  "key3": "4ThKky6C892rg7LsxJsK5PkkCyQL6djYekJVzqMBhE5S3LoUF6THXSKsoBa7vLdaAyMLgCtMXqmrLAybNKcUHv7D",
  "key4": "2ghUsan1nqk7YG6tPi8L8tyJ3qme9pHghVg9EaL1NnhmhE1vMJLVGpBvSsjTDozTiwVP97gDF4fKZQJ3ySvPhDWc",
  "key5": "4KcrKzjTsuN6PQhZ3fAQeMj6rKW2p9QW4x8zfRLF8VrmT1WxN38A2drJtCjvMjxkxpWGGKpokBqqKEo37fkpdxGK",
  "key6": "4YBtXS7sU99SCnnATFDmBKz7w9kRtRtMwvrVrmCzouske8HFrDm483W3EdiJ7TSgNLniZ2itV3R1ZksQJXNMYC32",
  "key7": "2dH69EB5sTkQ8eHT5e4bdGzniN92BaAN8Bjk78oqaUCQ52ReG2T33kwWtALebX9TErhcRBrocLfUsiG8n92KrfLf",
  "key8": "2XwMueBTkAQbegsVdxKVTiscXmDvcEzpr8LHAUZA69oTb5vsapXoD95EwQ2Ekxtrt4N86cmnXnhuBBu8HkYPwpA6",
  "key9": "5U7m7mv8r2cdARtazXp2z7SfKN3rdnTmYSSWN3k9aajCCPX2ZDiuBVtY4dLa6Gvr1eQX2Vy71B7xuMoBMnfphLw4",
  "key10": "3unxmv1epAHwoWMpoGxNp3udwoddeoP5ogfZAL5ZjRo1aAn3EcREMm4D3Xrn4wYgTJcbCkMns37DYuYkkGstgdGo",
  "key11": "2gBNkWiQGYcW6gyomc1Lfbkj7BKuyRaPKnJXkJGi1wmoKbEWszJ9AQGN6WGf1kxZJxu7hF6s91C7QN2PP85B62RM",
  "key12": "3Z7pNQDq3fHF2ySzHqwuAJhavAp57zeApXQGQafLZbqa5ynepCEDE51XhGdabsN9cjMfgqDzdMGPJxahtreWT2WE",
  "key13": "42wjNUb2QX45mv3YS7xtDXHp5tvsxkvixHzQWrXo8cWLJQGVBVy6J1wktc6EgcrfXLjYtinn26PYvrasT2dUNzxt",
  "key14": "2oP2vNE6uaZvBgPi9doxid9er2WU6KfFyBPnqoy52JzDHqfaSkqfsumTFZCqJwszowinRck4PWoYesRUMSUofwtw",
  "key15": "313iWZKbktaemE4idkPKywJWaSq6pC6mJNaQkNHJFj3cm8k9K7WsWCVyfPUQQTUBDT4vgAFckCPR5YMRB2SimLvA",
  "key16": "2CTuscUvnNFuJgE7brCWJhdgCHE65A1hiGfpjwQXmLUbYpknYBQc5EeTGQjSfPunnF7pbatQ3hp3KKRJpo7nj1MD",
  "key17": "4LHHDrhLY5MSCxB9LB3u4Viczqhpg8VfysLGqF1gJF6MnSisqcF4wBNY7QmtpA9KaM421iZ7XpTkhfmZLTEPBoqS",
  "key18": "2QdyPpFkN9kmxXscdYNXpZo1VGLePSZmfgoGzgfBkdJ1cvD34FGVgUKBzfEfKvq8soX2NTbLigFkrC62Dmpqgh8B",
  "key19": "4tJZWBK6dZMNH74PLU2LovNgTWrtMQPpVxx2bK9m5NEq7dDMmUmSmLwHFDQRWBDtbFkgFtGpdzEiCDh8KGYY5Qas",
  "key20": "4oVDw2zC9igkLrveA6ojr58dvguZEvzZ3jDn8KGGRMj4FqbZ837rsTX6rbQ1RamDPGd1jeYaKcVzVcnMuyoSQuSQ",
  "key21": "2Ghst4cR6HLd7i8uBjdzaByKAYNmU3RFJx1eXadtkGaU8mimfgaS2iPLbYFcEHjrSMt8XSEaC85LjYt2qjdkZxHw",
  "key22": "3PhbrgRq8WnJzZTLFqR7PRt2FTDcWS6PTsWNyGEhJjC4NNLRG7fm294VsEpYpbzddEojE2FukGKPUbL8mWNqtP8c",
  "key23": "5ComtC2NU6fWCkumUzpV2HcQVRfGsUTu1x8FKBPXu1f9iahcnudevkN5Wfy9mX4FW7ah6DuijTSR32zwDedMwSkw",
  "key24": "7j72CCYtqwk1gZhrnVL9THWoqdJTRiVLGVK8MZ6THeTyBPXS8QmuiDaRQ47w5wSMKPGK83TJE5xxr8ah4zT8K6u",
  "key25": "5Uw7Z9m8zR8jDjv8ppmU4Dqikq9j37PPrE61Z7Ea62sszYGbwm2gKvo82ncRm8AiPDLCSed5hFw2CxfzJYkpNnJ4",
  "key26": "5RKPnBjZGEhiB3nShYj6JFbQq5PpvpBiy72WeagCbs7chag4YQzcMsRsBK94LpaPmddkg6LmjKCugXVKXDHDCfm8"
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
