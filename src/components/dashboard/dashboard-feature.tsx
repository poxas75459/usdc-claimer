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
    "4DMsfcvPK9Ufm4S2Jgb55n69H3LXtBRkwdpSPDug1th5bxXSfJ83TLo8jgihfZQAbHHSMPYKfhG6BmciLeBY21Nw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ML7rQizxkSszCm3sRwFDmnz3um2YGVuP5tLKttPdNjoRJwDBpzsQA9LLJFQLW7DrhTbyQGvQiaxErXpQDG89iZg",
  "key1": "H2BahniSxWAXMffEorwMaVG8xLmu4sA6T9FQMG8RhxJjscRekG8zzUGSnwLtFPCF2FqHXgtHCDeyPJ4nCzo6PND",
  "key2": "4M7ZLQvTFf9xPHGPJ31fcwtxQy1DUFiwrspdBQXnJUKX9uBEWf4Vv8UrSeM83ejEu1tC4BVUoxSY9NRGAqjTWBUz",
  "key3": "3sLKiHFPffDiQpzjfwSBofTCSciXaK6d2qFcT5aw9YyW7f3wWfi4GF2DgyRvRgNKxLPvgEjNA9RiGYDLSyAhc8Pi",
  "key4": "3P6uwFxDQCpyDemcosEcsuPqmGZn8TKmieYTgD7Cb1Y8YquVrkEMaLFoeGc4nj3MNGjQqQ3xdvPPE57tRzn14kaQ",
  "key5": "2kSpr6oqNtp6bayeNYxnsEhhyHxRBc7ReuDgWNwtYTtZiNa3VxL51fN4eSVtjAS28yEBztwsGPHyARKNWvXqChsz",
  "key6": "26LdTHfmFqe5FPfq92sjqdaBzUcSTm2iUJgXadQfsMhZz83jfzVcz74cX5Gi2NWz942eyC8ZtBruyt4MjHxbssnS",
  "key7": "4i3czkzfMa1ZwDX4rAs6Z4MDaSqUR1r2aqZcXdaHWLqkbQ82o3jx8shndPLB3NLD1fWhz7N2GG8S2PyhhN7Bhcvw",
  "key8": "2m9Brxz2mSQTWtwDv7AvNiYELPmVnc1A8pRyQAqDZZ3EYioVqiwumxSmyS6UDJDbSRoHb7b7eYQPMpxbufX4GLnP",
  "key9": "3wWW9hFGpNamQcj573qZYdVqPBuHxMkCLLxXrUjkBiffJPZLQvMyXd5VtY2LkAdamXGvQWmxG8h7KxgyyromueVB",
  "key10": "3BQrg2ju5j26NE2vAPXP3C4tYTzfqonb4yaGusvQgxEc3FuMd4eAmUAKANyiZXjs1oxD8rDZ9VGerrECdwHs68kp",
  "key11": "5ZFCKhp9C3qBHeiSYDAxEwjTBTELeWyDUbjka1fe9m3UfBfcYnUcJD7DuUxGFpfStgE1AqEcXH43cUjNzG2RWy1v",
  "key12": "29puDLbg4vp2iZCACzhS6nsx7rgsc9eMBzReLwEYrDV2y6arvN66biBeF2z8tfC1BbMCsZs86ughHDbanePXHXTU",
  "key13": "6ZdwmMxeo9Yw2VHgswTzVAZXkiF9s4qVQceKCCgHKomaP32FzUrQHnHvf5mCbSLEwtmJ421WbPKbCorP5FBRa92",
  "key14": "4rbJgnYHXKR1eLQwg9LPzcyS1G1xQefxQdH4XDQYiBpcRbdZiPw34ccnAAJBxUvoS4ByKbFCnWRXADPUoibWZERf",
  "key15": "3QPPZFGzivFiJFKvPVzCq199A49cPk3tdAb6BSCgdNKJjrBsmMm7BeYTyJ5LkCgzduaMLHXnk4Lu5ThQRBstbRFF",
  "key16": "TEXEL22kFUjFYxrj4aCVjWXnN3dsjG6FuCwk1mbkCnYp2Y3rVr4FekDL5dEFwH2VwR8DZUbXkXzRBToeFWJcUK8",
  "key17": "4ViDKa2fdwScqTzWKETW4nNHoaNTdL2MZC2Z5HQZ79CQg4u7S6DgwZMeCDcmybC2gnR5FBVqAC7Ud2crZjLkqUsQ",
  "key18": "Ji5WVaRW4qWB3CpF1MPRYES3TMbY41Cw7KpceorVVoKjFCAf1kgjB2um1s5w3PSo3KyyNmj7EpoJm7N3MDZHxdb",
  "key19": "4SzUDsYoA6uCpTuHh3TQaCvRxSG8SwNBSFyEv1Sk3aN6A8iD61vH4rWdLyNXNQ1UijSHTf1GqWWazMP95vNCvLh5",
  "key20": "2LeosF8R5YSj5NQXmTZepFM1Ar4mPsfWjPXenJqUVS7gfXmUkoSngUemwY4JZJ9nX771wMoVD5iRMaBZ9J674Ssn",
  "key21": "4SjZ3E1reZSA29K5NYumcbnsik5a5KFACrNwfcN1fFRB38rYkWA6zyD7SA85koBKxk3MYQfJKhPba31HR9VqrYq9",
  "key22": "5T69k2mqkCpg55YS1gBuj697htRB8KeY2sbd8YGVZ6DS6mn7Q9isfbKR6Z4towG8KiFsixeJnZ2wTteLd5FqW1Y1",
  "key23": "7jZBsw59gHAsCYVsRp5RL9dGvy1jte9JVUJTTGfkHAcaMtu3kQdnreqCCyUwmEMDY3642SBtfEyNkJRPhTgC1xT",
  "key24": "3Tm9UwPpAJ6VWu5swQCpAJqvFP3jiXQX2GVgsQDCJCtvQWnkyxwcoUVs1JcJKPpvXn2QfGJARshJPmxEkmBMPnGa",
  "key25": "4RXYj2JuSmmzzkGkyNLQuwBST5JHHvB9PL1mg4jQKpYfoeLqxZeYYhNaHYcYMAQk36RPCJCHTzsL3EbhBmUHpk51",
  "key26": "4SYCzx15mTe7H3yZvxPEdKXHeXrjfDY5hvg1s1cCn6TyTYj7PFTN7ussN8q3f4EtZiyAehytp3zjv3ijSKjZyFMy",
  "key27": "2bB98fTBYcNikzVTCs9UWdiiwxM5cvYsqa2jPP26azCu26D2ufpwUvLoXuRYQuW2aHdkgD24Qa8aqzqKNz7DdE7c",
  "key28": "41FF3LV12wDjM3C6JWjKgbvftH7h2nSEpipNuDEW1Vsg5iGuvLJuBiap3T1WtXi76kw2asmHPfcuU1Ywv9uu2wWv",
  "key29": "51aiqe5b23JYE8g8tvMxttU4ofz9KkpTnftBRtMjmnbAhMYWAp6t5LkodEbsToanEkkSqNj8rpZbMwbnFY4CvPnD",
  "key30": "4RZCSe5soXRNfSLWaHYbxPXaDWwHowCHnG7fjCbunLrKHBz1YiDidBXsqUNpKbjVkTe5qieB4vSUfVZGh6Js25ja",
  "key31": "5mWdmG75y4u9b4Nrh9q2BB3GZa5fXEQhAqZs7VhjS4SEeLJdxBX21c2Kj2DctK3PDz62eibDSG7CeDk6VnFJpjdP",
  "key32": "3CuwrH3FK3APuDFFytBxT3iaqb4XasbUgpuTZxb5rTCLjFimfNERpaxBRLHMUF68P1WUjhvNbXzoysqTvbLmewD3",
  "key33": "3KcJF6d39YzaNyU9fDjd4nJq6emX411rAJWzUB56tpsUMPa6NpfYNMfWszQRN1ahsfbbXw62q2oGzeMiPAyKffFp",
  "key34": "5AEg1TMMSSNu7AT4NVwGNzUCSadqhM1pMuUud9wEuHsGPs3cCkpAqZ4G5WXiXU21ddY42aJYYWZktoHwY2j2Y5qB",
  "key35": "2SYRi6feiD5YVcvK1jNpjKmAfH3giChVdcNMZHwgyTZfKKYhgrhZnuqx7wWkiHq6Mt8yBfTiBtn7pvVDu8rKZhGu",
  "key36": "5oJZMsAXdTQC1xVBZ8zQu4JuVNaExtaqvxFV1yHH4BLW443i4Y4mXbrvngwbi2JqQ739J2WpQkUeVG4zBCJWpgfm",
  "key37": "3JgPuDL156yjKGHKbeRgrMHBXHL1oeZHjLBW5VGoVpC7dgpbK581V1MbeuAGSJqoX1TusMVBeZ9MBPkoRuUKYTYj",
  "key38": "5E1nTyDEHuiAxhvgDgD7SKVR5qZLkXdKmHQB9gCG4JksV8qiPC7Ythi64PZN2BAP7wegWKiK9shfh4sNdY32MfZg",
  "key39": "4zv4XNRqzzHJ1oanBiziqwbGm5JVz49Dbfmwnww7q9bArDSbn3iQ7PQgUuHqPbP89q44PK4bCysUmpqjYLCVYRqj",
  "key40": "5WVBxRvf9FqwmY3N45yxfrvJbdzGy3eNUXSnXQSuhpgtW4DN5odGTfMHhfSCbyHrPLefskmjFgshXBYZn2GtezUK",
  "key41": "5TZJg5Ka6DcgFKuPrmVVCJiRbJSfhhKy7uEMGBH27SLpsMWtgHrTshxQEN8mtetcQgVdv2UwvwHBMA8YTmLGytHo",
  "key42": "49Gup5XFtrHQfhZiWHeExsQbpxk2vAfZhM9S5g3sPdCaUkaZhg8wZoN9z53RZAak9RLmcEVUsTxEbg9skKB4YMbm"
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
