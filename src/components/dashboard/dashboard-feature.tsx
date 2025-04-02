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
    "9fEVFG4i44oHWBoavNHUuT1kZ8LfcZuGjSXg4oTuRQ6zF9qT4m3L96Sv4qC3KFJT1qtVZntbPUPuSBTBH8g6Dqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kfyRheKMeCkFP6qjEx3AKXyL1CffpMpvo2CxHQWNEKE3d8U81TyF3jCb8ZJvaioQ7VbYPYrPEDpQViBfJEDNAMp",
  "key1": "3kQpvwwJ1MxiCA22oBRCoTjxxq35GiiYnEbmVmuwvHfCr3Kjm13btokq6bFygqKTZTVgzsFcWBVZgcn7GejFAxLu",
  "key2": "5bhoLrtv2i98XuxAHc86kpkCjD1jzHEdXehQEKZHg2i1mEjbvJC68y1XzQZfs1XAz7gJHR73BodpY2AVVqUcz6Mg",
  "key3": "2hUhJiqNUJK1SLEcYmoC2DsDmmvG32KVpzHBfDLG1YJigDJDSrWeKo2RpnaBERpak2EoWs44rqRLViHJiHBPJ9Hy",
  "key4": "2CAH2EHifFAh3NhoCqfLqa999e9os32SM71hc5XUM1HUmd79uBAyHt8wy5XdJM91uVZkk2MkvDdB6RWt5zppbJK",
  "key5": "3qLrit1dewCDjoUEF6xre7CsHtJ4FhFXDuZRU2XABzcNeoT65D5G1t8Ur1hfvbPN33ESx4pjB9zDyyHkgtxQcx4P",
  "key6": "5Q7f1tCZ4BPfLttgTb4VHdPK2qfiSk4eFxeFoPFFLw37uDy3JEVKmbgscZyi2z1zpGbYSc5YHaEo263ioQMwBzNc",
  "key7": "2JySiGQZFdVe2r6U1vaJYrPfRBZkxwXp7VS4cxzdREAxrN8ApyB7vpsBHrTKHU9imvLDek8mHAVZeQkSwMwAJHzJ",
  "key8": "5WThhpoy21qydPLVbzEaF5Sb9KALLEwycubrTfoUWLdMRRaDZx2VTNFg6qnfToKDCFiu7pb44knnfCo2Rn9rEA1F",
  "key9": "2u4Muz1vX1jNf88G3i7VVsTmJ5ZE62Xnd8WfHpvtRHj9Awb6og59Ek8wNeZNc5spwRss71cLe8f2aUn2G8jM52K3",
  "key10": "f85GJvuWExmkZurWeTgztcZwGj4PPsB6ypm32bREqtuYSCi4t6HBRNSFB6G4yaFXdZAYSFoSc66CpjjY9o39jAk",
  "key11": "4p9Gk8ZW2GGtUnwyMyezU5yVoRTiz6d3Y6yCzh3rL3iMTNAt7TCfBB8S9pvL74eUDstCGukXnR7C78iZHwNSym75",
  "key12": "5RYEc7WPfGBXPUddugdDiuvAcJPKjau9o94mdR5PoAtbLbBFdPMrsXYDPh1gQugBfwgRbCfDg5XZqKEiJz4JtTWw",
  "key13": "5ZrfgN4FzG1HNscAPnTzmPwhfXvhhpfJzW3hMUnSCock252inxZFrF7DDgUtvJTqAAYdJtpnxANdZhUqbxLRr5WU",
  "key14": "41xWvZywp24f44wUUow7JkA76TPDHAxKTTdZtdWGdFDUbktLwFS1vW4GkKZC2mb6z7VBpDdSkKvMFwWrboGxueTm",
  "key15": "48NLAfYrbdxhADktZdNYsYcHWPvZKHGYLSrCyU86guBYgpNvyUz4ekh2veUEZzCEpCxLQkYqH8sLc4vnw1rUgK1P",
  "key16": "3CeAbK4xGxuFRPPknG5e7jDokTZLX8MgQEMYqoPvkqBznYY4XWJ7d2bcpHKXq6PgEyg7fbSb4boFrFjyAshteLso",
  "key17": "3Mkdpr573ASu42LTZc6AUqtbKdBUADQgXheuUmRDv4Apr8NHKAL8JVbX6n2ZbEobB9veJmUVXL53Mtu7bfhBMGjg",
  "key18": "4LdaYVaJMN3ya7WUsTFcayeKNCEs8e6s6wdDRGyT8dwTQLuuC38MxJ3HHRiEvW1cWT4ykdt7psjDH6FkZ6ZqtUfp",
  "key19": "3Wvru75mouZyPJuQ6uEHFW6qkdwZMexgpDB2b6cqCxKkbYpi5MNPA5HosV3yeSYa1Bp1pmAJMoM5q3PfzDxgcUmy",
  "key20": "4f4G3qgiB8YCgKJvGcNdYMyWkrv34n6xicXAFtroHtABVWe23wL8bviX6QWZ6RN6nzaoQadNFrfBD1558pwvLgT8",
  "key21": "4ja9Ga7c95YYYxeUj1kzAgH5oymbYk2tBu7iboPgeMLvdY14qe86Yrpypdh3PA6k6JeVnX8qNu3g2zTMmaQiAw45",
  "key22": "4ZJ3QnfU2JbJjLvHzgtuEy5gVhT4yGuJWHvwxytw6YL2a4yaRoaVxAVbc91EEitFSiAbhZ3WGqUZxHLBjyC7qQjU",
  "key23": "4PVYjv61kpJ2SCB36zkfcZSbMg4287ivW4QXLLTP828jg4TBck63ECzz3DWkSnCyT9TjzmDUydLvPV2DGN9EZfyi",
  "key24": "21oLR8y8HuQ618DipfCLYkpsCWsAWqijRYMP8eyu3xoVqtVqbzRiXQVCSsYPEokA2cMyCBUny1R64LapeRTMrb2c",
  "key25": "2LguwKtvocz961ZByVQzyLq2r2YjsEcdYoEihjsH27Q63FXYNAAEGi6oMQpFLXnoxQFiFwvbpd1UUeTew5WyUzhU",
  "key26": "5AXqn9gwJauPjFk9q7z3itRFB8B1bhSGSTSAcbsHiQxQBi3auCsMxnF42AKNbsgcNWDQjxqAvQ98CZz9EAnSPfES",
  "key27": "5HGaPuFXG7NSHV5pfxboEVtowTwfFrSSn4rTFtu2NEL7NTqKTuQQUc77cpjpFqa82M6S6vzkPU8fe5M2s5w4bRFM",
  "key28": "4YvE4KCgQDEmnA59WSPHYWxT39HGS9poLADoFotos7uat8rowtWqExh7aSNYUff7mTPBvshVhYt8G4R83iR8tFty"
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
