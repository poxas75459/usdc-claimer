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
    "4MXEwYXqMa5WKGj9PJexeA9g2rwLqDP9avSXVWhVtDPdek1kMnEy2mKbw59KMdyQdS5CRQP2Ai4F4djxp9wqULEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RipUzkKfui7twBh8uVs3Prytr2ERj9PuNghWH1MBp8oKeE3LLBfXiingLpXZb8aEQCE6HycZ1HmHXReDozx6zz6",
  "key1": "V8uyfFEVHoy8HkQ8tk6diJAwYwQypdxBvXLszY8pinWLEX6UkDcaa8p6YEqYkR4WadYwv1nvCjZw6J5CE2Yivnq",
  "key2": "MFs5oU9wmqMFD4wRLBkTUUocrxTWvewYos8viGnQm19LTCGjMXm6kGkMXsNcfpfzR1Pet19EMeqH63ifzaoHsns",
  "key3": "56SsZqz724Db5RWPtuPGscmEZT9RhpAQF7Z9U2TrvKwwAFU4PBLhQDVZKyjbYW1nSNeoyuDajzgkr7vqUVXoATCd",
  "key4": "2ECPsaUwtayK5RVE4R7ejqYj6LwsUaQbUBrhPNUZGQbE3xxTQD7XrELXe5xqyCgvYkYHr6BCgRPNRXDcpY33Po3b",
  "key5": "3oKWXrr9ctZBsCzjaDuYjEXThbTFKgNskuQfgjyq5moRqcdPWGMoa9wrKDSfiWSKcr6YhCeADxETPffJZJ5BVixr",
  "key6": "5MBz8grLBSmFhE11dAzxyrUBnnwPpNmXQRKsfhDjGTexxbkUAyoSsPQeRsF1gxfHk6FSpwZ8aDrZ93V21uaPZhyb",
  "key7": "4mdshZhYwsxSvXFbq8rVMLpy3447KuvdU6SsRvoX9VZdH5iSeaMtEGvty3aQALhrfYTAsfdPjZYaMBHtBphn6mbV",
  "key8": "3y7VD9FZMSeqMJXAGnntzWNPTKGcnGrSDNhUgSD2YXvfUwYLnA7mwPTzqap3ug2gbegWGUyVYGWPLzRKS9xJmLAu",
  "key9": "FHKKaQesTFxGHMyjr6Z7XZVpnQEPoa6aYrw168VUkiPDFarEPUTCzAZc1ThD69eUSdQcdLtqafSdxpoD4FnZSiC",
  "key10": "2raLVbFnMtp8EqauG2CiMSzWWNqSdoSNMY7EVppFw65vmsp2bDtRcs27vN573ueTyzF8SqBMJ8pbCSEfWPi6W173",
  "key11": "25JhENc7tWa2kZ87DD87LzKc7w6GUASvEZLaM2Yz2mAQaBjWrgbtJToFoWgsrXg3yESHxbXNGdQdL5sAvsq2vVAL",
  "key12": "2PfDehewHpaUrAy7gWZE7EGTUnbnjTCUBiwPxVGiZvWQGkuNdXg3Br73kHUodS164UXbbq4hemaoXxpAb3LmVzRK",
  "key13": "2RmeombZ4dRQDeboFUSdkZRZ87k682Q5YrPVmPf8CQuDqgtDunoEPu4RnPtCBspQm6M1Y6e2MF2xm2QtuWLP4ANX",
  "key14": "5ZxvPAJ3LTdZFjqqD4ax1nKcExV3J3oK3B2MBuM6Y7CbzDHrmH8GPhDHav7vufx9KcheTm1TunYtGGzuPcpm2mWe",
  "key15": "LBtk2vjHug4RhxWa7cJPCQreZ8XuHReoSea66ZnDAQxai7WGhX5yD8oPzxc6CTVtsjAc3cALywmad6qvJruaFtf",
  "key16": "277QfKJsrhGCY4QSTUAxdFTkgyRnQCNLtm7DaDcxjb7gXQLbL1Rnosk6RdHgYHshS2WYgAWEU14uWwHTSnyrXfwH",
  "key17": "5Z95YmH6VULEAYr6TA5ADVeTFz4FyGoAiC6Lm7jRMzxAyindfKjj4mZ8qZu1YwEvwLvS1zfgamQBEGaf8cj2gxuX",
  "key18": "5fRjo1U3qR7k4xT8vwMFjpr8FDUynD5equc1msSYGX7DvhPBM4wtL9ZTXaxZd4nhCoubSyFNJGUJPDgtGXufPPBr",
  "key19": "MXvDchVn3n7sATKgrtCm9frfi3uGxafcFSff42qFEuDT4Edp9EDA5V82zZcUwqRae2hFtJ1rYgAzXtR375NdvqB",
  "key20": "MeQqGBy8QcnLFMNusg6kVaDcvv2zXc1jAztx6jSwwXLxaHLzorLvLRsrmP6PmQrmCSj459RU5tBCjGygPwf2iVd",
  "key21": "5iTmbm6bNo5goR6ViGdY4e6KAtktGnnJ7vsG4E9Wazaib89z49ctMY82K4vEkQsByB7bANzod7UGV8i1uKPnpNNx",
  "key22": "3wwtiLfva3MyTLWmKF4r1jG6ZfwJ3CPt8kdmULQJ1fSTUbub2yYAa8whAepYAu4mZKcYjHmaF4MmyxttdfjxfLje",
  "key23": "2LqeKnXMZrkrU4AeGpRm27JP4nzxh2zwwSaPfxS4v7pLyKj65zhsWPGGg3tr1KrFmsgsxmxc4NQ2dKwGYinEBBwe",
  "key24": "47b3oAeEA4m2MKeJXKqhC6qKLGtbKVgewt7aAbFeR97iFr45mEwndXmDNy7SuAeMkaq3hruijuYRHmq8NVZQcAx2",
  "key25": "2SFY7Yy8ComEhWVpK4Zv9XTd3zgzr2xvaxaCGvZi1GEC9JLyjwYfKuzV5qkqbfE4gPRNjEMaNEDGby435sWBwjd5",
  "key26": "45XiJ83mnzFickd871duj2oE6KWZKoWfMQhhL6QUwKdqk9Z4b8Her8PrduC55xHp1snN4zFGj95ba9b2uzyg2PAH",
  "key27": "59UiffQTqtjmZPEjQUNJEEjLs1N41NHwn9UUiqUU755orJjuaUEMTVW8hLDZWs3kQjskFyjrugPkuDQcLPt8ao3E",
  "key28": "48YZtu19M2PBerHBQ5kFwiPDT1RbCz9hZAUoyWyPoMVYoi5K5L3f72eBiWkqY1Rgrv8PmQ7ReZLJ3Jg3A2wPTbAw",
  "key29": "52qwUEgQC8AGx1ZeMuxfebpcwzyJxwjya68FHDThBnJzE3FNGuuskaQhfw1Nj6k8Fjwhn59YEC1QaCXM7t3EGkHa",
  "key30": "5p2t4eA9pWanfcQZKNUDo8pbyNcj1tM5sXZgWBWotVvXuejoEAGnULDeg5Z3aqLfJqEdFKJA5qYqXzSj3Q6QcFjW",
  "key31": "ekQhZZMcs3MLDuSjVsj5FG5VjgPu7DsiyJvxb8kSqdGiHArKBRwEY2stG5bPCCozyXJUNSD1ErYsjSUaAfCLNj8",
  "key32": "36X4RaHppEkr9p3VATFZTXmE1i38G5maAW42bUYWqn1Xfuq1e7E2Y9cDz3W9iHr6bSHw6eBp1ZGrAnagq3BzfE5i"
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
