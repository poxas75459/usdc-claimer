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
    "4TGacDZ6gKi5Yt98XX37sdD1tBWy9pWEuXtFYeBJ8mjKgnQrYw7sGekx99uxYhruFVqsZky9cfMWv613ieeBijMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ttd1keL5bP29Z719QXppFXw3K6XNEeZgMs4AiE2u1pvSthwHfCTSaV6KxCLczGqEhcenMDqkUo79L9PP36AHA2q",
  "key1": "U1PKWaahHiAUR6kDx2Dn2puvRqp3w1MuqhpWZYXe4QEPBctZTAVZHP3Kmk3ki6MWnA7kZ2MNHF33hjbEnSCwbGi",
  "key2": "2jnuDyjd6oVbtUgAGdvSn5NLHgE6BAf1FP6toBLK5mYRyRTpcKNGdCZFLsZA1dfCFf8CPWmCVaWqjuvp6QLGvYUU",
  "key3": "2YpurxamRAeiMsxF8PY868kgJnohaSwski7eAdyPqGUn2myBTggW5EgEN8WjqxmSmg2apH7Dxq7oHzZtQC9Eh77M",
  "key4": "2pk242VFXf6UqLi5Rc928wKZMN4cCJz4Y1PWRkSC5FUx7Zq3YdQuuZNQ2LpMJLZ1WaxBwQoxZGDcFrzbPvdgL7T2",
  "key5": "3i3JEjkyurL1FsXiBV9Hk4SPuvB3xnBhPCPFz4t2rBoCJfNEPSPqPMZ3eGypHu9v9DXWKvoqBWijL4nj4uHw3aR6",
  "key6": "29DvgJuxPdsAy6BVbVLtVLushjnX4SdnwKXryAekULBzEMf7njbrxUyCxwzty7myazXcLgA77N9D7CVdzsBEYigR",
  "key7": "prhuvntTjVycoggyXfFRJnG947FnPiZWGrBx1qoEATwW8B5PMqygEBtdyVCdRJ9sjav9uxYPg553w55DPCzgDyK",
  "key8": "2vztn6ed3ozoaxogMr89kT6xcyA4e3LLRh9c2rSCKqE1s6PxLt7TwWYu7szSJjt2P3c5CLfupDfzvn14tgmdcCW9",
  "key9": "48VpX21v5hmBSzGvenWi4opEn82gc8b6AbHaKTneye1erUmGXHA1XChyh2eB5JJW8Cen56hMnGxRnbF79mkNcvGa",
  "key10": "5LSKds5PZ6KiK9YNc1Eefx1PpkYspXXEhwr2SUQAreM8rim9r4E7bau3BnvsXoKVZXXSXj2dEPfNeN9ydYWY88PF",
  "key11": "347kR7a9YCbvSM37SXHjCNs81QKjxSrjjgvSyBVWGbWF4mekifpXStGAM8DWpyeNR8VV3ugM5RqXbeBRfKRPDQPa",
  "key12": "25hE3X9eMvSf7MgFjN5EBQS9vioTrzCE7vES3WP6cjpG5osMEPqqbtELHzXToZb5DVD62UAVY18faYNznGxUmGPk",
  "key13": "4jvWAHnd1goYDKi2BK38bMqANDEtpzqaPcnfsSwZh6CnCJogKZ5aVGoqxt2sutHfxAzVAk1XbP3gbHmy1t5KNcUq",
  "key14": "2e8mmdXV3bMj6FRGdBwdutCH33tKwkPHcohXbFQPSsrKk9xVRba5rXrh7ekfeY1mNhZBhyjFRPsck4WBZenkn57X",
  "key15": "yddkx5cR9E5nS7Yhg8Ry5whywcJMXCQ6A6NAYVZRWiF8LTtJSzi6XATtZhNtRQE9bSaNAHMxtRhhNy5w6265ohZ",
  "key16": "5FMAMRzPeWXjELrgURJ3gHcWD6TXkRaCbeTogtDbK8HSUnh5bnLU9Q1CsQmH99iq1aj7nKjymVc4BXaHZjxDh3Mq",
  "key17": "3evquonVhjNRWJLMo8kMs7cKHycNgrb4h8MWkGoK1n3FFnrcFGiyPKaznBWRM8kfQcAQZJ1dr4tJCp1Ecq9F4rCv",
  "key18": "4TbSaEJvfHh8no93xUTHei4mg9Uu3BmQ9N6QdTRi4a2kaBbSyLzsBD9R4Cabwro6MvB5rwKTWBAKufL9HcHkbZN5",
  "key19": "67FiNgJbn5vgZwG8XHQJbo1QJkTABwDbY7EqeW6j5cz7R4D6SyhYuP2SR2AGQyeQ6uz2ZvaWSvUVuuVGpDcF4Cck",
  "key20": "3scvapPMSS1FD8BUXwu1MzZJ8ow2q9nTcUdjgq4vHhtz1XNmEjdDhtuAxxQiV3hd8vj9rXCQ4d4Cnrf4NmhiqE3R",
  "key21": "2fjzBcYAp5sPQLqkfY8RCjQjpFABzPSneGjnUWbzYbBfXFJKvkp5EtYoZ5a5uGL7dRqS6PTc9mmZ1PoxCPQFvHoR",
  "key22": "2W2Mw3wQbcBRBDucEujtkLuUYdkdqSJRzhri7DWYnbhyFua8PE2qyutZe5QK5Evxu1s94dLJ1vjZDviLh3MnD6cD",
  "key23": "37ZEuPJ2Ez9FUY1hArvTUSaxTJs3ymgyVoyfXwAXvyP3H9ortzAjJqyHAAJN75BLfcbv75thvZHQQAfdpSRKXfSP",
  "key24": "4YaYfSABoZ8bgvcL1LHSWgLpsZUGJdDaoZANnEkfSkVesETysAFdYMgLAYSoKvQQgBZvcbi1o1gLQnvwfenFh8t2",
  "key25": "3Q2qjKq5f4NHPLsb2MhMLi3AJE6Kg7DUwdV8ReDVTCrHvzdErEfTntoD58h1G1rQoWLDp6TJYp8TFm4Pkifb1tRM",
  "key26": "66YF3uXr1fDaxnbQ6CxooHeaQ7CrPVtAfFsMJZ4CddptaMZfCR9eJP9YUpJiUUCRR5cFkWW6rESTqtbK6GRGirf2",
  "key27": "5y5hBt4pg4rdNYUNaK2h8SgYcgo3honaWEC5dbcEg4KTu52S6Kdiwi3vBgkXcNzdpTg2ivdLM9mYVwXQBPPoaKD6",
  "key28": "K4uNFpUeTZ1bGPeMXawQrqAPm8oJxcNDKUZeu7CsjYkyhp7uiKKvqimp8up1Mz3zNbBruzafy7GCLoKqN88cU1Y",
  "key29": "4mufw2BEnDUsZrCEN99y9Xm6n2gBSBiGervTSmyf2JGk6pw4GJhFDk9GdjWz8tXU3QzSTW6P8nw5VNFFMvsLnYjD",
  "key30": "31P13YNxUkuqqmEqezRpmN8SpcasJZ8QtFKWVpjUSv2eEFBCumhgu2MMQNtYsACYC9pzqhZWxCPTKK8MDq2h9RPY",
  "key31": "37BSfz562UcPt39feq5nVuWTkxX8XmAQxft5Mk97t8c1VfoFHPXKt7tG6kYSXnAwmhwKo5XvGXCagtBXjRZ25mQM",
  "key32": "2YNwVYDYBNgjq5fTShjtifXoPvAiBwqZ3RvhqTmkd5eZKHJnoDCqcAA18LMz52aH6YjMwpqqNmtjsatKfRmgt1bc",
  "key33": "AeuzFhnm236pwDHiBBZEB7gUC5zYmAGmNCSNtkvj91RtammDuCfoNxWRciZYSPcb9pzfq8F6RP4W9UTT78mUfs3"
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
