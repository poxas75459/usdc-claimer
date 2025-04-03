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
    "48EpX2eyfFLgwyvo8DM8A7Pi7wqupKivyMndVSuzHbiKafGXjedBRtzUbRZKXjM4wrj2LKwSW9LW5X95o5tsV5po"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54nCT1u9VjiWD1uDod5pxvoHeT8RM9PzxTiWcQsjrdPMR9MQxJ776MNyU2ZFku3Sx1BeY6u6TfT167phdREj2p2a",
  "key1": "5ZWRkMXmH9jfRnXEU1XKpXnmEjB85Kqa4ekEXutrQLobCVwiNcq8VHgGedy2aPZ5pBMJshV14qvrtf8jQFkc159e",
  "key2": "575khhPmcMKCsuVxhgA7y7JYLnonjAcUDEx5ujXAZya9dNSde4bWTZhLir2o2QQBcugEqRToPxWrqL4hrjjC9tgG",
  "key3": "3LGJmT3bzAeUWv7KasM4AYzNGAKxzMjStxkmU7CqZMkLjikv1C1utwwBqJ6WvNbFh3viH8AJZLsp2i4YJeA13xeP",
  "key4": "3EeXw6aPTYEtHDeb5L5j6a3y2g88Cmr9TFSy3e3zvEoLhR5Ko6thayLkxZfHWU9GMYZdmBaV8v7ZFFh8oe5jECjW",
  "key5": "3N3CpKzWX9pDhMWaB3hB886UVr8Z3hmCr8Q4HCqYYwqn9jdeTt41Tjc1QdjHpLYmokCg5CDLgR48VZxTEVpNr93s",
  "key6": "2B8jDRt7C9xH8AvFGqseskxivDEBctMAHcfAUucBrmomooCUyACNtF18i8mHafpqJfVDfwAU7Exgpe2HZCmrQZdZ",
  "key7": "3DAYySYLnA5i3bK29DBM3pk7qjuQMjx4P64j1hzeCFi5kTfkcGDqr4MSEjrsvDoJLMGAUgSLLwMgJhXS3Xz5k28z",
  "key8": "AALNojk1JBL3tL7pgkRVusKMjcfzGPWJyAbSkrzxNb4mSKmYXmCREqsgvTXW4VzDcQHcR2VEp1V9eHHSEQNnXca",
  "key9": "4HHZhLAQwYKx4JgZzMzEA3B5TJvK4Dc6ofGh7uiVBCqMhVcPBPj2S6Pq9juP2T4e5qwMRxzQ4D5e4r97tHUQPhbr",
  "key10": "2GAMae9gMjkzCto1Eo8YwYR8MtBLZBHg3h5wdWdJG31PvRB69G62zPion9x7EgXwDca6xxi9CvBjUVtFQECrsLi3",
  "key11": "4dSkYmxwDJSVJtVmJsdYfa8L4teu4bQivhd59BSen1TRArpH7PpUhYCKreSx5MEeuRVPrGh8YCH8WcDDLLVf8RZE",
  "key12": "wEih7ta7vPj3ven77zV1z14TbJqC99428uYecMSZjjSupftuoER3uNvUvWDNKH6MU14k7G75NC7csrtNp8pkMj4",
  "key13": "2Qxs9t9xwLVR5coe1vqGJzpR9RkekLW2V32pb1eLdFaH8jLegUS4GPUCp7g5xJ1cxauAenexKtBdsSstRTEUCFSU",
  "key14": "5WakE7w6EyfzXvHFFMgfdtCATU83j2tFuyU9VpoX7RfxWZsME5PASd9jnTD7Z9kgj629FpyqAZnJXHK3PvLduzBz",
  "key15": "66i19JxBkbNqjhd3hkmdT8Bub7vdoNhzZM7bwy8GRMNixMoYEZa8NYgnoQxQ15wzsnZxzwacpDAm2psCr24UbrX7",
  "key16": "2W7zA9hWP2Cs7KZSuFvbB2yeRHnViKc8bPK5C2mh5rh4uHCUjybMVGzsg2t4VzdF9cDEDV5zEnGggCQMDanFyzAU",
  "key17": "4s9KMJAjmv7ypz3AhrmDSqpxFKkP3fzkkekArrwSm4sZcwc7RmAtLqWCxas9aFhoxp4cftgT179tiu6LcEBtQvdd",
  "key18": "4QhErY8GX8cUQ5vmai9ahzw4atyW3tpLVntjEoC45ZNawi1ekysPB4t3EpTWwvS7AWHmrj9R3B4NLecMvSZDrsA5",
  "key19": "5TeVuLTrS5oLY9HLcvAkBmM4GHPqo8wXtbBqSu8KZb1TEPDpA5GKAC8zFPNZ6UrqZhBpnZps7kasudbsERHFhUv",
  "key20": "2RcMFythmRaZeybXEg83WkWMkiVxqiyi6T8aVmgEYLuRudNGVX1zJWb7oEzAGrPPrNGGUtyukGt2mqgUgVGf6bjm",
  "key21": "4D97mfdL2jGNA6yARU7TGmrGL6VFsvhaos392NTPKEqKokMJU89zDKwVX9pgczzvm4rJ5bSDzQZg5kn7os1fBxTo",
  "key22": "3dqjc1jgX98oC8P8WrZmvieBrpXiVZWgQrWc7W6zahWSeiKiNZ4a5kk8A8NLtrnVAoeY6oYFVgZLJh2WwKP4KSHs",
  "key23": "3y6HXhDQ4QfKjE6Hko51v3skHznUSoF3Dhwkwi8S9rxLDPUtaJCdrtTpTPHqXTs5VYA4QRPwFc1ihn2d9YDt7mjq",
  "key24": "6vPd3CPpKGDyV65hFTmNdDi6HjUjDxsViur2V6YN5Xp4xArhiH8BtWWksYxGyYLHnFHT2JXZRP1LJ1Utfan5oJT",
  "key25": "2aTgiMmoXneL8XSRkxof98RPjfjgFBawr2mCj5A9K1tJ4HZWyk8v47LrLwSkcVqeJ2zCrPmz3ooMxEaRmdw2RyfE",
  "key26": "4cjFytVSSJrfzC34uCBDiu4WcttG9UQjRn6d9nvCtdCXmci5kPh5w321Mgi1zndvH36LXzV9cP8PPsbb7DL6pWiA",
  "key27": "3k4ZQHLwWBZoKyccVeVVAZcFY213aaDXwjofghoZ3tMvUx6yXYQy6PLLnxdyz9Tydy6VZirzCJw5QKWdUcDmKbeS",
  "key28": "5bTQerBmn74FPqvMj3X2E2jLXEYGmUFPeSfzrtwXrRDHQy8Ed6sqMvjU9GmKx7zSPuXvqBBuWK846zPRV4NVuHVt",
  "key29": "5wEbbYKq8VS4T6sNrE9rN64nXQw4ccGVan9fhUPnWjYMhqogBzmRuhiMrhMLmCqbFjQ2mvheLJjSLMLHcEq3hHaQ",
  "key30": "mWWu9wiqSt2u7LT4a4WK58Je8tj8z9BwdbsVpZxpPyzuLJF6ZHkVGeUHhfmy1tyoJHAzxJ3WwAGiVA32UPidh4y",
  "key31": "nbh9KLVoq6kNHUkDANtwv6fjuDb8vR7ThBSiCMhpAr7Gxmd3E42Pz7W6snqUujMmyMgFAqZd57y8QupAFNfDSU2",
  "key32": "4gHVJpX9PSSCYjPFB4eiA4yaVFowZifvaqJQkUQM8oJMWrnAuCPLmh4rtjQjWH3dud6KinRvgkLQK8mMbbLz1Nor",
  "key33": "sCxGgKgxVVPyhhw6gawUh5cjZr9EMd4RocgtzNT2Yr4EwMhzZ12u97iYBHaDxthXojeuyNBjwtmMivVfSrhsqbf",
  "key34": "2cwFkYjXoLhbLvcT5S3oZ2Sm13vRLbkL63uZGYW7qBGJ74fpGbbZGhHtieJHAPhCEZczAtyqJ6NdCDQ29VdTrqHs",
  "key35": "4i5kBzZuvL4CopCJgE1Q5k1ak3eck2bbYFtreb89yxi91PHN8QANcrVScBVYUZ5dWCmPL6YeShdskSoVEQLdQbAw",
  "key36": "3C3TRaF3kn9nqUhjRdYvqz5PiQwqb7wjNH4mC6V3rQ1srca2cpRiyzUYvHnLnWN2JedfYLvDnh79HsC9QiDWZNEe",
  "key37": "9bFaxh7x49PNAhdSD4NewFBS3A7yNvHRjGAF8AuSnqr8uuupVHE5ghTymWEVGtDyvrKXHJ4VDHhJv9kZgnAqJh8",
  "key38": "2oqHfDWAvAsQZ3yGhYGU3mjbfyzKzghWKasoQKZjLFid8MZkDkvzJ85YFdvC28pa4XkXX6X2LuDm7NkemJvJVeeD",
  "key39": "3Yy5rggth2Dysho2bttUY2VrMjD6gAvqVJm1mp4JD1BVi9XvG7UQg4w58eWnXmtes8JaiNNev6FtLAdPG9KwzphG",
  "key40": "gwGGQPUJB24obj6gFbqFaM4w59Ls3b3z3EAR2viLZqpMucGJvFtfS3D4GRepG6TmDJE7pB5ZgXyMqth71gjsG6k",
  "key41": "3bCfgmZaTtnZ473ryJeY959XuKQFMkFJ4MJFFHeTYYcHGJsoUMtbQD3CdQADji5WoXPn5TNRRHwzhVZhugsSoqDa",
  "key42": "4S4XdB75k5UAfnsfPdooZc5a5LMxxV99499vNnqG3unC6Kenq261keNCe2d5z1mKskid1t7Rr1dH1c6MMMbTDtvb",
  "key43": "SWjpzWZvDsRBHWepjwvyZz55gRJERbMLgtRtbGvqdw93qT6fBU9uVvXhivb5JguSXDXN9oHDBf6b1iMNZdrZwMN",
  "key44": "2no2J8Tvz3Ym5PPX57YtyqgwGQBcGGY6pzfsqfZoRQFMZz73eHfTtkKHQzj29Aub6qN8t5c25vAKzTEx8ZHqjThU",
  "key45": "3aHtkXSXmTuBQUvLi42NUWAmpKyGJA38KuLHvbDygfm2Lv9HDVqCvcSfab9yredcCy4oPhNufJuhr3sdzrck8DZB",
  "key46": "4kJ5HfmRSghYaryqdUrfmZLN8w5D5vJi8HayLxQtc5AjyA9QtCosJSdHfZUPYDXgu5cgXSrFHygTs7rTQ66vM1nb",
  "key47": "2QXQAktngfhNQnYmxCMCrtoww7n7yjsipBLBn2ND3JBbE9GpCzN5mKoskJWPSBvX3TWekUYaLwD6C5FSSVoKB9CP",
  "key48": "3K7zp1FN7pbEhH37guKg7hwuZF7uEv4taWuoVYiQbzp2Xytxpjpsq1ScYanPN9VeKJaXYVEJZn3WKJdf5GAfZFux",
  "key49": "2xvjchnKdatsVkZCKCRCTnZdqV1Su91NhT9c9EUxxXAEA9KdGFqEXMVKuonEvS2SNVNqspWXtAMhYqTCstdmJ2NU"
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
