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
    "3Rg6uzaYxKrrWDW11vY6KViYUqBg27NWJpLy7HbQPWbZR6tMrgfmZeYsCukmusvTka7DgVm6QkjeysqsnCSGfrpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GsR5eeywZtYBBjR345k4mP8nKHuL39HAc88ZpbddY3q11zdsZExrSejFCafNUzM4WwgGDvsrib4vU7Te2enAtbd",
  "key1": "4PoPyE4L5qzEH9QbvcWmJVeoeAPawrodrc1iStjdFEWfGpqbJnURpU8KaMsHf5AkFWBoCPPkuSd6sRLZvTN6spqM",
  "key2": "4FVaNQNoGrTtRM3HjRWus2JV6Gj7vpfe7jUYLzBfXVkjPdPzjv7FXTtiAs7t7n1HN5yr4UZLY2aa8sNtjcNxRJuE",
  "key3": "2M3vj33iph17ncr6V4a82JXgsMbKqjsrytuBTyu39ZgmfQ8BYPRr15vpCZADYJWbybAhBd6PSFjiRoRoTcjn9khF",
  "key4": "3yLzAWYDLn3PZcu5h74cci28FdEMV1ecsnAQvcCG6sLFFNkwVHcA6DdmZocwpHwVQuYetzyVKzV6LXYwNpQu6wGa",
  "key5": "i4dgmU7AUeVdKsLqEwZVXj6XBA96McqDkPv4FisfTf5X4apTab7a9Ym85y3jzvjdWUrSCeeALccaAeBJoV25rUo",
  "key6": "3rxE6j9bXvDcJ5dGwr4fHzwkonxAfrKSJzGJEZnPuKz2hXh4RsfSQjtGeDdhmDKykptCLdAeMocbKqg4Zuknjk1d",
  "key7": "5dZGftkDFDWhG9x2BFQURwMXhHBn6ZfUFjTn9eERT5MvRAiti7dsxgFCCnG5ePiRf3FaU76hsja8gYZdz1iZcxNV",
  "key8": "2cawUPDrPKyDcyEL34BrdovrWB854FWR6KSQJ8McB4raKZd3HDnuPdy336ED5acbpHPk1yLyZXWd1FQJFCQJNQNp",
  "key9": "4EEPh3go6o4nTNrvcmDWdG1mSTkFABi21CF76rTENQowjFbnsqukzMCaD9oW2Ym29Moiap6KSWHfX77ZMAsiLMfY",
  "key10": "2eZVNQq2wJQvRoch66uwJeXcw8hUnjLeQrEy1L1B2RK2jgFF3YU2uqrETJnMqRSngRWesECwpzpsKpBYUezRqHt6",
  "key11": "2yttRyGAsVJjrk6vzwdLZqehTPuFFKon1BMoBZGLHWzPUB3gtnMfojxf2gw42XCMn2LChopwjfJhLKVCk5nsBNq1",
  "key12": "1hT8Bk5MZfVacArxT5WxUyiq7P9H5LuERWLt3KbpqTu2JkxejshUeLKwn3VG9dtSw7D8dkn6eekz6QQXwtsxiou",
  "key13": "4kdBbbG9XckaVuUvrGGra647fR97zHqKFRDckjVtQTDPQzZ6W7t3aEXy35ZSXzi9gg9zKDAbeBV7dUpwYdYiiY5d",
  "key14": "5SSyuFukoP1yfm7iwwZzQUxR3WsKo41xWdCewt5uWHA1ACqBjc7eAh2JpDXdCYLNytvZvhyFN1781YbmprQoWX9p",
  "key15": "2nF8w59q1kfiFZZc1rd7QFCLiCqWXvVyvovP3CxaQK8oYQVfzNuXGJ9p8YBcZrBNPfPtELrF6XtmLGLUxAmGrzcT",
  "key16": "Eo7DVUNJZR3bnRYAxMn73Zrta5Gx5nNrSevXcqXFCfRAhLbS6PGtCQ6ZAxNEqeCVgEyZQCs9h7Eq7FSM36uxoRL",
  "key17": "5jA4qEVauV4NTe7RECTAtKi7ttALm5J7UU56YsJjeexLHYsZKNgcPCUftBzinwCg6K4pdMXH8jNQWt83Znjvyhjv",
  "key18": "2B3GbM5pWmvNvDMrcJRHnaG62e2gf3oXqrLMCbUh69LtGRuvFoSMaMEuw9jpdD1HgEZgE5jXUQAd9f24YkxPDBjY",
  "key19": "21tTQ6ZahGVjn2N9dkVvKYH2j3EM7Z3TA8n2n3RDV7GsoVieE3miihJMLj6vVGc7eHCkwvbCG21QSQtBJ4JAQ7zz",
  "key20": "gSFT5er6FjyenU2BP3v9G6ygm6MRpj5upuycpsLB92BZFSF7cusEV4eG4T4LQnZt24pGp1G1FZqcDnKZAyUSBV5",
  "key21": "whMJreatexYJ4ZNdv3VWjUs8qQRLKYCMNzbxEhU5NsJboyH22AM7jjViufcc98WdsxDH5uRLaStYKhbCcy8DtcS",
  "key22": "5he6XsL2hqw5UzdytYX8tinLhipJPEj2H2vNW2gSV1ZRjbJVYjQeimT7Qei11jtGEQ18bfAca18cUqyf36gaCnoh",
  "key23": "4BitZyL3cMVgrutUQA4evRUSS1R3LBAqyHENeucycew1MaWUmuK7PAFoxy3KoLwXvPq1YsLmBRvuyBrRKvfahujM",
  "key24": "2gjyoE4U2BDeQiwsaM8KaeUAb8ukTtvqThiR9Zj5RRteLyysEnLbBGaKCFwxBSg4KKhE7at6SJR7gcRYKLuxi6P9",
  "key25": "24bVGDNyyKz3JyJWB7W9kxsweVW2iEhAHUZsuR8bFR8x2ruwrNLCQsgEUzpPkBzEddX4kvNXjhLLN6bCBdK8iC7U",
  "key26": "35msWK2AKfNKR5g6n98uTmTMMFUG9mYm37momZaJwEb4mLv3R6pAt6PLd4yxE8n6xRkAh9nK1VjisK6YfgsPcF7r",
  "key27": "4N1qLhHNMwYrDu77MQv8Rg81J8j9iof3bVqLAP17rHKbcPCB4LWfCu7xWhVfBbc8GQJhe5Hu7EuFte5ELtUPYnUY",
  "key28": "5KKekCW3xkhHv5zsqHEq5PzgagVF1XfDak5qAEjs9xEknouPAvsxsXDCwH6NMy6MHkU5TUdQXXm1fteQy89thzo8",
  "key29": "VBRiEGaFfXLVMSusLuhhwEPMhngunXqgDLY2kYg9wy7DkVAskistZCHek7XgeLESNUUJU3uVSdK13zHezKUPqky",
  "key30": "2JxbPWHoVtYMeGcBbZRyAVM2yPss7ynKkYDnx4W6WPvkcgawyctyizDawBcmg6iV3HTSJKWX3czfuQYxR4ZfTVv6",
  "key31": "24mCscE2Ps9A96pyG2XYKv7YRdZoezhhCSiKtLXYecMTssSDpodpT8ZtgsaBGM844DFiBwAuq3kfPG6MEeAVVfWB"
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
