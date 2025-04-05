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
    "4i1yha8KZbc9Gt5gZtjDrQURMS5nh8v1tXLFTyF2QgXTG1JvQ3anqag8173Ym4nBfcowpidYpLZN8YkQHCH3B5vG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dba3LaWVc2G6tKNdAgRiceT2LjhHUkKw53SBQTcCb95qXNHTe3dk4ed4Dr61nQuFsukrnbQyM84ESR29Ju7nZFY",
  "key1": "2jwu6bejQRnVT3fHWkjjGDo7JfeJRfVVhUaEJAyAUJ78pG8TTTE8Dga7H7s5wQ8dXbMPumg3g3vS2o8M2AvVG2MR",
  "key2": "4hpr91ftQj8Qc2GmF4c9tgCyQa7C8b3Gx5SDBLAjaC8UvxeVgbEYQ4kHnTuoAoq5v4nB1xrtj6uTN1jo2duxkjzW",
  "key3": "429MRvwVXwwR4sdVBirq5S7kaLD4PYPKUawqR3pVeKkQqXpvrnsk3JiuCt3Dn4oXTU3DnUcGcauPBprv5f6qhtGp",
  "key4": "531vreYybaAKyYphzrd3xdd4scWv8DcjHruuDqDr3MVbWSEYPerWbWSEXSpMGdEY2BM4b9PeoXixciDrE7m8GvUR",
  "key5": "3NWzSacNH2eRqkDAQW2faZ6dbcoFe47kNKk6btPUuga7pptQaBLj8tZP1iDYUh9CU8pf1wTo3UMCXSCfBmmcdMAW",
  "key6": "ghrRn4BgH56rNTBSsQJUrRAGihn8P1QvcZ7dShLPMArgDEzsKk289kFGvounmQ8aSub1wME87jBq7wLW31JfimV",
  "key7": "5HgL2hSWHyNUQT8q2ymn7ceiCsqZutZ6skktNsdU25RvLq29JZsX7WHBPdbFUTqfCGWb41dxMA7fm61943vQUuU1",
  "key8": "5dMmNmUpa3jgdDT5fAT1gPe8GSva1anmoSsUUNdvRK3u3Mh7ryFksDiLYbtSJm2tZzDoPcTDRhN1tL6yRrTJMzqv",
  "key9": "4GrgXoQEiBmgN4UmmXL6iy8jgZZP6uXxJTRGA7P3idN1g7JALhQ9o6y8pKBGwkTHmYiBhYGHEEon8oQ1JZbNF3ze",
  "key10": "3J8m1LqxCTYT6LETkMcXogcEXC91iFt6U7EBpiTvV8LociqcQzihoExnHTCPibEXnNtJ8bnbS5GSMVsXbVs2YNmA",
  "key11": "hf5Vb1fpSdhPcCxmscsCqfJEvW4CmXC3oSMyJtq9XhWznUw63GeJNRUmYqr2nNBaQMEovPKtCnQxaY2JZcZM8J3",
  "key12": "388FxfRfxohgK5nG4znbscxfSCetqUB1fsjBDyUmn4qaDc11LWmTGSj7ZREN8wXjzQ3vkuXz7vno415kKtgEo1Hz",
  "key13": "46gA64DkDwbtVUCUDPPQsBzpfk9GYRt59gwbfYP3P4dfaRUk9ap4eXto44Nzcrmn4XoSWoyw1YGVjhSpiv3dUfEd",
  "key14": "5Yy28zV7fAk2mE6dVctuMacwrHZPG2126NPHgWrEaLb1MdPqbXukBRvzeJEHomXdtsGBjyeixK8x5pjmvp2ZziCP",
  "key15": "4xgLGEMD4oJoPjAQPmuURSLLgHzYqyXRmXRg6YeZRqWyTyYa45UmLY7ymWauLZCGMp4iSKzANGZ51RkasjiQuiMG",
  "key16": "2591tCeV1WasKr2kfEfzEB2sN8QxdjopT7RjHx7nHQ8qsn8C6PeuHEAYeZ5TcJpeVVC92HoFkNzHB58jhKB5M1hQ",
  "key17": "Zjy6W7GR6Dai3H1XeDFRHxzKNzot9PPv36VJBvzS8C8ttzq4EMKFNrZtWj92QSmK7r39TXimi5CSvZbd7JztMUx",
  "key18": "24MigTs3p5281XofH2N87TDjZ2mYDpTk3mMDSJrnMkBrqC1qDPdYyn4oqSqx9V2HYdXw1jQn4xyN72MPNMaqdWZk",
  "key19": "51dXyocgZPtKdvT136jYHYcfC2vY3fAqxeFLnY2LZ2pKnJvYGD3hAFLvujtGN8cjex6HReSd2xdUAcHMf3tWAU6h",
  "key20": "51MsA3uUCbGgGTmv6SSHC6GpCC2KQW282ZeLtGabeUh4hZHjJYBue7SgyxPBoYLYdLJxLcM6M2J1omcZT2hM7JDr",
  "key21": "22gRLBccS681r6Vr3tD7hu1Kpee7PxN2mYPwQKYZDXFqq3QqUPbhGjcaGJSzQo7EnhUQ9wcpnmGhg21eqLPXQNEE",
  "key22": "5gNbS8rXWg9wyNRi338Z7qig5kb9k5ggwfXav4PecD1n1f9BiagVAasWxXRriGhdGSHrGfQ6kgPADi3Ai4fPEncf",
  "key23": "5GSKJGd3ua89EcpRrCrDdYCvz7o9ZxdnBdEckbW8Zi8gu1wTS85zUEXiATDGUmTKyWKNHVFuxXw2YYmTSPgRQaec",
  "key24": "5fykcJEEKPTQVjBYiaPVyXFSyixwv7c6rp3siBD74RLSjHUwzgcpe3jd4aZfP8wS5GhS8ywLkyedmkkS2Zee3THq"
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
