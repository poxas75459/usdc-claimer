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
    "5qGS7oKbimMWUptSHoJH7yiG86nXyPMCwN5nvnDfvTy4c4mwvvs4nuzrQTopQdZVa4ZrbGwHnPL8nxifESs18sN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fUwgyUCbe1HX8J33WnkgBCCmUq6DwY7p3V4kbjh679UQbQ7S65bMLBqFR7xXg4r1f5pKv5ffeLJy3rR6aHSKFmj",
  "key1": "5JVYsU3JCstANvjPLdUyFgXTrjF94wEpAZkYggtBRjsfae6BZkZ7Pi1mWJQTr5MSVka6EbGAkC5VtTdJPzUeyBCX",
  "key2": "2q7XJJMFZojRpuuwJZCo49KKXzSg7j9KGcyZVZsbMuURfLgKH1nVstp8JmNWf5ouqKSkQfXej9VTymhT8raWW88U",
  "key3": "6QeRMH5uu2yHuhr7iDLPqqJZwXhCGX9DjWDVsjVvP3NCTHKM9aUtHDHqzHE88SpDeLJq5inwMqz4xGMsXxh95Rd",
  "key4": "2tgATUySovEr6Sfi5vuAfQk8gNC4KTWJHjj5y25Hc5GjgCPFk2SLdSCiBCVMgj4a7DrMKbswazUCiUdJ5tWbGL67",
  "key5": "DRygGLHiVHrgX9kFBS2dAQfa2VuuUEsZQForAewWZkfX5aBHmzzswgX9q4sHyGRG3FNzTMBXtkqy6JGPX4GqmhQ",
  "key6": "4A2uCYQ5rMZCcGN2CpxfxULZAMCvvWQ3T8QsLMHLKbTvAHFs7daMZciisuxNgXRHJjnRdRWf57CVHDk4aT1y3a6j",
  "key7": "ZLCiJvt1oyhc92RuKfodxqVhaSGQc5mzNaF98BVhjSPVgP2EKb4J5uuTdzvUFPd8uZayTJA2KrBvknZRW3VcgNW",
  "key8": "2xYRTUFaFR3bQ3ttEmJxKitJKN5AoXVychoNmtDSTuT8kyf4F2XoGoxqHdgaDCJGfmGWPrg1H24B4QsdV2EXR2hf",
  "key9": "TJ1CKiBtJieU9aPtrwHeAv5cyN1s7k9YKLzfx42Fe8XZGiGWF1H7XJkmp6xjzz27L5GGA7MVWzaAqYXYQEnQNMA",
  "key10": "2x1JgVQPYM9tC8XZbQ3DB6joV7vDc6YuVaGsWJaAMGnC8cYXZkdPhDpqMtQjze7TvoqoqxrrWFVn3xQa47Am41Fj",
  "key11": "SgdWmv51GmiU6wNVAbFoDdYEVZkmX63Pn2wdNUdQ74Tn68qZpTi1xdCtNG45HXrdPNZoZVi3AvuZoCXsVQtsye4",
  "key12": "28qZYqamCBmSkjQYgAbbNxrCabPCk2TdHNM7mY4kSYqnVevXo5UJK8SaqrgJcAkdPMJpTn6Ba12WTxETE1X1TVdH",
  "key13": "5JQFQK6UQFG8BBEppyCPPaGCwk4gxuTfRMhC4D6HZhZuVcQJ716gBRzvVHs4C1MMyA4QVw9j6wkoS4pAgdNCsp1q",
  "key14": "3ySViDZWwBrdvnkhViNjH6pfdA92AJS2B2Bv8Fxa74WaLJ3uJin46U6UH9i1NxLS4DcqY49hS7bXu9JoysjHgLTm",
  "key15": "5rzNDs4TxdxjtWTrYuBgfZctuzrwEBWLDRAv1RjhbMfx6LRmYEQz8GkDq98G2PCeu43S9uJeLw1SWY3bv7sorFQP",
  "key16": "5EoQfauqoVnCrMiXnM7fcGvBbHpow9WHKZgafimBRHyMpvZEh5CDR7u69uoyk4pneXEq6XRppaw7CAecKxYT4TwX",
  "key17": "5ZG3Ch2vuSFcMa5fXQy6dY8numX5N1M2XfdkyN9Eodji53H3fuBosYMZJnyNAq1QBKvuiQyutiJcAmaGery17Hfy",
  "key18": "3JZPBCP2agLUAGF3ozNFgekG2ztbu5zjEmjGfjKq4f24tYA34G9MYLxCUcx3T7jnLUwvhRjwwu7UraJrvzFm9uFB",
  "key19": "4URdZUTLNmqFhupPsCYoGq2SSAqF7hEcrHJGy4FctVWWCUpa1vX66x5ydPvQiJxQ2TyztDZDdVZ51DgYZq3aUZB4",
  "key20": "4vEoZaETZnX4rsKDxcjai7KJ2h6oNmLUvguwxG2EVoEXbnkLoWVeAWHXQdbefcZn1h7RVo4ZnuDHsuN7Rg73pYpQ",
  "key21": "23AxT2H3GJDNrSuBnHaKK2pVvoZ6CyfFYpXuFhQidNgdD14M7D19BJMQd2mcZUdzsVuEr5DR8PcJjAKFoCWqXthT",
  "key22": "31uYsHNmyuiVnoz2tT5JVFDvCgWZYaBPJAFecrRfzkaDxcS9fWLcqzJ4i6s5DuWXvgDKrPnELuNWAMvHWfGQ58NK",
  "key23": "5uQzdhn3PFvdBg9zyMDmxccrFwWVX6Gh6BHMqDg2g5D9iPzSe8KnpSyfBVP9BRJu5UcTHU5ZL5WLD6xkRbUrbcia",
  "key24": "3Jf7Nbx7HJEAxN46kQhdYXmxiU57tKT2x3FswsWaNnzH5Mikiue3nDLUJmUTuNxypXv6WNM2fUx121BHzeha3pzZ",
  "key25": "3smfgK5pu9omBU281qHPAhiu9tQ6uhKkpPKBes8iwpGoJTWrCScxWkJoKwmwVZjSJSpmnhJgrUykbeb7UXPouM4h",
  "key26": "667R5er7WxU6bpmcQUptxfdrgqbDD81EbRuPuUya3CNT95tQfvXFzXxBhm2Gs6QajQ7iSUGgxrdjpCuXBSH5vH5K",
  "key27": "HWTjA4AwR1NNkCvPfqKGSH9Y5deXVTX9cLcDawoJHTTNUVzUCaVXV5tob4idcAywDJfXerike639txLu9DoLzHz",
  "key28": "3cknUSY9SN87W6vMQPwCnPs8quGzR7VwGtT9KtSJfJj5chT3gEiminJ3TDNnCardBHDkb4bwgqAqVEjpXJwcsKtL",
  "key29": "3xuaWBoQhffgS8JQbJuXvrrr8J9phgMzkT9aLQ62ztN3RRFfU42iiANR3ci2aRXCprdhjj1sqC5WAfXRthZYRWcf",
  "key30": "3tTM2kRNKrCsLk3XLGP9ewuaLycDoL81NbLPMSw63mAJ17h3EyDcs1T3HtYPSywNHba7Ss3yyYAsU6yHMD9cispG",
  "key31": "4yKMUvXNa6Hwskjf91NSufFy88MRTqEHtcRvQfRELksNtxHzyWZgVigPrHYfQrnP4ddmEC3uc45Kq7viTtDQWnMk",
  "key32": "3Y8Ri5yLm9xvRvXFfubtwwgQEXjfKC4v99CTbpZy7E9GpJaZ3ytuYgoG75PyU3cX3TTQC3uXyx5cKypmf3DUwxhC",
  "key33": "329FK4nhANj192poMTyC8TkWzkcuckRVYxpUTd3RFzZofRsMTPKt5yeaPujCbiHcpWqNQq3ySfZdvp3yM6jpMwiB",
  "key34": "31suUbrbPtTVg2JwH8aMvSRVMWqYBWtz4HsBTeUBMXJ4kBymGDXXGNSvUDhNzbYq67PTQigRhqCECbXqDhE2jHEg",
  "key35": "mBJPiafNs47iVqSpeM1NrE8XCnQzcwmu1vKxwZntXN9H4tf8gfSiqQbW9DXb5SJMxjt1McjFWsAvZU8D6Mo9coG",
  "key36": "39XpvFqtCN4N2MNwMmenQ4kst3EZyQxQAtj2GvaGWtJ3gypyaj9i8GwMGUkU6JtGqQoJvXojnrdw9zzkQZ4Mo1pL",
  "key37": "4xtLMjAoGPcjHi7x21b3GiDJytLv1SSKYAmYYh5r3CetDD7zgykXEX3u6cLg4MjrR8g7vmatGPLVXwEF4AsfCCLj",
  "key38": "5vNWd7rSfQeZW8WSjQ69cM7jAyJu6nqKSAVPSZU978o6Zbgkj3F4iPUp9iMf82JMzt1o5ifBgVEeYEtrB6RSU14F",
  "key39": "4RcRmxPdpvhdFcX3rChTKETX5js32DS4sDvz7QkVYqtGHhUWJ3EHMgXp6XR9e8tPp4kdHzGY8Jh8FRQutngB6wTx",
  "key40": "d3UikRLn32juNECA5PPTTfNgZuD6TTxgCvu4F5hChhzHeAJyo5JGGjhE1e5R1Jt8SoiYftn4mPJxv5EHdoUu6q6",
  "key41": "3LyFe3Fdep8ufaGP1LdG59MPJVPGnBjXWmQ3yi32u3G8RgA3R3mXBT5dWtwgGAHHzeU2v1y2y49r4bcdeGQo6H1r",
  "key42": "3wfQdv7yPEWKsokKdpRhVMBRhUBfaL2yLomdcy9tV7Dyu8WDtt9VW5X2HHCDU2SafYbuhfUgUqCxNY9hgJVxY6c9",
  "key43": "2qKvhuCttWKBhAcJGEya42zCY4vhBvkjrJFFTaf4onbJ1ru497FBx2MPvJ8kxspjCdJGT4DpH4VF9Cpijp2eAdwK",
  "key44": "2NZVxebaWYKR9CS11JG1WzJPSRbMbsBHJG34QHofsNYCrLvkvwtCxHDGo18Wr2NNJSTC2UQMyGk1wwGRbLenMMPS",
  "key45": "2s7wnoKstU2g8xjvUoqhU6eriiANJznvi4XXuGcLvaxbrkeeN3ajXGzphjkCHkeNNAMyZHxigRdDKaVTvoBUk4ng",
  "key46": "3omVXtkFZWsGCMr3M5cuX7HfBYjn1QGqWAzMNBZfJDiBtBxnYsWNWWo2n3cq4EcfvGWioiTpN1fRP41tDXtUcUXx",
  "key47": "2xSrCfXTscvaJ7KtVoPc7j5R6TpNu39joLXd6ojL1tZfjXoEAbRnPjRuzXz6BvBxqMZ4HGw5xyNHKWxRA4dojRJz",
  "key48": "4jCjTVNqNb7H3aqkWwWmb8prHDD8w1ucsxg4Bccf38ZY1uJYXEdbc3155VsYrR8RShcA48prPuhd85TGzSKRZ1wg",
  "key49": "3ffe8opK3CLhXJ5beSCyix6y1HCLssdWDJ5DgVQhDiLsZyDtKNvKEzdeKufXPqXdPtr4aY39nMxwxURSXLYPoD2F"
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
