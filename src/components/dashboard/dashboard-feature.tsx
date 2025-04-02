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
    "5jzx5pD7AqNjSFFdF3oJwzdm3waHyXane81qgQR3RLqkyENGUrqA5J9zD5yruV5GEYf4pWUXizK6yMtjEWXpzw9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B5VYP5o1aHA9G1KB5ZMasnHpjriviPaZrTbrW5kHpu1FUnCbfbinzsZ7Z75EX4Sbh9dmFECqAJaeNy2mC4bs9k",
  "key1": "5fZknipkWCpJjNfnZHMG1FUFkxKAis3fGsF7Xc9BYj3gr3ZbQBkcaziXMW1YNxUHuNMdStbtAwLeNhheSExVkWoY",
  "key2": "2gpd2MJmkmGmsdYHd99vvAKcJw1koENSwKT1reNJeWHfZCuBhdgyMP4szZgjmaRodTGLS5G6rZUVXtBM9oq9LuXf",
  "key3": "2sn3odHooniB6uPobcQJSTDL6qqtZ6EV9SJybEhSYUHSjtDuuKA1hak4JP4MzrVoMn2vp4KW89Sdmzbi7arjtJv7",
  "key4": "596YFFVuJ8PM1eCintTjfXiGXGUFoutuP2c4cfjU59hriYdx43NXK3fmPGaU3TthDWrYe6CXfMuCyGf3WNorjBYU",
  "key5": "5hberdgeimY1r1bQ1uC3uKGWRFPZp4gbskCxiZB2js5zp1ChEpJS9Cgyb99hiKQ69gyzwVNMBux5sTQHqUt7quWk",
  "key6": "46m6ozErtWBmYeRVpePf2ac9mLDJjmMFWhdHxm5tkfTUcVMq7Cuz7TWh6XL6GJihpNZnRXu3iedLtuxy3q8Ww4Jm",
  "key7": "2cuj5xyncthwEvs3ghURAyyTdENpwwcjTJCv4841PgWLYLNeEe9WU8URh1fig3ZYqW4xAqYpfNs8Rvb6Dvfc3Yye",
  "key8": "NruZDUMiAsnXH9rmTXvKjuqWDnZC2Arua9m97E17vqngLqRkSbQC3Nt5TG5MsiFWztCQA25XmimhX5dZ29ne5ri",
  "key9": "2BbYLU3EYAV6qZ6PdJ8EQTygAMocQPUx1Uqx1v2Y6g7abHYegoCbPAAmZTUkNDQcLfHs26JtJfdRmfXCSfoVHcZE",
  "key10": "pJYNBYwfz1ZRt7XZ9D81Ky5yncfzgCZSxJdmAwyDNK6iPkxWLvfNLp4NmhYfCiBECgvG7W6Db3zUYwUEN2FEQCA",
  "key11": "64iF5L2AtzMmt8ogh53j8L8eFCiG8T34qcJ9tUAwg3MBHT1WdtfS9sXxwK6C76x26uPHBd53t2BhAqDV3KW1uGEz",
  "key12": "35r1k3gfDWE71TgfUzu7JFY1xeFtMKjSS87WTyj3SH7nkRKVecVeJmzQzsWVXbtjY5GvfhtWfkUCcnfNcVAZXpHv",
  "key13": "3HFrqR6pRZHTUd8v7EnMot5j1RGzS1RHkkpVUGXjR1PrsP2cCeqqpe11Bz3noLEUA7UmousaHS32XgbnqpsUbaQX",
  "key14": "2bmxsKC9xcUfjDLy55FvsRGcxexC2pNkbkzFrPMLHchhgW1VDb2S5ndxJrBwfFxvcDBXnAi693xGoYspwraeNBg8",
  "key15": "gMphT1UoQr5GMGuohLwErnAwVMzjRvhRm7H8EqFLt7Qrz7jmaX5bLjTwxQa1doAdnVhffQizcjuErYxKaPmTNo3",
  "key16": "N6vhRfyB8rA6DjdCnkVePnU6dv9TphA9S7LayfJNL6bLmKBxUtjcozN3YHmxbcs9gVLtANTiLyTJS4Bbh4Wzrfx",
  "key17": "2EiZKWVYkR65VqCJMKaqYjnJwxd6qaATFMhHZ1nDc5vdXtMggugvAyw7KFGR8dhV24jUmweuJVXkim8y7Eici4id",
  "key18": "2GWQyJwiHReL1Rufg5JwS47ZY6Fp1gCvRptSHnk7rS3zDioqNcsTePPuYvFcMxESvihq3uriVgmEALNxfTBRM6Gb",
  "key19": "2askxxU92dDvqcpjquYfnBc4oJwQ1eaVboQjmHSHK2Ghij1ejauhQKpqKVRfZ2zVQLBJA5pzFwybuQEHKwyp62ra",
  "key20": "2Cd8F84QsSaSXHQ2qckQXdFngfWyjAwig7jBLHA3dqkrL7y7YM1Xv2UWfiN5qEcYfD4RaLPZxS3yEK4AA6JmjeVx",
  "key21": "SWvAWd4cDZM9PCLRxYt4EtzWeXJawuPfn27sJP76DN3vFNqvuQk2DUFWH4MtcHYKbPrkEbjggLc9i5my7nMTTc8",
  "key22": "6kzupye6WqjqbJtXt9Bt5GUmdTkwSREGtXZem9mDUjKAp5pTuz1tErYPC2h9hsKk9vZaPGdFukwkUuDbm633tTo",
  "key23": "28xKvNqhtdvyQej4izHE1AfdnuQBSyL3kngyJJgXi5wrJbnGLcEyf4gShY3gGhpUVtFB4tqbpMyxSAdBYAaXW5uX",
  "key24": "3ugHnrYXUnYEsFSPPUNLVtP1Hb2mrD6676ptmrsj9PQcUqoiBTVgmnwvuS6g6y7JPKQjXfZDYUBaxBqbhQX4jGnp",
  "key25": "5gkQ7EowGAVtqtmCR7oAR4m18fg1ZqSNrvND9fQHBtvbFkdFRnFCAQhCVuTmiyU8oD9xeGZRAXQ2G33V9gkPj9qz",
  "key26": "53R1iXKnUnEzUFvqW59csEQx5wvVXxiN4TtwPaSfffNfddhvzAPZaNaY4Q9G63eaEeRZDBoRYH2karcCvZ8RPeJX",
  "key27": "4tgDH8D4fALBhZCsiVX2ULFY8fb2XoLido9N8eCXfZFL68NRpwAjwApbTPdGm2cscqyJLNVU7cuZQDAPS2LM4LcR",
  "key28": "5hgaVK87pJExA1TKkZhfrHVEBPyAK3wtxZCGy5g94MocLtyDTUgUMeLNWrqGbaHm3ehbBJJoukY61QxDtspzf6fc",
  "key29": "2mEgG8sY5EnyLiGLpTRBoWP67xzbBYTWBKJSMjAdMtZnW8sU9AVcd1QmsnsF3tfVwBvgGTHHjttrRva3EYRW4WWT",
  "key30": "4FvahBfiGEvRQPAygn5v1JER7W9CXMc592pK1SCXG2G8wwqkrEwCLKLLTPeMohnDZfXrimkYxiab54BfpKqWTgZ1",
  "key31": "2Mwvy7amM1HFwJTcPNNgHBxL47yauAix3a7i7yxLnmiU3FVUE4LYmaQMmtMFUXTYaHJ1ZWe9hUZw6fhmy5E8q2EC",
  "key32": "4DuVTS3WT8wKouN44v4o7R85Wf3oWA6G7579r4AmbVWvqfCwKhQwSmEFGpYnUmyEdL7M9MEgvFGT1tmXniFSGWLX",
  "key33": "4rzedaYWaBcKTnqd8dv16VgnBwHiXfukN8812qdR2a35ApdzJokkpxnt82CUcwWy93sLyTbK6ZWvEKnRUcwy2Xoa",
  "key34": "3x8kD9bLnjCVxF16xePQ5LhGq8CEgh85SRLe4qcN5Vbe732ZwtEjNwM95rddzfxiWC9LDQxhBEPTfJa2NQdc37Wn",
  "key35": "5VHZWr2Q3y142Nsyj9FTFWSPCGJTvdgfvye76916sNJn1YXRK5jhmb4EShoEMvVCLqfRMt8cXVuDunNhv5joBBd8"
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
