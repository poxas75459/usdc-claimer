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
    "4tdxXbyVPWAYSF2HfBcoCx8QCJr3WrTvU6zLj6MZQnKsFDF87Hm6WCdFe6kNsT2i9JnfXLJYLtYDeouJpsGG62yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GKwP63GLbwcLQicz5NGh8hucuvB2a9anQBdHGJ7d3Uka7RmN6AqAd5zQGxpiziwMLAokNfXNB1noaBX4p34qH5i",
  "key1": "51d5gDJxCv7bq76aCZnCWj4nFTgnw8Tv9yHFdhNXvfR2moWDTJkyMX1GXnzenpvapPxMWPHGND6rYsD1cSidSG7x",
  "key2": "5hEtdKdKf8Dj6EyxcQgWZwCDNh1cdBNwqZhqGkiUK2nWTDpCt1EUmXV5ca1nhfEJSWANdxTDX1jEqUpMU1n5RuHx",
  "key3": "2utJKqLjhsms5yEznVyCXAyc9dnfk6n8xboShq9GZDmTbBr7WH6Lu9tNbYvs4k58aoXfaG5NfBbLQp5tDF8dpB9R",
  "key4": "5d6aiStLuRBsbp16PqiFQfRE6xQkoedyAeAUskpsVTXnacPHNjAuar86kuQ6AtkpMNvky5gnMSBv4zc8QejTcTG1",
  "key5": "3AA13JHgBroYEmBvveutYjC4V7CiDnCm4gyPxiZ5MeAG1uxmP8LUbqZ6jpcWmX16Cx5KPcwoSfigv4ym2xPjBcDP",
  "key6": "5QuM4oDtjWBnkVceybAsWNvWT8SDAt2R84PBCstE9w7z8SwcVPqrQ2G86GLQNtPXsZ8LCmb7GHrVCWihr44bU2Xn",
  "key7": "pUfqNY9J1ceXuThbSsZ8qgFqxchYGhuaXjuMhY1a5gW5zNx2qcPk8BewF93RsxNmFBLcZUPMB3xfm88JHFvofML",
  "key8": "2Req5LT4yuTV1VTEavFMS4suAyw8wBLHEh2y178hQAuQ8S61pw8ov7xzNUa9S54gw24yDLUcLS7o6VrsSTagURnV",
  "key9": "39nZhccmRbsyS2BohDv6QbzRJzKB5vmW9bKm5mY6HH2Uap4LKy9h1tWM53nXbTqzHCPq3UuSkfzeEtgcvPZnorRw",
  "key10": "3K4rstzWSm6gEnUDVyq6wBXBVR8ow11qN6xfK21CgKi4kB4K4AFg2FiwLNAAJrwYFSJrScYkBUC2M5Pc68KVeRCn",
  "key11": "5scjqHHMNwY4MvZoEn3TbwBUHUpCaoiWPVuWczyr4ZUGvdzhHVqr4YMxF5EhCdgY3heUy6kPiC6v71tNXdJgxiuD",
  "key12": "3mT7L2kzzPBQ5AaynSJWJ91dkeL3zobZQubA4vAnpUqbGLoUF99hiHh2p3WSegm7p6VaC7fguQrtjQaLDnHss5ed",
  "key13": "4qsUaiz7sWm5ANXarPeBaKuSyg8ku3vTZMB5jDNVokhUkGaFEprJg6vyPaNkDVoC6ossJp6DewrK6aoHxCVqKEsL",
  "key14": "5nmwfUBm1r9x7JAGeyUmqyGbTJ1ujvS2GmP1t4ZPXaUBFhRjJBKzVWMriYnZz4YLppeaxpEVoXyZvJkyDog3aD9B",
  "key15": "653LfR1JeauoFxfT5VhGNHABLLcj26hubNBumRbHqCLoCEDN9Zo2wETGkKwK5URSiHsBCmxw2Fpw4x9ZsUXx4njP",
  "key16": "3aB17MJMgAJFHYU6gd6HtqR4kCcAtZNHnrPeyXJ3qWs9hBGXwvABpSPoX7fp4qEtXGgyDpsqjqHUZ5AC7rRfC4Sz",
  "key17": "3ZfqwfRDh2QSns83jBoQyhmEsFDfFgT9nmQUbBjWarfZcTHEsf4LRBkPzUAr9hGjkNE2KUUXh1w4fWis5pa2siCu",
  "key18": "3q3CPbec93YBbs9cXwZfTnBNz9K3qqgvg2fvS7DvqYNwaDcmkVdsfBc2PaJ7xHiJwBd7kFoRRXUeuaVarmafdBSG",
  "key19": "yMfc4qWYsAraWuWEf7QNapcv1dG5JkeCoU3ouJzEfUrtPG4381T3ccm3qvGpZJchdCiwKLc9ncZTg4UWCwyzona",
  "key20": "4R9rp2zHUm8X5mvyijwFrDKQSaWMrGKSp8vZiDJ8VuaGTpWHpHhvf1bWae91Te2zHxDb3gARcButmZXe4wKQUShf",
  "key21": "3cT65Tx8jZGzbM6v6EuZsCdrHu3LdiyCwhSBASEjPshGcDJbsqnFNASsVVabkw7HGMPY9ySD4jmjYPAhrwfXSsKu",
  "key22": "U4zxwvpFREeoK93B2SFLpVwkbZCvxsRc8QdaNG26MX1LypqzqaLj7DoTCCNKE69X8TmGTGNr5By554kAJdeESdD",
  "key23": "4r46PMoZSSzHd8f32rSGuitsDzYgq3oqRhw74t7BfGbeMEi6Rpfi9MLNDErV122BaHsiRub9BVin2fKU1meHrPG4",
  "key24": "2xb5k2JVwWqyG5KANnnvyCXRozBqgf2oBZBSRoPXigd4c484KqSKdgNGLsUyz6tYei35bfEgoCV3vD4BUF3DYCGf",
  "key25": "2tCMxMmwEABZsXu4b8QnSLPyePtfzkZn79xVt2FirCaXzkMZfbjHHm61mNKsFk96duHD6v2ZJHJLcVtPQqHpZwrd",
  "key26": "5oUSzcYY4Qyo73QiypAv7eaP1XWU2btzz9GgCjvzAjvHfyxzwpCuUz8FoNkoNF8xmCvzP7PBnWs4fWkbd9tnFt3z",
  "key27": "34baErDdVWcsGjdHfW8KiqgcbZcnaRWL9MWz3qb7jCBGSzGWLZmbxcwk4THwEvAGXBAhdpGshENHnMekewCkuj23",
  "key28": "5JWyUiWubssvNugtpxT4tJ8wN22Y7Np2cgaUP8SiXmg3J7ijcFgBvsuBCTvmwd6XGZzvenaYofX77JSkct15pNrz",
  "key29": "3LdhFB5nNL4bU3cyRhspJ8mAAghkrJaooaspc4MfpKCW7CEYn5uW4bJyFhb9QPwKMZqXymkqFsPP1fDQhHL2TnKc",
  "key30": "2H5ttCY7KXRVZ1fC6X2n4XJyS3fevuwQavMeccjHNzeHGwJA9GDK6ohVopTJPUrzdbw6JDpa7BuHXL6Ff7V2r1jg",
  "key31": "UyFNTVm5XDrgcsnTmm39MWqJ3RjAN2Gv8LEdrDox1L2L7wjYfPvvRKsGAZCt9oyr7WfmM9nRzrRnSNbPEGcfrRw",
  "key32": "3xJ94XJXgF3ZvRnhhj6QaV8i1iXhmjhtnMqVhwqeunbYY4LanjfJq8HA8V4PW34YcHHuWsxW2J7CNXPJxCaWQEtD",
  "key33": "4h8SEn96DPz4HX8bSJoXcHnrjnjrp3QvAkrrAwEypkDT8araRxunxmwwc8EsYote7YLNbMuWdc89p4SfiLKKSfBW",
  "key34": "438uPAW9xr5Lp5PaMd26hTDqifQ483cu6uP1Y2sC3cB54jdKrQLH24ZAHXUhPcU4SNqyboz6XApKABRpWAYc65iH",
  "key35": "q3ECxouDovTSGdAifBs3PYhKa1ixnSy91oqo9Wvm1x65GxbcTbraPobxMBLrUm9bDQuEB6nmyrprEUHfihQPTgF",
  "key36": "3Fv7peMsDRVHmPWUpSnMEKFvzHPFAM6Xt4oMcoy4Nhpm5rsxgtXm215JMgpYvNG2WRCVcgs4KYKd7F1CRQqHfpEz"
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
