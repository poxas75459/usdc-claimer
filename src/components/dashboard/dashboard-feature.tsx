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
    "2VRuStRtMX8jehM1WqXBphd2DYUwoggqkb8kMVV7gAWHgS4LsDrscs5nCCE7h3ySe6PxWEsnAa5Wja4SCFt37dMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g9BfRo51G7R4Rg96iGQDcCkdoaRhoQccPK3oCDc839x41hk6L99GXt7RfgKxTsw1k1nmMPD49QNWKVnkdK9AnAW",
  "key1": "2d1ydVVrmAqKHeZxSku8ox26agaXoUm4U29NnsaBwkEkCT6bj8kVkkWgaihyz6FBi7woHygQj9U2vCwMjzG4mCtD",
  "key2": "52wxHu1tm58UhJzhzhJm1RgduYipFMT8b8NYLXRUVvwf4HEX5whUQfC6k7MxqCAL8u2yVcuoL7Xsk8tytjonTehf",
  "key3": "5ChuYiunSgB6L4jrJiA6jGrixkY98sdJBr1MLZdBeqjVRGkWGCQoQEYgskXGsujRLmn2w518zQ6U472xsxp6DT1f",
  "key4": "4X2JYKFjETmc3Rqu9KqKyTDJaybtkgVN1V6uNaFFptrwooTTKjx38pRXN2AaDLDr3UARjVDmZqnDYGdUnXHPWBjp",
  "key5": "29nDBVKxsop4soFM8rTyzkXHasyzX7Ks87EpzLhBbeG2tVwPgj4nxoes2TNcZuZGWvt6xHTB7BinU3dmwpG2TfZa",
  "key6": "5fHwskHPNNURVXYwGTA4n9pWqYbonPB1VCatxBFUp4hwrHCnAXkfmxkqnKoZ7FmupwewgmxzwQmi5ceG81hrL9UK",
  "key7": "24xLmsr8WMAHFL4hsr5b7G1RdcvLGyLKJpke8kBQCgQHRXhznPVC5KipmzPCKRmineiQSkQWLHSH4aP5gQB6srLT",
  "key8": "jEWZ2RNZkxHtQMkG7xTscDSshkUDAYVNphPZziHZrnzSe5UjHNMRmXdontPYPgKdUrdcP2MeNQtufD9KcsmPhbC",
  "key9": "3Vjqy813XKX7xFWtp3puq6PT1srXq2bjd7azuGXGFTjxUb1MXwH8QTXbxnjUxFgjaABVMVt5XnU7xc4tyT5gTk4F",
  "key10": "5rzwbKa6BNZYg8De92zzb5fDPDg3XY8Khq6ehRrpSGjoX1BBzXqmVdkLCdMaD94SR56iMbd1j33Zx2QV96gLVpCp",
  "key11": "2tKnu1nYs7sLR5DZ2356Fc5wRA1vD7GXbtUX7L5vcCYpkMxLzjYieWoHmLsAoDvYmtgctFUGH35eSgft56Pby1c7",
  "key12": "xCyEENxdNU4fUbytPXzNgyuep58ppQ5S2agrT74K79tGGeCXoXQCsrkzyXUwNqApHJ7B8yRBoASkfGvyu7HWPk1",
  "key13": "4aFWU8vRhCs4BHitNMr3ZWRKtSsezJNBu5iynGzKYy6CJqtKBeMWBDJwsvssPmymJtGHTeqkGdZoziBvB8RmMdDu",
  "key14": "GFD6sg18wpJVkmjkQbtrhg6UTvic2kEHUfbYB43LzxHXovqy2AhtYf4oAWsGWPns3k232po3zitDVsKKLubp65q",
  "key15": "4h6fbcPajzuC9Hi8EuexcEif2WB5L4nwc9aR1QFtgUJ3rhbrxLMgGwS7oGeKLK1zL4CLgadcYTzzPfHvXP7LeTMb",
  "key16": "2t56y8RLYP1E1VTcwGENw4ZGFNZGJqTSREp7PtsBg4RG9bWEWfuVX3sF2UPH7BSL2rZ13rL9839hzTfdEAyB2qqa",
  "key17": "4M9NWbsQpCp3RBCYcsk16fJZ1NctRJPFgvB3kGtvJtscinHaAs3ppthBvipa2et6XsTw3BUTBzTNZouLVggJJUo2",
  "key18": "5LQt7zQm53FU8Zjgx3gb3PmYfSi9dakYfN5fHY1vUcXGG35u7rZVM2JhZLXiTNJT2WhsuELyyA4jq8GEaP3pAWat",
  "key19": "39pBV2MFBcN2B8MMYi3zQur7i6MnVGUQoKpmVuQCtyk9HS6pQeuY7sCAsTyuuPP1KBaHLnPpChR32ZCZYyXSYx8g",
  "key20": "2fhgPqLQaEeqp1a5ZqdpCKPCsgqJm4TbTWuC3A48Hjbyx1wGdizhMMbLaw3jyMdupRpzK95SYtztPRdBfFMYcqXd",
  "key21": "5nY7AqazNvEcBvLgF4D2X6UZREMGqGyYJBVvrpvj1vDstkyH7YtUtLT2SdeA9hGaJbpQoNGhadTZpJbxNYrcAYqN",
  "key22": "4BEREyojTTgnJEW2MRXDtapxN8gYnkFNY48DXu1jqTuWg2ytryDn3Qgw1msMSBQp4VKmp66N8wZmeKXQwvmdgWBs",
  "key23": "yQc4bgm83mK9jAXQY1gXSJytcrsVWZg4pajbke2cPjuYyMWBR4XdVhETUAiHymzi6noNyrXpWLXzQs2cbhynBpa",
  "key24": "31FmdH54BvhJcaG6DdWW1jzywP9hREnrAzWEy3zjUirk7ohFabvS6fBGQELwrT6i7A9Do38Sr8d7dj1xd2puNAES",
  "key25": "2PsgLP1SuJpFAs1dRexjP2bkzjcyfhAiBqKdYhGGWhRjGY7HJi3rxxgBUJQL6mt9cb8AKq6zuCVm5XLB6BztRRN5",
  "key26": "RsLXLrCbaniuQyQB5CFKiPuiExCfGu3YknhRXDzUXRsT8FKUeq89LyPBDgzUn6bQWMETaEErmsGkBErS5Fvqm78",
  "key27": "3o7ALCK4j9hdrNh2yCvHiRHBcWV9nRmPtBKWeTChzbosuWYcCNs1EZ15pEvNXgBAuSauHXwCTzJKxTx9Ysjj4cJY",
  "key28": "2RdSfx8Nc1KC1CjACpPhW4oA7P6KX72gqEwR5eNACtgv3ZoeW3tu9dJu88NGgDtZD7hfiTfZBfEcrZGkTxe8FhDx"
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
