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
    "4MtoDiyMB182QFXusgYsPezKZg2U8Jj1MzhJyEwh8kgTChUrCoUnqzZ8kErRsmgXgiZLMxc3P2vTLWmo9TiDg9N1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dFuhqMNQe1V9DnkzjSGaB5jV5BZW2vLFYLBxv3zccNMLJjws7MMjQJ3Nv2kBRnzkntqhEsu7Njw4b5RuhoSfsAg",
  "key1": "2EmMLxJtRCYuinrzimQeSyU3QfvYWb2MrKGhRuU9bCtpNKexgyGVm1nBwANnXqw52bWxCa3fFyxYftzvbozV2hwb",
  "key2": "3K7qn88Gom63Z2swduhhKqQ6Z1CDw243d4hU6FRkx22farULzVWPvZDTvjmNAeLNUqKMREHif1kLsdc94j4B5vqW",
  "key3": "4c7amT8kMbMxycxYHWGN4hHcQ3Vj7fPiB2QxAamTHE6DK18CHw42Nb7z8DfvYPewvciV5VZvj9zsoxLESGZRMovF",
  "key4": "4zoHwuftVDgTev3wZMKmiR1Edaude88CtZL3BY78jYwZ9WVR831FieFNdjJVJxdsuJdJepHpLuvpm53z4h2UVh2L",
  "key5": "57hMh3m5MVwPLqymPsGTkWMWzRzCXjp8UpV424gkThwt4gdAseWUCRYepsDDDYegaakGkZfofdeZmg9i532zHrnH",
  "key6": "3HXY1weTKG3EoHqZdEGGZfUtCL1MsEfGPF98VqGk6Q91khpNvzcX97SY2bmy1Lknh64B2Vqe4zzBkWN74G6VMq1L",
  "key7": "2Fe9Kn5qmGCbv4ER85o2SaQBxdNqpBwdijaK8LQQZzCczowa2tFLFUzJPbVkWWprBpqHRZfEfWmJJS8ntm7Ee114",
  "key8": "mkw5zv5FcgjfwbbDzvUkMwKFKKuPKyWZCoLCeXShgt1ubR27m7xvJt9A4nkGiLj7mtxhFw8ormvD8JByh3NDFeJ",
  "key9": "66i8XXkcBkqrycz4oUyNdibbzpatuRJ2jnG6SdBx82FX47YHWUs3MhNz3v2ikQ6JLDFyFqHS4vmNbNPqqD5hCeWX",
  "key10": "4J1siKXMxc2p9T25hRhk3Dmsz1P5gFjua7cCCfKAnXnztqT3qVJfoRuUgwHkizg63pdgDaeryHESfwgfrgqXjykZ",
  "key11": "2Tm5UWPhxQcij9usY8Tr68oQT42LxXHgjqeBvr3BoeF49VWJaF4RUEqKdwyuEAgFARnDymscs57EwyRTbDEG9qTg",
  "key12": "2YJ6jr4yQL4TMbtmjGouo5xVWm7mvfhnx6N2fXSPyK1GpqaH3w3hYnatveBSz1guKZj1KicK99yAjXX7Aq4ocf2k",
  "key13": "56iHvaNKdmvZrpBKc2VQGkdKkZUUf4cHythFd46jG7WP7T3NGhJnmC4JPenA5QEL23TnEVX3HPMDDjCPbBzNuFXh",
  "key14": "3a6eVMkQvKwJv6GKXYXQaPwNwSaf9jWmgMZZpehrENum8c7qSzwmaeCQ3zyHbD2Wc1rcTUAt32wiQWDAMFEUd6ih",
  "key15": "3L3cXtHceLjqq6x55dsqtuUK19kqE6qWpY9p5y6ZDf9abyYfjVrn3q65LBgNQzSkHVKn1wXLcb8wujRonrmYRYAQ",
  "key16": "2Bca5idR2FVdh9ALqy82gjfetJiAX2FQzt2z8BpRtCPGkkB4sURiaw92G7ttTEVcgXftgHDM4D9Vm24ApMRpuUw7",
  "key17": "36TgmfapLpfjDAX67Gvv66GPZyu7m28YC3bximRnya1FK3ETnjdU9AEFc72GMiJAFzrVWsXzYdhqdYr8BLtg68FS",
  "key18": "41rK8Hx6wZH2iZ5GjPGPYdrPjvNru1BqNURB9x2bn9pBCpFkuNmXH94MwcXbATxpEZu9FgvK85yEtACvXKnmiR3T",
  "key19": "53mmHUbZ821RG3vQHfpJuDxm6DM939fqx3D3ZrQCFtgHP8jXVY5KqrVb8R1AZmonU7FVg5nDgxBCkgU5ZtJAm1Bh",
  "key20": "412r4yx7Xc7bDfhV2H2sF8Dk3vEKfJbiHYgY1dD2KrPMjX8oVQ5178csoQSAyqzYeqXxmfYCd72E47oBZQtkU5Q4",
  "key21": "5sqRws6UrJLk4RSZgNbvwYo9gTfBD8UN2Vh7bqXoUCgC2CSgTSWH8iwj8Uq5BdB9QSY8NS8AmGEzMSY68CwUtpDc",
  "key22": "41PcNzw2vXWRWgBTUSqTNBH5EaKEzPomjFhaB9zUpviEQmgLTT67FTUa6mRn1Tfj75hzQyV44AESu8ifZRVfuf8J",
  "key23": "8VNbKAkTg5N7jJTjaLFRPTMC8oL1zDEG7MYqS26ud65eutn3931jhtDxebvp8hEw6au958a1bFHyVkUVzU49VZJ",
  "key24": "5cbwRfERZRquNJoddPgzKGKLrcKEv6Vg2EdPoYWHQ19vWTPw67h3N1NdWUtBZo8ad2CwZKi9QPD8iXE8afULWfpn",
  "key25": "5BDxw5YKGYKTD9V8R5pBeG4YkRJKKE7mUpbhomb1zUtGS13CNzsP7RKb39QeJpFwNGJXikd7zGpjhTh4pSMYqVCd"
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
