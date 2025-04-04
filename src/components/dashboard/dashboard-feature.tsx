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
    "2WgQwWhVmc99H5kUc9Tmtfze7Q8GV2yhwoMjV8a1q6UQUvDMKEZgusevZhUqdn2NhVexHgmAUsu9w6FhmAEFB4Pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZFeRwVkRrTqoMrinFU67w1rcr1vLGNBrpnWdNx4wjjfiTsJd5oR4pvRGXKTHfouHLfcsJct8wsNHswdtHMqMcar",
  "key1": "23xMgLe6JJLYCLky74Jo3FQR8RwFB6GReQEfwKWTPm2MWrAjnmmzsrhFTzBuAymJaTWCAJGgmrtvzREtAmbcd7sJ",
  "key2": "2bdsuXYu6hHPV7sEMQNnA2rHwKhfcEJee1Yu2sNxrTuXaQGHd4n5WbhmY7a54dPLzUMSyMv5GibXv2R65jn32XZ",
  "key3": "2ZkSKof6wM5npWFSLukZvhGFPxP9YT6Djm8LVoDma51TGB2hbuPkxBo6xGr6vbBRp1dFHoiQxk1ihjxthcP8rsu6",
  "key4": "WMyLLz87RLzv941dw3uAdVuqnwUQiWt5wwDkPcrAuc76Tq9BoEiCABFgH9hP6AEohWgDCCTFRLhcm9gJ7MMgRsB",
  "key5": "2Jzv66ekdYgQkRc9SfnPxjVv3bbAeXvSFHVpzWmtoStjibun8WTBgeReiTLTde2sEyY7beUbNGLqKN88qRCf35i6",
  "key6": "9G4TiknnJb2gejD3WGZPao9FT28PTQ8MzJCzhbR2ZcRGd3N6YwpH6gRfbnP1RvKR9D515ZBZjSBJHiuP2ZvoCeP",
  "key7": "3akdMNH9YtBgPH6nLt8cV9esdT2Rckhe4srC6a2GGaTQ976112dvCsbpV7rC346zYShDEMr5AFgkeEbWkpuZn9Tm",
  "key8": "3qQc3vL9NkkxPrYvjPLwgniygvADTYdvCC6JW6MMqrrR1stCmj5DisB5jcbBVFBYrC1TPKM5ijdqqauMJVBc1JzJ",
  "key9": "2j29Rsz2EtYEdwDhveppKAeEYZM9i1ymzf7pxLDzP5hjDrmTCscXKxbSWYRCeuot9QGT7Lt9USQBX9RArVj7Ury8",
  "key10": "55RvcYyG1SRE6TWw63KPUoEg6tcGVLfjU1wj2mjYfWuE8ZRznv8Yi4mSvQ4GmKzUtE6kz3egfpEGna9TCUu1ASmK",
  "key11": "eBE8ThxV3M7woHaUNGVxiBonV6hAJY5yvMVpLzx3YVjPXsHGu4Zhy6p1dcR64Turw3du8ghMGDuLSRfFGBhZErz",
  "key12": "2W85iuXabeDvwoXEXvcNdyHRkqFPJmcpQwNQuGW4pSutQcW7QYpVmbgPoZhQUr64kuZAzoMw7yZVVPHB7PqURBFh",
  "key13": "2tWE9pzHuGy6WynqDRi5C2jrDTHyyZt5kUhcD3uHvT7CVnixsz5S3QGq7yZ5JvsWrRfC7jvZCZQoahmxi6smL2DP",
  "key14": "3HNHfFf849uosHE7UhVekzSoggCfzwmQ4EtpqJE2WYBjADMWBRuV19c35iQK1aeQ43N1C1s8CsTQ1FnuPUK7BgW9",
  "key15": "H4UmfyJnYWMMXDygKg7tztg8iZ5yNVhXuukRjRMBu1Gq9Eie1S6VtRbrtn1fB99myFA5Z73jMiv46jEh37ibj9G",
  "key16": "5cNpMGt7LGkXPEfKbjzdRLMPY3BFrkAEVxvrLvU2dJLyT1LJF5q9NwznVn8bQtpZcJke8BKUt8crzGkYSVjoEL7F",
  "key17": "xyKD6j3SJbvVnzFxVDx9ETMBzPoLhTDJN34ye4VUq4umg29PCn88oPrMuDjzHwebfYAbjJTnmKDKQBUVAipWN1U",
  "key18": "3yDQo2Tnqr6dvVNKGFGDYQ25w2is2G2kjmfjr7Zcdr1gG39Hf3UvojpxaEuRj7yxPjPEpZQz11S7VFjY5mQjs3Bc",
  "key19": "2LUnYNvoofJnwmFjFotmj4n5vBnAt7L4kUBcndiAtJuZPK16h5xVLZhCxR1kCpS72qPAnof2hjXX9BtzXLpnTUuU",
  "key20": "2wLwK9RBPytusJU72oh1YPWMkkfNz9dF16BFWvSwebUoNmaGRpwPS6Kg8rX9EpV2FjzqP6oGTa8ivZGPp793GwB1",
  "key21": "65CmJ6dYzQHsnC2BRYYQCuzsVRdiwgaNVAtzh8XxaG8tGb12iPLRDYAbfeDM8VpuPMvFk2xWyrissDRtLBwsT3Ho",
  "key22": "4oNPk7HiQCpDnNC9DQugchRywe38Pr6eNEWKGPQX4hDk88nw6uuo22JvGjUiC2L8U1vqcZe9jft2VDnbje6uxBmb",
  "key23": "5mX53XDFhzqxxjBdEcY2MWKaQCT9c5AngUpAByxoChGrU322e2RP2MuBLkC6nywdqwubKzbYurK5i7a4Hf1X3qbE",
  "key24": "iBtgfSZgWS4Nh9LmrADT4Y5BritNNdhc7tPWRevt1yWzh1wSJF9onitaE1N2iNkSjaf8KhD82xcHL1ZcPisAz8v",
  "key25": "5SDto9eWTYPPSzrxQ7N9tK7wEp43AcmdRfKaiyqyUnxtcbhRdSSaXd8sggXA693pN8aWb83jeXW5VaUKjoyYuuRz",
  "key26": "3fTyykvX5xm2iWUSQAryyzQkvVQbDyGMjhVY4Qe4J7PFQksD61mY3czCWhNoF1Z3KK14hooL6gA7ZFhofLkoT223",
  "key27": "29K19LK6FeoLZgpt8xNyx6QXAmjFcSqTWwB1zpERMJYai79PMTV111uk43YVE8jmUHqQ8SBbbuAF1yEiSmQpvUSk",
  "key28": "3MNZPhYQ8HJM3JicxeEfcMeKXs24DizJEp5TQxY1CrnCgr3r8dUFmeSXUAespDoDG49Yv3muN63dLYNNeU5tfH6t",
  "key29": "LvmN8B3fB9CFdvX7mS93aCSAygbBZfN4FfuASwxGPvqUvfwLJdWiicF4Am1MpL5W8wmjqH3onR45E33BXTdUfHz",
  "key30": "53Gjz6zQoS84eZziLRe4F2mpj6KQPfJAQZfbjwURZNWpx8rfwwFHmL1K7aWmmhCoDyqqXk342rLHmzxtaqv9F6uG",
  "key31": "4t2fNY24zjxdQQPtuVZ91e4tTB16NZMutQ4GiYpMtpJi47ZNyhRe3tLocN69NaxhC4KGSaJjFrdEb9KvGvkuRfLr",
  "key32": "2N458S7Tusrhc66ka1YHa96pYF8jKhCiSpecKK8pvCUkrDMVpxBaFarPrQd5xtJJEosPVhTLxoQ9VohipSyykcjA",
  "key33": "3DamdhGaoT3trceq7wCofbuogaYhFUuKR3usrka8RNPFVRGSytsHKawdqcmE4QV6LsFkXtGjwAw4PHMFK5EPpzKV",
  "key34": "4DHm7sBb86uDnn9vWj1vb3JT8i1hvEKc45Jt1WGensuSbSsSquTcif3AN2mgJZZBpdMFawt5p4KTR9pSa8sCtYEG",
  "key35": "5vcXxPct4zopHPXK7GcVFoijEZ2awcV2bpUqitCdaccsCpBzHuC54hnyd7g2ZYjgSD9fEtYPFrLHrzfpXk3m6S9N",
  "key36": "5w2y7V2Bytnm9e46TSz4eChJpVojnXxbjFJetbCZRC2jR1viFq2i4A8XAe8732xthjSbkcJZwLgiZqaTN2cS2pJZ",
  "key37": "4AE25j6FDgd6k1uJJTsk196mLTrVZoheRmQZCM37oKWgHxMyfteecrMKRnNvY8VGQzGqSwYKdJYFiWSjVY35xX65"
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
