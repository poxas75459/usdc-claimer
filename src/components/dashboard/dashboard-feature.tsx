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
    "2sUmXYei7NsV7MuLv78Gpo4V8ffvazgosGSrzkVTN3yFFgFMe9kh42mbZKowTKUuZqj9CmQouDVDmLxNUapyattJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54HQFScs1v2mQvQUiHdHV7jVpp2Aw2C89kCkab66cG53JrB8sWPp6dUHE77r3cMMuxads1XJvpxHQqXfPMhzkARx",
  "key1": "ZXgDrtk253TrSQ9S4LyoVDiFACSb5DbVrtqQaSWZ6EPCx4yiKxxwSkRtZUM4qRCvDVa7cYqEd3FMCfcD1XfDQiH",
  "key2": "5dvxzBKzCUoyaEbBuNLioqzfQbonqTMZqJktwcHb1PbNKHhxg3RzpRpZSpANPrYSMhEVR5DXFZiX2DAdmTB9hhbJ",
  "key3": "3G2ZPep5oEy1zKSAaXnmMqFeAXB5yFaoiyuJFDA6Z3pGWAurNRyr6a2BF6mrQD4qGtRZ3Naf9YwNf1TYRYWmXWEr",
  "key4": "3MmTqVqAqyxd6i3p9ejxWciZ1dgfZCfF4NsNLt311NRnTaJDyHmksF18sQ8AfxBqHXJLP6foKe5oHQw8866yLx2K",
  "key5": "2XjaYxPHUCyfqfzDvf1osgEcFbDjNgDP6PjqqmrK7k89j7kNs47x5HRG8QejMvh1nAw9auNgkqRhfnu8puJ3nE8N",
  "key6": "3R4JQiXGvo7s1PqVC6UUFCP6ahbz2beCBLtNeWMxzSgbCm3kx6xLfFRC5hHnniYfWgQ9KNH4ZuG88hkyTGmf2WT8",
  "key7": "nqjB3JReYUmgaFrUrbPXosokJERUKB76yCD7TEY9w3VHzekU2ewZyZsSHeGywYX1KvkKLv698GvSmQUCesup9Jv",
  "key8": "2DsTPr6Tz5ytDiydV1zrhgqf2Crwx11W3GQKfYCi3ACZ8QGHNQsiWnU8PZHauxrbZwDDvwzi76E7dZy9EesQnXoy",
  "key9": "3T1BTjnUxVeFLLgnwnv81WuoQyA42SWUhsoXJqgnk7bvr9JctrRdceWqz4hxavbQe5MtTbpVZ6wqdgCsHTQnnVch",
  "key10": "2BWym1nXvBQQEBLCzVYgwwzjMuqSHx1ktoczuJF4i3k2oEm7AXiCaDfTRm279G4PHg68zjyaKEsYPTi7VWi5QDye",
  "key11": "4LpKMxc9Lt26Es6GJG1wUovas29zWL3bQ3YLq4EacCGM71Ee4U5MNcy1XEzNMXAPS5mefL86Be2P4hfUzgM7QDdh",
  "key12": "2ZB3pH9MfFHPDtYHWJB2Vu5LFDLs1N7swbwHSPbeVMGwhoUibEJGHRVCkemWTTjucyUXiFXCMWgNeiDawvBzKkAB",
  "key13": "3zLMiqdEBeF7bn4YfpW99vubxXYpuSjP9B3KUsBT5FkVo1BetbQm8HWkiBSFmBqmeRX5qVqssq1V6nzWZSDoFFer",
  "key14": "2DoRttYfP18R4tuq5w9kFf6ABhCmm1oEBaWMDXDB9stApPUpkXaVet3dpogbSGWDW2AdMg2gCMCFtNBinXuBLBJx",
  "key15": "28oSkkmEfMTnFhxYgsG9TurjEUeofNsWSHxChHuza5V77YGK6KmacGP89MSZKpxAxnwJkRA37t2qPn2CzfJE4zah",
  "key16": "4jciknEtrMd2CaKddLcRq4DD2ov9c2NbViz8QG69JWUMhnQv46nBaPZSoLhjUAbNQCQiJiHtgr4gh183cRE6k8GZ",
  "key17": "3vxcYx7qtyPNtSFaJBaFpumcepTCK2eBp1i9JUrXFX71rySDFURgMXZ9WAfZCPd19qb7yZqWj3HGH75NqG4pR4YV",
  "key18": "4Y5tpxEznyZCLXtEQcuw2Z4nFzinsuxjrYweus1p2fhKMm8FXHjSxN51PyWD1Kng35eVxP6NdKmZ9JAK8rtJ1uDd",
  "key19": "2ghAstkyT5e6pU24jouriWVCPSusYFJvFsQb9oRhjKjmb85pEcynpMdntq2sCuS89ioooFn5fUKU34LBRfoUGVen",
  "key20": "2UN29SksibTKerNZbjZi1qfFsbjscRPDvEqrxN2nbZSATCKZQ1bSRLhrArJMNTo3A5Vyy5DDnGTGnPLWuGSSqet5",
  "key21": "kkjoMG9LoJ2DpSZbUZqGLJL7K3jwv6wLkVPkaLPWfbmbULYG3Z8uePK1WMoSYzBuMp9He2EK5RPD4VwgNupokGu",
  "key22": "4cvjYSRwVSfKRB5qat2NnjJWSrqHRcPnsEUwD4oYwCasQXpHJzJF7MMRs7rxXyiRqr5uBnhEhbWy7fn13H6F5zp2",
  "key23": "F7W4vLZ9mAPRtU6no2Rv2scGrSHA6RHrAxVH2o6KxzaYzkqquj7tZuRcZEpHL45qrSdf8AeFvBUZhrwFnFX5Sy8",
  "key24": "4Jvnmw2uNJy1rHWR8rSsNNQBTikYeg42zw3g9ZPWdoWyKzWGHmnqPfXN2s77ZJUJzqbbGZhiNzuYxjtaBuD2rNSU"
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
