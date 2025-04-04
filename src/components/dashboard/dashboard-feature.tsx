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
    "vRRZhEdHJzgLuaVgkGQ8Y5oPm2eBMn1QVrQCW9CadedqPUTjLkzPswvuxc6bW5BggWzPU9jD7M31jbCLk2YfR6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22cUaWN7NVMdHaAgvVfHTwYk5cpkLXAc6h6N8nM8xppzdD9oPjtcJK5TaYnyLgUqsSA9ZMrt9SzjFiommURAtms6",
  "key1": "kejy3ipAepYhmsSKGrHT8bkMBSW925FAqE9LbApgTog62TSov69SH1okYPJ7Z8i7YgGdMvwwWCV6aBrWutwXuck",
  "key2": "2hRbZr1DPpxBhG1pr6U9pZ1rm4D2XuS3oqviQQ9fwhTgPTK8yQhNMTykxTbGNPx1QkgyZG8Quha325sdyh4PwNNz",
  "key3": "2sRzzp9yLvR2MwV6A7NbSqt3awzQcFKNh6Emwe9WVKsRsd8We3NfLsMwoWqNgixGyboYQqt4c77TXbT1AFQCXpjZ",
  "key4": "3y6bE91Wu6mEMJgmyJtH4WNpBw9WgkkEtvkEWoKpxax49j6p14ZoHY76FHTtsP4fDXKh1cC2fH3UYwzdJby58bGd",
  "key5": "54wcBGg5SGk4CvugwYJcKfdnvueDaYakVNKqNqwdfwwVtCdJ6ubWZC1cJedDgmqYC7V2pyoiQqyYeeHVKejpuNsP",
  "key6": "vBkZBtXpFE5auortoV9wk1g4XRGnRp3kDy1b8zxBKTXafZRapJVQ4TcgaAenco9jkjCU2wxXz5b9kehGMdEbwEf",
  "key7": "2mPkeyiEKiw7iYBmr1jhQ1NRof8iGtrETD7GzWtYyVHa5sUEqMLbuHvvhTgqPmS7SoEUq5dmE617JxLXeiRMtySP",
  "key8": "5wSrncR5Eu9MiL4npRHDKV995zZQosWYWDpV5BCWXhfoD8WZUAYwxDr1XXGLggPcQixhH8fuZhRbyGduRsWoSLdg",
  "key9": "2gBRfqeUmXwjWCuQj5QCHZH1iPxBkLcEeL4zNKnDapE2MAhuPsw7utuGfqG1A44zJF7ZfAs6N4BVF6A7JrTnfee3",
  "key10": "3C2sBemRw7jYLkh3r7PrvKXnzKDHDbZYG3zsSJ5SSk66uP6xtHya4He3ckRb42G1EgmLqjwoB9MZ7h31HM1Hk55P",
  "key11": "3aqP9FSTZD36CkckcVFierJfrKJTLT3tSDf7CuxgsHJPdXYGKrBRNp9vUFfYopAwikqFtVB5Rd3eyXe2tEsfrpCL",
  "key12": "4SYmTRuE1mUDzXFeufkwRfdKnGSQi7x1iSherw82ALiMiM3skyM3trtLwK6n4pKDsoxhURwdsZNuLesF2drqmHai",
  "key13": "4jXKAUs18GWvEUDCcuxn1wi7TNkm571zZw2ZkFwRWADprdDX6PKuSWEntJGKSvS3N1p1FESAQBXXgLRLMq2y9ojd",
  "key14": "2pBKG5r699eP3dgUba8P6wq7V7WSowDMMSRARF7kaHPYiaLJd4SjWrd54ZuhtxaVrpD2CUXAQ8gUCpCGFKrFGoT3",
  "key15": "AEQdPdbctWs15QuDkyDhtLMNpCnLGMua69NNugQUHYjeyrRvP35tP6PFhSCaLFEDnUHPwqacXJMLDCUBafmKqFe",
  "key16": "3v9UJF9jL1mV8eQFLvMCRKTfvJQKcGmYNYSmrDDU9oGBSWCzgDcA5RdtenHGZuQayRokkTrMp6ezyMDAB6VzdYQb",
  "key17": "4y83KXZGbjmUkT7V8cnkFNCYbc3QpcavbgeHGNDndDMmqHRYGEkBbUMxfRcTS3RhfkQmWwLQTsHsvLZcydV41mut",
  "key18": "vTMc8s8kJDCSkhiCViT47opdMu3y6VB6N9YkkZyYigESd5ubvBcLnbUmczgqoKoVAbJubtXA1gZm2npgrvvJCst",
  "key19": "CyZbdrV79ucCQkxDFCWL22TTjbBEETa8JNz6Djazi73pLRqakoDuuZYRedYb2fPtPBmv4M3eUBJzjw9oDHUgt2f",
  "key20": "2NHEFC3AE4gduoHALxNodWQhfKWQougqeKT62mKpR3JMtMzr7FkNkmpvD5aYEk328gTiZyYrRC8Vm4jtJD6AUjpG",
  "key21": "5oNDgqkDxf5MHE8cHJE23rBqXbmvbm3iiDPp9cNVffubp4NL7jad7nMHsZpheSjQtuJ71eoWSGAmMyjPWrU3PY95",
  "key22": "5fEqgzPD47EkMD7TsAzrWhY12h7wUEn4pJsjCyLGwfeFb3RXybehowugigvRLrn3ZwNd8Mg4zVrEDig2bKNgSb3v",
  "key23": "5H6g28wBQ6cuPsKeqroCXgoUYdVXuSg6Y9SwzXhGwdXBS4QVhGGpsfhEBbK5H9aeuZzokuH2aLdv9iFGUaUMPDi2",
  "key24": "4GLkoSx1QNNiGQKFxvkTg1fgrDYLumXP165y93JJhzc5u8ZKU7wjuio1K7wTu7Msuz1R2DDxjU36Appg9KGUSqsF",
  "key25": "3SzxwG9pfACLWxfgCejXEFFxuaeHj7JbNx8ZnNWc7yX3Nc64wKcf4XPGHntagmPmPy3NsMDEYJ35vyKtiGgVAnb",
  "key26": "2wdscNHwV6RLwdeSTjLUTECjT3gUjxmEqJk6DUgWtCu6GPtg5xLjLZfpgWMD4tKQMFe5pRjzK6AM11UGdyrUqnnE",
  "key27": "MT6bFqKNqz2xvXmLEZk8VQDFCZca1Fu9R5JAKiwQ5xj6Y3jpJaFJ4G6SV432cCzhC2Ghw97SdZvMJYZxi5WyqXQ",
  "key28": "kQmbz1nrpaUniRwP1siUNLiiagoHR3P3BGiqcdCvpSmWPdUHx9mEZtM6qNn7BdhxAEmTdEdktP2qXfWgcM77Zm1"
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
