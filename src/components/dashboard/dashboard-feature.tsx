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
    "VVvk6nSKrZHzj5zw2VooW5wkwCMHHnsRU8Hqwgnj6qredGGya5tWzP9kGzP9pcqa5ffGivmEb9JdwUqsQCg2xtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VChgeVGcuHvcRJmMHVoXGRVfqBApxLhiBpYFNiqmnhaTF2R7ZuC2ZLagYsdgm1nfdBQefKaX2WMB6ViCKr1meN8",
  "key1": "6YafZnHZnkww9k6ueXwsth2DeeNYqtWe6BCVH1TXVfA4uUhSkiaNmeVACqcNcoKv5uYwK2CYqTLtmgPACW2ZK5P",
  "key2": "3MWEUkrR9MAW18yngvkWDvzV6kWhZTcDbUbE5APAB3W9v2UibFxo3HGEdCiJeE7txzyURfGoCQaMjgTcZZU1bKNa",
  "key3": "4cE5urFoire3BBArQAT6mEDteJ7zAf9hu6tr6sippCiqbwB8RHiiydaC5sbyRFa25GJikswhpWh5JphxTiG1Bi2b",
  "key4": "3iYhDQcpRsfSBYxARV683CJfAyKfRwLfHgTr8ZvW2u7obh7sJYRUKeTsx41PqUHAEbVLWTHfdtwdGMB8sEPS9Egy",
  "key5": "yJ9d6fU1tvgd6vLnczK61B8r5F5kWYT3qdAm22w6GcP2GtsRcL3FeGRjfdpHCCJapViGAZrEksQ5QEsMFZEZuXH",
  "key6": "4J1KyXZwecCGqDDZUxmDrEEywaQ795UX28bSbdgwTFodtRb8ApTjQPEzYVmAxvvSYdVx8L25QLQxTMN6ZHrhQ4ve",
  "key7": "3YamBn4wsmxVgPBYopn93LPaerfztVu4iP8wh6NPxaPyiAFDrLsfdszf6fvMN9gXR4cVpoAR8LEyeAnbqfp2U7zL",
  "key8": "2J1XMbBwf5Hp1PG3V5CvRLv5EH3EdpAzaBdcdzEuGxGY8ajwvwVuF3Vvge3g58dZNd2Sp1uazXTA96rf4UqdjQxU",
  "key9": "54AxXNC3VmWeNcE5u3JYjQxyFwQjS9smM79j3dcT18M6E8WKgsgRrALnunJiEySrkE4UHBhoDmvLAgwsSQwe7p3D",
  "key10": "4Q75SmpNhj1xZuJZkXDdpEiq4Q114oLoahgpipK1sp13rnw8EJ111u1iGpyajMTNPqcae1FPHHkXNYDJm8XVjcHM",
  "key11": "41hqJKs93XKToUtbgon2QTepDTMrAtLyrhSFhXbk9bLdttrTpbwXTCFHcXerr3s76u6WouunqV417vDkpEPH8WA1",
  "key12": "AtMZPysT1LK1Wr7cAXmrGynqY789rvtw57C65PWKE9mPGMLNcccr1D65ZX4CzRGH1un2f9FiEpXkzP1RMGh7UrC",
  "key13": "3CpAgoPw81LwxEXi2iiRAWFcBiu9dxEdfYzvvaVTY79PDsVyDFDqvGDHoaDxuHFtt7gN8SNCrAPMLi37SWDCqLsv",
  "key14": "25cc91HiHLjdKMfYpCsQHgU7xfpUCjVQT21Pazc9vHwJ9pZFnHACL6ncJdj8SpdM8qQ6Wg94Y1kqKBcmWrpUGSPg",
  "key15": "2Zx1FjNC3kcKYg6AWJ3uRKnW89oRkp9vYubSL2wN5Lo4QhwkSfz6XcMoKqPafRgKqQA2s37pUVwgpXB548ym96gA",
  "key16": "3oNwhNbZ6P1YzGSNvmyHjEihHnoQ3hbNHmCekzrZEPPdXeGYjNtezfvcGsdeWLa4yRkDtGMhduejPtgsThZc7JRR",
  "key17": "mEXwVYUtY1KbrhAeDBiYef52zo2yXfSa6bh38xkfGoQMiNkM8ZBwYyiAQyJZ8KUugdAvhKTxaxNunBUwEjG8Zuz",
  "key18": "GqiafZaL9DR51zos54GmgoRKvM6Bm7FnZ1qJrqu5iajmZDLB3uTcZFpPZ5HJmMyC1Z3UM51MWBvooC8DvCex5Dn",
  "key19": "3Abm5xJnmQULpu882MkUxfkmwmbq7au86RYzr5fuUfiXyALUzUgcCm6JVKm5nRG4wiVLgJD95XpbqPFSMCuc3ZkS",
  "key20": "3sFgTdb5yXAgU559mpybRbAFmPWna2ZZWEbHoyGU1N3rcjizxkpoVLn63DayVyKyc1Pu2oukjEuBGz7DoWibA6bM",
  "key21": "5E4VmcuZjrxRjSVtRhrmS9jMSVAUmLKdXiYWzgJB4u3e59Gks76GCwVgasSupdBrHuNTaEtX1oaU1SidGm6d63r3",
  "key22": "3zRs86Sf6tJNkpCr7WeQnZn4e3rYPcKcqBe5FtNBQe2h4NLaDHLAwNZRhWy3jeUEx25DNqSBQyo329i2Z2vxv1ZD",
  "key23": "2wLguzbBQ8e4SrGK9jnsDmZt8nzDanHbtdjdX1vweAWyhz3K4yjKCB2HmGw6w3xZ1f3jazbUtRrZsseiBYjmFrbE",
  "key24": "9rTmRnuYSv18exG9CD9wqkRXKgsXTB98S9CgxHoZTjBLBuZD9xmNyEYW9rS92rcque5tT8y5YVQ6Z6AjMmnSXi9",
  "key25": "2fuwPaRvoxc3CuRUZDaC43nETWhM19hZHZmdgj1TisxnSfb9SriGs51QzcfEAMpJWZFnocgHxhr8AhVopzCpDQsb"
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
